#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { program } from 'commander';
import { analyzeContent } from './analyze.js';
import { formatText, formatJSON } from './formatter.js';
import type { CheckOptions } from './types.js';

function loadEnvFile(filePath: string): void {
  if (!existsSync(filePath)) return;
  const lines = readFileSync(filePath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (key && !(key in process.env)) process.env[key] = val;
  }
}

const cwd = process.cwd();
loadEnvFile(join(cwd, '.env.local'));
loadEnvFile(join(cwd, '.env'));

const VALID_MODELS = ['claude-opus-4-7', 'claude-sonnet-4-6'];

program
  .name('humanitas-check')
  .description('Audit AI system prompts against Magnifica Humanitas (Leo XIV, 2026)')
  .version('0.1.0')
  .argument('[file]', 'Path to the system prompt or agent config file to audit')
  .option('--stdin', 'Read content from standard input')
  .option('--format <format>', 'Output format: text or json', 'text')
  .option('--model <model>', 'Claude model to use', 'claude-opus-4-7')
  .action(async (file: string | undefined, cmdOpts: Record<string, string>) => {
    const format = cmdOpts['format'] as CheckOptions['format'];
    if (!['text', 'json'].includes(format)) {
      console.error(`Error: --format must be "text" or "json", got "${format}"`);
      process.exit(2);
    }

    const model = (cmdOpts['model'] as string).toLowerCase();
    if (!VALID_MODELS.includes(model)) {
      console.error(`Error: --model must be one of: ${VALID_MODELS.join(', ')}`);
      process.exit(2);
    }

    if (!process.env['ANTHROPIC_API_KEY']?.trim()) {
      const hasEnv = existsSync(join(cwd, '.env')) || existsSync(join(cwd, '.env.local'));
      if (!hasEnv) {
        console.error('Error: no .env or .env.local found in current directory — run humanitas-check from your project root');
      } else {
        console.error('Error: ANTHROPIC_API_KEY not set in .env/.env.local or environment');
      }
      process.exit(2);
    }

    let content: string;
    try {
      if (cmdOpts['stdin']) {
        content = await new Promise<string>((resolve, reject) => {
          const chunks: Buffer[] = [];
          process.stdin.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
          process.stdin.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
          process.stdin.on('error', reject);
        });
      } else if (file) {
        content = readFileSync(file, 'utf-8');
      } else {
        console.error('Error: provide a file path or --stdin');
        program.help();
        process.exit(2);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Error reading input: ${message}`);
      process.exit(2);
    }

    if (content.length > 50_000) {
      process.stderr.write(`Warning: input is ${Math.round(content.length / 1024)}KB — large inputs may exceed API token limits\n`);
    }

    const opts: CheckOptions = { format, model };

    try {
      const report = await analyzeContent(content, opts);
      const output = format === 'json' ? formatJSON(report) : formatText(report);
      process.stdout.write(output + '\n');
      process.exit(report.verdict === 'pass' ? 0 : 1);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Error: ${message}`);
      process.exit(2);
    }
  });

program.parse();

#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { program } from 'commander';
import { analyzeContent } from './analyze.js';
import { formatText, formatJSON } from './formatter.js';
import type { CheckOptions } from './types.js';

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

    const model = cmdOpts['model'];
    if (!VALID_MODELS.includes(model)) {
      console.error(`Error: --model must be one of: ${VALID_MODELS.join(', ')}`);
      process.exit(2);
    }

    if (!process.env['ANTHROPIC_API_KEY']) {
      console.error('Error: ANTHROPIC_API_KEY environment variable not set');
      process.exit(2);
    }

    let content: string;
    try {
      if (cmdOpts['stdin']) {
        content = readFileSync('/dev/stdin', 'utf-8');
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

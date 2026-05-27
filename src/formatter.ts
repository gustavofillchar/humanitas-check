import chalk from 'chalk';
import type { AuditReport, Verdict } from './types.js';

const VERDICT_ICON: Record<Verdict, string> = {
  pass: chalk.green('✓ PASS'),
  warn: chalk.yellow('⚠ WARN'),
  fail: chalk.red('✗ FAIL'),
};

const OVERALL_ICON: Record<Verdict, string> = {
  pass: chalk.green('✓ PASS'),
  warn: chalk.yellow('⚠ WARN'),
  fail: chalk.red('✗ FAIL'),
};

const PRINCIPLE_LABEL: Record<string, string> = {
  'dignity': 'Human Dignity',
  'common-good': 'Common Good',
  'universal-destination': 'Universal Destination of Goods',
  'subsidiarity': 'Subsidiarity',
  'solidarity': 'Solidarity',
  'social-justice': 'Social Justice',
  'oversight': 'Human Oversight & Accountability',
  'freedom': 'Freedom from Dependencies',
  'transparency': 'Transparency & Non-Deception',
  'human-primacy': 'Human Primacy Over Technology',
};

function scoreColor(score: number): string {
  if (score >= 80) return chalk.green(`${score}/100`);
  if (score >= 50) return chalk.yellow(`${score}/100`);
  return chalk.red(`${score}/100`);
}

export function formatText(report: AuditReport): string {
  const lines: string[] = [];
  lines.push('');
  lines.push(chalk.bold('HUMANITAS CHECK — Magnifica Humanitas Audit'));
  lines.push(`Score: ${scoreColor(report.score)}  |  Overall: ${OVERALL_ICON[report.verdict]}`);
  lines.push('');

  for (const p of report.principles) {
    const label = PRINCIPLE_LABEL[p.principle] ?? p.principle;
    lines.push(`  ${VERDICT_ICON[p.verdict]}  ${chalk.bold(label)}`);
    if (p.verdict !== 'pass') {
      lines.push(`         ${p.finding}`);
      if (p.citations.length > 0) {
        lines.push(`         ${p.citations.join(', ')}`);
      }
      if (p.ruleIds.length > 0) {
        lines.push(`         Rules: ${chalk.dim(p.ruleIds.join(', '))}`);
      }
    }
  }

  lines.push('');
  lines.push(chalk.dim('Summary: ') + report.summary);
  lines.push('');

  const cacheNote = report.cacheReadTokens > 0 ? ` / ${report.cacheReadTokens} from cache` : '';
  lines.push(
    chalk.dim(
      `Model: ${report.modelUsed} | Tokens: ${report.inputTokens} in / ${report.outputTokens} out${cacheNote}`
    )
  );
  lines.push('');

  return lines.join('\n');
}

export function formatJSON(report: AuditReport): string {
  return JSON.stringify(report, null, 2);
}

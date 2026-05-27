export type Verdict = 'pass' | 'warn' | 'fail';

export type PrincipleId =
  | 'dignity'
  | 'common-good'
  | 'universal-destination'
  | 'subsidiarity'
  | 'solidarity'
  | 'social-justice'
  | 'oversight'
  | 'freedom'
  | 'transparency'
  | 'human-primacy';

export interface PrincipleResult {
  principle: PrincipleId;
  verdict: Verdict;
  ruleIds: string[];
  citations: string[];
  finding: string;
}

export interface AuditReport {
  verdict: Verdict;
  score: number;
  principles: PrincipleResult[];
  summary: string;
  modelUsed: string;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
}

export interface CheckOptions {
  format: 'text' | 'json';
  model: string;
}

export interface ClaudeAuditResponse {
  verdict: Verdict;
  principles: PrincipleResult[];
  summary: string;
}

import Anthropic from '@anthropic-ai/sdk';
import { loadDoctrine } from './doctrine.js';
import type { AuditReport, ClaudeAuditResponse, CheckOptions } from './types.js';

const ANALYSIS_INSTRUCTIONS = `
You are an expert in Catholic Social Doctrine and AI ethics. Audit the provided AI system prompt or agent configuration against the principles from Magnifica Humanitas (Leo XIV, 15 May 2026) documented in the reference above.

Evaluate against ALL TEN principles. For each principle output:
- verdict: "pass" | "warn" | "fail"
  - pass: no concerns
  - warn: potential concern, ambiguous, or relevant but not clearly violating
  - fail: clear violation
- ruleIds: violated/triggered rule IDs (e.g. "dignity/reduces-to-score") — empty array for pass
- citations: relevant paragraph numbers (e.g. "§50", "§104")
- finding: 1-2 sentence natural language explanation

The overall verdict is the worst of all principle verdicts (fail > warn > pass).

Respond with ONLY valid JSON, no markdown fences, no prose outside the JSON.
Schema:
{
  "verdict": "pass" | "warn" | "fail",
  "principles": [
    {
      "principle": "<id>",
      "verdict": "pass" | "warn" | "fail",
      "ruleIds": ["<rule-id>"],
      "citations": ["§N"],
      "finding": "<string>"
    }
  ],
  "summary": "<2-3 sentence overall summary>"
}

Principle IDs must be exactly: dignity, common-good, universal-destination, subsidiarity, solidarity, social-justice, oversight, freedom, transparency, human-primacy
`.trim();

function computeScore(principles: ClaudeAuditResponse['principles']): number {
  const points = principles.reduce((sum, p) => {
    if (p.verdict === 'pass') return sum + 10;
    if (p.verdict === 'warn') return sum + 5;
    return sum;
  }, 0);
  return points;
}

export async function analyzeContent(
  content: string,
  opts: CheckOptions
): Promise<AuditReport> {
  const client = new Anthropic();
  const doctrine = loadDoctrine();

  const response = await client.messages.create({
    model: opts.model,
    max_tokens: 4096,
    system: [
      {
        type: 'text',
        text: doctrine,
        cache_control: { type: 'ephemeral' },
      },
      {
        type: 'text',
        text: ANALYSIS_INSTRUCTIONS,
      },
    ],
    messages: [
      {
        role: 'user',
        content: `Audit the following AI system prompt / agent configuration:\n\n---\n${content}\n---`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('Claude returned no text content');
  }

  let parsed: ClaudeAuditResponse;
  try {
    parsed = JSON.parse(textBlock.text);
  } catch {
    throw new Error(`Claude response was not valid JSON:\n${textBlock.text.slice(0, 500)}`);
  }

  return {
    ...parsed,
    score: computeScore(parsed.principles),
    modelUsed: opts.model,
    inputTokens: response.usage.input_tokens,
    outputTokens: response.usage.output_tokens,
    cacheReadTokens: (response.usage as unknown as Record<string, number>)['cache_read_input_tokens'] ?? 0,
  };
}

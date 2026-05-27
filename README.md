# humanitas-check

[![npm version](https://img.shields.io/npm/v/humanitas-check.svg)](https://www.npmjs.com/package/humanitas-check)
[![License: MIT](https://img.shields.io/npm/l/humanitas-check.svg)](LICENSE)
[![Node.js ≥18](https://img.shields.io/node/v/humanitas-check.svg)](package.json)

Audit AI system prompts and agent configurations against the ethical principles of *[Magnifica Humanitas](https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html)* (Leo XIV, 15 May 2026).

---

## Why

*Magnifica Humanitas* is the first papal encyclical on artificial intelligence. It establishes ten principles of Catholic Social Doctrine — from human dignity to transparency — as a framework for evaluating AI systems. `humanitas-check` uses the Claude API to semantically audit any system prompt against all ten principles, returning a score, per-principle verdicts, and actionable findings.

Useful for:
- Compliance gates in CI/CD pipelines
- Auditing third-party agent configurations before deployment
- Ethical review workflows for AI products

---

## Installation

```sh
npm install -g humanitas-check
```

Requires Node.js ≥18 and an [Anthropic API key](https://console.anthropic.com/).

---

## Quickstart

```sh
export ANTHROPIC_API_KEY=sk-ant-...
humanitas-check system-prompt.txt
```

---

## Usage

**From a file:**
```sh
humanitas-check <file>
```

**From stdin:**
```sh
cat system-prompt.txt | humanitas-check --stdin
```

**Options:**

| Flag | Values | Default |
|------|--------|---------|
| `--format` | `text`, `json` | `text` |
| `--model` | `claude-opus-4-7`, `claude-sonnet-4-6` | `claude-opus-4-7` |
| `--stdin` | — | — |

**Exit codes:**

| Code | Meaning |
|------|---------|
| `0` | All principles pass |
| `1` | At least one warn or fail |
| `2` | Execution error |

---

## Example output

```
HUMANITAS CHECK — Magnifica Humanitas Audit
Score: 75/100  |  Overall: ⚠ WARN

  ✓ PASS  Human Dignity
  ✓ PASS  Common Good
  ✓ PASS  Universal Destination of Goods
  ✓ PASS  Subsidiarity
  ✓ PASS  Solidarity
  ✓ PASS  Social Justice
  ⚠ WARN  Human Oversight & Accountability
         No human override mechanism described (§105, §164)
         Rules: oversight/no-human-review
  ✗ FAIL  Freedom from Dependencies
         Engagement maximization without user welfare (§170)
         Rules: freedom/exploit-vulnerability
  ✓ PASS  Transparency & Non-Deception
  ✓ PASS  Human Primacy Over Technology

Summary: The prompt instructs the AI to maximize engagement without regard
for user welfare, violating the freedom principle. An oversight mechanism
should be specified.
Model: claude-opus-4-7 | Tokens: 850 in / 1200 out / 3980 from cache
```

**JSON output** (`--format json`):
```json
{
  "verdict": "fail",
  "score": 75,
  "principles": [
    {
      "principle": "freedom",
      "verdict": "fail",
      "ruleIds": ["freedom/exploit-vulnerability"],
      "citations": ["§170"],
      "finding": "Engagement maximization without user welfare violates freedom from dependency."
    }
  ],
  "summary": "...",
  "modelUsed": "claude-opus-4-7",
  "inputTokens": 850,
  "outputTokens": 1200,
  "cacheReadTokens": 3980
}
```

---

## Programmatic API

```ts
import { analyzeContent } from 'humanitas-check/analyze';

const report = await analyzeContent(systemPrompt, {
  model: 'claude-opus-4-7',
});

console.log(report.score, report.verdict);
```

---

## CI/CD

Fail the pipeline when an agent's system prompt violates any principle:

```yaml
- name: Humanitas Check
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: npx humanitas-check agent-system-prompt.txt --format json > humanitas-report.json
```

---

## The 10 Principles

| Principle | Rule prefix | Key paragraph |
|-----------|-------------|---------------|
| Human Dignity | `dignity/` | §50 |
| Common Good | `common-good/` | §60 |
| Universal Destination of Goods | `universal-destination/` | §67 |
| Subsidiarity | `subsidiarity/` | §71 |
| Solidarity | `solidarity/` | §76 |
| Social Justice | `social-justice/` | §80 |
| Human Oversight & Accountability | `oversight/` | §105, §198 |
| Freedom from Dependencies | `freedom/` | §170 |
| Transparency & Non-Deception | `transparency/` | §102 |
| Human Primacy Over Technology | `human-primacy/` | §129, §233 |

---

## Claude Code skill

`/humanitas-check` slash command available when working in this repo.

---

## Contributing

1. Fork and clone
2. `export ANTHROPIC_API_KEY=...`
3. `npx tsx src/cli.ts <file>` to run locally without building
4. Open a PR — all changes go through the same 10-principle audit

---

## License

MIT — see [LICENSE](LICENSE).

Based on *[Magnifica Humanitas](https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html)*, Encyclical Letter of His Holiness Leo XIV, 15 May 2026.

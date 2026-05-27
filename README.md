# humanitas-check

Audit AI system prompts and agent configurations against the principles of the papal encyclical *Magnifica Humanitas*.

## What it is

*Magnifica Humanitas* (Leo XIV, 15 May 2026) establishes ten principles of Catholic Social Doctrine that govern the ethical development and deployment of artificial intelligence. This tool uses the Claude API to semantically analyze AI system prompts and agent configurations, checking each prompt against all ten principles and returning a score from 0 to 100 along with a per-principle verdict and actionable findings.

## Installation

```
npm install -g humanitas-check
```

## Setup

```
export ANTHROPIC_API_KEY=sk-ant-...
```

## Usage

Audit a file:

```
humanitas-check <file>
```

Pipe content via stdin:

```
humanitas-check --stdin
```

**Flags**

| Flag | Values | Default |
|------|--------|---------|
| `--format` | `text`, `json` | `text` |
| `--model` | `claude-opus-4-7`, `claude-sonnet-4-6` | `claude-opus-4-7` |

**Exit codes**

| Code | Meaning |
|------|---------|
| `0` | Pass |
| `1` | Warn or Fail |
| `2` | Error |

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

Summary: The prompt instructs the AI to maximize engagement without regard for user welfare, violating the freedom principle. An oversight mechanism should be specified.
Model: claude-opus-4-7 | Tokens: 850 in / 1200 out / 3980 from cache
```

## The 10 Principles

| Principle | Rule Prefix | Key Paragraph |
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

## CI/CD

```yaml
- name: Humanitas Check
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: |
    npx humanitas-check agent-system-prompt.txt --format json > humanitas-report.json
    cat humanitas-report.json
```

## Claude Code skill

The slash command `/humanitas-check` is available when working in this repo.

## Source

Based on *Magnifica Humanitas*, Encyclical Letter of His Holiness Leo XIV, 15 May 2026.

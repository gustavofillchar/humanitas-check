# humanitas-check

CLI + Claude Code skill to audit AI system prompts against Magnifica Humanitas (Leo XIV, 15 May 2026).

## Architecture

- `src/types.ts` — shared types (PrincipleResult, AuditReport, CheckOptions)
- `src/doctrine.ts` — loads docs/encyclicals/principles-reference.md at runtime
- `src/analyze.ts` — Claude API call; doctrine cached via cache_control
- `src/formatter.ts` — text (chalk) and JSON output formatters
- `src/cli.ts` — commander CLI entry point

## Key decisions

- Doctrine context is docs/encyclicals/principles-reference.md (~16KB), NOT the full 3110-line encyclical
- cache_control on first system block (doctrine) — saves ~4000 tokens per call after first
- Exit codes: 0=pass, 1=warn or fail, 2=error
- Default model: claude-opus-4-7
- No comments in source code

## Run locally (before build)

```bash
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env.local
npx tsx src/cli.ts meu-prompt.txt
```

## The 10 principles

dignity, common-good, universal-destination, subsidiarity, solidarity, social-justice, oversight, freedom, transparency, human-primacy

Source: docs/encyclicals/principles-reference.md

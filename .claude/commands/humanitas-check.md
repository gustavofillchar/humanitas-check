---
description: Audit a system prompt or agent config against Magnifica Humanitas (Leo XIV, 2026)
---

If the user provided a file path as argument, run:
`npx tsx src/cli.ts $ARGUMENTS`

If the user pasted content directly (no file path):
1. Write content to /tmp/humanitas-audit-input.txt
2. Run: `npx tsx src/cli.ts /tmp/humanitas-audit-input.txt`
3. Delete /tmp/humanitas-audit-input.txt

For any fail or warn findings: explain the specific violation and suggest concrete remediation grounded in docs/encyclicals/principles-reference.md, citing the exact paragraph numbers from the encyclical.

If exit code 2 (error): diagnose root cause (missing ANTHROPIC_API_KEY, unreadable file, etc.) and guide the user to fix it.

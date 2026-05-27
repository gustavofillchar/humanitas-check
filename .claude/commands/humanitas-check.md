---
description: Audit a system prompt or agent config against Magnifica Humanitas (Leo XIV, 2026)
---

Run humanitas-check on the input. Detect the right command:
- If `src/cli.ts` exists in the current directory (running inside the humanitas-check repo): `npx tsx src/cli.ts $ARGUMENTS`
- Otherwise (installed as a package): `npx humanitas-check $ARGUMENTS`

If the user provided a file path as argument, run the command with that path.

If the user pasted content directly (no file path):
1. Write content to /tmp/humanitas-audit-input.txt
2. Run with /tmp/humanitas-audit-input.txt as the argument
3. Delete /tmp/humanitas-audit-input.txt

For any fail or warn findings: explain the specific violation and suggest concrete remediation, citing the exact paragraph numbers from the encyclical (§N format).

If exit code 2 (error): diagnose root cause (missing ANTHROPIC_API_KEY, unreadable file, Node.js version below 18, etc.) and guide the user to fix it.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

export function loadDoctrine(): string {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const candidates = [
    resolve(__dirname, '../../docs/encyclicals/principles-reference.md'),
    resolve(__dirname, '../docs/encyclicals/principles-reference.md'),
  ];
  for (const p of candidates) {
    try {
      return readFileSync(p, 'utf-8');
    } catch {
      continue;
    }
  }
  throw new Error('principles-reference.md not found. Run from repo root or reinstall package.');
}

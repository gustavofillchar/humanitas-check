# Magnifica Humanitas — Document Structure

Encyclical Letter of His Holiness Leo XIV, 15 May 2026.  
Source: `magnifica-humanitas-full-version.md` (2825 lines)

Split into 7 chapter files + 1 synthesized principles reference for humanitas-checker CLI.

---

## File Index

| File | Lines | Content | Rule Relevance |
|------|-------|---------|----------------|
| [00-toc-and-introduction.md](00-toc-and-introduction.md) | 1–269 | Table of Contents + Introduction (§§1–16): res novae, Tower of Babel vs. Nehemiah, building for common good | `context`, `common-good`, `dignity`, `subsidiarity` |
| [01-chapter-one-dynamic-approach.md](01-chapter-one-dynamic-approach.md) | 270–604 | Chapter 1 (§§17–45): Church social doctrine history (Leo XIII → Francis), methodology, see-judge-act | `methodology`, `discernment`, `historical-context` |
| [02-chapter-two-foundations-principles.md](02-chapter-two-foundations-principles.md) | 605–980 | Chapter 2 (§§46–89): **Core principles** — dignity, common good, universal destination of goods, subsidiarity, solidarity, social justice, integral development | `dignity`, `common-good`, `universal-destination`, `subsidiarity`, `solidarity`, `social-justice` |
| [03-chapter-three-technology-dominance.md](03-chapter-three-technology-dominance.md) | 981–1328 | Chapter 3 (§§90–130): **AI-specific** — technocratic paradigm, AI governance, accountability, transparency, transhumanism critique, human primacy | `technocratic-paradigm`, `ai-governance`, `transparency`, `oversight`, `human-primacy` |
| [04-chapter-four-truth-work-freedom.md](04-chapter-four-truth-work-freedom.md) | 1329–1777 | Chapter 4 (§§131–181): Truth, disinformation, dignity of work, unemployment, freedom from dependencies, data colonialism, AI labor supply chain | `truth`, `manipulation`, `human-oversight`, `dependency`, `labor-dignity`, `freedom`, `privacy` |
| [05-chapter-five-civilization-of-love.md](05-chapter-five-civilization-of-love.md) | 1778–2155 | Chapter 5 (§§182–228): Autonomous weapons, lethal AI, non-negotiable human control over lethal decisions, culture of power, multilateralism | `autonomous-weapons`, `lethal-ai`, `accountability-chain`, `power-concentration` |
| [06-conclusion-and-notes.md](06-conclusion-and-notes.md) | 2156–2825 | Conclusion (§§229–245) + all 224 footnotes | `synthesis`, `program-of-action` |
| [principles-reference.md](principles-reference.md) | synthesized | **Humanitas-checker rule map**: 10 principles → rule ID prefixes, key quotes, CLI operationalization | all |

---

## Principles → Rule ID Quick Map

| Principle | Rule Prefix | Primary Source File |
|-----------|-------------|---------------------|
| Human Dignity | `dignity/*` | 02-chapter-two |
| Common Good | `common-good/*` | 02-chapter-two |
| Universal Destination of Goods | `universal-destination/*` | 02-chapter-two |
| Subsidiarity | `subsidiarity/*` | 02-chapter-two, 03-chapter-three |
| Solidarity | `solidarity/*` | 02-chapter-two, 04-chapter-four |
| Social Justice | `social-justice/*` | 02-chapter-two, 04-chapter-four |
| Human Oversight & Accountability | `oversight/*` | 03-chapter-three, 05-chapter-five |
| Freedom from Dependencies | `freedom/*` | 04-chapter-four |
| Transparency & Non-Deception | `transparency/*` | 03-chapter-three, 04-chapter-four |
| Human Primacy Over Technology | `human-primacy/*` | 03-chapter-three |

For full operationalization of each principle into CLI rule behaviors, see [principles-reference.md](principles-reference.md).

---

## Key Paragraphs for Rules Engine

Quick lookup for most-cited paragraphs in CLI rule development:

- **§50** — Dignity is ontological, precedes abilities/wealth/choices
- **§60** — Common good exceeds sum of individual interests
- **§67** — Algorithms, platforms, data = universally destined goods
- **§71** — Subsidiarity requires transparency, participation, recourse in AI
- **§76** — Solidarity + intergenerational + environmental impact
- **§80** — Justice prevents new exclusions from opaque algorithms
- **§99** — AI imitates human intelligence; do not equate the two
- **§100** — Simulated care/companionship risks replacing real relationships
- **§102** — "Neutral/objective" AI conceals designer bias
- **§104** — Every technical tool embodies choices; not morally neutral
- **§105** — Responsibility chain must be identifiable and verifiable
- **§109** — New monopolies of AI; data/compute concentration = injustice
- **§129** — Does AI make life "more human"? (John Paul II test)
- **§164** — Algorithmic decisions must be understandable, contestable, overseen
- **§170** — Platforms exploit vulnerabilities; person as means, not end
- **§173** — Hidden labor: data labelers, content moderators, exploited workers
- **§198** — Lethal/irreversible decisions cannot be entrusted to AI systems
- **§200** — Use of lethal force must remain under effective human control
- **§233** — No AI can create a conscience that discerns good from evil

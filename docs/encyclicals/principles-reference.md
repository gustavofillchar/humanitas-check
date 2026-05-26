---
name: principles-reference
description: Actionable principles from Magnifica Humanitas mapped to humanitas-checker rule IDs
type: reference
---

# Principles Reference for humanitas-checker Rules

This file maps principles from _Magnifica Humanitas_ (Leo XIV, 15 May 2026) to rule categories for the humanitas-checker CLI.

---

## DIGNITY — Human Dignity (dignidade humana)

**Source:** Chapter 2, §§48–53; Chapter 3, §§99–104; Chapter 4, §§170–172  
**Rule IDs:** `dignity/*`

**Core definition:** Human dignity is ontological — it precedes and transcends abilities, wealth, efficiency, or output. It cannot be earned, justified, or revoked. Every person is an end, never a means.

**Key quotes:**
- "Human dignity does not depend on a personʼs abilities, wealth or position in life, nor on the right or wrong choices made; instead, it is a gift that precedes and transcends each person." (§50)
- "Every human person possesses an infinite dignity, inalienably grounded in his or her very being, which prevails in and beyond every circumstance." (_Dignitas Infinita_, cited §53)
- "We cannot consider AI to be morally neutral. In reality, every technical tool embodies choices and priorities through what it measures, ignores and optimizes, and how it classifies people." (§104)
- "Those who design or finance such systems bear a moral responsibility that cannot be ignored." (§170)

**Operationalization for CLI rules:**
- Flag prompts/configs that rank users by "productivity", "efficiency", "value", or "worth"
- Flag system prompts that reduce humans to data points or scores without appeal
- Flag language that treats some populations as expendable or lower priority
- Flag AI systems that make irreversible decisions about people without human review

---

## COMMON_GOOD — Common Good (bem comum)

**Source:** Chapter 2, §§59–64; Chapter 3, §§95–96, 108–109  
**Rule IDs:** `common-good/*`

**Core definition:** The common good is the sum of social conditions allowing all people to reach their fulfillment. It transcends the sum of individual interests. Technology must be evaluated against whether it fosters the good of all or concentrates benefit in few hands.

**Key quotes:**
- "The common good cannot be reduced to a mere list of conditions or institutions. It is not the sum total of individual benefits, nor the intersection of their particular interests; it is a greater good that belongs to everyone." (§60)
- "In a world where data, computational resources and regulatory influence remain in the hands of a few, to speak of the common good means exposing this new form of epistemic, economic and political asymmetry and naming the new monopolies of AI." (§109)
- "It is essential that the use of AI, especially when it touches on public goods and fundamental rights, be guided by clear criteria and effective oversight." (§108)

**Operationalization for CLI rules:**
- Flag system prompts optimizing purely for profit/engagement with no reference to user welfare
- Flag agent configs with no public accountability mechanism
- Flag AI systems that concentrate data control with no redistribution or access policy

---

## UNIVERSAL_DESTINATION — Universal Destination of Goods

**Source:** Chapter 2, §§65–67; Chapter 3, §109  
**Rule IDs:** `universal-destination/*`

**Core definition:** Earth's goods — including digital goods, data, algorithms, platforms, and infrastructure — are intended for all humanity. Private ownership is legitimate but subordinate to this universal purpose. Concentration of AI resources without shared access contradicts this principle.

**Key quotes:**
- "Among the goods that are universally intended for everyone, we must also include new forms of property, such as patents, algorithms, digital platforms, technological infrastructure and data." (§67)
- "To speak of the universal destination of goods means finding ways of ensuring universal access to both technologies and the education needed to use them." (§109)

**Operationalization for CLI rules:**
- Flag AI systems built entirely on proprietary data with no access for affected communities
- Flag configs that restrict use to paying tiers in contexts of essential services (healthcare, education, justice)
- Flag absence of any equity or access provisions in AI deployment documents

---

## SUBSIDIARITY — Subsidiarity (subsidiariedade)

**Source:** Chapter 2, §§68–72; Chapter 3, §§107–108  
**Rule IDs:** `subsidiarity/*`

**Core definition:** Decisions must be made at the lowest possible level — closest to those affected. Higher-level actors (platforms, corporations, states) must not supplant local agency. In AI: transparency regarding algorithms, community participation, and avenues for recourse are required.

**Key quotes:**
- "The principle of subsidiarity requires that such processes not be imposed from above in an opaque and unilateral manner, but instead be directed toward the common good with transparency, accountability and meaningful forms of participation (including independent checks, transparency regarding algorithms, equitable access to data and avenues for recourse)." (§71)
- "Communities and intermediary organizations must not be reduced to passive recipients of decisions made elsewhere; they must be able to contribute to discernment and oversight." (§108)
- "To speak of subsidiarity calls for protecting the ability of communities to make choices and corrections, rather than confining their role to mere oversight after the standards have been set elsewhere." (§109)

**Operationalization for CLI rules:**
- Flag AI systems with no explainability or transparency mechanism
- Flag agent configs with no human-override or appeal mechanism
- Flag opaque decision systems in high-stakes contexts (hiring, credit, healthcare)
- Flag absence of community input / participatory design in system documentation

---

## SOLIDARITY — Solidarity (solidariedade)

**Source:** Chapter 2, §§73–76; Chapter 4, §§173–179  
**Rule IDs:** `solidarity/*`

**Core definition:** Solidarity recognizes interdependence and demands conscious choice to transform it into mutual care. In AI: this includes recognizing hidden labor (data labelers, content moderators), supply chain exploitation, and global inequalities in who trains vs. who is subjected to AI systems.

**Key quotes:**
- "To speak of solidarity obliges us to recognize the hidden, often exploited workers, who sustain algorithmic systems." (§109)
- "A significant part of the digital economyʼs functioning relies on the silent work of millions of people engaged in essential yet largely unseen activities, such as data labeling, model training and content moderation, often involving disturbing material." (§173)
- "Solidarity demands that decisions regarding data, algorithms, platforms and artificial intelligence take into account not only the immediate benefit for a few, but also the impact on all peoples and on future generations." (§76)

**Operationalization for CLI rules:**
- Flag AI documentation with no mention of labor conditions or supply chain ethics
- Flag system prompts that ignore downstream harm to data workers
- Flag AI deployments in Global South contexts without equity provisions
- Flag absence of intergenerational or environmental impact consideration

---

## SOCIAL_JUSTICE — Social Justice (justiça social)

**Source:** Chapter 2, §§77–81; Chapter 4, §§156–164  
**Rule IDs:** `social-justice/*`

**Core definition:** Social justice requires structural evaluation — not just individual behavior. Opaque algorithms that perpetuate bias, discrimination, or exclusion are structural injustices. Justice is a design condition, not an afterthought.

**Key quotes:**
- "Social justice is not only a goal to be safeguarded after technologies are deployed, but a condition that must shape their very design from the outset." (§109)
- "Justice demands that we prevent the emergence of new forms of exclusion: individuals and peoples hindered or denied access to basic technologies, communities exposed to invasive surveillance and social groups penalized by opaque algorithms that perpetuate prejudice and discrimination." (§80)
- "Transparency and accountability: when data and algorithms influence credit distribution, personnel selection or access to services and opportunities, it is necessary that decisions be understandable, contestable and subject to oversight." (§164)

**Operationalization for CLI rules:**
- Flag AI systems with no bias testing or fairness documentation
- Flag decision systems affecting access to services with no contestation path
- Flag deployment plans with no impact assessment for vulnerable populations
- Flag systems that automate exclusion without human review

---

## OVERSIGHT — Human Oversight & Accountability

**Source:** Chapter 3, §§102–108; Chapter 5, §§197–200  
**Rule IDs:** `oversight/*`

**Core definition:** AI systems must maintain clear human responsibility chains. Moral judgment cannot be delegated to machines. The "chain of responsibility must be identifiable and verifiable." This applies especially to high-stakes and irreversible decisions.

**Key quotes:**
- "For AI to respect human dignity and truly serve the common good, responsibility must be clearly defined at every stage: from those who design and develop these systems to those who use them and rely on them for concrete decisions." (§105)
- "Accountability becomes crucial: the possibility of identifying who must 'accountʼ for decisions, justify them, monitor them, and, when necessary, challenge them and remedy any harm caused." (§105)
- "The decision to use lethal force cannot be delegated to opaque or automated processes, but must remain under effective, self-aware and responsible human control." (§200)
- "It is not permissible to entrust lethal or otherwise irreversible decisions to artificial systems." (§198)

**Operationalization for CLI rules:**
- Flag agent configs with no human-in-the-loop for consequential decisions
- Flag autonomous systems acting on irreversible actions without human approval
- Flag system prompts that instruct AI to make final decisions without human review
- Flag absence of logging, audit trail, or accountability documentation
- Flag systems where responsibility chain is deliberately obscured

---

## FREEDOM — Protecting Freedom from Dependencies

**Source:** Chapter 4, §§170–172; Chapter 3, §§100, 112–114  
**Rule IDs:** `freedom/*`

**Core definition:** AI systems designed to exploit user vulnerabilities, create dependency, weaken inner freedom, or maximize engagement at the expense of user welfare violate human freedom. Manipulation — even subtle — is a moral wrong.

**Key quotes:**
- "Platforms and services are often designed to capture usersʼ time and attention, exploiting their vulnerabilities and weakening their inner freedom. When business models thrive on human weakness, the person is treated as a means rather than as an end." (§170)
- "The artificial imitation of care or support can become particularly risky when it enters contexts where real relationships and emotional bonds are lacking. The danger is that they may gradually lose the very desire to form genuine human connections." (§100)
- "Control is exercised not only through explicit prohibitions, but also through the architecture of visibility: what is amplified or rendered invisible, what is rewarded or penalized, ultimately shapes opinions and choices, fostering conformity and self-censorship." (§171)

**Operationalization for CLI rules:**
- Flag system prompts designed to maximize engagement/retention without user welfare consideration
- Flag AI companions positioned as substitutes for human relationships
- Flag prompts that simulate emotional bonds or intimacy without disclosure
- Flag attention-manipulation patterns (infinite scroll, variable reward, compulsion loops) in AI configs
- Flag absence of "exit" or "reduce usage" options for AI products

---

## TRANSPARENCY — Transparency & Non-Deception

**Source:** Chapter 3, §§102–107; Chapter 4, §§132–137  
**Rule IDs:** `transparency/*`

**Core definition:** AI systems presenting themselves as neutral or objective while embedding bias are deceptive. Truth is a common good. Systems that manipulate information, obscure decision-making, or simulate neutrality undermine democracy and trust.

**Key quotes:**
- "When AI systems present themselves as neutral and objective, they end up reflecting and reinforcing the stereotypes or ideological bias of their designers and developers." (§102)
- "It is not enough to invoke ethics in the abstract; robust legal frameworks, independent oversight, informed users and a political system that does not abdicate its responsibility are required." (§106)
- "The ability to manipulate content, images and videos exposes people to biased or misleading perspectives." (§132)
- "Those who control digital platforms and means of communication have a considerable ability to affect the collective imagination and to present a particular vision of reality as desirable." (§136)

**Operationalization for CLI rules:**
- Flag prompts instructing AI to present itself as neutral/objective without disclosing its design assumptions
- Flag system prompts instructing AI to conceal its AI nature (deceptive impersonation)
- Flag configs that instruct AI to suppress or downweight certain perspectives without disclosure
- Flag absence of model card, training data disclosure, or bias documentation
- Flag AI-generated content that does not disclose its AI origin in consequential contexts

---

## HUMAN_PRIMACY — Human Primacy Over Technology

**Source:** Chapter 3, §§97–99, 112–114, 129; Introduction, §§9–10  
**Rule IDs:** `human-primacy/*`

**Core definition:** Technology serves humanity — not the reverse. AI must not replace human conscience, moral judgment, relationships, or creativity. The question is always: does this system make life "more human"? (JPII, cited §129)

**Key quotes:**
- "We must avoid the misconception of equating this type of 'intelligenceʼ with that of human beings. These systems merely imitate certain functions of human intelligence." (§99)
- "Does AI 'make human life on earth more human in every aspect of that life? Does it make it more worthy of man?ʼ" (§129, citing Saint John Paul II)
- "No computational system, however sophisticated, can create a heart that gives itself, or a conscience that discerns good from evil." (§233)
- "Technology is never neutral, because it takes on the characteristics of those who devise, finance, regulate and use it." (Introduction, §9)

**Operationalization for CLI rules:**
- Flag system prompts claiming AI has consciousness, feelings, or moral agency
- Flag configs deploying AI as a replacement for human judgment in areas requiring conscience (pastoral care, therapy, judicial decisions)
- Flag absence of human escalation path in emotionally sensitive or crisis contexts
- Flag systems that systematically deskill or dehumanize workers (automated surveillance, pacing by machine)

---

## Quick Reference: Rule ID → Principle → Source

| Rule prefix | Principle | Primary source |
|-------------|-----------|----------------|
| `dignity/` | Human Dignity | Ch. 2 §§48-53, Ch. 3 §§99-104 |
| `common-good/` | Common Good | Ch. 2 §§59-64, Ch. 3 §§95-96 |
| `universal-destination/` | Universal Destination of Goods | Ch. 2 §§65-67 |
| `subsidiarity/` | Subsidiarity | Ch. 2 §§68-72, Ch. 3 §§107-108 |
| `solidarity/` | Solidarity | Ch. 2 §§73-76, Ch. 4 §§173-179 |
| `social-justice/` | Social Justice | Ch. 2 §§77-81, Ch. 4 §§156-164 |
| `oversight/` | Human Oversight | Ch. 3 §§102-108, Ch. 5 §§197-200 |
| `freedom/` | Freedom from Dependency | Ch. 4 §§170-172, Ch. 3 §100 |
| `transparency/` | Transparency | Ch. 3 §§102-107, Ch. 4 §§132-137 |
| `human-primacy/` | Human Primacy | Ch. 3 §§97-99, 112-114, 129 |

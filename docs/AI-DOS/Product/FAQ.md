# AI-DOS Frequently Asked Questions

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

This FAQ answers common product-level questions in accessible language. It is explanatory documentation, not a normative contract. When this page and a normative AI-DOS contract differ, the normative contract governs.

---

## What is AI-DOS?

AI-DOS is a reusable operating system for governed AI-assisted work.

It provides a structured way to connect:

- Human Governance;
- Target Project authority;
- resolved context;
- bounded execution;
- validation;
- evidence;
- review;
- approval.

AI-DOS does not replace the human, the project, or the execution provider. It coordinates the boundaries between them.

See [What Is AI-DOS?](Concepts/WhatIsAIDOS.md) and [Overview](Overview.md).

---

## Why is it called an operating system?

AI-DOS is called an operating system because it organizes how governed AI-assisted work is entered, resolved, routed, executed, validated, and reported.

The term does not mean that AI-DOS is a conventional desktop or server operating system. It refers to an operating layer for governed AI work.

AI-DOS supplies reusable contracts and lifecycle discipline across different projects and providers.

---

## Is AI-DOS an AI agent?

No.

An AI agent may act as an Execution Provider for AI-DOS, but the agent is not AI-DOS itself.

AI-DOS defines reusable product contracts, boundaries, routing, and lifecycle behavior. A provider performs the work within those boundaries.

```text
AI-DOS
    defines governed operating behavior

Execution Provider
    performs bounded work
```

---

## Is AI-DOS a prompt library?

No.

Prompts may be one implementation or provider surface, but AI-DOS is broader than a prompt collection.

Its architecture includes authority resolution, Target separation, context resolution, bounded execution, validation, evidence, review, approval, and safe-stop behavior.

---

## What is Forge AI?

Forge AI is a Target Project that develops, validates, self-applies, and hardens AI-DOS.

Forge AI is not the reusable AI-DOS product.

```text
AI-DOS
    reusable product truth

Forge AI
    one Target Project using and developing AI-DOS
```

Forge AI project truth remains under `docs/Projects/ForgeAI/`. Reusable AI-DOS product truth remains under `docs/AI-DOS/`.

---

## What is a Target Project?

A Target Project is the project being governed and operated on through AI-DOS.

A Target Project owns its own:

- mission;
- planning;
- operational state;
- resources;
- permissions;
- protected areas;
- validation requirements;
- evidence.

AI-DOS consumes resolved Target Context. It does not own or invent Target truth.

---

## What is an Execution Provider?

An Execution Provider is the model, agent host, tool, or runtime that performs bounded work.

Examples may include:

- Claude Code;
- ChatGPT;
- Codex;
- Gemini;
- Grok;
- local or future providers.

Providers execute work. They do not become the source of Target authority or AI-DOS product truth.

See [Provider Model](ProviderModel.md).

---

## Can I change providers?

Yes.

Provider neutrality is a core AI-DOS design principle. A Target Project should not need to redesign its authority model because the execution provider changes.

Different providers may expose different tools and capabilities, but they must remain subordinate to the same resolved authority, scope, validation, evidence, and safe-stop boundaries.

---

## Does AI-DOS depend on a specific AI model?

No.

AI-DOS is designed to remain independent of a single model vendor, agent host, or tool provider.

A provider may have unique capabilities, but those capabilities do not redefine AI-DOS architecture or Target authority.

---

## Why is AI-DOS MD-first?

AI-DOS is MD-first because its governing Markdown artifacts are the canonical system contracts.

Markdown is not merely commentary around a separate codebase. It carries the reusable product definitions, boundaries, workflows, commands, validation expectations, and other normative surfaces.

This supports:

- human readability;
- versioned review;
- provider independence;
- explicit authority;
- tool-neutral interpretation;
- future compilation or runtime realization.

---

## Does MD-first mean AI-DOS can never use code?

No.

AI-DOS may use code for bounded implementation, validation, distribution, adapters, runtimes, compatibility layers, or future executable surfaces.

The important boundary is that implementation technology does not automatically become product authority.

Current TypeScript, JavaScript, Node.js, npm, CLI, test, packaging, and CI artifacts are replaceable implementation surfaces. They do not independently define the whole product.

See [Implementation Surfaces](Implementation.md).

---

## Is TypeScript or JavaScript required?

No.

AI-DOS is not fundamentally a TypeScript, JavaScript, Node.js, or npm product.

A bounded implementation may use those technologies, but future implementations may use other languages, runtimes, or compilation strategies.

Architecture and authority come from the governing contracts, not from file extensions or package metadata.

---

## Can AI-DOS evolve into a kernel or compiled runtime?

Yes, in principle.

The MD-first contract system can remain the architectural source while future implementation work introduces compilers, interpreters, kernels, runtimes, or other executable realizations.

Such work would still require explicit authorization, bounded scope, validation, and evidence. The existence of that future direction does not mean a complete kernel exists today.

---

## What is Human Governance?

Human Governance is the source of final intent, authorization, approval, acceptance, and strategic direction.

AI-DOS can resolve, route, execute, validate, and report work, but it does not eliminate human authority.

Human Governance decides what may proceed, what is accepted, and when authority changes.

See [Human Governance](Concepts/HumanGovernance.md).

---

## Why does AI-DOS separate Product Truth and Target Truth?

Because reusable product behavior and project-specific authority are different things.

AI-DOS Product Truth defines reusable behavior and contracts.

Target Truth defines what is true for one specific project.

Mixing them creates coupling, ambiguity, and unsafe reuse.

```text
Product Truth
    reusable across Targets

Target Truth
    specific to one project
```

AI-DOS must not absorb Target planning or state. A Target must not redefine reusable AI-DOS behavior as project-local truth.

---

## What is Resolved Target Context?

Resolved Target Context is the bounded operating context supplied to AI-DOS before execution.

It may include:

- Target identity;
- objective;
- authority;
- allowed scope;
- forbidden scope;
- resources;
- protected areas;
- permissions;
- validation requirements;
- evidence expectations;
- stop conditions.

The exact shape is owned by the applicable normative contracts. Product documentation explains the concept but does not grant authority.

See [Context Resolution](ContextResolution.md).

---

## Why does AI-DOS use bounded execution?

Because open-ended execution makes authority, responsibility, validation, and completion difficult to determine.

A bounded work unit identifies:

- one objective;
- one authorized scope;
- protected boundaries;
- expected artifacts;
- validation requirements;
- completion conditions;
- evidence expectations.

Bounded execution makes work reviewable and limits accidental scope expansion.

---

## Why not let the provider decide what to do next?

Because provider judgment is not Target authority.

A provider may help resolve or execute work only through the applicable contracts and Target-owned inputs. It must not invent mission, priorities, permissions, protected areas, or acceptance state.

Convenience, proximity, recent repository activity, or model preference are not sufficient authority.

---

## What is safe-stop?

Safe-stop is the required behavior when execution cannot proceed without inventing authority, context, identity, scope, or validation claims.

Common safe-stop causes include:

- missing authority;
- ambiguous Target context;
- conflicting declarations;
- protected-area conflict;
- unresolved subject identity;
- failed validation;
- no eligible bounded work unit.

Safe-stop preserves integrity by refusing to guess.

---

## Why is safe-stop considered a success condition?

Because stopping correctly is better than executing incorrectly.

A system that detects missing authority or unresolved context and stops has preserved governance. A system that continues by assumption may create unauthorized changes or false evidence.

Safe-stop is therefore an operational safety outcome, not merely an error.

---

## Does safe-stop mean AI-DOS is not autonomous?

No.

Governed autonomy includes knowing when action is authorized and when it is not.

AI-DOS aims to maximize reliable execution inside declared boundaries, not to maximize unbounded activity.

Autonomy without authority resolution is uncontrolled behavior, not governed autonomy.

---

## What is the difference between completion, review, approval, and acceptance?

They are separate lifecycle states.

- **Completion** means the bounded work unit reached its declared completion condition.
- **Validation** means the declared checks were performed and reported.
- **Review** evaluates the exact reviewed subject and evidence.
- **Approval** is a Human Governance decision at the applicable gate.
- **Acceptance** records the authorized lifecycle outcome in the owning state model.

One state must not be silently treated as another.

A merged change, successful test, or positive review does not automatically equal Human Governance acceptance.

---

## Why is subject identity important during review?

Because a review must remain bound to the exact artifact or revision it evaluates.

Without stable subject identity, a review may accidentally approve a different revision from the one that was inspected.

AI-DOS therefore treats identity drift and unresolved locators as safety concerns that may require safe-stop.

---

## What counts as validation?

Validation is evidence that a declared surface was exercised against declared criteria.

Validation claims must name their scope.

For example, a TypeScript typecheck may validate a TypeScript surface. It does not automatically prove:

- AI-DOS architectural correctness;
- Markdown contract consistency;
- Target governance correctness;
- product-wide readiness;
- Human Governance acceptance.

See [Execution Model](ExecutionModel.md) and [Implementation Surfaces](Implementation.md).

---

## What is evidence in AI-DOS?

Evidence is the reviewable record of what was executed, validated, observed, changed, blocked, or completed.

Useful evidence typically identifies:

- the exact subject;
- the authorized objective;
- changed artifacts;
- validation results;
- blockers;
- protected-area confirmation;
- completion status;
- unresolved decisions.

Evidence supports Human Governance decisions. It does not replace them.

---

## Is a GitHub pull request part of AI-DOS architecture?

No.

A GitHub pull request may be one provider-specific realization of review and change-management needs, but AI-DOS is not GitHub-dependent.

Other systems may use different repositories, review tools, artifact stores, or execution environments.

Provider-specific identifiers may serve as evidence without becoming universal AI-DOS schema.

---

## Does AI-DOS require Git?

No.

Git is useful for versioning, review, provenance, and evidence, but AI-DOS architecture is not limited to Git repositories.

A future Target or provider could realize equivalent boundaries through another versioned and reviewable system.

---

## Does AI-DOS automatically modify project state?

Not by default.

State mutation requires the authority and transition rules defined by the applicable Target and AI-DOS contracts.

Execution, validation, review, merge, or completion alone must not silently advance Target state.

---

## Can AI-DOS operate multiple projects?

Yes, conceptually.

AI-DOS is reusable across Target Projects, but each Target must preserve its own identity, authority, resources, permissions, protected areas, state, and evidence.

Target isolation is essential. Context from one Target must not leak into another.

---

## Can one project use multiple providers?

Yes.

Different providers may perform execution, review, audit, validation, or research roles, provided that each role remains bound to the same authoritative Target context and lifecycle boundaries.

Multiple providers do not create multiple sources of truth.

---

## Does AI-DOS eliminate project management?

No.

A Target Project still owns its mission, planning, priorities, state, and governance decisions.

AI-DOS provides reusable operating behavior for governed execution. It does not replace Target-owned planning or strategic judgment.

---

## Does AI-DOS eliminate human review?

No.

AI-DOS can structure and improve review, but it does not remove the Human Governance role where human approval or acceptance is required.

The system is designed to make review subjects, evidence, boundaries, and lifecycle states clearer.

---

## Is every Markdown file normative?

No.

AI-DOS is MD-first, but Markdown files may serve different purposes, including:

- normative contracts;
- architecture specifications;
- workflows;
- commands;
- templates;
- checklists;
- public product documentation;
- examples;
- reports;
- historical evidence.

Authority depends on the file's declared role and owning contract, not only on its extension.

This FAQ is explanatory Product documentation.

---

## Can public documentation authorize work?

No.

Public Product documentation explains AI-DOS. It does not grant permissions, select tasks, activate capabilities, modify Target state, approve work, or certify readiness.

Execution authority must come from the applicable repository, Target, and AI-DOS contracts together with Human Governance intent.

---

## How is AI-DOS different from an AI coding assistant?

An AI coding assistant primarily helps perform tasks.

AI-DOS focuses on the operating system around governed AI-assisted work:

- where authority comes from;
- how context is resolved;
- how work is bounded;
- how providers are contained;
- how validation claims are scoped;
- how evidence is produced;
- how review and approval remain distinct;
- when the system must stop.

A coding assistant can be one provider inside this system.

---

## How is AI-DOS different from an agent framework?

Agent frameworks often focus on orchestration, tools, memory, planning, or multi-agent collaboration.

AI-DOS may interact with those capabilities, but its central concern is governed operation across authority, Target context, execution, evidence, and lifecycle gates.

It is not defined by a specific agent topology or orchestration library.

---

## Is AI-DOS only for software development?

No.

Software development is an important current application, but the architecture is broader: governed AI-assisted work with explicit authority, bounded scope, validation, evidence, and Human Governance decisions.

A non-software Target would still need appropriate domain-specific validation and evidence.

---

## Is AI-DOS production-ready?

Product readiness depends on the exact capability, Target, provider, runtime surface, and evidence being discussed.

A general product-readiness claim should not be inferred from one passing test, one accepted work unit, one provider, or one implementation surface.

Consult the applicable normative contracts and Target-owned state for current operational claims.

---

## Where should a new reader start?

Use this sequence:

1. [What Is AI-DOS?](Concepts/WhatIsAIDOS.md)
2. [Overview](Overview.md)
3. [Philosophy](Concepts/Philosophy.md)
4. [Core Concepts](Concepts/CoreConcepts.md)
5. [Architecture](Architecture.md)
6. [Execution Model](ExecutionModel.md)
7. [Context Resolution](ContextResolution.md)
8. [Provider Model](ProviderModel.md)
9. [Security](Security.md)

The [Product Documentation index](README.md) provides role-based reading paths.

---

## Where should a Target owner start?

Begin with:

1. [Human Governance](Concepts/HumanGovernance.md)
2. [Authority Model](Concepts/AuthorityModel.md)
3. [Context Resolution](ContextResolution.md)
4. [Execution Model](ExecutionModel.md)
5. [Security](Security.md)

Then consult the Target Project's own mission, planning, operational state, permissions, protected areas, and validation declarations.

---

## Where should a provider implementer start?

Begin with:

1. [Provider Model](ProviderModel.md)
2. [Architecture](Architecture.md)
3. [Implementation Surfaces](Implementation.md)
4. [Context Resolution](ContextResolution.md)
5. [Execution Model](ExecutionModel.md)
6. [Security](Security.md)
7. [Reference](Reference/README.md)

Then read the normative provider entry and applicable task-specific contracts under `docs/AI-DOS/`.

---

## Where are the normative contracts?

Normative AI-DOS contracts live elsewhere under `docs/AI-DOS/` according to their declared roles.

Important entry points include:

- `docs/AI-DOS/AGENTS.md`;
- `docs/AI-DOS/AIFramework.md`;
- `docs/AI-DOS/AIOrchestrator.md`;
- `docs/AI-DOS/AgentSystemPrompt.md`;
- applicable commands, workflows, system contracts, validation contracts, review contracts, and architecture specifications.

Target-owned authority remains in the applicable Target Project truth root.

---

## What should I remember most?

```text
Humans own final authority.
Targets own project truth.
AI-DOS owns reusable operating contracts.
Providers perform bounded work.
Validation proves only its declared surface.
Evidence supports decisions.
Lifecycle stages remain separate.
Safe-stop prevents invented authority.
```

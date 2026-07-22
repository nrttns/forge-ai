# AI-DOS Product Documentation

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

This directory is the publication-oriented documentation surface for AI-DOS. It explains the product in accessible language while preserving the authority of the normative contracts elsewhere under `docs/AI-DOS/`.

## Start here

For a first introduction, read these pages in order:

1. [What Is AI-DOS?](Concepts/WhatIsAIDOS.md) — the shortest complete explanation of the product.
2. [Overview](Overview.md) — the problem AI-DOS addresses, its product boundary, and its role.
3. [Philosophy](Concepts/Philosophy.md) — the principles behind governed autonomy, bounded work, evidence, and safe-stop.
4. [Core Concepts](Concepts/CoreConcepts.md) — the conceptual building blocks used throughout the documentation.
5. [Execution Model](ExecutionModel.md) — how an authorized instruction becomes evidence-backed work.

## Choose a path

### I want to understand the product

Read:

1. [What Is AI-DOS?](Concepts/WhatIsAIDOS.md)
2. [Overview](Overview.md)
3. [Features](Features.md)
4. [Philosophy](Concepts/Philosophy.md)
5. [Concepts](Concepts/README.md)

This path explains the purpose, value, boundaries, and design principles of AI-DOS without requiring implementation knowledge.

### I govern or own a Target Project

Read:

1. [Human Governance](Concepts/HumanGovernance.md)
2. [Authority Model](Concepts/AuthorityModel.md)
3. [Context Resolution](ContextResolution.md)
4. [Execution Model](ExecutionModel.md)
5. [Security](Security.md)
6. [Terminology](Concepts/Terminology.md)

This path explains how Human Governance, Target-owned authority, protected areas, bounded delegation, validation, evidence, and security boundaries fit together.

### I am implementing an Execution Provider

Read:

1. [Provider Model](ProviderModel.md)
2. [Implementation Surfaces](Implementation.md)
3. [Security](Security.md)
4. [Context Resolution](ContextResolution.md)
5. [Execution Model](ExecutionModel.md)
6. [Authority Model](Concepts/AuthorityModel.md)
7. [Reference](Reference/README.md)

Then consult the normative provider entry and task-specific contracts under `docs/AI-DOS/`.

### I am reviewing or auditing work

Read:

1. [Authority Model](Concepts/AuthorityModel.md)
2. [Execution Model](ExecutionModel.md)
3. [Security](Security.md)
4. [Implementation Surfaces](Implementation.md)
5. [Human Governance](Concepts/HumanGovernance.md)
6. [Terminology](Concepts/Terminology.md)
7. [Reference](Reference/README.md)

This path emphasizes subject identity, authority, lifecycle separation, validation claims, implementation limits, evidence integrity, and safe-stop behavior.

## Product map

```text
Human Governance
        ↓
Target Project authority and context
        ↓
Resolved Target Context
        ↓
AI-DOS contracts and orchestration
        ↓
Execution Provider
        ↓
Bounded execution, validation, and evidence
        ↓
Human Governance decision
```

AI-DOS sits between Target-owned authority and provider execution. It does not replace either side.

## Core documentation

### Product overview

- [Overview](Overview.md) — product purpose, problem statement, scope, and boundaries.
- [Features](Features.md) — product capabilities and governing characteristics.
- [Execution Model](ExecutionModel.md) — the end-to-end path from instruction to evidence.
- [Context Resolution](ContextResolution.md) — how Target identity, authority, resources, and blockers are resolved.
- [Provider Model](ProviderModel.md) — how AI-DOS remains independent of any single model, agent host, or tool provider.
- [Security](Security.md) — how authority, Target isolation, provider containment, evidence integrity, and safe-stop behavior shape the product security posture.
- [Implementation Surfaces](Implementation.md) — how current executable, package, CLI, runtime-data, test, and distribution surfaces relate to the MD-first contract system.

### Concepts

- [Concepts guide](Concepts/README.md) — recommended learning sequence and role-based concept paths.
- [What Is AI-DOS?](Concepts/WhatIsAIDOS.md) — a complete introductory definition.
- [Philosophy](Concepts/Philosophy.md) — the product's design principles.
- [Core Concepts](Concepts/CoreConcepts.md) — the shared conceptual vocabulary.
- [Human Governance](Concepts/HumanGovernance.md) — human authority, intent, approval, and bounded delegation.
- [Authority Model](Concepts/AuthorityModel.md) — how authority is owned, resolved, bounded, and applied.
- [Terminology](Concepts/Terminology.md) — recurring terms and critical lifecycle distinctions.

## Documentation areas

### [Getting Started](GettingStarted/README.md)

Entry material for readers preparing to use or adopt AI-DOS.

### [Concepts](Concepts/README.md)

Explanations of the product's key ideas, authority model, philosophy, and terminology.

### [Tutorials](Tutorials/README.md)

Task-oriented learning material that demonstrates how AI-DOS concepts apply in practice.

### [Reference](Reference/README.md)

Concise reference material for product surfaces, terminology, and contract navigation.

### [Community](Community/README.md)

Public participation, contribution, and product-direction guidance.

## What this documentation is

The Product directory is intended to:

- explain AI-DOS in accessible language;
- provide stable learning paths for different readers;
- make product and Target boundaries visible;
- connect concepts to the normative contracts that own behavior;
- explain the limits of current implementation surfaces;
- surface security, evidence-integrity, and provider-containment concerns;
- support adoption without requiring readers to begin inside architecture or workflow specifications.

## What this documentation is not

The Product directory does not:

- replace normative AI-DOS contracts;
- define Target Project mission, planning, state, priorities, or accepted evidence;
- authorize repository mutation, capability activation, approval, certification, promotion, or release;
- make explanatory examples universally normative;
- elevate a current implementation language or tool into product architecture;
- claim that current executable surfaces implement every AI-DOS contract;
- replace repository security policy, Target-owned security boundaries, or incident-response authority;
- turn Forge AI project state into reusable AI-DOS product truth.

## Authority boundary

These pages explain AI-DOS; they do not redefine it. When explanatory text and a normative AI-DOS contract differ, the normative contract governs.

AI-DOS reusable product truth lives under `docs/AI-DOS/`. A Target Project owns its own mission, planning, operational state, resources, permissions, protected areas, security boundaries, and evidence through its Target-owned authority.

Forge AI is one Target Project that develops and self-applies AI-DOS. Forge AI project truth remains under `docs/Projects/ForgeAI/` and is not reusable AI-DOS product truth.

## Implementation boundary

AI-DOS is MD-first. Its governing Markdown artifacts are normative system contracts, not secondary commentary around a programming-language implementation.

Current TypeScript, JavaScript, Node.js, npm, CLI, test, packaging, and CI artifacts are bounded implementation or distribution surfaces. They do not independently define:

- the AI-DOS product identity;
- the AI-DOS architecture or kernel;
- all normative behavior;
- future implementation direction;
- product-wide validation status.

Implementation technology is replaceable and remains subordinate to the applicable contracts and bounded task. See [Implementation Surfaces](Implementation.md) for the public map of this relationship.

## Security boundary

AI-DOS security begins with correct authority, bounded scope, Target isolation, provider containment, evidence integrity, and safe-stop behavior. Public documentation can explain these concerns but cannot create credentials, grant permissions, authorize incident response, certify a control, or replace repository and Target security policy.

See [Security](Security.md) for the public security model and the boundaries of its claims.

## Normative entry points

Readers who need execution authority rather than product explanation should begin with the applicable repository and Target contracts, then use:

- `docs/AI-DOS/AGENTS.md` — provider entry contract;
- `docs/AI-DOS/AIFramework.md` — framework-level product contract;
- `docs/AI-DOS/AIOrchestrator.md` — orchestration contract;
- `docs/AI-DOS/AgentSystemPrompt.md` — provider execution discipline;
- the applicable command, workflow, validation, review, security, and system contracts.

Product documentation helps readers understand these surfaces. It does not grant permission to invoke or modify them.

## A compact summary

```text
Read Product documentation to understand AI-DOS.
Read normative contracts to execute AI-DOS behavior.
Read Target-owned authorities to understand the project being operated on.
Read Security and Implementation to understand bounded risk and executable-surface limits.
Use Human Governance for final authority and lifecycle decisions.
```

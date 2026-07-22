# What Is AI-DOS?

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

It is designed to help humans and AI execution providers work inside explicit authority, context, scope, validation, evidence, and lifecycle boundaries. AI-DOS does not replace Human Governance, own a Target Project, or perform repository work by itself. It supplies reusable contracts that make AI-assisted work more deterministic, reviewable, portable, and safe.

This page is explanatory. Normative behavior remains in the applicable AI-DOS contracts, Target Project contracts, and Human Governance decisions.

## The short explanation

AI-DOS organizes AI-assisted work around five questions:

1. Which Target Project is being operated on?
2. What authority governs the requested action?
3. What exact work is allowed?
4. What validation and evidence are required?
5. What condition requires safe-stop?

A compatible execution provider uses the answers to those questions to perform exactly one bounded unit of authorized work and return attributable evidence.

```text
Human Governance
        ↓
Target Project authority
        ↓
Resolved Target Context
        ↓
AI-DOS contracts and orchestration
        ↓
Execution Provider
        ↓
Bounded execution, validation, and evidence
        ↓
Human Governance
```

## Why AI-DOS exists

AI agents can be technically capable while still lacking the context or authority required to act correctly.

Common failure patterns include:

- beginning work from incomplete or stale context;
- inferring permission from tool access;
- treating the nearest file or latest commit as authority;
- mixing reusable product behavior with project-specific state;
- expanding a task because adjacent work appears useful;
- reporting validation more broadly than the evidence supports;
- treating implementation, review, approval, certification, and release as the same event;
- continuing when no unique authorized action can be resolved.

AI-DOS addresses these failures by requiring explicit contracts, declared ownership, bounded execution, evidence-backed validation, and safe-stop behavior.

## What kind of “operating system” is it?

AI-DOS is not described as an operating system because it manages hardware, processes, memory, or devices in the conventional computer-operating-system sense.

It is an operating system for governed AI-assisted work because it provides a reusable operational layer for:

- discovering applicable authority;
- resolving Target Project context;
- routing instructions;
- preparing bounded work;
- selecting applicable commands and workflows;
- constraining execution providers;
- validating declared surfaces;
- collecting evidence;
- preserving lifecycle gates;
- stopping safely when required context or authority is missing.

The system coordinates how work is interpreted and governed before, during, and after execution.

## AI-DOS is contract-driven

AI-DOS behavior is defined through contracts.

A contract is a normative Markdown artifact that declares responsibilities, inputs, outputs, boundaries, rules, or required behavior.

Contracts allow the durable system interface to remain independent of:

- a particular language model;
- one agent host;
- one editor or terminal;
- one repository provider;
- one programming language;
- one implementation framework;
- one Target Project.

Execution providers consume the contracts. They do not replace them.

## AI-DOS is MD-first

The governing Markdown artifacts are the canonical product surface.

They are not merely user documentation around a source-code implementation. They define the reusable system contracts that providers and Target Projects consume.

This means:

- implementation code is subordinate to the governing contracts;
- a current CLI does not automatically become the AI-DOS engine or kernel;
- repository-language statistics do not determine product identity;
- implementation technology may change without changing the product authority model;
- executable surfaces validate only the behavior they actually implement and exercise.

MD-first does not currently mean that every Markdown contract is directly executable. An MD-to-executable kernel remains a future architectural direction unless separately implemented, validated, reviewed, and accepted.

## AI-DOS is provider-neutral

AI-DOS does not depend on one model vendor or execution environment.

A provider may be:

- an AI agent host;
- a coding assistant;
- a local automation runtime;
- an IDE integration;
- a repository service;
- a tool-enabled model;
- a future compatible execution environment.

Providers expose capabilities and perform authorized work. They do not own AI-DOS product truth, Target Project truth, or Human Governance authority.

Provider neutrality allows the same contracts to be consumed by different hosts while preserving the same authority and evidence boundaries.

## AI-DOS is Target-aware

AI-DOS operates on a Target Project without absorbing that project into reusable product truth.

A Target Project owns its own:

- identity and mission;
- planning and priorities;
- live operational state;
- protected areas;
- declared resources;
- project-specific permissions;
- validation requirements;
- accepted evidence;
- state-transition authority.

AI-DOS consumes the Target-owned context required for a task, but it does not redefine or universalize that context.

Forge AI is one Target Project that develops, validates, and self-applies AI-DOS. Forge AI is not the definition of every Target Project.

## Product truth and Target truth

AI-DOS relies on a strict separation between reusable product truth and Target-specific truth.

```text
AI-DOS product truth
    reusable contracts, system behavior, and provider procedures

Target Project truth
    mission, planning, state, resources, permissions, and evidence
```

Product truth must not contain the transient planning or operational state of one Target Project.

Target truth must not redefine reusable AI-DOS behavior.

The two layers exchange information through declared contracts and Resolved Target Context rather than by merging their authority.

## Resolved Target Context

Resolved Target Context is the bounded, task-relevant Target-owned context supplied to the AI-DOS provider route.

It may include:

- the authorized objective;
- allowed and forbidden scope;
- applicable authorities;
- declared resources;
- protected areas;
- validation expectations;
- evidence expectations;
- permissions;
- blockers;
- state-update authority.

Resolved Target Context is not an invitation to invent missing facts. Missing, contradictory, inaccessible, or unauthorized context may require safe-stop.

## Human Governance remains final

AI-DOS is designed for governed autonomy, not uncontrolled autonomy.

Human Governance remains the final authority for decisions that the product and providers must not invent, including:

- strategic direction;
- explicit authorization;
- approval and rejection;
- protected-capability activation;
- acceptance of evidence;
- certification and release decisions;
- resolution of genuinely ambiguous authority;
- permission to change protected governance or planning artifacts.

AI-DOS can automate execution within a bounded authority envelope. It does not convert technical ability or model confidence into permission.

## Capability is not authority

A provider may be technically capable of an action without being authorized to perform it.

```text
Provider can perform the action
        ≠
Provider may perform the action now
```

For example, access to repository write tools does not automatically authorize:

- editing a file;
- creating a branch;
- opening a pull request;
- merging a pull request;
- changing repository settings;
- updating Target state;
- activating a capability;
- publishing a release.

Authority must come from the applicable Human Governance instruction, Target authority, AI-DOS contract, task scope, and lifecycle conditions.

## Bounded work

AI-DOS organizes execution as bounded work.

A bounded work unit identifies:

- one objective;
- the owning authority;
- allowed artifacts or resources;
- forbidden scope;
- dependencies;
- protected boundaries;
- validation requirements;
- completion conditions;
- evidence requirements;
- stop conditions;
- state-update authority, when applicable.

The provider executes only that work unit.

Discovering related work may justify a finding or recommendation, but it does not authorize additional mutation.

## Minimum sufficient context

AI-DOS does not assume that more context is always better.

The preferred context is the minimum authoritative context sufficient to perform the bounded task correctly.

Unnecessary context can introduce:

- stale information;
- conflicting authority;
- irrelevant detail;
- accidental scope expansion;
- increased token consumption;
- weaker reviewability.

Context assembly therefore aims for relevance, authority, and sufficiency rather than maximum volume.

## Safe-stop

Safe-stop is a required and valid outcome when execution cannot proceed without guessing, crossing a protected boundary, or making an unsupported claim.

Typical safe-stop conditions include:

- no uniquely identifiable Target Project;
- no uniquely resolvable work unit;
- missing or contradictory authority;
- inaccessible required resources;
- ambiguous permission;
- protected-area conflict;
- unavailable provider capability;
- failed required validation;
- reviewed-subject identity drift;
- an unauthorized state transition.

Safe-stop protects governance. It is not a failure to appear productive.

## Validation and evidence

AI-DOS distinguishes execution from proof.

Validation examines a declared surface against applicable requirements.

Evidence records what actually occurred.

A useful completion record may identify:

- authorities and resources consumed;
- the selected objective and scope;
- changed artifacts;
- validation commands and results;
- warnings, failures, and skipped checks;
- protected-area confirmation;
- blockers and risks;
- completion proof;
- lifecycle status;
- one bounded recommended next action.

Validation claims must remain limited to the surface actually exercised.

For example, a package test may validate that package surface. It does not automatically prove product-wide architectural correctness, governance compliance, Markdown-contract integrity, Target acceptance, certification, or release readiness.

## Lifecycle separation

AI-DOS keeps lifecycle stages distinct.

```text
Candidate
    ≠ Selection
    ≠ Activation
    ≠ Execution
    ≠ Completion
    ≠ Validation
    ≠ Review
    ≠ Human Governance approval
    ≠ Certification
    ≠ Promotion
    ≠ Release
```

Evidence from one stage may support another stage, but it does not silently grant the authority of that later stage.

This separation prevents technical completion or repository activity from becoming automatic approval or release authority.

## What AI-DOS can organize

Depending on the active contracts and capabilities, AI-DOS can organize:

- Target discovery and context resolution;
- instruction classification and routing;
- bounded task preparation;
- candidate generation and selection procedures;
- execution sequencing;
- provider coordination;
- protected-area enforcement;
- validation and review procedures;
- evidence reporting;
- authorized state-transition procedures;
- distribution-related procedures when separately active.

A documented capability is not necessarily implemented, certified, released, or active. Current capability must be resolved from the applicable authority and evidence.

## What AI-DOS is not

AI-DOS is not:

- a language model;
- a model vendor;
- a single autonomous agent;
- a substitute for Human Governance;
- a Target Project;
- a project roadmap;
- a repository’s live operational state;
- a specific programming language;
- a Node.js or TypeScript product merely because a bounded implementation uses those technologies;
- a guarantee that every documented capability is currently implemented;
- permission to mutate a repository merely because tools are available.

## Relationship to execution providers

Execution providers perform the work described by applicable AI-DOS and Target contracts.

A provider may:

- receive an invocation;
- expose capabilities and limitations;
- read authorized context;
- call tools;
- modify authorized resources;
- run validation;
- return evidence and blockers.

The provider must preserve:

- authority boundaries;
- Target identity;
- task scope;
- protected areas;
- reviewed-subject identity;
- evidence provenance;
- lifecycle separation;
- the distinction between recommendation and authorization.

Providers are replaceable. The contracts remain the stable interface.

## Relationship to Forge AI

Forge AI is the Target Project in this repository.

Forge AI develops, validates, self-applies, and hardens AI-DOS while retaining ownership of its own mission, planning, live state, evidence, and protected areas.

The repository therefore contains two distinct truth roots:

```text
docs/AI-DOS/
    reusable AI-DOS product truth

docs/Projects/ForgeAI/
    Forge AI Target Project truth
```

Self-application provides evidence and exposes weaknesses, but it does not authorize Forge AI to redefine AI-DOS product behavior or authorize its own lifecycle transitions without the applicable authority.

## Current implementation boundary

The repository contains bounded TypeScript, Node.js, npm, CLI, test, and CI surfaces.

These surfaces demonstrate or support particular implementation and distribution capabilities. They do not define the entire AI-DOS architecture, engine, kernel, or future implementation direction.

Implementation technology remains replaceable and subordinate to the governing contracts.

## A practical example

Suppose a human asks an execution provider to update documentation and open a pull request.

A compatible AI-DOS route would determine:

1. which Target Project is in scope;
2. whether the instruction authorizes mutation;
3. which artifact owns the relevant truth;
4. the exact allowed file scope;
5. which protected areas must remain unchanged;
6. what validation is appropriate;
7. which provider capability is required;
8. what evidence must be returned;
9. whether any Target-state transition is authorized;
10. what condition requires safe-stop.

The provider then changes only the authorized document, validates the actual diff, opens the pull request when authorized, and reports the evidence without claiming approval, acceptance, certification, or release.

## The core idea

AI-DOS makes AI-assisted work dependable by separating what a provider can do from what it is allowed to do, and by making authority, context, scope, validation, evidence, and lifecycle explicit.

```text
Human Governance decides and authorizes.
Target Projects own project-specific truth.
AI-DOS supplies reusable operational contracts.
Execution Providers perform bounded work.
Validation tests declared surfaces.
Evidence records what occurred.
Safe-stop prevents invented authority.
```

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, `docs/AI-DOS/AgentSystemPrompt.md`, the applicable System, command, workflow, architecture, validation, review, and governance contracts, and the invoked Target Project contract.
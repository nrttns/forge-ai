# Core Concepts

AI-DOS is a repository-embedded, contract-driven operating model for governing AI-assisted work.

It does not replace Human Governance, own a Target Project, or perform repository work by itself. It provides reusable product contracts that help Human Governance and execution providers resolve authority, prepare bounded work, preserve protected areas, validate outcomes, and return evidence.

This page introduces the public concepts needed to understand that model. It is explanatory only. Normative definitions remain in the applicable AI-DOS and Target Project contracts.

## The operating model

```text
Human Governance
        │
        ▼
      AI-DOS
(contracts and orchestration)
        │
        ▼
Execution Provider
        │
        ▼
  Target Project
        │
        ▼
Validation and Evidence
        │
        ▼
Human Governance
```

The responsibilities are intentionally separated:

- **Human Governance** supplies intent, authority, approval, and final decisions.
- **AI-DOS** supplies reusable contracts for authority resolution, orchestration, bounded execution, validation, evidence, and safe-stop behavior.
- **Execution Providers** consume those contracts and perform the authorized repository work.
- **Target Projects** own their own mission, planning, operational state, protected areas, resources, and project-specific truth.

## AI-DOS

AI-DOS is the reusable product layer.

Its governing Markdown artifacts define how AI-assisted work is organized and constrained across compatible Target Projects and execution providers. These artifacts are normative product contracts, not secondary documentation around a particular programming-language implementation.

AI-DOS may organize:

- contract discovery;
- authority resolution;
- Target Context consumption;
- task routing and bounded work preparation;
- validation expectations;
- evidence structure;
- safe-stop conditions;
- authorized state-transition procedures.

AI-DOS is not, by itself:

- a language model;
- an autonomous repository worker;
- a Target Project;
- Human Governance;
- a specific execution provider;
- a particular implementation language, CLI, runtime, or package.

Implementations may expose or automate parts of AI-DOS, but implementations remain subordinate to the governing contracts.

## Human Governance

Human Governance is the final authority.

It supplies the decisions that contracts and execution providers must not invent, including approval, explicit authorization, strategic redirection, protected-capability activation, and resolution of genuinely ambiguous authority.

AI-DOS can structure and evaluate governed work, but it does not eliminate the human authority boundary.

## Target Project

A Target Project is a project that consumes AI-DOS while retaining ownership of its own truth.

Target-owned truth may include:

- mission;
- planning;
- operational state;
- priorities;
- protected areas;
- declared resources;
- project-specific constraints;
- accepted evidence.

AI-DOS does not absorb this information into product truth. Instead, the Target Project exposes the authoritative context required for governed work.

Forge AI is one Target Project that develops, validates, and self-applies AI-DOS. It is not the universal definition of every Target Project.

## Product truth and Target truth

AI-DOS depends on a strict separation between reusable product truth and project-specific Target truth.

```text
AI-DOS product truth
    reusable contracts and product behavior

Target Project truth
    mission, planning, state, resources, and project authority
```

Product truth must not contain the transient planning or operational state of one Target Project. Target truth must not redefine reusable AI-DOS behavior.

The two layers exchange information through declared contracts and resolved context rather than by merging their authority.

## Target Contract

A Target Contract is the Target-owned entry point that declares how an execution provider resolves the Target Project's authoritative context.

It may identify:

- Target identity;
- Target resources;
- operational entry;
- protected areas;
- execution authority boundaries;
- validation and evidence expectations;
- state-update authority.

A Target Contract does not need to know the internal implementation of a particular provider. This keeps Target Projects provider-independent.

## Resolved Target Context

Resolved Target Context is the bounded, task-relevant context produced from Target-owned authority and supplied to the AI-DOS provider route.

It may contain:

- the authorized objective;
- allowed scope;
- constraints;
- declared resources;
- protected areas;
- validation expectations;
- evidence expectations;
- state-update authority.

Resolved Target Context is not permission to invent missing facts. Missing, contradictory, inaccessible, or unauthorized context requires a safe-stop when the governing contracts cannot resolve exactly one valid action.

## Execution Provider

An Execution Provider is an AI agent, automation host, or compatible system that consumes the applicable contracts and performs authorized work.

Examples may include Claude Code, Codex, Grok, Gemini, or future provider implementations.

Execution Providers may:

- read authorized repository artifacts;
- modify files within the bounded scope;
- run applicable validation;
- collect evidence;
- report completion or blockers;
- stop when authority is missing or a protected boundary would be crossed.

Execution Providers do not own Target truth, Human Governance authority, or AI-DOS product semantics. Providers are replaceable; the governing contracts remain the stable interface.

## Bounded Work Unit

A Bounded Work Unit is exactly one explicitly constrained unit of authorized work.

A complete bounded work unit identifies:

- objective;
- owner and authority;
- allowed artifacts;
- forbidden scope;
- dependencies and protected boundaries;
- validation requirements;
- completion condition;
- evidence requirements;
- stop conditions.

Bounded execution prevents a provider from expanding a task merely because adjacent work appears useful, easy, or related.

## Protected Area

A Protected Area is any artifact, capability, state, or boundary that cannot be changed without exact authority.

Examples may include:

- repository entry contracts;
- Target contracts;
- mission documents;
- live operational state;
- roadmap or phase authorities;
- historical evidence;
- inactive future capabilities;
- external Target scope.

A protected-area conflict is a blocker, not an invitation to reinterpret the task.

## Authority

Authority determines which artifact or Human Governance decision controls a particular question.

Authority is resolved through declared contracts and explicit ownership. File proximity, implementation convenience, repository activity, provider confidence, or recent edits do not create authority.

Where product truth and Target truth interact, each remains authoritative only within its own boundary.

## Contract

A Contract is a normative Markdown artifact that defines responsibilities, inputs, outputs, boundaries, rules, or required behavior.

Contracts make the system portable across providers and implementations because the durable interface is expressed independently of one model, tool, or programming language.

Explanatory product pages, including this page, help readers understand those contracts but do not replace them.

## Validation

Validation is the evidence-backed examination of a declared surface against applicable requirements.

A validation claim must name what was actually exercised. For example, a package test can validate that package surface, but it does not automatically prove architectural correctness, governance compliance, Markdown contract consistency, Target acceptance, or capability activation.

Validation results support decisions; they do not independently become Human Governance approval.

## Evidence

Evidence is the attributable record of what occurred during governed work.

Useful evidence may include:

- authorities and resources consumed;
- selected objective and scope;
- changed artifacts;
- validation commands and results;
- warnings, failures, and skipped checks;
- protected-area confirmation;
- blockers and risks;
- completion proof;
- recommended or authorized next state.

Execution Providers return evidence. Human Governance evaluates it, and Target-owned state records only the values authorized by the applicable transition rules.

## Safe-stop

A Safe-stop is the required outcome when execution cannot continue without inventing authority, crossing a protected boundary, choosing arbitrarily, or making an unsupported claim.

Typical safe-stop conditions include:

- no uniquely resolvable task;
- missing or contradictory authority;
- inaccessible required resources;
- ambiguous Target Context;
- unauthorized state mutation;
- protected-area conflict;
- failed required validation that blocks completion.

Safe-stop is a correctness mechanism. It preserves governance when progress cannot be justified.

## Repository-embedded operation

AI-DOS can operate from the repository's Markdown contract structure.

A compatible repository exposes:

1. a repository entry that identifies the mandatory contract-reading order;
2. a Target-owned contract and operational entry;
3. reusable AI-DOS product contracts;
4. an external execution provider capable of consuming those artifacts;
5. validation and evidence surfaces for Human Governance review.

This model does not require AI-DOS to be a separate autonomous agent. The repository carries the contracts; execution providers perform the work; Human Governance retains final authority.

## Summary

```text
Human Governance decides and authorizes.
AI-DOS organizes and governs through reusable contracts.
Execution Providers perform bounded work.
Target Projects own project-specific truth.
Validation tests declared surfaces.
Evidence records what occurred.
Safe-stop prevents invented authority or uncontrolled expansion.
```

Together, these concepts define a provider-independent and Target-aware operating model for governed AI-assisted development.

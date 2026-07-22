# AI-DOS Architecture Guide

**Status:** Draft  
**Document type:** Standalone AI-DOS Product Documentation  
**Audience:** Users, integrators, contributors, operators, and reviewers

---

## 1. Purpose

This guide explains how AI-DOS works as a product.

It describes the architectural layers, engine model, discovery and resolution flow, execution and validation boundaries, provider adapter model, command routing, safe-stop behavior, and the relationship between AI-DOS Product Truth and Target Project Truth.

This is explanatory product documentation. It does not replace normative AI-DOS contracts, Target Project contracts, workflow specifications, RFCs, or implementation-specific documentation.

---

## 2. Architectural Goals

AI-DOS is designed around these goals:

- deterministic and explainable behavior;
- provider independence;
- Target and repository independence;
- explicit authority resolution;
- bounded execution;
- reproducible validation and review;
- safe handling of ambiguity;
- human-governed state transitions;
- Markdown-first product contracts;
- extensibility without duplication of authority.

The architecture deliberately separates discovery, decision-making, execution, validation, review, and governance.

---

## 3. High-Level Architecture

A typical AI-DOS interaction follows this conceptual route:

```text
Human or authorized caller
        ↓
Target Context resolution
        ↓
AI-DOS Provider Entry
        ↓
Discovery and authority resolution
        ↓
Task or command routing
        ↓
Bounded execution
        ↓
Validation and evidence
        ↓
Review
        ↓
Human Governance decision when required
```

The exact route depends on the caller's intent. A bounded task, continuation request, review request, approval request, or explicit next-step instruction may enter different owning workflows while preserving the same architectural boundaries.

---

## 4. Product Truth and Target Truth

AI-DOS separates reusable product knowledge from repository-specific operational knowledge.

### 4.1 Product Truth

Product Truth defines AI-DOS itself. It includes reusable concepts such as:

- architecture;
- provider entry behavior;
- standards;
- workflows;
- commands;
- engine behavior;
- validation rules;
- review contracts;
- templates;
- reusable schemas and terminology.

Product Truth must remain independent of one Target Project's roadmap, current phase, task identifier, pull request, or operational state.

### 4.2 Target Truth

Target Truth belongs to an individual Target Project or repository. It may include:

- mission;
- roadmap;
- planning;
- operational state;
- protected areas;
- Target-owned resources;
- active work authorization;
- Target-specific evidence.

A Target Project supplies context to AI-DOS. It does not redefine AI-DOS product behavior.

### 4.3 Interaction Boundary

```text
Target Project resolves Target Context
                ↓
AI-DOS consumes that context through reusable contracts
                ↓
AI-DOS returns execution, validation, review, or transition outputs
```

AI-DOS must not absorb transient Target state into Product Truth. A Target Project must not copy provider-owned algorithms into Target governance.

---

## 5. Architectural Layers

The following layers describe responsibilities. A provider may realize them through documents, tools, services, or runtime components while preserving the same boundaries.

### 5.1 Discovery

Discovery locates the resources required to understand the request and operating context.

Typical responsibilities include:

- locating Target authority;
- locating provider entry contracts;
- finding relevant workflows and commands;
- identifying task-specific resources;
- identifying validation sources;
- locating protected areas and execution constraints.

Discovery gathers information. It does not invent authority or select work merely because an artifact is nearby, recent, or convenient.

### 5.2 Resolution

Resolution converts discovered information into explicit context and decisions.

Typical responsibilities include:

- determining which authority governs a question;
- distinguishing Product Truth from Target Truth;
- resolving the requested command or workflow;
- resolving task identity, scope, dependencies, and completion conditions;
- detecting missing, contradictory, stale, or ambiguous context;
- determining whether execution may continue safely.

Where a governing contract requires one result, resolution must be deterministic.

### 5.3 Planning and Work Selection

Planning identifies exactly what bounded work is eligible to proceed.

It may include:

- evaluating candidate eligibility;
- applying Target-supplied priority policy;
- constructing a minimal candidate when authorized;
- selecting exactly one work unit;
- refusing selection when no unique eligible result exists.

Planning and execution remain separate. Selecting work does not perform the work.

### 5.4 Execution

Execution performs the authorized bounded change or action.

Execution must preserve:

- the exact objective;
- allowed artifact scope;
- forbidden artifact scope;
- protected areas;
- required validation;
- evidence expectations;
- completion conditions;
- stop conditions.

Execution must not expand the task by implication.

### 5.5 Validation

Validation checks the surfaces actually exercised by the work.

Examples include:

- document structure checks;
- schema checks;
- consistency checks;
- command or workflow tests;
- implementation-specific tests;
- integration checks;
- evidence completeness checks.

A validation result proves only what the validation exercised. Passing an implementation-specific test does not automatically prove product-wide architectural correctness.

### 5.6 Review

Review evaluates a completed subject against its requirements and evidence.

Review may produce:

- findings;
- requested changes;
- confirmation that findings are resolved;
- an approval-eligible outcome;
- a blocker;
- a safe-stop result.

Review is non-mutating unless a separate authorized action applies a state transition.

### 5.7 Governance

Governance controls authority, acceptance, continuation, and protected state transitions.

Human Governance may be required to:

- authorize work;
- choose an explicit next step;
- accept a reviewed subject;
- approve a state mutation;
- permit modification of protected artifacts;
- activate a future capability.

Automation operates only within the authority granted by applicable contracts and the current resolved context.

---

## 6. The AI-DOS Engine Model

The term **Engine** refers to the coordinated product behavior that routes and executes AI-DOS contracts. It must not be inferred from the presence of one programming-language file, CLI package, bootstrap, or adapter.

Conceptually, the Engine coordinates:

- provider entry;
- Target Context consumption;
- command and workflow routing;
- authority resolution;
- task selection when authorized;
- execution sequencing;
- validation orchestration;
- review routing;
- safe-stop behavior;
- output and evidence production.

AI-DOS is Markdown-first. Normative Markdown artifacts define the governing product surface. Implementations may execute, validate, or expose those contracts, but implementation technology does not become product authority merely because it is executable.

---

## 7. Provider Adapter Model

AI-DOS is provider-neutral. A provider may be a hosted model, coding agent, command-line agent, or another execution environment.

Examples may include ChatGPT, Claude Code, Codex, Grok, Gemini, Copilot, and future providers. Their product names do not change the architecture.

```text
Resolved Target Context
        ↓
AI-DOS Provider Entry
        ↓
Provider-specific discovery adapter
        ↓
Canonical AI-DOS contracts
        ↓
Provider tools and execution environment
```

A provider adapter should:

- help the provider discover canonical contracts;
- translate host capabilities into contract-compliant actions;
- preserve provider-neutral terminology and outcomes;
- avoid duplicating or redefining canonical semantics;
- avoid embedding transient Target state;
- report capability and tool limitations honestly.

Adapters are discovery and execution bridges, not independent sources of product or Target authority.

---

## 8. Command Routing

Commands express intent and route work to the owning contract. They are not merely magic words.

### 8.1 Continue

Continuation or advancement intent asks AI-DOS to resolve the next authorized action.

Depending on current Target Context, this may route to bounded work selection, consume an awaited continuation signal, or safe-stop when no unique authorized action can be resolved.

### 8.2 Review

Review intent identifies a subject and evaluates it without silently changing the subject or operational state.

The reviewed-subject identity must remain stable throughout review and evidence collection.

### 8.3 Approve

Approval intent routes to the state-transition owner when a unique approval-eligible subject can be resolved.

Approval does not implicitly merge a pull request, select another task, continue execution, or activate a future capability.

### 8.4 Next Step

An explicit next-step instruction selects a named direction subject to eligibility, dependencies, protected areas, validation requirements, and other governing constraints.

It may bypass Target priority ranking where the Target contract permits, but it does not bypass safety or authority rules.

### 8.5 Human Governance Commands

Human Governance commands are authoritative only within the boundaries of applicable contracts. Their effect depends on resolved intent, current state, subject identity, and evidence—not on a phrase alone.

---

## 9. Safe-Stop Behavior

Safe-stop is a required architectural outcome when execution cannot continue without inventing context, authority, identity, scope, or evidence.

Typical safe-stop conditions include:

- missing mandatory authority;
- contradictory declarations;
- no eligible work unit;
- more than one equally valid result without a deterministic tie-break;
- unresolved protected-area conflict;
- reviewed-subject identity drift;
- missing required validation or evidence;
- unavailable required tools or resources;
- an unauthorized request to mutate protected state.

A safe-stop should explain the blocker and avoid partial or speculative mutation. Stopping safely is preferable to producing a convincing but unauthorized result.

---

## 10. Execution Lifecycle

A common bounded-work lifecycle is:

1. Resolve the caller's intent.
2. Resolve Target Context and authority.
3. Discover the applicable AI-DOS route.
4. Resolve exactly one bounded subject or action.
5. Confirm scope, constraints, protected areas, and completion conditions.
6. Execute only the authorized action.
7. Run applicable validation.
8. Produce evidence tied to the exact subject identity.
9. Review the completed subject when requested.
10. Route any authorized state transition to its owner.
11. Stop without selecting or executing unrelated follow-up work.

Not every request uses every stage. A read-only explanation, for example, may not require work selection or state mutation.

---

## 11. State and Identity Boundaries

AI-DOS distinguishes concepts that must not be conflated:

- repository activity is not automatically Target progress;
- execution completion is not automatically validation;
- validation success is not automatically review approval;
- review approval is not automatically Human Governance acceptance;
- Human Governance acceptance is not automatically continuation;
- merge state is not automatically product or Target truth;
- branch or pull-request identifiers may be provider-specific evidence, but they are not universal architectural schemas.

The exact subject identity must remain stable across execution, validation, review, and any authorized acceptance transition.

---

## 12. Extensibility

AI-DOS supports extension through bounded, contract-owned surfaces such as:

- provider adapters;
- workflows;
- commands;
- resolvers;
- validators;
- review mechanisms;
- templates;
- evidence formats;
- execution implementations.

An extension should:

- declare its owner and authority;
- preserve existing boundaries;
- avoid duplicating canonical semantics;
- define inputs, outputs, and safe-stop behavior;
- remain provider-neutral unless explicitly provider-specific;
- include validation appropriate to the surface it changes.

---

## 13. Architectural Principles

### Explicit Authority

Every consequential action must be traceable to applicable authority.

### Deterministic Resolution

Where a contract requires one result, ambiguity must not be resolved through hidden model preference.

### Bounded Execution

Work must remain inside its declared objective, scope, and completion conditions.

### Product and Target Separation

Reusable AI-DOS truth and Target-specific operational truth remain in their respective authority domains.

### Provider Neutrality

Provider capabilities may differ, but canonical product semantics remain stable.

### Markdown-First Governance

Normative Markdown contracts define the system surface independently of implementation language.

### Validation Before Acceptance

Claims must be supported by evidence appropriate to the surface being claimed.

### Stable Subject Identity

Execution, validation, review, and acceptance must refer to the same resolved subject.

### Safe-Stop Over Guessing

Missing or conflicting context must produce a blocker rather than fabricated certainty.

### Human-Governed Mutation

Protected state and capability transitions require explicit or uniquely derivable authority.

---

## 14. Reading the Architecture in Practice

When evaluating an AI-DOS operation, ask:

1. Which domain owns the truth: AI-DOS Product or the Target Project?
2. Which contract owns the requested behavior?
3. What exact subject or work unit is being acted on?
4. What scope and protected boundaries apply?
5. What validation is required, and what does it actually prove?
6. Is review non-mutating?
7. Is a state transition separately authorized?
8. Would unresolved ambiguity require safe-stop?

These questions expose most authority, scope, identity, and architectural-boundary errors.

---

## 15. Summary

AI-DOS is a reusable, provider-neutral, Markdown-first AI operating model that consumes Target Context and routes work through explicit contracts.

Its architecture separates:

- Product Truth from Target Truth;
- discovery from resolution;
- planning from execution;
- execution from validation;
- validation from review;
- review from acceptance;
- provider adapters from canonical semantics;
- repository activity from governed state transitions.

This separation allows AI-DOS to support different providers and Target Projects while preserving deterministic behavior, bounded execution, evidence-backed validation, stable subject identity, safe-stop behavior, and Human Governance authority.

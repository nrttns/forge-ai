# Getting Started with AI-DOS

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

It supplies reusable contracts that help Human Governance, Target Projects, and external AI execution providers work inside explicit authority, context, scope, validation, evidence, and lifecycle boundaries.

AI-DOS is not an independent model, autonomous agent, or replacement for an execution provider. A compatible provider performs the work; AI-DOS organizes and constrains how that work is understood, authorized, executed, validated, and reported.

This section is publication-oriented guidance. Normative behavior remains owned by the applicable contracts under `docs/AI-DOS/`, each Target Project's declared authority, and Human Governance decisions.

## Choose your starting point

Use the path that matches what you are trying to do.

### I want to understand the product

Start with:

1. [What Is AI-DOS?](../Concepts/WhatIsAIDOS.md)
2. [Philosophy](../Concepts/Philosophy.md)
3. [Core Concepts](../Concepts/CoreConcepts.md)
4. [Human Governance](../Concepts/HumanGovernance.md)
5. [Authority Model](../Concepts/AuthorityModel.md)

This route explains the product before introducing repository setup or execution.

### I want to place AI-DOS in a repository

Continue with:

1. [Installation](Installation.md)
2. [First Target](FirstTarget.md)
3. [Quick Start](QuickStart.md)

This route establishes the product/Target boundary before issuing an execution request.

### I own or govern a Target Project

Focus on:

1. Target identity and truth ownership
2. the Target contract
3. the Target Operational Entry
4. protected areas
5. current operational state
6. exact execution authority
7. validation and evidence expectations
8. safe-stop conditions

Then use [First Target](FirstTarget.md) to structure the Target without copying AI-DOS product behavior into Target-owned documents.

### I implement or operate an Execution Provider

Read the repository entry and Target contract first, then follow the AI-DOS provider route declared by `docs/AI-DOS/AGENTS.md`.

Do not infer product behavior from repository language, package metadata, or nearby implementation files. The applicable contracts, resolved Target Context, and bounded instruction govern execution.

## The basic operating model

```text
Human Governance
        ↓
Target Project authority and operational state
        ↓
Resolved Target Context
        ↓
AI-DOS contracts and orchestration
        ↓
Compatible Execution Provider
        ↓
Bounded execution, validation, and evidence
        ↓
Human Governance
```

Each part has a separate role.

| Participant or layer | Primary responsibility |
|:---|:---|
| Human Governance | supplies intent, authority, approval, and final governance decisions |
| Target Project | owns mission, planning, operational state, protected areas, resources, and Target evidence |
| Resolved Target Context | carries the exact objective, scope, constraints, resources, authority, validation, and stop conditions needed for the task |
| AI-DOS | supplies reusable product contracts, routing, lifecycle separation, and safe-stop behavior |
| Execution Provider | performs only the bounded work it is authorized and capable to perform |
| Validation and evidence | show what was exercised, changed, completed, blocked, or left untouched |

## What a minimal repository needs

A practical AI-DOS repository normally contains three distinct surfaces:

```text
AGENTS.md                     repository entry and contract discovery

docs/AI-DOS/                 reusable AI-DOS product contracts

docs/Projects/MyTarget/      Target Project truth
```

The exact Target path is Target-owned. The important rule is separation, not a universal Target filename.

### Repository entry

The repository entry tells agents and automation where the authoritative Target contract and AI-DOS provider entry are located.

It should remain small. It is a discovery surface, not a duplicate Target contract or AI-DOS workflow.

### AI-DOS product root

The AI-DOS product root contains reusable contracts and product truth.

It must not contain the live mission, planning, status, evidence, or protected-area declarations of a particular Target Project.

### Target Project truth root

The Target truth root contains project-specific authority such as:

- mission and strategic constraints;
- Target contract;
- operational entry and current state;
- planning and capability boundaries;
- protected areas;
- Target resources;
- permissions and execution authority;
- validation requirements;
- evidence and reports.

A Target consumes AI-DOS contracts. It does not redefine AI-DOS product behavior.

## Before the first execution

Confirm the following before asking a provider to modify anything.

### 1. Target identity is explicit

The provider must know which Target Project is being operated on.

A repository containing several projects must not rely on folder proximity or model judgment to choose one.

### 2. Authority is explicit

The requested action must have a clear authority source.

Technical capability does not create permission.

### 3. Scope is bounded

Identify the exact objective and allowed artifact surface.

A good bounded instruction makes clear:

- what outcome is required;
- which files or artifacts may change;
- which areas are forbidden;
- which validation is expected;
- what completion looks like;
- when the provider must stop.

### 4. Protected areas are declared

Protected areas are not suggestions. A conflict with a protected area requires safe-stop unless exact authority resolves the conflict.

### 5. Validation is named

Validation must match the surface being changed.

For example, an implementation-specific check may validate a CLI or package surface, but it does not automatically validate Markdown contract integrity, governance correctness, Target acceptance, or product-wide architecture.

### 6. Evidence expectations are known

The provider should be able to report:

- the resolved objective;
- authorities and resources consumed;
- artifacts changed;
- validation performed;
- results, warnings, and blockers;
- protected-area confirmation;
- completion condition;
- state-update authority or the absence of it.

## Your first bounded instruction

A first instruction should be small enough to review completely.

A useful structure is:

```text
Objective:
Complete exactly one clearly named outcome.

Allowed scope:
List the exact files or artifact family that may change.

Forbidden scope:
List protected or unrelated areas that must remain untouched.

Validation:
Name the checks or review criteria that apply.

Completion condition:
Describe the observable result.

Stop conditions:
Stop on missing authority, ambiguous scope, conflicting context,
protected-area conflict, or failed required validation.
```

The instruction may be expressed in natural language. What matters is that its meaning resolves to one bounded authorized work unit.

## What happens after the instruction

A compatible execution flow typically performs these stages:

1. discover the repository and Target contracts;
2. resolve Target identity and current context;
3. resolve authority and protected boundaries;
4. determine whether the task is already sufficiently bounded;
5. select or construct work only when the applicable contracts authorize it;
6. execute through the applicable provider route;
7. validate the changed surface;
8. produce attributable evidence;
9. recommend or apply a state transition only when exact authority exists;
10. return control to Human Governance.

These stages are related but not interchangeable.

```text
Request ≠ authorization
Candidate ≠ selection
Selection ≠ activation
Activation ≠ execution
Completion ≠ validation
Validation ≠ review
Review ≠ approval
Approval ≠ certification
Certification ≠ promotion
Promotion ≠ release
```

## Safe-stop is a valid outcome

AI-DOS is designed to stop rather than invent missing authority or context.

Common safe-stop conditions include:

- Target identity cannot be resolved;
- required Target resources are missing or contradictory;
- no exact authority exists for the requested mutation;
- more than one candidate remains without a valid tie-break;
- scope is too broad or ambiguous;
- a protected area would be changed without permission;
- reviewed-subject identity has drifted;
- required validation fails;
- a requested state update is not authorized.

A safe-stop should explain the blocker and preserve the repository. It should not silently substitute a different task.

## Product and Target truth must remain separate

This distinction is foundational.

| AI-DOS product truth | Target Project truth |
|:---|:---|
| reusable contracts | project mission |
| provider routing | planning and roadmap |
| workflow behavior | current operational state |
| lifecycle semantics | project-specific protected areas |
| generic validation and review contracts | Target-owned validation declarations |
| safe-stop behavior | Target resources and evidence |

The Target may reference AI-DOS contracts. AI-DOS should not embed the live state of a particular Target.

## Current implementation boundary

AI-DOS is MD-first. Its governing Markdown artifacts are the canonical normative product surface.

TypeScript, JavaScript, Node.js, npm, CLI, test, CI, adapter, or distribution artifacts may implement bounded capabilities. They do not by their presence define the AI-DOS architecture, kernel, future implementation direction, or complete system behavior.

Treat implementation technology as replaceable unless an exact bounded task gives it authority within a specific surface.

## Complete this section in order

### 1. Installation

[Installation](Installation.md) explains how to place AI-DOS in a repository and establish the repository, product, and Target boundaries.

### 2. First Target

[First Target](FirstTarget.md) explains how to organize a Target Project, declare its authority, and avoid mixing Target truth into the reusable product root.

### 3. Quick Start

[Quick Start](QuickStart.md) walks through issuing a bounded instruction, observing safe-stop behavior, and reading the resulting validation and evidence.

## Where to go next

After completing the Getting Started path:

- use the [Concepts guide](../Concepts/README.md) to deepen the mental model;
- read [Execution Model](../ExecutionModel.md) for the end-to-end operating flow;
- read [Context Resolution](../ContextResolution.md) for Target and authority resolution;
- read [Provider Model](../ProviderModel.md) for provider-neutral execution;
- use [Tutorials](../Tutorials/README.md) for task-oriented walkthroughs;
- use [Reference](../Reference/README.md) for compact lookup material.

## Authority boundary

This guide helps a reader begin using AI-DOS. It does not authorize repository mutation, select a Target, activate a capability, approve work, update Target state, or replace any normative contract.

When this guide and an applicable normative authority differ, the normative authority governs.
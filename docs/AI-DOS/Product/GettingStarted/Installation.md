# Installation

AI-DOS can begin operating inside an existing repository without requiring a standalone agent service, model runtime, or dedicated server.

The minimum useful installation is repository-based:

1. place the reusable AI-DOS product contracts in the repository;
2. declare the Target Project separately;
3. expose the authority-reading order through a root repository entry;
4. connect a compatible external Execution Provider;
5. verify that the provider can resolve one bounded task without inventing authority.

This page is explanatory. Normative behavior remains owned by the applicable AI-DOS contracts, the Target Project contract, and Human Governance decisions.

## Before you install

Confirm that the repository can support the following boundaries:

| Requirement | Why it matters |
|:---|:---|
| AI-DOS product truth has a dedicated root | Reusable product contracts must remain independent of one Target Project. |
| Target Project truth has a separate root | Mission, planning, status, protected areas, and evidence remain Target-owned. |
| The repository has a discoverable entry contract | Agents need an explicit authority-reading order. |
| Human Governance is identified | Capability alone must not become authority. |
| A compatible Execution Provider can read repository files | AI-DOS organizes execution but does not perform repository work by itself. |
| Validation and evidence surfaces are available | Completion claims must be attributable and reviewable. |

Installation should stop when these boundaries cannot be established. Missing authority or ambiguous ownership is not permission to improvise a repository structure.

## Installation model

A typical repository uses the following relationship:

```text
Human Governance
        ↓
Repository entry contract
        ↓
Target Project contract and Target-owned state
        ↓
Resolved Target Context
        ↓
AI-DOS provider entry and operational contracts
        ↓
Compatible Execution Provider
        ↓
Bounded execution, validation, and evidence
        ↓
Human Governance
```

The repository may contain implementation tooling, but the authority chain above is not derived from programming language, package metadata, or build configuration.

## Step 1 — Add the AI-DOS product truth root

Use the following repository path for reusable AI-DOS product truth:

```text
docs/AI-DOS/
```

This root contains reusable product contracts and supporting material such as:

- provider entry and orchestration contracts;
- system rules;
- workflows;
- commands;
- checklists;
- templates;
- architecture records;
- explanatory product documentation.

The exact contents depend on the AI-DOS version being installed. Preserve the supplied structure and internal references unless a separately authorized migration changes them.

### Do not place Target truth here

The AI-DOS product root must not contain a Target Project's live:

- mission;
- roadmap;
- development phases;
- operational status;
- active task;
- protected-area values;
- project-specific authorization;
- project evidence;
- release or acceptance state.

Those values belong to the Target Project.

### Installation methods

The product tree may be supplied through any governed distribution mechanism that preserves its contents and provenance, including:

- copying an approved AI-DOS tree into the repository;
- consuming a packaged distribution;
- using a repository template;
- applying a future installer or synchronization mechanism.

The delivery mechanism does not change ownership. `docs/AI-DOS/` remains reusable product truth regardless of how it arrived.

## Step 2 — Create the Target Project truth root

Keep project-specific truth outside `docs/AI-DOS/`.

A recommended layout is:

```text
docs/Projects/<TargetName>/
├── Mission/
├── Planning/
├── Reports/
└── Skills/          optional Target-owned discovery helpers
```

The directory names beyond the Target root are recommendations, not universal fixed requirements. The Target Project owns its exact structure and filenames.

At minimum, the Target must make the following categories discoverable through its contract:

| Target-owned category | Typical content |
|:---|:---|
| Identity | Project name, role, and truth root |
| Mission | Purpose, strategic direction, and constraints |
| Operational entry | Current state and the authoritative starting point for work resolution |
| Resources | Planning, evidence, source, and validation locations |
| Protected areas | Artifacts or capabilities requiring additional authority |
| Execution authority | What work may be selected, activated, or performed |
| Validation expectations | Checks and evidence required for completion |
| Safe-stop behavior | Conditions under which work must not proceed |

The Target contract should expose these resources. Agents must not be expected to discover them by guessing filenames or searching for nearby documents.

## Step 3 — Add the Target Project contract

Create one canonical Target Project contract under the Target truth root.

The contract should identify:

- Target Project identity;
- Target truth root;
- Human Governance authority;
- mission authority;
- Target operational entry;
- declared Target resources;
- protected areas;
- work-resolution rules;
- execution authorization boundaries;
- validation and evidence expectations;
- state-update authority;
- safe-stop conditions.

The Target contract owns project-specific truth. It should consume reusable AI-DOS behavior by reference rather than copying AI-DOS workflow algorithms into Target documentation.

### Target contract test

A compatible provider reading only the declared entry chain should be able to answer:

1. Which Target Project is active?
2. Where is its current operational state?
3. What work is authorized now?
4. Which areas are protected?
5. What validation and evidence are required?
6. What condition requires safe-stop?

Installation is incomplete when those answers depend on model judgment or repository archaeology.

## Step 4 — Add the root repository entry

Create a root-level file:

```text
AGENTS.md
```

The root entry is a discovery contract. It should identify:

- repository identity and role;
- canonical Target Project contract;
- AI-DOS provider entry contract;
- mandatory reading order;
- product truth and Target truth roots;
- any repository-wide interpretation boundaries.

A minimal conceptual route is:

```text
AGENTS.md
    ↓
Target Project contract
    ↓
Target operational entry and declared resources
    ↓
Resolved Target Context
    ↓
docs/AI-DOS/AGENTS.md
    ↓
Applicable AI-DOS workflow, command, and execution sequence
```

The root entry should remain small. It discovers authority; it does not duplicate the complete Target contract, AI-DOS architecture, workflow logic, or live project status.

## Step 5 — Confirm the AI-DOS provider entry

The reusable provider entry is:

```text
docs/AI-DOS/AGENTS.md
```

It accepts Resolved Target Context and routes the Execution Provider into the AI-DOS operational core.

The Target Project should not need to know provider-internal implementation details. It supplies Target-owned authority and context; AI-DOS supplies reusable execution contracts; the external provider performs the work.

Do not replace the provider entry with:

- a Target-specific planning file;
- a tool-specific prompt alone;
- a package manifest;
- a source-code entry point;
- a model vendor configuration;
- a repository README.

Those artifacts may support operation, but they do not own the AI-DOS provider contract.

## Step 6 — Connect a compatible Execution Provider

AI-DOS is not the executing model or agent host. Use an external provider capable of:

- reading repository Markdown and referenced files;
- respecting explicit reading order and authority precedence;
- applying bounded scope;
- preserving protected areas;
- editing only authorized artifacts;
- running or reporting applicable validation;
- returning attributable evidence;
- stopping when context or authority is insufficient.

Examples may include coding agents, repository agents, command-line assistants, or other automation hosts. Compatibility depends on behavior, not brand.

A provider is not compatible merely because it can edit files. It must also respect authority, scope, lifecycle, validation, evidence, and safe-stop boundaries.

## Step 7 — Declare validation surfaces

The Target Project should identify the checks relevant to its work. These may include:

- Markdown structure or link validation;
- schema validation;
- repository-specific tests;
- static analysis;
- type checking;
- package or build checks;
- scenario evaluation;
- manual review criteria;
- evidence-record requirements.

Each validation claim must name the surface actually exercised.

For example, a successful implementation test does not automatically prove:

- governance correctness;
- Target-state correctness;
- Markdown contract consistency;
- architectural conformance;
- Human Governance acceptance;
- certification or release readiness.

Broader claims require evidence appropriate to those claims.

## Step 8 — Perform the installation verification

Use a read-only verification before allowing repository mutation.

### Verification A — Product and Target separation

Confirm that:

```text
docs/AI-DOS/                 reusable AI-DOS product truth
docs/Projects/<TargetName>/  Target Project truth
```

No live Target planning or state should be stored as reusable AI-DOS product truth.

### Verification B — Authority discovery

Starting from root `AGENTS.md`, confirm that a provider can deterministically locate:

1. the Target Project contract;
2. the Target operational entry;
3. the declared Target resources;
4. `docs/AI-DOS/AGENTS.md`;
5. the applicable provider route.

### Verification C — Bounded-task resolution

Supply one explicitly bounded, read-only task. The provider should be able to report:

- objective;
- allowed scope;
- forbidden scope;
- authorities read;
- validation expectations;
- evidence expectations;
- stop conditions.

It should not edit files during this verification.

### Verification D — Safe-stop

Remove or withhold one required authority input in a controlled test. The provider should stop and identify the missing input rather than inventing a substitute.

### Verification E — Evidence quality

Confirm that the provider's report distinguishes:

- what it read;
- what it inferred;
- what it changed, if anything;
- what validation ran;
- what remains unverified;
- what Human Governance decision is still required.

## Minimal repository example

```text
repository-root/
├── AGENTS.md
├── docs/
│   ├── AI-DOS/
│   │   ├── AGENTS.md
│   │   ├── AIFramework.md
│   │   ├── AIOrchestrator.md
│   │   ├── AgentSystemPrompt.md
│   │   ├── System/
│   │   ├── Workflows/
│   │   ├── Commands/
│   │   ├── Checklists/
│   │   ├── Templates/
│   │   └── Product/
│   └── Projects/
│       └── ExampleTarget/
│           ├── Mission/
│           │   └── AGENTS.md
│           ├── Planning/
│           └── Reports/
└── implementation-and-validation-surfaces/
```

This is an illustrative layout, not a universal filename mandate. The Target contract remains responsible for declaring the actual resources.

## Common installation mistakes

### Mixing product truth and Target truth

Do not store one project's live status, roadmap, or evidence under `docs/AI-DOS/`.

### Treating a tool adapter as canonical governance

Tool-specific adapters may help a host discover the Target contract. They must not become independent or divergent authority.

### Treating source code as the AI-DOS kernel by proximity

A CLI, script, package, or source entry may be a bounded implementation surface. It does not automatically define AI-DOS product architecture.

### Copying workflows into the Target contract

Target documentation should bind Target-owned values to reusable AI-DOS contracts. It should not duplicate provider-owned algorithms.

### Granting authority through installation

Installing AI-DOS does not authorize work, activate capabilities, approve a task, or permit state mutation.

### Skipping safe-stop verification

A provider that cannot stop safely when required context is missing is not ready for governed execution.

### Claiming installation proves readiness

Installation establishes the contract structure. Operational readiness, validation, review, acceptance, certification, and release remain separate lifecycle states.

## Installation completion checklist

Installation is structurally complete when all of the following are true:

- [ ] `docs/AI-DOS/` contains the reusable AI-DOS product contracts.
- [ ] The Target Project has a separate declared truth root.
- [ ] One canonical Target Project contract is discoverable.
- [ ] One Target operational entry is declared.
- [ ] Root `AGENTS.md` exposes the mandatory reading order.
- [ ] `docs/AI-DOS/AGENTS.md` is reachable through that order.
- [ ] Product truth and Target truth are not mixed.
- [ ] Protected areas are explicit.
- [ ] Execution authority is explicit.
- [ ] Validation and evidence expectations are explicit.
- [ ] A compatible provider can resolve one bounded task without inventing authority.
- [ ] Missing required context produces safe-stop.
- [ ] Installation has not been mistaken for activation, approval, certification, or release.

## After installation

Continue with:

1. [First Target](FirstTarget.md) — establish the first Target Project and its owned authority surfaces.
2. [Quick Start](QuickStart.md) — issue and observe one bounded instruction through a compatible provider.
3. [Getting Started](README.md) — review the complete onboarding sequence and readiness boundaries.

For conceptual grounding, see [What Is AI-DOS?](../Concepts/WhatIsAIDOS.md) and [Authority Model](../Concepts/AuthorityModel.md).

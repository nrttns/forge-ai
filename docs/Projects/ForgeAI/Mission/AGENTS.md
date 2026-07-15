<!--
Identifier: FORGE-AI.TARGET.AGENTS-CONTRACT
Title: AGENTS.md — Forge AI Target Project Contract
Version: 1.2.0-draft
Status: Draft
Owner: Forge AI Target Project Governance
Updated: 2026-07-15
-->

# AGENTS.md — Forge AI Target Project Contract

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.AGENTS-CONTRACT` |
| Title | AGENTS.md — Forge AI Target Project Contract |
| Version | `1.2.0-draft` |
| Status | Draft |
| Classification | Forge AI Target Project Contract |
| Document Type | Target Project Contract |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-15 |
| Scope | Forge AI Target Project identity, declared Target resources, operational entry, protected areas, state-derived work resolution, execution authorization boundaries, validation expectations, evidence expectations, and state-update authority. |
| Out of Scope | Execution-provider identity, provider discovery, provider startup, provider internal paths, provider architecture, workflow routing, command routing, runtime behavior, implementation design, automatic state updates, and planning-document redesign. |
| Normative Authority | Human Governance |
| Mission Source | `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md` |
| DevelopmentPhases | `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Roadmap | `docs/Projects/ForgeAI/Planning/Roadmap.md` |
| ProjectStatus | `docs/Projects/ForgeAI/Planning/ProjectStatus.md` |
| Operational Entry | `docs/Projects/ForgeAI/Planning/ProjectStatus.md` |

---

## 1. Target Project Identity

| Field | Value |
|:---|:---|
| Target Project | Forge AI |
| Project Role | Development and autonomy enablement Target Project |
| Project Truth Root | `docs/Projects/ForgeAI/` |
| Product / Provider Truth Root | `docs/AI/` |
| Mission Authority | `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md` |

Forge AI owns its project mission, planning, operational state, evidence, authorization, protected areas, and Target resources.

Provider or product truth is separate from Forge AI Target Project truth.

This contract does not identify, select, invoke, or configure an execution provider.

---

## 2. Mission Authority

Forge AI mission and autonomy direction are defined only by:

`docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md`

This contract consumes that mission authority but does not duplicate or redefine it.

Any task selected or executed for Forge AI must remain consistent with the declared mission, current operational state, active capability, protected areas, and Human Governance decisions.

---

## 3. Declared Target Resources

Forge AI declares the following Target-owned resources:

| Resource | Path | Purpose |
|:---|:---|:---|
| Mission | `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md` | Mission, autonomy direction, strategic constraints, and governance intent |
| ProjectStatus | `docs/Projects/ForgeAI/Planning/ProjectStatus.md` | Live operational state and exactly authorized next action |
| DevelopmentPhases | `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` | Active capability boundary and maturity progression |
| Roadmap | `docs/Projects/ForgeAI/Planning/Roadmap.md` | Capability direction, dependencies, advancement evidence, and strategic priority |
| Reports | `docs/Projects/ForgeAI/Reports/` | Target Project operational evidence and findings |
| Source / implementation resources | Repository paths declared or authorized by the active task | Task-specific implementation surface |
| Validation resources | Repository-declared tests, scripts, checks, and task-specific validation requirements | Evidence-backed verification |

Target resources must be explicit, task-relevant, and bounded.

Missing, contradictory, inaccessible, or unauthorized resources are blockers. They are not permission to invent context or work.

---

## 4. Target Operational Entry

Forge AI exposes exactly one Target Operational Entry:

`docs/Projects/ForgeAI/Planning/ProjectStatus.md`

The Target Operational Entry identifies the current operational state of Forge AI and the authoritative starting point for Target-side work resolution.

The Target Operational Entry belongs only to Forge AI Target Project truth.

It does not identify:

- an execution provider;
- provider documents;
- provider internal navigation;
- provider startup procedures;
- provider workflows;
- provider commands;
- provider runtime components;
- provider implementation.

Any authorized execution provider or automation host may consume the Target Operational Entry without requiring Forge AI to know that provider's identity, location, or implementation.

---

## 5. State-Derived Work Resolution

State-Derived Work Resolution applies when:

1. the invocation requests Forge AI progress, continuation, advancement, next work, or execution; and
2. no sufficiently bounded executable task has been supplied.

The behavior is triggered by invocation intent, not by any specific word or phrase.

### 5.1 Required Resolution Order

Resolve Target-side work context in this order:

```text
Target Operational Entry
    ↓
ProjectStatus
    ↓
DevelopmentPhases
    ↓
Roadmap
    ↓
Task-specific Target authority, when declared
```

### 5.2 Resolution Rules

1. Read ProjectStatus and resolve the exactly one active task or exactly one authorized next action.
2. Read DevelopmentPhases and identify the current capability boundary.
3. Read Roadmap and identify the applicable capability direction, dependencies, advancement evidence, and strategic priority.
4. Resolve any task-specific Target authority explicitly declared by the active task.
5. Preserve protected areas and execution constraints.
6. Produce Target Context containing the resolved objective, scope, constraints, resources, evidence expectations, and state-update authority.
7. Do not select work merely because it is easy, nearby, recently modified, already tested, buildable, or a continuation of the last implementation.
8. Do not treat repository activity as Target progress unless it directly advances the active capability and authorized objective.
9. Do not invent a task when the authoritative Target state cannot resolve one.
10. If exactly one bounded authorized action cannot be resolved, stop and report a blocker.

### 5.3 Explicitly Bounded Tasks

When Human Governance supplies an already bounded task with:

- explicit objective;
- authorized scope;
- expected artifacts or files;
- protected boundaries;
- validation requirements;
- completion condition;

that task remains the active Target instruction.

It must not be replaced, broadened, or reinterpreted through state-derived work resolution.

---

## 6. Protected Areas

| Protected Area | Protection Rule |
|:---|:---|
| Root repository entry | Modify only through an explicitly authorized repository-entry task. |
| Target Project contract | Modify only through an explicitly authorized Target contract task. |
| Mission and autonomy model | Read-only unless Human Governance explicitly authorizes mission work. |
| ProjectStatus | Read-only unless the active task authorizes the exact state transition, Human Governance explicitly authorizes the exact state transition, or Human Governance approval intent uniquely derives the exact operational-state transition. |
| DevelopmentPhases | Read-only unless planning realignment is explicitly authorized. |
| Roadmap | Read-only unless roadmap work is explicitly authorized. |
| Evidence records | Preserve provenance; do not delete, obscure, rewrite, or fabricate evidence. |
| Product / provider truth | Do not insert Forge AI project truth into `docs/AI/` or modify product truth unless the active task explicitly authorizes product work. |
| External Target scope | Do not activate or modify another Target Project without explicit authority. |

A protected-area conflict must stop work and be reported as a blocker.

---

## 7. Execution Authorization Boundaries

Execution must remain bounded, explicit, evidence-backed, and Human-Governed.

| Constraint | Rule |
|:---|:---|
| Authorized objective | Execute only the resolved or explicitly supplied objective. |
| Scope | Modify only task-required files and artifacts. |
| No expansion | Do not add objectives, files, lifecycle changes, or follow-up work by implication. |
| Exactly one work unit | When the active state authorizes one work unit, execute only one. |
| Protected areas | Refuse unauthorized protected-area changes. |
| Validation | Run applicable checks or report why they could not be run. |
| Evidence | Record inputs, inspected resources, changes, validation, blockers, risks, and completion condition. |
| Review / approval | Review findings do not replace Human Governance approval. |
| State mutation | Do not update live state without exact authorization. |
| Provider independence | Do not require Forge AI to know or declare provider internals. |

---

## 8. Validation and Evidence Expectations

Every completed Target task must produce enough evidence for Human Governance to determine what occurred and whether the result should be accepted.

Minimum evidence:

| Evidence Type | Requirement |
|:---|:---|
| Objective | State the resolved or explicitly supplied objective. |
| Target Context | Identify Target resources and authorities actually consumed. |
| Selected work | Identify the one bounded work unit, when state-derived selection was required. |
| Selection basis | Explain its direct relation to the active capability and authorized objective. |
| Changed artifacts | List every modified artifact or state that none changed. |
| Validation | Report commands, results, warnings, failures, skipped checks, and environment limitations. |
| Protected-area proof | Confirm no unauthorized protected area changed. |
| Completion proof | Demonstrate that the declared completion condition was met. |
| Blockers and risks | Report uncertainty, missing authority, failed validation, or unresolved constraints honestly. |
| State-update policy | State whether live-state mutation was authorized. |
| Recommended next step | Provide only an authorized or clearly labeled recommended next step. |

Evidence must be specific, traceable, and honest.

Repository motion, documentation volume, commits, or passing tests do not by themselves prove Target progress.

---

## 9. Project State Update Authority

ProjectStatus may be modified only when:

1. Human Governance explicitly authorizes the exact state transition;
2. Human Governance approval intent uniquely authorizes the exact operational-state transition after ProjectStateUpdater consumes current ProjectStatus, DevelopmentPhases, Roadmap, completed validation evidence, completed review evidence, and protected-boundary and dependency state;
3. the active task is a dedicated ProjectStatus task; or
4. the active task instruction directly authorizes a specific operational-state update.

Approval intent must route to ProjectStateUpdater when the current lifecycle gate requires an operational-state transition. TaskPlanner must not block, replace, or convert that approval-state transition into repository work selection. TaskGenerationWorkflow is not required for approval decisions or lifecycle state transitions unless a separate executable repository work unit is actually selected.

ProjectStateUpdater must safe-stop without mutation when the transition is not unique, review has unresolved blocking findings, dependencies are unmet, or a protected boundary would be activated.

Without exact authorization or uniquely derivable Human Governance approval intent:

- do not modify ProjectStatus;
- provide only a recommended ProjectStatus update;
- label it as a recommendation.

No invocation intent grants automatic state-update authority.

---

## 10. Working Principles

- Target truth remains Target-owned.
- Provider truth remains separate.
- Human Governance remains final.
- Mission, planning, state, and evidence must remain traceable.
- State-derived work must come from authoritative Target state.
- Explicit bounded tasks must not be broadened.
- Missing authority is a blocker, not permission.
- Repository activity is not automatically capability progress.
- Validation is mandatory.
- Review is not approval.
- Safe stopping is preferable to unauthorized completion.
- External Target readiness requires independent evidence.

---

## 11. Non-Goals

This Target Project contract does not define:

- execution-provider identity;
- provider discovery;
- provider startup;
- provider internal paths;
- provider architecture;
- provider runtime behavior;
- provider workflow or command routing;
- provider task-planning implementation;
- provider state-update implementation;
- universal lifecycle requirements for other Target Projects;
- automatic state, roadmap, phase, stage, sprint, milestone, or backlog behavior.

---

## 12. Version History

| Version | Date | Description |
|:---|:---|:---|
| `1.0.0-draft` | 2026-07-11 | Initial Forge AI Target Project contract. |
| `1.1.0-draft` | 2026-07-14 | Added Target Operational Entry and continuation resolution. |
| `1.2.0-draft` | 2026-07-15 | Refactored the contract around Target-owned truth, provider independence, intent-based state-derived work resolution, bounded execution, validation, evidence, and authorization-bound state updates; removed provider-specific invocation and internal-path responsibilities. |

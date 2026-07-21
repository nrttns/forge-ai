<!--
Identifier: FORGE-AI.TARGET.AGENTS-CONTRACT
Title: AGENTS.md — Forge AI Target Project Contract
Version: 1.7.0-draft
Status: Draft
Owner: Forge AI Target Project Governance
Updated: 2026-07-21
-->

# AGENTS.md — Forge AI Target Project Contract

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.AGENTS-CONTRACT` |
| Title | AGENTS.md — Forge AI Target Project Contract |
| Version | `1.8.0-draft` |
| Status | Draft |
| Classification | Forge AI Target Project Contract |
| Document Type | Target Project Contract |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-21 (Pending Human Governance Approval Subject Policy added) |
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
| Product / Provider Truth Root | `docs/AI-DOS/` |
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
10. When Human Governance expresses continuation, advancement, or next-task intent and no executable work unit is active, authorize provider-side work selection only under the Forge AI policy in Section 5.3.
11. When Human Governance supplies `Next Step: X`, treat `X` as an explicit Target selection that bypasses Target priority ranking only. It does not waive eligibility, dependency, validation, ownership, scope, or protected-area policy.
12. Supply Target-owned objectives, candidate declarations, priority data, protected boundaries, validation sources, and Target-owned generation inputs resolved from ProjectStatus, DevelopmentPhases, Roadmap, and any explicitly declared task-specific Target authority, through Resolved Target Context. Do not reproduce provider-owned schema or algorithms here.
13. Consume provider results only through their owning contracts: `TaskPlanner.md` for selection, `TaskGenerationWorkflow.md` for candidate construction, and `ProjectStateUpdater.md` for state mutation.
14. Missing Target-owned inputs, non-unique Target policy results, or provider safe-stop results do not authorize this contract to invent work or reinterpret product behavior.

### 5.3 Forge AI Priority and Candidate Generation Resolution

For Forge AI state-derived selection, the Target-owned policy is:

1. ProjectStatus identifies the active capability and its applicable Roadmap stream; DevelopmentPhases bounds the capability.
2. Roadmap owns stable Required Evidence identifiers and their declared order.
3. ProjectStatus owns only the current `Accepted`, `Pending`, or `Blocked` value and evidence reference for each identifier. It must not copy the Roadmap item's normative text.
4. The earliest non-`Accepted` identifier controls the Target objective. `Blocked` prohibits fall-through; `Pending` permits provider-side candidate resolution.
5. Narrative history, repository activity, merge state, proximity, convenience, or model judgment cannot establish an evidence status, priority, candidate, or tie-break.
6. Roadmap stream and DevelopmentPhases order are boundaries, not authority to activate another stream or phase.
7. Provider selection, generation, minimality, safe-stop, and activation mechanics are consumed by reference from their AI-DOS owners and are not Target truth.

This section supplies only Forge AI's Target-owned policy and bindings. It does not define provider workflow behavior.

### 5.4 Explicitly Bounded Tasks

When Human Governance supplies an already bounded task with:

- explicit objective;
- authorized scope;
- expected artifacts or files;
- protected boundaries;
- validation requirements;
- completion condition;

that task remains the active Target instruction.

It must not be replaced, broadened, or reinterpreted through state-derived work resolution.

### 5.5 Forge AI Pending Human Governance Approval Subject Policy

This subsection supplies Forge AI's Target-owned schema binding and resolution policy for Human Governance approval intent that does not repeat an artifact identity. It does not restate or duplicate `docs/AI-DOS/Workflows/ProjectStateUpdater.md` mutation mechanics, `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.7-Review-Engine-RFC.md` reviewed-subject-identity semantics, or `docs/AI-DOS/Checklists/AgentReviewChecklist.md` §7 gate mechanics; it binds them to a single Target-owned record.

1. The canonical Target-owned location of a Pending Human Governance Approval Subject is `docs/Projects/ForgeAI/Planning/ProjectStatus.md` §6.1. No other artifact, and no external provider state (including GitHub pull request state), is Target-owned truth for this purpose.
2. At most one subject may hold `Awaiting Human Governance Approval` state at a time. A subject enters that state only through an explicitly authorized dedicated recording task under Section 9, supplying a complete canonical Review Subject Locator, a complete canonical Reviewed-Subject Revision Identity, an approval-eligible Review Outcome, required validation evidence, and required completion/integration evidence, with no unresolved blocker. A subject lacking any of these is not eligible to be recorded, regardless of merge, completion, or review status alone.
3. Bare Human Governance approval intent — approval expressed without repeating the subject's identity — may resolve a subject only when exactly one `Awaiting Human Governance Approval` subject is canonically recorded in ProjectStatus §6.1. Zero recorded subjects, more than one, or a structurally invalid record require safe-stop; none of them authorize repository-derived, GitHub-derived, or model-judgment-derived substitute selection.
4. `docs/AI-DOS/Workflows/ProjectStateUpdater.md` shall deterministically re-resolve the Reviewed-Subject Revision Identity through its recorded Review Subject Locator immediately before applying approval, consistent with the reviewed-subject re-resolution discipline `docs/AI-DOS/System/ExecutionSequence.md` §3 requires for review. Identity drift, or an unresolvable locator or identity, invalidates the subject and requires safe-stop rather than approval.
5. Explicit Human Governance approval that names an exact subject identity remains valid whether or not a Section 6.1 record exists, consistent with prior accepted practice (for example PR #247 and PR #250 acceptance). When a Section 6.1 record does exist and the explicitly named identity conflicts with it, that conflict is a safe-stop condition, not a tie-break.
6. A subject already `Accepted` or `Invalidated` is not eligible for approval; a repeated approval attempt against it is a safe-stop, not a re-acceptance.
7. Approval accepted under this policy authorizes only the resolved subject's gate-closing ProjectStatus transition. It must never be interpreted as GitHub pull request review submission, merge authorization, continuation, candidate generation, candidate selection, capability activation, or execution of the approved or any other work unit. GitHub self-approval or branch-protection restrictions have no bearing on this Target-owned approval semantics.
8. This policy does not itself record, generate, select, or activate a subject, and does not retroactively classify any historical pull request as pending or accepted.

---

## 6. Protected Areas

| Protected Area | Protection Rule |
|:---|:---|
| Root repository entry | Modify only through an explicitly authorized repository-entry task. |
| Target Project contract | Modify only through an explicitly authorized Target contract task. |
| Mission and autonomy model | Read-only unless Human Governance explicitly authorizes mission work. |
| ProjectStatus | Read-only unless the active task authorizes the exact state transition, Human Governance explicitly authorizes it, Human Governance approval intent uniquely derives the exact acceptance transition, or Human Governance continuation/next-task intent uniquely derives activation of one Task Planner-selected bounded work unit under Section 5. |
| DevelopmentPhases | Read-only unless planning realignment is explicitly authorized. |
| Roadmap | Read-only unless roadmap work is explicitly authorized. |
| Evidence records | Preserve provenance; do not delete, obscure, rewrite, or fabricate evidence. |
| Product / provider truth | Do not insert Forge AI project truth into `docs/AI-DOS/` or modify product truth unless the active task explicitly authorizes product work. |
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

Approval intent and continuation intent must be passed to the applicable AI-DOS owner with this contract's Target-owned transition policy and current state. `ProjectStateUpdater.md` exclusively owns mutation procedure; `TaskPlanner.md` exclusively owns candidate selection; `TaskGenerationWorkflow.md` exclusively owns generated-candidate construction. This contract neither restates nor overrides those procedures.

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
| `1.3.0-draft` | 2026-07-20 | Restored Human Governance continuation and next-task intent as authorization for deterministic selection and activation of exactly one bounded work unit when no executable task is active; defined Forge AI priority as the earliest unmet Required Evidence item in the current Roadmap stream, ranking-only `Next Step: X` selection, tie/no-candidate safe-stop evidence, protected-boundary preservation, and separation between activation and execution. |
| `1.4.0-draft` | 2026-07-20 | Made Forge AI priority status explicit: Roadmap owns exact Required Evidence order, ProjectStatus owns an exact item-by-item status table, and missing/mismatched status or any narrative inference requires safe-stop. |
| `1.5.0-draft` | 2026-07-20 | Authorized continuation-driven deterministic generation of the smallest capability-grounded bounded candidate when no predeclared candidate is eligible; defined finite Target-owned generation profiles, exhaustive mechanical enumeration, exact grounding, artifact-set minimality, revalidation, activation, and non-unique safe-stop rules. |
| `1.6.0-draft` | 2026-07-20 | Restored single semantic ownership: retained only Forge AI Target policy and bindings, replaced copied provider algorithms with references to their AI-DOS owners, and changed Roadmap evidence matching to stable Target-owned identifiers. |
| `1.7.0-draft` | 2026-07-21 | Removed the obsolete named candidate-generation source-profile mechanism from the Target contract: replaced the profile-specific input language in §5.2 Rule 12 with provider-neutral Target-owned generation inputs resolved from ProjectStatus, DevelopmentPhases, Roadmap, and declared task-specific Target authority, and removed the §5.3 rule defining that profile as a Target-owned data instance. Roadmap remains the sole Target-owned source of generation-grade capability detail; no replacement profile artifact or new planning layer was introduced. |
| `1.8.0-draft` | 2026-07-21 | Added §5.5 Forge AI Pending Human Governance Approval Subject Policy: binds `ProjectStatus.md` §6.1 as the sole Target-owned, provider-neutral location for a subject awaiting Human Governance approval; states cardinality, recording eligibility, bare-approval and explicit-approval resolution rules, mandatory re-resolution before applying approval, non-reinterpretation as GitHub review/merge/continuation/generation/selection/activation/execution, and irrelevance of GitHub self-approval restrictions. Consumes but does not restate `ProjectStateUpdater.md`, `ExecutionSequence.md` §3, `A.5.7-Review-Engine-RFC.md` §5, and `AgentReviewChecklist.md` §7. No candidate was recorded, selected, generated, activated, or accepted; no historical pull request was retroactively classified. |

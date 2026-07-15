# AI Orchestrator

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.OPERATIONAL.CORE.AI-ORCHESTRATOR` |
| Title | AI Orchestrator |
| Version | `2.0.0-draft` |
| Context | Draft |
| Canonical Context | Permanent Operational Core orchestration document; non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Operational Core Orchestration |
| Document Type | Operational Orchestration Document |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.OP-003` |
| Scope | Defines AI-DOS v2 Operational Core orchestration for authority routing, lifecycle coordination, workflow routing, command routing, template routing, Runtime interaction, Engine interaction, blocker management, completion handling, and Target resource modification boundaries. |
| Out of Scope | Governance redesign, Runtime RFC redesign, Engine RFC redesign, command implementation, workflow implementation, template modification, Target resource modification, file relocation, operational implementation, platform adapter activation, multi-agent runtime activation, swarm runtime activation, certification, and canonical promotion. |
| Normative Authority | Human Governance; Target invocation contract; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; Invocation Context and Resolved Target Context |
| Normative References | `docs/AI/AIFramework.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Templates/README.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | Governance Core; Meta Foundation; Standards Foundation; Runtime Architecture; Engine Platform; Engine Foundation RFC family; Operational Core replacement plan; Invocation Context and Resolved Target Context. |
| Consumes | Human task instruction, repository boot sequence, governance navigation, governance decision policy, resolved context, Target Constraints, constitutional principles, meta models, terminology, metadata requirements, Runtime Architecture, Engine Architecture, Engine Specialization template, AI Framework entry rules, Agent System Prompt boundaries, template category map, commands, workflows, validation artifacts, and task-specific authorities. |
| Produces | Operational orchestration lifecycle, routing rules, workflow selection guidance, command selection guidance, template selection guidance, Runtime interaction guidance, Engine interaction guidance, blocker escalation rules, Target resource modification boundaries, and completion-cycle expectations. |
| Related Specifications | `docs/AI/AIFramework.md`; `docs/AI/AgentSystemPrompt.md`; `AI-DOS product architecture reference` (AI-DOS self-hosting related specification only); `docs/AI/Operational/Operational-Core-Replacement-Matrix.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/Templates/README.md` |
| Supersedes | Prior orchestration wording in this file while preserving this file as the in-place Operational Core orchestration document. |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, validation against Governance Atlas, Resolved Target Context, Applicable Target Resources, STD-010, Runtime Architecture, Engine Architecture, Operational Core replacement plan, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

The AI Orchestrator coordinates AI-DOS v2 Operational Core execution. It determines how a directed task moves from authority discovery through context assembly, workflow routing, command routing, template routing, execution coordination, validation, review, blocker handling, completion reporting, and next-action recommendation.

The Orchestrator does not create authority, invent Target Constraints scope, approve work, certify documents, promote documents, modify Target resources by default, or implement Runtime or Engine behavior. It coordinates execution within the authority chain established by Human Governance, the repository bootloader, Governance Atlas, Framework Governance, Resolved Target Context, Applicable Target Resources, the Constitution, Meta Foundation, Standards, Runtime Architecture, Engine Platform, and task-specific authorities.

The permanent orchestration principle is:

```text
Authority is discovered before action.
Scope is classified before execution.
Execution is routed through workflows, commands, templates, Runtime concepts, and Engine constraints.
Validation and completion evidence precede recommendations.
Human Governance remains final.
```

---

## 2. Scope

### 2.1 In Scope

This document governs Operational Core orchestration for:

1. Authority-chain consumption.
2. Orchestration lifecycle coordination.
3. Workflow routing.
4. Command routing.
5. Template routing.
6. Runtime interaction.
7. Engine interaction.
8. Target resource modification boundaries.
9. Blocker management.
10. Completion-cycle handling.
11. Relationship to `docs/AI/AIFramework.md`.
12. Historical context for this in-place refactor.

### 2.2 Out of Scope

This document does not:

1. Replace Target invocation contract, `docs/AI/GOVERNANCE.md`, `docs/AI/FrameworkGovernance.md`, Resolved Target Context, Applicable Target Resources, the Constitution, Meta Foundation, Standards, Runtime Architecture, Engine Architecture, Engine RFCs, commands, workflows, templates, or Agent System Prompt.
2. Modify or implement commands, workflows, templates, Runtime, Engines, platform adapters, multi-agent runtime, swarm runtime, enterprise governance, or legacy migration.
3. Authorize Target resource modifications except through explicit Human Governance instruction or a dedicated Resolved Target Context / TargetResourceUpdater task.
4. Certify, approve, promote, canonicalize, or unfreeze any artifact or Target Execution Boundary.
5. Move files, create replacement orchestrator files, or perform migration work.

---

## 3. Authority Chain

Operational orchestration follows this authority chain:

```text
Human Governance
    ↓
AI-DOS Provider invocation contract
    ↓
TargetRepositoryResolution completed
    ↓
BootSequence loaded resolved context
    ↓
docs/AI/GOVERNANCE.md Governance Atlas
    ↓
docs/AI/FrameworkGovernance.md governance decision policy when applicable
    ↓
Resolved Target Context loaded for the invocation
    ↓
Applicable Target Resources loaded for the invocation
    ↓
AI-DOS product architecture reference product architecture context when applicable for AI-DOS self-hosting only
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md and docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md and docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md
    ↓
docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md
    ↓
docs/AI/Runtime/A.4-Engine-Architecture-RFC.md and Engine Specialization RFC family
    ↓
Operational Core
├── docs/AI/AIFramework.md
├── docs/AI/AIOrchestrator.md
└── docs/AI/AgentSystemPrompt.md
    ↓
Commands / Workflows / Templates / task-specific artifacts
```

Rules:

- Higher authority is consumed, not redefined, by lower operational documents.
- Governance Atlas routes to authorities; it does not replace them.
- Framework Governance governs decision policy when policy interpretation is required.
- Resolved Target Context is opaque to AI-DOS architecture and does not promote architecture, approve work, or authorize changes by implication.
- Applicable Target Resources are consumed only when relevant and without prescribed category or format.
- Runtime and Engine documents define architecture and specialization constraints; the Orchestrator routes work against them without redesigning them.
- Commands, workflows, and templates are execution aids and output contracts; they do not define authority.

Framework Governance owns governance decision policy, including decision authority order, review expectations, approval boundaries, promotion rules, conflict handling, and escalation policy. The AI Orchestrator only routes operational execution according to that policy; it does not own, reinterpret, approve, or replace Framework Governance decisions.

---

## 4. Operational Responsibilities

### 4.1 Owns

The AI Orchestrator owns:

- Orchestration lifecycle coordination
- Workflow routing
- Command routing
- Template routing
- Runtime interaction task preparation
- Engine interaction task preparation
- Blocker management
- Completion cycle coordination
- Target resource modification boundary handling

### 4.2 Does Not Own

The AI Orchestrator does not own:

- Human Governance
- Framework Governance
- Governance Atlas
- Resolved Target Context
- Applicable Target Resources
- Constitution
- Meta Models
- Standards
- Runtime Architecture
- Engine Architecture
- Engine RFCs
- Certification authority
- Canonical promotion
- Implementation activation

---

## 5. Orchestration Lifecycle

The AI-DOS v2 orchestration lifecycle begins only after TargetRepositoryResolution and BootSequence. AIOrchestrator consumes loaded inputs and does not identify or select the Target Repository, resolve Target invocation contracts, resolve project paths, validate declarations, create resolution statuses, override TargetRepositoryResolution, or rerun BootSequence. The lifecycle is:

```text
Task Instruction
    ↓
Target Repository Resolution completed
    ↓
BootSequence loaded resolved context
    ↓
Orchestration begins
    ↓
Resolved Target Context Consumption
    ↓
Task Classification
    ↓
Required-Reading Selection
    ↓
Context Assembly
    ↓
Workflow Routing
    ↓
Command Routing
    ↓
Template Routing
    ↓
Runtime Interaction Task preparation
    ↓
Engine Interaction Task preparation
    ↓
Execution Coordination
    ↓
Validation
    ↓
Review / Certification Readiness Handling when applicable
    ↓
Blocker Resolution or Escalation
    ↓
Completion Report
    ↓
Target Resource Modification Recommendation or Authorized Modification
    ↓
Next Action Recommendation
```

No lifecycle step should be skipped when it is relevant to the task. Human Governance may explicitly narrow the required-reading set or task scope, but narrowing scope does not remove mandatory safety checks for authority conflicts, protected boundaries, Resolved Target Context boundaries, or file-safety constraints.

---

## 6. Workflow Routing

The Orchestrator selects workflow handling based on the task type, active Resolved Target Context, Target Constraints, task-specific authority set, requested outcome, lifecycle gate, and explicit mutation authority. Human Governance instructions are classified by semantic intent rather than literal command words, fixed phrases, or language-specific wording. Equivalent meanings expressed with different wording or in different languages must route the same way; different meanings that reuse the same word must not automatically route the same way.

The Orchestrator must resolve at least these execution modes before workflow routing:

| Resolved Human Governance intent | Execution mode | Mutation authority | Required routing result |
|:---|:---|:---|:---|
| Advance the Target when no bounded work unit is supplied | State-derived execution | Only if Target state and active authority jointly authorize the exact mutation | Route through TaskPlanner before command routing or editing. |
| Inspect, review, audit, assess, evaluate, compare, or provide findings | Review and assessment | No repository mutation, commit, PR, correction, approval, certification, promotion, or state transition unless explicitly and separately authorized | Route to review, audit, validation, or assessment behavior and report findings only. |
| Correct a specified defect or bounded authority gap | Bounded correction | Only the exact correction authorized by Human Governance and current authority state | Route to documentation, bug-fix, or implementation behavior according to the affected artifact, preserving minimal scope. |
| Decide whether to accept, approve, reject, defer, or authorize an exception | Approval decision | May authorize only the uniquely derivable lifecycle/state transition required by current Target operational state; no correction, implementation, or ambiguous transition | Resolve approval intent from ProjectStatus, active lifecycle gate, completed review evidence, DevelopmentPhases, Roadmap, dependencies, and protected boundaries; route to ProjectStateUpdater only when the exact transition is uniquely derived, otherwise safe-stop. |
| Move live operational state, capability gate, lifecycle status, certification, promotion, or ProjectStatus | Operational-state transition | Only the exact transition explicitly authorized | Route through the applicable state-update or governance lifecycle authority after validation evidence exists. |
| Halt, pause, wait, do not proceed, or indicate missing authority | Safe stop | No mutation | Stop before editing, committing, PR creation, or state update and report the blocker or stopped state. |

Review intent does not inherently authorize correction, repository mutation, commit, or PR creation. Approval intent does not inherently authorize correction or implementation, and it must not be reduced to acknowledgment or artifact-metadata handling. When current Target operational state shows complete capability work, passed validation, completed review with no unresolved blocking findings, ProjectStatus acceptance or ready-for-approval status, exactly one next capability in DevelopmentPhases and Roadmap, and no transition-blocking dependency or protected boundary, Human Governance approval intent authorizes the exact operational-state transition required to close the current lifecycle gate, record current capability approval, activate that single next capability, update ProjectStatus accordingly, and stop before any work in the newly activated capability. Approval intent must safe-stop when blocking review findings remain, more than one next capability is possible, no next capability is authorized, a dependency is unmet, a protected boundary would be activated, or the required transition cannot be uniquely derived. Continuation intent does not inherently authorize a capability transition. Repository mutation is permitted only when the resolved Human Governance intent and the current authority state jointly authorize the exact mutation.

When the invocation intent semantically requests continuation, progress, advancement, next work, or execution and repository work must be derived from active Target state, workflow routing must use this handoff before command routing, implementation routing, execution coordination, or repository editing:

```text
AIOrchestrator Workflow Routing
    ↓
docs/AI/Workflows/TaskPlanner.md capability-grounded work selection
    ↓
docs/AI/Workflows/TaskGenerationWorkflow.md when executable task generation is required
    ↓
Command Routing / Execution Coordination
```

For that continuation case, the Orchestrator must route candidate discovery, evaluation, ranking, and selection through `docs/AI/Workflows/TaskPlanner.md`; consume the completed TaskPlanner work-selection record; and use that selected work as the bounded basis for subsequent routing. If an executable task statement is required, the Orchestrator must route the completed TaskPlanner result through `docs/AI/Workflows/TaskGenerationWorkflow.md` before command routing or execution coordination.

The Orchestrator must not perform independent repository work selection, substitute a different work unit, broaden or reinterpret the selected work, select work because it is easy, select work because it is close to recently modified files, continue the last implementation merely because it is available, or bypass TaskPlanner because tests already exist. If TaskPlanner returns `NO CAPABILITY-GROUNDED WORK UNIT FOUND`, the Orchestrator must stop before command routing, implementation routing, execution coordination, or repository editing and report that result as a safe-stop outcome.

This TaskPlanner handoff applies only when work must be derived from active Target state. Explicitly supplied, already bounded Human Governance tasks may continue to use the applicable existing workflow and command route without unnecessary replanning. ProjectStatus remains live operational-state authority; DevelopmentPhases remains active capability-boundary authority; Roadmap remains capability-advancement authority; TaskPlanner owns candidate discovery, evaluation, ranking, and selection; TaskGenerationWorkflow converts the completed planner selection into an executable task statement; AIOrchestrator owns workflow routing and execution coordination; Commands execute the bounded task; and ProjectStateUpdater remains post-execution state-update routing only when ProjectStatus update authority exists.

| Situation | Routing |
|:---|:---|
| Determine applicable context or Target Objectives and Target Constraints | Consume Invocation Context and Resolved Target Context; do not modify Target resources unless authorized. |
| Plan directed work | Route through the applicable task preparation workflow or task preparation instructions named by the active task. |
| Generate executable task scope | Route through task-generation workflow guidance when task generation is requested or required. |
| Documentation work | Route to documentation command behavior and the relevant architecture, workflow, task preparation, or validation template. |
| Implementation work | Route to implementation command behavior only when implementation is explicitly authorized. |
| Bug resolution | Route to bug-fix command behavior only when a defect-fix task is explicitly authorized. |
| Review or validation | Route to review, validation, or certification-readiness workflow behavior as required by the task. |
| Target resource modification | Route only through explicit Human Governance instruction or a dedicated Resolved Target Context / TargetResourceUpdater task. |

Only one primary workflow should own execution at a time. Supporting workflows may provide validation, evidence, or completion-report structure, but they shall not expand scope beyond the active task.

---

## 7. Command Routing

Command routing translates a classified task into execution behavior.

```text
Task Type
    ↓
Workflow Route
    ↓
Command Route
    ↓
Execution Constraints
    ↓
Validation Evidence
```

Command routing rules:

1. Commands execute within the authority chain; they do not define authority.
2. Commands do not create Target Constraints scope or modify Target resources by implication.
3. Documentation commands must not introduce implementation changes unless explicitly authorized.
4. Implementation commands must preserve architecture, domain boundaries, validation expectations, and protected-boundary constraints.
5. Review, audit, and validation commands may report findings and recommendations but shall not certify, approve, promote, or canonicalize unless an authorized governance process explicitly grants that role.
6. If the requested command behavior conflicts with higher authority, the Orchestrator stops and escalates.

---

## 8. Template Routing

The Orchestrator uses `docs/AI/Templates/README.md` as the current template category map. Templates are output contracts, not authority documents.

| Artifact Need | Current Template Route |
|:---|:---|
| Phase task preparation artifact | `docs/AI/Templates/Task preparation/PhaseTemplate.md` |
| Stage task preparation artifact | `docs/AI/Templates/Task preparation/StageTemplate.md` |
| Historical capability artifact | `docs/AI/Templates/Task preparation/HistoricalCapabilityTemplate.md` |
| RFC or architecture proposal | `docs/AI/Templates/Architecture/RFCTemplate.md` |
| Review artifact | `docs/AI/Templates/Workflow/ReviewTemplate.md` |
| Workflow artifact | `docs/AI/Templates/Workflow/WorkflowTemplate.md` |
| Command artifact | `docs/AI/Templates/Workflow/CommandTemplate.md` |
| Validation artifact | `docs/AI/Templates/Validation/ValidationTemplate.md` |

Template routing rules:

1. Select the narrowest valid template that matches the requested artifact.
2. Preserve STD-010 metadata expectations for governed Markdown artifacts.
3. Do not treat templates as governance, Target Constraints, Runtime, Engine, certification, or promotion authority.
4. Do not use obsolete top-level template paths.
5. If no valid template exists for the requested artifact, report the gap and recommend a Human Governance or Framework Governance decision before inventing a new template path.

1. The Orchestrator may map task execution to Runtime concepts for clarity and consistency.
2. The Orchestrator shall not redesign Runtime Architecture or imply Runtime implementation activation.
3. Runtime concepts help structure context assembly, execution coordination, validation, review, state handling, and memory handling.
4. Runtime state and Resolved Target Context are distinct: Resolved Target Context is the repository Runtime input, while Runtime state is an architectural concept consumed by operational coordination.
5. If a task requires executable Runtime behavior that is not authorized by Resolved Target Context and Human Governance, the Orchestrator reports a blocker.

## 9. Runtime Interaction

The Orchestrator consumes `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` to align operational execution with Runtime concepts, lifecycle boundaries, context handling, execution flow, validation, review, certification, runtime state, and memory.

Runtime interaction rules:

1. The Orchestrator may map task execution to Runtime concepts for clarity and consistency.
2. The Orchestrator shall not redesign Runtime Architecture or imply Runtime implementation activation.
3. Runtime concepts help structure context assembly, execution coordination, validation, review, state handling, and memory handling.
4. Runtime state and Resolved Target Context are distinct: Resolved Target Context is the repository Runtime input, while Runtime state is an architectural concept consumed by operational coordination.
5. If a task requires executable Runtime behavior that is not authorized by Resolved Target Context and Human Governance, the Orchestrator reports a blocker.

---

## 10. Engine Interaction

The Orchestrator consumes `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`, the Engine Platform RFC family, and `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` to coordinate work against Engine Foundation constraints.

Engine interaction rules:

1. The Orchestrator may route specialized work conceptually to relevant Engine responsibilities:
   - Context
   - Knowledge
   - Task preparation
   - Decision
   - Execution
   - Validation
   - Review
   - Certification
   - Memory
   - Governance
   - Workflow
   - Registry
2. The Orchestrator shall not create or modify Engine RFCs unless the active task explicitly authorizes Engine RFC work.
3. The Orchestrator shall not redefine engine contracts, registry behavior, lifecycle behavior, communication behavior, state behavior, or capability behavior.
4. Engine specialization follows the Engine Specialization RFC template and consumes Meta, Standards, Runtime, and Engine Platform authority without redefining them.
5. Completion reports may identify Engine-related implications, but they shall not certify Engine readiness or authorize implementation.

---

## 11. Resolved Target Context Update Boundaries

Resolved Target Context is the resolved invocation input for Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, Target Validation Requirements, protected boundaries, and applicable evidence.

The Orchestrator may:

- read Resolved Target Context;
- use Resolved Target Context to classify authorized scope;
- validate that work stays within active or explicitly authorized scope;
- recommend a Target resource modification in the completion report when Resolved Target Context is affected.

The Orchestrator shall not modify Target resources unless:

1. Human Governance explicitly requests a Target resource update;
2. the active task is a dedicated Resolved Target Context / TargetResourceUpdater task; or
3. the task instruction explicitly authorizes a specific Resolved Target Context change.

Target resource modification recommendations must be separate from the actual artifact changes and must identify the exact recommended update for Human Governance consideration.

---

## 12. Blocker Management

The Orchestrator stops and reports a blocker when:

- required authority files are missing or inaccessible;
- Target Objectives, Target Constraints, Target Execution Boundaries, Target Validation Requirements, or protected-boundary context cannot be determined;
- requested work conflicts with higher authority;
- requested work crosses a Target Constraints boundary without explicit Human Governance activation;
- requested work touches protected boundaries without explicit authorization;
- requested work implies platform adapter, multi-agent runtime, swarm runtime, enterprise governance, Runtime implementation, Engine implementation, or legacy migration activation without authorization;
- command, workflow, or template routing is ambiguous;
- validation fails;
- review or certification-readiness criteria are not met;
- Target resource modification authority is absent;
- ownership, approval authority, or promotion authority is unclear.

A blocker report should include:

1. The blocker.
2. The authority conflict or missing input.
3. The affected scope.
4. Safe resolution options.
5. The recommended Human Governance decision or next step.

The Orchestrator recommends corrective action rather than guessing.

---

## 13. Completion Cycle

An AI-DOS v2 orchestration cycle is complete when the active task has:

```text
Authority Confirmed
    ↓
Scope Classified
    ↓
Required Context Read
    ↓
Workflow / Command / Template Routes Selected
    ↓
Execution Completed Within Scope
    ↓
Validation Completed
    ↓
Review or Certification-Readiness Handling Completed When Applicable
    ↓
Blockers Resolved or Reported
    ↓
Completion Report Produced
    ↓
Next Step Recommended
```

Completion reports should identify:

- summary of work;
- files modified;
- sections updated;
- old references removed when applicable;
- template references updated when applicable;
- validation results;
- Resolved Target Context policy confirmation;
- risks or blockers;
- recommended next step.

A completion report is not approval, certification, canonical promotion, or Target resource modification unless Human Governance explicitly says so.

Completion handling may route to `docs/AI/Workflows/ProjectStateUpdater.md` only after execution, validation, and evidence production, and only when the active task explicitly authorizes a ProjectStatus update or Human Governance explicitly authorizes the exact state transition. Without that authorization, the Orchestrator must produce only a recommended ProjectStatus update. State updates are not automatic.

---

## 14. Relationship to AIFramework.md

`docs/AI/AIFramework.md` is the Operational Core entry point. It defines how AI-assisted work begins, discovers authority, assembles context, executes within scope, validates, reports, and recommends next steps.

`docs/AI/AIOrchestrator.md` is the Operational Core orchestration document. It coordinates the lifecycle and routes work through workflows, commands, templates, Runtime concepts, Engine constraints, blocker management, completion reporting, and Target resource modification boundaries.

Relationship model:

```text
docs/AI/AIFramework.md
    ↓
Defines the Operational Core entry model and operating boundaries
    ↓
docs/AI/AIOrchestrator.md
    ↓
Coordinates lifecycle routing and execution flow within those boundaries
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
Translates operational rules into tool-facing agent behavior
```

The Orchestrator is not a replacement for AIFramework. It is the coordinating layer that makes the AIFramework execution model operational while preserving the authority of Governance, Resolved Target Context, Target Constraints, Runtime, Engine Platform, Engine Foundation, commands, workflows, and templates.

---

## 15. Historical Context and Version History

This file remains the permanent in-place AI Orchestrator document. The v2 refactor modernizes the existing file rather than replacing it, moving it into the AI-DOS v2 Operational Core model while preserving its orchestration role.

Historical notes:

- Earlier wording treated this document as a canonical orchestration workflow and referenced older resolved-context and template paths.
- The v2 refactor aligns orchestration with the current Governance Atlas, Framework Governance, Invocation Context, Resolved Target Context, Applicable Target Resources, and Target Constraints, Runtime Architecture, Engine Platform, Engine Specialization template, AIFramework, AgentSystemPrompt, and current template category map.
- This refactor removes obsolete release-candidate-only authority framing and replaces outdated path references with current governed paths.
- This document remains draft, non-certified, and non-canonical until Human Governance explicitly approves and promotes it.

| Version | Context | Notes |
|:---|:---|:---|
| Pre-v2 | Historical | Original orchestration wording coordinated AI workflow, commands, templates, certification, and Target-context update behavior using older path conventions. |
| `2.0.0-draft` | Draft | In-place AI-DOS v2 Operational Core orchestration refactor for `AI-DOS.V2.OP-003`; aligned with current Governance, Resolved Target Context, Target Constraints, Runtime, Engine Platform, Engine Foundation, and template authority model. |

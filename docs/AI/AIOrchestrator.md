# AI Orchestrator

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.OPERATIONAL.CORE.AI-ORCHESTRATOR` |
| Title | AI Orchestrator |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Permanent Operational Core orchestration document; non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Operational Core Orchestration |
| Document Type | Operational Orchestration Document |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.OP-003` |
| Scope | Defines Forge AI v2 Operational Core orchestration for authority routing, lifecycle coordination, workflow routing, command routing, template routing, Runtime interaction, Engine interaction, blocker management, completion handling, and ProjectStatus update boundaries. |
| Out of Scope | Governance redesign, Runtime RFC redesign, Engine RFC redesign, command implementation, workflow implementation, template modification, ProjectStatus update, file relocation, operational implementation, platform adapter activation, multi-agent runtime activation, swarm runtime activation, certification, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; the ProjectStatus and DevelopmentPhases declared by the active Target Repository |
| Normative References | `docs/AI/AIFramework.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Templates/README.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | Governance Core; Meta Foundation; Standards Foundation; Runtime Architecture; Engine Platform; Engine Foundation RFC family; Operational Core replacement plan; active ProjectStatus and DevelopmentPhases roadmap. |
| Consumes | Human task instruction, repository boot sequence, governance navigation, governance decision policy, operational state, roadmap sequence, constitutional principles, meta models, terminology, metadata requirements, Runtime Architecture, Engine Architecture, Engine Specialization template, AI Framework entry rules, Agent System Prompt boundaries, template category map, commands, workflows, validation artifacts, and task-specific authorities. |
| Produces | Operational orchestration lifecycle, routing rules, workflow selection guidance, command selection guidance, template selection guidance, Runtime interaction guidance, Engine interaction guidance, blocker escalation rules, ProjectStatus update boundaries, and completion-cycle expectations. |
| Related Specifications | `docs/AI/AIFramework.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/AI/Templates/README.md` |
| Supersedes | Prior orchestration wording in this file while preserving this file as the in-place Operational Core orchestration document. |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, validation against Governance Atlas, ProjectStatus, DevelopmentPhases, STD-010, Runtime Architecture, Engine Architecture, Operational Core replacement plan, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

The AI Orchestrator coordinates Forge AI v2 Operational Core execution. It determines how a directed task moves from authority discovery through context assembly, workflow routing, command routing, template routing, execution coordination, validation, review, blocker handling, completion reporting, and next-action recommendation.

The Orchestrator does not create authority, invent roadmap scope, approve work, certify documents, promote documents, update ProjectStatus by default, or implement Runtime or Engine behavior. It coordinates execution within the authority chain established by Human Governance, the repository bootloader, Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, the Constitution, Meta Foundation, Standards, Runtime Architecture, Engine Platform, and task-specific authorities.

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
8. ProjectStatus update boundaries.
9. Blocker management.
10. Completion-cycle handling.
11. Relationship to `docs/AI/AIFramework.md`.
12. Historical context for this in-place refactor.

### 2.2 Out of Scope

This document does not:

1. Replace `AGENTS.md`, `docs/AI/GOVERNANCE.md`, `docs/FrameworkGovernance.md`, ProjectStatus, DevelopmentPhases, the Constitution, Meta Foundation, Standards, Runtime Architecture, Engine Architecture, Engine RFCs, commands, workflows, templates, or Agent System Prompt.
2. Modify or implement commands, workflows, templates, Runtime, Engines, platform adapters, multi-agent runtime, swarm runtime, enterprise governance, or legacy migration.
3. Authorize ProjectStatus updates except through explicit Human Governance instruction or a dedicated ProjectStatus / ProjectStateUpdater task.
4. Certify, approve, promote, canonicalize, or unfreeze any artifact or roadmap area.
5. Move files, create replacement orchestrator files, or perform migration work.

---

## 3. Authority Chain

Operational orchestration follows this authority chain:

```text
Human Governance
    ↓
AGENTS.md repository bootloader
    ↓
docs/AI/GOVERNANCE.md Governance Atlas
    ↓
docs/FrameworkGovernance.md governance decision policy when applicable
    ↓
<PROJECT_STATUS_PATH> operational state declared by the active Target Repository
    ↓
<DEVELOPMENT_PHASES_PATH> roadmap sequence declared by the active Target Repository
    ↓
docs/AI/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md strategic program structure when applicable
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
- ProjectStatus records current operational state and frozen areas; it does not promote architecture or authorize skipped roadmap phases.
- DevelopmentPhases defines roadmap sequence; it does not replace live operational state.
- Runtime and Engine documents define architecture and specialization constraints; the Orchestrator routes work against them without redesigning them.
- Commands, workflows, and templates are execution aids and output contracts; they do not define authority.

Framework Governance owns governance decision policy, including decision priority, review expectations, approval boundaries, promotion rules, conflict handling, and escalation policy. The AI Orchestrator only routes operational execution according to that policy; it does not own, reinterpret, approve, or replace Framework Governance decisions.

---

## 4. Operational Responsibilities

### 4.1 Owns

The AI Orchestrator owns:

- Orchestration lifecycle coordination
- Workflow routing
- Command routing
- Template routing
- Runtime interaction planning
- Engine interaction planning
- Blocker management
- Completion cycle coordination
- ProjectStatus update boundary handling

### 4.2 Does Not Own

The AI Orchestrator does not own:

- Human Governance
- Framework Governance
- Governance Atlas
- ProjectStatus
- DevelopmentPhases
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

The Forge AI v2 orchestration lifecycle is:

```text
Task Instruction
    ↓
Boot and Authority Discovery
    ↓
ProjectStatus and Roadmap State Acquisition
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
Runtime Interaction Planning
    ↓
Engine Interaction Planning
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
ProjectStatus Update Recommendation or Authorized Update
    ↓
Next Action Recommendation
```

No lifecycle step should be skipped when it is relevant to the task. Human Governance may explicitly narrow the required-reading set or task scope, but narrowing scope does not remove mandatory safety checks for authority conflicts, frozen areas, ProjectStatus boundaries, or file-safety constraints.

---

## 6. Workflow Routing

The Orchestrator selects workflow handling based on the task type, active ProjectStatus state, roadmap constraints, and task-specific authority set.

| Situation | Routing |
|:---|:---|
| Determine active state or next queue | Consume the ProjectStatus and DevelopmentPhases declared by the active Target Repository; do not update state unless authorized. |
| Plan directed work | Route through the applicable planning workflow or planning instructions named by the active task. |
| Generate executable task scope | Route through task-generation workflow guidance when task generation is requested or required. |
| Documentation work | Route to documentation command behavior and the relevant architecture, workflow, planning, or validation template. |
| Implementation work | Route to implementation command behavior only when implementation is explicitly authorized. |
| Bug resolution | Route to bug-fix command behavior only when a defect-fix task is explicitly authorized. |
| Review or validation | Route to review, validation, or certification-readiness workflow behavior as required by the task. |
| ProjectStatus update | Route only through explicit Human Governance instruction or a dedicated ProjectStatus / ProjectStateUpdater task. |

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
2. Commands do not create roadmap scope or update ProjectStatus by implication.
3. Documentation commands must not introduce implementation changes unless explicitly authorized.
4. Implementation commands must preserve architecture, domain boundaries, validation expectations, and frozen-area constraints.
5. Review, audit, and validation commands may report findings and recommendations but shall not certify, approve, promote, or canonicalize unless an authorized governance process explicitly grants that role.
6. If the requested command behavior conflicts with higher authority, the Orchestrator stops and escalates.

---

## 8. Template Routing

The Orchestrator uses `docs/AI/Templates/README.md` as the current template category map. Templates are output contracts, not authority documents.

| Artifact Need | Current Template Route |
|:---|:---|
| Phase planning artifact | `docs/AI/Templates/Planning/PhaseTemplate.md` |
| Stage planning artifact | `docs/AI/Templates/Planning/StageTemplate.md` |
| Historical capability artifact | `docs/AI/Templates/Planning/HistoricalCapabilityTemplate.md` |
| RFC or architecture proposal | `docs/AI/Templates/Architecture/RFCTemplate.md` |
| Review artifact | `docs/AI/Templates/Workflow/ReviewTemplate.md` |
| Workflow artifact | `docs/AI/Templates/Workflow/WorkflowTemplate.md` |
| Command artifact | `docs/AI/Templates/Workflow/CommandTemplate.md` |
| Validation artifact | `docs/AI/Templates/Validation/ValidationTemplate.md` |

Template routing rules:

1. Select the narrowest valid template that matches the requested artifact.
2. Preserve STD-010 metadata expectations for governed Markdown artifacts.
3. Do not treat templates as governance, roadmap, Runtime, Engine, certification, or promotion authority.
4. Do not use obsolete top-level template paths.
5. If no valid template exists for the requested artifact, report the gap and recommend a Human Governance or Framework Governance decision before inventing a new template path.

1. The Orchestrator may map task execution to Runtime concepts for clarity and consistency.
2. The Orchestrator shall not redesign Runtime Architecture or imply Runtime implementation activation.
3. Runtime concepts help structure context assembly, execution coordination, validation, review, state handling, and memory handling.
4. Runtime state and ProjectStatus are distinct: ProjectStatus is the repository operational state authority, while Runtime state is an architectural concept consumed by operational coordination.
5. If a task requires executable Runtime behavior that is not authorized by ProjectStatus and Human Governance, the Orchestrator reports a blocker.

## 9. Runtime Interaction

The Orchestrator consumes `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` to align operational execution with Runtime concepts, lifecycle boundaries, context handling, execution flow, validation, review, certification, state, and memory.

Runtime interaction rules:

1. The Orchestrator may map task execution to Runtime concepts for clarity and consistency.
2. The Orchestrator shall not redesign Runtime Architecture or imply Runtime implementation activation.
3. Runtime concepts help structure context assembly, execution coordination, validation, review, state handling, and memory handling.
4. Runtime state and ProjectStatus are distinct: ProjectStatus is the repository operational state authority, while Runtime state is an architectural concept consumed by operational coordination.
5. If a task requires executable Runtime behavior that is not authorized by ProjectStatus and Human Governance, the Orchestrator reports a blocker.

---

## 10. Engine Interaction

The Orchestrator consumes `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`, the Engine Platform RFC family, and `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` to coordinate work against Engine Foundation constraints.

Engine interaction rules:

1. The Orchestrator may route specialized work conceptually to relevant Engine responsibilities:
   - Context
   - Knowledge
   - Planning
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

## 11. ProjectStatus Update Boundaries

The ProjectStatus declared by the active Target Repository is the operational source of truth for current phase, current stage, current objective, completed work, next queue, frozen areas, and status update policy.

The Orchestrator may:

- read ProjectStatus;
- use ProjectStatus to classify active scope;
- validate that work stays within active or explicitly authorized scope;
- recommend a ProjectStatus update in the completion report when operational status is affected.

The Orchestrator shall not update ProjectStatus unless:

1. Human Governance explicitly requests a status update;
2. the active task is a dedicated ProjectStatus / ProjectStateUpdater task; or
3. the task instruction explicitly authorizes a specific ProjectStatus change.

ProjectStatus update recommendations must be separate from the actual artifact changes and must identify the exact recommended update for Human Governance consideration.

---

## 12. Blocker Management

The Orchestrator stops and reports a blocker when:

- required authority files are missing or inaccessible;
- current phase, stage, objective, next queue, or frozen-area status cannot be determined;
- requested work conflicts with higher authority;
- requested work crosses a roadmap boundary without explicit Human Governance activation;
- requested work touches frozen areas without explicit authorization;
- requested work implies platform adapter, multi-agent runtime, swarm runtime, enterprise governance, Runtime implementation, Engine implementation, or legacy migration activation without authorization;
- command, workflow, or template routing is ambiguous;
- validation fails;
- review or certification-readiness criteria are not met;
- ProjectStatus update authority is absent;
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

A Forge AI v2 orchestration cycle is complete when the active task has:

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
- ProjectStatus policy confirmation;
- risks or blockers;
- recommended next step.

A completion report is not approval, certification, canonical promotion, or ProjectStatus update unless Human Governance explicitly says so.

---

## 14. Relationship to AIFramework.md

`docs/AI/AIFramework.md` is the Operational Core entry point. It defines how AI-assisted work begins, discovers authority, assembles context, executes within scope, validates, reports, and recommends next steps.

`docs/AI/AIOrchestrator.md` is the Operational Core orchestration document. It coordinates the lifecycle and routes work through workflows, commands, templates, Runtime concepts, Engine constraints, blocker management, completion reporting, and ProjectStatus update boundaries.

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

The Orchestrator is not a replacement for AIFramework. It is the coordinating layer that makes the AIFramework execution model operational while preserving the authority of Governance, ProjectStatus, Roadmap, Runtime, Engine Platform, Engine Foundation, commands, workflows, and templates.

---

## 15. Historical Context and Version History

This file remains the permanent in-place AI Orchestrator document. The v2 refactor modernizes the existing file rather than replacing it, moving it into the Forge AI v2 Operational Core model while preserving its orchestration role.

Historical notes:

- Earlier wording treated this document as a canonical orchestration workflow and referenced older live-state and template paths.
- The v2 refactor aligns orchestration with the current Governance Atlas, Framework Governance, ProjectStatus path, DevelopmentPhases roadmap, Runtime Architecture, Engine Platform, Engine Specialization template, AIFramework, AgentSystemPrompt, and current template category map.
- This refactor removes obsolete release-candidate-only authority framing and replaces outdated path references with current governed paths.
- This document remains draft, non-certified, and non-canonical until Human Governance explicitly approves and promotes it.

| Version | Status | Notes |
|:---|:---|:---|
| Pre-v2 | Historical | Original orchestration wording coordinated AI workflow, commands, templates, certification, and project-state update behavior using older path conventions. |
| `2.0.0-draft` | Draft | In-place Forge AI v2 Operational Core orchestration refactor for `FORGE-AI.V2.OP-003`; aligned with current Governance, ProjectStatus, Roadmap, Runtime, Engine Platform, Engine Foundation, and template authority model. |

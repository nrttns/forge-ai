# AI System Execution Sequence

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.SYSTEM.EXECUTION-SEQUENCE` |
| Title | AI System Execution Sequence |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Execution Procedure |
| Document Type | Tool-Facing Execution Procedure |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.OP-005F` |
| Scope | Execution ordering, safe execution procedure, file-scope enforcement, command/workflow/template handoff, validation handoff, completion evidence routing, stop-on-failure handling, and post-execution report structure for Forge AI agents. |
| Out of Scope | Authority resolution, boot sequence ownership, source-of-truth selection, context assembly, decision outcome selection, governance decisions, ProjectStatus ownership, Runtime definitions, Engine definitions, command definitions, workflow definitions, template definitions, certification, canonical promotion, and implementation beyond the active task scope. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/System/AuthorityModel.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/System/DecisionModel.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Repository bootloader, AuthorityModel authority resolution, BootSequence loading order, SourceOfTruth domain mapping, ContextAssembly context packet, DecisionModel outcome, Governance Atlas navigation, Framework Governance policy, ProjectStatus operational state, DevelopmentPhases roadmap sequence, Operational Core documents, and task-specific command, workflow, template, or validation requirements. |
| Consumes | Approved DecisionModel outcome, human task instruction, authority set, context packet, source-of-truth map, ProjectStatus state, DevelopmentPhases roadmap position, frozen areas, file-safety constraints, command route, workflow route, template route, validation requirements, and missing-input or blocker state. |
| Produces | Safe execution handoff, file-scope enforcement, validation handoff, stop-on-failure report, completion evidence, post-execution completion report, ProjectStatus update recommendation when applicable, and recommended next step. |
| Related Specifications | `docs/AI/System/DecisionModel.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; Commands; Workflows; Templates; validation and review artifacts |
| Supersedes | Prior AI System Execution Sequence operating-procedure drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, execution-sequence validation, file-safety validation, ProjectStatus policy validation, roadmap validation, frozen-area validation, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines how Forge AI agents execute an approved decision outcome after `docs/AI/System/AuthorityModel.md`, `docs/AI/System/BootSequence.md`, `docs/AI/System/SourceOfTruth.md`, `docs/AI/System/ContextAssembly.md`, and `docs/AI/System/DecisionModel.md` have completed.

ExecutionSequence determines how an allowed decision outcome is carried out safely. It answers what action is executed, which command, workflow, or template governs execution, which files may be modified, which files must not be modified, which validation must run, what completion evidence must be reported, and when execution must stop.

This document consumes the System Layer procedures named above. It does not redefine authority resolution, boot order, source-of-truth selection, context assembly, decision outcome selection, Governance, ProjectStatus, Runtime, Engine, commands, workflows, templates, certification, or canonical promotion.

---

## 2. Scope

### 2.1 In Scope

This procedure covers:

1. Execution ordering.
2. Safe execution procedure.
3. File-scope enforcement.
4. Command, workflow, or template handoff.
5. Validation handoff.
6. Completion evidence routing.
7. Stop-on-failure handling.
8. Post-execution report structure.

### 2.2 Out of Scope

This procedure does not own:

1. Authority resolution.
2. Boot sequence.
3. Source-of-truth selection.
4. Context assembly.
5. Decision outcome selection.
6. Governance decisions.
7. ProjectStatus ownership.
8. Runtime definitions.
9. Engine definitions.
10. Commands.
11. Workflows.
12. Templates.
13. Certification.
14. Canonical promotion.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Execution Sequence owns:

- execution ordering;
- safe execution procedure;
- file-scope enforcement;
- command/workflow/template handoff;
- validation handoff;
- completion evidence routing;
- stop-on-failure handling;
- post-execution report structure.

### 3.2 Does Not Own

The AI System Execution Sequence does not own:

- authority resolution;
- boot sequence;
- source-of-truth selection;
- context assembly;
- decision outcome selection;
- governance decisions;
- ProjectStatus ownership;
- Runtime definitions;
- Engine definitions;
- commands;
- workflows;
- templates;
- certification;
- canonical promotion.

---

## 4. Execution Inputs

Execution may begin only from an approved DecisionModel outcome and a bounded task context. Execution inputs include:

- approved DecisionModel outcome;
- human task instruction;
- authority set;
- context packet;
- source-of-truth map;
- ProjectStatus state;
- DevelopmentPhases roadmap position;
- frozen areas;
- file-safety constraints;
- command route;
- workflow route;
- template route;
- validation requirements;
- missing-input or blocker state.

Execution must not rely on memory when an input is required by authority, context, source-of-truth, file-safety, roadmap, or validation rules.

---

## 5. Allowed Execution Outcomes

Execution may proceed only for these DecisionModel outcomes:

- `PROCEED`;
- `ROUTE_COMMAND`;
- `ROUTE_WORKFLOW`;
- `ROUTE_TEMPLATE`;
- `AUTHORIZE_PROJECTSTATUS_UPDATE_ONLY_IF_EXPLICITLY_REQUESTED`.

For all other DecisionModel outcomes, execution must stop and produce a blocker or completion report:

- `STOP_BLOCKER`;
- `ESCALATE_HUMAN_GOVERNANCE`;
- `RECOMMEND_PROJECTSTATUS_UPDATE`;
- `REQUEST_MISSING_CONTEXT`;
- `REPORT_CONFLICT`;
- `DEFER`.

A recommendation to update ProjectStatus is not an executable ProjectStatus update authorization.

---

## 6. Execution Procedure

Agents shall execute using this sequence:

1. Confirm DecisionModel outcome is executable.
2. Confirm authority set.
3. Confirm context packet completeness.
4. Confirm source-of-truth map.
5. Confirm ProjectStatus and roadmap boundaries.
6. Confirm frozen-area and file-safety constraints.
7. Select command, workflow, or template handoff if applicable.
8. Execute only approved task scope.
9. Avoid unrelated file edits.
10. Run required validation.
11. Stop on validation failure.
12. Produce completion report.
13. Recommend next step.
14. Recommend ProjectStatus update only when applicable.
15. Perform ProjectStatus update only when explicitly authorized.

Execution shall remain bounded by the human task instruction, authority set, source-of-truth map, context packet, DecisionModel outcome, file-safety restrictions, and validation requirements.

---

## 7. File-Safety Rules

Agents shall enforce these file-safety rules during execution:

1. Modify only files explicitly in scope.
2. Do not perform opportunistic cleanup.
3. Do not refactor adjacent files.
4. Do not move, delete, or rename files unless explicitly authorized.
5. Do not modify ProjectStatus unless explicitly authorized.
6. Do not modify Runtime, Engine, Governance, or Standards documents unless explicitly in scope.
7. Do not create parallel v2 files unless explicitly authorized.
8. Do not modify commands, workflows, or templates unless explicitly in scope.
9. Do not convert a recommendation into a file change without authorization.
10. Stop when file-safety constraints conflict with the requested execution.

---

## 8. Validation Handoff Rules

Execution must hand off to validation using the validation requirements selected by DecisionModel or task authority.

Validation handoff shall identify:

- validation command or check to run;
- expected scope of validation;
- files or artifacts covered by validation;
- known environment limitations;
- validation failure handling;
- evidence to report in the completion report.

If validation requirements cannot be determined, agents shall stop, report a blocker, and not declare success.

Validation failure does not authorize unrelated fixes, expanded scope, ProjectStatus updates, certification, or canonical promotion. The agent may fix validation failures only when the fix remains within the active task scope and file-safety boundary.

---

## 9. Completion Report Rules

A completion report must include:

- summary;
- files modified;
- sections changed;
- old references removed when applicable;
- validation results;
- ProjectStatus policy confirmation;
- risks or blockers;
- commit hash if committed;
- recommended next step.

The report shall distinguish completed execution, blocked execution, validation failure, deferred work, ProjectStatus recommendation, and explicit ProjectStatus update authorization when applicable.

---

## 10. Escalation Rules

If execution cannot safely continue, agents shall:

1. Stop.
2. Report the blocker.
3. List the reason.
4. List affected files.
5. List missing authority, context, or validation.
6. Recommend a Human Governance decision or governance review.

Agents shall also escalate when execution would require approval, certification, canonical promotion, frozen-area activation, ProjectStatus update handling, file movement, deletion, renaming, or out-of-scope document changes without explicit authorization.

---

## 11. Completion Report Expectations

Completion reports for tasks using this procedure should show that execution followed the approved DecisionModel outcome, preserved file-safety constraints, performed required validation, and stopped or escalated when safe execution was not possible.

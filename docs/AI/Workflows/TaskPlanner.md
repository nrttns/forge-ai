# Task Planner

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-PLANNER` |
| Title | Task Planner |
| Version | `2.0.1-draft` |
| Status | Draft |
| Canonical Status | Aligned with v2 Operational Core; non-canonical until Human Governance approval |
| Classification | Task Planning Workflow |
| Document Type | Planning Workflow |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-15 |
| Lifecycle Phase | Draft Alignment |
| Traceability ID | `AI-DOS.V2.OP-005` |
| Scope | Defines sequencing and routing behavior for planning agents and orchestrators. |
| Out of Scope | AGENTS.md, AIFramework, AIOrchestrator, AgentSystemPrompt, governance, ProjectStatus authority, Runtime, Engine RFCs, and templates. |
| Normative Authority | `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; the ProjectStatus and DevelopmentPhases declared by the active Target Repository |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | v2 Operational Core; active task instruction; current roadmap and operational state. |
| Consumes | Human task instruction, authority documents, current ProjectStatus state, roadmap state, applicable templates, validation evidence. |
| Produces | task sequencing and routing plan. |
| Related Specifications | `docs/AI/Commands/AgentTaskCommand.md`; `docs/AI/Workflows/TaskPlanner.md`; `docs/AI/Workflows/TaskGenerationWorkflow.md`; `docs/AI/Workflows/ProjectStateUpdater.md` |
| Supersedes | Prior in-place content of this document. |
| Superseded By | None |
| Promotion Requirements | Human Governance review and approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines sequencing and routing behavior. It consumes the v2 Operational Core and active task authority without redefining repository boot, framework authority, orchestration authority, system prompt policy, governance, live project status, roadmap order, runtime architecture, engine RFCs, or templates.

## 2. Owns

- The sequencing and routing behavior described in this document.
- The minimum inputs needed to perform that behavior safely.
- Execution safeguards, validation expectations, and completion-report expectations for this document's scope.

## 3. Does Not Own

- Repository boot sequence owned by `AGENTS.md`.
- Framework authority owned by `docs/AI/AIFramework.md`.
- Orchestration authority owned by `docs/AI/AIOrchestrator.md`.
- Agent prompt policy owned by `docs/AI/AgentSystemPrompt.md`.
- Governance decision policy owned by `docs/AI/FrameworkGovernance.md` and governance navigation owned by `docs/AI/GOVERNANCE.md`.
- Operational state owned by the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`).
- Roadmap sequence owned by the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`).
- Runtime, Engine RFCs, or template content.
- The authority to execute task content or redefine command procedure.

## 4. Inputs

- Active Human Governance task instruction.
- `AGENTS.md`.
- `docs/AI/GOVERNANCE.md`.
- `docs/AI/FrameworkGovernance.md` when decision policy is relevant.
- `docs/AI/AIFramework.md`.
- `docs/AI/AIOrchestrator.md`.
- `docs/AI/AgentSystemPrompt.md`.
- the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`).
- the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`).
- Applicable task-specific authority documents and templates.

## 5. Outputs

- Scoped task sequencing and routing plan.
- Capability-grounded work-selection record when selecting repository work from active Target state.
- Validation evidence appropriate to the task.
- Completion report with risks, blockers, and recommended next step.

## 6. Execution Rules

- Preserve filename and inbound references.
- Execute only within the active task scope.
- Preserve current phase, stage, roadmap order, and frozen-area boundaries.
- Do not create parallel replacement files.
- Do not move, delete, or rename files unless explicitly authorized.
- Do not modify templates unless explicitly authorized.
- Do not update the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`) unless explicitly authorized.

## 7. Validation Rules

- Confirm the authority set was read and applied.
- Confirm scoped files only were modified.
- Confirm old ProjectStatus paths are not introduced.
- Confirm no obsolete authority references are introduced.
- Run task-specific validation commands and report results honestly.

## 8. Planning Sequence

1. Read ProjectStatus and roadmap state.
2. Identify current phase, stage, objective, next queue, and frozen areas.
3. Classify the requested work type.
4. Select the required workflow, command, and validation route.
5. Produce an execution plan without executing the task.

## 8.1 Capability-Grounded Work-Selection Sequence

When Task Planner is responsible for deriving repository work from active Target state, it owns candidate discovery, evaluation, ranking, and selection. This sequence does not replace ProjectStatus authority, DevelopmentPhases authority, Roadmap authority, command execution, or task generation.

Task Planner shall perform the following sequence in order:

1. Resolve exactly one active task or exactly one authorized next action from the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`). ProjectStatus remains the live-state authority.
2. Resolve the active phase and active capability from the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`). DevelopmentPhases remains the capability-boundary authority.
3. Resolve the applicable capability advancement interpretation, expected outcomes, dependencies, evidence requirements, and non-progress rules from the active Target Repository Roadmap. Roadmap remains the capability-advancement authority.
4. Inspect repository evidence only after the ProjectStatus, DevelopmentPhases, and Roadmap constraints above have been resolved.
5. Produce a bounded candidate set of repository work units that directly contribute to the active capability.
6. Reject candidates that are merely repository hygiene, README or navigation alignment, formatting, documentation cleanup, planning maintenance, status maintenance, audit or report generation, or incidental continuation of the nearest existing code surface unless that activity is explicitly the active capability objective.
7. Evaluate every candidate against active-capability contribution, roadmap-outcome contribution, dependency relevance, reusable AI-DOS value, evidence value, bounded size, independent verifiability, protected-area safety, and validation availability.
8. Rank candidates by grounded contribution to the active capability and select exactly one highest-grounded candidate.
9. Do not select a candidate merely because it is easy, is close to recently modified files, extends the last implementation, has tests available, or makes the repository cleaner.
10. If no candidate can be directly traced to the active capability and roadmap outcome, stop with exactly:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

Do not invent a useful-looking task.

### Required Work Selection Evidence

Before editing begins, Task Planner output shall record all of the following fields with supported values:

- Active ProjectStatus Task
- Active Phase
- Active Capability
- Applicable Roadmap Capability / Milestone
- Required Capability Outcome
- Repository Evidence Inspected
- Candidate Work Units Considered
- Rejected Candidates and Reasons
- Selected Work Unit
- Direct Capability Contribution
- Reusable AI-DOS Contribution
- Expected Files
- Protected Areas
- Validation Plan
- Completion Condition

A work unit is not authorized for execution when any required field is absent, unsupported, or not traceable to the active capability and roadmap outcome.

| Work Type | Route |
| --- | --- |
| Implementation | Task generation, then implementation command |
| Audit / review | Audit command or review route |
| Documentation | Documentation command |
| Bug fix | Bug fix command |
| State update | Project State Updater only when explicitly authorized |
| General | Base task command |

## 9. Completion Report Expectations

Every completion report must include:

- Summary.
- Files modified.
- Authority validation.
- Roadmap and frozen-area validation.
- Validation results.
- Risks or blockers.
- ProjectStatus policy confirmation.
- Recommended next step.

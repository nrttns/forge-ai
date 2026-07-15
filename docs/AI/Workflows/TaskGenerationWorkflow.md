# Task Generation Workflow

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-GENERATION` |
| Title | Task Generation Workflow |
| Version | `2.0.1-draft` |
| Status | Draft |
| Canonical Status | Aligned with v2 Operational Core; non-canonical until Human Governance approval |
| Classification | Task Generation Workflow |
| Document Type | Generation Workflow |
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
| Produces | executable task statement. |
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

- Scoped executable task statement derived only from the completed Task Planner selection record.
- Validation evidence appropriate to the task.
- Completion report with risks, blockers, and recommended next step.

## 6. Execution Rules

- Preserve filename and inbound references.
- Execute only within the active task scope.
- Preserve current phase, stage, roadmap order, and frozen-area boundaries.
- Do not create parallel replacement files.
- Do not move, delete, or rename files unless explicitly authorized.
- Do not modify templates unless explicitly authorized.
- Do not update the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`). Approval decisions and lifecycle state transitions route to ProjectStateUpdater and do not require TaskGenerationWorkflow unless a separate executable repository work unit has been selected.

## 7. Validation Rules

- Confirm the authority set was read and applied.
- Confirm scoped files only were modified.
- Confirm old ProjectStatus paths are not introduced.
- Confirm no obsolete authority references are introduced.
- Run task-specific validation commands and report results honestly.

## 8. Generation Sequence

Task Generation Workflow converts the completed Task Planner selection record into an executable task statement. It is not required for Human Governance approval decisions or lifecycle state transitions unless a separate executable repository work unit is actually selected. It does not own task selection authority and must not substitute, broaden, reinterpret, or replace the selected work unit.

1. Consume the completed Task Planner selection record.
2. Verify that the record contains a selected work unit, capability trace, roadmap outcome trace, candidate rejection evidence, validation plan, and completion condition.
3. Stop without generating an executable task statement when any required selection evidence is absent or unsupported, or when Task Planner returned exactly:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

4. Preserve the selected work unit exactly as the executable task objective.
5. Preserve the capability trace, authorized scope, expected files, forbidden work, validation plan, completion condition, and exactly-one-work-unit stop boundary.
6. Select the governing command only for executing the preserved selected work unit.
7. Produce a temporary executable task statement for the orchestrator.

Generated tasks must be derived only from the completed Task Planner selection record and authorized state and planning inputs; they are not independent authority.

Task Generation Workflow must not generate an executable task when:

- no selected work unit exists;
- capability contribution is missing;
- roadmap outcome trace is missing;
- candidate rejection evidence is missing;
- validation or completion condition is missing;
- Task Planner returned `NO CAPABILITY-GROUNDED WORK UNIT FOUND`.

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

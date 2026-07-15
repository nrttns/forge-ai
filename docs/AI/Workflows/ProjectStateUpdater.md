# Project State Updater

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.PROJECT-STATE-UPDATER` |
| Title | Project State Updater |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Aligned with v2 Operational Core; non-canonical until Human Governance approval |
| Classification | Project State Update Workflow |
| Document Type | State Update Workflow |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-15 |
| Lifecycle Phase | Draft Alignment |
| Traceability ID | `AI-DOS.V2.OP-005` |
| Scope | Defines sequencing and routing behavior for authorized state-update agents. |
| Out of Scope | AGENTS.md, AIFramework, AIOrchestrator, AgentSystemPrompt, governance, ProjectStatus authority, Runtime, Engine RFCs, and templates. |
| Normative Authority | `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; the ProjectStatus and DevelopmentPhases declared by the active Target Repository |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | v2 Operational Core; active task instruction; current roadmap and operational state. |
| Consumes | Human task instruction, authority documents, current ProjectStatus state, DevelopmentPhases, Roadmap, completed validation evidence, completed review evidence, protected-boundary state, dependency state, and applicable templates. |
| Produces | ProjectStatus update proposal or authorized update. |
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
- the Roadmap declared by the active Target Repository (`<ROADMAP_PATH>`).
- Completed validation evidence for the current lifecycle gate.
- Completed review evidence for the current lifecycle gate.
- Protected-boundary state.
- Dependency state.
- Applicable task-specific authority documents and templates.

## 5. Outputs

- Scoped ProjectStatus update proposal or authorized update.
- Validation evidence appropriate to the task.
- Completion report with risks, blockers, and recommended next step.

## 6. Execution Rules

- Preserve filename and inbound references.
- Execute only within the active task scope.
- Preserve current phase, stage, roadmap order, and frozen-area boundaries.
- Do not create parallel replacement files.
- Do not move, delete, or rename files unless explicitly authorized.
- Do not modify templates unless explicitly authorized.
- Do not update the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`) unless explicitly authorized by the active task or by uniquely derivable Human Governance approval intent.
- Human Governance approval intent is not only an acknowledgment or artifact metadata decision. It must be resolved from the current Target operational state, active lifecycle gate, completed review evidence, DevelopmentPhases, Roadmap, and applicable transition constraints.
- It may update the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`) only when the active task explicitly authorizes a ProjectStatus update or approval intent uniquely authorizes the exact operational-state transition.
- Without explicit authorization or uniquely derivable approval intent, it may only recommend an update in the completion report.

## 7. Validation Rules

- Confirm the authority set was read and applied.
- Confirm scoped files only were modified.
- Confirm old ProjectStatus paths are not introduced.
- Confirm no obsolete authority references are introduced.
- Run task-specific validation commands and report results honestly.

## 8. State Update Sequence

1. Classify Human Governance approval intent as an approval-decision route, not as capability-grounded repository work selection.
2. Confirm explicit authorization to update ProjectStatus or resolve Human Governance approval intent from authoritative Target state.
3. Consume current ProjectStatus, DevelopmentPhases, Roadmap, completed validation evidence, completed review evidence, protected-boundary state, and dependency state before deriving any update.
4. Verify completion evidence, validation results, review status, blockers, dependencies, and protected-boundary constraints.
5. For approval intent, confirm that current capability work is complete, validation passed, review completed without unresolved blocking findings, ProjectStatus records the current capability as accepted or ready for approval, DevelopmentPhases and Roadmap identify exactly one valid next capability, and no protected boundary or unresolved dependency blocks transition.
6. When exactly one valid transition is derivable, identify the exact ProjectStatus fields in scope and perform only the transition required to close the current lifecycle gate, record the current capability as approved, activate the single next capability, update ProjectStatus accordingly, and stop before executing work in the newly activated capability.
7. Safe-stop without mutation when review has unresolved blocking findings, more than one next capability is possible, no next capability is authorized, a dependency is unmet, a protected boundary would be activated, or the required transition cannot be uniquely derived.
8. Apply only authorized factual updates, or produce a recommended update if authorization is absent or derivation is not unique.
9. Report the update, evidence consumed, transition derivation, protected-boundary and dependency result, and next recommended action.

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

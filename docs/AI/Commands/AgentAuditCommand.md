# Agent Audit Command

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-AUDIT` |
| Title | Agent Audit Command |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Aligned with v2 Operational Core; non-canonical until Human Governance approval |
| Classification | Audit Execution Command |
| Document Type | Audit Command |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Alignment |
| Traceability ID | `AI-DOS.V2.OP-005` |
| Scope | Defines task execution behavior for audit and review agents. |
| Out of Scope | AGENTS.md, AIFramework, AIOrchestrator, AgentSystemPrompt, governance, ProjectStatus authority, Runtime, Engine RFCs, and templates. |
| Normative Authority | `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; the ProjectStatus and DevelopmentPhases declared by the active Target Repository |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | v2 Operational Core; active task instruction; current roadmap and operational state. |
| Consumes | Human task instruction, authority documents, current ProjectStatus state, roadmap state, applicable templates, validation evidence. |
| Produces | audit execution procedure. |
| Related Specifications | `docs/AI/Commands/AgentTaskCommand.md`; `docs/AI/Workflows/TaskPlanner.md`; `docs/AI/Workflows/TaskGenerationWorkflow.md`; `docs/AI/Workflows/ProjectStateUpdater.md` |
| Supersedes | Prior in-place content of this document. |
| Superseded By | None |
| Promotion Requirements | Human Governance review and approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines task execution behavior. It consumes the v2 Operational Core and active task authority without redefining repository boot, framework authority, orchestration authority, system prompt policy, governance, live project status, roadmap order, runtime architecture, engine RFCs, or templates.

## 2. Owns

- The task execution behavior described in this document.
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
- The authority to own workflow sequencing or routing decisions.

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

- Scoped audit execution procedure.
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

## 8. Audit Rules

- Verify current state against the applicable authority set.
- Produce findings with severity, evidence, recommendation, and verdict.
- Do not implement corrections unless the active task separately authorizes implementation.
- Verdicts are `PASS`, `PASS WITH OBSERVATIONS`, `REQUIRES FOLLOW-UP`, or `FAILED`.

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

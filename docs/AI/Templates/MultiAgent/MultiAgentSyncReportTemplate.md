# Multi-Agent Sync Report Template

> Forge AI v2 · MultiAgent Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-MULTIAGENT-SYNC-REPORT` |
| Title | Multi-Agent Sync Report Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Multi-Agent Template |
| Document Type | Template |
| Owner | AI Runtime Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.TEMPLATES.MULTIAGENT.SYNC-REPORT` |
| Scope | Defines the reusable structure for recording a synchronization point for multi-agent execution, including participants, progress, changes, conflicts, risks, decisions, next actions, and checklist evidence. |
| Out of Scope | Multi-agent authority redefinition, runtime authority redefinition, orchestration authority creation, swarm authority creation, governance authority creation, review authority creation, certification authority creation, ProjectStatus updates, synchronization algorithm definition, conflict-resolution algorithm definition, runtime implementation, orchestration implementation, swarm execution, engine implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `AGENTS.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/Architecture/Agents/AGENTS-v2.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Runtime-Consumption-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/` |
| Dependencies | AGENTS.md bootloader; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2 communication, coordination, delegation, escalation, and runtime consumption boundaries; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime, Engine, Context, Memory, Knowledge, and Workflow authority inputs |
| Consumes | Multi-agent documentation boundaries; agent boot and behavior boundaries; runtime and engine boundaries; context, memory, knowledge, and workflow consumption rules; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable multi-agent sync report artifact structure |
| Related Specifications | `docs/AI/Templates/MultiAgent/`; `docs/AI/Templates/Agents/`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Runtime/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/Validation/`; `docs/AI/Templates/README.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, multi-agent authority reference validation, duplicate-authority validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Defines the reusable structure for recording a synchronization point for multi-agent execution, including participants, progress, changes, conflicts, risks, decisions, next actions, and checklist evidence.

This template is an output contract only. It consumes existing AGENTS, Runtime, Engine, Context, Memory, Knowledge, Workflow, and applicable STD authority without redefining multi-agent, runtime, orchestration, swarm, governance, review, certification, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to produce a `Multi-Agent Sync Report` artifact when the active task explicitly needs that artifact type.

Do not use this template to implement orchestration logic, synchronization logic, conflict-resolution algorithms, runtime behavior, swarm execution, approval authority, certification authority, governance authority, or ProjectStatus updates.

---

## 3. Authority Boundaries

Artifacts produced from this template may record coordination-facing facts, evidence, decisions, risks, blockers, and handoff needs, but they must not replace `AGENTS.md`, Agent System Prompt, AI Framework, AI Orchestrator, AGENTS v2 architecture, Runtime Architecture, Engine Architecture, Context, Memory, Knowledge, Workflow, validation, review, certification, governance, or ProjectStatus authority.

---

## Produced Document Metadata

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section. Placeholder values must be resolved before the produced document is treated as complete.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | {{DOCUMENT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED}} |
| Last Updated | {{LAST_UPDATED}} |
| Lifecycle Phase | {{LIFECYCLE_PHASE}} |
| Traceability ID | `{{TRACEABILITY_ID}}` |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Dependencies | {{DEPENDENCIES}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
| Supersedes | {{SUPERSEDES}} |
| Superseded By | {{SUPERSEDED_BY}} |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |
```
Default produced-document classification is `Multi-Agent Artifact` and default document type is `Multi-Agent Sync Report`.

---

## Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Yes | Author-provided |
| `{{TITLE}}` | TEXT | Title | Yes | Author-provided |
| `{{VERSION}}` | VERSION | Version | Yes | `0.1.0-draft` |
| `{{STATUS}}` | STATUS | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | TEXT | Canonical Status | Yes | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Multi-Agent Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | AI Runtime Owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Author-provided |
| `{{REVIEW_AUTHORITY}}` | TEXT | Review Authority | Yes | Author-provided |
| `{{APPROVAL_AUTHORITY}}` | TEXT | Approval Authority | Yes | Author-provided |
| `{{CREATED}}` | DATE | Created | Yes | Author-provided |
| `{{LAST_UPDATED}}` | DATE | Last Updated | Yes | Author-provided |
| `{{LIFECYCLE_PHASE}}` | TEXT | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | IDENTIFIER | Traceability ID | Yes | Author-provided |
| `{{SCOPE}}` | TEXT | Scope | Yes | Author-provided |
| `{{OUT_OF_SCOPE}}` | TEXT | Out of Scope | Yes | Author-provided |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Author-provided |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | AGENTS.md; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2; STD-003; STD-010; TPL-000; applicable Runtime, Engine, Context, Memory, Knowledge, and Workflow authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{SYNC_STATUS}}` | STATUS | Body content | Yes | Draft |
| `{{COORDINATOR}}` | TEXT | Body content | Yes | Author-provided |
| `{{SYNC_POINT}}` | TEXT | Body content | Yes | Author-provided |
| `{{SYNC_DATE}}` | DATE | Body content | Yes | Author-provided |
| `{{PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{PARTICIPANTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{PROGRESS_SUMMARY}}` | TABLE | Body content | Yes | Author-provided |
| `{{CHANGES_SINCE_LAST_SYNC}}` | LIST | Body content | Yes | Author-provided |
| `{{CONFLICTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{RISKS}}` | LIST | Body content | Yes | Author-provided |
| `{{DECISIONS}}` | TABLE | Body content | Yes | Author-provided |
| `{{NEXT_ACTIONS}}` | TABLE | Body content | Yes | Author-provided |
| `{{SYNC_CHECKLIST}}` | CHECKLIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{PURPOSE}}

---

## 2. Sync Identity

| Field | Value |
|:---|:---|
| Sync Status | {{SYNC_STATUS}} |
| Coordinator | {{COORDINATOR}} |
| Sync Point | {{SYNC_POINT}} |
| Sync Date | {{SYNC_DATE}} |

---

## 3. Participants

{{PARTICIPANTS}}

---

## 4. Progress Summary

{{PROGRESS_SUMMARY}}

---

## 5. Changes Since Last Sync

{{CHANGES_SINCE_LAST_SYNC}}

---

## 6. Conflicts

{{CONFLICTS}}

---

## 7. Risks

{{RISKS}}

---

## 8. Decisions

{{DECISIONS}}

---

## 9. Next Actions

{{NEXT_ACTIONS}}

---

## 10. Sync Checklist

{{SYNC_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Multi-agent, runtime, orchestration, swarm, governance, review, certification, workflow, validation, and ProjectStatus authorities are consumed rather than redefined.
- Produced artifacts do not implement orchestration logic, synchronization logic, conflict-resolution algorithms, runtime behavior, engine behavior, workflow behavior, swarm execution, governance authority, review authority, certification authority, or ProjectStatus updates.

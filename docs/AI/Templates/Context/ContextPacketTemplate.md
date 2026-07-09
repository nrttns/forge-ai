# Context Packet Template

> Forge AI v2 · Context Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-CONTEXT-PACKET` |
| Title | Context Packet Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Context Template |
| Document Type | Template |
| Owner | Context System Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.TEMPLATES.CONTEXT.PACKET` |
| Scope | Defines the reusable structure for a portable context package for an agent, automation, or governed participant, including packet contents, authority summary, current state, allowed work, forbidden work, required output, validation requirements, handoff notes, and release rule. |
| Out of Scope | Context authority redefinition, knowledge authority redefinition, memory authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, context storage implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; System Context Assembly; Context Engine RFC; Forge AI template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; context assembly and Context Engine boundaries |
| Produces | Reusable context packet artifact structure |
| Related Specifications | `docs/AI/Templates/Context/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, context authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Provide a portable context package for an agent, automation, or governed participant.

This template structures task context only. It does not create authority, replace source-of-truth documents, approve work, certify work, govern handoff authority, or update ProjectStatus.

---

## 2. When To Use This Template

Use this template when a bounded context packet is needed for handoff, task execution, automation, or participant alignment.

Do not use this template to activate swarm work, create execution authority, override governance, override ProjectStatus, or certify completion.

---

## 3. Authority Boundaries

Context packets produced from this template may package relevant context for a bounded task, but they must not redefine or supersede the authorities they summarize. The packet expires when the task completes, ProjectStatus changes, scope changes, or authority changes.

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
Default produced-document classification is `Context Artifact` and default document type is `Context Packet`.

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
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Context Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | Context System Owner |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-001; STD-002; STD-003; STD-010; TPL-000; applicable context, knowledge, and memory authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{CONTEXT_PACKET_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{TASK_ID_OR_CAPABILITY}}` | TEXT | Body content | Yes | Author-provided |
| `{{PACKET_CONTENTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{AUTHORITY_SUMMARY}}` | TEXT | Body content | Yes | Author-provided |
| `{{CURRENT_STATE_SUMMARY}}` | TEXT | Body content | Yes | Author-provided |
| `{{ALLOWED_WORK}}` | LIST | Body content | Yes | Author-provided |
| `{{FORBIDDEN_WORK}}` | LIST | Body content | Yes | Author-provided |
| `{{REQUIRED_OUTPUT}}` | TEXT | Body content | Yes | Author-provided |
| `{{VALIDATION_REQUIREMENTS}}` | LIST | Body content | Yes | Author-provided |
| `{{HANDOFF_NOTES}}` | TEXT | Body content | Yes | Author-provided |
| `{{RELEASE_RULE}}` | TEXT | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Packet Identity

| Field | Value |
|:---|:---|
| Context Packet ID | `{{CONTEXT_PACKET_ID}}` |
| Task ID / Capability | {{TASK_ID_OR_CAPABILITY}} |

---

## 2. Packet Contents

{{PACKET_CONTENTS}}

---

## 3. Authority Summary

{{AUTHORITY_SUMMARY}}

---

## 4. Current State Summary

{{CURRENT_STATE_SUMMARY}}

---

## 5. Allowed Work

{{ALLOWED_WORK}}

---

## 6. Forbidden Work

{{FORBIDDEN_WORK}}

---

## 7. Required Output

{{REQUIRED_OUTPUT}}

---

## 8. Validation Requirements

{{VALIDATION_REQUIREMENTS}}

---

## 9. Handoff Notes

{{HANDOFF_NOTES}}

---

## 10. Release Rule

{{RELEASE_RULE}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Packet contents cite source authorities, knowledge, memory, validation requirements, risks, and state summaries as applicable.
- Allowed and forbidden work preserve source authority, ProjectStatus, roadmap, and frozen-area boundaries.
- Release rule makes the packet temporary and invalidates it when task, scope, ProjectStatus, or authority changes.
- Produced artifacts do not approve, certify, promote, activate future scope, or update ProjectStatus.

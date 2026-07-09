# Memory Registry Template

> Forge AI v2 · Memory Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-MEMORY-REGISTRY` |
| Title | Memory Registry Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Memory Template |
| Document Type | Template |
| Owner | Memory System Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.TEMPLATES.MEMORY.REGISTRY` |
| Scope | Defines the reusable structure for recording approved memory items, memory status, evidence sources, authority sources, review dates, invalidation rules, and registry validation checks. |
| Out of Scope | Memory authority redefinition, knowledge authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, storage implementation, retrieval implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.5.9-Memory-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Memory Engine RFC; Forge AI template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; Memory Engine architecture boundaries |
| Produces | Reusable memory registry artifact structure |
| Related Specifications | `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, memory authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Record approved memory items that may be used to improve future context assembly.

This template records memory registry structure only. It does not make a memory item authoritative, approve a memory item, certify a memory item, create registry authority, create governance authority, or update ProjectStatus.

---

## 2. When To Use This Template

Use this template when a governed project or framework needs a registry of memory items with IDs, types, summaries, evidence sources, authority sources, status values, review dates, and invalidation rules.

Do not use this template to approve memory records, certify memory records, override knowledge sources, replace ProjectStatus, or implement memory storage/retrieval.

---

## 3. Authority Boundaries

Memory registries produced from this template must point to existing evidence and source authorities. Registry inclusion alone does not make memory canonical, certified, authoritative, or current beyond the memory item's governed status and cited evidence.

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

Default produced-document classification is `Memory Artifact` and default document type is `Memory Registry`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Memory Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | Memory System Owner |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-001; STD-002; STD-003; STD-010; TPL-000; applicable memory and knowledge authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{REGISTRY_PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{REGISTRY_SCOPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{MEMORY_REGISTRY_ENTRIES}}` | TABLE | Body content | Yes | Author-provided |
| `{{STATUS_MODEL}}` | TEXT | Body content | Yes | Author-provided |
| `{{REGISTRY_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{REGISTRY_PURPOSE}}

---

## 2. Registry Scope

{{REGISTRY_SCOPE}}

---

## 3. Registry

{{MEMORY_REGISTRY_ENTRIES}}

---

## 4. Status Model

{{STATUS_MODEL}}

---

## 5. Rules

{{REGISTRY_RULES}}

---

## 6. Validation Checklist

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Registry entries identify evidence source, authority source, status, review date, and invalidation rule.
- Candidate or stale memory is not treated as authoritative.
- Registry rules preserve source documentation, knowledge sources, and ProjectStatus over derived memory.
- Produced artifacts do not approve, certify, promote, implement memory storage, or update ProjectStatus.

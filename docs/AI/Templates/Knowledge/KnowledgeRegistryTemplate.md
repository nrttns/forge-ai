# Knowledge Registry Template

> Forge AI v2 · Knowledge Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-KNOWLEDGE-REGISTRY` |
| Title | Knowledge Registry Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Knowledge Template |
| Document Type | Template |
| Owner | Knowledge System Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.TEMPLATES.KNOWLEDGE.REGISTRY` |
| Scope | Defines the reusable structure for recording approved knowledge sources, source types, authority levels, owners, refresh rules, status, conflict handling, and registry validation checks. |
| Out of Scope | Knowledge authority redefinition, discovery standard redefinition, terminology redefinition, metadata standard redefinition, registry authority creation, evidence authority creation, finding authority creation, recommendation authority creation, risk authority creation, decision authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime behavior, engine behavior, implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Forge AI template library |
| Consumes | STD-001 knowledge graph concepts; STD-002 discovery concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable knowledge registry artifact structure |
| Related Specifications | `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, knowledge authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Record the approved knowledge sources available to agents, automation, workflows, and future governed consumers.

This template records registry structure only. It does not create registry authority, knowledge authority, discovery authority, validation authority, review authority, certification authority, governance authority, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template when a governed project or framework needs a registry of knowledge sources with IDs, paths, types, authority levels, owners, refresh rules, and status values.

Do not use this template to approve sources, certify sources, promote sources, override source authority, redefine STD-001 graph rules, redefine STD-002 discovery rules, or update ProjectStatus.

---

## 3. Authority Boundaries

Knowledge registries produced from this template must point to existing authorities and source owners. Registry inclusion alone does not make a source canonical, approved, certified, or authoritative beyond the source's own governing status.

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

Default produced-document classification is `Knowledge Artifact` and default document type is `Knowledge Registry`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Knowledge Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | Knowledge System Owner |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-001; STD-002; STD-003; STD-010; TPL-000; applicable domain authorities |
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
| `{{REGISTRY_ENTRIES}}` | TABLE | Body content | Yes | Author-provided |
| `{{SOURCE_TYPES}}` | LIST | Body content | Yes | Author-provided |
| `{{REGISTRY_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{CONFLICT_HANDLING}}` | TEXT | Body content | Yes | Author-provided |
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

{{REGISTRY_ENTRIES}}

---

## 4. Source Types

{{SOURCE_TYPES}}

---

## 5. Registry Rules

{{REGISTRY_RULES}}

---

## 6. Conflict Handling

{{CONFLICT_HANDLING}}

---

## 7. Validation Checklist

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Registry entries identify source paths or locations, owners, refresh rules, and status values.
- Authority levels reflect existing authority and do not create new authority.
- Conflict handling routes conflicts to existing governance or review processes without resolving authority conflicts silently.
- Registry output does not certify, approve, promote, or update ProjectStatus.

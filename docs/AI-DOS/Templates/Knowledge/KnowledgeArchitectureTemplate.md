# Knowledge Architecture Template

>AI-DOS v2 · Knowledge Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-KNOWLEDGE-ARCHITECTURE` |
| Title | Knowledge Architecture Template |
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
| Traceability ID | `AI-DOS.V2.TEMPLATES.KNOWLEDGE.ARCHITECTURE` |
| Scope | Defines the reusable structure for documenting a project or framework knowledge architecture, including categories, ownership, source hierarchy, refresh rules, validation expectations, and consumption boundaries. |
| Out of Scope | Knowledge authority redefinition, discovery standard redefinition, terminology redefinition, metadata standard redefinition, registry authority creation, evidence authority creation, finding authority creation, recommendation authority creation, risk authority creation, decision authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime behavior, engine behavior, implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance;AI-DOS template library |
| Consumes | STD-001 knowledge graph concepts; STD-002 discovery concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable knowledge architecture artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, knowledge authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Define the persistent knowledge architecture used by the project or framework.

Knowledge is documented, persistent, reviewable, and traceable information. It may include constitutions, specifications, governance documents, phase documents, stage documents, capability records, commands, workflows, templates, checklists, validation evidence, audits, ADRs, RFCs, and certified decisions.

This template is an output contract only. It consumes STD-001, STD-002, STD-003, STD-010, and TPL-000 without redefining knowledge graph, discovery, terminology, metadata, or template governance authority.

---

## 2. When To Use This Template

Use this template to define how knowledge is categorized, owned, sourced, refreshed, validated, and consumed for a governed project or framework.

Do not use this template to create a competing knowledge standard, discovery standard, evidence model, finding model, recommendation model, risk model, decision model, registry authority, validation authority, review authority, certification authority, governance authority, or ProjectStatus update.

---

## 3. Authority Boundaries

Knowledge architecture documents produced from this template must identify and consume their applicable authorities. They may describe source hierarchy and consumption rules for a specific project or framework, but they must not redefine STD-001, STD-002, STD-003, STD-010, TPL-000, governance authority, or ProjectStatus.

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

Default produced-document classification is `Knowledge Artifact` and default document type is `Knowledge Architecture`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{KNOWLEDGE_ARCHITECTURE_PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{IN_SCOPE_ITEMS}}` | LIST | Body content | Yes | Author-provided |
| `{{OUT_OF_SCOPE_ITEMS}}` | LIST | Body content | Yes | Author-provided |
| `{{KNOWLEDGE_CATEGORIES}}` | TABLE | Body content | Yes | Author-provided |
| `{{AUTHORITY_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{CONSUMPTION_MODEL}}` | TEXT | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{KNOWLEDGE_ARCHITECTURE_PURPOSE}}

---

## 2. Scope

### In Scope

{{IN_SCOPE_ITEMS}}

### Out of Scope

{{OUT_OF_SCOPE_ITEMS}}

---

## 3. Knowledge Categories

{{KNOWLEDGE_CATEGORIES}}

---

## 4. Authority Rules

{{AUTHORITY_RULES}}

---

## 5. Consumption Model

{{CONSUMPTION_MODEL}}

---

## 6. Validation

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Knowledge categories consume STD-001, STD-002, and STD-003 terminology without redefining those standards.
- Authority rules identify existing source authorities and do not create new governance authority.
- Consumption rules do not authorize runtime implementation, engine behavior, certification, approval, promotion, or ProjectStatus updates.

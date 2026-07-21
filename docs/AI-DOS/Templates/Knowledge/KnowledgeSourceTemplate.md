# Knowledge Source Template

>AI-DOS v2 · Knowledge Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-KNOWLEDGE-SOURCE` |
| Title | Knowledge Source Template |
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
| Traceability ID | `AI-DOS.V2.TEMPLATES.KNOWLEDGE.SOURCE` |
| Scope | Defines the reusable structure for describing one knowledge source, including identity, source type, authority position, allowed use, forbidden use, refresh rules, staleness signals, consumers, and validation checks. |
| Out of Scope | Knowledge authority redefinition, discovery standard redefinition, terminology redefinition, metadata standard redefinition, registry authority creation, evidence authority creation, finding authority creation, recommendation authority creation, risk authority creation, decision authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime behavior, engine behavior, implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance;AI-DOS template library |
| Consumes | STD-001 knowledge graph concepts; STD-002 discovery concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable knowledge source artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, knowledge authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Describe one approved knowledge source and how it may be used by agents or other governed consumers.

This template describes source usage boundaries only. It does not approve, certify, promote, canonicalize, or register the source by itself.

---

## 2. When To Use This Template

Use this template to document a single knowledge source's identity, authority position, allowed uses, forbidden uses, refresh rules, staleness signals, and consumers.

Do not use this template to create source authority, override an authority chain, define a competing discovery model, define a competing knowledge graph model, or update ProjectStatus.

---

## 3. Authority Boundaries

Knowledge source documents produced from this template must identify the source's existing authority position and usage boundaries. They may describe how consumers use the source, but they must not redefine STD-001, STD-002, STD-003, STD-010, TPL-000, governance authority, validation authority, review authority, certification authority, or ProjectStatus.

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

Default produced-document classification is `Knowledge Artifact` and default document type is `Knowledge Source`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{KNOWLEDGE_SOURCE_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{SOURCE_NAME}}` | TEXT | Body content | Yes | Author-provided |
| `{{SOURCE_TYPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{SOURCE_DESCRIPTION}}` | TEXT | Body content | Yes | Author-provided |
| `{{AUTHORITY_POSITION}}` | TEXT | Body content | Yes | Author-provided |
| `{{ALLOWED_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{FORBIDDEN_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{REFRESH_RULE}}` | TEXT | Body content | Yes | Author-provided |
| `{{STALENESS_SIGNALS}}` | LIST | Body content | Yes | Author-provided |
| `{{CONSUMERS}}` | TABLE | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

Describe `{{SOURCE_NAME}}` and how it may be used by governed consumers.

---

## 2. Source Identity

| Field | Value |
|:---|:---|
| Knowledge Source ID | `{{KNOWLEDGE_SOURCE_ID}}` |
| Source Name | {{SOURCE_NAME}} |
| Source Type | {{SOURCE_TYPE}} |

---

## 3. Source Description

{{SOURCE_DESCRIPTION}}

---

## 4. Authority Position

{{AUTHORITY_POSITION}}

---

## 5. Allowed Use

{{ALLOWED_USE}}

---

## 6. Forbidden Use

{{FORBIDDEN_USE}}

---

## 7. Refresh Rule

{{REFRESH_RULE}}

---

## 8. Staleness Signals

{{STALENESS_SIGNALS}}

---

## 9. Consumers

{{CONSUMERS}}

---

## 10. Validation

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Source identity, authority position, owner, allowed use, forbidden use, refresh rule, staleness signals, and consumers are explicit.
- Source usage consumes STD-001, STD-002, and STD-003 terminology without redefining those standards.
- The produced artifact does not approve, certify, promote, canonicalize, register, or update ProjectStatus by itself.

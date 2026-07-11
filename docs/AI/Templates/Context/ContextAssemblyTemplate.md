# Context Assembly Template

>AI-DOS v2 · Context Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-CONTEXT-ASSEMBLY` |
| Title | Context Assembly Template |
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
| Traceability ID | `AI-DOS.V2.TEMPLATES.CONTEXT.ASSEMBLY` |
| Scope | Defines the reusable structure for recording context assembled for one task or execution cycle, including task scope, loaded authorities, loaded knowledge, loaded memory, context sufficiency decision, blockers, and validation checks. |
| Out of Scope | Context authority redefinition, knowledge authority redefinition, memory authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, context storage implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; System Context Assembly; Context Engine RFC;AI-DOS template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; context assembly and Context Engine boundaries |
| Produces | Reusable context assembly artifact structure |
| Related Specifications | `docs/AI/Templates/Context/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, context authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Record the context assembled for one task or execution cycle.

This template is an output contract only. It consumes existing Context, Knowledge, Memory, STD-001, STD-002, STD-003, STD-010, and TPL-000 authority without redefining context, knowledge, memory, source, registry, validation, review, certification, governance, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to document the bounded context selected for a task, why that context is sufficient, which sources were loaded, and which blockers remain.

Do not use this template to create context authority, approve work, certify work, override ProjectStatus, or replace source-of-truth documents.

---

## 3. Authority Boundaries

Context assembly documents produced from this template may summarize what was loaded for a task, but they must not promote, canonicalize, certify, approve, or redefine any loaded source. Missing or conflicting authority must be escalated to the appropriate existing authority.

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
Default produced-document classification is `Context Artifact` and default document type is `Context Assembly`.

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
| `{{CONTEXT_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{TASK_SCOPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{ASSEMBLER}}` | TEXT | Body content | Yes | Author-provided |
| `{{AUTHORITY_SOURCES_LOADED}}` | TABLE | Body content | Yes | Author-provided |
| `{{KNOWLEDGE_SOURCES_LOADED}}` | TABLE | Body content | Yes | Author-provided |
| `{{MEMORY_SOURCES_LOADED}}` | TABLE | Body content | Yes | Author-provided |
| `{{CONTEXT_DECISION}}` | TEXT | Body content | Yes | Author-provided |
| `{{BLOCKERS}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Task Scope

{{TASK_SCOPE}}

---

## 2. Context Identity

| Field | Value |
|:---|:---|
| Context ID | `{{CONTEXT_ID}}` |
| Assembler | {{ASSEMBLER}} |

---

## 3. Authority Sources Loaded

{{AUTHORITY_SOURCES_LOADED}}

---

## 4. Knowledge Sources Loaded

{{KNOWLEDGE_SOURCES_LOADED}}

---

## 5. Memory Sources Loaded

{{MEMORY_SOURCES_LOADED}}

---

## 6. Context Decision

{{CONTEXT_DECISION}}

---

## 7. Blockers

{{BLOCKERS}}

---

## 8. Validation Checklist

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Authority, knowledge, and memory sources are identified with status and purpose.
- Memory entries do not override documentation, ProjectStatus, or other source-of-truth documents.
- Context sufficiency is explained within the task scope.
- Produced artifacts do not approve, certify, promote, or update ProjectStatus.

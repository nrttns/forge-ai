# Context Engine Template

>AI-DOS v2 · Context Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-CONTEXT-ENGINE` |
| Title | Context Engine Template |
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
| Traceability ID | `AI-DOS.V2.TEMPLATES.CONTEXT.ENGINE` |
| Scope | Defines the reusable structure for documenting how task-specific context is assembled, bounded, refreshed, used, validated, and released. |
| Out of Scope | Context authority redefinition, knowledge authority redefinition, memory authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, context storage implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/System/ContextAssembly.md`; `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; System Context Assembly; Context Engine RFC;AI-DOS template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; context assembly and Context Engine boundaries |
| Produces | Reusable context engine artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Context/`; `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/Memory/`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, context authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Define how task-specific context is assembled, bounded, refreshed, used, and released.

Context is temporary. It is not authority, not memory, and not project state.

This template consumes the existing Context Engine RFC, Context Assembly guidance, Knowledge, Memory, STD-001, STD-002, STD-003, STD-010, and TPL-000 authority without redefining those authorities.

---

## 2. When To Use This Template

Use this template to document context lifecycle, inputs, boundaries, refresh rules, and validation expectations for a governed project or framework.

Do not use this template to implement a context engine, define runtime behavior, create context authority, override source-of-truth documents, or update ProjectStatus.

---

## 3. Authority Boundaries

Context engine documents produced from this template may describe context handling expectations, but they must not redefine Runtime, Context Engine architecture, System Context Assembly, Knowledge, Memory, Standards, Governance, or ProjectStatus.

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
Default produced-document classification is `Context Artifact` and default document type is `Context Engine Specification`.

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
| `{{CONTEXT_ENGINE_PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{CONTEXT_LIFECYCLE}}` | TEXT | Body content | Yes | Author-provided |
| `{{CONTEXT_INPUTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{CONTEXT_BOUNDARIES}}` | LIST | Body content | Yes | Author-provided |
| `{{REFRESH_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Purpose

{{CONTEXT_ENGINE_PURPOSE}}

---

## 2. Context Lifecycle

{{CONTEXT_LIFECYCLE}}

---

## 3. Context Inputs

{{CONTEXT_INPUTS}}

---

## 4. Context Boundaries

{{CONTEXT_BOUNDARIES}}

---

## 5. Refresh Rules

{{REFRESH_RULES}}

---

## 6. Validation

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Context lifecycle and inputs consume existing context, knowledge, memory, and standards authority without redefining those authorities.
- Boundaries preserve the rule that context is temporary and cannot replace authority, memory, or ProjectStatus.
- Produced artifacts do not implement runtime behavior, approve, certify, promote, or update ProjectStatus.

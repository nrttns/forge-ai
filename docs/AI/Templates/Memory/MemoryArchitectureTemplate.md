# Memory Architecture Template

> Forge AI v2 · Memory Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-MEMORY-ARCHITECTURE` |
| Title | Memory Architecture Template |
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
| Traceability ID | `FORGE-AI.V2.TEMPLATES.MEMORY.ARCHITECTURE` |
| Scope | Defines the reusable structure for documenting how reusable learning is captured, reviewed, approved, stored, retrieved, invalidated, and bounded by existing knowledge, memory, standards, and governance authorities. |
| Out of Scope | Memory authority redefinition, knowledge authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, storage implementation, retrieval implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.5.9-Memory-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Memory Engine RFC; Forge AI template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; Memory Engine architecture boundaries |
| Produces | Reusable memory architecture artifact structure |
| Related Specifications | `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, memory authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Define how reusable learning is captured, reviewed, approved, stored, retrieved, and invalidated.

Memory is derived learning. It is not authority, not project state, not conversation history, and not a replacement for documentation.

This template is an output contract only. It consumes existing Knowledge, Memory Engine, STD-001, STD-002, STD-003, STD-010, and TPL-000 authority without redefining memory, knowledge, source, registry, validation, review, certification, governance, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to define the memory lifecycle, memory types, memory rules, invalidation rules, and validation checks for a governed project or framework.

Do not use this template to implement memory storage, create memory authority, create knowledge authority, approve memory records, certify memory records, create registry authority, or update ProjectStatus.

---

## 3. Authority Boundaries

Memory architecture documents produced from this template may describe memory flow and constraints, but they must not override source documentation, knowledge sources, ProjectStatus, governance decisions, validation results, review results, certification results, or the Memory Engine RFC.

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

Default produced-document classification is `Memory Artifact` and default document type is `Memory Architecture`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{MEMORY_ARCHITECTURE_PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{MEMORY_LIFECYCLE}}` | TEXT | Body content | Yes | Author-provided |
| `{{MEMORY_TYPES}}` | TABLE | Body content | Yes | Author-provided |
| `{{MEMORY_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{INVALIDATION_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{MEMORY_ARCHITECTURE_PURPOSE}}

---

## 2. Memory Lifecycle

{{MEMORY_LIFECYCLE}}

---

## 3. Memory Types

{{MEMORY_TYPES}}

---

## 4. Memory Rules

{{MEMORY_RULES}}

---

## 5. Invalidation Rules

{{INVALIDATION_RULES}}

---

## 6. Validation

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Memory lifecycle and memory types consume existing knowledge, memory, and standards authority without redefining those authorities.
- Memory rules preserve documented source precedence over derived memory.
- Invalidation rules include authority changes, ProjectStatus changes, phase/stage changes, governance changes, contradictory evidence, and superseding human instruction when applicable.
- Produced artifacts do not certify, approve, promote, implement memory storage, or update ProjectStatus.

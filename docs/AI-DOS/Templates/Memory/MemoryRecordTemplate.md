# Memory Record Template

>AI-DOS v2 · Memory Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-MEMORY-RECORD` |
| Title | Memory Record Template |
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
| Traceability ID | `AI-DOS.V2.TEMPLATES.MEMORY.RECORD` |
| Scope | Defines the reusable structure for documenting a single memory record, including summary, evidence, authority references, allowed use, forbidden use, invalidation conditions, review, certification impact, and completion checks. |
| Out of Scope | Memory authority redefinition, knowledge authority redefinition, source authority creation, registry authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, storage implementation, retrieval implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.9-Memory-Engine-RFC.md` |
| Dependencies | STD-001 knowledge graph rules; STD-002 discovery rules; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Memory Engine RFC;AI-DOS template library |
| Consumes | STD-001 graph and relationship concepts; STD-002 discovery and evidence concepts; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; Memory Engine architecture boundaries |
| Produces | Reusable memory record artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Memory/`; `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, memory authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

State reusable learning in a bounded, evidence-backed memory record.

A memory record is derived from documented evidence and authority references. It may assist future context assembly, but it is not source authority, not registry authority, not validation authority, not review authority, not certification authority, not governance authority, and not ProjectStatus.

---

## 2. When To Use This Template

Use this template to capture one reusable lesson or memory candidate with evidence, authority references, allowed future use, forbidden future use, invalidation conditions, review outcome, and certification impact.

Do not use this template to approve itself, certify itself, override its evidence sources, register itself as active memory, or update ProjectStatus.

---

## 3. Authority Boundaries

Memory records produced from this template must cite their evidence and source authorities. They may summarize reusable learning, but they must not replace the cited evidence, knowledge source, source registry, Memory Engine RFC, governance decision, validation artifact, review artifact, certification artifact, or ProjectStatus.

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

Default produced-document classification is `Memory Artifact` and default document type is `Memory Record`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

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
| `{{MEMORY_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{MEMORY_TYPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{MEMORY_SUMMARY}}` | TEXT | Body content | Yes | Author-provided |
| `{{EVIDENCE_TABLE}}` | TABLE | Body content | Yes | Author-provided |
| `{{AUTHORITY_REFERENCES}}` | TABLE | Body content | Yes | Author-provided |
| `{{ALLOWED_FUTURE_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{FORBIDDEN_FUTURE_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{INVALIDATION_CONDITIONS}}` | LIST | Body content | Yes | Author-provided |
| `{{REVIEW_TABLE}}` | TABLE | Body content | Yes | Author-provided |
| `{{CERTIFICATION_IMPACT}}` | TEXT | Body content | Yes | Author-provided |
| `{{COMPLETION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Summary

{{MEMORY_SUMMARY}}

---

## 2. Memory Identity

| Field | Value |
|:---|:---|
| Memory ID | `{{MEMORY_ID}}` |
| Memory Type | {{MEMORY_TYPE}} |

---

## 3. Evidence

{{EVIDENCE_TABLE}}

---

## 4. Authority References

{{AUTHORITY_REFERENCES}}

---

## 5. Allowed Future Use

{{ALLOWED_FUTURE_USE}}

---

## 6. Forbidden Future Use

{{FORBIDDEN_FUTURE_USE}}

---

## 7. Invalidation Conditions

{{INVALIDATION_CONDITIONS}}

---

## 8. Review

{{REVIEW_TABLE}}

---

## 9. Certification Impact

{{CERTIFICATION_IMPACT}}

---

## 10. Completion Checklist

{{COMPLETION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Evidence and authority references are explicit and resolvable.
- Allowed and forbidden future use are bounded to prevent derived memory from replacing authority.
- Invalidation conditions are documented before the record is used.
- Review and certification impact are recorded as evidence or recommendations only, not approval or certification.
- Produced artifacts do not register themselves, certify themselves, approve themselves, or update ProjectStatus.

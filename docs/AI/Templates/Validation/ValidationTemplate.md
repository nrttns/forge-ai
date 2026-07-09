# Validation Template

> Forge AI v2 · Validation Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-VALIDATION-VALIDATION` |
| Title | Validation Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Validation Template |
| Document Type | Template |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.TEMPLATES.VALIDATION.VALIDATION` |
| Scope | Defines the reusable structure for validation artifacts that record scope, authority consumption, evidence, results, quality gates, risks, and next action. |
| Out of Scope | Governance redesign, certification authority, approval authority, ProjectStatus updates, runtime behavior, engine behavior, implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Validation/AIFrameworkValidation.md`; `docs/AI/Validation/ValidationLifecycle.md`; `docs/AI/Validation/ValidationLevels.md`; `docs/AI/Validation/ValidationCertification.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Forge AI template library; existing validation, review, certification, and governance authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing validation lifecycle, validation-level, certification-relationship, and governance-routing guidance |
| Produces | Reusable validation artifact structure for evidence capture, validation result reporting, quality-gate tracking, risk recording, and recommended next action |
| Related Specifications | `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Certification/` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

This template provides a reusable structure for validation artifacts. It helps authors record what was validated, which authorities were consumed, what evidence was reviewed, what results were found, which quality gates were checked, what risks remain, and what next action is recommended.

The template is an output contract only. It does not create validation authority, review authority, certification authority, approval authority, governance authority, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template when a task needs a validation artifact for documentation, templates, workflows, operational compatibility materials, architecture evidence, or other governed repository work.

Do not use this template as an RFC template, certification template, approval template, governance decision record, roadmap update, or ProjectStatus update.

---

## 3. Authority Boundaries

Validation artifacts produced from this template must consume the applicable upstream authorities for the subject being validated. They must not redefine those authorities.

A produced validation artifact may report findings, evidence, risks, blockers, and recommendations. It must not certify, approve, promote, canonicalize, update ProjectStatus, or establish a new quality-gate authority unless a separate governing authority explicitly grants that scope.

---

## 4. Produced Document Metadata

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

---

## 5. Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Yes | Author-provided |
| `{{TITLE}}` | TEXT | Title | Yes | Author-provided |
| `{{VERSION}}` | VERSION | Version | Yes | `0.1.0-draft` |
| `{{STATUS}}` | STATUS | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | TEXT | Canonical Status | Yes | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Validation Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Validation Report |
| `{{OWNER}}` | TEXT | Owner | Yes | Author-provided |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | Author-provided |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Validation findings, evidence summary, quality-gate summary, risk summary, and recommended next action |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{VALIDATION_SUBJECT}}` | TEXT | Body content | Yes | Author-provided |
| `{{VALIDATION_OBJECTIVE}}` | TEXT | Body content | Yes | Author-provided |
| `{{VALIDATION_INPUTS}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_RULES}}` | LIST | Body content | Yes | Author-provided |
| `{{EVIDENCE}}` | LIST | Body content | Yes | Author-provided |
| `{{RESULTS}}` | LIST | Body content | Yes | Author-provided |
| `{{QUALITY_GATES}}` | LIST | Body content | Yes | Author-provided |
| `{{RISKS}}` | LIST | Body content | Yes | None identified |
| `{{NEXT_ACTION}}` | TEXT | Body content | Yes | Author-provided |

---

## 6. Template Body

```markdown
## 1. Purpose

{{VALIDATION_OBJECTIVE}}

---

## 2. Scope

{{SCOPE}}

---

## 3. Validation Subject

{{VALIDATION_SUBJECT}}

---

## 4. Inputs

{{VALIDATION_INPUTS}}

---

## 5. Authority Consumption

This validation consumes the authorities declared in the document metadata. It does not redefine governance, validation, review, certification, approval, roadmap, runtime, engine, or ProjectStatus authority.

---

## 6. Validation Rules

{{VALIDATION_RULES}}

---

## 7. Evidence

{{EVIDENCE}}

---

## 8. Results

{{RESULTS}}

---

## 9. Quality Gates

{{QUALITY_GATES}}

---

## 10. Risks and Blockers

{{RISKS}}

---

## 11. Next Action

{{NEXT_ACTION}}
```

---

## 7. Validation Requirements

A validation artifact produced from this template is complete only when:

- all STD-010 metadata fields are present and resolved;
- all required placeholders are resolved;
- all declared authorities and references are applicable to the validation subject;
- validation, review, certification, approval, and governance authorities are consumed rather than redefined;
- evidence is listed or explicitly recorded as unavailable;
- results are stated as findings, not approvals or certifications;
- quality gates are tied to existing authorities or task instructions;
- risks and blockers are recorded;
- next action is a recommendation, not an automatic ProjectStatus update or promotion action.

---

## 8. Non-Authority Statement

This template and documents produced from it do not certify, approve, promote, canonicalize, or update ProjectStatus. Any certification, approval, promotion, canonicalization, or ProjectStatus update must be performed only by the appropriate existing authority through its governed process.

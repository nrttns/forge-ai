# Validation Template

This template defines a reusable structure for validation reports.

It is governed by:

- `docs/AI/Templates/TemplateLibrary.md`
- `docs/AI/Templates/Validation/README.md`
- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` when the produced artifact is governed Markdown

## Purpose

Use this template to record a bounded validation subject, the rules applied to it, the evidence inspected, the resulting findings, unresolved risks, and a recommended next action.

The template provides report structure only. It does not create validation authority, define acceptance criteria, approve work, certify completion, promote an artifact, authorize execution, release a product, or mutate Target-owned state.

## Applicability

Use this template only when the invocation or applicable owning authority explicitly supplies:

- the validation subject and scope;
- the authority that owns the subject;
- the validation rules or acceptance criteria;
- required evidence and provenance expectations;
- any applicable quality gates;
- the intended consumer and lifecycle of the produced report.

Stop when any required input is absent, contradictory, or ambiguous. Do not invent rules, gates, evidence, ownership, or completion criteria to make the template applicable.

## Authority Boundary

A validation report may state findings such as pass, pass with observations, fail, blocked, inconclusive, or not evaluated when those result terms are defined by the supplied validation authority.

A result does not by itself:

- accept a review;
- certify or approve an artifact;
- promote, canonicalize, publish, distribute, or release anything;
- authorize implementation or execution;
- transition a roadmap, phase, stage, capability, ProjectStatus, or other Target-owned state;
- create a new quality gate or governance rule.

Any downstream action requires its own applicable authority and governed procedure.

## Produced Artifact Metadata

When STD-010 applies, begin the produced report with resolved metadata:

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{DOCUMENT_IDENTIFIER}}` |
| Title | {{DOCUMENT_TITLE}} |
| Version | `{{DOCUMENT_VERSION}}` |
| Status | {{DOCUMENT_STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | {{DOCUMENT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |
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

Metadata values are artifact-specific. This template supplies no default owner, review authority, approval authority, lifecycle, promotion route, or certification status beyond requiring those fields to be resolved where applicable.

## Required Placeholders

| Placeholder | Purpose | Required |
|:---|:---|:---:|
| `{{DOCUMENT_IDENTIFIER}}` | Produced report identity | Yes when STD-010 applies |
| `{{DOCUMENT_TITLE}}` | Produced report title | Yes |
| `{{OWNER}}` | Owner of the produced validation report | Yes |
| `{{VALIDATION_SUBJECT}}` | Exact subject being validated | Yes |
| `{{VALIDATION_SCOPE}}` | Included and excluded validation scope | Yes |
| `{{SUBJECT_AUTHORITY}}` | Authority that owns the subject | Yes |
| `{{VALIDATION_RULES}}` | Supplied rules or acceptance criteria | Yes |
| `{{EVIDENCE_SOURCES}}` | Evidence and provenance sources | Yes |
| `{{FINDINGS}}` | Evidence-backed findings | Yes |
| `{{RESULT}}` | Result term defined by the supplied authority | Yes |
| `{{OBSERVATIONS}}` | Non-blocking observations | No |
| `{{RISKS_AND_BLOCKERS}}` | Remaining risks, blockers, or uncertainty | Yes |
| `{{RECOMMENDED_NEXT_ACTION}}` | Non-authorizing recommendation | Yes |
| `{{RELATED_ARTIFACTS}}` | Related artifacts and traceability links | No |

All placeholders must be resolved or explicitly marked not applicable with a reason.

## Produced Report Structure

```markdown
# {{DOCUMENT_TITLE}}

## 1. Validation Identification

| Field | Value |
|:---|:---|
| Subject | {{VALIDATION_SUBJECT}} |
| Scope | {{VALIDATION_SCOPE}} |
| Subject Authority | {{SUBJECT_AUTHORITY}} |
| Report Owner | {{OWNER}} |

## 2. Objective

State what this validation is intended to determine without extending the supplied scope.

## 3. Validation Rules

{{VALIDATION_RULES}}

## 4. Evidence and Provenance

{{EVIDENCE_SOURCES}}

## 5. Findings

{{FINDINGS}}

## 6. Result

{{RESULT}}

The result reports the outcome of this bounded validation only. It is not review acceptance, certification, approval, promotion, release, execution authorization, or state-transition authority.

## 7. Observations

{{OBSERVATIONS}}

## 8. Risks, Blockers, and Uncertainty

{{RISKS_AND_BLOCKERS}}

## 9. Recommended Next Action

{{RECOMMENDED_NEXT_ACTION}}

This recommendation does not execute or authorize the next action.

## 10. Related Artifacts

{{RELATED_ARTIFACTS}}
```

## Validation Requirements

A produced report is structurally complete only when:

- its subject, scope, owner, and subject authority are explicit;
- rules and acceptance criteria are traceable to supplied authority;
- evidence sources and provenance are recorded;
- findings are supported by evidence and distinguish fact from inference;
- the result vocabulary is defined or traceable;
- observations are separated from blocking findings;
- risks, blockers, unavailable evidence, and uncertainty are explicit;
- the recommended next action is non-authorizing;
- no review, certification, approval, promotion, release, execution, or Target-state authority is inferred from the validation result;
- all applicable TPL-000 and STD-010 requirements are satisfied.

## Non-Goals

This template does not define a validation lifecycle, validation level hierarchy, certification relationship, review procedure, governance route, Runtime behavior, Engine behavior, Operational Core behavior, command, workflow, release process, or Target planning/state model.
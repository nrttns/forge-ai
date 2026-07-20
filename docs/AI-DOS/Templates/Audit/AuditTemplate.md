# Audit Template

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-AUDIT-AUDIT` |
| Title | Audit Template |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Audit Template |
| Document Type | Template |
| Owner | AI-DOS Template Library |
| Last Updated | 2026-07-18 |
| Scope | Reusable structure for bounded audit artifacts that record subject, scope, authority, criteria, evidence and provenance, observations, findings, nonconformities or control gaps, rationale, unresolved matters, result, non-authorizing recommendation, risks, and intended consumer. |
| Out of Scope | Audit execution, correction implementation, validation decisions, review conclusions, certification, approval, promotion, release, execution authorization, provider dispatch, canonicalization, Target-state mutation, or catalog-family normalization. |
| Normative References | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/TemplateIndex.md`; `docs/AI/Templates/Audit/AuditFamily.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; STD-010 when applicable; declared audit authority. |

## 1. Purpose

Provide a reusable, provider-neutral structure for a bounded audit artifact under an explicitly declared audit authority, scope, criteria set, evidence base, finding vocabulary, and intended consumer.

This template structures audit evidence and findings. It does not perform audit execution, implement corrections, approve, certify, promote, release, canonicalize, authorize execution, or mutate product, project, Target, runtime, provider, or catalog state.

## 2. Family Contract

This component belongs to `Audit/AuditFamily.md` and must remain inside that family's purpose, separation rules, authority boundary, Target-independence rules, and safe-stop conditions.

## 3. Selection Preconditions

Use this template only when the audit subject, scope, exclusions, audit authority, criteria, evidence sources, provenance, finding vocabulary, intended consumer, and protected boundaries are explicit.

Do not use it as a validation report, review conclusion, certification record, approval decision, exception authorization, release record, execution authorization, catalog-family normalization, or Target-state update.

## 4. Authority Boundary

A produced audit artifact may record declared evidence, provenance, observations, findings, nonconformities or control gaps, rationale, unresolved matters, a bounded result, risks, and a non-authorizing recommendation for the intended consumer.

It must not invent audit authority, criteria, evidence, provenance, result vocabulary, approval authority, certification claims, promotion status, release status, execution authorization, canonicalization, correction implementation, or Target-state mutation.

An audit result is not approval, certification, promotion, release, execution authorization, canonicalization, or Target-state mutation.

## 5. Required Produced-Artifact Metadata

A produced audit artifact shall declare:

- identifier, title, lifecycle status, and owner;
- audited subject and subject authority;
- audit scope and exclusions;
- audit authority;
- audit criteria and provenance;
- evidence inputs and provenance;
- finding vocabulary and source;
- intended consumer;
- dependencies, protected boundaries, and relevant dates.

No default auditor, owner, approval authority, Target path, ProjectStatus, DevelopmentPhases, Roadmap, provider, command, workflow, repository-specific lifecycle, or catalog-family disposition is implied.

## 6. Placeholder Manifest

| Placeholder | Required | Meaning |
|:---|:---:|:---|
| `{{AUDIT_IDENTIFIER}}` | Yes | Unique audit artifact identifier |
| `{{AUDIT_TITLE}}` | Yes | Audit title |
| `{{AUDIT_STATUS}}` | Yes | Produced artifact lifecycle state |
| `{{OWNER}}` | Yes | Audit artifact owner |
| `{{AUDIT_SUBJECT}}` | Yes | Exact subject under audit |
| `{{SUBJECT_AUTHORITY}}` | Yes | Owner or authority for the audited subject |
| `{{AUDIT_SCOPE}}` | Yes | Bounded audit scope and exclusions |
| `{{AUDIT_AUTHORITY}}` | Yes | Authority governing the audit |
| `{{AUDIT_CRITERIA}}` | Yes | Criteria and provenance used for the audit |
| `{{EVIDENCE_AND_PROVENANCE}}` | Yes | Evidence inputs, source locations, collection method, and provenance |
| `{{OBSERVATIONS}}` | Yes | Neutral observations from the evidence |
| `{{FINDINGS}}` | Yes | Evidence-backed findings |
| `{{NONCONFORMITIES_OR_CONTROL_GAPS}}` | Yes | Nonconformities, control gaps, or not-applicable statement |
| `{{RATIONALE}}` | Yes | Reasoning connecting evidence, criteria, and findings |
| `{{UNRESOLVED_MATTERS}}` | Yes | Open questions, ambiguities, evidence gaps, and blockers |
| `{{RESULT}}` | Yes | Bounded audit result |
| `{{FINDING_VOCABULARY}}` | Yes | Allowed finding/result labels and source |
| `{{RECOMMENDATION}}` | Yes | Non-authorizing recommendation |
| `{{RISKS}}` | Yes | Residual risks and uncertainty |
| `{{INTENDED_CONSUMER}}` | Yes | Consumer of the audit artifact |

## 7. Template Body

```markdown
# {{AUDIT_TITLE}}

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{AUDIT_IDENTIFIER}}` |
| Status | {{AUDIT_STATUS}} |
| Owner | {{OWNER}} |
| Audited Subject | {{AUDIT_SUBJECT}} |
| Subject Authority | {{SUBJECT_AUTHORITY}} |
| Audit Scope | {{AUDIT_SCOPE}} |
| Audit Authority | {{AUDIT_AUTHORITY}} |
| Audit Criteria | {{AUDIT_CRITERIA}} |
| Evidence and Provenance | {{EVIDENCE_AND_PROVENANCE}} |
| Finding Vocabulary | {{FINDING_VOCABULARY}} |
| Intended Consumer | {{INTENDED_CONSUMER}} |

## 1. Purpose

State why this audit artifact exists and what decision-support need it serves for the intended consumer.

## 2. Subject

{{AUDIT_SUBJECT}}

Subject authority: {{SUBJECT_AUTHORITY}}

## 3. Scope and Exclusions

{{AUDIT_SCOPE}}

## 4. Audit Authority

{{AUDIT_AUTHORITY}}

## 5. Criteria

{{AUDIT_CRITERIA}}

## 6. Evidence and Provenance

{{EVIDENCE_AND_PROVENANCE}}

## 7. Observations

{{OBSERVATIONS}}

## 8. Findings

{{FINDINGS}}

## 9. Nonconformities or Control Gaps

{{NONCONFORMITIES_OR_CONTROL_GAPS}}

## 10. Rationale

{{RATIONALE}}

## 11. Unresolved Matters

{{UNRESOLVED_MATTERS}}

## 12. Audit Result

{{RESULT}}

The audit result is bounded to this audit scope and is not approval, certification, promotion, release, execution authorization, canonicalization, or Target-state mutation.

## 13. Non-Authorizing Recommendation

{{RECOMMENDATION}}

The recommendation is non-authorizing and must be consumed by the applicable owning or governance authority.

## 14. Risks and Uncertainty

{{RISKS}}

## 15. Intended Consumer

{{INTENDED_CONSUMER}}
```

## 8. Result Semantics

The finding and result vocabulary must be supplied by the audit authority. Common labels may include conforming, conforming with observations, nonconformity, control gap, unresolved, insufficient evidence, requires follow-up, and not applicable.

These labels describe only the bounded audit outcome and do not authorize any lifecycle transition or state change.

## 9. Validation Requirements

A produced audit artifact is complete only when subject, scope, exclusions, owner, subject authority, audit authority, criteria, evidence provenance, finding vocabulary, intended consumer, unresolved matters, residual risks, and protected boundaries are explicit.

Evidence, observations, findings, nonconformities or control gaps, rationale, result, recommendation, risks, and intended consumer must remain distinct. Audit artifacts must not claim validation, review, certification, approval, promotion, release, execution, canonicalization, or mutation authority.

## 10. Safe Stop

Stop without producing a favorable audit result when authority is missing, subject or scope is ambiguous, criteria or vocabulary lack provenance, evidence is missing or contradictory, intended consumer is unclear, protected information would be exposed, or the requested output would require execution, correction implementation, validation decision, review conclusion, certification, approval, promotion, release, canonicalization, or Target-state mutation.

## 11. Non-Authority Statement

This template and artifacts produced from it do not approve, certify, promote, release, canonicalize, authorize execution, perform corrections, or mutate product, project, Target, runtime, provider, or catalog state. Any such action requires a separate explicit authority and governed process.

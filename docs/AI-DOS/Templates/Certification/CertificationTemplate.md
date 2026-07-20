# AI-DOS Certification Template

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-CERTIFICATION` |
| Title | AI-DOS Certification Template |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Certification Template |
| Document Type | Template |
| Owner | AI-DOS Template Library |
| Last Updated | 2026-07-16 |
| Scope | Reusable structure for a formal, bounded certification claim under explicitly declared certification authority. |
| Out of Scope | Validation execution, review authority, approval, promotion, canonicalization, release, execution authorization, provider dispatch, and Target-state mutation. |
| Normative References | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/TemplateIndex.md`; `docs/AI/Templates/Certification/CertificationFamily.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; STD-010 when applicable. |
| Produces | A bounded certification artifact with declared claim, authority, evidence basis, scope, limitations, validity, and status. |

---

## 1. Purpose

This template provides a reusable structure for recording a formal certification claim made by an explicitly declared certification authority.

It does not create certification authority. It does not approve, promote, canonicalize, release, authorize execution, or mutate product or Target-owned state.

## 2. When to Use

Use this template only when an invocation or applicable authority explicitly requires a certification artifact and supplies:

- the certification subject;
- the bounded scope;
- the certification authority;
- the certifier identity;
- the claim vocabulary;
- the applicable criteria;
- the evidence set and provenance;
- the validity or expiry rule;
- exclusions, limitations, unresolved risks, and intended consumer.

Do not use it as a validation report, review report, approval record, release authorization, promotion decision, exception decision, or state-transition record.

## 3. Authority Boundary

A certification artifact may assert only the claim authorized by its declared certification authority.

Validation and Review artifacts may be consumed as evidence. Their results do not automatically establish certification.

A certification result does not imply approval, promotion, canonicalization, release, execution authorization, provider dispatch, or Target-state mutation.

## 4. Required Placeholders

| Placeholder | Purpose | Required |
|:---|:---|:---|
| `{{IDENTIFIER}}` | Produced artifact identifier | Yes |
| `{{TITLE}}` | Produced artifact title | Yes |
| `{{VERSION}}` | Produced artifact version | Yes |
| `{{STATUS}}` | Produced artifact lifecycle status | Yes |
| `{{OWNER}}` | Artifact owner | Yes |
| `{{CERTIFICATION_SUBJECT}}` | Exact subject being certified | Yes |
| `{{CERTIFICATION_SCOPE}}` | Bounded claim scope | Yes |
| `{{CERTIFICATION_AUTHORITY}}` | Authority permitting the claim | Yes |
| `{{CERTIFIER_IDENTITY}}` | Certifier or certifying body | Yes |
| `{{CERTIFICATION_CRITERIA}}` | Applicable criteria and source | Yes |
| `{{EVIDENCE_SET}}` | Evidence references | Yes |
| `{{EVIDENCE_PROVENANCE}}` | Evidence origin and integrity context | Yes |
| `{{CLAIM_VOCABULARY}}` | Allowed result labels | Yes |
| `{{CERTIFICATION_RESULT}}` | Result for this bounded claim | Yes |
| `{{LIMITATIONS}}` | Limitations and exclusions | Yes |
| `{{UNRESOLVED_RISKS}}` | Remaining risks or blockers | Yes |
| `{{VALID_FROM}}` | Start of validity, when applicable | Conditional |
| `{{VALID_UNTIL}}` | Expiry or review date, when applicable | Conditional |
| `{{REVOCATION_RULE}}` | Revocation or suspension rule | Conditional |
| `{{INTENDED_CONSUMER}}` | Downstream consumer | Yes |

## 5. Produced Artifact Structure

```markdown
# {{TITLE}}

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Owner | {{OWNER}} |
| Certification Authority | {{CERTIFICATION_AUTHORITY}} |
| Certifier | {{CERTIFIER_IDENTITY}} |
| Valid From | {{VALID_FROM}} |
| Valid Until | {{VALID_UNTIL}} |
| Intended Consumer | {{INTENDED_CONSUMER}} |

## 1. Certification Subject

{{CERTIFICATION_SUBJECT}}

## 2. Bounded Scope

{{CERTIFICATION_SCOPE}}

## 3. Certification Criteria

{{CERTIFICATION_CRITERIA}}

## 4. Evidence Basis

{{EVIDENCE_SET}}

## 5. Evidence Provenance

{{EVIDENCE_PROVENANCE}}

## 6. Certification Claim Vocabulary

{{CLAIM_VOCABULARY}}

## 7. Certification Result

{{CERTIFICATION_RESULT}}

## 8. Limitations and Exclusions

{{LIMITATIONS}}

## 9. Unresolved Risks and Blockers

{{UNRESOLVED_RISKS}}

## 10. Validity, Suspension, and Revocation

{{REVOCATION_RULE}}

## 11. Non-Authority Statement

This certification applies only to the declared subject, scope, criteria, evidence, authority, and validity period. It does not approve, promote, canonicalize, release, authorize execution, or mutate product or Target-owned state.
```

## 6. Claim Semantics

The result vocabulary must be explicitly declared. Examples may include:

- certified;
- certified with limitations;
- not certified;
- suspended;
- expired;
- revoked;
- blocked;
- insufficient evidence;
- not applicable.

These labels apply only to the bounded certification claim.

## 7. Completeness Requirements

A produced certification artifact is complete only when:

- subject and scope are explicit;
- certification authority and certifier identity are declared;
- criteria and claim vocabulary have provenance;
- evidence and evidence provenance are recorded;
- result, limitations, exclusions, and unresolved risks are explicit;
- validity, expiry, suspension, or revocation semantics are resolved when applicable;
- intended consumer is declared;
- the artifact does not claim approval, promotion, release, execution, or mutation authority.

## 8. Safe Stop

Stop without producing a certification claim when any required subject, scope, authority, certifier identity, criteria, evidence, provenance, claim vocabulary, validity rule, limitation, or intended consumer is missing or ambiguous.

Do not infer certification from a passing validation, favorable review, merge, approval request, release request, or continuation intent.

## 9. Non-Authority Statement

This template is a reusable authoring structure only. It does not certify anything by itself and does not create certification authority.
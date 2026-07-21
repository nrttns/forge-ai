# A.5.7 — Review Engine RFC

> Engine Specialization · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-005.7` |
| Title | A.5.7 — Review Engine RFC |
| Version | `1.1.0-draft` |
| Status | Draft |
| Document Type | Engine Specialization RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1; A.2; A.3; A.4 and foundations; A.5.0 |
| Dependencies | A.5.0 and applicable review standards |
| Produces | Review findings and recommendation artifacts |
| Certification Status | Not certified |

## 1. Decision

The Review Engine performs reasoned assessment of artifacts, evidence, risks, and validation results against declared review objectives.

## 2. Exclusive Responsibility

It owns review-scope interpretation, issue and risk synthesis, competing-view representation, severity assessment, recommendation production, and typed `ReviewArtifact` output.

## 3. Explicit Non-Ownership

It does not own validation execution, certification verdicts, Human Governance approval, Target prioritization, remediation execution, or canonical promotion.

## 4. Inputs and Outputs

Inputs include review subjects, validation results, evidence, review criteria, and authority constraints. When a review subject is externally mutable, inputs also include its complete canonical review subject locator and complete canonical initial and final reviewed-subject revision identity evidence. Outputs include `ReviewArtifact`, `ReviewFinding`, `ReviewEscalation`, and trace references.

A review recommendation is not certification or approval.

## 5. Reviewed-Subject Revision Identity

A review subject is identified by a stable, provider-neutral **review subject locator** — a reference to the artifact or location under review, independent of any specific version-control system or hosting provider. The locator is complete and canonical only when it identifies exactly one review subject and its authoritative resolution path without truncation, inference, or ambiguity, and can be used again for deterministic final re-resolution.

Every review subject additionally carries an **immutable reviewed revision identity** — the exact, unambiguous state of that subject at the moment of assessment. A reviewed-subject revision identity is complete and canonical only when its full authoritative value is recorded without truncation, abbreviation, inference, or ambiguity. Revision identity is provider-neutral: it may be realized by whatever revision-tracking mechanism the reviewed subject's owning system provides — a document version, a snapshot identifier, or an equivalent construct. This RFC defines only the semantic requirement, not the mechanism.

The Review Engine shall:

1. require a complete canonical review subject locator before assessment begins;
2. deterministically resolve and record the complete canonical initial reviewed-subject revision identity through that locator before inspection begins;
3. bind the pending `ReviewArtifact` to that locator and exactly that one immutable initial reviewed-subject revision identity;
4. immediately before verdict issuance, deterministically re-resolve the same locator through its same authoritative resolution path and record the complete canonical final reviewed-subject revision identity;
5. treat any difference between the initial and final reviewed-subject revision identities as **identity drift**.

The reviewed-subject identity gate fails when the locator or either revision identity is missing, inaccessible, ambiguous, incomplete, or unresolvable; when final re-resolution cannot be performed deterministically through the same authoritative locator; or when identity drift occurs. Gate failure is a blocker, invalidates the pending `ReviewArtifact`, and prohibits a substantive verdict, including for a read-only review. The review must return a bounded blocking result or restart against complete, canonical identity evidence; it must not carry forward findings produced without a valid identity gate or against a superseded identity.

## 6. Invocation Contract

```text
Review request
    ↓
Complete canonical review subject locator and initial revision identity resolution
    ↓
Scope and evidence validation
    ↓
Finding and risk analysis
    ↓
Deterministic final revision identity re-resolution through the same authoritative locator
    ↓
Recommendation and dissent recording
    ↓
Review Artifact or escalation
```

## 7. Boundary Rules

Review may assess sibling artifacts but cannot redefine their architecture. Validation evidence remains distinct from review judgment. Unresolved high-impact findings require escalation.

## 8. Invariants

1. Findings cite evidence.
2. Severity and confidence are explicit.
3. Dissent and unresolved risks remain visible.
4. Review does not self-certify.
5. Target acceptance criteria remain Target-owned.
6. Provider identity does not determine verdict.
7. Forge AI assumptions are never inherited by external Targets.
8. Every `ReviewArtifact` binds to one complete canonical review subject locator and exactly one complete canonical immutable reviewed-subject revision identity, established before inspection and deterministically reconfirmed through the same authoritative locator before verdict; missing, inaccessible, ambiguous, incomplete, unresolvable, or drifted identity evidence invalidates the artifact and blocks a substantive verdict.

## 9. Conformance and Promotion

Conformance requires A.5.0 compliance, evidence-linked findings, validation/review separation, transparent uncertainty, Target independence, and provider neutrality. Promotion requires Framework Governance review and Human Governance approval.

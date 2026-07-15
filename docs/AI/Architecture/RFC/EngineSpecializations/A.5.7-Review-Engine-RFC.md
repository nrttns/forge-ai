# A.5.7 — Review Engine RFC

> Engine Specialization · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-005.7` |
| Title | A.5.7 — Review Engine RFC |
| Version | `1.0.0-draft` |
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

Inputs include review subjects, validation results, evidence, review criteria, and authority constraints. Outputs include `ReviewArtifact`, `ReviewFinding`, `ReviewEscalation`, and trace references.

A review recommendation is not certification or approval.

## 5. Invocation Contract

```text
Review request
    ↓
Scope and evidence validation
    ↓
Finding and risk analysis
    ↓
Recommendation and dissent recording
    ↓
Review Artifact or escalation
```

## 6. Boundary Rules

Review may assess sibling artifacts but cannot redefine their architecture. Validation evidence remains distinct from review judgment. Unresolved high-impact findings require escalation.

## 7. Invariants

1. Findings cite evidence.
2. Severity and confidence are explicit.
3. Dissent and unresolved risks remain visible.
4. Review does not self-certify.
5. Target acceptance criteria remain Target-owned.
6. Provider identity does not determine verdict.
7. Forge AI assumptions are never inherited by external Targets.

## 8. Conformance and Promotion

Conformance requires A.5.0 compliance, evidence-linked findings, validation/review separation, transparent uncertainty, Target independence, and provider neutrality. Promotion requires Framework Governance review and Human Governance approval.
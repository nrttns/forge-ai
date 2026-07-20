# Review Template

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-REVIEW-REVIEW` |
| Title | Review Template |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Review Template |
| Document Type | Template |
| Owner | AI-DOS Template Library |
| Last Updated | 2026-07-16 |
| Scope | Reusable structure for bounded review artifacts that evaluate a declared subject against explicit criteria and record evidence inputs, findings, objections, rationale, unresolved matters, and a non-authorizing recommendation. |
| Out of Scope | Validation execution, certification, approval, promotion, release, execution authorization, provider dispatch, Target-state mutation, or lifecycle transition. |
| Normative References | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/Review/README.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; STD-010 when applicable; declared subject authority. |

## 1. Purpose

Provide a reusable structure for evaluating a bounded subject under an explicitly declared review authority and criteria set.

This template structures review evidence and reasoning. It does not perform review automatically and does not create certification, approval, promotion, release, execution, or mutation authority.

## 2. Selection Preconditions

Use this template only when the review subject, scope, review authority, reviewers, criteria, evidence sources, result vocabulary, and intended consumer are explicit.

Do not use it as a validation report, certification record, approval decision, exception authorization, release record, or Target-state update.

## 3. Authority Boundary

A produced review artifact may consume declared evidence, evaluate it against declared criteria, record observations and objections, explain rationale, identify unresolved matters, and issue a bounded recommendation.

It must not invent evidence, criteria, reviewer authority, validation results, certification claims, approval decisions, lifecycle transitions, execution authorization, or Target-state mutation.

## 4. Required Produced-Artifact Metadata

A produced review artifact shall declare:

- identifier, title, lifecycle status, and owner;
- review authority and reviewers;
- reviewed subject and subject authority;
- scope and exclusions;
- review criteria and provenance;
- evidence inputs and provenance;
- result vocabulary and source;
- intended consumer;
- dependencies and relevant dates.

No default reviewer, approval authority, Target path, ProjectStatus, DevelopmentPhases, Roadmap, or repository-specific lifecycle is implied.

## 5. Placeholder Manifest

| Placeholder | Required | Meaning |
|:---|:---:|:---|
| `{{REVIEW_IDENTIFIER}}` | Yes | Unique review artifact identifier |
| `{{REVIEW_TITLE}}` | Yes | Review title |
| `{{REVIEW_STATUS}}` | Yes | Artifact lifecycle state |
| `{{OWNER}}` | Yes | Review artifact owner |
| `{{REVIEW_AUTHORITY}}` | Yes | Authority governing this review |
| `{{REVIEWERS}}` | Yes | Reviewers or reviewer roles |
| `{{REVIEW_SUBJECT}}` | Yes | Exact subject under review |
| `{{SUBJECT_AUTHORITY}}` | Yes | Owner of the reviewed subject |
| `{{REVIEW_SCOPE}}` | Yes | Bounded scope and exclusions |
| `{{REVIEW_CRITERIA}}` | Yes | Criteria and provenance |
| `{{EVIDENCE_INPUTS}}` | Yes | Evidence and provenance |
| `{{OBSERVATIONS}}` | Yes | Neutral observations |
| `{{FINDINGS}}` | Yes | Evidence-backed findings |
| `{{OBJECTIONS}}` | Yes | Objections or requested changes |
| `{{RATIONALE}}` | Yes | Reasoning supporting the result |
| `{{UNRESOLVED_MATTERS}}` | Yes | Open questions, gaps, and blockers |
| `{{RESULT}}` | Yes | Bounded review result |
| `{{RESULT_VOCABULARY}}` | Yes | Allowed labels and source |
| `{{RECOMMENDATION}}` | Yes | Non-authorizing recommendation |
| `{{INTENDED_CONSUMER}}` | Yes | Consumer of the review artifact |
| `{{RISKS}}` | Yes | Residual risks and uncertainty |

## 6. Template Body

```markdown
# {{REVIEW_TITLE}}

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{REVIEW_IDENTIFIER}}` |
| Status | {{REVIEW_STATUS}} |
| Owner | {{OWNER}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Reviewers | {{REVIEWERS}} |
| Reviewed Subject | {{REVIEW_SUBJECT}} |
| Subject Authority | {{SUBJECT_AUTHORITY}} |
| Review Scope | {{REVIEW_SCOPE}} |
| Review Criteria | {{REVIEW_CRITERIA}} |
| Evidence Inputs | {{EVIDENCE_INPUTS}} |
| Result Vocabulary | {{RESULT_VOCABULARY}} |
| Intended Consumer | {{INTENDED_CONSUMER}} |

## 1. Purpose

State why this review exists and what decision-support need it serves.

## 2. Scope and Exclusions

{{REVIEW_SCOPE}}

## 3. Review Authority and Criteria

{{REVIEW_AUTHORITY}}

{{REVIEW_CRITERIA}}

## 4. Evidence Inputs

{{EVIDENCE_INPUTS}}

## 5. Observations

{{OBSERVATIONS}}

## 6. Findings

{{FINDINGS}}

## 7. Objections or Requested Changes

{{OBJECTIONS}}

## 8. Rationale

{{RATIONALE}}

## 9. Unresolved Matters

{{UNRESOLVED_MATTERS}}

## 10. Review Result

{{RESULT}}

The result is bounded to this review scope and does not certify, approve, promote, canonicalize, release, execute, or mutate state.

## 11. Recommendation

{{RECOMMENDATION}}

The recommendation is non-authorizing and must be consumed by the applicable owning or governance authority.

## 12. Risks and Uncertainty

{{RISKS}}
```

## 7. Result Semantics

The result vocabulary must be supplied by the review authority. Common labels may include favorable, favorable with observations, changes requested, rejected for the reviewed scope, blocked, insufficient evidence, and not applicable.

These labels describe only the bounded review outcome.

## 8. Validation Requirements

A produced review artifact is complete only when subject, scope, owner, review authority, reviewers, criteria, evidence provenance, result vocabulary, intended consumer, uncertainty, and unresolved matters are explicit.

Validation artifacts must remain inputs rather than automatic review conclusions. Observations, findings, objections, rationale, result, and recommendation must remain distinct. No certification, approval, promotion, release, execution, or mutation authority may be claimed.

## 9. Safe Stop

Stop without producing a favorable result when authority or reviewer identity is missing, subject or scope is ambiguous, criteria or vocabulary lack provenance, evidence is missing or contradictory, protected information would be exposed, or the requested output would require certification, approval, promotion, release, execution, or Target-state mutation.

## 10. Non-Authority Statement

This template and artifacts produced from it do not certify, approve, promote, canonicalize, release, authorize execution, or mutate Target-owned state. Any such action requires a separate explicit authority and governed process.

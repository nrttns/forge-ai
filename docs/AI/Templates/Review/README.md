# Review Templates

This README is the navigation index for `docs/AI/Templates/Review/`.

The canonical Template Library contract is:

```text
docs/AI/Templates/TemplateLibrary.md
```

This README does not define review authority, validation authority, certification authority, approval authority, promotion authority, execution authority, or Target-state mutation.

## Start Here

```text
../TemplateLibrary.md
    ↓
../Standards/TPL-000-Template-Standard.md
    ↓
Review/README.md
    ↓
ReviewTemplate.md
```

Use STD-010 when a produced review artifact is governed Markdown and the applicable authority requires that metadata model.

## Family Purpose

The Review family provides reusable structures for evaluating a bounded subject against declared review criteria, recording findings and rationale, identifying unresolved concerns, and issuing a non-authorizing recommendation.

A Review template is an authoring structure only. It does not perform review by itself, validate evidence, certify a claim, approve an artifact, promote content, release a product, authorize execution, or mutate Target-owned state.

## Template Index

| Template | Intended output |
|:---|:---|
| `ReviewTemplate.md` | A bounded review artifact containing subject, authority, criteria, evidence inputs, observations, findings, objections, rationale, unresolved matters, result, risks, and a recommendation. |

## Selection Rules

1. Use this family only when the invocation or applicable authority explicitly requests a review artifact.
2. Identify the review subject, scope, review authority, criteria, evidence inputs, result vocabulary, and intended consumer before selecting the template.
3. Treat validation artifacts as inputs when supplied; do not convert validation results into review conclusions automatically.
4. Separate observations, findings, objections, rationale, recommendation, and unresolved matters.
5. Do not translate a favorable review into certification, approval, promotion, release, execution authorization, or Target-state mutation.
6. Resolve all placeholders and provenance references before treating a produced artifact as complete.
7. Validate the produced artifact against TPL-000, STD-010 when applicable, and the authority governing the review subject.

## Authority Boundary

The Review family owns reusable review-artifact structure only.

It does not own:

- the truth of the reviewed subject;
- validation rules, validation execution, or validation results;
- certification claims or certification authority;
- approval, rejection, promotion, canonicalization, release, or exception authority;
- task planning, workflow routing, command selection, execution contracts, provider dispatch, or mutation;
- ProjectStatus, DevelopmentPhases, Roadmap, lifecycle, registry, runtime, engine, memory, workflow, evidence-store, or protected-area ownership.

A produced review artifact gains authority only through its declared owner, reviewer authority, provenance, applicable criteria, lifecycle, and explicit governance route.

## Review Result Semantics

A review artifact may record results such as:

- favorable;
- favorable with observations;
- changes requested;
- rejected for the reviewed scope;
- blocked;
- insufficient evidence;
- not applicable.

These labels describe the bounded review outcome only. They do not imply certification, approval, promotion, canonicalization, release, execution authorization, or completion.

## Validation, Review, Certification, and Approval Separation

```text
Validation
    evidence and findings

Review
    evaluation, rationale, objections, and recommendation

Certification
    formal claim under certification authority

Approval
    explicit governance decision
```

One artifact may consume another, but no authority is inherited automatically.

## Target Independence

No Forge AI path, ProjectStatus path, DevelopmentPhases path, Roadmap path, self-hosting convention, fixed reviewer, fixed approval authority, or repository-specific lifecycle is required by this family.

Target-owned review inputs may be consumed only when explicitly supplied for the bounded review subject.

## Safe Stop

Stop template selection when any required subject, scope, review authority, reviewer identity, criteria, evidence source, provenance, result vocabulary, protected boundary, or intended consumer is missing or ambiguous.

Do not invent review criteria or treat missing evidence as favorable review evidence.

## Family Validation Checklist

- [ ] `TemplateLibrary.md` and TPL-000 were consulted.
- [ ] The review subject and scope are explicit.
- [ ] Review authority, reviewers, criteria, evidence sources, and provenance are declared.
- [ ] Validation findings are treated as inputs rather than automatic review conclusions.
- [ ] Findings, objections, rationale, recommendation, and unresolved matters are separated.
- [ ] Review does not claim certification, approval, promotion, release, execution, or mutation authority.
- [ ] No Forge AI or Target-specific path is required by default.
- [ ] Missing evidence and ambiguity trigger safe stop.

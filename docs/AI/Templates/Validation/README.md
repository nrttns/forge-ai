# Validation Templates

This README is the navigation index for `docs/AI/Templates/Validation/`.

The canonical Template Library contract is:

```text
docs/AI/Templates/TemplateLibrary.md
```

This README does not define validation authority, review authority, certification authority, approval authority, quality-gate ownership, execution authority, promotion authority, or Target-state mutation.

## Start Here

```text
../TemplateLibrary.md
    ↓
../Standards/TPL-000-Template-Standard.md
    ↓
Validation/README.md
    ↓
ValidationTemplate.md
```

Use STD-010 when the produced validation artifact is governed Markdown and the applicable authority requires that metadata model.

## Family Purpose

The Validation family provides reusable structures for recording a bounded validation subject, declared inputs and rules, evidence, findings, risks, blockers, and recommended next action.

A validation template is an authoring structure only. It does not perform validation, determine truth by itself, approve an artifact, certify completion, promote content, release a product, authorize execution, or mutate Target-owned state.

## Template Index

| Template | Intended output |
|:---|:---|
| `ValidationTemplate.md` | A bounded validation report containing subject, authority inputs, evidence, findings, risks, blockers, and a recommendation. |

No separate review or certification template is declared by this family entry. Review and certification are distinct authority domains and must not be inferred from validation output.

## Selection Rules

1. Use this family only when the invocation or applicable authority explicitly requests a validation artifact.
2. Identify the exact validation subject, scope, owner, rules, evidence sources, and expected output before applying the template.
3. Treat validation rules and quality gates as supplied authority inputs; do not invent them from the template.
4. Report evidence and findings separately from recommendations.
5. Do not translate a passing result into approval, certification, promotion, release, or Target-state mutation.
6. Resolve all placeholders and provenance references before treating a produced artifact as complete.
7. Validate the produced artifact against TPL-000, STD-010 when applicable, and the authority governing the validation subject.

## Authority Boundary

The Validation family owns reusable report structure only.

It does not own:

- the truth of the validation subject;
- product or Target source of truth;
- validation rules, acceptance criteria, or quality gates unless explicitly supplied by an owning authority;
- review, certification, approval, promotion, canonicalization, release, or exception authority;
- task planning, workflow routing, command selection, execution contracts, provider dispatch, or mutation;
- ProjectStatus, DevelopmentPhases, Roadmap, lifecycle, registry, runtime, engine, memory, workflow, evidence-store, or protected-area ownership.

A produced validation artifact gains authority only through its declared owner, provenance, applicable rules, lifecycle, and explicit governance route.

## Result Semantics

Validation results may state:

- pass;
- pass with observations;
- fail;
- blocked;
- insufficient evidence;
- not applicable.

These result labels describe the bounded validation outcome only. They do not imply review acceptance, certification, approval, promotion, canonicalization, release, or completion.

## Validation, Review, and Certification Separation

```text
Validation
    evidence and findings

Review
    evaluation and recommendation under review authority

Certification
    formal claim under certification authority

Approval
    explicit governance decision
```

One artifact may be consumed by another domain, but no domain inherits the authority of another automatically.

## Target Independence

No Forge AI path, ProjectStatus path, DevelopmentPhases path, Roadmap path, self-hosting convention, fixed review authority, fixed approval authority, or repository-specific validation lifecycle is required by this family.

Target-owned validation inputs may be consumed only when explicitly supplied for the bounded validation subject.

## Safe Stop

Stop template use when any required subject, scope, owner, rule source, evidence source, acceptance criterion, provenance, protected boundary, or output authority is missing or ambiguous.

Do not invent validation rules or treat missing evidence as a pass.

## Family Validation Checklist

- [ ] `TemplateLibrary.md` and TPL-000 were consulted.
- [ ] The validation subject and scope are explicit.
- [ ] Validation rules and evidence sources have declared provenance.
- [ ] Findings are separated from recommendations.
- [ ] Validation does not claim review, certification, approval, promotion, release, or mutation authority.
- [ ] No Forge AI or Target-specific path is required by default.
- [ ] Missing evidence and ambiguity trigger safe stop.

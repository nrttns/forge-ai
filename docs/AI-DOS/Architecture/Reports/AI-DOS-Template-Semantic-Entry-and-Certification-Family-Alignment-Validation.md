# AI-DOS Template Semantic Entry and Certification Family Alignment Validation

## Scope

This validation covers the Template Library entry convention and the Certification family entry.

## Changes Validated

- `Templates/README.md` replaced by `Templates/TemplateIndex.md`.
- `Planning/README.md` replaced by `Planning/PlanningFamily.md`.
- `Validation/README.md` replaced by `Validation/ValidationFamily.md`.
- `Review/README.md` replaced by `Review/ReviewFamily.md`.
- `Certification/CertificationFamily.md` added.
- `TemplateLibrary.md` rebased to own the semantic entry convention.
- `docs/AI-DOS/README.md` updated to route to `Templates/TemplateIndex.md`.

## Convention

```text
Library index     → TemplateIndex.md
Family entry      → <FamilyName>Family.md
Component         → <ArtifactName>Template.md
```

`README.md` is not a valid Template Library, family, authority, contract, or navigation entry document.

## Authority Validation

Certification is defined as a formal bounded claim under declared certification authority. It is not validation, review, approval, promotion, canonicalization, release, execution authorization, or Target-state mutation.

Validation findings and review artifacts may be evidence inputs but cannot automatically establish a certification claim.

## Purity Validation

- no Forge AI path is required;
- no ProjectStatus, DevelopmentPhases, or Roadmap path is required;
- no fixed certifier or approval authority is assumed;
- no repository-specific lifecycle is imposed;
- no component is falsely declared aligned;
- `CertificationTemplate.md` remains deferred to a separate bounded change.

## Verdict

```text
TEMPLATE SEMANTIC ENTRY CONVENTION ALIGNED
CERTIFICATION TEMPLATE FAMILY ENTRY ALIGNED
CERTIFICATION TEMPLATE COMPONENT DEFERRED
READY FOR HUMAN GOVERNANCE REVIEW
```

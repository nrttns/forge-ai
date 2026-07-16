# AI-DOS Template Library

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.LIBRARY` |
| Version | `1.3.0-draft` |
| Status | Draft — TPL-000 Rebase Review Pending |
| Classification | AI-DOS Template Library Contract |
| Owner | AI-DOS Template Library |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-16 |
| Scope | Reusable template authority, semantic entry convention, family model, selection, produced-artifact semantics, lifecycle, validation, integrity gating, and safe stop. |
| Out of Scope | Human Governance decisions, architecture authority, execution, workflow routing, Target planning/state, approval, certification decisions, promotion, release, and generated-artifact canonicalization. |

## 1. Purpose

The Template Library provides reusable, provider-neutral document structures for AI-DOS and authorized Target Projects. It separates authoring structure from owning-domain authority.

## 2. Entry Convention

Template Library navigation uses semantic filenames:

- library index: `TemplateIndex.md`;
- family entry: `<FamilyName>/<FamilyName>Family.md`;
- component template: `<ArtifactName>Template.md`.

`README.md` must not be used as a Template Library, family, authority, contract, or navigation entry document.

## 3. Authority

The library may define reusable structure, required sections, placeholders, authoring guidance, family classification, selection constraints, produced-artifact semantics, lifecycle guidance, compatibility constraints, and template conformance checks.

It does not own or create task planning, workflow routing, command selection, execution authorization, provider dispatch, Target state, review decisions, certification decisions, approval, promotion, canonicalization, or release.

## 4. Canonical Selection Model

```text
Authorized Artifact Purpose
    ↓
Owning Domain Resolution
    ↓
TemplateIndex.md
    ↓
Applicable <FamilyName>Family.md
    ↓
Narrowest Matching Template
    ↓
Bounded Template Instance
    ↓
Return to Owning Domain
```

Template selection is not authority resolution or state mutation.

## 5. Produced-Artifact Semantics

Every produced artifact must distinguish its owner, provenance, lifecycle, review route, approval route, and authority status. Generation does not equal approval. Validation does not equal certification. Review does not equal promotion. Merge does not equal canonicalization.

## 6. Target Independence

The library must not require Forge AI paths, ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, capability, self-hosting conventions, or Target-specific lifecycle models unless explicitly supplied for a bounded Target-owned artifact.

## 7. Extension Rules

A new family or template requires a proven gap, one semantic owner, declared purpose, explicit authority boundary, applicable TPL-000 conformance after the active rebase gate is accepted, metadata conformance when applicable, no Target-specific defaults, and explicit task authority.

## 8. Integrity Gate

The TPL-000 material rebase is implemented in version `0.2.0-draft` and is pending Human Governance review.

The normalized family contracts and components may continue to be used only within their declared bounded scopes.

Repository-wide Template Library certification and freeze remain blocked until the rebased `Standards/TPL-000-Template-Standard.md` is reviewed and accepted. Until acceptance:

- `TemplateLibrary.md` remains the library-level authority boundary;
- normalized family contracts remain the narrow family boundaries;
- rebased TPL-000 is a review candidate, not certification evidence;
- no artifact may claim the whole Template Library is aligned, certified, frozen, or ready for promotion.

This is a temporary acceptance gate, not a dual-authority model.

## 9. Safe Stop

Stop when purpose, owner, family, authority, lifecycle, provenance, protected boundary, applicable standard, Target-provided input, or TPL-000 compatibility is missing, conflicting, or ambiguous.

## 10. Validation

Validate at minimum:

- semantic entry filenames and valid navigation;
- one clear family and purpose;
- no duplicate semantic owner;
- current Template Library contract conformance;
- applicable TPL-000 and metadata conformance;
- bounded placeholder resolution;
- correct ownership and lifecycle classification;
- no execution, planning, state, approval, certification-decision, promotion, persistence, or release contamination;
- no obsolete README entry path or Forge AI fallback.

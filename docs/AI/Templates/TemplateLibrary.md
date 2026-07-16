# AI-DOS Template Library

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.LIBRARY` |
| Version | `1.1.0-draft` |
| Status | Draft |
| Classification | AI-DOS Template Library Contract |
| Owner | AI-DOS Template Library |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-16 |
| Scope | Reusable template authority, semantic entry convention, family model, selection, produced-artifact semantics, lifecycle, validation, and safe stop. |
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

A new family or template requires a proven gap, one semantic owner, declared purpose, explicit authority boundary, TPL-000 conformance, metadata conformance when applicable, no Target-specific defaults, and explicit task authority.

## 8. Safe Stop

Stop when purpose, owner, family, authority, lifecycle, provenance, protected boundary, applicable standard, or Target-provided input is missing, conflicting, or ambiguous.

## 9. Validation

Validate at minimum:

- semantic entry filenames and valid navigation;
- one clear family and purpose;
- no duplicate semantic owner;
- TPL-000 and applicable metadata conformance;
- bounded placeholder resolution;
- correct ownership and lifecycle classification;
- no execution, planning, state, approval, certification-decision, promotion, or release contamination;
- no obsolete README entry path or Forge AI fallback.

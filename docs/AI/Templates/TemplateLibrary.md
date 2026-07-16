# AI-DOS Template Library

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.LIBRARY` |
| Version | `1.2.0-draft` |
| Status | Draft — Integrity Gate Active |
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

A new family or template requires a proven gap, one semantic owner, declared purpose, explicit authority boundary, TPL-000 conformance after the active TPL-000 rebase gate is closed, metadata conformance when applicable, no Target-specific defaults, and explicit task authority.

## 8. Integrity Gate

The normalized family contracts and components may be used only within their declared bounded scopes.

Repository-wide Template Library certification is blocked until `Standards/TPL-000-Template-Standard.md` is materially rebased to:

- remove Forge AI planning and Target-state dependencies;
- align ownership and approval semantics with current Governance;
- adopt the semantic entry convention;
- remove duplicate metadata, taxonomy, lifecycle, package, registry, and capability definitions;
- separate template structure from validation, review, certification, approval, promotion, persistence, execution, and Target-state authority;
- reconcile TPL-000 with `TemplateLibrary.md`, `TemplateIndex.md`, and the normalized family contracts.

Until that rebase is accepted, TPL-000 remains a required legacy standard under correction, not proof that the whole library is aligned or certified.

## 9. Safe Stop

Stop when purpose, owner, family, authority, lifecycle, provenance, protected boundary, applicable standard, Target-provided input, or TPL-000 compatibility is missing, conflicting, or ambiguous.

## 10. Validation

Validate at minimum:

- semantic entry filenames and valid navigation;
- one clear family and purpose;
- no duplicate semantic owner;
- current Template Library contract conformance;
- TPL-000 compatibility or an explicit integrity-gate exception;
- applicable metadata conformance;
- bounded placeholder resolution;
- correct ownership and lifecycle classification;
- no execution, planning, state, approval, certification-decision, promotion, persistence, or release contamination;
- no obsolete README entry path or Forge AI fallback.

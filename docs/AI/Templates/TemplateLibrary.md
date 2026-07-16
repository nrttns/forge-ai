# AI-DOS Template Library

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.LIBRARY` |
| Version | `1.4.2-draft` |
| Status | Draft — TPL-000 and TPL-001 Rebases Accepted; Integrity Gate Closed |
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

A new family or template requires a proven gap, one semantic owner, declared purpose, explicit authority boundary, applicable TPL-000 conformance, metadata conformance when applicable, no Target-specific defaults, and explicit task authority.

## 8. Integrity Status

Human Governance reviewed and accepted the bounded TPL-000 material rebase through Forge AI PR #208. Human Governance reviewed and accepted the bounded TPL-001 RFC authoring rebase through Forge AI PR #211.

The temporary TPL-000 integrity gate is closed. TPL-001 acceptance does not normalize the Architecture family or activate its reconciled RFC catalog component as a normalized family component.

The accepted authority position is:

- `TemplateLibrary.md` owns the library-level authority boundary and semantic entry convention;
- TPL-000 owns shared bounded authoring constraints;
- normalized family contracts own their narrow family structure and non-authority rules;
- component templates own only their declared reusable structure;
- produced artifacts return to their owning domains.

The normalized family contracts and components may be used only within their declared bounded scopes.

Gate closure does not certify or freeze the whole Template Library. Unnormalized catalog families remain outside normalized-family status, and no repository-wide certification or promotion claim is created.

The current verified catalog inventory and disposition is recorded in `docs/AI/Architecture/Reports/AI-DOS-Template-Library-Filesystem-Inventory-and-Disposition.md`. Catalog presence does not imply normalized-family or active-component status.

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

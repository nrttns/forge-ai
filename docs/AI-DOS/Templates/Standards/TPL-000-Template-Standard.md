# TPL-000 — Template Authoring Standard

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-000` |
| Title | TPL-000 — Template Authoring Standard |
| Version | `0.2.1-draft` |
| Status | Draft — Material Rebase Accepted |
| Canonical Status | Non-canonical; material rebase accepted by Human Governance |
| Classification | AI-DOS Template Standard |
| Document Type | Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | Template Authoring Standard |
| Owner | AI-DOS Template Library |
| Maintainers | AI-DOS Template Library |
| Review Authority | Human Governance |
| Approval Authority | Human Governance |
| Normative Authority | Human Governance; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Templates/TemplateLibrary.md` |
| Created | 2026-07-09 |
| Last Updated | 2026-07-16 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS.V3.TPL-000` |
| Scope | Provider-neutral authoring requirements for reusable AI-DOS template families, components, placeholders, bounded instantiation, and structural conformance. |
| Out of Scope | Target planning or state; workflow routing; execution; persistence; registry implementation; validation ownership; review or certification decisions; approval; promotion; canonicalization; release. |
| Normative References | `docs/AI-DOS/Templates/TemplateLibrary.md`; `docs/AI-DOS/Templates/TemplateIndex.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Consumes | Template Library authority boundary and semantic entry convention; applicable STD-010 metadata field requirements; narrower normalized family contracts. |
| Produces | Template authoring constraints, component structure rules, placeholder rules, bounded instantiation rules, structural conformance checks, and safe-stop requirements. |
| Depends On | Human Governance; AI-DOS Template Library; applicable semantic owners supplied by the invoking context. |
| Supersedes | TPL-000 `0.1.0-draft` legacy model |
| Superseded By | None |
| Validation Profile | TPL-000 structural conformance profile; STD-010 metadata conformance when applicable |
| Validation Status | Material rebase validation completed and accepted within its declared scope |
| Review Status | Human Governance Accepted |
| Certification Status | Not certified |
| Compatibility Declaration | Breaking material rebase of the legacy Framework-era TPL-000 model |
| Compatibility Classification | Breaking for consumers that depend on legacy directory, package, registry, lifecycle, approval, certification, or inheritance assumptions |
| Migration Obligation | Consumers must resolve through `TemplateLibrary.md`, `TemplateIndex.md`, and the applicable semantic family contract; legacy assumptions are not retained as authority. |
| Evidence References | `docs/AI-DOS/Architecture/Reports/AI-DOS-TPL-000-Material-Rebase-Validation.md`; Forge AI PR #208 |

## 1. Purpose

TPL-000 defines reusable authoring rules for AI-DOS templates. It keeps document structure separate from the authority that owns the produced artifact.

A template may help an authorized consumer create a bounded artifact. It does not authorize the artifact, make its content true, approve it, certify it, promote it, persist it, execute it, release it, or mutate product or Target state.

## 2. Authority Position

The canonical Template Library boundary is defined by `TemplateLibrary.md`. Navigation and family discovery are defined by `TemplateIndex.md`. The applicable `<FamilyName>Family.md` owns the narrow family boundary. TPL-000 supplies shared authoring constraints beneath those boundaries.

The resolution order is:

```text
Authorized Artifact Purpose
    ↓
Owning Domain and Authority
    ↓
TemplateLibrary.md
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

TPL-000 is not a root governance authority and must not override Human Governance, the Constitution, Governance, Meta, STD-010, the library contract, an applicable family contract, or the owning domain of a produced artifact.

## 3. Scope

TPL-000 owns shared rules for:

- semantic template roles and entry naming;
- reusable structural sections and authoring guidance;
- placeholder declaration, typing, defaults, and resolution;
- template component identity and version declaration;
- bounded composition and specialization;
- template-instance provenance;
- structural and placeholder conformance checks;
- compatibility declarations for template changes;
- Target independence and safe stop.

## 4. Protected Boundaries

TPL-000 does not own or define:

- Human Governance decisions or delegated authority;
- Target vision, Roadmap, DevelopmentPhases, ProjectStatus, work selection, or state;
- Runtime, Engine, System Layer, Context Assembly, provider, or execution behavior;
- executable workflow routing or command selection;
- factual truth, source-of-truth classification, knowledge authority, or memory persistence;
- validation criteria owned by another domain;
- review, certification, approval, promotion, canonicalization, availability, release, or retirement decisions;
- a repository registry, package manager, resolver, database, CLI, API, or hosted service;
- universal lifecycle states, compliance levels, approval bodies, or release gates.

Structure must never be interpreted as authority.

## 5. Template Model

### 5.1 Library Contract

`TemplateLibrary.md` defines the reusable library boundary, selection model, produced-artifact semantics, extension constraints, and integrity status.

### 5.2 Semantic Index

`TemplateIndex.md` routes consumers to normalized families. It is navigation, not task planning or authority resolution.

### 5.3 Family Contract

`<FamilyName>Family.md` declares a family purpose, component inventory, required inputs, authority boundary, Target-independence rules, and safe-stop conditions.

### 5.4 Component Template

`<ArtifactName>Template.md` defines the narrowest reusable structure for one artifact purpose. A component must remain inside its family contract.

### 5.5 Template Instance

A template instance is a bounded artifact produced for a declared purpose and returned to its owning domain. Its authority, lifecycle, evidence, approval, and state are determined outside the template.

## 6. Semantic Entry Convention

Template Library navigation uses:

- library contract: `TemplateLibrary.md`;
- library index: `TemplateIndex.md`;
- family entry: `<FamilyName>/<FamilyName>Family.md`;
- component template: `<FamilyName>/<ArtifactName>Template.md`.

`README.md` may provide informal directory notes, but it must not be required or treated as a library, family, authority, contract, registry, or navigation entry.

Numeric identifiers may be retained for standards such as TPL-000. They are not required for family contracts or component templates unless an applicable identity authority requires them.

## 7. Target Independence

Reusable templates must not require:

- Forge AI paths or identity;
- ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, sprint, or capability state;
- self-hosting conventions;
- repository-specific branches, commands, providers, workflows, or release processes;
- fixed reviewers, boards, maintainers, certifiers, or approval authorities;
- fixed storage, registry, persistence, or execution mechanisms.

A Target-owned value may appear only when the active invocation explicitly supplies it for a bounded Target-owned artifact. That value does not become an AI-DOS default.

## 8. Required Family Contract Content

A normalized family contract must declare at minimum:

- purpose and bounded scope;
- active component inventory;
- required inputs or selection constraints;
- owned structural responsibility;
- explicit non-authority boundaries;
- Target-independence rules;
- safe-stop conditions.

Families are peers unless a separate authorized architecture explicitly defines a relationship. Directory nesting or naming does not create an authority hierarchy.

## 9. Required Component Content

A component template must provide only the sections needed for its declared artifact purpose. It must:

- identify its family contract;
- distinguish instructions from produced content;
- declare required and optional placeholders;
- identify the owning domain inputs it cannot invent;
- preserve provenance and unresolved matters where applicable;
- include a completion or conformance check appropriate to its structure;
- avoid status language that could imply an unauthorized decision.

## 10. Placeholder Rules

### 10.1 Declaration

Every placeholder must have:

- a unique semantic name;
- a declared purpose;
- a required or optional classification;
- a value source;
- a type or constraint when validation needs one;
- an explicit default only when the default is authority-neutral.

### 10.2 Syntax

Templates should use `{{UPPER_SNAKE_CASE}}` for machine-resolvable placeholders. Human-only authoring prompts may use clearly marked guidance when the component does not claim automated generation compatibility.

### 10.3 Resolution

Resolution follows the declared component contract. A supplied value may override an authority-neutral default, but no value may override an authority, provenance, protected boundary, or owning-domain decision.

Unresolved required placeholders block completion. Optional placeholders may be omitted only when omission does not change meaning, authority, or required evidence.

### 10.4 Prohibited Defaults

Templates must not default:

- approval, certification, canonical, promotion, release, or completion status;
- reviewer, approver, certifier, owner, or authority identity;
- Target state or planning position;
- factual truth, validation result, confidence, or evidence sufficiency;
- persistence, execution, availability, or compatibility claims.

## 11. Metadata Responsibilities

Template metadata describes the template artifact. Produced-artifact metadata describes the instantiated artifact. They must not be conflated or automatically inherited.

When STD-010 applies:

- the template must use the applicable STD-010 field profile;
- metadata fields must retain their semantic owners;
- required produced-artifact values must be supplied by the owning context;
- template ownership, review routes, statuses, or references must not automatically flow into the produced artifact;
- validation, review, certification, promotion, and canonical status must remain distinct;
- generation and merge do not create authority.

Template-specific implementation data belongs in a clearly bounded manifest or authoring section, not as invented STD-010 semantic fields.

## 12. Composition and Specialization

Composition and specialization are permitted only to reuse structure. They must not create an authority hierarchy.

A component may reuse another component when:

- the reused structure has a compatible purpose;
- the applicable family boundaries do not conflict;
- ownership and provenance remain explicit;
- no mandatory authority or status is inherited;
- no circular dependency is introduced;
- the resulting structure remains understandable without hidden resolution behavior.

Composition must not duplicate metadata blocks, evidence claims, decisions, or semantic owners. Specialization may narrow or add structure, but it must not widen authority.

## 13. Selection and Instantiation

Before selecting a template, resolve:

1. the authorized artifact purpose;
2. the owning domain and intended consumer;
3. the applicable family contract;
4. the narrowest matching component;
5. required sources, provenance, criteria, and protected boundaries;
6. the authority responsible for all non-structural decisions.

Instantiation must stop if these inputs are missing or conflicting. Selecting a template does not select work, commands, providers, or lifecycle transitions.

## 14. Lifecycle and Status

TPL-000 may require a template artifact to declare its lifecycle and review posture through applicable metadata. It does not define a universal lifecycle or transition authority.

The lifecycle of a template, the lifecycle of a produced artifact, and Target operational state are separate dimensions. No state may be inferred from another.

Draft, reviewed, validated, certified, approved, canonical, released, deprecated, or retired labels may be used only when their owning authority, criteria, and evidence are resolved.

## 15. Validation and Conformance

TPL-000 owns structural conformance checks only:

- semantic entry and component naming are valid;
- one family and purpose are clear;
- required sections and placeholders are present;
- no required placeholder remains unresolved in a completed instance;
- template and produced-artifact metadata are separated;
- composition has no structural conflict or cycle;
- no Target-specific default or forbidden authority inheritance exists;
- referenced paths and governing contracts resolve;
- safe-stop conditions are explicit.

Structural conformance does not validate subject-matter truth, approve content, certify fitness, promote status, authorize execution, or mutate state. Those results require their own authorities and evidence.

## 16. Versioning and Compatibility

Material template changes must declare a version and compatibility impact. A change is breaking when it removes or changes required structure, placeholder meaning, family selection behavior, or consumer obligations.

Compatibility claims must identify affected consumers and any migration obligation. Existing produced artifacts do not change authority or lifecycle merely because their source template changes.

## 17. Extension Rules

A new family, component, placeholder convention, or structural mechanism requires:

- a proven reusable gap;
- one semantic owner;
- a bounded purpose;
- explicit non-authority boundaries;
- no duplicate family or semantic owner;
- no Target-specific default;
- compatibility and migration assessment;
- navigation updates when accepted;
- Human Governance review when authority or protected boundaries are affected.

An extension must not introduce a hidden registry, package, workflow, execution, persistence, approval, certification, or Target-state system.

## 18. Legacy Consumption and Migration

Legacy TPL-000 `0.1.0-draft` assumptions are not retained as active authority. Consumers must remove dependencies on:

- Framework-era owners, boards, and approval chains;
- mandatory README indexes;
- universal document-class or Target-planning taxonomies;
- template-owned registry and package models;
- fixed lifecycle, compliance-level, review, certification, and canonical-promotion models;
- automatic inheritance of authority or metadata;
- repeated resolution, override, validation, and capability rules.

Migration must preserve useful reusable structure only after it passes the current library, family, Target-independence, authority, and safe-stop boundaries.

## 19. Safe Stop

Stop and return the unresolved matter to the owning authority when any of the following is missing, conflicting, stale, or ambiguous:

- artifact purpose, owner, family, or intended consumer;
- authority, provenance, criteria, evidence, or lifecycle source;
- applicable library, family, metadata, or domain contract;
- protected boundary or Target-supplied input;
- compatibility or migration obligation;
- placeholder source or meaning;
- structural ownership or duplicate-authority determination.

Do not invent a value to bypass safe stop.

## 20. Conformance Checklist

- [ ] The authorized artifact purpose and owning domain are explicit.
- [ ] `TemplateLibrary.md` and `TemplateIndex.md` were consulted.
- [ ] The applicable semantic family contract was selected.
- [ ] The narrowest matching component was used.
- [ ] Required placeholders, sources, and provenance are resolved.
- [ ] Template metadata and produced-artifact metadata are separate.
- [ ] No authority, status, truth, persistence, execution, or Target state is inferred.
- [ ] No Forge AI or Target-specific default is required.
- [ ] Composition or specialization remains structural and acyclic.
- [ ] Applicable STD-010 requirements are satisfied without redefining semantic owners.
- [ ] Compatibility and migration obligations are declared when triggered.
- [ ] Missing or conflicting inputs trigger safe stop.

## 21. Acceptance Position

Human Governance reviewed and accepted the bounded material rebase through Forge AI PR #208. Acceptance applies to the TPL-000 authoring boundary defined in this document.

Acceptance does not certify or freeze the whole Template Library and does not approve, promote, release, execute, persist, or mutate any AI-DOS or Target artifact.

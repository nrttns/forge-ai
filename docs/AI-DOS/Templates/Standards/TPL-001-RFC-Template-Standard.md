# TPL-001 — RFC Template Authoring Standard

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-001` |
| Title | TPL-001 — RFC Template Authoring Standard |
| Version | `0.2.1-draft` |
| Status | Draft — Material Rebase Accepted |
| Canonical Status | Non-canonical; material rebase accepted by Human Governance |
| Classification | AI-DOS RFC Template Standard |
| Document Type | Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | RFC Template Authoring Standard |
| Owner | AI-DOS Template Library |
| Maintainers | AI-DOS Template Library |
| Review Authority | Human Governance |
| Approval Authority | Human Governance |
| Normative Authority | Human Governance; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Templates/TemplateLibrary.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md` |
| Created | 2026-07-09 |
| Last Updated | 2026-07-16 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS.V3.TPL-001` |
| Scope | Provider-neutral structural authoring requirements for reusable RFC templates and bounded RFC document instances. |
| Out of Scope | Architecture decisions; RFC content authority; universal RFC taxonomy or lifecycle; review, approval, certification, promotion, canonicalization, implementation, execution, persistence, release, or Target-state mutation. |
| Normative References | `docs/AI-DOS/Templates/TemplateLibrary.md`; `docs/AI-DOS/Templates/TemplateIndex.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Consumes | Accepted TPL-000 authoring boundaries; applicable STD-010 metadata requirements; owning architecture or domain authority supplied for each RFC. |
| Produces | RFC template structural profile, RFC section semantics, specialization constraints, structural conformance checks, compatibility obligations, and safe-stop requirements. |
| Depends On | Human Governance; AI-DOS Template Library; TPL-000; applicable metadata and owning-domain authorities. |
| Supersedes | TPL-001 `0.1.0-draft` legacy model |
| Superseded By | None |
| Validation Profile | TPL-001 RFC structural conformance profile; TPL-000 and STD-010 conformance when applicable |
| Validation Status | Material rebase validation completed and accepted within its declared scope |
| Review Status | Human Governance Accepted |
| Certification Status | Not certified |
| Compatibility Declaration | Breaking material rebase of the legacy Framework-era TPL-001 model |
| Compatibility Classification | Breaking for consumers that depend on legacy RFC taxonomy, lifecycle, approval, certification, promotion, compliance, or inheritance rules |
| Migration Obligation | RFC templates must adopt the bounded structural profile without inheriting authority or Target planning state. Existing RFC documents are not automatically invalidated. |
| Evidence References | `docs/AI-DOS/Architecture/Reports/AI-DOS-TPL-001-Material-Rebase-Validation.md`; Forge AI PR #211 |

## 1. Purpose

TPL-001 defines shared authoring constraints for reusable RFC templates. It provides a predictable RFC document structure while preserving the authority of the domain that owns the RFC subject.

An RFC template structures a proposal or decision record. It does not make the proposal correct, accepted, approved, canonical, implemented, available, or released.

## 2. Authority Position

TPL-001 operates beneath:

- Human Governance and the Constitution;
- `TemplateLibrary.md`;
- accepted TPL-000 authoring constraints;
- applicable STD-010 metadata requirements;
- the architecture or domain authority that owns the RFC subject.

The resolution order is:

```text
Authorized RFC Purpose
    ↓
Owning Domain and Authority
    ↓
TemplateLibrary.md
    ↓
TPL-000
    ↓
TPL-001 when an RFC artifact is required
    ↓
Applicable semantic family contract
    ↓
Narrowest RFC component template
    ↓
Bounded RFC instance
    ↓
Return to owning domain
```

TPL-001 owns RFC authoring structure only. It must not override an RFC's owning architecture, the applicable family contract, Governance, Meta, Runtime, Engine, System Layer, or Target authority.

## 3. Scope

TPL-001 owns:

- the minimum reusable RFC section profile;
- RFC-specific placeholder and metadata application constraints;
- RFC template specialization rules;
- structural conformance checks;
- compatibility and migration disclosure requirements;
- open-question and decision-status separation;
- Target independence and safe stop.

## 4. Protected Boundaries

TPL-001 does not own or define:

- the architectural substance or correctness of an RFC;
- a universal RFC taxonomy, domain catalog, numbering scheme, or directory hierarchy;
- RFC review, approval, certification, promotion, canonicalization, adoption, or release decisions;
- a universal RFC lifecycle or mandatory transition sequence;
- implementation planning, work selection, command routing, provider dispatch, or execution;
- Runtime, Engine, System Layer, Context, Knowledge, Memory, Registry, Workflow, or Target behavior;
- ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, capability, or self-hosting state;
- fixed owners, maintainers, reviewers, boards, certifiers, or approval authorities;
- tooling, schemas, registries, packages, storage, or persistence.

RFC structure must never be interpreted as architectural or governance authority.

## 5. RFC Artifact Model

### 5.1 RFC Template Standard

TPL-001 supplies shared structural constraints for templates that produce RFC documents.

### 5.2 RFC Component Template

An RFC component template belongs to an explicit semantic family and narrows the structural profile for a declared RFC purpose. A component does not become active merely because it references TPL-001.

### 5.3 RFC Document Instance

An RFC instance is owned by its declared architecture or domain authority. Its proposal status, decision status, lifecycle, review, approval, evidence, implementation, and release posture are supplied or resolved outside the template.

### 5.4 Existing RFC Documents

Existing RFCs are not retroactively normalized, approved, rejected, or invalidated by TPL-001. Migration is required only when an authorized owner chooses to revise or re-template an RFC.

## 6. Required Inputs

Before selecting or instantiating an RFC template, resolve:

- RFC purpose and subject;
- owning domain and accountable owner;
- intended consumers and decision authority;
- applicable normative authorities and references;
- proposal boundary and explicit out-of-scope concerns;
- affected interfaces, contracts, consumers, and protected boundaries;
- evidence, assumptions, constraints, risks, and open questions;
- compatibility and migration triggers;
- applicable validation, review, and decision routes;
- whether an existing family contract and RFC component are active.

Missing or conflicting required inputs trigger safe stop.

## 7. Minimum RFC Structural Profile

An RFC template must provide the following sections or explicit equivalent mappings:

1. Document Metadata
2. Executive Summary
3. Purpose
4. Scope and Out of Scope
5. Normative Authority, References, and Dependencies
6. Problem or Context
7. Proposed Architecture or Contract
8. Design Decisions and Rationale
9. Ownership and Responsibility Boundaries
10. Interfaces and Integration Boundaries
11. Lifecycle or State Semantics, when applicable
12. Compatibility and Migration Impact
13. Security, Safety, and Protected Boundaries
14. Validation and Evidence Plan
15. Risks, Alternatives, and Open Questions
16. Adoption or Implementation Boundary
17. Completion Criteria
18. Version History

A domain component may map or rename a section when the semantic purpose remains explicit and traceable. It must not silently remove a required concern.

## 8. Section Semantics

### 8.1 Executive Summary

State what the RFC proposes, why it exists, its bounded effect, and its current decision posture. Do not present a proposal as accepted fact.

### 8.2 Purpose

Explain why an RFC is required and what decision or contract needs governed treatment.

### 8.3 Scope and Out of Scope

Declare exact boundaries. Referenced domains do not become owned domains.

### 8.4 Authority, References, and Dependencies

Separate normative authority, consumed inputs, dependencies, informative references, and evidence. Context does not become authority merely by being cited.

### 8.5 Problem or Context

Record the current condition, gap, constraints, assumptions, and provenance without silently establishing truth.

### 8.6 Proposed Architecture or Contract

Describe the proposed structure, behavior, interface, or rule. Clearly distinguish proposal from accepted authority and implementation.

### 8.7 Design Decisions and Rationale

Record proposed or accepted decisions with their actual decision status, alternatives, and rationale. A template must not decide among alternatives.

### 8.8 Ownership and Responsibility Boundaries

Declare owner, responsible parties, consumers, explicit non-responsibilities, and escalation routes supplied by the governing context.

### 8.9 Interfaces and Integration Boundaries

Describe inputs, outputs, interfaces, dependencies, failure boundaries, and protected handoffs without creating provider or execution authority.

### 8.10 Lifecycle or State Semantics

Include only when the RFC subject requires lifecycle or state. The owning domain supplies states, transitions, and authority.

### 8.11 Compatibility and Migration

Identify affected consumers, breaking and non-breaking effects, compatibility direction, transition obligations, rollback concerns, and unresolved migration risks.

### 8.12 Security, Safety, and Protected Boundaries

Record applicable threat, safety, privacy, access, destructive-action, and boundary constraints supplied by their semantic owners.

### 8.13 Validation and Evidence

Declare criteria, evidence sources, validation owner, coverage, limitations, and expected result semantics. A plan is not a passing result.

### 8.14 Risks, Alternatives, and Open Questions

Keep unresolved matters visible. Open questions must not be converted into implied decisions.

### 8.15 Adoption or Implementation Boundary

State what separate authority and work are required after an RFC decision. RFC completion does not activate implementation.

### 8.16 Completion Criteria and Version History

Define document-completeness criteria separately from review, approval, implementation, release, or Target-state completion.

## 9. Metadata Responsibilities

When STD-010 applies:

- the RFC template describes itself with template metadata;
- the RFC instance uses its own produced-document metadata;
- owner, reviewer, approver, status, authority, evidence, and lifecycle values are supplied by the owning context;
- template metadata must not automatically flow into the RFC instance;
- Draft, Validation, Review, Certification, Approval, Promotion, Canonical, Availability, Implementation, and Release remain separate dimensions;
- merge does not establish canonical architectural authority unless the governing domain explicitly defines and records that effect.

No RFC template may default an approval, certification, canonical, implementation, compatibility, or release claim.

## 10. Placeholders

RFC component templates must follow accepted TPL-000 placeholder rules.

Required values must identify their source. Optional values may be omitted only when omission does not hide authority, evidence, risk, compatibility, or an unresolved decision.

Authority-neutral formatting defaults are allowed. Semantic decisions and statuses are not defaults.

## 11. Specialization and Composition

RFC component templates may specialize TPL-001 structurally when:

- an explicit semantic family owns the component;
- the component has a narrower RFC purpose;
- required RFC concerns remain present or traceably mapped;
- additional sections do not widen authority;
- no lifecycle, approval, certification, or implementation behavior is inherited;
- no circular dependency or competing RFC standard is created.

TPL-001 is not an inheritance root and does not authorize a component. Family activation remains a separate Human Governance-controlled normalization decision.

## 12. Validation and Conformance

TPL-001 structural validation checks:

- the RFC purpose, owner, subject, and intended consumer are explicit;
- required RFC concerns are present or traceably mapped;
- proposal, decision, implementation, and release postures remain distinct;
- template and RFC-instance metadata are separate;
- authorities, references, dependencies, evidence, and assumptions are classified;
- compatibility and migration triggers are addressed;
- risks, alternatives, and open questions remain visible;
- no Target-specific default or stale Framework authority is required;
- no template completion claim creates review, approval, certification, canonicalization, implementation, release, or state authority;
- referenced paths and applicable family contracts resolve;
- safe-stop conditions are explicit.

Structural conformance does not validate architectural correctness or make an RFC accepted.

## 13. Versioning and Compatibility

Material changes to an RFC template must declare version and compatibility impact. A breaking change includes removal or semantic change of required concerns, placeholders, authority inputs, compatibility obligations, or consumer-facing structure.

Existing RFC instances retain their recorded status and authority. Template changes do not mutate them.

## 14. Legacy Consumption and Migration

Legacy TPL-001 `0.1.0-draft` assumptions are not retained as active authority. Consumers must remove dependencies on:

- Framework Governance, Framework Architecture Team, or documentation-board defaults;
- Forge AI, ProjectStatus, DevelopmentPhases, or Roadmap dependencies;
- fixed RFC categories, taxonomy, directory structure, and numbering;
- universal RFC lifecycle, status progression, compliance levels, review, certification, approval, and promotion rules;
- TPL-000 inheritance, lifecycle, taxonomy, compliance, registry, and package rules removed by the accepted TPL-000 rebase;
- automatic authority or metadata inheritance;
- claims that every existing RFC is a conforming reference implementation.

Migration must preserve architectural meaning and recorded decisions. Structural normalization must not rewrite authority or decision history.

## 15. Anti-Patterns

Prohibited patterns include:

- treating an RFC template as architecture authority;
- treating merge, validation, review, approval, or certification as interchangeable;
- hard-coding Target planning or state;
- inventing fixed governance bodies or owners;
- hiding open questions to claim completion;
- using an RFC to activate implementation without a separate authorized handoff;
- copying template authority into an RFC instance;
- forcing a universal lifecycle onto unrelated domains;
- creating parallel metadata, RFC, registry, package, or execution authority.

## 16. Safe Stop

Stop and return the unresolved matter to the owning authority when any of the following is missing, conflicting, stale, or ambiguous:

- RFC purpose, owner, subject, consumer, or decision authority;
- applicable family contract or component status;
- normative authority, evidence, provenance, or protected boundary;
- proposal versus accepted-decision posture;
- compatibility, migration, or affected-consumer scope;
- validation, review, approval, adoption, implementation, or release authority;
- placeholder source or required value;
- overlap with another RFC or template authority.

Do not invent values to bypass safe stop.

## 17. Conformance Checklist

- [ ] The RFC purpose, owner, subject, and intended consumer are explicit.
- [ ] TemplateLibrary, TPL-000, TPL-001, and the applicable family contract were consulted.
- [ ] Required RFC concerns are present or traceably mapped.
- [ ] Proposal, decision, implementation, and release postures are distinct.
- [ ] Template metadata and RFC-instance metadata are separate.
- [ ] Authorities, references, dependencies, evidence, and assumptions are classified.
- [ ] Compatibility, migration, risks, alternatives, and open questions are explicit.
- [ ] No Target-specific default or stale Framework authority is required.
- [ ] Structural conformance is not represented as architectural acceptance.
- [ ] Missing or conflicting inputs trigger safe stop.

## 18. Review Position

Human Governance reviewed and accepted this bounded material rebase through Forge AI PR #211. The reconciled Architecture RFC template remains a catalog component pending a separate Architecture family normalization decision.

This document does not normalize the Architecture family, approve or canonicalize an RFC, activate implementation, certify or freeze the Template Library, release anything, execute work, persist state, or mutate a Target.

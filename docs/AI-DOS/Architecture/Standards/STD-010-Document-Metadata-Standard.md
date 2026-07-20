# STD-010 — Document Metadata Standard

> AI-DOS v3 · Standards Library
> Document Metadata · Draft / Non-canonical

---

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-010` |
| Title | STD-010 — Document Metadata Standard |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Documentation Standard |
| Document Type | Framework Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | Document Metadata Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Normative Authority | Human Governance; A.1 Constitution; STD-000 |
| Created | 2026-07-07 |
| Last Updated | 2026-07-14 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS-STD-010` |
| Scope | Document metadata fields, metadata block structure, field requirements, field syntax, document-class metadata profiles, metadata validation requirements, metadata examples, and metadata conformance requirements for governed AI-DOS documents. |
| Out of Scope | Defining reusable Meta semantics, normalizing existing documents, rewriting RFCs, updating Target Project planning state, implementing tooling, creating schemas, certifying documents, or promoting this standard. |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Meta/README.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Meta/M.2-Identity-Meta-Model.md`; `docs/AI/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI/Meta/M.8-Extension-Meta-Model.md`; `docs/AI/Meta/M.9-Schema-Validation-Meta-Model.md` |
| Consumes | M.0 authority, ownership, boundary, constraint, artifact root, and validation root semantics; M.1 artifact semantics; M.2 identity semantics; M.3 relationship semantics; M.4 lifecycle and status semantics; M.5 evidence and traceability semantics; M.6 versioning and supersession semantics; M.7 compatibility semantics; M.8 extension semantics; M.9 schema, validation, and conformance semantics; STD-000 Standards authority. |
| Produces | Document metadata field registry, metadata block structure rules, field representation rules, document-class metadata profiles, metadata validation profile, examples, and metadata conformance requirements. |
| Depends On | Human Governance, A.1 Constitution, M.0-M.9, and STD-000. |
| Supersedes | None |
| Superseded By | None |
| Validation Profile | STD-010 metadata conformance profile consuming M.9 result semantics |
| Validation Status | Not validated by an implemented validator; document checks recorded in the alignment report |
| Review Status | Review Required |
| Certification Status | Not certified |
| Compatibility Declaration | Conditional; no compatibility claim beyond preserving valid prior field obligations in this draft |
| Extension Profile | None |
| Schema Binding | Conditional; no external schema artifact is created by this standard |
| Evidence References | `docs/AI/Architecture/Reports/AI-DOS-STD-010-Meta-v1.1-Alignment-Report-v1.md` |
| Historical References | Prior STD-010 draft dated 2026-07-07 |

---

## 2. Purpose

STD-010 defines the governed document-facing metadata model for AI-DOS documents. Meta defines what metadata values mean. STD-010 defines where those values appear, whether they are required, how they are represented, and how metadata conformance is evaluated.

## 3. Authority Position

STD-010 is a Standards Family artifact governed by STD-000 and Human Governance. It consumes M.1-M.9 for semantic meanings and may consume M.0 for root authority, ownership, boundary, constraint, artifact root, and validation root concerns. STD-010 does not supersede Meta documents and does not become the semantic owner of Artifact, Identity, Relationship, Lifecycle, Status, Evidence, Traceability, Version, Supersession, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, or Constraint.

## 4. Scope

STD-010 owns required and conditional metadata fields, metadata block shape, field ordering where normative, field syntax constraints, field cardinality, field presence rules, document-class metadata profiles, metadata completeness requirements, metadata examples, schema-binding requirements, validation profile requirements, and metadata conformance requirements.

## 5. Out of Scope

STD-010 does not implement validation tooling, define JSON or YAML schemas, normalize existing documents, modify downstream standards, certify documents, promote drafts, update Target Project planning, or define reusable Meta semantics. Target Project planning files must not become reusable AI-DOS normative authority through STD-010 metadata.

## 6. Metadata Standard Responsibilities

Every governed AI-DOS document should include a `## Document Metadata` table near the top of the document with the shape:

```markdown
| Field | Value |
|:---|:---|
```

Mandatory fields must appear even when their value is `None` only if this standard classifies the field as mandatory and no governed exception exists. Conditional fields must appear when their trigger is true. Optional fields may appear when useful. Prohibited fields must not appear for the relevant profile. Derived / display-only fields may be shown but must not be treated as semantic authority.

## 7. Meta Consumption Model

| Meta Source | Consumed by STD-010 | STD-010 Field Responsibility |
|:---|:---|:---|
| M.0 | Authority, Ownership, Boundary, Constraint, Artifact root, Validation root | Expose authority, owner, scope, out-of-scope, and validation-root fields without redefining roots. |
| M.1 | Artifact, Artifact Family, Artifact Type, Artifact Instance, Artifact Representation, Artifact Identity Binding, Artifact Relationship Binding, Artifact Lifecycle Binding, Artifact Version Binding, Artifact Schema Binding, Artifact Discovery Interface, Artifact Consumption Interface | Provide document-facing artifact classification and binding fields. |
| M.2 | Identifier, identity scope, canonical reference, alias, historical identity, collision, namespace, version-independent reference, version-specific reference, rename preservation, move preservation | Provide identity field names and representation rules. |
| M.3 | GOVERNED_BY, CONSUMES, DEPENDS_ON, REFERENCES, SPECIALIZES, PRODUCES, VALIDATES, REVIEWS, CERTIFIES, SUPERSEDES, SUPERSEDED_BY, REPLACES, TRACES_TO, PROJECTS_TO | Provide typed relationship fields, cardinality, triggers, and target validation. |
| M.4 | Lifecycle State, Canonical Status, Validation Status, Review Status, Certification Status, Promotion Status, Availability Status, Historical Classification | Provide distinct status fields and prevent inference across dimensions. |
| M.5 | evidence references, source references, provenance, traceability identifiers, claim bindings, validation evidence, review evidence, certification evidence, freshness where applicable | Provide evidence and traceability metadata presence rules. |
| M.6 | Version, Revision, Version Scope, Version Reference, Lineage, Supersedes, Superseded By, Replaces, Amends, Migration Obligation, Historical Version Reference | Provide versioning and supersession field representation. |
| M.7 | Compatibility Claim, Compatibility Scope, Compatibility Direction, Compatibility Classification, Breaking Change, Non-Breaking Change, Compatibility Window, Affected Consumers | Provide conditional compatibility metadata fields. |
| M.8 | Extension Point, Extension Namespace, Extension Profile, Extension Registration, Extension Dependency, Extension Compatibility, Target Adapter Boundary | Provide conditional extension metadata fields only. |
| M.9 | Schema Binding, Validation Profile, Validation Result, Conformance, Non-Conformance, Warning, Waiver, Failure, Validation Coverage | Provide metadata validation profile and consume M.9 result semantics. |

## 8. Metadata Category Model

| Category | Semantic Owner | Field Owner | Required Fields | Conditional Fields | Cardinality | Allowed Values or Reference Source | Validation Expectations |
|:---|:---|:---|:---|:---|:---|:---|:---|
| Identity Metadata | M.2 | STD-010 | Identifier, Title | Aliases, Canonical Reference, Historical References, Version-Independent Reference, Version-Specific Reference | Mandatory fields exactly one; lists zero or more | Applicable identifier profile and M.2 reference semantics | Unique resolution within identity scope; rename and move do not change identity. |
| Classification Metadata | M.1 | STD-010 | Document Type, Artifact Family, Artifact Type, Classification | Artifact Instance, Artifact Representation | Mandatory fields exactly one | M.1 artifact family/type profiles and governed classification vocabulary | Classification must match document class and artifact role. |
| Authority Metadata | M.0, STD-000 | STD-010 | Normative Authority, Normative References | Governed By, Promotion Requirements | Mandatory fields one or more unless governed exception | Human Governance, Constitution, STD-000, applicable standards | Authority must not include merely informative context. |
| Ownership Metadata | M.0 | STD-010 | Owner, Maintainers, Review Authority, Approval Authority | Approval Status | Owner exactly one; maintainers one or more | Governed roles or bodies | Owner, review authority, and approval authority must be explicit and not inferred. |
| Scope and Boundary Metadata | M.0 | STD-010 | Scope, Out of Scope | Boundary Constraints | Exactly one each | Document-specific prose | Scope and out-of-scope must be present and non-overlapping. |
| Relationship Metadata | M.3 | STD-010 | Normative References, Consumes, Produces, Depends On | References, Informative References, Specializes, Governed By, Validates, Reviews, Certifies, Supersedes, Superseded By, Replaces, Traces To, Projects To | Mandatory fields one or more or `None`; conditional lists zero or more | M.3 relationship types | Targets must resolve or be intentionally external. |
| Lifecycle and Status Metadata | M.4; M.9 for validation-result binding | STD-010 | Status, Canonical Status, Lifecycle State | Validation Status, Review Status, Certification Status, Promotion Status, Availability Status, Historical Classification | Exactly one when present | M.4 status profiles and M.9 validation-result semantics | Status dimensions must not be inferred from each other. |
| Versioning Metadata | M.6 | STD-010 | Version | Revision, Version Scope, Predecessor Version, Version-Specific Reference, Version-Independent Reference | Version exactly one; conditional fields zero or one/many as specified | M.6 version profiles | Version is not Identifier; reference type must be explicit. |
| Evidence and Traceability Metadata | M.5 | STD-010 | Traceability ID | Evidence References, Source References, Provenance Reference, Validation Evidence, Review Evidence, Certification Evidence, Decision References, Finding References | Traceability ID exactly one; evidence lists zero or more | M.5 evidence profiles | Required when claims, validation, review, certification, decisions, or findings are asserted. |
| Compatibility Metadata | M.7 | STD-010 | None universally | Compatibility Declaration, Compatibility Scope, Compatibility Direction, Compatibility Classification, Compatibility Window, Affected Consumers, Migration Obligation | Conditional fields one or more when trigger applies | M.7 compatibility profiles | Required for normative changes, supersession, compatibility claims, breaking changes, or migration obligations. |
| Extension Metadata | M.8 | STD-010 | None universally | Extension Profile, Extension Namespace, Extension Point, Extension Registration, Extension Dependency, Extension Compatibility, Target Adapter Boundary | Conditional fields one or more when trigger applies | M.8 extension profiles | Required for extension artifacts or documents defining extension points. |
| Schema and Validation Metadata | M.9 | STD-010 | Validation Profile | Schema Binding, Validation Result, Validation Coverage, Waiver | Validation Profile exactly one; others conditional | M.9 schema and validation profiles | Validate required fields, syntax, cardinality, resolution, triggers, and cross-field consistency. |
| Historical and Supersession Metadata | M.2, M.4, M.6 | STD-010 | None universally | Historical References, Historical Classification, Supersedes, Superseded By, Replaces | Conditional lists zero or more | M.2/M.4/M.6 profiles | Required for historical identities, archived artifacts, replacements, and supersession. |

## 9. Core Field Registry

Each field definition separates purpose, requirement, syntax, cardinality, semantic authority, and validation rule.

| Field | Purpose | Requirement | Syntax | Cardinality | Semantic Authority | Validation Rule |
|:---|:---|:---|:---|:---|:---|:---|
| Identifier | Expose the document artifact's governed identity. | MANDATORY | Stable identifier in applicable identifier profile. | Exactly one | M.2 | Must resolve uniquely within identity scope. |
| Title | Provide human-readable document title. | MANDATORY | Plain text. | Exactly one | M.1/M.2 binding | Must match or clearly identify the document. |
| Version | Expose document version. | MANDATORY | Governed version string. | Exactly one | M.6 | Must not include or replace Identifier. |
| Revision | Expose smaller change sequence when applicable. | CONDITIONAL when revision tracking is used. | Governed revision label. | Zero or one | M.6 | Must be consistent with Version Scope. |
| Version Scope | State scope of version applicability. | CONDITIONAL when version applies to limited scope. | Text or governed profile. | Zero or one | M.6 | Must identify affected artifact or document boundary. |
| Document Type | State document class. | MANDATORY | Governed class name. | Exactly one | M.1 | Must map to a document-class profile when one exists. |
| Artifact Family | Expose M.1 family. | MANDATORY | M.1 artifact family label. | Exactly one | M.1 | Must be valid for document artifact. |
| Artifact Type | Expose M.1 type. | MANDATORY | M.1 artifact type label. | Exactly one | M.1 | Must be valid under declared family. |
| Classification | Provide governance/domain classification. | MANDATORY | Governed classification label. | Exactly one | M.1/STD-000 | Must not assert authority beyond document state. |
| Status | General lifecycle-profile binding retained for compatibility. | MANDATORY | M.4 lifecycle/status profile value. | Exactly one | M.4 | Does not imply Canonical Status, approval, validation, review, certification, or availability. |
| Lifecycle State | Expose current lifecycle position. | MANDATORY | M.4 lifecycle-state value. | Exactly one | M.4 | Must be consistent with Status but not inferred from it. |
| Canonical Status | State authoritative posture for declared scope. | MANDATORY | M.4 canonical-status value or phrase. | Exactly one | M.4 | Must not imply approval unless approval evidence exists. |
| Owner | Identify accountable owner. | MANDATORY | Governed role/body. | Exactly one | M.0 | Must not be inferred from maintainers. |
| Maintainers | Identify upkeep parties. | MANDATORY | One or more governed roles/bodies. | One or more | M.0 | Must not replace Owner. |
| Review Authority | Identify authorized reviewer. | MANDATORY | Governed role/body. | One or more | M.0/M.4 | Must not be inferred from Owner. |
| Approval Authority | Identify authorized approver. | MANDATORY | Governed role/body. | One or more | M.0/M.4 | Must not be inferred from Review Authority. |
| Normative Authority | Identify governing authority chain. | MANDATORY | Ordered list of authority references. | One or more | M.0/STD-000 | Must exclude merely consumed, informative, or related sources. |
| Normative References | Identify normative conformance inputs. | MANDATORY | List of resolvable references or `None`. | One or more or `None` | M.3 REFERENCES | Must be stronger than informative references. |
| Informative References | Identify non-governing context. | OPTIONAL | List of references. | Zero or more | M.3 REFERENCES | Must not be treated as authority. |
| Scope | State what document covers. | MANDATORY | Text. | Exactly one | M.0 | Must be explicit. |
| Out of Scope | State excluded concerns. | MANDATORY | Text. | Exactly one | M.0 | Must not contradict Scope. |
| Consumes | Identify input artifacts. | MANDATORY | List or `None`. | One or more or `None` | M.3 CONSUMES | Consumption does not create ownership. |
| Produces | Identify outputs defined or created. | MANDATORY | List or `None`. | One or more or `None` | M.3 PRODUCES | Production does not create approval. |
| Depends On | Identify required upstream artifacts/concepts. | MANDATORY | List or `None`. | One or more or `None` | M.3 DEPENDS_ON | Targets must be necessary for interpretation/use. |
| References | Identify typed references not otherwise classified. | OPTIONAL | List. | Zero or more | M.3 REFERENCES | Must not duplicate stronger fields without reason. |
| Related Specifications | Legacy display name for contextual references. | OPTIONAL | List or `None`. | Zero or more | M.3 REFERENCES | Classified as informative unless a stronger field applies. |
| Specializes | Identify artifact or semantic concept specialized. | CONDITIONAL when specialization occurs. | List. | One or more when triggered | M.3 SPECIALIZES | Target must be identifiable. |
| Governed By | Identify direct governing artifact/body. | CONDITIONAL when direct governing relationship is represented separately. | List. | One or more when triggered | M.3 GOVERNED_BY | Must align with Normative Authority. |
| Validates | Identify target validated by the document. | CONDITIONAL for validation records or standards with validation scope. | List. | One or more when triggered | M.3 VALIDATES | Target and validation scope must be explicit. |
| Reviews | Identify target reviewed by the document. | CONDITIONAL for review records. | List. | One or more when triggered | M.3 REVIEWS | Target must be explicit. |
| Certifies | Identify target certified by the document. | CONDITIONAL for certification records. | List. | One or more when triggered | M.3 CERTIFIES | Certification authority/evidence required. |
| Supersedes | Identify prior authority replaced. | CONDITIONAL when document replaces prior authority; use `None` where mandatory profile retains field. | List or `None`. | Zero or more; exactly `None` if no target and field retained | M.6 and M.3 SUPERSEDES | Requires identifiable target and replacement scope. |
| Superseded By | Identify later replacement. | CONDITIONAL when document is replaced; use `None` where mandatory profile retains field. | List or `None`. | Zero or more; exactly `None` if no target and field retained | M.6 and M.3 SUPERSEDED_BY | Must be inverse-consistent where both records are governed. |
| Replaces | Identify replacement not strictly supersession. | CONDITIONAL when replacement relation is declared. | List. | One or more when triggered | M.6 and M.3 REPLACES | Must state replacement scope. |
| Predecessor Version | Identify prior version in lineage. | CONDITIONAL when version lineage is tracked. | Version reference. | Zero or one/more by profile | M.6 | Must be version-specific if lineage depends on version. |
| Version-Specific Reference | Reference to one version. | CONDITIONAL when exact version binding is required. | Reference including version. | One or more when triggered | M.2/M.6 | Must include version identity. |
| Version-Independent Reference | Reference stable across versions. | CONDITIONAL when canonical reference should ignore version. | Identifier/reference without version. | One or more when triggered | M.2/M.6 | Must not be used where version-specific binding is required. |
| Migration Obligation | State required downstream migration. | CONDITIONAL when normative change or supersession requires migration. | Text or reference. | Zero or more | M.6/M.7 | Requires compatibility metadata when consumers are affected. |
| Validation Profile | Identify metadata validation profile. | MANDATORY | Profile name/reference. | Exactly one | M.9 | Must be applicable to document class. |
| Validation Status | State validation outcome state. | CONDITIONAL when validation is performed or required. | M.4/M.9 binding. | Zero or one | M.4/M.9 | Does not imply approval. |
| Validation Result | State validation result. | CONDITIONAL when validation result is reported. | M.9 result value. | Zero or more | M.9 | Must align with M.9 taxonomy. |
| Validation Coverage | State validation coverage. | CONDITIONAL when validation result is reported. | Text/reference. | Zero or one/more | M.9 | Must identify covered fields/rules. |
| Review Status | State review dimension. | CONDITIONAL when review tracking applies. | M.4 review-status value. | Zero or one | M.4 | Does not imply certification. |
| Certification Status | State certification dimension. | CONDITIONAL when certification applies; recommended display for Standards. | M.4 certification-status value. | Zero or one | M.4 | Does not imply canonical promotion. |
| Promotion Status | State promotion dimension. | CONDITIONAL when promotion tracking applies. | M.4 promotion-status value. | Zero or one | M.4 | Must not be inferred from certification. |
| Availability Status | State consumption availability. | CONDITIONAL when availability differs from lifecycle. | M.4 availability-status value. | Zero or one | M.4 | Must not imply compatibility. |
| Compatibility Declaration | State compatibility claim. | CONDITIONAL when normative contract changes, supersession occurs, compatibility is declared, breaking change is introduced, or migration is required. | M.7 claim/profile text. | One or more when triggered | M.7 | Must include scope/direction/classification when applicable. |
| Compatibility Scope | State compatibility boundary. | CONDITIONAL with Compatibility Declaration. | Text/profile. | One or more when triggered | M.7 | Must identify affected interface/artifact/version. |
| Compatibility Direction | State direction. | CONDITIONAL with directional compatibility claim. | M.7 direction value. | Zero or one | M.7 | Must be unambiguous. |
| Compatibility Classification | State breaking/non-breaking classification. | CONDITIONAL for normative changes affecting consumers. | M.7 classification. | One or more when triggered | M.7 | Breaking change requires affected consumers and migration obligation. |
| Compatibility Window | State compatibility time/version window. | CONDITIONAL when a window is declared. | Date/version range. | Zero or one | M.7 | Must be bounded. |
| Affected Consumers | Identify consumers affected by compatibility change. | CONDITIONAL for breaking changes or migration obligations. | List. | One or more when triggered | M.7 | Must be traceable. |
| Extension Profile | Identify applicable extension profile. | CONDITIONAL for extension artifacts or extension points. | M.8 profile. | One or more when triggered | M.8 | Must not define extension loading/implementation. |
| Extension Namespace | Identify extension namespace. | CONDITIONAL for extension artifacts. | M.8 namespace. | One or more when triggered | M.8 | Must be registered or governance-approved when required. |
| Extension Point | Identify extension point. | CONDITIONAL when a document defines or uses one. | Reference. | One or more when triggered | M.8 | Target must be valid. |
| Extension Registration | Identify registration reference. | CONDITIONAL when registration exists or is required. | Reference. | Zero or more | M.8 | Must resolve when governed. |
| Extension Dependency | Identify extension dependency. | CONDITIONAL when extension depends on another extension/artifact. | List. | Zero or more | M.8/M.3 DEPENDS_ON | Must not imply loading order unless owned elsewhere. |
| Extension Compatibility | State extension compatibility claim. | CONDITIONAL when extension compatibility is declared. | M.8/M.7 binding. | Zero or more | M.8/M.7 | Must satisfy compatibility trigger rules. |
| Target Adapter Boundary | State Target adapter boundary. | CONDITIONAL when Target adapter extension is discussed. | Text/reference. | Zero or one/more | M.8 | Must not introduce Target Project authority into reusable AI-DOS truth. |
| Schema Binding | Identify governed schema binding. | CONDITIONAL when a governed schema applies. | Schema reference/profile. | Zero or more | M.9 | Must resolve and align with document class. |
| Evidence References | Identify evidence supporting claims. | CONDITIONAL when claims, validation, review, certification, findings, or decisions are asserted. | List. | Zero or more | M.5 | Must resolve or be explicitly external. |
| Source References | Identify source materials. | CONDITIONAL when source material is used as evidence. | List. | Zero or more | M.5 | Must preserve provenance when required. |
| Provenance Reference | Identify provenance record. | CONDITIONAL when provenance is material. | Reference. | Zero or more | M.5 | Must not redefine provenance quality. |
| Traceability ID | Expose trace identifier. | MANDATORY | Stable trace identifier. | Exactly one | M.5/M.2 | Must remain stable across file rename/move unless governance changes identity. |
| Validation Evidence | Identify validation evidence. | CONDITIONAL when validation result/status is asserted. | List. | One or more when triggered | M.5/M.9 | Required for validation claims. |
| Review Evidence | Identify review evidence. | CONDITIONAL when review result/status is asserted. | List. | One or more when triggered | M.5 | Required for review claims. |
| Certification Evidence | Identify certification evidence. | CONDITIONAL when certification status beyond not-certified is asserted. | List. | One or more when triggered | M.5 | Required for certification claims. |
| Decision References | Identify decision records. | CONDITIONAL when decisions affect metadata. | List. | Zero or more | M.5 | Must resolve when governed. |
| Finding References | Identify findings. | CONDITIONAL when findings are consumed or produced. | List. | Zero or more | M.5 | Must distinguish findings from authority. |
| Historical References | Preserve prior identities/references. | CONDITIONAL when rename, move, historical identity, supersession, archival, or legacy state applies. | List. | Zero or more | M.2/M.6 | Must not create a new identity by itself. |
| Last Updated | Record last material update date. | MANDATORY | `YYYY-MM-DD`. | Exactly one | M.6/M.5 freshness binding where applicable | Must be valid date and updated for material metadata changes. |
| Created | Record creation date. | CONDITIONAL when known; recommended for governed documents. | `YYYY-MM-DD`. | Zero or one | M.5/M.6 | Must not be later than Last Updated. |
| Canonical Path | Display repository path. | DERIVED / DISPLAY-ONLY | Path string. | Zero or one | M.2 binding | Does not define identity. |
| Blocks | Legacy sequencing relation. | OPTIONAL; prefer typed relationships or Migration Obligation. | List. | Zero or more | M.3 relationship profile | Must be classified if retained. |
| Blocked By | Legacy sequencing relation. | OPTIONAL; prefer typed relationships or Migration Obligation. | List. | Zero or more | M.3 relationship profile | Must be classified if retained. |
| ProjectStatus | Target-specific state field. | PROHIBITED in reusable AI-DOS metadata. | Not applicable. | Zero | Target boundary | Must not appear except in explicit prohibition or historical evidence. |

## 10. Field Requirement and Cardinality Rules

- MANDATORY fields are required for every governed document unless an explicit governed exception is recorded.
- CONDITIONAL fields are required when their trigger is true and omitted or marked `None` only when the field profile permits.
- OPTIONAL fields may appear when they improve consumption and do not duplicate stronger fields.
- PROHIBITED fields must not appear in active metadata for the applicable document class.
- DERIVED / DISPLAY-ONLY fields may be rendered for navigation, but cannot define identity, authority, lifecycle, or conformance.
- Lists use semicolon-separated values in markdown table cells unless a document-class profile defines another representation.
- `None` is allowed only where the field is retained to show non-applicability.

## 11. Identity Metadata Profile

Identity fields are `Identifier`, `Title`, `Aliases`, `Canonical Reference`, `Historical References`, `Version-Independent Reference`, `Version-Specific Reference`, `Traceability ID`, and optional `Canonical Path` as display-only. Their semantic owner is M.2 and field owner is STD-010. `Identifier`, `Title`, and `Traceability ID` are mandatory. Aliases and historical references are conditional when alternate names, prior identities, renames, moves, or historical references exist. A file rename or document move does not change `Identifier` unless governance creates a replacement identity.

## 12. Classification Metadata Profile

Classification fields are `Document Type`, `Artifact Family`, `Artifact Type`, `Artifact Instance`, `Artifact Representation`, and `Classification`. Semantic owner is M.1. STD-010 requires `Document Type`, `Artifact Family`, `Artifact Type`, and `Classification` to classify the document for consumption, validation, discovery, and document-class profile selection. `Artifact Instance` and `Artifact Representation` are conditional when instance-level distinction or representation binding is required.

## 13. Authority and Ownership Metadata Profile

`Normative Authority`, `Normative References`, `Governed By`, `Owner`, `Maintainers`, `Review Authority`, and `Approval Authority` expose authority and ownership metadata. Semantic owners are M.0, M.3, M.4, and STD-000 depending on concern. `Owner` is exactly one. `Maintainers`, `Review Authority`, and `Approval Authority` are one or more. Owner and Approval Authority may differ. Review Authority and Approval Authority must not be inferred from Owner.

## 14. Scope and Boundary Metadata Profile

`Scope` and `Out of Scope` are mandatory and exactly one each. `Boundary Constraints` are conditional when boundary rules require explicit display. These fields consume M.0 boundary and constraint semantics and are validated for presence, non-empty content, and lack of contradiction.

## 15. Relationship Metadata Profile

| Field | M.3 Relationship Type | Direction | Cardinality | Status | Allowed Target Type | Validation Requirement |
|:---|:---|:---|:---|:---|:---|:---|
| Normative References | REFERENCES | This document references normative source | One or more or `None` | MANDATORY | Authority, standard, meta model, policy, governed document | Must resolve and be classified as normative. |
| Informative References | REFERENCES | This document references context | Zero or more | OPTIONAL | Any governed or external source | Must not be treated as authority. |
| Consumes | CONSUMES | This document consumes target | One or more or `None` | MANDATORY | Artifact, evidence, source, standard, model, report | Must identify input role. |
| Produces | PRODUCES | This document produces target | One or more or `None` | MANDATORY | Artifact, rule, profile, report, finding, schema-binding requirement | Must identify output role and not imply approval. |
| Depends On | DEPENDS_ON | This document depends on target | One or more or `None` | MANDATORY | Required artifact, authority, model, concept | Must be necessary for interpretation/use. |
| Specializes | SPECIALIZES | This document specializes target | One or more when triggered | CONDITIONAL | Meta concept, standard profile, artifact type | Triggered by specialization claim. |
| Governed By | GOVERNED_BY | This document is governed by target | One or more when triggered | CONDITIONAL | Authority artifact/body | Must align with Normative Authority. |
| Validates | VALIDATES | This document validates target | One or more when triggered | CONDITIONAL | Artifact, metadata profile, schema, document | Required for validation records and validation standards. |
| Reviews | REVIEWS | This document reviews target | One or more when triggered | CONDITIONAL | Artifact/document/claim | Required for review records. |
| Certifies | CERTIFIES | This document certifies target | One or more when triggered | CONDITIONAL | Artifact/document/claim | Certification evidence and authority required. |
| Supersedes | SUPERSEDES | This document supersedes target | Zero or more; `None` when retained and not applicable | CONDITIONAL | Prior governed artifact/document/version | Replacement scope required. |
| Superseded By | SUPERSEDED_BY | Target supersedes this document | Zero or more; `None` when retained and not applicable | CONDITIONAL | Later governed artifact/document/version | Inverse consistency required where governed. |
| Replaces | REPLACES | This document replaces target | One or more when triggered | CONDITIONAL | Prior artifact/document/version | Replacement scope required. |
| Traces To | TRACES_TO | This document traces to target | Zero or more | CONDITIONAL | Objective, decision, finding, evidence, requirement | Required when traceability claim exists. |
| Projects To | PROJECTS_TO | This document projects to target | Zero or more | CONDITIONAL | Graph node, registry entry, discovery interface | Required when projection is declared. |

## 16. Lifecycle and Status Metadata Profile

| Metadata Concern | Semantic Owner | Purpose |
|:---|:---|:---|
| Lifecycle State / Status | M.4 | Current lifecycle position. |
| Canonical Status | M.4 | Whether authoritative for scope. |
| Validation Status | M.4/M.9 binding | Validation outcome state. |
| Review Status | M.4 | Review dimension. |
| Certification Status | M.4 | Certification dimension. |
| Availability Status | M.4 | Consumption availability. |
| Version | M.6 | Version identity and lineage. |
| Compatibility Status / Claim | M.7 | Cross-version or cross-interface compatibility. |

No status dimension may be inferred from another. `Status` is retained as a lifecycle-profile binding for compatibility and must be distinguished from `Canonical Status`, `Validation Status`, `Review Status`, `Certification Status`, `Promotion Status`, and `Availability Status`.

## 17. Versioning and Supersession Metadata Profile

| Field | Requirement | Applicability Trigger | Cardinality | Semantic Owner |
|:---|:---|:---|:---|:---|
| Version | MANDATORY | Every governed document. | Exactly one | M.6 |
| Revision | CONDITIONAL | Revision tracking is used. | Zero or one | M.6 |
| Version Scope | CONDITIONAL | Version applies to limited scope. | Zero or one | M.6 |
| Predecessor Version | CONDITIONAL | Version lineage is tracked. | Zero or more | M.6 |
| Version-Specific Reference | CONDITIONAL | Exact version binding is required. | One or more when triggered | M.2/M.6 |
| Version-Independent Reference | CONDITIONAL | Reference must survive version changes. | One or more when triggered | M.2/M.6 |
| Supersedes | CONDITIONAL | Document replaces prior authority. | Zero or more | M.6/M.3 |
| Superseded By | CONDITIONAL | Document has been replaced. | Zero or more | M.6/M.3 |
| Migration Obligation | CONDITIONAL | Downstream consumers must migrate. | Zero or more | M.6/M.7 |
| Compatibility Declaration | CONDITIONAL | Normative contract changes, supersession, declared compatibility, breaking change, or migration obligation exists. | One or more when triggered | M.7 |

Document identity, document version, document revision, canonical reference, and version-specific reference are distinct metadata concerns.

## 18. Evidence and Traceability Metadata Profile

`Traceability ID` is mandatory. `Evidence References`, `Source References`, `Provenance Reference`, `Validation Evidence`, `Review Evidence`, `Certification Evidence`, `Decision References`, and `Finding References` are conditional. They consume M.5. STD-010 defines when these fields appear and how they are represented; it does not define evidence quality, confidence, freshness, provenance, sufficiency, completeness, integrity, or trust semantics. Confidence, freshness, or sufficiency fields, if used by a document class, are M.5 profile bindings.

## 19. Compatibility Metadata Profile

Compatibility fields are conditional, never universally mandatory. They are required when a document changes a normative contract, supersedes another artifact, declares compatibility, introduces a breaking change, or requires downstream migration. `Compatibility Declaration`, `Compatibility Scope`, `Compatibility Direction`, `Compatibility Classification`, `Compatibility Window`, `Affected Consumers`, and related `Migration Obligation` consume M.7 and do not define compatibility semantics locally.

## 20. Extension Metadata Profile

Extension fields are conditional. `Extension Profile`, `Extension Namespace`, `Extension Point`, `Extension Registration`, `Extension Dependency`, `Extension Compatibility`, and `Target Adapter Boundary` consume M.8. STD-010 does not define extension loading, implementation, plugin registration, adapter execution, or extension runtime behavior.

## 21. Schema and Validation Metadata Profile

`Validation Profile` is mandatory. `Schema Binding` is conditional when a governed schema applies. `Validation Result`, `Validation Coverage`, and `Waiver` are conditional when validation is reported. STD-010 consumes M.9 result semantics and permits only M.9-aligned result meanings such as Conformance, Non-Conformance, Warning, Waiver, and Failure. STD-010 validates mandatory-field presence, field syntax, field cardinality, identifier resolution, reference resolution, relationship target validity, status-value validity, version formatting and binding, conditional-field triggers, cross-field consistency, authority completeness, ownership completeness, scope/out-of-scope presence, and schema binding where applicable.

## 22. Document-Class Metadata Profiles

The core field registry applies to every document class. Profiles below define only additional mandatory fields, conditional fields, prohibited fields, and profile-specific validation rules.

| Document Class | Additional Mandatory Fields | Conditional Fields | Prohibited Fields | Profile-Specific Validation Rules |
|:---|:---|:---|:---|:---|
| Constitution | Normative Authority, Approval Authority, Canonical Status | Supersedes, Historical References, Decision References | Target Project planning authority fields | Must identify constitutional authority and scope. |
| Governance Policy | Normative Authority, Owner, Approval Authority | Review Evidence, Decision References | ProjectStatus | Must not infer approval from ownership. |
| Meta Model | Artifact Family, Artifact Type, Normative References, Consumes, Produces | Specializes, Schema Binding | Target Project planning authority fields | Must consume upstream Meta without redefining peers. |
| Standard | Normative Authority, Normative References, Validation Profile, Certification Status | Compatibility Declaration, Migration Obligation, Supersedes | Target Project planning authority fields | Must align with STD-000 and declare canonical status. |
| Architecture Specification | Normative References, Depends On, Produces | Compatibility Declaration, Reviews | ProjectStatus | Must separate architecture authority from implementation. |
| RFC | Review Authority, Approval Authority, Consumes, Produces | Review Status, Compatibility Declaration | Canonical promotion claim without approval | Must state non-canonical posture until approved. |
| Report | Evidence References, Consumes, Produces | Finding References, Decision References | Approval claim unless approved separately | Must distinguish findings from authority. |
| Audit | Scope, Evidence References, Finding References | Validation Evidence, Review Evidence | Certification claim unless certification profile applies | Must identify audit scope and evidence. |
| Schema | Schema Binding, Validation Profile, Produces | Compatibility Declaration, Extension Profile | Runtime execution claims | Must identify schema binding without creating a schema here. |
| Command | Owner, Scope, Out of Scope | Extension Profile, Validation Evidence | Approval inferred from execution | Must separate command metadata from runtime execution. |
| Workflow | Owner, Scope, Out of Scope | Depends On, Validation Evidence | Automatic governance approval | Must not define operational execution semantics. |
| Template | Artifact Type, Produces | Schema Binding, Extension Profile | Authority claims unless governed | Must identify produced reusable structure. |
| Runtime Artifact | Artifact Family, Artifact Type, Availability Status | Compatibility Declaration, Schema Binding | Runtime implementation details in metadata | Must distinguish availability from lifecycle. |
| Engine Artifact | Artifact Family, Artifact Type, Depends On | Compatibility Declaration, Extension Profile | Engine execution behavior in metadata | Must preserve Standards/Meta boundaries. |
| Agent Artifact | Artifact Family, Artifact Type, Scope | Extension Profile, Evidence References | Autonomous approval claims | Must not bypass governance. |
| Validation Record | Validates, Validation Profile, Validation Result, Validation Evidence | Waiver, Validation Coverage | Approval or certification implication | Must consume M.9 result semantics. |
| Review Record | Reviews, Review Status, Review Evidence | Finding References, Decision References | Certification implication | Must not imply approval or certification. |
| Certification Record | Certifies, Certification Status, Certification Evidence | Review Evidence, Validation Evidence | Canonical promotion unless governance states it | Must identify certification authority and evidence. |
| Historical Artifact | Historical Classification, Historical References | Superseded By, Archive Location | Active authority unless explicitly stated | Must preserve historical traceability. |
| Roadmap | Owner, Scope, Out of Scope | Depends On, Blocks, Blocked By | Reusable AI-DOS authority unless governance grants it | Generic planning class only; no Target Project authority. |

## 23. Cross-Field Consistency Rules

1. `Identifier` and `Version` must not be conflated.
2. `Owner` and `Approval Authority` may be different.
3. `Review Authority` and `Approval Authority` must not be inferred from `Owner`.
4. `Status` does not imply `Canonical Status`.
5. `Validation Status` does not imply approval.
6. `Review Status` does not imply certification.
7. `Certification Status` does not imply canonical promotion.
8. `Supersedes` requires an identifiable target.
9. `Superseded By` must be consistent with the inverse relationship where both records are governed.
10. `Normative References` create stronger obligations than informative references.
11. `Consumes` does not create ownership.
12. `Produces` does not create approval.
13. `Canonical Path`, if retained, does not define identity.
14. A file rename does not change `Identifier`.
15. A document move does not automatically change identity.
16. Target Project planning files must not become reusable AI-DOS normative authority.
17. Missing conditional metadata must produce an explicit validation result.
18. Metadata conformance does not imply document-content correctness.

## 24. Metadata Examples

Examples are informative unless explicitly declared normative.

### 24.1 Standard Example

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-011` |
| Title | STD-011 — Example Standard |
| Version | `0.1.0-draft` |
| Status | Draft |
| Lifecycle State | Draft |
| Canonical Status | Non-canonical until reviewed and approved |
| Classification | Framework Standard |
| Document Type | Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | Framework Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Last Updated | 2026-07-14 |
| Traceability ID | `AI-DOS-STD-011` |
| Scope | Example standard rules |
| Out of Scope | Tooling implementation |
| Normative Authority | Human Governance; A.1 Constitution; STD-000 |
| Normative References | STD-010 |
| Depends On | STD-000; M.1-M.9 as applicable |
| Consumes | M.1 artifact semantics; M.2 identity semantics; M.3 relationship semantics |
| Produces | Example standard requirements |
| Supersedes | None |
| Superseded By | None |
| Validation Profile | STD-010 metadata conformance profile |
| Review Status | Review Required |
| Certification Status | Not certified |
```

### 24.2 Validation Record Example

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-VAL-001` |
| Title | VAL-001 — Example Metadata Validation Record |
| Version | `1.0.0` |
| Status | Complete |
| Lifecycle State | Approved |
| Canonical Status | Validation evidence only; not normative authority |
| Classification | Validation Record |
| Document Type | Validation Record |
| Artifact Family | Evidence Artifact |
| Artifact Type | Validation Record |
| Owner | Validation Team |
| Maintainers | Validation Team |
| Review Authority | Validation Review Board |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-14 |
| Traceability ID | `AI-DOS-VAL-001` |
| Scope | Metadata validation for a named document |
| Out of Scope | Approval, certification, or content correctness |
| Normative Authority | Human Governance; STD-010 |
| Normative References | STD-010; M.9 |
| Validates | `AI-DOS-STD-011` |
| Consumes | Target document metadata |
| Produces | Validation result and validation evidence |
| Validation Profile | STD-010 metadata conformance profile |
| Validation Status | Validation Passed with Warnings |
| Validation Result | Warning |
| Validation Evidence | Validation transcript reference |
```

## 25. Metadata Conformance Model

A metadata block conforms to STD-010 when it satisfies its document-class profile, includes all mandatory fields, includes all triggered conditional fields, avoids prohibited fields, represents values in allowed syntax, satisfies cardinality, resolves identifiers and references, uses M.3 relationship targets correctly, uses M.4/M.9 status and validation values correctly, separates identity from version, satisfies cross-field consistency, completes authority and ownership fields, includes scope and out-of-scope, includes schema binding where applicable, and reports M.9-aligned validation results for non-conformance, warning, waiver, or failure.

## 26. Prohibited Redefinitions

STD-010 must not redefine Artifact, Identity, Relationship, Lifecycle, Status, Evidence, Traceability, Version, Supersession, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, or Constraint. STD-010 may specialize how those meanings appear as document metadata fields only within the boundaries of M.0-M.9 and STD-000.

## 27. Information Preservation Matrix

| Existing Field / Concept | Previous Role | New Disposition | Semantic Owner | STD-010 Role | Reason |
|:---|:---|:---|:---|:---|:---|
| Mandatory metadata block | Required table structure | KEEP STANDARD RULE | STD-010 | Defines table heading and shape | Field representation authority remains STD-010. |
| Identifier | Stable document ID | CONVERT TO META CONSUMPTION | M.2 | Mandatory field and syntax/cardinality rule | Preserves identity requirement without redefining identity. |
| Title | Human-readable name | KEEP STANDARD RULE | M.1/M.2 binding | Mandatory display field | Preserves document consumption. |
| Version | Version string | CONVERT TO META CONSUMPTION | M.6 | Mandatory field | Separates version from identity. |
| Status | Current working status | SPECIALIZE META CONCEPT | M.4 | Mandatory lifecycle-profile binding | Retained for compatibility but separated from status dimensions. |
| Lifecycle Phase | Current lifecycle phase | REWRITE FOR FIELD CLARITY | M.4 | Renamed/profiled as Lifecycle State | Aligns with M.4 status profile. |
| Canonical Status | Canonical posture | CONVERT TO META CONSUMPTION | M.4 | Mandatory field | Preserves canonical separation. |
| Classification | Governance/domain classification | CONVERT TO META CONSUMPTION | M.1 | Mandatory field | Aligns with artifact classification. |
| Document Type | Document class | CONVERT TO META CONSUMPTION | M.1 | Mandatory field | Drives document-class profile. |
| Artifact Family / Artifact Type | New explicit artifact binding | SPECIALIZE META CONCEPT | M.1 | Mandatory fields | Exposes M.1 document-facing bindings. |
| Owner | Accountable owner | CONVERT TO META CONSUMPTION | M.0 | Mandatory field | Preserves accountability. |
| Maintainers | Upkeep parties | KEEP STANDARD RULE | M.0 | Mandatory field | Preserves maintenance distinction. |
| Review Authority | Review body | CONVERT TO META CONSUMPTION | M.4/M.0 | Mandatory field | Separates review from approval. |
| Approval Authority | Approval body | CONVERT TO META CONSUMPTION | M.4/M.0 | Mandatory field | Preserves approval separation. |
| Normative Authority | Governing sources | CONVERT TO META CONSUMPTION | M.0/STD-000 | Mandatory field | Removes duplicate authority semantics. |
| Normative References | Normative inputs | CONVERT TO META CONSUMPTION | M.3 | Mandatory relationship field | Preserves stronger obligation than informative references. |
| Dependencies | Required upstream items | REWRITE FOR FIELD CLARITY | M.3 | Mapped to Depends On | Aligns with typed relationship field. |
| Consumes | Inputs | CONVERT TO META CONSUMPTION | M.3 | Mandatory relationship field | Preserves input relation. |
| Produces | Outputs | CONVERT TO META CONSUMPTION | M.3 | Mandatory relationship field | Preserves output relation. |
| Related Specifications | Contextual adjacency | MERGE DUPLICATE FIELD RULES | M.3 | Optional informative reference display | Avoids duplicate semantics. |
| Blocks / Blocked By | Sequencing constraints | RETAIN AS HISTORICAL CONTEXT | M.3 | Optional legacy relationship fields | Preserved but not core mandatory fields. |
| Supersedes / Superseded By | Replacement fields | CONVERT TO META CONSUMPTION | M.6/M.3 | Conditional fields | Preserves supersession with target validation. |
| Review Status | Review tracking | CONVERT TO META CONSUMPTION | M.4 | Conditional field | Preserves review dimension. |
| Approval Status | Approval tracking | SPECIALIZE META CONCEPT | M.4 | Conditional field under ownership/authority | Preserved when approval tracking applies. |
| Certification Status | Certification posture | CONVERT TO META CONSUMPTION | M.4 | Conditional/recommended Standards field | Separates certification from canonical promotion. |
| Compliance Level | Compliance posture | MERGE DUPLICATE FIELD RULES | M.9/STD-000 | Use Validation Profile/Validation Result where applicable | Avoids alternate conformance taxonomy. |
| Migration Status | Migration tracking | REWRITE FOR FIELD CLARITY | M.6/M.7 | Migration Obligation / compatibility fields | Preserves migration trigger. |
| Deprecation Notice | Deprecation context | CONVERT TO META CONSUMPTION | M.4/M.6 | Historical/supersession conditional fields | Aligns lifecycle and versioning. |
| Archive Location | Archive pointer | RETAIN AS HISTORICAL CONTEXT | M.2/M.4 | Historical Artifact conditional field | Preserves historical traceability. |
| Registry Entry | Registry pointer | SPECIALIZE META CONCEPT | M.1/M.2/M.9 | Optional reference/projection field | Keeps discovery interface without schema/tooling. |
| Knowledge Graph Projection | Projection pointer | SPECIALIZE META CONCEPT | M.1/M.3 | Projects To conditional field | Preserves projection without graph semantics. |
| Traceability ID | Trace identifier | CONVERT TO META CONSUMPTION | M.5/M.2 | Mandatory field | Preserves audit and governance tracing. |
| ProjectStatus updates | Previous explicit non-goal | REMOVE DUPLICATE SEMANTIC DEFINITION | Target boundary | Prohibited active field | Removes active Target dependency while preserving prohibition. |
| Roadmap class | Planning document class | RETAIN AS HISTORICAL CONTEXT | M.1/M.6/M.7 as applicable | Generic document-class profile | Retained only as generic class, not Target authority. |

## 28. Semantic Ownership Matrix

| Metadata Concern | Semantic Owner | STD-010 Ownership | Prohibited STD-010 Ownership |
|:---|:---|:---|:---|
| Artifact | M.1 | Artifact metadata fields and binding representation | Artifact meaning or artifact-family ownership. |
| Identity | M.2 | Identifier, aliases, canonical/historical reference fields | Identity semantics, collision semantics, rename/move meaning. |
| Classification | M.1 | Classification fields and profiles | Artifact family/type semantics. |
| Authority | M.0/STD-000 | Authority field placement and ordering | Authority meaning or governance precedence. |
| Ownership | M.0 | Owner/maintainer field representation | Ownership meaning. |
| Boundary | M.0 | Scope/out-of-scope field requirements | Boundary semantics. |
| Relationships | M.3 | Relationship field set, triggers, cardinality, target validation | Root relationship meanings, direction, transitivity, symmetry, authority effect. |
| Lifecycle | M.4 | Lifecycle/status metadata fields | Lifecycle semantics or transition model. |
| Status | M.4; M.9 for validation binding | Distinct status fields and no-inference rules | Status meaning or status taxonomy. |
| Evidence | M.5 | Evidence field requirements and representation | Evidence quality, confidence, freshness, sufficiency. |
| Traceability | M.5/M.2 | Traceability ID field and reference representation | Traceability semantics. |
| Versioning | M.6 | Version fields and syntax/cardinality | Version semantics or lineage semantics. |
| Supersession | M.6/M.3 | Supersedes/Superseded By fields | Supersession semantics. |
| Compatibility | M.7 | Conditional compatibility fields and triggers | Compatibility semantics or classification meanings. |
| Extension | M.8 | Conditional extension metadata fields | Extension loading, implementation, registration mechanics, adapter execution. |
| Schema | M.9 | Schema Binding field requirement | Schema semantics, schema syntax, schema creation. |
| Validation | M.9 | Metadata validation profile and field-level checks | Validation-result taxonomy or validator implementation. |
| Conformance | M.9 | Metadata conformance requirements | Conformance semantics beyond M.9. |

## 29. Validation Assertions

STD-010 metadata validation asserts: mandatory fields are present; conditional triggers are evaluated; field syntax and cardinality are correct; identifiers and references resolve; relationship targets are valid; status values are valid for their semantic owner; version formatting and binding are valid; authority and ownership are complete; scope and out-of-scope are present; schema binding exists when applicable; compatibility and extension fields appear only when triggered; prohibited Target Project authority fields do not appear in reusable AI-DOS metadata; and validation results consume M.9 meanings.

## 30. Completion and Governance Status

AI-DOS STD-010 META V1.1
ALIGNMENT COMPLETE

Final Verdict: PASS WITH OBSERVATIONS

Observation: STD-010 remains draft, non-canonical, and not certified. This alignment does not normalize downstream documents, create schemas, implement validators, certify STD-010, or promote STD-010.

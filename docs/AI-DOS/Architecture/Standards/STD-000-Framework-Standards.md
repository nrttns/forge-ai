# STD-000 — Framework Standards

> AI-DOS v3 · Standards Library Governance · Meta v1.1 aligned draft

---

## 1. Document Metadata

| Field | Value |
| :--- | :--- |
| Identifier | `AI-DOS-STD-000` |
| Title | STD-000 — Framework Standards |
| Version | `3.3.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance / Framework Governance |
| Classification | Standards Library Governance |
| Document Type | Framework Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-04 |
| Last Updated | 2026-07-14 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS-STD-000` |
| Scope | Standards-family governance, Standard Artifact requirements, normative language, classification, required structure, cross-standard dependency rules, Standards lifecycle profile, Standards version policy, evidence requirements, compatibility policy, extension policy, schema and validation expectations, conformance requirements, review, approval, promotion, deprecation, and supersession rules. |
| Out of Scope | Meta semantic ownership, Target Project planning or status, runtime implementation, engine implementation, schema generation, validator implementation, certification execution, canonical promotion execution, and modification of downstream Standards. |
| Normative Authority | Human Governance; Framework Governance; constitutional authority where applicable |
| Normative References | `docs/AI-DOS/Meta/README.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Meta/M.2-Identity-Meta-Model.md`; `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI-DOS/Meta/M.8-Extension-Meta-Model.md`; `docs/AI-DOS/Meta/M.9-Schema-Validation-Meta-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Required Meta Authorities | M.0; M.1; M.2; M.3; M.4; M.5; M.6; M.7; M.8; M.9 |
| Required Standard Dependencies | STD-010 for metadata field meanings and document metadata requirements |
| Consumes | M.0-M.9 semantic authorities; STD-010 metadata requirements; Standards-family audit evidence |
| Produces | Standards-family governance rules, Standard Artifact profile, identity syntax, mandatory relationship declarations, lifecycle profile, versioning policy, evidence requirements, compatibility obligations, extension governance, validation and conformance expectations, and cross-standard dependency rules |
| Supersedes | Prior STD-000 draft text that redefined reusable Meta-owned semantics |
| Superseded By | None |
| Promotion Requirements | Meta-consumption review, Standards governance review, relationship validation, metadata validation, evidence validation, compatibility review, approval decision, and explicit canonical promotion |
| Certification Status | Not certified |

---

## 2. Purpose

STD-000 is the Standards-family governance authority for AI-DOS Framework Standards. It defines what a Standard must declare, require, produce, validate, review, approve, promote, deprecate, supersede, and conform to when using meanings supplied by the M.0-M.9 Meta semantic authorities.

Meta defines what a concept means. STD-000 defines Standards-domain obligations that use that meaning. This alignment preserves Standards-specific governance while removing duplicate ownership of reusable Artifact, Identity, Relationship, Lifecycle, Evidence, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, and Constraint semantics.

## 3. Authority Position

Human Governance and constitutional authority remain above STD-000. The Meta Family owns reusable semantic meanings. STD-000 consumes those meanings and specializes them only for Standard Artifacts and Standards-family governance.

STD-000 remains authoritative over peer and downstream Standards for Standards-family rules. If a Standard conflicts with STD-000 within the Standards governance domain, STD-000 prevails unless Human Governance records an exception. If STD-000 conflicts with M.0-M.9 on semantic meaning, the applicable Meta authority prevails.

## 4. Scope

STD-000 governs:

- Standards-family governance;
- Standard Artifact requirements;
- normative language;
- Standard classification and required structure;
- cross-standard dependency and conflict rules;
- Standards lifecycle profile and status boundaries;
- Standards versioning, deprecation, supersession, replacement, and amendment policy;
- Standards evidence requirements;
- Standards compatibility obligations;
- Standards extension governance;
- Standards schema, validation, and conformance expectations;
- Standards review, approval, promotion, and deprecation requirements.

## 5. Out of Scope

STD-000 does not define reusable Meta semantics, Target Project phases, Target Project status, Target Project queues, Target Project milestones, Target release schedules, runtime behavior, engine behavior, validator code, schema implementation, migration execution, approval workflow tooling, or canonical promotion execution.

Target Project documents cannot be normative authority for reusable AI-DOS Standards. Mentions of Target-specific concepts in this document are prohibitions or boundary statements, not active dependencies.

## 6. Standards-Family Responsibilities

STD-000 SHALL preserve a stable Standards-family governance system. Every Standard SHALL have declared authority, scope, out-of-scope boundaries, owner, maintainers, lifecycle state, status dimensions, dependencies, relationships, evidence requirements, compatibility obligations, validation profile, conformance expectations, and promotion requirements.

A Standard owns only its declared normative domain. A Standard MAY specialize Meta concepts within its domain, but it MUST NOT redefine Meta-owned meaning.

## 7. Meta Consumption Model

STD-000 consumes M.0-M.9 as follows:

| Meta Authority | Consumed Meaning | STD-000 Use |
| :--- | :--- | :--- |
| M.0 | Artifact, Authority, Ownership, Boundary, Constraint, Decision, Finding, Recommendation, Risk, Capability, Validation root meaning | Establish Standards-domain obligations without redefining root meaning. |
| M.1 | Artifact Family, Artifact Type, Artifact Instance, bindings, representation, discovery interface, consumption interface | Define Standard Artifact as a Standards-domain specialization. |
| M.2 | identity, identifier, canonical reference, alias, historical identity, collision, namespace, rename and move preservation, version-independent and version-specific references | Define Standards identifier syntax and preservation rules. |
| M.3 | GOVERNS, CONSUMES, DEPENDS_ON, REFERENCES, SPECIALIZES, PRODUCES, VALIDATES, REVIEWS, CERTIFIES, SUPERSEDES, REPLACES, TRACES_TO | Require typed relationship declarations for Standard Artifacts. |
| M.4 | lifecycle profile, lifecycle state, transition, status dimensions, promotion, deprecation, superseded state, archival, canonical status, validation status, review status, certification status | Define the Standards-specific lifecycle profile and status boundaries. |
| M.5 | evidence, claim binding, source, provenance, freshness, confidence, traceability, evidence sufficiency, validation evidence, review evidence, promotion evidence | Require evidence for Standards governance claims and changes. |
| M.6 | version, revision, lineage, supersession, replacement, amendment, migration obligation, historical version reference, version-specific dependency | Define Standards-family versioning and supersession policy. |
| M.7 | backward, forward, partial, and conditional compatibility; breaking and non-breaking change; compatibility claim; compatibility window | Require compatibility classification and evidence for material Standard changes. |
| M.8 | extension point, extension profile, extension namespace, registration, collision, specialization, external profile, Target adapter boundary | Govern Standards-family extension declarations without defining extension loading. |
| M.9 | schema binding, validation profile, validation rule, validation result, conformance, non-conformance, warning, waiver, failure, coverage, semantic validation, structural validation | Require Standards-domain validation and conformance expectations. |

## 8. Standard Artifact Profile

A Standard Artifact is an M.1 Artifact specialization governed by STD-000. General Artifact semantics remain owned by M.1.

Every Standard Artifact MUST declare at minimum: identifier, title, version, status, canonical status, classification, owner, maintainers, review authority, approval authority, scope, out of scope, normative authority, normative references, required Meta authorities, required Standard dependencies, consumes, produces, relationships, validation profile, review requirements, promotion requirements, compatibility declaration, extension points where applicable, supersedes, and superseded by.

Semantic meanings for metadata fields come from applicable Meta authorities and STD-010. STD-000 owns the Standards-domain obligation to declare those fields.

## 9. Standards Identity Profile

STD-000 owns Standards identifier syntax. M.2 owns Identity semantics.

Standards identifiers MUST use stable Standards-family syntax such as `STD-000`, `STD-001`, and `STD-010` in human-facing references, with full artifact identifiers such as `AI-DOS-STD-000` where document metadata requires them.

Identity rules:

1. Each Standards identifier MUST be unique within the Standards namespace.
2. A Standards identifier MUST persist across title rename, file rename, and file move events.
3. A retired, deprecated, superseded, or archived Standards identifier MUST NOT be reused for a different Standard.
4. Title renames MUST preserve historical aliases and traceability.
5. File moves MUST preserve canonical references or provide governed redirects / aliases.
6. Historical aliases MUST be marked as aliases, not new identities.
7. Superseded references MUST identify the superseded Standard and the superseding or replacing Standard where applicable.
8. Identifier collisions MUST be reported and resolved through governance; they MUST NOT be silently resolved.

## 10. Standards Relationship Profile

M.3 owns relationship meaning. STD-000 owns mandatory relationship declarations for Standard Artifacts.

Every Standard Artifact MUST declare applicable typed relationships. At minimum, Standards SHALL evaluate and declare where applicable: GOVERNED_BY, CONSUMES, DEPENDS_ON, REFERENCES, SPECIALIZES, PRODUCES, VALIDATES, REVIEWS, CERTIFIES, SUPERSEDES, REPLACES, CONFLICTS_WITH, and TRACES_TO.

Relationship declarations MUST identify endpoints, direction, scope, authority, and evidence where the relationship has normative effect. Standard numbering does not automatically establish dependency or superiority.

## 11. Standards Lifecycle and Status Profile

STD-000 defines a Standards-specific lifecycle profile based on M.4. It does not define a universal lifecycle.

Standards lifecycle states include: Proposed, Draft, Review Ready, Under Review, Revision Required, Validated, Approved, Canonical, Deprecated, Superseded, Archived, and Rejected.

Status dimensions MUST NOT be collapsed. Lifecycle state, validation status, review status, certification status, canonical status, availability status, and operational applicability are separate declarations when applicable.

Boundaries:

- Validation does not imply review.
- Review does not imply approval.
- Approval does not imply canonical promotion.
- Certification does not automatically imply canonicality.
- Canonical promotion requires explicit authority.
- Repository presence does not imply active or canonical status.
- Deprecation does not erase identity or history.
- Supersession does not delete the superseded Standard.

## 12. Standards Versioning and Supersession Policy

STD-000 consumes M.6 for versioning, revision, lineage, supersession, replacement, amendment, migration obligation, historical version reference, and version-specific dependency semantics.

Standards version policy:

- Standard identity is distinct from Standard version.
- Document revision is distinct from semantic version change.
- Draft revision records editorial or pre-approval changes within a draft lifecycle boundary.
- Amendment records a governed change to an existing Standard without replacing the Standard identity unless explicitly decided.
- Supersession marks that another Standard or version takes precedence; supersession is not deletion.
- Replacement MAY preserve identity or change identity only through an explicit governed decision.
- Breaking Standard changes and non-breaking Standard changes MUST be classified using the compatibility policy in this document.
- Migration obligations MUST be declared where consumers need action, but STD-000 does not define migration execution.
- Historical references MUST remain resolvable or traceable.

Where a Standard uses Semantic Versioning, SemVer is a Standards-family version policy choice, not the general meaning of version under M.6.

## 13. Evidence and Traceability Requirements

M.5 defines what evidence means. STD-000 defines when and what minimum Standards evidence is required.

Evidence MUST be provided for new Standard creation, new normative requirement, semantic change, breaking change, compatibility claim, deprecation, supersession, replacement, waiver, exception, validation result, review recommendation, approval recommendation, and canonical promotion.

Minimum Standards evidence MUST identify claim, source, provenance, freshness where relevant, confidence where relevant, affected artifacts, affected consumers, traceability to authority, and sufficiency rationale.

## 14. Compatibility and Change Policy

STD-000 consumes M.7 compatibility semantics and owns Standards-family compatibility obligations.

Every material Standard change MUST classify compatibility as one of: Non-breaking, Backward compatible, Forward compatible, Partially compatible, Conditionally compatible, Breaking, or Compatibility unknown.

Every compatibility declaration MUST include compatibility scope, affected consumers, evidence, migration obligation where applicable, and compatibility window where applicable. STD-000 does not define migration execution.

## 15. Extension Policy

STD-000 consumes M.8 extension semantics and owns Standards-family extension governance.

A Standard MAY expose extension points, domain profiles, reserved namespaces, specialized relationship types, specialized validation profiles, or external interoperability profiles.

Extension rules:

1. Extensions MUST NOT redefine the Standard's normative authority.
2. Extensions MUST declare identity, namespace, scope, and upstream derivation.
3. Extension collisions MUST NOT be silently resolved.
4. Registration does not imply approval.
5. Target-specific extensions remain Target-owned.
6. Extension compatibility MUST be declared.
7. An extension MUST NOT become a new root Meta meaning.

## 16. Schema, Validation, and Conformance Policy

STD-000 consumes M.9 schema, validation, validation result, and conformance semantics. STD-000 owns Standards-domain validation and conformance requirements.

A Standard MAY require metadata validation, identity validation, relationship validation, semantic validation, structural validation, cross-reference validation, lifecycle validation, evidence validation, version validation, compatibility validation, and extension validation.

Validation results MUST consume M.9 result semantics and MUST NOT invent a second validation-result taxonomy. Validation does not approve, certify, promote, activate, or create authority.

Conformance claims MUST declare subject, scope, validation profile, evidence, result, waiver or exception if any, coverage, and authority boundary.

## 17. Normative Language Rules

The terms MUST, MUST NOT, SHALL, SHALL NOT, SHOULD, SHOULD NOT, and MAY create Standards-domain obligations when used in normative sections.

Explanatory text is informative unless explicitly marked normative. Normative wording cannot override Meta authority, constitutional authority, or Human Governance. Examples are not normative unless explicitly designated.

## 18. Standard Creation and Amendment Requirements

A new Standard or amendment MUST declare the Standard Artifact profile required by Section 8, applicable Meta consumption, required Standard dependencies, relationship declarations, validation profile, evidence profile, compatibility declaration, review requirements, approval requirements, and promotion requirements.

No new Standard may be created solely by numbering. Number assignment is administrative and does not establish authority, dependency, approval, or canonicality.

## 19. Cross-Standard Dependency and Conflict Rules

1. Each Standard owns only its declared normative domain.
2. Every Standard MUST declare applicable Meta consumption.
3. Every Standard MUST identify required Standard dependencies.
4. Standard numbering does not automatically establish dependency.
5. Lower-numbered Standards are not automatically superior.
6. Dependencies MUST be explicit.
7. A peer Standard MUST NOT silently redefine another Standard's domain.
8. A Standard MAY specialize Meta concepts but MUST NOT redefine them.
9. Conflicts MUST identify authority, scope, and precedence.
10. Supersession and replacement MUST be explicit.
11. Historical reports are evidence, not active authority.
12. Schemas and graph models remain subordinate to their owning Standards.
13. Target Project documents cannot be normative authority for reusable AI-DOS Standards.

## 20. Review, Approval, Promotion, and Deprecation Requirements

Review MUST evaluate scope, authority, Meta consumption, Standards dependency declarations, relationship declarations, evidence sufficiency, compatibility classification, validation results, unresolved risks, and downstream impact.

Approval MUST be an explicit decision by the declared approval authority. Promotion to canonical status MUST be separate from validation, review, certification, and approval unless the governing decision explicitly combines them.

Deprecation, supersession, replacement, archival, and rejection MUST preserve identity, history, evidence, and traceability.

## 21. Downstream Consumer Rules

Downstream Standards, runtime specifications, engine specifications, agents, commands, workflows, templates, operational documents, schemas, validators, and reports that consume Standards MUST preserve declared Standard authority, scope, dependencies, relationships, lifecycle status, evidence boundaries, compatibility declarations, extension boundaries, and validation profile.

Downstream consumers MUST NOT treat validation, repository presence, registration, citation, or implementation as approval, certification, canonical promotion, or active authority.

## 22. Prohibited Redefinitions

STD-000 and downstream Standards MUST NOT redefine Meta-owned root meanings for Artifact, Identity, Relationship, Lifecycle, Evidence, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, or Constraint.

STD-000 MUST NOT introduce Target Project phases, stages, queues, milestones, release schedules, ProjectStatus, DevelopmentPhases, Roadmap authority, ForgeAI authority, Forge AI authority, or `docs/Projects/` authority into reusable Standards governance.

## 23. Information Preservation Matrix

| Existing Concept | Previous Role | New Disposition | Authority After Alignment | Reason |
| :--------------- | :------------ | :-------------- | :------------------------ | :----- |
| Standards Library governance | Root governance for Standards | KEEP STANDARD RULE | STD-000 | Core Standards-family authority remains valid. |
| Standard structure / metadata | Required document shape | SPECIALIZE META CONCEPT | STD-000 with STD-010 and M.1/M.2/M.3/M.4/M.5/M.6/M.9 | Preserves Standards obligations while consuming metadata and Meta semantics. |
| Standards lifecycle state machine | Standards lifecycle model | SPECIALIZE META CONCEPT | STD-000 with M.4 | Retained as Standards-specific lifecycle profile. |
| Identity definitions | General meaning of identity and identifiers | CONVERT TO META CONSUMPTION | M.2; STD-000 owns identifier syntax | Prevents duplicate identity ownership. |
| Relationship taxonomy | General meaning of relationships | CONVERT TO META CONSUMPTION | M.3; STD-000 owns mandatory declarations | Prevents duplicate relationship ownership. |
| Evidence and traceability rules | Standards evidence expectations and some general evidence semantics | REWRITE FOR BOUNDARY CLARITY | M.5 owns meaning; STD-000 owns evidence triggers | Preserves evidence requirements without redefining evidence. |
| Versioning and migration model | Standards versioning and migration expectations | REWRITE FOR BOUNDARY CLARITY | M.6 owns meaning; STD-000 owns Standards policy | Separates version semantics from Standards policy. |
| Compatibility expectations | Change-impact policy | SPECIALIZE META CONCEPT | M.7 owns meaning; STD-000 owns obligation | Preserves compatibility requirements. |
| Extension policy | Standards extension governance | SPECIALIZE META CONCEPT | M.8 owns meaning; STD-000 owns governance | Adds explicit collision, namespace, and approval boundaries. |
| Validation and compliance levels | Validation and conformance expectations | CONVERT TO META CONSUMPTION | M.9 owns validation/conformance meaning; STD-000 owns Standards requirements | Removes duplicate validation-result taxonomy. |
| Certification levels | Standards certification expectations | REWRITE FOR BOUNDARY CLARITY | M.4/M.9 for status and validation; STD-000 for Standards requirements | Certification does not imply canonicality. |
| Engine platform alignment sections | Historical alignment context in prior STD-000 | RETAIN AS HISTORICAL CONTEXT | Reports or downstream evidence, not active STD-000 authority | Avoids runtime/engine contamination in compact STD-000. |
| Target planning terms | Project context in prior downstream Standards | REMOVE DUPLICATE DEFINITION | Target Project governance only, not STD-000 | Required Target independence. |
| Standards registry and decision records | Governance support artifacts | KEEP STANDARD RULE | STD-000 with M.5/M.6/M.9 | Preserved as evidence/traceability obligations without implementation design. |
| AI consumption rules | Downstream consumption boundaries | KEEP STANDARD RULE | STD-000 | Preserves bounded consumption requirements. |

## 24. Semantic Ownership Matrix

| Concern | Meta Owner | STD-000 Responsibility | Prohibited STD-000 Ownership |
| :------ | :--------- | :--------------------- | :--------------------------- |
| Artifact | M.1 | Define Standard Artifact obligations. | General Artifact meaning. |
| Identity | M.2 | Define Standards identifier syntax and persistence rules. | General identity, alias, namespace, collision, or reference semantics. |
| Relationships | M.3 | Require Standards relationship declarations. | Root relationship meaning. |
| Lifecycle | M.4 | Define Standards-specific lifecycle profile. | Universal lifecycle or status semantics. |
| Evidence | M.5 | Require evidence for Standards governance events. | General evidence meaning. |
| Versioning | M.6 | Define Standards versioning policy. | General version, revision, lineage, supersession, replacement, or migration-obligation meaning. |
| Compatibility | M.7 | Require compatibility classification for material Standard changes. | General compatibility semantics. |
| Extension | M.8 | Govern Standards-family extensions. | General extension semantics or extension loading. |
| Schema | M.9 | Require schema-binding expectations where applicable. | General schema semantics or schema implementation. |
| Validation | M.9 | Define Standards validation requirements and profiles. | General validation semantics or result taxonomy. |
| Conformance | M.9 | Require Standards conformance claims to declare scope and evidence. | General conformance meaning. |
| Authority | M.0 | Declare Standards authority boundaries. | Root authority meaning. |
| Ownership | M.0 | Require owner and maintainer declarations. | Root ownership meaning. |
| Boundary | M.0 | Require scope and out-of-scope declarations. | Root boundary meaning. |
| Constraint | M.0 | Require Standards constraints where applicable. | Root constraint meaning. |

## 25. Validation Assertions

This aligned STD-000 asserts:

- STD-000 remains the Standards-family governance authority.
- M.0-M.9 consumption is explicit.
- Reusable semantic definitions are delegated to Meta.
- Standards-specific profiles and rules are preserved.
- No active Target Project dependency remains.
- No intended duplicate semantic ownership remains inside STD-000.
- Information preservation is documented.
- Validation evidence is recorded in the alignment report.
- Only the authorized STD-000 file and one alignment report are expected to change.

## 26. Completion and Governance Status

AI-DOS STD-000 META V1.1
ALIGNMENT COMPLETE

Final Verdict: PASS WITH OBSERVATIONS

Observation: This document is an aligned draft. It does not approve, certify, freeze, or canonically promote STD-000.

Exactly One Recommended Next Step:

FORGE-AI.V2.AI-DOS-STD-010-META-V1.1-ALIGNMENT-001
— ALIGN STD-010 DOCUMENT METADATA STANDARD
WITH M.1 ARTIFACT, M.2 IDENTITY,
M.3 RELATIONSHIPS, M.4 LIFECYCLE,
M.5 EVIDENCE, M.6 VERSIONING,
M.7 COMPATIBILITY, M.8 EXTENSION,
AND M.9 SCHEMA & VALIDATION

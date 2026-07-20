# STD-002 — Discovery Standard

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-002` |
| Title | STD-002 — Discovery Standard |
| Version | `2.0.0-draft` |
| Status | Draft; Meta v1.1 aligned; not certified |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Artifact Family | Standards Artifact |
| Artifact Type | Discovery Standard |
| Lifecycle State | Draft |
| Owner | Framework Governance |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-04 |
| Last Updated | 2026-07-14 |
| Traceability ID | `AI-DOS-STD-002` |
| Scope | Discovery Artifact profile, Discovery Record structure, Discovery classification, Discovery source requirements, Discovery evidence minimums, Discovery gap handling, Discovery relationships, Discovery lifecycle profile, Discovery graph projection, Discovery registry expectations, Discovery validation, Discovery conformance, review readiness, and downstream consumption. |
| Out of Scope | Root Meta semantic definitions, metadata field ownership, graph representation ownership, registry implementation, graph storage, JSON/YAML schema creation, runtime execution, engine behavior, Target Project planning truth, approval, certification, canonical promotion, and downstream Finding/Recommendation/Risk/Decision promotion. |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Meta/README.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Meta/M.2-Identity-Meta-Model.md`; `docs/AI/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI/Meta/M.8-Extension-Meta-Model.md`; `docs/AI/Meta/M.9-Schema-Validation-Meta-Model.md` |
| Consumes | M.0 framework authority, ownership, boundary, and constraint semantics; M.1 Artifact semantics; M.2 Identity semantics; M.3 Relationship semantics; M.4 Lifecycle and status semantics; M.5 Evidence and Traceability semantics; M.6 Versioning and supersession semantics; M.7 Compatibility semantics where consumer-impact or evolution claims exist; M.8 Extension semantics; M.9 Schema, Validation, and Conformance semantics; STD-000 Standards-family governance; STD-010 metadata field rules; STD-001 graph representation rules. |
| Produces | Discovery Artifact requirements, Discovery Record profile, Discovery classification profile, Discovery source and evidence obligations, Discovery relationship requirements, Discovery lifecycle profile, Discovery graph projection profile, Discovery registry expectations, Discovery validation profile, Discovery conformance profile, and downstream-consumption rules. |
| Depends On | Human Governance, Meta v1.1, STD-000, STD-010, and STD-001. |
| Schema Binding | Required for governed Discovery Artifact representations; schema meaning and validation result semantics consume M.9 and metadata representation consumes STD-010. |
| Validation Profile | STD-002 Discovery Validation Profile consuming M.9 result semantics. |
| Compatibility Declaration | Conditional; required for material Discovery model, record, schema, projection, consumer-impact, or migration-obligation changes under M.7. |
| Extension Profile | Conditional; required for Discovery extensions governed by M.8. |
| Supersedes | Prior draft structure of STD-002 Discovery Standard. |
| Superseded By | None |

## 2. Purpose

STD-002 defines what a governed Discovery Artifact must contain, produce, project, evidence, validate, and expose for downstream use. It preserves Discovery as the AI-DOS intake authority for observations and Discovery records while consuming reusable semantic meanings from the Meta v1.1 family.

Discovery exists to capture bounded observations before downstream standards or governed transformations decide whether those observations become Findings, Recommendations, Risks, Decisions, implementation work, or governance actions.

## 3. Authority Position

Meta defines what Discovery-related semantic concepts mean. STD-000 governs Standards-family obligations. STD-010 governs metadata fields, cardinality, and syntax. STD-001 governs graph representation. STD-002 governs Discovery-specific requirements.

STD-002 is authoritative for Discovery Artifact requirements, Discovery Record structure, Discovery classification, Discovery source rules, Discovery evidence minimums, Discovery lifecycle profile, Discovery graph projection requirements, Discovery registry expectations, Discovery validation, Discovery conformance, and downstream consumption. STD-002 is not the semantic owner of Artifact, Identity, Relationship, Lifecycle, Evidence, Traceability, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, or Constraint.

## 4. Scope

In scope:

- Discovery Artifact and Discovery Record minimum content.
- Discovery classification profiles and source classes.
- Discovery evidence obligations, claim bindings, limitations, and gap profiles.
- Discovery relationship requirements using M.3 root relationships or M.8-governed specializations.
- Discovery lifecycle and status profile consuming M.4.
- Discovery graph projection requirements consuming STD-001.
- Discovery registry-entry expectations without implementing a registry.
- Discovery versioning, conditional compatibility, extension, schema-binding, validation, conformance, and downstream-consumption rules.

## 5. Out of Scope

STD-002 does not define root Meta meanings, create schemas, implement graph storage, implement a registry, approve or certify Discovery content, mutate source artifacts, create Finding authority, create Recommendation authority, create Risk or Decision authority, define migration execution, update Target Project planning state, or begin downstream terminology alignment.

Target-specific Discovery truth, Target release schedule, project Roadmap, Sprint, Stage, Queue, Milestone, ProjectStatus, DevelopmentPhases, and `docs/Projects/` dependencies are prohibited from active STD-002 semantics. Generic Target Adapter Discovery boundaries may appear only as M.8-governed extension boundaries and must not introduce project truth.

## 6. Discovery Standard Responsibilities

STD-002 shall preserve Discovery authority by defining:

- Discovery Artifact profile and metadata requirements.
- Discovery Record structure and minimum fields.
- Discovery classification categories and required profile attributes.
- Discovery source classes and source metadata requirements.
- Discovery evidence minimums, claim bindings, limitations, and gaps.
- Discovery relationship requirements and projection obligations.
- Discovery lifecycle, validation, review, canonical, and availability status separation.
- Discovery graph projection and registry expectations.
- Discovery validation, conformance, review-readiness, and downstream-consumption rules.

## 7. Meta and Standards Consumption Model

| Authority | STD-002 Consumption |
|:---|:---|
| M.0 | Consumes framework authority, ownership, boundary, constraint, and root type semantics. |
| M.1 | Treats Discovery Artifact as an Artifact specialization and distinguishes Artifact representation, Artifact Discovery Interface, and Artifact Consumption Interface. |
| M.2 | Consumes identity, canonical reference, alias, historical reference, and version-specific reference semantics for Discovery identifiers. |
| M.3 | Consumes relationship semantics for Discovery edges and claim/source/evidence bindings. |
| M.4 | Consumes lifecycle, status, deprecation, supersession, archival, and historical classification semantics. |
| M.5 | Consumes Evidence, Provenance, Traceability, Confidence, Freshness, Sufficiency, limitation, and gap semantics. |
| M.6 | Consumes versioning, lineage, supersession, replacement, amendment, migration obligation, and historical version reference semantics. |
| M.7 | Consumes Compatibility only when evolution, consumer impact, migration obligation, or compatibility claim exists. |
| M.8 | Consumes extension semantics for Discovery classification, source type, evidence profile, relationship, graph projection, registry, validation, and Target Adapter Discovery extensions. |
| M.9 | Consumes schema binding, Validation Rule, Validation Assertion, Validation Result, Conformance, Non-Conformance, Warning, Waiver, Coverage, and validation-mode semantics. |
| STD-000 | Consumes Standard Artifact obligations, normative language, lifecycle, evidence, compatibility, extension, validation, and conformance rules for Standards. |
| STD-010 | Consumes metadata field names, requirements, cardinality, syntax, relationship metadata, status separation, version metadata, evidence metadata, schema metadata, and validation metadata. |
| STD-001 | Consumes Graph Node, Graph Edge, Graph Projection, topology, integrity, traversal, graph validation, graph conformance, and graph extension constraints. |

## 8. Discovery Semantic Model

| Discovery Concept | STD-002 Meaning as Profile / Boundary |
|:---|:---|
| Discovery Subject | The bounded thing under observation, identified through M.2 and scoped through STD-010 fields. |
| Discovery Source | The declared source from which an observation or evidence binding is derived, assessed through M.5 provenance and authority semantics. |
| Discovery Observation | The captured observation text or structured content; Observation is not automatically Evidence. |
| Discovery Record | The minimum record unit that binds subject, source, observation, context, evidence, claims, limitations, gaps, relationships, traceability, and validation status. |
| Discovery Artifact | The governed M.1 Artifact specialization containing one or more Discovery Records and required metadata. |
| Discovery Claim | A claim candidate bound to observation and evidence through M.5; Evidence does not automatically prove a claim. |
| Discovery Evidence | Evidence references or packages used to support, partially support, contradict, limit, or leave unverified a Discovery Claim. |
| Discovery Finding Candidate | A candidate downstream Finding that has no Finding authority until transformed by a downstream standard or governed process. |
| Discovery Gap | A Discovery-specific gap profile; a gap is not automatically a Finding or Risk. |
| Discovery Limitation | A declared boundary on source, scope, confidence, freshness, evidence, relationship, validation, or traceability. |
| Discovery Graph Projection | A STD-001-governed graph representation of Discovery content; it is not Discovery source truth. |
| Discovery Registry Entry | An index entry representing a Discovery Artifact; Registry presence does not imply approval. |
| Discovery Validation Result | An M.9 Validation Result for a Discovery validation scope; Validation does not imply review. |

Required boundaries: Discovery is not automatically a Finding; Discovery does not create canonical truth; Review does not imply certification; Discovery completion does not imply downstream action.

## 9. Discovery Artifact and Metadata Profile

Every governed Discovery Artifact must declare the following fields using STD-010 field rules and Meta meanings:

| Field | Requirement |
|:---|:---|
| Identifier, Title, Version | Required; identity consumes M.2 and version consumes M.6. |
| Artifact Family, Artifact Type | Required; Discovery is an M.1 artifact specialization. |
| Discovery Subject, Discovery Scope, Out of Scope | Required; scope boundaries must be explicit. |
| Discovery Sources, Source References | Required; sources consume M.5 provenance and authority semantics. |
| Evidence References, Claim Bindings | Required when claims or evidence are present; gaps required when absent. |
| Relationships | Required; relationship meaning consumes M.3. |
| Lifecycle State, Canonical Status, Validation Status | Required and separated under M.4 and M.9. |
| Review Status | Required where review is applicable; absent review must not be inferred as acceptance. |
| Owner, Review Authority, Approval Authority | Required using M.0 authority and ownership semantics. |
| Normative References, Consumes, Produces, Depends On | Required where applicable by STD-010 and STD-000. |
| Schema Binding, Traceability ID | Required for governed Discovery Artifact representations. |
| Graph Projection Reference, Registry Reference | Conditional when projection or registration exists. |
| Compatibility Declaration, Extension Profile | Conditional under M.7 and M.8. |
| Supersedes / Superseded By | Conditional under M.6. |

A Discovery Artifact is distinct from a Discovery Graph Projection, Discovery Registry Entry, and Discovery Evidence Package.

## 10. Discovery Record Model

A minimum Discovery Record must contain:

| Field | Requirement |
|:---|:---|
| Record Identifier | Required; M.2 identity scoped to the Discovery Artifact. |
| Discovery Artifact Identifier | Required parent binding. |
| Subject Identifier | Required when subject can be identified; otherwise a Traceability Gap must be declared. |
| Source Identifier | Required for each source; Source Gap required when absent. |
| Observation | Required captured observation. |
| Observation Context | Required enough context for downstream interpretation. |
| Observation Timestamp | Required when known; Freshness Binding required where time relevance matters. |
| Source Authority | Required classification of source authority under M.5. |
| Evidence Binding | Required or Evidence Missing / Evidence Out of Scope must be declared. |
| Claim Binding | Required when the record asserts a claim candidate. |
| Confidence Binding, Freshness Binding | Required when confidence or freshness affects use. |
| Limitations | Required when scope, source, evidence, or interpretation is constrained. |
| Gap Classification | Required when any Discovery Gap exists. |
| Relationships | Required for subject/source/evidence/claim/projection links. |
| Traceability | Required to source, evidence, validation, and downstream consumers where applicable. |
| Validation Status | Required M.9 validation status for the record or inherited profile. |

## 11. Discovery Classification Model

Discovery classification categories are Discovery profiles, not M.1 artifact families or M.5 evidence types.

| Category | Purpose | Subject Type | Source Expectation | Evidence Expectation | Relationship Expectation | Downstream Consumers | Validation Profile |
|:---|:---|:---|:---|:---|:---|:---|:---|
| Architecture Discovery | Capture architecture observations. | Architecture artifact, pattern, dependency, boundary, or constraint. | Document, repository, runtime, or expert source. | Evidence Present or Evidence Partial required; gaps explicit. | DISCOVERS, REFERENCES, TRACES_TO. | Architecture review, standards work, governance review. | Metadata, subject, source, evidence, relationship, and scope validation. |
| Standards Discovery | Capture observations about standards obligations or drift. | Standard Artifact or standards-family concern. | Standard document, report, audit, or review source. | Evidence Present required for normative claims. | DISCOVERS, DERIVES_FROM, SUPPORTS, CONTRADICTS. | Standards maintainers and downstream standard authors. | Metadata, identity, authority, evidence, compatibility where applicable. |
| Source Discovery | Capture source-originated observations. | Code, document, repository, runtime, engine, agent, external, historical, or derived source. | At least one permitted Discovery Source class. | Evidence status declared. | REFERENCES, DERIVES_FROM, TRACES_TO. | Discovery consumers and validators. | Source resolution, authority, freshness, evidence. |
| Gap Discovery | Capture missing, partial, stale, conflicting, or unverified information. | Subject, source, evidence, relationship, validation, or traceability gap. | Declared source or declared absence. | Evidence Missing, Evidence Partial, Evidence Conflicting, Evidence Stale, or Evidence Unverified. | PARTIALLY_SUPPORTS, CONTRADICTS, TRACES_TO as applicable. | Review, planning, validation, governance. | Gap classification and limitation validation. |
| Projection Discovery | Capture graph projection observations. | Graph Projection, Projection Node, Projection Edge, or traversal output. | STD-001 graph projection source. | Projection evidence and traceability required. | PROJECTS_TO, TRACES_TO, REFERENCES. | Knowledge graph consumers. | Graph Projection Validation and relationship validation. |

## 12. Discovery Source Model

Permitted Discovery source classes are Direct Observation, Document Source, Repository Source, Runtime Source, Engine Source, Agent Source, External Source, Historical Source, and Derived Source. Each source declaration must include source identifier, source class, source reference, source authority, source timestamp or freshness basis where applicable, provenance, access or availability limitation where applicable, and traceability to the Discovery Record.

STD-002 owns permitted source classes, minimum source metadata, source traceability requirements, source authority declaration, and source freshness triggers. M.5 owns source, evidence, provenance, confidence, freshness, and sufficiency meanings.

## 13. Evidence, Claim, and Gap Model

Discovery evidence assessment profiles consume M.5:

| Evidence Assessment | Discovery Use |
|:---|:---|
| Evidence Present | Evidence is declared and bound to the claim or observation. |
| Evidence Partial | Evidence supports only part of the Discovery Claim or observation. |
| Evidence Missing | Required evidence is absent and an Evidence Gap must be declared. |
| Evidence Conflicting | Evidence sources contradict and must be represented without forced resolution. |
| Evidence Stale | Freshness Binding indicates the evidence may no longer support current use. |
| Evidence Unverified | Evidence exists but validation or review has not verified it. |
| Evidence Out of Scope | Evidence is intentionally excluded by Discovery Scope or Out of Scope. |

Discovery Gap profiles are Discovery Gap, Evidence Gap, Source Gap, Scope Gap, Relationship Gap, Validation Gap, and Traceability Gap. A gap is not automatically a Finding or Risk; it becomes a Finding or Risk only through downstream standards or governed transformation.

## 14. Claim / Finding Boundary

Discovery may produce a Discovery Claim candidate and may produce a Discovery Finding Candidate. Discovery does not automatically create a canonical Finding, Recommendation, Risk, or Decision. Downstream standards or governed transformations control promotion, transformation, review, approval, and canonical authority. No future standard is assumed by this boundary; consumers must use whatever governed downstream authority exists at the time of consumption.

## 15. Discovery Relationship Profile

Discovery Artifacts and Records must use M.3 relationships or M.8-governed specializations.

| Relationship | Discovery Requirement | M.3 / M.8 Treatment |
|:---|:---|:---|
| DISCOVERS | Links Discovery Artifact or Record to the Discovery Subject. | M.8 specialization of a directed semantic relationship if not present as an M.3 root. |
| DERIVES_FROM | Links derived Discovery content to source content. | M.3-derived relationship. |
| SUPPORTS | Links evidence to a claim candidate. | M.3 evidentiary support relationship. |
| PARTIALLY_SUPPORTS | Links partial evidence support. | M.8 specialization of SUPPORTS. |
| CONTRADICTS | Links conflicting evidence or claims. | M.3 contradiction relationship. |
| PRODUCES | Links Discovery Artifact to Record, projection, registry entry, or result it produces. | M.3 production relationship. |
| TRACES_TO | Links Discovery to source, evidence, validation, version, or downstream artifact. | M.3 traceability relationship. |
| REFERENCES | Links Discovery to non-authoritative references. | M.3 reference relationship. |
| PROJECTS_TO | Links Discovery Artifact to Discovery Graph Projection. | M.8 specialization constrained by STD-001. |
| REGISTERED_AS | Links Discovery Artifact to Discovery Registry Entry. | M.8 specialization; registry presence does not imply approval. |
| VALIDATED_BY | Links Discovery to Validation Result or profile. | M.3 validation relationship using M.9 semantics. |
| REVIEWED_BY | Links Discovery to review artifact or reviewer. | M.3/M.8 review relationship; review is not certification. |
| SUPERSEDES | Links newer Discovery version to historical version. | M.6 supersession relationship represented through M.3. |

## 16. Discovery Lifecycle and Status Profile

Lifecycle State, Validation Status, Review Status, Canonical Status, and Availability Status must be separate.

| Status Dimension | Allowed Discovery Values / Rules |
|:---|:---|
| Lifecycle State | Proposed, In Progress, Evidence Incomplete, Evidence Sufficient, Validation Ready, Validated, Review Ready, Accepted, Deprecated, Superseded, Archived, Rejected, Blocked. |
| Validation Status | Not Evaluated, Passed, Passed With Warnings, Failed, Blocked, Waived where permitted by M.9. |
| Review Status | Review Not Required, Review Required, In Review, Reviewed, Changes Requested, Review Blocked. |
| Canonical Status | Non-canonical, Candidate, Canonical only after separate governance promotion; acceptance does not imply canonical promotion. |
| Availability Status | Available, Limited, Deprecated, Archived, Unavailable, Historical. |

Evidence sufficiency does not imply validation. Validation does not imply acceptance. Acceptance does not imply canonical promotion. Blocked is not the same as Rejected. Supersession preserves historical traceability.

## 17. Discovery Graph Projection

Discovery graph projection consumes STD-001 and must not redefine graph representation semantics.

A Discovery Graph Projection must declare Discovery Projection Node, Discovery Projection Edge, Projection Scope, Projection Completeness, Projection Freshness, Projection Version, Projection Source, Projection Traceability, and Projection Validation. Projection Node and Projection Edge profiles follow STD-001 Graph Node and Graph Edge requirements while using M.2 identity and M.3 relationships.

Rules:

1. Discovery projection references the Discovery Artifact.
2. Projection does not become source truth.
3. Projection edges use M.3 and STD-001.
4. Projection scope must be explicit.
5. Partial projection must declare incompleteness.
6. Projection freshness must be explicit where relevant.
7. Projection version must not overwrite Discovery version.
8. Projection errors do not mutate the Discovery Artifact.
9. Historical projections remain distinguishable.
10. Traversal does not create Discovery claims.

## 18. Discovery Registry Profile

A Discovery Registry Entry is an index representation and not the Discovery Artifact identity. At minimum it must include Registry Entry Identifier, Represented Discovery Identifier, Discovery Version, Lifecycle State, Canonical Status, Availability Status, Source Reference, Graph Projection Reference, Validation Status, Registration Timestamp, and Registry Scope.

Boundaries: registry entry identity is not Discovery identity; Registry presence is not approval; registry indexing is not ownership; registry synchronization is not canonical promotion. STD-002 does not implement a registry.

## 19. Versioning and Conditional Compatibility

STD-002 distinguishes Discovery Model Version, Discovery Artifact Version, Discovery Record Profile Version, Discovery Schema Version, Discovery Projection Profile Version, Source Artifact version, Graph Projection version, and Registry Entry version. No version may overwrite another version's scope.

Material changes must classify compatibility as Non-breaking, Backward compatible, Forward compatible, Partially compatible, Conditionally compatible, Breaking, or Compatibility unknown where M.7 applies. Required compatibility declarations include compatibility scope, affected consumers, Migration Obligation, evidence, and historical preservation. STD-002 does not define migration execution procedures.

## 20. Discovery Extension Model

Discovery extensions consume M.8 and may include Discovery Classification Extension, Source-Type Extension, Evidence-Profile Extension, Relationship-Profile Extension, Graph-Projection Extension, Registry-Profile Extension, Validation-Profile Extension, and External Discovery Interoperability Profile.

Every extension must declare identity, namespace, upstream derivation, scope, authority, compatibility, schema binding, validation profile, and collision rules. Extensions must not redefine Meta, STD-000, STD-010, STD-001, or STD-002-owned Discovery requirements. Generic Target Adapter Discovery boundaries are permitted only as M.8-governed interoperability profiles and must not embed Target-specific truth.

## 21. Schema Binding

Discovery schema binding consumes M.9 and STD-010. A governed Discovery Artifact representation must declare schema binding, schema version, validation profile, validation scope, and any extension profile that changes structure or required fields. STD-002 may require Discovery-specific schema-binding fields but must not create JSON, YAML, database, or implementation schemas in this standard.

## 22. Discovery Validation Profile

The STD-002 Discovery Validation Profile consumes M.9 and includes Metadata Validation, Identity Validation, Subject Resolution, Source Resolution, Source Authority Validation, Scope Validation, Evidence Presence Validation, Evidence Sufficiency Binding Validation, Claim Binding Validation, Relationship Validation, Lifecycle Validation, Version Validation, Compatibility Validation where applicable, Graph Projection Validation, Registry Binding Validation, Schema Binding Validation, Extension Validation, Traceability Validation, and Gap Classification Validation.

Validation must not approve, certify, promote, create Finding authority, create Recommendation authority, or change source artifacts.

## 23. Discovery Conformance Model

A Discovery Artifact may claim conformance only relative to STD-002 version, Discovery profile, schema binding, validation profile, validation scope, result set, and evidence package. Conformance states consume M.9 and are Conformant, Conformant With Warnings, Conformant With Waivers, Non-Conformant, Not Evaluated, and Blocked.

Conformance must not be inferred from missing errors; it requires an explicit Validation Result and declared coverage.

## 24. Downstream Consumption Contract

Before using Discovery, a downstream consumer must inspect identity, version, scope, out of scope, subject, sources, evidence, limitations, gaps, claim bindings, lifecycle state, validation status, review status, canonical status, relationships, traceability, and compatibility declaration where applicable.

Consumption does not transfer ownership. Discovery does not force downstream action. A consumer must not treat a candidate claim as an approved Finding. A consumer must respect scope, limitations, gaps, and evidence status.

## 25. Prohibited Redefinitions

STD-002 must not define an alternate canonical meaning for Artifact, Identity, Relationship, Lifecycle, Evidence, Traceability, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, or Constraint. STD-002 must not redefine STD-010 field semantics or STD-001 graph representation semantics. Any local Discovery term that overlaps these concerns must be a Discovery profile, specialization, or requirement consuming the appropriate owner.

## 26. Information Preservation Matrix

| Existing Concept | Previous Role | New Disposition | Semantic Owner | STD-002 Role | Reason |
|:---|:---|:---|:---|:---|:---|
| Discovery as observation intake | Core Discovery purpose | KEEP DISCOVERY RULE | STD-002 | Preserve intake boundary. | Unique Discovery requirement. |
| Discovery as governed artifact | Artifact definition and Discovery ownership | SPECIALIZE META CONCEPT | M.1 | Define Discovery Artifact profile. | Artifact meaning moved to M.1. |
| Discovery identity | Local identity model | CONVERT TO META CONSUMPTION | M.2 / STD-010 | Require Discovery identifier fields and syntax triggers. | Prevent duplicate identity semantics. |
| Discovery relationships | Local relationship taxonomy | SPECIALIZE META CONCEPT | M.3 / M.8 | Require Discovery relationships and mappings. | Relationship meaning belongs to M.3. |
| Discovery lifecycle | Local state machine | SPECIALIZE META CONCEPT | M.4 | Define Discovery lifecycle profile and separated statuses. | Universal lifecycle semantics belong to M.4. |
| Discovery evidence and confidence | Local evidence/confidence models | SPECIALIZE META CONCEPT | M.5 | Define minimum evidence obligations and assessment profiles. | Evidence quality, confidence, freshness, and sufficiency belong to M.5. |
| Discovery traceability | Local traceability model | CONVERT TO META CONSUMPTION | M.5 / M.3 | Require traceability fields and relationships. | Traceability meaning belongs to M.5. |
| Discovery versioning and migration | Local version/migration model | SPECIALIZE META CONCEPT | M.6 / M.7 | Distinguish Discovery versions and declare compatibility obligations. | Versioning and compatibility semantics moved to Meta. |
| Discovery graph projection | Local graph projection rules | CONSUME STD-001 GRAPH RULE | STD-001 / M.3 | Define Discovery projection requirements. | Graph representation belongs to STD-001. |
| Discovery registry | Local registry concept | REWRITE FOR DISCOVERY BOUNDARY | M.2 / M.4 / STD-002 | Define registry entry expectations without approval implication. | Registry presence must not imply authority. |
| Discovery validation | Local validation rules | SPECIALIZE META CONCEPT | M.9 | Define Discovery Validation Profile. | Validation results and conformance semantics belong to M.9. |
| Discovery metadata schema | Local metadata schema | CONSUME STD-010 FIELD RULE | STD-010 / M.9 | Require Discovery metadata profile and schema binding. | Metadata fields belong to STD-010; no schema implementation created. |
| Discovery certification readiness | Local certification-adjacent content | REWRITE FOR DISCOVERY BOUNDARY | M.4 / M.9 / Governance | Preserve review-readiness while prohibiting certification by validation. | Avoid approval/certification drift. |
| AI-generated Discovery rules | AI-specific output rules | MERGE DUPLICATE DISCOVERY RULES | STD-002 / M.8 | Represent as source classes, extension boundaries, and validation requirements. | Preserve valid requirements without agent implementation rules. |
| Target-specific references | Active project references | REMOVE DUPLICATE SEMANTIC DEFINITION | Target Project governance, not STD-002 | Prohibit active Target contamination; retain only generic Target Adapter boundary. | Preserve AI-DOS Target independence. |
| Historical draft concepts | Prior draft evidence | RETAIN AS HISTORICAL CONTEXT | Historical reports | Captured by this matrix and alignment report. | Do not modify historical reports. |

## 27. Semantic Ownership Matrix

| Concern | Semantic Owner | STD-002 Ownership | Prohibited STD-002 Ownership |
|:---|:---|:---|:---|
| Artifact | M.1 | Discovery Artifact requirements. | Root Artifact meaning. |
| Discovery Artifact | STD-002 consuming M.1 | Discovery-specific artifact profile. | General artifact-family semantics. |
| Identity | M.2 | Discovery identifier requirements and syntax triggers. | Identity meaning, alias meaning, collision semantics. |
| Relationship | M.3 / M.8 | Required Discovery relationships and specializations. | Relationship meaning or graph-edge meaning. |
| Lifecycle | M.4 | Discovery lifecycle profile. | Universal lifecycle/status semantics. |
| Evidence | M.5 | Discovery evidence minimums and assessment profiles. | Evidence quality, provenance, freshness, confidence, sufficiency meanings. |
| Traceability | M.5 / M.3 | Required traceability fields and links. | Traceability root semantics. |
| Claim | M.5 / downstream standards | Discovery Claim candidate boundaries. | Approved claim or truth authority. |
| Finding Candidate | STD-002 boundary; downstream standards for promotion | Candidate-only Discovery output. | Canonical Finding authority. |
| Versioning | M.6 | Discovery version scopes. | Version meaning or supersession semantics. |
| Compatibility | M.7 | Conditional compatibility declarations for Discovery changes. | Compatibility meaning or migration execution. |
| Extension | M.8 | Discovery extension points and required declarations. | Extension semantics, plugin loading, adapter implementation. |
| Schema | M.9 / STD-010 | Discovery schema-binding requirements. | Schema meaning or implementation schema. |
| Validation | M.9 | Discovery-specific validation profile. | Alternate validation-result taxonomy. |
| Conformance | M.9 | Discovery conformance claim requirements. | Conformance meaning by absence of errors. |
| Graph Projection | STD-001 | Discovery projection requirements. | Graph representation, topology, traversal semantics. |
| Registry Entry | M.2 / M.4 / STD-002 | Discovery registry-entry expectations and boundaries. | Registry implementation or approval semantics. |
| Authority | M.0 / STD-000 / Governance | Discovery authority declarations. | Root authority semantics or governance approval. |
| Ownership | M.0 | Required owner fields for Discovery. | Ownership meaning or ownership transfer by consumption. |
| Boundary | M.0 | Discovery boundaries and prohibitions. | Universal boundary semantics. |
| Constraint | M.0 / STD-000 | Discovery-specific constraints. | Root constraint semantics. |

## 28. Validation Assertions

A Discovery Artifact is valid for STD-002 only when all applicable assertions pass or produce declared M.9 warnings, waivers, non-conformances, or blocked results:

1. Metadata Validation confirms required STD-010 fields are present.
2. Identity Validation confirms Discovery, Record, Source, Evidence, Projection, and Registry identifiers are scoped and traceable.
3. Subject Resolution confirms the Discovery Subject is identified or a Traceability Gap exists.
4. Source Resolution and Source Authority Validation confirm permitted source classes and authority declarations.
5. Scope Validation confirms Discovery Scope and Out of Scope are explicit.
6. Evidence Presence Validation and Evidence Sufficiency Binding Validation confirm evidence assessments and gaps.
7. Claim Binding Validation confirms candidate claims are not promoted.
8. Relationship Validation confirms M.3 relationships or M.8 specializations.
9. Lifecycle Validation confirms separated lifecycle, validation, review, canonical, and availability statuses.
10. Version Validation and Compatibility Validation confirm version scopes, compatibility scope, affected consumers, Migration Obligation, evidence, and historical preservation where applicable.
11. Graph Projection Validation confirms STD-001 consumption and projection boundaries.
12. Registry Binding Validation confirms Registry Entry Identifier boundaries and Registry presence non-approval.
13. Schema Binding Validation and Extension Validation confirm M.9 and M.8 consumption.
14. Traceability Validation and Gap Classification Validation confirm limitations and gaps remain visible to downstream consumers.

## 29. Completion and Governance Status

Completion statement:

```text
AI-DOS STD-002 META V1.1
ALIGNMENT COMPLETE
```

Final verdict: **PASS WITH OBSERVATIONS**.

Observation: STD-002 is aligned as a draft Discovery authority and remains non-canonical until Human Governance / Framework Governance review and promotion. Exactly one recommended next step is:

```text
FORGE-AI.V2.AI-DOS-STD-003-META-V1.1-ALIGNMENT-001
— ALIGN STD-003 CANONICAL TERMINOLOGY STANDARD
WITH THE ALIGNED STD-000, STD-010,
STD-001, AND STD-002 AUTHORITIES
AND THE M.0–M.9 META V1.1 SEMANTIC FAMILY
```

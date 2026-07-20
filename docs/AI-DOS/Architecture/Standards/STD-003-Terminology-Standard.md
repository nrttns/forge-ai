# STD-003 — Canonical Terminology Standard

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-003` |
| Title | STD-003 — Canonical Terminology Standard |
| Version | `5.0.0-draft` |
| Status | Draft; Human-Governed; Not certified; Not canonically promoted by this alignment |
| Classification | Framework Standard |
| Document Type | Canonical Terminology Standard |
| Owner | Framework Governance |
| Approval Authority | Human Governance / Framework Governance |
| Last Updated | 2026-07-14 |
| Scope | AI-DOS canonical term labels, terminology identifiers, approved aliases, deprecated aliases, forbidden synonyms, reserved terms, naming conventions, term-source attribution, authority references, historical terminology handling, terminology compatibility, terminology extensions, terminology validation, and AI terminology consumption rules. |
| Out of Scope | Semantic definitions owned by M.0-M.9, STD-000, STD-010, STD-001, or STD-002; implementation; schemas; validators; runtime behavior; engine behavior; Target Project planning; certification; approval; canonical promotion. |
| Normative Authority | Human Governance; A.1 Constitution; M.0-M.9 for semantic ownership; STD-000, STD-010, STD-001, and STD-002 for aligned domain-standard ownership. |
| Normative References | `docs/AI/Meta/README.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Meta/M.2-Identity-Meta-Model.md`; `docs/AI/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI/Meta/M.8-Extension-Meta-Model.md`; `docs/AI/Meta/M.9-Schema-Validation-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` |
| Consumes | Meta v1.1 semantic family and aligned Standards-family authorities. |
| Produces | Terminology records, label rules, alias governance, forbidden-synonym protections, reserved-term rules, historical mapping rules, terminology compatibility policy, terminology extension policy, terminology validation profile, and AI terminology rules. |

---

## 2. Purpose

STD-003 is the AI-DOS Canonical Terminology Standard. It defines what concepts are called, which aliases are permitted, which synonyms are forbidden, how terms are referenced, where authoritative definitions live, and how consumers must use the vocabulary.

STD-003 does not define reusable semantic meaning when an owning Meta model or aligned Standard exists. The owning Meta model or Standard defines what a concept means; STD-003 governs terminology used to refer to that concept.

## 3. Authority Position

STD-003 sits below Human Governance, constitutional authority, M.0-M.9, and the aligned domain Standards for semantic ownership. It remains above downstream consumers for vocabulary governance.

Rules:

- M.0-M.9 own AI-DOS semantic meanings in their stated domains.
- STD-000 owns Standards-family governance terms.
- STD-010 owns metadata field labels and metadata-profile terms.
- STD-001 owns Knowledge Graph representation terms.
- STD-002 owns Discovery domain terms.
- STD-003 owns canonical labels, aliases, forbidden synonyms, reserved terms, naming rules, source attribution, historical mappings, and terminology validation rules.
- STD-003 must not become the sole semantic owner of Artifact, Identity, Relationship, Lifecycle, Evidence, Traceability, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, Constraint, Discovery, or Knowledge Graph concepts.

## 4. Scope

In scope:

- canonical term labels;
- terminology-specific term identifiers;
- approved, deprecated, historical, contextual, display, and external aliases;
- forbidden synonyms and prohibited substitutions;
- reserved AI-DOS terminology;
- capitalization, singular/plural, hyphenation, abbreviation, acronym, display-label, technical-identifier, metadata-label, relationship-label, status-label, and version-label rules;
- authoritative source and semantic owner attribution;
- terminology record model and compact terminology registries;
- historical vocabulary traceability;
- terminology compatibility and migration obligations;
- terminology extension governance;
- terminology validation profile;
- AI terminology rules.

## 5. Out of Scope

Out of scope:

- reusable semantic definitions owned by M.0-M.9 or aligned Standards;
- direction, cardinality, transitivity, symmetry, inverse, authority effect, or semantic effect of relationships;
- lifecycle/status meanings, transition rules, evidence quality scales, compatibility criteria, extension implementation/loading, schema semantics, validation-result semantics, graph projection semantics, and Discovery domain semantics;
- Target Project planning vocabulary as reusable AI-DOS product truth;
- implementation, storage, APIs, registries, runtime, engine internals, tooling, schemas, validators, certification, approval, and canonical promotion.

## 6. Terminology Standard Responsibilities

STD-003 shall preserve one governed terminology layer by requiring every governed terminology record to separate Term Label, Term Identifier, Semantic Owner, Authoritative Definition Reference, Approved Aliases, Deprecated Aliases, Forbidden Synonyms, Usage Context, Scope, Status, Version, Historical Terms, and Validation Rules.

A short terminology gloss may be retained only when it is marked informative, does not conflict with the semantic owner, is sufficient only for navigation, and links to the authoritative definition.

## 7. Meta and Standards Consumption Model

| Semantic Owner | Consumed Terminology Concern | STD-003 Role |
|:---|:---|:---|
| M.0 | Framework root terms, Authority, Ownership, Boundary, Constraint | Govern labels and usage references. |
| M.1 | Artifact terms | Govern labels and protect Artifact ≠ Document. |
| M.2 | Identity, Identifier, Namespace, Alias, Canonical Reference | Govern label forms while consuming identity and alias semantics. |
| M.3 | Relationship, endpoint, direction, cardinality, inverse, transitivity | Govern relationship labels only. |
| M.4 | Lifecycle, status, transition, promotion, deprecation, archival | Govern status labels only. |
| M.5 | Evidence, source, claim binding, provenance, traceability, confidence | Govern evidence vocabulary labels only. |
| M.6 | Version, revision, lineage, supersession, replacement, migration | Govern versioning labels and historical references only. |
| M.7 | Compatibility, breaking change, partial/conditional compatibility | Govern compatibility labels only. |
| M.8 | Extension, extension point, namespace, registration, collision | Govern extension vocabulary labels only. |
| M.9 | Schema, validation, result, conformance, warning, waiver | Govern validation terminology labels only. |
| STD-000 | Standards-family governance terms | Govern consistent use of Standards terms. |
| STD-010 | Metadata field labels and profiles | Govern cross-document terminology references to metadata labels. |
| STD-001 | Knowledge Graph representation terms | Govern graph-term labels and forbidden substitutions. |
| STD-002 | Discovery domain terms | Govern Discovery-term labels and forbidden substitutions. |

## 8. Terminology Record Model

| Field | Classification | Rule |
|:---|:---|:---|
| Term Identifier | MANDATORY | Stable terminology identifier; not an Artifact Identifier. |
| Canonical Label | MANDATORY | Preferred display label for the term. |
| Semantic Owner | MANDATORY | Owning Meta model, Standard, external authority, or Target-owned source. |
| Authoritative Source | MANDATORY | File or authority where the definition lives. |
| Term Category | MANDATORY | Classification only; does not create semantic ownership. |
| Status | MANDATORY | Active, Deprecated, Historical, Reserved, External, or Proposed. |
| Scope | MANDATORY | AI-DOS-wide, domain, profile, historical, external, or Target-owned. |
| Definition Reference | MANDATORY | Pointer to authoritative definition; not a copied definition. |
| Approved Aliases | CONDITIONAL | Required when alternate labels are allowed. |
| Deprecated Aliases | CONDITIONAL | Required when legacy labels must remain traceable. |
| Forbidden Synonyms | CONDITIONAL | Required where ambiguity or authority confusion is likely. |
| Abbreviation / Acronym | CONDITIONAL | Required when an abbreviation or acronym is used. |
| Usage Rule | MANDATORY | How consumers must use the label. |
| Relationship to Related Terms | CONDITIONAL | Required when boundaries protect distinct concepts. |
| Version | MANDATORY | Terminology record version or governing document version. |
| Historical Mapping | CONDITIONAL | Required when replacing, deprecating, or preserving prior terms. |
| Validation Rule | MANDATORY | Machine or review check for terminology conformance. |
| Full Semantic Definition | PROHIBITED | Use the Definition Reference instead. |
| Display Rendering | DERIVED / DISPLAY-ONLY | May be generated from Canonical Label and context. |

## 9. Term Category Model

Term categories are terminology classifications only. They never create semantic ownership.

Required categories: Framework Term, Artifact Term, Identity Term, Relationship Term, Lifecycle Term, Evidence Term, Versioning Term, Compatibility Term, Extension Term, Schema and Validation Term, Standards Term, Metadata Term, Knowledge Graph Term, Discovery Term, Governance Term, Operational Term, External / Target-Owned Term, Historical Term.

## 10. Canonical Label Rules

- Capitalization: canonical labels use title case for display labels and the exact case required by the authoritative source for technical identifiers.
- Singular/plural: record canonical labels in singular form unless the owner defines a plural collective term.
- Hyphenation: preserve owner-approved hyphenation; do not introduce alternate hyphenation as a new term.
- Compound terms: preserve complete compound labels when dropping a modifier would collapse distinct concepts.
- Abbreviations and acronyms: an abbreviation or acronym is not a Canonical Label unless explicitly approved in the terminology record.
- Technical identifiers: relationship labels and machine labels use the owner-approved identifier form, such as uppercase snake case for relationship labels where applicable.
- Display labels: Display Label ≠ Semantic Identity.
- Canonical labels: Canonical Label ≠ Canonical Artifact.
- Term identifiers: Term Identifier ≠ Artifact Identifier.
- Aliases: Alias ≠ Equivalent Semantic Meaning unless M.2-resolved identity and owner reference are present.
- Metadata field labels: consume STD-010 and do not redefine field semantics.
- Relationship labels: consume M.3 and domain Standards for relationship meaning.
- Status labels: consume M.4 for lifecycle/status meaning.
- Version labels: consume M.6 for versioning meaning.

## 11. Term Identifier Rules

Term Identifiers identify terminology records only. They must be unique within the terminology registry, stable across label corrections, never reused after deprecation or archival, and distinct from Artifact Identifiers, graph node identifiers, registry entry identifiers, file paths, and metadata field names. Identifier collision consumes M.2 collision semantics.

## 12. Alias Model

| Alias Type | Rule |
|:---|:---|
| Approved Alias | Resolves to exactly one canonical term and one Semantic Owner. |
| Deprecated Alias | Preserved for traceability; prohibited for new normative use unless quoted as historical evidence. |
| Historical Alias | Searchable and traceable but inactive. |
| Contextual Alias | Allowed only in declared domain or profile. |
| Display Alias | Presentation-only label; cannot change identity or ownership. |
| External Alias | Marked external and not treated as AI-DOS authority. |

Alias rules:

1. Every alias must resolve to one canonical term.
2. An alias must not create a second semantic owner.
3. An alias may be context-restricted.
4. Deprecated aliases remain traceable.
5. Historical aliases must not be reused for unrelated concepts.
6. An alias must not silently change meaning across domains.
7. External aliases must be clearly marked external.
8. Aliases must consume M.2 semantics.

## 13. Forbidden Synonym Model

A forbidden synonym is required when a term creates ambiguity, collapses distinct concepts, implies incorrect authority, uses legacy ownership, confuses lifecycle with status, confuses validation with approval, confuses graph representation with source truth, confuses Discovery with Finding, or confuses Target planning with AI-DOS product truth.

Protected distinctions:

| Canonical Distinction | Forbidden Collapse |
|:---|:---|
| Artifact ≠ Document | Treating a document representation as the artifact meaning. |
| Identity ≠ Identifier | Treating symbolic representation as semantic identity. |
| Relationship ≠ Edge | Treating graph representation as root relationship semantics. |
| Lifecycle State ≠ Operational State | Treating runtime availability as lifecycle status. |
| Evidence ≠ Claim | Treating assertion as support proof. |
| Validation ≠ Review | Treating validation as human or governance review. |
| Review ≠ Approval | Treating review output as approval. |
| Approval ≠ Canonical Promotion | Treating approval as canonical status change. |
| Certification ≠ Canonicality | Treating certification as source-truth status. |
| Graph Node ≠ Artifact | Treating graph projection as artifact. |
| Discovery ≠ Finding | Treating intake as downstream finding. |
| Finding ≠ Recommendation | Treating observed issue as prescribed action. |
| Supersession ≠ Deletion | Treating replacement lineage as removal. |
| Registry Presence ≠ Approval | Treating registration as governance approval. |
| Target Project ≠ AI-DOS Product | Treating project vocabulary as reusable product truth. |

## 14. Reserved Term Model

Reserved terms may be used only according to their Semantic Owner and Authoritative Source. Reserved terms include canonical, certified, approved, validation, conformance, schema, artifact, identity, identifier, relationship, evidence, traceability, compatibility, extension, graph, discovery, registry, Target Project, AI-DOS Product, and all relationship labels listed in this Standard. Reserved-term misuse is a terminology validation failure, not an approval decision.

## 15. Framework and Artifact Terminology

| Term Identifier | Canonical Label | Semantic Owner | Authoritative Source | Term Category | Status | Scope | Definition Reference | Approved Aliases | Forbidden Synonyms | Usage Rule |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| TERM-FRAMEWORK | Framework | M.0 | M.0 | Framework Term | Active | AI-DOS | M.0 framework semantics | AI-DOS framework | product project | Use for AI-DOS framework context only. |
| TERM-AI-DOS-PRODUCT | AI-DOS Product | M.0 | M.0 | Framework Term | Active | AI-DOS | M.0 product semantics | AI-DOS | Target Project | Use for reusable product, not Forge AI project work. |
| TERM-ARTIFACT | Artifact | M.1 | M.1 | Artifact Term | Active | AI-DOS | M.1 Artifact semantics | governed artifact | document, file, page | Use only with M.1 meaning. |
| TERM-ARTIFACT-FAMILY | Artifact Family | M.1 | M.1 | Artifact Term | Active | AI-DOS | M.1 family semantics | family | folder | Use as artifact classification label. |
| TERM-ARTIFACT-TYPE | Artifact Type | M.1 | M.1 | Artifact Term | Active | AI-DOS | M.1 type semantics | type | document type when semantic type is intended | Use as M.1 specialization label. |
| TERM-ARTIFACT-INSTANCE | Artifact Instance | M.1 | M.1 | Artifact Term | Active | AI-DOS | M.1 instance semantics | instance | copy | Use for a particular governed artifact. |

## 16. Identity and Relationship Terminology

Identity terminology consumes M.2. Relationship terminology consumes M.3 and any owning domain Standard. STD-003 governs canonical labels, approved textual forms, forbidden alternatives, capitalization, identifier forms, usage contexts, and authoritative-source references only.

| Term Identifier | Canonical Label | Semantic Owner | Authoritative Source | Term Category | Approved Aliases | Forbidden Synonyms | Usage Rule |
|:---|:---|:---|:---|:---|:---|:---|:---|
| TERM-IDENTITY | Identity | M.2 | M.2 | Identity Term | stable identity | identifier, path, storage key | Use for semantic identity only. |
| TERM-IDENTIFIER | Identifier | M.2 | M.2 | Identity Term | ID when approved | identity | Use for symbolic representation only. |
| TERM-ALIAS | Alias | M.2 | M.2 | Identity Term | alternate label | equivalent semantic meaning | Use as governed pointer to canonical identity/term. |
| TERM-CANONICAL-REFERENCE | Canonical Reference | M.2 | M.2 | Identity Term | authoritative reference | canonical artifact | Use for owner-approved reference form. |
| TERM-RELATIONSHIP | Relationship | M.3 | M.3 | Relationship Term | relation | edge | Use for root relationship semantics only. |
| TERM-ENDPOINT | Endpoint | M.3 | M.3 | Relationship Term | relationship endpoint | node | Use for relationship participant. |

Relationship label registry:

| Canonical Label | Approved Textual Form | Semantic Owner | Authoritative Source | Usage Context | Forbidden Alternatives |
|:---|:---|:---|:---|:---|:---|
| GOVERNED_BY | governed by | M.3 / owning Standard | M.3 or domain Standard | Governance relationship label | controlled by when authority is implied |
| CONSUMES | consumes | M.3 / owning Standard | M.3 or domain Standard | Dependency/consumption label | uses when dependency meaning is unclear |
| DEPENDS_ON | depends on | M.3 / owning Standard | M.3 or domain Standard | Dependency label | references when dependency is meant |
| REFERENCES | references | M.3 / owning Standard | M.3 or domain Standard | Citation/reference label | depends on when dependency is meant |
| SPECIALIZES | specializes | M.3 / owning Standard | M.3 or domain Standard | Specialization label | extends when M.8 extension is meant |
| PRODUCES | produces | M.3 / owning Standard | M.3 or domain Standard | Output label | creates if authority is unclear |
| VALIDATES | validates | M.9 / M.3 | M.9 and M.3 | Validation relationship label | approves, reviews |
| REVIEWS | reviews | M.4 / M.3 | M.4 and M.3 | Review relationship label | approves, validates |
| CERTIFIES | certifies | M.4 / M.3 | M.4 and M.3 | Certification relationship label | canonizes |
| SUPERSEDES | supersedes | M.6 / M.3 | M.6 and M.3 | Version lineage label | deletes |
| SUPERSEDED_BY | superseded by | M.6 / M.3 | M.6 and M.3 | Inverse lineage label | deleted by |
| REPLACES | replaces | M.6 / M.3 | M.6 and M.3 | Replacement label | supersedes when owner distinguishes it |
| TRACES_TO | traces to | M.5 / M.3 | M.5 and M.3 | Traceability label | proves when evidence is not established |
| PROJECTS_TO | projects to | STD-001 / M.3 | STD-001 and M.3 | Graph projection label | equals |
| DISCOVERS | discovers | STD-002 / M.3 | STD-002 and M.3 | Discovery label | approves |
| DERIVES_FROM | derives from | M.3 / domain Standard | M.3 or domain Standard | Derivation label | copied from when derivation is semantic |
| SUPPORTS | supports | M.5 / M.3 | M.5 and M.3 | Evidence support label | proves |
| PARTIALLY_SUPPORTS | partially supports | M.5 / M.3 | M.5 and M.3 | Partial evidence support label | supports fully |
| CONTRADICTS | contradicts | M.5 / M.3 | M.5 and M.3 | Evidence conflict label | invalidates automatically |
| REGISTERED_AS | registered as | M.2 / M.8 / M.3 | M.2, M.8, M.3 | Registry/extension label | approved as |

## 17. Lifecycle and Status Terminology

Lifecycle and status labels consume M.4. STD-003 preserves distinctions among Lifecycle State, Validation Status, Review Status, Certification Status, Canonical Status, Availability Status, and Operational Status.

Canonical labels governed here: Proposed, Draft, Review Ready, Under Review, Revision Required, Validated, Approved, Canonical, Certified, Deprecated, Superseded, Archived, Historical, Rejected, Blocked, Available, Restricted, Unavailable.

Usage rules:

- Use owner-approved capitalization exactly.
- Do not infer Validation Status from Review Status.
- Do not infer Review Status from Approval.
- Do not infer Approval as Canonical Promotion.
- Do not infer Certification as Canonicality.
- Do not infer Availability Status as Lifecycle State.

## 18. Evidence and Traceability Terminology

Evidence terminology consumes M.5. STD-003 governs labels for Evidence, Evidence Item, Evidence Chain, Evidence Package, Evidence Source, Evidence Claim, Evidence Assertion, Provenance, Traceability, Freshness, Confidence, Validity, Sufficiency, Limitation, and Evidence Gap. STD-003 does not restate evidence quality scales or evidence rules.

Protected usage: Evidence ≠ Claim; Evidence Claim ≠ Approved Claim; Traceability ≠ proof by itself; Confidence labels must cite M.5 when used as semantic assessment.

## 19. Versioning and Compatibility Terminology

Versioning labels consume M.6: Version, Revision, Lineage, Supersession, Replacement, Amendment, Migration Obligation, Version Window, Version Range, Versioned Reference, Historical Reference.

Compatibility labels consume M.7: Backward Compatible, Forward Compatible, Partially Compatible, Conditionally Compatible, Breaking Change, Non-Breaking Change, Compatibility Claim, Compatibility Window, Compatibility Unknown.

Protected distinctions: Version ≠ Revision; Supersession ≠ Replacement; Amendment ≠ Silent Edit; Migration Obligation ≠ Migration Procedure. Compatibility criteria are not defined in STD-003.

## 20. Extension Terminology

Extension terminology consumes M.8. Governed labels: Extension, Extension Point, Extension Namespace, Extension Registration, Extension Profile, Extension Collision, Federated Extension, Target Adapter Extension. STD-003 does not define extension implementation, loading, execution, or registry mechanics.

## 21. Schema, Validation, and Conformance Terminology

Schema and validation terminology consumes M.9. Governed labels: Schema, Schema Binding, Validation, Validation Rule, Validation Assertion, Validation Result, Conformance, Non-Conformance, Warning, Waiver, Failure, Validation Profile, Validation Scope, Validation Coverage.

Protected distinctions: Validation Result ≠ Review Result; Conformance ≠ Approval; Warning ≠ Failure; Waiver ≠ Pass; Metadata Conformance ≠ Content Correctness.

## 22. Standards and Metadata Terminology

Standards-family terms consume STD-000. Metadata field labels and metadata-profile terms consume STD-010. STD-003 governs consistent references to Standards Term and Metadata Term labels and forbids using metadata field presence as semantic approval, certification, validation, or canonical promotion.

## 23. Knowledge Graph Terminology

Knowledge Graph terminology consumes STD-001. Governed labels: Graph Node, Graph Edge, Graph Projection, Graph View, Graph Snapshot, Graph Schema, Graph Validation Result, Represented Entity, Projection Scope, Projection Freshness, Traversal, Inverse Navigation, Transitive Closure.

Protected distinctions: Graph Node ≠ Semantic Entity; Graph Node ≠ Artifact; Graph Edge ≠ Root Relationship; Graph Projection ≠ Source of Truth; Traversal ≠ Relationship Creation.

## 24. Discovery Terminology

Discovery terminology consumes STD-002. Governed labels: Discovery Subject, Discovery Source, Discovery Observation, Discovery Record, Discovery Artifact, Discovery Claim, Discovery Evidence, Discovery Finding Candidate, Discovery Gap, Discovery Limitation, Discovery Graph Projection, Discovery Registry Entry, Discovery Validation Result.

Protected distinctions: Discovery Observation ≠ Evidence automatically; Discovery Claim ≠ Approved Claim; Discovery Finding Candidate ≠ Canonical Finding; Discovery Registry Entry ≠ Discovery Artifact; Discovery completion ≠ downstream action; Discovery ≠ Finding.

## 25. External and Target-Owned Terminology Boundary

Target Project documents and planning artifacts are not normative authority for reusable AI-DOS vocabulary. Terms such as Roadmap, Phase, Stage, Milestone, Queue, Sprint, and release schedule may appear only as generic external/project-planning vocabulary, not normative AI-DOS product terms, with semantic owner external to AI-DOS or constrained to Target-owned planning contexts.

Rules:

- Target Project ≠ AI-DOS Product.
- Target-owned vocabulary must be marked External / Target-Owned Term.
- Target Adapter vocabulary remains Target-owned unless introduced through M.8 extension governance.
- No document under a Target Project path may serve as semantic or terminology authority for reusable AI-DOS product vocabulary.
- Historical references to removed Target dependencies may appear only as evidence in reports or preservation matrices.

## 26. Historical Terminology Model

Each historical term record must include Historical Label, Current Canonical Label, Effective Version, Semantic Owner, Reason for Change, Compatibility Note, Migration Obligation where applicable, Allowed Historical Context, and Prohibited New Usage.

| Historical Label | Current Canonical Label | Effective Version | Semantic Owner | Reason for Change | Compatibility Note | Migration Obligation | Allowed Historical Context | Prohibited New Usage |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| Canonical Definition in STD-003 | Authoritative Definition Reference | 5.0.0-draft | Owning Meta or Standard | Remove duplicate semantic ownership | Non-breaking if references are followed | Update references to owner definitions | Historical reports | Defining reusable meanings in STD-003 |
| Document as Artifact | Artifact | 5.0.0-draft | M.1 | Preserve Artifact ≠ Document | Breaking if consumers equated terms | Replace with Artifact or document representation as context requires | Historical glossary text | Treating document as synonym for Artifact |
| Edge as Relationship | Relationship | 5.0.0-draft | M.3 / STD-001 for graph edge | Preserve Relationship ≠ Edge | Conditional based on graph context | Use Graph Edge for graph representation | Graph migration notes | Treating Edge as root relationship |
| Finding as Discovery | Discovery Finding Candidate | 5.0.0-draft | STD-002 | Preserve Discovery ≠ Finding | Non-breaking with explicit context | Mark as candidate until downstream promotion | Discovery audit history | Treating Discovery as canonical Finding |
| Target planning labels as product terms | External / Target-Owned Term | 5.0.0-draft | External or Target owner | Remove Target contamination | Breaking for product vocabulary misuse | Reclassify Roadmap, Phase, Stage, Milestone, Queue, Sprint as external/Target-owned | Target planning evidence | Normative AI-DOS product terminology |

Historical vocabulary remains searchable and traceable. It does not remain active terminology.

## 27. Terminology Compatibility and Migration

Terminology changes consume M.6 and M.7. Classifications:

- Label Correction;
- Alias Addition;
- Alias Deprecation;
- Non-Breaking Terminology Change;
- Conditionally Compatible Terminology Change;
- Breaking Terminology Change;
- Semantic Owner Change;
- Historical Migration.

Every terminology change must declare affected consumers, compatibility scope, evidence, migration obligation, and historical mapping. Changing a label must not silently change meaning. Changing Semantic Owner requires explicit governance review.

## 28. Terminology Extension Model

Terminology extensions consume M.8. Allowed extension classes: Domain Vocabulary Extension, Relationship Label Extension, Artifact-Type Vocabulary Extension, External Interoperability Vocabulary, Target Adapter Vocabulary, Historical Vocabulary Package.

Every extension must declare identity, namespace, semantic owner, upstream derivation, scope, authority, compatibility, validation profile, and collision rules. Target Adapter vocabulary remains Target-owned unless accepted through extension governance.

## 29. Terminology Validation Profile

The terminology validation profile consumes M.9 and validates:

- Term Identifier uniqueness;
- Canonical Label uniqueness within scope;
- Semantic Owner resolution;
- Authoritative Source resolution;
- Alias resolution;
- Alias collision;
- Forbidden Synonym usage;
- Reserved Term misuse;
- Capitalization;
- Hyphenation;
- Pluralization;
- Abbreviation declaration;
- Acronym declaration;
- Historical Mapping;
- Version reference;
- Relationship label alignment;
- Status label alignment;
- Target-independence boundary;
- Cross-standard terminology consistency.

Validation must not change semantic ownership, approve a term, promote a term to canonical status, rewrite the authoritative source, or create Target Project authority.

## 30. AI Terminology Rules

AI agents and automated consumers must:

1. Resolve terminology through STD-003.
2. Retrieve semantic meaning from the authoritative Meta or Standard owner.
3. Prefer canonical labels in generated artifacts.
4. Preserve approved aliases only when context requires them.
5. Avoid forbidden synonyms.
6. Flag unresolved terms.
7. Never infer semantic equivalence from lexical similarity.
8. Never treat capitalization differences as new semantic identity.
9. Never replace canonical labels silently.
10. Preserve historical terms only in historical contexts.
11. Distinguish Target-owned vocabulary from AI-DOS product terminology.
12. Avoid inventing new canonical terms without extension governance.
13. Cite semantic owners when introducing specialized terminology.
14. Preserve version and compatibility mappings during terminology migration.

## 31. Prohibited Semantic Ownership

STD-003 is prohibited from owning reusable semantic definitions for Artifact, Identity, Relationship, Lifecycle, Evidence, Traceability, Versioning, Compatibility, Extension, Schema, Validation, Conformance, Authority, Ownership, Boundary, Constraint, Discovery, and Knowledge Graph. STD-003 may own terminology records for these concepts only when the Semantic Owner and Authoritative Definition Reference point to the owning Meta model or Standard.

## 32. Information Preservation Matrix

| Existing Term / Section | Previous Role | New Disposition | Semantic Owner | STD-003 Role | Reason |
|:---|:---|:---|:---|:---|:---|
| Canonical Vocabulary | Glossary-style vocabulary | REWRITE AS TERMINOLOGY RECORD | M.0-M.9 / Standards | Govern labels and records | Avoid repetitive glossary and duplicate definitions. |
| Canonical Definitions | Local definitions | REMOVE DUPLICATE SEMANTIC DEFINITION | Owning Meta or Standard | Provide Definition Reference | Semantic owners define meaning. |
| Relationship Vocabulary | Mixed labels and semantics | CONVERT TO META CONSUMPTION | M.3 plus domain Standards | Govern relationship labels | Direction/cardinality/inverse remain owner-defined. |
| Authority Vocabulary | Local authority terms | CONVERT TO AUTHORITATIVE REFERENCE | M.0 / STD-000 | Govern labels | Authority semantics are not terminology-owned. |
| Lifecycle Vocabulary | Local status meanings | CONVERT TO META CONSUMPTION | M.4 | Govern status labels | Lifecycle/status meaning belongs to M.4. |
| Knowledge Vocabulary | Knowledge and graph terms | CONVERT TO ALIGNED STANDARD CONSUMPTION | STD-001 / M.0 | Govern graph labels | Graph representation is STD-001-owned. |
| Artifact Vocabulary | Artifact terms | CONVERT TO META CONSUMPTION | M.1 | Govern artifact labels | M.1 owns Artifact semantics. |
| Validation Vocabulary | Validation definitions | CONVERT TO META CONSUMPTION | M.9 | Govern validation labels | M.9 owns validation/conformance meanings. |
| Review Vocabulary | Review/approval distinctions | KEEP TERMINOLOGY RULE | M.4 / STD-000 | Protect forbidden synonyms | Review ≠ Approval. |
| Certification Vocabulary | Certification terms | CONVERT TO META CONSUMPTION | M.4 / STD-000 | Govern labels | Certification ≠ Canonicality. |
| Registry Vocabulary | Registry labels | CONVERT TO META CONSUMPTION | M.2 / M.8 / domain Standards | Govern labels | Registry Presence ≠ Approval. |
| Planning Vocabulary | Product-stage vocabulary sourced from Target planning | REMOVE TARGET CONTAMINATION | External / Target owner | Classify as external/Target-owned | Target planning is not AI-DOS product truth. |
| Runtime and Engine Vocabulary | Downstream implementation vocabulary | CLASSIFY AS EXTERNAL / TARGET-OWNED or downstream-owned | Downstream owner | Govern only if adopted as AI-DOS terminology | Avoid implementation semantics. |
| Legacy Vocabulary | Historical terms | RETAIN AS HISTORICAL TERM | Current owner | Govern historical mapping | Preserve traceability without active use. |
| AI Consumption Rules | AI usage requirements | KEEP TERMINOLOGY RULE | STD-003 | Govern terminology consumption | Required for automated consumers. |
| Quality Gates | Validation requirements | CONVERT TO META CONSUMPTION | M.9 | Terminology Validation Profile | Validation does not approve or promote terms. |

## 33. Semantic Ownership Matrix

| Terminology Concern | Semantic Owner | STD-003 Ownership | Prohibited STD-003 Ownership |
|:---|:---|:---|:---|
| Framework | M.0 | Labels, aliases, forbidden synonyms | Framework semantic definitions |
| Artifact | M.1 | Artifact labels and distinctions | Artifact meaning |
| Identity | M.2 | Identity labels and alias rules | Identity semantics |
| Relationship | M.3 | Relationship labels | Direction, cardinality, inverse, transitivity |
| Lifecycle | M.4 | Lifecycle labels | Lifecycle states and transitions |
| Status | M.4 | Status labels and distinctions | Status semantics |
| Evidence | M.5 | Evidence labels | Evidence quality or sufficiency semantics |
| Traceability | M.5 | Traceability label usage | Traceability meaning |
| Versioning | M.6 | Versioning labels | Version/revision/lineage semantics |
| Compatibility | M.7 | Compatibility labels | Compatibility criteria |
| Extension | M.8 | Extension labels | Extension implementation/loading |
| Schema | M.9 | Schema labels | Schema-binding semantics |
| Validation | M.9 | Validation labels | Validation result semantics |
| Conformance | M.9 | Conformance labels | Conformance meaning |
| Standards | STD-000 | Standards-term labels | Standards governance semantics |
| Metadata | STD-010 | Metadata-term labels | Metadata field semantics |
| Knowledge Graph | STD-001 | Graph labels and forbidden substitutions | Graph representation semantics |
| Discovery | STD-002 | Discovery labels and forbidden substitutions | Discovery domain semantics |
| External / Target Vocabulary | External or Target owner | Boundary classification | Product authority from Target planning |
| Historical Vocabulary | Current Semantic Owner | Historical mapping and prohibited new usage | Active semantic ownership from legacy labels |

## 34. Validation Assertions

- Every active term record has Term Identifier, Canonical Label, Semantic Owner, Authoritative Source, Term Category, Status, Scope, Definition Reference, Usage Rule, Version, and Validation Rule.
- Every approved alias resolves to exactly one canonical term.
- Every deprecated or historical alias has Historical Mapping.
- Every forbidden synonym protects a documented distinction.
- Every relationship label points to M.3 and the owning domain Standard when applicable.
- Every lifecycle or status label points to M.4.
- Every evidence or traceability label points to M.5.
- Every versioning label points to M.6.
- Every compatibility label points to M.7.
- Every extension label points to M.8.
- Every schema, validation, or conformance label points to M.9.
- Every Knowledge Graph label points to STD-001.
- Every Discovery label points to STD-002.
- Every Target-owned or external term is barred from becoming reusable AI-DOS product truth without extension governance.
- No validation assertion approves, certifies, freezes, or canonically promotes STD-003.

## 35. Completion and Governance Status

```text
AI-DOS STD-003 META V1.1
ALIGNMENT COMPLETE
```

Final verdict: **PASS WITH OBSERVATIONS**.

This completion statement means STD-003 has been aligned as a terminology-governance authority that consumes Meta v1.1 and aligned Standards-family semantic owners. It does not approve, certify, freeze, or canonically promote STD-003.

Exactly one recommended next step:

```text
FORGE-AI.V2.AI-DOS-STANDARDS-FAMILY-META-V1.1-CONSISTENCY-REVIEW-001
— REVIEW THE ALIGNED STD-000, STD-010,
STD-001, STD-002, AND STD-003 FAMILY
FOR META CONSUMPTION, CROSS-STANDARD CONSISTENCY,
INFORMATION PRESERVATION, AND TARGET INDEPENDENCE
```

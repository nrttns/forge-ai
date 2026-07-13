# M.6 — Versioning and Supersession Meta Model

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.META.VERSIONING.M6` |
| Title | M.6 — Versioning and Supersession Meta Model |
| Version | 1.0.0 |
| Status | Non-canonical; Human-Governed approval boundary |
| Classification | Enterprise Versioning and Supersession Semantic Authority |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Reusable AI-DOS version, revision, version identity, version reference, lineage, supersession, replacement, amendment, deprecation binding, migration-obligation, branch, merge, rollback, authority-binding, and version-claim semantics. |
| Out of Scope | release schedule, release train, deployment, package manager behavior, Git branching procedure, Git tags as semantic authority, CI/CD, source-control workflow, changelog format, roadmap, ProjectStatus, DevelopmentPhases, Target Project planning, runtime implementation, engine implementation, compatibility semantics, evidence semantics, and schema syntax. |

---

## 2. Purpose

M.6 defines reusable semantic meaning for versioning and supersession across AI-DOS. It defines meanings and invariants only. It does not define release management, deployment procedure, package publication, source-control workflow, product roadmap, project planning, tooling, or automation.

M.6 does not claim certification, canonical promotion, release readiness, or operational activation for itself or any versioned subject merely because this document exists.

---

## 3. Authority and Dependency Position

M.6 is an Enterprise Semantic Profile in the Meta family. It consumes:

- M.0 for Artifact, Semantic Entity, Authority, Ownership, Boundary, Constraint, and root framework meanings;
- M.1 only where versions bind to artifact families, artifact types, or artifact instances;
- M.2 for identity, aliases, canonical references, historical identity, collision rules, version-independent references, and version-specific references;
- M.3 for relationship form and relationship constraints;
- M.4 only for lifecycle effects of deprecation, supersession, replacement, archival, historical retention, promotion of a version, and revocation of a version.

M.6 does not create a normative dependency on M.5 because M.5 does not yet exist. M.6 does not consume M.7 because compatibility interpretation is deferred to M.7.

---

## 4. Scope

M.6 owns reusable semantics for Version, Revision, Version Scope, Version Identity, Version Lineage, Version Reference, Version Range, Immutable Version Reference, Mutable Draft Reference, Current Reference, Latest Reference, Historical Version Reference, Semantic Version, Model Version, Artifact Version, Schema Version, Contract Version, Document Revision, Amendment, Supersession, Replacement, Deprecation Binding, Migration Obligation, Migration Requirement, Migration Window, Version Branch, Version Merge, Rollback Reference, Version Authority Binding, and Version Claim.

---

## 5. Out of Scope

M.6 explicitly excludes:

- release schedule;
- release train;
- deployment;
- package manager behavior;
- Git branching procedure;
- Git tags as semantic authority;
- CI/CD;
- source-control workflow;
- changelog format;
- roadmap;
- ProjectStatus;
- DevelopmentPhases;
- Target Project planning;
- runtime implementation;
- engine implementation;
- compatibility semantics;
- evidence semantics;
- schema syntax.

---

## 6. Core Versioning Concepts

| Concept | Semantic Meaning |
|:---|:---|
| Version | A governed semantic instance of an entity, artifact, model, schema, contract, product, or document at a declared point in its lineage. |
| Revision | A tracked change within a version scope, often document-oriented or draft-oriented. |
| Version Scope | The boundary within which version values are unique and comparable. |
| Version Identity | The identity of one version-specific instance, distinct from semantic entity identity. |
| Version Lineage | The traceable chain of versions, revisions, branches, forks, merges, rollbacks, amendments, replacements, and supersessions. |
| Version Reference | A reference policy identifying one version, a range, a current version, a draft version, or a historical version. |
| Immutable Version Reference | A deterministic reference to a specific immutable or governed revision. |
| Mutable Draft Reference | A governed reference that may resolve differently over time. |
| Current Reference | A reference to the current authoritative version under a declared authority policy. |
| Latest Reference | A mutable reference to the most recent known version under a declared scope. |
| Version Claim | A claim about version validity, lineage, supersession, migration, or compatibility. |

---

## 7. Identity and Version Separation

Semantic Entity Identity is not Entity Version Identity.

Artifact identity remains stable across permitted versions. A version-specific reference identifies one immutable or governed revision of that artifact. A rename or move does not automatically create a new identity. A breaking semantic change may require a new identity when the owning identity profile says continuity is invalid.

### Identity Continuity Matrix

| Scenario | Semantic Entity Identity | Entity Version Identity | Rule |
|:---|:---|:---|:---|
| Ordinary revision | Preserved | New or updated revision identity | Lineage remains continuous. |
| Rename | Preserved unless M.2 identity profile says otherwise | Version identity may record the rename | File path does not define identity. |
| Move | Preserved unless M.2 identity profile says otherwise | Version identity may record the move | Repository moves do not rewrite lineage. |
| Breaking semantic change | Preserved only if continuity rules allow | New version identity required | Compatibility interpretation deferred to M.7. |
| Replacement | May change | New version identity likely | Authority must declare identity effect. |
| Supersession | Usually preserved within lineage | New successor version identity | Historical versions remain traceable. |

M.6 consumes M.2 identity semantics and does not redefine identity, aliases, canonical references, historical identity, collision rules, version-independent references, or version-specific references.

---

## 8. Version Categories

### Version Category Matrix

| Category | What Is Versioned | Uniqueness Scope | Mutable? | Externally Consumable? | Compatibility Participation | Migration May Be Required |
|:---|:---|:---|:---|:---|:---|:---|
| Product Version | AI-DOS product or product family | Product authority scope | Usually immutable once declared | Yes | M.7 interprets | Yes |
| Framework Version | Framework semantic set | Framework authority scope | Governed | Yes | M.7 interprets | Yes |
| Meta Model Version | One Meta authority | Meta document identity | Governed; exact references immutable | Yes | M.7 interprets | Yes |
| Artifact Version | Artifact instance or family | Artifact identity scope | Depends on profile | Yes when published | M.7 interprets | Yes |
| Schema Version | Schema artifact | Schema identity scope | Governed | Yes | M.7 interprets | Yes |
| Contract Version | Contract artifact | Contract identity scope | Governed | Yes | M.7 interprets | Yes |
| Document Revision | Document artifact | Document identity scope | Drafts mutable; accepted revisions governed | Sometimes | M.7 interprets if relevant | Sometimes |
| Draft Revision | Draft artifact | Draft identity scope | Mutable under profile | Usually limited | M.7 interprets if relevant | Rarely |
| Canonical Revision | Canonical artifact revision | Canonical authority scope | Immutable or tightly governed | Yes | M.7 interprets | Yes |
| Compatibility Version | Version used for compatibility declarations | Compatibility authority scope | Governed | Yes | M.7 owns interpretation | Yes |

---

## 9. Version Reference Model

### Version Reference Matrix

| Reference Type | Meaning | Rule |
|:---|:---|:---|
| Unversioned Reference | Refers to an entity without specifying version. | Must declare how current authoritative version is resolved. |
| Exact Version Reference | Refers to one deterministic version. | Must resolve deterministically. |
| Compatible Range Reference | Refers to a range asserted compatible. | Range interpretation belongs to M.7. |
| Current Canonical Reference | Refers to the current canonical version under authority policy. | Not identical to latest draft. |
| Latest Draft Reference | Refers to latest draft under a scope. | Must not be treated as immutable. |
| Historical Reference | Refers to a prior version or revision. | Must remain traceable. |
| Alias Reference | Refers through an alias governed by M.2. | Alias does not define version identity. |
| Superseded Reference | Refers to a version no longer current due to supersession. | Must remain traceable. |

Rules:

1. Normative dependencies should use an explicit reference policy.
2. `latest` must not be treated as immutable.
3. Historical evidence must preserve the version actually reviewed.
4. Exact-version references must resolve deterministically.
5. Unversioned references must declare how the current authoritative version is resolved.
6. Superseded references must remain traceable.
7. File paths do not define version identity.
8. Repository moves do not rewrite lineage.
9. Version numbers do not themselves grant canonicality or certification.
10. Version increment does not automatically imply compatibility.

---

## 10. Version Lineage

Version Lineage preserves ordered and non-linear version relationships. Branches, forks, merges, amendments, rollbacks, replacements, and supersessions must remain traceable and must not rewrite history.

M.6 consumes M.3 for SUPERSEDES, REPLACES, AMENDS, DERIVED_FROM, COMPATIBLE_WITH, MIGRATES_TO, FORKS_FROM, MERGES_FROM, and ROLLS_BACK_TO. M.6 defines versioning and lineage effects. M.3 remains the owner of general relationship form. M.7 will define compatibility meaning.

---

## 11. Supersession and Replacement

### Supersession Effect Matrix

| Relationship | Identity Continuity | Version Continuity | Canonical-Reference Effect | Consumer Effect | Historical-Reference Effect | Migration Effect | Lifecycle Effect | Authority Requirement |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| SUPERSEDES | Usually preserves identity | Continues lineage | May redirect current reference | Consumers may need to prefer successor | Prior version remains traceable | May create migration obligation | May mark prior current state historical or deprecated through M.4 | Required |
| REPLACES | May change identity | May begin new lineage | May redirect to different identity | Consumers may need review before adoption | Replaced subject remains traceable | Often required | May deprecate or archive prior subject through M.4 | Required |
| DEPRECATES | Preserves identity | Preserves lineage | Warns against future current use | Consumers should avoid new use | Historical references retained | May recommend migration | Deprecation effect through M.4 | Required |
| AMENDS | Preserves identity unless stated otherwise | Continues lineage | May update authoritative revision | Consumers may need to consume amended text | Pre-amendment remains traceable | Sometimes | May affect review/canonical status through M.4 | Required |
| DERIVED_FROM | Depends on profile | Records derivation | No automatic current-reference effect | Consumers must inspect derivation policy | Source remains traceable | Not automatic | None unless bound through M.4 | Required by profile |
| FORKS_FROM | May create new identity | Creates branch lineage | No automatic canonical effect | Consumers must distinguish fork | Source remains traceable | Not automatic | None unless bound through M.4 | Required by profile |
| MERGES_FROM | Usually preserves target identity | Integrates branch lineage | May update target current reference | Consumers may need review | Source branches remain traceable | Sometimes | May affect promotion through M.4 | Required |
| ROLLS_BACK_TO | Preserves identity | Creates governed reference to earlier valid version | May redirect current reference to earlier version | Consumers may need to revert consumption | Rolled-back-away versions remain traceable | Sometimes | May affect availability or canonical status through M.4 | Required |

Supersession does not necessarily change identity. Replacement may change identity. Amendment preserves identity unless explicitly stated otherwise. Deprecation warns against future consumption but does not erase history. Rollback creates a governed reference to an earlier valid version; it does not rewrite historical lineage. Historical versions remain traceable.

---

## 12. Amendment, Fork, Merge, and Rollback

Amendment modifies or augments a versioned subject under authority while preserving identity unless the identity profile says continuity is invalid. Fork creates a divergent lineage and may create a new identity. Merge joins lineage branches under a declared authority and does not erase branch history. Rollback establishes a governed reference to an earlier valid version and never rewrites historical lineage.

---

## 13. Migration-Obligation Semantics

Migration obligations are semantic classifications, not project tasks, schedules, queues, milestones, or plans.

### Migration Obligation Matrix

| Classification | Meaning |
|:---|:---|
| No Migration Required | Consumers may continue without transformation under declared boundaries. |
| Migration Recommended | Migration is advisable but not semantically mandatory. |
| Migration Required | Consumers must migrate to remain conformant under the authority policy. |
| Migration Blocked | Migration cannot proceed until a blocking semantic condition is resolved. |
| Migration Deferred by Governance | Governance has deferred migration obligation timing or applicability. |
| Migration Completed | The declared transformation or review boundary has been completed. |
| Migration Verified | Completion has been validated according to downstream validation authority. |

A migration obligation must identify source version, target version, affected consumers, required transformation or review boundary, authority binding, validation requirement, and compatibility status when M.7 exists.

---

## 14. Lifecycle Bindings

M.6 consumes M.4 only for lifecycle effects of deprecation, supersession, replacement, archival, historical retention, promotion of a version, and revocation of a version. M.6 must not define lifecycle profiles or lifecycle state machines.

### Lifecycle / Version Boundary Matrix

| Versioning Concern | M.6 Ownership | M.4 Consumption |
|:---|:---|:---|
| Supersession | Lineage and successor semantics. | Lifecycle and historical classification effect. |
| Replacement | Identity/version continuity and consumer effect. | Deprecation or archival effect. |
| Deprecation Binding | Versioned deprecation relationship. | Deprecation status effect. |
| Version Promotion | Version-reference and authority-binding effect. | Promotion status semantics. |
| Version Revocation | Version-reference and lineage effect. | Revoked certification or lifecycle effect. |
| Historical Retention | Version traceability. | Historical classification. |

---

## 15. Conditional Evidence Boundary

M.6 does not define Evidence.

Claims such as compatibility, migration completion, version validity, lineage integrity, or supersession acceptance may require evidence.

After M.5 becomes an approved Meta authority, such claims must consume M.5 evidence semantics.

This statement is conditional and does not create a normative file dependency on a nonexistent M.5 artifact.

---

## 16. Compatibility Boundary

M.6 does not define compatibility semantics. M.6 may identify that a version category, version reference, version range, migration obligation, or version claim participates in compatibility analysis. M.7 will own compatibility interpretation, compatibility status, compatibility claim semantics, and compatibility evidence requirements after approval.

---

## 17. Downstream Specialization Rules

Downstream domains may define version profiles, numbering conventions, publication rules, migration procedures, or implementation mechanisms only if they preserve M.6 semantic meanings and do not redefine identity, relationship form, lifecycle effects, evidence semantics, or compatibility semantics.

### Downstream Consumer Matrix

| Consumer | Permitted Use | Not Permitted |
|:---|:---|:---|
| Standards | Define standard-specific version policies. | Treat version number as certification. |
| Runtime | Bind runtime contract versions. | Define deployment procedure in M.6. |
| Engines | Bind engine contract versions. | Treat Git tags as semantic authority. |
| Agents | Bind agent architecture versions. | Redefine lineage semantics. |
| Commands | Bind command artifact versions. | Define command release process in M.6. |
| Workflows | Bind workflow artifact versions. | Define workflow execution or schedules in M.6. |
| Templates | Bind template revisions. | Redefine identity through paths. |
| Registries | Resolve version references. | Use registry storage keys as version identity. |

---

## 18. Semantic Invariants

1. Human Governance remains final.
2. Meta defines meanings, not actual authority assignments.
3. Consumption does not create ownership.
4. Production does not imply approval.
5. Validation does not imply review.
6. Review does not imply certification.
7. Certification does not imply canonical promotion.
8. Version does not imply status.
9. Status does not imply authority.
10. Canonicality does not imply runtime activation.
11. Supersession does not destroy historical evidence.
12. Representation or file path does not define identity.
13. Target Project planning is outside AI-DOS Meta ownership.
14. Downstream domains may specialize but may not redefine Meta semantics.

### Semantic Ownership Matrix

| Concern | Owner |
|:---|:---|
| Framework root meanings | M.0 |
| Artifact bindings | M.1 |
| Identity | M.2 |
| Relationship form | M.3 |
| Lifecycle and status | M.4 |
| Evidence | Deferred to M.5 |
| Versioning, lineage, supersession, replacement, migration obligation, version reference | M.6 |
| Compatibility | Deferred to M.7 |

---

## 19. Consumer Matrix

| Consumer Class | M.6 Consumption Requirement |
|:---|:---|
| Artifact-producing domains | Use M.6 when defining artifact versions, revisions, or version references. |
| Dependency-declaring domains | Declare exact, range, current, latest, historical, alias, or superseded reference policy. |
| Registry domains | Preserve identity/version separation and deterministic resolution policy. |
| Migration domains | Treat migration classifications as semantic obligations, not project schedules. |
| Historical domains | Preserve reviewed version and lineage traceability. |

---

## 20. Validation Assertions

### Validation Matrix

| Assertion | Expected Result |
|:---|:---|
| M.6 consumes M.4 only for lifecycle effects. | Pass. |
| M.6 does not define lifecycle profiles or lifecycle state machines. | Pass. |
| M.6 does not create a normative dependency on nonexistent M.5. | Pass. |
| M.6 defers compatibility interpretation to M.7. | Pass. |
| Version, revision, lifecycle state, status, and compatibility remain separate axes. | Pass. |
| Release schedule and Target Project planning terms appear only as out-of-scope prohibitions. | Pass. |

---

## 21. Information Preservation

### Information Preservation Matrix

| Information | Preservation Rule |
|:---|:---|
| Semantic identity | Versioning does not erase M.2 identity. |
| Version identity | Exact-version references remain deterministic. |
| Lineage | Supersession, replacement, amendment, fork, merge, and rollback remain traceable. |
| Historical references | Prior versions remain resolvable or explicitly historically classified. |
| Reviewed version | Historical evidence preserves the version actually reviewed. |
| Repository location | File paths and repository moves do not define or rewrite identity. |

---

## 22. Completion Status

AI-DOS M.6 VERSIONING AND SUPERSESSION META MODEL DEFINED.

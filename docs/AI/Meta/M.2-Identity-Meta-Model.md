# M.2 — Identity Meta Model

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-M.2` |
| Title | M.2 — Identity Meta Model |
| Version | 1.0.0 |
| Status | Canonical Semantic Foundation |
| Classification | Identity Semantic Model |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Reusable AI-DOS identity semantics derived from M.0 and consumable by M.1 artifact bindings and downstream domains. |
| Out of Scope | Implementation identifiers, storage keys, runtime identifiers, engine identifiers, agent procedures, command execution, workflow execution, templates, database design, filesystem design, session handling, and Target Project concepts. |

---

## 1. Purpose

M.2 defines reusable identity semantics for AI-DOS.

M.0 establishes the framework semantic root and defines Semantic Entity, Artifact, Boundary, Authority, Ownership, Relationship, Constraint, and Validation as reusable framework meanings. M.1 defines artifact identity binding as an artifact-specific binding to identity information. M.2 specializes these upstream meanings by defining what identity means across AI-DOS without redefining framework root concepts or artifact semantics.

M.2 defines semantic meaning only. It does not define storage, identifier generation, runtime behavior, engine behavior, procedures, tooling, registries, schemas, file naming rules, database keys, network addresses, or implementation mechanisms.

---

## 2. Scope

M.2 owns reusable semantics for:

- Identity;
- Identifier;
- Identity Scope;
- Canonical Identity;
- Alias;
- Historical Identity;
- Identity Persistence;
- Identity Lifetime;
- Identity Stability;
- Identity Collision;
- Identity Namespace;
- Identity Resolution;
- External Identity;
- Version-independent Identity;
- Version-specific Identity;
- Registry Identity;
- Semantic Identity;
- Identity Equivalence;
- Identity Invariants.

M.2 also defines semantic rules for identity lifecycle, uniqueness, namespace boundaries, collision handling, aliases, rename interpretation, move interpretation, historical reference preservation, immutable identity, and canonical reference semantics.

---

## 3. Out of Scope

M.2 does not own:

- runtime ids;
- database ids;
- session ids;
- filesystem ids;
- implementation ids;
- generated keys;
- memory addresses;
- process ids;
- network addresses;
- storage paths;
- repository paths;
- file names;
- user account identifiers;
- authentication identifiers;
- authorization permissions;
- registry implementation;
- identifier generation algorithms;
- collision detection tooling;
- migration procedure;
- runtime behavior;
- engine behavior;
- agent procedure;
- workflow ordering;
- command syntax;
- template content.

A downstream domain may bind its own representations to M.2 identity semantics, but the representation is not the identity itself.

---

## 4. Governing Authority

M.2 consumes only:

- Human Governance;
- constitutional authority;
- M.0 Framework Meta Model;
- M.1 Artifact Meta Model for artifact binding context only.

M.2 specializes M.0. It does not replace M.0. M.2 informs M.1 artifact identity bindings without becoming artifact classification, artifact representation, artifact discovery implementation, or artifact storage design.

---

## 5. Semantic Responsibility

M.2 is the single AI-DOS semantic owner of identity meaning.

Identity is the semantic continuity by which a Semantic Entity can be recognized, referenced, distinguished, preserved, compared, renamed, moved, versioned, aliased, resolved, and related without losing its intended meaning.

M.2 is responsible for ensuring that identity remains stable enough for safe reference while remaining bounded by explicit authority, namespace, scope, lifetime, and invariants.

---

## 6. Core Definitions

### 6.1 Identity

**Identity** is the semantic continuity of a meaning-bearing entity across references, representations, names, locations, versions, and historical records.

Identity answers which entity is meant. It is not the same as a label, path, storage key, visible title, or implementation handle.

### 6.2 Identifier

An **Identifier** is a reference token or expression used to denote an identity within a defined Identity Scope and Identity Namespace.

An Identifier is valid only when its scope, namespace, intended entity, and resolution rules are known.

### 6.3 Identity Scope

**Identity Scope** is the boundary within which an identity assertion is meaningful, unique, resolvable, and governed.

Identity Scope may be product-wide, family-specific, domain-specific, artifact-specific, external, historical, or otherwise bounded by authority.

### 6.4 Canonical Identity

**Canonical Identity** is the authoritative identity selected for current reference when multiple identifiers, aliases, historical names, or external references can denote the same entity.

Canonical Identity provides the preferred semantic reference. It does not erase aliases or historical identities.

### 6.5 Alias

An **Alias** is an alternate identifier or name that intentionally resolves to a canonical or otherwise governed identity.

Aliases support recognition and continuity. They do not create a separate identity unless authority explicitly declares a distinct entity.

### 6.6 Historical Identity

**Historical Identity** is identity information preserved to maintain traceability to a prior name, identifier, location, version, or reference form.

Historical Identity supports interpretation of past references. It does not automatically govern current canonical reference.

### 6.7 Identity Persistence

**Identity Persistence** is the semantic expectation that identity remains recognizable across allowed changes.

Persistence may survive rename, move, representation change, metadata change, or version evolution when invariants are preserved.

### 6.8 Identity Lifetime

**Identity Lifetime** is the interval or condition set during which an identity remains valid, current, historical, deprecated, superseded, or retired.

Lifetime is semantic status, not runtime duration or storage retention policy.

### 6.9 Identity Stability

**Identity Stability** is the degree to which identity remains unchanged under authorized evolution.

Stable identity supports reliable reference, comparison, validation, relationship interpretation, and historical traceability.

### 6.10 Identity Collision

An **Identity Collision** occurs when two or more entities claim the same identifier, canonical reference, namespace position, or equivalence meaning within the same Identity Scope without valid authority.

A collision is a semantic conflict requiring resolution before safe consumption.

### 6.11 Identity Namespace

An **Identity Namespace** is a bounded naming and reference space in which identifiers are interpreted.

Namespaces prevent ambiguity by defining where an identifier is valid, who governs it, and how uniqueness is assessed.

### 6.12 Identity Resolution

**Identity Resolution** is the semantic determination of which identity a reference denotes under a scope, namespace, authority, and evidence.

Resolution may return a canonical identity, an alias target, a historical identity, an external identity, an unresolved identity, or an invalid identity claim.

### 6.13 External Identity

**External Identity** is identity assigned or governed outside AI-DOS and referenced by AI-DOS without becoming AI-DOS-owned identity authority.

External Identity must retain source authority, scope, and boundary information.

### 6.14 Version-independent Identity

**Version-independent Identity** identifies the continuing entity across versions.

It supports stable reference to the entity as a whole without selecting a specific version.

### 6.15 Version-specific Identity

**Version-specific Identity** identifies a particular version of an entity.

It supports precise reference where version-sensitive interpretation is required.

### 6.16 Registry Identity

**Registry Identity** is identity as represented in a governed registry or catalog.

M.2 defines the semantic meaning of registry identity only. It does not define registry storage, registry schemas, registry tooling, or registry operation.

### 6.17 Semantic Identity

**Semantic Identity** is identity based on meaning and governed invariants rather than on representation, location, formatting, or implementation details.

Semantic Identity is preserved when meaning-preserving changes occur.

### 6.18 Identity Equivalence

**Identity Equivalence** is a governed assertion that two or more identity references denote the same semantic entity within stated scope and constraints.

Equivalence must not be inferred from similar names, paths, titles, formats, or representations alone.

### 6.19 Identity Invariants

**Identity Invariants** are the conditions that must remain true for an identity to continue denoting the same semantic entity.

Invariants may include canonical reference, owning authority, scope, namespace, purpose, entity kind, historical continuity, and explicit equivalence rules.

---

## 7. Ownership Rules

1. M.2 owns reusable identity semantics for AI-DOS.
2. No downstream document may redefine Identity, Identifier, Alias, Identity Namespace, Identity Resolution, Identity Collision, Identity Equivalence, or Identity Invariants.
3. M.0 remains owner of root framework concepts consumed by identity semantics.
4. M.1 remains owner of artifact identity binding as an artifact-specific binding concept.
5. Downstream domains may define domain-specific identity policies only by consuming M.2 meanings.
6. A representation may carry an identifier, but representation does not own identity semantics.
7. A registry may record identity, but registry mechanics do not own identity meaning.
8. An external authority may own external identity; AI-DOS must preserve the external boundary when consuming it.

---

## 8. Consumer Rules

Consumers of M.2 must:

- preserve canonical identity when referencing entities;
- declare the relevant Identity Scope and Identity Namespace when identity ambiguity is possible;
- treat aliases as alternate references, not replacement identities;
- preserve historical references when renames, moves, or canonical changes occur;
- distinguish version-independent identity from version-specific identity;
- treat identity collisions as semantic conflicts;
- preserve external identity authority when referencing external sources;
- avoid inferring equivalence without governed evidence;
- consume identity meanings without defining storage, runtime behavior, engine behavior, procedures, tooling, or automation.

---

## 9. Non-Goals

M.2 does not attempt to:

- create an identifier format;
- create schemas, JSON, or YAML;
- define registries or catalogs;
- define file layout;
- define runtime ids;
- define database keys;
- define session management;
- define engine execution;
- define agent procedures;
- define workflow ordering;
- define command syntax;
- define template structure;
- define operational automation.

---

## 10. Semantic Invariants

1. Identity must be interpreted within an explicit or inferable Identity Scope.
2. Identifier uniqueness applies only within the relevant Identity Namespace and Identity Scope.
3. Canonical Identity must be governed by authority.
4. Alias resolution must preserve the canonical identity or explicitly identify an unresolved or invalid condition.
5. Historical Identity must preserve enough information to interpret prior references.
6. Rename semantics preserve identity when Identity Invariants remain true and authority recognizes continuity.
7. Move semantics preserve identity when the semantic entity remains the same and location is not an invariant.
8. Immutable identity must not be reassigned to a different semantic entity.
9. Version-independent identity and version-specific identity must not be collapsed without explicit equivalence rules.
10. Identity Collision must be resolved before authoritative consumption.
11. External Identity must retain external authority and boundary context.
12. Identity Equivalence must be governed, scoped, and evidence-supported.

---

## 11. Boundary Rules

### 11.1 Uniqueness

Uniqueness means one identifier denotes one identity within a declared Identity Namespace and Identity Scope.

Uniqueness outside that boundary must not be assumed.

### 11.2 Namespace Rules

An Identity Namespace must state or imply:

- governing authority;
- valid identifier boundary;
- uniqueness expectations;
- resolution expectations;
- collision handling responsibility;
- relationship to external namespaces when applicable.

### 11.3 Collision Rules

A collision exists when identity claims cannot all be true under the same scope and namespace.

Collision resolution must preserve evidence, authority, affected references, historical identity, and any invalidated identity claims.

### 11.4 Alias Rules

Aliases must resolve through governed identity semantics. An alias must not silently replace canonical identity, erase history, or create equivalence outside its declared scope.

### 11.5 Rename Semantics

A rename changes a name or identifier expression. It does not change identity when the same semantic entity persists and its Identity Invariants are preserved.

A rename must preserve historical reference information when prior references remain relevant.

### 11.6 Move Semantics

A move changes location, container, representation position, or organizational placement. It does not change identity unless location or containment is an explicit Identity Invariant.

### 11.7 Historical References

Historical references must remain interpretable as historical, superseded, deprecated, redirected, or invalid. Historical references must not be erased by canonical identity updates.

### 11.8 Immutable Identity

Immutable identity, once assigned under authority, must never be reassigned to a different semantic entity.

### 11.9 Canonical Reference Semantics

A canonical reference is the preferred current identity reference under authority. It must be stable enough for downstream use and traceable to aliases, historical identities, external identities, and version identities when applicable.

---

## 12. Downstream Consumers

M.2 is consumed by:

- Constitution;
- Standards;
- Runtime specifications;
- Engine specifications;
- Agents;
- Commands;
- Workflows;
- Templates;
- Operational Core;
- artifact discovery and consumption domains;
- validation and review domains;
- knowledge and registry domains;
- future AI-DOS extension domains.

These consumers use identity semantics. They do not become identity semantic authority.

---

## 13. Information Preservation

| Category | Concepts | Disposition | Reason |
|:---|:---|:---|:---|
| Preserved | Identity, Identifier, Identity Scope, Identity Namespace, Canonical Identity. | Owned by M.2. | Required for stable reference and uniqueness. |
| Preserved | Alias, Historical Identity, Identity Persistence, Identity Lifetime, Identity Stability. | Owned by M.2. | Required for continuity across change. |
| Preserved | Identity Collision, Identity Resolution, Identity Equivalence, Identity Invariants. | Owned by M.2. | Required for safe interpretation and validation. |
| Preserved | External Identity, Registry Identity, Semantic Identity. | Owned by M.2 as semantics only. | Required for bounded use of external and cataloged references. |
| Preserved | Version-independent Identity and Version-specific Identity. | Owned by M.2. | Required to distinguish continuing entity reference from precise version reference. |
| Consumed | Semantic Entity, Artifact, Boundary, Authority, Ownership, Relationship, Constraint, Validation. | Owned upstream by M.0. | M.2 specializes identity without redefining root concepts. |
| Consumed | Artifact Identity Binding. | Owned by M.1. | Artifacts bind to M.2 identity meanings. |
| Excluded | Runtime ids, database ids, session ids, filesystem ids, implementation ids. | Not owned by M.2. | These are representation or implementation concerns. |

---

## 14. Validation

| Validation | Result | Evidence |
|:---|:---|:---|
| Single identity authority | Pass | M.2 owns identity semantics and prohibits downstream redefinition. |
| No duplicate M.0 ownership | Pass | M.2 consumes M.0 root concepts and specializes identity only. |
| No duplicate M.1 ownership | Pass | M.1 owns artifact identity binding; M.2 owns identity meaning. |
| No Target Project dependency | Pass | M.2 consumes only Human Governance, constitutional authority, M.0, and M.1 binding context. |
| No runtime ownership | Pass | M.2 excludes runtime ids and runtime behavior. |
| No engine ownership | Pass | M.2 excludes engine behavior and engine identifiers. |
| No agent procedure ownership | Pass | M.2 excludes agent procedures. |
| Semantic completeness | Pass | Required identity concepts and identity boundary rules are defined. |

---

## 15. Completion Status

AI-DOS M.2 IDENTITY META MODEL COMPLETE.

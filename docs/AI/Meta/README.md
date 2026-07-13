# AI-DOS Meta Family

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-META-README` |
| Title | AI-DOS Meta Family |
| Version | 1.0.0 |
| Status | Canonical Semantic Foundation |
| Classification | Meta Family Entry |
| Document Type | Family Entry |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Meta Family purpose, responsibilities, reading order, authority boundaries, downstream consumers, and family overview. |
| Out of Scope | Runtime design, engine design, workflows, commands, templates, Target Project planning, implementation, and operational procedures. |

---

## 1. Purpose

The Meta Family defines the semantic foundation of AI-DOS.

AI-DOS is a reusable framework product. The Meta Family establishes the meanings that every AI-DOS domain consumes before defining its own specialized structures, standards, runtime contracts, engine contracts, agent contracts, commands, workflows, templates, or operational artifacts.

The Meta Family is not an implementation layer. It defines what AI-DOS concepts mean, not how they are executed, stored, automated, rendered, invoked, or planned.

---

## 2. Family Responsibilities

The Meta Family is responsible for:

- defining reusable AI-DOS semantic foundations;
- separating framework semantics from artifact semantics;
- preserving Target Project independence;
- preventing downstream domains from redefining foundational meanings;
- providing stable vocabulary for downstream AI-DOS domains;
- identifying semantic ownership boundaries between Meta artifacts;
- enabling consistent consumption by governance, standards, runtime, engines, agents, commands, workflows, templates, and operational documents.

The Meta Family is not responsible for:

- implementation design;
- runtime execution;
- engine execution;
- workflow execution;
- command execution;
- template content;
- project planning;
- Target Project status;
- Target Project authority;
- migration plans;
- development sequencing.

---

## 3. Reading Order

Read the Meta Core first:

1. `README.md` — family entry, scope, authority boundary, dependency model, and reading guidance.
2. `M.0-Framework-Meta-Model.md` — framework semantic root and reusable AI-DOS meanings.
3. `M.1-Artifact-Meta-Model.md` — artifact semantics derived from M.0 without redefining M.0 concepts.
4. `M.2-Identity-Meta-Model.md` — identity semantics derived from M.0 and consumed by artifact bindings and downstream domains.
5. `M.3-Relationship-Meta-Model.md` — relationship semantics derived from M.0, informed by M.2 endpoint identity, and consumed by artifact bindings and downstream domains.

Then read Enterprise Semantic Profiles selectively according to the semantic concern in use:

- `M.4-Lifecycle-and-Status-Meta-Model.md` when lifecycle, status, transition, promotion, deprecation, archival, historical classification, canonical status, validation status, review status, certification status, availability status, or operational status binding semantics are applicable.
- `M.5-Evidence-and-Traceability-Meta-Model.md` when evidence, evidence claims, assertions, sources, references, links, chains, graphs, collections, snapshots, version bindings, scope, confidence, trust, quality, freshness, completeness, integrity, authenticity, provenance, lineage, traceability, dependencies, consumers, producers, requirements, obligations, or validation-binding semantics are applicable.
- `M.6-Versioning-and-Supersession-Meta-Model.md` when versioning, revision, version reference, lineage, supersession, replacement, amendment, rollback, migration-obligation, or version-claim semantics are applicable.
- `M.7-Compatibility-Meta-Model.md` when compatibility, compatibility claims, scopes, categories, profiles, matrices, rules, contracts, boundaries, constraints, requirements, exceptions, breaking changes, non-breaking changes, behavioral compatibility, structural compatibility, semantic compatibility, version compatibility, artifact compatibility, interface compatibility, schema compatibility, contract compatibility, runtime compatibility semantics, or engine compatibility semantics are applicable.

The approved dependency model is a governed DAG, not a mandatory linear chain. Numbering identifies family position and stable reference names; numbering does not mean that every later Meta authority depends on every lower-numbered authority.

M.5 Evidence and M.7 Compatibility are implemented Enterprise Semantic Profiles. No placeholder files are registered for M.8 or M.9.

---

## 4. Authority Boundaries

The Meta Family consumes only:

- Human Governance;
- constitutional authority.

The Meta Family does not consume Target Project authority, Target Project planning, runtime design, engine design, agent procedures, commands, workflows, templates, or implementation details.

M.0 owns framework semantics.

M.1 owns artifact semantics.

M.2 owns identity semantics.

M.3 owns relationship semantics.

M.4 owns lifecycle and status semantics.

M.5 owns evidence and traceability semantics.

M.6 owns versioning, lineage, supersession, replacement, version-reference, and migration-obligation semantics.

M.7 owns compatibility semantics.

No downstream AI-DOS domain may redefine a concept owned by M.0, M.1, M.2, M.3, M.4, M.5, M.6, or M.7. Downstream domains may specialize Meta concepts only within their own domain boundaries.

---

## 5. Downstream Consumers

The Meta Family is upstream of:

- Constitution;
- Standards;
- Runtime;
- Engine Platform;
- Engine Specializations;
- Agents;
- Commands;
- Workflows;
- Templates;
- Operational Core;
- validation and review domains;
- knowledge and discovery domains;
- future AI-DOS extension domains.

Downstream consumers inherit Meta meanings. They do not become Meta authority by consuming Meta concepts.

---

## 6. Family Overview

### Meta Core

| Artifact | Responsibility | Boundary |
|:---|:---|:---|
| `README.md` | Meta Family entry, reading guidance, authority boundary, dependency model, consumer map, and family overview. | Does not define framework, artifact, identity, relationship, lifecycle, status, versioning, or supersession semantics. |
| `M.0-Framework-Meta-Model.md` | Framework Semantic Root for reusable AI-DOS product meanings. | Does not define artifact type-system details, runtime, engines, workflows, commands, templates, or planning. |
| `M.1-Artifact-Meta-Model.md` | Artifact semantic model for artifact families, types, instances, bindings, representations, classification, discovery, and consumption. | Does not own identity semantics, relationship semantics, lifecycle semantics, status semantics, versioning semantics, authority semantics, evidence semantics, compatibility semantics, runtime semantics, agent semantics, planning artifacts, or Target Project concepts. |
| `M.2-Identity-Meta-Model.md` | Identity semantic model for identity, identifiers, namespaces, aliases, collisions, resolution, historical identity, version-independent references, version-specific references, registry identity, semantic identity, equivalence, and invariants. | Does not define runtime ids, database ids, session ids, filesystem ids, implementation ids, registries, storage, tooling, execution behavior, lifecycle states, or version lineage. |
| `M.3-Relationship-Meta-Model.md` | Relationship semantic model for relationship types, endpoints, direction, cardinality, multiplicity, optionality, inverse, symmetry, transitivity, common relationship kinds, constraints, invalid relationships, and validation principles. | Does not define graph databases, runtime graphs, execution flow, workflow ordering, engine behavior, agent procedures, storage, tooling, automation, lifecycle effects, or version-lineage effects. |

### Enterprise Semantic Profiles

| Artifact | Responsibility | Boundary |
|:---|:---|:---|
| `M.4-Lifecycle-and-Status-Meta-Model.md` | Lifecycle and status semantic authority for lifecycle profiles, lifecycle states, status dimensions, transitions, transition authority bindings, promotion, deprecation, archival, historical classification, canonical status, validation status, review status, certification status, availability status, and operational status bindings. | Does not define Target Project planning, ProjectStatus, DevelopmentPhases, Roadmap, release schedule, runtime state machine implementation, approval workflow mechanics, evidence taxonomy, version numbering, or compatibility. |
| `M.5-Evidence-and-Traceability-Meta-Model.md` | Evidence and traceability semantic authority for evidence, evidence claims, evidence assertions, evidence sources, origins, references, links, chains, graphs, collections, sets, contexts, snapshots, version bindings, scope, confidence, trust, quality, freshness, completeness, integrity, authenticity, provenance, lineage, traceability, dependencies, consumers, producers, requirements, obligations, and validation bindings. | Does not define validation procedures, review procedures, certification, governance decisions, approval workflow, implementation tooling, repository scanning, audit execution, graph database implementation, or runtime evidence collection. |
| `M.6-Versioning-and-Supersession-Meta-Model.md` | Versioning and supersession semantic authority for versions, revisions, version identity, version references, lineage, supersession, replacement, amendment, rollback, deprecation binding, migration obligation, version authority binding, and version claims. | Does not define release schedule, deployment, package manager behavior, Git branching procedure, source-control workflow, project planning, compatibility semantics, evidence semantics, or schema syntax. |
| `M.7-Compatibility-Meta-Model.md` | Compatibility semantic authority for compatibility claims, scopes, categories, backward compatibility, forward compatibility, bidirectional compatibility, partial compatibility, conditional compatibility, matrices, profiles, rules, contracts, boundaries, constraints, requirements, exceptions, breaking changes, non-breaking changes, behavioral compatibility, structural compatibility, semantic compatibility, version compatibility, artifact compatibility, interface compatibility, schema compatibility, contract compatibility, runtime compatibility semantics, and engine compatibility semantics. | Does not define migration execution, release policy, deployment strategy, adapter implementation, runtime implementation, engine implementation, package management, or source-control workflow. |

### Selective DAG Dependencies

| Authority | Required Upstream Semantics | Does Not Depend On |
|:---|:---|:---|
| M.4 | M.0; M.2; M.3; M.1 only for artifact lifecycle bindings. | M.5, M.6, M.7. |
| M.5 | M.0; M.1; M.2; M.3. | M.4, M.6, M.7. |
| M.6 | M.0; M.2; M.3; M.1 only for artifact version bindings; M.4 only for lifecycle effects of deprecation, supersession, replacement, archival, historical retention, promotion of a version, and revocation of a version. | M.5 as an active semantic dependency; M.7 compatibility interpretation. |
| M.7 | Required upstream: M.0, M.2, M.3, M.5, M.6. Conditional upstream: M.1 for artifact compatibility; M.4 for lifecycle/status compatibility effects. | M.1 as a universal prerequisite; M.4 as a universal prerequisite; future M.8 and M.9 authorities. |

---

## 7. Reconstruction Report

This family entry was reconstructed from first principles to establish the Meta Layer as the permanent semantic foundation of the reusable AI-DOS framework product.

The reconstruction removes active Target Project dependency, planning ownership, runtime ownership, engine ownership, workflow ownership, command ownership, and template ownership from the Meta Family.

The reconstructed Meta Family now expresses only semantic authority boundaries and consumer relationships.

---

## 8. Completion Status

AI-DOS META FAMILY UPDATED WITH M.5 EVIDENCE AND M.7 COMPATIBILITY SEMANTIC AUTHORITIES.

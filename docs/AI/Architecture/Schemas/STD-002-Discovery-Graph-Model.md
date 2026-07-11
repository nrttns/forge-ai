# STD-002 — Discovery Graph Model

> **Parent Standard:** STD-002 — Discovery Standard (`AI-DOS-STD-002`)
>
> **Consumed Standard:** STD-001 — Knowledge Graph Standard (`AI-DOS-STD-001`)
>
> **Related Documents**
>
> - [STD-002 Discovery JSON Schema](./STD-002-Discovery-JSON-Schema.md)
> - [STD-002 Discovery YAML Schema](./STD-002-Discovery-YAML-Schema.md)
> - [Appendix A — Discovery Classification Catalog](./STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md)
>
> **Version:** 1.1.0-draft
>
> **Status:** Draft

---

# 1. Status

| Property | Value |
|:---|:---|
| **Document** | STD-002 — Discovery Graph Model |
| **Identifier** | `AI-DOS-STD-002-GRAPH` |
| **Version** | 1.1.0-draft |
| **Status** | Draft |
| **Type** | Technical Graph Projection |
| **Classification** | Discovery Graph Projection |
| **Authority** | STD-002 — Discovery Standard |
| **Owner** | Framework Architecture Team |
| **Maintainers** | Framework Architecture Team |
| **Depends On** | STD-001 — Knowledge Graph Standard (`AI-DOS-STD-001`) |
| **Directory** | `docs/AI/Architecture/Schemas/` |
| **Created** | 2026-07-04 |
| **Last Updated** | 2026-07-06 |

---

# 2. Purpose

This document defines the Discovery-specific graph projection of the canonical Knowledge Graph defined by STD-001. It does not redefine STD-001 graph semantics.

STD-002 Discovery consumes the canonical graph model from STD-001 — Knowledge Graph Standard and applies it to Discovery artifacts. This document specifies how Discovery nodes, Discovery edges, and Discovery traversal patterns specialize the canonical graph for Discovery workflow use cases.

The Discovery Graph Model is a Discovery-specific projection of the canonical Knowledge Graph. Discovery serialization formats (JSON, YAML, Markdown) shall be derived from this projection, which itself derives from the STD-001 canonical model.

---

# 3. Scope

This document defines only the Discovery-specific aspects of the graph model:

- Discovery node projection from the canonical node model
- Discovery edge projection from the canonical edge model
- Discovery relationship profile (allowed edge types and targets)
- Discovery traversal patterns (forward and backward)
- Discovery validation profile (graph-level validation rules for Discovery nodes)
- Discovery serialization mapping (graph to JSON/YAML/Markdown/Registry)
- Discovery AI consumption rules (graph-specific AI behavior)
- Discovery runtime consumption rules (graph-specific runtime behavior)

This document does **not** define:

- canonical graph semantics (owned by STD-001)
- canonical node model (owned by STD-001)
- canonical edge model (owned by STD-001)
- canonical graph topology (owned by STD-001)
- canonical relationship ontology (owned by STD-001)
- generic graph traversal rules (owned by STD-001)
- generic graph validation rules (owned by STD-001)
- Neo4j or any database-specific mapping (implementation-specific)
- Cypher or any query-language examples (implementation-specific)

For all canonical graph semantics not specified here, STD-001 — Knowledge Graph Standard is the authoritative source.

---

# 4. Authority and Dependency on STD-001

## Authority Hierarchy

```text
A.1 — Constitution
    ↓
M.0 — Framework Meta Model
    ↓
STD-000 — Framework Standards
    ↓
STD-001 — Knowledge Graph Standard  ← canonical graph authority
    ↓
STD-002 — Discovery Standard        ← parent standard
    ↓
This document                        ← Discovery graph projection
```

## Dependency Statement

STD-002 Discovery Graph Model depends on STD-001 — Knowledge Graph Standard for all canonical graph semantics. This document consumes STD-001 by:

- adopting the canonical node model as the basis for the Discovery node projection;
- adopting the canonical edge model as the basis for the Discovery edge projection;
- inheriting canonical graph invariants (directed, typed, traceable, acyclic governance);
- inheriting canonical graph principles (immutable identity, referential integrity, explicit relationships).

STD-002 does not redefine, override, or duplicate any canonical graph semantics owned by STD-001.

---

# 5. Discovery Projection Philosophy

## Core Principle

> A Discovery is a knowledge node of type `Discovery` within the canonical Knowledge Graph defined by STD-001. This document specifies how that node is projected, connected, traversed, and validated for Discovery workflow purposes.

## Projection Model

```
Canonical Knowledge Graph (STD-001)
    │
    ├── Discovery Node (projected by this document)
    │       │
    │       ├── Discovery → Finding edge
    │       ├── Discovery → Evidence edge
    │       ├── Discovery → Discovery edge (refinement/supersession)
    │       └── Discovery → Risk / Recommendation / Decision edges
    │
    └── All other node types (owned by their respective standards)
```

## Design Goals

The Discovery graph projection shall:

- define only Discovery-specific graph behavior;
- defer all canonical semantics to STD-001;
- remain technology-independent;
- support deterministic traversal from Discovery to downstream artifacts;
- preserve complete traceability from Discovery to architectural outcomes.

## Non-Goals

This projection does not:

- redefine the canonical graph topology;
- define node models for non-Discovery artifacts;
- define global relationship semantics;
- prescribe storage, database, or query-language implementations.

---

# 6. Discovery Node Projection

## Overview

Canonical node semantics are owned by STD-001. This document only defines the Discovery node projection: how a Discovery artifact maps onto the canonical node model.

## Projection Mapping

| STD-001 Canonical Concept | STD-002 Discovery Projection |
|:---|:---|
| Node | Discovery Node |
| Node Type | `Discovery` |
| Identity | Discovery Identifier (`DISC-<DOMAIN>-<YYYYMMDD>-<SEQ>`) + immutable graph identity |
| Lifecycle | Discovery lifecycle from STD-002 (Draft → Observed → Verified → Accepted → Consumed → Historical → Archived) |
| Classification | Discovery classification from STD-002 (primary domain + discovery type + severity + confidence) |
| Ownership | Discovery owner and authority from STD-002 |
| Metadata | Discovery metadata schema from STD-002 |
| Relationships | Discovery relationship profile (Section 8) |
| Validation | Discovery validation profile (Section 10) |

## Discovery Node Properties

Every Discovery node in the graph shall carry the following properties, projected from the canonical node model:

| Property | Source | Required |
|:---|:---|:---:|
| `id` | Discovery Identifier (STD-002 Section 10) | Yes |
| `nodeType` | `Discovery` | Yes |
| `title` | Discovery Title (STD-002 Section 11) | Yes |
| `version` | Discovery Version (STD-002 Section 16) | Yes |
| `lifecycleState` | Discovery Lifecycle State (STD-002 Section 9) | Yes |
| `primaryDomain` | Discovery Primary Classification (STD-002 Section 8) | Yes |
| `discoveryType` | Discovery Type (STD-002 Section 8) | Yes |
| `severity` | Discovery Severity (STD-002 Section 25) | Yes |
| `confidence` | Discovery Confidence (STD-002 Section 26) | Yes |
| `impact` | Discovery Impact (STD-002 Section 27) | Yes |
| `owner` | Discovery Owner (STD-002 Section 5) | Yes |
| `authority` | Discovery Authority (STD-002 Section 5) | Yes |
| `sourceReferences` | Discovery Source References (STD-002 Section 11) | Yes |
| `createdAt` | Creation timestamp | Yes |
| `updatedAt` | Last update timestamp | Yes |
| `disposition` | Current disposition (STD-002 Section 13) | Yes |
| `extensions` | Governed extensions (STD-002 Section 11) | No |

## Node Constraints

Discovery nodes shall satisfy all canonical node invariants defined by STD-001, plus the following Discovery-specific constraints:

- A Discovery node shall have node type exactly `Discovery`.
- A Discovery node shall not simultaneously hold another node type.
- A Discovery node's `id` shall conform to the Discovery identifier format defined by STD-002 Section 10.
- A Discovery node's `lifecycleState` shall be one of the Discovery lifecycle states defined by STD-002 Section 9.
- A Discovery node's `primaryDomain` shall be one of the Discovery classifications defined by STD-002 Section 8 and Appendix A.

---

# 7. Discovery Edge Projection

## Overview

Canonical edge semantics are owned by STD-001. This document only defines the Discovery-specific edge profile: which relationship types a Discovery node may originate, and what target node types are permitted.

## Edge Properties

Every Discovery-origin edge shall carry the following properties, projected from the canonical edge model:

| Property | Source | Required |
|:---|:---|:---:|
| `id` | Edge identifier | Yes |
| `relationshipType` | One of the allowed Discovery relationship types (Section 8) | Yes |
| `sourceNode` | Discovery node identifier | Yes |
| `targetNode` | Target artifact identifier | Yes |
| `createdAt` | Edge creation timestamp | Yes |
| `authority` | Authority that created or approved the relationship | Yes |
| `rationale` | Reason for the relationship | No |

## Edge Constraints

Discovery-origin edges shall satisfy all canonical edge invariants defined by STD-001, plus the following Discovery-specific constraints:

- A Discovery-origin edge shall have exactly one `relationshipType` from the Discovery relationship profile (Section 8).
- A Discovery-origin edge shall reference an existing target node (referential integrity).
- A Discovery-origin edge shall not create circular governance relationships.
- Discovery self-referential edges (`Discovery → Discovery`) are permitted only for `REFINES`, `SUPERSEDES`, `DUPLICATES`, `CONTRADICTS`, and `RELATED_TO` types.

---

# 8. Discovery Relationship Profile

## Overview

This section defines the allowed relationship types for edges originating from a Discovery node. Canonical relationship semantics (direction, mutability, governance) are owned by STD-001; this section only specifies which relationships a Discovery may originate and what target node types are valid.

## Allowed Discovery-Origin Relationships

| Relationship Type | Valid Target Node Types | Direction | Meaning (Discovery-Specific) |
|:---|:---|:---|:---|
| `PRODUCES` | Finding | Discovery → Finding | Discovery promoted to Finding |
| `SUPPORTED_BY` | Evidence | Discovery → Evidence | Discovery supported by evidence item |
| `CONSUMED_BY` | Finding, Evidence, Risk, Recommendation, Decision, Audit | Discovery → Downstream | Discovery consumed by a downstream artifact |
| `RELATED_TO` | Discovery | Discovery ↔ Discovery | Two Discoveries are related |
| `REFINES` | Discovery | Discovery → Discovery | One Discovery clarifies another |
| `SUPERSEDES` | Discovery | Discovery → Discovery | One Discovery replaces another |
| `DUPLICATES` | Discovery | Discovery → Discovery | Two Discoveries overlap |
| `CONTRADICTS` | Discovery | Discovery → Discovery | Two Discoveries conflict |
| `BLOCKS` | Artifact, Workflow | Discovery → Target | Discovery prevents safe progression |

## Relationship Constraints

- Discovery relationships shall be explicit. Relationships shall not be inferred from filenames, directory structure, textual similarity, or naming conventions.
- Discovery relationships shall be acyclic for governance purposes. A Discovery shall not indirectly reference itself through `PRODUCES`, `CONSUMED_BY`, or `BLOCKS` chains.
- A Discovery that has been consumed (`lifecycleState: Consumed`) shall have at least one `CONSUMED_BY` or `PRODUCES` edge to a downstream artifact.
- `SUPERSEDES` edges require that the superseding Discovery has a lifecycle state of `Verified` or higher.
- `CONTRADICTS` edges require both Discoveries to be in `Verified` or `Accepted` state, and shall trigger a governance review.

## Prohibited Relationships

The following are prohibited for Discovery-origin edges:

- Direct `CERTIFIES` edges from Discovery to any artifact. Discovery cannot certify architecture.
- Direct `APPROVES` edges from Discovery to any implementation artifact. Discovery cannot approve implementation.
- `PRODUCES` edges from Discovery directly to Task or Architecture Change. Discovery must flow through Finding first.
- Any edge that bypasses the Finding/Evidence/Risk/Recommendation/Decision workflow.

---

# 9. Discovery Traversal Patterns

## Overview

Canonical traversal semantics are owned by STD-001. This section defines only the Discovery-specific traversal patterns that Discovery-consuming systems (AI agents, runtimes, validators) shall support.

## Forward Traversal (Discovery → Downstream)

Forward traversal follows the knowledge flow from observation to architectural action.

| Pattern | Path | Use Case |
|:---|:---|:---|
| Discovery to Finding | `Discovery ──PRODUCES──▶ Finding` | Trace which Findings derived from a Discovery |
| Discovery to Evidence | `Discovery ──SUPPORTED_BY──▶ Evidence` | Identify evidence supporting a Discovery |
| Discovery to Risk | `Discovery ──CONSUMED_BY──▶ Risk` | Trace risk items informed by a Discovery |
| Discovery to Recommendation | `Discovery ──CONSUMED_BY──▶ Recommendation` | Trace recommendations triggered by a Discovery |
| Discovery to Decision | `Discovery ──CONSUMED_BY──▶ Decision` | Trace governance decisions responding to a Discovery |
| Discovery to Audit | `Discovery ──CONSUMED_BY──▶ Audit` | Trace audits that consumed a Discovery |

## Backward Traversal (Downstream → Discovery)

Backward traversal supports auditing, impact analysis, and traceability.

| Pattern | Path | Use Case |
|:---|:---|:---|
| Finding to Discovery | `Finding ◀──PRODUCES── Discovery` | Identify which Discoveries produced a Finding |
| Evidence to Discovery | `Evidence ◀──SUPPORTED_BY── Discovery` | Identify which Discoveries reference this evidence |
| Risk to Discovery | `Risk ◀──CONSUMED_BY── Discovery` | Trace risk provenance back to observations |

## Discovery Refinement Traversal

| Pattern | Path | Use Case |
|:---|:---|:---|
| Refinement chain | `Discovery A ──REFINES──▶ Discovery B ──REFINES──▶ Discovery C` | Understand how an observation was progressively refined |
| Supersession chain | `Discovery New ──SUPERSEDES──▶ Discovery Old` | Identify what a Discovery replaced |
| Conflict detection | `Discovery A ──CONTRADICTS──▶ Discovery B` | Find conflicting observations requiring resolution |
| Duplicate detection | `Discovery A ──DUPLICATES──▶ Discovery B` | Find overlapping observations for consolidation |

## Traversal Constraints

- All traversal shall follow explicit edges. No traversal shall infer relationships not declared in the graph.
- Discovery-consuming systems shall not traverse beyond Discovery scope unless the use case explicitly requires cross-standard navigation.
- Backward traversal from a consumed Discovery shall always resolve to the original Discovery node, preserving full provenance.

---

# 10. Discovery Validation Profile

## Overview

Canonical graph validation rules are owned by STD-001. This section defines only the graph-level validation rules specific to Discovery nodes and their relationships.

## Discovery Node Validation

| Rule | Check |
|:---|:---|
| Valid identifier | Discovery node `id` conforms to `DISC-<DOMAIN>-<YYYYMMDD>-<SEQ>` |
| Valid node type | Discovery node `nodeType` is exactly `Discovery` |
| Valid lifecycle state | Discovery node `lifecycleState` is one of the seven Discovery lifecycle states |
| Has owner | Discovery node declares a non-empty `owner` |
| Has authority | Discovery node declares a non-empty `authority` |
| Has source reference | Discovery node has at least one `sourceReferences` entry |
| Classification valid | `primaryDomain` and `discoveryType` are values from the Discovery classification catalog (Appendix A) |
| Confidence declared | `confidence` is one of the five confidence levels |
| Severity declared | `severity` is one of the seven severity levels |

## Discovery Relationship Validation

| Rule | Check |
|:---|:---|
| Valid relationship type | Edge `relationshipType` is in the Discovery relationship profile (Section 8) |
| Valid target | Target node exists and is a permitted type for the relationship |
| No self-certification | No `CERTIFIES` edge originates from a Discovery node |
| No direct implementation approval | No `APPROVES` edge originates from a Discovery node to a Task or implementation artifact |
| No workflow bypass | No `PRODUCES` edge from Discovery directly to Task or Architecture Change |
| Consumed Discovery has downstream | If `lifecycleState` is `Consumed`, at least one `CONSUMED_BY` or `PRODUCES` edge exists |
| Acyclic governance | No circular path exists through governance relationships (`PRODUCES`, `CONSUMED_BY`, `BLOCKS`) |
| Supersession authority | `SUPERSEDES` edges require source Discovery at `Verified` or higher |
| Contradiction review | `CONTRADICTS` edges require both Discoveries at `Verified` or higher; shall trigger governance review flag |

## Validation Outcomes

| Outcome | Meaning |
|:---|:---|
| Valid | Discovery node and all relationships pass all validation rules |
| Valid with Observations | Structurally valid but has advisory findings (e.g., missing optional metadata) |
| Requires Follow-Up | Missing required graph properties or invalid relationship target |
| Invalid | Cannot be accepted — violates node invariants, relationship constraints, or lifecycle rules |

---

# 11. Discovery Serialization Mapping

## Overview

The Discovery graph projection maps to four concrete representations, each owned by a specific document or system within the STD-002 Discovery package.

## Mapping Table

| Graph Property | JSON Schema | YAML Schema | Markdown Standard | Discovery Registry |
|:---|:---|:---|:---|:---|
| `id` | `identity.id` | `identity.id` | Discovery Header: Identifier | Discovery ID |
| `nodeType` | (implicit — schema defines Discovery) | (implicit) | (implicit — document is Discovery) | (implicit) |
| `title` | `identity.title` | `identity.title` | Discovery Header: Title | Title |
| `version` | `identity.version` | `identity.version` | Revision History | Version |
| `lifecycleState` | `lifecycle.state` | `lifecycle.state` | State field | State |
| `primaryDomain` | `classification.primaryDomain` | `classification.primaryDomain` | Classification | Classification |
| `discoveryType` | `classification.discoveryType` | `classification.discoveryType` | Classification | Type |
| `severity` | `classification.severity` | `classification.severity` | Severity | Severity |
| `confidence` | `classification.confidence` | `classification.confidence` | Confidence | Confidence |
| `impact` | (metadata or extension) | (metadata or extension) | Impact | Impact |
| `owner` | `ownership.owner` | `ownership.owner` | Owner | Owner |
| `authority` | `ownership.authority` | `ownership.authority` | Authority | — |
| `sourceReferences` | `traceability.origin` | `traceability.origin` | Source References | — |
| `relationships` | `relationships[]` | `relationships[]` | Related Artifacts | Related Artifacts |
| `disposition` | (extension or metadata) | (extension or metadata) | Disposition | Disposition |
| `createdAt` | `identity.createdAt` | `identity.createdAt` | Created | Created |
| `updatedAt` | `identity.updatedAt` | `identity.updatedAt` | Last Updated | Last Updated |
| `extensions` | `extensions` | `extensions` | (governed additions) | — |

## Mapping Rules

- The graph projection is the authoritative source. Serialization formats are derived projections.
- All serialization formats shall preserve the same semantic meaning as the graph projection.
- Conversion between formats shall be lossless with respect to canonical graph properties.
- Serialization formats may add format-specific metadata (e.g., YAML anchors, JSON `$schema`) but shall not redefine graph semantics.

---

# 12. AI Consumption Rules

## Graph-Specific AI Behavior

AI agents consuming the Discovery graph projection shall:

- traverse Discovery nodes through explicit edges only;
- explain reasoning by citing graph paths (source node, relationship type, target node);
- respect Discovery lifecycle constraints when recommending actions;
- treat Discovery `confidence` as declared metadata, not as validation status;
- distinguish between observed graph structure and inferred conclusions;
- flag `CONTRADICTS` edges for human governance review rather than auto-resolving.

AI agents shall not:

- invent Discovery nodes or edges without declared provenance;
- infer relationships not explicitly declared in the graph;
- promote a Discovery in the graph without workflow authorization;
- treat `classification.confidence` as a substitute for lifecycle `Verified` or `Accepted` state;
- bypass the Finding workflow by creating direct Discovery → Task edges.

## AI Traversal Requirements

When an AI agent traverses the Discovery graph:

- Every conclusion shall reference a traceable graph path.
- Hidden inference chains are prohibited.
- Forward traversal from Discovery to downstream artifacts shall follow the patterns defined in Section 9.
- AI agents shall not traverse beyond Discovery scope unless the task explicitly requires cross-standard navigation, and shall declare when they do so.

---

# 13. Runtime Consumption Rules

## Graph-Specific Runtime Behavior

Runtime systems consuming the Discovery graph projection shall:

- treat the graph projection as a read-optimized view of Discovery state;
- validate Discovery graph state before lifecycle transitions;
- reject graph mutations that violate Discovery node or relationship constraints (Section 10);
- maintain referential integrity when creating or retiring Discovery edges.

Runtime systems shall not:

- redefine graph projection semantics;
- bypass graph validation when creating or modifying Discovery nodes or edges;
- allow Discovery lifecycle transitions that violate the state machine defined in STD-002 Section 9 and Section 24;
- silently drop Discovery edges or nodes without audit trails.

## Runtime Traversal Requirements

Runtime traversal shall:

- support the forward and backward traversal patterns defined in Section 9;
- return results consistent with the graph projection, not with cached or derived state that diverges from the graph;
- report traversal paths for audit and explainability purposes.

---

# 14. Completion Checklist

## Document Completion

- [x] Status defined with correct authority and dependency on STD-001
- [x] Purpose scoped as Discovery-specific projection of canonical graph
- [x] Authority hierarchy declares STD-001 as canonical graph owner
- [x] Discovery node projection mapped from canonical node model
- [x] Discovery edge projection mapped from canonical edge model
- [x] Discovery relationship profile defines allowed edge types and targets
- [x] Discovery traversal patterns defined (forward, backward, refinement)
- [x] Discovery validation profile defined (node, relationship, outcomes)
- [x] Serialization mapping covers JSON, YAML, Markdown, Registry
- [x] AI consumption rules specified
- [x] Runtime consumption rules specified
- [x] No section claims canonical graph ownership for STD-002
- [x] No duplicated STD-001 canonical content
- [x] All generic graph semantics defer to STD-001

## Compliance Verification

- [x] Document identifier is `AI-DOS-STD-002-GRAPH`
- [x] Classification is `Discovery Graph Projection`
- [x] Authority is `STD-002 — Discovery Standard`
- [x] Depends On declares `STD-001 — Knowledge Graph Standard`
- [x] No canonical node model defined (references STD-001)
- [x] No canonical edge model defined (references STD-001)
- [x] No framework-wide topology defined (references STD-001)
- [x] No Neo4j mapping or Cypher examples included
- [x] Discovery-specific graph mapping is complete and self-contained

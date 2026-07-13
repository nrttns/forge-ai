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

Read the Meta Family in this order:

1. `README.md` — family entry, scope, authority boundary, and reading order.
2. `M.0-Framework-Meta-Model.md` — framework semantic root and reusable AI-DOS meanings.
3. `M.1-Artifact-Meta-Model.md` — artifact semantics derived from M.0 without redefining M.0 concepts.
4. `M.2-Identity-Meta-Model.md` — identity semantics derived from M.0 and consumed by artifact bindings and downstream domains.
5. `M.3-Relationship-Meta-Model.md` — relationship semantics derived from M.0, informed by M.2 endpoint identity, and consumed by artifact bindings and downstream domains.

Downstream consumers should read M.0 before M.1, M.2, and M.3, should read M.2 before M.3 where relationship endpoint identity matters, and should read all applicable Meta authorities before defining domain-specific semantics.

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

No downstream AI-DOS domain may redefine a concept owned by M.0, M.1, M.2, or M.3. Downstream domains may specialize Meta concepts only within their own domain boundaries.

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

| Artifact | Responsibility | Boundary |
|:---|:---|:---|
| `README.md` | Meta Family entry, reading order, authority boundary, consumer map, and family overview. | Does not define framework or artifact semantics. |
| `M.0-Framework-Meta-Model.md` | Framework Semantic Root for reusable AI-DOS product meanings. | Does not define artifact type-system details, runtime, engines, workflows, commands, templates, or planning. |
| `M.1-Artifact-Meta-Model.md` | Artifact semantic model for artifact families, types, instances, bindings, representations, classification, discovery, and consumption. | Does not own identity semantics, relationship semantics, authority semantics, evidence semantics, compatibility semantics, runtime semantics, agent semantics, planning artifacts, or Target Project concepts. |
| `M.2-Identity-Meta-Model.md` | Identity semantic model for identity, identifiers, namespaces, aliases, collisions, resolution, historical identity, version identity, registry identity, semantic identity, equivalence, and invariants. | Does not define runtime ids, database ids, session ids, filesystem ids, implementation ids, registries, storage, tooling, or execution behavior. |
| `M.3-Relationship-Meta-Model.md` | Relationship semantic model for relationship types, endpoints, direction, cardinality, multiplicity, optionality, inverse, symmetry, transitivity, common relationship kinds, constraints, invalid relationships, and validation principles. | Does not define graph databases, runtime graphs, execution flow, workflow ordering, engine behavior, agent procedures, storage, tooling, or automation. |

---

## 7. Reconstruction Report

This family entry was reconstructed from first principles to establish the Meta Layer as the permanent semantic foundation of the reusable AI-DOS framework product.

The reconstruction removes active Target Project dependency, planning ownership, runtime ownership, engine ownership, workflow ownership, command ownership, and template ownership from the Meta Family.

The reconstructed Meta Family now expresses only semantic authority boundaries and consumer relationships.

---

## 8. Completion Status

AI-DOS META CORE RECONSTRUCTION COMPLETE.

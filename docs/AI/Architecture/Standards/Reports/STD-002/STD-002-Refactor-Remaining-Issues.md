# STD-002 Discovery Package — Remaining Issues

> Items not addressed in this refactor because they require human governance,
> missing source files, or a future audit.

---

## 1. STD-002-Discovery-Graph-Model.md — Extensive STD-001 Content Duplication

| Property | Value |
|:---|:---|
| **Severity** | High |
| **Type** | Governance Decision Required |
| **Description** | The Graph Model document (3206 lines) contains substantial content that duplicates the canonical Knowledge Graph model owned by STD-001. This refactor added projection framing statements and reframed key sections (Purpose, Knowledge Model, Graph Principles, Canonical Graph Model, Foundational Principle, Representation Layers, Principle 1, section headers). However, the bulk of the document — including Principles 2–15, Canonical Node Model, Canonical Edge Model, Graph Topology, Node Types, Relationship Types, Graph Constraints, AI Traversal Rules, Runtime Traversal Rules, Neo4j Mapping, Cypher Examples, Graph Validation, and Canonical Examples — remains structurally identical to STD-001. |
| **Required Action** | Human governance must decide whether to: (a) retain the full duplicated content with projection framing, (b) replace the body with a concise Discovery-specific projection profile that references STD-001 for all canonical graph semantics, or (c) split the document into a thin projection spec plus controlled references to STD-001 sections. |
| **Why Not Fixed** | The required fix ('convert to Discovery-specific graph projection / profile document') involves an architectural decision about how much of the STD-001 graph model to retain. This exceeds the scope of a controlled numbering/identity refactor and requires governance approval. |

---

## 2. STD-001-Knowledge-Graph-Standard.md — Internal Inconsistencies (Not in Scope)

| Property | Value |
|:---|:---|
| **Severity** | Informational |
| **Type** | Out of Scope |
| **Description** | STD-001-Knowledge-Graph-Standard.md contains internal inconsistencies: the header references 'STD-002 — Discovery Standard' as parent, the identifier is 'AI-DOS-STD-001-GRAPH' but it is the Knowledge Graph standard, and 'Related Documents' lists 'STD-001 Discovery JSON Schema' and 'STD-001 Discovery YAML Schema'. These are legacy artifacts from before the STD-001/STD-002 renumbering. |
| **Required Action** | A separate controlled remediation of STD-001 is needed. This was not in scope for the STD-002 refactor. |
| **Why Not Fixed** | The objective states: 'Do NOT modify STD-000 or STD-001.' |

---

## 3. Appendix File Naming Convention

| Property | Value |
|:---|:---|
| **Severity** | Low |
| **Type** | Naming Convention |
| **Description** | The uploaded appendix file is named `STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md`. The internal parent document link references `./STD-002-Discovery-Standard.md`. If the file naming convention or directory structure changes, these links may need updating. |
| **Required Action** | Verify file naming and directory placement against the repository structure defined by STD-000. |
| **Why Not Fixed** | File naming and directory placement are repository-level concerns outside the scope of content refactoring. |

---

## 4. STD-002-Discovery-Standard.md — Missing STD-001 Knowledge Graph Normative Reference

| Property | Value |
|:---|:---|
| **Severity** | Medium |
| **Type** | Content Gap |
| **Status** | **RESOLVED** |
| **Description** | The Discovery Standard's Normative References section listed A.1, M.0, and STD-000, but did not include STD-001 — Knowledge Graph Standard. Since STD-002 Discovery consumes STD-001 Knowledge Graph semantics (per the Graph Model projection), a normative reference to STD-001 is required. |
| **Resolution** | Added `[STD-001 — Knowledge Graph Standard](./STD-001-Knowledge-Graph-Standard.md)` to the Normative References table with description: *"Canonical knowledge graph model, node/edge semantics, topology constraints, and traversal rules. Discovery graph projections are defined against this specification."* Placed after STD-000 to maintain STD-series ordering. |

---

## 5. Version Bump Required

| Property | Value |
|:---|:---|
| **Severity** | Low |
| **Type** | Governance Process |
| **Description** | This refactor applied multiple identity, numbering, and authority corrections but did not bump document versions. Per STD-000 versioning rules, these changes may warrant a version increment (e.g., 1.0.0-draft → 1.1.0-draft). |
| **Required Action** | Governance-approved version increment after review of changes. |
| **Why Not Fixed** | Version bumps are governance actions. Automated refactoring should not assume version semantics. |

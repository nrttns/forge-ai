# STD-003 — Terminology Standard

> **Forge AI v3 · Standards Library**  
> Draft / Candidate Standard · Terminology Standard

---

| Property | Value |
|:---|:---|
| **Document** | STD-003 — Terminology Standard |
| **Identifier** | `FORGE-STD-003` |
| **Version** | `0.1.0-draft` |
| **Status** | Draft / Candidate Standard |
| **Type** | Framework Standard |
| **Classification** | Core Vocabulary Standard |
| **Authority** | `AGENTS.md`, A.1 Constitution, M.0 Framework Meta Model, M.1 Artifact Meta Model, STD-000 Framework Standards |
| **Owner** | Framework Governance |
| **Maintainers** | Framework Architecture Team |
| **Depends On** | `AGENTS.md`, `FORGE-ARCH-A.1`, Blueprint RFC, `FORGE-META-000`, `FORGE-META-001`, Runtime RFC, `FORGE-STD-000`, `FORGE-STD-001`, `FORGE-STD-002`, RC2 Terminology |
| **Companion Schema** | `docs/AI/Architecture/Schemas/STD-003-Terminology-Graph-Model.md` |
| **Canonical Status** | Not canonical until promoted by governance |

---

## 1. Status

STD-003 is a **Draft / Candidate Standard** for Forge AI v3 terminology. It harvests RC2 terminology and normalizes it against the v3 Constitution, Blueprint RFC, Meta Models, Runtime Architecture RFC, and current Standards Library.

This standard does **not** supersede `docs/AI/Specification/Terminology.md`, does **not** promote itself to canonical authority, and does **not** modify Project Status. Until governance promotion, it is candidate vocabulary for future Architecture, Meta Models, Standards, Runtime, Commands, Workflows, Validation, Certification, Knowledge Graph, Registry, and implementation documents.

## 2. Purpose

The purpose of STD-003 is to establish a single future vocabulary model so Forge AI documents use the same terms for the same concepts. It prevents architectural drift caused by duplicate definitions, informal synonyms, platform-specific vocabulary, and runtime-specific reinterpretation of framework terms.

STD-003 exists to:

- preserve RC2 compatibility while preparing v3 vocabulary;
- align terminology with the v3 authority chain;
- make terms graph-addressable and validation-ready;
- ensure AI agents use governed vocabulary instead of inventing names;
- support migration from document-only terminology to graph-backed terminology.

## 3. Scope

This standard governs terminology definitions, naming, synonyms, forbidden terms, vocabulary ownership, graph representation, AI usage, migration, validation, and certification rules for core Forge AI terms.

In scope:

- Framework-wide vocabulary used by architecture and runtime documents.
- Vocabulary shared by standards, schemas, registries, graph projections, commands, workflows, validation, review, certification, and AI agents.
- RC2-to-v3 terminology harvest mapping.

Out of scope:

- Rewriting existing standards.
- Promoting this document to canonical status.
- Updating `docs/ProjectStatus.md`.
- Defining storage engines, programming APIs, or product-specific implementation names.

## 4. Authority

STD-003 consumes the following governing inputs:

1. `AGENTS.md` as bootstrap authority.
2. `docs/AI/Architecture/A.1-Constitution.md` for constitutional principles.
3. `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` for transitional layer orientation.
4. `docs/AI/Meta/M.0-Framework-Meta-Model.md` for framework-level entity concepts.
5. `docs/AI/Meta/M.1-Artifact-Meta-Model.md` for artifact contract concepts.
6. `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` for runtime vocabulary alignment.
7. `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` for standards governance.
8. `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` for graph vocabulary.
9. `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` for discovery vocabulary.
10. `docs/AI/Specification/Terminology.md` for RC2 vocabulary.

If this candidate conflicts with a higher-authority input, the higher-authority input prevails. If this candidate conflicts with an existing standard, the conflict is an open migration issue, not an implicit rewrite.

## 5. Design Principles

- **One concept, one canonical term.** Each framework concept has one preferred name.
- **Definitions before usage.** Documents must define or reference terms before relying on them.
- **Owners define vocabulary.** Each term has one owning subsystem.
- **Synonyms are migration aids, not authorities.** Synonyms may support compatibility but must not become new concepts.
- **Graph-ready vocabulary.** Terms must be representable as nodes with typed relationships.
- **Runtime consumes vocabulary.** Runtime and AI agents must not redefine terms.
- **Platform independence.** Terms must not bind Forge AI to a language, product, framework, database, editor, or runtime host.
- **RC2 compatibility.** Existing RC2 usage remains understandable during migration.

## 6. Terminology Governance

Framework Governance owns terminology governance. Domain owners may propose terms for their subsystem, but terminology becomes canonical only after governance review, validation, and certification.

Governance rules:

1. New terms must identify the owning subsystem.
2. New terms must state whether they refine an existing term or introduce a new concept.
3. A term may not duplicate a higher-authority concept under a different name.
4. A term may not use implementation-specific naming for a framework concept.
5. Deprecated RC2 terms must be mapped, not erased.
6. AI-generated terminology must be treated as a proposal until reviewed.

## 7. Naming Rules

- Use singular noun forms for concept names unless the term inherently describes a collective unit.
- Use Title Case for term labels in vocabulary tables.
- Use lowercase prose form when referring to a concept generically.
- Prefer `Knowledge Graph` over generic `graph` when referring to the governed Forge AI graph.
- Prefer `Context Package` over informal names such as prompt bundle or working bundle.
- Prefer `Certification` for governance completion, not approval, merge, acceptance, or done.
- Do not encode platform, storage, or implementation technology in core terminology.
- Do not create a new term solely because a different document layer uses the concept.

## 8. Canonical Vocabulary

| Term | Definition | Purpose | Owner | Related Terms | Allowed Synonyms | Forbidden Synonyms |
|:---|:---|:---|:---|:---|:---|:---|
| Artifact | A governed, addressable framework object with identity, ownership, lifecycle, state, relationships, and evidence expectations. | Provides the common contract for documents, records, standards, schemas, discoveries, findings, and runtime-consumable outputs. | Artifact Model | Entity, Identity, Lifecycle, State, Evidence, Registry | Governed artifact, framework artifact | File, page, blob, asset when used as the definition |
| Entity | Any identifiable conceptual object in the framework model. | Provides the broadest model unit from which artifacts, agents, terms, registries, and graph objects can be represented. | Framework Meta Model | Artifact, Identity, Node, Relationship | Model entity, framework entity | Thing, object when used imprecisely |
| Identity | The stable identifier and naming contract that makes an entity or artifact addressable. | Prevents ambiguity and supports traceability, registry lookup, graph projection, and lifecycle continuity. | Framework Meta Model | Entity, Artifact, Registry, Node | Identifier, identity record | Filename as identity, title as identity |
| Relationship | A governed connection between two entities or artifacts with explicit meaning. | Makes dependency, authority, ownership, traceability, and consumption paths explicit. | Knowledge Graph | Edge, Graph, Related Terms, Traceability | Link, association, typed relationship | Loose reference, mention |
| Graph | A representation of entities as nodes and relationships as edges. | Enables deterministic traversal, traceability, validation, and AI reasoning. | Knowledge Graph | Node, Edge, Knowledge Graph, Projection | Graph model | Diagram when used as the model |
| Node | The graph representation of an entity, artifact, term, or concept. | Makes framework objects addressable in the graph. | Knowledge Graph | Graph, Edge, Entity, Artifact | Graph node | Box, record when used as graph definition |
| Edge | The graph representation of a typed relationship between nodes. | Encodes governed connections for traversal and validation. | Knowledge Graph | Graph, Node, Relationship | Graph edge, typed edge | Arrow when used as the relationship definition |
| Authority | The documented source allowed to define decisions for a given scope. | Preserves governance order and prevents lower layers from redefining higher layers. | Constitution / Governance | Ownership, Standard, Certification, State | Source of authority, decision authority | Preference, convention, local truth |
| Ownership | The explicit accountable owner for a concept, artifact, subsystem, or decision scope. | Prevents duplicate authority and unclear responsibility. | Governance | Authority, Registry, Lifecycle | Accountability, stewardship | Informal responsibility, shared ownership when singular ownership is required |
| Lifecycle | The governed sequence of states through which an artifact, task, or process moves. | Enables controlled promotion, validation, review, certification, and migration. | Governance / Artifact Model | State, Validation, Review, Certification | State machine, lifecycle model | Status list when governance is implied |
| State | The current authoritative condition of a framework object, project, lifecycle, context, or memory unit. | Records reality without redefining architecture. | State Management | Lifecycle, Context, Project State, Memory | Current condition, status | Truth when not authoritative |
| Context | The temporary working set assembled from authoritative sources for one execution cycle. | Allows agents and runtime to execute scoped work without treating temporary context as authority. | Runtime | Context Package, Runtime, Task, Knowledge | Working context | Memory, prompt, cache |
| Context Package | A bounded, assembled package of context inputs for a runtime or agent execution. | Makes context assembly explicit, traceable, and reviewable. | Runtime | Context, Runtime Kernel, Agent, Task | Context bundle, execution context package | Prompt dump, scratchpad |
| Runtime | The operational layer that executes workflows, commands, agents, and traversal while consuming framework authority. | Coordinates execution without becoming architecture authority. | Runtime Architecture | Runtime Kernel, Workflow, Command, Agent | Execution runtime, AI runtime | Engine as authority, implementation layer as authority |
| Runtime Kernel | The minimal coordinating core of the runtime responsible for controlled execution, context intake, workflow dispatch, and rule enforcement. | Provides the governed runtime center without redefining framework concepts. | Runtime Architecture | Runtime, Context Package, Workflow, Command | Kernel, orchestration kernel | Brain, autonomous authority |
| Workflow | A governed process category that routes work from planning to command execution and validation. | Defines lifecycle movement for a type of work. | Workflow System | Command, Task, Runtime, Lifecycle | Process flow, workflow model | Ad hoc procedure |
| Command | An operational procedure that defines how approved work is executed. | Converts governed workflow intent into concrete execution steps. | Command System | Workflow, Task, Agent, Validation | Procedure, command standard | Prompt, script when used as governance |
| Task | An ephemeral execution artifact derived from project state and approved planning. | Defines scoped work for one execution cycle. | Planning System | Workflow, Command, Agent, Context | Work item, execution task | Idea, request, ticket when not derived from state |
| Agent | A human-governed AI execution participant that consumes authority and performs scoped work. | Executes tasks, proposes changes, and reports evidence without self-certifying. | Runtime / Agent System | Runtime, Task, Command, Swarm | AI agent, execution agent | Autonomous owner, certifier |
| Swarm | A temporary coordinated parallel execution unit composed of multiple agents. | Supports parallel work while preserving governance and human authority. | Swarm System | Agent, Runtime, Task, Review | Multi-agent swarm, agent group | Self-governing collective |
| Registry | A governed index of identities, artifacts, terms, standards, or graph objects. | Supports lookup, uniqueness, traceability, and lifecycle management without becoming source of truth. | Registry System | Identity, Artifact, Knowledge Graph, Standard | Index, catalog | Source of truth, database as authority |
| Knowledge | Persistent documented information approved or available for framework use. | Supplies reusable architecture, standards, governance, templates, and guidance. | Knowledge System | Knowledge Graph, Memory, Context, Evidence | Documented knowledge | Memory when used as authority |
| Knowledge Graph | The governed graph representation of framework knowledge as nodes and typed edges. | Provides canonical relational representation for traversal, validation, traceability, and AI reasoning. | Knowledge Graph | Graph, Node, Edge, Projection, Registry | Canonical graph, framework knowledge graph | Database, diagram, map as authority |
| Discovery | A governed architectural observation captured before becoming a finding, recommendation, risk, evidence item, decision, or task. | Provides controlled intake for observed knowledge. | Discovery Standard | Finding, Recommendation, Risk, Evidence | Observation, discovery artifact | Decision, finding, fact without validation |
| Finding | A validated or reviewable conclusion derived from discoveries and evidence. | Converts observations into assessed claims. | Finding Standard | Discovery, Evidence, Risk, Recommendation | Conclusion, assessed finding | Observation, opinion |
| Recommendation | A proposed action or direction derived from findings, risks, evidence, or governance needs. | Guides decisions without becoming a decision by itself. | Recommendation Standard | Finding, Risk, Evidence, Review | Proposed action, guidance | Decision, requirement unless approved |
| Risk | A potential negative impact, uncertainty, or threat to framework integrity, delivery, quality, or governance. | Makes hazards explicit for mitigation and governance review. | Risk Standard | Finding, Evidence, Recommendation, Review | Hazard, concern | Issue when already realized, blocker unless blocking |
| Evidence | Verifiable support for validation, review, certification, finding, risk, or recommendation claims. | Grounds conclusions in traceable facts. | Evidence Standard | Validation, Review, Certification, Finding | Proof, support, evidence item | Assertion, belief |
| Validation | Evidence-based verification that work conforms to approved expectations. | Confirms outputs satisfy defined requirements before review. | Validation System | Evidence, Review, Certification, Standard | Verification, validation check | Testing only, approval |
| Review | Independent assessment of completed work before certification or state transition. | Separates assessment from execution and prevents self-certification. | Review System | Validation, Certification, Evidence | Readiness review, assessment | Implementation, approval when certification is meant |
| Certification | Confirmation that required planning, execution, validation, documentation, review, and governance gates are satisfied. | Authorizes lifecycle/state transition where applicable. | Certification System | Review, Validation, State, Lifecycle | Governance certification | Done, accepted, merged |
| Blueprint | A non-canonical architectural map or RFC that orients layers, dependencies, ownership, and roadmap until ratified. | Coordinates architecture planning without superseding standards or constitution. | Framework Architecture | Constitution, Meta Model, Standard | Architectural blueprint, RFC blueprint | Canonical standard unless promoted |
| Constitution | The governing document that defines permanent principles, authority boundaries, and invariants. | Protects framework integrity and human governance. | Constitution | Authority, Governance, Standard, Certification | Constitutional specification | Policy note, guideline |
| Meta Model | The conceptual type system defining framework entities, artifacts, relationships, and shared contracts. | Ensures all specialized models derive from common concepts. | Meta Model | Entity, Artifact, Schema, Standard | Conceptual model, framework meta model | Implementation model |
| Standard | A governed normative document defining rules, contracts, validation, and certification criteria for a framework concern. | Establishes reusable authority for a domain. | Standards System | Schema, Validation, Certification, Authority | Framework standard, standard specification | Guide when normative, suggestion |
| Schema | A structured model defining fields, relationships, constraints, or projections for artifacts or graph objects. | Enables validation and machine-readable representation. | Schema System | Standard, Projection, Graph, Artifact | Model schema, contract schema | Database schema only |
| Projection | A derived representation of a canonical model for a specific view, serialization, graph, registry, or runtime use. | Allows multiple representations without duplicating source truth. | Knowledge Graph / Schema System | Schema, Knowledge Graph, Artifact, Registry | View, derived representation | Copy as authority, fork |
| Memory | Derived reusable learning from approved work that may inform future context but is never authority. | Improves future execution while preserving authority boundaries. | Memory System | Knowledge, Context, State | Reusable learning | Knowledge authority, source of truth |

## 9. Synonym Rules

Allowed synonyms exist only to support readability, search, and migration. A synonym must point to exactly one canonical term and must not carry additional authority.

Rules:

1. Use the canonical term in headings, metadata, schemas, registries, and validation rules.
2. A synonym may appear in prose only after the canonical term is introduced.
3. Deprecated RC2 terms must map to v3 terms during migration.
4. A synonym must not be used to avoid lifecycle, ownership, or authority rules.
5. A synonym that becomes widespread must either be formalized as an allowed synonym or deprecated.

## 10. Forbidden Terms

Forbidden terms are prohibited when they obscure authority, ownership, lifecycle, or validation.

| Forbidden Term Pattern | Use Instead | Reason |
|:---|:---|:---|
| Source of truth for registries | Registry / index | Registries support lookup; authority remains in governed artifacts and documents. |
| AI-approved / agent-certified | Review / Certification by authorized governance | AI agents may not self-certify. |
| Prompt as command | Command | Commands are governed procedures, not prompts. |
| Done as certification | Certification | Completion and certification are different lifecycle events. |
| File as artifact definition | Artifact | A file may contain an artifact but does not define the artifact concept. |
| Database as knowledge graph authority | Knowledge Graph | Storage does not define graph semantics. |
| Autonomous owner | Owner / Human Governance | Ownership remains governed and accountable. |
| Implementation-defined architecture | Architecture / Standard / Constitution | Implementation consumes architecture. |

## 11. Evolution Rules

- Terms evolve through governance review, not local document edits alone.
- A term change must include impact analysis across architecture, meta models, standards, runtime, workflows, commands, validation, certification, registries, and graph projections.
- Renames must preserve old identifiers or provide migration aliases.
- Removed terms must be deprecated before removal unless they are harmful forbidden terms.
- Vocabulary additions require owner, definition, purpose, related terms, allowed synonyms, forbidden synonyms, and validation impact.

## 12. Graph Representation

Terminology must be representable using the companion graph model:

```text
Term
  ↓ defines
Concept
  ↓ consumes
Related Terms
  ↓ referenced by
Standards
```

Minimum graph requirements:

- Every Term node has a stable identifier, label, status, owner, definition, and canonical flag.
- Every Term defines exactly one Concept.
- Every Concept may consume zero or more Related Term nodes.
- Every Term may be referenced by one or more Standards, Meta Models, Runtime documents, Commands, Workflows, or Schemas.
- Forbidden synonyms are represented as prohibited aliases linked to the canonical Term.

## 13. AI Usage Rules

AI agents must:

1. Prefer canonical terms from this candidate when drafting v3 documents.
2. Preserve RC2 terminology when quoting or mapping RC2 documents.
3. Avoid inventing terms where a canonical term exists.
4. Treat this standard as Draft / Candidate until promoted.
5. Report terminology conflicts as findings or open decisions.
6. Never use terminology to bypass authority, validation, review, or certification.

## 14. Migration Rules

Migration from RC2 terminology to v3 terminology must be compatibility-preserving.

- RC2 definitions remain readable and traceable.
- v3 documents should introduce canonical terms and map RC2 terms when needed.
- Existing documents must not be rewritten solely because this candidate exists.
- Future migrations should update terminology in dependency order: Constitution, Meta Models, Standards, Runtime, Commands, Workflows, Validation, Certification, Registry, Knowledge Graph, adapters.
- Migration must preserve historical capability identifiers and certified records.

## 15. Validation Rules

Validation must check that:

- every standard uses canonical terminology or explicitly maps older terms;
- no duplicate definitions exist for the same concept;
- no conflicting names exist for the same owned concept;
- runtime documents use the same vocabulary as architecture and standards;
- meta models use the same vocabulary as architecture and standards;
- every term has definition, purpose, owner, related terms, allowed synonyms, and forbidden synonyms;
- every forbidden synonym has a canonical replacement;
- graph representation can be generated from the vocabulary table.

## 16. Certification Rules

STD-003 can be certified only when:

1. Governance confirms its authority position.
2. The vocabulary table is complete for required core terms.
3. Conflicts with existing standards are resolved or tracked.
4. The companion graph model is validated.
5. Runtime, Meta Model, Knowledge Graph, Discovery, and Framework Standards owners complete review.
6. Human Governance approves promotion.

Until those conditions are satisfied, this document remains Draft / Candidate Standard.

## 17. RC2 Harvest Mapping

| RC2 Term | v3 Candidate Term | Migration Disposition |
|:---|:---|:---|
| Agent | Agent | Preserve; add explicit no-self-certification boundary. |
| Authority | Authority | Preserve; align to v3 Constitution and Governance. |
| Certification | Certification | Preserve; clarify lifecycle transition role. |
| Command | Command | Preserve; separate from prompt/script language. |
| Context | Context | Preserve; add Context Package as runtime assembly unit. |
| Governance | Authority / Ownership / Certification | Split broad governance concerns into specific owned terms while retaining Governance as subsystem language. |
| Historical Capability | Task / Artifact / State | Preserve for RC2 history; do not generalize as v3 core term in this standard. |
| Knowledge | Knowledge | Preserve; distinguish from Knowledge Graph and Memory. |
| Memory | Memory | Preserve; explicitly non-authoritative. |
| Planning | Workflow / Task / Lifecycle | Preserve as process language; terms here focus on executable vocabulary. |
| Project State | State | Preserve as a state specialization; do not collapse into architecture. |
| Review | Review | Preserve; separate from validation and certification. |
| Runtime | Runtime | Preserve; align to Runtime Kernel concept. |
| State | State | Preserve; make lifecycle relationship explicit. |
| Swarm | Swarm | Preserve; add temporary coordinated execution boundary. |
| Task | Task | Preserve; emphasize derivation from state and planning. |
| Template | Schema / Artifact | Preserve in RC2 command context; map structural contracts to Schema where applicable. |
| Validation | Validation | Preserve; keep evidence-based meaning. |
| Workflow | Workflow | Preserve; maintain command routing role. |
| Framework Adapter | Projection / Adapter language | Preserve outside core term table unless adapter standards require expansion. |

## 18. Open Decisions

- Whether `Governance` should be added as a first-class canonical vocabulary row in the next revision or remain represented through Authority, Ownership, Review, and Certification.
- Whether `Decision` should be added as a required term once a Decision Standard exists.
- Whether `Template` remains a core v3 term or migrates fully into Schema and Artifact vocabulary.
- Whether graph relationship labels should be uppercase machine labels, lowercase semantic labels, or both.
- Whether term identifiers should use `TERM-###`, slug IDs, or standard-qualified IDs.

## 19. Completion Checklist

- [x] Status marks this document as Draft / Candidate Standard.
- [x] Purpose, scope, and authority are defined.
- [x] Design principles and governance rules are defined.
- [x] Naming, synonym, forbidden term, and evolution rules are defined.
- [x] Required canonical vocabulary terms are defined.
- [x] Graph representation requirements are defined.
- [x] AI usage, migration, validation, and certification rules are defined.
- [x] RC2 harvest mapping is included.
- [x] Open decisions are recorded.
- [x] ProjectStatus remains unchanged.

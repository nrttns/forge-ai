# A.4.3 — Engine Registry RFC

>AI-DOS v3 · Engine Architecture RFC
> Engine Registry · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-004.3` |
| Title | A.4.3 — Engine Registry RFC |
| Version | `0.3.0-draft` |
| Status | RFC / Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Foundation Architecture |
| Document Type | Architecture RFC |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.004.3` |
| Scope | Defines the Engine Registry foundation responsibility only as a specialization of A.4 Engine Platform Architecture. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, individual Engine Specialization redefinition, implementation, certification, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 Engine Kernel; A.4.2 Engine Contract; A.1 Constitution; M.0; M.1; STD-000; STD-001; STD-002; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, constitutional principles, meta-model semantics, artifact metadata rules, canonical terminology, RFC template rules, and Engine Foundation normalization instructions. |
| Produces | Engine Registry foundation RFC, foundation boundary definitions, validation expectations, and downstream inputs for Engine Specialization RFCs. |
| Related Specifications | `docs/AI/Runtime/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## Executive Summary

This RFC defines the Engine Registry as the single authoritative discovery and registration mechanism for allAI-DOS v3 Engine instances. The Registry establishes what must be knowable about Engines and how that knowledge is governed, without prescribing implementation details such as storage technology, APIs, or runtime hosting. The Registry sits below the Engine Contract and adjacent to the Engine Kernel, publishing governed discoverability metadata that the Kernel consumes for coordination, lifecycle dispatch, and invocation routing. The Registry does not execute Engines, replace the Kernel, or own validation, certification, workflow, or Knowledge Graph semantics. It serves as the architectural boundary that prevents agents, tools, adapters, and individual Engines from inventing independent discovery systems. This RFC covers registration and deregistration models, discovery and metadata models, capability and dependency resolution, synchronization, validation and certification integration, traceability, governance rules, security constraints, and a comprehensive failure model.

---

## Purpose

The Engine Registry defines the single authoritative discovery and registration mechanism for allAI-DOS Engine instances.

The Engine Registry exists so the Engine Kernel can discover available Engines, inspect their governed metadata, resolve their declared capabilities, understand their dependencies, observe their lifecycle and health metadata, and route validation or certification handoffs without allowing agents, tools, adapters, workflows, or individual Engines to invent independent discovery systems.

The Registry is an architectural specification, not an implementation. It establishes what must be knowable about Engine instances and how that knowledge is governed. It does not prescribe how Registry information is stored, transported, queried, cached, synchronized, or exposed by any runtime host.

The governing principle is:

```text
The Engine Registry is the single source of truth for Engine discoverability.
The Engine Kernel consumes Registry truth.
The Registry does not execute Engines.
```

---

## Scope

This RFC defines the architectural model for:

1. Engine discovery;
2. Engine registration;
3. Engine identity;
4. Engine metadata;
5. Registry ownership;
6. Registry lifecycle;
7. Registry synchronization;
8. Registry validation;
9. Registry governance;
10. Registry traceability;
11. Capability resolution;
12. Dependency resolution;
13. Metadata publication;
14. Health reporting;
15. Failure handling.

---

## Out of Scope

This RFC does not:

1. implement Registry code;
2. define APIs, services, endpoints, SDKs, classes, functions, packages, protocols, or provider integrations;
3. define storage technology, database schemas, cache models, indexing engines, queues, transport mechanisms, file formats, or serialization requirements;
4. execute Engines;
5. host Runtime;
6. own Workflow;
7. own Orchestration;
8. own Validation;
9. own Certification;
10. own Knowledge Graph semantics;
11. own Standards;
12. own Engine state transitions;
13. redefine Engine Contracts;
14. update `docs/ProjectStatus.md`;
15. promote this RFC to canonical authority;
16. define authentication, authorization mechanisms, encryption, secrets handling, network policy, storage security, identity providers, or access-control implementations.

---

## Normative Authority

This RFC is governed by the following authority chain, listed from highest to nearest:

1. **Human Governance** — Final authority over allAI-DOS architectural decisions, certification, and promotion.
2. **`AGENTS.md`** — Operational governance contract defining agent behavior, constraints, and authority boundaries.
3. **`docs/AI/GOVERNANCE.md`** — Governance documentation defining AI consumption boundaries and authority constraints.
4. **`docs/AI/FrameworkGovernance.md`** — Transitional v3 governance framework defining authority delegation, review, and approval processes.
5. **`docs/AI/Architecture/A.1-Constitution.md`** — Constitutional authority governing framework-level principles, rights, and structural constraints.
6. **`docs/AI/Meta/M.0-Framework-Meta-Model.md`** — Meta-model authority owning framework-level concepts including Artifact, Entity, Relationship, Lifecycle, State, Authority, Ownership, Evidence, Validation, Review, Certification, and Reference.
7. **`docs/AI/Meta/M.1-Artifact-Meta-Model.md`** — Artifact meta-model authority owning the common governed artifact contract.
8. **`docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`** — Standards authority owning standards structure, lifecycle, validation, review, certification, and AI consumption expectations.
9. **`docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`** — Knowledge Graph authority owning graph semantics, node types, edge types, and traversal rules.
10. **`docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`** — Discovery Standard authority owning discovery semantics that the Registry must consume.
11. **A.3 — Runtime Architecture RFC** — Runtime architecture authority defining the execution host environment.
12. **A.4 — Engine Architecture RFC** — Parent Engine Architecture RFC defining the Engine Platform context.
13. **A.4.1 — Engine Kernel RFC** — Engine Kernel authority defining single execution coordination.
14. **A.4.2 — Engine Contract RFC** — Engine Contract authority defining the minimum architectural contract for Engines.

---

## Normative References

This RFC consumes the following normative references:

1. `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` — Document metadata format and mandatory field definitions.
2. `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` — Canonical terminology for governed vocabulary.
3. `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` — Template standard governing all template authority.
4. `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` — RFC template standard governing RFC structure.
5. `docs/AI/Architecture/A.1-Constitution.md` — Constitutional principles.
6. `docs/AI/Meta/M.0-Framework-Meta-Model.md` — Framework meta-model.
7. `docs/AI/Meta/M.1-Artifact-Meta-Model.md` — Artifact meta-model.
8. `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` — Framework standards.
9. `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` — Knowledge Graph standard.
10. `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` — Discovery standard.
11. `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` — Runtime architecture.
12. `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` — Engine architecture.
13. `docs/AI/Runtime/A.4.1-Engine-Kernel-RFC.md` — Engine Kernel.
14. `docs/AI/Runtime/A.4.2-Engine-Contract-RFC.md` — Engine Contract.

---

## Dependencies

This RFC depends on the following upstream documents, systems, and concepts:

1. **Governance authority** — Human Governance, `AGENTS.md`, `docs/AI/GOVERNANCE.md`, and `docs/FrameworkGovernance.md` must exist and be operative.
2. **Artifact identity** — M.1 must define what constitutes a valid artifact for Registry metadata.
3. **Lifecycle governance** — STD-000 must define lifecycle states and transitions that Registry lifecycle must reference.
4. **Traceability model** — M.0 and STD-010 must define traceability expectations that Registry trace metadata must satisfy.
5. **Discovery semantics** — STD-002 must define discovery semantics that the Registry must consume and publish.
6. **Terminology** — STD-003 must define canonical terminology used in this RFC.
7. **Template authority** — TPL-000 and TPL-001 govern the structure and compliance of this RFC.
8. **Runtime Architecture (A.3)** — The Registry depends on Runtime providing the execution host environment.
9. **Engine Architecture (A.4)** — Parent RFC defining the Engine Platform context.
10. **Engine Kernel (A.4.1)** — The Kernel is the primary consumer of Registry metadata.
11. **Engine Contract (A.4.2)** — The Registry publishes metadata derived from or associated with Engine Contracts.

---

## Architecture

### Registry Position

The Engine Registry sits below the Engine Contract and adjacent to the Engine Kernel as the governed discovery source for Engine instances.

```text
Human Governance
    ↓
AGENTS.md
    ↓
A.1 Constitution
    ↓
M.0 Framework Meta Model
    ↓
M.1 Artifact Meta Model
    ↓
STD-000 Framework Standards
    ↓
STD-001 Knowledge Graph Standard
    ↓
STD-002 Discovery Standard
    ↓
A.3 Runtime Architecture
    ↓
A.4 Engine Architecture
    ↓
A.4.1 Engine Kernel
    ↓
A.4.2 Engine Contract
    ↓
A.4.3 Engine Registry
    ↓
Registered Engine Instances
```

The Registry is consumed by the Engine Kernel. It does not replace the Kernel. The Kernel coordinates loading, lifecycle dispatch, invocation routing, dependency resolution, and execution handoffs. The Registry publishes authoritative discoverability metadata that the Kernel may consume while enforcing Engine Contracts and runtime governance.

#### Conceptual Placement

```text
Runtime
    ↓
Engine Platform
    ↓
Engine Kernel
    ↓
Engine Contract
    ↓
Engine Registry
    ↓
Registered Engine Metadata
    ↓
Individual Engines
```

This placement defines responsibility adjacency only. It does not define deployment topology, storage location, process boundary, network boundary, product architecture, programming model, or runtime host.

### Registry Architecture

The Engine Registry architecture consists of the following conceptual responsibilities. Each area is defined by what the Registry owns and what it explicitly does not own.

| Area | Registry Role | Non-Ownership Boundary |
|:---|:---|:---|
| Registration | Record governed Engine discoverability metadata after contract and ownership checks. | Does not execute or load Engine logic. |
| Deregistration | Remove or mark Engine discoverability as unavailable according to lifecycle and governance rules. | Does not decide certification revocation by itself. |
| Discovery | Provide the authoritative set of discoverable Engine instances. | Does not invoke Engines. |
| Lookup | Resolve a specific Engine identity, version, capability, owner, status, or dependency metadata. | Does not bypass Kernel enforcement. |
| Capability Resolution | Identify which registered Engines declare a capability compatible with a governed request. | Does not decide workflow scope or execute capability behavior. |
| Dependency Resolution | Publish declared dependency relationships and dependency health metadata. | Does not redefine dependency semantics owned by contracts, standards, or graph rules. |
| Metadata Publication | Make governed Engine metadata available to Kernel, Runtime, validation, review, certification, agents, and adapters. | Does not become an implementation API requirement. |
| Validation Handoff | Route registration, metadata, dependency, graph, and health evidence to the Validation System. | Does not own validation decisions. |
| Certification Handoff | Provide Registry evidence for certification review when required. | Does not certify Engines. |
| Synchronization | Keep Registry-discoverable metadata aligned with approved Engine Contract and Kernel-visible runtime evidence. | Does not create hidden parallel registries. |
| Health Reporting | Publish health metadata received through governed channels. | Does not own Engine state transitions. |
| Traceability | Preserve trace links from Engine metadata to authority, standards, contracts, validation evidence, and certification evidence. | Does not redefine traceability standards. |

### Registration Model

Registration is the governed act of making an Engine instance discoverable to the Engine Kernel through the Engine Registry.

An Engine may be registered only when it has a declared Engine Contract and the minimum Registry metadata required by this RFC. Registration must be explicit rather than inferred from file presence, runtime availability, tool configuration, adapter preference, conversation context, or undocumented convention.

#### Registration Preconditions

Before an Engine is registered, the Registry must have enough evidence to establish:

1. Stable Engine Identity;
2. Engine Name;
3. Engine Type;
4. Engine Version;
5. Engine Owner;
6. Engine Contract association;
7. Declared capabilities;
8. Declared dependencies;
9. Consumed standards;
10. Produced and consumed artifacts;
11. Knowledge Graph participation metadata;
12. Lifecycle state;
13. Validation status or validation requirement;
14. Certification status or certification requirement;
15. Trace metadata.

#### Registration Outcomes

A registration may result in one of the following architectural outcomes:

| Outcome | Meaning |
|:---|:---|
| Registered | The Engine is discoverable by the Kernel under the declared metadata and constraints. |
| Registered with Warnings | The Engine is discoverable, but non-blocking metadata, health, compatibility, or validation concerns must remain visible. |
| Pending Validation | The Engine is known to the Registry but not fully discoverable for invocation until validation evidence is accepted by the Validation System. |
| Pending Certification | The Engine is validated enough for review but requires certification before use in certified workflows. |
| Rejected | The Engine cannot be made discoverable because required metadata, ownership, contract, dependency, validation, or governance evidence is missing or invalid. |
| Suspended | The Engine was previously discoverable but is temporarily unavailable due to health, governance, compatibility, validation, or lifecycle constraints. |
| Retired | The Engine is no longer available for new discovery but remains traceable for historical evidence and artifact lineage. |

#### Deregistration

Deregistration removes an Engine from active discoverability without deleting required historical traceability.

Deregistration must preserve:

- Prior Engine identity;
- Version history;
- Owner history;
- Registration and deregistration rationale;
- Validation and certification evidence;
- Produced artifact lineage;
- Consumed artifact lineage;
- Graph participation records;
- Trace metadata necessary for audit and review.

### Discovery Model

Discovery is the governed process by which the Engine Kernel, Runtime, validation, review, certification, agents, tools, or platform adapters determine which Engine instances are available for a permitted purpose.

Discovery must be:

- Registry-backed;
- Contract-aware;
- Version-aware;
- Capability-aware;
- Dependency-aware;
- Status-aware;
- Lifecycle-aware;
- Validation-aware;
- Certification-aware;
- Traceable.

Discovery must not be based solely on implementation presence, naming convention, local tool configuration, package availability, environment variables, host runtime assumptions, or agent memory.

#### Discovery Consumers

| Consumer | Permitted Registry Use |
|:---|:---|
| Engine Kernel | Resolve discoverable Engines, capabilities, lifecycle metadata, dependency metadata, health metadata, and trace evidence before coordination. |
| Runtime | Determine which Registry-backed Engine capabilities may be presented to Kernel-governed execution. |
| Workflow | Identify available Engine capabilities required by approved lifecycle procedures without redefining Registry truth. |
| Validation | Inspect registration completeness, dependency declarations, metadata integrity, artifact compatibility, graph participation, and health evidence. |
| Review | Assess whether Registry evidence supports readiness for governed use. |
| Certification | Consume Registry evidence as part of human-governed certification handoff. |
| Agents | Read Registry-resolved context when delegated by Runtime and Kernel, without self-registering or bypassing governance. |
| Platform Adapters | Map platform-specific availability into Registry-governed metadata without redefining Engine concepts. |

### Metadata Model

Every registered Engine shall expose the following Registry metadata.

| Metadata | Architectural Meaning |
|:---|:---|
| Engine Identity | Stable identifier for the registered Engine instance or Engine lineage. |
| Engine Name | Human-readable Engine name. |
| Engine Type | Architectural Engine category or Engine role. |
| Engine Version | Version of the Engine registration target and compatibility boundary. |
| Engine Status | Discoverability and availability status. |
| Engine Owner | Accountable ownership authority for the Engine. |
| Engine Description | Plain-language description of Engine purpose and boundary. |
| Registered Capabilities | Explicit capabilities the Engine declares for Kernel-governed use. |
| Declared Dependencies | Required Engines, artifacts, standards, graph elements, runtime conditions, or governance prerequisites. |
| Consumed Standards | Standards the Engine relies on or must conform to. |
| Produced Artifacts | Artifact types or evidence categories the Engine may produce. |
| Consumed Artifacts | Artifact types or evidence categories the Engine may consume. |
| Graph Participation | Knowledge Graph nodes, relationships, traversal expectations, or graph evidence participation declared by the Engine. |
| Validation Status | Current validation state, validation requirement, or validation blocker. |
| Certification Status | Current certification state, certification requirement, or certification blocker. |
| Health Status | Operational health metadata visible to Registry consumers. |
| Lifecycle State | Architectural lifecycle position of the Engine registration. |
| Telemetry Metadata | Metadata describing expected observability evidence. |
| Trace Metadata | Links to authority, contracts, standards, evidence, registration events, decisions, validation, review, certification, and lifecycle history. |

Metadata must be sufficient for governance and Kernel coordination without requiring implementation inspection.

### Capability Resolution Model

Capability resolution determines which registered Engine instances declare capability compatibility with a governed request.

Capability resolution must evaluate:

1. Requested capability identity or description;
2. Permitted workflow and runtime context;
3. Engine Contract capability declaration;
4. Engine version compatibility;
5. Engine lifecycle state;
6. Engine status and health metadata;
7. Validation and certification requirements;
8. Dependency satisfaction;
9. Consumed standards compatibility;
10. Artifact compatibility;
11. Graph participation requirements;
12. Owner and governance restrictions;
13. Traceability completeness.

Capability resolution produces a Registry resolution for the Engine Kernel. The Registry resolution is not an invocation. The Engine Kernel remains responsible for Kernel-governed execution coordination, lifecycle enforcement, dependency gating, invocation routing, failure containment, telemetry handling, and validation handoff.

#### Capability Resolution Constraints

The Registry must not:

- Infer undocumented capabilities from implementation behavior;
- Allow capability declarations to bypass Engine Contract requirements;
- Rank convenience above governance;
- Select Engines for workflows that lack required validation or certification status;
- Treat agent preference as Registry truth;
- Substitute adapter-specific behavior for Engine capability identity.

### Dependency Resolution Model

Dependency resolution determines whether an Engine registration declares required dependencies and whether those dependencies are discoverable, compatible, healthy, and governance-acceptable.

Dependencies may include:

- Other Engines;
- Engine capabilities;
- Consumed standards;
- Required artifacts;
- Knowledge Graph participation requirements;
- Validation prerequisites;
- Certification prerequisites;
- Runtime or Kernel constraints;
- Adapter availability constraints;
- Owner approvals or governance decisions.

The Registry publishes dependency metadata and dependency findings. It does not redefine dependency semantics owned by the Engine Contract, Knowledge Graph Standard, Discovery Standard, Framework Standards, Runtime Architecture, or Engine Kernel.

#### Dependency Outcomes

| Outcome | Meaning |
|:---|:---|
| Satisfied | Required dependency is discoverable, compatible, and governance-acceptable. |
| Satisfied with Warning | Dependency is usable but has non-blocking health, version, validation, certification, or traceability concerns. |
| Pending | Dependency may become available after validation, certification, synchronization, owner approval, or lifecycle transition. |
| Unsatisfied | Required dependency is missing, incompatible, unhealthy, invalid, uncertified when certification is required, or insufficiently traceable. |
| Conflicting | Dependency declaration conflicts with authority, standards, graph rules, Engine Contract, Kernel constraints, or another required dependency. |

### Synchronization Model

Registry synchronization keeps Engine discoverability metadata aligned with approved Engine Contracts, Kernel-visible runtime evidence, validation findings, certification findings, health metadata, lifecycle events, and trace evidence.

Synchronization must preserve one Registry truth for discoverability. It must not create separate competing sources of Engine availability.

#### Synchronization Sources

Registry synchronization may consume evidence from:

- Engine Contracts;
- Engine Kernel lifecycle evidence;
- Runtime context and execution evidence;
- Validation reports;
- Review findings;
- Certification handoffs or decisions;
- Knowledge Graph evidence;
- Standard conformance evidence;
- Adapter availability evidence;
- Owner governance decisions;
- Health and telemetry observations.

#### Synchronization Rules

The Registry shall:

1. Preserve authoritative registration history;
2. Distinguish proposed metadata from accepted Registry metadata;
3. Mark stale, conflicting, or incomplete metadata visibly;
4. Prevent hidden local overrides from becoming Registry truth;
5. Retain traceability for all material registration changes;
6. Route validation-relevant changes to the Validation System;
7. Route certification-relevant changes to the Certification System;
8. Make unsafe or unresolved synchronization states discoverable as blockers rather than silently ignoring them.

### Traceability Model

Registry traceability links Engine discoverability metadata to the authority, standards, contracts, evidence, decisions, lifecycle events, validation findings, review findings, certification outcomes, and historical changes that justify the Registry state.

Every material Registry entry or update should be traceable to:

1. Governing authority chain;
2. Engine Contract;
3. Engine owner;
4. Declared capabilities;
5. Declared dependencies;
6. Consumed standards;
7. Artifact declarations;
8. Graph participation declarations;
9. Validation evidence;
10. Review evidence when applicable;
11. Certification evidence when applicable;
12. Lifecycle events;
13. Health and telemetry evidence;
14. Synchronization evidence;
15. Governance decisions or human approvals when required.

Traceability must support audit, review, certification, troubleshooting, migration, retirement, and historical artifact lineage.

### Governance Rules

The Engine Registry shall follow these governance rules:

1. The Registry is the single source of truth for Engine discoverability.
2. The Registry shall not execute Engines.
3. The Registry shall not replace the Engine Kernel.
4. The Registry shall not redefine Engine Contracts.
5. The Registry shall not redefine Runtime behavior.
6. The Registry shall not redefine Knowledge Graph semantics.
7. The Registry shall not redefine framework standards.
8. Registration must be explicit and traceable.
9. Deregistration must preserve historical evidence.
10. Discovery must be contract-aware and validation-aware.
11. Capability resolution must remain bounded by declared Engine capabilities.
12. Dependency resolution must expose blockers rather than silently bypassing dependencies.
13. Registry metadata must distinguish factual status from proposed or stale status.
14. Validation and certification metadata must be consumed from their owning systems.
15. Agents, tools, and adapters may consume Registry evidence but must not create parallel discovery authority.
16. Human Governance may override Registry outcomes only through documented and traceable governance action.

### Security Constraints

The Engine Registry must preserve security and governance boundaries at the architectural level.

Security constraints include:

- Registration must not make unowned Engines discoverable;
- Registration must not hide missing validation or certification requirements;
- Discovery must not reveal capabilities beyond permitted governance context;
- Capability resolution must not bypass ownership, lifecycle, health, validation, or certification gates;
- Dependency resolution must not silently accept incompatible or unknown dependencies;
- Registry synchronization must not trust untraceable metadata changes;
- Agents and adapters must not self-promote implementation availability into Registry truth;
- Health and telemetry metadata must not be treated as authorization;
- Historical traceability must be preserved for audit and incident review;
- Platform-specific adapters must not redefine Registry metadata meaning.

Implementation-specific security controls (authentication, authorization, encryption, secrets handling, network policy, storage security, identity providers, access-control implementations) are out of scope for this RFC and belong to future implementation specifications.

---

## Design Decisions

### DD-001: Registry as Single Discovery Authority

**Context:**AI-DOS needs a mechanism for Engine discoverability. The question is whether multiple discovery sources may coexist.

**Options considered:**
1. Multiple competing discovery sources (file-based, convention-based, adapter-based) — rejected because they fragment discoverability truth, create inconsistent metadata, and allow agents or adapters to bypass governance.
2. Single authoritative Registry as the sole discovery source — selected because it ensures one governed truth for Engine discoverability that the Kernel, Runtime, validation, review, certification, and agents must consume.

**Rationale:** A single Registry prevents agents, tools, adapters, and individual Engines from inventing independent discovery systems. All discovery must be Registry-backed, contract-aware, and traceable.

### DD-002: Registry Does Not Execute Engines

**Context:** The Registry needs a defined relationship to Engine execution. The question is whether the Registry should participate in execution coordination.

**Options considered:**
1. Registry coordinates execution alongside the Kernel — rejected because it would create a second execution authority, violating the single execution authority model defined by A.4.1.
2. Registry publishes discoverability metadata only; Kernel coordinates execution — selected because it preserves clear separation between discovery and execution concerns.

**Rationale:** The Registry produces a resolution for the Kernel. The Registry resolution is not an invocation. This separation ensures that the Registry cannot become an execution controller or a second dispatcher.

### DD-003: Registry Entry Lifecycle Tied to Registration Outcomes

**Context:** Registry entries need lifecycle management. The question is whether the Registry should define its own lifecycle states or reuse Engine Kernel lifecycle states.

**Options considered:**
1. Registry reuses the 11-state Engine Kernel lifecycle model directly — rejected because Registry concerns (discoverability, metadata completeness, registration outcomes) are distinct from Kernel execution concerns (invocation, running, completion).
2. Registry defines registration-outcome-based lifecycle states — selected because it aligns Registry lifecycle with discoverability and governance concerns.

**Rationale:** The Registry lifecycle reflects registration outcomes (Registered, Registered with Warnings, Pending Validation, Pending Certification, Rejected, Suspended, Retired) which are distinct from but compatible with the Engine Kernel's execution lifecycle states.

### DD-004: Explicit Registration Over Convention-Based Discovery

**Context:** Engines need to become discoverable. The question is how Engines enter the Registry.

**Options considered:**
1. Convention-based discovery (file presence, naming, directory structure) — rejected because it creates implicit, undocumented, and ungoverned discovery paths.
2. Explicit registration with preconditions and outcomes — selected because it ensures every discoverable Engine has validated metadata, explicit ownership, contract association, and trace evidence.

**Rationale:** Registration must be explicit rather than inferred from file presence, runtime availability, tool configuration, adapter preference, conversation context, or undocumented convention. This aligns with A.4.1's prohibition of discovery by convention.

---

## Ownership

| Role | Party | Accountability |
|:---|:---|:---|
| Owner | Framework Governance | Ultimate accountability for the Engine Registry RFC, including promotion decisions, scope changes, and ensuring the Registry remains a discovery authority without becoming an execution controller. |
| Maintainers | Framework Architecture Team | Day-to-day maintenance, editorial updates, gap analysis, and TPL-001 compliance. |
| Review Authority | Enterprise Documentation Standards Board | Structural, metadata, STD-010 compliance, STD-003 terminology, and architectural quality review. |
| Approval Authority | Human Governance | Final approval for promotion beyond Draft status. |

The Registry System within theAI-DOS Engine Architecture is the operational owner of Registry discoverability truth. This is distinct from the RFC ownership above. The Registry System owns:

- Engine discoverability truth;
- Registry entry completeness expectations;
- Registry metadata publication rules;
- Registry synchronization rules;
- Registry traceability requirements;
- Registry failure classification for discovery and registration issues.

---

## Responsibilities

The RFC Owner (Framework Governance) is responsible for:

1. maintaining the architectural integrity of the Engine Registry RFC;
2. ensuring this RFC remains compliant with TPL-001, STD-010, STD-003, and all governing inputs;
3. coordinating with A.4.1 (Engine Kernel) and A.4.2 (Engine Contract) to prevent scope overlap;
4. ensuring the Registry does not drift into execution coordination, validation ownership, certification ownership, or Knowledge Graph semantics;
5. responding to Engine Registry-related change requests and governance questions;
6. initiating review when this RFC is ready for promotion;
7. ensuring future Engine Specialization RFCs reference this Registry for discoverability and metadata requirements;
8. deciding on Open Questions through proper governance channels.

---

## Non Responsibilities

The RFC Owner (Framework Governance) is not responsible for:

1. implementing Registry code, APIs, databases, or storage systems;
2. defining storage technology, cache models, indexing engines, or serialization formats;
3. executing Engines;
4. hosting Runtime;
5. defining Workflow or Orchestration;
6. owning Validation decisions or Validation logic;
7. owning Certification decisions;
8. owning Knowledge Graph semantics;
9. redefining Engine Contracts;
10. redefining framework standards;
11. owning individual Engine business logic;
12. certifying this document;
13. updating `docs/ProjectStatus.md`;
14. defining authentication, authorization, encryption, or access-control implementations.

The Registry System does not own:

- Constitutional authority;
- Framework standards;
- Knowledge Graph semantics;
- Engine Contract definitions;
- Engine Kernel execution coordination;
- Workflow ownership;
- Validation decisions;
- Review decisions;
- Certification decisions;
- Project state authority;
- Individual Engine business logic.

---

## Interfaces

### Runtime / Registry Boundary

Runtime hosts governed execution context. It may consume Registry evidence to know which Engine capabilities are available for Kernel-governed coordination. Runtime does not own Registry truth and must not infer Engine availability outside the Registry.

### Engine Kernel / Registry Boundary

The Engine Kernel is the primary consumer of the Engine Registry. The Kernel uses Registry metadata for discovery, capability resolution, dependency visibility, lifecycle awareness, health visibility, telemetry expectations, validation handoff, and traceability. The Kernel remains responsible for execution coordination and invocation routing.

### Engine Contract / Registry Boundary

The Engine Contract defines what an Engine must declare. The Registry publishes discoverability metadata derived from or associated with that contract. The Registry does not redefine the contract and must reject or flag registration metadata that conflicts with required contract expectations.

### Workflow / Registry Boundary

Workflow consumes Registry discovery to determine whether required Engine capabilities exist for a governed lifecycle. Workflow does not own discovery truth and must not use unregistered implementation availability as a substitute for Registry-backed Engine resolution.

### Validation / Registry Boundary

Validation consumes Registry evidence and produces validation findings. The Registry records validation status and validation blockers but does not own validation logic or validation decisions.

### Certification / Registry Boundary

Certification consumes Registry evidence for certification handoff and decision support. The Registry records certification status and certification blockers but does not certify Engines, capabilities, or outputs.

### Knowledge Graph / Registry Boundary

The Registry records graph participation metadata and links Engine entries to graph-related evidence. It does not redefine Knowledge Graph semantics, node meaning, relationship meaning, traversal rules, or graph validation rules.

### Agent / Registry Boundary

Agents consume Registry-resolved context through Runtime and Kernel-governed workflows. Agents must not register Engines, select unregistered Engines, bypass Registry discovery, treat memory as Registry truth, or self-certify Registry metadata.

### Platform Adapter / Registry Boundary

Platform Adapters may translate platform-specific Engine availability into Registry-governed metadata. Adapters must not redefine Engine identity, capability meaning, dependency meaning, validation status, certification status, graph participation, or Registry ownership.

---

## Lifecycle

### Registry Entry Lifecycle

The Registry defines the following lifecycle states for Engine registrations:

```text
Declared
    ↓
Pending Validation
    ↓
Registered / Registered with Warnings
    ↓
Pending Certification (when required)
    ↓
Registered (Certified)
    ↓
Suspended
    ↓
Retired
```

#### Lifecycle States

1. **Declared** — Engine identity and metadata have been submitted but registration preconditions are not yet fully satisfied.
2. **Pending Validation** — Registration metadata is known to the Registry but not fully discoverable for invocation until validation evidence is accepted.
3. **Registered** — The Engine is discoverable by the Kernel under declared metadata and constraints. All preconditions are satisfied.
4. **Registered with Warnings** — The Engine is discoverable, but non-blocking concerns (health, compatibility, validation, traceability) must remain visible.
5. **Pending Certification** — The Engine is validated enough for review but requires certification before use in certified workflows.
6. **Suspended** — The Engine was previously discoverable but is temporarily unavailable due to health, governance, compatibility, validation, or lifecycle constraints.
7. **Retired** — The Engine is no longer available for new discovery but remains traceable for historical evidence and artifact lineage.

A **Rejected** state is also possible when required metadata, ownership, contract, dependency, validation, or governance evidence is missing or invalid. Rejected entries are not discoverable for invocation but may retain trace evidence of the rejection.

#### Lifecycle Rules

1. All state transitions must be traceable.
2. No Engine may be discovered for invocation while in Declared, Pending Validation, Rejected, or Suspended states unless explicitly permitted by governance.
3. Retired Engines must remain traceable for historical audit and artifact lineage.
4. Deregistration must preserve historical evidence and trace metadata.
5. State transitions must produce Registry events for synchronization and audit.

---

## Validation

### Validation Integration

The Registry integrates with Validation by handing off evidence required to verify registration quality, metadata completeness, dependency integrity, graph participation, standard conformance, health declarations, lifecycle state, and traceability.

Validation may inspect whether:

- Required metadata exists;
- Engine Contract association is present;
- Ownership is explicit;
- Capability declarations are bounded;
- Dependency declarations are complete and compatible;
- Consumed standards are identified;
- Produced and consumed artifacts are compatible with M.1 expectations;
- Graph participation is compatible with STD-001;
- Discovery metadata is compatible with STD-002;
- Validation status is current;
- Lifecycle state is coherent;
- Trace metadata links to governing authority and evidence.

The Registry does not own validation outcomes. It records and publishes validation status as metadata after the Validation System produces or accepts validation evidence.

### Certification Integration

The Registry supports Certification by preserving the discoverability, validation, ownership, dependency, lifecycle, health, artifact, graph, telemetry, and trace evidence needed for a certification handoff.

Certification may require Registry evidence to answer:

- Which Engine was registered?
- Which version was registered?
- Who owned the Engine at registration and certification time?
- Which capabilities were discoverable?
- Which dependencies were declared and satisfied?
- Which standards were consumed?
- Which artifacts could be produced or consumed?
- Which graph participation was declared?
- Which validation evidence existed?
- Which lifecycle and health state existed?
- Which Registry changes occurred before certification?
- Which authority and governance decisions applied?

The Registry does not certify Engines, capabilities, workflows, outputs, or artifacts. Certification remains governed by the Certification System and Human Governance.

---

## Risks

| # | Risk | Severity | Mitigation |
|:---|:---|:---|:---|
| R-001 | Future implementations may interpret the Registry as a concrete storage or API specification. | Medium | Explicit "no implementation" statements throughout; architecture-only contract preserved. |
| R-002 | Platform adapters may create parallel discovery systems by bypassing the Registry. | High | Governance rules prohibit parallel discovery; agents and adapters must not self-promote availability into Registry truth. |
| R-003 | Registry metadata may become stale if synchronization with Kernel evidence, validation findings, and certification outcomes is not enforced. | Medium | Synchronization model with explicit rules and sources; stale metadata must be visibly marked. |
| R-004 | Registry lifecycle states may conflict with Engine Kernel lifecycle states. | Low | Registry lifecycle is discoverability-focused (distinct from Kernel execution lifecycle); both are documented and both must be consistent. |
| R-005 | Capability resolution may be gamed by agents or adapters submitting false capability metadata. | Medium | Capability resolution constraints prohibit inferring undocumented capabilities, bypassing contract requirements, and treating agent preference as truth. |
| R-006 | Concrete Registry schema, validation checklists, and certification categories remain undefined. | Low | Documented as Open Questions; they do not block the architectural model. |

---

## Open Questions

The following questions remain open for later governance, standards, or implementation-track work:

1. What approval process will promote this RFC from draft to canonical authority?
2. What specific validation checklist will be used for Registry entries?
3. What certification categories will apply to Engine registrations versus Engine capabilities?
4. How should Registry metadata versioning align with Engine Contract versioning across breaking changes?
5. Which Registry metadata changes require review before discoverability changes?
6. How should retired Engine registrations remain discoverable for historical audit without being selectable for new execution?
7. What minimum traceability evidence is required for platform adapter-provided registration metadata?
8. How should temporary health degradation affect certified workflow eligibility?
9. How should Registry synchronization conflicts be escalated to Human Governance?
10. What future canonical artifact should define Registry validation checklists after this RFC is reviewed?

---

## Completion Criteria

This RFC is complete for draft purposes when:

1. status is marked RFC / Draft;
2. canonical status is explicitly not claimed;
3. purpose is defined;
4. scope is defined;
5. out of scope is defined and non-empty;
6. normative authority is declared;
7. normative references are listed with full paths;
8. dependencies are listed with relationship context;
9. architecture section contains position, architecture table, registration, discovery, metadata, capability resolution, dependency resolution, synchronization, traceability, governance rules, and security constraints;
10. design decisions are documented with context, options, and rationale;
11. ownership is explicitly assigned;
12. responsibilities are listed;
13. non responsibilities are listed;
14. interfaces are described for all collaborator boundaries;
15. lifecycle model is defined with states and rules;
16. validation and certification integration are defined;
17. risks are identified with severity and mitigation;
18. open questions are listed (non-empty at Draft stage);
19. no code implementation, APIs, or storage technology is defined;
20. no ProjectStatus update is performed;
21. A.4, A.4.1, A.4.2, STD-000, STD-001, and STD-002 are not modified.

---

## Version History

| Version | Status | Notes |
|:---|:---|:---|
| 0.1.0-draft | RFC / Draft | Initial draft — Engine Registry RFC created as documentation-only architecture. |
| 0.1.1-draft | RFC / Draft | Enterprise refactoring: STD-010 full metadata compliance, executive summary, stakeholder impact matrix, change log, glossary, cross-reference index, consistent formatting and hierarchy. |
| 0.2.0-draft | RFC / Draft | Family normalization: metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. |
| 0.3.0-draft | RFC / Draft | TPL-001 compliance refactoring. Restructured into 20 mandatory sections. Added Design Decisions, Ownership (RFC-level), Responsibilities, Non Responsibilities, Lifecycle (Registry entry lifecycle), Risks. Removed Table of Contents, classification table, Completion Report, and Family Normalization Notes. Renamed Change Log to Version History. Standardized Identifier and Traceability ID. Moved Stakeholder Impact Matrix, Glossary, and Cross-Reference Index to Appendices. No content or authority changes. |

---

## Appendix A: Stakeholder Impact Matrix

| Stakeholder | Role | Impact | Interaction Mode |
|:---|:---|:---|:---|
| **Framework Architecture Team** | Owner and maintainer of this RFC and the Registry architectural model. | Direct — defines the governing rules, metadata expectations, and relationship boundaries. | Authors, reviews, and promotes the RFC through governance. |
| **Engine Kernel** | Primary consumer of Registry metadata for discovery, coordination, and routing. | Direct — depends on Registry truth for all Engine resolution decisions. | Consumes published metadata; does not modify Registry architecture. |
| **Engine Implementers** | Parties that develop and register Engine instances. | Direct — must comply with registration preconditions, metadata requirements, and lifecycle rules. | Provide metadata, declare capabilities and dependencies, observe governance outcomes. |
| **Validation System** | Inspects Registry evidence for conformance, completeness, and integrity. | Direct — consumes Registry metadata to produce validation findings. | Receives handoff evidence from Registry; publishes validation status back to Registry. |
| **Certification System** | Consumes Registry evidence for human-governed certification decisions. | Direct — depends on Registry traceability and evidence preservation. | Consumes Registry evidence during certification handoff; does not modify Registry rules. |
| **Platform Adapters** | Translate platform-specific Engine availability into Registry-governed metadata. | Moderate — must map platform concepts to Registry metadata without redefining semantics. | Produce adapter-mediated registration metadata; must conform to Registry ownership rules. |
| **Agents** | Consume Registry-resolved context through Runtime and Kernel workflows. | Moderate — benefit from governed discovery but are constrained from self-registering or bypassing Registry. | Read-only consumers of Registry context via Kernel delegation. |
| **Human Governance** | Final authority for overrides, approvals, and promotion decisions. | Indirect — invoked only for escalated governance actions, overrides, or certification approval. | May override Registry outcomes through documented and traceable governance action. |
| **Enterprise Documentation Standards Board** | Review authority for this RFC. | Direct — responsible for STD-010 compliance review and architectural quality. | Reviews metadata, structure, and governance alignment before promotion. |

---

## Appendix B: Glossary

| Term | Definition |
|:---|:---|
| **Engine** | A governed computational unit within theAI-DOS v3 Engine Architecture that declares capabilities, dependencies, and metadata through an Engine Contract. |
| **Engine Registry** | The single authoritative discovery and registration mechanism for allAI-DOS Engine instances, owned by the Registry System. |
| **Engine Kernel** | The primary consumer of the Engine Registry, responsible for loading, lifecycle dispatch, invocation routing, dependency resolution, and execution handoffs. |
| **Engine Contract** | The architectural specification defining what an Engine must declare, including capabilities, dependencies, and metadata expectations. |
| **Registration** | The governed act of making an Engine instance discoverable to the Engine Kernel through the Engine Registry. |
| **Deregistration** | The removal of an Engine from active discoverability while preserving required historical traceability. |
| **Discovery** | The governed process by which the Kernel, Runtime, validation, review, certification, agents, or adapters determine which Engine instances are available for a permitted purpose. |
| **Capability Resolution** | The process of determining which registered Engine instances declare capability compatibility with a governed request. |
| **Dependency Resolution** | The process of determining whether an Engine's declared dependencies are discoverable, compatible, healthy, and governance-acceptable. |
| **Synchronization** | The process of keeping Registry discoverability metadata aligned with approved Engine Contracts, Kernel-visible runtime evidence, and upstream governance findings. |
| **Traceability** | The architectural linking of Registry metadata to the authority, standards, contracts, evidence, decisions, and historical changes that justify the Registry state. |
| **Registry System** | The architectural owner of the Engine Registry, accountable for discoverability truth, metadata completeness, and evidence handoff. |
| **Validation System** | The architectural subsystem that inspects Registry evidence and produces validation findings, owned independently from the Registry. |
| **Certification System** | The architectural subsystem that consumes Registry evidence for human-governed certification decisions, owned independently from the Registry. |
| **Knowledge Graph** | The governed graph structure (per STD-001) in which Engines may participate through declared nodes, relationships, and traversal expectations. |

---

## Appendix C: Cross-Reference Index

### C.1 Upstream References

| Reference | Identifier | Relationship |
|:---|:---|:---|
| AGENTS.md | — | Normative Authority |
| Framework Governance | `docs/AI/FrameworkGovernance.md` | Normative Authority |
| A.1 Constitution | `docs/AI/Architecture/A.1-Constitution.md` | Normative Reference |
| M.0 Framework Meta Model | `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Normative Reference |
| M.1 Artifact Meta Model | `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Dependency |
| STD-000 Framework Standards | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Normative Reference |
| STD-001 Knowledge Graph Standard | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` | Normative Reference |
| STD-002 Discovery Standard | `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` | Normative Reference |
| STD-010 Document Metadata Standard | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Normative Reference |

### C.2 Peer References

| Reference | Identifier | Relationship |
|:---|:---|:---|
| A.3 Runtime Architecture | `AI-DOS-A-003` | Related Specification |
| A.4 Engine Architecture | `AI-DOS-A-004` | Related Specification |
| A.4.1 Engine Kernel | `AI-DOS-A-004.1` | Related Specification |
| A.4.2 Engine Contract | `AI-DOS-A-004.2` | Related Specification |

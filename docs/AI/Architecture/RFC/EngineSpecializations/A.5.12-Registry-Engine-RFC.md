# A.5.12 — Registry Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-12` |
| Title | A.5.12 — Registry Engine RFC |
| Version | `0.3.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Specialization Architecture |
| Document Type | Engine Specialization RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-13 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.005.12` |
| Scope | Defines the Registry Engine specialization only, including its purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation within the AI-DOS v4 Engine Platform. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification decision-making, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; A.5.1 through A.5.11 Engine Specialization RFCs; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, canonical terminology, metadata rules, governance policies from Governance Engine (A.5.10), lifecycle events from Engine Lifecycle (A.4.4), workflow dependency results from Workflow Engine (A.5.11), registration requests from all Engines (A.5.1–A.5.11), and repository-normalization instructions. |
| Produces | Registry Engine architecture specification, Registry Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.10-Governance-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.11-Workflow-Engine-RFC.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, A.5.0 template compliance, TPL-001 specialization compliance, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

<details>
<summary>Metadata Value Expansion</summary>

**Normative References (full paths):**

- `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`
- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`

**Consumed Authorities:**

- TPL-001: RFC mandatory section structure (20 sections), specialization model, validation rules, optional section catalog, anti-patterns
- TPL-000: template lifecycle, template taxonomy, placeholder grammar, naming conventions, validation model, compliance levels, certification requirements, directory structure, composition and inheritance model
- STD-010: metadata field definitions, relationship taxonomy, document class expectations, lifecycle model, governance rules
- STD-003: canonical terminology for RFC-related vocabulary
- A.3: Runtime Architecture as the governing architectural context
- A.4: Engine Platform Architecture as the governing engine context
- A.4.1–A.4.7: Engine Foundation RFCs as the governing engine capability and contract context
- A.5.0: Engine Specialization RFC Template as the governing template contract, section mapping, and validation model
- A.5.1 through A.5.11: Upstream Engine Specialization RFCs as the governing context for registration, governance consumption, and discovery

**Promotion Requirements (expanded):**

- STD-010 Section 4.2: All 25 mandatory metadata fields present and correctly typed
- STD-010 Section 4.5: Identifier follows `AI-DOS-A-5-12` pattern
- STD-010 Section 4.6: Version follows `major.minor.patch-status` format
- STD-003: All terminology conforms to canonical definitions
- TPL-001: All 20 mandatory sections present in required order
- A.5.0: All 16 Specializable subsections contain Engine-specific content
- Runtime README: Navigation entries present and correct
- Framework Governance: Structural and metadata review passed
- Human Governance: Architectural review passed; explicit canonical promotion recorded

</details>

---

## Executive Summary

The Registry Engine is the authoritative registration and discovery service for the AI-DOS v4 Engine Platform. It operates as a platform infrastructure service — positioned outside the linear pipeline flow alongside the Governance Engine (A.5.10) and the Workflow Engine (A.5.11) — and provides six core services to the entire platform: registration governance, capability registry management, engine health monitoring, discovery services, registration lifecycle management, and registration audit trail maintenance. The Registry Engine builds upon the low-level registration mechanism defined by A.4.3 Engine Registry, adding governance validation, capability indexing, health state derivation from lifecycle events, and query-based discovery capabilities on top of that foundational mechanism.

Every engine registration passes through a five-stage internal processing pipeline: intake validation, governance evaluation against policies from the Governance Engine (A.5.10), capability validation against the A.4.7 capability domain model, registration recording with immutable versioned records, and notification distribution to subscribers and observability systems. The Registry Engine maintains eight architectural invariants — the most critical being governance precedence for all registrations (INV-REG-2), capability index consistency (INV-REG-3), discovery accuracy (INV-REG-4), and engine non-interference (INV-REG-7) — which ensure that the platform's engine composition is always governance-compliant, that discovery results are authoritative, and that the Registry Engine never corrupts any Engine's internal state.

The Registry Engine's primary output is the immutable, versioned Registration Record. Secondary outputs include the live capability registry index, health state reports, discovery results, and a complete, append-only registration audit trail. Its outputs are consumed by all Engines (A.5.1–A.5.11) for peer discovery and availability confirmation, by the Workflow Engine (A.5.11) for engine availability verification during workflow orchestration, by the Governance Engine (A.5.10) for audit trail and compliance tracking, and by the Memory Engine (A.5.9) for archival. No AI/LLM components are invoked or required; all registration validation, governance evaluation, capability validation, health state derivation, and discovery query processing are performed through deterministic evaluation functions.

---

## Purpose

### Engine Purpose

The Registry Engine exists to provide a governed, auditable, and capability-aware layer on top of the Engine Platform's registration mechanism (A.4.3). The Engine Platform's A.4.3 Engine Registry defines the low-level registration contract — the mechanism by which Engines register, deregister, and discover each other. However, A.4.3 does not define registration governance (which registrations are authorized and under what conditions), capability tracking (maintaining a live index of what capabilities each registered Engine provides), health monitoring (tracking the operational status of each registered Engine), or registration audit trail (recording the complete history of registration events for compliance and troubleshooting). Without a dedicated Registry Engine, these concerns would be scattered across individual Engines or left unaddressed, leading to ungoverned registrations, inconsistent capability tracking, blind spots in engine health visibility, and no audit trail for registration events.

A registration, in the context of this Engine, is the act of an Engine declaring its identity, capabilities, consumed artifact types, produced artifact types, and operational parameters to the Engine Platform. The Registry Engine receives these declarations, validates them against governance policies and the A.4.7 capability domain model, produces an immutable Registration Record, and maintains a live capability index that other Engines can query for discovery. Each registration event — creation, update, deregistration, or status change — produces an immutable audit trail entry.

The Registry Engine occupies a service layer position alongside the Governance Engine (A.5.10) and the Workflow Engine (A.5.11). It does not participate in the main pipeline data flow but instead provides foundational services that all Engines depend on: the ability to register, to discover peers, and to verify that the platform's engine composition is governance-compliant. The Registry Engine's INV-REG-7 invariant guarantees that it provides these services without modifying any Engine's internal state.

The Registry Engine's purpose aligns with Engine Capability domain "Registry" as defined by A.4.7. The Registry Engine uniquely owns the capability of registration governance, capability registry management, engine health monitoring, and registration audit trail within the Engine Platform. The Registry Engine does not define the registration mechanism itself — that is owned by A.4.3. The Registry Engine consumes the registration mechanism and adds governance, capability tracking, health monitoring, and audit capabilities on top of it. The Registry Engine does not manage Engine lifecycles — that is owned by A.4.4. The Registry Engine observes lifecycle events and reflects them in the health state but does not control lifecycle transitions.

### Engine Mission

The mission of the Registry Engine is to serve as the single architectural authority for engine registration governance, capability registry management, engine health monitoring, and discovery services within the Engine Platform, providing a governed, auditable, and always-accurate view of the platform's engine composition while maintaining strict non-interference with each Engine's internal processing.

This mission translates into five mission-level objectives:

1. **Governed Registration** — Every engine registration is validated against governance policies received from the Governance Engine (A.5.10) before the registration is finalized. No Engine operates on the platform with an ungoverned registration. This ensures that the platform's engine composition is always governance-compliant and that no unauthorized Engine can register and participate in platform operations.

2. **Capability Registry Authority** — The Registry Engine is the sole authoritative source for the platform's capability registry — the live index of what capabilities each registered Engine provides, what artifact types it consumes and produces, and what operations it exposes. All Engines and orchestration components that need to discover peer capabilities query the Registry Engine. No other component maintains a competing capability index.

3. **Health State Accuracy** — The Registry Engine maintains an accurate, up-to-date health state for every registered Engine by observing lifecycle events from A.4.4. The health state is derived deterministically from the most recent lifecycle event received for each Engine. Health state queries always reflect the most recently observed state. This accuracy ensures that Engines and orchestration components can make informed decisions about peer availability before attempting communication.

4. **Registration Audit Completeness** — Every registration event — registration, update, deregistration, status change, capability change — produces an immutable audit trail entry. The registration audit trail is the platform's single source of truth for registration history. No registration event exists without a corresponding audit record. Audit entries are never modified or deleted.

5. **Discovery Service Reliability** — Every discovery query returns results that accurately reflect the current registration and health state. The Registry Engine does not return stale, cached, or approximate results. Discovery is always consistent with the registration state at the time of the query. This reliability ensures that Engines and orchestration components can depend on discovery results for operational decisions.

---

## Scope

This RFC defines the architecture of the Registry Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Registry Engine's purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state characteristics, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

### Out of Scope

The following items are out of scope for the Registry Engine. The first nine items are mandatory out-of-scope items defined by A.5.0 Section 5.3 and apply to all Engine Specialization RFCs:

- Source code and implementation details
- REST endpoints, API definitions, and transport protocols
- Persistence mechanisms, database schema, Neo4j specifics, and vector database configuration
- Caching strategies and infrastructure
- LLM call orchestration, prompt engineering, and model selection
- Agent runtime design and swarm runtime design
- Platform adapter specifications
- ProjectStatus updates
- Certification execution (as distinct from certification requirements)

The following items are Registry Engine-specific out-of-scope items:

- Engine registration mechanism definition (owned by Engine Registry A.4.3)
- Engine lifecycle management and state machine (owned by Engine Lifecycle A.4.4)
- Capability domain definition and model (owned by Engine Capability A.4.7)
- Individual Engine processing logic (owned by respective Engines A.5.1–A.5.11)
- Governance policy creation and enforcement (owned by Governance Engine A.5.10)
- Workflow orchestration and dependency management (owned by Workflow Engine A.5.11)
- Memory persistence operations (owned by Memory Engine A.5.9)
- Engine communication mechanism (owned by Engine Communication A.4.5)
- Human governance organizational structure and processes (owned by Governance Engine A.5.10)

### AI Consumption Rules

The Registry Engine does not invoke, orchestrate, or depend on any AI/LLM components. All registration validation, governance evaluation, capability validation, health state derivation, and discovery query processing are performed through deterministic evaluation functions. The Registry Engine's architectural purpose — governed registration with full audit trail and accurate discovery — is inherently incompatible with probabilistic or non-deterministic evaluation methods. Registration decisions must be reproducible, auditable, and based on clearly defined governance rules. AI/LLM involvement would compromise these guarantees.

---

## Normative Authority

This RFC is governed by Human Governance as the ultimate approval and promotion authority. The normative chain is: Human Governance → `AGENTS.md` → `docs/AI/GOVERNANCE.md` → `docs/AI/FrameworkGovernance.md`. The Registry Engine's registration governance model derives its authority from this chain; the Governance Engine (A.5.10) distributes policies that the Registry Engine consumes and enforces during registration evaluation. The Registry Engine itself does not create, modify, or originate governance authority — it consumes and applies governance policies as received.

---

## Normative References

| Reference | Role |
|:---|:---|
| `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Defines the 20 mandatory section structure this RFC conforms to |
| `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Defines template lifecycle, naming conventions, and compliance levels |
| `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Defines metadata field requirements for this RFC's Document Metadata section |
| `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Defines canonical terminology used throughout this RFC |

---

## Dependencies

This section references the Universal Section Contract (A.5.0 Section 4). The Registry Engine depends on the following upstream components, all of which must be certified or in a stable draft state before the Registry Engine can enter review:

| Dependency | Component | Relationship |
|:---|:---|:---|
| Runtime Architecture | A.3 | Provides the runtime execution context that the Registry Engine operates within |
| Engine Platform | A.4 | Defines the engine topology, capability model, and communication patterns |
| Engine Kernel | A.4.1 | Provides kernel mediation for engine coordination |
| Engine Contract | A.4.2 | Defines the contract model that registration artifact types must comply with |
| Engine Registry | A.4.3 | Provides the low-level registration mechanism that the Registry Engine builds upon |
| Engine Lifecycle | A.4.4 | Provides lifecycle events for health state derivation |
| Engine Communication | A.4.5 | Defines event and communication patterns for registration events |
| Engine State | A.4.6 | Defines the state model for the Registry Engine's internal state |
| Engine Capability | A.4.7 | Provides the capability domain model that declared capabilities are validated against |
| Context Engine (A.5.1) through Workflow Engine (A.5.11) | Pipeline and service Engines | Registration subjects — the Engines that register with the platform |
| Governance Engine (A.5.10) | Governance policy provider | Provides governance policies for registration governance evaluation |
| Workflow Engine (A.5.11) | Dependency query provider | Provides workflow dependency information for deregistration safety |
| STD-010, STD-003, STD-000, M.0, M.1 | Standards and meta-models | As defined in Normative References |

The dependency chain is comprehensive: the Registry Engine depends on all eleven upstream Engines because it registers and tracks them. The Registry Engine cannot function without the Engine Registry (A.4.3) for the low-level registration mechanism, the Governance Engine (A.5.10) for governance policies, the Workflow Engine (A.5.11) for deregistration dependency checks, and Engine Capability (A.4.7) for capability domain validation.

---

## Architecture

### Engine Position

The Registry Engine occupies a service layer position within the Engine Platform, providing foundational registration, discovery, and health monitoring services to all Engines. It does not sit in the linear pipeline flow but instead operates alongside the Governance Engine (A.5.10) and the Workflow Engine (A.5.11) as a platform infrastructure service.

```
Pipeline Engines:
Context (A.5.1) → Knowledge (A.5.2) → Planning (A.5.3) → Decision (A.5.4) →
Execution (A.5.5) → Validation (A.5.6) → Review (A.5.7) → Certification (A.5.8) → Memory (A.5.9)

Service Layer:
┌──────────────────────────────────────────────────────────────────────────────┐
│                     Registry Engine (A.5.12)                                │
│                                                                              │
│  Registration     Capability      Health        Discovery      Registration   │
│  Governance       Registry         Monitoring    Services        Audit Trail  │
│                                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ validate  │  │ index    │  │ observe  │  │ query    │  │ record   │      │
│  │ authorize │  │ track    │  │ derive   │  │ notify   │  │ audit    │      │
│  │ reject    │  │ detect   │  │ emit     │  │ subscribe│  │ query    │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
│       │              │              │              │              │          │
│       └──────────────┴──────────────┴──────┬───────┴──────────────┘          │
│                                            │                                  │
│                                     serves all Engines                       │
│                                     (A.5.1–A.5.11)                          │
└──────────────────────────────────────────────────────────────────────────────┘

Peer Services:
┌──────────────────────────────┐  ┌──────────────────────────────┐
│  Governance Engine (A.5.10) │  │  Workflow Engine (A.5.11)    │
│  distributes policies ──────→│  │  queries discovery ─────────→│
│  receives reg. events ←──────│  │  receives capability data ←──│
└──────────────────────────────┘  └──────────────────────────────┘
```

#### Data Flow Characterization

The Registry Engine has a multi-source, multi-consumer data flow pattern:

- **From Registering Engines (A.5.1–A.5.11)** — Registration requests, registration updates, and deregistration requests.
- **From Governance Engine (A.5.10)** — Governance policies for registration governance and capability governance.
- **From Engine Lifecycle (A.4.4)** — Engine lifecycle state transition events for health monitoring.
- **From Workflow Engine (A.5.11)** — Workflow dependency queries for deregistration validation.
- **To All Engines** — Discovery query results, health state notifications, and registration event notifications.
- **To Governance Engine (A.5.10)** — Registration governance events for audit trail and capability conflict notifications.
- **To Workflow Engine (A.5.11)** — Capability registry data for workflow definition validation and engine availability confirmation.
- **To Pipeline Observability** — Registration and health events for monitoring, alerting, and audit.

#### Unavailability Impact

If the Registry Engine is unavailable, the following effects occur: new engine registrations and updates are blocked (Engines cannot register or update their capabilities), discovery queries return stale results from the last known registration state, health state monitoring is suspended (the Registry Engine stops reflecting lifecycle changes), and registration audit events are queued for recording upon recovery. Existing registrations remain valid — the Registry Engine's unavailability does not deregister Engines. Engines that are already registered and operational continue to function; only new registrations and discovery updates are affected. The Governance Engine continues to distribute policies, and the Workflow Engine continues to execute in-progress workflows using the last-known engine availability information.

#### Knowledge Graph Integration

The Registry Engine's registration records, capability index, and health state history are inherently graph-structured and may be projected into the knowledge graph for registration relationship traversal, capability dependency analysis, and engine topology visualization. Integration is mediated through the Engine Platform's knowledge graph projection layer. Key projection points include: Registration Record nodes (with engine identifier, capabilities, and registration state), Capability Domain nodes (with domain definition and registered Engines), Engine-Registration edges (linking Engines to their registration records), Registration-Capability edges (linking registrations to their declared capabilities), and Health State edges (linking Engines to their health state history). The Registry Engine produces projection data; it does not define the graph schema or query model. The knowledge graph projection is particularly valuable for capability impact analysis: when a capability domain changes or an Engine is deregistered, the graph can be queried to identify all registrations, workflows, and data flow contracts that depend on the affected capability, enabling rapid impact assessment.

#### Extension Model

The Registry Engine may be extended through the following mechanisms: new capability domain types (must be defined in A.4.7 before the Registry Engine can validate registrations against them), custom discovery filters (must be evaluable deterministically against the capability registry index), custom health state derivations (must remain deterministic), and custom registration governance rules. Extensions must not alter the Registry Engine's invariants, particularly registration record immutability (INV-REG-1), governance precedence (INV-REG-2), capability index consistency (INV-REG-3), discovery accuracy (INV-REG-4), and engine non-interference (INV-REG-7). All extensions must be validated against non-determinism, governance bypass, discovery accuracy compromise, and engine state modification before activation. Extensions are loaded from governance-approved configuration during engine initialization.

### Internal Engine Model

The Registry Engine's internal model consists of a five-stage registration processing pipeline, a capability registry index, a health state monitor, a discovery service, and an audit trail.

#### Registration Processing Pipeline

```
Stage 1: INTAKE
    │
    ├── Receive registration request, update, or deregistration
    ├── Validate structure, engine identifier, and capability declarations
    ├── Determine action type (REGISTER, UPDATE, DEREGISTER)
    └── Load applicable governance policies
    │
    ↓
Stage 2: GOVERNANCE EVALUATION
    │
    ├── Evaluate registration action against governance policies
    ├── Verify registration authorization requirements
    ├── For REGISTER: validate governance permits new registration
    ├── For UPDATE: validate governance permits capability changes
    ├── For DEREGISTER: check workflow dependencies (query A.5.11)
    ├── For unauthorized actions: reject with governance violation details
    └── For authorized actions: record governance evaluation results
    │
    ↓
Stage 3: CAPABILITY VALIDATION
    │
    ├── Validate declared capabilities against A.4.7 capability domains
    ├── Verify artifact type contract consistency
    ├── Detect capability conflicts with existing registrations
    ├── For conflicts: report to Governance Engine; flag for adjudication
    ├── For invalid capabilities: reject with validation details
    └── For valid capabilities: update capability registry index
    │
    ↓
Stage 4: REGISTRATION RECORDING
    │
    ├── Produce immutable Registration Record
    ├── Assign version (increment for updates)
    ├── Attach governance evaluation results
    ├── Attach current health state
    ├── Update registration state (ACTIVE, UPDATED, DEREGISTERED)
    └── Update capability registry index
    │
    ↓
Stage 5: NOTIFICATION
    │
    ├── Emit registration event to pipeline observability
    ├── Deliver registration event to Governance Engine
    ├── Notify subscribed discovery consumers
    ├── Update health monitor if registration affects health tracking
    ├── Produce audit trail entry
    └── Return Registration Record to requesting Engine
```

#### Capability Registry Index

The Capability Registry Index is a multi-dimensional index that maps registered Engines to their capabilities, artifact types, and operations. It is the authoritative source for capability discovery within the Engine Platform.

```
CapabilityRegistryIndex {
    // Primary indices
    byEngineId: Map<engineId, RegistrationRecord>
    byCapabilityDomain: Map<domain, RegistrationRecord[]>
    byConsumedArtifactType: Map<artifactType, RegistrationRecord[]>
    byProducedArtifactType: Map<artifactType, RegistrationRecord[]>
    byHealthState: Map<healthState, RegistrationRecord[]>
    byRegistrationState: Map<regState, RegistrationRecord[]>

    // Cross-reference indices
    capabilityConflicts: ConflictDetection[]

    // Metadata
    lastUpdated: ISO 8601
    totalActiveRegistrations: number
    totalCapabilityDomains: number
}
```

The capability registry index is updated atomically with each registration, update, or deregistration. Discovery queries read from a consistent snapshot of the index — queries never observe a partially updated index.

#### Health State Monitor

The Health State Monitor observes engine lifecycle events from A.4.4 and derives health states for each registered Engine. The health state derivation is a deterministic mapping from A.4.4 lifecycle states to Registry Engine health states:

| A.4.4 Lifecycle State | Derived Health State | Description |
|:---|:---|:---|
| `UNINITIALIZED` | `UNAVAILABLE` | Engine not yet initialized |
| `INITIALIZING` | `INITIALIZING` | Engine is initializing |
| `READY` | `OPERATIONAL` | Engine is ready to process requests |
| `EXECUTING` | `OPERATIONAL` | Engine is actively processing |
| Any degradation state | `DEGRADED` | Engine is in a degraded mode |
| `TERMINATED` | `UNAVAILABLE` | Engine has shut down |
| `ERROR` | `UNAVAILABLE` | Engine is in an error state |

Health state transitions are tracked historically. Each Engine has a health state history that records the sequence of state transitions with timestamps. This history supports trend analysis and troubleshooting.

#### Discovery Service

The Discovery Service processes discovery queries against the capability registry index. Queries specify filter criteria and return matching Registration Records. The Discovery Service supports two interaction patterns:

1. **Query Pattern** — The requesting Engine sends a discovery query and receives a synchronous result set. The result set is a snapshot of the capability registry index at the time of the query.
2. **Subscription Pattern** — The requesting Engine subscribes to a discovery filter. The Registry Engine emits discovery notification events whenever registrations matching the filter change (new registration, update, deregistration, or health state change). Subscriptions persist until explicitly cancelled or the subscribing Engine deregisters.

#### Internal Data Flow

```
RegistryInternalState {
    registrationStore: Map<engineId, RegistrationRecord>
    capabilityIndex: CapabilityRegistryIndex
    healthStates: Map<engineId, HealthStateRecord>
    governancePolicies: GovernancePolicy[]
    discoverySubscriptions: Map<subscriptionId, DiscoverySubscription>
    auditTrail: AuditEntry[]
    pendingRegistrations: RegistrationRequest[]
    capabilityConflicts: ConflictDetection[]
    currentStage: RegistrationPipelineStage
}
```

### Resolution Rules

#### Registration Conflict Resolution

| Conflict | Resolution Rule |
|:---|:---|
| Registration request with duplicate engine identifier | Duplicate rejected; existing registration remains active; requesting Engine notified |
| Two Engines declare exclusive capability in same domain | Conflict reported to Governance Engine; both registrations proceed with conflict flag; Governance Engine adjudicates |
| Registration update conflicts with governance policy | Update rejected; original registration remains active; Engine notified with policy violation details |
| Deregistration requested while active workflow dependencies exist | Deregistration deferred; requesting Engine notified with dependency details; re-evaluated when dependencies resolve |

#### Capability Conflict Resolution

| Conflict | Resolution Rule |
|:---|:---|
| Capability domain not recognized in A.4.7 | Registration proceeds with warning; capability flagged for governance review; not blocked |
| Multiple Engines declare same non-exclusive capability | Permitted — non-exclusive capabilities may have multiple providers |
| Engine declares capability outside its RFC-defined scope | Registration proceeds with warning; discrepancy flagged for governance review |
| Artifact type contract inconsistent between Engine's declaration and A.4.2 contract | Registration rejected with inconsistency details; Engine must correct declaration |

#### Ambiguity Resolution

| Ambiguity | Resolution Rule |
|:---|:---|
| Governance policy applicability unclear for registration | Most restrictive interpretation applied; ambiguity escalated to Governance Engine |
| Health state derived from conflicting lifecycle events | Most recent lifecycle event takes precedence; conflict documented in audit trail |
| Discovery query matches no Engines | Empty result set returned; no error; querying Engine may retry or adjust criteria |
| Discovery subscription filter ambiguous | Most specific matching interpretation applied; ambiguity documented in subscription record |

### Engine State

The Registry Engine's state characteristics within the A.4.6 state model:

| State | Description | Entry Condition | Exit Condition |
|:---|:---|:---|:---|
| `UNINITIALIZED` | Engine created but not initialized | Engine instantiation | Initialization begins |
| `INITIALIZING` | Registration state being loaded; governance policies being loaded; A.4.3 being queried | Initialization triggered | State loaded; policies loaded; registrations reconciled |
| `READY` | Engine accepting registration and discovery requests | Initialization complete | Registration or discovery request received |
| `REGISTRATION_INTAKE` | Validating registration request | Registration request received | Request validated; governance evaluation triggered |
| `GOVERNANCE_EVALUATING` | Evaluating registration against governance policies | Intake complete | Governance evaluation complete |
| `CAPABILITY_VALIDATING` | Validating capabilities against A.4.7 | Governance evaluation passed | Capability validation complete |
| `REGISTRATION_RECORDING` | Producing Registration Record and updating index | Capability validation passed | Record produced; index updated |
| `NOTIFICATION` | Emitting events and notifying subscribers | Registration recording complete | All notifications emitted |
| `DISCOVERY_PROCESSING` | Processing a discovery query | Discovery query received | Result set produced and returned |
| `HEALTH_UPDATING` | Processing a lifecycle event for health state derivation | Lifecycle event received from A.4.4 | Health state updated; event emitted |
| `ERROR` | Unrecoverable error during processing | Error detected during any stage | Error recovery complete; engine returns to READY |
| `TERMINATED` | Engine shut down | Shutdown requested | N/A (terminal state) |

State recovery: The Registry Engine recovers from ERROR by reloading the registration state from the last-known snapshot, re-querying A.4.3 for current registrations, re-loading governance policies, and returning to READY. The Registry Engine reconciles the persisted state with the current A.4.3 state to detect any registrations that were created or removed during the downtime.

### Engine Invariants

The following properties must always hold for the Registry Engine regardless of state, inputs, or operations:

**INV-REG-1: Registration Record Immutability** — Once a Registration Record is produced, it is immutable. Registration updates produce new Registration Records with new version identifiers and explicit `previousVersion` references to the prior registration. The original record is never mutated, deleted, or obscured. This immutability ensures that the registration history is a reliable, permanent record that can be used for audit, compliance, and historical analysis. Any Engine or component that holds a reference to a Registration Record is guaranteed that the record will not change.

**INV-REG-2: Governance Precedence for Registration** — No engine registration, registration update, or capability change is finalized without governance evaluation against applicable policies from the Governance Engine (A.5.10). The Registry Engine evaluates governance requirements before every registration action and rejects actions that violate governance policies. This invariant ensures that the platform's engine composition is always governance-compliant and that no ungoverned Engine can participate in platform operations.

**INV-REG-3: Capability Index Consistency** — The capability registry index is always consistent with the set of active Registration Records. Every active Registration Record is reflected in the index, and every entry in the index corresponds to an active Registration Record. The index is updated atomically with each registration change — discovery queries never observe a partially updated index. This consistency ensures that discovery results are always reliable and that no "phantom" capabilities appear in the index.

**INV-REG-4: Discovery Accuracy** — Every discovery query result accurately reflects the capability registry index state at the time of the query. The Registry Engine does not return stale, cached, or approximate results. Discovery results are derived directly from the authoritative capability registry index at query time. This accuracy ensures that Engines and orchestration components can depend on discovery results for operational decisions such as engine invocation, workflow planning, and data routing.

**INV-REG-5: Registration Audit Completeness** — Every registration event — registration, update, deregistration, status change, or capability conflict detection — produces an immutable audit trail entry. No registration event exists without a corresponding audit record. Audit entries are never modified or deleted. This completeness ensures that the registration audit trail is the platform's single source of truth for registration history and supports full compliance review and historical analysis.

**INV-REG-6: Health State Derivation Determinism** — The health state for any registered Engine is derived deterministically from the most recent A.4.4 lifecycle event received for that Engine. Given the same sequence of lifecycle events, the Registry Engine always produces the same health state for the same Engine. The derivation does not depend on external state, timing, or environmental factors. This determinism ensures that health state queries are reproducible and that health state history is a reliable troubleshooting resource.

**INV-REG-7: Engine Non-Interference** — The Registry Engine does not modify any Engine's internal state, artifacts, configuration, or lifecycle. The Registry Engine receives registration requests and lifecycle events; it produces Registration Records and discovery results; it never writes to, deletes from, or alters any Engine's internal data. The Registry Engine's relationship to registered Engines is strictly observational and administrative. This invariant ensures that the Registry Engine's governance and tracking activities do not corrupt Engine state or violate any Engine's invariants.

**INV-REG-8: Deregistration Dependency Safety** — No Engine is deregistered while active workflow instances depend on it. Before processing a deregistration, the Registry Engine queries the Workflow Engine (A.5.11) for active workflow dependencies on the deregistering Engine. If dependencies exist, the deregistration is deferred until all dependencies are resolved. This invariant ensures that deregistration does not break in-progress workflows and that the Workflow Engine can rely on engine availability information from the Registry Engine.

### Validation Rules

#### Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Registration request structure | Request matches registration request schema | Rejection with violation details |
| Engine identifier uniqueness | No active registration exists with the same identifier | Rejection with duplicate identifier |
| Capability domain validity | All declared capabilities reference recognized A.4.7 domains | Rejection with unrecognized domain identifiers |
| Artifact type consistency | Consumed and produced artifact types are valid and internally consistent | Rejection with type inconsistency details |
| Governance policy applicability | Referenced governance policies are active and applicable | Rejection with inapplicable policy identifiers |
| Registration update validity | Update references an active registration; changes are structurally valid | Rejection with invalid reference or invalid changes |
| Deregistration request validity | Request references an active registration; reason provided | Rejection with invalid reference |
| Discovery query validity | Query specifies at least one filter criterion; filter values are valid | Rejection with invalid query details |

#### Output Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Registration Record completeness | Record contains all mandatory fields | Record not produced; error state |
| Capability index consistency | Index is consistent with all active Registration Records | Index rebuild triggered |
| Discovery result accuracy | Results match the capability registry index at query time | Results not returned; error state |
| Health state consistency | Derived health state matches the most recent lifecycle event | Health state re-derived from lifecycle history |

#### State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| pending → authorized | Governance evaluation passed | Transition blocked |
| authorized → active | Capability validation passed; no unresolved conflicts | Transition blocked if conflicts exist |
| active → updated | Governance evaluation for update passed | Transition blocked |
| active → deregistered | No active workflow dependencies; governance permits deregistration | Transition blocked if dependencies exist |
| deregistered → active (re-registration) | Full registration pipeline (governance + capability validation) | Treated as new registration |

### Consumed Inputs

| Input | Source | Type | Description |
|:---|:---|:---|:---|
| Registration Requests | Registering Engines (A.5.1–A.5.11) | `RegistrationRequest` | Engine registration requests containing engine identifier, capability declarations, consumed artifact types, produced artifact types, and operational parameters |
| Registration Updates | Registered Engines | `RegistrationUpdate` | Updates to existing registrations: capability changes, artifact type changes, or operational parameter changes |
| Deregistration Requests | Registered Engines | `DeregistrationRequest` | Requests to deregister from the platform, with optional reason and dependency acknowledgment |
| Governance Policies | Governance Engine (A.5.10) | `GovernancePolicy[]` | Active governance policies defining registration authorization rules, capability governance requirements, and registration constraints |
| Lifecycle Events | Engine Lifecycle (A.4.4) | Structured events | Engine state transition events used for health state derivation |
| Workflow Dependency Queries | Workflow Engine (A.5.11) | `DependencyQueryResult` | Responses to deregistration dependency checks |
| Discovery Queries | Any Engine or orchestration component | `DiscoveryQuery` | Queries for Engines by capability domain, artifact type, health state, or registration status |

#### Input Validation Expectations

Registration requests must conform to the registration request schema: engine identifier must be unique, capability declarations must reference recognized A.4.7 capability domains, and artifact type contracts must specify valid types. Governance policies must be in their canonical format as defined by the Governance Engine (A.5.10). Policies that are stale or superseded are rejected. Registration updates must reference a valid, active registration identifier. Updates that conflict with the original registration's governance evaluation are rejected. Deregistration requests must reference a valid, active registration identifier. The Registry Engine verifies no active workflow dependencies exist before processing deregistration. Discovery queries must specify at least one filter criterion (capability domain, artifact type, health state, or registration status). Unfiltered queries that return all registrations are permitted for administrative purposes only. Missing required fields in any input trigger input rejection with specific violation details.

### Produced Outputs

#### Primary Output: Registration Record

| Field | Type | Description |
|:---|:---|:---|
| `registrationId` | `string` | Unique identifier, format: `reg-{uuid}` |
| `engineIdentifier` | `string` | The registering Engine's identifier (e.g., A.5.1) |
| `version` | `string` | Semantic version, format: `major.minor.0-draft` |
| `previousVersion` | `string?` | Reference to previous registration version if this is an update |
| `timestamp` | `ISO 8601` | Registration record creation timestamp |
| `registrationState` | `enum` | `ACTIVE` / `UPDATED` / `DEREGISTERED` |
| `capabilityDeclarations` | `CapabilityDeclaration[]` | Declared capabilities with domain references per A.4.7 |
| `consumedArtifactTypes` | `ArtifactTypeRef[]` | Artifact types this Engine consumes |
| `producedArtifactTypes` | `ArtifactTypeRef[]` | Artifact types this Engine produces |
| `operationalParameters` | `OperationalParams` | Declared operational parameters (concurrency model, state characteristics) |
| `governanceEvaluation` | `GovernanceEval` | Governance evaluation result that authorized this registration |
| `healthState` | `HealthState` | Derived health state at the time of registration record production |

#### Secondary Outputs

| Output | Type | Consumer | Description |
|:---|:---|:---|:---|
| Capability Registry | `CapabilityIndex` | All Engines, Workflow Engine | Live index of all registered capabilities |
| Health State Reports | `HealthStateReport` | All Engines, Pipeline Observability | Current and historical health state per Engine |
| Discovery Results | `DiscoveryResult[]` | Querying Engines | Filtered Engine lists matching discovery criteria |
| Registration Events | Structured events | Pipeline Observability, Governance Engine | Registration lifecycle events for monitoring and audit |
| Audit Trail Entries | `AuditEntry[]` | Compliance Systems | Immutable registration audit records |

#### Output Versioning

All Registration Records are immutable once produced. Registration updates produce new Registration Records with new version identifiers and explicit `previousVersion` references to the prior registration. The original record is never mutated. Version numbering follows the semantic versioning convention: `major.minor.0-draft`. The major version is incremented for the initial registration. The minor version is incremented for each registration update. The patch version is always zero (the Registry Engine does not produce patches — only full registration records).

#### Downstream Consumers

| Consumer | Relationship | Description |
|:---|:---|:---|
| All Engines (A.5.1–A.5.11) | Primary consumers | Consume discovery results for peer engine location, capability verification, and availability confirmation |
| Workflow Engine (A.5.11) | Primary consumer | Consumes capability registry data for workflow definition validation and engine availability confirmation during step orchestration |
| Governance Engine (A.5.10) | Primary consumer | Consumes registration governance events for audit trail, compliance tracking, and capability conflict adjudication |
| Memory Engine (A.5.9) | Conditional consumer | Consumes Registration Records and audit trail entries for archival upon request |
| Pipeline Observability | Infrastructure consumer | Consumes registration events, health state events, and capability conflict events for monitoring, alerting, and audit |
| Future Engine Specializations | Prospective consumer | Future Engine Specializations beyond Phase 2 may consume Registry Engine outputs for registration, discovery, and health monitoring |

### Engine Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `registerEngine(request)` | Process an engine registration request | `RegistrationRequest` | `RegistrationRecord` | Updates capability index; emits registration events; produces audit entry | Invalid request → rejection; governance violation → rejection; duplicate identifier → rejection |
| `updateRegistration(engineId, update)` | Update an existing registration | `EngineId`, `RegistrationUpdate` | `RegistrationRecord` | Updates capability index; emits update events; produces audit entry | Invalid engine ID → error; governance violation → rejection |
| `deregisterEngine(engineId, reason)` | Process an engine deregistration | `EngineId`, `DeregistrationReason` | `RegistrationRecord` | Removes from active registrations; emits deregistration events; produces audit entry | Active dependencies → deferral; invalid engine ID → error |
| `queryDiscovery(query)` | Process a discovery query | `DiscoveryQuery` | `DiscoveryResult[]` | No side effects (read-only) | Invalid query → rejection |
| `subscribeDiscovery(filter)` | Subscribe to discovery notifications | `DiscoveryFilter` | `SubscriptionRef` | Registers subscription; emits notifications on changes | Invalid filter → rejection |
| `cancelSubscription(subscriptionRef)` | Cancel a discovery subscription | `SubscriptionRef` | Confirmation | Removes subscription; no further notifications | Invalid subscription → error |
| `queryHealthState(engineId)` | Query the health state of a specific Engine | `EngineId` | `HealthStateReport` | No side effects (read-only) | Engine not found → error |
| `queryRegistrationHistory(engineId)` | Query the registration history for an Engine | `EngineId` | `RegistrationRecord[]` | No side effects (read-only) | Engine not found → error |
| `reportCapabilityConflict(conflict)` | Report a detected capability conflict | `ConflictDetection` | Confirmation | Notifies Governance Engine; emits conflict event | Invalid conflict → rejection |

### Engine Events

#### Events Emitted

| Event | Trigger | Payload | Consumer | Expected Response |
|:---|:---|:---|:---|:---|
| `registry.engine.initialized` | Startup completes | `{engineId, activeRegistrationCount, capabilityDomainCount}` | All engines, Engine Lifecycle (A.4.4) | Acknowledge; submit registrations |
| `registry.engine.degraded` | Engine operating in degraded mode | `{degradationType, affectedCapabilities}` | All engines, Pipeline observability | Consumers use last-known state |
| `registry.engine.shutdown` | Engine entering shutdown | `{activeRegistrationCount}` | All engines, Engine Lifecycle (A.4.4) | Cease registration requests |
| `registry.engine.recovered` | Engine recovered from restart | `{reconciledRegistrationCount}` | All engines, Engine Lifecycle (A.4.4) | Resume registration operations |
| `registry.registration.created` | New registration finalized | `{registrationId, engineId, capabilities, healthState}` | All engines, Governance Engine, Pipeline observability | Update local capability cache |
| `registry.registration.updated` | Registration updated | `{registrationId, engineId, changedCapabilities, previousVersion}` | All engines, Governance Engine, Pipeline observability | Update local capability cache |
| `registry.registration.deregistered` | Engine deregistered | `{registrationId, engineId, reason}` | All engines, Workflow Engine, Pipeline observability | Remove from local capability cache |
| `registry.registration.rejected` | Registration request rejected | `{engineId, reason, violationDetails}` | Requesting Engine, Pipeline observability | Correct and resubmit |
| `registry.health_state.changed` | Engine health state changed | `{engineId, previousState, newState, lifecycleEvent}` | All engines, Pipeline observability, Workflow Engine | Update availability assumptions |
| `registry.capability.conflict_detected` | Capability conflict detected | `{engineId1, engineId2, capabilityDomain, conflictType}` | Governance Engine, Pipeline observability | Governance Engine adjudicates |
| `registry.discovery.subscription_notification` | Subscribed discovery filter matched | `{subscriptionId, matchingRegistrations, changeType}` | Subscribing Engine | Update local state |
| `registry.audit.recorded` | Audit entry created | `{auditEntryId, eventType, timestamp}` | Compliance Systems | Log for compliance |

#### Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Engine Registered` (via A.4.3) | Engine Registry (A.4.3) | Process through registration pipeline |
| `Engine Deregistered` (via A.4.3) | Engine Registry (A.4.3) | Process through deregistration pipeline |
| Engine Lifecycle State Change | Engine Lifecycle (A.4.4) | Derive health state; emit health state change event |
| `governance.policy.distributed` | Governance Engine (A.5.10) | Reload governance policies; re-evaluate active registrations |
| `workflow.instance.dependency_check_result` | Workflow Engine (A.5.11) | Process deregistration dependency check result |

#### Event Guarantees

Registration events are emitted in strict sequential order per Engine. No out-of-order registration events are possible for the same Engine. Every event carries the `registrationId` or `engineId` for correlation. Critical events (`registry.registration.created`, `registry.registration.deregistered`, `registry.capability.conflict_detected`) must not be silently dropped. If the event infrastructure is unavailable, the Registry Engine retains the event for delivery once the infrastructure recovers. Health state change events are emitted within a bounded time of receiving the corresponding lifecycle event from A.4.4. The Registry Engine does not consume its own emitted events. There is no event feedback loop within the Registry Engine.

#### Event Correlation

All events carry the `engineId` for per-Engine correlation. Registration events additionally carry the `registrationId` for per-registration tracking. Health state events carry both `engineId` and the `lifecycleEvent` that triggered the state change. This multi-key correlation enables pipeline observability to reconstruct the complete registration and health history for any Engine.

---

## Design Decisions

### DD-REG-1: Five-Stage Registration Processing Pipeline

The Registry Engine processes every registration action through a sequential five-stage pipeline (Intake → Governance Evaluation → Capability Validation → Registration Recording → Notification) rather than a monolithic registration function. This decision was made because registration governance requires a clear separation of concerns: governance evaluation must complete before capability validation proceeds, and both must complete before any state mutation occurs. The sequential pipeline ensures that INV-REG-2 (Governance Precedence) and INV-REG-7 (Engine Non-Interference) are structurally enforced by the pipeline's stage ordering. A monolithic function would require explicit conditional logic to enforce these orderings, increasing the risk of invariant violations. The pipeline's stage boundaries also provide natural points for audit trail entries and event emission. The trade-off is that the pipeline introduces serialization — concurrent registrations are processed one at a time through the governance and capability stages, though discovery queries remain concurrent.

### DD-REG-2: Deterministic Health State Derivation from A.4.4 Lifecycle Events

The Registry Engine derives Engine health states deterministically from A.4.4 lifecycle events rather than implementing its own health monitoring mechanism (e.g., active probing, heartbeat detection, or self-reported health). This decision was made because A.4.4 already defines the authoritative lifecycle state machine for all Engines, and a separate health monitoring mechanism would create a second source of truth for Engine availability. The deterministic mapping from lifecycle states to health states (as defined in the Health State Monitor) ensures INV-REG-6 (Health State Derivation Determinism). The trade-off is that the Registry Engine's health state has the granularity and latency of A.4.4 lifecycle events — it cannot detect sub-lifecycle health degradation that A.4.4 does not report. This limitation is acceptable because Engines are expected to transition to A.4.4 degradation states when they detect internal health issues.

### DD-REG-3: Atomic Capability Index Updates with Snapshot Isolation for Discovery

The capability registry index is updated atomically with each registration change, and discovery queries read from a consistent snapshot of the index rather than reading the live index directly. This decision was made to ensure INV-REG-3 (Capability Index Consistency) and INV-REG-4 (Discovery Accuracy) without requiring distributed locking or read-write transaction isolation across the Engine Platform. A query against the live index could observe a partially updated state during a registration mutation. Snapshot isolation ensures that every discovery query returns a complete and consistent view of the index at a specific point in time. The trade-off is that discovery results may be slightly stale if a registration change occurs between the snapshot creation and the query result delivery. This staleness is bounded by the time between snapshot creation and delivery, which is deterministic and bounded by the query processing latency.

### DD-REG-4: Dual Registration Governance — Governance Engine Policies and A.4.7 Capability Validation

The Registry Engine applies two separate validation layers to every registration: governance evaluation against policies from the Governance Engine (A.5.10) and capability validation against the A.4.7 capability domain model. These are distinct evaluation stages in the registration pipeline (Stages 2 and 3). This decision was made because governance policies and capability domain validity are different concern domains: governance policies define which registrations are authorized under current governance rules, while A.4.7 defines what capability domains exist and what their structure requires. Conflating these evaluations would couple the Registry Engine's governance integration to the capability domain model's evolution, and vice versa. The trade-off is that a registration may pass governance evaluation but fail capability validation (or vice versa), requiring the registering Engine to address two separate rejection reasons. This is acceptable because each rejection reason maps to a distinct remediation path.

### DD-REG-5: Deregistration Dependency Safety via Workflow Engine Query

The Registry Engine queries the Workflow Engine (A.5.11) for active workflow dependencies before processing any deregistration, and defers deregistration if dependencies exist. This decision was made to ensure INV-REG-8 (Deregistration Dependency Safety). Without this check, an Engine could deregister while in-progress workflows depend on it, causing workflow failures that the Workflow Engine cannot recover from. The trade-off is that deregistration is no longer instantaneous — it requires a synchronous query to the Workflow Engine and may be deferred. If the Workflow Engine is unavailable, deregistration requests are queued rather than blocked permanently. This ensures that deregistration safety does not create a deadlock scenario.

### DD-REG-6: Append-Only Audit Trail with No Deletion or Modification

The registration audit trail is strictly append-only: entries are never modified, deleted, or obscured, not even for administrative purposes. This decision was made to ensure INV-REG-5 (Registration Audit Completeness) and to provide a reliable, permanent record for compliance review and historical analysis. An audit trail that permits modification or deletion cannot serve as a trustworthy compliance artifact. The trade-off is that the audit trail grows unboundedly over time. The Registry Engine does not define retention policies for the audit trail — retention is governed by the Governance Engine's retention policies, and archival is handled by the Memory Engine (A.5.9).

### DD-REG-7: Immutable Registration Records with Version Chaining

Registration updates produce entirely new Registration Records with new version identifiers and explicit `previousVersion` references to the prior registration, rather than mutating existing records in place. This decision was made to ensure INV-REG-1 (Registration Record Immutability). Immutable records guarantee that any component holding a reference to a Registration Record can rely on it not changing, which is essential for audit, historical analysis, and multi-Engine consistency. The trade-off is storage growth: each update creates a new complete record rather than a delta. This is acceptable because registration updates are infrequent (compared to discovery queries or health state events), and the complete record format simplifies audit reconstruction and compliance review.

---

## Responsibilities

### Engine Responsibilities

The Registry Engine is accountable for the following architectural responsibilities, grouped by functional domain:

#### Registration Governance

- Receive engine registration requests and validate their structural integrity, engine identifiers, capability declarations, and artifact type contracts.
- Evaluate registration requests against governance policies received from the Governance Engine (A.5.10). Registrations that violate governance policies are rejected with specific violation details.
- Authorize or deny registration requests based on governance evaluation results. Authorized registrations proceed to capability validation.
- Evaluate registration updates (capability changes, artifact type changes) against governance policies. Updates that violate policies are rejected.
- Record all governance evaluations as part of the registration audit trail.

#### Capability Registry Management

- Maintain the capability registry — a live, authoritative index of all registered Engines and their declared capabilities.
- Index Engines by capability domain (per A.4.7), by consumed artifact types, by produced artifact types, and by exposed operations.
- Validate declared capabilities against the A.4.7 capability domain model. Capabilities that reference unrecognized domains are flagged for governance review.
- Detect capability conflicts — multiple Engines claiming exclusive ownership of the same capability domain. Conflicts are reported to the Governance Engine for adjudication.
- Update the capability registry when registrations are created, updated, or deregistered.
- Provide capability query services for Engines and orchestration components.

#### Engine Health Monitoring

- Observe engine lifecycle events from A.4.4 and derive health states for each registered Engine.
- Map A.4.4 lifecycle states to Registry Engine health states: `OPERATIONAL` (READY, EXECUTING), `DEGRADED` (any degradation state), `UNAVAILABLE` (TERMINATED, ERROR), `INITIALIZING` (INITIALIZING, STARTING).
- Emit health state change events when an Engine's derived health state changes.
- Track health state history for each Engine — the sequence of health state transitions over time.
- Provide health state query services for Engines and orchestration components.

#### Discovery Services

- Process discovery queries from Engines and orchestration components. Queries may filter by capability domain, artifact type, health state, or registration status.
- Return discovery results that accurately reflect the current registration and health state at the time of the query.
- Support subscription-based discovery — Engines may subscribe to receive notifications when registrations matching their query criteria change.
- Ensure discovery queries have no side effects on the registration state or the capability registry.

#### Registration Lifecycle Management

- Manage registration lifecycle transitions: pending → authorized → active → updated → deregistered.
- Process registration update requests — changes to declared capabilities, artifact types, or operational parameters. Updates follow the same governance evaluation as initial registrations.
- Process deregistration requests. Verify that no active workflow instances depend on the deregistering Engine (via query to the Workflow Engine A.5.11). If dependencies exist, the deregistration is deferred until dependencies are resolved.
- Maintain the complete registration history for audit and compliance purposes.

#### Registration Audit Trail

- Record every registration event with full context: event type, engine identifier, capability declarations, governance evaluation results, timestamp, and previous registration state.
- Maintain an immutable audit log — audit entries are never modified or deleted.
- Support audit queries from compliance systems with defined query types and filters.

---

## Non Responsibilities

The Registry Engine is explicitly not responsible for:

- **Engine registration mechanism** — The low-level registration contract and mechanism are owned by Engine Registry (A.4.3). The Registry Engine consumes this mechanism and adds governance and capability tracking on top of it.
- **Engine lifecycle management** — The lifecycle state machine and transition rules are owned by Engine Lifecycle (A.4.4). The Registry Engine observes lifecycle events but does not control lifecycle transitions.
- **Engine capability domain definition** — The capability domain model and domain definitions are owned by Engine Capability (A.4.7). The Registry Engine validates declared capabilities against this model but does not define capability domains.
- **Engine communication** — The inter-Engine messaging and event delivery mechanism is owned by Engine Communication (A.4.5). The Registry Engine uses this mechanism but does not define it.
- **Individual Engine processing logic** — Owned by the respective Engines (A.5.1–A.5.11).
- **Governance policy creation and enforcement** — Owned by Governance Engine (A.5.10). The Registry Engine consumes governance policies for registration governance evaluation.
- **Workflow orchestration** — Owned by Workflow Engine (A.5.11). The Registry Engine provides discovery services to the Workflow Engine but does not orchestrate workflows.
- **Memory persistence** — Owned by the platform persistence layer (out of scope).
- **ProjectStatus updates** — Not within any Engine's scope.
- **Engine internal state management** — Each Engine manages its own internal state per A.4.6.

---

## Interfaces

The Registry Engine interacts with the runtime and other Engines through the following interfaces:

#### Runtime Interaction Rules

The Registry Engine interacts with the runtime exclusively through the Engine Platform's defined communication patterns (A.4.5):

- The Registry Engine receives registration requests from Engines via the communication mechanism defined by A.4.5.
- The Registry Engine emits registration events, health state events, and discovery notifications via the event mechanism defined by A.4.5.
- The Registry Engine receives engine lifecycle events from A.4.4 via the event mechanism.
- The Registry Engine receives governance policies from the Governance Engine via the event mechanism (governance policy distribution events).
- The Registry Engine queries the Workflow Engine for deregistration dependency checks via the communication mechanism.
- The Registry Engine does not make synchronous blocking calls to Engines during registration processing. Registration processing is asynchronous with respect to the registering Engine — the Engine receives a confirmation event when the registration is finalized.
- The Registry Engine does not inject control events into Engines that alter their internal processing logic or state.

#### Security Boundaries

The Registry Engine maintains the authoritative registration and capability information for the entire Engine Platform. This information is governance-sensitive because it determines which Engines are authorized to participate in platform operations. Registration requests carry Engine identifiers and capability declarations that are used for access control decisions by other Engines and orchestration components. The accuracy and integrity of this information is critical for platform security. The Registry Engine does not persist registration data directly. Registration state that must survive restart is preserved through the platform persistence layer (out of scope). The Registry Engine's primary persistent outputs are Registration Records and audit trail entries, which are delivered to the Memory Engine for archival. The Registry Engine does not make network calls to external systems. All communication is through the Engine Platform's defined communication patterns (A.4.5) and the governance policy distribution mechanism from the Governance Engine. Registration rejection events carry violation details that may include governance policy references. These events are available to all Engines via the event mechanism. The Registry Engine does not restrict access to rejection events — transparency supports self-correction by registering Engines.

#### Governance Interface

The Registry Engine operates within the governance framework defined by A.4 and the Framework Governance documents. The Registry Engine consumes governance policies from the Governance Engine (A.5.10) and applies them deterministically during registration governance evaluation. The Registry Engine does not create, modify, or enforce governance policies — it consumes them. The Registry Engine must not authorize registrations that violate governance requirements. Any registration that fails governance evaluation is rejected regardless of the Engine's operational readiness or capability completeness. The Registry Engine's own behaviour is subject to governance oversight. Governance policies may restrict which capability domains are permitted for registration, which Engines may register, and what artifact type contracts are acceptable. The Registry Engine cannot modify the governance policies it consumes. If a governance policy change affects active registrations, the Registry Engine evaluates the impact and flags non-compliant registrations for governance review, but does not deregister them automatically — deregistration requires either the Engine's request or a governance mandate. The Registry Engine reports capability conflicts to the Governance Engine but does not resolve them. Conflict resolution is owned by the Governance Engine. The Registry Engine's role is detection and reporting.

---

## Lifecycle

The Registry Engine follows the A.4.4 Engine Lifecycle model with the following engine-specific lifecycle behaviour:

#### Initialization

- The Registry Engine initializes its registration state from the last-known registration snapshot.
- Loads governance policies from the Governance Engine (A.5.10) for registration governance rules.
- Registers itself with the Engine Registry (A.4.3) as a Registry capability provider.
- Subscribes to engine lifecycle events from A.4.4 for health monitoring.
- Emits a `registry.engine.initialized` event with the count of active registrations and capability domains.

#### Startup

- Confirms connectivity with the Governance Engine and receives current governance policies.
- Queries A.4.3 for the current list of registered Engines and reconciles with the local registration state.
- Verifies that all active registrations are still governance-compliant under the current policies. Registrations that are no longer compliant are flagged for governance review.
- Confirms Engine Lifecycle event subscription is active.
- Transitions to steady-state operation upon successful readiness confirmation.

#### Steady-State Operation

- Processes registration requests, updates, and deregistrations as they arrive.
- Evaluates all registration actions against governance policies before finalizing.
- Observes engine lifecycle events and updates health states accordingly.
- Processes discovery queries from Engines and orchestration components.
- Maintains the capability registry index.
- Produces registration audit trail entries.
- Emits structured events for every registration state change and health state change.

#### Degradation

- If the Governance Engine is unavailable, the Registry Engine cannot evaluate governance policies for new registrations and updates. New registrations and updates are blocked; existing registrations remain active. Deregistrations that do not require governance re-evaluation (e.g., deregistration by Engine request) proceed. The Registry Engine emits a `registry.engine.degraded` event with the degradation type.
- If the Engine Lifecycle event stream is unavailable, health state monitoring is suspended. The Registry Engine retains the last known health state for each Engine. Discovery queries return the last known health state with a staleness indicator.
- If the Workflow Engine is unavailable, deregistration dependency checks cannot be performed. Deregistration requests are queued until the Workflow Engine becomes available.

#### Shutdown

- Stops accepting new registration requests, updates, and discovery queries.
- Completes in-progress registration processing or marks it for resumption.
- Persists the current registration state, capability registry index, and health state snapshot.
- Emits a `registry.engine.shutdown` event with the count of active registrations.
- Deregisters from the Engine Registry.

#### Recovery

- Re-registers with the Engine Registry and re-establishes communication channels.
- Re-loads governance policies from the Governance Engine.
- Re-subscribes to engine lifecycle events from A.4.4.
- Reconciles the persisted registration state with the current A.4.3 registration state.
- Re-evaluates all active registrations against current governance policies.
- Processes queued registration actions.
- Emits a `registry.engine.recovered` event with the count of reconciled registrations.

---

## Validation

### Certification Requirements

Before the Registry Engine may be submitted for certification review, the following requirements must be satisfied:

1. All upstream Engine RFCs (A.5.1 through A.5.11) must be certified or in a stable draft state. The Registry Engine depends on all eleven upstream Engines as registration subjects and on the Governance Engine and Workflow Engine for governance evaluation and dependency checking.
2. The Registry Engine RFC must pass all validation checks defined in the Validation Checklist. This includes STD-010 metadata validation, structural validation, scope validation, and content quality validation.
3. All eight engine invariants (INV-REG-1 through INV-REG-8) must be demonstrably preserved across all operations. Each invariant must be expressible as a testable assertion that can be verified without accessing implementation code.
4. The registration governance model must be fully specified with deterministic evaluation, authorization, and rejection logic.
5. The capability registry model must be fully specified with deterministic indexing, conflict detection, and consistency guarantees.
6. The health state derivation model must be fully specified with deterministic state mapping and event-driven updates.
7. The discovery service model must be fully specified with deterministic query processing and subscription management.
8. The Registry Engine's capability mapping to A.4.7 capability domains must be documented. The expected capability domain is "Registry".
9. The deregistration dependency safety model (INV-REG-8) must be fully specified with the Workflow Engine interaction protocol.
10. No implementation-scope content may be present in the RFC.
11. STD-010 metadata compliance must be verified. All 27 mandatory STD-010 fields must be present and correctly formatted; conditionally mandatory fields are included only when applicable.

### Performance Characteristics

| Characteristic | Bound | Rationale |
|:---|:---|:---|
| Registration processing latency | Bounded by governance policy evaluation count and capability validation | Deterministic evaluation; no external I/O |
| Discovery query latency | Bounded by capability registry index size and filter complexity | In-memory index lookup; no external I/O |
| Health state update latency | Bounded by event processing and state derivation | Deterministic derivation from lifecycle event |
| Registration audit write latency | Per-entry append; bounded by audit storage | Append-only; no read-modify-write |
| Concurrent registrations | Multiple registrations processed concurrently; capability index updates serialized | Index consistency requires serialized mutations |
| Discovery subscription notification latency | Bounded by event delivery mechanism per A.4.5 | Asynchronous notification delivery |
| Capability registry size | Proportional to number of registered Engines and their declared capabilities | Grows with new registrations; old versions preserved |

No AI/LLM involvement. No pipeline-blocking operations. All internal processing is deterministic and bounded. The Registry Engine is a service Engine that processes individual requests (registrations, queries, events) — it does not participate in long-running pipeline operations.

#### Concurrency Model

The Registry Engine supports concurrent registration processing. Multiple Engines may submit registration requests simultaneously. However, capability registry index mutations (additions, updates, removals) are serialized to maintain index consistency (INV-REG-3). Discovery queries are processed concurrently with each other and with registration processing — queries read from a consistent snapshot of the index and do not block or are not blocked by registration mutations.

#### Resource Consumption

The Registry Engine's resource consumption is proportional to the number of active registrations and the complexity of the capability registry index. The engine does not accumulate unbounded state — registration records are immutable and the index is bounded by the number of registered Engines. Health state history grows over time but each entry is a fixed-size record. Discovery subscriptions are bounded by the number of subscribing Engines.

### Validation Checklist

- [ ] STD-010 metadata remains complete and current.
- [ ] STD-003 terminology is used without local aliases or redefinitions.
- [ ] A.5.0 section contract is preserved.
- [ ] TPL-001 RFC-structure (20 mandatory sections) is preserved.
- [ ] Runtime Architecture, Engine Platform, and Engine Foundation are consumed without redefinition.
- [ ] This Engine owns only its individual specialization responsibilities.
- [ ] No implementation, ProjectStatus update, certification, freeze, or promotion is claimed.
- [ ] All 16 Specializable subsections contain Engine-specific content.
- [ ] All 8 invariants are testable assertions without implementation code dependency.
- [ ] All 9 operations have complete signatures (purpose, inputs, outputs, side effects, failure modes).
- [ ] All events have complete payloads and consumer expectations.
- [ ] All responsibilities map to at least one operation.

---

## Completion Criteria

The Registry Engine is considered successful when the following conditions are met:

1. Every engine registration that passes governance evaluation and capability validation is recorded as an immutable Registration Record with a unique identifier, a version, and a complete capability declaration. The Registration Record is retrievable, and its version history is complete and unmodified.
2. The capability registry index is always consistent with the set of active Registration Records. Discovery queries always return results that reflect the current registration state. No "phantom" capabilities appear in discovery results, and no registered Engine is missing from the index.
3. Every registration event (registration, update, deregistration, status change, capability conflict) produces an immutable audit trail entry. The audit trail is complete — no registration event exists without a corresponding audit record.
4. Health states are derived deterministically from A.4.4 lifecycle events. The same sequence of lifecycle events always produces the same health state for the same Engine. Health state queries return the most recently derived state.
5. No engine registration is finalized without governance evaluation against applicable policies. This is the single most critical governance success criterion — a violation represents an ungoverned Engine participating in platform operations.
6. No Engine is deregistered while active workflow instances depend on it. The deregistration dependency check with the Workflow Engine (A.5.11) is always performed before deregistration is processed.
7. The Registry Engine does not modify any Engine's internal state, artifacts, or configuration. The Registry Engine's relationship to registered Engines is strictly observational and administrative.
8. All registration and health state events are emitted for observability and audit trail completeness. The event log provides sufficient information to reconstruct the complete registration and health history for any Engine.

---

## Ownership

### Engine Ownership

This section references the mandatory ownership contract defined in A.5.0 Section 5.4.

| Element | Requirement |
|:---|:---|
| **Accountable Owner** | Framework Architecture Team |
| **Maintained Boundaries** | The owner controls the Registry Engine's registration governance model, capability registry structure, health state derivation rules, discovery service logic, and audit trail format. The owner does not control individual Engine processing logic, engine lifecycle management, capability domain definitions, or governance policy definitions. |
| **Decision Rights** | The owner may autonomously define registration validation schemas, health state derivation mappings, discovery filter types, and audit trail structure. The owner must escalate to Framework Governance for any change that affects the governance precedence invariant (INV-REG-2), the deregistration dependency safety invariant (INV-REG-8), or the Registry Engine's interaction contracts with the Governance Engine and Workflow Engine. |
| **Validation Obligations** | The owner must validate that all eight invariants are preserved, that governance integration is complete, that the capability registry index is consistent, that discovery results are accurate, and that the deregistration dependency check protocol is correctly implemented before requesting review. |
| **Review Obligations** | The owner must present the complete Registry Engine RFC to the Enterprise Documentation Standards Board for structural and metadata review, and to Framework Governance for architectural review. The owner must additionally present the governance integration design to the Governance Engine's owner for alignment review. |
| **Certification Responsibilities** | The owner must produce evidence that all eight invariants hold, that capability index consistency is maintained, that discovery accuracy is preserved, and that the handoff to the Memory Engine meets all certification gates. |
| **Ownership Handoff Limitations** | Ownership may transfer only through explicit Framework Governance record. No implicit or silent authority transfer is permitted. The receiving owner must acknowledge acceptance through governance record. The Registry Engine's ownership is sensitive because the owner controls the authoritative registration and capability information for the entire platform. |

#### Ownership Transfer Protocol

If ownership of the Registry Engine is transferred, the following protocol must be followed:

1. The current owner submits an ownership transfer request to Framework Governance, identifying the proposed receiving owner and the reason for transfer.
2. Framework Governance reviews the transfer request and confirms that the receiving owner has the required architectural expertise and governance authority.
3. The current owner must document the complete registration state, including all active registrations, pending registrations, capability conflicts, and discovery subscriptions.
4. The receiving owner acknowledges acceptance through a governance record that references the transfer request.
5. The transfer becomes effective when both the transfer record and the acceptance record are present in the governance log.
6. After transfer, the new owner assumes all Decision Rights and Obligations defined in the ownership table above.

The Registry Engine's ownership transfer protocol is particularly important because the Registry Engine maintains the authoritative registration and capability information for the entire platform. An ownership transfer that loses registration state or capability conflict context could lead to ungoverned registrations or unresolved capability conflicts.

### Engine Handoff Contract

This section references the mandatory handoff contract defined in A.5.0 Section 5.5.

#### Handoff Prerequisites

1. The Registry Engine has completed all processing for the registration action (registration, update, or deregistration).
2. The Registration Record has been produced and has passed all output validation rules.
3. All applicable governance policies have been evaluated and referenced in the Registration Record.
4. All eight engine invariants (INV-REG-1 through INV-REG-8) hold for the completed registration action. Invariant verification is performed as a final check before handoff; any invariant violation prevents handoff and triggers an ERROR state.
5. The capability registry index has been updated and is consistent with the new Registration Record.
6. The audit trail entry has been produced and is immutable.

#### Required Evidence

| Evidence Item | Source | Retention |
|:---|:---|:---|
| Registration Record (complete) | Registry Engine | Handoff snapshot |
| Governance evaluation result | Governance Engine (A.5.10) | Handoff snapshot |
| Capability validation result | Registry Engine | Handoff snapshot |
| Previous registration version (if update) | Registration Store | Reference only |
| Audit trail entry | Registry Engine | Handoff snapshot |
| Deregistration dependency check result (if deregistration) | Workflow Engine (A.5.11) | Handoff snapshot |

#### Validated Outputs

- Registration Records (immutable, versioned, with complete capability declarations, governance evaluations, and health state).
- Capability registry index updates (atomic, consistent with active registrations).
- Registration audit trail entries (immutable, append-only).
- Health state change events (for lifecycle-driven state changes).
- Discovery notification events (for subscription-matching changes).

#### Snapshot Expectations

All Registration Records are immutable once produced. Registration updates produce new Registration Records with new versions. The original record is never mutated. The capability registry index is a live, always-current view — it is not a snapshot but a consistently maintained index. However, discovery query results are snapshots of the index at query time — they do not change after delivery even if the index changes subsequently.

#### Receiving Consumers

1. **All Engines (A.5.1–A.5.11)** — Receive registration events for capability cache updates and peer availability tracking.
2. **Workflow Engine (A.5.11)** — Receives capability registry data for workflow definition validation and engine availability confirmation during step orchestration.
3. **Governance Engine (A.5.10)** — Receives registration governance events and capability conflict reports for audit trail and compliance tracking.
4. **Memory Engine (A.5.9)** — Receives Registration Records and audit trail entries for archival upon request.

#### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Registration rejected by governance | Registration Record not produced; rejection event emitted | Requesting Engine notified with violation details |
| Capability validation failure | Registration Record not produced; validation event emitted | Requesting Engine notified with validation details |
| Deregistration blocked by dependencies | Deregistration deferred; dependency event emitted | Workflow Engine notified; requesting Engine notified |
| Governance Engine unreachable | New registrations and updates blocked; existing registrations remain active | Pipeline observability alerted; degraded mode |
| Workflow Engine unreachable for dependency check | Deregistration deferred; queued for retry | Pipeline observability alerted |
| Memory Engine unreachable for audit archival | Audit entries retained; delivery queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Invariant violation | ERROR state; violation documented | Critical failure; governance notified |

#### Audit Record Expectations

Every handoff produces an audit record containing: registration identifier and version, engine identifier, registration state (ACTIVE, UPDATED, DEREGISTERED), governance evaluation summary, capability validation summary, health state at the time of registration, handoff timestamp, receiving consumer identifiers, and handoff status (delivered, queued, or failed). The audit record is emitted as a structured event and is retained by pipeline observability. The audit record is not part of the Registration Record itself — it is metadata about the handoff event. However, the Registration Record contains sufficient information to reconstruct the audit context from the record alone.

#### Certification Gates

1. **Pre-handoff validation** — Registration Record passes all output validation rules defined in Validation Rules.
2. **Evidence completeness** — All required evidence items present in the handoff package.
3. **Consumer readiness** — Receiving Engines registered and reachable (or events queued per A.4.5).
4. **Invariant preservation** — All eight invariants (INV-REG-1 through INV-REG-8) hold at handoff time. Any invariant violation detected at handoff prevents the handoff and triggers an ERROR state.
5. **Governance completeness** — All governance-required evaluations are complete with recorded results.
6. **Capability index consistency** — The capability registry index is consistent with the new Registration Record and all other active Registration Records.
7. **Audit trail completeness** — Audit entry produced for the registration action.

---

## Risks

| Risk ID | Risk | Likelihood | Impact | Mitigation |
|:---|:---|:---|:---|:---|
| RISK-REG-1 | Governance Engine unavailability blocks all new registrations and updates, creating a platform-wide registration freeze | Medium | High | Existing registrations remain active; degradation mode with staleness indicators; governance policies cached locally with freshness tracking; registrations queued for processing upon recovery |
| RISK-REG-2 | Capability conflict between two Engines claiming exclusive ownership of the same domain goes unresolved for an extended period | Medium | Medium | Conflict detection is immediate and reported to Governance Engine; both registrations proceed with conflict flag; Governance Engine has escalation path to Human Governance; discovery queries return both registrations with conflict indicator |
| RISK-REG-3 | Deregistration dependency check with Workflow Engine creates a deadlock when both Engines depend on each other for availability | Low | High | Dependency check is query-only (read) and does not modify workflow state; deregistration is deferred, not blocked — the requesting Engine is notified and may retry; if the Workflow Engine is unreachable, deregistration is queued rather than permanently blocked |
| RISK-REG-4 | Unbounded audit trail growth consumes storage beyond platform capacity | Medium | Low | Audit trail retention is governed by Governance Engine retention policies; Memory Engine handles archival and purge; Registry Engine produces audit entries but does not own their storage lifecycle |
| RISK-REG-5 | A.4.7 capability domain model evolves faster than Registry Engine's validation rules, causing false rejections of valid registrations | Low | Medium | Unrecognized capability domains produce warnings, not rejections; registrations proceed with flagged capabilities for governance review; Registry Engine validates against A.4.7 but does not define capability domains |
| RISK-REG-6 | Snapshot isolation for discovery queries returns stale results during high-frequency registration churn | Low | Low | Staleness is bounded by query processing latency, which is deterministic; discovery consumers can subscribe for real-time change notifications; staleness indicators are included in discovery results when the index has changed since the last query |
| RISK-REG-7 | Ownership transfer of the Registry Engine loses registration state or capability conflict context, leading to ungoverned registrations | Low | High | Ownership transfer protocol requires complete state documentation; transfer is effective only when both transfer and acceptance records are in the governance log; new owner must acknowledge acceptance through governance record |

---

## Open Questions

| ID | Question | Context | Proposed Resolution |
|:---|:---|:---|:---|
| OQ-REG-1 | Should the Registry Engine support registration versioning rollback — the ability to restore a previous Registration Record as the active registration? | Currently, registration updates produce new immutable records but there is no mechanism to restore a previous version. If a registration update introduces an error (e.g., incorrect capability declaration), the Engine must submit a corrective update rather than rolling back. | Defer to implementation phase. Rollback would require explicit governance evaluation for the restored version and would complicate the audit trail. A corrective update achieves the same result with a clearer audit history. |
| OQ-REG-2 | How should the Registry Engine handle re-registration of an Engine that was previously deregistered? | Deregistration sets the registration state to DEREGISTERED. A subsequent registration from the same Engine identifier is treated as a new registration (full pipeline). However, the previous registration history is retained for audit purposes. | Confirm that re-registration follows the full five-stage pipeline (governance + capability validation). The previous registration history remains accessible via `queryRegistrationHistory` but does not influence the new registration evaluation. |
| OQ-REG-3 | Should discovery subscriptions persist across Registry Engine restarts? | Currently, subscriptions persist until explicitly cancelled or the subscribing Engine deregisters. If the Registry Engine restarts, it is unclear whether subscriptions should be restored from persisted state or require re-subscription. | Defer to implementation phase. Subscription persistence across restarts adds complexity. The simplest approach is to require re-subscription after Registry Engine recovery, with a `registry.engine.recovered` event signalling that subscriptions must be renewed. |
| OQ-REG-4 | What is the maximum allowable staleness for health state information during Engine Lifecycle event stream unavailability? | During degradation, the Registry Engine retains the last known health state and includes a staleness indicator in discovery results. However, no explicit maximum staleness threshold is defined. | Define a governance-configurable staleness threshold. If the threshold is exceeded, the Registry Engine transitions affected Engines to a `STALE_HEALTH` state rather than reporting the last known state. This threshold would be part of the governance policies consumed from the Governance Engine. |

---

## Version History

| Version | Date | Author | Description |
|:---|:---|:---|:---|
| `0.2.0-draft` | 2026-07-10 | Framework Architecture Team | Initial pre-refactor draft with 33-section structure. |
| `0.3.0-draft` | 2026-07-13 | Framework Architecture Team | Refactored to TPL-001 compliance: 33 sections remapped to 20 mandatory TPL-001 sections. Structural content redistributed to Architecture, Design Decisions, Risks, and Validation. Zero structural sections removed or redefined. |

---

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

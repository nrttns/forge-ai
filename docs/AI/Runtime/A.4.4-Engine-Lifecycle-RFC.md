# AI-DOS-A-004.4 — Engine Lifecycle RFC

| | |
|:---|:---|
| **Framework** |AI-DOS v3 |
| **Document Class** | Architecture RFC |
| **Domain** | Engine Lifecycle Architecture |
| **Confidentiality** | Internal — Governed |

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-4-4` |
| Title | A.4.4 — Engine Lifecycle RFC |
| Version | `0.3.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Foundation Architecture |
| Document Type | Engine Foundation RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-11 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.004.4` |
| Consumes | Runtime Architecture, Engine Platform Architecture, constitutional principles, meta-model semantics, artifact metadata rules, canonical terminology, RFC template rules, and Engine Foundation normalization instructions. |
| Produces | Engine Lifecycle foundation RFC, foundation boundary definitions, validation expectations, and downstream inputs for Engine Specialization RFCs. |
| Related Specifications | `docs/AI/Runtime/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## Executive Summary

This RFC defines the Engine Lifecycle as the canonical governed state-transition model for everyAI-DOS v3 Engine. The Lifecycle establishes fifteen canonical states, a complete transition matrix, validation rules, failure classification, and recovery expectations that the Engine Kernel coordinates, the Engine Registry reflects, and all other framework subsystems consume without redefining.

The Engine Lifecycle sits below the Engine Registry in the A.4 architecture sequence and above lifecycle-compatible Engine behavior. It defines permissible state semantics and transition rules without implementing state storage, scheduling, execution, or runtime hosting. The Engine Kernel is the primary consumer, responsible for coordinating transitions, enforcing preconditions, and routing lifecycle events. The Registry, Validation, Certification, Knowledge Graph, Runtime, Workflow, agents, and platform adapters observe or consume lifecycle state within their defined boundaries.

This RFC covers the full lifecycle architecture: fifteen canonical states organized into four categories, forty-one valid transitions with rationale, sixteen explicitly invalid transitions, a 16×16 transition matrix, an ASCII lifecycle diagram, twelve ownership participants, fifteen lifecycle invariants, nineteen canonical events, three validation categories, ten failure classes, and five recovery paths with governance rules. Each section specifies responsibilities and explicit non-ownership boundaries.

As a documentation-only RFC, this document produces no code, no APIs, and no project status changes. It is non-canonical until reviewed, approved, and promoted through Framework Governance.

---

## Purpose

The Engine Lifecycle defines the canonical lifecycle model for everyAI-DOS Engine.

The Lifecycle specifies governed Engine states, valid transitions, invalid transitions, invariants, events, validation rules, failure handling, recovery expectations, synchronization responsibilities, and governance boundaries. It allows the Engine Kernel to coordinate Engine state changes consistently while preventing Runtime hosts, Workflow, Registry, platform adapters, agents, tools, and individual Engines from inventing incompatible lifecycle semantics.

The governing principle is:

```text
The Engine Lifecycle governs state semantics.
The Engine Kernel coordinates lifecycle transitions.
The Engine Registry reflects lifecycle state.
The Runtime hosts execution.
No individual Engine defines an independent lifecycle model.
```

The Lifecycle is not an implementation. It is not a scheduler. It is not a Runtime. It is not a Workflow engine. It is not a Registry implementation. It is a governed architectural model consumed by the Engine Kernel and observed by other framework subsystems.

---

## Scope

This RFC defines the architectural model for:

1. canonical lifecycle states;
2. lifecycle transition rules;
3. valid and invalid transition semantics;
4. lifecycle invariants;
5. lifecycle ownership;
6. lifecycle governance;
7. lifecycle events;
8. lifecycle validation;
9. lifecycle failure classification;
10. lifecycle recovery expectations;
11. lifecycle synchronization with Kernel, Registry, Validation, Certification, Knowledge Graph, Runtime, Workflow, agents, and adapters;
12. lifecycle security constraints;
13. open questions and completion evidence.

---

## Out of Scope

This RFC does not:

- implement lifecycle code;
- define APIs, services, endpoints, SDKs, functions, classes, packages, protocols, queues, or database schemas;
- define scheduling algorithms;
- define state-machine code;
- execute Engines;
- host Runtime;
- replace the Engine Kernel;
- replace the Engine Registry;
- replace Workflow;
- replace Validation;
- replace Review;
- replace Certification;
- redefine Standards;
- redefine Knowledge Graph semantics;
- update `docs/ProjectStatus.md`;
- promote this RFC to canonical authority.

---

## Normative Authority

Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`

---

## Normative References

- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`

---

## Dependencies

- A.3 Runtime Architecture
- A.4 Engine Architecture
- A.1 Constitution
- M.0 Framework Meta Model
- M.1 Artifact Meta Model
- STD-003 Terminology Standard
- STD-010 Document Metadata Standard
- TPL-000 Template Standard
- TPL-001 RFC Template Standard

---

## Architecture

### Lifecycle Position

The Engine Lifecycle sits below the Engine Registry in the A.4 architecture sequence as the governed model for Engine state transitions.

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
A.4.4 Engine Lifecycle
    ↓
Lifecycle-compatible Engine behavior
```

This position does not make the Lifecycle an executor. The Lifecycle defines permissible state semantics. The Kernel coordinates transitions, the Registry reflects discoverable state, Validation verifies transition evidence, and Runtime hosts execution.

#### Conceptual Placement

```text
Runtime Host
    ↓
Engine Kernel
    ↓
Engine Lifecycle Model
    ↓
Engine Contract + Registry Metadata
    ↓
Individual Engine State Evidence
    ↓
Validation / Review / Certification / Knowledge Graph Handoffs
```

The diagram describes responsibility adjacency only. It does not prescribe deployment topology, persistence technology, communication transport, implementation language, runtime process boundaries, or event delivery mechanism.

### Lifecycle Architecture Layers

The Engine Lifecycle architecture contains five conceptual layers:

| Layer | Responsibility | Non-Ownership Boundary |
|:---|:---|:---|
| State Model | Defines canonical Engine lifecycle states and state meanings. | Does not implement state storage or state-machine code. |
| Transition Model | Defines valid, invalid, and governance-gated transitions. | Does not schedule or execute transitions. |
| Event Model | Defines canonical lifecycle events emitted or recorded around transitions. | Does not prescribe event bus, queue, transport, or schema implementation. |
| Validation Model | Defines evidence required to validate lifecycle transitions. | Does not replace the Validation System or review decisions. |
| Failure and Recovery Model | Defines lifecycle failure classes and recovery expectations. | Does not implement retry, rollback, suspension, or remediation logic. |

Lifecycle architecture is consumed primarily by the Engine Kernel. It is observed by the Engine Registry, Validation System, Review System, Certification System, Knowledge Graph, Runtime, Workflow, agents, and platform adapters.

### Canonical Lifecycle States

EveryAI-DOS Engine shall use the following lifecycle states. Individual Engines may expose more detailed internal execution information only if that information maps to these canonical states and does not redefine lifecycle semantics.

| State | Meaning | Entry Requirement | Exit Requirement |
|:---|:---|:---|:---|
| Declared | The Engine exists as a governed architectural declaration or contract candidate. | Stable identity, owner, and intent are declared. | Registration evidence is available or declaration is rejected by governance. |
| Registered | The Engine is discoverable through the Engine Registry. | Registry-required metadata and contract association are present. | Registration is validated, deprecated, retired, archived, or failed. |
| Validated | The Engine registration, contract, dependencies, and minimum lifecycle evidence passed required validation. | Validation evidence confirms lifecycle readiness requirements. | Kernel accepts initialization or validation is invalidated. |
| Initialized | The Kernel has coordinated initialization preparation for the Engine. | Registration and validation occurred first. | Initialization evidence supports readiness or initialization fails. |
| Ready | The Engine is available for governed invocation. | Validation and initialization succeeded. | Invocation begins, deprecation begins, suspension occurs, or failure occurs. |
| Invoked | A governed request has been routed to the Engine through Kernel coordination. | Engine was Ready and invocation preconditions passed. | Execution starts, invocation is rejected, or failure occurs. |
| Running | The Engine is actively executing a governed invocation. | Invocation was accepted and execution started. | Execution completes, waits, suspends, fails, or becomes retry pending. |
| Waiting | The Engine is paused on an external dependency, input, governance decision, validation evidence, or runtime condition. | Running execution has a declared wait reason. | Dependency resolves and execution resumes, suspends, fails, or is retired under governance. |
| Suspended | The Engine is intentionally paused for governance, safety, maintenance, dependency, security, or operational reasons. | A suspension reason and owner are recorded. | Resume is authorized, retirement begins, archive begins, or failure is recorded. |
| Resumed | The Engine has been reactivated after Waiting or Suspended. | Resume authorization and compatibility checks passed. | Execution returns to Running or Ready as appropriate, or failure occurs. |
| Completed | The Engine finished a governed invocation and produced required evidence or handoff artifacts. | Completion criteria for the invocation are satisfied. | Certification observes completion, another invocation starts from Ready, or failure is discovered post-completion. |
| Failed | The Engine or lifecycle transition failed and unsafe continuation is blocked. | Failure class, evidence, and owner are recorded. | Recovery moves to Retry Pending, Suspended, Deprecated, Retired, Archived, or governance resolves failure. |
| Retry Pending | A failed or interrupted transition/invocation is eligible for a governed retry but has not resumed. | Retry eligibility, limits, and validation requirements are documented. | Retry returns to Invoked, Initialized, Registered, or Running as governed by failure class; otherwise fails, suspends, or retires. |
| Deprecated | The Engine remains known but is discouraged or scheduled for replacement. | Governance-approved deprecation rationale and migration expectations exist. | Engine may be retired, archived, or temporarily returned to Ready only through governance exception. |
| Retired | The Engine is no longer eligible for new invocations. | Retirement rationale, replacement or closure evidence, and registry state are recorded. | Engine may be archived or, only by governance exception, re-declared through a new lifecycle path. |
| Archived | The Engine is preserved only for historical, audit, traceability, or certification evidence. | Retention and audit evidence are complete. | No normal exit; any reactivation requires a new declaration and governance approval. |

#### State Categories

| Category | States | Meaning |
|:---|:---|:---|
| Establishment | Declared, Registered, Validated, Initialized, Ready | Engine becomes known, valid, and available. |
| Invocation | Invoked, Running, Waiting, Suspended, Resumed, Completed | Engine participates in governed execution. |
| Failure and Recovery | Failed, Retry Pending | Engine cannot safely continue without remediation or governed retry. |
| Lifecycle Exit | Deprecated, Retired, Archived | Engine is phased out, removed from new use, or preserved for audit. |

### Transition Rules

#### General Rules

1. All lifecycle transitions shall be deterministic, explicit, traceable, and attributable to an authorized owner or subsystem.
2. The Engine Kernel coordinates transitions and shall not bypass the canonical Lifecycle.
3. The Registry reflects lifecycle state but shall not independently transition Engines.
4. Runtime hosts Engine execution but shall not redefine lifecycle state meanings.
5. Workflow may request lifecycle movement through governed Kernel coordination but shall not define alternate transitions.
6. Validation shall verify transition evidence before states that require validation, especially Ready, Resumed, Retry Pending, Retired, and Archived.
7. Certification may observe completed lifecycle evidence but shall not execute or alter lifecycle transitions.
8. Individual Engines shall not self-promote from Declared to Registered, Registered to Validated, Validated to Ready, Failed to Retry Pending, Deprecated to Ready, Retired to Ready, or Archived to active states.
9. Lifecycle transitions shall preserve Engine identity and version compatibility evidence.
10. Invalid transitions are lifecycle failures and may also be governance violations.

#### Valid Transition List

The following transitions are valid when required preconditions, validation, governance checks, and registry synchronization have succeeded:

| From | To | Transition Rationale |
|:---|:---|:---|
| Declared | Registered | Engine metadata and contract become discoverable. |
| Declared | Failed | Declaration is incomplete, contradictory, or governance-blocked. |
| Declared | Archived | Declaration is withdrawn but retained for audit. |
| Registered | Validated | Registration and contract evidence pass validation. |
| Registered | Failed | Registration metadata, ownership, contract, or discovery evidence fails. |
| Registered | Deprecated | Registered Engine is superseded or discouraged before validation. |
| Validated | Initialized | Kernel begins initialization coordination. |
| Validated | Failed | Validation is invalidated or a dependency becomes unsafe before initialization. |
| Initialized | Ready | Initialization succeeds and readiness validation passes. |
| Initialized | Failed | Initialization fails or readiness cannot be proven. |
| Ready | Invoked | Kernel routes a governed invocation. |
| Ready | Suspended | Engine is paused before invocation. |
| Ready | Deprecated | Engine remains usable only under deprecation policy. |
| Ready | Failed | Health, governance, or dependency evidence makes readiness unsafe. |
| Invoked | Running | Invocation is accepted and execution starts. |
| Invoked | Failed | Invocation is rejected, blocked, or unsafe. |
| Running | Waiting | Execution waits for dependency, input, decision, or evidence. |
| Running | Suspended | Execution is intentionally paused. |
| Running | Completed | Execution completes with required evidence. |
| Running | Failed | Execution fails. |
| Waiting | Resumed | Wait condition resolves and resume checks pass. |
| Waiting | Suspended | Wait becomes an intentional suspension. |
| Waiting | Failed | Wait condition fails or times out under governance rules. |
| Suspended | Resumed | Suspension is lifted through authorization and compatibility checks. |
| Suspended | Failed | Suspension reveals unrecoverable failure or violation. |
| Suspended | Deprecated | Suspended Engine is marked for replacement. |
| Suspended | Retired | Suspended Engine is removed from use. |
| Resumed | Running | An in-flight execution continues after pause. |
| Resumed | Ready | Engine returns to available state without an active invocation. |
| Resumed | Failed | Resume checks fail. |
| Completed | Ready | Engine is available for another governed invocation. |
| Completed | Failed | Post-completion validation discovers invalid or unsafe output. |
| Completed | Deprecated | Engine completed work but is marked for phase-out. |
| Failed | Retry Pending | Failure is recoverable and retry is allowed. |
| Failed | Suspended | Failure requires containment before remediation. |
| Failed | Deprecated | Failure indicates replacement path should begin. |
| Failed | Retired | Failure is unrecoverable or governance retires the Engine. |
| Retry Pending | Invoked | Retry restarts from invocation. |
| Retry Pending | Initialized | Retry re-runs initialization. |
| Retry Pending | Registered | Retry requires refreshed registration validation. |
| Retry Pending | Running | Retry resumes a recoverable execution point where governance permits. |
| Retry Pending | Failed | Retry is exhausted, invalid, or unsafe. |
| Retry Pending | Suspended | Retry is paused pending governance, dependency, or validation evidence. |
| Deprecated | Ready | Temporary governance exception permits limited use. |
| Deprecated | Retired | Engine is removed from new invocations. |
| Deprecated | Archived | Deprecated Engine is preserved without active use. |
| Retired | Archived | Retired Engine evidence is finalized for retention. |
| Retired | Declared | Governance approves a new lifecycle path for a successor or re-declaration. |

#### Invalid Transition Rules

Any transition not listed in this RFC is invalid unless a future approved amendment expands the transition model. The following transitions are explicitly invalid because they bypass mandatory lifecycle gates:

| Invalid Transition | Reason |
|:---|:---|
| Declared → Validated | Bypasses Registry discoverability. |
| Declared → Initialized | Bypasses registration and validation. |
| Declared → Ready | Bypasses registration, validation, and initialization. |
| Registered → Initialized | Bypasses validation. |
| Registered → Ready | Bypasses validation and initialization. |
| Validated → Ready | Bypasses initialization. |
| Initialized → Invoked | Bypasses Ready state. |
| Ready → Running | Bypasses governed invocation. |
| Invoked → Completed | Bypasses execution evidence. |
| Waiting → Completed | Bypasses resume or running evidence. |
| Suspended → Running | Bypasses resume checks. |
| Failed → Ready | Bypasses recovery and validation. |
| Failed → Completed | Converts failure into success without evidence. |
| Retry Pending → Ready | Bypasses retry execution or initialization path. |
| Deprecated → Running | Bypasses Ready and invocation exception path. |
| Retired → Ready | Bypasses new declaration and governance approval. |
| Archived → Registered | Reactivates historical evidence without a new lifecycle path. |
| Archived → Ready | Bypasses all active lifecycle gates. |

### Transition Matrix

This section provides the complete 16×16 transition matrix for all canonical lifecycle states. Each cell indicates whether a transition from the row state to the column state is valid, governance-gated, invalid, or not applicable.

Legend:

- `Y` = valid transition when preconditions pass.
- `G` = governance-gated transition requiring explicit approval or exception.
- `N` = invalid transition.
- `—` = same state / not applicable.

| From \ To | Declared | Registered | Validated | Initialized | Ready | Invoked | Running | Waiting | Suspended | Resumed | Completed | Failed | Retry Pending | Deprecated | Retired | Archived |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Declared | — | Y | N | N | N | N | N | N | N | N | N | Y | N | N | N | Y |
| Registered | N | — | Y | N | N | N | N | N | N | N | N | Y | N | G | N | N |
| Validated | N | N | — | Y | N | N | N | N | N | N | N | Y | N | N | N | N |
| Initialized | N | N | N | — | Y | N | N | N | N | N | N | Y | N | N | N | N |
| Ready | N | N | N | N | — | Y | N | N | Y | N | N | Y | N | Y | N | N |
| Invoked | N | N | N | N | N | — | Y | N | N | N | N | Y | N | N | N | N |
| Running | N | N | N | N | N | N | — | Y | Y | N | Y | Y | N | N | N | N |
| Waiting | N | N | N | N | N | N | N | — | Y | Y | N | Y | N | N | N | N |
| Suspended | N | N | N | N | N | N | N | N | — | Y | N | Y | N | Y | Y | N |
| Resumed | N | N | N | N | Y | N | Y | N | N | — | N | Y | N | N | N | N |
| Completed | N | N | N | N | Y | N | N | N | N | N | — | Y | N | Y | N | N |
| Failed | N | N | N | N | N | N | N | N | Y | N | N | — | Y | Y | Y | N |
| Retry Pending | N | Y | N | Y | N | Y | Y | N | Y | N | N | Y | — | N | N | N |
| Deprecated | N | N | N | N | G | N | N | N | N | N | N | N | N | — | Y | Y |
| Retired | G | N | N | N | N | N | N | N | N | N | N | N | N | N | — | Y |
| Archived | N | N | N | N | N | N | N | N | N | N | N | N | N | N | N | — |

### Lifecycle Diagram

The following ASCII diagram illustrates the primary lifecycle flow and exception paths. It is a conceptual representation of state adjacency, not an implementation specification.

```text
Declared
    ├── Registered ── Validated ── Initialized ── Ready ── Invoked ── Running ── Completed
    │      │              │             │            │          │          │          │
    │      │              │             │            │          │          │          ├── Ready
    │      │              │             │            │          │          │          ├── Deprecated
    │      │              │             │            │          │          │          └── Failed
    │      │              │             │            │          │          ├── Waiting ── Resumed ── Running
    │      │              │             │            │          │          │     │          └── Ready
    │      │              │             │            │          │          │     ├── Suspended
    │      │              │             │            │          │          │     └── Failed
    │      │              │             │            │          │          ├── Suspended ── Resumed
    │      │              │             │            │          │          └── Failed
    │      │              │             │            │          └── Failed
    │      │              │             │            ├── Suspended
    │      │              │             │            ├── Deprecated ── Retired ── Archived
    │      │              │             │            └── Failed ── Retry Pending
    │      │              │             │                         │
    │      │              │             │                         ├── Registered
    │      │              │             │                         ├── Initialized
    │      │              │             │                         ├── Invoked
    │      │              │             │                         ├── Running
    │      │              │             │                         ├── Suspended
    │      │              │             │                         └── Failed
    │      │              │             └── Failed
    │      │              └── Failed
    │      ├── Failed
    │      └── Deprecated ── Retired ── Archived
    ├── Failed
    └── Archived

Retired ── governance exception ── Declared
Deprecated ── governance exception ── Ready
Archived has no normal active exit.
```

### Lifecycle Invariants

Every Engine Lifecycle shall guarantee:

1. deterministic transitions;
2. traceable state changes;
3. version compatibility before readiness and resume;
4. validation before Ready;
5. registration before initialization;
6. identity persistence across all states;
7. auditability of every transition;
8. governance compliance for exceptional paths;
9. explicit ownership for state changes;
10. failure containment before retry or continuation;
11. Registry synchronization for discoverable lifecycle state;
12. Knowledge Graph compatibility for lifecycle evidence artifacts;
13. no direct transition from inactive archive state to active runtime state;
14. no self-promotion by individual Engines across governed gates;
15. no Runtime, Workflow, Registry, adapter, tool, or agent-defined alternate lifecycle.

### Lifecycle Events

Lifecycle events are architectural event names. This RFC does not define event payload schemas, transports, queues, APIs, or implementation mechanisms.

| Event | Emitted / Recorded When | Required Evidence |
|:---|:---|:---|
| EngineDeclared | An Engine declaration is created. | Identity, owner, purpose, initial contract intent. |
| EngineRegistered | Registry accepts Engine discoverability metadata. | Registry entry, contract association, owner. |
| EngineRegistrationFailed | Registration fails. | Failure reason, missing or invalid metadata, owner. |
| EngineValidated | Registration and contract evidence pass validation. | Validation report and compatibility evidence. |
| EngineValidationFailed | Validation fails. | Validation failure report and blocker classification. |
| EngineInitialized | Kernel initialization coordination succeeds. | Initialization evidence and readiness preconditions. |
| EngineInitializationFailed | Initialization fails. | Failure classification and containment decision. |
| EngineReady | Engine becomes available for governed invocation. | Readiness validation and Registry synchronization evidence. |
| EngineInvoked | Kernel routes a governed invocation to a Ready Engine. | Invocation request trace and precondition evidence. |
| EngineStarted | Engine transitions from Invoked to Running. | Start evidence, trace identifier, execution owner. |
| EngineWaiting | Running execution enters Waiting. | Wait reason, dependency or decision owner. |
| EngineSuspended | Engine enters Suspended. | Suspension reason, authority, owner, safety state. |
| EngineResumed | Engine resumes from Waiting or Suspended. | Resume authorization and compatibility checks. |
| EngineCompleted | Engine completes governed execution. | Completion evidence, outputs, handoff artifacts. |
| EngineFailed | Engine or transition fails. | Failure class, evidence, containment status. |
| EngineRetryPending | Failure becomes eligible for governed retry. | Retry eligibility, limits, validation requirements. |
| EngineDeprecated | Engine enters Deprecated. | Deprecation rationale, migration or exception policy. |
| EngineRetired | Engine enters Retired. | Retirement rationale and Registry state. |
| EngineArchived | Engine enters Archived. | Retention, audit, and traceability evidence. |
| EngineInvalidTransitionDetected | A lifecycle actor attempts an invalid transition. | Attempted transition, source, reason, governance escalation. |

### Governance Rules

Lifecycle governance protects state integrity, authority flow, review readiness, and certification evidence.

> The Engine Lifecycle is the sole canonical lifecycle model for allAI-DOS Engines. No subsystem, agent, adapter, or individual Engine may define, substitute, or bypass it.

1. The Engine Lifecycle is the only approved lifecycle model for allAI-DOS Engines.
2. Individual Engines shall not define independent lifecycle models.
3. Runtime shall not redefine lifecycle semantics.
4. Workflow shall not redefine lifecycle transitions.
5. Registry shall observe and reflect lifecycle state but shall not own transition authority.
6. Kernel shall coordinate lifecycle transitions but shall not redefine this RFC.
7. Validation shall validate transitions but shall not invent lifecycle states.
8. Certification shall observe completed lifecycle evidence but shall not execute Engines or self-certify results.
9. Knowledge Graph shall record lifecycle-compatible artifacts without redefining lifecycle semantics.
10. Platform adapters shall translate lifecycle evidence into platform context only where allowed by adapter governance.
11. Governance exceptions shall be explicit, traceable, time-bounded where applicable, and reviewable.
12. Any attempt to bypass registration, validation, initialization, invocation, or failure containment is a lifecycle governance issue.

### Security Constraints

Lifecycle security constraints apply to state transitions, events, evidence, recovery, and synchronization.

> Lifecycle state shall be determined only through governed evidence. No actor may infer, assume, or fabricate Engine lifecycle state from conversational context, tool preference, file presence, or undocumented runtime convention.

1. Unauthorized actors shall not initiate lifecycle transitions.
2. Engine identity shall be stable and protected against spoofing or ambiguous reuse.
3. Lifecycle state shall not be inferred from conversational context, tool preference, local availability, file presence, or undocumented runtime convention.
4. Registry-visible lifecycle state shall be synchronized only through governed evidence.
5. Failure evidence shall not be suppressed, overwritten, or converted into success without validation.
6. Deprecated, Retired, and Archived Engines shall not be invoked unless a documented governance exception permits the path.
7. Recovery shall not bypass validation, ownership, compatibility, or security checks.
8. Lifecycle events shall preserve traceability sufficient for audit, review, and certification observation.
9. Platform adapters shall not weaken lifecycle gates to match platform limitations.
10. Lifecycle state changes that affect trust, certification, artifact validity, or execution safety require governance-visible records.

---

## Design Decisions

### DD-1: Fifteen Canonical States in Four Categories

The Lifecycle defines exactly fifteen canonical states organized into four categories (Establishment, Invocation, Failure and Recovery, Lifecycle Exit) rather than a simpler or more granular model. This count balances expressiveness with governance overhead: enough states to prevent ambiguous or unsafe conditions (e.g., separating Waiting from Suspended, Failed from Retry Pending) while keeping the model manageable for all consumers. The four-category taxonomy provides a predictable mental model for Kernel coordination, Registry reflection, and Validation gate placement.

### DD-2: Explicit Invalid Transition Enumeration

Rather than defining only valid transitions and treating all others as implicitly invalid, this RFC explicitly enumerates eighteen invalid transitions that bypass mandatory lifecycle gates. This design decision ensures that common bypass patterns (e.g., Declared → Ready, Failed → Completed, Archived → Ready) are documented with their specific rationale, reducing the risk of accidental implementation of unsafe shortcuts by Kernel, Registry, Runtime, or adapter code.

### DD-3: Governance-Gated Transitions in the Transition Matrix

Three transitions (Registered → Deprecated, Deprecated → Ready, Retired → Declared) are marked as governance-gated (`G`) rather than simply valid or invalid. This design decision acknowledges that certain exceptional paths are legitimate but require explicit human or governance authority approval. The governance-gated classification prevents these paths from being automated while preserving architectural flexibility for approved exceptions.

### DD-4: Separation of Event Model from Implementation

The Lifecycle defines nineteen canonical event names with required evidence fields but does not prescribe event payload schemas, transports, queues, APIs, or implementation mechanisms. This separation keeps this RFC as a governed architectural model rather than an implementation specification, allowing the Kernel, Registry, and platform adapters to choose appropriate event infrastructure without being locked into a specific technology.

### DD-5: Failure Containment Before Recovery

The Failure Model requires explicit failure classification, evidence recording, and safety state routing before any recovery is attempted. Recovery is never permitted to erase or overwrite failure evidence. This design decision prevents silent failure-to-success conversions and ensures that every recovery path leaves a complete audit trail for Validation, Review, and Certification observation.

### DD-6: 16×16 Complete Transition Matrix

The Lifecycle provides a complete 16×16 transition matrix covering every possible source-to-target state combination, rather than listing only valid transitions. This exhaustive specification eliminates ambiguity about whether an unspecified transition is merely undocumented or explicitly forbidden. Every cell is populated with `Y`, `G`, `N`, or `—`, making the matrix the single authoritative reference for transition permissibility.

---

## Ownership

| Participant | Ownership Role |
|:---|:---|
| Human Governance | Governance authority over lifecycle policy changes, exceptional reactivation, retirement exceptions, and unresolved authority decisions. |
| Engine Lifecycle | Defines canonical states, transition semantics, invariants, events, and failure/recovery expectations. |
| Engine Kernel | Primary consumer — coordinates transitions, enforces preconditions, routes lifecycle events, and prevents invalid transitions. |
| Engine Registry | Reflects discoverable lifecycle metadata and synchronizes Registry entries with Kernel-observed lifecycle evidence. |
| Runtime | Hosts execution environments in which Engines may be invoked and run. |
| Workflow | Requests lifecycle movement as part of governed procedures. |
| Validation | Validates transition evidence, readiness, recovery eligibility, and lifecycle compliance. |
| Review | Assesses readiness and evidence independently. |
| Certification | Observes completed lifecycle evidence and certification handoffs. |
| Knowledge Graph | Records lifecycle-compatible artifacts, relationships, and evidence according to graph standards. |
| Agents | Consume lifecycle state and may request governed action through Runtime and Kernel. |
| Platform Adapters | Translate lifecycle-compatible behavior into platform context where permitted. |

---

## Responsibilities

| Participant | Responsibility |
|:---|:---|
| Human Governance | Approves lifecycle policy changes, exceptional reactivation, retirement exceptions, and unresolved authority decisions. |
| Engine Lifecycle | Defines canonical states, transition semantics, invariants, events, and failure/recovery expectations. |
| Engine Kernel | Coordinates transitions, enforces preconditions, routes lifecycle events, and prevents invalid transitions. |
| Engine Registry | Reflects discoverable lifecycle metadata and synchronizes Registry entries with Kernel-observed lifecycle evidence. |
| Runtime | Hosts execution environments in which Engines may be invoked and run. |
| Workflow | Requests lifecycle movement as part of governed procedures. |
| Validation | Validates transition evidence, readiness, recovery eligibility, and lifecycle compliance. |
| Review | Assesses readiness and evidence independently. |
| Certification | Observes completed lifecycle evidence and certification handoffs. |
| Knowledge Graph | Records lifecycle-compatible artifacts, relationships, and evidence according to graph standards. |
| Agents | Consume lifecycle state and may request governed action through Runtime and Kernel. |
| Platform Adapters | Translate lifecycle-compatible behavior into platform context where permitted. |

---

## Non Responsibilities

| Participant | Non-Responsibility Boundary |
|:---|:---|
| Human Governance | Does not implement lifecycle mechanics. |
| Engine Lifecycle | Does not execute Engines or store state. |
| Engine Kernel | Does not redefine lifecycle semantics. |
| Engine Registry | Does not independently transition or execute Engines. |
| Runtime | Does not redefine lifecycle states or transitions. |
| Workflow | Does not bypass Kernel or define alternate transitions. |
| Validation | Does not execute transitions. |
| Review | Does not implement remediation or transition Engines. |
| Certification | Does not self-certify or alter lifecycle state. |
| Knowledge Graph | Does not coordinate runtime execution or lifecycle dispatch. |
| Agents | Do not directly transition Engines. |
| Platform Adapters | Do not redefine lifecycle semantics for a platform. |

### Prohibitions

The Engine Lifecycle shall not:

- execute Engines;
- host Runtime;
- schedule execution;
- implement business logic;
- define programming interfaces;
- define implementation classes;
- define scheduling algorithms;
- define state-machine code;
- replace the Engine Kernel;
- replace the Engine Registry;
- replace Workflow;
- replace Validation;
- replace Review;
- replace Certification;
- redefine Standards;
- redefine the Knowledge Graph;
- update ProjectStatus;
- promote itself to canonical authority.

---

## Interfaces

### Runtime

Runtime hosts execution conditions in which Engines may be invoked, run, wait, suspend, resume, complete, or fail. Runtime consumes lifecycle state but does not own lifecycle semantics.

### Engine Kernel

The Engine Kernel coordinates lifecycle transitions, enforces preconditions, rejects invalid transitions, publishes or records lifecycle events, and routes validation, registry, and failure handoffs. The Kernel is the primary consumer of this RFC.

### Engine Contract

The Engine Contract declares identity, ownership, metadata, dependencies, capabilities, validation expectations, event expectations, telemetry, and state observability required for lifecycle participation. Lifecycle readiness depends on contract compatibility.

### Engine Registry

The Engine Registry records discoverability metadata and reflects Kernel-observed lifecycle state. It provides lifecycle visibility to Runtime, Validation, Review, Certification, agents, and adapters without becoming an execution or transition authority.

### Workflow

Workflow may request lifecycle movement as part of governed procedures. Workflow does not invoke Engines directly, define lifecycle state, or bypass Kernel coordination.

### Validation

Validation verifies transition evidence, readiness, failure classification, retry eligibility, resume authorization, retirement evidence, archival evidence, and lifecycle compliance.

### Certification

Certification observes completed lifecycle evidence when determining whether outputs are ready for certification handoff. Certification does not execute Engines or alter lifecycle states.

### Knowledge Graph

The Knowledge Graph records lifecycle-compatible artifacts, relationships, transition evidence, failures, and certification-relevant traces under Knowledge Graph standards. It does not coordinate runtime execution.

### Agents

Agents consume lifecycle information and may request governed actions through Runtime and Kernel coordination. Agents shall not directly transition Engines, infer active state from prompt memory, or bypass lifecycle validation.

### Platform Adapters

Platform adapters translate lifecycle-compatible behavior into platform-specific context without redefiningAI-DOS lifecycle semantics, weakening gates, or making platform state authoritative overAI-DOS lifecycle state.

---

## Lifecycle

This RFC is in the **Draft** lifecycle phase. It is non-canonical until reviewed, approved, and promoted through Framework Governance. The following lifecycle stages apply:

| Stage | Criteria | Current Status |
|:---|:---|:---|
| Draft | Authoring complete, structure compliant | ✅ Current |
| Review | Framework Governance review initiated | Pending |
| Approved | Human Governance approval granted | Pending |
| Canonical | Explicitly promoted to canonical authority | Pending |
| Superseded | Replaced by a newer approved version | Not applicable |

---

## Validation

### Transition Validation

For every transition, validation shall confirm:

1. source state is known and traceable;
2. target state is permitted by this RFC;
3. transition initiator is authorized;
4. required preconditions are satisfied;
5. Engine identity is stable;
6. Engine version is compatible with the target state;
7. Registry state can be synchronized where discoverability is affected;
8. required artifacts or evidence exist;
9. failure and recovery paths are classified when applicable;
10. no higher-authority rule blocks the transition.

### Readiness Validation

An Engine shall not enter Ready unless validation confirms:

- the Engine was Registered;
- the Engine was Validated;
- the Engine was Initialized;
- required dependencies are present or explicitly optional;
- Engine Contract metadata remains compatible;
- lifecycle state can be observed by the Kernel and reflected by the Registry;
- security and governance constraints do not block invocation;
- traceability evidence exists.

### Recovery Validation

An Engine shall not enter Retry Pending, Resumed, Ready after exception, Retired, or Archived unless validation confirms:

- failure or pause cause is documented;
- recovery path is permitted;
- retry or resume limits are respected;
- ownership is explicit;
- dependent artifacts remain valid;
- no governance violation is unresolved;
- Registry and Knowledge Graph handoffs can represent the resulting state.

### Failure Model

Lifecycle failures are failures in Engine state establishment, transition, execution, synchronization, or governance compliance.

| Failure Class | Meaning | Required Response |
|:---|:---|:---|
| Registration Failure | Engine cannot become discoverable because metadata, identity, ownership, contract, or discovery evidence is invalid. | Record failure, block initialization, route to validation and governance if unresolved. |
| Validation Failure | Lifecycle evidence does not satisfy required validation rules. | Block Ready, retry, resume, retirement, or archive as applicable. |
| Initialization Failure | Kernel cannot prepare Engine for readiness. | Move to Failed, classify cause, determine recovery eligibility. |
| Transition Failure | A valid transition was attempted but preconditions, synchronization, validation, or authority failed. | Move to Failed or Suspended depending on safety. |
| Dependency Failure | Required dependency, artifact, standard, Registry entry, graph relation, Runtime condition, or governance input is unavailable or invalid. | Move to Waiting, Suspended, Failed, or Retry Pending based on severity. |
| Execution Failure | Running Engine cannot complete a governed invocation. | Move to Failed or Retry Pending if recovery is allowed. |
| Governance Violation | Lifecycle action violates authority, ownership, scope, security, or approval rules. | Block continuation and escalate to Human Governance or Governance Engine. |
| Invalid Transition | Transition is not listed as valid or governance-gated in this RFC. | Reject transition, record EngineInvalidTransitionDetected, classify as failure and possible governance violation. |
| Synchronization Failure | Registry, Kernel, Validation, or Knowledge Graph evidence cannot be aligned with lifecycle state. | Suspend or fail transition until synchronization evidence is restored. |
| Audit Failure | Required trace or ownership evidence is missing. | Block certification observation and require remediation. |

#### Failure Containment

A lifecycle failure shall not be ignored or silently converted into success. Failure containment requires:

1. failure classification;
2. affected Engine identity and version;
3. source and target state evidence;
4. owner or responsible subsystem;
5. safety decision: Waiting, Suspended, Failed, Retry Pending, Deprecated, Retired, or Archived;
6. validation handoff;
7. governance escalation when authority, safety, or policy is unclear.

### Recovery Model

Recovery is the governed movement from a blocked, failed, waiting, or suspended state toward safe continuation, retry, deprecation, retirement, or archival.

#### Recovery Paths

| Starting State | Recovery Path | Conditions |
|:---|:---|:---|
| Failed | Retry Pending | Failure is recoverable, retry limits allow another attempt, and validation approves eligibility. |
| Failed | Suspended | Failure requires investigation, containment, governance review, or dependency repair. |
| Failed | Deprecated | Failure indicates a replacement or migration path is preferred. |
| Failed | Retired | Failure is unrecoverable or unsafe for future use. |
| Retry Pending | Invoked | Invocation can be safely retried from the governed request boundary. |
| Retry Pending | Initialized | Initialization must be repeated before readiness or invocation. |
| Retry Pending | Registered | Registration metadata must be corrected and revalidated. |
| Retry Pending | Running | Runtime can safely resume a recoverable execution point and governance permits continuation. |
| Waiting | Resumed | Wait condition resolves and resume checks pass. |
| Suspended | Resumed | Suspension reason is resolved and resume is authorized. |
| Deprecated | Ready | Governance grants a limited exception. |
| Retired | Declared | Governance approves a new declaration path. |

#### Recovery Rules

1. Recovery shall never erase failure evidence.
2. Recovery shall preserve Engine identity and version traceability.
3. Recovery from Failed to Ready is invalid without Retry Pending, revalidation, reinitialization, or governed exception path as appropriate.
4. Recovery shall be validated before continuation.
5. Recovery shall synchronize Registry evidence before discoverability changes.
6. Recovery shall record Knowledge Graph-compatible evidence when lifecycle artifacts are produced.
7. Recovery that changes ownership, authority, version compatibility, or certification relevance requires governance review.

---

## Risks

### Risk-1: Subsystem Lifecycle Bypass

Individual subsystems (Runtime, Workflow, Registry, platform adapters) may attempt to define their own lifecycle semantics or bypass the canonical Lifecycle through convenience shortcuts. This risk is mitigated by the explicit prohibition rules, governance-gated transition requirements, and the EngineInvalidTransitionDetected event that escalates bypass attempts. Residual risk exists in adapter layers where platform constraints may create pressure to weaken lifecycle gates.

### Risk-2: State Inference from Non-Governed Sources

Actors (agents, tools, humans) may infer Engine lifecycle state from conversational context, tool preference, file presence, or undocumented runtime convention rather than from governed evidence. This risk is addressed by the security constraint that prohibits state inference from non-governed sources, but enforcement depends on Kernel and Registry discipline in rejecting unattributed state assumptions.

### Risk-3: Transition Matrix Completeness

The 16×16 transition matrix covers all current canonical states, but future state additions or category changes could create gaps or invalid assumptions in downstream consumers. The matrix is designed to be extended through approved amendments, but each extension requires coordinated updates to the Kernel, Registry, Validation, and all observing subsystems.

### Risk-4: Recovery Path Complexity

With twelve recovery paths spanning multiple source and target states, the recovery model is complex enough that incorrect recovery routing could leave Engines in ambiguous or unsafe states. This risk is mitigated by recovery validation requirements and governance escalation rules, but operational errors in recovery path selection remain possible.

### Risk-5: Multi-Engine Lifecycle Coordination

Workflow scenarios involving multiple Engines participating in a single workflow may create pressure to define aggregate lifecycle states or cross-Engine lifecycle dependencies that are not part of the individual Engine lifecycle model. This RFC explicitly does not define aggregate states, and any such abstraction must go through a separate governance process to avoid redefining individual Engine lifecycle semantics.

### Risk-6: RC2 Migration Alignment

Existing RC2 operational procedures may not align cleanly with the v3 Engine Lifecycle states and transition expectations. Until v3 operational documents are approved, there is a risk of inconsistency between RC2 practice and v3 lifecycle governance. This is tracked as an open question and requires a dedicated migration RFC or governance decision.

---

## Open Questions

1. Which lifecycle events require persistent records in the Knowledge Graph versus transient Runtime telemetry?
2. Which transitions require formal review in addition to validation?
3. What future standard should define lifecycle event artifact formats without turning this RFC into an implementation schema?
4. How should lifecycle state be represented in certification evidence packages across multiple Engines participating in one workflow?
5. What governance process should approve temporary Deprecated → Ready exceptions?
6. How should multi-agent or swarm execution reflect multiple Engine lifecycles without creating aggregate states that redefine individual Engine lifecycle semantics?
7. What migration path should align RC2 operational procedures with the v3 Engine Lifecycle once v3 operational documents are approved?

---

## Completion Criteria

| Requirement | Status |
|:---|:---|
| Purpose defined | Complete |
| Scope defined | Complete |
| Lifecycle position defined | Complete |
| Lifecycle architecture defined | Complete |
| Canonical lifecycle states defined | Complete |
| Transition rules defined | Complete |
| Valid transitions defined | Complete |
| Invalid transitions defined | Complete |
| Transition matrix provided | Complete |
| Lifecycle diagram provided | Complete |
| Lifecycle ownership clarified | Complete |
| Lifecycle invariants defined | Complete |
| Lifecycle events defined | Complete |
| Validation rules defined | Complete |
| Failure model defined | Complete |
| Recovery model defined | Complete |
| Governance rules defined | Complete |
| Security constraints defined | Complete |
| Relationships explained | Complete |
| Prohibitions stated | Complete |
| Open questions captured | Complete |
| Code implementation avoided | Complete |
| ProjectStatus update avoided | Complete |
| A.4, A.4.1, A.4.2, A.4.3, STD-000, STD-001, and STD-002 modifications avoided | Complete |

---

## Version History

| Version | Date | Author | Description |
|:---|:---|:---|:---|
| 0.1.0-draft | 2026-07-07 | Framework Architecture Team | Initial draft — complete Engine Lifecycle RFC with 15 states, 41 valid transitions, 18 invalid transitions, 16×16 transition matrix, lifecycle diagram, ownership model, invariants, events, validation rules, failure model, recovery model, governance rules, security constraints, and relationships. |
| 0.1.1-enterprise | 2026-07-07 | Framework Architecture Team | Enterprise refactoring — STD-010 full metadata compliance, executive summary, stakeholder impact matrix, change log, glossary, cross-reference index, consistent hierarchy, `---` separators, blockquote principles, and format normalization. |
| 0.2.0-draft | 2026-07-10 | Framework Architecture Team | Family normalization — aligned metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations to STD-010, STD-003, TPL-000, TPL-001, and Runtime README navigation model. |
| 0.3.0-draft | 2026-07-11 | Framework Architecture Team | TPL-001 compliance refactoring — editorial restructuring into TPL-001 20 mandatory output sections. No content or authority changes. Added: Design Decisions (6 DDs), Ownership, Responsibilities, Non Responsibilities, Risks (6 risks), Version History. Consolidated architecture sections, extracted Normative Authority/References/Dependencies as standalone sections. Removed Completion Report. Version bumped, Traceability ID standardized to `AI-DOS.V3.A.004.4`. |

---

## Appendix A — Cross-Reference Index

### A.1 Upstream References

| Reference | Document | Relationship |
|:---|:---|:---|
| A.1 Constitution | `docs/AI/Architecture/A.1-Constitution.md` | Establishes governance authority and normative hierarchy |
| M.0 Framework Meta Model | `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Defines artifact identity and meta-model semantics |
| M.1 Artifact Meta Model | `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Defines artifact lifecycle and classification |
| STD-000 Framework Standards | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Establishes framework-wide standards governance |
| STD-001 Knowledge Graph Standard | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` | Governs Knowledge Graph lifecycle evidence recording |
| STD-002 Discovery Standard | `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` | Governs Engine discoverability and discovery mechanisms |
| STD-010 Document Metadata Standard | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governs this document's metadata and structure |
| A.3 Runtime Architecture | AI-DOS-A-003 | Defines the runtime hosting environment that consumes lifecycle state |
| A.4 Engine Architecture | AI-DOS-A-004 | Parent architecture specification for the A.4 engine family |
| `AGENTS.md` | Project root | Establishes agent governance and behavioral constraints |

### A.2 Peer References

| Reference | Document | Relationship |
|:---|:---|:---|
| A.4.1 Engine Kernel | AI-DOS-A-004.1 | Primary consumer of this RFC; coordinates lifecycle transitions |
| A.4.2 Engine Contract | AI-DOS-A-004.2 | Declares contract metadata required for lifecycle participation |
| A.4.3 Engine Registry | AI-DOS-A-004.3 | Reflects Kernel-observed lifecycle state for discoverability |
| A.4.5 Engine Communication | AI-DOS-A-004.5 | Defines communication mechanisms that operate within lifecycle states |
| A.4.6 Engine State | AI-DOS-A-004.6 | Defines internal state observability that maps to canonical lifecycle states |

---

## Appendix B — Glossary

| Term | Definition |
|:---|:---|
| Canonical State | One of the fifteen governed lifecycle states defined in this RFC that everyAI-DOS Engine must use. |
| Engine Kernel | The framework subsystem responsible for coordinating lifecycle transitions, enforcing preconditions, and routing lifecycle events. |
| Engine Lifecycle | The governed architectural model defining canonical states, transitions, invariants, events, validation, failure, and recovery for allAI-DOS Engines. |
| Engine Registry | The framework subsystem that records discoverability metadata and reflects Kernel-observed lifecycle state. |
| Failure Containment | The process of classifying, recording, and routing a lifecycle failure to a safe state without ignoring or silently converting it into success. |
| Governance-Gated Transition | A transition marked `G` in the transition matrix that requires explicit approval or exception from an authorized governance authority. |
| Invalid Transition | A transition not listed as valid or governance-gated in this RFC, representing a lifecycle violation. |
| Lifecycle Event | An architectural event name emitted or recorded around state transitions, without prescribed implementation schema or transport. |
| Recovery Path | A governed movement from a blocked, failed, waiting, or suspended state toward safe continuation, retry, deprecation, retirement, or archival. |
| Retry Pending | A canonical lifecycle state in which a failed or interrupted transition/invocation is eligible for governed retry but has not yet resumed. |
| State Category | A grouping of related canonical states: Establishment, Invocation, Failure and Recovery, or Lifecycle Exit. |
| Transition Matrix | The 16×16 table mapping every source state to every target state with valid, governance-gated, invalid, or not-applicable indicators. |
| Transition Validation | The verification process confirming that a proposed state transition is permitted, evidenced, authorized, and compatible. |
| Readiness Validation | The specific validation required before an Engine may enter the Ready state. |

---

## Appendix C — Stakeholder Impact Matrix

| Stakeholder | Role | Impact | Interaction Mode |
|:---|:---|:---|:---|
| Human Governance | Governance authority over lifecycle policy, exceptions, and retirement decisions | High — approves governance-gated transitions and resolves escalated authority questions | Policy approval and exception governance |
| Engine Kernel | Primary consumer and coordinator of lifecycle transitions | High — implements transition coordination, precondition enforcement, and event routing per this RFC | Direct consumption of lifecycle model |
| Engine Registry | Reflects discoverable lifecycle metadata synchronized with Kernel-observed state | High — must accurately represent lifecycle state for all downstream consumers | Synchronized state reflection |
| Runtime | Hosts execution environments for Engines across all invocation states | Medium — consumes lifecycle state for execution hosting decisions | State consumption |
| Validation | Verifies transition evidence, readiness, recovery eligibility, and lifecycle compliance | High — validates every transition requiring evidence before state advancement | Evidence verification |
| Certification | Observes completed lifecycle evidence for certification handoff readiness | Medium — depends on lifecycle evidence integrity for certification decisions | Evidence observation |
| Knowledge Graph | Records lifecycle-compatible artifacts, relationships, and transition evidence | Medium — ingests lifecycle events and evidence per graph standards | Evidence recording |
| Workflow | Requests lifecycle movement as part of governed procedures | Low — requests transitions through Kernel coordination but does not own lifecycle | Governed requests |
| Agents | Consume lifecycle state information for decision-making | Low — read lifecycle state through Runtime and Kernel; may not directly transition Engines | Read-only consumption |
| Platform Adapters | Translate lifecycle-compatible behavior into platform-specific context | Low — adapt lifecycle evidence without redefining semantics | Translation under adapter governance |
| Review | Assesses readiness and evidence independently | Medium — evaluates lifecycle evidence quality for review decisions | Independent assessment |

---

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

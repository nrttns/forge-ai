# A.4 — AI-DOS Engine Platform Architecture RFC

> Shared Engine execution contracts · Runtime-hosted · Target-independent · Provider-neutral

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004` |
| Title | A.4 — AI-DOS Engine Platform Architecture RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Architecture RFC |
| Document Type | Engine Platform Architecture RFC |
| Artifact Family | Architecture Artifact |
| Owner | Engine Platform Architecture |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-15 |
| Scope | Shared Engine Platform contracts, responsibilities, boundaries, lifecycle coordination, discovery, invocation, state separation, communication, and capability declaration under A.3 Runtime Architecture. |
| Out of Scope | Runtime redefinition, Engine Specialization business logic, Target Project planning or state, provider implementation, certification verdicts, release distribution, and implementation code. |
| Normative Authority | Human Governance; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Dependencies | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; M.0; M.1; applicable standards. |
| Consumes | Runtime Execution Contract, bounded Execution Context, provider capability declarations, constitutional invariants, artifact semantics, terminology, and metadata rules. |
| Produces | Engine Platform contract, A.4.1–A.4.7 foundation boundaries, and conformance requirements for A.5.x Engine Specializations. |
| Downstream Conforming Specifications | A.4.1 Engine Kernel; A.4.2 Engine Contract; A.4.3 Engine Registry; A.4.4 Engine Lifecycle; A.4.5 Engine Communication; A.4.6 Engine State; A.4.7 Engine Capability; A.5.x Engine Specializations; Agent Architecture; Operational Core implementations. |
| Certification Status | Not certified |

---

## 1. Decision

AI-DOS shall provide one shared Engine Platform inside the A.3 Runtime execution boundary.

The Engine Platform defines how governed Engine capabilities are declared, discovered, invoked, coordinated, observed, and terminated. It does not define Target Project truth, provider behavior, workflow intent, specialization business logic, or governance verdicts.

The durable execution relationship is:

```text
A.1 Constitution
    ↓
A.2 Product / Target Boundary
    ↓
A.3 Runtime Execution Substrate
    ↓
A.4 Engine Platform
    ↓
A.4.1–A.4.7 Engine Foundations
    ↓
A.5.x Engine Specializations
    ↓
Execution Provider invocation and Target-scoped outputs
```

No Engine, provider, tool, agent, workflow, or specialization may create a parallel execution authority.

---

## 2. Purpose

The Engine Platform exists to make governed capabilities portable across Execution Providers and Target Projects.

It shall:

- establish one shared Engine invocation model;
- separate platform mechanics from Engine specialization logic;
- preserve Runtime safety and lifecycle boundaries;
- provide deterministic discovery and capability resolution;
- preserve product truth, Target truth, runtime state, and Engine state separation;
- produce traceable execution evidence;
- support safe failure, cancellation, and teardown;
- prevent tools or providers from becoming architectural authority.

---

## 3. Scope

A.4 owns the shared platform-level model for:

1. Engine Kernel coordination;
2. Engine Contract requirements;
3. Engine Registry responsibilities;
4. Engine Lifecycle coordination;
5. Engine Communication boundaries;
6. Engine State separation;
7. Engine Capability declaration and resolution;
8. Engine invocation and result envelopes;
9. platform-level failure and safe-stop behavior;
10. conformance rules for Engine Specializations.

A.4 does not enumerate a permanently closed set of business Engines. Engine Specializations are defined downstream by A.5.x RFCs and may evolve without redefining the shared platform contract.

---

## 4. Upstream Authority and Dependency Direction

A.4 consumes, but does not redefine:

- A.1 constitutional authority and invariants;
- A.2 Product / Target / Execution Provider boundaries;
- A.3 Runtime lifecycle, Execution Context, safety envelope, evidence boundary, and provider-neutral execution contract;
- Meta Model artifact, authority, ownership, lifecycle, state, and evidence semantics;
- applicable terminology, metadata, and standards rules.

The dependency direction is one-way:

```text
A.1 → A.2 → A.3 → A.4 → A.4.x → A.5.x
```

A.4 must not become an upstream authority for A.1, A.2, or A.3.

---

## 5. Engine Platform Boundary

The Engine Platform is a Runtime-hosted product capability. It receives a bounded Runtime Execution Context and exposes governed Engine capability invocation.

### 5.1 Inputs

The platform may consume:

- Runtime Execution Context identifier;
- authorized Execution Contract;
- resolved Target Context references;
- AI-DOS Authority Context references;
- provider capability declaration;
- requested Engine capability;
- bounded input artifacts;
- applicable workflow or command reference;
- cancellation and timeout policy.

### 5.2 Outputs

The platform may produce:

- Engine resolution result;
- invocation record;
- Engine output artifacts;
- Engine state transitions;
- communication records;
- telemetry and evidence;
- validation or review handoff material;
- failure, cancellation, or safe-stop record.

### 5.3 Prohibitions

The Engine Platform must not:

- select or invent Target Project objectives;
- own ProjectStatus, DevelopmentPhases, Roadmap, source truth, or live Target state;
- override Runtime authorization or safety limits;
- define provider-specific behavior as product architecture;
- promote artifacts or issue certification verdicts;
- treat Engine state as Target Project state;
- allow direct provider-to-Engine bypass of Runtime and Engine Platform contracts;
- silently substitute Forge AI context for an external Target.

---

## 6. Platform Components

### 6.1 Engine Kernel — A.4.1

Coordinates Engine loading, discovery, dependency checks, invocation routing, cancellation, failure containment, and teardown inside the Runtime boundary.

### 6.2 Engine Contract — A.4.2

Defines the mandatory identity, inputs, outputs, preconditions, postconditions, errors, evidence, capability, and lifecycle declarations for an Engine.

### 6.3 Engine Registry — A.4.3

Provides governed discovery metadata and resolution. Registry membership does not create authority, approval, certification, or execution permission.

### 6.4 Engine Lifecycle — A.4.4

Defines platform-level Engine lifecycle states and transitions. These states remain distinct from Runtime lifecycle and Target Project operational state.

### 6.5 Engine Communication — A.4.5

Defines bounded message and event semantics between platform components and Engines. Communication carries data and evidence; it does not create authority.

### 6.6 Engine State — A.4.6

Defines temporary and persistent Engine-owned operational state boundaries. Engine state must be scoped, traceable, replaceable, and never treated as product or Target truth.

### 6.7 Engine Capability — A.4.7

Defines capability identity, declaration, compatibility, constraints, and resolution. Capability availability does not imply authorization to invoke it.

---

## 7. Engine Contract Minimum

Every Engine exposed through the platform must declare:

- stable Engine identity and version;
- Engine family and capability identifiers;
- owner and lifecycle status;
- accepted input artifact types;
- produced output artifact types;
- required Execution Context fields;
- preconditions and postconditions;
- authority and ownership constraints;
- state usage and persistence rules;
- communication requirements;
- failure and cancellation semantics;
- evidence and traceability outputs;
- prohibited responsibilities;
- compatibility requirements.

An incomplete or conflicting contract is not invocable.

---

## 8. Invocation Model

```text
Runtime-authorized capability request
    ↓
Engine Kernel receives bounded request
    ↓
Engine Registry resolves eligible Engine
    ↓
Engine Contract and Capability checks
    ↓
Lifecycle transition to prepared / active
    ↓
Engine executes inside Runtime safety envelope
    ↓
Outputs, state transitions, and evidence captured
    ↓
Lifecycle transition to completed / failed / cancelled
    ↓
Runtime receives result or safe-stop record
```

Invocation requires both capability compatibility and Runtime authorization. Discovery alone is insufficient.

---

## 9. Ownership Model

| Concern | Owner | Engine Platform Role |
|:---|:---|:---|
| Constitutional authority | Human Governance / A.1 | Conform |
| Product / Target boundary | A.2 | Preserve |
| Runtime execution authorization and lifecycle | A.3 Runtime | Consume and obey |
| Shared Engine mechanics | A.4 Platform | Own |
| Kernel, contract, registry, lifecycle, communication, state, capability foundations | A.4.1–A.4.7 | Refine A.4 |
| Engine specialization behavior | A.5.x owner | Implement through A.4 contracts |
| Target Project truth and operational state | Target Project | Reference only through Resolved Target Context |
| Provider implementation | Execution Provider | Realize contracts without redefining them |
| Validation, review, certification verdicts | Applicable downstream authority | Prepare and route evidence only |

---

## 10. State Separation

The following state domains must remain distinct:

```text
AI-DOS product truth
Distribution / release truth
Target Project truth and operational state
Runtime execution state
Engine Platform state
Engine Specialization state
Provider-local technical state
Evidence and task records
```

A transition in one domain does not automatically mutate another domain.

Engine completion does not update Target Project state unless the Target’s authorized process accepts and applies the result.

---

## 11. Execution Provider Boundary

Execution Providers may host or invoke Engine Platform implementations, but must conform to A.3 and A.4.

Provider specializations may include:

- AI agent hosts;
- local CLI processes;
- local MCP servers;
- IDE integrations;
- hosted execution services;
- governed automation systems.

A provider must not:

- bypass Engine Contracts;
- invent capabilities or authority;
- expose unregistered Engines as governed product capabilities;
- retain Target data beyond authorized boundaries;
- reinterpret provider-local behavior as canonical Engine semantics.

---

## 12. Failure and Safe Stop

The Engine Platform must stop or reject execution when:

- Runtime authorization is absent, expired, or revoked;
- the requested capability cannot be resolved deterministically;
- Engine Contract requirements are incomplete;
- input artifacts violate declared constraints;
- required Target or authority context is unresolved;
- provider capability is insufficient or incompatible;
- lifecycle, communication, or state invariants cannot be preserved;
- execution would cross protected, frozen, or unauthorized Target boundaries;
- evidence capture or traceability is unavailable where required;
- cancellation, timeout, or safety policy requires termination.

Failure must produce an explicit record. Silent fallback is prohibited.

---

## 13. Engine Platform Invariants

1. One governed Engine Platform contract exists for AI-DOS.
2. Runtime hosts and authorizes execution; the Engine Platform does not self-authorize.
3. Engine foundations do not own Engine specialization business logic.
4. Engine Specializations do not redefine platform foundations.
5. Registry presence is not authority or permission.
6. Capability availability is not authorization.
7. Engine state is not Target Project state.
8. Communication is not authority.
9. Execution Providers are replaceable implementations.
10. AI-generated output cannot self-promote or self-certify.
11. External Target execution never falls back to Forge AI paths or state.
12. All invocations and terminal outcomes are traceable.

---

## 14. Downstream Conformance

A.4.1–A.4.7 must:

- identify A.4 as their direct parent RFC;
- consume A.3 only through the platform boundary defined here;
- preserve Product / Target / Runtime / Engine state separation;
- avoid Target-specific paths and planning assumptions;
- use Execution Provider rather than a permanent agent-only role;
- define one foundation concern without duplicating sibling ownership;
- specify failure and evidence behavior;
- remain implementation-neutral.

A.5.x Engine Specializations must:

- declare the A.4 Engine Contract they implement;
- use A.4 capability and lifecycle semantics;
- avoid owning platform mechanics;
- avoid owning Target truth, provider authority, or certification authority;
- expose specialization-specific inputs, outputs, prohibitions, and evidence.

---

## 15. Relationship to Distribution

A.6 Distribution Foundation may package and deliver Engine Platform artifacts and implementations. Distribution does not redefine A.4 semantics.

A distributed Engine Platform must preserve:

- artifact identity and version;
- integrity and provenance;
- contract compatibility;
- provider and Target independence;
- update and rollback safety;
- one canonical product definition.

---

## 16. Validation Requirements

A.4 is aligned when validation confirms:

- A.1 → A.2 → A.3 → A.4 dependency direction;
- no active RC2 harvest or transition authority remains;
- no fixed business-Engine list is owned by A.4;
- A.4.1–A.4.7 have non-overlapping foundation ownership;
- A.5.x remains downstream specialization;
- Target planning and operational state remain Target-owned;
- Runtime and Engine state remain separate;
- provider implementations remain replaceable;
- no Forge AI fallback path exists for external Targets;
- no Engine can self-authorize, self-promote, or self-certify.

---

## 17. Promotion Gate

Promotion requires:

- Framework Governance review;
- A.1, A.2, and A.3 conformance review;
- A.4.1–A.4.7 family consistency review;
- A.5.x compatibility review;
- metadata, terminology, ownership, dependency, and traceability validation;
- explicit Human Governance approval.

Until promoted, this RFC remains a governed draft.
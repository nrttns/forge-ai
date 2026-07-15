# AI-DOS-A-004.7 — Engine Capability RFC

| | |
|:---|:---|
| **Framework** | AI-DOS v3 |
| **Document Class** | Architecture RFC |
| **Domain** | Engine Capability Architecture |
| **Confidentiality** | Internal — Governed |

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-4-7` |
| Title | A.4.7 — Engine Capability RFC |
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
| Traceability ID | `AI-DOS.V3.A.004.7` |
| Consumes | Runtime Architecture, Engine Platform Architecture, constitutional principles, meta-model semantics, artifact metadata rules, canonical terminology, RFC template rules, and Engine Foundation normalization instructions. |
| Produces | Engine Capability foundation RFC, foundation boundary definitions, validation expectations, and downstream inputs for Engine Specialization RFCs. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## Executive Summary

This RFC establishes the canonical architectural model for Engine Capability within the AI-DOS v3 framework. Engine Capability represents the governed functional capacity that an Engine may offer, describing what an Engine can do independently of how it does it, when it may transition, or what its current observable condition is. The model is contract-bound, registry-backed, and kernel-resolved, ensuring that capability claims are always authorized, published, and validated before consumption.

The RFC defines eleven canonical capability categories — Context Processing, Knowledge Processing, Planning, Decision Making, Execution, Validation, Review, Certification, Memory, Governance, and Workflow — along with supplementary categories for Registry, Artifact Production, Graph Traversal, and Capability Discovery. It establishes a comprehensive declaration model with twelve required elements, a permission-aware discovery process, five composition patterns, and ten compatibility dimensions governing safe capability use across Engine-to-Engine, capability-to-contract, lifecycle, state, registry, standard, artifact, workflow, and security boundaries.

Additionally, this RFC defines ownership responsibilities across fifteen participants, sixteen validation checks, six validation outcomes, ten failure modes with recovery expectations, governance rules with change governance triggers, and security constraints governing capability discovery and evidence handling. All content is documentation-only architecture; no implementation, APIs, runtime behavior, or programming interfaces are defined. This RFC is a draft, non-canonical specification pending Framework Governance review and promotion.

---

## Purpose

The Engine Capability model defines what an AI-DOS Engine is architecturally capable of providing.

Capability represents Engine functionality. It describes the governed functional capacity an Engine may offer to the Engine Kernel, Engine Registry, Engine Discovery, Planning, Decision, Execution, Validation, Review, Certification, Agents, and Platform Adapters.

Capability is independent of Runtime implementation, Lifecycle, and Engine State.

```text
Capability defines what an Engine can do.
Lifecycle governs when an Engine may transition.
State represents the Engine's current observable condition.
Runtime provides the execution environment that consumes Engine architecture.
```

The purpose of this RFC is to establish the canonical architectural model for Engine Capability without defining APIs, implementation classes, programming interfaces, runtime behavior, persistence models, execution mechanisms, or platform-specific behavior.

This RFC is documentation-only architecture work. It does not implement code, update `docs/ProjectStatus.md`, certify this RFC, promote this RFC to canonical authority, or modify A.4, A.4.1, A.4.2, A.4.3, A.4.4, A.4.5, A.4.6, STD-000, STD-001, or STD-002.

---

## Scope

This RFC defines the architectural model for:

1. Engine Capability position;
2. capability architecture;
3. capability model;
4. capability ownership;
5. capability declaration;
6. capability discovery;
7. capability compatibility;
8. capability validation;
9. capability composition;
10. capability dependencies;
11. capability events;
12. capability governance;
13. capability security constraints;
14. capability failure and recovery expectations;
15. relationships with Runtime, Engine Kernel, Engine Contract, Engine Registry, Engine Lifecycle, Engine Communication, Engine State, Knowledge Graph, Workflow, Validation, Certification, Agents, and Platform Adapters.

---

## Out of Scope

This RFC does not:

- define APIs;
- define implementation classes;
- define programming interfaces;
- define runtime behavior;
- define SDKs, functions, services, endpoints, packages, protocols, queues, transports, schemas, or databases;
- define persistence, serialization, storage, cache, or file format mechanisms;
- execute Engines;
- replace the Engine Kernel;
- replace the Engine Registry;
- replace Engine Lifecycle;
- replace Engine Communication;
- replace Engine State;
- redefine Standards;
- redefine Knowledge Graph semantics;
- redefine Engine Contracts;
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

### Capability Position

Engine Capability sits after Engine State in the A.4 Engine Architecture sequence as the governed model of Engine functionality.

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
A.4.5 Engine Communication
    ↓
A.4.6 Engine State
    ↓
A.4.7 Engine Capability
```

Engine Capability is not the Runtime. It does not execute work, schedule work, authorize lifecycle transitions, publish registry entries by itself, or represent current Engine condition.

Engine Capability is the architectural declaration of functionality that other AI-DOS systems may resolve, validate, compose, constrain, or reject through governed channels.

#### Conceptual Placement

```text
Engine Contract
    ↓
Capability Declaration
    ↓
Kernel Resolution
    ↓
Registry Publication
    ↓
Discovery and Compatibility Evaluation
    ↓
Planning / Decision / Execution / Validation / Review / Certification Consumption
    ↓
Traceable Evidence
```

This placement defines responsibility flow only. It does not prescribe deployment topology, process boundaries, APIs, transport, storage, runtime representation, or implementation mechanism.

### Capability Architecture

Engine Capability is an architectural functional description layer over Engine contracts and registry publication.

The model has eight architectural responsibilities:

| Responsibility | Meaning |
|:---|:---|
| Declaration | Describe what functionality an Engine claims to provide. |
| Constraint | Describe the limits, obligations, dependencies, and compatibility expectations of a capability. |
| Resolution | Allow the Kernel to determine whether a capability may be used in a governed context. |
| Publication | Allow the Registry to publish validated capability information for authorized discovery. |
| Discovery | Allow authorized consumers to find capabilities without bypassing governance. |
| Composition | Allow multiple capabilities to be considered together without collapsing ownership boundaries. |
| Validation | Allow Validation to verify declaration integrity, compatibility, dependency satisfaction, and traceability. |
| Evidence | Preserve traceable evidence that a capability claim is declared, compatible, governed, and auditable. |

#### Capability Versus Implementation

Capability defines what an Engine can do. It does not define how the Engine does it.

| Concern | Capability | Implementation |
|:---|:---|:---|
| Primary question | What functionality is available? | How is functionality performed? |
| Authority | Engine architecture and contract declaration | Platform-specific or runtime-specific implementation under governance |
| Scope | Functional capacity, constraints, dependencies, compatibility, validation expectations | Code, process, host, service, library, automation, tool, or adapter behavior |
| Prohibition | Must not encode runtime behavior | Must not redefine architecture |

#### Capability Versus Lifecycle

Capability is independent of Lifecycle.

An Engine may declare a capability even when lifecycle state prevents the capability from being used. Lifecycle determines whether an Engine may transition or participate; Capability describes what the Engine is architecturally able to provide when all governing conditions are satisfied.

#### Capability Versus State

Capability is independent of Engine State.

State describes current observable condition. Capability describes functional capacity. A `Ready` Engine may have capabilities that are eligible for resolution. A `Degraded` Engine may retain declared capabilities while consumers are required to apply additional compatibility, validation, or governance constraints.

#### Capability Versus Contract

Engine Contracts declare obligations and boundaries. Capability declarations are contract-bound functional claims.

A capability must not exceed the Engine Contract that authorizes it. If a capability claim conflicts with the Engine Contract, the contract wins and the capability is invalid until corrected through governance.

### Capability Model

The canonical Engine Capability model defines conceptual capability categories. Categories organize functionality for discovery, compatibility evaluation, planning, validation, and governance. They do not define implementation classes or runtime modules.

| Capability Category | Meaning | Typical Consumers |
|:---|:---|:---|
| Context Processing | Ability to assemble, filter, normalize, or package task-relevant context. | Context systems, Planning, Agents, Adapters |
| Knowledge Processing | Ability to traverse, retrieve, relate, or evaluate governed knowledge artifacts. | Knowledge Graph, Planning, Validation, Review |
| Planning | Ability to resolve approved scope, task structure, dependencies, and sequencing. | Workflow, Decision, Agents |
| Decision Making | Ability to apply governed decision rules and select permissible next actions. | Kernel, Workflow, Execution, Validation |
| Execution | Ability to dispatch or coordinate approved work. | Runtime, Agents, Platform Adapters |
| Validation | Ability to evaluate artifacts, gates, evidence, compatibility, and conformance. | Review, Certification, Governance |
| Review | Ability to perform independent readiness assessment. | Certification, Governance, Human Review |
| Certification | Ability to prepare or route certification evidence and decisions. | Governance, Project State, Registry |
| Memory | Ability to propose, retrieve, or validate non-authoritative reusable memory. | Context, Planning, Knowledge |
| Governance | Ability to apply authority, ownership, escalation, approval, and prohibition rules. | Kernel, Registry, Workflow, Agents |
| Workflow | Ability to select, coordinate, or validate lifecycle workflow movement. | Planning, Decision, Execution |
| Registry | Ability to register, resolve, publish, or verify governed entries. | Discovery, Kernel, Validation |
| Artifact Production | Ability to produce documentation, reports, records, or evidence artifacts. | Validation, Review, Certification, Knowledge Graph |
| Graph Traversal | Ability to navigate governed artifact and relationship graphs. | Knowledge, Context, Validation |
| Capability Discovery | Ability to locate, filter, compare, or resolve capability declarations. | Registry, Kernel, Planning, Agents, Adapters |

#### Capability Identity

Every capability shall have a stable identity sufficient to support traceability, version comparison, registry publication, validation, and governance review.

Capability identity shall be distinct from Engine identity. Multiple Engines may provide equivalent or compatible capabilities, but no Engine may claim another Engine's capability identity without authorized registry and governance alignment.

#### Capability Version

Every capability shall be versioned.

Versioning exists to support compatibility evaluation, deprecation, migration, discovery, and certification evidence. Versioning does not by itself authorize runtime use. Runtime use still requires Kernel resolution, Registry alignment, lifecycle eligibility, state suitability, dependency satisfaction, and validation expectations.

#### Capability Traceability

Every capability shall be traceable to:

- its declaring Engine;
- its governing Engine Contract;
- its Registry publication when published;
- its dependency declarations;
- its compatibility claims;
- its validation requirements;
- its lifecycle and state constraints when applicable;
- evidence of approval, deprecation, retirement, or rejection.

### Capability Declaration

Every Engine shall declare capabilities before those capabilities may be discovered, resolved, composed, or consumed.

A capability declaration shall include, at minimum:

| Declaration Element | Meaning |
|:---|:---|
| Capability Identity | Stable identifier for the capability claim. |
| Capability Name | Human-readable capability name. |
| Capability Version | Version of the capability declaration. |
| Capability Description | Architectural summary of what the capability provides. |
| Capability Category | Conceptual category from the governed capability model. |
| Capability Dependencies | Required capabilities, contracts, standards, artifacts, registries, or governance prerequisites. |
| Capability Constraints | Limits, prohibitions, required conditions, and usage boundaries. |
| Capability Consumers | Authorized or expected consumers of the capability. |
| Capability Producers | Engine or Engine family that declares or produces capability output. |
| Capability Compatibility | Declared compatibility with contracts, lifecycle expectations, state constraints, registries, artifacts, workflows, and other capabilities. |
| Capability Lifecycle | Declaration status such as draft, active, deprecated, retired, or rejected. |
| Capability Validation Requirements | Required validation evidence and checks before use, publication, composition, or certification. |

#### Declaration Rules

- Every declared capability shall be contract-bound.
- Every declared capability shall be versioned.
- Every declared capability shall identify its owning Engine.
- Every declared capability shall identify dependencies and constraints.
- Every declared capability shall state intended consumers and producers.
- Every declared capability shall define validation requirements.
- Every declared capability shall preserve traceability to authority and evidence.
- No capability declaration shall define implementation classes, APIs, programming interfaces, or runtime behavior.

#### Declaration Status

Capability declarations may have conceptual statuses:

| Status | Meaning |
|:---|:---|
| Draft | Proposed capability not yet approved for registry-backed use. |
| Active | Capability is approved for governed discovery and resolution. |
| Deprecated | Capability remains traceable but should not be selected for new work except under governed exception. |
| Retired | Capability is no longer eligible for active use. |
| Rejected | Capability claim failed governance, compatibility, or validation expectations. |

Declaration status does not replace Engine Lifecycle or Engine State. It describes the governance status of the capability declaration only.

### Capability Discovery

Capability Discovery is the governed process of finding and evaluating declared Engine capabilities.

Capabilities shall be:

- discoverable;
- versioned;
- searchable;
- traceable;
- registry-backed;
- permission-aware;
- validation-aware;
- governance-constrained.

#### Discovery Responsibilities

| Participant | Discovery Responsibility |
|:---|:---|
| Engine Registry | Publishes validated capability declarations for authorized discovery. |
| Engine Kernel | Resolves whether discovered capabilities may be used in a governed context. |
| Engine Contract | Defines obligations and boundaries that discovered capabilities must satisfy. |
| Planning | Consumes discovered capabilities to determine feasible task structures and dependencies. |
| Decision | Consumes discovered capabilities to select permissible next actions. |
| Execution | Consumes resolved capabilities only after Kernel and governance checks. |
| Validation | Verifies discovery integrity, compatibility, version alignment, and dependency satisfaction. |
| Agents | Consume discovery results without inventing or bypassing capability declarations. |
| Platform Adapters | Translate discovery results to platform-specific contexts without redefining capability semantics. |

#### Discovery Rules

- Discovery shall not bypass Registry publication.
- Discovery shall not bypass Kernel resolution.
- Discovery shall not imply invocation eligibility.
- Discovery shall preserve version and compatibility information.
- Discovery shall expose constraints and dependencies to authorized consumers.
- Discovery shall reject stale, untraceable, unversioned, or contract-inconsistent capability claims.

### Capability Composition

Capability Composition is the governed combination of two or more capabilities to satisfy a planning, decision, execution, validation, review, certification, agent, or adapter need.

Composition may occur only when compatibility, dependencies, lifecycle expectations, state constraints, registry publication, and governance rules are satisfied.

#### Composition Principles

- Capability composition shall not bypass Kernel governance.
- Capability composition shall preserve traceability.
- Capability composition shall preserve ownership boundaries.
- Capability composition shall not merge Engines into a new architectural authority.
- Capability composition shall not invent undocumented functionality.
- Capability composition shall not hide dependency failures.
- Capability composition shall remain compatible with Engine Contracts.

#### Composition Patterns

| Pattern | Meaning |
|:---|:---|
| Sequential Composition | One capability produces evidence or artifacts consumed by another capability. |
| Parallel Composition | Multiple capabilities contribute independently to a governed result. |
| Fallback Composition | A compatible alternative capability may be selected when a preferred capability is unavailable or invalid. |
| Constraint Composition | A governance, validation, lifecycle, or state constraint narrows how another capability may be used. |
| Evidence Composition | Multiple capability outputs are combined into a traceable evidence package. |

These patterns are conceptual only. They do not prescribe orchestration code, APIs, queues, process models, or runtime behavior.

### Capability Compatibility

Capability Compatibility determines whether a capability may be safely discovered, resolved, composed, or consumed in a governed context.

Compatibility shall be evaluated across the following dimensions:

| Compatibility Dimension | Required Evaluation |
|:---|:---|
| Engine-to-Engine | Whether Engines can participate together without ownership, contract, lifecycle, state, communication, or governance conflict. |
| Capability-to-Capability | Whether capabilities can compose without semantic mismatch, dependency failure, version conflict, or evidence gap. |
| Capability-to-Contract | Whether the capability is authorized by the Engine Contract and satisfies declared obligations. |
| Capability-to-Lifecycle | Whether lifecycle status allows the capability to be considered for use. |
| Capability-to-State | Whether current observable Engine State permits safe capability consumption. |
| Capability-to-Registry | Whether the capability is published, discoverable, current, and traceable through the Registry. |
| Capability-to-Standard | Whether the capability conforms to applicable standards without redefining them. |
| Capability-to-Artifact | Whether the capability can consume or produce compatible artifacts. |
| Capability-to-Workflow | Whether the capability is permitted in the selected workflow phase or handoff. |
| Capability-to-Security | Whether security constraints allow the capability to be exposed or consumed. |

#### Compatibility Rules

- A capability shall not be considered compatible merely because an implementation exists.
- A capability shall not be considered compatible when its contract is missing, stale, contradictory, or unauthoritative.
- A capability shall not be considered compatible when dependencies are unresolved.
- A capability shall not be considered compatible when its version conflicts with required consumers or producers.
- A capability shall not be considered compatible when lifecycle, state, registry, or governance conditions prohibit use.
- Compatibility findings shall be traceable and reviewable.

### Capability Events

Capability Events are conceptual architectural events used for traceability, validation, registry publication, and governance review. They do not prescribe event buses, APIs, queues, message formats, or runtime behavior.

| Event | Meaning |
|:---|:---|
| CapabilityDeclared | An Engine declares a capability under contract-bound authority. |
| CapabilityValidated | Validation confirms or rejects capability declaration integrity and compatibility. |
| CapabilityRegistered | Registry publishes a validated capability declaration for authorized discovery. |
| CapabilityDiscovered | An authorized consumer discovers a registry-backed capability. |
| CapabilityResolved | Kernel determines whether a capability may be used in a governed context. |
| CapabilityDeprecated | Governance marks a capability as discouraged for future use while preserving traceability. |
| CapabilityRetired | Governance removes a capability from active eligibility while preserving historical evidence. |

#### Event Rules

- Capability Events shall be traceable.
- Capability Events shall not replace Registry records.
- Capability Events shall not bypass Kernel resolution.
- Capability Events shall not redefine lifecycle transitions or state categories.
- Capability Events shall preserve evidence needed for validation, review, and certification.

### Governance Rules

> Capability governance preserves authority, ownership, compatibility, and traceability.

#### Governance Requirements

- Capability declarations shall be governed by Engine Contracts.
- Capability publication shall be Registry-backed.
- Capability resolution shall be Kernel-mediated.
- Capability discovery shall be permission-aware and traceable.
- Capability composition shall preserve ownership boundaries.
- Capability validation shall precede certification reliance.
- Capability deprecation and retirement shall be documented and traceable.
- Capability changes shall not silently alter architecture, standards, lifecycle, state, contracts, registry semantics, or Knowledge Graph rules.

#### Change Governance

Capability changes require governance review when they:

- add a new capability category;
- change capability identity rules;
- change compatibility rules;
- change validation requirements;
- alter dependency semantics;
- deprecate or retire active capabilities;
- affect Engine-to-Engine composition;
- affect security exposure;
- affect certification evidence.

### Security Constraints

Capability declarations and discovery can reveal functional capacity, dependencies, constraints, and potential system boundaries. They must therefore be governed as security-relevant architecture artifacts.

Security constraints include:

- capability discovery shall be permission-aware;
- capability declarations shall not expose sensitive implementation details;
- capability constraints shall identify security-relevant limits when applicable;
- capability consumers shall not infer unauthorized functionality from partial discovery results;
- capability compatibility shall include security and access constraints;
- deprecated or retired capabilities shall not remain exposed as active targets;
- Platform Adapters shall not broaden capability visibility beyond governed authorization;
- Agents shall not use undiscovered, unregistered, unvalidated, or unauthorized capabilities;
- capability evidence shall preserve auditability without leaking secrets, credentials, tokens, private endpoints, or platform-specific confidential details.

---

## Design Decisions

### DD-1: Capability as Functional Capacity, Separate from Implementation

Capability is defined as the governed functional capacity an Engine may offer, deliberately separated from how the Engine implements that functionality. This separation ensures that capability claims remain stable architectural artifacts that survive implementation changes, platform migrations, and runtime evolution. Merging capability with implementation would bind architectural planning and compatibility evaluation to transient runtime details, undermining discovery reliability and composition safety.

### DD-2: Fifteen Canonical Capability Categories

The model defines exactly fifteen capability categories (eleven primary plus four supplementary) rather than a flat unstructured list or a deeply hierarchical taxonomy. Fifteen categories provide sufficient organizational structure for discovery, compatibility evaluation, and governance review while remaining manageable for all consumers. The categories are conceptual and do not define implementation classes or runtime modules, allowing Engines to map their internal structures to canonical categories without redefining the model.

### DD-3: Twelve-Element Declaration Model

Every capability declaration requires twelve mandatory elements (identity, name, version, description, category, dependencies, constraints, consumers, producers, compatibility, lifecycle, validation requirements). This comprehensive declaration model ensures that capability claims carry sufficient information for registry publication, discovery evaluation, compatibility assessment, and governance review without requiring consumers to infer missing metadata or make unsafe assumptions.

### DD-4: Ten-Dimension Compatibility Evaluation

Compatibility is evaluated across ten dimensions (Engine-to-Engine, Capability-to-Capability, Capability-to-Contract, Capability-to-Lifecycle, Capability-to-State, Capability-to-Registry, Capability-to-Standard, Capability-to-Artifact, Capability-to-Workflow, Capability-to-Security) rather than a single binary compatible/incompatible check. This multi-dimensional approach ensures that capability safety is assessed holistically, preventing situations where a capability appears compatible on one dimension but creates governance, security, or lifecycle violations on another.

### DD-5: Five Composition Patterns

The model defines five conceptual composition patterns (Sequential, Parallel, Fallback, Constraint, Evidence) rather than a single composition mechanism. Different planning and execution scenarios require fundamentally different composition semantics — sequential handoffs, parallel contribution, fallback alternatives, constraint narrowing, and evidence aggregation each have distinct ownership, traceability, and governance requirements that a single pattern cannot express.

### DD-6: Contract-Bound Capability Authority

A capability must not exceed the Engine Contract that authorizes it. If a capability claim conflicts with the Engine Contract, the contract wins and the capability is invalid until corrected through governance. This design decision establishes a clear authority hierarchy — Contract over Capability — preventing Engines from expanding their architectural authority through capability overclaims that their contracts do not support.

---

## Ownership

| Participant | Ownership Role |
|:---|:---|
| Human Governance | May approve, reject, escalate, amend, deprecate, or retire capability governance policy. |
| Framework Architecture Team | Document owner and maintainer; ensures alignment with A.4 engine family. |
| Engine | Owns its capability declarations and must not claim unsupported functionality. |
| Engine Kernel | Resolves capabilities for governed use and rejects unsafe or incompatible capability requests. |
| Engine Contract | Bounds capability claims and defines obligations capabilities must satisfy. |
| Engine Registry | Publishes validated capability declarations and makes them discoverable to authorized consumers. |
| Engine Discovery | Finds registry-backed capabilities while preserving version, traceability, constraints, and compatibility context. |
| Planning | Consumes capabilities to determine feasible plans, task structures, and dependency needs. |
| Decision | Consumes capabilities to select permissible actions under governance. |
| Execution | Consumes resolved capabilities only; it does not redefine capability semantics. |
| Validation | Validates capability declaration, compatibility, dependency satisfaction, registry alignment, and traceability. |
| Review | Assesses whether capability use is readiness-appropriate and evidence-supported. |
| Certification | Consumes validated capability evidence for certification handoff when applicable. |
| Knowledge Graph | Stores capability-compatible artifacts and evidence only; it does not own live capability truth. |
| Agents | Consume capabilities through governed discovery and resolution; they must not invent capabilities. |
| Platform Adapters | Translate capability usage to platform-specific contexts without redefining AI-DOS capability semantics. |

---

## Responsibilities

| Participant | Responsibility |
|:---|:---|
| Human Governance | Approve, reject, escalate, amend, deprecate, or retire capability governance policy. |
| Engine | Own capability declarations; must not claim unsupported functionality. |
| Engine Kernel | Resolve capabilities for governed use; reject unsafe or incompatible capability requests. |
| Engine Contract | Bound capability claims; define obligations capabilities must satisfy. |
| Engine Registry | Publish validated capability declarations; make them discoverable to authorized consumers. |
| Engine Discovery | Find registry-backed capabilities while preserving version, traceability, constraints, and compatibility context. |
| Planning | Consume capabilities to determine feasible plans, task structures, and dependency needs. |
| Decision | Consume capabilities to select permissible actions under governance. |
| Execution | Consume resolved capabilities only; do not redefine capability semantics. |
| Validation | Validate capability declaration, compatibility, dependency satisfaction, registry alignment, and traceability. |
| Review | Assess whether capability use is readiness-appropriate and evidence-supported. |
| Certification | Consume validated capability evidence for certification handoff when applicable. |
| Knowledge Graph | Store capability-compatible artifacts and evidence only; never own live capability truth. |
| Agents | Consume capabilities through governed discovery and resolution; must not invent capabilities. |
| Platform Adapters | Translate capability usage to platform-specific contexts without redefining AI-DOS capability semantics. |

---

## Non Responsibilities

| Participant | Non-Responsibility Boundary |
|:---|:---|
| Capability | Must not execute Engines, replace Kernel, replace Registry, replace Lifecycle, replace Communication, replace State, redefine Standards, redefine Knowledge Graph, bypass validation, bypass review, bypass certification, become implementation authority, become platform-specific authority, or claim functionality not supported by contract and evidence. |
| Capability vs Implementation | Capability must not encode runtime behavior. Implementation must not redefine architecture. |
| Capability vs Lifecycle | Capability does not define lifecycle behavior; capability use must respect lifecycle eligibility. |
| Capability vs State | Capability does not define State categories or transitions; capability use must consider State. |
| Capability vs Contract | Capability must not exceed the Engine Contract that authorizes it. |
| Knowledge Graph | Must not own live capability truth; must not accept capability-incompatible artifacts as valid capability evidence. |
| Agents | Must not invent capabilities, redefine capability semantics, bypass Registry publication, or treat implementation availability as architectural capability. |
| Platform Adapters | Must not redefine AI-DOS capability categories, ownership, compatibility, validation, or governance rules. |
| Planning / Decision / Execution | Must not invent capabilities; must consume only governed, registry-backed, Kernel-resolved capabilities. |
| Registry | Registry publication does not by itself authorize execution. |
| Kernel | Kernel resolves capabilities but does not own or define capability semantics. |

---

## Interfaces

### Runtime

Runtime consumes Engine Capability through governed Engine architecture. Runtime does not define capability semantics, ownership, compatibility, or validation requirements.

### Engine Kernel

The Engine Kernel resolves capabilities. It determines whether a declared, registry-backed, compatible, and validated capability may be used in a governed context.

### Engine Contract

Engine Contract bounds capability declarations. Capabilities must remain contract-compatible and must not exceed contract authority.

### Engine Registry

Engine Registry publishes validated capability declarations for authorized discovery. Registry publication does not by itself authorize execution.

### Engine Lifecycle

Engine Lifecycle governs legal transitions. Capability does not define lifecycle behavior, but capability use must respect lifecycle eligibility.

### Engine Communication

Engine Communication may route, constrain, defer, or reject interactions based on resolved capability compatibility. Communication does not own capability semantics.

### Engine State

Engine State represents current observable condition. Capability represents functional capacity. Capability use must consider State, but Capability does not define State categories or transitions.

### Knowledge Graph

Knowledge Graph may store capability-compatible artifacts, evidence, relationships, and historical records. It does not own live capability truth and must not accept capability-incompatible artifacts as valid capability evidence.

### Workflow

Workflow consumes capabilities to determine whether lifecycle steps, handoffs, and execution paths are feasible. Workflow must not invent capabilities.

### Validation

Validation verifies capability declaration integrity, dependency satisfaction, compatibility, registry alignment, traceability, composition safety, and evidence sufficiency.

### Certification

Certification consumes validated capability evidence when assessing readiness or historical claims. Certification must not rely on unvalidated, unregistered, incompatible, deprecated-without-exception, or retired capabilities.

### Agents

Agents consume capabilities through governed discovery and Kernel resolution. Agents must not invent capabilities, redefine capability semantics, bypass Registry publication, or treat implementation availability as architectural capability.

### Platform Adapters

Platform Adapters translate capability consumption into platform-specific contexts. They may expose adapter-specific constraints, but they must not redefine AI-DOS capability categories, ownership, compatibility, validation, or governance rules.

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

Validation shall verify that capability declarations and capability usage are governed, compatible, traceable, and evidence-supported.

### Required Validation Checks

Validation shall check:

1. capability identity is stable and traceable;
2. capability name and description are clear and non-implementation-specific;
3. capability version is present and compatible;
4. capability category is recognized or governance-approved;
5. declaring Engine is identified;
6. governing Engine Contract authorizes the capability;
7. capability dependencies are declared and satisfiable;
8. capability constraints are declared and enforceable by governance expectations;
9. consumers and producers are identified;
10. compatibility claims are explicit and evidence-supported;
11. lifecycle and state constraints are considered but not redefined;
12. Registry publication is current when discovery is required;
13. Knowledge Graph artifacts are capability-compatible;
14. capability composition preserves ownership and traceability;
15. deprecated or retired capabilities are not selected without approved exception;
16. capability declarations do not define APIs, classes, programming interfaces, runtime behavior, or implementation mechanisms.

### Validation Outcomes

| Outcome | Meaning |
|:---|:---|
| Valid | Capability declaration or use satisfies applicable requirements. |
| Valid With Constraints | Capability may be used only under explicit governance, lifecycle, state, security, or validation constraints. |
| Invalid | Capability declaration or use fails required validation. |
| Blocked | Required authority, dependency, registry, contract, lifecycle, state, or evidence information is missing. |
| Deprecated Use | Capability is deprecated and requires governed exception or migration plan. |
| Retired Use Rejected | Capability is retired and shall not be used for active work. |

### Failure Model

Capability failures shall be detected, contained, reported, and resolved through governed channels.

| Failure | Meaning | Expected Response |
|:---|:---|:---|
| Capability Mismatch | Requested capability does not match declared functionality. | Reject use, report mismatch, require planning or declaration correction. |
| Capability Incompatibility | Capability conflicts with another capability, contract, lifecycle, state, registry, standard, artifact, workflow, or security constraint. | Block composition or use until compatibility is resolved. |
| Capability Discovery Failure | Capability cannot be found, is not registry-backed, or is not visible to the consumer. | Report discovery blocker; do not assume capability existence. |
| Capability Validation Failure | Capability fails identity, version, dependency, compatibility, traceability, or governance validation. | Reject publication, resolution, composition, or consumption. |
| Capability Dependency Failure | Required dependency is missing, invalid, unavailable, incompatible, deprecated, retired, or untraceable. | Block use or select governed fallback if compatible. |
| Capability Version Conflict | Required and provided capability versions are incompatible. | Block use, require migration, version alignment, or governed exception. |
| Capability Deprecation | Capability remains available historically but is discouraged for new work. | Prefer replacement; require documented exception for continued use. |
| Capability Retirement | Capability is no longer eligible for active work. | Reject active use; preserve historical traceability only. |
| Capability Overclaim | Engine declares functionality beyond its contract or evidence. | Reject declaration and require governance correction. |
| Capability Evidence Gap | Capability lacks sufficient evidence for validation, review, or certification. | Mark blocked until evidence is supplied. |

#### Recovery Expectations

Capability recovery shall:

- preserve traceability of the failure;
- identify the failed declaration, dependency, version, compatibility dimension, or governance rule;
- avoid uncontrolled fallback;
- require Kernel resolution before renewed use;
- require Registry update when publication changes;
- require Validation before renewed discovery, composition, or certification reliance;
- document migration, replacement, or retirement when required;
- avoid Project Status updates unless a separate governed task explicitly authorizes them.

---

## Risks

### Risk-1: Capability Overclaim

Engines may declare capabilities beyond what their contracts or evidence support, creating a false functional capacity that misleads planning, decision-making, and execution. This risk is addressed by the contract-bound authority rule and the Capability Overclaim failure mode, but detection depends on Validation discipline and governance review thoroughness.

### Risk-2: Discovery Without Registry Backing

Consumers — particularly agents and platform adapters — may infer or assume capabilities from implementation availability, tool access, or conversational context rather than consuming registry-backed, validated declarations. This would bypass the governed discovery process and create untraceable capability assumptions. The governance rules prohibit this, but enforcement depends on consumer discipline and access control.

### Risk-3: Composition Ownership Collapse

When multiple capabilities are composed, there is a risk that ownership boundaries become blurred, effectively creating a new composite authority that neither declaring Engine owns. This risk is mitigated by the composition principles requiring preserved ownership boundaries and prohibited Engine merging, but complex multi-Engine compositions may still create implicit authority ambiguity.

### Risk-4: Compatibility Dimension Gaps

The ten-dimension compatibility model is comprehensive, but consumers may evaluate only a subset of dimensions (e.g., checking Capability-to-Contract but skipping Capability-to-Security) leading to apparently compatible capabilities that violate unexamined dimensions. This risk requires enforcement discipline and tooling support to ensure all ten dimensions are evaluated before capability use.

### Risk-5: Deprecated Capability Persistence

Deprecated capabilities remain traceable but discouraged for new work. There is a risk that consumers continue to rely on deprecated capabilities without documented governance exceptions, particularly when no replacement capability has been identified. The deprecation failure mode and validation outcomes address this, but operational monitoring is needed to detect deprecated capability consumption patterns.

### Risk-6: Cross-Engine Capability Equivalence

Multiple Engines may provide equivalent or compatible capabilities, but the current model does not define a formal equivalence representation. This could lead to redundant capability declarations, ambiguous planning decisions, or inconsistent compatibility evaluations across equivalent capabilities from different Engines. This is tracked as an open question regarding capability equivalence representation.

---

## Open Questions

1. What exact versioning policy should govern capability compatibility after capability RFC ratification?
2. Should capability categories remain a closed canonical set or allow governed extension through a standard extension process?
3. What future artifact template should represent a capability declaration without becoming an implementation schema?
4. How should capability deprecation windows be represented across Registry, Knowledge Graph, Validation, and Certification evidence?
5. What review procedure should be required before a capability becomes certification-relevant?
6. How should capability equivalence across multiple Engines be represented without merging Engine ownership?
7. Which security classifications should apply to capability discovery results in future operational procedures?

---

## Completion Criteria

- [x] Executive Summary defined.
- [x] Purpose defined.
- [x] Scope defined.
- [x] Capability position defined.
- [x] Capability architecture defined.
- [x] Capability model defined.
- [x] Capability declaration defined.
- [x] Capability discovery defined.
- [x] Capability composition defined.
- [x] Capability compatibility defined.
- [x] Capability ownership defined.
- [x] Validation rules defined.
- [x] Capability events defined.
- [x] Failure model defined.
- [x] Governance rules defined.
- [x] Security constraints defined.
- [x] Relationships defined.
- [x] Open questions recorded.
- [x] Prohibitions recorded.
- [x] Documentation-only constraint preserved.
- [x] `docs/ProjectStatus.md` not updated.
- [x] A.4, A.4.1, A.4.2, A.4.3, A.4.4, A.4.5, A.4.6, STD-000, STD-001, and STD-002 not modified.
- [x] Stakeholder Impact Matrix defined.
- [x] Change Log defined.
- [x] Glossary defined.
- [x] Cross-Reference Index defined.

---

## Version History

| Version | Date | Author | Description |
|:---|:---|:---|:---|
| 0.1.0-draft | 2026-07-07 | Framework Architecture Team | Initial draft: Engine Capability RFC created as documentation-only, non-canonical architecture specification. Established capability model, declaration requirements, discovery rules, composition patterns, 10 compatibility dimensions, ownership, validation, failure model, governance rules, security constraints, and 13 relationship definitions. |
| 0.1.0-enterprise | 2026-07-07 | Framework Architecture Team | Enterprise refactoring: restructured to STD-010 compliance, added Executive Summary, Stakeholder Impact Matrix, Change Log, Glossary, and Cross-Reference Index. All original content preserved. |
| 0.2.0-draft | 2026-07-10 | Framework Architecture Team | Family normalization — aligned metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations to STD-010, STD-003, TPL-000, TPL-001, and Runtime README navigation model. |
| 0.3.0-draft | 2026-07-11 | Framework Architecture Team | TPL-001 compliance refactoring — editorial restructuring into TPL-001 20 mandatory output sections. No content or authority changes. Added: Design Decisions (6 DDs), Ownership, Responsibilities, Non Responsibilities, Risks (6 risks), Version History. Consolidated architecture sections, extracted Normative Authority/References/Dependencies as standalone sections. Removed Completion Report and Table of Contents. Version bumped, Traceability ID standardized to `AI-DOS.V3.A.004.7`. |

---

## Appendix A — Cross-Reference Index

### Internal References

| Reference | Section |
|:---|:---|
| Purpose and scope of Engine Capability | Purpose, Scope |
| Capability position in A.4 architecture | Architecture — Capability Position |
| Capability architecture responsibilities | Architecture — Capability Architecture |
| Capability versus Implementation | Architecture — Capability Versus Implementation |
| Capability versus Lifecycle | Architecture — Capability Versus Lifecycle |
| Capability versus State | Architecture — Capability Versus State |
| Capability versus Contract | Architecture — Capability Versus Contract |
| Capability model (15 categories) | Architecture — Capability Model |
| Capability identity, version, traceability | Architecture — Capability Identity, Capability Version, Capability Traceability |
| Capability declaration (12 elements) | Architecture — Capability Declaration |
| Declaration rules and status | Architecture — Declaration Rules, Declaration Status |
| Capability discovery | Architecture — Capability Discovery |
| Discovery responsibilities and rules | Architecture — Discovery Responsibilities, Discovery Rules |
| Capability composition (5 patterns) | Architecture — Capability Composition |
| Composition principles and patterns | Architecture — Composition Principles, Composition Patterns |
| Capability compatibility (10 dimensions) | Architecture — Capability Compatibility |
| Compatibility rules | Architecture — Compatibility Rules |
| Capability ownership (15 participants) | Ownership, Responsibilities |
| Validation rules (16 checks, 6 outcomes) | Validation |
| Capability events (7 events) | Architecture — Capability Events |
| Failure model (10 failure modes) | Validation — Failure Model |
| Recovery expectations | Validation — Recovery Expectations |
| Governance rules, change governance, prohibitions | Architecture — Governance Rules, Non Responsibilities |
| Security constraints | Architecture — Security Constraints |
| Relationships (13 subsystems) | Interfaces |
| Open questions | Open Questions |
| Stakeholder impact matrix | Appendix C |

### External References

| Reference | Document |
|:---|:---|
| STD-010 | Document Metadata Standard (`docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`) |
| A.1 | Constitution (`docs/AI/Architecture/Constitution/A.1-Constitution.md`) |
| M.0 | Framework Meta Model (`docs/AI/Meta/M.0-Framework-Meta-Model.md`) |
| M.1 | Artifact Meta Model |
| STD-000 | Framework Standards (`docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`) |
| STD-001 | Knowledge Graph Standard |
| STD-002 | Discovery Standard |
| A.3 | Runtime Architecture |
| A.4 | Engine Architecture |
| A.4.1 | Engine Kernel RFC |
| A.4.2 | Engine Contract RFC |
| A.4.3 | Engine Registry RFC |
| A.4.4 | Engine Lifecycle RFC |
| A.4.5 | Engine Communication RFC |
| A.4.6 | Engine State RFC |
| AGENTS.md | Agent Governance Configuration |
| FrameworkGovernance.md | Framework Governance Documentation |

---

## Appendix B — Glossary

| Term | Definition |
|:---|:---|
| **Capability** | The governed functional capacity an Engine may offer, describing what an Engine can do without defining how it does it. |
| **Capability Category** | One of the fifteen governed categories from the canonical capability model that organize functionality for discovery, compatibility, and governance. |
| **Capability Compatibility** | The evaluation across ten dimensions determining whether a capability may be safely discovered, resolved, composed, or consumed in a governed context. |
| **Capability Composition** | The governed combination of two or more capabilities to satisfy a planning, decision, execution, validation, review, certification, agent, or adapter need. |
| **Capability Declaration** | A contract-bound claim by an Engine describing its functional capacity, including identity, version, dependencies, constraints, consumers, producers, and validation requirements. |
| **Capability Discovery** | The governed process of finding and evaluating declared Engine capabilities through registry-backed, permission-aware, validation-aware, and governance-constrained channels. |
| **Capability Identity** | A stable identifier for a capability claim, distinct from Engine identity, supporting traceability, version comparison, and governance review. |
| **Capability Overclaim** | A failure mode where an Engine declares functionality beyond what its contract or evidence supports. |
| **Capability Version** | A version designation for a capability declaration, supporting compatibility evaluation, deprecation, migration, discovery, and certification evidence. |
| **Contract-Bound** | A constraint requiring that a capability declaration must not exceed the Engine Contract that authorizes it. |
| **Kernel Resolution** | The process by which the Engine Kernel determines whether a declared, registry-backed, compatible, and validated capability may be used in a governed context. |
| **Registry-Backed** | A constraint requiring that capability discovery and publication be mediated through the Engine Registry. |
| **Declaration Status** | The governance status of a capability declaration: Draft, Active, Deprecated, Retired, or Rejected. |
| **Compatibility Dimension** | One of ten evaluation axes (Engine-to-Engine, Capability-to-Capability, Capability-to-Contract, Capability-to-Lifecycle, Capability-to-State, Capability-to-Registry, Capability-to-Standard, Capability-to-Artifact, Capability-to-Workflow, Capability-to-Security) used to assess safe capability use. |

---

## Appendix C — Stakeholder Impact Matrix

| Stakeholder | Impact Area | Impact Level | Primary Concern |
|:---|:---|:---|:---|
| Framework Architecture Team | Capability model design, categories, composition patterns, compatibility dimensions | **High** | Architectural consistency across A.4 engine RFC family |
| Engine Kernel Implementation | Capability resolution, governance gate enforcement, unsafe request rejection | **High** | Kernel responsibilities for capability resolution flow |
| Engine Registry Implementation | Validated capability publication, authorized discovery exposure | **High** | Registry publication accuracy and governance alignment |
| Validation Team | 16-point validation checklist, declaration integrity, compatibility verification | **High** | Validation rule completeness and enforcement coverage |
| Planning System Developers | Capability consumption for feasible plan determination and dependency resolution | **Medium** | Correct capability-based planning without bypassing governance |
| Decision System Developers | Capability consumption for permissible action selection | **Medium** | Governance-compliant decision-making based on resolved capabilities |
| Engine Lifecycle Team | Capability-lifecycle consistency, eligibility coordination | **Medium** | Ensuring lifecycle eligibility governs capability use |
| Engine Communication Team | Capability-based routing, constraint, deferral, and rejection | **Medium** | Correct capability-aware communication decisions |
| Certification Team | Validated capability evidence consumption for readiness assessment | **Medium** | Evidence sufficiency for certification decisions |
| Platform Adapter Developers | Capability translation to platform contexts without semantic redefinition | **Medium** | Platform independence preservation |
| Agent Developers | Governed capability discovery and consumption patterns | **Medium** | Governance-compliant capability access without invention |
| Knowledge Graph Team | Capability-compatible artifact and evidence recording boundaries | **Medium** | Preventing live capability ownership in Knowledge Graph |
| Security Team | Permission-aware discovery, evidence auditability, unauthorized exposure prevention | **High** | Least-privilege discovery and security constraint enforcement |
| Human Governance | Capability governance policies, category amendments, deprecation/retirement authority | **High** | Governance review and approval authority for changes |
| Review Team | Independent readiness assessment of capability use | **Medium** | Evidence-supported review of capability consumption |

---

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.
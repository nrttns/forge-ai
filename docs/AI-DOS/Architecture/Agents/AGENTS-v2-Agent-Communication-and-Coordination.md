#AI-DOS — AGENTS v2 Agent Communication and Coordination

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-COMMUNICATION-AND-COORDINATION` |
| Title |AI-DOS — AGENTS v2 Agent Communication and Coordination |
| Version | 0.1.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Human Governance / Framework Governance |
| Classification | Agent Architecture Specification |
| Document Type | Architecture Specification |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.COMMUNICATION-COORDINATION` |
| Scope | Documentation-level AGENTS v2 agent communication and coordination model, communication contracts, logical message categories, request / response expectations, event expectations, context exchange expectations, validation rules, and governance boundaries. |
| Out of Scope | Runtime messaging, transport protocols, queues, brokers, APIs, networking, scheduling, execution, orchestration, routing implementation, context runtime, swarm behavior, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; the invoking Target's Resolved Target Context (operational-state and roadmap authority); `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | AGENTS v2 Architecture Foundation; AGENTS v2 Agent Identity and Registry; AGENTS v2 Agent Capability and Role Catalog; AGENTS v2 Agent Lifecycle and Governance Boundaries; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; AGENTS v1 operating architecture; AGENTS v2 planning inputs; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; AGENTS v2 identity, registry, role-reference, capability-link, lifecycle, ownership, governance, validation, reporting, escalation, and lifecycle-boundary models; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent communication philosophy; communication principles; architectural communication model; communication participant model; communication contracts; message categories; request / response model; event model; logical context exchange model; coordination principles; communication validation rules; governance boundaries; forbidden-content list; deferred-scope checklist. |
| Related Specifications | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, AGENTS v2 Agent Identity and Registry, AGENTS v2 Agent Capability and Role Catalog, AGENTS v2 Agent Lifecycle and Governance Boundaries, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent communication and coordination model for AI-DOS.

Its purpose is to describe, at the documentation and architecture-specification level, how future AGENTS v2 agent identities may express communication intent, exchange logical context, and coordinate documentation-level responsibilities without defining runtime messaging, transport, scheduling, routing, orchestration, or execution.

This document refines the communication and coordination concerns introduced by `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md`, consumes identity and registry expectations from `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`, consumes capability and role expectations from `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`, and consumes lifecycle and governance boundaries from `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md`.

This document is documentation-only. It does not activate AGENTS v2 runtime behavior, multi-agent runtime behavior, swarm runtime behavior, platform adapters, Engine RFC work, or ProjectStatus updates.

---

## 2. Scope

This document covers:

- agent communication philosophy;
- communication principles;
- the AGENTS v2 communication model as an architectural contract only;
- communication participants;
- communication contracts;
- logical message categories;
- request / response expectations;
- event expectations;
- logical context exchange expectations;
- coordination principles;
- communication validation rules;
- governance boundaries;
- forbidden content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only, technology-neutral, platform-independent, and parent-consuming.

---

## 3. Non-goals

This document does not:

- define runtime messaging;
- define transport protocols;
- define queues;
- define brokers;
- define APIs;
- define networking;
- define scheduling;
- define execution;
- define orchestration;
- define routing implementation;
- define dispatch behavior;
- define storage, databases, CLIs, user interfaces, platform adapters, or service contracts;
- define context runtime implementation;
- define multi-agent runtime behavior;
- define swarm behavior;
- continue Context Engine RFC or any Engine RFC work;
- redefine Runtime Architecture;
- redefine the Engine Platform;
- redefine Governance, Standards, M.0, M.1, or STD-010;
- redefine AGENTS v1;
- activate frozen areas;
- modify ProjectStatus;
- approve, certify, promote, or canonicalize any AGENTS v2 communication contract, coordination model, agent identity, registry entry, role, capability, or lifecycle state.

---

## 4. Authority and Inputs

The parent foundation document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md
```

The identity and registry input document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md
```

The capability and role input document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md
```

The lifecycle and governance input document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md
```

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI-DOS/GOVERNANCE.md` remains the governance navigation authority.
4. The invoking Target's Resolved Target Context supplies operational-state, frozen-area, and roadmap authority; this document does not hard-code a Target-specific path for it.
5. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
6. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md` provides identity, registry, role-reference, capability-link, lifecycle, ownership, governance, and validation inputs.
7. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md` provides capability, role, permitted-task, prohibited-task, validation, reporting, and escalation inputs.
8. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md` provides lifecycle-state, transition, activation, suspension, deactivation, approval, certification, ProjectStatus, frozen-area, and AI decision boundaries.
10. STD-010 governs this document's metadata requirements.
11. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 retain authority over their own domains.

This document shall not reinterpret AGENTS v2 planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

---

## 5. Agent Communication Philosophy

AGENTS v2 communication is a governed architectural relationship between future agent identities. It exists to make agent-to-agent intent, evidence, context, and coordination boundaries explicit before any implementation is considered.

Agent communication must remain:

- deterministic;
- traceable;
- governance-aware;
- platform-independent;
- technology-neutral;
- lifecycle-aware;
- role-aware;
- capability-aware;
- bounded by Human Governance, ProjectStatus, roadmap order, and frozen-area constraints.

Communication does not imply execution. Communication does not imply authority. Communication does not imply ownership. Communication does not imply routing. Communication does not imply scheduling.

A communication statement records what may need to be exchanged, why it may need to be exchanged, which governed participant identities are involved, which authorities constrain the exchange, and which validation evidence is required. It does not define how any runtime, transport, queue, broker, API, network, scheduler, orchestrator, or execution engine performs that exchange.

---

## 6. Communication Principles

AGENTS v2 communication shall follow these principles:

1. Communication is an architectural contract only.
2. Communication shall remain technology-neutral and platform-independent.
3. Communication shall be deterministic: the meaning, participant identities, required context, and expected evidence shall be explicit.
4. Communication shall be traceable to governed agent identities, role references, capability links, lifecycle states, and authority inputs.
5. Communication shall be governance-aware and shall preserve Human Governance, ProjectStatus, roadmap, frozen-area, and source-level task constraints.
6. Communication shall not grant authority, ownership, approval, certification, activation, execution permission, routing permission, or scheduling permission.
7. Communication shall not bypass role, capability, lifecycle, validation, reporting, or escalation obligations.
8. Communication shall not redefine Runtime Architecture, Engine Platform, Governance, Standards, M.0, M.1, STD-010, or AGENTS v1.
9. Communication shall preserve logical context boundaries and shall not define context storage, memory implementation, transport, serialization, or runtime synchronization.
10. Ambiguous, conflicting, untraceable, or frozen-area-crossing communication shall stop and escalate to Human Governance or an approved governance process.

---

## 7. Communication Model

The AGENTS v2 communication model defines communication as an architectural contract only.

A communication contract describes a governed exchange expectation between defined communication participants. It may identify:

| Contract Element | Required Meaning |
|:---|:---|
| Communication Identifier | Stable documentation-level identifier for the communication contract. |
| Purpose | Why the communication contract exists. |
| Initiating Participant | The governed agent identity, role, or lifecycle-bounded participant that may initiate the exchange. |
| Receiving Participant | The governed agent identity, role, or lifecycle-bounded participant that may receive the exchange. |
| Message Category | The logical category of information being exchanged. |
| Required Authority Inputs | Authorities that constrain the exchange. |
| Required Context | Logical context needed to interpret the exchange. |
| Expected Evidence | Validation, reporting, traceability, or escalation evidence expected from the exchange. |
| Lifecycle Boundary | Lifecycle states in which the contract may be referenced. |
| Governance Boundary | Human Governance, ProjectStatus, roadmap, frozen-area, or source-level constraints. |
| Prohibited Interpretation | Execution, routing, scheduling, ownership, authority, implementation, or runtime implications that are forbidden. |

This communication model shall not define:

- runtime messaging;
- transport protocols;
- queues;
- brokers;
- APIs;
- networking;
- scheduling;
- execution;
- orchestration;
- implementation.

Communication contracts are logical documentation artifacts. They are not service contracts, API contracts, transport contracts, queue subscriptions, routing rules, broker topics, network protocols, scheduler entries, execution plans, or orchestration definitions.

---

## 8. Communication Participants

Communication participants are governed AGENTS v2 agent identities, role references, capability-linked roles, lifecycle records, or Human Governance-facing documentation participants that may be named in a communication contract.

A communication participant reference shall include:

| Participant Element | Meaning |
|:---|:---|
| Participant Identifier | Stable identity, role, or lifecycle-bounded participant reference. |
| Participant Type | Identity, role, capability-linked role, lifecycle record, or governance-facing participant. |
| Registry Reference | Link to the identity or registry record when applicable. |
| Role Reference | Governed role associated with the participant when applicable. |
| Capability Reference | Governed capability declaration associated with the participant when applicable. |
| Lifecycle State | Current lifecycle state relevant to participation. |
| Authority Constraints | Authorities the participant must consume before acting or responding. |
| Prohibited Participation | Exchanges the participant must not initiate, receive, rely on, or treat as active. |
| Traceability Reference | Evidence or audit reference for the participant's communication involvement. |

Participant references do not activate agents. A participant reference does not grant authority, ownership, routing, scheduling, execution, or runtime availability.

---

## 9. Communication Contracts

A communication contract is a documentation-level statement that defines the expected logical content, constraints, evidence, and governance boundaries for an exchange.

A communication contract shall:

1. identify the participating identities, roles, or lifecycle-bounded records;
2. identify the message category;
3. identify required authority inputs;
4. identify logical context required for interpretation;
5. identify validation evidence expected from the exchange;
6. identify escalation conditions;
7. preserve lifecycle boundaries;
8. preserve role and capability boundaries;
9. preserve ProjectStatus and frozen-area constraints;
10. explicitly state prohibited interpretations.

A communication contract shall not:

- assign ownership of an artifact or decision;
- grant approval, certification, promotion, or activation;
- define runtime dispatch, routing, queueing, scheduling, transport, networking, API, broker, storage, orchestration, or execution behavior;
- bypass Human Governance, Framework Governance, ProjectStatus, roadmap order, source-level instructions, or lifecycle constraints;
- create a competing Runtime, Engine, Governance, Standard, Meta, or AGENTS v1 concept.

---

## 10. Message Categories

Message categories are logical documentation categories only. They classify the kind of information a communication contract may describe without defining runtime messages or transports.

| Message Category | Documentation Meaning | Boundary |
|:---|:---|:---|
| Authority Context | Communicates which authorities constrain a task or artifact. | Does not decide authority or resolve conflicts. |
| Scope Statement | Communicates permitted and prohibited scope. | Does not approve scope expansion or frozen-area activation. |
| Task Intent | Communicates intended documentation work within approved scope. | Does not schedule or execute work. |
| Context Summary | Communicates logical background needed for interpretation. | Does not define memory, storage, retrieval, synchronization, or context runtime. |
| Evidence Package | Communicates validation, review-support, or reporting evidence. | Does not certify, approve, or promote. |
| Risk Notice | Communicates a discovered risk, ambiguity, conflict, or blocker. | Does not resolve escalated issues without authority. |
| Escalation Notice | Communicates that Human Governance or an approved governance process is required. | Does not make the governance decision. |
| Completion Signal | Communicates that bounded documentation work is ready for validation or report assembly. | Does not imply ProjectStatus update or lifecycle activation. |
| Dependency Notice | Communicates that one artifact or decision depends on another. | Does not create runtime dependency management. |
| Handoff Summary | Communicates logical continuity between bounded documentation participants. | Does not route work, dispatch work, or transfer ownership automatically. |

Additional message categories require validation against the parent foundation, identity and registry model, capability and role catalog, lifecycle and governance boundaries, STD-010 where metadata is affected, ProjectStatus frozen areas, and roadmap order.

---

## 11. Request / Response Model

The AGENTS v2 request / response model is a logical documentation pattern for asking a governed participant to provide information, evidence, clarification, validation support, or escalation support.

A logical request may include:

| Request Element | Meaning |
|:---|:---|
| Request Identifier | Stable documentation-level trace reference. |
| Requesting Participant | Governed participant that expresses the request. |
| Requested Participant | Governed participant expected to respond if authorized. |
| Request Category | Logical message category. |
| Purpose | Why the request exists. |
| Required Authority Inputs | Authorities that must be consumed before response. |
| Required Context | Logical context needed for response. |
| Expected Response Evidence | Evidence, summary, validation result, risk, or escalation notice expected. |
| Response Boundary | What the response must not decide, activate, route, schedule, execute, approve, or certify. |

A logical response may include:

- acknowledgement of the request scope;
- authority inputs consumed;
- logical context used;
- bounded answer or evidence;
- validation result;
- unresolved risks;
- escalation conditions;
- explicit deferred scope.

The request / response model does not define APIs, RPC, HTTP, queues, brokers, callbacks, event loops, network protocols, scheduling, routing, dispatch, orchestration, or execution.

---

## 12. Event Model

The AGENTS v2 event model is a logical documentation pattern for recording that a governance-relevant communication condition occurred.

A logical event may record:

| Event Element | Meaning |
|:---|:---|
| Event Identifier | Stable documentation-level trace reference. |
| Event Category | Logical category such as risk notice, escalation notice, validation evidence, completion signal, or dependency notice. |
| Affected Participant | Identity, role, lifecycle record, capability, or artifact affected by the event. |
| Triggering Condition | Documentation-level condition that caused the event to be recorded. |
| Authority Context | Authorities constraining interpretation of the event. |
| Evidence | Evidence supporting the event record. |
| Required Follow-up | Documentation-level validation, report, review, or escalation expectation. |
| Prohibited Interpretation | Runtime, routing, scheduling, execution, approval, certification, or ownership implications that are forbidden. |

Events are traceability records. They are not runtime events, event bus messages, broker publications, queue items, webhooks, scheduler triggers, orchestration signals, or execution commands.

---

## 13. Context Exchange Model

Context exchange is logical only.

The AGENTS v2 context exchange model describes what contextual information may be referenced between governed participants so that communication remains understandable, bounded, and auditable.

Logical context exchange may include:

| Context Element | Meaning |
|:---|:---|
| Authority Context | Documents, governance bodies, or task instructions that constrain interpretation. |
| Scope Context | In-scope and out-of-scope boundaries for the communication. |
| Identity Context | Participant identities, registry references, role references, capability links, and lifecycle states. |
| Artifact Context | Documents or artifacts relevant to the communication. |
| Validation Context | Checks, evidence, and completion-report obligations. |
| Risk Context | Known ambiguities, conflicts, blockers, or frozen-area concerns. |
| Deferred Context | Areas intentionally excluded from the current communication or task. |

Context exchange does not define context storage, memory architecture, synchronization, retrieval, serialization, transport, runtime context windows, databases, APIs, queues, brokers, or implementation behavior.

Context exchange shall preserve least-necessary context: participants shall exchange only the logical context required to interpret the bounded communication contract and complete required validation or escalation.

---

## 14. Coordination Principles

AGENTS v2 coordination is the governed alignment of responsibilities, evidence, boundaries, and escalation paths between future agent participants.

Coordination shall follow these principles:

1. Coordination is documentation-level alignment, not runtime orchestration.
2. Coordination shall preserve authority order and shall not override Human Governance.
3. Coordination shall preserve ProjectStatus, roadmap order, frozen-area boundaries, and source-level task instructions.
4. Coordination shall rely on governed identities, role references, capability links, and lifecycle states.
5. Coordination shall be deterministic: responsibilities, evidence, boundaries, and escalation conditions shall be explicit.
6. Coordination shall be traceable to communication contracts, participant references, and validation evidence.
7. Coordination shall not imply execution, authority, ownership, routing, scheduling, dispatch, approval, certification, promotion, or activation.
8. Coordination shall not define queues, brokers, APIs, networking, runtime messaging, orchestration, or implementation.
9. Coordination conflicts shall stop and escalate when authority, roadmap, frozen-area, lifecycle, role, capability, or source-level instructions are ambiguous or conflicting.

---

## 15. Communication Validation Rules

Communication validation shall confirm that each communication contract or coordination statement:

1. identifies governed participants or states that participants are intentionally abstract;
2. identifies the logical message category;
3. identifies required authority inputs;
4. preserves identity and registry constraints;
5. preserves capability and role constraints;
6. preserves lifecycle and governance boundaries;
7. preserves ProjectStatus and frozen-area constraints;
8. preserves roadmap order;
9. remains documentation-only;
10. remains technology-neutral and platform-independent;
11. avoids runtime messaging, transports, queues, brokers, APIs, networking, scheduling, execution, orchestration, routing implementation, and implementation details;
12. states that communication does not imply execution, authority, ownership, routing, or scheduling;
13. includes logical context requirements without defining context runtime implementation;
14. includes validation evidence, reporting expectations, or escalation conditions;
15. avoids redefining Runtime Architecture, Engine Platform, Governance, Standards, M.0, M.1, STD-010, or AGENTS v1.

Validation failure shall result in revision or escalation. AI agents shall not silently resolve authority conflicts, frozen-area concerns, lifecycle ambiguity, or roadmap conflicts.

---

## 16. Governance Boundaries

Communication and coordination are governed by Human Governance and the authority chain identified in this document.

Boundary rules:

1. Human Governance remains final.
2. Communication does not imply execution.
3. Communication does not imply authority.
4. Communication does not imply ownership.
5. Communication does not imply routing.
6. Communication does not imply scheduling.
7. Communication does not activate agent identities, registry entries, roles, capabilities, lifecycle states, multi-agent runtime, swarm runtime, or platform adapters.
8. Communication does not authorize ProjectStatus updates.
9. Communication does not approve, certify, promote, canonicalize, suspend, retire, reject, or activate any artifact or lifecycle record.
10. Communication does not redefine Runtime Architecture, Engine Platform, Governance, Standards, M.0, M.1, STD-010, AGENTS v1, or AGENTS v2 parent documents.
11. Communication shall stop and escalate when it encounters unresolved authority conflict, roadmap conflict, frozen-area ambiguity, lifecycle ambiguity, role ambiguity, capability ambiguity, or source-level instruction conflict.

---

## 17. Forbidden Content

This document and downstream communication artifacts shall not contain:

- runtime messaging design;
- transport protocol design;
- queue design;
- broker design;
- API design;
- networking design;
- scheduling design;
- execution design;
- orchestration design;
- routing implementation;
- dispatch implementation;
- storage, database, CLI, UI, service, adapter, or platform implementation details;
- memory or context runtime implementation;
- swarm runtime behavior;
- multi-agent runtime activation;
- platform-adapter activation;
- Engine RFC continuation or engine specialization;
- Runtime Architecture redefinition;
- Engine Platform redefinition;
- Governance, Standards, M.0, M.1, or STD-010 redefinition;
- AGENTS v1 redefinition;
- ProjectStatus mutation;
- certification, approval, promotion, canonicalization, or lifecycle activation claims;
- statements that communication grants authority, ownership, routing, scheduling, or execution permission.

---

## 18. Deferred Areas

The following areas are explicitly deferred:

- runtime messaging;
- transport protocols;
- queues;
- brokers;
- APIs;
- networking;
- scheduling;
- execution;
- orchestration;
- routing implementation;
- dispatch implementation;
- context runtime implementation;
- storage and registry implementation;
- lifecycle runtime implementation;
- multi-agent runtime;
- swarm runtime;
- platform adapters;
- Engine RFC work;
- Runtime Architecture changes;
- Engine Platform changes;
- standards changes;
- meta-model changes;
- ProjectStatus updates;
- certification and promotion decisions.

These areas require separate Human Governance authorization, roadmap alignment, ProjectStatus alignment, authority validation, and applicable domain-specific documents before any future work may begin.

---

## 19. Completion Checklist

This document is complete at the draft level when:

- [x] Purpose is defined.
- [x] Scope is defined.
- [x] Non-goals are defined.
- [x] Authority and inputs are identified.
- [x] Agent communication philosophy is defined.
- [x] Communication principles are defined.
- [x] Communication model is defined as an architectural contract only.
- [x] Communication participants are defined.
- [x] Communication contracts are defined.
- [x] Message categories are defined.
- [x] Request / response model is defined logically only.
- [x] Event model is defined logically only.
- [x] Context exchange model is defined logically only.
- [x] Coordination principles are defined.
- [x] Communication validation rules are defined.
- [x] Governance boundaries are defined.
- [x] Forbidden content is defined.
- [x] Deferred areas are defined.
- [x] STD-010 metadata block is present.
- [x] Parent foundation input is consumed without redefinition.
- [x] Identity and registry input is consumed without redefinition.
- [x] Capability and role input is consumed without redefinition.
- [x] Lifecycle and governance input is consumed without redefinition.
- [x] Runtime, Engine, Governance, Standards, Meta, ProjectStatus, and frozen-area boundaries are preserved.

---

## 20. Next AGENTS v2 Document

The recommended next AGENTS v2 document is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Task-Delegation-and-Handoff.md
```

That document should remain documentation-only and should consume this communication and coordination specification as an input. It should define delegation and handoff as governed architectural contracts only, without defining runtime routing, scheduling, dispatch, orchestration, execution, queues, brokers, APIs, networking, platform adapters, multi-agent runtime, swarm runtime, or ProjectStatus updates.

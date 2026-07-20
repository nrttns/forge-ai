#AI-DOS — AGENTS v2 Agent Runtime Consumption Model

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-RUNTIME-CONSUMPTION-MODEL` |
| Title |AI-DOS — AGENTS v2 Agent Runtime Consumption Model |
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
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.RUNTIME-CONSUMPTION` |
| Scope | Documentation-level AGENTS v2 agent runtime consumption model, including agent/runtime/engine boundary rules, capability consumption, context consumption, workflow consumption, delegation consumption, validation consumption, governance boundaries, ProjectStatus boundaries, forbidden content, and deferred scope. |
| Out of Scope | Runtime implementation, runtime execution, scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, transport, messaging runtime, swarm behavior, platform adapters, Engine RFC continuation, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Workflow-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family |
| Dependencies | AGENTS v2 Architecture Foundation; AGENTS v2 identity and registry model; AGENTS v2 capability and role catalog; AGENTS v2 lifecycle and governance boundaries; AGENTS v2 communication and coordination model; AGENTS v2 validation and review model; AGENTS v2 workflow model; AGENTS v2 delegation and escalation model; Runtime Architecture; Engine Platform; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; identity, registry, role, capability, lifecycle, communication, coordination, validation, review, workflow, delegation, escalation, and deferred-scope models; Runtime Architecture as an external authority; Engine Platform capabilities through Runtime or approved contracts; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent runtime consumption philosophy; documentation-level agent/runtime/engine boundary model; agent consumption rules; runtime consumption rules; engine consumption rules; capability consumption model; context consumption model; workflow consumption model; delegation consumption model; validation consumption model; governance boundaries; ProjectStatus boundaries; forbidden-content list; deferred-scope checklist; next-document recommendation. |
| Related Specifications | `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, all prior AGENTS v2 input documents, Runtime Architecture consumption boundaries, Engine Platform consumption boundaries, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent runtime consumption model for AI-DOS.

Its purpose is to describe how future AGENTS v2 agent architecture consumes Runtime Architecture and Engine Platform capabilities without replacing, redefining, implementing, or continuing those layers.

This document is documentation-only. It does not activate runtime implementation, runtime execution, multi-agent runtime behavior, swarm runtime behavior, platform adapters, Runtime RFC work, Engine RFC work, or ProjectStatus updates.

Explicit boundary statements:

1. Agent consumes Runtime; Agent does not replace Runtime.
2. Runtime consumes Engine Platform; Runtime does not replace Engine Platform.
3. Agent consumes Engine capabilities through Runtime or approved contracts.
4. Agent does not own engine capability truth.
5. Agent does not own execution truth.
6. Agent does not own ProjectStatus truth.
7. Runtime consumption does not imply runtime implementation.
8. Runtime consumption does not imply Engine RFC continuation.

## 2. Scope

This document covers:

- runtime consumption philosophy;
- agent, runtime, and engine boundary rules;
- agent consumption rules;
- runtime consumption rules;
- engine consumption rules;
- capability consumption at the documentation level;
- context consumption at the documentation level;
- workflow consumption at the documentation level;
- delegation consumption at the documentation level;
- validation consumption at the documentation level;
- governance boundaries;
- ProjectStatus boundaries;
- forbidden content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only, technology-neutral, platform-independent, parent-consuming, input-consuming, and governance-bound.

## 3. Non-goals

This document does not define:

- runtime implementation;
- runtime execution;
- scheduling;
- queues;
- dispatch;
- routing;
- orchestration;
- APIs;
- storage;
- CLI behavior;
- UI behavior;
- transport;
- messaging runtime;
- runtime communication protocols;
- platform adapters;
- swarm behavior;
- multi-agent runtime behavior;
- Context Engine RFC or any Engine RFC continuation;
- Runtime Architecture replacement;
- Engine Platform replacement;
- Governance, Standards, M.0, M.1, or STD-010 replacement;
- ProjectStatus updates.

This document does not approve, certify, promote, canonicalize, activate, authorize, implement, schedule, route, dispatch, orchestrate, or execute any runtime, engine, workflow, delegation, validation, or agent behavior.

## 4. Authority and Inputs

The parent foundation document for this specification is:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md
```

The AGENTS v2 input documents for this specification are:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Workflow-Model.md
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md
```

Runtime and engine inputs are consumed only as external authorities for boundary preservation:

```text
docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md
Engine Platform RFC family
```

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI/GOVERNANCE.md` remains the governance navigation authority.
4. `docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational state and frozen-area authority.
5. `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` remains the roadmap authority.
6. `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
7. Prior AGENTS v2 documents define agent identity, registry, roles, capabilities, lifecycle, communication, coordination, validation, review, workflow, delegation, and escalation concepts consumed by this document.
8. Runtime Architecture remains authoritative for runtime concepts and execution-environment boundaries.
9. Engine Platform remains authoritative for engine capabilities and engine platform concepts.
10. STD-010 governs this document's metadata requirements.
11. Governance, Standards, M.0, M.1, Runtime, Engine Platform, and ProjectStatus retain authority over their own domains.

This document shall not reinterpret AGENTS v2 planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

## 5. Runtime Consumption Philosophy

Runtime consumption is a documentation-level dependency relationship.

An AGENTS v2 agent may be described as consuming runtime-provided boundaries, contracts, states, context channels, validation checkpoints, and capability access points only where those concepts are defined by Runtime Architecture or approved downstream contracts.

Runtime consumption shall remain:

- architectural;
- documentation-only;
- boundary-preserving;
- governance-bound;
- authority-aware;
- traceable;
- runtime-subordinate for agent behavior;
- engine-subordinate for engine capability truth;
- ProjectStatus-subordinate for operational truth;
- technology-neutral;
- implementation-free.

Runtime consumption does not imply runtime implementation. Runtime consumption does not imply runtime execution. Runtime consumption does not imply Engine RFC continuation. Runtime consumption does not authorize scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, transport, messaging runtime, platform adapters, swarm behavior, or ProjectStatus updates.

## 6. Agent / Runtime / Engine Boundary Model

The AGENTS v2 runtime consumption model preserves three distinct authority layers.

| Layer | Owns | Consumes | Does Not Own |
|:---|:---|:---|:---|
| Agent | Agent identity, agent role declarations, agent capability declarations, agent lifecycle expectations, agent workflow participation, delegation and escalation records, validation evidence expectations. | Runtime boundaries; Runtime-approved contracts; Engine capabilities only through Runtime or approved contracts; AGENTS v2 parent and input documents. | Runtime execution truth, engine capability truth, ProjectStatus truth, scheduling, dispatch, routing, orchestration, storage, APIs, transport, CLI, UI, platform adapters, swarm behavior. |
| Runtime | Runtime concepts, runtime architecture boundaries, execution-environment concepts, runtime-level lifecycle infrastructure, runtime-level consumption surfaces where approved. | Engine Platform and applicable standards. | Engine Platform truth, agent governance truth, ProjectStatus truth, Engine RFC continuation. |
| Engine | Engine Platform concepts, engine capabilities, engine contracts, engine registry, engine lifecycle, engine communication, engine state, engine capability definitions. | Runtime Architecture and applicable standards as defined by Engine Platform governance. | Agent identity truth, agent workflow truth, ProjectStatus truth, Runtime replacement. |

Boundary invariants:

1. Agent consumes Runtime; Agent does not replace Runtime.
2. Runtime consumes Engine Platform; Runtime does not replace Engine Platform.
3. Agent consumes Engine capabilities through Runtime or approved contracts.
4. Agent does not own engine capability truth.
5. Agent does not own execution truth.
6. Agent does not own ProjectStatus truth.

## 7. Agent Consumption Rules

An AGENTS v2 agent may consume runtime and engine-related information only under these rules:

1. The agent shall treat Runtime Architecture as an external authority.
2. The agent shall not define runtime execution behavior.
3. The agent shall not define scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, transport, or messaging runtime.
4. The agent shall not define or activate swarm behavior.
5. The agent shall not define platform adapters.
6. The agent shall consume Engine capabilities only through Runtime or approved contracts.
7. The agent shall not claim ownership of engine capability truth.
8. The agent shall not claim ownership of execution truth.
9. The agent shall not claim ownership of ProjectStatus truth.
10. The agent shall preserve identity, registry, role, capability, lifecycle, communication, validation, workflow, delegation, and escalation boundaries from prior AGENTS v2 inputs.
11. The agent shall escalate authority conflicts rather than silently resolving them.
12. The agent shall treat frozen areas as unavailable unless Human Governance explicitly activates them and roadmap state permits them.

## 8. Runtime Consumption Rules

Within this document, Runtime is consumed as an architectural authority and not as implementation scope.

Runtime consumption rules:

1. Runtime consumption identifies dependency on runtime-layer concepts only.
2. Runtime consumption does not define runtime execution.
3. Runtime consumption does not imply runtime implementation.
4. Runtime consumption does not imply multi-agent runtime activation.
5. Runtime consumption does not imply swarm runtime activation.
6. Runtime consumption does not imply platform adapter work.
7. Runtime consumption does not imply Engine RFC continuation.
8. Runtime consumption shall not redefine Runtime Architecture.
9. Runtime consumption shall not bypass Runtime Architecture to create direct agent-owned execution semantics.
10. Runtime consumption shall preserve Runtime's dependency on the Engine Platform without replacing either layer.

## 9. Engine Consumption Rules

AGENTS v2 consumes engine capabilities indirectly and only through governed boundaries.

Engine consumption rules:

1. Agent consumes Engine capabilities through Runtime or approved contracts.
2. Agent does not own engine capability truth.
3. Agent does not define engine capabilities.
4. Agent does not continue Context Engine RFC or any Engine RFC work.
5. Agent does not redefine Engine Platform contracts, registries, lifecycle, communication, state, or capability rules.
6. Agent does not define platform adapters for engine access.
7. Agent may reference engine capability availability only as declared by authoritative engine-layer documents or approved contracts.
8. Agent validation evidence may cite engine-capability use only as a consumed capability reference, not as an agent-owned capability definition.

## 10. Capability Consumption Model

The capability consumption model connects AGENTS v2 role and capability declarations to runtime and engine boundaries without transferring authority.

At the documentation level, capability consumption may record:

- agent identity reference;
- role reference;
- declared agent capability reference;
- required runtime boundary or approved contract reference;
- consumed engine capability reference where applicable;
- governance constraints;
- validation evidence expectations;
- review expectations;
- escalation conditions.

Capability consumption shall not record implementation details such as API paths, scheduling rules, queues, dispatch behavior, orchestration logic, storage schemas, transport protocols, CLI commands, UI behavior, platform adapters, or runtime messaging mechanisms.

Capability consumption is descriptive and traceability-oriented. It does not grant execution authority, engine authority, runtime authority, or ProjectStatus authority.

## 11. Context Consumption Model

Context consumption describes how agent architecture may identify required context inputs without defining context runtime behavior.

At the documentation level, context consumption may record:

- source authority or artifact reference;
- agent identity consuming the context;
- role and capability reason for consumption;
- workflow stage where the context is relevant;
- delegation or escalation relationship where applicable;
- validation checkpoint where context is assessed;
- review evidence expected from context use;
- governance or frozen-area constraints.

Context consumption shall not define context storage, context transport, context APIs, context queues, context routing, context dispatch, context orchestration, context UI, context CLI, context persistence, context synchronization, or context runtime execution.

Context consumption does not make the agent the owner of context truth. The source authority or artifact remains authoritative for the consumed context.

## 12. Workflow Consumption Model

Workflow consumption connects runtime consumption to the prior AGENTS v2 workflow model without defining workflow runtime.

At the documentation level, workflow consumption may record:

- workflow reference;
- participating agent identity references;
- role and capability constraints;
- consumed runtime boundary reference;
- consumed engine capability reference when applicable;
- input context references;
- output artifact references;
- validation checkpoints;
- review checkpoints;
- handoff evidence;
- escalation conditions.

Workflow consumption shall not define scheduling, queues, dispatch, routing, orchestration, execution, messaging runtime, storage, APIs, CLI, UI, transport, platform adapters, or swarm behavior.

Workflow consumption does not transfer authority. Workflow consumption does not update ProjectStatus. Workflow consumption does not imply runtime implementation.

## 13. Delegation Consumption Model

Delegation consumption connects the prior AGENTS v2 delegation and escalation model to runtime and engine boundaries without creating runtime assignment behavior.

At the documentation level, delegation consumption may record:

- delegator identity reference;
- delegatee identity reference;
- delegation purpose;
- role and capability eligibility references;
- consumed runtime boundary or approved contract reference;
- consumed engine capability reference when applicable;
- context inputs;
- expected outputs;
- validation requirements;
- review requirements;
- escalation triggers;
- rejection conditions;
- governance constraints.

Delegation consumption shall not define task assignment by runtime, dispatch, routing, queue placement, scheduling, orchestration, messaging runtime, transport, APIs, storage, CLI, UI, platform adapters, swarm behavior, or execution.

Delegation consumption does not transfer authority, does not approve work, does not certify work, and does not update ProjectStatus.

## 14. Validation Consumption Model

Validation consumption describes how AGENTS v2 validation and review expectations may consume runtime and engine references as evidence boundaries.

At the documentation level, validation consumption may record:

- validation category;
- agent identity reference;
- role and capability reference;
- runtime boundary or approved contract reference;
- engine capability reference where applicable;
- context references;
- workflow or delegation references;
- evidence required;
- reviewer or review authority reference;
- prohibited implications;
- escalation conditions.

Validation consumption shall not certify runtime implementation, certify engine implementation, approve Engine RFC continuation, approve runtime execution, or modify ProjectStatus.

Validation confirms alignment with declared boundaries. It does not establish engine capability truth, execution truth, ProjectStatus truth, or governance approval.

## 15. Governance Boundaries

This document preserves the following governance boundaries:

1. Human Governance remains final.
2. This document is draft and non-canonical until reviewed, approved, and promoted.
3. This document consumes the AGENTS v2 parent and input documents without replacing them.
4. This document consumes Runtime Architecture without redefining it.
5. This document consumes Engine Platform capabilities only through Runtime or approved contracts.
6. This document does not redefine Governance, Standards, M.0, M.1, STD-010, Runtime, or Engine Platform.
7. This document does not approve, certify, promote, or canonicalize any AGENTS v2 behavior.
8. This document does not activate frozen areas.
9. Authority conflicts shall be escalated to Human Governance.

## 16. ProjectStatus Boundaries

`docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational state and frozen-area authority.

ProjectStatus boundary rules:

1. Agent does not own ProjectStatus truth.
2. This document does not update ProjectStatus.
3. This document does not recommend automatic ProjectStatus modification.
4. Runtime consumption does not imply ProjectStatus update authority.
5. Workflow consumption does not imply ProjectStatus update authority.
6. Delegation consumption does not imply ProjectStatus update authority.
7. Validation consumption does not imply ProjectStatus update authority.
8. Frozen areas remain frozen unless Human Governance explicitly activates them and roadmap state permits them.
9. Completion of this draft may be reported as documentation work, but ProjectStatus changes require a separate authorized ProjectStatus task.

## 17. Forbidden Content

This document forbids the following content:

- runtime implementation;
- runtime execution definition;
- scheduling definition;
- queue definition;
- dispatch definition;
- routing definition;
- orchestration definition;
- API definition;
- storage definition;
- CLI definition;
- UI definition;
- transport definition;
- messaging runtime definition;
- swarm behavior definition;
- multi-agent runtime activation;
- platform adapter definition;
- Engine RFC continuation;
- Context Engine RFC continuation;
- Runtime Architecture redefinition;
- Engine Platform redefinition;
- Governance redefinition;
- Standards redefinition;
- M.0 redefinition;
- M.1 redefinition;
- STD-010 redefinition;
- ProjectStatus update;
- approval, certification, promotion, or canonicalization claims.

## 18. Deferred Areas

The following areas are explicitly deferred:

- runtime implementation;
- runtime execution model;
- multi-agent runtime;
- swarm runtime;
- scheduling;
- queues;
- dispatch;
- routing;
- orchestration;
- APIs;
- storage;
- CLI;
- UI;
- transport;
- messaging runtime;
- platform adapters;
- Engine RFC continuation;
- operational-layer alignment;
- ProjectStatus update;
- certification and promotion.

Deferred areas require Human Governance activation, roadmap permission, and the appropriate governing documents before any future work begins.

## 19. Completion Checklist

This draft is complete when the following documentation checks pass:

- [ ] Purpose states that Agent consumes Runtime and does not replace Runtime.
- [ ] Purpose states that Runtime consumes Engine Platform and does not replace Engine Platform.
- [ ] Purpose states that Agent consumes Engine capabilities through Runtime or approved contracts.
- [ ] Purpose states that Agent does not own engine capability truth.
- [ ] Purpose states that Agent does not own execution truth.
- [ ] Purpose states that Agent does not own ProjectStatus truth.
- [ ] Purpose states that Runtime consumption does not imply runtime implementation.
- [ ] Purpose states that Runtime consumption does not imply Engine RFC continuation.
- [ ] Scope remains documentation-only.
- [ ] Non-goals forbid runtime implementation and runtime execution definition.
- [ ] Boundary model preserves agent, runtime, and engine authority separation.
- [ ] Capability, context, workflow, delegation, and validation sections remain consumption-only.
- [ ] Governance boundaries preserve Human Governance, ProjectStatus, roadmap, standards, runtime, and engine authorities.
- [ ] ProjectStatus boundaries confirm no ProjectStatus update.
- [ ] Forbidden content excludes scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, transport, messaging runtime, swarm behavior, platform adapters, Engine RFC work, and redefinition of higher authorities.
- [ ] Deferred areas are explicitly listed.
- [ ] Next AGENTS v2 document is identified without activating implementation.

## 20. Next AGENTS v2 Document

Recommended next AGENTS v2 document:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Operational-Readiness-and-Governance-Checklist.md
```

The next document should remain documentation-only and should consolidate readiness criteria for AGENTS v2 review without defining runtime implementation, runtime execution, scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, transport, messaging runtime, swarm behavior, platform adapters, Engine RFC continuation, ProjectStatus updates, or redefinitions of Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010.

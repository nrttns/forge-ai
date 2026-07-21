#AI-DOS — AGENTS v2 Agent Workflow Model

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-WORKFLOW-MODEL` |
| Title |AI-DOS — AGENTS v2 Agent Workflow Model |
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
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.WORKFLOW` |
| Scope | Documentation-level AGENTS v2 agent workflow model, workflow philosophy, participants, stages, state, inputs, outputs, handoffs, validation rules, review rules, and governance boundaries. |
| Out of Scope | Workflow runtime implementation, task execution, scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, swarm behavior, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | AGENTS v2 Architecture Foundation; AGENTS v2 Agent Identity and Registry; AGENTS v2 Agent Capability and Role Catalog; AGENTS v2 Agent Lifecycle and Governance Boundaries; AGENTS v2 Agent Communication and Coordination; AGENTS v2 Agent Validation and Review Model; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; identity, registry, role, capability, lifecycle, communication, coordination, validation, review, reporting, escalation, and deferred-scope models; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent workflow philosophy; documentation-level workflow model; workflow participant model; workflow stage model; workflow state model; workflow input model; workflow output model; workflow handoff model; workflow validation rules; workflow review rules; governance boundaries; forbidden-content list; deferred-scope checklist. |
| Related Specifications | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, AGENTS v2 identity, capability, lifecycle, communication, validation, and review inputs, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent workflow model for AI-DOS.

Its purpose is to describe a documentation-level workflow structure that relates future AGENTS v2 agent identities, roles, capabilities, lifecycle states, communication contracts, validation expectations, and review expectations without defining workflow runtime behavior or task execution.

Workflow does not imply execution. Workflow does not imply scheduling. Workflow does not imply routing. Workflow does not imply ProjectStatus update. Workflow handoff does not imply authority transfer. Workflow review does not imply certification.

This document is documentation-only. It does not activate AGENTS v2 runtime behavior, multi-agent runtime behavior, swarm runtime behavior, platform adapters, Engine RFC work, Runtime RFC work, or ProjectStatus updates.

## 2. Scope

This document covers:

- workflow philosophy;
- workflow as an architectural governance model only;
- workflow participants;
- workflow stages;
- workflow state model;
- workflow input model;
- workflow output model;
- workflow handoff points;
- workflow validation rules;
- workflow review rules;
- governance boundaries;
- ProjectStatus boundaries;
- forbidden content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only, technology-neutral, platform-independent, and parent-consuming.

## 3. Non-goals

This document does not define:

- workflow runtime;
- task execution;
- scheduling;
- queues;
- dispatch;
- routing;
- orchestration;
- APIs;
- storage;
- CLI behavior;
- UI behavior;
- runtime messaging;
- transport protocols;
- platform adapters;
- swarm behavior;
- multi-agent runtime behavior;
- Context Engine RFC or any Engine RFC work;
- Runtime Architecture, Engine Platform, Governance, Standards, M.0, M.1, or STD-010 replacements.

This document does not approve, certify, promote, canonicalize, activate, authorize, or implement any AGENTS v2 workflow, participant, stage, state, input, output, handoff, validation statement, or review finding.

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

The communication input document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md
```

The validation and review input document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md
```

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI-DOS/GOVERNANCE.md` remains the governance navigation authority.
4. `docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational state and frozen-area authority.
5. `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` remains the roadmap authority.
6. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
7. Identity and registry inputs define the traceable participant identities and registry references consumed by workflow participants.
8. Capability and role inputs define the role and capability constraints consumed by workflow stages.
9. Lifecycle and governance inputs define lifecycle state, activation, suspension, deactivation, approval, certification, ProjectStatus, frozen-area, and AI decision boundaries consumed by workflow state.
10. Communication and coordination inputs define participant interaction, context exchange, coordination principles, and communication validation inputs consumed by workflow handoffs.
11. Validation and review inputs define validation categories, review responsibilities, review outcomes, and prohibited implications consumed by workflow validation and review rules.
12. STD-010 governs this document's metadata requirements.
13. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 retain authority over their own domains.

This document shall not reinterpret AGENTS v2 planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

## 5. Workflow Philosophy

AGENTS v2 workflow is a documentation-level governance model for describing how future agent-related architectural work may be organized into traceable stages.

A workflow identifies logical progression, required inputs, expected outputs, validation checkpoints, review checkpoints, handoff evidence, and governance boundaries. It does not define how work is executed, scheduled, routed, dispatched, queued, orchestrated, stored, automated, exposed through APIs, presented through UI, or operated by a runtime.

Workflow shall remain:

- architectural;
- governance-bound;
- documentation-level;
- traceable;
- role-aware;
- capability-aware;
- lifecycle-aware;
- communication-aware;
- validation-aware;
- review-aware;
- technology-neutral;
- platform-independent;
- bounded by Human Governance, ProjectStatus, roadmap order, frozen-area constraints, and source-level task instructions.

Workflow does not grant authority. Workflow does not transfer authority. Workflow does not imply execution permission. Workflow does not imply scheduling permission. Workflow does not imply routing permission. Workflow does not imply ProjectStatus update authority.

## 6. Workflow Model

The AGENTS v2 workflow model defines a workflow as an architectural governance contract only.

A workflow contract may identify:

| Workflow Element | Required Meaning |
|:---|:---|
| Workflow Identifier | Stable documentation-level identifier for the workflow contract. |
| Purpose | Why the workflow contract exists. |
| Parent Foundation Reference | Required reference to the AGENTS v2 Architecture Foundation. |
| Participant References | Required identity, registry, role, capability, and lifecycle references for logical workflow participants. |
| Stage Set | Documentation-level stages used to reason about progression. |
| State Set | Documentation-level states used to reason about workflow status. |
| Required Inputs | Authorities, context, evidence, constraints, and prior outputs needed before the workflow may be interpreted. |
| Expected Outputs | Documentation-level artifacts, evidence, reports, or escalation records produced by the workflow model. |
| Handoff Points | Boundaries where one logical participant or stage passes evidence to another without transferring authority. |
| Validation Checkpoints | Documentation-level consistency checks derived from validation and review inputs. |
| Review Checkpoints | Documentation-level review readiness or review outcome points that do not imply certification. |
| Governance Boundary | Human Governance, ProjectStatus, roadmap, frozen-area, lifecycle, role, capability, and source-level task constraints. |
| Prohibited Interpretation | Explicit statement that workflow does not imply execution, scheduling, routing, authority transfer, certification, runtime behavior, implementation readiness, API readiness, storage readiness, or ProjectStatus update. |

This model shall not define task execution, scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, swarm behavior, platform adapters, Runtime implementation, or Engine implementation.

## 7. Workflow Participants

Workflow participants are documentation-level references to governed AGENTS v2 agent identities, registry entries, roles, capabilities, lifecycle states, communication participants, validators, and reviewers.

A workflow participant reference should identify:

- the agent identity or registry entry reference;
- the role reference;
- the capability declaration reference;
- the lifecycle state or lifecycle boundary;
- the communication participant responsibility;
- the validation responsibility, if any;
- the review responsibility, if any;
- the governance constraints that bound participation.

Participant reference does not imply activation, execution permission, ownership, approval authority, certification authority, scheduling authority, routing authority, or task assignment. A participant may be named in a workflow only as an architectural reference unless future Human Governance and roadmap state authorize implementation.

## 8. Workflow Stages

Workflow stages describe logical progression for documentation-level reasoning.

The stage set may include:

| Stage | Documentation-Level Meaning |
|:---|:---|
| Intake | Identify required authorities, task boundaries, source instructions, frozen-area constraints, and initial context. |
| Classification | Determine the task or artifact category and the applicable participant, role, capability, lifecycle, communication, validation, and review inputs. |
| Planning | Describe expected documentation-level progression, required evidence, handoff expectations, and validation checkpoints without scheduling or execution. |
| Drafting | Produce or revise documentation-level artifacts within approved scope and consumed authorities. |
| Handoff | Pass documentation-level evidence, context, or output references between logical participants or stages without transferring authority. |
| Validation | Check documentation-level completeness, consistency, traceability, scope compliance, and forbidden-implication avoidance. |
| Review | Assess review readiness or record review outcomes without approval, certification, promotion, canonicalization, or ProjectStatus update. |
| Closure | Produce completion evidence, risks, deferred scope, and recommended next steps without self-certification or automatic status changes. |

These stages are not runtime states, queues, scheduler phases, dispatch rules, routing rules, orchestration steps, API flows, storage transactions, CLI commands, or UI views.

## 9. Workflow State Model

Workflow state is a documentation-level status label used to reason about where a workflow contract stands.

Permitted documentation-level states may include:

| State | Meaning |
|:---|:---|
| Proposed | The workflow concept has been identified but not validated. |
| Scoped | Required authorities, boundaries, participants, inputs, and non-goals have been identified. |
| In Draft | Documentation-level workflow content is being drafted within approved scope. |
| Validation Ready | Required documentation evidence appears complete enough for validation checks. |
| Validation Blocked | A conflict, missing authority, unclear state, frozen-area risk, or scope ambiguity blocks validation. |
| Review Ready | Validation evidence supports requesting review, without implying review acceptance. |
| Review Blocked | Review cannot proceed because required evidence, authority, scope, lifecycle, or governance conditions are unresolved. |
| Deferred | The workflow concept or portion of the workflow is postponed pending future governance, roadmap, runtime, platform, or implementation authorization. |
| Closed | Documentation-level closure evidence has been recorded, without implying approval, certification, promotion, implementation, or ProjectStatus update. |

Workflow state does not represent runtime execution state. Workflow state does not imply scheduling. Workflow state does not imply routing. Workflow state does not imply ProjectStatus update.

## 10. Workflow Input Model

A workflow input is documentation-level information required to interpret, validate, or review a workflow contract.

Workflow inputs may include:

- parent foundation reference;
- identity and registry reference;
- role and capability reference;
- lifecycle and governance boundary reference;
- communication and coordination reference;
- validation and review reference;
- governance navigation input;
- ProjectStatus and frozen-area input;
- roadmap input;
- source-level task instruction;
- documentation context;
- required evidence from prior stages;
- escalation records or known risks.

Workflow inputs do not authorize execution, scheduling, routing, dispatch, orchestration, API behavior, storage behavior, platform integration, swarm behavior, certification, or ProjectStatus updates.

## 11. Workflow Output Model

A workflow output is documentation-level evidence produced by a workflow contract or workflow stage.

Workflow outputs may include:

- drafted documentation content;
- authority-consumption notes;
- participant and role mapping notes;
- capability-boundary notes;
- lifecycle-boundary notes;
- communication or handoff evidence;
- validation findings;
- review readiness notes;
- review findings;
- deferred-scope notes;
- risk notes;
- completion reports;
- recommended next steps.

Workflow outputs do not constitute approval, certification, promotion, canonicalization, runtime authorization, implementation readiness, scheduling readiness, routing readiness, API readiness, storage readiness, platform-adapter readiness, swarm activation, or ProjectStatus updates.

## 12. Workflow Handoff Points

A workflow handoff point is a documentation-level boundary where evidence, context, or an output reference moves from one logical participant, role, stage, or review point to another.

A handoff point should identify:

- sending participant or stage reference;
- receiving participant or stage reference;
- transferred evidence or context;
- authority and governance constraints;
- lifecycle and capability boundaries;
- validation obligations before or after handoff;
- review obligations before or after handoff;
- escalation conditions;
- prohibited interpretations.

Workflow handoff does not imply authority transfer. Workflow handoff does not imply ownership transfer. Workflow handoff does not imply task assignment. Workflow handoff does not imply execution. Workflow handoff does not imply scheduling. Workflow handoff does not imply routing.

Ambiguous, conflicting, untraceable, frozen-area-crossing, or authority-transferring handoff interpretations shall stop and escalate to Human Governance or an authorized governance process.

## 13. Workflow Validation Rules

A workflow is validation-ready only when documentation-level evidence shows that:

1. The workflow consumes the AGENTS v2 Architecture Foundation without redefining it.
2. Required identity and registry references are explicit and traceable.
3. Required role and capability references are explicit and bounded.
4. Required lifecycle and governance boundaries are explicit.
5. Required communication or coordination references are explicit where handoffs are described.
6. Required validation and review inputs are consumed without redefining validation or review authority.
7. Human Governance remains final.
8. ProjectStatus remains operational state and is not modified automatically.
9. Roadmap order and frozen-area constraints are preserved.
10. Workflow does not imply execution.
11. Workflow does not imply scheduling.
12. Workflow does not imply routing.
13. Workflow handoff does not imply authority transfer.
14. Workflow review does not imply certification.
15. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 are not redefined.
16. Forbidden content is absent.
17. Deferred areas remain deferred.

Validation does not imply approval, certification, promotion, canonicalization, implementation readiness, runtime readiness, or ProjectStatus update.

## 14. Workflow Review Rules

Workflow review is a documentation-level assessment of whether a workflow contract is understandable, complete, traceable, bounded, and ready for further governance consideration.

A workflow review may assess:

- authority alignment;
- parent and input consumption;
- participant traceability;
- role and capability alignment;
- lifecycle-boundary alignment;
- communication and handoff clarity;
- validation evidence completeness;
- review outcome clarity;
- ProjectStatus and frozen-area preservation;
- forbidden-content absence;
- deferred-scope clarity;
- risk visibility.

Workflow review does not imply certification. Workflow review does not imply approval. Workflow review does not imply promotion. Workflow review does not imply canonical status. Workflow review does not imply runtime authorization, implementation authorization, scheduling authorization, routing authorization, or ProjectStatus update.

Review findings shall escalate when they identify authority conflict, roadmap conflict, frozen-area ambiguity, missing required authority, unclear lifecycle boundary, unauthorized implementation scope, unauthorized swarm scope, or ProjectStatus update pressure.

## 15. Governance Boundaries

AGENTS v2 workflow remains subordinate to Human Governance, repository bootloader rules, Governance Atlas navigation, ProjectStatus operational state, Development Phases roadmap order, parent AGENTS v2 foundation boundaries, source-level instructions, and the input AGENTS v2 documents.

Governance boundaries:

1. Human Governance remains final.
2. Workflow shall not approve, certify, promote, canonicalize, activate, or implement any agent concept.
3. Workflow shall not redefine AGENTS v1, AGENTS v2 parent foundation, identity, capability, lifecycle, communication, validation, or review inputs.
4. Workflow shall not redefine Runtime Architecture, Engine Platform, Governance, Standards, M.0, M.1, or STD-010.
5. Workflow shall not introduce task execution, scheduling, queues, dispatch, routing, orchestration, APIs, storage, CLI, UI, swarm behavior, or platform adapters.
6. Workflow shall preserve role, capability, lifecycle, communication, validation, review, escalation, and reporting obligations.
7. Workflow shall stop and escalate when authority, roadmap, frozen-area, lifecycle, participant, validation, review, or ProjectStatus boundaries are unclear.

## 16. ProjectStatus Boundaries

ProjectStatus is operational state only. This document does not modify ProjectStatus and does not recommend automatic ProjectStatus modification.

Workflow does not imply ProjectStatus update. Workflow state does not imply ProjectStatus state. Workflow closure does not imply milestone completion. Workflow review does not imply ProjectStatus eligibility. Workflow validation does not imply ProjectStatus eligibility.

A ProjectStatus update may occur only under the ProjectStatus update policy and only when Human Governance explicitly requests it, when a milestone, stage, phase, review, or certification has completed under authorized governance, or when the active task is a dedicated ProjectStatus / ProjectStateUpdater task.

## 17. Forbidden Content

This document forbids:

- workflow runtime implementation;
- task execution definition;
- scheduling definition;
- queue definition;
- dispatch definition;
- routing definition;
- orchestration definition;
- API definition;
- storage definition;
- CLI definition;
- UI definition;
- swarm behavior definition;
- platform adapter definition;
- Context Engine RFC or any Engine RFC continuation;
- Runtime Architecture redefinition;
- Engine Platform redefinition;
- Governance redefinition;
- Standards redefinition;
- M.0 redefinition;
- M.1 redefinition;
- STD-010 redefinition;
- ProjectStatus updates;
- authority transfer by handoff;
- certification by review;
- approval, promotion, canonicalization, or activation claims.

## 18. Deferred Areas

The following areas remain deferred until future Human Governance authorization and roadmap alignment:

- workflow runtime;
- executable workflow behavior;
- task execution model;
- scheduling model;
- queue model;
- dispatch model;
- routing model;
- orchestration model;
- API contracts;
- storage models;
- CLI behavior;
- UI behavior;
- platform adapters;
- multi-agent runtime;
- swarm runtime;
- enterprise governance workflow automation;
- ProjectStatus automation;
- certification workflow automation;
- implementation validation tooling.

## 19. Completion Checklist

This document is complete at the draft level when:

- STD-010 metadata is present;
- purpose, scope, and non-goals are explicit;
- parent foundation and all required input documents are named;
- workflow philosophy is documentation-only and governance-bound;
- workflow model is defined without runtime, execution, scheduling, routing, dispatch, orchestration, API, storage, CLI, UI, swarm, or platform-adapter content;
- workflow participants are traceable to identity, registry, role, capability, lifecycle, communication, validation, and review inputs;
- workflow stages are logical documentation stages only;
- workflow state is not runtime state and does not imply ProjectStatus state;
- workflow inputs and outputs are documentation-level only;
- workflow handoff does not imply authority transfer;
- workflow validation rules preserve parent and input authority;
- workflow review rules state that review does not imply certification;
- governance boundaries and ProjectStatus boundaries are explicit;
- forbidden content is absent;
- deferred areas are listed;
- next AGENTS v2 document is identified.

## 20. Next AGENTS v2 Document

The recommended next AGENTS v2 document is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md
```

That future document should remain documentation-only and should define delegation and escalation boundaries without implementing dispatch, routing, scheduling, orchestration, queues, runtime behavior, APIs, storage, platform adapters, swarm behavior, certification workflow, or ProjectStatus updates.

#AI-DOS — AGENTS v2 Agent Lifecycle and Governance Boundaries

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-LIFECYCLE-AND-GOVERNANCE-BOUNDARIES` |
| Title |AI-DOS — AGENTS v2 Agent Lifecycle and Governance Boundaries |
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
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.LIFECYCLE-GOVERNANCE-BOUNDARIES` |
| Scope | Documentation-level AGENTS v2 agent lifecycle model, lifecycle states, lifecycle transitions, activation, suspension, deactivation, Human Governance boundaries, AI decision boundaries, review, approval, certification, ProjectStatus, frozen-area, and validation boundaries. |
| Out of Scope | Lifecycle runtime implementation, scheduling, queues, dispatch, routing, messaging, execution, swarm behavior, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`; `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md`; `docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | AGENTS v2 Architecture Foundation; AGENTS v2 Agent Identity and Registry; AGENTS v2 Agent Capability and Role Catalog; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; AGENTS v1 operating architecture; AGENTS v2 planning inputs; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; AGENTS v2 identity, registry, lifecycle-state, ownership, governance, capability-link, role-reference, and validation models; AGENTS v2 capability and role definitions; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent lifecycle model; lifecycle state definitions; lifecycle transition rules; activation, suspension, and deactivation rules; Human Governance, AI decision, review, approval, certification, ProjectStatus, and frozen-area boundaries; lifecycle validation rules; forbidden-content list; deferred-scope checklist. |
| Related Specifications | `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, AGENTS v2 Agent Identity and Registry, AGENTS v2 Agent Capability and Role Catalog, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent lifecycle and governance-boundary model for AI-DOS.

Its purpose is to describe how future AGENTS v2 agent identities, registry entries, roles, and capability declarations may move through governed lifecycle states at the documentation and architecture-specification level.

This document refines the lifecycle concepts introduced by `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md`, consumes identity and registry expectations from `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`, and consumes capability and role expectations from `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md`.

This document is documentation-only. It does not implement lifecycle runtime, scheduling, queues, dispatch, routing, messaging, execution, swarm behavior, platform adapters, Engine RFC work, or ProjectStatus updates.

---

## 2. Scope

This document covers:

- the AGENTS v2 agent lifecycle model;
- lifecycle state definitions;
- lifecycle transition rules;
- agent activation rules;
- agent suspension rules;
- agent deactivation rules;
- Human Governance boundaries;
- AI decision boundaries;
- review, approval, and certification boundaries;
- ProjectStatus boundaries;
- frozen-area boundaries;
- lifecycle validation rules;
- forbidden content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only and parent-consuming. This document defines lifecycle vocabulary, governance constraints, decision boundaries, and validation expectations only.

---

## 3. Non-goals

This document does not:

- implement lifecycle runtime;
- implement lifecycle automation;
- define scheduling, queues, dispatch, routing, messaging, or execution;
- define runtime coordination;
- define multi-agent runtime behavior;
- define swarm behavior;
- define platform adapters;
- define storage, databases, APIs, CLIs, user interfaces, adapters, or service contracts;
- continue Context Engine RFC or any Engine RFC work;
- redefine Runtime Architecture;
- redefine the Engine Platform;
- redefine Governance, Standards, M.0, M.1, or STD-010;
- redefine AGENTS v1;
- activate frozen areas;
- modify ProjectStatus;
- approve, certify, promote, or canonicalize any AGENTS v2 document, agent identity, registry entry, role, capability, or lifecycle state.

---

## 4. Authority and Inputs

The parent foundation document for this specification is:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md
```

The identity and registry input document for this specification is:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md
```

The capability and role input document for this specification is:

```text
docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md
```

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI/GOVERNANCE.md` remains the governance navigation authority.
4. `docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational state and frozen-area authority.
5. `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` remains the roadmap authority.
6. `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
7. `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md` provides identity, registry, metadata, lifecycle-state, ownership, governance, and validation inputs.
8. `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md` provides capability, role, assignment, validation, reporting, and escalation inputs.
9. STD-010 governs this document's metadata requirements.
10. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 retain authority over their own domains.

This document shall not reinterpret AGENTS v2 planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

---

## 5. Agent Lifecycle Model

The AGENTS v2 agent lifecycle model describes the governance state of an agent identity, registry entry, role assignment, and capability linkage.

A lifecycle state records whether an agent identity is proposed, drafted, review-ready, approved for a bounded use, active within an explicitly authorized scope, suspended, deprecated, retired, or rejected.

The lifecycle model is a governance model, not an execution model. It does not describe process scheduling, work queues, message routing, dispatch, runtime orchestration, or swarm coordination.

Lifecycle records shall preserve:

| Lifecycle Concern | Required Meaning |
|:---|:---|
| Identity | The governed agent identity affected by the lifecycle state. |
| Registry Entry | The registry record where lifecycle state is recorded. |
| Role Assignment | The role reference whose use is affected by lifecycle state. |
| Capability Linkage | Capability declarations whose use is affected by lifecycle state. |
| Governing Authority | Human Governance or approved governance process responsible for the lifecycle decision. |
| Evidence | Review, approval, validation, suspension, deactivation, or retirement evidence. |
| Scope | Permitted and prohibited use boundaries for the lifecycle state. |
| Validation | Checks required before entering or leaving the state. |
| Traceability | Stable reference to the decision, review record, or registry evidence. |

Lifecycle state does not grant authority by itself. Authority remains governed by Human Governance, the repository bootloader, Governance Atlas navigation, ProjectStatus, roadmap constraints, task-specific authorities, and source-level instructions.

---

## 6. Agent Lifecycle States

AGENTS v2 lifecycle states are documentation-level governance states.

| State | Meaning | Required Evidence | Boundary |
|:---|:---|:---|:---|
| Proposed | An agent identity, role assignment, or capability linkage has been suggested but not drafted for review. | Proposal rationale and authority context. | No activation, runtime use, certification, or ProjectStatus change. |
| Draft | The lifecycle record exists as a draft architecture or registry artifact. | Draft metadata, owner, scope, non-goals, and required authorities. | Draft status does not imply approval or active use. |
| Review Ready | The record is prepared for Human Governance / Framework Governance review. | Completed validation checklist and unresolved-risk summary. | Review readiness is not approval. |
| In Review | The record is under formal or informal governance review. | Review request or review evidence. | AI may support evidence gathering but shall not approve. |
| Approved | Human Governance or authorized governance process has approved the record for a defined scope. | Approval evidence, scope, constraints, and effective date if applicable. | Approval is bounded and does not imply runtime implementation. |
| Active | The approved record is allowed for a specific authorized documentation or operational use within defined boundaries. | Activation decision, validation result, scope, and constraints. | Active state does not authorize frozen areas or runtime behavior unless separately authorized. |
| Suspended | Use is temporarily paused because of risk, review finding, scope conflict, ambiguity, or governance decision. | Suspension reason, authority, scope affected, and reinstatement criteria. | Suspended records shall not be used as active authority. |
| Deprecated | The record remains historically traceable but is no longer preferred for new use. | Deprecation rationale and replacement or transition guidance if available. | Deprecated records shall not be silently reused or treated as current guidance. |
| Retired | The record is no longer valid for use except historical audit or traceability. | Retirement decision, authority, and archival reference. | Retired records shall not be activated without a new governance decision. |
| Rejected | The record was reviewed and not accepted. | Rejection rationale and authority. | Rejected records shall not be treated as pending, approved, or active. |

Additional lifecycle states require parent-foundation alignment, identity/registry alignment, capability/role alignment, governance review, and validation that the new state does not redefine Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010.

---

## 7. Agent Lifecycle Transitions

Lifecycle transitions are governed changes from one lifecycle state to another.

Permitted documentation-level transitions include:

| From | To | Minimum Condition |
|:---|:---|:---|
| Proposed | Draft | Human Governance instruction, approved governance process, or authorized documentation task. |
| Draft | Review Ready | Metadata, scope, non-goals, authority inputs, forbidden content, deferred areas, and validation checklist are complete. |
| Review Ready | In Review | Review is requested or accepted by Human Governance / Framework Governance. |
| In Review | Approved | Human Governance or authorized governance process approves the record with explicit scope. |
| Approved | Active | Activation rules are satisfied and active use is explicitly authorized. |
| Active | Suspended | Risk, governance conflict, scope violation, validation failure, roadmap conflict, frozen-area concern, or Human Governance decision requires pause. |
| Suspended | Active | Reinstatement criteria are satisfied and Human Governance or authorized process explicitly reactivates the record. |
| Approved | Deprecated | Human Governance or authorized process marks the record as superseded, obsolete, or no longer preferred. |
| Deprecated | Retired | Human Governance or authorized process ends valid use and preserves historical traceability. |
| Proposed / Draft / Review Ready / In Review | Rejected | Human Governance or authorized process rejects the record. |
| Any non-retired state | Suspended | A safety, governance, authority, validation, or frozen-area concern requires immediate pause. |

Transition rules:

1. AI agents shall not approve, activate, suspend, deprecate, retire, reject, certify, or promote lifecycle records by themselves.
2. Each transition shall identify the affected identity, registry entry, role assignment, capability linkage, authority, evidence, scope, and date.
3. Transitions shall preserve traceability to the prior state.
4. Transitions shall not modify ProjectStatus unless Human Governance explicitly instructs it or a dedicated ProjectStatus task is active.
5. Transitions shall not activate frozen areas.
6. Transitions shall not define runtime execution, scheduling, queues, dispatch, routing, messaging, swarm behavior, or platform adapters.

---

## 8. Agent Activation Rules

Activation is the governed decision that permits an approved agent identity, registry entry, role assignment, or capability linkage to be used within an explicitly bounded scope.

Activation requires:

1. an approved lifecycle record;
2. a valid agent identity;
3. a registry entry with current metadata;
4. role assignment validation;
5. capability linkage validation;
6. documented permitted and prohibited scope;
7. frozen-area check;
8. roadmap and ProjectStatus check;
9. unresolved-risk review;
10. Human Governance or authorized governance-process decision.

Activation shall not:

- create runtime execution behavior;
- define scheduling, queues, dispatch, routing, messaging, or execution;
- permit swarm behavior;
- permit platform adapters;
- continue Engine RFC work;
- modify ProjectStatus automatically;
- override task-specific authorities, source-level instructions, roadmap order, or frozen-area boundaries.

Activation may be bounded by document, task type, role, capability category, authority set, time period, review cycle, validation result, or explicit Human Governance instruction.

---

## 9. Agent Suspension Rules

Suspension is the governed pause of an active or otherwise usable lifecycle record.

Suspension is required when:

- authority conflict is detected;
- current phase, stage, objective, next queue, or frozen-area boundary is unclear;
- lifecycle evidence is missing or inconsistent;
- role assignment conflicts with capability constraints;
- capability linkage exceeds approved scope;
- review findings identify unresolved risk;
- ProjectStatus or roadmap constraints would be violated;
- frozen areas would be affected;
- Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010 would be redefined;
- Human Governance instructs suspension.

Suspension records shall include:

| Field | Required Content |
|:---|:---|
| Suspended Item | Agent identity, registry entry, role assignment, or capability linkage affected. |
| Reason | Concrete reason for suspension. |
| Authority | Human Governance or authorized process invoking suspension. |
| Scope | Whether suspension is global, document-specific, task-specific, role-specific, or capability-specific. |
| Evidence | Review finding, validation failure, conflict, risk, or instruction. |
| Reinstatement Criteria | Conditions required before reactivation. |

AI agents may recommend suspension when they detect risk or conflict. AI agents shall not make final suspension authority claims unless Human Governance or an authorized governance process has made the decision.

---

## 10. Agent Deactivation Rules

Deactivation ends active use of an agent lifecycle record within the affected scope.

Deactivation may result in:

- return from Active to Approved when active use ends but the approved record remains valid;
- transition from Active to Suspended when immediate pause is required;
- transition from Approved or Active to Deprecated when the record is no longer preferred;
- transition from Deprecated to Retired when valid use is ended;
- transition to Rejected when a draft or review candidate is not accepted.

Deactivation requires:

1. affected item identification;
2. deactivation reason;
3. authority decision or authorized governance-process evidence;
4. effective scope;
5. downstream-use warning if applicable;
6. traceability record;
7. confirmation that ProjectStatus is not modified unless explicitly authorized.

Deactivation shall not delete historical traceability. Deprecated, retired, suspended, and rejected records shall remain auditable unless a future approved governance policy defines archival handling.

---

## 11. Human Governance Boundaries

Human Governance retains final authority over AGENTS v2 lifecycle decisions.

Human Governance controls:

- approval of lifecycle models and lifecycle-state changes;
- authorization of active use;
- suspension, deactivation, deprecation, retirement, and rejection decisions;
- promotion and canonicalization decisions;
- certification decisions;
- activation of future phases or frozen areas;
- interpretation of unresolved authority conflicts;
- authorization of ProjectStatus updates.

No AGENTS v2 lifecycle record, role, capability, registry entry, or validation result may replace Human Governance.

---

## 12. AI Decision Boundaries

AI agents may support lifecycle work by:

- reading governed documents;
- classifying tasks;
- drafting lifecycle documentation when explicitly instructed;
- identifying required authorities;
- checking metadata completeness;
- validating parent and input alignment;
- identifying forbidden content;
- reporting frozen-area risks;
- recommending suspension, deactivation, review, or escalation;
- preparing completion reports.

AI agents shall not:

- approve lifecycle states;
- activate agents;
- suspend agents as a final authority;
- deactivate, deprecate, retire, or reject agents as a final authority;
- certify lifecycle records;
- promote documents to canonical status;
- update ProjectStatus without explicit authorization;
- unfreeze frozen areas;
- define runtime execution, scheduling, queues, dispatch, routing, messaging, swarm behavior, or platform adapters;
- continue Engine RFC work unless explicitly tasked within active roadmap scope.

---

## 13. Review / Approval / Certification Boundaries

Review, approval, and certification are separate lifecycle concerns.

| Boundary | Meaning | AI Limit |
|:---|:---|:---|
| Review | Evaluation of a lifecycle record against authorities, scope, metadata, roadmap, and validation requirements. | AI may prepare evidence and findings but shall not make final review authority claims. |
| Approval | Human Governance or authorized process accepts a lifecycle record for a defined scope. | AI shall not approve. |
| Certification | Formal confirmation that a record satisfies certification criteria. | AI shall not certify. |
| Promotion | Movement toward canonical or authoritative status. | AI shall not promote or canonicalize. |

A record may be review-ready without being approved. A record may be approved without being certified. A record may be certified only through the applicable governance process. Certification status shall not be inferred from successful drafting, validation, review preparation, or completion checklist status.

---

## 14. ProjectStatus Boundaries

`docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational source of truth for current phase, current stage, current objective, next queue, frozen areas, and status-update policy.

This document does not modify ProjectStatus.

Lifecycle work shall preserve these boundaries:

1. Lifecycle documentation does not create a ProjectStatus update.
2. Lifecycle state changes do not automatically modify ProjectStatus.
3. ProjectStatus updates require Human Governance instruction, a dedicated ProjectStatus task, or an applicable status-update policy condition.
4. AI agents may recommend ProjectStatus updates in completion reports when appropriate, but shall not apply them automatically.
5. AGENTS v2 lifecycle state shall not be treated as roadmap activation.
6. Active lifecycle status shall not bypass the current phase, current stage, next queue, or frozen-area list.

---

## 15. Frozen-Area Boundaries

Frozen areas remain frozen unless Human Governance explicitly activates them and roadmap state permits the work.

Lifecycle work shall not activate or define:

- Multi-Agent Runtime;
- Swarm Runtime;
- Platform Adapters;
- AI Operational Layer alignment;
- Legacy Migration;
- RC2 relocation;
- runtime execution infrastructure;
- scheduling, queues, dispatch, routing, messaging, or execution;
- platform-specific integration behavior.

If lifecycle drafting, validation, review, activation, suspension, deactivation, or role/capability interpretation appears to require a frozen area, work shall stop and escalate.

---

## 16. Lifecycle Validation Rules

Lifecycle validation shall confirm:

1. STD-010 metadata is present, complete, and uses the required table shape.
2. The parent foundation document is consumed and not redefined.
3. The identity and registry input document is consumed and not redefined.
4. The capability and role input document is consumed and not redefined.
5. Human Governance remains final.
6. AI decision boundaries are explicit.
7. Review, approval, certification, and promotion boundaries are distinct.
8. ProjectStatus is not modified.
9. Roadmap order is not bypassed.
10. Frozen areas remain frozen.
11. Lifecycle states do not implement runtime behavior.
12. Lifecycle transitions do not define scheduling, queues, dispatch, routing, messaging, execution, swarm behavior, or platform adapters.
13. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 are not redefined.
14. Forbidden content is absent or explicitly deferred.
15. Deferred areas are listed and require future authorization.

Validation results are evidence for review. They are not approval, certification, promotion, activation, or ProjectStatus updates.

---

## 17. Forbidden Content

This document and downstream lifecycle records shall not contain:

- lifecycle runtime implementation;
- executable lifecycle algorithms;
- scheduling rules;
- queue definitions;
- dispatch rules;
- routing rules;
- messaging protocols;
- execution procedures;
- swarm behavior;
- platform-adapter definitions;
- storage schemas, database schemas, APIs, CLIs, UIs, or service contracts;
- Engine RFC continuation;
- Runtime Architecture redefinition;
- Engine Platform redefinition;
- Governance redefinition;
- Standards redefinition;
- M.0 or M.1 redefinition;
- STD-010 redefinition;
- automatic ProjectStatus update instructions;
- approval, certification, promotion, or canonicalization claims made by AI.

Forbidden content shall be removed or deferred before review.

---

## 18. Deferred Areas

The following areas are deferred until explicitly authorized by Human Governance, roadmap state, and task-specific authority:

- lifecycle runtime implementation;
- lifecycle automation;
- scheduler design;
- queue design;
- dispatch design;
- routing design;
- messaging design;
- execution design;
- multi-agent runtime;
- swarm runtime;
- platform adapters;
- storage, database, API, CLI, UI, and service-contract design;
- operational-layer alignment;
- legacy migration;
- RC2 relocation;
- Engine RFC work;
- certification process implementation;
- registry implementation;
- ProjectStatus updates.

Deferred areas require explicit Human Governance authorization, roadmap alignment, and task-specific authority review before any future work begins.

---

## 19. Completion Checklist

- [x] Purpose is defined.
- [x] Scope is defined.
- [x] Non-goals are defined.
- [x] Authority and inputs are defined.
- [x] Agent lifecycle model is defined.
- [x] Agent lifecycle states are defined.
- [x] Agent lifecycle transitions are defined.
- [x] Agent activation rules are defined.
- [x] Agent suspension rules are defined.
- [x] Agent deactivation rules are defined.
- [x] Human Governance boundaries are defined.
- [x] AI decision boundaries are defined.
- [x] Review, approval, and certification boundaries are defined.
- [x] ProjectStatus boundaries are defined.
- [x] Frozen-area boundaries are defined.
- [x] Lifecycle validation rules are defined.
- [x] Forbidden content is defined.
- [x] Deferred areas are defined.
- [x] STD-010 metadata block is present.
- [x] Parent foundation is consumed without redefinition.
- [x] Identity and registry input is consumed without redefinition.
- [x] Capability and role input is consumed without redefinition.
- [x] Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 are not redefined.
- [x] Runtime implementation, scheduling, queues, dispatch, routing, messaging, execution, swarm behavior, and platform adapters are not defined.
- [x] ProjectStatus is not modified.
- [x] Next AGENTS v2 document is identified.

---

## 20. Next AGENTS v2 Document

Recommended next AGENTS v2 document:

```text
AGENTS-v2-Agent-Validation-and-Review-Model.md
```

The next document should define documentation-level validation and review expectations for AGENTS v2 agent identities, registry entries, roles, capabilities, lifecycle records, and governance-boundary evidence.

It should remain documentation-only and shall not define lifecycle runtime, scheduling, queues, dispatch, routing, messaging, execution, swarm behavior, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, or ProjectStatus updates.

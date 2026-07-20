# AI-DOS — AGENTS v2 Capability Maturity Model

> Enterprise Edition v2.0.0-draft

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | AI-DOS-AGENTS-V2-CAPABILITY-MATURITY-MODEL |
| Title | AGENTS v2 Capability Maturity Model |
| Version | 2.0.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical subordinate capability model |
| Classification | Agent Capability Maturity Model |
| Document Type | AI-DOS Agent Architecture Capability Model |
| Owner | AI-DOS Agent Architecture |
| Maintainers | Framework Architecture Team |
| Review Authority | AI-DOS Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-13 |
| Traceability ID | AI-DOS-AGENTS-V2-CAPABILITY-MATURITY-MODEL |
| Scope | Reusable AGENTS v2 architecture only; maturity states, readiness criteria, evidence requirements, acceptance boundaries, capability availability, and deferred activation boundaries. |
| Out of Scope | Target Project planning; Target Project lifecycle; ProjectStatus; implementation schedule; Runtime or Engine redefinition; Operational Core activation. |
| Normative Authority | Human Governance; AI-DOS Governance; AGENTS-v2 family master; AGENTS-v2 architecture foundation. |
| Normative References | `docs/AI/Architecture/Agents/AGENTS-v2.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md`; applicable Agent domain authorities; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; A.4 Engine Platform; relevant A.5 specializations where applicable; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`. |
| Dependencies | Applicable Agent domain authorities; A.3 Runtime; A.4 Engine Platform; relevant A.5 specializations where applicable. |
| Consumes | Agent architecture authorities and validation evidence. |
| Produces | Maturity/readiness model. |
| Related Specifications | AGENTS v2 document family; `AGENTS-v2-Capability-Evolution-Model.md`. |
| Supersedes | Historical `AGENTS-V2-DevelopmentPhases.md` path and planning-oriented title. |
| Superseded By | None |
| Promotion Requirements | Human Governance acceptance based on evidence requirements in this model. |
| Certification Status | Not certified |

---

## 1. Purpose

This artifact answers one question: how mature is the reusable AGENTS v2 architecture, and what evidence is required to recognize the next maturity condition?

It does not define repository work order, Target Project planning, delivery timing, or implementation sequencing. Capability dependencies and unlock relationships are owned by `AGENTS-v2-Capability-Evolution-Model.md`.

---

## 2. Authority Boundary

This model may recognize maturity conditions for existing AGENTS v2 architecture authorities. It must not redefine Agent identity, capabilities, lifecycle architecture, communication, workflow, delegation, Runtime consumption, validation, review, A.3 Runtime, A.4 Engine Platform, A.5 Engine Specializations, Operational Core, or Human Governance.

---

## 3. Maturity State Model

| Maturity State | Architecture Readiness | Capability Condition | Evidence Requirement | Acceptance Boundary |
|:---|:---|:---|:---|:---|
| Foundation Recognized | Architecture foundation is described and bounded. | Architecture foundation, identity, registry, capability catalog, lifecycle governance, and communication surfaces are available as draft reusable authorities. | Metadata-compliant documents exist; authority boundaries are stated; cross-references resolve; governance review records known gaps. | Human Governance may treat the foundation as an architecture reference, not as activated operation. |
| Collaboration Ready | Review, workflow, and Runtime consumption models are aligned with the foundation. | Validation, review, workflow, and Runtime consumption capabilities are available for governed architectural use. | Domain authorities identify consumed sources, produced evidence, review boundaries, and Runtime consumption constraints. | Collaboration capability remains evidence-gated and cannot activate Operational Core behavior. |
| Coordination Ready | Coordination concepts can consume stable collaboration capabilities. | Coordinator, capability routing, and task distribution capabilities may be recognized as architecturally prepared when domain evidence exists. | Dependency evidence shows collaboration readiness, routing constraints, escalation behavior, and non-overlap with Human Governance. | Coordination readiness does not approve autonomous execution. |
| Planning Capability Ready | Goal decomposition and planning architecture can consume coordination readiness. | Planning capability is available as reusable architecture only when prerequisites are accepted. | Evidence shows planning inputs, outputs, constraints, and governance acceptance boundaries without Target Project planning dependency. | Planning capability cannot mutate Target Project state or schedules. |
| Execution Capability Ready | Execution and recovery models can consume accepted planning capability. | Execution and recovery capabilities are architecturally available under validation and escalation boundaries. | Evidence shows bounded execution rules, recovery triggers, validation requirements, and safe-stop conditions. | Execution readiness is not Operational Core activation. |
| Merge Capability Ready | Merge and conflict-resolution models can consume accepted execution capability. | Merge and conflict resolution capabilities are architecturally available. | Evidence shows conflict detection, review requirements, provenance retention, and governance escalation. | Merge readiness does not grant self-approval. |
| Swarm Capability Ready | Multi-agent consensus and mission coordination can consume accepted merge capability. | Swarm architecture, consensus, and mission coordination capabilities are architecturally available. | Evidence shows coordination safety, consensus limits, authority separation, and reviewability. | Swarm readiness requires explicit Human Governance acceptance before use. |
| Enterprise Capability Ready | Federation and distributed-agent models can consume accepted swarm capability. | Enterprise platform, repository federation, and distributed-agent capabilities are architecturally available. | Evidence shows external Target isolation, federation boundaries, traceability, and governance controls. | Enterprise readiness does not imply universal deployment or release timing. |

---

## 4. Capability Availability by Maturity State

| Capability Area | First Recognized Maturity State | Deferred Capability Boundary |
|:---|:---|:---|
| Architecture foundation | Foundation Recognized | Runtime activation remains deferred to Runtime and Engine authorities. |
| Identity and registry | Foundation Recognized | Registry execution remains bounded by Agent identity authority and Runtime consumption model. |
| Capability and role catalog | Foundation Recognized | Role invocation remains evidence-gated. |
| Agent lifecycle architecture | Foundation Recognized | The reusable Agent lifecycle architecture may be referenced; Target Project lifecycle remains out of scope. |
| Communication and coordination surfaces | Foundation Recognized | Operational coordination remains deferred until Coordination Ready. |
| Validation and review | Collaboration Ready | Review remains advisory until Human Governance accepts outcomes. |
| Workflow model | Collaboration Ready | Workflow execution remains bounded and non-autonomous unless separately authorized. |
| Runtime consumption | Collaboration Ready | A.3 Runtime and A.4 Engine definitions remain external authorities. |
| Coordinator and routing | Coordination Ready | Autonomous distribution remains deferred. |
| Planning architecture | Planning Capability Ready | Target Project planning and schedule ownership remain prohibited. |
| Execution and recovery | Execution Capability Ready | Operational Core activation remains prohibited. |
| Merge and conflict resolution | Merge Capability Ready | Self-approval remains prohibited. |
| Swarm and consensus | Swarm Capability Ready | Swarm use requires governance-controlled evidence gates. |
| Enterprise federation | Enterprise Capability Ready | External Target readiness requires independent validation. |

---

## 5. Readiness Acceptance Rules

1. A maturity state is recognized only when required evidence exists and Human Governance accepts the boundary.
2. A maturity state does not imply delivery timing, implementation order, or Target Project state.
3. Missing evidence holds the relevant capability in a deferred capability condition.
4. Acceptance of one maturity state does not redefine any upstream Agent domain authority.
5. Operational Core activation is out of scope for every maturity state in this model.

---

## 6. Deferred Activation Boundaries

Deferred capabilities remain architectural until their owning authorities and governance evidence permit use. This model may identify readiness; it cannot activate Runtime behavior, Engine behavior, autonomous operation, Target Project planning, or live project-state mutation.

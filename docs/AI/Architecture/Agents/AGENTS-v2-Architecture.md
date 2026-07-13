#AI-DOS — AGENTS v2 Architecture Foundation

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.ARCHITECTURE` |
| Title |AI-DOS — AGENTS v2 Architecture Foundation |
| Version | 0.1.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Human Governance / Framework Governance |
| Classification | Agent Architecture Foundation |
| Document Type | Architecture Foundation |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.FOUNDATION` |
| Scope | Foundational AGENTS v2 architecture boundaries for agent identity, roles, registries, metadata, lifecycle, governance boundaries, AI execution rules, and validation expectations. |
| Out of Scope | Implementation, swarm runtime, multi-agent runtime activation, platform adapters, Engine RFC continuation, Runtime redefinition, Engine Platform redefinition, governance redefinition, standards redefinition, meta-model redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md`; `docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Governance Atlas v2 navigation; Framework Governance decision policy; ProjectStatus operational state; Development Phases roadmap; AGENTS v1 operating architecture; AGENTS v2 roadmap and development phases. |
| Consumes | Repository bootloader rules; governance navigation; governance decision policy; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 planning inputs; STD-010 metadata requirements. |
| Produces | AGENTS v2 Architecture Foundation; agent foundation model; agent identity model; agent role model; agent registry model; agent capability registry model; agent metadata model; lifecycle boundaries; validation checklist. |
| Related Specifications | `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 Architecture Foundation for AI-DOS.

Its purpose is to establish the documentation-level foundation for future AGENTS v2 work without activating implementation, multi-agent runtime, swarm runtime, platform adapters, or Engine RFC work.

AGENTS v2 is a future agent architecture track that consumes existing governance, runtime, engine, operational, and AGENTS v1 authorities. This document gives that future track a governed foundation for agent identity, role, registry, capability, metadata, lifecycle, governance, execution, and validation concepts.

This document is not approval to build AGENTS v2 runtime behavior.

---

## 2. Scope

This document covers:

- AGENTS v2 purpose and boundaries;
- authority and consumption rules;
- separation between agents, runtime, and engines;
- AGENTS v2 architectural position;
- agent identity model;
- agent role model;
- agent registry model;
- agent capability registry model;
- agent metadata model;
- agent lifecycle states at the architecture-foundation level;
- Human Governance boundaries;
- AI execution rules;
- deferred areas;
- validation requirements;
- completion checklist;
- the next AGENTS v2 document.

This document is documentation-only and foundation-only.

---

## 3. Non-goals

This document does not:

- define implementation;
- define runtime behavior;
- define a swarm runtime;
- define a multi-agent runtime;
- define platform adapters;
- continue Context Engine RFC or any Engine RFC work;
- redefine Runtime Architecture;
- redefine the Engine Platform;
- redefine Human Governance, Framework Governance, the Governance Atlas, standards, M.0, M.1, or STD-010;
- redefine AGENTS v1;
- activate frozen areas;
- modify or recommend automatic modification of ProjectStatus;
- certify AGENTS v2 as complete.

---

## 4. Authority and Consumption Model

AGENTS v2 is a consuming architecture layer. It shall consume higher and adjacent authorities and shall not replace them.

Authority and consumption rules:

1. Human Governance remains final.
2. `AGENTS.md` is the repository bootloader only.
3. `docs/AI/GOVERNANCE.md` is the Governance Atlas v2 navigation authority.
4. `docs/AI/FrameworkGovernance.md` is governance decision policy.
5. `docs/Projects/ForgeAI/Planning/ProjectStatus.md` is operational state and frozen-area authority.
6. `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` is roadmap authority.
7. STD-010 governs this document's metadata requirements.
8. AGENTS v1 is consumed as the existing single-agent operating architecture.
9. AGENTS v2 roadmap and development phases are planning inputs, not activation authority.
10. Runtime and Engine documents remain authoritative for their own domains.

AGENTS v2 may define agent-specific architecture only within the agent layer. It shall not redefine runtime, engine, governance, standard, or meta-model concepts.

---

## 5. Agent / Runtime / Engine Separation

AGENTS v2 preserves separation between agent architecture, runtime architecture, and engine architecture.

| Layer | Responsibility | AGENTS v2 Boundary |
|:---|:---|:---|
| Agent | Defines governed participants, identities, roles, capability declarations, lifecycle expectations, and human-governed execution rules. | AGENTS v2 may define agent-layer architecture only. |
| Runtime | Defines runtime concepts, execution environment boundaries, lifecycle infrastructure, and runtime-level concerns. | AGENTS v2 consumes Runtime and shall not redefine it. |
| Engine | Defines engine platform concepts and specialized engine capabilities. | AGENTS v2 consumes Engine Platform and Engine RFC outputs and shall not continue or replace them. |

An agent may use runtime and engine capabilities only through governed contracts once those contracts are approved by the appropriate authority. This document does not define those contracts or implementations.

---

## 6. Agent Architecture Position

AGENTS v2 is positioned after AGENTS v1 and before future multi-agent runtime and swarm runtime work.

AGENTS v2 provides the architecture foundation for a future governed multi-agent platform by defining agent-layer concepts that can later be refined into collaboration, coordination, execution, validation, review, merge, governance, and enterprise capabilities.

AGENTS v2 shall remain subordinate to:

- Human Governance;
- repository boot sequence;
- Governance Atlas navigation;
- Framework Governance policy;
- ProjectStatus operational state and frozen-area constraints;
- Development Phases roadmap;
- meta models;
- standards;
- Runtime Architecture;
- Engine Platform;
- AGENTS v1 where single-agent operating behavior is already defined.

---

## 7. Agent Identity Model

An AGENTS v2 agent identity is the governed identity of an execution participant.

At the foundation level, an agent identity consists of:

- stable identifier;
- human-readable name;
- owning authority or responsible governance body;
- role assignment reference;
- capability declaration reference;
- lifecycle state;
- governance constraints;
- traceability reference;
- audit and validation expectations.

Agent identity shall be explicit, traceable, and governed. Anonymous, implicit, or unregistered execution participants are out of scope for AGENTS v2 architecture.

Agent identity does not grant authority. It identifies the participant and the boundaries under which that participant may act.

---

## 8. Agent Role Model

An AGENTS v2 agent role describes the governed function an agent may perform.

At the foundation level, a role defines:

- role name;
- role purpose;
- permitted task categories;
- prohibited task categories;
- required authorities to consume before acting;
- validation obligations;
- escalation obligations;
- reporting obligations.

Role examples from AGENTS v2 planning inputs include coordinator, planner, executor, validator, reviewer, and merge-oriented roles. These examples are planning inputs only. This document does not activate those roles or define their implementation behavior.

A role shall not override Human Governance, ProjectStatus constraints, roadmap order, frozen areas, or source-level task instructions.

---

## 9. Agent Registry Model

The agent registry is the governed index of known agent identities.

At the foundation level, the agent registry records:

- agent identifier;
- agent name;
- assigned role;
- lifecycle state;
- capability registry reference;
- metadata reference;
- ownership or responsible authority;
- governance constraints;
- validation status;
- audit trace reference.

The registry is a governance and traceability concept in this document. This document does not define registry storage, synchronization, APIs, adapters, tooling, or runtime behavior.

---

## 10. Agent Capability Registry Model

The agent capability registry is the governed index of declared agent capabilities.

At the foundation level, an agent capability declaration records:

- capability identifier;
- capability name;
- capability description;
- owning or reviewing authority;
- required upstream authorities;
- permitted use conditions;
- prohibited use conditions;
- validation requirements;
- lifecycle or approval status;
- related agent roles.

A capability declaration is not an implementation. It is an architectural and governance statement about what an agent may be considered for after approval and validation.

Capability routing, load balancing, task distribution, and parallel scheduling remain deferred future areas.

---

## 11. Agent Metadata Model

AGENTS v2 agent metadata provides identity, governance, lifecycle, traceability, role, capability, and validation information about an agent.

At the foundation level, agent metadata includes:

- identity fields;
- role fields;
- capability references;
- authority references;
- lifecycle state;
- scope boundaries;
- forbidden-scope boundaries;
- validation requirements;
- audit requirements;
- escalation requirements;
- completion-report expectations.

Agent metadata shall follow the separation-of-concerns principle established by STD-010: authority, dependency, consumption, production, lifecycle, ownership, and traceability concerns shall not be hidden or overloaded.

This document does not define a metadata schema file, serialization format, database model, or tooling implementation.

---

## 12. Agent Lifecycle

AGENTS v2 recognizes the following foundation-level lifecycle states:

| State | Meaning |
|:---|:---|
| Proposed | Agent identity, role, or capability is suggested but not reviewed. |
| Draft | Agent identity, role, or capability is documented for review. |
| Review Ready | Required documentation and validation evidence are prepared for human or framework review. |
| Approved | Human Governance or delegated authority has approved the identity, role, or capability for its stated scope. |
| Active | The agent is permitted to operate within an approved future runtime scope. |
| Suspended | The agent is temporarily not permitted to operate. |
| Deprecated | The agent identity, role, or capability is being phased out. |
| Retired | The agent identity, role, or capability is no longer active. |

Only Human Governance or an authorized governance process may approve, activate, suspend, deprecate, or retire governed agent identities, roles, and capabilities.

This lifecycle is architectural vocabulary only. It does not implement lifecycle management.

---

## 13. Human Governance Boundaries

Human Governance remains final for AGENTS v2.

AI agents and future agent systems shall not:

- approve AGENTS v2 documents;
- certify AGENTS v2 documents;
- promote AGENTS v2 documents to canonical status;
- activate multi-agent runtime;
- activate swarm runtime;
- authorize platform adapter work;
- update ProjectStatus without explicit authorization;
- override frozen-area constraints;
- silently resolve authority conflicts;
- treat planning inputs as implementation approval.

AGENTS v2 shall preserve human override, human escalation, and human approval boundaries at every future refinement stage.

---

## 14. AI Execution Rules

When working on AGENTS v2 artifacts, AI agents shall:

1. Follow the repository boot sequence.
2. Classify the task before editing.
3. Read the minimum required authority set.
4. Treat this document as draft and non-canonical until approved.
5. Treat AGENTS v2 planning inputs as planning inputs only.
6. Preserve frozen areas unless Human Governance explicitly activates them.
7. Avoid implementation details unless explicitly authorized by Human Governance and roadmap state.
8. Avoid redefining Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010.
9. Validate STD-010 metadata for new Markdown documents.
10. Report deferred scope and risks in completion reports.

---

## 15. Deferred Areas

The following areas are deferred and are not defined by this document:

- AGENTS v2 implementation;
- multi-agent runtime;
- swarm runtime;
- platform adapters;
- messaging protocols;
- event exchange;
- shared context implementation;
- shared memory implementation;
- shared knowledge implementation;
- coordinator runtime;
- task distribution;
- load balancing;
- capability routing;
- execution queues;
- parallel scheduling;
- conflict resolution implementation;
- consensus and voting mechanisms;
- enterprise agent platform;
- registry storage, APIs, and synchronization;
- ProjectStatus updates.

These areas require explicit future authorization, roadmap alignment, and task-specific authority review.

---

## 16. Validation Requirements

Validation for this document requires confirming that:

1. STD-010 mandatory metadata fields are present.
2. The document is marked draft, non-canonical, and not certified.
3. The document consumes AGENTS v1 and AGENTS v2 planning inputs without redefining them.
4. The document does not redefine Governance, Runtime, Engine Platform, standards, M.0, M.1, or STD-010.
5. The document does not define implementation.
6. The document does not define multi-agent runtime or swarm runtime.
7. The document does not define platform adapters.
8. The document does not continue Engine RFC work.
9. The document does not modify or require ProjectStatus updates.
10. Deferred areas are explicitly identified.

---

## 17. Completion Checklist

Before this document is considered complete for draft delivery, confirm:

- [x] Required AGENTS v2 foundation sections are present.
- [x] STD-010 metadata block is present and complete.
- [x] Authority and consumption model is explicit.
- [x] Agent / Runtime / Engine separation is preserved.
- [x] Agent identity, role, registry, capability registry, metadata, and lifecycle models are foundation-level only.
- [x] Human Governance boundaries are explicit.
- [x] AI execution rules are explicit.
- [x] Deferred areas are explicit.
- [x] Validation requirements are explicit.
- [x] ProjectStatus was not modified.
- [x] No implementation, runtime, adapter, swarm, or Engine RFC scope was introduced.

---

## 18. Next AGENTS v2 Document

The next AGENTS v2 document should be:

```text
AGENTS-v2-Agent-Identity-and-Registry.md
```

Recommended purpose:

Define the governed documentation model for agent identity and the agent registry, including required fields, ownership, traceability, lifecycle references, validation expectations, and governance boundaries.

The next document should remain documentation-only unless Human Governance explicitly authorizes implementation scope and roadmap alignment permits that work.


## Runtime and Engine Authority Alignment Note — 2026-07-13

This foundation consumes upstream Runtime Architecture (`A.3`), Engine Platform (`A.4` and `A.4.1` through `A.4.7`), and Engine Specialization RFCs (`A.5.0` through `A.5.12`). Agent Architecture owns agent-facing contracts only and may not redefine runtime execution, Engine Platform behavior, or individual Engine specialization responsibilities. The AGENTS v2 family inventory and pending disposition boundaries are maintained in `docs/AI/Architecture/Agents/README.md`.

#AI-DOS — AGENTS v2 Agent Identity and Registry

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-IDENTITY-AND-REGISTRY` |
| Title |AI-DOS — AGENTS v2 Agent Identity and Registry |
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
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.IDENTITY-REGISTRY` |
| Scope | Documentation-level AGENTS v2 agent identity and registry model, including identity fields, identifier rules, type and role references, metadata expectations, registry entries, capability links, lifecycle states, ownership, governance, and validation boundaries. |
| Out of Scope | Registry implementation, storage, databases, APIs, CLI, UI, runtime execution, swarm runtime, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; the invoking Target's Resolved Target Context (operational-state and roadmap authority); `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | AGENTS v2 Architecture Foundation; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; AGENTS v1 operating architecture; AGENTS v2 planning inputs; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent identity model; agent identifier rules; agent type model; agent role model; agent metadata model; agent registry entry model; agent capability link model; agent lifecycle state model; registry validation rules; deferred-scope checklist. |
| Related Specifications | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent identity and registry model for AI-DOS.

Its purpose is to describe, at the documentation and architecture-specification level, how future AGENTS v2 agents are identified, typed, assigned roles, described with metadata, represented as registry entries, linked to capability declarations, and governed through lifecycle states.

This document refines the agent identity and registry portions of `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md`. It does not implement a registry and does not activate runtime, multi-agent, swarm, platform-adapter, or Engine RFC work.

---

## 2. Scope

This document covers:

- agent identity concepts;
- agent identifier rules;
- agent type categories;
- agent role references;
- agent metadata expectations;
- agent registry entry contents;
- agent capability links;
- agent lifecycle state references;
- ownership and governance rules;
- registry validation rules;
- forbidden registry content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only and foundation-consuming. This document defines architecture vocabulary and governance expectations only.

---

## 3. Non-goals

This document does not:

- implement an agent registry;
- define registry storage;
- define a database schema;
- define APIs;
- define CLI behavior;
- define UI behavior;
- define runtime execution;
- define multi-agent runtime behavior;
- define swarm runtime behavior;
- define platform adapters;
- continue Context Engine RFC or any Engine RFC work;
- redefine Runtime Architecture;
- redefine the Engine Platform;
- redefine Governance, Standards, M.0, M.1, or STD-010;
- redefine AGENTS v1;
- activate frozen areas;
- modify ProjectStatus;
- certify AGENTS v2 or any agent registry as complete.

---

## 4. Authority and Parent Foundation

The parent foundation document for this specification is:

```text
docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md
```

This document consumes the parent foundation and may refine only the AGENTS v2 identity and registry concepts already introduced there.

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI-DOS/GOVERNANCE.md` remains the governance navigation authority.
4. The invoking Target's Resolved Target Context supplies operational-state, frozen-area, and roadmap authority; this document does not hard-code a Target-specific path for it.
5. `docs/AI-DOS/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
6. STD-010 governs this document's metadata requirements.
7. Runtime, Engine Platform, Standards, M.0, and M.1 retain authority over their own domains.

This document shall not reinterpret planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

---

## 5. Agent Identity Model

An AGENTS v2 agent identity is the governed record of a future execution participant.

At the documentation level, an agent identity includes:

| Field | Meaning |
|:---|:---|
| Agent Identifier | Stable governed identifier for the agent identity. |
| Agent Name | Human-readable name for the agent identity. |
| Agent Type | Classification of the identity within the AGENTS v2 type model. |
| Agent Role Reference | Link to the governed role assigned to the agent identity. |
| Capability Link Reference | Link to declared capabilities associated with the agent identity. |
| Lifecycle State | Current governance state of the identity. |
| Owner | Accountable authority or body responsible for the identity. |
| Maintainer | Party responsible for documentation upkeep. |
| Authority Constraints | Authorities the agent must consume before acting. |
| Scope Boundaries | Work categories or domains the identity may be associated with after approval. |
| Prohibited Scope | Work categories or domains the identity must not perform. |
| Traceability Reference | Governance, audit, or registry trace reference. |
| Validation Expectations | Required checks before the identity can advance lifecycle state. |

Agent identity does not grant authority. It identifies an agent and records governed constraints for future use.

---

## 6. Agent Identifier Rules

Agent identifiers shall be stable, explicit, traceable, and unique within the governed AGENTS v2 identity registry.

Identifier rules:

1. Each agent identity shall have exactly one primary identifier.
2. The primary identifier shall be machine-readable and human-reviewable.
3. The identifier shall not encode implementation storage, database, API, CLI, UI, runtime, or platform-adapter details.
4. The identifier shall not imply approval, activation, certification, or runtime availability.
5. The identifier shall remain stable across metadata updates unless Human Governance approves replacement.
6. Deprecated or retired identifiers shall not be silently reused.
7. Identifier aliases, if later allowed, shall remain secondary and traceable to the primary identifier.
8. Identifier conflicts shall escalate to Human Governance or an approved governance process.

Recommended identifier shape:

```text
AI-DOS.AGENTS.V2.AGENT.<STABLE-NAME>
```

The recommended shape is a documentation convention only. It is not a storage key, database key, API path, CLI argument, runtime handle, or platform adapter identifier.

---

## 7. Agent Type Model

An agent type classifies the structural category of an AGENTS v2 agent identity.

Foundation-level type categories may include:

| Agent Type | Description |
|:---|:---|
| Governance Agent | Agent identity associated with governance navigation, validation, or escalation support. |
| Planning Agent | Agent identity associated with planning, decomposition, sequencing, or dependency analysis. |
| Execution Agent | Agent identity associated with bounded task execution after explicit authorization. |
| Validation Agent | Agent identity associated with checks, evidence gathering, and validation reporting. |
| Review Agent | Agent identity associated with review preparation or review support. |
| Coordination Agent | Agent identity associated with future coordination patterns after explicit authorization. |

These categories are architectural classifications only. They do not activate agents, define runtime behavior, authorize multi-agent execution, or define swarm roles.

Additional agent types require parent-foundation alignment, governance review, and validation that the new type does not redefine Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010.

---

## 8. Agent Role Model

An agent role describes the governed function an agent identity may be assigned.

A role reference in an agent identity shall identify:

- role identifier;
- role name;
- role purpose;
- permitted task categories;
- prohibited task categories;
- required authority documents;
- validation obligations;
- escalation obligations;
- completion-report obligations;
- lifecycle or approval status.

Role assignment rules:

1. An agent identity shall not self-assign a role.
2. Role assignment shall be approved by Human Governance or an authorized governance process before active use.
3. Role assignment shall not override roadmap order, frozen areas, source-level instructions, or Human Governance.
4. A role shall not imply runtime permission unless future authorized runtime work explicitly grants it.
5. Multiple roles, if later allowed, shall include explicit conflict-handling and precedence rules before use.

This document records role-reference expectations only. It does not define role implementation behavior.

---

## 9. Agent Metadata Model

Agent metadata provides identity, governance, lifecycle, traceability, scope, role, capability, validation, and audit information for an AGENTS v2 agent identity.

Required metadata categories:

| Category | Required Content |
|:---|:---|
| Identity | Identifier, name, type, and traceability reference. |
| Governance | owner, maintainer, review authority, approval authority, and authority constraints. |
| Scope | permitted scope, prohibited scope, deferred scope, and escalation triggers. |
| Role | role reference, role status, and role validation requirements. |
| Capability | capability links and capability validation status. |
| Lifecycle | lifecycle state, lifecycle decision evidence, and state-change authority. |
| Validation | required checks, last validation result, and unresolved validation findings. |
| Audit | creation date, last updated date, change rationale, and review evidence reference. |

Agent metadata shall preserve separation of concerns. Authority, dependency, lifecycle, scope, validation, and audit information shall not be overloaded into one field.

This document does not define metadata serialization, schema files, validation tooling, database tables, APIs, or runtime metadata loading.

---

## 10. Agent Registry Entry Model

An agent registry entry is the governed documentation record for one AGENTS v2 agent identity.

At the architecture-specification level, a registry entry contains:

| Field | Requirement |
|:---|:---|
| Registry Entry Identifier | Stable identifier for the registry entry. |
| Agent Identifier | Primary identifier of the agent identity represented by the entry. |
| Agent Name | Human-readable agent name. |
| Agent Type | Agent type classification. |
| Agent Role Reference | Link or reference to the assigned role. |
| Capability Link Reference | Link or reference to capability declarations. |
| Lifecycle State | Current state in the AGENTS v2 lifecycle model. |
| Owner | Accountable owner for the agent identity. |
| Maintainer | Documentation maintainer. |
| Governance Constraints | Applicable authority and escalation constraints. |
| Scope Boundaries | Permitted and prohibited scope statements. |
| Validation Status | Current validation result or review-readiness status. |
| Audit Trace | Traceability reference for governance and review. |

A registry entry is not an implementation artifact. It is not a storage row, database document, API resource, CLI object, UI model, runtime actor, or swarm participant.

---

## 11. Agent Capability Link Model

An agent capability link connects an agent identity to a governed capability declaration.

A capability link records:

- agent identifier;
- capability identifier;
- capability name;
- capability status;
- capability owner or review authority;
- permitted use conditions;
- prohibited use conditions;
- required authority inputs;
- validation requirements;
- lifecycle state or approval status;
- traceability reference.

Capability link rules:

1. A capability link shall not be treated as capability implementation.
2. A capability link shall not authorize runtime use by itself.
3. A capability link shall identify required authorities and validation expectations.
4. A capability link shall preserve prohibited use conditions.
5. A capability link shall be removed, suspended, or deprecated through governed lifecycle change when no longer valid.

Capability routing, scheduling, matching, execution, and runtime selection remain deferred.

---

## 12. Agent Lifecycle State Model

This document consumes the lifecycle states defined by the AGENTS v2 Architecture Foundation.

AGENTS v2 identity and registry entries may use the following lifecycle states:

| State | Registry Meaning |
|:---|:---|
| Proposed | Identity or registry entry is suggested but not ready for review. |
| Draft | Identity or registry entry is documented but not review-ready. |
| Review Ready | Required documentation and validation evidence are prepared for review. |
| Approved | Human Governance or authorized governance process has approved the identity or entry for the stated scope. |
| Active | Future approved runtime scope permits the agent identity to operate within governed boundaries. |
| Suspended | Identity or entry is temporarily not permitted for active use. |
| Deprecated | Identity or entry is being phased out and should not be used for new work. |
| Retired | Identity or entry is no longer active and shall not be reused without governed replacement. |

Lifecycle state changes require explicit governance evidence. AI agents shall not approve, activate, suspend, deprecate, retire, or certify agent identities or registry entries by themselves.

---

## 13. Ownership and Governance Rules

Ownership and governance rules preserve accountability for agent identities and registry entries.

Rules:

1. Every agent identity shall have an accountable owner.
2. Every registry entry shall identify maintainers.
3. Human Governance remains final for identity approval, activation, suspension, deprecation, retirement, and certification.
4. Framework Governance may review alignment when delegated or required by the governing process.
5. Owners shall ensure identity and registry entries remain aligned with the parent foundation and applicable authorities.
6. Maintainers may update draft documentation only within approved scope and roadmap boundaries.
7. AI agents may draft, validate, and report but shall not approve, certify, promote, or canonicalize entries.
8. Any authority conflict shall stop the work and escalate.
9. ProjectStatus shall not be updated unless Human Governance explicitly instructs it or a dedicated ProjectStatus task is active.
10. Frozen areas, including Multi-Agent Runtime, Swarm Runtime, and Platform Adapters, remain frozen unless explicitly activated.

---

## 14. Registry Validation Rules

Registry validation confirms that an agent identity or registry entry is complete, governed, and within scope.

Minimum validation checks:

- the registry entry has a stable identifier;
- the agent identity has a stable primary identifier;
- owner and maintainer fields are present;
- agent type is declared;
- role reference is declared or explicitly deferred;
- capability links are declared or explicitly deferred;
- lifecycle state is declared;
- scope boundaries are explicit;
- prohibited scope is explicit;
- governance constraints are present;
- validation status is present;
- audit trace is present;
- no implementation, storage, database, API, CLI, UI, runtime execution, swarm runtime, or platform-adapter details are defined;
- the entry does not redefine Runtime, Engine Platform, Governance, Standards, M.0, M.1, or STD-010;
- ProjectStatus changes are not required by the registry entry.

A registry entry that fails validation may remain Draft but shall not be marked Review Ready, Approved, Active, certified, or canonical.

---

## 15. Forbidden Content

Agent identity and registry documentation shall not include:

- registry implementation details;
- storage architecture;
- database schemas;
- API endpoints;
- CLI commands;
- UI workflows;
- runtime execution rules;
- task-dispatch algorithms;
- scheduler behavior;
- swarm runtime behavior;
- multi-agent runtime activation;
- platform adapter definitions;
- Engine RFC continuation;
- Runtime redefinition;
- Engine Platform redefinition;
- Governance redefinition;
- Standards redefinition;
- M.0 or M.1 redefinition;
- STD-010 redefinition;
- automatic ProjectStatus update instructions;
- claims that draft entries are approved, certified, canonical, or active.

Forbidden content shall be removed or deferred before review.

---

## 16. Deferred Areas

The following areas are deferred:

- registry implementation;
- registry storage;
- database design;
- API design;
- CLI design;
- UI design;
- runtime execution;
- multi-agent runtime;
- swarm runtime;
- platform adapters;
- capability routing;
- scheduling;
- task dispatch;
- shared context implementation;
- shared memory implementation;
- shared knowledge implementation;
- conflict-resolution implementation;
- consensus or voting mechanisms;
- registry synchronization;
- registry validation tooling;
- ProjectStatus updates.

Deferred areas require explicit Human Governance authorization, roadmap alignment, and task-specific authority review before any future work begins.

---

## 17. Completion Checklist

Before this document is considered complete for draft delivery, confirm:

- [x] Purpose is defined.
- [x] Scope is defined.
- [x] Non-goals are defined.
- [x] Authority and parent foundation are defined.
- [x] Agent identity model is defined.
- [x] Agent identifier rules are defined.
- [x] Agent type model is defined.
- [x] Agent role model is defined.
- [x] Agent metadata model is defined.
- [x] Agent registry entry model is defined.
- [x] Agent capability link model is defined.
- [x] Agent lifecycle state model is defined.
- [x] Ownership and governance rules are defined.
- [x] Registry validation rules are defined.
- [x] Forbidden content is defined.
- [x] Deferred areas are defined.
- [x] STD-010 metadata block is present and complete.
- [x] Parent foundation is consumed without being replaced.
- [x] No registry implementation is defined.
- [x] No storage, database, API, CLI, UI, runtime execution, swarm runtime, or platform-adapter scope is introduced.
- [x] No Engine RFC work is continued.
- [x] ProjectStatus is not modified.

---

## 18. Next AGENTS v2 Document

The next AGENTS v2 document should be:

```text
AGENTS-v2-Agent-Capability-and-Role-Catalog.md
```

Recommended purpose:

Define the governed documentation model for AGENTS v2 role and capability declarations, including role identity, capability identity, permitted and prohibited task categories, validation expectations, ownership, lifecycle states, and governance boundaries.

The next document should remain documentation-only unless Human Governance explicitly authorizes implementation scope and roadmap alignment permits that work.

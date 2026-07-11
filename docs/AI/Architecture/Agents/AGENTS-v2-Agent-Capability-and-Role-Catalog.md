#AI-DOS — AGENTS v2 Agent Capability and Role Catalog

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENTS.V2.AGENT-CAPABILITY-AND-ROLE-CATALOG` |
| Title |AI-DOS — AGENTS v2 Agent Capability and Role Catalog |
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
| Traceability ID | `AI-DOS.ARCHITECTURE.AGENTS.V2.CAPABILITY-ROLE-CATALOG` |
| Scope | Documentation-level AGENTS v2 capability model, role catalog, core role families, capability-to-role mapping, role assignment rules, validation expectations, and deferred boundaries. |
| Out of Scope | Routing implementation, runtime execution, swarm behavior, platform adapters, Engine RFC work, Runtime redefinition, Engine Platform redefinition, Governance redefinition, Standards redefinition, M.0 redefinition, M.1 redefinition, STD-010 redefinition, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` |
| Normative References | `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`; `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md`; `docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | AGENTS v2 Architecture Foundation; AGENTS v2 Agent Identity and Registry; Governance Atlas v2 navigation; ProjectStatus operational state and frozen-area constraints; Development Phases roadmap; AGENTS v1 operating architecture; AGENTS v2 planning inputs; STD-010 metadata requirements. |
| Consumes | AGENTS v2 foundation boundaries; AGENTS v2 identity, registry, role-reference, capability-link, lifecycle, ownership, governance, and validation models; repository bootloader rules; governance navigation; roadmap state; frozen-area constraints; AGENTS v1; AGENTS v2 roadmap and development phases; STD-010 metadata requirements. |
| Produces | AGENTS v2 agent capability model; role catalog; core agent role definitions; governance agent roles; architecture agent roles; standards agent roles; runtime and engine consumer roles; documentation agent roles; validation, review, and certification role definitions; capability-to-role mapping; role assignment rules; deferred-scope checklist. |
| Related Specifications | `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; Engine Platform RFC family. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against AGENTS v2 Architecture Foundation, AGENTS v2 Agent Identity and Registry, Governance Atlas v2, ProjectStatus frozen areas, Development Phases roadmap, AGENTS v1 consumption, AGENTS v2 planning inputs, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the AGENTS v2 agent capability and role catalog for AI-DOS.

Its purpose is to describe, at the documentation and architecture-specification level, the capability categories and governed role definitions that future AGENTS v2 agent identities may reference after appropriate review and approval.

This document refines the role and capability concepts introduced by `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` and consumes the identity, registry, role-reference, and capability-link expectations defined by `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md`.

This document is documentation-only. It does not implement routing, runtime execution, swarm behavior, platform adapters, Engine RFC work, or ProjectStatus updates.

---

## 2. Scope

This document covers:

- the AGENTS v2 capability model;
- the AGENTS v2 role catalog structure;
- core agent roles;
- governance agent roles;
- architecture agent roles;
- standards agent roles;
- runtime and engine consumer roles;
- documentation agent roles;
- validation, review, and certification-support roles;
- capability-to-role mapping;
- role assignment rules;
- forbidden content;
- deferred areas;
- completion checklist;
- the next AGENTS v2 document recommendation.

All content is documentation-only and foundation-consuming. This document defines role and capability vocabulary, constraints, and validation expectations only.

---

## 3. Non-goals

This document does not:

- implement role assignment;
- implement capability routing;
- define runtime execution;
- define multi-agent runtime behavior;
- define swarm behavior;
- define platform adapters;
- define storage, APIs, CLIs, user interfaces, queues, schedulers, dispatchers, or adapters;
- continue Context Engine RFC or any Engine RFC work;
- redefine Runtime Architecture;
- redefine the Engine Platform;
- redefine Governance, Standards, M.0, M.1, or STD-010;
- redefine AGENTS v1;
- activate frozen areas;
- modify ProjectStatus;
- certify AGENTS v2, any role, or any capability as complete, canonical, approved, or active.

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

Authority rules:

1. Human Governance remains final.
2. `AGENTS.md` remains the repository bootloader.
3. `docs/AI/GOVERNANCE.md` remains the governance navigation authority.
4. `docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the operational state and frozen-area authority.
5. `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` remains the roadmap authority.
6. `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` is the parent foundation for this document.
7. `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md` provides identity, registry, role-reference, capability-link, lifecycle, ownership, governance, and validation inputs.
8. STD-010 governs this document's metadata requirements.
9. Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 retain authority over their own domains.

This document shall not reinterpret AGENTS v2 planning documents as activation authority. AGENTS v2 roadmap and development phase documents remain planning inputs until Human Governance and roadmap state explicitly authorize later work.

---

## 5. Agent Capability Model

An AGENTS v2 agent capability is a governed declaration of a work category an agent role may be associated with after approval and validation.

At the documentation level, a capability declaration includes:

| Field | Meaning |
|:---|:---|
| Capability Identifier | Stable governed identifier for the capability declaration. |
| Capability Name | Human-readable capability name. |
| Capability Category | Broad family of work the capability describes. |
| Capability Purpose | Explanation of why the capability exists. |
| Permitted Task Categories | Task categories the capability may support after approval. |
| Prohibited Task Categories | Task categories the capability shall not support. |
| Required Authority Inputs | Documents or authorities that must be consumed before use. |
| Validation Obligations | Required checks, evidence, or completion-report obligations. |
| Escalation Obligations | Conditions that require stopping and escalating. |
| Lifecycle State | Current governance state of the capability declaration. |
| Owner | Accountable authority or body responsible for the capability declaration. |
| Traceability Reference | Governance, audit, or registry trace reference. |

A capability declaration is not an implementation. It is not a route, scheduler rule, runtime permission, dispatch rule, adapter contract, engine function, or swarm behavior.

Capability categories may include:

| Capability Category | Documentation Meaning |
|:---|:---|
| Governance Navigation | Ability to identify relevant governance authorities and constraints. |
| Authority Validation | Ability to confirm authority consumption and boundary preservation. |
| Architecture Drafting | Ability to draft architecture artifacts within an approved domain. |
| Standards Alignment | Ability to align documentation against applicable standards without redefining them. |
| Runtime Consumption | Ability to consume runtime architecture as an input without redefining runtime behavior. |
| Engine Consumption | Ability to consume engine-platform or engine-RFC outputs without continuing Engine RFC work. |
| Documentation Authoring | Ability to create or revise documentation within approved scope. |
| Validation Evidence | Ability to gather and report validation evidence. |
| Review Support | Ability to prepare review findings without approving or certifying. |
| Certification Support | Ability to prepare certification evidence without certifying. |

---

## 6. Agent Role Catalog

The AGENTS v2 role catalog is the governed list of role definitions that future agent identities may reference.

A role catalog entry includes:

| Field | Meaning |
|:---|:---|
| Role Identifier | Stable governed identifier for the role. |
| Role Name | Human-readable role name. |
| Role Family | Core, governance, architecture, standards, runtime/engine consumer, documentation, validation, review, or certification-support family. |
| Role Purpose | Explanation of the role's intended function. |
| Associated Capabilities | Capability declarations the role may reference. |
| Required Authority Inputs | Authorities the role must consume before acting. |
| Permitted Task Categories | Work categories the role may support after approval. |
| Prohibited Task Categories | Work categories the role shall not perform. |
| Validation Obligations | Checks and evidence the role must produce or preserve. |
| Reporting Obligations | Completion-report expectations. |
| Escalation Obligations | Conditions requiring stop and escalation. |
| Lifecycle State | Governance state of the role definition. |

The catalog does not assign roles to active agents. Role assignment is governed separately through identity and registry records, Human Governance, and future authorized lifecycle processes.

---

## 7. Core Agent Roles

Core roles describe general AGENTS v2 task-participant functions. They are role definitions only and do not activate agents.

| Role | Purpose | Permitted Task Categories | Prohibited Task Categories |
|:---|:---|:---|:---|
| Coordinator Role | Maintains task-level alignment, sequencing awareness, and completion-report structure. | Scope tracking, dependency awareness, report assembly, escalation identification. | Runtime coordination, routing, dispatch, scheduling, swarm coordination, platform-adapter coordination. |
| Planner Role | Decomposes approved documentation work into safe bounded steps. | Documentation planning, authority-reading plans, validation plans. | Roadmap skipping, frozen-area activation, implementation planning for deferred runtime or swarm areas. |
| Executor Role | Drafts or edits approved artifacts within explicit scope. | Bounded documentation edits, checklist completion, source-limited updates. | Unauthorized implementation, approval, certification, ProjectStatus updates without explicit authorization. |
| Validator Role | Checks outputs against applicable authority and task constraints. | Metadata checks, forbidden-scope checks, authority-consumption checks, file-safety checks. | Certification, approval, canonical promotion, runtime enforcement. |
| Reporter Role | Produces completion reports and risk summaries. | Summary, files modified, validations, deferred scope, risks, recommended next step. | ProjectStatus mutation, governance approval, certification claims. |

---

## 8. Governance Agent Roles

Governance roles support authority navigation and governance-boundary validation. They do not become governance authorities.

| Role | Purpose | Required Inputs | Prohibited Actions |
|:---|:---|:---|:---|
| Governance Navigator Role | Identifies relevant governance documents for a task. | `AGENTS.md`, Governance Atlas, ProjectStatus, Development Phases, task-specific authorities. | Replacing Human Governance, resolving conflicts silently, redefining governance. |
| Authority Boundary Role | Validates that a draft stays within its authority chain. | Parent foundation, input documents, roadmap state, frozen-area constraints. | Approving documents, promoting canonical status, overriding ProjectStatus. |
| Escalation Support Role | Identifies conflicts, ambiguity, or frozen-area crossings requiring escalation. | Task instruction, authority documents, completion evidence. | Making final decisions on escalated conflicts. |
| Governance Evidence Role | Collects evidence for governance review. | Source documents, validation checklist, completion report requirements. | Certifying, approving, or substituting for governance review. |

---

## 9. Architecture Agent Roles

Architecture roles support documentation-level architecture work in approved domains.

| Role | Purpose | Permitted Task Categories | Prohibited Task Categories |
|:---|:---|:---|:---|
| Architecture Drafting Role | Drafts architecture documents within active approved scope. | Architecture sections, boundaries, non-goals, authority inputs, deferred scope. | Runtime implementation, Engine RFC continuation, meta-model redefinition. |
| Architecture Alignment Role | Checks consistency with parent and input architecture documents. | Parent-foundation consumption, sibling-document alignment, terminology consistency. | Replacing parent foundations or redefining upstream authorities. |
| Architecture Boundary Role | Preserves separation between agent, runtime, engine, governance, standards, and meta layers. | Boundary statements, forbidden content, deferred areas. | Collapsing layer boundaries or authorizing deferred domains. |

---

## 10. Standards Agent Roles

Standards roles support standards consumption and conformance checking. They do not redefine standards.

| Role | Purpose | Required Inputs | Prohibited Actions |
|:---|:---|:---|:---|
| Metadata Conformance Role | Checks document metadata against STD-010. | STD-010 mandatory metadata fields and table shape. | Changing STD-010, creating alternate metadata standards, self-certifying. |
| Terminology Alignment Role | Preserves terminology consistency when applicable. | Applicable terminology standards and parent documents. | Redefining canonical terminology or creating competing terms. |
| Standards Consumption Role | Ensures standards are consumed as authorities or references. | Applicable standards and task authority set. | Treating standards-consumption work as standards-authoring authority. |

---

## 11. Runtime / Engine Consumer Roles

Runtime and engine consumer roles may reference runtime and engine authorities only as inputs. They do not define runtime execution or continue Engine RFC work.

| Role | Purpose | Permitted Task Categories | Prohibited Task Categories |
|:---|:---|:---|:---|
| Runtime Consumer Role | Consumes Runtime Architecture boundaries for agent-layer documentation. | Boundary preservation, runtime non-redefinition checks. | Runtime execution rules, runtime lifecycle implementation, runtime activation. |
| Engine Platform Consumer Role | Consumes Engine Platform boundaries for agent-layer documentation. | Engine boundary references, engine non-redefinition checks. | Engine platform redesign, engine implementation, Engine RFC continuation. |
| Engine RFC Consumer Role | References Engine RFC outputs only when needed as approved inputs. | Traceable references to engine documents. | Drafting or advancing Context Engine or any other Engine RFC within AGENTS v2 work. |

---

## 12. Documentation Agent Roles

Documentation roles support artifact creation and maintenance inside explicit scope.

| Role | Purpose | Permitted Task Categories | Prohibited Task Categories |
|:---|:---|:---|:---|
| Document Author Role | Drafts new documentation artifacts under Human Governance instruction. | Required sections, metadata, scope, non-goals, authority inputs, checklists. | Unrequested normalization, broad refactoring, ProjectStatus updates. |
| Document Editor Role | Applies bounded edits to existing documentation. | Targeted revisions, typo fixes, scope-aligned clarifications. | Reformatting unrelated content, moving legacy or RC2 files, modifying frozen areas. |
| Completion Report Role | Prepares completion reports matching task requirements. | Summary, files modified, validations, deferred scope, risks, next step. | Approval, certification, canonical promotion, status mutation. |

---

## 13. Validation / Review / Certification Agent Roles

Validation, review, and certification roles support evidence preparation. They do not approve, review as final authority, certify, or promote documents.

| Role | Purpose | Permitted Task Categories | Prohibited Task Categories |
|:---|:---|:---|:---|
| Validation Support Role | Checks draft output against task and authority requirements. | STD-010 checks, parent/input checks, forbidden-scope checks, roadmap checks. | Declaring certification, granting approval, activating roles. |
| Review Preparation Role | Organizes findings for future human or framework review. | Review notes, evidence summaries, unresolved issue lists. | Conducting final authoritative review unless explicitly authorized by governance. |
| Certification Evidence Role | Gathers evidence that may later support certification. | Checklists, traceability notes, validation evidence. | Certifying documents, agents, roles, capabilities, registries, runtime behavior, or implementations. |
| Risk Identification Role | Identifies unresolved risks and deferred scope. | Risk summaries, escalation triggers, recommended next steps. | Accepting risks on behalf of Human Governance. |

---

## 14. Capability-to-Role Mapping

Capability-to-role mapping records which capability categories a role may reference. A mapping is documentation-level only and does not route work or assign tasks.

| Capability Category | Candidate Role Families | Mapping Constraint |
|:---|:---|:---|
| Governance Navigation | Governance, Core, Validation | May identify authorities but shall not become authority. |
| Authority Validation | Governance, Validation, Review Preparation | May report alignment or conflict but shall not approve. |
| Architecture Drafting | Architecture, Documentation, Core | May draft within explicit scope but shall not redefine upstream domains. |
| Standards Alignment | Standards, Validation, Documentation | May check conformance but shall not redefine standards. |
| Runtime Consumption | Runtime / Engine Consumer, Architecture, Validation | May consume runtime boundaries but shall not define runtime execution. |
| Engine Consumption | Runtime / Engine Consumer, Architecture, Validation | May consume engine boundaries but shall not continue Engine RFC work. |
| Documentation Authoring | Documentation, Core, Architecture | May author governed docs within active scope and file-safety rules. |
| Validation Evidence | Validation, Governance, Review Preparation | May gather evidence but shall not certify or approve. |
| Review Support | Review Preparation, Governance, Validation | May prepare findings but shall not replace Human Governance review. |
| Certification Support | Certification Evidence, Validation, Governance | May gather certification evidence but shall not certify. |

Mapping rules:

1. A capability-to-role mapping shall not imply runtime routing.
2. A capability-to-role mapping shall not assign work to an active agent.
3. A capability-to-role mapping shall not grant approval, certification, canonical status, or runtime permission.
4. A capability-to-role mapping shall preserve prohibited task categories.
5. A capability-to-role mapping shall identify required authority inputs before future use.

---

## 15. Role Assignment Rules

Role assignment connects an agent identity to a governed role reference through the identity and registry model.

Rules:

1. An agent identity shall not self-assign a role.
2. Role assignment shall identify the role identifier, role name, capability references, lifecycle state, owner, validation status, and traceability reference.
3. Role assignment shall be approved by Human Governance or an authorized governance process before active use.
4. Role assignment shall not override Human Governance, ProjectStatus, roadmap order, frozen areas, AGENTS v1 boundaries, parent-foundation boundaries, or source-level task instructions.
5. Role assignment shall not imply runtime permission, routing behavior, scheduling behavior, dispatch behavior, platform-adapter behavior, or swarm participation.
6. Role assignment shall preserve prohibited task categories from the role and each linked capability.
7. Multiple role assignment, if later allowed, shall require explicit conflict-handling and precedence rules before use.
8. Any conflict between role assignment and authority constraints shall stop the work and escalate.
9. AI agents may draft, validate, and report role assignment documentation but shall not approve, certify, activate, suspend, deprecate, retire, or canonicalize roles.
10. ProjectStatus shall not be updated as part of role assignment unless Human Governance explicitly instructs it or a dedicated ProjectStatus task is active.

---

## 16. Forbidden Content

Agent capability and role catalog documentation shall not include:

- routing implementation;
- runtime execution rules;
- multi-agent runtime behavior;
- swarm behavior;
- platform adapter definitions;
- storage architecture;
- database schemas;
- API endpoints;
- CLI commands;
- UI workflows;
- queueing logic;
- scheduler behavior;
- dispatch algorithms;
- task-distribution algorithms;
- load-balancing rules;
- consensus or voting mechanisms;
- Engine RFC continuation;
- Runtime redefinition;
- Engine Platform redefinition;
- Governance redefinition;
- Standards redefinition;
- M.0 or M.1 redefinition;
- STD-010 redefinition;
- automatic ProjectStatus update instructions;
- claims that draft roles or capabilities are approved, certified, canonical, active, or implemented.

Forbidden content shall be removed or deferred before review.

---

## 17. Deferred Areas

The following areas are deferred:

- role assignment implementation;
- capability routing;
- runtime execution;
- multi-agent runtime;
- swarm runtime;
- platform adapters;
- registry implementation;
- registry storage;
- APIs;
- CLIs;
- UIs;
- queues;
- schedulers;
- dispatchers;
- task distribution;
- load balancing;
- shared context implementation;
- shared memory implementation;
- shared knowledge implementation;
- conflict-resolution implementation;
- consensus or voting mechanisms;
- enterprise agent platform;
- Engine RFC continuation;
- validation tooling implementation;
- certification process implementation;
- ProjectStatus updates.

Deferred areas require explicit Human Governance authorization, roadmap alignment, and task-specific authority review before any future work begins.

---

## 18. Completion Checklist

Before this document is considered complete for draft delivery, confirm:

- [x] Purpose is defined.
- [x] Scope is defined.
- [x] Non-goals are defined.
- [x] Authority and inputs are defined.
- [x] Agent capability model is defined.
- [x] Agent role catalog is defined.
- [x] Core agent roles are defined.
- [x] Governance agent roles are defined.
- [x] Architecture agent roles are defined.
- [x] Standards agent roles are defined.
- [x] Runtime and engine consumer roles are defined.
- [x] Documentation agent roles are defined.
- [x] Validation, review, and certification-support roles are defined.
- [x] Capability-to-role mapping is defined.
- [x] Role assignment rules are defined.
- [x] Forbidden content is defined.
- [x] Deferred areas are defined.
- [x] STD-010 metadata block is present and complete.
- [x] Parent foundation is consumed without being replaced.
- [x] Identity and registry input is consumed without being replaced.
- [x] No routing implementation is defined.
- [x] No runtime execution is defined.
- [x] No swarm behavior is defined.
- [x] No platform adapters are defined.
- [x] No Engine RFC work is continued.
- [x] Runtime, Engine Platform, Governance, Standards, M.0, M.1, and STD-010 are not redefined.
- [x] ProjectStatus is not modified.

---

## 19. Next AGENTS v2 Document

The next AGENTS v2 document should be:

```text
AGENTS-v2-Lifecycle-and-Governance-Boundaries.md
```

Recommended purpose:

Define the governed documentation model for AGENTS v2 lifecycle states, lifecycle transitions, approval boundaries, escalation conditions, governance evidence, and review-readiness expectations for identities, registry entries, roles, and capabilities.

The next document should remain documentation-only unless Human Governance explicitly authorizes implementation scope and roadmap alignment permits that work.

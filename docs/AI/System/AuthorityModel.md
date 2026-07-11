# AI System Authority Model

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.AUTHORITY-MODEL` |
| Title | AI System Authority Model |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Authority Procedure |
| Document Type | Tool-Facing Authority Procedure |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V2.OP-005A` |
| Scope | Tool-facing authority resolution, conflict handling, human override handling, generated task authority rules, and escalation rules for agents operating in AI-DOS. |
| Out of Scope | Repository bootloader authority, governance atlas ownership, framework governance policy, operational state, roadmap sequencing, constitutional authority, meta models, standards, runtime architecture, engine RFCs, operational core ownership, commands, workflows, templates, certification, promotion, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Dependencies | Repository boot sequence, Governance Atlas navigation, Framework Governance decision policy, ProjectStatus operational state, DevelopmentPhases roadmap sequence, architecture authorities, operational core documents, and task-specific artifacts. |
| Consumes | Human task instruction, repository bootloader rules, governance navigation, decision policy, operational state, roadmap state, architecture authorities, standards, runtime and engine RFCs, operational core procedures, and task-specific artifacts. |
| Produces | Tool-facing authority resolution procedure, conflict resolution procedure, human override handling rules, generated task authority rules, and escalation rules. |
| Related Specifications | `docs/AI/System/SourceOfTruth.md`; commands, workflows, templates, and validation artifacts as task-specific execution aids. |
| Supersedes | Prior AI System Authority Model drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, authority-chain validation, frozen-area validation, and explicit approval before canonical use. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the tool-facing authority resolution procedure agents use while executingAI-DOS tasks.

It makes authority handling explicit for tools and agents after repository boot has established the applicable task boundary. It is not a second `AGENTS.md`, and it does not redefine Governance, AIFramework, AIOrchestrator, AgentSystemPrompt, ProjectStatus, the roadmap, or any architecture authority.

---

## 2. Scope

This procedure applies when an agent must determine which instruction, document, or task artifact governs execution behavior for an active task.

In scope:

- resolving authority order for tool-facing execution;
- identifying which authority wins when task inputs conflict;
- handling valid human instructions and human overrides;
- constraining generated task authority;
- escalating unresolved conflicts or scope violations.

Out of scope:

- changing repository boot rules;
- approving, certifying, promoting, or canonicalizing documents;
- updating ProjectStatus;
- redefining governance policy;
- redefining the operational core;
- redefining runtime, engine, standards, meta, or constitutional architecture;
- modifying commands, workflows, or templates.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Authority Model owns:

- tool-facing authority resolution;
- conflict resolution procedure;
- human override handling;
- generated task authority rules;
- authority escalation rules.

### 3.2 Does Not Own

The AI System Authority Model does not own:

- `AGENTS.md` bootloader authority;
- Governance Atlas;
- Framework Governance;
- ProjectStatus;
- DevelopmentPhases;
- Constitution;
- Meta Models;
- Standards;
- Runtime;
- Engine RFCs;
- AIFramework;
- AIOrchestrator;
- AgentSystemPrompt;
- Commands;
- Workflows;
- Templates.

---

## 4. Current Authority Order

Agents shall resolve authority forAI-DOS v2 System Layer execution in this order:

```text
Human Governance
    ↓
AGENTS.md
    ↓
docs/AI/GOVERNANCE.md
    ↓
docs/AI/FrameworkGovernance.md
    ↓
docs/Projects/ForgeAI/Planning/ProjectStatus.md
    ↓
docs/Projects/ForgeAI/Planning/DevelopmentPhases.md
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
    ↓
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/
    ↓
docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md
    ↓
docs/AI/Runtime/A.4-Engine-Architecture-RFC.md
    ↓
docs/AI/Runtime/A.5.x Engine RFC family
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
Commands / Workflows / Templates / task-specific artifacts
```

Authority flows downward. Lower documents and artifacts consume higher authority and shall not redefine it.

---

## 5. Relationship to Higher Authorities

### 5.1 Human Governance

Human Governance is final. A valid human instruction may narrow task scope, select an authorized task, require validation, or approve a specific governed change.

### 5.2 AGENTS.md

`AGENTS.md` is the repository bootloader and task-entry authority. This document applies only after the repository boot sequence, task classification, file-safety boundary, and validation expectations are known.

### 5.3 Governance Atlas

`docs/AI/GOVERNANCE.md` is the canonical governance navigation map. This document consumes that map to locate authority; it does not replace the map or the authorities the map identifies.

### 5.4 Framework Governance

`docs/AI/FrameworkGovernance.md` governs decision policy when ownership interpretation, review requirements, approval requirements, promotion requirements, or conflict handling require policy guidance.

### 5.5 ProjectStatus and DevelopmentPhases

`docs/Projects/ForgeAI/Planning/ProjectStatus.md` records operational state, current phase, current stage, current objective, next queue, frozen areas, and status-update policy.

`docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` defines roadmap sequence. Agents shall not skip phases or begin future-phase work unless Human Governance explicitly activates that scope.

---

## 6. Conflict Resolution Procedure

When instructions, documents, or artifacts conflict, agents shall:

1. Preserve Human Governance as final authority.
2. Preserve `AGENTS.md` as repository bootloader authority.
3. Use `docs/AI/GOVERNANCE.md` to identify the correct governing authority.
4. Use `docs/AI/FrameworkGovernance.md` when policy interpretation is required.
5. Preserve `docs/Projects/ForgeAI/Planning/ProjectStatus.md` as operational state only, not architecture.
6. Preserve `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` as roadmap sequence only, not live operational state.
7. Prefer the higher authority in the current authority order.
8. Treat commands, workflows, templates, generated tasks, checklists, validation artifacts, and conversation-derived task notes as execution aids that cannot override higher authority.
9. Stop and escalate when the conflict cannot be resolved safely within the active task boundary.

---

## 7. Human Override Handling

A human instruction may authorize or constrain work only within the authority boundary available to Human Governance and the active task.

Agents shall not use a human instruction to silently bypass:

- explicit file restrictions;
- frozen-area restrictions;
- roadmap order;
- required validation;
- review, approval, certification, or promotion requirements;
- ProjectStatus update policy;
- source-of-truth rules;
- architecture authority boundaries.

When a human instruction changes documented project direction, agents shall recommend the appropriate documentation update path instead of relying on conversation history as durable authority.

---

## 8. Generated Task Authority

Generated tasks are executable only when traceable to higher authority:

```text
Human Governance or authorized roadmap/status source
    ↓
AGENTS.md boot classification and file-safety boundary
    ↓
docs/AI/GOVERNANCE.md authority routing
    ↓
docs/Projects/ForgeAI/Planning/ProjectStatus.md active operational state
    ↓
docs/Projects/ForgeAI/Planning/DevelopmentPhases.md roadmap sequence
    ↓
Applicable architecture, operational core, command, workflow, template, or task artifact
```

A generated task may narrow execution scope, describe steps, or identify validation requirements. It may not redefine architecture, override higher authority, modify ProjectStatus without authorization, skip roadmap order, or promote/certify documents.

---

## 9. Authority Escalation Rules

Agents shall stop and escalate when:

- the active task type cannot be classified;
- required authority documents are missing or inaccessible;
- the current phase, stage, objective, next queue, or frozen areas cannot be determined;
- the requested work touches a frozen area without explicit authorization;
- the requested work crosses roadmap boundaries;
- authority documents conflict in a way that cannot be resolved by the current order;
- the task implies unauthorized implementation, certification, promotion, migration, or ProjectStatus update scope;
- a lower artifact attempts to redefine a higher authority.

Escalation output shall identify the conflict, cite the competing authorities, describe the blocked action, and recommend safe resolution options for Human Governance.

---

## 10. Historical Context

Earlier drafts of this document mixed current operating rules with future-track planning language and obsolete paths. This refactor preserves only the useful intent: agents need an explicit tool-facing procedure for applying the repository authority chain safely during task execution.

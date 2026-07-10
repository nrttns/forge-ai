# AI System Boot Sequence

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.SYSTEM.BOOT-SEQUENCE` |
| Title | AI System Boot Sequence |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Boot Procedure |
| Document Type | Tool-Facing Boot Procedure |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.OP-005B` |
| Scope | Repository boot procedure, document loading order, context assembly order, boot validation, and boot failure handling for Forge AI agents. |
| Out of Scope | Governance redesign, authority decisions, Runtime ownership, Engine ownership, command definitions, workflow definitions, template definitions, ProjectStatus updates, certification, promotion, and implementation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/AuthorityModel.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Target Repository Resolution Result, resolved Target AGENTS path, repository bootloader, AuthorityModel authority resolution, AIFramework operational entry point, AIOrchestrator execution routing, AgentSystemPrompt agent behavior rules, active ProjectStatus, DevelopmentPhases roadmap, and task-specific runtime, engine, command, workflow, and template documents when required. |
| Consumes | Human task instruction, Target Repository Resolution Result, resolved Target Repository root, resolved Target AGENTS path, target-project resource declarations, protected areas, validation context, AGENTS.md bootloader rules, AuthorityModel authority procedure, AIFramework operational guidance, AIOrchestrator routing rules, AgentSystemPrompt behavior constraints, relevant runtime and engine authorities, commands, workflows, templates, validation expectations, ProjectStatus operational state, and DevelopmentPhases roadmap sequence. |
| Produces | System Layer boot sequence, document loading order, context assembly order, boot validation expectations, boot failure handling, and completion-report expectations. |
| Related Specifications | `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; Commands; Workflows; Templates |
| Supersedes | Prior AI System Boot Sequence operating-procedure drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, authority-chain validation, ProjectStatus policy validation, roadmap validation, frozen-area validation, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the Forge AI v2 System Layer boot procedure used by AI agents before executing repository work.

Boot consumes the Target Repository Resolution Result, then establishes the task instruction, authority path, document loading order, context assembly order, execution boundary, validation expectation, and completion-report requirement. It prevents agents from relying on stale memory, conversational assumptions, undocumented authority, or lower-level execution aids that conflict with higher authority.

This document requires `docs/AI/System/TargetRepositoryResolution.md` as a precondition and consumes `docs/AI/System/AuthorityModel.md`. It does not redefine AuthorityModel, Governance, Framework Governance, ProjectStatus, Runtime, Engine, commands, workflows, or templates.

---

## 2. Scope

### 2.1 In Scope

This boot procedure covers:

1. Repository boot procedure after Target Repository Resolution.
2. Document loading order.
3. Context assembly order.
4. Boot validation.
5. Boot failure handling.
6. Completion-report expectations for boot-related execution.

### 2.2 Out of Scope

This boot procedure does not:

1. Own governance.
2. Make authority decisions.
3. Redefine or own Runtime architecture.
4. Redefine or own Engine architecture.
5. Define commands.
6. Define workflows.
7. Define templates.
8. Update or reinterpret ProjectStatus.
9. Approve, certify, promote, or canonicalize any artifact.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Boot Sequence owns:

- repository boot procedure after Target Repository Resolution;
- document loading order;
- context assembly order;
- boot validation;
- boot failure handling.

### 3.2 Does Not Own

The AI System Boot Sequence does not own:

- Target Repository selection or discovery;
- governance;
- authority decisions;
- Runtime;
- Engine;
- commands;
- workflows;
- templates;
- ProjectStatus.

---

## 4. Boot Sequence

Agents shall use the following boot sequence for Forge AI v2 System Layer execution:

```text
Human Task
    ↓
docs/AI/System/TargetRepositoryResolution.md
    ↓
AGENTS.md
    ↓
docs/AI/System/AuthorityModel.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
Relevant Runtime / Engine documents (only if required)
    ↓
Commands
    ↓
Workflows
    ↓
Templates
    ↓
Execution
    ↓
Validation
    ↓
Completion Report
```

Rules:

1. Begin with the human task instruction and the resolved Target Repository context produced by `docs/AI/System/TargetRepositoryResolution.md`.
2. Consume the resolved Target Repository root, Target AGENTS path, target-project resource declarations, protected areas, and validation context before loading target-project state.
3. Use the resolved Target AGENTS path as the repository bootloader and do not independently rediscover or override the Target Repository.
4. Use `docs/AI/System/AuthorityModel.md` to resolve tool-facing authority questions after the bootloader establishes the task boundary.
5. Load `docs/AI/AIFramework.md`, `docs/AI/AIOrchestrator.md`, and `docs/AI/AgentSystemPrompt.md` in that order for Operational Core guidance.
6. Load Runtime and Engine documents only when the active task requires Runtime or Engine authority.
7. Load commands, workflows, and templates only as execution aids after higher authority and operational context are understood.
8. Execute only within the active task boundary.
9. Validate according to the task type and governing authorities.
10. End with a completion report that records scope, modified files, validation, risks, and recommended next step.

---

## 5. Context Assembly Order

After reading the required boot documents, agents assemble context in this order:

1. Human task objective and explicit file restrictions.
2. Target Repository Resolution Result: resolved Target Repository root, Target AGENTS path, target-project resource declarations, protected areas, and validation context.
3. Repository bootloader requirements from the resolved Target AGENTS path.
4. Authority resolution requirements from `docs/AI/System/AuthorityModel.md`.
5. Operational Core guidance from `docs/AI/AIFramework.md`.
6. Execution routing from `docs/AI/AIOrchestrator.md`.
7. Agent behavior constraints from `docs/AI/AgentSystemPrompt.md`.
8. Operational state from `docs/DevelopmentPhases/ProjectStatus.md`.
9. Roadmap sequence from `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`.
10. Relevant Runtime or Engine authorities, only when required by the active task.
11. Relevant commands, workflows, templates, checklists, and validation artifacts.
12. Source files or documents explicitly in scope for the task.

Lower-level execution aids cannot override higher authority, ProjectStatus policy, roadmap order, frozen-area boundaries, or explicit human file restrictions.

---

## 6. Boot Validation

Before execution, agents shall validate that:

1. The active task type is classified.
2. Target Repository Resolution has completed with `RESOLVED` status.
3. Required boot documents are readable.
4. The active ProjectStatus path is `docs/DevelopmentPhases/ProjectStatus.md`.
5. The roadmap path is `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`.
6. Frozen-area boundaries are known when relevant.
7. Task-specific authority documents have been identified.
8. File restrictions are understood.
9. Validation commands or checks have been selected for the task type.
10. No lower-level command, workflow, template, or generated task conflicts with higher authority.

---

## 7. Boot Failure Handling

Stop and report a blocker when:

- Target Repository Resolution is incomplete, ambiguous, conflicting, or unsafe;
- the resolved Target AGENTS path is missing or unreadable;
- `docs/AI/System/AuthorityModel.md` is missing or unreadable;
- required Operational Core documents are missing or unreadable;
- `docs/DevelopmentPhases/ProjectStatus.md` is missing or unreadable when operational state is required;
- `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` is missing or unreadable when roadmap sequence is required;
- the active task type cannot be classified;
- authority or ownership conflicts cannot be resolved through the authority order;
- the requested work conflicts with explicit file restrictions, ProjectStatus policy, roadmap order, or frozen-area boundaries;
- validation, review, certification, approval, promotion, or ProjectStatus update requirements are ambiguous;
- source code changes are required but the active task does not authorize source code changes.

The completion report shall identify the blocker, cite the governing boundary when possible, and recommend a Human Governance resolution path.

---

## 8. Completion Report Expectations

A completion report for work governed by this boot sequence should include:

- summary;
- files modified;
- boot sequence confirmation;
- authority validation;
- roadmap validation;
- ProjectStatus policy confirmation;
- validation commands and results;
- risks or blockers;
- recommended next step.

Agents may recommend a ProjectStatus update when operational state is affected, but shall not update ProjectStatus unless the task explicitly authorizes that change.

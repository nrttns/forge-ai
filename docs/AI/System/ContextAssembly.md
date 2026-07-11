# AI System Context Assembly

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.CONTEXT-ASSEMBLY` |
| Title | AI System Context Assembly |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Context Procedure |
| Document Type | Tool-Facing Context Assembly Procedure |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.OP-005D` |
| Scope | Context source selection, minimum required reading set, task-specific context boundary, authority-aware context collection, evidence inclusion, missing-context detection, and context conflict reporting forAI-DOS agents. |
| Out of Scope | Authority resolution, source-of-truth decisions, boot sequence ownership, governance decisions, ProjectStatus ownership, Runtime definitions, Engine definitions, command definitions, workflow definitions, template definitions, execution, validation, certification, canonical promotion, and implementation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/System/AuthorityModel.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SourceOfTruth.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Repository bootloader, AuthorityModel authority resolution, BootSequence loading order, SourceOfTruth domain mapping, Governance Atlas navigation, Framework Governance policy, ProjectStatus operational state, DevelopmentPhases roadmap sequence, Operational Core documents, and task-specific authority or evidence files. |
| Consumes | Human task instruction, AuthorityModel procedure, BootSequence procedure, SourceOfTruth procedure, ProjectStatus operational state, DevelopmentPhases roadmap, Operational Core guidance, task-specific authorities, relevant commands, workflows, templates, Runtime and Engine documents when required, and evidence files when required. |
| Produces | Minimum required reading set, task-specific context boundary, assembled context packet, missing-context report, context conflict report, and execution-boundary inputs. |
| Related Specifications | `docs/AI/System/DecisionModel.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; Commands; Workflows; Templates; Evidence artifacts |
| Supersedes | Prior AI System Context Assembly operating-procedure drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, context-boundary validation, source hierarchy validation, ProjectStatus policy validation, roadmap validation, frozen-area validation, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines howAI-DOS agents collect the minimum necessary context for a task.

Context Assembly determines which documents, task inputs, state files, authority documents, templates, commands, workflows, Runtime or Engine references, and evidence are required for safe execution.

This document consumes `docs/AI/System/AuthorityModel.md`, `docs/AI/System/BootSequence.md`, and `docs/AI/System/SourceOfTruth.md`. It does not redefine authority resolution, the boot sequence, source-of-truth decisions, Governance, ProjectStatus, Runtime, Engine, commands, workflows, templates, execution, validation, certification, or canonical promotion.

---

## 2. Scope

### 2.1 In Scope

This procedure covers:

1. Context source selection.
2. Minimum required reading set.
3. Task-specific context boundary.
4. Authority-aware context collection.
5. Evidence inclusion.
6. Missing-context detection.
7. Context conflict reporting.

### 2.2 Out of Scope

This procedure does not own:

1. Authority resolution.
2. Source-of-truth decisions.
3. Boot sequence definition.
4. Governance decisions.
5. ProjectStatus ownership.
6. Runtime definitions.
7. Engine definitions.
8. Commands.
9. Workflows.
10. Templates.
11. Execution.
12. Validation.
13. Certification.
14. Canonical promotion.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Context Assembly procedure owns:

- context source selection;
- minimum required reading set;
- task-specific context boundary;
- authority-aware context collection;
- evidence inclusion;
- missing-context detection;
- context conflict reporting.

### 3.2 Does Not Own

The AI System Context Assembly procedure does not own:

- authority resolution;
- source-of-truth decision;
- boot sequence;
- governance decisions;
- ProjectStatus ownership;
- Runtime definitions;
- Engine definitions;
- commands;
- workflows;
- templates;
- execution;
- validation;
- certification;
- canonical promotion.

---

## 4. Context Assembly Procedure

Agents shall assemble context in this sequence:

```text
Human Task
    ↓
docs/AI/System/AuthorityModel.md
    ↓
docs/AI/System/BootSequence.md
    ↓
docs/AI/System/SourceOfTruth.md
    ↓
docs/DevelopmentPhases/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
Operational Core
    ↓
Task-specific authorities
    ↓
Commands / Workflows / Templates if relevant
    ↓
Runtime / Engine RFCs only if relevant
    ↓
Evidence files if relevant
    ↓
Assembled Context Packet
```

Procedure rules:

1. Start with the human task instruction and explicit file restrictions.
2. Use AuthorityModel for authority-resolution needs.
3. Use BootSequence for loading order and boot expectations.
4. Use SourceOfTruth to identify domain authorities and avoid conflicting sources.
5. Include ProjectStatus when the task depends on active state, current phase, current stage, current objective, next queue, frozen areas, or status-update policy.
6. Include DevelopmentPhases when roadmap sequence, phase boundaries, or future-scope constraints matter.
7. Include Operational Core documents when task execution depends on AIFramework, AIOrchestrator, or AgentSystemPrompt behavior.
8. Include task-specific authorities only after the governing domain is known.
9. Include commands, workflows, and templates only when they are relevant execution aids.
10. Include Runtime or Engine RFCs only when the task touches Runtime or Engine concerns.
11. Include evidence files only when evidence, review, audit, or validation context is required.
12. Produce a bounded Assembled Context Packet before execution begins.

---

## 5. Context Boundary Rules

Agents shall preserve a minimum-necessary context boundary:

1. Collect only context needed for the active task.
2. Do not read unrelated architecture when task scope is operational.
3. Do not read Runtime or Engine RFCs unless the task touches Runtime or Engine concerns.
4. Do not read reports unless evidence or review context is required.
5. Do not infer active state from memory.
6. Do not merge conflicting context sources.
7. Stop when required context is missing.
8. Do not treat source code as architectural authority when documentation defines the governing contract.
9. Do not use conversation as long-lived state.
10. Do not expand scope beyond the active task.
11. Do not update ProjectStatus from temporary context.

---

## 6. Context Packet Model

The Assembled Context Packet should include only the applicable fields for the active task:

| Field | Description |
|:---|:---|
| Task Instruction | Human task objective, explicit scope, file restrictions, and required validation. |
| Authority Set | Governing authorities selected through AuthorityModel and SourceOfTruth. |
| Project State | ProjectStatus facts required for active-state decisions. |
| Roadmap Position | DevelopmentPhases facts required for phase, stage, roadmap, or frozen-area boundaries. |
| Source of Truth Map | Domain-to-authority mapping relevant to the task. |
| Relevant Operational Documents | AIFramework, AIOrchestrator, AgentSystemPrompt, or System Layer documents required for execution. |
| Relevant Commands | Command artifacts required for the task, when applicable. |
| Relevant Workflows | Workflow artifacts required for the task, when applicable. |
| Relevant Templates | Template artifacts required for the task, when applicable. |
| Relevant Runtime / Engine Documents | Runtime or Engine RFCs required for the task, when applicable. |
| Evidence | Reports, reviews, audits, validation output, or source files required as evidence. |
| Risks / Missing Inputs | Missing documents, ambiguous authority, conflicting context, or unresolved blockers. |
| Execution Boundaries | Files allowed to change, files prohibited from change, frozen areas, and validation limits. |

The Context Packet is temporary execution context. It is not a source of truth, ProjectStatus update, review decision, certification result, approval, or canonical promotion.

---

## 7. Validation Rules

Agents shall validate assembled context before execution:

1. Context includes ProjectStatus when the task depends on active state.
2. Context includes DevelopmentPhases when roadmap order or phase boundaries matter.
3. Context includes AuthorityModel when authority resolution is needed.
4. Context includes SourceOfTruth when source conflict is possible.
5. Context includes BootSequence when boot order or loading order matters.
6. Context includes Operational Core documents when execution behavior depends on AIFramework, AIOrchestrator, or AgentSystemPrompt.
7. Context excludes unrelated documents.
8. Context excludes obsolete authority as an active source.
9. Context preserves frozen-area boundaries.
10. Context respects explicit file restrictions.
11. Context identifies missing inputs before execution.
12. Context reports unresolved conflicts instead of merging them.

---

## 8. Escalation Rules

If required context is missing, agents shall:

1. Stop.
2. Report the missing context as a blocker.
3. List each missing context input.
4. Identify why the missing context is required.
5. Do not invent context.
6. Do not proceed by memory.
7. Recommend the appropriate governance review, source clarification, or Human Governance instruction.

Agents shall also escalate when context conflicts cannot be resolved through AuthorityModel, BootSequence, and SourceOfTruth, or when the context boundary would require reading or modifying files outside the active task scope.

---

## 9. Completion Report Expectations

Completion reports for tasks using this procedure should include:

- summary of context assembled;
- key authorities used;
- ProjectStatus and DevelopmentPhases use, when applicable;
- source-of-truth map used, when applicable;
- documents intentionally excluded by context boundary;
- missing context or unresolved conflicts;
- validation performed;
- recommended next step.

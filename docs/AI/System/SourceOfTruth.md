# AI System Source of Truth

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.SOURCE-OF-TRUTH` |
| Title | AI System Source of Truth |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Source-of-Truth Procedure |
| Document Type | Tool-Facing Source-of-Truth Procedure |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.OP-005C` |
| Scope | Source-of-truth identification, authority lookup, domain-to-authority mapping, conflict detection, source validation, and escalation recommendation forAI-DOS agents. |
| Out of Scope | Governance decisions, architecture decisions, Runtime definitions, Engine definitions, ProjectStatus ownership, command definitions, workflow definitions, template definitions, certification, canonical promotion, and implementation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/System/AuthorityModel.md`; `docs/AI/System/BootSequence.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Repository bootloader, AuthorityModel authority resolution, BootSequence loading order, Governance Atlas navigation, Framework Governance policy, ProjectStatus operational state, DevelopmentPhases roadmap sequence, architecture authorities, Operational Core documents, and task-specific execution artifacts. |
| Consumes | Human task instruction, AGENTS.md bootloader rules, AuthorityModel procedure, BootSequence procedure, Governance Atlas routing, Framework Governance policy, ProjectStatus operational state, DevelopmentPhases roadmap, architecture authorities, Operational Core guidance, and task-specific commands, workflows, templates, reports, reviews, and roadmaps. |
| Produces | Source-of-truth hierarchy, source resolution procedure, domain-to-authority mapping, source validation rules, conflict detection rules, and escalation recommendations. |
| Related Specifications | `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; Commands; Workflows; Templates; Reviews; Reports; Roadmaps |
| Supersedes | Prior AI System Source of Truth operating-procedure drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, authority-chain validation, source hierarchy validation, ProjectStatus policy validation, roadmap validation, frozen-area validation, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines howAI-DOS agents determine the authoritative source for any information needed during execution.

The Source of Truth procedure preserves separation between governance, architecture, operational state, roadmap sequence, operational execution guidance, commands, workflows, templates, reports, reviews, and conversational task input.

This document consumes higher authorities. It does not redefine Governance, Framework Governance, AuthorityModel, BootSequence, AIFramework, AIOrchestrator, AgentSystemPrompt, ProjectStatus, DevelopmentPhases, Constitution, Meta Models, Standards, Runtime, Engine Platform, commands, workflows, or templates.

---

## 2. Scope

### 2.1 In Scope

This procedure covers:

1. Source-of-truth identification.
2. Authority lookup.
3. Domain-to-authority mapping.
4. Conflict detection.
5. Source validation.
6. Escalation recommendation.

### 2.2 Out of Scope

This procedure does not:

1. Make governance decisions.
2. Make architecture decisions.
3. Define Runtime concepts.
4. Define Engine concepts.
5. Own or update ProjectStatus.
6. Define commands.
7. Define workflows.
8. Define templates.
9. Certify artifacts.
10. Promote artifacts to canonical status.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Source of Truth procedure owns:

- source-of-truth identification;
- authority lookup;
- domain-to-authority mapping;
- conflict detection;
- source validation;
- escalation recommendation.

### 3.2 Does Not Own

The AI System Source of Truth procedure does not own:

- governance decisions;
- architecture decisions;
- Runtime definitions;
- Engine definitions;
- ProjectStatus ownership;
- commands;
- workflows;
- templates;
- certification;
- canonical promotion.

---

## 4. Source of Truth Hierarchy

Every information domain has exactly one canonical authority at a time. Agents shall identify that authority before relying on information from lower-level or adjacent documents.

Agents must never merge conflicting authorities. When documents conflict, the agent shall select the governing authority for the information domain, ignore lower-authority conflicting statements for execution, and report unresolved conflicts when the governing authority cannot be determined.

| Information Domain | Source of Truth |
|:---|:---|
| Governance navigation | `docs/AI/GOVERNANCE.md` |
| Framework Governance policy | `docs/AI/FrameworkGovernance.md` |
| Repository bootloader rules | `AGENTS.md` |
| System authority resolution | `docs/AI/System/AuthorityModel.md` |
| System boot procedure | `docs/AI/System/BootSequence.md` |
| System source-of-truth procedure | `docs/AI/System/SourceOfTruth.md` |
| Operational Core entry guidance | `docs/AI/AIFramework.md` |
| Operational routing and orchestration | `docs/AI/AIOrchestrator.md` |
| Agent behavior prompt rules | `docs/AI/AgentSystemPrompt.md` |
| Architecture principles | `docs/AI/Architecture/A.1-Constitution.md` |
| Meta Models | `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md` |
| Standards | Owning document in `docs/AI/Architecture/Standards/` |
| Terminology | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Metadata | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Runtime | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` |
| Engine Platform | `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` and the applicable A.4.x Engine Platform RFC |
| Runtime RFCs | The applicable RFC under `docs/AI/Runtime/` |
| Engine Specialization RFCs | The applicable A.5.x Engine RFC under `docs/AI/Runtime/` |
| Project Status | `docs/DevelopmentPhases/ProjectStatus.md` |
| Development Phases | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Commands | The applicable command artifact after higher authority is resolved |
| Workflows | The applicable workflow artifact after higher authority is resolved |
| Templates | The applicable template artifact after higher authority is resolved |
| Reports | The applicable report for evidence, findings, or review result only within its stated scope |
| Reviews | The applicable review document for review findings only within its stated scope |
| Roadmaps | The applicable roadmap document for strategic sequence only within its stated scope |

ProjectStatus records live operational state. It does not define architecture, governance, standards, Runtime, Engine Platform, commands, workflows, templates, certification, or canonical promotion.

Roadmaps define planned sequence. They do not replace ProjectStatus, governance decision policy, architecture authority, or approval requirements.

Reports and reviews provide evidence and findings. They do not redefine architecture unless an approved authority explicitly incorporates their changes through governance.

---

## 5. Source Resolution Procedure

When multiple documents discuss the same topic, agents shall:

1. Identify the information domain.
2. Locate the governing authority for that domain using this procedure, `docs/AI/System/AuthorityModel.md`, and `docs/AI/GOVERNANCE.md`.
3. Confirm that the governing authority is readable and applicable to the active task.
4. Use the governing authority as the source of truth for that information domain.
5. Treat lower-authority documents, generated artifacts, reports, reviews, commands, workflows, templates, and conversation as contextual only when they discuss the same topic.
6. Ignore lower-authority conflicting statements for execution.
7. Report unresolved conflicts when the governing authority is missing, unclear, duplicated, circular, or contradicted by another document with equal authority.
8. Stop if safe execution depends on a source-of-truth decision that cannot be resolved within the active task boundary.

---

## 6. Conversation and Generated Artifact Authority

Conversation may provide a valid active-task instruction when it does not conflict with higher authority, explicit file restrictions, ProjectStatus policy, roadmap order, or frozen-area boundaries.

Conversation is not a permanent source of truth for governance, architecture, operational state, roadmap sequence, validation, certification, approval, promotion, or project-state advancement unless converted into approved documentation through the appropriate governance path.

Generated artifacts, generated task notes, checklists, plans, summaries, and automation output may support execution evidence. They must not become the source of truth for any governed domain unless an authorized human governance process promotes the relevant content into the correct authority document.

---

## 7. Source Validation Rules

Agents shall validate source-of-truth decisions using these rules:

1. Each information domain has one source of truth for the current task.
2. No domain may have circular authority.
3. No domain may duplicate authority across peer documents.
4. No domain may have conflicting canonical owners.
5. No generated artifact may become source of truth by implication.
6. No review document may redefine architecture.
7. No report may promote, certify, or canonicalize an artifact by implication.
8. No roadmap may redefine governance.
9. No ProjectStatus entry may redefine architecture.
10. No command, workflow, or template may override higher authority.
11. No conversation-derived instruction may silently replace governed documentation.
12. No missing authority may be invented by an agent.

---

## 8. Escalation Rules

If no authoritative source exists, agents shall:

1. Stop.
2. Report the missing authority as a blocker.
3. Identify the affected information domain.
4. Recommend governance review or Human Governance clarification.
5. Avoid creating, selecting, or inventing a new authority unless the active task explicitly authorizes that governed document change.

Agents shall also escalate when:

- two apparent authorities claim the same domain;
- authority is circular;
- authority conflicts cannot be resolved by the hierarchy;
- a lower-level artifact conflicts with a higher authority but the execution impact is unclear;
- the source-of-truth decision would modify ProjectStatus, approve, certify, promote, or activate frozen work without explicit authorization.

---

## 9. Completion Report Expectations

Completion reports for tasks that use this procedure should include:

- the information domain evaluated;
- the source of truth selected;
- any lower-authority conflicting statements ignored;
- unresolved source conflicts or blockers;
- validation performed;
- recommended next step.

# AI System Decision Model

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.SYSTEM.DECISION-MODEL` |
| Title | AI System Decision Model |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | System Layer Decision Procedure |
| Document Type | Tool-Facing Decision Procedure |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.OP-005E` |
| Scope | Decision classification, safe-action selection, stop/proceed rules, escalation decisions, command or workflow routing decisions, ProjectStatus update recommendation decisions, blocker decisions, and validation or review routing decisions for Forge AI agents. |
| Out of Scope | Authority resolution, source-of-truth ownership, context assembly, governance decisions, ProjectStatus ownership, Runtime definitions, Engine definitions, command definitions, workflow definitions, template definitions, execution, certification, canonical promotion, and implementation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/System/AuthorityModel.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Repository bootloader, AuthorityModel authority resolution, BootSequence loading order, SourceOfTruth domain mapping, ContextAssembly context packet, Governance Atlas navigation, Framework Governance policy, ProjectStatus operational state, DevelopmentPhases roadmap sequence, Operational Core documents, and task-specific constraints. |
| Consumes | Human task instruction, AuthorityModel procedure, BootSequence procedure, SourceOfTruth map, ContextAssembly packet, ProjectStatus state, DevelopmentPhases roadmap position, frozen-area boundaries, task-specific constraints, available command/workflow/template routes, validation requirements, missing inputs, and conflict state. |
| Produces | Allowed decision outcome, decision rationale, blocker report, escalation recommendation, command/workflow/template routing decision, ProjectStatus update recommendation, validation or review routing decision, and execution handoff boundary. |
| Related Specifications | `docs/AI/System/ExecutionSequence.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; Commands; Workflows; Templates; validation and review artifacts |
| Supersedes | Prior AI System Decision Model operating-procedure drafts. |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Framework Governance review, STD-010 metadata validation, decision-outcome validation, ProjectStatus policy validation, roadmap validation, frozen-area validation, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines how Forge AI agents choose the next safe action after authority resolution, boot, source-of-truth selection, and context assembly.

DecisionModel determines the safe operational decision after context is assembled. It answers whether an agent should proceed, stop, ask for Human Governance, recommend a ProjectStatus update, route to a command, route to a workflow, route to validation or review, or report a blocker.

This document consumes `docs/AI/System/AuthorityModel.md`, `docs/AI/System/BootSequence.md`, `docs/AI/System/SourceOfTruth.md`, and `docs/AI/System/ContextAssembly.md`. It does not redefine authority resolution, boot order, source-of-truth ownership, context assembly, Governance, ProjectStatus, Runtime, Engine, commands, workflows, templates, execution, certification, or canonical promotion.

---

## 2. Scope

### 2.1 In Scope

This procedure covers:

1. Decision classification.
2. Safe-action selection.
3. Stop/proceed rules.
4. Escalation decisions.
5. Command or workflow routing decisions.
6. ProjectStatus update recommendation decisions.
7. Blocker decisions.
8. Validation or review routing decisions.

### 2.2 Out of Scope

This procedure does not own:

1. Authority resolution.
2. Source-of-truth ownership.
3. Context assembly.
4. Governance decisions.
5. ProjectStatus ownership.
6. Runtime definitions.
7. Engine definitions.
8. Commands.
9. Workflows.
10. Templates.
11. Execution.
12. Certification.
13. Canonical promotion.

---

## 3. Operational Responsibilities

### 3.1 Owns

The AI System Decision Model owns:

- decision classification;
- safe-action selection;
- stop/proceed rules;
- escalation decision;
- command/workflow routing decision;
- ProjectStatus update recommendation decision;
- blocker decision;
- validation/review routing decision.

### 3.2 Does Not Own

The AI System Decision Model does not own:

- authority resolution;
- source-of-truth ownership;
- context assembly;
- governance decisions;
- ProjectStatus ownership;
- Runtime definitions;
- Engine definitions;
- commands;
- workflows;
- templates;
- execution;
- certification;
- canonical promotion.

---

## 4. Decision Inputs

Agents shall make decisions from the assembled and validated context. Decision inputs include:

- Human Task;
- Authority Set;
- Source of Truth Map;
- Context Packet;
- ProjectStatus state;
- DevelopmentPhases roadmap position;
- frozen areas;
- task-specific constraints;
- available command/workflow/template route;
- validation requirements;
- missing inputs;
- conflict state.

Conversation may be an active task input only when it does not conflict with higher authority, explicit file restrictions, ProjectStatus policy, roadmap order, or frozen-area boundaries. Decisions must not rely on memory when documented context is required.

---

## 5. Decision Outcomes

The Decision Model may select only one of the following outcomes:

| Outcome | Meaning |
|:---|:---|
| `PROCEED` | Continue to bounded execution because authority, source, context, file-safety, roadmap, frozen-area, and validation conditions are satisfied. |
| `STOP_BLOCKER` | Stop because a blocker prevents safe execution. |
| `ESCALATE_HUMAN_GOVERNANCE` | Stop and request Human Governance decision because the issue cannot be resolved within agent authority. |
| `ROUTE_COMMAND` | Route to the applicable command artifact as an execution aid after higher authority is confirmed. |
| `ROUTE_WORKFLOW` | Route to the applicable workflow artifact as an execution aid after higher authority is confirmed. |
| `ROUTE_TEMPLATE` | Route to the applicable template artifact as an execution aid after higher authority is confirmed. |
| `RECOMMEND_PROJECTSTATUS_UPDATE` | Recommend, but do not perform, a ProjectStatus update. |
| `AUTHORIZE_PROJECTSTATUS_UPDATE_ONLY_IF_EXPLICITLY_REQUESTED` | Allow ProjectStatus update handling only when the active task explicitly requests that update. |
| `REQUEST_MISSING_CONTEXT` | Stop and request required context that is missing. |
| `REPORT_CONFLICT` | Report an authority, source, context, file-safety, roadmap, or validation conflict. |
| `DEFER` | Defer action because safe execution depends on a later authorized decision or missing prerequisite. |

No other decision outcome is allowed.

---

## 6. Decision Procedure

Agents shall use this decision procedure after context is assembled:

1. Confirm authority set.
2. Confirm ProjectStatus and roadmap position.
3. Confirm source-of-truth map.
4. Confirm context packet completeness.
5. Check frozen areas.
6. Check file-safety restrictions.
7. Check task type.
8. Check missing inputs.
9. Check conflicts.
10. Select an allowed decision outcome.
11. Record decision rationale.
12. Hand off to execution, blocker report, or completion report.

The decision rationale shall identify the relevant authority, context, blocker, route, or validation requirement that supports the selected outcome.

---

## 7. Stop Rules

Agents shall stop when:

- authority is missing;
- ProjectStatus state is required but unavailable;
- source-of-truth conflict exists;
- context is incomplete;
- task crosses a frozen area without authorization;
- task requires implementation without authorization;
- task requests ProjectStatus update without explicit authorization;
- task conflicts with governance;
- validation requirements cannot be determined.

When a stop rule applies, the decision outcome shall be `STOP_BLOCKER`, `ESCALATE_HUMAN_GOVERNANCE`, `REQUEST_MISSING_CONTEXT`, `REPORT_CONFLICT`, or `DEFER`.

---

## 8. ProjectStatus Decision Rules

DecisionModel may recommend a ProjectStatus update when operational state appears affected or a completed milestone may need recording.

DecisionModel may not authorize or perform a ProjectStatus update unless the active task explicitly requests ProjectStatus update handling.

A ProjectStatus recommendation shall be reported separately from any file changes and shall not be applied as an incidental side effect of documentation, review, architecture, implementation, validation, or refactor work.

---

## 9. Validation Rules

Agents shall validate decisions before routing to execution or reporting completion:

1. Decision outcome is one of the allowed outcomes.
2. Decision rationale cites authority or context.
3. Decision does not rely on memory.
4. Decision does not merge conflicting authorities.
5. Decision preserves frozen-area boundaries.
6. Decision respects explicit file restrictions.
7. Decision does not route to execution when a blocker exists.
8. Decision does not treat commands, workflows, templates, reports, reviews, generated artifacts, or conversation as higher authority.
9. Decision does not perform ProjectStatus update handling unless explicitly requested.
10. Decision routes validation or review only when required validation inputs are available or the missing inputs are reported.

---

## 10. Escalation Rules

If a safe decision cannot be selected, agents shall:

1. Stop.
2. Report the blocker.
3. List missing authority, missing context, or conflict state.
4. Recommend a Human Governance decision or governance review.
5. Do not guess.
6. Do not proceed by memory.
7. Do not invent authority, context, validation requirements, or ProjectStatus state.

Agents shall also escalate when the selected decision would require approval, certification, canonical promotion, frozen-area activation, or ProjectStatus update handling beyond the active task authorization.

---

## 11. Completion Report Expectations

Completion reports for tasks using this procedure should include:

- selected decision outcome;
- decision rationale;
- authority and context used;
- ProjectStatus and DevelopmentPhases status when relevant;
- blocker, conflict, missing context, or escalation when present;
- command, workflow, template, validation, or review route when selected;
- ProjectStatus update recommendation when applicable;
- recommended next step.

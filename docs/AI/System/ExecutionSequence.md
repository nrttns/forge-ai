# AI System Execution Sequence

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

Document Type: Tool-Facing Execution Procedure

Authority: `AGENTS.md`

Related Documents:

```text
docs/AI/System/BootSequence.md
docs/AI/System/DecisionModel.md
docs/AI/AIOrchestrator.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/AI/Workflows/ProjectStateUpdater.md
```

---

# Purpose

This document defines the required task execution lifecycle for AI agents, automation, and future swarms operating in Forge AI.

The execution sequence operationalizes existing AI Framework and Validation rules. It does not redefine architecture or replace command, workflow, review, certification, or project-state documents.

---

# Required Lifecycle

Every task must follow this sequence:

```text
State
    ↓
Context
    ↓
Planning
    ↓
Task
    ↓
Command
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
ProjectStatus update, only when permitted
```

---

# Lifecycle Responsibilities

## 1. State

Read `docs/ProjectStatus.md` to determine current live project position, active phase, active stage, active historical sprint, blockers, and recommended next action.

## 2. Context

Assemble authoritative context using `docs/AI/System/ContextAssembly.md`. Context must be current, scoped, and traceable to documentation.

## 3. Planning

Use `docs/AI/Workflows/TaskPlanner.md` and the AI Orchestrator to identify the task type, scope, acceptance expectations, relevant command, and required validation.

## 4. Task

Confirm the task is authorized by documented state or explicit human instruction and does not conflict with higher authority.

## 5. Command

Select the correct command document:

```text
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentImplementationCommand.md
docs/AI/Commands/AgentAuditCommand.md
docs/AI/Commands/AgentDocumentationCommand.md
docs/AI/Commands/AgentBugFixCommand.md
```

Use the command to bound allowed actions, forbidden actions, completion report requirements, and quality gates.

## 6. Execution

Perform only the approved task scope. Do not modify unrelated files. Do not modify source code for documentation-only tasks. Do not update ProjectStatus during execution unless the selected project-state workflow explicitly authorizes it after certification.

## 7. Validation

Validation is mandatory before review. Use `docs/AI/Validation/ValidationLifecycle.md`, `docs/AI/Validation/ValidationLevels.md`, and the relevant checklist structure to verify evidence-based conformance.

Validation verifies evidence. It does not certify completion and does not update ProjectStatus.

## 8. Review

Review is mandatory after validation and before certification. Use `docs/AI/Checklists/AgentReviewChecklist.md` or a more specific approved review checklist.

Review evaluates readiness. It does not replace validation and does not certify completion by itself.

## 9. Certification

Certification follows successful validation and review. Use `docs/AI/Validation/ValidationCertification.md` to determine whether the work can be recognized as complete.

Certification recognizes completion. It does not implement work and does not automatically update ProjectStatus.

## 10. ProjectStatus Update

Update `docs/ProjectStatus.md` only when all conditions are true:

- certification outcome permits state advancement;
- certified scope affects live operational project state;
- the governing workflow requires or permits a ProjectStatus update;
- the update preserves historical sprint identifiers;
- no unresolved blocker would make the update misleading.

ProjectStatus updates must use `docs/AI/Workflows/ProjectStateUpdater.md`.

---

# Non-Skipping Rule

Execution cannot skip validation, review, or certification when the task claims completion, readiness, state advancement, or acceptance.

A task may be reported as partially complete or blocked without certification, but it must not be represented as complete and must not advance ProjectStatus.

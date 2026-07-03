# AI Framework Specification

## Status

**Status:** v1.0 RC2

**Document Type:** Core Framework Specification

**Authority:** `docs/AI/AIFramework.md`

---

# Purpose

This document defines the platform-independent core subsystems of the AI Framework.

It preserves the RC1 intent while moving runtime, governance, reference architecture, and terminology into focused modules.

---

# Core Architecture

The Core layer contains the permanent capabilities of the framework regardless of target platform.

```text
Planning
Execution
Review
Validation
Documentation
Governance
Templates
Orchestration
Knowledge
Collaboration
State Management
```

Core represents the operating model. Runtime and platform adapters consume it.

---

# Planning Model

Planning is the decision engine of the AI Framework.

It transforms long-term architectural intent into executable work through a structured hierarchy of planning artifacts.

```text
Vision
    ↓
Platform
    ↓
Phase
    ↓
Stage
    ↓
Historical Sprint
    ↓
Task
```

Planning determines why work exists, where it belongs, who owns it, when it may begin, and when it is complete.

Execution consumes planning. Planning never consumes execution.

## Planning Responsibilities

Planning owns:

- project planning hierarchy;
- task derivation;
- stage progression;
- sprint mapping;
- execution planning;
- traceability from task to architectural intent.

Planning never performs implementation.

## Project State

Project State represents the live operational state of a project.

It records the current phase, stage, historical sprint, objective, progress, blockers, and next milestone.

Project State never replaces planning. It identifies the current position inside the planning hierarchy.

---

# Workflow Engine

The Workflow Engine moves agents from planning to completed work through deterministic states.

```text
Idle
    ↓
Boot
    ↓
Context Acquisition
    ↓
Planning
    ↓
Task Generation
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Project State Update
    ↓
Completion
    ↓
Idle
```

Each state has entry conditions, responsibilities, outputs, and exit criteria.

States may not be skipped.

## Workflow Invariants

- Context before planning.
- Planning before execution.
- Validation before review.
- Review before project state update.
- Project state update before next task generation.

If a state fails its exit criteria, execution stops and the blocker is reported.

---

# Command System

Commands transform planning decisions into executable behaviour.

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Execution
```

A command never determines what should be done. It determines how approved work should be executed.

## Standard Commands

| Command | Purpose |
| --- | --- |
| `AgentTaskCommand.md` | General operational procedure when no specialized command applies. |
| `AgentImplementationCommand.md` | Execute approved implementation work. |
| `AgentAuditCommand.md` | Perform architectural and implementation audits without adding features. |
| `AgentDocumentationCommand.md` | Create or maintain documentation while preserving hierarchy. |
| `AgentBugFixCommand.md` | Correct approved defects with focused scope and regression validation where applicable. |

## Command Invariants

Every command preserves planning authority, architectural ownership, dependency direction, documentation consistency, and quality gates.

Commands never redefine architecture.

---

# Template System

Templates define canonical output contracts.

A template is not a document. It is the minimum required structure, relationships, and quality expectations for an output.

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Template
    ↓
Artifact
```

## Template Categories

- Planning Templates: phase, stage, historical sprint.
- Validation Templates: audit, review report, validation report.
- Documentation Templates: RFC, ADR, project status, specification, README.
- Operational Templates: completion report, implementation summary, bug report, migration report.

Templates preserve structural consistency, terminology consistency, planning hierarchy, architectural traceability, and documentation quality.

---

# Review System

Review determines whether completed work is ready to become part of the project.

Review is independent from implementation and consumes validation results as evidence.

## Review Scope

Review may evaluate:

- architecture;
- implementation;
- documentation;
- planning compliance;
- ownership;
- dependencies;
- quality gates;
- project state updates.

## Review Outcomes

```text
Approved
Approved with Observations
Requires Follow-up
Rejected
```

Approval determines whether work may progress to certification or state transition.

---

# Validation

Validation is evidence-based verification that work conforms to approved expectations.

Validation may include automated tests, static analysis, architectural verification, documentation verification, dependency verification, template verification, and completion verification.

Validation precedes review and certification.

Detailed validation principles and lifecycle remain in:

- `docs/AI/Validation/AIFrameworkValidation.md`
- `docs/AI/Validation/ValidationLifecycle.md`

---

# Documentation

Documentation records architectural intent, operational procedure, implementation history, findings, decisions, and current state.

Documentation is a production artifact and should exist before implementation whenever practical.

Undocumented architecture is incomplete.

---

# State Management

State Management defines how the framework represents, preserves, evolves, and communicates the current condition of a project.

```text
Architectural State
    ↓
Planning State
    ↓
Execution State
    ↓
Project State
    ↓
Context
```

State provides continuity. Memory preserves derived reusable knowledge. Context supplies a temporary working set.

## State Transitions

```text
Planning State
    ↓
Execution State
    ↓
Validation
    ↓
Review
    ↓
Project State Update
    ↓
Historical State
```

Every transition should be documented and traceable.

---

# Orchestration

The AI Orchestrator coordinates planning, workflow selection, command selection, template selection, execution, validation, review, certification, state update, and next-action recommendation.

The Orchestrator consumes framework architecture. It does not replace it.

Operational orchestration remains defined in `docs/AI/AIOrchestrator.md`.

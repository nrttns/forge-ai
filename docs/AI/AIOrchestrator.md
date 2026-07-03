# AI Orchestrator

## Status

Status: Canonical AI Orchestration Workflow

Document Type: AI Runtime Coordination Standard

Authority:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
```

Consumes:

- `docs/ProjectStatus.md`
- `docs/AI/AIFramework.md`
- `docs/AI/Workflows/TaskPlanner.md`
- `docs/AI/Workflows/TaskGenerationWorkflow.md`
- `docs/AI/Workflows/ProjectStateUpdater.md`
- AI command documents
- AI templates
- AI review checklist

---

# Purpose

The AI Orchestrator coordinates the complete AI execution lifecycle.

It determines what should happen next, which workflow should be used, which command should execute the work, which template governs the output, and when project state may be updated.

The Orchestrator does not implement work directly.

It coordinates planning, execution, validation, review, certification, and state transition.

---

# Orchestration Philosophy

The AI Orchestrator never invents work.

It derives work from documented project state and approved planning artifacts.

The Orchestrator follows the AI Framework execution model:

```text
Knowledge
    ↓
State
    ↓
Context
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
Project State Update
```

Execution never changes architectural authority.

Project state determines the next task.

---

# Authority Model

Authority flows downward.

```text
Human Authority
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
Development Constitution
    ↓
Platform Governance
    ↓
ProjectStatus.md
    ↓
Phase
    ↓
Stage
    ↓
Historical Sprint
    ↓
Generated Task
```

If two documents conflict, the higher authority wins.

---

# Orchestration Lifecycle

The canonical orchestration lifecycle is:

```text
Boot
    ↓
Framework Initialization
    ↓
State Acquisition
    ↓
Context Assembly
    ↓
Task Planning
    ↓
Task Generation
    ↓
Command Selection
    ↓
Template Selection
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
Project State Update
    ↓
Next Action Recommendation
```

No stage should be skipped.

---

# Responsibilities

The AI Orchestrator is responsible for:

- determining the active project state;
- selecting the correct workflow;
- selecting the correct command document;
- selecting the correct documentation template;
- coordinating execution;
- coordinating validation;
- coordinating review;
- determining whether certification may occur;
- coordinating project state updates;
- identifying blockers;
- recommending the next action.

The Orchestrator consumes architecture.

It does not replace architecture.

---

# Workflow Selection

The Orchestrator selects a workflow based on the current project state.

| Situation | Workflow / Document |
| --- | --- |
| Determine next work | `Workflows/TaskPlanner.md` |
| Generate executable task | `Workflows/TaskGenerationWorkflow.md` |
| Update live project state | `Workflows/ProjectStateUpdater.md` |
| Audit sprint | `Commands/AgentAuditCommand.md` |
| Implementation sprint | `Commands/AgentImplementationCommand.md` |
| Documentation work | `Commands/AgentDocumentationCommand.md` |
| Bug resolution | `Commands/AgentBugFixCommand.md` |
| Review | `Checklists/AgentReviewChecklist.md` |

Only one primary workflow should be active at a time.

---

# Command Selection

The Orchestrator routes execution through command documents.

```text
Workflow
    ↓
Command
    ↓
Execution
```

Examples:

```text
Audit
    ↓
AgentAuditCommand.md
```

```text
Implementation
    ↓
AgentImplementationCommand.md
```

```text
Documentation
    ↓
AgentDocumentationCommand.md
```

Commands determine how work is executed.

They do not determine what work should exist.

---

# Template Selection

The Orchestrator selects the required output contract.

| Artifact | Template |
| --- | --- |
| Phase specification | `Templates/PhaseTemplate.md` |
| Stage specification | `Templates/StageTemplate.md` |
| Historical Sprint specification | `Templates/SprintTemplate.md` |
| Audit report | `Templates/AuditTemplate.md` |

Templates define output structure.

They do not define implementation behaviour.

---

# Certification Rule

The Orchestrator may advance project state only after:

- planning gate passes;
- implementation or audit work is complete;
- validation succeeds;
- documentation is synchronized;
- review is complete;
- architecture is preserved;
- blockers are resolved or recorded.

Project state must not advance after failed validation or failed review.

---

# Blocker Management

The Orchestrator must stop and report blockers when:

- project state is inconsistent;
- required documents are missing;
- ownership is ambiguous;
- architecture conflicts with implementation;
- validation fails;
- review fails;
- governance requires human approval.

The Orchestrator recommends corrective action rather than guessing.

---

# Completion Cycle

The orchestration cycle is complete when:

```text
Task Generated
    ↓
Task Executed
    ↓
Validation Passed
    ↓
Review Approved
    ↓
Certification Reached
    ↓
ProjectStatus Updated
    ↓
Next Action Determined
```

This creates the framework's closed-loop development cycle.

---

# Relationship to AI Framework

This document implements the orchestration model described by:

```text
docs/AI/AIFramework.md
```

It coordinates:

- Planning Model;
- Workflow Engine;
- Command System;
- Template System;
- Review System;
- State Management;
- Agent Lifecycle.

The Orchestrator is the operational brain of the AI Framework.

It coordinates execution without becoming the source of architectural truth.

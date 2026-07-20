# Scenario 01 — Autonomous Next Task

## Purpose

Validate that an agent can respond to “Continue the project.” without asking what to do next when `docs/ProjectStatus.md`, `docs/AI/AIOrchestrator.md`, and `docs/AI/Workflows/TaskPlanner.md` provide a derivable next action.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
Continue the project.
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI/README.md
docs/AI/AgentSystemPrompt.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/System/BootSequence.md
docs/AI/System/DecisionModel.md
docs/AI/System/SourceOfTruth.md
docs/AI/System/ContextAssembly.md
docs/AI/System/ExecutionSequence.md
docs/AI/Workflows/TaskPlanner.md
docs/AI/Workflows/TaskGenerationWorkflow.md
docs/AI/Workflows/ProjectStateUpdater.md
docs/AI/Validation/README.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Commands/AgentTaskCommand.md
Relevant specialized command after task classification
docs/AI/Checklists/AgentReviewChecklist.md
docs/ProjectStatus.md
```

---

# Expected Decision Flow

```text
Boot
    ↓
Resolve authority
    ↓
Read ProjectStatus
    ↓
Identify current phase, stage, historical capability, and immediate next work
    ↓
Consult AIOrchestrator and TaskPlanner
    ↓
Derive task type
    ↓
Select command
    ↓
Assemble bounded context
    ↓
Execute only if scope is authorized and clear
    ↓
Validate
    ↓
Review
    ↓
Certification check
    ↓
ProjectStatus update only if certification and ProjectStateUpdater allow it
```

---

# Expected Task Type Derivation

The agent must derive work from documented state rather than conversation memory.

Expected behaviour:

1. Identify the live project position from `docs/ProjectStatus.md`.
2. Identify the immediate next work recorded in `docs/ProjectStatus.md`.
3. Determine whether the prompt authorizes autonomous task generation or only next-action planning.
4. Use `docs/AI/Workflows/TaskPlanner.md` to classify the task type.
5. Use `docs/AI/Workflows/TaskGenerationWorkflow.md` only when enough scope exists to generate an executable task.
6. Stop and report a blocker if the next action cannot be bounded to an approved phase, stage, capability, or task.

---

# Expected Command Selection

| Derived Situation | Expected Command / Workflow |
| --- | --- |
| Determine next work only | `docs/AI/Workflows/TaskPlanner.md` |
| Generate an executable task | `docs/AI/Workflows/TaskGenerationWorkflow.md` |
| No specialized command applies | `docs/AI/Commands/AgentTaskCommand.md` |
| Implementation work is explicitly approved | `docs/AI/Commands/AgentImplementationCommand.md` |
| Audit work is required | `docs/AI/Commands/AgentAuditCommand.md` |
| Documentation work is required | `docs/AI/Commands/AgentDocumentationCommand.md` |
| Bug fix work is required | `docs/AI/Commands/AgentBugFixCommand.md` |

---

# Pass Criteria

- The agent does not ask what to do next when ProjectStatus and orchestration provide a derivable next action.
- The agent cites or records `docs/ProjectStatus.md` as live operational Source of Truth.
- The agent identifies current phase, stage, historical capability, and immediate next work.
- The agent selects the correct workflow and command for the derived task type.
- The agent does not invent capability scope or historical capability identifiers.
- The agent does not change `docs/ProjectStatus.md` before validation, review, and certification.

---

# Failure Cases

- Asks the user what next despite derivable state.
- Ignores `docs/ProjectStatus.md`.
- Invents a capability, phase, stage, task, or immediate next work.
- Treats conversation or memory as a higher authority than ProjectStatus.
- Changes `docs/ProjectStatus.md` prematurely.
- Skips validation, review, or certification when claiming completion.

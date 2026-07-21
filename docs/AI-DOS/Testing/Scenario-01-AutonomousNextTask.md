# Scenario 01 — Autonomous Next Task

## Purpose

Validate that an agent can respond to “Continue the project.” without asking what to do next when `docs/Projects/ForgeAI/Planning/ProjectStatus.md`, `docs/AI-DOS/AIOrchestrator.md`, and `docs/AI-DOS/Workflows/TaskPlanner.md` provide a derivable next action.

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
docs/AI-DOS/README.md
docs/AI-DOS/AgentSystemPrompt.md
docs/AI-DOS/AIFramework.md
docs/AI-DOS/AIOrchestrator.md
docs/AI-DOS/System/BootSequence.md
docs/AI-DOS/System/DecisionModel.md
docs/AI-DOS/System/SourceOfTruth.md
docs/AI-DOS/System/ContextAssembly.md
docs/AI-DOS/System/ExecutionSequence.md
docs/AI-DOS/Workflows/TaskPlanner.md
docs/AI-DOS/Workflows/TaskGenerationWorkflow.md
docs/AI-DOS/Workflows/ProjectStateUpdater.md
docs/AI-DOS/Validation/README.md
docs/AI-DOS/Validation/ValidationLifecycle.md
docs/AI-DOS/Validation/ValidationLevels.md
docs/AI-DOS/Validation/ValidationCertification.md
docs/AI-DOS/Commands/AgentTaskCommand.md
Relevant specialized command after task classification
docs/AI-DOS/Checklists/AgentReviewChecklist.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
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

1. Identify the live project position from `docs/Projects/ForgeAI/Planning/ProjectStatus.md`.
2. Identify the immediate next work recorded in `docs/Projects/ForgeAI/Planning/ProjectStatus.md`.
3. Determine whether the prompt authorizes autonomous task generation or only next-action planning.
4. Use `docs/AI-DOS/Workflows/TaskPlanner.md` to classify the task type.
5. Use `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md` only when enough scope exists to generate an executable task.
6. Stop and report a blocker if the next action cannot be bounded to an approved phase, stage, capability, or task.

---

# Expected Command Selection

| Derived Situation | Expected Command / Workflow |
| --- | --- |
| Determine next work only | `docs/AI-DOS/Workflows/TaskPlanner.md` |
| Generate an executable task | `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md` |
| No specialized command applies | `docs/AI-DOS/Commands/AgentTaskCommand.md` |
| Implementation work is explicitly approved | `docs/AI-DOS/Commands/AgentImplementationCommand.md` |
| Audit work is required | `docs/AI-DOS/Commands/AgentAuditCommand.md` |
| Documentation work is required | `docs/AI-DOS/Commands/AgentDocumentationCommand.md` |
| Bug fix work is required | `docs/AI-DOS/Commands/AgentBugFixCommand.md` |

---

# Pass Criteria

- The agent does not ask what to do next when ProjectStatus and orchestration provide a derivable next action.
- The agent cites or records `docs/Projects/ForgeAI/Planning/ProjectStatus.md` as live operational Source of Truth.
- The agent identifies current phase, stage, historical capability, and immediate next work.
- The agent selects the correct workflow and command for the derived task type.
- The agent does not invent capability scope or historical capability identifiers.
- The agent does not change `docs/Projects/ForgeAI/Planning/ProjectStatus.md` before validation, review, and certification.

---

# Failure Cases

- Asks the user what next despite derivable state.
- Ignores `docs/Projects/ForgeAI/Planning/ProjectStatus.md`.
- Invents a capability, phase, stage, task, or immediate next work.
- Treats conversation or memory as a higher authority than ProjectStatus.
- Changes `docs/Projects/ForgeAI/Planning/ProjectStatus.md` prematurely.
- Skips validation, review, or certification when claiming completion.

# AI System Decision Model

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

Document Type: Tool-Facing Decision Procedure

Authority: `AGENTS.md`

Related Documents:

```text
docs/AI/System/SourceOfTruth.md
docs/AI/System/ContextAssembly.md
docs/AI/System/ExecutionSequence.md
docs/AI/AIOrchestrator.md
docs/AI/Workflows/TaskPlanner.md
docs/ProjectStatus.md
```

---

# Purpose

This document defines how agents decide the next action from authoritative state and approved orchestration.

The Decision Model prevents agents from treating conversation, memory, or implementation artifacts as task authority when the next action is derivable from ProjectStatus, AIOrchestrator, and TaskPlanner.

---

# Decision Inputs

Agents must decide next action from these sources, in order:

```text
1. Higher-authority human instruction for the active task, when it does not conflict with governance
2. AGENTS.md
3. docs/AI/System/AuthorityModel.md
4. docs/ProjectStatus.md
5. docs/AI/AIOrchestrator.md
6. docs/AI/Workflows/TaskPlanner.md
7. Current Phase document
8. Current Stage document, when present
9. Active Historical Capability specification, when present
10. Relevant command, workflow, template, checklist, and validation documents
```

Conversation is not task authority when ProjectStatus provides a derivable next action. Conversation becomes authoritative only when it is a valid human instruction for the active task and does not conflict with higher-authority documents, or when it is converted into approved documentation through the required workflow.

---

# Decision Procedure

Use this sequence:

```text
1. Resolve authority.
2. Resolve live state from ProjectStatus.
3. Identify current phase, stage, capability, and immediate next work.
4. Determine whether the human request is within allowed scope.
5. Select task type.
6. Select workflow and command.
7. Assemble minimum context.
8. Verify validation availability.
9. Plan bounded execution.
10. Execute through the required lifecycle.
```

If any step fails, stop and report the blocker.

---

# Task Type Routing

| Task Type | Primary Command / Workflow | Required Validation |
| --- | --- | --- |
| Implementation | `docs/AI/Commands/AgentImplementationCommand.md` | Implementation, subsystem, or capability validation as applicable. |
| Audit | `docs/AI/Commands/AgentAuditCommand.md` | Document, subsystem, or framework validation as applicable. |
| Documentation | `docs/AI/Commands/AgentDocumentationCommand.md` | Document validation and reference resolution. |
| Bug Fix | `docs/AI/Commands/AgentBugFixCommand.md` | Bug evidence, regression verification, and relevant quality gates. |
| Review | `docs/AI/Checklists/AgentReviewChecklist.md` | Validation evidence must exist before readiness review. |
| Validation | `docs/AI/Validation/AIFrameworkValidation.md` and `docs/AI/Validation/ValidationLifecycle.md` | Validation level selected from `ValidationLevels.md`. |
| State Update | `docs/AI/Workflows/ProjectStateUpdater.md` | Certification must permit ProjectStatus advancement. |

---

# Derived Next Action Rule

Do not ask what should be done next when the next action can be derived from:

```text
docs/ProjectStatus.md
docs/AI/AIOrchestrator.md
docs/AI/Workflows/TaskPlanner.md
```

When a next action is derivable, the agent should proceed if it is within scope or report why it is blocked.

---

# Blocker Conditions

Decision making is blocked when:

- ProjectStatus and higher authority conflict;
- active task scope cannot be identified;
- requested work would change forbidden files or layers;
- validation documents required for the task are unavailable;
- the requested command does not match the task type;
- ProjectStatus advancement is requested without certification;
- the conversation asks for work that conflicts with documented authority.

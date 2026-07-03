# Agent Task Command

## Status

Status: Canonical Base Command  
Document Type: AI Command Standard  
Authority: `docs/AI/AIFramework.md`  
Extends: AI Framework v1.0  
Applies To: All AI agents

---

# Purpose

`AgentTaskCommand.md` defines the shared command procedure used by all task-oriented AI agents.

It is the base operational command.

Specialized commands extend this command instead of duplicating the entire workflow.

---

# Command Position

The command belongs to the AI Framework execution chain:

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Template
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
State Update
```

The command does not decide what should be done.

It defines how an approved task should be executed.

---

# Required Boot Sequence

Before executing a task, the agent must read:

```text
AGENTS.md
docs/AI/README.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/ProjectStatus.md
Current Phase
Current Stage
Assigned Historical Sprint or generated task
```

The agent must then select the correct specialized command if one applies.

---

# Task Classification

Every task must be classified before execution.

Supported task types include:

```text
Implementation
Audit
Documentation
Bug Fix
Review
Validation
General Task
```

If the task type is known, the specialized command must be used.

If no specialized command applies, this base command governs execution.

---

# Base Command Lifecycle

```text
Initialize
    ↓
Acquire Context
    ↓
Verify Planning
    ↓
Define Scope
    ↓
Execute
    ↓
Validate
    ↓
Prepare Review
    ↓
Report
```

No step may be skipped.

---

# Planning Verification

Before execution, verify:

- current Phase;
- current Stage;
- current Historical Sprint;
- task objective;
- ownership boundary;
- allowed work;
- forbidden work.

If any item cannot be verified, stop and escalate.

---

# Scope Rules

The agent must remain within approved scope.

The agent must not:

- redefine architecture;
- change ownership;
- implement future sprint objectives;
- modify historical sprint identifiers;
- bypass documentation;
- treat reference material as implementation truth.

---

# Validation

Run only relevant validation.

Typical validation includes:

```bash
composer dump-autoload
composer test
composer run quality
npm run build
npm run typecheck
npm test
```

Validation results must be reported honestly.

---

# Completion Report

Every task must finish with:

```text
Summary
Files changed
Architecture notes
Validation results
Risks or blockers
Recommended next step
```

The report becomes input for Review and Project State Update.

---

# Relationship to Other Commands

Specialized commands extend this base command:

```text
AgentImplementationCommand.md
AgentAuditCommand.md
AgentDocumentationCommand.md
AgentBugFixCommand.md
```

The base command remains the common operational contract.

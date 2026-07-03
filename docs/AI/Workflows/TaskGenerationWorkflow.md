# Task Generation Workflow

## Status

Status: Canonical AI Task Generation Workflow

Document Type: Self-Planning Agent Workflow

Authority:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
```

---

# Purpose

Task Generation transforms project state and planning decisions into an executable task statement.

The workflow allows an AI agent to move from documented project state to a scoped, validated, executable task without requiring a fully manual prompt.

The generated task is temporary.

It exists only for execution.

---

# Task Generation Philosophy

Tasks are derived.

They are not invented.

The workflow follows the AI Framework sequence:

```text
State
    ↓
Planning
    ↓
Workflow
    ↓
Command
    ↓
Task
```

Task Generation must preserve planning authority.

---

# Required Reading

Before generating a task, read:

```text
AGENTS.md
docs/AI/README.md
docs/AI/AIFramework.md
docs/AI/Workflows/TaskPlanner.md
docs/ProjectStatus.md
docs/DevelopmentPhases/ForgeAI2-DevelopmentPhases.md
Current Phase document
Current Stage document or Phase Stage README
Related Historical Sprint documentation when available
```

---

# Generation Process

```text
Receive Execution Plan
    ↓
Verify Current Mapping
    ↓
Verify Task Type
    ↓
Define Objective
    ↓
Define Scope
    ↓
Define Forbidden Work
    ↓
Select Deliverables
    ↓
Define Validation
    ↓
Generate Task Statement
    ↓
Return to Orchestrator
```

---

# Required Task Fields

Every generated task must include:

```text
Task Title
Current Mapping
Task Type
Objective
Required Reading
Scope
Allowed Work
Forbidden Work
Deliverables
Validation
Completion Report Format
```

---

# Generated Task Format

```text
Perform AXIS-V2.SPRINT-<ID> — <Title>

Current Mapping:
Platform
    ↓
Phase <XX> — <Phase Name>
    ↓
Stage <XX.X> — <Stage Name>
    ↓
Historical Sprint <YY.Y>

Task Type:
<Implementation | Audit | Documentation | Bug Fix | Review | Validation>

Objective:
<Derived objective>

Required Reading:
<List required documents>

Scope:
<Allowed work>

Forbidden Work:
<Forbidden work>

Deliverables:
<Expected outputs>

Validation:
<Commands or checks>

Completion Report:
Summary
Files changed
Architecture notes
Validation results
Blocking items
Next recommended step
```

---

# Audit Task Rule

If the generated task is an audit:

- use `docs/AI/Commands/AgentAuditCommand.md`;
- use `docs/AI/Templates/AuditTemplate.md`;
- do not implement new functionality;
- produce findings and verdict.

---

# Implementation Task Rule

If the generated task is implementation:

- use `docs/AI/Commands/AgentImplementationCommand.md`;
- use `docs/AI/Templates/SprintTemplate.md` when producing sprint documentation;
- remain inside current Stage scope;
- preserve ownership boundaries.

---

# Documentation Task Rule

If the generated task is documentation:

- use `docs/AI/Commands/AgentDocumentationCommand.md`;
- select the relevant template;
- preserve documentation hierarchy;
- avoid redefining architecture.

---

# Bug Fix Task Rule

If the generated task is bug resolution:

- use `docs/AI/Commands/AgentBugFixCommand.md`;
- identify root cause before implementation;
- keep changes minimal;
- add regression coverage where applicable.

---

# Safety Rules

The workflow must stop if:

- current phase is unknown;
- current stage is unknown;
- historical sprint is unknown;
- ownership is unclear;
- scope cannot be bounded;
- required documents are missing;
- task would redefine architecture.

---

# Completion Criteria

Task generation is complete when:

- task type is classified;
- command is selected;
- template is selected when needed;
- objective is explicit;
- scope is explicit;
- forbidden work is explicit;
- deliverables are defined;
- validation is defined.

The generated task may then proceed to execution through the selected command.

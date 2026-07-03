# Task Planner

## Status

Status: Canonical AI Planning Workflow

Document Type: AI Decision Engine

Authority:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
```

Consumes:

```text
docs/ProjectStatus.md
```

---

# Purpose

The Task Planner determines the next executable action from the current project state.

It is the planning decision engine of the AI Framework.

The Task Planner does not execute work.

It classifies work and prepares the Orchestrator to select the correct workflow, command, and template.

---

# Planning Philosophy

Tasks are derived from state.

They are not invented from conversation.

The planner must answer:

- Where is the project now?
- Which Phase owns the work?
- Which Stage owns the work?
- Which Historical Capability is active?
- What type of work is required?
- Which command should execute it?

Planning precedes execution.

---

# Planning Hierarchy

The planner uses the canonical hierarchy:

```text
Vision
    ↓
Framework
    ↓
Phase
    ↓
Stage
    ↓
Historical Capability
    ↓
Task
```

Historical Capability identifiers are immutable.

They must never be renumbered.

---

# Required Inputs

The planner must read:

```text
AGENTS.md
docs/AI/README.md
docs/AI/AIFramework.md
docs/ProjectStatus.md
docs/DevelopmentPhases/ForgeAI2-DevelopmentPhases.md
Current Phase document
Current Stage document or Phase Stage README
Related Historical Capability documentation when available
```

---

# Planning Workflow

```text
Read Project State
    ↓
Identify Current Phase
    ↓
Identify Current Stage
    ↓
Identify Historical Capability
    ↓
Identify Objective
    ↓
Classify Work Type
    ↓
Select Workflow
    ↓
Select Command
    ↓
Select Template
    ↓
Prepare Execution Plan
```

---

# Step 1 — Determine Current State

The planner must identify:

- Current Phase;
- Current Stage;
- Current Historical Capability;
- Current Objective;
- Current Progress;
- Next Milestone;
- Known Blockers.

The canonical source is:

```text
docs/ProjectStatus.md
```

---

# Step 2 — Classify Work Type

The planner classifies work as exactly one primary type.

Typical work types:

```text
Implementation
Audit
Documentation
Bug Fix
Refactor
Review
Validation
Release
```

Only one primary type should drive command selection.

Secondary work may be listed as supporting work.

---

# Step 3 — Select Workflow

| Work Type | Primary Workflow |
| --- | --- |
| Implementation | Task Generation → Implementation Command |
| Audit | Audit Command |
| Documentation | Documentation Command |
| Bug Fix | Bug Fix Command |
| Review | Review Checklist |
| State Update | Project State Updater |
| Unknown | General Task Command |

---

# Step 4 — Select Command

| Work Type | Command Document |
| --- | --- |
| Implementation | `docs/AI/Commands/AgentImplementationCommand.md` |
| Audit | `docs/AI/Commands/AgentAuditCommand.md` |
| Documentation | `docs/AI/Commands/AgentDocumentationCommand.md` |
| Bug Fix | `docs/AI/Commands/AgentBugFixCommand.md` |
| General | `docs/AI/Commands/AgentTaskCommand.md` |

The selected command controls execution behaviour.

---

# Step 5 — Select Template

| Artifact | Template |
| --- | --- |
| Phase | `docs/AI/Templates/PhaseTemplate.md` |
| Stage | `docs/AI/Templates/StageTemplate.md` |
| Historical Capability | `docs/AI/Templates/SprintTemplate.md` |
| Audit | `docs/AI/Templates/AuditTemplate.md` |

Templates define output contracts.

---

# Execution Plan Output

The planner produces an execution plan containing:

```text
Current Mapping
Task Type
Objective
Scope
Allowed Work
Forbidden Work
Required Reading
Deliverables
Validation Plan
Expected Completion Report
```

This plan is consumed by the Task Generation Workflow.

---

# Escalation Rules

The planner must stop if:

- Current Phase cannot be identified;
- Current Stage cannot be identified;
- Historical Capability cannot be identified;
- ProjectStatus.md conflicts with planning documents;
- ownership is ambiguous;
- required documents are missing;
- the requested work exceeds current scope.

Escalation is preferred over guessing.

---

# Completion Criteria

Task planning is complete when:

- current state is identified;
- work type is classified;
- workflow is selected;
- command is selected;
- template is selected if needed;
- execution plan is generated;
- blockers are absent or documented.

The Orchestrator may then continue to task generation.

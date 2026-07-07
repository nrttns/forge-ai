# AI System Authority Model

## Status

Status: AI Framework RC2 / v3 Transitional Operating Procedure

Document Type: Tool-Facing Authority Procedure

Authority: `AGENTS.md`

Related Documents:

```text
AGENTS.md
docs/AI/AIFramework.md
docs/AI/Specification/Constitution.md
docs/AI/AIOrchestrator.md
docs/ProjectStatus.md
docs/AI/System/SourceOfTruth.md
```

---

# Purpose

This document defines the operational authority order agents use while executing tasks.

It does not replace `AGENTS.md`; it makes the authority model explicit for tools and agents.

---

# Operational Authority Order

Use this order for AI System execution:

```text
Human instruction for the active task, when valid and non-conflicting
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/ProjectStatus.md
    ↓
Current Phase document
    ↓
Current Stage document
    ↓
Historical Capability specification
    ↓
Generated Task
    ↓
Relevant AI command, workflow, template, checklist, validation, and review documents
```

For project-bootstrap questions, `AGENTS.md` remains the highest repository authority after valid human instruction. For AI Framework principles, `docs/AI/Specification/Constitution.md` defines the framework constitution under the master framework entry.

---

# Current Effective Authority During Transition

Until Forge AI v3 promotion is explicitly approved, agents must apply the RC2-compatible effective authority chain for operational tasks:

```text
Human instruction for the active task, when valid and non-conflicting
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
Current Phase / Stage / Capability
    ↓
Generated Task
```

---

# Target v3 Authority After Approval

After explicit approval, validation, review, and promotion through governance, the intended v3 authority chain is:

```text
Human Governance
    ↓
AGENTS.md
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
    ↓
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
Planning / Workflow / Command / Validation / Review artifacts
```

`A.1`, `M.0`, `M.1`, `STD-000`, and Blueprint RFC material remain target/transitional documents until that promotion occurs.

---

# Conflict Resolution

When documents conflict:

1. Follow the higher-authority document.
2. Preserve `AGENTS.md` as bootstrap authority.
3. Preserve `docs/ProjectStatus.md` as live operational state only, not architecture.
4. Preserve historical capability identifiers.
5. Do not let commands, workflows, templates, validation documents, checklists, generated tasks, or conversation redefine architecture.
6. If a v3 draft document conflicts with `AGENTS.md` or RC2 operational rules before promotion, follow `AGENTS.md` and RC2 operational rules and report the conflict.
7. Treat Blueprint RFC material as planning input only; it must not be treated as canonical architecture until ratified.
8. Prevent ProjectStatus drift: `docs/ProjectStatus.md` records live operational state only and must not redefine architecture, promote draft documents, ratify RFCs, or supersede authority documents.
9. Stop and report a blocker if the conflict cannot be resolved safely.

---

# Human Override Rule

Humans govern Forge AI.

A human instruction may narrow active task scope, select a task, or authorize a specific change. A human instruction must not be used by an agent to silently bypass non-negotiable governance, historical capability identity, validation, review, certification, source-of-truth rules, or explicit file restrictions.

When a human override changes documented project direction, the change should be recorded in approved documentation through the relevant workflow so future agents can derive the same state without relying on conversation history.

---

# Generated Task Authority

Generated tasks are executable only when they are traceable to higher authority:

```text
ProjectStatus
    ↓
Phase / Stage / Capability
    ↓
TaskPlanner or TaskGenerationWorkflow
    ↓
Relevant command
```

A generated task may not redefine architecture, bypass validation, or advance ProjectStatus without certification.

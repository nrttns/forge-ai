# AI System Authority Model

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

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

# Conflict Resolution

When documents conflict:

1. Follow the higher-authority document.
2. Preserve `AGENTS.md` as bootstrap authority.
3. Preserve `docs/ProjectStatus.md` as live operational state only, not architecture.
4. Preserve historical capability identifiers.
5. Do not let commands, workflows, templates, validation documents, checklists, generated tasks, or conversation redefine architecture.
6. Stop and report a blocker if the conflict cannot be resolved safely.

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

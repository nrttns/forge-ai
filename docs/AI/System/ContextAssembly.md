# AI System Context Assembly

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

Document Type: Tool-Facing Context Procedure

Authority: `AGENTS.md`

Related Documents:

```text
docs/AI/System/BootSequence.md
docs/AI/System/SourceOfTruth.md
docs/AI/System/DecisionModel.md
docs/AI/Specification/RuntimeModel.md
docs/AI/AIOrchestrator.md
docs/ProjectStatus.md
```

---

# Purpose

This document defines how agents build task context from authoritative documents.

Context assembly prevents stale memory, conversational drift, and implementation artifacts from replacing documented authority.

---

# Context Concepts

## Knowledge

Knowledge is persistent documented information. It includes constitutions, specifications, governance documents, phase documents, stage documents, capability records, commands, workflows, templates, checklists, and validation documents.

## State

State is current authoritative project reality. In Forge AI, live operational state is recorded in `docs/ProjectStatus.md`.

## Context

Context is the temporary task workspace assembled from knowledge, state, current task instructions, relevant files, and validation requirements.

Context is scoped to the active task. It must not become a new source of truth.

## Memory

Memory is derived reusable learning from completed, validated, reviewed, and certified work. Memory must be recorded in approved documentation before future agents can treat it as authoritative.

---

# Minimum Context Set Before Execution

Before execution, agents must assemble at least:

```text
AGENTS.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/ProjectStatus.md
Current Phase document
Current Stage document, when present
Active Capability specification, when present
Relevant Command document
Relevant Validation documents
```

Relevant Validation documents include, at minimum:

```text
docs/AI/Validation/README.md
docs/AI/Validation/AIFrameworkValidation.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationChecklistTemplate.md
docs/AI/Validation/ValidationCertification.md
```

For tool-facing AI System work, include all documents under `docs/AI/System/`.

---

# Assembly Procedure

Use this procedure:

```text
1. Load bootstrap authority.
2. Load AI Framework entry and constitution.
3. Load System operating documents.
4. Load Orchestrator and relevant workflows.
5. Load ProjectStatus as live state.
6. Resolve active phase, stage, and capability documents.
7. Load the relevant command and checklist.
8. Load relevant validation and certification documents.
9. Inspect target files only after authority and state are understood.
10. Build a bounded task plan from the assembled context.
```

---

# Stale Context Refresh Rules

Refresh context when:

- a new task begins;
- `docs/ProjectStatus.md` changes;
- phase, stage, capability, or recommended next action changes;
- validation, review, certification, or command documents change;
- the agent resumes after interruption;
- another actor may have changed files;
- current assumptions are based on memory or conversation rather than documents.

When stale context is detected, reread the authoritative documents before continuing.

---

# Context Boundaries

Agents must not:

- treat source code as architectural authority when documentation defines the contract;
- use conversation as long-lived state;
- carry forward assumptions from previous tasks without checking ProjectStatus;
- expand scope beyond the active task;
- omit validation context when claiming completion;
- update ProjectStatus from temporary context without certification.

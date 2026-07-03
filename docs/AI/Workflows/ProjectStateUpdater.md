# Project State Updater

## Status

Status: Canonical AI State Management Workflow

Document Type: AI Project State Workflow

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

Project State Updater defines how AI agents synchronize live project state after certified work.

It closes the AI Framework execution loop:

```text
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
Next Task
```

Project state must not advance before validation and review succeed.

---

# State Philosophy

`docs/ProjectStatus.md` is the live operational state of the project.

It is not:

- a roadmap;
- a changelog;
- a capability archive;
- a replacement for Phase or Stage documents.

It records where the project is now.

---

# Inputs

The updater consumes:

- completion report;
- validation results;
- review verdict;
- current `ProjectStatus.md`;
- current Phase document;
- current Stage document;
- related Historical Capability documentation.

---

# Update Preconditions

Project state may be updated only when:

- work has completed;
- validation has passed;
- documentation is synchronized;
- review is complete;
- architecture is preserved;
- blockers are absent or explicitly recorded.

If any precondition fails, state must not advance.

---

# Updatable Fields

AI agents may propose updates to:

```text
Current Phase
Current Stage
Current Historical Capability
Current Objective
Current Progress
Next Milestone
Last Updated
Completed Sprints
Known Blockers
Recommended Next Action
```

AI agents must not automatically rewrite:

- project vision;
- governance rules;
- roadmap structure;
- historical capability records;
- architectural principles.

---

# Capability Advancement Rule

If the assigned Historical Capability is certified complete:

- record it as completed;
- set active Historical Capability to the next approved capability only if the next capability is already defined by planning;
- do not renumber historical capability identifiers.

Historical capability identity is immutable.

---

# Stage Advancement Rule

A Stage advances only when its completion criteria are satisfied.

If the capability completes but Stage completion criteria remain open, ProjectStatus.md must remain in the current Stage.

Stage movement requires evidence.

---

# Phase Advancement Rule

A Phase changes only after:

- all required Stages are complete;
- required readiness audits pass;
- certification criteria are satisfied;
- governance permits transition.

A single capability completion must not advance a Phase by itself.

---

# Progress Update Rule

Progress should describe the live operational state.

Examples:

```text
Stage 04.10 — In Progress
```

```text
Stage 04.11 — Ready for Audit
```

```text
Stage 04.12 — Completed
```

Progress must remain concise and factual.

---

# Blocker Rule

If blockers exist, record:

- blocker summary;
- affected Phase / Stage / Capability;
- required follow-up;
- whether work may continue.

Blockers should prevent automatic advancement when they affect certification.

---

# Verification Checklist

Before updating state, verify:

✓ Completion report exists

✓ Validation passed

✓ Review completed

✓ Documentation synchronized

✓ Architecture preserved

✓ Next milestone is known

✓ No unresolved blocker prevents advancement

---

# Output

The updater produces a proposed ProjectStatus update containing:

```text
Completed Work
New Current State
Next Milestone
Known Blockers
Recommended Next Action
```

The update should be traceable to the completion report.

---

# Escalation Rules

Do not update ProjectStatus.md if:

- validation failed;
- audit failed;
- review rejected the work;
- ownership became ambiguous;
- planning documents conflict;
- next milestone is undefined;
- human approval is required.

Request human review instead.

---

# Relationship to AI Framework

Project State Updater implements the State Management model defined in:

```text
docs/AI/AIFramework.md
```

It supports:

- AI Orchestrator;
- Task Planner;
- Task Generation Workflow;
- Review System;
- Quality Gates.

It ensures completed work becomes synchronized project state before the next task begins.

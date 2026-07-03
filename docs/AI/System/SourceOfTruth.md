# AI System Source of Truth

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

Document Type: Tool-Facing Source-of-Truth Procedure

Authority: `AGENTS.md`

Related Documents:

```text
docs/AI/System/AuthorityModel.md
docs/AI/System/ContextAssembly.md
docs/ProjectStatus.md
docs/AI/Workflows/ProjectStateUpdater.md
```

---

# Purpose

This document defines how agents identify and use source-of-truth documents during execution.

It preserves the separation between stable governance, live state, task context, and conversational input.

---

# Live Operational Source of Truth

`docs/ProjectStatus.md` is the only live operational Source of Truth for Forge AI.

Agents must read it before deciding or recommending current work.

---

# What ProjectStatus May Own

`docs/ProjectStatus.md` may own live operational state, including:

- current phase;
- current stage;
- active historical sprint;
- current progress;
- blockers;
- next milestone;
- recommended next action;
- current development rules;
- required quality gates for the current project position.

---

# What ProjectStatus Must Not Own

`docs/ProjectStatus.md` must not own:

- architecture;
- governance principles;
- AI Framework constitution;
- historical sprint identity or renumbering;
- code contracts;
- schema contracts;
- domain contracts;
- runtime contracts;
- builder or presentation contracts;
- validation, review, or certification rules.

Architecture belongs in the Development Constitution, AI Framework specification, phase documents, stage documents, RFCs, architecture audits, and approved contract documents.

---

# Conversation Authority

Conversation is non-authoritative for long-lived project state unless converted into approved documentation.

Conversation may provide a valid active-task instruction when it does not conflict with higher authority. It must not be treated as the permanent source of truth for phase, stage, sprint, architecture, governance, validation, certification, or project-state advancement.

If conversation changes project direction, agents should record the needed documentation update path and use the approved workflow before future work depends on that change.

---

# Source-of-Truth Handling Rules

Agents must:

1. Read `docs/ProjectStatus.md` before work selection.
2. Use `AGENTS.md` and the AI Framework documents for authority and governance.
3. Use phase, stage, and sprint documents for planned scope and historical traceability.
4. Use commands and workflows for execution procedure.
5. Use validation documents for evidence-based conformance.
6. Use review checklists for readiness evaluation.
7. Use certification rules before any ProjectStatus advancement.
8. Stop if source-of-truth documents conflict in a way that cannot be resolved by authority order.

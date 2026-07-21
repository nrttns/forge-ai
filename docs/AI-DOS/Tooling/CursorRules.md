# Cursor Rules Reference

## Status

Status: Tooling Rule Reference  
Document Type: Cursor Rule Mirror  
Authority: `AGENTS.md`  
Runtime File: `.cursorrules`

---

## Purpose

This document records the repository rules exposed to Cursor through the root `.cursorrules` file.

Use `.cursorrules` as the tool-facing runtime file. Use this document as the human-readable AI Framework reference for those Cursor rules.

---

## Cursor Enforcement Rules

1. `AGENTS.md` is the bootstrap authority and must be read first.
2. AI agents must follow the AI Framework RC2 boot sequence before choosing work.
3. `docs/ProjectStatus.md` is the only live operational Source of Truth.
4. AI agents must read `docs/ProjectStatus.md` before deciding next work.
5. AI agents must not ask “what should I do next?” when the answer is derivable from `docs/ProjectStatus.md`, `docs/AI-DOS/AIOrchestrator.md`, and `docs/AI-DOS/Workflows/TaskPlanner.md`.
6. `docs/AI-DOS/AIFramework.md` is the AI Framework RC2 master entry.
7. `docs/AI-DOS/Specification/Constitution.md` is the AI Framework constitution.
8. Commands, workflows, templates, and checklists define execution procedure, not architecture.
9. Historical Capability identifiers are immutable.
10. Reference directories are read-only.
11. No code changes are allowed unless explicitly requested by the active task.
12. Agents must stop and report a blocker when authority, ownership, scope, or project state is unclear.

---

## Runtime File

The concise Cursor runtime rules live at:

```text
.cursorrules
```

Keep this document and `.cursorrules` aligned when enforcement rules change.

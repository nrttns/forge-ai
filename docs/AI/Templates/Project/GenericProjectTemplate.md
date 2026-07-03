# Generic Project Template

## Purpose

The Generic Project Template defines a platform-independent repository structure for projects adopting AI Framework RC2.

It is intended for new projects that need the framework's governance, planning, source-of-truth, validation, testing, certification, and agent operating model without adopting Forge AI implementation details.

---

## Canonical Generic Project Structure

```text
AGENTS.md
.cursorrules
README.md
docs/
    ProjectStatus.md
    FrameworkGovernance.md
    AI/
    DevelopmentPhases/
    Architecture/
src/
tests/
_reference/
_wip/
```

---

## Required Document Responsibilities

### `AGENTS.md`

`AGENTS.md` is the project bootstrap authority.

It should define:

- project mission;
- authority order;
- AI boot sequence;
- source-of-truth policy;
- architectural dependency rules;
- reference directory policy;
- quality gates;
- human override rules.

It should not copy product-specific rules from another project unless they are intentionally adopted and reviewed.

### `.cursorrules`

`.cursorrules` provides tool-facing rules for Cursor-compatible agents and automation.

It should define:

- required reading order;
- source-of-truth lookup rules;
- implementation safety rules;
- reference directory restrictions;
- stop conditions for unclear scope, authority, or ownership.

### `README.md`

`README.md` introduces the project for humans.

It should define:

- project name;
- product purpose;
- setup overview;
- high-level repository map;
- links to governance and AI Framework documents.

### `docs/ProjectStatus.md`

`docs/ProjectStatus.md` is the only live operational status document.

It should define:

- current platform or product position;
- active phase;
- active stage;
- active sprint or task grouping, if used;
- immediate next work;
- quality gates;
- update policy.

It must not become the architecture definition.

### `docs/FrameworkGovernance.md`

`docs/FrameworkGovernance.md` defines stable project governance that is below `AGENTS.md` and above phase or stage documents.

It should define:

- architectural principles;
- ownership boundaries;
- quality expectations;
- release and lifecycle rules;
- documentation requirements.

### `docs/AI/`

`docs/AI/` contains the AI Framework adoption layer for the project.

It should include the approved AI Framework documents, system operating layer, workflows, commands, templates, validation, testing, certification, and review checklists required for the project.

Project-specific additions must not redefine the AI Framework core.

### `docs/DevelopmentPhases/`

`docs/DevelopmentPhases/` contains phase, stage, and planning documents for the project.

It should define the planning hierarchy used by the project and preserve historical identifiers if historical sprint or milestone identifiers are introduced.

### `docs/Architecture/`

`docs/Architecture/` contains project-specific architecture decisions, diagrams, audits, and records.

Project-specific architecture belongs here or in project governance, phase, and stage documents. It should not be hidden inside generic AI Framework documents.

### `src/`

`src/` contains project implementation code.

The Generic Project Template does not prescribe a language, framework, or runtime layout.

### `tests/`

`tests/` contains project tests.

The project must define test categories and validation commands appropriate to its platform.

### `_reference/`

`_reference/` contains read-only reference material.

Reference material may be read for analysis, migration planning, or comparison. It must not become a runtime dependency.

### `_wip/`

`_wip/` contains temporary work-in-progress notes or drafts when the project permits them.

Work in `_wip/` is not authoritative unless promoted into approved documentation.

---

## Minimal Boot Rules

A project using this template should require agents to begin with:

```text
1. Read AGENTS.md
2. Read .cursorrules when operating through Cursor-compatible tooling
3. Read docs/AI/README.md
4. Read docs/AI/AIFramework.md
5. Read docs/AI/Specification/Constitution.md
6. Read docs/AI/AIOrchestrator.md
7. Read docs/ProjectStatus.md
8. Read relevant governance, phase, stage, workflow, command, validation, testing, template, and checklist documents
```

Agents should not ask for the next task when it can be derived from documented project state and the orchestrator.

---

## Non-Goals

The Generic Project Template does not:

- define a programming language;
- define a runtime platform;
- define a package manager;
- define product architecture;
- include Forge AI-specific implementation details;
- create generated project folders inside Forge AI;
- replace AI Framework Core;
- certify a project automatically;
- authorize source-code changes without task scope.

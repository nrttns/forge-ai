# Project Template Architecture

## Purpose

This document defines the architecture of the AI Framework Project Template layer.

Project Templates exist to help new projects adopt AI Framework RC2 without inheriting Forge AI-specific architecture, implementation details, capability history, or project state.

---

## Template Architecture

The Project Template layer sits between the AI Framework core and a concrete project implementation:

```text
AI Framework Core
    ↓
Project Template
    ↓
Framework Adapter
    ↓
Project Implementation
```

### AI Framework Core

AI Framework Core defines the reusable operating model for AI-assisted software engineering:

- authority and constitution;
- terminology;
- framework specification;
- runtime model;
- governance model;
- reference architecture;
- AI System operating procedures;
- validation, testing, review, and certification expectations;
- commands, workflows, templates, and checklists.

Project Templates must consume AI Framework Core as upstream authority.

### Project Template

A Project Template defines reusable repository structure and documentation placeholders needed to adopt the AI Framework.

A template may define:

- expected file and directory layout;
- document responsibilities;
- minimal boot rules;
- project identity placeholders;
- source-of-truth initialization requirements;
- validation path expectations;
- reference directory policies;
- framework-neutral architecture slots.

A template must not redefine framework authority, framework architecture, validation lifecycle, certification rules, or canonical terminology.

### Framework Adapter

A Framework Adapter specializes the generic template for a host framework or technology family.

Examples include:

```text
WordPress
Laravel
Symfony
Node.js
React
Generic Projects
```

A Framework Adapter may add host-specific files, dependency manifests, entrypoints, source directories, test conventions, and integration boundaries.

A Framework Adapter must not make the host framework the owner of Domain truth unless the project architecture explicitly and correctly defines that ownership in project governance.

### Project Implementation

A Project Implementation is the concrete product repository using the framework and template.

The implementation owns:

- project name;
- repository name;
- product-specific architecture decisions;
- current project state;
- phase and stage planning;
- capability history;
- source code;
- tests;
- framework-specific runtime integration;
- local governance extensions.

Forge AI is the first reference implementation, not the generic template definition.

---

## Generic and Framework-Specific Templates

### Generic Templates

Generic templates are framework-independent. They define AI Framework adoption structure that can be used by any software project.

Generic templates should avoid assumptions about:

- programming language;
- framework;
- package manager;
- runtime host;
- deployment framework;
- UI stack;
- database;
- business domain.

### Framework-Specific Templates

Framework-specific templates extend the generic template with host-specific structure.

A framework-specific template may define recommended files and directories for that framework, but must keep project-specific implementation details out of the template.

For example, a WordPress template may include a plugin bootstrap file and `src/Infrastructure` adapters, but it must not include Forge AI widget definitions, AEDS rules, capability numbers, or schema contracts.

---

## What Belongs in a Project Template

Project Templates may include:

- repository skeletons;
- governance document placeholders;
- AI Framework adoption instructions;
- `AGENTS.md` responsibility guidance;
- `.cursorrules` responsibility guidance;
- `docs/ProjectStatus.md` initialization guidance;
- phase and stage folder expectations;
- architecture documentation locations;
- validation and testing path requirements;
- reference and work-in-progress directory policies;
- framework adapter boundaries.

---

## What Does Not Belong in a Project Template

Project Templates must not include:

- Forge AI implementation details;
- Forge AI capability history;
- product-specific source code;
- generated project folders in this repository;
- copied obsolete architecture from reference projects;
- alternate AI Framework constitutions;
- alternate validation or certification systems;
- hidden project-specific architecture inside framework documents;
- runtime dependencies on `_reference/` material.

---

## Boundary Rule

Templates are adoption guides. They are not a second framework.

When a template needs a rule that already exists in AI Framework Core, it should reference the framework rule instead of restating or redefining it.

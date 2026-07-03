# Forge AI — Project Constitution

This document is the bootstrap authority for all humans, AI agents, swarms, automation systems, and development tooling working on Forge AI.

If any code, documentation, proposal, sprint, implementation, automation, or agent output conflicts with this document, this document wins.

---

# 0. Authority

Forge AI uses this authority model:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/AxisSuiteV2-DevelopmentPhases.md
    ↓
docs/FrameworkGovernance.md
    ↓
Current Phase Document
    ↓
Current Stage Document
    ↓
Historical Sprint Specification
```

`AGENTS.md` is the bootstrap and constitutional entry point.

`docs/AI/AIFramework.md` is the AI Framework master entry point; `docs/AI/Specification/Constitution.md` defines the AI Framework Constitution.

`docs/ProjectStatus.md` is the only live project status document.

Historical sprint identifiers are immutable.

---

# 1. AI Boot Sequence

Every AI agent must begin with this sequence:

```text
1. Read AGENTS.md
2. Read docs/AI/README.md
3. Read docs/AI/AIFramework.md
4. Read docs/AI/AIOrchestrator.md
5. Read docs/ProjectStatus.md
6. Read the Development Constitution
7. Read the current Phase document
8. Read the current Stage document
9. Read the assigned Historical Sprint specification
10. Select the correct command, workflow, template, and review checklist
```

Agents should not ask what to do next when the next action can be derived from Project Status and the Orchestrator.

---

# 2. AI Framework

AI operational documentation lives under:

```text
docs/AI/
```

Primary documents:

```text
docs/AI/README.md
docs/AI/System/
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/Specification/
```

`docs/AI/System/` is the tool-facing AI operating layer for boot, authority resolution, source-of-truth handling, context assembly, decision routing, execution sequencing, validation, review, certification, and controlled project-state updates.

Commands:

```text
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentImplementationCommand.md
docs/AI/Commands/AgentAuditCommand.md
docs/AI/Commands/AgentDocumentationCommand.md
docs/AI/Commands/AgentBugFixCommand.md
```

Workflows:

```text
docs/AI/Workflows/TaskPlanner.md
docs/AI/Workflows/TaskGenerationWorkflow.md
docs/AI/Workflows/ProjectStateUpdater.md
```

Validation, review, and templates:

```text
docs/AI/Validation/
docs/AI/Checklists/AgentReviewChecklist.md
docs/AI/Templates/PhaseTemplate.md
docs/AI/Templates/StageTemplate.md
docs/AI/Templates/SprintTemplate.md
docs/AI/Templates/AuditTemplate.md
```

Tool-facing rule files:

```text
.cursorrules
docs/AI/AgentSystemPrompt.md
docs/AI/Tooling/CursorRules.md
```

---

# 3. Mission

Forge AI is a schema-first enterprise website platform for WordPress.

The architecture exists to ensure long-term maintainability, clear ownership boundaries, predictable evolution, safe automation, and extensible platform growth.

The platform is designed to support Builder, Runtime, Templates, Theme Parts, Tokens, Widgets, APIs, Extensions, Enterprise workflows, and Automation without allowing any subsystem to become the source of truth for another subsystem.

---

# 4. Planning Model

Forge AI uses the canonical planning hierarchy:

```text
Platform
    ↓
Phase
    ↓
Stage
    ↓
Historical Sprint
    ↓
Task
```

Planning uses Phase and Stage documents.

Implementation history uses Historical Sprint identifiers.

Historical Sprint identifiers must never be renumbered.

---

# 5. Architectural Dependency Flow

Dependencies must always flow in this direction:

```text
Schema
    ↓
Domain
    ↓
Application
    ↓
Api
    ↓
Infrastructure
    ↓
Runtime
    ↓
Builder / Presentation
```

Forbidden examples:

```text
Builder → Domain ownership
Runtime → Schema ownership
Infrastructure → Domain ownership
WordPress → Domain ownership
Presentation → Contract ownership
```

---

# 6. Layer Responsibilities

## Core

Owns Kernel, Container, Providers, Runtime contracts, internal buses, and platform bootstrap.

Core must not own business rules.

## Domain

Owns Entities, Value Objects, Policies, Specifications, Events, and Domain contracts.

Domain must remain pure PHP.

Forbidden in Domain:

- WordPress functions;
- Infrastructure imports;
- REST code;
- persistence implementations;
- rendering logic;
- Presentation imports.

## Application

Owns Commands, Queries, Handlers, DTOs, Registries, Projections, and Use Cases.

Application orchestrates Domain.

## Api

Owns transport contracts, controllers, requests, responses, and route metadata.

Api is transport-only.

## Infrastructure

Owns WordPress adapters, database adapters, external integrations, cache adapters, logging adapters, and search adapters.

Infrastructure adapts external systems.

## Runtime

Runtime owns execution and consumes approved contracts.

Runtime never defines schema, widget definitions, control definitions, template contracts, or theme contracts.

## Presentation

Presentation owns Builder UI, Admin UI, and Frontend UI.

Presentation consumes contracts.

Presentation never defines contracts.

---

# 7. Schema-First Rule

Schema is the authority.

Everything else consumes schema.

Canonical page truth consists of:

```text
rootId
nodes
```

Only.

Forbidden canonical alternatives:

```text
section
sections
layout
tree
structure
```

Section remains metadata only.

Section is never a canonical node type.

Allowed canonical node types:

```text
container
widget
```

Only.

---

# 8. Builder and Runtime Rules

Builder is a consumer.

Builder does not own Page Schema, Widget Definitions, Control Definitions, Runtime Contracts, Template Contracts, Theme Contracts, Persistence, or Promotion Truth.

Runtime is an execution layer.

Runtime consumes Schema, Widget definitions, Control definitions, Template contracts, Theme contracts, and style delivery contracts.

Runtime never defines them.

---

# 9. Reference Policy

The following locations are reference-only:

```text
_reference/axis-suite-v1
_reference/feature-project
```

Allowed:

- reading;
- research;
- migration analysis;
- architecture comparison;
- documentation style reference.

Forbidden:

- imports;
- runtime dependencies;
- autoload dependencies;
- production execution;
- namespace dependencies;
- copying obsolete V1 architecture.

When V1 and V2 conflict, V2 wins.

---

# 10. Quality and Completion

Every sprint must include:

- tests;
- documentation;
- validation;
- completion reporting.

Default quality gates:

```bash
composer dump-autoload
composer test
composer run quality
```

Frontend / SCSS / asset gates when relevant:

```bash
npm run build
npm run typecheck
npm test
```

A task is not complete until it is implemented, validated, reviewed, documented, and ready for project state update.

---

# 11. AI Self-Planning Rules

Agents must derive work from Project Status and AI Orchestrator whenever possible.

Agents must preserve:

- Planning before execution;
- Workflow before command;
- Command before implementation;
- Template before artifact;
- Validation before review;
- Review before state update.

Agents must stop when ownership, authority, scope, or documentation is unclear.

---

# 12. Human Override

Humans remain the highest authority.

AI agents assist.

Humans govern.

Human overrides should be documented and traceable.

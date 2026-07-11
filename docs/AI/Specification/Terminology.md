# AI Framework Terminology

## Status

**Status:** v1.0 RC2

**Document Type:** Canonical Terminology

**Authority:** `docs/AI/AIFramework.md`

---

# Purpose

This document is the canonical vocabulary for the AI Framework.

Definitions are centralized here to reduce duplicated language across specification, runtime, governance, orchestration, workflow, validation, command, template, and framework adapter documents.

---

# Canonical Definitions

| Term | Definition |
| --- | --- |
| AI Framework | Framework-independent operating model for AI-assisted software engineering. |
| Agent | A human-governed AI execution participant that consumes authoritative documentation and performs scoped work. |
| Architecture | Documented ownership, boundaries, contracts, dependency direction, and subsystem responsibilities. |
| Authority | The documented source allowed to define decisions for a given scope. |
| Certification | Confirmation that required planning, execution, validation, documentation, review, and governance gates are satisfied. |
| Command | Operational procedure that defines how an approved task is executed. |
| Context | Temporary working set assembled from authoritative sources for one execution cycle. |
| Governance | Decision model that defines authority, ownership, escalation, quality gates, compliance, and human oversight. |
| Historical Capability | Immutable implementation history record tied to a planning stage. |
| Knowledge | Persistent documented information such as architecture, standards, templates, governance, RFCs, and implementation guidance. |
| Memory | Derived reusable learning from approved work; never an authority source. |
| Phase | Major architectural capability in a framework planning hierarchy. |
| Planning | Process that maps architecture and project state into approved executable work. |
| Framework Adapter | Project- or ecosystem-specific implementation of the framework that consumes core principles without redefining them. |
| Project State | Live operational state of a project, normally represented by a project status document. |
| Review | Independent assessment of completed work before certification or state transition. |
| Runtime | Operational AI behaviour layer that executes work while consuming framework authority. |
| Stage | Measurable architectural milestone within a phase. |
| State | Current authoritative condition of architecture, planning, execution, project progress, historical records, knowledge, context, or memory. |
| Swarm | Temporary coordinated parallel execution unit composed of multiple agents. |
| Task | Ephemeral execution artifact derived from project state and planning. |
| Template | Output contract defining the required structure of an artifact. |
| Validation | Evidence-based verification that work conforms to approved expectations. |
| Workflow | Process category that routes work from planning to command execution. |

---

# State Terms

| State Category | Meaning | Typical Authority |
| --- | --- | --- |
| Architectural State | Permanent structure, ownership, dependency model, and governance rules. | Framework and architecture documentation. |
| Planning State | Active roadmap position: phase, stage, capability, objective, and planned milestones. | Development plans and stage documents. |
| Execution State | Temporary in-progress task status, validation state, review state, and blockers. | Workflow engine and command outputs. |
| Project State | Live operational position of a project. | Project status document. |
| Historical State | Immutable completed work and decisions. | Historical capability records, audits, ADRs, release history. |
| Knowledge State | Reusable documented knowledge. | Documentation repository. |
| Context | Temporary execution working set. | Workflow engine. |
| Memory | Derived reusable learning. | Memory strategy. |

---

# Planning Terms

The canonical planning hierarchy is:

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

Lower levels refine higher levels and may not redefine them.

---

# Command, Workflow, and Template Terms

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Template
    ↓
Artifact / Execution
```

- Planning answers what should happen and why.
- Workflow classifies the work.
- Command defines how the approved work is executed.
- Template defines the structure of produced artifacts.

---

# Framework Terms

A framework adapter is not a fork of the framework.

It is a project-specific application of the framework that may define framework-specific authorities, project status files, phases, stages, historical sprints, commands, and quality gates while preserving framework-level terminology.

AI-DOS is the first framework adapter.

# AI Framework v1.0 RC2

## Status

**Status:** Release Candidate 2

**Document Type:** Master Index and Constitution Entry Point

**Authority:** `AGENTS.md`

**Primary Specification Directory:** `docs/AI/Specification/`

---

# Purpose

The AI Framework provides a framework-independent operating model for AI-assisted software engineering.

It defines how humans, AI agents, automation systems, and future swarms plan, execute, validate, review, document, govern, and update project state through authoritative documentation.

This document is the master entry point. Detailed RC2 architecture is split into focused specification modules so the framework can evolve without turning one document into the only source for every concept.

---

# RC2 Specification Map

| Area | Document | Purpose |
| --- | --- | --- |
| Constitution | `docs/AI/Specification/Constitution.md` | Permanent principles, philosophy, mission, authority, and core invariants. |
| Framework Specification | `docs/AI/Specification/FrameworkSpecification.md` | Core subsystems: planning, workflow, commands, templates, review, validation, documentation, and state. |
| Runtime Model | `docs/AI/Specification/RuntimeModel.md` | Agent lifecycle, runtime coordination, context, memory, multi-agent, and swarm operating model. |
| Governance Model | `docs/AI/Specification/GovernanceModel.md` | Quality gates, governance hierarchy, decision rules, evolution, and certification. |
| Reference Architecture | `docs/AI/Specification/ReferenceArchitecture.md` | Layered architecture, information flow, framework integrations, roadmap, and Forge AI adapter position. |
| Terminology | `docs/AI/Specification/Terminology.md` | Canonical framework vocabulary and shared definitions. |

---

# Reading Order

AI agents should read the AI Framework in this order unless a higher-authority task narrows the scope:

```text
AGENTS.md
    ↓
docs/AI/README.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/Specification/Terminology.md
    ↓
docs/AI/Specification/FrameworkSpecification.md
    ↓
docs/AI/Specification/RuntimeModel.md
    ↓
docs/AI/Specification/GovernanceModel.md
    ↓
docs/AI/Specification/ReferenceArchitecture.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
Relevant Workflow / Command / Template / Checklist / Validation document
```

---

# Framework Model

The AI Framework separates persistent truth, live state, temporary execution context, approved execution, evidence, review, and future reusable knowledge.

```text
Knowledge
    ↓
State
    ↓
Context
    ↓
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
Memory
    ↓
Future Context
```

The core rule remains unchanged from RC1: documentation and governance define authority; implementation and runtime consume authority.

---

# Framework Independence

The AI Framework core language is framework-independent.

Framework implementations consume the framework through adapters and project-specific governance documents. They must not redefine framework principles.

Forge AI is the first framework implementation and remains governed by `AGENTS.md`, `docs/ProjectStatus.md`, development phase documents, framework governance, and historical capability records.

Future framework adapters may include Laravel, Symfony, WordPress, React, Node.js, enterprise platforms, cloud-native environments, mobile ecosystems, embedded systems, and generic software projects.

---

# Preserved Operational Documents

RC2 preserves the existing operational documents:

```text
docs/AI/AIOrchestrator.md
docs/AI/Commands/
docs/AI/Workflows/
docs/AI/Templates/
docs/AI/Checklists/
docs/AI/Validation/
```

The specification modules define architecture. Operational documents define execution procedure.

---

# Extension Readiness

The RC2 structure reserves clear expansion points for future modules without changing the master entry point:

- Execution Engine;
- Knowledge;
- Memory;
- Context;
- Agent Model;
- Capability Model;
- Multi-Agent;
- Swarm;
- Framework Adapters.

New modules should extend the `docs/AI/Specification/` structure or a clearly named sibling specification area without duplicating canonical terminology.

---

# Version History

| Version | Status | Notes |
| --- | --- | --- |
| v1.0 RC1 | Release Candidate | Initial single-document constitution integration. |
| v1.0 RC2 | Release Candidate | Split framework into focused architecture modules and retained this file as the master index. |

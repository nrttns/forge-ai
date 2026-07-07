# Forge AI — Framework Governance

Status: Governance Reference  
Project: Forge AI  
Document Type: Framework Governance  
Planning Model: Framework → Phase → Stage → Capability → Task

---

# Purpose

This document defines the governance model of the Forge AI Framework.

It establishes decision authority, ownership boundaries, quality requirements, and framework evolution policies.

Governance exists to preserve architectural integrity.

Implementation must always follow governance.

This document complements `AGENTS.md` but does not replace it.

---

# Authority

The authority hierarchy of Forge AI is:

```text
AGENTS.md
    ↓
AI Framework Constitution
    ↓
Framework Governance
    ↓
Project Status
    ↓
Phase Documents
    ↓
Stage Documents
    ↓
Capability Documents
    ↓
Implementation Reports
```

Higher-level documents always override lower-level documents.

---

# Forge AI v3 Transitional Governance

During Forge AI v3 migration, `AGENTS.md` remains the bootstrap authority before, during, and after transition.

The v3 architecture documents are target authority candidates until they are explicitly approved and promoted through governance. `docs/AI/Architecture/A.1-Constitution.md`, `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Meta/M.1-Artifact-Meta-Model.md`, and `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` require approval before canonical promotion.

The Forge AI Blueprint RFC remains non-canonical planning input until it is ratified through Framework Governance.

`docs/ProjectStatus.md` records live operational state only and cannot promote architecture, ratify RFCs, or supersede authority documents.

RC2 operational documents remain valid temporarily until approved v3 replacements exist.

---

# Core Governance Principles

Forge AI is governed by the following permanent principles.

```
Architecture before Code

Documentation before Implementation

Planning before Execution

Contracts before Implementation

Validation before Completion

Review before Certification

State before Context

Explicit Ownership

Framework Independence
```

These principles should never be violated for implementation convenience.

---

# Decision Priority

When trade-offs exist, decisions follow this order:

```text
Architecture
    ↓
Governance
    ↓
Planning
    ↓
Contracts
    ↓
Implementation
    ↓
Optimization
```

Optimization must never compromise architecture.

---

# Ownership Model

Each subsystem has exactly one owner.

| Subsystem | Owner | Consumers |
|-----------|--------|-----------|
| Constitution | Framework | Everyone |
| Planning | Planning Engine | Orchestrator |
| Workflow | Workflow Engine | Commands |
| Commands | Command System | Runtime |
| Templates | Template Engine | Commands |
| Validation | Validation Engine | Review |
| Review | Review Engine | Certification |
| State | State Manager | Planning |
| Knowledge | Knowledge Base | Runtime |
| Memory | Memory Manager | Runtime |
| Framework Integration | Framework Adapter | Target Platforms |

Ownership duplication is prohibited.

---

# Dependency Model

Dependencies always flow downward.

```text
Constitution
    ↓
Governance
    ↓
Planning
    ↓
Workflow
    ↓
Commands
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
State Update
```

Reverse dependencies are forbidden.

---

# Framework Independence

Forge AI must remain framework-independent.

The Framework must never depend on:

- WordPress
- Laravel
- Symfony
- React
- Node.js
- Any specific programming language
- Any specific runtime

Framework-specific behavior belongs only inside Framework Adapters.

---

# Change Control

## Minor Change

A clarification that does not affect framework behavior.

## Major Change

A modification to workflow, planning, ownership, or subsystem responsibilities.

Requires architecture review.

## Constitutional Change

A modification to the permanent principles of the Framework.

Requires explicit approval.

---

# RFC Policy

An RFC is required when introducing:

- a new subsystem;
- a new planning concept;
- a new workflow;
- a new command;
- a new validation model;
- a new review model;
- a breaking architectural change.

---

# Review Policy

Every significant implementation requires:

- validation;
- review;
- certification;
- project state update.

Implementation alone never completes a task.

---

# Documentation Governance

Documentation is a production artifact.

Documentation must always remain synchronized with implementation.

Planning documents define architecture.

Implementation consumes architecture.

Implementation never defines architecture.

---

# Reference Policy

Reference repositories are read-only.

Reference material may be used for:

- research;
- comparison;
- inspiration.

Reference material must never become implementation authority.

The Forge AI Constitution always has the highest authority.

---

# Certification Requirements

A capability may be certified only when:

- implementation is complete;
- validation passes;
- review passes;
- documentation is synchronized;
- ownership is preserved;
- architecture remains intact.

---

# Governance Invariants

The following rules are permanent.

- Architecture owns implementation.
- Planning owns execution.
- Validation precedes review.
- Review precedes certification.
- Certification precedes project state update.
- State drives future planning.
- Ownership is explicit.
- Framework adapters never redefine the Framework.

These invariants are considered constitutional and should remain stable across future versions of Forge AI.

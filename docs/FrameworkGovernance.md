# Forge AI — Framework Governance

Status: Governance Reference  
Project: Forge AI  
Document Type: Framework Governance  
Planning Model: Platform → Phase → Stage → Capability → Task

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
Platform Governance
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

Platform Independence
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
| Platform Integration | Platform Adapter | Target Platforms |

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

# Platform Independence

Forge AI must remain platform-independent.

The Framework must never depend on:

- WordPress
- Laravel
- Symfony
- React
- Node.js
- Any specific programming language
- Any specific runtime

Platform-specific behavior belongs only inside Platform Adapters.

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
- Platform adapters never redefine the Framework.

These invariants are considered constitutional and should remain stable across future versions of Forge AI.

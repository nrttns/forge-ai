# Agent Documentation Command

## Status

Status: Canonical Documentation Command  
Document Type: AI Command Standard  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentTaskCommand.md`

---

# Purpose

This command governs creation, maintenance, refactoring, and synchronization of documentation.

Documentation is a production artifact.

Documentation should explain architecture before implementation.

---

# Command Position

```text
Planning
    ↓
Documentation Workflow
    ↓
AgentDocumentationCommand
    ↓
Template System
    ↓
Documentation Artifact
    ↓
Review
    ↓
Project State Update
```

---

# Use This Command When

Use this command for:

- Phase specifications;
- Stage specifications;
- Sprint specifications;
- audit reports;
- RFCs;
- governance documents;
- project status updates;
- README updates;
- architecture documentation.

---

# Documentation Principles

Documentation must:

- preserve authority hierarchy;
- use approved terminology;
- reference higher-level documents;
- avoid duplicating architecture unnecessarily;
- remain synchronized with implementation;
- remain readable by humans and AI agents.

---

# Template Selection

Use the appropriate template:

```text
Phase document      → PhaseTemplate.md
Stage document      → StageTemplate.md
Sprint document     → SprintTemplate.md
Audit document      → AuditTemplate.md
```

If no template exists, follow AIFramework structure and document the deviation.

---

# Documentation Rules

Documentation agents must not:

- invent architecture;
- change historical sprint identifiers;
- contradict AGENTS.md or AIFramework.md;
- update ProjectStatus without completion evidence;
- treat reference material as implementation authority.

---

# Review Requirements

Before completion, verify:

- architectural consistency;
- terminology consistency;
- cross-reference accuracy;
- template compliance;
- traceability;
- no conflicting documentation.

---

# Completion Report

Report:

```text
Summary
Documents created
Documents updated
Architecture impact
Remaining documentation work
Recommended next step
```

Documentation work is complete only after review readiness.

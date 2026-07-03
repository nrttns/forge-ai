# Agent Implementation Command

## Status

Status: Canonical Implementation Command  
Document Type: AI Command Standard  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentTaskCommand.md`

---

# Purpose

This command governs approved implementation work.

Implementation realizes approved architecture.

Implementation never defines architecture.

---

# Command Position

```text
Planning
    ↓
Implementation Workflow
    ↓
AgentImplementationCommand
    ↓
SprintTemplate / Completion Report
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Project State Update
```

---

# Use This Command When

Use this command for:

- approved feature implementation;
- contract implementation;
- adapter implementation;
- scoped refactoring;
- test implementation;
- implementation-driven documentation updates.

Do not use it for audits, documentation-only work, or bug fixes.

---

# Pre-Implementation Requirements

Before modifying files, verify:

- current Phase;
- current Stage;
- Historical Sprint;
- implementation objective;
- subsystem ownership;
- dependency direction;
- required tests;
- documentation impact.

If ownership is ambiguous, stop.

---

# Implementation Rules

Implementation must:

- preserve architecture;
- preserve contracts;
- remain incremental;
- update documentation when required;
- add or update tests where appropriate;
- avoid unrelated refactoring.

Implementation must not:

- redesign architecture;
- introduce undocumented dependencies;
- implement future sprint scope;
- bypass Application/Domain/API boundaries;
- make Infrastructure, Runtime, Presentation, WordPress, or Builder a source of truth.

---

# Deliverables

Typical deliverables:

```text
Code changes
Tests
Documentation updates
Validation results
Completion report
```

---

# Validation

Run the relevant quality gates.

Default platform gates:

```bash
composer dump-autoload
composer test
composer run quality
```

Frontend / asset gates when relevant:

```bash
npm run build
npm run typecheck
npm test
```

---

# Completion Report

Report:

```text
Summary
Files modified
Architecture notes
Tests and validation
Known risks
Recommended next step
```

The report should be review-ready.

---

# Handoff

After completion, the work must pass through:

```text
Review System
    ↓
Quality Gates
    ↓
ProjectStateUpdater
```

Implementation is not complete until it is reviewed and state-safe.

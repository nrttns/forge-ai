# Agent Bug Fix Command

## Status

Status: Canonical Bug Resolution Command  
Document Type: AI Command Standard  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentTaskCommand.md`

---

# Purpose

This command governs defect resolution.

A bug fix restores the platform to its approved architectural or functional state.

A bug fix is not a redesign opportunity.

---

# Command Position

```text
Planning
    ↓
Bug Fix Workflow
    ↓
AgentBugFixCommand
    ↓
Root Cause Analysis
    ↓
Minimal Correction
    ↓
Regression Validation
    ↓
Review
    ↓
State Recommendation
```

---

# Use This Command When

Use this command for:

- regressions;
- validation failures;
- implementation defects;
- architecture violations;
- documentation defects;
- build failures;
- runtime failures.

---

# Bug Classification

Classify the issue before fixing:

```text
Implementation Defect
Regression
Architecture Violation
Ownership Violation
Dependency Violation
Validation Failure
Documentation Defect
Build Failure
Runtime Failure
Performance Issue
Security Issue
Compatibility Issue
```

---

# Root Cause Requirements

Before modifying code, determine:

- what failed;
- why it failed;
- which subsystem owns the issue;
- which contract was violated;
- whether the issue is architectural or implementation-specific;
- whether this is a regression.

Do not fix before understanding the root cause.

---

# Fix Rules

The fix must be:

- minimal;
- localized;
- contract-preserving;
- testable;
- documented when needed.

The fix must not:

- redesign architecture;
- introduce new public contracts unless explicitly approved;
- implement future sprint work;
- refactor unrelated systems;
- hide feature development inside bug resolution.

---

# Validation

Run relevant validation and add regression coverage when practical.

Typical gates:

```bash
composer dump-autoload
composer test
composer run quality
npm run build
npm run typecheck
npm test
```

---

# Completion Report

Report:

```text
Bug summary
Root cause
Resolution
Files modified
Validation results
Regression risk
Recommended follow-up
```

Bug resolution is complete only after validation and review readiness.

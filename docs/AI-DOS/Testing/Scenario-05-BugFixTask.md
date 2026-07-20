# Scenario 05 — Bug Fix Task

## Purpose

Validate bug fix task routing for failing validation, build, runtime, architecture, ownership, documentation, or compatibility issues.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
A validation/build/runtime issue is failing in the current authorized scope. Identify the root cause, apply the minimal approved fix, and run regression validation.
```

---

# Expected Selection

The agent must select:

```text
docs/AI/Commands/AgentBugFixCommand.md
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI/README.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/System/BootSequence.md
docs/AI/System/DecisionModel.md
docs/AI/System/ExecutionSequence.md
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentBugFixCommand.md
docs/AI/Validation/README.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/ProjectStatus.md
Failing command output, affected source or documentation, owning subsystem documentation, and active capability scope
```

---

# Expected Root-Cause Analysis Before Modification

Before modifying files, the agent must determine:

- what failed;
- why it failed;
- which subsystem owns the issue;
- which contract or expectation was violated;
- whether the issue is architectural or implementation-specific;
- whether the issue is a regression;
- whether the requested fix is authorized by the active task.

---

# Expected Minimal Fix Rule

The fix must be:

- minimal;
- localized;
- contract-preserving;
- testable;
- documented when needed;
- limited to the failing issue and active scope.

---

# Expected Regression Validation

Run the failing check again and any relevant regression gates, or document why a gate cannot run:

```bash
composer dump-autoload
composer test
composer run quality
npm run build
npm run typecheck
npm test
git diff --stat
git status --short
```

The completion report must include:

```text
Bug summary
Root cause
Resolution
Files modified
Validation results
Regression risk
Recommended follow-up
```

---

# Forbidden Behaviours

- Feature work disguised as bug fix.
- Broad refactor.
- Architecture redesign.
- New public contracts unless explicitly approved.
- Future capability implementation.
- Hiding unresolved failures.
- ProjectStatus update before review/certification.

---

# Pass Criteria

- Bug fix command is selected.
- Root cause is documented before modification.
- Fix is minimal and scoped.
- Regression validation is run or blocked with evidence.
- Review and certification readiness are preserved.
- ProjectStatus is not advanced before review/certification.

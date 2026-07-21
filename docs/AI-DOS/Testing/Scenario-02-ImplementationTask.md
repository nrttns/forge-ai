# Scenario 02 — Implementation Task

## Purpose

Validate implementation task routing for an approved implementation capability.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
Implement the approved work for AXIS-V2.SPRINT-67.12 within the current ProjectStatus scope. Preserve all architecture and quality gates.
```

---

# Expected Reading Order

```text
AGENTS.md
.cursorrules
docs/AI-DOS/README.md
docs/AI-DOS/AgentSystemPrompt.md
docs/AI-DOS/AIFramework.md
docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md
docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md
docs/AI-DOS/GOVERNANCE.md
docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md
docs/AI-DOS/AIOrchestrator.md
docs/AI-DOS/System/README.md
docs/AI-DOS/System/BootSequence.md
docs/AI-DOS/System/DecisionModel.md
docs/AI-DOS/System/ExecutionSequence.md
docs/AI-DOS/Workflows/TaskPlanner.md
docs/AI-DOS/Workflows/TaskGenerationWorkflow.md
docs/AI-DOS/Commands/AgentTaskCommand.md
docs/AI-DOS/Commands/AgentImplementationCommand.md
docs/AI-DOS/Templates/Planning/HistoricalCapabilityTemplate.md
docs/AI-DOS/Validation/README.md
docs/AI-DOS/Validation/ValidationLifecycle.md
docs/AI-DOS/Validation/ValidationLevels.md
docs/AI-DOS/Validation/ValidationCertification.md
docs/AI-DOS/Checklists/AgentReviewChecklist.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
Current phase, stage, and historical capability documents where present
```

---

# Expected Selection

The agent must select:

```text
docs/AI-DOS/Commands/AgentImplementationCommand.md
```

Implementation may begin only after verifying:

- active phase;
- active stage;
- historical capability;
- approved implementation objective;
- subsystem ownership;
- dependency direction;
- allowed and forbidden scope;
- required quality gates.

---

# Expected Use of HistoricalCapabilityTemplate or Completion Report

Use `docs/AI-DOS/Templates/Planning/HistoricalCapabilityTemplate.md` when producing or maintaining capability documentation.

If the task does not create or update capability documentation, produce a completion report containing:

```text
Summary
Files modified
Architecture notes
Tests and validation
Known risks
Recommended next step
```

---

# Expected Validation Gates

Run relevant gates from ProjectStatus and the implementation command, or record why a gate is not applicable:

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

Validation must be followed by review readiness and certification assessment before any ProjectStatus update.

---

# Forbidden Behaviours

- Architecture redesign.
- Future capability scope.
- Source changes outside task scope.
- Changing historical capability identifiers.
- Treating implementation as architecture authority.
- Moving Schema, Domain, Runtime, Builder, Infrastructure, or Presentation ownership contrary to governance.
- ProjectStatus update before certification.

---

# Pass Criteria

- Correct implementation command is selected.
- Approved scope is identified before modification.
- Implementation remains bounded to the active task.
- Validation evidence is recorded.
- Review and certification are not skipped.
- `docs/Projects/ForgeAI/Planning/ProjectStatus.md` is not advanced before certification.

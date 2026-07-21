# Scenario 04 — Documentation Task

## Purpose

Validate documentation task routing for creating, maintaining, or refactoring documentation.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
Create or refactor the requested AI Framework documentation while preserving authority, terminology, cross references, and ProjectStatus boundaries.
```

---

# Expected Selection

The agent must select:

```text
docs/AI-DOS/Commands/AgentDocumentationCommand.md
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI-DOS/README.md
docs/AI-DOS/AgentSystemPrompt.md
docs/AI-DOS/AIFramework.md
docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md
docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md
docs/AI-DOS/AIOrchestrator.md
docs/AI-DOS/System/BootSequence.md
docs/AI-DOS/System/ContextAssembly.md
docs/AI-DOS/System/DecisionModel.md
docs/AI-DOS/Commands/AgentTaskCommand.md
docs/AI-DOS/Commands/AgentDocumentationCommand.md
docs/AI-DOS/Validation/README.md
docs/AI-DOS/Validation/ValidationLifecycle.md
docs/AI-DOS/Validation/ValidationLevels.md
docs/AI-DOS/Validation/ValidationCertification.md
docs/AI-DOS/Checklists/AgentReviewChecklist.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
Relevant template when applicable
```

---

# Expected Template Selection

| Documentation Target | Template |
| --- | --- |
| Phase document | `docs/AI-DOS/Templates/Planning/PhaseTemplate.md` |
| Stage document | `docs/AI-DOS/Templates/Planning/StageTemplate.md` |
| Historical Capability document | `docs/AI-DOS/Templates/Planning/HistoricalCapabilityTemplate.md` |
| Audit report | `docs/AI-DOS/Templates/Audit/AuditTemplate.md` |
| No template applies | Follow AI Framework structure and document the deviation. |

---

# Expected Terminology and Cross-Reference Checks

The agent must verify:

- terminology aligns with `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`;
- authority hierarchy is preserved;
- cross references resolve to existing paths;
- related framework documents remain synchronized;
- documentation does not duplicate or redefine higher authority;
- historical capability identifiers are unchanged;
- `docs/Projects/ForgeAI/Planning/ProjectStatus.md` remains the only live operational Source of Truth.

---

# Forbidden Behaviours

- Inventing architecture.
- Duplicating authority.
- Changing capability identifiers.
- Editing source code.
- Treating reference material as implementation authority.
- Updating ProjectStatus without completion evidence, review, and certification.

---

# Pass Criteria

- Documentation command is selected.
- Relevant template is selected or deviation is explained.
- Terminology and links are checked.
- Authority hierarchy remains intact.
- No PHP, TS, TSX, JS, JSX, SCSS, or CSS source file is changed.
- ProjectStatus is not modified unless explicitly authorized after certification.

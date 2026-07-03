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
docs/AI/Commands/AgentDocumentationCommand.md
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI/README.md
docs/AI/AgentSystemPrompt.md
docs/AI/AIFramework.md
docs/AI/Specification/Constitution.md
docs/AI/Specification/Terminology.md
docs/AI/AIOrchestrator.md
docs/AI/System/BootSequence.md
docs/AI/System/ContextAssembly.md
docs/AI/System/DecisionModel.md
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentDocumentationCommand.md
docs/AI/Validation/README.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/ProjectStatus.md
Relevant template when applicable
```

---

# Expected Template Selection

| Documentation Target | Template |
| --- | --- |
| Phase document | `docs/AI/Templates/PhaseTemplate.md` |
| Stage document | `docs/AI/Templates/StageTemplate.md` |
| Historical Sprint document | `docs/AI/Templates/SprintTemplate.md` |
| Audit report | `docs/AI/Templates/AuditTemplate.md` |
| No template applies | Follow AI Framework structure and document the deviation. |

---

# Expected Terminology and Cross-Reference Checks

The agent must verify:

- terminology aligns with `docs/AI/Specification/Terminology.md`;
- authority hierarchy is preserved;
- cross references resolve to existing paths;
- related framework documents remain synchronized;
- documentation does not duplicate or redefine higher authority;
- historical sprint identifiers are unchanged;
- `docs/ProjectStatus.md` remains the only live operational Source of Truth.

---

# Forbidden Behaviours

- Inventing architecture.
- Duplicating authority.
- Changing sprint identifiers.
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

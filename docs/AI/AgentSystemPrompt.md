# Forge AI — AI Agent System Prompt

## Status

Status: Tool-Facing Agent Rule Set  
Document Type: Reusable System Prompt  
Authority: `AGENTS.md`  
Framework Entry: `docs/AI/AIFramework.md`  
AI System Layer: `docs/AI/System/`  
Live State Source: `docs/ProjectStatus.md`

---

## Purpose

This prompt defines mandatory operating rules for AI agents working on Forge AI, including Codex, Cursor, Claude Code, ChatGPT, Gemini CLI, and future agents.

It does not replace project governance. It makes the existing governance tool-facing and executable by AI coding assistants.

---

## Authority

Follow this authority order:

```text
Human instruction for the active task
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI2-DevelopmentPhases.md
    ↓
docs/FrameworkGovernance.md
    ↓
Current Phase document
    ↓
Current Stage document
    ↓
Historical Capability specification
    ↓
Relevant AI command, workflow, template, checklist, and validation documents
```

If documents conflict, follow the higher-authority document. If a human instruction narrows task scope, obey that scope unless it conflicts with non-negotiable project governance.

---

## Required Boot Sequence

Before deciding what work to perform, read the governing context in this order:

```text
1. AGENTS.md
2. docs/AI/README.md
3. docs/AI/AIFramework.md
4. docs/AI/System/README.md
5. docs/AI/System/BootSequence.md
6. docs/AI/System/AuthorityModel.md
7. docs/AI/System/SourceOfTruth.md
8. docs/AI/System/ContextAssembly.md
9. docs/AI/System/DecisionModel.md
10. docs/AI/System/ExecutionSequence.md
11. docs/AI/Specification/Constitution.md
12. docs/AI/AIOrchestrator.md
13. docs/ProjectStatus.md
14. docs/DevelopmentPhases/ForgeAI2-DevelopmentPhases.md
15. docs/FrameworkGovernance.md
16. Current Phase document named by docs/ProjectStatus.md
17. Current Stage document named by docs/ProjectStatus.md, when present
18. Assigned Historical Capability specification, when present
19. docs/AI/Workflows/TaskPlanner.md
20. Relevant command, workflow, template, checklist, and validation documents
```

Do not infer live project position from memory. `docs/ProjectStatus.md` must be read before selecting or recommending next work.

---

## Source of Truth Rules

1. `AGENTS.md` is the bootstrap authority for Forge AI.
2. `docs/ProjectStatus.md` is the only live operational Source of Truth for active phase, active stage, active historical capability, immediate next work, and current development rules.
3. `docs/AI/AIFramework.md` is the AI Framework RC2 master entry.
4. `docs/AI/Specification/Constitution.md` is the AI Framework constitution.
5. Commands, workflows, templates, validation documents, and checklists define execution procedure. They do not define architecture or override governance.
6. Historical Capability identifiers are immutable and must not be renumbered.
7. Reference directories are read-only:

```text
_reference/axis-suite-v1
_reference/feature-project
```

---

## Work Selection Rules

AI agents must derive work from documented state and approved orchestration.

Do not ask “what should I do next?” when the answer is derivable from:

```text
docs/ProjectStatus.md
docs/AI/AIOrchestrator.md
docs/AI/System/DecisionModel.md
docs/AI/Workflows/TaskPlanner.md
```

When next work is derivable, state the derived work, cite the governing documents, and proceed only within authorized scope.

Stop and report a blocker when:

- project state is contradictory;
- no active phase, stage, capability, or task can be identified;
- ownership or authority is unclear;
- the requested work conflicts with `AGENTS.md` or the AI Framework Constitution;
- required source documents are missing.

---

## Code Change Rules

No code changes are allowed unless explicitly requested by the active task.

When code changes are authorized:

1. preserve the architectural dependency flow;
2. keep Domain pure PHP;
3. do not introduce WordPress, persistence, REST, rendering, or Presentation dependencies into Domain;
4. do not let Builder, Runtime, Infrastructure, WordPress, or Presentation own schema or domain truth;
5. validate using the quality gates required by the active task and `docs/ProjectStatus.md`.

When the active task is documentation or tooling enforcement, do not modify PHP, TypeScript, JavaScript, SCSS, CSS, build output, or other source files unless the task explicitly authorizes those changes.

---

## AI System Layer

Agents must use `docs/AI/System/` as the tool-facing operating layer for boot, authority resolution, source-of-truth handling, context assembly, decision routing, execution sequencing, validation, review, certification, and project-state update decisions.

The System layer operationalizes existing framework rules; it does not redefine architecture, governance, validation, review, certification, or live project state.

---

## Execution Procedure

After boot and state acquisition:

1. assemble context from the active state;
2. select the correct AI workflow;
3. select the correct command document;
4. select the correct template and checklist;
5. execute only the approved task scope;
6. validate with evidence;
7. review against governance;
8. update project state only when the task explicitly requires it;
9. provide a completion report with changed files, validation results, and recommended next step.

---

## Non-Negotiable Constraints

- Do not modify `docs/ProjectStatus.md` unless the active task explicitly requests a project state update.
- Do not modify historical capability identifiers.
- Do not write into reference directories.
- Do not copy obsolete V1 architecture into V2.
- Do not treat implementation code as the source of architectural truth.
- Do not invent work outside documented state and active task scope.

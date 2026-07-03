# AI System Operating Layer

## Status

Status: AI Framework v1.0 RC2 Operating Layer

Document Type: Tool-Facing System Index

Authority: `AGENTS.md`

Framework Entry: `docs/AI/AIFramework.md`

Lifecycle Coordinator: `docs/AI/AIOrchestrator.md`

Live State Source: `docs/ProjectStatus.md`

---

# Purpose

The AI System layer defines the daily operating procedure for tools, AI agents, automation, and future swarms working inside Forge AI.

The System layer does not redefine architecture, governance, validation, review, certification, commands, workflows, templates, or project state. It operationalizes existing AI Framework RC2 rules so agents can consistently boot, assemble context, decide work, execute tasks, validate evidence, request or perform review, support certification, and update project state only when permitted.

---

# System Layer Map

```text
docs/AI/System/
├── README.md
├── BootSequence.md
├── ExecutionSequence.md
├── DecisionModel.md
├── AuthorityModel.md
├── SourceOfTruth.md
└── ContextAssembly.md
```

---

# Relationship to Existing AI Framework Layers

| Layer | Relationship |
| --- | --- |
| `docs/AI/AIFramework.md` | Defines the AI Framework principles, model, subsystem map, and master entry point. |
| `docs/AI/Specification/` | Defines the framework constitution, specification, runtime model, governance model, terminology, and reference architecture. |
| `docs/AI/AIOrchestrator.md` | Coordinates lifecycle sequencing from project state through planning, execution, validation, review, certification, and project-state update. |
| `docs/AI/Validation/` | Defines evidence-based conformance, validation lifecycle, validation levels, checklist structure, and certification rules. |
| `docs/AI/Commands/` | Defines bounded task execution commands for implementation, audit, documentation, bug fixes, and general tasks. |
| `docs/AI/Workflows/` | Defines planning, task generation, and project-state update workflows. |
| `docs/ProjectStatus.md` | Remains the only live operational Source of Truth for current phase, stage, active sprint, blockers, progress, and recommended next action. |

The System layer sits above these documents as a tool-facing operating layer. It tells agents how to use them in the correct order.

---

# Tool-Facing Reading Order

For execution in Forge AI, agents should use this tool-facing order:

```text
1. AGENTS.md
2. .cursorrules
3. docs/AI/README.md
4. docs/AI/System/README.md
5. docs/AI/System/BootSequence.md
6. docs/AI/System/AuthorityModel.md
7. docs/AI/System/SourceOfTruth.md
8. docs/AI/System/ContextAssembly.md
9. docs/AI/System/DecisionModel.md
10. docs/AI/System/ExecutionSequence.md
11. docs/AI/AIFramework.md
12. docs/AI/Specification/Constitution.md
13. docs/AI/Specification/Terminology.md
14. docs/AI/Specification/FrameworkSpecification.md
15. docs/AI/Specification/RuntimeModel.md
16. docs/AI/Specification/GovernanceModel.md
17. docs/AI/AIOrchestrator.md
18. docs/ProjectStatus.md
19. docs/AI/Workflows/TaskPlanner.md
20. Relevant command, workflow, template, checklist, validation, phase, stage, and sprint documents
```

When a higher-authority instruction provides a narrower required reading order, follow that instruction while preserving all required System responsibilities.

---

# Operating Rule

System documents translate existing framework rules into repeatable agent behavior:

```text
Boot
    ↓
Authority Resolution
    ↓
Source-of-Truth Resolution
    ↓
Context Assembly
    ↓
Decision Routing
    ↓
Execution Sequencing
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
ProjectStatus Update, only when permitted
```

Validation, review, and certification are separate responsibilities:

- **Validation** verifies evidence.
- **Review** evaluates readiness.
- **Certification** recognizes completion.
- **ProjectStatus update** records live project state only after certification and only through the approved workflow.

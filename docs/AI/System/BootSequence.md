# AI System Boot Sequence

## Status

Status: AI Framework v1.0 RC2 Operating Procedure

Document Type: Tool-Facing Boot Procedure

Authority: `AGENTS.md`

Related Documents:

```text
docs/AI/System/README.md
docs/AI/System/AuthorityModel.md
docs/AI/System/SourceOfTruth.md
docs/AI/System/ContextAssembly.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/ProjectStatus.md
docs/AI/Validation/README.md
```

---

# Purpose

This document defines the exact boot procedure AI agents must follow before deciding or executing work in Forge AI.

Boot establishes authority, state, current scope, validation availability, and the execution path. It prevents agents from relying on stale memory, conversational assumptions, or undocumented task authority.

---

# Required Boot Order

Agents must begin in this order unless a higher-authority human instruction narrows scope without conflicting with project governance:

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
11. docs/AI/AgentSystemPrompt.md
12. docs/AI/AIFramework.md
13. docs/AI/Specification/Constitution.md
14. docs/AI/Specification/Terminology.md
15. docs/AI/Specification/FrameworkSpecification.md
16. docs/AI/Specification/RuntimeModel.md
17. docs/AI/Specification/GovernanceModel.md
18. docs/AI/AIOrchestrator.md
19. docs/AI/Workflows/TaskPlanner.md
20. docs/AI/Workflows/TaskGenerationWorkflow.md
21. docs/AI/Workflows/ProjectStateUpdater.md
22. docs/AI/Validation/README.md
23. docs/AI/Validation/AIFrameworkValidation.md
24. docs/AI/Validation/ValidationLifecycle.md
25. docs/AI/Validation/ValidationLevels.md
26. docs/AI/Validation/ValidationChecklistTemplate.md
27. docs/AI/Validation/ValidationCertification.md
28. docs/ProjectStatus.md
29. Development Constitution
30. Current Phase document
31. Current Stage document, when present
32. Assigned Historical Capability specification, when present
33. Relevant command, workflow, template, checklist, and validation documents
```

---

# Validation Availability Check

Before execution, agents must verify that the required Validation layer is available:

```text
docs/AI/Validation/README.md
docs/AI/Validation/AIFrameworkValidation.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationChecklistTemplate.md
docs/AI/Validation/ValidationCertification.md
```

If any required validation document is missing or empty, the agent must stop ordinary task execution and create or complete the missing validation document first when the active task authorizes that work.

---

# Stop Conditions

Stop and report a blocker when:

- `AGENTS.md` is missing;
- `docs/ProjectStatus.md` is missing or unreadable;
- required AI Framework, System, Orchestrator, Workflow, or Validation documents are missing for the active task;
- the active phase, stage, capability, or task cannot be resolved when required;
- authority or ownership conflicts cannot be resolved through the authority order;
- the requested work conflicts with `AGENTS.md` or the AI Framework Constitution;
- validation, review, or certification is being skipped for work that requires completion recognition;
- a ProjectStatus update is requested before certification;
- source code changes are required but the active task does not authorize source code changes.

---

# Do Not Ask What Next Rule

Agents must not ask what to do next when the next action can be derived from:

```text
docs/ProjectStatus.md
docs/AI/AIOrchestrator.md
docs/AI/Workflows/TaskPlanner.md
docs/AI/System/DecisionModel.md
```

When the next action is derivable, the agent should state the derived action, cite the governing documents in the completion report when applicable, and proceed only within authorized scope.

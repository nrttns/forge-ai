# AI Framework Scenario Testing

## Status

Status: AI Framework v1.0 RC2 Scenario Testing Layer

Document Type: Scenario Testing Index

Authority: `docs/AI/AIFramework.md`

Related Documents:

```text
AGENTS.md
docs/AI/AIFramework.md
docs/AI/System/
docs/AI/Validation/
docs/AI/Commands/
docs/AI/Checklists/AgentReviewChecklist.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
```

---

# Purpose

The Scenario Testing layer validates AI Framework RC2, the Validation layer, and the AI System operating layer against realistic agent execution scenarios before Framework Certification.

Scenario Testing verifies whether an agent can use existing framework authority correctly. It does not define architecture, execute project implementation, certify work by itself, or replace validation, review, commands, workflows, or `docs/Projects/ForgeAI/Planning/ProjectStatus.md`.

Scenario tests validate agent behaviour, not source code.

---

# Reading Order

Before using scenario tests, read:

```text
1. AGENTS.md
2. .cursorrules
3. docs/AI/README.md
4. docs/AI/AgentSystemPrompt.md
5. docs/AI/AIFramework.md
6. docs/AI/Architecture/Constitution/A.1-Constitution.md
7. docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md
8. docs/AI/GOVERNANCE.md
9. docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md
10. docs/AI/AIOrchestrator.md
11. docs/AI/System/README.md
12. docs/AI/System/BootSequence.md
13. docs/AI/System/ExecutionSequence.md
14. docs/AI/System/DecisionModel.md
15. docs/AI/System/SourceOfTruth.md
16. docs/AI/System/ContextAssembly.md
17. docs/AI/Validation/README.md
18. docs/AI/Validation/AIFrameworkValidation.md
19. docs/AI/Validation/ValidationLifecycle.md
20. docs/AI/Validation/ValidationLevels.md
21. docs/AI/Validation/ValidationChecklistTemplate.md
22. docs/AI/Validation/ValidationCertification.md
23. docs/AI/Workflows/TaskPlanner.md
24. docs/AI/Workflows/TaskGenerationWorkflow.md
25. docs/AI/Workflows/ProjectStateUpdater.md
26. docs/AI/Commands/AgentTaskCommand.md
27. docs/AI/Commands/AgentImplementationCommand.md
28. docs/AI/Commands/AgentAuditCommand.md
29. docs/AI/Commands/AgentDocumentationCommand.md
30. docs/AI/Commands/AgentBugFixCommand.md
31. docs/AI/Checklists/AgentReviewChecklist.md
32. docs/Projects/ForgeAI/Planning/ProjectStatus.md
33. docs/AI/Testing/FrameworkValidationScenarios.md
34. Relevant scenario file
```

---

# Relationship to Framework Layers

| Layer | Relationship |
| --- | --- |
| AI Framework | Scenario Testing consumes framework principles and lifecycle rules. |
| AI System | Scenario Testing verifies boot, source-of-truth resolution, context assembly, decision routing, and execution sequencing. |
| Validation | Scenario Testing verifies validation levels, evidence requirements, lifecycle boundaries, and certification readiness rules. |
| Commands | Scenario Testing verifies correct command selection for implementation, audit, documentation, bug fix, and general task situations. |
| Review | Scenario Testing verifies that review gates are not skipped before certification or state advancement. |
| `docs/Projects/ForgeAI/Planning/ProjectStatus.md` | Scenario Testing verifies that live project state is consulted and not advanced without certification. |

---

# Scenario List

| Scenario | File | Purpose |
| --- | --- | --- |
| Scenario 01 | `Scenario-01-AutonomousNextTask.md` | Validate autonomous next-task derivation from project state. |
| Scenario 02 | `Scenario-02-ImplementationTask.md` | Validate implementation task routing. |
| Scenario 03 | `Scenario-03-AuditTask.md` | Validate audit task routing. |
| Scenario 04 | `Scenario-04-DocumentationTask.md` | Validate documentation task routing. |
| Scenario 05 | `Scenario-05-BugFixTask.md` | Validate bug fix task routing. |
| Scenario 07 | `Scenario-07-ApprovalSubjectResolution.md` | Validate bare and explicit Human Governance approval-intent resolution against the Pending Human Governance Approval Subject record. |
| Scenario 08 | `Scenario-08-ApprovalSubjectRecording.md` | Validate the producer-side procedure that records exactly one eligible reviewed completion subject into the Pending Human Governance Approval Subject record. |

---

# Operating Rules

Scenario tests must:

- validate agent behaviour rather than source code;
- use `docs/Projects/ForgeAI/Planning/ProjectStatus.md` as the live operational Source of Truth;
- verify command, workflow, validation, review, and certification boundaries;
- produce expected behaviour, required inputs, validation checks, and pass/fail criteria;
- avoid defining architecture or changing project implementation;
- avoid advancing `docs/Projects/ForgeAI/Planning/ProjectStatus.md` without certification through the approved workflow.

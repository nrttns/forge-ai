# AI Framework

## Status

Status: AI Framework v1.0 RC2 Entry Point

Document Type: Framework Index

Authority: `AGENTS.md`

Master Entry: `docs/AI/AIFramework.md`

Specification Directory: `docs/AI/Specification/`

---

## Purpose

This directory contains the AI operational framework used by Forge AI and designed as a framework-independent model for AI-assisted software engineering.

The AI Framework defines how AI agents plan, execute, validate, review, document, govern, and update project state while preserving architectural integrity.

This README is the directory entry point. The master framework entry is:

```text
docs/AI/AIFramework.md
```

---

## Framework Reading Order

AI agents should read the AI framework in this order:

```text
AGENTS.md
    ↓
docs/AI/README.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/Specification/Terminology.md
    ↓
docs/AI/Specification/FrameworkSpecification.md
    ↓
docs/AI/Specification/RuntimeModel.md
    ↓
docs/AI/Specification/GovernanceModel.md
    ↓
docs/AI/Specification/ReferenceArchitecture.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/ProjectStatus.md
    ↓
docs/AI/Workflows/TaskPlanner.md
    ↓
docs/AI/Workflows/TaskGenerationWorkflow.md
    ↓
docs/AI/Workflows/ProjectStateUpdater.md
    ↓
docs/AI/Templates/Project/README.md
    ↓
docs/AI/Lifecycle/README.md
    ↓
docs/AI/Testing/README.md
    ↓
Relevant Command / Template / Checklist / Validation document
```

---

## Framework Map

```text
docs/AI/
├── README.md
├── AIFramework.md
├── AIOrchestrator.md
├── AgentSystemPrompt.md
│
├── System/
│   ├── README.md
│   ├── BootSequence.md
│   ├── ExecutionSequence.md
│   ├── DecisionModel.md
│   ├── AuthorityModel.md
│   ├── SourceOfTruth.md
│   └── ContextAssembly.md
│
├── Specification/
│   ├── Constitution.md
│   ├── FrameworkSpecification.md
│   ├── RuntimeModel.md
│   ├── GovernanceModel.md
│   ├── ReferenceArchitecture.md
│   └── Terminology.md
│
├── Commands/
│   ├── AgentTaskCommand.md
│   ├── AgentAuditCommand.md
│   ├── AgentImplementationCommand.md
│   ├── AgentDocumentationCommand.md
│   └── AgentBugFixCommand.md
│
├── Workflows/
│   ├── TaskPlanner.md
│   ├── TaskGenerationWorkflow.md
│   └── ProjectStateUpdater.md
│
├── Validation/
│   ├── README.md
│   ├── AIFrameworkValidation.md
│   ├── ValidationLifecycle.md
│   ├── ValidationLevels.md
│   ├── ValidationChecklistTemplate.md
│   └── ValidationCertification.md
│
├── Testing/
│   ├── README.md
│   ├── FrameworkValidationScenarios.md
│   ├── Scenario-01-AutonomousNextTask.md
│   ├── Scenario-02-ImplementationTask.md
│   ├── Scenario-03-AuditTask.md
│   ├── Scenario-04-DocumentationTask.md
│   └── Scenario-05-BugFixTask.md
│
├── Certification/
│   ├── AIFrameworkCertificationReadinessAudit.md
│   └── ProjectTemplateAdoptionReview.md
│
├── Lifecycle/
│   ├── README.md
│   ├── Versioning.md
│   ├── ReleasePolicy.md
│   ├── CompatibilityPolicy.md
│   ├── DeprecationPolicy.md
│   ├── SupportPolicy.md
│   ├── ReleaseChecklist.md
│   └── CHANGELOG.md
│
├── Tooling/
│   └── CursorRules.md
│
├── Checklists/
│   └── AgentReviewChecklist.md
│
└── Templates/
    ├── PhaseTemplate.md
    ├── StageTemplate.md
    ├── SprintTemplate.md
    ├── AuditTemplate.md
    └── Project/
        ├── README.md
        ├── ProjectTemplateArchitecture.md
        ├── GenericProjectTemplate.md
        ├── WordPressProjectTemplate.md
        ├── TemplateBootstrapWorkflow.md
        └── TemplateAdoptionChecklist.md
```

---

## Core Documents

| Area | Document |
| --- | --- |
| Master index | `AIFramework.md` |
| Tool-facing system prompt | `AgentSystemPrompt.md` |
| AI System operating layer | `System/README.md` |
| AI System boot sequence | `System/BootSequence.md` |
| AI System execution sequence | `System/ExecutionSequence.md` |
| AI System decision model | `System/DecisionModel.md` |
| AI System authority model | `System/AuthorityModel.md` |
| AI System source of truth | `System/SourceOfTruth.md` |
| AI System context assembly | `System/ContextAssembly.md` |
| Cursor tooling rules | `Tooling/CursorRules.md` |
| Framework constitution | `Specification/Constitution.md` |
| Core specification | `Specification/FrameworkSpecification.md` |
| Runtime model | `Specification/RuntimeModel.md` |
| Governance model | `Specification/GovernanceModel.md` |
| Reference architecture | `Specification/ReferenceArchitecture.md` |
| Terminology | `Specification/Terminology.md` |
| Lifecycle orchestration | `AIOrchestrator.md` |
| Task planning | `Workflows/TaskPlanner.md` |
| Task generation | `Workflows/TaskGenerationWorkflow.md` |
| Project state updates | `Workflows/ProjectStateUpdater.md` |
| Validation index | `Validation/README.md` |
| Validation specification | `Validation/AIFrameworkValidation.md` |
| Validation lifecycle | `Validation/ValidationLifecycle.md` |
| Validation levels | `Validation/ValidationLevels.md` |
| Validation checklist template | `Validation/ValidationChecklistTemplate.md` |
| Validation certification | `Validation/ValidationCertification.md` |
| Scenario testing index | `Testing/README.md` |
| Scenario testing matrix | `Testing/FrameworkValidationScenarios.md` |
| Certification readiness audit | `Certification/AIFrameworkCertificationReadinessAudit.md` |
| Project template adoption review | `Certification/ProjectTemplateAdoptionReview.md` |
| Lifecycle index | `Lifecycle/README.md` |
| Versioning policy | `Lifecycle/Versioning.md` |
| Release policy | `Lifecycle/ReleasePolicy.md` |
| Compatibility policy | `Lifecycle/CompatibilityPolicy.md` |
| Deprecation policy | `Lifecycle/DeprecationPolicy.md` |
| Support policy | `Lifecycle/SupportPolicy.md` |
| Release checklist | `Lifecycle/ReleaseChecklist.md` |
| AI Framework changelog | `Lifecycle/CHANGELOG.md` |
| General command | `Commands/AgentTaskCommand.md` |
| Audit command | `Commands/AgentAuditCommand.md` |
| Implementation command | `Commands/AgentImplementationCommand.md` |
| Documentation command | `Commands/AgentDocumentationCommand.md` |
| Bug fix command | `Commands/AgentBugFixCommand.md` |
| Review checklist | `Checklists/AgentReviewChecklist.md` |
| Project template layer | `Templates/Project/README.md` |
| Project template architecture | `Templates/Project/ProjectTemplateArchitecture.md` |
| Generic project template | `Templates/Project/GenericProjectTemplate.md` |
| WordPress project template | `Templates/Project/WordPressProjectTemplate.md` |
| Template bootstrap workflow | `Templates/Project/TemplateBootstrapWorkflow.md` |
| Template adoption checklist | `Templates/Project/TemplateAdoptionChecklist.md` |


---


## Project Template Layer

The Project Template layer provides reusable adoption structures for future projects that consume AI Framework RC2:

```text
docs/AI/Templates/Project/
```

Project Templates bootstrap new projects with framework-compatible governance, source-of-truth, validation, testing, certification, and repository structure. They do not define AI Framework authority, replace the AI System operating layer, or embed Forge AI-specific implementation details.

Forge AI remains the first reference implementation of the AI Framework. Generic and framework-specific Project Templates allow other projects to adopt the framework without copying Axis-specific architecture, capability history, or source code.

## Certification Layer

The Certification layer stores framework certification evidence and readiness audits:

```text
docs/AI/Certification/
```

Certification evidence may verify readiness to proceed toward a formal framework certification decision, but readiness audits do not advance `docs/ProjectStatus.md` or certify a framework release unless the audit explicitly passes the required certification criteria.

## Lifecycle Layer

The Lifecycle layer governs AI Framework evolution over time:

```text
docs/AI/Lifecycle/
```

Lifecycle defines versioning, release stages, compatibility expectations, deprecation process, support expectations, release checklist discipline, and changelog governance. It does not define framework authority, authorize implementation, replace certification evidence, redefine validation, or update operational project state.

## Scenario Testing Layer

The Scenario Testing layer validates AI Framework RC2, the Validation layer, and the AI System operating layer against realistic agent execution scenarios before Framework Certification:

```text
docs/AI/Testing/
```

Scenario Testing verifies agent behaviour, including boot sequence, ProjectStatus consultation, task-type routing, command selection, validation, review, certification boundaries, and ProjectStatus advancement controls.

Scenario Testing does not define architecture, execute project implementation, replace validation or review, or modify source code.

---

## AI System Operating Layer

The AI System layer is the tool-facing operating layer for daily agent execution:

```text
docs/AI/System/
```

It operationalizes AI Framework RC2 and the completed Validation layer by making boot, decision making, authority resolution, source-of-truth handling, context assembly, execution sequencing, validation, review, certification, and controlled project-state updates explicit.

System documents do not redefine architecture or governance. They explain how agents use the framework, orchestrator, workflows, commands, validation documents, review checklists, and `docs/ProjectStatus.md` in the correct order.

---

## Framework Model

```text
Knowledge
    ↓
State
    ↓
Context
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
Project State Update
    ↓
Memory
    ↓
Future Context
```

The framework separates:

- **Knowledge** — persistent documented information;
- **State** — current authoritative project reality;
- **Context** — temporary task workspace;
- **Execution** — approved work;
- **Validation** — evidence-based verification;
- **Review** — independent quality assessment;
- **Certification** — recognition that validation and review support completion;
- **Memory** — derived reusable learning.

---

## Framework Position

The AI Framework core language is framework-independent.

Forge AI is the first framework implementation of the framework.

Future framework adapters may include:

```text
Axis Suite
Laravel
Symfony
WordPress
React
Node.js
Generic Projects
```

---

## Rule

AI agents should not ask “what should I do next?” when the answer is derivable from:

```text
docs/ProjectStatus.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/Workflows/TaskPlanner.md
```

Agents should derive the next task from documented project state, then execute within governance.

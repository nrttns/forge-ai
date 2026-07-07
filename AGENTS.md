# Forge AI — Project Constitution

This document is the bootstrap authority for all humans, AI agents, automation systems, multi-agent systems, swarm systems, and development tooling working on Forge AI.

If any code, documentation, proposal, capability, implementation, automation, or agent output conflicts with this document, this document wins.

Forge AI is a platform-independent, documentation-driven AI Development Operating System.

---

# 0. Authority

Forge AI uses this authority model:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
Current Phase Document
    ↓
Current Stage Document
    ↓
Current Capability Document
    ↓
Generated Task
```

`AGENTS.md` is the bootstrap and constitutional entry point.

`docs/AI/AIFramework.md` is the AI Framework master entry point.

`docs/AI/Specification/Constitution.md` defines the AI Framework Constitution when present.

`docs/FrameworkGovernance.md` defines framework-level governance and decision policy.

`docs/ProjectStatus.md` is the only live operational project status document.

Capability identifiers are immutable after certification.

## 0.1 Forge AI v3 Transitional Authority

During Forge AI v3 migration, `AGENTS.md` remains the bootstrap authority before, during, and after transition.

`docs/AI/Architecture/A.1-Constitution.md`, `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Meta/M.1-Artifact-Meta-Model.md`, and `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` are target v3 authority candidates until explicitly approved and promoted through governance.

No v3 architecture, meta model, standard, RFC, report, or blueprint supersedes this document unless this document is explicitly amended to recognize that promotion.

The Forge AI Blueprint RFC remains transitional and non-canonical until ratified by Framework Governance and explicitly referenced by this document or another approved authority document.

RC2 operational procedures remain valid until they are explicitly replaced by approved v3 operational procedures.

---

# 1. Mission

Forge AI is a platform-independent AI Development Operating System.

Its mission is to provide a documentation-driven framework for planning, orchestrating, executing, validating, reviewing, certifying, and governing AI-assisted software development.

Forge AI must remain independent of any specific programming language, runtime, framework, product, editor, platform, or host application.

Forge AI supports:

- architecture-first development;
- documentation-first execution;
- self-planning AI agents;
- explicit command and workflow systems;
- validation and review before completion;
- project state management;
- knowledge and memory management;
- multi-agent collaboration;
- swarm orchestration;
- platform adapters.

Forge AI is not a WordPress framework, Laravel framework, React framework, code generator, project template, or product-specific architecture.

Platform-specific behavior belongs only in platform adapters.

---

# 2. Core Principles

Forge AI is governed by these permanent principles:

```text
Architecture before Code
Documentation before Implementation
Planning before Execution
Contracts before Implementation
Validation before Completion
Review before Certification
Certification before Project State Update
State before Context
Explicit Ownership
Platform Independence
Adapters Extend; Adapters Never Redefine
```

These principles must not be violated for implementation convenience, velocity, optimization, tool preference, or short-term productivity.

---

# 3. Planning Model

Forge AI uses this canonical planning hierarchy:

```text
Framework
    ↓
Phase
    ↓
Stage
    ↓
Capability
    ↓
Task
```

Planning uses Phase and Stage documents.

Capability documents describe approved executable increments.

Tasks are generated from current project state and approved planning documents.

Capability identifiers are immutable after completion and must not be renumbered.

---

# 4. AI Boot Sequence

Every AI agent must begin with this sequence:

```text
1. Read AGENTS.md
2. Read docs/AI/README.md
3. Read docs/AI/AIFramework.md
4. Read docs/AI/Specification/Constitution.md when present
5. Read docs/AI/AIOrchestrator.md
6. Read docs/FrameworkGovernance.md
7. Read docs/ProjectStatus.md
8. Read docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
9. Read the current Phase document
10. Read the current Stage document
11. Read the assigned Capability document
12. Select the correct command, workflow, template, checklist, and validation procedure
```

Agents should not ask what to do next when the next action can be derived from `docs/ProjectStatus.md`, `docs/AI/AIOrchestrator.md`, and `docs/AI/Workflows/TaskPlanner.md`.

---

# 5. Framework Documentation Map

AI operational documentation lives under:

```text
docs/AI/
```

Primary AI documents:

```text
docs/AI/README.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/Specification/
docs/AI/System/
```

Commands:

```text
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentImplementationCommand.md
docs/AI/Commands/AgentAuditCommand.md
docs/AI/Commands/AgentDocumentationCommand.md
docs/AI/Commands/AgentBugFixCommand.md
```

Workflows:

```text
docs/AI/Workflows/TaskPlanner.md
docs/AI/Workflows/TaskGenerationWorkflow.md
docs/AI/Workflows/ProjectStateUpdater.md
```

Validation, review, and templates:

```text
docs/AI/Validation/
docs/AI/Checklists/AgentReviewChecklist.md
docs/AI/Templates/PhaseTemplate.md
docs/AI/Templates/StageTemplate.md
docs/AI/Templates/CapabilityTemplate.md
docs/AI/Templates/AuditTemplate.md
```

Tool-facing rule files:

```text
.cursorrules
docs/AI/AgentSystemPrompt.md
docs/AI/Tooling/CursorRules.md
```

---

# 6. Framework Subsystem Ownership

Each subsystem has exactly one owner.

| Subsystem | Owner | Consumers |
| --- | --- | --- |
| Constitution | Framework Constitution | All participants |
| Governance | Framework Governance | Planning, Review, Certification |
| Planning | Planning System | Orchestrator, Task Generation |
| Workflow | Workflow System | Commands, Runtime |
| Commands | Command System | AI Runtime |
| Templates | Template System | Commands, Documentation |
| Validation | Validation System | Review, Certification |
| Review | Review System | Certification |
| Certification | Certification System | Project State Updater |
| State | State Management | Planning, Orchestrator |
| Knowledge | Knowledge System | Runtime, Context Assembly |
| Memory | Memory System | Runtime, Future Context |
| Runtime | AI Runtime | Agents, Automation |
| Multi-Agent | Collaboration System | Agent Runtime |
| Swarm | Swarm Orchestration | Multi-Agent Runtime |
| Platform Adapters | Adapter System | Target Platforms |

Ownership duplication is prohibited.

A subsystem may consume another subsystem, but it must not redefine that subsystem's authority.

---

# 7. Dependency Flow

Dependencies must flow from authority to execution:

```text
Constitution
    ↓
Governance
    ↓
Planning
    ↓
Workflow
    ↓
Commands
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
```

Forbidden examples:

```text
Implementation → Architecture
Runtime → Governance
Adapter → Framework Constitution
Tooling → Planning Authority
Validation → Implementation Scope
Review → Undocumented Redesign
Project State → Architecture Definition
```

Execution consumes planning.

Implementation never defines architecture.

Adapters consume the Framework.

Adapters never redefine the Framework.

---

# 8. Framework-First Rule

The Framework is the authority.

The Constitution defines permanent principles.

Governance defines decision rules.

Planning defines approved work.

Commands define execution procedure.

Validation verifies evidence.

Review certifies readiness.

State records current reality.

Implementation consumes all of the above.

Implementation must not become a source of architectural truth.

---

# 9. Platform Independence Rule

Forge AI must remain platform-independent.

The Framework must not directly depend on:

- WordPress;
- Laravel;
- Symfony;
- React;
- Node.js;
- PHP;
- TypeScript;
- Python;
- any specific programming language;
- any specific application framework;
- any specific database;
- any specific runtime host;
- any specific editor or IDE.

Platform-specific behavior belongs only in platform adapters.

A platform adapter may translate Forge AI concepts into a target platform, but it must not redefine Forge AI concepts.

---

# 10. Adapter Rules

Platform adapters are consumers.

Adapters may:

- map Forge AI workflows to platform-specific tasks;
- define platform-specific validation commands;
- adapt documentation templates;
- connect to project files;
- expose platform-specific integration points.

Adapters must not:

- change the Constitution;
- change Framework Governance;
- redefine the planning hierarchy;
- bypass commands;
- bypass validation;
- bypass review;
- advance project state without certification;
- make a target platform the source of truth.

---

# 11. Command and Workflow Rules

Commands are operational procedures.

Workflows define lifecycle movement.

Commands and workflows must not invent work.

They must consume:

```text
Project Status
Current Phase
Current Stage
Current Capability
Governance
Relevant command document
Relevant workflow document
Relevant template
Relevant validation rules
```

The required lifecycle is:

```text
Planning
    ↓
Task Generation
    ↓
Command Selection
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
```

No stage should be skipped.

---

# 12. Validation and Review Rules

Validation is evidence-based.

Review is independent readiness assessment.

A task is not complete until:

- required work is done;
- documentation is synchronized;
- validation passes;
- review passes;
- certification is reached when applicable;
- project state update is safe.

Validation must report evidence honestly.

Review must not implement new functionality.

Certification must not occur after failed validation or failed review.

---

# 13. Documentation Rules

Documentation is a production artifact.

Documentation must remain synchronized across:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/
    ↓
Current Phase
    ↓
Current Stage
    ↓
Current Capability
```

Documentation must not duplicate authority unnecessarily.

Lower-level documents may refine higher-level documents but must not contradict them.

---

# 14. Reference Policy

Reference material is read-only.

Reference material may be used for:

- research;
- comparison;
- migration planning;
- architecture inspiration;
- documentation style reference.

Reference material must not become implementation authority.

Reference material must not be imported, executed, autoloaded, copied blindly, or treated as current architecture.

When reference material conflicts with Forge AI, Forge AI wins.

---

# 15. Quality Gates

Every capability must define its own relevant quality gates.

Typical gates may include:

```bash
npm run build
npm run typecheck
npm test
npm run lint
```

Other platform-specific gates may be defined only by a platform adapter or capability specification.

Quality gates may include:

- build checks;
- tests;
- static analysis;
- linting;
- documentation validation;
- architecture validation;
- dependency validation;
- security checks;
- review checklist completion.

A successful task report must state which gates were run and which gates were not applicable.

---

# 16. AI Self-Planning Rules

Agents must derive work from Project Status and the AI Orchestrator whenever possible.

Agents must preserve:

- planning before execution;
- workflow before command;
- command before implementation;
- template before artifact;
- validation before review;
- review before certification;
- certification before project state update.

Agents must stop and report a blocker when:

- authority is unclear;
- ownership is unclear;
- project state is inconsistent;
- scope is ambiguous;
- required documentation is missing;
- requested work exceeds the active capability;
- validation fails;
- review fails.

---

# 17. Human Authority

Humans remain the highest authority.

AI agents assist.

Humans govern.

Human overrides should be documented and traceable when they affect architecture, governance, project state, or certified capability history.

---

# 18. Completion Rule

A Forge AI task is complete only when it has:

- followed the required boot sequence;
- identified the current project state;
- selected the correct workflow and command;
- stayed within approved scope;
- completed required deliverables;
- passed relevant validation;
- passed review or is review-ready;
- documented risks or blockers;
- produced a completion report;
- preserved project state integrity.

Completion without validation and review is not certification.

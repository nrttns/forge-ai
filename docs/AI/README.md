# AI Framework Navigation

This README is the active navigation entry point for the `docs/AI/` directory. It routes humans and AI agents to the current Forge AI v2 authorities and operational entry points.

This README is navigation only. It does **not** replace `AGENTS.md`, the Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, Operational Core, Runtime, System Layer, Commands, Workflows, Templates, or Human Governance.

## Current Authority and Navigation Chain

For Forge AI self-hosting work in this repository, use this reading order unless the active task narrows the required authority set:

```text
AGENTS.md
    ↓
docs/AI/GOVERNANCE.md
    ↓
docs/FrameworkGovernance.md when governance decision policy is relevant
    ↓
docs/DevelopmentPhases/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
docs/AI/Runtime/README.md when Runtime or Engine context is required
    ↓
docs/AI/Commands/ and docs/AI/Workflows/ when task execution requires them
    ↓
docs/AI/Templates/README.md when document generation is required
```

## Navigation Boundaries

- `AGENTS.md` remains the repository bootloader.
- `docs/AI/GOVERNANCE.md` remains the Governance Atlas and repository governance navigation map.
- `docs/FrameworkGovernance.md` is used when governance decision policy is relevant.
- `docs/DevelopmentPhases/ProjectStatus.md` is the Forge AI operational-state source for this repository.
- `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` is the Forge AI roadmap-sequence authority.
- Operational Core documents (`AIFramework.md`, `AIOrchestrator.md`, and `AgentSystemPrompt.md`) route execution within authority; they do not create authority or update ProjectStatus.
- Runtime, Command, Workflow, and Template documents are task-specific inputs and should be read only when required by the task.

## Target-Project Portability

Forge AI self-hosting tasks use the repository paths listed above.

For a separate target project, resolve the target project's state and roadmap through that target repository root and its own `AGENTS.md`. Do not treat Forge AI's `docs/DevelopmentPhases/ProjectStatus.md` or roadmap path as universal paths for every adopting project.

## Active Directory Map

```text
docs/AI/
├── README.md
├── GOVERNANCE.md
├── AIFramework.md
├── AIOrchestrator.md
├── AgentSystemPrompt.md
├── Architecture/
├── Commands/
├── Runtime/
├── System/
├── Templates/
└── Workflows/
```

## Core Documents

| Area | Current Navigation Target |
|:---|:---|
| Repository bootloader | `../../AGENTS.md` |
| Governance Atlas | `GOVERNANCE.md` |
| Governance decision policy | `../FrameworkGovernance.md` |
| Operational state | `../DevelopmentPhases/ProjectStatus.md` |
| Roadmap sequence | `../DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Operational Core entry | `AIFramework.md` |
| System Layer index | `System/README.md` |
| Orchestration | `AIOrchestrator.md` |
| Agent behavior contract | `AgentSystemPrompt.md` |
| Runtime / Engine navigation | `Runtime/README.md` |
| Template Library navigation | `Templates/README.md` |
| Commands | `Commands/` |
| Workflows | `Workflows/` |

## Execution Rule

Agents should derive work only from the active task instruction and current authority chain. If the next action depends on operational state, use Forge AI's current ProjectStatus for self-hosting work, or the target repository's own state source when operating in another project.

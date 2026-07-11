# Forge AI

Forge AI is a documentation-first AI development governance repository. It defines the authority chain, operational state, roadmap sequence, Runtime / Engine architecture, Operational Core guidance, and task-execution boundaries used by AI-assisted work in this repository.

This README is a repository overview and navigation aid only. It is **not** the repository bootloader, does not replace `AGENTS.md`, and does not redefine any governed authority.

## Primary Entry Points

Use the following entry points for Forge AI self-hosting work in this repository:

```text
AGENTS.md
    ↓
docs/AI/GOVERNANCE.md
    ↓
docs/AI/FrameworkGovernance.md when governance decision policy is relevant
    ↓
docs/Projects/ForgeAI/Planning/ProjectStatus.md
    ↓
docs/Projects/ForgeAI/Planning/DevelopmentPhases.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
```

Additional task-specific routing:

- Use `docs/AI/Runtime/README.md` when Runtime or Engine context is required.
- Use `docs/AI/Commands/` and `docs/AI/Workflows/` when task execution requires command or workflow guidance.
- Use `docs/AI/Templates/README.md` when document generation or template selection is required.

## Authority Boundaries

- `AGENTS.md` is the repository bootloader for AI assistants.
- `docs/AI/GOVERNANCE.md` is the Governance Atlas and navigation authority.
- `docs/AI/FrameworkGovernance.md` is the governance decision-policy authority when decision policy is relevant.
- `docs/Projects/ForgeAI/Planning/ProjectStatus.md` records current Forge AI operational state.
- `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` defines roadmap sequence.
- Operational Core documents route execution but do not replace governance, roadmap, Runtime, Engine, or ProjectStatus authority.

## Target-Project Portability

For Forge AI self-hosting tasks, use the paths listed above in this repository.

For another target project that adopts Forge AI practices, resolve that project's operational state, roadmap, commands, workflows, and templates through the target repository root and its own `AGENTS.md`. Do not assume Forge AI repository paths are universal for every project.

## Repository Map

```text
.
├── AGENTS.md
├── README.md
└── docs/
    ├── FrameworkGovernance.md
    ├── DevelopmentPhases/
    │   ├── ProjectStatus.md
    │   └── ForgeAI-DevelopmentPhases.md
    └── AI/
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

## Working Rules for AI Agents

1. Start with `AGENTS.md`.
2. Read the Governance Atlas and active operational state before executing work.
3. Use Framework Governance only when governance decision policy is relevant.
4. Read only task-specific authorities after classification.
5. Preserve frozen-area, roadmap, and ProjectStatus boundaries.
6. Validate changes and report completion evidence.

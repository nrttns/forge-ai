# AI Framework Navigation

This README is the active AI-DOS internal navigation entry point for the `docs/AI/` directory. It routes humans and AI agents to current AI-DOS v2 internal authorities and operational entry points.

This README is navigation only. It does **not** replace the Invocation Context, TargetRepositoryResolution, BootSequence, the Governance Atlas, Framework Governance, Resolved Target Context, Applicable Target Resources, Operational Core, Runtime, System Layer, Commands, Workflows, Templates, or Human Governance.

TargetRepositoryResolution and BootSequence precede normal internal navigation. TargetRepositoryResolution produces the Target Repository Resolution Result, and BootSequence consumes that result to load resolved Framework + Target Project context. This README consumes that loaded context for navigation; it does not identify a Target Repository, resolve a Target invocation-contract path, validate project declarations, or declare Target Project resources.

## Current Authority and Navigation Chain

After TargetRepositoryResolution has completed and BootSequence has loaded the resolved context, use this internal navigation order unless the active task narrows the required authority set:

```text
AI-DOS Provider invocation contract
    ↓
TargetRepositoryResolution
    ↓
BootSequence
    ↓
docs/AI/GOVERNANCE.md
    ↓
docs/AI/FrameworkGovernance.md when governance decision policy is relevant
    ↓
Resolved Target Context
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/System/README.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
docs/AI/Architecture/RFC/Runtime/README.md when Runtime or Engine context is required
    ↓
docs/AI/Commands/ and docs/AI/Workflows/ when task execution requires them
    ↓
docs/AI/Templates/README.md when document generation is required
```

## Navigation Boundaries

- The Invocation Context is the external task invocation and supplied Target identity/context boundary.
- `docs/AI/System/TargetRepositoryResolution.md` owns active Target Repository identification, Target invocation-contract discovery, declaration resolution, validation, blocker reporting, Resolution Result production, and BootSequence handoff.
- `docs/AI/System/BootSequence.md` owns loading resolved Framework + Target Project context from the Resolution Result.
- `docs/AI/GOVERNANCE.md` remains the Governance Atlas and governance navigation map.
- `docs/AI/FrameworkGovernance.md` is used when governance decision policy is relevant after context is resolved and loaded.
- Resolved Target Context is the validated and resolved set of Target-provided resources, objectives, constraints, authorities, execution boundaries, validation requirements, and applicable evidence.
- Applicable Target Resources are Target-provided resources relevant to the current task without prescribed category or format.
- Operational Core documents (`AIFramework.md`, `AIOrchestrator.md`, and `AgentSystemPrompt.md`) route execution within loaded authority; they do not create authority, rediscover the Target Repository, resolve project paths, validate Target declarations, rerun BootSequence, or modify Target resources.
- Runtime, Command, Workflow, and Template documents are task-specific inputs and should be read only when required by the task.

## Target-Project Portability

AI-DOS does not prescribe Target resource names, formats, categories, hierarchy, existence, sequencing, or methodology. For any Target Project, TargetRepositoryResolution reads the supplied invocation boundary and resolves only the context applicable to the invoked task. This README does not resolve Target resources, objectives, constraints, authority inputs, execution boundaries, validation requirements, protected boundaries, or provider references.

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
├── Architecture/RFC/
├── System/
├── Templates/
└── Workflows/
```

## Core Documents

| Area | Current Navigation Target |
|:---|:---|
| AI-DOS Provider entry | Target invocation contract |
| Target Repository resolution | `System/TargetRepositoryResolution.md` |
| Resolved-context loading | `System/BootSequence.md` |
| Governance Atlas | `GOVERNANCE.md` |
| Governance decision policy | `FrameworkGovernance.md` |
| Resolved Target Context | Resolved Target Context |
| Applicable Target resources | Applicable Target Resources |
| Operational Core entry | `AIFramework.md` |
| System Layer index | `System/README.md` |
| Orchestration | `AIOrchestrator.md` |
| Agent behavior contract | `AgentSystemPrompt.md` |
| Runtime / Engine navigation | `Architecture/RFC/Runtime/README.md` |
| Template Library navigation | `Templates/README.md` |
| Commands | `Commands/` |
| Workflows | `Workflows/` |

## Execution Rule

Agents should derive work only from the active task instruction, Invocation Context, loaded AI-DOS authority chain, and Resolved Target Context.
- Applicable Target Resources are consumed only when relevant to the invoked task.
- Runtime and Engine documents define architecture and specialization constraints; operational documents consume them.
- AI execution participants may draft, edit, validate, and recommend, but shall not approve, certify, promote, or modify Target resources unless explicitly instructed by Human Governance.

# AI-DOS Product Navigation

This README is the active navigation entry point for the reusable AI-DOS product under `docs/AI/`. It routes humans and execution participants to governance, architecture, System Layer, Operational Core, Commands, Workflows, and Templates.

This README is navigation only. It does not create authority, identify a Target Repository, resolve Target truth, authorize execution, approve releases, or replace any owning specification.

## Product and Target Boundary

- `docs/AI/` owns reusable AI-DOS product truth.
- The active Target Project owns its source, ProjectStatus, DevelopmentPhases, Roadmap, protected areas, validation declarations, evidence, secrets, and live operational state.
- Forge AI is the self-application Product Development Target Project; it is not AI-DOS itself.
- External Targets must not inherit Forge AI paths, planning, state, memory, workflow, registry, evidence, or configuration.

## Entry and Context Chain

```text
AI-DOS Provider invocation contract
    ↓
TargetRepositoryResolution
    ↓
BootSequence
    ↓
Resolved Target Context
    ↓
AI-DOS governance, architecture, and operational authorities
```

- `System/TargetRepositoryResolution.md` identifies and validates the invoked Target boundary.
- `System/BootSequence.md` loads resolved AI-DOS and Target context.
- Resolved Target Context contains only Target-provided authority and resources applicable to the invocation.

## Authority and Navigation Order

Use the narrowest authority set required by the active task:

```text
Human Governance
    ↓
GOVERNANCE.md
    ↓
FrameworkGovernance.md when decision policy is relevant
    ↓
Architecture/Constitution/A.1-Constitution.md
    ↓
Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md
    ├── governed execution architecture
    │   A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── governed product distribution architecture
        A.6 Distribution Foundation
```

Operational consumption then proceeds through the System Layer and Operational Core as required by the invocation.

## Active Directory Map

```text
docs/AI/
├── README.md
├── GOVERNANCE.md
├── FrameworkGovernance.md
├── AIFramework.md
├── AIOrchestrator.md
├── AgentSystemPrompt.md
├── Architecture/
│   ├── README.md
│   ├── Constitution/
│   ├── RFC/
│   ├── Agents/
│   ├── Discovery/
│   ├── Reports/
│   └── Standards/
├── Meta/
├── System/
├── Commands/
├── Workflows/
└── Templates/
```

## Core Navigation Targets

| Area | Current Navigation Target |
|:---|:---|
| AI-DOS product entry | `README.md` |
| Target Repository resolution | `System/TargetRepositoryResolution.md` |
| Resolved-context loading | `System/BootSequence.md` |
| Governance Atlas | `GOVERNANCE.md` |
| Governance decision policy | `FrameworkGovernance.md` |
| Architecture root | `Architecture/README.md` |
| Constitution | `Architecture/Constitution/A.1-Constitution.md` |
| Architecture RFC families | `Architecture/RFC/README.md` |
| Runtime family | `Architecture/RFC/Runtime/README.md` |
| Distribution family | `Architecture/RFC/Distribution/` |
| Agent Architecture | `Architecture/Agents/` |
| Meta Models | `Meta/` |
| System Layer | `System/README.md` |
| Operational Core | `AIFramework.md`, `AIOrchestrator.md`, `AgentSystemPrompt.md` |
| Commands | `Commands/` |
| Workflows | `Workflows/` |
| Template Library | `Templates/README.md` |

## Consumption Rules

- Architecture defines reusable product contracts; operational documents consume them and do not redefine them.
- A.4.x foundation RFCs are sibling contracts, not a sequential authority chain.
- A.5.x specialization RFCs are capability peers, not a mandatory pipeline.
- A.6 Distribution is a sibling branch to Runtime and Engine architecture under A.2.
- Discovery and report artifacts are evidence unless explicitly promoted by Human Governance.
- Runtime state, Engine state, workflow state, memory, and Target Project state remain distinct.
- Execution participants may draft, edit, execute, validate, and recommend only within explicit authority. They may not approve, certify, promote, release, or mutate Target-owned truth without the required Human Governance or Target authority.

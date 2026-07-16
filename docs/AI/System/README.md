# AI-DOS System Layer Navigation

This README is the navigation index for `docs/AI/System/`.

The canonical System Layer contract is:

```text
docs/AI/System/SystemLayer.md
```

This README does not define System Layer authority, execution procedure, Target methodology, product truth, Target truth, Runtime behavior, Engine behavior, distribution policy, or governance decisions.

## Start Here

Read in this order for a full System Layer review:

```text
SystemLayer.md
    ↓
TargetRepositoryResolution.md
    ↓
BootSequence.md
    ↓
ContextAssembly.md
    ↓
SourceOfTruth.md
    ↓
AuthorityModel.md
    ↓
AuthorityResolution.md
    ↓
DecisionModel.md
    ↓
ExecutionSequence.md
```

Read only the components required by a bounded task when a full review is not necessary.

## Canonical Contract

| Document | Role |
|:---|:---|
| `SystemLayer.md` | Canonical layer contract: purpose, authority, boundaries, consumes, produces, canonical flow, safe stop, and Operational Core handoff. |

## Component Index

| Component | Responsibility |
|:---|:---|
| `TargetRepositoryResolution.md` | Resolve and validate the active Target Repository boundary. |
| `BootSequence.md` | Load resolved Framework and Target context. |
| `ContextAssembly.md` | Assemble minimum sufficient task context. |
| `SourceOfTruth.md` | Classify applicable truth domains and evidence. |
| `AuthorityModel.md` | Define authority categories and precedence constraints. |
| `AuthorityResolution.md` | Resolve applicable authority and conflicts. |
| `DecisionModel.md` | Prepare a bounded safe decision. |
| `ExecutionSequence.md` | Prepare and hand off authorized execution. |
| `SystemLayerFreeze.md` | Historical freeze evidence; not the current layer contract. |

## Canonical Flow

```text
Provider Invocation Contract
        ↓
Invocation Context
        ↓
Target Repository Resolution
        ↓
Resolved Target Context
        ↓
Boot / Context Loading
        ↓
Context Assembly
        ↓
Source-of-Truth Classification
        ↓
Authority Resolution
        ↓
Decision Model
        ↓
Execution Sequence
        ↓
Operational Core
```

The authoritative meaning and boundaries of this flow are defined in `SystemLayer.md` and the individual component contracts.

## Related Navigation

- Product navigation: `docs/AI/README.md`
- Governance Atlas: `docs/AI/GOVERNANCE.md`
- Governance policy: `docs/AI/FrameworkGovernance.md`
- Architecture navigation: `docs/AI/Architecture/README.md`
- Operational Core entry: `docs/AI/AIFramework.md`

## Navigation Boundary

This README is not a second `SystemLayer.md`. Any authority, ownership, dependency, safe-stop, or execution-handoff rule belongs in the canonical layer contract or the owning component document.
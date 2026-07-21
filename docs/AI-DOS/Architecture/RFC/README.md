# AI-DOS Architecture RFC Families

## Purpose

`docs/AI-DOS/Architecture/RFC/` is the canonical root for active AI-DOS Architecture RFC families. It routes readers to the owning RFC family and records cross-family authority rules. It does not own the Constitution, Standards, Agent Architecture, reports, or discovery evidence.

## Authority Topology

```text
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation
```

A.6 is a sibling architecture branch to A.3–A.5. Runtime and Engine RFCs may constrain release compatibility, but they do not own distribution authority.

## RFC Families

| Family | Canonical Directory | Numbering | Responsibility |
|:---|:---|:---|:---|
| Boundary | `Boundary/` | A.2 | Product, Target Project, truth ownership, and Execution Provider operational boundary. |
| Runtime | `Runtime/` | A.3 | Governed execution substrate, runtime state, execution contracts, and provider-neutral runtime boundaries. |
| Engine Platform | `EnginePlatform/` | A.4, A.4.x | Shared Engine Platform plus sibling Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability foundations. |
| Engine Specializations | `EngineSpecializations/` | A.5.0, A.5.x | Specialization-family contract and capability-peer Engine specializations. |
| Distribution | `Distribution/` | A.6 | Release assembly, package, manifest, integrity, compatibility, installation lifecycle, and distribution governance. |

## Family Semantics

### Boundary

A.2 is upstream of both execution and distribution branches. It defines AI-DOS Product, Target Project, and Execution Provider boundaries.

### Runtime and Engine

- A.3 owns Runtime architecture.
- A.4 owns the common Engine Platform.
- A.4.1–A.4.7 are sibling foundation contracts; numeric order does not create authority order.
- A.5.0 owns the specialization-family contract.
- A.5.1–A.5.12 are capability peers; numeric order does not define a mandatory workflow or execution pipeline.

### Distribution

A.6 consumes A.1, A.2, and applicable Meta Models and Standards. It does not derive authority from Runtime, Engines, System Layer, Operational Core, agents, workflows, or providers.

## Placement Rules

- A.1 belongs in `../Constitution/`, not in this RFC tree.
- A.2 boundary RFCs belong in `Boundary/`.
- A.3 Runtime RFCs belong in `Runtime/`.
- A.4 and A.4.x Engine Platform RFCs belong in `EnginePlatform/`.
- A.5.0 and A.5.x Engine Specialization RFCs belong in `EngineSpecializations/`.
- A.6 Distribution RFCs belong in `Distribution/`.
- Reports, audits, inventories, reviews, migration records, and certification evidence belong in `../Reports/` or `../Discovery/`.
- A document must not be placed by number alone; placement follows semantic ownership.

## Product-Purity Rules

Active RFCs must not import Target-owned ProjectStatus, DevelopmentPhases, Roadmap, source state, protected areas, evidence, secrets, or live operational state into reusable AI-DOS product truth.

Forge AI may consume these RFCs as the self-application Product Development Target Project, but external Targets must not inherit Forge AI paths, policy, state, memory, workflow, registry, evidence, or configuration.

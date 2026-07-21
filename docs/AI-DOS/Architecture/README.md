# AI-DOS Architecture

## Purpose

`docs/AI-DOS/Architecture/` is the canonical architecture root for the reusable AI-DOS product. It separates constitutional authority, active Architecture RFCs, Agent Architecture, Standards, historical discovery, and review evidence.

This README is a navigation surface. It does not replace the Constitution, create architecture authority, or promote reports and discovery artifacts.

## Canonical Authority Graph

```text
Human Governance
    ↓
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime Architecture
    │       ↓
    │   A.4 Engine Platform
    │       ├── A.4.1–A.4.7 sibling foundation contracts
    │       └── A.5.0 specialization contract
    │               └── A.5.1–A.5.12 capability-peer specializations
    └── A.6 Distribution Foundation
```

Interpretation rules:

- A.3–A.5 form the governed execution architecture branch.
- A.6 is the governed product-distribution branch and is not downstream of A.3–A.5.
- A.4.1–A.4.7 are sibling conformance contracts under A.4, not a sequential authority chain.
- A.5.1–A.5.12 are capability peers under A.5.0, not a mandatory execution pipeline.
- A.0 discovery material is historical evidence and is not normative authority.

## Canonical Structure

```text
docs/AI-DOS/Architecture/
├── README.md
├── Constitution/
├── RFC/
│   ├── README.md
│   ├── Boundary/
│   ├── Runtime/
│   ├── EnginePlatform/
│   ├── EngineSpecializations/
│   └── Distribution/
├── Agents/
├── Discovery/
├── Reports/
└── Standards/
    └── Schemas/
```

## Ownership

| Directory | Owner | Responsibility |
|:---|:---|:---|
| `Constitution/` | AI-DOS Governance | Constitutional authority, product invariants, truth separation, and amendment boundaries. |
| `RFC/Boundary/` | Architecture Governance | Product, Target Project, and Execution Provider operational boundary. |
| `RFC/Runtime/` | Runtime Architecture | Governed execution-substrate architecture and Runtime-family navigation only. |
| `RFC/EnginePlatform/` | Engine Platform Architecture | A.4 parent platform and A.4.x sibling foundation contracts. |
| `RFC/EngineSpecializations/` | Engine Architecture | A.5.0 specialization contract and A.5.x capability-peer RFCs. |
| `RFC/Distribution/` | Distribution Architecture | Product release, package, integrity, compatibility, and installation-lifecycle architecture. |
| `Agents/` | Agent Architecture | Agent contracts that consume Runtime and Engine authority without redefining it. |
| `Discovery/` | Architecture Evidence | Historical audits, discovery baselines, and non-authoritative evidence. |
| `Reports/` | Architecture Evidence | Reviews, migration records, consistency assessments, and certification evidence. |
| `Standards/` | Standards Governance | Cross-artifact standards and schemas. |

## Truth and Boundary Rules

- `docs/AI-DOS/` owns reusable AI-DOS product truth.
- Target Project source, ProjectStatus, DevelopmentPhases, Roadmap, protected areas, evidence, secrets, and live operational state remain Target-owned.
- Forge AI is the self-application Product Development Target Project; it is not AI-DOS itself.
- External Targets must never inherit Forge AI paths, policies, planning, memory, workflow state, registry state, or local configuration.
- Distribution artifacts contain only release-approved AI-DOS product truth.
- Installation does not authorize execution and does not transfer Target truth ownership.

## Navigation Rules

- Use `docs/AI-DOS/README.md` for product-level navigation.
- Use this file for architecture-area navigation.
- Use `docs/AI-DOS/Architecture/RFC/README.md` for RFC-family navigation.
- Use each family README only for that family.
- Discovery and report artifacts remain evidence unless Human Governance explicitly promotes them through the owning governance path.
- Artifact numbering is identity, not automatic authority or execution order.

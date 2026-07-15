# AI-DOS Architecture

## Purpose

`docs/AI/Architecture/` is the AI-DOS product architecture root. It separates normative architecture from historical discovery, reports, standards, and navigation.

## Canonical Structure

```text
docs/AI/Architecture/
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
| `Constitution/` | AI-DOS Governance | Constitutional authority and invariants. |
| `RFC/Boundary/` | Architecture Governance | Product/Target operational boundary RFCs. |
| `RFC/Runtime/` | Runtime Architecture | Runtime architecture RFCs and Runtime-family navigation only. |
| `RFC/EnginePlatform/` | Engine Platform Architecture | A.4 and A.4.x Engine Platform RFCs. |
| `RFC/EngineSpecializations/` | Engine Architecture | A.5.0 template and A.5.x Engine Specialization RFCs. |
| `RFC/Distribution/` | Distribution Architecture | AI-DOS distribution foundation RFCs. |
| `Agents/` | Agent Architecture | Agent architecture documents that consume Runtime and Engine authorities. |
| `Discovery/` | Architecture Evidence | Historical discovery, audit appendices, and non-authoritative evidence. |
| `Reports/` | Architecture Evidence | Reviews, migration records, and architecture reports. |
| `Standards/` | Standards Governance | Standards and standards schemas. |

## Navigation Rules

- Use `docs/AI/README.md` for product-level navigation.
- Use this file for architecture-area navigation.
- Use `docs/AI/Architecture/RFC/README.md` for RFC-family navigation.
- Family README files must not claim repository-wide RFC ownership.
- Discovery and report artifacts are evidence unless a document explicitly states that Human Governance promoted it.

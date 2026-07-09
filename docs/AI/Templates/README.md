# AI Templates

> Forge AI v2 · Operational Core
> Directory README · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-OP-TEMPLATES` |
| Title | AI Templates Library |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Operational Template Library |
| Document Type | Directory README |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `FORGE-AI.V2.OP-TEMPLATES` |
| Scope | Defines the Forge AI template library structure, authority consumption model, category responsibilities, operational rules, and template boundaries. |
| Out of Scope | Runtime implementation, Engine implementation, Governance redesign, ProjectStatus updates, template implementation, certification, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Operational Core; Governance; Runtime Architecture; Engine Platform |
| Consumes | Operational authority, Runtime guidance, Engine guidance, template requests |
| Produces | Reusable output contracts, document structures, authoring consistency |
| Related Specifications | Runtime RFC family; Engine RFC family; Operational Core |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, metadata validation, Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |
| Migration Status | Complete (RC2 authority alignment) |

---

## Executive Summary

This directory contains the canonical reusable templates used by Forge AI.

Templates define reusable output structures only. They standardize metadata, layout, evidence presentation, completion expectations, and review readiness.

Templates never become architecture, governance, runtime, engine, roadmap, or ProjectStatus authority.

---

## Purpose

The Template Library exists to ensure every generated artifact follows a consistent structure while preserving the Forge AI governance hierarchy.

---

## Authority Consumption

Templates consume, but never redefine, the approved authority hierarchy.

```text
Human Governance
        ↓
AGENTS.md
        ↓
Governance
        ↓
ProjectStatus
        ↓
Development Phases
        ↓
Constitution
        ↓
Meta Models
        ↓
Standards
        ↓
Runtime
        ↓
Engine Platform
        ↓
Operational Core
        ↓
Templates
```

---

## Template Map

```text
Templates/
├── Core/
├── Planning/
├── Architecture/
├── Workflow/
├── Validation/
├── Knowledge/
├── Memory/
├── Context/
├── Runtime/
├── Agents/
├── MultiAgent/
├── Swarm/
├── Platform/
├── Integration/
├── Migration/
└── Project/
```

---

## Category Responsibilities

| Category | Responsibility |
|---|---|
| Core | Shared authoring rules, metadata, naming and conventions |
| Planning | Vision, roadmap, phase, stage and milestone templates |
| Architecture | RFC, ADR, specification and governance templates |
| Workflow | Commands, workflows, reviews, approvals and handoffs |
| Validation | Validation, evidence, compliance and certification support |
| Knowledge | Knowledge artifacts and registry templates |
| Memory | Memory and reusable learning templates |
| Context | Context assembly templates |
| Runtime | Runtime lifecycle templates |
| Agents | Single-agent templates |
| MultiAgent | Multi-agent coordination templates |
| Swarm | Swarm coordination templates |
| Platform | Platform adapter templates |
| Integration | Connector and interoperability templates |
| Migration | Migration and compatibility templates |
| Project | Project-level templates |

---

## Operational Rules

Templates define:

- document structure
- mandatory sections
- metadata layout
- evidence expectations
- completion expectations

Templates shall not define:

- governance
- architecture
- runtime behaviour
- engine behaviour
- roadmap
- ProjectStatus
- implementation
- certification
- canonical promotion

---

## Source of Authority

Templates consume the current Operational Core:

- AGENTS.md
- docs/AI/GOVERNANCE.md
- docs/FrameworkGovernance.md
- docs/DevelopmentPhases/ProjectStatus.md
- docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
- docs/AI/AIFramework.md
- docs/AI/AIOrchestrator.md
- docs/AI/AgentSystemPrompt.md
- docs/AI/Architecture/A.1-Constitution.md
- docs/AI/Meta/M.0-Framework-Meta-Model.md
- docs/AI/Meta/M.1-Artifact-Meta-Model.md
- docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md
- docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md
- docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md
- docs/AI/Runtime/A.4-Engine-Architecture-RFC.md
- docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md

---

## Operational Boundary

Templates are reusable output contracts.

They are never:

- Source of Truth
- Governance
- Runtime
- Engine
- Operational Core
- ProjectStatus
- Roadmap

---

## Version History

| Version | Status | Notes |
|---|---|---|
| RC1 | Historical | Initial template library |
| RC2 | Historical | Operational template expansion |
| 2.0.0-draft | Draft | Fully aligned with Forge AI v2 Operational Core and STD-010 |

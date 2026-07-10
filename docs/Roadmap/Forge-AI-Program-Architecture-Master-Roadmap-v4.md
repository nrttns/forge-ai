# Forge AI Program Architecture Master Roadmap v4

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.V2.ROADMAP.V4` |
| Title | Forge AI Program Architecture Master Roadmap v4 |
| Version | 4.1.0-draft |
| Status | Draft |
| Canonical Status | Active Forge AI Target Project planning artifact; not a Framework architecture authority and not canonical for external Target Repositories |
| Classification | Target Project Roadmap |
| Document Type | Program-Level Roadmap |
| Owner | Forge AI Target Project Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Active Target Project Planning |
| Traceability ID | `FORGE-AI.V2.ROADMAP-001` |
| Scope | Program-level development sequence for the Forge AI repository as a self-hosted Target Repository. |
| Out of Scope | Framework redesign, AI-DOS architecture redesign, external Target Repository roadmap authority, ProjectStatus replacement, DevelopmentPhases replacement, phase advancement, repository cleanup execution, Axis Suite implementation, Runtime implementation, Engine implementation, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md` |
| Dependencies | A.1 Constitution, A.2 Operational Boundary, Governance Atlas, Framework Governance, Target Repository Resolution, System Layer baseline, DevelopmentPhases, ProjectStatus, repository evidence, and Human Governance task instruction. |
| Consumes | Framework authority, Target Repository operating model, System Layer resolution rules, Forge AI self-hosting path mappings, completed architecture and normalization evidence, DevelopmentPhases sequencing, and ProjectStatus live operational state. |
| Produces | Active Forge AI repository program roadmap, project sequencing context, self-hosting roadmap alignment, dependency ordering, and future milestone framing. |
| Related Specifications | `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md`; `docs/AI/Architecture/Reports/Target-Project-Path-Resolution.md`; `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Supersedes | Active execution use of `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md` |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, ProjectStatus alignment validation, DevelopmentPhases alignment validation, Target Repository boundary validation, stale path validation, and explicit Human Governance approval. |
| Certification Status | Not certified |

---

## 1. Executive Summary

This roadmap is the active program-level roadmap for the Forge AI repository as a self-hosted Target Repository. It governs Forge AI repository development only.

Forge AI / AI-DOS remains the general Framework provider for Framework truth, governance, standards, Runtime, Engines, System Layer, Operational Core, commands, workflows, and templates. The Forge AI repository also operates as its own Target Repository for self-hosting work; in that Target Repository role, it owns its root `AGENTS.md`, ProjectStatus, DevelopmentPhases, program roadmap, repository-specific sequencing, milestones, implementation state, and normalization state.

This document does not define universal AI-DOS Framework roadmap paths for external Target Repositories. External Target Repositories declare their own project truth through their own root `AGENTS.md` and Target Repository resources.

## 2. Operating Model Alignment

This roadmap consumes the AI-DOS / Target Repository operating model defined by A.2 and the System Layer target resolution rules. The hierarchy is:

1. Framework authority governs how work is conducted.
2. Forge AI Target Project planning governs Forge AI repository sequencing.
3. Forge AI ProjectStatus records current Forge AI repository operational state.

This roadmap does not redefine the Constitution, Governance Atlas, Framework Governance, Standards, Runtime, Engines, System Layer, Operational Core, commands, workflows, or templates.

## 3. Forge AI Self-Hosting Path Mappings

The following mappings are valid only for Forge AI self-hosting:

| Symbolic Path | Forge AI Self-Hosting Resolution |
|:---|:---|
| `<TARGET_REPOSITORY_ROOT>` | Forge AI repository root |
| `<TARGET_AGENTS_PATH>` | `AGENTS.md` |
| `<PROJECT_STATUS_PATH>` | `docs/DevelopmentPhases/ProjectStatus.md` |
| `<DEVELOPMENT_PHASES_PATH>` | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| `<PROJECT_ROADMAP_PATH>` | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md` |

These mappings are not universal paths for Axis Suite or any external Target Repository.

## 4. Roadmap Interpretation Rules

### 4.1 Master Roadmap

This document answers: where is the Forge AI repository going as a self-hosted Target Repository?

### 4.2 DevelopmentPhases

`docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` answers: what is the planned phase and stage sequence for the Forge AI repository?

### 4.3 ProjectStatus

`docs/DevelopmentPhases/ProjectStatus.md` answers: what is active right now in the Forge AI repository?

ProjectStatus is live operational state only. It does not promote architecture, authorize implementation, replace this roadmap, or redefine Framework authority.

## 5. Current Evidence-Supported Program Sequence

| Order | Program / Milestone | State |
|:---:|:---|:---|
| 1 | Core architecture and System Layer completed | Completed per repository evidence and ProjectStatus historical records |
| 2 | Template Library normalization completed | Completed per repository evidence |
| 3 | Runtime RFC normalization completed | Completed per repository evidence |
| 4 | AI-DOS / Target Repository boundary established | Completed as draft architecture; not canonical promotion |
| 5 | Target Repository Resolution added and System Layer re-frozen | Completed at amended System Layer baseline |
| 6 | Non-frozen target-path normalization completed | Completed for TARGET-PATH-002 scope |
| 7 | Self-hosting project-governance realignment | Active |
| 8 | Remaining repository rationalization and physical cleanup | Future / next queue |
| 9 | Repository freeze | Future; not complete |
| 10 | Axis Suite Target Repository preparation | Future |
| 11 | Axis Suite pilot | Future; not started |
| 12 | Evidence-driven Framework improvements after pilot | Future; depends on pilot evidence |

## 6. Current Active Work

The current active roadmap work is self-hosting project-governance realignment: aligning this roadmap, DevelopmentPhases, and ProjectStatus with the approved AI-DOS / Target Repository operating model while preserving the distinction between Framework authority and Forge AI Target Project planning.

This active work is followed by remaining repository rationalization and physical cleanup. This document does not begin that cleanup task.

## 7. Future Milestones

Future milestones remain blocked until their prerequisites are satisfied and Human Governance authorizes any required advancement:

1. Remaining repository rationalization and physical cleanup.
2. Repository freeze.
3. Axis Suite Target Repository preparation.
4. Axis Suite pilot.
5. Evidence-driven Framework improvements after pilot.

The Axis Suite milestones are future Target Repository preparation and pilot activities. This roadmap does not invent Axis Suite paths, start Axis Suite implementation, or mark the pilot started.

## 8. Safety Rules

- Do not treat this roadmap as Framework architecture authority.
- Do not apply Forge AI physical paths to external Target Repositories.
- Do not advance ProjectStatus without explicit authorization.
- Do not mark Repository Freeze complete until supported by ProjectStatus and Human Governance.
- Do not mark Axis Suite preparation or pilot started without explicit activation.
- Do not use this document to redefine A.2, the System Layer, Runtime, Engines, Operational Core, commands, workflows, templates, standards, or governance authority.

## 9. Completion Criteria for This Realignment Stage

This self-hosting project-governance realignment stage is complete when:

- the active roadmap is explicitly Forge AI Target Repository-specific;
- the historical v3 roadmap is clearly superseded and non-operational;
- DevelopmentPhases is aligned to Forge AI self-hosting project sequencing;
- ProjectStatus records only live operational state;
- stale active references to the former roadmap locations are corrected;
- historical path evidence is preserved where appropriate; and
- validation confirms no unauthorized architecture redesign, phase advancement, file movement, or external Target Repository path inheritance.

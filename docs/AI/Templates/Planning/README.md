# Planning Templates

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-README` |
| Title | Planning Templates |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Template Family Index |
| Document Type | Directory README |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.PLANNING.README` |
| Scope | Index and usage guide for theAI-DOS Planning template family. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Planning template family index and usage guide |
| Related Specifications | Vision Template; Roadmap Template; Phase Template; Stage Template; Historical Capability Template;AI-DOS template library |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, README alignment validation, STD-010 validation, TPL-000 validation, authority-reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

The Planning template family defines reusable output structures for planning artifacts inAI-DOS and AI Framework adopters.

Planning artifacts define why work exists, where it belongs, what it may change, what it must not change, how it is validated, and when it can be reviewed for advancement.

Planning templates do not implement planning logic, execute roadmap work, advance phases, transition stages, certify completion, create governance authority, update registries, alter runtime behavior, or update ProjectStatus.

## 2. Authority Boundary

Planning templates consume existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and applicable roadmap authorities without redefining them.

Use these templates as document structures only. Produced documents must still receive the required review and approval from the appropriate authority before any roadmap, phase, stage, certification, registry, runtime, or ProjectStatus action occurs.

## 3. Planning Hierarchy

```text
Vision
    ↓
Roadmap
    ↓
Phase
    ↓
Stage
    ↓
Historical Capability
    ↓
Generated Task
```

Lower levels refine higher levels. Lower levels must not redefine higher authority, duplicate roadmap ownership, change governance ownership, certify themselves, or update ProjectStatus.

## 4. Template Map

| Template | Purpose | Produced Document Type | RFC Template Standard Applies |
|:---|:---|:---|:---|
| `VisionTemplate.md` | Defines long-range direction, mission, principles, and strategic outcomes. | Vision Specification | No |
| `RoadmapTemplate.md` | Converts vision into sequenced phases, milestones, dependencies, and validation strategy. | Roadmap Specification | No |
| `PhaseTemplate.md` | Defines a major architectural capability, stage roadmap, boundaries, dependencies, and validation expectations. | Phase Specification | No |
| `StageTemplate.md` | Defines a measurable milestone within a phase. | Stage Specification | No |
| `HistoricalCapabilityTemplate.md` | Defines immutable implementation history under a stage. | Historical Capability Specification | No |

No RFC-style Planning template exists in this family; the RFC template standard is therefore not applied.

## 5. Usage Guide

1. Select the template matching the planning level.
2. Resolve all placeholders in the produced document before treating the document as complete.
3. Preserve the authority chain declared in the produced document metadata.
4. Link to ProjectStatus or DevelopmentPhases when live state is needed; do not duplicate or update live state from a template.
5. Validate scope, ownership, dependencies, roadmap order, and frozen-area boundaries before review.
6. Route certification, roadmap advancement, phase advancement, stage transition, and ProjectStatus changes to the applicable Human Governance process.

## 6. Naming Rule

Use `HistoricalCapabilityTemplate.md` instead of `SprintTemplate.md`.

Sprint is a delivery cadence term.AI-DOS uses Historical Capability as the immutable implementation history unit.

## 7. Planning Invariants

- Vision defines direction.
- Roadmap sequences direction.
- Phase owns architectural capability planning within higher authority.
- Stage owns milestone planning within a phase.
- Historical Capability records implementation history under a stage.
- Task is generated execution scope.
- Lower levels refine higher levels.
- Lower levels must not redefine higher authority.
- Historical identifiers must not be renumbered after certification.
- Templates must not update ProjectStatus.

## 8. Validation Requirements

Before this family is treated as review-ready, validate:

- scoped-only file changes;
- STD-010 metadata coverage;
- TPL-000 placeholder alignment;
- RFC template standard absence because no RFC-style Planning template exists;
- placeholder manifest correctness;
- stale authority references;
- unresolved placeholder handling;
- empty table cells;
- README alignment with family contents;
- markdown diff integrity;
- no duplicate planning authority, governance ownership, roadmap ownership, certification authority, registry authority, runtime authority, or ProjectStatus authority.

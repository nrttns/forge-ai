# Planning Templates

This README is the navigation index for `docs/AI/Templates/Planning/`.

The canonical Template Library contract is:

```text
docs/AI/Templates/TemplateLibrary.md
```

This README does not define Target planning authority, planning methodology, lifecycle order, roadmap ownership, operational state, task selection, execution authorization, review, certification, approval, promotion, or Target-state mutation.

## Start Here

Read the library contract and baseline standard before using this family:

```text
../TemplateLibrary.md
    ↓
../Standards/TPL-000-Template-Standard.md
    ↓
Planning/README.md
    ↓
selected Planning template
```

## Family Purpose

The Planning family provides reusable document structures for planning artifacts supplied or owned by a Target, product program, project, or other bounded authority domain.

A Planning template is an authoring structure only. It does not create planning authority, establish a mandatory planning hierarchy, select work, advance lifecycle state, authorize execution, approve an artifact, certify completion, or mutate Target-owned truth.

## Template Index

| Template | Intended output |
|:---|:---|
| `VisionTemplate.md` | Long-range direction, mission, principles, outcomes, and boundaries. |
| `RoadmapTemplate.md` | A bounded sequencing and milestone structure owned by the produced document's declared authority. |
| `PhaseTemplate.md` | A major planning boundary when the consuming Target uses a phase model. |
| `StageTemplate.md` | A bounded milestone when the consuming Target uses a stage model. |
| `HistoricalCapabilityTemplate.md` | Historical capability or implementation record when explicitly required by the consuming authority. |

These templates are peers. Their filenames do not establish a mandatory `Vision → Roadmap → Phase → Stage → Historical Capability` authority chain.

## Selection Rules

1. Use a Planning template only when the invocation or applicable Target authority explicitly requires a planning artifact.
2. Select the narrowest template matching the intended output.
3. Do not infer a Roadmap, DevelopmentPhases, ProjectStatus, phase, stage, capability, sprint, or generated-task model when the consuming Target does not provide one.
4. Treat Target-owned planning and state artifacts as explicit inputs, not AI-DOS defaults.
5. Resolve all placeholders before treating a produced artifact as complete.
6. Validate the produced artifact against TPL-000, STD-010 when applicable, and the authority supplied for that artifact.

## Authority Boundary

The Planning family owns reusable document structure only.

It does not own:

- Target vision, roadmap, planning, state, lifecycle, source, evidence, or protected areas;
- AI-DOS architecture, Runtime, Engine, System Layer, Operational Core, Commands, or Workflows;
- task discovery, work selection, workflow routing, execution contracts, provider dispatch, or mutation;
- review, certification, approval, promotion, canonicalization, or release authority.

A produced artifact gains authority only through its declared owner, provenance, lifecycle, applicable governance, and explicit approval or promotion route.

## Target Independence

No Forge AI path, ProjectStatus path, DevelopmentPhases path, Roadmap path, phase model, stage model, capability model, or self-hosting convention is required by this family.

Target-owned inputs may be referenced only when explicitly supplied for the bounded produced artifact. Forge AI examples must remain examples and must not become reusable AI-DOS defaults.

## Safe Stop

Stop template use when any required purpose, owner, authority, provenance, lifecycle, Target planning source, protected boundary, or validation requirement is missing or ambiguous.

Do not invent planning structure to make a template applicable.

## Related Navigation

- Template Library navigation: `docs/AI/Templates/README.md`
- Template Library contract: `docs/AI/Templates/TemplateLibrary.md`
- Baseline template standard: `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- Product navigation: `docs/AI/README.md`
- Governance navigation: `docs/AI/GOVERNANCE.md`
- Governance decision policy: `docs/AI/FrameworkGovernance.md`

## Current Alignment Status

This README is aligned as the Planning family navigation and boundary index. The five template bodies remain subject to a separate bounded component-normalization review before the family can be declared fully aligned.
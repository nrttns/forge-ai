# Template Adoption Checklist

## Purpose

This checklist verifies that a new project has adopted AI Framework RC2 through a Project Template without redefining framework authority or importing another project's implementation details.

---

## Adoption Checklist

| Check | Required Result | Status |
| --- | --- | --- |
| Source of Truth configured | `docs/ProjectStatus.md` exists and is identified as the only live operational status document. | Pending |
| `AGENTS.md` present | Project bootstrap authority exists and defines authority order, boot sequence, source-of-truth rules, quality gates, and human override policy. | Pending |
| `.cursorrules` present | Tool-facing operating rules exist when Cursor-compatible tooling is used. | Pending |
| `ProjectStatus` initialized | Initial phase, stage, status, immediate next work, quality gates, and update policy are documented. | Pending |
| AI docs present | `docs/AI/` contains the required framework entrypoints, specification documents, system layer, validation, testing, commands, workflows, templates, and checklists required by the project. | Pending |
| Development phases initialized | `docs/DevelopmentPhases/` exists and contains the first phase/stage documents or a documented deferral. | Pending |
| Validation path defined | The project defines validation commands, evidence expectations, review requirements, and certification boundaries. | Pending |
| Reference directories marked read-only | `_reference/` policy prohibits runtime dependencies, production imports, and unreviewed copying from reference material. | Pending |
| No project-specific architecture hidden in AI Framework docs | Project-specific architecture is stored in project governance, phase/stage documents, `docs/Architecture/`, or source documentation rather than in AI Framework core files. | Pending |

---

## Additional Recommended Checks

- Project `README.md` links to governance and AI Framework entrypoints.
- `docs/FrameworkGovernance.md` defines stable project governance below `AGENTS.md`.
- `_wip/` is non-authoritative unless content is promoted into approved documentation.
- Historical identifiers are not created until the project has a stable planning model.
- Framework-specific template additions do not override generic AI Framework rules.
- Framework host APIs are treated as adapters unless project governance explicitly defines otherwise.

---

## Acceptance Rule

A project should not begin AI-directed implementation work until all required checklist items are complete or explicitly deferred by human governance with documented rationale.

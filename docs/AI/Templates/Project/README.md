# AI Framework Project Templates

## Status

Status: AI Framework RC2 Project Template Layer

Document Type: Template Layer Index

Authority: `docs/AI/AIFramework.md`

Parent Directory: `docs/AI/Templates/`

---

## Purpose

The Project Template layer provides reusable starting structures for projects adopting the AI Framework RC2 operating model.

Project Templates help future projects bootstrap the same documented planning, execution, validation, testing, certification, and source-of-truth discipline used by Forge AI without copying Forge AI-specific implementation details.

A Project Template is an adoption artifact. It gives a new repository the minimum document structure, governance placeholders, project-state model, and framework layout needed to consume the AI Framework safely.

---

## Relationship to the AI Framework

Project Templates consume the AI Framework. They do not define it.

The AI Framework authority remains in:

```text
docs/AI/AIFramework.md
docs/AI/Specification/Constitution.md
docs/AI/Specification/FrameworkSpecification.md
docs/AI/Specification/RuntimeModel.md
docs/AI/Specification/GovernanceModel.md
docs/AI/Specification/ReferenceArchitecture.md
docs/AI/Specification/Terminology.md
```

Project Templates may reference these documents, copy approved framework scaffolding into a new project, and provide placeholders for project-specific governance. They must not redefine framework principles, runtime model, governance model, certification rules, or terminology.

---

## Relationship to AI System

The AI System layer remains the tool-facing operating layer:

```text
docs/AI/System/
```

Project Templates provide the project files and documentation locations that the AI System expects during boot, authority resolution, source-of-truth lookup, context assembly, decision routing, execution sequencing, validation, review, certification, and project-state update workflows.

Templates must not replace AI System documents or introduce alternate boot sequences.

---

## Relationship to Validation, Testing, and Certification

Project Templates must provide paths and placeholders that allow a project to adopt:

```text
docs/AI/Validation/
docs/AI/Testing/
docs/AI/Certification/
```

The Validation layer defines evidence requirements and validation lifecycle.

The Testing layer validates framework and agent behaviour through scenarios.

The Certification layer stores readiness and certification evidence.

Project Templates may initialize these directories and explain how a project uses them. They must not lower validation requirements, bypass scenario testing, or certify a project automatically.

---

## Template List

| Template | Document | Purpose |
| --- | --- | --- |
| Project Template Architecture | `ProjectTemplateArchitecture.md` | Defines the adoption-layer architecture and template boundaries. |
| Generic Project Template | `GenericProjectTemplate.md` | Defines a framework-independent project structure for AI Framework adoption. |
| WordPress Project Template | `WordPressProjectTemplate.md` | Defines a WordPress-oriented extension of the generic template without Axis Suite-specific assumptions. |
| Template Bootstrap Workflow | `TemplateBootstrapWorkflow.md` | Defines the lifecycle for creating a new AI Framework project from a template. |
| Template Adoption Checklist | `TemplateAdoptionChecklist.md` | Provides acceptance checks for adopting the AI Framework in a new project. |

---

## Adoption Rule

Project Templates bootstrap projects; they do not define framework authority.

If a Project Template conflicts with the AI Framework Constitution, the AI Framework Constitution wins. If a Project Template conflicts with a project-level `AGENTS.md`, the conflict must be resolved explicitly before implementation work continues.

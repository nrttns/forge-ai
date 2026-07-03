# Template Bootstrap Workflow

## Purpose

This workflow defines how a new project adopts AI Framework RC2 from a Project Template.

It creates a governed project structure without generating project folders inside Forge AI and without splitting the AI Framework into a separate repository.

---

## Required Human Inputs

Before bootstrapping a project, collect these inputs from the project owner:

| Input | Purpose |
| --- | --- |
| Project name | Human-readable project identity. |
| Framework | Host framework or technology family, such as Generic, WordPress, Laravel, Node.js, or React. |
| Repository name | Repository slug or package identity. |
| Primary architecture model | The main architectural pattern, dependency direction, or layering model for the project. |
| Initial phase | The first planned project phase. |
| Initial status | The starting operational state, such as Planning, Active, Prototype, or Maintenance. |

If these inputs are unknown, stop before creating authoritative project documentation.

---

## Project Creation Lifecycle

```text
Select template
    ↓
Copy template
    ↓
Set project identity
    ↓
Initialize ProjectStatus
    ↓
Initialize AGENTS
    ↓
Initialize AI Framework references
    ↓
Define first Phase/Stage
    ↓
Run validation
```

---

## Step 1: Select Template

Choose the smallest template that fits the project:

- use `GenericProjectTemplate.md` for framework-independent or unknown-framework projects;
- use a framework-specific template only when the host framework is known;
- use `WordPressProjectTemplate.md` for WordPress-hosted plugin, theme, or application projects.

Do not select a framework-specific template merely because an existing reference implementation uses that framework.

---

## Step 2: Copy Template

Copy the selected template structure into the new project repository.

The copied structure should include governance documents, AI Framework references, planning directories, source directories, tests, reference directories, and work-in-progress directories appropriate to the selected template.

Do not create generated project folders inside Forge AI during template definition work.

---

## Step 3: Set Project Identity

Replace template placeholders with project-specific identity:

- project name;
- repository name;
- framework;
- architecture model;
- ownership model;
- initial project purpose;
- human maintainers or governance owners, if known.

Project identity must be explicit before agents use the repository as an authority source.

---

## Step 4: Initialize ProjectStatus

Create `docs/ProjectStatus.md` as the live operational Source of Truth.

Initialize:

- current project status;
- active phase;
- active stage;
- current task or capability model, if applicable;
- immediate next work;
- quality gates;
- update policy.

Do not define architecture only in `docs/ProjectStatus.md`. Architecture belongs in `AGENTS.md`, `docs/FrameworkGovernance.md`, phase and stage documents, and `docs/Architecture/`.

---

## Step 5: Initialize AGENTS

Create `AGENTS.md` as the bootstrap authority for the new project.

It must define the project-specific authority order, boot sequence, source-of-truth rules, reference policy, quality gates, and human override policy.

It may reference the AI Framework but must not contradict the AI Framework Constitution.

---

## Step 6: Initialize AI Framework References

Populate `docs/AI/` with the approved AI Framework documents and required project-level indexes.

At minimum, the project should expose:

- `docs/AI/README.md`;
- `docs/AI/AIFramework.md`;
- `docs/AI/Specification/Constitution.md`;
- `docs/AI/System/README.md`;
- `docs/AI/Validation/README.md`;
- `docs/AI/Testing/README.md`;
- `docs/AI/Certification/` when certification evidence exists;
- relevant commands, workflows, templates, and checklists.

Project-specific AI documents must be clearly marked as project-specific and must not redefine framework core authority.

---

## Step 7: Define First Phase/Stage

Create the first planning documents under `docs/DevelopmentPhases/`.

Define:

- phase name;
- phase purpose;
- stage name;
- stage purpose;
- scope boundaries;
- validation requirements;
- completion criteria;
- relationship to `docs/ProjectStatus.md`.

Historical identifiers, once created, must not be renumbered.

---

## Step 8: Run Validation

Validate the bootstrapped project before implementation begins.

Required checks:

- referenced paths exist;
- `AGENTS.md` is present;
- `.cursorrules` is present when required by tooling;
- `docs/ProjectStatus.md` is initialized;
- AI Framework documents are discoverable;
- phase and stage documents exist or the project explicitly documents why they are deferred;
- validation path is defined;
- reference directories are marked read-only;
- no project-specific architecture is hidden in AI Framework core documents.

Record validation evidence in the project's approved validation or certification location.

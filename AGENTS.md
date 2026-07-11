<!--
Identifier: FORGE-BOOTLOADER-AGENTS
Title: AGENTS.md — Forge AI / AI-DOS Entry Point
Version: 4.0.0-draft
Status: Draft for Human Governance Approval
Owner: Human Governance
Updated: 2026-07-10
-->

# AGENTS.md — Forge AI / AI-DOS Entry Point

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-BOOTLOADER-AGENTS` |
| Title | AGENTS.md — Forge AI / AI-DOS Entry Point |
| Version | `4.0.0-draft` |
| Status | Draft |
| Canonical Status | Repository entry authority; pending Human Governance approval |
| Classification | Target Repository Entry Contract and AI-DOS Provider Entry Point |
| Document Type | Repository Bootloader |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Entry-Point Realignment |
| Traceability ID | `FORGE-AI.V2.AGENTS-ENTRY-001` |
| Scope | Declares the AI-DOS Framework Provider entry contract and, for Forge AI self-hosting only, Target Repository declaration inputs consumed by TargetRepositoryResolution. |
| Out of Scope | AI-DOS internal architecture definition, ProjectStatus content, DevelopmentPhases content, roadmap content, implementation design, certification, and automatic state updates. |
| Normative Authority | Human Governance |
| Normative References | AI-DOS Framework Provider entry point; Target Repository resources declared in this document |
| Dependencies | Human task instruction; accessible Target Repository; accessible AI-DOS Framework Provider |
| Consumes | Human instruction, repository identity, Framework Provider identity, project resource declarations |
| Produces | Provider entry routing and Forge AI self-hosting declaration inputs; TargetRepositoryResolution produces the resolution result and BootSequence loads it. |
| Related Specifications | AI-DOS internal authorities resolved behind the Framework Provider entry point |
| Supersedes | Prior Forge AI repository bootloader drafts |
| Superseded By | None |
| Promotion Requirements | Human Governance review; provider-entry validation; Target Repository declaration validation; self-hosting validation |
| Certification Status | Not certified |

---

## 1. Purpose

This file is the **single entry point** for:

1. Forge AI repository self-hosting.
2. External Target Repositories that consume Forge AI / AI-DOS.
3. AI agents beginning work against either operating mode.

A Target Project must never depend on AI-DOS internal document paths.

A Target Project depends only on:

```text
AI-DOS Framework Provider
    +
AI-DOS Framework Entry Point
```

AI-DOS resolves its own internal authorities behind that entry point.

---

## Section A — AI-DOS Framework Provider Entry Contract

The AI-DOS Provider Entry is:

```text
<AI_DOS_ROOT>/AGENTS.md
```

Purpose:

- enter AI-DOS;
- start AI-DOS boot;
- route to the System Layer;
- start TargetRepositoryResolution.

AI-DOS Provider AGENTS.md starts the Framework boot.
It does not resolve Target Project resources itself.
It delegates Target Repository resolution to TargetRepositoryResolution.

| Provider Declaration | Value |
|:---|:---|
| Framework Provider identity | Forge AI / AI-DOS |
| Framework Provider root | Repository root containing this `AGENTS.md` in self-hosting mode, or `<AI_DOS_ROOT>` for external targets |
| Framework Provider entry point | `<AI_DOS_ROOT>/AGENTS.md` |
| AI-DOS internal navigation entry | `docs/AI/README.md` |
| System Layer entry | `docs/AI/System/README.md` |
| Target Repository resolution authority | `docs/AI/System/TargetRepositoryResolution.md` |
| Context loading authority | `docs/AI/System/BootSequence.md` |

Provider boot routes to TargetRepositoryResolution for active Target Repository identification, Target AGENTS discovery, declaration resolution, validation, blocker reporting, and BootSequence handoff. Provider boot does not create a second resolution procedure.

---

## Section B — Forge AI Target Repository Declarations

These declarations apply only to Forge AI self-hosting.
They are inputs to TargetRepositoryResolution.
They are not resolution results.
They are not universal external-project defaults.

The Target Repository Entry is:

```text
<TARGET_REPOSITORY_ROOT>/AGENTS.md
```

Purpose:

- declare Target Project resources;
- declare project authority order;
- declare validation and protection context;
- declare the AI-DOS Provider reference.

In Forge AI self-hosting, the AI-DOS Provider Entry and Target Repository Entry are two logical roles in this same physical file. This is not a circular dependency: the Provider role starts resolution, and TargetRepositoryResolution reads the Target role as declaration input.

---

## 2. Operating Modes

### 2.1 Self-Hosting Mode

Use when the active Target Repository is the Forge AI repository itself.

```text
AI-DOS Provider
    = Forge AI repository

Target Repository
    = Forge AI repository

Provider Entry Point
    = AGENTS.md

Target Entry Point
    = AGENTS.md
```

This is one operating model with one shared entry point, not a parallel system.

### 2.2 External Target Mode

Use when Forge AI / AI-DOS operates on another repository.

```text
AI-DOS Provider
    = Forge AI repository

Target Repository
    = external repository

Provider Entry Point
    = <AI_DOS_ROOT>/AGENTS.md

Target Entry Point
    = <TARGET_REPOSITORY_ROOT>/AGENTS.md
```

The external Target Repository declares only its own resources and the AI-DOS Provider entry point. It must not declare or reference AI-DOS internal files.

---

## 3. Forge AI Self-Hosting Declarations

These declarations apply only when this repository is the active Target Repository. They are Forge AI Target Repository declaration inputs for TargetRepositoryResolution, not resolution results and not external-project defaults.

| Declaration | Resolution |
|:---|:---|
| Target Repository Identity | Forge AI repository |
| Target Repository Root | Repository root containing this `AGENTS.md` |
| Target Entry Point | `AGENTS.md` |
| Framework Provider | Forge AI / AI-DOS |
| Framework Provider Root | Same repository root in self-hosting mode |
| Framework Provider Entry Point | `AGENTS.md` |
| AI-DOS Internal Navigation Entry | `docs/AI/README.md` |
| ProjectStatus Resource | `docs/DevelopmentPhases/ProjectStatus.md` |
| DevelopmentPhases Resource | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Project Roadmap Resource | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md` |
| Historical Roadmap Resource | `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md` |
| Project Architecture Resources | Declared task-by-task or resolved from repository architecture navigation |
| Source Roots | Repository roots relevant to the active task |
| Validation Commands | Declared by the active task or repository-local validation guidance |
| Protected Areas | This file plus the active ProjectStatus protected-area state and any explicit Human Governance restrictions |

These physical paths are Forge AI self-hosting declarations. They are not universal AI-DOS requirements.

---

## 4. Entry-Point Boundary

### 4.1 Target Repository Responsibilities

The Target Repository entry point owns:

- Target Repository identity.
- AI-DOS Framework Provider declaration.
- AI-DOS Framework Provider entry point.
- ProjectStatus resource declaration.
- DevelopmentPhases resource declaration.
- Roadmap resource declaration.
- Project architecture resource declarations.
- Source-root declarations.
- Validation-command declarations.
- Protected-area declarations.
- Target-project authority routing.

### 4.2 AI-DOS Responsibilities

The AI-DOS Framework Provider entry point owns:

- AI-DOS internal authority discovery.
- Governance routing.
- System Layer routing.
- Operational Core routing.
- Runtime and Engine routing.
- Commands, Workflows, and Templates routing.
- AI-DOS validation and review model routing.

### 4.3 Prohibited Coupling

Target Project documents must not directly depend on:

- AI-DOS Governance file paths.
- AI-DOS Framework Governance file paths.
- AI-DOS architecture paths.
- AI-DOS System Layer paths.
- AI-DOS Runtime or Engine paths.
- AI-DOS command, workflow, or template paths.

Only the AI-DOS Provider entry point may expose and resolve those internal resources.

---

## 5. Mandatory Boot Sequence

```text
1. Receive Human Task.
2. Enter AI-DOS through the AI-DOS Provider AGENTS.md.
3. Route to TargetRepositoryResolution.
4. TargetRepositoryResolution identifies the active Target Repository, establishes `<TARGET_REPOSITORY_ROOT>`, resolves `<TARGET_AGENTS_PATH>`, reads Target AGENTS declarations, resolves repository-relative project resources, validates declarations, reports blockers, and produces the Resolution Result.
5. TargetRepositoryResolution hands the Resolution Result to BootSequence.
6. BootSequence consumes the Resolution Result and loads the resolved Framework + Target Project context.
7. Operational Core consumes the loaded context.
8. AuthorityModel, SourceOfTruth, ContextAssembly, DecisionModel, and ExecutionSequence proceed from loaded context.
9. Classify the task.
10. Assemble the minimum necessary context.
11. Execute only authorized scope.
12. Validate.
13. Review when required.
14. Produce a completion report.
```

Do not skip TargetRepositoryResolution or duplicate its procedure in this file.

Do not substitute Forge AI self-hosting paths for an external Target Repository. Do not treat declaration inputs in this file as resolution results.

---

## 6. Boot Failure Rules

Stop and report a blocker if:

- the Target Repository cannot be identified;
- Target `AGENTS.md` is missing;
- AI-DOS Framework Provider entry point is missing or inaccessible;
- required Target Repository declarations are missing;
- declared project resources cannot be resolved;
- multiple Target Repositories are possible without explicit selection;
- a Target Project directly depends on AI-DOS internal paths;
- protected-area or validation declarations required by the task are unavailable;
- authority conflicts cannot be resolved safely.

Never invent missing paths.

Never use self-hosting paths as external-project fallbacks.

---

## 7. ProjectStatus Boundary

ProjectStatus owns live operational state only.

It does not own:

- project-resource declarations;
- AI-DOS entry-point declarations;
- path resolution;
- architecture;
- roadmap structure;
- certification;
- promotion;
- implementation authorization.

ProjectStatus may be updated only through explicit Human Governance authorization or a dedicated authorized state-update task.

---

## 8. DevelopmentPhases and Roadmap Boundary

DevelopmentPhases owns phase and stage sequencing.

The active roadmap owns long-term Target Project direction.

Neither document:

- declares AI-DOS internal paths;
- owns the AI-DOS entry point;
- replaces ProjectStatus;
- promotes architecture;
- activates implementation by implication.

---

## 9. Task Classification

| Task Type | Required Target Context | AI-DOS Internal Routing |
|:---|:---|:---|
| Governance | Project state, roadmap, affected project authority | Provider resolves governance policy |
| Documentation | Project state, affected artifact, project constraints | Provider resolves metadata, terminology, templates |
| Audit / Review | Project state, audit scope, evidence | Provider resolves audit/review rules |
| Implementation | Project state, source roots, architecture, validation commands, protected areas | Provider resolves execution and validation rules |
| Roadmap / Status | Project roadmap, DevelopmentPhases, ProjectStatus | Provider resolves governance boundaries |
| Runtime / Engine | Project authorization and affected scope | Provider resolves Runtime / Engine authorities |

Read only the minimum context required.

---

## 10. File Safety

- Modify only task-authorized files.
- Do not move, rename, archive, delete, or merge files unless explicitly authorized.
- Update inbound references in the same change as an authorized move.
- Do not modify protected areas without explicit authorization.
- Do not update ProjectStatus automatically.
- Do not begin future phases by implication.
- Do not let historical evidence become active authority.

---

## 11. Validation

Every task must validate:

- Target Repository resolved by TargetRepositoryResolution.
- AI-DOS Provider entry point resolved.
- No Target Project document directly depends on AI-DOS internal paths.
- Active phase and protected areas preserved.
- Only authorized files changed.
- Task-specific validation completed.
- ProjectStatus unchanged unless authorized.
- Completion evidence produced.

---

## 12. Completion Report

Every task ends with:

- Summary.
- Files changed.
- Target Repository resolution confirmation.
- AI-DOS entry-point confirmation.
- Authority and scope validation.
- Project state and roadmap validation.
- File-safety validation.
- Task-specific validation results.
- Risks or blockers.
- Recommended next step.

---

## 13. Core Invariants

1. Human Governance is final.
2. Every task has one active Target Repository.
3. Every Target Repository has one root `AGENTS.md`.
4. Every Target Repository declares one AI-DOS Framework Provider entry point.
5. AI-DOS internal structure is hidden behind that entry point.
6. Target Project documents do not reference AI-DOS internal paths.
7. Root `AGENTS.md` owns project-resource declarations.
8. ProjectStatus owns live state only.
9. DevelopmentPhases owns sequence only.
10. Roadmap owns direction only.
11. AI agents do not become a source of truth.
12. Self-hosting and external operation use the same model.

---

## 14. Version History

| Version | Date | Description |
|:---|:---|:---|
| `3.0.0-beta` | 2026-07-10 | Prior Forge AI repository bootloader with direct internal authority routing. |
| `4.0.0-draft` | 2026-07-10 | Introduced the single AI-DOS Provider entry point and Target Repository declaration contract. |

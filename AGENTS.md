# AGENTS.md — Forge AI / AI-DOS Entry Contract

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-BOOTLOADER-AGENTS` |
| Title | AGENTS.md — Forge AI / AI-DOS Entry Contract |
| Version | `4.1.0-draft` |
| Status | Draft |
| Canonical Status | Repository entry authority pending Human Governance approval |
| Classification | AI-DOS Provider Entry and Target Repository Declaration Contract |
| Document Type | Repository Bootloader |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Entry-Point Realignment |
| Traceability ID | `FORGE-AI.V2.AGENTS-ENTRY-002` |
| Scope | Declares the AI-DOS Provider entry point and Forge AI self-hosting project resources, then routes into the System Layer. |
| Out of Scope | Target Repository identification, path resolution, declaration validation, BootSequence execution, authority resolution, source-of-truth selection, context assembly, decision selection, execution, certification, and ProjectStatus updates. |
| Normative Authority | Human Governance |
| Normative References | `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/BootSequence.md` |
| Dependencies | Human task instruction; existing System Layer |
| Consumes | Human instruction and repository identity |
| Produces | Provider declaration, Target Project declarations, and System Layer handoff |
| Related Specifications | AI-DOS internal authorities resolved by the System Layer |
| Supersedes | Prior Forge AI repository bootloader drafts |
| Superseded By | None |
| Promotion Requirements | Human Governance review; System Layer ownership validation; self-hosting declaration validation |
| Certification Status | Not certified |

## 1. Purpose

This file is the single repository entry contract for Forge AI self-hosting.

It has only two responsibilities:

1. Declare the AI-DOS Framework Provider entry point.
2. Declare Forge AI Target Repository resources.

It does **not** resolve those declarations.

```text
AGENTS.md
    declares and routes

TargetRepositoryResolution
    resolves and validates

BootSequence
    loads the resolved context

Operational Core
    consumes the loaded context
```

## 2. Forge AI Self-Hosting Declarations

| Declaration | Resolution |
|:---|:---|
| Framework Provider | Forge AI / AI-DOS |
| Framework Provider Root | Current repository root |
| Framework Provider Entry Point | `AGENTS.md` |
| Target Repository Identity | Forge AI repository |
| Target Repository Root | Current repository root |
| Target Repository Entry Point | `AGENTS.md` |
| ProjectStatus | `docs/DevelopmentPhases/ProjectStatus.md` |
| DevelopmentPhases | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Active Roadmap | `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md` |
| Historical Roadmap | `docs/Roadmap/Forge-AI-v3-Master-Architecture-Development-Roadmap.md` |
| AI-DOS Internal Navigation | `docs/AI/README.md` |
| Project Architecture | Task-specific repository declarations |
| Source Roots | Task-specific repository declarations |
| Validation Commands | Active task or repository-local validation guidance |
| Protected Areas | This file, active ProjectStatus, and explicit Human Governance restrictions |

These mappings apply only to Forge AI self-hosting.

## 3. System Layer Handoff

After receiving the Human Task, route to:

`docs/AI/System/TargetRepositoryResolution.md`

That procedure owns:

- Target Repository identification;
- Target root establishment;
- Target `AGENTS.md` resolution;
- project-resource declaration resolution;
- path validation;
- blocker reporting;
- BootSequence handoff.

This file shall not duplicate those responsibilities.

## 4. Entry Sequence

```text
Human Task
    ↓
AGENTS.md
    ↓
TargetRepositoryResolution
    ↓
BootSequence
    ↓
AuthorityModel
    ↓
SourceOfTruth
    ↓
ContextAssembly
    ↓
DecisionModel
    ↓
ExecutionSequence
    ↓
Completion Report
```

`AGENTS.md` routes into the sequence. It does not execute the sequence.

## 5. Core Invariants

1. Human Governance is final.
2. Root `AGENTS.md` owns project-resource declarations.
3. `TargetRepositoryResolution` owns resolution and validation.
4. `BootSequence` consumes the resolution result.
5. Operational Core consumes booted context.
6. ProjectStatus owns live state only.
7. DevelopmentPhases owns sequence only.
8. Roadmap owns direction only.
9. Target Project documents do not reference AI-DOS internals directly.
10. Self-hosting and external operation use the same ownership model.

## 6. File Safety

- Modify only authorized files.
- Do not invent missing declarations.
- Do not apply Forge AI self-hosting paths to external repositories.
- Do not update ProjectStatus automatically.
- Do not bypass frozen or protected areas.
- Update references in the same change as an authorized move.

## 7. Completion Report

Report:

- Target Repository Resolution status.
- BootSequence handoff status.
- Files changed.
- Authority and scope validation.
- Project state and roadmap validation.
- Validation results.
- Risks or blockers.
- Recommended next step.

## 8. Version History

| Version | Date | Description |
|:---|:---|:---|
| `4.0.0-draft` | 2026-07-10 | Introduced the single entry model but duplicated resolution responsibilities. |
| `4.1.0-draft` | 2026-07-10 | Restored TargetRepositoryResolution ownership and limited AGENTS to declaration and routing. |

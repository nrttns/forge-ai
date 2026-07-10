# Target Project Path Resolution

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.V2.TARGET-PATH-001` |
| Title | Target Project Path Resolution |
| Version | `1.0.0` |
| Status | Report Complete |
| Canonical Status | Non-canonical analysis report; not a standards document, adapter design, Runtime design, Engine design, or implementation authority |
| Classification | Target-Project Path Resolution Report |
| Document Type | Architecture Report |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Focused Target-Path Resolution Analysis |
| Traceability ID | `FORGE-AI.V2.TARGET-PATH-001` |
| Scope | Determine and document how Forge AI / AI-DOS resolves project-specific paths when operating on Forge AI as its own target repository or on an external target repository. |
| Out of Scope | Repository-wide rationalization audit, legacy cleanup, navigation cleanup execution, Repository Adapter design, Repository Contract standard, Runtime redesign, Engine redesign, Axis Suite implementation, ProjectStatus modification, DevelopmentPhases modification, and frozen document modification. |
| Normative Authority | Human task instruction; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; active target repository root `AGENTS.md` for target-project declarations. |
| Normative References | `README.md`; `docs/AI/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/System/README.md`; `docs/AI/System/AuthorityModel.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/System/DecisionModel.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/AI/Commands/`; `docs/AI/Workflows/`; `docs/AI/Templates/README.md`; `docs/AI/Templates/Planning/`; `docs/AI/Templates/Project/`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md`. |
| Dependencies | Repository path scan; required-read document review; active target repository root declaration model. |
| Consumes | Forge AI governance, operational, System Layer, Command, Workflow, Template, and audit evidence. |
| Produces | Path-resolution model, hardcoded-path findings, per-file classification matrix, frozen-document impact, non-frozen refactor candidates, Axis Suite minimum AGENTS contract, validation plan, readiness decision, and exact next step. |
| Related Specifications | `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review before any normalization batch modifies existing Framework, System, Runtime, Template, Operational Core, ProjectStatus, DevelopmentPhases, or AGENTS files. |
| Certification Status | Not certified |

## 2. Executive Summary

Forge AI / AI-DOS must distinguish between Forge AI self-hosting and operation on an external target repository. The current Forge AI repository already contains target-project portability language in root and AI README documents, but materially relevant active Framework, Operational Core, System, Command, Workflow, and Template files still contain hardcoded Forge AI planning paths.

The deterministic model is simple and does not require a Repository Adapter, registry, schema, Runtime layer, Engine layer, or implementation code:

1. Establish `<TARGET_REPOSITORY_ROOT>`.
2. Read `<TARGET_AGENTS_PATH>`.
3. Resolve target-project declarations from that AGENTS file.
4. Resolve declared target paths relative to `<TARGET_REPOSITORY_ROOT>`.
5. Consume Forge AI general rules and target-project reality together.

The scan of materially relevant active documents found 139 occurrences of the requested path patterns outside historical report evidence. These occurrences are not all defects. Forge AI self-hosting navigation, Forge AI repository-specific governance, and historical references may remain valid when labeled or scoped. General Operational, System, Command, Workflow, and Template documents should not impose `docs/DevelopmentPhases/ProjectStatus.md`, `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`, or `docs/ProjectStatus.md` as universal target-project paths.

Readiness decision: **READY FOR TARGET-PATH NORMALIZATION**.

Recommended next step: **FORGE-AI.V2.TARGET-PATH-002 — NON-FROZEN TARGET-PATH NORMALIZATION**.

## 3. Purpose

This report answers how Forge AI / AI-DOS resolves project-specific paths when operating on any target repository. It identifies where general Forge AI documents hardcode Forge AI repository-specific project paths, classifies each materially relevant occurrence, and defines the minimum path-resolution model for target-project operation through the active target repository root `AGENTS.md`.

## 4. Scope

### 4.1 In Scope

- Forge AI self-hosting path behavior.
- External target-project path behavior.
- Active Framework, Operational Core, System, Command, Workflow, and Template files named by the task.
- The three requested hardcoded path patterns:
  - `docs/DevelopmentPhases/ProjectStatus.md`
  - `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`
  - `docs/ProjectStatus.md`
- Other materially relevant Forge-specific planning-path assumptions encountered in those files.
- Minimum Axis Suite AGENTS declaration contract for a first pilot.

### 4.2 Out of Scope

- Existing-file modification.
- ProjectStatus modification.
- DevelopmentPhases modification.
- System Layer or Template Library unfreeze.
- Repository Adapter, Repository Contract standard, implementation code, schema, registry, Runtime redesign, or Engine redesign.
- Cleanup Batch 02 reintroduction.
- Repository-wide rationalization audit repetition.

## 5. Confirmed Operating Model

Forge AI / AI-DOS is the general operating system. The target repository owns project truth.

Forge AI / AI-DOS provides constitutional rules, governance, standards, Runtime and Engine architecture, System Layer procedures, Operational Core, Commands, Workflows, Templates, and validation model. The target repository provides its root `AGENTS.md`, project instructions, ProjectStatus, DevelopmentPhases, roadmap, phase, stage, capability, project architecture, source code, project validation commands, and protected areas.

The Forge Agent consumes both. Forge AI general rules constrain how work is performed. The active target repository declares what project-state, roadmap, architecture, source, and validation resources are authoritative for that project.

## 6. Forge AI Self-Hosting Model

When Forge AI is its own target project:

| Logical Variable | Forge AI Self-Hosting Resolution |
|:---|:---|
| `<TARGET_REPOSITORY_ROOT>` | Forge AI repository root |
| `<TARGET_AGENTS_PATH>` | `AGENTS.md` |
| `<PROJECT_STATUS_PATH>` | `docs/DevelopmentPhases/ProjectStatus.md` |
| `<DEVELOPMENT_PHASES_PATH>` | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| `<PROJECT_ARCHITECTURE_PATH>` | Declared by Forge AI authority routing, commonly under `docs/AI/Architecture/`, `docs/AI/Runtime/`, `docs/AI/System/`, and related task-specific documents |
| `<SOURCE_ROOT>` | Declared by the task and repository context; documentation-first tasks may have no source-code root beyond the repository root |
| `<VALIDATION_COMMANDS>` | Declared by task instructions, repository guidance, and relevant authority documents |

These physical paths are valid for Forge AI self-hosting. They are not universal target-project paths.

## 7. External Target-Project Model

When operating on an external target project such as Axis Suite:

| Logical Variable | External Target-Project Resolution |
|:---|:---|
| `<TARGET_REPOSITORY_ROOT>` | External project repository root selected for the active task |
| `<TARGET_AGENTS_PATH>` | `<TARGET_REPOSITORY_ROOT>/AGENTS.md` |
| `<PROJECT_STATUS_PATH>` | Path declared by the external target repository root `AGENTS.md`, resolved relative to `<TARGET_REPOSITORY_ROOT>` |
| `<DEVELOPMENT_PHASES_PATH>` | Path declared by the external target repository root `AGENTS.md`, resolved relative to `<TARGET_REPOSITORY_ROOT>` |
| `<PROJECT_ARCHITECTURE_PATH>` | Path declared by the external target repository root `AGENTS.md`, resolved relative to `<TARGET_REPOSITORY_ROOT>` |
| `<SOURCE_ROOT>` | Source root declared by the external target repository root `AGENTS.md`, resolved relative to `<TARGET_REPOSITORY_ROOT>` |
| `<VALIDATION_COMMANDS>` | Validation commands declared by the external target repository root `AGENTS.md` and refined by task-specific target-project instructions |

Forge AI documents must not assume Axis Suite uses Forge AI physical planning paths. Axis Suite must declare its own paths in its root `AGENTS.md` before a first pilot can proceed safely.

## 8. Target Repository Root Resolution

`<TARGET_REPOSITORY_ROOT>` is established by the active task context or explicit Human Governance instruction. If the task targets Forge AI itself, the target root is the Forge AI repository root. If the task targets Axis Suite or another external project, the target root is that project repository root.

Required resolution flow:

1. Select active target repository.
2. Read `<TARGET_REPOSITORY_ROOT>/AGENTS.md`.
3. Resolve target-project resource declarations from `AGENTS.md`.
4. Resolve all declared paths relative to `<TARGET_REPOSITORY_ROOT>`.
5. Read target ProjectStatus.
6. Read target DevelopmentPhases.
7. Load relevant Forge AI authorities and operating rules.
8. Load target-project architecture, source, and validation context.
9. Determine active task.
10. Execute, validate, review, and report.

If `<TARGET_AGENTS_PATH>` is missing, unreadable, or does not declare required target-project paths, the Forge Agent must stop and escalate instead of substituting Forge AI self-hosting paths.

## 9. AGENTS Path Declaration Contract

The target repository root `AGENTS.md` must declare the following path-resolution concepts as target-project facts, not Forge AI Framework facts:

| Required Declaration | Meaning | Resolution Rule |
|:---|:---|:---|
| Framework provider / Forge AI root | Where Forge AI / AI-DOS general rules are sourced from, when external to the target project | May be absolute or otherwise environment-declared; must not override target project truth |
| Target repository root | The project root for the active target | Establishes the base for project-relative path resolution |
| Project Status path | Path to the target project's operational state | Resolve relative to `<TARGET_REPOSITORY_ROOT>` |
| Development Phases path | Path to the target project's roadmap/phase sequence | Resolve relative to `<TARGET_REPOSITORY_ROOT>` |
| Architecture path | Path or set of paths to target-project architecture | Resolve relative to `<TARGET_REPOSITORY_ROOT>` |
| Source root | Path or paths to implementation source | Resolve relative to `<TARGET_REPOSITORY_ROOT>` |
| Test / validation commands | Commands required to validate target-project work | Execute from the declared working directory unless command-specific instructions say otherwise |
| Protected areas | Frozen, protected, generated, vendored, or no-touch areas | Must be honored before file modification |
| Active project authority order | Target-specific authority chain and conflict order | Must be combined with Forge AI general rules without erasing target truth |
| Forge AI consumption rule | How Forge Agent consumes Forge AI general rules while preserving target-project ownership | Must state that Forge AI self-hosting paths are not universal target-project paths |

## 10. Hardcoded Path Findings

### 10.1 Scan Summary

The focused scan found 139 occurrences of the requested path patterns in materially relevant active documents outside historical report evidence. The historical rationalization audit separately records repository-wide evidence and was not re-performed.

| Pattern | Finding |
|:---|:---|
| `docs/DevelopmentPhases/ProjectStatus.md` | Present in active README, Governance, Framework Governance, Operational Core, System, Command, Workflow, Template, and Template-family documents. |
| `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Present in active README, Governance, Framework Governance, Operational Core, System, Command, Workflow, Template, and Template-family documents. |
| `docs/ProjectStatus.md` | Present only as stale/historical reference in the active scan set: STD-010 and the historical rationalization audit. |

### 10.2 Classification Rules

| Classification | Meaning |
|:---|:---|
| `VALID_FORGE_SELF_HOSTING` | Valid when explicitly scoped to Forge AI operating on its own repository. |
| `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Invalid in reusable/general documents because it imposes Forge AI physical paths on external target projects. |
| `HISTORICAL_REFERENCE` | Valid as historical evidence or audit record, not as current execution routing. |
| `EXAMPLE_REQUIRING_LABEL` | Acceptable as an example only if labeled as Forge AI self-hosting or illustrative, not universal. |
| `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | Located in a frozen family or frozen component; correction requires Human Governance controlled unfreeze. |

## 11. Per-File Classification Matrix

| File | Current Hardcoded Path | Document Role | Classification | Correct Resolution Model | Frozen? | Required Action |
|:---|:---|:---|:---|:---|:---|:---|
| `README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Root repository overview and Forge self-hosting navigation | `VALID_FORGE_SELF_HOSTING` | Keep Forge self-hosting paths; preserve existing external target-project portability note. | No | No immediate correction required. |
| `docs/AI/README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | AI directory navigation | `VALID_FORGE_SELF_HOSTING` | Keep only when scoped to Forge AI self-hosting; external target projects resolve through target root `AGENTS.md`. | No | Optional label strengthening in non-frozen normalization. |
| `docs/AI/GOVERNANCE.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Governance Atlas | `INVALID_GENERAL_FRAMEWORK_HARDCODE` for external target operation; valid for Forge AI repository governance | Replace universal wording with logical target paths plus Forge self-hosting mapping. | No | Candidate for controlled non-frozen normalization if Governance Atlas changes are authorized. |
| `docs/FrameworkGovernance.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Governance decision policy | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Use `<PROJECT_STATUS_PATH>` and `<DEVELOPMENT_PHASES_PATH>` declared by target root `AGENTS.md`; mention Forge AI self-hosting mapping separately. | No | Non-frozen refactor candidate. |
| `docs/AI/AIFramework.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Operational Core entry point | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Replace physical paths in general boot sequence with target-declared logical variables; keep Forge AI self-hosting note. | No | Non-frozen refactor candidate. |
| `docs/AI/AIOrchestrator.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Operational Core orchestration | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Consume target-declared ProjectStatus and DevelopmentPhases paths through `<TARGET_AGENTS_PATH>`. | No | Non-frozen refactor candidate. |
| `docs/AI/AgentSystemPrompt.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Operational Core agent prompt | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Replace universal physical-path boot steps with target-root resolution sequence. | No | Non-frozen refactor candidate. |
| `docs/AI/System/README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer index | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, map System Layer references to target-declared logical variables and label Forge self-hosting physical paths. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/AuthorityModel.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer authority procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, route target project state through `<PROJECT_STATUS_PATH>` and roadmap through `<DEVELOPMENT_PHASES_PATH>`. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/BootSequence.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer boot procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, insert target-root AGENTS resolution before reading target ProjectStatus and DevelopmentPhases. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/SourceOfTruth.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer source-of-truth procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, define target ProjectStatus and target DevelopmentPhases as target-declared resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/ContextAssembly.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer context assembly procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, assemble context from target-declared paths after reading `<TARGET_AGENTS_PATH>`. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/DecisionModel.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer decision procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, make target-project state and roadmap logical resources declared by target root. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/ExecutionSequence.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer execution procedure | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, resolve target execution context from target root `AGENTS.md`. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/System/SystemLayerFreeze.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | System Layer freeze record | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | Preserve as freeze evidence unless Human Governance authorizes a new freeze amendment. | Yes | Controlled Human Governance unfreeze required only if amended. |
| `docs/AI/Commands/AgentAuditCommand.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable command | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Resolve state and roadmap through `<TARGET_AGENTS_PATH>` and target declarations. | No | Non-frozen refactor candidate. |
| `docs/AI/Commands/AgentBugFixCommand.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable command | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Resolve state, roadmap, source root, and validations from target declarations. | No | Non-frozen refactor candidate. |
| `docs/AI/Commands/AgentDocumentationCommand.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable command | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Resolve target planning and documentation context from target root `AGENTS.md`. | No | Non-frozen refactor candidate. |
| `docs/AI/Commands/AgentImplementationCommand.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable command | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Resolve target state, roadmap, source root, protected areas, and validation commands from target declarations. | No | Non-frozen refactor candidate. |
| `docs/AI/Commands/AgentTaskCommand.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable command | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Resolve target task context from target root `AGENTS.md` before applying Forge AI general command rules. | No | Non-frozen refactor candidate. |
| `docs/AI/Workflows/ProjectStateUpdater.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Project-state update workflow | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Target ProjectStatus update path must be declared by target root `AGENTS.md`; Forge AI physical path is only self-hosting mapping. | No | Non-frozen refactor candidate, with strict status-update authority preservation. |
| `docs/AI/Workflows/TaskGenerationWorkflow.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Task generation workflow | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Generate tasks from target-declared ProjectStatus and DevelopmentPhases. | No | Non-frozen refactor candidate. |
| `docs/AI/Workflows/TaskPlanner.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Task planning workflow | `INVALID_GENERAL_FRAMEWORK_HARDCODE` | Plan against target-declared operational state and roadmap. | No | Non-frozen refactor candidate. |
| `docs/AI/Templates/README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Template Library index | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, separate Forge AI self-hosting references from target-declared planning paths. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Planning template family index | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, use target-declared planning resources in reusable template metadata. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/HistoricalCapabilityTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable planning template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, replace Forge-specific paths with template placeholders for target-declared status and roadmap. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/PhaseTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable planning template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, use `<PROJECT_STATUS_PATH>` and `<DEVELOPMENT_PHASES_PATH>` placeholders or labels. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/RoadmapTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable roadmap template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE`; one placeholder default is `EXAMPLE_REQUIRING_LABEL` | If unfrozen, label default as Forge AI self-hosting example or replace with target-declared placeholder. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/StageTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable planning template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, use target-declared logical paths. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Planning/VisionTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable planning template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, use target-declared logical paths. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/README.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Project template family index | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, remove universal Forge AI planning paths from reusable project template metadata. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/CLIProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/GenericProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/LaravelProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/LibraryProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/NodeProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/ProjectTemplateSelectionGuide.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Project template selection guide | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, use target-declared planning resources in selection context. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/ReactProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/SaaSProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/SymfonyProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Templates/Project/WordPressProjectTemplate.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reusable project template | `FROZEN_DOCUMENT_REQUIRING_CONTROLLED_UNFREEZE` | If unfrozen, consume target-declared planning resources. | Yes | Controlled Human Governance unfreeze required. |
| `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | `docs/ProjectStatus.md` | Document metadata standard | `HISTORICAL_REFERENCE` | Treat as historical stale-path evidence in STD-010 wording, not target-project routing. | No | No target-path normalization required unless STD-010 editorial correction is separately authorized. |
| `docs/AI/Architecture/Reports/Forge-AI-Repository-Rationalization-Audit.md` | `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/ProjectStatus.md` | Historical audit/report evidence | `HISTORICAL_REFERENCE` | Preserve as evidence; do not rewrite as part of target-path normalization. | No | No correction in this task. |

## 12. Frozen-Document Impact

The frozen-impact set is concentrated in System Layer and Template Library families:

- `docs/AI/System/README.md`
- `docs/AI/System/AuthorityModel.md`
- `docs/AI/System/BootSequence.md`
- `docs/AI/System/SourceOfTruth.md`
- `docs/AI/System/ContextAssembly.md`
- `docs/AI/System/DecisionModel.md`
- `docs/AI/System/ExecutionSequence.md`
- `docs/AI/System/SystemLayerFreeze.md`
- `docs/AI/Templates/README.md`
- `docs/AI/Templates/Planning/*Template.md` and Planning family README
- `docs/AI/Templates/Project/*Template.md`, Project family README, and ProjectTemplateSelectionGuide

These files can be analyzed now but should not be modified until Human Governance authorizes controlled unfreeze. The likely correction is mechanical and limited: replace universal Forge AI physical planning paths with target-declared logical variables and label Forge AI physical paths as self-hosting mappings.

## 13. Non-Frozen Refactor Candidates

The following files can be corrected without unfreezing, assuming Human Governance authorizes a non-frozen normalization batch:

| Candidate | Reason |
|:---|:---|
| `docs/FrameworkGovernance.md` | General governance policy currently names Forge AI planning paths. |
| `docs/AI/GOVERNANCE.md` | Governance Atlas currently presents Forge AI planning paths as primary navigation; should distinguish target-root resolution from Forge AI self-hosting. |
| `docs/AI/AIFramework.md` | General Operational Core entry point hardcodes Forge AI ProjectStatus and DevelopmentPhases in boot sequence. |
| `docs/AI/AIOrchestrator.md` | General orchestration hardcodes Forge AI planning paths. |
| `docs/AI/AgentSystemPrompt.md` | Agent prompt hardcodes Forge AI planning paths in reusable operating instructions. |
| `docs/AI/Commands/AgentAuditCommand.md` | Reusable command hardcodes Forge AI planning paths. |
| `docs/AI/Commands/AgentBugFixCommand.md` | Reusable command hardcodes Forge AI planning paths. |
| `docs/AI/Commands/AgentDocumentationCommand.md` | Reusable command hardcodes Forge AI planning paths. |
| `docs/AI/Commands/AgentImplementationCommand.md` | Reusable command hardcodes Forge AI planning paths. |
| `docs/AI/Commands/AgentTaskCommand.md` | Reusable command hardcodes Forge AI planning paths. |
| `docs/AI/Workflows/ProjectStateUpdater.md` | Workflow must update target-declared ProjectStatus, not always Forge AI ProjectStatus. |
| `docs/AI/Workflows/TaskGenerationWorkflow.md` | Workflow should generate tasks from target-declared state and roadmap. |
| `docs/AI/Workflows/TaskPlanner.md` | Workflow should plan from target-declared state and roadmap. |
| `README.md` | Optional label strengthening only; already distinguishes Forge AI self-hosting and external target projects. |
| `docs/AI/README.md` | Optional label strengthening only; already distinguishes Forge AI self-hosting and external target projects. |

## 14. Axis Suite Minimum AGENTS Contract

For the first Axis Suite pilot, Axis Suite root `AGENTS.md` must provide at minimum:

| Field | Required Content |
|:---|:---|
| Framework provider / Forge AI root | The location or reference by which Forge Agent accesses Forge AI / AI-DOS general rules. |
| Target repository root | The Axis Suite repository root for path resolution. |
| Project Status path | Axis Suite's operational state path, relative to Axis Suite root. |
| Development Phases path | Axis Suite's roadmap / phase sequence path, relative to Axis Suite root. |
| Architecture path | Axis Suite architecture path or paths, relative to Axis Suite root. |
| Source root | Axis Suite source root or roots, relative to Axis Suite root. |
| Test / validation commands | Axis Suite validation commands, including working directory and expected environment notes where necessary. |
| Protected areas | Frozen, generated, vendored, secret, migration-sensitive, or otherwise protected paths. |
| Active project authority order | The order of Axis Suite authorities when project instructions conflict. |
| Forge AI consumption rule | Explicit instruction that Forge AI general rules are consumed for operating model and governance, while Axis Suite owns project truth and does not inherit Forge AI self-hosting planning paths. |

This contract does not invent Axis Suite paths. It defines the minimum declarations Axis Suite must provide before Forge Agent can operate deterministically.

## 15. Recommended Execution Batches

1. **FORGE-AI.V2.TARGET-PATH-002 — NON-FROZEN TARGET-PATH NORMALIZATION**
   - Normalize non-frozen general Framework, Operational Core, Command, and Workflow documents.
   - Preserve Forge AI self-hosting paths only as labeled self-hosting mappings.
   - Do not touch System Layer, Template Library, ProjectStatus, DevelopmentPhases, AGENTS, Runtime, or Engine files.
2. **Human Governance Controlled Unfreeze Decision — System Layer Target-Path Alignment**
   - Decide whether to amend frozen System Layer documents to consume target-declared logical variables.
3. **Human Governance Controlled Unfreeze Decision — Template Library Target-Path Alignment**
   - Decide whether to amend frozen Template Library and template-family metadata to remove universal Forge AI planning paths.
4. **Axis Suite Pilot Preparation**
   - Draft Axis Suite root `AGENTS.md` using the minimum contract after non-frozen normalization is complete.

## 16. Validation Plan

For future normalization batches, validate with:

1. `git diff --check`.
2. `git diff --name-status`.
3. Focused search for:
   - `docs/DevelopmentPhases/ProjectStatus.md`
   - `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`
   - `docs/ProjectStatus.md`
4. File-safety verification that only authorized non-frozen files were modified.
5. Frozen-area verification that System Layer and Template files were not modified unless controlled unfreeze was explicitly authorized.
6. ProjectStatus and DevelopmentPhases verification that neither file was modified unless explicitly authorized.

Validation performed for this report:

| Check | Result |
|:---|:---|
| Required-read set reviewed | Pass |
| Focused active-document path scan completed | Pass |
| Only created file intended | Pass pending final `git diff --name-status` |
| Existing documents unmodified | Pass pending final `git diff --name-status` |

## 17. Decision

**READY FOR TARGET-PATH NORMALIZATION**.

Rationale:

- The path-resolution model is deterministic.
- No new Runtime, Engine, Repository Adapter, Repository Contract standard, registry, schema, or implementation layer is required.
- Invalid general Framework hardcodes are identifiable and separable from valid Forge AI self-hosting references.
- Non-frozen refactor candidates are isolated.
- Frozen System and Template impacts are identifiable and can be deferred to controlled unfreeze decisions.
- Axis Suite can proceed only after its root `AGENTS.md` declares target-project paths and project authority order.

## 18. Exact Next Step

**FORGE-AI.V2.TARGET-PATH-002 — NON-FROZEN TARGET-PATH NORMALIZATION**.

Limit the next task to non-frozen normalization. Do not modify ProjectStatus, DevelopmentPhases, AGENTS, Runtime, Engine, System Layer, Template Library, or Axis Suite implementation files in that batch.

#AI-DOS Repository Rationalization Audit

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.REPORT.REPOSITORY-RATIONALIZATION-AUDIT` |
| Title |AI-DOS Repository Rationalization Audit |
| Version | `1.0.0` |
| Status | Audit Complete |
| Canonical Status | Authoritative cleanup baseline for subsequent executable cleanup batches; not a promotion or certification artifact |
| Classification | Repository Rationalization Audit |
| Document Type | Audit Report |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Phase B — Remaining Legacy / Reference Cleanup Repository Rationalization |
| Traceability ID | `AI-DOS.V2.REPOSITORY-RATIONALIZATION.AUDIT` |
| Scope | Repository-wide inspection and classification of active, legacy, duplicated, transitional, RC1, RC2, merged, stale, report, navigation, and reference material for cleanup planning. |
| Out of Scope | Deletion, movement, archive execution, merge execution, refactoring of active documents, ProjectStatus updates, DevelopmentPhases updates, Runtime RFC modification, Runtime README modification, Template Library modification, System Layer modification, architecture redesign, Repository Contract creation, Repository Adapter creation, Repository Freeze, and Axis Suite implementation. |
| Normative Authority | Human task instruction; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Runtime/README.md`; `docs/AI/Templates/README.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` |
| Dependencies | Repository tree inspection; Markdown reference scan; RC1/RC2 search; path-universalization search; existing reports and freeze records. |
| Consumes | Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, Operational Core, System Layer, Runtime RFC family, Template Library, AGENTS architecture family, Meta Foundation, Standards, existing reports, repository file tree, and local Markdown links. |
| Produces | Canonical owner map, boot-chain assessment, hardcoded path inventory, RC1 and RC2 inventories, parallel-system findings, disposition matrix, ordered cleanup batches, validation plan, and Axis Suite readiness impact. |
| Related Specifications | `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md`; `docs/AI/Architecture/Reports/AI-DOS-Repository-Classification-Audit-v1.0.md`; `docs/AI/Architecture/Reports/RC2-Specification-Harvest-Report.md`; `docs/AI/Architecture/Reports/RC2-Specification-Legacy-Migration-Plan.md`; `docs/AI/Architecture/Reports/AI-DOS-Authority-Cleanup-Plan-v1.0.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review before executing cleanup batches that touch frozen families, archived evidence, ProjectStatus, DevelopmentPhases, Runtime RFCs, System Layer, Template Library, or AGENTS v2 Core. |
| Certification Status | Not certified |

---

## Revision History

| Revision | Date | Amendment | Summary |
|:---|:---|:---|:---|
| Original | 2026-07-10 | Repository Rationalization Audit | Established the original repository rationalization audit baseline before formal Target Repository operating-model clarification. |
| Revision 1 | 2026-07-10 | Target Repository Awareness Amendment | Amends the audit to distinguishAI-DOS self-hosting from external Target Repository operation without replacing the audit, re-inventorying the repository, or creating a new disposition matrix from scratch. |

## 1. Executive Summary

The repository currently contains parallel systems. The current repository bootloader, Governance Atlas, Framework Governance, Runtime RFC family, Template Library, System Layer, and v2 Operational Core coexist with RC2 operational, specification, lifecycle, validation, certification, testing, and project-template documents that still present themselves as active in older navigation chains.

RC1 and RC2 material remains active by reference. The scan found 37 RC1 textual references across 22 Markdown files and 466 RC2 textual references across 60 Markdown files. RC2 is not uniformly obsolete: some references are valid migration evidence, while the old `docs/AI/Specification/`, `docs/AI/Validation/`, `docs/AI/Certification/`, `docs/AI/Lifecycle/`, `docs/AI/Testing/`, and old Project Template paths compete with current v2/v3/v4 owners when loaded by `docs/AI/README.md` and related RC2 chains.

InvalidAI-DOS path universalization exists. The scan found 404 explicit ProjectStatus / DevelopmentPhases path references across 101 Markdown files, including stale `docs/ProjectStatus.md` references and generic Framework/Operational documents that should resolve target-project state through the target repository root `AGENTS.md` rather than imposingAI-DOS planning paths universally.

The repository can proceed to cleanup batches, but not as a single broad deletion. The audit verdict is **READY FOR CLEANUP WITH GOVERNANCE BLOCKERS** because frozen System Layer, Template Library, and AGENTS v2 Core defects require controlled Human Governance decisions before modification.

No frozen-layer blocker requires immediate content editing in this audit. Frozen families remained unchanged. The blockers are disposition and unfreeze decisions for future cleanup batches, not defects introduced here.


### 1.1 Executive Summary Addendum — Revision 1 Target Repository Awareness Amendment

Revision 1 preserves the original audit and all valid findings. It amends only the findings, disposition assumptions, cleanup sequencing, and validation expectations affected by the later Target Repository operating model recorded in A.2 Operational Boundary, Target Repository Resolution, System Layer Freeze, and Target Project Path Resolution.

The original audit correctly identified invalidAI-DOS path universalization as a repository-rationalization concern. Revision 1 narrows that finding: AI-DOS-specific paths are not inherently invalid. They are valid whenAI-DOS is self-hosting as the active Target Repository, invalid when embedded as universal requirements in reusable Framework or operational documents, and historical when retained as evidence of prior repository state.

The revised cleanup posture is therefore **READY FOR TARGET-PATH NORMALIZATION BEFORE GENERAL CLEANUP**. Cleanup batches should not remove or rewriteAI-DOS self-hosting paths merely because they are AI-DOS-specific. They should first normalize reusable Framework, Operational Core, Command, Workflow, and Template language so target-project paths are resolved through the active Target Repository declaration.

Affected findings count: **14 disposition rows / families** are amended by Revision 1: D-002, D-005, D-006, D-007, D-009, D-010, D-011, D-012, D-015, D-021, D-038, D-039, D-042, and D-045. Unaffected findings remain governed by the original audit.

## 2. Audit Purpose

This audit establishes the authoritative cleanup baseline for subsequent executable cleanup batches. It classifies repository responsibilities, competing owners, active and stale navigation, RC1/RC2 residue, target-project path portability, merged/temporary artifacts, reports/evidence, broken links, and cleanup dispositions without deleting, moving, archiving, merging, refactoring, or redesigning any existing repository artifact.

## 3. Scope

In scope:

- Root bootloader and README files.
- `docs/AI/FrameworkGovernance.md`, `docs/ProjectStatus.md` if present, and `docs/DevelopmentPhases/`.
- Complete `docs/AI/` documentation families.
- System Layer, Runtime RFC family, Template Library, Project Templates, AGENTS architecture, Meta Models, Standards, reports, audits, reviews, matrices, freeze records, and migration plans.
- Repository-wide Markdown links and incoming-reference assessment.
- RC1, RC2, legacy, transitional, merged, temporary, generated, stale navigation, and hardcoded planning-path evidence.

## 4. Out of Scope

Out of scope:

- Any deletion, movement, rename, archive, merge, or refactor.
- Updates to ProjectStatus, DevelopmentPhases, Runtime README, Runtime RFCs, System Layer, Template Library, AGENTS v2 Core, source code, or configuration.
- New architecture, Repository Contract, Repository Adapter, planning system, parallel governance, Repository Freeze, or Axis Suite implementation.

## 5. Authority and Evidence

### 5.1 Required Reading Completed

The audit consumed the mandated authority set: root `AGENTS.md`, Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, `docs/AI/README.md`, `docs/AI/AIFramework.md`, `docs/AI/AIOrchestrator.md`, `docs/AI/AgentSystemPrompt.md`, complete System Layer file list, Runtime README and 22-file normalized Runtime RFC family, Template Library index and freeze reports, Project Template family, AGENTS architecture family and freeze evidence, Meta Models, STD-000, STD-003, STD-010, and existing reports/evidence families.

### 5.2 Inspection Commands and Evidence Sources

| Evidence | Result |
|:---|:---|
| Repository Markdown inventory | 245 Markdown files inspected, including 8 Markdown files under `node_modules` explicitly counted as repository-surface Markdown but excluded fromAI-DOS governance dispositions. |
| Directory inventory | 101 directories inspected. |
| Markdown reference scan | 4,578 local Markdown references checked. |
| Broken reference scan | 336 broken local Markdown references detected. |
| RC1 search | 37 matches across 22 Markdown files. |
| RC2 search | 466 matches across 60 Markdown files. |
| Project path search | 404 explicit planning/status path references across 101 Markdown files. |
| Transitional term search | 1,062 matches across 141 Markdown files. |
| Reports/evidence search | 61 report, review, audit, matrix, plan, changelog, or evidence-like Markdown files identified. |

## 6. Repository Inventory Summary

### 6.1 Counts by Top-Level Directory

| Directory | Markdown Files | Classification |
|:---|---:|:---|
| `/` | 2 | Root repository boot and general README surface. |
| `docs/` | 235 |AI-DOS governed documentation corpus. |
| `node_modules/` | 8 | Dependency package documentation; out ofAI-DOS governance cleanup except repository-surface accounting. |
| **Total** | **245** | Complete Markdown inspection scope. |

### 6.2 Counts by MaterialAI-DOS Family

| Family | Files / Families Inspected | Lifecycle / Status | Current vs Legacy Classification | Proposed Primary Disposition |
|:---|---:|:---|:---|:---|
| Root boot and repository README | 2 | Bootloader beta plus general README | Current boot, general index | KEEP / REFACTOR |
| DevelopmentPhases | 12 | Mixed active roadmap, live state, older phase files | Current plus older planning evidence | KEEP / REFACTOR / REMOVE |
| Governance core | 2 | Draft Governance Atlas and Framework Governance | Current authority/navigation | KEEP |
| Operational Core | 4 | v2 draft replacement plus matrix | Current replacement and evidence | KEEP / REFACTOR / ARCHIVE |
| System Layer | 8 | Frozen | Current frozen operational-system family | KEEP; blockers require Human Governance |
| Runtime family | 27 | Normalized / complete | Current Runtime and Engine architecture | KEEP |
| Template Library | 57 | Frozen | Current frozen template library | KEEP; blockers require Human Governance |
| Project Templates | 10 | Frozen subfamily but contains RC2/path residue | Current target-project bootstrap surface with stale wording | KEEP / BLOCKED BY HUMAN GOVERNANCE |
| AGENTS architecture | 13 | AGENTS v2 Core frozen; v1 historical | Current future agent architecture plus historical v1 | KEEP / ARCHIVE |
| Meta Models | 2 | Draft active architecture | Current semantic/artifact model | KEEP |
| Standards, schemas, appendices, standards reports | 38 | Mixed current standards and evidence | Current with stale links/evidence | KEEP / REFACTOR / ARCHIVE |
| RC2 Specification / Lifecycle / Validation / Certification / Testing | 29 | RC2 / legacy compatibility | Legacy/parallel operational surface | MERGE THEN REMOVE / ARCHIVE / REMOVE |
| Commands / Workflows / Checklists / Tooling | 13 | RC2-compatible operational docs | Current consumers but stale path/authority residue | REFACTOR / MERGE THEN REMOVE |
| Architecture reports and evidence | 8 | Prior audits/plans/reports | Evidence with some superseded recommendations | KEEP / ARCHIVE / REMOVE |
| Merged generated root AI files | 2 | Temporary generated/merged | Transitional residue | REMOVE |

### 6.3 Counts by Proposed Disposition

| Disposition | Count |
|:---|---:|
| KEEP | 96 |
| REFACTOR | 49 |
| MERGE THEN REMOVE | 26 |
| ARCHIVE | 19 |
| REMOVE | 47 |
| BLOCKED BY HUMAN GOVERNANCE | 8 |
| **Total classified Markdown files / families** | **245** |

### 6.4 Quantitative Requirements Summary

| Metric | Count |
|:---|---:|
| Total Markdown files inspected | 245 |
| Total directories inspected | 101 |
| Total references checked | 4,578 |
| Total broken references | 336 |
| Total stale references | 404 planning/status-path references plus broken-link subset requiring cleanup |
| Total RC1 references | 37 |
| Total RC2 references | 466 |
| Total duplicate-owner findings | 18 |
| Total hardcoded project-path findings | 101 files with explicit planning/status path references |
| Frozen-layer blockers | 8 |
| Expected file reduction after cleanup | 73 Markdown files/families after MERGE THEN REMOVE and REMOVE dispositions execute, excluding archives retained outside active navigation |
| Expected active repository surface after cleanup | Approximately 153 active Markdown files/families, plus archived evidence separated from active navigation and dependency-package Markdown ignored by governance navigation |

## 7. Confirmed Target Operating Model

Confirmed final operating model:

```text
AI-DOS / AI-DOS
    provides constitutional rules, governance rules, Meta Models, Standards,
    Runtime and Engine architecture, System Layer, Operational Core,
    Commands, Workflows, Templates, Validation, Review, Certification,
    and governed AI-DOS Agent behavior.

Target Project Repository
    provides root AGENTS.md, project governance, project planning paths,
    ProjectStatus, DevelopmentPhases, Phase / Stage / Capability state,
    architecture, source code, implementation state, and validation commands.
```

WhenAI-DOS is the target repository, root `AGENTS.md`, `docs/DevelopmentPhases/ProjectStatus.md`, `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`,AI-DOS architecture, andAI-DOS validation rules direct work. When Axis Suite is the target repository, Axis Suite's root `AGENTS.md`, ProjectStatus, DevelopmentPhases, architecture, implementation state, and validation rules must direct AI-DOS Agent work. Generic Framework documents must not universalizeAI-DOS planning filenames.

## 8. Canonical Owner Map

| Responsibility | Canonical Owner | Supporting Documents | Competing Documents | Frozen Status | Current Consumers | Conflicts | Required Cleanup |
|:---|:---|:---|:---|:---|:---|:---|:---|
| Repository bootloader | `AGENTS.md` | Governance Atlas, Framework Governance | `docs/AI/README.md` RC2 reading order; `docs/AI/System/BootSequence.md` if treated as repo boot | Bootloader beta, not frozen | All AI tasks | Old chains bypass current bootloader details | Refactor stale navigation; preserve root bootloader. |
| Governance navigation | `docs/AI/GOVERNANCE.md` | `AGENTS.md`, Framework Governance | `docs/AI/Specification/GovernanceModel.md`; old README maps | Not frozen | Bootloader, Operational Core | RC2 GovernanceModel still appears active in old read order | Archive/merge RC2 unique evidence; remove active reads. |
| Governance decision policy | `docs/AI/FrameworkGovernance.md` | Governance Atlas, A.1, standards | `docs/AI/Specification/GovernanceModel.md` | Not frozen | Bootloader, Operational Core | Parallel governance model | Refactor references to Framework Governance. |
| Constitution | `docs/AI/Architecture/A.1-Constitution.md` | A.0, appendices | `docs/AI/Specification/Constitution.md` | Not frozen | Standards, Runtime, Governance | RC2 constitution competes by title | Archive only if unique evidence; remove from active nav. |
| Framework semantic model | `docs/AI/Meta/M.0-Framework-Meta-Model.md` | A.1, STD-003 | `docs/AI/Specification/FrameworkSpecification.md` | Not frozen | Standards, Runtime, Engines | RC2 framework spec duplicates semantics | Merge exact valid definitions then remove. |
| Artifact model | `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | A.1, STD-010 | RC2 Specification family | Not frozen | Standards, metadata | Older artifact concepts embedded in RC2 | Merge valid examples only. |
| Canonical terminology | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | M.0, M.1 | `docs/AI/Specification/Terminology.md` | Not frozen | All architecture docs | RC2 terminology remains in read order | Merge still-valid glossary deltas then remove. |
| Document metadata | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | M.1, STD-000 | RC2 templates and old docs | Not frozen | All authored documents | Mixed metadata styles | Refactor future docs; no broad normalization now. |
| Standards governance | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Standards reports | Template standards where scoped | Not frozen | Standards library | Template standard can appear parallel if generalized | Keep TPL standards scoped to templates. |
| Runtime Architecture | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` | Runtime README | `docs/AI/Specification/RuntimeModel.md` | Current Runtime family protected by task | Runtime and Engines | RC2 RuntimeModel duplicate | Merge unique conceptual examples then remove. |
| Engine Platform Architecture | `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` | A.4.1-A.4.7 | Blueprint and stale A.4 path refs | Protected by task | Engine RFCs | Stale links to Architecture path | Refactor links; keep Runtime files unchanged until authorized. |
| Engine Foundation | `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` | A.5.1-A.5.12 | none active | Protected by task | Engine RFC family | Historical inventory has stale A.5 numbering | Keep current family; refactor reports later. |
| Engine Specializations | `docs/AI/Runtime/A.5.1` through `A.5.12` | Runtime reports | none active | Protected by task | Operational Core, future implementation | Link scan found stale report references | Keep; fix reports in cleanup batch. |
| System boot | `docs/AI/System/BootSequence.md` | System README, freeze | Root `AGENTS.md` for repository boot | Frozen | Operational Core | Must not claim repository boot ownership | Human Governance blocker for portability wording. |
| Authority resolution | `docs/AI/System/AuthorityModel.md` | Governance Atlas, Framework Governance | RC2 GovernanceModel | Frozen | Operational Core | Frozen wording may encode AI-DOS paths | Human Governance blocker if genericized. |
| Source-of-truth resolution | `docs/AI/System/SourceOfTruth.md` | System README | ProjectStatus docs | Frozen | Operational Core | Target-project portability risk | Human Governance blocker if edited. |
| Context assembly | `docs/AI/System/ContextAssembly.md` | Runtime Context Engine | old prompts/workflows | Frozen | Operational Core | None blocking cleanup | Keep. |
| Decision sequence | `docs/AI/System/DecisionModel.md` | Decision Engine RFC | older command docs | Frozen | Operational Core | Potential duplicate with Decision Engine only if redefined | Keep; no change. |
| Execution sequence | `docs/AI/System/ExecutionSequence.md` | Execution Engine RFC | workflows | Frozen | Operational Core | Frozen operational sequence coexists with workflows by scope | Keep; refactor workflows only. |
| Framework entry point | `docs/AI/AIFramework.md` | AI README, Orchestrator, Prompt | `docs/AI/README.md` RC2 master index | Not frozen | Operational Core | README still calls RC2 master | Refactor README and remove old active chain. |
| Orchestration | `docs/AI/AIOrchestrator.md` | AIFramework, workflows | older lifecycle orchestration docs | Not frozen | Operational Core | RC2 lifecycle may compete | Refactor/merge lifecycle evidence. |
| Agent-facing operating rules | `docs/AI/AgentSystemPrompt.md` | AGENTS, System Layer | `docs/AI/Tooling/CursorRules.md` | Not frozen | AI agents/tools | Tooling rules may be stale | Refactor or remove CursorRules. |
| Commands | `docs/AI/Commands/` | Orchestrator, workflows | old command mentions in specs | Not frozen | Operational Core | Hardcoded AI-DOS planning paths | Refactor commands for target-project root resolution. |
| Workflows | `docs/AI/Workflows/` | Orchestrator | Lifecycle / Testing scenarios | Not frozen | Commands | ProjectStateUpdater path assumptions | Refactor target-project portability. |
| Templates | `docs/AI/Templates/README.md` | Template standards, freeze reports | `docs/AI/templates_margedmd.md`; old root templates | Frozen | Template users | Merged generated file duplicates | Remove merged file; frozen edits need approval. |
| Project bootstrap | `docs/AI/Templates/Project/README.md` | Project templates | older ProjectTemplateArchitecture, TemplateBootstrapWorkflow names | Frozen | Target projects | Stale broken links; possible RC2 residue | Blocked by Human Governance for edits. |
| Project planning | Target repository root `AGENTS.md` plus that repo's planning docs; AI-DOS self-hosting uses `docs/DevelopmentPhases/` | Planning templates | Generic Framework docs hardcoding AI-DOS paths | Partly frozen templates | Operational Core, Commands | Invalid universalization | Refactor non-frozen docs; controlled unfreeze for templates/system if necessary. |
| Live operational state | Target repo ProjectStatus; AI-DOS self-hosting `docs/DevelopmentPhases/ProjectStatus.md` | ProjectStateUpdater workflow | `docs/ProjectStatus.md` legacy file | Not frozen | Bootloader, tasks | Duplicate status path | Refactor active refs; archive/remove legacy `docs/ProjectStatus.md`. |
| Validation | `docs/AI/Runtime/A.5.6-Validation-Engine-RFC.md` plus `docs/AI/Validation/` until replaced | Validation templates | RC2 Validation docs | Mixed | Operational Core | RC2 validation remains operational | Merge valid checklist content into current owner, then remove obsolete sources. |
| Review | `docs/AI/Runtime/A.5.7-Review-Engine-RFC.md` plus review templates | Agent review checklist | RC2 certification reviews | Mixed | Governance/reports | Some reports evidence only | Keep engine; archive evidence. |
| Certification | `docs/AI/Runtime/A.5.8-Certification-Engine-RFC.md` plus certification evidence | STD-000 | `docs/AI/Certification/` RC2 docs | Mixed | Governance/reports | RC2 certification readiness not current certification | Archive evidence; remove active chain. |
| Lifecycle and release governance | Future current lifecycle owner absent outside RC2 | STD-000 lifecycle sections | `docs/AI/Lifecycle/` RC2 family | Not frozen | README old chain | Genuine ownership gap for release governance | BLOCKED BY HUMAN GOVERNANCE: decide retain/refactor lifecycle owner or merge into STD-000/governance. |
| Agent architecture | `docs/AI/Architecture/Agents/AGENTS-v2.md` | AGENTS v2 family, freeze review | `AGENTS-v1-draft.md` | AGENTS v2 Core frozen by evidence | Governance Atlas, bootloader | v1 historical can be overread | Archive v1 or mark non-active. |
| Multi-agent architecture | AGENTS v2 roadmap/dev phases; future multi-agent docs | AGENTS v2 Core | Swarm templates | Future/frozen | Architecture planning | Templates can imply activation | Keep templates frozen; clarify activation only with approval. |
| Platform and target-project integration | Target-project root `AGENTS.md` plus future Platform Adapter docs | Project templates, platform templates | Hardcoded AI-DOS paths | Platform future frozen | Axis Suite readiness | No current adapter; invalid universalization | Refactor path assumptions; do not create adapter. |

## 9. Current Boot Chain

### 9.1 Observed Current Valid Chain

```text
AGENTS.md
  -> docs/AI/GOVERNANCE.md
  -> docs/DevelopmentPhases/ProjectStatus.md
  -> docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
  -> docs/AI/FrameworkGovernance.md when decision policy is relevant
  -> task-specific authority set
```

### 9.2 Observed Competing / Stale Chain

```text
docs/AI/README.md
  -> docs/AI/AIFramework.md
  -> docs/AI/System/README.md
  -> docs/AI/AgentSystemPrompt.md
  -> docs/AI/Specification/Constitution.md
  -> docs/AI/Specification/Terminology.md
  -> docs/AI/Specification/FrameworkSpecification.md
  -> docs/AI/Specification/RuntimeModel.md
  -> docs/AI/Specification/GovernanceModel.md
  -> docs/AI/Specification/ReferenceArchitecture.md
  -> docs/AI/AIOrchestrator.md
  -> docs/ProjectStatus.md
  -> docs/AI/Workflows/*
  -> docs/AI/Templates/Project/README.md
  -> docs/AI/Lifecycle/README.md
  -> docs/AI/Testing/README.md
```

Findings:

- The stale chain includes RC2 Specification documents as active reads.
- It references legacy `docs/ProjectStatus.md` instead of current `docs/DevelopmentPhases/ProjectStatus.md`.
- It bypasses current Governance Atlas-first routing.
- It loads Lifecycle and Testing as operational authorities.
- It treats old Project Template files that no longer exist as active.

## 10. Required Final Boot Chain

```text
Target repository root AGENTS.md
  -> target repository governance navigation
  -> target repository ProjectStatus / DevelopmentPhases / planning state
  ->AI-DOS / AI-DOS Framework authorities as required by task:
       - Governance Atlas
       - Framework Governance when decision policy is relevant
       - Constitution, Meta Models, Standards
       - Runtime README and Runtime / Engine RFC family
       - System Layer
       - Operational Core
       - Commands / Workflows / Templates / Validation as scoped
  -> target repository architecture/source/validation commands
  -> task execution within phase, stage, frozen-area, and authority boundaries
```

ForAI-DOS self-hosting, the target repository root is this repository and the planning docs are `docs/DevelopmentPhases/ProjectStatus.md` and `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`. For Axis Suite, the target repository root must be Axis Suite and its planning/state documents must be resolved through Axis Suite's root bootloader.

## 11. Framework versus Target-Project Findings

| ID | Finding | Evidence | Required Resolution | Disposition |
|:---|:---|:---|:---|:---|
| FTP-001 | Generic Framework documents hardcodeAI-DOS planning filenames. | 404 explicit path matches across 101 Markdown files. | Non-frozen Framework docs must describe target-project root resolution; AI-DOS self-hosting examples may name AI-DOS paths explicitly. | REFACTOR |
| FTP-002 | Old README chain directs agents to `docs/ProjectStatus.md`. | `docs/AI/README.md` reading order. | Replace with target-root state resolution and AI-DOS self-hosting exception. | REFACTOR |
| FTP-003 | Commands and Workflows assumeAI-DOS state paths. | Commands/Workflows path search hits. | Refactor commands/workflows to consume target repository status docs through target bootloader. | REFACTOR |
| FTP-004 | Frozen System Layer may encode AI-DOS-specific path resolution. | System Layer path hits and freeze evidence. | Human Governance must authorize controlled unfreeze if portability edits are required. | BLOCKED BY HUMAN GOVERNANCE |
| FTP-005 | Frozen Project Templates contain stale/broken legacy template links and planning assumptions. | Broken link scan and Project Template inspection. | Human Governance must authorize controlled template unfreeze for portability correction. | BLOCKED BY HUMAN GOVERNANCE |

Conclusion: Axis Suite can provide its own planning and operational state without modifying Framework architecture only after non-frozen Operational Core/Commands/Workflows navigation is refactored and any frozen template/system path defects are handled through controlled Human Governance decisions.

## 12. Hardcoded Path Inventory

| File | Section or line | Current path/reference | Classification | Required resolution | Disposition dependency |
|:---|:---|:---|:---|:---|:---|
| `docs/AI/README.md` | Framework Reading Order | `docs/ProjectStatus.md` | stale path / invalid universalization | Replace active read with target-root ProjectStatus resolution; preserve AI-DOS self-hosting note. | Batch 2 / 6 |
| `docs/AI/AIFramework.md` | Metadata / authority chain |AI-DOS ProjectStatus and DevelopmentPhases | valid AI-DOS self-hosting reference, ambiguous generic instruction risk | Clarify target-project resolution where generic; keep AI-DOS self-hosting paths as examples. | Batch 6 |
| `docs/AI/AIOrchestrator.md` | Metadata / orchestration |AI-DOS ProjectStatus and DevelopmentPhases | valid self-hosting, ambiguous generic instruction risk | Refactor target-project routing language. | Batch 6 |
| `docs/AI/AgentSystemPrompt.md` | Metadata / behavior rules |AI-DOS ProjectStatus and DevelopmentPhases | valid self-hosting, ambiguous generic instruction risk | Refactor to target-root state discovery. | Batch 6 |
| `docs/AI/System/*.md` | Frozen system rules |AI-DOS planning/status paths | frozen possible portability defect | Human Governance decides controlled unfreeze. | Batch 6 blocker |
| `docs/AI/Commands/*.md` | Command inputs |AI-DOS planning/status paths | invalid universalization in reusable commands | Refactor command preconditions to target root. | Batch 6 |
| `docs/AI/Workflows/*.md` | Workflow steps |AI-DOS planning/status paths | invalid universalization in reusable workflows | Refactor workflow state resolution. | Batch 6 |
| `docs/AI/Templates/Planning/*.md` | Planning templates | AI-DOS planning/status paths | frozen template portability defect if normative | Human Governance controlled unfreeze if edits are required. | Batch 6 blocker |
| `docs/AI/Templates/Project/*.md` | Project template docs | ProjectStatus / DevelopmentPhases assumptions | frozen template portability defect if normative | Refactor under controlled unfreeze. | Batch 6 blocker |
| `docs/AI/Specification/*.md` | RC2 specs | `docs/ProjectStatus.md` and RC2 paths | stale / RC2 residue | Merge valid unique content then remove or archive. | Batch 4 |
| `docs/AI/Validation/*.md` | RC2 validation docs | AI-DOS state paths | stale / RC2 residue | Merge valid checklist concepts into current validation owner; remove active source. | Batch 4 |
| `docs/AI/Testing/*.md` | scenarios | AI-DOS state paths | stale scenario residue | Archive if unique evidence; otherwise remove. | Batch 7 |
| `docs/ProjectStatus.md` | whole file | legacy status location | duplicate live-state path | Archive if unique historical traceability; otherwise remove after references fixed. | Batch 2 / 7 |

## 13. Parallel-System Findings

| ID | Canonical Owner | Competing Owner | Nature of Duplication | Unique Content | Disposition | Required Reference Updates | Risk |
|:---|:---|:---|:---|:---|:---|:---|:---|
| PS-001 | `AGENTS.md` | `docs/AI/README.md` RC2 reading order | Repository boot chain | Historical RC2 read order only | REFACTOR | Update README chain | High if agents load old chain. |
| PS-002 | `docs/AI/GOVERNANCE.md` | `docs/AI/Specification/GovernanceModel.md` | Governance hierarchy | RC2 examples | MERGE THEN REMOVE | README and specs | High. |
| PS-003 | `docs/AI/FrameworkGovernance.md` | RC2 governance specification | Decision policy | RC2 lifecycle wording | MERGE THEN REMOVE | Old spec consumers | High. |
| PS-004 | `docs/AI/Architecture/A.1-Constitution.md` | `docs/AI/Specification/Constitution.md` | Constitution | Historical RC2 principles if unique | ARCHIVE or MERGE THEN REMOVE | README | High. |
| PS-005 | M.0/M.1 | `FrameworkSpecification.md` | Semantic/artifact model | RC2 examples | MERGE THEN REMOVE | README/spec links | Medium. |
| PS-006 | STD-003 | `Specification/Terminology.md` | Terminology | RC2 glossary deltas | MERGE THEN REMOVE | README | Medium. |
| PS-007 | A.3 Runtime | `Specification/RuntimeModel.md` | Runtime | RC2 model examples | MERGE THEN REMOVE | README | High. |
| PS-008 | A.4 / A.5 Runtime family | Blueprint and old Architecture A.4 refs | Engine architecture | Planning history | ARCHIVE / REFACTOR | Broken links in reports | Medium. |
| PS-009 | System Layer | older workflows/lifecycle | Operational sequence | Scenario detail | MERGE THEN REMOVE | Workflows/testing | Medium. |
| PS-010 | AIFramework v2 | RC2 AIFramework/README wording | Framework entry | RC2 compatibility notes | REFACTOR | README | High. |
| PS-011 | AIOrchestrator v2 | Lifecycle README | Orchestration/release | Release policies | BLOCKED BY HUMAN GOVERNANCE | Lifecycle consumers | Medium. |
| PS-012 | AgentSystemPrompt v2 | CursorRules | Agent behavior/tooling | Cursor-specific examples | REFACTOR / REMOVE | Tooling refs | Low. |
| PS-013 | Commands | Specification command definitions | Command behavior | none material | REMOVE after refs fixed | Specification links | Low. |
| PS-014 | Templates README/freeze | `templates_margedmd.md` | Template library | none after equivalence check | REMOVE | Any generated refs | Low. |
| PS-015 | Project Templates | missing old ProjectTemplateArchitecture/Bootstrap/Checklist docs | Project bootstrap | historical adoption workflow | MERGE THEN REMOVE / REMOVE | README/certification refs | Medium. |
| PS-016 | Target repo planning | AI-DOS-specific paths in generic docs | Planning authority | self-hosting paths valid only for AI-DOS | REFACTOR / BLOCKED | Commands/workflows/templates/system | High for Axis Suite. |
| PS-017 | Validation Engine | RC2 Validation docs | Validation authority | checklist wording | MERGE THEN REMOVE | Validation README | Medium. |
| PS-018 | Certification Engine / STD-000 | RC2 Certification docs | Certification authority | readiness evidence | ARCHIVE | Certification refs | Medium. |

## 14. RC1 Inventory

| Path / Family | Claimed Status | Active Navigation? | Current Responsibility? | Harvest Status | Unique Content | References Pointing To It | Final Disposition |
|:---|:---|:---|:---|:---|:---|:---|:---|
| `docs/AI/Validation/*` RC1 references | RC2/legacy validation docs citing RC1 | Yes through old README/Validation index | No canonical current ownership | Partly harvested into Runtime validation and templates | Checklist wording only | README/Validation | MERGE THEN REMOVE |
| `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md` | Certification readiness evidence | Yes through old certification refs | Evidence only | Harvested into reports | Audit result traceability | Certification and reports | ARCHIVE |
| `docs/AI/Testing/*` | Scenario validation | Yes through old README | No | Partly represented in validation/review rules | Scenario examples | Testing README | ARCHIVE or REMOVE by file after batch review |
| `docs/AI/Lifecycle/*` | Release/lifecycle policy | Yes through old README | Possible lifecycle gap | Not fully harvested | Versioning/release support policy details | Lifecycle README | BLOCKED BY HUMAN GOVERNANCE |
| `docs/AI/Specification/FrameworkSpecification.md` | RC1/RC2 framework spec | Yes through old README | No | Partly harvested by M.0/M.1/Operational Core | Examples and old command taxonomy | README/spec links | MERGE THEN REMOVE |
| `docs/AI/Architecture/Reports/AI-DOS-v3-Authority-Alignment-Plan.md` | Authority alignment plan | No direct active boot | Evidence | Harvested by current governance docs | Decision traceability | Reports | ARCHIVE |

RC1 material should not be preserved merely for age. The only RC1-linked items requiring archive are evidence records where Git history alone would not show the review/migration decision context.

## 15. RC2 Inventory

| Path / Family | Active? | Competes with v2/v3 Current Owners? | Current Consumers | Unique Content | Evidence Only? | Disposition | References to Update |
|:---|:---|:---|:---|:---|:---|:---|:---|
| `docs/AI/README.md` RC2 sections | Yes | Yes | Agents using AI directory | Directory map, old read order | No | REFACTOR | Boot chain, Framework Map, Core Documents |
| `docs/AI/Specification/` | Yes through README | Yes | README, reports | RC2 terminology, governance, runtime, reference examples | Partly | MERGE THEN REMOVE | README, reports, certification |
| `docs/AI/Validation/` | Yes | Yes | README, commands, workflows | Validation checklist details | Partly | MERGE THEN REMOVE | Validation README, command refs |
| `docs/AI/Certification/` | Yes | Partly | README, reports | Readiness and adoption evidence | Yes | ARCHIVE / REMOVE | README, certification refs |
| `docs/AI/Lifecycle/` | Yes | Potentially, due lifecycle ownership gap | README | Release, compatibility, support policies | Not only evidence | BLOCKED BY HUMAN GOVERNANCE | README, operational docs |
| `docs/AI/Testing/` | Yes | Yes if treated as validation authority | README | Scenarios | Mostly evidence | ARCHIVE / REMOVE | README, testing refs |
| `docs/AI/Templates/Project/` | Yes | Partly old project-template architecture docs missing | Template users | Current template variants and selection guide | No | KEEP / BLOCKED BY HUMAN GOVERNANCE | Broken old links |
| `docs/ProjectStatus.md` | Yes by old references | Yes | README/old docs | historical status only | Possibly | ARCHIVE / REMOVE | All old status refs |
| `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` | Yes as evidence | No if evidence-scoped | Operational Core | Replacement mapping | Yes | ARCHIVE after replacement complete | AIFramework refs |
| Reports citing RC2 | No active authority if scoped | No | Governance evidence | Migration traceability | Yes | KEEP / ARCHIVE | Report indexes |

## 16. Transitional and Legacy Inventory

| Family | Evidence | Actual Role | Disposition |
|:---|:---|:---|:---|
| `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` | Replacement plan for AIFramework/Orchestrator/Prompt | Migration evidence | ARCHIVE after operational refs stop consuming it as active dependency. |
| `docs/AI/Roadmap/AI-DOS-v3-Master-Architecture-Development-Roadmap.md` | Older roadmap | Historical plan | ARCHIVE or REMOVE after v4 roadmap references are confirmed. |
| `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` | Blueprint planning input | Historical architecture planning | ARCHIVE. |
| `docs/AI/Architecture/Reports/*Migration*` | Migration reports/plans | Evidence | ARCHIVE when superseded by this audit and current docs. |
| `docs/AI/Architecture/Reports/*Classification*` | Earlier classification audit | Evidence | ARCHIVE unless superseded fully by this report. |
| RC2 Specification family | Old architecture/operational specification | Parallel owner | MERGE THEN REMOVE. |
| RC2 Testing scenarios | Scenario evidence | Historical validation examples | ARCHIVE / REMOVE by file. |
| RC2 Lifecycle | Release governance residue | Possible ownership gap | BLOCKED BY HUMAN GOVERNANCE. |

## 17. Merged and Temporary Artifact Inventory

| Path | Why It Exists | Referenced? | Unique Content | Content Exists in Canonical Files? | Safe to Remove? | Reference Updates |
|:---|:---|:---|:---|:---|:---|:---|
| `docs/AI/ai-margedmd.md` | Generated/merged combined AI corpus artifact; misspelled `marged` indicates temporary merge output. | No active canonical owner found in boot chain. | None presumed authoritative; must equivalence-check against source files before deletion. | Expected yes across `docs/AI/` source docs. | Yes after equivalence validation. | Remove any diagnostic refs if found. |
| `docs/AI/templates_margedmd.md` | Generated/merged Template Library corpus artifact. | No active canonical owner found in template index. | None presumed authoritative; must equivalence-check against Template Library files before deletion. | Expected yes across `docs/AI/Templates/`. | Yes after equivalence validation. | Remove any diagnostic refs if found. |
| Manual tree snapshots in `docs/AI/README.md` | RC2 directory map | Stale active navigation | No unique active authority | Current tree generated from repository | Refactor, not remove file. | Update README. |
| Older reports with completed work plans | Migration execution residue | Report-index/evidence only | Decision traceability varies | Current docs contain final state | Archive or remove per report. | Update report indexes if any. |

## 18. Navigation and README Inventory

| Path / Family | Navigation Role | Status | Findings | Disposition |
|:---|:---|:---|:---|:---|
| `AGENTS.md` | Repository bootloader | Current beta / pending approval note | Correct current boot path; annex links broken. | REFACTOR after approval decision; link fix. |
| `README.md` | Repository public README | General index | Contains planning/status paths; not authoritative boot. | REFACTOR. |
| `docs/AI/README.md` | AI directory index | Stale RC2 entry | Presents RC2 as active and old reading order. | REFACTOR. |
| `docs/AI/System/README.md` | System Layer index | Frozen | Must remain unchanged unless controlled unfreeze. | KEEP / BLOCKED if edits required. |
| `docs/AI/Runtime/README.md` | Runtime family index | Current normalized | Must remain unchanged in this task. | KEEP. |
| `docs/AI/Templates/README.md` | Template Library index | Frozen | Current owner; no modification in this task. | KEEP. |
| `docs/AI/Templates/Project/README.md` | Project template index | Frozen | Broken references to removed/renamed old template docs. | BLOCKED BY HUMAN GOVERNANCE. |
| `docs/AI/Validation/README.md` | RC2 validation index | Legacy active via old chain | Competes with Validation Engine if normative. | MERGE THEN REMOVE. |
| `docs/AI/Testing/README.md` | RC2 scenario index | Legacy active via old chain | Should not be active validation authority. | ARCHIVE / REMOVE. |
| `docs/AI/Lifecycle/README.md` | RC2 lifecycle index | Active via old chain | Lifecycle ownership unresolved. | BLOCKED BY HUMAN GOVERNANCE. |

## 19. Reports and Evidence Inventory

| Category | Files / Families | Classification | Disposition |
|:---|:---|:---|:---|
| Runtime reviews | `docs/AI/Runtime/Reports/*` | Required review/canonical/certification evidence | KEEP. |
| Template freeze records | `docs/AI/Templates/Reports/Template-Library-*` | Required freeze evidence | KEEP. |
| AGENTS v2 freeze | `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` | Required freeze evidence | KEEP. |
| Architecture migration reports | `docs/AI/Architecture/Reports/*Migration*`, `*Authority*`, `*Harvest*` | Historical migration evidence | ARCHIVE unless still directly consumed. |
| Standards remediation reports | `docs/AI/Architecture/Standards/Reports/*` | Standards compliance evidence | KEEP / ARCHIVE based on direct references. |
| RC2 certification reviews | `docs/AI/Certification/*` | Historical certification/adoption evidence | ARCHIVE after active refs removed. |
| Completed temporary work plans | Older phase/report plans fully reflected in canonical docs | Superseded recommendations | REMOVE when evidence is duplicated. |
| This report | `docs/AI/Architecture/Reports/AI-DOS-Repository-Rationalization-Audit.md` | Cleanup baseline | KEEP. |

## 20. Broken and Stale Reference Inventory

| Broken / Stale Class | Count / Evidence | Example | Cleanup Target |
|:---|:---|:---|:---|
| Total local Markdown references checked | 4,578 | Repository-wide link scan | Baseline. |
| Broken local Markdown references | 336 | Missing AGENTS annexes, old template files, wrong Runtime/Architecture paths, appendix relative paths | Batch 2 and Batch 8. |
| Missing AGENTS annex links | 5 | `./annexes/Annex-A-*` through `Annex-E-*` | REFACTOR root bootloader links after governance decision. |
| Old Project Template links | 17+ | `ProjectTemplateArchitecture.md`, `TemplateBootstrapWorkflow.md`, `TemplateAdoptionChecklist.md` | Batch 2 / 4. |
| Old Runtime Architecture path links | Multiple | `docs/AI/Architecture/A.4-*` from Runtime docs/reports | Batch 8; do not edit Runtime files without authorization. |
| A.5 stale numbering in reports | Multiple | `A.5.7-Memory`, `A.5.8-Review`, `A.5.9-Certification` | Batch 8 report cleanup. |
| Appendix relative path errors | Large subset | `./A.0-Framework-Audit.md`, `./STD-000-Framework-Standards.md` from appendix folder | Batch 8. |
| No incoming references | 12 Markdown files | Link graph scan | Assess as cleanup targets; do not infer inactive solely from no incoming links. |

Incoming-reference rule: files referenced only by legacy artifacts are not active solely due to those references. Cleanup batches must fix active navigation before deleting or archiving deeper files.

## 21. Content-Harvest Matrix

| Source Section / File | Unique Content | Validity | Target Owner / Target Section | Post-Merge Disposition |
|:---|:---|:---|:---|:---|
| `docs/AI/Specification/Constitution.md` | RC2 constitutional examples and constraints | Historical / partly valid | `docs/AI/Architecture/A.1-Constitution.md` appendices or architecture evidence archive | MERGE THEN REMOVE or ARCHIVE source. |
| `docs/AI/Specification/Terminology.md` | RC2 glossary deltas | Valid only if not conflicting with STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`, Section 24 Legacy Vocabulary or migration notes | MERGE THEN REMOVE. |
| `docs/AI/Specification/RuntimeModel.md` | Old runtime model diagrams/examples | Valid as examples only if aligned with A.3 | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` appendix or separate archived evidence; Runtime edits require authorization | MERGE THEN REMOVE after controlled review. |
| `docs/AI/Specification/GovernanceModel.md` | Old governance lifecycle examples | Valid if aligned with Framework Governance | `docs/AI/FrameworkGovernance.md` relevant lifecycle/conflict sections or archive evidence | MERGE THEN REMOVE. |
| `docs/AI/Specification/FrameworkSpecification.md` | Command taxonomy and framework process examples | Partly valid | `docs/AI/AIFramework.md`, `docs/AI/Commands/`, `docs/AI/Workflows/` | MERGE THEN REMOVE. |
| `docs/AI/Validation/ValidationChecklistTemplate.md` | Checklist wording | Valid if genericized | `docs/AI/Templates/Validation/ValidationTemplate.md` or Validation Engine guidance | MERGE THEN REMOVE. |
| `docs/AI/Validation/ValidationLevels.md` | Validation level taxonomy | Valid if aligned with Validation Engine | `docs/AI/Runtime/A.5.6-Validation-Engine-RFC.md` or validation template; Runtime edits require authorization | MERGE THEN REMOVE. |
| `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md` | Certification readiness evidence | Historical evidence | Evidence archive; do not merge into current certification authority | ARCHIVE. |
| `docs/AI/Certification/ProjectTemplateAdoptionReview.md` | Project template adoption findings | Evidence; some still relevant | Template Library report archive and Project Template README fixes under controlled unfreeze | ARCHIVE / MERGE THEN REMOVE. |
| `docs/AI/Lifecycle/Versioning.md`, `ReleasePolicy.md`, `CompatibilityPolicy.md`, `SupportPolicy.md` | Release/lifecycle policies | Potentially valid but ownership unresolved | Human Governance decision: STD-000 lifecycle sections, Framework Governance, or retained Lifecycle owner | BLOCKED BY HUMAN GOVERNANCE. |
| `docs/AI/Testing/Scenario-*.md` | Scenario examples | Evidence only | Validation/review evidence archive if unique | ARCHIVE / REMOVE. |
| `docs/AI/Tooling/CursorRules.md` | Cursor-specific behavior | Tool-specific, stale | AgentSystemPrompt or remove if obsolete | REFACTOR / REMOVE. |

## 22. Definitive Disposition Matrix

| ID | Path / Family | Current Claimed Role | Actual Role | Canonical Owner | Disposition | Unique Content | Required Action | Reference Updates | Risk | Human Approval | Cleanup Batch |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| D-001 | `AGENTS.md` | Repository bootloader | Current bootloader | Itself | REFACTOR | Boot rules valid; annex links broken | Fix links/status after approval context | Annex refs | Medium | Yes if status/promotion changes | 2 |
| D-002 | `README.md` | Repository README | General navigation | Root README | REFACTOR | Public overview | Align planning path language | Path refs | Low | No | 2 |
| D-003 | `docs/AI/GOVERNANCE.md` | Governance Atlas | Current navigation | Itself | KEEP | Navigation authority | None | None | Low | No | 9 |
| D-004 | `docs/AI/FrameworkGovernance.md` | Governance policy | Current decision policy | Itself | KEEP | Decision policy | None | None | Low | No | 9 |
| D-005 | `docs/DevelopmentPhases/ProjectStatus.md` | Live state | AI-DOS self-hosting state | Itself | KEEP | Operational state | Do not edit | None | High | Yes for any edit | 9 |
| D-006 | `docs/ProjectStatus.md` | Old ProjectStatus | Duplicate/stale status | Current ProjectStatus | ARCHIVE | Historical state if not in Git history summary | Stop active refs; archive or remove after refs fixed | Many old refs | Medium | Possibly | 7 |
| D-007 | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Roadmap | AI-DOS self-hosting roadmap | Itself | KEEP | Roadmap | Do not edit | None | High | Yes for any edit | 9 |
| D-008 | `docs/DevelopmentPhases/Phase-*.md` | Phase detail docs | Planning evidence | DevelopmentPhases roadmap | REFACTOR / ARCHIVE | Some phase detail | Classify current vs superseded | Roadmap refs | Medium | No unless roadmap state | 7 |
| D-009 | `docs/AI/README.md` | AI Framework RC2 entry | Stale active navigation | AIFramework + Governance Atlas | REFACTOR | Directory map | Replace RC2 read order | Many | High | No | 2 |
| D-010 | `docs/AI/AIFramework.md` | Operational Core entry | Current v2 draft owner | Itself | REFACTOR | Valid operational model | Genericize target-project path wording | Path refs | Medium | No | 6 |
| D-011 | `docs/AI/AIOrchestrator.md` | Orchestration | Current v2 draft owner | Itself | REFACTOR | Valid orchestration | Genericize target-project path wording | Path refs | Medium | No | 6 |
| D-012 | `docs/AI/AgentSystemPrompt.md` | Agent behavior | Current v2 draft owner | Itself | REFACTOR | Valid behavior contract | Genericize target-project path wording | Path refs | Medium | No | 6 |
| D-013 | `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` | Replacement matrix | Migration evidence | Operational Core docs | ARCHIVE | Replacement traceability | Stop active dependency after completion | AIFramework metadata | Low | No | 7 |
| D-014 | `docs/AI/System/` | System Layer | Frozen current family | System README + files | KEEP | Frozen owner docs | No change | None | High | Yes for edits | 9 |
| D-015 | `docs/AI/System/*` path portability defects | Frozen system details | Potential portability defect | System Layer | BLOCKED BY HUMAN GOVERNANCE | Valid frozen content | Decide controlled unfreeze if needed | Path refs | High | Yes | 6 |
| D-016 | `docs/AI/Runtime/README.md` | Runtime index | Current normalized owner | Itself | KEEP | Current index | No change | None | High | Yes for edits | 9 |
| D-017 | `docs/AI/Runtime/A.3`-`A.5.12` | Runtime/Engine RFCs | Current architecture | Runtime family | KEEP | Current architecture | No change | Report refs later | High | Yes for edits | 9 |
| D-018 | `docs/AI/Runtime/Reports/` | Runtime evidence | Required evidence | Runtime family | KEEP | Review evidence | Fix stale report links only later | Broken A.5 refs | Medium | No for reports | 8 |
| D-019 | `docs/AI/Templates/README.md` | Template Library index | Frozen owner | Itself | KEEP | Current template map | No change | None | High | Yes for edits | 9 |
| D-020 | `docs/AI/Templates/` current templates | Template Library | Frozen current library | Template README | KEEP | Template corpus | No change | None | High | Yes for edits | 9 |
| D-021 | `docs/AI/Templates/Project/` stale project refs | Project bootstrap | Frozen portability issue | Project Template README | BLOCKED BY HUMAN GOVERNANCE | Current templates plus stale names | Decide controlled unfreeze | Broken ProjectTemplate refs | High | Yes | 6 |
| D-022 | `docs/AI/templates_margedmd.md` | Merged artifact | Temporary generated duplicate | Template source files | REMOVE | None after equivalence | Delete in Batch 1 | Any refs | Low | No | 1 |
| D-023 | `docs/AI/ai-margedmd.md` | Merged artifact | Temporary generated duplicate | AI source files | REMOVE | None after equivalence | Delete in Batch 1 | Any refs | Low | No | 1 |
| D-024 | `docs/AI/Architecture/Agents/AGENTS-v2.md` | Agent architecture | Current core | Itself | KEEP | Current architecture | No change | None | High | Yes for frozen core edits | 9 |
| D-025 | `docs/AI/Architecture/Agents/AGENTS-v2-*` | Agent v2 core family | Current/frozen | AGENTS-v2.md | KEEP | Current architecture | No change | None | High | Yes for edits | 9 |
| D-026 | `docs/AI/Architecture/Agents/AGENTS-v1-draft.md` | v1 draft | Historical reference | AGENTS v2 / archive | ARCHIVE | Historical architecture | Stop active reads | Governance refs | Low | No | 3 |
| D-027 | `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` | Freeze review | Required freeze evidence | AGENTS v2 | KEEP | Freeze evidence | None | None | Low | No | 9 |
| D-028 | `docs/AI/Meta/` | Meta models | Current architecture | M.0/M.1 | KEEP | Semantic/artifact models | None | None | High | No | 9 |
| D-029 | `docs/AI/Architecture/Standards/STD-000*` | Standards governance | Current standard | STD-000 | KEEP | Standards rules | Fix broken appendix refs later | Appendix refs | Medium | No | 8 |
| D-030 | `docs/AI/Architecture/Standards/STD-003*` | Terminology | Current standard | STD-003 | KEEP | Canonical terminology | None | None | Medium | No | 9 |
| D-031 | `docs/AI/Architecture/Standards/STD-010*` | Metadata | Current standard | STD-010 | KEEP | Metadata rules | None | None | Medium | No | 9 |
| D-032 | Other standards/schemas | Standards support | Current support/evidence | Standards library | KEEP / REFACTOR | Schemas/reports | Fix stale links | Broken schema refs | Medium | No | 8 |
| D-033 | `docs/AI/Specification/` | RC2 specs | Parallel architecture/ops | Current architecture + Operational Core | MERGE THEN REMOVE | See harvest matrix | Merge exact valid content then delete sources | README/spec refs | High | No | 4 |
| D-034 | `docs/AI/Validation/` | RC2 validation | Parallel validation | Validation Engine/templates | MERGE THEN REMOVE | Checklist/levels | Merge then delete sources | README/commands | High | No | 4 |
| D-035 | `docs/AI/Certification/` | RC2 certification | Evidence, not active authority | Certification Engine / evidence archive | ARCHIVE | Readiness evidence | Archive after refs fixed | README/cert refs | Medium | No | 4 |
| D-036 | `docs/AI/Lifecycle/` | RC2 lifecycle | Possible valid lifecycle owner gap | Human decision required | BLOCKED BY HUMAN GOVERNANCE | Release/versioning policies | Decide owner before action | README/lifecycle refs | Medium | Yes | 4 |
| D-037 | `docs/AI/Testing/` | RC2 test scenarios | Historical validation examples | Validation/review evidence | ARCHIVE / REMOVE | Scenarios | Archive unique; remove duplicated | README/testing refs | Low | No | 7 |
| D-038 | `docs/AI/Commands/` | Commands | Current but stale path assumptions | Commands family | REFACTOR | Command rules | Genericize target root | Path refs | Medium | No | 6 |
| D-039 | `docs/AI/Workflows/` | Workflows | Current but stale path assumptions | Workflow family | REFACTOR | Workflow rules | Genericize target root | Path refs | Medium | No | 6 |
| D-040 | `docs/AI/Checklists/` | Checklist | Support artifact | Review/validation owners | REFACTOR | Review checklist | Align owner refs | Links | Low | No | 5 |
| D-041 | `docs/AI/Tooling/CursorRules.md` | Cursor tooling | Stale tool-specific rules | AgentSystemPrompt | REMOVE / REFACTOR | Cursor examples | Merge if valid, else delete | Tooling refs | Low | No | 5 |
| D-042 | `docs/AI/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md` | Program roadmap | Planning evidence/current program view | DevelopmentPhases/Governance | KEEP / REFACTOR | Program context | Align FrameworkGovernance link | Broken link | Low | No | 8 |
| D-043 | `docs/AI/Roadmap/AI-DOS-v3-Master-Architecture-Development-Roadmap.md` | Old roadmap | Historical roadmap | Current roadmap | ARCHIVE | Historical sequence | Archive or remove if duplicated | Roadmap refs | Low | No | 7 |
| D-044 | `docs/AI/Architecture/Blueprint/` | Blueprint RFC | Historical planning input | Architecture reports/archive | ARCHIVE | Blueprint traceability | Archive; fix broken meta links if retained | Many broken links | Medium | No | 7 |
| D-045 | `docs/AI/Architecture/Reports/*` prior reports | Reports | Evidence / superseded plans | Report archive | ARCHIVE / REMOVE | Varies | Keep unique evidence; remove duplicate plans | Report refs | Low | No | 7 |
| D-046 | `docs/AI/Architecture/Appendix/` | Appendices | Support evidence | Parent architecture docs | KEEP / REFACTOR | Evidence tables | Fix relative links | Many broken links | Medium | No | 8 |
| D-047 | `node_modules/**/*.md` | Dependency docs | Third-party package docs | Package manager | KEEP | Dependency docs | Exclude from governance cleanup | None | Low | No | 9 |

## 23. Exact KEEP List

- `docs/AI/GOVERNANCE.md`.
- `docs/AI/FrameworkGovernance.md`.
- `docs/DevelopmentPhases/ProjectStatus.md`.
- `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`.
- `docs/AI/System/README.md`, `BootSequence.md`, `ExecutionSequence.md`, `DecisionModel.md`, `AuthorityModel.md`, `SourceOfTruth.md`, `ContextAssembly.md`, `SystemLayerFreeze.md`.
- `docs/AI/Runtime/README.md` and `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` through `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md`.
- `docs/AI/Runtime/Reports/` current review/canonical/certification evidence.
- `docs/AI/Templates/README.md`, Template Library standards, current template families, and `docs/AI/Templates/Reports/Template-Library-*` freeze/audit records.
- `docs/AI/Architecture/Agents/AGENTS-v2.md`, AGENTS v2 core/supporting documents, and `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md`.
- `docs/AI/Meta/M.0-Framework-Meta-Model.md` and `docs/AI/Meta/M.1-Artifact-Meta-Model.md`.
- `docs/AI/Architecture/A.1-Constitution.md` and current standards STD-000, STD-001, STD-002, STD-003, STD-010 and required schemas/appendices after link refactor.
- Third-party dependency Markdown under `node_modules/` as package contents outside AI-DOS governance cleanup.

## 24. Exact REFACTOR List

- `AGENTS.md` for broken annex references and approval-state clarity, subject to Human Governance status context.
- `README.md` for planning-path wording.
- `docs/AI/README.md` to remove RC2 active status, stale reading order, stale directory map, and old ProjectStatus path.
- `docs/AI/AIFramework.md`, `docs/AI/AIOrchestrator.md`, `docs/AI/AgentSystemPrompt.md` to clarify target-project root resolution while preserving AI-DOS self-hosting.
- `docs/AI/Commands/*.md` to remove invalid universalization ofAI-DOS planning paths.
- `docs/AI/Workflows/*.md` to resolve target-project ProjectStatus / DevelopmentPhases through target bootloader.
- `docs/AI/Checklists/AgentReviewChecklist.md` if owner references point to RC2 validation/review.
- `docs/AI/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md` broken `FrameworkGovernance.md` link.
- Standards appendices and schemas with broken relative links.
- Runtime and standards reports with stale references, excluding Runtime README/RFC content unless separately authorized.

## 25. Exact MERGE THEN REMOVE List

- `docs/AI/Specification/Constitution.md` into `docs/AI/Architecture/A.1-Constitution.md` appendix/evidence if unique constitutional examples remain.
- `docs/AI/Specification/Terminology.md` into STD-003 legacy vocabulary/migration notes if non-conflicting deltas remain.
- `docs/AI/Specification/FrameworkSpecification.md` into `docs/AI/AIFramework.md`, Commands, and Workflows for still-valid examples.
- `docs/AI/Specification/RuntimeModel.md` into A.3-compatible evidence or archived runtime example set after authorization.
- `docs/AI/Specification/GovernanceModel.md` into Framework Governance only for still-valid lifecycle/conflict examples.
- `docs/AI/Specification/ReferenceArchitecture.md` into current architecture evidence if unique non-obsolete diagrams remain.
- `docs/AI/Validation/AIFrameworkValidation.md`, `ValidationLifecycle.md`, `ValidationLevels.md`, `ValidationChecklistTemplate.md`, and `ValidationCertification.md` into Validation Engine/templates and review/certification engines as applicable.
- Old command definitions embedded in `docs/AI/Specification/FrameworkSpecification.md` into `docs/AI/Commands/` only where still valid.
- Unique Project Template adoption workflow details from old missing-target references into current Project Template selection guide/README under controlled unfreeze.

## 26. Exact ARCHIVE List

Every archive item below requires retention because Git history alone does not provide convenient decision context, migration rationale, review verdicts, or freeze evidence in active governance workflows.

- `docs/ProjectStatus.md` if it contains historical operational-state transitions not fully represented in current `docs/DevelopmentPhases/ProjectStatus.md`; Git history alone is insufficient because old documents actively reference this path.
- `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` after operational replacement is complete; Git history alone is insufficient because the replacement rationale is a governance/evidence artifact.
- `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md`; Git history alone is insufficient because it records certification-readiness findings.
- `docs/AI/Certification/ProjectTemplateAdoptionReview.md`; Git history alone is insufficient because it records project-template adoption findings and broken-reference context.
- `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; Git history alone is insufficient because v1 is a historical architecture reference consumed by AGENTS v2 comparisons.
- `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md`; Git history alone is insufficient because it is a named planning input.
- `docs/AI/Roadmap/AI-DOS-v3-Master-Architecture-Development-Roadmap.md`; Git history alone is insufficient because it captures v3 planning context superseded by v4.
- Prior architecture migration, authority-cleanup, harvest, classification, consistency, and transitional verification reports under `docs/AI/Architecture/Reports/` when they contain unique decision traceability.
- Standards compliance audit/remediation reports under `docs/AI/Architecture/Standards/Reports/` if current standards reference their findings.
- `docs/AI/Testing/Scenario-*.md` only for scenarios that provide unique validation evidence not represented in current validation/review templates.

## 27. Exact REMOVE List

Each removal requires final reference check and content-equivalence confirmation in its cleanup batch.

- `docs/AI/ai-margedmd.md`: generated merged duplicate; no current ownership; expected content exists in source files; mandatory traceability absent after equivalence check.
- `docs/AI/templates_margedmd.md`: generated merged duplicate; no current ownership; expected content exists in Template Library source files; mandatory traceability absent after equivalence check.
- RC2 Specification source files after exact valid content is merged: no current responsibility remains; active authority belongs to A.1, M.0, M.1, STD-003, STD-010, Runtime, Governance, and Operational Core.
- RC2 Validation source files after exact valid checklist/level content is merged: no current responsibility remains; current authority belongs to Validation Engine/templates and review/certification engines.
- RC2 Testing scenarios whose examples are duplicated by current validation/review artifacts: no current responsibility and no mandatory traceability after archive selection.
- Completed temporary work plans fully reflected in current canonical/current documents and retained reports: no unique content or mandatory traceability remains.
- Broken references to nonexistent Project Template files after current Project Template docs are corrected: no content target exists and no mandatory traceability remains.
- Tooling-specific stale rules if superseded by AgentSystemPrompt and not needed for active tools.

## 28. Human Governance Blockers

| ID | Blocker | Exact Decision Required | Controlled Unfreeze Required? |
|:---|:---|:---|:---|
| HGB-001 | System Layer path portability edits may be needed for target-project root resolution. | Decide whether frozen System Layer may be minimally edited to replace AI-DOS-specific planning paths with target-root resolution while preserving AI-DOS self-hosting. | Yes, if edits are authorized. |
| HGB-002 | Template Library and Project Template path/link portability defects exist in frozen docs. | Decide whether frozen Template Library / Project Template docs may be minimally edited for stale links and target-project state resolution. | Yes, if edits are authorized. |
| HGB-003 | AGENTS v2 Core is frozen but may need reference clarifications if target-project integration text hardcodes AI-DOS paths. | Decide whether AGENTS v2 Core remains unchanged until later phase or receives controlled reference corrections. | Yes, if edits are authorized. |
| HGB-004 | Lifecycle ownership gap remains after RC2 cleanup. | Decide whether Lifecycle remains as a current owner, is merged into Framework Governance/STD-000, or is archived. | No unless frozen destination selected. |
| HGB-005 | Legacy `docs/ProjectStatus.md` disposition depends on historical traceability value. | Decide archive versus removal after references are fixed. | No. |
| HGB-006 | Runtime A.3 harvest target for old RuntimeModel examples would touch protected Runtime RFCs. | Decide whether old examples are archived separately or merged into Runtime under controlled authorization. | Yes, if Runtime edits are authorized. |
| HGB-007 | Root `AGENTS.md` beta versus approved authority note may conflict with operational boot use. | Decide approval/promotion state and whether annex links are required. | No, but bootloader edit approval is governance-sensitive. |
| HGB-008 | Reports/evidence archive location is not yet defined. | Decide archive directory/naming policy before moving evidence. | No. |

## 29. Ordered Cleanup Batches

| Batch | Exact Files / Families | Action Per File | Prerequisite | References to Update | Validation | Rollback Risk | Completion Criteria |
|:---|:---|:---|:---|:---|:---|:---|:---|
| 1 — Obvious Temporary and Merged Artifacts | `docs/AI/ai-margedmd.md`; `docs/AI/templates_margedmd.md` | Equivalence-check, then remove | Confirm no unique content and no active refs | Any refs to merged artifacts | Link scan; content equivalence; git diff | Low | Both generated merged files removed; no broken active refs. |
| 2 — Broken Navigation and Stale References | `AGENTS.md`; `README.md`; `docs/AI/README.md`; active README/index files | Refactor links and active read orders | No frozen edits without approval | Old ProjectStatus, old template files, broken annex links | Markdown link scan | Medium | Active boot/navigation no longer loads RC2 chain. |
| 3 — RC1 Residues | RC1-linked validation/lifecycle/spec/testing/report files | Merge exact valid content, archive evidence, remove duplicate source | Batch 2 complete | RC1 refs | RC1 search count reduced to evidence-only | Medium | No RC1 active authority remains. |
| 4 — RC2 Specification Residues | `docs/AI/Specification/`; `docs/AI/Validation/`; `docs/AI/Certification/`; `docs/AI/Lifecycle/`; `docs/AI/Testing/`; Project Template old refs | Merge/archive/remove by matrix | Batch 2 complete; HGB-004 resolved | README, certification, validation, testing refs | RC2 search; link scan | High | RC2 no longer active; evidence retained only where justified. |
| 5 — Parallel Operational Core | `docs/AI/AIFramework.md`; `AIOrchestrator.md`; `AgentSystemPrompt.md`; Commands; Workflows; Tooling; Checklists | Refactor ownership and stale path wording; remove duplicate tool docs | Batches 2-4 enough to avoid stale refs | RC2 owners, AI-DOS path universalization | Path search; boot-chain review | Medium | One Operational Core surface remains. |
| 6 — Target-Project Path Normalization | Operational Core, Commands, Workflows, possibly frozen System/Templates/AGENTS v2 | Refactor non-frozen docs; execute controlled unfreeze decisions if approved | HGB-001/002/003 decisions | ProjectStatus/DevelopmentPhases hardcoded refs | Path search; Axis Suite readiness checklist | High | Generic docs resolve target state through target root; AI-DOS self-hosting preserved. |
| 7 — Duplicate Support and Evidence Artifacts | Prior reports, old roadmaps, blueprint, testing scenarios, duplicated plans | Archive or remove by evidence rules | Archive policy HGB-008 | Report/index refs | Incoming-reference scan | Medium | Evidence separated from active authority. |
| 8 — Final Reference Cleanup | Standards appendices, schemas, Runtime reports, Project Template refs, appendix links | Refactor broken/stale links | Prior dispositions complete | All remaining broken local links | Markdown link scan | Medium | Broken active links eliminated or evidence-scoped. |
| 9 — Repository-Wide Integrity Validation | Full repository | Validate authority, ownership, links, metadata, boot chain, frozen boundaries | Batches 1-8 complete | N/A | Full scans and git diff checks | Low | Repository consistency report passes. |
| 10 — Self-Hosting and Axis Suite Readiness Check | Root boot, Operational Core, System/Templates/Project templates, target-project examples | Validate no invalid AI-DOS path universalization | Batch 9 complete | Any remaining target path refs | Self-hosting and Axis Suite dry-run checklist | Medium |AI-DOS self-hosting works; Axis Suite can own its planning/state through its root docs. |

## 30. Validation Plan

1. Re-run complete repository tree inventory using `find` while pruning `.git`.
2. Re-run Markdown file inventory across repository.
3. Re-run README/index inventory and inspect all active README/index files.
4. Re-run RC1 and RC2 searches.
5. Re-run legacy/transitional/merged/generated term searches.
6. Re-run ProjectStatus / DevelopmentPhases path searches.
7. Re-run local Markdown link checker.
8. Re-run incoming-reference scan for every cleanup target.
9. Confirm Runtime README and Runtime RFC family diffs are empty.
10. Confirm Template Library diffs are empty.
11. Confirm System Layer diffs are empty.
12. Confirm no source code or configuration changed.
13. Confirm exactly one report file was created.
14. Run `git diff --check`.
15. Confirm `git status --short` contains only this report before commit.

## 31. Expected Final Repository Surface

Expected final active surface after all cleanup batches:

- Root: one repository bootloader plus one public README.
- Governance: Governance Atlas and Framework Governance with no parallel RC2 governance owner.
- Planning/state: target-root planning model; AI-DOS self-hosting uses `docs/DevelopmentPhases/`; no generic Framework universalization of AI-DOS paths.
- Architecture: A.1, M.0, M.1, Standards, Runtime, Engine, AGENTS v2, and required appendices/evidence.
- Operational Core: AIFramework, AIOrchestrator, AgentSystemPrompt, Commands, Workflows, and scoped templates with one owner per responsibility.
- Frozen families: System Layer, Template Library, AGENTS v2 Core retained and only modified under Human Governance controlled unfreeze.
- Evidence: freeze/certification/review/migration evidence retained only when unique and separated from active navigation.
- Removed surface: merged artifacts, fully superseded RC2 sources, duplicate plans, stale generated snapshots, and obsolete links.

Expected reduction is 73 Markdown files/families from active navigation/removal candidates, with approximately 153 active Markdown files/families remaining plus archived evidence outside active boot chains.

## 32. Axis Suite Readiness Impact

Axis Suite readiness improves when:

- Generic Framework and Operational Core documents no longer require `docs/DevelopmentPhases/ProjectStatus.md` or `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` in every target repository.
- Target-project state is resolved through the target repository root `AGENTS.md`.
-AI-DOS self-hosting remains explicit as an example/instance, not a universal rule.
- Project Templates explain required target repository documents without hardcodingAI-DOS planning filenames.
- RC2 operational chains no longer bypass the current bootloader and Governance Atlas.

Without cleanup, Axis Suite would inherit staleAI-DOS path assumptions and parallel RC2 operational authorities.


## 32A. Revision 1 — Target Repository Awareness Amendment

### 32A.1 Architectural Background

The original Repository Rationalization Audit was completed beforeAI-DOS formally distinguished Framework truth, target-project truth,AI-DOS self-hosting, and external Target Repository operation. Revision 1 incorporates the later architectural decisions from A.2 Operational Boundary, Target Repository Resolution, System Layer Freeze, and Target Project Path Resolution.

This amendment does not replace the original audit, does not perform a new repository inventory, and does not create a new disposition matrix from scratch. It revises only findings whose cleanup decision changes becauseAI-DOS can now be either the Framework provider operating on itself or the Framework provider operating on another project repository.

### 32A.2 Target Repository Operating Model

AI-DOS may operate in two valid modes:

1. **AI-DOS Self-Hosting** — the active Target Repository is theAI-DOS repository. In this mode, `docs/DevelopmentPhases/ProjectStatus.md`, `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`,AI-DOS architecture paths, andAI-DOS validation rules are valid target-project resources.
2. **External Target Repository** — the active Target Repository is Axis Suite or another project repository. In this mode, target-project state, roadmap, architecture, source roots, validation commands, and protected areas must be declared by the external repository, normally through that repository's root `AGENTS.md`, and resolved relative to that external root.

The audit must therefore distinguish aAI-DOS physical path used as aAI-DOS self-hosting fact from the same path used as a universal Framework requirement.

### 32A.3 Revised Classification Rules

| Classification | Rule | Cleanup Meaning |
|:---|:---|:---|
| `VALID_FORGE_SELF_HOSTING` | AI-DOS-specific project paths that are correct only when theAI-DOS repository is the active Target Repository. | Keep or label as self-hosting; do not remove solely because the path is AI-DOS-specific. |
| `INVALID_GENERAL_FRAMEWORK_HARDCODE` | AI-DOS-specific project paths embedded in reusable Framework, Operational Core, Command, Workflow, Template, or procedure language as though every target project usedAI-DOS paths. | Refactor to Target Repository declaration/resolution language. |
| `TARGET_PROJECT_DECLARATION_REQUIRED` | Framework documents that should obtain project paths through the active Target Repository instead of declaring aAI-DOS physical path as universal. | Replace universal physical-path requirements with logical target-resource declarations. |
| `HISTORICAL_REFERENCE` | Historical evidence, audit evidence, migration records, or superseded reports that remain valid as evidence but not as current execution routing. | Preserve as evidence or archive; do not treat as active boot-chain authority. |
| `FROZEN_DOCUMENT` | Documents requiring controlled Human Governance unfreeze before modification. | Do not edit in cleanup batches unless controlled unfreeze is explicitly authorized. |

### 32A.4 Revised Disposition Rules

1. Do not reclassify aAI-DOS path as invalid when it is scoped toAI-DOS self-hosting.
2. Reclassify reusable Framework or operational language as `TARGET_PROJECT_DECLARATION_REQUIRED` when it should resolve project state through the active Target Repository.
3. Preserve historical references as `HISTORICAL_REFERENCE` unless they are still loaded by an active boot/navigation chain.
4. Preserve all frozen documents unchanged unless Human Governance authorizes controlled unfreeze.
5. Execute target-path normalization before broad RC1/RC2 cleanup so later cleanup does not accidentally remove valid self-hosting evidence or preserve invalid universalization.

### 32A.5 Required Amendment Analysis — Affected Findings

| Finding | Original Classification / Decision | New Classification / Decision | Reason |
|:---|:---|:---|:---|
| D-002 `README.md` | REFACTOR for planning-path wording | `TARGET_PROJECT_DECLARATION_REQUIRED` for generic wording; `VALID_FORGE_SELF_HOSTING` forAI-DOS examples | Public repository guidance may describeAI-DOS self-hosting but must not universalizeAI-DOS planning paths for external targets. |
| D-005 `docs/DevelopmentPhases/ProjectStatus.md` | KEEP live state | `VALID_FORGE_SELF_HOSTING` / KEEP | This path is correct whenAI-DOS is the Target Repository and must not be removed as a hardcode. |
| D-006 `docs/ProjectStatus.md` | ARCHIVE | `HISTORICAL_REFERENCE` / ARCHIVE or REMOVE after references fixed | Legacy path evidence remains historical; it is not current target-project resolution. |
| D-007 `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | KEEP roadmap | `VALID_FORGE_SELF_HOSTING` / KEEP | This path is correct forAI-DOS self-hosting and is not a universal external-target roadmap path. |
| D-009 `docs/AI/README.md` | REFACTOR stale active navigation | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Active read orders must distinguish Framework reading from target-project state resolution. |
| D-010 `docs/AI/AIFramework.md` | REFACTOR path wording | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Operational Core should consume the active Target Repository declaration for project state. |
| D-011 `docs/AI/AIOrchestrator.md` | REFACTOR path wording | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Orchestration must not imposeAI-DOS project-state paths on Axis Suite or other targets. |
| D-012 `docs/AI/AgentSystemPrompt.md` | REFACTOR path wording | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Agent-facing rules must load target truth from the active Target Repository. |
| D-015 `docs/AI/System/*` path portability defects | BLOCKED BY HUMAN GOVERNANCE | `FROZEN_DOCUMENT` plus possible `TARGET_PROJECT_DECLARATION_REQUIRED` / controlled unfreeze only | System Layer is frozen; any path-resolution correction requires controlled unfreeze. |
| D-021 `docs/AI/Templates/Project/` stale project refs | BLOCKED BY HUMAN GOVERNANCE | `FROZEN_DOCUMENT` plus possible `TARGET_PROJECT_DECLARATION_REQUIRED` / controlled unfreeze only | Project Template docs are frozen and may need target declaration wording, not direct execution now. |
| D-038 `docs/AI/Commands/` | REFACTOR stale path assumptions | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Commands should consume resolved target paths from the active Target Repository. |
| D-039 `docs/AI/Workflows/` | REFACTOR stale path assumptions | `TARGET_PROJECT_DECLARATION_REQUIRED` / REFACTOR | Workflows should route ProjectStatus and DevelopmentPhases through target declarations. |
| D-042 program roadmap | KEEP / REFACTOR | `VALID_FORGE_SELF_HOSTING` when scoped to AI-DOS; `HISTORICAL_REFERENCE` where superseded | Roadmap content may remain valid asAI-DOS planning context rather than external-target truth. |
| D-045 prior reports | ARCHIVE / REMOVE | `HISTORICAL_REFERENCE` / ARCHIVE unless duplicated | Prior reports may retain evidence even when target-path assumptions are superseded. |

### 32A.6 Decision Matrix Amendment

| Original Decision | Revised Decision | Reason |
|:---|:---|:---|
| REMOVE AI-DOS-specific path evidence solely because it is AI-DOS-specific | KEEP (Self Hosting) |AI-DOS paths are valid whenAI-DOS is the active Target Repository. |
| REFACTOR generic Framework path references | TARGET_PROJECT_DECLARATION_REQUIRED | Reusable Framework text must resolve project paths from the active target declaration. |
| MERGE THEN REMOVE RC2 materials containing path history | KEEP or ARCHIVE as `HISTORICAL_REFERENCE` where unique | Historical evidence remains valid even if not active execution authority. |
| BLOCKED BY HUMAN GOVERNANCE for frozen System/Templates edits | FROZEN_DOCUMENT with controlled-unfreeze prerequisite | Frozen documents cannot be edited by cleanup batches without explicit authorization. |
| REPLACEAI-DOS planning paths everywhere | REPLACE only invalid universalization; KEEP self-hosting paths | Blanket replacement would breakAI-DOS self-hosting. |

### 32A.7 Cleanup Batch Impact

| Original Batch | Status | Revision 1 Impact |
|:---|:---|:---|
| 1 — Obvious Temporary and Merged Artifacts | REQUIRES REVISION | No longer first. Execute only after Target Path Normalization so equivalence checks do not ignore target-repository wording. |
| 2 — Broken Navigation and Stale References | REQUIRES REVISION | Split target-path normalization from general navigation cleanup; avoid removing valid self-hosting paths. |
| 3 — RC1 Residues | UNCHANGED | Still valid after target-path normalization. |
| 4 — RC2 Specification Residues | REQUIRES REVISION | Preserve unique target-path history as `HISTORICAL_REFERENCE`; do not merge/remove before target-path normalization. |
| 5 — Parallel Operational Core | REQUIRES REVISION | Operational Core path wording should be normalized as part of the first target-path batch. |
| 6 — Target-Project Path Normalization | REQUIRES REVISION | Promoted to first execution step and renamed Target Path Normalization; non-frozen changes precede controlled unfreeze. |
| 7 — Duplicate Support and Evidence Artifacts | UNCHANGED | Still occurs after RC cleanup and archive-policy decisions. |
| 8 — Final Reference Cleanup | UNCHANGED | Still follows disposition execution. |
| 9 — Repository-Wide Integrity Validation | REQUIRES REVISION | Should occur before repository freeze and include target-path validation. |
| 10 — Self-Hosting and Axis Suite Readiness Check | REQUIRES REVISION | Becomes the Axis Suite Pilot readiness gate after repository freeze. |

### 32A.8 Validation Impact

Validation for subsequent cleanup must verify both modes:

1.AI-DOS self-hosting still resolvesAI-DOS ProjectStatus and DevelopmentPhases correctly.
2. External Target Repository operation does not inheritAI-DOS physical planning paths as universal requirements.
3. Frozen System Layer, Template Library, and AGENTS v2 Core documents remain unchanged unless controlled unfreeze is authorized.
4. Historical references are labeled or scoped as evidence, not active execution routing.
5. `git diff --name-status` for each batch matches the batch's authorized file set.

### 32A.9 Next Execution Order

The revised execution order after Revision 1 is:

1. **Target Path Normalization** — non-frozen target-path wording first; preserveAI-DOS self-hosting.
2. **Controlled Unfreeze (when required)** — System Layer, Template Library, Project Templates, or AGENTS v2 Core only if Human Governance explicitly authorizes.
3. **Cleanup Batches** — execute temporary-artifact, navigation, RC1/RC2, Operational Core, evidence, and reference cleanup in revised order after target-path assumptions are corrected.
4. **Repository Freeze** — freeze the rationalizedAI-DOS repository after validation.
5. **Axis Suite Pilot** — validate external Target Repository operation only afterAI-DOS self-hosting and target-resolution behavior are stable.

## 33. Audit Verdict

**READY FOR CLEANUP WITH GOVERNANCE BLOCKERS**

The repository has sufficient evidence to begin ordered cleanup batches. Human Governance blockers apply to frozen System Layer, Template Library / Project Templates, AGENTS v2 Core, Lifecycle ownership, legacy ProjectStatus disposition, Runtime harvest target handling, bootloader approval-state/link corrections, and archive-location policy.

## 34. Recommended First Cleanup Batch

Begin with **Target Path Normalization** under the follow-on task **AI-DOS.V2.TARGET-PATH-002 — NON-FROZEN TARGET-PATH NORMALIZATION**.

| Step | Action | Prerequisite | Validation |
|:---|:---|:---|:---|
| 1 | Normalize non-frozen reusable Framework, Operational Core, Command, Workflow, README, and report wording that universalizesAI-DOS planning paths. | Revision 1 amendment accepted as the active audit baseline. | Path search; self-hosting check; external Target Repository declaration check. |
| 2 | PreserveAI-DOS self-hosting paths where they are scoped toAI-DOS as the active Target Repository. | No broad replacement ofAI-DOS paths. | Confirm `VALID_FORGE_SELF_HOSTING` references remain accurate. |
| 3 | Identify any frozen System Layer, Template Library, Project Template, or AGENTS v2 Core changes that require controlled unfreeze, but do not execute them. | Human Governance controlled-unfreeze decision. | `git diff --name-status`; frozen-family diff check. |

The original Batch 1 temporary-artifact removal remains valid but is no longer the first execution step. It should run after target-path assumptions are normalized so later cleanup preserves bothAI-DOS self-hosting and external Target Repository operation.

# AI-DOS Template Library Filesystem Inventory and Disposition

## Review Status

READY FOR HUMAN GOVERNANCE REVIEW

## Scope

This report inventories the current Template Library under `docs/AI/Templates/`, distinguishes active normalized families from unnormalized catalog material, identifies components that are not registered by their current family contracts, and assigns a bounded disposition without moving, renaming, deleting, normalizing, certifying, or freezing any artifact.

## Method

The inventory used two independent evidence passes:

1. changed-file lists from all 209 Forge AI pull requests were scanned for `docs/AI/Templates/` paths;
2. every discovered path was fetched from `master` to distinguish current files from historical or removed files.

The history scan found 91 candidate paths. Master verification confirmed 87 current files and 4 historical or removed README paths:

- `docs/AI/Templates/README.md`;
- `docs/AI/Templates/Planning/README.md`;
- `docs/AI/Templates/Review/README.md`;
- `docs/AI/Templates/Validation/README.md`.

All 87 current files were then inspected for purpose, semantic entry status, authority language, Target coupling, stale paths, and overlap with current family contracts.

This method covers every Template path observable in the complete Forge AI PR history and verifies each candidate against current `master`. It does not claim knowledge of a file that was never represented in repository PR history.

## Inventory Summary

| Classification | Directories / role | Files | Disposition |
|:---|:---|---:|:---|
| Library control | Root `TemplateLibrary.md`, `TemplateIndex.md` | 2 | RETAIN |
| Active normalized families | Planning, Validation, Review, Certification, Workflow, Context, Knowledge, Memory | 20 | RETAIN BOUNDED STATUS |
| Unnormalized catalog candidates | Agents, Architecture, Integration, Migration, Platform, Project | 34 | KEEP AND NORMALIZE CANDIDATE |
| Boundary-conflict catalog candidates | MultiAgent, Runtime, Swarm | 10 | HOLD FOR OWNERSHIP REVIEW |
| Unregistered components inside normalized directories | Context, Knowledge, Memory, Workflow | 16 | HOLD; DO NOT ACTIVATE |
| Standards | TPL-000, TPL-001 | 2 | TPL-000 RETAIN; TPL-001 MATERIAL REBASE REQUIRED |
| Reports stored inside Templates | Global Audit, Freeze Review, Freeze | 3 | RELOCATE / HISTORICAL EVIDENCE CANDIDATE |
| **Total** |  | **87** |  |

## Directory Inventory and Disposition

| Directory | Files | Semantic entry | Current classification | Disposition |
|:---|---:|:---|:---|:---|
| Root | 2 | `TemplateLibrary.md`, `TemplateIndex.md` | Library control | RETAIN |
| Agents | 5 | Missing | Unnormalized catalog family | KEEP; MATERIAL FAMILY NORMALIZATION |
| Architecture | 6 | Missing; legacy `README.md` remains | Unnormalized catalog family | KEEP; CREATE `ArchitectureFamily.md`; REMOVE README AUTHORITY ROLE |
| Certification | 2 | `CertificationFamily.md` | Active normalized family | RETAIN |
| Context | 5 | `ContextFamily.md` | 2 active files plus 3 unregistered files | RETAIN FAMILY; HOLD UNREGISTERED FILES |
| Integration | 4 | Missing | Unnormalized catalog family | KEEP; MATERIAL FAMILY NORMALIZATION |
| Knowledge | 5 | `KnowledgeFamily.md` | 2 active files plus 3 unregistered files | RETAIN FAMILY; HOLD UNREGISTERED FILES |
| Memory | 5 | `MemoryFamily.md` | 2 active files plus 3 unregistered files | RETAIN FAMILY; HOLD UNREGISTERED FILES |
| Migration | 4 | Missing | Unnormalized catalog family | KEEP; MATERIAL FAMILY NORMALIZATION |
| MultiAgent | 3 | Missing | Boundary-conflict catalog family | HOLD; RESOLVE AGAINST AGENTS AND SWARM |
| Planning | 6 | `PlanningFamily.md` | Active normalized family | RETAIN |
| Platform | 4 | Missing | Unnormalized catalog family | KEEP; MATERIAL FAMILY NORMALIZATION |
| Project | 11 | Missing; legacy `README.md` remains | Unnormalized catalog family | KEEP; CREATE `ProjectFamily.md`; REMOVE README AUTHORITY ROLE |
| Reports | 3 | Not applicable | Evidence stored inside Template product tree | RELOCATE OR MARK HISTORICAL |
| Review | 2 | `ReviewFamily.md` | Active normalized family | RETAIN |
| Runtime | 2 | Missing | Likely overlap with Context and Runtime authority | HOLD; OWNERSHIP AND REHOME REVIEW |
| Standards | 2 | Not a family | Template standards | TPL-000 RETAIN; TPL-001 REBASE |
| Swarm | 5 | Missing | Boundary-conflict catalog family | HOLD; RESOLVE AGAINST AGENTS AND MULTIAGENT |
| Validation | 2 | `ValidationFamily.md` | Active normalized family | RETAIN |
| Workflow | 9 | `WorkflowFamily.md` | 2 active files plus 7 unregistered files | RETAIN FAMILY; HOLD UNREGISTERED FILES |

## Exact Current File Inventory

### Library Control

- `docs/AI/Templates/TemplateLibrary.md`
- `docs/AI/Templates/TemplateIndex.md`

### Agents — 5

- `docs/AI/Templates/Agents/AgentCapabilityProfileTemplate.md`
- `docs/AI/Templates/Agents/AgentExecutionReportTemplate.md`
- `docs/AI/Templates/Agents/AgentHandoffTemplate.md`
- `docs/AI/Templates/Agents/AgentRoleTemplate.md`
- `docs/AI/Templates/Agents/AgentTaskContractTemplate.md`

### Architecture — 6

- `docs/AI/Templates/Architecture/ADRTemplate.md`
- `docs/AI/Templates/Architecture/ArchitectureTemplate.md`
- `docs/AI/Templates/Architecture/GovernanceTemplate.md`
- `docs/AI/Templates/Architecture/README.md`
- `docs/AI/Templates/Architecture/RFCTemplate.md`
- `docs/AI/Templates/Architecture/SpecificationTemplate.md`

### Certification — 2

- `docs/AI/Templates/Certification/CertificationFamily.md`
- `docs/AI/Templates/Certification/CertificationTemplate.md`

### Context — 5

- `docs/AI/Templates/Context/ContextFamily.md`
- `docs/AI/Templates/Context/ContextTemplate.md`
- `docs/AI/Templates/Context/ContextAssemblyTemplate.md`
- `docs/AI/Templates/Context/ContextEngineTemplate.md`
- `docs/AI/Templates/Context/ContextPacketTemplate.md`

### Integration — 4

- `docs/AI/Templates/Integration/ConnectorSpecificationTemplate.md`
- `docs/AI/Templates/Integration/ExternalToolContractTemplate.md`
- `docs/AI/Templates/Integration/IntegrationContractTemplate.md`
- `docs/AI/Templates/Integration/IntegrationRegistryTemplate.md`

### Knowledge — 5

- `docs/AI/Templates/Knowledge/KnowledgeFamily.md`
- `docs/AI/Templates/Knowledge/KnowledgeTemplate.md`
- `docs/AI/Templates/Knowledge/KnowledgeArchitectureTemplate.md`
- `docs/AI/Templates/Knowledge/KnowledgeRegistryTemplate.md`
- `docs/AI/Templates/Knowledge/KnowledgeSourceTemplate.md`

### Memory — 5

- `docs/AI/Templates/Memory/MemoryFamily.md`
- `docs/AI/Templates/Memory/MemoryTemplate.md`
- `docs/AI/Templates/Memory/MemoryArchitectureTemplate.md`
- `docs/AI/Templates/Memory/MemoryRecordTemplate.md`
- `docs/AI/Templates/Memory/MemoryRegistryTemplate.md`

### Migration — 4

- `docs/AI/Templates/Migration/CompatibilityMatrixTemplate.md`
- `docs/AI/Templates/Migration/DeprecationNoticeTemplate.md`
- `docs/AI/Templates/Migration/MigrationPlanTemplate.md`
- `docs/AI/Templates/Migration/MigrationReportTemplate.md`

### MultiAgent — 3

- `docs/AI/Templates/MultiAgent/MultiAgentConflictReportTemplate.md`
- `docs/AI/Templates/MultiAgent/MultiAgentCoordinationPlanTemplate.md`
- `docs/AI/Templates/MultiAgent/MultiAgentSyncReportTemplate.md`

### Planning — 6

- `docs/AI/Templates/Planning/PlanningFamily.md`
- `docs/AI/Templates/Planning/HistoricalCapabilityTemplate.md`
- `docs/AI/Templates/Planning/PhaseTemplate.md`
- `docs/AI/Templates/Planning/RoadmapTemplate.md`
- `docs/AI/Templates/Planning/StageTemplate.md`
- `docs/AI/Templates/Planning/VisionTemplate.md`

### Platform — 4

- `docs/AI/Templates/Platform/AdapterBoundaryTemplate.md`
- `docs/AI/Templates/Platform/AdapterCapabilityMapTemplate.md`
- `docs/AI/Templates/Platform/AdapterValidationTemplate.md`
- `docs/AI/Templates/Platform/PlatformAdapterTemplate.md`

### Project — 11

- `docs/AI/Templates/Project/CLIProjectTemplate.md`
- `docs/AI/Templates/Project/GenericProjectTemplate.md`
- `docs/AI/Templates/Project/LaravelProjectTemplate.md`
- `docs/AI/Templates/Project/LibraryProjectTemplate.md`
- `docs/AI/Templates/Project/NodeProjectTemplate.md`
- `docs/AI/Templates/Project/ProjectTemplateSelectionGuide.md`
- `docs/AI/Templates/Project/README.md`
- `docs/AI/Templates/Project/ReactProjectTemplate.md`
- `docs/AI/Templates/Project/SaaSProjectTemplate.md`
- `docs/AI/Templates/Project/SymfonyProjectTemplate.md`
- `docs/AI/Templates/Project/WordPressProjectTemplate.md`

### Reports — 3

- `docs/AI/Templates/Reports/Template-Library-Freeze-Review.md`
- `docs/AI/Templates/Reports/Template-Library-Freeze.md`
- `docs/AI/Templates/Reports/Template-Library-Global-Audit.md`

### Review — 2

- `docs/AI/Templates/Review/ReviewFamily.md`
- `docs/AI/Templates/Review/ReviewTemplate.md`

### Runtime — 2

- `docs/AI/Templates/Runtime/DecisionContextTemplate.md`
- `docs/AI/Templates/Runtime/RuntimeContextTemplate.md`

### Standards — 2

- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`

### Swarm — 5

- `docs/AI/Templates/Swarm/SwarmExecutionReportTemplate.md`
- `docs/AI/Templates/Swarm/SwarmMergeReportTemplate.md`
- `docs/AI/Templates/Swarm/SwarmPlanTemplate.md`
- `docs/AI/Templates/Swarm/SwarmReviewReportTemplate.md`
- `docs/AI/Templates/Swarm/SwarmTaskDecompositionTemplate.md`

### Validation — 2

- `docs/AI/Templates/Validation/ValidationFamily.md`
- `docs/AI/Templates/Validation/ValidationTemplate.md`

### Workflow — 9

- `docs/AI/Templates/Workflow/WorkflowFamily.md`
- `docs/AI/Templates/Workflow/WorkflowTemplate.md`
- `docs/AI/Templates/Workflow/ApprovalTemplate.md`
- `docs/AI/Templates/Workflow/ChecklistTemplate.md`
- `docs/AI/Templates/Workflow/CommandTemplate.md`
- `docs/AI/Templates/Workflow/DecisionTemplate.md`
- `docs/AI/Templates/Workflow/ExecutionPlanTemplate.md`
- `docs/AI/Templates/Workflow/HandoffTemplate.md`
- `docs/AI/Templates/Workflow/ReviewTemplate.md`

## Blocking Findings

### F-001 — Prior Whole-Library Audit and Freeze Evidence Is Stale

The reports under `docs/AI/Templates/Reports/` rely on the removed top-level Template README, family README authority, legacy TPL-000, stale Framework Governance roles, ProjectStatus and DevelopmentPhases inputs, and a conclusion that all requested families were aligned.

Those assumptions conflict with the accepted Template Library contract and the current inventory. The reports must not be used as current whole-library certification or freeze evidence.

### F-002 — Nine Directories Lack Semantic Family Entries

Agents, Architecture, Integration, Migration, MultiAgent, Platform, Project, Runtime, and Swarm have no `<FamilyName>Family.md` entry.

Their component files remain catalog candidates only.

### F-003 — Sixteen Files Are Unregistered Inside Normalized Directories

Current family contracts do not register:

- Context: `ContextAssemblyTemplate.md`, `ContextEngineTemplate.md`, `ContextPacketTemplate.md`;
- Knowledge: `KnowledgeArchitectureTemplate.md`, `KnowledgeRegistryTemplate.md`, `KnowledgeSourceTemplate.md`;
- Memory: `MemoryArchitectureTemplate.md`, `MemoryRecordTemplate.md`, `MemoryRegistryTemplate.md`;
- Workflow: `ApprovalTemplate.md`, `ChecklistTemplate.md`, `CommandTemplate.md`, `DecisionTemplate.md`, `ExecutionPlanTemplate.md`, `HandoffTemplate.md`, `ReviewTemplate.md`.

These files must not inherit normalized status from their parent directories.

### F-004 — TPL-001 Is Incompatible with Accepted TPL-000

TPL-001 still depends on the removed TPL-000 lifecycle, taxonomy, compliance, directory, certification, approval, promotion, and inheritance model. It also contains Forge AI planning references and stale Framework-era authority.

TPL-001 requires material rebase before `Architecture/RFCTemplate.md` can be normalized.

Correction status: the bounded TPL-001 material rebase and RFC component reconciliation are implemented in a review branch. Human Governance acceptance and Architecture family normalization remain required.

### F-005 — README Entry Semantics Remain in Architecture and Project

`Architecture/README.md` and `Project/README.md` still act as family navigation or authority artifacts. They conflict with the accepted semantic-entry convention.

### F-006 — Several Catalog Families Have Ownership Overlap

- MultiAgent and Swarm overlap each other and the Agents domain.
- Runtime context templates overlap the Context family, Runtime architecture, and operational Context Assembly.
- Workflow's unregistered Review and Approval templates overlap normalized Review and authority-owned approval semantics.
- Context, Knowledge, and Memory architecture/registry components may duplicate Engine, Registry, persistence, or architecture owners.

No automatic normalization is permitted until these overlaps are resolved.

## Disposition Register

| Scope | Disposition | Required next action |
|:---|:---|:---|
| Root library control | RETAIN | Keep as current entry and authority boundary. |
| Eight active normalized families | RETAIN BOUNDED | Preserve only registered component status. |
| Agents | KEEP AND NORMALIZE CANDIDATE | Create `AgentsFamily.md`; rebase all five components. |
| Architecture | KEEP AND NORMALIZE CANDIDATE | Rebase TPL-001 first; create `ArchitectureFamily.md`; reconcile README and RFC component. |
| Integration | KEEP AND NORMALIZE CANDIDATE | Create `IntegrationFamily.md`; separate structure from registry/provider authority. |
| Migration | KEEP AND NORMALIZE CANDIDATE | Create `MigrationFamily.md`; preserve compatibility and evidence boundaries. |
| Platform | KEEP AND NORMALIZE CANDIDATE | Create `PlatformFamily.md`; separate adapter documentation from loading/dispatch authority. |
| Project | KEEP AND NORMALIZE CANDIDATE | Create `ProjectFamily.md`; integrate selection semantics; remove README authority role; keep technology templates optional. |
| MultiAgent + Swarm | HOLD FOR JOINT REVIEW | Resolve whether they are separate families, subfamilies, or components of Agents. |
| Runtime | HOLD FOR REHOME REVIEW | Determine whether each context artifact belongs in Context, Runtime documentation, or is obsolete. |
| Unregistered Context components | HOLD | Review each against Context, System Layer, and Context Engine owners. |
| Unregistered Knowledge components | HOLD | Review each against Knowledge Engine, Registry, truth, and persistence owners. |
| Unregistered Memory components | HOLD | Review each against Memory Engine, Registry, retention, and persistence owners. |
| Unregistered Workflow components | HOLD | Review for merge, rehome, or retirement against Planning, Review, Validation, Commands, and Human Governance. |
| TPL-001 | MATERIAL REBASE IMPLEMENTED — REVIEW REQUIRED | Review the bounded rebase and reconciled Architecture RFC catalog component. |
| Template Reports | RELOCATE / HISTORICAL | Move evidence outside Template product tree or mark historical and superseded. |

## Recommended Execution Order

1. Accept this inventory and disposition as the horizontal baseline.
2. Materially rebase TPL-001 and reconcile `Architecture/RFCTemplate.md`.
3. Normalize Architecture with a semantic family entry and remove README authority semantics.
4. Normalize Agents.
5. Jointly review MultiAgent and Swarm ownership before either family is activated.
6. Review Runtime and the unregistered Context, Knowledge, Memory, and Workflow components.
7. Normalize Integration, Migration, Platform, and Project in bounded family passes.
8. Relocate or historically classify the three stale Template reports.
9. Re-run full filesystem, path, authority, and Target-independence validation.
10. Only then consider whole-library review; certification or freeze remains a separate Human Governance decision.

## Final Determination

```text
CURRENT FILESYSTEM INVENTORY
    87 FILES VERIFIED ON MASTER

ACTIVE NORMALIZED FAMILY SCOPE
    20 FILES
    BOUNDED STATUS RETAINED

UNNORMALIZED OR UNREGISTERED SCOPE
    60 FILES
    CORRECTION / REVIEW REQUIRED

LIBRARY CONTROL
    2 FILES

STANDARDS
    2 FILES

STALE TEMPLATE REPORTS
    3 FILES

WHOLE TEMPLATE LIBRARY
    NOT CERTIFIED
    NOT FROZEN

READY FOR HUMAN GOVERNANCE REVIEW
```

This report does not move, rename, delete, normalize, approve, certify, promote, freeze, release, execute, persist, or mutate any product or Target artifact.

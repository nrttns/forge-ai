# AI-DOS Repository Architecture & Disposition Audit v2

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.REPOSITORY-AUDIT-002` |
| Title | AI-DOS Repository Architecture & Disposition Audit v2 |
| Version | `2.0.0-draft` |
| Status | Draft Audit Report |
| Canonical Status | Authoritative cleanup reference when accepted by Human Governance; not cleanup execution authority |
| Classification | Repository Architecture and Disposition Audit |
| Document Type | Architecture Audit Report |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Phase 8 — Self-Hosting Project Governance Realignment |
| Traceability ID | `AI-DOS.V2.REPOSITORY-AUDIT-002` |
| Scope | Repository architecture reclassification after the AI-DOS / Target Repository operating model, TargetRepositoryResolution, System Layer extension and re-freeze, Target Repository path model, self-hosting project governance, and Project / Framework separation. |
| Out of Scope | Cleanup execution, repository migration, redesign, Runtime redesign, Engine redesign, System redesign, document rewrite, implementation, ProjectStatus update, DevelopmentPhases update, file movement, and prior-audit modification. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md` |
| Normative References | `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/AI/Architecture/Reports/Target-Project-Path-Resolution.md`; `docs/AI/Architecture/Reports/AI-DOS-Repository-Rationalization-Audit.md`; `docs/AI/Architecture/Reports/AI-DOS-Repository-Classification-Audit-v1.0.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Current repository inventory, AI-DOS / Target Repository boundary, Target Repository resolution model, System Layer freeze record, ProjectStatus frozen-area policy, DevelopmentPhases phase sequence, previous repository rationalization audit, repository classification audit, Target Project Path Resolution, and Human Governance task instruction. |
| Consumes | Repository evidence, architecture authorities, System Layer authorities, template library evidence, runtime evidence, operational-layer evidence, roadmap evidence, development-phase evidence, and prior audit findings. |
| Produces | Repository architecture assessment, family inventory, classification matrix, disposition matrix, cleanup batches, desired repository map, freeze readiness assessment, Axis Suite readiness assessment, blockers, and recommendations. |
| Related Specifications | `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/TargetRepositoryResolution.md`; `docs/AI/System/SystemLayerFreeze.md`; `docs/AI/Templates/Reports/Template-Library-Freeze.md`; `docs/AI/Runtime/Reports/Runtime-RFC-Normalization-Report.md` |
| Supersedes | Repository Rationalization Audit as the active cleanup reference; the prior audit remains historical evidence. |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance acceptance, validation of ownership separation, duplicate-authority findings, cleanup-readiness batches, freeze-readiness blockers, and Axis Suite readiness blockers. |
| Certification Status | Not certified; audit-only evidence artifact. |

---

## 1. Executive Summary

This audit is the definitive repository architecture reclassification for theAI-DOS repository after the AI-DOS architectural evolution. It supersedes the previous Repository Rationalization Audit as the active cleanup reference while preserving that previous audit as historical evidence.

The repository is **not ready for Repository Freeze**. It is close enough for a final controlled cleanup task, but the current layout still contains legacy specifications, duplicated or historical planning records, obsolete migration reports, duplicate report families, future frozen Agent / Swarm / MultiAgent planning artifacts, and root-level Target Project governance resources that need explicit final disposition.

The repository is **not ready to become the Axis Suite provider**. AI-DOS / Target Repository separation is architecturally present, and self-hosting path mappings are documented, but provider readiness requires repository cleanup, freeze, external Target Repository boot validation, and explicit Axis Suite preparation.

Recommended next step only:

```text
AI-DOS.V2.REPOSITORY-CLEANUP-001 — EXECUTE FINAL REPOSITORY CLEANUP
```

Do not begin cleanup from this audit.

---

## 2. Repository Architecture Assessment

### 2.1 Current Operating Model

The current operating model is AI-DOS / Target Repository separation:

1. **AI-DOS Framework** owns reusable Framework truth: governance, Constitution, Meta Models, Standards, Runtime Architecture, Engine Architecture, System Layer, Commands, Workflows, Templates, and validation / review / certification models.
2. **AI-DOS Target Project** ownsAI-DOS self-hosting project truth: root `AGENTS.md`,AI-DOS ProjectStatus, DevelopmentPhases, Roadmap, repository state, cleanup queue, frozen areas, and self-hosting operational decisions.
3. **AI-DOS Agent** consumes both and produces task-scoped execution evidence only.

### 2.2 Assessment Result

| Area | Assessment | Result |
|:---|:---|:---|
| Repository ownership | Framework and Target Project ownership are now explicitly separated by A.2, ProjectStatus, and DevelopmentPhases. | PASS WITH CLEANUP FINDINGS |
| Framework / Target Project separation | Separation is documented, but older repository locations still blur Framework assets andAI-DOS project-governance assets. | PASS WITH STRUCTURAL FINDINGS |
| Authority consistency | Primary authority chain is coherent; legacy and historical artifacts must be prevented from appearing active. | PASS WITH BLOCKERS |
| Duplicate authority | No intentional active duplicate Framework authority should remain, but `docs/AI/Specification/` and historical roadmap / report artifacts can be misread as active authority. | BLOCKED UNTIL CLEANUP |
| Duplicate ownership | Ownership is mostly clear in current authorities; older operational and template artifacts often carry legacy ownership assumptions. | NEEDS CLEANUP |
| Parallel Framework | A parallel legacy Framework specification hierarchy remains in `docs/AI/Specification/`. | BLOCKER |
| Obsolete active planning | Multiple roadmap and DevelopmentPhases-era records remain as evidence but need clearer archive / historical disposition. | BLOCKER |
| Obsolete active Runtime | Active Runtime RFC family is coherent; runtime reports and normalization evidence are historical / reference-only. | PASS WITH EVIDENCE CLEANUP |
| Obsolete active System | System Layer is re-frozen after TargetRepositoryResolution; no System redesign is authorized. | PASS |
| Repository layout consistency | Mostly coherent under `docs/AI`, but project-governance resources and reports need final structure clarification. | NEEDS CLEANUP |
| Self-hosting consistency | Self-hosting mapping is documented; cleanup must preserve AI-DOS-specific status and roadmap paths. | PASS |
| Cleanup readiness | Ready for a controlled cleanup task after Human Governance authorization. | READY WITH BATCH PLAN |
| Repository freeze readiness | Not ready. | FAIL |
| Axis Suite readiness | Not ready. | FAIL |

---

## 3. Repository Family Inventory

| Family | Current Repository Location | Owner | Purpose | Authority | Lifecycle | Target Repository Relationship | AI-DOS Relationship | Cleanup Action |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| AI root | `docs/AI/*.md` | Mixed: Framework Governance / Operational maintainers | Framework entry, operational compatibility, governance atlas. | Mixed Framework authority and frozen operational compatibility. | Active / frozen compatibility. | Consumed byAI-DOS self-hosting and external Target Repositories. | Core AI-DOS provider content. | KEEP / KEEP_FROZEN |
| Architecture | `docs/AI/Architecture/` | Framework Governance | Constitution, AI-DOS boundary, audits, appendices, schemas. | Framework architecture authority and evidence. | Active draft plus evidence. | Target Repositories consume architecture, do not own it. | Core AI-DOS Framework. | KEEP |
| Runtime | `docs/AI/Runtime/` | Framework Architecture Team | Runtime and Engine RFC family. | Framework Runtime / Engine architecture. | Draft / frozen architecture evidence. | External Target Repositories consume; do not redefine. | AI-DOS Framework. | KEEP_FROZEN |
| System | `docs/AI/System/` | AI Operational Layer / Human Governance | Boot, target resolution, authority, context, decision, execution procedures. | System Layer procedure authority. | Re-frozen after extension. | Resolves Target Repository resources. | AI-DOS operating procedure layer. | KEEP_FROZEN |
| Templates | `docs/AI/Templates/` | Framework Architecture Team | Reusable document and operational templates. | Template Library authority / compatibility. | Frozen normalized library. | Target Repositories may consume and copy. | Shared AI-DOS operational asset. | KEEP_FROZEN |
| Commands | `docs/AI/Commands/` | AI Operational Layer | Agent command patterns. | Operational compatibility. | Frozen / compatibility. | May be consumed by Target Repository workflows. | Shared operational asset. | KEEP_FROZEN |
| Workflows | `docs/AI/Workflows/` | AI Operational Layer | Task planning, task generation, ProjectStateUpdater workflow. | Operational compatibility. | Frozen / controlled. | Target Repository may invoke or adapt with governance. | Shared operational asset. | KEEP_FROZEN |
| Standards | `docs/AI/Architecture/Standards/` | Framework Governance | Metadata, terminology, discovery, knowledge graph, standards governance. | Framework Standards. | Active draft / candidate authority. | Consumed by Target Repositories and AI-DOS documents. | AI-DOS Framework core. | KEEP |
| Reports | `docs/AI/Architecture/Reports/`, `*/Reports/` | Report-specific owners | Audit, review, freeze, normalization, migration evidence. | Evidence only unless explicitly accepted as active cleanup reference. | Historical / reference / active audit. | SupportsAI-DOS self-hosting decisions. | Evidence asset. | REFERENCE_ONLY / ARCHIVE |
| Roadmap | `docs/Roadmap/` |AI-DOS Target Project Governance |AI-DOS project roadmap. |AI-DOS Target Project roadmap. | Active Target Project planning. |AI-DOS self-hosting project truth. | Not universal AI-DOS path. | KEEP_SELF_HOSTING |
| DevelopmentPhases | `docs/DevelopmentPhases/` |AI-DOS Target Project Governance |AI-DOS phase sequence and historical development evidence. |AI-DOS Target Project planning / state support. | Active plus historical. |AI-DOS self-hosting project truth. | Not universal external Target Repository authority. | KEEP_SELF_HOSTING / ARCHIVE |
| ProjectStatus | `docs/DevelopmentPhases/ProjectStatus.md` |AI-DOS Target Project Governance | LiveAI-DOS operational state. | Live project state, not architecture. | Live operational state. |AI-DOS self-hosting project truth. | Consumed by AI-DOS while self-hosting. | KEEP_SELF_HOSTING |
| Migration | `docs/AI/Templates/Migration/`, migration reports | Framework Architecture Team | Migration templates and historical migration evidence. | Template / evidence only. | Frozen / historical. | Target Repositories may consume templates, not history. | Shared asset and evidence. | KEEP_FROZEN / ARCHIVE |
| Planning | `docs/AI/Templates/Planning/`, `docs/DevelopmentPhases/`, reports | Mixed | Planning templates andAI-DOS plans. | Template authority or project planning. | Mixed active / historical. | Project-specific plans belong to Target Project. | Templates are AI-DOS assets. | KEEP_SELF_HOSTING / ARCHIVE |
| Operational | `docs/AI/Operational/`, `docs/AI/AIFramework.md`, `AIOrchestrator.md`, `AgentSystemPrompt.md` | AI Operational Layer | Legacy operational core and replacement matrix. | Frozen operational compatibility. | Frozen / replacement evidence. | Target Repositories consume only if authorized. | AI-DOS compatibility layer. | KEEP_FROZEN / REFERENCE_ONLY |
| Meta | `docs/AI/Meta/` | Framework Governance | M.0 Framework and M.1 Artifact models. | Framework Meta authority. | Active draft / candidate. | Consumed by all Target Repository-facing assets. | AI-DOS Framework core. | KEEP |
| Agents | `docs/AI/Architecture/Agents/` | Framework Architecture Team | Future AGENTS v2 and historical v1 architecture. | Frozen future architecture / evidence. | Frozen. | Not active implementation authority. | Future AI-DOS capability. | KEEP_FROZEN / REFERENCE_ONLY |
| Integration | `docs/AI/Templates/Integration/` | Framework Architecture Team | Integration templates. | Template authority. | Frozen normalized library. | Reusable by Target Repositories. | Shared operational asset. | KEEP_FROZEN |
| Platform | `docs/AI/Templates/Platform/` | Framework Architecture Team | Platform templates. | Template authority. | Frozen; Platform Adapters future frozen. | Reusable only when activated. | Shared operational asset. | KEEP_FROZEN |
| Knowledge | `docs/AI/Templates/Knowledge/`, STD-001 | Framework Governance | Knowledge templates and knowledge graph standard. | Standard / template authority. | Active standard; frozen templates. | Reusable by Target Repositories. | AI-DOS Framework / shared asset. | KEEP |
| Memory | `docs/AI/Templates/Memory/`, A.5.9 | Framework Architecture Team | Memory templates and Memory Engine RFC. | Engine RFC / template authority. | Frozen draft architecture. | Reusable after activation. | AI-DOS Framework. | KEEP_FROZEN |
| Validation | `docs/AI/Validation/`, `docs/AI/Templates/Validation/` | Framework Governance / Operational maintainers | Validation model and templates. | Validation compatibility / template authority. | Frozen / compatibility. | Target Repositories consume validation patterns. | Shared operational asset. | KEEP_FROZEN |
| Swarm | `docs/AI/Templates/Swarm/`, Agent future docs | Framework Architecture Team | Future Swarm templates / planning evidence. | Future frozen architecture / templates. | Frozen future scope. | Not active Target Repository scope. | Future AI-DOS capability. | KEEP_FROZEN / REFERENCE_ONLY |
| Context | `docs/AI/Templates/Context/`, `docs/AI/System/ContextAssembly.md`, A.5.1 | Framework Architecture Team / System Layer | Context templates, context procedure, Context Engine RFC. | Mixed System / Engine / template authority. | Frozen. | Consumed during target context assembly. | AI-DOS Framework / System asset. | KEEP_FROZEN |
| MultiAgent | `docs/AI/Templates/MultiAgent/`, Agent future docs | Framework Architecture Team | Future multi-agent assets. | Future frozen architecture / templates. | Frozen future scope. | Not active implementation. | Future AI-DOS capability. | KEEP_FROZEN / REFERENCE_ONLY |
| Project | `docs/AI/Templates/Project/`, `docs/DevelopmentPhases/`, `docs/Roadmap/` | Mixed Framework /AI-DOS Target Project Governance | Project templates andAI-DOS project truth. | Templates plus target project state. | Mixed frozen / active self-hosting. | Project truth belongs to active Target Repository. | AI-DOS provides templates only. | KEEP_SELF_HOSTING / KEEP_FROZEN |
| Core | `docs/AI/Templates/Core/`, A.1, Meta, Standards | Framework Governance | Core Framework concepts and templates. | Framework core authority. | Active draft / frozen templates. | Consumed by Target Repositories. | AI-DOS Framework core. | KEEP |
| Lifecycle | `docs/AI/Lifecycle/` | AI Operational Layer / Framework Architecture Team | Compatibility, support, release, deprecation, versioning records. | Operational compatibility. | Frozen / compatibility. | Target Repositories may consume patterns. | Shared operational asset. | KEEP_FROZEN |
| Testing | `docs/AI/Testing/` | Framework Architecture Team | Scenario validation evidence and examples. | Evidence / validation compatibility. | Reference-only. | May inform Target Repository validation. | Shared evidence asset. | REFERENCE_ONLY |
| Tooling | `docs/AI/Tooling/` | AI Operational Layer | Cursor rules mirror. | Operational compatibility. | Frozen. | Tooling-specific target support. | Shared operational asset. | KEEP_FROZEN |
| Certification | `docs/AI/Certification/` | Framework Governance | Certification readiness and adoption review evidence. | Evidence only. | Historical / reference. | Supports Target Repository readiness decisions. | Evidence asset. | REFERENCE_ONLY |
| Checklists | `docs/AI/Checklists/` | Framework Governance | Agent review checklist. | Operational compatibility. | Frozen. | Reusable by Target Repositories. | Shared operational asset. | KEEP_FROZEN |
| Specification | `docs/AI/Specification/` | Historical / legacy | Legacy Framework specification hierarchy. | Superseded by current architecture / standards. | Legacy. | Must not be treated as active Target Project truth. | Historical Framework evidence only. | LEGACY / ARCHIVE |

---

## 4. Required Classification Matrix

| Family | Owner | Classification | Action | Target Location |
|:---|:---|:---|:---|:---|
| AI root governance files | Framework Governance | AI-DOS Framework | KEEP | `docs/AI/` |
| AI root operational files | AI Operational Layer | Shared Operational Asset / Frozen Architecture | KEEP_FROZEN | `docs/AI/` |
| Governance Atlas | Framework Governance | AI-DOS Framework / Active Architecture | KEEP | `docs/AI/GOVERNANCE.md` |
| Constitution A.1 | Framework Governance | AI-DOS Framework / Active Architecture | KEEP | `docs/AI/Architecture/A.1-Constitution.md` |
| Operational Boundary A.2 | Framework Governance | AI-DOS Framework / Active Architecture | KEEP | `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md` |
| Framework Audit A.0 | Framework Architecture Team | Historical Evidence | REFERENCE_ONLY | `docs/AI/Architecture/A.0-Framework-Audit.md` |
| Architecture Appendices | Framework Architecture Team | Historical Evidence | REFERENCE_ONLY | `docs/AI/Architecture/Appendix/` |
| Architecture Blueprint | Framework Architecture Team | Historical Evidence / Legacy | ARCHIVE | `docs/AI/Architecture/Blueprint/` or future archive |
| Architecture Schemas | Framework Governance | Active Architecture support | KEEP | `docs/AI/Architecture/Schemas/` |
| Architecture Reports | Framework Architecture Team | Historical Evidence / Active cleanup reference | REFERENCE_ONLY | `docs/AI/Architecture/Reports/` |
| Standards | Framework Governance | AI-DOS Framework / Active Architecture | KEEP | `docs/AI/Architecture/Standards/` |
| Standards Reports | Framework Architecture Team | Historical Evidence | REFERENCE_ONLY | `docs/AI/Architecture/Standards/Reports/` |
| Runtime RFCs | Framework Architecture Team | AI-DOS Framework / Frozen Architecture | KEEP_FROZEN | `docs/AI/Runtime/` |
| Runtime Reports | Framework Architecture Team | Historical Evidence | REFERENCE_ONLY | `docs/AI/Runtime/Reports/` |
| System Layer | AI Operational Layer / Human Governance | Shared Operational Asset / Frozen Architecture | KEEP_FROZEN | `docs/AI/System/` |
| Templates root | Framework Architecture Team | Shared Operational Asset / Frozen Architecture | KEEP_FROZEN | `docs/AI/Templates/` |
| Template Reports | Framework Architecture Team | Historical Evidence | REFERENCE_ONLY | `docs/AI/Templates/Reports/` |
| Commands | AI Operational Layer | Shared Operational Asset / Frozen Architecture | KEEP_FROZEN | `docs/AI/Commands/` |
| Workflows | AI Operational Layer | Shared Operational Asset / Frozen Architecture | KEEP_FROZEN | `docs/AI/Workflows/` |
| Validation | Framework Governance / Operational maintainers | Shared Operational Asset | KEEP_FROZEN | `docs/AI/Validation/` |
| Lifecycle | AI Operational Layer | Shared Operational Asset | KEEP_FROZEN | `docs/AI/Lifecycle/` |
| Certification | Framework Governance | Historical Evidence | REFERENCE_ONLY | `docs/AI/Certification/` |
| Checklists | Framework Governance | Shared Operational Asset | KEEP_FROZEN | `docs/AI/Checklists/` |
| Testing | Framework Architecture Team | Historical Evidence / Shared Operational Asset | REFERENCE_ONLY | `docs/AI/Testing/` |
| Tooling | AI Operational Layer | Shared Operational Asset | KEEP_FROZEN | `docs/AI/Tooling/` |
| Meta | Framework Governance | AI-DOS Framework / Active Architecture | KEEP | `docs/AI/Meta/` |
| Operational Core | AI Operational Layer | Frozen Architecture / Historical Evidence | KEEP_FROZEN | `docs/AI/Operational/` |
| Agents | Framework Architecture Team | Frozen Architecture / Historical Evidence | KEEP_FROZEN | `docs/AI/Architecture/Agents/` |
| Swarm | Framework Architecture Team | Frozen Architecture / Historical Evidence | KEEP_FROZEN | `docs/AI/Templates/Swarm/` until activated |
| MultiAgent | Framework Architecture Team | Frozen Architecture / Historical Evidence | KEEP_FROZEN | `docs/AI/Templates/MultiAgent/` until activated |
| Specification | Historical / legacy | Legacy / Superseded | LEGACY | Future `docs/Archive/` or `docs/AI/Archive/Legacy-Specification/` after authorization |
| DevelopmentPhases active files |AI-DOS Target Project Governance |AI-DOS Target Project / Active Architecture planning | KEEP_SELF_HOSTING | `docs/DevelopmentPhases/` |
| DevelopmentPhases historical files |AI-DOS Target Project Governance | Historical Evidence | ARCHIVE | Future `docs/Archive/DevelopmentPhases/` after authorization |
| ProjectStatus |AI-DOS Target Project Governance |AI-DOS Target Project / Active operational state | KEEP_SELF_HOSTING | `docs/DevelopmentPhases/ProjectStatus.md` |
| Roadmap |AI-DOS Target Project Governance |AI-DOS Target Project / Active planning | KEEP_SELF_HOSTING | `docs/Roadmap/` |

---

## 5. Definitive Disposition Matrix

Each family receives exactly one primary disposition.

| Family | Primary Disposition | Rationale |
|:---|:---|:---|
| AI root governance files | KEEP | Required AI-DOS Framework entry and governance references. |
| AI root operational compatibility files | KEEP_FROZEN | Still referenced but not active redesign scope. |
| Architecture core | KEEP | A.1 and A.2 are current core architecture authorities. |
| Architecture reports | REFERENCE_ONLY | Reports are evidence; this audit is the active cleanup reference. |
| Architecture appendices | REFERENCE_ONLY | Supporting evidence, not primary active authority. |
| Architecture blueprint | ARCHIVE | Historical blueprint should not compete with current A-series architecture. |
| Architecture schemas | KEEP | Standards-supporting schema assets remain under architecture. |
| Standards | KEEP | Active Framework Standards authority. |
| Standards reports | REFERENCE_ONLY | Evidence only. |
| Meta | KEEP | Active Framework semantic authority. |
| Runtime | KEEP_FROZEN | Draft RFC family remains architecture reference; no redesign authorized. |
| Runtime reports | REFERENCE_ONLY | Evidence only. |
| System | KEEP_FROZEN | System Layer re-frozen after TargetRepositoryResolution. |
| Templates | KEEP_FROZEN | Normalized reusable Template Library. |
| Template reports | REFERENCE_ONLY | Freeze and audit evidence only. |
| Commands | KEEP_FROZEN | Shared operational compatibility, no redesign. |
| Workflows | KEEP_FROZEN | Shared operational compatibility, protected ProjectStateUpdater semantics. |
| Validation | KEEP_FROZEN | Shared validation compatibility assets. |
| Lifecycle | KEEP_FROZEN | Shared lifecycle compatibility assets. |
| Certification | REFERENCE_ONLY | Readiness evidence, not active certification. |
| Checklists | KEEP_FROZEN | Reusable compatibility checklist. |
| Testing | REFERENCE_ONLY | Scenario evidence and examples. |
| Tooling | KEEP_FROZEN | Tooling compatibility asset. |
| Operational | KEEP_FROZEN | Operational Core redesign remains frozen. |
| Agents | KEEP_FROZEN | AGENTS v2 / multi-agent future scope remains frozen. |
| Swarm | KEEP_FROZEN | Future scope; no implementation activation. |
| MultiAgent | KEEP_FROZEN | Future scope; no implementation activation. |
| Specification | LEGACY | Parallel legacy Framework hierarchy superseded by current architecture. |
| DevelopmentPhases | KEEP_SELF_HOSTING |AI-DOS Target Project planning truth. |
| ProjectStatus | KEEP_SELF_HOSTING |AI-DOS Target Project live operational state. |
| Roadmap | KEEP_SELF_HOSTING |AI-DOS Target Project roadmap truth. |
| Migration | ARCHIVE | Migration artifacts are historical unless template assets. |
| Planning templates | KEEP_FROZEN | Reusable AI-DOS templates. |
| Project templates | KEEP_FROZEN | Reusable AI-DOS templates distinct fromAI-DOS project truth. |
| Reports outside Architecture | REFERENCE_ONLY | Evidence only unless explicitly promoted by Human Governance. |

---

## 6. Desired Repository Structure

This is the desired post-cleanup structure. It is not an instruction to move files in this audit.

```text
docs/
  AI/
    README.md
    GOVERNANCE.md
    AIFramework.md                       # frozen operational compatibility
    AIOrchestrator.md                    # frozen operational compatibility
    AgentSystemPrompt.md                 # frozen operational compatibility
    Architecture/
      A.0-Framework-Audit.md             # historical evidence
      A.1-Constitution.md
      A.2-AI-DOS-Target-Repository-Operational-Boundary.md
      Agents/                            # frozen future architecture
      Appendix/                          # reference-only support evidence
      Reports/                           # architecture evidence and active audit references
      Schemas/                           # standards-supporting schemas
      Standards/
    Meta/
    Runtime/
      Reports/
    System/
    Templates/
      Agents/
      Architecture/
      Context/
      Core/
      Integration/
      Knowledge/
      Memory/
      Migration/
      MultiAgent/
      Planning/
      Platform/
      Project/
      Reports/
      Runtime/
      Standards/
      Swarm/
      Validation/
      Workflow/
    Commands/
    Workflows/
    Validation/
    Lifecycle/
    Certification/                       # evidence only
    Checklists/
    Testing/                             # reference-only scenarios
    Tooling/
    Operational/                         # frozen operational-core evidence
  DevelopmentPhases/                     #AI-DOS self-hosting project truth
    ProjectStatus.md
    ForgeAI-DevelopmentPhases.md
    historical/                          # optional future archive subdivision
  Roadmap/                               #AI-DOS self-hosting roadmap truth
  Archive/                               # optional cleanup-created historical archive
    Legacy-Specification/
    Migration-Evidence/
    Superseded-Planning/
```

### 6.1 Families Belonging Outside `docs/AI`

| Family | Reason | Desired Location |
|:---|:---|:---|
| ProjectStatus | Target Project live operational state, not universal AI-DOS Framework architecture. | `docs/DevelopmentPhases/ProjectStatus.md` |
| DevelopmentPhases |AI-DOS Target Project phase sequence, not universal external Target Repository phase authority. | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Roadmap |AI-DOS Target Project roadmap, not AI-DOS Framework architecture. | `docs/Roadmap/` |
| Historical DevelopmentPhases evidence |AI-DOS project history, not active Framework architecture. | `docs/DevelopmentPhases/` or future `docs/Archive/DevelopmentPhases/` |
| Repository-wide archive | Historical evidence may be better outside active `docs/AI` authority paths. | Future `docs/Archive/` if authorized |

---

## 7. Legacy Analysis

| Legacy Finding | Evidence Area | Impact | Required Disposition |
|:---|:---|:---|:---|
| Parallel structures | `docs/AI/Specification/` duplicates current architecture topics. | Can be mistaken for active Framework authority. | LEGACY / archive after authorization. |
| Obsolete folders | `docs/AI/Architecture/Blueprint/` and older migration/planning reports. | Older hierarchy may imply superseded design path. | ARCHIVE or REFERENCE_ONLY. |
| Duplicate authorities | Legacy Specification documents overlap Constitution, Governance, Reference Architecture, Runtime Model, and Terminology. | Authority ambiguity. | Mark legacy and remove from active paths. |
| Duplicate templates | Template families are mostly normalized but reports and migration templates require separation from active templates. | Users may confuse evidence with reusable templates. | Keep templates frozen; reports reference-only. |
| Duplicate reports | Reports exist under Architecture, Runtime, Standards, Templates, Certification. | Evidence is scattered. | Keep as evidence or consolidate under archive in cleanup. |
| Obsolete planning | Historical DevelopmentPhases and old roadmap-era plans remain. | Can conflict with current Phase 8 state. | Archive historical planning while keeping active ProjectStatus / DevelopmentPhases. |
| Obsolete migration artifacts | RC2 migration reports and v3 migration strategy remain as evidence. | May be misread as active migration authorization. | REFERENCE_ONLY / ARCHIVE. |
| Obsolete RC2 remnants | RC2 harvest and legacy migration reports. | Cleanup could accidentally restart legacy migration. | Keep historical evidence; no migration execution unless authorized. |
| Obsolete Specification hierarchy | `docs/AI/Specification/` current-looking names. | Primary duplicate-authority blocker. | LEGACY. |
| Obsolete path assumptions | Older docs assumeAI-DOS paths as universal. | Conflicts with Target Repository path model. | Archive or annotate during cleanup; do not rewrite in this audit. |
| Frozen future architecture | Agents, Swarm, MultiAgent, Platform Adapter-adjacent assets. | Could be misread as active implementation scope. | KEEP_FROZEN. |

---

## 8. Cleanup Readiness and Batch Plan

Cleanup execution requires a separate Human Governance-authorized task. The following batches define readiness and sequencing only.

### Batch 1 — Evidence Lock and Authority Marking

| Field | Value |
|:---|:---|
| Purpose | Establish that this audit is the active cleanup reference and previous rationalization / classification audits are historical evidence. |
| Risk | Low; documentation classification only. |
| Dependencies | Human Governance authorization for cleanup task. |
| Expected Repository State | Cleanup has a single active reference and all prior audits remain available as evidence. |

### Batch 2 — Legacy Specification Disposition

| Field | Value |
|:---|:---|
| Purpose | Remove active-authority ambiguity from `docs/AI/Specification/`. |
| Risk | Medium; legacy docs may still be referenced. |
| Dependencies | Reference scan and archive destination approval. |
| Expected Repository State | No active parallel Framework specification hierarchy remains. |

### Batch 3 — Historical Reports and Migration Evidence Consolidation

| Field | Value |
|:---|:---|
| Purpose | Classify scattered reports, RC2 migration evidence, v3 migration strategy, freeze reviews, and certification reports as reference-only / archive. |
| Risk | Medium; evidence must remain traceable. |
| Dependencies | Archive policy and link preservation. |
| Expected Repository State | Reports no longer appear to be active authorities unless explicitly designated. |

### Batch 4 — DevelopmentPhases and Roadmap History Separation

| Field | Value |
|:---|:---|
| Purpose | Preserve active ProjectStatus, DevelopmentPhases, and Roadmap while separating historical planning artifacts. |
| Risk | High; ProjectStatus must not be edited without authorization. |
| Dependencies | Human Governance approval and ProjectStatus update policy compliance if any state record changes are required. |
| Expected Repository State |AI-DOS self-hosting project truth is clearly separated from historical project planning. |

### Batch 5 — Frozen Future Capability Labeling

| Field | Value |
|:---|:---|
| Purpose | Ensure Agents v2, Swarm, MultiAgent, Platform Adapter-adjacent assets, and future implementation materials remain frozen and visibly non-active. |
| Risk | Medium; avoid rewriting architecture. |
| Dependencies | Frozen-area rules and no redesign. |
| Expected Repository State | Future architecture cannot be mistaken for active implementation authorization. |

### Batch 6 — Template / Command / Workflow / Validation Boundary Confirmation

| Field | Value |
|:---|:---|
| Purpose | Confirm normalized template library and operational compatibility assets remain frozen shared AI-DOS assets. |
| Risk | Low to medium; avoid accidental template rewrites. |
| Dependencies | Template freeze evidence and System Layer freeze evidence. |
| Expected Repository State | Shared operational assets are retained without redesign. |

### Final Batch — Repository Freeze Preparation

| Field | Value |
|:---|:---|
| Purpose | Validate that no duplicate active authority, obsolete active planning, or legacy parallel structures remain. |
| Risk | High; freeze is a governance gate. |
| Dependencies | Successful completion of prior batches, validation report, Human Governance review. |
| Expected Repository State | Repository is ready to request Repository Freeze. |

---

## 9. Repository Freeze Readiness

### 9.1 Determination

The repository is **not ready for Repository Freeze**.

### 9.2 Blockers

1. `docs/AI/Specification/` remains a parallel legacy Framework hierarchy.
2. Historical reports are scattered across active-looking architecture, standards, runtime, template, and certification paths.
3. Historical DevelopmentPhases and planning artifacts need explicit active-vs-archive separation.
4. Previous Repository Rationalization Audit must remain evidence but no longer be treated as the active cleanup reference.
5. Frozen future architecture for Agents, Swarm, MultiAgent, and Platform-adjacent capabilities needs continued non-activation protection.
6. Repository layout still allows confusion between AI-DOS Framework assets andAI-DOS Target Project truth.
7. Cleanup has not yet been executed or validated.

---

## 10. Axis Suite Readiness

### 10.1 Determination

The repository is **not ready to become the provider for Axis Suite**.

### 10.2 Remaining Work

1. Execute final repository cleanup under `AI-DOS.V2.REPOSITORY-CLEANUP-001`.
2. Complete Repository Freeze after cleanup validation.
3. Validate AI-DOS provider package boundaries: Framework truth, shared operational assets, frozen architecture, templates, commands, workflows, and System Layer procedures.
4. Validate external Target Repository boot with noAI-DOS self-hosting path fallback assumptions.
5. Validate TargetRepositoryResolution against an external Target Repository declaration.
6. Confirm Axis Suite-specific ProjectStatus, DevelopmentPhases, Roadmap, protected areas, and validation commands are owned by Axis Suite, not by AI-DOS.
7. Confirm no frozen Multi-Agent, Swarm, Platform Adapter, Runtime implementation, or Engine implementation scope is implicitly activated by provider use.

---

## 11. Validation Results

| Validation Requirement | Result | Notes |
|:---|:---|:---|
| Repository ownership | PASS | A.2 separates AI-DOS Framework truth from Target Repository project truth. |
| Framework / Target Project separation | PASS WITH FINDINGS | Current authorities separate ownership; physical layout still needs cleanup. |
| Authority consistency | PASS WITH BLOCKERS | Active authority is coherent; legacy specifications and historical reports require disposition. |
| No duplicate authority | FAIL UNTIL CLEANUP | Legacy `docs/AI/Specification/` remains the main duplicate-authority risk. |
| No duplicate ownership | PASS WITH FINDINGS | Some legacy / operational artifacts still imply historical ownership. |
| No parallel Framework | FAIL UNTIL CLEANUP | Legacy Specification hierarchy remains. |
| No obsolete active planning | FAIL UNTIL CLEANUP | Historical planning files require archive / reference-only separation. |
| No obsolete active Runtime | PASS | Runtime RFC family is active/frozen architecture; reports are evidence. |
| No obsolete active System | PASS | System Layer extension and re-freeze are documented. |
| Repository layout consistency | PASS WITH FINDINGS | Needs final structure cleanup before freeze. |
| Self-hosting consistency | PASS |AI-DOS self-hosting paths are documented as local mappings only. |
| Axis Suite readiness | FAIL | External Target Repository readiness remains future work. |
| Cleanup readiness | PASS | Ready for a separately authorized cleanup task. |
| Repository freeze readiness | FAIL | Cleanup and validation remain blockers. |
| ProjectStatus unchanged | PASS | This audit does not modify ProjectStatus. |
| DevelopmentPhases unchanged | PASS | This audit does not modify DevelopmentPhases. |
| Cleanup not executed | PASS | No files are moved or removed by this audit. |

---

## 12. Blockers

1. Final cleanup has not been authorized or executed.
2. Legacy Specification hierarchy remains in active-looking documentation paths.
3. Historical planning and migration evidence remain mixed with active planning surfaces.
4. Report evidence is distributed across several domains without a single archive/read-only convention.
5. External Target Repository provider validation has not been performed.
6. Axis Suite-specific project truth is not yet present in this repository and must not be invented by AI-DOS.
7. Repository Freeze requires post-cleanup validation and Human Governance review.

---

## 13. Recommendations

1. Execute only the next authorized task: `AI-DOS.V2.REPOSITORY-CLEANUP-001 — EXECUTE FINAL REPOSITORY CLEANUP`.
2. Preserve the previous Repository Rationalization Audit as historical evidence; do not rewrite it.
3. Treat this audit as the active cleanup reference after Human Governance acceptance.
4. Resolve `docs/AI/Specification/` first because it is the clearest duplicate-authority risk.
5. Preserve all evidence needed for traceability during cleanup; prefer archive/reference-only disposition over removal unless Human Governance explicitly authorizes removal.
6. Keep System, Runtime, Engine, Operational Core, Agents, Swarm, MultiAgent, Platform, Commands, Workflows, and Templates frozen unless separately activated.
7. Do not update ProjectStatus or DevelopmentPhases as part of cleanup unless a dedicated authorized status task requires it.
8. After cleanup, run a Repository Freeze readiness validation before any Axis Suite preparation.
9. Begin Axis Suite preparation only after Repository Freeze and explicit Human Governance activation.

---

## 14. Commit Hash

To be supplied by the committing agent after this audit is committed.

---

## 15. Completion Status

```text
AI-DOS REPOSITORY ARCHITECTURE AUDIT COMPLETE
```

Recommended next step only:

```text
AI-DOS.V2.REPOSITORY-CLEANUP-001 — EXECUTE FINAL REPOSITORY CLEANUP
```

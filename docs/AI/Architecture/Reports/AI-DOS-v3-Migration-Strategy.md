#AI-DOS v3 Migration Strategy

## 1. Status

Status: Strategy Proposal / Not Yet Approved  
Project: AI-DOS  
Document Type: Migration Strategy  
Scope: Documentation-only planning  
Created: 2026-07-07  
Authority Premise: Human governance has decided thatAI-DOS v3 is the target architecture and RC2 is source, reference, and legacy material to be migrated, harvested, or archived.

This report is advisory. It does not promote, move, rename, archive, deprecate, or rewrite any existing document. It creates a migration plan only.

## 2. Executive Summary

AI-DOS currently contains two architecture generations:

1. RC2 AI Framework generation, centered on `docs/AI/AIFramework.md`, `docs/AI/Specification/`, `docs/AI/System/`, `docs/AI/Commands/`, `docs/AI/Workflows/`, `docs/AI/Templates/`, `docs/AI/Validation/`, and `docs/AI/Certification/`.
2.AI-DOS v3 architecture generation, centered on `docs/AI/Architecture/A.1-Constitution.md`, the v3 Blueprint RFC, the Framework and Artifact Meta Models, and the emerging Standards Library.

The safest migration is staged rather than immediate. RC2 should remain operational temporarily because it still contains the current executable agent procedures, command definitions, workflow procedures, templates, validation references, certification references, and development phase plan. v3 should become the future canonical architecture after human approval, compatibility mapping, and controlled ProjectStatus updates.

Recommended verdict:

> Proceed with stagedAI-DOS v3 migration after human approval.

## 3. Governing Decision

The governing human decision for this strategy is:

>AI-DOS v3 is the target architecture. RC2 is not the target authority. RC2 is source/reference/legacy material to be migrated, harvested, or archived.

This report accepts that decision as binding and does not challenge it.

Operational consequences:

- v3 architecture is the target source of future canonical authority.
- RC2 documents should not receive new architectural authority.
- RC2 remains useful as compatibility material until v3 replacements exist.
- Migration must preserve operational continuity while preventing accidental RC2 re-canonization.
- ProjectStatus must remain the live operational status document during migration, but it must not be rewritten until a migration task is approved.

## 4. Current Architecture Generations

### 4.1 RC2 AI Framework Generation

The RC2 generation provides the current live operational framework. Its strengths are practical execution coverage and agent-facing procedure coverage.

Major RC2 areas:

- `docs/AI/AIFramework.md` — RC2 master index and specification entry point.
- `docs/AI/AIOrchestrator.md` — current orchestration workflow.
- `docs/AI/Specification/` — RC2 constitution, framework specification, runtime model, governance model, reference architecture, and terminology.
- `docs/AI/System/` — tool-facing boot, authority, source-of-truth, context, decision, and execution procedures.
- `docs/AI/Commands/` — agent command standards.
- `docs/AI/Workflows/` — task planning, task generation, and project state update workflows.
- `docs/AI/Templates/` — broad template library.
- `docs/AI/Validation/` — validation model and validation certification references.
- `docs/AI/Certification/` — certification readiness and adoption review artifacts.
- `docs/DevelopmentPhases/` — current phase roadmap and planned phase specifications.

### 4.2AI-DOS v3 Architecture Generation

The v3 generation provides the target architecture track. Its strengths are stronger authority modeling, meta-modeling, standards governance, graph-oriented knowledge representation, discovery governance, and architecture audit lineage.

Major v3 areas:

- `docs/AI/Architecture/A.0-Framework-Audit.md`
- `docs/AI/Architecture/A.1-Constitution.md`
- `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`
- `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`
- `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`
- Architecture reports under `docs/AI/Architecture/Reports/`.

## 5. RC2 Inventory

### 5.1 Specification

`docs/AI/Specification/` should be treated as the RC2 architecture source set. It contains high-value concepts that should be harvested into v3, but the directory itself should not remain a v3 canonical authority path.

Disposition by function:

- `Constitution.md`: migrate principles into v3 constitutional alignment checks; move to legacy later.
- `FrameworkSpecification.md`: migrate subsystem definitions into v3 core architecture and future standards.
- `GovernanceModel.md`: migrate governance concepts into updated governance and future v3 governance standard.
- `ReferenceArchitecture.md`: migrate layer diagrams and dependency flow into v3 core map or future runtime architecture.
- `RuntimeModel.md`: migrate agent lifecycle, context, memory, multi-agent, and swarm concepts into future runtime architecture.
- `Terminology.md`: migrate terms into v3 meta-model vocabulary and future glossary standard.

### 5.2 System

`docs/AI/System/` should remain operational temporarily because agents currently rely on it for boot sequence, authority resolution, context assembly, source-of-truth handling, decision routing, and execution sequence.

The content should be migrated into future v3 system documents only after the v3 authority chain is approved.

### 5.3 Commands

`docs/AI/Commands/` should remain operational temporarily. It is executable procedure, not final architecture. Its command concepts should be migrated into a v3 command layer after runtime and workflow architecture are defined.

### 5.4 Workflows

`docs/AI/Workflows/` should remain operational temporarily. The task planner, task generation workflow, and project state updater are required for continuity until v3 workflow replacements are approved.

### 5.5 Templates

`docs/AI/Templates/` should remain operational temporarily and then be selectively migrated. Templates are useful but should be brought under v3 artifact metadata, standards, and lifecycle rules before becoming canonical v3 templates.

### 5.6 Validation

`docs/AI/Validation/` should remain operational temporarily. Validation concepts should be migrated into a future v3 validation standard and certification model.

### 5.7 Certification

`docs/AI/Certification/` should remain operational temporarily as reference evidence. It should be migrated into a future v3 certification layer once the v3 validation and review model is defined.

### 5.8 Development Phases

`docs/DevelopmentPhases/` should remain operational temporarily because ProjectStatus currently depends on it. It should later be reconciled with v3 planning concepts, not moved or rewritten before ProjectStatus migration is approved.

## 6. v3 Inventory

### 6.1 Promote to Canonical After Approval

The following should become canonical v3 architecture documents after human approval and status updates:

- `docs/AI/Architecture/A.1-Constitution.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`

### 6.2 Canonical Candidate Standards, Still Draft/Transitional

The following are strong canonical candidates but should remain draft/transitional until their own readiness criteria are satisfied:

- `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`
- `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`

### 6.3 RFC / Transitional Documents

The following should remain transitional unless explicitly ratified:

- `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md`
- `docs/AI/Architecture/A.0-Framework-Audit.md`
- `docs/AI/Architecture/Reports/AI-DOS-Architecture-Consistency-Audit-v1.0.md`
- `docs/AI/Architecture/Reports/AI-DOS-Authority-Cleanup-Plan-v1.0.md`
- `docs/AI/Architecture/Reports/AI-DOS-v3-Migration-Strategy.md`

Reports and audits are evidence and planning artifacts, not permanent architecture authority.

## 7. Proposed v3 Authority Chain

### 7.1 Proposed Chain

```text
Human Governance
    ↓
AGENTS.md
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
    ↓
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
    ↓
docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md
    ↓
docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md
    ↓
Future STD-003+
    ↓
Future Runtime Architecture
    ↓
Future System / Command / Workflow / Template / Validation / Certification layers
    ↓
Generated Tasks
```

### 7.2 Minor Recommended Adjustment

The chain is directionally correct, but the Blueprint should remain explicitly marked as RFC until ratified. The safer target chain is:

```text
Human Governance
    ↓
AGENTS.md
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
Ratified v3 Architecture Blueprint
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
    ↓
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
    ↓
Approved Framework Standards Library
    ↓
Future Runtime Architecture
    ↓
Future System / Command / Workflow / Template / Validation / Certification layers
    ↓
Generated Tasks
```

Reason: an RFC may guide migration, but should not outrank approved meta-models and standards as binding authority unless human governance ratifies it. During transition, the existing Blueprint RFC can serve as the proposed architecture blueprint.

## 8. Proposed v3 Directory Model

The proposed target model is sound as a future-state structure, with one important constraint: it should not be applied until the authority chain, compatibility rules, and ProjectStatus migration are approved.

Recommended future structure:

```text
docs/
  ProjectStatus.md
  FrameworkGovernance.md

  AI/
    README.md
    AIFramework.md

    Architecture/
      A.0-Framework-Audit.md
      A.1-Constitution.md
      Framework-Core-Map.md

      Blueprint/
        AI-DOS-Blueprint-v1.0-RFC.md

      Reports/
        AI-DOS-Architecture-Consistency-Audit-v1.0.md
        AI-DOS-Authority-Cleanup-Plan-v1.0.md
        AI-DOS-v3-Migration-Strategy.md

      Appendix/
      Standards/
      Schemas/

    Meta/
      M.0-Framework-Meta-Model.md
      M.1-Artifact-Meta-Model.md

    Runtime/
      A.3-Runtime-Architecture.md
      A.4-Engine-Architecture.md
      A.5-AI-Runtime.md
      A.6-Swarm-Runtime.md

    System/
      BootSequence.md
      AuthorityModel.md
      SourceOfTruth.md
      ContextAssembly.md
      DecisionModel.md
      ExecutionSequence.md

    Commands/
    Workflows/
    Templates/
    Validation/
    Certification/

    Legacy/
      RC2/
        Specification/
        System/
        Commands/
        Workflows/
        Templates/
        Validation/
        Certification/
```

Recommended refinements:

- Keep `docs/AI/Architecture/Reports/` for audits, cleanup plans, migration plans, and readiness reports.
- Keep `docs/AI/Architecture/Blueprint/` for RFC and ratified blueprint documents.
- Add `docs/AI/Architecture/Schemas/` only when schemas are approved and maintained under standards governance.
- Do not move RC2 into `Legacy/RC2/` until v3 replacements exist and ProjectStatus no longer depends on RC2 paths.
- Treat `docs/AI/AIFramework.md` as a future v3 entry point wrapper, not as the long-term owner of all architecture.

## 9. Document Disposition Matrix

| Document or Directory | Classification | Rationale | Future Action |
| --- | --- | --- | --- |
| `AGENTS.md` | Keep Canonical | Bootstrap authority remains highest repository authority below human governance. | Update later only after explicit approval. |
| `docs/ProjectStatus.md` | Keep Operational Temporarily | Only live operational state document. | Migrate after v3 authority approval. |
| `docs/AI/FrameworkGovernance.md` | Keep Operational Temporarily | Current governance bridge. | Align to v3 governance after approval. |
| `docs/AI/README.md` | Keep Operational Temporarily | Current AI framework index still points to RC2. | Rewrite later as v3 entry index. |
| `docs/AI/AIFramework.md` | Keep Operational Temporarily | Current master entry is RC2. | Convert later to v3 entry wrapper or move to legacy. |
| `docs/AI/AIOrchestrator.md` | Keep Operational Temporarily | Current orchestration procedure remains needed. | Migrate into future runtime/workflow architecture. |
| `docs/AI/Architecture/A.0-Framework-Audit.md` | Keep Operational Temporarily | Architecture evidence and audit baseline. | Keep as report/reference, not canonical authority. |
| `docs/AI/Architecture/A.1-Constitution.md` | Promote to Canonical | Target v3 constitutional authority. | Promote after human approval. |
| `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` | Requires Human Decision | Blueprint is target direction but currently RFC. | Ratify, revise, or supersede. |
| `docs/AI/Architecture/Reports/AI-DOS-Architecture-Consistency-Audit-v1.0.md` | Keep Operational Temporarily | Evidence for migration and cleanup. | Archive as evidence later. |
| `docs/AI/Architecture/Reports/AI-DOS-Authority-Cleanup-Plan-v1.0.md` | Keep Operational Temporarily | Cleanup plan informs migration order. | Archive as evidence after completion. |
| `docs/AI/Architecture/Reports/AI-DOS-v3-Migration-Strategy.md` | Keep Operational Temporarily | This strategy proposes migration only. | Use as implementation planning input. |
| `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Promote to Canonical | Foundational v3 framework type model. | Promote after approval and consistency check. |
| `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Promote to Canonical | Foundational v3 artifact model. | Promote after approval and consistency check. |
| `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Promote to Canonical | Governs standards library structure and lifecycle. | Promote after approval. |
| `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` | Requires Human Decision | Valuable but draft/beta status. | Keep transitional until certified. |
| `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` | Requires Human Decision | Valuable but draft status. | Keep transitional until certified. |
| `docs/AI/Specification/` | Migrate into v3 | RC2 architecture source material. | Move to Legacy later after harvesting. |
| `docs/AI/Specification/Constitution.md` | Migrate into v3 | RC2 principles overlap v3 Constitution. | Harvest deltas; legacy later. |
| `docs/AI/Specification/FrameworkSpecification.md` | Migrate into v3 | Contains subsystem definitions. | Harvest into v3 core map/standards. |
| `docs/AI/Specification/GovernanceModel.md` | Migrate into v3 | Contains governance concepts. | Harvest into v3 governance model. |
| `docs/AI/Specification/ReferenceArchitecture.md` | Migrate into v3 | Contains architecture layering. | Harvest into v3 core/runtime architecture. |
| `docs/AI/Specification/RuntimeModel.md` | Migrate into v3 | Contains runtime concepts. | Harvest into future runtime architecture. |
| `docs/AI/Specification/Terminology.md` | Migrate into v3 | Contains glossary terms. | Harvest into v3 meta-model/glossary. |
| `docs/AI/System/` | Keep Operational Temporarily | Agent-facing operating procedures still required. | Migrate into v3 System after runtime design. |
| `docs/AI/System/README.md` | Keep Operational Temporarily | System layer index. | Replace with v3 system index later. |
| `docs/AI/System/BootSequence.md` | Keep Operational Temporarily | Required operational boot procedure. | Migrate into v3 boot standard. |
| `docs/AI/System/AuthorityModel.md` | Migrate into v3 | Important authority behavior. | Align with v3 authority model. |
| `docs/AI/System/SourceOfTruth.md` | Migrate into v3 | Important state/source distinction. | Align with v3 source-of-truth model. |
| `docs/AI/System/ContextAssembly.md` | Migrate into v3 | Context rules need v3 knowledge graph alignment. | Migrate after runtime architecture. |
| `docs/AI/System/DecisionModel.md` | Migrate into v3 | Decision routing remains needed. | Migrate into v3 runtime/command layer. |
| `docs/AI/System/ExecutionSequence.md` | Migrate into v3 | Lifecycle sequence remains needed. | Migrate into v3 runtime/workflow layer. |
| `docs/AI/Commands/` | Keep Operational Temporarily | Current commands are still executable. | Migrate into v3 command layer later. |
| `docs/AI/Commands/AgentTaskCommand.md` | Keep Operational Temporarily | Base command remains needed. | Refactor under v3 command standard later. |
| `docs/AI/Commands/AgentAuditCommand.md` | Keep Operational Temporarily | Audit command remains useful. | Align with STD-002+ evidence pipeline later. |
| `docs/AI/Commands/AgentImplementationCommand.md` | Keep Operational Temporarily | Implementation guardrails remain useful. | Migrate after v3 planning/runtime. |
| `docs/AI/Commands/AgentDocumentationCommand.md` | Keep Operational Temporarily | Documentation-only workflows remain useful. | Migrate after v3 templates. |
| `docs/AI/Commands/AgentBugFixCommand.md` | Keep Operational Temporarily | Bug fix routing remains useful. | Migrate after v3 runtime. |
| `docs/AI/Workflows/` | Keep Operational Temporarily | Current workflows preserve continuity. | Migrate into v3 workflows later. |
| `docs/AI/Workflows/TaskPlanner.md` | Keep Operational Temporarily | Current planning workflow. | Reconcile with v3 planning model. |
| `docs/AI/Workflows/TaskGenerationWorkflow.md` | Keep Operational Temporarily | Current task generation workflow. | Reconcile with v3 artifact/task model. |
| `docs/AI/Workflows/ProjectStateUpdater.md` | Keep Operational Temporarily | Current state update workflow. | Replace only after ProjectStatus migration. |
| `docs/AI/Templates/` | Migrate into v3 | Broad reusable library. | Reclassify under M.1 and future template standard. |
| `docs/AI/Templates/Core/` | Migrate into v3 | Metadata/template standards are directly relevant. | Promote selected concepts after review. |
| `docs/AI/Templates/Architecture/` | Migrate into v3 | Architecture/RFC/ADR templates align with v3. | Update under v3 metadata rules. |
| `docs/AI/Templates/Planning/` | Migrate into v3 | Planning templates needed for future phases. | Reconcile with v3 planning model. |
| `docs/AI/Templates/Workflow/` | Migrate into v3 | Workflow templates remain useful. | Reconcile with v3 workflow layer. |
| `docs/AI/Templates/Validation/` | Migrate into v3 | Validation template remains useful. | Reconcile with v3 validation standard. |
| `docs/AI/Templates/Migration/` | Migrate into v3 | Directly useful for this migration. | Promote into v3 migration toolkit later. |
| `docs/AI/Templates/Runtime/` | Migrate into v3 | Runtime context concepts needed. | Align with future runtime architecture. |
| `docs/AI/Templates/Agents/` | Migrate into v3 | Agent artifacts needed. | Align with v3 runtime and swarm model. |
| `docs/AI/Templates/MultiAgent/` | Migrate into v3 | Multi-agent coordination needed. | Align with future swarm/multi-agent standards. |
| `docs/AI/Templates/Swarm/` | Migrate into v3 | Swarm templates needed later. | Hold until swarm runtime architecture. |
| `docs/AI/Templates/Knowledge/` | Migrate into v3 | Knowledge templates align with STD-001. | Reconcile with graph standard. |
| `docs/AI/Templates/Memory/` | Migrate into v3 | Memory concepts needed later. | Align with runtime architecture. |
| `docs/AI/Templates/Integration/` | Migrate into v3 | Integration contracts useful. | Reconcile with adapter standards. |
| `docs/AI/Templates/Platform/` | Migrate into v3 | Adapter boundary templates useful. | Align with platform adapter architecture. |
| `docs/AI/Templates/Project/` | Move to Legacy Later | Platform-specific project templates are not core architecture. | Keep as adapter/reference material. |
| `docs/AI/Validation/` | Keep Operational Temporarily | Validation remains required. | Migrate into v3 validation standard. |
| `docs/AI/Validation/AIFrameworkValidation.md` | Migrate into v3 | Validation philosophy remains useful. | Refactor under v3 standards. |
| `docs/AI/Validation/ValidationLifecycle.md` | Migrate into v3 | Lifecycle needed. | Align with v3 lifecycle. |
| `docs/AI/Validation/ValidationLevels.md` | Migrate into v3 | Level model useful. | Reconcile with v3 compliance/certification levels. |
| `docs/AI/Validation/ValidationCertification.md` | Migrate into v3 | Certification linkage useful. | Move concepts into v3 certification layer. |
| `docs/AI/Validation/ValidationChecklistTemplate.md` | Migrate into v3 | Template useful. | Reclassify under templates. |
| `docs/AI/Certification/` | Keep Operational Temporarily | Current audit/review evidence. | Archive later after v3 certification model. |
| `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md` | Archive Later | Historical readiness audit. | Preserve as evidence. |
| `docs/AI/Certification/ProjectTemplateAdoptionReview.md` | Archive Later | Historical adoption review. | Preserve as evidence/reference. |
| `docs/DevelopmentPhases/` | Keep Operational Temporarily | Current ProjectStatus depends on phases. | Replan under v3 after state migration. |
| `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` | Keep Operational Temporarily | Current phase index. | Reconcile with v3 roadmap. |
| `docs/DevelopmentPhases/Phase-00-Foundation.md` | Keep Operational Temporarily | Active phase context. | Update only in approved state migration. |
| `docs/DevelopmentPhases/Phase-01-Core Framework.md` through `Phase-13-Enterprise-Governance.md` | Requires Human Decision | Planned roadmap may not match v3 architecture sequence. | Rebaseline after v3 authority approval. |

## 10. Migration Phases

### Phase 0 — Approval and Freeze

- Obtain human approval for the v3 migration premise.
- Freeze RC2 architecture expansion except for compatibility fixes.
- Confirm that this report is accepted as the migration planning basis.

### Phase 1 — Authority Alignment

- Update authority references in a controlled task.
- Ratify or revise the v3 Blueprint RFC.
- Promote A.1, M.0, M.1, and STD-000 only after explicit approval.
- Preserve `AGENTS.md` as bootstrap authority.

### Phase 2 — Compatibility Bridge

- Create a compatibility bridge stating that RC2 operational documents remain executable until replaced.
- Define how agents resolve conflicts between RC2 operations and v3 architecture.
- Prohibit RC2 from creating new architecture authority.

### Phase 3 — RC2 Harvest

- Harvest RC2 Specification concepts into v3 documents.
- Map RC2 terminology to M.0/M.1 vocabulary.
- Identify concepts with no v3 equivalent and route them to future standards or runtime architecture.

### Phase 4 — Runtime and System Migration

- Create future runtime architecture documents only after v3 authority is approved.
- Migrate boot, authority, context, decision, source-of-truth, and execution procedures into v3 System.
- Keep RC2 System operational until replacements pass validation.

### Phase 5 — Commands, Workflows, Templates, Validation, Certification

- Create v3 command and workflow standards.
- Reclassify templates under M.1 artifact rules.
- Migrate validation and certification into v3 compliance and certification models.
- Retire RC2 operational documents only after replacement and validation.

### Phase 6 — Legacy Move

- Move RC2 directories to `docs/AI/Legacy/RC2/` only after no live operational dependencies remain.
- Preserve historical links through migration notes or redirects if approved.
- Do not archive evidence needed for traceability.

### Phase 7 — ProjectStatus Rebaseline

- Update ProjectStatus to reflect v3 as the active architecture generation.
- Rebaseline DevelopmentPhases or replace them with a v3 roadmap.
- Record migration completion and next active capability.

## 11. Temporary Compatibility Rules

Until migration is approved and completed:

1. `AGENTS.md` remains the bootstrap authority.
2. `docs/ProjectStatus.md` remains the only live operational status document.
3. RC2 System, Commands, Workflows, Templates, Validation, and Certification remain operational procedures.
4. v3 architecture documents guide target design but do not automatically rewrite operational behavior.
5. If RC2 and v3 conflict architecturally, v3 target architecture should guide recommendations, but existing RC2 operational procedure remains executable until replaced.
6. RC2 Specification must not be expanded as target architecture.
7. New architecture work should target v3 paths, not `docs/AI/Specification/`.
8. No RC2 file should be moved to legacy until ProjectStatus and operational references are updated.
9. Reports and audits remain evidence, not canonical authority.
10. Human approval is required before any authority promotion, directory migration, or ProjectStatus rebaseline.

## 12. ProjectStatus Migration Policy

ProjectStatus must not be updated during this strategy task.

Recommended future policy:

- Keep ProjectStatus operational until v3 authority approval.
- Add a migration status section only in a dedicated approved task.
- Record the active architecture generation explicitly.
- Record RC2 as operational compatibility material once the compatibility bridge exists.
- Record v3 authority promotion only after human approval.
- Do not mark migration complete until validation and review pass.
- Do not advance capabilities solely because a document was created.

ProjectStatus should move through these future states:

```text
Current RC2 Operational State
    ↓
v3 Migration Approved
    ↓
Authority Alignment In Progress
    ↓
Compatibility Bridge Active
    ↓
v3 Canonical Architecture Active
    ↓
RC2 Legacy Migration Complete
```

## 13. Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Premature v3 canonization | Conflicting authority chains. | Require explicit human approval and ProjectStatus update. |
| RC2 operational breakage | Agents lose boot/command/workflow procedures. | Keep RC2 operational temporarily. |
| Broken links after moving RC2 | Loss of traceability. | Do not move files until replacements and link strategy exist. |
| Blueprint RFC treated as ratified | RFC may bypass governance. | Ratify or revise Blueprint before canonical use. |
| Standards draft status ignored | Draft standards may be over-applied. | Track certification/readiness per standard. |
| ProjectStatus drift | Live state becomes inaccurate. | Update ProjectStatus only through approved state migration. |
| Template sprawl | RC2 templates may conflict with v3 artifact rules. | Reclassify templates under M.1 before promotion. |
| Platform-specific leakage | Project templates may weaken platform independence. | Move platform templates to adapter/reference scope later. |
| Missing runtime architecture | v3 cannot replace RC2 System yet. | Create runtime architecture in a later approved task. |
| Certification ambiguity | No final v3 certification layer yet. | Keep RC2 validation/certification operational temporarily. |

## 14. Blockers

Current blockers before implementation:

1. Human approval is required to proceed with staged v3 migration.
2. The Blueprint RFC must be ratified, revised, or superseded before it can be canonical.
3. v3 runtime architecture does not yet exist.
4. v3 command, workflow, template, validation, and certification layers do not yet exist.
5. ProjectStatus has not yet been rebaselined for v3.
6. RC2 paths are still referenced by active operational documents.
7. Legacy move strategy and link preservation strategy have not yet been approved.

## 15. Recommended First Implementation Task

Recommended next task:

> Create aAI-DOS v3 Authority Alignment Plan that proposes the exact future edits to `AGENTS.md`, `docs/AI/README.md`, `docs/AI/AIFramework.md`, `docs/AI/FrameworkGovernance.md`, and `docs/ProjectStatus.md`, without applying them, and defines the approval checklist for promoting A.1, M.0, M.1, and STD-000.

Recommended command:

```text
AgentDocumentationCommand
```

Reason: the next step is documentation governance and authority planning, not implementation, refactoring, or file movement.

## 16. Final Recommendation

Proceed with stagedAI-DOS v3 migration after human approval.

The safest path is to promote v3 as the target architecture while preserving RC2 as temporary operational compatibility material. Do not move RC2 directories, rewrite ProjectStatus, or promote draft v3 documents until human approval, authority alignment, compatibility rules, validation, and review are complete.

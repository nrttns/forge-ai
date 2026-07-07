# RC2 Specification Legacy Migration Plan

## 1. Status

Status: Planning Report / Documentation-only / No Move Performed  
Project: Forge AI  
Document Type: Legacy Migration Plan  
Scope: `docs/AI/Specification/` only  
Created: 2026-07-07  
Authority Premise: Forge AI v3 is the target architecture, while RC2 remains the operational compatibility layer until approved v3 replacements exist.

This report does not move, rename, delete, or rewrite any RC2 Specification file. It does not update `docs/ProjectStatus.md`. It plans a safe future migration of the RC2 Specification directory after valuable source material has been harvested into v3 architecture artifacts or explicitly waived by governance.

## 2. Scope

### 2.1 In Scope

This plan covers only these RC2 Specification files:

- `docs/AI/Specification/Constitution.md`
- `docs/AI/Specification/FrameworkSpecification.md`
- `docs/AI/Specification/GovernanceModel.md`
- `docs/AI/Specification/ReferenceArchitecture.md`
- `docs/AI/Specification/RuntimeModel.md`
- `docs/AI/Specification/Terminology.md`

This plan also assesses active references to `docs/AI/Specification/` so a future move does not break operational RC2 compatibility.

### 2.2 Out of Scope

The following directories must not move as part of the current migration planning task and must not be included in the first actual legacy move:

- `docs/AI/System/`
- `docs/AI/Commands/`
- `docs/AI/Workflows/`
- `docs/AI/Templates/`
- `docs/AI/Validation/`
- `docs/AI/Certification/`

`docs/ProjectStatus.md` is also out of scope for this task and must not be updated by this planning report.

## 3. Why Only Specification Is Eligible Now

Only `docs/AI/Specification/` is eligible for legacy migration planning now because the v3 Migration Strategy identifies Specification as the RC2 architecture source set that contains high-value concepts to harvest, while the operational RC2 directories still provide the active procedures needed by agents during transition.

The Specification directory is architecture-oriented source material. It defines RC2 constitutional principles, subsystem concepts, governance concepts, runtime concepts, reference architecture, and vocabulary. These concepts can be compared against v3 target architecture documents and harvested without disrupting executable agent procedures.

By contrast, the RC2 operational directories still participate directly in boot, authority resolution, command selection, workflow execution, template use, validation, and certification. They must remain in place until approved v3 operational replacements exist and are explicitly promoted through governance.

Therefore, the safe boundary is:

```text
Eligible for planning now:
    docs/AI/Specification/

Not eligible for movement now:
    docs/AI/System/
    docs/AI/Commands/
    docs/AI/Workflows/
    docs/AI/Templates/
    docs/AI/Validation/
    docs/AI/Certification/
```

## 4. Specification File Inventory

| Source file | RC2 role | Key content inspected | Migration sensitivity |
| --- | --- | --- | --- |
| `docs/AI/Specification/Constitution.md` | RC2 framework constitution | Purpose, vision, mission, objectives, audience, scope, foundational philosophy, core principles, constitutional invariants, relationship to other RC2 modules. | High: referenced as current AI Framework Constitution by active authority chains. |
| `docs/AI/Specification/FrameworkSpecification.md` | Core RC2 framework specification | Core architecture, planning model, workflow engine, command system, template system, review system, validation, documentation, state management, orchestration. | High: defines subsystem boundaries consumed by operational documents. |
| `docs/AI/Specification/GovernanceModel.md` | RC2 governance specification | Governance philosophy, hierarchy, human authority, decision classification, ownership governance, quality gates, certification, escalation, compliance, governance evolution. | High: overlaps with project-level governance and future v3 governance standards. |
| `docs/AI/Specification/ReferenceArchitecture.md` | RC2 reference architecture | High-level architecture, logical layers, information flow, authority flow, framework adapter model, Forge AI adapter position, future adapter examples, extension readiness, roadmap, architectural principles. | Medium-high: contains useful diagrams and one stale `ForgeAI2` path requiring cleanup before reuse. |
| `docs/AI/Specification/RuntimeModel.md` | RC2 runtime specification | Runtime philosophy, agent lifecycle, runtime layers, context management, memory strategy, multi-agent coordination, swarm coordination, runtime communication, runtime invariants. | High: future v3 runtime architecture is not yet fully represented in promoted documents. |
| `docs/AI/Specification/Terminology.md` | RC2 canonical terminology | AI Framework vocabulary, state terms, planning terms, command/workflow/template terms, adapter terms. | High: terms must be reconciled with v3 meta-model vocabulary before move. |

## 5. Harvest Matrix

| Source file | Valuable content | Target v3 destination | Action |
| --- | --- | --- | --- |
| `docs/AI/Specification/Constitution.md` | Framework-independent mission; documentation-driven development; architecture-before-code; self-planning agents; core principles; constitutional invariants; human authority. | `docs/AI/Architecture/A.1-Constitution.md`, with deltas tracked in a future constitutional alignment report if needed. | Harvest |
| `docs/AI/Specification/FrameworkSpecification.md` | Core subsystem list; planning hierarchy; workflow state machine; command boundaries; template contract model; review outcomes; validation-before-review model; state management model; orchestration relationship. | `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`, future v3 workflow/command/template/validation standards. | Harvest |
| `docs/AI/Specification/GovernanceModel.md` | Human authority model; decision classification; single-owner governance; quality gate sequence and outcomes; certification criteria; escalation model; conservative governance evolution rules. | `docs/FrameworkGovernance.md`, `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`, future v3 governance/certification standard. | Harvest |
| `docs/AI/Specification/ReferenceArchitecture.md` | Logical layer model; information flow; authority flow; adapter rules; extension roadmap; architectural principles. | `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`, future v3 reference/runtime architecture, future adapter standard. | Harvest |
| `docs/AI/Specification/RuntimeModel.md` | Agent lifecycle; runtime layer separation; context rules; memory strategy; multi-agent coordination rules; conflict resolution; swarm lifecycle; artifact-based runtime communication. | Future v3 runtime architecture, future agent/runtime standard, future multi-agent/swarm standard, `docs/AI/Meta/M.0-Framework-Meta-Model.md` for concept alignment. | Harvest blocker |
| `docs/AI/Specification/Terminology.md` | Canonical definitions for Agent, Authority, Certification, Command, Context, Governance, Knowledge, Memory, Planning, Project State, Review, Runtime, State, Swarm, Task, Template, Validation, Workflow; state taxonomy; planning sequence. | `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Meta/M.1-Artifact-Meta-Model.md`, future v3 glossary/terminology standard. | Harvest blocker |

### 5.1 Harvest Blockers

The following concepts must be harvested, explicitly mapped, or explicitly waived before the actual Specification move:

1. RC2 runtime lifecycle and runtime layers from `RuntimeModel.md` are not yet fully represented as a promoted v3 runtime standard.
2. RC2 context and memory strategy from `RuntimeModel.md` are not yet fully represented as promoted v3 operational architecture.
3. RC2 multi-agent and swarm coordination rules from `RuntimeModel.md` are not yet fully represented as promoted v3 runtime standards.
4. RC2 canonical terminology from `Terminology.md` is not yet fully reconciled with the v3 meta-model vocabulary and future glossary expectations.
5. RC2 workflow, command, template, validation, review, and certification subsystem boundaries from `FrameworkSpecification.md` still feed active operational directories and must be mapped before link rewrites.
6. RC2 quality gate and certification sequences from `GovernanceModel.md` need a target v3 governance/certification home or explicit governance waiver.
7. RC2 adapter model and future adapter examples from `ReferenceArchitecture.md` should be harvested into a v3 adapter standard or blueprint section before the file is moved.

## 6. Proposed Legacy Destination

The proposed destination for the eventual move is:

```text
docs/AI/Legacy/RC2/Specification/
```

The destination is appropriate because it preserves lineage and makes the legacy status explicit:

```text
docs/AI/Legacy/
    RC2/
        Specification/
            Constitution.md
            FrameworkSpecification.md
            GovernanceModel.md
            ReferenceArchitecture.md
            RuntimeModel.md
            Terminology.md
```

The actual move must not occur in this planning task. It should occur only after harvest completion or explicit governance waiver, link-impact remediation, validation, and approval.

## 7. Link Impact Analysis

### 7.1 Active Files That Still Depend on Specification

Repository link inspection found active dependencies on `docs/AI/Specification/` or RC2 Specification concepts in the following files:

- `.cursorrules`
- `AGENTS.md`
- `docs/FrameworkGovernance.md`
- `docs/AI/AIFramework.md`
- `docs/AI/README.md`
- `docs/AI/AgentSystemPrompt.md`
- `docs/AI/System/AuthorityModel.md`
- `docs/AI/System/BootSequence.md`
- `docs/AI/System/ContextAssembly.md`
- `docs/AI/System/README.md`
- `docs/AI/System/SourceOfTruth.md`
- `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md`
- `docs/AI/Certification/ProjectTemplateAdoptionReview.md`
- `docs/AI/Validation/README.md`
- `docs/AI/Validation/ValidationLevels.md`
- `docs/AI/Validation/ValidationCertification.md`
- `docs/AI/Validation/AIFrameworkValidation.md`
- `docs/AI/Lifecycle/README.md`
- `docs/AI/Lifecycle/ReleaseChecklist.md`
- `docs/AI/Testing/README.md`
- `docs/AI/Testing/Scenario-02-ImplementationTask.md`
- `docs/AI/Testing/Scenario-04-DocumentationTask.md`
- `docs/AI/Tooling/CursorRules.md`
- `docs/AI/Templates/Core/TemplateStandard.md`
- `docs/AI/Templates/Planning/VisionTemplate.md`
- `docs/AI/Templates/Platform/PlatformAdapterTemplate.md`
- `docs/AI/Templates/Project/CLIProjectTemplate.md`
- `docs/AI/Templates/Project/GenericProjectTemplate.md`
- `docs/AI/Templates/Project/LaravelProjectTemplate.md`
- `docs/AI/Templates/Project/LibraryProjectTemplate.md`
- `docs/AI/Templates/Project/NodeProjectTemplate.md`
- `docs/AI/Templates/Project/ReactProjectTemplate.md`
- `docs/AI/Templates/Project/SaaSProjectTemplate.md`
- `docs/AI/Templates/Project/SymfonyProjectTemplate.md`
- `docs/AI/Templates/Project/WordPressProjectTemplate.md`
- `docs/AI/Templates/Project/README.md`
- `docs/AI/Templates/README.md`
- Architecture reports and planning artifacts under `docs/AI/Architecture/Reports/`

### 7.2 Link Risk

The link risk is high if `docs/AI/Specification/` is moved before references are remediated because active boot, authority, prompt, validation, certification, lifecycle, testing, and template documents still point to RC2 Specification paths.

### 7.3 Required Link Handling Before Move

Before the actual move, one of the following must be done for each active reference:

1. Replace the reference with an approved v3 target document when a replacement exists.
2. Replace the reference with a legacy path if the active file intentionally references historical RC2 material.
3. Remove the reference only if the dependency is obsolete and governance approves removal.
4. Keep a transition stub or index at `docs/AI/Specification/` only if governance approves a temporary compatibility shim.

No automatic link rewrite should occur until harvest status and target authority are clear.

## 8. Operational Impact Analysis

Moving `docs/AI/Specification/` before harvest and link remediation would affect current operations in these ways:

- AI boot sequences reference the RC2 Constitution and other Specification files.
- Authority models still identify `docs/AI/Specification/Constitution.md` as the AI Framework constitution under the RC2 master entry.
- Validation and certification documents consume the RC2 Constitution, Framework Specification, Governance Model, Reference Architecture, Runtime Model, and Terminology.
- Testing scenarios reference Specification files as expected context.
- Project templates instruct agents to read the RC2 Constitution.
- The RC2 `AIFramework.md` Specification Map still points to the current Specification directory.
- Operational RC2 compatibility depends on stable references until v3 replacements are approved and promoted.

Operational impact is therefore unacceptable for an immediate move. The safe path is to harvest, map, remediate links, validate, then move.

## 9. Files That Must NOT Move Yet

The following must not move as part of the first actual Specification legacy migration:

- `docs/AI/System/`
- `docs/AI/Commands/`
- `docs/AI/Workflows/`
- `docs/AI/Templates/`
- `docs/AI/Validation/`
- `docs/AI/Certification/`
- `docs/AI/AIFramework.md`
- `docs/AI/AIOrchestrator.md`
- `docs/AI/README.md`
- `docs/AI/AgentSystemPrompt.md`
- `docs/FrameworkGovernance.md`
- `docs/ProjectStatus.md`
- `docs/DevelopmentPhases/`

These files either remain operational, own live project state, provide active governance, or define current boot/orchestration behavior. Moving them before approved v3 operational replacements would violate RC2 operational compatibility.

## 10. Safe Migration Phases

### Phase 1 — Harvest Preparation

- Freeze the migration scope to `docs/AI/Specification/` only.
- Confirm no ProjectStatus update is part of the migration task.
- Confirm the proposed legacy destination is `docs/AI/Legacy/RC2/Specification/`.
- Record all inbound links to Specification files.
- Record all concepts not yet represented in v3.

### Phase 2 — Content Harvest

- Compare `Constitution.md` against `docs/AI/Architecture/A.1-Constitution.md`.
- Compare `FrameworkSpecification.md` against `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`, and future standards needs.
- Compare `GovernanceModel.md` against `docs/FrameworkGovernance.md` and `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`.
- Compare `ReferenceArchitecture.md` against the v3 Blueprint RFC and future adapter/runtime architecture needs.
- Compare `RuntimeModel.md` against future v3 runtime, agent, context, memory, multi-agent, and swarm architecture needs.
- Compare `Terminology.md` against `docs/AI/Meta/M.0-Framework-Meta-Model.md`, `docs/AI/Meta/M.1-Artifact-Meta-Model.md`, and future glossary needs.
- Produce an explicit harvest completion note or waiver list.

### Phase 3 — Replacement Mapping

- Identify each active reference to `docs/AI/Specification/`.
- Assign each reference one of these target states: v3 replacement, legacy reference, temporary compatibility shim, obsolete.
- Do not rewrite operational references until approved replacements exist.

### Phase 4 — Pre-Move Validation

- Verify harvest completion or approved waiver.
- Verify no operational directory is included in the move.
- Verify all active references have an approved handling plan.
- Verify the destination directory exists or will be created by the move command.
- Verify no ProjectStatus update is included.

### Phase 5 — Actual Move

- Create `docs/AI/Legacy/RC2/Specification/`.
- Move only files from `docs/AI/Specification/` into the legacy destination.
- Do not move operational RC2 directories.
- Apply approved reference updates or compatibility shims in the same governed change set if required.

### Phase 6 — Post-Move Validation and Review

- Run link checks.
- Run documentation validation checks.
- Confirm boot and operational references resolve.
- Confirm no RC2 operational directory moved.
- Produce a completion report and review evidence.
- Update ProjectStatus only in a separate approved task if governance requires a live-state change.

## 11. Validation Checks Before Actual Move

Before the future actual move, run at minimum:

```bash
git status --short
find docs/AI -name AGENTS.md -print
rg -n "docs/AI/Specification|Specification/Constitution|Specification/FrameworkSpecification|Specification/GovernanceModel|Specification/ReferenceArchitecture|Specification/RuntimeModel|Specification/Terminology|AI Framework Constitution|Framework Specification|Governance Model|Runtime Model|Reference Architecture|Canonical Terminology" AGENTS.md .cursorrules docs --glob '*.md' --glob '.cursorrules'
test -f docs/AI/Specification/Constitution.md
test -f docs/AI/Specification/FrameworkSpecification.md
test -f docs/AI/Specification/GovernanceModel.md
test -f docs/AI/Specification/ReferenceArchitecture.md
test -f docs/AI/Specification/RuntimeModel.md
test -f docs/AI/Specification/Terminology.md
test ! -e docs/AI/Legacy/RC2/Specification || find docs/AI/Legacy/RC2/Specification -maxdepth 1 -type f -print
git diff --check
```

After the future actual move, run at minimum:

```bash
test -f docs/AI/Legacy/RC2/Specification/Constitution.md
test -f docs/AI/Legacy/RC2/Specification/FrameworkSpecification.md
test -f docs/AI/Legacy/RC2/Specification/GovernanceModel.md
test -f docs/AI/Legacy/RC2/Specification/ReferenceArchitecture.md
test -f docs/AI/Legacy/RC2/Specification/RuntimeModel.md
test -f docs/AI/Legacy/RC2/Specification/Terminology.md
test ! -d docs/AI/Specification || find docs/AI/Specification -maxdepth 1 -type f -print
rg -n "docs/AI/Specification|Specification/Constitution|Specification/FrameworkSpecification|Specification/GovernanceModel|Specification/ReferenceArchitecture|Specification/RuntimeModel|Specification/Terminology" AGENTS.md .cursorrules docs --glob '*.md' --glob '.cursorrules'
git diff --check
```

If active references remain, the move must either include approved reference updates, include an approved compatibility shim, or stop for governance review.

## 12. Rollback Strategy

If the future actual move causes unresolved links, operational boot failures, validation failures, or governance objections, roll back by restoring the Specification directory to its previous location.

Recommended rollback command if the move has not been committed:

```bash
git restore --staged docs/AI/Specification docs/AI/Legacy/RC2/Specification
git restore docs/AI/Specification docs/AI/Legacy/RC2/Specification
```

If the move has been committed but not merged, use a revert commit:

```bash
git revert <migration-commit-sha>
```

After rollback, rerun:

```bash
test -f docs/AI/Specification/Constitution.md
git diff --check
```

Rollback must not update `docs/ProjectStatus.md` unless a separate approved state-repair task explicitly requires it.

## 13. Recommended First Actual Move Command

The first actual move command should be delayed until harvest is complete or explicitly waived and link handling is approved.

When approved, the recommended first command is:

```bash
mkdir -p docs/AI/Legacy/RC2/Specification && git mv docs/AI/Specification/*.md docs/AI/Legacy/RC2/Specification/
```

This command intentionally moves only the RC2 Specification markdown files and does not move System, Commands, Workflows, Templates, Validation, or Certification directories.

Do not run this command in the current planning task.

## 14. Final Recommendation

Proceed with RC2 Specification harvest first, then move Specification to `docs/AI/Legacy/RC2/Specification/` after validation.

The actual move should not occur until all harvest blockers are resolved or explicitly waived, all active links have an approved handling plan, operational RC2 directories remain untouched, and validation confirms that boot, authority, validation, certification, lifecycle, testing, and template references will not break.

#AI-DOS v3 Authority Alignment Plan

> Documentation-only planning artifact. This plan proposes future edits only. It does not apply edits, move files, or update `docs/ProjectStatus.md`.

## Status

| Property | Value |
| --- | --- |
| Document |AI-DOS v3 Authority Alignment Plan |
| Type | Architecture Alignment Plan |
| Status | Draft Plan |
| Mode | Documentation-only planning |
| Output Path | `docs/AI/Architecture/Reports/AI-DOS-v3-Authority-Alignment-Plan.md` |
| Governing Input | `docs/AI/Architecture/A.0-Framework-Audit.md` Section 19 — Migration Strategy |
| Requested Governing Input | `AI-DOS-v3-Migration-Strategy.md` |
| Important Note | No standalone file named `AI-DOS-v3-Migration-Strategy.md` was found in the repository during plan creation. The migration strategy embedded in A.0 Section 19 is therefore treated as the available governing migration input for this plan. |

---

## 1. Purpose

This plan defines the exact future edits required to align the currentAI-DOS RC2 authority surface with the emergingAI-DOS v3 authority model while preserving operational stability.

The plan covers these files only:

- `AGENTS.md`
- `docs/AI/README.md`
- `docs/AI/AIFramework.md`
- `docs/AI/FrameworkGovernance.md`
- `docs/ProjectStatus.md`
- `docs/AI/System/AuthorityModel.md`
- `docs/AI/AgentSystemPrompt.md`

This plan does not authorize applying those edits. A later approved refactor task must apply them.

---

## 2. Governing Migration Constraints

Future edits must follow these constraints:

1. Preserve `AGENTS.md` as bootstrap authority.
2. Promote `docs/AI/Architecture/A.1-Constitution.md` as targetAI-DOS v3 constitutional authority only after explicit approval.
3. Keep `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` transitional until ratified.
4. Preserve RC2 operational compatibility temporarily.
5. Prevent `docs/ProjectStatus.md` drift by keeping it live-state-only.
6. Introduce v3 references as transitional alignment references, not as silently effective authority.
7. Require validation, review, and approval before changing authority chains.
8. Preserve traceability from legacy RC2 authority to target v3 authority.

---

## 3. Target Transitional Authority Model

### 3.1 Current Effective Authority During Transition

Until v3 promotion is approved, agents and humans should continue to treat this as the effective authority chain:

```text
Human instruction for the active task, when valid and non-conflicting
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
Current Phase / Stage / Capability
    ↓
Generated Task
```

### 3.2 Target v3 Authority After Approval

After explicit approval and validation, the intended v3 constitutional chain should become:

```text
Human Governance
    ↓
AGENTS.md
    ↓
docs/AI/Architecture/A.1-Constitution.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
    ↓
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
    ↓
Planning / Workflow / Command / Validation / Review artifacts
```

### 3.3 Transitional Rule

`A.1`, `M.0`, `M.1`, and `STD-000` may be referenced as target v3 architecture during transition, but they must not override `AGENTS.md`, RC2 operational rules, or `docs/ProjectStatus.md` until promotion is approved.

---

## 4. Exact Proposed Future Edits by File

### 4.1 `AGENTS.md`

Proposed edits:

1. Add a new subsection under `# 0. Authority` titled `## 0.1 v3 Transitional Authority Alignment`.
2. State that `AGENTS.md` remains the bootstrap authority before, during, and after v3 migration.
3. Add this exact transitional statement:

```text
DuringAI-DOS v3 migration, docs/AI/Architecture/A.1-Constitution.md, docs/AI/Meta/M.0-Framework-Meta-Model.md, docs/AI/Meta/M.1-Artifact-Meta-Model.md, and docs/AI/Architecture/Standards/STD-000-Framework-Standards.md are target v3 authority candidates until explicitly approved and promoted through governance.
```

4. Add this exact non-promotion statement:

```text
No v3 architecture, meta model, standard, RFC, report, or blueprint supersedes this document unless this document is explicitly amended to recognize that promotion.
```

5. Add this exact Blueprint statement:

```text
TheAI-DOS Blueprint RFC remains transitional and non-canonical until ratified by Framework Governance and explicitly referenced by this document or another approved authority document.
```

6. Add a `Current Effective Authority` chain preserving RC2 compatibility.
7. Add a `Target v3 Authority After Approval` chain that lists `A.1`, `M.0`, `STD-000`, and `M.1` below `AGENTS.md`.
8. Do not remove existing core principles, boot sequence, planning model, validation rules, or completion rules.

### 4.2 `docs/AI/README.md`

Proposed edits:

1. Change status from `AI Framework v1.0 RC2 Entry Point` to `AI Framework RC2 / v3 Transitional Entry Point`.
2. Add `v3 Transitional Architecture` to the Framework Map with these entries:

```text
docs/AI/Architecture/A.1-Constitution.md
docs/AI/Meta/M.0-Framework-Meta-Model.md
docs/AI/Meta/M.1-Artifact-Meta-Model.md
docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md
```

3. Add a warning that v3 documents are target architecture until promotion.
4. Update reading order by inserting a transitional branch after `docs/AI/AIFramework.md`:

```text
v3 transitional review, when the task concerns v3 architecture:
    docs/AI/Architecture/A.1-Constitution.md
    docs/AI/Meta/M.0-Framework-Meta-Model.md
    docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
    docs/AI/Meta/M.1-Artifact-Meta-Model.md
```

5. Preserve existing RC2 reading order for operational tasks.
6. Add `Blueprint RFC` under a new `Transitional RFC Material` heading, explicitly marked non-canonical.

### 4.3 `docs/AI/AIFramework.md`

Proposed edits:

1. Change title from `# AI Framework v1.0 RC2` to `# AI Framework RC2 / v3 Transitional Framework Entry`.
2. Change Status from `Release Candidate 2` to `RC2 Operational Compatibility / v3 Alignment In Progress`.
3. Add a new section after `# Purpose` titled `# v3 Transitional Authority Notice`.
4. State that RC2 operational documents remain valid during migration.
5. State that `A.1` is the target v3 constitutional authority only after approval.
6. State that `M.0`, `M.1`, and `STD-000` are target v3 model/standard authorities only after approval.
7. Add a compatibility table:

| Layer | Current RC2 Authority | Target v3 Candidate | Transitional Rule |
| --- | --- | --- | --- |
| Bootstrap | `AGENTS.md` | `AGENTS.md` | Unchanged |
| Constitution | `docs/AI/Specification/Constitution.md` | `docs/AI/Architecture/A.1-Constitution.md` | A.1 candidate until approved |
| Meta Model | Not formalized in RC2 | `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Candidate until approved |
| Artifact Model | Not formalized in RC2 | `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Candidate until approved |
| Standards Governance | Distributed RC2 docs | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Candidate until approved |
| Operations | Orchestrator, Commands, Workflows | Existing docs plus future v3 updates | Preserve RC2 compatibility |

8. Do not delete the RC2 Specification Map until replacement v3 documents are approved and operationally mapped.

### 4.4 `docs/AI/FrameworkGovernance.md`

Proposed edits:

1. Add a section titled `v3 Promotion Governance`.
2. Define promotion states:

```text
Draft → Review Candidate → Approved for Transitional Use → Promoted Canonical → Deprecated / Superseded
```

3. Add explicit rule: `ProjectStatus.md` cannot promote architecture; it can only record operational position after approval.
4. Add explicit rule: Blueprint RFC remains RFC until ratified.
5. Add exact approval requirements for `A.1`, `M.0`, `M.1`, and `STD-000` using the checklist in Section 6 of this plan.
6. Add a rollback authority rule: if v3 edits introduce conflict, revert to `AGENTS.md` + RC2 authority chain.
7. Preserve existing change-control categories but extend `Constitutional Change` to include promotion of `A.1`.

### 4.5 `docs/ProjectStatus.md`

Proposed edits:

1. Do not change active phase, active stage, active historical capability, or immediate next work unless a separate approved state-update task authorizes it.
2. Add only a small `Authority Alignment Note` if and only if governance approves such a note:

```text
AI-DOS v3 authority alignment is in planning. v3 documents remain draft or transitional unless promoted by AGENTS.md and Framework Governance. This ProjectStatus document records live operational state only and does not promote architecture.
```

3. Add a `Drift Prevention Rule`:

```text
ProjectStatus must not be used to redefine architecture, promote draft documents, ratify RFCs, or supersede authority documents.
```

4. Do not list `A.1`, `M.0`, `M.1`, or `STD-000` as active canonical authority until promotion is approved elsewhere.

### 4.6 `docs/AI/System/AuthorityModel.md`

Proposed edits:

1. Change status to `AI Framework RC2 / v3 Transitional Operating Procedure`.
2. Add `Current Effective Authority` and `Target v3 Authority After Approval` chains.
3. Explicitly state that tool-facing agents must apply RC2 authority for operational tasks until v3 promotion.
4. Add conflict-resolution rule:

```text
If a v3 draft document conflicts with AGENTS.md or RC2 operational rules before promotion, follow AGENTS.md and RC2 operational rules and report the conflict.
```

5. Add Blueprint RFC rule:

```text
Blueprint RFC material may inform planning but must not be treated as canonical architecture until ratified.
```

6. Add ProjectStatus drift rule matching Section 4.5.

### 4.7 `docs/AI/AgentSystemPrompt.md`

Proposed edits:

1. Change status to `Tool-Facing Agent Rule Set — RC2 / v3 Transitional`.
2. Correct the current stale path `docs/DevelopmentPhases/AI-DOS2-DevelopmentPhases.md` to `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`.
3. Add v3 transitional reading rules after `docs/AI/AIFramework.md` for v3-specific tasks.
4. Add explicit instruction:

```text
Do not treat A.1, M.0, M.1, STD-000, or the Blueprint RFC as promoted canonical authority unless the active task includes approved promotion evidence or AGENTS.md has been amended to recognize promotion.
```

5. Preserve RC2 operational boot sequence for normal execution tasks.
6. Add explicit non-drift rule for `docs/ProjectStatus.md`.
7. Add a blocker rule requiring agents to stop if authority promotion state is unclear.

---

## 5. Blueprint RFC Transitional Handling

`docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` should remain transitional until ratified.

Future edits should describe it as:

- RFC material;
- planning input;
- non-canonical unless ratified;
- not a source of authority over `AGENTS.md`, `A.1`, `M.0`, `M.1`, `STD-000`, Governance, or ProjectStatus;
- eligible for promotion only through explicit governance approval.

---

## 6. Approval Checklist for Promotion

### 6.1 A.1 — Constitution Promotion Checklist

Before promoting `docs/AI/Architecture/A.1-Constitution.md`:

- [ ] Human Governance explicitly approves A.1 promotion.
- [ ] `AGENTS.md` is amended to recognize A.1 as the target v3 constitutional authority below bootstrap authority.
- [ ] A.1 conflicts with `AGENTS.md` are resolved or documented as intentional amendments.
- [ ] A.1 is reviewed against RC2 `docs/AI/Specification/Constitution.md`.
- [ ] Migration notes identify superseded RC2 constitutional sections.
- [ ] AuthorityModel and AgentSystemPrompt are updated to reflect promotion.
- [ ] FrameworkGovernance records constitutional change requirements.
- [ ] ProjectStatus is updated only after certification and only as live state.

### 6.2 M.0 — Framework Meta Model Promotion Checklist

Before promoting `docs/AI/Meta/M.0-Framework-Meta-Model.md`:

- [ ] A.1 promotion is approved or M.0 promotion is explicitly approved as conditional transitional architecture.
- [ ] M.0 identity, lifecycle, authority, ownership, evidence, validation, review, certification, and reference concepts are reviewed against existing RC2 terminology.
- [ ] Downstream dependencies are listed.
- [ ] Conflicts with RC2 specification modules are documented.
- [ ] Validation confirms M.0 does not redefine bootstrap authority or live project state.
- [ ] Governance approves M.0 as canonical meta model.

### 6.3 M.1 — Artifact Meta Model Promotion Checklist

Before promoting `docs/AI/Meta/M.1-Artifact-Meta-Model.md`:

- [ ] A.1 and M.0 dependencies are approved or explicitly accepted as transitional dependencies.
- [ ] M.1 derives from M.0 and does not redefine M.0 foundational concepts.
- [ ] M.1 authority chain is corrected if any relative links point to non-existent paths.
- [ ] M.1 lifecycle and identity rules are validated against existing artifacts.
- [ ] Standards consuming M.1 are identified.
- [ ] Governance approves M.1 as canonical artifact meta model.

### 6.4 STD-000 — Framework Standards Promotion Checklist

Before promoting `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`:

- [ ] A.1 and M.0 are approved or explicitly accepted as transitional dependencies.
- [ ] STD-000 path and links are validated.
- [ ] STD-000 does not conflict with FrameworkGovernance or AGENTS.md.
- [ ] Standards lifecycle states are reviewed and accepted.
- [ ] Standards registry and certification requirements are accepted.
- [ ] Blueprint RFC status remains separate and non-canonical unless independently ratified.
- [ ] Governance approves STD-000 as canonical standards governance.

---

## 7. Validation Checks Before Applying Edits

Before any future task applies the proposed edits, run these checks:

```bash
find . -name AGENTS.md -print
```

```bash
test -f docs/AI/Architecture/A.1-Constitution.md
```

```bash
test -f docs/AI/Meta/M.0-Framework-Meta-Model.md
```

```bash
test -f docs/AI/Meta/M.1-Artifact-Meta-Model.md
```

```bash
test -f docs/AI/Architecture/Standards/STD-000-Framework-Standards.md
```

```bash
test -f docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md
```

```bash
rg -n "AI-DOS2-DevelopmentPhases|ForgeAI-DevelopmentPhases|v1.0 RC2|A\.1|M\.0|M\.1|STD-000|Blueprint RFC" AGENTS.md docs/AI/README.md docs/AI/AIFramework.md docs/AI/FrameworkGovernance.md docs/ProjectStatus.md docs/AI/System/AuthorityModel.md docs/AI/AgentSystemPrompt.md
```

```bash
rg -n "Status\s*\| Draft|\*\*Status\*\* \| Draft|Status:.*RC2|Blueprint RFC|ratified|canonical" docs/AI/Architecture/A.1-Constitution.md docs/AI/Meta/M.0-Framework-Meta-Model.md docs/AI/Meta/M.1-Artifact-Meta-Model.md docs/AI/Architecture/Standards/STD-000-Framework-Standards.md docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md
```

Manual validation checklist:

- [ ] No proposed edit changes active project state.
- [ ] No proposed edit declares A.1 canonical before approval.
- [ ] No proposed edit declares Blueprint RFC canonical before ratification.
- [ ] RC2 operational command/workflow compatibility remains intact.
- [ ] All authority chains preserve `AGENTS.md` as bootstrap authority.
- [ ] `ProjectStatus.md` remains live operational state only.
- [ ] Broken path references are identified before edits are applied.

---

## 8. Rollback Strategy

If future authority-alignment edits introduce conflict or operational instability:

1. Revert changes to the seven aligned files as a single rollback unit.
2. Restore the pre-alignment effective authority chain:

```text
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/FrameworkGovernance.md
    ↓
docs/ProjectStatus.md
```

3. Leave v3 documents in place as draft/transitional material.
4. Do not delete or move `A.1`, `M.0`, `M.1`, `STD-000`, or Blueprint RFC documents as part of rollback unless a separate migration-cleanup task approves it.
5. Add a rollback report under `docs/AI/Architecture/Reports/` documenting:
   - conflict discovered;
   - files reverted;
   - validation evidence;
   - remaining blockers;
   - recommended corrected alignment task.
6. Do not update `ProjectStatus.md` during rollback unless rollback certification explicitly authorizes a state update.

---

## 9. Recommended First Actual Refactor Task

The first actual refactor task should be:

> Apply a minimal v3 transitional authority notice to `AGENTS.md`, `docs/AI/AIFramework.md`, `docs/AI/System/AuthorityModel.md`, and `docs/AI/AgentSystemPrompt.md`, without promoting A.1, M.0, M.1, STD-000, or the Blueprint RFC, and without updating `docs/ProjectStatus.md`.

Rationale:

- It protects bootstrap authority first.
- It gives agents clear tool-facing transition rules.
- It preserves RC2 compatibility.
- It prevents accidental ProjectStatus drift.
- It avoids premature canonical promotion.

The refactor should not modify `docs/ProjectStatus.md` in its first pass.

---

## 10. Non-Goals

This plan does not:

- apply authority edits;
- promote A.1;
- ratify the Blueprint RFC;
- move files;
- update live project state;
- deprecate RC2 operational documents;
- certify v3 architecture;
- rewrite commands, workflows, templates, validation, review, or lifecycle documents.

---

## 11. Completion Criteria for This Plan

This plan is complete when it provides:

- proposed edits for each requested file;
- an approval checklist for A.1, M.0, M.1, and STD-000;
- validation checks before edits;
- rollback strategy;
- first recommended refactor task;
- explicit preservation of bootstrap authority, RC2 compatibility, Blueprint RFC transitional status, and ProjectStatus integrity.

---
name: forge-ai-governance
description: Canonical Forge AI Target Project governance skill. Resolves Target Project authority, current operational state, and bounded-execution procedure. Use before classifying, planning, editing, validating, reviewing, or reporting any work in this repository, regardless of which AI host or tool is operating.
---

<!--
Identifier: FORGE-AI.TARGET.SKILL.GOVERNANCE
Title: Forge AI Governance Skill — Canonical Definition
Classification: Forge AI Target Project Truth
Owner: Forge AI Target Project Governance
Approval Authority: Human Governance
-->

# Forge AI Governance Skill

## 1. Role

This is the single canonical Forge AI Target Project governance skill. It is Target-owned truth under `docs/Projects/ForgeAI/` and is tool- and provider-independent.

Any AI host or automation — Codex, Claude Code, or another agent — that discovers this skill through a tool-specific adapter must treat this file, not the adapter, as authoritative. Adapters exist only to help a specific host find this file; they carry no independent governance content.

This skill does not define AI-DOS product truth, a new governance model, a new workflow family, or a new architecture layer. It is a bounded entry point into the existing Forge AI and AI-DOS contracts.

## 2. Mandatory Reading Order

Before classifying, planning, editing, validating, reviewing, or reporting any work in this repository, read and follow, in order:

1. Root `AGENTS.md` — repository entry and contract discovery.
2. `docs/Projects/ForgeAI/Mission/AGENTS.md` — canonical Forge AI Target Project contract.
3. `docs/AI/AGENTS.md` — AI-DOS provider entry contract.

Root `AGENTS.md` is the authoritative source for this order and for any future contract changes. If this skill and root `AGENTS.md` ever disagree, root `AGENTS.md` governs.

## 3. Current Operational State

This skill contains no current phase, work-unit count, pull-request number, task ID, or other transient state, and it will never be edited to add any. The only source of current Forge AI operational state is:

`docs/Projects/ForgeAI/Planning/ProjectStatus.md`

Read ProjectStatus fresh at the start of every session or task. Do not infer current state from this skill, from commit history, from implementation files, or from memory of a prior session.

## 4. Authority Resolution Order

Resolve Target-side work context in the order defined by the canonical Target Project contract:

```text
Target Operational Entry (ProjectStatus)
    ↓
ProjectStatus
    ↓
DevelopmentPhases
    ↓
Roadmap
    ↓
Task-specific Target authority, when declared
```

## 5. Bounded-Work Procedure

1. Resolve the exactly one active task, or exactly one authorized next action, from ProjectStatus.
2. Confirm the requested or resolved work does not exceed that authorization.
3. Preserve every protected area declared by the canonical Target Project contract and by ProjectStatus.
4. Execute only the authorized scope; do not expand objectives, files, or follow-up work by implication.
5. Run applicable validation and produce evidence.
6. Report objective, scope, changed artifacts, validation results, protected-area confirmation, blockers, and exactly one recommended next step.
7. Do not mutate ProjectStatus, Roadmap, DevelopmentPhases, or Mission documents without exact Human Governance authorization, or uniquely derivable Human Governance approval intent, as defined by the canonical Target Project contract.
8. If exactly one bounded authorized action cannot be resolved, stop and report a blocker rather than inventing work.

## 6. Protected Areas

Protected areas are declared by the canonical Target Project contract (`docs/Projects/ForgeAI/Mission/AGENTS.md`) and by `ProjectStatus.md`, not by this skill. This skill does not redefine, narrow, or widen those protections. A protected-area conflict must stop work and be reported as a blocker.

## 7. Product / Project Boundary

`docs/AI/` contains AI-DOS product truth only. Forge AI Target Project truth — mission, planning, operational state, evidence, and this skill itself — lives under `docs/Projects/ForgeAI/`. Do not insert Forge AI Target Project truth into `docs/AI/`, and do not insert AI-DOS product truth into `docs/Projects/ForgeAI/`.

## 8. Tool Adapters

Tool-specific discovery adapters — for example `.agents/skills/forge-ai-governance/SKILL.md` for Codex and `.claude/skills/forge-ai-governance/SKILL.md` for Claude Code — exist only to help a specific AI host discover this canonical skill. Adapters:

- must not restate Forge AI governance semantics;
- must not embed current phase, PR, work-unit, or date-specific state;
- must not diverge from this file;
- must point back to this file as the single canonical source.

Additional tool adapters may be added for other AI hosts under the same rule without modifying this file.

## 9. Non-Goals

This skill does not:

- define AI-DOS architecture, workflows, or product truth;
- create a new Standard, Meta Model, Governance model, Workflow family, or architecture layer;
- record, claim, or infer current phase, capability, work-unit, or approval state;
- authorize implementation, ProjectStatus mutation, or capability activation by itself;
- replace Human Governance.

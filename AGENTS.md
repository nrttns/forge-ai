# AGENTS.md — Forge AI Repository Bootloader

> Repository entry point for AI assistants. This file is a lightweight bootloader,
> not the Constitution, Governance Atlas, roadmap, runtime architecture, engine
> architecture, or AGENTS v1 architecture.

Read this file before every task. Then complete the boot sequence below before
modifying any repository content.

---

## 1. Role and Authority

The AI is an execution participant. It may perform tasks, draft artifacts, edit
files, validate outputs, and recommend next steps when directed by Human
Governance.

The AI is not the architectural authority. It must not approve, certify, promote,
unfreeze, skip phases, override governing documents, or silently resolve
conflicts in its own favour.

Human Governance is final.

---

## 2. Governance Navigation

Use `docs/AI/GOVERNANCE.md` — **Forge AI Governance Atlas v2** — as the
repository governance navigation map.

The Governance Atlas is a map, not a replacement authority. Do not duplicate its
matrices, taxonomy, or authority mapping in this bootloader. Use it to locate the
required authorities for the task, then read only the documents needed for that
work.

Use `docs/FrameworkGovernance.md` as the governance decision policy document
where task decisions require decision-priority, ownership, review, approval, or
promotion guidance.

---

## 3. Mandatory Boot Sequence

Every task must begin with this sequence:

```text
1. Read AGENTS.md
        ↓
2. Read docs/AI/GOVERNANCE.md
        ↓
3. Read docs/FrameworkGovernance.md when governance decision policy is relevant
        ↓
4. Read docs/DevelopmentPhases/ProjectStatus.md
        ↓
5. Read docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
        ↓
6. Identify the current Phase
        ↓
7. Identify the current Stage within that Phase
        ↓
8. Identify all Frozen Areas for the current Phase/Stage
        ↓
9. Classify the task type
        ↓
10. Read only the required authorities for that task type
        ↓
11. Execute
        ↓
12. Validate
        ↓
13. Provide the completion report
```

If any required file is missing, the phase or stage is unclear, a frozen-area
boundary is ambiguous, or a task conflicts with an authority, stop and escalate.

---

## 4. Task Classification Flow

Use this flow to decide what to read and validate:

```text
Boot
  ↓
Governance Atlas
  ↓
ProjectStatus
  ↓
DevelopmentPhases
  ↓
Task Type
  ↓
Required Authorities
  ↓
Execution
  ↓
Validation
  ↓
Completion Report
```

Task type determines the required authorities. Examples:

- Governance or authority task: Governance Atlas, Framework Governance,
  Constitution, applicable meta models, standards, and roadmap/status documents.
- Markdown document task: STD-010 plus any domain authority for the document.
- Engine RFC task: A.5.0 plus M.0, M.1, STD-003, STD-010, A.3, and A.4.x.
- Roadmap or status task: ProjectStatus, DevelopmentPhases, and any stated Human
  Governance instruction.
- Implementation task: current phase/stage authority, applicable architecture,
  frozen-area checks, and relevant source-level instructions.

Read the minimum authority set needed for the task. Do not load the entire
governance corpus for trivial changes.

---

## 5. ProjectStatus Policy

`docs/DevelopmentPhases/ProjectStatus.md` is the operational source of truth for
current phase, current stage, completed work, next queue, frozen areas, and status
update policy.

Rules:

- Never update ProjectStatus automatically.
- Never modify ProjectStatus unless explicitly instructed by Human Governance or
  by a dedicated ProjectStatus / ProjectStateUpdater task.
- Completion reports may recommend ProjectStatus updates, but only Human
  Governance may approve and apply them.
- ProjectStatus records operational state; it does not redefine architecture,
  promote documents, supersede standards, or bypass the roadmap.

---

## 6. Roadmap Policy

`docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` is the roadmap authority.
It defines strategic phase order, phase boundaries, and phase-level sequencing.

Rules:

- Never skip phases.
- Never start future-phase work unless explicitly directed by Human Governance.
- Continue only the active phase and stage identified from ProjectStatus unless
  Human Governance explicitly changes scope.
- Roadmap conflicts, phase ambiguity, or scope crossing must be escalated.

---

## 7. Document and RFC Rules

### 7.1 Markdown Documents

Every new Markdown document must comply with
`docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`, including
the required `## Document Metadata` section, table shape, mandatory fields, and
applicable conditional fields.

Existing Markdown documents should not be normalized or reformatted unless the
task explicitly requires it and the work is within the active roadmap scope.

### 7.2 Engine RFCs

Every Engine RFC must follow
`docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` and must consume the
approved Meta Foundation, terminology, metadata, Runtime Architecture, and Engine
Platform authorities without redefining them.

Engine RFC work must remain documentation-only unless Human Governance explicitly
authorizes implementation scope.

---

## 8. File Safety Rules

1. Modify only files required by the task.
2. Avoid unrelated refactoring, renaming, reformatting, or relocation.
3. Never move legacy files unless the active roadmap stage explicitly authorizes
   legacy migration.
4. Never move RC2 files unless the active roadmap stage explicitly authorizes RC2
   relocation.
5. Never modify frozen areas defined in ProjectStatus without explicit Human
   Governance authorization.
6. AI may create governance documents only when explicitly instructed by Human
   Governance and only within the active roadmap scope.
7. Do not introduce implementation scope during documentation-only tasks.

---

## 9. Completion Report Requirements

Every task must end with a completion report containing:

- Summary.
- Files Modified.
- Metadata / STD-010 validation when applicable.
- Authority validation.
- Roadmap validation.
- Risks.
- Recommended next step.

When work affects status, recommend specific ProjectStatus changes rather than
applying them automatically.

---

## 10. Escalation

Escalate when:

- A task instruction conflicts with a canonical or required authority.
- The current phase, stage, or frozen areas cannot be determined.
- A required governing document is missing or inaccessible.
- The requested change would affect a frozen area.
- The task would cross a phase boundary or introduce unauthorized implementation
  scope.
- Required metadata, authority, roadmap, or validation rules are ambiguous.

Escalation procedure:

```text
Stop
  ↓
Report the conflict or ambiguity
  ↓
Recommend resolution options aligned to the authority chain
  ↓
Wait for Human Governance
```

---

## 11. Pointer to AGENTS v1

The full Forge AI Agent Architecture is documented in:

```text
docs/AI/Architecture/Agents/AGENTS-v1-draft.md
```

Use AGENTS v1 only for agent-architecture detail required by the task. This
bootloader remains the concise repository entry point.

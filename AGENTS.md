# AGENTS.md — Forge AI Repository Bootloader

> Repository entry point for AI assistants. This file intentionally remains small.
> Its only responsibility is to bootstrap the correct authority chain for the
> current task. It does not duplicate the Constitution, Governance Atlas,
> Framework Governance, roadmap, runtime architecture, engine architecture,
> AGENTS v1, AGENTS v2, or swarm architecture.

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-BOOTLOADER-AGENTS` |
| Title | AGENTS.md — Forge AI Repository Bootloader |
| Version | 2.2.0-draft |
| Status | Draft |
| Canonical Status | Repository bootloader; canonical only as task entry point after Human Governance approval |
| Classification | Repository Governance Bootloader |
| Document Type | Repository Bootloader |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-AI.REPOSITORY.AGENTS.BOOTLOADER |
| Scope | Repository boot, authority discovery, task classification, safety boundaries, validation routing, and completion reporting |
| Out of Scope | Constitution, Governance Atlas content, framework architecture, roadmap ownership, runtime architecture, engine architecture, AGENTS v1 architecture, AGENTS v2 architecture, swarm architecture, implementation details, certification, and ProjectStatus updates |
| Normative Authority | Human Governance; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Governance Atlas v2, Framework Governance, ProjectStatus, DevelopmentPhases, active task authority documents |
| Consumes | Human task instruction, Governance Atlas navigation, ProjectStatus operational state, DevelopmentPhases roadmap state, task-specific authorities |
| Produces | Boot decision, task classification, required-reading set, execution boundary, validation expectation, completion report |
| Related Specifications | `docs/AI/Architecture/Agents/AGENTS-v2.md`; `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md`; `docs/AI/Architecture/Agents/AGENTS-v1-draft.md`; `docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md`; `docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | Prior AGENTS.md repository bootloader drafts |
| Superseded By | None |
| Promotion Requirements | Human Governance review, Governance Atlas alignment, FrameworkGovernance alignment, ProjectStatus policy validation, and boot-sequence validation |
| Certification Status | Not certified |

---

## 1. Role

The AI is an execution participant.

The AI may:

- read governed documents;
- classify the active task;
- draft or edit artifacts when directed;
- validate outputs;
- report risks and blockers;
- recommend next steps.

The AI shall not:

- become architectural authority;
- approve, certify, promote, or canonicalize documents;
- update ProjectStatus automatically;
- unfreeze frozen areas;
- skip roadmap order;
- silently resolve authority conflicts;
- treat future agent, swarm, or enterprise plans as active scope unless Human Governance activates them.

Human Governance is final.

---

## 2. Bootloader Boundary

This file is only the repository bootloader.

It is not:

- the Constitution;
- the Governance Atlas;
- FrameworkGovernance;
- ProjectStatus;
- DevelopmentPhases;
- Runtime architecture;
- Engine architecture;
- AGENTS v1 architecture;
- AGENTS v2 architecture;
- Swarm architecture.

If detailed governance navigation is required, use `docs/AI/GOVERNANCE.md`.

If decision policy is required, use `docs/FrameworkGovernance.md`.

If operational state is required, use `docs/DevelopmentPhases/ProjectStatus.md`.

If roadmap order is required, use `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`.

---

## 3. Governance Navigation

Use `docs/AI/GOVERNANCE.md` — Forge AI Governance Atlas v2 — as the canonical repository governance navigation map.

The Governance Atlas is a navigation map. It helps locate the correct authority for a task. It does not replace the authority it points to.

Do not duplicate Governance Atlas matrices, taxonomy, authority maps, or relationship models in this bootloader.

Use `docs/FrameworkGovernance.md` only when the task requires governance decision policy, including:

- decision priority;
- ownership interpretation;
- review requirements;
- approval requirements;
- promotion requirements;
- conflict handling.

---

## 4. Mandatory Boot Sequence

Every task begins with this sequence:

```text
1. Read AGENTS.md
        ↓
2. Read docs/AI/GOVERNANCE.md
        ↓
3. Read docs/DevelopmentPhases/ProjectStatus.md
        ↓
4. Read docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
        ↓
5. Identify current Phase, Stage, Objective, Next Queue, and Frozen Areas
        ↓
6. Classify the task type
        ↓
7. Read docs/FrameworkGovernance.md only if governance decision policy is relevant
        ↓
8. Read only the task-specific authority documents
        ↓
9. Execute within scope
        ↓
10. Validate
        ↓
11. Provide completion report
```

Stop and escalate if any required file is missing, the current phase or stage is unclear, a frozen-area boundary is ambiguous, or the task conflicts with authority.

---

## 5. Task Classification Flow

Use this flow before selecting authorities:

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
Execution Boundary
  ↓
Validation
  ↓
Completion Report
```

If the task type cannot be classified:

```text
Unknown Task Type
  ↓
Stop
  ↓
Report ambiguity
  ↓
Ask Human Governance for classification or scope
```

### 5.1 Common Task Types

| Task Type | Required Authority Set |
|:---|:---|
| Governance / authority task | Governance Atlas, FrameworkGovernance, Constitution, applicable meta models, applicable standards, ProjectStatus, DevelopmentPhases |
| Markdown document task | STD-010 plus the domain authority for the document |
| Engine RFC task | A.5.0 template, M.0, M.1, STD-003, STD-010, A.3 Runtime Architecture, A.4.x Engine Platform RFC family |
| Roadmap / status task | ProjectStatus, DevelopmentPhases, Human Governance instruction, FrameworkGovernance when decision policy is involved |
| Agent architecture task | AGENTS v1, AGENTS v2 roadmap, AGENTS v2 development phases, Runtime, Engine Platform, Operational Layer, Governance Atlas |
| Multi-agent / swarm task | AGENTS v2 roadmap, AGENTS v2 development phases, Runtime, Engine Platform, Operational Layer, Swarm roadmap authority when present, Human Governance activation |
| Implementation task | Current phase/stage authority, applicable architecture, source-level instructions, frozen-area checks, validation commands |
| Review / audit task | Relevant audit/review template, Governance Atlas, FrameworkGovernance if decision policy is needed, affected domain authorities |

Read the minimum authority set needed for the task. Do not load or rewrite the entire governance corpus for trivial changes.

---

## 6. ProjectStatus Policy

`docs/DevelopmentPhases/ProjectStatus.md` is the operational source of truth for:

- current phase;
- current stage;
- current objective;
- completed work;
- next queue;
- frozen areas;
- status update policy.

Rules:

- Never update ProjectStatus automatically.
- Never modify ProjectStatus unless Human Governance explicitly instructs it or the active task is a dedicated ProjectStatus / ProjectStateUpdater task.
- Completion reports may recommend ProjectStatus changes, but shall not apply them automatically.
- ProjectStatus records operational state only. It does not define architecture, promote documents, supersede standards, or bypass roadmap order.

---

## 7. Roadmap Policy

`docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` is the roadmap authority.

Rules:

- Never skip phases.
- Never start future-phase work unless Human Governance explicitly activates it.
- Continue only the active phase and stage identified from ProjectStatus unless Human Governance explicitly narrows or changes scope.
- Escalate roadmap conflicts, phase ambiguity, or scope crossing.

---

## 8. AGENTS Architecture Policy

AGENTS architecture is not owned by this bootloader.

Use the following documents only when the task is specifically about agent architecture, multi-agent execution, collaboration, or swarm preparation:

```text
docs/AI/Architecture/Agents/AGENTS-v2.md
docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md
docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md
docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md
docs/AI/Architecture/Agents/AGENTS-v1-draft.md
```

Boundary rules:

- `docs/AI/Architecture/Agents/AGENTS-v2.md` is the primary entry point for AGENTS v2 architecture tasks.
- `docs/AI/Architecture/Agents/AGENTS-v1-draft.md` remains a historical / legacy single-agent reference, not the primary authority for new AGENTS v2 work.
- AGENTS v2 roadmap defines future multi-agent capability direction.
- AGENTS v2 development phases define future multi-agent delivery phases.
- AGENTS v2 Core Freeze Review returned PASS WITH OBSERVATIONS, but that result does not imply canonical promotion, certification, implementation activation, swarm activation, or ProjectStatus update.
- None of these documents replace this repository bootloader.
- AGENTS v2 planning documents do not activate multi-agent, swarm, enterprise, runtime, platform adapter, or implementation work by themselves.
- AGENTS v2 shall consume AGENTS v1, Runtime, Engine Platform, and Operational Layer; it shall not redefine them.
- Swarm or enterprise-agent work remains future scope unless Human Governance explicitly activates it and ProjectStatus permits it.

---

## 9. Document and RFC Rules

### 9.1 Markdown Documents

Every new Markdown document must comply with `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`, including:

- `## Document Metadata` section;
- required table shape;
- mandatory fields;
- applicable conditional fields.

Existing Markdown documents should not be normalized or reformatted unless the task explicitly requires it and the work is within active roadmap scope.

### 9.2 Engine RFCs

Every Engine RFC must follow `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`.

Every Engine RFC must consume the approved Meta Foundation, terminology, metadata, Runtime Architecture, and Engine Platform authorities without redefining them.

Engine RFC work is documentation-only unless Human Governance explicitly authorizes implementation scope.

---

## 10. File Safety Rules

1. Modify only files required by the task.
2. Avoid unrelated refactoring, renaming, reformatting, or relocation.
3. Never move legacy files unless the active roadmap stage explicitly authorizes legacy migration.
4. Never move RC2 files unless the active roadmap stage explicitly authorizes RC2 relocation.
5. Never modify frozen areas without explicit Human Governance authorization.
6. AI may create governance documents only when explicitly instructed by Human Governance and only within active roadmap scope.
7. Do not introduce implementation scope during documentation-only tasks.
8. Do not treat AGENTS v2 roadmap or AGENTS v2 development phases as permission to begin multi-agent, swarm, or enterprise implementation.

---

## 11. Validation Rules

Validation must match task type.

Minimum validation expectations:

- Authority validation: confirm the correct authority set was used.
- Roadmap validation: confirm phase, stage, and frozen-area boundaries were preserved.
- STD-010 validation: required for new Markdown documents and metadata-affecting changes.
- RFC validation: required for Engine RFC work.
- File-safety validation: confirm unrelated files and frozen areas were not modified.
- ProjectStatus validation: confirm ProjectStatus was not modified unless explicitly authorized.

---

## 12. Completion Report Requirements

Every task must end with a completion report containing:

- Summary.
- Files Modified.
- Authority validation.
- Roadmap validation.
- Metadata / STD-010 validation when applicable.
- AGENTS architecture validation when applicable.
- ProjectStatus policy confirmation.
- Risks.
- Recommended next step.

When work affects operational status, recommend the exact ProjectStatus update separately instead of applying it automatically.

---

## 13. Escalation

Escalate when:

- task instruction conflicts with authority;
- current phase, stage, or frozen areas cannot be determined;
- required governing document is missing or inaccessible;
- requested change affects a frozen area;
- requested work crosses a phase boundary;
- requested work introduces unauthorized implementation scope;
- task type is unknown;
- AGENTS v2, swarm, or enterprise scope appears implied but not explicitly activated;
- metadata, authority, roadmap, or validation rules are ambiguous.

Escalation procedure:

```text
Stop
  ↓
Report conflict or ambiguity
  ↓
Recommend resolution options aligned to authority chain
  ↓
Wait for Human Governance
```

---

## 14. Operating Principle

The default safe behavior is:

```text
Navigate authority.
Classify task.
Read minimum required documents.
Preserve roadmap and frozen boundaries.
Execute only approved scope.
Validate.
Report.
Do not self-certify.
Do not auto-update ProjectStatus.
```

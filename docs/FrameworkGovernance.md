# Forge AI — Framework Governance

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-FRAMEWORK-GOVERNANCE` |
| Title | Forge AI — Framework Governance |
| Version | 0.2.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Human Governance / Framework Governance |
| Classification | Governance Policy |
| Document Type | Framework Governance Decision Policy |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-FRAMEWORK-GOVERNANCE` |
| Scope | Governance decision policy for priority, ownership, review, approval, promotion, and escalation decisions. |
| Out of Scope | Repository governance navigation, authority matrices, document taxonomy, ProjectStatus replacement, roadmap replacement, architecture redefinition, Engine RFC work, implementation planning, operational-layer refactor, legacy migration, and frozen-area activation. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/A.1-Constitution.md` when applicable. |
| Normative References | `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`. |
| Dependencies | Governance Atlas v2 navigation; repository boot sequence; current operational state; strategic roadmap; applicable approved architecture and standards. |
| Consumes | Governance Atlas routing, ProjectStatus operational state, Development Phases roadmap, applicable standards, and Human Governance instructions. |
| Produces | Governance decision policy, decision priority rules, ownership rules, review and approval rules, promotion policy, and escalation policy. |
| Related Specifications | Governance Atlas v2; AGENTS.md bootloader; A.1 Constitution; STD-000; STD-010; ProjectStatus; Development Phases. |
| Supersedes | Previous non-STD-010 Framework Governance header and duplicated navigation content. |
| Superseded By | None |
| Promotion Requirements | Human Governance review; Framework Governance review; validation against Governance Atlas v2, ProjectStatus policy, roadmap constraints, frozen-area constraints, and STD-010 metadata requirements. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines the concise governance decision policy for Forge AI. It is used when a task requires decisions about priority, ownership, review, approval, promotion, or escalation.

This document does not replace the repository governance navigation map. Use `docs/AI/GOVERNANCE.md` as the canonical Governance Atlas v2 and navigation authority.

This document does not replace `AGENTS.md`. Treat `AGENTS.md` as the repository bootloader only.

This document does not replace `docs/DevelopmentPhases/ProjectStatus.md`. ProjectStatus records operational state only.

---

## 2. Governance Roles

| Role | Responsibility | Boundary |
|:---|:---|:---|
| Human Governance | Final decision, approval, promotion, exception, and conflict authority. | May approve governance changes; should receive escalations when authority is unclear. |
| Framework Governance | Maintains governance policy and reviews governance consistency. | Does not override Human Governance or redefine canonical architecture outside approved scope. |
| Governance Atlas v2 | Provides repository governance navigation, authority mapping, ownership mapping, dependency mapping, taxonomy, and AI consumption guidance. | Navigation authority only; it does not replace the documents it maps. |
| AGENTS.md | Provides repository bootloader instructions and task entry sequence. | Bootloader only; it is not the Governance Atlas, roadmap, architecture, or ProjectStatus. |
| ProjectStatus | Records current phase, current stage, completed work, next queue, frozen areas, and status update policy. | Operational state only; it does not redefine architecture, promote documents, or supersede standards. |
| Development Phases | Defines strategic roadmap sequence and phase boundaries. | Roadmap authority only; it does not replace live ProjectStatus. |
| AI Agents | Execute directed tasks, draft artifacts, validate, and recommend next steps. | Must not approve, certify, promote, unfreeze, silently resolve authority conflicts, or update ProjectStatus without authorization. |

---

## 3. Decision Priority

When governance decisions conflict or trade off, apply this priority order:

```text
Human Governance
    ↓
Repository boot sequence and task instructions
    ↓
Governance Atlas routing
    ↓
Constitutional and approved architecture authority
    ↓
Standards and metadata requirements
    ↓
ProjectStatus operational state and frozen-area constraints
    ↓
Roadmap sequence
    ↓
Domain document requirements
    ↓
Implementation convenience or optimization
```

Implementation convenience and optimization never override governance, architecture, standards, current operational state, roadmap order, or frozen-area constraints.

---

## 4. Ownership Policy

Every governed artifact, subsystem, standard, RFC, or operational document must have a clear owner.

Ownership policy:

1. A document owns only the domain stated in its metadata and body.
2. Lower-level documents may refine higher-level authority only within their assigned scope.
3. Lower-level documents may not redefine, bypass, or silently contradict higher authority.
4. Ownership duplication must be resolved by the applicable authority chain or escalated to Human Governance.
5. The Governance Atlas should be used to locate ownership; this document should be used to decide how ownership conflicts are handled.

---

## 5. Review and Approval Policy

Review and approval are separate governance events.

- **Validation** checks whether an artifact satisfies required standards, authorities, roadmap constraints, and task instructions.
- **Review** evaluates whether the artifact is acceptable for its stated purpose and scope.
- **Approval** is a Human Governance or delegated governance decision that allows a document or change to proceed.
- **Certification** is an explicit quality state and must not be implied by completion, review, or merge alone.
- **Promotion** is an explicit lifecycle change and must not be performed by AI unless Human Governance directly instructs it.

A completion report may recommend review, approval, certification, promotion, or ProjectStatus updates, but it must not claim those outcomes occurred unless the authorized authority has explicitly approved them.

---

## 6. Change Control Policy

Classify governance-relevant changes before execution:

| Change Class | Description | Required Handling |
|:---|:---|:---|
| Clarification | Improves wording without changing authority, ownership, process, roadmap, or scope. | Validate against current authorities and report. |
| Policy Change | Changes governance decision rules, ownership, review, approval, promotion, or escalation behavior. | Requires Framework Governance review and Human Governance approval before canonical use. |
| Architectural Change | Changes architecture, semantics, standards, runtime, engine platform, engine specialization, or operational design. | Use Governance Atlas routing to identify required architecture authorities and approval path. |
| State Change | Changes phase, stage, completed work, next queue, frozen areas, or status update policy. | Must be performed only through an authorized ProjectStatus / ProjectStateUpdater task or explicit Human Governance instruction. |
| Frozen-Area Change | Affects frozen areas listed in ProjectStatus. | Stop and escalate unless Human Governance explicitly authorizes the scope. |

---

## 7. ProjectStatus Policy

`docs/DevelopmentPhases/ProjectStatus.md` is the operational source of truth for current phase, current stage, completed work, next queue, frozen areas, and status update policy.

Rules:

1. Do not modify ProjectStatus during ordinary governance, documentation, RFC, review, or implementation work.
2. Modify ProjectStatus only when Human Governance explicitly requests it or the active task is a dedicated ProjectStatus / ProjectStateUpdater task.
3. Do not use ProjectStatus to redefine architecture, promote documents, supersede standards, or bypass the roadmap.
4. Completion reports may recommend specific ProjectStatus updates for Human Governance consideration.

---

## 8. Frozen-Area Policy

Frozen areas are defined by ProjectStatus and must be checked before execution.

Unless explicitly authorized by Human Governance, do not modify, move, activate, or implement work in frozen areas, including:

- Legacy Migration;
- RC2 relocation;
- AI Operational Layer alignment;
- Platform Adapters;
- Multi-Agent Runtime;
- Swarm Runtime.

If a task boundary could affect a frozen area, stop and escalate before editing.

---

## 9. Escalation Policy

Stop and escalate to Human Governance when:

1. Required authority is missing, inaccessible, ambiguous, or contradictory.
2. Current phase, current stage, or frozen-area boundaries cannot be determined.
3. A requested change would cross roadmap phase boundaries without explicit authorization.
4. A requested change would affect ProjectStatus without authorization.
5. A requested change would begin Engine RFC work, implementation work, operational-layer alignment, legacy migration, RC2 relocation, adapters, multi-agent runtime, or swarm runtime before activation.
6. A lower-level document appears to redefine a higher-level authority.
7. Review, approval, certification, or promotion authority is unclear.

Escalation reports should identify the conflict, cite the relevant authority path, and recommend resolution options without applying the change.

---

## 10. AI Execution Rules

AI agents must:

1. Start from `AGENTS.md` and follow the required boot sequence.
2. Use `docs/AI/GOVERNANCE.md` as the Governance Atlas v2 navigation authority.
3. Use this document only for governance decision policy.
4. Use ProjectStatus only as operational state and frozen-area source of truth.
5. Read only the authorities required by the classified task.
6. Modify only files required by the task.
7. Avoid unrelated refactoring, relocation, normalization, or implementation.
8. Validate metadata, authority alignment, roadmap alignment, ProjectStatus policy, and frozen-area compliance when applicable.
9. Report recommendations without implying approval, certification, promotion, or status update.

---

## 11. Completion Report Expectations

Governance tasks should end with a completion report that includes:

- Summary;
- Files Modified;
- Authority validation;
- Governance Atlas alignment;
- STD-010 validation when Markdown metadata is created or updated;
- ProjectStatus policy confirmation;
- Risks;
- Recommended next step.

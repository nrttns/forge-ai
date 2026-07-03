# Validation Certification

## Status

Status: AI Framework v1.0 RC2 Certification Standard

Document Type: Validation and Certification Reference

Authority: `docs/AI/AIFramework.md`

Related Documents:

```text
docs/AI/Validation/AIFrameworkValidation.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationChecklistTemplate.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/AI/Specification/GovernanceModel.md
docs/ProjectStatus.md
```

---

# Purpose

This document defines how validation supports certification in the AI Framework.

Certification recognizes that a validation target has completed the required validation and review sequence and is eligible for acceptance, publication, integration, or project state advancement according to governing authority.

Certification does not implement work, redesign architecture, replace validation, replace review, or independently update Project Status.

---

# Certification Relationship

The certification sequence is:

```text
Validation
    ↓
Review
    ↓
Certification
    ↓
ProjectStatus update
```

## Validation

Validation verifies evidence-based conformance.

Validation answers:

```text
Does the work conform to approved authority, scope, architecture, process, and evidence requirements?
```

## Review

Review independently evaluates readiness.

Review answers:

```text
Is the work ready to be accepted, certified, merged, published, or used as a basis for state advancement?
```

## Certification

Certification recognizes completion.

Certification answers:

```text
Has the work completed required validation and review, and may it be recognized as complete under the applicable authority?
```

## ProjectStatus Update

Project Status update records live operational project state.

Project Status answers:

```text
Has certified work changed the live platform position, active phase, active stage, active historical sprint, milestone, or immediate next work?
```

Project Status may advance only when certification has been completed and the governing workflow requires or permits the update.

---

# Certification Preconditions

Certification requires:

- validation completed;
- validation decision allows review;
- independent review completed;
- review verdict allows certification;
- required quality gates passed or were formally documented as blocked or waived by governance;
- documentation synchronized;
- no unresolved blocker remains;
- authority, scope, and ownership are clear;
- Project Status impact is identified.

If any precondition is not satisfied, certification must be delayed, blocked, or rejected.

---

# Certification Types

## Document Certification

Recognizes that a document is complete, internally consistent, aligned with authority, and ready for use.

Applies to:

- specifications;
- workflows;
- commands;
- templates;
- checklists;
- validation records;
- audits;
- phase, stage, and sprint documents;
- platform documentation.

Required evidence commonly includes document validation, reference checks, terminology review, and related-document synchronization.

---

## Workflow Certification

Recognizes that a workflow is complete, repeatable, governed, and safe for execution.

Applies to planning workflows, task-generation workflows, project-state workflows, validation workflows, and future operational workflows.

Required evidence commonly includes workflow validation, input and output verification, failure handling verification, and review of validation-review-certification boundaries.

---

## Command Certification

Recognizes that a command is complete, bounded, auditable, and safe for use by humans, AI agents, automation, or future swarms.

Applies to implementation, audit, documentation, bug-fix, task, and future command documents.

Required evidence commonly includes command validation, scope verification, required reading verification, allowed and forbidden action checks, and completion reporting checks.

---

## Sprint Certification

Recognizes that a historical sprint has completed its required work, validation, review, documentation, and quality gates.

Sprint Certification must preserve historical sprint identifiers and may support Project Status advancement when the sprint changes live project state.

Required evidence commonly includes sprint scope, implementation evidence, documentation updates, test and quality results, validation findings, review verdict, and completion report.

---

## Stage Certification

Recognizes that a stage has completed its planned sprint set or stage-level objectives and is ready to close or transition.

Stage Certification may support Project Status advancement to a new stage only when governing documents allow the transition.

Required evidence commonly includes certified sprint records, stage objectives, unresolved risks, documentation synchronization, quality gates, and review evidence.

---

## Phase Certification

Recognizes that a phase has completed its stage objectives and phase-level acceptance criteria.

Phase Certification may support Project Status advancement to a new phase only when governing documents allow the transition.

Required evidence commonly includes certified stage records, phase objectives, platform governance alignment, architecture validation, quality gates, and project-state readiness.

---

## Framework Certification

Recognizes that an AI Framework version, release candidate, subsystem, or layer is complete, coherent, governed, and ready for use or further extension.

Framework Certification may apply to AI Framework RC2 layers such as Specification, Validation, Commands, Workflows, Templates, Review, Governance, or future AI System operating layers.

Required evidence commonly includes framework validation, reference resolution, governance conformance, review findings, and confirmation that platform-specific assumptions do not redefine framework authority.

---

# Certification Outcomes

Choose exactly one certification outcome.

| Outcome | Meaning | ProjectStatus Impact |
| --- | --- | --- |
| `CERTIFIED` | Required validation and review passed without blocking observations. | Project Status may advance if the certified scope changes live project state and the governing workflow requires an update. |
| `CERTIFIED WITH OBSERVATIONS` | Required validation and review passed with non-blocking observations or recommendations. | Project Status may advance if observations are documented and do not block the state change. |
| `NOT CERTIFIED` | Required validation or review did not support certification. | Project Status must not advance based on this work. |
| `BLOCKED` | Certification cannot be completed because required evidence, authority, scope, quality gates, review, or governance decision is missing or blocked. | Project Status must not advance unless a separate governing process explicitly records the blocker. |

---

# ProjectStatus Advancement Rule

`docs/ProjectStatus.md` may advance only when all of the following are true:

- certification outcome is `CERTIFIED` or `CERTIFIED WITH OBSERVATIONS`;
- certified scope affects live operational project state;
- governing workflow requires or permits a Project Status update;
- active phase, stage, sprint, milestone, or immediate next work can be updated with evidence;
- historical sprint identifiers are preserved;
- no unresolved blocker would make the update misleading;
- the update is performed through the approved project-state process.

Project Status must not advance when:

- validation has not completed;
- review has not completed;
- certification outcome is `NOT CERTIFIED` or `BLOCKED`;
- evidence is insufficient;
- authority is unclear;
- the certified work does not affect live operational state;
- the update would redefine architecture instead of recording status.

---

# Certification Record Format

A certification record should include:

| Field | Description |
| --- | --- |
| Certification ID | Stable identifier for the certification record. |
| Certification Type | Document, Workflow, Command, Sprint, Stage, Phase, Framework, or other approved type. |
| Target | Document, workflow, command, subsystem, sprint, stage, phase, framework layer, or platform scope being certified. |
| Authority | Governing document or authority chain. |
| Validation Evidence | Validation record, findings, decision, and evidence references. |
| Review Evidence | Review checklist, verdict, observations, and evidence references. |
| Quality Gates | Required checks and outcomes. |
| Outcome | CERTIFIED, CERTIFIED WITH OBSERVATIONS, NOT CERTIFIED, or BLOCKED. |
| ProjectStatus Impact | None, recommended update, required update, or blocked update. |
| Certifier | Human, agent, automation, governance body, or responsible role. |
| Date | Certification completion date. |
| Recommendations | Follow-up actions or observations. |

---

# Certification Invariants

Certification must preserve these invariants:

- validation verifies evidence-based conformance;
- review independently evaluates readiness;
- certification recognizes completion;
- Project Status records live operational state;
- certification does not create architecture;
- certification does not bypass governance;
- certification does not renumber historical sprint identifiers;
- certification does not advance Project Status without sufficient evidence.

---

# Failure and Blocker Handling

When certification cannot proceed:

- preserve validation evidence;
- preserve review findings if review occurred;
- record missing evidence or authority conflicts;
- identify the next responsible workflow or actor;
- do not update Project Status except through a separate approved blocker-reporting process;
- do not reinterpret the target as certified.

Certification failure is a governance signal. It must be documented and routed, not ignored.

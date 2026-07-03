# AI Framework Validation

## Status

Status: AI Framework v1.0 RC2 Validation Layer Index

Document Type: Validation Index

Authority: `docs/AI/AIFramework.md`

Parent Framework: `docs/AI/README.md`

---

# Purpose

This directory contains the formal validation and certification layer for the AI Framework.

Validation verifies evidence-based conformance before work proceeds to review, certification, and project state update.

Validation does not implement work, redesign architecture, approve new authority, or replace review. It collects evidence, evaluates conformance, records findings, and determines whether work is ready for independent review and certification.

---

# Validation Layer Reading Order

Read the validation layer in this order:

```text
docs/AI/Validation/README.md
    ↓
docs/AI/Validation/AIFrameworkValidation.md
    ↓
docs/AI/Validation/ValidationLifecycle.md
    ↓
docs/AI/Validation/ValidationLevels.md
    ↓
docs/AI/Validation/ValidationChecklistTemplate.md
    ↓
docs/AI/Validation/ValidationCertification.md
```

For a full framework boot sequence, read this directory only after the AI Framework entry, specification, governance, orchestrator, current project state, and applicable workflow or command documents have been reviewed.

---

# Validation Layer Map

```text
docs/AI/Validation/
├── README.md
├── AIFrameworkValidation.md
├── ValidationLifecycle.md
├── ValidationLevels.md
├── ValidationChecklistTemplate.md
└── ValidationCertification.md
```

---

# Documents

| Document | Purpose |
| --- | --- |
| `AIFrameworkValidation.md` | Defines validation philosophy, authority, objectives, evidence, outcomes, responsibilities, and relationship to framework components. |
| `ValidationLifecycle.md` | Defines the operational lifecycle for planning, preparing, collecting evidence, executing validation, recording findings, supporting review, and determining certification readiness. |
| `ValidationLevels.md` | Defines validation levels from individual document validation through framework validation. |
| `ValidationChecklistTemplate.md` | Provides a reusable checklist template for validating documents, commands, workflows, frameworks, platforms, and future implementations. |
| `ValidationCertification.md` | Defines the relationship between validation, review, certification, and project state advancement. |

---

# Relationship to AIFramework

`docs/AI/AIFramework.md` is the AI Framework RC2 master entry point.

The validation layer is an operational subsystem of the AI Framework. It consumes the AI Framework Constitution, framework specification, governance model, workflows, commands, templates, and current project state.

Validation may verify conformance to AI Framework RC2, but it must not redefine AI Framework RC2.

---

# Relationship to Review Checklist

Validation and review are separate gates.

```text
Validation
    ↓
Review
```

Validation verifies evidence-based conformance.

Review independently evaluates readiness using `docs/AI/Checklists/AgentReviewChecklist.md` and any applicable command, workflow, capability, stage, phase, or governance checklist.

Validation findings support review. Review does not replace validation, and validation does not replace review.

---

# Relationship to Quality Gates

Validation records whether required quality gates were executed and whether their results support certification readiness.

Quality gates may include repository checks, automated tests, static analysis, formatting checks, build checks, documentation checks, reference resolution, or other task-specific validation evidence.

Validation does not lower or bypass quality gates. If a quality gate is required but unavailable, skipped, failed, or blocked, validation must record that fact as evidence and determine whether certification remains possible.

---

# Relationship to ProjectStatus

`docs/ProjectStatus.md` remains the live operational Source of Truth for Forge AI project state.

Validation may recommend that project state advance only after successful validation, independent review, and certification.

Validation does not directly advance Project Status. Project Status may be updated only when the governing workflow, certification decision, and project authority allow the update.

---

# Validation Rule

Validation answers one question:

> Does the work conform to the approved framework, project authority, scope, and evidence requirements?

If the answer cannot be determined from objective evidence, validation must record the blocker instead of assuming conformance.

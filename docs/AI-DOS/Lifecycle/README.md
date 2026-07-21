# AI Framework Lifecycle

## Status

Status: AI Framework v1.0 RC2 Lifecycle Layer

Document Type: Lifecycle Layer Index

Authority: `docs/AI-DOS/AIFramework.md`

Parent Directory: `docs/AI-DOS/`

---

## Purpose

The Lifecycle layer is the formal place for governing AI Framework evolution over time.

It defines how framework versions are named, prepared, released, supported, deprecated, archived, and recorded in changelog history. It exists so framework evolution remains predictable, auditable, compatible, and separate from daily implementation activity.

Lifecycle governs framework evolution. It does not authorize implementation work, modify project operational state, certify releases by itself, or replace any higher-authority document.

---

## Relationship to the AI Framework

The Lifecycle layer consumes the AI Framework authority model.

The authoritative framework entry points remain:

```text
docs/AI-DOS/AIFramework.md
docs/AI-DOS/Specification/Constitution.md
docs/AI-DOS/Specification/GovernanceModel.md
docs/AI-DOS/Specification/ReferenceArchitecture.md
```

Lifecycle documents explain how the framework changes between releases. They must not redefine framework architecture, constitutional principles, canonical terminology, validation rules, certification authority, or project-state ownership.

---

## Relationship to Governance

Governance defines decision authority, quality gates, evolution rules, and certification expectations.

Lifecycle applies those governance rules to release management. It records the allowed release states, compatibility expectations, deprecation procedure, support expectations, release checklist, and changelog discipline.

If Lifecycle guidance conflicts with `docs/AI-DOS/Specification/GovernanceModel.md`, the Governance Model wins until an approved framework change updates the Lifecycle layer.

---

## Relationship to Certification

Certification remains under:

```text
docs/AI-DOS/Certification/
```

Lifecycle may require certification readiness audits, project template adoption reviews, certification audits, and release evidence before a version advances. Lifecycle does not store certification verdicts as the primary evidence source and does not certify AI Framework v1.0 by itself.

A readiness audit may indicate that the framework is ready to proceed toward certification. A certification audit is the formal evidence required to claim a certified framework release.

---

## Relationship to Validation

Validation remains under:

```text
docs/AI-DOS/Validation/
```

Lifecycle depends on validation evidence before release advancement. It does not redefine validation levels, validation lifecycle, validation certification, validation checklist structure, or validation ownership.

---

## Relationship to Project Templates

Project Templates remain under:

```text
docs/AI-DOS/Templates/Project/
```

Lifecycle defines compatibility and release expectations for template changes. Project Templates remain adoption artifacts that consume the AI Framework. Lifecycle does not convert templates into framework authority and does not allow templates to certify projects automatically.

---

## Relationship to Future Operational Validation

Operational Validation is the release-stage evidence that a framework candidate can be used safely in realistic agent and project workflows.

Future Operational Validation documents may be added as a dedicated evidence layer or may be recorded through the existing Validation, Testing, and Certification directories. Lifecycle may reference Operational Validation status, but it must not replace validation or certification evidence.

---

## Lifecycle Document Map

| Document | Purpose |
| --- | --- |
| `README.md` | Lifecycle layer index, purpose, boundaries, and relationships. |
| `Versioning.md` | Version model for RC, Operational Validation, certified, patch, minor, and major releases. |
| `ReleasePolicy.md` | Release stages, preconditions, and readiness-versus-certification distinction. |
| `CompatibilityPolicy.md` | Compatibility expectations and breaking-change rules. |
| `DeprecationPolicy.md` | Deprecation procedure, notices, and migration guidance requirements. |
| `SupportPolicy.md` | Support expectations by lifecycle stage. |
| `ReleaseChecklist.md` | Release checklist for AI Framework versions. |
| `CHANGELOG.md` | Chronological framework release and lifecycle-status record. |

---

## Rule

Lifecycle governs framework evolution; it does not authorize implementation.

Implementation authorization remains governed by `AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, `docs/ProjectStatus.md`, current phase and stage documents, historical capability specifications, commands, workflows, validation, review, and human direction.

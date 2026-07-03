# AI Framework Release Checklist

## Status

Status: AI Framework v1.0 RC2 Lifecycle Checklist

Document Type: Release Checklist

Authority: `docs/AI/Lifecycle/README.md`

---

## Purpose

This checklist defines the required checks before releasing an AI Framework version.

Completion of this checklist supports release readiness. It does not certify a release unless the required certification audit also passes.

---

## Checklist

- [ ] Specification complete.
- [ ] Validation layer complete.
- [ ] AI System complete.
- [ ] Scenario testing complete.
- [ ] Certification readiness audit complete.
- [ ] Project template adoption reviewed.
- [ ] Operational Validation evidence reviewed when required for the target release stage.
- [ ] Release stage confirmed: Draft, RC, Operational Validation, Certified, Maintenance, Deprecated, or Archived.
- [ ] Compatibility impact reviewed.
- [ ] Deprecation notices added for replaced or retiring framework surfaces.
- [ ] Migration guidance added for breaking or potentially disruptive changes.
- [ ] No source-code changes unless explicitly scoped.
- [ ] `docs/ProjectStatus.md` unchanged unless project-state update authority exists.
- [ ] Historical capability identifiers unchanged.
- [ ] References valid.
- [ ] Lifecycle documents aligned with Governance, Validation, Certification, and Project Templates.
- [ ] CHANGELOG updated.
- [ ] Release decision recorded by the appropriate authority.

---

## Required Reference Checks

At minimum, release validation should verify that referenced paths exist for:

```text
docs/AI/AIFramework.md
docs/AI/Specification/Constitution.md
docs/AI/Specification/GovernanceModel.md
docs/AI/Specification/ReferenceArchitecture.md
docs/AI/Validation/README.md
docs/AI/Testing/README.md
docs/AI/Certification/
docs/AI/Templates/Project/README.md
docs/AI/Lifecycle/
docs/ProjectStatus.md
```

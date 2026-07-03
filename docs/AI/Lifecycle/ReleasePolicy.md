# AI Framework Release Policy

## Status

Status: AI Framework v1.0 RC2 Lifecycle Policy

Document Type: Release Policy

Authority: `docs/AI/Lifecycle/README.md`

---

## Purpose

This document defines AI Framework release stages, release preconditions, and the distinction between readiness audits and certification audits.

---

## Release Stages

### Draft

Draft is the working state for incomplete or proposed framework changes.

Draft content may be incomplete and must not be treated as release-ready unless promoted through validation and review.

### RC

Release Candidate is a pre-certification release state for a framework version believed to be structurally complete enough for validation, review, scenario testing, and adoption review.

An RC must not be represented as certified.

### Operational Validation

Operational Validation is the state where an RC is exercised against realistic agent workflows, project templates, validation scenarios, and adoption expectations.

Operational Validation produces evidence for certification readiness but does not itself certify the framework.

### Certified

Certified is the state for a framework release that has passed the required certification audit and release checklist.

A Certified release may be used as a stable framework baseline for adopting projects.

### Maintenance

Maintenance is the state for a certified release that receives compatible patch updates, reference corrections, documentation clarifications, and security or process corrections.

Maintenance must preserve compatibility unless a new minor or major release is approved.

### Deprecated

Deprecated is the state for a release, document, command, workflow, template, rule, or framework surface that remains available temporarily but is no longer preferred.

Deprecated content requires notices and migration guidance.

### Archived

Archived is the state for content preserved for historical reference only.

Archived content must not be used as the active framework baseline for new work unless explicitly approved by human governance.

---

## Release Preconditions

Before an AI Framework version may advance beyond Draft, the following must be satisfied at the level appropriate to the release stage:

- authoritative paths exist and resolve;
- specification documents are coherent;
- validation requirements are defined;
- AI System operating documents are aligned;
- scenario testing expectations are documented;
- project template impacts are reviewed when templates are affected;
- certification readiness is assessed before certification work;
- release checklist is completed;
- changelog is updated;
- source-code changes are absent unless explicitly scoped;
- `docs/ProjectStatus.md` is not modified unless project-state update authority exists;
- historical capability identifiers remain unchanged.

---

## Readiness Audit vs Certification Audit

A readiness audit determines whether the framework appears ready to proceed toward certification or deeper operational validation.

A certification audit determines whether the framework may formally claim a certified release state.

Readiness audit outcomes may include observations, recommendations, and candidate status. They do not certify v1.0 and do not advance project operational state by themselves.

Certification audit outcomes are the formal evidence required before Lifecycle may record a release as Certified.

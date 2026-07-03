# AI Framework Versioning

## Status

Status: AI Framework v1.0 RC2 Lifecycle Policy

Document Type: Versioning Policy

Authority: `docs/AI/Lifecycle/README.md`

---

## Purpose

This document defines how AI Framework versions are named and how changes are classified.

Versioning applies to the AI Framework documentation, operating model, validation expectations, project templates, tooling rules, and lifecycle governance. It does not version Forge AI historical sprints, product phases, product stages, or source-code releases.

---

## Version Model

AI Framework versions use lifecycle-aware semantic versioning:

```text
vMAJOR.MINOR.PATCH[-RCn]
```

Examples:

```text
v1.0 RC2
v1.0
v1.0.1
v1.1.0
v2.0.0
```

---

## Release Candidate Versions

Release Candidate versions are pre-certification framework candidates.

An RC version may contain complete framework structure, validation documents, scenario tests, templates, and readiness evidence, but it must not be described as certified unless a formal certification audit has passed.

RC versions may receive compatibility corrections, documentation refinements, scenario evidence, lifecycle policy, and adoption-readiness updates.

---

## Operational Validation Status

Operational Validation is a lifecycle status, not a final version number.

A version may be identified as an Operational Validation candidate when the framework appears ready for realistic agent and project workflow use, but still requires operational evidence before certification.

Operational Validation status may be used with an RC version, such as:

```text
AI Framework v1.0 RC2 — Operational Validation candidate
```

Operational Validation does not equal certified release status.

---

## v1.0 Certified Release

`v1.0` is the first certified stable release of the AI Framework.

The framework may claim `v1.0 certified` only after the required certification evidence confirms that specification, governance, validation, testing, AI System operation, template adoption, lifecycle policy, and release checklist requirements are satisfied.

Until then, the framework remains an RC or Operational Validation candidate.

---

## Patch Versions

Patch versions use the form:

```text
v1.0.1
v1.0.2
```

Patch changes are backward-compatible corrections or clarifications. They may include:

- typo fixes;
- broken link fixes;
- reference corrections;
- non-substantive wording improvements;
- checklist clarifications that do not add new required gates;
- changelog corrections;
- documentation consistency updates;
- template typo or placeholder corrections that do not change adoption obligations.

Patch changes must not alter framework authority, remove required validation, change command semantics, introduce incompatible template structure, or redefine certification expectations.

---

## Minor Versions

Minor versions use the form:

```text
v1.1.0
v1.2.0
```

Minor changes are backward-compatible additions or improvements. They may include:

- new optional framework documents;
- new optional templates;
- new validation examples that preserve existing requirements;
- new scenario tests that do not invalidate existing scenario contracts;
- additional tooling guidance that remains compatible with existing rules;
- expanded lifecycle support for new adoption contexts;
- new platform-adapter guidance that does not fork framework authority.

Minor changes may add capabilities but must preserve compatibility for existing adopting projects.

---

## Major Versions

Major versions use the form:

```text
v2.0.0
v3.0.0
```

Major changes are changes that may require adopting projects to migrate. They may include:

- authority model changes;
- boot sequence changes;
- framework constitutional changes;
- validation lifecycle changes;
- certification model changes;
- command or workflow contract changes;
- project template structure changes that affect adopting projects;
- tooling rule changes that require agent or repository updates;
- removal of previously supported documents, commands, workflows, templates, or rules.

Major changes require explicit migration guidance and must follow the Deprecation Policy when replacing established framework surfaces.

---

## Historical Sprint Identifiers Are Not Framework Versions

Historical Sprint identifiers belong to Forge AI implementation history.

Examples such as `AXIS-V2.SPRINT-67.12` are immutable historical sprint records. They are not AI Framework versions and must never be renumbered, reinterpreted, or used as substitutes for framework lifecycle versions.

Framework versions describe AI Framework evolution. Historical Sprint identifiers describe project implementation history.

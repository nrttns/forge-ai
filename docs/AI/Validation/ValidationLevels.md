# Validation Levels

## Status

Status: AI Framework v1.0 RC2 Validation Standard

Document Type: Validation Reference

Authority: `docs/AI/AIFramework.md`

Related Documents:

```text
docs/AI/Validation/AIFrameworkValidation.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/ProjectStatus.md
```

---

# Purpose

This document defines the validation levels used by the AI Framework.

Validation levels make validation scope explicit. They ensure that validators know what is being verified, which evidence is required, which outcome is expected, and when escalation is required.

Validation levels do not create architecture. They verify conformance to existing authority.

---

# Level Model

```text
Level 1 — Document Validation
    ↓
Level 2 — Workflow Validation
    ↓
Level 3 — Command Validation
    ↓
Level 4 — Subsystem Validation
    ↓
Level 5 — Framework Validation
    ↓
Level 6 — Framework Validation
```

Higher levels may include evidence from lower levels, but each level must preserve its own scope, evidence, outcome, and escalation rules.

---

# Level 1 — Document Validation

## Purpose

Verify that an individual document conforms to its governing authority, declared purpose, terminology, scope, references, and required structure.

Document Validation applies to specifications, commands, workflows, templates, checklists, validation records, capability documents, phase documents, stage documents, audits, and project documentation.

## Evidence

Typical evidence includes:

- document path and title;
- declared status, document type, and authority;
- required reading and referenced documents;
- cross-reference resolution;
- terminology consistency;
- scope boundaries;
- change diff;
- applicable templates or documentation standards.

## Outcome

Document Validation determines whether the document is ready for review, publication, certification, or synchronization with related documents.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- authority is missing or conflicts with higher authority;
- referenced documents do not exist;
- the document redefines architecture outside its scope;
- terminology conflicts with the AI Framework or framework constitution;
- the document implies Project Status advancement without certification.

---

# Level 2 — Workflow Validation

## Purpose

Verify that a workflow describes a repeatable process that preserves planning, execution, validation, review, certification, and state-update boundaries.

Workflow Validation applies to lifecycle workflows, planning workflows, project-state workflows, task-generation workflows, validation workflows, and future framework workflows.

## Evidence

Typical evidence includes:

- workflow authority and purpose;
- required inputs and outputs;
- step ordering;
- decision points;
- required evidence at each step;
- relationship to commands, templates, checklists, and validation;
- failure and escalation handling;
- references to Project Status when applicable.

## Outcome

Workflow Validation determines whether the workflow can be used as a governed execution procedure.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- workflow steps bypass validation, review, or certification;
- workflow authority conflicts with AI Framework RC2 or project governance;
- workflow outputs update Project Status without required certification;
- workflow creates architecture instead of executing approved procedure;
- failure handling is ambiguous for required gates.

---

# Level 3 — Command Validation

## Purpose

Verify that a command gives agents a bounded, repeatable, auditable execution procedure for a defined task type.

Command Validation applies to general task commands, implementation commands, audit commands, documentation commands, bug-fix commands, and future command families.

## Evidence

Typical evidence includes:

- command authority;
- command scope and non-scope;
- required reading;
- allowed and forbidden actions;
- expected inputs and outputs;
- validation and review requirements;
- completion report requirements;
- relationship to workflows and templates.

## Outcome

Command Validation determines whether the command can be safely used by humans, AI agents, automation, or future swarms.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- command scope is unclear;
- command permits work outside project authority;
- command allows implementation without planning;
- command allows certification without validation or review;
- command conflicts with the Agent Review Checklist or governance model.

---

# Level 4 — Subsystem Validation

## Purpose

Verify that a framework or framework subsystem conforms to its approved responsibilities, boundaries, interfaces, documentation, and quality gates.

Subsystem Validation may apply to AI Framework subsystems such as Commands, Workflows, Templates, Validation, Review, Governance, Runtime, Context, Memory, or future AI System modules. It may also apply to Axis Suite framework subsystems such as Schema, Domain, Application, API, Infrastructure, Runtime, Builder, Presentation, Tokens, Widgets, Templates, and Theme Parts.

## Evidence

Typical evidence includes:

- subsystem authority and ownership;
- applicable architecture documents;
- documents, code, configuration, or artifacts within scope;
- dependency or reference boundaries;
- test, build, quality, and documentation evidence;
- review findings;
- related certification records;
- Project Status alignment when applicable.

## Outcome

Subsystem Validation determines whether the subsystem is conformant and ready for review, certification, integration, or continued development.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- ownership boundaries are violated;
- dependency direction is inverted;
- subsystem documentation conflicts with implementation evidence;
- implementation artifacts define authority that belongs elsewhere;
- required quality gates fail or are missing;
- certification would cause Project Status to become inaccurate.

---

# Level 5 — Framework Validation

## Purpose

Verify that the AI Framework itself remains coherent, complete, governable, framework-independent, and aligned with its constitution and RC2 specification model.

Framework Validation applies to the framework as a whole or to a release candidate milestone.

## Evidence

Typical evidence includes:

- `docs/AI/AIFramework.md`;
- `docs/AI/Specification/` documents;
- commands, workflows, templates, checklists, validation documents, and tooling rules;
- framework maps and reading orders;
- reference resolution;
- governance and certification model;
- validation records from lower levels;
- review findings and certification readiness evidence.

## Outcome

Framework Validation determines whether a framework milestone, release candidate, or framework layer is ready for independent review and framework certification.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- framework documents conflict with the Constitution;
- operational documents redefine framework architecture;
- validation, review, certification, or state-update responsibilities are blurred;
- framework-specific assumptions compromise framework independence;
- Project Status or framework governance is treated as framework authority.

---

# Level 6 — Framework Validation

## Purpose

Verify that a framework implementation conforms to the AI Framework, framework constitution, live Project Status, architecture, active phase, active stage, historical capability, and quality requirements.

For Forge AI, Framework Validation verifies conformance to `AGENTS.md`, `docs/ProjectStatus.md`, development phase documents, framework governance, and applicable stage or capability documentation.

## Evidence

Typical evidence includes:

- framework constitution or bootstrap authority;
- live Project Status;
- current phase, stage, and capability documents;
- architecture and governance documents;
- implementation artifacts;
- tests, builds, quality gates, and audit results;
- validation and review records;
- certification decision;
- project state update readiness.

## Outcome

Framework Validation determines whether a framework milestone, phase, stage, capability, or task is conformant and eligible for review, certification, and possible Project Status advancement.

Possible outcomes:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## Escalation

Escalate when:

- framework work conflicts with the AI Framework or framework constitution;
- Project Status is stale, ambiguous, or contradicted by evidence;
- historical capability identifiers are changed or reinterpreted;
- implementation violates architecture boundaries;
- required quality gates fail;
- certification would advance project state without sufficient evidence.

---

# Cross-Level Escalation Rule

When evidence at one level reveals a higher-level authority conflict, validation must stop or escalate to the appropriate level.

Examples:

- A document reference failure may remain Level 1.
- A command that bypasses review escalates to Level 3 and possibly Level 5.
- A subsystem dependency inversion escalates to Level 4 and possibly Level 6.
- A framework constitution conflict escalates to Level 5.
- A live project state conflict escalates to Level 6.

Validation must not resolve authority conflicts by inventing new rules. It must identify the conflict, preserve evidence, and route the finding to the appropriate review or governance process.

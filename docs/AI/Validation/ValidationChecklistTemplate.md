# Validation Checklist Template

## Status

Status: AI Framework v1.0 RC2 Reusable Template

Document Type: Validation Template

Authority: `docs/AI/AIFramework.md`

Related Documents:

```text
docs/AI/Validation/AIFrameworkValidation.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
```

---

# Purpose

This template provides a generic, reusable structure for validation across the AI Framework, Forge AI, future platforms, commands, workflows, documentation, framework subsystems, implementation tasks, and certification candidates.

Use this template when a validation activity requires structured evidence, findings, decision recording, and certification-readiness assessment.

This template does not define architecture. It verifies conformance to existing authority.

---

# Validation Checklist

## 1. Metadata

| Field | Value |
| --- | --- |
| Validation ID |  |
| Validation Title |  |
| Validation Level | Level 1 / Level 2 / Level 3 / Level 4 / Level 5 / Level 6 |
| Target Type | Document / Workflow / Command / Subsystem / Framework / Framework / Other |
| Target Path or Scope |  |
| Framework | AI Framework / Forge AI / Other |
| Validator |  |
| Date |  |
| Related Task / Capability / Stage / Phase |  |
| Authority |  |
| Status | Draft / In Progress / Complete / Blocked |

---

## 2. Scope

### In Scope

- [ ] Scope item 1
- [ ] Scope item 2
- [ ] Scope item 3

### Out of Scope

- [ ] Out-of-scope item 1
- [ ] Out-of-scope item 2
- [ ] Out-of-scope item 3

### Scope Confirmation

- [ ] Scope is documented.
- [ ] Scope is bounded.
- [ ] Scope does not require architectural redesign.
- [ ] Scope does not conflict with higher authority.
- [ ] Scope does not advance project state directly.

---

## 3. Required Reading

Record the documents read before validation.

| Required Document | Path | Read | Notes |
| --- | --- | --- | --- |
| Bootstrap authority |  | [ ] |  |
| Framework entry |  | [ ] |  |
| Framework specification |  | [ ] |  |
| Governance model |  | [ ] |  |
| Validation specification |  | [ ] |  |
| Validation lifecycle |  | [ ] |  |
| Review checklist |  | [ ] |  |
| Project status |  | [ ] |  |
| Applicable workflow |  | [ ] |  |
| Applicable command |  | [ ] |  |
| Applicable template |  | [ ] |  |
| Applicable phase / stage / capability |  | [ ] |  |

---

## 4. Validation Areas

Use only the areas that apply to the target.

### Authority and Governance

- [ ] Declared authority is present.
- [ ] Authority resolves to an existing source.
- [ ] Higher-authority documents are not contradicted.
- [ ] Governance boundaries are preserved.
- [ ] Project Status is not advanced without certification.

### Scope and Ownership

- [ ] Target scope is clear.
- [ ] Target ownership is clear.
- [ ] No unrelated ownership is assumed.
- [ ] No external subsystem authority is redefined.
- [ ] Scope exclusions are respected.

### Architecture and Design

- [ ] Existing architecture is preserved.
- [ ] Dependency direction is preserved.
- [ ] Contract ownership is preserved.
- [ ] No undocumented architecture is introduced.
- [ ] Validation does not redesign the target.

### Process and Workflow

- [ ] Planning precedes execution.
- [ ] Execution precedes validation.
- [ ] Validation precedes review.
- [ ] Review precedes certification.
- [ ] Certification precedes project state update when state advancement is required.

### Documentation Quality

- [ ] Required sections are present.
- [ ] Terminology is consistent.
- [ ] Cross references resolve.
- [ ] Related documents remain synchronized.
- [ ] Historical identifiers are preserved.

### Implementation and Artifact Integrity

- [ ] Implementation artifacts are within scope.
- [ ] No unrelated files were modified.
- [ ] No forbidden file types or layers were changed.
- [ ] Existing patterns are followed.
- [ ] Generated or temporary artifacts are excluded unless explicitly required.

### Quality Gates

- [ ] Required tests were run or documented as blocked.
- [ ] Required builds were run or documented as blocked.
- [ ] Static analysis was run or documented as blocked.
- [ ] Formatting or lint checks were run or documented as blocked.
- [ ] Diff and status checks were reviewed.

### Evidence and Traceability

- [ ] Evidence is objective.
- [ ] Evidence is current.
- [ ] Evidence references exact paths, commands, artifacts, or outputs.
- [ ] Findings cite evidence.
- [ ] Decision follows from evidence.

---

## 5. Evidence

Record all validation evidence.

| Evidence ID | Evidence Type | Source / Command / Path | Result | Notes |
| --- | --- | --- | --- | --- |
| E-001 |  |  |  |  |
| E-002 |  |  |  |  |
| E-003 |  |  |  |  |

Example evidence types:

```text
Document
Command Output
Test Result
Build Result
Static Analysis Result
Diff
Review Finding
Audit Finding
Project State
Certification Record
```

---

## 6. Findings

Record each validation finding.

| Finding ID | Severity | Category | Description | Evidence | Recommendation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| F-001 | INFO / WARNING / BLOCKER |  |  |  |  | Open / Resolved / Accepted |
| F-002 | INFO / WARNING / BLOCKER |  |  |  |  | Open / Resolved / Accepted |

Severity guidance:

```text
INFO     — Non-blocking note or observation.
WARNING  — Requires attention but may not block certification.
BLOCKER  — Prevents certification until resolved or formally waived by governance.
```

---

## 7. Decision

Choose exactly one validation decision.

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

### Decision Rationale

Explain why the evidence supports the decision.

```text
Decision rationale:
```

### Blocking Items

List any unresolved blockers.

- [ ] None
- [ ] Blocker 1
- [ ] Blocker 2

---

## 8. Certification Readiness

Validation does not certify work. It determines whether the target is ready for independent review and possible certification.

- [ ] Validation decision supports review.
- [ ] Required evidence is complete.
- [ ] Required quality gates are complete or documented.
- [ ] No unresolved blockers remain.
- [ ] Review can be performed independently.
- [ ] Certification type is identified.
- [ ] Project Status update requirement is identified.

### Certification Type Candidate

Select the most applicable certification type:

```text
Document Certification
Workflow Certification
Command Certification
Capability Certification
Stage Certification
Phase Certification
Framework Certification
Other
```

### Certification Readiness Decision

Choose one:

```text
READY FOR REVIEW
READY FOR REVIEW WITH OBSERVATIONS
NOT READY FOR REVIEW
BLOCKED
```

---

## 9. Recommendations

Record recommendations without redefining architecture or expanding scope.

| Recommendation ID | Recommendation | Priority | Owner / Next Actor | Notes |
| --- | --- | --- | --- | --- |
| R-001 |  | Low / Medium / High |  |  |
| R-002 |  | Low / Medium / High |  |  |

Recommendations should be actionable, evidence-based, and routed to the appropriate workflow, review, governance, or project-state process.

---

# Completion Statement

Use this statement when closing the validation record:

```text
Validation completed for [target] at [level].
Decision: [decision].
Certification readiness: [readiness decision].
Project Status update: [not required / recommended after certification / blocked].
```

# Agent Review Checklist

## Status

Status: Canonical Review Standard  
Document Type: AI Quality Gate  
Authority: `docs/AI-DOS/AIFramework.md`  
Extends: `docs/AI-DOS/Commands/AgentTaskCommand.md`

---

# Purpose

This checklist defines the minimum review requirements for every implementation, audit, documentation update, refactor, and bug fix performed within AI-DOS.

Review certifies work before project state advances.

---

# Review Model

```text
Planning
    ↓
Implementation
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
Project State Update
```

Review does not implement.

Review verifies readiness.

---

# 1. Planning Gate

Verify:

- [ ] Correct Phase identified
- [ ] Correct Stage identified
- [ ] Correct Historical Capability identified
- [ ] Task scope defined
- [ ] Required documentation reviewed
- [ ] Ownership clear

If any item cannot be verified, stop review.

---

# 2. Architecture Gate

Verify:

- [ ] Ownership preserved
- [ ] Dependency direction preserved
- [ ] No architectural shortcut introduced
- [ ] No undocumented architecture introduced
- [ ] No contract violations
- [ ] Schema remains authoritative
- [ ] Builder remains consumer
- [ ] Runtime remains consumer
- [ ] Infrastructure remains adapter

---

# 3. Documentation Gate

Verify:

- [ ] Documentation updated where required
- [ ] Cross references valid
- [ ] Terminology consistent
- [ ] No duplicated architectural authority
- [ ] Related documents synchronized

---

# 4. Implementation Gate

Verify:

- [ ] Requested work completed
- [ ] Scope respected
- [ ] No unrelated files modified
- [ ] No hidden architectural changes
- [ ] Existing patterns followed

---

# 5. Validation Gate

Verify when applicable:

- [ ] Tests passing
- [ ] Build passing
- [ ] Static analysis passing
- [ ] Formatting correct
- [ ] No debugging artifacts
- [ ] No temporary code

---

# 6. AI Behaviour Gate

Verify:

- [ ] No assumptions presented as facts
- [ ] Architecture respected
- [ ] Reference material treated as read-only
- [ ] Historical Capability identifiers preserved
- [ ] Scope not exceeded
- [ ] Project State is not advanced before certification

---

# 7. Reviewed-Subject Identity Gate

Verify when the reviewed subject is an externally mutable artifact (identified by a review subject locator and revision identity rather than fixed, immutable local content):

- [ ] Complete canonical review subject locator recorded, identifying exactly one subject and authoritative resolution path without truncation, inference, or ambiguity
- [ ] Complete canonical initial reviewed-subject revision identity deterministically resolved through that locator and recorded before inspection began
- [ ] Complete canonical final reviewed-subject revision identity deterministically re-resolved through the same authoritative locator and recorded immediately before verdict issuance
- [ ] Initial and final revision identities match

If the locator or either identity is missing, inaccessible, ambiguous, incomplete, or unresolvable, or deterministic final re-resolution through the same authoritative locator cannot be completed, stop and return a bounded blocking result instead of a Review Verdict below. If the initial and final revision identities do not match, return `STALE REVIEW` as that bounded blocking result. Do not issue a substantive review verdict when any part of this gate fails, including for a read-only review. Restart only against complete, canonical locator and identity evidence.

---

# Review Verdict

Choose exactly one:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

`STALE REVIEW` is returned instead of one of the verdicts above when the Reviewed-Subject Identity Gate fails; it is not a substantive review verdict.

---

# Finding Format

Each finding should include:

```text
Severity
Description
Affected Area
Evidence
Recommended Action
```

Suggested severities:

```text
INFO
WARNING
BLOCKER
```

---

# Approval Criteria

A task may be approved only when:

- [ ] Architecture preserved
- [ ] Scope respected
- [ ] Documentation synchronized
- [ ] Validation completed
- [ ] Review completed
- [ ] Project state update is safe

---

# Escalation

Stop and request clarification when:

- ownership is ambiguous;
- architecture conflicts with documentation;
- dependency direction changes unexpectedly;
- undocumented behaviour is introduced;
- required planning documents are missing;
- quality gates fail.

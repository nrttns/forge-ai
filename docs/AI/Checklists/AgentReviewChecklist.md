# Agent Review Checklist

## Status

Status: Canonical Review Standard  
Document Type: AI Quality Gate  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentTaskCommand.md`

---

# Purpose

This checklist defines the minimum review requirements for every implementation, audit, documentation update, refactor, and bug fix performed within Forge AI.

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

# Review Verdict

Choose exactly one:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

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

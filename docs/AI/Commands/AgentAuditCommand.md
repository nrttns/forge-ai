# Agent Audit Command

## Status

Status: Canonical Audit Command  
Document Type: AI Command Standard  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentTaskCommand.md`

---

# Purpose

This command governs audits, readiness reviews, compliance reviews, implementation audits, and architecture inspections.

Audit verifies current state.

Audit does not implement new functionality.

---

# Command Position

```text
Planning
    ↓
Audit Workflow
    ↓
AgentAuditCommand
    ↓
AuditTemplate
    ↓
Inspection
    ↓
Findings
    ↓
Verdict
    ↓
State Recommendation
```

---

# Use This Command When

Use this command for:

- readiness audits;
- architecture audits;
- dependency audits;
- ownership audits;
- quality audits;
- release audits;
- implementation compliance reviews.

---

# Audit Restrictions

Audit agents must not:

- introduce features;
- refactor unrelated code;
- redesign architecture;
- change ownership;
- advance ProjectStatus automatically after failed audits;
- convert audit findings into implementation unless explicitly instructed.

---

# Required Audit Inputs

Before auditing, collect:

```text
AGENTS.md
docs/AI/AIFramework.md
docs/AI/Templates/AuditTemplate.md
docs/ProjectStatus.md
Current Phase
Current Stage
Historical Sprint scope
Related RFCs
Previous audits
Relevant source files
Validation results when available
```

---

# Audit Areas

Evaluate:

- planning alignment;
- architecture;
- ownership;
- dependencies;
- contracts;
- documentation;
- implementation scope;
- quality gates;
- blockers.

---

# Findings

Every finding should include:

```text
Severity
Description
Affected area
Evidence
Recommendation
```

Suggested severity:

```text
PASS
INFO
WARNING
BLOCKER
```

---

# Verdict

Every audit must end with exactly one verdict:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

The verdict determines readiness.

---

# Deliverables

Audit deliverables:

```text
Audit report
Reviewed documents
Reviewed files
Findings
Risks
Verdict
Recommended next step
```

Use `docs/AI/Templates/AuditTemplate.md`.

---

# Handoff

A successful audit may recommend progression.

A failed audit must recommend corrective action.

Audit does not itself implement the correction.

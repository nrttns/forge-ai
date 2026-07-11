# AI Framework Operational Validation

## Purpose

Operational Validation is the evidence collection phase of the AI Framework lifecycle.

Its purpose is to validate the AI Framework by using it in real software projects before the framework is formally certified.

Operational Validation does **not** introduce new architecture, governance, or implementation rules.

Instead, it records objective evidence showing how the framework behaves when used in production development workflows.

---

# Position in the AI Framework Lifecycle

```
Draft
    ↓
Release Candidate (RC)
    ↓
Operational Validation
    ↓
Certified
    ↓
Maintenance
    ↓
Deprecated
    ↓
Archived
```

Operational Validation is the final stage before formal certification.

---

# Goals

Operational Validation exists to answer questions such as:

- Can the AI Framework correctly determine the next task?
- Does ProjectStatus remain the single operational Source of Truth?
- Does the AI System follow the documented boot sequence?
- Are Commands, Workflows, Templates, Validation, and Review correctly selected?
- Can the framework complete real development work without additional planning?

---

# What Operational Validation Is

Operational Validation is:

- Evidence collection
- Behaviour verification
- Decision verification
- Governance verification
- Process verification
- Framework confidence building

---

# What Operational Validation Is Not

Operational Validation is **not**:

- A redesign phase
- A planning phase
- A feature implementation phase
- A certification phase
- A framework evolution phase

Framework changes are not made directly from a single observation.

---

# Evidence

Each completed validation is recorded as an Operational Validation Evidence document.

Examples:

```
OV-001.md
OV-002.md
OV-003.md
OV-004.md
...
```

Each evidence document records:

- Context
- Expected behaviour
- Observed behaviour
- Validation result
- Observations
- Certification impact

---

# Framework Change Requests

Operational Validation does not automatically change the framework.

Framework Change Requests (FCRs) are created only when sufficient evidence has been collected.

Typical criteria include:

- repeated observations across multiple Historical Sprints;
- recurring decision failures;
- recurring governance ambiguity;
- repeated validation failures caused by framework design.

Single isolated observations normally do not justify framework changes.

---

# Certification

Operational Validation provides behavioural evidence for future AI Framework certification.

Evidence collected here supports Certification Audits but does not itself certify the framework.

---

# Reference Implementation

AI-DOS is the first official Reference Implementation used during Operational Validation.

Future projects may contribute additional evidence once they adopt the AI Framework.

---

# Related Documents

- AIFramework.md
- Lifecycle/README.md
- Validation/
- Certification/
- Project Templates/

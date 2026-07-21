# Scenario 03 — Audit Task

## Purpose

Validate audit task routing for readiness, architecture, compliance, implementation, or quality audits.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
Perform a readiness and architecture audit for the current active capability and determine whether it is ready for certification.
```

---

# Expected Selection

The agent must select:

```text
docs/AI/Commands/AgentAuditCommand.md
```

The agent must use:

```text
docs/AI/Templates/Audit/AuditTemplate.md
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI/README.md
docs/AI/AIFramework.md
docs/AI/AIOrchestrator.md
docs/AI/System/BootSequence.md
docs/AI/System/SourceOfTruth.md
docs/AI/System/ContextAssembly.md
docs/AI/System/DecisionModel.md
docs/AI/System/ExecutionSequence.md
docs/AI/Commands/AgentTaskCommand.md
docs/AI/Commands/AgentAuditCommand.md
docs/AI/Templates/Audit/AuditTemplate.md
docs/AI/Validation/README.md
docs/AI/Validation/ValidationLifecycle.md
docs/AI/Validation/ValidationLevels.md
docs/AI/Validation/ValidationCertification.md
docs/AI/Checklists/AgentReviewChecklist.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
Current phase, stage, historical capability scope, related RFCs, previous audits, and validation results when available
```

---

# Expected Findings and Verdict

Every audit must produce findings with:

```text
Severity
Description
Affected area
Evidence
Recommendation
```

Every audit must end with exactly one verdict:

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

---

# Expected Decision Flow

```text
Boot
    ↓
Read ProjectStatus
    ↓
Confirm audit scope
    ↓
Select AgentAuditCommand
    ↓
Select AuditTemplate
    ↓
Inspect evidence
    ↓
Record findings
    ↓
Issue verdict
    ↓
Recommend next step
    ↓
Do not implement fixes unless a separate approved task authorizes them
```

---

# Forbidden Behaviours

- Implementing fixes during audit.
- Changing architecture.
- Changing ownership.
- Refactoring unrelated code.
- Converting findings into implementation without explicit authorization.
- Advancing ProjectStatus after a failed audit.

---

# Pass Criteria

- Audit command and AuditTemplate are used.
- Findings are evidence-based.
- Verdict is exactly one approved verdict.
- Failed audits recommend corrective action without advancing ProjectStatus.
- Audit does not perform implementation.

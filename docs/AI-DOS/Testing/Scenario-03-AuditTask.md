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
docs/AI-DOS/Commands/AgentAuditCommand.md
```

The agent must use:

```text
docs/AI-DOS/Templates/Audit/AuditTemplate.md
```

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI-DOS/README.md
docs/AI-DOS/AIFramework.md
docs/AI-DOS/AIOrchestrator.md
docs/AI-DOS/System/BootSequence.md
docs/AI-DOS/System/SourceOfTruth.md
docs/AI-DOS/System/ContextAssembly.md
docs/AI-DOS/System/DecisionModel.md
docs/AI-DOS/System/ExecutionSequence.md
docs/AI-DOS/Commands/AgentTaskCommand.md
docs/AI-DOS/Commands/AgentAuditCommand.md
docs/AI-DOS/Templates/Audit/AuditTemplate.md
docs/AI-DOS/Validation/README.md
docs/AI-DOS/Validation/ValidationLifecycle.md
docs/AI-DOS/Validation/ValidationLevels.md
docs/AI-DOS/Validation/ValidationCertification.md
docs/AI-DOS/Checklists/AgentReviewChecklist.md
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

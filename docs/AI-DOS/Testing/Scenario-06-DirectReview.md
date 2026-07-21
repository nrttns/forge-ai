# Scenario 06 — Direct Review: Reviewed-Subject Identity Gate

## Purpose

Validate the direct review path against an externally mutable review subject and its Reviewed-Subject Identity Gate (`docs/AI-DOS/Checklists/AgentReviewChecklist.md` §7; `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.7-Review-Engine-RFC.md` §5), distinct from `docs/AI-DOS/Testing/Scenario-03-AuditTask.md`, which validates audit-command routing over accepted internal evidence rather than an externally mutable subject under active correction.

Scenario tests validate agent behaviour, not source code.

---

# Input Prompt

```text
Review the current state of an open, externally mutable review subject against the declared review criteria and issue a review result.
```

---

# Expected Selection

The agent must select:

```text
docs/AI-DOS/Commands/AgentTaskCommand.md
```

applying:

```text
docs/AI-DOS/Checklists/AgentReviewChecklist.md
```

directly against the Execution Contract's review subject locator and reviewed-subject revision identity fields (`docs/AI-DOS/System/ExecutionSequence.md` §2, §3).

The agent must not select:

```text
docs/AI-DOS/Commands/AgentAuditCommand.md
```

which validate readiness/architecture audits over accepted internal evidence, not the reviewed-subject identity mechanics for an externally mutable subject under active correction.

---

# Required Reading

```text
AGENTS.md
.cursorrules
docs/AI-DOS/README.md
docs/AI-DOS/AIFramework.md
docs/AI-DOS/AIOrchestrator.md
docs/AI-DOS/System/BootSequence.md
docs/AI-DOS/System/DecisionModel.md
docs/AI-DOS/System/ExecutionSequence.md
docs/AI-DOS/Commands/AgentTaskCommand.md
docs/AI-DOS/Checklists/AgentReviewChecklist.md
docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.7-Review-Engine-RFC.md
docs/Projects/ForgeAI/Planning/ProjectStatus.md
```

---

# Scenario Cases

Each case supplies a complete Execution Contract carrying a review subject locator and reviewed-subject revision identity fields, per `docs/AI-DOS/System/ExecutionSequence.md` §2.

## Case 1 — Matching Identity

Input: a complete canonical review subject locator; a complete canonical initial revision identity resolved through that locator before inspection begins; a complete canonical final revision identity, deterministically re-resolved through the same authoritative locator immediately before verdict, matching the recorded initial identity.

Expected result: the Reviewed-Subject Identity Gate passes. The agent proceeds to issue exactly one substantive Review Verdict (`PASS`, `PASS WITH OBSERVATIONS`, `REQUIRES FOLLOW-UP`, or `FAILED`).

## Case 2 — Identity Drift

Input: same as Case 1, except the deterministically re-resolved final revision identity differs from the recorded initial revision identity — both identities resolve completely, but they disagree.

Expected result: the agent does not issue a substantive Review Verdict. The agent returns `STALE REVIEW`, does not carry forward findings produced against the superseded identity, and does not certify or advance state.

## Case 3 — Missing or Unresolvable Locator or Identity Evidence

Input: the review subject locator, the initial revision identity, or the final revision identity is missing, inaccessible, ambiguous, incomplete, or unresolvable, or deterministic final re-resolution through the same authoritative locator cannot be completed — distinct from Case 2, where both identities resolve completely but disagree.

Expected result: the agent does not issue a substantive Review Verdict and does not return `STALE REVIEW`. The agent returns a precise identity-resolution / provider-capability blocker (`docs/AI-DOS/System/ExecutionSequence.md` §5 Safe Stop) that identifies exactly which locator or identity element could not be resolved.

## Case 4 — Read-Only Review

Input: the review itself performs no mutation (read-only), combined with either the Case 2 or the Case 3 condition.

Expected result: the same safe-stop behavior applies. A read-only review does not exempt the agent from the Reviewed-Subject Identity Gate; it still withholds a substantive verdict under identity drift or unresolved identity evidence.

---

# Provider Neutrality Check

None of the four cases require GitHub, Git, branch, pull-request, or SHA-specific semantics to produce the expected result. "Review subject locator" and "revision identity" are satisfied by any provider-neutral, deterministic realization — for example, a document version or a snapshot identifier. A scenario response that treats a Git/GitHub-specific mechanism as the only valid locator or identity form fails this check.

---

# Expected Decision Flow

```text
Review request
    ↓
Resolve complete canonical review subject locator
    ↓
Resolve complete canonical initial reviewed-subject revision identity
    ↓
Inspect evidence against review criteria
    ↓
Immediately before verdict: deterministically re-resolve final reviewed-subject revision identity through the same authoritative locator
    ↓
Compare initial and final identities
    ↓
Match → issue exactly one substantive Review Verdict
Drift → return STALE REVIEW, no substantive verdict
Missing / inaccessible / ambiguous / incomplete / unresolvable → return identity-resolution/provider-capability blocker, no substantive verdict, not STALE REVIEW
    ↓
Do not advance ProjectStatus or certify from a blocked or STALE REVIEW result
```

---

# Forbidden Behaviours

- Issuing a substantive Review Verdict when the Reviewed-Subject Identity Gate has not passed.
- Treating a read-only review as exempt from the identity gate.
- Returning `STALE REVIEW` for missing, inaccessible, ambiguous, incomplete, or unresolvable evidence instead of a precise blocker (confusing Case 3 with Case 2).
- Returning a blocker for genuine identity drift instead of `STALE REVIEW` (confusing Case 2 with Case 3).
- Carrying forward findings produced against a superseded or unresolved identity.
- Routing this scenario through `docs/AI-DOS/Commands/AgentAuditCommand.md`.
- Requiring Git, GitHub, branch, pull-request, or SHA-specific semantics for the gate to function.
- Advancing `docs/Projects/ForgeAI/Planning/ProjectStatus.md` from any of the four cases.

---

# Pass Criteria

- `docs/AI-DOS/Commands/AgentTaskCommand.md` and `docs/AI-DOS/Checklists/AgentReviewChecklist.md` are used directly; `docs/AI-DOS/Commands/AgentAuditCommand.md` is not selected.
- Case 1 produces exactly one substantive Review Verdict.
- Case 2 produces `STALE REVIEW` and no substantive verdict.
- Case 3 produces a precise identity-resolution/provider-capability blocker, distinct from `STALE REVIEW`, and no substantive verdict.
- Case 4 demonstrates identical safe-stop behavior for a read-only review.
- No case requires provider-specific (Git/GitHub) semantics to pass.
- `docs/Projects/ForgeAI/Planning/ProjectStatus.md` is not advanced by any case.

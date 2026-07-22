# AI-DOS Troubleshooting

This guide helps readers diagnose common AI-DOS workflow problems without turning explanatory documentation into execution authority.

AI-DOS is designed to stop safely when authority, scope, identity, validation, or evidence cannot be resolved. A safe-stop is therefore often a correct outcome rather than a system failure.

For normative behavior, consult the applicable AI-DOS contracts and Target-owned authorities. This page explains common symptoms, likely causes, and practical next steps.

## Start with the symptom

Use the section that most closely matches what happened:

- [The provider stopped instead of acting](#the-provider-stopped-instead-of-acting)
- [Target Context could not be resolved](#target-context-could-not-be-resolved)
- [No task was selected](#no-task-was-selected)
- [The selected task was rejected as out of scope](#the-selected-task-was-rejected-as-out-of-scope)
- [A protected-area conflict was reported](#a-protected-area-conflict-was-reported)
- [Validation failed or was incomplete](#validation-failed-or-was-incomplete)
- [Evidence was rejected](#evidence-was-rejected)
- [A review examined the wrong subject](#a-review-examined-the-wrong-subject)
- [Approval did not start new work](#approval-did-not-start-new-work)
- [Different providers produced different answers](#different-providers-produced-different-answers)
- [A documentation change was treated as a Target-state change](#a-documentation-change-was-treated-as-a-target-state-change)

## First-response checklist

Before changing anything, confirm:

1. Which repository or Target Project is being operated on?
2. Which instruction is current?
3. Which authority owns the requested action?
4. What exact subject is being planned, executed, reviewed, or approved?
5. What files or resources are inside scope?
6. Which areas are protected?
7. What validation is required?
8. What evidence is available?
9. Which lifecycle stage is active?
10. Is Human Governance input required?

Do not solve uncertainty by expanding scope, inventing authority, or treating an earlier answer as current state.

## The provider stopped instead of acting

### Symptom

The provider reports a blocker, safe-stop, unresolved authority, or insufficient instruction instead of making changes.

### Likely causes

- no uniquely resolvable authorized action exists;
- the requested action conflicts with a protected area;
- the instruction is broader than the available authorization;
- multiple candidate tasks are eligible with no deterministic winner;
- required Target context is missing or contradictory;
- the requested lifecycle transition requires Human Governance;
- the provider cannot verify the reviewed or executable subject.

### What to do

Identify the unresolved element and supply only the missing authority or decision.

Good corrective input is narrow:

```text
Human Governance — Continue. Next Step: <specific bounded action>.
```

or:

```text
Human Governance — Authorize exactly one bounded work unit:
<objective>, <allowed files>, <required validation>, <protected boundaries>.
```

Avoid responding with a broad instruction such as "do whatever is needed." That removes determinism rather than restoring it.

### What not to do

- do not tell the provider to ignore the blocker;
- do not infer approval from silence;
- do not combine selection, execution, review, and acceptance into one ambiguous command;
- do not widen file scope merely to make the task easier.

## Target Context could not be resolved

### Symptom

The provider cannot determine the Target identity, authority, resources, protected areas, validation requirements, execution permissions, or safe-stop behavior.

### Likely causes

- the repository entry point is missing or unclear;
- Target-owned authority cannot be located;
- multiple declarations conflict;
- precedence is missing or ambiguous;
- a required resource path is stale;
- a reusable AI-DOS document is being mistaken for Target-owned truth;
- the provider is relying on memory instead of current repository state.

### What to do

Confirm that the Target exposes a clear operational entry and that authority-bearing declarations are current, locatable, and internally consistent.

Separate these two questions:

```text
What does AI-DOS require generally?
What does this Target authorize specifically?
```

AI-DOS product truth cannot substitute for Target mission, state, resources, permissions, or protected areas.

### Diagnostic questions

- Is the repository entry contract present?
- Does it point to the current Target authority?
- Are referenced paths valid?
- Do declarations identify precedence?
- Are current-state claims read fresh?
- Is an explanatory Product page being treated as normative authority?

## No task was selected

### Symptom

A continuation request results in no active task.

### Likely causes

- no eligible candidate exists;
- more than one candidate has equal priority;
- a candidate exists but is blocked;
- the command requested approval rather than selection;
- the system is intentionally in an acceptance or decision hold;
- the proposed task exceeds an existing boundary.

### What to do

First determine whether the problem is eligibility, ranking, or authorization.

```text
Eligibility: may this candidate be selected?
Ranking: which eligible candidate has priority?
Authorization: may selection become activation or execution?
```

When needed, Human Governance can identify one next step explicitly. The provider should still verify that the chosen step respects protected boundaries.

### Common mistake

Treating "Approve" as equivalent to "Continue." Approval normally concerns the reviewed subject or state transition. It does not automatically create, select, activate, or execute a new task unless the controlling contract explicitly says so.

## The selected task was rejected as out of scope

### Symptom

The provider identifies a task but refuses to edit one or more files, add supporting cleanup, or complete an implied follow-up.

### Likely causes

- the requested file was not authorized;
- the objective changed during execution;
- a convenient cleanup was added by implication;
- validation revealed a separate problem that belongs in another work unit;
- the task crossed the Product/Target boundary;
- a documentation task began changing normative contracts or operational state.

### What to do

Compare the proposed change against the exact objective and allowed artifacts.

Ask:

```text
Is this change necessary to complete the authorized objective,
or merely useful while we are here?
```

If it is merely useful, record it as a separate candidate rather than expanding the current task.

### Preferred recovery

- finish the authorized unit without scope expansion;
- report the newly discovered issue;
- recommend exactly one bounded next step;
- obtain fresh authorization before proceeding.

## A protected-area conflict was reported

### Symptom

The provider stops because the requested change touches a protected file, directory, contract, state record, credential, or authority surface.

### Why this matters

Protected areas are not ordinary scope suggestions. They mark surfaces that require exact authority or must remain unchanged for the current task.

### What to do

1. Confirm which authority declares the protection.
2. Determine whether the conflict is real or caused by a stale path.
3. Narrow the task so the protected area remains unchanged, or obtain exact Human Governance authorization.
4. Preserve the protection until the conflict is resolved.

### What not to do

- do not reinterpret protection as optional;
- do not edit a protected state file merely to make the task appear authorized;
- do not treat a Target-specific exception as reusable AI-DOS product truth.

## Validation failed or was incomplete

### Symptom

Tests, checks, structural inspection, link validation, schema validation, or review gates fail or cannot be run.

### Distinguish three outcomes

#### Validation failed

A required check ran and produced a negative result.

#### Validation was not run

A required check was skipped, unavailable, or outside provider capability.

#### Validation was not applicable

The check does not apply to the changed subject.

These outcomes must not be collapsed into "validated."

### What to do

Report:

- the exact validation command or method;
- the subject validated;
- the result;
- any unavailable tool or environmental blocker;
- whether the claim is full, partial, or not established.

### Common documentation example

For a one-file public documentation PR, useful validation may include:

- exactly one changed file;
- exactly one commit;
- correct path and filename;
- no normative or Target-state files changed;
- links and terminology checked where applicable.

A documentation-only diff does not justify claiming implementation correctness, runtime readiness, or product-wide conformance.

## Evidence was rejected

### Symptom

A report, log, diff, review result, screenshot, or status claim is considered insufficient or unrelated to the claimed outcome.

### Likely causes

- evidence does not identify the subject;
- evidence points to an older commit or branch;
- the output was summarized without preserving the decisive result;
- evidence proves activity but not success;
- the claimed lifecycle transition exceeds what the evidence establishes;
- validation and acceptance are being conflated.

### What to do

Evidence should answer:

```text
What was examined?
At which revision or state?
By which method?
What was the result?
What does the result not prove?
```

Prefer evidence that is:

- subject-specific;
- reproducible where practical;
- tied to a concrete revision;
- explicit about limitations;
- preserved separately from the conclusion it supports.

### Common mistake

A green check proves only the behavior covered by that check. It does not automatically prove architectural correctness, governance compliance, security, acceptance, readiness, or release status.

## A review examined the wrong subject

### Symptom

A review appears reasonable but applies to the wrong branch, commit, pull request, file set, or lifecycle stage.

### Why this is dangerous

A correct review of the wrong subject is still invalid for the intended decision.

### What to do

Before reviewing, resolve:

- repository;
- pull request or direct-review route;
- exact head revision;
- base revision where relevant;
- changed files;
- requested review objective;
- applicable authority and boundaries.

The review should state the resolved subject identity in its evidence.

### Recovery

If the subject moved after review, review the new subject. Do not transfer the old verdict automatically.

## Approval did not start new work

### Symptom

Human Governance approves a reviewed change, but no new task is selected or executed.

### Explanation

Approval, selection, activation, execution, validation, review, acceptance, promotion, and release are different lifecycle actions.

An approval command normally acts on the identified reviewed subject. It should not be treated as implicit authorization for unrelated next work.

### What to do

Issue a separate continuation or next-step instruction after acceptance when new work should begin.

Example:

```text
Human Governance — Continue.
```

or:

```text
Human Governance — Continue. Next Step: add the AI-DOS migration guide as one documentation-only PR.
```

## Different providers produced different answers

### Symptom

Two providers resolve different tasks, recommend different next steps, or disagree about whether work is authorized.

### Likely causes

- they read different repository revisions;
- one provider skipped an authority source;
- current state was inferred from memory;
- a path changed;
- one answer used Product documentation while another used normative contracts;
- task identity or lifecycle stage was ambiguous;
- providers interpreted broad natural language differently.

### What to do

Normalize the comparison:

1. same repository;
2. same branch or commit;
3. same mandatory authority chain;
4. same instruction;
5. same requested lifecycle action;
6. same protected boundaries.

Then compare the reasoning evidence, not provider reputation.

### Provider-neutral principle

AI-DOS aims to make correct behavior portable across providers by placing authority in discoverable contracts rather than hidden provider-specific memory. Provider disagreement is therefore a signal to inspect context resolution and authority, not a reason to pick whichever answer is more confident.

## A documentation change was treated as a Target-state change

### Symptom

A public Product documentation task is blocked, redirected, or expanded because an unrelated Target Project has an active operational task.

### Likely cause

The distinction between reusable AI-DOS Product documentation and Target-owned operational execution was not applied correctly.

### Correct distinction

A documentation-only change under `docs/AI-DOS/Product/` may explain the reusable product without changing:

- Target mission;
- Target planning;
- Target operational state;
- accepted evidence;
- active work units;
- Target permissions;
- Target protected areas.

However, a Product documentation task stops being standalone when it modifies normative contracts, implementation, Target-owned artifacts, or operational state.

### What to do

Declare and verify the boundary explicitly:

```text
Standalone public Product documentation only.
No ProjectStatus, Roadmap, DevelopmentPhases, Mission,
Target-state, normative contract, implementation, or capability change.
```

Then validate the actual diff against that declaration.

## Common safe-stop categories

The following categories are useful for diagnosing a stop:

| Category | Meaning | Typical recovery |
|---|---|---|
| identity unresolved | repository, Target, task, or reviewed subject is unclear | identify the exact subject |
| authority unresolved | no applicable owner or permission can be established | provide or locate the governing authority |
| scope conflict | requested work exceeds the authorized boundary | narrow the task or obtain fresh authorization |
| protected-area conflict | requested work touches a protected surface | preserve it or obtain exact authorization |
| candidate ambiguity | no unique next task can be selected | provide deterministic priority or one next step |
| lifecycle ambiguity | command could mean review, approval, continuation, or execution | name the intended lifecycle action |
| validation blocker | required checks cannot run or fail | report the result and resolve the blocker |
| evidence insufficiency | available proof does not support the claim | produce subject-specific evidence |
| provider limitation | provider lacks required access or capability | use an authorized capable provider or narrow the task |

## Troubleshooting natural-language commands

### Too broad

```text
Fix everything and continue.
```

Why it fails:

- objective is unbounded;
- files are unknown;
- protected areas are not preserved;
- success cannot be validated deterministically.

### Better

```text
Add one public AI-DOS Product troubleshooting page.
Change only docs/AI-DOS/Product/Troubleshooting.md.
Use one branch, one commit, and a draft PR.
Do not change normative contracts, implementation, or Target state.
```

### Ambiguous lifecycle

```text
Looks good, move on.
```

Why it may fail:

- "looks good" could be review feedback or approval;
- "move on" could mean recommend, select, activate, or execute.

### Better

```text
Human Governance — Approve the reviewed subject only.
```

followed separately by:

```text
Human Governance — Continue.
```

## Troubleshooting a documentation PR

For the one-page documentation workflow used in this repository, inspect the following.

### Branch

- based on current `master`;
- dedicated to one page;
- contains no unrelated history.

### Commit

- exactly one commit;
- message describes the documentation addition;
- no generated or unrelated files included.

### Diff

- exactly one intended Product file;
- no normative contract changes;
- no Target-owned state changes;
- no implementation or CI changes;
- explanatory claims remain appropriately bounded.

### Pull request

- opened as draft;
- summary matches the actual page;
- boundaries are explicit;
- validation statistics match the branch comparison.

## When to ask Human Governance

Escalate when:

- two authorities conflict;
- a protected area must change;
- no unique candidate can be selected;
- acceptance or promotion is requested;
- the task would cross from Product explanation into normative behavior;
- the requested change would alter Target state;
- evidence is insufficient for the requested decision;
- provider capability is inadequate for the authorized work.

A good escalation is specific:

```text
Blocker: two eligible candidates have equal priority.
Decision required: select A or B.
No files changed.
```

## What troubleshooting should never do

Troubleshooting must not become a bypass mechanism.

Do not use it to:

- invent missing authority;
- weaken protected areas;
- relabel failed validation as success;
- replace Human Governance approval;
- convert explanatory documentation into normative contracts;
- treat provider confidence as evidence;
- accept the wrong reviewed subject;
- expand one bounded work unit into a cleanup program;
- copy Target-specific truth into reusable AI-DOS product documentation.

## Compact diagnostic flow

```text
Unexpected outcome
        ↓
Identify exact subject and lifecycle stage
        ↓
Resolve current authority and Target Context
        ↓
Check scope and protected areas
        ↓
Check validation and evidence
        ↓
Is one authorized action deterministically available?
        ├─ Yes → execute only that bounded action
        └─ No  → safe-stop and request the exact missing decision
```

## Related reading

- [Best Practices](BestPractices.md) — habits that prevent many of these problems.
- [Execution Model](ExecutionModel.md) — the path from instruction to evidence-backed work.
- [Context Resolution](ContextResolution.md) — how Target identity and authority are resolved.
- [Security](Security.md) — authority, isolation, provider containment, and evidence integrity.
- [Provider Model](ProviderModel.md) — provider-neutral execution.
- [Human Governance](Concepts/HumanGovernance.md) — human authority and lifecycle decisions.
- [Authority Model](Concepts/AuthorityModel.md) — ownership and resolution of authority.
- [Terminology](Concepts/Terminology.md) — lifecycle and governance vocabulary.

## Authority boundary

This page provides troubleshooting guidance only. It does not authorize execution, redefine AI-DOS behavior, modify Target Project state, certify evidence, approve work, or replace the applicable repository, AI-DOS, Target, security, validation, review, and Human Governance contracts.

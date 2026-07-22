# AI-DOS Command Reference

**Version:** 1.0 (Draft)

---

## 1. Purpose

This document is a standalone product reference for the human-facing command intents used to operate AI-DOS.

It explains what each command means, what the system is expected to resolve, what the command does not authorize, and when AI-DOS must stop safely instead of guessing.

This guide describes reusable AI-DOS product behavior. It does not contain the operational state, roadmap, planning data, or approval history of any individual Target Project.

---

## 2. Command Model

AI-DOS interprets commands by **intent**, not only by exact wording.

A user may express the same intent in different languages or phrasings. For example, continuation intent may appear as:

- `Continue.`
- `Proceed.`
- `Advance.`
- `Next.`
- an equivalent natural-language instruction

The execution provider must resolve the intent from the complete instruction and the available Target Context.

A command is not permission to ignore authority, protected areas, validation requirements, dependencies, or safe-stop conditions.

---

## 3. Command Lifecycle

A human-facing command normally enters the following product flow:

```text
Human instruction
    ↓
Intent classification
    ↓
Target Context resolution
    ↓
Applicable AI-DOS workflow
    ↓
Eligibility and authority checks
    ↓
Execution, review, state transition, or safe-stop
```

Different commands enter different workflows. They must not be collapsed into one generic action.

---

## 4. Human Governance Prefix

`Human Governance` identifies a decision or instruction issued by the human approval authority.

Example:

```text
HUMAN GOVERNANCE
Continue.
```

The prefix strengthens the authority identity of the instruction, but it does not make an ambiguous or unsafe action executable.

Human Governance may authorize actions such as:

- selecting or continuing bounded work;
- approving an eligible reviewed subject;
- explicitly naming the next step;
- authorizing a state transition;
- defining or narrowing scope;
- stopping or redirecting work.

Human Governance does not automatically waive:

- missing context;
- unresolved identity;
- protected-area restrictions;
- validation requirements;
- dependency requirements;
- deterministic selection rules.

---

## 5. Continue

### 5.1 Intent

`Continue` requests progress from the current resolved operational position.

Typical forms include:

```text
Continue.
```

```text
Proceed with the next authorized work.
```

```text
Advance.
```

### 5.2 Expected behavior

When no sufficiently bounded executable task is already active, AI-DOS routes continuation intent through task planning.

The planner must:

1. consume the resolved Target Context;
2. identify the controlling objective;
3. evaluate declared or generated candidates;
4. apply eligibility before ranking;
5. select exactly one candidate only when the result is deterministic;
6. route the selected work for the required activation transition before execution;
7. safe-stop when no unique authorized result exists.

When a bounded active task already exists, `Continue` means continue that task within its recorded scope. It does not authorize replacing the active task with nearby work.

### 5.3 What Continue does not mean

`Continue` does not mean:

- repeat the last action by habit;
- choose the easiest repository change;
- infer work from recent commits;
- approve completed work;
- merge a pull request;
- activate a protected future capability;
- broaden the current objective;
- create a task when authority cannot resolve one.

### 5.4 Safe-stop examples

AI-DOS must stop safely when:

- no capability-grounded candidate can be constructed;
- more than one candidate remains equally authoritative;
- required Target Context is missing;
- the current state authorizes waiting but the continuation signal cannot resolve a unique next action;
- a candidate conflicts with a protected area;
- activation authority is missing.

---

## 6. Next Step

### 6.1 Intent

`Next Step: X` explicitly identifies the human-preferred next subject or action.

Example:

```text
HUMAN GOVERNANCE
Continue.
Next Step: Create the standalone Command Reference.
```

### 6.2 Expected behavior

An explicit next step bypasses ordinary Target priority ranking for the named selection.

The named step must still pass:

- eligibility checks;
- dependency checks;
- scope checks;
- ownership checks;
- protected-area checks;
- validation requirements;
- execution-authority checks.

### 6.3 What Next Step does not mean

`Next Step: X` does not:

- make an ineligible action eligible;
- activate prohibited capabilities;
- override protected areas;
- authorize unrelated follow-up work;
- replace required state activation;
- convert an ambiguous subject into a deterministic one.

### 6.4 Safe-stop examples

AI-DOS must stop when the named next step:

- cannot be uniquely identified;
- conflicts with the active work unit;
- requires a protected mutation not expressly authorized;
- depends on missing or blocked prerequisites;
- exceeds the supplied scope.

---

## 7. Review

### 7.1 Intent

`Review` requests a non-mutating evaluation of an identified subject.

Examples:

```text
Review PR #123 only.
```

```text
Review the current branch against the declared task.
```

```text
Review this document for product/Target boundary violations.
```

### 7.2 Required review identity

A review must remain bound to one resolved subject and revision.

The review route should resolve:

- the subject locator;
- the exact revision identity;
- the governing requirements;
- the allowed review scope;
- the validation evidence to inspect.

A branch name, pull-request number, commit SHA, document path, artifact identifier, or another provider-specific locator may realize the subject identity. These are evidence forms, not universal AI-DOS schema fields.

### 7.3 Expected behavior

A review may produce:

- findings;
- blocker findings;
- confirmation that prior findings are resolved;
- an approval-eligible outcome;
- a request for changes;
- a safe-stop when the reviewed subject cannot be resolved.

Review must be evidence-based and scoped to the identified subject.

### 7.4 Non-mutation rule

Review does not itself:

- edit files;
- update operational state;
- approve the subject;
- merge the subject;
- activate another task;
- close the active work unit;
- generate follow-up work automatically.

A review outcome may become input to a later Human Governance decision, but it is not that decision.

### 7.5 Review safe-stops

Stop the review when:

- the subject cannot be uniquely located;
- the revision changed after review identity was resolved;
- required evidence is inaccessible;
- the requested review exceeds the declared scope;
- the reviewer is asked to assume missing authority;
- identity drift makes the evidence unreliable.

---

## 8. Approve

### 8.1 Intent

`Approve` expresses Human Governance acceptance intent for an eligible reviewed subject.

Examples:

```text
HUMAN GOVERNANCE
Approve PR #123 at reviewed head abc123.
```

```text
HUMAN GOVERNANCE
Approve.
```

The second form is valid only when the current Target state contains exactly one structurally valid subject awaiting Human Governance approval.

### 8.2 Explicit approval

Explicit approval names the subject identity.

It should include enough information to prevent accidental approval of a different revision, such as:

- subject locator;
- reviewed revision identity;
- approval scope when needed.

Before applying the approval transition, AI-DOS must re-resolve the subject identity and detect drift.

### 8.3 Bare approval

Bare `Approve` may resolve only when exactly one eligible pending approval subject is recorded by the Target.

Safe-stop is required when:

- no subject is recorded;
- more than one subject appears eligible;
- the record is structurally invalid;
- the subject identity drifted;
- the subject is already accepted or invalidated;
- the pending subject conflicts with the active work-unit identity.

### 8.4 Expected behavior

Approval routes to the state-update workflow for an exact gate-closing transition.

When the governing Target policy binds the approved subject to an active work unit, the same authorized transition may also close that active work unit and return the Target to its declared post-acceptance hold.

### 8.5 What Approve does not mean

Approval does not by itself authorize:

- GitHub pull-request approval;
- merge execution;
- continuation;
- candidate generation;
- candidate selection;
- activation of another work unit;
- execution of the next task;
- capability advancement beyond the exact accepted subject.

These actions require their own authority and routes.

---

## 9. Reject or Request Changes

### 9.1 Intent

A rejection or change request states that the reviewed subject is not accepted in its current form.

Examples:

```text
Request changes.
```

```text
Reject this revision because the Product Truth / Target Truth boundary is violated.
```

### 9.2 Expected behavior

The outcome should identify:

- the reviewed subject;
- the blocking findings;
- the evidence supporting each finding;
- the bounded correction required, when deterministically known.

Rejection does not automatically authorize corrections unless the user also supplies or activates a bounded correction task.

---

## 10. Stop

### 10.1 Intent

`Stop` instructs the provider to cease the current action.

Examples:

```text
Stop.
```

```text
Do not modify any files.
```

```text
Stop after opening the Draft PR.
```

### 10.2 Expected behavior

The provider must honor the earliest applicable stopping condition.

A stop boundary may limit:

- the number of files;
- the number of commits;
- whether a PR may be opened;
- whether review may continue;
- whether state may be updated;
- whether follow-up work may be proposed or executed.

The provider must not treat completion of one step as permission to continue beyond the explicit stop boundary.

---

## 11. Scope Commands

Human Governance may define exact scope directly.

Example:

```text
Create exactly one standalone product document.
Modify no other files.
Use one branch, one commit, and one Draft PR.
Stop after opening the PR.
```

A bounded scope should make the following explicit when relevant:

- objective;
- allowed artifacts;
- forbidden artifacts;
- dependencies;
- protected areas;
- validation method;
- completion condition;
- stop condition.

The provider must preserve the narrowest applicable scope across the instruction, Target Context, and owning workflow.

---

## 12. Command Composition

Commands may be combined.

Example:

```text
HUMAN GOVERNANCE
Continue.
Next Step: Create the standalone Provider Integration Guide.
Use one branch, one file, one commit, and one Draft PR.
Stop immediately after opening the Draft PR.
```

The combined instruction contains:

- continuation intent;
- explicit next-step selection;
- bounded execution scope;
- a completion condition;
- a stop condition.

AI-DOS must interpret the command as one coherent instruction rather than processing each sentence independently.

---

## 13. Command Precedence

When instructions appear to conflict, AI-DOS must resolve them through authority and specificity rather than convenience.

General rules:

1. Human Governance authority governs lower-authority agent suggestions.
2. Explicit bounded scope governs implied broader scope.
3. Protected-area rules remain effective unless the required authority explicitly permits the protected mutation.
4. A named subject governs an unnamed inferred subject.
5. A stop condition governs optional follow-up behavior.
6. Exact identity requirements govern approximate references.
7. Missing authority requires safe-stop; it is not resolved by model preference.

---

## 14. Safe-Stop Reference

Safe-stop is the required outcome when deterministic and authorized continuation is impossible.

Common safe-stop categories include:

| Condition | Required response |
|:---|:---|
| Missing Target Context | Stop and identify the missing context |
| No eligible work unit | Stop before mutation |
| Multiple equally valid candidates | Stop and report the unresolved choice |
| Subject identity missing | Stop before review or approval |
| Revision identity drift | Stop and require re-resolution |
| Protected-area conflict | Stop before mutation |
| Missing execution authority | Stop before execution |
| Missing state-update authority | Report only a recommended update |
| Validation evidence incomplete | Do not claim completion or approval eligibility |
| Scope cannot be bounded | Stop rather than invent boundaries |

Safe-stop is not a system failure. It is a controlled outcome that preserves authority, identity, and scope.

---

## 15. Provider-Neutral Behavior

The command model is provider-neutral.

ChatGPT, Claude Code, Codex, Grok, Gemini, Copilot, and future providers may expose different tools and interfaces, but they must preserve the same product-level command semantics.

Provider-specific actions such as:

- creating a Git branch;
- opening a pull request;
- adding a review;
- editing a local file;
- running a command;

are implementations of an authorized work unit. They do not redefine the meaning of `Continue`, `Review`, `Approve`, or `Next Step`.

---

## 16. Practical Examples

### 16.1 Continue from a deterministic hold

```text
HUMAN GOVERNANCE
Continue.
```

Expected result:

- consume the continuation signal;
- resolve the controlling objective;
- select and activate exactly one eligible work unit when deterministic;
- otherwise safe-stop.

### 16.2 Continue with an explicit next step

```text
HUMAN GOVERNANCE
Continue.
Next Step: Create the standalone Security Guide.
```

Expected result:

- evaluate the named step for eligibility and authority;
- bypass ordinary priority ranking only;
- preserve all other controls.

### 16.3 Review only

```text
Review PR #123 only.
Do not modify files or PR state.
```

Expected result:

- resolve the PR and exact revision;
- inspect only the requested subject;
- report findings;
- perform no mutation.

### 16.4 Explicit approval

```text
HUMAN GOVERNANCE
Approve PR #123 at reviewed head abc123.
Record acceptance only.
Do not merge or continue.
```

Expected result:

- re-resolve the identity;
- apply only the authorized acceptance transition when eligible;
- do not merge;
- do not select or execute the next task.

### 16.5 Bare approval with no pending subject

```text
HUMAN GOVERNANCE
Approve.
```

Expected result:

- safe-stop because no unique eligible subject can be resolved;
- do not infer the subject from recent repository activity.

### 16.6 Bounded documentation task

```text
Create one standalone product document.
Use one branch, one file, one commit, and one Draft PR.
Stop after opening the Draft PR.
```

Expected result:

- create only the authorized document;
- preserve all forbidden areas;
- stop immediately after the Draft PR is opened.

---

## 17. Quick Reference

| Command intent | Primary route | Mutating by itself? | Main safe-stop trigger |
|:---|:---|:---:|:---|
| Continue | Task planning and activation | No | No unique eligible work unit |
| Next Step: X | Explicit selection plus eligibility checks | No | Named step is ambiguous or ineligible |
| Review | Review workflow | No | Subject or revision cannot be resolved |
| Approve | State-update workflow | Potentially, within exact authority | No unique eligible approval subject |
| Request Changes | Review outcome and bounded correction handoff | No | Findings or subject identity are unclear |
| Stop | Immediate execution boundary | No | Not applicable; stop must be honored |
| Bounded task instruction | Applicable execution workflow | Only within supplied scope | Scope or authority is incomplete |

---

## 18. Summary

AI-DOS commands are intent-based, authority-aware, provider-neutral, and bounded by deterministic resolution.

The essential distinctions are:

- `Continue` requests authorized progress;
- `Next Step: X` names the preferred next action without waiving eligibility;
- `Review` evaluates one resolved subject without mutation;
- `Approve` authorizes only an eligible gate-closing state transition;
- `Stop` defines an execution boundary that must be honored;
- safe-stop prevents ambiguity from becoming unauthorized action.

These command semantics allow Human Governance to direct AI-DOS through concise natural-language instructions without sacrificing authority, identity, validation, or scope control.

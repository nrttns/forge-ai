# AI-DOS Commands Reference

AI-DOS commands are Human Governance instructions interpreted through the active Target contract and the AI-DOS provider route.

This page is a public reference. It helps users choose the correct command form and understand the expected lifecycle effect. It does not replace the normative command, workflow, review, or state-update contracts under `docs/AI-DOS/`.

## 1. Command Model

An AI-DOS command is not merely a keyword.

Its meaning is resolved from:

1. the user's intent;
2. the current Target Context;
3. the explicit scope and constraints supplied by Human Governance;
4. the applicable AI-DOS workflow;
5. the current lifecycle state.

Equivalent natural-language expressions may route to the same behavior when their intent is unambiguous.

For example:

- `Continue.`
- `Proceed with the next authorized step.`
- `Advance the Target.`

may all express continuation intent.

A provider must not depend on one exact English phrase when the governing intent is otherwise clear.

## 2. Command Categories

| Category | Primary purpose | Typical result |
|:---|:---|:---|
| Orient | Read and explain current context | No mutation |
| Execute | Perform one bounded work unit | Authorized artifact changes |
| Review | Inspect a defined subject | Findings or approval recommendation |
| Correct | Address accepted review findings | Bounded changes to the reviewed subject |
| Approve | Apply a Human Governance approval decision | Exact authorized lifecycle transition |
| Continue | Resolve or execute the next authorized action | Selection, activation, execution, or safe stop |
| Audit | Inspect a defined surface for evidence and risk | Read-only report unless mutation is explicitly authorized |
| Stop | Halt work before further mutation | Safe stop record |

## 3. Command Anatomy

A strong bounded command usually contains:

```text
HUMAN GOVERNANCE — <intent>.

Objective: <one observable outcome>.
Scope: <exact files, artifacts, or subject>.
Allowed changes: <explicitly authorized mutations>.
Forbidden changes: <protected areas and exclusions>.
Validation: <checks or review criteria>.
Completion condition: <observable proof of completion>.
```

Not every command needs every label. The information must still be sufficiently clear to resolve exactly one bounded action.

## 4. Read-Only Orientation

Use orientation when you want the provider to inspect and explain without modifying the repository.

### Example

```text
HUMAN GOVERNANCE — Orient.

Read the repository entry, Target contract, AI-DOS provider entry, and current operational state.
Report the current objective, active work unit, protected areas, blockers, and exactly one authorized next action.
Do not modify files, branches, pull requests, issues, or state.
```

### Expected result

The provider should report:

- authorities read;
- current Target Context;
- active or pending lifecycle state;
- blockers or ambiguities;
- no-change confirmation.

## 5. Explicitly Bounded Execution

Use an explicitly bounded execution command when the desired work is already known.

### Example

```text
HUMAN GOVERNANCE — Execute exactly one bounded documentation work unit.

Transform `docs/Product/Reference/Commands.md` into the public commands reference.
Modify exactly one file.
Do not modify ProjectStatus, Mission, Roadmap, DevelopmentPhases, Target contracts, normative AI-DOS contracts, implementation files, or capability state.
Create one branch, one commit, and one draft pull request.
```

### Expected result

The provider should:

1. preserve the supplied objective;
2. avoid candidate generation or priority ranking;
3. modify only the named artifact;
4. validate the exact file boundary;
5. report branch, commit, changed files, validation, and pull request identity.

## 6. Review

Use review when a specific subject is ready for independent inspection.

### Minimal form

```text
HUMAN GOVERNANCE — Review PR #123 only.
```

### Strong form

```text
HUMAN GOVERNANCE — Review PR #123 only.

Resolve the exact reviewed-subject revision identity before analysis.
Inspect scope, authority, semantics, validation evidence, protected-area compliance, and lifecycle boundaries.
Do not modify files, branches, pull-request state, ProjectStatus, or capability state.
Report findings by severity and give an approval recommendation.
```

### Expected result

A review should identify:

- review subject locator;
- reviewed-subject revision identity;
- files and evidence inspected;
- findings;
- unresolved blockers;
- recommendation such as `APPROVE` or `CHANGES REQUIRED`.

Review is non-mutating unless the command separately authorizes correction work.

## 7. Correct Review Findings

Use correction only after actionable findings exist.

### Example

```text
HUMAN GOVERNANCE — Address the actionable review findings on PR #123.

Modify only the files necessary to resolve the recorded findings.
Do not broaden the objective or add unrelated cleanup.
Run the applicable validation and update the same branch.
Report each finding as resolved, unresolved, or blocked.
```

### Expected result

The provider should maintain traceability from each change to a recorded finding.

Unrelated improvements are not implicitly authorized.

## 8. Approve

Approval closes a Human Governance lifecycle gate for an exact eligible subject.

### Exact-subject approval

```text
HUMAN GOVERNANCE — Approve PR #123 at reviewed head <revision>.
Record acceptance only.
Do not merge, continue, generate, select, activate, or execute another work unit.
```

### Bare approval

```text
HUMAN GOVERNANCE — Approve.
```

Bare approval is valid only when the Target-owned state contains exactly one structurally valid subject awaiting Human Governance approval and the applicable state-update workflow can re-resolve its identity without drift.

### Approval does not mean

Approval does not automatically mean:

- approve a GitHub review;
- merge a pull request;
- select the next task;
- execute follow-up work;
- activate a capability;
- accept an unrelated subject.

## 9. Continue

Continuation asks AI-DOS to consume the Target's current next-action state.

### General continuation

```text
HUMAN GOVERNANCE — Continue.
```

Depending on the resolved Target Context, the result may be:

- consume a waiting continuation signal;
- route through candidate selection;
- activate exactly one eligible bounded work unit;
- execute an already active work unit;
- report a blocker;
- safe stop because no deterministic work unit exists.

### Explicit next step

```text
HUMAN GOVERNANCE — Continue.
Next Step: Transform `docs/Product/Reference/Workflows.md` into the public workflows reference.
```

An explicit next step bypasses Target priority ranking only. It does not waive:

- eligibility;
- protected areas;
- dependency checks;
- scope boundaries;
- validation requirements;
- lifecycle rules.

## 10. Audit

Use audit for broad evidence-based inspection without automatic correction.

### Example

```text
HUMAN GOVERNANCE — Audit the public AI-DOS documentation boundary.

Inspect whether Target-specific operational truth appears under the reusable product documentation root.
Report findings with exact file references and severity.
Do not modify files, state, branches, pull requests, or capability status.
```

### Expected result

An audit should distinguish:

- observed evidence;
- interpretation;
- risk;
- recommendation;
- blockers;
- areas not inspected.

Audit findings do not automatically authorize fixes.

## 11. Stop and Safe Stop

Human Governance may explicitly halt work:

```text
HUMAN GOVERNANCE — Stop.
Do not perform further mutations.
Report current changes, validation state, blockers, and the exact point where work stopped.
```

A provider must also safe stop without an explicit stop command when it cannot resolve exactly one authorized action.

Common safe-stop conditions include:

- missing authority;
- contradictory scope;
- multiple equally eligible subjects;
- missing reviewed-subject identity;
- identity drift;
- protected-area conflict;
- inaccessible required evidence;
- validation failure that invalidates completion;
- no capability-grounded work unit found.

## 12. Command Routing by Intent

| User intent | Typical route |
|:---|:---|
| Explain current state | Target context resolution and read-only report |
| Perform named bounded task | Applicable execution command and execution sequence |
| Find next work | Task planning, candidate generation when required, and safe-stop rules |
| Review a subject | Review command, review checklist, and review engine |
| Fix review findings | Correction route bound to the reviewed subject |
| Approve accepted work | Project state updater |
| Audit a surface | Audit workflow and evidence report |
| Stop work | Safe stop before additional mutation |

This table is navigational. The owning normative documents define actual behavior.

## 13. Scope Language

### Strong scope language

Prefer:

```text
Modify exactly one file: `path/to/file.md`.
```

```text
Review PR #123 only. Do not modify repository or pull-request state.
```

```text
Run validation A and B. Report any skipped check and why it was skipped.
```

### Weak scope language

Avoid:

```text
Improve the docs.
```

```text
Fix anything else you notice.
```

```text
Do whatever is needed.
```

Weak language may create multiple plausible objectives and force a safe stop.

## 14. Protected-Area Language

A command should name protected areas when the task is near sensitive boundaries.

Example:

```text
Do not modify ProjectStatus, Mission, Roadmap, DevelopmentPhases, root repository entry, Target contracts, evidence records, implementation files, or capability state.
```

Protected-area exclusions supplement the Target contract. They do not narrow protections already declared by authoritative Target documents.

## 15. Validation Language

Validation should match the changed surface.

### Documentation validation

```text
Validate that exactly one Markdown file changed, local links resolve, headings are coherent, examples are clearly non-normative, and no Target operational state was copied into reusable product documentation.
```

### Implementation validation

```text
Run the repository-declared tests and type checks that exercise the modified implementation surface. State exactly what those checks validate and what they do not validate.
```

Passing implementation checks does not independently prove governance or architectural correctness.

## 16. Completion Reports

A complete provider report should include:

| Field | Expected content |
|:---|:---|
| Objective | The one bounded outcome |
| Authorities consumed | Entry, Target, provider, and task-specific sources actually read |
| Changed artifacts | Every modified file or `none` |
| Validation | Commands, checks, results, failures, and skipped checks |
| Protected-area confirmation | Explicit no-change statement |
| Blockers | Present or `none` |
| Lifecycle effect | What changed and what did not change |
| Reviewed-subject identity | Required for review and approval flows |
| Recommended next step | Exactly one recommendation, without automatic execution |

## 17. Common Command Mistakes

### Mixing approval and continuation

Problematic:

```text
Approve this and continue with the next task.
```

This combines two lifecycle actions and can create accidental advancement.

Prefer separate commands:

```text
HUMAN GOVERNANCE — Approve PR #123 at reviewed head <revision>.
Record acceptance only.
```

Then, after the approval transition is complete:

```text
HUMAN GOVERNANCE — Continue.
```

### Treating merge as acceptance

A merged pull request is repository state. It is not automatically Target-owned Human Governance acceptance.

### Omitting subject identity

`Review this` or `approve it` may be ambiguous when more than one subject is visible.

### Expanding by convenience

A provider must not add nearby cleanup simply because it is easy or related.

### Using provider-specific terminology as universal schema

Branch names, pull-request numbers, and commit hashes may realize a reviewed-subject identity for a particular provider, but AI-DOS command semantics remain provider-neutral.

## 18. Reusable Command Templates

### One-file documentation task

```text
HUMAN GOVERNANCE — Execute exactly one bounded documentation work unit.

Transform `<path>` into `<purpose>`.
Modify exactly one file.
Create one branch, one commit, and one draft pull request.
Do not modify ProjectStatus, Mission, Roadmap, DevelopmentPhases, root entry, Target contracts, normative AI-DOS contracts, implementation files, evidence records, or capability state.
Validate scope, links, terminology, authority boundaries, and non-normative examples.
```

### Read-only review

```text
HUMAN GOVERNANCE — Review `<subject>` only.

Resolve the exact subject identity before analysis.
Inspect authority, scope, semantics, validation, evidence, and protected-area compliance.
Do not mutate repository, provider, or Target state.
Report findings and an approval recommendation.
```

### Exact approval

```text
HUMAN GOVERNANCE — Approve `<subject>` at reviewed revision `<identity>`.
Record acceptance only.
Do not merge, continue, generate, select, activate, or execute further work.
```

### Continue with explicit selection

```text
HUMAN GOVERNANCE — Continue.
Next Step: `<exact bounded work unit>`.
Preserve all existing protected areas and validation requirements.
```

## 19. Choosing the Right Command

Use this sequence:

1. Do you only need information? Use orientation or audit.
2. Is the exact work already known? Use explicitly bounded execution.
3. Is a completed subject awaiting inspection? Use review.
4. Are there recorded findings to fix? Use correction.
5. Is an approval-eligible subject ready for Human Governance? Use approval.
6. Should the Target resolve its next authorized action? Use continuation.
7. Is authority, identity, or scope unclear? Stop and clarify rather than inventing work.

## 20. Authority Boundary

This public reference does not define command semantics.

For normative behavior, follow the applicable owners under `docs/AI-DOS/`, including:

- the AI-DOS provider entry;
- command-family documents;
- task-planning and task-generation workflows;
- execution sequence;
- review engine and review checklist;
- project state updater;
- Target repository resolution rules;
- audit workflows and templates.

Target-specific mission, planning, operational state, protected areas, and approval subjects remain owned by the active Target Project.

## 21. Related Public Documentation

- [Reference hub](README.md)
- [Workflows](Workflows.md)
- [Specifications](Specifications.md)
- [Glossary](Glossary.md)
- [FAQ](FAQ.md)
- [Tutorial examples](../Tutorials/Examples.md)
- [Building Targets](../Tutorials/BuildingTargets.md)
- [Execution Providers](../Tutorials/Providers.md)

## 22. Command Readiness Checklist

Before sending a command, confirm:

- [ ] the intended lifecycle action is clear;
- [ ] exactly one objective is requested;
- [ ] the subject or artifact is identifiable;
- [ ] allowed scope is explicit;
- [ ] protected areas are preserved;
- [ ] validation expectations match the surface;
- [ ] completion is observable;
- [ ] approval and continuation are not combined unintentionally;
- [ ] provider-specific evidence is not mistaken for universal AI-DOS schema;
- [ ] ambiguity will safe stop rather than authorize invention.

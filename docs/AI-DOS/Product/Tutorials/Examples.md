# AI-DOS Examples

This tutorial presents practical Human Governance and Execution Provider examples for AI-DOS-governed Target Projects.

The examples are explanatory. They show how to express intent, preserve boundaries, interpret provider responses, and recognize safe-stop conditions. They do not replace the owning Target contract or normative AI-DOS workflow.

## 1. How to Use This Page

Each example contains:

- the Human Governance instruction;
- the expected provider interpretation;
- the permitted outcome;
- the prohibited outcome;
- the evidence Human Governance should expect.

Before using an example, replace placeholder paths, artifact names, and validation commands with the Target-owned values declared by the applicable Target contract and active task.

## 2. Example Responsibility Model

A correct interaction preserves this responsibility split:

| Responsibility | Owner |
|:---|:---|
| Mission, planning, operational state, protected areas, Target resources | Target Project |
| Reusable routing, task planning, execution sequence, review, validation, state-update procedure | AI-DOS |
| Repository reads, edits, commands, commits, pull requests, reports | Execution Provider |
| Approval, acceptance, continuation, explicit override | Human Governance |

A provider may have broad technical access while still lacking authority to use it. Capability is not authorization.

## 3. Example 1 — Read-Only Orientation

### Human Governance instruction

```text
Read the repository entry, Target contract, AI-DOS provider entry, and current Target operational state. Report the current objective, protected areas, blockers, and exactly one authorized next action. Read only. Do not modify files or repository state.
```

### Expected interpretation

The provider should:

1. follow the repository-declared reading order;
2. resolve Target-owned operational context;
3. enter the AI-DOS provider route only after Target Context is resolved;
4. report the requested information without mutation.

### Expected report

```text
Objective: <resolved objective>
Current state: <resolved operational state>
Protected areas: <declared protected areas>
Blockers: <none or exact blocker>
Exactly one authorized next action: <resolved action>
Changed artifacts: none
```

### Safe-stop condition

The provider should stop if the repository entry, Target contract, or operational entry is missing, contradictory, or inaccessible.

## 4. Example 2 — Explicitly Bounded Documentation Task

### Human Governance instruction

```text
Create exactly one bounded documentation work unit.

Objective:
Replace docs/Product/Tutorials/Example.md with an explanatory tutorial.

Allowed scope:
- docs/Product/Tutorials/Example.md only

Forbidden scope:
- Target operational state
- Mission
- Roadmap
- Development phases
- repository entry
- normative AI-DOS contracts
- implementation files

Validation:
- compare the work branch against the default branch
- confirm exactly one changed file
- confirm no protected area changed

Completion:
- one branch
- one commit
- one draft pull request
- report branch, commit, pull request, changed file, and validation result
```

### Expected interpretation

This is already sufficiently bounded. The provider should not replace it with state-derived task selection or broaden it into adjacent documentation work.

### Acceptable result

```text
Branch: agent/example-tutorial
Commit: <immutable revision>
Draft review subject: <locator>
Changed artifacts:
- docs/Product/Tutorials/Example.md
Validation:
- ahead by 1
- behind by 0
- changed files: 1
Protected-area confirmation: passed
State-update authority: none
```

### Prohibited result

The provider must not also update a tutorial index, operational state, navigation document, or release notes merely because those changes appear useful.

## 5. Example 3 — One-File Correction

### Human Governance instruction

```text
Correct the broken relative links in docs/Product/GettingStarted/QuickStart.md only. Preserve all other wording and structure. Open a draft review subject after validating that exactly one file changed.
```

### Expected provider behavior

The provider should:

- inspect only enough context to identify the broken links;
- change only the named file;
- preserve unrelated wording;
- validate the resulting links where possible;
- report any link that cannot be validated.

### Safe-stop condition

If fixing the links requires renaming or moving another artifact, the provider should stop and report that the requested one-file scope is insufficient.

## 6. Example 4 — Review Only

### Human Governance instruction

```text
Review the declared review subject only. Do not modify files, branches, comments, labels, approval state, merge state, or Target operational state. Report findings ordered by severity and identify the exact reviewed revision.
```

### Expected provider behavior

The provider should:

1. resolve the review subject locator;
2. resolve and record the immutable reviewed revision identity;
3. inspect the diff and relevant authority;
4. report actionable findings;
5. avoid all mutation.

### Acceptable verdict shape

```text
Reviewed subject: <locator>
Reviewed revision: <immutable identity>
Verdict: APPROVE | COMMENT | REQUEST CHANGES
Findings:
1. <severity> — <artifact and location> — <finding>
Validation observed: <evidence>
Repository mutations: none
```

### Prohibited behavior

A review instruction does not authorize the provider to push corrections, submit approval, merge, or update ProjectStatus.

## 7. Example 5 — Correct Review Findings

### Human Governance instruction

```text
Address only the unresolved actionable findings on the current review subject. Preserve the original objective and file boundary. Do not add improvements unrelated to those findings. Re-run the applicable validation and report the new revision identity.
```

### Expected provider behavior

The provider should map each edit to a specific unresolved finding. It should not use review feedback as permission for general cleanup.

### Completion report

```text
Resolved findings:
- Finding 1: resolved by <change>
- Finding 2: resolved by <change>
Unresolved findings:
- none
Changed artifacts: <exact list>
Validation: <commands and results>
New revision identity: <immutable identity>
Protected-area confirmation: passed
```

## 8. Example 6 — Human Governance Approval of an Exact Subject

### Human Governance instruction

```text
Human Governance — Approve review subject <exact locator> at reviewed revision <exact immutable identity>. Record acceptance only. Do not merge, continue, generate, select, activate, or execute another task.
```

### Expected interpretation

The instruction authorizes only the exact Target-owned acceptance transition supported by the applicable state-update contract and evidence.

### Prohibited interpretation

Approval must not be interpreted as:

- approval of a different revision;
- permission to merge;
- permission to continue;
- permission to select the next task;
- capability activation;
- execution authorization.

### Safe-stop condition

If the reviewed subject has changed since the named revision, the provider should stop because approval identity no longer matches the current subject.

## 9. Example 7 — Bare Approval With One Recorded Pending Subject

### Human Governance instruction

```text
Human Governance — Approve.
```

### Expected interpretation

Bare approval may resolve only when the Target operational state canonically records exactly one valid subject awaiting Human Governance approval.

### Expected outcome

The provider should:

1. read the canonical pending-subject record;
2. confirm exactly one eligible subject exists;
3. re-resolve the current reviewed revision identity;
4. confirm identity stability and evidence completeness;
5. apply only the authorized acceptance transition.

### Safe-stop outcomes

The provider must stop when:

- no pending subject is recorded;
- more than one subject appears recorded;
- the record is incomplete or contradictory;
- the subject identity drifted;
- the subject is already accepted or invalidated.

## 10. Example 8 — Continue From a Hold

### Human Governance instruction

```text
Human Governance — Continue.
```

### Expected interpretation

When the current Target state explicitly awaits continuation or explicit next-step selection, the instruction is the awaited signal. The provider should consume it once and route the resolved Target Context through the owning AI-DOS task-planning contracts.

The instruction does not itself name or authorize an arbitrary repository task.

### Possible valid outcomes

#### Outcome A — one eligible candidate is resolved

```text
Selected work unit: <candidate>
Selection basis: <Target-owned priority and eligibility evidence>
Activation transition: <authorized or recommended result>
Execution: <performed only if activation and execution authority are established>
```

#### Outcome B — no capability-grounded work unit can be resolved

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
Blocker: <missing or non-unique Target-owned input>
Changed artifacts: none
```

### Prohibited behavior

The provider must not select the nearest placeholder, easiest file, newest issue, or most obvious implementation gap unless Target-owned authority makes it eligible and controlling.

## 11. Example 9 — Continue With an Explicit Next Step

### Human Governance instruction

```text
Human Governance — Continue.
Next Step: Create the provider-neutral onboarding tutorial declared by the current Target authority.
```

### Expected interpretation

The explicit next step bypasses Target priority ranking only. It does not bypass:

- eligibility;
- dependencies;
- scope;
- protected areas;
- validation requirements;
- ownership;
- activation and execution boundaries.

### Safe-stop condition

If the named next step is not eligible under the current Target capability and authority, the provider should stop rather than force selection.

## 12. Example 10 — Missing Candidate-Generation Input

### Human Governance instruction

```text
Continue with the next capability-grounded work unit.
```

### Resolved context

Assume:

- the controlling objective is known;
- no predeclared candidate exists;
- candidate generation is required;
- the Target has not supplied the required generation-grade declaration.

### Correct provider response

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND

Reason:
The controlling objective requires candidate generation, but the Target-owned generation input is missing.

Changed artifacts: none
Suggested governance action:
Supply or authorize the missing Target-owned generation declaration.
```

### Incorrect provider response

The provider must not infer a candidate from repository placeholders, TODOs, recent pull requests, or its own architectural judgment.

## 13. Example 11 — Protected-Area Conflict

### Human Governance instruction

```text
Improve the onboarding tutorial and update ProjectStatus to mark the related evidence accepted.
```

### Resolved authority

Assume the documentation edit is authorized but no exact ProjectStatus transition is authorized and no accepted evidence exists.

### Correct provider response

```text
Blocker: mixed authorized and unauthorized scope.

Authorized portion:
- onboarding tutorial improvement

Unauthorized portion:
- ProjectStatus acceptance mutation

No files changed because the instruction combines a bounded product edit with an unauthorized protected-area transition. Provide a separated exact instruction for the permitted work.
```

A provider should not silently execute the allowed half when the requested completion condition depends on the unauthorized half.

## 14. Example 12 — Validation Boundaries

### Human Governance instruction

```text
Update the CLI help text in the named implementation file and validate the change.
```

### Expected validation report

```text
Validation performed:
- typecheck: passed
- implementation tests: passed
- CLI help invocation: passed

Validated surface:
- named CLI implementation behavior

Not established by this validation:
- AI-DOS architectural correctness
- Target governance correctness
- Markdown contract consistency
- capability acceptance
```

Passing implementation tests must not be reported as proof of product-wide or governance-wide correctness.

## 15. Example 13 — Documentation Validation

### Human Governance instruction

```text
Replace the placeholder tutorial with an explanatory page. Validate structure, references, and bounded scope.
```

### Expected validation

The provider may report:

- the file is no longer a placeholder;
- required headings are present;
- referenced repository paths exist at the inspected revision;
- the branch changes exactly one file;
- no protected area changed;
- the page references normative owners instead of redefining them.

The provider should not claim that explanatory documentation validation proves runtime behavior.

## 16. Example 14 — Provider Handoff

### Scenario

Provider A implements a bounded change. Provider B performs an independent review.

### Provider A completion record

```text
Objective: <exact objective>
Authority consumed: <Target and AI-DOS sources>
Branch or workspace: <locator>
Revision identity: <immutable identity>
Changed artifacts: <exact list>
Validation: <commands and results>
Protected-area confirmation: passed
State update: none
```

### Human Governance instruction to Provider B

```text
Independently review the subject at <locator> and revision <identity>. Use the Target contract and applicable AI-DOS review authorities. Do not rely on Provider A's conclusion. Do not modify the subject.
```

### Expected value

The second provider verifies the artifact and evidence independently while preserving the same reviewed-subject identity.

## 17. Example 15 — Provider Switch During Execution

### Scenario

A provider loses tool access after creating a branch but before validation.

### Correct handoff record

```text
Completed:
- branch created
- named file edited
- commit created at <identity>

Not completed:
- validation
- review subject creation

Blocker:
- required repository tool unavailable

Next authorized action:
- another provider may resume only from the declared branch and immutable commit, validate the exact scope, and create the review subject if validation passes
```

The replacement provider should re-read current authority and verify that the task remains authorized before continuing.

## 18. Example 16 — Mixed Unrelated Working Tree

### Human Governance instruction

```text
Publish the tutorial change as a draft review subject.
```

### Provider discovery

Assume the workspace also contains unrelated user changes.

### Correct provider behavior

The provider should not stage or publish all changes. It should isolate the authorized tutorial artifact or stop if isolation cannot be guaranteed.

### Completion evidence

```text
Published artifacts:
- docs/Product/Tutorials/Example.md

Excluded pre-existing artifacts:
- <unrelated file list>

Validation:
- review subject diff contains only the authorized file
```

## 19. Example 17 — Branch Drift Before Review

### Scenario

A review subject was initially inspected at revision `A`. A new commit produces revision `B` before the verdict is issued.

### Correct outcome

The reviewer should not issue a verdict for `B` based on inspection of `A`.

```text
Review invalidated by identity drift.
Previously inspected revision: A
Current subject revision: B
Required action: re-review the current revision before issuing a verdict
```

## 20. Example 18 — Merge Is Not Acceptance

### Scenario

A pull request is merged, but the Target operational state has not recorded Human Governance acceptance.

### Correct interpretation

Merge state is repository integration evidence. It is not automatically Target-owned acceptance evidence unless the governing Target contract and exact state-transition authority say so.

### Correct report

```text
Repository integration: complete
Human Governance acceptance: not established
ProjectStatus mutation authority: none
Recommended next step: resolve the applicable acceptance gate through the owning Target and AI-DOS contracts
```

## 21. Example 19 — Acceptance Is Not Continuation

### Human Governance instruction

```text
Approve the reviewed work. Record acceptance only.
```

### Correct completion

After the acceptance transition, the provider stops.

### Prohibited continuation

The provider must not automatically generate or execute the next task. Human Governance acceptance and Human Governance continuation are separate lifecycle signals.

## 22. Example 20 — Audit Without Mutation

### Human Governance instruction

```text
Audit the repository for product/Target truth-boundary violations. Read only. Classify findings by owner and severity. Do not correct findings or open a pull request.
```

### Expected report shape

```text
Audit scope: <inspected paths>
Authorities consumed: <sources>

Findings:
1. Severity: high
   Artifact: <path>
   Owner conflict: <Target truth copied into product truth, or reverse>
   Evidence: <specific passage>
   Recommended bounded correction: <one action>

Changed artifacts: none
```

An audit finding is not itself authority to edit the affected artifact.

## 23. Example 21 — Safe-Stop for Ambiguous Scope

### Human Governance instruction

```text
Fix the documentation problems.
```

### Correct provider response

The instruction does not identify an objective, bounded artifact set, protected boundaries, validation, or completion condition.

```text
Safe-stop: executable scope is ambiguous.

Resolved facts:
- documentation problems may exist

Missing execution inputs:
- exact objective
- allowed artifacts
- forbidden artifacts
- validation criteria
- completion condition

Changed artifacts: none
```

When state-derived task resolution cannot produce one eligible work unit, the provider must not invent the missing scope.

## 24. Example 22 — Safe-Stop for Contradictory Authority

### Scenario

The active task authorizes one documentation file, while another Target artifact declares a different file for the same work unit.

### Correct response

```text
Safe-stop: contradictory Target-owned scope.
Authority A: <source and declared file>
Authority B: <source and conflicting file>
Changed artifacts: none
Required governance action: resolve the contradiction in the owning Target authority
```

Provider preference, file recency, or repository convenience cannot resolve the conflict.

## 25. Example 23 — Exact One-File Publication Pattern

### Human Governance instruction

```text
Create the Examples tutorial as one bounded product-documentation work unit.

Scope:
- modify docs/AI-DOS/Product/Tutorials/Examples.md only

Preserve:
- ProjectStatus
- Mission
- Roadmap
- DevelopmentPhases
- repository entry
- Target contract
- normative AI-DOS contracts
- implementation

Publish:
- one branch
- one commit
- one draft pull request

Validate:
- branch is based on the current default branch
- exactly one file changed
- no protected area changed
```

### Expected result

The provider executes only the named tutorial work and reports immutable evidence. It does not treat the tutorial examples as new normative behavior.

## 26. Reusable Completion Report Template

```text
Objective:
<exact objective>

Target Context consumed:
- <Target contract>
- <operational entry>
- <task-specific authority>

AI-DOS authorities consumed:
- <provider entry>
- <applicable workflow or command>

Changed artifacts:
- <exact path list>

Validation:
- <check>: <result>

Protected-area confirmation:
- <area>: unchanged

Review subject:
- locator: <provider-neutral locator>
- revision identity: <immutable identity>

Blockers:
- <none or exact blocker>

State-update authority:
- <none, recommended only, or exact authorized transition>

Completion condition:
- <met or unmet with evidence>
```

## 27. Reusable Review Instruction Template

```text
Review only the subject at <locator> and immutable revision <identity>.

Authority:
- read the Target contract and applicable AI-DOS review authorities

Scope:
- inspect the complete subject diff and required surrounding context

Do not:
- modify files
- push commits
- change review-subject state
- merge
- update Target operational state

Report:
- reviewed identity
- findings ordered by severity
- validation evidence observed
- verdict
```

## 28. Reusable Bounded Execution Template

```text
Human Governance — Authorize exactly one bounded work unit.

Objective:
<one observable objective>

Allowed artifacts:
- <exact paths>

Forbidden artifacts:
- <exact protected paths or categories>

Required actions:
- <bounded actions>

Validation:
- <commands or review criteria>

Evidence:
- changed artifacts
- validation results
- protected-area confirmation
- immutable revision identity
- blockers

Completion condition:
<observable result>

Do not:
- expand scope
- activate another capability
- mutate Target operational state unless explicitly authorized
- continue to another task
```

## 29. Example Quality Checklist

Before using or publishing an AI-DOS instruction example, confirm that it:

- identifies one objective;
- identifies the owner of the objective;
- names exact allowed artifacts where execution is requested;
- names protected or forbidden areas;
- separates technical capability from authority;
- defines validation appropriate to the changed surface;
- requests evidence rather than unsupported assurance;
- keeps execution, review, approval, merge, acceptance, state update, and continuation distinct;
- includes a safe-stop when required context is missing or contradictory;
- avoids provider-specific details unless they are clearly presented as one implementation example;
- references normative owners rather than redefining them.

## 30. Further Reading

Continue with:

- [Tutorials overview](README.md)
- [Building Targets](BuildingTargets.md)
- [Execution Providers](Providers.md)
- [Getting Started](../GettingStarted/README.md)
- [Core Concepts](../Concepts/README.md)
- [Reference](../Reference/README.md)

For actual execution semantics, always follow the Target repository entry, Target contract, AI-DOS provider entry, and the task-specific normative route resolved for the current invocation.

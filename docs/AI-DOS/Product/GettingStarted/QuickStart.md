# Quick Start

This guide walks through the first complete AI-DOS work cycle inside a Target repository.

AI-DOS is used here as a repository-embedded, Markdown-first contract system. It is not launched as a separate autonomous agent. A compatible external Execution Provider reads the repository contracts, resolves the Target-owned context, performs one authorized bounded task, validates the changed surface, and returns evidence to Human Governance.

This page is explanatory. The applicable Target Project contract and normative AI-DOS contracts remain authoritative.

---

## 1. What this quick start demonstrates

By the end of this guide, you will have exercised one complete bounded cycle:

```text
Human Governance instruction
        ↓
Repository authority discovery
        ↓
Target Context resolution
        ↓
AI-DOS provider routing
        ↓
Exactly one bounded execution
        ↓
Surface-specific validation
        ↓
Evidence-backed completion report
        ↓
Human Governance review or next decision
```

The goal is not to demonstrate maximum autonomy. The goal is to demonstrate controlled, inspectable, evidence-backed work without authority invention or scope expansion.

---

## 2. Prerequisites

Before issuing the first task, confirm that the repository contains these minimum surfaces:

```text
AGENTS.md

docs/
├── AI-DOS/
│   ├── AGENTS.md
│   └── ...
└── Projects/
    └── <TargetName>/
        ├── Mission/
        ├── Planning/
        └── Reports/
```

The exact Target filenames are Target-owned. The repository must make them discoverable through its entry and Target contract rather than requiring the provider to guess paths.

### 2.1 Repository entry

The root `AGENTS.md` should identify:

- the repository and Target Project;
- the canonical Target Project contract;
- the AI-DOS provider entry contract;
- the mandatory reading order;
- the product-truth and Target-truth boundary.

The expected order is conceptually:

```text
Root repository entry
        ↓
Target Project contract
        ↓
Resolved Target Context
        ↓
AI-DOS provider entry
```

### 2.2 Target Project readiness

The Target Project should already declare:

- Target identity and truth root;
- mission authority;
- operational entry;
- current state or exactly authorized next action;
- protected areas;
- execution boundaries;
- validation expectations;
- evidence expectations;
- state-update authority;
- safe-stop conditions.

### 2.3 Execution Provider readiness

Use an external provider capable of:

- reading repository Markdown files;
- following declared authority and reading order;
- modifying only authorized repository paths;
- running relevant validation;
- reporting exact changed artifacts and limitations;
- stopping when authority, scope, or context is missing.

The provider may be a coding agent, repository agent, local automation host, or another compatible tool. Provider identity does not change the AI-DOS authority model.

---

## 3. Choose the safest first task

The first task should be small, observable, reversible, and easy to validate.

A suitable first task normally has:

| Property | Recommended first-task shape |
|:---|:---|
| Objective | One concrete documentation or configuration result |
| Scope | One file, or a very small explicit file set |
| Protected areas | Clearly excluded |
| Validation | Deterministic and surface-specific |
| Completion | Easy to inspect |
| State mutation | None unless explicitly required |
| Follow-up work | Not automatically authorized |

Avoid using the first run for:

- broad refactoring;
- architecture redesign;
- mission or roadmap mutation;
- live operational-state mutation;
- capability activation;
- multi-project changes;
- vague requests such as “improve the repository”;
- work whose validation cannot be named before execution.

---

## 4. Use an explicitly bounded instruction

For the first run, prefer an already bounded instruction rather than asking the provider to select work from repository state.

Example:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective:
Create or update the Target Project introduction page so a new reader can understand the Target's purpose and authority boundary.

Allowed scope:
docs/Projects/MyTarget/Product/Introduction.md only.

Forbidden scope:
- docs/AI-DOS/**
- Target Mission documents
- Target Planning documents
- Target Reports and historical evidence
- repository automation and implementation files

Required validation:
- confirm the changed file is the only modified artifact;
- verify every relative link in the changed file resolves;
- verify the page does not redefine AI-DOS product contracts;
- verify no Target operational state was changed.

Completion condition:
The introduction page is complete, the required validation is reported, no protected area changed, blockers are named, and exactly one next step is recommended.

State-update authority:
None.
```

This instruction supplies the provider with enough information to execute without inventing the objective, scope, validation, or completion condition.

---

## 5. Understand each instruction field

### 5.1 Human Governance marker

The marker identifies the instruction as a Human Governance decision or authorization in repositories that use that convention.

The exact wording is less important than the Target contract's intent rules. A provider must interpret the instruction through the declared contracts, not through a globally assumed magic phrase.

### 5.2 Objective

The objective states the one observable result to achieve.

Good objective:

```text
Update the Target Project introduction page to explain the Target's purpose and authority boundary.
```

Poor objective:

```text
Improve the docs and fix anything else you notice.
```

A bounded objective should not silently include cleanup, redesign, adjacent fixes, or future work.

### 5.3 Allowed scope

Allowed scope names the artifacts the provider may change.

For a first run, an exact path is preferable:

```text
docs/Projects/MyTarget/Product/Introduction.md only
```

“Documentation files” is usually too broad because it leaves the provider to decide which documentation belongs to the task.

### 5.4 Forbidden scope

Forbidden scope reinforces protected boundaries and makes common expansion paths explicit.

It does not replace the Target contract's protected-area rules. Both apply.

### 5.5 Required validation

Validation must match the changed surface.

For a Markdown-only task, relevant checks may include:

- changed-file count;
- link resolution;
- required heading presence;
- forbidden terminology or path checks;
- product/Target boundary review;
- confirmation that protected files were untouched.

A language-specific build or test command may be irrelevant to a documentation-only task. Passing an unrelated command does not prove the documentation is correct.

### 5.6 Completion condition

The completion condition defines what evidence must exist before the provider can report the work as complete.

Completion is not the same as approval. It means the authorized execution and required validation have finished.

### 5.7 State-update authority

State mutation should be explicit.

For a safe first task:

```text
State-update authority: None.
```

The provider may recommend a later state update, but it must not mutate live Target state merely because the file change and validation succeeded.

---

## 6. Open the repository with the Execution Provider

Start the provider in the Target repository root.

Then supply the bounded instruction exactly once.

Do not first ask the provider to ignore repository instructions, infer the project from implementation files, or continue prior work from memory. The provider should begin from the repository's declared entry and current Target authorities.

A compliant provider should resolve context approximately as follows:

```text
1. Read root AGENTS.md.
2. Read the canonical Target Project contract.
3. Resolve the Target operational entry and task-specific authority.
4. Read docs/AI-DOS/AGENTS.md.
5. Follow the applicable AI-DOS provider route.
6. Confirm the task is executable and bounded.
7. Inspect the authorized source and validation surfaces.
8. Modify only the authorized artifact.
9. Run the declared validation.
10. Produce completion evidence and stop.
```

The provider may read additional files required by the declared route or task. Reading a file does not grant permission to modify it.

---

## 7. What the provider must resolve before editing

Before mutation, the provider should be able to state:

| Required resolution | Question that must have one answer |
|:---|:---|
| Target identity | Which Target Project is being changed? |
| Authority | Which contract authorizes the work? |
| Objective | What single result is required? |
| Scope | Which exact artifacts may change? |
| Protected areas | Which surfaces must remain untouched? |
| Validation | What checks prove the declared surface was exercised? |
| Completion | What observable state ends the work unit? |
| State authority | Is live Target-state mutation allowed? |

If one of these cannot be resolved, the correct result is not improvisation. It is a safe-stop with a precise blocker.

---

## 8. Expected execution behavior

During execution, the provider should:

1. preserve the original objective;
2. change only the allowed artifact;
3. avoid unrelated cleanup;
4. preserve protected areas;
5. run the declared checks;
6. distinguish validation success from governance approval;
7. report any environmental limitation;
8. stop after the one work unit is complete.

The provider should not:

- add a second file because it would be convenient;
- update the roadmap because the task succeeded;
- generate and start the next task;
- treat a commit, pull request, or passing check as Human Governance approval;
- claim product-wide validation from one surface-specific check;
- copy Target-specific state into reusable AI-DOS product documentation.

---

## 9. Review the completion report

A useful completion report should contain the following sections or equivalent evidence.

### 9.1 Objective

The report should repeat the resolved objective without broadening it.

### 9.2 Target Context consumed

The report should identify the Target authorities and resources actually read.

It should not claim that every repository contract was consumed if only a subset was needed.

### 9.3 Changed artifacts

The report should name every changed artifact exactly.

For the example task:

```text
docs/Projects/MyTarget/Product/Introduction.md
```

If any other artifact changed, the provider should explain why it was authorized. For an exact one-file task, an extra changed file is normally a scope violation.

### 9.4 Validation evidence

The report should name:

- each check performed;
- the result;
- what surface the check validated;
- any warning, skipped check, or environment limitation.

Example:

```text
Changed-file scope check: PASS
Validated surface: repository diff against the task base
Result: exactly one changed file

Relative-link check: PASS
Validated surface: links inside Introduction.md
Result: all relative targets resolved
```

### 9.5 Protected-area confirmation

The report should explicitly confirm that protected areas remained unchanged.

### 9.6 Blockers and risks

“No blocker” is a valid result only when the provider actually resolved the required context and completed the declared validation.

### 9.7 State-update authority

The report should state whether Target state was changed, recommended for change, or left untouched.

### 9.8 Exactly one recommended next step

A recommendation is not automatic authorization.

The provider should recommend one next step and then stop.

---

## 10. Human Governance decision after completion

Human Governance now decides what happens next.

Possible decisions include:

- request a correction;
- request an independent review;
- accept the result through the Target's defined acceptance route;
- authorize a separate state-update task;
- authorize the next bounded work unit;
- take no action.

These lifecycle events are distinct:

```text
Execution complete
        ≠
Validation passed
        ≠
Review approved
        ≠
Human Governance accepted
        ≠
State updated
        ≠
Next task authorized
```

A provider must not collapse them into one automatic transition.

---

## 11. Optional state-derived continuation test

After the explicitly bounded first run is understood, you may test a continuation instruction only when the Target Project's current operational state and contracts support it.

Example:

```text
HUMAN GOVERNANCE

Continue.
```

A compliant provider should:

1. consume the continuation intent through the Target contract;
2. read the current operational entry fresh;
3. route the resolved inputs through the owning AI-DOS task-planning contracts;
4. select or generate work only when the required Target-owned inputs exist and the contracts authorize it;
5. safe-stop when no unique eligible work unit can be resolved;
6. never choose work merely because it is nearby, easy, or recently edited.

Do not use continuation as a substitute for missing Target planning or incomplete operational declarations.

---

## 12. Controlled safe-stop test

A safe-stop is a successful governance behavior when required authority or context is intentionally absent.

A non-mutating test can ask the provider to resolve a task while omitting one required input, for example a validation declaration or exact authorized scope.

The expected response should:

- identify the missing input;
- explain why execution is not authorized;
- avoid changing files;
- avoid inventing a default;
- identify the authority that must supply the missing information.

A response that proceeds by guessing has failed the test even when the resulting file looks reasonable.

---

## 13. Common quick-start failures

### 13.1 Vague scope

```text
Improve the documentation.
```

This does not identify one bounded artifact set.

### 13.2 Hidden state mutation

```text
Complete the file and mark the phase accepted.
```

File completion and state acceptance are separate authorities unless the task explicitly and validly authorizes both.

### 13.3 Product and Target truth mixing

Target mission, roadmap, live state, or project-specific evidence should not be inserted into reusable `docs/AI-DOS/` product contracts.

### 13.4 Provider-specific assumptions

The Target contract should not depend on one model vendor, agent host, or repository platform unless that dependency is part of a separately bounded adapter or implementation surface.

### 13.5 Validation overclaim

A Markdown link check does not validate architecture, governance correctness, or runtime behavior.

### 13.6 Automatic follow-up

Completing the first task does not authorize the provider to execute the recommended next task.

### 13.7 Repository inference replacing authority

Recent commits, open issues, file proximity, TODO comments, and implementation language are not substitutes for Target-owned authorization.

---

## 14. First-run acceptance checklist

Use this checklist to evaluate the first bounded execution.

### Authority and context

- [ ] The provider began from the repository entry.
- [ ] The correct Target Project was resolved.
- [ ] The Target contract and operational entry were read fresh.
- [ ] AI-DOS was entered only after Target Context resolution.
- [ ] No authority was inferred from implementation files or repository history.

### Scope and execution

- [ ] Exactly one bounded objective was executed.
- [ ] Only authorized artifacts changed.
- [ ] Protected areas remained untouched.
- [ ] No unrelated cleanup or follow-up work was added.
- [ ] No unapproved capability was activated.

### Validation and evidence

- [ ] Validation matched the changed surface.
- [ ] Validation limitations were reported.
- [ ] Every changed artifact was listed.
- [ ] Blockers and risks were stated accurately.
- [ ] State-update authority was reported.

### Governance lifecycle

- [ ] Completion was not presented as approval.
- [ ] Review was not presented as Human Governance acceptance.
- [ ] Acceptance was not presented as next-task authorization.
- [ ] Exactly one next step was recommended.
- [ ] The provider stopped after reporting.

---

## 15. What you have now demonstrated

A successful first run demonstrates that:

1. the repository exposes a discoverable authority chain;
2. the Target Project owns its own mission, state, scope, and protected areas;
3. AI-DOS supplies reusable provider-neutral execution contracts;
4. an external Execution Provider can consume both without owning either truth root;
5. one bounded task can be completed without authority invention;
6. validation can be tied to the exact changed surface;
7. evidence can return to Human Governance without automatic approval or continuation.

That is the minimum practical AI-DOS operating loop.

---

## 16. Continue learning

After completing this quick start, continue with:

1. [Execution Model](../ExecutionModel.md) — understand the full governed lifecycle.
2. [Context Resolution](../ContextResolution.md) — understand how Target identity, resources, authority, and blockers are resolved.
3. [Provider Model](../ProviderModel.md) — understand provider neutrality and Execution Provider boundaries.
4. [Concepts](../Concepts/README.md) — study Human Governance, authority, safe-stop, evidence, and lifecycle separation.
5. [Tutorials](../Tutorials/README.md) — follow scenario-oriented walkthroughs.
6. [Reference](../Reference/README.md) — locate detailed product terminology and contract surfaces.

---

## Documentation status

This quick start is publication-oriented explanatory guidance.

It does not authorize work, define Target-specific state, replace the Target Project contract, or redefine AI-DOS workflow behavior. When this page and an applicable normative contract differ, the normative contract governs.
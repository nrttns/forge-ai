# AI-DOS Workflows Reference

AI-DOS workflows coordinate bounded work across Target authority, provider routing, execution, validation, review, evidence, and state transition boundaries.

This page is a public lookup guide. It explains when each workflow is used and how the workflows relate. It does not replace the normative workflow files under `docs/AI-DOS/Workflows/`.

## 1. How to use this reference

Use this page when you need to answer one of these questions:

- Which workflow owns the next step?
- Does the request describe an explicit task or require task selection?
- When should execution stop safely?
- Which workflow may update Target state?
- How do review, approval, merge, and continuation differ?
- What evidence should an Execution Provider report?

For exact behavior, inputs, outputs, schemas, and safe-stop rules, follow the linked canonical workflow.

## 2. Core workflow map

```text
Target authority and Human Governance intent
    ↓
Resolved Target Context
    ↓
TaskPlanner when task selection is required
    ↓
TaskGenerationWorkflow when candidate construction is required
    ↓
Applicable command and execution route
    ↓
ExecutionSequence
    ↓
Validation and evidence
    ↓
Review workflow when review is requested
    ↓
ProjectStateUpdater only when an exact state transition is authorized
```

Not every request uses every workflow.

An explicitly bounded task may enter the applicable execution route directly. A continuation request without a bounded task normally requires selection. A read-only orientation request may stop after context resolution and reporting.

## 3. Workflow selection table

| User intent or situation | Primary workflow | Expected result |
|:---|:---|:---|
| Execute a fully bounded task | Applicable execution workflow and `ExecutionSequence.md` | Bounded changes, validation, and evidence |
| Continue or advance without naming a task | `TaskPlanner.md` | Exactly one selected candidate or safe stop |
| Candidate construction is required | `TaskGenerationWorkflow.md` | Deterministic bounded candidate set or safe stop |
| Review an exact subject | Review route and review checklist | Findings or approval-eligible review outcome |
| Correct confirmed review findings | Applicable correction workflow | Only the authorized corrections |
| Apply an authorized Target state transition | `ProjectStateUpdater.md` | Exact state mutation or safe stop |
| Perform a read-only audit | Audit workflow or applicable checklist | Findings and evidence; no mutation |
| Required authority or context is missing | Owning workflow safe stop | Blocker record; no invented work |

## 4. Task Planner

Canonical owner:

`docs/AI-DOS/Workflows/TaskPlanner.md`

### Purpose

Task Planner decides whether a capability-grounded work unit can be selected from Resolved Target Context.

### Use it when

- Human Governance asks to continue, advance, or perform the next task;
- no sufficiently bounded executable task is supplied;
- candidate eligibility and priority must be resolved;
- an explicit `Next Step` must be checked against eligibility and protected boundaries.

### Do not use it when

- the user already supplied a complete bounded task;
- the request is review-only or audit-only;
- an approval intent routes directly to an exact state transition;
- the task would require inventing missing Target-owned inputs.

### Typical outputs

- exactly one selected bounded work unit;
- delegation to Task Generation Workflow;
- a safe-stop result when no unique eligible candidate can be resolved.

### Important boundary

Task Planner selects work. It does not execute the work, approve it, merge it, or independently mutate Target state.

## 5. Task Generation Workflow

Canonical owner:

`docs/AI-DOS/Workflows/TaskGenerationWorkflow.md`

### Purpose

Task Generation Workflow constructs bounded candidates from explicit Target-owned generation inputs when Task Planner cannot select from a predeclared candidate set.

### Use it when

- the controlling Target objective is known;
- generation-grade inputs are declared by the Target;
- deterministic candidate construction is required;
- Task Planner delegates candidate generation.

### Required qualities

Generated candidates should be:

- capability-grounded;
- minimal;
- independently executable;
- explicit about artifact scope;
- explicit about protected areas;
- explicit about validation and evidence;
- safe to rank without model improvisation.

### Safe-stop examples

Stop before repository mutation when:

- generation inputs are absent or incomplete;
- multiple candidates remain tied without a declared tie-break;
- a candidate crosses a protected-area boundary;
- the objective cannot be mapped to a bounded artifact;
- candidate construction would rely on repository proximity or convenience alone.

### Important boundary

Task Generation Workflow constructs candidates. It does not activate or execute them.

## 6. Execution Sequence

Canonical owner:

`docs/AI-DOS/System/ExecutionSequence.md`

### Purpose

Execution Sequence governs the order in which an authorized work unit is resolved, performed, validated, and reported.

### Typical sequence

1. Resolve the exact objective.
2. Confirm the authorized artifact scope.
3. Confirm protected areas and prohibited changes.
4. Read task-specific authorities.
5. Perform only the authorized mutation.
6. Run applicable validation.
7. Collect evidence.
8. Report completion, blockers, and state-update authority.

### Execution evidence should identify

- objective;
- changed artifacts;
- branch or equivalent work location when applicable;
- revision identity when applicable;
- validation performed;
- validation scope;
- unresolved blockers;
- protected-area confirmation;
- whether a state transition was authorized.

### Important boundary

Passing a tool-specific test validates only the exercised surface. It does not automatically validate governance, architecture, Target progress, or all normative Markdown contracts.

## 7. Review workflow

Canonical review authorities include:

- `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.7-Review-Engine-RFC.md`
- `docs/AI-DOS/Checklists/AgentReviewChecklist.md`

### Purpose

Review evaluates an exact reviewed subject against the authorized objective, scope, governing authorities, validation evidence, and completion condition.

### Review requires stable subject identity

A review should identify the subject through a complete locator and revision identity appropriate to the provider.

Examples in a Git-based provider may include:

- repository;
- pull request or branch locator;
- exact commit revision.

These are provider realizations, not universal AI-DOS schema names.

### Review outcomes

A review may produce:

- findings requiring correction;
- a blocker;
- a no-findings or approval-eligible recommendation.

### Important boundary

Review is not Human Governance approval. Review does not merge work, accept Target evidence, update ProjectStatus, or select the next task.

## 8. Correction workflow

Use a correction workflow when review has produced concrete actionable findings and Human Governance or the active task authorizes those corrections.

### Correction scope

A correction instruction should identify:

- the exact reviewed subject;
- the findings to resolve;
- the permitted files;
- prohibited collateral changes;
- required revalidation;
- the expected revised subject identity.

### Correction rules

- Correct only confirmed findings.
- Do not redesign unrelated areas.
- Preserve valid work outside the finding scope.
- Re-run the validation affected by the correction.
- Request or perform a fresh review against the new revision identity.

### Important boundary

A changed revision invalidates review evidence tied only to the earlier revision unless the owning review contract explicitly permits otherwise.

## 9. Project State Updater

Canonical owner:

`docs/AI-DOS/Workflows/ProjectStateUpdater.md`

### Purpose

Project State Updater validates and applies an exact Target-owned operational-state transition when authority for that transition exists.

### Use it when

- Human Governance explicitly authorizes a named state update;
- a Target contract uniquely derives an activation transition;
- a valid pending approval subject is resolved by Human Governance approval;
- an accepted workflow output must be written into the Target-owned state record.

### Do not use it when

- work merely completed;
- a pull request merely merged;
- tests passed;
- a review produced no findings;
- the next task appears obvious;
- the state transition is not exact or uniquely authorized.

### Typical safe stops

Stop without state mutation when:

- no eligible approval subject exists;
- more than one subject could be inferred;
- the recorded revision identity drifted;
- required completion or validation evidence is missing;
- the requested transition conflicts with current Target state;
- the mutation would also select or execute new work without authority.

### Important boundary

State update, task selection, task execution, review, and merge are separate lifecycle actions.

## 10. Audit workflow

Audits are generally read-only unless the audit instruction separately authorizes corrections.

### Audit inputs

A useful audit instruction identifies:

- audit subject;
- governing authorities;
- scope boundaries;
- required evidence;
- prohibited mutations;
- reporting format.

### Audit outputs

An audit report should distinguish:

- verified facts;
- findings;
- risks;
- unsupported claims;
- inaccessible evidence;
- recommendations;
- blockers.

### Important boundary

A recommendation is not an authorization. Audit findings do not independently activate correction work.

## 11. Safe-stop behavior across workflows

Safe stop is a successful governance outcome when execution cannot proceed without guessing, exceeding authority, or violating a protected boundary.

Common safe-stop triggers include:

- missing Target authority;
- contradictory instructions;
- ambiguous subject identity;
- non-unique candidate selection;
- missing generation-grade inputs;
- unauthorized protected-area mutation;
- unavailable required evidence;
- validation failure that blocks completion;
- revision drift;
- requested state mutation without exact authority.

A useful safe-stop report states:

1. where processing stopped;
2. which required input or authority is missing;
3. what was inspected;
4. whether any files were changed;
5. exactly one bounded resolution path, when deterministically available.

## 12. Explicit task versus state-derived continuation

### Explicit bounded task

Example:

```text
Transform docs/Product/Reference/Example.md into a public reference page.
Modify exactly one file.
Do not modify operational state or normative contracts.
Create one branch, one commit, and one draft pull request.
```

This task already identifies the objective, artifact, scope, protected boundaries, and completion shape. Task selection is unnecessary.

### State-derived continuation

Example:

```text
Continue with the next authorized work unit.
```

This request supplies intent but not an executable task. The provider must resolve Target state and route through Task Planner. It must not choose a nearby file merely because it looks unfinished.

### Explicit next-step selection

Example:

```text
Continue. Next Step: Produce the public Workflows reference page.
```

The named selection bypasses priority ranking only. It still must satisfy eligibility, scope, dependency, and protected-area rules.

## 13. Workflow lifecycle separation

| Event | What it means | What it does not mean |
|:---|:---|:---|
| Execution completed | Authorized work and validation finished | Human Governance accepted it |
| Review completed | Subject was evaluated | Subject was approved or merged |
| No findings | Reviewer found no actionable issue | Target state changed |
| Pull request merged | Repository integration occurred | Target evidence became accepted |
| Human Governance approval | Exact approval gate was closed | Next work was selected or executed |
| ProjectStatus updated | Target-owned state changed | Repository work was automatically performed |
| Continue instruction | Advancement intent was supplied | Any arbitrary next task is allowed |

## 14. Workflow handoff checklist

Before handing work from one workflow to another, confirm:

- the receiving workflow is the canonical owner of the next action;
- the subject identity is complete and current;
- the objective has not expanded;
- protected areas remain explicit;
- required evidence accompanies the handoff;
- the receiving workflow is not being asked to perform another workflow's responsibility;
- any state mutation has exact authority;
- safe-stop conditions have been evaluated.

## 15. Provider-neutral workflow behavior

AI-DOS workflows are provider-neutral.

A provider may realize workflow actions through:

- repository APIs;
- local command-line tools;
- hosted coding agents;
- review agents;
- document systems;
- future runtime or kernel implementations.

Tool capability does not create authority. A provider that can edit, merge, approve, deploy, or delete must still remain inside the exact workflow and Target authorization boundary.

## 16. Common workflow mistakes

### Running Task Planner for every task

Do not reselect an explicitly bounded task.

### Skipping Task Planner during continuation

Do not choose work from repository appearance when the task is unresolved.

### Treating review as approval

A review recommendation does not replace Human Governance.

### Treating merge as acceptance

Repository integration and Target state are separate.

### Updating state after every documentation PR

Documentation work does not require ProjectStatus mutation unless an exact state transition is separately authorized.

### Using validation beyond its scope

A successful Markdown link check does not prove architectural or governance correctness.

### Continuing after a blocker

A safe-stop condition must not be bypassed by model judgment.

## 17. Workflow reporting template

```text
Objective:

Workflow used:

Authorized scope:

Changed artifacts:

Validation performed:

Validation scope:

Evidence:

Protected-area confirmation:

Blockers:

State-update authority:

Completion condition:

Exactly one recommended next step:
```

## 18. Related public documentation

- [Reference hub](README.md)
- [Commands](Commands.md)
- [Specifications](Specifications.md)
- [Glossary](Glossary.md)
- [FAQ](FAQ.md)
- [Tutorial examples](../Tutorials/Examples.md)
- [Execution providers](../Tutorials/Providers.md)
- [Building Targets](../Tutorials/BuildingTargets.md)

## 19. Canonical workflow authorities

Public documentation should link to, not duplicate or replace, these normative owners:

- `docs/AI-DOS/Workflows/TaskPlanner.md`
- `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md`
- `docs/AI-DOS/Workflows/ProjectStateUpdater.md`
- `docs/AI-DOS/System/ExecutionSequence.md`
- `docs/AI-DOS/Checklists/AgentReviewChecklist.md`
- applicable command and architecture contracts

## 20. Workflow readiness checklist

A workflow route is ready when:

- the user intent is classified;
- the Target context is available when required;
- the task is either explicitly bounded or deterministically selectable;
- the owning workflow is identified;
- required authorities are readable;
- subject identity is stable;
- protected areas are explicit;
- validation expectations are known;
- evidence expectations are known;
- state-update authority is explicit or absent;
- no unresolved safe-stop condition remains.

When any required item is missing, stop at the owning workflow boundary instead of inventing the missing context.
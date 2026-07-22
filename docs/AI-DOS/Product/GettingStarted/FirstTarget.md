# First Target

A Target Project is the project whose work, state, resources, and evidence are governed while AI-DOS supplies reusable operating contracts.

AI-DOS is not the Target, and the Target is not part of AI-DOS product truth. They may live in the same repository, but they must remain under separate authority roots.

This guide shows how to establish a first Target Project without copying AI-DOS behavior into Target documents or leaking Target-specific state into reusable AI-DOS product contracts.

This page is explanatory. Normative behavior remains owned by the applicable AI-DOS contracts, the Target Project contract, and Human Governance decisions.

## Before you begin

Complete the repository installation described in [Installation](Installation.md) first.

You should already have:

- a repository root;
- `docs/AI-DOS/` containing the reusable AI-DOS contracts;
- root `AGENTS.md` or an equivalent repository entry surface;
- a compatible Execution Provider that can read repository files;
- a Human Governance authority capable of approving scope and lifecycle transitions.

Do not begin by asking an agent to infer the project structure from nearby files. The first Target must declare its own identity, resources, boundaries, and operational entry.

## The result you are building

A minimal Target Project should provide this route:

```text
Repository entry
    ↓
Target Project contract
    ↓
Target operational entry
    ↓
Resolved Target Context
    ↓
AI-DOS provider entry
    ↓
Applicable AI-DOS workflow
    ↓
Exactly one bounded execution
    ↓
Validation and attributable evidence
    ↓
Human Governance
```

The Target owns the project-specific parts of this route. AI-DOS owns the reusable provider and workflow behavior.

## Recommended repository layout

```text
AGENTS.md

docs/
├── AI-DOS/
│   ├── AGENTS.md
│   ├── AIFramework.md
│   ├── AIOrchestrator.md
│   ├── AgentSystemPrompt.md
│   ├── Workflows/
│   ├── System/
│   └── ...
└── Projects/
    └── MyTarget/
        ├── Mission/
        │   ├── AGENTS.md
        │   └── Mission.md
        ├── Planning/
        │   ├── ProjectStatus.md
        │   ├── DevelopmentPhases.md
        │   └── Roadmap.md
        └── Reports/
```

This layout is illustrative, not a fixed filename requirement.

`docs/AI-DOS/` owns reusable product contracts. `docs/Projects/MyTarget/` owns the Target Project's mission, planning, live operational state, protected areas, resources, and evidence.

The Target may use different filenames or subdirectories. What matters is that its contract declares the authoritative resources explicitly enough for an Execution Provider to resolve them without guessing.

## Step 1 — Name the Target and its authority root

Choose one stable Target identity and one Target truth root.

Example:

```text
Target Project: MyTarget
Target truth root: docs/Projects/MyTarget/
```

The identity should be specific enough to distinguish this Target from:

- AI-DOS itself;
- other projects in the same repository;
- external repositories;
- future Target Projects;
- implementation tools or providers.

Do not name a provider, model, branch, task, or temporary workstream as the Target identity.

## Step 2 — Define the Target Project contract

Create a Target-owned contract, commonly under:

```text
docs/Projects/MyTarget/Mission/AGENTS.md
```

The contract should declare at least:

- Target identity and truth root;
- mission authority;
- Target-owned resources and their locations;
- operational entry and current-state source;
- protected areas;
- execution authorization boundaries;
- validation and evidence expectations;
- state-update authority;
- safe-stop conditions;
- the boundary between Target truth and AI-DOS product truth.

The Target contract should describe Target truth only.

It may reference AI-DOS contracts such as provider entry, task planning, execution, review, or state-update workflows. It should not copy their algorithms, schemas, routing rules, or safe-stop mechanics into Target-owned documents.

### Contract design check

A reviewer should be able to answer all of these from the Target contract:

1. What project is being operated on?
2. Where does its truth live?
3. Which artifact owns its mission?
4. Which artifact owns current operational state?
5. Which resources may an agent inspect?
6. Which areas are protected?
7. Who may authorize execution or state mutation?
8. What validation and evidence are expected?
9. When must the provider stop?

A missing answer is a context gap, not permission for an agent to invent one.

## Step 3 — Declare Target-owned resources

Declare the resources needed to resolve and execute work.

Typical categories include:

| Resource | Purpose |
|:---|:---|
| Mission | Defines the Target's purpose and strategic constraints |
| Operational state | Identifies what is active now and what action is authorized |
| Development phases | Bounds current capability and maturity |
| Roadmap | Defines direction, dependencies, and evidence expectations |
| Reports or evidence | Preserves findings and completion evidence |
| Source resources | Identifies task-relevant implementation or documentation surfaces |
| Validation resources | Identifies checks, tests, review criteria, or evidence requirements |

Declare only resources the Target actually owns or is authorized to consume.

Do not assume that conventional filenames such as `roadmap.md`, `status.md`, or `src/` are authoritative merely because they exist.

## Step 4 — Establish one operational entry

The Target needs one authoritative operational entry that tells providers what is active now.

It should resolve one of three outcomes:

1. exactly one active bounded task;
2. exactly one authorized next action;
3. a blocker requiring safe-stop.

A common location is:

```text
docs/Projects/MyTarget/Planning/ProjectStatus.md
```

The operational entry should contain current Target-owned values, not reusable AI-DOS workflow behavior.

Useful fields include:

- current phase or capability boundary;
- active task or hold state;
- current execution authorization;
- current blocker, if any;
- protected future capabilities;
- validation and evidence requirements;
- exactly one authorized next action;
- state-update policy.

The operational entry should not become:

- a general backlog;
- a second roadmap;
- a detailed historical log;
- a copy of AI-DOS task-selection logic;
- a self-updating authority source.

## Step 5 — Separate mission, planning, and live state

Avoid making one document own everything.

A useful separation is:

```text
Mission
    owns why the Target exists

Development phases
    own capability and maturity boundaries

Roadmap
    owns direction, dependencies, and required evidence

ProjectStatus
    owns current operational values and exactly one next action
```

This separation reduces drift and prevents live operational state from silently redefining long-term mission or roadmap authority.

The exact document family is Target-owned. The ownership distinctions are more important than the filenames.

## Step 6 — Declare protected areas

Protected areas prevent a brief command from becoming broad permission.

Typical examples include:

- the root repository entry;
- the Target Project contract;
- mission documents;
- live operational state;
- roadmaps and phase definitions;
- historical or accepted evidence;
- security-sensitive configuration;
- external Target Projects;
- future capabilities not yet activated;
- AI-DOS product contracts.

For each protected area, state the permission condition required to change it.

Example:

```text
ProjectStatus may change only through exact Human Governance authority
or a uniquely authorized state transition.
```

A provider must safe-stop when requested work conflicts with a protected area.

## Step 7 — Declare execution boundaries

The Target contract should make clear that execution is bounded by:

- the authorized objective;
- the allowed artifact scope;
- forbidden artifacts or areas;
- dependencies;
- required validation;
- required evidence;
- completion conditions;
- state-update authority;
- stop conditions.

A useful task declaration contains:

```text
Objective
Allowed scope
Forbidden scope
Required validation
Required evidence
Completion condition
State-update authority
Stop conditions
```

The Target should not rely on the provider to derive these fields from intent alone when exact boundaries matter.

## Step 8 — Connect the repository entry

Root `AGENTS.md` should establish the discovery route.

A minimal reading order is:

```text
1. Target Project contract
2. AI-DOS provider entry contract
```

The Target contract resolves project-specific context. The AI-DOS provider entry consumes the resolved context and routes the Execution Provider through the applicable reusable workflow.

The root entry should not:

- duplicate the Target contract;
- copy AI-DOS workflows;
- select work;
- mutate state;
- infer provider internals;
- promote implementation files into architectural authority.

## Step 9 — Verify context resolution before mutation

Run a read-only onboarding check before authorizing repository changes.

Ask the Execution Provider to report:

- the Target identity;
- the Target truth root;
- the Target contract;
- the operational entry;
- the current state or active task;
- protected areas;
- declared validation resources;
- current execution authority;
- blockers;
- the exact safe-stop condition if no work is authorized.

The check passes only when the provider derives those answers from declared authority rather than repository convention or model judgment.

### Safe-stop test

Temporarily present an incomplete request such as:

```text
Continue with the next useful change.
```

When the Target state does not resolve exactly one authorized task or next action, the correct response is a blocker or safe-stop. The provider must not choose nearby work merely because it appears useful.

## Step 10 — Issue the first bounded command

Start with a small, reversible, low-risk task.

Example:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective:
Create the Target Project introduction.

Allowed scope:
docs/Projects/MyTarget/Product/Introduction.md only.

Forbidden scope:
Do not modify AI-DOS product contracts, Target planning, operational state,
mission authority, protected areas, or external Target Projects.

Required validation:
Confirm the new document is readable, all declared links resolve,
and exactly one file changed.

Required evidence:
Report the changed artifact, validation results, blockers,
protected-area confirmation, and state-update authority.

Completion condition:
The introduction exists and no unauthorized artifact changed.
```

The external agent performs the repository work. AI-DOS contracts organize its route, scope, validation, and reporting obligations.

The command does not automatically authorize:

- follow-up work;
- capability activation;
- ProjectStatus mutation;
- approval;
- certification;
- release;
- work on another Target.

## Step 11 — Review the execution evidence

Before approving the result, confirm that:

- only the authorized Target artifact changed;
- no Target truth was inserted into `docs/AI-DOS/`;
- no AI-DOS product truth was redefined inside the Target Project;
- validation claims match what was actually checked;
- the provider identified blockers and skipped checks honestly;
- protected areas remained unchanged;
- completion did not become approval;
- the provider did not activate follow-up work automatically.

Human Governance should make the acceptance decision using the evidence, not the agent's confidence alone.

## Step 12 — Decide whether state should change

A completed task does not automatically authorize a Target state mutation.

Treat these as separate lifecycle events:

```text
execution
    ≠ validation
    ≠ review
    ≠ Human Governance approval
    ≠ state update
    ≠ capability activation
```

Update live Target state only when the exact transition is authorized by the Target contract or explicitly approved by Human Governance.

Otherwise, record only a recommendation.

## First Target readiness checklist

The first Target is ready for bounded work when all of the following are true:

- [ ] the Target has one stable identity;
- [ ] the Target truth root is separate from `docs/AI-DOS/`;
- [ ] the Target contract is discoverable from the repository entry;
- [ ] mission authority is explicit;
- [ ] Target-owned resources are declared;
- [ ] one operational entry owns current state;
- [ ] the operational entry resolves one task, one next action, or a blocker;
- [ ] protected areas and permission conditions are explicit;
- [ ] validation resources or review criteria are declared;
- [ ] evidence expectations are explicit;
- [ ] state-update authority is explicit;
- [ ] a compatible Execution Provider can resolve context without guessing;
- [ ] missing context produces safe-stop;
- [ ] the first command is exactly bounded;
- [ ] Human Governance remains the final approval authority.

## Common first-Target mistakes

### Mixing Target truth into AI-DOS

Do not place the Target's mission, roadmap, status, evidence, or current task under `docs/AI-DOS/`.

### Copying AI-DOS algorithms into Target documents

Reference the owning AI-DOS workflow instead of maintaining a Target-specific copy that can drift.

### Treating repository structure as authority

A directory name, nearby file, package manifest, source tree, or recent commit is not authority unless the Target contract declares it.

### Using ProjectStatus as a backlog

Keep current operational values compact. Preserve roadmap direction and detailed history in their owning artifacts.

### Leaving protected areas implicit

An agent cannot reliably preserve a boundary that the Target never declared.

### Authorizing broad work with a short command

A short instruction is safe only when the Target contract and current state already resolve exact boundaries.

### Allowing completion to trigger continuation

One completed work unit does not authorize the next one.

### Treating a provider as governance

The provider may recommend, execute, validate, and report within authority. It does not replace Human Governance.

## The key boundary

The simplest useful AI-DOS deployment is:

```text
AI-DOS contracts inside the repository
        +
a separately organized Target Project
        +
an explicit Target contract and operational entry
        +
external agents receiving governed commands
        +
Human Governance reviewing evidence
```

That is sufficient to begin.

A standalone AI-DOS agent, hosted service, kernel, compiler, or autonomous runtime is not required for the current operating model.

## Continue

After the first Target passes the readiness checklist:

1. use [Quick Start](QuickStart.md) to run one bounded task;
2. read [Context Resolution](../ContextResolution.md) to understand how Target context is assembled;
3. read [Execution Model](../ExecutionModel.md) to understand the full lifecycle;
4. use [Concepts](../Concepts/README.md) for deeper authority and governance explanations.

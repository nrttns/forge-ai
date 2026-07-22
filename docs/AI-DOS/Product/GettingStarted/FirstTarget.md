# First Target

A Target Project is the project being organized and changed under AI-DOS contracts.

AI-DOS is not the Target, and the Target is not part of AI-DOS product truth. The two may live in the same repository while remaining under separate authority roots.

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
        ├── Planning/
        └── Reports/
```

`docs/AI-DOS/` owns reusable product contracts. `docs/Projects/MyTarget/` owns the Target Project's mission, plans, operational state, protected areas, resources, and evidence.

## 1. Define the Target Project contract

Create a Target-owned contract, commonly under:

```text
docs/Projects/MyTarget/Mission/AGENTS.md
```

The contract should declare:

- Target identity and truth root;
- mission authority;
- Target resources and their locations;
- operational entry and current-state source;
- protected areas;
- execution authorization boundaries;
- validation and evidence expectations;
- state-update authority;
- safe-stop conditions.

The Target contract should describe Target truth only. It should reference AI-DOS product workflows rather than copying their algorithms.

## 2. Create an operational state source

The Target needs one authoritative operational entry that tells providers what is active now. It should resolve either:

- exactly one active bounded task;
- exactly one authorized next action; or
- a blocker requiring safe-stop.

It should not become a general backlog or duplicate the Target roadmap.

## 3. Declare protected areas

Protected areas prevent a brief agent command from becoming broad permission. Typical examples include:

- mission documents;
- live operational state;
- roadmaps and phase definitions;
- historical evidence;
- security-sensitive configuration;
- external Target Projects;
- future capabilities not yet activated.

An execution provider must stop rather than infer permission to modify them.

## 4. Connect the repository entry

Root `AGENTS.md` should establish the reading order:

```text
1. Target Project contract
2. AI-DOS provider entry contract
```

The Target contract resolves project-specific context. The AI-DOS provider entry consumes that resolved context and routes the external agent through the applicable reusable workflow.

## 5. Issue the first bounded command

Example:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective: create the Target Project introduction.
Allowed scope: docs/Projects/MyTarget/Product/Introduction.md only.
Required validation: confirm all declared links resolve and no AI-DOS product contract was modified.
Completion: report the changed file, validation result, protected-area confirmation, blockers, and one next step.
```

The external agent performs the repository work. AI-DOS contracts organize its route, scope, validation, and reporting obligations.

## 6. Review the evidence

Before approving the result, confirm that:

- only the authorized Target artifact changed;
- no Target truth was inserted into `docs/AI-DOS/`;
- no AI-DOS product truth was redefined inside the Target Project;
- validation claims match what was actually checked;
- the provider did not activate follow-up work automatically.

## The key boundary

The simplest useful AI-DOS deployment is:

```text
AI-DOS contracts inside the repository
        +
a separately organized Target Project
        +
external agents receiving governed commands
```

That is sufficient to begin. A standalone AI-DOS agent, hosted service, kernel, compiler, or autonomous runtime is not required for the current operating model.
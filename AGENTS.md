<!--
Identifier: FORGE-AI.REPOSITORY-ENTRY
Title: AGENTS.md — Forge AI Repository Entry and Target/Provider Handoff File
Version: 1.1.0
Status: Active
Owner: Forge AI Target Project Governance
Updated: 2026-07-15
-->

# AGENTS.md — Forge AI Repository Entry

## 1. Repository Identity

Repository:
Forge AI

Repository Role:
AI-DOS Development and Autonomy Enablement Target Project

## 2. Repository Purpose

This repository develops, validates, self-applies, and hardens AI-DOS through bounded Forge AI Target Project work.

## 3. Repository Loader Declarations

Canonical Target Project Contract:
`docs/Projects/ForgeAI/Mission/AGENTS.md`

AI-DOS Provider Entry:
`docs/AI/AIFramework.md`

AI-DOS Tool-Facing Behavior Contract:
`docs/AI/AgentSystemPrompt.md`

The canonical contract owns Forge AI Target Project mission alignment, execution rules, protected areas, evidence requirements, autonomy safety, Target resources, and AI-DOS invocation responsibilities.

The AI-DOS Provider Entry owns the provider Operational Core entry for this self-hosting repository composition.

The AI-DOS Tool-Facing Behavior Contract is mandatory provider-side behavior context for tool-facing AI-DOS operation.

## 4. Entry Rule

All AI agents and automation operating in this repository must read and follow the canonical Forge AI Target Project Contract before classifying, planning, editing, validating, reviewing, or reporting work.

The repository-root loader has two independent responsibilities:

1. Resolve the Target Project Contract and Target operational context.
2. Hand the resolved Target context to the repository-declared AI-DOS Provider Entry.

The Target Project remains unaware of AI-DOS internal paths. The root repository loader may know both the Target Project Contract and the execution provider used by this self-hosting repository without making the Target Project depend on AI-DOS.

## 5. Loader Model

The root loader flow is:

```text
Repository Entry
    ↓
Target Project Contract Resolution
    ↓
Target Operational Entry Resolution
    ↓
Resolved Target Context
    ↓
Repository Provider Handoff
    ↓
AI-DOS Provider Entry
    ↓
AI-DOS Operational Core
```

The root loader must not perform:

- Target work selection;
- capability ranking;
- task generation;
- execution;
- validation;
- state updates.

The root loader only resolves and hands off.

## Target-to-Provider Handoff

After the Target Project Contract has resolved the following Target context, the root loader must hand the resulting Target context to `docs/AI/AIFramework.md` for provider-side operation:

- Target identity;
- Target Operational Entry;
- ProjectStatus;
- current active task or authorized next action;
- DevelopmentPhases capability boundary;
- Roadmap capability direction;
- protected areas;
- Target constraints;
- validation expectations.

The Target Project Contract must not perform this provider handoff itself.

For Forge AI self-hosting execution, the required provider-side route after Target context resolution is:

```text
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
docs/AI/Workflows/TaskPlanner.md
    ↓
docs/AI/Workflows/TaskGenerationWorkflow.md when required
    ↓
applicable Command
    ↓
ExecutionSequence
```

This route applies when repository work must be derived from Target state.

Explicitly bounded Human Governance tasks may use the appropriate provider workflow and command route without generating a different work unit.

When the invocation requests Target Repository progress but does not provide a sufficiently bounded executable task:

1. Resolve the Target Project Contract.
2. Resolve Target operational context.
3. Do not begin local repository work selection.
4. Hand the resolved Target context to the declared AI-DOS Provider Entry.
5. Require provider-side State-Derived Execution behavior.
6. Require TaskPlanner before repository-derived work selection.
7. Continue only after a capability-grounded selected work unit exists.
8. If the provider returns:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

stop without repository editing, commit, or PR.

Agents are prohibited from falling directly from:

```text
Roadmap
```

or:

```text
Task-specific authority
```

into:

```text
LOCAL REPOSITORY JUDGMENT
```

Agents must not:

- select work directly after reading Roadmap;
- interpret unresolved `Task-specific authority` themselves;
- inspect recent commits to invent the next task;
- continue the nearest implementation;
- select an easy or well-tested repository change;
- bypass the declared provider handoff.

If the AI-DOS Provider Entry or required provider-side behavior contract is missing or inaccessible, stop and report:

```text
PROVIDER HANDOFF BLOCKED
```

## 6. Authority Preservation

Preserve these boundaries:

- root `AGENTS.md` owns repository discovery and composition-level handoff;
- Target Project `AGENTS.md` owns Target Project contract truth;
- ProjectStatus owns live Target operational state;
- DevelopmentPhases owns capability boundaries;
- Roadmap owns capability advancement direction;
- AIFramework owns provider Operational Core entry;
- AIOrchestrator owns provider routing;
- AgentSystemPrompt owns tool-facing provider behavior;
- TaskPlanner owns repository-derived candidate evaluation and selection;
- TaskGenerationWorkflow owns executable task generation;
- Human Governance remains final.

AI-DOS ownership must not transfer into Target Project documents.

## 7. File Boundary

`docs/AI/`
: contains AI-DOS product truth.

`docs/Projects/ForgeAI/`
: contains Forge AI Target Project truth.

## 8. Non-Goals

This repository entry file is not:

- the canonical Forge AI Target Project Contract;
- an AI-DOS external invocation contract;
- an AI-DOS Provider entry;
- an AI-DOS bootloader;
- an AI-DOS internal navigation file;
- a System Layer procedure;
- a duplicate Mission document;
- a duplicate planning document;
- a new provider document;
- a new adapter;
- a new workflow;
- a new command;
- a standard, meta model, RFC, runtime, engine, agent, governance model, or planning layer.

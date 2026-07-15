<!--
Identifier: AI-DOS.PROVIDER-ENTRY
Title: AGENTS.md — AI-DOS Provider Entry Contract
Version: 1.0.0
Status: Active
Owner: AI-DOS Governance
-->

# AGENTS.md — AI-DOS Provider Entry Contract

## 1. Role

Accept resolved Target Context and enter the AI-DOS Operational Core.

This provider entry contract is Target-independent. It consumes resolved Target Context supplied by the invoking Target contract and routes execution through AI-DOS provider documents.

## 2. Required Provider Route

```text
Resolved Target Context
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/AgentSystemPrompt.md
    ↓
Task-specific provider route
```

## 3. State-Derived Execution

When the invocation requests Target progress but does not provide a sufficiently bounded executable task, route through:

```text
docs/AI/Workflows/TaskPlanner.md
    ↓
docs/AI/Workflows/TaskGenerationWorkflow.md when required
    ↓
Applicable Command
    ↓
docs/AI/System/ExecutionSequence.md
```

TaskPlanner must run before repository-derived work selection or editing.

If TaskPlanner returns:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

stop before editing, commit, or PR.

## 4. Explicitly Bounded Tasks

When Human Governance supplies a sufficiently bounded task, route it through the applicable provider workflow and command without replacing or broadening the task.

## 5. Project State Update

After execution, validation, and evidence, consume `docs/AI/Workflows/ProjectStateUpdater.md` only when the exact Target state update is authorized.

Otherwise, produce only a recommended state update.

## 6. Provider Boundaries

This file does not:

- own Target Project truth;
- define Target mission;
- define Target planning;
- define Target operational state;
- discover Target-specific paths;
- modify Target state automatically;
- replace AIFramework;
- replace AIOrchestrator;
- replace AgentSystemPrompt;
- perform work selection itself.

## 7. Minimality

This file is a provider entry contract, not:

- an architecture document;
- an agent architecture family document;
- a workflow specification;
- a governance model;
- a duplicate AIFramework;
- a duplicate AIOrchestrator.

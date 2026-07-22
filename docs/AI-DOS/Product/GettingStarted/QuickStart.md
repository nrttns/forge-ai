# Quick Start

This quick start uses AI-DOS as a repository-embedded contract system, not as an independent AI agent.

## Prerequisites

Your repository should contain:

```text
AGENTS.md
docs/AI-DOS/AGENTS.md
docs/Projects/<TargetName>/...
```

The root entry must point to the Target Project contract first and the AI-DOS provider entry second.

## 1. Open the Target repository with an execution provider

Use an external AI agent that can read and modify the repository. The agent is the execution provider. AI-DOS supplies the contracts that organize and constrain its work.

## 2. Give one governed instruction

For an already bounded task, use a command such as:

```text
HUMAN GOVERNANCE

Execute exactly one bounded work unit.

Objective: update the public introduction page.
Allowed scope: docs/Projects/MyTarget/Product/Introduction.md only.
Validation: verify links and terminology against the governing contracts.
Stop if the requested work conflicts with a protected area.
```

For state-derived continuation, use the Target Project's supported governance intent, for example:

```text
HUMAN GOVERNANCE

Continue.
```

The provider must then follow the repository entry, resolve the Target-owned operational state, and route through the applicable AI-DOS contracts. It must not invent work merely because the request is brief.

## 3. Let the provider resolve the route

The expected control flow is:

```text
Human instruction
    ↓
Repository entry contract
    ↓
Target Project authority and current state
    ↓
AI-DOS workflow, command, and execution rules
    ↓
External provider performs bounded repository work
```

AI-DOS does not receive the instruction as a separate agent process. Its Markdown contracts are consumed by the provider operating in the Target repository.

## 4. Review the completion report

A compliant completion report should identify:

- the resolved objective;
- the authority and Target resources read;
- the exact changed artifacts;
- validation performed and its limits;
- protected-area confirmation;
- blockers or unresolved risks;
- state-update authority, when applicable;
- exactly one recommended next step.

The provider's report is evidence for Human Governance. It is not automatic approval.

## 5. Approve or continue explicitly

Human Governance decides whether to accept the completed work, request correction, or authorize a next action. AI-DOS contracts route that decision; they do not replace it.

## What just happened

You used AI-DOS without launching a separate AI-DOS agent:

1. AI-DOS contracts were present under `docs/AI-DOS/`.
2. The Target Project declared its own authority and operational context.
3. Human Governance gave an instruction.
4. An external agent consumed the contracts and executed the bounded work.
5. Validation and evidence returned for review.
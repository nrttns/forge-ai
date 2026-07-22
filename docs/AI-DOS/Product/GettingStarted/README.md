# Getting Started

AI-DOS is a Markdown-first operating and governance layer for AI-assisted project work.

It is not an independent AI agent, language model, or autonomous replacement for an execution provider. AI-DOS supplies the reusable contracts that organize a Target Project and constrain how external agents work on it.

A practical AI-DOS setup places the AI-DOS product contracts under the Target repository, normally at:

```text
docs/AI-DOS/
```

The Target Project keeps its own mission, planning, operational state, protected areas, and evidence under a separate Target-owned truth root. For example:

```text
docs/AI-DOS/                 reusable AI-DOS product contracts
docs/Projects/MyTarget/      Target Project truth
AGENTS.md                     repository entry and contract discovery
```

An AI execution provider such as Codex, Claude Code, or another compatible agent enters through the repository contract, reads the Target-owned context, follows the applicable AI-DOS route, and performs only the bounded work that has been authorized.

## The basic model

```text
Human Governance
        ↓
Target Project contract and operational state
        ↓
AI-DOS contracts organize and bound the work
        ↓
External AI execution provider performs the task
        ↓
Validation and evidence return to Human Governance
```

AI-DOS therefore does not need to be a separate agent service to be useful. In its current Markdown-first form, placing its contracts in a Target repository, organizing the Target Project around them, and giving compatible agents clear governed commands is sufficient to operate the model.

## Start here

1. [Installation](Installation.md) — place AI-DOS in a Target repository and establish the repository boundary.
2. [Quick Start](QuickStart.md) — issue a bounded command through a compatible execution provider.
3. [First Target](FirstTarget.md) — organize the first Target Project without mixing product and Target truth.

## Documentation status

These pages are publication-oriented, non-normative guidance. Normative behavior remains owned by the applicable contracts under `docs/AI-DOS/` and by each Target Project's declared authority.
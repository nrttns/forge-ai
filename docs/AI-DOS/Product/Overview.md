# AI-DOS Overview

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

It is designed to help humans and AI agents work inside explicit authority, context, scope, validation, and evidence boundaries. Instead of allowing an agent to infer its task from nearby files, repository conventions, or prior conversation memory, AI-DOS resolves the governing Target Project context and routes work through declared contracts.

## The Problem AI-DOS Addresses

AI-assisted development often fails in predictable ways:

- the agent starts from incomplete or stale context;
- product truth and project state become mixed;
- implementation technology is mistaken for architecture;
- permissions are inferred instead of declared;
- work expands beyond the requested scope;
- validation is reported more broadly than the evidence supports;
- completion, review, approval, certification, and release are treated as the same event.

AI-DOS addresses these problems by making authority and execution boundaries explicit before mutation begins.

## Core Product Idea

AI-DOS separates reusable product behavior from the truth of the project being operated on.

```text
Human or authorized invocation
    ↓
Target Project resolution
    ↓
Resolved Target Context
    ↓
AI-DOS Operational Core
    ↓
Applicable commands, workflows, templates, engines, and provider
    ↓
Bounded execution, validation, and evidence
```

The Target Project owns its mission, planning, live state, protected areas, resources, and mutation permissions. AI-DOS consumes that context without absorbing it into reusable product truth.

## MD-First

The governing Markdown artifacts are the canonical system contracts. They are not secondary explanations around a programming-language implementation.

Executable code may provide bootstrap, adapter, distribution, validation, or compatibility functions, but it remains subordinate to the governing contracts and to the exact work unit that authorizes it.

MD-first does not currently mean that every Markdown contract is directly executable. The MD-to-executable kernel direction is a future architectural ambition unless and until separately implemented, validated, and accepted.

## Human Governance

Human Governance remains the final authority. AI-DOS may resolve context, generate recommendations, coordinate procedures, execute authorized work, validate outcomes, and report evidence. It must not convert technical capability or model confidence into permission.

## Product and Target Separation

AI-DOS is the reusable product. Forge AI is the Target Project used to develop, validate, and self-apply it.

This separation prevents Forge AI planning, operational state, evidence, or repository-specific decisions from becoming universal AI-DOS behavior.

## Current Product Boundary

The current repository includes a bounded local CLI and supporting TypeScript surfaces. These demonstrate distribution and bootstrap capabilities; they are not the AI-DOS engine or kernel and do not determine the future implementation language.

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, and the applicable architecture, System, workflow, command, and governance contracts.

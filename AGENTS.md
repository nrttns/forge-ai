<!--
Identifier: FORGE-AI.REPOSITORY-ENTRY
Title: AGENTS.md — Forge AI Repository Entry and Target Contract Discovery File
Version: 1.2.0
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

The root repository entry resolves only the Forge AI Target Project Contract.

It does not resolve, invoke, declare, or route an AI-DOS Provider.

Any AI-DOS Provider invocation must be supplied independently by the external caller or execution host.

The Target Project remains independent of AI-DOS internal paths and implementation.

## 5. Loader Model

The only loader flow permitted in this file is:

```text
Repository Entry
    ↓
Canonical Target Project Contract
    ↓
Target Project-owned resource resolution
```

Do not add any provider-side node after this flow.

## 6. File Boundary

`docs/AI/`
: contains AI-DOS product truth.

`docs/Projects/ForgeAI/`
: contains Forge AI Target Project truth.

## 7. Non-Goals

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

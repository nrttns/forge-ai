# AGENTS.md — Repository Bootloader

> **Forge AI — Repository Entry Point for AI Assistants**

This document is the repository bootloader. It tells an AI assistant how to safely
begin work inside the Forge AI repository. It is not the Agent Architecture, the
Runtime Architecture, or the Engine Architecture. It is a lightweight entry guide.

Read this file in full before performing any task. Then follow the Mandatory Boot
Sequence defined in Section 4.

---

## 1. Repository Mission

Forge AI is a framework for building autonomous AI agent systems. It defines
structured architectures, governing specifications, and development phases that
enable AI agents to operate within a controlled, auditable, and incrementally
evolving codebase. The framework prioritises architectural integrity, phase-gated
development, and human governance over autonomous agent decision-making.

The repository contains constitutive documents (the Constitution, meta models,
standards, and RFCs) that form the immutable governance layer. Development
progresses through clearly defined phases — each with objectives, frozen areas,
and exit criteria — tracked in ProjectStatus and DevelopmentPhases. No work may
begin without first identifying the current phase, the current stage within that
phase, and any frozen areas that are off-limits to modification.

Forge AI is designed so that every participant — human or AI — operates within the
same authority chain, reads from the same canonical sources, and respects the same
safety boundaries. This bootloader ensures that every AI assistant enters the
repository with the correct context, follows the correct sequence, and never
exceeds its authority.

---

## 2. AI Role

The AI is an **execution participant** within the Forge AI repository. It performs
tasks, produces artifacts, and provides recommendations as directed.

The AI is **never the architectural authority**. It does not define, modify, or
override governing specifications. It does not skip phases, unfreeze areas, or
change the authority chain. Architectural decisions and governance changes are
exclusively the domain of Human Governance.

When the AI encounters ambiguity, conflict, or a situation outside its defined
authority, it must escalate (see Section 10). It must never silently resolve a
governance conflict in its own favour.

---

## 3. Authority Chain

The condensed authority chain is:

```
Constitution  →  Governing Specifications (M.0, M.1, STD-003, STD-010)
                      →  RFCs (Runtime RFC, Engine Platform RFC)
                            →  Development Phases & ProjectStatus
                                  →  Task Execution (Human-Directed)
```

Human Governance sits above all layers and may override any decision at any time.
The Constitution is the supreme governing document. All specifications, RFCs, and
operational documents derive their authority from it.

Do not reproduce the Constitution here. Read it from its canonical location when
required (see Section 7).

---

## 4. Mandatory Boot Sequence

Every AI assistant **must** complete this sequence before executing any task:

```
1.  Read AGENTS.md                          (this file)
        ↓
2.  Read ProjectStatus.md
        ↓
3.  Read ForgeAI-DevelopmentPhases.md
        ↓
4.  Identify the current Phase
        ↓
5.  Identify the current Stage within that Phase
        ↓
6.  Identify all Frozen Areas for the current Phase/Stage
        ↓
7.  Read only the governing specifications required by the task
        ↓
8.  Execute the task
```

**Rules for this sequence:**

- Steps 1–6 are mandatory for every task, no exceptions.
- Step 7 is scoped: read only the specifications directly relevant to the task.
  Do not read the entire governance corpus for a trivial change.
- Step 8 may begin only after all prior steps are complete.
- If any step fails (file missing, phase unclear, frozen area ambiguous), stop
  and escalate per Section 10.

---

## 5. ProjectStatus Policy

`ProjectStatus.md` is the **operational source of truth** for the repository. It
defines what phase the project is in, what stage within that phase is active,
what work has been completed, and what areas are frozen.

**Rules:**

- Never update `ProjectStatus.md` automatically.
- Never modify `ProjectStatus.md` as part of a task unless explicitly instructed
  by Human Governance.
- When work is completed that affects project status, **recommend** an update
  in the completion report. Include the specific fields that should change and
  the proposed new values.
- Only Human Governance may approve and apply status changes.

---

## 6. Roadmap Policy

The development roadmap is defined in `ForgeAI-DevelopmentPhases.md`. It
establishes a sequence of phases, each with objectives, deliverables, and
freeze boundaries.

**Rules:**

- **Never skip phases.** Each phase must complete before the next begins.
- **Never start future work.** Do not implement features, create artifacts, or
  write specifications that belong to a later phase unless explicitly directed
  by Human Governance.
- **Respect frozen areas.** Frozen areas are locked for the duration specified
  in ProjectStatus. No modifications — not even refactoring, renaming, or
  reformatting — are permitted within frozen areas unless explicitly authorised.

---

## 7. Canonical Sources

The following documents are the canonical sources for the Forge AI repository.
They define the governance framework, data models, terminology, and platform
contracts.

| Document | Purpose |
|----------|---------|
| **Constitution** (A.1) | Supreme governing document. Defines principles, authority, and decision rights. |
| **M.0 Framework Meta Model** | Defines the structural model of the framework itself. |
| **M.1 Artifact Meta Model** | Defines the model for all artifacts produced within the framework. |
| **STD-003 Terminology** | Canonical glossary. All terms used in governance documents are defined here. |
| **STD-010 Metadata** | Metadata schema and requirements for all repository artifacts. |
| **A.3 Runtime RFC** | Runtime architecture specification and requirements. |
| **A.4 Engine Platform RFC** | Engine platform specification and requirements. |

**Rules:**

- These documents are authoritative. Do not redefine, paraphrase, or contradict
  them in task outputs.
- When a task requires knowledge from these documents, read them from their
  canonical locations.
- If a conflict is detected between a canonical source and a task instruction,
  escalate per Section 10.

---

## 8. File Safety Rules

These rules protect repository integrity. Violating them risks destabilising the
codebase and breaking phase-gated development.

**Rules:**

1. **Modify only files required by the task.** Do not touch unrelated files,
   even if they appear to need improvement.
2. **Avoid unrelated refactoring.** Do not restructure, rename, or reformat
   files outside the task scope.
3. **Never move legacy files.** Legacy file locations are frozen unless
   ProjectStatus explicitly indicates otherwise.
4. **Never move RC2 files.** RC2 artifacts are locked in place.
5. **Never change frozen areas.** Frozen areas are defined in ProjectStatus
   and are inviolable without explicit Human Governance authorisation.
6. **Never create new governance documents.** The AI does not draft new
   constitutions, standards, meta models, or RFCs. It may only recommend them.

---

## 9. Completion Reports

Every task **must** end with a completion report containing the following
sections:

| Section | Description |
|---------|-------------|
| **Summary** | What was done, in one to three sentences. |
| **Files Modified** | List of every file changed, created, or deleted, with a brief note on the change. |
| **Validation** | How the output was verified (tests passed, manual review, spec compliance check, etc.). |
| **Risks** | Any risks introduced by the change, including potential regressions or ambiguities. |
| **Recommendations** | Suggested follow-up actions, including recommended ProjectStatus updates. |
| **Suggested Next Task** | A concrete next task that logically follows from this work, scoped to the current phase and stage. |

The completion report is not optional. A task is not complete until the report
is delivered.

---

## 10. Escalation

When a conflict, ambiguity, or out-of-scope situation is encountered:

```
1.  Stop   —  Cease the current operation immediately.
        ↓
2.  Report  —  Describe the conflict clearly: what was expected, what was found,
                and which canonical sources are in tension.
        ↓
3.  Recommend  —  Propose one or more resolutions, referencing the authority
                  chain and the governing specifications.
        ↓
4.  Wait  —  Do not proceed. Await a decision from Human Governance.
```

**Escalation triggers include but are not limited to:**

- A task instruction conflicts with a canonical source.
- The current phase or stage cannot be determined from ProjectStatus.
- A required governing document is missing or inaccessible.
- A modification would affect a frozen area.
- The scope of the task would require crossing a phase boundary.

---

## 11. Pointer to AGENTS v1

The complete Forge AI Agent Architecture is documented in:

```
docs/AI/Architecture/Agents/AGENTS-v1-draft.md
```

This repository bootloader intentionally remains concise and shall not duplicate
the Agent Architecture. Topics including Agent Context, Agent Memory, Agent
Knowledge, Agent Planning, Agent Decision, Agent Lifecycle, Reasoning, Prompt
Engineering, Tool Selection, Swarm, Multi-Agent coordination, Operational Layer,
Platform Adapters, Certification Workflows, and Validation Framework are all
documented in AGENTS-v1 — not here.

Refer to AGENTS-v1 for any architectural detail beyond what this bootloader covers.

# AI-DOS Community Roadmap

The AI-DOS Community Roadmap explains the product direction that contributors, adopters, Target Project owners, reviewers, and Execution Provider implementers can use for orientation.

This page is publication-oriented. It does not replace AI-DOS normative contracts, create an executable work queue, activate capabilities, or copy the live planning state of any Target Project.

---

## 1. Purpose

Use this roadmap to understand:

- the long-term direction of AI-DOS;
- the product areas expected to mature over time;
- the distinction between current product foundations and future ambitions;
- how community contributions can support that direction;
- where exact authority and current operational state must be resolved.

Do not use this page to determine:

- the next executable repository task;
- whether a capability is active or accepted;
- the current state of Forge AI or another Target Project;
- whether a pull request is authorized, approved, merged, or accepted;
- the exact semantics of an AI-DOS contract, workflow, command, schema, or runtime component.

Those questions belong to the applicable Human Governance instruction, Target-owned authorities, and canonical AI-DOS contracts.

---

## 2. Roadmap Authority Boundary

AI-DOS product direction and Target Project planning are related but separate.

| Concern | Owner |
|:---|:---|
| Reusable AI-DOS concepts, contracts, architecture, workflows, templates, and provider behavior | AI-DOS product authorities under `docs/AI-DOS/` |
| A Target Project's mission, phases, priorities, current state, active work unit, protected areas, and evidence | That Target Project's own authority root |
| Final approval, continuation, exception, and lifecycle decisions | Human Governance |
| Public orientation and community-facing explanation | Product documentation under `docs/AI-DOS/Product/` |

This page therefore describes product themes rather than dated commitments, sprint plans, release promises, or Target-specific work items.

---

## 3. Current Foundation

The present AI-DOS foundation is defined by its governing contracts rather than by this page. At a high level, the established product direction includes:

- **MD-first authority** — governing Markdown artifacts define product behavior and remain above replaceable implementation technology;
- **provider neutrality** — AI-DOS must remain consumable through different AI hosts, coding agents, automation runners, CLIs, and future runtimes;
- **Target separation** — every Target Project owns its own mission, planning, operational state, permissions, protected areas, and evidence;
- **Human Governance primacy** — technical capability never replaces human authority;
- **bounded execution** — work is resolved into explicit objectives, scope, constraints, validation, and completion conditions;
- **lifecycle separation** — selection, activation, execution, validation, review, approval, merge, acceptance, and continuation remain distinct;
- **evidence-backed progress** — claims must be supported by evidence whose scope and provenance are visible;
- **safe-stop behavior** — missing, contradictory, or unauthorized context stops work rather than inviting invention.

These principles constrain every roadmap theme below.

---

## 4. Product Direction at a Glance

```text
Clear product contracts
        ↓
Deterministic Target context resolution
        ↓
Portable provider execution
        ↓
Reliable validation and evidence
        ↓
Governed review and lifecycle transitions
        ↓
Distribution and adoption
        ↓
Increasingly executable MD-first behavior
```

The sequence is directional, not a declaration that each stage is currently complete or active.

---

## 5. Roadmap Themes

### 5.1 Contract Clarity and Single Source of Truth

AI-DOS should make it increasingly easy to identify:

- which artifact owns a concept;
- which document is normative;
- which pages are explanatory;
- which representations are canonical and which are derived;
- how conflicts are resolved;
- how version and lifecycle status are interpreted.

Expected maturation areas include:

- clearer family indexes and subsystem navigation;
- stronger metadata consistency;
- reduced terminology collisions;
- explicit canonical-schema declarations;
- automated detection of stale derived representations;
- easier tracing from public documentation to normative owners.

Success means a reader or provider can resolve authority without guessing from filenames, directory proximity, implementation language, or recent repository activity.

### 5.2 Target Context and Repository Resolution

AI-DOS is intended to operate across different Target Projects without embedding their project truth inside the product layer.

The product direction includes stronger support for:

- deterministic Target identity resolution;
- explicit Target resources and authority declarations;
- source-scope and protected-area resolution;
- validation and evidence declarations;
- permission and execution-authority boundaries;
- safe stops for missing or contradictory Target context;
- portable Resolved Target Context supplied to Execution Providers.

The goal is not to make AI-DOS own Target planning. The goal is to let any compliant Target expose enough bounded context for AI-DOS to operate safely.

### 5.3 Task Planning and Bounded Work

AI-DOS should continue reducing the gap between natural-language Human Governance intent and a deterministic bounded work unit.

This direction includes:

- clearer separation of explicitly bounded tasks from state-derived continuation;
- deterministic eligibility and priority handling;
- constrained candidate generation when no predeclared candidate exists;
- minimal scopes and explicit completion conditions;
- exactly one selected and active work unit where the Target policy allows it;
- safe-stop records when selection cannot be resolved uniquely;
- resistance to task expansion by implication.

The intended user experience is concise human instruction with rigorous provider-side resolution, not increasingly long manual command text.

### 5.4 Execution Provider Portability

AI-DOS should remain usable across replaceable Execution Providers.

Future provider work may improve:

- provider discovery and startup guidance;
- adapters for different hosts and tooling environments;
- normalized provider reports;
- capability and tool availability declarations;
- consistent review-subject identity handling;
- provider-neutral command and workflow routing;
- graceful handling of provider limitations;
- local, hosted, conversational, and automated consumption models.

A provider may implement AI-DOS behavior, but provider-specific user interfaces, branch models, command vocabularies, or tool limitations must not silently become universal product semantics.

### 5.5 Validation, Evidence, and Review

AI-DOS aims to make validation claims precise and review outcomes reproducible.

Expected maturity areas include:

- validation declarations tied to explicit surfaces;
- evidence provenance and integrity;
- machine-checkable evidence shapes where appropriate;
- reviewed-subject locators and revision identities;
- deterministic re-resolution before review or state mutation;
- reusable audit and review templates;
- scenario-based framework validation;
- clearer separation of technical checks from architecture, governance, and Target acceptance claims.

Success means every report can answer what was validated, against which subject, by which method, with what result, and what remains unproven.

### 5.6 Lifecycle and State Transition Discipline

The product direction preserves clear gates between lifecycle stages.

Important maturation areas include:

- reliable active-work-unit identity;
- review-to-correction handoffs;
- approval-eligible outcome records;
- safe application of authorized state transitions;
- no implicit continuation after acceptance;
- versioning, compatibility, deprecation, and support discipline;
- clearer release-readiness evidence;
- Target-neutral lifecycle contracts consumable by many projects.

No roadmap theme changes the rule that Human Governance remains the final authority for approval and continuation.

### 5.7 Distribution and Adoption

AI-DOS should become easier to obtain, understand, integrate, and self-apply without turning one implementation into the product definition.

Potential direction includes:

- stable public documentation;
- local distribution surfaces;
- provider adapters;
- installation and setup guidance;
- example Target contracts;
- reusable templates and validation scenarios;
- packaging and compatibility checks;
- public contribution and support processes;
- adoption evidence for new Target Projects.

Distribution mechanisms are replaceable surfaces. Their existence does not make their implementation language the AI-DOS architecture.

### 5.8 MD-to-Executable Direction

AI-DOS is MD-first, but MD-first does not currently mean that every Markdown contract is directly executable.

The long-term direction may include:

- machine-readable declarations embedded in or derived from Markdown contracts;
- deterministic parsers and validators;
- contract compilation or transformation;
- executable workflow and policy representations;
- runtime consumption of governed declarations;
- a future kernel capable of enforcing more AI-DOS semantics directly;
- stronger equivalence checks between normative Markdown and implementation behavior.

This is a future architectural direction, not a claim that a complete MD compiler, engine, or kernel already exists.

### 5.9 Security and Integrity

As adoption grows, the product should make security boundaries more visible.

Relevant areas include:

- Target boundary integrity;
- provider credential handling;
- least-privilege tool use;
- protected-area enforcement;
- evidence tampering resistance;
- untrusted input handling;
- dependency and distribution integrity;
- auditability of state-changing actions;
- safe behavior when tools or identities cannot be verified.

Security guidance must distinguish repository security policy from reusable AI-DOS product security concerns.

### 5.10 Community and Ecosystem

A healthy AI-DOS ecosystem should support contributions without weakening governance.

Community direction includes:

- accessible conceptual and tutorial documentation;
- contribution classification and bounded PR guidance;
- reusable examples that remain clearly non-normative;
- provider and Target implementation guides;
- issue and proposal structures;
- independent audits and challenge scenarios;
- transparent deferral and limitation records;
- community feedback that informs, but does not bypass, Human Governance.

See [Contributing](Contributing.md) for the public contribution model.

---

## 6. Maturity Model for Roadmap Themes

Public roadmap themes can be discussed using the following non-operational maturity vocabulary:

| Maturity | Meaning |
|:---|:---|
| **Exploratory** | The problem or direction is recognized, but no normative solution is established. |
| **Specified** | A normative contract or RFC defines the intended behavior. |
| **Validated** | The specification has evidence from scenarios, review, or bounded implementation. |
| **Adoptable** | External Target Projects or providers can consume the capability with documented guidance. |
| **Hardened** | Repeated use, audits, compatibility controls, and evidence support dependable operation. |

These labels are explanatory. They do not override formal statuses such as Draft, Active, Accepted, Pending, Blocked, or any Target-owned capability state.

---

## 7. What Is Not a Roadmap Commitment

The following do not establish an AI-DOS commitment by themselves:

- a mention in this page;
- an implementation experiment;
- a repository directory or placeholder file;
- a draft RFC;
- a pull request;
- a merged change;
- a successful test;
- a provider's technical capability;
- a Target Project's future phase;
- an external audit recommendation;
- model inference about what should be built next.

A capability becomes authoritative only through its applicable normative and governance lifecycle.

---

## 8. Relationship to Target Project Roadmaps

Each Target Project may maintain its own roadmap and development phases.

A Target roadmap may decide:

- which AI-DOS capability the Target needs;
- what evidence the Target requires;
- what dependencies control advancement;
- which work is currently eligible;
- which areas are protected;
- when Human Governance may approve progression.

This Community Roadmap must not copy those live decisions into AI-DOS reusable product truth.

For example, Forge AI develops and self-applies AI-DOS, but Forge AI's current phase, evidence status, active task, pull requests, and authorized next action remain exclusively under `docs/Projects/ForgeAI/`.

---

## 9. How Community Input Can Influence Direction

Community input is valuable when it provides bounded, reviewable evidence.

Useful forms include:

- reproducible defect reports;
- authority or terminology collision findings;
- broken-reference reports;
- provider compatibility results;
- Target adoption experience;
- validation scenarios;
- security and integrity findings;
- documentation usability feedback;
- narrowly scoped RFC proposals;
- evidence that a declared contract and implementation disagree.

A strong proposal should state:

1. the problem;
2. the affected product or Target boundary;
3. the canonical authority currently involved;
4. the proposed scope;
5. what remains out of scope;
6. expected artifacts;
7. validation or evidence method;
8. compatibility impact;
9. protected-area implications;
10. the Human Governance decision required.

Community input informs governance; it does not self-authorize implementation or activation.

---

## 10. Roadmap Decision Principles

Product-direction decisions should prefer work that:

- strengthens authority resolution;
- reduces ambiguity or duplicated truth;
- improves deterministic bounded execution;
- preserves provider neutrality;
- improves validation and evidence quality;
- supports more than one Target Project;
- reduces operator effort without weakening governance;
- improves adoption while preserving the MD-first model;
- makes limitations and future-state claims explicit;
- can be validated with bounded evidence.

Product-direction decisions should avoid work that:

- copies Target-specific state into product truth;
- promotes implementation convenience into architecture;
- activates a capability through documentation wording alone;
- expands scope because adjacent work appears useful;
- treats popularity or repository activity as authority;
- hides unresolved gaps behind confident language;
- combines execution, review, approval, and continuation into one action.

---

## 11. Using Audits and Gap Reports

Independent audits can help identify documentation and contract risks. They remain evidence inputs rather than automatic roadmap authority.

An audit recommendation should be evaluated by checking:

- whether the cited file and condition still exist;
- whether the finding concerns AI-DOS product truth or Target Project truth;
- whether the stated severity matches the governing invariant;
- whether a proposed fix would alter normative behavior;
- whether the recommendation conflicts with protected areas;
- whether the work is already complete or superseded;
- whether a bounded Human Governance instruction authorizes remediation.

The uploaded 2026 documentation audit, for example, recommends replacing remaining Product placeholders, adding missing public security and implementation guidance, and improving sparse subsystem navigation. Those are useful inputs, but each remediation still requires current repository verification and bounded authority. fileciteturn151file0

---

## 12. Roadmap Reporting

When reporting roadmap-related work, include:

- **Objective** — the product-direction question addressed;
- **Authority** — the normative and governance sources consumed;
- **Scope** — exact artifacts changed;
- **Boundaries** — what was deliberately not changed;
- **Evidence** — validation performed and its limits;
- **Compatibility** — expected impact on Targets, providers, and existing contracts;
- **Status claim** — what the change does and does not activate;
- **Next step** — exactly one bounded recommendation.

Avoid claiming that a public roadmap edit completes, activates, accepts, or schedules the capability it describes.

---

## 13. Related Documentation

- [AI-DOS Product Documentation](../README.md)
- [What Is AI-DOS?](../Concepts/WhatIsAIDOS.md)
- [Philosophy](../Concepts/Philosophy.md)
- [Core Concepts](../Concepts/CoreConcepts.md)
- [Human Governance](../Concepts/HumanGovernance.md)
- [Authority Model](../Concepts/AuthorityModel.md)
- [Execution Model](../ExecutionModel.md)
- [Context Resolution](../ContextResolution.md)
- [Provider Model](../ProviderModel.md)
- [Reference](../Reference/README.md)
- [Contributing](Contributing.md)

Readers needing exact execution behavior should follow the repository entry, the applicable Target contract, `docs/AI-DOS/AGENTS.md`, and the relevant normative command, workflow, system, architecture, validation, or lifecycle authority.

---

## 14. Roadmap Readiness Checklist

Before publishing or relying on an AI-DOS roadmap statement, confirm:

- [ ] it describes reusable product direction rather than Target-specific live state;
- [ ] it does not claim a capability is active, accepted, certified, or scheduled without authority;
- [ ] current and future behavior are clearly distinguished;
- [ ] normative owners are linked where exact behavior matters;
- [ ] provider-specific implementation is not presented as universal architecture;
- [ ] the MD-first direction is not overstated as complete executability;
- [ ] lifecycle stages remain separate;
- [ ] security, validation, and evidence claims are scoped;
- [ ] community input is treated as evidence rather than self-authorization;
- [ ] no protected area or Target planning document is mutated by implication;
- [ ] exactly one bounded next step is identified when action is recommended.

---

## 15. Compact Summary

```text
This page explains where AI-DOS is intended to mature.
It does not choose the next task.
It does not copy a Target Project roadmap.
It does not activate a capability.
Canonical contracts define behavior.
Target authorities define project state.
Human Governance makes final lifecycle decisions.
```

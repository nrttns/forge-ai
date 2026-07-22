# AI-DOS Terminology

This page provides public, explanatory definitions for recurring AI-DOS terms.

It is a navigation aid, not a normative dictionary. When a definition here differs from an applicable AI-DOS contract, Target Project contract, architecture artifact, workflow, command, template, or Human Governance decision, the owning normative authority governs.

## Reading the terms

AI-DOS separates reusable product behavior from Target Project truth and separates technical capability from authority. Many terms therefore describe not only an artifact or action, but also who owns it and what it does not authorize.

Terms are listed alphabetically where practical. Closely related lifecycle and authority terms are cross-referenced.

## Active capability

The capability currently permitted by the applicable Target Project state and planning boundaries.

An architectural design, documented future capability, or available implementation does not become active merely because it exists.

## Activation

The authorized transition that makes a capability, work unit, provider route, or other governed subject operationally available.

Activation is distinct from selection, execution, validation, review, acceptance, certification, and release.

## Agent

An AI-assisted actor that can interpret instructions, consume contracts, use available tools, and return outputs or evidence.

An agent may act as part of an Execution Provider, but it does not own Human Governance authority, AI-DOS product truth, or Target Project truth.

## AI-DOS

The reusable, MD-first, provider-neutral product layer for governed AI-assisted work.

AI-DOS supplies contracts and procedures for context resolution, authority-aware routing, bounded execution, validation, evidence, lifecycle separation, and safe-stop behavior.

AI-DOS is not a particular language model, agent host, programming language, CLI, package, or Target Project.

## AI-DOS product truth

Reusable AI-DOS behavior and semantics owned under the AI-DOS product authority boundary.

Product truth may include provider entry, orchestration, commands, workflows, system behavior, validation procedures, evidence structures, and safe-stop rules.

It must not absorb the mission, planning, live state, priorities, or accepted evidence of one Target Project.

## Approval

A Human Governance decision that accepts, rejects, or otherwise resolves a subject at an approval gate.

Approval is not implied by completion, validation, review, merge, certification, promotion, or release. The exact subject and applicable lifecycle contract must be resolved.

## Artifact

A repository or external resource that carries content, state, evidence, configuration, implementation, or authority.

Different artifacts own different questions. File proximity, recency, or technical importance does not automatically create authority.

## Authority

The right to control a question, permit an action, or authorize a transition within a declared boundary.

Authority is resolved from Human Governance decisions, ownership, Target Project contracts, AI-DOS contracts, and task-specific scope. It is not inferred from confidence or technical access.

See also: **Capability**, **Mutation authority**, and **State-update authority**.

## Authority owner

The Human Governance role or artifact that controls a particular question.

Examples include a mission artifact owning strategic purpose, a Target operational entry owning live state, or an AI-DOS workflow owning reusable workflow behavior.

## Blocker

A condition that prevents governed work from continuing correctly.

Blockers may include missing or contradictory authority, inaccessible resources, ambiguous identity, protected-area conflicts, unsupported declarations, failed required validation, or the absence of one uniquely resolvable action.

A blocker must be reported rather than hidden by guessing.

## Bounded delegation

The transfer of permission to perform a specific task without transferring unlimited discretion or final authority ownership.

A bounded delegation identifies the objective, allowed and forbidden scope, resources, protected areas, validation, evidence, completion condition, and stop conditions.

## Bounded execution

Execution limited to the exact authorized objective and scope.

Bounded execution prohibits expanding files, objectives, capabilities, lifecycle transitions, or follow-up work merely because adjacent work appears useful.

## Bounded Work Unit

Exactly one explicitly constrained unit of authorized work.

A complete Bounded Work Unit identifies its objective, authority, allowed artifacts, forbidden scope, dependencies, protected boundaries, validation requirements, completion condition, evidence requirements, and stop conditions.

## Boot sequence

The provider-side sequence that enters AI-DOS and assembles the minimum context required for the active task.

The boot sequence consumes resolved Target information; it does not create Target Project truth or select arbitrary work.

## Candidate

A possible Bounded Work Unit considered by the applicable planning or generation procedure.

A candidate is not automatically selected, activated, authorized, or executable.

## Capability

What a provider, tool, implementation, or system can technically do.

Capability does not equal authority. A provider may be capable of changing a repository while lacking permission to modify the requested artifact.

## Certification

A lifecycle determination that a subject satisfies the applicable certification authority and criteria.

Certification is separate from validation, review, Human Governance approval, promotion, and release.

## Command

An AI-DOS contract that defines behavior for a recognized action class or operational intent.

A command consumes applicable authority and context. It does not create Target permission by itself.

## Completion

The point at which the declared scope and completion condition of a work unit have been satisfied and evidence has been returned.

Completion does not automatically mean validation passed, review approved, Human Governance accepted, certified, promoted, or released.

## Completion evidence

Evidence demonstrating what was completed and whether the declared completion condition was met.

It commonly identifies changed artifacts, validation results, protected-area confirmation, blockers, risks, and lifecycle status.

## Context Assembly

The AI-DOS process of loading the minimum sufficient information required for the active bounded task.

Context Assembly avoids unrelated material that can introduce stale authority, conflicts, excessive token use, or scope expansion.

## Contract

A normative Markdown artifact that defines responsibilities, inputs, outputs, ownership, boundaries, rules, or required behavior.

Contracts are the stable interface across providers and replaceable implementations.

## Declaration

Structured Target-owned information exposed for deterministic resolution or execution.

Declarations may identify resources, source scope, protected areas, validation, permissions, or other required Target context. Missing or structurally invalid declarations may produce blockers.

## Deterministic resolution

A resolution procedure that produces one reproducible outcome from declared inputs and rules, without relying on arbitrary model preference.

Zero valid outcomes, multiple unresolved outcomes, or conflicting required inputs normally require safe-stop.

## Evidence

An attributable record of what occurred during governed work.

Evidence may identify authorities consumed, objective and scope, changed artifacts, validation, warnings, failures, blockers, completion proof, provenance, and lifecycle status.

Evidence supports decisions; it does not automatically grant later authority.

## Evidence provenance

Information that identifies where evidence came from, which subject or revision it describes, and how it was produced.

Preserving provenance prevents historical or provider-local information from being misrepresented as current Target truth.

## Execution Contract

The bounded operational agreement that connects an authorized objective to allowed scope, forbidden scope, required resources, protected areas, validation criteria, provider capabilities, completion evidence, and stop conditions.

Technical capability without a valid Execution Contract does not authorize mutation.

## Execution Provider

An AI agent, automation host, editor integration, tool environment, repository service, or compatible system that performs authorized work by consuming applicable contracts and Resolved Target Context.

Execution Providers are replaceable. They do not own AI-DOS product truth, Target Project truth, or Human Governance approval.

## Forge AI

A Target Project that develops, validates, and self-applies AI-DOS.

Forge AI owns its own mission, planning, operational state, evidence, protected areas, and project-specific authority. It is not the universal definition of AI-DOS or every Target Project.

## Human Governance

The final decision authority in the AI-DOS operating model.

Human Governance supplies or resolves intent, authorization, approval, strategic direction, protected-capability activation, and genuinely ambiguous authority questions that contracts cannot resolve.

Human Governance may delegate bounded execution without surrendering final authority.

## Implementation surface

Code, packaging, adapters, tests, scripts, or other executable resources that implement or expose a bounded part of the system.

An implementation surface is subordinate to the governing contracts and does not become product architecture merely because it is executable.

## Intent

The action or outcome requested by the invoking human or authorized system.

Intent initiates routing, but it does not by itself waive Target permissions, protected areas, ownership, validation, or lifecycle gates.

## Invocation Context

The information supplied at invocation time to identify the requested action and help locate the intended Target Project.

Invocation Context is resolution evidence. It does not itself become Target truth or mutation authority.

## Lifecycle

The set of distinct governed stages through which a subject may move.

Typical stages include selection, activation, execution, completion, validation, review, approval, acceptance, certification, promotion, and release. Evidence from one stage does not silently grant another.

## MD-first

The principle that governing Markdown artifacts are the canonical normative system surface.

MD-first does not mean that every Markdown artifact is currently executable. Code may implement bounded functions, but it remains subordinate to the contracts.

## Minimum sufficient context

The smallest authoritative context set required to perform the active bounded task correctly.

More context is not automatically better. Unrelated context may increase ambiguity, token usage, or authority drift.

## Mutation

A change to a repository, external system, operational state, configuration, issue, pull request, deployment, or other governed resource.

Mutation requires applicable human intent, Target permission, known ownership, bounded scope, protected-area clearance, validation expectations, provider capability, and no unresolved blocker.

## Mutation authority

Permission to perform a particular mutation within a specified scope.

Write access or tool availability is capability, not mutation authority.

## Non-normative documentation

Explanatory material intended to help readers understand the product without owning the behavior it describes.

The pages under `docs/AI-DOS/Product/` are publication-oriented explanations. Applicable normative contracts govern when differences arise.

## Operational entry

The Target-owned authoritative starting point for resolving current Target Project state and work context.

An operational entry does not define provider internals or reusable AI-DOS behavior.

## Operational state

The current Target-owned values that describe the project's active capability, evidence status, blockers, active task, and authorized next action.

Operational state must be resolved from the Target-owned state authority rather than from chat history, recent commits, or provider memory.

## Owner

The authority responsible for a particular domain, artifact, value, or procedure.

Ownership determines which source governs a question; it does not necessarily mean the owner performs execution.

## Precedence

Declared rules used to resolve which authority or structured declaration governs when multiple applicable inputs exist.

Precedence must come from the owning contract or declaration model, not from model preference, file recency, or perceived importance.

## Protected Area

An artifact, capability, state, or boundary that cannot be changed without exact authority.

A protected-area conflict is a blocker. Technical access does not override protection.

## Provider adapter

A host-specific mechanism that helps an Execution Provider discover or consume canonical contracts.

A provider adapter is non-authoritative. It must not restate, narrow, broaden, or replace the canonical contract it exposes.

## Provider capability

A technical function available through an Execution Provider, such as reading files, writing content, running commands, querying services, or opening a pull request.

Provider capability must be matched to an authorized Execution Contract before use.

## Provider-local state

Memory, chat history, cached context, working directories, branches, local configuration, and tool results available to a provider.

Provider-local state may be useful input or evidence, but it is not automatically current Target truth.

## Provider-neutral

Designed so that product behavior does not depend on one model vendor, agent host, editor, repository platform, protocol, or tool environment.

Provider-neutral contracts may be implemented through provider-specific adapters without transferring authority to those adapters.

## Promotion

A lifecycle transition that advances a validated, reviewed, approved, or certified subject into a higher operational or distribution status under the applicable authority.

Promotion is not implied by merge or completion.

## Recommendation

A proposed next action that has not necessarily been selected, activated, or authorized.

Recommendations must remain clearly separated from mutation and Target-state transitions.

## Release

The authorized publication or distribution of a subject for its intended consumers.

Release requires its own authority and conditions. It is not automatically granted by implementation completion, validation, merge, approval, or certification.

## Resolved Target Context

The bounded, task-relevant Target-owned context supplied to the AI-DOS provider route.

It may include the objective, authority, allowed scope, constraints, resources, protected areas, validation expectations, evidence expectations, blockers, and state-update authority.

Resolved Target Context does not permit invention of missing facts.

## Review

The evidence-backed examination of a defined subject or revision to identify findings, risks, and an approval recommendation or outcome under the applicable review contract.

Review does not automatically equal Human Governance approval, Target acceptance, certification, or release.

## Reviewed-subject identity

The exact identity of the artifact, revision, or other subject being reviewed or approved.

Preserving this identity prevents findings or approval from being applied to a different or later revision.

## Safe-stop

The required outcome when governed work cannot continue without guessing, inventing authority, choosing arbitrarily, crossing a protected boundary, or making an unsupported claim.

Safe-stop is a correctness mechanism. It returns the blocker and stops before unauthorized mutation.

## Selection

The governed choice of one eligible candidate or work unit.

Selection is distinct from activation and execution. A selected item may still require an authorized state transition before work begins.

## Source scope

The declared repository or resource boundary within which resolution and execution may operate.

Paths or resources outside the allowed source scope cannot be treated as authorized merely because the provider can access them.

## State transition

A governed change from one operational or lifecycle state to another.

A state transition requires an owning contract, valid current state, exact subject, required evidence, and applicable authority.

## State-update authority

Permission to modify Target-owned operational state.

Completion, merge, validation, or review does not independently grant state-update authority. Without an exact authorized transition, a provider may only recommend an update.

## Target Contract

The Target-owned contract that declares how authoritative Target Project context is resolved and exposed to an Execution Provider.

It may identify Target identity, resources, operational entry, protected areas, execution boundaries, validation and evidence expectations, and state-update authority.

A Target Contract does not need to know provider internals.

## Target Project

A project that consumes AI-DOS while retaining ownership of its own mission, planning, operational state, resources, protected areas, permissions, constraints, and accepted evidence.

Target Projects exchange information with AI-DOS through declared contracts and Resolved Target Context rather than by merging authority boundaries.

## Target Repository

The repository boundary containing the invoked Target Project and its declared resources.

Target Repository resolution must identify exactly one intended boundary or return a blocker.

## Target Repository Resolution

The procedure that identifies the invoked Target Repository and checks the coherence of its required declarations and boundary.

It resolves either one unambiguous result or a blocker. It does not by itself select work or grant mutation authority.

## Target resource

A Target-owned artifact or resource required to resolve or execute governed work.

Examples may include mission, planning, operational state, reports, source resources, validation resources, or task-specific authorities.

## Target truth

Project-specific truth owned by a Target Project.

Target truth may include mission, planning, live state, priorities, resources, protected areas, permissions, project constraints, and accepted evidence. It must not redefine reusable AI-DOS product behavior.

## Validation

The evidence-backed examination of a declared surface against applicable requirements.

A validation claim must name what was actually exercised. Passing an implementation-specific test does not automatically prove architecture, governance, Markdown contract integrity, Target acceptance, capability activation, certification, or release.

## Validation scope

The exact surface and criteria exercised by a validation activity.

Validation conclusions must not be broader than the declared validation scope and available evidence.

## Workflow

An AI-DOS contract that defines a reusable multi-step procedure, its inputs, outputs, boundaries, safe stops, and evidence expectations.

A workflow consumes authority from applicable owners; it does not create Target Project permission by itself.

## Work selection

The governed process of determining which eligible Bounded Work Unit, if any, should be selected from the applicable Target context and planning rules.

Work selection must not rely on convenience, proximity, model confidence, or recent repository activity when those are not declared authority.

## Summary of critical distinctions

```text
Capability is not authority.
Intent is not unlimited permission.
Candidate is not selection.
Selection is not activation.
Activation is not execution.
Completion is not validation.
Validation is not review.
Review is not Human Governance approval.
Approval is not certification.
Certification is not promotion.
Promotion is not release.
Merge is evidence, not universal acceptance.
Provider-local state is not Target truth.
AI-DOS product truth is not Target Project truth.
A recommendation is not an authorized mutation.
```

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, the applicable System, command, workflow, architecture, validation, review, evidence, and lifecycle contracts, the invoked Target Project contract, and explicit Human Governance decisions.
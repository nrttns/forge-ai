# AI-DOS Glossary

This glossary explains recurring AI-DOS product terms in publication-oriented language.

It is explanatory documentation. Normative meaning remains owned by the applicable AI-DOS contracts and by Target-owned authority where the term concerns a specific Target Project.

---

## A

### Acceptance
A Human Governance decision that recognizes a completed subject through the applicable governed lifecycle. Acceptance is distinct from execution completion, validation success, review approval, merge, release, or state update.

### Active work unit
The single bounded unit of work currently authorized for execution. An active work unit has a resolved objective, scope, owner, protected boundaries, validation requirements, and completion condition.

### Agent
A reasoning or execution participant that operates under declared authority. An agent does not receive authority merely from technical capability.

### AI-DOS
A reusable, Markdown-first, provider-neutral operating system for governed AI-assisted work. AI-DOS coordinates authority, context, bounded execution, validation, evidence, review, and Human Governance decisions.

### Approval
A governance decision applied to an exact reviewed subject. Approval does not automatically authorize merge, state mutation, continuation, capability activation, or a new task unless the applicable contract explicitly says so.

### Architecture review
A review that evaluates whether a proposed or existing design preserves declared boundaries, ownership, authority, lifecycle separation, and product invariants.

### Authority
The right to define, permit, constrain, decide, approve, or mutate a governed surface. Authority must come from a declared owner or governing contract.

### Authority chain
The ordered path used to resolve which source governs when several documents or actors are relevant.

### Authority collision
A condition in which two sources appear to own the same decision or concept without a deterministic precedence rule.

### Authority resolution
The process used to identify which source governs a question, conflict, task, or mutation.

---

## B

### Blocker
A condition that prevents safe execution, review, approval, or state mutation. A blocker must be reported rather than bypassed through inference.

### Bounded execution
Execution limited to an explicit objective, scope, resource set, protected boundaries, validation plan, and completion condition.

### Bounded work unit
The smallest independently executable unit of governed work that can be completed and validated without silently expanding into adjacent objectives.

### Boundary
A declared separation between ownership domains, responsibilities, truth roots, lifecycle stages, providers, or implementation surfaces.

---

## C

### Capability
A governed ability that AI-DOS or a Target Project may use only when declared, available, and authorized.

### Capability activation
A governance transition that makes a previously inactive capability available for use. Implementation presence alone does not activate a capability.

### Certification
A formal claim that a subject satisfies declared criteria under a defined certification authority and process.

### Command
A routed instruction pattern that invokes a specific AI-DOS workflow or behavior. A command does not replace authority or scope resolution.

### Completion
The point at which the authorized execution and required validation for a work unit have finished. Completion is not approval or acceptance.

### Constitution
The highest-level AI-DOS product contract that defines permanent invariants and authority boundaries beneath Human Governance.

### Context resolution
The process of identifying Target identity, authority, resources, current state, constraints, protected areas, and blockers before execution.

### Continue
Human Governance intent to advance from the current governed state. Continue is not permission to invent work; it must be resolved through the applicable task-selection and safe-stop rules.

### Contract
A normative Markdown artifact that owns behavior, authority, schema, boundaries, or procedure within its declared scope.

---

## D

### Declaration
An explicit statement of identity, ownership, authority, resource, boundary, state, or policy that a resolver may consume.

### Determinism
The property that the same valid inputs produce the same governed result without hidden discretion or undocumented tie-breaking.

### Discovery
The process of locating and classifying repository authority, resources, contracts, and structure without treating proximity or naming convention as permission.

### Draft
A lifecycle state indicating that a document or subject is not yet final or accepted under its governing process.

---

## E

### Evidence
Inspectible information supporting a claim about execution, validation, review, completion, or acceptance.

### Evidence integrity
Confidence that evidence accurately refers to the correct subject, revision, check, result, and scope without tampering or identity drift.

### Execution Provider
An external agent, coding environment, automation host, or tool that consumes resolved Target Context and performs authorized AI-DOS work.

### Execution sequence
The governed order that transforms resolved authority and context into bounded execution, validation, evidence, and reporting.

### Explicit authorization
A Human Governance or contract-owned instruction that clearly permits a specific action, scope, or mutation.

---

## F

### Forge AI
A Target Project that develops, validates, and self-applies AI-DOS. Forge AI project truth is not reusable AI-DOS product truth.

---

## G

### Governance
The system of authority, ownership, constraints, decisions, lifecycle gates, validation expectations, and evidence requirements that controls work.

### Governance gate
A required decision point that execution cannot bypass, such as review, approval, acceptance, certification, or release authorization.

---

## H

### Human Governance
The final decision authority for AI-DOS and for each Target Project within the applicable ownership boundary.

### Human Governance intent
A human instruction interpreted through the governing contracts. Intent is resolved by meaning and context, not only by exact command wording.

---

## I

### Implementation boundary
The separation between normative AI-DOS contracts and replaceable executable surfaces such as CLIs, scripts, adapters, tests, runtimes, or packages.

### Implementation surface
Code, tooling, runtime data, package metadata, CI, tests, or adapters that implement or support a bounded part of the system without owning product truth.

### Incremental development
Building the product through small, separately authorized, reviewable, and reversible work units.

### Invariant
A rule that lower-authority artifacts and implementations must preserve.

---

## L

### Lifecycle
The governed progression of a subject through states such as draft, execution, validation, review, approval, acceptance, release, deprecation, or retirement.

### Lifecycle separation
The principle that completion, validation, review, approval, acceptance, merge, release, state update, and next-task authorization remain distinct events.

---

## M

### Markdown-first
The principle that governing Markdown artifacts are the canonical system contracts rather than secondary commentary around code.

### Migration
The controlled transition of an existing repository, workflow, authority model, provider integration, or documentation set into AI-DOS-compatible structure and behavior.

### Minimality
The rule that a work unit should include only what is required to achieve its declared objective and completion condition.

### Multi-provider workflow
A workflow in which different Execution Providers perform separate bounded roles such as implementation, review, audit, or validation without sharing undeclared authority.

---

## N

### Normative
Authoritative within the artifact's declared scope. Normative content governs explanatory examples when the two differ.

### Normative reference
A referenced artifact whose rules or definitions are required to interpret or execute the current contract.

---

## O

### Operational entry
The authoritative starting point for resolving a Target Project's current operational state.

### Orchestration
The governed routing of resolved context through the appropriate AI-DOS commands, workflows, engines, validation, review, and reporting paths.

### Owner
The person, governance body, project, or contract responsible for a defined truth surface or decision domain.

---

## P

### Product documentation
Publication-oriented material that explains AI-DOS to end users, adopters, operators, reviewers, and contributors without redefining normative contracts.

### Product Truth
Reusable truth owned by AI-DOS and stored under the AI-DOS product truth root.

### ProjectStatus
A Target-owned operational-state document. It must not be treated as reusable AI-DOS product truth.

### Protected area
A file, directory, authority surface, or subject that may not be modified without exact authorization.

### Provider neutrality
The principle that AI-DOS behavior and authority do not depend on one model vendor, coding agent, host, or tool.

---

## R

### Recommendation
A proposed next action that does not itself authorize execution.

### Refactoring
A bounded change intended to improve structure or maintainability without silently changing owned behavior or authority.

### Release
A governed lifecycle event that makes an accepted product version or distribution available under declared release authority.

### Resolved Target Context
The structured result of Target-side authority and state resolution. It contains the objective, scope, constraints, resources, protected areas, validation expectations, evidence expectations, and state-update authority consumed by AI-DOS.

### Review
A non-mutating evaluation of an exact subject and revision against declared criteria.

### Reviewed subject
The exact artifact, change set, pull request, commit, document, or other bounded object being reviewed.

### Reviewed-subject identity
The deterministic identity of the subject and revision to which review findings and outcomes apply.

### Review outcome
The result of a review, such as approval-eligible, changes requested, blocked, or no findings, under the applicable review contract.

### Roadmap
A Target-owned planning artifact describing direction, dependencies, evidence, and priority. It is not AI-DOS reusable product truth.

---

## S

### Safe-stop
A controlled refusal to continue when authority, identity, scope, prerequisites, resources, determinism, or validation requirements cannot be resolved safely.

### Scope
The exact set of objectives, files, resources, and actions authorized for a work unit.

### Scope expansion
Any addition of objectives, files, cleanup, redesign, or follow-up work not contained in the original authorization.

### Single source of truth
The one authoritative owner for a concept, schema, state, or decision within a declared scope.

### State mutation
A governed change to authoritative operational or lifecycle state.

### State-update authority
The explicit permission and procedure governing whether an execution may modify Target-owned state.

### Subject identity drift
A change in the reviewed or approved subject or revision between review, approval, and mutation.

---

## T

### Target Context
See **Resolved Target Context**.

### Target isolation
The principle that each Target Project owns and protects its own mission, planning, state, resources, permissions, evidence, and operational decisions.

### Target Project
A project that consumes AI-DOS while retaining ownership of its own mission, planning, state, protected areas, resources, and evidence.

### Target Project contract
The Target-owned contract that declares project identity, authority sources, resources, operational entry, protected areas, and execution boundaries.

### Target Truth
Project-specific truth owned by a Target Project rather than by reusable AI-DOS product contracts.

### Truth root
The repository location under which a product or Target Project owns its authoritative artifacts.

---

## V

### Validation
Evidence-producing checks that determine whether a declared surface satisfies specified conditions.

### Validation claim
A statement describing what a check actually exercised and proved. A narrow check must not be presented as product-wide proof.

### Version
A declared identifier for the lifecycle state and evolution of an artifact or product surface.

---

## W

### Workflow
A governed sequence of steps that routes a subject through execution, validation, review, approval, state update, or another owned process.

### Work selection
The deterministic process of choosing exactly one eligible bounded candidate from Target-owned objectives and priority inputs.

### Work unit
See **Bounded work unit**.

---

## Critical distinctions

```text
AI-DOS Product Truth ≠ Target Project Truth
Execution Provider capability ≠ execution authority
Execution complete ≠ validation passed
Validation passed ≠ review approved
Review approved ≠ Human Governance accepted
Human Governance accepted ≠ state updated
State updated ≠ next task authorized
Merge ≠ acceptance
Implementation presence ≠ capability activation
Recommendation ≠ authorization
Safe-stop ≠ failure
```

These distinctions are foundational to reading and operating AI-DOS correctly.

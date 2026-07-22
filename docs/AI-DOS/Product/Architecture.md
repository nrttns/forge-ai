# AI-DOS Architecture

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

Its architecture separates reusable product behavior from Target Project authority, external Execution Provider behavior, implementation technology, runtime surfaces, validation evidence, and Human Governance decisions.

This page explains that architecture at a product level. It is publication-oriented guidance, not a normative contract. Exact behavior remains owned by the applicable contracts under `docs/AI-DOS/`, the selected Target Project's own authorities, and Human Governance decisions.

---

## 1. Why This Architecture Exists

AI-assisted work often becomes unreliable when one prompt, agent, repository, or tool is expected to own all of the following at once:

- project purpose;
- planning and priorities;
- current operational state;
- execution authority;
- protected areas;
- work selection;
- implementation;
- validation;
- review;
- approval;
- evidence;
- release decisions.

When those responsibilities are mixed, a provider may mistake technical capability for permission, infer project state from repository activity, broaden scope by convenience, or claim validation beyond the surface actually exercised.

AI-DOS addresses that problem through architectural separation.

The objective is not maximum automation.

The objective is governed autonomy: work that can proceed efficiently when authority and context are sufficient, and that stops safely when they are not.

---

## 2. High-Level Architecture

```text
                 Human Governance
                         │
                         ▼
                Target Project Truth
                         │
                         ▼
              Resolved Target Context
                         │
                         ▼
                 AI-DOS Contracts
                         │
                         ▼
               Execution Provider
                         │
                         ▼
            Validation and Evidence
                         │
                         ▼
                 Human Governance
```

Each layer has a distinct responsibility.

No layer replaces another.

AI-DOS sits between Target-owned authority and provider execution. It provides reusable operating contracts without absorbing Target truth or becoming the execution provider itself.

---

## 3. Architectural Layers

### 3.1 Human Governance

Human Governance owns final authority.

Typical responsibilities include:

- expressing intent;
- authorizing work;
- setting or changing strategic direction;
- approving or rejecting outcomes;
- resolving ambiguity that contracts cannot resolve;
- accepting evidence;
- authorizing lifecycle transitions;
- deciding whether capabilities may be activated, promoted, certified, or released.

Human Governance is not an implementation layer. It may delegate execution, but delegation does not transfer final authority to AI-DOS or to an Execution Provider.

### 3.2 Target Project

A Target Project is the project being operated on.

A Target normally owns:

- identity;
- mission;
- planning;
- roadmap;
- current operational state;
- protected areas;
- resources;
- permissions;
- execution authority;
- Target-specific validation declarations;
- Target evidence;
- state-transition rules.

A Target consumes AI-DOS product contracts. It does not redefine reusable AI-DOS behavior.

Likewise, AI-DOS does not own the Target's live planning or operational state.

### 3.3 Resolved Target Context

Resolved Target Context is the bounded operating context supplied to AI-DOS and the Execution Provider.

Depending on the task, it may include:

- Target identity;
- the Target operational entry;
- the active objective;
- exact allowed scope;
- forbidden or protected scope;
- required resources;
- execution permissions;
- applicable constraints;
- validation requirements;
- evidence expectations;
- completion conditions;
- stop conditions;
- state-update authority.

Resolved Target Context is not a second source of project truth. It is a task-relevant projection of Target-owned authority and state.

### 3.4 AI-DOS Product Contracts

AI-DOS supplies reusable operating behavior.

Its contract families may define or coordinate:

- repository and provider entry;
- context consumption;
- routing;
- work-selection discipline;
- task generation when authorized;
- lifecycle separation;
- execution sequencing;
- review discipline;
- validation claim boundaries;
- evidence structure;
- state-update routing;
- safe-stop behavior.

AI-DOS does not independently create Target mission, project priority, permissions, or approval authority.

### 3.5 Execution Provider

The Execution Provider performs the work.

A provider may be an AI coding agent, a conversational model, a local automation host, a remote service, or another compatible execution environment.

Examples may include tools based on:

- ChatGPT;
- Codex;
- Claude Code;
- Gemini;
- Grok;
- local agents;
- future provider systems.

The provider consumes the applicable AI-DOS contracts and Resolved Target Context.

A provider may execute, inspect, edit, validate, or report only within the authority and capability available to it. It must not infer permission from its technical ability to perform an action.

### 3.6 Validation

Validation checks the changed or exercised surface.

Examples include:

- Markdown structure review;
- link validation;
- schema validation;
- type checking;
- tests;
- package checks;
- command-output inspection;
- scenario evaluation;
- provider-neutral review criteria.

Validation is bounded evidence. A check proves only what it actually exercises.

For example, a TypeScript type check may validate a TypeScript implementation surface. It does not independently prove Target acceptance, architecture correctness, governance compliance, or product-wide readiness.

### 3.7 Evidence

Evidence records what occurred and what was established.

Useful evidence normally identifies:

- the resolved objective;
- authorities and resources consumed;
- the reviewed or executed subject;
- changed artifacts;
- validation performed;
- validation results and limits;
- blockers and warnings;
- protected-area confirmation;
- completion status;
- lifecycle position;
- state-update authority or its absence.

Evidence supports Human Governance decisions. It does not replace them.

---

## 4. The Core Separation Model

The architecture depends on several separations remaining visible.

### 4.1 Product Truth and Target Truth

```text
AI-DOS product truth
    reusable across Targets

Target Project truth
    specific to one project
```

| AI-DOS product truth | Target Project truth |
|:---|:---|
| reusable contracts | mission |
| provider routing | roadmap and planning |
| lifecycle semantics | current operational state |
| generic execution discipline | project-specific authority |
| review and validation contracts | protected areas |
| safe-stop behavior | Target resources and evidence |

A Target may reference AI-DOS contracts.

AI-DOS product documentation and contracts must not absorb a particular Target's live status, task IDs, roadmap position, or evidence claims as reusable product truth.

### 4.2 Authority and Capability

Capability answers:

> Can the provider perform this action?

Authority answers:

> Is the provider permitted to perform this action now, on this subject, within this scope?

AI-DOS requires both to be respected.

```text
Technical capability ≠ execution authority
```

### 4.3 Selection and Execution

Work selection, activation, execution, validation, review, approval, and state mutation are separate lifecycle stages.

```text
Candidate ≠ selection
Selection ≠ activation
Activation ≠ execution
Execution ≠ completion
Completion ≠ validation
Validation ≠ review
Review ≠ approval
Approval ≠ certification
Certification ≠ promotion
Promotion ≠ release
```

Collapsing these stages creates hidden authority transitions.

### 4.4 Product Architecture and Implementation Technology

The architecture is not defined by the language or runtime used by a current implementation.

A bounded implementation may use:

- Markdown;
- TypeScript;
- JavaScript;
- Node.js;
- Rust;
- Go;
- C or C++;
- shell tooling;
- local CLI surfaces;
- MCP-compatible surfaces;
- future compilers or kernels.

Those technologies may realize parts of the system, but they do not become the product architecture merely because they exist in the repository.

### 4.5 Product Contracts and Provider Adapters

Provider-specific adapters help an execution host discover or consume the canonical contracts.

Adapters must remain subordinate to the product contracts they expose.

They must not:

- restate product truth as provider-owned truth;
- introduce a second governance model;
- embed Target operational state;
- redefine lifecycle behavior;
- diverge from the canonical contract;
- make one provider mandatory for the architecture.

---

## 5. Authority Flow and Evidence Flow

Authority and evidence move in different directions.

### Authority flows toward execution

```text
Human Governance
        ↓
Target-owned authority
        ↓
Resolved Target Context
        ↓
AI-DOS route
        ↓
Execution Provider
```

The provider receives bounded authority. It does not send authority back upward or create additional authority for itself.

### Evidence flows toward governance

```text
Execution Provider
        ↓
Validation results
        ↓
Evidence and review
        ↓
Human Governance
```

Evidence may support approval or a later transition. It does not automatically produce one.

---

## 6. Information Ownership

Different information belongs to different owners.

| Information | Primary owner |
|:---|:---|
| intent and final decisions | Human Governance |
| mission, planning, state, protected areas | Target Project |
| reusable operating behavior | AI-DOS |
| execution mechanics inside a provider | Execution Provider |
| implementation-specific runtime state | the applicable implementation or runtime surface |
| validation results | the validating process, reported as evidence |
| acceptance and lifecycle decisions | Human Governance or explicitly authorized Target transition authority |

Ownership does not prevent information exchange.

It prevents one layer from silently redefining another layer's truth.

---

## 7. End-to-End Execution Flow

A typical governed execution follows the sequence below.

```text
1. Repository discovery
        ↓
2. Target discovery
        ↓
3. Target authority and state resolution
        ↓
4. Resolved Target Context
        ↓
5. AI-DOS routing
        ↓
6. Bounded provider execution or safe-stop
        ↓
7. Validation
        ↓
8. Evidence and review
        ↓
9. Human Governance decision or authorized transition
```

### 7.1 Repository Discovery

The provider begins from the repository entry and discovers the applicable Target contract and AI-DOS provider entry.

The repository entry should remain a discovery surface, not a duplicate of Target planning or AI-DOS workflow behavior.

### 7.2 Target Discovery

The provider resolves which Target Project is being operated on.

Folder proximity, recent edits, branch names, open pull requests, or model judgment must not substitute for explicit Target identity.

### 7.3 Authority and State Resolution

The provider consumes the Target-owned authorities needed for the task.

For an explicitly bounded task, the Human Governance instruction and applicable Target boundaries may already provide the needed scope.

For state-derived continuation, the Target's operational entry and declared planning resources must resolve the current authorized objective.

### 7.4 AI-DOS Routing

AI-DOS routes the resolved context through the applicable product contracts.

Routing may involve execution, review, validation, task planning, state update, or safe-stop behavior, depending on the instruction and current lifecycle position.

### 7.5 Bounded Execution

The provider performs only the authorized work.

It must not expand objectives, artifact scope, implementation choices, or follow-up work merely because an adjacent improvement appears useful.

### 7.6 Validation

The changed surface is checked using the applicable validation method.

Unavailable or failed validation must be disclosed. It must not be converted into an unsupported success claim.

### 7.7 Evidence and Review

The provider reports what changed, what was validated, what remained untouched, and what blockers or limitations remain.

Review evaluates the exact subject and revision that was produced. Subject identity must not drift between execution, validation, and review.

### 7.8 Governance Decision

Human Governance may approve, reject, request correction, continue, hold, or stop.

No later lifecycle step should occur automatically unless exact authority permits it.

---

## 8. Safe-Stop Architecture

Safe-stop is a first-class architectural result.

AI-DOS is designed to preserve the repository rather than invent missing authority or context.

Common safe-stop conditions include:

- Target identity cannot be resolved;
- required Target resources are missing;
- authorities conflict;
- scope is ambiguous or too broad;
- more than one candidate remains without an authorized tie-break;
- no eligible work unit can be produced;
- a protected area would be changed without authority;
- the reviewed subject or revision cannot be resolved;
- required validation fails;
- a requested state mutation is not authorized;
- a provider lacks the technical capability needed to complete the bounded task safely.

A useful safe-stop report states:

- the requested outcome;
- the blocker;
- the missing or conflicting authority;
- whether any mutation occurred;
- the exact decision or input needed from Human Governance.

Safe-stop is not provider failure when the architecture requires stopping.

---

## 9. Provider Neutrality

AI-DOS is designed so that provider replacement does not require architecture replacement.

A compatible provider should be able to:

- discover the repository and Target contracts;
- consume Resolved Target Context;
- follow the required AI-DOS route;
- respect protected areas;
- execute bounded work;
- run or report applicable validation;
- produce attributable evidence;
- stop safely when required.

Providers may differ in:

- interface;
- tool access;
- model behavior;
- execution environment;
- context capacity;
- implementation details;
- supported connectors;
- local or remote operation.

Those differences belong to provider capability, not to the core product architecture.

---

## 10. Runtime Boundary

AI-DOS contracts describe governed behavior. Runtime surfaces realize bounded parts of that behavior.

Possible runtime surfaces include:

- a local command-line interface;
- an editor integration;
- a provider-native agent host;
- a local service;
- an MCP-compatible interface;
- a hosted execution service;
- a future Markdown-to-executable compiler;
- a future AI-DOS kernel.

The presence or absence of one runtime surface does not redefine the architecture.

A runtime must remain subordinate to:

- the applicable AI-DOS contracts;
- the resolved Target authority;
- the exact bounded task;
- protected areas;
- validation and evidence requirements.

---

## 11. MD-First Architecture

AI-DOS is MD-first.

This means its governing Markdown artifacts are normative system contracts, not merely explanatory comments around a codebase.

MD-first architecture provides several benefits:

- behavior can be inspected directly by humans and providers;
- authority and scope can remain explicit;
- product truth is not hidden inside one runtime implementation;
- provider adapters can consume the same canonical contracts;
- governance and execution semantics can evolve independently of implementation technology;
- a future compiler or kernel can target stable contract semantics rather than reverse-engineering application code.

MD-first does not mean implementation-free.

It means implementation remains subordinate to declared contracts and bounded authority.

---

## 12. Implementation Independence

Current implementation surfaces may support distribution, validation, packaging, bootstrap, local execution, or compatibility.

They do not independently establish:

- the complete AI-DOS engine;
- the AI-DOS kernel;
- product-wide architecture;
- future implementation direction;
- universal runtime behavior;
- capability activation;
- certification or release readiness.

Implementation technologies are replaceable unless an exact bounded task gives one technology authority within a specific surface.

This allows AI-DOS to evolve toward future execution models without rewriting its core governance architecture around every implementation change.

---

## 13. Security Boundary

Security is distributed across the architecture.

### Human Governance

Owns risk acceptance and high-impact authorization.

### Target Project

Owns project-specific protected areas, sensitive resources, permissions, and security constraints.

### AI-DOS

Provides reusable discipline for bounded authority, safe-stop, evidence, review, and validation boundaries.

### Execution Provider

Must respect tool permissions, secret handling, protected areas, and the exact execution scope.

### Runtime and implementation

Must provide the concrete technical controls appropriate to the environment.

A documentation statement does not prove that a technical security control exists. Security claims require evidence from the surface being claimed.

---

## 14. Review Boundary

Review is a distinct architectural activity.

A reliable review resolves:

- the exact subject;
- the exact revision;
- the governing objective;
- allowed and forbidden scope;
- changed artifacts;
- validation evidence;
- protected-area confirmation;
- unresolved blockers;
- lifecycle position.

Review must not silently become:

- correction;
- approval;
- merge;
- Target acceptance;
- state mutation;
- continuation.

Each later action requires its own authority.

---

## 15. What AI-DOS Is Not

AI-DOS is not:

- a foundation model;
- a single autonomous agent;
- a provider-specific prompt collection;
- a replacement for Human Governance;
- a universal project roadmap;
- a repository's live operational state;
- a particular CLI;
- a TypeScript application by architectural definition;
- an MCP server by architectural definition;
- automatic permission to modify a repository;
- automatic approval of completed work;
- evidence that every documented capability is implemented or active.

---

## 16. Architecture Anti-Patterns

### Putting Target state into AI-DOS product truth

This makes reusable contracts depend on one project's live status and breaks the product/Target boundary.

### Treating provider output as authority

Provider output is attributable evidence or a proposed result. It is not automatically Target-owned truth.

### Inferring architecture from implementation files

Repository language, package metadata, or source layout may describe one bounded implementation surface, not the product architecture.

### Treating validation as approval

Passing a check does not create Human Governance approval or Target acceptance.

### Treating merge state as operational state

A merged change may be implementation evidence. It does not automatically update Target-owned state.

### Copying provider adapters into canonical truth

Adapters should point to the canonical contracts, not become competing versions of them.

### Continuing automatically after completion

Completion closes the bounded execution objective. It does not authorize the next task unless exact continuation or transition authority exists.

---

## 17. Architecture Readiness Checklist

Use this checklist when evaluating whether a repository or Target can consume AI-DOS coherently.

### Repository and Target

- [ ] The repository entry identifies the Target contract and AI-DOS provider entry.
- [ ] Target identity is explicit.
- [ ] Target truth has a separate ownership surface from AI-DOS product truth.
- [ ] The Target operational entry is discoverable.
- [ ] Protected areas are declared.
- [ ] Required Target resources are explicit.

### Authority and scope

- [ ] Human Governance intent can be distinguished from provider interpretation.
- [ ] Technical capability is not treated as permission.
- [ ] A work unit can resolve to one objective and bounded scope.
- [ ] Forbidden or protected scope is visible.
- [ ] Completion and stop conditions are known.

### Provider

- [ ] The provider can consume the required contracts.
- [ ] The provider can identify the exact Target and task subject.
- [ ] Provider-specific adapters remain non-authoritative.
- [ ] Provider limitations can be reported without inventing substitute behavior.

### Validation and evidence

- [ ] Validation matches the changed surface.
- [ ] Validation claims include their limits.
- [ ] Evidence identifies exact artifacts and revision identity.
- [ ] Protected-area preservation can be demonstrated.
- [ ] Review remains separate from approval and state mutation.

### Implementation

- [ ] Current implementation technology is not treated as product architecture.
- [ ] Runtime artifacts remain subordinate to contracts.
- [ ] Future implementation changes can occur without moving Target truth into AI-DOS.
- [ ] Security claims are supported by surface-appropriate evidence.

### Lifecycle

- [ ] Candidate, selection, activation, execution, validation, review, approval, and release remain distinct.
- [ ] Safe-stop is accepted as a valid outcome.
- [ ] No automatic continuation occurs without authority.
- [ ] Human Governance retains final decision authority.

---

## 18. Related Product Documentation

Continue with:

- [Overview](Overview.md) for the product purpose and boundary;
- [Execution Model](ExecutionModel.md) for the end-to-end operating flow;
- [Context Resolution](ContextResolution.md) for Target and authority resolution;
- [Provider Model](ProviderModel.md) for provider-neutral execution;
- [Security](Security.md) for security and trust boundaries;
- [Implementation](Implementation.md) for current implementation surfaces and their limits;
- [Adoption](Adoption.md) for evaluating and introducing AI-DOS;
- [Getting Started](GettingStarted/README.md) for the first repository and Target setup;
- [Tutorials](Tutorials/README.md) for bounded scenarios;
- [Reference](Reference/README.md) for compact lookup material.

Readers who need execution authority rather than product explanation must begin with the applicable repository entry, Target contract, Target operational context, and normative AI-DOS provider route.

---

## 19. Compact Summary

```text
Human Governance owns intent and final authority.
Target Projects own project truth and current state.
AI-DOS owns reusable governed operating contracts.
Execution Providers perform bounded work.
Validation establishes only what it exercises.
Evidence supports decisions but does not make them.
Implementation realizes bounded surfaces but does not define the architecture.
Safe-stop preserves the system when authority or context is insufficient.
```

AI-DOS architecture is the disciplined relationship among these layers, not any one tool, provider, language, runtime, or repository layout.
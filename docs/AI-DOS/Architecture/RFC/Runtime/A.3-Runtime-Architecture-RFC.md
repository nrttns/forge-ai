# A.3 — AI-DOS Runtime Architecture RFC

> Governed execution substrate · Target-independent · Provider-neutral

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-003` |
| Title | A.3 — AI-DOS Runtime Architecture RFC |
| Version | `0.3.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Runtime Architecture RFC |
| Artifact Family | Architecture Artifact |
| Artifact Type | Architecture RFC |
| Owner | Runtime Architecture |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-15 |
| Scope | Defines the reusable, Target-independent Runtime architecture that resolves governed inputs, assembles execution context, coordinates execution through an Execution Provider, captures evidence, and returns bounded outcomes. |
| Out of Scope | Target planning ownership; Engine Platform internals; Engine Specialization behavior; Agent architecture; workflow semantics; command semantics; validation ownership; review ownership; certification authority; distribution packaging; provider-specific implementation; ProjectStatus mutation. |
| Normative Authority | Human Governance; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Dependencies | A.1 Constitution; A.2 Product / Target Operational Boundary RFC; M.0 Framework Meta Model; M.1 Artifact Meta Model; applicable Framework Standards. |
| Consumes | Constitutional invariants, product/Target ownership boundary, resolved invocation inputs, resolved Target Context, governed execution contracts, provider capability declarations, and applicable standards. |
| Produces | Runtime execution context, bounded execution coordination, lifecycle state, evidence records, result handoff, stop conditions, and downstream requirements for Engine Platform and Execution Providers. |
| Downstream Conforming Specifications | A.4 Engine Platform RFC family; A.5 Engine Specialization RFC family; Agent Architecture; System Layer; Operational Core; Commands; Workflows; provider-specific implementations. |
| Supersedes | A.3 `0.2.0-draft` Runtime harvest model |
| Promotion Requirements | Metadata validation; A.1/A.2 conformance review; ownership review; provider-neutrality review; Target-purity review; Framework Governance review; Human Governance approval; explicit promotion. |
| Certification Status | Not certified |

---

## 1. Decision

AI-DOS shall define one reusable Runtime architecture that operates between resolved authority/context inputs and bounded execution.

The Runtime is not project truth, an autonomous agent, an Engine specialization, a workflow owner, a certification authority, or a distribution mechanism. It is the governed execution substrate that:

1. receives a resolved Invocation Context;
2. receives a resolved Target Context;
3. resolves the applicable AI-DOS operating contracts;
4. assembles a bounded Execution Context;
5. coordinates an authorized Execution Provider;
6. preserves lifecycle and authority boundaries;
7. captures execution evidence;
8. returns a bounded result or safe-stop outcome.

---

## 2. Architectural Position

```text
Human Governance
    ↓
A.1 AI-DOS Constitution
    ↓
A.2 Product / Target Operational Boundary RFC
    ↓
A.3 Runtime Architecture RFC
    ↓
A.4 Engine Platform RFC family
    ↓
A.5 Engine Specialization RFC family
    ↓
Execution Providers and operational realizations
```

A.3 is downstream of A.2. It must not redefine product truth, Target truth, distribution truth, or the Execution Provider boundary.

A.4, A.5, Agent Architecture, System Layer, Operational Core, Commands, and Workflows conform to A.3 where they participate in runtime execution. They are not upstream authorities of A.3.

---

## 3. Runtime Identity

The AI-DOS Runtime is a reusable architectural capability that turns governed inputs into a bounded execution attempt.

Runtime owns:

- runtime boot and readiness state;
- Execution Context assembly;
- lifecycle coordination;
- capability and provider compatibility checks;
- execution dispatch and handoff;
- evidence capture;
- result normalization;
- runtime stop and failure semantics;
- temporary context release.

Runtime does not own:

- AI-DOS constitutional or architectural truth;
- Target Project truth;
- Target Project planning or live operational state;
- provider implementation identity;
- Engine domain decisions;
- command or workflow definitions;
- validation criteria;
- review verdicts;
- certification or canonical promotion;
- distribution release authority.

---

## 4. Required Inputs

Runtime may begin only when the following inputs are available or explicitly declared unnecessary:

| Input | Owner | Runtime Use |
|:---|:---|:---|
| Invocation Context | Caller / invocation boundary | Defines requested outcome and invocation constraints. |
| Resolved Target Context | Target Project | Supplies Target-owned truth, paths, constraints, state, source, and validation declarations. |
| AI-DOS Authority Context | AI-DOS Product | Supplies constitutional, governance, architecture, standards, and reusable operating rules. |
| Execution Contract | Authorized planning or orchestration authority | Defines the bounded work, expected outputs, permitted mutation, and stop conditions. |
| Provider Capability Declaration | Execution Provider | Declares supported capabilities and operational constraints. |

Runtime must not invent a missing Target Project resource, authority decision, execution contract, or provider capability.

---

## 5. Runtime Context Model

Runtime assembles temporary context from separately owned truth domains.

```text
Invocation Context
        +
AI-DOS Authority Context
        +
Resolved Target Context
        +
Execution Contract
        +
Provider Capability Declaration
        ↓
Bounded Execution Context
```

The assembled Execution Context:

- is derived, temporary, scoped, and traceable;
- is not a new source of truth;
- does not transfer ownership between AI-DOS and the Target Project;
- must preserve source attribution and freshness;
- must contain only information relevant to the authorized execution;
- must be released or invalidated after the execution boundary closes.

Model memory, conversation history, cached inference, and prior execution results are not authority unless an owning authority has accepted them into an authoritative artifact.

---

## 6. Runtime Kernel

The Runtime Kernel is the minimal coordination core of A.3.

It is responsible for:

1. validating required runtime inputs;
2. resolving applicable AI-DOS contracts;
3. verifying Target Context completeness for the requested work;
4. assembling the Execution Context;
5. checking provider compatibility;
6. opening exactly one bounded runtime lifecycle;
7. dispatching execution through the selected Execution Provider;
8. recording state transitions and evidence;
9. receiving execution outcomes;
10. normalizing completion, blocker, failure, or safe-stop results;
11. handing results to the owning downstream process;
12. releasing temporary runtime context.

The Runtime Kernel must not:

- select Target Project strategy without an owning authority;
- create or revise ProjectStatus, DevelopmentPhases, or Roadmap on its own authority;
- redefine Engine Platform or Engine Specialization contracts;
- convert evidence into approval;
- self-certify;
- infer authorization from technical capability;
- continue after its bounded Execution Contract is complete.

---

## 7. Runtime Lifecycle

A runtime instance follows this lifecycle:

```text
CREATED
    ↓
INPUTS_RESOLVED
    ↓
CONTEXT_ASSEMBLED
    ↓
READY
    ↓
EXECUTING
    ↓
OUTCOME_CAPTURED
    ↓
HANDED_OFF
    ↓
CLOSED
```

Exceptional terminal states are:

```text
BLOCKED
FAILED
SAFE_STOPPED
CANCELLED
```

### Lifecycle Rules

- No execution may begin before `READY`.
- `READY` requires a valid Execution Contract and compatible Execution Provider.
- Runtime may transition to `BLOCKED` when required authoritative input is missing.
- Runtime must transition to `SAFE_STOPPED` when authority, scope, or ownership cannot be resolved safely.
- `OUTCOME_CAPTURED` does not mean accepted, reviewed, certified, or canonical.
- `HANDED_OFF` transfers the result to the owning workflow, review, governance, or caller boundary; it does not transfer truth ownership.
- `CLOSED` ends the runtime authority for that execution instance.

---

## 8. Execution Provider Boundary

Runtime coordinates an `Execution Provider`; it does not require one permanent provider form.

Possible provider specializations include:

- AI agent;
- Local CLI;
- Local MCP provider;
- Hosted Provider;
- human-operated execution adapter;
- governed automation service.

An Execution Provider:

- consumes the bounded Execution Context;
- performs only the authorized execution;
- reports outputs, evidence, failures, and blockers;
- does not become the owner of AI-DOS or Target truth;
- does not gain authority merely because it has technical access.

Provider-specific protocols, transports, authentication, installation, and implementation details are defined downstream.

---

## 9. Engine Boundary

A.3 defines Runtime coordination, not Engine domain semantics.

The Engine Platform may provide:

- Engine contracts;
- registration and discovery;
- lifecycle hooks;
- communication and state facilities;
- capability declarations;
- domain Engine invocation.

Engine Specializations may provide domain behavior such as context, knowledge, planning, decision, execution, validation, review, certification, memory, governance, workflow, or registry capabilities.

Runtime may invoke these capabilities through governed contracts. It must not absorb their semantic ownership.

---

## 10. Workflow and Command Boundary

Commands and Workflows define reusable procedures and orchestration rules. Runtime executes or coordinates them when selected by an owning authority.

Runtime must not:

- invent a workflow because none exists;
- silently change workflow ordering;
- reinterpret a command outside its contract;
- treat procedure completion as approval;
- own Target Project lifecycle transitions merely because it executed the underlying steps.

---

## 11. Validation, Review, and Certification Boundary

Runtime may invoke validation, collect results, and prepare evidence. It does not own validation criteria unless a downstream runtime component has been explicitly assigned that contract.

Runtime may route evidence to review. It does not issue the independent review verdict.

Runtime may route an eligible outcome toward certification. It does not certify, approve, promote, or canonicalize.

```text
Execution Outcome
    ↓
Validation Invocation and Evidence Capture
    ↓
Review Handoff
    ↓
Certification or Governance Handoff When Eligible
```

Each stage remains owned by its applicable architecture, workflow, or governance authority.

---

## 12. Evidence Model

Runtime evidence may include:

- resolved input identities;
- context source references;
- lifecycle transitions;
- selected provider and capability evidence;
- execution outputs;
- validation command results;
- blockers and failure details;
- handoff records;
- context-release confirmation.

Runtime evidence is factual execution evidence. It is not automatically product truth, Target truth, approval, review acceptance, certification, or memory.

Evidence becomes authoritative only through the acceptance process of the applicable owning domain.

---

## 13. Concurrency and Coordination

Runtime may coordinate multiple execution units only when the Execution Contract explicitly authorizes decomposition or parallelism.

Concurrency requires:

- one owning execution contract;
- explicit work-unit boundaries;
- one active owner per responsibility;
- isolated mutation scopes where possible;
- synchronization rules;
- conflict handling;
- unified evidence and result handoff;
- termination after the authorized objective.

Multi-agent or swarm behavior is a downstream coordination specialization. A.3 does not define a separate swarm authority or permanent swarm architecture.

---

## 14. Failure and Safe Stop

Runtime must stop without mutation, or stop at the nearest safe boundary, when:

- the Target Project cannot be resolved;
- required Target-owned truth is missing or ambiguous;
- the Execution Contract is absent, contradictory, or exceeds authority;
- the selected provider lacks required capability;
- required protected-area or mutation authorization is unresolved;
- AI-DOS and Target authority appear to conflict and precedence cannot be resolved;
- a downstream component attempts to self-authorize, self-review, or self-certify;
- continuing would cross the bounded runtime scope.

A stop result must identify:

- the failed prerequisite;
- the owning authority expected to resolve it;
- evidence collected before the stop;
- whether any mutation occurred;
- the safe restart boundary.

---

## 15. Runtime Invariants

1. Runtime consumes authority; it does not create authority.
2. Runtime consumes Target truth; it does not own Target truth.
3. Assembled context is never a third truth domain.
4. Technical access does not imply mutation authority.
5. Every execution is bounded by an Execution Contract.
6. Every Execution Provider is replaceable at the architecture boundary.
7. Runtime orchestration does not absorb Engine, Agent, Command, Workflow, Validation, Review, Certification, or Governance ownership.
8. Completion evidence is not approval.
9. Runtime state is temporary execution state, not Target Project operational state.
10. External Target execution must never fall back to Forge AI Target paths or state.
11. Runtime must safe-stop when authority or ownership is ambiguous.
12. Human Governance remains final.

---

## 16. Downstream Conformance Requirements

A downstream Runtime realization must:

- accept explicitly resolved Target Context;
- preserve the A.2 ownership boundary;
- support provider-neutral dispatch;
- expose lifecycle and evidence state;
- enforce bounded execution and stop conditions;
- distinguish runtime state from Target Project state;
- avoid embedding Forge AI paths or Target-specific assumptions;
- avoid treating Engine or Agent implementation as the Runtime itself;
- preserve validation, review, certification, and promotion boundaries.

A.4 and A.5 RFCs must conform to these requirements without redefining Runtime authority.

---

## 17. Historical Source Disposition

Earlier RC2 runtime models, harvest reports, and transitional compatibility statements may remain as historical evidence. They are not active Runtime authority and are not dependencies of this RFC.

The active Runtime architecture is defined by this RFC together with its approved upstream authorities.

---

## 18. Validation Requirements

Before promotion, validation must confirm:

- A.1 and A.2 are the only architecture-level upstream authorities of A.3;
- A.3 contains no Target-owned planning or state ownership claim;
- A.3 contains no Forge AI fallback path;
- Execution Provider is provider-neutral;
- Engine Platform and Engine Specializations remain downstream;
- validation, review, certification, and promotion ownership remain separate;
- RC2 harvest or transition language is historical only;
- Runtime navigation and dependent metadata reference this canonical path;
- no conflicting active Runtime architecture exists.

---

## 19. Promotion Gate

This RFC may be promoted only when:

1. Framework Governance confirms A.1/A.2 conformance.
2. Runtime ownership and lifecycle boundaries are validated.
3. A.4 and A.5 dependency direction is confirmed.
4. System Layer and Operational Core realizations are reviewed for conformance.
5. Target-independence and provider-neutrality checks pass.
6. Human Governance explicitly approves promotion.

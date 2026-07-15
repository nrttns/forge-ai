# A.4.4 — Engine Lifecycle RFC

> Engine Platform foundation · Transition semantics · Runtime-bounded

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.4` |
| Title | A.4.4 — Engine Lifecycle RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Governed Engine lifecycle-state and transition contract |
| Certification Status | Not certified |

## 1. Decision

Engine Lifecycle defines the legal platform-level lifecycle states and transitions of an Engine registration and instance.

Lifecycle semantics are distinct from current observable Engine State, Runtime execution state, and Target Project operational state.

## 2. Lifecycle States

The minimum lifecycle model is:

```text
Declared → Registered → Available → Active
                         ↓          ↓
                      Suspended ← Degraded
                         ↓
                      Retired → Removed
```

`Failed` may be entered from an operational lifecycle state when recovery cannot proceed safely. Exact implementation state machines may specialize this model but may not weaken its invariants.

## 3. Owned Responsibility

Lifecycle owns:

- lifecycle-state meanings;
- permitted transition classes;
- transition preconditions;
- transition evidence requirements;
- recovery, suspension, retirement, and removal semantics;
- invalid-transition rejection.

## 4. Explicit Non-Ownership

Lifecycle does not own:

- current health or observable Engine State;
- Registry storage;
- Kernel coordination;
- Runtime authorization;
- Engine business logic;
- Target Project lifecycle or operational state;
- validation, review, certification, or release verdicts.

## 5. Transition Rules

Every transition requires:

- an identified Engine and governed version;
- a valid current lifecycle state;
- satisfied transition preconditions;
- applicable Runtime authorization;
- Kernel-coordinated execution when operational action is required;
- traceable evidence and resulting state publication.

No provider, Engine, agent, workflow, or Registry record may self-authorize a transition.

## 6. Invariants

1. Lifecycle state is not Engine health state.
2. Lifecycle state is not Runtime session state.
3. Lifecycle state is not Target Project state.
4. Invalid transitions are rejected, not inferred.
5. Retirement and removal do not erase traceability.
6. Failure and recovery remain bounded and evidence-producing.
7. External Targets never inherit Forge AI lifecycle state.

## 7. Relationships

A.4.1 coordinates transition requests. A.4.2 declares lifecycle compatibility. A.4.3 publishes lifecycle metadata. A.4.6 reports observable state. These are sibling foundation relationships under A.4.

## 8. Promotion Gates

Promotion requires lifecycle/state separation, transition completeness, invalid-transition, recovery, traceability, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

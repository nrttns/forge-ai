# A.5.1 — Context Engine RFC

> Engine Specialization · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-005.1` |
| Title | A.5.1 — Context Engine RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Specialization RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime RFC; A.4 Engine Platform and A.4.1–A.4.7 foundations; A.5.0 specialization contract |
| Dependencies | A.5.0 and applicable Meta Models and Standards |
| Produces | Context-resolution capability contract and typed Context Snapshot artifacts |
| Certification Status | Not certified |

## 1. Decision

The Context Engine is the bounded Engine Specialization responsible for assembling an invocation-scoped, traceable Context Snapshot from authorized inputs already resolved through the AI-DOS System Layer and Runtime boundary.

It does not discover a Target repository independently, invent missing Target truth, or treat Forge AI paths as defaults.

## 2. Exclusive Responsibility

The Context Engine exclusively owns:

- selecting authorized context inputs for a declared invocation purpose;
- normalizing those inputs into a typed Context Snapshot;
- recording provenance, freshness, confidence, and unresolved-context markers;
- detecting context conflicts and incompleteness;
- producing bounded context views for downstream capability requests.

## 3. Explicit Non-Ownership

The Context Engine does not own:

- Invocation Context creation or Target repository resolution;
- Target Project source, ProjectStatus, DevelopmentPhases, Roadmap, or live state;
- knowledge retrieval semantics;
- planning, decision, execution, validation, review, or certification;
- Runtime sessions, Engine registration, lifecycle, state, or authorization;
- provider-local caches or implementation details.

## 4. Inputs and Outputs

Required inputs:

- authorized Runtime Execution Context;
- Resolved Target Context references;
- applicable AI-DOS authority and policy constraints;
- declared context request and scope;
- provenance and freshness metadata.

Outputs:

- `ContextSnapshot`;
- `ContextConflictReport` when sources disagree;
- `ContextGapReport` when required context is absent;
- trace and evidence references.

A Context Snapshot is evidence-bearing input, not Target truth and not execution authorization.

## 5. Invocation Contract

```text
Authorized request
    ↓
Context scope validation
    ↓
Authorized-source selection
    ↓
Normalization and conflict detection
    ↓
Context Snapshot or safe stop
```

The Engine shall stop or return an explicit partial result when required context cannot be resolved safely.

## 6. Peer Relationships

Other A.5.x Engines may consume a Context Snapshot through typed handoffs. Such consumption creates no authority dependency between sibling specializations.

The Context Engine may request Knowledge Engine retrieval but shall not absorb knowledge ownership.

## 7. Target and Provider Boundary

Target-owned inputs remain read-only from the Context Engine's perspective. Provider-specific paths, prompts, caches, and transports shall not become product architecture.

No external Target may inherit Forge AI paths, files, state, or assumptions.

## 8. Invariants

1. Every included context item has provenance.
2. Missing required context is never silently invented.
3. Conflicting sources remain visible until resolved by the proper authority.
4. Context freshness is explicit.
5. Context assembly does not mutate Target truth.
6. Context availability does not create execution permission.
7. Uncertainty causes bounded output or safe stop.

## 9. Conformance

Conformance requires A.5.0 compliance, A.4 foundation compatibility, typed outputs, complete traceability, Target independence, provider neutrality, and verified non-ownership boundaries.

## 10. Promotion Gate

Promotion requires Framework Governance review, evidence that no Target-specific fallback exists, sibling-boundary validation, and explicit Human Governance approval.
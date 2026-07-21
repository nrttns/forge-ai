# A.4.1 — Engine Kernel RFC

> Engine Platform foundation · Runtime-hosted · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.1` |
| Title | A.4.1 — Engine Kernel RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Kernel coordination contract for downstream Engine Platform foundations and Engine Specializations |
| Certification Status | Not certified |

## 1. Decision

The Engine Kernel is the single shared coordination component inside the Runtime-hosted Engine Platform.

```text
Runtime owns the execution envelope.
Engine Kernel coordinates platform operations.
Engine Specializations perform bounded capabilities.
Execution Providers invoke through governed Runtime and Engine contracts.
```

The Kernel is not a second Runtime and does not create authority.

## 2. Owned Responsibility

The Kernel exclusively owns platform-level coordination of:

- contract-aware Engine invocation;
- dependency and eligibility checks;
- lifecycle-transition requests;
- registry resolution requests;
- communication routing requests;
- Engine-state observation coordination;
- capability-resolution requests;
- failure isolation and safe-stop propagation;
- trace and evidence correlation for Engine invocations.

## 3. Explicit Non-Ownership

The Kernel does not own:

- Runtime sessions or execution authorization;
- Engine Contract semantics;
- Registry truth;
- lifecycle state definitions;
- communication payload semantics;
- Engine observable state definitions;
- capability semantics;
- Target Project truth or operational state;
- Engine Specialization business logic;
- validation, review, or certification verdicts;
- provider implementation behavior.

## 4. Inputs and Outputs

Required inputs:

- authorized Runtime Execution Context;
- valid Engine Contract;
- resolved Engine registration;
- lifecycle eligibility;
- current Engine state;
- requested capability;
- applicable communication and policy constraints.

Outputs:

- accepted or rejected invocation decision;
- coordinated Engine invocation;
- trace correlation record;
- lifecycle, state, communication, or registry request;
- failure, escalation, or safe-stop evidence.

## 5. Invocation Rule

```text
Runtime Authorization
    ↓
Kernel Eligibility Check
    ↓
Contract + Registry + Lifecycle + State + Capability Resolution
    ↓
Engine Invocation or Governed Rejection
```

No Engine, provider, agent, tool, workflow, or adapter may bypass this path when using the Engine Platform.

## 6. Invariants

1. One Engine Platform has one active Kernel coordination authority.
2. Kernel coordination never creates execution authorization.
3. Registry presence never guarantees invocation.
4. Capability availability never grants permission.
5. Engine state remains separate from Runtime and Target state.
6. Failures produce evidence and bounded outcomes.
7. External Targets never use Forge AI fallback paths.

## 7. Relationships

A.4.2–A.4.7 are sibling foundation contracts consumed during Kernel coordination. They do not form a sequential authority chain among themselves.

A.5.x Engine Specializations conform to the Kernel through the complete A.4 foundation contract.

## 8. Promotion Gates

Promotion requires metadata, terminology, ownership-boundary, dependency-direction, safe-stop, provider-neutrality, and Framework Governance validation followed by Human Governance approval.

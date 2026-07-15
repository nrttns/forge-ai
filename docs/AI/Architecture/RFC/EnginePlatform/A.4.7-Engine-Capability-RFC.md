# A.4.7 — Engine Capability RFC

> Engine Platform foundation · Functional declaration · Permission-separated

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.7` |
| Title | A.4.7 — Engine Capability RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Governed Engine capability declaration and resolution contract |
| Certification Status | Not certified |

## 1. Decision

Engine Capability describes a functional capacity that an Engine may provide. Capability declaration, discovery, availability, compatibility, authorization, and successful execution are separate facts.

Capability categories are extensible and belong to Engine Specialization contracts; this foundation RFC does not freeze the A.5.x specialization inventory.

## 2. Required Capability Declaration

A capability declaration must include:

- stable capability identity and version;
- providing Engine identity and contract reference;
- functional purpose and explicit exclusions;
- required inputs and produced outputs;
- preconditions and dependencies;
- lifecycle and observable-state requirements;
- compatibility constraints;
- evidence and traceability requirements;
- failure and safe-stop behavior;
- security and provider constraints.

## 3. Owned Responsibility

Engine Capability owns:

- declaration semantics;
- capability identity and compatibility expectations;
- provider-independent resolution requirements;
- composition constraints;
- eligibility inputs for Kernel coordination.

## 4. Explicit Non-Ownership

Capability does not own:

- execution authorization;
- Kernel coordination;
- Registry truth;
- lifecycle transitions;
- current Engine State;
- Engine Specialization business logic;
- Target Project permissions or truth;
- validation, review, or certification verdicts.

## 5. Resolution Rule

```text
Capability Requested
    ↓
Contract Declaration Found
    ↓
Registry + Version + Dependency Compatibility
    ↓
Lifecycle + State Eligibility
    ↓
Runtime Authorization and Policy Check
    ↓
Kernel Invocation or Governed Rejection
```

A declared or discoverable capability must not be invoked when any required check fails or remains uncertain.

## 6. Invariants

1. Capability declaration does not grant permission.
2. Registry discovery does not prove availability.
3. Availability does not prove compatibility.
4. Compatibility does not prove authorization.
5. Authorization does not guarantee successful execution.
6. Capability identity remains stable and versioned.
7. Target-specific permissions remain Target-owned.
8. External Targets never inherit Forge AI capability assumptions.

## 7. Relationships

A.4.1 resolves and coordinates capability use. A.4.2 carries declarations. A.4.3 publishes discoverability metadata. A.4.4 and A.4.6 provide lifecycle and state eligibility. A.4.5 carries capability queries and results. These are sibling foundation relationships.

A.5.x RFCs define concrete Engine Specializations and their capabilities without redefining this foundation.

## 8. Promotion Gates

Promotion requires declaration completeness, permission separation, compatibility, uncertainty handling, specialization neutrality, provider neutrality, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

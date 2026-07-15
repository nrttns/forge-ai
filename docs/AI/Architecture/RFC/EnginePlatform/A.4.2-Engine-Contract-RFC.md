# A.4.2 — Engine Contract RFC

> Engine Platform foundation · Technology-independent · Specialization-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.2` |
| Title | A.4.2 — Engine Contract RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Minimum contract every Engine Specialization must satisfy |
| Certification Status | Not certified |

## 1. Decision

Every Engine Specialization must declare one governed Engine Contract before registration or invocation.

The contract defines what must be knowable about an Engine without defining programming-language interfaces, transport protocols, provider APIs, storage, or business logic.

## 2. Required Contract Fields

An Engine Contract must declare:

- stable identity and version;
- owner and lifecycle status;
- responsibility and explicit non-responsibilities;
- input and output artifact contracts;
- provided and required capabilities;
- dependencies and compatibility constraints;
- invocation preconditions and expected outcomes;
- state and lifecycle compatibility;
- communication expectations;
- evidence and traceability requirements;
- failure and safe-stop behavior;
- security and provider constraints.

## 3. Ownership Boundary

The Contract owns Engine interface semantics only.

It does not own:

- Kernel coordination;
- Registry storage or discoverability state;
- lifecycle transitions;
- current Engine state;
- communication transport;
- authorization;
- Target Project truth;
- validation, review, or certification verdicts.

## 4. Conformance

A contract is eligible for registration only when it is complete, internally consistent, compatible with A.4.1–A.4.7, and traceable to an approved specialization RFC.

Contract validity does not imply:

- registration;
- availability;
- authorization;
- health;
- capability permission;
- certification.

## 5. Versioning

Contract changes that alter responsibility, artifacts, capabilities, dependencies, lifecycle compatibility, state semantics, or failure behavior require compatibility review and governed version change.

## 6. Invariants

1. One Engine identity has one active contract per governed version.
2. Missing contract fields cause rejection, not inference.
3. Contracts cannot grant authority.
4. Contracts cannot redefine Runtime, Platform, Target, or governance truth.
5. Provider-specific implementation details remain outside this RFC.
6. External Targets never inherit Forge AI-specific assumptions.

## 7. Relationships

A.4.1 Kernel consumes contracts for coordination. A.4.3 Registry publishes contract metadata. A.4.4–A.4.7 constrain lifecycle, communication, state, and capability compatibility. These are sibling conformance relationships, not a sequential authority chain.

## 8. Promotion Gates

Promotion requires contract completeness, compatibility, ownership-boundary, provider-neutrality, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

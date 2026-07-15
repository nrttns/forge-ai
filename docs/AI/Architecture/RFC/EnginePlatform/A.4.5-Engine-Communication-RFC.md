# A.4.5 — Engine Communication RFC

> Engine Platform foundation · Governed message semantics · Transport-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.5` |
| Title | A.4.5 — Engine Communication RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Governed Engine communication-envelope and exchange contract |
| Certification Status | Not certified |

## 1. Decision

Engine Communication defines the governed semantics for exchanges within the Engine Platform. It is transport-neutral and does not define APIs, protocols, queues, message brokers, provider SDKs, or serialization formats.

All operational Engine communication is coordinated through the Runtime-hosted Engine Platform and its Kernel boundary.

## 2. Communication Classes

The platform may exchange:

- invocation requests and responses;
- artifact handoffs;
- lifecycle-transition requests and results;
- state observations;
- capability and registry queries;
- events and notifications;
- failure, escalation, and safe-stop signals;
- trace and evidence records.

## 3. Required Envelope

Every governed exchange must identify:

- sender and intended receiver;
- Engine and contract versions;
- Runtime execution-context identifier;
- message class and purpose;
- correlation and causation identifiers;
- applicable capability and authorization context;
- payload or artifact reference;
- traceability and evidence requirements;
- expected response or terminal outcome;
- expiry, retry, and failure constraints when applicable.

## 4. Explicit Non-Ownership

Communication does not own:

- authorization;
- Kernel coordination;
- Contract semantics;
- Registry truth;
- lifecycle transitions;
- observable Engine State;
- capability semantics;
- Target Project truth;
- validation, review, or certification verdicts.

## 5. Communication Rules

- Hidden or unmanaged Engine-to-Engine channels are prohibited.
- Communication cannot escalate authority or permission.
- Requests do not guarantee acceptance or execution.
- Events describe occurrences; they do not create canonical truth by themselves.
- Artifact handoffs preserve ownership and provenance.
- Failed communication produces bounded evidence and a defined rejection, retry, escalation, or safe-stop outcome.

## 6. Invariants

1. Every operational exchange is traceable.
2. Transport choice does not change semantics or authority.
3. Communication never creates a second orchestration system.
4. Runtime and Kernel boundaries cannot be bypassed.
5. Target-owned information remains Target-owned after transmission.
6. Provider metadata remains non-authoritative.
7. External Targets never use Forge AI communication fallbacks.

## 7. Relationships

A.4.1 coordinates communication. A.4.2 defines message-relevant contract expectations. A.4.3 resolves participants. A.4.4 and A.4.6 constrain lifecycle and state eligibility. A.4.7 constrains capability use. These are sibling foundation relationships.

## 8. Promotion Gates

Promotion requires envelope completeness, transport neutrality, no-hidden-channel, authority-preservation, failure-handling, traceability, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

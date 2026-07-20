# A.4.3 — Engine Registry RFC

> Engine Platform foundation · Discovery metadata · Non-authorizing

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.3` |
| Title | A.4.3 — Engine Registry RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC; valid A.4.2 Engine Contracts; applicable Meta Models and Standards |
| Produces | Governed Engine discoverability and registration metadata contract |
| Certification Status | Not certified |

## 1. Decision

The Engine Registry is the single platform-level source for Engine registration and discoverability metadata.

Registry presence answers what is registered and knowable. It does not answer whether an Engine is authorized, healthy, lifecycle-eligible, compatible, or invocable.

## 2. Owned Responsibility

The Registry owns:

- registration identity and version metadata;
- contract reference and ownership metadata;
- declared capabilities and dependencies;
- lifecycle and state references;
- compatibility and availability metadata;
- registration, update, suspension, retirement, and removal records;
- discoverability queries and traceable resolution results.

## 3. Explicit Non-Ownership

The Registry does not own:

- Engine execution or Kernel coordination;
- Engine Contract semantics;
- lifecycle-transition authority;
- Engine observable state truth;
- communication routing;
- capability authorization;
- Target Project truth;
- validation, review, certification, or release authority.

## 4. Registration Rules

Registration requires:

- a valid Engine identity;
- a complete A.4.2 Engine Contract;
- declared owner and version;
- valid lifecycle and state references;
- capability and dependency declarations;
- compatibility evidence;
- no conflicting active registration.

Incomplete or conflicting registration must be rejected or quarantined.

## 5. Resolution Result

A Registry resolution may return registration metadata, but every invocation still requires independent Kernel checks for Runtime authorization, contract validity, lifecycle eligibility, current state, capability compatibility, and policy constraints.

## 6. Invariants

1. One active registration exists per Engine identity and governed version.
2. Registry metadata is traceable and versioned.
3. Registration never creates authorization.
4. Discovery never guarantees availability or health.
5. Capability declaration never grants permission.
6. Registry records never become Target Project state.
7. External Targets never use Forge AI registry fallbacks.

## 7. Relationships

A.4.1 Kernel consumes Registry resolutions. A.4.2 defines the contract referenced by each registration. A.4.4–A.4.7 provide lifecycle, communication, state, and capability metadata constraints. These are sibling foundation relationships.

## 8. Promotion Gates

Promotion requires registration-identity, non-authorization, conflict, traceability, provider-neutrality, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

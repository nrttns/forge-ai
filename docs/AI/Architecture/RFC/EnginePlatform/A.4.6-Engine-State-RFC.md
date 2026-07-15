# A.4.6 — Engine State RFC

> Engine Platform foundation · Observable Engine condition · Non-authoritative

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-004.6` |
| Title | A.4.6 — Engine State RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Engine Platform Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | A.1 Constitution; A.2 Boundary RFC; A.3 Runtime Architecture RFC; A.4 Engine Platform RFC |
| Dependencies | A.4 Engine Platform RFC and applicable Meta Models and Standards |
| Produces | Observable Engine-condition model and state-publication contract |
| Certification Status | Not certified |

## 1. Decision

Engine State represents the current observable operational condition of an Engine within an authorized Runtime execution envelope.

Engine State is distinct from:

- Engine Lifecycle state;
- Runtime execution state;
- Target Project operational state;
- Registry metadata;
- provider-local internal state.

## 2. State Model

The minimum observable conditions are:

```text
Unknown
Ready
Busy
Waiting
Degraded
Unavailable
Failed
```

Specializations may add states only when they preserve compatibility with these platform-level meanings.

## 3. Owned Responsibility

Engine State owns:

- observable-condition meanings;
- state observation requirements;
- publication freshness and provenance expectations;
- state-change evidence;
- stale, conflicting, or unavailable-state handling;
- compatibility rules for Kernel invocation decisions.

## 4. Explicit Non-Ownership

Engine State does not own:

- lifecycle-transition legality;
- Runtime authorization or session state;
- Target Project state;
- Registry registration status;
- capability authorization;
- provider implementation internals;
- validation, review, or certification verdicts.

## 5. Publication Rules

A state observation must include Engine identity and version, execution-context scope, observed condition, observation time, source, freshness or expiry, correlation evidence, and any degradation or failure detail needed for safe handling.

Unknown, stale, conflicting, or unavailable state must never be interpreted as ready.

## 6. Invariants

1. Observable state does not create authority.
2. Ready does not imply authorization.
3. Registered does not imply Ready.
4. Lifecycle eligibility and current state are checked independently.
5. State is scoped and cannot silently become Target Project truth.
6. Provider reports require platform validation before use.
7. Unsafe uncertainty produces rejection, escalation, or safe stop.

## 7. Relationships

A.4.1 consumes state for coordination. A.4.3 publishes Registry references to state observations. A.4.4 defines lifecycle legality. A.4.5 carries state exchanges. A.4.7 uses state as one capability-eligibility input. These are sibling foundation relationships.

## 8. Promotion Gates

Promotion requires lifecycle/state/Runtime/Target separation, freshness, conflict, uncertainty, provenance, provider-neutrality, metadata, terminology, and Framework Governance validation followed by Human Governance approval.

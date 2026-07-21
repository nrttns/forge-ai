# Authority Model

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.AUTHORITY-MODEL` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI-DOS/System/SystemLayer.md` |
| Scope | Definition of authority categories, precedence constraints, and non-authority signals. |
| Inputs | Truth Classification Map; applicable governance and architecture references. |
| Outputs | Authority Evaluation Model consumed by Authority Resolution. |

## 1. Purpose

Authority Model defines how System Layer distinguishes governing authority from context, capability, state, evidence, and convenience.

It defines evaluation rules; it does not resolve a particular invocation conflict or choose an execution outcome.

## 2. Authority Order

```text
Human Governance
    ↓
A.1 Constitution
    ↓
Applicable A.2–A.6 Architecture RFC authority
    ↓
Applicable Meta Models and Standards
    ↓
Explicit Target authority and Resolved Target Context
    ↓
System and Operational contracts
    ↓
Commands / Workflows / Templates / Provider procedures
    ↓
Implementation preference
```

Authority applies only within the owner’s declared domain. A lower artifact may refine but shall not redefine higher or peer authority.

## 3. Non-Authority Signals

The following do not create authority by themselves:

- file presence or repository location;
- README navigation;
- registry presence;
- capability availability;
- provider availability;
- installation or package discovery;
- merge, completion, validation, review, or certification readiness;
- continuation intent;
- historical evidence or recent implementation proximity.

## 4. Domain Rules

- A.4.x contracts are siblings under A.4.
- A.5.x specializations are capability peers, not an execution or authority sequence.
- A.6 is the Distribution sibling branch under A.2, not a Runtime downstream dependency.
- Target Project planning and operational state remain Target-owned.
- Forge AI is one Product Development Target Project and is never a fallback authority for other Targets.

## 5. Non-Ownership

Authority Model does not approve, certify, promote, release, mutate Target state, select work, resolve the active conflict, or authorize execution.

## 6. Safe Stop Conditions

The model requires safe stop for missing authority, duplicate ownership, incompatible lifecycle claims, unresolved product/Target truth overlap, ambiguous release authority, or absent mutation authority.

## 7. Handoff

The Authority Evaluation Model is consumed by `AuthorityResolution.md` together with the Truth Classification Map and assembled invocation context.
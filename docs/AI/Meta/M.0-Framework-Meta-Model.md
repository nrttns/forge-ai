# M.0 — Framework Meta Model

> **Forge AI v3 · Meta Architecture**
> Foundational type system for Forge AI Architecture, Standards, Governance, Runtime, and Certification.

---

| Property | Value |
|:---|:---|
| **Document** | M.0 — Framework Meta Model |
| **Identifier** | `FORGE-META-M.0` |
| **Version** | 1.0.0-draft |
| **Status** | Draft |
| **Type** | Meta Architecture Specification |
| **Classification** | Framework Meta Model |
| **Authority** | A.1 — Constitution |
| **Owner** | Framework Architecture Team |
| **Maintainers** | Framework Governance |
| **Created** | 2026-07-04 |
| **Last Updated** | 2026-07-04 |

---

## 1. Status

M.0 defines the foundational meta model of the Forge AI Framework.

It establishes the shared conceptual type system used by architecture documents, standards, audits, governance processes, runtime systems, validation models, certification records, and future platform adapters.

This document is not a product specification, implementation plan, runtime design, or project template.

It defines the common architectural language from which all reusable Forge AI models are derived.

---

## 2. Purpose

The purpose of the Framework Meta Model is to prevent every Framework document and standard from redefining its own foundational concepts.

The meta model defines common concepts such as:

- Artifact
- Entity
- Relationship
- Identity
- Lifecycle
- State
- Authority
- Ownership
- Evidence
- Validation
- Certification
- Reference

These concepts become reusable building blocks for the Standards Library and Framework Core architecture.

---

## 3. Scope

M.0 applies to:

- Framework Core documents
- Standards documents
- Architecture audits
- Discovery records
- Finding records
- Recommendation records
- Risk records
- Evidence records
- Decision records
- Review records
- Certification records
- Runtime and Engine models
- Agent and Swarm models
- Platform adapter specifications

M.0 does not define implementation storage, database schema, UI behavior, or runtime execution details.

---

## 4. Meta Model Principles

### Principle 1 — Everything Governed Is an Artifact

Any governed thing that must be identified, referenced, reviewed, validated, certified, archived, or audited is treated as an Artifact.

### Principle 2 — Every Artifact Has Identity

Every Artifact shall have a stable identity suitable for traceability.

### Principle 3 — Every Artifact Has Ownership

Every Artifact shall have one accountable owner.

### Principle 4 — Every Artifact Has Lifecycle

Every Artifact shall exist in an explicit lifecycle state.

### Principle 5 — Every Relationship Is Explicit

Relationships between Artifacts shall be recorded rather than implied.

### Principle 6 — Evidence Supports Truth

Claims, findings, recommendations, and certifications shall be supported by Evidence.

### Principle 7 — Governance Controls Promotion

Artifacts shall not become canonical without governance and certification rules.

---

## 5. Core Meta Types

```text
Artifact
    ├── Document
    ├── Standard
    ├── Discovery
    ├── Evidence
    ├── Finding
    ├── Recommendation
    ├── Risk
    ├── Decision
    ├── Review
    ├── Certification
    ├── Command
    ├── Workflow
    ├── Template
    ├── Runtime Component
    ├── Engine
    ├── Agent
    └── Swarm
```

All specialized Framework objects derive from the Artifact concept.

---

## 6. Artifact

An Artifact is any governed Framework object that requires identity, ownership, lifecycle, traceability, and governance.

### Artifact Requirements

Every Artifact shall define:

- Identifier
- Name
- Type
- Purpose
- Owner
- Authority
- Lifecycle Status
- Version
- Created Date
- Last Updated Date
- References

### Artifact Rule

If an object participates in governance, validation, certification, or traceability, it shall be modeled as an Artifact.

---

## 7. Entity

An Entity is an Artifact with identity and lifecycle continuity.

Examples:

- Discovery
- Finding
- Recommendation
- Risk
- Decision
- Engine
- Agent
- Swarm
- Certification Record

Entities may change state while preserving identity.

---

## 8. Relationship

A Relationship defines a governed connection between two or more Artifacts.

Examples:

```text
Discovery produces Finding
Finding supports Recommendation
Recommendation mitigates Risk
Decision approves Architecture
Evidence supports Finding
Certification approves Artifact
```

### Relationship Requirements

Every Relationship shall define:

- Relationship ID
- Source Artifact
- Target Artifact
- Relationship Type
- Direction
- Owner
- Evidence
- Status

---

## 9. Identity

Identity defines how Artifacts are uniquely and permanently referenced.

### Identity Rules

- Identifiers shall be stable after publication.
- Identifiers shall not be reused.
- Deprecated identifiers shall remain reserved.
- Historical identifiers shall not be renumbered.

### Example Identifier Families

```text
FORGE-META-M.0
FORGE-STD-001
DISC-000001
EVID-000001
FIND-000001
REC-000001
RISK-000001
ADR-000001
CERT-000001
```

---

## 10. Lifecycle

Lifecycle defines the allowed states through which an Artifact may progress.

### Generic Artifact Lifecycle

```text
Proposed
    ↓
Draft
    ↓
Review
    ↓
Approved
    ↓
Canonical
    ↓
Maintenance
    ↓
Deprecated
    ↓
Archived
```

Specialized Artifacts may define extended lifecycles, but shall remain compatible with this model.

---

## 11. State

State is the current lifecycle position of an Artifact.

State shall be explicit, current, and traceable.

### State Rules

- State shall not be inferred from conversation.
- State shall be recorded in authoritative documentation or governed storage.
- State transitions shall require evidence.
- Canonical promotion requires review and certification.

---

## 12. Authority

Authority defines who or what may define, approve, interpret, or change an Artifact.

### Authority Chain

```text
Human Governance
        ↓
A.1 Constitution
        ↓
Framework Governance
        ↓
Framework Architecture
        ↓
Standards / Runtime / Validation / Certification
        ↓
Project Implementations
```

No lower authority may override a higher authority.

---

## 13. Ownership

Ownership defines accountable lifecycle responsibility for an Artifact.

### Ownership Rules

- Every Artifact shall have one accountable owner.
- Ownership may delegate execution, but not accountability.
- Ownership changes require governance approval.
- Shared ownership is allowed only as collaboration, not accountability.

---

## 14. Evidence

Evidence is an Artifact that supports a claim, finding, recommendation, decision, validation, review, or certification.

### Evidence Requirements

Evidence shall be:

- Verifiable
- Traceable
- Authentic
- Current
- Linked to the Artifact it supports

---

## 15. Validation

Validation is the governed process of verifying whether an Artifact satisfies defined requirements.

Validation does not create authority.

Validation produces evidence and findings.

---

## 16. Review

Review is the independent assessment of an Artifact's readiness, quality, alignment, and governance compliance.

Review consumes evidence and validation output.

Review may produce recommendations.

---

## 17. Certification

Certification is the governed acceptance of an Artifact after review and validation.

Certification may promote an Artifact into canonical status when allowed by governance.

Certification shall not occur when unresolved constitutional violations exist.

---

## 18. Reference

A Reference is a traceable link to another Artifact or authoritative source.

References may be:

- normative;
- informative;
- historical;
- deprecated;
- external.

Normative references are binding.

Informative references provide context only.

---

## 19. Meta Model Relationship Map

```text
Artifact
    has Identity
    has Owner
    has Authority
    has Lifecycle
    has State
    may have Evidence
    may have Relationships
    may be Validated
    may be Reviewed
    may be Certified
    may Reference other Artifacts
```

---

## 20. Canonical Derivation Model

Standards and architecture documents derive specialized models from M.0.

Examples:

```text
M.0 Artifact
    ↓
STD-001 Discovery

M.0 Artifact
    ↓
STD-002 Finding

M.0 Artifact
    ↓
STD-003 Recommendation

M.0 Artifact
    ↓
STD-004 Risk
```

This prevents each standard from redefining identity, ownership, lifecycle, authority, evidence, and certification independently.

---

## 21. Governance Rules

M.0 may be changed only through Framework Governance.

Any change to M.0 affects all downstream standards and architecture documents.

Breaking changes to the meta model require:

- impact analysis;
- migration guidance;
- governance approval;
- version update;
- affected-document review.

---

## 22. Compliance

A Framework Artifact is compliant with M.0 when it defines:

- identity;
- type;
- owner;
- authority;
- lifecycle status;
- references;
- relationships when applicable;
- evidence when making claims;
- validation and certification expectations when promotion is required.

---

## 23. Anti-Patterns

### Unidentified Artifact

An Artifact exists but has no stable identifier.

### Unowned Artifact

An Artifact exists without an accountable owner.

### Hidden Relationship

A dependency or relationship exists but is not documented.

### State by Assumption

An Artifact's state is inferred from memory or conversation rather than authoritative documentation.

### Certification Without Evidence

An Artifact is promoted without validation or supporting evidence.

### Authority Drift

An Artifact begins redefining authority that belongs to a higher-level document.

---

## 24. Relationship to Standards

The Standards Library consumes M.0.

STD-000 defines how standards are written and governed.

M.0 defines the shared conceptual model used by all standards.

```text
A.1 Constitution
        ↓
M.0 Framework Meta Model
        ↓
STD-000 Standards Framework
        ↓
STD-001+ Individual Standards
```

---

## 25. Relationship to Architecture Documents

Architecture documents consume M.0 when defining Framework objects.

Examples:

- A.4 Framework Architecture consumes Artifact, Relationship, Authority, Ownership.
- A.5 Runtime consumes Entity, Lifecycle, State, Validation.
- A.6 Engine Model consumes Entity, Relationship, Identity, Ownership.
- A.7 Authority Model consumes Authority and Relationship.
- A.8 Ownership Model consumes Ownership and Artifact.

---

## 26. Next Document

The next document should be:

```text
STD-001 — Discovery Standard
```

STD-001 shall derive Discovery from M.0 Artifact and specialize identity, lifecycle, schema, relationships, governance, validation, and certification rules for architectural discoveries.

---

## Completion Statement

M.0 is complete when the Forge AI Framework has a stable meta model for defining governed Artifacts, Entities, Relationships, Identity, Lifecycle, Authority, Ownership, Evidence, Validation, Review, Certification, and References.

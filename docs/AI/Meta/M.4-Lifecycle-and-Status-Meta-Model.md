# M.4 — Lifecycle and Status Meta Model

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.META.LIFECYCLE.M4` |
| Title | M.4 — Lifecycle and Status Meta Model |
| Version | 1.0.0 |
| Status | Non-canonical; Human-Governed approval boundary |
| Classification | Enterprise Lifecycle and Status Semantic Authority |
| Document Type | Meta Model |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | Reusable AI-DOS lifecycle, status-dimension, transition, promotion, deprecation, archival, historical-classification, canonical-status, validation-status, review-status, certification-status, availability-status, and operational-status-binding semantics. |
| Out of Scope | Target Project planning, ProjectStatus, DevelopmentPhases, Roadmap, project schedule, release schedule, runtime state machine implementation, engine lifecycle procedure, agent activation procedure, workflow execution order, approval workflow mechanics, validation tooling, review tooling, certification tooling, evidence taxonomy, version numbering, and compatibility. |

---

## 2. Purpose

M.4 defines reusable semantic meaning for lifecycle and status concepts across AI-DOS.

M.4 defines meanings and invariants only. Downstream Governance, Standards, Runtime, Engines, Agents, Workflows, tools, and domain-specific artifacts define actual assignments, procedures, enforcement, approval mechanics, validation mechanics, review mechanics, certification mechanics, and operational behavior.

M.4 does not claim certification, canonical promotion, or operational activation for itself or for any downstream artifact merely because this document exists.

---

## 3. Authority and Dependency Position

M.4 is an Enterprise Semantic Profile in the Meta family. It consumes:

- M.0 for Semantic Entity, Artifact, Authority, Ownership, Boundary, Constraint, Decision, Validation, and root framework meanings;
- M.1 only where lifecycle binds to artifact families, artifact types, or artifact instances;
- M.2 for identity, stable reference, historical identity, and traceability of lifecycle subjects;
- M.3 for relationship form, endpoints, direction, cardinality, authority effects, and validation principles.

M.4 does not depend on M.6. M.4 owns lifecycle and status semantics; it does not own versioning, lineage, compatibility, evidence taxonomy, implementation, or project planning.

---

## 4. Scope

M.4 owns reusable semantics for:

- Lifecycle Profile;
- Lifecycle State;
- Status Dimension;
- Status Value;
- Transition;
- Transition Eligibility;
- Transition Authority Binding;
- Transition Condition;
- Transition Evidence Requirement Binding;
- Entry Condition;
- Exit Condition;
- Terminal State;
- Reversible Transition;
- Irreversible Transition;
- Exception Transition;
- Promotion;
- Deprecation;
- Archival;
- Historical Classification;
- Canonical Status;
- Validation Status;
- Review Status;
- Certification Status;
- Availability Status;
- Operational Status Binding.

---

## 5. Out of Scope

M.4 explicitly excludes:

- Target Project planning;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- project stages;
- project queues;
- Sprint planning;
- project milestone management;
- project schedule;
- release schedule;
- deployment lifecycle;
- runtime state machine implementation;
- engine lifecycle procedure;
- agent activation procedure;
- workflow execution order;
- approval workflow mechanics;
- validation tooling;
- review tooling;
- certification tooling;
- evidence taxonomy;
- version numbering;
- compatibility.

The existence of lifecycle states does not create Target Project phases.

---

## 6. Core Lifecycle Concepts

| Concept | Semantic Meaning |
|:---|:---|
| Lifecycle Profile | A declared semantic lifecycle model for an entity or artifact type. |
| Lifecycle State | A named condition within a lifecycle profile, such as Proposed, Draft, Active, Deprecated, or Archived when allowed by the profile. |
| Status Dimension | A named axis of status meaning that must remain distinct from other axes. |
| Status Value | A value within one status dimension. |
| Entry Condition | A semantic precondition for entering a state. |
| Exit Condition | A semantic precondition for leaving a state. |
| Terminal State | A state that has no ordinary outbound transition unless an exception rule permits one. |
| Transition | A governed movement from one declared lifecycle state to another in a profile. |
| Transition Eligibility | The semantic condition that a requested transition is permitted to be considered. |
| Transition Evidence Requirement Binding | A binding that states what evidence may be required by downstream authorities; M.4 does not define evidence taxonomy. |
| Promotion | An authority-controlled event that raises semantic standing on a declared axis. |
| Deprecation | A lifecycle effect warning against future consumption without erasing history or identity. |
| Archival | A lifecycle effect preserving traceability while removing current-use standing. |
| Historical Classification | A classification preserving whether something is current, historical, or retained as superseded evidence. |
| Operational Status Binding | A downstream binding from M.4 status semantics into runtime, agent, or engine state domains without making M.4 a runtime state machine. |

---

## 7. Status-Dimension Separation

M.4 requires distinct status axes. A downstream domain must not collapse these dimensions into one `status` field when the semantic distinction matters.

### Status Dimension Matrix

| Axis | Example Values | Owner |
|:---|:---|:---|
| Lifecycle State | Proposed, Draft, Active, Deprecated, Archived | M.4 semantics; family profile supplies allowed values |
| Canonical Status | Non-canonical, Candidate, Canonical | M.4 semantics |
| Validation Status | Not Validated, Passed, Failed, Conditional | M.4 semantics; validation procedure downstream |
| Review Status | Not Reviewed, Under Review, Accepted, Rejected | M.4 semantics; review procedure downstream |
| Certification Status | Not Certified, Candidate, Certified, Revoked | M.4 semantics; certification authority downstream |
| Promotion Status | Not Eligible, Eligible, Promoted, Demoted | M.4 semantics |
| Availability Status | Available, Restricted, Unavailable | M.4 semantics |
| Operational Status | Domain-specific runtime/agent/engine state binding | Downstream specialization consuming M.4 |
| Historical Classification | Current, Historical, Superseded Evidence | M.4 semantics |

---

## 8. Lifecycle Profile Model

A Lifecycle Profile declares how lifecycle semantics apply to a family of subjects. It must declare profile identity, applicable entity or artifact type, allowed states, initial states, terminal states, allowed transitions, transition conditions, transition authority binding, required validation binding, required review binding, required certification binding, reversal rules, exception rules, and historical retention behavior.

M.4 does not prescribe one universal lifecycle.

### Lifecycle Profile Matrix

| Profile Subject | Profile Obligation |
|:---|:---|
| Meta Models | Declare lifecycle states and status dimensions without self-promoting canonicality. |
| Standards | Declare lifecycle states separately from validation, review, and certification statuses. |
| Architecture Specifications | Preserve draft, accepted, historical, and archival distinctions where applicable. |
| RFCs | Bind proposal and acceptance states without turning review into approval. |
| Schemas | Bind lifecycle to schema artifact identity without defining schema syntax. |
| Agent Architecture Artifacts | Bind semantic lifecycle without defining agent activation procedure. |
| Commands | Bind command artifact lifecycle without defining command execution. |
| Workflows | Bind workflow artifact lifecycle without defining workflow execution order. |
| Templates | Bind template lifecycle without defining template content. |
| Evidence and Reports | Bind report lifecycle without defining evidence taxonomy. |
| Registry Entries | Bind entry lifecycle without defining registry implementation. |
| Extensions | Bind extension lifecycle without creating extension namespace ownership. |

---

## 9. Transition Model

A transition is a governed semantic movement from a source state to a target state inside one declared Lifecycle Profile.

### Transition Matrix

| Transition Concept | Required Meaning |
|:---|:---|
| Transition Source | The declared state from which movement begins. |
| Transition Target | The declared state to which movement is requested or decided. |
| Transition Event | The event that initiates, records, or explains the movement. |
| Transition Request | A request to consider the movement; it is not a decision. |
| Transition Decision | The authority-bound decision approving, rejecting, deferring, or conditioning the movement. |
| Transition Requirement | A semantic prerequisite for a valid transition. |
| Transition Prohibition | A semantic rule that prevents a transition. |
| Transition Result | The semantic result after an approved transition is applied. |
| Transition Failure | A rejected, invalid, incomplete, or blocked transition outcome. |
| Transition Reversal | A governed transition that undoes or counteracts a prior transition when permitted. |

Transition invariants:

1. A transition must identify source and target states.
2. A transition must belong to a declared Lifecycle Profile.
3. A transition cannot create authority.
4. Review does not imply approval.
5. Approval does not imply certification.
6. Certification does not automatically imply canonical status.
7. Canonical status does not automatically imply operational activation.
8. Historical classification does not imply deletion.
9. Archival does not erase identity or traceability.
10. Promotion is an authority-controlled event, not an automatic status change.
11. An entity cannot self-approve, self-certify, or self-promote unless an explicit governance model authorizes that role separation safely.
12. Target Project phases must not be represented as AI-DOS Meta lifecycle states.

---

## 10. Transition Authority Bindings

Transition Authority Binding identifies the authority required to decide or recognize a transition. It does not create that authority.

### Transition Authority Matrix

| Binding | Meaning | Prohibition |
|:---|:---|:---|
| Governance Binding | A governance authority is required for the transition decision. | The transition cannot infer governance authority. |
| Validation Binding | Validation must be considered according to downstream validation procedure. | Validation does not imply review, approval, certification, or promotion. |
| Review Binding | Review status may be required before a decision. | Review does not approve by itself. |
| Certification Binding | Certification authority may be required for certification status changes. | Certification does not imply canonicality. |
| Promotion Binding | Promotion authority is required for promoted standing. | Production or publication does not imply promotion. |
| Exception Binding | An exception authority is required for prohibited or unusual transitions. | Exception transitions cannot erase traceability. |

---

## 11. Lifecycle Relationship Bindings

M.4 consumes M.3 relationship semantics and defines lifecycle effects for lifecycle relationships. M.3 remains the owner of general relationship semantics. M.6 owns supersession and version-lineage meaning.

### Lifecycle Relationship Matrix

| Relationship | Lifecycle Effect Owned by M.4 | Boundary |
|:---|:---|:---|
| TRANSITIONS_TO | Records permitted movement between lifecycle states. | Relationship form remains M.3. |
| DEPRECATED_BY | Marks a lifecycle deprecation effect. | Version lineage effect belongs to M.6 when versioned. |
| SUPERSEDED_BY | May change historical classification or current-use standing. | Supersession meaning belongs to M.6. |
| ARCHIVED_AS | Marks archival classification and retention. | Does not delete identity. |
| PROMOTED_TO | Records authority-controlled promotion. | Does not create authority. |
| DEMOTED_TO | Records authority-controlled demotion. | Does not erase history. |
| VALIDATED_BY | Binds validation status to a validating source. | Validation procedure downstream. |
| REVIEWED_BY | Binds review status to a review source. | Review is not approval. |
| CERTIFIED_BY | Binds certification status to a certification source. | Certification authority downstream. |
| GOVERNED_BY | Binds lifecycle decisions to governance authority. | Governance authority not created by the edge. |

---

## 12. Canonicality and Certification Separation

Canonical Status, Certification Status, Review Status, Validation Status, and Promotion Status are separate axes. Certification may support a later canonical decision, but certification does not automatically produce canonical status. Canonical status does not automatically produce operational activation, availability, deployment, or runtime use.

---

## 13. Promotion, Deprecation, and Archival

Promotion is a governed semantic event, not publication, production, validation, review, or certification by another name.

Deprecation warns against future consumption and may redirect consumers to a replacement, successor, or supported alternative. Deprecation preserves identity, history, and traceability.

Archival preserves records for historical, legal, semantic, or traceability reasons. Archival is not deletion and does not erase identity.

---

## 14. Historical Classification

Historical Classification distinguishes current use from retained history. A historical item may remain valid evidence of what was reviewed, accepted, rejected, deprecated, superseded, or archived at a time. Historical classification does not imply deletion, loss of identity, loss of lineage, or loss of traceability.

---

## 15. Downstream Specialization Rules

Downstream domains may define domain-specific profiles, state names, conditions, and procedures if they preserve M.4 semantics. They may specialize but may not redefine lifecycle, status dimensions, transition meaning, promotion, deprecation, archival, or historical classification.

### Downstream Consumer Matrix

| Consumer | Permitted Use | Not Permitted |
|:---|:---|:---|
| Governance | Assign authorities and approval mechanics. | Redefine M.4 status axes. |
| Standards | Define standard-specific profile rules. | Collapse status dimensions. |
| Runtime | Bind operational state to M.4 meanings. | Treat M.4 as runtime implementation. |
| Engines | Bind engine artifact lifecycle. | Define engine procedure in M.4. |
| Agents | Bind agent architecture artifact lifecycle. | Define agent activation procedure in M.4. |
| Commands | Bind command artifact lifecycle. | Define command execution in M.4. |
| Workflows | Bind workflow artifact lifecycle. | Define workflow order in M.4. |
| Templates | Bind template artifact lifecycle. | Define template content in M.4. |

---

## 16. Semantic Invariants

1. Human Governance remains final.
2. Meta defines meanings, not actual authority assignments.
3. Consumption does not create ownership.
4. Production does not imply approval.
5. Validation does not imply review.
6. Review does not imply certification.
7. Certification does not imply canonical promotion.
8. Version does not imply status.
9. Status does not imply authority.
10. Canonicality does not imply runtime activation.
11. Supersession does not destroy historical evidence.
12. Representation or file path does not define identity.
13. Target Project planning is outside AI-DOS Meta ownership.
14. Downstream domains may specialize but may not redefine Meta semantics.

---

## 17. Boundary Rules

### Semantic Ownership Matrix

| Concern | Owner |
|:---|:---|
| Framework root meanings | M.0 |
| Artifact bindings | M.1 |
| Identity | M.2 |
| Relationship form | M.3 |
| Lifecycle and status semantics | M.4 |
| Evidence semantics | Deferred to M.5 |
| Versioning and supersession | M.6 |
| Compatibility | Deferred to M.7 |

### Lifecycle / Version Boundary Matrix

| Concern | M.4 Role | M.6 Role |
|:---|:---|:---|
| Deprecation | Defines lifecycle/status effect. | Defines version-lineage effect when versioned. |
| Supersession | Defines lifecycle/historical classification effect. | Defines supersession meaning and lineage. |
| Version promotion | Defines promotion status semantics. | Defines version-reference effect. |
| Version number | No ownership. | Owns version semantics. |

---

## 18. Consumer Matrix

| Consumer Class | M.4 Consumption Requirement |
|:---|:---|
| Artifact-producing domains | Use M.4 when assigning lifecycle or status dimensions. |
| Validation domains | Preserve validation status as separate from review and certification. |
| Review domains | Preserve review status as separate from approval and certification. |
| Certification domains | Preserve certification status as separate from canonical status. |
| Operational domains | Bind operational states explicitly rather than redefining lifecycle semantics. |

---

## 19. Validation Assertions

### Validation Matrix

| Assertion | Expected Result |
|:---|:---|
| M.4 does not depend on M.6. | Pass. |
| Lifecycle State, Canonical Status, Validation Status, Review Status, Certification Status, Promotion Status, Availability Status, Operational Status, and Historical Classification remain separate axes. | Pass. |
| Transition semantics require source, target, profile, and authority binding where applicable. | Pass. |
| Target Project planning terms are prohibited except as explicit out-of-scope boundaries. | Pass. |
| M.4 does not define version numbering or compatibility. | Pass. |

---

## 20. Information Preservation

### Information Preservation Matrix

| Information | Preservation Rule |
|:---|:---|
| Identity | Lifecycle transitions do not erase identity. |
| Traceability | Transition decisions, failures, reversals, exceptions, deprecations, and archival classifications remain traceable. |
| Historical classification | Historical status preserves prior standing and does not imply deletion. |
| Relationships | Lifecycle relationships preserve M.3 endpoint and relationship semantics. |
| Evidence bindings | Evidence requirement bindings are preserved without defining evidence taxonomy. |

---

## 21. Completion Status

AI-DOS M.4 LIFECYCLE AND STATUS META MODEL DEFINED.

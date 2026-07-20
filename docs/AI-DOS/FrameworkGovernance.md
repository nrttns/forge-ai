# AI-DOS Framework Governance

> Governance decision policy · Lifecycle control · Approval and escalation

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.GOVERNANCE.POLICY` |
| Title | AI-DOS Framework Governance |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Governance Policy |
| Document Type | Governance Decision Policy |
| Owner | Framework Governance |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | Human Governance; `docs/AI/Architecture/Constitution/A.1-Constitution.md` |
| Normative References | `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Project-Operational-Boundary-RFC.md`; applicable Meta Models and Standards |
| Dependencies | A.1 Constitution, A.2 Product / Target Operational Boundary, Governance Atlas navigation |
| Produces | Governance decision rules, lifecycle gates, approval policy, release policy, exception policy, escalation policy |
| Certification Status | Not certified |

## 1. Purpose

This document defines how AI-DOS governance decisions are made, reviewed, approved, recorded, promoted, released, excepted, and escalated.

It is policy, not navigation. Use `docs/AI/GOVERNANCE.md` to locate authority and ownership. Use this document after the relevant authority has been identified and a governance decision is required.

This document shall not redefine:

- the A.1 Constitution;
- the A.2 Product / Target boundary;
- Runtime, Engine Platform, Engine Specializations, or Distribution architecture;
- Target Project truth;
- System Layer resolution behavior;
- Operational Core execution behavior;
- command, workflow, or template semantics.

## 2. Governance Policy Boundary

Framework Governance owns:

- decision classification;
- decision priority;
- lifecycle gates;
- review and approval policy;
- certification policy;
- canonical-promotion policy;
- release-authorization policy;
- ownership-conflict handling;
- exception handling;
- change control;
- decision recording;
- escalation policy.

Framework Governance does not own:

- repository navigation or authority inventory;
- AI-DOS product architecture;
- Target Project planning or operational state;
- release artifact assembly or installation mechanics;
- execution authorization for a specific task;
- provider capability;
- implementation details.

## 3. Authority Basis

Governance decisions consume the canonical architecture graph:

```text
Human Governance
    ↓
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation
```

Policy rules:

1. Human Governance is final.
2. A lower authority may refine only its owned domain.
3. A peer authority may not override another peer.
4. A.6 is a sibling branch to A.3–A.5, not their downstream implementation.
5. A.4.x documents are sibling foundation contracts under A.4.
6. A.5.x documents are capability peers; numbering does not create execution or authority order.
7. A.0 and reports are evidence unless explicitly promoted.
8. Navigation, availability, compatibility, installation, completion, or continuation intent does not create mutation authority.

## 4. Product and Target Governance

AI-DOS and Target Projects remain separate governance domains.

| Domain | Owner | Policy |
|:---|:---|:---|
| AI-DOS product truth | AI-DOS product authority | May change only through governed product evolution. |
| Released AI-DOS truth | Release authority for the exact version and channel | Immutable for that release identity. |
| Private development truth | AI-DOS development governance | Shall not enter a release implicitly. |
| Target Project truth | Target Project authority | Shall not be absorbed into reusable AI-DOS truth. |
| Target operational state | Target Project authority | Shall not be mutated by AI-DOS by inference. |
| Provider state | Execution Provider | Does not create product or Target authority. |

Forge AI is the Product Development Target Project for AI-DOS. Forge AI owns its own ProjectStatus, DevelopmentPhases, Roadmap, source state, evidence, memory, workflow state, registry state, local configuration, and protected areas. Those artifacts are not AI-DOS product truth and shall not be required by independent Targets.

## 5. Decision Classification

Every governance decision shall be classified before action.

| Decision Class | Examples | Primary Authority |
|:---|:---|:---|
| Constitutional | Amend permanent principles or invariants | Human Governance / A.1 |
| Architectural | Change A.2–A.6 contracts or ownership | Applicable RFC authority plus Human Governance |
| Policy | Change lifecycle, approval, promotion, release, exception, or escalation rules | Framework Governance plus Human Governance |
| Standard | Change terminology, metadata, or cross-document rules | Applicable Standard authority |
| Product evolution | Change reusable AI-DOS product behavior or public contracts | Product authority plus Human Governance |
| Distribution | Authorize release scope, version, channel, provenance, or compatibility policy | A.6 plus Human Governance |
| Target | Change Target mission, planning, state, constraints, or protected boundaries | Target authority / Human Governance |
| Operational | Execute a bounded task under an Execution Contract | Operational Core and applicable Target authority |
| Exception | Deviate from an existing rule in a bounded scope | Human Governance |

Unclassified decisions shall safe-stop.

## 6. Decision Priority

When two instructions conflict, apply:

```text
Human Governance
    ↓
A.1 Constitution
    ↓
Applicable A.2–A.6 Architecture Authority
    ↓
Applicable Meta Models and Standards
    ↓
Explicit Target Authority and Resolved Target Context
    ↓
Operational Contracts
    ↓
Implementation Preference
```

The Governance Atlas identifies the relevant authorities but does not outrank them.

## 7. Lifecycle Policy

A governed artifact or decision may pass through:

```text
Draft
    ↓
Review
    ↓
Validation
    ↓
Certification Decision when applicable
    ↓
Human Governance Approval when required
    ↓
Canonical Promotion or Release when explicitly authorized
```

No state implies a later state:

- completion is not validation;
- validation is not review;
- review is not certification;
- certification is not approval;
- approval is not canonical promotion unless explicitly stated;
- merge is not approval;
- publication is not release authorization;
- installation is not execution authorization;
- continuation intent is not lifecycle-transition authority.

## 8. Review and Validation Policy

Review determines whether an artifact or change is coherent, within scope, and suitable for its declared purpose.

Validation determines whether it conforms to required authority, standards, ownership, paths, metadata, compatibility, integrity, and protected boundaries.

Review and validation shall record:

- scope;
- authority set;
- evidence;
- findings;
- unresolved risks;
- outcome;
- recommended next gate.

A reviewer or validator shall not silently convert findings into approval, correction authority, certification, promotion, release, or Target-state mutation.

## 9. Certification Policy

Certification is an explicit governed quality decision.

Certification requires:

- defined certification criteria;
- completed validation evidence;
- completed review evidence;
- no unresolved blocking finding;
- identified certification authority;
- recorded certification outcome.

Certification does not make an artifact canonical and does not authorize release unless the approving decision explicitly says so.

AI may prepare certification evidence and recommendations but shall not self-certify.

## 10. Approval Policy

Approval is an explicit Human Governance or explicitly delegated decision.

An approval decision shall identify:

- exact artifact, change, release, exception, or transition;
- approved scope;
- authority basis;
- evidence considered;
- conditions and exclusions;
- resulting lifecycle effect;
- permitted follow-up.

Approval does not authorize adjacent work by implication.

Semantic approval intent may authorize only the uniquely derivable decision supported by current evidence and authority. If more than one valid transition exists, approval routing shall safe-stop.

## 11. Canonical Promotion Policy

Canonical promotion changes an artifact from non-canonical to binding product authority.

Promotion requires:

1. exact artifact identity and version;
2. correct owner and approval authority;
3. completed review and validation evidence;
4. resolved blocking findings;
5. explicit Human Governance authorization;
6. required metadata and navigation updates;
7. recorded supersession impact where applicable.

Merge, completion, review, validation, certification, or repository presence does not equal canonical promotion.

## 12. Release Governance

Release is governed product publication under A.6.

A release decision shall identify:

- product version;
- release channel;
- included product truth;
- excluded private development and Target truth;
- manifest and provenance expectations;
- integrity expectations;
- compatibility declaration;
- rollback and uninstall policy;
- approving authority.

Release authorization does not authorize installation, execution, Target mutation, or provider activation unless separately authorized.

No Forge AI ProjectStatus, DevelopmentPhases, Roadmap, private source state, evidence, memory, workflow state, registry state, local configuration, or protected-area data may enter a release by implication.

## 13. Change Control

| Change Class | Meaning | Required Handling |
|:---|:---|:---|
| Clarification | Wording improvement without authority or behavior change | Review and validate within current owner scope. |
| Policy refactor | Structural improvement preserving policy meaning | Framework Governance review. |
| Policy change | Changes decision, lifecycle, approval, release, exception, or escalation behavior | Human Governance approval. |
| Architecture change | Changes A.2–A.6 contracts or ownership | Applicable RFC process and Human Governance approval. |
| Product change | Changes reusable AI-DOS product truth | Governed product-evolution process. |
| Distribution change | Changes package, release, compatibility, provenance, or channel policy | A.6 governance and Human Governance approval. |
| Target change | Changes Target-owned truth or operational state | Target authority and explicit mutation authorization. |
| Protected-boundary change | Crosses an explicitly protected boundary | Safe stop unless Human Governance explicitly authorizes it. |

## 14. Ownership Policy

1. Every governed domain shall have one canonical owner.
2. Ownership is limited to the declared domain.
3. Navigation does not create ownership.
4. Consumption does not create ownership.
5. Registry presence does not create ownership.
6. Capability availability does not create ownership.
7. Distribution does not transfer Target ownership to AI-DOS.
8. Installation does not transfer AI-DOS product ownership to a Target.
9. Duplicate ownership claims shall be resolved before dependent work proceeds.
10. Ownership gaps shall be escalated rather than filled by assumption.

Use `docs/AI/GOVERNANCE.md` to locate ownership. Use this policy to resolve ownership conflicts.

## 15. Mutation and State-Transition Policy

Repository or Target mutation requires an explicit bounded authority basis.

A valid mutation basis shall identify:

- objective;
- exact scope;
- affected owner;
- permitted files or resources;
- protected boundaries;
- validation requirements;
- completion condition;
- authorized execution participant or provider.

Continuation, progress, availability, capability discovery, installation, validation success, review passage, or task completion does not automatically authorize:

- ProjectStatus update;
- DevelopmentPhases change;
- Roadmap change;
- lifecycle transition;
- certification;
- promotion;
- release;
- provider activation.

Without exact authorization, produce only a recommendation.

## 16. Exception Policy

Only Human Governance may grant a governance exception unless a specific delegated authority is recorded.

An exception shall be:

- explicit;
- narrow;
- traceable;
- time-bounded or condition-bounded when possible;
- limited to named artifacts, actions, or decisions;
- accompanied by risk and validation requirements.

An exception does not alter general policy and does not imply certification, promotion, release, Target mutation, or protected-boundary activation unless explicitly stated.

## 17. Decision Record Policy

Record governance decisions that affect:

- authority;
- ownership;
- lifecycle state;
- certification;
- approval;
- canonical promotion;
- release;
- exception;
- Target boundary;
- protected boundary;
- product evolution.

A decision record should include:

- identifier and date;
- decision authority;
- affected scope;
- decision class;
- authority basis;
- evidence;
- outcome;
- rationale;
- conditions;
- lifecycle, release, or Target effects;
- follow-up actions;
- unresolved risks.

Recommendations shall be distinguishable from approved decisions.

## 18. Conflict Resolution

Conflict types include:

- authority conflict;
- ownership conflict;
- scope conflict;
- product/Target truth conflict;
- lifecycle conflict;
- release conflict;
- metadata or navigation conflict;
- provider capability conflict.

Resolution procedure:

1. classify the conflict;
2. identify canonical owners through the Governance Atlas;
3. apply the decision priority in this policy;
4. preserve the higher authority within its domain;
5. remove out-of-scope interpretations;
6. safe-stop when the result is not unique;
7. escalate unresolved conflicts to Human Governance.

## 19. Safe-Stop and Escalation Policy

Stop and escalate when:

- required authority is missing or inaccessible;
- two artifacts claim the same domain;
- product truth and Target truth cannot be separated;
- mutation authority is absent or ambiguous;
- release scope, provenance, integrity, or compatibility is unclear;
- a protected boundary would be crossed;
- more than one valid approval or lifecycle transition exists;
- a lower artifact would redefine a higher authority;
- an external Target would require Forge AI-specific paths or assumptions;
- provider capability is insufficient or unverified.

A safe-stop report shall state the blocker, affected scope, authority involved, evidence, and bounded resolution options.

## 20. AI Governance Rules

AI execution participants may:

- classify governance decisions;
- inspect authority and ownership;
- draft policy changes;
- validate conformance;
- review evidence;
- identify conflicts;
- recommend decisions and follow-up.

AI execution participants shall not:

- create constitutional authority;
- approve, certify, promote, or release by implication;
- mutate Target-owned truth without explicit authorization;
- grant exceptions;
- silently resolve non-unique conflicts;
- treat A.4.x or A.5.x numbering as execution order;
- treat A.6 as downstream of Runtime;
- use Forge AI as fallback Target truth;
- treat installation or capability availability as execution authorization.

## 21. Governance Metrics

Governance quality is evaluated through:

- authority consistency;
- ownership singularity;
- product/Target purity;
- lifecycle-state clarity;
- decision traceability;
- review and validation completeness;
- release-boundary clarity;
- exception containment;
- safe-stop correctness;
- absence of obsolete paths and models.

Metrics are evidence. They do not approve, certify, promote, or release.

## 22. Relationship to the Governance Atlas

`docs/AI/GOVERNANCE.md` owns:

- governance navigation;
- authority mapping;
- ownership mapping;
- architecture and operational routing;
- truth-domain inventory;
- escalation entry points.

This document owns:

- decision policy;
- lifecycle and gate policy;
- approval, certification, promotion, and release policy;
- change control;
- exception policy;
- conflict resolution;
- decision recording.

Neither document shall duplicate the other's detailed responsibility.

## 23. Completion Criteria

A governance-policy task is complete when:

- the relevant authority and owner are identified;
- product and Target truth remain separated;
- the decision class is recorded;
- lifecycle effects are explicit;
- mutation, promotion, or release authority is explicit when applicable;
- evidence and validation are recorded;
- unresolved ambiguity is safe-stopped;
- recommendations are not presented as approvals.

## 24. Version History

| Version | Context | Notes |
|:---|:---|:---|
| pre-1.0 | Historical | Earlier policy mixed navigation, boot sequence, Target resolution, frozen areas, and operational compatibility into governance policy. |
| `1.0.0-draft` | Draft | Rebased as the dedicated AI-DOS governance decision policy aligned with A.1–A.6, Product/Target separation, Distribution governance, Operational Core boundaries, and Forge AI as Product Development Target Project. |

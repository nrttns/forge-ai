#AI-DOS — Governance Policy v2

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-FRAMEWORK-GOVERNANCE` |
| Title |AI-DOS — Governance Policy v2 |
| Version | 0.3.0-draft |
| Context | Draft |
| Canonical Context | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Governance Policy |
| Document Type | Framework Governance Decision Policy |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS-FRAMEWORK-GOVERNANCE` |
| Scope | Governance policy for principles, lifecycle, decision authority order, ownership, review, validation, certification, canonical review, approval, promotion, change control, conflict resolution, exceptions, metrics, AI execution, and escalation decisions. |
| Out of Scope | Repository governance navigation, authority matrices, document taxonomy, Target Context replacement, Target Constraints replacement, constitutional redefinition, standards redefinition, Runtime redesign, Engine redesign, Engine RFC work, implementation task preparation, operational-layer refactor, legacy migration, and protected-boundary activation. |
| Normative Authority | Human Governance; Target invocation contract; `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md` when applicable. |
| Normative References | `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; Invocation Context and Resolved Target Context. |
| Dependencies | Governance Atlas v2 navigation; repository boot sequence; Resolved Target Context; Target Constraints; constitutional principles; applicable approved standards; applicable approved architecture. |
| Consumes | Governance Atlas routing, Resolved Target Context, Applicable Target Resources and Target Constraints, constitutional constraints, standards requirements, and Human Governance instructions. |
| Produces | Governance policy, decision lifecycle rules, decision authority order rules, ownership rules, approval gates, promotion policy, decision record policy, conflict-resolution policy, exception policy, governance metrics, AI execution rules, and escalation policy. |
| Related Specifications | Governance Atlas v2; Target invocation contract bootloader; A.1 Constitution; STD-000; STD-003; STD-010; Resolved Target Context; Applicable Target Resources. |
| Supersedes | Previous Framework Governance draft policy text and duplicated navigation-oriented governance content. |
| Superseded By | None |
| Promotion Requirements | Framework Governance review; Human Governance review; validation against Governance Atlas v2 navigation boundaries, Resolved Target Context policy, Target Constraints, protected-boundary constraints, constitutional constraints, standards requirements, and STD-010 metadata requirements; explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

This document is the AI-DOS governance-policy authority. It defines how governance decisions are prioritized, reviewed, validated, certified, approved, promoted, recorded, escalated, and evolved.

This document preserves the current governance model. It clarifies and expands policy without redesigning Governance Atlas navigation, Runtime architecture, Engine architecture, Resolved Target Context, Applicable Target Resources, standards, or implementation behavior.

This document shall be used when a task requires governance decision policy, including:

- governance principles;
- decision authority order;
- ownership interpretation;
- review, validation, certification, canonical review, approval, and promotion gates;
- change control;
- Resolved Target Context policy interpretation;
- protected-boundary policy interpretation;
- conflict resolution;
- exception handling;
- AI execution boundaries;
- completion-report expectations.

This document shall not be used as the repository navigation map or Target Repository resolver. Use TargetRepositoryResolution for Target Repository identification and declaration resolution, BootSequence for loaded context, and `docs/AI/GOVERNANCE.md` as the Governance Atlas and navigation authority after context is loaded.

---

## 2. Scope and Boundaries

### 2.1 In Scope

This policy governs:

1. Governance principles.
2. Governance lifecycle expectations.
3. Governance decision lifecycle expectations.
4. Decision priority.
5. Ownership policy.
6. Review and approval policy.
7. Approval gates.
8. Canonical promotion policy.
9. Decision record policy.
10. Change control.
11. Resolved Target Context policy boundaries.
12. Frozen-area policy boundaries.
13. Conflict resolution.
14. Exception handling.
15. Governance metrics.
16. Governance evolution.
17. AI execution rules.
18. Completion-report expectations.
19. Escalation policy.

### 2.2 Out of Scope

This policy does not:

1. Replace or duplicate Governance Atlas navigation.
2. Replace or modify Target resources.
3. Replace or update Applicable Target Resources.
4. Redefine the Constitution.
5. Redefine standards.
6. Redesign Runtime architecture.
7. Redesign Engine architecture or Engine RFCs.
8. Redesign AGENTS architecture.
9. Authorize implementation.
10. Activate protected boundaries.
11. Promote, certify, or canonicalize itself.

---

## 3. Governance Roles

| Role | Responsibility | Boundary |
|:---|:---|:---|
| Human Governance | Final decision, approval, promotion, exception, and conflict authority. | May approve governance changes; receives escalations when authority, scope, ownership, AI-DOS artifact lifecycle status, or promotion authority is unclear. |
| Framework Governance | Maintains governance policy and reviews governance consistency. | Does not override Human Governance or redefine canonical architecture outside approved scope. |
| Governance Atlas v2 | Provides repository governance navigation, authority mapping, ownership mapping, dependency mapping, taxonomy, and AI consumption guidance. | Navigation authority only; it does not replace the documents it maps and does not duplicate this policy. |
| AI-DOS Provider root Target invocation contract | Starts Framework boot and routes to TargetRepositoryResolution. | Provider entry only; it does not resolve Target Project resources, validate Target declarations, or produce the BootSequence handoff result. |
| Target Repository root Target invocation contract | Declares Target Project resources, authority order, validation context, protection context, and AI-DOS Provider reference. | Declaration contract only; TargetRepositoryResolution reads and validates it. |
| TargetRepositoryResolution | Identifies the active Target Repository, discovers Target invocation contracts, resolves project resources, validates declarations, reports blockers, produces the Resolution Result, and hands off to BootSequence. | System Layer resolution authority only; it does not execute operational tasks. |
| BootSequence | Loads resolved Framework + Target Project context from the TargetRepositoryResolution result. | Context-loading authority only; it does not rediscover the Target Repository or validate declarations. |
| Constitution | Defines constitutional principles and invariants where applicable. | Constitutional authority only; this policy consumes it and shall not redefine it. |
| Standards | Define cross-document consistency requirements within each standard's scope. | Standards authority only; this policy consumes applicable standards and shall not redefine their technical requirements. |
| Resolved Target Context | Records applicable objectives, constraints, protected boundaries, allowed actions, prohibited actions, stop conditions, and validation expectations. | Invocation context only; it does not redefine architecture, promote documents, supersede standards, or bypass Target Constraints. |
| Applicable Target Resources | Provides task-relevant Target resources without prescribed category or format. | Resource input only; it does not replace Resolved Target Context or AI-DOS authority. |
| AI Agents | Execute directed tasks, draft artifacts, validate, and recommend next steps. | Must not approve, certify, promote, unfreeze, silently resolve authority conflicts, or modify Target resources without authorization. |

---

## 4. Governance Principles

AI-DOS governance follows these permanent principles:

1. **Human authority is final.** Human Governance is the final authority for approval, promotion, exceptions, and unresolved conflicts.
2. **Policy is separate from navigation.** Governance Atlas routes readers to authorities; this document defines governance decision policy.
3. **Authority is explicit.** No artifact, role, review, or task receives authority by implication.
4. **Ownership is explicit.** Every governed artifact must identify an owner, maintainers, review authority, and approval authority when required by metadata rules.
5. **Lower authority consumes higher authority.** Lower-level artifacts may refine only within their scope and shall not redefine, bypass, or contradict higher authority.
6. **Lifecycle state is not approval.** Draft, reviewed, validated, certified, or canonical-review-ready states do not equal Human Governance approval.
7. **Promotion is explicit.** No document becomes canonical through completion, merge, review, validation, certification, or canonical review alone.
8. **Target-provided constraints are respected when supplied.** Governance decisions shall not override Target Constraints unless Human Governance explicitly authorizes the exception.
9. **Resolved context is protected.** Resolved Target Context shall not be updated by ordinary governance, documentation, review, RFC, or implementation tasks.
10. **Protected boundaries remain frozen.** Protected boundaries remain inactive until explicitly activated by Human Governance and reflected through authorized resolved-context handling.
11. **Documentation precedes implementation.** Governance, architecture, standards, and lifecycle decisions must be clear before implementation begins.
12. **Traceability is mandatory.** Governance decisions should be traceable to authority, scope, rationale, validation evidence, and approval state.
13. **AI is an execution participant.** AI may draft, validate, report, and recommend, but shall not approve, certify, promote, or silently resolve authority conflicts.
14. **Long-term maintainability outranks convenience.** Local convenience shall not override governance consistency, authority clarity, metadata quality, or Target Constraints discipline.

---

## 5. Decision Priority

When governance decisions conflict or trade off, apply this authority order:

```text
Human Governance
    ↓
Repository boot sequence and task instructions
    ↓
Governance Atlas routing
    ↓
Constitutional and approved architecture authority
    ↓
Standards and metadata requirements
    ↓
Resolved Target Context and protected-boundary constraints
    ↓
Target Constraints
    ↓
Domain document requirements
    ↓
Implementation convenience or optimization
```

Implementation convenience and optimization never override governance, architecture, standards, Resolved Target Context, Target Constraints, or protected-boundary constraints.

---

## 6. Governance Lifecycle

Governed artifacts and governance-policy work move through the following lifecycle unless a more specific approved process applies:

```text
Draft
  ↓
Review
  ↓
Validation
  ↓
Certification Review
  ↓
Canonical Review
  ↓
Human Governance
  ↓
Canonical Promotion
```

### 6.1 Draft

Draft is the working state. Draft artifacts may be incomplete, non-canonical, and uncertified. Draft context does not authorize downstream implementation or operational activation unless another authority explicitly allows it.

### 6.2 Review

Review evaluates whether an artifact is coherent, complete enough for its stated purpose, aligned with assigned scope, and ready for deeper validation.

### 6.3 Validation

Validation checks conformance to required authorities, metadata, standards, Target Execution Boundaries, Target Constraints, protected-boundary policy, and task instructions.

### 6.4 Certification Review

Certification Review evaluates whether the artifact has enough evidence, consistency, traceability, and quality to be considered for a certified state. Passing Certification Review is not certification unless the authorized certification authority explicitly records that context.

### 6.5 Canonical Review

Canonical Review evaluates whether the artifact is ready to be considered for canonical context. Passing Canonical Review is not canonical promotion.

### 6.6 Human Governance

Human Governance decides whether to approve, defer, reject, request revisions, authorize exceptions, or authorize promotion.

### 6.7 Canonical Promotion

Canonical Promotion is the explicit lifecycle transition that makes an artifact canonical. It requires Human Governance authorization and any required metadata, context, and traceability updates.

---

## 7. Governance Decision Lifecycle

Governance decisions follow this lifecycle:

1. **Trigger.** A task, review finding, authority conflict, Target Constraints question, ownership issue, exception request, or promotion request creates a decision need.
2. **Classification.** The decision is classified by type, affected authority, affected scope, AI-DOS artifact lifecycle status, and risk.
3. **Authority identification.** Governance Atlas routing and document metadata identify the relevant authority chain.
4. **Evidence collection.** The decision gathers relevant document citations, validation findings, review outcomes, Target constraint context, Resolved Target Context, and known risks.
5. **Policy evaluation.** This document is applied to determine priority, ownership handling, approval gates, conflict handling, exception handling, and escalation needs.
6. **Recommendation.** Execution participants may recommend an outcome but shall not imply approval.
7. **Review or escalation.** The decision proceeds to the appropriate review body or escalates to Human Governance when required.
8. **Human Governance decision when required.** Human Governance approves, rejects, defers, requests revisions, grants an exception, or authorizes promotion.
9. **Decision recording.** The outcome is recorded with scope, authority, rationale, evidence, and lifecycle effects.
10. **Follow-up.** Approved follow-up actions are executed within scope and validated.

---

## 8. Ownership Policy

Every governed artifact, subsystem, standard, RFC, policy, review, or operational document must have a clear owner.

Ownership policy:

1. A document owns only the domain stated in its metadata and body.
2. A document shall not claim ownership over a domain owned by a higher authority or peer authority unless explicitly authorized.
3. Lower-level documents may refine higher-level authority only within their assigned scope.
4. Lower-level documents may not redefine, bypass, or silently contradict higher authority.
5. Ownership duplication must be resolved by the applicable authority chain or escalated to Human Governance.
6. Ownership gaps must be reported before affected work proceeds.
7. Governance Atlas should be used to locate ownership; this document should be used to decide how ownership conflicts are handled.

---

## 9. Review and Approval Policy

Review and approval are separate governance events.

- **Validation** checks whether an artifact satisfies required standards, authorities, Target Constraints, Target Constraints, protected-boundary policy, and task instructions.
- **Review** evaluates whether the artifact is acceptable for its stated purpose and scope.
- **Approval** is a Human Governance or explicitly delegated governance decision that allows a document or change to proceed within a defined scope.
- **Certification** is an explicit quality state and must not be implied by completion, review, validation, merge, or publication alone.
- **Promotion** is an explicit lifecycle change and must not be performed by AI unless Human Governance directly instructs it.

A completion report may recommend review, approval, certification, promotion, or Target resource modifications, but it must not claim those outcomes occurred unless the authorized authority has explicitly approved them.

---

## 10. Approval Gates

AI-DOS governance recognizes the following approval gates:

| Gate | Purpose | Outcome Boundary |
|:---|:---|:---|
| Review | Determine whether the artifact is coherent, in scope, and suitable for its stated purpose. | Review passage does not validate, certify, approve, or promote the artifact. |
| Validation | Determine whether the artifact conforms to required authorities, standards, metadata, Target Constraints, Resolved Target Context, protected-boundary policy, and task instructions. | Validation passage does not certify, approve, or promote the artifact. |
| Certification | Determine whether the artifact satisfies the applicable certification quality criteria. | Certification does not make the artifact canonical unless Human Governance separately authorizes promotion. |
| Canonical Review | Determine whether the artifact is ready for canonical consideration. | Passing Canonical Review does not promote the artifact. |
| Human Governance Approval | Authorize approval, exception, or promotion within an explicit scope. | Only the approved scope is authorized; unapproved adjacent work remains out of scope. |

Approval gates shall be recorded distinctly. A later gate shall not be inferred from an earlier gate.

---

## 11. Canonical Promotion Policy

Canonical promotion is the explicit transition from non-canonical or draft context into canonical context.

Promotion policy:

1. Passing Review does not equal promotion.
2. Passing Validation does not equal promotion.
3. Passing Certification Review does not equal promotion.
4. Passing Certification does not equal promotion.
5. Passing Canonical Review does not equal promotion.
6. Merge, publication, completion, or inclusion in a repository does not equal promotion.
7. Only Human Governance may authorize canonical promotion unless Human Governance has explicitly delegated that authority for a specific case.
8. Promotion must identify the exact artifact, version, scope, authority basis, approval evidence, and required metadata/context changes.
9. Promotion shall not modify Target resources unless explicitly authorized through the appropriate Resolved Target Context policy path.
10. Promotion shall not activate protected boundaries unless Human Governance explicitly authorizes that activation and required resolved-context handling.

Canonical promotion requires all of the following unless Human Governance records an exception:

- correct authority chain identified;
- ownership and approval authority verified;
- metadata validated against STD-010 requirements;
- relevant standards validated;
- Target Constraints and Resolved Target Context alignment confirmed;
- protected-boundary impact assessed;
- review evidence recorded;
- validation evidence recorded;
- certification or certification-review state clearly stated where applicable;
- Canonical Review outcome clearly stated where applicable;
- Human Governance authorization recorded.

---

## 12. Decision Record Policy

Governance decisions should be recorded when they affect authority, ownership, AI-DOS artifact lifecycle status, promotion, exceptions, Target Constraints interpretation, Resolved Target Context interpretation, protected-boundary handling, or policy evolution.

A decision record should include:

1. Decision identifier or traceability reference.
2. Date of decision.
3. Decision owner or deciding authority.
4. Affected artifact, scope, or domain.
5. Decision type.
6. Authority chain used.
7. Evidence reviewed.
8. Decision outcome.
9. Rationale.
10. Constraints or conditions.
11. Lifecycle effect, if any.
12. Resolved Target Context effect, if any.
13. Frozen-area effect, if any.
14. Follow-up actions.
15. Open risks or unresolved observations.

Decision records shall distinguish recommendations from approved decisions. AI-generated reports may propose decision-record content, but they shall not represent a recommendation as an approved decision.

---

## 13. Change Control Policy

Classify governance-relevant changes before execution:

| Change Class | Description | Required Handling |
|:---|:---|:---|
| Clarification | Improves wording without changing authority, ownership, process, Target Constraints, AI-DOS artifact lifecycle status, or scope. | Validate against current authorities and report. |
| Policy Refactor | Improves policy completeness, consistency, maintainability, or structure while preserving the governance model. | Requires authority validation, overlap validation, STD-010 validation if metadata changes, and completion reporting. |
| Policy Change | Changes governance decision rules, ownership, review, approval, promotion, exception, conflict-resolution, or escalation behavior. | Requires Framework Governance review and Human Governance approval before canonical use. |
| Architectural Change | Changes architecture, semantics, standards, runtime, engine platform, engine specialization, or operational design. | Use Governance Atlas routing to identify required architecture authorities and approval path. |
| Target Context Change | Changes Target objectives, constraints, execution boundaries, validation requirements, or protected boundaries. | Must be performed only through an authorized Resolved Target Context / TargetResourceUpdater task or explicit Human Governance instruction. |
| Protected-Boundary Change | Affects protected boundaries listed in Resolved Target Context. | Stop and escalate unless Human Governance explicitly authorizes the scope. |

---

## 14. Resolved Target Context Policy

Resolved Target Context is the resolved invocation input for Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, Target Validation Requirements, protected boundaries, and applicable evidence.

Rules:

1. Do not modify Resolved Target Context during ordinary governance, documentation, RFC, review, or implementation work.
2. Modify Resolved Target Context only when Human Governance explicitly requests it or the active task is a dedicated Resolved Target Context / TargetResourceUpdater task.
3. Do not use Resolved Target Context to redefine architecture, promote documents, supersede standards, or bypass the Target Constraints.
4. Do not treat completed work in Resolved Target Context as certification, approval, promotion, implementation authorization, or protected-boundary activation unless explicitly stated by the authorized authority.
5. Completion reports may recommend specific Target resource modifications for Human Governance consideration.

---

## 15. Protected-Boundary Policy

Protected boundaries are defined by Resolved Target Context and must be checked before execution.

Unless explicitly authorized by Human Governance, do not modify, move, activate, or implement work in protected boundaries, including:

- Legacy Migration;
- RC2 relocation;
- AI Operational Layer alignment;
- Platform Adapters;
- Multi-Agent Runtime;
- Swarm Runtime.

If a task boundary could affect a frozen area, stop and escalate before editing.

---

## 16. Governance Conflict Resolution

Governance conflicts must be classified before resolution.

### 16.1 Authority Conflicts

An authority conflict occurs when two or more authorities appear to give incompatible instructions.

Resolution policy:

1. Apply the decision authority order in this document.
2. Confirm Governance Atlas routing.
3. Confirm each document's metadata scope and authority.
4. Prefer the higher authority within its stated domain.
5. Escalate to Human Governance when the conflict cannot be resolved by explicit authority.

### 16.2 Ownership Conflicts

An ownership conflict occurs when two or more artifacts claim the same governed domain or when no owner is clear.

Resolution policy:

1. Identify claimed ownership from metadata and body text.
2. Determine whether one claim is higher authority or more domain-specific.
3. Do not duplicate ownership to avoid conflict.
4. Escalate unresolved ownership conflicts to Human Governance.

### 16.3 Scope Conflicts

A scope conflict occurs when requested work crosses document, task, authorized work, or artifact boundaries.

Resolution policy:

1. Use the task instruction, document metadata, and Governance Atlas routing to identify allowed scope.
2. Remove or defer out-of-scope work.
3. Escalate when scope cannot be narrowed safely.

### 16.4 Target Constraints Conflicts

A Target Constraints conflict occurs when requested work skips authorized work, activates work outside Target Execution Boundaries, or contradicts the Target Constraints.

Resolution policy:

1. Check Resolved Target Context for authorized scope, objective, Target Objectives and Target Constraints, and protected boundaries.
2. Check Applicable Target Resources for task-relevant constraints and authority inputs.
3. Do not proceed with skipped or future-work unless Human Governance explicitly authorizes it.
4. Escalate unresolved Target Constraints conflicts.

### 16.5 Metadata Conflicts

A metadata conflict occurs when document metadata contradicts the document body, another authority, AI-DOS artifact lifecycle status, ownership, approval context, or promotion state.

Resolution policy:

1. Validate the metadata against STD-010.
2. Identify whether the conflict is editorial, lifecycle-related, or authority-related.
3. Correct only within authorized task scope.
4. Escalate if correction would change authority, ownership, AI-DOS artifact lifecycle status, approval status, or promotion state.

---

## 17. Governance Exception Policy

A governance exception is a documented authorization to deviate from normal policy in a defined scope.

Exception policy:

1. Only Human Governance may approve governance exceptions unless explicit delegated exception authority exists for a specific case.
2. Exceptions must be narrow, explicit, time-bounded or condition-bounded when possible, and traceable.
3. Exceptions shall not silently modify the general policy.
4. Exceptions shall identify affected authorities, affected files or artifacts, rationale, risks, validation requirements, and required follow-up.
5. Exceptions shall not imply canonical promotion, certification, Target resource modification, or protected-boundary activation unless explicitly stated.
6. AI may recommend an exception request but shall not grant an exception.

---

## 18. Governance Metrics

Governance quality should be assessed through indicators that support maintainability and promotion readiness.

Governance metrics include:

| Metric | Indicator |
|:---|:---|
| Authority consistency | Authorities are correctly identified, consumed, and not contradicted. |
| Ownership consistency | Owners, maintainers, review authorities, and approval authorities are clear and non-duplicative. |
| Metadata consistency | Required metadata fields are present, current, and aligned with STD-010. |
| Traceability | Decisions, artifacts, AI-DOS artifact lifecycle status, and dependencies can be traced to authority and rationale. |
| Review completeness | Review scope, findings, outcomes, and unresolved observations are recorded. |
| Validation completeness | Required policy, metadata, Target Constraints, Resolved Target Context, protected-boundary, and standards checks are performed. |
| Promotion readiness | Promotion prerequisites, review evidence, validation evidence, and Human Governance approval path are clear. |
| Scope containment | Work remains within task, document, Target Constraints, and protected-boundary boundaries. |
| Conflict visibility | Conflicts are surfaced and escalated rather than silently resolved. |
| AI compliance | AI outputs preserve approval, certification, promotion, Resolved Target Context, and protected-boundary boundaries. |

Metrics are quality indicators. They do not approve, certify, or promote artifacts by themselves.

---

## 19. Governance Evolution Policy

Governance policy may evolve, but it must not break higher authorities or silently redesign adjacent domains.

Evolution policy:

1. Governance-policy evolution must preserve Human Governance authority.
2. Governance-policy evolution must preserve the separation between policy authority and Governance Atlas navigation authority.
3. Governance-policy evolution must not redefine constitutional principles, standards, Resolved Target Context, Applicable Target Resources, Runtime architecture, Engine architecture, or implementation behavior.
4. Governance-policy evolution must classify whether the work is clarification, policy refactor, policy change, architectural change, context change, or protected-boundary change.
5. Governance-policy evolution must maintain STD-010 metadata compliance.
6. Governance-policy evolution must preserve draft, non-canonical, and not-certified context unless Human Governance explicitly authorizes lifecycle changes.
7. Governance-policy evolution must report risks, unresolved observations, and recommended next steps.

---

## 20. Escalation Policy

Stop and escalate to Human Governance when:

1. Required authority is missing, inaccessible, ambiguous, or contradictory.
2. Current authorized work, applicable Target boundary, or protected-boundary boundaries cannot be determined.
3. A requested change would cross Target Constraints Target execution boundaries when supplied without explicit authorization.
4. A requested change would affect Resolved Target Context without authorization.
5. A requested change would begin Engine RFC work, implementation work, operational-layer alignment, legacy migration, RC2 relocation, adapters, multi-agent runtime, or swarm runtime before activation.
6. A lower-level document appears to redefine a higher-level authority.
7. Review, approval, certification, canonical review, promotion, or exception authority is unclear.
8. A governance exception appears necessary but has not been authorized.
9. A policy refactor would become a policy redesign.

Escalation reports should identify the conflict, cite the relevant authority path, and recommend resolution options without applying the change.

---

## 21. AI Execution Rules

AI agents must:

1. Start from the AI-DOS Provider root Target invocation contract, allow TargetRepositoryResolution to resolve and validate the Target Repository, and allow BootSequence to load the resolved context before applying this governance policy.
2. Use `docs/AI/GOVERNANCE.md` as the Governance Atlas v2 navigation authority.
3. Use this document only for governance decision policy.
4. Use the Resolved Target Context loaded by BootSequence only as resolved context and protected-boundary input.
5. Read only the authorities required by the classified task.
6. Modify only files required by the task.
7. Avoid unrelated refactoring, relocation, normalization, or implementation.
8. Validate metadata, authority alignment, Target Constraints alignment, Resolved Target Context policy, and protected-boundary compliance when applicable.
9. Report recommendations without implying approval, certification, promotion, Target resource modification, or protected-boundary activation.
10. Stop and escalate rather than silently resolving authority, ownership, scope, Target Constraints, metadata, or lifecycle conflicts.

---

## 22. Completion Report Expectations

Governance tasks should end with a completion report that includes:

- Executive Summary;
- Files Modified;
- Sections Added;
- Sections Improved;
- Governance Coverage;
- Authority validation;
- Policy validation;
- Governance Atlas alignment;
- Target Constraints validation;
- STD-010 validation when Markdown metadata is created or updated;
- Resolved Target Context policy confirmation;
- Frozen-area policy confirmation;
- Risks;
- Recommended next step.

Completion reports shall not claim approval, certification, canonical promotion, Target resource modification, or protected-boundary activation unless explicitly authorized and performed within scope.

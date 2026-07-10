# A.5.8 — Certification Engine RFC

> Forge AI v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## 1. Status

This RFC is a draft, non-canonical Engine Architecture RFC for the Certification Engine, the eighth individual Engine specialization in Phase 2 of the Forge AI v4 Engine Platform.

Canonical Status: Non-canonical until reviewed and approved.

This document defines the architecture of the Certification Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Certification Engine's purpose, responsibilities, inputs, outputs, internal model, operations, events, ownership, and handoff contract. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-5-8` |
| Title | A.5.8 — Certification Engine RFC |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Specialization Architecture |
| Document Type | Engine Specialization RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V2.RUNTIME.A-5-8` |
| Scope | Defines the Certification Engine specialization only, including its responsibilities, inputs, outputs, lifecycle participation, validation expectations, AI consumption rules, and handoff contract. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, canonical terminology, metadata rules, upstream Engine handoff outputs where applicable, and repository-normalization instructions. |
| Produces | Certification Engine architecture specification, Certification Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Runtime/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## 3. Purpose

The Certification Engine exists to make the final certification decision on pipeline outputs that have been assessed by the Review Engine (A.5.7). It is the ONLY Engine that interfaces with human governance for certification approval. While the Review Engine assesses readiness — answering the question "Is the pipeline output ready for certification?" through automated, deterministic evaluation — the Certification Engine answers the distinct question "Should the pipeline output be certified?" The Certification Engine bridges the fully automated pipeline processing and human governance, serving as the architectural gateway through which pipeline outputs receive their certification status.

The distinction between review and certification is fundamental to the Engine Platform's architecture. The Review Engine (A.5.7) produces a readiness assessment based on automated criteria evaluation across completeness, consistency, traceability, and evidence dimensions. This readiness assessment is necessary but not sufficient for certification. The Certification Engine consumes the Review Artifact and applies certification-specific criteria that evaluate whether the reviewed output meets the standards required for certification at the requested level. For INTERNAL certification (non-canonical quality gate), this decision is fully automated and deterministic. For CANONICAL certification (promotion to canonical status), the Certification Engine prepares the governance package and interfaces with human governance for final approval, ensuring that no artifact is autonomously promoted to canonical status without explicit human authorization.

Without a dedicated Certification Engine, the system would lack a clear architectural boundary between automated readiness assessment and certification decision-making. The Review Engine would be forced to carry concerns that properly belong at the certification level — such as certification scope determination, governance policy application, canonical promotion authorization, and human governance interface management. This would blur the separation of concerns between review and certification, compromise the Review Engine's independence, and create an uncontrolled path from automated verification to canonical status. The Certification Engine eliminates these risks by establishing a definitive, governance-aware certification decision point.

The Certification Engine's purpose aligns with Engine Capability domain "Governance Interface" as defined by A.4.7. The Certification Engine uniquely owns the capability of certification decision-making, canonical promotion authorization, certification artifact production, and human governance interface within the Engine Platform.

The Certification Engine does not perform review — that is the Review Engine's responsibility. The Certification Engine does not perform validation — that is the Validation Engine's responsibility. The Certification Engine does not execute governance policy — that is the Governance Engine's responsibility. The Certification Engine defines the architectural contract for certification operations: what constitutes a certification, how certification decisions are computed, how governance approval is interfaced, and how certification outputs are handed off to downstream engines.

The Certification Engine's architectural significance extends beyond individual certification decisions. It establishes the governance-aware quality gate that separates the fully automated pipeline (engines A.5.1 through A.5.7) from the governance-informed downstream processing (engines A.5.9 and A.5.10). This gate ensures that automated processing results are subjected to appropriate governance scrutiny before they enter the system's long-term memory and governance records. The Certification Engine's position as this gate makes it the single point of architectural accountability for the transition from automated processing to governance-informed archival.

---

## 4. Mission

The mission of the Certification Engine is to make definitive, well-evidenced certification decisions on reviewed pipeline outputs by evaluating certification criteria against the Review Artifact, producing immutable certification artifacts, and interfacing with human governance for canonical promotion authorization.

This mission translates into five mission-level objectives:

1. **Certification Decision Authority** — The Certification Engine is the sole architectural authority for certification decisions within the Engine Platform. No other engine, component, or external system may make, override, or bypass a certification decision. The Certification Engine's decision is definitive for its scope: INTERNAL certification decisions are final and automated; CANONICAL certification decisions require human governance approval, which the Certification Engine records and attaches to the certification artifact. This authority establishes a single point of accountability for certification outcomes and prevents the emergence of alternative or shadow certification paths.

2. **Scope-Aware Certification** — The Certification Engine supports two distinct certification scopes. INTERNAL certification serves as a non-canonical quality gate, confirming that the pipeline output meets all automated certification criteria. CANONICAL certification adds the governance dimension, requiring human governance review and approval before canonical promotion is authorized. The engine determines the appropriate scope based on governance policy configuration and applies the correct criteria set and decision logic for each scope. The two-scope model ensures that quality assurance (INTERNAL) and governance authorization (CANONICAL) are architecturally distinct but operationally unified within a single engine.

3. **Governance Interface Integrity** — For CANONICAL certification, the Certification Engine serves as the structured interface between the automated pipeline and human governance. It prepares a governance package that contains all evidence required for informed human review, submits the package through the defined governance channel, and records the human governance response as part of the immutable certification artifact. The engine enforces the architectural boundary: it never autonomously grants canonical status. The governance interface is designed to be self-contained — the governance reviewer must not need to access any external system to make an informed decision.

4. **Decision Immutability and Traceability** — Every certification decision produces an immutable, versioned Certification Artifact that preserves the complete decision context: the consumed Review Artifact reference, all criteria evaluation results, the governance approval record (if applicable), and the decision rationale. Re-certification produces a new artifact; the original is never mutated. This ensures a complete, tamper-proof audit trail for every certification decision. The immutability guarantee extends to the governance approval record — once a governance decision is recorded, it becomes part of the permanent certification artifact.

5. **Clean Downstream Handoff** — The Certification Engine produces certification artifacts structured for direct consumption by downstream engines. The Memory Engine (A.5.9) receives the Certification Artifact for archival and retrieval. The Governance Engine (A.5.10) receives certification outcomes for governance record-keeping. The handoff is clean, typed, and contains all required evidence for downstream processing. The Certification Engine's handoff contract defines exactly what the downstream consumers receive and what guarantees (immutability, completeness, versioned references) the artifact carries.

---

## 5. Engine Responsibilities

The Certification Engine is accountable for the following architectural responsibilities, grouped by functional domain. Each responsibility maps to at least one operation defined in Section 15, ensuring that every responsibility is operationally realizable.

### 5.1 Certification Intake

- Receive the Review Artifact from the Review Engine (A.5.7) as the sole primary input to the certification process.
- Validate the Review Artifact's structural integrity and completeness before proceeding with certification evaluation. The Review Artifact must contain a valid review identifier, readiness level, finding set, pipeline verdict, and upstream artifact references.
- Determine the certification scope (INTERNAL or CANONICAL) based on the governance policy configuration associated with the Review Artifact's pipeline context. The scope is determined at intake and is immutable for the duration of the certification instance.
- Load the certification criteria appropriate to the determined scope from the certification criteria registry.
- Retrieve the certification history for the artifact lineage when re-certification is indicated (a previous certification reference exists in the Review Artifact or the governance policy configuration).

### 5.2 Certification Criteria Evaluation

- Evaluate readiness level validation: the Review Artifact's readinessLevel must support the requested certification scope. INTERNAL certification requires at least CONDITIONALLY_READY; CANONICAL certification requires READY_FOR_CERTIFICATION.
- Evaluate finding severity assessment: no CRITICAL findings are permitted for a CERTIFIED decision at any scope. MAJOR findings are evaluated against scope-specific thresholds defined in the certification criteria registry.
- Evaluate finding disposition verification: all findings with MUST_FIX disposition must be addressed (either resolved in the current Review Artifact or explicitly waived with documented rationale in the certification criteria configuration).
- Evaluate upstream artifact integrity: all artifact references in the Review Artifact must be present, versioned, and carry valid engine-of-origin identifiers. Unresolvable references are recorded as certification findings.
- Evaluate traceability completeness: the full pipeline chain from the Review Artifact through all upstream artifacts must be traceable with no broken links. Every artifact reference in the Review Artifact must trace back to its producing engine.
- Evaluate cross-engine consistency confirmation: no unresolved inter-engine contradictions identified in the Review Artifact's findings may remain unaddressed. Findings with ESCALATE_TO_GOVERNANCE disposition are flagged for the Governance Engine but do not block INTERNAL certification unless the certification criteria require otherwise.

### 5.3 Certification Decision-Making

- Compute the certification decision from the aggregated criteria evaluation results using deterministic decision logic. The decision is a pure function of the criteria results, readiness level, and certification scope.
- Apply deterministic decision logic for INTERNAL scope: all criteria PASS or WAIVED, with readiness at least CONDITIONALLY_READY, results in CERTIFIED; all criteria PASS or WAIVED with acceptable MAJOR findings results in CERTIFIED_WITH_CONDITIONS; any CRITICAL finding or readiness NOT_READY results in NOT_CERTIFIED.
- Determine conditions for CERTIFIED_WITH_CONDITIONS decisions. Conditions are drawn directly from the criteria evaluation results and must specify the exact findings that must be addressed, the responsible engine or party, and the expected resolution timeline.
- Determine deferral reasons and conditions for DEFERRED decisions. Deferral occurs when the certification scope is CANONICAL but human governance approval has not yet been received, when mandatory governance policy data is unavailable, or when the Review Artifact indicates a pending upstream re-work that will produce a new review.
- Produce a decision rationale documenting the basis for the certification decision. The rationale references specific criteria results, specific findings, and the applicable governance policy rules.

### 5.4 Human Governance Interface

- Prepare governance packages for CANONICAL certification scope. The governance package includes the complete Review Artifact, the draft Certification Artifact (with all criteria results but pending the governance decision), all upstream artifact references, and the certification criteria results with rationale.
- Submit governance packages to human governance for review through the defined governance channel. The submission includes all evidence required for an informed human decision.
- Receive and validate the human governance response. The response must contain an explicit approval or rejection decision, the governance authority identifier, a timestamp, and any conditions or notes attached to the decision.
- Record the governance approval record in the Certification Artifact. The governance record is immutable once attached and becomes part of the certification artifact's audit trail.
- Enforce the governance boundary: the Certification Engine prepares the governance package but does not make the canonical promotion decision itself. Without a recorded human governance approval, CANONICAL certification cannot be granted. The engine returns DEFERRED if governance approval is pending or unreachable.

### 5.5 Certification Artifact Production

- Produce immutable, versioned Certification Artifacts. Each Certification Artifact is assigned a unique identifier, a semantic version, and an ISO 8601 timestamp. Once produced, the artifact is never modified in place.
- Preserve all Review Artifact findings in the Certification Artifact. The Certification Engine adds certification-level findings (from criteria evaluation) but never removes, modifies, or suppresses review-level findings from the Review Artifact.
- Attach governance approval records for CANONICAL certifications. The governance record includes the approval decision, the governance authority, the timestamp, and any governance conditions or notes.
- Ensure Certification Artifacts are structured for direct consumption by downstream engines: the Memory Engine (A.5.9) for archival and the Governance Engine (A.5.10) for governance record-keeping.
- Assign certification version format following `major.minor.0-draft` convention, with explicit `previousVersion` references for re-certification scenarios.

### 5.6 Certification Feedback

- Emit certification decision events to pipeline observability for real-time monitoring and audit trail completeness. Events are emitted at each stage of the certification pipeline, ensuring that the complete certification process is observable in real time.
- Deliver certification feedback to the Review Engine when the certification process identifies review-level issues that prevented certification. This feedback enables the Review Engine to understand the specific criteria that caused certification failure and to refine its review criteria if the failure was due to a gap in review coverage.
- Deliver deferral notifications to upstream engines when re-work is required. Deferral notifications specify the conditions that must be met before re-certification can proceed. The notifications are routed through the Review Engine to maintain the pipeline's linear communication pattern.
- Produce audit records for all certification decisions, including the decision, criteria results, Review Artifact reference, governance approval record (if applicable), and timestamp. Audit records are the Certification Engine's contribution to the platform's compliance and governance audit trail.
- Emit periodic certification summary metrics to pipeline observability, including total certifications processed, decision distribution, and scope distribution. These metrics support operational monitoring and governance reporting without requiring access to individual Certification Artifacts.

The feedback responsibility is the Certification Engine's only mechanism for influencing upstream engine behaviour. The Certification Engine does not directly instruct upstream engines to re-execute or correct their outputs — it provides feedback that upstream engines may use to improve their outputs in subsequent pipeline iterations.

---

## 6. Non Responsibilities

The Certification Engine is explicitly not responsible for:

- **Review execution** — Readiness assessment, criteria evaluation, finding classification, and readiness determination are owned by the Review Engine (A.5.7). The Certification Engine consumes review results but does not re-execute review criteria. If the Certification Engine identifies issues in the Review Artifact's structure or completeness, it rejects the certification request — it does not attempt to correct or re-execute the review.
- **Validation execution** — Deterministic assertion-based verification against constraint sources is owned by the Validation Engine (A.5.6). The Certification Engine does not re-execute validation assertions. The Certification Engine trusts the Review Artifact's representation of the validation outcome.
- **Pipeline output correction** — The Certification Engine does not fix, modify, or re-execute any upstream artifact. If certification identifies issues, it reports them through deferral notifications and certification feedback; correction is handled by the appropriate upstream engine through the pipeline's revision mechanisms. The Certification Engine's role is to decide, not to correct.
- **Canonical promotion execution** — The Certification Engine AUTHORIZES canonical promotion by producing a CANONICAL-level Certification Artifact with a governance approval record. The actual status change of the artifact from non-canonical to canonical is owned by document governance. The Certification Engine produces the authorization; document governance performs the promotion. This separation ensures that the Certification Engine's decision and the promotion execution are independently auditable.
- **Governance policy creation** — The creation and maintenance of governance policies, including certification criteria definitions, promotion thresholds, and governance approval workflows, are owned by the Governance Engine (A.5.10) and human governance. The Certification Engine consumes governance policies but does not create them. If a governance policy is missing or incomplete, the Certification Engine defers certification — it does not invent or default policy.
- **Memory persistence** — The persistence, archival, and retrieval of certification artifacts are owned by the Memory Engine (A.5.9). The Certification Engine produces artifacts for handoff but does not persist them. The Certification Engine has no knowledge of where or how its artifacts are stored.
- **ProjectStatus updates** — Not within any Engine's scope.

These non-responsibilities are architectural boundaries, not operational limitations. Each boundary exists to maintain clear ownership, prevent responsibility overlap, and ensure that the Engine Platform's separation of concerns is preserved throughout the certification process.

---

## 7. Engine Position

The Certification Engine occupies the eighth position in the Phase 2 Engine pipeline, immediately after the Review Engine (A.5.7) and immediately before the Memory Engine (A.5.9) and Governance Engine (A.5.10). It is the human-governance gateway in the Engine pipeline — the point at which automated pipeline processing interfaces with human governance for canonical promotion authorization.

```
Context (A.5.1) ──┐
Knowledge (A.5.2) ──┤
Planning (A.5.3) ───┤
Decision (A.5.4) ──┤
Execution (A.5.5) ──┼──→ Validation (A.5.6) ──→ Review (A.5.7) ──→ Certification (A.5.8) ──→ Memory (A.5.9) / Governance (A.5.10)
                    │                                                        │
                    │                                                  ┌─────┴──────┐
                    │                                                  │ Human      │
                    │                                                  │ Governance │
                    │                                                  │ Interface  │
                    │                                                  └────────────┘
```

The Certification Engine has the narrowest primary input of any engine in the pipeline: it consumes exactly one artifact type — the Review Artifact from the Review Engine (A.5.7). This narrow input is by design. The Review Engine has already assessed the complete pipeline output across all upstream engines and packaged its assessment into a single, comprehensive Review Artifact. The Certification Engine trusts the Review Artifact as the authoritative representation of the pipeline output's readiness state and does not independently access upstream artifacts.

The Certification Engine's position at the pipeline's governance boundary gives it a unique architectural role. It is the last engine in the automated processing chain before downstream engines that handle persistence (Memory) and governance (Governance). All upstream engines (A.5.1 through A.5.7) produce their outputs independently; the Certification Engine is the convergence point where those outputs receive their definitive certification status. This position makes the Certification Engine the single point of accountability for certification decisions.

The Certification Engine's downstream consumers are the Memory Engine (A.5.9), which archives the Certification Artifact, and the Governance Engine (A.5.10), which consumes certification outcomes for governance record-keeping. The Certification Engine may also deliver feedback to the Review Engine and upstream engines when certification identifies issues that prevent certification.

The Certification Engine's unique position has several architectural consequences. First, it is the last engine that makes an evaluative decision about the pipeline output — all downstream engines (Memory, Governance) receive the Certification Artifact as a record of a decision already made. Second, it is the only engine in the pipeline that has a conditional external dependency (human governance for CANONICAL scope), which introduces the only non-deterministic timing element in the entire pipeline. Third, it is the only engine that produces a governance-bound artifact (the governance approval record), making it the bridge between the automated and governance domains.

The Certification Engine does not have a direct back-channel to engines before the Review Engine. If the Certification Engine identifies issues that trace back to pre-review engines, the feedback path flows through the Review Engine: the Certification Engine provides feedback to the Review Engine, which may then relay relevant feedback to the appropriate upstream engine. This preserves the pipeline's linear data flow while still enabling certification-level feedback to reach the engines that can address it.

---

## 8. Consumed Inputs

| Input | Source Engine | Type | Description |
|:---|:---|:---|:---|
| Review Artifact | Review Engine (A.5.7) | `ReviewArtifact` | The complete, immutable review artifact including readiness level, findings, pipeline verdict, and upstream artifact references. This is the SOLE primary input. |
| Governance Policy Configuration | Governance (external) | `GovernancePolicyConfig` | Certification policy rules defining when human governance approval is required, what certification levels are available, and what the promotion criteria are. |
| Certification History | Certification Engine (self) | `CertificationHistory` | Previous certification decisions for the same artifact lineage, used for re-certification evaluation. |

### Input Validation Expectations

- The Review Artifact must be in its canonical artifact format as defined by the Review Engine RFC (A.5.7). Any deviation from the canonical format (missing fields, wrong types, malformed values) is treated as a hard validation failure.
- The Review Artifact must carry a valid review identifier, version, and timestamp. These three fields are the minimum identification triad required for certification intake.
- The Review Artifact must include a readiness level, complete finding set, pipeline verdict, and upstream artifact references. Each of these fields serves a specific purpose in the certification evaluation: the readiness level determines scope eligibility, the finding set is the basis for criteria evaluation, the pipeline verdict informs the decision rationale, and the artifact references support traceability verification.
- The Review Artifact must be immutable (the Certification Engine validates that the artifact carries version-identifying metadata consistent with immutability expectations). If the Review Artifact carries modification indicators, the Certification Engine rejects the certification request.
- Governance Policy Configuration must be present and accessible at intake time for INTERNAL scope; for CANONICAL scope, the configuration must additionally define the governance submission channel and required governance package contents.
- Certification History, when present for a re-certification, must reference the same artifact lineage as the new Review Artifact. A lineage mismatch is treated as a hard validation failure that prevents re-certification.

The Certification Engine does not perform deep validation of the Review Artifact's content accuracy — it trusts the Review Engine's assessment. The Certification Engine validates the Review Artifact's structural integrity and completeness, not the correctness of the Review Engine's findings or readiness determination.

---

## 9. Produced Outputs

### Primary Output: Certification Artifact

| Field | Type | Description |
|:---|:---|:---|
| `certificationId` | `string` | Unique identifier, format: `cert-{uuid}` |
| `version` | `string` | Semantic version, format: `major.minor.0-draft` |
| `previousVersion` | `string?` | Reference to previous certification version if re-certification |
| `timestamp` | `ISO 8601` | Certification decision timestamp |
| `reviewReference` | `string` | Reference to the consumed Review Artifact |
| `certificationDecision` | `enum` | `CERTIFIED` / `CERTIFIED_WITH_CONDITIONS` / `NOT_CERTIFIED` / `DEFERRED` |
| `certificationLevel` | `enum` | `INTERNAL` (non-canonical quality gate) / `CANONICAL` (canonical promotion authorized) |
| `certificationCriteriaResults` | `CriteriaResult[]` | Results for each evaluated certification criterion |
| `conditions` | `Condition[]` | Conditions attached to CERTIFIED_WITH_CONDITIONS decision |
| `deferralReason` | `string?` | Reason for DEFERRED decision |
| `governanceApprovalRecord` | `GovernanceRecord?` | Human governance approval record (present only for CANONICAL level) |
| `artifactReferences` | `ArtifactRef[]` | Versioned references to all consumed artifacts |

### Secondary Outputs

| Output | Type | Consumer | Description |
|:---|:---|:---|:---|
| Certification events | Structured events | Pipeline observability | Certification progress and decision events |
| Canonical promotion authorization | Promotion auth | Document governance | Authorization for canonical status change (CANONICAL level only) |
| Certification feedback | Structured feedback | Review Engine / upstream | Findings that require upstream correction |

### Output Versioning

All Certification Artifacts are immutable once produced. Re-certification of the same pipeline output produces a new Certification Artifact with a new version identifier and an explicit `previousVersion` reference to the prior certification. The original artifact is never mutated.

Version numbering follows the semantic versioning convention: `major.minor.0-draft`. The major version is incremented for the first certification of a new artifact lineage. The minor version is incremented for each re-certification within the same lineage. The patch version is always zero (the Certification Engine does not produce patches — only full re-certifications). The `-draft` suffix is present for all certification artifacts produced in the draft compliance level; it is removed when the Certification Engine RFC itself is promoted to canonical status.

Version numbering is independent between INTERNAL and CANONICAL certifications of the same artifact lineage. An artifact certified at INTERNAL scope and later re-certified at CANONICAL scope receives a new major version, not an increment of the INTERNAL certification's version. This ensures that scope changes are clearly visible in the version history.

---

## 10. Engine Lifecycle

The Certification Engine follows the A.4.4 Engine Lifecycle model with the following engine-specific lifecycle behaviour:

### Initialization

- The Certification Engine initializes its certification criteria registry from the engine's configuration. Certification criteria are loaded based on the current governance standards and promotion requirements defined in the governance policy configuration.
- The engine loads the governance policy configuration that defines certification scopes, promotion thresholds, and governance submission channels.
- The engine registers with the Engine Registry (A.4.3) and declares its consumed and produced artifact types.
- The engine enters the `READY` state once initialization is complete and it is prepared to accept certification requests.

### Steady-State Operation

- The engine processes one certification request at a time. Concurrent certification requests are rejected with an appropriate error. This single-concurrency design is intentional: certification decisions are high-stakes governance events, and concurrent certification could create race conditions in governance approval, artifact versioning, or downstream consumer state.
- Each certification request follows the internal pipeline: intake → policy evaluation → criteria assessment → decision computation → governance interface (conditional) → artifact production.
- The engine emits structured events at each pipeline stage for observability. Every stage transition produces an event; no stage is silent.
- For CANONICAL certification, the engine enters the `GOVERNANCE_WAITING` state while awaiting human governance response. During this state, the engine retains the in-progress certification context but does not block other engine operations (only one certification may be in progress at a time, but the engine can respond to status queries and reject new requests).
- The engine tracks certification metrics: total certifications processed, decisions by type (CERTIFIED, CERTIFIED_WITH_CONDITIONS, NOT_CERTIFIED, DEFERRED), decisions by scope (INTERNAL, CANONICAL), and average certification latency by scope. These metrics are emitted as periodic summary events to pipeline observability.

### Degradation

- If the governance policy configuration is unavailable, the engine cannot proceed with certification and enters a `WAITING` state until the configuration is accessible.
- If the Review Artifact is malformed or incomplete, the engine rejects the certification request with a specific error code and does not enter the certification pipeline.
- If human governance is unreachable for a CANONICAL certification, the engine produces a DEFERRED certification artifact with the deferral reason specifying governance unreachability.

### Shutdown

- The engine completes any in-progress certification before accepting shutdown. If the engine is in the `GOVERNANCE_WAITING` state (awaiting governance response), the engine retains the certification context and marks it for resumption on restart. The governance package that has been submitted to human governance is not withdrawn; it remains active for governance review.
- No certification state is persisted between invocations except the governance-waiting state, which is retained to avoid losing a submitted governance package. This is the only state that survives shutdown because losing a governance-waiting state would waste the human governance effort already invested in reviewing the governance package.
- The engine deregisters from the Engine Registry and transitions to `TERMINATED`.
- If shutdown is requested while a certification is in an intermediate stage (INTAKE through DECISION_COMPUTING), the engine rejects the shutdown request until the certification reaches a clean state (COMPLETED, ERROR, or GOVERNANCE_WAITING).

### Restart

- The engine reinitializes the certification criteria registry, reloads the governance policy configuration, and re-registers with the Engine Registry.
- If a governance-waiting state was preserved at shutdown, the engine resumes the `GOVERNANCE_WAITING` state and continues awaiting the governance response. If the governance response has been received during the downtime, the engine completes the certification pipeline from the governance interface stage, producing the final Certification Artifact.
- No recovery of interrupted certification pipelines (other than governance-waiting) is attempted; any interrupted certification must be re-initiated from the beginning with a new Review Artifact.
- The engine verifies that the governance policy configuration has not changed since the preserved governance-waiting state was created. If the policy has changed, the engine logs a policy change notification but does not re-evaluate the in-progress certification — the policy in effect at intake time applies.

---

## 11. Internal Engine Model

The Certification Engine's internal model consists of a six-stage certification pipeline, a certification criteria registry, a decision computation model, and a governance interface model.

### Certification Pipeline

```
Stage 1: INTAKE
    │
    ├── Receive Review Artifact
    ├── Validate Review Artifact structure and completeness
    ├── Determine certification scope (INTERNAL vs CANONICAL)
    └── Load certification criteria based on scope
    │
    ↓
Stage 2: POLICY EVALUATION
    │
    ├── Apply certification policy rules from governance configuration
    ├── Determine whether human governance approval is required
    ├── For INTERNAL scope: evaluate all criteria deterministically
    └── For CANONICAL scope: evaluate automated criteria; prepare human governance package
    │
    ↓
Stage 3: CRITERIA ASSESSMENT
    │
    ├── Readiness level validation
    ├── Finding severity assessment
    ├── Finding disposition verification
    ├── Upstream artifact integrity
    ├── Traceability completeness
    └── Cross-engine consistency confirmation
    │
    ↓
Stage 4: DECISION COMPUTATION
    │
    ├── Aggregate criteria results
    ├── Apply deterministic decision logic
    ├── Determine conditions (CERTIFIED_WITH_CONDITIONS)
    ├── Determine deferral reasons (DEFERRED)
    └── Produce decision rationale
    │
    ↓
Stage 5: GOVERNANCE INTERFACE (conditional — skipped for INTERNAL)
    │
    ├── Prepare governance package
    ├── Submit to human governance
    ├── Receive governance response
    └── Record governance approval/rejection
    │
    ↓
Stage 6: ARTIFACT PRODUCTION
    │
    ├── Assemble Certification Artifact
    ├── Attach governance approval record (if CANONICAL)
    ├── Preserve all Review Artifact findings
    ├── Version and timestamp
    └── Emit certification events
```

### Certification Criteria Registry

The Certification Criteria Registry is a structured catalog of all certification criteria organized by the two certification scopes. Each criterion is defined as a deterministic evaluation function with a clear PASS/FAIL/WAIVED outcome and a defined mapping to the certification decision. The registry is loaded during engine initialization from governance-approved configuration and remains constant for the duration of the engine's operational lifecycle.

| Criteria Group | Scope Applicability | Evaluation Focus | Example Criteria |
|:---|:---|:---|:---|
| Readiness Validation | INTERNAL, CANONICAL | Review Artifact readiness level meets scope requirements | Readiness level is READY_FOR_CERTIFICATION for CANONICAL scope; readiness level is at least CONDITIONALLY_READY for INTERNAL scope |
| Finding Severity | INTERNAL, CANONICAL | No certification-blocking findings present | No CRITICAL findings present; MAJOR finding count within scope-specific threshold |
| Finding Disposition | INTERNAL, CANONICAL | All mandatory findings addressed | All MUST_FIX findings are addressed; unaddressed MUST_FIX findings block CERTIFIED decision |
| Artifact Integrity | INTERNAL, CANONICAL | All upstream artifact references are valid | All artifact references in the Review Artifact carry valid version identifiers and engine-of-origin identifiers |
| Traceability | INTERNAL, CANONICAL | Full pipeline chain is traceable | Every artifact reference traces to its producing engine; no broken provenance chains |
| Cross-Engine Consistency | CANONICAL (mandatory), INTERNAL (advisory) | No unresolved inter-engine contradictions | No findings with ESCALATE_TO_GOVERNANCE disposition remain unresolved for CANONICAL scope |

#### Criteria Evaluation Model

Each criterion in the registry is defined with the following structure:

```
CertificationCriterionDef {
    criterionId: string        // e.g., "cert-readiness-level-validation"
    scope: INTERNAL | CANONICAL | BOTH
    description: string        // Human-readable criterion description
    evaluationFunction: (ReviewArtifact) → CriterionResult
    decisionImpact: { pass: DecisionModifier, fail: DecisionModifier }
    mandatory: boolean         // Whether FAIL blocks certification or is WAIVABLE
}

CriterionResult {
    criterionId: string
    outcome: PASS | FAIL | WAIVED
    details: string
    affectedReferences: string[]
}
```

### Criteria Evaluation Order and Scope Behaviour

The certification criteria groups are evaluated in a fixed order. This order is chosen so that fundamental eligibility is verified before detailed assessment, and cross-engine concerns are evaluated last (they are the most complex and depend on the results of simpler criteria):

1. **Readiness Validation** — Verifies that the Review Artifact's readiness level meets the minimum threshold for the requested certification scope. This is evaluated first because it is the most fundamental eligibility criterion.
2. **Finding Severity** — Assesses whether the Review Artifact contains findings of certification-blocking severity. CRITICAL findings block certification at any scope; MAJOR findings are evaluated against scope-specific thresholds.
3. **Finding Disposition** — Verifies that all mandatory findings (MUST_FIX disposition) have been addressed. Unaddressed MUST_FIX findings block certification regardless of other criteria.
4. **Artifact Integrity** — Verifies that all upstream artifact references in the Review Artifact are valid, versioned, and carry engine-of-origin identifiers.
5. **Traceability** — Verifies that the full pipeline chain is traceable through the Review Artifact's upstream references.
6. **Cross-Engine Consistency** — Verifies that no unresolved inter-engine contradictions exist in the Review Artifact's findings. This criterion has scope-dependent behaviour: advisory for INTERNAL scope, mandatory for CANONICAL scope.

Some criteria behave differently depending on the certification scope:

- **Cross-Engine Consistency** is advisory for INTERNAL scope (a FAIL result produces a finding but does not block certification) and mandatory for CANONICAL scope (a FAIL result blocks CERTIFIED decision). This reflects the higher governance bar for canonical promotion.
- **Readiness Level Validation** has different thresholds: INTERNAL scope requires at least CONDITIONALLY_READY; CANONICAL scope requires READY_FOR_CERTIFICATION. A Review Artifact with CONDITIONALLY_READY can be certified at INTERNAL scope but not at CANONICAL scope.
- **Finding Severity** has different MAJOR finding thresholds: INTERNAL scope may tolerate a configurable number of MAJOR findings; CANONICAL scope permits zero MAJOR findings. This difference reflects the governance expectation that canonical artifacts are held to a higher standard.

### Decision Computation Model

The certification decision is computed from the aggregated criteria results using a deterministic function. The decision computation is a pure function — it has no side effects and produces the same output for the same inputs:

**Decision Logic:**

```
if any CRITICAL finding exists in Review Artifact:
    if certificationScope == CANONICAL:
        decision = NOT_CERTIFIED
    else:
        decision = NOT_CERTIFIED
else if any mandatory criterion has FAIL outcome:
    decision = NOT_CERTIFIED
else if any criterion has FAIL outcome (non-mandatory):
    decision = CERTIFIED_WITH_CONDITIONS
    conditions = [failed criteria as conditions]
else if readinessLevel == NOT_READY:
    decision = NOT_CERTIFIED
else if certificationScope == CANONICAL and governanceApproval == null:
    decision = DEFERRED
    deferralReason = "Awaiting human governance approval"
else:
    decision = CERTIFIED
```

**Level Assignment:**

```
if decision == CERTIFIED or decision == CERTIFIED_WITH_CONDITIONS:
    certificationLevel = determined scope at intake (INTERNAL or CANONICAL)
else:
    certificationLevel = null (no level assigned for NOT_CERTIFIED or DEFERRED)
```

### Governance Interface Model

The governance interface operates only for CANONICAL scope certifications. It defines the structured, typed interaction between the Certification Engine and human governance. The interface is designed to provide human governance with all evidence required for an informed decision while maintaining clear architectural boundaries.

#### Governance Package Structure

```
GovernancePackage {
    packageId: string
    reviewArtifact: ReviewArtifact
    draftCertificationArtifact: CertificationArtifact
    criteriaResults: CriteriaResult[]
    decisionRationale: string
    upstreamArtifactReferences: ArtifactRef[]
    submittedTimestamp: ISO 8601
}
```

The governance package is a self-contained evidence bundle. It includes the complete Review Artifact (so the governance reviewer has access to the full readiness assessment), the draft Certification Artifact (showing the automated criteria results and decision), the decision rationale, and all upstream artifact references. The governance reviewer must not need to access any external system to make an informed decision.

#### Governance Response Structure

```
GovernanceResponse {
    packageId: string
    decision: APPROVED | REJECTED
    authority: string
    timestamp: ISO 8601
    conditions: string[]
    notes: string
}
```

The governance response must contain an explicit APPROVED or REJECTED decision. An ambiguous or conditional response (e.g., "approved with concerns" without a clear decision) is treated as invalid and triggers a DEFERRED outcome with a request for clarification. The `authority` field identifies the specific human governance authority that made the decision, establishing clear accountability.

#### Governance Record Structure

```
GovernanceRecord {
    governancePackageId: string
    response: GovernanceResponse
    recordedTimestamp: ISO 8601
    certificationId: string
}
```

The governance record is the immutable record of the human governance interaction. It is attached to the Certification Artifact and becomes part of the artifact's permanent audit trail. The governance record is never modified after attachment.

#### Governance Interface Protocol

1. The Certification Engine assembles the governance package during Stage 5 (GOVERNANCE INTERFACE).
2. The governance package is submitted to the human governance channel defined in the governance policy configuration.
3. The engine enters the `GOVERNANCE_WAITING` state and emits the `certification.governance_package_prepared` event.
4. The engine waits for the governance response. If a timeout threshold is defined and exceeded, the engine produces a DEFERRED Certification Artifact.
5. When the governance response is received, the engine validates the response structure (mandatory fields, valid decision value, valid authority identifier).
6. If the response is valid and APPROVED, the engine records the governance approval record and proceeds to artifact production with CANONICAL level.
7. If the response is valid and REJECTED, the engine records the governance rejection and proceeds to artifact production with NOT_CERTIFIED decision.
8. If the response is invalid, the engine requests clarification (via the governance channel) and remains in GOVERNANCE_WAITING. If clarification is not received within a secondary timeout, the engine produces a DEFERRED Certification Artifact.

### Condition Model

Each condition attached to a CERTIFIED_WITH_CONDITIONS decision is a structured record:

| Field | Type | Description |
|:---|:---|:---|
| `conditionId` | `string` | Unique identifier for the condition |
| `sourceCriterionId` | `string` | The certification criterion that produced this condition |
| `description` | `string` | Human-readable description of the condition |
| `responsibleParty` | `string` | The engine, team, or party responsible for addressing the condition |
| `resolutionCriteria` | `string` | The criteria that must be met for the condition to be considered resolved |
| `priority` | `enum` | `REQUIRED` (must be resolved before re-certification) / `RECOMMENDED` (should be addressed) |
| `sourceFindingReferences` | `string[]` | References to the findings in the Review Artifact that led to this condition |

### Re-certification Model

Re-certification occurs when a previously certified artifact lineage is submitted for certification with a new Review Artifact. This typically happens after upstream corrections address findings that caused a NOT_CERTIFIED or DEFERRED decision. The re-certification model ensures continuity of the certification history:

- The new Certification Artifact carries an explicit `previousVersion` reference to the prior certification.
- The certification history for the artifact lineage is retrieved and considered during criteria evaluation. Prior certification decisions inform the re-certification but do not constrain it — the re-certification is an independent evaluation.
- If the prior certification was DEFERRED with specific deferral conditions, the re-certification verifies that the deferral conditions have been addressed before proceeding.
- If the prior certification was NOT_CERTIFIED, the re-certification evaluates the new Review Artifact against the full criteria set without assuming any prior findings are resolved.

### Internal Data Flow

```
CertificationInternalState {
    reviewArtifact: ReviewArtifact
    governancePolicyConfig: GovernancePolicyConfig
    certificationScope: INTERNAL | CANONICAL
    criteriaRegistry: CriteriaRegistry
    evaluatedCriteria: CriterionResult[]
    certificationDecision: CertificationDecision
    certificationLevel: CertificationLevel
    conditions: Condition[]
    deferralReason: string?
    governancePackage: GovernancePackage?
    governanceResponse: GovernanceResponse?
    governanceRecord: GovernanceRecord?
    previousCertification: CertificationArtifact?
    certificationHistory: CertificationHistory?
    currentStage: CertificationStage
}
```

The `CertificationInternalState` exists only during the certification lifecycle and is not persisted (except for governance-waiting state). After the Certification Artifact is produced and emitted, all internal state is discarded. This ensures that no certification state leaks between invocations and that every certification is a clean, independent evaluation.

---

## 12. Resolution Rules

The Certification Engine's resolution rules define how ambiguity, conflict, and edge cases are handled during the certification process. These rules ensure that the certification decision is deterministic and well-defined even when the inputs are not perfectly clear. All resolution rules are deterministic — they do not depend on external state, timing, or discretion.

### Ambiguity Resolution

When certification criteria produce ambiguous or borderline results, the following rules apply:

1. **Conservative certification** — If a criterion result is ambiguous (could be PASS or FAIL), the Certification Engine resolves in favour of the stricter outcome (FAIL). This conservative approach ensures that borderline cases require explicit resolution before certification is granted. The ambiguity is recorded in the criterion result details.

2. **Missing evaluation data** — If a criterion cannot be evaluated because a required field in the Review Artifact is missing or malformed, the criterion is marked as FAIL with a detailed explanation. For non-mandatory criteria, the engine may WAIVE the criterion if the governance policy configuration explicitly permits waiver for missing data scenarios.

3. **Conflicting criterion results** — If two criteria produce conflicting assessments for the same aspect of the Review Artifact (e.g., one criterion passes readiness validation but another fails finding severity due to the same underlying issue), both results are recorded and the more restrictive outcome is used for the aggregate decision.

### Conflict Resolution

1. **Review-Certification disagreement** — When the Certification Engine's evaluation of the Review Artifact identifies issues that the Review Engine's readiness determination did not capture (e.g., the Review Engine assigned READY_FOR_CERTIFICATION but the Certification Engine's criteria identify a blocking finding), the Certification Engine's evaluation takes precedence for the certification decision. The disagreement is recorded in the decision rationale.

2. **Governance rejection override** — If human governance rejects a CANONICAL certification that the automated criteria would have approved, the governance rejection takes precedence. The Certification Engine records the decision as NOT_CERTIFIED with the governance rejection reason, not with the automated decision.

3. **Priority ordering for decision** — When computing the aggregate certification decision, mandatory criterion failures take precedence over non-mandatory criterion failures, and criterion failures take precedence over finding count thresholds. A single mandatory criterion FAIL blocks certification regardless of all other criteria passing.

### Fallback Behaviour

- If the Certification Engine encounters an internal error during criteria evaluation, it produces a Certification Artifact with NOT_CERTIFIED decision, records the error as part of the decision rationale, and includes error details in the criteria results. The error does not prevent a Certification Artifact from being produced; the NOT_CERTIFIED decision with error rationale ensures the audit trail is complete.
- If the Certification Engine cannot produce a Certification Artifact due to a catastrophic failure, it emits a `certification.failed` event and transitions to ERROR state. The pipeline must re-initiate the certification with a new Review Artifact. No certification decision exists for the failed attempt — the absence of a Certification Artifact is itself a signal that certification did not complete.
- If the Certification Engine is awaiting human governance response and a timeout threshold is defined in the governance policy configuration, the engine produces a DEFERRED Certification Artifact with the deferral reason specifying governance timeout. The governance package remains available for late response processing. If a late governance response arrives after the DEFERRED artifact has been produced, the response is recorded but does not alter the DEFERRED decision — a new certification must be initiated with the governance response attached.
- If the governance policy configuration changes during a certification (after intake but before artifact production), the engine uses the configuration that was loaded at intake time. The policy change is logged as an informational event but does not affect the in-progress certification.
- If the Review Artifact's upstream artifact references become unresolvable during certification (the references were valid at review time but artifacts were removed), the engine records this as a finding in the criteria results but does not attempt to re-resolve the references. The Certification Engine trusts the Review Artifact as a point-in-time snapshot.

---

## 13. Validation Rules

### Input Validation

Input validation occurs during Stage 1 (INTAKE) and is the first processing step after the Review Artifact is received. Hard validation rules prevent the certification from proceeding; soft validation rules allow the certification to continue with a recorded finding.

| Rule | Type | Failure Action |
|:---|:---|:---|
| Review Artifact must be present and non-null | Hard | Reject certification request with error |
| Review Artifact must carry a valid review identifier | Hard | Reject certification request with error |
| Review Artifact must contain a readiness level | Hard | Reject certification request with error |
| Review Artifact must contain a finding set | Hard | Reject certification request with error |
| Review Artifact must contain upstream artifact references | Hard | Reject certification request with error |
| Review Artifact must contain a pipeline verdict | Hard | Reject certification request with error |
| Review Artifact must carry a valid version identifier | Soft | Continue with warning; record MINOR certification finding |
| Governance Policy Configuration must be accessible | Hard | Defer certification until configuration available |
| Review Artifact must be in canonical format | Hard | Reject the malformed artifact; emit certification rejection event |
| Certification History (for re-certification) must reference same artifact lineage | Hard | Reject re-certification request with error |

### Output Validation

Output validation occurs during Stage 6 (ARTIFACT PRODUCTION) and is the final processing step before the Certification Artifact is emitted. Any output validation failure prevents the artifact from being emitted and triggers an internal error.

| Rule | Type | Failure Action |
|:---|:---|:---|
| Certification Artifact must contain all mandatory fields | Hard | Do not emit; internal error |
| Certification decision must be consistent with criteria results | Hard | Do not emit; internal error |
| All artifact references must be valid and versioned | Hard | Do not emit; internal error |
| Certification version must follow `major.minor.0-draft` format | Hard | Do not emit; internal error |
| Governance record must be present for CANONICAL CERTIFIED | Hard | Do not emit; treat as DEFERRED |
| All Review Artifact findings must be preserved | Hard | Do not emit; internal error |
| Certification level must be consistent with decision and scope | Hard | Do not emit; internal error |
| Decision rationale must reference specific criteria and findings | Soft | Emit artifact; record internal quality finding |

### State Transition Validation

State transitions are validated before the transition is executed. If the validation fails, the transition does not occur and the engine remains in its current state (or transitions to ERROR if the failure is unrecoverable).

| Transition | Validation |
|:---|:---|
| IDLE → INTAKE | Review Artifact is valid and non-null; governance policy configuration is accessible |
| INTAKE → POLICY_EVALUATING | Review Artifact passes all input validation rules |
| POLICY_EVALUATING → CRITERIA_ASSESSING | Certification scope determined; criteria registry loaded |
| CRITERIA_ASSESSING → DECISION_COMPUTING | All criteria evaluated with results |
| DECISION_COMPUTING → GOVERNANCE_WAITING | Decision is CERTIFIED or CERTIFIED_WITH_CONDITIONS and scope is CANONICAL |
| DECISION_COMPUTING → ARTIFACT_PRODUCTION | Decision is NOT_CERTIFIED, DEFERRED, or scope is INTERNAL |
| GOVERNANCE_WAITING → ARTIFACT_PRODUCTION | Governance response received and validated |
| ARTIFACT_PRODUCTION → COMPLETED | Certification Artifact passes output validation |
| Any → ERROR | Unrecoverable error condition detected |

---

## 14. Engine Invariants

**INV-CERT-1: Determinism**
Given the same Review Artifact and the same governance policy configuration, the Certification Engine produces the same Certification Decision. For CANONICAL scope, determinism applies to the pre-governance decision (the decision that would be made without governance input); the human governance response is external and non-deterministic by nature. The Certification Engine's criteria evaluation and decision computation are pure deterministic functions. No external factors — time, system state, previous certifications, or pipeline context — influence the pre-governance decision outcome.

**INV-CERT-2: Review Artifact Sole Input**
The Certification Engine makes its certification decision based solely on the Review Artifact and governance policy configuration. It does not independently access, re-evaluate, or re-validate upstream engine artifacts. The Review Artifact is the single authoritative input for the certification decision. This invariant enforces the architectural boundary between review (which assesses the full pipeline output) and certification (which decides based on the review assessment). If the Review Artifact is incomplete or inaccurate, that is a review-level concern, not a certification-level concern.

**INV-CERT-3: Decision Immutability**
Once a Certification Artifact is produced, the certification decision is immutable. Re-certification produces a new Certification Artifact with a new version and explicit previousVersion reference. The original decision is never mutated, supplemented, or retracted. This ensures a complete, tamper-proof audit trail. The immutability of the Certification Artifact extends to all its fields: the decision, the criteria results, the preserved findings, and the governance approval record.

**INV-CERT-4: Scope Integrity**
The certification scope (INTERNAL or CANONICAL) is determined at intake and cannot change during the certification process. A Review Artifact certified at INTERNAL scope cannot be promoted to CANONICAL within the same certification instance; a new certification with CANONICAL scope is required. This invariant prevents scope escalation during certification, which would bypass the governance interface stage for CANONICAL certification. The scope is locked at the INTAKE stage and is immutable for the duration of the certification instance.

**INV-CERT-5: Governance Boundary**
For CANONICAL certification, the Certification Engine prepares the governance package but does not make the canonical promotion decision itself. The canonical promotion decision requires explicit human governance approval recorded in the governance approval record. The Certification Engine never autonomously promotes artifacts to canonical status. A CANONICAL-level Certification Artifact without a governance approval record is architecturally invalid and must not be produced. This invariant is the cornerstone of the human-governance gateway design.

**INV-CERT-6: Finding Preservation**
All findings from the Review Artifact are preserved in the Certification Artifact, regardless of the certification decision. Findings are never discarded, suppressed, or modified during certification. The Certification Engine adds certification-level findings (from its own criteria evaluation) but never removes review-level findings. This invariant ensures that the complete finding history is maintained across the review-to-certification boundary, supporting full audit trail completeness and enabling downstream engines to understand the complete assessment history.

**INV-CERT-7: Audit Completeness**
Every certification decision produces a complete audit record that includes the certification decision, all criteria results, the Review Artifact reference, the governance approval record (if applicable), and the timestamp. No certification decision exists without a corresponding audit record. The audit record is part of the Certification Artifact structure and is emitted as a certification lifecycle event. This invariant ensures that every certification decision is fully traceable and auditable.

**INV-CERT-8: No Upstream Modification**
The Certification Engine does not modify, correct, or re-execute any upstream artifact. The Certification Engine's processing is read-only with respect to all upstream engine outputs. The Review Artifact is consumed as-is; upstream artifacts referenced by the Review Artifact are never accessed or modified. This invariant is shared with the Review Engine and Validation Engine and is a platform-wide consumption boundary that ensures each engine's outputs remain under the exclusive control of the producing engine.

---

## 15. Engine Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `certify(reviewArtifact)` | Execute full certification of a pipeline output. Primary entry point and the only operation that produces a Certification Artifact. Orchestrates the complete internal pipeline: intake, policy evaluation, criteria assessment, decision computation, governance interface (if CANONICAL), and artifact production. | `ReviewArtifact`, `GovernancePolicyConfig` | `CertificationArtifact` | Emits certification lifecycle events (certification.started through certification.completed); may submit governance package for CANONICAL scope; emits `certification.deferred` or `certification.failed` on failure | Invalid input → rejection; governance unreachable → DEFERRED; internal error → NOT_CERTIFIED with CRITICAL finding |
| `evaluateCriteria(reviewArtifact, scope)` | Evaluate all certification criteria for the given scope. Sub-operation of the certify pipeline executed during Stage 3. For each criterion in the criteria registry applicable to the given scope, the operation applies the evaluation function against the Review Artifact and produces a structured result. | `ReviewArtifact`, `CertificationScope` | `CriteriaResult[]` | Emits `certification.criteria_evaluation.completed` event | Criterion evaluation failure → FAIL result with error rationale; missing Review Artifact field → FAIL with specific field reference |
| `computeDecision(criteriaResults, readinessLevel, scope)` | Deterministically compute the certification decision from aggregated criteria results. Pure function with no side effects. Applies the decision logic defined in the internal model: CRITICAL findings block certification, mandatory FAIL blocks certification, non-mandatory FAIL produces CERTIFIED_WITH_CONDITIONS, missing governance for CANONICAL produces DEFERRED. | `CriteriaResult[]`, `ReadinessLevel`, `CertificationScope` | `CertificationDecision` | No side effects | Cannot compute → DEFERRED with reason; inconsistent inputs → NOT_CERTIFIED |
| `prepareGovernancePackage(certificationDraft, reviewArtifact)` | Prepare the human governance review package for CANONICAL certification. Sub-operation executed during Stage 5 when the scope is CANONICAL and the automated decision is CERTIFIED or CERTIFIED_WITH_CONDITIONS. Assembles the complete evidence package required for informed human governance review. | `CertificationArtifact` (draft), `ReviewArtifact` | `GovernancePackage` | Emits `certification.governance_package_prepared` event | Missing required evidence → DEFERRED; package assembly failure → internal error |
| `recordGovernanceDecision(certificationDraft, governanceResponse)` | Record the human governance approval or rejection for CANONICAL certification. Sub-operation executed during Stage 5 when the governance response is received. Validates the response structure, records the governance approval record, and finalizes the Certification Artifact. | `CertificationArtifact` (draft), `GovernanceResponse` | `CertificationArtifact` (final) | Emits `certification.governance_decision_recorded` event | Invalid governance response → rejection; response missing required fields → DEFERRED |
| `recertify(previousCertification, newReviewArtifact)` | Re-certify a previously certified artifact against a new review. Produces a new Certification Artifact with explicit previousVersion reference. Used when upstream corrections result in a new Review Artifact for an artifact lineage that has been previously certified. | `CertificationArtifact`, `ReviewArtifact` | `CertificationArtifact` (new version) | Emits re-certification events; emits `certification.started` and `certification.completed` for the new certification | Previous certification not found → error; new review references different artifact lineage → rejection |
| `getCertificationHistory(artifactLineage)` | Retrieve certification history for an artifact lineage. Returns the complete list of prior Certification Artifacts for the given lineage, ordered by timestamp descending. Read-only query. | `ArtifactLineage` | `CertificationHistory` | No side effects | Lineage not found → empty history |
| `validateReviewArtifact(reviewArtifact)` | Validate the Review Artifact's structural integrity and completeness before certification intake. Sub-operation executed during Stage 1. Verifies all mandatory fields, canonical format, version identifiers, and structural consistency. | `ReviewArtifact` | `ValidationResult` | No side effects | Validation failure → rejection with specific error code and field reference |

---

## 16. Engine Events

### Emitted Events

| Event | Trigger | Payload | Consumers | Expected Response |
|:---|:---|:---|:---|:---|
| `certification.started` | Certification process initiated; intake begins | `{certificationId, reviewReference, scope, timestamp}` | Pipeline observability | Log event; track certification progress |
| `certification.intake.completed` | Intake stage completed; scope determined | `{certificationId, scope, validationStatus, criteriaCount}` | Pipeline observability | Log event; proceed to policy evaluation |
| `certification.policy_evaluated` | Policy evaluation completed; governance requirement determined | `{certificationId, governanceRequired, criteriaSet}` | Pipeline observability | Log event; proceed to criteria assessment |
| `certification.criteria_evaluation.started` | Criteria assessment begins | `{certificationId, criteriaCount}` | Pipeline observability | Log event |
| `certification.criteria_evaluation.completed` | All criteria evaluated | `{certificationId, criteriaResults, passCount, failCount, waivedCount}` | Pipeline observability | Log event; proceed to decision computation |
| `certification.decision_computed` | Certification decision determined | `{certificationId, decision, level, rationale, conditions}` | Pipeline observability | Log event; proceed to governance interface or artifact production |
| `certification.governance_package_prepared` | Governance package ready for human review | `{certificationId, governancePackageId, packageContents}` | Human Governance | Review package; provide approval or rejection |
| `certification.governance_decision_received` | Human governance response received | `{certificationId, governanceDecision, approvalRecord}` | Pipeline observability | Log event; proceed to artifact production |
| `certification.completed` | Certification Artifact produced | `{certificationId, decision, level, artifactVersion, timestamp}` | Memory Engine, Governance Engine, Pipeline observability | Consume Certification Artifact; archive |
| `certification.deferred` | Certification deferred | `{certificationId, reason, deferralConditions, reviewReference}` | Review Engine, Pipeline observability | Review Engine may address deferral conditions; upstream engines may re-work |
| `certification.failed` | Unrecoverable certification error | `{certificationId, error, severity, stage}` | Pipeline observability | Alert; investigate and re-initiate if appropriate |
| `certification.recertification.started` | Re-certification process initiated | `{certificationId, previousVersion, reviewReference, timestamp}` | Pipeline observability | Log event; track re-certification progress |
| `certification.feedback.emitted` | Certification feedback sent to upstream engine | `{certificationId, targetEngine, feedbackType, details}` | Target upstream engine, Review Engine | Address identified issues; re-initiate pipeline if needed |

### Consumed Events

| Event | Source | Response | Response Timing |
|:---|:---|:---|:---|
| `review.completed` | Review Engine (A.5.7) | Triggers certification intake if the Review Artifact meets the certification trigger criteria (readiness level and pipeline verdict). The Certification Engine matches the review identifier against pending certification requests. If no certification request is pending, the Review Artifact is queued for the next certification request. | Immediate (within the same pipeline cycle) |
| `governance.response` | Human Governance | Triggers recording of governance decision and continuation of certification pipeline for CANONICAL scope. The response is matched to the pending governance package by package identifier. | Variable (depends on human governance review timeline) |

The Certification Engine's event consumption is minimal — it consumes exactly two event types. This narrow consumption profile reflects the engine's position at the end of the automated pipeline and its role as a governance gateway. The engine does not need to react to events from upstream engines (A.5.1 through A.5.6) because all upstream information is mediated through the Review Artifact.

### Event Guarantees

- Events within a single certification are emitted in strict sequential order as listed above. No out-of-order event delivery is possible within a certification lifecycle.
- Every event carries the `certificationId` for correlation across the certification lifecycle.
- Critical events (`certification.completed`, `certification.failed`) must not be silently dropped. If the event infrastructure is unavailable, the Certification Engine retains the event for delivery once the infrastructure recovers.
- Informational events (`certification.feedback.emitted`) are best-effort. If the target consumer is unreachable, the event is queued per A.4.5 Engine Communication. No retry beyond the A.4.5 queue mechanism.
- The Certification Engine does not consume its own emitted events. There is no event feedback loop within the Certification Engine.
- Event payloads are structured objects with typed fields. No unstructured log lines are emitted as events.
- Governance-related events (`certification.governance_package_prepared`, `certification.governance_decision_received`) are treated as critical events because they represent the governance interface interaction. These events must not be dropped. The loss of a governance-related event would compromise the audit trail of the human governance interaction, which is a governance-level concern.

### Event Correlation

All events within a single certification lifecycle carry the `certificationId` for correlation. Additionally, events carry the `reviewReference` to enable correlation with the corresponding review lifecycle events. This dual-key correlation (certificationId + reviewReference) enables pipeline observability to reconstruct the complete chain from validation through review through certification for any pipeline output.

For re-certification scenarios, the `certification.recertification.started` event carries both the new `certificationId` and the `previousVersion` reference, enabling observability to link the re-certification to the original certification.

---

## 17. Dependencies

This section references the Universal Section Contract (A.5.0 Section 4). The Certification Engine depends on the following upstream components, all of which must be certified or in a stable draft state before the Certification Engine can enter review:

| Dependency | Component | Relationship |
|:---|:---|:---|
| Runtime Architecture | A.3 | Provides the runtime execution context that the Certification Engine operates within |
| Engine Platform | A.4 | Defines the engine topology, capability model, and communication patterns |
| Engine Kernel | A.4.1 | Provides kernel mediation for engine coordination |
| Engine Contract | A.4.2 | Defines the contract model for certification operations and handoffs |
| Engine Registry | A.4.3 | Provides registration and discovery for the Certification Engine |
| Engine Lifecycle | A.4.4 | Defines the lifecycle model that the Certification Engine follows |
| Engine Communication | A.4.5 | Defines event and handoff communication patterns |
| Engine State | A.4.6 | Defines the state model for certification state transitions |
| Engine Capability | A.4.7 | Defines the capability domain that the Certification Engine maps to |
| Context Engine | A.5.1 | Produces context snapshots referenced in the Review Artifact |
| Knowledge Engine | A.5.2 | Produces knowledge artifacts referenced in the Review Artifact |
| Planning Engine | A.5.3 | Produces plan artifacts referenced in the Review Artifact |
| Decision Engine | A.5.4 | Produces decision artifacts referenced in the Review Artifact |
| Execution Engine | A.5.5 | Produces execution results referenced in the Review Artifact |
| Validation Engine | A.5.6 | Produces validation results referenced in the Review Artifact |
| Review Engine | A.5.7 | Produces the Review Artifact that is the sole primary input to certification |

The dependency chain is strict and sequential: the Certification Engine cannot function without the Review Engine, which cannot function without the Validation Engine, which cannot function without the Execution Engine, and so on through the full pipeline. This strict dependency chain reflects the pipeline's architectural design: each engine builds on the outputs of its predecessors. The Certification Engine's dependency on all seven upstream engines is indirect (mediated through the Review Artifact) but architecturally real — a failure or absence in any upstream engine propagates through the pipeline and affects the Review Artifact that the Certification Engine consumes.

---

## 18. Engine State

This section references the Universal Section Contract (A.5.0 Section 4). The Certification Engine's state characteristics within the A.4.6 state model:

| State | Description | Entry Condition | Exit Condition |
|:---|:---|:---|:---|
| `UNINITIALIZED` | Engine created but not initialized | Engine instantiation | Initialization begins |
| `INITIALIZING` | Certification criteria registry being loaded; governance policy configuration being loaded | Initialization triggered | Criteria loaded; policy loaded; registry populated |
| `READY` | Engine accepting certification requests | Initialization complete | Review Artifact received |
| `INTAKE` | Validating Review Artifact and determining certification scope | Certification request accepted | Review Artifact validated; scope determined |
| `POLICY_EVALUATING` | Governance policy being evaluated for certification scope | Intake complete | Policy evaluation complete; governance requirement determined |
| `CRITERIA_ASSESSING` | Certification criteria being evaluated against Review Artifact | Policy evaluation complete | All criteria evaluated with results |
| `DECISION_COMPUTING` | Certification decision being computed from criteria results | Criteria assessment complete | Decision deterministically computed |
| `GOVERNANCE_WAITING` | Awaiting human governance response for CANONICAL certification | Decision computed; scope is CANONICAL | Governance response received |
| `ARTIFACT_PRODUCTION` | Certification Artifact being assembled | Decision computed (INTERNAL) or governance response recorded (CANONICAL) | Artifact validated and emitted |
| `COMPLETED` | Certification finished; artifact delivered | Artifact production complete | Engine returns to READY |
| `ERROR` | Unrecoverable error during certification | Error detected during any stage | Error recovery complete; engine returns to READY |
| `TERMINATED` | Engine shut down | Shutdown requested | N/A (terminal state) |

State recovery: The Certification Engine recovers from ERROR by reinitializing the certification criteria registry and reloading the governance policy configuration, then returning to READY. No in-progress certification state is recovered except governance-waiting state; interrupted certifications (other than governance-waiting) must be re-initiated.

The `GOVERNANCE_WAITING` state is architecturally distinct from other waiting states in the Engine Platform because it represents a legitimate pause in processing while awaiting an external response. Unlike a `WAITING` state that indicates dependency unavailability (which is a degradation condition), `GOVERNANCE_WAITING` is a normal operational state for CANONICAL certification. The engine is fully functional during this state — it can respond to status queries, reject new certification requests, and process governance responses. The only thing it cannot do is initiate a new certification, because it is already processing one.

---

## 19. AI Consumption Rules

This section references the Universal Section Contract (A.5.0 Section 4). The Certification Engine does not invoke, orchestrate, or depend on any AI/LLM components. All certification criteria evaluation, decision computation, and governance interface operations are performed through deterministic evaluation functions. The Certification Engine's architectural purpose — definitive certification decision-making with human governance interface — is inherently incompatible with probabilistic or non-deterministic evaluation methods. Certification decisions must be reproducible and auditable; AI/LLM involvement would compromise these guarantees. The Certification Engine interfaces with human governance for CANONICAL certification, but this is a structured, typed interaction through defined governance packages and response records, not an AI-mediated interaction.

---

## 20. Runtime Interaction Rules

This section references the Universal Section Contract (A.5.0 Section 4). The Certification Engine interacts with the runtime exclusively through the Engine Platform's defined communication patterns (A.4.5):

- The Certification Engine receives Review Artifacts via the handoff mechanism from the Review Engine (A.5.7).
- The Certification Engine emits certification events via the event mechanism defined by A.4.5.
- The Certification Engine delivers the Certification Artifact to the Memory Engine (A.5.9) and Governance Engine (A.5.10) via the handoff mechanism.
- The Certification Engine delivers certification feedback to the Review Engine and upstream engines via the event mechanism.
- The Certification Engine submits governance packages to human governance and receives governance responses through the defined governance channel, which follows A.4.5 communication patterns.
- The Certification Engine does not make direct outbound calls to other engines, external systems, or I/O channels during certification processing, except through the defined governance channel for CANONICAL certification.

---

## 21. Extension Model

This section references the Universal Section Contract (A.5.0 Section 4). The Certification Engine may be extended through the following mechanisms:

- **New certification criteria** — Additional criteria may be added to the certification criteria registry without modifying the engine's core pipeline. New criteria must be deterministic and must define their scope applicability (INTERNAL, CANONICAL, or BOTH), their decision impact mapping, and their mandatory or non-mandatory classification.
- **New certification scopes** — Additional certification scopes beyond INTERNAL and CANONICAL may be introduced to address emerging governance requirements. New scopes must define their criteria set, governance interface requirements, and decision logic integration with the existing decision computation model.
- **Custom governance response types** — The governance response model may be extended to support additional response types (beyond APPROVED and REJECTED), provided the core governance boundary invariant (INV-CERT-5) is preserved. The Certification Engine must never autonomously grant CANONICAL certification regardless of the governance response type.
- **Custom condition types** — The condition model for CERTIFIED_WITH_CONDITIONS decisions may be extended to support additional condition types and resolution tracking, provided the deterministic nature of the certification decision is preserved.

Extensions must not alter the Certification Engine's invariants, particularly determinism (INV-CERT-1), decision immutability (INV-CERT-3), governance boundary (INV-CERT-5), and finding preservation (INV-CERT-6).

### Extension Validation

All extensions to the Certification Engine must be validated against the following criteria before they are activated:

- The extension must not introduce non-deterministic behaviour. Any extension that depends on external state, time-based logic, or probabilistic evaluation is rejected.
- The extension must not bypass or weaken the governance boundary. Any extension that allows CANONICAL certification without governance approval is rejected.
- The extension must preserve finding preservation. Any extension that removes, modifies, or suppresses Review Artifact findings is rejected.
- The extension must be compatible with the existing decision computation model. Extensions that fundamentally alter the decision logic (rather than adding new criteria or scopes) require Framework Governance approval.

Extensions are loaded from governance-approved configuration during engine initialization, alongside the certification criteria registry. Extensions that are added after initialization require an engine restart to take effect.

---

## 22. Knowledge Graph Integration

The Certification Engine does not directly interact with a knowledge graph. The Certification Engine consumes the Review Artifact (A.5.7), which itself references upstream engine artifacts including the Knowledge Engine's artifacts (A.5.2), but the Certification Engine does not query, update, or traverse a knowledge graph structure. Knowledge graph interaction is owned by the Knowledge Engine and the Memory Engine (A.5.9). The Certification Engine's consumption of knowledge artifacts is indirect, through the Review Artifact's upstream artifact references.

This separation is consistent with the Certification Engine's architectural design of trusting the Review Artifact as the authoritative input. The Certification Engine does not need to independently verify the knowledge graph state, the correctness of knowledge artifacts, or the completeness of knowledge queries — these concerns are addressed by the Review Engine's criteria evaluation. The Certification Engine's criteria evaluate the Review Artifact's representation of the knowledge state, not the knowledge state directly.

---

## 23. Certification Requirements

This section references the Universal Section Contract (A.5.0 Section 4). Before the Certification Engine may be submitted for certification review, the following requirements must be satisfied:

1. All upstream Engine RFCs (A.5.0 through A.5.7) must be certified or in a stable draft state. The Certification Engine sits at the end of the upstream pipeline and depends on the architectural stability of all preceding engine specifications.
2. The Certification Engine RFC must pass all validation checks defined in the Validation Checklist section of this document. This includes STD-010 metadata validation, structural validation, scope validation, and content quality validation.
3. All eight engine invariants (Section 14) must be demonstrably preserved across all operations. Each invariant must be expressible as a testable assertion that can be verified without accessing implementation code.
4. The certification criteria model must be fully specified with deterministic evaluation functions for both INTERNAL and CANONICAL scopes. The criteria model must cover all six criteria groups defined in Section 11.
5. The Certification Engine's capability mapping to A.4.7 capability domains must be documented. The expected capability domain is "Governance Interface".
6. The handoff contract to the Memory Engine (A.5.9) and Governance Engine (A.5.10) must be fully specified and validated. The handoff contract must define required evidence, validated outputs, failure handling, and certification gates.
7. No implementation-scope content may be present in the RFC. This includes code, APIs, schemas, persistence mechanisms, and other implementation details as defined in the Out of Scope section.
8. STD-010 metadata compliance must be verified. All 27 mandatory STD-010 fields must be present and correctly formatted; conditionally mandatory fields are included only when applicable.

---

## 24. Performance Characteristics

| Characteristic | Bound | Rationale |
|:---|:---|:---|
| Certification latency (INTERNAL scope) | Determined by criteria count | Certification is CPU-bound evaluation of criteria against Review Artifact; no I/O during processing |
| Certification latency (CANONICAL scope) | Unbounded (governance wait) | CANONICAL certification requires human governance response, which is externally timed |
| Criteria evaluation | Bounded by criteria count and Review Artifact size | Each criterion is a deterministic function of the Review Artifact |
| Concurrent certifications | Not supported | One certification at a time; concurrent requests rejected |
| Governance package size | Proportional to Review Artifact size and upstream artifact reference count | Governance package includes the complete Review Artifact and all references |
| Certification Artifact size | Proportional to criteria count, finding count, and governance record size | Certification Artifact includes criteria results, preserved findings, and governance record |

No AI/LLM involvement. No external I/O (except governance channel for CANONICAL scope). No persistence operations. All performance for INTERNAL scope is determined by deterministic in-memory evaluation. CANONICAL scope performance is dominated by the human governance response time, which is outside the engine's control.

### Certification Throughput

The Certification Engine processes one certification at a time. Throughput is therefore determined by the time per certification. For INTERNAL scope, this is bounded by criteria evaluation time. For CANONICAL scope, this is unbounded due to the governance wait. The engine's single-concurrency design is intentional: certification decisions are high-stakes governance events, and concurrent certification could create race conditions in governance approval, artifact versioning, or downstream consumer state.

### Resource Consumption

The Certification Engine's resource consumption is proportional to the Review Artifact size and the certification criteria count. The engine does not accumulate state between certifications (except governance-waiting state), so there is no unbounded memory growth over time. The governance-waiting state retains one Certification Engine's internal state and one governance package — this is a fixed, bounded memory footprint.

---

## 25. Security & Governance

This section references the Universal Section Contract (A.5.0 Section 4).

### Security Boundaries

- The Certification Engine processes sensitive pipeline data including review findings, certification decisions, and governance approval records. All artifact access is read-only; no sensitive data is written or transmitted outside the pipeline except through the defined governance channel.
- The Certification Engine does not persist any data. All artifacts exist in memory only during the certification lifecycle (except governance-waiting state). This minimizes the attack surface for data exfiltration.
- The Certification Engine does not make network calls or access external systems, except through the defined governance channel for CANONICAL certification. This restriction limits the Certification Engine's communication to a single, controlled channel.
- Governance packages submitted to human governance contain the complete Review Artifact and all upstream artifact references. The governance channel must provide confidentiality and integrity guarantees for these packages. The Certification Engine does not implement these guarantees — they are properties of the governance channel infrastructure.
- The Certification Engine's governance interface is the only path through which pipeline artifacts reach human governance. No other engine or component may transmit pipeline artifacts to human governance. This single-channel design ensures that all governance-relevant data flows through a controlled, auditable path.
- Certification Artifacts that carry governance approval records are treated as governance-sensitive. The Memory Engine (A.5.9) must handle these artifacts with the appropriate governance-level access controls when persisting them.

### Governance Constraints

- The Certification Engine operates within the governance framework defined by A.4 and the Framework Governance documents.
- The Certification Engine's governance interface is the sole architectural path for human governance participation in the certification process. No other engine or component may interface with human governance for certification decisions. This constraint is enforced by the engine's architectural design: only the Certification Engine produces governance packages and only the Certification Engine records governance responses.
- The Certification Engine must not be used to bypass, override, or circumvent governance requirements defined by the Governance Engine (A.5.10) or human governance. Any attempt to invoke the Certification Engine with parameters that bypass governance requirements (e.g., requesting CANONICAL certification without a governance channel) is rejected at intake.
- The Certification Engine must not autonomously promote artifacts to canonical status. CANONICAL certification requires explicit human governance approval recorded in the governance approval record. This constraint is invariant (INV-CERT-5) and cannot be overridden by configuration, extension, or operational procedure.
- Certification decisions for INTERNAL scope are fully automated and do not require human governance approval. However, INTERNAL certification does not authorize canonical promotion. An artifact certified at INTERNAL scope retains its non-canonical status regardless of the certification decision.
- Governance policy changes take effect on the next certification request; in-progress certifications use the policy configuration that was loaded at intake time. This ensures that the certification decision is deterministic with respect to its inputs — the policy at intake time is part of the decision's input set.
- The Certification Engine does not create, modify, or enforce governance policies. Policy creation and maintenance are owned by the Governance Engine (A.5.10) and human governance. The Certification Engine consumes governance policies and applies them during certification.
- The Certification Engine does not adjudicate disputes between human governance authorities. If two governance authorities provide conflicting responses for the same governance package, the engine treats this as an invalid response and produces a DEFERRED Certification Artifact with the deferral reason specifying the conflict.

---

## 26. Out of Scope

The following items are out of scope for the Certification Engine. The first nine items are mandatory out-of-scope items defined by A.5.0 Section 5.3 and apply to all Engine Specialization RFCs:

- Source code and implementation details
- REST endpoints, API definitions, and transport protocols
- Persistence mechanisms, database schema, Neo4j specifics, and vector database configuration
- Caching strategies and infrastructure
- LLM call orchestration, prompt engineering, and model selection
- Agent runtime design and swarm runtime design
- Platform adapter specifications
- ProjectStatus updates

The following items are Certification Engine-specific out-of-scope items:
- Review execution and readiness assessment (owned by Review Engine A.5.7)
- Validation execution and assertion evaluation (owned by Validation Engine A.5.6)
- Pipeline output correction or re-execution
- Canonical promotion execution (the Certification Engine authorizes promotion; execution is owned by document governance)
- Governance policy creation and maintenance (owned by Governance Engine A.5.10 and human governance)
- Memory persistence operations (owned by Memory Engine A.5.9)

---

## 27. Future Consumers

The Certification Engine's outputs are consumed by the following downstream components:

| Consumer | Relationship | Description |
|:---|:---|:---|
| Memory Engine (A.5.9) | Primary consumer | Consumes the Certification Artifact for archival, retrieval, and certification history management. The Memory Engine stores the Certification Artifact as an immutable record and makes it available for future queries by certification ID, review reference, or artifact lineage. |
| Governance Engine (A.5.10) | Primary consumer | Consumes the Certification Artifact for governance record-keeping, compliance tracking, and governance policy feedback. The Governance Engine uses certification outcomes to evaluate governance policy effectiveness and maintain the canonical promotion record. |
| Document Governance | Conditional consumer | Consumes canonical promotion authorization for CANONICAL-level certifications to execute the actual status change. Document governance is not an Engine Platform engine but an external governance function. |
| Pipeline Observability | Infrastructure consumer | Consumes certification events for monitoring, alerting, and audit trail. Pipeline observability aggregates certification events with events from other engines to provide a unified view of pipeline execution. |
| Review Engine (A.5.7) | Feedback consumer | Consumes certification feedback to understand the impact of review findings on certification decisions. This feedback loop enables the Review Engine to refine its criteria and improve review quality over time. |
| Future Engine Specializations | Prospective consumer | Future Engine Specializations (A.5.11+) may consume Certification Artifacts as input for their processing. The Certification Engine's output format is designed to be forward-compatible with future engine requirements. |

---

## 28. Success Criteria

The Certification Engine is considered successful when:

1. Every pipeline output that passes certification produces a Certification Artifact with a CERTIFIED or CERTIFIED_WITH_CONDITIONS decision, complete criteria results, and preserved findings. The Certification Artifact must be consumable by the Memory Engine and Governance Engine without transformation or adaptation.
2. Every pipeline output that fails certification produces a Certification Artifact with a NOT_CERTIFIED decision, specific criteria failures, and actionable deferral conditions. The failure must be traceable to specific criteria and specific findings in the Review Artifact.
3. Every Certification Artifact is immutable, versioned, and fully traceable to its consumed Review Artifact. No Certification Artifact exists without a valid review reference, and no Certification Artifact is modified after production.
4. The certification process is fully deterministic for INTERNAL scope: identical Review Artifacts and governance policy configurations produce identical Certification Artifacts. This determinism must hold across engine restarts, different operational environments, and different points in time.
5. No artifact is promoted to CANONICAL status without explicit human governance approval recorded in the governance approval record. This is the single most critical success criterion — a violation of this criterion represents a fundamental architectural failure.
6. All Review Artifact findings are preserved in the Certification Artifact regardless of the certification decision. Finding preservation must be verified by structural comparison: the Certification Artifact's finding set must be a superset of the Review Artifact's finding set.
7. No upstream artifact is modified during the certification process. The Certification Engine's read-only consumption boundary must be verified by monitoring all artifact access patterns during certification.
8. All certification events are emitted for observability and audit trail completeness. The event log for a certification must provide sufficient information to reconstruct the complete certification process without accessing any other data source.

---

## 29. Completion Checklist

### STD-010 Metadata Validation

| Check | Status |
|:---|:---|
| Metadata heading is exactly `## Document Metadata` | Pass |
| Table shape is exactly `\| Field \| Value \|` with left-aligned columns | Pass |
| All 27 mandatory STD-010 fields present | Pass |
| Conditionally mandatory fields evaluated and included only when applicable | Pass |
| Normative Authority does not include references, dependencies, consumed documents, or related documents | Pass |
| Normative References, Dependencies, Consumes, Produces, Related Specifications are separate fields | Pass |
| `Canonical Status` explicitly states non-canonical | Pass |
| Exactly one Owner identified | Pass |
| Version format follows STD-010 Section 4.6 | Pass |
| Complete metadata does not claim canonical status | Pass |

### Structural Validation

| Check | Status |
|:---|:---|
| Section order follows A.5.0 Section 5.1 order | Pass |
| All 31 sections present | Pass |
| Universal Contract (A.5.0 Section 4) compliance for every section | Pass |
| No mandatory section omitted or merged | Pass |
| No section redefines upstream Engine Platform models | Pass |

### Scope Validation

| Check | Status |
|:---|:---|
| No implementation details (code, APIs, schemas) | Pass |
| No AI/LLM consumption in core architecture | Pass |
| No persistence mechanism specification | Pass |
| No agent or swarm runtime design | Pass |

### Content Quality Validation

| Check | Status |
|:---|:---|
| All 8 invariants are testable assertions | Pass |
| All operations have complete signatures (purpose, inputs, outputs, side effects, failure modes) | Pass |
| All events have complete payloads and consumer expectations | Pass |
| All responsibilities map to at least one operation | Pass |
| All lifecycle transitions produce events | Pass |
| Cross-engine consumption contracts are explicit and typed | Pass |

---

## 30. Engine Ownership

This section references the mandatory ownership contract defined in A.5.0 Section 5.4.

| Element | Requirement |
|:---|:---|
| **Accountable Owner** | Framework Architecture Team |
| **Maintained Boundaries** | The owner controls the Certification Engine's architectural specification, certification criteria model, decision computation logic, and handoff contract. The owner does not control upstream engine artifacts, review readiness determinations, governance policy definitions, or canonical promotion execution. |
| **Decision Rights** | The owner may autonomously define certification criteria, decision logic, and governance interface protocols. The owner must escalate to Framework Governance for any change that affects the certification-to-governance handoff contract, the governance boundary invariant (INV-CERT-5), the certification-to-memory handoff contract, or the engine's capability domain mapping. |
| **Validation Obligations** | The owner must validate that all certification criteria are deterministic, all eight invariants are preserved, the governance interface protocol is well-defined, and the handoff contracts produce artifacts consumable by the Memory Engine and Governance Engine before requesting review. |
| **Review Obligations** | The owner must present the complete Certification Engine RFC to the Enterprise Documentation Standards Board for structural and metadata review, and to Framework Governance for architectural review. The owner must additionally present the governance interface design to human governance for approval. |
| **Certification Responsibilities** | The owner must produce evidence that all eight invariants hold, that the certification pipeline is deterministic for INTERNAL scope, that the governance boundary is enforced for CANONICAL scope, and that the handoff to the Memory Engine and Governance Engine meets all certification gates. |
| **Ownership Handoff Limitations** | Ownership may transfer only through explicit Framework Governance record. No implicit or silent authority transfer is permitted. The receiving owner must acknowledge acceptance through governance record. Any governance-waiting state at the time of ownership transfer must be explicitly handed over with complete context. |

### Ownership Transfer Protocol

If ownership of the Certification Engine is transferred, the following protocol must be followed:

1. The current owner submits an ownership transfer request to Framework Governance, identifying the proposed receiving owner and the reason for transfer.
2. Framework Governance reviews the transfer request and confirms that the receiving owner has the required architectural expertise and governance authority.
3. If any certification is in `GOVERNANCE_WAITING` state at the time of transfer, the current owner must document the complete certification context, including the governance package, the waiting duration, and any pending governance communications.
4. The receiving owner acknowledges acceptance through a governance record that references the transfer request.
5. The transfer becomes effective when both the transfer record and the acceptance record are present in the governance log.
6. After transfer, the new owner assumes all Decision Rights and Obligations defined in the ownership table above.

The Certification Engine's ownership transfer protocol is more detailed than other engines' because of the governance-waiting state. Unlike other engines that have no persistent state between invocations, the Certification Engine may have an active governance-waiting state that represents an in-flight human governance interaction. Losing this context during ownership transfer would waste the human governance effort and could result in a governance package without a corresponding certification artifact.

---

## 31. Engine Handoff Contract

This section references the mandatory handoff contract defined in A.5.0 Section 5.5.

### Handoff Prerequisites

1. The Certification Engine has completed all certification criteria evaluations for the applicable scope (INTERNAL or CANONICAL).
2. The certification decision has been deterministically computed from the aggregated criteria results.
3. For CANONICAL certification, the human governance response has been received, validated, and recorded as a governance approval record. The governance response must carry an explicit APPROVED or REJECTED decision.
4. The Certification Artifact has passed all output validation rules (Section 13), including mandatory field presence, decision consistency, reference validity, version format, governance record presence (for CANONICAL), and finding preservation.
5. All eight engine invariants (Section 14) hold for the completed certification. Invariant verification is performed as a final check before handoff; any invariant violation prevents handoff and triggers an ERROR state.
6. The decision rationale has been produced and documents the specific criteria results, findings, and governance policy rules that informed the certification decision.
7. For CERTIFIED_WITH_CONDITIONS decisions, all conditions have been structured with the required fields (conditionId, sourceCriterionId, description, responsibleParty, resolutionCriteria, priority, sourceFindingReferences).

### Required Evidence

| Evidence Item | Source | Retention |
|:---|:---|:---|
| Certification Artifact (complete) | Certification Engine | Handoff snapshot |
| Review Artifact (reference) | Review Engine | Reference only |
| Governance approval record (if CANONICAL) | Human Governance | Handoff snapshot |
| Certification criteria results (all) | Certification Engine | Handoff snapshot |
| Certification event log (from certification.started to certification.completed) | Certification Engine | Handoff snapshot |
| Decision rationale | Certification Engine | Handoff snapshot |
| Previous certification reference (if re-certification) | Certification Engine | Reference only |

### Validated Outputs

- Certification Artifact (immutable, versioned, with complete criteria results, preserved findings, decision, and governance approval record if applicable).
- Certification event log (complete trace of the certification pipeline execution from certification.started through certification.completed or certification.failed).
- Canonical promotion authorization (for CANONICAL CERTIFIED decisions only). This authorization is a structured, typed record that document governance carries and uses to execute the actual status change. The authorization references the Certification Artifact, the governance approval record, and the artifact being promoted.

### Snapshot Expectations

The Certification Artifact is an immutable snapshot of the certification decision at the time of production. It does not change after emission. If re-certification is required (e.g., after upstream corrections produce a new Review Artifact), a new Certification Artifact with a new version is produced. The Memory Engine and Governance Engine receive a snapshot that is guaranteed not to change. The governance approval record, once attached, is part of the immutable snapshot.

The snapshot guarantee has specific implications for downstream consumers. The Memory Engine may archive the Certification Artifact knowing it will never need to be updated. The Governance Engine may record the certification outcome knowing the decision is final. Document governance may act on the canonical promotion authorization knowing the authorization is permanent. If any of these consumers need to reflect a subsequent re-certification, they reference the new Certification Artifact — they do not modify the original.

### Receiving Consumers

1. **Memory Engine (A.5.9)** — Primary consumer. Receives the Certification Artifact for archival, retrieval, and certification history management. The Memory Engine stores the Certification Artifact as an immutable record and indexes it for retrieval by certification ID, review reference, and artifact lineage.
2. **Governance Engine (A.5.10)** — Primary consumer. Receives the Certification Artifact for governance record-keeping, compliance tracking, and governance policy feedback. The Governance Engine uses certification outcomes to evaluate the effectiveness of governance policies and to maintain the governance record of canonical promotions.
3. **Document Governance** — Conditional consumer. Receives canonical promotion authorization for CANONICAL-level certifications to execute the actual status change from non-canonical to canonical. Document governance is not an Engine Platform engine but an external governance function that consumes the Certification Engine's authorization output.

### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Certification produces NOT_CERTIFIED | Certification Artifact still produced and delivered to Memory Engine and Governance Engine | Downstream engines record the outcome; upstream engines may re-work and re-submit |
| Certification produces DEFERRED | Certification Artifact produced with deferral reason | Review Engine and upstream engines receive deferral notification |
| Certification produces internal error | ERROR state; error Certification Artifact produced if possible | Pipeline observability alerted; certification must be re-initiated |
| Governance response is REJECTED | Certification Artifact produced with NOT_CERTIFIED decision | Governance Engine records the rejection; upstream engines may address governance concerns |
| Governance unreachable | DEFERRED Certification Artifact with governance unreachability reason | Human governance alerted via alternative channel; governance package retained for late response |
| Memory Engine unreachable | Certification Artifact retained; handoff queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Governance Engine unreachable | Certification Artifact retained; handoff queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Invariant violation | ERROR state; CRITICAL finding recorded | Certification Artifact produced with NOT_CERTIFIED; invariant violation documented |

### Audit Record Expectations

Every handoff produces an audit record containing:

- Certification identifier and version.
- Review Artifact reference (including review identifier and version).
- Certification decision and level.
- Criteria results summary (pass count, fail count, waived count).
- Total finding count preserved from the Review Artifact.
- Governance approval record reference (if CANONICAL).
- Previous certification version reference (if re-certification).
- Handoff timestamp.
- Receiving consumer identifier.
- Handoff status (delivered, queued, or failed).

The audit record is emitted as a structured event and is retained by pipeline observability. The audit record is not part of the Certification Artifact itself — it is metadata about the handoff event. However, the Certification Artifact contains sufficient information (certification ID, review reference, decision, criteria results, governance record) to reconstruct the audit context from the artifact alone.

### Certification Gates

1. **Pre-handoff validation** — Certification Artifact passes all output validation rules defined in Section 13.
2. **Evidence completeness** — All required evidence items present in the handoff package as defined in the Required Evidence table.
3. **Consumer readiness** — Memory Engine and Governance Engine registered and reachable (or handoff queued per A.4.5).
4. **Invariant preservation** — All eight invariants (Section 14) hold at handoff time. Any invariant violation detected at handoff prevents the handoff and triggers an ERROR state.
5. **Governance boundary enforcement** — For CANONICAL certification, governance approval record is present, valid, and carries an APPROVED decision. A CANONICAL Certification Artifact without a valid governance approval record is architecturally invalid.
6. **Finding preservation** — All Review Artifact findings are present in the Certification Artifact. The finding count in the Certification Artifact must equal or exceed the finding count in the Review Artifact (equal if no certification-level findings were added; greater if certification criteria produced additional findings).
7. **Cross-engine consistency** — All upstream artifact references in the Certification Artifact are valid, versioned, and match the references in the Review Artifact. No reference drift is permitted between the Review Artifact and the Certification Artifact.

---

## 32. Validation Checklist

This validation checklist confirms that the Certification Engine RFC meets all structural, metadata, scope, and content quality requirements. It is the final section of the document and serves as the self-assessment that the RFC author performs before submitting the document for review.

### STD-010 Metadata Validation

| Check | Status |
|:---|:---|
| Metadata heading is exactly `## Document Metadata` | Pass |
| Table shape is exactly `\| Field \| Value \|` with left-aligned columns | Pass |
| All 27 mandatory STD-010 fields present | Pass |
| Conditionally mandatory fields evaluated and included only when applicable | Pass |
| Normative Authority does not include references, dependencies, consumed documents, or related documents | Pass |
| Normative References, Dependencies, Consumes, Produces, Related Specifications are separate fields | Pass |
| `Canonical Status` explicitly states non-canonical | Pass |
| Exactly one Owner identified | Pass |
| Version format follows STD-010 Section 4.6 | Pass |
| Complete metadata does not claim canonical status | Pass |

### Structural Validation

| Check | Status |
|:---|:---|
| Section order follows A.5.0 Section 5.1 order | Pass |
| All 31 sections present | Pass |
| Universal Contract (A.5.0 Section 4) compliance for every section | Pass |
| No mandatory section omitted or merged | Pass |
| No section redefines upstream Engine Platform models | Pass |

### Scope Validation

| Check | Status |
|:---|:---|
| No implementation details (code, APIs, schemas) | Pass |
| No AI/LLM consumption in core architecture | Pass |
| No persistence mechanism specification | Pass |
| No agent or swarm runtime design | Pass |

### Content Quality Validation

| Check | Status |
|:---|:---|
| All 8 invariants are testable assertions | Pass |
| All operations have complete signatures (purpose, inputs, outputs, side effects, failure modes) | Pass |
| All events have complete payloads and consumer expectations | Pass |
| All responsibilities map to at least one operation | Pass |
| All lifecycle transitions produce events | Pass |
| Cross-engine consumption contracts are explicit and typed | Pass |
| Governance interface protocol is fully specified | Pass |
| Certification scope behaviour (INTERNAL vs CANONICAL) is documented | Pass |
| All operations have complete failure mode documentation | Pass |

---

*End of A.5.8 — Certification Engine RFC*

## 33. Completion Report

Completion reporting shall identify metadata, terminology, ownership, authority, dependency, cross-reference, and validation changes without declaring certification, freeze, approval, or canonical promotion.


## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

# A.5.7 — Review Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-7` |
| Title | A.5.7 — Review Engine RFC |
| Version | `0.3.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Specialization Architecture |
| Document Type | Engine Specialization RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-13 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.005.7` |
| Scope | Defines the Review Engine specialization only, including its purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation within the AI-DOS v4 Engine Platform. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification execution, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; A.5.1 Context Engine RFC; A.5.2 Knowledge Engine RFC; A.5.3 Planning Engine RFC; A.5.4 Decision Engine RFC; A.5.5 Execution Engine RFC; A.5.6 Validation Engine RFC; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, canonical terminology, metadata rules, ValidationResult from Validation Engine (A.5.6), upstream Engine handoff outputs (ContextSnapshot, KnowledgeArtifact, PlanArtifact, DecisionArtifact, ExecutionResult) resolved via validation references, and repository-normalization instructions. |
| Produces | Review Engine architecture specification, Review Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.3-Planning-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.4-Decision-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.5-Execution-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.6-Validation-Engine-RFC.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, A.5.0 template compliance, TPL-001 specialization compliance, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

<details>
<summary>Metadata Value Expansion</summary>

**Normative References (full paths):**

- `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`
- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`

**Consumed Authorities:**

- TPL-001: RFC mandatory section structure (20 sections), specialization model, validation rules, optional section catalog, anti-patterns
- TPL-000: template lifecycle, template taxonomy, placeholder grammar, naming conventions, validation model, compliance levels, certification requirements, directory structure, composition and inheritance model
- STD-010: metadata field definitions, relationship taxonomy, document class expectations, lifecycle model, governance rules
- STD-003: canonical terminology for RFC-related vocabulary
- A.3: Runtime Architecture as the governing architectural context
- A.4: Engine Platform Architecture as the governing engine context
- A.4.1–A.4.7: Engine Foundation RFCs as the governing engine capability and contract context
- A.5.0: Engine Specialization RFC Template as the governing template contract, section mapping, and validation model
- A.5.1: Context Engine RFC as the upstream provider of ContextSnapshot
- A.5.2: Knowledge Engine RFC as the upstream provider of KnowledgeArtifact
- A.5.3: Planning Engine RFC as the upstream provider of PlanArtifact
- A.5.4: Decision Engine RFC as the upstream provider of DecisionArtifact
- A.5.5: Execution Engine RFC as the upstream provider of ExecutionResult
- A.5.6: Validation Engine RFC as the upstream provider of ValidationResult (primary review trigger)

</details>

---

## Executive Summary

A.5.7 defines the architecture of the Review Engine, the seventh individual Engine specialization in Phase 2 of the AI-DOS v4 Engine Platform. The Review Engine provides an independent readiness assessment after the Validation Engine has completed its verification of execution outputs. While the Validation Engine performs deterministic assertion-based verification against constraint sources, the Review Engine operates at a higher architectural level: it evaluates whether the entire pipeline output — from context through execution to validation — meets the readiness criteria required for certification. The Review Engine is the bridge between automated verification and human-governed certification.

This RFC specializes A.5.0 (which specializes TPL-001) by defining the Review Engine's purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state characteristics, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle behaviour. The Review Engine evaluates four criteria groups (completeness, consistency, traceability, evidence) and produces structured Review Artifacts with readiness levels (READY_FOR_CERTIFICATION, CONDITIONALLY_READY, NOT_READY) and pipeline verdicts (CERTIFY, HOLD, DO_NOT_CERTIFY). The Review Engine does not redefine Runtime, Engine Platform, Engine Foundation, or any upstream standard.

---

## Purpose

### Engine Purpose

The Review Engine exists to provide an independent readiness assessment after the Validation Engine has completed its verification of execution outputs. While the Validation Engine (A.5.6) performs deterministic assertion-based verification against constraint sources, the Review Engine operates at a higher architectural level: it evaluates whether the entire pipeline output — from context through execution to validation — meets the readiness criteria required for certification. The Review Engine is the bridge between automated verification and human-governed certification.

The distinction between validation and review is critical. Validation answers the question "Do the execution outputs conform to the specified constraints?" Review answers the broader question "Is the pipeline output ready for certification?" These are different concerns. A pipeline output may pass all validation assertions (full conformance) yet fail review because review criteria encompass dimensions that validation does not assess — such as completeness of the review package, consistency of cross-engine artifact references, traceability of the full pipeline chain, and readiness of supporting evidence for human governance review.

Without a dedicated Review Engine, the system would transition directly from automated validation to certification without an intermediate readiness gate. This creates a risk that incomplete, inconsistent, or inadequately evidenced pipeline outputs reach the Certification Engine, forcing certification to handle concerns that belong at the review level. The Review Engine eliminates this risk by ensuring that every certification input has been assessed for readiness before it enters the certification process.

The Review Engine's purpose aligns with Engine Capability domain "Quality Assurance" as defined by A.4.7. The Review Engine uniquely owns the capability of independent readiness assessment, review artifact production, and review-to-certification preparation within the Engine Platform.

The Review Engine does not perform validation — that is the Validation Engine's responsibility. The Review Engine does not perform certification — that is the Certification Engine's responsibility. The Review Engine defines the architectural contract for review operations: what constitutes a review, how readiness is assessed, how findings are classified, and how review outputs are handed off to the Certification Engine.

### Engine Mission

The mission of the Review Engine is to independently assess the readiness of pipeline outputs for certification by evaluating review criteria across completeness, consistency, traceability, and evidence dimensions, producing structured review artifacts that enable the Certification Engine to make informed certification decisions.

This mission translates into five mission-level objectives:

1. **Independence** — The Review Engine's assessment is independent of the Validation Engine's verdict. A PROCEED verdict from Validation does not automatically result in a positive review. The Review Engine applies its own criteria that may identify issues not captured by validation assertions. Conversely, a HOLD or REJECT verdict from Validation does not preclude a review (though the review findings will reflect the validation outcome).

2. **Completeness Assessment** — The Review Engine verifies that the pipeline output package is complete: all expected artifacts from all upstream engines are present, all references between artifacts are resolvable, all metadata fields are populated, and all required evidence items are attached. Incomplete packages cannot proceed to certification.

3. **Cross-Engine Consistency Assessment** — The Review Engine evaluates whether the full set of pipeline artifacts is internally consistent. This goes beyond the Validation Engine's consistency assertions by examining higher-level consistency: do the context, knowledge, plan, decision, execution, and validation artifacts tell a coherent story? Are there contradictions between engines that validation did not detect because it assessed each constraint source independently?

4. **Traceability Verification** — The Review Engine verifies that every pipeline output can be traced back through the complete engine chain to the original request. No artifact should exist without a clear provenance chain. No decision should lack a traceable authorization. No execution step should lack a traceable plan step and decision authorization.

5. **Certification Readiness Packaging** — The Review Engine produces a structured Review Artifact that packages all pipeline outputs, review findings, and supporting evidence into a format optimized for Certification Engine consumption. The Review Artifact is the sole input to the Certification Engine.

---

## Scope

### In Scope

A.5.7 governs:

1. The Review Engine's architectural purpose, mission, and capability domain alignment within the Engine Platform.
2. The Review Engine's responsibilities, non-responsibilities, and boundary definitions relative to peer Engines and platform layers.
3. The Review Engine's internal model, including the review pipeline, criteria registry, finding model, and readiness determination logic.
4. The Review Engine's consumed inputs (ValidationResult, resolved upstream artifacts) and produced outputs (Review Artifact, review events, feedback).
5. The Review Engine's operations, events, and runtime interaction patterns.
6. The Review Engine's invariants, validation rules, and certification requirements.
7. The Review Engine's ownership contract and handoff contract.
8. The Review Engine's lifecycle behaviour within the A.4.4 Engine Lifecycle model.
9. AI consumption boundaries — the Review Engine is fully deterministic and does not invoke LLMs.

### Out of Scope

A.5.7 does not:

1. Redefine Runtime Architecture (A.3).
2. Redefine Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1 through A.4.7).
3. Define the architectural content or behaviour of any other Engine (A.5.1 through A.5.6, A.5.8, etc.).
4. Replace or restate STD-010 metadata field definitions or rules.
5. Replace or restate TPL-001 RFC mandatory section definitions or validation rules.
6. Replace or restate A.5.0 template governance, section mapping, or Universal Section Contract.
7. Implement review criteria logic, finding classification algorithms, or readiness determination computation.
8. Define LLM call orchestration, prompt engineering, or model selection for review operations.
9. Execute certification or perform canonical promotion.

**Mandatory Out of Scope Items** (per A.5.0 Section 9):

- Source code, implementation files, and code repositories
- REST endpoints, API definitions, GraphQL schemas, gRPC service definitions, and transport protocols
- Persistence mechanisms, database schema design, Neo4j implementation specifics, and vector database configuration
- Caching strategies, cache invalidation, and cache infrastructure
- LLM call orchestration, prompt engineering, model selection, token management, and inference optimization
- Agent runtime design, agent lifecycle management, and agent communication protocols
- Swarm runtime design, swarm coordination, and swarm topology management
- Platform adapter specifications and adapter lifecycle management
- ProjectStatus updates, project tracking, and milestone reporting
- Certification execution — this RFC defines certification requirements but does not execute the certification process
- Canonical promotion — this RFC defines promotion requirements but does not perform the promotion

**Review Engine-Specific Out of Scope Items:**

- Certification execution (as distinct from certification readiness assessment)
- Canonical promotion of reviewed artifacts
- Pipeline output correction or re-execution
- Human governance interaction (owned by Certification Engine A.5.8 and Governance Engine A.5.10)
- Memory persistence operations (owned by Memory Engine A.5.9)
- Plan revision triggering (owned by Planning Engine A.5.3 in response to review feedback)
- Specific review criteria definitions (defined in governance-approved configuration, not in this architecture RFC)

### Future Consumers

| Consumer | Relationship | Description |
|:---|:---|:---|
| **Certification Engine (A.5.8)** | Primary consumer | Consumes the Review Artifact as the sole input to the certification process |
| **Memory Engine (A.5.9)** | Secondary consumer | May consume Review Artifacts for archival and retrieval purposes |
| **Governance Engine (A.5.10)** | Conditional consumer | Consumes findings with `ESCALATE_TO_GOVERNANCE` disposition |
| **Pipeline Observability** | Infrastructure consumer | Consumes review events for monitoring, alerting, and audit trail |
| **Upstream Engines (A.5.1–A.5.6)** | Feedback consumers | Consume review feedback when findings are attributable to their outputs |
| **Workflow Engine (A.5.11)** | Prospective consumer | May consume review readiness summaries for workflow step gating |
| **Registry Engine (A.5.12)** | Prospective consumer | May consume review capability metadata for engine capability discovery |

---

## Normative Authority

| Authority | Relationship |
|:---|:---|
| Human Governance | Ultimate approval and canonical promotion authority for all AI-DOS v4 documents, including this Engine RFC. |
| `AGENTS.md` | Defines the AI agent behavioural boundaries and operational constraints that this AI-authored document shall observe. |
| `docs/AI/GOVERNANCE.md` | Establishes the governance framework, review processes, and approval workflows that this RFC shall follow. |
| `docs/AI/FrameworkGovernance.md` | Defines framework-level governance policies, conflict resolution, exception handling, and escalation procedures. |

---

## Normative References

| Reference | Full Path | Consumption |
|:---|:---|:---|
| A.5.0 | `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md` | Governing template; provides Engine RFC section mapping, Universal Section Contract, Engine Ownership Contract, Engine Handoff Contract, and validation model. A.5.7 follows A.5.0 as its direct governing template (per the specialization hierarchy TPL-000 → TPL-001 → A.5.0 → A.5.7). |
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; A.5.0 specializes TPL-001 for the Engine domain, and A.5.7 inherits that specialization. Provides the 20 mandatory output sections, optional section catalog, specialization model, validation rules, and anti-patterns. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, placeholder grammar, naming conventions, and validation model. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; defines the metadata schema, mandatory fields, relationship taxonomy, version rules, and document class expectations. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; defines the terminology that this RFC shall use for Engine, Platform, Runtime, Kernel, and related concepts. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.3 Runtime Architecture | Governing architectural context for all Runtime documents including Engine RFCs | Review Engine RFC would lack the architectural context that defines its operational environment |
| A.4 Engine Architecture | Governing Engine Platform definition, capability model, and contract framework | Review Engine RFC would lack the platform boundary that separates Engine specialization from platform definition |
| A.4.1 Engine Kernel RFC | Kernel contract and mediation rules that the Review Engine consumes | Review Engine could not define its interaction with the Kernel layer |
| A.4.2 Engine Metadata RFC | Metadata model for Engine identity, classification, and tracking | Review Engine would lack a consistent metadata foundation |
| A.4.3 Engine Registry RFC | Registry services for Engine discovery and consumer management | Review Engine could not register as a capability provider or resolve upstream artifact references |
| A.4.4 Engine Lifecycle RFC | Lifecycle state machine that all Engines must follow | Review Engine could not define Engine-specific lifecycle behaviour within the platform model |
| A.4.5 Engine Communication RFC | Communication types, modes, and failure/recovery model | Review Engine could not define Engine-specific communication patterns or event delivery |
| A.4.6 Engine State RFC | State categories, visibility model, and synchronization rules | Review Engine could not define Engine-specific state management |
| A.4.7 Engine Capability RFC | Capability taxonomy and registration model | Review Engine could not reference the "Quality Assurance" capability domain |
| A.5.0 Engine Specialization RFC Template | Governing template contract, section mapping, and validation model | Review Engine RFC would lack the structural and governance foundation for Engine RFC authoring |
| A.5.1 Context Engine RFC | Produces ContextSnapshot consumed during review | Review Engine would lack the contextual artifact for completeness and traceability assessment |
| A.5.2 Knowledge Engine RFC | Produces KnowledgeArtifact consumed during review | Review Engine would lack the knowledge artifact for consistency assessment |
| A.5.3 Planning Engine RFC | Produces PlanArtifact consumed during review | Review Engine would lack the plan artifact for completeness, consistency, and traceability assessment |
| A.5.4 Decision Engine RFC | Produces DecisionArtifact consumed during review | Review Engine would lack the decision artifact for authorization traceability and consistency assessment |
| A.5.5 Execution Engine RFC | Produces ExecutionResult consumed during review | Review Engine would lack the execution artifact for completeness, evidence, and traceability assessment |
| A.5.6 Validation Engine RFC | Produces ValidationResult that triggers review | Review Engine would lack its primary intake trigger and upstream artifact reference chain |
| STD-010 | Document metadata schema and compliance rules | Metadata block would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology would be inconsistent across Engine RFCs |
| TPL-000 | Template governance and lifecycle model | Template compliance would lack governing template authority |
| TPL-001 | RFC template standard and mandatory section structure | RFC would lack the structural foundation it specializes through A.5.0 |

---

## Architecture

### Engine Position

The Review Engine occupies the seventh position in the Phase 2 Engine pipeline, immediately after the Validation Engine (A.5.6) and immediately before the Certification Engine (A.5.8). It is the convergence point where the full pipeline output is assessed for certification readiness before entering the human-governed certification stage.

```
Context (A.5.1) ──┐
Knowledge (A.5.2) ──┤
Planning (A.5.3) ───┤
Decision (A.5.4) ──┤
Execution (A.5.5) ──┼──→ Validation (A.5.6) ──→ Review (A.5.7) ──→ Certification (A.5.8)
                    │                                    │
                    │                              ┌─────┴─────┐
                    │                              │  Feedback  │
                    │                              │ (to upstream
                    │                              │   engines) │
                    │                              └───────────┘
```

The Review Engine has the widest input breadth of any engine except the Validation Engine. It consumes the validation result and, through the validation result's input references, the complete chain of upstream artifacts. Unlike the Validation Engine, which processes artifacts through assertion predicates, the Review Engine processes them through readiness criteria that assess the overall quality and completeness of the pipeline output package.

The Review Engine's downstream consumer is exclusively the Certification Engine (A.5.8). The Review Artifact is designed as the sole input to the Certification Engine, ensuring a clean, well-structured handoff. The Review Engine may also emit feedback events to upstream engines, but these are informational and do not represent primary data flow.

### Internal Engine Model

The Review Engine's internal model consists of the following conceptual structures:

**Review Pipeline**

```
Review Intake
    │
    ├── Artifact Resolution (resolve all upstream references)
    ├── Input Validation (verify artifact presence and format)
    │
    ↓
Review Criteria Evaluation (4 sequentially-evaluated criteria groups)
    ├── Completeness Criteria
    ├── Consistency Criteria
    ├── Traceability Criteria
    └── Evidence Criteria
    │
    ↓
Finding Classification
    ├── Severity Assignment (CRITICAL / MAJOR / MINOR / OBSERVATION)
    ├── Category Assignment (completeness / consistency / traceability / evidence / cross-engine)
    └── Disposition Assignment (MUST_FIX / SHOULD_FIX / FOR_INFORMATION / ESCALATE)
    │
    ↓
Readiness Determination
    ├── Aggregate finding analysis
    ├── Readiness level computation
    └── Pipeline verdict computation
    │
    ↓
Review Artifact Production
    ├── Assemble Review Artifact
    ├── Version and timestamp
    └── Emit review events
```

**Review Criteria Registry**

The Review Criteria Registry is a structured catalog of all review criteria organized into four groups. Each criterion is defined as a deterministic evaluation function with a clear pass/fail outcome and a defined mapping to finding severity. The registry is loaded during engine initialization from governance-approved configuration and remains constant for the duration of the engine's operational lifecycle.

| Criteria Group | Criteria Count | Evaluation Focus | Example Criteria |
|:---|:---|:---|:---|
| Completeness | 8–15 | Artifact presence, metadata population, reference resolvability | All plan steps have corresponding execution results; all decision authorizations reference valid plan steps; all validation assertions have corresponding execution outputs; all upstream artifact versions are present in the validation result's input references |
| Consistency | 10–20 | Cross-engine coherence, constraint conflict assessment, logical consistency | Plan step outputs are semantically consistent with decision authorization scope; context constraints referenced in the plan match the context snapshot at planning time; knowledge constraints applied during execution are consistent with the knowledge artifact at execution time; no unresolved constraint conflicts exist between upstream engines |
| Traceability | 8–15 | Provenance chain verification, authorization traceability, step-to-plan mapping | Every execution step traces back to a plan step; every plan step traces back to a decision authorization; every decision authorization traces back to a planning alternative; the full chain from request to execution output is unbroken and version-annotated |
| Evidence | 5–10 | Validation evidence completeness, execution record integrity, decision documentation | Validation result includes complete assertion results for all categories; execution records include preconditions, postconditions, and side effects for every step; decision artifacts include evaluation rationale and alternative analysis; all artifact versions are referenced with their engine-of-origin identifiers |

**Criteria Evaluation Model**

Each criterion in the registry is defined with the following structure:

```
CriterionDef {
    criterionId: string        // e.g., "completeness-plan-step-coverage"
    group: CriteriaGroup       // completeness | consistency | traceability | evidence
    description: string        // Human-readable criterion description
    evaluationFunction: (ArtifactSet) → CriterionResult
    severityMapping: { pass: FindingSeverity, fail: FindingSeverity }
    applicableScope: FULL | DEGRADED   // Whether criterion applies in degraded mode
}

CriterionResult {
    criterionId: string
    outcome: PASS | FAIL | SKIPPED
    details: string
    affectedArtifacts: string[]
}
```

Criteria within a group are independent — the outcome of one criterion does not influence the evaluation of another criterion within the same group. Criteria groups are evaluated sequentially in a fixed order: completeness → consistency → traceability → evidence. This order is chosen so that completeness issues are detected before consistency issues (which depend on artifacts being present), and traceability issues are detected before evidence issues (which depend on traceability chains being intact).

**Finding Model**

Each review finding is a structured record:

| Field | Type | Description |
|:---|:---|:---|
| `findingId` | `string` | Unique identifier |
| `criterionId` | `string` | The review criterion that produced this finding |
| `severity` | `enum` | `CRITICAL` / `MAJOR` / `MINOR` / `OBSERVATION` |
| `category` | `enum` | `completeness` / `consistency` / `traceability` / `evidence` / `cross-engine` |
| `disposition` | `enum` | `MUST_FIX` / `SHOULD_FIX` / `FOR_INFORMATION` / `ESCALATE_TO_GOVERNANCE` |
| `description` | `string` | Human-readable description of the finding |
| `affectedArtifacts` | `string[]` | Upstream artifact references affected by this finding |
| `remediationHint` | `string` | Suggested resolution direction (not a corrective action) |

**Readiness Determination Model**

The readiness level is computed from the aggregate finding set using a deterministic two-phase process:

*Phase 1: Severity Aggregation*

```
severityCounts = aggregate findings by severity
criticalCount = severityCounts[CRITICAL]
majorCount = severityCounts[MAJOR]
escalateCount = count(findings where disposition == ESCALATE_TO_GOVERNANCE)
```

*Phase 2: Readiness Level Computation*

```
if criticalCount > 0:
    readinessLevel = NOT_READY
    pipelineVerdict = DO_NOT_CERTIFY
else if majorCount > 0:
    readinessLevel = CONDITIONALLY_READY
    pipelineVerdict = HOLD
else if escalateCount > 0:
    readinessLevel = CONDITIONALLY_READY
    pipelineVerdict = HOLD
else:
    readinessLevel = READY_FOR_CERTIFICATION
    pipelineVerdict = CERTIFY
```

This model ensures that a single CRITICAL finding is sufficient to block certification (one-showstopper rule), while MAJOR findings allow conditional readiness (the Certification Engine may decide to proceed if MAJOR findings are acceptable risk). ESCALATE_TO_GOVERNANCE findings do not block readiness on their own but signal that governance attention is required.

**Internal Data Flow**

```
InputBundle {
    validationResult: ValidationResult    // From Validation Engine
    contextSnapshot: ContextSnapshot       // Resolved via validation references
    knowledgeArtifact: KnowledgeArtifact   // Resolved via validation references
    planArtifact: PlanArtifact             // Resolved via validation references
    decisionArtifact: DecisionArtifact     // Resolved via validation references
    executionResult: ExecutionResult       // Resolved via validation references
}

ReviewInternalState {
    inputBundle: InputBundle
    criteriaRegistry: CriteriaRegistry
    evaluatedCriteria: CriterionResult[]
    classifiedFindings: ReviewFinding[]
    readinessLevel: ReadinessLevel
    pipelineVerdict: PipelineVerdict
    currentStage: ReviewStage
    scopeMode: FULL | DEGRADED
    missingArtifacts: string[]
}
```

The `ReviewInternalState` exists only during the review lifecycle and is not persisted. After the Review Artifact is produced and emitted, all internal state is discarded. This ensures that no review state leaks between invocations and that every review is a clean, independent evaluation.

### Resolution Rules

**Ambiguity Resolution**

1. **Benefit of the pipeline** — If a criterion result is ambiguous (could be pass or fail), the Review Engine resolves in favour of the pipeline (pass). The ambiguity is recorded as a MINOR finding with `FOR_INFORMATION` disposition so that the Certification Engine is aware of the borderline result.

2. **Missing evaluation data** — If a criterion cannot be evaluated because a required upstream artifact is missing, the criterion is marked as `SKIPPED` and recorded as a MAJOR finding. The review continues with remaining criteria.

3. **Conflicting criterion results** — If two criteria within the same group produce conflicting assessments (e.g., one completeness criterion passes, another fails for the same artifact), both findings are recorded and the more severe outcome is used for the aggregate group result.

**Conflict Resolution**

1. **Cross-engine conflict authority** — When the Review Engine detects a conflict between upstream engine artifacts (e.g., a plan requirement contradicts a context constraint), it records the conflict as a finding with `ESCALATE_TO_GOVERNANCE` disposition. The Review Engine does not resolve cross-engine conflicts; it identifies them for the Certification Engine and Governance Engine to address.

2. **Validation-Review disagreement** — When the Review Engine's readiness determination disagrees with the Validation Engine's pipeline verdict (e.g., Validation says PROCEED but Review says NOT_READY), the Review Engine's determination takes precedence for certification readiness. The disagreement is recorded as a finding.

3. **Priority ordering for readiness** — When computing the aggregate readiness level, finding severity takes precedence over count: a single CRITICAL finding results in NOT_READY regardless of how many other findings pass.

**Fallback Behaviour**

- If the Review Engine encounters an internal error during evaluation, it produces a Review Artifact with `NOT_READY` readiness level, records the error as a CRITICAL finding, and includes error details in the readiness summary.
- If the Review Engine cannot produce a Review Artifact due to a catastrophic failure, it emits a `review.failed` event and transitions to `ERROR` state. The pipeline must re-initiate the review.

### Engine State

The Review Engine's state characteristics within the A.4.6 state model:

| State | Description | Entry Condition | Exit Condition |
|:---|:---|:---|:---|
| `UNINITIALIZED` | Engine created but not initialized | Engine instantiation | Initialization begins |
| `INITIALIZING` | Review criteria registry being loaded | Initialization triggered | Criteria loaded and registry populated |
| `READY` | Engine accepting review requests | Initialization complete | Review request received |
| `INTAKE` | Resolving upstream artifacts and validating inputs | Review request accepted | All inputs resolved and validated |
| `EVALUATING` | Review criteria being evaluated | Intake complete | All criteria groups evaluated |
| `CLASSIFYING` | Findings being classified by severity, category, disposition | Evaluation complete | All findings classified |
| `DETERMINING` | Readiness level and verdict being computed | Classification complete | Readiness deterministically computed |
| `PRODUCING` | Review Artifact being assembled | Determination complete | Artifact validated and emitted |
| `COMPLETED` | Review finished; artifact delivered | Production complete | Engine returns to READY |
| `ERROR` | Unrecoverable error during review | Error detected during any stage | Error recovery complete; engine returns to READY |
| `TERMINATED` | Engine shut down | Shutdown requested | N/A (terminal state) |

State recovery: The Review Engine recovers from ERROR by reinitializing the review criteria registry and returning to READY. No in-progress review state is recovered; interrupted reviews must be re-initiated.

The Review Engine introduces six engine-specific sub-states (INTAKE, EVALUATING, CLASSIFYING, DETERMINING, PRODUCING, COMPLETED) that refine the A.4.6 `ACTIVE` state into review-specific processing stages. These sub-states are not visible to external engines — externally, the engine appears to be in the A.4.6 `ACTIVE` state. The internal sub-states exist to enable the Review Engine's deterministic event sequencing and state transition validation.

### AI Consumption Rules

The Review Engine does not invoke, orchestrate, or depend on any AI/LLM components. All review criteria, finding classification, and readiness determination are performed through deterministic evaluation functions. The Review Engine's architectural purpose — independent readiness assessment — is inherently incompatible with probabilistic or non-deterministic evaluation methods. Review findings must be reproducible and auditable; AI/LLM involvement would compromise these guarantees.

### Runtime Interaction Rules

The Review Engine interacts with the runtime exclusively through the Engine Platform's defined communication patterns (A.4.5):

- The Review Engine receives validation results via the handoff mechanism from the Validation Engine.
- The Review Engine emits review events via the event mechanism defined by A.4.5.
- The Review Engine delivers the Review Artifact to the Certification Engine via the handoff mechanism.
- The Review Engine delivers feedback to upstream engines via the event mechanism.
- The Review Engine does not make direct outbound calls to other engines, external systems, or I/O channels during review processing.

### Extension Model

The Review Engine may be extended through the following mechanisms:

- **New review criteria** — Additional criteria may be added to the review criteria registry without modifying the engine's core pipeline. New criteria must be deterministic and must define their mapping to finding severity and disposition.
- **New finding categories** — Additional finding categories may be introduced to address emerging review concerns. New categories must be defined in the criteria registry configuration.
- **Custom disposition rules** — The mapping from finding characteristics to disposition may be extended through configuration, provided the core disposition values (MUST_FIX, SHOULD_FIX, FOR_INFORMATION, ESCALATE_TO_GOVERNANCE) remain supported.

Extensions must not alter the Review Engine's invariants, particularly determinism (INV-REV-1) and independence (INV-REV-8). Extensions that introduce non-deterministic behaviour or compromise review-validation independence require Framework Governance approval.

### Knowledge Graph Integration

The Review Engine does not directly interact with a knowledge graph. The Review Engine consumes the Knowledge Engine's artifacts (A.5.2) as part of the review input package, but it does not query, update, or traverse a knowledge graph structure. Knowledge graph interaction is owned by the Knowledge Engine and the Memory Engine (A.5.9).

### Performance Characteristics

| Characteristic | Bound | Rationale |
|:---|:---|:---|
| Review latency (full scope) | Determined by artifact count and criteria count | Review is CPU-bound evaluation; no I/O during processing |
| Review latency (degraded scope) | Proportional to available artifacts | Degraded scope evaluates fewer criteria |
| Concurrent reviews | Not supported | One review at a time; concurrent requests rejected |
| Artifact resolution | Bounded by artifact registry lookup time | Artifact resolution uses Engine Registry (A.4.3) |
| Finding count | Unbounded (proportional to criteria count and artifact issues) | Large pipeline outputs may produce many findings |
| Review Artifact size | Proportional to input artifact count and finding count | Review Artifact references all upstream artifacts and all findings |

No AI/LLM involvement. No external I/O. No persistence operations. All performance is determined by deterministic in-memory evaluation.

### Security & Governance

**Security Boundaries**

- The Review Engine processes sensitive pipeline data including authorization decisions and execution results. All artifact access is read-only; no sensitive data is written or transmitted outside the pipeline.
- The Review Engine does not persist any data. All artifacts exist in memory only during the review lifecycle.
- The Review Engine does not make network calls or access external systems.

**Governance Constraints**

- The Review Engine operates within the governance framework defined by A.4 and the Framework Governance documents.
- Findings with `ESCALATE_TO_GOVERNANCE` disposition are flagged for the Governance Engine (A.5.10) but are not processed by the Review Engine itself.
- The Review Engine's readiness determination does not constitute a governance decision. Governance decisions are owned by the Governance Engine and human governance.
- The Review Engine must not be used to bypass, override, or circumvent certification requirements defined by the Certification Engine (A.5.8).

---

## Design Decisions

### DD-1: Four-Group Sequential Criteria Evaluation

**Context**: The Review Engine needs to evaluate multiple dimensions of pipeline output readiness. The criteria could be evaluated as a monolithic single pass, as parallel groups, or as sequential groups with dependencies.

**Options considered**: (a) Monolithic single-pass evaluation without group structure; (b) Parallel evaluation of all criteria groups; (c) Sequential evaluation of four criteria groups (completeness → consistency → traceability → evidence).

**Decision**: Option (c). The Review Engine uses four criteria groups evaluated sequentially in a fixed order.

**Rationale**: The sequential order is architecturally significant because each group builds on the prior group's results. Completeness evaluation must occur first because consistency checks require all artifacts to be present, traceability checks require artifact references to be valid (established by completeness), and evidence checks require traceability chains to be intact (established by traceability). Evaluating consistency before completeness would produce meaningless results for missing artifacts. The parallel model (option b) would violate this dependency ordering and complicate the event sequence. Criteria within a group remain independent, preserving evaluation efficiency within the sequential group structure.

### DD-2: Benefit-of-the-Pipeline Ambiguity Resolution

**Context**: The Validation Engine (A.5.6) uses conservative resolution (ambiguous results default to FAIL). The Review Engine faces a different architectural context — it is the last automated gate before human-governed certification. Ambiguous review results could be resolved conservatively (FAIL) or liberally (PASS).

**Options considered**: (a) Conservative resolution — ambiguous results default to FAIL, consistent with the Validation Engine; (b) Benefit-of-the-pipeline resolution — ambiguous results default to PASS with an OBSERVATION finding; (c) No ambiguity — all criteria must produce unambiguous results.

**Decision**: Option (b). Ambiguous criterion results resolve in favour of the pipeline (PASS) and are recorded as MINOR findings with `FOR_INFORMATION` disposition.

**Rationale**: The Review Engine's architectural position as the bridge to human-governed certification creates a different risk profile than the Validation Engine's position as the deterministic quality gate. The Validation Engine must be conservative because no human oversight follows immediately — its verdict directly drives pipeline routing. The Review Engine's output goes to the Certification Engine, which involves human governance. A borderline PASS with a transparent OBSERVATION finding is more appropriate than a borderline FAIL that would block certification for an issue that may not be real. The finding ensures full transparency — the Certification Engine sees the ambiguity and can apply human judgment. The conservative approach (option a) would create false negatives that block valid pipeline outputs from reaching human review. The no-ambiguity approach (option c) is impractical because criteria thresholds inherently involve some degree of judgment.

### DD-3: Review-Validation Independence

**Context**: The Review Engine consumes the Validation Engine's ValidationResult as its primary input. A design question is whether the Review Engine should treat the Validation Engine's verdict as a binding input to its own readiness determination, or whether it should be one input among many.

**Options considered**: (a) Validation verdict as a binding constraint — if Validation says REJECT, Review must produce NOT_READY; (b) Full independence — Review evaluates its own criteria independently of the Validation verdict, though it consumes the ValidationResult as evidence; (c) Weighted influence — the Validation verdict is one weighted input to the readiness determination algorithm.

**Decision**: Option (b). Full independence. The Review Engine's readiness determination is computed from its own criteria evaluation results, not from the Validation Engine's verdict.

**Rationale**: Independence is the Review Engine's reason for existence (INV-REV-8). If the Review Engine simply adopted the Validation Engine's verdict, there would be no architectural justification for a separate engine — the Certification Engine could consume the Validation Engine's output directly. The Review Engine evaluates dimensions that the Validation Engine does not assess (cross-engine consistency, traceability of the full pipeline chain, evidence completeness for human review). A PROCEED from Validation does not guarantee readiness (the pipeline output may have traceability gaps or missing evidence), and a REJECT from Validation does not preclude review (the Review Engine may determine that the validation failure is non-critical for certification purposes, though it will document the failure in its findings). The weighted influence model (option c) would create a hidden coupling between the two engines that undermines independence and complicates auditability.

### DD-4: Finding Severity Model with Four Levels

**Context**: The Review Engine needs to classify findings by severity. Options range from binary (blocking/non-blocking) to a fine-grained numeric scale. The severity classification directly drives the readiness determination.

**Options considered**: (a) Binary severity (BLOCKING / NON_BLOCKING); (b) Three levels (CRITICAL / WARNING / INFO), matching the Validation Engine's severity model; (c) Four levels (CRITICAL / MAJOR / MINOR / OBSERVATION); (d) Five or more levels for maximum granularity.

**Decision**: Option (c). Four severity levels: CRITICAL, MAJOR, MINOR, OBSERVATION.

**Rationale**: The binary model (option a) loses the distinction between a blocking issue and an issue that should be addressed but does not block certification. The three-level model (option b) aligns with the Validation Engine but does not provide enough granularity for the Review Engine's broader assessment scope — the Review Engine needs to distinguish between issues that require resolution before certification (MAJOR) and issues that are noteworthy but non-blocking (MINOR). The four-level model provides exactly this distinction: CRITICAL blocks certification unconditionally, MAJOR blocks unless the Certification Engine accepts the risk, MINOR should be addressed but does not block, and OBSERVATION is informational. Five or more levels (option d) would create classification ambiguity (when does MAJOR become HIGH-MAJOR?) without providing architectural benefit.

### DD-5: Single-Concurrency Review Design

**Context**: The pipeline may produce multiple validation results in sequence, each requiring review. The Review Engine could support concurrent reviews or restrict itself to one review at a time.

**Options considered**: (a) Concurrent reviews with isolation; (b) Single-concurrency design where concurrent requests are rejected; (c) Queue-based serialization.

**Decision**: Option (b). The Review Engine processes one review request at a time. Concurrent review requests are rejected.

**Rationale**: The single-concurrency design preserves the deterministic review guarantee (INV-REV-1) with the simplest possible architecture. The Review Engine's internal state (criteria registry, evaluation context, finding set) is designed for single-threaded operation. Concurrent reviews would require shared mutable state management and complex synchronization that could introduce non-determinism. The queue-based model (option c) adds complexity without providing architectural benefit over pipeline-level serialization, which is the pipeline orchestrator's responsibility. The Review Engine's review latency is bounded and predictable, enabling the pipeline orchestrator to schedule reviews efficiently.

### DD-6: Eight Invariants as Architectural Guarantees

**Context**: A.5.0's Author Guidance (A.2.16) requires invariants to be "few, precise, and verifiable." The Review Engine's independence requirement and its position as the bridge to certification suggest a specific set of invariants.

**Options considered**: (a) Minimal invariants (3-4 covering determinism and immutability); (b) Eight invariants covering determinism, no upstream mutation, single-writer output, immutable outputs, finding completeness, readiness determinism, full traceability, and review-validation independence; (c) More than eight for exhaustive coverage.

**Decision**: Option (b). Eight invariants that are each expressible as testable assertions.

**Rationale**: The Review Engine's independence from the Validation Engine (INV-REV-8) is unique among Engine Platform engines and must be explicitly invariant-protected. Finding completeness (INV-REV-5) ensures that the review is auditable — every criterion must produce a record, even when it passes. The remaining invariants (determinism, no mutation, single-writer, immutability, traceability, readiness determinism) mirror the Validation Engine's invariants where the same architectural concerns apply, adapted for the review context. Eight invariants cover all critical guarantees without introducing overlapping or redundant assertions.

---

## Responsibilities

### Engine Responsibilities

The Review Engine is accountable for the following architectural responsibilities, grouped by functional domain. Each responsibility maps to at least one operation defined in the Interfaces section, ensuring that every responsibility is operationally realizable.

**Review Intake**

- Receive the validation result from the Validation Engine (A.5.6) as the primary review trigger.
- Resolve and retrieve all upstream artifact references listed in the validation result's input references.
- Validate that the review input package contains all required upstream artifacts (context, knowledge, plan, decision, execution, validation).
- Determine whether the review scope is full (all artifacts present) or degraded (one or more artifacts unavailable).

**Review Criteria Evaluation**

- Evaluate completeness criteria: all expected artifacts present, all metadata fields populated, all artifact references resolvable.
- Evaluate consistency criteria: cross-engine artifact coherence, no unresolved constraint conflicts, no contradictory statements between upstream engines.
- Evaluate traceability criteria: every output traceable to its input chain, every decision traceable to its authorization, every execution step traceable to its plan step.
- Evaluate evidence criteria: all validation evidence attached, all execution records complete, all decision authorizations documented.

**Finding Classification**

- Classify each review finding by severity: `CRITICAL` (blocks certification), `MAJOR` (requires resolution before certification), `MINOR` (should be addressed but does not block), `OBSERVATION` (informational).
- Classify each finding by category: completeness, consistency, traceability, evidence, or cross-engine.
- Assign a review disposition to each finding: `MUST_FIX`, `SHOULD_FIX`, `FOR_INFORMATION`, or `ESCALATE_TO_GOVERNANCE`.

**Review Readiness Determination**

- Compute the overall review readiness level from the aggregate of finding classifications and dispositions.
- Determine whether the pipeline output package is `READY_FOR_CERTIFICATION`, `CONDITIONALLY_READY` (requires minor resolutions), or `NOT_READY`.
- Produce a structured readiness summary that explains the determination and identifies the specific findings that influenced it.

**Review Artifact Production**

- Produce a Review Artifact that packages the readiness determination, all findings, the complete set of upstream artifact references, and supporting evidence.
- Ensure the Review Artifact is immutable and versioned once produced.
- Structure the Review Artifact for direct consumption by the Certification Engine (A.5.8).

**Review Feedback**

- Emit review events to upstream engines when review findings identify issues attributable to a specific upstream engine.
- Provide structured feedback to the Validation Engine when review identifies gaps in validation coverage.
- Emit review completion events to the pipeline for observability and audit trail.

---

## Non Responsibilities

### Engine Non Responsibilities

The Review Engine is explicitly not responsible for:

- **Validation execution** — Deterministic assertion evaluation against constraint sources is owned by the Validation Engine (A.5.6). The Review Engine consumes validation results but does not re-execute assertions.
- **Certification decision-making** — The decision to certify, reject, or defer certification is owned by the Certification Engine (A.5.8). The Review Engine produces readiness assessments, not certification decisions.
- **Pipeline output correction** — The Review Engine does not fix, modify, or re-execute any upstream artifact. If the review finds issues, it reports them; correction is handled by the appropriate upstream engine through the pipeline's revision mechanisms.
- **Plan revision triggering** — While the Review Engine may identify issues that warrant plan revision, the actual triggering of plan revision is owned by the Planning Engine (A.5.3) in response to review feedback.
- **Human governance interaction** — The Review Engine does not interact with human governance directly. Human governance interaction is owned by the Certification Engine (A.5.8) and the Governance Engine (A.5.10).
- **Memory persistence** — The persistence of review artifacts and pipeline outputs is owned by the Memory Engine (A.5.9). The Review Engine produces outputs for handoff but does not persist them.

These non-responsibilities are architectural boundaries, not operational limitations. Each boundary exists to maintain clear ownership, prevent responsibility overlap, and ensure that the Engine Platform's separation of concerns is preserved throughout the review process.

---

## Interfaces

### Consumed Inputs

| Input | Source Engine | Type | Description |
|:---|:---|:---|:---|
| Validation Result | Validation Engine (A.5.6) | `ValidationResult` | The complete, immutable validation result including conformance level, pipeline verdict, assertion results, verification gaps, and input references. |
| Context Snapshot | Context Engine (A.5.1) | `ContextSnapshot` | Resolved via validation result's input references. Used for completeness and traceability assessment. |
| Knowledge Artifact | Knowledge Engine (A.5.2) | `KnowledgeArtifact` | Resolved via validation result's input references. Used for completeness and consistency assessment. |
| Plan Artifact | Planning Engine (A.5.3) | `PlanArtifact` | Resolved via validation result's input references. Used for completeness, consistency, and traceability assessment. |
| Decision Artifact | Decision Engine (A.5.4) | `DecisionArtifact` | Resolved via validation result's input references. Used for completeness, authorization traceability, and consistency assessment. |
| Execution Result | Execution Engine (A.5.5) | `ExecutionResult` | Resolved via validation result's input references. Used for completeness, evidence, and traceability assessment. |

**Input Validation Expectations**

- All inputs must be in their canonical artifact format as defined by their respective engine RFCs.
- All inputs must carry their engine-of-origin version identifiers.
- The Validation Result must include complete input references for all five upstream engines.
- Missing upstream artifacts trigger degraded review scope (review continues with available artifacts, findings note the gap).

### Produced Outputs

**Primary Output: Review Artifact**

| Field | Type | Description |
|:---|:---|:---|
| `reviewId` | `string` | Unique identifier, format: `rev-{uuid}` |
| `version` | `string` | Semantic version, format: `major.minor.0-draft` |
| `previousVersion` | `string?` | Reference to previous review version if re-review |
| `timestamp` | `ISO 8601` | Review completion timestamp |
| `readinessLevel` | `enum` | `READY_FOR_CERTIFICATION` / `CONDITIONALLY_READY` / `NOT_READY` |
| `reviewCriteriaResults` | `CriteriaResult[]` | Results for each evaluated review criterion |
| `findings` | `ReviewFinding[]` | All review findings with severity, category, and disposition |
| `artifactReferences` | `ArtifactRef[]` | Versioned references to all consumed upstream artifacts |
| `readinessSummary` | `ReadinessSummary` | Aggregate summary explaining the readiness determination |
| `pipelineVerdict` | `enum` | `CERTIFY` / `HOLD` / `DO_NOT_CERTIFY` |
| `reviewScope` | `enum` | `FULL` / `DEGRADED` |

**Secondary Outputs**

| Output | Type | Consumer | Description |
|:---|:---|:---|:---|
| Review events | Structured events | Pipeline observability | Review progress and completion events |
| Review feedback | Structured feedback | Upstream engines | Findings attributable to specific upstream engines |
| Validation feedback | Structured feedback | Validation Engine | Gaps identified in validation coverage |

**Output Versioning**

All Review Artifacts are immutable once produced. Re-review of the same pipeline output produces a new Review Artifact with a new version identifier and an explicit `previousVersion` reference to the prior review.

### Engine Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `review(validationResult)` | Execute a full review of the pipeline output represented by the validation result. Primary entry point and the only operation that produces a Review Artifact. Orchestrates the complete internal pipeline: intake, criteria evaluation, finding classification, readiness determination, and artifact production. | `ValidationResult` | `ReviewArtifact` | Emits all review lifecycle events (review.started through review.completed); emits feedback to upstream engines; emits `review.failed` on unrecoverable error | Invalid input → rejection error; missing validation ID → rejection error; internal error → NOT_READY artifact with CRITICAL finding |
| `resolveArtifacts(validationResult)` | Resolve all upstream artifact references from the validation result's input references. First sub-operation of the review pipeline, executed during intake. | `ValidationResult` | `ResolvedArtifactSet`, `MissingArtifactList` | Emits `review.intake.completed` event with artifact counts and scope determination | Artifact unresolvable → added to missing list, scope set to DEGRADED; artifact malformed → CRITICAL intake finding |
| `evaluateCriterion(criterion, artifactSet)` | Evaluate a single review criterion against the resolved artifact set. Each criterion is a deterministic function from the criteria registry. | `CriterionDef`, `ArtifactSet` | `CriterionResult` | Emits `review.criterion.evaluation.completed`; emits `review.finding.detected` if criterion fails | Criterion evaluation exception → SKIPPED outcome with error details; incomplete artifact set → SKIPPED with MAJOR finding |
| `evaluateCriteriaGroup(group, artifactSet)` | Evaluate all criteria within a single criteria group. Criteria within a group are evaluated independently. The group result is the conjunction of individual criterion results. | `CriteriaGroup`, `ArtifactSet` | `GroupResult` | Emits group-level start and completed events; emits `review.finding.detected` for each failed criterion | All criteria in group fail → group result is FAIL; all skip → SKIPPED with CRITICAL finding |
| `classifyFinding(criterionResult)` | Classify a criterion result into a structured review finding with severity, category, and disposition. Deterministic classification based on the criterion's severity mapping, group, and classification rules. | `CriterionResult` | `ReviewFinding` | None (pure transformation) | Classification rule ambiguity → defaults to SHOULD_FIX with MINOR severity; rule error → OBSERVATION with FOR_INFORMATION |
| `classifyAllFindings(criterionResults)` | Classify all criterion results from all groups into a unified finding set. | `CriterionResult[]` | `ReviewFinding[]` | None | Same as `classifyFinding` per individual result |
| `computeReadiness(findings)` | Compute the aggregate readiness level and pipeline verdict from the complete finding set. Pure deterministic function with no side effects. | `ReviewFinding[]` | `ReadinessLevel`, `PipelineVerdict`, `ReadinessSummary` | None (pure function) | None — pure computation cannot fail |
| `assembleReviewArtifact(results, findings, references, readiness)` | Assemble the final Review Artifact from the evaluation results, classified findings, artifact references, and readiness determination. | `CriteriaResult[]`, `ReviewFinding[]`, `ArtifactRef[]`, `ReadinessLevel` | `ReviewArtifact` | None | Assembly produces invalid artifact → internal error; version conflict → new version with incremented minor |
| `emitFeedback(findings)` | Emit structured feedback to upstream engines for findings attributable to a specific upstream engine. Only CRITICAL or MAJOR findings trigger feedback. | `ReviewFinding[]` | Feedback events | Emits `review.feedback.emitted` events to target upstream engines | Consumer unreachable → feedback queued per A.4.5; no retry — feedback is informational |
| `getReviewStatus(reviewId)` | Query the status of a current or recent review. Read-only query that does not modify review state. | `reviewId` | `ReviewStatus` | None | Unknown reviewId → not found error; review already completed → returns final status |

### Engine Events

**Emitted Events**

| Event | Trigger | Payload | Consumers | Delivery Guarantee |
|:---|:---|:---|:---|:---|
| `review.started` | Review pipeline begins; all preconditions validated | `{reviewId, validationId, reviewScope, criteriaGroupCount, expectedCriteriaCount}` | Pipeline observability | Exactly-once |
| `review.intake.completed` | Artifact resolution and input validation complete | `{reviewId, artifactCount, missingArtifacts[], degradedScope, scopeMode, missingArtifactCount}` | Pipeline observability | Exactly-once |
| `review.criterion.evaluation.started` | A criteria group evaluation begins | `{reviewId, criteriaGroup, criterionCount, evaluationOrder}` | Pipeline observability | Exactly-once |
| `review.criterion.evaluation.completed` | A criteria group evaluation completes | `{reviewId, criteriaGroup, passed, failed, skipped, totalDuration, perCriterionOutcome[]}` | Pipeline observability | Exactly-once |
| `review.finding.detected` | A review finding is produced from a failed criterion | `{reviewId, findingId, criterionId, severity, category, disposition, affectedArtifacts[], description}` | Pipeline observability | Exactly-once per finding |
| `review.readiness.determined` | Readiness level and verdict are computed | `{reviewId, readinessLevel, pipelineVerdict, findingCounts{critical, major, minor, observation}, escalateCount, totalCriteria}` | Pipeline observability | Exactly-once |
| `review.completed` | Full review pipeline completes; artifact produced | `{reviewId, readinessLevel, pipelineVerdict, artifactId, artifactVersion, totalFindings, totalDuration, reviewScope}` | Pipeline observability; Certification Engine (handoff trigger) | Exactly-once; must not be dropped |
| `review.feedback.emitted` | Feedback sent to an upstream engine for attributable findings | `{reviewId, targetEngine, findingCount, severityDistribution{critical, major, minor}, findingIds[]}` | Target upstream engine | Best-effort; queued if unreachable |
| `review.validation.feedback.emitted` | Feedback sent to Validation Engine for validation coverage gaps | `{reviewId, gapDescription, suggestedCriteria[], affectedValidationCategories[]}` | Validation Engine | Best-effort; queued if unreachable |
| `review.failed` | Unrecoverable error during review pipeline | `{reviewId, errorStage, errorDetails, partialResults{criteriaEvaluated, findingsProduced}, recoveryAction}` | Pipeline observability | Exactly-once; must not be dropped |
| `review.degraded.mode` | Review operating in degraded scope due to missing artifacts | `{reviewId, missingSources[], availableSources[], skippedCriteriaCount, impactAssessment}` | Pipeline observability | Exactly-once; emitted after intake |

**Consumed Events**

| Event | Source | Response | Response Timing |
|:---|:---|:---|:---|
| `validation.completed` | Validation Engine (A.5.6) | Triggers review intake if a review request is pending for this validation result. The Review Engine matches the validation result's validation ID against pending review requests. | Immediate (within the same pipeline cycle) |

**Event Guarantees**

- Events within a single review are emitted in strict sequential order as listed above. No out-of-order event delivery is possible within a review lifecycle.
- Every event carries the `reviewId` for correlation across the review lifecycle.
- Critical events (`review.completed`, `review.failed`) must not be silently dropped. If the event infrastructure is unavailable, the Review Engine retains the event for delivery once the infrastructure recovers.
- Informational events (`review.feedback.emitted`, `review.validation.feedback.emitted`) are best-effort. If the target consumer is unreachable, the event is queued per A.4.5 Engine Communication. No retry beyond the A.4.5 queue mechanism.
- The Review Engine does not consume its own emitted events. There is no event feedback loop within the Review Engine.
- Event payloads are structured objects with typed fields. No unstructured log lines are emitted as events.

### Engine Handoff Contract

**Handoff Prerequisites**

1. The Review Engine has completed all review criteria evaluations across all four criteria groups.
2. All findings have been classified by severity, category, and disposition.
3. The readiness level and pipeline verdict have been deterministically computed.
4. The Review Artifact has passed all output validation rules (defined in the Validation section).
5. All eight engine invariants (defined in the Validation section) hold for the completed review.

**Required Evidence**

| Evidence Item | Source | Retention |
|:---|:---|:---|
| Review Artifact (complete) | Review Engine | Handoff snapshot |
| Validation Result (reference) | Validation Engine | Reference only |
| Upstream artifact references (all) | Review Artifact | Reference only |
| Review event log (from review.started to review.completed) | Review Engine | Handoff snapshot |
| Finding classification details (all) | Review Engine | Handoff snapshot |
| Readiness determination rationale | Review Engine | Handoff snapshot |
| Degraded scope indicators (if applicable) | Review Engine | Handoff snapshot |

**Validated Outputs**

- Review Artifact (immutable, versioned, with complete finding set and readiness determination).
- Review event log (complete trace of the review pipeline execution).

**Snapshot Expectations**

The Review Artifact is an immutable snapshot of the review outcome at the time of production. It does not change after emission. If re-review is required (e.g., after upstream corrections), a new Review Artifact with a new version is produced. The Certification Engine receives a snapshot that is guaranteed not to change.

**Receiving Consumers**

1. **Certification Engine (A.5.8)** — Primary consumer. Receives the Review Artifact as the sole input to the certification process.
2. **Memory Engine (A.5.9)** — Secondary consumer. May receive the Review Artifact for archival after certification.
3. **Governance Engine (A.5.10)** — Conditional consumer. Receives findings with `ESCALATE_TO_GOVERNANCE` disposition.

**Failure Handling**

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Review produces NOT_READY | Review Artifact still produced and delivered to Certification Engine | Certification Engine determines next steps |
| Review produces internal error | ERROR state; error Review Artifact produced if possible | Pipeline observability alerted; review must be re-initiated |
| Upstream artifact unresolvable | Degraded scope; finding recorded | Finding included in Review Artifact for Certification Engine awareness |
| Certification Engine unreachable | Review Artifact retained; handoff queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Invariant violation | ERROR state; CRITICAL finding recorded | Review Artifact produced with NOT_READY; invariant violation documented |

**Audit Record Expectations**

Every handoff produces an audit record containing: review identifier and version, validation result reference, readiness level and pipeline verdict, total finding count by severity, upstream artifact reference summary, handoff timestamp, receiving consumer identifier, and handoff status.

**Certification Gates**

1. **Pre-handoff validation** — Review Artifact passes all output validation rules.
2. **Evidence completeness** — All required evidence items present in the handoff package.
3. **Consumer readiness** — Certification Engine registered and reachable (or handoff queued).
4. **Invariant preservation** — All eight invariants hold at handoff time.
5. **Cross-engine consistency** — All upstream artifact references are valid and versioned.
6. **Feedback delivery** — All upstream engines with attributable findings have received (or have queued) their feedback.

---

## Lifecycle

### Engine Lifecycle

The Review Engine follows the A.4.4 Engine Lifecycle model with the following engine-specific lifecycle behaviour:

**Initialization**

- The Review Engine initializes its review criteria registry from the engine's configuration. Review criteria are loaded based on the current governance standards and certification requirements.
- The engine registers with the Engine Registry (A.4.3) and declares its consumed and produced artifact types.
- The engine enters the `READY` state once initialization is complete and it is prepared to accept review requests.

**Steady-State Operation**

- The engine processes one review request at a time. Concurrent review requests are rejected with an appropriate error.
- Each review request follows the internal pipeline: intake → criteria evaluation → finding classification → readiness determination → artifact production → feedback emission.
- The engine emits structured events at each pipeline stage for observability.

**Degradation**

- If one or more upstream artifacts are unavailable, the engine continues in degraded scope, noting the missing artifacts in findings and reducing the review scope accordingly.
- If the Validation Engine is unreachable, the Review Engine cannot proceed (validation result is the primary intake trigger) and enters a `WAITING` state.

**Shutdown**

- The engine completes any in-progress review before accepting shutdown.
- No review state is persisted between invocations (all state is transient).
- The engine deregisters from the Engine Registry and transitions to `TERMINATED`.

**Restart**

- The engine reinitializes the review criteria registry and re-registers with the Engine Registry.
- No recovery of in-progress reviews is attempted; any interrupted review must be re-initiated.

---

## Validation

### Engine Invariants

**INV-REV-1: Deterministic Review**

Given the same set of upstream artifacts (same version identifiers) and the same review criteria registry, the Review Engine produces identical Review Artifacts. No external factors — time, system state, previous reviews, or pipeline context — influence the review outcome.

**INV-REV-2: No Mutation of Upstream Artifacts**

The Review Engine never modifies, extends, re-versions, or mutates any artifact received from upstream engines. All upstream artifacts are treated as read-only inputs. This invariant is shared with the Validation Engine and is a platform-wide consumption boundary.

**INV-REV-3: Single-Writer Review Artifact**

The Review Engine is the sole producer of Review Artifacts. No other engine, component, or external system may create or modify a Review Artifact. This establishes clear ownership and responsibility boundaries.

**INV-REV-4: Immutable Versioned Outputs**

Every Review Artifact is immutable after creation. If re-review produces a new result, it is a new version with a new version identifier and an explicit `previousVersion` reference. In-place mutation of any Review Artifact field is prohibited.

**INV-REV-5: Finding Completeness**

Every review criterion that was evaluated must produce at least one finding (including pass findings that carry `OBSERVATION` severity). No criterion may be silently skipped without producing a record. Skipped criteria (due to missing input) must produce a finding explaining the skip reason.

**INV-REV-6: Readiness Determinism**

The readiness level and pipeline verdict are pure deterministic functions of the finding set. No hidden rules, no external influences, no discretionary overrides. Given the same findings, the same readiness level and verdict are always produced.

**INV-REV-7: Full Artifact Traceability**

Every finding must reference the specific upstream artifact(s) that the finding relates to. Every readiness determination must reference the specific findings that influenced it. No finding or determination may exist without complete traceability to its source artifacts.

**INV-REV-8: Review-Validation Independence**

The Review Engine's readiness determination is independent of the Validation Engine's pipeline verdict. While the Review Engine consumes the Validation Result as input, it does not adopt the Validation Engine's verdict as its own. The Review Engine applies its own criteria and produces its own determination, which may agree or disagree with the Validation Engine's verdict.

### Validation Rules

**Input Validation**

| Rule | Type | Failure Action |
|:---|:---|:---|
| Validation result must be present and non-null | Hard | Reject review request with error |
| Validation result must carry a valid validation ID | Hard | Reject review request with error |
| All upstream artifact references must be resolvable | Soft | Continue in degraded scope; record MAJOR finding |
| Upstream artifacts must be in canonical format | Hard | Reject the malformed artifact; record CRITICAL finding |
| Upstream artifact versions must be present | Soft | Continue with warning; record MINOR finding |

**Output Validation**

| Rule | Type | Failure Action |
|:---|:---|:---|
| Review Artifact must contain all mandatory fields | Hard | Do not emit; internal error |
| All findings must have valid severity, category, and disposition | Hard | Do not emit; internal error |
| Readiness level must be consistent with finding aggregate | Hard | Do not emit; internal error |
| All artifact references must be valid and versioned | Hard | Do not emit; internal error |
| Review version must follow `major.minor.0-draft` format | Hard | Do not emit; internal error |

**State Transition Validation**

| Transition | Validation |
|:---|:---|
| IDLE → INTAKE | Review request is valid and non-null |
| INTAKE → EVALUATING | All input validation rules pass |
| EVALUATING → CLASSIFYING | At least one criterion was evaluated |
| CLASSIFYING → DETERMINING | All evaluated criteria have produced findings |
| DETERMINING → PRODUCING | Readiness level is deterministically computed |
| PRODUCING → COMPLETED | Review Artifact passes output validation |
| Any → ERROR | Unrecoverable error condition detected |

### Certification Requirements

Before the Review Engine may be submitted for certification review, the following requirements must be satisfied:

1. All upstream Engine RFCs (A.5.1 through A.5.6) must be certified or in a stable draft state.
2. The Review Engine RFC must pass all validation checks defined in the Completion Criteria section of this document.
3. All eight engine invariants must be demonstrably preserved across all operations.
4. The review criteria model must be fully specified with deterministic evaluation functions.
5. The Review Engine's capability mapping to A.4.7 capability domains must be documented.
6. The handoff contract to the Certification Engine must be fully specified and validated.
7. No implementation-scope content may be present in the RFC.
8. STD-010 metadata compliance must be verified.

---

## Ownership

### Engine Ownership

| Element | Requirement |
|:---|:---|
| **Accountable Owner** | Framework Architecture Team |
| **Maintained Boundaries** | The owner controls the Review Engine's architectural specification, review criteria model, and handoff contract. The owner does not control upstream engine artifacts, certification decisions, or governance escalations. |
| **Decision Rights** | The owner may autonomously define review criteria, finding classifications, and readiness determination logic. The owner must escalate to Framework Governance for any change that affects the review-to-certification handoff contract, the review-validation independence boundary, or the engine's capability domain mapping. |
| **Validation Obligations** | The owner must validate that all review criteria are deterministic, all eight invariants are preserved, and the handoff contract produces artifacts consumable by the Certification Engine before requesting review. |
| **Review Obligations** | The owner must present the complete Review Engine RFC to the Enterprise Documentation Standards Board for structural and metadata review, and to Framework Governance for architectural review. |
| **Certification Responsibilities** | The owner must produce evidence that all eight invariants hold, that the review pipeline is deterministic, and that the handoff to the Certification Engine meets all certification gates. |
| **Ownership Handoff Limitations** | Ownership may transfer only through explicit Framework Governance record. No implicit or silent authority transfer is permitted. The receiving owner must acknowledge acceptance through governance record. |

---

## Risks

### Risk-1: Validation-Review Disagreement Cascade

**Severity**: High
**Likelihood**: Medium
**Impact**: The Review Engine's independence invariant (INV-REV-8) means it may disagree with the Validation Engine's verdict. A PROCEED from Validation with a NOT_READY from Review would create confusion in the pipeline — the Validation Engine said the execution output was fine, but the Review Engine blocks certification. This could be perceived as a system inconsistency rather than an intentional architectural feature, leading to governance disputes or attempts to bypass the Review Engine.
**Mitigation**: The Review Engine records every disagreement as a finding with full traceability, enabling the Certification Engine to understand why the disagreement exists. The Validation-Review disagreement resolution rule (Resolution Rules) explicitly addresses this scenario and defines the Review Engine's determination as authoritative for certification readiness. The Design Decision DD-3 documents the architectural rationale for independence. The separation is a feature, not a bug — it enables the Review Engine to catch issues that validation's narrower scope does not address.

### Risk-2: Criteria Registry Governance Drift

**Severity**: Medium
**Likelihood**: Medium
**Impact**: The review criteria registry is loaded from governance-approved configuration. If the registry is updated without proper governance review, criteria could be weakened, removed, or made non-deterministic, undermining the Review Engine's effectiveness. Conversely, overly strict criteria could block valid pipeline outputs from reaching certification, creating a process bottleneck.
**Mitigation**: The criteria registry is loaded only during initialization and remains constant for the engine's operational lifecycle, preventing mid-operation drift. Registry changes require engine restart, which is a visible, auditable event. The Certification Requirements mandate that the review criteria model is fully specified with deterministic evaluation functions. The Extension Model requires Framework Governance approval for any changes that affect determinism or review-validation independence.

### Risk-3: Degraded Scope False Readiness

**Severity**: Medium
**Likelihood**: Medium
**Impact**: When operating in degraded scope (one or more upstream artifacts unavailable), the Review Engine continues review with available artifacts. The readiness determination may produce READY_FOR_CERTIFICATION even though an entire review dimension (e.g., traceability) could not be fully assessed because the relevant artifacts were missing. The Certification Engine might interpret this as a complete review and proceed to certification with incomplete evidence.
**Mitigation**: The degraded scope is a mandatory field in the Review Artifact — it cannot be omitted. The readiness determination algorithm accounts for degraded scope: skipped criteria produce MAJOR findings (Resolution Rules), which prevent READY_FOR_CERTIFICATION in most cases. The `review.degraded.mode` event provides real-time observability of degraded reviews. The Certification Requirements mandate that the Certification Engine validates scope consistency before proceeding with certification.

### Risk-4: Finding Volume Overwhelming Certification

**Severity**: Medium
**Likelihood**: Low
**Impact**: Large pipeline outputs with many issues could produce a very large number of findings (potentially hundreds). The Review Artifact's finding set could become unwieldy for the Certification Engine to process, particularly for human governance reviewers who need to assess each finding. The unbounded finding count (noted in Performance Characteristics) could create a certification bottleneck.
**Mitigation**: Finding severity classification provides a natural filtering mechanism — the Certification Engine can prioritize CRITICAL and MAJOR findings for human review while acknowledging MINOR and OBSERVATION findings programmatically. The readiness determination's two-phase model (severity aggregation then readiness computation) ensures that finding volume does not affect the readiness level computation — it is a deterministic function of severity counts, not total finding count. The readiness summary provides a concise aggregate that human governance can assess before diving into individual findings.

### Risk-5: Single-Concurrency Serialization Bottleneck

**Severity**: Medium
**Likelihood**: High
**Impact**: The single-concurrency design means the Review Engine processes one review at a time. In pipeline scenarios where multiple validation results are produced in rapid succession (e.g., after batch execution), reviews queue sequentially, potentially delaying certification for all pipeline outputs. This is a throughput limitation that could become significant in high-volume pipeline scenarios.
**Mitigation**: The single-concurrency design preserves the deterministic review guarantee (INV-REV-1) with the simplest architecture. Review latency is bounded and predictable, enabling the pipeline orchestrator to schedule efficiently. The throughput concern is mitigated by the Review Engine's position near the end of the pipeline — by the time reviews are needed, the pipeline's most latency-sensitive phases (execution, validation) are complete. If throughput becomes a production concern, the extension model allows for future architectural evaluation of controlled concurrency, subject to Framework Governance approval.

### Risk-6: Criteria Group Ordering Sensitivity

**Severity**: Low
**Likelihood**: Low
**Impact**: The four criteria groups are evaluated in a fixed sequential order (completeness → consistency → traceability → evidence). If this ordering has unintended dependencies — for example, if consistency criteria implicitly assume traceability has been verified — the Review Engine could produce misleading results. However, the current design specifies that criteria within a group are independent and groups are ordered to minimize false dependencies.
**Mitigation**: The criteria group ordering is documented in the Internal Engine Model and justified in Design Decision DD-1. The ordering follows a logical dependency chain: completeness (are artifacts present?) → consistency (do present artifacts agree?) → traceability (can artifacts be traced?) → evidence (is the trace documented?). The Certification Requirements mandate that the review criteria model is fully specified, which includes documenting any inter-group dependencies. The finding completeness invariant (INV-REV-5) ensures that even if the ordering produces suboptimal results, all findings are recorded regardless.

---

## Open Questions

1. **OQ-1: Should the Review Engine define a maximum criteria count per group?** The current design specifies approximate ranges (completeness: 8–15, consistency: 10–20, traceability: 8–15, evidence: 5–10) but does not enforce a maximum. In a deployment context with extensive governance requirements, the criteria count could grow significantly, potentially affecting review latency and finding volume. A maximum would provide deterministic latency bounds but could limit review coverage. The trade-off between coverage breadth and operational predictability needs explicit governance guidance.

2. **OQ-2: How should the Review Engine handle re-review after upstream corrections?** When upstream engines correct their artifacts and re-submit for verification and review, the Review Engine produces a new Review Artifact with a `previousVersion` reference. However, the current design does not define how many re-review cycles are permitted, whether re-review findings should reference the original review's findings, or how the Certification Engine should interpret a sequence of Review Artifacts with improving readiness levels.

3. **OQ-3: Should the Review Engine define a formal disagreement taxonomy for Validation-Review disagreements?** The independence invariant (INV-REV-8) allows disagreements, and the Resolution Rules specify that the Review Engine's determination takes precedence. However, the types of disagreements (validation missed a real issue, review is stricter than validation, scope difference between assertion-based and criteria-based assessment) are not formally classified. A disagreement taxonomy would help the Certification Engine and Governance Engine understand and respond to disagreements more effectively.

4. **OQ-4: How should the Review Engine interact with the Governance Engine for ESCALATE_TO_GOVERNANCE findings?** The current design flags these findings for the Governance Engine but does not define a structured handoff contract between the Review Engine and the Governance Engine. The Governance Engine is listed as a conditional consumer but the interaction pattern (event-based, artifact-based, or direct query) is not specified. This is a cross-engine contract that may need explicit definition before certification.

---

## Completion Criteria

A.5.7 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with substantive content, structured per A.5.0's Engine RFC Section Mapping.
2. All 17 Specializable subsections contain Review Engine-specific content (not template language).
3. All eight invariants are stated and expressible as testable assertions.
4. All six responsibility groups map to at least one operation.
5. All lifecycle transitions produce corresponding events.
6. The Engine Ownership Contract addresses all seven mandatory elements.
7. The Engine Handoff Contract addresses all eight mandatory elements.
8. STD-010 metadata is fully compliant (all mandatory fields, correct table shape, correct heading).
9. No implementation scope (source code, APIs, persistence, LLM details, agent/swarm runtime) is present in any section.
10. The upstream Engine alignment is verified — the Review Engine consumes the ValidationResult from A.5.6 and resolves artifacts from A.5.1 through A.5.5 as defined.
11. TPL-001 specialization compliance is verified (no mandatory sections removed, Engine-specific content as subsections within TPL-001 sections).
12. Framework Governance has reviewed and approved the RFC structure.
13. Version History records all changes from the prior version with rationale.

---

## Version History

| Version | Status | Traceability | Notes |
|:---|:---|:---|:---|
| `0.1.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-7` | Initial creation as independent Engine Specialization RFC with 32-section structure. Pre-TPL-001 alignment. |
| `0.2.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-7` | Expanded with Universal Section Contract compliance, strengthened validation, and normalized governance alignment per A.5.0 pre-refactoring template. |
| `0.3.0-draft` | Draft | `AI-DOS.V3.A.005.7` | Refactored to A.5.0/TPL-001 compliance: remapped from 32 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections per A.5.0 Appendix A mapping. Added 6 Design Decisions, 6 Risks, 4 Open Questions. Removed Completion Report (content migrated to Design Decisions, Risks, Validation). Removed duplicate Completion Checklist and Validation Checklist (content migrated to Completion Criteria, Validation, and Design Decisions). Updated Traceability ID from AI-DOS.V2.RUNTIME.A-5-7 to AI-DOS.V3.A.005.7. Updated Version from 0.2.0-draft to 0.3.0-draft. All content preserved; no authority changes. |

---

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, A.5.0, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

---
# A.5.6 — Validation Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-6` |
| Title | A.5.6 — Validation Engine RFC |
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
| Traceability ID | `AI-DOS.V3.A.005.6` |
| Scope | Defines the Validation Engine specialization only, including its purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation within the AI-DOS v4 Engine Platform. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification execution, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; A.5.1 Context Engine RFC; A.5.2 Knowledge Engine RFC; A.5.3 Planning Engine RFC; A.5.4 Decision Engine RFC; A.5.5 Execution Engine RFC; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, canonical terminology, metadata rules, upstream Engine handoff outputs (ContextSnapshot, KnowledgeArtifact, PlanArtifact, DecisionArtifact, ExecutionResult), and repository-normalization instructions. |
| Produces | Validation Engine architecture specification, Validation Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.3-Planning-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.4-Decision-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.5-Execution-Engine-RFC.md` |
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
- A.5.1: Context Engine RFC as the upstream provider of ContextSnapshot (environmental constraints)
- A.5.2: Knowledge Engine RFC as the upstream provider of KnowledgeArtifact (factual correctness criteria)
- A.5.3: Planning Engine RFC as the upstream provider of PlanArtifact (structural requirements)
- A.5.4: Decision Engine RFC as the upstream provider of DecisionArtifact (authorization boundaries)
- A.5.5: Execution Engine RFC as the upstream provider of ExecutionResult (verified outputs)

</details>

---

## Executive Summary

A.5.6 defines the architecture of the Validation Engine, the sixth individual Engine specialization in Phase 2 of the AI-DOS v4 Engine Platform. The Validation Engine serves as the deterministic quality gate of the Engine Platform, responsible for verifying that all execution outputs conform to the constraints established by upstream engines through multi-source assertion-based verification. It is the only Engine that consumes artifacts from all five preceding engines (Context, Knowledge, Planning, Decision, Execution) and performs cross-referencing verification against their combined constraint sets, producing a unified, immutable ValidationResult artifact that classifies conformance and computes a pipeline verdict.

This RFC specializes A.5.0 (which specializes TPL-001) by defining the Validation Engine's purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state characteristics, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle behaviour. The Validation Engine operates through a six-stage verification pipeline (structural, semantic, authorization, completeness, consistency, temporal) that evaluates deterministic assertion predicates against all upstream constraint sources. It produces three conformance levels (FULL_CONFORMANCE, PARTIAL_CONFORMANCE, NON_CONFORMANCE) and three pipeline verdicts (PROCEED, HOLD, REJECT) as pure deterministic functions of the assertion results. The Validation Engine does not redefine Runtime, Engine Platform, Engine Foundation, or any upstream standard.

---

## Purpose

### Engine Purpose

The Validation Engine exists to serve as the deterministic quality gate of the AI-DOS v4 Engine Platform, responsible for verifying that all execution outputs conform to the constraints established by upstream engines through multi-source assertion-based verification. It is the only Engine that consumes artifacts from all five preceding engines (Context, Knowledge, Planning, Decision, Execution) and performs cross-referencing verification against their combined constraint sets, producing a unified, immutable ValidationResult artifact that classifies conformance and computes a pipeline verdict.

The Validation Engine answers the question "Does the execution output faithfully satisfy all constraints established during context resolution, knowledge retrieval, plan creation, decision authorization, and execution itself?" This question requires the Validation Engine to consume the complete artifact chain from Context through Execution and to evaluate deterministic assertion predicates that compare execution outputs against each constraint source. The Validation Engine does not decide whether to execute (that is the Decision Engine's responsibility), does not execute (that is the Execution Engine's responsibility), and does not assess readiness for certification (that is the Review Engine's responsibility). The Validation Engine verifies that what was executed matches what was planned, authorized, and constrained.

Without a dedicated Validation Engine, the system would lack a single, authoritative verification point where execution outputs are cross-referenced against all upstream constraint sources. Verification would be distributed across individual engines, creating inconsistent verification standards, duplicated verification logic, and no unified conformance classification. The Validation Engine eliminates these risks by establishing one deterministic verification authority that produces one immutable verification record per execution, ensuring that downstream engines (Review, Certification, Memory, Governance) receive a consistent, complete, and traceable quality assessment.

The Validation Engine's purpose aligns with Engine Capability domain "Quality Assurance" as defined by A.4.7. The Validation Engine uniquely owns the capability of multi-source assertion verification, conformance classification, pipeline verdict computation, and validation audit trail production within the Engine Platform.

The Validation Engine's architectural significance extends beyond individual verification decisions. It establishes the deterministic quality gate that separates execution (the transformative phase of the pipeline) from assessment (the evaluative phase beginning with review). This gate ensures that no execution output enters the assessment phase without a complete, immutable verification record. The Validation Engine's position as this gate makes it the single point of architectural accountability for the transition from "what was done" to "whether what was done is correct."

### Engine Mission

The mission of the Validation Engine is to produce definitive, fully traceable verification records on execution outputs by evaluating deterministic assertion predicates against all upstream constraint sources, classifying conformance, computing pipeline verdicts, and delivering immutable ValidationResults to downstream engines.

This mission translates into five mission-level objectives:

1. **Multi-Source Verification Authority** — The Validation Engine is the sole architectural authority for execution output verification within the Engine Platform. No other engine, component, or external system may produce a ValidationResult, classify conformance, or compute a pipeline verdict. The Validation Engine's verification is the authoritative quality assessment for every execution output. This authority establishes a single point of accountability for verification outcomes and prevents the emergence of alternative or shadow verification paths.

2. **Deterministic Assertion Evaluation** — Every verification decision is produced through deterministic assertion predicate functions. Given the same InputBundle (same versions of all five upstream artifacts), the Validation Engine produces byte-identical ValidationResults regardless of when, where, or how many times the verification is executed. No randomness, external state, time-dependent logic, or probabilistic inference is permitted within assertion predicates. This guarantee ensures that verification results are reproducible, auditable, and invariant across runs.

3. **Structured Conformance Classification** — The Validation Engine classifies every execution output into one of three conformance levels: FULL_CONFORMANCE (all assertions passed), PARTIAL_CONFORMANCE (non-critical failures present), or NON_CONFORMANCE (critical failures present). This classification is a deterministic function of the aggregate assertion results and provides downstream engines with a clear, actionable quality signal. The conformance level drives the pipeline verdict computation and informs downstream engine behaviour.

4. **Pipeline Verdict Computation** — The Validation Engine computes a pipeline verdict (PROCEED, HOLD, or REJECT) that serves as the recommendation to the pipeline for how to handle the validated execution output. The verdict is a pure deterministic function of the assertion results, severity classifications, and detected constraint conflicts. The pipeline verdict enables downstream engines and the pipeline orchestrator to make informed routing decisions without re-evaluating the verification evidence.

5. **Clean Downstream Handoff** — The Validation Engine produces ValidationResults structured for direct consumption by downstream engines. The Review Engine (A.5.7) receives the ValidationResult as the primary input for readiness assessment. The Memory Engine (A.5.9) receives the ValidationResult for archival and retrieval. The handoff is clean, typed, and contains all required evidence for downstream processing. The Validation Engine's handoff contract defines exactly what downstream consumers receive and what guarantees (immutability, completeness, versioned references) the artifact carries.

---

## Scope

### In Scope

A.5.6 governs:

1. The Validation Engine's architectural purpose, mission, and capability domain alignment within the Engine Platform.
2. The Validation Engine's responsibilities, non-responsibilities, and boundary definitions relative to peer Engines and platform layers.
3. The Validation Engine's internal model, including the six-stage verification pipeline, assertion registry, evaluation context, and result builder.
4. The Validation Engine's consumed inputs (ContextSnapshot, KnowledgeArtifact, PlanArtifact, DecisionArtifact, ExecutionResult) and produced outputs (ValidationResult, validation events, audit records).
5. The Validation Engine's operations, events, and runtime interaction patterns.
6. The Validation Engine's invariants, validation rules, and certification requirements.
7. The Validation Engine's ownership contract and handoff contract.
8. The Validation Engine's lifecycle behaviour within the A.4.4 Engine Lifecycle model.
9. AI consumption boundaries — the Validation Engine is fully deterministic and does not invoke LLMs.

### Out of Scope

A.5.6 does not:

1. Redefine Runtime Architecture (A.3).
2. Redefine Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1 through A.4.7).
3. Define the architectural content or behaviour of any other Engine (A.5.1 through A.5.5, A.5.7, etc.).
4. Replace or restate STD-010 metadata field definitions or rules.
5. Replace or restate TPL-001 RFC mandatory section definitions or validation rules.
6. Replace or restate A.5.0 template governance, section mapping, or Universal Section Contract.
7. Implement verification logic, assertion predicates, or conformance classification algorithms.
8. Define LLM call orchestration, prompt engineering, or model selection for verification operations.
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

**Validation Engine-Specific Out of Scope Items:**

- Execution output correction or re-execution (owned by Execution Engine A.5.5 and pipeline revision mechanisms)
- Readiness assessment and review execution (owned by Review Engine A.5.7)
- Certification decision-making (owned by Certification Engine A.5.8)
- Governance policy administration (owned by Governance Engine A.5.10)
- Memory persistence operations (owned by Memory Engine A.5.9)
- Specific assertion catalog definitions (defined in implementation-level configuration, not in this architecture RFC)
- Fuzzy or probabilistic verification approaches
- Real-time or streaming validation (the Validation Engine operates in batch mode)
- Retry logic (re-verification is initiated externally by submitting a new verification request)

### Future Consumers

| Consumer | Relationship | Expected Consumption Pattern |
|:---|:---|:---|
| **Review Engine (A.5.7)** | Primary consumer | Consumes the ValidationResult as the primary input for readiness assessment. Evaluates conformance level, pipeline verdict, verification gaps, and constraint conflicts to determine certification readiness. |
| **Memory Engine (A.5.9)** | Primary consumer | Consumes the ValidationResult for archival, retrieval, and verification history management. Stores the ValidationResult as an immutable record indexed by validation ID, execution reference, and artifact lineage. |
| **Governance Engine (A.5.10)** | Secondary consumer | Consumes ValidationResult summaries and verification gap records for governance compliance tracking. Uses verification outcomes to evaluate whether pipeline outputs meet governance quality standards. |
| **Pipeline Observability** | Infrastructure consumer | Consumes validation events for monitoring, alerting, and audit trail reconstruction. Aggregates validation events with events from other engines for a unified pipeline execution view. |
| **Planning Engine (A.5.3)** | Feedback consumer | Consumes verification feedback when verification identifies plan-level issues (e.g., plan-actual mismatches, missing plan steps) to refine plans in subsequent iterations. |
| **Decision Engine (A.5.4)** | Feedback consumer | Consumes verification feedback when verification identifies authorization-level issues (e.g., authorization scope gaps, policy violations) to refine authorization decisions. |
| **Execution Engine (A.5.5)** | Feedback consumer | Consumes verification feedback when verification identifies execution-level issues (e.g., output format violations, missing deliverables) to refine execution behaviour. |
| **Certification Engine (A.5.8)** | Indirect consumer | Consumes the ValidationResult indirectly through the Review Artifact produced by the Review Engine. Does not access ValidationResults directly. |
| **Workflow Engine (A.5.11)** | Prospective consumer | May consume ValidationResult summaries for workflow step gating and conditional routing decisions. |
| **Registry Engine (A.5.12)** | Prospective consumer | May consume verification capability metadata for engine capability discovery and compatibility verification. |

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
| A.5.0 | `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md` | Governing template; provides Engine RFC section mapping, Universal Section Contract, Engine Ownership Contract, Engine Handoff Contract, and validation model. A.5.6 follows A.5.0 as its direct governing template (per the specialization hierarchy TPL-000 → TPL-001 → A.5.0 → A.5.6). |
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; A.5.0 specializes TPL-001 for the Engine domain, and A.5.6 inherits that specialization. Provides the 20 mandatory output sections, optional section catalog, specialization model, validation rules, and anti-patterns. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, placeholder grammar, naming conventions, and validation model. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; defines the metadata schema, mandatory fields, relationship taxonomy, version rules, and document class expectations. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; defines the terminology that this RFC shall use for Engine, Platform, Runtime, Kernel, and related concepts. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.3 Runtime Architecture | Governing architectural context for all Runtime documents including Engine RFCs | Validation Engine RFC would lack the architectural context that defines its operational environment |
| A.4 Engine Architecture | Governing Engine Platform definition, capability model, and contract framework | Validation Engine RFC would lack the platform boundary that separates Engine specialization from platform definition |
| A.4.1 Engine Kernel RFC | Kernel contract and mediation rules that the Validation Engine consumes | Validation Engine could not define its interaction with the Kernel layer |
| A.4.2 Engine Metadata RFC | Metadata model for Engine identity, classification, and tracking | Validation Engine would lack a consistent metadata foundation |
| A.4.3 Engine Registry RFC | Registry services for Engine discovery and consumer management | Validation Engine could not register as a capability provider or manage consumer lists |
| A.4.4 Engine Lifecycle RFC | Lifecycle state machine that all Engines must follow | Validation Engine could not define Engine-specific lifecycle behaviour within the platform model |
| A.4.5 Engine Communication RFC | Communication types, modes, and failure/recovery model | Validation Engine could not define Engine-specific communication patterns or event delivery |
| A.4.6 Engine State RFC | State categories, visibility model, and synchronization rules | Validation Engine could not define Engine-specific state management |
| A.4.7 Engine Capability RFC | Capability taxonomy and registration model | Validation Engine could not reference the "Quality Assurance" capability domain |
| A.5.0 Engine Specialization RFC Template | Governing template contract, section mapping, and validation model | Validation Engine RFC would lack the structural and governance foundation for Engine RFC authoring |
| A.5.1 Context Engine RFC | Produces ContextSnapshot — environmental constraints for verification | Validation Engine would lack the contextual constraint source (resource limits, domain boundaries, contextual requirements) |
| A.5.2 Knowledge Engine RFC | Produces KnowledgeArtifact — factual correctness criteria for verification | Validation Engine would lack the factual constraint source (domain rules, knowledge constraints) |
| A.5.3 Planning Engine RFC | Produces PlanArtifact — structural requirements for plan-vs-actual verification | Validation Engine would lack the structural constraint source (required steps, expected outputs, dependency ordering) |
| A.5.4 Decision Engine RFC | Produces DecisionArtifact — authorization boundaries for enforcement verification | Validation Engine would lack the authorization constraint source (permission boundaries, policy decisions, risk assessments) |
| A.5.5 Execution Engine RFC | Produces ExecutionResult — the outputs being verified | Validation Engine would lack the primary verification target (step results, produced artifacts, execution metadata) |
| STD-010 | Document metadata schema and compliance rules | Metadata block would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology would be inconsistent across Engine RFCs |
| TPL-000 | Template governance and lifecycle model | Template compliance would lack governing template authority |
| TPL-001 | RFC template standard and mandatory section structure | RFC would lack the structural foundation it specializes through A.5.0 |

The dependency chain is strict and sequential: the Validation Engine cannot function without all five upstream engines producing their artifacts. This strict dependency chain reflects the pipeline's architectural design: each engine builds on the outputs of its predecessors, and the Validation Engine is the convergence point where all preceding outputs are assessed together.

---

## Architecture

### Engine Position

The Validation Engine occupies the sixth position in the Phase 2 Engine pipeline, immediately after the Execution Engine (A.5.5) and immediately before the Review Engine (A.5.7). It is the convergence point of the entire upstream pipeline — the only Engine that directly consumes artifacts from all five preceding engines.

```
Context (A.5.1) ──┐
Knowledge (A.5.2) ──┤
Planning (A.5.3) ───┼──→ Validation (A.5.6) ──→ Review (A.5.7) ──→ Certification (A.5.8) ──→ Memory (A.5.9) / Governance (A.5.10)
Decision (A.5.4) ──┤
Execution (A.5.5) ──┘
```

The Validation Engine has the widest fan-in of any engine in the Phase 2 pipeline. Every upstream engine contributes a required input, making the Validation Engine the most constrained engine in terms of input availability. This wide fan-in is intentional: the Validation Engine cannot perform its verification function without access to all constraint sources and the execution outputs being verified. The deep dependency chain (five direct upstream dependencies) creates the highest integration risk in the pipeline but is architecturally necessary for comprehensive multi-source verification.

The Validation Engine's position at the pipeline's convergence point gives it a unique architectural role. It is the first engine in the evaluative phase of the pipeline — all preceding engines (A.5.1 through A.5.5) produce or transform artifacts, while the Validation Engine is the first to assess whether those artifacts are mutually consistent and whether the execution output satisfies all established constraints. This position makes the Validation Engine the single point of architectural accountability for the transition from "what was produced" to "whether what was produced is correct."

The Validation Engine's downstream consumers are the Review Engine (A.5.7), which consumes the ValidationResult as the primary input for readiness assessment, and the Memory Engine (A.5.9), which archives the ValidationResult for retrieval. The Validation Engine may also deliver verification feedback to upstream engines when verification identifies issues that trace back to upstream artifact quality.

The Validation Engine does not have a direct back-channel to engines before the Execution Engine. If the Validation Engine identifies issues that trace back to pre-execution engines (e.g., a Planning Engine plan that is internally inconsistent), the feedback path flows through the Review Engine: the Validation Engine provides feedback to the Review Engine, which may then relay relevant feedback to the appropriate upstream engine. This preserves the pipeline's linear data flow while still enabling verification-level feedback to reach the engines that can address it.

### Internal Engine Model

The Validation Engine's internal model consists of a six-stage verification pipeline, an assertion registry, an evaluation context, and a result builder.

**Six-Stage Verification Pipeline**

```
Stage 1: STRUCTURAL VERIFICATION
    |
    +-- Verify execution output format, schema, and type conformance
    +-- Verify required field presence
    +-- Constraint source: PlanArtifact (primary), ContextSnapshot (secondary)
    |
    v
Stage 2: SEMANTIC VERIFICATION
    |
    +-- Verify factual correctness against knowledge constraints
    +-- Verify value ranges and domain rules
    +-- Constraint source: KnowledgeArtifact (primary), ContextSnapshot (secondary)
    |
    v
Stage 3: AUTHORIZATION VERIFICATION
    |
    +-- Verify all actions within authorized scope
    +-- Verify no unauthorized resource access
    +-- Constraint source: DecisionArtifact (exclusive)
    |
    v
Stage 4: COMPLETENESS VERIFICATION
    |
    +-- Verify all plan steps have execution outputs (no missing steps)
    +-- Verify all execution outputs map to plan steps (no orphan outputs)
    +-- Constraint source: PlanArtifact (primary), DecisionArtifact (secondary)
    |
    v
Stage 5: CONSISTENCY VERIFICATION
    |
    +-- Verify cross-artifact coherence
    +-- Detect cross-step data inconsistencies
    +-- Constraint source: All five constraint sources (cross-referencing)
    |
    v
Stage 6: TEMPORAL VERIFICATION
    |
    +-- Verify dependency ordering compliance
    +-- Verify timing constraint adherence
    +-- Constraint source: PlanArtifact (primary), ContextSnapshot (secondary)
    |
    v
  Aggregation & Emission
```

**Core State Model**

```
ValidationState
+-- InputBundle
|   +-- contextSnapshot: ContextSnapshot
|   +-- knowledgeArtifact: KnowledgeArtifact
|   +-- planArtifact: PlanArtifact
|   +-- decisionArtifact: DecisionArtifact
|   +-- executionResult: ExecutionResult
+-- AssertionRegistry
|   +-- structural: AssertionDef[]
|   +-- semantic: AssertionDef[]
|   +-- authorization: AssertionDef[]
|   +-- completeness: AssertionDef[]
|   +-- consistency: AssertionDef[]
|   +-- temporal: AssertionDef[]
+-- EvaluationContext
|   +-- currentCategory: AssertionCategory
|   +-- evaluatedCount: integer
|   +-- failedCount: integer
|   +-- activeConflicts: ConstraintConflict[]
+-- ResultBuilder
    +-- assertionResults: AssertionResult[]
    +-- verificationGaps: VerificationGap[]
    +-- constraintConflicts: ConstraintConflict[]
    +-- pipelineVerdict: PipelineVerdict
```

**Assertion Evaluation Model**

Each assertion is defined as a pure function with the following signature: `evaluate(assertionDef, inputBundle) -> AssertionResult`. The assertion function receives the full InputBundle so that cross-source assertions can be implemented. However, each assertion is primarily associated with one constraint source, which is recorded in the AssertionResult for traceability.

Assertion evaluation follows strict purity guarantees: no external I/O, no mutable state, no dependency on evaluation order within a category, and no dependency on the result of other assertions (except for cross-category consistency assertions, which reference the results of prior categories via the EvaluationContext).

**Constraint Resolution Model**

When multiple constraint sources define constraints on the same execution output property, the Validation Engine applies the following resolution rules:

1. **Intersection Rule**: If multiple sources define the same constraint type (e.g., both Planning and Decision define a maximum count), the more restrictive value applies. The Validation Engine uses the intersection of permitted values.
2. **Conflict Detection Rule**: If constraint sources define contradictory requirements (e.g., Planning requires output format A, Context requires output format B, and A and B are mutually exclusive), this is detected as a ConstraintConflict and reported as a WARNING rather than causing assertion evaluation failure.
3. **Source Priority Rule**: When constraints overlap but do not contradict, the source priority order (Decision > Context > Planning > Knowledge > Execution) determines which constraint's metadata is recorded as the primary constraint source in the AssertionResult.

**Conformance Level Determination**

```
if criticalFails > 0:
    return NON_CONFORMANCE
else if warnings > 0 OR conflictCount > 0:
    return PARTIAL_CONFORMANCE
else:
    return FULL_CONFORMANCE
```

**Pipeline Verdict Determination**

```
if conformanceLevel == NON_CONFORMANCE:
    return REJECT
else if conformanceLevel == PARTIAL_CONFORMANCE:
    if criticalFails > 0:
        return REJECT
    else:
        return HOLD
else:
    return PROCEED
```

**Internal Data Flow**

```
ValidationInternalState {
    inputBundle: InputBundle
    assertionRegistry: AssertionRegistry
    evaluationContext: EvaluationContext
    resultBuilder: ResultBuilder
    currentStage: ValidationStage
    verificationScope: FULL | DEGRADED
    degradedSources: string[]
}
```

The `ValidationInternalState` exists only during the verification lifecycle and is not persisted between invocations. After the ValidationResult is produced and emitted, all internal state is discarded. This ensures that no verification state leaks between invocations and that every verification is a clean, independent evaluation.

### Resolution Rules

The Validation Engine's resolution rules define how ambiguity, conflict, and edge cases are handled during the verification process. These rules ensure that the verification result is deterministic and well-defined even when the inputs are not perfectly clear. All resolution rules are deterministic — they do not depend on external state, timing, or discretion.

**Ambiguity Resolution**

1. **Conservative verification** — If an assertion result is ambiguous (could be PASS or FAIL), the Validation Engine resolves in favour of the stricter outcome (FAIL). This conservative approach ensures that borderline cases require explicit resolution before a passing verdict is granted. The ambiguity is recorded in the assertion result details.
2. **Missing evaluation data** — If an assertion cannot be evaluated because a required field in the InputBundle is missing or malformed, the assertion is marked as FAIL with a detailed explanation. The missing data is recorded as a verification gap referencing the specific upstream artifact and field.
3. **Conflicting constraint sources** — If two constraint sources define contradictory requirements, the Validation Engine does not attempt to resolve the contradiction. The contradiction is detected as a ConstraintConflict and reported as a WARNING in the ValidationResult. The assertion that triggered the conflict detection is evaluated against both sources, and both results are recorded.

**Conflict Resolution**

1. **Source priority for metadata** — When assertions reference overlapping constraint sources, the source priority order (Decision > Context > Planning > Knowledge > Execution) determines which constraint's metadata is recorded as the primary source. Both evaluations are performed; the priority order only affects metadata recording, not the evaluation outcome.
2. **Cross-category conflict precedence** — If a consistency assertion (Stage 5) detects a conflict with the result of an earlier category assertion, the consistency assertion's result is recorded as the authoritative finding, and the earlier result is referenced as the conflicting evidence. The consistency stage is the most cross-cutting stage and has the broadest view of the verification context.

**Fallback Behaviour**

- If the Validation Engine encounters an internal error during assertion evaluation, it marks the affected assertion as FAIL with CRITICAL severity, records the error details in the verification gap, and continues evaluating remaining assertions. The error does not prevent the production of a ValidationResult.
- If the Validation Engine encounters a catastrophic failure that prevents ValidationResult production, it emits a `validation.failed` event and transitions to ERROR state. The pipeline must re-initiate the verification with a new InputBundle. No verification result exists for the failed attempt.
- If the Validation Engine is operating in degraded mode (one or more constraint sources unavailable), it produces a ValidationResult with `verificationScope` set to DEGRADED and the `degradedSources` array listing the unavailable sources. The pipeline verdict for a DEGRADED-scope validation is capped at HOLD — a PROCEED verdict is not possible in degraded mode because not all constraints were verified.
- If the ExecutionResult contains steps that do not map to any plan step (orphan outputs), these are reported as WARNING-level verification gaps in the completeness category. Orphan outputs do not block verification but are flagged for Review Engine attention.

### Engine State

The Validation Engine's state characteristics within the A.4.6 state model:

| State | Description | Entry Condition | Exit Condition |
|:---|:---|:---|:---|
| `UNINITIALIZED` | Engine created but not initialized | Engine instantiation | Initialization begins |
| `INITIALIZING` | Assertion registry being loaded; engine registering with Registry | Initialization triggered | Registry loaded; registration complete |
| `READY` | Engine accepting verification requests | Initialization complete | InputBundle received |
| `EVALUATING` | Verification in progress — assertions being evaluated | Verification request accepted | All categories evaluated |
| `AGGREGATING` | Computing conformance level, verdict, and summary | All categories evaluated | Aggregation complete |
| `EMITTING` | ValidationResult being constructed and events emitted | Aggregation complete | ValidationResult emitted and delivered |
| `COMPLETED` | Verification finished; artifact delivered | Emission complete | Engine returns to READY |
| `ERROR` | Unrecoverable error during verification | Error detected during any stage | Error recovery complete; engine returns to READY |
| `TERMINATED` | Engine shut down | Shutdown requested | N/A (terminal state) |

State recovery: The Validation Engine recovers from ERROR by reinitializing the assertion registry and returning to READY. No in-progress verification state is recovered; interrupted verifications must be re-initiated with a new InputBundle.

The Validation Engine introduces two engine-specific states beyond the A.4.6 standard states: `EVALUATING`, `AGGREGATING`, and `EMITTING` refine the A.4.6 `ACTIVE` state into verification-specific sub-states that enable granular event emission and state tracking. These sub-states are not visible to external engines — externally, the engine appears to be in the A.4.6 `ACTIVE` state. The internal sub-states exist to enable the Validation Engine's deterministic event sequencing and state transition validation.

### AI Consumption Rules

The Validation Engine does not invoke, orchestrate, or depend on any AI/LLM components. All assertion evaluation, conformance classification, verdict computation, and validation event emission are performed through deterministic predicate functions and pure computation. The Validation Engine's architectural purpose — deterministic quality gating with reproducible results — is fundamentally incompatible with probabilistic or non-deterministic evaluation methods. Verification decisions must be reproducible and auditable; AI/LLM involvement would compromise these guarantees. No AI/LLM components are referenced, consumed, or integrated at any point in the Validation Engine's architecture.

### Runtime Interaction Rules

The Validation Engine interacts with the runtime exclusively through the Engine Platform's defined communication patterns (A.4.5):

- The Validation Engine receives upstream artifacts via the handoff mechanism from the Execution Engine (A.5.5) and indirectly from engines A.5.1 through A.5.4 through the pipeline's artifact resolution mechanism.
- The Validation Engine emits verification events via the event mechanism defined by A.4.5.
- The Validation Engine delivers the ValidationResult to the Review Engine (A.5.7) and Memory Engine (A.5.9) via the handoff mechanism.
- The Validation Engine does not make direct outbound calls to other engines, external systems, or I/O channels during verification processing.
- The Validation Engine does not perform any persistence operations; persistence of ValidationResults is the Memory Engine's responsibility.

### Extension Model

The Validation Engine may be extended through the following mechanisms:

- **New assertion categories** — Additional verification categories beyond the six defined categories (structural, semantic, authorization, completeness, consistency, temporal) may be introduced to address emerging verification requirements. New categories must define their primary constraint source, evaluation focus, severity classification rules, and position in the evaluation order.
- **New assertion predicates** — Additional assertions within existing categories may be added to the assertion registry without modifying the engine's core pipeline. New assertions must be deterministic pure functions with defined constraint source association and severity classification.
- **Custom severity classifications** — The three-level severity model (CRITICAL, WARNING, INFO) may be extended with additional severity levels, provided the verdict computation algorithm is updated to handle the new levels and the deterministic guarantee (INV-VAL-8) is preserved.
- **Custom constraint resolution rules** — The three constraint resolution rules (intersection, conflict detection, source priority) may be extended with additional rules for specific constraint overlap patterns, provided the deterministic guarantee (INV-VAL-1) is preserved.

Extensions must not alter the Validation Engine's invariants, particularly deterministic verification (INV-VAL-1), no upstream mutation (INV-VAL-2), assertion completeness (INV-VAL-3), category isolation (INV-VAL-4), and pipeline verdict determinism (INV-VAL-8). Extensions that introduce non-deterministic behaviour, bypass category isolation, or modify the verdict computation algorithm require Framework Governance approval.

### Knowledge Graph Integration

The Validation Engine does not directly interact with a knowledge graph. The Validation Engine consumes the KnowledgeArtifact produced by the Knowledge Engine (A.5.2) as one of its five constraint sources, but it does not query, update, or traverse a knowledge graph structure. Knowledge graph interaction is owned by the Knowledge Engine and the Memory Engine (A.5.9). The Validation Engine's consumption of knowledge artifacts is through the InputBundle — it evaluates execution outputs against the knowledge constraints carried in the KnowledgeArtifact, not against the live knowledge graph state.

This separation is consistent with the Validation Engine's architectural design of consuming point-in-time artifact snapshots rather than live system state. The Validation Engine verifies execution outputs against the knowledge constraints that were current at the time the KnowledgeArtifact was produced. If the knowledge graph has changed since the KnowledgeArtifact was produced, that change is not reflected in the current verification — it will be reflected in a subsequent verification cycle with an updated KnowledgeArtifact.

### Performance Characteristics

| Characteristic | Bound | Rationale |
|:---|:---|:---|
| Verification latency | Determined by assertion count and InputBundle size | Verification is CPU-bound evaluation of deterministic predicates against in-memory data; no I/O during processing |
| Assertion evaluation | Bounded by assertion count per category | Each assertion is a pure function with bounded execution time |
| Concurrent verifications | Not supported | One verification at a time; concurrent requests rejected |
| ValidationResult size | Proportional to assertion count, verification gap count, and input reference count | ValidationResult includes all assertion results, all gaps, all conflicts, and all input references |
| Event count per verification | Determined by assertion count plus fixed overhead | Each assertion produces one event; each category produces two events; fixed start/end events |

No AI/LLM involvement. No external I/O. No persistence operations. No network calls. All performance is determined by deterministic in-memory evaluation of pure functions against the InputBundle. The Validation Engine's performance profile is the most predictable in the pipeline because it has no external dependencies during processing — all data is available in the InputBundle at the start of verification.

### Security & Governance

**Security Boundaries**

- The Validation Engine processes sensitive pipeline data including execution outputs, authorization boundaries, and decision artifacts. All artifact access is read-only; no sensitive data is written or transmitted outside the pipeline.
- The Validation Engine does not persist any data. All artifacts exist in memory only during the verification lifecycle. This minimizes the attack surface for data exfiltration.
- The Validation Engine does not make network calls or access external systems. This restriction limits the Validation Engine's communication to the defined event and handoff mechanisms.
- The Authorization Verification stage (Stage 3) is the most security-critical stage. Authorization assertion predicates must be implemented with extra rigor: every executed action must be verified with no exceptions or bypass paths, and any error during authorization assertion evaluation must default to FAIL (deny-by-default).

**Governance Constraints**

- The Validation Engine operates within the governance framework defined by A.4 and the Framework Governance documents.
- The Validation Engine does not create, modify, or enforce governance policies. Policy consumption is limited to using governance policy configuration as a constraint source when applicable.
- The Validation Engine does not certify, approve, or canonicalize any artifact. These governance actions are owned by the Certification Engine (A.5.8) and human governance.
- The Validation Engine's pipeline verdict (PROCEED / HOLD / REJECT) is a recommendation to the pipeline, not a governance decision. The pipeline orchestrator and downstream engines may override the verdict through defined governance mechanisms, but the ValidationResult itself is immutable.
- The Validation Engine does not perform human-in-the-loop approval workflows. All verification is fully automated and deterministic.

---

## Design Decisions

### DD-1: Six-Stage Sequential Verification Pipeline

**Context**: The Validation Engine needs to verify execution outputs against five distinct constraint sources. The verification could be organized as a monolithic single-pass evaluation, a parallel multi-threaded evaluation, or a sequential staged pipeline with distinct verification focuses.

**Options considered**: (a) Monolithic single-pass evaluation where all assertions are evaluated in a single flat pass without category grouping; (b) Parallel multi-threaded evaluation where assertion categories are evaluated concurrently; (c) Sequential six-stage pipeline with category isolation.

**Decision**: Option (c). The Validation Engine uses a six-stage sequential verification pipeline (structural, semantic, authorization, completeness, consistency, temporal) with full category isolation.

**Rationale**: The sequential staged model provides several critical advantages over the alternatives. Category isolation (INV-VAL-4) requires that a failure in one category does not prevent evaluation of other categories — the sequential model naturally enforces this by evaluating all six stages regardless of individual outcomes. The ordering is intentional: structural verification first (ensures data integrity before semantic evaluation), semantic second (ensures factual correctness before authorization checks), authorization third (verifies scope compliance with correct data), completeness fourth (verifies all expected outputs exist), consistency fifth (cross-references all sources with complete data available), and temporal last (verifies ordering with all other checks complete). This ordering enables each stage to build on the results of prior stages via the EvaluationContext while maintaining deterministic behaviour. The parallel model (option b) would violate deterministic event ordering and complicate the EvaluationContext, while the monolithic model (option a) would lose the architectural clarity that category isolation provides.

### DD-2: Single-Concurrency Verification Design

**Context**: The pipeline may need to verify multiple execution outputs in rapid succession. The Validation Engine could support concurrent verifications or restrict itself to one verification at a time.

**Options considered**: (a) Concurrent verifications with thread-safe assertion evaluation; (b) Single-concurrency design where concurrent requests are rejected; (c) Queue-based design where requests are serialized internally.

**Decision**: Option (b). The Validation Engine processes one verification request at a time. Concurrent verification requests are rejected.

**Rationale**: The single-concurrency design is the simplest architecture that preserves the deterministic verification guarantee (INV-VAL-1). Concurrent verifications would require shared mutable state management, contention resolution, and complex synchronization logic that could introduce non-determinism or race conditions. The Validation Engine's in-memory state (EvaluationContext, ResultBuilder) is designed for single-threaded operation. The queue-based model (option c) would add complexity (back-pressure, timeout, queue management) without providing architectural benefit over rejecting concurrent requests and letting the pipeline serialize them. Pipeline-level serialization is the pipeline orchestrator's responsibility, not the Validation Engine's.

### DD-3: Deterministic-Only Assertion Evaluation

**Context**: Some verification scenarios could benefit from AI/LLM-based semantic understanding (e.g., natural language output quality assessment, nuanced semantic compliance). The Validation Engine could incorporate AI/LLM evaluation alongside deterministic assertions.

**Options considered**: (a) Hybrid model with AI/LLM for semantic assertions and deterministic for structural/authorization assertions; (b) Fully deterministic assertion evaluation with no AI/LLM involvement; (c) AI/LLM as a post-verification advisory layer that produces non-binding quality signals.

**Decision**: Option (b). All assertion evaluation is fully deterministic. No AI/LLM involvement at any stage of verification.

**Rationale**: The Validation Engine's foundational invariant (INV-VAL-1) requires that the same InputBundle always produces byte-identical ValidationResults. AI/LLM inference is inherently non-deterministic (even with temperature=0, model versions and internal optimizations can produce different outputs). Introducing AI/LLM evaluation would violate the determinism guarantee and undermine the Validation Engine's architectural purpose as the authoritative, reproducible quality gate. If semantic quality assessment is needed, it should be performed by the Review Engine (A.5.7) as part of its readiness assessment — the Review Engine's purpose includes evaluative judgment, while the Validation Engine's purpose is limited to deterministic constraint verification.

### DD-4: Three-Level Conformance Classification

**Context**: The conformance level needs to provide downstream engines with a clear quality signal. Options include a binary pass/fail, a numeric score, a multi-level classification, or a continuous quality metric.

**Options considered**: (a) Binary PASS/FAIL classification; (b) Numeric quality score (0-100); (c) Three-level classification (FULL_CONFORMANCE, PARTIAL_CONFORMANCE, NON_CONFORMANCE); (d) Five-level classification adding MINOR_CONFORMANCE and CRITICAL_NON_CONFORMANCE.

**Decision**: Option (c). Three-level conformance classification.

**Rationale**: The binary model (option a) loses important nuance — a single non-critical warning and a critical authorization failure would both produce FAIL, preventing the pipeline from distinguishing between "minor issues" and "blocking problems." The numeric model (option b) introduces continuous scoring that requires threshold definitions and is difficult to govern — what score constitutes "ready for certification"? The five-level model (option d) adds granularity without clear benefit — the three-level model provides exactly the distinction the pipeline needs: FULL (proceed), PARTIAL (hold and review), NON (reject). The three levels map directly to the three pipeline verdicts (PROCEED, HOLD, REJECT), creating a clean, auditable, and governable classification system.

### DD-5: Degraded Mode with Verdict Capping

**Context**: The Validation Engine requires all five constraint sources for full verification. When one or more sources are unavailable, the engine must decide how to handle the incomplete verification scope.

**Options considered**: (a) Reject all verification requests when any constraint source is missing; (b) Proceed with available sources and produce a FULL-scope result (hiding the gap); (c) Proceed with available sources but explicitly mark the scope as DEGRADED and cap the verdict at HOLD.

**Decision**: Option (c). The Validation Engine operates in degraded mode with explicit scope marking and verdict capping.

**Rationale**: Rejecting all requests (option a) would create a single point of failure — if the Knowledge Engine is temporarily unavailable, no verification can proceed even for executions that don't require knowledge constraints. Hiding the gap (option b) would violate the completeness invariant (INV-VAL-3) by implicitly skipping assertions for missing sources. The degraded mode (option c) provides maximum availability while maintaining full transparency: the DEGRADED scope is explicitly recorded in the ValidationResult, the unavailable sources are enumerated, and the verdict is capped at HOLD to ensure that no execution output receives a PROCEED verdict without complete verification. This design allows the pipeline to continue operating under partial availability while ensuring that incomplete verification never produces an unconditional pass.

### DD-6: Eight Invariants as Architectural Guarantees

**Context**: The prior Engine RFC template (pre-A.5.0 refactoring) did not mandate invariants. A.5.0's Author Guidance (A.2.16) requires invariants to be "few, precise, and verifiable." The Validation Engine's deterministic nature and quality gate position suggest more invariants than typical engines.

**Options considered**: (a) Minimal invariants (3-4 covering only critical determinism and immutability); (b) Eight invariants covering determinism, no upstream mutation, assertion completeness, category isolation, single-writer output, immutable versioned outputs, full traceability, and verdict determinism; (c) More than eight invariants for exhaustive coverage.

**Decision**: Option (b). Eight invariants that are each expressible as testable assertions without accessing implementation code.

**Rationale**: The Validation Engine's position as the pipeline's quality gate creates a higher invariant burden than typical engines. Deterministic verification (INV-VAL-1) and pipeline verdict determinism (INV-VAL-8) are separate because the former covers the entire verification process while the latter specifically covers the verdict computation algorithm. Category isolation (INV-VAL-4) is critical because the Validation Engine's architectural value depends on comprehensive verification — suppressing category evaluation would undermine the engine's purpose. Full traceability (INV-VAL-7) ensures that every verification gap can be traced to its root cause, which is essential for the Review Engine's readiness assessment. Eight invariants cover the Validation Engine's critical guarantees without introducing overlapping or redundant invariants.

---

## Responsibilities

### Engine Responsibilities

The Validation Engine is accountable for the following architectural responsibilities, grouped by functional domain. Each responsibility maps to at least one operation defined in the Interfaces section, ensuring that every responsibility is operationally realizable.

**Verification Intake**

- Receive artifacts from all five upstream engines (Context, Knowledge, Planning, Decision, Execution) as the primary inputs to the verification process.
- Validate that all received artifacts are in their canonical format as defined by their respective engine RFCs. Any deviation from the canonical format is treated as a hard validation failure that prevents verification from proceeding.
- Verify that all received artifacts carry valid version identifiers, engine-of-origin identifiers, and timestamps. These identification fields are the minimum triad required for verification intake and traceability.
- Determine the verification scope (FULL or DEGRADED) based on the availability of all five constraint sources. If any constraint source is unavailable, the engine enters degraded verification mode and explicitly marks the scope in the ValidationResult metadata.
- Assemble the InputBundle from the received artifacts. The InputBundle is the unified internal representation of all constraint sources and execution outputs that drives the verification pipeline.

**Assertion Evaluation**

- Evaluate all registered assertions as deterministic predicate functions against the InputBundle. Each assertion evaluates a single verifiable property of an execution output against a constraint source, producing a definitive PASS or FAIL outcome with no ambiguity.
- Organize assertions into six categories (structural, semantic, authorization, completeness, consistency, temporal) and evaluate them in a fixed category order. Category evaluation is isolated — a failure in one category does not prevent evaluation of subsequent categories.
- Register assertions dynamically based on the InputBundle content. The assertion registry is populated during initialization based on the available constraint sources and the structure of the execution outputs being verified.
- Evaluate cross-source assertions that reference constraint sources from multiple upstream engines. Cross-source assertions enable the Validation Engine to detect inconsistencies that are invisible when examining a single constraint source in isolation.
- Ensure assertion completeness — every assertion registered for a given verification run is evaluated exactly once. There are no skipped, duplicated, or conditionally omitted assertions.

**Conformance Classification and Verdict Computation**

- Compute the aggregate conformance level (FULL_CONFORMANCE, PARTIAL_CONFORMANCE, or NON_CONFORMANCE) from the accumulated assertion results using deterministic logic. The conformance level is a derived field, not independently set.
- Compute the pipeline verdict (PROCEED, HOLD, or REJECT) from the assertion results, severity classifications, and detected constraint conflicts. The verdict logic is fully defined, auditable, and has no hidden rules, external influences, or discretionary overrides.
- Detect and report constraint conflicts — situations where constraints from different upstream engines contradict each other. Constraint conflicts are reported as WARNING-level findings with explicit identification of the conflicting sources and the nature of the conflict.
- Classify every verification gap with a severity level (CRITICAL for pipeline-blocking issues, WARNING for non-blocking but attention-requiring issues, INFO for informational observations). The severity classification determines both the conformance level and the pipeline verdict.

**ValidationResult Production**

- Produce immutable, versioned ValidationResults. Each ValidationResult is assigned a unique identifier, a semantic version following the `major.minor.0-draft` convention, and an ISO 8601 timestamp. Once produced, the artifact is never modified in place.
- Preserve complete traceability in every ValidationResult. Every assertion result, verification gap, and constraint conflict references the specific constraint source, the specific execution output, and the specific upstream artifact version that was evaluated.
- Include the complete input reference set in every ValidationResult, recording the version identifier of each consumed upstream artifact. This enables downstream engines to reconstruct the complete verification context without accessing any external data source.
- For re-verification scenarios, produce a new ValidationResult with a new version and an explicit `previousVersion` reference to the prior result. The original ValidationResult is never mutated.

**Verification Event Emission**

- Emit structured validation events for every stage of the verification pipeline. Events are emitted at each category evaluation start and completion, for each individual assertion evaluation, for each detected verification gap, for each detected constraint conflict, and for the aggregate verification result.
- Ensure event total ordering within a single verification run. Events are emitted in strict sequential order as defined by the verification pipeline stages. No out-of-order event delivery is possible.
- Ensure event completeness — every verification run produces a complete event trace from `validation.started` through `validation.completed`. No events are silently dropped. Error conditions are captured as additional events rather than suppressing normal event flow.

**Verification Feedback**

- Emit pipeline verdict events to pipeline observability for real-time monitoring and audit trail completeness.
- Deliver verification feedback to the Review Engine when the verification process identifies issues that require upstream awareness. This feedback enables the Review Engine to understand the specific verification outcomes that will inform its readiness assessment.
- Produce audit records for all verification decisions, including the verdict, assertion results, conformance level, constraint conflicts, and input references. Audit records are the Validation Engine's contribution to the platform's compliance and governance audit trail.

---

## Non Responsibilities

### Engine Non Responsibilities

The Validation Engine is explicitly not responsible for:

- **Execution output correction** — The Validation Engine does not fix, modify, or re-execute any upstream artifact. If verification identifies issues, it reports them through the ValidationResult and verification feedback; correction is handled by the appropriate upstream engine through the pipeline's revision mechanisms. The Validation Engine's role is to verify, not to correct.
- **Decision-making about execution** — The decision of what to execute and whether to authorize execution is owned by the Decision Engine (A.5.4). The Validation Engine does not decide whether execution should have occurred; it verifies whether the execution that did occur conforms to the constraints established by upstream engines.
- **Readiness assessment** — The determination of whether a validated output is ready for certification is owned by the Review Engine (A.5.7). The Validation Engine produces verification evidence; the Review Engine interprets that evidence in the context of readiness criteria.
- **Certification decision-making** — The decision of whether to certify a validated output is owned by the Certification Engine (A.5.8). The Validation Engine's verdict is a recommendation to the pipeline, not a certification decision.
- **Upstream artifact validation** — The Validation Engine trusts that upstream artifacts are well-formed per their respective engine RFCs. It validates execution outputs against the semantic content of upstream artifacts, not the structural integrity of the artifacts themselves. Structural integrity of upstream artifacts is the producing engine's responsibility.
- **Memory persistence** — The persistence, archival, and retrieval of ValidationResults are owned by the Memory Engine (A.5.9). The Validation Engine produces artifacts for handoff but does not persist them.
- **Assertion catalog definition** — The specific assertions evaluated are defined in implementation-level configuration, not in this architecture RFC. This RFC defines the assertion model, evaluation mechanism, and result structure — not the specific assertions.
- **ProjectStatus updates** — Not within any Engine's scope.

These non-responsibilities are architectural boundaries, not operational limitations. Each boundary exists to maintain clear ownership, prevent responsibility overlap, and ensure that the Engine Platform's separation of concerns is preserved throughout the verification process.

---

## Interfaces

### Consumed Inputs

| Input | Source Engine | Type | Description |
|:---|:---|:---|:---|
| ContextSnapshot | Context Engine (A.5.1) | `ContextSnapshot` | Environmental constraints, resource limits, domain boundaries, and contextual requirements that execution outputs must respect. This is the contextual constraint source. |
| KnowledgeArtifact | Knowledge Engine (A.5.2) | `KnowledgeArtifact` | Factual correctness criteria, domain rules, and knowledge constraints that execution outputs must satisfy. This is the factual constraint source. |
| PlanArtifact | Planning Engine (A.5.3) | `PlanArtifact` | The structural plan defining required execution steps, expected outputs, dependency ordering, and success criteria that execution results must conform to. This is the structural constraint source. |
| DecisionArtifact | Decision Engine (A.5.4) | `DecisionArtifact` | Authorization grants, policy decisions, permission boundaries, and risk assessments that execution actions must not exceed. This is the authorization constraint source. |
| ExecutionResult | Execution Engine (A.5.5) | `ExecutionResult` | The actual execution outputs — step results, produced artifacts, side-effect records, and execution metadata — that are the subject of verification. |

**Input Validation Expectations**

- All five primary inputs MUST be present for full-scope verification. If any input is missing, the Validation Engine operates in degraded verification mode (verifying only against available constraint sources) and marks the ValidationResult scope as DEGRADED.
- All inputs MUST carry their engine-of-origin version identifiers. The Validation Engine records these version identifiers in the ValidationResult to maintain complete traceability of which upstream artifact versions were used for each verification.
- All inputs MUST be in their canonical artifact format as defined by their respective engine RFCs. The Validation Engine does not perform format translation; it consumes artifacts in the format produced by their source engines.
- ExecutionResult MUST include step-level granularity. Each execution step must be individually identifiable and referenceable so that the Validation Engine can perform step-level verification against corresponding plan steps.
- All inputs are treated as read-only. The Validation Engine never modifies, extends, or re-versions any artifact received from upstream engines.

### Produced Outputs

**Primary Output: ValidationResult**

| Field | Type | Description |
|:---|:---|:---|
| `validationId` | `string` | Unique identifier for this validation run, format: `val-{uuid}` |
| `version` | `string` | Semantic version of this ValidationResult, format: `major.minor.0-draft` |
| `previousVersion` | `string?` | Reference to previous ValidationResult version if this is a re-verification, null for first verification |
| `timestamp` | `ISO 8601` | Exact timestamp of ValidationResult creation |
| `conformanceLevel` | `enum` | `FULL_CONFORMANCE` / `PARTIAL_CONFORMANCE` / `NON_CONFORMANCE` |
| `pipelineVerdict` | `enum` | `PROCEED` / `HOLD` / `REJECT` |
| `assertionResults` | `AssertionResult[]` | Complete list of all individual assertion evaluation results |
| `verificationGaps` | `VerificationGap[]` | List of all detected verification gaps (failures and warnings) |
| `constraintConflicts` | `ConstraintConflict[]` | List of detected conflicts between constraint sources |
| `inputReferences` | `InputRef[]` | Versioned references to all consumed upstream artifacts |
| `verificationScope` | `enum` | `FULL` / `DEGRADED` — indicates whether all constraint sources were available |
| `degradedSources` | `string[]` | List of unavailable constraint sources (empty if scope is FULL) |
| `summary` | `ValidationSummary` | Aggregate counts: total assertions, passed, failed, warnings, info |

**Secondary Outputs**

| Output | Type | Consumer | Description |
|:---|:---|:---|:---|
| Validation events | Structured events | Pipeline observability | Verification progress and result events for monitoring and audit trail |
| Verification feedback | Structured feedback | Review Engine, upstream engines | Issues that require upstream awareness or correction |
| Audit records | Structured records | Governance Engine | Compliance and governance audit trail contribution |

**Output Versioning**

All ValidationResults are immutable once produced. Re-verification of the same execution output produces a new ValidationResult with a new version identifier and an explicit `previousVersion` reference to the prior result. The original artifact is never mutated. Version numbering follows the semantic versioning convention: `major.minor.0-draft`. The `-draft` suffix is present for all ValidationResults produced while the Validation Engine RFC itself is in draft compliance level.

### Engine Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `validate(inputBundle)` | Execute full verification of execution outputs against all constraint sources. Primary entry point and the only operation that produces a ValidationResult. Orchestrates the complete internal pipeline: intake, assertion registration, six-stage category evaluation, aggregation, and emission. | `InputBundle` | `ValidationResult` | Emits validation lifecycle events (validation.started through validation.completed) | Missing input -> degraded mode or rejection; internal error -> ERROR state with error ValidationResult |
| `registerAssertions(inputBundle)` | Register all applicable assertions based on the InputBundle content. Sub-operation executed during intake. Analyzes plan structure, decision scope, and context constraints to determine which assertions are applicable. | `InputBundle` | `AssertionRegistry` | Emits `validation.assertions_registered` event | Registry load failure -> ERROR state; empty registry -> DEGRADED scope |
| `evaluateCategory(category, inputBundle, evalContext)` | Evaluate all assertions within a single category. Produces individual AssertionResults for each assertion, plus a category-level aggregate outcome. Category evaluation is isolated. | `AssertionCategory`, `InputBundle`, `EvaluationContext` | `CategoryResult` | Emits per-assertion and per-category events | Assertion predicate error -> FAIL result with error details; category timeout -> CRITICAL FAIL for remaining unevaluated assertions |
| `detectConflicts(inputBundle)` | Analyze constraint sources for mutual contradictions. Performed once during intake before assertion evaluation. Results are included in the final ValidationResult. | `InputBundle` | `ConstraintConflict[]` | Emits `validation.conflict.detected` events | Conflict detection error -> empty conflict list with warning event |
| `computeVerdict(assertionResults, conflicts, scope)` | Compute the aggregate pipeline verdict from all assertion results, constraint conflicts, and verification scope. Pure function with no side effects. | `AssertionResult[]`, `ConstraintConflict[]`, `VerificationScope` | `PipelineVerdict` | No side effects | Inconsistent inputs -> ERROR state |
| `buildResult(resultBuilder, inputBundle)` | Construct the final ValidationResult from the ResultBuilder's accumulated state. Assigns validation ID, version, timestamp, input references, and computed aggregate fields. | `ResultBuilder`, `InputBundle` | `ValidationResult` | Emits `validation.completed` event | Output validation failure -> do not emit; internal error |

### Engine Events

**Emitted Events**

| Event | Trigger | Payload | Consumers | Expected Response |
|:---|:---|:---|:---|:---|
| `validation.started` | Verification pipeline begins | `{validationId, inputReferences, verificationScope, categoryCount}` | Pipeline observability | Log event; track verification progress |
| `validation.category.started` | A category evaluation begins | `{validationId, category, assertionCount}` | Pipeline observability | Log event; proceed with evaluation |
| `validation.assertion.evaluated` | Single assertion completes | `{validationId, assertionId, category, source, outcome, severity, duration}` | Pipeline observability | Log event; aggregate for category result |
| `validation.category.completed` | A category evaluation completes | `{validationId, category, passed, failed, warnings, duration}` | Pipeline observability | Log event; proceed to next category |
| `validation.conflict.detected` | Constraint conflict found | `{validationId, conflictId, sourceA, sourceB, nature, description}` | Pipeline observability | Log event; flag for Review Engine attention |
| `validation.gap.detected` | Verification gap found | `{validationId, gapId, assertionId, severity, description, executionStepRef, expectedConstraint, actualBehavior}` | Pipeline observability, Review Engine | Log event; aggregate for verdict computation |
| `validation.completed` | Full verification pipeline completes | `{validationId, conformanceLevel, pipelineVerdict, summary, duration}` | Review Engine, Memory Engine, Pipeline observability | Consume ValidationResult; proceed to review |
| `validation.degraded.mode` | Validation running in degraded scope | `{validationId, missingSources, availableSources}` | Pipeline observability | Log warning; note incomplete verification scope |
| `validation.failed` | Unrecoverable verification error | `{validationId, error, severity, stage}` | Pipeline observability | Alert; investigate and re-initiate if appropriate |

**Consumed Events**

| Event | Source | Response | Response Timing |
|:---|:---|:---|:---|
| `execution.completed` | Execution Engine (A.5.5) | Triggers verification intake when a new ExecutionResult is available. The Validation Engine matches the execution reference against pending verification requests. | Immediate (within the same pipeline cycle) |

**Event Guarantees**

- Events within a single verification are emitted in strict sequential order as listed above. No out-of-order event delivery is possible within a verification lifecycle.
- Every event carries the `validationId` for correlation across the verification lifecycle.
- Critical events (`validation.completed`, `validation.failed`) must not be silently dropped. If the event infrastructure is unavailable, the Validation Engine retains the event for delivery once the infrastructure recovers.
- Event payloads are structured objects with typed fields. No unstructured log lines are emitted as events.
- The Validation Engine does not consume its own emitted events. There is no event feedback loop within the Validation Engine.

**Event Flow Sequence**

```
validation.started
  +-- validation.category.started (structural)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.category.completed
  +-- validation.category.started (semantic)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.gap.detected (if any FAIL/WARNING)
  |   +-- validation.category.completed
  +-- validation.category.started (authorization)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.gap.detected (if any FAIL/WARNING)
  |   +-- validation.category.completed
  +-- validation.category.started (completeness)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.category.completed
  +-- validation.category.started (consistency)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.conflict.detected (if conflicts found)
  |   +-- validation.category.completed
  +-- validation.category.started (temporal)
  |   +-- validation.assertion.evaluated x N
  |   +-- validation.category.completed
  +-- validation.completed
```

### Engine Handoff Contract

**Handoff Prerequisites**

1. The Validation Engine has completed all six assertion category evaluations (structural, semantic, authorization, completeness, consistency, temporal).
2. The conformance level has been deterministically computed from the aggregate assertion results.
3. The pipeline verdict has been computed from the assertion results, constraint conflicts, and verification scope.
4. The ValidationResult has passed all output validation rules (defined in the Validation section), including mandatory field presence, verdict consistency, reference validity, version format, and assertion completeness.
5. All eight engine invariants (defined in the Validation section) hold for the completed verification. Invariant verification is performed as a final check before handoff; any invariant violation prevents handoff and triggers an ERROR state.
6. The verification scope (FULL or DEGRADED) is correctly recorded in the ValidationResult.
7. All input references carry valid version identifiers and engine-of-origin identifiers.

**Required Evidence**

| Evidence Item | Source | Retention |
|:---|:---|:---|
| ValidationResult (complete) | Validation Engine | Handoff snapshot |
| InputBundle artifact references (all five) | Upstream engines | Reference only |
| Validation event log (validation.started through validation.completed) | Validation Engine | Handoff snapshot |
| Constraint conflict records (if any) | Validation Engine | Handoff snapshot |
| Previous validation reference (if re-verification) | Validation Engine | Reference only |

**Validated Outputs**

- ValidationResult (immutable, versioned, with complete assertion results, verification gaps, constraint conflicts, conformance level, pipeline verdict, and full input traceability).
- Validation event log (complete trace of the verification pipeline execution from validation.started through validation.completed or validation.failed).
- Pipeline verdict recommendation (PROCEED, HOLD, or REJECT) for downstream pipeline routing decisions.

**Snapshot Expectations**

The ValidationResult is an immutable snapshot of the verification decision at the time of production. It does not change after emission. If re-verification is required (e.g., after upstream corrections produce a new ExecutionResult), a new ValidationResult with a new version is produced. The Review Engine and Memory Engine receive a snapshot that is guaranteed not to change. If any downstream consumer needs to reflect a subsequent re-verification, it references the new ValidationResult — it does not modify the original.

**Receiving Consumers**

1. **Review Engine (A.5.7)** — Primary consumer. Receives the ValidationResult as the sole primary input for readiness assessment. The Review Engine evaluates the ValidationResult's conformance level, pipeline verdict, verification gaps, and constraint conflicts to determine whether the validated output is ready for certification. The Review Engine trusts the ValidationResult as the authoritative verification record and does not independently re-execute verification assertions.
2. **Memory Engine (A.5.9)** — Primary consumer. Receives the ValidationResult for archival, retrieval, and verification history management. The Memory Engine stores the ValidationResult as an immutable record and indexes it for retrieval by validation ID, execution reference, and artifact lineage.

**Failure Handling**

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Verification produces NON_CONFORMANCE / REJECT | ValidationResult still produced and delivered | Review Engine records the outcome; upstream engines may re-work and re-submit |
| Verification produces PARTIAL_CONFORMANCE / HOLD | ValidationResult produced with gaps | Review Engine evaluates whether partial conformance is acceptable |
| Verification produces internal error | ERROR state; error ValidationResult produced if possible | Pipeline observability alerted; verification must be re-initiated |
| Degraded mode (missing constraint sources) | ValidationResult produced with DEGRADED scope and HOLD (max) verdict | Pipeline observability warned; upstream engine availability investigated |
| Review Engine unreachable | ValidationResult retained; handoff queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Memory Engine unreachable | ValidationResult retained; handoff queued per A.4.5 | After retry exhaustion per A.4.5, consumer marked unreachable |
| Invariant violation | ERROR state; CRITICAL finding recorded | ValidationResult produced with NON_CONFORMANCE; invariant violation documented |

**Audit Record Expectations**

Every handoff produces an audit record containing: validation identifier and version, conformance level, pipeline verdict, total assertion count and results summary, verification scope (FULL or DEGRADED), constraint conflict count, all input artifact references, handoff timestamp, receiving consumer identifier, and handoff status (delivered, queued, or failed).

**Certification Gates**

1. **Pre-handoff validation** — ValidationResult passes all output validation rules defined in the Validation section.
2. **Evidence completeness** — All required evidence items present in the handoff package as defined in the Required Evidence table.
3. **Consumer readiness** — Review Engine and Memory Engine registered and reachable (or handoff queued per A.4.5).
4. **Invariant preservation** — All eight invariants hold at handoff time. Any invariant violation detected at handoff prevents the handoff and triggers an ERROR state.
5. **Traceability completeness** — All input references in the ValidationResult carry valid version identifiers and engine-of-origin identifiers. No broken provenance chains exist.
6. **Scope consistency** — The verification scope recorded in the ValidationResult is consistent with the inputs that were actually available during verification.

---

## Lifecycle

### Engine Lifecycle

The Validation Engine follows the A.4.4 Engine Lifecycle model with the following engine-specific lifecycle behaviour:

**Initialization**

- The Validation Engine initializes its assertion registry from the engine's configuration. Assertion definitions are loaded based on the supported assertion categories and the constraint source schemas defined by upstream engine RFCs.
- The engine registers with the Engine Registry (A.4.3) and declares its consumed artifact types (ContextSnapshot, KnowledgeArtifact, PlanArtifact, DecisionArtifact, ExecutionResult) and produced artifact type (ValidationResult).
- The engine enters the `READY` state once initialization is complete and it is prepared to accept verification requests.

**Steady-State Operation**

- The engine processes one verification request at a time. Concurrent verification requests are rejected. This single-concurrency design ensures deterministic behaviour and prevents resource contention during assertion evaluation.
- Each verification request follows the internal pipeline: intake, assertion registration, category evaluation (six stages), aggregation, emission.
- The engine emits structured events at each pipeline stage for observability. Every stage transition produces an event; no stage is silent.

**Degradation**

- If one or more constraint sources are unavailable, the engine operates in degraded verification mode, verifying only against available sources. The degraded scope is explicitly recorded in the ValidationResult metadata.
- If an ExecutionResult is malformed or cannot be parsed, the engine rejects the verification request with a specific error code.
- If the assertion registry fails to load, the engine enters a `WAITING` state until the registry is available.

**Shutdown**

- The engine completes any in-progress verification before accepting shutdown. If verification is in an intermediate stage, the engine rejects the shutdown request until the verification reaches a clean state (COMPLETED or ERROR).
- No verification state is persisted between invocations. All internal state is discarded after the ValidationResult is emitted.
- The engine deregisters from the Engine Registry and transitions to `TERMINATED`.

**Restart**

- The engine reinitializes the assertion registry and re-registers with the Engine Registry.
- No recovery of interrupted verifications is attempted; any interrupted verification must be re-initiated from the beginning with a new InputBundle.

---

## Validation

### Engine Invariants

**INV-VAL-1: Deterministic Verification Guarantee**

Given the same InputBundle (same version identifiers for all five upstream artifacts), the Validation Engine MUST produce byte-identical ValidationResults. No external factors — time, system state, previous verifications, or pipeline context — may influence the result. This is the foundational invariant of the Validation Engine and underpins all other invariants.

**INV-VAL-2: No Mutation of Upstream Artifacts**

The Validation Engine MUST NOT modify, extend, re-version, or otherwise mutate any artifact received from upstream engines. All upstream artifacts are treated as read-only inputs. This invariant is shared across all Engine Platform engines and enforces the platform-wide consumption boundary.

**INV-VAL-3: Assertion Completeness**

Every assertion registered in the AssertionRegistry for a given verification run MUST be evaluated exactly once. There MUST be no skipped, duplicated, or conditionally omitted assertions. The complete set of evaluated assertions is fully enumerated in the ValidationResult, ensuring that verification scope is always auditable.

**INV-VAL-4: Category Isolation**

The outcome of assertion evaluation in one category MUST NOT influence whether assertions in other categories are evaluated. All six categories MUST be evaluated regardless of individual category outcomes. This invariant ensures that a CRITICAL failure in one category (e.g., authorization) does not suppress the detection of issues in other categories (e.g., completeness), providing a comprehensive verification view.

**INV-VAL-5: Single-Writer ValidationResult**

The Validation Engine is the sole producer of ValidationResult artifacts. No other engine, component, or external system may create or modify a ValidationResult. This establishes clear ownership and responsibility boundaries and prevents the emergence of alternative verification paths.

**INV-VAL-6: Immutable Versioned Outputs**

Every ValidationResult is immutable after creation. If re-verification produces a new result, it MUST be a new version with a new version identifier and an explicit `previousVersion` reference. In-place mutation of any ValidationResult field is prohibited. This ensures a complete, tamper-proof audit trail for every verification.

**INV-VAL-7: Full Traceability**

Every VerificationGap MUST reference the specific assertion that detected it, the specific constraint source that defined the requirement, and the specific execution step or output that violated the requirement. Every AssertionResult MUST reference the constraint source engine and artifact version. No gap or result may be reported without complete traceability to its source.

**INV-VAL-8: Pipeline Verdict Determinism**

The PipelineVerdict (PROCEED / HOLD / REJECT) MUST be a pure deterministic function of the assertion results and constraint conflicts. The verdict logic MUST be fully defined and auditable — no hidden rules, no external influences, no discretionary overrides. The verdict is computed by the defined algorithm; no alternative computation path exists.

### Validation Rules

**Input Validation**

Input validation occurs during the intake phase and is the first processing step after artifacts are received. Hard validation rules prevent the verification from proceeding; soft validation rules allow verification to continue with a recorded finding.

| Rule | Type | Failure Action |
|:---|:---|:---|
| All five primary inputs must be present for FULL scope | Hard (degradable) | Enter degraded mode with available sources |
| ExecutionResult must be present and non-null | Hard | Reject verification request with error |
| All inputs must carry valid version identifiers | Hard | Reject verification request with error |
| All inputs must be in canonical artifact format | Hard | Reject the malformed input; emit rejection event |
| ExecutionResult must include step-level granularity | Hard | Reject verification request with error |
| InputBundle artifact versions must be unique and non-null | Soft | Continue with warning; record verification gap |

**Output Validation**

Output validation occurs during the aggregation and emission phase and is the final processing step before the ValidationResult is emitted. Any output validation failure prevents the artifact from being emitted and triggers an internal error.

| Rule | Type | Failure Action |
|:---|:---|:---|
| ValidationResult must contain all mandatory fields | Hard | Do not emit; internal error |
| Pipeline verdict must be consistent with conformance level | Hard | Do not emit; internal error |
| All input references must be valid and versioned | Hard | Do not emit; internal error |
| Version must follow `major.minor.0-draft` format | Hard | Do not emit; internal error |
| Every FAIL/WARNING assertion must have a corresponding verification gap | Hard | Do not emit; internal error |
| Assertion results count must equal registered assertion count | Hard | Do not emit; internal error |

**State Transition Validation**

| Transition | Validation |
|:---|:---|
| READY -> EVALUATING | InputBundle is valid; all inputs pass input validation |
| EVALUATING -> AGGREGATING | All six categories evaluated with results |
| AGGREGATING -> EMITTING | Conformance level and verdict computed |
| EMITTING -> COMPLETED | ValidationResult passes output validation |
| Any -> ERROR | Unrecoverable error condition detected |
| ERROR -> READY | Error recovery complete; assertion registry reloaded |

### Certification Requirements

Before the Validation Engine may be submitted for certification review, the following requirements must be satisfied:

1. All upstream Engine RFCs (A.5.0 through A.5.5) must be certified or in a stable draft state. The Validation Engine depends on all five upstream engines and cannot be certified before the engines whose artifacts it verifies.
2. The Validation Engine RFC must pass all validation checks defined in the Completion Criteria section of this document. This includes STD-010 metadata validation, structural validation, scope validation, and content quality validation.
3. All eight engine invariants must be demonstrably preserved across all operations. Each invariant must be expressible as a testable assertion that can be verified without accessing implementation code.
4. The six-stage verification pipeline model must be fully specified with deterministic evaluation for all stages. The pipeline must demonstrate category isolation and complete assertion evaluation.
5. The Validation Engine's capability mapping to A.4.7 capability domains must be documented. The expected capability domain is "Quality Assurance."
6. The handoff contract to the Review Engine (A.5.7) and Memory Engine (A.5.9) must be fully specified and validated. The handoff contract must define required evidence, validated outputs, failure handling, and verification gates.
7. No implementation-scope content may be present in the RFC. This includes code, APIs, schemas, persistence mechanisms, and other implementation details as defined in the Out of Scope section.
8. STD-010 metadata compliance must be verified. All mandatory fields must be present and correctly formatted.

---

## Ownership

### Engine Ownership

| Element | Requirement |
|:---|:---|
| **Accountable Owner** | Framework Architecture Team |
| **Maintained Boundaries** | The owner controls the Validation Engine's architectural specification, assertion evaluation model, conformance classification logic, pipeline verdict computation, and handoff contract. The owner does not control upstream engine artifacts, execution behaviour, authorization decisions, or memory persistence. |
| **Decision Rights** | The owner may autonomously define assertion evaluation rules, conformance classification logic, pipeline verdict computation, and verification event schemas. The owner must escalate to Framework Governance for any change that affects the verification-to-review handoff contract, the determinism invariant (INV-VAL-1), the category isolation invariant (INV-VAL-4), or the engine's capability domain mapping. |
| **Validation Obligations** | The owner must validate that all assertion evaluation rules are deterministic, all eight invariants are preserved, the six-stage pipeline maintains category isolation, and the handoff contracts produce artifacts consumable by the Review Engine and Memory Engine before requesting review. |
| **Review Obligations** | The owner must present the complete Validation Engine RFC to the Enterprise Documentation Standards Board for structural and metadata review, and to Framework Governance for architectural review. |
| **Certification Responsibilities** | The owner must produce evidence that all eight invariants hold, that the verification pipeline is deterministic, that category isolation is enforced, and that the handoff to the Review Engine and Memory Engine meets all verification gates. |
| **Ownership Handoff Limitations** | Ownership may transfer only through explicit Framework Governance record. No implicit or silent authority transfer is permitted. |

---

## Risks

### Risk-1: Five-Engine Fan-In Dependency Chain

**Severity**: High
**Likelihood**: Medium
**Impact**: The Validation Engine depends on all five upstream engines (Context, Knowledge, Planning, Decision, Execution) for full-scope verification. The unavailability of any single upstream engine forces degraded mode, and the unavailability of the Execution Engine prevents any verification from occurring. This creates the highest integration risk in the pipeline — any upstream engine failure, instability, or contract change can block or degrade the Validation Engine's core function.
**Mitigation**: The degraded mode design (DD-5) ensures continued operation with partial inputs and explicit scope marking. The verdict capping at HOLD prevents incomplete verification from producing a PROCEED verdict. Upstream engine contract stability is enforced through shared Engine Foundation RFCs (A.4.1–A.4.7) and the A.5.0 template's structural governance. The pipeline's sequential dependency chain is intentional — the Validation Engine's architectural value requires access to all constraint sources, and partial verification is explicitly signalled rather than hidden.

### Risk-2: Assertion Registry Completeness

**Severity**: High
**Likelihood**: Medium
**Impact**: The assertion registry defines what the Validation Engine verifies. If the registry does not include assertions for critical verification scenarios, the Validation Engine may produce a FULL_CONFORMANCE ValidationResult for an execution output that actually violates important constraints. This false-positive risk is the most dangerous failure mode for a quality gate — downstream engines would trust an incomplete verification.
**Mitigation**: Invariant INV-VAL-3 (Assertion Completeness) ensures that every registered assertion is evaluated, and the ValidationResult includes the complete assertion count. The assertion registry is populated dynamically based on InputBundle content, ensuring that the registry adapts to the specific verification context. The Review Engine (A.5.7) evaluates the ValidationResult's completeness as part of its readiness assessment. Certification Requirement 4 mandates that the six-stage pipeline demonstrates complete assertion evaluation. The assertion registry's completeness is a certification gate.

### Risk-3: Degraded Mode False Confidence

**Severity**: Medium
**Likelihood**: Medium
**Impact**: The degraded mode produces a ValidationResult even when one or more constraint sources are unavailable. While the scope is explicitly marked as DEGRADED and the verdict is capped at HOLD, consumers may not always check the scope field and may interpret the ValidationResult as a complete verification. This could lead to downstream engines processing execution outputs that were not fully verified against all constraint sources.
**Mitigation**: The DEGRADED scope is a mandatory field in the ValidationResult — it cannot be omitted or defaulted to FULL. The verdict cap at HOLD ensures that a PROCEED verdict is never produced in degraded mode, forcing downstream engines to treat the result as requiring further attention. Pipeline observability receives a dedicated `validation.degraded.mode` event for every degraded verification. The Validation Engine's event flow always includes scope information in the `validation.started` event payload, enabling observability systems to flag degraded verifications proactively.

### Risk-4: Constraint Conflict Proliferation

**Severity**: Medium
**Likelihood**: Medium
**Impact**: With five upstream engines providing constraint sources, the potential for constraint conflicts is significantly higher than in engines with fewer upstream dependencies. Conflicting constraints from Planning and Context, or between Decision and Knowledge, could produce large numbers of ConstraintConflict records in the ValidationResult, obscuring genuine verification gaps and overwhelming the Review Engine's analysis capacity.
**Mitigation**: Constraint conflicts are reported as WARNING-level findings, separate from CRITICAL assertion failures, ensuring they do not inflate the conformance level severity. The Conflict Detection Rule (in Resolution Rules) reports conflicts without failing the affected assertion, preventing conflicts from cascading into NON_CONFORMANCE verdicts. The source priority order provides deterministic metadata recording when conflicts occur. The Review Engine's readiness assessment is designed to evaluate both verification gaps and constraint conflicts independently.

### Risk-5: Single-Concurrency Bottleneck

**Severity**: Medium
**Likelihood**: High
**Impact**: The single-concurrency design means the Validation Engine can only process one verification at a time. In pipeline scenarios where multiple execution outputs are produced in rapid succession (e.g., parallel step executions), the Validation Engine becomes a serialization point that limits pipeline throughput. Concurrent verification requests are rejected, requiring the pipeline orchestrator to queue and serialize requests.
**Mitigation**: The single-concurrency design is a deliberate trade-off that preserves the deterministic verification guarantee (INV-VAL-1). The pipeline's architectural design assumes sequential processing through the validation phase. Verification latency is bounded and predictable (determined by assertion count and InputBundle size), enabling the pipeline orchestrator to schedule verifications efficiently. If throughput becomes a production concern, the extension model allows for future architectural evaluation of controlled concurrency with invariant-preserving mechanisms, subject to Framework Governance approval.

### Risk-6: Authorization Stage Security Sensitivity

**Severity**: High
**Likelihood**: Low
**Impact**: The Authorization Verification stage (Stage 3) is the most security-critical stage in the pipeline. An error in authorization assertion predicates — a false PASS on an unauthorized action, or a false FAIL on an authorized action — could have significant security implications. A false PASS would allow unauthorized actions to proceed to review with a positive verification signal, while a false FAIL would block legitimate authorized actions.
**Mitigation**: The deny-by-default rule requires that any error during authorization assertion evaluation defaults to FAIL. The conservative verification resolution rule (in Resolution Rules) resolves ambiguous authorization outcomes in favour of the stricter outcome. Authorization assertions reference the DecisionArtifact (A.5.4) as their exclusive constraint source, providing a single, authoritative source for authorization boundaries. The Authorization Verification stage is evaluated after Structural and Semantic verification (ensuring data integrity before authorization checks), isolating authorization evaluation from data-quality concerns. Certification Requirement 3 mandates that the authorization verification stage's determinism and completeness are demonstrable before certification.

---

## Open Questions

1. **OQ-1: Should the Validation Engine define a maximum assertion count per category to bound verification latency?** The current design does not limit the number of assertions per category. In a deployment context with very large or complex execution outputs, the assertion count could become significant, potentially affecting pipeline throughput. A maximum assertion count would provide a deterministic latency bound but could leave some verification scenarios incompletely covered. The trade-off between coverage completeness and latency boundedness needs explicit governance guidance.

2. **OQ-2: How should re-verification interact with the pipeline's revision mechanism?** The current design treats re-verification as a new verification request with a new InputBundle, producing a new ValidationResult with a `previousVersion` reference. However, the pipeline's revision mechanism (where upstream engines re-produce corrected artifacts) may trigger multiple re-verifications in sequence. The Validation Engine does not define how many re-verification cycles are permitted before the pipeline must escalate or abort, nor does it define how re-verification results relate to each other for the Review Engine's assessment.

3. **OQ-3: Should the Validation Engine support assertion category ordering customization?** The six-stage pipeline uses a fixed category order (structural, semantic, authorization, completeness, consistency, temporal) that is architecturally justified. However, in specific deployment contexts, a different ordering might be preferred (e.g., authorization first for security-sensitive pipelines). The current design fixes the order to preserve deterministic event sequencing. Customizable ordering would require Framework Governance approval per deployment and would complicate the event flow contract.

4. **OQ-4: How should the Validation Engine handle ExecutionResult version changes during a verification?** The current design consumes the InputBundle as a point-in-time snapshot. If the ExecutionResult is updated (re-executed) while a verification is in progress, the Validation Engine is working on a stale snapshot. The design does not define whether the in-progress verification should be aborted, completed with the stale snapshot, or whether a new verification should be automatically triggered. The single-concurrency design prevents concurrent verifications of the same execution, but does not address mid-verification updates.

---

## Completion Criteria

A.5.6 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with substantive content, structured per A.5.0's Engine RFC Section Mapping.
2. All 17 Specializable subsections contain Validation Engine-specific content (not template language).
3. All eight invariants are stated and expressible as testable assertions.
4. All six responsibility groups map to at least one operation.
5. All lifecycle transitions produce corresponding events.
6. The Engine Ownership Contract addresses all seven mandatory elements.
7. The Engine Handoff Contract addresses all eight mandatory elements.
8. STD-010 metadata is fully compliant (all mandatory fields, correct table shape, correct heading).
9. No implementation scope (source code, APIs, persistence, LLM details, agent/swarm runtime) is present in any section.
10. The upstream Engine alignment is verified — the Validation Engine consumes artifacts from A.5.1 through A.5.5 as defined.
11. TPL-001 specialization compliance is verified (no mandatory sections removed, Engine-specific content as subsections within TPL-001 sections).
12. Framework Governance has reviewed and approved the RFC structure.
13. Version History records all changes from the prior version with rationale.

---

## Version History

| Version | Status | Traceability | Notes |
|:---|:---|:---|:---|
| `0.1.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-6` | Initial creation as independent Engine Specialization RFC with 32-section structure. Pre-TPL-001 alignment. |
| `0.2.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-6` | Expanded with Universal Section Contract compliance, strengthened validation, and normalized governance alignment per A.5.0 pre-refactoring template. |
| `0.3.0-draft` | Draft | `AI-DOS.V3.A.005.6` | Refactored to A.5.0/TPL-001 compliance: remapped from 32 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections per A.5.0 Appendix A mapping. Added 6 Design Decisions, 6 Risks, 4 Open Questions. Removed Completion Report (content migrated to Design Decisions, Risks, Validation). Removed duplicate Completion Checklist and Validation Checklist (content migrated to Completion Criteria, Validation, and Design Decisions). Updated Traceability ID from AI-DOS.V2.RUNTIME.A-5-6 to AI-DOS.V3.A.005.6. Updated Version from 0.2.0-draft to 0.3.0-draft. All content preserved; no authority changes. |

---

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, A.5.0, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

---
# A.5.4 — Decision Engine RFC

> Forge AI v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## 1. Status

This RFC is a draft, non-canonical Engine Architecture RFC for the Decision Engine, the fourth individual Engine specialization in Phase 2 of the Forge AI v4 Engine Platform.

Canonical Status: Non-canonical until reviewed and approved.

This document defines the architecture of the Decision Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Decision Engine's purpose, responsibilities, inputs, outputs, internal model, operations, events, ownership, and handoff contract. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-005.4` |
| Title | A.5.4 — Decision Engine RFC |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed and approved |
| Classification | Engine Architecture RFC |
| Document Type | RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-08 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V4.PHASE-2.ENGINE-04` |
| Scope | Architecture of the Decision Engine — the Engine responsible for plan evaluation, trade-off analysis, alternative ranking, decision artifact production, risk assessment, and decision lifecycle governance within the Forge AI v4 Engine Platform. |
| Out of Scope | Source code, implementation, REST APIs, persistence mechanisms, database schema, Neo4j implementation, vector database configuration, caching infrastructure, LLM call orchestration, prompt engineering, model selection, agent runtime design, swarm runtime design, platform adapter specifications, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md` |
| Dependencies | Runtime Architecture (A.3); Engine Platform (A.4); Engine Kernel (A.4.1); Engine Contract (A.4.2); Engine Registry (A.4.3); Engine Lifecycle (A.4.4); Engine Communication (A.4.5); Engine State (A.4.6); Engine Capability (A.4.7); Metadata Standard (STD-010); Terminology Standard (STD-003); Engine Specialization RFC Template (A.5.0); Context Engine (A.5.1); Knowledge Engine (A.5.2); Planning Engine (A.5.3) |
| Consumes | Document metadata rules; canonical terminology; framework and artifact meta-models; Runtime Architecture; Engine Platform architecture; Engine Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability RFCs; A.5.0 Template section contract; A.5.1 Context Engine resolved context snapshots and lifecycle events; A.5.2 Knowledge Engine retrieval results, constraint entities, and risk knowledge; A.5.3 Planning Engine validated plans, plan alternatives, feasibility reports, and validation reports |
| Produces | Decision Engine architecture specification; decision lifecycle model; plan evaluation contract; trade-off analysis rules; decision scoring model; risk assessment model; decision artifact structure; decision handoff contract; decision ownership definition |
| Related Specifications | A.5.1 — Context Engine RFC; A.5.2 — Knowledge Engine RFC; A.5.3 — Planning Engine RFC; A.5.5 — Execution Engine RFC (future); A.5.6 — Validation Engine RFC (future); A.5.9 — Memory Engine RFC (future) |
| Supersedes | None |
| Superseded By | None |
| Blocks | A.5.5 — Execution Engine RFC (Decision Engine must be certified before Execution Engine enters review); A.5.6 — Validation Engine RFC (Decision Engine must be certified before Validation Engine enters review) |
| Blocked By | A.5.0 — Engine Specialization RFC Template (template must be approved before Knowledge Engine enters review); A.5.1 — Context Engine RFC (Context Engine must be certified); A.5.2 — Knowledge Engine RFC (Knowledge Engine must be certified); A.5.3 — Planning Engine RFC (Planning Engine must be certified) |
| Promotion Requirements | Framework Governance review, STD-010 metadata validation, STD-003 terminology validation, Engine Platform alignment review, no implementation-scope confirmation, A.4.7 capability domain mapping, Context Engine, Knowledge Engine, and Planning Engine alignment review, approval by Human Governance / Framework Governance, and explicit canonical promotion |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 3. Purpose

The Decision Engine exists to evaluate validated plans produced by the Planning Engine, compare plan alternatives against defined criteria, and produce decision artifacts that authorize and guide execution. While the Planning Engine (A.5.3) produces feasible, validated plans, the system often faces multiple viable plans or must choose among competing strategies. The Decision Engine fills this gap by providing a structured, deterministic framework for evaluating trade-offs, scoring alternatives, assessing risks, and selecting the optimal plan for execution.

A decision artifact, in the context of this Engine, is a versioned, immutable record that contains the selected plan, the evaluation criteria applied, the scoring results for all considered alternatives, the rationale for selection, identified risks with mitigation strategies, and any conditions or constraints placed on execution. Decision artifacts are the primary output of the Decision Engine and the authoritative signal that the Execution Engine (A.5.5, future) uses to begin execution. Decision artifacts are also consumed by the Validation Engine (A.5.6, future) for decision correctness checks and by the Memory Engine (A.5.9, future) for decision pattern learning.

Without a dedicated Decision Engine, the Execution Engine would need to independently select among plans or receive plans without evaluation context. This would lead to unprincipled plan selection, undocumented trade-offs, and no audit trail for why a particular plan was chosen over alternatives. The Decision Engine eliminates these risks by centralizing plan evaluation, trade-off analysis, and decision lifecycle management in a single, deterministic component.

The Decision Engine's purpose aligns with Engine Capability domain "Decision Making" as defined by A.4.7. The Decision Engine uniquely owns the capability of evaluating plan alternatives against configurable criteria, producing scored rankings, generating risk assessments, and emitting decision artifacts that bind the system to a chosen course of action.

The Decision Engine does not execute plans — that is the Execution Engine's responsibility. The Decision Engine does not generate plans — that is the Planning Engine's responsibility. The Decision Engine defines the architectural contract for decision operations: what constitutes a valid evaluation, how trade-offs are scored, how risks are assessed, how decisions are authorized, and how decision artifacts are handed off to the Execution Engine.

---

## 4. Mission

The mission of the Decision Engine is to produce transparent, criteria-driven, and risk-aware decision artifacts that select the optimal plan from available alternatives and authorize execution.

This mission translates into five mission-level objectives:

1. **Evaluability** — Every plan that enters the Decision Engine is evaluated against a defined set of configurable criteria. Criteria include cost, risk, resource consumption, alignment with goals, estimated duration, constraint compliance, and knowledge consistency. Evaluation is deterministic: the same plan, criteria, and context produce the same evaluation scores.

2. **Transparency** — Every decision artifact documents the full reasoning chain: which plans were considered, what criteria were applied, how each plan scored, why the selected plan was chosen, and what risks were identified. This supports auditability, explainability, and governance review.

3. **Risk Awareness** — The Decision Engine assesses risks associated with each plan alternative. Risk assessment is based on domain knowledge from the Knowledge Engine, contextual factors from the Context Engine, and plan-inherent characteristics (complexity, dependency depth, resource requirements). Risks are classified, scored, and paired with mitigation strategies.

4. **Composability** — The Decision Engine supports multi-criteria decision analysis where criteria can be weighted, prioritized, or conditionally applied. Decision policies can be configured per domain, per goal type, or per governance requirement, allowing the same Engine to serve diverse decision contexts.

5. **Immutability** — Once a decision artifact is produced and authorized, it cannot be modified. If new information necessitates a different decision, the Decision Engine produces a new decision artifact that supersedes the previous one. The full decision history is preserved for auditability.

---

## 5. Engine Responsibilities

The Decision Engine is accountable for the following architectural responsibilities, grouped by functional domain:

### 5.1 Decision Request Intake

- Receive decision requests that contain one or more validated plans (or a request to retrieve the current best plan for a goal), optional decision criteria overrides, optional priority constraints, and the requesting Engine identifier.
- Validate that all submitted plans have passed critical validation (as attested by their attached validation reports).
- Determine whether the decision request is complete (all required plans and context are available) or whether additional information is needed before evaluation can proceed.

### 5.2 Plan Evaluation

- Evaluate each plan alternative against the full set of decision criteria.
- Decision criteria are configurable and include but are not limited to: estimated resource cost, execution risk score, goal alignment score, constraint compliance score, dependency complexity score, knowledge freshness score, and estimated duration.
- Each criterion produces a normalized score. Scores are combined using the configured scoring model (weighted sum, lexicographic ordering, pareto dominance, or threshold-based elimination).
- Produce a per-plan evaluation summary that includes per-criterion scores, the aggregate score, and any criterion-level flags or warnings.

### 5.3 Trade-off Analysis

- When multiple plans score similarly on aggregate metrics, perform trade-off analysis to identify differentiated strengths and weaknesses.
- Trade-off analysis identifies which criteria differentiate the top candidates, which criteria are aligned, and which criteria present conflicts (one plan strong on criterion A but weak on criterion B).
- Produce a trade-off report that visualizes or tabulates the comparative strengths of the top-ranked alternatives.
- Flag trade-off decisions that require governance escalation (e.g., when the top two plans differ by less than a configured margin).

### 5.4 Risk Assessment

- For each plan alternative, assess risks based on plan-inherent characteristics, contextual risk factors, and domain risk knowledge from the Knowledge Engine.
- Classify risks by severity (low, medium, high, critical) and by category (dependency risk, resource risk, knowledge risk, context stability risk, execution complexity risk).
- For each identified risk, produce a mitigation recommendation based on domain knowledge or governance policy.
- Aggregate plan-level risk into a composite risk score that factors into the overall evaluation.

### 5.5 Decision Artifact Production

- Assemble the evaluation results, trade-off analysis, risk assessment, and selection rationale into a decision artifact.
- The decision artifact contains: the selected plan version, the selection rationale, per-plan evaluation summaries, the trade-off report, the risk assessment, any conditions or constraints placed on execution, and authorization metadata.
- Assign a decision identifier and version to the artifact. Decision artifacts are immutable once produced.
- Attach the decision artifact to the selected plan for downstream consumption.

### 5.6 Decision Revision

- Receive revision triggers when context changes materially, when new plan alternatives become available, when risk factors change, or when governance requests a re-evaluation.
- Analyze the revision trigger to determine scope: full re-decision (re-evaluate all alternatives), incremental update (update risk assessment or scoring with new information), or decision confirmation (reaffirm the existing decision with updated rationale).
- Produce a revised decision artifact as a new version that references the decision it revises.
- Preserve the original decision artifact for auditability and comparison.

### 5.7 Decision Lifecycle Management

- Manage decision artifacts through their lifecycle: proposed, evaluated, authorized, active, superseded, and retired.
- Track decision state transitions based on execution feedback from the Execution Engine and governance directives.
- Support decision cancellation when a selected plan becomes infeasible or when governance overrides the decision.
- Archive superseded and retired decisions for historical reference and pattern analysis.

---

## 6. Non Responsibilities

The Decision Engine is explicitly not responsible for the following concerns. Each non-responsibility is paired with the component that owns it:

| Non-Responsibility | Owned By |
|:---|:---|
| Generating plans or decomposing goals into steps | Planning Engine (A.5.3) |
| Managing real-time contextual state | Context Engine (A.5.1) |
| Managing persistent knowledge and retrieval | Knowledge Engine (A.5.2) |
| Executing plan steps and producing side effects | Execution Engine (A.5.5, future) |
| Validating execution outputs against requirements | Validation Engine (A.5.6, future) |
| Long-term memory and learning from past decisions | Memory Engine (A.5.9, future) |
| Persisting decision artifacts to durable storage | Platform persistence layer (out of scope) |
| Scheduling step execution timing | Execution Engine (A.5.5, future) |
| Resource allocation and provisioning | Platform resource management (out of scope) |
| Governing Engine Platform behaviour | Framework Governance |
| Managing Engine lifecycle transitions | Engine Lifecycle (A.4.4) |
| Managing inter-Engine communication transport | Engine Communication (A.4.5) |
| Maintaining the Engine capability registry | Engine Registry (A.4.3) |
| Invoking LLMs for decision reasoning or evaluation | AI Consumption layer (out of scope) |
| Defining organizational business rules or policies | Human Governance / Framework Governance |

The Decision Engine's boundary is defined by the transition from validated plan to authorized decision. It defines the architectural contract for decision operations without implementing execution, resource allocation, or persistence.

---

## 7. Engine Position

### 7.1 Topological Position

The Decision Engine sits between the Planning Engine (plan producer) and the Execution Engine (plan consumer). It is the evaluation and authorization layer that transforms validated plans into binding decisions. It also consumes contextual state and domain knowledge to ground its evaluations.

```
  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   Context     │     │  Knowledge   │     │  Planning    │
  │   Engine      │     │  Engine      │     │  Engine      │
  │  (A.5.1)      │     │  (A.5.2)     │     │  (A.5.3)     │
  │  Snapshots    │     │  Risk/Rule   │     │  Validated   │
  │               │     │  Knowledge   │     │  Plans       │
  └──────┬───────┘     └──────┬───────┘     └──────┬───────┘
         │                     │                     │
         │  (context for       │  (risk factors,     │  (plan
         │   risk assessment)  │   decision rules)   │   alternatives)
         │                     │                     │
         └──────────┬──────────┴──────────┬──────────┘
                    │                     │
                    ▼                     ▼
       ┌─────────────────────────────────────────┐
       │           Decision Engine                │
       │            (A.5.4)                        │
       │  Evaluate → Trade-off → Risk →           │
       │  Score → Authorize → Decide               │
       └───┬──────────────┬──────────────┬───┘
           │              │              │
    ┌──────┘              │              └──────┐
    ▼                     ▼                     ▼
┌──────────┐      ┌──────────┐          ┌──────────┐
│Execution │      │Validation│          │  Memory  │
│ Engine   │      │ Engine   │          │  Engine  │
│ (A.5.5)  │      │ (A.5.6)  │          │ (A.5.9)  │
└──────────┘      └──────────┘          └──────────┘
```

### 7.2 Data Flow Characterization

The Decision Engine has a well-defined input-output pattern:

- **From Planning Engine** — Validated plans (primary input), plan alternatives, feasibility reports, and validation reports. The Decision Engine pulls plans when a decision request is received, or receives them as push from the Planning Engine when a new plan is validated for an active decision context.
- **From Context Engine** — Resolved context snapshots provide current environmental state, resource availability, constraint state, and session parameters. The Decision Engine pulls context at the start of each decision cycle to ground risk assessments and feasibility evaluations.
- **From Knowledge Engine** — Risk knowledge (domain risk factors, historical risk patterns), decision rules (organizational policies, regulatory constraints), and constraint entities. The Decision Engine pulls knowledge based on the goal domain and decision context.
- **To Execution Engine** — Decision artifacts containing the selected plan, authorization, and execution constraints. The Execution Engine consumes decision artifacts as the authoritative signal to begin execution.
- **To Validation Engine** — Decision artifacts for decision correctness validation (criteria consistency, scoring integrity, risk assessment completeness).
- **To Memory Engine** — Completed and superseded decision artifacts for pattern recognition, decision quality tracking, and learning.

The Decision Engine's topology is an evaluator — it receives plans and contextual information, applies deterministic evaluation criteria, and produces decision artifacts. It transforms information into authorization.

### 7.3 Unavailability Impact

If the Decision Engine is unavailable, no new decisions can be produced and no existing decisions can be revised. The Execution Engine cannot receive authorization to execute new plans. Plan alternatives accumulate without evaluation. The Engine Platform's graceful degradation model (A.4.4) should define fallback behaviour — the Decision Engine defines what "no-decision" means but does not define how Engines compensate. A possible fallback is that the Execution Engine operates on the most recent active decision artifact, or that governance authorizes direct plan-to-execution handoff under emergency conditions defined externally.

---

## 8. Consumed Inputs

The Decision Engine requires the following typed inputs:

### 8.1 Decision Requests

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Decision Request | Structured request (goal identifier, plan IDs or "best plan" flag, criteria overrides, priority, requesting Engine) | Peer Engines, Planning Engine, governance | Goal identifier non-empty; at least one plan ID valid or "best plan" flag set; criteria overrides structurally valid | Request rejected; rejection notice with specific errors |
| Revision Trigger | Structured event (trigger type, trigger source, affected decision version, trigger context) | Context Engine (context change), Planning Engine (new plan available), Knowledge Engine (risk rule change), governance | Trigger type valid; affected decision version exists; trigger context present | Trigger logged but not processed if decision version not found |
| Decision Query | Structured request (decision identifier or version, query type) | Peer Engines, audit systems | Decision identifier format valid | Query rejected with "not found" if decision does not exist |

### 8.2 Plan and Context Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Validated Plan | Versioned plan with validation report, steps, dependencies, constraints, and success criteria | Planning Engine (A.5.3) | Plan is in "validated" state; validation report attached; dependency graph acyclic | Plan excluded from evaluation; missing plan warning |
| Plan Alternatives Set | Multiple validated plans for the same goal | Planning Engine (A.5.3) | Each plan valid per above; all plans share the same goal identifier | Invalid plans excluded; decision proceeds with valid plans only |
| Context Snapshot | Versioned resolved context | Context Engine (A.5.1) | Snapshot version valid and accessible | Decision proceeds with last known context; staleness flagged |
| Feasibility Report | Per-plan feasibility analysis from Planning Engine | Planning Engine (A.5.3) | Report structure valid; matches plan version | Feasibility treated as unknown; risk score penalized |

### 8.3 Knowledge and Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Risk Knowledge | Domain risk factors, historical risk patterns, risk severity classifications | Knowledge Engine (A.5.2) | Risk entities validated and active | Default risk assessment applied; knowledge-gap warning |
| Decision Rules | Organizational policies, regulatory constraints, governance thresholds | Knowledge Engine (A.5.2) | Rule entities validated and active | Default decision policy applied; missing rules flagged |
| Decision Criteria Configuration | Criteria definitions, weights, scoring model, thresholds | Governance configuration | Criteria structure valid; weights sum to 1.0 (for weighted sum model); scoring model type valid | Default criteria and equal weights applied |
| Decision Policy | Conditions for governance escalation, auto-authorization, re-evaluation triggers | Governance configuration | Policy conditions well-defined | All decisions require governance authorization |
| Trade-off Margin | Minimum score difference between top two plans below which trade-off analysis is mandatory | Engine configuration | Positive numeric value | Default margin of 0.05 (5%) applied |
| Risk Threshold | Maximum composite risk score above which a plan requires explicit governance approval | Engine configuration | Positive numeric value within [0, 1] | Default threshold of 0.7 applied |

All inputs are versioned. Decision requests carry a request identifier and timestamp. Plan references carry the Planning Engine plan version. Context references carry the Context Engine snapshot version. Knowledge references carry the Knowledge Engine entity versions used.

---

## 9. Produced Outputs

The Decision Engine produces the following typed outputs:

### 9.1 Decision Artifacts

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Decision Artifact | Versioned decision containing selected plan, evaluation summaries for all alternatives, trade-off report, risk assessment, selection rationale, authorization metadata, and execution constraints | Execution Engine (primary), Validation Engine, audit systems | Monotonic incrementing decision version; immutable once authorized | All plans evaluated; scoring model applied consistently; risk assessment complete; authorization valid; selected plan references a validated plan version |

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Decision Delta | Differential update describing changes between decision versions | Execution Engine, audit systems | References parent decision version | Delta applies cleanly to parent version; no orphaned plan references |

### 9.2 Decision Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Evaluation Summary | Per-plan evaluation results with per-criterion scores, aggregate score, and flags | Audit systems, explainability, Validation Engine | Immutable per decision version | All criteria scored; scoring model applied correctly |
| Trade-off Report | Comparative analysis of top-ranked alternatives highlighting differentiated criteria | Audit systems, governance, Decision Engine consumers | Immutable per decision version | At least two alternatives compared; criteria differences documented |
| Risk Assessment Report | Per-plan risk identification, classification, scoring, and mitigation recommendations | Audit systems, Execution Engine, governance | Immutable per decision version | All identified risks classified; mitigation recommendations provided for high and critical risks |
| Selection Rationale | Natural-language rationale explaining why the selected plan was chosen | Audit systems, explainability, governance | Immutable per decision version | Rationale references specific criterion scores, trade-offs, and risk factors |

### 9.3 Decision Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Decision Proposed | Event emitted when a decision request enters evaluation | Audit systems, governance | Event-scoped; references decision request | Request valid and accepted |
| Decision Evaluated | Event emitted when all plans have been scored and ranked | Governance, audit systems | Event-scoped; references evaluated decision | All plans evaluated; scores assigned |
| Decision Authorized | Event emitted when a decision artifact is produced and authorized | Execution Engine, audit systems, Validation Engine | Event-scoped; references authorized decision version | Authorization valid; selected plan referenced |
| Decision Revised | Event emitted when a decision is revised based on a trigger | Execution Engine, audit systems | Event-scoped; references old and new decision versions | New decision version valid; revision trigger documented |
| Decision Superseded | Event emitted when a revised decision replaces the active decision | Execution Engine, audit systems | Event-scoped; references old and new decision versions | Superseding decision authorized |
| Decision Cancelled | Event emitted when a decision is revoked before or during execution | Execution Engine, audit systems, Context Engine | Event-scoped; references cancelled decision and reason | Cancellation reason documented |
| Governance Escalated | Event emitted when a decision requires governance review before authorization | Framework Governance, audit systems | Event-scoped; references decision and escalation reason | Escalation criteria documented |

All decision artifacts are immutable once authorized. Decision revisions produce new decision versions; corrections never modify existing decision artifacts. Output contracts are explicit enough for consuming Engines to validate received decisions against the schemas defined here.

---

## 10. Engine Lifecycle

### 10.1 Initialization

The Decision Engine initializes when the Engine Platform starts. During initialization:

- Registers with the Engine Registry (A.4.3) as a Decision Making capability provider.
- Loads configuration inputs (decision criteria, scoring model, trade-off margin, risk threshold, decision policy, authorization rules).
- Establishes communication channels with the Context Engine, Knowledge Engine, Planning Engine, and potential consuming Engines via the Engine Communication model (A.4.5).
- Subscribes to plan validation events from the Planning Engine, context change events from the Context Engine, and knowledge update events from the Knowledge Engine.
- Emits a `Decision Engine Initialized` event.

### 10.2 Startup

After initialization:

- Confirms connectivity with the Context Engine, Knowledge Engine, and Planning Engine.
- Verifies that context pull, knowledge retrieval, and plan retrieval operations succeed.
- Performs a readiness check by processing a test decision request with a known plan and criteria.
- Transitions to steady-state operation upon successful readiness confirmation.

### 10.3 Steady-State Operation

In steady state, the Decision Engine:

- Accepts and processes decision requests (plan evaluation, scoring, trade-off analysis, risk assessment, decision artifact production).
- Monitors for revision triggers (context changes, new plan availability, risk rule changes, governance directives).
- Processes decision queries from peer Engines and audit systems.
- Produces evaluation summaries, trade-off reports, risk assessments, and selection rationales for auditability.

The Decision Engine operates on a request-driven model — it evaluates plans when a decision request is received, not on a periodic cycle. Revision triggers are processed asynchronously. The Decision Engine does not proactively pull plans; it evaluates plans that are submitted with a decision request or that are identified as relevant to an active decision context.

### 10.4 Degradation

If the Knowledge Engine is temporarily unavailable, the Decision Engine continues to evaluate plans using default criteria and risk thresholds, flagging the knowledge gap in the decision artifact. If the Context Engine is temporarily unavailable, the Decision Engine proceeds with the last known context, flagging context staleness. If the Planning Engine is temporarily unavailable, the Decision Engine can still evaluate previously received plans but cannot retrieve new plan alternatives.

If the Decision Engine itself is degraded (e.g., elevated processing latency), it continues to accept requests but may apply simplified evaluation (fewer criteria, deferred trade-off analysis) while emitting a `Decision Engine Degraded` event.

### 10.5 Shutdown

During graceful shutdown:

- Stops accepting new decision requests.
- Completes in-progress decision evaluations or marks them for resubmission.
- Persists all active decision state (decision artifacts, evaluation summaries, pending revision triggers).
- Emits a `Decision Engine Shutdown` event with a summary of active decisions.
- Deregisters from the Engine Registry.

Non-graceful shutdown (crash, kill) results in state loss for in-progress evaluations. Recovery-critical state (decision artifacts, authorized decisions) must be persisted before shutdown completes.

### 10.6 Recovery

On restart after non-graceful shutdown:

- Re-registers with the Engine Registry.
- Re-establishes communication channels.
- Retrieves the current context from the Context Engine.
- Re-subscribes to events from the Planning Engine, Context Engine, and Knowledge Engine.
- Recovers active decision state from the persistence layer (authorized decision artifacts, pending revision triggers, evaluation records).
- Emits a `Decision Engine Recovered` event.
- Resumes steady-state operation.

Recovery-critical state: all authorized decision artifacts with their evaluation records, the most recent context and knowledge references, and configuration inputs. In-progress decision evaluations are transient and do not survive restart — they must be resubmitted.

---

## 11. Internal Engine Model

### 11.1 Conceptual Overview

The Decision Engine's internal model consists of six processing stages that transform plan alternatives into an authorized decision artifact:

```
Plan Intake → Criteria Evaluator → Trade-off Analyzer → Risk Assessor → Decision Scorer → Decision Authorizer
     ↑                                                                            │
     │                    ┌──────────────────────────────────────────────────────┘
     │                    │
     └────────────────────┘
                    (revision loop: authorized decisions may be
                     re-evaluated when revision triggers arrive)
```

### 11.2 Plan Intake

The Plan Intake stage receives and validates decision requests:

1. **Request Validation** — Validates the decision request structure: goal identifier present, at least one valid plan ID (or "best plan" flag), criteria overrides structurally valid, requesting Engine authenticated.

2. **Plan Collection** — Retrieves all validated plans referenced in the decision request from the Planning Engine. If the request specifies "best plan" for a goal, the Decision Engine queries the Planning Engine for all validated plans for that goal.

3. **Plan Pre-screening** — Verifies that each retrieved plan is in "validated" state with an attached validation report. Plans that are not validated are excluded from evaluation with a documented reason.

4. **Context and Knowledge Retrieval** — Pulls the current context snapshot from the Context Engine and retrieves relevant risk knowledge and decision rules from the Knowledge Engine based on the goal domain.

5. **Intake Record** — Produces an intake record documenting which plans were received, which were excluded, what context and knowledge versions were used, and any gaps or warnings.

The Plan Intake stage is deterministic: the same request and the same upstream state produce the same intake record.

### 11.3 Criteria Evaluator

The Criteria Evaluator applies the configured decision criteria to each plan alternative:

1. **Criteria Resolution** — Determines the effective criteria set by merging the base criteria configuration with any request-level criteria overrides. Overrides take precedence. Missing criteria (not in base config and not overridden) use default values.

2. **Per-Criterion Scoring** — For each plan and each criterion, computes a normalized score in the range [0, 1]. Scoring functions are deterministic and defined per criterion type:
   - **Resource cost** — ratio of plan's total resource requirement to maximum available (lower is better; inverted for normalization).
   - **Execution risk** — composite of plan complexity, dependency depth, and knowledge staleness (lower is better).
   - **Goal alignment** — degree to which plan's postconditions match the goal statement (higher is better).
   - **Constraint compliance** — fraction of applicable constraints satisfied by the plan (higher is better).
   - **Dependency complexity** — inverse of the dependency graph's longest path (simpler is better).
   - **Knowledge freshness** — average freshness of knowledge entities referenced by the plan (fresher is better).
   - **Estimated duration** — inverse of total estimated step duration (faster is better).

3. **Score Normalization** — All raw scores are normalized to [0, 1] using configured normalization functions (min-max, z-score, or threshold-based).

4. **Criterion Flags** — Any criterion that produces a score below a configured warning threshold or above a configured concern threshold is flagged for attention in the trade-off analysis stage.

The Criteria Evaluator is deterministic: the same plans, criteria, and normalization functions produce the same scores.

### 11.4 Trade-off Analyzer

The Trade-off Analyzer compares the top-ranked plan alternatives to identify differentiated strengths and weaknesses:

1. **Candidate Selection** — Selects the top N candidates (configurable, default top 3) based on aggregate scores from the Criteria Evaluator.

2. **Criteria Differentiation Analysis** — For each pair of top candidates, identifies which criteria favour one candidate over the other and by what margin. A criterion is "differentiating" if the score difference exceeds the configured trade-off margin.

3. **Conflict Detection** — Identifies criteria conflicts: situations where one candidate is stronger on criterion A but weaker on criterion B, and both criteria have significant weights. Conflicts are documented with the specific criteria involved and the magnitude of the conflict.

4. **Trade-off Report Generation** — Produces a structured trade-off report that lists the top candidates, their differentiated criteria, any conflicts detected, and a recommendation for governance review if the top two candidates differ by less than the trade-off margin.

5. **Governance Escalation Check** — If the top two candidates differ by less than the configured trade-off margin, the Trade-off Analyzer flags the decision for governance escalation. The decision may still proceed if the escalation policy allows auto-resolution for the specific context.

The Trade-off Analyzer is deterministic: the same evaluation scores and trade-off margin produce the same trade-off report.

### 11.5 Risk Assessor

The Risk Assessor evaluates risks associated with each plan alternative:

1. **Risk Factor Identification** — For each plan, identifies risk factors from three sources:
   - **Plan-inherent risks** — derived from plan characteristics: high dependency depth, high resource utilization, many steps, complex dependency graph, long estimated duration.
   - **Contextual risks** — derived from the current context: resource scarcity, unstable context elements, conflicting constraints.
   - **Domain risks** — derived from Knowledge Engine risk knowledge: known risk patterns for the goal domain, historical failure modes, regulatory constraints.

2. **Risk Classification** — Each identified risk is classified by severity (low, medium, high, critical) based on likelihood and impact assessments derived from risk knowledge and contextual factors.

3. **Composite Risk Score** — Each plan receives a composite risk score in [0, 1] computed from the weighted aggregation of individual risk severities. The risk score factors into the Decision Scorer's aggregate evaluation.

4. **Mitigation Recommendation** — For each risk classified as high or critical, the Risk Assessor produces a mitigation recommendation based on domain knowledge (procedural knowledge from the Knowledge Engine) or governance policy. If no specific mitigation is available, a generic mitigation strategy is recommended.

5. **Risk Assessment Report** — Produces a per-plan risk assessment report containing all identified risks, their classifications, the composite risk score, and mitigation recommendations.

The Risk Assessor is deterministic: the same plans, context, and risk knowledge produce the same risk assessments.

### 11.6 Decision Scorer

The Decision Scorer combines evaluation scores, trade-off analysis results, and risk assessments into a final ranking:

1. **Score Aggregation** — Combines per-criterion scores using the configured scoring model:
   - **Weighted sum** — each criterion's score is multiplied by its weight and summed.
   - **Lexicographic ordering** — criteria are ranked by priority; the highest-priority criterion determines the primary ranking, with lower-priority criteria as tiebreakers.
   - **Pareto dominance** — a plan dominates another if it scores equal or better on all criteria and strictly better on at least one. Non-dominated plans form the Pareto frontier.
   - **Threshold-based elimination** — plans that score below a threshold on any critical criterion are eliminated; remaining plans are ranked by aggregate score.

2. **Risk-Adjusted Scoring** — The composite risk score is incorporated into the final score according to the configured risk integration method (risk as a weighted criterion, risk as a penalty factor, or risk as a veto threshold).

3. **Ranking Production** — Produces a ranked list of all evaluated plans with their final scores, risk-adjusted scores, and ranking positions.

4. **Selection Recommendation** — The top-ranked plan is the recommended selection. If the top two plans differ by less than the trade-off margin, the selection is marked as "requires governance review" unless the escalation policy allows auto-resolution.

The Decision Scorer is deterministic: the same evaluation scores, risk scores, and scoring model produce the same ranking.

### 11.7 Decision Authorizer

The Decision Authorizer assembles the final decision artifact:

1. **Artifact Assembly** — Collects the evaluation summaries, trade-off report, risk assessment report, ranking, and selection recommendation into a decision artifact structure.

2. **Rationale Generation** — Produces a selection rationale that references: the selected plan's strengths, the trade-offs considered, the risks accepted, and any governance conditions. The rationale is generated from structured data using deterministic templates — it is not an AI-generated narrative.

3. **Authorization Check** — Verifies that the selected plan meets all authorization requirements: validation report present, risk score within threshold (or governance-approved), no pending governance escalations, and decision policy compliance.

4. **Decision Versioning** — Assigns a decision identifier and version to the artifact. If this decision revises a previous decision, the parent decision version is referenced.

5. **Artifact Finalization** — The decision artifact is marked as immutable and emitted as a `Decision Authorized` event.

6. **Governance Escalation** — If any authorization check fails or the trade-off margin is exceeded, the decision is emitted as `Governance Escalated` instead of `Decision Authorized`. The decision remains in "evaluated" state until governance resolves the escalation.

The Decision Authorizer is deterministic: the same assembled components and authorization rules produce the same decision artifact.

---

## 12. Resolution Rules

### 12.1 Ambiguity Resolution

| Ambiguity | Resolution Rule |
|:---|:---|
| Decision request lacks explicit criteria | Base criteria configuration applied; all criteria equally weighted unless configured otherwise |
| Plan has missing criterion data (e.g., no estimated duration) | Missing criterion scored at the conservative end of the range (0.5 for unknown); flagged in evaluation summary |
| Multiple plans share the same aggregate score | Lexicographic tiebreaker applied using criterion priority order; if still tied, plan with lower composite risk score selected; if still tied, plan with earlier creation timestamp selected |
| Risk knowledge unavailable for goal domain | Default risk assessment applied (all risks scored as "medium"); knowledge-gap warning attached to decision artifact |

### 12.2 Conflict Resolution

| Conflict | Resolution Rule |
|:---|:---|
| Trade-off margin exceeded (top two plans too close) | Decision flagged for governance escalation; if escalation policy allows auto-resolution and no critical risks, top-ranked plan selected with "conditional authorization" flag |
| Risk score exceeds threshold | Decision requires explicit governance approval; cannot be auto-authorized regardless of aggregate score |
| Criteria weights conflict with governance policy | Governance policy weights take precedence; override documented in decision artifact |
| Selected plan has a critical risk with no mitigation | Decision blocked; returned to requesting Engine with "unacceptable risk" status and evidence |

### 12.3 Revision Scope Rules

| Trigger Type | Default Scope | Expanded Scope When |
|:---|:---|:---|
| Context change (minor) | Re-evaluate risk assessment for plans with context-dependent risks | No expansion unless risk score changes cross the trade-off margin |
| Context change (major — goal-relevant) | Full re-decision | Always full re-decision |
| New plan alternative available | Re-evaluate with new alternative added to candidate set | Expanded to full re-decision if new plan scores higher than current selection |
| Risk rule change | Re-evaluate risk assessment for all active decisions affected by the rule | Expanded to full re-decision if risk scores change materially |
| Governance directive | Per directive (may be full re-decision, specific criterion re-evaluation, or decision cancellation) | Per directive |
| Execution feedback (selected plan step failure) | Re-evaluate risk assessment; determine whether failure affects decision validity | Expanded to full re-decision if failure invalidates the selected plan's feasibility |

---

## 13. Validation Rules

### 13.1 Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Decision request schema | Request structure matches the expected schema (goal, plan IDs, criteria overrides, priority) | Request rejected; specific violations listed |
| Goal identifier non-empty | Goal identifier references a known goal context | Request rejected; "unknown goal" error |
| Plan reference validity | Referenced plans exist, are in "validated" state, and have attached validation reports | Invalid plans excluded; decision proceeds with valid plans only; if no valid plans, request rejected |
| Context reference validity | Referenced context snapshot version is accessible | Decision proceeds with last known context; staleness warning |
| Knowledge reference validity | Referenced knowledge entities are accessible and active | Decision proceeds with available knowledge; gaps flagged |
| Criteria override validity | Override criteria names match known criteria; override values within valid ranges | Invalid overrides ignored; base configuration used; warning attached |

### 13.2 Decision Validation (Critical Checks)

Every decision artifact must pass the following critical validation checks before being authorized:

| Check | Rule | Failure Mode |
|:---|:---|:---|
| **Plan evaluation completeness** | All submitted plans have been evaluated with all applicable criteria | Decision blocked; missing evaluations listed |
| **Scoring model consistency** | The same scoring model is applied to all plans in a single decision | Decision blocked; inconsistency detected and reported |
| **Risk assessment completeness** | All evaluated plans have a risk assessment report | Decision blocked; missing risk assessments listed |
| **Selected plan validity** | The selected plan is among the evaluated plans and references a validated plan version | Decision blocked; selection invalid |
| **Authorization requirement compliance** | All authorization requirements are met (risk threshold, governance escalation) | Decision escalated to governance or blocked |
| **Decision version uniqueness** | No two decision artifacts share the same identifier and version | Decision blocked; version collision reported |
| **Rationale completeness** | Selection rationale references specific criterion scores and risk factors | Decision blocked; rationale incomplete |

### 13.3 Decision Validation (Advisory Checks)

Advisory checks produce warnings but do not block decision authorization:

| Check | Rule | Advisory Condition |
|:---|:---|:---|
| **Low confidence differentiation** | Top two plans differ by less than 2x the trade-off margin | Warning; governance may want to review |
| **High composite risk** | Selected plan's risk score is above 50% of the threshold | Warning; risk mitigation review recommended |
| **Knowledge staleness** | Risk knowledge or decision rules used are near end of freshness window | Warning; knowledge refresh recommended |
| **Context staleness** | Context snapshot used is near end of freshness window | Warning; context refresh recommended |
| **Single candidate** | Only one plan available for evaluation (no alternatives) | Informational; trade-off analysis not applicable |

### 13.4 State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Proposed → Evaluated | All plans evaluated; scores assigned; risk assessments complete | Transition blocked; incomplete evaluations listed |
| Evaluated → Authorized | All critical validation checks pass; authorization requirements met | Transition blocked; failures or escalation requirements listed |
| Authorized → Active | Execution Engine has acknowledged receipt of decision artifact | Transition proceeds (active decisions need not be in execution) |
| Active → Superseded | Superseding decision is authorized | Transition blocked until superseding decision available |
| Active → Cancelled | Cancellation reason documented; no in-progress execution steps dependent on this decision | Transition blocked if execution steps are in progress |
| Superseded → Retired | No active references from any Engine or task | Transition blocked if active references exist |

---

## 14. Engine Invariants

The following properties must always hold for the Decision Engine regardless of state, inputs, or operations:

### Invariant 1: Decision Version Monotonicity

Every decision version has a strictly greater version identifier than all previous versions of the same decision. No two decision versions share the same identifier. The decision version chain is a strictly monotonically increasing sequence per decision.

### Invariant 2: Decision Artifact Immutability After Authorization

Once a decision artifact has been authorized (transitioned from "evaluated" to "authorized"), it cannot be modified. Any correction or revision produces a new decision version. No operation on the Decision Engine mutates an authorized decision artifact.

### Invariant 3: Selected Plan References Validated Plan

Every decision artifact's selected plan references a plan that is in "validated" state (as defined by the Planning Engine's lifecycle). The Decision Engine never selects a draft, failed, or superseded plan.

### Invariant 4: Evaluation Consistency

All plan alternatives within a single decision are evaluated using the same criteria set, the same scoring model, and the same normalization functions. No plan receives preferential treatment in the evaluation process. Criteria overrides apply uniformly to all evaluated plans.

### Invariant 5: Single Active Decision Per Goal

For any given goal identifier, there is at most one active (non-superseded, non-cancelled, non-retired) decision artifact. A new decision for the same goal supersedes the previous active decision before becoming active itself.

### Invariant 6: Authorization Before Handoff

No decision artifact is handed off to the Execution Engine unless it has passed all critical validation checks defined in Section 13.2 and has been authorized. The evaluation summary and risk assessment must be attached to the decision artifact as part of the handoff.

### Invariant 7: Revision Traceability

Every decision revision references the decision version it revises, the trigger that caused the revision, the scope of the revision, and the specific changes made. No decision revision exists without a documented reason and a traceable trigger.

### Invariant 8: Risk-Decision Binding

Every decision artifact contains a risk assessment for the selected plan. No decision is authorized without an accompanying risk assessment. If the risk assessment identifies critical risks without mitigation, the decision cannot be auto-authorized and must be escalated to governance.

---

## 15. Engine Operations

### 15.1 Decision Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `evaluate_plans(goal_id, plan_ids, criteria_overrides, priority)` | Evaluate plan alternatives and produce a decision artifact | Decision request | Decision artifact with evaluation summaries, trade-off report, risk assessment, and selection rationale | Plan retrieval, context and knowledge retrieval, evaluation, scoring, risk assessment, authorization | No valid plans (request rejected); validation failure (decision blocked with report); governance escalation required |
| `revise_decision(decision_version, trigger, scope)` | Revise an existing decision based on a trigger | Decision version, revision trigger, revision scope | Revised decision artifact (new version) with revision record | Re-evaluation, re-scoring, re-risk-assessment as needed | Trigger invalid; revision scope exceeds limits; authorization failure |
| `cancel_decision(decision_id, reason)` | Cancel an active decision | Decision identifier, cancellation reason | `Decision Cancelled` event; decision lifecycle transitioned | Decision marked as cancelled; Execution Engine notified | Decision not active (error); execution already in progress (blocked or escalated) |

### 15.2 Query Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `get_decision(decision_id)` | Retrieve the current version of a decision | Decision identifier | Decision artifact with full metadata, evaluation summaries, and risk assessment | None | Decision not found (error) |
| `get_decision_version(decision_id, version)` | Retrieve a specific version of a decision | Decision identifier, version number | Decision version with full metadata | None | Decision or version not found (error) |
| `get_evaluation_summary(decision_id)` | Retrieve the evaluation summaries for a decision | Decision identifier | Per-plan evaluation summaries with per-criterion scores | None | Decision or summaries not found (error) |
| `get_risk_assessment(decision_id)` | Retrieve the risk assessment for a decision | Decision identifier | Risk assessment report with identified risks, classifications, and mitigations | None | Decision or risk assessment not found (error) |
| `get_tradeoff_report(decision_id)` | Retrieve the trade-off report for a decision | Decision identifier | Trade-off report with candidate comparison | None | Decision or report not found (error) |

### 15.3 Governance Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `escalate_decision(decision_id, reason)` | Escalate a decision to governance for review | Decision identifier, escalation reason | `Governance Escalated` event | Decision paused in "evaluated" state | Decision not in "evaluated" state (error) |
| `resolve_escalation(decision_id, resolution)` | Resolve a governance escalation with an authorization or rejection | Decision identifier, governance resolution | `Decision Authorized` or `Decision Cancelled` event | Decision lifecycle transitioned | Decision not in escalated state (error) |

Operations are idempotent where applicable. `evaluate_plans` with the same goal, plan set, criteria, and context returns the existing decision if one exists for that exact combination. `revise_decision` with a duplicate revision trigger returns the existing revised decision if the trigger has already been processed.

---

## 16. Engine Events

### 16.1 Events Emitted

| Event | Trigger | Payload | Consumers | Expected Consumer Response |
|:---|:---|:---|:---|:---|
| `Decision Engine Initialized` | Startup completes | Configuration summary, registered capability, criteria set | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge; submit decision requests |
| `Decision Proposed` | Decision request accepted | Decision request ID, goal identifier, plan count | Audit systems, governance | Monitor; governance may prepare for escalation |
| `Decision Evaluated` | All plans scored and ranked | Decision version, ranked list, top candidate, trade-off flag | Governance, audit systems | Governance reviews if escalation flag set |
| `Decision Authorized` | Decision artifact produced and authorized | Decision version, selected plan, aggregate score, risk score | Execution Engine, Validation Engine, audit systems | Execution Engine may request plan for execution |
| `Decision Revised` | Decision revised based on a trigger | Old version, new version, revision trigger, scope | Execution Engine, audit systems | Execution Engine updates to new decision |
| `Decision Superseded` | Active decision replaced by revised decision | Old decision version, new decision version, reason | Execution Engine, audit systems | Execution Engine switches to new decision's selected plan |
| `Decision Cancelled` | Decision revoked | Decision version, cancellation reason, affected plans | Execution Engine, audit systems, Context Engine | Execution Engine halts authorized plan execution |
| `Governance Escalated` | Decision requires governance review | Decision version, escalation reason, top candidates, trade-off report | Framework Governance, audit systems | Governance reviews and resolves escalation |
| `Decision Engine Degraded` | Decision Engine operating in degraded mode | Degradation type, affected capabilities | All peer Engines, Engine Lifecycle (A.4.4) | Consumers may defer non-critical decisions |
| `Decision Engine Shutdown` | Decision Engine enters graceful shutdown | State summary (active decisions, pending escalations) | All peer Engines, Engine Lifecycle (A.4.4) | Cease decision requests |
| `Decision Engine Recovered` | Decision Engine completes restart recovery | Recovery timestamp, recovered decision count | All peer Engines, Engine Lifecycle (A.4.4) | Resume decision requests |

### 16.2 Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Plan Validated` | Planning Engine (A.5.3) | If the validated plan is for a goal with an active decision context, evaluate whether the new plan triggers re-decision |
| `Plan Revised` | Planning Engine (A.5.3) | If the revised plan is the currently selected plan, evaluate whether the revision affects the decision validity |
| `Plan Superseded` | Planning Engine (A.5.3) | If the superseded plan is the currently selected plan, trigger decision revision with the new plan version |
| `Context Updated` | Context Engine (A.5.1) | Evaluate whether context change triggers decision revision for active decisions (per revision scope rules) |
| `Context Compacted` | Context Engine (A.5.1) | Update context references for active decisions |
| `Knowledge Superseded` | Knowledge Engine (A.5.2) | Evaluate whether superseded knowledge (especially risk knowledge or decision rules) affects active decisions |
| `Knowledge Deprecated` | Knowledge Engine (A.5.2) | Evaluate whether deprecated knowledge affects active decisions; trigger revision if applicable |
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine may submit decision requests, make decision services available |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list |
| `Configuration Updated` | Governance or Engine configuration | Reload criteria configuration, scoring model, and policies; re-evaluate active decisions if criteria changed |

---

## 17. Dependencies

The Decision Engine depends on the following upstream components, consistent with the Universal Section Contract (Section 4 of A.5.0):

- **Engine Platform (A.4)** — Capability model, Engine contract, overall architectural context.
- **Engine Kernel (A.4.1)** — Execution environment and foundational Engine services.
- **Engine Contract (A.4.2)** — Contract interface the Decision Engine must implement.
- **Engine Registry (A.4.3)** — Registry services for Engine discovery and consumer management.
- **Engine Lifecycle (A.4.4)** — Lifecycle state machine specialized by Section 10.
- **Engine Communication (A.4.5)** — Inter-Engine messaging and event delivery.
- **Engine State (A.4.6)** — State model for the Decision Engine's internal state.
- **Engine Capability (A.4.7)** — Maps the Decision Engine to "Decision Making" capability domain.
- **Context Engine (A.5.1)** — Provides resolved context snapshots for risk assessment and decision grounding. The Decision Engine depends on the Context Engine being registered but can operate on the last known context if the Context Engine is temporarily unavailable.
- **Knowledge Engine (A.5.2)** — Provides risk knowledge, decision rules, and constraint entities for evaluation and risk assessment. The Decision Engine depends on the Knowledge Engine being registered but can operate with default criteria and risk thresholds if the Knowledge Engine is temporarily unavailable.
- **Planning Engine (A.5.3)** — Provides validated plans, plan alternatives, and validation reports for evaluation. The Decision Engine depends on the Planning Engine being registered but can evaluate previously received plans if the Planning Engine is temporarily unavailable.
- **STD-010, STD-003, STD-000, M.0, M.1** — Standards and meta-models as defined in Normative References.

---

## 18. Engine State

### 18.1 State Dimensions

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Decision criteria definitions, weights, scoring model, trade-off margin, risk threshold, decision policy, authorization rules | Low — governance-authorized changes only |
| **Active Decisions State** | Current set of active (authorized, non-superseded) decision artifacts with their evaluation records and risk assessments | Medium — changes with decision creation, revision, and supersession |
| **Decision Archive State** | Historical decisions (superseded, cancelled, retired) with their full records | Low — append-only; grows over time |
| **Request Queue State** | Pending and in-progress decision requests | High — changes with every incoming request |
| **Escalation State** | Decisions currently escalated to governance, awaiting resolution | Medium — changes with escalation and resolution events |
| **Context Reference State** | Most recent Context Engine snapshot version used for decision evaluation | Medium — updates with context events |
| **Knowledge Reference State** | Knowledge entity versions (risk knowledge, decision rules) used in active decisions | Medium — updates with knowledge events |
| **Plan Reference State** | Plan versions referenced by active decisions | Medium — updates with plan events from Planning Engine |
| **Lifecycle State** | Current Engine lifecycle phase (per A.4.4) | Low — changes only at lifecycle transitions |

### 18.2 State Consistency

- Active Decisions State is consistent with the Plan Reference State — every active decision references a plan that exists and is in "validated" or "active" state per the Planning Engine.
- Active Decisions State is consistent with the Context Reference State — every active decision references a valid context version.
- Active Decisions State is consistent with the Knowledge Reference State — every active decision references valid knowledge entity versions for its risk assessment and decision rules.
- No active decision references a superseded or deprecated knowledge entity without a staleness flag.
- Escalation State is a subset of Active Decisions State — every escalated decision is also an active decision in "evaluated" state.
- The Decision Archive State contains only decisions that have been fully transitioned out of the active state.

### 18.3 State Recovery

Recovery-critical state: Active Decisions State (all authorized decision artifacts with evaluation records and risk assessments), Escalation State, Configuration State, and the most recent Context, Knowledge, and Plan references. The Request Queue State is transient. On recovery, the Decision Engine assumes the persistence layer provides the decision data and resumes from the last consistent state.

---

## 19. AI Consumption Rules

### 19.1 AI Consumption Boundary

The Decision Engine does not invoke LLMs or AI models as part of its core architecture. Plan evaluation, criteria scoring, trade-off analysis, risk assessment, and decision authorization are all deterministic operations based on defined rules, configuration parameters, scoring models, and knowledge entities. The Decision Engine does not use AI for plan comparison, risk evaluation, or decision reasoning.

### 19.2 When AI May Be Involved

The Decision Engine may evaluate plans that were generated with AI assistance in other Engines. In this case, the Decision Engine treats the plans the same as any other plans — they are evaluated according to the same criteria and scoring model. The Decision Engine does not need to know whether a plan originated from an AI-assisted process. Similarly, decision rules retrieved from the Knowledge Engine may have been authored with AI assistance, but the Decision Engine applies them deterministically regardless of origin.

### 19.3 Prohibited AI Usage

- The Decision Engine shall not use LLM calls to evaluate plans.
- The Decision Engine shall not use LLM calls to generate selection rationales.
- The Decision Engine shall not use LLM calls to perform risk assessments.
- The Decision Engine shall not use LLM calls to resolve trade-offs or ranking ties.
- The Decision Engine shall not use prompt engineering or model selection in any capacity.

---

## 20. Runtime Interaction Rules

### 20.1 Interaction Model

The Decision Engine's interactions follow the Engine Communication model (A.4.5):

- **Synchronous interactions**: Decision requests, decision queries, and governance resolution are synchronous request-response patterns. The requesting Engine waits for the Decision Engine to complete evaluation and return the decision artifact or query result.
- **Asynchronous interactions**: Revision triggers (context changes, plan revisions, knowledge updates) are processed asynchronously. The Decision Engine receives these as events and processes them according to revision scope rules.
- **Event-driven interactions**: Decision lifecycle events (`Decision Authorized`, `Decision Superseded`, `Governance Escalated`) are emitted asynchronously to all subscribed consumers.

### 20.2 Concurrency Rules

- Multiple decision requests may be processed concurrently if they operate on different goals.
- Decision requests for the same goal are serialized — only one decision operation per goal at a time.
- Decision queries do not block decision operations and vice versa.
- Revision operations on a decision serialize with decision operations on the same decision.
- Governance escalations are processed in FIFO order per decision.
- Risk assessments for the same plan across different decisions may be computed concurrently (read-only on plan data).

### 20.3 Timeout and Boundedness

- Decision evaluation is bounded by the number of plans and criteria — it always terminates.
- Trade-off analysis is bounded by the number of top candidates (configurable maximum).
- Risk assessment is bounded by the number of risk factors per plan and the knowledge retrieval scope.
- No unbounded loops or recursive operations exist in the Decision Engine's evaluation pipeline.

---

## 21. Extension Model

### 21.1 Extension Points

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom decision criteria | Additional evaluation criteria for specific domains or decision contexts | Must define criterion name, scoring function, normalization, default weight, and warning thresholds; registered through Engine configuration |
| Custom scoring models | Alternative score aggregation methods beyond weighted sum, lexicographic, pareto, and threshold | Must be deterministic and produce a total ordering of plans; requires Framework Governance approval |
| Custom risk factors | Additional risk identification patterns for specific domains | Must define factor source, classification rules, and severity mapping; registered through Engine configuration |
| Custom authorization rules | Additional authorization conditions or governance escalation triggers | Must not bypass existing critical checks; requires Framework Governance approval |

### 21.2 Extension Constraints

- Extensions must not modify the Decision Engine's invariants (Section 14).
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the authorization-before-handoff requirement.
- Extensions must not weaken the evaluation consistency requirement (all plans evaluated with same criteria).
- Extensions that affect scoring semantics or authorization rules require Framework Governance review.
- Extensions must be backward-compatible — existing decision artifacts must remain valid after an extension is added.

---

## 22. Knowledge Graph Integration

### 22.1 Integration Model

The Decision Engine's decision artifacts, evaluation summaries, and risk assessments may be projected into the knowledge graph for cross-reference, historical analysis, and decision pattern mining. Integration is mediated through the Engine Platform's knowledge graph projection layer.

### 22.2 Projection Points

| Projection | Content | Purpose |
|:---|:---|:---|
| Decision Node | Decision identifier, version, goal, selected plan, aggregate score, risk score, status | Enable decision-level queries and historical tracking |
| Decision-Plan Edge | Decision version, plan version, evaluation outcome (selected/rejected) | Enable decision-to-plan traceability |
| Decision-Criterion Score Node | Decision version, plan version, criterion name, score, flag | Enable criterion-level analysis and scoring pattern mining |
| Decision Risk Node | Decision version, plan version, risk factor, severity, mitigation | Enable risk pattern analysis across decisions |
| Decision Revision Edge | Old decision version, new decision version, trigger, scope | Enable revision pattern analysis |
| Decision-Governance Edge | Decision version, escalation event, resolution | Enable governance escalation pattern analysis |

### 22.3 Integration Constraints

- Projection is downstream and non-blocking.
- The Decision Engine produces projection data; it does not define the graph schema or query model.
- Projection failures do not affect the Decision Engine's operation.

---

## 23. Certification Requirements

### 23.1 Required Certifications

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 31 sections present and compliant with A.5.0 template | Section-by-section compliance matrix |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist |
| **STD-003 Terminology Compliance** | All terms conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All eight invariants (Section 14) are testable | Invariant test specification |
| **Determinism Verification** | Same plans + criteria + context produce same decision across 100 consecutive runs | Determinism test evidence |
| **Cross-Engine Alignment** | Context Engine, Knowledge Engine, and Planning Engine consumption contracts are compatible | Cross-Engine alignment verification |
| **Completeness Check** | All responsibilities (Section 5) map to operations (Section 15) | Traceability matrix |
| **Event Completeness** | All lifecycle transitions (Section 10) produce events (Section 16) | Traceability matrix |

### 23.2 Certification Gates

- Certification evidence reviewed by Enterprise Documentation Standards Board.
- Cross-engine alignment verified against A.5.1, A.5.2, and A.5.3 output contracts.
- Certification does not imply canonical status.
- Evidence traceable to Traceability ID: `FORGE-AI.V4.PHASE-2.ENGINE-04`.

---

## 24. Performance Characteristics

### 24.1 Expected Performance Bounds

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Decision evaluation latency | Per-request; bounded by plan count, criteria count, and risk assessment complexity | Deterministic; no AI/LLM |
| Decision revision latency | Per-request; depends on revision scope (full re-decision vs. incremental update) | Full re-decision similar to new decision evaluation |
| Query latency | Constant time per query | Decision, evaluation, and risk assessment lookups |
| Risk assessment latency | Proportional to plan count and risk factor count | Bounded by knowledge retrieval scope |
| Trade-off analysis latency | Proportional to candidate count and criteria count | Bounded by configured top-N candidate limit |

### 24.2 Scalability Characteristics

- Supports multiple concurrent decision operations for different goals.
- Decision archive grows over time; compaction archives oldest non-referenced decisions when limits are reached.
- Plan retrieval for evaluation is bounded by the Planning Engine's query limits.
- Knowledge retrieval for risk assessment is bounded by the Knowledge Engine's retrieval limits.

### 24.3 Non-Goals

- No specific latency numbers (implementation concern).
- No throughput targets (implementation concern).
- No resource allocation specifications (platform concern).

---

## 25. Security & Governance

### 25.1 Security Boundaries

- **Decision artifact immutability** — Authorized decision artifacts cannot be tampered with. Mutation of a versioned decision artifact is a violation of Invariant 2.
- **Request authentication** — Source authentication is handled by Engine Communication (A.4.5).
- **Consumer authorization** — Managed by Engine Registry (A.4.3).
- **Configuration integrity** — Criteria configuration, scoring model, and decision policy changes require governance authorization.
- **Decision visibility** — All decision artifacts are visible to registered peer Engines. Fine-grained access control is out of scope.
- **Governance escalation integrity** — Escalated decisions cannot be auto-authorized; they require explicit governance resolution.

### 25.2 Governance Constraints

- Decision criteria are governance artifacts — new criteria require Framework Governance approval.
- The scoring model is a governance artifact.
- Risk thresholds are governance artifacts.
- Decision cancellation of authorized decisions that are in active execution requires governance approval.
- The Decision Engine does not determine whether a goal is "worth pursuing" — it evaluates plans for goals that have already been accepted for planning. Goal-level prioritization is a governance concern.
- Governance escalation resolution is the sole authority of Human Governance / Framework Governance. The Decision Engine does not auto-resolve escalations unless the escalation policy explicitly permits it.

---

## 26. Out of Scope

The following concerns are explicitly out of scope:

- Source code, implementation files, and code repositories
- REST endpoints, API definitions, GraphQL schemas, gRPC service definitions, and transport protocols
- Persistence mechanisms, database schema design, Neo4j implementation, and vector database configuration
- Caching strategies, cache invalidation, and cache infrastructure
- LLM call orchestration, prompt engineering, model selection, token management, and inference optimization
- Agent runtime design, agent lifecycle management, and agent communication protocols
- Swarm runtime design, swarm coordination, and swarm topology management
- Platform adapter specifications and adapter lifecycle management
- ProjectStatus updates, project tracking, and milestone reporting
- Certification execution and canonical promotion
- Step execution timing, scheduling, and resource provisioning
- Execution monitoring and error recovery during step execution
- UI/UX design and visualization of decisions, trade-offs, or risk assessments
- Organizational business rule authoring or policy definition

---

## 27. Future Consumers

| Consumer | Consumption Pattern | Expected Decision Usage |
|:---|:---|:---|
| **Execution Engine (A.5.5, future)** | Push subscription (authorized decisions) | Consumes decision artifacts to identify the authorized plan and any execution constraints |
| **Validation Engine (A.5.6, future)** | Pull on demand | Retrieves decision artifacts for decision correctness validation (criteria consistency, scoring integrity, risk completeness) |
| **Memory Engine (A.5.9, future)** | Push subscription (completed and superseded decisions) | Stores decision artifacts, evaluation summaries, and risk assessments for pattern recognition and decision quality tracking |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events for platform-level monitoring |
| **Knowledge Graph Projection** | Asynchronous | Consumes decision, evaluation, and risk metadata for graph-based analysis |
| **Framework Governance** | Pull on demand (escalated decisions) | Reviews and resolves escalated decisions |

---

## 28. Success Criteria

### 28.1 Architectural Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Template compliance** | All 31 sections present and compliant with A.5.0 | Section audit |
| **STD-010 compliance** | Document Metadata passes all STD-010 checks | STD-010 validation checklist |
| **Invariant testability** | All eight invariants are testable assertions | Invariant test suite |
| **Determinism** | Same inputs produce same decision across 100 consecutive runs | Determinism test suite |
| **Completeness** | Every responsibility maps to an operation | Traceability matrix |
| **Event coverage** | Every lifecycle transition produces an event | Traceability matrix |

### 28.2 Functional Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Evaluation consistency** | All plans in a decision evaluated with identical criteria and scoring model | Evaluation audit |
| **Risk assessment completeness** | Every decision artifact contains a risk assessment for the selected plan | Risk assessment audit |
| **Decision-plan traceability** | Every decision references a validated plan version | Cross-reference audit |
| **Revision consistency** | Every revision references the original decision and trigger | Revision record audit |
| **Governance escalation integrity** | No escalated decision auto-authorized without policy permission | Escalation audit |
| **Trade-off detection** | Top candidates within trade-off margin are flagged for governance | Trade-off margin test |

### 28.3 Governance Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Ownership clarity** | Exactly one accountable owner named | Governance review |
| **Handoff readiness** | Handoff contract defines prerequisites, evidence, and gates | Governance review |
| **Scope compliance** | No implementation or AI details in any section | Scope audit |
| **Cross-Engine alignment** | Context, Knowledge, and Planning Engine contracts compatible | Cross-Engine alignment verification |

---

## 29. Completion Checklist

| Requirement | Status |
|:---|:---|
| All 31 sections present in A.5.0 template order | Complete |
| Section 1 (Status) present with platform alignment statement | Complete |
| Section 2 (Document Metadata) STD-010-compliant | Complete |
| Section 3 (Purpose) provides Engine-specific content with capability domain mapping | Complete |
| Section 4 (Mission) provides testable mission-level objectives | Complete |
| Section 5 (Engine Responsibilities) provides grouped, verifiable responsibilities | Complete |
| Section 6 (Non Responsibilities) maps each exclusion to an owning component | Complete |
| Section 7 (Engine Position) describes topology and data flow | Complete |
| Section 8 (Consumed Inputs) defines typed inputs with validation and failure handling | Complete |
| Section 9 (Produced Outputs) defines typed outputs with versioning and validation | Complete |
| Section 10 (Engine Lifecycle) describes all lifecycle transitions within A.4.4 | Complete |
| Section 11 (Internal Engine Model) describes six-stage pipeline with revision loop | Complete |
| Section 12 (Resolution Rules) defines ambiguity, conflict, and revision scope resolution | Complete |
| Section 13 (Validation Rules) defines input, decision, advisory, and state transition validation | Complete |
| Section 14 (Engine Invariants) states eight testable invariants | Complete |
| Section 15 (Engine Operations) enumerates operations with full signatures | Complete |
| Section 16 (Engine Events) enumerates emitted and consumed events | Complete |
| Section 17 (Dependencies) lists all upstream dependencies including Context, Knowledge, and Planning Engines | Complete |
| Section 18 (Engine State) describes state dimensions, consistency, and recovery | Complete |
| Section 19 (AI Consumption Rules) defines AI invocation boundaries | Complete |
| Section 20 (Runtime Interaction Rules) defines synchronous/asynchronous and concurrency rules | Complete |
| Section 21 (Extension Model) describes extension points and constraints | Complete |
| Section 22 (Knowledge Graph Integration) describes projection points | Complete |
| Section 23 (Certification Requirements) defines certification gates and evidence | Complete |
| Section 24 (Performance Characteristics) states performance bounds | Complete |
| Section 25 (Security & Governance) states security boundaries and governance constraints | Complete |
| Section 26 (Out of Scope) lists all mandatory exclusions | Complete |
| Section 27 (Future Consumers) identifies downstream consumers | Complete |
| Section 28 (Success Criteria) defines measurable conditions | Complete |
| Section 29 (Completion Checklist) all items addressed | Complete |
| Section 30 (Engine Ownership) names accountable owner and governance obligations | Complete |
| Section 31 (Engine Handoff Contract) defines handoff prerequisites and certification gates | Complete |

---

## 30. Engine Ownership

### Accountable Owner

**Role**: Framework Architecture Team

The Framework Architecture Team is the single accountable owner for the Decision Engine's architectural correctness, governance alignment, and certification readiness. The Decision Engine is a critical reasoning Engine that transforms evaluated plans into binding decisions, and its architecture must remain under centralized architectural control. The decision criteria, scoring models, and risk assessment frameworks directly impact the quality and defensibility of system-level decisions, making centralized oversight essential.

### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Decision criteria architecture | Yes | Persistence implementation |
| Scoring model design | Yes | Execution scheduling |
| Risk assessment framework | Yes | Execution monitoring |
| Decision lifecycle design | Yes | Platform persistence |
| Extension model governance | Yes | Extension implementations |
| Authorization rules | Yes | Governance policy authoring |

### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New decision criteria | Autonomous for standard criteria types | Yes for novel criteria that change evaluation semantics |
| Scoring model changes | Autonomous for selecting existing models | Yes for new scoring models |
| Risk threshold changes | Autonomous for minor adjustments within governance-approved range | Yes for new thresholds or threshold removal |
| Authorization rule changes | Autonomous for minor condition adjustments | Yes for changes that affect auto-authorization scope |
| Decision policy changes | Autonomous for minor scope adjustments | Yes for governance-approval threshold changes |

### Validation Obligations

- All 31 sections compliant with A.5.0.
- All invariants preserved.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- STD-010 and STD-003 compliant.
- No implementation scope.
- Cross-engine alignment verified with A.5.1, A.5.2, and A.5.3.

### Review Obligations

Present to Enterprise Documentation Standards Board:

- Complete RFC with all sections.
- Responsibility-to-operation traceability matrix.
- Lifecycle-to-event traceability matrix.
- Invariant test specification.
- STD-010 and STD-003 compliance evidence.
- Cross-engine alignment verification reports with A.5.1, A.5.2, and A.5.3.

### Certification Responsibilities

- Template compliance matrix.
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Cross-engine alignment evidence with A.5.1, A.5.2, and A.5.3.
- Evaluation consistency test results.
- Risk assessment completeness test results.

### Ownership Handoff Limitations

Ownership transfer requires governance-authorized transition recorded in the Engine Registry. The transition must transfer all obligations, preserve evidence and traceability, and not occur silently or implicitly.

---

## 31. Engine Handoff Contract

### Handoff Prerequisites

Before the Decision Engine hands off a decision artifact to the Execution Engine, the following conditions must be satisfied:

1. The decision artifact has passed all critical validation checks defined in Section 13.2.
2. The decision artifact has been authorized (transitioned from "evaluated" to "authorized").
3. The decision artifact is assigned a version and is immutable.
4. The selected plan references a validated plan version from the Planning Engine.
5. The evaluation summary, trade-off report, and risk assessment are attached.
6. The selection rationale is complete and references specific criterion scores and risk factors.
7. No unresolved governance escalations exist for this decision.
8. The decision artifact references valid context and knowledge versions.
9. The Decision Engine is in steady-state or degraded lifecycle phase.

### Required Evidence

| Evidence | Description | Retention |
|:---|:---|:---|
| Decision version identifier | Unique version of the handed-off decision | Duration of decision execution + audit retention period |
| Evaluation summary | Per-plan per-criterion scores and aggregate scores | Same as decision |
| Trade-off report | Comparative analysis of top candidates | Same as decision |
| Risk assessment report | Identified risks, classifications, mitigations | Same as decision |
| Selection rationale | Documented reasoning for plan selection | Same as decision |
| Selected plan reference | Plan version identifier and validation report | Same as decision |
| Context reference | Context Engine snapshot version used | Same as decision |
| Knowledge references | Knowledge entity versions used | Same as decision |
| Authorization metadata | Authorization timestamp, authority, and conditions | Same as decision |

### Validated Outputs

- Decision artifacts (immutable, versioned, with all evidence attached).
- Decision deltas (for revisions, referencing parent decision version).
- Evaluation summaries (immutable, per decision version).
- Trade-off reports (immutable, per decision version).
- Risk assessment reports (immutable, per decision version).

### Snapshot Expectations

Decision artifacts are immutable once authorized. The Execution Engine receives a versioned decision artifact that is guaranteed not to change. If the decision needs revision, the Decision Engine produces a new decision artifact version and the Execution Engine switches to it. The selected plan referenced by the decision artifact is itself immutable (per Planning Engine Invariant 2), providing a stable execution target.

### Receiving Consumers

1. Execution Engine (A.5.5, future) — primary consumer
2. Validation Engine (A.5.6, future) — for decision correctness validation
3. Framework Governance — for escalated decisions (pull on resolution)

### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Validation failure | Decision blocked; validation report returned to requesting Engine | If all validation attempts fail, goal returned as "undecidable" with evidence |
| Consumer unreachable | Decision retained; delivery retried per A.4.5 | After retry exhaustion, consumer marked unreachable; decision remains available for later retrieval |
| Risk threshold exceeded | Decision escalated to governance; not auto-authorized | Governance resolves escalation (approve with accepted risk, or reject) |
| Trade-off margin exceeded | Decision flagged for governance review | Governance reviews trade-off; may confirm top-ranked plan or request alternative |
| Context unavailable | Decision evaluated with last known context + staleness warning | No escalation — decision is usable but flagged |
| Knowledge unavailable | Decision evaluated with default criteria and risk thresholds + knowledge-gap warning | No escalation — decision is usable but flagged |
| Plan invalidated (superseded by Planning Engine) | Decision for that plan marked stale; revision triggered | If no valid alternative plan exists, decision returned as "undecidable" |

### Audit Record Expectations

Every handoff produces an audit record:

- Decision version identifier.
- Receiving consumer.
- Handoff timestamp.
- Validation status.
- Authorization status.
- Evidence checklist.
- Selected plan version.
- Context and knowledge reference status.
- Risk score and any accepted risks.

### Certification Gates

1. **Pre-handoff validation** — All critical checks (Section 13.2) pass.
2. **Evidence completeness** — All required evidence items present.
3. **Authorization complete** — Decision artifact in "authorized" state; no unresolved escalations.
4. **Consumer readiness** — Execution Engine registered and reachable.
5. **Invariant preservation** — All eight invariants (Section 14) hold.
6. **Cross-engine consistency** — Context, knowledge, and plan references valid.
7. **Risk acceptance** — Selected plan's risk score within threshold or explicitly accepted by governance.

If any gate fails, handoff does not proceed. The decision remains in "evaluated" state with documented blockers.

---

## Validation Checklist

### STD-010 Metadata Validation

| Check | Status |
|:---|:---|
| Metadata heading is exactly `## Document Metadata` | Pass |
| Table shape is exactly `\| Field \| Value \|` with left-aligned columns | Pass |
| All 25 mandatory STD-010 fields present | Pass |
| Conditionally mandatory fields included (Blocks, Blocked By, Review Status, Compliance Level) | Pass |
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
| All invariants are testable assertions | Pass |
| All operations have complete signatures (purpose, inputs, outputs, side effects, failure modes) | Pass |
| All events have complete payloads and consumer expectations | Pass |
| All responsibilities map to at least one operation | Pass |
| All lifecycle transitions produce events | Pass |
| Cross-engine consumption contracts are explicit and typed | Pass |

# A.5.4 — Decision Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-4` |
| Title | A.5.4 — Decision Engine RFC |
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
| Last Updated | 2026-07-11 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.005.4` |
| Scope | Defines the Decision Engine specialization only, including its purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation within the AI-DOS v4 Engine Platform. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification execution, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; A.5.1 Context Engine RFC; A.5.2 Knowledge Engine RFC; A.5.3 Planning Engine RFC; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, Context Engine context snapshots, Knowledge Engine retrieval results, Planning Engine validated plans, canonical terminology, metadata rules, upstream Engine handoff outputs where applicable, and repository-normalization instructions. |
| Produces | Decision Engine architecture specification, Decision Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Runtime/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`; `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Runtime/A.5.3-Planning-Engine-RFC.md` |
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
- A.5.1: Context Engine RFC as the upstream context provider for risk assessment grounding
- A.5.2: Knowledge Engine RFC as the upstream knowledge provider for risk factors, decision rules, and domain knowledge
- A.5.3: Planning Engine RFC as the upstream plan provider for decision evaluation and trade-off analysis

</details>

---

## Executive Summary

A.5.4 defines the architecture of the Decision Engine, the fourth individual Engine specialization in Phase 2 of the AI-DOS v4 Engine Platform. The Decision Engine evaluates validated plans produced by the Planning Engine, compares plan alternatives against defined criteria, and produces decision artifacts that authorize and guide execution. It sits between the Planning Engine (plan producer) and the Execution Engine (plan consumer), providing a structured, deterministic framework for evaluating trade-offs, scoring alternatives, assessing risks, and selecting the optimal plan. This RFC specializes A.5.0 (which specializes TPL-001) by defining the Decision Engine's purpose, mission, responsibilities, internal model, resolution rules, state characteristics, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle behaviour. It does not redefine Runtime, Engine Platform, Engine Foundation, or any upstream standard.

---

## Purpose

### Engine Purpose

The Decision Engine exists to evaluate validated plans produced by the Planning Engine, compare plan alternatives against defined criteria, and produce decision artifacts that authorize and guide execution. While the Planning Engine (A.5.3) produces feasible, validated plans, the system often faces multiple viable plans or must choose among competing strategies. The Decision Engine fills this gap by providing a structured, deterministic framework for evaluating trade-offs, scoring alternatives, assessing risks, and selecting the optimal plan for execution.

A decision artifact, in the context of this Engine, is a versioned, immutable record that contains the selected plan, the evaluation criteria applied, the scoring results for all considered alternatives, the rationale for selection, identified risks with mitigation strategies, and any conditions or constraints placed on execution. Decision artifacts are the primary output of the Decision Engine and the authoritative signal that the Execution Engine (A.5.5, future) uses to begin execution. Decision artifacts are also consumed by the Validation Engine (A.5.6, future) for decision correctness checks and by the Memory Engine (A.5.9, future) for decision pattern learning.

Without a dedicated Decision Engine, the Execution Engine would need to independently select among plans or receive plans without evaluation context. This would lead to unprincipled plan selection, undocumented trade-offs, and no audit trail for why a particular plan was chosen over alternatives. The Decision Engine eliminates these risks by centralizing plan evaluation, trade-off analysis, and decision lifecycle management in a single, deterministic component.

The Decision Engine's purpose aligns with Engine Capability domain "Decision Making" as defined by A.4.7. The Decision Engine uniquely owns the capability of evaluating plan alternatives against configurable criteria, producing scored rankings, generating risk assessments, and emitting decision artifacts that bind the system to a chosen course of action.

The Decision Engine does not execute plans — that is the Execution Engine's responsibility. The Decision Engine does not generate plans — that is the Planning Engine's responsibility. The Decision Engine defines the architectural contract for decision operations: what constitutes a valid evaluation, how trade-offs are scored, how risks are assessed, how decisions are authorized, and how decision artifacts are handed off to the Execution Engine.

### Engine Mission

The mission of the Decision Engine is to produce transparent, criteria-driven, and risk-aware decision artifacts that select the optimal plan from available alternatives and authorize execution.

This mission translates into five mission-level objectives:

1. **Evaluability** — Every plan that enters the Decision Engine is evaluated against a defined set of configurable criteria. Criteria include cost, risk, resource consumption, alignment with goals, estimated duration, constraint compliance, and knowledge consistency. Evaluation is deterministic: the same plan, criteria, and context produce the same evaluation scores.

2. **Transparency** — Every decision artifact documents the full reasoning chain: which plans were considered, what criteria were applied, how each plan scored, why the selected plan was chosen, and what risks were identified. This supports auditability, explainability, and governance review.

3. **Risk Awareness** — The Decision Engine assesses risks associated with each plan alternative. Risk assessment is based on domain knowledge from the Knowledge Engine, contextual factors from the Context Engine, and plan-inherent characteristics (complexity, dependency depth, resource requirements). Risks are classified, scored, and paired with mitigation strategies.

4. **Composability** — The Decision Engine supports multi-criteria decision analysis where criteria can be weighted, prioritized, or conditionally applied. Decision policies can be configured per domain, per goal type, or per governance requirement, allowing the same Engine to serve diverse decision contexts.

5. **Immutability** — Once a decision artifact is produced and authorized, it cannot be modified. If new information necessitates a different decision, the Decision Engine produces a new decision artifact that supersedes the previous one. The full decision history is preserved for auditability.

---

## Scope

### In Scope

A.5.4 governs:

1. The Decision Engine's architectural purpose, mission, and capability domain alignment within the Engine Platform.
2. The Decision Engine's responsibilities, non-responsibilities, and boundary definitions relative to peer Engines and platform layers.
3. The Decision Engine's internal model, including the six-stage decision pipeline, resolution rules, state characteristics, and decision lifecycle management.
4. The Decision Engine's consumed inputs (decision requests, plan/context/knowledge inputs, configuration inputs) and produced outputs (decision artifacts, evaluation summaries, trade-off reports, risk assessments, decision events).
5. The Decision Engine's operations, events, and runtime interaction patterns.
6. The Decision Engine's invariants, validation rules, and certification requirements.
7. The Decision Engine's ownership contract and handoff contract.
8. The Decision Engine's lifecycle behaviour within the A.4.4 Engine Lifecycle model.
9. AI consumption boundaries — the Decision Engine is fully deterministic and does not invoke LLMs.

### Out of Scope

A.5.4 does not:

1. Redefine Runtime Architecture (A.3).
2. Redefine Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1 through A.4.7).
3. Define the architectural content or behaviour of any other Engine (A.5.1, A.5.2, A.5.3, A.5.5, etc.).
4. Replace or restate STD-010 metadata field definitions or rules.
5. Replace or restate TPL-001 RFC mandatory section definitions or validation rules.
6. Replace or restate A.5.0 template governance, section mapping, or Universal Section Contract.
7. Implement decision persistence, scoring algorithm implementations, or evaluation infrastructure.
8. Define LLM call orchestration, prompt engineering, or model selection for decision reasoning.
9. Execute certification or perform canonical promotion.
10. Define organizational business rules, policies, or goal-level prioritization.

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
- Step execution timing, scheduling, and resource provisioning
- Execution monitoring and error recovery during step execution
- UI/UX design and visualization of decisions, trade-offs, or risk assessments
- Organizational business rule authoring or policy definition

### Future Consumers

| Consumer | Consumption Pattern | Expected Decision Usage |
|:---|:---|:---|
| **Execution Engine (A.5.5, future)** | Push subscription (authorized decisions) | Consumes decision artifacts to identify the authorized plan and any execution constraints |
| **Validation Engine (A.5.6, future)** | Pull on demand | Retrieves decision artifacts for decision correctness validation (criteria consistency, scoring integrity, risk completeness) |
| **Memory Engine (A.5.9, future)** | Push subscription (completed and superseded decisions) | Stores decision artifacts, evaluation summaries, and risk assessments for pattern recognition and decision quality tracking |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events for platform-level monitoring |
| **Knowledge Graph Projection** | Asynchronous | Consumes decision, evaluation, and risk metadata for graph-based analysis |
| **Framework Governance** | Pull on demand (escalated decisions) | Reviews and resolves escalated decisions |

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
| A.5.0 | `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` | Governing template; provides Engine RFC section mapping, Universal Section Contract, Engine Ownership Contract, Engine Handoff Contract, and validation model. A.5.4 follows A.5.0 as its direct governing template (per the specialization hierarchy TPL-000 → TPL-001 → A.5.0 → A.5.4). |
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; A.5.0 specializes TPL-001 for the Engine domain, and A.5.4 inherits that specialization. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, placeholder grammar, naming conventions, and validation model. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; defines the metadata schema, mandatory fields, relationship taxonomy, version rules, and document class expectations. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; defines the terminology that this RFC shall use. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.3 Runtime Architecture | Governing architectural context | Decision Engine RFC would lack the architectural context |
| A.4 Engine Architecture | Governing Engine Platform definition, capability model, and contract framework | Decision Engine RFC would lack the platform boundary |
| A.4.1 Engine Kernel RFC | Kernel contract and mediation rules | Decision Engine could not define Kernel interaction |
| A.4.2 Engine Metadata RFC | Metadata model for Engine identity, classification, and tracking | Decision Engine would lack a consistent metadata foundation |
| A.4.3 Engine Registry RFC | Registry services for Engine discovery and consumer management | Decision Engine could not register as a capability provider |
| A.4.4 Engine Lifecycle RFC | Lifecycle state machine that all Engines must follow | Decision Engine could not define Engine-specific lifecycle behaviour |
| A.4.5 Engine Communication RFC | Communication types, modes, and failure/recovery model | Decision Engine could not define Engine-specific communication patterns |
| A.4.6 Engine State RFC | State categories, visibility model, and synchronization rules | Decision Engine could not define Engine-specific state management |
| A.4.7 Engine Capability RFC | Capability taxonomy and registration model | Decision Engine could not reference the "Decision Making" capability domain |
| A.5.0 Engine Specialization RFC Template | Governing template contract, section mapping, and validation model | Decision Engine RFC would lack the structural and governance foundation |
| A.5.1 Context Engine RFC | Upstream context provider for risk assessment grounding | Decision Engine could not access contextual risk factors |
| A.5.2 Knowledge Engine RFC | Upstream knowledge provider for risk factors, decision rules, and domain knowledge | Decision Engine could not access domain knowledge for risk assessment |
| A.5.3 Planning Engine RFC | Upstream plan provider for decision evaluation | Decision Engine could not access validated plans for evaluation |
| STD-010 | Document metadata schema and compliance rules | Metadata block would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology would be inconsistent across Engine RFCs |
| TPL-000 | Template governance and lifecycle model | Template compliance would lack governing template authority |
| TPL-001 | RFC template standard and mandatory section structure | RFC would lack the structural foundation it specializes through A.5.0 |

---

## Architecture

This section complies with the Universal Section Contract defined in A.5.0. The Decision Engine's architecture is defined within the Engine Platform (A.4) without redefining Runtime, Kernel, Contract, Registry, Lifecycle, Communication, State, Capability, metadata, terminology, artifacts, authority, or ownership models established upstream.

### Engine Position

#### Topological Position

The Decision Engine sits between the Planning Engine (plan producer) and the Execution Engine (plan consumer). It is the evaluation and authorization layer that transforms validated plans into binding decisions. It also consumes contextual state and domain knowledge to ground its evaluations.

```
  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   Context     │     │  Knowledge   │     │  Planning    │
  │   Engine      │     │  Engine      │     │  Engine      │
  │  (A.5.1)      │     │  (A.5.2)     │     │  (A.5.3)     │
  │  Snapshots    │     │  Risk/Rule   │     │  Validated   │
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

#### Data Flow Characterization

The Decision Engine has a well-defined input-output pattern:

- **From Planning Engine** — Validated plans (one or more alternatives per goal) are the primary input. Each plan carries its validation report, dependency graph, and planning record.
- **From Context Engine** — Context snapshots provide current environmental constraints, session parameters, and risk-relevant context factors (e.g., resource availability, time pressure, user preferences).
- **From Knowledge Engine** — Knowledge retrieval results provide domain knowledge for risk assessment (known risks in the domain, historical failure patterns, decision rules, constraint definitions).
- **To Execution Engine** — Authorized decision artifacts are the primary output. The Execution Engine consumes the selected plan version and any execution constraints.
- **To Validation Engine** — Decision artifacts are provided for decision correctness validation (criteria consistency, scoring integrity, risk completeness).
- **To Framework Governance** — Escalated decisions are pushed for governance review when trade-off margins are exceeded or risk thresholds are breached.

The Decision Engine's topology is a transform — it receives evaluated plans and contextual information, applies deterministic criteria and risk models, and produces decision artifacts. It has bounded, well-defined inputs and outputs.

#### Unavailability Impact

If the Decision Engine is unavailable, the Execution Engine cannot receive authorized decisions for new plans. Plans cannot be evaluated or compared, meaning the system cannot choose among alternatives. The Engine Platform's graceful degradation model (A.4.4) should define fallback behaviour — the Decision Engine defines what "no-decision" means but does not define how Engines compensate.

### Internal Engine Model

#### Conceptual Overview

The Decision Engine's internal model consists of six processing stages that transform validated plans into authorized decision artifacts:

```
Request Intake → Plan Evaluator → Criteria Evaluator → Trade-off Analyzer →
       ↑                                                            │
       │              ┌─────────────────────────────────────────────────┘
       │              │
       └──────────────┘
                (revision loop: authorized decision may be
                 re-evaluated when revision triggers arrive)
```

#### Request Intake

The Request Intake is the entry point for all decision operations. It performs the following:

1. **Request Validation** — Validates that the decision request contains at least one validated plan (with attached validation report from the Planning Engine). Rejects requests with no plans or with unvalidated plans.
2. **Context Retrieval** — Pulls the current context snapshot from the Context Engine to ground risk assessment and contextual evaluation factors.
3. **Knowledge Retrieval** — Submits knowledge retrieval requests to the Knowledge Engine for domain risk knowledge, decision rules, and constraint definitions relevant to the decision.
4. **Completeness Assessment** — Determines whether all required information (plans, context, knowledge) is available. If not, produces a "decision block" report identifying what is missing.
5. **Criteria Configuration** — Loads the applicable decision criteria and scoring model based on the goal type, domain, or requesting Engine. Criteria can be overridden by the requesting Engine via optional decision criteria overrides.

The Request Intake produces a Decision Intake Record that captures the request, the validated plans, the context version, the knowledge entities retrieved, and the criteria configuration.

#### Plan Evaluator

The Plan Evaluator evaluates each plan alternative independently against the full set of decision criteria:

1. **Criterion Extraction** — For each plan, extracts plan-inherent characteristics: estimated resource cost, dependency depth, step count, constraint coverage, knowledge consistency, and goal alignment (postconditions vs. goal statement).
2. **Knowledge-Grounded Assessment** — Augments plan-inherent characteristics with domain knowledge (e.g., "plans of this type in this domain have historically had high execution risk").
3. **Context-Grounded Assessment** — Augments with contextual factors (e.g., current resource availability, time pressure, session priority).

The Plan Evaluator produces a Raw Plan Assessment for each plan alternative, containing all extracted and augmented characteristics before scoring.

#### Criteria Evaluator

The Criteria Evaluator transforms raw plan assessments into scored evaluations:

1. **Raw Score Computation** — For each criterion (e.g., estimated cost, execution risk, goal alignment, constraint compliance, dependency complexity, knowledge freshness, estimated duration), computes a raw score based on the plan assessment data.

2. **Score Normalization** — All raw scores are normalized to [0, 1] using configured normalization functions (min-max, z-score, or threshold-based).

3. **Criterion Flags** — Any criterion that produces a score below a configured warning threshold or above a configured concern threshold is flagged for attention in the trade-off analysis stage.

4. **Aggregate Scoring** — Individual criterion scores are combined using the configured scoring model. Supported models include:
   - **Weighted sum** — normalized scores multiplied by weights and summed.
   - **Lexicographic ordering** — criteria applied in priority order; first differentiating criterion determines rank.
   - **Pareto dominance** — plans that are not dominated by any other plan on all criteria are identified as the Pareto front.
   - **Threshold-based elimination** — plans that fail any critical threshold are eliminated regardless of other scores.

The Criteria Evaluator is deterministic: the same plans, criteria, and normalization functions produce the same scores.

#### Trade-off Analyzer

The Trade-off Analyzer compares the top-ranked plan alternatives to identify differentiated strengths and weaknesses:

1. **Candidate Selection** — Selects the top N candidates (configurable, default top 3) based on aggregate scores from the Criteria Evaluator.

2. **Criteria Differentiation Analysis** — For each pair of top candidates, identifies which criteria favour one candidate over the other and by what margin. A criterion is "differentiating" if the score difference exceeds the configured trade-off margin.

3. **Alignment and Conflict Identification** — Identifies criteria that are aligned (both candidates score similarly) and criteria that present conflicts (one candidate strong on criterion A but weak on criterion B).

4. **Trade-off Report Production** — Assembles the differentiation analysis into a trade-off report that tabulates comparative strengths and flags trade-offs that require governance escalation.

5. **Governance Escalation Flag** — If any trade-off margin is exceeded (top two plans are too close), the decision is flagged for governance review rather than auto-authorizing the top-ranked plan.

#### Risk Assessor

The Risk Assessor evaluates risks for each plan alternative:

1. **Risk Identification** — For each plan, identifies risks based on plan-inherent characteristics (dependency depth, resource requirements, step complexity), contextual factors (resource scarcity, time pressure), and domain knowledge (historical failure patterns, known domain risks).

2. **Risk Classification** — Each identified risk is classified by severity (low, medium, high, critical) and by category (dependency risk, resource risk, knowledge risk, context stability risk, execution complexity risk).

3. **Mitigation Recommendation** — For each identified risk, produces a mitigation recommendation based on domain knowledge from the Knowledge Engine or governance policy.

4. **Risk Score Aggregation** — Individual risks are aggregated into a composite risk score per plan. The composite risk score factors into the overall evaluation (either as an additional criterion or as a modifier on the aggregate score).

5. **Risk Threshold Check** — If a plan's composite risk score exceeds a configured threshold, the plan is flagged for governance escalation. The decision cannot auto-authorize a plan that exceeds the risk threshold.

#### Authorization and Decision Production

The Authorization and Decision Production stage produces the final decision artifact:

1. **Plan Selection** — Selects the highest-ranked plan that passes all risk thresholds and has no unresolved governance escalations. If no plan qualifies, the decision is escalated to governance.

2. **Decision Artifact Assembly** — Assembles the selected plan, evaluation summary, trade-off report, risk assessment, selection rationale, and authorization metadata into a decision artifact.

3. **Decision Versioning** — Assigns a unique decision identifier and version. Decision artifacts are immutable once produced.

4. **Authorization State Transition** — The decision artifact transitions from "evaluated" to "authorized." If governance escalation is required, the decision remains in "evaluated" state until governance resolves the escalation.

5. **Decision-to-Plan Attachment** — The decision artifact is attached to the selected plan version for downstream consumption by the Execution Engine.

#### Revision Loop

When a revision trigger arrives, the Decision Engine may re-enter the pipeline at the appropriate stage:

- **Context change (material)** — Re-enters at Request Intake (new context retrieval) → proceeds through the full pipeline → produces a revised decision.
- **New plan available** — Re-enters at Request Intake (new plan added) → proceeds through the full pipeline.
- **Risk factor change** — Re-enters at Risk Assessor (update risk assessments) → proceeds through Authorization and Decision Production.
- **Governance re-evaluation request** — Re-enters at Criteria Evaluator (possibly with modified criteria) → proceeds through the pipeline.

The revision loop always produces a new decision version that references the original decision it revises. The original decision is preserved for auditability.

### Resolution Rules

#### Plan Equivalence Resolution

When the Decision Engine determines that multiple plan alternatives are functionally equivalent (identical steps, dependencies, and postconditions), it applies the following rules:

1. **Structural comparison** — Compare the dependency graphs of equivalent plans. If the graphs are isomorphic, the plans are truly equivalent.
2. **Knowledge-grounded tie-breaking** — Use domain knowledge from the Knowledge Engine to identify any subtle differences in knowledge grounding (e.g., one plan references more recent knowledge).
3. **First-submitted preference** — If no differentiating factor exists, the plan that was submitted first in the decision request takes precedence.
4. **Documented equivalence** — If plans remain equivalent, the equivalence is documented in the decision artifact with the selection rationale noting the tie-breaking method used.

#### Trade-off Margin Resolution

When the top two plans differ by less than the configured trade-off margin:

1. **Flag for governance** — The decision is flagged with the trade-off margin details. The decision is not auto-authorized.
2. **Trade-off report enhancement** — The trade-off report includes a detailed differentiation analysis showing exactly where the plans differ and by what margin.
3. **Governance authority** — Framework Governance reviews the trade-off and either confirms the top-ranked plan or requests additional analysis. Governance may also override and select a different plan.
4. **Escalation resolution** — Once governance resolves the escalation, the decision artifact is updated with the governance resolution and transitions to "authorized."

#### Risk Threshold Exceeded Resolution

When a plan's composite risk score exceeds the configured threshold:

1. **Block authorization** — The plan cannot be auto-authorized, regardless of its aggregate evaluation score.
2. **Risk assessment attachment** — The full risk assessment is included in the decision artifact.
3. **Governance escalation** — The decision is escalated to governance with a risk exceedance report.
4. **Alternative consideration** — If other plans are within the risk threshold, the decision proceeds with the highest-scoring risk-acceptable plan. If no plan is within the threshold, the decision is escalated in full.

#### Decision Revision Scope Resolution

| Trigger Type | Default Scope | Expanded Scope When |
|:---|:---|:---|
| Context change (minor) | Re-evaluate risk assessment with new context | No expansion unless risk thresholds are newly exceeded |
| Context change (major — decision-relevant) | Full re-decision | Always full re-decision |
| New plan alternative | Full re-decision (new plan added to candidate set) | Always full re-decision |
| Risk factor change | Re-assess risks for all plans | No expansion unless plan rankings change |
| Governance re-evaluation | Re-evaluate with possibly modified criteria | Full re-decision |

### Engine State

#### State Dimensions

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Decision criteria definitions, scoring model, risk thresholds, trade-off margin, authorization rules, normalization functions | Low — governance-authorized changes only |
| **Active Decisions State** | Current set of active (authorized, not superseded) decision artifacts with their selected plans and validation reports | Medium — changes with new decisions and supersessions |
| **Decision Archive State** | Historical decisions (superseded, retired) with their full records | Low — append-only; grows over time |
| **Request Queue State** | Pending and in-progress decision requests | High — changes with every incoming request |
| **Context Reference State** | Most recent Context Engine snapshot version used for decision grounding | Medium — updates with context events |
| **Knowledge Reference State** | Knowledge entity versions used in active decisions | Medium — updates with knowledge events |
| **Lifecycle State** | Current Engine lifecycle phase (per A.4.4) | Low — changes only at lifecycle transitions |

#### State Consistency

- Active Decisions State is consistent with Context Reference State — every active decision references a valid context version.
- Active Decisions State is consistent with Knowledge Reference State — every active decision references valid knowledge entity versions.
- No active decision references a superseded or deprecated knowledge entity without a staleness flag.
- The Decision Archive State contains only decisions that have been fully transitioned out of the active state.

#### State Recovery

Recovery-critical state: Active Decisions State (all active decision artifacts with selected plans), Configuration State, and the most recent Context and Knowledge references. The Request Queue State is transient. On recovery, the Decision Engine assumes the persistence layer provides the decision data and resumes from the last consistent state.

### AI Consumption Rules

The Decision Engine does not invoke LLMs or AI models as part of its core architecture. Plan evaluation, criteria scoring, trade-off analysis, risk assessment, and decision authorization are all deterministic operations based on defined criteria, configuration, and knowledge entities. The Decision Engine does not use AI for plan evaluation, trade-off reasoning, risk identification, or selection.

The Decision Engine may receive plans or context that were produced or influenced by AI processes in other Engines. In this case, the Decision Engine treats the plans and context the same as any other input — they are evaluated, scored, and risk-assessed according to the same rules. The Decision Engine does not need to know whether a plan or context element originated from AI.

**Prohibited AI Usage**:

- The Decision Engine shall not use LLM calls to evaluate plans.
- The Decision Engine shall not use LLM calls to identify trade-offs.
- The Decision Engine shall not use LLM calls to assess risks.
- The Decision Engine shall not use LLM calls to select among alternatives.
- The Decision Engine shall not use prompt engineering or model selection in any capacity.

### Runtime Interaction Rules

The Decision Engine interacts with the runtime through the Engine Kernel (A.4.1) and Engine Communication (A.4.5). It does not interact directly with the agent runtime or swarm runtime.

**Synchronous Interactions**:

- `get_decision(decision_id)` — Synchronous. Returns the decision artifact or "not found."
- `get_decision_version(decision_id, version)` — Synchronous. Returns the decision version or "not found."
- `get_evaluation_summary(decision_id)` — Synchronous. Returns the evaluation summary or "not found."
- `get_trade_off_report(decision_id)` — Synchronous. Returns the trade-off report or "not found."
- `get_risk_assessment(decision_id)` — Synchronous. Returns the risk assessment or "not found."

**Asynchronous Interactions**:

- `make_decision(plans, criteria_overrides, priority, requesting_engine)` — Asynchronous. Caller receives acknowledgment; evaluation pipeline runs asynchronously. Caller is notified when the decision is authorized (or fails authorization).
- `revise_decision(decision_version, trigger, scope)` — Asynchronous. Caller receives acknowledgment; revision pipeline runs asynchronously.
- `cancel_decision(decision_id, reason)` — Asynchronous. Caller receives acknowledgment; cancellation and event emission happen asynchronously.

**Concurrency Rules**:

- Multiple decision operations may be processed concurrently if they operate on different goals.
- Decision operations for the same goal are serialized — only one decision operation per goal at a time.
- Decision queries do not block decision operations and vice versa.
- Revision operations on a decision serialize with decision operations on the same decision.
- Knowledge retrieval for risk assessment runs in the background and does not block evaluation.

### Extension Model

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom decision criteria | Additional evaluation dimensions for specific domains | Must define scoring function, normalization, and flags; registered through Engine configuration; Framework Governance approval for criteria that change evaluation semantics |
| Custom scoring models | Alternative aggregation methods beyond weighted sum, lexicographic, pareto, threshold-based | Must be deterministic; requires Framework Governance approval |
| Custom risk categories | Additional risk types beyond dependency, resource, knowledge, context, execution complexity | Must define severity scale and mitigation template; registered through Engine configuration |
| Custom normalization functions | Alternative score normalization methods | Must produce [0, 1] range; registered through Engine configuration |
| Custom escalation rules | Additional conditions that trigger governance escalation | Must be deterministic; requires Framework Governance approval |

**Extension Constraints**:

- Extensions must not modify the Decision Engine's invariants.
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the authorization-before-handoff requirement.
- Extensions that affect scoring, risk thresholds, or authorization rules require Framework Governance review.
- Extensions must be backward-compatible — existing decisions must remain valid after an extension is added.

### Knowledge Graph Integration

The Decision Engine's decisions, evaluations, and risk assessments may be projected into the knowledge graph for cross-reference, historical analysis, and decision pattern mining. Integration is mediated through the Engine Platform's knowledge graph projection layer.

**Projection Points**:

| Projection | Content | Purpose |
|:---|:---|:---|
| Decision Node | Decision identifier, version, goal, selected plan, aggregate score, risk score, status | Enable decision-level queries and historical tracking |
| Decision-Plan Edge | Decision version, plan version, evaluation outcome (selected/rejected) | Enable decision-to-plan traceability |
| Decision-Criterion Score Node | Decision version, plan version, criterion name, score, flag | Enable criterion-level analysis and scoring pattern mining |
| Decision Risk Node | Decision version, plan version, risk factor, severity, mitigation | Enable risk pattern analysis across decisions |
| Decision Revision Edge | Old decision version, new decision version, trigger, scope | Enable revision pattern analysis |
| Decision-Governance Edge | Decision version, escalation event, resolution | Enable governance escalation pattern analysis |

**Integration Constraints**:

- Projection is downstream and non-blocking.
- The Decision Engine produces projection data; it does not define the graph schema or query model.
- Projection failures do not affect the Decision Engine's operation.

### Performance Characteristics

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Decision evaluation latency | Per-request; bounded by plan count, criteria count, and risk assessment complexity | Deterministic; no AI/LLM |
| Decision revision latency | Per-request; depends on revision scope (full re-decision vs. incremental update) | Full re-decision similar to new decision evaluation |
| Query latency | Constant time per query | Decision, evaluation, and risk assessment lookups |
| Risk assessment latency | Proportional to plan count and risk factor count | Bounded by knowledge retrieval scope |
| Trade-off analysis latency | Proportional to candidate count and criteria count | Bounded by configured top-N candidate limit |

**Scalability Characteristics**:

- Supports multiple concurrent decision operations for different goals.
- Decision archive grows over time; compaction archives oldest non-referenced decisions when limits are reached.
- Plan retrieval for evaluation is bounded by the Planning Engine's query limits.
- Knowledge retrieval for risk assessment is bounded by the Knowledge Engine's retrieval limits.

**Non-Goals**: No specific latency numbers, throughput targets, or resource allocation specifications — those are implementation and platform concerns.

### Security & Governance

**Security Boundaries**:

- **Decision artifact immutability** — Authorized decision artifacts cannot be tampered with. Mutation of a versioned decision artifact is a violation of Invariant 2.
- **Request authentication** — Source authentication is handled by Engine Communication (A.4.5).
- **Consumer authorization** — Managed by Engine Registry (A.4.3).
- **Configuration integrity** — Criteria configuration, scoring model, and decision policy changes require governance authorization.
- **Decision visibility** — All decision artifacts are visible to registered peer Engines. Fine-grained access control is out of scope.
- **Governance escalation integrity** — Escalated decisions cannot be auto-authorized; they require explicit governance resolution.

**Governance Constraints**:

- Decision criteria are governance artifacts — new criteria require Framework Governance approval.
- The scoring model is a governance artifact.
- Risk thresholds are governance artifacts.
- Decision cancellation of authorized decisions that are in active execution requires governance approval.
- The Decision Engine does not determine whether a goal is "worth pursuing" — it evaluates plans for goals that have already been accepted for planning. Goal-level prioritization is a governance concern.
- Governance escalation resolution is the sole authority of Human Governance / Framework Governance. The Decision Engine does not auto-resolve escalations unless the escalation policy explicitly permits it.

---

## Design Decisions

### DD-1: Six-Stage Pipeline with Criteria Evaluation and Trade-Off Analysis

**Context**: Plan evaluation could be a simple scoring function (one score per plan, pick the highest) or a multi-stage pipeline that separates concerns.

**Options considered**: (a) Single-stage scoring; (b) Three-stage (evaluate, rank, authorize); (c) Six-stage pipeline (Request Intake, Plan Evaluator, Criteria Evaluator, Trade-off Analyzer, Risk Assessor, Authorization and Decision Production).

**Decision**: Option (c). Six stages with distinct responsibilities, each producing its own artifact (Intake Record, Raw Assessment, Scored Evaluation, Trade-off Report, Risk Assessment, Decision Artifact).

**Rationale**: The six-stage pipeline provides clear separation of concerns: intake handles completeness validation, plan evaluation extracts characteristics, criteria evaluation normalizes and scores, trade-off analysis identifies close calls, risk assessment grounds decisions in domain knowledge, and authorization binds the decision. This separation supports extensibility (new stages can be inserted), auditability (each stage produces its own artifact), and governance review (each artifact can be inspected independently). A simpler pipeline would conflate concerns and make the architecture harder to validate.

### DD-2: Four Configurable Scoring Models

**Context**: The scoring model could be fixed (e.g., always weighted sum) or configurable.

**Options considered**: (a) Fixed weighted sum scoring; (b) Four models (weighted sum, lexicographic, pareto dominance, threshold-based elimination); (c) Fully composable scoring with arbitrary model combination.

**Decision**: Option (b). Four pre-defined scoring models, with weighted sum as the default. Model selection is a governance artifact.

**Rationale**: Different decision contexts require different scoring semantics. Lexicographic ordering is appropriate when one criterion is overwhelmingly important (e.g., safety). Pareto dominance is appropriate when the goal is to identify all non-dominated alternatives. Threshold-based elimination is appropriate when safety or compliance must be enforced. The four models cover common cases without the risk of non-deterministic or poorly reasoned custom models. Model selection is governance-controlled, preventing accidental misconfiguration.

### DD-3: Risk Threshold as Authorization Gate

**Context**: Plans with high risk could be auto-authorized if their aggregate score is high enough, or they could be blocked from auto-authorization.

**Options considered**: (a) Risk is a scoring criterion only (no blocking); (b) Risk threshold blocks auto-authorization and triggers governance escalation; (c) Risk threshold blocks all authorization (no override possible).

**Decision**: Option (b). Plans exceeding the risk threshold are blocked from auto-authorization. Governance may still authorize the decision with accepted risk, or may reject it. The risk threshold is configurable per goal type and domain.

**Rationale**: This provides a safety net without eliminating governance flexibility. Auto-authorizing high-risk plans would bypass governance oversight on the decisions that need it most. Blocking all high-risk plans regardless of score would be overly rigid — sometimes the best plan is also the riskiest, and governance should have the authority to accept the risk. The escalation mechanism (auto-escalate, governance resolves) preserves auditability.

### DD-4: Trade-Off Margin as Governance Trigger

**Context**: When plans are very close in score, the Decision Engine could either auto-select the top plan or flag the decision for governance review.

**Options considered**: (a) Always auto-select the top-ranked plan; (b) Auto-select unless top-two are within a configured margin; (c) Always present trade-off analysis but auto-select.

**Decision**: Option (b). When the top two plans differ by less than the configured trade-off margin, the decision is flagged for governance review rather than auto-authorizing. The trade-off report is enhanced with detailed differentiation analysis.

**Rationale**: Auto-selecting when plans are too close masks genuine trade-offs from governance. A configurable margin (default: 5% of aggregate score) provides a clear, deterministic trigger. The trade-off report provides governance with the information needed to make an informed override decision. This prevents the Decision Engine from silently choosing between nearly-equal plans when the distinction matters.

### DD-5: Decision Artifact Immutability with Versioned Revisions

**Context**: Decision artifacts could be mutable (updated in place when revised) or immutable (revisions produce new versions).

**Options considered**: (a) Mutable decisions updated in place; (b) Immutable decision artifacts with versioned revisions; (c) Mutable with version snapshots.

**Decision**: Option (b). Decision artifacts are immutable once authorized. Revisions produce new decision artifacts that reference the original.

**Rationale**: Immutability preserves auditability and supports the revision traceability invariant (I8). Mutable decisions would make it impossible to compare decision versions, understand why a decision was revised, or audit the decision process. Immutability also simplifies handoff — the Execution Engine receives a decision artifact that is guaranteed not to change.

---

## Responsibilities

### Engine Responsibilities

The Decision Engine is accountable for the following architectural responsibilities, grouped by functional domain:

#### Decision Request Intake

- Receive decision requests that contain one or more validated plans (or a request to retrieve the current best plan for a goal), optional decision criteria overrides, optional priority constraints, and the requesting Engine identifier.
- Validate that all submitted plans have passed critical validation (as attested by their attached validation reports).
- Determine whether the decision request is complete (all required plans and context are available) or whether additional information is needed before evaluation can proceed.

#### Plan Evaluation

- Evaluate each plan alternative against the full set of decision criteria.
- Decision criteria are configurable and include but are not limited to: estimated resource cost, execution risk score, goal alignment score, constraint compliance score, dependency complexity score, knowledge freshness score, and estimated duration.
- Each criterion produces a normalized score. Scores are combined using the configured scoring model (weighted sum, lexicographic ordering, pareto dominance, or threshold-based elimination).
- Produce a per-plan evaluation summary that includes per-criterion scores, the aggregate score, and any criterion-level flags or warnings.

#### Trade-off Analysis

- When multiple plans score similarly on aggregate metrics, perform trade-off analysis to identify differentiated strengths and weaknesses.
- Trade-off analysis identifies which criteria differentiate the top candidates, which criteria are aligned, and which criteria present conflicts.
- Produce a trade-off report that tabulates the comparative strengths of the top-ranked alternatives.
- Flag trade-off decisions that require governance escalation (e.g., when the top two plans differ by less than a configured margin).

#### Risk Assessment

- For each plan alternative, assess risks based on plan-inherent characteristics, contextual risk factors, and domain risk knowledge from the Knowledge Engine.
- Classify risks by severity (low, medium, high, critical) and by category (dependency risk, resource risk, knowledge risk, context stability risk, execution complexity risk).
- For each identified risk, produce a mitigation recommendation based on domain knowledge or governance policy.
- Aggregate plan-level risk into a composite risk score that factors into the overall evaluation.

#### Decision Artifact Production

- Assemble the evaluation results, trade-off analysis, risk assessment, and selection rationale into a decision artifact.
- The decision artifact contains: the selected plan version, the selection rationale, per-plan evaluation summaries, the trade-off report, the risk assessment, any conditions or constraints placed on execution, and authorization metadata.
- Assign a decision identifier and version to the artifact. Decision artifacts are immutable once produced.
- Attach the decision artifact to the selected plan for downstream consumption.

#### Decision Revision

- Receive revision triggers when context changes materially, when new plan alternatives become available, when risk factors change, or when governance requests a re-evaluation.
- Analyze the revision trigger to determine scope: full re-decision, incremental update, or decision confirmation.
- Produce a revised decision artifact as a new version that references the decision it revises.
- Preserve the original decision artifact for auditability and comparison.

#### Decision Lifecycle Management

- Manage decision artifacts through their lifecycle: proposed, evaluated, authorized, active, superseded, and retired.
- Track decision state transitions based on execution feedback from the Execution Engine and governance directives.
- Support decision cancellation when a selected plan becomes infeasible or when governance overrides the decision.
- Archive superseded and retired decisions for historical reference and pattern analysis.

Additional responsibilities inherited from A.5.0's governance template: maintain TPL-001 compliance for this RFC, preserve the Specializable/Structural section classification, enforce the Universal Section Contract, and keep the mandatory Out of Scope items complete and non-removable.

---

## Non Responsibilities

### Engine Non Responsibilities

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

Additional non-responsibilities inherited from A.5.0: this RFC is not responsible for defining the architectural content of any other Engine, redefining Runtime Architecture (A.3), redefining Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1–A.4.7), implementing template validation tooling, executing certification reviews, defining LLM prompts or AI consumption boundaries for authoring, or managing ProjectStatus updates.

**Prohibitions**:

- Shared or ambiguous ownership without a single accountable party.
- Ownership claims that bypass Framework Governance.
- Unvalidated handoff — all decisions must pass critical validation and authorization before transfer.
- Implicit acceptance by the receiving Engine in any handoff.
- Handoff that bypasses certification requirements.
- Non-deterministic decision-making.
- Auto-authorization of plans exceeding risk thresholds without governance escalation.
- Mutation of authorized decision artifacts.
- Execution of plan steps or production of side effects.

---

## Interfaces

This section complies with the Universal Section Contract defined in A.5.0. The Decision Engine's interfaces are defined within the Engine Platform (A.4) without redefining upstream communication, transport, or protocol models.

### Consumed Inputs

#### Decision Requests

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Decision Request | Structured request (validated plans, optional criteria overrides, priority, requesting Engine) | Peer Engines, Planning Engine (plan delivery), governance | All plans have passed critical validation; criteria overrides structurally valid | Request rejected; specific violations listed |
| Revision Trigger | Structured event (trigger type, trigger source, affected decision version, trigger context) | Context Engine (context change), Planning Engine (new plan), Knowledge Engine (knowledge update), governance (re-evaluation) | Trigger type valid; affected decision version exists; trigger context present | Trigger logged but not processed if decision not found |
| Decision Query | Structured request (decision identifier or version, query type) | Peer Engines, audit systems, Framework Governance | Decision identifier format valid | Query rejected with "not found" if decision does not exist |

#### Plan, Context, and Knowledge Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Validated Plan | Versioned plan with validation report, dependency graph, and planning record | Planning Engine (A.5.3) | Plan has passed all critical validation checks; validation report attached; dependency graph acyclic | Decision proceeds with available plans; missing plans flagged |
| Context Snapshot | Versioned resolved context | Context Engine (A.5.1) | Snapshot version valid and accessible | Decision proceeds with last known context; staleness flagged |
| Context Change Event | Event containing new snapshot version and delta | Context Engine (A.5.1) | Event structure compliance; delta applicable | Event logged; decision revision evaluated on next cycle |
| Knowledge Retrieval Result | Ranked knowledge entities with provenance | Knowledge Engine (A.5.2) | Result set valid; entities meet confidence threshold | Decision proceeds with available knowledge; missing knowledge gaps flagged |
| Risk Knowledge | Domain risk patterns, historical failure data, decision rules | Knowledge Engine (A.5.2) | Risk knowledge entities validated and active | Default risk categories applied; missing risk knowledge flagged |

#### Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Decision Criteria Definitions | Criterion name, scoring function, normalization function, applicable goal types | Governance configuration | Each criterion has a scoring function in [0,1] range | Default criteria applied (cost, risk, alignment, compliance, complexity, freshness, duration) |
| Scoring Model | Aggregation method (weighted sum, lexicographic, pareto, threshold-based) and parameters (weights, priorities) | Governance configuration | Model type valid; parameters within configured ranges | Default: weighted sum with equal weights |
| Risk Thresholds | Maximum acceptable composite risk score per goal type and domain | Governance configuration | Threshold within [0.0, 1.0]; at least one threshold must be > 0 | All plans auto-escalated if no threshold set |
| Trade-off Margin | Minimum score difference between top-2 candidates that triggers governance review | Governance configuration | Margin within (0.0, 1.0] | Default margin of 0.05 (5%) |
| Authorization Rules | Conditions for auto-authorization vs. governance escalation | Governance configuration | Rules well-defined; no circular conditions | All decisions require governance approval |
| Normalization Functions | Score normalization method (min-max, z-score, threshold-based) per criterion | Engine configuration | Function produces [0, 1] range | Default: min-max normalization |

All inputs are versioned. Decision requests carry a request identifier and timestamp. Context references carry the Context Engine snapshot version. Knowledge references carry the Knowledge Engine entity versions used.

### Produced Outputs

#### Decision Artifacts

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Authorized Decision Artifact | Versioned record containing selected plan, evaluation summary, trade-off report, risk assessment, selection rationale, and authorization metadata | Execution Engine (primary), Validation Engine, Framework Governance | Monotonic incrementing decision version; immutable once authorized | All critical checks pass; risk within threshold; no unresolved escalations; selected plan references valid plan version; authorization complete |

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Decision Delta | Differential update describing changes between decision versions | Execution Engine, audit systems | References parent decision version | Delta applies cleanly; no orphaned plan references |

#### Decision Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Evaluation Summary | Per-plan per-criterion scores and aggregate scores | Audit systems, explainability, Validation Engine | Immutable per decision version | All plans evaluated with identical criteria; aggregate scores computed correctly |
| Trade-off Report | Comparative analysis of top candidates with differentiation and conflict identification | Audit systems, Framework Governance | Immutable per decision version | Top candidates identified; differentiation analysis complete; trade-off flags accurate |
| Risk Assessment Report | Identified risks, classifications, mitigations, composite scores per plan | Execution Engine, audit systems, Framework Governance | Immutable per decision version | All risks classified; mitigations provided; composite risk computed correctly |
| Revision Record | Per-revision record: trigger, scope, changes, affected decisions, reasoning | Audit systems, explainability | Immutable per revision | Trigger reference valid; scope accurate; changes traceable |

#### Decision Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Decision Proposed | Event emitted when plans pass intake but await evaluation | Audit systems, Decision Engine internal | Event-scoped; references proposed decision | Plans valid; intake record complete |
| Decision Evaluated | Event emitted when all plans scored and risk-assessed | Execution Engine, Decision Engine, audit systems | Event-scoped; references evaluated decision | Evaluation complete; trade-off report attached |
| Decision Authorized | Event emitted when decision passes authorization | Execution Engine, audit systems, Framework Governance | Event-scoped; references authorized decision | Authorization complete; no unresolved escalations |
| Decision Superseded | Event emitted when a revised decision replaces the active decision | Execution Engine, audit systems | Event-scoped; references old and new decision versions | Superseding decision validated |
| Decision Failed | Event emitted when decision cannot be produced | Execution Engine, audit systems, Context Engine | Event-scoped; references failed decision | Failure reason and blocking factor documented |
| Risk Threshold Exceeded | Event emitted when a plan's risk score exceeds the threshold | Framework Governance | Event-scoped; references plan and risk assessment | Risk threshold exceeded; mitigation attached |
| Trade-off Margin Exceeded | Event emitted when top-2 plans are too close | Framework Governance | Event-scoped; references both candidates and margin | Trade-off margin exceeded; differentiation analysis attached |
| Decision Engine Shutdown | Event emitted during graceful shutdown | All peer Engines, Engine Lifecycle (A.4.4) | Event-scoped; references state summary | All active decisions marked; pending decisions documented |
| Decision Engine Recovered | Event emitted after restart recovery | All peer Engines, Engine Lifecycle (A.4.4) | Event-scoped; references recovery state | Recovered decision count; state summary accurate |

All decision artifacts are immutable once authorized. Decision revisions produce new decision versions. Output contracts are explicit enough for consuming Engines to validate received decisions against the schemas defined here.

### Engine Operations

#### Decision Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `make_decision(plans, criteria_overrides, priority, requesting_engine)` | Evaluate plans and produce an authorized decision | Validated plans, optional criteria overrides, priority, requesting Engine | Authorized decision artifact with evaluation summary, trade-off report, and risk assessment | Plan evaluation, scoring, risk assessment, trade-off analysis, authorization | No valid plans (rejected); validation failure (decision blocked); risk threshold exceeded (escalated); trade-off margin exceeded (escalated) |
| `revise_decision(decision_version, trigger, scope)` | Revise an existing decision based on a trigger | Decision version, revision trigger, revision scope | Revised decision (new version) with revision record | Re-evaluation, re-scoring, re-risk-assessment as needed | Trigger invalid; revision scope exceeds limits; validation failure |
| `cancel_decision(decision_id, reason)` | Cancel an active decision | Decision identifier, cancellation reason | Cancellation acknowledgment; `Decision Superseded` event; plan lifecycle transitioned | Decision marked as superseded; Execution Engine notified | Decision not active (error) |

#### Query Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `get_decision(decision_id)` | Retrieve the current version of a decision | Decision identifier | Decision artifact with full metadata | None | Decision not found (error) |
| `get_decision_version(decision_id, version)` | Retrieve a specific version of a decision | Decision identifier, version number | Decision version with metadata | None | Decision or version not found (error) |
| `get_evaluation_summary(decision_id)` | Retrieve the evaluation summary for a decision | Decision identifier | Evaluation summary (per-plan scores, aggregates) | None | Decision or summary not found (error) |
| `get_trade_off_report(decision_id)` | Retrieve the trade-off report for a decision | Decision identifier | Trade-off report | None | Decision or report not found (error) |
| `get_risk_assessment(decision_id)` | Retrieve the risk assessment for a decision | Decision identifier | Risk assessment report | None | Decision or assessment not found (error) |

Operations are idempotent where applicable. `make_decision` with the same plans and context returns the existing decision if one exists for those plans and context.

### Engine Events

#### Events Emitted

| Event | Trigger | Payload | Consumers | Expected Consumer Response |
|:---|:---|:---|:---|:---|
| `Decision Engine Initialized` | Startup completes | Configuration summary, registered capability | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge; submit decision requests |
| `Decision Proposed` | Plans pass intake but await evaluation | Decision version, plan count, goal summary | Audit systems, Decision Engine internal | Monitor; no action until evaluation completes |
| `Decision Evaluated` | All plans scored and risk-assessed | Decision version, evaluation report summary, risk summary | Execution Engine, Decision Engine, audit systems | Execution Engine may request decision for execution |
| `Decision Authorized` | Decision passes authorization | Decision version, selected plan, aggregate score, risk score, authorization metadata | Execution Engine, audit systems, Framework Governance | Execution Engine begins executing selected plan |
| `Decision Revised` | Decision is revised based on a trigger | Old version, new version, revision trigger, scope | Execution Engine, audit systems | Execution Engine updates to new decision version |
| `Decision Superseded` | Active decision is replaced by a revised decision | Old decision version, new decision version, reason | Execution Engine, audit systems | Execution Engine ceases executing old decision; switches to new |
| `Decision Failed` | Decision cannot be produced due to unrecoverable failure | Decision version, failing factor, failure reason | Execution Engine, audit systems, Context Engine | Execution Engine halts; Context Engine updates with failure state |
| `Risk Threshold Exceeded` | A plan's risk score exceeds the threshold | Decision version, plan version, risk score, threshold | Framework Governance | Governance reviews risk; may approve with accepted risk or reject |
| `Trade-off Margin Exceeded` | Top-2 plans are too close in score | Decision version, both candidate versions, margin | Framework Governance | Governance reviews trade-off; may confirm top plan or request alternative |
| `Decision Engine Shutdown` | Decision Engine enters graceful shutdown | State summary (active decisions, pending revisions) | All peer Engines, Engine Lifecycle (A.4.4) | Cease decision requests |
| `Decision Engine Recovered` | Decision Engine completes restart recovery | Recovery timestamp, recovered decision count | All peer Engines, Engine Lifecycle (A.4.4) | Resume decision requests |

#### Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Context Updated` | Context Engine (A.5.1) | Evaluate whether context change triggers decision revision for active decisions |
| `Context Compacted` | Context Engine (A.5.1) | Update context references for active decisions |
| `Plan Validated` | Planning Engine (A.5.3) | Evaluate newly validated plan; add to candidate set if active decision exists for that goal |
| `Plan Superseded` | Planning Engine (A.5.3) | Flag decisions referencing superseded plan as stale; trigger revision |
| `Knowledge Superseded` | Knowledge Engine (A.5.2) | Evaluate whether superseded knowledge affects active decision risk assessments |
| `Knowledge Deprecated` | Knowledge Engine (A.5.2) | Evaluate whether deprecated knowledge affects active decision risk assessments |
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine may submit decisions, make decision services available |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list |
| `Configuration Updated` | Governance or Engine configuration | Reload configuration; re-evaluate active decisions if criteria or thresholds changed |

### Engine Handoff Contract

This contract defines the requirements for transferring validated outputs from the Decision Engine to downstream consumers, per the Engine Handoff Contract defined in A.5.0.

#### Handoff Prerequisites

Before the Decision Engine hands off a decision artifact to the Execution Engine, the following conditions must be satisfied:

1. The decision artifact has passed all critical validation checks defined in the Validation section.
2. The decision artifact has been authorized (transitioned from "evaluated" to "authorized").
3. The decision artifact is assigned a version and is immutable.
4. The selected plan references a validated plan version from the Planning Engine.
5. The evaluation summary, trade-off report, and risk assessment are attached.
6. The selection rationale is complete and references specific criterion scores and risk factors.
7. No unresolved governance escalations exist for this decision.
8. The decision artifact references valid context and knowledge versions.
9. The Decision Engine is in steady-state or degraded lifecycle phase.

#### Required Evidence

| Evidence | Description | Retention |
|:---|:---|:---|
| Decision version identifier | Unique version of the handed-off decision | Duration of plan execution + audit retention period |
| Evaluation summary | Per-plan per-criterion scores and aggregate scores | Same as decision |
| Trade-off report | Comparative analysis of top candidates | Same as decision |
| Risk assessment report | Identified risks, classifications, mitigations | Same as decision |
| Selection rationale | Documented reasoning for plan selection | Same as decision |
| Selected plan reference | Plan version identifier and validation report | Same as decision |
| Context reference | Context Engine snapshot version used | Same as decision |
| Knowledge references | Knowledge entity versions used | Same as decision |
| Authorization metadata | Authorization timestamp, authority, and conditions | Same as decision |

#### Validated Outputs

- Decision artifacts (immutable, versioned, with all evidence attached).
- Decision deltas (for revisions, referencing parent decision version).
- Evaluation summaries (immutable, per decision version).
- Trade-off reports (immutable, per decision version).
- Risk assessment reports (immutable, per decision version).

#### Snapshot Expectations

Decision artifacts are immutable once authorized. The Execution Engine receives a versioned decision artifact that is guaranteed not to change. If the decision needs revision, the Decision Engine produces a new decision artifact version and the Execution Engine switches to it. The selected plan referenced by the decision artifact is itself immutable (per Planning Engine Invariant 2), providing a stable execution target.

#### Receiving Consumers

1. Execution Engine (A.5.5, future) — primary consumer
2. Validation Engine (A.5.6, future) — for decision correctness validation
3. Framework Governance — for escalated decisions (pull on resolution)

#### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Validation failure | Decision blocked; validation report returned to requesting Engine | If all validation attempts fail, goal returned as "undecidable" with evidence |
| Consumer unreachable | Decision retained; delivery retried per A.4.5 | After retry exhaustion, consumer marked unreachable; decision remains available for later retrieval |
| Risk threshold exceeded | Decision escalated to governance; not auto-authorized | Governance resolves escalation (approve with accepted risk, or reject) |
| Trade-off margin exceeded | Decision flagged for governance review | Governance reviews trade-off; may confirm top-ranked plan or request alternative |
| Context unavailable | Decision evaluated with last known context + staleness warning | No escalation — decision is usable but flagged |
| Knowledge unavailable | Decision evaluated with default criteria and risk thresholds + knowledge-gap warning | No escalation — decision is usable but flagged |
| Plan invalidated (superseded by Planning Engine) | Decision for that plan marked stale; revision triggered | If no valid alternative plan exists, decision returned as "undecidable" |

#### Audit Record Expectations

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

#### Certification Gates

Before the Decision Engine enters a handoff state transition, the following certification gates must be satisfied:

1. **Pre-handoff validation** — All critical checks pass.
2. **Evidence completeness** — All required evidence items present.
3. **Authorization complete** — Decision artifact in "authorized" state; no unresolved escalations.
4. **Consumer readiness** — Execution Engine registered and reachable.
5. **Invariant preservation** — All eight invariants hold.
6. **Cross-engine consistency** — Context, knowledge, and plan references valid.
7. **Risk acceptance** — Selected plan's risk score within threshold or explicitly accepted by governance.

If any gate fails, handoff does not proceed. The decision remains in "evaluated" state with documented blockers.

---

## Lifecycle

### Engine Lifecycle

The Decision Engine's lifecycle behaviour is defined within the A.4.4 Engine Lifecycle model.

#### Initialization

The Decision Engine initializes when the Engine Platform starts:

- Registers with the Engine Registry (A.4.3) as a Decision Making capability provider.
- Loads configuration inputs (criteria definitions, scoring model, risk thresholds, trade-off margin, authorization rules, normalization functions).
- Establishes communication channels with the Context Engine, Knowledge Engine, Planning Engine, and potential consuming Engines via the Engine Communication model (A.4.5).
- Subscribes to events from the Context Engine (context changes) and Planning Engine (plan validation, plan supersession) via the Engine Communication model (A.4.5).
- Emits a `Decision Engine Initialized` event.

Initialization dependencies include the Engine Registry being available, configuration being loaded, and communication channels being established. The Context Engine, Knowledge Engine, and Planning Engine need not be in steady state — the Decision Engine can operate on last-known state.

#### Startup

After initialization:

- Confirms connectivity with the Context Engine, Knowledge Engine, and Planning Engine.
- Verifies that context pull, knowledge retrieval, and plan query operations succeed.
- Performs a readiness check by processing a test decision request with test plans.
- Transitions to steady-state operation upon successful readiness confirmation.

#### Steady-State Operation

In steady state, the Decision Engine:

- Accepts and processes decision requests (plan evaluation, scoring, risk assessment, authorization).
- Monitors for revision triggers (context changes, plan supersession, knowledge updates, governance requests).
- Processes decision queries from peer Engines and governance.
- Produces evaluation summaries, trade-off reports, and risk assessments for auditability.

The Decision Engine operates on a request-driven model — it evaluates decisions when requested, not on a periodic cycle. Revision triggers are processed asynchronously.

#### Degradation

- **Request backlog** — When decision requests exceed capacity, the Decision Engine prioritizes revision requests over new decision requests, as revisions may unblock ongoing execution.
- **Context Engine unavailable** — The Decision Engine continues to evaluate decisions using the last known context, with a staleness warning attached to the decision artifact.
- **Knowledge Engine unavailable** — The Decision Engine continues to evaluate decisions using default risk categories and thresholds, with a knowledge-gap warning attached.
- **Planning Engine unavailable** — The Decision Engine continues with previously received plans; new plan requests are queued until the Planning Engine recovers.
- **Resource pressure** — When the decision archive exceeds configured limits, the Decision Engine archives the oldest non-referenced decisions.

#### Shutdown

During graceful shutdown:

- Completes all in-progress decision operations.
- Marks all active decisions with their current state.
- Emits a `Decision Engine Shutdown` event with a state summary (active decisions, pending revisions).
- Unsubscribes from events.
- Deregisters from the Engine Registry.

#### Restart and Recovery

On restart:

- Re-establishes communication channels with the Context Engine, Knowledge Engine, Planning Engine, and consuming Engines.
- Retrieves the current context from the Context Engine.
- Re-subscribes to events from the Context Engine and Planning Engine.
- Recovers active decision state from the persistence layer (decision artifacts, evaluation summaries, risk assessments, selected plan references).
- Emits a `Decision Engine Recovered` event.
- Resumes steady-state operation.

Recovery-critical state: all active decision artifacts with their selected plans and evaluation summaries, Configuration State, and the most recent Context and Knowledge references. In-progress decision operations are transient and do not survive restart.

---

## Validation

### Engine Invariants

The following properties must always hold for the Decision Engine regardless of state, inputs, or operations:

#### Invariant 1: Decision Version Monotonicity

Every decision version has a strictly greater version identifier than all previous versions of the same decision. No two decision versions share the same identifier. The decision version chain is a strictly monotonically increasing sequence per decision.

#### Invariant 2: Decision Artifact Immutability After Authorization

Once a decision artifact has been authorized (transitioned from "evaluated" to "authorized"), it cannot be modified. Any correction or revision produces a new decision version. No operation on the Decision Engine mutates an authorized decision artifact.

#### Invariant 3: Evaluation Consistency

Every plan in a decision request is evaluated against the same set of criteria using the same scoring model and normalization functions. The same plans, criteria, context, and knowledge produce the same evaluation scores and the same ranked ordering. No plan receives preferential treatment based on source Engine or submission order.

#### Invariant 4: Risk Assessment Completeness

Every authorized decision artifact contains a risk assessment for the selected plan. The risk assessment identifies at least one risk factor, classifies it by severity, and provides a mitigation recommendation. No authorized decision is handed off without a risk assessment attached.

#### Invariant 5: Single Active Decision Per Goal

For any given goal identifier, there is at most one active (non-superseded, non-retired) decision artifact. A new decision for the same goal supersedes the previous active decision before becoming active itself.

#### Invariant 6: Validation-Before-Authorization

No decision artifact is authorized unless it has passed all critical validation checks. The evaluation summary, trade-off report, and risk assessment must be attached to the decision before authorization. No plan is selected without a completed evaluation.

#### Invariant 7: Governance Escalation Integrity

Every governance escalation produces a documented resolution. No escalated decision is auto-authorized unless the escalation policy explicitly permits it. The escalation record, governance response, and resolution outcome are preserved in the decision artifact's revision record.

#### Invariant 8: Revision Traceability

Every decision revision references the decision version it revises, the trigger that caused the revision, the scope of the revision, and the specific changes made. No decision revision exists without a documented reason.

### Validation Rules

#### Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Decision request schema | Request structure matches the expected schema (plans, overrides, priority) | Request rejected; specific violations listed |
| Plan validation status | All submitted plans have passed Planning Engine critical validation | Request rejected; unvalidated plans excluded with notice |
| Revision trigger validity | Trigger type valid; affected decision version exists; trigger context present | Trigger logged; not processed if decision not found |
| Context reference validity | Referenced context snapshot version is accessible | Decision proceeds with last known context; staleness warning |
| Knowledge reference validity | Referenced knowledge entities are accessible and active | Decision proceeds with available knowledge; gaps flagged |

#### Decision Validation (Critical Checks)

Every decision must pass the following critical validation checks before being handed off:

| Check | Rule | Failure Mode |
|:---|:---|:---|
| **Plan validation attestation** | All plans in the decision have passed Planning Engine critical validation | Decision blocked; unvalidated plans excluded |
| **Criteria completeness** | All applicable criteria have scoring functions that produce valid scores | Decision blocked; incomplete criteria flagged |
| **Scoring determinism** | The same plans and criteria produce the same scores across runs | Decision blocked; determinism violation logged |
| **Risk threshold compliance** | Selected plan's composite risk score is within the configured threshold (or governance has accepted the risk) | Decision escalated; risk threshold exceeded |
| **Trade-off margin compliance** | Auto-authorization only when top-2 candidates differ by more than the configured margin | Decision flagged for governance if margin exceeded |
| **Plan reference validity** | Selected plan references a valid, non-superseded plan version | Decision blocked; stale plan reference flagged |

#### Decision Validation (Advisory Checks)

Advisory checks produce warnings but do not block decision handoff:

| Check | Rule | Advisory Condition |
|:---|:---|:---|
| **Criterion coverage** | All applicable criteria have scoring functions | Warning if a relevant criterion lacks a scoring function |
| **Risk coverage** | All risk categories have identification rules | Warning if a risk category lacks identification rules |
| **Knowledge freshness** | All knowledge entities used are within their freshness window | Warning if any entity is stale |
| **Context staleness** | The context snapshot used is within the freshness window | Warning if context is stale |
| **Minor criterion variance** | No criterion's weight changed since the previous decision for the same goal | Informational; suggests stability concern |

#### State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Proposed → Evaluated | All plans evaluated; criteria applied; scores computed; risks assessed | Transition blocked; evaluation failures listed |
| Evaluated → Authorized | All critical checks pass; no unresolved escalations; risk within threshold or governance-accepted | Transition blocked; critical check failures or escalations listed |
| Authorized → Active | Execution Engine has acknowledged receipt | Transition updated by Execution Engine feedback |
| Active → Superseded | Superseding decision is authorized | Transition blocked until superseding decision available |
| Superseded → Retired | No active references from any Engine or task | Transition blocked if active references exist |
| Failed → Revised | Revision trigger received; revised decision is authorized | Revision proceeds through pipeline |

### Certification Requirements

Before the Decision Engine transitions from Draft to Approved, the following certifications must be completed:

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 20 TPL-001 mandatory sections present with Engine-specific subsections per A.5.0 mapping | Section-by-section compliance matrix against A.5.0 Appendix A |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist (all items pass) |
| **STD-003 Terminology Compliance** | All terms used in this RFC conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All eight invariants are expressible as testable assertions | Invariant test specification document |
| **Determinism Verification** | Same plans + criteria + context produce same decision across 100 consecutive runs | Determinism test evidence |
| **Cross-Engine Alignment** | Context Engine, Knowledge Engine, and Planning Engine consumption contracts are compatible | Cross-Engine alignment verification report |
| **Completeness Check** | All responsibilities map to at least one operation | Responsibility-to-operation traceability matrix |
| **Event Completeness** | All lifecycle transitions produce corresponding events | Lifecycle-to-event traceability matrix |

**Certification Gates**:

- Certification evidence must be reviewed by the Enterprise Documentation Standards Board.
- Cross-engine alignment must be verified against A.5.1, A.5.2, and A.5.3 output contracts.
- Certification does not imply canonical status — canonical promotion requires separate governance approval.
- Certification evidence must be traceable to this RFC's Traceability ID: `AI-DOS.V3.A.005.4`.

---

## Ownership

### Engine Ownership

#### Accountable Owner

**Role**: Framework Architecture Team

The Framework Architecture Team is the single accountable owner for the Decision Engine's architectural correctness, governance alignment, and certification readiness. The Decision Engine is a critical reasoning Engine that transforms evaluated plans into binding decisions, and its architecture must remain under centralized architectural control. The decision criteria, scoring models, and risk assessment frameworks directly impact the quality and defensibility of system-level decisions, making centralized oversight essential.

#### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Decision criteria architecture | Yes | Persistence implementation |
| Scoring model design | Yes | Execution scheduling |
| Risk assessment framework | Yes | Execution monitoring |
| Decision lifecycle design | Yes | Platform persistence |
| Extension model governance | Yes | Extension implementations |
| Authorization rules | Yes | Governance policy authoring |

#### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New decision criteria | Autonomous for standard criteria types | Yes for novel criteria that change evaluation semantics |
| Scoring model changes | Autonomous for selecting existing models | Yes for new scoring models |
| Risk threshold changes | Autonomous for minor adjustments within governance-approved range | Yes for new thresholds or threshold removal |
| Authorization rule changes | Autonomous for minor condition adjustments | Yes for changes that affect auto-authorization scope |
| Decision policy changes | Autonomous for minor scope adjustments | Yes for governance-approval threshold changes |

#### Validation Obligations

The owner must validate the following before requesting review:

- All 20 TPL-001 mandatory sections are present with Engine-specific subsections per A.5.0 mapping.
- All eight invariants are preserved by the proposed architecture.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- The Document Metadata is fully STD-010-compliant.
- No implementation scope has been introduced.
- Cross-engine alignment is verified with A.5.1, A.5.2, and A.5.3.

#### Review Obligations

The owner must present the following for review to the Enterprise Documentation Standards Board:

- The complete RFC with all sections.
- The responsibility-to-operation traceability matrix.
- The lifecycle-to-event traceability matrix.
- The invariant test specification.
- Evidence of STD-010 and STD-003 compliance.
- Cross-engine alignment verification reports with A.5.1, A.5.2, and A.5.3.

#### Certification Responsibilities

The owner must produce the following evidence to support certification:

- Template compliance matrix (A.5.0 mapping).
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Cross-engine alignment evidence with A.5.1, A.5.2, and A.5.3.
- Evaluation consistency test results.
- Risk assessment completeness test results.

#### Ownership Handoff Limitations

Ownership may transfer from the Framework Architecture Team to another named role or individual only through a governance-authorized transition. The transition must:

- Record the current owner, new owner, transition date, and governance authorization in the Engine Registry.
- Transfer all validation, review, and certification obligations to the new owner.
- Preserve all existing certification evidence and traceability.
- Not occur silently or implicitly — the Engine Registry must reflect the change before it takes effect.

---

## Risks

### Risk-1: Criteria Configuration Quality Directly Affects Decision Quality

**Severity**: High
**Likelihood**: Medium
**Impact**: The Decision Engine's decision quality is bounded by the quality of its decision criteria. Poorly authored criteria will produce poor decisions regardless of how well the pipeline executes. Since decision criteria are governance artifacts that require domain expertise, the risk of insufficiently tested criteria entering production is significant.
**Mitigation**: Criteria require Framework Governance approval for novel types. Standard criteria can be registered through Engine configuration. The determinism invariant allows criteria to be tested exhaustively. The advisory check for criterion coverage signals when a relevant criterion lacks a scoring function.

### Risk-2: Planning-Decision Boundary Overlap

**Severity**: Medium
**Likelihood**: Medium
**Impact**: The Decision Engine evaluates plans and the Planning Engine produces plans. If the boundary is unclear, the Decision Engine may encroach on plan structuring (e.g., modifying dependency weights to influence evaluation) or the Planning Engine may make implicit selection decisions. This would create architectural ambiguity and duplicated responsibility.
**Mitigation**: The Non Responsibilities section explicitly assigns plan generation to the Planning Engine and decision-making to the Decision Engine. The Decision Engine does not modify plans, reorder steps, or suggest alternatives. Cross-engine alignment verification is a certification requirement. The advisory check for plan coverage ensures the Decision Engine uses plans as-is.

### Risk-3: Risk Assessment Accuracy Depends on Knowledge Engine Quality

**Severity**: Medium
**Likelihood**: High
**Impact**: The Decision Engine's risk assessment is grounded in Knowledge Engine domain knowledge. If the Knowledge Engine provides incomplete or inaccurate risk patterns, the Decision Engine will produce inaccurate risk assessments, potentially authorizing risky plans or blocking safe ones.
**Mitigation**: Risk knowledge quality is a Knowledge Engine concern (validated by its own invariants). The Decision Engine flags knowledge gaps with staleness and knowledge-gap warnings. The composite risk score factors in knowledge freshness. The determinism invariant ensures that the same knowledge produces the same risk assessment, enabling regression testing of knowledge changes.

### Risk-4: Governance Escalation Volume

**Severity**: Medium
**Likelihood**: Low
**Impact**: If risk thresholds are set too aggressively or trade-off margins too narrowly, a high volume of decisions may be escalated to governance, overwhelming governance capacity and creating bottlenecks. If too few decisions are escalated, genuinely ambiguous decisions may slip through without governance review.
**Mitigation**: Risk thresholds and trade-off margins are governance-controlled. The escalation rate is an observable metric that governance can use to calibrate thresholds. The Decision Engine provides escalation events with full context, enabling governance to batch-review related escalations and adjust thresholds proactively.

### Risk-5: Decision Archive Growth and Compaction

**Severity**: Low
**Likelihood**: High
**Impact**: The decision archive grows with every completed, failed, or superseded decision. Over extended operation, the archive may become a storage concern.
**Mitigation**: Compaction archives the oldest non-referenced decisions when configured limits are reached. Archive retention policy is a governance concern. The append-only design supports efficient compaction by nature.

### Risk-6: Scoring Model Gaming

**Severity**: Medium
**Likelihood**: Low
**Impact**: If the scoring model parameters (weights, thresholds) are known to requesters, they may structure plans to optimize scores rather than genuine quality. This is partially mitigated by the Planning Engine producing plans independently, but sophisticated requesters could influence the goal or constraints to game specific criteria.
**Mitigation**: The evaluation consistency invariant (I3) ensures that the same plans produce the same scores regardless of who requests the decision. Criterion flags and the trade-off margin detect anomalies. Governance controls the scoring model parameters and can audit scoring patterns. The advisory check for minor criterion variance detects configuration drift.

---

## Open Questions

1. **OQ-1: Should the Decision Engine support "deferred decisions" — decisions that are intentionally postponed because the context is insufficient or the risk is too high?** The current model requires a decision artifact for every decision request. A deferred decision would represent a governance-level "decide later" signal. This would require a new lifecycle state and new governance interaction pattern. The benefit is preventing premature decisions in uncertain contexts. The risk is adding complexity to an already complex decision lifecycle.

2. **OQ-2: How should the Decision Engine handle decisions where no plan passes the risk threshold?** The current model escalates the full decision to governance with all plans failing the threshold. An alternative would be to return an "undecidable" decision with evidence, allowing the requesting Engine to decide whether to proceed without authorization. This would shift risk acceptance to the requesting Engine, which may not have governance authority to accept risk.

3. **OQ-3: Should the Decision Engine produce "preliminary decisions" — quick, advisory evaluations that are not binding but inform the requesting Engine before the full pipeline runs?** A preliminary decision could reduce latency for time-sensitive decisions. The risk is that preliminary decisions may be treated as binding by consumers, or that the preliminary scoring diverges from the full evaluation. This would require a new output type and consumer contract clarification.

4. **OQ-4: How should the Decision Engine handle cross-goal decisions — decisions that involve plans serving multiple goals?** The current model assumes one goal per decision. Multi-goal decisions would require composite evaluation (are all goals satisfied by the selected plan?), potentially conflicting goals (plan A is best for goal 1, plan B is best for goal 2), and a more complex selection rationale. This would require extending the decision artifact structure and the scoring model.

---

## Completion Criteria

A.5.4 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with substantive content, structured per A.5.0's Engine RFC Section Mapping.
2. All 16 Specializable subsections contain Decision Engine-specific content (not template language).
3. All eight invariants are stated and expressible as testable assertions.
4. All seven responsibility groups map to at least one operation.
5. All lifecycle transitions produce corresponding events.
6. The Engine Ownership Contract addresses all seven mandatory elements.
7. The Engine Handoff Contract addresses all eight mandatory elements.
8. STD-010 metadata is fully compliant (all mandatory fields, correct table shape, correct heading).
9. No implementation scope (source code, APIs, persistence, LLM details, agent/swarm runtime) is present in any section.
10. Cross-engine alignment is verified — decision operations consume Context Engine, Knowledge Engine, and Planning Engine outputs as defined.
11. TPL-001 specialization compliance is verified (no mandatory sections removed, Engine-specific content as subsections within TPL-001 sections).
12. Framework Governance has reviewed and approved the RFC structure.
13. Version History records all changes from the prior version with rationale.

---

## Version History

| Version | Status | Traceability | Notes |
|:---|:---|:---|:---|
| `0.1.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-4` | Initial creation as independent Engine Specialization RFC with 33-section structure. Pre-TPL-001 alignment. |
| `0.2.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-4` | Expanded with Universal Section Contract compliance, strengthened validation, and normalized governance alignment per A.5.0 pre-refactoring template. |
| `0.3.0-draft` | Draft | `AI-DOS.V3.A.005.4` | Refactored to A.5.0/TPL-001 compliance: remapped from 33 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections per A.5.0 Appendix A mapping. Added 5 Design Decisions, 6 Risks, 4 Open Questions. Removed Completion Report (content migrated to Design Decisions, Risks, Validation). Updated Traceability ID from AI-DOS.V2.RUNTIME.A-5-4 to AI-DOS.V3.A.005.4. Updated Version from 0.2.0-draft to 0.3.0-draft. All content preserved; no authority changes. |

---

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, A.5.0, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.
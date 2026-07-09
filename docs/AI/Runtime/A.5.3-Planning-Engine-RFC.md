# A.5.3 — Planning Engine RFC

> Forge AI v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## 1. Status

This RFC is a draft, non-canonical Engine Architecture RFC for the Planning Engine, the third individual Engine specialization in Phase 2 of the Forge AI v4 Engine Platform.

Canonical Status: Non-canonical until reviewed and approved.

This document defines the architecture of the Planning Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Planning Engine's purpose, responsibilities, inputs, outputs, internal model, operations, events, ownership, and handoff contract. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

---

## Document Metadata

| Field | Value                                                                                                                                                                                                                                                                                                                                                                                                   |
|:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identifier | `FORGE-A-005.3`                                                                                                                                                                                                                                                                                                                                                                                         |
| Title | A.5.3 — Planning Engine RFC                                                                                                                                                                                                                                                                                                                                                                             |
| Version | `0.1.0-draft`                                                                                                                                                                                                                                                                                                                                                                                           |
| Status | Draft                                                                                                                                                                                                                                                                                                                                                                                                   |
| Canonical Status | Non-canonical until reviewed and approved                                                                                                                                                                                                                                                                                                                                                               |
| Classification | Engine Architecture RFC                                                                                                                                                                                                                                                                                                                                                                                 |
| Document Type | RFC                                                                                                                                                                                                                                                                                                                                                                                                     |
| Owner | Framework Architecture Team                                                                                                                                                                                                                                                                                                                                                                             |
| Maintainers | Framework Architecture Team                                                                                                                                                                                                                                                                                                                                                                             |
| Review Authority | Enterprise Documentation Standards Board                                                                                                                                                                                                                                                                                                                                                                |
| Approval Authority | Human Governance / Framework Governance                                                                                                                                                                                                                                                                                                                                                                 |
| Created | 2026-07-08                                                                                                                                                                                                                                                                                                                                                                                              |
| Last Updated | 2026-07-08                                                                                                                                                                                                                                                                                                                                                                                              |
| Lifecycle Phase | Draft                                                                                                                                                                                                                                                                                                                                                                                                   |
| Traceability ID | `FORGE-AI.V4.PHASE-2.ENGINE-03`                                                                                                                                                                                                                                                                                                                                                                         |
| Scope | Architecture of the Planning Engine — the Engine responsible for task decomposition, plan generation, plan revision, dependency management, and plan lifecycle governance within the Forge AI v4 Engine Platform.                                                                                                                                                                                       |
| Out of Scope | Source code, implementation, REST APIs, persistence mechanisms, database schema, Neo4j implementation, vector database configuration, caching infrastructure, LLM call orchestration, prompt engineering, model selection, agent runtime design, swarm runtime design, platform adapter specifications, and ProjectStatus updates.                                                                      |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/FrameworkGovernance.md`                                                                                                                                                                                                                                                                                                |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`                                                                                                        |
| Dependencies | Runtime Architecture (A.3); Engine Platform (A.4); Engine Kernel (A.4.1); Engine Contract (A.4.2); Engine Registry (A.4.3); Engine Lifecycle (A.4.4); Engine Communication (A.4.5); Engine State (A.4.6); Engine Capability (A.4.7); Metadata Standard (STD-010); Terminology Standard (STD-003); Engine Specialization RFC Template (A.5.0); Context Engine (A.5.1); Knowledge Engine (A.5.2)          |
| Consumes | Document metadata rules; canonical terminology; framework and artifact meta-models; Runtime Architecture; Engine Platform architecture; Engine Kernel, Contract, Registry, Lifecycle, Communication, State, and Capability RFCs; A.5.0 Template section contract; A.5.1 Context Engine resolved context snapshots and lifecycle events; A.5.2 Knowledge Engine retrieval results and knowledge entities |
| Produces | Planning Engine architecture specification; plan lifecycle model; task decomposition rules; plan generation contract; plan revision rules; dependency management model; plan validation contract; plan handoff contract; plan ownership definition                                                                                                                                                      |
| Related Specifications | A.5.1 — Context Engine RFC; A.5.2 — Knowledge Engine RFC; A.5.4 — Decision Engine RFC (future); A.5.5 — Execution Engine RFC (future); A.5.6 — Validation Engine RFC (future); A.5.9 — Memory Engine RFC (future)                                                                                                                                                                                       |
| Supersedes | None                                                                                                                                                                                                                                                                                                                                                                                                    |
| Superseded By | None                                                                                                                                                                                                                                                                                                                                                                                                    |
| Blocks | A.5.4 — Decision Engine RFC (Planning Engine must be certified before Decision Engine enters review); A.5.5 — Execution Engine RFC (Planning Engine must be certified before Execution Engine enters review)                                                                                                                                                                                            |
| Blocked By | A.5.0 — Engine Specialization RFC Template (template must be approved before Knowledge Engine enters review); A.5.1 — Context Engine RFC (Context Engine must be certified); A.5.2 — Knowledge Engine RFC (Knowledge Engine must be certified)                                                                                                                                                          |
| Promotion Requirements | Framework Governance review, STD-010 metadata validation, STD-003 terminology validation, Engine Platform alignment review, no implementation-scope confirmation, A.4.7 capability domain mapping, Context Engine and Knowledge Engine alignment review, approval by Human Governance / Framework Governance, and explicit canonical promotion                                                          |
| Certification Status | Not certified                                                                                                                                                                                                                                                                                                                                                                                           |
| Review Status | Not Reviewed                                                                                                                                                                                                                                                                                                                                                                                            |
| Compliance Level | L1 Draft                                                                                                                                                                                                                                                                                                                                                                                                |

---

## 3. Purpose

The Planning Engine exists to transform user intent and contextual state into structured, executable, and validated plans that the Execution Engine can carry out. While the Context Engine (A.5.1) provides the current state of the world and the Knowledge Engine (A.5.2) provides relevant domain knowledge, the Planning Engine bridges the gap between "what the user wants" and "what steps the system should take" by producing a decomposed, ordered, and dependency-aware plan.

A plan, in the context of this Engine, is a versioned, immutable artifact that consists of a goal statement, a set of plan steps, inter-step dependencies, resource requirements, constraints, success criteria, and a plan state that tracks execution progress. Plans are the primary output of the Planning Engine and the primary input to the Execution Engine (A.5.5, future). Plans are also consumed by the Decision Engine (A.5.4, future) for trade-off analysis and by the Validation Engine (A.5.6, future) for plan-level correctness checks.

Without a dedicated Planning Engine, the system would lack a structured mechanism for decomposing complex tasks, managing step dependencies, and adapting plans to changing context. Peer Engines would need to independently determine what to do and in what order, leading to uncoordinated execution, missed dependencies, and non-deterministic behaviour. The Planning Engine eliminates these risks by centralizing plan generation, revision, and lifecycle management.

The Planning Engine's purpose aligns with Engine Capability domain "Task Planning" as defined by A.4.7. The Planning Engine uniquely owns the capability of decomposing goals into ordered steps, managing inter-step dependencies, validating plan feasibility, and producing versioned plans that the Execution Engine can execute deterministically.

The Planning Engine does not execute plans — that is the Execution Engine's responsibility. The Planning Engine defines the architectural contract for plan operations: what a plan is, how it is generated, how it is revised, how dependencies are managed, how plans are validated, and how plans are handed off to the Execution Engine.

---

## 4. Mission

The mission of the Planning Engine is to produce validated, feasible, and contextually grounded plans that decompose user goals into executable steps with clear dependencies, constraints, and success criteria.

This mission translates into five mission-level objectives:

1. **Decomposability** — Every user goal that enters the Planning Engine is decomposed into a finite set of plan steps, where each step is a discrete, verifiable unit of work. Decomposition follows deterministic rules based on goal type, domain knowledge, and contextual constraints. The decomposition depth is bounded by configuration to prevent unbounded recursive decomposition.

2. **Feasibility** — Every plan produced by the Planning Engine is validated for feasibility before handoff. Feasibility means that all plan steps have satisfiable preconditions, all dependencies can be resolved, all resource requirements are within available limits, and no plan step contradicts the current contextual state or domain knowledge.

3. **Adaptability** — The Planning Engine can revise plans when the context changes, when execution feedback indicates a step failure, or when domain knowledge is updated. Plan revision produces a new plan version that preserves the original plan for auditability while incorporating the new information.

4. **Traceability** — Every plan step is traceable to the goal it serves, the knowledge that informed it, and the context that constrained it. This supports explainability — if a plan step produces an unexpected result, the traceability chain explains why that step was included and what assumptions it relied on.

5. **Determinism** — Given the same goal, context, and knowledge, the Planning Engine produces the same plan. This supports reproducibility, auditability, and the ability to compare plans across different contexts or knowledge states.

---

## 5. Engine Responsibilities

The Planning Engine is accountable for the following architectural responsibilities, grouped by functional domain:

### 5.1 Goal Intake and Analysis

- Receive planning requests that contain a goal statement, optional constraints, and optional preferences from peer Engines or from the Context Engine's user intent signals.
- Analyze the goal by retrieving relevant knowledge from the Knowledge Engine and retrieving the current context from the Context Engine.
- Classify the goal by type (single-step, multi-step, conditional, iterative), complexity, and domain.
- Determine whether the goal is actionable within the current context and knowledge state, or whether it requires additional context or knowledge before planning can proceed.

### 5.2 Task Decomposition

- Decompose the goal into plan steps using deterministic decomposition rules.
- Each plan step is assigned a step identifier, a description, preconditions, postconditions, expected outcomes, resource requirements, and constraints.
- Apply domain knowledge (procedural knowledge, rule sets) from the Knowledge Engine to inform step structure and ordering.
- Respect decomposition depth limits — if the goal requires deeper decomposition than the configured maximum, the Planning Engine produces a multi-phase plan where each phase is planned separately.

### 5.3 Dependency Management

- Identify dependencies between plan steps. A dependency exists when step B requires a result or state change produced by step A.
- Classify dependencies as strong (step B cannot start until step A completes successfully) or weak (step B can start but benefits from step A's completion).
- Detect dependency cycles and resolve them by introducing intermediate steps, relaxing dependency types, or flagging the cycle for governance review.
- Produce a dependency graph that represents the partial ordering of plan steps.

### 5.4 Plan Generation

- Assemble the decomposed steps and their dependencies into a coherent plan.
- Assign an execution order to steps that respects the dependency graph. Steps with no unresolved strong dependencies may be assigned to the same execution phase (parallelizable).
- Attach the current context version, the knowledge entity versions used, and the decomposition reasoning to the plan for traceability.
- Validate the complete plan against feasibility criteria (Section 13).

### 5.5 Plan Revision

- Receive revision triggers from the Context Engine (context changes), the Execution Engine (step failures or feedback), or the Knowledge Engine (knowledge updates that invalidate plan assumptions).
- Analyze the revision trigger to determine the scope of revision: full replan, partial replan (affecting a subset of steps), or step-level adjustment (modifying a single step's parameters).
- Produce a revised plan as a new plan version that references the original plan version it revises.
- Preserve the original plan version for auditability and comparison.

### 5.6 Plan Validation

- Validate every plan (new or revised) against feasibility criteria before handoff.
- Check precondition satisfiability, dependency resolvability, resource availability, constraint compliance, and knowledge consistency.
- Produce a validation report that lists all checks and their results.
- Block handoff to the Execution Engine if any critical validation check fails.

### 5.7 Plan Lifecycle Management

- Manage plans through their lifecycle: drafted, validated, active, executing, completed, failed, superseded, and retired.
- Track plan state transitions based on execution feedback from the Execution Engine.
- Support plan cancellation and graceful termination.
- Archive completed and superseded plans for historical reference and learning.

---

## 6. Non Responsibilities

The Planning Engine is explicitly not responsible for the following concerns. Each non-responsibility is paired with the component that owns it:

| Non-Responsibility | Owned By |
|:---|:---|
| Managing real-time contextual state | Context Engine (A.5.1) |
| Managing persistent knowledge | Knowledge Engine (A.5.2) |
| Making trade-off decisions between plan alternatives | Decision Engine (A.5.4, future) |
| Executing plan steps and producing side effects | Execution Engine (A.5.5, future) |
| Validating execution outputs against requirements | Validation Engine (A.5.6, future) |
| Long-term memory and learning from past plans | Memory Engine (A.5.9, future) |
| Persisting plans to durable storage | Platform persistence layer (out of scope) |
| Scheduling step execution timing | Execution Engine (A.5.5, future) |
| Resource allocation and provisioning | Platform resource management (out of scope) |
| Governing Engine Platform behaviour | Framework Governance |
| Managing Engine lifecycle transitions | Engine Lifecycle (A.4.4) |
| Managing inter-Engine communication transport | Engine Communication (A.4.5) |
| Maintaining the Engine capability registry | Engine Registry (A.4.3) |
| Invoking LLMs for plan generation or reasoning | AI Consumption layer (out of scope) |

The Planning Engine's boundary is defined by the transition from goal intent to validated plan. It defines the architectural contract for plan operations without implementing execution, resource allocation, or persistence.

---

## 7. Engine Position

### 7.1 Topological Position

The Planning Engine sits between the information Engines (Context, Knowledge) and the action Engines (Decision, Execution, Validation). It consumes contextual state and domain knowledge, and produces validated plans for downstream reasoning and execution.

```
  ┌──────────────┐     ┌──────────────┐
  │   Context     │     │  Knowledge   │
  │   Engine      │     │  Engine      │
  │  (A.5.1)      │     │  (A.5.2)     │
  │  Snapshots    │     │  Retrieval   │
  └──────┬───────┘     └──────┬───────┘
         │                     │
         │  (context +         │  (knowledge +
         │   intent)           │   procedures)
         │                     │
         └──────────┬──────────┘
                    │
                    ▼
       ┌─────────────────────────┐
       │     Planning Engine      │
       │    (A.5.3)               │
       │  Analyze → Decompose →   │
       │  Depend → Generate →     │
       │  Validate → Revise       │
       └───┬─────────┬────────┬───┘
           │         │        │
    ┌──────┘         │        └──────┐
    ▼                ▼                ▼
┌──────────┐  ┌──────────┐    ┌──────────┐
│  Decision│  │Execution │    │Validation│
│  Engine  │  │ Engine   │    │ Engine   │
│ (A.5.4)  │  │ (A.5.5)  │    │ (A.5.6)  │
└──────────┘  └──────────┘    └──────────┘
```

### 7.2 Data Flow Characterization

The Planning Engine has a well-defined input-output pattern:

- **From Context Engine** — Resolved context snapshots provide the current task state, user intent, environmental constraints, and session parameters. The Planning Engine pulls context at the start of each planning cycle.
- **From Knowledge Engine** — Knowledge retrieval results provide domain knowledge, procedural knowledge, constraints, and rules that inform plan step structure and ordering. The Planning Engine pulls knowledge based on the goal analysis.
- **From Execution Engine** — Execution feedback (step completion, step failure, execution results) triggers plan revision. The Planning Engine consumes execution events asynchronously.
- **To Decision Engine** — Plan alternatives and feasibility analysis provide the Decision Engine with options to evaluate. The Decision Engine may request plan comparison or alternative generation.
- **To Execution Engine** — Validated plans are the primary output. The Execution Engine consumes plans to execute steps in order.
- **To Validation Engine** — Plans are provided for plan-level validation (structural correctness, dependency completeness, constraint compliance).

The Planning Engine's topology is a transform — it receives information and knowledge, applies deterministic rules, and produces plans. It is not a hub like the Context Engine; it has clear, bounded inputs and outputs.

### 7.3 Unavailability Impact

If the Planning Engine is unavailable, no new plans can be generated and no existing plans can be revised. The Execution Engine cannot receive new execution instructions. The Decision Engine cannot evaluate plan alternatives. The Engine Platform's graceful degradation model (A.4.4) should define fallback behaviour — the Planning Engine defines what "no-plan" means but does not define how Engines compensate.

---

## 8. Consumed Inputs

The Planning Engine requires the following typed inputs:

### 8.1 Planning Requests

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Planning Request | Structured request (goal statement, constraints, preferences, priority, requesting Engine) | Peer Engines, Context Engine (user intent signal) | Goal statement non-empty; constraints structurally valid; priority within range | Request rejected; rejection notice with specific errors |
| Revision Trigger | Structured event (trigger type, trigger source, affected plan version, trigger context) | Context Engine (context change), Execution Engine (step feedback), Knowledge Engine (knowledge update) | Trigger type valid; affected plan version exists; trigger context present | Trigger logged but not processed if plan version not found |
| Plan Query | Structured request (plan identifier or version, query type) | Peer Engines, audit systems | Plan identifier format valid | Query rejected with "not found" if plan does not exist |

### 8.2 Context and Knowledge Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Context Snapshot | Versioned resolved context | Context Engine (A.5.1) | Snapshot version valid and accessible | Planning proceeds with last known context; staleness flagged |
| Knowledge Retrieval Result | Ranked knowledge entities with provenance | Knowledge Engine (A.5.2) | Result set valid; entities meet confidence threshold | Planning proceeds with available knowledge; missing knowledge gaps flagged |
| Procedural Knowledge | Step-structured procedural entities | Knowledge Engine (A.5.2) | Procedural entities validated and active | Planning uses generic decomposition rules if no procedural knowledge available |
| Constraint Knowledge | Domain and task constraints | Knowledge Engine (A.5.2) | Constraint entities validated and active | Planning uses default constraints; missing constraints flagged |

### 8.3 Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Decomposition Rules | Step decomposition patterns by goal type and domain | Engine configuration | Rule structure valid; no circular references | Default decomposition rules applied |
| Maximum Decomposition Depth | Maximum recursive decomposition levels (integer) | Engine configuration | Positive integer within range [1, max] | Default depth of 3 applied |
| Plan Validation Policy | Validation check configuration (which checks are critical vs. advisory) | Governance configuration | Policy structure valid | All checks treated as critical |
| Revision Policy | Conditions under which revision is automatic vs. requires governance approval | Governance configuration | Policy conditions well-defined | All revisions require governance approval |
| Dependency Resolution Strategy | Strategy for resolving dependency cycles (introduce intermediate, relax, escalate) | Engine configuration | Strategy type valid | Default: escalate to governance |
| Parallelization Policy | Rules for identifying parallelizable steps | Engine configuration | Policy structure valid | Steps executed sequentially (no parallelization) |

All inputs are versioned. Planning requests carry a request identifier and timestamp. Context references carry the Context Engine snapshot version. Knowledge references carry the Knowledge Engine entity versions used.

---

## 9. Produced Outputs

The Planning Engine produces the following typed outputs:

### 9.1 Plans

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Validated Plan | Versioned plan containing goal, steps, dependencies, constraints, success criteria, context reference, knowledge references, and validation report | Execution Engine (primary), Decision Engine, Validation Engine | Monotonic incrementing plan version; immutable once validated | All critical validation checks pass; dependency graph acyclic; all preconditions satisfiable; all steps have unique identifiers |

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Plan Delta | Differential update describing changes between plan versions | Execution Engine, Decision Engine | References parent plan version | Delta applies cleanly to parent version; no orphaned step references |

### 9.2 Planning Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Planning Record | Full record of the planning process: goal analysis, knowledge used, decomposition reasoning, dependency analysis | Audit systems, explainability | Immutable per plan version | All references valid; reasoning chain complete |
| Validation Report | Per-plan validation results with pass/fail/warning per check | Execution Engine, audit systems, Validation Engine | Immutable per plan version | All checks accounted for |
| Revision Record | Per-revision record: trigger, scope, changes, affected steps, reasoning | Audit systems, explainability | Immutable per revision | Trigger reference valid; scope accurate; changes traceable |

### 9.3 Planning Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Plan Drafted | Event emitted when a plan passes decomposition but awaits full validation | Audit systems, Decision Engine | Event-scoped; references drafted plan version | Plan structure valid; steps have identifiers |
| Plan Validated | Event emitted when a plan passes all critical validation checks | Execution Engine, Decision Engine, Validation Engine | Event-scoped; references validated plan version | All critical checks pass |
| Plan Revised | Event emitted when a plan is revised based on a trigger | Execution Engine, audit systems | Event-scoped; references old and new plan versions | New plan version valid; revision trigger documented |
| Plan Superseded | Event emitted when a revised plan replaces the active plan | Execution Engine, audit systems | Event-scoped; references old and new plan versions | Superseding plan validated |
| Plan Completed | Event emitted when all plan steps are marked as completed | Execution Engine, audit systems, Memory Engine | Event-scoped; references completed plan version | All steps in completed state |
| Plan Failed | Event emitted when a plan cannot proceed due to unrecoverable step failure | Execution Engine, audit systems | Event-scoped; references failed plan version | Failure reason and failing step documented |

All plans are immutable once validated. Plan revisions produce new plan versions; corrections never modify existing plans. Output contracts are explicit enough for consuming Engines to validate received plans against the schemas defined here.

---

## 10. Engine Lifecycle

### 10.1 Initialization

The Planning Engine initializes when the Engine Platform starts. During initialization:

- Registers with the Engine Registry (A.4.3) as a Task Planning capability provider.
- Loads configuration inputs (decomposition rules, maximum depth, validation policy, revision policy, dependency strategy, parallelization policy).
- Establishes communication channels with the Context Engine, Knowledge Engine, and potential consuming Engines via the Engine Communication model (A.4.5).
- Subscribes to execution feedback events from the Execution Engine (when available) and context change events from the Context Engine.
- Emits a `Planning Engine Initialized` event.

### 10.2 Startup

After initialization:

- Confirms connectivity with the Context Engine and Knowledge Engine.
- Verifies that context pull and knowledge retrieval operations succeed.
- Performs a readiness check by processing a test planning request.
- Transitions to steady-state operation upon successful readiness confirmation.

### 10.3 Steady-State Operation

In steady state, the Planning Engine:

- Accepts and processes planning requests (goal decomposition, plan generation, validation).
- Monitors for revision triggers (context changes, execution feedback, knowledge updates).
- Processes plan queries from peer Engines.
- Produces planning records, validation reports, and revision records for auditability.

The Planning Engine operates on a request-driven model — it generates plans when requested, not on a periodic cycle. Revision triggers are processed asynchronously.

### 10.4 Degradation

- **Request backlog** — When planning requests exceed capacity, the Planning Engine prioritizes revision requests over new planning requests, as revisions may unblock ongoing execution.
- **Context Engine unavailable** — The Planning Engine continues to generate plans using the last known context, with a staleness warning attached to the plan.
- **Knowledge Engine unavailable** — The Planning Engine continues to generate plans using default decomposition rules, with a knowledge-gap warning attached to the plan.
- **Resource pressure** — When the plan set size (active + archived plans) exceeds configured limits, the Planning Engine archives the oldest non-active plans.

### 10.5 Shutdown

During graceful shutdown:

- Completes all in-progress planning operations.
- Marks all active plans with their current state.
- Emits a `Planning Engine Shutdown` event with a state summary (active plans, pending revisions, in-progress operations).
- Unsubscribes from events.
- Deregisters from the Engine Registry.

### 10.6 Restart and Recovery

On restart:

- Re-establishes communication channels.
- Retrieves the current context from the Context Engine.
- Re-subscribes to events.
- Recovers active plan state from the persistence layer (plan versions, step states, validation records).
- Emits a `Planning Engine Recovered` event.
- Resumes steady-state operation.

Recovery-critical state: all active plan versions with their step states, the most recent context and knowledge references, and configuration inputs. In-progress planning operations are transient and do not survive restart — they must be resubmitted.

---

## 11. Internal Engine Model

### 11.1 Conceptual Overview

The Planning Engine's internal model consists of five processing stages that transform a goal into a validated plan:

```
Goal Analyzer → Decomposer → Dependency Resolver → Plan Assembler → Plan Validator
       ↑                                                              │
       │         ┌──────────────────────────────────────────────────┘
       │         │
       └─────────┘
                (revision loop: validated plan may be
                 re-analyzed when revision triggers arrive)
```

### 11.2 Goal Analyzer

The Goal Analyzer is the entry point for all planning operations. It performs the following:

1. **Goal Parsing** — Extracts the goal statement, constraints, preferences, and priority from the planning request.
2. **Context Retrieval** — Pulls the current context snapshot from the Context Engine to understand the task state, user intent, and environmental constraints.
3. **Knowledge Retrieval** — Submits knowledge retrieval requests to the Knowledge Engine for domain knowledge, procedural knowledge, and constraints relevant to the goal.
4. **Goal Classification** — Classifies the goal by type (single-step, multi-step, conditional, iterative), complexity (simple, moderate, complex), and domain.
5. **Actionability Assessment** — Determines whether the goal is immediately actionable or requires additional context or knowledge. If not actionable, produces an "actionability block" report that identifies what is missing.

The Goal Analyzer produces a Goal Analysis Record that captures the parsed goal, the context version used, the knowledge entities retrieved, the classification, and the actionability assessment. This record is the primary input to the Decomposer.

### 11.3 Decomposer

The Decomposer transforms the goal analysis into a set of plan steps. It operates through three stages:

1. **Pattern Matching** — Matches the classified goal against the decomposition rules loaded from configuration. Each rule defines a step pattern for a specific goal type and domain. For example, a "data analysis" goal type may have a pattern: collect → validate → analyze → interpret → report.

2. **Step Instantiation** — Instantiates the matched pattern with goal-specific content. Each step in the pattern is assigned a description, preconditions (drawn from the goal analysis), postconditions, expected outcomes, resource requirements, and constraints.

3. **Knowledge-Grounded Refinement** — Refines each instantiated step using the retrieved procedural knowledge. If procedural knowledge specifies additional sub-steps, preconditions, or constraints for a given goal type, those are incorporated. If the decomposition depth limit is reached, the remaining goal complexity is captured as a single step with a "requires further planning" annotation.

The Decomposer is deterministic: the same goal analysis and the same decomposition rules produce the same set of plan steps.

### 11.4 Dependency Resolver

The Dependency Resolver analyzes the plan steps produced by the Decomposer and constructs the dependency graph:

1. **Dependency Identification** — For each step, examines its preconditions and determines which other steps produce the required preconditions as postconditions. A dependency edge is created from the producing step to the consuming step.

2. **Dependency Classification** — Each dependency is classified as strong (the consuming step cannot start until the producing step completes) or weak (the consuming step can start but benefits from the producing step's completion).

3. **Cycle Detection** — The dependency graph is checked for cycles. If a cycle is detected, the Dependency Resolver applies the configured cycle resolution strategy:
   - **Introduce intermediate** — Add a new step that breaks the cycle by mediating between the conflicting steps.
   - **Relax** — Convert a strong dependency to a weak dependency to break the cycle.
   - **Escalate** — Flag the cycle for governance review; the plan cannot proceed until the cycle is resolved.

4. **Parallelization Analysis** — Identifies steps that have no unresolved strong dependencies and can be assigned to the same execution phase. These steps are marked as "parallelizable" in the plan.

The Dependency Resolver produces a Dependency Graph that is a directed acyclic graph (DAG) representing the partial ordering of plan steps.

### 11.5 Plan Assembler

The Plan Assembler constructs the final plan from the decomposed steps, the dependency graph, and the goal analysis:

1. **Step Ordering** — Assigns a topological order to the steps based on the dependency graph. Steps in the same execution phase receive the same phase identifier.

2. **Plan Metadata Attachment** — Attaches the goal analysis record, the context version, the knowledge entity versions, the decomposition reasoning, and the dependency analysis to the plan for traceability.

3. **Success Criteria Definition** — Derives plan-level success criteria from the goal statement and the expected outcomes of the final steps. Each success criterion is a verifiable condition.

4. **Plan Versioning** — Assigns a unique version identifier to the assembled plan.

The Plan Assembler produces a Draft Plan that is ready for validation.

### 11.6 Plan Validator

The Plan Validator checks the draft plan against feasibility criteria:

1. **Structural Validation** — Verifies that all steps have unique identifiers, all step references are valid, and the dependency graph is acyclic.

2. **Precondition Satisfiability** — For each step, verifies that its preconditions can be satisfied by the combination of the initial context state and the postconditions of preceding steps.

3. **Dependency Resolvability** — Verifies that the dependency graph has a valid topological order and that no step is orphaned (every step is reachable from the goal).

4. **Resource Availability** — Verifies that the total resource requirements across all steps are within available limits (as reported by the context snapshot).

5. **Constraint Compliance** — Verifies that all plan-level and step-level constraints are satisfied by the proposed plan structure.

6. **Knowledge Consistency** — Verifies that the plan does not contradict the knowledge entities used during planning.

7. **Validation Report Production** — Assembles the results of all checks into a validation report with pass/fail/warning per check.

If all critical checks pass, the plan transitions from "drafted" to "validated" and becomes available for handoff to the Execution Engine. If any critical check fails, the plan remains in "drafted" state and the specific failures are reported to the requesting Engine.

### 11.7 Revision Loop

When a revision trigger arrives, the Planning Engine may re-enter the pipeline at the appropriate stage:

- **Context change** — Re-enters at Goal Analyzer (new context retrieval) → proceeds through the full pipeline → produces a revised plan.
- **Execution feedback (step failure)** — Re-enters at Dependency Resolver (affected steps may need reordering or replacement) → proceeds through Assembler and Validator.
- **Knowledge update** — Re-enters at Goal Analyzer (new knowledge retrieval) → proceeds through the full pipeline → produces a revised plan.

The revision loop always produces a new plan version that references the original plan version it revises. The original plan is preserved for auditability.

---

## 12. Resolution Rules

### 12.1 Goal Ambiguity Resolution

When the goal statement is ambiguous (multiple interpretations, unclear scope, missing constraints), the Planning Engine applies the following rules:

1. **Narrow by context** — Use the current context snapshot to disambiguate. If the context provides signals that narrow the interpretation, the narrowed interpretation is used.
2. **Narrow by knowledge** — Use domain knowledge to determine the most common or standard interpretation for the goal type.
3. **Conservative scoping** — If disambiguation is not possible, the Planning Engine adopts the conservative (narrower) interpretation and produces a plan for that interpretation. The ambiguity is documented in the planning record.
4. **Multi-interpretation planning** — If the goal has multiple valid interpretations and none can be eliminated, the Planning Engine produces a plan for the primary interpretation and documents the alternative interpretations as "deferred goals" that may require separate planning cycles.

### 12.2 Dependency Cycle Resolution

When the Dependency Resolver detects a cycle in the dependency graph, it applies the configured Dependency Resolution Strategy:

**Strategy 1: Introduce Intermediate (Default)**
1. Identify the cycle edges (the minimum set of edges whose removal breaks all cycles).
2. For each cycle edge, create an intermediate step that produces a mediating state satisfying both the producing and consuming steps' requirements.
3. Validate the intermediate step (preconditions, postconditions, resource requirements).
4. If the intermediate step cannot be validated, escalate to the next strategy.

**Strategy 2: Relax**
1. Identify the weakest dependency edge in the cycle (based on dependency strength and step criticality).
2. Convert the strong dependency to a weak dependency.
3. Re-run cycle detection. If cycles remain, repeat. If no more edges can be relaxed, escalate.

**Strategy 3: Escalate**
1. Produce a `Dependency Cycle Detected` event with the full cycle description.
2. Emit the event to Framework Governance.
3. Block the plan from proceeding until the cycle is resolved externally.

### 12.3 Plan Revision Scope Resolution

When a revision trigger arrives, the Planning Engine determines the revision scope:

| Trigger Type | Default Scope | Expanded Scope When |
|:---|:---|:---|
| Context change (minor) | Steps whose preconditions reference the changed context element | No expansion unless dependency analysis reveals downstream impact |
| Context change (major — goal-relevant) | Full replan | Always full replan |
| Execution feedback (single step failure) | The failed step and its direct dependents | Expanded if the failure affects shared resources or constraints |
| Execution feedback (multiple step failures) | All failed steps and their dependents | Expanded to full replan if more than 50% of steps are affected |
| Knowledge update (procedure change) | Steps that were informed by the updated procedure | Expanded if the procedure affects step ordering or dependencies |
| Knowledge update (constraint change) | Steps that are constrained by the updated constraint | Expanded if the constraint affects the dependency graph |

---

## 13. Validation Rules

### 13.1 Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Planning request schema | Request structure matches the expected schema (goal, constraints, preferences, priority) | Request rejected; specific violations listed |
| Goal statement non-empty | Goal statement contains at least one actionable intent | Request rejected; "empty goal" error |
| Revision trigger validity | Trigger type valid; affected plan version exists; trigger context present | Trigger logged; not processed if plan not found |
| Context reference validity | Referenced context snapshot version is accessible | Planning proceeds with last known context; staleness warning |
| Knowledge reference validity | Referenced knowledge entities are accessible and active | Planning proceeds with available knowledge; gaps flagged |

### 13.2 Plan Validation (Critical Checks)

Every plan must pass the following critical validation checks before being handed off to the Execution Engine:

| Check | Rule | Failure Mode |
|:---|:---|:---|
| **Step uniqueness** | All step identifiers within a plan are unique | Plan blocked; duplicate identifiers listed |
| **Dependency acyclicity** | The dependency graph is a directed acyclic graph (DAG) | Plan blocked; cycle edges identified; cycle resolution triggered |
| **Precondition satisfiability** | Every step's preconditions can be satisfied by the initial context and preceding step postconditions | Plan blocked; unsatisfiable preconditions listed |
| **Goal coverage** | The postconditions of the final steps collectively satisfy the goal statement | Plan blocked; gap analysis provided |
| **Resource feasibility** | Total resource requirements across all steps are within available limits (per context snapshot) | Plan blocked; resource overages listed |
| **Constraint compliance** | All plan-level and step-level constraints are satisfied | Plan blocked; violated constraints listed |
| **Knowledge consistency** | The plan does not contradict the knowledge entities used during planning | Plan blocked; contradictions listed |

### 13.3 Plan Validation (Advisory Checks)

Advisory checks produce warnings but do not block plan handoff:

| Check | Rule | Advisory Condition |
|:---|:---|:---|
| **Step complexity** | No single step exceeds a configured complexity threshold | Warning if exceeded; consider further decomposition |
| **Plan depth** | The plan does not exceed the maximum recommended depth | Warning if exceeded |
| **Parallelization opportunity** | Steps that could be parallelized but are not marked as such | Informational; suggests optimization |
| **Knowledge freshness** | All knowledge entities used are within their freshness window | Warning if any entity is stale |
| **Context staleness** | The context snapshot used is within the freshness window | Warning if context is stale |

### 13.4 State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Drafted → Validated | All critical checks pass | Transition blocked; validation failures listed |
| Validated → Active | Execution Engine has acknowledged receipt | Transition proceeds (active plans need not be in execution) |
| Active → Executing | Execution Engine has started executing at least one step | Transition updated by Execution Engine feedback |
| Executing → Completed | All steps marked as completed | Transition updated by Execution Engine feedback |
| Executing → Failed | At least one step has unrecoverably failed | Transition updated by Execution Engine feedback |
| Active → Superseded | Superseding plan is validated | Transition blocked until superseding plan available |
| Failed → Revised | Revision trigger received; revised plan is validated | Revision proceeds through pipeline |
| Superseded → Retired | No active references from any Engine or task | Transition blocked if active references exist |

---

## 14. Engine Invariants

The following properties must always hold for the Planning Engine regardless of state, inputs, or operations:

### Invariant 1: Plan Version Monotonicity

Every plan version has a strictly greater version identifier than all previous versions of the same plan. No two plan versions share the same identifier. The plan version chain is a strictly monotonically increasing sequence per plan.

### Invariant 2: Plan Immutability After Validation

Once a plan has been validated (transitioned from "drafted" to "validated"), it cannot be modified. Any correction or revision produces a new plan version. No operation on the Planning Engine mutates a validated plan.

### Invariant 3: Dependency Graph Acyclicity

The dependency graph of every validated plan is a directed acyclic graph (DAG). If cycles are detected during plan generation, they must be resolved before the plan can be validated. No validated plan may contain a dependency cycle.

### Invariant 4: Goal-Plan Traceability

Every plan step is traceable to the goal it serves. The planning record documents the decomposition reasoning that connects each step to a portion of the goal. No plan step exists without a documented connection to the goal or to another step that is itself connected to the goal.

### Invariant 5: Single Active Plan Per Goal

For any given goal identifier, there is at most one active (non-superseded, non-retired) plan. A new plan for the same goal supersedes the previous active plan before becoming active itself.

### Invariant 6: Validation-Before-Handoff

No plan is handed off to the Execution Engine unless it has passed all critical validation checks defined in Section 13.2. The validation report must be attached to the plan as part of the handoff.

### Invariant 7: Revision Traceability

Every plan revision references the plan version it revises, the trigger that caused the revision, the scope of the revision, and the specific changes made. No plan revision exists without a documented reason.

---

## 15. Engine Operations

### 15.1 Planning Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `create_plan(goal, constraints, preferences, priority)` | Generate a validated plan from a goal | Planning request | Validated plan with planning record and validation report | Goal analysis, knowledge retrieval, decomposition, dependency resolution, assembly, validation | Goal ambiguous (conservative scoping applied); validation failure (plan blocked with report) |
| `revise_plan(plan_version, trigger, scope)` | Revise an existing plan based on a trigger | Plan version, revision trigger, revision scope | Revised plan (new version) with revision record | Re-analysis, re-decomposition, re-validation as needed | Trigger invalid; revision scope exceeds limits; validation failure |

### 15.2 Query Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `get_plan(plan_id)` | Retrieve the current version of a plan | Plan identifier | Plan with full metadata, steps, dependencies, and validation report | None | Plan not found (error) |
| `get_plan_version(plan_id, version)` | Retrieve a specific version of a plan | Plan identifier, version number | Plan version with metadata | None | Plan or version not found (error) |
| `get_planning_record(plan_id)` | Retrieve the planning process record for a plan | Plan identifier | Planning record (goal analysis, knowledge used, decomposition reasoning) | None | Plan or record not found (error) |
| `get_dependency_graph(plan_id)` | Retrieve the dependency graph for a plan | Plan identifier | Dependency graph (nodes, edges, classifications) | None | Plan not found (error) |

### 15.3 Lifecycle Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `cancel_plan(plan_id, reason)` | Cancel an active plan | Plan identifier, cancellation reason | `Plan Superseded` event; plan lifecycle transitioned | Plan marked as superseded; Execution Engine notified | Plan not active (error) |
| `archive_plan(plan_id)` | Archive a completed or superseded plan | Plan identifier | Archive confirmation | Plan moved to archive; no longer active | Plan still has active references (blocked) |

### 15.4 Feedback Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `receive_execution_feedback(feedback)` | Process execution feedback from the Execution Engine | Execution feedback (step ID, result, status) | Feedback acknowledgment; may trigger plan revision | Step state updated; revision evaluated | Feedback references non-existent step or plan (logged and discarded) |

Operations are idempotent where applicable. `create_plan` with the same goal and context returns the existing plan if one exists for that goal and context. `receive_execution_feedback` with a duplicate feedback record returns the existing acknowledgment.

---

## 16. Engine Events

### 16.1 Events Emitted

| Event | Trigger | Payload | Consumers | Expected Consumer Response |
|:---|:---|:---|:---|:---|
| `Planning Engine Initialized` | Startup completes | Configuration summary, registered capability | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge; submit planning requests |
| `Plan Drafted` | Plan passes decomposition but awaits validation | Plan version, step count, goal summary | Audit systems, Decision Engine | Monitor; Decision Engine may prepare for evaluation |
| `Plan Validated` | Plan passes all critical validation | Plan version, validation report summary, step count | Execution Engine, Decision Engine, Validation Engine | Execution Engine may request plan for execution |
| `Plan Revised` | Plan is revised based on a trigger | Old version, new version, revision trigger, scope | Execution Engine, audit systems | Execution Engine updates to new plan version |
| `Plan Superseded` | Active plan is replaced by a revised plan | Old plan version, new plan version, reason | Execution Engine, audit systems | Execution Engine ceases executing old plan; switches to new plan |
| `Plan Completed` | All plan steps marked as completed | Plan version, completion summary, step results | Execution Engine, audit systems, Memory Engine | Archive plan; Memory Engine may store for learning |
| `Plan Failed` | Plan cannot proceed due to unrecoverable failure | Plan version, failing step, failure reason | Execution Engine, audit systems, Context Engine | Execution Engine halts; Context Engine updates with failure state |
| `Dependency Cycle Detected` | Unresolvable dependency cycle found | Cycle description, affected steps, resolution attempts | Framework Governance | Review cycle; provide resolution guidance |
| `Planning Engine Shutdown` | Planning Engine enters graceful shutdown | State summary (active plans, pending revisions) | All peer Engines, Engine Lifecycle (A.4.4) | Cease planning requests |
| `Planning Engine Recovered` | Planning Engine completes restart recovery | Recovery timestamp, recovered plan count | All peer Engines, Engine Lifecycle (A.4.4) | Resume planning requests |

### 16.2 Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Context Updated` | Context Engine (A.5.1) | Evaluate whether context change triggers plan revision for active plans |
| `Context Compacted` | Context Engine (A.5.1) | Update context references for active plans |
| `Knowledge Superseded` | Knowledge Engine (A.5.2) | Evaluate whether superseded knowledge affects active plans; trigger revision if applicable |
| `Knowledge Deprecated` | Knowledge Engine (A.5.2) | Evaluate whether deprecated knowledge affects active plans; trigger revision if applicable |
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine may request plans, make planning services available |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list |
| `Configuration Updated` | Governance or Engine configuration | Reload configuration; re-evaluate active plans if rules changed |

---

## 17. Dependencies

The Planning Engine depends on the following upstream components, consistent with the Universal Section Contract (Section 4 of A.5.0):

- **Engine Platform (A.4)** — Capability model, Engine contract, overall architectural context.
- **Engine Kernel (A.4.1)** — Execution environment and foundational Engine services.
- **Engine Contract (A.4.2)** — Contract interface the Planning Engine must implement.
- **Engine Registry (A.4.3)** — Registry services for Engine discovery and consumer management.
- **Engine Lifecycle (A.4.4)** — Lifecycle state machine specialized by Section 10.
- **Engine Communication (A.4.5)** — Inter-Engine messaging and event delivery.
- **Engine State (A.4.6)** — State model for the Planning Engine's internal state.
- **Engine Capability (A.4.7)** — Maps the Planning Engine to "Task Planning" capability domain.
- **Context Engine (A.5.1)** — Provides resolved context snapshots for goal analysis and plan grounding. The Planning Engine depends on the Context Engine being registered but can operate on the last known context if the Context Engine is temporarily unavailable.
- **Knowledge Engine (A.5.2)** — Provides knowledge retrieval for domain knowledge, procedural knowledge, and constraints. The Planning Engine depends on the Knowledge Engine being registered but can operate with default decomposition rules if the Knowledge Engine is temporarily unavailable.
- **STD-010, STD-003, STD-000, M.0, M.1** — Standards and meta-models as defined in Normative References.

---

## 18. Engine State

### 18.1 State Dimensions

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Decomposition rules, maximum depth, validation policy, revision policy, dependency strategy, parallelization policy | Low — governance-authorized changes only |
| **Active Plans State** | Current set of active plans with their versions, step states, and validation reports | Medium — changes with plan creation, revision, and execution feedback |
| **Plan Archive State** | Historical plans (completed, failed, superseded) with their full records | Low — append-only; grows over time |
| **Request Queue State** | Pending and in-progress planning requests | High — changes with every incoming request |
| **Context Reference State** | Most recent Context Engine snapshot version used for planning | Medium — updates with context events |
| **Knowledge Reference State** | Knowledge entity versions used in active plans | Medium — updates with knowledge events |
| **Lifecycle State** | Current Engine lifecycle phase (per A.4.4) | Low — changes only at lifecycle transitions |

### 18.2 State Consistency

- Active Plans State is consistent with the Context Reference State — every active plan references a valid context version.
- Active Plans State is consistent with the Knowledge Reference State — every active plan references valid knowledge entity versions.
- No active plan references a superseded or deprecated knowledge entity without a staleness flag.
- The Plan Archive State contains only plans that have been fully transitioned out of the active state.

### 18.3 State Recovery

Recovery-critical state: Active Plans State (all active plan versions with step states), Configuration State, and the most recent Context and Knowledge references. The Request Queue State is transient. On recovery, the Planning Engine assumes the persistence layer provides the plan data and resumes from the last consistent state.

---

## 19. AI Consumption Rules

### 19.1 AI Consumption Boundary

The Planning Engine does not invoke LLMs or AI models as part of its core architecture. Goal analysis, task decomposition, dependency resolution, plan assembly, and plan validation are all deterministic operations based on defined rules, configuration patterns, and knowledge entities. The Planning Engine does not use AI for plan generation, step ordering, or feasibility assessment.

### 19.2 When AI May Be Involved

The Planning Engine may receive goals that were formulated with AI assistance in other Engines. In this case, the Planning Engine treats the goal the same as any other goal — it is parsed, analyzed, and decomposed according to the same rules. The Planning Engine does not need to know whether the goal originated from an AI process.

### 19.3 Prohibited AI Usage

- The Planning Engine shall not use LLM calls to decompose goals.
- The Planning Engine shall not use LLM calls to generate plan steps.
- The Planning Engine shall not use LLM calls to resolve dependency cycles.
- The Planning Engine shall not use LLM calls to validate plans.
- The Planning Engine shall not use prompt engineering or model selection in any capacity.

---

## 20. Runtime Interaction Rules

### 20.1 Interaction Model

The Planning Engine interacts with the runtime through the Engine Kernel (A.4.1) and Engine Communication (A.4.5). It does not interact directly with the agent runtime or swarm runtime.

### 20.2 Synchronous Interactions

- `get_plan()` — Synchronous. Returns the plan or "not found".
- `get_plan_version()` — Synchronous. Returns the plan version or "not found".
- `get_planning_record()` — Synchronous. Returns the record or "not found".
- `get_dependency_graph()` — Synchronous. Returns the graph or "not found".

### 20.3 Asynchronous Interactions

- `create_plan()` — Asynchronous. Caller receives acknowledgment; planning pipeline runs asynchronously. Caller is notified when the plan is validated (or fails validation).
- `revise_plan()` — Asynchronous. Caller receives acknowledgment; revision pipeline runs asynchronously.
- `cancel_plan()` — Asynchronous. Caller receives acknowledgment; cancellation and event emission happen asynchronously.
- `receive_execution_feedback()` — Asynchronous. Feedback is queued and processed in order.

### 20.4 Concurrency Rules

- Multiple planning requests may be processed concurrently if they operate on different goals.
- Planning requests for the same goal are serialized — only one planning operation per goal at a time.
- Plan queries do not block planning operations and vice versa.
- Revision operations on a plan serialize with planning operations on the same plan.
- Execution feedback is processed in FIFO order.

---

## 21. Extension Model

### 21.1 Extension Points

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom decomposition rules | Additional step patterns for new goal types or domains | Must define pattern, step structure, and depth behaviour; registered through Engine configuration |
| Custom validation checks | Additional plan validation criteria for specific domains | Must not contradict existing checks; registered through Engine configuration |
| Custom revision triggers | Additional event types that trigger plan revision | Must define trigger source, scope, and handling; requires Framework Governance approval |
| Custom dependency classification | Additional dependency types beyond strong and weak | Must be compatible with DAG acyclicity requirement; requires Framework Governance approval |

### 21.2 Extension Constraints

- Extensions must not modify the Planning Engine's invariants (Section 14).
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the validation-before-handoff requirement.
- Extensions that affect plan structure or dependency semantics require Framework Governance review.
- Extensions must be backward-compatible — existing plans must remain valid after an extension is added.

---

## 22. Knowledge Graph Integration

### 22.1 Integration Model

The Planning Engine's plans, steps, and dependency graphs may be projected into the knowledge graph for cross-reference, historical analysis, and plan pattern mining. Integration is mediated through the Engine Platform's knowledge graph projection layer.

### 22.2 Projection Points

| Projection | Content | Purpose |
|:---|:---|:---|
| Plan Node | Plan identifier, version, goal, step count, status, context version | Enable plan-level queries and historical tracking |
| Plan Step Node | Step identifier, description, preconditions, postconditions, status | Enable step-level analysis and dependency tracing |
| Plan Dependency Edge | From-step, to-step, dependency type, strength | Enable dependency analysis and pattern mining |
| Plan Revision Edge | Old plan version, new plan version, trigger, scope | Enable revision pattern analysis |
| Plan Knowledge Edge | Plan version, knowledge entity used, usage context | Enable plan-to-knowledge traceability |

### 22.3 Integration Constraints

- Projection is downstream and non-blocking.
- The Planning Engine produces projection data; it does not define the graph schema or query model.
- Projection failures do not affect the Planning Engine's operation.

---

## 23. Certification Requirements

### 23.1 Required Certifications

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 31 sections present and compliant with A.5.0 template | Section-by-section compliance matrix |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist |
| **STD-003 Terminology Compliance** | All terms conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All seven invariants (Section 14) are testable | Invariant test specification |
| **Determinism Verification** | Same goal + context + knowledge produces same plan | Determinism test evidence |
| **Cross-Engine Alignment** | Context Engine and Knowledge Engine consumption contracts are compatible | Cross-Engine alignment verification |
| **Completeness Check** | All responsibilities (Section 5) map to operations (Section 15) | Traceability matrix |
| **Event Completeness** | All lifecycle transitions (Section 10) produce events (Section 16) | Traceability matrix |

### 23.2 Certification Gates

- Certification evidence reviewed by Enterprise Documentation Standards Board.
- Cross-engine alignment verified against A.5.1 and A.5.2 output contracts.
- Certification does not imply canonical status.
- Evidence traceable to Traceability ID: `FORGE-AI.V4.PHASE-2.ENGINE-03`.

---

## 24. Performance Characteristics

### 24.1 Expected Performance Bounds

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Plan generation latency | Per-request; bounded by decomposition depth, step count, and validation complexity | Deterministic; no AI/LLM |
| Plan revision latency | Per-request; depends on revision scope (full replan vs. partial) | Full replan similar to new plan generation |
| Query latency | Constant time per query | Plan and record lookups |
| Dependency resolution latency | Proportional to step count and dependency complexity | Cycle detection is O(V+E) on the dependency graph |
| Validation latency | Proportional to step count and check count | Deterministic per check |

### 24.2 Scalability Characteristics

- Supports multiple concurrent planning operations for different goals.
- Plan archive grows over time; compaction archives oldest non-referenced plans when limits are reached.
- Knowledge retrieval for planning is bounded by the Knowledge Engine's retrieval limits.

### 24.3 Non-Goals

- No specific latency numbers (implementation concern).
- No throughput targets (implementation concern).
- No resource allocation specifications (platform concern).

---

## 25. Security & Governance

### 25.1 Security Boundaries

- **Plan immutability** — Validated plans cannot be tampered with. Mutation of a versioned plan is a violation of Invariant 2.
- **Request authentication** — Source authentication is handled by Engine Communication (A.4.5).
- **Consumer authorization** — Managed by Engine Registry (A.4.3).
- **Configuration integrity** — Configuration changes require governance authorization.
- **Plan visibility** — All plans are visible to registered peer Engines. Fine-grained access control is out of scope.

### 25.2 Governance Constraints

- Decomposition rules are governance artifacts — new rules require Framework Governance approval.
- The Dependency Resolution Strategy is a governance artifact.
- Plan cancellation and supersession of in-progress plans may require governance authorization per the Revision Policy.
- The Planning Engine does not determine whether a goal is "worth pursuing" — that is a Decision Engine concern.

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
- UI/UX design and visualization of plans

---

## 27. Future Consumers

| Consumer | Consumption Pattern | Expected Plan Usage |
|:---|:---|:---|
| **Decision Engine (A.5.4, future)** | Pull on demand | Retrieves plan alternatives and feasibility analysis for trade-off evaluation |
| **Execution Engine (A.5.5, future)** | Push subscription (validated plans) | Consumes validated plans to execute steps in dependency order |
| **Validation Engine (A.5.6, future)** | Pull on demand | Retrieves plans for structural and constraint validation |
| **Memory Engine (A.5.9, future)** | Push subscription (completed plans) | Stores completed plans and planning records for learning and pattern recognition |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events for platform-level monitoring |
| **Knowledge Graph Projection** | Asynchronous | Consumes plan, step, and dependency metadata for graph-based analysis |

---

## 28. Success Criteria

### 28.1 Architectural Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Template compliance** | All 31 sections present and compliant with A.5.0 | Section audit |
| **STD-010 compliance** | Document Metadata passes all STD-010 checks | STD-010 validation checklist |
| **Invariant testability** | All seven invariants are testable assertions | Invariant test suite |
| **Determinism** | Same inputs produce same plan across 100 consecutive runs | Determinism test suite |
| **Completeness** | Every responsibility maps to an operation | Traceability matrix |
| **Event coverage** | Every lifecycle transition produces an event | Traceability matrix |

### 28.2 Functional Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Plan feasibility** | All validated plans pass all critical validation checks | Plan validation audit |
| **Dependency acyclicity** | No validated plan contains a dependency cycle | Dependency graph audit |
| **Goal-plan traceability** | Every step in every plan is traceable to the goal | Planning record audit |
| **Revision consistency** | Every revision references the original plan and trigger | Revision record audit |
| **Context-knowledge alignment** | Plans reference valid context and knowledge versions | Cross-reference audit |

### 28.3 Governance Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Ownership clarity** | Exactly one accountable owner named | Governance review |
| **Handoff readiness** | Handoff contract defines prerequisites, evidence, and gates | Governance review |
| **Scope compliance** | No implementation or AI details in any section | Scope audit |
| **Cross-Engine alignment** | Context and Knowledge Engine contracts compatible | Cross-Engine alignment verification |

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
| Section 11 (Internal Engine Model) describes five-stage pipeline with revision loop | Complete |
| Section 12 (Resolution Rules) defines ambiguity, cycle, and revision scope resolution | Complete |
| Section 13 (Validation Rules) defines input, plan, advisory, and state transition validation | Complete |
| Section 14 (Engine Invariants) states seven testable invariants | Complete |
| Section 15 (Engine Operations) enumerates operations with full signatures | Complete |
| Section 16 (Engine Events) enumerates emitted and consumed events | Complete |
| Section 17 (Dependencies) lists all upstream dependencies including Context and Knowledge Engines | Complete |
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

The Framework Architecture Team is the single accountable owner for the Planning Engine's architectural correctness, governance alignment, and certification readiness. The Planning Engine is a critical reasoning Engine that transforms intent into executable structure, and its architecture must remain under centralized architectural control.

### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Decomposition rule architecture | Yes | Persistence implementation |
| Dependency resolution rules | Yes | Execution scheduling |
| Plan validation model | Yes | Execution monitoring |
| Plan lifecycle design | Yes | Platform persistence |
| Extension model governance | Yes | Extension implementations |
| Revision policy | Yes | Execution error recovery |

### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New decomposition rules | Autonomous for standard patterns | Yes for novel goal types |
| Dependency resolution strategy change | Autonomous for selecting existing strategies | Yes for new strategies |
| Validation policy changes | Autonomous for advisory check configuration | Yes for critical check modifications |
| Revision policy changes | Autonomous for minor scope adjustments | Yes for governance-approval threshold changes |
| Plan cancellation policy | Autonomous for automated cancellation rules | Yes for governance-required cancellation scenarios |

### Validation Obligations

- All 31 sections compliant with A.5.0.
- All invariants preserved.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- STD-010 and STD-003 compliant.
- No implementation scope.
- Cross-engine alignment verified with A.5.1 and A.5.2.

### Review Obligations

Present to Enterprise Documentation Standards Board:

- Complete RFC with all sections.
- Responsibility-to-operation traceability matrix.
- Lifecycle-to-event traceability matrix.
- Invariant test specification.
- STD-010 and STD-003 compliance evidence.
- Cross-engine alignment verification reports.

### Certification Responsibilities

- Template compliance matrix.
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Cross-engine alignment evidence.
- Dependency acyclicity test results.

### Ownership Handoff Limitations

Ownership transfer requires governance-authorized transition recorded in the Engine Registry. The transition must transfer all obligations, preserve evidence and traceability, and not occur silently or implicitly.

---

## 31. Engine Handoff Contract

### Handoff Prerequisites

Before the Planning Engine hands off a validated plan to the Execution Engine, the following conditions must be satisfied:

1. The plan has passed all critical validation checks defined in Section 13.2.
2. The plan has been assigned a version and is immutable.
3. The dependency graph is acyclic and has a valid topological order.
4. All steps have unique identifiers, preconditions, postconditions, and expected outcomes.
5. The plan references valid context and knowledge versions.
6. The planning record and validation report are attached.
7. The Planning Engine is in steady-state or degraded lifecycle phase.

### Required Evidence

| Evidence | Description | Retention |
|:---|:---|:---|
| Plan version identifier | Unique version of the handed-off plan | Duration of plan execution + audit retention period |
| Validation report | All critical and advisory check results | Same as plan |
| Dependency graph | Step dependencies with classifications | Same as plan |
| Planning record | Goal analysis, knowledge used, decomposition reasoning | Same as plan |
| Context reference | Context Engine snapshot version used | Same as plan |
| Knowledge references | Knowledge entity versions used | Same as plan |
| Traceability matrix | Step-to-goal traceability | Same as plan |

### Validated Outputs

- Validated plans (immutable, versioned, with all evidence attached).
- Plan deltas (for revisions, referencing parent version).
- Planning records (immutable, per plan version).
- Validation reports (immutable, per plan version).

### Snapshot Expectations

Plans are immutable once validated. The Execution Engine receives a versioned plan that is guaranteed not to change. If the plan needs revision, the Planning Engine produces a new plan version and the Execution Engine switches to it.

### Receiving Consumers

1. Execution Engine (A.5.5, future) — primary consumer
2. Decision Engine (A.5.4, future) — for plan evaluation
3. Validation Engine (A.5.6, future) — for plan validation

### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Validation failure | Plan blocked; validation report returned to requesting Engine | If all validation attempts fail, goal returned as "unplannable" with evidence |
| Consumer unreachable | Plan retained; delivery retried per A.4.5 | After retry exhaustion, consumer marked unreachable; plan remains available for later retrieval |
| Dependency cycle detected | Plan blocked; cycle resolution triggered | If resolution fails, `Dependency Cycle Detected` event escalated to governance |
| Context unavailable | Plan generated with last known context + staleness warning | No escalation — plan is usable but flagged |
| Knowledge unavailable | Plan generated with default rules + knowledge-gap warning | No escalation — plan is usable but flagged |

### Audit Record Expectations

Every handoff produces an audit record:

- Plan version identifier.
- Receiving consumer.
- Handoff timestamp.
- Validation status.
- Evidence checklist.
- Context and knowledge reference status.

### Certification Gates

1. **Pre-handoff validation** — All critical checks (Section 13.2) pass.
2. **Evidence completeness** — All required evidence items present.
3. **Consumer readiness** — Execution Engine registered and reachable.
4. **Invariant preservation** — All seven invariants (Section 14) hold.
5. **Cross-engine consistency** — Context and knowledge references valid.

If any gate fails, handoff does not proceed. The plan remains in "drafted" or "validated" state with documented blockers.

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
| No source code, APIs, REST, persistence, or database schema | Pass |
| No LLM details, prompt engineering, or model selection | Pass |
| No agent runtime, swarm runtime, or platform adapter specifics | Pass |
| No ProjectStatus update or reference | Pass |
| Section 26 includes all mandatory out-of-scope exclusions | Pass |

### Content Quality Validation

| Check | Status |
|:---|:---|
| All 16 Specializable sections contain Engine-specific content | Pass |
| No Specializable section contains only template language | Pass |
| Consumed Inputs reference producing components | Pass |
| Produced Outputs define versioning strategy | Pass |
| Resolution and Validation rules are deterministic | Pass |
| Engine Invariants are expressible as assertions | Pass |
| Engine Ownership names a single accountable party | Pass |
| Engine Handoff Contract defines required evidence | Pass |

---

## Completion Report

### Executive Summary

Created the third Phase 2 Engine specialization RFC — A.5.3 Planning Engine — using the A.5.0 Engine Specialization RFC Template. The Planning Engine transforms user intent and contextual state into structured, executable, and validated plans. It bridges the gap between the information Engines (Context, Knowledge) and the action Engines (Decision, Execution, Validation) by producing decomposed, dependency-aware, versioned plans with full traceability.

### Documents Created

- `docs/AI/Runtime/A.5.3-Planning-Engine-RFC.md`

### Architecture Decisions

1. The Planning Engine uses a five-stage pipeline: Goal Analyzer → Decomposer → Dependency Resolver → Plan Assembler → Plan Validator, with a revision loop for adapting to context changes and execution feedback.
2. Plan generation is fully deterministic — no AI/LLM involvement. Decomposition follows configurable rules, not AI-generated plans.
3. The dependency graph is a DAG (directed acyclic graph) enforced by Invariant 3. Three cycle resolution strategies are provided: introduce intermediate, relax, escalate.
4. Plans are immutable after validation (Invariant 2). Revisions produce new plan versions referencing the original.
5. Seven invariants guarantee version monotonicity, plan immutability, dependency acyclicity, goal-plan traceability, single active plan per goal, validation-before-handoff, and revision traceability.
6. The Planning Engine operates as a transform — clear bounded inputs (context, knowledge, goals) and outputs (validated plans), not a hub.
7. Plan validation is split into critical checks (block handoff) and advisory checks (warnings).

### STD-010 Compliance Notes

- Metadata heading uses exact `## Document Metadata` format.
- All 25 mandatory fields present; 3 conditionally mandatory fields included.
- RFC class expectations met: parent architecture identified, non-canonical status stated, review and approval authority explicit, normative authority separated from dependencies.
- Identifier `FORGE-A-005.3` follows `FORGE-A` prefix convention.
- Version `0.1.0-draft` follows `major.minor.patch-status` format.

### Remaining Risks

- This RFC remains non-canonical until reviewed, approved, and explicitly promoted.
- The Planning Engine sits at a critical juncture — plan quality directly affects execution quality.
- Decomposition rule quality determines plan quality; rule authoring requires domain expertise.
- No implementation exists — architecture not validated against real workloads.
- The boundary between "planning" and "decision-making" must be maintained carefully to avoid scope overlap with the Decision Engine.

### Recommended Next Step

A.5.4 — Decision Engine RFC, which will consume the Planning Engine's plans for trade-off evaluation, option analysis, and decision arbitration within the Engine Platform.

# A.5.3 — Planning Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-3` |
| Title | A.5.3 — Planning Engine RFC |
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
| Traceability ID | `AI-DOS.V3.A.005.3` |
| Scope | Defines the Planning Engine specialization only, including its purpose, mission, responsibilities, non-responsibilities, internal model, resolution rules, state, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle participation within the AI-DOS v4 Engine Platform. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification execution, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; A.5.1 Context Engine RFC; A.5.2 Knowledge Engine RFC; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, Context Engine context snapshots, Knowledge Engine retrieval results, canonical terminology, metadata rules, upstream Engine handoff outputs where applicable, and repository-normalization instructions. |
| Produces | Planning Engine architecture specification, Planning Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.2-Knowledge-Engine-RFC.md` |
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
- A.5.1: Context Engine RFC as the upstream context provider for goal analysis and plan grounding
- A.5.2: Knowledge Engine RFC as the upstream knowledge provider for domain knowledge, procedural knowledge, and constraints

</details>

---

## Executive Summary

A.5.3 defines the architecture of the Planning Engine, the third individual Engine specialization in Phase 2 of the AI-DOS v4 Engine Platform. The Planning Engine transforms user intent and contextual state into structured, executable, and validated plans that the Execution Engine can carry out. It bridges the gap between the information Engines (Context, Knowledge) and the action Engines (Decision, Execution, Validation) by producing decomposed, dependency-aware, versioned plans with full traceability. This RFC specializes A.5.0 (which specializes TPL-001) by defining the Planning Engine's purpose, mission, responsibilities, internal model, resolution rules, state characteristics, invariants, validation rules, consumed inputs, produced outputs, operations, events, ownership, handoff contract, and lifecycle behaviour. It does not redefine Runtime, Engine Platform, Engine Foundation, or any upstream standard.

---

## Purpose

### Engine Purpose

The Planning Engine exists to transform user intent and contextual state into structured, executable, and validated plans that the Execution Engine can carry out. While the Context Engine (A.5.1) provides the current state of the world and the Knowledge Engine (A.5.2) provides relevant domain knowledge, the Planning Engine bridges the gap between "what the user wants" and "what steps the system should take" by producing a decomposed, ordered, and dependency-aware plan.

A plan, in the context of this Engine, is a versioned, immutable artifact that consists of a goal statement, a set of plan steps, inter-step dependencies, resource requirements, constraints, success criteria, and a plan state that tracks execution progress. Plans are the primary output of the Planning Engine and the primary input to the Execution Engine (A.5.5, future). Plans are also consumed by the Decision Engine (A.5.4, future) for trade-off analysis and by the Validation Engine (A.5.6, future) for plan-level correctness checks.

Without a dedicated Planning Engine, the system would lack a structured mechanism for decomposing complex tasks, managing step dependencies, and adapting plans to changing context. Peer Engines would need to independently determine what to do and in what order, leading to uncoordinated execution, missed dependencies, and non-deterministic behaviour. The Planning Engine eliminates these risks by centralizing plan generation, revision, and lifecycle management.

The Planning Engine's purpose aligns with Engine Capability domain "Task Planning" as defined by A.4.7. The Planning Engine uniquely owns the capability of decomposing goals into ordered steps, managing inter-step dependencies, validating plan feasibility, and producing versioned plans that the Execution Engine can execute deterministically.

The Planning Engine does not execute plans — that is the Execution Engine's responsibility. The Planning Engine defines the architectural contract for plan operations: what a plan is, how it is generated, how it is revised, how dependencies are managed, how plans are validated, and how plans are handed off to the Execution Engine.

### Engine Mission

The mission of the Planning Engine is to produce validated, feasible, and contextually grounded plans that decompose user goals into executable steps with clear dependencies, constraints, and success criteria.

This mission translates into five mission-level objectives:

1. **Decomposability** — Every user goal that enters the Planning Engine is decomposed into a finite set of plan steps, where each step is a discrete, verifiable unit of work. Decomposition follows deterministic rules based on goal type, domain knowledge, and contextual constraints. The decomposition depth is bounded by configuration to prevent unbounded recursive decomposition.

2. **Feasibility** — Every plan produced by the Planning Engine is validated for feasibility before handoff. Feasibility means that all plan steps have satisfiable preconditions, all dependencies can be resolved, all resource requirements are within available limits, and no plan step contradicts the current contextual state or domain knowledge.

3. **Adaptability** — The Planning Engine can revise plans when the context changes, when execution feedback indicates a step failure, or when domain knowledge is updated. Plan revision produces a new plan version that preserves the original plan for auditability while incorporating the new information.

4. **Traceability** — Every plan step is traceable to the goal it serves, the knowledge that informed it, and the context that constrained it. This supports explainability — if a plan step produces an unexpected result, the traceability chain explains why that step was included and what assumptions it relied on.

5. **Determinism** — Given the same goal, context, and knowledge, the Planning Engine produces the same plan. This supports reproducibility, auditability, and the ability to compare plans across different contexts or knowledge states.

---

## Scope

### In Scope

A.5.3 governs:

1. The Planning Engine's architectural purpose, mission, and capability domain alignment within the Engine Platform.
2. The Planning Engine's responsibilities, non-responsibilities, and boundary definitions relative to peer Engines and platform layers.
3. The Planning Engine's internal model, including the five-stage planning pipeline, resolution rules, state characteristics, and plan lifecycle management.
4. The Planning Engine's consumed inputs (planning requests, context/knowledge inputs, configuration inputs) and produced outputs (validated plans, plan deltas, planning metadata, planning events).
5. The Planning Engine's operations, events, and runtime interaction patterns.
6. The Planning Engine's invariants, validation rules, and certification requirements.
7. The Planning Engine's ownership contract and handoff contract.
8. The Planning Engine's lifecycle behaviour within the A.4.4 Engine Lifecycle model.
9. AI consumption boundaries — the Planning Engine is fully deterministic and does not invoke LLMs.

### Out of Scope

A.5.3 does not:

1. Redefine Runtime Architecture (A.3).
2. Redefine Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1 through A.4.7).
3. Define the architectural content or behaviour of any other Engine (A.5.1, A.5.2, A.5.4, etc.).
4. Replace or restate STD-010 metadata field definitions or rules.
5. Replace or restate TPL-001 RFC mandatory section definitions or validation rules.
6. Replace or restate A.5.0 template governance, section mapping, or Universal Section Contract.
7. Implement plan execution, step scheduling, resource provisioning, or execution monitoring.
8. Define LLM call orchestration, prompt engineering, or model selection for planning operations.
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
- Step execution timing, scheduling, and resource provisioning
- Execution monitoring and error recovery during step execution
- UI/UX design and visualization of plans

### Future Consumers

| Consumer | Consumption Pattern | Expected Plan Usage |
|:---|:---|:---|
| **Decision Engine (A.5.4, future)** | Pull on demand | Retrieves plan alternatives and feasibility analysis for trade-off evaluation |
| **Execution Engine (A.5.5, future)** | Push subscription (validated plans) | Consumes validated plans to execute steps in dependency order |
| **Validation Engine (A.5.6, future)** | Pull on demand | Retrieves plans for structural and constraint validation |
| **Memory Engine (A.5.9, future)** | Push subscription (completed plans) | Stores completed plans and planning records for learning and pattern recognition |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events for platform-level monitoring |
| **Knowledge Graph Projection** | Asynchronous | Consumes plan, step, and dependency metadata for graph-based analysis |

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
| A.5.0 | `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md` | Governing template; provides Engine RFC section mapping, Universal Section Contract, Engine Ownership Contract, Engine Handoff Contract, and validation model. A.5.3 follows A.5.0 as its direct governing template (per the specialization hierarchy TPL-000 → TPL-001 → A.5.0 → A.5.3). |
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; A.5.0 specializes TPL-001 for the Engine domain, and A.5.3 inherits that specialization. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, placeholder grammar, naming conventions, and validation model. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; defines the metadata schema, mandatory fields, relationship taxonomy, version rules, and document class expectations. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; defines the terminology that this RFC shall use for Engine, Platform, Runtime, Kernel, and related concepts. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.3 Runtime Architecture | Governing architectural context for all Runtime documents | Planning Engine RFC would lack the architectural context that defines its operational environment |
| A.4 Engine Architecture | Governing Engine Platform definition, capability model, and contract framework | Planning Engine RFC would lack the platform boundary |
| A.4.1 Engine Kernel RFC | Kernel contract and mediation rules | Planning Engine could not define its interaction with the Kernel layer |
| A.4.2 Engine Metadata RFC | Metadata model for Engine identity, classification, and tracking | Planning Engine would lack a consistent metadata foundation |
| A.4.3 Engine Registry RFC | Registry services for Engine discovery and consumer management | Planning Engine could not register as a capability provider |
| A.4.4 Engine Lifecycle RFC | Lifecycle state machine that all Engines must follow | Planning Engine could not define Engine-specific lifecycle behaviour |
| A.4.5 Engine Communication RFC | Communication types, modes, and failure/recovery model | Planning Engine could not define Engine-specific communication patterns |
| A.4.6 Engine State RFC | State categories, visibility model, and synchronization rules | Planning Engine could not define Engine-specific state management |
| A.4.7 Engine Capability RFC | Capability taxonomy and registration model | Planning Engine could not reference the "Task Planning" capability domain |
| A.5.0 Engine Specialization RFC Template | Governing template contract, section mapping, and validation model | Planning Engine RFC would lack the structural and governance foundation |
| A.5.1 Context Engine RFC | Upstream context provider for goal analysis and plan grounding | Planning Engine could not access resolved context snapshots for planning |
| A.5.2 Knowledge Engine RFC | Upstream knowledge provider for domain knowledge, procedural knowledge, and constraints | Planning Engine could not access knowledge retrieval for informed planning |
| STD-010 | Document metadata schema and compliance rules | Metadata block would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology would be inconsistent across Engine RFCs |
| TPL-000 | Template governance and lifecycle model | Template compliance would lack governing template authority |
| TPL-001 | RFC template standard and mandatory section structure | RFC would lack the structural foundation it specializes through A.5.0 |

---

## Architecture

This section complies with the Universal Section Contract defined in A.5.0. The Planning Engine's architecture is defined within the Engine Platform (A.4) without redefining Runtime, Kernel, Contract, Registry, Lifecycle, Communication, State, Capability, metadata, terminology, artifacts, authority, or ownership models established upstream.

### Engine Position

#### Topological Position

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

#### Data Flow Characterization

The Planning Engine has a well-defined input-output pattern:

- **From Context Engine** — Resolved context snapshots provide the current task state, user intent, environmental constraints, and session parameters. The Planning Engine pulls context at the start of each planning cycle.
- **From Knowledge Engine** — Knowledge retrieval results provide domain knowledge, procedural knowledge, constraints, and rules that inform plan step structure and ordering. The Planning Engine pulls knowledge based on the goal analysis.
- **From Execution Engine** — Execution feedback (step completion, step failure, execution results) triggers plan revision. The Planning Engine consumes execution events asynchronously.
- **To Decision Engine** — Plan alternatives and feasibility analysis provide the Decision Engine with options to evaluate. The Decision Engine may request plan comparison or alternative generation.
- **To Execution Engine** — Validated plans are the primary output. The Execution Engine consumes plans to execute steps in order.
- **To Validation Engine** — Plans are provided for plan-level validation (structural correctness, dependency completeness, constraint compliance).

The Planning Engine's topology is a transform — it receives information and knowledge, applies deterministic rules, and produces plans. It is not a hub like the Context Engine; it has clear, bounded inputs and outputs.

#### Unavailability Impact

If the Planning Engine is unavailable, no new plans can be generated and no existing plans can be revised. The Execution Engine cannot receive new execution instructions. The Decision Engine cannot evaluate plan alternatives. The Engine Platform's graceful degradation model (A.4.4) should define fallback behaviour — the Planning Engine defines what "no-plan" means but does not define how Engines compensate.

### Internal Engine Model

#### Conceptual Overview

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

#### Goal Analyzer

The Goal Analyzer is the entry point for all planning operations. It performs the following:

1. **Goal Parsing** — Extracts the goal statement, constraints, preferences, and priority from the planning request.
2. **Context Retrieval** — Pulls the current context snapshot from the Context Engine to understand the task state, user intent, and environmental constraints.
3. **Knowledge Retrieval** — Submits knowledge retrieval requests to the Knowledge Engine for domain knowledge, procedural knowledge, and constraints relevant to the goal.
4. **Goal Classification** — Classifies the goal by type (single-step, multi-step, conditional, iterative), complexity (simple, moderate, complex), and domain.
5. **Actionability Assessment** — Determines whether the goal is immediately actionable or requires additional context or knowledge. If not actionable, produces an "actionability block" report that identifies what is missing.

The Goal Analyzer produces a Goal Analysis Record that captures the parsed goal, the context version used, the knowledge entities retrieved, the classification, and the actionability assessment. This record is the primary input to the Decomposer.

#### Decomposer

The Decomposer transforms the goal analysis into a set of plan steps. It operates through three stages:

1. **Pattern Matching** — Matches the classified goal against the decomposition rules loaded from configuration. Each rule defines a step pattern for a specific goal type and domain. For example, a "data analysis" goal type may have a pattern: collect → validate → analyze → interpret → report.

2. **Step Instantiation** — Instantiates the matched pattern with goal-specific content. Each step in the pattern is assigned a description, preconditions (drawn from the goal analysis), postconditions, expected outcomes, resource requirements, and constraints.

3. **Knowledge-Grounded Refinement** — Refines each instantiated step using the retrieved procedural knowledge. If procedural knowledge specifies additional sub-steps, preconditions, or constraints for a given goal type, those are incorporated. If the decomposition depth limit is reached, the remaining goal complexity is captured as a single step with a "requires further planning" annotation.

The Decomposer is deterministic: the same goal analysis and the same decomposition rules produce the same set of plan steps.

#### Dependency Resolver

The Dependency Resolver analyzes the plan steps produced by the Decomposer and constructs the dependency graph:

1. **Dependency Identification** — For each step, examines its preconditions and determines which other steps produce the required preconditions as postconditions. A dependency edge is created from the producing step to the consuming step.

2. **Dependency Classification** — Each dependency is classified as strong (the consuming step cannot start until the producing step completes) or weak (the consuming step can start but benefits from the producing step's completion).

3. **Cycle Detection** — The dependency graph is checked for cycles. If a cycle is detected, the Dependency Resolver applies the configured cycle resolution strategy:
   - **Introduce intermediate** — Add a new step that breaks the cycle by mediating between the conflicting steps.
   - **Relax** — Convert a strong dependency to a weak dependency to break the cycle.
   - **Escalate** — Flag the cycle for governance review; the plan cannot proceed until the cycle is resolved.

4. **Parallelization Analysis** — Identifies steps that have no unresolved strong dependencies and can be assigned to the same execution phase. These steps are marked as "parallelizable" in the plan.

The Dependency Resolver produces a Dependency Graph that is a directed acyclic graph (DAG) representing the partial ordering of plan steps.

#### Plan Assembler

The Plan Assembler constructs the final plan from the decomposed steps, the dependency graph, and the goal analysis:

1. **Step Ordering** — Assigns a topological order to the steps based on the dependency graph. Steps in the same execution phase receive the same phase identifier.

2. **Plan Metadata Attachment** — Attaches the goal analysis record, the context version, the knowledge entity versions, the decomposition reasoning, and the dependency analysis to the plan for traceability.

3. **Success Criteria Definition** — Derives plan-level success criteria from the goal statement and the expected outcomes of the final steps. Each success criterion is a verifiable condition.

4. **Plan Versioning** — Assigns a unique version identifier to the assembled plan.

The Plan Assembler produces a Draft Plan that is ready for validation.

#### Plan Validator

The Plan Validator checks the draft plan against feasibility criteria:

1. **Structural Validation** — Verifies that all steps have unique identifiers, all step references are valid, and the dependency graph is acyclic.

2. **Precondition Satisfiability** — For each step, verifies that its preconditions can be satisfied by the combination of the initial context state and the postconditions of preceding steps.

3. **Dependency Resolvability** — Verifies that the dependency graph has a valid topological order and that no step is orphaned (every step is reachable from the goal).

4. **Resource Availability** — Verifies that the total resource requirements across all steps are within available limits (as reported by the context snapshot).

5. **Constraint Compliance** — Verifies that all plan-level and step-level constraints are satisfied by the proposed plan structure.

6. **Knowledge Consistency** — Verifies that the plan does not contradict the knowledge entities used during planning.

7. **Validation Report Production** — Assembles the results of all checks into a validation report with pass/fail/warning per check.

If all critical checks pass, the plan transitions from "drafted" to "validated" and becomes available for handoff to the Execution Engine. If any critical check fails, the plan remains in "drafted" state and the specific failures are reported to the requesting Engine.

#### Revision Loop

When a revision trigger arrives, the Planning Engine may re-enter the pipeline at the appropriate stage:

- **Context change** — Re-enters at Goal Analyzer (new context retrieval) → proceeds through the full pipeline → produces a revised plan.
- **Execution feedback (step failure)** — Re-enters at Dependency Resolver (affected steps may need reordering or replacement) → proceeds through Assembler and Validator.
- **Knowledge update** — Re-enters at Goal Analyzer (new knowledge retrieval) → proceeds through the full pipeline → produces a revised plan.

The revision loop always produces a new plan version that references the original plan version it revises. The original plan is preserved for auditability.

### Resolution Rules

#### Goal Ambiguity Resolution

When the goal statement is ambiguous (multiple interpretations, unclear scope, missing constraints), the Planning Engine applies the following rules:

1. **Narrow by context** — Use the current context snapshot to disambiguate. If the context provides signals that narrow the interpretation, the narrowed interpretation is used.
2. **Narrow by knowledge** — Use domain knowledge to determine the most common or standard interpretation for the goal type.
3. **Conservative scoping** — If disambiguation is not possible, the Planning Engine adopts the conservative (narrower) interpretation and produces a plan for that interpretation. The ambiguity is documented in the planning record.
4. **Multi-interpretation planning** — If the goal has multiple valid interpretations and none can be eliminated, the Planning Engine produces a plan for the primary interpretation and documents the alternative interpretations as "deferred goals" that may require separate planning cycles.

#### Dependency Cycle Resolution

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

#### Plan Revision Scope Resolution

When a revision trigger arrives, the Planning Engine determines the revision scope:

| Trigger Type | Default Scope | Expanded Scope When |
|:---|:---|:---|
| Context change (minor) | Steps whose preconditions reference the changed context element | No expansion unless dependency analysis reveals downstream impact |
| Context change (major — goal-relevant) | Full replan | Always full replan |
| Execution feedback (single step failure) | The failed step and its direct dependents | Expanded if the failure affects shared resources or constraints |
| Execution feedback (multiple step failures) | All failed steps and their dependents | Expanded to full replan if more than 50% of steps are affected |
| Knowledge update (procedure change) | Steps that were informed by the updated procedure | Expanded if the procedure affects step ordering or dependencies |
| Knowledge update (constraint change) | Steps that are constrained by the updated constraint | Expanded if the constraint affects the dependency graph |

### Engine State

#### State Dimensions

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Decomposition rules, maximum depth, validation policy, revision policy, dependency strategy, parallelization policy | Low — governance-authorized changes only |
| **Active Plans State** | Current set of active plans with their versions, step states, and validation reports | Medium — changes with plan creation, revision, and execution feedback |
| **Plan Archive State** | Historical plans (completed, failed, superseded) with their full records | Low — append-only; grows over time |
| **Request Queue State** | Pending and in-progress planning requests | High — changes with every incoming request |
| **Context Reference State** | Most recent Context Engine snapshot version used for planning | Medium — updates with context events |
| **Knowledge Reference State** | Knowledge entity versions used in active plans | Medium — updates with knowledge events |
| **Lifecycle State** | Current Engine lifecycle phase (per A.4.4) | Low — changes only at lifecycle transitions |

#### State Consistency

- Active Plans State is consistent with the Context Reference State — every active plan references a valid context version.
- Active Plans State is consistent with the Knowledge Reference State — every active plan references valid knowledge entity versions.
- No active plan references a superseded or deprecated knowledge entity without a staleness flag.
- The Plan Archive State contains only plans that have been fully transitioned out of the active state.

#### State Recovery

Recovery-critical state: Active Plans State (all active plan versions with step states), Configuration State, and the most recent Context and Knowledge references. The Request Queue State is transient. On recovery, the Planning Engine assumes the persistence layer provides the plan data and resumes from the last consistent state.

### AI Consumption Rules

The Planning Engine does not invoke LLMs or AI models as part of its core architecture. Goal analysis, task decomposition, dependency resolution, plan assembly, and plan validation are all deterministic operations based on defined rules, configuration patterns, and knowledge entities. The Planning Engine does not use AI for plan generation, step ordering, or feasibility assessment.

The Planning Engine may receive goals that were formulated with AI assistance in other Engines. In this case, the Planning Engine treats the goal the same as any other goal — it is parsed, analyzed, and decomposed according to the same rules. The Planning Engine does not need to know whether the goal originated from an AI process.

**Prohibited AI Usage**:

- The Planning Engine shall not use LLM calls to decompose goals.
- The Planning Engine shall not use LLM calls to generate plan steps.
- The Planning Engine shall not use LLM calls to resolve dependency cycles.
- The Planning Engine shall not use LLM calls to validate plans.
- The Planning Engine shall not use prompt engineering or model selection in any capacity.

### Runtime Interaction Rules

The Planning Engine interacts with the runtime through the Engine Kernel (A.4.1) and Engine Communication (A.4.5). It does not interact directly with the agent runtime or swarm runtime.

**Synchronous Interactions**:

- `get_plan()` — Synchronous. Returns the plan or "not found".
- `get_plan_version()` — Synchronous. Returns the plan version or "not found".
- `get_planning_record()` — Synchronous. Returns the record or "not found".
- `get_dependency_graph()` — Synchronous. Returns the graph or "not found".

**Asynchronous Interactions**:

- `create_plan()` — Asynchronous. Caller receives acknowledgment; planning pipeline runs asynchronously. Caller is notified when the plan is validated (or fails validation).
- `revise_plan()` — Asynchronous. Caller receives acknowledgment; revision pipeline runs asynchronously.
- `cancel_plan()` — Asynchronous. Caller receives acknowledgment; cancellation and event emission happen asynchronously.
- `receive_execution_feedback()` — Asynchronous. Feedback is queued and processed in order.

**Concurrency Rules**:

- Multiple planning requests may be processed concurrently if they operate on different goals.
- Planning requests for the same goal are serialized — only one planning operation per goal at a time.
- Plan queries do not block planning operations and vice versa.
- Revision operations on a plan serialize with planning operations on the same plan.
- Execution feedback is processed in FIFO order.

### Extension Model

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom decomposition rules | Additional step patterns for new goal types or domains | Must define pattern, step structure, and depth behaviour; registered through Engine configuration |
| Custom validation checks | Additional plan validation criteria for specific domains | Must not contradict existing checks; registered through Engine configuration |
| Custom revision triggers | Additional event types that trigger plan revision | Must define trigger source, scope, and handling; requires Framework Governance approval |
| Custom dependency classification | Additional dependency types beyond strong and weak | Must be compatible with DAG acyclicity requirement; requires Framework Governance approval |

**Extension Constraints**:

- Extensions must not modify the Planning Engine's invariants.
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the validation-before-handoff requirement.
- Extensions that affect plan structure or dependency semantics require Framework Governance review.
- Extensions must be backward-compatible — existing plans must remain valid after an extension is added.

### Knowledge Graph Integration

The Planning Engine's plans, steps, and dependency graphs may be projected into the knowledge graph for cross-reference, historical analysis, and plan pattern mining. Integration is mediated through the Engine Platform's knowledge graph projection layer.

**Projection Points**:

| Projection | Content | Purpose |
|:---|:---|:---|
| Plan Node | Plan identifier, version, goal, step count, status, context version | Enable plan-level queries and historical tracking |
| Plan Step Node | Step identifier, description, preconditions, postconditions, status | Enable step-level analysis and dependency tracing |
| Plan Dependency Edge | From-step, to-step, dependency type, strength | Enable dependency analysis and pattern mining |
| Plan Revision Edge | Old plan version, new plan version, trigger, scope | Enable revision pattern analysis |
| Plan Knowledge Edge | Plan version, knowledge entity used, usage context | Enable plan-to-knowledge traceability |

**Integration Constraints**:

- Projection is downstream and non-blocking.
- The Planning Engine produces projection data; it does not define the graph schema or query model.
- Projection failures do not affect the Planning Engine's operation.

### Performance Characteristics

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Plan generation latency | Per-request; bounded by decomposition depth, step count, and validation complexity | Deterministic; no AI/LLM |
| Plan revision latency | Per-request; depends on revision scope (full replan vs. partial) | Full replan similar to new plan generation |
| Query latency | Constant time per query | Plan and record lookups |
| Dependency resolution latency | Proportional to step count and dependency complexity | Cycle detection is O(V+E) on the dependency graph |
| Validation latency | Proportional to step count and check count | Deterministic per check |

**Scalability Characteristics**:

- Supports multiple concurrent planning operations for different goals.
- Plan archive grows over time; compaction archives oldest non-referenced plans when limits are reached.
- Knowledge retrieval for planning is bounded by the Knowledge Engine's retrieval limits.

**Non-Goals**: No specific latency numbers, throughput targets, or resource allocation specifications — those are implementation and platform concerns.

### Security & Governance

**Security Boundaries**:

- **Plan immutability** — Validated plans cannot be tampered with. Mutation of a versioned plan is a violation of Invariant 2 (Plan Immutability After Validation).
- **Request authentication** — Source authentication is handled by Engine Communication (A.4.5).
- **Consumer authorization** — Managed by Engine Registry (A.4.3).
- **Configuration integrity** — Configuration changes require governance authorization.
- **Plan visibility** — All plans are visible to registered peer Engines. Fine-grained access control is out of scope.

**Governance Constraints**:

- Decomposition rules are governance artifacts — new rules require Framework Governance approval.
- The Dependency Resolution Strategy is a governance artifact.
- Plan cancellation and supersession of in-progress plans may require governance authorization per the Revision Policy.
- The Planning Engine does not determine whether a goal is "worth pursuing" — that is a Decision Engine concern.

---

## Design Decisions

### DD-1: Five-Stage Deterministic Pipeline Over AI-Based Plan Generation

**Context**: Plan generation could use AI/LLM-based reasoning to decompose goals and generate steps, or it could use a deterministic rule-based pipeline.

**Options considered**: (a) AI/LLM-based plan generation for maximum flexibility and creativity; (b) Five-stage deterministic pipeline (Goal Analyzer → Decomposer → Dependency Resolver → Plan Assembler → Plan Validator); (c) Hybrid — AI generation with deterministic validation.

**Decision**: Option (b). All planning operations follow a deterministic, five-stage pipeline. No AI/LLM involvement in any planning stage.

**Rationale**: Determinism is a core invariant — given the same goal, context, and knowledge, the same plan must be produced (Invariant 5 implicit in the Mission). AI-based generation would violate this invariant. Additionally, the Planning Engine operates at a critical juncture: plan quality directly affects execution quality. Non-deterministic plans would make debugging, auditability, and reproducibility impossible. The deterministic approach leverages the Knowledge Engine's procedural knowledge (structured, validated decomposition patterns) instead of relying on AI-generated plans.

### DD-2: Transform Topology Over Service Hub

**Context**: The Planning Engine could be designed as a service hub (like the Knowledge Engine) where many Engines push and pull plans continuously, or as a transform with bounded inputs and outputs.

**Options considered**: (a) Service hub with push-based plan distribution; (b) Transform with pull-based inputs and push-based outputs to primary consumer.

**Decision**: Option (b). The Planning Engine is a transform — it receives bounded inputs (context, knowledge, goals) and produces bounded outputs (validated plans). It is not a hub.

**Rationale**: Unlike the Knowledge Engine, which serves many concurrent consumers with varied retrieval needs, the Planning Engine has a clear input-output contract. It transforms goals into plans. The number of concurrent consumers is small and well-defined (Decision, Execution, Validation Engines). A hub design would add unnecessary complexity for a bounded transformation. Revision triggers are the only asynchronous input, and those are event-driven, not hub-driven.

### DD-3: Immutable Plans with Versioned Revisions

**Context**: Plans could be mutable (updated in place when revised) or immutable (revisions produce new versions).

**Options considered**: (a) Mutable plans updated in place; (b) Immutable plans with versioned revisions; (c) Mutable plans with version snapshots on each modification.

**Decision**: Option (b). Plans are immutable once validated. Any revision produces a new plan version that references the original.

**Rationale**: Immutability preserves auditability and supports the revision traceability invariant (I7). Mutable plans would make it impossible to compare plan versions, understand why a plan was revised, or audit the planning process. Immutability also simplifies handoff — the Execution Engine receives a plan version that is guaranteed not to change. If the plan needs revision, the Planning Engine produces a new version and the Execution Engine switches.

### DD-4: Split Validation (Critical vs. Advisory) Over Binary Pass/Fail

**Context**: Plan validation could be binary (pass/fail) or differentiated into critical checks (block handoff) and advisory checks (produce warnings).

**Options considered**: (a) Binary pass/fail — all checks are blocking; (b) Split into critical and advisory checks; (c) Severity-graded checks with configurable thresholds.

**Decision**: Option (b). Plan validation is split into critical checks (7 checks that block handoff) and advisory checks (5 checks that produce warnings but do not block).

**Rationale**: Binary validation is too rigid — some conditions (e.g., a slightly complex step, a marginally stale knowledge entity) should not block an otherwise valid plan. Severity grading (option c) adds complexity without proportional benefit. The split model gives governance clear control: critical checks define the minimum bar for plan quality, while advisory checks provide actionable improvement signals without blocking progress.

### DD-5: Three Configurable Dependency Cycle Resolution Strategies

**Context**: Dependency cycles can be resolved in multiple ways. A single fixed strategy might not suit all deployment contexts.

**Options considered**: (a) Single fixed strategy (escalate); (b) Three pre-defined strategies (introduce intermediate, relax, escalate) selectable via configuration; (c) Fully customizable strategy composition.

**Decision**: Option (b). Three pre-defined strategies with "introduce intermediate" as the default. Strategy selection is a governance artifact.

**Rationale**: The "introduce intermediate" strategy preserves the most plan structure and intent — it resolves cycles by adding mediation rather than by removing or weakening dependencies. The "relax" strategy provides a lighter-touch alternative. The "escalate" strategy is the governance safety net. Three strategies cover the common cases without the risk of non-deterministic or poorly reasoned custom strategies.

---

## Responsibilities

### Engine Responsibilities

The Planning Engine is accountable for the following architectural responsibilities, grouped by functional domain:

#### Goal Intake and Analysis

- Receive planning requests that contain a goal statement, optional constraints, and optional preferences from peer Engines or from the Context Engine's user intent signals.
- Analyze the goal by retrieving relevant knowledge from the Knowledge Engine and retrieving the current context from the Context Engine.
- Classify the goal by type (single-step, multi-step, conditional, iterative), complexity, and domain.
- Determine whether the goal is actionable within the current context and knowledge state, or whether it requires additional context or knowledge before planning can proceed.

#### Task Decomposition

- Decompose the goal into plan steps using deterministic decomposition rules.
- Each plan step is assigned a step identifier, a description, preconditions, postconditions, expected outcomes, resource requirements, and constraints.
- Apply domain knowledge (procedural knowledge, rule sets) from the Knowledge Engine to inform step structure and ordering.
- Respect decomposition depth limits — if the goal requires deeper decomposition than the configured maximum, the Planning Engine produces a multi-phase plan where each phase is planned separately.

#### Dependency Management

- Identify dependencies between plan steps. A dependency exists when step B requires a result or state change produced by step A.
- Classify dependencies as strong (step B cannot start until step A completes successfully) or weak (step B can start but benefits from step A's completion).
- Detect dependency cycles and resolve them by introducing intermediate steps, relaxing dependency types, or flagging the cycle for governance review.
- Produce a dependency graph that represents the partial ordering of plan steps.

#### Plan Generation

- Assemble the decomposed steps and their dependencies into a coherent plan.
- Assign an execution order to steps that respects the dependency graph. Steps with no unresolved strong dependencies may be assigned to the same execution phase (parallelizable).
- Attach the current context version, the knowledge entity versions used, and the decomposition reasoning to the plan for traceability.
- Validate the complete plan against feasibility criteria.

#### Plan Revision

- Receive revision triggers from the Context Engine (context changes), the Execution Engine (step failures or feedback), or the Knowledge Engine (knowledge updates that invalidate plan assumptions).
- Analyze the revision trigger to determine the scope of revision: full replan, partial replan (affecting a subset of steps), or step-level adjustment (modifying a single step's parameters).
- Produce a revised plan as a new plan version that references the original plan version it revises.
- Preserve the original plan version for auditability and comparison.

#### Plan Validation

- Validate every plan (new or revised) against feasibility criteria before handoff.
- Check precondition satisfiability, dependency resolvability, resource availability, constraint compliance, and knowledge consistency.
- Produce a validation report that lists all checks and their results.
- Block handoff to the Execution Engine if any critical validation check fails.

#### Plan Lifecycle Management

- Manage plans through their lifecycle: drafted, validated, active, executing, completed, failed, superseded, and retired.
- Track plan state transitions based on execution feedback from the Execution Engine.
- Support plan cancellation and graceful termination.
- Archive completed and superseded plans for historical reference and learning.

Additional responsibilities inherited from A.5.0's governance template: maintain TPL-001 compliance for this RFC, preserve the Specializable/Structural section classification, enforce the Universal Section Contract, and keep the mandatory Out of Scope items complete and non-removable.

---

## Non Responsibilities

### Engine Non Responsibilities

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

Additional non-responsibilities inherited from A.5.0: this RFC is not responsible for defining the architectural content of any other Engine, redefining Runtime Architecture (A.3), redefining Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1–A.4.7), implementing template validation tooling, executing certification reviews, defining LLM prompts or AI consumption boundaries for authoring, or managing ProjectStatus updates.

**Prohibitions**:

- Shared or ambiguous ownership without a single accountable party.
- Ownership claims that bypass Framework Governance.
- Unvalidated handoff — all plans must pass critical validation before transfer.
- Implicit acceptance by the receiving Engine in any handoff.
- Handoff that bypasses certification requirements.
- Non-deterministic plan generation.
- Mutation of validated plans.
- Execution of plan steps or production of side effects.

---

## Interfaces

This section complies with the Universal Section Contract defined in A.5.0. The Planning Engine's interfaces are defined within the Engine Platform (A.4) without redefining upstream communication, transport, or protocol models.

### Consumed Inputs

The Planning Engine requires the following typed inputs:

#### Planning Requests

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Planning Request | Structured request (goal statement, constraints, preferences, priority, requesting Engine) | Peer Engines, Context Engine (user intent signal) | Goal statement non-empty; constraints structurally valid; priority within range | Request rejected; rejection notice with specific errors |
| Revision Trigger | Structured event (trigger type, trigger source, affected plan version, trigger context) | Context Engine (context change), Execution Engine (step feedback), Knowledge Engine (knowledge update) | Trigger type valid; affected plan version exists; trigger context present | Trigger logged but not processed if plan version not found |
| Plan Query | Structured request (plan identifier or version, query type) | Peer Engines, audit systems | Plan identifier format valid | Query rejected with "not found" if plan does not exist |

#### Context and Knowledge Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Context Snapshot | Versioned resolved context | Context Engine (A.5.1) | Snapshot version valid and accessible | Planning proceeds with last known context; staleness flagged |
| Knowledge Retrieval Result | Ranked knowledge entities with provenance | Knowledge Engine (A.5.2) | Result set valid; entities meet confidence threshold | Planning proceeds with available knowledge; missing knowledge gaps flagged |
| Procedural Knowledge | Step-structured procedural entities | Knowledge Engine (A.5.2) | Procedural entities validated and active | Planning uses generic decomposition rules if no procedural knowledge available |
| Constraint Knowledge | Domain and task constraints | Knowledge Engine (A.5.2) | Constraint entities validated and active | Planning uses default constraints; missing constraints flagged |

#### Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Decomposition Rules | Step decomposition patterns by goal type and domain | Engine configuration | Rule structure valid; no circular references | Default decomposition rules applied |
| Maximum Decomposition Depth | Maximum recursive decomposition levels (integer) | Engine configuration | Positive integer within range [1, max] | Default depth of 3 applied |
| Plan Validation Policy | Validation check configuration (which checks are critical vs. advisory) | Governance configuration | Policy structure valid | All checks treated as critical |
| Revision Policy | Conditions under which revision is automatic vs. requires governance approval | Governance configuration | Policy conditions well-defined | All revisions require governance approval |
| Dependency Resolution Strategy | Strategy for resolving dependency cycles (introduce intermediate, relax, escalate) | Engine configuration | Strategy type valid | Default: escalate to governance |
| Parallelization Policy | Rules for identifying parallelizable steps | Engine configuration | Policy structure valid | Steps executed sequentially (no parallelization) |

All inputs are versioned. Planning requests carry a request identifier and timestamp. Context references carry the Context Engine snapshot version. Knowledge references carry the Knowledge Engine entity versions used.

### Produced Outputs

#### Plans

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Validated Plan | Versioned plan containing goal, steps, dependencies, constraints, success criteria, context reference, knowledge references, and validation report | Execution Engine (primary), Decision Engine, Validation Engine | Monotonic incrementing plan version; immutable once validated | All critical validation checks pass; dependency graph acyclic; all preconditions satisfiable; all steps have unique identifiers |

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Plan Delta | Differential update describing changes between plan versions | Execution Engine, Decision Engine | References parent plan version | Delta applies cleanly to parent version; no orphaned step references |

#### Planning Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Planning Record | Full record of the planning process: goal analysis, knowledge used, decomposition reasoning, dependency analysis | Audit systems, explainability | Immutable per plan version | All references valid; reasoning chain complete |
| Validation Report | Per-plan validation results with pass/fail/warning per check | Execution Engine, audit systems, Validation Engine | Immutable per plan version | All checks accounted for |
| Revision Record | Per-revision record: trigger, scope, changes, affected steps, reasoning | Audit systems, explainability | Immutable per revision | Trigger reference valid; scope accurate; changes traceable |

#### Planning Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Plan Drafted | Event emitted when a plan passes decomposition but awaits full validation | Audit systems, Decision Engine | Event-scoped; references drafted plan version | Plan structure valid; steps have identifiers |
| Plan Validated | Event emitted when a plan passes all critical validation checks | Execution Engine, Decision Engine, Validation Engine | Event-scoped; references validated plan version | All critical checks pass |
| Plan Revised | Event emitted when a plan is revised based on a trigger | Execution Engine, audit systems | Event-scoped; references old and new plan versions | New plan version valid; revision trigger documented |
| Plan Superseded | Event emitted when a revised plan replaces the active plan | Execution Engine, audit systems | Event-scoped; references old and new plan versions | Superseding plan validated |
| Plan Completed | Event emitted when all plan steps are marked as completed | Execution Engine, audit systems, Memory Engine | Event-scoped; references completed plan version | All steps in completed state |
| Plan Failed | Event emitted when a plan cannot proceed due to unrecoverable step failure | Execution Engine, audit systems | Event-scoped; references failed plan version | Failure reason and failing step documented |

All plans are immutable once validated. Plan revisions produce new plan versions; corrections never modify existing plans. Output contracts are explicit enough for consuming Engines to validate received plans against the schemas defined here.

### Engine Operations

#### Planning Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `create_plan(goal, constraints, preferences, priority)` | Generate a validated plan from a goal | Planning request | Validated plan with planning record and validation report | Goal analysis, knowledge retrieval, decomposition, dependency resolution, assembly, validation | Goal ambiguous (conservative scoping applied); validation failure (plan blocked with report) |
| `revise_plan(plan_version, trigger, scope)` | Revise an existing plan based on a trigger | Plan version, revision trigger, revision scope | Revised plan (new version) with revision record | Re-analysis, re-decomposition, re-validation as needed | Trigger invalid; revision scope exceeds limits; validation failure |

#### Query Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `get_plan(plan_id)` | Retrieve the current version of a plan | Plan identifier | Plan with full metadata, steps, dependencies, and validation report | None | Plan not found (error) |
| `get_plan_version(plan_id, version)` | Retrieve a specific version of a plan | Plan identifier, version number | Plan version with metadata | None | Plan or version not found (error) |
| `get_planning_record(plan_id)` | Retrieve the planning process record for a plan | Plan identifier | Planning record (goal analysis, knowledge used, decomposition reasoning) | None | Plan or record not found (error) |
| `get_dependency_graph(plan_id)` | Retrieve the dependency graph for a plan | Plan identifier | Dependency graph (nodes, edges, classifications) | None | Plan not found (error) |

#### Lifecycle Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `cancel_plan(plan_id, reason)` | Cancel an active plan | Plan identifier, cancellation reason | `Plan Superseded` event; plan lifecycle transitioned | Plan marked as superseded; Execution Engine notified | Plan not active (error) |
| `archive_plan(plan_id)` | Archive a completed or superseded plan | Plan identifier | Archive confirmation | Plan moved to archive; no longer active | Plan still has active references (blocked) |

#### Feedback Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `receive_execution_feedback(feedback)` | Process execution feedback from the Execution Engine | Execution feedback (step ID, result, status) | Feedback acknowledgment; may trigger plan revision | Step state updated; revision evaluated | Feedback references non-existent step or plan (logged and discarded) |

Operations are idempotent where applicable. `create_plan` with the same goal and context returns the existing plan if one exists for that goal and context. `receive_execution_feedback` with a duplicate feedback record returns the existing acknowledgment.

### Engine Events

#### Events Emitted

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

#### Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Context Updated` | Context Engine (A.5.1) | Evaluate whether context change triggers plan revision for active plans |
| `Context Compacted` | Context Engine (A.5.1) | Update context references for active plans |
| `Knowledge Superseded` | Knowledge Engine (A.5.2) | Evaluate whether superseded knowledge affects active plans; trigger revision if applicable |
| `Knowledge Deprecated` | Knowledge Engine (A.5.2) | Evaluate whether deprecated knowledge affects active plans; trigger revision if applicable |
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine may request plans, make planning services available |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list |
| `Configuration Updated` | Governance or Engine configuration | Reload configuration; re-evaluate active plans if rules changed |

### Engine Handoff Contract

This contract defines the requirements for transferring validated outputs from the Planning Engine to downstream consumers, per the Engine Handoff Contract defined in A.5.0.

#### Handoff Prerequisites

Before the Planning Engine hands off a validated plan to the Execution Engine, the following conditions must be satisfied:

1. The plan has passed all critical validation checks defined in the Validation section.
2. The plan has been assigned a version and is immutable.
3. The dependency graph is acyclic and has a valid topological order.
4. All steps have unique identifiers, preconditions, postconditions, and expected outcomes.
5. The plan references valid context and knowledge versions.
6. The planning record and validation report are attached.
7. The Planning Engine is in steady-state or degraded lifecycle phase.

#### Required Evidence

| Evidence | Description | Retention |
|:---|:---|:---|
| Plan version identifier | Unique version of the handed-off plan | Duration of plan execution + audit retention period |
| Validation report | All critical and advisory check results | Same as plan |
| Dependency graph | Step dependencies with classifications | Same as plan |
| Planning record | Goal analysis, knowledge used, decomposition reasoning | Same as plan |
| Context reference | Context Engine snapshot version used | Same as plan |
| Knowledge references | Knowledge entity versions used | Same as plan |
| Traceability matrix | Step-to-goal traceability | Same as plan |

#### Validated Outputs

- Validated plans (immutable, versioned, with all evidence attached).
- Plan deltas (for revisions, referencing parent version).
- Planning records (immutable, per plan version).
- Validation reports (immutable, per plan version).

#### Snapshot Expectations

Plans are immutable once validated. The Execution Engine receives a versioned plan that is guaranteed not to change. If the plan needs revision, the Planning Engine produces a new plan version and the Execution Engine switches to it.

#### Receiving Consumers

1. Execution Engine (A.5.5, future) — primary consumer
2. Decision Engine (A.5.4, future) — for plan evaluation
3. Validation Engine (A.5.6, future) — for plan validation

#### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Validation failure | Plan blocked; validation report returned to requesting Engine | If all validation attempts fail, goal returned as "unplannable" with evidence |
| Consumer unreachable | Plan retained; delivery retried per A.4.5 | After retry exhaustion, consumer marked unreachable; plan remains available for later retrieval |
| Dependency cycle detected | Plan blocked; cycle resolution triggered | If resolution fails, `Dependency Cycle Detected` event escalated to governance |
| Context unavailable | Plan generated with last known context + staleness warning | No escalation — plan is usable but flagged |
| Knowledge unavailable | Plan generated with default rules + knowledge-gap warning | No escalation — plan is usable but flagged |

#### Audit Record Expectations

Every handoff produces an audit record:

- Plan version identifier.
- Receiving consumer.
- Handoff timestamp.
- Validation status.
- Evidence checklist.
- Context and knowledge reference status.

#### Certification Gates

Before the Planning Engine enters a handoff state transition, the following certification gates must be satisfied:

1. **Pre-handoff validation** — All critical checks pass.
2. **Evidence completeness** — All required evidence items present.
3. **Consumer readiness** — Execution Engine registered and reachable.
4. **Invariant preservation** — All seven invariants hold.
5. **Cross-engine consistency** — Context and knowledge references valid.

If any gate fails, handoff does not proceed. The plan remains in "drafted" or "validated" state with documented blockers.

---

## Lifecycle

### Engine Lifecycle

The Planning Engine's lifecycle behaviour is defined within the A.4.4 Engine Lifecycle model. The following describes Planning Engine-specific behaviour at each lifecycle transition:

#### Initialization

The Planning Engine initializes when the Engine Platform starts:

- Registers with the Engine Registry (A.4.3) as a Task Planning capability provider.
- Loads configuration inputs (decomposition rules, maximum depth, validation policy, revision policy, dependency strategy, parallelization policy).
- Establishes communication channels with the Context Engine, Knowledge Engine, and potential consuming Engines via the Engine Communication model (A.4.5).
- Subscribes to execution feedback events from the Execution Engine (when available) and context change events from the Context Engine.
- Emits a `Planning Engine Initialized` event.

Initialization dependencies include the Engine Registry being available, configuration being loaded, and communication channels being established. The Context Engine and Knowledge Engine need not be in steady state — the Planning Engine can operate on last-known state.

#### Startup

After initialization:

- Confirms connectivity with the Context Engine and Knowledge Engine.
- Verifies that context pull and knowledge retrieval operations succeed.
- Performs a readiness check by processing a test planning request.
- Transitions to steady-state operation upon successful readiness confirmation.

#### Steady-State Operation

In steady state, the Planning Engine:

- Accepts and processes planning requests (goal decomposition, plan generation, validation).
- Monitors for revision triggers (context changes, execution feedback, knowledge updates).
- Processes plan queries from peer Engines.
- Produces planning records, validation reports, and revision records for auditability.

The Planning Engine operates on a request-driven model — it generates plans when requested, not on a periodic cycle. Revision triggers are processed asynchronously.

#### Degradation

- **Request backlog** — When planning requests exceed capacity, the Planning Engine prioritizes revision requests over new planning requests, as revisions may unblock ongoing execution.
- **Context Engine unavailable** — The Planning Engine continues to generate plans using the last known context, with a staleness warning attached to the plan.
- **Knowledge Engine unavailable** — The Planning Engine continues to generate plans using default decomposition rules, with a knowledge-gap warning attached to the plan.
- **Resource pressure** — When the plan set size (active + archived plans) exceeds configured limits, the Planning Engine archives the oldest non-active plans.

#### Shutdown

During graceful shutdown:

- Completes all in-progress planning operations.
- Marks all active plans with their current state.
- Emits a `Planning Engine Shutdown` event with a state summary (active plans, pending revisions, in-progress operations).
- Unsubscribes from events.
- Deregisters from the Engine Registry.

#### Restart and Recovery

On restart:

- Re-establishes communication channels.
- Retrieves the current context from the Context Engine.
- Re-subscribes to events.
- Recovers active plan state from the persistence layer (plan versions, step states, validation records).
- Emits a `Planning Engine Recovered` event.
- Resumes steady-state operation.

Recovery-critical state: all active plan versions with their step states, the most recent context and knowledge references, and configuration inputs. In-progress planning operations are transient and do not survive restart — they must be resubmitted.

---

## Validation

### Engine Invariants

The following properties must always hold for the Planning Engine regardless of state, inputs, or operations:

#### Invariant 1: Plan Version Monotonicity

Every plan version has a strictly greater version identifier than all previous versions of the same plan. No two plan versions share the same identifier. The plan version chain is a strictly monotonically increasing sequence per plan.

#### Invariant 2: Plan Immutability After Validation

Once a plan has been validated (transitioned from "drafted" to "validated"), it cannot be modified. Any correction or revision produces a new plan version. No operation on the Planning Engine mutates a validated plan.

#### Invariant 3: Dependency Graph Acyclicity

The dependency graph of every validated plan is a directed acyclic graph (DAG). If cycles are detected during plan generation, they must be resolved before the plan can be validated. No validated plan may contain a dependency cycle.

#### Invariant 4: Goal-Plan Traceability

Every plan step is traceable to the goal it serves. The planning record documents the decomposition reasoning that connects each step to a portion of the goal. No plan step exists without a documented connection to the goal or to another step that is itself connected to the goal.

#### Invariant 5: Single Active Plan Per Goal

For any given goal identifier, there is at most one active (non-superseded, non-retired) plan. A new plan for the same goal supersedes the previous active plan before becoming active itself.

#### Invariant 6: Validation-Before-Handoff

No plan is handed off to the Execution Engine unless it has passed all critical validation checks. The validation report must be attached to the plan as part of the handoff.

#### Invariant 7: Revision Traceability

Every plan revision references the plan version it revises, the trigger that caused the revision, the scope of the revision, and the specific changes made. No plan revision exists without a documented reason.

### Validation Rules

#### Input Validation

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Planning request schema | Request structure matches the expected schema (goal, constraints, preferences, priority) | Request rejected; specific violations listed |
| Goal statement non-empty | Goal statement contains at least one actionable intent | Request rejected; "empty goal" error |
| Revision trigger validity | Trigger type valid; affected plan version exists; trigger context present | Trigger logged; not processed if plan not found |
| Context reference validity | Referenced context snapshot version is accessible | Planning proceeds with last known context; staleness warning |
| Knowledge reference validity | Referenced knowledge entities are accessible and active | Planning proceeds with available knowledge; gaps flagged |

#### Plan Validation (Critical Checks)

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

#### Plan Validation (Advisory Checks)

Advisory checks produce warnings but do not block plan handoff:

| Check | Rule | Advisory Condition |
|:---|:---|:---|
| **Step complexity** | No single step exceeds a configured complexity threshold | Warning if exceeded; consider further decomposition |
| **Plan depth** | The plan does not exceed the maximum recommended depth | Warning if exceeded |
| **Parallelization opportunity** | Steps that could be parallelized but are not marked as such | Informational; suggests optimization |
| **Knowledge freshness** | All knowledge entities used are within their freshness window | Warning if any entity is stale |
| **Context staleness** | The context snapshot used is within the freshness window | Warning if context is stale |

#### State Transition Validation

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

### Certification Requirements

Before the Planning Engine transitions from Draft to Approved, the following certifications must be completed:

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 20 TPL-001 mandatory sections present with Engine-specific subsections per A.5.0 mapping | Section-by-section compliance matrix against A.5.0 Appendix A |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist (all items pass) |
| **STD-003 Terminology Compliance** | All terms used in this RFC conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All seven invariants are expressible as testable assertions | Invariant test specification document |
| **Determinism Verification** | Same goal + context + knowledge produces same plan | Determinism test evidence |
| **Cross-Engine Alignment** | Context Engine and Knowledge Engine consumption contracts are compatible | Cross-Engine alignment verification report |
| **Completeness Check** | All responsibilities map to at least one operation | Responsibility-to-operation traceability matrix |
| **Event Completeness** | All lifecycle transitions produce corresponding events | Lifecycle-to-event traceability matrix |

**Certification Gates**:

- Certification evidence must be reviewed by the Enterprise Documentation Standards Board.
- Cross-engine alignment must be verified against A.5.1 and A.5.2 output contracts.
- Certification does not imply canonical status — canonical promotion requires separate governance approval.
- Certification evidence must be traceable to this RFC's Traceability ID: `AI-DOS.V3.A.005.3`.

---

## Ownership

### Engine Ownership

#### Accountable Owner

**Role**: Framework Architecture Team

The Framework Architecture Team is the single accountable owner for the Planning Engine's architectural correctness, governance alignment, and certification readiness. The Planning Engine is a critical reasoning Engine that transforms intent into executable structure, and its architecture must remain under centralized architectural control.

#### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Decomposition rule architecture | Yes | Persistence implementation |
| Dependency resolution rules | Yes | Execution scheduling |
| Plan validation model | Yes | Execution monitoring |
| Plan lifecycle design | Yes | Platform persistence |
| Extension model governance | Yes | Extension implementations |
| Revision policy | Yes | Execution error recovery |

#### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New decomposition rules | Autonomous for standard patterns | Yes for novel goal types |
| Dependency resolution strategy change | Autonomous for selecting existing strategies | Yes for new strategies |
| Validation policy changes | Autonomous for advisory check configuration | Yes for critical check modifications |
| Revision policy changes | Autonomous for minor scope adjustments | Yes for governance-approval threshold changes |
| Plan cancellation policy | Autonomous for automated cancellation rules | Yes for governance-required cancellation scenarios |

#### Validation Obligations

The owner must validate the following before requesting review:

- All 20 TPL-001 mandatory sections are present with Engine-specific subsections per A.5.0 mapping.
- All seven invariants are preserved by the proposed architecture.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- The Document Metadata is fully STD-010-compliant.
- No implementation scope has been introduced.
- Cross-engine alignment is verified with A.5.1 and A.5.2.

#### Review Obligations

The owner must present the following for review to the Enterprise Documentation Standards Board:

- The complete RFC with all sections.
- The responsibility-to-operation traceability matrix.
- The lifecycle-to-event traceability matrix.
- The invariant test specification.
- Evidence of STD-010 and STD-003 compliance.
- Cross-engine alignment verification reports.

#### Certification Responsibilities

The owner must produce the following evidence to support certification:

- Template compliance matrix (A.5.0 mapping).
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Cross-engine alignment evidence.
- Dependency acyclicity test results.

#### Ownership Handoff Limitations

Ownership may transfer from the Framework Architecture Team to another named role or individual only through a governance-authorized transition. The transition must:

- Record the current owner, new owner, transition date, and governance authorization in the Engine Registry.
- Transfer all validation, review, and certification obligations to the new owner.
- Preserve all existing certification evidence and traceability.
- Not occur silently or implicitly — the Engine Registry must reflect the change before it takes effect.

---

## Risks

### Risk-1: Decomposition Rule Quality Directly Affects Plan Quality

**Severity**: High
**Likelihood**: Medium
**Impact**: The Planning Engine's plan quality is bounded by the quality of its decomposition rules. Poorly authored rules will produce poor plans regardless of how well the pipeline executes. Since decomposition rules are governance artifacts that require domain expertise, the risk of insufficiently tested rules entering production is significant.
**Mitigation**: Decomposition rules require Framework Governance approval for novel goal types. Standard patterns can be registered through Engine configuration. The determinism invariant allows rules to be tested exhaustively: the same goal and context always produce the same plan, enabling automated regression testing of rule changes. The advisory check for step complexity provides a signal when decomposition may be insufficient.

### Risk-2: Planning-Decision Boundary Overlap

**Severity**: Medium
**Likelihood**: Medium
**Impact**: The Planning Engine produces plans and the Decision Engine evaluates trade-offs. If the boundary is unclear, the Planning Engine may encroach on decision-making (e.g., choosing between plan alternatives) or the Decision Engine may attempt to restructure plans. This would create architectural ambiguity and duplicated responsibility.
**Mitigation**: The Non Responsibilities section explicitly assigns trade-off decisions to the Decision Engine. The Planning Engine produces plans; it does not evaluate whether a goal is "worth pursuing." The Planning Engine may produce multiple plan variants if decomposition rules allow, but the selection between variants is the Decision Engine's concern. Cross-engine alignment verification is a certification requirement.

### Risk-3: Context-Knowledge Staleness During Long Planning Operations

**Severity**: Medium
**Likelihood**: High
**Impact**: Complex goals may require extended planning time. During this time, the context snapshot and knowledge entities used at the start of planning may become stale. The resulting plan is grounded in outdated information, potentially leading to execution issues.
**Mitigation**: The Planning Engine attaches context and knowledge version references to every plan, enabling consumers to assess freshness. Advisory checks flag stale context and knowledge. The revision loop allows plans to be updated when context or knowledge changes. The Execution Engine can detect staleness by comparing the plan's context version against the current context.

### Risk-4: Dependency Cycle Resolution May Produce Suboptimal Plans

**Severity**: Medium
**Likelihood**: Low
**Impact**: The "introduce intermediate" strategy resolves cycles by adding mediating steps, but these steps may not be meaningful in the problem domain — they are structural artifacts. The "relax" strategy weakens dependency guarantees, potentially allowing execution order violations. The "escalate" strategy blocks planning entirely.
**Mitigation**: The default strategy (introduce intermediate) preserves the most plan structure. Strategy selection is governance-controlled. The `Dependency Cycle Detected` event provides full transparency when escalation occurs, enabling governance to provide domain-specific resolution guidance. Cycle detection runs in O(V+E) and is deterministic, ensuring no cycles slip through.

### Risk-5: Plan Archive Growth

**Severity**: Low
**Likelihood**: High
**Impact**: The plan archive grows with every completed, failed, or superseded plan. Over extended operation, the archive may become a storage concern. Unlike the Knowledge Engine's provenance index, plan archives contain large structured artifacts (steps, dependencies, records).
**Mitigation**: Compaction archives the oldest non-referenced plans when configured limits are reached. Archive retention policy is a governance concern, not an architecture concern. The Planning Engine defines what is archived; governance defines how long it is retained.

### Risk-6: Revision Scope Explosion

**Severity**: Medium
**Likelihood**: Low
**Impact**: A major context change or widespread knowledge invalidation could trigger revision of all active plans simultaneously, overwhelming the Planning Engine's capacity. The revision scope resolution rules may not prevent this if the change is truly goal-relevant.
**Mitigation**: Revision scope is deterministically resolved per trigger type. Major context changes always trigger full replan (bounded, not cascading). The degradation model prioritizes revision requests over new planning requests to unblock ongoing execution. If capacity is exceeded, plans are generated with staleness warnings rather than blocking indefinitely.

---

## Open Questions

1. **OQ-1: Should the Planning Engine support multi-goal plans (plans that serve multiple simultaneous goals)?** The current model assumes one goal per plan. Multi-goal plans would require a more complex dependency graph (cross-goal dependencies), a more complex revision scope model (a revision trigger may affect only one goal within a multi-goal plan), and a more complex success criterion model. The benefit is reduced planning overhead when multiple goals are related and can share steps.

2. **OQ-2: How should the Planning Engine handle a goal that is "unplannable" — where no valid plan can satisfy the goal's constraints given the current context and knowledge?** The current model blocks the plan and returns the goal with evidence. Should the Planning Engine also produce a "nearest feasible plan" (a plan that satisfies as many constraints as possible) as an advisory output? This would provide the requesting Engine with actionable options rather than a flat rejection.

3. **OQ-3: Should the Planning Engine define plan comparison semantics for the Decision Engine?** The Decision Engine needs to evaluate plan alternatives, but the Planning Engine currently produces plans independently. If the Decision Engine requests "alternative plans" for the same goal, should the Planning Engine define how alternatives are generated (e.g., different decomposition patterns, different dependency relaxations) and how they are structurally compared?

4. **OQ-4: How should the Planning Engine interact with the Memory Engine for learning from past plans?** The Memory Engine may identify patterns in past plans (e.g., certain decomposition patterns consistently fail, certain dependency structures lead to cycles). Should the Planning Engine consume Memory Engine insights as inputs to the Goal Analyzer or Decomposer, and if so, how should these insights be validated before use?

---

## Completion Criteria

A.5.3 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with substantive content, structured per A.5.0's Engine RFC Section Mapping.
2. All 16 Specializable subsections contain Planning Engine-specific content (not template language).
3. All seven invariants are stated and expressible as testable assertions.
4. All seven responsibility groups map to at least one operation.
5. All lifecycle transitions produce corresponding events.
6. The Engine Ownership Contract addresses all seven mandatory elements.
7. The Engine Handoff Contract addresses all eight mandatory elements.
8. STD-010 metadata is fully compliant (all mandatory fields, correct table shape, correct heading).
9. No implementation scope (source code, APIs, persistence, LLM details, agent/swarm runtime) is present in any section.
10. Cross-engine alignment is verified — plan operations consume Context Engine and Knowledge Engine outputs as defined.
11. TPL-001 specialization compliance is verified (no mandatory sections removed, Engine-specific content as subsections within TPL-001 sections).
12. Framework Governance has reviewed and approved the RFC structure.
13. Version History records all changes from the prior version with rationale.

---

## Version History

| Version | Status | Traceability | Notes |
|:---|:---|:---|:---|
| `0.1.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-3` | Initial creation as independent Engine Specialization RFC with 32-section structure. Pre-TPL-001 alignment. |
| `0.2.0-draft` | Draft | `AI-DOS.V2.RUNTIME.A-5-3` | Expanded with Universal Section Contract compliance, strengthened validation, and normalized governance alignment per A.5.0 pre-refactoring template. |
| `0.3.0-draft` | Draft | `AI-DOS.V3.A.005.3` | Refactored to A.5.0/TPL-001 compliance: remapped from 32 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections per A.5.0 Appendix A mapping. Added 5 Design Decisions, 6 Risks, 4 Open Questions. Removed Completion Report (content migrated to Design Decisions, Risks, Validation). Updated Traceability ID from AI-DOS.V2.RUNTIME.A-5-3 to AI-DOS.V3.A.005.3. Updated Version from 0.2.0-draft to 0.3.0-draft. All content preserved; no authority changes. |

---

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, A.5.0, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

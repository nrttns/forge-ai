# A.5.1 — Context Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-1` |
| Title | A.5.1 — Context Engine RFC |
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
| Traceability ID | `AI-DOS.V3.A.005.1` |
| Scope | Defines the architecture of the Context Engine — the Engine responsible for acquiring, resolving, versioning, and distributing contextual state for all peer Engines in the AI-DOS v4 Engine Platform. |
| Out of Scope | Source code, implementation, REST APIs, persistence mechanisms, database schema, caching, LLM call orchestration, prompt engineering, agent runtime, swarm runtime, platform adapters, and ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 Engine Kernel; A.4.2 Engine Contract; A.4.3 Engine Registry; A.4.4 Engine Lifecycle; A.4.5 Engine Communication; A.4.6 Engine State; A.4.7 Engine Capability; A.5.0 Engine Specialization RFC Template; STD-003; STD-010; TPL-000; TPL-001 |
| Consumes | Engine Platform capability model, Engine Kernel services, Engine Contract interface, Engine Registry discovery, Engine Lifecycle state machine, Engine Communication messaging, Engine State model, Engine Capability "Context Resolution" domain, canonical terminology, metadata rules, template governance, and RFC template rules. |
| Produces | Context Engine architecture, context acquisition model, resolution rules, versioning model, distribution model, internal processing pipeline, six engine invariants, operation catalogue, event catalogue, ownership contract, and handoff contract. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.2-Knowledge-Engine-RFC.md` (future) |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, A.5.0 template compliance, Engine Platform consumption validation, ownership-boundary validation, invariant verifiability, determinism verification, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

<details>
<summary>Metadata Value Expansion</summary>

**Normative References (full paths):**

- `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`
- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`

**Consumed Authorities:**

- A.4.7: Engine Capability domain "Context Resolution" that this Engine uniquely owns
- A.4.4: Engine Lifecycle state machine that this Engine's lifecycle behaviour specializes
- A.4.5: Engine Communication model for inter-Engine messaging and signal transport
- A.4.6: Engine State model for state structure, versioning, and transitions
- A.4.3: Engine Registry for registration, discovery, and consumer management
- A.4.2: Engine Contract for input/output schemas and operation signatures
- A.4.1: Engine Kernel for execution environment and foundational services
- A.4: Engine Platform for capability model and overall architectural context
- STD-010: metadata schema and compliance rules
- STD-003: canonical terminology for context signals and resolved context elements
- TPL-001: RFC template standard (20 mandatory sections)
- A.5.0: Engine Specialization RFC Template (Engine-specific subsection mapping)

</details>

---

## Executive Summary

A.5.1 defines the Context Engine — the first individual Engine specialization in Phase 2 of the AI-DOS v4 Engine Platform. The Context Engine serves as the single authoritative source for context acquisition, resolution, versioning, and distribution, ensuring that every peer Engine operates on a consistent, resolved, and traceable contextual state. It specializes the Engine Platform by defining a deterministic, five-stage internal processing pipeline, six architectural invariants, a complete operation and event catalogue, and a governed handoff contract. It consumes the Engine Platform without redefining it.

---

## Purpose

### Engine Purpose

The Context Engine exists to ensure that every Engine in the AI-DOS v4 platform operates on a consistent, resolved, and versioned contextual state. Context is the shared informational substrate that connects user intent, task history, environmental conditions, and inter-Engine state into a unified representation that all Engines can reason about and contribute to.

Without a dedicated Context Engine, each Engine would independently acquire, interpret, and maintain its own view of context, leading to divergence, duplication, conflicting state, and non-deterministic behaviour. The Context Engine eliminates this risk by serving as the single authoritative source for context acquisition, resolution, versioning, and distribution. It ensures that the Planning Engine, Decision Engine, Execution Engine, Validation Engine, and all other peer Engines receive context that is traceable, validated, and consistent with the current task state.

The Context Engine's purpose is not to store all data — that is the concern of persistence and knowledge systems — but to provide a real-time, resolved view of what is contextually relevant at any given point in the Engine Platform's operation. It transforms raw inputs from multiple sources into a structured, prioritized, and versioned context representation that downstream Engines can consume with confidence.

This purpose aligns with Engine Capability domain "Context Resolution" as defined by A.4.7. The Context Engine uniquely owns the capability of determining what information is contextually relevant, resolving conflicts between overlapping context sources, and maintaining a temporal context chain that supports explainability and auditability.

### Engine Mission

The mission of the Context Engine is to provide every peer Engine with the right context, at the right time, in the right format, with full traceability from source to consumption.

This mission translates into four mission-level objectives that guide all architectural decisions within this RFC:

1. **Completeness** — Every piece of information that is contextually relevant to the current task shall be included in the resolved context, regardless of which Engine or external source produces it. Completeness does not mean including all available information; it means including all information that passes the relevance threshold defined by the Context Engine's resolution rules.

2. **Consistency** — All Engines consuming context from the Context Engine at the same logical moment shall receive a consistent view. If two Engines request context within the same task step, they shall see the same resolved state unless explicitly configured for divergent context views.

3. **Traceability** — Every element in the resolved context shall be traceable to its source, acquisition time, version, and the resolution rule that included it. This supports auditability, explainability, and the ability to replay or reconstruct the context at any point.

4. **Timeliness** — The resolved context shall reflect the most recent relevant state. Stale context elements shall be identified, marked, and either refreshed or evicted according to the Context Engine's freshness rules.

The mission is testable: a reviewer can determine whether a proposed design fulfills or violates each objective by examining whether the design can guarantee completeness, consistency, traceability, and timeliness under all defined operating conditions.

---

## Scope

### In Scope

This RFC governs:

1. The Context Engine's position in the Engine topology and data flow.
2. The typed inputs the Context Engine requires (context signals and configuration inputs).
3. The typed outputs the Context Engine produces (resolved snapshots, deltas, metadata, lifecycle events).
4. The internal processing pipeline (Signal Queue, Signal Classifier, Context Workspace, Resolution Engine, Version Manager, Distribution Manager).
5. The resolution rules for conflict, ambiguity, fallback, and compaction.
6. The validation rules for inputs, outputs, and state transitions.
7. The six architectural invariants that must always hold.
8. The operations the Context Engine exposes (acquisition, resolution, versioning, distribution, lifecycle).
9. The events the Context Engine emits and reacts to.
10. The Engine-specific lifecycle behaviour within the A.4.4 lifecycle model.
11. The Engine state dimensions, consistency rules, and recovery requirements.
12. The AI consumption boundaries (no LLM involvement in core architecture).
13. The runtime interaction rules (synchronous/asynchronous, concurrency).
14. The extension model (custom classifiers, resolution strategies, relevance scorers, compaction strategies).
15. The knowledge graph integration projection points.
16. The certification requirements and gates.
17. The performance characteristics and scalability expectations.
18. The security boundaries and governance constraints.
19. The ownership contract (accountable owner, boundaries, decision rights, validation obligations, review obligations, certification responsibilities, handoff limitations).
20. The handoff contract (prerequisites, evidence, validated outputs, snapshot expectations, receiving consumers, failure handling, audit records, certification gates).

### Out of Scope

The following concerns are explicitly out of scope for the Context Engine and shall not appear in any section of this RFC:

1. Source code, implementation files, and code repositories.
2. REST endpoints, API definitions, GraphQL schemas, gRPC service definitions, and transport protocols.
3. Persistence mechanisms, database schema design, Neo4j implementation specifics, and vector database configuration.
4. Caching strategies, cache invalidation, and cache infrastructure.
5. LLM call orchestration, prompt engineering, model selection, token management, and inference optimization.
6. Agent runtime design, agent lifecycle management, and agent communication protocols.
7. Swarm runtime design, swarm coordination, and swarm topology management.
8. Platform adapter specifications and adapter lifecycle management.
9. ProjectStatus updates, project tracking, and milestone reporting.
10. Certification execution — this RFC defines certification requirements but does not execute the certification process.
11. Canonical promotion — this RFC defines promotion requirements but does not perform the promotion.
12. UI/UX design, user interface components, and visualization of context.

---

## Normative Authority

| Authority | Relationship |
|:---|:---|
| Human Governance | Ultimate approval and canonical promotion authority for this RFC and all Engine RFCs. |
| `AGENTS.md` | Defines the AI agent behavioural boundaries and operational constraints that this RFC and its Engine must observe. |
| `docs/AI/GOVERNANCE.md` | Establishes the governance framework, review processes, and approval workflows that this RFC shall follow. |
| `docs/AI/FrameworkGovernance.md` | Defines framework-level governance policies, conflict resolution, exception handling, and escalation procedures. |

---

## Normative References

| Reference | Full Path | Consumption |
|:---|:---|:---|
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; this RFC follows TPL-001's 20 mandatory output sections with Engine-specific subsections as defined by A.5.0. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, and naming conventions. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; this RFC's Document Metadata section conforms to STD-010. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; context signals and resolved context elements must use STD-003 terminology. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.4 Engine Architecture | Engine Platform definition, capability model, contract framework | Context Engine would lack the platform boundary that separates Engine specialization from platform definition |
| A.4.1 Engine Kernel | Execution environment, registration, discovery, health monitoring | Context Engine could not register itself or discover peer Engines |
| A.4.2 Engine Contract | Input/output schemas, operation signatures, event contracts | Context Engine could not define conformant input/output interfaces |
| A.4.3 Engine Registry | Registry service for registration and consumer management | Context Engine could not register as a capability provider or manage consumer subscriptions |
| A.4.4 Engine Lifecycle | Lifecycle state machine (initialization, startup, steady state, degradation, shutdown, recovery) | Context Engine could not define Engine-specific lifecycle behaviour within the platform model |
| A.4.5 Engine Communication | Communication model for inter-Engine messaging, event delivery, signal transport | Context Engine could not distribute snapshots or receive signals from peer Engines |
| A.4.6 Engine State | State model for state structure, versioning, and transitions | Context Engine could not define its state dimensions within the platform state model |
| A.4.7 Engine Capability | Capability registry mapping to "Context Resolution" domain | Context Engine could not claim its unique capability domain |
| A.5.0 Engine Specialization RFC Template | Engine-specific subsection mapping within TPL-001's 20 mandatory sections | Context Engine would lack the structural contract that defines where Engine-specific content belongs |
| STD-010 | Document metadata schema and compliance rules | Metadata block would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology in context signals and resolved context would be inconsistent |
| STD-000 | Framework governance standards | Overarching governance context would be missing |
| M.0 | Framework meta-model | Foundational entity and relationship structures would be undefined |
| M.1 | Artifact meta-model | Artifact identity and lifecycle model would be undefined |

---

## Architecture

### Engine Position

#### Topological Position

The Context Engine occupies a central, upstream position in the Engine topology. It sits between the signal acquisition layer (external inputs, user interactions, environmental data) and the reasoning Engines (Planning, Decision, Execution, Validation). Its position can be characterized as follows:

```
                          ┌─────────────────────┐
                          │   Signal Sources     │
                          │  (User, Env, Meta)   │
                          └──────────┬──────────┘
                                     │
                                     ▼
                       ┌───────────────────────────┐
                       │      Context Engine        │
                       │  (A.5.1)                   │
                       │  Acquire → Resolve →        │
                       │  Version → Distribute      │
                       └─────────┬─────┬─────┬─────┘
                                 │     │     │
                    ┌────────────┘     │     └────────────┐
                    ▼                  ▼                    ▼
          ┌──────────────┐  ┌──────────────┐    ┌──────────────┐
          │   Planning    │  │  Decision    │    │  Knowledge   │
          │   Engine      │  │  Engine      │    │  Engine      │
          │  (A.5.3)      │  │  (A.5.4)     │    │  (A.5.2)     │
          └──────┬───────┘  └──────┬───────┘    └──────┬───────┘
                 │                 │                     │
                 ▼                 ▼                     ▼
          ┌──────────────┐  ┌──────────────┐    ┌──────────────┐
          │  Execution   │  │  Validation  │    │   Memory     │
          │  Engine      │  │  Engine      │    │  Engine      │
          │  (A.5.5)     │  │  (A.5.6)     │    │  (A.5.9)     │
          └──────────────┘  └──────────────┘    └──────────────┘
```

#### Data Flow Characterization

The Context Engine has multiple input paths and multiple output paths. It receives signals from external sources (user input, environmental data) and from peer Engines (state snapshots, feedback signals). It produces resolved context snapshots for all downstream Engines.

The Context Engine does not sit in a linear pipeline — it operates as a hub that receives from many sources and distributes to many consumers. This means that the Context Engine has no single upstream or downstream dependency; it has a fan-in / fan-out topology.

#### Unavailability Impact

If the Context Engine is unavailable, no downstream Engine can obtain a resolved context snapshot. This means the Planning Engine cannot plan, the Decision Engine cannot decide, and the Execution Engine cannot execute with contextual awareness. The Engine Platform's graceful degradation model (A.4.4) should define how Engines behave when context is unavailable — but the Context Engine itself does not define that behaviour.

### Internal Engine Model

#### Conceptual Overview

The Context Engine's internal model consists of five interconnected processing stages that transform raw signals into resolved, versioned context:

```
Signal Queue → Signal Classifier → Context Workspace → Resolution Engine → Version Manager
                                                                         ↓
                                                              Distribution Manager
```

#### Signal Queue

The Signal Queue is an ordered, bounded buffer that receives all incoming context signals. Each signal entry contains the raw signal data, source metadata, receipt timestamp, sequence number, and classification state (unclassified, classified, rejected).

The queue is bounded by a configurable maximum depth. When the queue is full, the Context Engine applies backpressure to sources: high-authority signals are accepted, low-authority signals are deferred with a notification to the producing source.

The queue supports three operations: `enqueue(signal)`, `dequeue()`, and `peek()`. It is deterministic: signals are dequeued in FIFO order within the same priority level.

#### Signal Classifier

The Signal Classifier processes each dequeued signal and assigns it a classification that determines how the Resolution Engine will treat it. Classification produces:

- **Signal type** — user input, task metadata, engine state, environmental parameter, or feedback signal.
- **Source authority** — the priority weight of the signal's source, drawn from the Source Authority Map.
- **Relevance domain** — which task phases or Engine capabilities this signal is relevant to.
- **Urgency** — whether this signal should trigger an immediate resolution cycle or wait for the next scheduled cycle.
- **Freshness expectation** — how quickly this signal is expected to decay.

The classifier is deterministic: the same signal with the same source metadata and configuration will always receive the same classification.

#### Context Workspace

The Context Workspace is the in-memory representation of the current context state. It is organized into three layers:

1. **Signal Layer** — The raw classified signals, organized by type and relevance domain. This layer preserves the original signal data and its classification for traceability.

2. **Entity Layer** — Merged entities where multiple signals refer to the same informational entity. For example, a user's stated intent and a task's goal description may be merged into a single "Task Intent" entity. The Entity Layer records the merge reasoning and the source signals that contributed to each entity.

3. **Resolved Layer** — The final resolved context that will be versioned and distributed. This layer contains only the entities that pass the relevance threshold and have no unresolved conflicts.

The workspace supports concurrent read access from the Resolution Engine and the Distribution Manager. Write access is serialized through the resolution cycle to maintain consistency.

#### Resolution Engine

The Resolution Engine is the core processing component that transforms the Signal Layer and Entity Layer into the Resolved Layer. It performs four operations in sequence:

1. **Conflict Detection** — Scans the Entity Layer for entities that have conflicting attributes from multiple sources. A conflict exists when two signals provide different values for the same attribute of the same entity.

2. **Conflict Resolution** — Applies resolution rules (see Resolution Rules subsection below) to each detected conflict. Resolution produces a winning value and a resolution record that explains the decision.

3. **Relevance Scoring** — Assigns a relevance score to each entity based on its relevance domain, temporal recency, source authority, and task-phase affinity. Entities below the relevance threshold are moved to a deferred pool rather than discarded.

4. **Snapshot Production** — Assembles the resolved entities into a coherent snapshot structure, attaches metadata (version, timestamp, source traces, relevance scores), and hands the snapshot to the Version Manager.

The Resolution Engine is deterministic: given the same Signal Layer, Entity Layer, resolution rules, and configuration, it will produce the same Resolved Layer. This supports replayability and auditability.

#### Version Manager

The Version Manager assigns a unique, monotonically increasing version identifier to each snapshot produced by the Resolution Engine. It maintains the context version chain — a linked list of snapshots that supports:

- **Point-in-time lookup** — Retrieving the resolved context as it existed at any past version.
- **Delta computation** — Computing the difference between any two versions.
- **Version conflict detection** — Identifying when concurrent updates have produced divergent branches in the version chain.

The Version Manager does not store the full history indefinitely. It retains the most recent N snapshots (configurable) and summarizes older snapshots into compaction records that preserve traceability without retaining full content.

#### Distribution Manager

The Distribution Manager handles the delivery of resolved snapshots (or deltas) to all registered consuming Engines. It supports two delivery patterns:

- **Push** — The Context Engine proactively sends each new snapshot (or delta) to all registered consumers immediately after versioning.
- **Pull** — A consuming Engine requests the current context snapshot on demand. The Distribution Manager returns the most recent version.

Push is the default delivery pattern for Engines that have registered for proactive context updates. Pull is available for Engines that only need context at specific points in their processing cycle (e.g., the Validation Engine may only need context when a validation request arrives).

### Resolution Rules

#### Conflict Resolution

When two or more signals provide conflicting values for the same attribute of the same entity, the Context Engine resolves the conflict using the following priority ordering:

1. **Source Authority** — The signal from the higher-authority source wins. Authority is defined by the Source Authority Map (consumed as a configuration input). Example: a user's explicit statement has higher authority than an inferred environmental parameter.

2. **Temporal Recency** — When source authority is equal, the more recent signal wins. Recency is determined by the signal's receipt timestamp.

3. **Signal Specificity** — When authority and recency are equal, the more specific signal wins. A signal that directly addresses the attribute in question is more specific than a signal that addresses a related attribute or a broader category.

4. **Task-Phase Affinity** — When authority, recency, and specificity are equal, the signal with higher affinity to the current task phase wins. Some signals are more relevant during planning, others during execution.

#### Ambiguity Handling

When a signal is ambiguous (e.g., a user input that could refer to multiple entities), the Context Engine applies the following rules:

1. **Defer and gather** — The ambiguous signal is held in the Signal Layer without merging it into an entity. Subsequent signals may disambiguate it.
2. **Timeout** — If disambiguation does not occur within a configurable timeout, the ambiguous signal is included in the resolved context with an `ambiguous` flag. Downstream Engines are informed that this context element is uncertain.
3. **Source consultation** — If the source supports clarification (e.g., the user can be asked for clarification), the Context Engine emits a `Clarification Requested` event to the appropriate source. The resolution cycle does not block on this; it proceeds with the ambiguous flag.

#### Fallback Behaviour

When resolution cannot produce a deterministic outcome (e.g., two signals have identical authority, recency, specificity, and task-phase affinity), the Context Engine applies the following fallback:

1. **Explicit tie-breaking configuration** — If the Engine configuration defines a tie-breaking rule for this conflict type, that rule is applied.
2. **Conservative inclusion** — If no tie-breaking rule exists, both conflicting values are included in the resolved context with a `conflict` flag. Downstream Engines are informed that a conflict exists and may apply their own resolution logic.
3. **Governance escalation** — If the conflict cannot be resolved and involves a governance-relevant attribute (e.g., task scope, ownership, authority), the Context Engine emits a `Conflict Escalated` event to Framework Governance. The resolution cycle continues with the conservative inclusion approach.

#### Compaction Resolution

When the context exceeds the configured size limit, the Context Engine compacts it by applying the following rules in order:

1. **Evict expired** — Remove all context elements that have exceeded their freshness threshold.
2. **Evict lowest relevance** — Remove elements with the lowest relevance scores until the context is within the size limit.
3. **Summarize clusters** — Group related elements into summary entities that preserve the essential information while reducing the total element count. Summarization preserves source traces and the original element count for auditability.
4. **Emit compaction event** — Produce a `Context Compacted` event that identifies what was evicted, what was summarized, and the pre- and post-compaction versions.

### Engine State

#### State Dimensions

The Context Engine maintains state across the following dimensions:

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Freshness policy, size limits, source authority map, relevance thresholds | Low — changes only through governance-authorized configuration updates |
| **Signal Queue State** | Current contents of the Signal Queue, including classified and unclassified signals | High — changes with every incoming signal |
| **Context Workspace State** | Current Signal Layer, Entity Layer, and Resolved Layer contents | High — changes with every resolution cycle |
| **Version Chain State** | History of versioned snapshots and compaction records | Medium — grows with each resolution cycle, compacted periodically |
| **Distribution State** | Consumer registry, delivery status for each snapshot, retry queues | Medium — changes with each distribution operation |
| **Lifecycle State** | Current lifecycle phase (per A.4.4) and transition history | Low — changes only at lifecycle transition points |

#### State Consistency

The Context Engine maintains consistency between its state dimensions through the following rules:

- The Version Chain State is always consistent with the Context Workspace State — every versioned snapshot corresponds to a resolved Context Workspace state.
- The Distribution State references valid versions in the Version Chain State — no distribution record references a non-existent version.
- The Configuration State is always consistent with the Resolution Engine's behaviour — a configuration change triggers a re-resolution if the change affects resolution rules, relevance thresholds, or source authority.

#### State Recovery

The Context Engine's recovery-critical state consists of the Version Chain State (most recent N snapshots) and the Configuration State. The Signal Queue State and Context Workspace State are transient and do not need to survive a restart — they are rebuilt from the most recent snapshot and incoming signals after recovery.

### AI Consumption Rules

#### AI Consumption Boundary

The Context Engine does not invoke LLMs or AI models as part of its core architecture. The Context Engine operates on deterministic rules for classification, resolution, versioning, and distribution. It does not use AI for context relevance scoring, conflict resolution, or entity merging.

#### When AI May Be Involved

The Context Engine may receive signals that were produced by AI/LLM processes in other Engines (e.g., a Planning Engine that uses an LLM to generate a plan, then sends the plan as a context signal). In this case:

- The Context Engine treats the AI-produced signal the same as any other signal — it is classified, validated, and resolved according to the same rules.
- The Context Engine does not need to know whether a signal was produced by AI or by a deterministic process.
- The source authority of AI-produced signals is determined by the producing Engine's authority in the Source Authority Map, not by the fact that AI was involved.

#### Prohibited AI Usage

- The Context Engine shall not use LLM calls to determine relevance scores.
- The Context Engine shall not use LLM calls to resolve conflicts.
- The Context Engine shall not use LLM calls to generate context summaries during compaction. Compaction summarization uses deterministic rules.
- The Context Engine shall not use prompt engineering or model selection in any capacity.

### Runtime Interaction Rules

#### Interaction Model

The Context Engine interacts with the runtime through the Engine Kernel (A.4.1) and Engine Communication (A.4.5). It does not interact directly with the agent runtime or swarm runtime.

#### Synchronous Interactions

The following operations are synchronous — the caller blocks until the Context Engine responds:

- `serve_context()` — A pull request for the current snapshot returns immediately with the most recent version or an error.
- `get_snapshot(version)` — A version lookup returns immediately with the snapshot or `not found`.

#### Asynchronous Interactions

The following operations are asynchronous — the caller does not block on the Context Engine's processing:

- `acquire_signal(signal)` — The caller submits a signal and receives an acknowledgment. Processing (classification, resolution) happens asynchronously.
- `distribute_snapshot()` — The Context Engine pushes snapshots to consumers asynchronously. Consumers acknowledge receipt asynchronously.

#### Concurrency Rules

- Multiple sources may submit signals concurrently. The Signal Queue serializes them.
- Only one resolution cycle runs at a time. Concurrent resolution requests are coalesced — if a resolution is already in progress, subsequent requests wait for its completion and receive the result.
- The Distribution Manager may deliver to multiple consumers concurrently.
- Read operations (`get_snapshot`, `serve_context`) do not block write operations (resolution, versioning) and vice versa, as long as they do not access the same snapshot version simultaneously.

### Extension Model

#### Extension Points

The Context Engine defines the following extension points that may be specialized without modifying the core architecture:

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom signal classifiers | Additional classification rules for domain-specific signal types | Must be registered through Engine configuration; must not override default classification |
| Custom resolution strategies | Alternative conflict resolution ordering for specific conflict types | Must be defined in the Source Authority Map or a governed configuration extension |
| Custom relevance scorers | Domain-specific relevance scoring functions | Must produce scores in the [0.0, 1.0] range; must not override the baseline scorer |
| Custom compaction strategies | Alternative compaction logic for specific context domains | Must preserve source traceability; must emit compaction events |

#### Extension Constraints

- Extensions must not modify the Context Engine's invariants (see Validation section, Engine Invariants).
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the versioning or distribution mechanisms.
- Extensions that affect conflict resolution must be reviewed by Framework Governance before deployment.
- Extensions must comply with STD-003 terminology requirements.

### Knowledge Graph Integration

#### Integration Model

The Context Engine's resolved context snapshots may be projected into the knowledge graph for traceability, cross-reference, and historical analysis. The Context Engine does not directly read from or write to the knowledge graph — integration is mediated through the Engine Platform's knowledge graph projection layer.

#### Projection Points

| Projection | Content | Purpose |
|:---|:---|:---|
| Context Version Node | Snapshot version, timestamp, task identifier, element count | Enable version-level traceability and historical queries |
| Context Element Node | Element identifier, type, source, relevance score | Enable element-level cross-reference and provenance tracking |
| Conflict Resolution Edge | Conflicting signals, resolution decision, rule applied | Enable conflict analysis and resolution pattern mining |
| Distribution Edge | Snapshot version, consumer identifier, delivery timestamp | Enable distribution tracking and coverage analysis |

#### Integration Constraints

- Knowledge graph projection is a downstream concern and does not affect the Context Engine's core processing.
- The Context Engine produces the data for projection; it does not define the projection schema, query model, or graph structure.
- Projection failures do not affect the Context Engine's operation — projection is best-effort and non-blocking.

### Performance Characteristics

#### Expected Performance Bounds

| Characteristic | Expected Bound | Notes |
|:---|:---|:---|
| Signal acquisition latency | Sub-cycle — signals are queued within the current acquisition window | Measured from signal receipt to queue entry |
| Classification latency | Per-signal — each signal is classified within a bounded time proportional to classification complexity | Deterministic; no AI/LLM involvement |
| Resolution cycle duration | Configurable interval; default is per-task-step | Duration depends on signal count, entity count, and conflict complexity |
| Snapshot versioning latency | Sub-millisecond per snapshot | Deterministic; monotonic version assignment |
| Distribution latency | Per-consumer — depends on Engine Communication (A.4.5) transport | Asynchronous; does not block Context Engine |
| Version lookup latency | Constant time per lookup | Supported by version index |
| Delta computation latency | Proportional to delta size between versions | Larger deltas take longer |
| Context recovery latency | Proportional to version chain depth | Bounded by retained snapshot count |

#### Scalability Characteristics

- The Context Engine is designed to handle multiple concurrent tasks, each with its own isolated context.
- Within a single task, the Context Engine handles multiple concurrent signal sources and multiple concurrent consumers.
- The Signal Queue provides backpressure when input rate exceeds resolution capacity, preventing unbounded memory growth.
- Compaction ensures that context size remains bounded even for long-running tasks.

#### Non-Goals

- This RFC does not define specific latency numbers (e.g., "50ms") — those are implementation concerns.
- This RFC does not define throughput targets (e.g., "1000 signals/second") — those are implementation concerns.
- This RFC does not define resource allocation (CPU, memory, network) — those are platform concerns.

### Security & Governance

#### Security Boundaries

- **Signal integrity** — The Context Engine validates every signal against its schema but does not authenticate or authorize signal sources. Source authentication and authorization are the responsibility of the Engine Communication layer (A.4.5) and the platform's security model.
- **Snapshot immutability** — Once versioned, snapshots cannot be tampered with. Any attempt to modify a versioned snapshot is a violation of Invariant 4 (Immutable Snapshots) and should be detected by the Version Manager's integrity checks.
- **Distribution access control** — The Context Engine distributes to all registered consumers. Consumer authorization (who is allowed to receive context) is managed by the Engine Registry (A.4.3), not by the Context Engine.
- **Configuration integrity** — Configuration changes (freshness policy, size limits, source authority map) must be governance-authorized. The Context Engine rejects configuration changes that do not carry governance authorization metadata.

#### Governance Constraints

- The Context Engine's Source Authority Map is a governance artifact — changes to source priorities require Framework Governance approval.
- Conflict escalation events are directed to Framework Governance for resolution.
- The Context Engine does not make governance decisions (e.g., it does not decide what is "correct" in a conflict — it applies the rules and escalates when rules are insufficient).
- The Context Engine's extension model requires governance review for extensions that affect conflict resolution or relevance scoring.

---

## Design Decisions

### DD-1: Central Hub Topology with Fan-In / Fan-Out

**Context**: The Context Engine needs to receive signals from multiple sources (user input, environmental data, peer Engine state snapshots) and distribute resolved context to multiple downstream Engines (Planning, Decision, Execution, Validation, Knowledge, Memory). The topological choice affects fault isolation, latency, and coupling.

**Options considered**: (a) Central hub with fan-in/fan-out topology; (b) Point-to-point connections between each source and each consumer; (c) Shared event bus with no central coordination.

**Decision**: Central hub topology (option a). The Context Engine sits between signal sources and reasoning Engines, receiving from many sources and distributing to many consumers through a single authoritative processing pipeline.

**Rationale**: A point-to-point approach (option b) would duplicate context resolution logic across every consumer and could not guarantee consistency. A shared event bus (option c) would provide transport but not the resolution, versioning, and traceability that the Context Engine uniquely owns. The hub topology provides a single point of authority for context resolution while the Engine Communication model (A.4.5) provides the transport reliability.

### DD-2: Fully Deterministic Resolution — No AI/LLM Involvement

**Context**: Context resolution involves classification, conflict resolution, relevance scoring, and compaction. Each of these could potentially benefit from AI/LLM-based approaches (e.g., using an LLM to determine whether two signals refer to the same entity).

**Options considered**: (a) Fully deterministic rules for all processing; (b) AI-assisted classification and resolution with deterministic fallback; (c) Fully AI-driven processing.

**Decision**: Fully deterministic rules (option a). No LLM calls for classification, resolution, relevance scoring, or compaction. The Context Engine may receive AI-produced signals from other Engines but processes them with the same deterministic rules as any other signal.

**Rationale**: Determinism is required for the four mission objectives. Completeness requires that the same input set always produces the same output. Consistency requires that concurrent consumers receive the same resolved state. Traceability requires that every decision can be replayed and audited. Timeliness requires bounded, predictable processing time. AI/LLM involvement would compromise all four objectives by introducing non-determinism, variable latency, and opaque decision processes.

### DD-3: Five-Stage Internal Pipeline Architecture

**Context**: The Context Engine needs to transform raw signals into resolved, versioned, distributed context. The internal processing architecture must support this transformation while maintaining the invariants and mission objectives.

**Options considered**: (a) Five-stage pipeline (Signal Queue, Signal Classifier, Context Workspace, Resolution Engine, Version Manager/Distribution Manager); (b) Two-stage pipeline (acquire, resolve+distribute); (c) Event-sourced architecture with no explicit pipeline stages.

**Decision**: Five-stage pipeline (option a). Each stage has a single responsibility, enabling independent testing, monitoring, and failure isolation.

**Rationale**: The five-stage pipeline provides clear separation of concerns. The Signal Queue handles ordering and backpressure. The Signal Classifier handles type and authority assignment. The Context Workspace handles entity merging and state management. The Resolution Engine handles conflict detection, resolution, relevance scoring, and snapshot production. The Version Manager and Distribution Manager handle versioning and delivery. A two-stage approach (option b) would conflate too many responsibilities into single components. An event-sourced approach (option c) would add complexity without providing architectural benefits for the deterministic, bounded-latency requirements of context resolution.

### DD-4: Immutable Versioned Snapshots with Correction-by-New-Version

**Context**: Context evolves over time as new signals arrive and existing elements become stale. The Context Engine must provide a consistent, auditable history of context evolution.

**Options considered**: (a) Immutable snapshots with correction by new version; (b) Mutable snapshots with in-place updates; (c) Event-sourced state reconstruction.

**Decision**: Immutable snapshots (option a). Once a snapshot is assigned a version and handed to the Distribution Manager, it cannot be modified. Corrections are handled by producing a new snapshot version.

**Rationale**: Immutability is foundational to the Consistency and Traceability mission objectives. Mutable snapshots would make it impossible to guarantee that two consumers see the same context at the same version. Event-sourced reconstruction (option c) would achieve similar consistency guarantees but at the cost of replay complexity and unbounded latency for historical queries. Immutable snapshots with a version chain provide O(1) access to any historical version and O(delta size) incremental updates.

### DD-5: Six Architectural Invariants as the Strongest Guarantee

**Context**: The Context Engine needs a small set of properties that must always hold, regardless of state, inputs, or operations. These invariants serve as the foundation for testing, certification, and runtime integrity monitoring.

**Options considered**: (a) Six invariants (Version Monotonicity, Source Traceability, Deterministic Resolution, Immutable Snapshots, Single Active Context Per Task, Distribution Acknowledgment Consistency); (b) Fewer invariants by merging related properties; (c) More invariants for finer-grained guarantees.

**Decision**: Six invariants (option a). Each invariant addresses a distinct architectural concern and is independently verifiable.

**Rationale**: Version Monotonicity prevents version confusion. Source Traceability supports auditability. Deterministic Resolution supports replayability and the mission's consistency objective. Immutable Snapshots supports the correction-by-new-version design decision and consumer consistency. Single Active Context Per Task prevents context fragmentation. Distribution Acknowledgment Consistency ensures delivery accountability. Merging invariants (option b) would reduce testability. More invariants (option c) would increase the certification burden without proportional benefit — six invariants cover the critical architectural guarantees.

### DD-6: Extension Model with Governance-Gated Customization

**Context**: Different deployment contexts or future Engine specializations may require domain-specific classification rules, resolution strategies, relevance scoring, or compaction strategies. The Context Engine must support extension without compromising its invariants or deterministic guarantees.

**Options considered**: (a) No extensions — the Context Engine is closed and fixed; (b) Unrestricted plugin model; (c) Governed extension points with invariant-preserving constraints.

**Decision**: Governed extension points (option c). Four extension points (custom classifiers, custom resolution strategies, custom relevance scorers, custom compaction strategies) with governance review requirements and invariant-preserving constraints.

**Rationale**: A closed model (option a) would not accommodate the diverse context resolution needs of different deployment contexts. An unrestricted plugin model (option b) would risk invariant violations, non-deterministic behaviour, and governance bypass. The governed extension model provides flexibility while preserving architectural integrity. Extensions that affect conflict resolution or relevance scoring require Framework Governance review before deployment, ensuring that governance-relevant context decisions remain under governance control.

---

## Ownership

### Engine Ownership

#### Accountable Owner

**Role**: Framework Architecture Team

The Framework Architecture Team is the single accountable owner for the Context Engine's architectural correctness, governance alignment, and certification readiness. The Context Engine is a foundational Engine that all other Phase 2 Engines depend on, and its architecture must remain under centralized architectural control.

#### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Context resolution architecture | Yes | Engine Platform lifecycle management (A.4.4) |
| Conflict resolution rules | Yes | Communication transport implementation (A.4.5) |
| Version chain design | Yes | Persistence implementation details |
| Distribution strategy | Yes | Consumer-side context processing |
| Extension model governance | Yes | Extension implementations by other teams |
| Configuration schema | Yes | Configuration deployment tooling |

#### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New resolution strategy addition | Autonomous if no invariant impact | Yes if invariant impact |
| API/schema changes | Requires Engine Contract (A.4.2) alignment | Yes |
| Cross-Engine protocol changes | Cannot decide autonomously | Yes — always |
| Source authority priority changes | Autonomous for ordering within same tier | Yes for cross-tier changes |
| New extension point addition | Autonomous | Yes if it affects conflict resolution or relevance scoring |

#### Validation Obligations

The owner must validate the following before requesting review:

- All TPL-001 mandatory sections are present with Engine-specific content in designated subsections.
- All invariants are preserved by the proposed architecture.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- The Document Metadata is fully STD-010-compliant.
- No implementation scope has been introduced.

#### Review Obligations

The owner must present the following for review to Framework Governance:

- The complete RFC with all sections.
- The responsibility-to-operation traceability matrix.
- The lifecycle-to-event traceability matrix.
- The invariant test specification.
- Evidence of STD-010 and STD-003 compliance.

#### Certification Responsibilities

The owner must produce the following evidence to support certification:

- TPL-001 structural compliance matrix.
- A.5.0 template compliance matrix.
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Conflict resolution audit log.
- Version chain integrity test results.

#### Ownership Handoff Limitations

Ownership may transfer from the Framework Architecture Team to another named role or individual only through a governance-authorized transition. The transition must:

- Record the current owner, new owner, transition date, and governance authorization in the Engine Registry.
- Transfer all validation, review, and certification obligations to the new owner.
- Preserve all existing certification evidence and traceability.
- Not occur silently or implicitly — the Engine Registry must reflect the change before it takes effect.

---

## Responsibilities

### Engine Responsibilities

The Context Engine is accountable for the following architectural responsibilities, grouped by functional domain:

#### Context Acquisition

- Receive raw context signals from all registered context sources, including user input, task metadata, Engine state snapshots, knowledge retrieval results, and environmental parameters.
- Classify incoming signals by type, source, urgency, and relevance domain.
- Acknowledge receipt of every context signal and produce an acquisition record for traceability.
- Handle late, malformed, or duplicate signals according to the resolution rules.

#### Context Resolution

- Resolve conflicts between overlapping or contradictory context signals from multiple sources.
- Prioritize context elements based on temporal recency, source authority, relevance score, and task-phase affinity.
- Merge related context elements into coherent context groups that represent unified informational entities.
- Produce a resolved context snapshot that is deterministic given the same input set and resolution rules.

#### Context Versioning

- Assign a unique version identifier to every resolved context snapshot.
- Maintain a temporal chain of context versions that supports point-in-time reconstruction.
- Detect and flag version conflicts when concurrent context updates produce divergent snapshots.
- Support version comparison operations for downstream Engines that need to understand context evolution.

#### Context Distribution

- Distribute resolved context snapshots to all registered consuming Engines via the Engine Communication model (A.4.5).
- Support both push-based (proactive) and pull-based (on-demand) context delivery patterns.
- Ensure that distribution does not block the Context Engine's ability to continue acquiring and resolving new signals.
- Produce distribution records for auditability.

#### Context Lifecycle Management

- Initialize a new context at the start of every task or session.
- Extend context as new signals arrive during task execution.
- Compact or summarize context when it exceeds configured size or complexity thresholds.
- Finalize and archive context at task completion.
- Support context recovery from the version chain after failure or restart.

---

## Non Responsibilities

### Engine Non Responsibilities

The Context Engine is explicitly not responsible for the following concerns. Each non-responsibility is paired with the component that owns it:

| Non-Responsibility | Owned By |
|:---|:---|
| Storing persistent knowledge or documents | Knowledge Engine (A.5.2, future) |
| Planning task sequences or steps | Planning Engine (A.5.3, future) |
| Making decisions or trade-offs | Decision Engine (A.5.4, future) |
| Executing actions or producing side effects | Execution Engine (A.5.5, future) |
| Validating outputs or checking correctness | Validation Engine (A.5.6, future) |
| Long-term memory retention and recall | Memory Engine (A.5.9, future) |
| Governing Engine Platform behaviour | Framework Governance |
| Managing Engine lifecycle transitions | Engine Lifecycle (A.4.4) |
| Managing inter-Engine communication transport | Engine Communication (A.4.5) |
| Maintaining the Engine capability registry | Engine Registry (A.4.3) |
| Enforcing Engine contracts at runtime | Engine Contract (A.4.2) |
| Persisting context to durable storage | Platform persistence layer (out of scope) |
| Caching context for performance optimization | Platform caching layer (out of scope) |
| Invoking LLMs or processing natural language | AI Consumption layer (out of scope) |

The Context Engine's boundary is defined by the transition from raw context signals to resolved, versioned context snapshots. Everything before that transition (signal acquisition) and the transition itself (resolution) belong to the Context Engine. Everything after (consumption, reasoning, action) belongs to downstream Engines.

### Prohibitions

- Shared or ambiguous ownership without a single accountable party.
- Ownership claims that bypass Framework Governance.
- Implementation-team authority over architectural decisions.
- Hidden authority transfer through delegation without governance record.
- Unvalidated handoff — all outputs must pass validation before transfer.
- Implicit acceptance by the receiving Engine.
- Handoff that bypasses certification requirements.
- Alternative metadata headings (e.g., `## Metadata`, `## Header`).
- Non-standard metadata table shapes.
- Merged relationship fields (e.g., combining Dependencies and Consumes into one field).
- Claims that complete metadata makes this RFC canonical.
- LLM calls for relevance scoring, conflict resolution, or compaction summarization.
- Mutable versioned snapshots — corrections are handled by producing new versions only.

---

## Interfaces

### Consumed Inputs

#### Context Signals

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| User Input Signals | Structured signal (intent, parameters, constraints) | User interaction layer | Schema validation against STD-003 terminology | Queued for re-validation; context resolved with available signals; gap flagged |
| Task Metadata | Task identifier, phase, priority, constraints | Engine Registry / Task originator | Identifier format and phase validity | Task initialization deferred; context resolution blocked until metadata arrives |
| Engine State Snapshots | State delta or full state from peer Engines | Peer Engines via A.4.5 | State schema compliance per A.4.6 | Snapshot rejected; prior version retained; consuming Engines notified |
| Environmental Parameters | Session configuration, resource limits, operational constraints | Runtime configuration | Parameter type and range validation | Default values applied; deviation flagged in context metadata |
| Feedback Signals | Validation results, execution outcomes, error reports | Validation Engine, Execution Engine | Signal type and structure validation | Signal logged but not incorporated; context continues with prior resolved state |

#### Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Context Freshness Policy | Time-to-live, refresh interval, staleness threshold | Engine configuration | Policy type and value range | Default freshness policy applied (configurable baseline) |
| Context Size Limits | Maximum context elements, maximum total size | Engine configuration | Numeric range validation | Platform defaults applied; oversized context triggers compaction |
| Source Authority Map | Priority ordering of context sources | Governance configuration | Map completeness and cycle detection | Equal-priority fallback; governance notification |
| Relevance Thresholds | Minimum relevance score for inclusion | Engine configuration | Numeric range [0.0, 1.0] | Default threshold of 0.5 applied |

All inputs are versioned. Each input carries a version identifier, a source timestamp, and a sequence number that the Context Engine uses for ordering and conflict detection.

### Produced Outputs

#### Resolved Context Snapshot

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Resolved Context Snapshot | Immutable, versioned context bundle containing all relevant context elements with source traces, relevance scores, and freshness markers | All peer Engines (Planning, Decision, Execution, Validation, Knowledge, Memory) | Monotonic incrementing version; each snapshot is immutable once produced | All context elements pass relevance threshold; no unresolved conflicts; all source traces present; freshness markers valid |

#### Context Delta

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Context Delta | Differential update containing only elements that changed since the previous snapshot | Peer Engines that maintain local context caches | References parent snapshot version; delta itself is immutable | Delta applies cleanly to parent version; no orphaned references; all new elements pass validation |

#### Context Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Acquisition Record | Per-signal receipt confirmation with timestamp, source, and classification | Audit systems, governance review | Immutable per signal | Timestamp monotonicity; source identification valid |
| Resolution Record | Per-snapshot conflict resolution decisions with reasoning | Audit systems, explainability | Immutable per snapshot | All conflicts accounted for; resolution rule referenced |
| Distribution Record | Per-distribution delivery confirmation with consumer, timestamp, and snapshot version | Audit systems, Engine Communication (A.4.5) | Immutable per distribution | Consumer identification valid; snapshot version exists |

#### Context Lifecycle Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Context Initialized | Lifecycle event emitted when a new context is created | All peer Engines, Engine Lifecycle (A.4.4) | Event-scoped | Task identifier present; initial parameters valid |
| Context Compacted | Lifecycle event emitted when context is summarized or truncated | All peer Engines, Memory Engine (future) | Event-scoped; references pre- and post-compaction versions | Compaction preserves required elements per policy |
| Context Finalized | Lifecycle event emitted when context is archived at task completion | All peer Engines, audit systems | Event-scoped; references final snapshot version | Final snapshot valid; all consuming Engines notified |

All outputs are immutable snapshots. Once produced, a resolved context snapshot cannot be modified. Corrections are handled by producing a new snapshot version. Output contracts are explicit enough for consuming Engines to validate received context against the schema and version requirements defined here.

### Engine Operations

#### Acquisition Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `acquire_signal(signal)` | Accept a new context signal into the queue | Raw context signal with source metadata | Acquisition record | Signal added to queue; classified | Signal rejected (schema/size violation); queue full (backpressure) |
| `classify_signal(signal)` | Assign classification to a dequeued signal | Unclassified signal | Classified signal | Signal type, authority, relevance, urgency, freshness assigned | Classification failure (unknown type → deferred with warning) |

#### Resolution Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `resolve_context()` | Execute one full resolution cycle | Current Signal Layer and Entity Layer | Resolved Layer | Conflicts resolved; relevance scored; entities merged | Unresolved conflicts (escalation triggered); validation failure (snapshot blocked) |
| `detect_conflicts(entity)` | Scan for conflicting attribute values within an entity | Entity from Entity Layer | Conflict list | None | No conflicts detected (empty list) |
| `resolve_conflict(conflict)` | Apply resolution rules to a single conflict | Conflict with conflicting signals | Resolution decision | Winning value selected; resolution record produced | Tie (conservative inclusion + escalation) |

#### Versioning Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `version_snapshot(resolved_layer)` | Assign version to a resolved context | Resolved Layer | Versioned snapshot | Added to version chain | Version conflict (concurrent versioning → branch detection) |
| `get_snapshot(version)` | Retrieve a snapshot by version | Version identifier | Snapshot or `not found` | None | Version not found (historical snapshot expired) |
| `compute_delta(from_version, to_version)` | Compute the difference between two versions | Two version identifiers | Context delta | None | Versions not contiguous (gap → delta covers multiple versions) |

#### Distribution Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `distribute_snapshot(snapshot, consumers)` | Push a snapshot to registered consumers | Versioned snapshot, consumer list | Distribution records | Consumers notified | Consumer unreachable (retry → mark unreachable) |
| `serve_context()` | Return current snapshot on pull request | Pull request | Current versioned snapshot | None | No snapshot available (context not yet initialized) |

#### Lifecycle Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `initialize_context(task_id, config)` | Create a new context for a task | Task identifier, configuration | `Context Initialized` event | Empty context (version 0) created; consumers notified | Registry unavailable (retry); config invalid (block with error) |
| `compact_context()` | Reduce context size | Current context | `Context Compacted` event | Low-relevance elements evicted; summaries produced | Compaction insufficient (size still over limit → aggressive compaction) |
| `finalize_context()` | Archive context at task completion | Current context | `Context Finalized` event; final snapshot | Context marked as finalized; no further updates | Final snapshot validation failure (block finalization) |
| `recover_context(last_known_version)` | Restore context from version chain | Version identifier | `Context Recovered` event | Context restored to given version | Version not found (recover from version 0) |

All operations are idempotent where specified. `acquire_signal` with a duplicate sequence number from the same source is idempotent (returns existing acquisition record). `distribute_snapshot` to an already-acknowledged consumer is idempotent (returns existing distribution record). `resolve_context` is idempotent if no new signals have arrived since the last resolution.

### Engine Events

#### Events Emitted

| Event | Trigger | Payload | Consumers | Expected Consumer Response |
|:---|:---|:---|:---|:---|
| `Context Initialized` | New context created for a task | Task identifier, initial configuration, version `0` | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge readiness; register as context consumer if applicable |
| `Context Updated` | New snapshot versioned and distributed | Snapshot version, delta from previous version, timestamp | All registered consumers | Acknowledge receipt; update local context view; process delta |
| `Context Compacted` | Context size reduced through compaction | Pre-compaction version, post-compaction version, evicted element summary, retained element count | All peer Engines, Memory Engine (future) | Update local context view; request full snapshot if local view is stale |
| `Context Finalized` | Context archived at task completion | Final snapshot version, total signals processed, total snapshots produced, task summary | All peer Engines, audit systems | Acknowledge finalization; release context resources |
| `Conflict Escalated` | Unresolvable conflict detected | Conflict description, conflicting signals, resolution attempt history | Framework Governance | Review conflict; provide resolution guidance or policy update |
| `Clarification Requested` | Ambiguous signal detected that may be disambiguated by source | Ambiguous signal, possible interpretations, source identifier | Signal source (e.g., user interaction layer) | Provide clarification if possible; otherwise respond with `unable-to-clarify` |
| `Source Unreachable` | Context signal source failed to deliver expected signals | Source identifier, last successful signal timestamp, expected signal type | Engine Communication (A.4.5), relevant source monitor | Investigate source failure; restore signal delivery |
| `Context Recovered` | Context restored after failure or restart | Recovery point version, recovered element count, skipped signals (if any) | All peer Engines, Engine Lifecycle (A.4.4) | Acknowledge recovery; re-register as context consumer if applicable |
| `Freshness Warning` | Context element approaching staleness threshold | Element identifier, current age, staleness threshold, source identifier | Source of the element, relevant consumers | Refresh the element if possible; otherwise accept staleness |

#### Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine is a context consumer, register it for push or pull delivery |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list; cease distribution to it |
| `Task Phase Transition` | Engine Lifecycle (A.4.4) | Update task-phase affinity for relevance scoring; may trigger re-resolution with new phase context |
| `State Snapshot Available` | Peer Engine | Accept the snapshot as a context signal; classify and incorporate into next resolution cycle |
| `Configuration Updated` | Governance or Engine configuration | Reload configuration inputs (freshness policy, size limits, source authority map); do not disrupt in-progress resolution |

All event payloads are versioned. Events are not dropped silently — if an event consumer is unavailable, the event is queued and retried according to the Engine Communication model (A.4.5). Critical events (`Conflict Escalated`, `Context Finalized`) are treated as non-droppable and will block the Context Engine's progression if delivery cannot be confirmed after retry exhaustion.

### Engine Handoff Contract

#### Handoff Prerequisites

Before the Context Engine hands off its outputs (resolved context snapshots, deltas, metadata) to a downstream Engine, the following conditions must be satisfied:

1. The resolved context snapshot has passed all output validation rules (see Validation section).
2. The snapshot has been assigned a version by the Version Manager and added to the version chain.
3. No unresolved conflicts remain in the Resolved Layer (all conflicts are either resolved or flagged with conservative inclusion).
4. All context elements have valid source traces.
5. The snapshot size is within the configured maximum.
6. The Context Engine is in steady-state or degraded lifecycle phase (not in initialization or shutdown).

#### Required Evidence

Every handoff must be accompanied by the following evidence:

| Evidence | Description | Retention |
|:---|:---|:---|
| Snapshot version identifier | Unique version of the handed-off snapshot | Duration of consuming Engine's processing + audit retention period |
| Validation report | Output validation results (all checks pass) | Same as snapshot |
| Resolution record | Conflict resolution decisions made during this snapshot's production | Same as snapshot |
| Distribution record | Per-consumer delivery confirmation | Same as snapshot |
| Source trace log | Source identifier, timestamp, and version for every context element in the snapshot | Same as snapshot |

#### Validated Outputs

The following outputs are considered validated and ready for handoff:

- Resolved context snapshot (immutable, versioned).
- Context delta (references parent version, immutable).
- Context metadata (acquisition records, resolution records, distribution records).
- Context lifecycle events (initialized, updated, compacted, finalized).

#### Snapshot Expectations

Handoffs involve immutable output snapshots. The consuming Engine receives a versioned snapshot that is guaranteed not to change. If the consuming Engine needs a more recent context, it requests a new snapshot — the previous snapshot remains available for reference.

#### Receiving Consumers

The primary receiving consumers for Context Engine handoffs are:

1. Planning Engine (A.5.3, future)
2. Knowledge Engine (A.5.2, future)
3. Decision Engine (A.5.4, future)
4. Execution Engine (A.5.5, future)
5. Validation Engine (A.5.6, future)
6. Memory Engine (A.5.9, future)

#### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Output validation failure | Snapshot blocked; Resolution Engine re-attempts with escalation rules | If re-attempt fails, `Conflict Escalated` event emitted |
| Consumer unreachable | Distribution Manager retries per A.4.5 retry policy | After retry exhaustion, consumer marked unreachable; `Source Unreachable` event emitted |
| Snapshot version conflict | Version Manager detects concurrent versioning; creates branch | `Conflict Escalated` event; governance determines merge strategy |
| Handoff evidence incomplete | Handoff blocked until evidence is complete | If evidence cannot be produced, context enters degraded state |

#### Audit Record Expectations

Every handoff must produce an audit record that includes:

- Snapshot version identifier.
- Receiving consumer identifier.
- Handoff timestamp.
- Validation status (pass/fail).
- Evidence checklist (all evidence items present or missing).
- Distribution status (delivered / pending / failed).

Audit records are immutable and retained for the duration of the task plus the governance-defined audit retention period.

#### Certification Gates

Before the Context Engine enters a handoff state transition (e.g., transitioning from active context production to finalized context handoff), the following certification gates must be satisfied:

1. **Pre-handoff validation** — All output validation rules pass for the snapshot being handed off.
2. **Evidence completeness** — All required evidence items (snapshot version, validation report, resolution record, distribution record, source trace log) are present.
3. **Consumer readiness** — The receiving consumer is registered, reachable, and has acknowledged at least one prior context delivery.
4. **Invariant preservation** — All six invariants hold for the snapshot being handed off.

If any certification gate fails, the handoff does not proceed. The Context Engine enters a degraded state, emits appropriate events, and escalates according to the failure handling rules.

---

## Lifecycle

### Engine Lifecycle

The Context Engine's lifecycle behaviour is defined within the A.4.4 Engine Lifecycle model. The following describes Context Engine-specific behaviour at each lifecycle transition:

#### Initialization

The Context Engine initializes when the Engine Platform starts a new task or session. During initialization, the Context Engine performs the following actions:

- Registers with the Engine Registry (A.4.3) as a Context Resolution capability provider.
- Loads its configuration inputs (freshness policy, size limits, source authority map, relevance thresholds).
- Establishes communication channels with all registered context sources and potential consuming Engines via the Engine Communication model (A.4.5).
- Creates an empty context with version `0` and emits a `Context Initialized` event.

Initialization dependencies include the Engine Registry being available, configuration being loaded, and communication channels being established. If any dependency is unavailable, initialization is retried according to the Engine Lifecycle's retry policy.

#### Startup

After initialization, the Context Engine enters the startup phase where it:

- Begins listening for context signals from all registered sources.
- Confirms connectivity with all registered consuming Engines.
- Performs a readiness check by producing a test context snapshot (version `0-test`) and verifying that at least one consuming Engine acknowledges receipt.
- Transitions to steady-state operation upon successful readiness confirmation.

#### Steady-State Operation

In steady state, the Context Engine continuously:

- Acquires incoming context signals and classifies them.
- Periodically resolves the accumulated signals into a new context snapshot version.
- Distributes the new snapshot (or a delta) to all registered consuming Engines.
- Monitors context freshness and triggers refresh or eviction for stale elements.
- Produces acquisition, resolution, and distribution records for auditability.

The resolution cycle operates on a configurable interval. Within each cycle, the Context Engine collects all signals received since the last resolution, applies resolution rules, and produces a new snapshot version.

#### Degradation

The Context Engine degrades gracefully when operating under stress:

- **Signal backlog** — When incoming signals exceed the resolution capacity, the Context Engine prioritizes signals by source authority and urgency, deferring lower-priority signals.
- **Distribution failure** — When a consuming Engine cannot be reached, the Context Engine retains the snapshot and retries distribution according to the Engine Communication model's retry policy.
- **Resource pressure** — When context size approaches the configured limit, the Context Engine triggers compaction to reduce context while preserving the most relevant elements.

#### Shutdown

During graceful shutdown, the Context Engine:

- Stops accepting new context signals.
- Produces a final context snapshot (finalized version) that represents the current resolved state.
- Emits a `Context Finalized` event with the final snapshot version.
- Delivers the final snapshot to all reachable consuming Engines.
- Produces a shutdown record including the final version, total signals processed, and total snapshots produced.
- Deregisters from the Engine Registry.

#### Restart and Recovery

On restart, the Context Engine recovers by:

- Loading the most recent finalized context snapshot from the version chain.
- Re-establishing communication channels with all registered sources and consumers.
- Replaying any signals that were received but not yet resolved (if recovery evidence is available).
- Emitting a `Context Recovered` event with the recovery point version.
- Resuming steady-state operation from the recovered version.

State that must be persisted or recovered includes the context version chain, the most recent resolved snapshot, and the configuration inputs. The Context Engine does not define how persistence works (that is out of scope), but it defines what must be recoverable.

---

## Validation

### Certification Requirements

Before the Context Engine transitions from Draft to Approved, the following certifications must be completed:

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **TPL-001 Structural Compliance** | All 20 TPL-001 mandatory sections present with Engine-specific subsections | Section-by-section compliance matrix against A.5.0 mapping |
| **A.5.0 Template Compliance** | All Engine-specific subsections present in designated TPL-001 sections | Subsection completeness checklist |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist (all items pass) |
| **STD-003 Terminology Compliance** | All terms used in this RFC conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All six invariants are expressible as testable assertions | Invariant test specification document |
| **Determinism Verification** | Resolution Engine produces identical output for identical inputs | Determinism test evidence |
| **Completeness Check** | All responsibilities map to at least one operation | Responsibility-to-operation traceability matrix |
| **Event Completeness** | All lifecycle transitions produce corresponding events | Lifecycle-to-event traceability matrix |

### Engine Invariants

The following properties must always hold for the Context Engine regardless of state, inputs, or operations:

#### Invariant 1: Version Monotonicity

Every resolved context snapshot has a version identifier that is strictly greater than all previous snapshot versions produced by this Context Engine instance. No two snapshots share the same version identifier. The version chain is a strictly monotonically increasing sequence.

#### Invariant 2: Source Traceability

Every context element in every resolved snapshot is traceable to at least one acquired context signal. No context element appears in a resolved snapshot without a verifiable source. If source traceability is lost (e.g., due to a system failure), the element is removed before the snapshot is versioned.

#### Invariant 3: Deterministic Resolution

Given the same set of classified signals, the same resolution rules, and the same configuration, the Resolution Engine produces the same resolved context. This invariant supports replayability, auditability, and the ability to reconstruct the context at any past version.

#### Invariant 4: Immutable Snapshots

Once a resolved context snapshot has been assigned a version and handed to the Distribution Manager, it cannot be modified. Corrections are handled by producing a new snapshot version. No operation on the Context Engine mutates a versioned snapshot.

#### Invariant 5: Single Active Context Per Task

For any given task identifier, there is at most one active (non-finalized) context. A new context for the same task cannot be created until the existing context is finalized or explicitly superseded through a governance-authorized transition.

#### Invariant 6: Distribution Acknowledgment Consistency

For every context snapshot distributed via the push pattern, the Distribution Manager records whether each registered consumer acknowledged receipt. A snapshot is considered "fully distributed" only when all registered consumers have either acknowledged or been marked as unreachable after retry exhaustion. Partial distribution is tracked and reported but does not block the Context Engine from continuing to resolve new signals.

### Validation Rules

#### Input Validation

Every context signal received by the Context Engine is validated against the following criteria before being accepted into the Signal Queue:

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Schema compliance | Signal structure matches the expected type schema (user input, task metadata, engine state, environmental parameter, feedback) | Signal rejected; rejection record produced; source notified |
| Source identification | Signal includes a valid source identifier that exists in the Source Authority Map or is a recognized Engine identifier | Signal queued with `unknown-source` classification; deferred resolution |
| Timestamp validity | Signal includes a receipt timestamp that is monotonically non-decreasing relative to other signals from the same source | Signal reordered to correct position; out-of-order record produced |
| Size constraint | Signal total size does not exceed the per-signal maximum (configurable) | Signal rejected; source notified of size violation |
| Terminology compliance | Signal uses canonical terminology as defined by STD-003 where applicable | Signal accepted with `terminology-warning` flag; not rejected |

#### Output Validation

Every resolved context snapshot is validated against the following criteria before being handed to the Version Manager:

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Relevance threshold | All included context elements have a relevance score at or above the configured threshold | Elements below threshold removed and deferred |
| Conflict resolution completeness | No unresolved conflicts remain in the Resolved Layer (all conflicts are either resolved or flagged) | Snapshot production blocked; Resolution Engine re-attempts with escalation rules |
| Source trace completeness | Every context element has a valid source trace (source identifier, receipt timestamp, version) | Elements with incomplete traces removed; gap flagged in metadata |
| Entity integrity | No entity has null or empty required attributes | Entity flagged as `incomplete`; included with degradation warning |
| Snapshot consistency | The snapshot is internally consistent — no circular entity references, no orphaned entities | Inconsistencies resolved by removing orphans and breaking circular references |
| Size limit | Total snapshot size does not exceed the configured maximum | Compaction triggered; snapshot re-produced |

#### State Transition Validation

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Initialized → Steady State | Readiness check passed; at least one consumer acknowledged receipt | Retry readiness check; escalate if retries exhausted |
| Steady State → Degraded | Degradation trigger conditions met (backlog, distribution failure, resource pressure) | Transition does not require validation — it is triggered by monitoring |
| Degraded → Steady State | Degradation conditions resolved; signal queue within limits; all critical consumers reachable | Return to steady state; recovery event emitted |
| Any → Shutdown | Final snapshot produced; finalization event emitted | Shutdown blocked until finalization completes |
| Shutdown → Recovery | Recovery evidence available (version chain, last snapshot) | Recovery from empty state with version `0` |

Validation rules are composable — each validation can be applied independently, and the results can be aggregated into a validation report. Validation results follow a binary model: pass (proceed) or fail (apply failure mode). Soft warnings (e.g., terminology compliance) are recorded but do not block processing.

---

## Risks

### Risk-1: Central Hub Single Point of Failure

**Severity**: High
**Likelihood**: Medium
**Impact**: The Context Engine's central position means that any architectural deficiency or operational failure will propagate to all downstream Engines. If the Context Engine is unavailable, no downstream Engine can obtain resolved context, halting Planning, Decision, Execution, and Validation.
**Mitigation**: The Engine Platform's graceful degradation model (A.4.4) should define how Engines behave when context is unavailable. The Context Engine's own degradation model (backpressure, distribution retry, resource compaction) provides internal resilience. Rigorous certification is critical before the Context Engine enters production.

### Risk-2: Source Authority Map Misconfiguration

**Severity**: High
**Likelihood**: Low
**Impact**: Incorrect authority assignments in the Source Authority Map could produce incorrect conflict resolution — a lower-authority source winning over a higher-authority source. This would produce resolved context that violates the mission's Consistency objective.
**Mitigation**: The Source Authority Map is a governance artifact requiring Framework Governance approval for changes. The Context Engine treats the map as a configuration input and does not modify it. Governance review of map changes is a certification gate.

### Risk-3: Version Chain Unbounded Growth

**Severity**: Medium
**Likelihood**: Medium
**Impact**: Long-running tasks could produce an unbounded version chain, consuming memory and degrading version lookup performance. Without compaction, the version chain grows linearly with the number of resolution cycles.
**Mitigation**: The Version Manager retains the most recent N snapshots (configurable) and summarizes older snapshots into compaction records. The Context Engine's compaction rules (evict expired, evict lowest relevance, summarize clusters) ensure that context size remains bounded.

### Risk-4: Determinism Under Concurrent Inputs

**Severity**: Medium
**Likelihood**: Low
**Impact**: If the Signal Queue's serialization fails to maintain FIFO ordering within the same priority level, concurrent signals from multiple sources could produce non-deterministic classification and resolution outcomes, violating Invariant 3.
**Mitigation**: The Signal Queue is explicitly defined as an ordered, bounded buffer with deterministic FIFO ordering within the same priority level. Concurrent resolution requests are coalesced. Only one resolution cycle runs at a time. These constraints are part of the internal model and are covered by certification.

### Risk-5: Extension Model Invariant Violation

**Severity**: Medium
**Likelihood**: Low
**Impact**: A custom extension (classifier, resolution strategy, relevance scorer, or compaction strategy) could introduce non-deterministic behaviour or violate one of the six invariants if the extension constraints are not enforced at runtime.
**Mitigation**: Extensions that affect conflict resolution or relevance scoring require Framework Governance review before deployment. Extension constraints explicitly prohibit invariant modification, non-deterministic behaviour, and bypassing versioning or distribution mechanisms. Runtime enforcement of these constraints is an implementation concern but should be addressed during Engine Platform certification.

### Risk-6: Unvalidated Implementation Drift

**Severity**: Low
**Likelihood**: High
**Impact**: The Context Engine's architecture is defined in this RFC, but no implementation exists yet. When implementation begins, there is a risk that the implementation will diverge from the architectural contract defined here — particularly the invariants, deterministic resolution, and immutable snapshot guarantees.
**Mitigation**: The six invariants are expressed as testable assertions. The determinism verification requirement mandates that identical signal sequences produce identical snapshots across 100 consecutive runs. The certification requirements provide a clear, checkable readiness baseline. Implementation compliance should be validated against this RFC's operation catalogue, event catalogue, and invariant specifications.

---

## Open Questions

1. **OQ-1: Should the Context Engine support cross-task context sharing?** The current architecture defines one active context per task (Invariant 5). Some deployment scenarios may require shared context across related tasks (e.g., a multi-step project where each step is a separate task but needs shared context). Cross-task context sharing would require relaxing Invariant 5 or introducing a context inheritance model, both of which have significant architectural implications.

2. **OQ-2: How should the Context Engine handle circular context dependencies between peer Engines?** If Engine A produces signals based on context from Engine B, and Engine B produces signals based on context from Engine A, a circular dependency could form. The current architecture does not define circular dependency detection or resolution. A cycle-detection mechanism in the Signal Classifier or a governance-level prohibition on circular dependencies may be needed.

3. **OQ-3: Should the relevance scoring model support negative relevance (explicit exclusion)?** The current relevance scoring model uses a [0.0, 1.0] range with a configurable threshold. Some deployment scenarios may benefit from explicitly excluding certain context elements (negative relevance) rather than simply scoring them below the threshold. Negative relevance would change the Entity Layer merge semantics and could affect conflict resolution.

4. **OQ-4: What is the minimum and maximum retention period for version chain snapshots?** The Version Manager retains the most recent N snapshots but the RFC does not define N or the retention period. This is intentionally left as a configuration concern, but governance may want to define minimum retention requirements for audit compliance.

---

## Completion Criteria

A.5.1 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with Engine-specific content in designated subsections.
2. All Engine-specific subsections follow the A.5.0 Section Mapping (Appendix A of A.5.0).
3. The Universal Section Contract (A.5.0, Section 9) is referenced and followed throughout.
4. All 16 Specializable subsections contain substantive Engine-specific content (not boilerplate only).
5. All six invariants are preserved by the proposed architecture and are expressible as testable assertions.
6. Every responsibility in the Responsibilities section maps to at least one operation in the Interfaces section.
7. Every lifecycle transition in the Lifecycle section produces a corresponding event in the Interfaces section.
8. The Document Metadata is fully STD-010-compliant with all mandatory fields.
9. No implementation scope (source code, APIs, persistence, LLM details, agent/swarm runtime) appears in any section.
10. The Out of Scope section includes all mandatory A.5.0 exclusions (Section 9 of A.5.0).
11. The Engine Ownership subsection addresses all seven mandatory elements of the Engine Ownership Contract.
12. The Engine Handoff Contract subsection addresses all eight mandatory elements of the Handoff Contract.
13. At least one design decision with context, options, and rationale is present (per TPL-001 Section 15.2).
14. Open Questions are non-empty at Draft stage (per TPL-001 Section 15.2).
15. Version History records all changes from the prior version with rationale.
16. The first downstream consumer (A.5.2 — Knowledge Engine) can consume the Context Engine's outputs as defined in the Interfaces section.

---

## Version History

| Version | Status | Notes |
|:---|:---|:---|
| `0.2.0-draft` | Draft | Initial creation as the first Phase 2 Engine specialization RFC with 33-section structure following the pre-TPL-001 A.5.0 template. Defined Context Engine architecture: five-stage internal pipeline, six invariants, 13 operations, 9 emitted events, 5 reacted events, ownership contract (7 elements), handoff contract (8 elements). |
| `0.3.0-draft` | Draft | Refactored to TPL-001 compliance via A.5.0 Section Mapping: remapped from 33 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections. Added Executive Summary, Design Decisions (DD-1 through DD-6), Risks (Risk-1 through Risk-6), Open Questions (OQ-1 through OQ-4), Version History. Removed Completion Report and Family Normalization Notes. Updated Traceability ID to AI-DOS.V3.A.005.1. All content preserved; no authority changes; no architectural changes. |

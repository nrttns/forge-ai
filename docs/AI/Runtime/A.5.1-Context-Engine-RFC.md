# A.5.1 — Context Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Phase 2 Engine Specialization · Draft / Non-canonical

---

## 1. Status

This RFC is a draft, non-canonical Engine Architecture RFC for the Context Engine, the first individual Engine specialization in Phase 2 of theAI-DOS v4 Engine Platform.

Canonical Status: Non-canonical until reviewed and approved.

This document defines the architecture of the Context Engine within the approved Engine Platform. It specializes the Engine Platform by defining the Context Engine's purpose, responsibilities, inputs, outputs, internal model, operations, events, ownership, and handoff contract. It does not redefine runtime, metadata, terminology, artifacts, engine lifecycle, engine state, registry, capability, authority, ownership, implementation, persistence, platform adapter, agent runtime, swarm runtime, or ProjectStatus models established upstream.

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-1` |
| Title | A.5.1 — Context Engine RFC |
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
| Traceability ID | `AI-DOS.V2.RUNTIME.A-5-1` |
| Scope | Defines the Context Engine specialization only, including its responsibilities, inputs, outputs, lifecycle participation, validation expectations, AI consumption rules, and handoff contract. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, Engine Foundation redefinition, other Engine Specialization redefinition, implementation, certification, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; A.5.0 Engine Specialization RFC Template; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, A.5.0 specialization template, canonical terminology, metadata rules, upstream Engine handoff outputs where applicable, and repository-normalization instructions. |
| Produces | Context Engine architecture specification, Context Engine responsibility boundaries, inputs, outputs, validation expectations, AI consumption rules, and handoff contract. |
| Related Specifications | `docs/AI/Runtime/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## 3. Purpose

The Context Engine exists to ensure that every Engine in theAI-DOS v4 platform operates on a consistent, resolved, and versioned contextual state. Context is the shared informational substrate that connects user intent, task history, environmental conditions, and inter-Engine state into a unified representation that all Engines can reason about and contribute to.

Without a dedicated Context Engine, each Engine would independently acquire, interpret, and maintain its own view of context, leading to divergence, duplication, conflicting state, and non-deterministic behaviour. The Context Engine eliminates this risk by serving as the single authoritative source for context acquisition, resolution, versioning, and distribution. It ensures that the Planning Engine, Decision Engine, Execution Engine, Validation Engine, and all other peer Engines receive context that is traceable, validated, and consistent with the current task state.

The Context Engine's purpose is not to store all data — that is the concern of persistence and knowledge systems — but to provide a real-time, resolved view of what is contextually relevant at any given point in the Engine Platform's operation. It transforms raw inputs from multiple sources into a structured, prioritized, and versioned context representation that downstream Engines can consume with confidence.

This purpose aligns with Engine Capability domain "Context Resolution" as defined by A.4.7. The Context Engine uniquely owns the capability of determining what information is contextually relevant, resolving conflicts between overlapping context sources, and maintaining a temporal context chain that supports explainability and auditability.

---

## 4. Mission

The mission of the Context Engine is to provide every peer Engine with the right context, at the right time, in the right format, with full traceability from source to consumption.

This mission translates into four mission-level objectives that guide all architectural decisions within this RFC:

1. **Completeness** — Every piece of information that is contextually relevant to the current task shall be included in the resolved context, regardless of which Engine or external source produces it. Completeness does not mean including all available information; it means including all information that passes the relevance threshold defined by the Context Engine's resolution rules.

2. **Consistency** — All Engines consuming context from the Context Engine at the same logical moment shall receive a consistent view. If two Engines request context within the same task step, they shall see the same resolved state unless explicitly configured for divergent context views.

3. **Traceability** — Every element in the resolved context shall be traceable to its source, acquisition time, version, and the resolution rule that included it. This supports auditability, explainability, and the ability to replay or reconstruct the context at any point.

4. **Timeliness** — The resolved context shall reflect the most recent relevant state. Stale context elements shall be identified, marked, and either refreshed or evicted according to the Context Engine's freshness rules.

The mission is testable: a reviewer can determine whether a proposed design fulfills or violates each objective by examining whether the design can guarantee completeness, consistency, traceability, and timeliness under all defined operating conditions.

---

## 5. Engine Responsibilities

The Context Engine is accountable for the following architectural responsibilities, grouped by functional domain:

### 5.1 Context Acquisition

- Receive raw context signals from all registered context sources, including user input, task metadata, Engine state snapshots, knowledge retrieval results, and environmental parameters.
- Classify incoming signals by type, source, urgency, and relevance domain.
- Acknowledge receipt of every context signal and produce an acquisition record for traceability.
- Handle late, malformed, or duplicate signals according to the resolution rules defined in Section 12.

### 5.2 Context Resolution

- Resolve conflicts between overlapping or contradictory context signals from multiple sources.
- Prioritize context elements based on temporal recency, source authority, relevance score, and task-phase affinity.
- Merge related context elements into coherent context groups that represent unified informational entities.
- Produce a resolved context snapshot that is deterministic given the same input set and resolution rules.

### 5.3 Context Versioning

- Assign a unique version identifier to every resolved context snapshot.
- Maintain a temporal chain of context versions that supports point-in-time reconstruction.
- Detect and flag version conflicts when concurrent context updates produce divergent snapshots.
- Support version comparison operations for downstream Engines that need to understand context evolution.

### 5.4 Context Distribution

- Distribute resolved context snapshots to all registered consuming Engines via the Engine Communication model (A.4.5).
- Support both push-based (proactive) and pull-based (on-demand) context delivery patterns.
- Ensure that distribution does not block the Context Engine's ability to continue acquiring and resolving new signals.
- Produce distribution records for auditability.

### 5.5 Context Lifecycle Management

- Initialize a new context at the start of every task or session.
- Extend context as new signals arrive during task execution.
- Compact or summarize context when it exceeds configured size or complexity thresholds.
- Finalize and archive context at task completion.
- Support context recovery from the version chain after failure or restart.

---

## 6. Non Responsibilities

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

---

## 7. Engine Position

### 7.1 Topological Position

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

### 7.2 Data Flow Characterization

The Context Engine has multiple input paths and multiple output paths. It receives signals from external sources (user input, environmental data) and from peer Engines (state snapshots, feedback signals). It produces resolved context snapshots for all downstream Engines.

The Context Engine does not sit in a linear pipeline — it operates as a hub that receives from many sources and distributes to many consumers. This means that the Context Engine has no single upstream or downstream dependency; it has a fan-in / fan-out topology.

### 7.3 Unavailability Impact

If the Context Engine is unavailable, no downstream Engine can obtain a resolved context snapshot. This means the Planning Engine cannot plan, the Decision Engine cannot decide, and the Execution Engine cannot execute with contextual awareness. The Engine Platform's graceful degradation model (A.4.4) should define how Engines behave when context is unavailable — but the Context Engine itself does not define that behaviour.

---

## 8. Consumed Inputs

The Context Engine requires the following typed inputs:

### 8.1 Context Signals

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| User Input Signals | Structured signal (intent, parameters, constraints) | User interaction layer | Schema validation against STD-003 terminology | Queued for re-validation; context resolved with available signals; gap flagged |
| Task Metadata | Task identifier, phase, priority, constraints | Engine Registry / Task originator | Identifier format and phase validity | Task initialization deferred; context resolution blocked until metadata arrives |
| Engine State Snapshots | State delta or full state from peer Engines | Peer Engines via A.4.5 | State schema compliance per A.4.6 | Snapshot rejected; prior version retained; consuming Engines notified |
| Environmental Parameters | Session configuration, resource limits, operational constraints | Runtime configuration | Parameter type and range validation | Default values applied; deviation flagged in context metadata |
| Feedback Signals | Validation results, execution outcomes, error reports | Validation Engine, Execution Engine | Signal type and structure validation | Signal logged but not incorporated; context continues with prior resolved state |

### 8.2 Configuration Inputs

| Input | Type | Source | Validation | Missing/Malformed Handling |
|:---|:---|:---|:---|:---|
| Context Freshness Policy | Time-to-live, refresh interval, staleness threshold | Engine configuration | Policy type and value range | Default freshness policy applied (configurable baseline) |
| Context Size Limits | Maximum context elements, maximum total size | Engine configuration | Numeric range validation | Platform defaults applied; oversized context triggers compaction |
| Source Authority Map | Priority ordering of context sources | Governance configuration | Map completeness and cycle detection | Equal-priority fallback; governance notification |
| Relevance Thresholds | Minimum relevance score for inclusion | Engine configuration | Numeric range [0.0, 1.0] | Default threshold of 0.5 applied |

All inputs are versioned. Each input carries a version identifier, a source timestamp, and a sequence number that the Context Engine uses for ordering and conflict detection.

---

## 9. Produced Outputs

The Context Engine produces the following typed outputs:

### 9.1 Resolved Context Snapshot

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Resolved Context Snapshot | Immutable, versioned context bundle containing all relevant context elements with source traces, relevance scores, and freshness markers | All peer Engines (Planning, Decision, Execution, Validation, Knowledge, Memory) | Monotonic incrementing version; each snapshot is immutable once produced | All context elements pass relevance threshold; no unresolved conflicts; all source traces present; freshness markers valid |

### 9.2 Context Delta

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Context Delta | Differential update containing only elements that changed since the previous snapshot | Peer Engines that maintain local context caches | References parent snapshot version; delta itself is immutable | Delta applies cleanly to parent version; no orphaned references; all new elements pass validation |

### 9.3 Context Metadata

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Acquisition Record | Per-signal receipt confirmation with timestamp, source, and classification | Audit systems, governance review | Immutable per signal | Timestamp monotonicity; source identification valid |
| Resolution Record | Per-snapshot conflict resolution decisions with reasoning | Audit systems, explainability | Immutable per snapshot | All conflicts accounted for; resolution rule referenced |
| Distribution Record | Per-distribution delivery confirmation with consumer, timestamp, and snapshot version | Audit systems, Engine Communication (A.4.5) | Immutable per distribution | Consumer identification valid; snapshot version exists |

### 9.4 Context Lifecycle Events

| Output | Type | Consumer(s) | Versioning | Validation Criteria |
|:---|:---|:---|:---|:---|
| Context Initialized | Lifecycle event emitted when a new context is created | All peer Engines, Engine Lifecycle (A.4.4) | Event-scoped | Task identifier present; initial parameters valid |
| Context Compacted | Lifecycle event emitted when context is summarized or truncated | All peer Engines, Memory Engine (future) | Event-scoped; references pre- and post-compaction versions | Compaction preserves required elements per policy |
| Context Finalized | Lifecycle event emitted when context is archived at task completion | All peer Engines, audit systems | Event-scoped; references final snapshot version | Final snapshot valid; all consuming Engines notified |

All outputs are immutable snapshots. Once produced, a resolved context snapshot cannot be modified. Corrections are handled by producing a new snapshot version. Output contracts are explicit enough for consuming Engines to validate received context against the schema and version requirements defined here.

---

## 10. Engine Lifecycle

The Context Engine's lifecycle behaviour is defined within the A.4.4 Engine Lifecycle model. The following describes Context Engine-specific behaviour at each lifecycle transition:

### 10.1 Initialization

The Context Engine initializes when the Engine Platform starts a new task or session. During initialization, the Context Engine performs the following actions:

- Registers with the Engine Registry (A.4.3) as a Context Resolution capability provider.
- Loads its configuration inputs (freshness policy, size limits, source authority map, relevance thresholds).
- Establishes communication channels with all registered context sources and potential consuming Engines via the Engine Communication model (A.4.5).
- Creates an empty context with version `0` and emits a `Context Initialized` event.

Initialization dependencies include the Engine Registry being available, configuration being loaded, and communication channels being established. If any dependency is unavailable, initialization is retried according to the Engine Lifecycle's retry policy.

### 10.2 Startup

After initialization, the Context Engine enters the startup phase where it:

- Begins listening for context signals from all registered sources.
- Confirms connectivity with all registered consuming Engines.
- Performs a readiness check by producing a test context snapshot (version `0-test`) and verifying that at least one consuming Engine acknowledges receipt.
- Transitions to steady-state operation upon successful readiness confirmation.

### 10.3 Steady-State Operation

In steady state, the Context Engine continuously:

- Acquires incoming context signals and classifies them.
- Periodically resolves the accumulated signals into a new context snapshot version.
- Distributes the new snapshot (or a delta) to all registered consuming Engines.
- Monitors context freshness and triggers refresh or eviction for stale elements.
- Produces acquisition, resolution, and distribution records for auditability.

The resolution cycle operates on a configurable interval. Within each cycle, the Context Engine collects all signals received since the last resolution, applies resolution rules, and produces a new snapshot version.

### 10.4 Degradation

The Context Engine degrades gracefully when operating under stress:

- **Signal backlog** — When incoming signals exceed the resolution capacity, the Context Engine prioritizes signals by source authority and urgency, deferring lower-priority signals.
- **Distribution failure** — When a consuming Engine cannot be reached, the Context Engine retains the snapshot and retries distribution according to the Engine Communication model's retry policy.
- **Resource pressure** — When context size approaches the configured limit, the Context Engine triggers compaction (see Section 11) to reduce context while preserving the most relevant elements.

### 10.5 Shutdown

During graceful shutdown, the Context Engine:

- Stops accepting new context signals.
- Produces a final context snapshot (finalized version) that represents the current resolved state.
- Emits a `Context Finalized` event with the final snapshot version.
- Delivers the final snapshot to all reachable consuming Engines.
- Produces a shutdown record including the final version, total signals processed, and total snapshots produced.
- Deregisters from the Engine Registry.

### 10.6 Restart and Recovery

On restart, the Context Engine recovers by:

- Loading the most recent finalized context snapshot from the version chain.
- Re-establishing communication channels with all registered sources and consumers.
- Replaying any signals that were received but not yet resolved (if recovery evidence is available).
- Emitting a `Context Recovered` event with the recovery point version.
- Resuming steady-state operation from the recovered version.

State that must be persisted or recovered includes the context version chain, the most recent resolved snapshot, and the configuration inputs. The Context Engine does not define how persistence works (that is out of scope), but it defines what must be recoverable.

---

## 11. Internal Engine Model

### 11.1 Conceptual Overview

The Context Engine's internal model consists of five interconnected processing stages that transform raw signals into resolved, versioned context:

```
Signal Queue → Signal Classifier → Context Workspace → Resolution Engine → Version Manager
                                                                         ↓
                                                              Distribution Manager
```

### 11.2 Signal Queue

The Signal Queue is an ordered, bounded buffer that receives all incoming context signals. Each signal entry contains the raw signal data, source metadata, receipt timestamp, sequence number, and classification state (unclassified, classified, rejected).

The queue is bounded by a configurable maximum depth. When the queue is full, the Context Engine applies backpressure to sources: high-authority signals are accepted, low-authority signals are deferred with a notification to the producing source.

The queue supports three operations: `enqueue(signal)`, `dequeue()`, and `peek()`. It is deterministic: signals are dequeued in FIFO order within the same priority level.

### 11.3 Signal Classifier

The Signal Classifier processes each dequeued signal and assigns it a classification that determines how the Resolution Engine will treat it. Classification produces:

- **Signal type** — user input, task metadata, engine state, environmental parameter, or feedback signal.
- **Source authority** — the priority weight of the signal's source, drawn from the Source Authority Map.
- **Relevance domain** — which task phases or Engine capabilities this signal is relevant to.
- **Urgency** — whether this signal should trigger an immediate resolution cycle or wait for the next scheduled cycle.
- **Freshness expectation** — how quickly this signal is expected to decay.

The classifier is deterministic: the same signal with the same source metadata and configuration will always receive the same classification.

### 11.4 Context Workspace

The Context Workspace is the in-memory representation of the current context state. It is organized into three layers:

1. **Signal Layer** — The raw classified signals, organized by type and relevance domain. This layer preserves the original signal data and its classification for traceability.

2. **Entity Layer** — Merged entities where multiple signals refer to the same informational entity. For example, a user's stated intent and a task's goal description may be merged into a single "Task Intent" entity. The Entity Layer records the merge reasoning and the source signals that contributed to each entity.

3. **Resolved Layer** — The final resolved context that will be versioned and distributed. This layer contains only the entities that pass the relevance threshold and have no unresolved conflicts.

The workspace supports concurrent read access from the Resolution Engine and the Distribution Manager. Write access is serialized through the resolution cycle to maintain consistency.

### 11.5 Resolution Engine

The Resolution Engine is the core processing component that transforms the Signal Layer and Entity Layer into the Resolved Layer. It performs four operations in sequence:

1. **Conflict Detection** — Scans the Entity Layer for entities that have conflicting attributes from multiple sources. A conflict exists when two signals provide different values for the same attribute of the same entity.

2. **Conflict Resolution** — Applies resolution rules (Section 12) to each detected conflict. Resolution produces a winning value and a resolution record that explains the decision.

3. **Relevance Scoring** — Assigns a relevance score to each entity based on its relevance domain, temporal recency, source authority, and task-phase affinity. Entities below the relevance threshold are moved to a deferred pool rather than discarded.

4. **Snapshot Production** — Assembles the resolved entities into a coherent snapshot structure, attaches metadata (version, timestamp, source traces, relevance scores), and hands the snapshot to the Version Manager.

The Resolution Engine is deterministic: given the same Signal Layer, Entity Layer, resolution rules, and configuration, it will produce the same Resolved Layer. This supports replayability and auditability.

### 11.6 Version Manager

The Version Manager assigns a unique, monotonically increasing version identifier to each snapshot produced by the Resolution Engine. It maintains the context version chain — a linked list of snapshots that supports:

- **Point-in-time lookup** — Retrieving the resolved context as it existed at any past version.
- **Delta computation** — Computing the difference between any two versions.
- **Version conflict detection** — Identifying when concurrent updates have produced divergent branches in the version chain.

The Version Manager does not store the full history indefinitely. It retains the most recent N snapshots (configurable) and summarizes older snapshots into compaction records that preserve traceability without retaining full content.

### 11.7 Distribution Manager

The Distribution Manager handles the delivery of resolved snapshots (or deltas) to all registered consuming Engines. It supports two delivery patterns:

- **Push** — The Context Engine proactively sends each new snapshot (or delta) to all registered consumers immediately after versioning.
- **Pull** — A consuming Engine requests the current context snapshot on demand. The Distribution Manager returns the most recent version.

Push is the default delivery pattern for Engines that have registered for proactive context updates. Pull is available for Engines that only need context at specific points in their processing cycle (e.g., the Validation Engine may only need context when a validation request arrives).

---

## 12. Resolution Rules

### 12.1 Conflict Resolution

When two or more signals provide conflicting values for the same attribute of the same entity, the Context Engine resolves the conflict using the following priority ordering:

1. **Source Authority** — The signal from the higher-authority source wins. Authority is defined by the Source Authority Map (consumed as a configuration input). Example: a user's explicit statement has higher authority than an inferred environmental parameter.

2. **Temporal Recency** — When source authority is equal, the more recent signal wins. Recency is determined by the signal's receipt timestamp.

3. **Signal Specificity** — When authority and recency are equal, the more specific signal wins. A signal that directly addresses the attribute in question is more specific than a signal that addresses a related attribute or a broader category.

4. **Task-Phase Affinity** — When authority, recency, and specificity are equal, the signal with higher affinity to the current task phase wins. Some signals are more relevant during planning, others during execution.

### 12.2 Ambiguity Handling

When a signal is ambiguous (e.g., a user input that could refer to multiple entities), the Context Engine applies the following rules:

1. **Defer and gather** — The ambiguous signal is held in the Signal Layer without merging it into an entity. Subsequent signals may disambiguate it.
2. **Timeout** — If disambiguation does not occur within a configurable timeout, the ambiguous signal is included in the resolved context with an `ambiguous` flag. Downstream Engines are informed that this context element is uncertain.
3. **Source consultation** — If the source supports clarification (e.g., the user can be asked for clarification), the Context Engine emits a `Clarification Requested` event to the appropriate source. The resolution cycle does not block on this; it proceeds with the ambiguous flag.

### 12.3 Fallback Behaviour

When resolution cannot produce a deterministic outcome (e.g., two signals have identical authority, recency, specificity, and task-phase affinity), the Context Engine applies the following fallback:

1. **Explicit tie-breaking configuration** — If the Engine configuration defines a tie-breaking rule for this conflict type, that rule is applied.
2. **Conservative inclusion** — If no tie-breaking rule exists, both conflicting values are included in the resolved context with a `conflict` flag. Downstream Engines are informed that a conflict exists and may apply their own resolution logic.
3. **Governance escalation** — If the conflict cannot be resolved and involves a governance-relevant attribute (e.g., task scope, ownership, authority), the Context Engine emits a `Conflict Escalated` event to Framework Governance. The resolution cycle continues with the conservative inclusion approach.

### 12.4 Compaction Resolution

When the context exceeds the configured size limit, the Context Engine compacts it by applying the following rules in order:

1. **Evict expired** — Remove all context elements that have exceeded their freshness threshold.
2. **Evict lowest relevance** — Remove elements with the lowest relevance scores until the context is within the size limit.
3. **Summarize clusters** — Group related elements into summary entities that preserve the essential information while reducing the total element count. Summarization preserves source traces and the original element count for auditability.
4. **Emit compaction event** — Produce a `Context Compacted` event that identifies what was evicted, what was summarized, and the pre- and post-compaction versions.

---

## 13. Validation Rules

### 13.1 Input Validation

Every context signal received by the Context Engine is validated against the following criteria before being accepted into the Signal Queue:

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Schema compliance | Signal structure matches the expected type schema (user input, task metadata, engine state, environmental parameter, feedback) | Signal rejected; rejection record produced; source notified |
| Source identification | Signal includes a valid source identifier that exists in the Source Authority Map or is a recognized Engine identifier | Signal queued with `unknown-source` classification; deferred resolution |
| Timestamp validity | Signal includes a receipt timestamp that is monotonically non-decreasing relative to other signals from the same source | Signal reordered to correct position; out-of-order record produced |
| Size constraint | Signal total size does not exceed the per-signal maximum (configurable) | Signal rejected; source notified of size violation |
| Terminology compliance | Signal uses canonical terminology as defined by STD-003 where applicable | Signal accepted with `terminology-warning` flag; not rejected |

### 13.2 Output Validation

Every resolved context snapshot is validated against the following criteria before being handed to the Version Manager:

| Validation | Rule | Failure Mode |
|:---|:---|:---|
| Relevance threshold | All included context elements have a relevance score at or above the configured threshold | Elements below threshold removed and deferred |
| Conflict resolution completeness | No unresolved conflicts remain in the Resolved Layer (all conflicts are either resolved or flagged) | Snapshot production blocked; Resolution Engine re-attempts with escalation rules |
| Source trace completeness | Every context element has a valid source trace (source identifier, receipt timestamp, version) | Elements with incomplete traces removed; gap flagged in metadata |
| Entity integrity | No entity has null or empty required attributes | Entity flagged as `incomplete`; included with degradation warning |
| Snapshot consistency | The snapshot is internally consistent — no circular entity references, no orphaned entities | Inconsistencies resolved by removing orphans and breaking circular references |
| Size limit | Total snapshot size does not exceed the configured maximum | Compaction triggered (Section 12.4); snapshot re-produced |

### 13.3 State Transition Validation

The Context Engine validates its own state transitions against the following criteria:

| Transition | Validation | Failure Mode |
|:---|:---|:---|
| Initialized → Steady State | Readiness check passed; at least one consumer acknowledged receipt | Retry readiness check; escalate if retries exhausted |
| Steady State → Degraded | Degradation trigger conditions met (backlog, distribution failure, resource pressure) | Transition does not require validation — it is triggered by monitoring |
| Degraded → Steady State | Degradation conditions resolved; signal queue within limits; all critical consumers reachable | Return to steady state; recovery event emitted |
| Any → Shutdown | Final snapshot produced; finalization event emitted | Shutdown blocked until finalization completes |
| Shutdown → Recovery | Recovery evidence available (version chain, last snapshot) | Recovery from empty state with version `0` |

Validation rules are composable — each validation can be applied independently, and the results can be aggregated into a validation report. Validation results follow a binary model: pass (proceed) or fail (apply failure mode). Soft warnings (e.g., terminology compliance) are recorded but do not block processing.

---

## 14. Engine Invariants

The following properties must always hold for the Context Engine regardless of state, inputs, or operations:

### Invariant 1: Version Monotonicity

Every resolved context snapshot has a version identifier that is strictly greater than all previous snapshot versions produced by this Context Engine instance. No two snapshots share the same version identifier. The version chain is a strictly monotonically increasing sequence.

### Invariant 2: Source Traceability

Every context element in every resolved snapshot is traceable to at least one acquired context signal. No context element appears in a resolved snapshot without a verifiable source. If source traceability is lost (e.g., due to a system failure), the element is removed before the snapshot is versioned.

### Invariant 3: Deterministic Resolution

Given the same set of classified signals, the same resolution rules, and the same configuration, the Resolution Engine produces the same resolved context. This invariant supports replayability, auditability, and the ability to reconstruct the context at any past version.

### Invariant 4: Immutable Snapshots

Once a resolved context snapshot has been assigned a version and handed to the Distribution Manager, it cannot be modified. Corrections are handled by producing a new snapshot version. No operation on the Context Engine mutates a versioned snapshot.

### Invariant 5: Single Active Context Per Task

For any given task identifier, there is at most one active (non-finalized) context. A new context for the same task cannot be created until the existing context is finalized or explicitly superseded through a governance-authorized transition.

### Invariant 6: Distribution Acknowledgment Consistency

For every context snapshot distributed via the push pattern, the Distribution Manager records whether each registered consumer acknowledged receipt. A snapshot is considered "fully distributed" only when all registered consumers have either acknowledged or been marked as unreachable after retry exhaustion. Partial distribution is tracked and reported but does not block the Context Engine from continuing to resolve new signals.

---

## 15. Engine Operations

### 15.1 Acquisition Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `acquire_signal(signal)` | Accept a new context signal into the queue | Raw context signal with source metadata | Acquisition record | Signal added to queue; classified | Signal rejected (schema/size violation); queue full (backpressure) |
| `classify_signal(signal)` | Assign classification to a dequeued signal | Unclassified signal | Classified signal | Signal type, authority, relevance, urgency, freshness assigned | Classification failure (unknown type → deferred with warning) |

### 15.2 Resolution Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `resolve_context()` | Execute one full resolution cycle | Current Signal Layer and Entity Layer | Resolved Layer | Conflicts resolved; relevance scored; entities merged | Unresolved conflicts (escalation triggered); validation failure (snapshot blocked) |
| `detect_conflicts(entity)` | Scan for conflicting attribute values within an entity | Entity from Entity Layer | Conflict list | None | No conflicts detected (empty list) |
| `resolve_conflict(conflict)` | Apply resolution rules to a single conflict | Conflict with conflicting signals | Resolution decision | Winning value selected; resolution record produced | Tie (conservative inclusion + escalation) |

### 15.3 Versioning Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `version_snapshot(resolved_layer)` | Assign version to a resolved context | Resolved Layer | Versioned snapshot | Added to version chain | Version conflict (concurrent versioning → branch detection) |
| `get_snapshot(version)` | Retrieve a snapshot by version | Version identifier | Snapshot or `not found` | None | Version not found (historical snapshot expired) |
| `compute_delta(from_version, to_version)` | Compute the difference between two versions | Two version identifiers | Context delta | None | Versions not contiguous (gap → delta covers multiple versions) |

### 15.4 Distribution Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `distribute_snapshot(snapshot, consumers)` | Push a snapshot to registered consumers | Versioned snapshot, consumer list | Distribution records | Consumers notified | Consumer unreachable (retry → mark unreachable) |
| `serve_context()` | Return current snapshot on pull request | Pull request | Current versioned snapshot | None | No snapshot available (context not yet initialized) |

### 15.5 Lifecycle Operations

| Operation | Purpose | Inputs | Outputs | Side Effects | Failure Modes |
|:---|:---|:---|:---|:---|:---|
| `initialize_context(task_id, config)` | Create a new context for a task | Task identifier, configuration | `Context Initialized` event | Empty context (version 0) created; consumers notified | Registry unavailable (retry); config invalid (block with error) |
| `compact_context()` | Reduce context size | Current context | `Context Compacted` event | Low-relevance elements evicted; summaries produced | Compaction insufficient (size still over limit → aggressive compaction) |
| `finalize_context()` | Archive context at task completion | Current context | `Context Finalized` event; final snapshot | Context marked as finalized; no further updates | Final snapshot validation failure (block finalization) |
| `recover_context(last_known_version)` | Restore context from version chain | Version identifier | `Context Recovered` event | Context restored to given version | Version not found (recover from version 0) |

All operations are idempotent where specified. `acquire_signal` with a duplicate sequence number from the same source is idempotent (returns existing acquisition record). `distribute_snapshot` to an already-acknowledged consumer is idempotent (returns existing distribution record). `resolve_context` is idempotent if no new signals have arrived since the last resolution.

---

## 16. Engine Events

### 16.1 Events Emitted

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

### 16.2 Events Reacted To

| Event | Source | Response |
|:---|:---|:---|
| `Engine Registered` | Engine Registry (A.4.3) | If the registered Engine is a context consumer, register it for push or pull delivery |
| `Engine Deregistered` | Engine Registry (A.4.3) | Remove the Engine from the consumer list; cease distribution to it |
| `Task Phase Transition` | Engine Lifecycle (A.4.4) | Update task-phase affinity for relevance scoring; may trigger re-resolution with new phase context |
| `State Snapshot Available` | Peer Engine | Accept the snapshot as a context signal; classify and incorporate into next resolution cycle |
| `Configuration Updated` | Governance or Engine configuration | Reload configuration inputs (freshness policy, size limits, source authority map); do not disrupt in-progress resolution |

All event payloads are versioned. Events are not dropped silently — if an event consumer is unavailable, the event is queued and retried according to the Engine Communication model (A.4.5). Critical events (`Conflict Escalated`, `Context Finalized`) are treated as non-droppable and will block the Context Engine's progression if delivery cannot be confirmed after retry exhaustion.

---

## 17. Dependencies

This section identifies the upstream dependencies the Context Engine requires for correct interpretation, validation, and operation, consistent with the Universal Section Contract (Section 4 of A.5.0).

The Context Engine depends on the following:

- **Engine Platform (A.4)** — Provides the capability model, Engine contract, and overall architectural context within which the Context Engine operates. The Context Engine cannot be correctly interpreted without understanding the Engine Platform's capability, communication, and lifecycle models.
- **Engine Kernel (A.4.1)** — Provides the execution environment and foundational Engine services (registration, discovery, health monitoring) that the Context Engine consumes at runtime.
- **Engine Contract (A.4.2)** — Defines the contract interface that the Context Engine must implement, including input/output schemas, operation signatures, and event contracts.
- **Engine Registry (A.4.3)** — Provides the registry service that the Context Engine uses to register itself, discover peer Engines, and manage consumer subscriptions.
- **Engine Lifecycle (A.4.4)** — Provides the lifecycle state machine (initialization, startup, steady state, degradation, shutdown, recovery) that the Context Engine's lifecycle behaviour (Section 10) specializes.
- **Engine Communication (A.4.5)** — Provides the communication model for inter-Engine messaging, event delivery, and signal transport that the Context Engine uses for distribution and source interaction.
- **Engine State (A.4.6)** — Provides the state model that defines how the Context Engine's internal state is structured, versioned, and transitioned.
- **Engine Capability (A.4.7)** — Provides the capability registry that maps the Context Engine to the "Context Resolution" capability domain.
- **STD-010 (Document Metadata Standard)** — Provides the metadata standard that this RFC's Document Metadata section conforms to.
- **STD-003 (Terminology Standard)** — Provides the canonical terminology that context signals and resolved context elements must use.
- **STD-000 (Framework Standards)** — Provides the overarching framework governance standards.
- **M.0 (Framework Meta-Model)** — Provides the foundational entity and relationship structures.
- **M.1 (Artifact Meta-Model)** — Provides the artifact identity and lifecycle model.

---

## 18. Engine State

This section describes the Context Engine's state characteristics within the A.4.6 Engine State model, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 18.1 State Dimensions

The Context Engine maintains state across the following dimensions:

| Dimension | Description | Volatility |
|:---|:---|:---|
| **Configuration State** | Freshness policy, size limits, source authority map, relevance thresholds | Low — changes only through governance-authorized configuration updates |
| **Signal Queue State** | Current contents of the Signal Queue, including classified and unclassified signals | High — changes with every incoming signal |
| **Context Workspace State** | Current Signal Layer, Entity Layer, and Resolved Layer contents | High — changes with every resolution cycle |
| **Version Chain State** | History of versioned snapshots and compaction records | Medium — grows with each resolution cycle, compacted periodically |
| **Distribution State** | Consumer registry, delivery status for each snapshot, retry queues | Medium — changes with each distribution operation |
| **Lifecycle State** | Current lifecycle phase (per A.4.4) and transition history | Low — changes only at lifecycle transition points |

### 18.2 State Consistency

The Context Engine maintains consistency between its state dimensions through the following rules:

- The Version Chain State is always consistent with the Context Workspace State — every versioned snapshot corresponds to a resolved Context Workspace state.
- The Distribution State references valid versions in the Version Chain State — no distribution record references a non-existent version.
- The Configuration State is always consistent with the Resolution Engine's behaviour — a configuration change triggers a re-resolution if the change affects resolution rules, relevance thresholds, or source authority.

### 18.3 State Recovery

The Context Engine's recovery-critical state consists of the Version Chain State (most recent N snapshots) and the Configuration State. The Signal Queue State and Context Workspace State are transient and do not need to survive a restart — they are rebuilt from the most recent snapshot and incoming signals after recovery.

---

## 19. AI Consumption Rules

This section defines the rules for AI/LLM invocation boundaries for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 19.1 AI Consumption Boundary

The Context Engine does not invoke LLMs or AI models as part of its core architecture. The Context Engine operates on deterministic rules for classification, resolution, versioning, and distribution. It does not use AI for context relevance scoring, conflict resolution, or entity merging.

### 19.2 When AI May Be Involved

The Context Engine may receive signals that were produced by AI/LLM processes in other Engines (e.g., a Planning Engine that uses an LLM to generate a plan, then sends the plan as a context signal). In this case:

- The Context Engine treats the AI-produced signal the same as any other signal — it is classified, validated, and resolved according to the same rules.
- The Context Engine does not need to know whether a signal was produced by AI or by a deterministic process.
- The source authority of AI-produced signals is determined by the producing Engine's authority in the Source Authority Map, not by the fact that AI was involved.

### 19.3 Prohibited AI Usage

- The Context Engine shall not use LLM calls to determine relevance scores.
- The Context Engine shall not use LLM calls to resolve conflicts.
- The Context Engine shall not use LLM calls to generate context summaries during compaction. Compaction summarization uses deterministic rules.
- The Context Engine shall not use prompt engineering or model selection in any capacity.

---

## 20. Runtime Interaction Rules

This section defines the rules for runtime interaction patterns for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 20.1 Interaction Model

The Context Engine interacts with the runtime through the Engine Kernel (A.4.1) and Engine Communication (A.4.5). It does not interact directly with the agent runtime or swarm runtime.

### 20.2 Synchronous Interactions

The following operations are synchronous — the caller blocks until the Context Engine responds:

- `serve_context()` — A pull request for the current snapshot returns immediately with the most recent version or an error.
- `get_snapshot(version)` — A version lookup returns immediately with the snapshot or `not found`.

### 20.3 Asynchronous Interactions

The following operations are asynchronous — the caller does not block on the Context Engine's processing:

- `acquire_signal(signal)` — The caller submits a signal and receives an acknowledgment. Processing (classification, resolution) happens asynchronously.
- `distribute_snapshot()` — The Context Engine pushes snapshots to consumers asynchronously. Consumers acknowledge receipt asynchronously.

### 20.4 Concurrency Rules

- Multiple sources may submit signals concurrently. The Signal Queue serializes them.
- Only one resolution cycle runs at a time. Concurrent resolution requests are coalesced — if a resolution is already in progress, subsequent requests wait for its completion and receive the result.
- The Distribution Manager may deliver to multiple consumers concurrently.
- Read operations (`get_snapshot`, `serve_context`) do not block write operations (resolution, versioning) and vice versa, as long as they do not access the same snapshot version simultaneously.

---

## 21. Extension Model

This section describes how the Context Engine may be extended, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 21.1 Extension Points

The Context Engine defines the following extension points that may be specialized without modifying the core architecture:

| Extension Point | Description | Governance |
|:---|:---|:---|
| Custom signal classifiers | Additional classification rules for domain-specific signal types | Must be registered through Engine configuration; must not override default classification |
| Custom resolution strategies | Alternative conflict resolution ordering for specific conflict types | Must be defined in the Source Authority Map or a governed configuration extension |
| Custom relevance scorers | Domain-specific relevance scoring functions | Must produce scores in the [0.0, 1.0] range; must not override the baseline scorer |
| Custom compaction strategies | Alternative compaction logic for specific context domains | Must preserve source traceability; must emit compaction events |

### 21.2 Extension Constraints

- Extensions must not modify the Context Engine's invariants (Section 14).
- Extensions must not introduce non-deterministic behaviour.
- Extensions must not bypass the versioning or distribution mechanisms.
- Extensions that affect conflict resolution must be reviewed by Framework Governance before deployment.
- Extensions must comply with STD-003 terminology requirements.

---

## 22. Knowledge Graph Integration

This section describes the Context Engine's knowledge graph interaction points, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 22.1 Integration Model

The Context Engine's resolved context snapshots may be projected into the knowledge graph for traceability, cross-reference, and historical analysis. The Context Engine does not directly read from or write to the knowledge graph — integration is mediated through the Engine Platform's knowledge graph projection layer.

### 22.2 Projection Points

| Projection | Content | Purpose |
|:---|:---|:---|
| Context Version Node | Snapshot version, timestamp, task identifier, element count | Enable version-level traceability and historical queries |
| Context Element Node | Element identifier, type, source, relevance score | Enable element-level cross-reference and provenance tracking |
| Conflict Resolution Edge | Conflicting signals, resolution decision, rule applied | Enable conflict analysis and resolution pattern mining |
| Distribution Edge | Snapshot version, consumer identifier, delivery timestamp | Enable distribution tracking and coverage analysis |

### 22.3 Integration Constraints

- Knowledge graph projection is a downstream concern and does not affect the Context Engine's core processing.
- The Context Engine produces the data for projection; it does not define the projection schema, query model, or graph structure.
- Projection failures do not affect the Context Engine's operation — projection is best-effort and non-blocking.

---

## 23. Certification Requirements

This section defines the pre-certification quality gates for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 23.1 Required Certifications

Before the Context Engine transitions from Draft to Approved, the following certifications must be completed:

| Certification | Requirement | Evidence |
|:---|:---|:---|
| **Template Compliance** | All 31 sections present and compliant with A.5.0 template | Section-by-section compliance matrix |
| **STD-010 Metadata Compliance** | Document Metadata fully compliant with STD-010 Section 4 | Metadata validation checklist (all items pass) |
| **STD-003 Terminology Compliance** | All terms used in this RFC conform to STD-003 | Terminology audit report |
| **Invariant Verifiability** | All six invariants (Section 14) are expressible as testable assertions | Invariant test specification document |
| **Determinism Verification** | Resolution Engine produces identical output for identical inputs | Determinism test evidence |
| **Completeness Check** | All Engine responsibilities (Section 5) map to at least one operation (Section 15) | Responsibility-to-operation traceability matrix |
| **Event Completeness** | All lifecycle transitions (Section 10) produce corresponding events (Section 16) | Lifecycle-to-event traceability matrix |

### 23.2 Certification Gates

- Certification evidence must be reviewed by the Enterprise Documentation Standards Board.
- Certification does not imply canonical status — canonical promotion requires separate governance approval.
- Certification evidence must be traceable to this RFC's Traceability ID: `AI-DOS.V4.PHASE-2.ENGINE-01`.

---

## 24. Performance Characteristics

This section states the expected performance boundaries for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 24.1 Expected Performance Bounds

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

### 24.2 Scalability Characteristics

- The Context Engine is designed to handle multiple concurrent tasks, each with its own isolated context.
- Within a single task, the Context Engine handles multiple concurrent signal sources and multiple concurrent consumers.
- The Signal Queue provides backpressure when input rate exceeds resolution capacity, preventing unbounded memory growth.
- Compaction ensures that context size remains bounded even for long-running tasks.

### 24.3 Non-Goals

- This RFC does not define specific latency numbers (e.g., "50ms") — those are implementation concerns.
- This RFC does not define throughput targets (e.g., "1000 signals/second") — those are implementation concerns.
- This RFC does not define resource allocation (CPU, memory, network) — those are platform concerns.

---

## 25. Security & Governance

This section states the security boundaries and governance constraints for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 25.1 Security Boundaries

- **Signal integrity** — The Context Engine validates every signal against its schema but does not authenticate or authorize signal sources. Source authentication and authorization are the responsibility of the Engine Communication layer (A.4.5) and the platform's security model.
- **Snapshot immutability** — Once versioned, snapshots cannot be tampered with. Any attempt to modify a versioned snapshot is a violation of Invariant 4 and should be detected by the Version Manager's integrity checks.
- **Distribution access control** — The Context Engine distributes to all registered consumers. Consumer authorization (who is allowed to receive context) is managed by the Engine Registry (A.4.3), not by the Context Engine.
- **Configuration integrity** — Configuration changes (freshness policy, size limits, source authority map) must be governance-authorized. The Context Engine rejects configuration changes that do not carry governance authorization metadata.

### 25.2 Governance Constraints

- The Context Engine's Source Authority Map is a governance artifact — changes to source priorities require Framework Governance approval.
- Conflict escalation events are directed to Framework Governance for resolution.
- The Context Engine does not make governance decisions (e.g., it does not decide what is "correct" in a conflict — it applies the rules and escalates when rules are insufficient).
- The Context Engine's extension model (Section 21) requires governance review for extensions that affect conflict resolution or relevance scoring.

---

## 26. Out of Scope

The following concerns are explicitly out of scope for the Context Engine and shall not appear in any section of this RFC:

- Source code, implementation files, and code repositories
- REST endpoints, API definitions, GraphQL schemas, gRPC service definitions, and transport protocols
- Persistence mechanisms, database schema design, Neo4j implementation specifics, and vector database configuration
- Caching strategies, cache invalidation, and cache infrastructure
- LLM call orchestration, prompt engineering, model selection, token management, and inference optimization
- Agent runtime design, agent lifecycle management, and agent communication protocols
- Swarm runtime design, swarm coordination, and swarm topology management
- Platform adapter specifications and adapter lifecycle management
- ProjectStatus updates, project tracking, and milestone reporting
- Certification execution — this RFC defines certification requirements (Section 23) but does not execute the certification process
- Canonical promotion — this RFC defines promotion requirements but does not perform the promotion
- UI/UX design, user interface components, and visualization of context

---

## 27. Future Consumers

This section identifies the downstream Engines and components that are expected to consume the Context Engine's outputs, consistent with the Universal Section Contract (Section 4 of A.5.0).

| Consumer | Consumption Pattern | Expected Context Usage |
|:---|:---|:---|
| **Planning Engine (A.5.3, future)** | Pull on demand | Retrieves current context snapshot at the start of each planning cycle to understand task state, user intent, and environmental constraints |
| **Knowledge Engine (A.5.2, future)** | Push subscription | Receives context updates to determine what knowledge needs to be retrieved or updated |
| **Decision Engine (A.5.4, future)** | Pull on demand | Retrieves current context snapshot at each decision point to evaluate options against the full contextual state |
| **Execution Engine (A.5.5, future)** | Push subscription | Receives context updates to adapt execution behaviour to changing context |
| **Validation Engine (A.5.6, future)** | Pull on demand | Retrieves context snapshot when validating outputs to ensure validation accounts for the full context |
| **Memory Engine (A.5.9, future)** | Push subscription | Receives context updates and compaction events to inform long-term memory storage and retrieval |
| **Engine Platform (A.4)** | Event-driven | Consumes lifecycle events and distribution records for platform-level monitoring and health assessment |
| **Knowledge Graph Projection** | Asynchronous projection | Consumes version and element metadata for graph-based traceability and analysis |

---

## 28. Success Criteria

This section defines the measurable success conditions for the Context Engine, consistent with the Universal Section Contract (Section 4 of A.5.0).

### 28.1 Architectural Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Template compliance** | All 31 sections present and compliant with A.5.0 | Section-by-section audit against A.5.0 template |
| **STD-010 compliance** | Document Metadata passes all STD-010 Section 4 mandatory and conditional checks | STD-010 validation checklist |
| **Invariant testability** | All six invariants are expressible as automated test assertions | Invariant test suite |
| **Determinism** | Identical signal sequences produce identical context snapshots across 100 consecutive runs | Determinism test suite |
| **Completeness** | Every responsibility (Section 5) maps to at least one operation (Section 15) | Traceability matrix |
| **Event coverage** | Every lifecycle transition (Section 10) produces a corresponding event (Section 16) | Lifecycle-to-event traceability matrix |

### 28.2 Functional Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Context completeness** | All context-relevant signals are included in the resolved snapshot | Signal-to-snapshot coverage test |
| **Conflict resolution** | All detected conflicts are either resolved or escalated — no silent drops | Conflict audit log review |
| **Version chain integrity** | No gaps, no duplicate versions, no broken links in the version chain | Version chain integrity test |
| **Distribution reliability** | All registered consumers receive all non-dropped snapshots within retry limits | Distribution audit log review |

### 28.3 Governance Success Criteria

| Criterion | Measurable Condition | Verification Method |
|:---|:---|:---|
| **Ownership clarity** | Exactly one accountable owner is named in Section 30 | Governance review |
| **Handoff readiness** | Handoff contract (Section 31) defines prerequisites, evidence, and certification gates | Governance review |
| **Scope compliance** | No implementation, API, persistence, or LLM details in any section | Scope audit |

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
| Section 11 (Internal Engine Model) describes five processing stages with deterministic behaviour | Complete |
| Section 12 (Resolution Rules) defines conflict resolution, ambiguity handling, and compaction | Complete |
| Section 13 (Validation Rules) defines input, output, and state transition validation | Complete |
| Section 14 (Engine Invariants) states six testable invariants | Complete |
| Section 15 (Engine Operations) enumerates operations with inputs, outputs, side effects, and failure modes | Complete |
| Section 16 (Engine Events) enumerates emitted and consumed events | Complete |
| Section 17 (Dependencies) lists all upstream dependencies | Complete |
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

The Framework Architecture Team is the single accountable owner for the Context Engine's architectural correctness, governance alignment, and certification readiness. The Context Engine is a foundational Engine that all other Phase 2 Engines depend on, and its architecture must remain under centralized architectural control.

### Maintained Boundaries

| Boundary | Owner Controls | Outside Owner Scope |
|:---|:---|:---|
| Context resolution architecture | Yes | Engine Platform lifecycle management (A.4.4) |
| Conflict resolution rules | Yes | Communication transport implementation (A.4.5) |
| Version chain design | Yes | Persistence implementation details |
| Distribution strategy | Yes | Consumer-side context processing |
| Extension model governance | Yes | Extension implementations by other teams |
| Configuration schema | Yes | Configuration deployment tooling |

### Decision Rights

| Decision Type | Owner Authority | Requires Governance Escalation |
|:---|:---|:---|
| Internal model changes | Autonomous | No |
| New resolution strategy addition | Autonomous if no invariant impact | Yes if invariant impact |
| API/schema changes | Requires Engine Contract (A.4.2) alignment | Yes |
| Cross-Engine protocol changes | Cannot decide autonomously | Yes — always |
| Source authority priority changes | Autonomous for ordering within same tier | Yes for cross-tier changes |
| New extension point addition | Autonomous | Yes if it affects conflict resolution or relevance scoring |

### Validation Obligations

The owner must validate the following before requesting review:

- All 31 sections are present and compliant with the A.5.0 template.
- All invariants are preserved by the proposed architecture.
- All responsibilities map to operations.
- All lifecycle transitions produce events.
- The Document Metadata is fully STD-010-compliant.
- No implementation scope has been introduced.

### Review Obligations

The owner must present the following for review to the Enterprise Documentation Standards Board:

- The complete RFC with all sections.
- The responsibility-to-operation traceability matrix.
- The lifecycle-to-event traceability matrix.
- The invariant test specification.
- Evidence of STD-010 and STD-003 compliance.

### Certification Responsibilities

The owner must produce the following evidence to support certification:

- Template compliance matrix.
- STD-010 metadata validation checklist.
- STD-003 terminology audit report.
- Invariant test results.
- Determinism verification evidence.
- Conflict resolution audit log.
- Version chain integrity test results.

### Ownership Handoff Limitations

Ownership may transfer from the Framework Architecture Team to another named role or individual only through a governance-authorized transition. The transition must:

- Record the current owner, new owner, transition date, and governance authorization in the Engine Registry.
- Transfer all validation, review, and certification obligations to the new owner.
- Preserve all existing certification evidence and traceability.
- Not occur silently or implicitly — the Engine Registry must reflect the change before it takes effect.

---

## 31. Engine Handoff Contract

### Handoff Prerequisites

Before the Context Engine hands off its outputs (resolved context snapshots, deltas, metadata) to a downstream Engine, the following conditions must be satisfied:

1. The resolved context snapshot has passed all output validation rules defined in Section 13.2.
2. The snapshot has been assigned a version by the Version Manager and added to the version chain.
3. No unresolved conflicts remain in the Resolved Layer (all conflicts are either resolved or flagged with conservative inclusion).
4. All context elements have valid source traces.
5. The snapshot size is within the configured maximum.
6. The Context Engine is in steady-state or degraded lifecycle phase (not in initialization or shutdown).

### Required Evidence

Every handoff must be accompanied by the following evidence:

| Evidence | Description | Retention |
|:---|:---|:---|
| Snapshot version identifier | Unique version of the handed-off snapshot | Duration of consuming Engine's processing + audit retention period |
| Validation report | Output validation results (all checks pass) | Same as snapshot |
| Resolution record | Conflict resolution decisions made during this snapshot's production | Same as snapshot |
| Distribution record | Per-consumer delivery confirmation | Same as snapshot |
| Source trace log | Source identifier, timestamp, and version for every context element in the snapshot | Same as snapshot |

### Validated Outputs

The following outputs are considered validated and ready for handoff:

- Resolved context snapshot (immutable, versioned).
- Context delta (references parent version, immutable).
- Context metadata (acquisition records, resolution records, distribution records).
- Context lifecycle events (initialized, updated, compacted, finalized).

### Snapshot Expectations

Handoffs involve immutable output snapshots. The consuming Engine receives a versioned snapshot that is guaranteed not to change. If the consuming Engine needs a more recent context, it requests a new snapshot — the previous snapshot remains available for reference.

### Receiving Consumers

The primary receiving consumers for Context Engine handoffs are:

1. Planning Engine (A.5.2, future)
2. Decision Engine (A.5.4, future)
3. Execution Engine (A.5.5, future)
4. Validation Engine (A.5.6, future)
5. Knowledge Engine (A.5.3, future)
6. Memory Engine (A.5.9, future)

### Failure Handling

| Failure Type | Handling | Escalation |
|:---|:---|:---|
| Output validation failure | Snapshot blocked; Resolution Engine re-attempts with escalation rules | If re-attempt fails, `Conflict Escalated` event emitted |
| Consumer unreachable | Distribution Manager retries per A.4.5 retry policy | After retry exhaustion, consumer marked unreachable; `Source Unreachable` event emitted |
| Snapshot version conflict | Version Manager detects concurrent versioning; creates branch | `Conflict Escalated` event; governance determines merge strategy |
| Handoff evidence incomplete | Handoff blocked until evidence is complete | If evidence cannot be produced, context enters degraded state |

### Audit Record Expectations

Every handoff must produce an audit record that includes:

- Snapshot version identifier.
- Receiving consumer identifier.
- Handoff timestamp.
- Validation status (pass/fail).
- Evidence checklist (all evidence items present or missing).
- Distribution status (delivered / pending / failed).

Audit records are immutable and retained for the duration of the task plus the governance-defined audit retention period.

### Certification Gates

Before the Context Engine enters a handoff state transition (e.g., transitioning from active context production to finalized context handoff), the following certification gates must be satisfied:

1. **Pre-handoff validation** — All output validation rules (Section 13.2) pass for the snapshot being handed off.
2. **Evidence completeness** — All required evidence items (snapshot version, validation report, resolution record, distribution record, source trace log) are present.
3. **Consumer readiness** — The receiving consumer is registered, reachable, and has acknowledged at least one prior context delivery.
4. **Invariant preservation** — All six invariants (Section 14) hold for the snapshot being handed off.

If any certification gate fails, the handoff does not proceed. The Context Engine enters a degraded state, emits appropriate events, and escalates according to the failure handling rules.

---

## 32. Validation Checklist

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

## 33. Completion Report

### Executive Summary

Created the first Phase 2 Engine specialization RFC — A.5.1 Context Engine — using the refactored A.5.0 Engine Specialization RFC Template. The Context Engine is the foundational Engine responsible for acquiring, resolving, versioning, and distributing contextual state for all peer Engines in theAI-DOS v4 Engine Platform. This RFC defines a deterministic, invariant-preserving architecture that ensures every Engine operates on a consistent, traceable, and timely context.

### Documents Created

- `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`

### Architecture Decisions

1. The Context Engine serves as a central hub with fan-in/fan-out topology, receiving signals from multiple sources and distributing resolved context to multiple consumers.
2. Context resolution is fully deterministic — no AI/LLM involvement in classification, resolution, relevance scoring, or compaction.
3. The internal model follows a five-stage pipeline: Signal Queue, Signal Classifier, Context Workspace (three layers), Resolution Engine, and Version Manager.
4. Six invariants guarantee version monotonicity, source traceability, deterministic resolution, snapshot immutability, single active context per task, and distribution acknowledgment consistency.
5. The Context Engine produces immutable, versioned snapshots; corrections are handled by producing new versions, never by mutating existing ones.
6. Extension points are provided for custom classifiers, resolution strategies, relevance scorers, and compaction strategies, all governed to preserve invariants.

### STD-010 Compliance Notes

- Metadata heading uses exact `## Document Metadata` format.
- All 27 mandatory STD-010 fields are present; conditionally mandatory fields are evaluated and included only when applicable.
- RFC class expectations met: parent architecture identified, non-canonical status stated, review and approval authority explicit, normative authority separated from dependencies, produced architectural requirements identified.
- Identifier `AI-DOS-A-5-1` follows the normalized Runtime RFC family identifier convention.
- Version `0.2.0-draft` follows `major.minor.patch-status` format.
- Metadata completeness does not imply canonical status.

### Remaining Risks

- This RFC remains non-canonical until reviewed, approved, and explicitly promoted through governance.
- The Context Engine's central position means that any architectural deficiency will propagate to all downstream Engines — rigorous certification is critical.
- The Source Authority Map configuration requires governance oversight; incorrect authority assignments could produce incorrect conflict resolution.
- No implementation exists yet; the architecture has not been validated against real workloads.

### Recommended Next Step

A.5.2 — Knowledge Engine RFC, which will consume the Context Engine's resolved context snapshots to manage knowledge acquisition, retrieval, and contribution within the Engine Platform.

## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

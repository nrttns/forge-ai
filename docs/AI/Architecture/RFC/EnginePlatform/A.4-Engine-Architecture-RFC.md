# AI-DOS-A-004 — Engine Architecture RFC

|                     |                     |
|:--------------------|:--------------------|
| **Framework**       |AI-DOS v3         |
| **Document Class**  | Architecture RFC    |
| **Domain**          | Engine Architecture |
| **Confidentiality** | Internal — Governed |

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-4` |
| Title | A.4 — Engine Architecture RFC |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Platform Architecture |
| Document Type | Engine Platform RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V2.RUNTIME.A-4` |
| Scope | Defines the Engine Platform only, including shared Engine architecture, platform responsibilities, and foundation boundaries that specialize A.3 Runtime Architecture. |
| Out of Scope | Runtime Architecture redefinition, individual Engine Specialization redefinition, implementation, certification, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.1 Constitution; M.0; M.1; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Runtime Architecture, constitutional principles, meta-model semantics, artifact metadata rules, canonical terminology, RFC template rules, and Engine Platform normalization instructions. |
| Produces | Engine Platform Architecture RFC, shared Engine Platform model, Engine Foundation input requirements, and downstream inputs for A.4.1 through A.4.7 and A.5.x RFCs. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.1-Engine-Kernel-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.2-Engine-Contract-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.4-Engine-Lifecycle-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.5-Engine-Communication-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.6-Engine-State-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.7-Engine-Capability-RFC.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
| Certification Status | Not certified |

---

## Executive Summary

TheAI-DOS v3 Engine Architecture RFC defines twelve governed engines that serve as the central execution backbone of the AI Development Operating System. This architecture establishes clear capability boundaries between context assembly, knowledge retrieval, planning resolution, decision governance, work execution, output validation, independent review, certification handoff, memory management, policy enforcement, registry operations, and lifecycle orchestration. By separating these concerns into discrete, contract-bound engines, the framework achieves platform independence: execution semantics reside in governed contracts rather than in tool-specific behavior, agent heuristics, or runtime coupling.

This RFC matters because it resolves a critical architectural ambiguity in theAI-DOS v3 transition. Without explicit engine boundaries, tools, agents, and runtimes risk overstepping their authority—agents defining context, tools owning workflow, or runtimes bypassing validation. The Engine Architecture eliminates these risks by mandating that every non-trivial execution action flows through a governed engine with declared inputs, outputs, forbidden responsibilities, and handoff rules.

Key architectural decisions include the inversion of authority (engines enforce contracts rather than tools defining behavior), the explicit prohibition of AI self-certification, the non-authoritative status of memory, and the governance-rooted dependency flow from Human Governance downward through all twelve engines. The business impact is a verifiable, auditable, and platform-agnostic execution model suitable for enterprise governance, multi-agent coordination, and regulatory compliance.

This RFC sits downstream of A.1 (Constitution), M.0 (Framework Meta Model), M.1 (Artifact Meta Model), STD-000 (Framework Standards), STD-001 (Knowledge Graph Standard), and A.3 (Runtime Architecture RFC). It serves as the parent specification for seven sub-RFCs (A.4.1 through A.4.7), which refine individual engine concerns. The document remains in Draft / Non-canonical status pending Framework Governance review and approval.

---

## Purpose

This RFC defines theAI-DOS v3 Engine Architecture as the central execution architecture of the AI Development Operating System.

The Engine Architecture separates governed execution responsibilities from tools, agents, IDE assistants, CLI runners, automation hosts, and future AI-DOS-native runtimes. Engines define capability boundaries through governed contracts. Tools and agents consume those contracts; they do not own architecture, workflow, standards, certification, or project state.

This is documentation-only architecture work. It does not implement code, modify runtime behavior, redefine the Constitution, redefine the Meta Model, redefine framework standards, or redefine the Knowledge Graph.

---

## Scope

This RFC defines the structural and contractual foundations of theAI-DOS v3 engine-first execution architecture. It enumerates the required engines, their responsibility boundaries, and the models that govern how engines interact with each other, with the runtime, with the Knowledge Graph, with the Registry, and with AI agents.

This RFC defines:

1. the requiredAI-DOS engines;
2. the responsibility boundaries for each engine;
3. engine inputs, outputs, artifacts, validation expectations, failure modes, and handoff rules;
4. the relationship between engines, runtime, Knowledge Graph, Registry, AI agents, and tool adapters;
5. the engine contract model and engine registry model;
6. migration notes from RC2 operational procedures.

Required engines:

1. Context Engine;
2. Knowledge Engine;
3. Planning Engine;
4. Decision Engine;
5. Execution Engine;
6. Validation Engine;
7. Review Engine;
8. Certification Engine;
9. Memory Engine;
10. Governance Engine;
11. Registry Engine;
12. Workflow Engine.

---

## Out of Scope

This section explicitly delineates what this RFC does not address. These exclusions are as important as the in-scope items because they prevent scope creep, set stakeholder expectations, and protect upstream governance documents from inadvertent redefinition.

This RFC does not:

1. Implement code, deploy infrastructure, or modify runtime behavior.
2. Redefine the Constitution (A.1), Meta Models (M.0, M.1), Standards (STD-000, STD-001, STD-002, STD-003, STD-010), Knowledge Graph Standard, or Runtime Architecture (A.3).
3. Certify any engine, adapter, or artifact.
4. Update ProjectStatus, activate implementation, or change roadmap order.
5. Define specific programming APIs, database schemas, REST endpoints, or message formats.
6. Govern specific tool configurations, IDE extensions, or CLI integrations beyond the adapter model.
7. Replace RC2 operational procedures before v3 engine procedures are approved.
8. Define platform adapters, multi-agent runtime, swarm runtime, or enterprise governance.

---

## Normative Authority

The following authorities govern this RFC. Each authority is consumed as governing input; this RFC does not redefine any of them.

1. **Human Governance** — Ultimate authority for allAI-DOS decisions. No engine, tool, agent, or runtime may override Human Governance.
2. **`AGENTS.md`** — Repository bootstrap authority during the v3 transition. Defines initial task classification and boot behavior.
3. **`docs/AI/FrameworkGovernance.md`** — Governance decision policy including review, approval, promotion, conflict resolution, and escalation.
4. **`docs/AI/GOVERNANCE.md`** — Governance Atlas providing authority navigation and ownership mapping.
5. **`docs/AI/Architecture/Constitution/A.1-Constitution.md`** — Permanent principles and invariants including planning, execution, review, certification, and lifecycle authority boundaries.

---

## Normative References

The following documents provide normative design input or required conformance context for this RFC.

- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` — Metadata schema, relationship taxonomy, and lifecycle model governing this document's structure.
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` — Standard structure, validation lifecycle, governance expectations, and certification framework.
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` — Canonical terminology for framework vocabulary used in this RFC.
- `docs/AI/Meta/M.0-Framework-Meta-Model.md` — Normative reference for State, Authority, Ownership, Evidence, Lifecycle, and Memory concepts consumed by engine definitions.
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md` — Normative reference for artifact identity, metadata, validation expectations, and traceability.
- `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md` — Direct upstream RFC defining runtime architecture that this Engine Architecture extends.

---

## Dependencies

This RFC depends on the following upstream documents and systems. It cannot be correctly interpreted, validated, or used without them.

1. **A.1 Constitution** — Provides governance principles, planning constraints, execution boundaries, review independence, certification authority, and lifecycle rules that all engines must respect.
2. **M.0 Framework Meta Model** — Defines State, Authority, Ownership, Evidence, Lifecycle, and Memory concepts that engine definitions consume.
3. **M.1 Artifact Meta Model** — Defines artifact identity, metadata model, validation expectations, and traceability that engine outputs must satisfy.
4. **STD-000 Framework Standards** — Defines standard structure, validation lifecycle, governance expectations, and certification framework.
5. **STD-001 Knowledge Graph Standard** — Defines graph traversal, graph validation, and node/edge semantics that the Knowledge Engine must comply with.
6. **STD-003 Terminology Standard** — Defines canonical vocabulary ensuring consistent terminology across engine definitions.
7. **STD-010 Document Metadata Standard** — Defines metadata requirements for this and all downstream engine RFCs.
8. **A.3 Runtime Architecture RFC** — Defines runtime lifecycle, context, execution, validation, review, and certification concepts that engine interactions must align with.
9. **Governance authority and traceability model** — Provides the decision policy and traceability framework within which engine governance operates.

---

## Architecture

The Engine Architecture is founded on a single governing principle that establishes the authority relationship between engines, tools, agents, and the runtime. This principle ensures that no execution participant can redefine the architectural contracts or governance rules that constrain it.

### Core Principle

```text
Agents do not own architecture.
Tools do not own workflow.
Runtime does not own standards.
Engines execute governed contracts.
```

The Engine Architecture exists to makeAI-DOS platform-independent by placing execution boundaries in governed engine contracts rather than in tool behavior.

### Engine Stack Diagram

The following diagram presents the conceptual authority-to-execution flow through the twelve governed engines. It illustrates the layered dependency from Human Governance at the apex down through orchestration engines, support engines, and finally the delivery pipeline of execution, validation, review, and certification.

```text
Human Governance
    ↓
Constitution / Blueprint / Meta Models / Standards / Knowledge Graph Rules
    ↓
Governance Engine
    ↓
Registry Engine
    ↓
Workflow Engine ───── Planning Engine ───── Decision Engine
    ↓                    ↓                    ↓
Context Engine ───── Knowledge Engine ───── Memory Engine
    ↓                    ↓                    ↓
Execution Engine
    ↓
Validation Engine
    ↓
Review Engine
    ↓
Certification Engine
    ↓
Authorized State / Registry / Knowledge / Memory Handoffs
```

The diagram is conceptual. It does not require a specific process model, API, programming language, database, message bus, host application, or runtime implementation.

### Engine Responsibility Matrix

The Engine Responsibility Matrix provides a consolidated view of each engine's primary responsibility, owning system, principal outputs, and explicit ownership prohibitions. This matrix serves as the authoritative quick-reference for determining which engine owns which architectural concern.

| Engine               | Primary Responsibility                                                      | Primary Owner              | Primary Outputs                                              | Must Not Own                       |
|:---------------------|:----------------------------------------------------------------------------|:---------------------------|:-------------------------------------------------------------|:-----------------------------------|
| Context Engine       | Assemble task-specific traceable context                                    | Context System             | Context Package                                              | Authority, state, or certification |
| Knowledge Engine     | Traverse governed knowledge and graph relationships                         | Knowledge System           | Knowledge Result / Graph Evidence                            | Graph standard definitions         |
| Planning Engine      | Resolve approved planning scope and task structure                          | Planning System            | Planning Resolution / Task Plan                              | Architecture or implementation     |
| Decision Engine      | Apply governed decision rules to runtime choices                            | Governance/Decision System | Decision Record                                              | Human governance override          |
| Execution Engine     | Dispatch approved work to agents, humans, automation, or adapters           | Runtime Execution System   | Execution Output / Evidence                                  | Validation, review, certification  |
| Validation Engine    | Verify outputs against requirements and gates                               | Validation System          | Validation Report                                            | Review or certification            |
| Review Engine        | Perform independent readiness assessment                                    | Review System              | Review Finding / Review Outcome                              | Implementation or certification    |
| Certification Engine | Package and route certification decisions                                   | Certification System       | Certification Handoff / Certification Record when authorized | Self-certification by AI           |
| Memory Engine        | Propose, review, and retrieve non-authoritative reusable memory             | Memory System              | Memory Candidate / Memory Retrieval                          | Authority, state, documentation    |
| Governance Engine    | Enforce authority, ownership, policy, and escalation                        | Governance System          | Governance Decision / Escalation                             | Execution implementation details   |
| Registry Engine      | Register governed engines, artifacts, contracts, capabilities, and adapters | Registry System            | Registry Entry / Resolution                                  | Artifact semantics or standards    |
| Workflow Engine      | Select and coordinate governed lifecycle workflows                          | Workflow System            | Workflow Resolution / Handoff                                | Inventing work or skipping gates   |

### Engine Dependency Graph

The Engine Dependency Graph captures the authoritative parent-child relationships between engines, showing how governance authority flows downward to operational engines. Support relationships are also indicated where cross-cutting engines provide capabilities to multiple consumers.

```text
Governance Engine
    ├── Registry Engine
    │   ├── Workflow Engine
    │   │   ├── Planning Engine
    │   │   │   └── Context Engine
    │   │   ├── Decision Engine
    │   │   ├── Execution Engine
    │   │   ├── Validation Engine
    │   │   ├── Review Engine
    │   │   └── Certification Engine
    │   ├── Knowledge Engine
    │   └── Memory Engine
    └── Escalation to Human Governance

Knowledge Engine ──supports── Context Engine / Planning Engine / Validation Engine / Review Engine
Memory Engine ──supports only after authority re-check── Context Engine / Planning Engine
Decision Engine ──mediates── Workflow, Execution, Validation, Review, Certification handoffs
```

Dependency direction follows authority-to-execution flow. Lower-level engines may request clarification from higher-authority engines, but they must not redefine the higher authority they consume.

### Engine Communication Flow

The Engine Communication Flow describes the canonical request lifecycle from initial runtime request through final memory proposal. Each step represents a governed handoff between engines, ensuring that no execution step is skipped and that all evidence is captured at the appropriate boundary.

```text
Runtime Request
    ↓
Governance Engine: authority and permission check
    ↓
Registry Engine: resolve available engine contracts and adapters
    ↓
Workflow Engine: select governed lifecycle
    ↓
Planning Engine: resolve approved scope
    ↓
Knowledge Engine + Context Engine: assemble traceable working context
    ↓
Decision Engine: confirm permissible next action
    ↓
Execution Engine: dispatch work and collect evidence
    ↓
Validation Engine: verify output and evidence
    ↓
Review Engine: assess readiness independently
    ↓
Certification Engine: prepare human-governed certification handoff
    ↓
Memory Engine: propose reusable memory only after approved evidence exists
```

### Engine Definitions

#### 9.1 Context Engine

**Purpose:** Assemble task-specific, traceable, minimal, and current context from governed sources for runtime consumption.

**Ownership:** Context System.

**Inputs:** Task identifier, governance constraints, planning resolution, knowledge query results, memory retrieval candidates, registry artifact metadata, scope boundary statement.

**Outputs:** Context Package, context gap report, context blocker report.

**Consumed Standards:** A.1 documentation-before-execution principle, M.0 State/Authority/Evidence concepts, M.1 artifact identity and metadata, STD-000 scope and validation expectations, A.3 context assembly lifecycle.

**Produced Artifacts:** Context Package, Context Gap Report.

**Forbidden Responsibilities:** Defining authority, replacing documentation, creating state, owning knowledge, certifying work.

**Relationship to Runtime:** Runtime consumes Context Package before planning and execution. Context does not define scope.

**Relationship to Knowledge Graph:** Consumes graph-backed knowledge for context enrichment. Does not mutate graph.

**Relationship to Registry:** Resolves artifact metadata, scope boundaries, and registered context templates.

**Relationship to AI Agents:** Agents consume context; they do not define source-of-truth context.

**Validation Requirements:** Verify source traceability, scope boundary compliance, freshness, authority consistency, and minimum completeness.

**Failure Modes:** Missing context source, stale context, scope overflow, authority conflict, unregistered artifact reference, knowledge gap without mitigation.

**Handoff Rules:** Handoff Context Package to Planning, Decision, or Execution Engine. Hand context gaps to Knowledge Engine or Governance Engine.

#### 9.2 Knowledge Engine

**Purpose:** Traverse governed knowledge sources and graph relationships to provide evidence-backed knowledge results.

**Ownership:** Knowledge System.

**Inputs:** Graph query, artifact identifiers, relationship types, traversal rules, standards references, Registry locations, validation requests.

**Outputs:** Knowledge Result, graph path evidence, relationship map, unresolved graph issue report.

**Consumed Standards:** STD-001 Knowledge Graph Standard, M.0 entity/relationship/lifecycle concepts, M.1 artifact identity and metadata, STD-000 standards lifecycle rules.

**Produced Artifacts:** Knowledge Query Record, Graph Traversal Evidence, Knowledge Gap Report.

**Forbidden Responsibilities:** Redefining graph semantics, creating canonical facts without governance, promoting artifacts, replacing documentation, certifying graph conclusions.

**Relationship to Runtime:** Provides runtime-consumable knowledge and graph evidence for context, validation, review, and decision support.

**Relationship to Knowledge Graph:** Primary engine consumer of the Knowledge Graph; all traversal must respect STD-001.

**Relationship to Registry:** Uses Registry entries to locate canonical graph projections, artifact references, and engine contracts.

**Relationship to AI Agents:** Agents may request knowledge through runtime mediation but may not treat undocumented inference as graph truth.

**Validation Requirements:** Verify query scope, graph path traceability, standard-compliant node/edge use, and confidence boundaries.

**Failure Modes:** Missing nodes, invalid relationships, ambiguous traversal, graph/document mismatch, stale projection, unsupported query.

**Handoff Rules:** Handoff graph evidence to Context, Planning, Validation, Review, or Governance Engines; escalate unresolved graph contradictions to Governance Engine.

#### 9.3 Planning Engine

**Purpose:** Resolve approved work scope from theAI-DOS planning hierarchy and produce executable planning structures.

**Ownership:** Planning System.

**Inputs:** Project status, phase/stage/capability documents, human instruction, Workflow Engine selection, Context Package, Registry artifact metadata, governance constraints.

**Outputs:** Planning Resolution, Task Plan, scope boundary statement, out-of-scope finding, planning blocker report.

**Consumed Standards:** A.1 planning principles, M.0 lifecycle/state/ownership concepts, M.1 artifact structure, STD-000 artifact validation expectations, A.3 runtime lifecycle.

**Produced Artifacts:** Planning Resolution, Task Plan, Scope Boundary Record.

**Forbidden Responsibilities:** Creating architecture, implementing tasks, bypassing capability boundaries, updating ProjectStatus, certifying completion.

**Relationship to Runtime:** Runtime uses Planning Engine output to determine what execution is allowed.

**Relationship to Knowledge Graph:** Consumes graph evidence to confirm artifact relationships and planning lineage.

**Relationship to Registry:** Resolves registered phases, stages, capabilities, tasks, templates, workflows, and commands.

**Relationship to AI Agents:** Agents receive task plans and must stay within the approved scope.

**Validation Requirements:** Verify hierarchy alignment, scope traceability, immutable capability identifiers, status consistency, and command/workflow fit.

**Failure Modes:** Ambiguous current state, missing capability, inconsistent phase/stage data, scope exceeds authority, unregistered planning artifact.

**Handoff Rules:** Handoff to Decision Engine for action choice, Context Engine for context refresh, Execution Engine for work, or Governance Engine for ambiguity.

#### 9.4 Decision Engine

**Purpose:** Apply documented decision rules to runtime choices such as command selection, lifecycle transition, conflict handling, escalation, and stop/go decisions.

**Ownership:** Decision System under Governance System authority.

**Inputs:** Governance rules, Planning Resolution, Context Package, validation status, review status, conflict reports, workflow state, human instruction.

**Outputs:** Decision Record, transition approval, stop condition, escalation request, conflict disposition.

**Consumed Standards:** A.1 authority principles, M.0 Authority/State/Evidence concepts, STD-000 governance and validation structure, A.3 conflict and lifecycle rules.

**Produced Artifacts:** Decision Record, Escalation Record, Conflict Disposition.

**Forbidden Responsibilities:** Overriding Human Governance, inventing policy, implementing work, validating outputs, certifying artifacts.

**Relationship to Runtime:** Runtime consults Decision Engine before non-trivial transitions and when conflicts arise.

**Relationship to Knowledge Graph:** May request graph evidence to support decisions; does not define graph semantics.

**Relationship to Registry:** Uses registered rules, workflows, commands, and engine contracts to determine permissible actions.

**Relationship to AI Agents:** Agents may propose decisions, but Decision Engine records governed choices and stop conditions.

**Validation Requirements:** Verify that decisions cite authority, respect scope, preserve lifecycle order, and record evidence.

**Failure Modes:** Conflicting rules, missing authority, unsupported transition, unresolved ownership conflict, human override required.

**Handoff Rules:** Handoff approved actions to Workflow or Execution Engine; hand blockers to Governance Engine or Human Governance.

#### 9.5 Execution Engine

**Purpose:** Dispatch approved work to AI agents, humans, automation, swarms, or platform/tool adapters and collect execution evidence.

**Ownership:** Runtime Execution System.

**Inputs:** Task Plan, Context Package, Workflow Resolution, Decision Record, registered tool/adapter contract, ownership assignment, constraints, quality gates.

**Outputs:** Execution Output, Execution Evidence, Handoff Note, Change Summary, blocker report.

**Consumed Standards:** A.1 execution constraints, M.0 ownership/evidence/lifecycle concepts, M.1 artifact expectations, STD-000 validation expectations, A.3 runtime and coordination rules.

**Produced Artifacts:** Execution Record, Evidence Package, Agent Handoff Record, Adapter Invocation Record.

**Forbidden Responsibilities:** Defining scope, skipping validation, reviewing its own output as independent review, self-certifying, altering standards, making tools authoritative.

**Relationship to Runtime:** Runtime delegates actual work through the Execution Engine.

**Relationship to Knowledge Graph:** May consume graph-backed context and may produce evidence for later graph updates only when governance allows.

**Relationship to Registry:** Invokes only registered engine contracts, agent roles, tool adapters, and workflow-compatible capabilities.

**Relationship to AI Agents:** Coordinates agents as executors within explicit ownership and context boundaries.

**Validation Requirements:** Verify that execution stayed within scope, used approved inputs, captured evidence, and did not bypass lifecycle gates.

**Failure Modes:** Tool failure, agent scope drift, ownership collision, missing evidence, adapter mismatch, unauthorized runtime behavior.

**Handoff Rules:** Handoff completed output and evidence to Validation Engine; hand blockers to Decision or Governance Engine.

#### 9.6 Validation Engine

**Purpose:** Verify outputs, artifacts, evidence, and lifecycle compliance against applicable requirements before review.

**Ownership:** Validation System.

**Inputs:** Execution Output, Evidence Package, Task Plan, Context Trace, standards, quality gates, artifact requirements, workflow requirements, Registry metadata.

**Outputs:** Validation Report, gate result, finding list, remediation request, validation blocker.

**Consumed Standards:** STD-000 validation lifecycle and standard structure, M.1 artifact validation expectations, STD-001 graph validation where applicable, A.3 validation pipeline.

**Produced Artifacts:** Validation Report, Gate Evidence, Validation Finding.

**Forbidden Responsibilities:** Implementing fixes as validation, broadening scope, replacing review, certifying completion.

**Relationship to Runtime:** Runtime must route executed work through Validation Engine before review.

**Relationship to Knowledge Graph:** Uses graph evidence to validate traceability and relationship compliance when relevant.

**Relationship to Registry:** Resolves applicable validators, quality gates, artifact schemas, standards, and workflow rules.

**Relationship to AI Agents:** Agents may run checks or provide evidence, but validation results must be recorded objectively.

**Validation Requirements:** The engine validates completeness, conformance, traceability, evidence quality, lifecycle order, and gate outcomes.

**Failure Modes:** Failed gate, missing evidence, non-repeatable check, unavailable environment, standard conflict, undocumented exception.

**Handoff Rules:** Passing or conditionally acceptable validation goes to Review Engine; failures return to Decision Engine for remediation or Governance Engine for blockers.

#### 9.7 Review Engine

**Purpose:** Provide independent readiness assessment of validated outputs before certification handoff.

**Ownership:** Review System.

**Inputs:** Validation Report, Evidence Package, scope statement, authority references, artifact diffs, risk list, unresolved findings.

**Outputs:** Review Outcome, review findings, readiness recommendation, conditions, blocker report.

**Consumed Standards:** A.1 review principles, M.0 Review/Evidence/Certification concepts, STD-000 review expectations, A.3 review pipeline.

**Produced Artifacts:** Review Report, Readiness Finding, Review Blocker.

**Forbidden Responsibilities:** Implementing new work, changing scope, validating as a substitute for validation, certifying completion, overriding governance.

**Relationship to Runtime:** Runtime uses Review Engine after validation and before certification handoff.

**Relationship to Knowledge Graph:** May inspect graph evidence and relationship traces; does not create graph truth.

**Relationship to Registry:** Resolves applicable review checklists, criteria, artifact contracts, and reviewer role definitions.

**Relationship to AI Agents:** AI may assist review, but review must remain independent from execution and cannot be self-certification.

**Validation Requirements:** Verify review independence, scope fit, validation adequacy, unresolved risk handling, and evidence traceability.

**Failure Modes:** Reviewer not independent, validation incomplete, scope uncertainty, unresolved critical finding, evidence not traceable.

**Handoff Rules:** Ready outcomes go to Certification Engine; changes-required outcomes return to Decision Engine; authority blockers go to Governance Engine.

#### 9.8 Certification Engine

**Purpose:** Prepare, route, and record certification handoffs and certification decisions when made by Human Governance or delegated human-owned authority.

**Ownership:** Certification System.

**Inputs:** Review Outcome, Validation Report, Evidence Package, scope statement, governance rules, authority references, risk list.

**Outputs:** Certification Handoff Package, Certification Record when authorized, rejection/deferral record, post-certification state update authorization request.

**Consumed Standards:** A.1 certification principles, M.0 Certification/State/Evidence concepts, M.1 artifact lifecycle expectations, STD-000 certification expectations, A.3 certification handoff.

**Produced Artifacts:** Certification Handoff Package, Certification Decision Record, Certification Deferral Record.

**Forbidden Responsibilities:** AI self-certification, certifying failed validation or failed review, updating ProjectStatus without authorization, changing governance criteria.

**Relationship to Runtime:** Runtime invokes Certification Engine after review; runtime itself does not certify.

**Relationship to Knowledge Graph:** May prepare graph update candidates after certification; does not mutate canonical graph without authorized governance procedure.

**Relationship to Registry:** Resolves certifiable artifact contracts, decision authorities, required evidence, and post-certification registry update procedures.

**Relationship to AI Agents:** Agents may prepare evidence but cannot certify their own outputs.

**Validation Requirements:** Verify validation passed, review passed or conditions are documented, authority is identified, decision is traceable, and state update constraints are explicit.

**Failure Modes:** Missing human authority, failed validation, failed review, unresolved blocker, incomplete evidence, unauthorized certification attempt.

**Handoff Rules:** Handoff to Human Governance for decision; after approved certification, hand authorized updates to Registry, Knowledge, Memory, or Project State procedures as applicable.

#### 9.9 Memory Engine

**Purpose:** Manage non-authoritative reusable memory candidates and retrievals derived from approved, traceable work.

**Ownership:** Memory System.

**Inputs:** Approved work, certification records, review outcomes, validated evidence, context reuse request, authority refresh results.

**Outputs:** Memory Candidate, Memory Record, Memory Retrieval, memory invalidation notice.

**Consumed Standards:** A.1 state-before-context and documentation-before-execution principles, M.0 Memory/State/Evidence concepts, M.1 artifact traceability, A.3 memory strategy.

**Produced Artifacts:** Memory Candidate Record, Memory Review Record, Memory Retrieval Trace.

**Forbidden Responsibilities:** Becoming authority, replacing documentation, overriding current state, storing unapproved claims as reusable truth, certifying work.

**Relationship to Runtime:** Runtime may query memory for context candidates after re-checking against current authority.

**Relationship to Knowledge Graph:** Memory may reference graph-backed artifacts but must not replace graph semantics or canonical relationships.

**Relationship to Registry:** Registry may identify memory stores, memory schemas, and approved retrieval contracts.

**Relationship to AI Agents:** Agents may propose memory candidates, but use requires authority re-validation.

**Validation Requirements:** Verify source approval, traceability, freshness, non-conflict with current authority, and appropriate scope.

**Failure Modes:** Stale memory, undocumented source, conflict with authority, overbroad reuse, unreviewed candidate.

**Handoff Rules:** Handoff candidate memory to Review/Certification as needed; hand retrieved memory to Context Engine as non-authoritative input only.

#### 9.10 Governance Engine

**Purpose:** Enforce authority, ownership, policy, escalation, lifecycle constraints, and human-governed decision boundaries across all engines.

**Ownership:** Governance System under Human Governance.

**Inputs:** Authority chain, governance rules, conflict reports, ownership records, lifecycle state, certification requirements, human instructions.

**Outputs:** Governance Decision, policy constraint, ownership ruling, escalation to Human Governance, stop order.

**Consumed Standards:** AGENTS.md authority model, A.1 Constitution, M.0 Authority/Ownership/Governance concepts, STD-000 governance expectations, A.3 conflict resolution.

**Produced Artifacts:** Governance Decision Record, Ownership Record, Escalation Record.

**Forbidden Responsibilities:** Implementing work, redefining Constitution or standards, bypassing Human Governance, certifying without required review and authority.

**Relationship to Runtime:** Runtime consults Governance Engine at boot, transition points, conflicts, certification handoff, and policy-sensitive actions.

**Relationship to Knowledge Graph:** May request graph evidence for authority relationships; does not redefine graph semantics.

**Relationship to Registry:** Governs registry admission, contract lifecycle state, ownership metadata, and deprecation constraints.

**Relationship to AI Agents:** Constrains agent actions and handles escalations when agents cannot resolve authority, scope, or ownership.

**Validation Requirements:** Verify authority order, ownership uniqueness, lifecycle compliance, decision traceability, and human override handling.

**Failure Modes:** Ambiguous authority, conflicting ownership, governance gap, unauthorized override, unresolved escalation.

**Handoff Rules:** Handoff permitted actions to Decision or Workflow Engine; escalate unresolved governance matters to Human Governance.

#### 9.11 Registry Engine

**Purpose:** Maintain discoverable governed records of engines, contracts, artifacts, workflows, commands, standards, adapters, lifecycle states, and capabilities.

**Ownership:** Registry System.

**Inputs:** Approved registry entries, artifact metadata, engine contracts, adapter declarations, governance decisions, lifecycle changes, certification records.

**Outputs:** Registry Entry, Registry Resolution, compatibility finding, registry conflict report.

**Consumed Standards:** M.0 entity/relationship/state concepts, M.1 artifact metadata model, STD-000 standard structure and lifecycle, STD-001 graph references where applicable.

**Produced Artifacts:** Engine Registry Entry, Contract Registry Entry, Adapter Registry Entry, Artifact Registry Resolution.

**Forbidden Responsibilities:** Defining artifact semantics, creating authority by registration alone, bypassing governance approval, executing workflows.

**Relationship to Runtime:** Runtime depends on Registry Engine to discover valid engines, contracts, adapters, artifacts, and lifecycle states.

**Relationship to Knowledge Graph:** Registry references graph locations and projections; it does not replace the Knowledge Graph.

**Relationship to Registry:** This engine owns registry operations and consistency.

**Relationship to AI Agents:** Agents query registry through runtime or tool adapters to avoid using unregistered capabilities.

**Validation Requirements:** Verify unique identity, ownership, lifecycle status, compatibility, authority reference, and deprecation state.

**Failure Modes:** Duplicate identity, stale entry, conflicting lifecycle state, unapproved adapter, incompatible contract version.

**Handoff Rules:** Handoff resolved entries to all engines; hand registry conflicts to Governance Engine.

#### 9.12 Workflow Engine

**Purpose:** Select, sequence, and enforce governed workflows and lifecycle transitions for a given task or artifact.

**Ownership:** Workflow System.

**Inputs:** Project state, Task Plan, command requirements, workflow definitions, governance constraints, registry entries, validation/review/certification state.

**Outputs:** Workflow Resolution, lifecycle transition record, handoff instruction, workflow blocker.

**Consumed Standards:** A.1 lifecycle principles, M.0 Lifecycle/State concepts, M.1 artifact lifecycle fields, STD-000 lifecycle expectations, A.3 runtime lifecycle.

**Produced Artifacts:** Workflow Resolution, Lifecycle Transition Record, Handoff Instruction.

**Forbidden Responsibilities:** Inventing work, skipping validation/review/certification, changing planning hierarchy, implementing task output.

**Relationship to Runtime:** Runtime uses Workflow Engine to keep execution in the correct order.

**Relationship to Knowledge Graph:** May request graph-backed lifecycle and relationship evidence for workflow decisions.

**Relationship to Registry:** Resolves registered workflows, commands, templates, quality gates, and lifecycle-compatible engines.

**Relationship to AI Agents:** Agents receive workflow state and handoff instructions; they do not own workflow sequencing.

**Validation Requirements:** Verify lifecycle order, gate sequence, scope containment, registry compatibility, and handoff completeness.

**Failure Modes:** Missing workflow definition, gate skip attempt, incompatible lifecycle state, registry mismatch, scope boundary violation.

**Handoff Rules:** Handoff workflow resolution and handoff instructions to the applicable engine; hand blockers to Governance Engine.

### Engine Registry Model

The Engine Registry Model defines the discoverable governed index that records engines, contracts, adapters, artifacts, lifecycle states, and compatibility metadata. The registry serves as the single source of truth for determining which engines, contracts, and adapters are available for governed execution at any given time.

The Engine Registry is the discoverable governed index of engines, contracts, adapters, artifacts, lifecycle states, and compatibility metadata.

Registry entries should include:

- stable ID;
- name;
- type;
- owner;
- authority references;
- lifecycle state;
- version or revision when applicable;
- supported contracts;
- inputs and outputs summary;
- validation requirements;
- dependencies;
- compatibility constraints;
- deprecation or replacement information;
- traceability to certification or approval records when applicable.

The Registry Engine resolves whether a runtime, agent, or adapter may invoke a contract. Registration alone does not certify architecture or approve execution. Registry state must follow governance and lifecycle rules.

### Governance Constraints

Governance constraints define the inviolable authority boundaries that protect theAI-DOS framework from architectural drift. These constraints ensure that no engine, tool, adapter, or agent can elevate its authority beyond what Human Governance and the Constitution permit.

- Human Governance remains highest authority.
- `AGENTS.md` remains bootstrap authority during v3 transition.
- A.1, Blueprint, M.0, M.1, STD-000, STD-001, and A.3 are consumed as governing inputs according to the requested authority order.
- This RFC does not supersede the Constitution, Meta Models, Standards, Knowledge Graph Standard, or Runtime Architecture RFC.
- Engines may enforce authority but may not invent it.
- Registry entries may discover contracts but may not approve architecture by existence alone.
- Tool adapters may extend integration but may not redefine AI-DOS.
- RC2 operational procedures remain valid until explicitly replaced through approved v3 operational procedures.
- ProjectStatus must not be updated by this RFC task.

---

## Design Decisions

### D-1: Twelve-Engine Separation of Concerns

**Decision:** TheAI-DOS execution backbone shall be decomposed into twelve discrete, contract-bound engines rather than a monolithic runtime or a smaller set of multifunction components.

**Context:** The v3 transition requires platform independence and verifiable governance. A monolithic execution model cannot provide the granularity needed for independent validation, review, and certification of individual execution concerns.

**Options considered:**
1. Monolithic runtime with internal modules — rejected because it couples concerns and prevents independent governance of each capability.
2. Six-engine model (combining related concerns) — rejected because it creates ambiguous ownership boundaries between combined engines.
3. Twelve-engine model (chosen) — provides maximum separation, clear ownership, and independent governance for each concern.

**Rationale:** Twelve engines allow each concern to have a single accountable owner, a governed contract, independent validation, and explicit handoff rules. This granularity supports enterprise governance, multi-agent coordination, and regulatory compliance requirements.

### D-2: Contract-Bound Engine Model

**Decision:** Every engine shall be defined by a governed contract specifying inputs, outputs, preconditions, postconditions, validation rules, failure modes, and handoff targets. Execution semantics reside in governed contracts, not in tool-specific behavior.

**Context:** Without explicit contracts, tools, agents, and runtimes risk overstepping their authority. Contracts provide the verifiable boundary that prevents architectural drift.

**Options considered:**
1. Implicit behavioral contracts (convention-based) — rejected because conventions cannot be validated or enforced programmatically.
2. Programmatic API contracts — rejected because this is documentation-only architecture; APIs are implementation concerns.
3. Governed conceptual contracts (chosen) — provides enforceable boundaries without requiring implementation-level specification.

**Rationale:** Conceptual contracts capture the architectural intent without committing to a specific implementation technology. They can be validated, reviewed, and certified at the architecture level.

### D-3: Prohibition of AI Self-Certification

**Decision:** AI agents, automation, swarms, runtimes, and tool adapters must not self-certify. Certification requires human governance or delegated human-owned authority.

**Context:** Self-certification creates a conflict of interest between the executor and the certifier. In enterprise and regulatory contexts, this conflict is unacceptable.

**Options considered:**
1. AI self-certification with human spot-check — rejected because spot-checks do not provide systematic independence.
2. Peer AI certification — rejected because AI-to-AI review does not satisfy independence requirements.
3. Human-governed certification only (chosen) — ensures independent acceptance decisions.

**Rationale:** The non-negotiable prohibition of AI self-certification protects the integrity of the certification process and ensures human accountability for all acceptance decisions.

### D-4: Non-Authoritative Memory

**Decision:** Memory Engine output is non-authoritative. Memory candidates require authority re-validation before use. Memory does not replace documentation, state, or canonical records.

**Context:** If memory were authoritative, stale or incorrect memory could corrupt execution without detection. Non-authoritative memory ensures that current authority always takes precedence.

**Options considered:**
1. Authoritative memory with expiration — rejected because expiration does not guarantee accuracy; authority may change between memory creation and use.
2. Non-authoritative memory with re-validation (chosen) — ensures memory is always checked against current authority before use.

**Rationale:** Non-authoritative memory provides reuse benefits while preserving the authority chain. Memory candidates derived from approved, traceable work can accelerate context assembly without risking authority corruption.

### D-5: Registry as Discovery, Not Approval

**Decision:** The Engine Registry discovers contracts, adapters, and artifacts. Registration alone does not certify architecture or approve execution. Registry state must follow governance and lifecycle rules.

**Context:** If registration implied approval, any registered engine or adapter would gain de facto authority without governance review.

**Options considered:**
1. Registration implies approval — rejected because it bypasses governance review.
2. Registration as discovery with governance-gated activation (chosen) — separates discovery from approval.

**Rationale:** Discovery and approval are distinct governance concerns. The Registry serves discovery; governance serves approval. This separation prevents authority creep through registration.

### D-6: Tool Adapters as Translation Layers

**Decision:** Tool adapters translate platform-specific invocations into framework-compliant engine contract requests. Adapters may not redefine engine responsibilities, bypass governance engines, or make platform-specific behavior canonical.

**Context:** Without an adapter model, tools would either be tightly coupled to the framework or operate outside governance.

**Options considered:**
1. Direct tool integration — rejected because it creates platform coupling.
2. Adapter model with governance constraints (chosen) — enables platform integration while preserving framework authority.

**Rationale:** The adapter model provides a governed translation boundary. Tools gain framework access through contracts, but the framework architecture remains platform-independent.

---

## Ownership

| Role | Party | Responsibility |
|:---|:---|:---|
| **Owner** | Framework Governance | Accountable for the Engine Architecture RFC architectural integrity, metadata accuracy, lifecycle progression, and governance compliance. |
| **Maintainers** | Framework Architecture Team | Supports the Owner with ongoing maintenance, edits, validation, and coordination with sub-RFCs. |
| **Review Authority** | Enterprise Documentation Standards Board | Conducts structured review of this RFC; produces review findings and readiness recommendations. |
| **Approval Authority** | Human Governance / Framework Governance | Approves this RFC for advancement past Review. |

---

## Responsibilities

The Owner (Framework Governance) is responsible for:

1. Engine Architecture integrity and consistency across all twelve engine definitions.
2. Coordination with A.3 Runtime Architecture to ensure engine-runtime alignment.
3. Parent specification authority for A.4.1 through A.4.7 sub-RFCs, ensuring each sub-RFC specializes within the boundaries defined by this RFC.
4. Governance review and approval progression through the defined lifecycle.
5. Metadata and traceability accuracy for this RFC and its produced artifacts.
6. Ensuring no engine redefines its consumed authorities or oversteps its declared scope.

---

## Non Responsibilities

The Owner (Framework Governance) is not responsible for:

1. Engine implementation, source code, deployment, or operational behavior.
2. Runtime behavior, execution semantics, or performance characteristics.
3. Tool, IDE, CLI, or adapter implementation or integration.
4. Knowledge Graph structure, content, or STD-001 compliance enforcement.
5. Certification execution, approval, or promotion of this or any other RFC.
6. ProjectStatus updates, roadmap changes, or phase activation.
7. Constitutional (A.1), Meta Model (M.0, M.1), Standard (STD-000, STD-001, STD-002, STD-003, STD-010), or Knowledge Graph redefinition.
8. Platform adapter, multi-agent runtime, swarm runtime, or enterprise governance implementation.

---

## Interfaces

### Agent-to-Engine Interaction Model

AI agents interact withAI-DOS through runtime-mediated engine contracts. This model ensures that agents remain executors within governed boundaries and cannot subvert the engine authority chain by direct action.

```text
AI Agent Request / Human Delegation
    | Runtime Mediation
    | Engine Contract Invocation
    | Bounded Engine Response
    | Agent Execution or Report
    | Evidence Capture
```

Rules:

1. Agents consume context; they do not define source-of-truth context.
2. Agents may propose plans; Planning Engine resolves approved scope.
3. Agents may make recommendations; Decision Engine records governed decisions.
4. Agents may execute; Execution Engine owns dispatch and evidence capture.
5. Agents may run checks; Validation Engine owns validation records.
6. Agents may assist review only when independent from execution; Review Engine owns review output.
7. Agents may prepare certification packages; Certification Engine routes human-governed decisions.
8. Agents may propose memory; Memory Engine controls review and reuse boundaries.

### Tool Adapter Model

The Tool Adapter Model defines how external tools, IDE assistants, CLIs, model runtimes, automation systems, and future AI-DOS-native runtimes connect to the governed engine contracts. Tool adapters serve as translation layers that map platform-specific invocations into framework-compliant engine contract requests.

A tool adapter may: translate a tool invocation into an engine contract request; expose tool capabilities registered by the Registry Engine; capture tool output as execution evidence; map tool-specific failures intoAI-DOS failure modes; enforce context and workflow boundaries inside the tool environment.

A tool adapter must not: redefine engine responsibilities; bypass Governance, Workflow, Validation, Review, or Certification Engines; make a tool-specific workflow canonical; treat tool memory asAI-DOS memory; mutate project state without governed authorization; make platform-specific behavior part of framework architecture.

Adapter compatibility is determined by registered contracts, lifecycle state, required evidence, and governance approval.

### Engine Contract Model

The Engine Contract Model defines the governed interface specification for invoking any engine responsibility. An Engine Contract is the conceptual (not necessarily programmatic) agreement between an engine invoker and the engine itself, capturing all preconditions, postconditions, inputs, outputs, and failure behaviors.

Minimum contract fields:

| Field | Requirement |
|:---|:---|
| Contract ID | Stable identifier for the engine contract. |
| Engine ID | Engine that owns the responsibility. |
| Purpose | Reason the contract exists. |
| Authority References | Governing documents and standards. |
| Inputs | Required and optional inputs. |
| Outputs | Required outputs and evidence. |
| Preconditions | Lifecycle, scope, ownership, and registry requirements. |
| Postconditions | Required state after successful invocation. |
| Validation Rules | Checks required for contract compliance. |
| Failure Modes | Known failures and reporting obligations. |
| Handoff Targets | Engines or governance paths that may receive output. |
| Lifecycle State | Draft, accepted, deprecated, retired, or other governed state. |
| Ownership | Single accountable owner. |
| Compatibility | Supported runtime, adapter, artifact, or workflow compatibility constraints. |

Contract invariants: Contracts consume standards; they do not define standards. Contracts must be registered before use. Contracts must preserve evidence and traceability. Contracts must not authorize self-certification. Contracts must declare failure behavior.

---

## Lifecycle

The Runtime-to-Engine Lifecycle defines how a runtime request flows through the governed engine chain from initial context assembly to final completion or memory proposal.

```text
Runtime Request
    | Governance Engine: authority and permission check
    | Registry Engine: resolve available engine contracts and adapters
    | Workflow Engine: select governed lifecycle
    | Planning Engine: resolve approved scope
    | Context Engine assembles context with Knowledge Engine support
    | Decision Engine confirms next permitted action
    | Execution Engine dispatches work
    | Validation Engine verifies evidence and outputs
    | Review Engine assesses readiness
    | Certification Engine prepares human-governed handoff
    | Memory Engine proposes reusable memory after approval boundaries are met
    | Runtime Completion / Context Release
```

Runtime is an orchestrating environment. Engines own bounded responsibilities. The runtime must not bypass an engine simply because a tool can perform the action directly.

---

## Validation

### Engine Validation Model

The Engine Validation Model defines the multi-dimensional verification framework that ensures every engine invocation and output conforms to its governed contract.

Validation dimensions:

1. **Authority validation:** governing documents are identified and not contradicted.
2. **Scope validation:** requested action is within approved phase/stage/capability/task boundaries.
3. **Contract validation:** required inputs, outputs, preconditions, postconditions, and handoffs are satisfied.
4. **Lifecycle validation:** execution order preserves planning, context, execution, validation, review, and certification sequence.
5. **Evidence validation:** outputs are traceable and adequate for review.
6. **Registry validation:** engine, contract, adapter, artifact, and workflow entries are valid and compatible.
7. **Knowledge validation:** graph traversal and knowledge claims comply with STD-001 when used.
8. **Memory validation:** memory is non-authoritative, approved or reviewable, traceable, and current.
9. **Adapter validation:** tool-specific behavior does not redefine framework behavior.
10. **Failure validation:** failures are reported honestly and routed to the correct engine or governance path.

### Certification Rules

> **Governing Principle:** Certification is a governed acceptance decision, not an execution convenience.

1. Certification is a governed acceptance decision, not an execution convenience.
2. Certification requires completed validation and independent review unless Human Governance explicitly defines a different governed path.
3. AI agents, automation, swarms, runtimes, and tool adapters must not self-certify.
4. The Certification Engine prepares and routes certification handoffs; it does not replace Human Governance.
5. Failed validation cannot proceed to certification as successful.
6. Failed review cannot proceed to certification as successful.
7. Conditional certification must record conditions, evidence, authority, and follow-up requirements.
8. Certification may authorize registry, knowledge, memory, or project state updates only when the relevant governance procedure permits them.
9. This RFC is not certified by its creation and remains Draft / Non-canonical until approved.

---

## Risks

| # | Risk | Severity | Mitigation |
|:---|:---|:---|:---|
| 1 | RC2 operational continuity during v3 transition | Medium | RC2 procedures remain valid until explicitly replaced through approved v3 operational procedures. |
| 2 | Engine boundary ambiguity in sub-RFCs | High | A.4.1-A.4.7 sub-RFCs refine individual engine concerns under this parent authority. |
| 3 | Tool adapter governance gap | Medium | Tool Adapter Model constrains adapters; Registry validates registration; Governance enforces boundaries. |
| 4 | Memory Engine authority confusion | Medium | Memory is explicitly non-authoritative; every use requires authority re-validation. |
| 5 | Registry approval by registration | Medium | Registration is discovery, not approval. Governance gates remain. |

---

## Open Questions

1. Should the twelve-engine model be the minimum or can specialized engines be added without a new RFC?
2. How should engine-to-engine communication be governed when engines span trust boundaries?
3. What is the minimum viable evidence package for Certification Engine handoff?
4. How should engine failure recovery be modeled?
5. Which engine outputs must become first-class Knowledge Graph nodes?
6. What minimum evidence package is required for each engine invocation?
7. How should independent review be enforced for AI-assisted review workflows?
8. What human delegation model is acceptable for certification decisions?
9. How should tool adapter compatibility be validated across environments?
10. What RC2 documents should be deprecated only after v3 procedures are approved?
11. Should memory review be part of Review Engine, Certification Engine, or a future Memory Standard?
12. How should engine failure modes be represented in validation reports?

---

## Completion Criteria

- [x] Status is marked RFC / Draft / Non-canonical until approved.
- [x] Documentation-only scope is explicit.
- [x] No code implementation is introduced.
- [x] Existing Constitution, Meta Models, Standards, and Knowledge Graph are not redefined.
- [x] All 12 required engines are defined.
- [x] Each engine includes purpose, ownership, inputs, outputs, consumed standards, produced artifacts, forbidden responsibilities, runtime relationship, Knowledge Graph relationship, Registry relationship, AI agent relationship, validation requirements, failure modes, and handoff rules.
- [x] Engine Stack Diagram is included.
- [x] Engine Responsibility Matrix is included.
- [x] Engine Dependency Graph is included.
- [x] Engine Communication Flow is included.
- [x] Runtime-to-Engine Lifecycle is included.
- [x] Agent-to-Engine Interaction Model is included.
- [x] Tool Adapter Model is included.
- [x] Engine Contract Model is included.
- [x] Engine Registry Model is included.
- [x] Engine Validation Model is included.
- [x] Certification Rules are included.
- [x] Governance Constraints are included.
- [x] Out of Scope is included.
- [x] Migration Notes from RC2 are included.
- [x] Open Questions are included.
- [x] ProjectStatus is not updated.
- [x] This RFC is not certified.

---

## Stakeholder Impact Matrix

| Stakeholder | Role | Impact Level | Primary Concern |
|:---|:---|:---|:---|
| Framework Architecture Team | Document Owner / Maintainer | **High** | Engine boundary completeness and contract model consistency across all twelve engines and seven sub-RFCs |
| Enterprise Documentation Standards Board | Review Authority | **High** | STD-010 metadata compliance, structural consistency, and governance traceability |
| Human Governance / Framework Governance | Approval Authority | **High** | Authority chain integrity, AI self-certification prohibition, and governance constraint enforcement |
| Runtime Engineering Team | Downstream Consumer | **High** | Runtime-to-Engine lifecycle mapping, engine invocation sequencing, and backward compatibility |
| AI Agent Development Team | Execution Consumer | **Medium** | Agent-to-Engine interaction model constraints and bounded execution rules |
| Knowledge Graph Stewards | Cross-cutting Support | **Medium** | STD-001 compliance for engine graph interactions and traversal evidence requirements |
| Tool / IDE / CLI Integration Teams | Adapter Implementers | **Medium** | Tool Adapter Model constraints and Registry Engine contract registration |
| Quality Assurance / Validation Teams | Validation Consumers | **Medium** | Validation Engine gate definitions and failure mode reporting standards |
| Certification / Compliance Officers | Certification Stakeholders | **Medium** | Certification Rules enforcement and human governance handoff procedures |
| RC2 Operations Team | Migration Stakeholders | **Low** | Incremental migration path and RC2 procedure deprecation timeline |

---

## Migration Notes from RC2

The v3 Engine Architecture is designed to coexist with RC2 operational procedures until approved v3 engine procedures are explicitly activated. RC2 procedures remain valid for ongoing operations. The Engine Architecture does not deactivate, replace, or deprecate RC2 procedures by its existence.

Migration from RC2 to v3 engine procedures shall occur through a governed migration process, not through this RFC. When v3 engine procedures are approved, a separate migration document shall define the specific transition steps, timeline, and validation criteria.

---

## Glossary

| Term | Definition |
|:---|:---|
| **Engine** | A governed architectural component that owns a bounded execution responsibility within theAI-DOS v3 framework, defined by its contract, inputs, outputs, and forbidden responsibilities. |
| **Engine Contract** | The governed interface description specifying how an engine is invoked, including its preconditions, postconditions, inputs, outputs, validation rules, failure modes, and handoff targets. |
| **Engine Registry** | The discoverable governed index of engines, contracts, adapters, artifacts, lifecycle states, and compatibility metadata maintained by the Registry Engine. |
| **Governance Engine** | The highest-authority engine that enforces authority chains, ownership policies, escalation rules, and human-governed decision boundaries across all other engines. |
| **Tool Adapter** | A translation layer that connects external tools, IDEs, CLIs, or automation systems to engine contracts without redefining framework behavior. |
| **Certification Handoff** | The governed process by which the Certification Engine packages validated and reviewed outputs for human governance acceptance decisions. |
| **Context Package** | A minimal, current, authoritative, and traceable assembly of information produced by the Context Engine for a specific task, lifecycle state, or agent. |
| **Memory Candidate** | A non-authoritative reusable memory record proposed by the Memory Engine, derived from approved and traceable work, requiring authority re-validation before use. |
| **Knowledge Graph** | The governed knowledge representation conforming to STD-001 that stores nodes, relationships, constraints, and traversal evidence consumed by the Knowledge Engine and other engines. |
| **Human Governance** | The ultimate authority in theAI-DOS framework, residing above all engines, agents, tools, and runtimes, with the power to override, escalate, and certify. |
| **Lifecycle Transition** | A governed state change managed by the Workflow Engine that moves an artifact, engine, or contract from one lifecycle state to another according to registered rules. |
| **Evidence Package** | A collection of traceable execution artifacts produced by the Execution Engine and consumed by the Validation, Review, and Certification Engines. |

---

## Appendices

### Cross-Reference Index

#### A.1 Upstream Dependencies (Consumed)

| Reference | Document | Relationship |
|:---|:---|:---|
| A.1 | `docs/AI/Architecture/Constitution/A.1-Constitution.md` | Normative authority for governance principles, planning, execution, review, certification, and lifecycle |
| M.0 | `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Normative reference for State, Authority, Ownership, Evidence, Lifecycle, and Memory concepts |
| M.1 | `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Normative reference for artifact identity, metadata, validation expectations, and traceability |
| STD-000 | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Normative reference for standard structure, validation lifecycle, governance expectations, and certification |
| STD-001 | `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` | Normative reference for Knowledge Graph traversal, graph validation, and node/edge semantics |
| STD-002 | Referenced in Consumes field | Standard referenced for engine RFC input consistency |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Normative reference for canonical terminology |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Normative reference for document metadata compliance |
| A.3 | `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md` | Direct upstream RFC defining runtime architecture that this Engine Architecture extends |
| AGENTS.md | `AGENTS.md` | Bootstrap authority during v3 transition; governance authority model |
| FrameworkGovernance.md | `docs/AI/FrameworkGovernance.md` | Normative authority for governance procedures |

#### A.2 Downstream Specifications (Produced / Blocked)

| Reference | Document | Relationship |
|:---|:---|:---|
| A.4.1 | `docs/AI/Architecture/A.4.1-Engine-Kernel-RFC.md` | Sub-RFC blocked by this RFC; refines engine kernel concerns |
| A.4.2 | `docs/AI/Architecture/A.4.2-Engine-Contract-RFC.md` | Sub-RFC blocked by this RFC; refines engine contract model |
| A.4.3 | `docs/AI/Architecture/A.4.3-Engine-Registry-RFC.md` | Sub-RFC blocked by this RFC; refines engine registry model |
| A.4.4 | `docs/AI/Architecture/A.4.4-Engine-Lifecycle-RFC.md` | Sub-RFC blocked by this RFC; refines engine lifecycle states |
| A.4.5 | `docs/AI/Architecture/A.4.5-Engine-Communication-RFC.md` | Sub-RFC blocked by this RFC; refines engine communication protocols |
| A.4.6 | `docs/AI/Architecture/A.4.6-Engine-State-RFC.md` | Sub-RFC blocked by this RFC; refines engine state management |
| A.4.7 | `docs/AI/Architecture/A.4.7-Engine-Capability-RFC.md` | Sub-RFC blocked by this RFC; refines engine capability model |

#### A.3 Related Specifications (Non-authoritative)

| Reference | Document | Relationship |
|:---|:---|:---|
| A.3/A.4 engine RFC family | A.3, A.4.1-A.4.7 | Related specifications in the engine RFC family; understood for context but not authoritative over this RFC |

---

## Version History

| Version | Status | Notes |
|:---|:---|:---|
| `0.1.0-draft` | Draft | Initial draft: complete engine architecture with all 12 engines defined, responsibility matrix, dependency graph, communication flow, contract model, registry model, validation model, certification rules, governance constraints, RC2 migration notes, and open questions. |
| `0.1.1-draft` | Draft | TPL-001 editorial refactoring: restructured to comply with TPL-001 RFC Template Standard mandatory sections. Added Out of Scope, Normative Authority, Normative References, Dependencies, Design Decisions, Ownership, Responsibilities, Non Responsibilities, Risks as standalone sections. Consolidated Architecture, Interfaces, Validation. Renamed Completion Checklist to Completion Criteria, Change Log to Version History. Added Promotion Requirements, expanded Normative References, Normative Authority, Traceability ID, Dependencies in metadata. Removed Table of Contents. No architectural content changed. |


## Family Normalization Notes

This RFC participates in the Runtime RFC family normalization program. Its metadata, authority wording, lifecycle wording, certification wording, validation expectations, AI consumption boundaries, and relationship declarations are aligned to STD-010, STD-003, TPL-000, TPL-001, and the Runtime README navigation model. This normalization is editorial and governance-structural only; it does not redesign Runtime Architecture, Engine Platform Architecture, Engine Foundation responsibilities, or any Engine Specialization behavior.

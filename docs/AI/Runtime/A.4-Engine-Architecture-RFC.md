# A.4 — Engine Architecture RFC

Status: RFC / Draft / Non-canonical until approved
Document Type: Architecture RFC
Scope: Forge AI v3 Engine-first execution architecture
Authority: Human Governance → `AGENTS.md` → `docs/AI/Architecture/A.1-Constitution.md` → Forge AI Blueprint RFC → `docs/AI/Meta/M.0-Framework-Meta-Model.md` → `docs/AI/Meta/M.1-Artifact-Meta-Model.md` → `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` → `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` → `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` → this RFC

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-004` |
| Title | A.4 — Engine Architecture RFC |
| Version | 0.1.0-draft |
| Status | RFC / Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Engine Architecture |
| Document Type | Architecture RFC |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-07 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-A-004 |
| Scope | Engine Architecture RFC documentation-only architecture |
| Out of Scope | Implementation, runtime behavior changes, certification, and ProjectStatus updates |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` |
| Dependencies | Governance authority, artifact identity, lifecycle governance, traceability model, and applicable upstream v3 architecture documents |
| Consumes | A.1; M.0; M.1; STD-000; STD-001; STD-002; related runtime and engine RFC inputs |
| Produces | Engine Architecture RFC architecture model and downstream RFC inputs |
| Related Specifications | A.3/A.4 engine RFC family; STD-000; STD-001; STD-002 |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, approval, traceability validation, metadata validation, and explicit promotion |
| Certification Status | Not certified |

---

## 1. Purpose

This RFC defines the Forge AI v3 Engine Architecture as the central execution architecture of the AI Development Operating System.

The Engine Architecture separates governed execution responsibilities from tools, agents, IDE assistants, CLI runners, automation hosts, and future Forge-native runtimes. Engines define capability boundaries through governed contracts. Tools and agents consume those contracts; they do not own architecture, workflow, standards, certification, or project state.

This is documentation-only architecture work. It does not implement code, modify runtime behavior, redefine the Constitution, redefine the Meta Model, redefine framework standards, or redefine the Knowledge Graph.

---

## 2. Scope

This RFC defines:

1. the required Forge AI engines;
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

## 3. Core Principle

```text
Agents do not own architecture.
Tools do not own workflow.
Runtime does not own standards.
Engines execute governed contracts.
```

The Engine Architecture exists to make Forge AI platform-independent by placing execution boundaries in governed engine contracts rather than in tool behavior.

---

## 4. Engine Stack Diagram

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

---

## 5. Engine Responsibility Matrix

| Engine | Primary Responsibility | Primary Owner | Primary Outputs | Must Not Own |
| --- | --- | --- | --- | --- |
| Context Engine | Assemble task-specific traceable context | Context System | Context Package | Authority, state, or certification |
| Knowledge Engine | Traverse governed knowledge and graph relationships | Knowledge System | Knowledge Result / Graph Evidence | Graph standard definitions |
| Planning Engine | Resolve approved planning scope and task structure | Planning System | Planning Resolution / Task Plan | Architecture or implementation |
| Decision Engine | Apply governed decision rules to runtime choices | Governance/Decision System | Decision Record | Human governance override |
| Execution Engine | Dispatch approved work to agents, humans, automation, or adapters | Runtime Execution System | Execution Output / Evidence | Validation, review, certification |
| Validation Engine | Verify outputs against requirements and gates | Validation System | Validation Report | Review or certification |
| Review Engine | Perform independent readiness assessment | Review System | Review Finding / Review Outcome | Implementation or certification |
| Certification Engine | Package and route certification decisions | Certification System | Certification Handoff / Certification Record when authorized | Self-certification by AI |
| Memory Engine | Propose, review, and retrieve non-authoritative reusable memory | Memory System | Memory Candidate / Memory Retrieval | Authority, state, documentation |
| Governance Engine | Enforce authority, ownership, policy, and escalation | Governance System | Governance Decision / Escalation | Execution implementation details |
| Registry Engine | Register governed engines, artifacts, contracts, capabilities, and adapters | Registry System | Registry Entry / Resolution | Artifact semantics or standards |
| Workflow Engine | Select and coordinate governed lifecycle workflows | Workflow System | Workflow Resolution / Handoff | Inventing work or skipping gates |

---

## 6. Engine Dependency Graph

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

---

## 7. Engine Communication Flow

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

Communication should occur through artifacts, records, reports, handoff packages, and registry entries. Conversational context may assist execution but must not become persistent authority.

---

## 8. Engine Definitions

### 8.1 Context Engine

**Purpose:** Assemble minimal, current, authoritative, traceable context packages for a specific task, lifecycle state, agent, or adapter.

**Ownership:** Context System.

**Inputs:** Human instruction, project state, authority chain, current phase/stage/capability/task, relevant workflows, command documents, templates, standards, Knowledge Engine results, Registry resolutions, validated memory candidates.

**Outputs:** Context Package, context source list, context traceability map, context completeness finding, context blocker report when required information is missing.

**Consumed Standards:** A.1 Constitution, M.0 concepts for State/Authority/Ownership/Evidence, M.1 artifact requirements, STD-000 artifact and validation expectations, STD-001 graph traversal evidence, A.3 runtime context rules.

**Produced Artifacts:** Context Package, Context Trace, Context Gap Report.

**Forbidden Responsibilities:** Defining authority, changing project state, inventing missing scope, treating memory as authority, certifying context, implementing work.

**Relationship to Runtime:** Runtime invokes the Context Engine before execution and whenever lifecycle transitions require refreshed context.

**Relationship to Knowledge Graph:** Consumes Knowledge Engine traversal results; does not define node types, edge types, or graph semantics.

**Relationship to Registry:** Requests registered artifact, workflow, command, engine, and adapter metadata needed for context assembly.

**Relationship to AI Agents:** Supplies agents with bounded context packages and source traces; agents must not silently expand scope beyond the package.

**Validation Requirements:** Verify source authority, freshness, relevance, traceability, scope fit, and absence of unresolved contradictions.

**Failure Modes:** Missing authority, stale project state, contradictory sources, insufficient scope evidence, unregistered artifact references, memory/documentation conflict.

**Handoff Rules:** Handoff to Planning Engine for scope confirmation, Execution Engine for task work, or Governance Engine when authority or scope is unclear.

### 8.2 Knowledge Engine

**Purpose:** Retrieve and reason over governed knowledge representations, especially Knowledge Graph nodes, relationships, constraints, and traversal evidence.

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

### 8.3 Planning Engine

**Purpose:** Resolve approved work scope from the Forge AI planning hierarchy and produce executable planning structures.

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

### 8.4 Decision Engine

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

### 8.5 Execution Engine

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

### 8.6 Validation Engine

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

### 8.7 Review Engine

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

### 8.8 Certification Engine

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

### 8.9 Memory Engine

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

### 8.10 Governance Engine

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

### 8.11 Registry Engine

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

### 8.12 Workflow Engine

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

**Validation Requirements:** Verify transition legality, prerequisite satisfaction, required handoff artifacts, and gate ordering.

**Failure Modes:** Missing workflow, illegal transition, incomplete prerequisite, lifecycle conflict, command mismatch.

**Handoff Rules:** Handoff next actions to Planning, Context, Execution, Validation, Review, or Certification Engines according to lifecycle state.

---

## 9. Runtime-to-Engine Lifecycle

```text
Runtime Boot
    ↓
Governance Engine validates authority chain
    ↓
Registry Engine resolves available contracts and lifecycle states
    ↓
Workflow Engine selects applicable lifecycle
    ↓
Planning Engine confirms scope
    ↓
Context Engine assembles context with Knowledge Engine support
    ↓
Decision Engine confirms next permitted action
    ↓
Execution Engine dispatches work
    ↓
Validation Engine verifies evidence and outputs
    ↓
Review Engine assesses readiness
    ↓
Certification Engine prepares human-governed handoff
    ↓
Memory Engine proposes reusable memory after approval boundaries are met
    ↓
Runtime Completion / Context Release
```

Runtime is an orchestrating environment. Engines own bounded responsibilities. The runtime must not bypass an engine simply because a tool can perform the action directly.

---

## 10. Agent-to-Engine Interaction Model

AI agents interact with Forge AI through runtime-mediated engine contracts.

```text
AI Agent Request / Human Delegation
    ↓
Runtime Mediation
    ↓
Engine Contract Invocation
    ↓
Bounded Engine Response
    ↓
Agent Execution or Report
    ↓
Evidence Capture
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

---

## 11. Tool Adapter Model

Tool adapters connect external tools, IDE assistants, CLIs, model runtimes, automation systems, and future Forge-native runtimes to engine contracts.

A tool adapter may:

- translate a tool invocation into an engine contract request;
- expose tool capabilities registered by the Registry Engine;
- capture tool output as execution evidence;
- map tool-specific failures into Forge AI failure modes;
- enforce context and workflow boundaries inside the tool environment.

A tool adapter must not:

- redefine engine responsibilities;
- bypass Governance, Workflow, Validation, Review, or Certification Engines;
- make a tool-specific workflow canonical;
- treat tool memory as Forge AI memory;
- mutate project state without governed authorization;
- make platform-specific behavior part of framework architecture.

Adapter compatibility is determined by registered contracts, lifecycle state, required evidence, and governance approval.

---

## 12. Engine Contract Model

An Engine Contract is the governed interface description for invoking an engine responsibility. It is conceptual and does not require a programming API.

Minimum contract fields:

| Field | Requirement |
| --- | --- |
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
| Lifecycle State | Draft, accepted, deprecated, retired, or other governed state when standardized. |
| Ownership | Single accountable owner. |
| Compatibility | Supported runtime, adapter, artifact, or workflow compatibility constraints. |

Contract invariants:

1. Contracts consume standards; they do not define standards.
2. Contracts must be registered before use in governed execution.
3. Contracts must preserve evidence and traceability.
4. Contracts must not authorize self-certification.
5. Contracts must declare failure behavior.

---

## 13. Engine Registry Model

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

---

## 14. Engine Validation Model

Engine validation verifies that engine invocation and output conform to governed contracts.

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

---

## 15. Certification Rules

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

## 16. Governance Constraints

- Human Governance remains highest authority.
- `AGENTS.md` remains bootstrap authority during v3 transition.
- A.1, Blueprint, M.0, M.1, STD-000, STD-001, and A.3 are consumed as governing inputs according to the requested authority order.
- This RFC does not supersede the Constitution, Meta Models, Standards, Knowledge Graph Standard, or Runtime Architecture RFC.
- Engines may enforce authority but may not invent it.
- Registry entries may discover contracts but may not approve architecture by existence alone.
- Tool adapters may extend integration but may not redefine Forge AI.
- RC2 operational procedures remain valid until explicitly replaced through approved v3 operational procedures.
- ProjectStatus must not be updated by this RFC task.

---

## 17. Non-goals

This RFC does not:

- implement engines;
- define concrete APIs;
- select a programming language, database, queue, protocol, model provider, IDE, CLI, or host runtime;
- modify runtime behavior;
- redefine the Constitution;
- redefine M.0 or M.1;
- redefine STD-000 or STD-001;
- redefine the Knowledge Graph;
- certify v3 architecture;
- update ProjectStatus;
- create platform-specific adapter behavior;
- replace RC2 commands, workflows, or validation procedures;
- create production deployment topology.

---

## 18. Migration Notes from RC2

| RC2 Concept | Engine-first v3 Destination | Migration Note |
| --- | --- | --- |
| Boot sequence | Governance, Registry, Workflow, Context Engines | Boot becomes explicit engine-mediated initialization while preserving RC2 authority reading. |
| Task planning | Planning Engine | RC2 planning procedures become governed planning inputs, not ad hoc agent behavior. |
| Context assembly | Context Engine + Knowledge Engine | Context becomes a traceable engine product rather than a tool-local prompt bundle. |
| Command selection | Workflow Engine + Decision Engine | Commands remain operational procedures until replaced; selection becomes governed by engine contracts. |
| Agent execution | Execution Engine | Agents remain executors; execution dispatch and evidence capture become engine responsibilities. |
| Validation | Validation Engine | Existing validation checks map into registered validation gates and reports. |
| Review checklist | Review Engine | Review remains independent and consumes validation evidence. |
| Certification readiness | Certification Engine | Certification handoff becomes explicit and human-governed. |
| Project state updater | Certification Engine + Governance Engine + existing state procedures | State updates remain prohibited unless certification and governance authorize them. |
| Memory/context reuse | Memory Engine | Reuse becomes non-authoritative, traceable, and revalidated against current authority. |
| Multi-agent coordination | Execution Engine + Workflow Engine + Governance Engine | Ownership, handoffs, and synchronization become engine-mediated. |
| Tool-specific rules | Tool Adapter Model + Registry Engine | Tools become adapters to contracts rather than owners of workflow. |

Migration should be incremental. RC2 remains operational compatibility until v3 engine contracts and replacement procedures are approved.

---

## 19. Open Questions

1. What artifact type should represent an Engine Contract under M.1?
2. Should engine contracts have a dedicated standard or be governed by an extension to STD-000?
3. What lifecycle states apply to engines, contracts, adapters, and registry entries?
4. How should Registry Engine records be serialized and linked to the Knowledge Graph?
5. Which engine outputs must become first-class Knowledge Graph nodes?
6. What minimum evidence package is required for each engine invocation?
7. How should independent review be enforced for AI-assisted review workflows?
8. What human delegation model is acceptable for certification decisions?
9. How should tool adapter compatibility be validated across IDE, CLI, and autonomous runner environments?
10. What RC2 documents should be deprecated only after v3 engine procedures are approved?
11. Should memory review be part of Review Engine, Certification Engine, or a future Memory Standard?
12. How should engine failure modes be represented in future validation reports?

---

## 20. Completion Checklist

This draft RFC is complete when:

- [x] status is marked RFC / Draft / Non-canonical until approved;
- [x] documentation-only scope is explicit;
- [x] no code implementation is introduced;
- [x] existing Constitution, Meta Models, Standards, and Knowledge Graph are not redefined;
- [x] all 12 required engines are defined;
- [x] each engine includes purpose, ownership, inputs, outputs, consumed standards, produced artifacts, forbidden responsibilities, runtime relationship, Knowledge Graph relationship, Registry relationship, AI agent relationship, validation requirements, failure modes, and handoff rules;
- [x] Engine Stack Diagram is included;
- [x] Engine Responsibility Matrix is included;
- [x] Engine Dependency Graph is included;
- [x] Engine Communication Flow is included;
- [x] Runtime-to-Engine Lifecycle is included;
- [x] Agent-to-Engine Interaction Model is included;
- [x] Tool Adapter Model is included;
- [x] Engine Contract Model is included;
- [x] Engine Registry Model is included;
- [x] Engine Validation Model is included;
- [x] Certification Rules are included;
- [x] Governance Constraints are included;
- [x] Non-goals are included;
- [x] Migration Notes from RC2 are included;
- [x] Open Questions are included;
- [x] ProjectStatus is not updated;
- [x] this RFC is not certified.

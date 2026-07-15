# AI Framework

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.OPERATIONAL.CORE.AI-FRAMEWORK` |
| Title | AI Framework |
| Version | `2.0.0-draft` |
| Context | Draft |
| Canonical Context | Permanent Operational Core entry point; non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Operational Core Entry Point |
| Document Type | Operational Framework Entry Document |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.OP-002` |
| Scope | Defines the stable AI-DOS v2 Operational Core entry point, authority chain, boot sequence, operating model, operational responsibilities, and Runtime / Engine interaction boundaries for AI-assisted execution. |
| Out of Scope | Governance redesign, Runtime RFC redesign, Engine RFC redesign, Target resource modification, file relocation, operational implementation, platform adapter activation, multi-agent runtime activation, swarm runtime activation, certification, and canonical promotion. |
| Normative Authority | Human Governance; Invocation Context; Resolved Target Context; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | Governance Core; Meta Foundation; Standards Foundation; Runtime Architecture; Engine Platform; Engine Foundation RFC family; Operational Core replacement plan; Invocation Context; Resolved Target Context. |
| Consumes | Human task instruction, Invocation Context, Resolved Target Context, Applicable Target Resources, Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, Target Validation Requirements, governance navigation, governance decision policy, constitutional principles, meta models, terminology, metadata requirements, Runtime Architecture, Engine Architecture, and Engine Specialization template. |
| Produces | Operational Core entry guidance, task boot sequence, authority routing, AI operating model, operational boundary rules, Runtime interaction rules, Engine interaction rules, and completion-report expectations. |
| Related Specifications | `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Supersedes | Prior release-candidate master-index wording in this file while preserving this file as the Operational Core entry point. |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance review, validation against Governance Atlas, Invocation Context handling, Resolved Target Context handling, STD-010, Runtime Architecture, Engine Architecture, and explicit Human Governance promotion authorization. |
| Certification Status | Not certified |

---

## 1. Purpose

The AI Framework is the stable Operational Core entry point for AI-DOS v2. It defines how AI-assisted work begins, discovers authority, assembles context, executes within scope, validates outputs, reports evidence, and recommends next steps.

This document is an operational entry document. It does not replace the Constitution, Governance Atlas, Framework Governance, Resolved Target Context, Runtime Architecture, Engine Architecture, Engine Specialization RFC template, AI Orchestrator, Agent System Prompt, commands, workflows, or templates. It routes execution participants to those authorities and defines the operational boundaries for consuming them.

The permanent operational principle is:

```text
Governance and architecture define authority.
Operational Core routes and executes within that authority.
Runtime and Engines specialize execution behavior without redefining authority.
Human Governance remains final.
```

---

## 2. Scope

### 2.1 In Scope

This document governs the Operational Core entry model for:

1. Authority discovery.
2. Task classification.
3. Required-reading selection.
4. Boot sequence routing.
5. Operational responsibilities.
6. AI operating model.
7. Runtime interaction.
8. Engine interaction.
9. Operational boundaries.
10. Completion-report expectations.

### 2.2 Out of Scope

This document does not:

1. Redefine Human Governance, Framework Governance, or the Governance Atlas.
2. Update or reinterpret Resolved Target Context beyond consuming it for the invoked task.
3. Override Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, or Target Validation Requirements.
4. Redesign the Runtime Architecture or Engine Architecture.
5. Create Engine RFCs or certify Engine behavior.
6. Modify `AIOrchestrator.md`, `AgentSystemPrompt.md`, commands, workflows, templates, or Resolved Target Context.
7. Authorize platform adapters, multi-agent runtime, swarm runtime, enterprise governance, or legacy migration.
8. Approve, certify, promote, or canonicalize any document.

---

## 3. Authority Chain

AIFramework begins after TargetRepositoryResolution and BootSequence. Operational execution consumes the resolved and loaded context through this authority chain:

```text
Human or authorized task instruction
    ↓
Invocation Context
    ↓
Resolved Target Context
    ↓
AI-DOS authority and capability selection
    ↓
Bounded execution
    ↓
Validation
    ↓
Review
    ↓
Completion report
```

Rules:

- Higher authority is not redefined by lower operational documents.
- Resolved Target Context is opaque to AI-DOS architecture and may contain any Target-provided resources, objectives, constraints, authorities, execution boundaries, validation requirements, and applicable evidence.
- Applicable Target Resources are consumed only when relevant to the invoked task and without prescribed category or format.
- Runtime and Engine documents define architecture and specialization constraints; operational documents consume them.
- AI execution participants may draft, edit, validate, and recommend, but shall not approve, certify, promote, or modify Target resources unless explicitly instructed by Human Governance.

---

## 4. Boot Sequence

Every AI-assisted task enters AIFramework only after TargetRepositoryResolution and BootSequence unless Human Governance explicitly narrows the required authority set:

```text
1. Confirm TargetRepositoryResolution completed and produced the Resolution Result.
        ↓
2. Confirm BootSequence consumed the Resolution Result and loaded resolved Framework + Target Project context.
        ↓
3. Consume the Invocation Context, Resolved Target Context, Applicable Target Resources, Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, Target Validation Requirements, and task-relevant AI-DOS authority.
        ↓
4. Read docs/AI/GOVERNANCE.md from the loaded Framework context.
        ↓
5. Identify applicable Target objectives, constraints, execution boundaries, and protected boundaries from loaded context.
        ↓
6. Classify the task type.
        ↓
7. Read docs/AI/FrameworkGovernance.md when governance decision policy is relevant or requested.
        ↓
8. Read only the task-specific authority documents.
        ↓
9. Execute within approved scope and frozen-area boundaries.
        ↓
10. Validate against task-specific authorities and file-safety rules.
        ↓
11. Report completion, risks, validation evidence, and recommended next step.
```

AIFramework must not discover the Target Repository, resolve Target invocation contracts, resolve project paths, validate declarations, override TargetRepositoryResolution, or rerun BootSequence. Stop and escalate to Human Governance when required authority is missing, Target Authority Inputs or Target Execution Boundaries are unclear, task scope conflicts with authority, or the requested work exceeds Target Constraints without explicit authorization.

---

## 5. Framework Architecture References

The Operational Core consumes the completed AI-DOS v2 architecture layers as follows:

| Layer | Operational Consumption |
|:---|:---|
| Constitution | Provides permanent principles, invariants, and human-authority boundaries. |
| M.0 Framework Meta Model | Defines framework-level entities and semantic boundaries consumed by operational language. |
| M.1 Artifact Meta Model | Defines artifact types, specialization, evidence, and artifact lifecycle expectations. |
| STD-003 Terminology Standard | Provides canonical vocabulary for operational instructions and reports. |
| STD-010 Document Metadata Standard | Defines metadata requirements for governed Markdown artifacts. |
| A.3 Runtime Architecture RFC | Defines runtime concepts, lifecycle boundaries, context, execution, validation, review, certification, state, and memory architecture consumed by operations. |
| A.4 Engine Architecture RFC | Defines the Engine Platform, engine contracts, registry, lifecycle, communication, state, and capability boundaries consumed by operations. |
| A.5.0 Engine Specialization RFC Template | Defines how individual Engine RFCs specialize the Engine Platform without redefining Runtime, Meta, Standards, or Governance. |

Operational documents may explain how to execute against these layers. They shall not create competing architecture, terminology, metadata rules, runtime models, or engine contracts.

---

## 6. Operational Responsibilities

The AI Framework is responsible for:

1. Providing the permanent entry point for Operational Core usage.
2. Routing readers to the correct authority set before execution.
3. Preserving the distinction between governance, architecture, operational procedure, and implementation.
4. Defining the minimum safe operating model for AI-assisted tasks.
5. Maintaining file-safety and frozen-area discipline.
6. Requiring validation evidence before completion.
7. Requiring completion reports that separate completed work from recommended Target resource modifications.

The AI Framework is not responsible for:

1. Detailed orchestration procedure, which belongs to `docs/AI/AIOrchestrator.md`.
2. Prompt construction and agent-facing behavioral instructions, which belong to `docs/AI/AgentSystemPrompt.md`.
3. Command-specific execution, which belongs to `docs/AI/Commands/`.
4. Workflow-specific execution, which belongs to `docs/AI/Workflows/`.
5. Template content, which belongs to `docs/AI/Templates/`.

---

## 7. Runtime Interaction

Operational execution consumes Runtime Architecture through task lifecycle concepts:

```text
Authority Discovery
    ↓
Context Assembly
    ↓
Task preparation
    ↓
Execution
    ↓
Validation
    ↓
Review / Evidence
    ↓
Completion Report
    ↓
Recommended State or Memory Follow-up
```

Runtime interaction rules:

- Operational Core may route runtime behavior, but it does not redefine Runtime Architecture.
- Context assembly must preserve authority hierarchy and task scope.
- Execution must remain within Target Execution Boundaries and protected boundaries.
- Validation must match the task type and cited authority set.
- Review, certification, approval, and promotion remain governed lifecycle actions and are not implied by task completion.
- Target resource modifications are recommendations unless the active task explicitly authorizes a specific Target resource modification.

---

## 8. Engine Interaction

Operational execution consumes the Engine Platform and Engine Foundation through specialized responsibilities:

| Engine Responsibility | Operational Use |
|:---|:---|
| Context | Assemble bounded task context from approved authority and local evidence. |
| Knowledge | Locate governed knowledge sources and preserve source-of-truth hierarchy. |
| Task preparation | Produce scoped plans that respect Target Objectives, Target Constraints, and Target Execution Boundaries. |
| Decision | Apply authority priority and escalate unresolved conflicts. |
| Execution | Perform approved edits or actions within file-safety boundaries. |
| Validation | Check outputs against metadata, Target Validation Requirements, authority, and task requirements. |
| Review | Produce evidence and identify risks without self-approval. |
| Certification | Recognize certification gates without self-certifying. |
| Memory | Recommend durable follow-up knowledge only when authorized. |
| Governance | Enforce authority, ownership, lifecycle, and promotion boundaries. |
| Workflow | Route task-specific procedures without bypassing authority. |
| Registry | Preserve discoverability and avoid creating parallel source-of-truth systems. |

Engine interaction rules:

- Engines are architectural specializations of Runtime and Engine Platform authorities.
- Operational documents may invoke or route Engine responsibilities conceptually.
- Operational documents shall not define new Engine contracts, registries, lifecycle states, or capability models.
- Future implemented engines must consume the approved Engine RFC family and remain subject to Human Governance approval gates.

---

## 9. AI Operating Model

AI execution participants operate as constrained execution agents:

1. Read the required authority set before editing.
2. Classify the task type.
3. Identify applicable Target objectives, constraints, execution boundaries, and protected boundaries.
4. Execute only the requested and authorized scope.
5. Modify only files required by the task.
6. Preserve filenames, inbound references, and operational entry points unless explicitly instructed otherwise.
7. Avoid unrelated refactoring, normalization, movement, deletion, or implementation scope.
8. Validate the result with task-appropriate checks.
9. Report evidence, risks, and recommended next steps.
10. Never approve, certify, promote, canonicalize, unfreeze, or modify Target resources without explicit Human Governance authorization.

---

## 10. Operational Boundaries

The Operational Core shall preserve these boundaries:

- `docs/AI/AIFramework.md` is the single Operational Core entry point.
- `docs/AI/AIOrchestrator.md` owns orchestration procedure.
- `docs/AI/AgentSystemPrompt.md` owns agent prompt and behavioral instruction assembly.
- `docs/AI/Commands/` owns command-specific procedures.
- `docs/AI/Workflows/` owns workflow-specific procedures.
- `docs/AI/Templates/` owns reusable artifact templates.
- Governance, Runtime, and Engine RFCs remain upstream authorities, not operational submodules.
- Legacy migration, platform adapters, multi-agent runtime, and swarm runtime remain inactive unless Human Governance and applicable Target Authority Inputs explicitly authorize them.

No parallel operational entry document shall be created for the AI Framework. This file remains the preserved inbound-reference target for Operational Core consumers.

---

## 11. Validation Expectations

Operational work using this document should validate:

1. Correct authority set was read and consumed.
2. Target Objectives, Target Constraints, Target Execution Boundaries, and protected boundaries were respected.
3. Target Authority Inputs and Target Validation Requirements were consumed when applicable.
4. STD-010 metadata was applied to new governed Markdown documents and metadata-affecting changes.
5. Runtime and Engine references align with A.3, A.4, and A.5-series authorities.
6. No new operational parallel system was introduced.
7. Existing inbound references and filenames were preserved.
8. Target resources were not modified unless explicitly authorized.

---

## 12. Historical Context

Earlier versions of this file used release-candidate transitional wording and a specification-map structure while the repository moved toward the v2 Governance, Runtime, Engine Platform, and Engine Foundation architecture. That history explains why existing inbound references target this file.

The current document preserves the file identity and entry-point role while replacing transitional operational wording with the AI-DOS v2 Operational Core model.

---

## 13. Version History

| Version | Context | Notes |
|:---|:---|:---|
| v1.0 RC1 | Historical Release Candidate | Initial single-document constitution integration. |
| v1.0 RC2 | Historical Release Candidate | Split framework into focused architecture modules and retained this file as the master index. |
| v2.0.0-draft | Draft Operational Core Alignment | Refactored in place as the stable AI-DOS v2 Operational Core entry point. |

# Runtime RFC Family Index and Navigation Guide

>AI-DOS v2 repository-normalization program  
> Runtime RFC Family · Navigation Guide · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-RUNTIME-README` |
| Title | Runtime RFC Family Index and Navigation Guide |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted by Human Governance |
| Classification | Runtime Family Navigation |
| Document Type | Repository Family README / Navigation Guide |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V2.RUNTIME.README` |
| Scope | Runtime RFC family navigation, Runtime family documentation inventory, Runtime family reading order, Runtime family relationships, Runtime ownership map, Runtime dependency map, AI consumption guidance, and repository-normalization notes. |
| Out of Scope | Redefining Runtime Architecture, redefining Engine Architecture, redefining Engine Foundation behavior, redefining Engine Specialization behavior, changing Runtime lifecycle, changing Engine lifecycle, creating implementation scope, certifying Runtime documents, freezing Runtime documents, or updating ProjectStatus. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | Runtime RFC family documents under `docs/AI/Runtime/`; Runtime reports under `docs/AI/Runtime/Reports/`; Governance Atlas; Framework Governance; ProjectStatus; Development Phases; STD-003; STD-010; TPL-000; TPL-001. |
| Consumes | Repository-derived Runtime inventory; Runtime RFC metadata; Runtime RFC headings and relationship sections; Runtime report inventory; governance, standards, template, roadmap, and status instructions. |
| Produces | Runtime family index, Runtime family navigation guide, Runtime document inventory, Runtime ownership map, Runtime reading order, Runtime dependency map, Runtime specialization hierarchy, Runtime authority boundary summary, Runtime RFC relationship map, AI consumption guidance, normalization notes, change-control expectations, and validation expectations. |
| Related Specifications | `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/Runtime/Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md`; `docs/AI/Runtime/Reports/Engine-Architecture-Consistency-Review.md`; `docs/AI/Runtime/Reports/Engine-RFC-Certification-Review.md`; `docs/AI/Runtime/Reports/Phase-2-Engine-Foundation-Canonical-Review.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Runtime family inventory validation, STD-010 metadata validation, TPL-000 alignment, TPL-001 awareness, navigation-link validation, ownership-boundary validation, Framework Governance review, and Human Governance approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This README is the entry point for theAI-DOS Runtime RFC family. It helps humans and AI agents find the correct Runtime, Engine Platform, Engine Foundation, Engine Specialization, and Runtime report documents without creating a parallel Runtime authority.

This README is not a Runtime specification, Runtime RFC, Engine RFC, Engine Platform RFC, Engine Specialization RFC, Runtime audit, Runtime freeze review, Runtime freeze declaration, or ProjectStatus update.

## 2. Runtime Family Scope

The Runtime family consists of the repository-derived documents located under `docs/AI/Runtime/` and the review reports located under `docs/AI/Runtime/Reports/`.

In scope for this README:

1. Runtime family navigation.
2. Runtime document inventory.
3. Runtime family reading order.
4. Runtime document relationship mapping.
5. Runtime ownership and responsibility map.
6. Runtime dependency and specialization hierarchy.
7. AI consumption guidance.
8. Repository-normalization notes for the Runtime family.

## 3. Runtime Family Boundaries

This README owns only navigation, documentation, reading order, inventory, and relationship explanation for the Runtime family.

This README does not own or redefine:

1. Runtime Architecture.
2. Engine Architecture.
3. Engine Kernel behavior.
4. Engine Contract behavior.
5. Engine Registry behavior.
6. Engine Lifecycle behavior.
7. Engine Communication behavior.
8. Engine State behavior.
9. Engine Capability behavior.
10. Any individual Engine Specialization behavior.
11. Runtime lifecycle.
12. Engine lifecycle.
13. Implementation behavior, code, APIs, schemas, adapters, or tooling.

## 4. Runtime Family Hierarchy

The Runtime RFC family is organized as a layered architecture family:

```text
Runtime RFC Family

A.3 Runtime Architecture
        ↓
A.4 Engine Architecture
        ↓
A.4.x Engine Foundation RFCs
        ↓
A.5.x Engine Specialization RFCs
```

This hierarchy is navigational. It does not redefine the architecture owned by the referenced RFCs.

## 5. Runtime Document Inventory

The following inventory is derived from the current contents of `docs/AI/Runtime/`.

### 5.1 Core Runtime and Engine Platform RFCs

| Layer | Document | Responsibility |
|:---|:---|:---|
| Runtime Architecture | [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md) | Owns Runtime Architecture as documentation-only architecture and provides downstream Runtime inputs. |
| Engine Architecture | [`A.4-Engine-Architecture-RFC.md`](A.4-Engine-Architecture-RFC.md) | Owns Engine Architecture as documentation-only architecture and defines the engine stack, engine separation, and downstream Engine inputs. |

### 5.2 Engine Foundation RFCs

| Layer | Document | Responsibility |
|:---|:---|:---|
| Engine Foundation | [`A.4.1-Engine-Kernel-RFC.md`](A.4.1-Engine-Kernel-RFC.md) | Defines the Engine Kernel position, execution authority model, runtime/kernel boundary, invocation model, lifecycle, registration, discovery, communication, state, capability, event, artifact, validation, failure, telemetry, and governance constraints. |
| Engine Foundation | [`A.4.2-Engine-Contract-RFC.md`](A.4.2-Engine-Contract-RFC.md) | Defines Engine Contract expectations, invariants, metadata, operations, lifecycle expectations, capability model, dependency model, artifact model, validation model, telemetry, traceability, compatibility, versioning, and governance rules. |
| Engine Foundation | [`A.4.3-Engine-Registry-RFC.md`](A.4.3-Engine-Registry-RFC.md) | Defines Engine Registry architecture, registration, discovery, metadata, capability resolution, dependency resolution, synchronization, validation integration, certification integration, traceability, governance, and failure handling. |
| Engine Foundation | [`A.4.4-Engine-Lifecycle-RFC.md`](A.4.4-Engine-Lifecycle-RFC.md) | Defines Engine Lifecycle architecture, canonical lifecycle states, transition rules, transition matrix, lifecycle ownership, invariants, events, validation, failure, recovery, governance, and prohibitions. |
| Engine Foundation | [`A.4.5-Engine-Communication-RFC.md`](A.4.5-Engine-Communication-RFC.md) | Defines Engine Communication position, communication architecture, communication types, communication modes, request/response/event/artifact handoff flows, communication ownership, invariants, events, validation, failure, recovery, governance, and boundaries. |
| Engine Foundation | [`A.4.6-Engine-State-RFC.md`](A.4.6-Engine-State-RFC.md) | Defines Engine State position, state architecture, state versus lifecycle/registry/knowledge graph boundaries, canonical state model, state ownership, synchronization, visibility, invariants, events, validation, failure, recovery, governance, and security constraints. |
| Engine Foundation | [`A.4.7-Engine-Capability-RFC.md`](A.4.7-Engine-Capability-RFC.md) | Defines Engine Capability position, capability architecture, capability model, capability ownership, resolution, compatibility, validation expectations, governance, and related boundaries. |

### 5.3 Engine Specialization Template and RFCs

| Layer | Document | Responsibility |
|:---|:---|:---|
| Engine Specialization Template | [`A.5.0-Engine-Specialization-RFC-Template.md`](A.5.0-Engine-Specialization-RFC-Template.md) | Defines the common section contract and section-level content expectations for individual Engine Specialization RFCs. |
| Engine Specialization | [`A.5.1-Context-Engine-RFC.md`](A.5.1-Context-Engine-RFC.md) | Defines Context Engine architecture, context lifecycle, context resolution, context versioning, context handoff, and context ownership. |
| Engine Specialization | [`A.5.2-Knowledge-Engine-RFC.md`](A.5.2-Knowledge-Engine-RFC.md) | Defines Knowledge Engine architecture, knowledge lifecycle, acquisition, retrieval, provenance, contribution, conflict resolution, and knowledge ownership. |
| Engine Specialization | [`A.5.3-Planning-Engine-RFC.md`](A.5.3-Planning-Engine-RFC.md) | Defines Planning Engine architecture, task decomposition, plan generation, plan revision, dependency management, plan validation, handoff, and planning ownership. |
| Engine Specialization | [`A.5.4-Decision-Engine-RFC.md`](A.5.4-Decision-Engine-RFC.md) | Defines Decision Engine architecture, plan evaluation, trade-off analysis, alternative ranking, risk assessment, decision artifacts, handoff, and decision ownership. |
| Engine Specialization | [`A.5.5-Execution-Engine-RFC.md`](A.5.5-Execution-Engine-RFC.md) | Defines Execution Engine architecture, step execution, execution ordering, parallelization, step results, execution feedback, handoff, and execution ownership. |
| Engine Specialization | [`A.5.6-Validation-Engine-RFC.md`](A.5.6-Validation-Engine-RFC.md) | Defines Validation Engine architecture, assertion verification, quality gating, conformance classification, pipeline verdicts, validation audit trail, and validation ownership. |
| Engine Specialization | [`A.5.7-Review-Engine-RFC.md`](A.5.7-Review-Engine-RFC.md) | Defines Review Engine architecture, readiness assessment, review artifacts, criteria evaluation, finding classification, review-to-certification handoff, and review ownership. |
| Engine Specialization | [`A.5.8-Certification-Engine-RFC.md`](A.5.8-Certification-Engine-RFC.md) | Defines Certification Engine architecture, certification decision-making, certification artifacts, certification lifecycle, Human Governance interface, certification-to-governance handoff, and certification ownership. |
| Engine Specialization | [`A.5.9-Memory-Engine-RFC.md`](A.5.9-Memory-Engine-RFC.md) | Defines Memory Engine architecture, artifact capture, memory classification, pattern extraction, retrieval, lifecycle governance, retention policy, handoff, and memory ownership. |
| Engine Specialization | [`A.5.10-Governance-Engine-RFC.md`](A.5.10-Governance-Engine-RFC.md) | Defines Governance Engine architecture, governance policy management, escalation processing, Human Governance interface, audit trail, retention administration, governance validation, and governance ownership. |
| Engine Specialization | [`A.5.11-Workflow-Engine-RFC.md`](A.5.11-Workflow-Engine-RFC.md) | Defines Workflow Engine architecture, workflow definitions, workflow instance lifecycle, cross-engine orchestration, workflow state tracking, governance-aware authorization, artifacts, and workflow ownership. |
| Engine Specialization | [`A.5.12-Registry-Engine-RFC.md`](A.5.12-Registry-Engine-RFC.md) | Defines Registry Engine architecture, registration governance, capability registry management, engine health monitoring, discovery services, registration lifecycle, audit trail, and registry ownership. |

### 5.4 Runtime Reports

| Report | Purpose |
|:---|:---|
| [`Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md`](Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md) | Reviews A.5 Engine RFC inventory and compliance. |
| [`Reports/Engine-Architecture-Consistency-Review.md`](Reports/Engine-Architecture-Consistency-Review.md) | Reviews consistency across Engine Architecture documents. |
| [`Reports/Engine-RFC-Certification-Review.md`](Reports/Engine-RFC-Certification-Review.md) | Records Engine RFC certification-readiness review findings. |
| [`Reports/Phase-2-Engine-Foundation-Canonical-Review.md`](Reports/Phase-2-Engine-Foundation-Canonical-Review.md) | Records Phase 2 Engine Foundation canonical-review package information. |

## 6. Runtime Ownership Map

| Ownership Area | Owning Document | README Boundary |
|:---|:---|:---|
| Runtime Architecture | [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md) | This README points to A.3 and does not redefine Runtime concepts. |
| Engine Architecture | [`A.4-Engine-Architecture-RFC.md`](A.4-Engine-Architecture-RFC.md) | This README points to A.4 and does not redefine Engine Platform concepts. |
| Engine Foundation | [`A.4.1`](A.4.1-Engine-Kernel-RFC.md) through [`A.4.7`](A.4.7-Engine-Capability-RFC.md) | This README identifies the foundation sequence and does not change any foundation responsibility. |
| Engine Specialization Template | [`A.5.0-Engine-Specialization-RFC-Template.md`](A.5.0-Engine-Specialization-RFC-Template.md) | This README identifies the template and does not alter the section contract. |
| Individual Engine Specializations | [`A.5.1`](A.5.1-Context-Engine-RFC.md) through [`A.5.12`](A.5.12-Registry-Engine-RFC.md) | This README maps specializations and does not change any Engine's behavior or ownership. |
| Runtime Reviews and Reports | [`Reports/`](Reports/) | This README links reports and does not certify, approve, freeze, or promote the Runtime family. |
| Runtime Family Navigation | This README | This README owns index, inventory, reading order, and relationship navigation only. |

## 7. Runtime Reading Order

Read the Runtime family in dependency order rather than filesystem sort order:

1. [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md)
2. [`A.4-Engine-Architecture-RFC.md`](A.4-Engine-Architecture-RFC.md)
3. [`A.4.1-Engine-Kernel-RFC.md`](A.4.1-Engine-Kernel-RFC.md)
4. [`A.4.2-Engine-Contract-RFC.md`](A.4.2-Engine-Contract-RFC.md)
5. [`A.4.3-Engine-Registry-RFC.md`](A.4.3-Engine-Registry-RFC.md)
6. [`A.4.4-Engine-Lifecycle-RFC.md`](A.4.4-Engine-Lifecycle-RFC.md)
7. [`A.4.5-Engine-Communication-RFC.md`](A.4.5-Engine-Communication-RFC.md)
8. [`A.4.6-Engine-State-RFC.md`](A.4.6-Engine-State-RFC.md)
9. [`A.4.7-Engine-Capability-RFC.md`](A.4.7-Engine-Capability-RFC.md)
10. [`A.5.0-Engine-Specialization-RFC-Template.md`](A.5.0-Engine-Specialization-RFC-Template.md)
11. [`A.5.1-Context-Engine-RFC.md`](A.5.1-Context-Engine-RFC.md)
12. [`A.5.2-Knowledge-Engine-RFC.md`](A.5.2-Knowledge-Engine-RFC.md)
13. [`A.5.3-Planning-Engine-RFC.md`](A.5.3-Planning-Engine-RFC.md)
14. [`A.5.4-Decision-Engine-RFC.md`](A.5.4-Decision-Engine-RFC.md)
15. [`A.5.5-Execution-Engine-RFC.md`](A.5.5-Execution-Engine-RFC.md)
16. [`A.5.6-Validation-Engine-RFC.md`](A.5.6-Validation-Engine-RFC.md)
17. [`A.5.7-Review-Engine-RFC.md`](A.5.7-Review-Engine-RFC.md)
18. [`A.5.8-Certification-Engine-RFC.md`](A.5.8-Certification-Engine-RFC.md)
19. [`A.5.9-Memory-Engine-RFC.md`](A.5.9-Memory-Engine-RFC.md)
20. [`A.5.10-Governance-Engine-RFC.md`](A.5.10-Governance-Engine-RFC.md)
21. [`A.5.11-Workflow-Engine-RFC.md`](A.5.11-Workflow-Engine-RFC.md)
22. [`A.5.12-Registry-Engine-RFC.md`](A.5.12-Registry-Engine-RFC.md)
23. Runtime reports in [`Reports/`](Reports/) after the RFC family has been read.

## 8. Runtime Dependency Map

```text
Governance / Roadmap / Standards / Templates
        ↓
A.3 Runtime Architecture
        ↓
A.4 Engine Architecture
        ↓
A.4.1 Kernel + A.4.2 Contract + A.4.3 Registry + A.4.4 Lifecycle
        ↓
A.4.5 Communication + A.4.6 State + A.4.7 Capability
        ↓
A.5.0 Engine Specialization RFC Template
        ↓
A.5.1–A.5.12 Engine Specialization RFCs
        ↓
Runtime Reports and Review Packages
```

The dependency map is a consumption guide. It is not a replacement authority for dependencies declared in individual RFC metadata.

## 9. Runtime Specialization Hierarchy

| Specialization Level | Documents | Consumption Rule |
|:---|:---|:---|
| Runtime Architecture | A.3 | Consumes higher governance, meta, standards, and related Runtime inputs. |
| Engine Architecture | A.4 | Consumes A.3 and defines the Engine Platform architecture. |
| Engine Foundation | A.4.1–A.4.7 | Consumes A.3 and A.4 and specializes shared Engine Platform foundations. |
| Engine Specialization Template | A.5.0 | Consumes A.3, A.4, and A.4.x foundation RFCs and defines the individual Engine RFC structure. |
| Individual Engine Specializations | A.5.1–A.5.12 | Consume A.5.0 and upstream Runtime / Engine Platform foundations while defining one Engine specialization each. |
| Review Reports | Reports | Consume the Runtime RFC family as evidence and record findings without replacing the RFCs. |

## 10. Runtime Authority Boundaries

1. A.3 owns Runtime Architecture.
2. A.4 owns Engine Architecture.
3. A.4.x RFCs own Engine Foundation responsibilities within their assigned topic.
4. A.5.0 owns the Engine Specialization RFC section contract.
5. A.5.x RFCs own their individual Engine specialization architecture.
6. Reports own review findings and evidence summaries only.
7. This README owns only Runtime family navigation, inventory, reading order, and relationship documentation.
8. ProjectStatus remains the operational source of truth and is not modified by this README.
9. Human Governance remains final for approval, certification, promotion, freeze, and roadmap activation.

## 11. Runtime RFC Relationships

| Relationship | Description |
|:---|:---|
| A.3 → A.4 | Runtime Architecture provides the runtime layer consumed by Engine Architecture. |
| A.4 → A.4.x | Engine Architecture provides the platform model specialized by Engine Foundation RFCs. |
| A.4.x → A.5.0 | Engine Foundation RFCs provide shared constraints and concepts consumed by the Engine Specialization RFC Template. |
| A.5.0 → A.5.x | The specialization template provides the common structure and content contract for individual Engine Specialization RFCs. |
| A.5.1–A.5.12 | Individual Engine Specialization RFCs define one Engine each and reference peer Engines through explicit relationship sections. |
| RFCs → Reports | Reports review, assess, or package RFC evidence; reports do not redefine the RFCs they evaluate. |

## 12. AI Consumption Guidance

AI agents consuming the Runtime RFC family shall:

1. Start from this README for navigation only.
2. Read the applicable governance, roadmap, status, terminology, metadata, and template authorities before modifying Runtime-family documents.
3. Use the reading order in this README to avoid filesystem-order assumptions.
4. Treat A.3 as Runtime Architecture authority and A.4 as Engine Architecture authority.
5. Treat A.4.x documents as Engine Foundation authorities only within their assigned topic.
6. Treat A.5.0 as the section-contract authority for Engine Specialization RFCs.
7. Treat A.5.x documents as individual Engine specialization authorities only within their assigned Engine.
8. Report conflicts as findings rather than silently resolving them.
9. Avoid introducing implementation scope during documentation-only tasks.
10. Avoid updating ProjectStatus unless explicitly authorized by Human Governance or a dedicated ProjectStatus task.
11. Avoid declaring Runtime frozen, certified, approved, or canonical without explicit Human Governance approval.

## 13. Repository Normalization Notes

This README starts the Runtime family normalization process by creating a repository-derived family index and navigation guide.

Normalization expectations:

1. Preserve repository-first ordering and evidence.
2. Do not assume file ordering from lexical sort alone.
3. Do not rewrite Runtime RFCs as part of README creation.
4. Do not create additional README files, audits, freeze reviews, or freeze declarations during this task.
5. Preserve Single Source of Truth ownership by linking to documents rather than copying their architectures.
6. Treat Runtime reports as evidence and review artifacts, not Runtime Architecture replacements.

## 14. Change-Control Expectations

Changes to this README should occur when:

1. A Runtime family document is added, removed, renamed, superseded, or promoted through authorized governance.
2. A Runtime report is added, removed, renamed, or superseded through authorized governance.
3. Runtime family reading order changes through explicit architecture or governance authority.
4. Runtime ownership or authority boundaries change through explicit Human Governance approval.
5. Repository-normalization policy requires this README to reflect updated standards or templates.

Changes to this README shall not be used to change the architecture owned by A.3, A.4, A.4.x, A.5.0, or A.5.x documents.

## 15. Validation Expectations

Validation for this README includes:

1. STD-010 metadata table is present and includes mandatory fields.
2. TPL-000 separation-of-concerns expectations are preserved.
3. TPL-001 is consumed only as RFC-template context and is not redefined.
4. Runtime inventory is repository-derived from `docs/AI/Runtime/` and `docs/AI/Runtime/Reports/`.
5. Every Runtime RFC under `docs/AI/Runtime/` is referenced.
6. Runtime reports under `docs/AI/Runtime/Reports/` are referenced.
7. Ownership is not duplicated or transferred from RFCs to this README.
8. Navigation links resolve relative to this README.
9. Reading order is coherent with the Runtime hierarchy.
10. ProjectStatus is not modified.
11. No Runtime RFC is modified by README creation.

## 16. Related Documents

| Document | Relationship |
|:---|:---|
| [`../GOVERNANCE.md`](../GOVERNANCE.md) | Governance Atlas and repository navigation authority. |
| [`../../FrameworkGovernance.md`](../../FrameworkGovernance.md) | Governance decision-policy authority. |
| [`../../DevelopmentPhases/ProjectStatus.md`](../../DevelopmentPhases/ProjectStatus.md) | Operational status and frozen-area authority. |
| [`../../DevelopmentPhases/ForgeAI-DevelopmentPhases.md`](../../DevelopmentPhases/ForgeAI-DevelopmentPhases.md) | Roadmap authority. |
| [`../Architecture/Standards/STD-003-Terminology-Standard.md`](../Architecture/Standards/STD-003-Terminology-Standard.md) | Canonical terminology standard. |
| [`../Architecture/Standards/STD-010-Document-Metadata-Standard.md`](../Architecture/Standards/STD-010-Document-Metadata-Standard.md) | Document metadata standard. |
| [`../Templates/Standards/TPL-000-Template-Standard.md`](../Templates/Standards/TPL-000-Template-Standard.md) | Template governance standard. |
| [`../Templates/Standards/TPL-001-RFC-Template-Standard.md`](../Templates/Standards/TPL-001-RFC-Template-Standard.md) | RFC template standard. |

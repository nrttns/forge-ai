# Appendix C: Terminology Glossary Extract

> **Parent Document:** [A.0 — Framework Audit](../A.0-Framework-Audit.md) (`AI-DOS-AUDIT-A.0`)
> **Version:** 3.0.0-beta
> **Status:** Draft

---

## C.1 Purpose

This appendix extracts and consolidates the architectural terminology identified during the Terminology Audit (Section 12) and used throughout the Framework Audit. Each term is classified according to the canonical terminology lifecycle, assigned an authoritative owner, and mapped to its defining document. This extract serves as the preliminary glossary input for [A.3 — Terminology](./A.0-Framework-Audit.md#references).

---

## C.2 Glossary Conventions

| Convention | Description |
|:---|:---|
| **Preferred Term** | The official term to be used in all Framework documentation. |
| **Synonyms** | Accepted alternative names that may appear in historical or reference material. |
| **Deprecated Terms** | Terms that should no longer be used in new documentation. |
| **Lifecycle Status** | Draft → Approved → Canonical → Historical → Deprecated. |

---

## C.3 Glossary Entries

### C.3.1 Core Framework Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Framework** | The completeAI-DOS architectural system encompassing governance, planning, runtime, execution, validation, documentation, and platform layers. |AI-DOS Framework | Constitution |AI-DOS Framework, AI-DOS Framework | — | Canonical |
| **Framework Core** | The foundational set of documents (A.1–A.9) that define the architectural truth, principles, models, and governance of theAI-DOS Framework. | Architecture Owner | Framework Governance | Core Documents | — | Canonical |
| **Framework Core Redesign** | The structured architectural activity to evolve the existingAI-DOS Framework into theAI-DOS v3 Framework Core, governed by this audit and subsequent documents. | Architecture Owner | Framework Governance | Redesign Program, v3 Redesign | — | Approved |
| **Architecture Discovery Document (ADD)** | A master discovery artifact that combines architectural discovery, governance evidence, migration analysis, and historical traceability into a single canonical document. | Architecture Owner | Framework Governance | Master Audit | — | Proposed |
| **Master Architecture Audit** | A Framework-level audit that evaluates the entire Framework as a complete architectural system for discovery rather than verification. | Architecture Owner | Framework Governance | Framework Audit | — | Approved |

### C.3.2 Governance and Authority Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Human Governance** | The ultimate authority for all architectural decisions, held by human stakeholders rather than automated systems. | Human Governance | Human Governance | Human Authority, Human Oversight | — | Canonical |
| **Authority** | The right to define, approve, interpret, and evolve architectural truth for a given domain. | Framework Governance | Constitution | Decision Right | — | Approved |
| **Authority Hierarchy** | The linear chain of authority from Human Governance through Constitution, Governance, Architecture, and all downstream layers. | Framework Governance | Constitution | Decision Chain | — | Approved |
| **Authority Domain** | A bounded area of architectural decision-making assigned to a single authoritative owner (e.g., Runtime, Planning, Validation). | Framework Governance | Authority Model | Decision Domain | — | Proposed |
| **Governance** | The system of policies, compliance rules, and oversight mechanisms that ensure architectural consistency and accountability. | Framework Governance | Constitution | Governance System | — | Canonical |
| **Framework Governance** | The architectural authority responsible for governance policies, compliance rules, and architectural oversight across the Framework. | Framework Governance | Constitution | — | — | Canonical |
| **Governance Approval** | The formal acceptance of an architectural decision, document, or change through the defined governance process. | Framework Governance | Framework Governance | Governance Sign-off | — | Approved |
| **Governance Exception** | A documented and approved deviation from standard governance rules, required when compliance is not feasible. | Framework Governance | Framework Governance | Exception, Waiver | — | Proposed |

### C.3.3 Ownership Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Ownership** | The accountability for the lifecycle of an architectural asset, including its definition, maintenance, and evolution. | Architecture Owner | Ownership Model | Accountability, Stewardship | — | Approved |
| **Owner** | The single responsible authority accountable for the lifecycle of an architectural asset. | Architecture Owner | Ownership Model | Responsible Party, Accountable Owner | — | Approved |
| **Ownership Boundary** | The defined scope of accountability for a given owner, preventing overlap with other ownership domains. | Architecture Owner | Ownership Model | Responsibility Boundary | — | Proposed |
| **Ownership Drift** | The gradual, undocumented shift of ownership responsibilities away from their designated owner. | Architecture Owner | Ownership Model | — | — | Proposed |
| **Architecture Identity Card** | The standardized metadata schema (eleven fields) that every major Framework subsystem must expose. | Architecture Owner | Framework Architecture | Subsystem Card, Component Card | — | Proposed |

### C.3.4 Dependency Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Dependency** | An architectural relationship where one component requires the output, contract, or presence of another component. | Architecture Owner | Framework Architecture | Architectural Dependency | — | Canonical |
| **Canonical Dependency Direction** | The top-down flow of dependencies from Human Governance through Constitution to Project Implementations. | Architecture Owner | Framework Architecture | Dependency Flow, Approved Direction | — | Approved |
| **Circular Dependency** | A forbidden architectural defect where two or more components form a dependency cycle. | Architecture Owner | Framework Architecture | Circular Reference, Dependency Cycle | — | Approved |
| **Layer Leakage** | An architectural defect where a component violates layer boundaries by depending on or redefining content from an unrelated layer. | Architecture Owner | Framework Architecture | Cross-Layer Dependency | — | Proposed |
| **Layer Isolation** | The architectural property ensuring each layer interacts only through approved contracts with adjacent layers. | Architecture Owner | Framework Architecture | — | — | Approved |

### C.3.5 Runtime Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Runtime** | The execution environment and lifecycle that orchestrates the complete sequence from bootstrap through certification. | Runtime Owner | Framework Architecture | Execution Environment | — | Canonical |
| **Runtime Lifecycle** | The canonical sequence of ten stages: Bootstrap → Context Assembly → Planning → Execution → Validation → Review → Certification → Knowledge Update → Memory Update → Project Status Update. | Runtime Owner | Framework Architecture | Execution Lifecycle | — | Approved |
| **Bootstrap** | The initial runtime stage that initializes the Framework execution environment and loads required state. | Runtime Owner | Runtime | Initialization, Startup | — | Approved |
| **Context Assembly** | The runtime stage that collects, validates, and assembles the execution context from multiple sources. | Runtime Owner | Runtime | Context Collection | — | Approved |
| **Context Propagation** | The mechanism by which execution context is distributed across engines, agents, and runtime stages. | Runtime Owner | Runtime | Context Distribution | — | Proposed |
| **State Transition** | The movement of a runtime component or artifact from one lifecycle state to another. | Runtime Owner | Runtime | Lifecycle Transition | — | Approved |

### C.3.6 Engine Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Engine** | A dedicated architectural component responsible for a specific runtime capability (e.g., Planning, Validation, Knowledge). | Architecture Owner | Framework Architecture | Runtime Engine | — | Approved |
| **Planning Engine** | The engine responsible for decomposing work into executable plans, phases, stages, and tasks. | Planning Owner | Runtime | — | — | Approved |
| **Context Engine** | The engine responsible for managing execution context collection, validation, and graph maintenance. | Runtime Owner | Runtime | — | — | Approved |
| **Knowledge Engine** | The engine responsible for managing the canonical knowledge model and knowledge graph operations. | Knowledge Owner | Runtime | — | — | Approved |
| **Memory Engine** | The engine responsible for managing persistent Framework memory and memory graph operations. | Memory Owner | Runtime | — | — | Approved |
| **Decision Engine** | The engine responsible for supporting architectural and runtime decision-making through structured reasoning. | Architecture Owner | Runtime | — | — | Undefined |
| **Execution Engine** | The engine responsible for executing approved commands, workflows, and tasks. | Execution Owner | Runtime | — | — | Approved |
| **Validation Engine** | The engine responsible for verifying architectural and execution quality through evidence-based assessment. | Validation Owner | Runtime | — | — | Approved |
| **Review Engine** | The engine responsible for performing architectural assessment and producing review recommendations. | Review Owner | Runtime | — | — | Approved |
| **Certification Engine** | The engine responsible for formally accepting or rejecting completed work based on evidence. | Certification Owner | Runtime | — | — | Approved |
| **Engine Registry** | The centralized registry of all engines, their capabilities, contracts, and lifecycle status. | Architecture Owner | Engine Model | — | — | Missing |

### C.3.7 AI Agent and Swarm Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Agent** | An AI entity with a defined purpose, role, authority, owner, and execution boundaries within the Framework. | Runtime Owner | Runtime | AI Agent | — | Approved |
| **Agent Role** | The defined function or responsibility assigned to an agent within the Framework (e.g., planner, executor, reviewer). | Runtime Owner | Runtime | Agent Function | — | Proposed |
| **Agent Lifecycle** | The sequence of stages an agent progresses through from initialization to decommission. | Runtime Owner | Runtime | — | — | Proposed |
| **Agent Registry** | The centralized registry of all agents, their roles, capabilities, and governance boundaries. | Runtime Owner | Engine Model | — | — | Missing |
| **Agent Runtime** | The governed execution environment for AI agents, including lifecycle management and capability enforcement. | Runtime Owner | Runtime | — | — | Proposed |
| **Swarm** | A coordinated group of multiple agents collaborating to achieve a shared objective under governed topologies. | Runtime Owner | Runtime | Agent Swarm, Multi-Agent System | — | Approved |
| **Swarm Coordinator** | The defined authority responsible for coordinating agent participation, task distribution, and consensus within a swarm. | Runtime Owner | Runtime | Coordinator | — | Proposed |
| **Swarm Registry** | The centralized registry of all swarms, their topologies, participating agents, and coordination state. | Runtime Owner | Engine Model | — | — | Missing |
| **Swarm Topology** | The structural arrangement governing agent interactions within a swarm (Centralized, Hierarchical, Distributed, Hybrid). | Runtime Owner | Runtime | Topology | — | Proposed |
| **Shared Context** | The authoritative execution context shared among all participating agents within a swarm. | Runtime Owner | Runtime | — | — | Proposed |
| **Consensus Model** | The defined process by which multiple agents within a swarm reach agreement on decisions or outcomes. | Runtime Owner | Runtime | — | — | Proposed |

### C.3.8 Planning Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Planning** | The architectural activity of initiating, decomposing, governing, prioritizing, and tracking work before execution. | Planning Owner | Planning | Work Planning | — | Canonical |
| **Development Phase** | A major developmental period in the Framework roadmap that groups related stages and objectives. | Planning Owner | Planning | Phase | — | Canonical |
| **Development Stage** | A granular execution unit within a Development Phase, representing a specific deliverable or milestone. | Planning Owner | Planning | Stage | — | Canonical |
| **Framework Roadmap** | The authoritative planning artifact that defines the sequence and dependencies of all Development Phases. | Planning Owner | Planning | Roadmap | — | Canonical |
| **Planning Hierarchy** | The ordered structure of planning levels from Framework Roadmap through Phases, Stages, and individual work items. | Planning Owner | Planning | — | — | Proposed |
| **Project Status** | The current operational truth of the Framework, tracking active work, progress, and blockers. | Project Status Owner | Project Status | Status, Work Status | — | Canonical |

### C.3.9 Quality and Validation Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Validation** | The process of verifying that architectural and execution work meets defined quality standards through evidence-based assessment. | Validation Owner | Validation | Quality Verification | — | Canonical |
| **Testing** | The structured activity of executing test cases to verify correctness, coverage, and compliance. | Testing Owner | Validation | — | — | Canonical |
| **Review** | The architectural assessment of completed work, producing review recommendations without making final decisions. | Review Owner | Review | Architectural Review | — | Canonical |
| **Certification** | The formal acceptance or rejection of completed architectural work based on validation and review evidence. | Certification Owner | Certification | Formal Acceptance | — | Canonical |
| **Quality Gate** | An explicit, measurable checkpoint that prevents incomplete architectural work from progressing. | Validation Owner | Governance | Gate, Checkpoint | — | Approved |
| **Evidence** | Verifiable, reproducible, traceable, and current information that supports a validation or audit finding. | Validation Owner | Validation | Proof, Audit Evidence | — | Canonical |
| **Evidence Model** | The defined structure governing how evidence is collected, classified, stored, and retrieved. | Validation Owner | Validation | — | — | Proposed |

### C.3.10 Documentation Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Canonical Document** | An authoritative document that defines architectural truth and is the single source for a given concept. | Architecture Owner | Framework Governance | Authoritative Document | — | Canonical |
| **Historical Document** | A completed document retained for traceability and reference, no longer actively governing architectural truth. | Architecture Owner | Framework Governance | Archived Document | — | Approved |
| **Legacy Document** | A document retained temporarily for compatibility or historical context, no longer defining architectural truth. | Architecture Owner | Framework Governance | Deprecated Document | — | Approved |
| **Reference Document** | Read-only material used for comparison or migration analysis, not governing architectural decisions. | Architecture Owner | Framework Governance | Reference Material | — | Approved |
| **Document Lifecycle** | The six-stage progression of a document: Draft → Review → Approved → Canonical → Historical → Archived. | Architecture Owner | Framework Governance | — | — | Approved |
| **Source of Truth** | The single, authoritative location where a given concept is defined and maintained. | Framework Governance | Constitution | SSOT, Single Source | — | Canonical |
| **Specification** | A canonical document that defines architectural contracts and behavioral requirements for a subsystem or capability. | Architecture Owner | Framework Architecture | Spec | — | Approved |

### C.3.11 Migration Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Migration** | The governed process of evolving the existing Framework into a new major version while preserving architectural integrity. | Architecture Owner | Framework Governance | Framework Migration, Version Transition | — | Approved |
| **Migration Strategy** | The architectural approach defining how migration is governed, incremental, traceable, and validated. | Architecture Owner | Framework Governance | — | — | Approved |
| **Breaking Change** | A modification that alters or removes an existing architectural contract, requiring explicit governance approval. | Architecture Owner | Framework Governance | Breaking Modification | — | Approved |
| **Deprecation** | The formal process of marking an artifact as no longer recommended for use, with a defined removal target. | Architecture Owner | Framework Governance | Deprecation Policy | — | Approved |
| **Coexistence Model** | The governance framework allowing legacy and redesigned artifacts to operate in parallel during migration. | Architecture Owner | Framework Governance | Parallel Operation | — | Proposed |

### C.3.12 Audit Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **Audit** | A structured, evidence-based assessment of architectural completeness, consistency, and compliance. | Architecture Owner | Framework Governance | Architecture Audit | — | Canonical |
| **Audit Finding** | A documented observation, gap, risk, or defect discovered during the execution of an audit. | Architecture Owner | Framework Governance | Finding | — | Approved |
| **Audit Principle** | A mandatory rule governing how audits are performed within the Framework (e.g., Evidence First, Traceability). | Architecture Owner | Framework Governance | Principle, Audit Rule | — | Approved |
| **Evidence-Based** | The requirement that every finding, recommendation, and decision be supported by verifiable evidence. | Architecture Owner | Framework Governance | Evidence-Driven | — | Canonical |
| **Exit Decision** | The formal governance checkpoint that determines whether an audit provides sufficient evidence to proceed. | Architecture Owner | Framework Governance | Audit Completion Decision | — | Approved |
| **Architectural Baseline** | The verified, documented state of the Framework established by this audit, serving as the foundation for all redesign. | Architecture Owner | Framework Governance | Baseline, Verified Baseline | — | Approved |
| **Gap Analysis** | The systematic identification and classification of architectural concepts that are absent, incomplete, or insufficiently defined. | Architecture Owner | Framework Governance | Missing Concepts Analysis | — | Approved |

### C.3.13 System Vision Terms

| Preferred Term | Definition | Owner | Authority | Synonyms | Deprecated Terms | Lifecycle Status |
|:---|:---|:---|:---|:---|:---|:---|
| **AI Development Operating System (AI-DOS)** | The target architectural vision forAI-DOS v3: a complete operating system for AI-assisted software development. | Architecture Owner | Constitution | AI-DOS | — | Proposed |
| **AI Orchestrator** | The coordinating component responsible for managing AI agents, swarm execution, and engine interactions. | Runtime Owner | Runtime | Orchestrator | — | Approved |
| **Context Graph** | The graph-based model representing relationships, dependencies, and state within the execution context. | Runtime Owner | Runtime | — | — | Incomplete |
| **Knowledge Graph** | The graph-based model representing the canonical knowledge of the Framework. | Knowledge Owner | Engine Model | — | — | Missing |
| **Memory Graph** | The graph-based model representing persistent memory relationships and long-term state. | Memory Owner | Engine Model | — | — | Missing |
| **Event Model** | The architectural model defining how events are produced, consumed, routed, and correlated across the Framework. | Runtime Owner | Runtime | Event System | — | Missing |
| **State Machine** | The architectural model defining valid states and transitions for runtime components and artifacts. | Runtime Owner | Runtime | — | — | Missing |
| **Policy Engine** | The engine responsible for evaluating and enforcing governance policies at runtime. | Framework Governance | Authority Model | — | — | Emerging |
| **Metrics Model** | The architectural model defining how performance, quality, and operational metrics are collected and reported. | Runtime Owner | Runtime | — | — | Missing |

---

## C.4 Terminology Classification Summary

| Lifecycle Status | Count | Examples |
|:---|:---:|:---|
| **Canonical** | 15 | Framework, Human Governance, Authority, Governance, Runtime, Validation, Testing, Review, Certification, Planning, Source of Truth, Evidence, Audit, Development Phase, Development Stage |
| **Approved** | 36 | Framework Core, Authority Hierarchy, Ownership, Dependency, Runtime Lifecycle, Engine, Agent, Swarm, Quality Gate, Specification, Migration, Breaking Change, Deprecation, Exit Decision, Architectural Baseline, and others |
| **Proposed** | 23 | Authority Domain, Architecture Identity Card, Layer Leakage, Context Propagation, Agent Registry, Swarm Coordinator, Consensus Model, Coexistence Model, and others |
| **Incomplete** | 1 | Context Graph |
| **Undefined** | 1 | Decision Engine |
| **Emerging** | 1 | Policy Engine |
| **Missing** | 6 | Engine Registry, Agent Registry, Swarm Registry, Knowledge Graph, Memory Graph, Event Model, State Machine, Metrics Model |
| **Total** | **83** | |

---

## C.5 Terminology Governance Rules

1. **One Concept, One Term.** Each architectural concept shall have exactly one preferred canonical term.
2. **One Term, One Concept.** Each preferred term shall represent exactly one architectural concept.
3. **Governance Approval.** Introducing new terms or changing existing terms requires governance approval.
4. **Consistent Usage.** Canonical terms shall be used consistently across all Framework documentation.
5. **Synonym Documentation.** Accepted synonyms must be explicitly documented and linked to the preferred term.
6. **Deprecated Term Retention.** Deprecated terms shall remain documented with their replacement and deprecation rationale until fully retired.
7. **Lifecycle Management.** Every term shall carry a lifecycle status (Draft, Approved, Canonical, Historical, Deprecated) and be traceable to its defining authority.

---

*End of Appendix C: Terminology Glossary Extract*

# A.5.0 — Engine Specialization RFC Template

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization Template · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-5-0` |
| Title | A.5.0 — Engine Specialization RFC Template |
| Version | `0.3.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Engine Specialization RFC Template |
| Document Type | RFC Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-08 |
| Last Updated | 2026-07-11 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.A.005.0` |
| Scope | Defines the Engine Specialization RFC contract, required section structure, validation model, and TPL-001 compliance expectations for A.5.x Engine Specialization RFCs. |
| Out of Scope | Runtime Architecture redefinition, Engine Platform redefinition, individual Engine behavior definition, implementation, certification execution, freeze decisions, ProjectStatus updates, and DevelopmentPhases updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | A.3 Runtime Architecture; A.4 Engine Architecture; A.4.1 through A.4.7 Engine Foundation RFCs; STD-003; STD-010; TPL-000; TPL-001 |
| Consumes | Runtime Architecture, Engine Platform Architecture, Engine Foundation RFCs, canonical terminology, metadata rules, template governance, and RFC template rules. |
| Produces | Engine Specialization RFC template contract, TPL-001 section mapping, validation model, and Engine-specific subsection guidance for A.5.x RFCs. |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/README.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.12-Registry-Engine-RFC.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | STD-010 metadata validation, STD-003 terminology validation, TPL-001 RFC-structure validation, TPL-001 specialization compliance, Runtime README navigation alignment, ownership-boundary validation, Framework Governance review, Human Governance approval, and explicit canonical promotion. |
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

</details>

---

## Executive Summary

A.5.0 defines the template contract for every individual Engine RFC in Phase 2 of the AI-DOS v4 Engine specialization effort. It specializes TPL-001 (RFC Template Standard) by mapping TPL-001's 20 mandatory output sections to Engine-specific subsection requirements, preserving all TPL-001 mandatory sections while adding domain-specific structural depth for Engine architecture, behaviour, inputs, outputs, contracts, ownership, and handoff. This template consumes the Engine Platform without redefining it, enforces STD-010 metadata compliance, and provides differentiated author guidance for Engine-specific content areas.

---

## Purpose

A.5.0 exists to create a single, authoritative structural contract for every individual Engine RFC produced during Phase 2 Engine specialization. Without this template, each Engine RFC would risk divergent section structure, inconsistent metadata, unclear ownership boundaries, ambiguous handoff contracts, and unpredictable validation outcomes. Each of these risks erodes the trust that downstream consumers — including reviewers, certifiers, implementers, and governance bodies — place in Engine RFC documents as architectural decision records for specific Engine capabilities.

The purpose of A.5.0 is fourfold. First, it maps TPL-001's 20 mandatory RFC output sections to Engine-specific content requirements, ensuring that every Engine RFC produced from this template contains both the TPL-001-required structural foundation and the Engine-specific architectural depth necessary to define a distinct Engine capability. Second, it defines the governance boundaries that separate Engine template authoring from Engine Platform authoring, ensuring that Engine RFCs describe what a specific Engine does within the platform rather than redefining how the platform itself works. Third, it provides the validation model that allows reviewers, certifiers, and automated tooling to determine whether a given Engine RFC conforms to both TPL-001 and this domain template. Fourth, it establishes the Specializable versus Structural section classification that enables authors to focus architectural effort on the 16 content-differentiating sections while maintaining governance consistency across the structural sections.

A.5.0 is a domain specialization of TPL-001. It governs the form and domain-specific content requirements of Engine RFCs. It does not govern the architectural substance of individual Engines beyond what TPL-001 permits for domain specializations, the Runtime behavior those Engines may describe, or the Engine Platform contracts those Engines may consume. Architectural substance remains the domain of the individual Engine RFC and its designated reviewers.

---

## Scope

### In Scope

A.5.0 governs:

1. The section structure and content contract for every individual Engine RFC produced during Phase 2 Engine specialization.
2. The mapping of TPL-001's 20 mandatory RFC output sections to Engine-specific subsection requirements.
3. The classification of Engine RFC sections as Specializable (requiring Engine-specific content) or Structural (requiring governance-consistent content).
4. The Universal Section Contract that applies common requirements to every section of every Engine RFC.
5. The Template Application Rules that every Engine RFC shall follow when authored from this template.
6. The Engine Ownership contract defining governance accountability, maintained boundaries, decision rights, validation obligations, review obligations, certification responsibilities, and ownership handoff limitations.
7. The Engine Handoff Contract defining handoff prerequisites, required evidence, validated outputs, snapshot expectations, receiving consumers, failure handling, audit record expectations, and certification gates.
8. The Author Guidance for all 16 Specializable sections, providing Engine-specific content direction without prescribing boilerplate.
9. The validation model covering metadata, structural, scope, content quality, and TPL-001 compliance dimensions.
10. The mandatory Out of Scope items that every Engine RFC shall include regardless of Engine-specific additions.

### Out of Scope

A.5.0 does not:

1. Redefine Runtime Architecture (A.3).
2. Redefine Engine Platform Architecture (A.4) or any Engine Foundation RFC (A.4.1 through A.4.7).
3. Define the architectural content or behaviour of any individual Engine.
4. Replace or restate STD-010 metadata field definitions or rules.
5. Replace or restate TPL-001 RFC mandatory section definitions or validation rules.
6. Replace or restate TPL-000 template governance, lifecycle, or compliance model.
7. Govern non-Engine RFC documents (A.3, A.4.x, STD family, M family, reports, blueprints).
8. Implement template validation tooling or automated enforcement scripts.
9. Execute certification for individual Engine RFCs.
10. Author or freeze specific Engine RFC content.
11. Update ProjectStatus or DevelopmentPhases roadmap.

---

## Normative Authority

| Authority | Relationship |
|:---|:---|
| Human Governance | Ultimate approval and canonical promotion authority for all AI-DOS v4 documents, including this template and all Engine RFCs produced from it. |
| `AGENTS.md` | Defines the AI agent behavioural boundaries and operational constraints that all AI-authored documents shall observe. |
| `docs/AI/GOVERNANCE.md` | Establishes the governance framework, review processes, and approval workflows that this template and its produced RFCs shall follow. |
| `docs/AI/FrameworkGovernance.md` | Defines framework-level governance policies, conflict resolution, exception handling, and escalation procedures. |

---

## Normative References

| Reference | Full Path | Consumption |
|:---|:---|:---|
| TPL-001 | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | Governing RFC template standard; A.5.0 specializes TPL-001 for the Engine domain. Provides the 20 mandatory output sections, optional section catalog, specialization model, validation rules, and anti-patterns that every RFC template shall follow. |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Governing template standard; defines template lifecycle, taxonomy, compliance levels, placeholder grammar, naming conventions, and validation model. A.5.0 operates at the TPL-000 "Standard" compliance level. |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Governing metadata standard; defines the metadata schema, mandatory fields, relationship taxonomy, version rules, and document class expectations that this template and all Engine RFCs shall follow. |
| STD-003 | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Canonical terminology standard; defines the terminology that this template and all Engine RFCs shall use for Engine, Platform, Runtime, Kernel, and related concepts. |

---

## Dependencies

| Dependency | Relationship | Impact if Missing |
|:---|:---|:---|
| A.3 Runtime Architecture | Governing architectural context for all Runtime documents including Engine RFCs | Engine RFCs would lack the architectural context that defines their operational environment |
| A.4 Engine Architecture | Governing Engine Platform definition, capability model, and contract framework | Engine RFCs would lack the platform boundary that separates Engine specialization from platform definition |
| A.4.1 Engine Kernel RFC | Kernel contract and mediation rules that all Engines consume | Engine RFCs could not define their interaction with the Kernel layer |
| A.4.2 Engine Metadata RFC | Metadata model for Engine identity, classification, and tracking | Engine RFCs would lack a consistent metadata foundation |
| A.4.4 Engine Lifecycle RFC | Lifecycle state machine that all Engines must follow | Engine RFCs could not define Engine-specific lifecycle behaviour within the platform model |
| A.4.5 Engine Communication RFC | Communication types, modes, and failure/recovery model | Engine RFCs could not define Engine-specific communication patterns |
| A.4.6 Engine State RFC | State categories, visibility model, and synchronization rules | Engine RFCs could not define Engine-specific state management |
| A.4.7 Engine Capability RFC | Capability taxonomy and registration model | Engine RFCs could not reference the capability domains they fulfill |
| STD-010 | Document metadata schema and compliance rules | Metadata blocks would be inconsistent and non-compliant |
| STD-003 | Canonical terminology | Terminology would be inconsistent across Engine RFCs |
| TPL-000 | Template governance and lifecycle model | Template would lack governing template authority |
| TPL-001 | RFC template standard and mandatory section structure | Template would lack the RFC structural foundation it specializes |

---

## Architecture

### TPL-001 Specialization Model

A.5.0 specializes TPL-001 for the Engine domain. The specialization hierarchy is:

```
TPL-000 (Template Standard)
  └── TPL-001 (RFC Template Standard)
       └── A.5.0 (Engine Specialization RFC Template)
            └── A.5.1, A.5.2, ... A.5.x (Individual Engine RFCs)
```

A.5.0 adds Engine-specific subsection requirements within TPL-001's 20 mandatory sections. It does not remove any TPL-001 mandatory section, relax any TPL-001 validation criterion, or conflict with TPL-001 governance boundaries. Per TPL-001 Section 6.3, domain specialization may add mandatory subsections, tighten validation criteria, or add domain-specific metadata expectations.

### Template Application Rules

Every Engine RFC created from this template shall:

1. Follow the TPL-001 mandatory section order defined in the Engine RFC Section Mapping (Section A.1 in Appendix A).
2. Include a STD-010-compliant `## Document Metadata` section using the exact heading, table shape, and mandatory fields defined by STD-010 Section 4.
3. Apply the Universal Section Contract (below) to every section.
4. Specialize only the subsections listed as Specializable in the Engine RFC Section Mapping.
5. Keep Structural subsections consistent with the guidance provided for each.
6. Remain Draft / Non-canonical until reviewed and approved through Framework Governance.
7. Avoid implementation scope: no source code, APIs, persistence, database schema, Neo4j specifics, vector database, caching, LLM calls, prompt engineering, agent runtime, swarm runtime, platform adapters, or ProjectStatus updates.
8. Define validation and certification requirements before handoff.
9. Include the mandatory Out of Scope items (Section 9, Out of Scope) regardless of Engine-specific additions.
10. Include the mandatory Version History section as the final section, never truncating prior entries.

### Universal Section Contract

This contract applies to every section of every Engine RFC produced from this template. Instead of repeating this contract per section, each Engine RFC shall reference this contract and comply with its requirements.

#### Contract Elements

| Contract Element | Requirement |
|:---|:---|
| **Purpose** | State the role of this section in the Engine RFC and explain why it is required for governed Engine specialization. |
| **Architectural Responsibility** | Describe the section's concerns while preserving Engine Platform alignment. The section shall not redefine Runtime, Kernel, Contract, Registry, Lifecycle, Communication, State, Capability, metadata, terminology, artifacts, authority, or ownership models defined upstream. |
| **Mandatory Content** | Provide Engine-specific content where the section is Specializable, or governance-consistent content where the section is Structural. Content shall use traceable inputs, versioned outputs where applicable, deterministic rules, validation expectations, and explicit boundaries. |
| **Forbidden Content** | No implementation details, source code, APIs, persistence mechanisms, platform-specific behaviour, agent/swarm runtime design, or redefinition of upstream Engine Platform responsibilities. |

#### Artifact Flow Per Section

| Flow | Description |
|:---|:---|
| **Consumed Artifacts** | Applicable authority documents (A.1, `AGENTS.md`, Framework Governance), STD-000, STD-003, STD-010, M.0, M.1, A.3, A.4, A.4.1 through A.4.7, and prior certified or draft Engine RFCs relevant to the section. |
| **Produced Artifacts** | The section content itself, section-level validation evidence, and traceable RFC material for downstream review and Engine handoff. |

#### Structural Section Abbreviation

For Structural subsections where the content follows the standard governance pattern, the author may satisfy the Purpose and Architectural Responsibility contract elements with a single statement referencing this Universal Section Contract, provided the section still includes all Mandatory Content specific to its designation.

### Engine Ownership Contract

This contract defines the governance accountability requirements for the Ownership section of every Engine RFC. The following elements are mandatory in every Engine RFC's Ownership section:

| Element | Requirement |
|:---|:---|
| **Accountable Owner** | A named individual or role — not an ambiguous group. The owner is accountable for architectural correctness, governance alignment, and certification readiness. |
| **Maintained Boundaries** | What the owner controls and what falls outside their authority. |
| **Decision Rights** | Which architectural decisions the owner may make autonomously vs. which require governance escalation. |
| **Validation Obligations** | What the owner must validate before requesting review or certification. |
| **Review Obligations** | What the owner must present for review and to which review authority. |
| **Certification Responsibilities** | What evidence the owner must produce to support certification. |
| **Ownership Handoff Limitations** | Conditions under which ownership may transfer; prohibitions on silent or implicit authority transfer. |

### Engine Handoff Contract

This contract defines the requirements for the handoff subsection within the Interfaces section of every Engine RFC. The following elements are mandatory:

| Element | Requirement |
|:---|:---|
| **Handoff Prerequisites** | Conditions that must be satisfied before a handoff is initiated. |
| **Required Evidence** | Artifacts, validation records, and state snapshots that must accompany the handoff. |
| **Validated Outputs** | A list of outputs that have passed validation and are ready for consumption. |
| **Snapshot Expectations** | Whether the handoff requires immutable output snapshots and their retention requirements. |
| **Receiving Consumers** | Named downstream Engines or components that are the intended recipients. |
| **Failure Handling** | What happens when handoff validation fails — retry logic, escalation, and rollback expectations. |
| **Audit Record Expectations** | What audit trail the handoff must produce for governance and certification. |
| **Certification Gates** | Which certification requirements must be satisfied before the handoff state transition is permitted. |

### Out of Scope Mandatory Items

Every Engine RFC's Out of Scope section shall include the following items regardless of Engine-specific additions. The author may add additional items but shall not remove any mandatory item:

1. Source code and implementation details
2. REST endpoints, API definitions, and transport protocols
3. Persistence mechanisms, database schema, Neo4j specifics, and vector database configuration
4. Caching strategies and infrastructure
5. LLM call orchestration, prompt engineering, and model selection
6. Agent runtime design and swarm runtime design
7. Platform adapter specifications
8. ProjectStatus updates
9. Certification execution (as distinct from certification requirements)

---

## Design Decisions

### DD-1: TPL-001 Section Mapping Instead of Independent Section Structure

**Context**: The prior version of A.5.0 defined 31 independent sections for Engine RFCs, which did not align with TPL-001's 20 mandatory output sections. This created a structural conflict: A.5.0 claimed TPL-001 as a normative reference but produced RFCs that did not follow TPL-001's required section structure.

**Options considered**: (a) Keep 31 independent sections and declare A.5.0 as an exception to TPL-001; (b) Reduce to 20 sections by discarding Engine-specific content; (c) Map TPL-001's 20 mandatory sections as the top-level structure and place Engine-specific content as subsections within those 20 sections.

**Decision**: Option (c). TPL-001's 20 sections form the top-level structure. The 16 Engine-specific content areas from the prior template become subsections within TPL-001's Architecture, Interfaces, Lifecycle, Validation, Ownership, and Completion Criteria sections. This preserves TPL-001 compliance without discarding any Engine-specific architectural depth.

**Rationale**: Per TPL-001 Section 6.3, domain specialization "may add mandatory sections" but "shall not remove TPL-001 mandatory sections." Mapping Engine-specific content as subsections within TPL-001 sections is the only approach that satisfies both TPL-001 compliance and Engine architectural completeness. Option (a) would violate TPL-001 Section 6.3. Option (b) would lose critical Engine-specific content that differentiates one Engine from another.

### DD-2: Specializable versus Structural Classification Preserved

**Context**: The prior version classified Engine RFC sections into Specializable (16 sections requiring Engine-specific content) and Structural (15 sections requiring governance-consistent content). This classification provided clear author guidance on where to invest architectural effort.

**Options considered**: (a) Remove the classification and treat all sections uniformly; (b) Preserve the classification and remap it to the TPL-001 subsection structure; (c) Introduce a third classification tier.

**Decision**: Option (b). The Specializable/Structural classification is preserved and remapped to the TPL-001 subsection structure. Author guidance for each Specializable subsection is retained in Appendix A.

**Rationale**: The classification serves a practical purpose: it tells authors where they must produce original Engine-specific content versus where they should maintain governance consistency. Removing it (option a) would increase the risk of authors treating structural sections as creative opportunities or failing to invest sufficient effort in specializable sections. A third tier (option c) would add complexity without proportional benefit.

### DD-3: Universal Section Contract as DRY Mechanism

**Context**: The prior version of this template (pre-3.1.0-draft) included repeated per-section boilerplate tables defining purpose, architectural responsibility, mandatory content, and forbidden content for each of the 31 sections. This created approximately 66% redundancy.

**Options considered**: (a) Keep per-section boilerplate for maximum clarity; (b) Introduce a single Universal Section Contract referenced by all sections; (c) Move the contract to a separate companion document.

**Decision**: Option (b). A single Universal Section Contract defines four contract elements (Purpose, Architectural Responsibility, Mandatory Content, Forbidden Content) that apply to every section of every Engine RFC. Each Engine RFC references this contract rather than duplicating it.

**Rationale**: The DRY principle reduces maintenance burden and eliminates the risk of per-section contract drift. When the contract needs updating, it is updated in one place. Option (c) would fragment the template across multiple documents, increasing the risk of version skew between the template and its contract.

### DD-4: Engine Ownership as a Dedicated Subsection Within TPL-001 Ownership

**Context**: Engine Ownership in the prior template included seven mandatory elements (Accountable Owner, Maintained Boundaries, Decision Rights, Validation Obligations, Review Obligations, Certification Responsibilities, Ownership Handoff Limitations) that go beyond what TPL-001's generic Ownership section typically requires. These elements address Engine-specific governance concerns such as certification readiness and handoff limitations.

**Options considered**: (a) Flatten Engine Ownership into TPL-001's generic Ownership section without special treatment; (b) Define Engine Ownership as a dedicated subsection within TPL-001's Ownership section with its own mandatory elements; (c) Move Engine Ownership to a separate optional section.

**Decision**: Option (b). Engine Ownership is a dedicated subsection within TPL-001's Ownership section, preserving its seven mandatory elements as a domain-specific extension. This is consistent with TPL-001's optional section model (Section 16) which permits domain-specific depth within mandatory sections.

**Rationale**: Flattening (option a) would lose the Engine-specific governance depth that prevents ambiguous ownership, hidden authority transfer, and silent handoff. A separate section (option c) would conflict with TPL-001's Ownership section, creating duplication. The subsection approach preserves both TPL-001 compliance and Engine governance rigour.

### DD-5: Engine Handoff Contract as a Subsection Within TPL-001 Interfaces

**Context**: The prior template defined Engine Handoff Contract as a standalone section (Section 31) with eight mandatory elements. This section defines the contract for transferring validated outputs from one Engine to downstream consumers — a critical architectural boundary.

**Options considered**: (a) Absorb Handoff Contract into TPL-001's Interfaces section as a subsection; (b) Keep Handoff Contract as a standalone section after TPL-001's 20 mandatory sections; (c) Merge Handoff Contract into TPL-001's Validation section.

**Decision**: Option (a). Engine Handoff Contract becomes a subsection within TPL-001's Interfaces section. The Interfaces section defines "interfaces, contracts, or boundaries the RFC defines or consumes" (TPL-001 Section 15.1), which directly encompasses the handoff contract between Engines.

**Rationale**: The handoff contract is fundamentally an interface — it defines the boundary between a producing Engine and its consuming Engines. Placing it in Interfaces preserves its eight mandatory elements while maintaining TPL-001 structural compliance. Option (b) would create a 21st top-level section, violating TPL-001's 20-section requirement. Option (c) would conflate validation criteria with contractual boundaries.

### DD-6: Completion Report Removal and Risk Migration

**Context**: The prior version included a Completion Report section (Section 7) containing an executive summary, architecture decisions, STD-010 compliance notes, a validation checklist, remaining risks, and a recommended next step. Completion Reports are non-standard artifacts not defined in TPL-001's mandatory or optional section catalog.

**Options considered**: (a) Keep Completion Report as a domain-specific optional section; (b) Remove Completion Report and redistribute its content to TPL-001-aligned sections; (c) Move Completion Report to an appendix.

**Decision**: Option (b). Completion Report is removed as a top-level section. Its architecture decisions are preserved in the Design Decisions section. Its remaining risks are preserved in the Risks section. Its validation content is preserved in the Validation section. Its STD-010 compliance notes are inherent in the metadata and validation model.

**Rationale**: TPL-001 does not define a Completion Report section. Including it creates a structural deviation from TPL-001. The content within the Completion Report is architecturally valuable and is redistributed to the appropriate TPL-001 sections where it belongs. Appendix placement (option c) would preserve the artifact rather than properly classifying its content into TPL-001's section taxonomy.

---

## Ownership

| Role | Party | Accountability |
|:---|:---|:---|
| **Owner** | Framework Architecture Team | Accountable for template architectural correctness, TPL-001 compliance, governance alignment, and certification readiness of this template and all Engine RFCs produced from it. |
| **Maintainers** | Framework Architecture Team | Responsible for template upkeep, author guidance updates, validation model maintenance, and TPL-001 synchronization. |
| **Review Authority** | Framework Governance | Responsible for reviewing template structural compliance, TPL-001 alignment, and Engine RFC conformity before advancement. |
| **Approval Authority** | Human Governance | Responsible for approving template promotion to canonical status and authorizing Engine RFC canonical promotions. |

---

## Responsibilities

1. Maintain TPL-001 compliance for this template and all Engine RFCs produced from it, ensuring the 20 mandatory section structure is preserved and the specialization model is respected.
2. Preserve the Specializable versus Structural section classification and provide clear, actionable author guidance for each Specializable subsection.
3. Enforce the Universal Section Contract as the single source of truth for per-section requirements, preventing per-section contract drift.
4. Maintain the Engine Ownership contract's seven mandatory elements to prevent ambiguous ownership, hidden authority transfer, and silent handoff across all Engine RFCs.
5. Maintain the Engine Handoff Contract's eight mandatory elements to ensure validated, auditable, certification-gated handoffs between Engines.
6. Keep the validation model synchronized with TPL-001 validation rules, STD-010 metadata requirements, and Engine Platform architectural changes.
7. Ensure every Engine RFC's mandatory Out of Scope items remain complete and non-removable regardless of Engine-specific additions.
8. Provide section mapping guidance (Appendix A) that enables authors to correctly place Engine-specific content within TPL-001's 20 mandatory sections.

---

## Non Responsibilities

1. A.5.0 is not responsible for defining the architectural content, behaviour, or capability domain of any individual Engine — that is the domain of the individual Engine RFC (A.5.x).
2. A.5.0 is not responsible for redefining Runtime Architecture (A.3), Engine Platform Architecture (A.4), or any Engine Foundation RFC (A.4.1 through A.4.7) — it consumes them without modification.
3. A.5.0 is not responsible for implementing template validation tooling, automated enforcement scripts, or CI/CD pipeline integration — those are infrastructure concerns governed by implementation standards.
4. A.5.0 is not responsible for executing certification reviews or approving individual Engine RFCs — those are governance responsibilities of Framework Governance and Human Governance.
5. A.5.0 is not responsible for defining LLM prompts, model selection, or AI consumption boundaries for Engine RFC authoring — those are governed by AI consumption rules at the implementation level.
6. A.5.0 is not responsible for ProjectStatus updates, DevelopmentPhases roadmap management, or sprint planning — those are project management concerns outside the template's architectural scope.

**Prohibitions**:

- Shared or ambiguous ownership without a single accountable party in any Engine RFC.
- Ownership claims that bypass Framework Governance in any Engine RFC.
- Implementation-team authority over architectural decisions in any Engine RFC.
- Hidden authority transfer through delegation without governance record in any Engine RFC.
- Unvalidated handoff — all outputs must pass validation before transfer.
- Implicit acceptance by the receiving Engine in any handoff.
- Handoff that bypasses certification requirements.
- Alternative metadata headings (e.g., `## Metadata`, `## Header`) in any Engine RFC.
- Non-standard metadata table shapes in any Engine RFC.
- Merged relationship fields (e.g., combining Dependencies and Consumes into one field) in any Engine RFC.
- Claims that complete metadata makes an Engine RFC canonical.

---

## Interfaces

### Interface 1: TPL-001 Consumption Boundary

A.5.0 consumes TPL-001 as its governing RFC template standard. The consumption interface is defined by TPL-001's specialization model (Section 6.3):

- A.5.0 shall preserve all 20 TPL-001 mandatory output sections.
- A.5.0 may add subsections within those 20 sections.
- A.5.0 may tighten validation criteria beyond TPL-001's minimum.
- A.5.0 shall not remove, rename, or reorder TPL-001 mandatory sections.
- A.5.0 shall not conflict with TPL-001 governance boundaries.

### Interface 2: Engine RFC Production Boundary

A.5.0 produces Engine RFCs that conform to both TPL-001 and this template. The production interface is defined by:

- The Engine RFC Section Mapping (Appendix A) that specifies which TPL-001 section receives which Engine-specific subsections.
- The Universal Section Contract that defines the common per-section requirements.
- The Engine Ownership Contract that defines the mandatory ownership elements.
- The Engine Handoff Contract that defines the mandatory handoff elements.
- The Template Application Rules that define the behavioural constraints on Engine RFC authors.

### Interface 3: Engine Platform Consumption Boundary

Every Engine RFC produced from this template shall consume the Engine Platform without redefining it. The consumption interface is defined by:

- A.4 Engine Architecture as the platform contract.
- A.4.1 through A.4.7 as the individual capability and contract foundations.
- A.4.4 Engine Lifecycle as the lifecycle model that Engine-specific lifecycle behaviour shall specialize.
- A.4.6 Engine State as the state model that Engine-specific state management shall specialize.
- A.4.7 Engine Capability as the capability taxonomy that Engine-specific capabilities shall reference.

### Interface 4: Engine Handoff Contract

This interface defines the contract for transferring validated outputs from one Engine to downstream consumers. Every Engine RFC shall include this contract as a subsection within the Interfaces section.

| Element | Requirement |
|:---|:---|
| **Handoff Prerequisites** | Conditions that must be satisfied before a handoff is initiated. |
| **Required Evidence** | Artifacts, validation records, and state snapshots that must accompany the handoff. |
| **Validated Outputs** | A list of outputs that have passed validation and are ready for consumption. |
| **Snapshot Expectations** | Whether the handoff requires immutable output snapshots and their retention requirements. |
| **Receiving Consumers** | Named downstream Engines or components that are the intended recipients. |
| **Failure Handling** | What happens when handoff validation fails — retry logic, escalation, and rollback expectations. |
| **Audit Record Expectations** | What audit trail the handoff must produce for governance and certification. |
| **Certification Gates** | Which certification requirements must be satisfied before the handoff state transition is permitted. |

**Prohibited**:
- Unvalidated handoff (all outputs must pass validation before transfer).
- Implicit acceptance by the receiving Engine.
- Runtime transport details, API definitions, or queue mechanics.
- Persistence schema or storage specifications.
- Handoff that bypasses certification requirements.

---

## Lifecycle

A.5.0 follows the TPL-000 template lifecycle and the TPL-001 RFC lifecycle as a domain-specialized RFC template. The lifecycle states are:

| State | Entry Condition | Exit Condition | Governance Action |
|:---|:---|:---|:---|
| **Draft** | Initial creation | All mandatory sections complete, self-validation passed | Author declares readiness for review |
| **Review** | Author submits for review | Review findings resolved or waived | Framework Governance conducts structured review |
| **Approved** | Review passed with no blocking findings | Certification evidence produced or waived | Framework Governance records approval |
| **Certified** | Certification evidence accepted | Human Governance authorization for promotion | Certification authority validates evidence |
| **Canonical** | Human Governance promotion authorization | Superseded by new version or deprecated | Governance records canonical status, updates Governance Atlas |
| **Deprecated** | Newer version canonical or governance decision | No longer referenced by active documents | Governance records deprecation |
| **Legacy** | Deprecated and no longer consumed | Archived | Governance records legacy status |
| **Archived** | Legacy and no longer needed for traceability | Retained for historical reference only | Governance archives document |
| **Retired** | Archived and no longer needed for any purpose | Document removed from active access | Governance retires document |

### Template-Specific Lifecycle Considerations

When A.5.0 advances from Draft to Review, the following template-specific conditions shall be verified:

1. All 20 TPL-001 mandatory sections are present with substantive content.
2. The Engine RFC Section Mapping (Appendix A) is complete and correctly maps all Engine-specific subsections.
3. The Universal Section Contract is referenced and followed throughout.
4. The Engine Ownership Contract's seven mandatory elements are defined.
5. The Engine Handoff Contract's eight mandatory elements are defined.
6. The validation model covers all four dimensions (metadata, structural, scope, content quality).
7. TPL-001 specialization compliance is verified (no mandatory sections removed, no conflicts with TPL-001 governance boundaries).

---

## Validation

### V.1 STD-010 Metadata Validation

| Check | Requirement |
|:---|:---|
| Metadata heading | Exactly `## Document Metadata` |
| Table shape | Exactly `\| Field \| Value \|` with left-aligned columns |
| Mandatory fields | All 25 STD-010 Section 4.2 fields present |
| Conditionally mandatory fields | Included where applicable (Blocks, Blocked By, Review Status, Compliance Level) |
| Authority separation | Normative Authority does not include references, dependencies, consumed documents, or related documents |
| Relationship separation | Normative References, Dependencies, Consumes, Produces, Related Specifications are separate fields |
| Non-canonical status | `Canonical Status` explicitly states non-canonical |
| Owner accountability | Exactly one Owner identified |
| Version format | Follows STD-010 Section 4.6 |
| No implied promotion | Complete metadata does not claim canonical status |

### V.2 TPL-001 Structural Validation

| Check | Requirement |
|:---|:---|
| Section order | Follows TPL-001 Section 15.1 order (20 mandatory sections) |
| Section count | All 20 TPL-001 mandatory sections present |
| No section removed | No TPL-001 mandatory section is missing or merged |
| No section redefined | No section redefines upstream Engine Platform models |
| Specialization compliance | Engine-specific subsections are within (not replacing) TPL-001 sections |
| Version History present | Version History is the final section and is non-empty |

### V.3 Scope Validation

| Check | Requirement |
|:---|:---|
| No implementation | No source code, APIs, REST, persistence, or database schema |
| No LLM details | No prompt engineering, model selection, or LLM call orchestration |
| No runtime details | No agent runtime, swarm runtime, or platform adapter specifics |
| No ProjectStatus | No ProjectStatus update or reference |
| Out of Scope present | Out of Scope section includes all mandatory exclusions (Section 9) |
| No platform redefinition | Engine RFC does not redefine A.4, A.4.1–A.4.7, A.3, or any upstream standard |

### V.4 Content Quality Validation

| Check | Requirement |
|:---|:---|
| Specializable subsections | All 16 Specializable subsections contain Engine-specific content |
| No boilerplate-only | No Specializable subsection contains only template language |
| Traceable inputs | Consumed Inputs reference producing components |
| Versioned outputs | Produced Outputs define versioning strategy |
| Deterministic rules | Resolution and Validation rules are deterministic |
| Testable invariants | Engine Invariants are expressible as assertions |
| Ownership explicit | Ownership subsection names a single accountable party with all seven mandatory elements |
| Handoff evidence | Handoff Contract subsection defines all eight mandatory elements |
| Design Decisions | At least one design decision with context, options, and rationale |
| Open Questions | Non-empty at Draft stage (per TPL-001 Section 15.2) |

### V.5 TPL-001 Specialization Validation

| Check | Requirement |
|:---|:---|
| TPL-001 hierarchy | A.5.0 declares TPL-001 as normative reference and follows its specialization model |
| Section mapping | Engine-specific content is placed as subsections within TPL-001 sections, not as independent top-level sections |
| Optional sections | Any sections beyond the 20 mandatory ones follow TPL-001 Section 16.2 rules (appear after mandatory sections, do not rename or merge mandatory sections) |
| Anti-pattern avoidance | No TPL-001 Section 30 anti-patterns are present |

---

## Risks

### Risk-1: Author Misinterpretation of Subsection Mapping

**Severity**: Medium
**Likelihood**: Medium
**Impact**: Authors may place Engine-specific content at the wrong TPL-001 section level (e.g., placing Internal Engine Model content under Interfaces instead of Architecture), resulting in structurally compliant but architecturally disorganized Engine RFCs.
**Mitigation**: The Engine RFC Section Mapping (Appendix A) provides an explicit subsection-to-TPL-001-section mapping. Each Specializable subsection includes author guidance with consideration questions. Review validation (V.4) checks for content placement correctness.

### Risk-2: TPL-001 Drift

**Severity**: High
**Likelihood**: Low
**Impact**: If TPL-001 is updated (e.g., mandatory sections change, specialization rules change), A.5.0 may become non-compliant, cascading non-compliance to all A.5.x Engine RFCs.
**Mitigation**: A.5.0 declares TPL-001 as a normative reference with full path. The validation model includes TPL-001 specialization compliance checks (V.5). Any TPL-001 update shall trigger an A.5.0 review cycle.

### Risk-3: Over-Constraint of Engine-Specific Content

**Severity**: Medium
**Likelihood**: Medium
**Impact**: The combination of TPL-001's 20 mandatory sections, A.5.0's Universal Section Contract, Engine Ownership Contract, and Engine Handoff Contract may constrain authors to the point where Engine-specific architectural depth is sacrificed for compliance.
**Mitigation**: The Specializable versus Structural classification directs effort to the 16 content-differentiating subsections. Structural subsections support abbreviated treatment via the Structural Section Abbreviation rule. Author guidance focuses on substantive content, not boilerplate compliance.

### Risk-4: Validation Tooling Gap

**Severity**: Low
**Severity**: Medium
**Impact**: No automated validation tooling exists to enforce the 25 validation checks across five dimensions. Compliance relies on author discipline and manual review.
**Mitigation**: The validation checklist (Section 16) is structured for both manual and future automated use. Each check is binary (pass/fail) and inspectable by grep or script. Future tooling can consume this checklist directly.

### Risk-5: Ownership Ambiguity in Practice

**Severity**: High
**Likelihood**: Low
**Impact**: Despite the seven mandatory Engine Ownership elements, authors may name "Framework Architecture Team" as the owner without identifying a specific accountable individual, resulting in shared or ambiguous ownership that violates the Single Owner Accountability principle.
**Mitigation**: The Ownership contract explicitly requires "a named individual or role — not an ambiguous group." The Non Responsibilities section prohibits shared ownership. Content quality validation (V.4) checks for explicit single-owner identification.

### Risk-6: Completion Report Content Loss

**Severity**: Low
**Likelihood**: Low
**Impact**: Removing the Completion Report section (a non-standard artifact) and redistributing its content to TPL-001-aligned sections may result in some context being lost if the redistribution mapping is incomplete.
**Mitigation**: All Completion Report content is explicitly mapped: architecture decisions to Design Decisions, remaining risks to Risks, validation content to Validation, and STD-010 compliance notes to the metadata and validation model. The mapping is traceable in this version's Design Decisions section (DD-6).

---

## Open Questions

1. **OQ-1: Should A.5.0 define a minimum content depth threshold for Specializable subsections?** The current template requires Engine-specific content but does not define a minimum depth (e.g., word count, number of paragraphs). Without a threshold, a Specializable subsection could contain a single sentence and still pass structural validation. A minimum depth rule would strengthen content quality validation but may conflict with the editorial-only refactoring principle if applied retroactively to existing Engine RFCs.

2. **OQ-2: How should Engine RFCs handle TPL-001 optional sections that overlap with Engine-specific concerns?** TPL-001 defines optional sections such as Security Considerations, Performance Considerations, and Testing Strategy. Engine RFCs may have Engine-specific security, performance, or testing concerns that could be placed either in the matching TPL-001 optional section or as a subsection within Architecture or Validation. A clear placement rule would prevent inconsistent treatment across Engine RFCs.

3. **OQ-3: Should the validation model define a compliance level taxonomy for Engine RFCs?** TPL-000 defines compliance levels (Base, Standard, Advanced, Composite). A.5.0 could define Engine-specific compliance levels (e.g., "Engine Standard" for TPL-001 + A.5.0 structural compliance, "Engine Advanced" for structural + content quality compliance) to provide more granular certification readiness assessment.

4. **OQ-4: How should version conflicts between A.5.0 and TPL-001 be resolved during the Draft-to-Review transition?** If TPL-001 is updated while A.5.0 is in Draft, the Engine RFC currently in review may reference a stale TPL-001 version. A version pinning or synchronization protocol would prevent this drift.

---

## Completion Criteria

A.5.0 shall be considered complete when all of the following are true:

1. All 20 TPL-001 mandatory sections are present with substantive content.
2. The Engine RFC Section Mapping (Appendix A) correctly maps all 16 Specializable subsections to TPL-001 sections.
3. The Universal Section Contract, Engine Ownership Contract, and Engine Handoff Contract are complete and unambiguous.
4. The validation model covers all five dimensions (metadata, structural, scope, content quality, TPL-001 specialization).
5. Author guidance for all 16 Specializable subsections is provided in Appendix A with consideration questions.
6. STD-010 metadata is fully compliant (all mandatory fields, correct table shape, correct heading).
7. TPL-001 specialization compliance is verified (no mandatory sections removed, no conflicts with TPL-001 governance boundaries, Engine-specific content as subsections within TPL-001 sections).
8. The first Engine RFC (A.5.1 — Context Engine RFC) has been successfully authored using this template, demonstrating that the template is actionable and produces TPL-001-compliant output.
9. Framework Governance has reviewed and approved the template structure.
10. Version History records all changes from the prior version with rationale.

---

## Version History

| Version | Status | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:---|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `0.1.0-draft` | Draft | Initial creation as independent Engine Specialization RFC Template with 31-section structure. Pre-TPL-001 alignment.                                                                                                                                                                                                                                                                                                                            |
| `0.2.0-draft` | Draft | Restructured with Universal Section Contract, Specializable/Structural classification, DRY principles, expanded author guidance, and strengthened validation checklist (22 checks across 4 dimensions).                                                                                                                                                                                                                                         |
| `0.3.0-draft` | Draft | Refactored to TPL-001 compliance: remapped from 31 independent sections to TPL-001's 20 mandatory output sections with Engine-specific subsections. Added 6 Design Decisions, 6 Risks, 4 Open Questions, Ownership, Responsibilities, Non Responsibilities with Prohibitions, Interfaces, Lifecycle, and Version History. Removed Completion Report. Updated Traceability ID to AI-DOS.V3.A.005.0. All content preserved; no authority changes. |

---

## Appendix A: Engine RFC Section Mapping

This appendix defines how the 16 Engine-specific content areas from the prior template map to TPL-001's 20 mandatory output sections. Every Engine RFC produced from this template shall follow this mapping.

### A.1 Mapping Table

| Engine Content Area | TPL-001 Section | Subsection Heading | Category |
|:---|:---|:---|:---|
| Purpose | Purpose | ### Engine Purpose | Specializable |
| Mission | Purpose | ### Engine Mission | Specializable |
| Engine Responsibilities | Responsibilities | ### Engine Responsibilities | Specializable |
| Non Responsibilities | Non Responsibilities | ### Engine Non Responsibilities | Specializable |
| Engine Position | Architecture | ### Engine Position | Specializable |
| Internal Engine Model | Architecture | ### Internal Engine Model | Specializable |
| Resolution Rules | Architecture | ### Resolution Rules | Specializable |
| Engine State | Architecture | ### Engine State | Specializable |
| Engine Invariants | Validation | ### Engine Invariants | Specializable |
| Validation Rules | Validation | ### Validation Rules | Specializable |
| Consumed Inputs | Interfaces | ### Consumed Inputs | Specializable |
| Produced Outputs | Interfaces | ### Produced Outputs | Specializable |
| Engine Operations | Interfaces | ### Engine Operations | Specializable |
| Engine Events | Interfaces | ### Engine Events | Specializable |
| Engine Ownership | Ownership | ### Engine Ownership | Specializable |
| Engine Handoff Contract | Interfaces | ### Engine Handoff Contract | Specializable |
| Engine Lifecycle | Lifecycle | ### Engine Lifecycle | Specializable |
| Dependencies | Dependencies | (content within Dependencies section) | Structural |
| AI Consumption Rules | Architecture | ### AI Consumption Rules | Structural |
| Runtime Interaction Rules | Architecture | ### Runtime Interaction Rules | Structural |
| Extension Model | Architecture | ### Extension Model | Structural |
| Knowledge Graph Integration | Architecture | ### Knowledge Graph Integration | Structural |
| Certification Requirements | Validation | ### Certification Requirements | Structural |
| Performance Characteristics | Architecture | ### Performance Characteristics | Structural |
| Security & Governance | Architecture | ### Security & Governance | Structural |
| Future Consumers | Scope | (content within Scope section) | Structural |
| Success Criteria | Completion Criteria | (content within Completion Criteria section) | Structural |

### A.2 Author Guidance for Specializable Subsections

The following guidance applies to each Specializable subsection. For each, the author shall address the Universal Section Contract (Section 9, Architecture) and provide substantive Engine-specific material. The guidance below describes what each subsection should contain; it is not a boilerplate to be copied.

#### A.2.1 Engine Purpose (within Purpose)

Define the architectural reason this Engine exists within the AI-DOS v4 platform. Explain what problem it solves, what gap it fills, and why it cannot be subsumed by another Engine. Reference the Engine Platform's capability model (A.4.7) and demonstrate how this Engine's purpose aligns with a distinct capability domain.

*Consider*: What would break if this Engine did not exist? Which platform capability does it uniquely own?

#### A.2.2 Engine Mission (within Purpose)

State the mission-level objective this Engine pursues. The mission should be a clear, actionable statement that guides all design decisions within the RFC. It should be specific enough that two different authors would converge on similar architectural choices.

*Consider*: Is the mission statement testable? Can a reviewer determine whether a proposed design fulfills or violates the mission?

#### A.2.3 Engine Responsibilities (within Responsibilities)

Enumerate the architectural responsibilities of this Engine. Each responsibility should be a discrete, verifiable statement. Group responsibilities logically (e.g., input processing, state management, output production, error handling) rather than presenting a flat list.

*Consider*: Does each responsibility map to at least one operation or event? Are responsibilities mutually exclusive and collectively exhaustive for this Engine's domain?

#### A.2.4 Engine Non Responsibilities (within Non Responsibilities)

Enumerate what this Engine is explicitly not responsible for. This subsection prevents scope creep and clarifies boundaries with peer Engines. Each non-responsibility should reference which other Engine, standard, or platform component owns that concern.

*Consider*: For each non-responsibility, can you name the owning component? If not, the responsibility boundary may be ambiguous.

#### A.2.5 Engine Position (within Architecture)

Describe this Engine's position in the Engine topology. Explain where it sits in the data flow, which Engines feed it inputs, and which Engines consume its outputs. A positional diagram reference or topology description is expected.

*Consider*: Is the position unique? Does this Engine have multiple input or output paths? What happens if an upstream or downstream Engine is unavailable?

#### A.2.6 Internal Engine Model (within Architecture)

Describe the internal conceptual model of this Engine — its state structures, processing pipelines, decision logic, and internal data flow. This is the most architecturally dense subsection and should provide enough detail for a reviewer to understand how the Engine transforms inputs into outputs.

*Consider*: Is the model deterministic? Are there internal state transitions that are not visible externally? How does the model handle concurrent or conflicting inputs?

#### A.2.7 Resolution Rules (within Architecture)

Define how this Engine handles conflicts, ambiguities, and competing demands. Resolution rules should be deterministic — given the same inputs and state, the Engine should produce the same resolution outcome.

*Consider*: What happens when two inputs conflict? What is the priority ordering? Is there an escalation path when resolution fails?

#### A.2.8 Engine State (within Architecture)

Describe this Engine's state characteristics within the A.4.6 state model. Address which state categories this Engine uses, how state is synchronized, and what visibility rules apply.

*Consider*: Does this Engine introduce any Engine-specific state categories not covered by A.4.6? How is state consistency maintained across Engine operations?

#### A.2.9 Consumed Inputs (within Interfaces)

Define the typed inputs this Engine requires. For each input, describe its type, source, validation expectations, and what happens when the input is missing, malformed, or late. Inputs should be traceable to the producing Engine or component.

*Consider*: Are all inputs versioned? Is there a default or fallback for each input? Are input contracts explicit enough for the producing Engine to validate against them?

#### A.2.10 Produced Outputs (within Interfaces)

Define the typed outputs this Engine produces. For each output, describe its type, consumer(s), versioning strategy, and validation criteria. Outputs should be traceable to the consuming Engine or component.

*Consider*: Are outputs immutable snapshots or live references? Are output contracts explicit enough for the consuming Engine to validate against them? What is the output's lifecycle — when is it created, updated, and retired?

#### A.2.11 Engine Operations (within Interfaces)

Enumerate the operations this Engine exposes. For each operation, describe its purpose, inputs, outputs, side effects, and failure modes. Operations should align with responsibilities and be traceable to the Engine's purpose.

*Consider*: Is each operation idempotent where appropriate? Are operation preconditions and postconditions explicit? What is the operation's effect on Engine state?

#### A.2.12 Engine Events (within Interfaces)

Enumerate the events this Engine emits or reacts to. For each event, describe its trigger, payload, consumer(s), and expected consumer response. Events should be traceable to state transitions and operations.

*Consider*: Are event payloads versioned? What happens if an event consumer is unavailable? Are there critical events that must not be dropped?

#### A.2.13 Engine Ownership (within Ownership)

See Section 9, Engine Ownership Contract. The author shall fill in the specific owner, boundaries, and governance obligations for this Engine, addressing all seven mandatory elements.

#### A.2.14 Engine Handoff Contract (within Interfaces)

See Section 9, Engine Handoff Contract. The author shall define the specific handoff prerequisites, evidence, and certification gates for this Engine, addressing all eight mandatory elements.

#### A.2.15 Engine Lifecycle (within Lifecycle)

Describe how this Engine behaves within the A.4.4 Engine Lifecycle model. Address initialization, startup, steady-state operation, degradation, shutdown, and restart behaviour. Explain any Engine-specific lifecycle transitions or states not covered by the platform lifecycle model.

*Consider*: What are the initialization dependencies? What constitutes a graceful shutdown? What state must be persisted or recovered on restart?

#### A.2.16 Engine Invariants (within Validation)

State the properties that must always hold for this Engine regardless of state, inputs, or operations. Invariants are the strongest guarantees the Engine provides and should be few, precise, and verifiable.

*Consider*: Can each invariant be expressed as a testable assertion? Are invariants preserved across all lifecycle transitions? What breaks if an invariant is violated?

#### A.2.17 Validation Rules (within Validation)

Define the validation criteria for inputs, outputs, and internal state transitions. Validation rules should be specific enough to implement as test cases. Distinguish between hard validation (rejection) and soft validation (warning or degradation).

*Consider*: Are validation rules composable? Can validation be partially applied? What is the validation failure reporting format?

---

## Appendix B: Glossary

| Term | Definition |
|:---|:---|
| **Engine** | A specialized architectural component within the AI-DOS v4 Engine Platform that owns a distinct capability domain and produces validated outputs for downstream consumers. |
| **Engine RFC** | An RFC document that defines the architecture, behaviour, inputs, outputs, contracts, ownership, and handoff requirements for a single Engine. |
| **Engine Platform** | The architectural platform (A.4) that defines the common capability model, lifecycle, state, communication, registry, and governance framework within which individual Engines operate. |
| **Specializable Subsection** | A subsection within a TPL-001 mandatory section that requires Engine-specific content authored by the Engine RFC author. |
| **Structural Subsection** | A subsection within a TPL-001 mandatory section that requires governance-consistent content with minimal or no Engine-specific variation. |
| **Universal Section Contract** | The common set of four contract elements (Purpose, Architectural Responsibility, Mandatory Content, Forbidden Content) that applies to every section of every Engine RFC. |
| **Engine Handoff Contract** | The contract defining prerequisites, evidence, validated outputs, snapshot expectations, receiving consumers, failure handling, audit records, and certification gates for transferring outputs between Engines. |
| **Engine Ownership Contract** | The contract defining accountable owner, maintained boundaries, decision rights, validation obligations, review obligations, certification responsibilities, and ownership handoff limitations for a single Engine. |
| **TPL-001 Compliance** | Conformance to TPL-001's 20 mandatory output sections, section order, content rules, and specialization model. |

---

## Appendix C: Stakeholder Impact Matrix

| Stakeholder | Impact | What Changes for Them |
|:---|:---|:---|
| **Engine RFC Authors** | High | Authors must now follow TPL-001's 20-section structure with Engine-specific content as subsections, replacing the prior 31-section flat structure. The Appendix A mapping table guides placement. |
| **Framework Governance (Reviewers)** | Medium | Reviewers validate against TPL-001's 20 mandatory sections plus A.5.0's 25 validation checks across five dimensions (previously four). The TPL-001 specialization validation (V.5) is new. |
| **Human Governance (Approvers)** | Low | Approval process unchanged. TPL-001 compliance is now explicitly verifiable, potentially simplifying promotion decisions. |
| **A.5.x Engine RFCs (Existing Drafts)** | High | Existing A.5.x Engine RFCs authored against the prior 31-section template must be remapped to the TPL-001 20-section structure. No content is lost; content is reorganized into subsections. |
| **A.4.x Engine Foundation RFCs** | None | Engine Foundation RFCs are not affected. They follow TPL-001 directly (already refactored) and are consumed by A.5.0 without modification. |
| **Certification Authority** | Medium | Certification evidence now includes TPL-001 structural compliance as an explicit dimension. The validation model provides a clear, checkable certification readiness baseline. |

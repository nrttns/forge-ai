# TPL-001 — RFC Template Standard

>AI-DOS v3 · Standards Library
> Template Standard · RFC Template Authority · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-001` |
| Title | TPL-001 — RFC Template Standard |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Documentation Standard |
| Document Type | Framework Standard / Template Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V3.TPL-001` |
| Scope | Standard structure, content contract, taxonomy, lifecycle, validation, naming, traceability, versioning, review, approval, certification, promotion, compliance, and anti-patterns for every RFC template used byAI-DOS |
| Out of Scope | Redefining STD-010, redefining TPL-000, redefining Runtime Architecture, redefining Engine Platform, normalizing existing RFC documents, implementing template tooling, and authoring specific domain RFCs |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md` |
| Dependencies | STD-010 (metadata schema); TPL-000 (template governance, lifecycle, validation model, compliance levels, placeholder grammar); STD-003 (canonical terminology); M.0 (framework meta model); M.1 (artifact meta model); Framework Governance (review, approval, promotion, certification workflow) |
| Consumes | STD-010 metadata schema; STD-003 canonical terminology; TPL-000 template lifecycle, taxonomy, compliance model, placeholder grammar, naming conventions, validation rules, and directory structure; M.0 framework entity definitions; M.1 artifact identity and specialization definitions |
| Produces | RFC template structure; RFC section contract; RFC taxonomy; RFC categories; RFC lifecycle model; RFC naming standard; RFC identifier standard; RFC traceability rules; RFC versioning model; RFC status model; RFC review process; RFC approval process; RFC certification process; RFC promotion rules; RFC validation rules; RFC compliance matrix; RFC validation matrix; RFC examples; RFC anti-patterns; RFC best practices |
| Related Specifications | `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, documentation standards review, STD-010 metadata validation, TPL-000 compliance validation, terminology consistency validation, traceability validation, and explicit Human Governance promotion |
| Certification Status | Not certified |

<details>
<summary>Metadata Value Expansion</summary>

**Normative References (full paths):**

- `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`

**Consumed Authorities:**

- STD-010: metadata field definitions, relationship taxonomy, document class expectations, lifecycle model, governance rules
- TPL-000: template lifecycle, template taxonomy, placeholder grammar, naming conventions, validation model, compliance levels, certification requirements, directory structure, composition and inheritance model
- STD-003: canonical terminology for RFC-related vocabulary
- M.0: framework entity and semantic boundary definitions
- M.1: artifact type, specialization, evidence, and lifecycle definitions
- Framework Governance: review, approval, promotion, certification, conflict resolution, and exception policy

</details>

---

## Executive Summary

TPL-001 defines the canonical RFC template standard for AI-DOS. It governs how every RFC template shall be authored, structured, reviewed, approved, certified, and promoted. It does not govern Runtime behavior, Engine Platform behavior, or implementation details. It standardizes the document form that RFCs take.

TPL-001 consumes STD-010 as the governing metadata authority and TPL-000 as the governing template authority. It shall not redefine either. It establishes the normative authority for every RFC template produced under theAI-DOS framework, converting the existing body of RFC documents into reference implementations without altering their current status.

This standard defines 35 required sections for the template standard document itself, plus a mandatory RFC output structure that every RFC template shall generate. The RFC output structure consists of 18 mandatory sections that every RFC produced from a TPL-001-compliant template must include. The standard further defines RFC taxonomy, categories, lifecycle, ownership, authority consumption, metadata requirements, naming, identifiers, traceability, versioning, status model, review, approval, certification, promotion, validation, compliance matrices, examples, anti-patterns, and best practices.

---

## 1. Purpose

TPL-001 exists to create a single, authoritative standard for how RFC templates are authored within AI-DOS. Without this standard, RFC templates risk divergent structure, inconsistent metadata, unclear authority chains, ambiguous lifecycle progression, and unpredictable validation outcomes. Each of these risks erodes the trust that downstream consumers — including reviewers, certifiers, implementers, and governance bodies — place in RFC documents as architectural decision records.

The purpose of TPL-001 is fourfold. First, it establishes the normative structural contract that every RFC template must follow, ensuring that any RFC produced from a compliant template contains a predictable, complete, and traceable set of sections. Second, it defines the governance boundaries that separate RFC template authoring from RFC content authoring, ensuring that template standards do not become architecture standards and that RFC documents do not redefine template governance. Third, it provides the validation model that allows reviewers, certifiers, and automated tooling to determine whether a given RFC template or RFC document conforms to the standard. Fourth, it preserves existing RFC documents as reference implementations, allowing the framework to benefit from accumulated architectural decisions without requiring retroactive restructuring of documents that predate this standard.

TPL-001 is a template standard. It governs the form of RFC templates. It does not govern the architectural substance of individual RFCs, the Runtime behavior those RFCs may describe, or the Engine Platform contracts those RFCs may define. Architectural substance remains the domain of the individual RFC and its designated reviewers. Template form remains the domain of TPL-001.

---

## 2. Scope

### 2.1 In Scope

TPL-001 governs:

1. The standard structure of RFC templates used by AI-DOS.
2. The mandatory section contract that every RFC template shall produce.
3. The optional section catalog that RFC templates may include.
4. RFC taxonomy: the classification system for RFC types.
5. RFC categories: the domain grouping system for RFC families.
6. RFC lifecycle: the state machine governing RFC template and RFC document progression.
7. RFC ownership: the accountability model for RFC templates and RFC documents.
8. RFC authority consumption: how RFC templates consume upstream standards, meta models, and governance.
9. RFC metadata requirements: how STD-010 is applied within the RFC context.
10. RFC naming standard: how RFC templates and RFC documents are named.
11. RFC identifier standard: how RFC templates and RFC documents are identified.
12. RFC traceability rules: how RFC documents maintain cross-reference integrity.
13. RFC versioning: how RFC templates and RFC documents are versioned.
14. RFC status model: how RFC documents progress through review, approval, certification, and promotion.
15. RFC review process: the structured review workflow for RFC documents.
16. RFC approval process: the governance approval workflow for RFC documents.
17. RFC certification process: the certification workflow for RFC documents.
18. RFC promotion rules: the promotion workflow from draft to canonical.
19. RFC validation rules: the validation criteria for RFC template and RFC document compliance.
20. RFC compliance matrix: the structural compliance expectations.
21. RFC validation matrix: the content validation expectations.
22. RFC examples: conforming and non-conforming RFC examples.
23. RFC anti-patterns: common failures in RFC authoring.
24. Best practices: recommended approaches for RFC template and RFC document quality.
25. Success criteria: how TPL-001 itself is measured.
26. Future evolution: how this standard may be extended.

### 2.2 Out of Scope

TPL-001 does not:

1. Redefine STD-010 metadata fields, rules, or relationship taxonomy.
2. Redefine TPL-000 template lifecycle, taxonomy, validation model, or compliance levels.
3. Redefine Runtime Architecture (A.3).
4. Redefine Engine Platform (A.4) or any Engine RFC (A.4.x, A.5.x).
5. Normalize, restructure, or rewrite existing RFC documents.
6. Implement template tooling, validation scripts, or automated enforcement.
7. Govern non-RFC templates (those are governed by TPL-000 and their respective domain template standards).
8. Author specific domain RFC content.
9. Replace Framework Governance decision policy.
10. Replace ProjectStatus or DevelopmentPhases roadmap authority.

---

## 3. Goals

1. **Structural Uniformity**: Every RFC template underAI-DOS shall produce RFC documents with a predictable, complete section structure. Reviewers and consumers shall be able to locate any required section in any RFC without searching for it.

2. **Authority Clarity**: Every RFC template shall clearly declare which upstream authorities it consumes. Every RFC document shall clearly declare its normative authority chain. No RFC shall create circular authority or claim governance over its own governing standards.

3. **Lifecycle Predictability**: Every RFC shall progress through a defined lifecycle with clear state transitions. No RFC shall skip required lifecycle states or claim canonical status without meeting all prerequisites.

4. **Validation Mechanism**: TPL-001 shall provide sufficient validation criteria to determine, by inspection or by tooling, whether an RFC template or RFC document conforms to this standard. Validation shall cover metadata, structure, content, traceability, and lifecycle coherence.

5. **Backward Compatibility**: Existing RFC documents shall become reference implementations. TPL-001 shall not invalidate their architectural content or require their restructuring. Future RFCs shall follow TPL-001.

6. **Governance Integration**: TPL-001 shall integrate with Framework Governance for review, approval, certification, and promotion without replacing or duplicating those governance processes.

7. **Composability**: RFC templates shall be composable with TPL-000 template governance. Domain-specific RFC template standards (such as the Engine Specialization RFC Template A.5.0) shall specialize TPL-001 without conflicting with it.

---

## 4. Non Goals

1. TPL-001 shall not define the architectural content of any specific RFC.
2. TPL-001 shall not replace or restate the STD-010 metadata schema.
3. TPL-001 shall not replace or restate the TPL-000 template governance model.
4. TPL-001 shall not mandate implementation of template validation tooling.
5. TPL-001 shall not require retroactive restructuring of existing RFC documents.
6. TPL-001 shall not govern non-template document types (reports, audits, blueprints, roadmaps).
7. TPL-001 shall not define Runtime execution semantics or Engine Platform contracts.
8. TPL-001 shall not establish a new governance body or change existing governance authority.
9. TPL-001 shall not prescribe specific technology choices within RFC content.

---

## 5. Relationship to STD-010

STD-010 is the governing metadata authority for allAI-DOS documents, including RFC templates and RFC documents. TPL-001 consumes STD-010 without redefining it. The relationship is layered and non-overlapping.

### 5.1 Layer Model

```
┌─────────────────────────────────────────────────────┐
│                  STD-010                            │
│         Document Metadata Standard                  │
│    (governs all document metadata)                  │
├─────────────────────────────────────────────────────┤
│                  TPL-000                            │
│           Template Standard                         │
│    (governs all template authoring rules)           │
├─────────────────────────────────────────────────────┤
│                  TPL-001                            │
│         RFC Template Standard                       │
│    (governs RFC template structure)                 │
├─────────────────────────────────────────────────────┤
│            TPL-NNN (domain)                         │
│    Domain RFC Template Standards                    │
│  (govern domain-specific RFC content contracts)     │
└─────────────────────────────────────────────────────┘
```

### 5.2 Authority Boundaries

STD-010 defines what metadata fields exist, what they mean, and what values they accept. TPL-001 defines how those metadata fields are applied within the specific context of RFC templates and RFC documents. When TPL-001 references metadata requirements, it is consuming STD-010 authority, not creating parallel metadata rules.

If a conflict between TPL-001 and STD-010 were to arise, STD-010 shall prevail. No such conflict shall exist in a well-authored TPL-001-compliant template because TPL-001 consumes STD-010 rather than replacing it.

### 5.3 Metadata Application

Every RFC template shall include a STD-010-compliant metadata block as the first substantive section of the template. Every RFC document produced from a TPL-001-compliant template shall include a fully populated STD-010-compliant metadata block. RFC-specific metadata requirements (such as the relationship between RFC classification and metadata Classification field) are defined in Section 14 of this standard and shall be consistent with STD-010 field definitions.

---

## 6. Relationship to TPL-000

TPL-000 is the governing template authority for allAI-DOS templates, including RFC templates. TPL-001 consumes TPL-000 without redefining it. TPL-001 is itself a template standard governed by TPL-000.

### 6.1 Compliance Level

TPL-001 operates at the TPL-000 "Standard" compliance level: full STD-010 metadata plus defined content sections. This is the minimum compliance level for any template that produces governed architectural documents.

### 6.2 Consumed TPL-000 Concepts

TPL-001 consumes the following from TPL-000 without redefinition:

| TPL-000 Concept | TPL-001 Consumption |
|:---|:---|
| Template lifecycle states (Draft, Review, Approved, Canonical, Deprecated, Legacy, Archived, Retired) | RFC lifecycle is a specialization of the template lifecycle |
| Template taxonomy (Structural, Content Guidance) | RFC templates are Structural Templates |
| Template compliance levels (Base, Standard, Advanced, Composite) | RFC templates require Standard compliance minimum |
| Template naming conventions | RFC naming is a specialization of template naming |
| Template identifier conventions | RFC identifiers are a specialization of template identifiers |
| Template validation model | RFC validation is a specialization of template validation |
| Template placeholder grammar | RFC templates use TPL-000 placeholder syntax |
| Template directory structure | RFC templates reside in governed template directories |
| Template composition and inheritance | Domain RFC template standards may specialize TPL-001 |

### 6.3 Specialization Model

TPL-001 specializes TPL-000 for the RFC document type. Domain-specific RFC template standards (such as A.5.0 for Engine Specialization RFCs) further specialize TPL-001 for their domain. Specialization may add mandatory sections, tighten validation criteria, or add domain-specific metadata expectations. Specialization shall not remove TPL-001 mandatory sections, relax TPL-001 validation criteria, or conflict with TPL-001 governance boundaries.

```
TPL-000 (Template Standard)
  └── TPL-001 (RFC Template Standard)
       └── A.5.0 (Engine Specialization RFC Template)
       └── Future domain RFC template standards
```

---

## 7. RFC Philosophy

### 7.1 RFC as Architectural Decision Record

An RFC is a proposal or definition of architecture submitted for structured review. It is not implementation code, not a project plan, and not a status report. An RFC captures the architectural intent, rationale, constraints, and decisions that shape theAI-DOS framework. The RFC is the unit of architectural governance.

### 7.2 RFC as Living Document

An RFC progresses through a lifecycle. It begins as a draft proposal, undergoes structured review, may be approved, may be certified, and may be promoted to canonical status. At each stage, the RFC document is the single source of truth for the architectural decision it represents. Version history records how the RFC evolved. The RFC does not become frozen on creation; it becomes more authoritative through governance processes.

### 7.3 RFC as Bounded Authority

An RFC governs only what it explicitly declares in its Scope. An RFC does not gain authority over adjacent domains by proximity, inference, or inclusion in a document index. Authority is earned through governance review and explicit promotion, not through document existence. Every RFC shall clearly state what it governs and what it does not.

### 7.4 RFC as Traceable Artifact

Every RFC shall be traceable to its governing authorities, consumed standards, produced artifacts, and dependent documents. Traceability is not optional metadata; it is a structural requirement that enables review, audit, certification, and knowledge graph projection. An RFC without traceability is an RFC that cannot be validated.

### 7.5 RFC as Consumable Contract

An RFC is consumed by downstream documents, templates, and implementation work. Downstream consumers shall be able to read an RFC and understand: what was decided, why it was decided, what constraints apply, what dependencies exist, what risks were identified, what remains open, and what the completion criteria are. The RFC is a contract between the architecture decision and its consumers.

---

## 8. RFC Design Principles

### 8.1 Principle of Complete Authority Declaration

Every RFC shall declare all authorities that govern it. No implicit authority shall be assumed by the reader. If a standard, meta model, constitution, or governance document constrains the RFC, the RFC shall list it in Normative Authority. If a document provides design input, the RFC shall list it in Normative References. Omission of a governing authority is an error, not a simplification.

### 8.2 Principle of Explicit Non-Goals

Every RFC shall state what it does not do as clearly as it states what it does. Non-goals prevent scope creep during review, block implicit authority expansion during promotion, and protect downstream consumers from assuming capabilities the RFC was never designed to provide. An RFC without non-goals is an RFC with unbounded scope.

### 8.3 Principle of Single Owner Accountability

Every RFC shall have exactly one Owner. The Owner is the accountable party for the RFC's architectural integrity, not merely a contributor or reviewer. Multiple Maintainers may support the Owner, but accountability does not diffuse. If ownership must transfer, the transfer shall be recorded in version history.

### 8.4 Principle of Evidence-Based Progression

An RFC shall not advance through lifecycle states without evidence. Review produces findings. Certification produces evidence. Promotion produces governance authorization. An RFC that claims "Approved" status without review evidence is in an invalid state. Lifecycle progression is evidence-driven, not time-driven.

### 8.5 Principle of Preserved History

Every RFC shall maintain a version history that records what changed, when it changed, and why. Version history shall never be truncated, rewritten, or replaced. When an RFC is superseded, the superseded version shall remain accessible for traceability. History preservation enables audit, supports certification, and prevents repeated architectural mistakes.

### 8.6 Principle of Non-Redefinition

An RFC shall not redefine its governing authorities. An RFC that consumes STD-010 shall not create alternative metadata fields. An RFC that consumes TPL-000 shall not create alternative template rules. An RFC that consumes Runtime Architecture shall not redefine Runtime concepts. The RFC specializes within the boundaries established by its authorities; it does not expand those boundaries.

### 8.7 Principle of Validation Before Promotion

No RFC shall be promoted to canonical status without passing all applicable validation criteria. Validation shall cover metadata completeness, structural compliance, authority chain integrity, lifecycle coherence, and content quality. A promoted RFC that fails validation is a governance failure, not a documentation failure.

---

## 9. RFC Taxonomy

### 9.1 Taxonomy Overview

RFC taxonomy classifies RFCs by their structural role within theAI-DOS framework. Taxonomy is distinct from category (Section 10): taxonomy describes the RFC's structural type, while category describes the RFC's domain family.

### 9.2 Taxonomy Types

| Taxonomy Type | Definition | Example |
|:---|:---|:---|
| **Foundation RFC** | Defines a foundational layer (Meta, Standard, Constitution, Governance) that other RFCs consume as authority. | M.0, M.1, STD-000, STD-010, A.1 |
| **Architecture RFC** | Defines architectural structure, contracts, or constraints for a framework layer. | A.3, A.4 |
| **Specialization RFC** | Specializes a parent Architecture RFC for a specific domain or capability. | A.4.1 through A.4.7, A.5.x |
| **Operational RFC** | Defines operational behavior, workflows, or agent-facing contracts. | AIFramework, AIOrchestrator, AgentSystemPrompt |
| **Template RFC** | Defines a reusable template standard that other templates or documents consume. | TPL-000, TPL-001 |
| **Migration RFC** | Defines transition strategy from one framework state to another. | Future migration RFCs |
| **Deprecation RFC** | Formally deprecates an existing RFC, standard, or architectural element. | Future deprecation RFCs |

### 9.3 Taxonomy Rules

1. Every RFC shall declare exactly one taxonomy type in its metadata Classification field.
2. Taxonomy type determines the applicable validation criteria and review expectations.
3. Foundation RFCs require the strictest validation because they govern downstream RFCs.
4. Specialization RFCs must demonstrate compliance with their parent Architecture RFC.
5. Template RFCs must demonstrate compliance with TPL-000.
6. An RFC shall not change its taxonomy type without a new review cycle.

---

## 10. RFC Categories

### 10.1 Category Overview

RFC categories group RFCs by their domain family within theAI-DOS framework. Categories enable navigation, ownership assignment, and dependency analysis across the RFC corpus.

### 10.2 Category Definitions

| Category | Domain | Identifier Prefix Pattern | Example |
|:---|:---|:---|:---|
| **Meta** | Framework and artifact meta models | `M.N` | M.0, M.1 |
| **Standards** | Documentation, terminology, and process standards | `STD-NNN` | STD-000, STD-003, STD-010 |
| **Architecture** | Constitutional and architectural foundation | `A.1`, `A.2` | A.1-Constitution |
| **Runtime** | Runtime architecture and lifecycle | `A.3` | A.3-Runtime-Architecture-RFC |
| **Engine** | Engine Platform and Engine Specialization | `A.4`, `A.5.x` | A.4-Engine-Architecture-RFC, A.5.x Engine RFCs |
| **Operational** | Operational Core, orchestration, and agent behavior | `OP-NNN` | AIFramework, AIOrchestrator, AgentSystemPrompt |
| **Template** | Template standards and domain templates | `TPL-NNN` | TPL-000, TPL-001 |
| **Governance** | Governance policy and decision authority | `GOV-NNN` | FrameworkGovernance, GOVERNANCE |
| **Planning** | Roadmaps, phases, stages, and project status | `ROAD-NNN` | DevelopmentPhases, ProjectStatus, Master Roadmap v4 |
| **Audit** | Conformance audits, consistency reviews | `AUD-NNN` | Engine Platform Consistency Review |
| **Migration** | Transition and legacy migration | `MIG-NNN` | Future migration documents |

### 10.3 Category Rules

1. Every RFC shall declare its category in the metadata Classification field.
2. Category determines the default review authority and approval authority.
3. An RFC may span multiple categories only when its scope explicitly requires it and governance approves the cross-category classification.
4. Categories are not hierarchical in authority; they are organizational.

---

## 11. RFC Lifecycle

### 11.1 Lifecycle State Machine

```
┌─────────┐
│  Draft  │
└────┬────┘
     │ Author submits for review
     ▼
┌─────────┐
│ Review  │◄──────────────────┐
└────┬────┘                   │
     │ Review passes          │ Review fails
     ▼                        │ (returns to Draft)
┌──────────┐                  │
│ Approved │                  │
└────┬─────┘                  │
     │ Certification (when required)
     ▼
┌─────────────┐
│ Certified   │
└────┬────────┘
     │ Governance promotion
     ▼
┌──────────┐
│ Canonical│
└────┬─────┘
     │ Deprecation
     ▼
┌───────────┐
│ Deprecated│───► Retired
└───────────┘
     │ Archive
     ▼
┌──────────┐
│ Archived │
└──────────┘
```

### 11.2 State Definitions

| State | Entry Condition | Exit Condition | Allowed Use |
|:---|:---|:---|:---|
| **Draft** | Initial creation or return from failed review | Submitted for review | May be edited; not reviewable; not canonical |
| **Review** | Submitted to Review Authority | Review produces findings (pass or fail) | Under structured review; not canonical |
| **Approved** | Review passes; Approval Authority approves | Certification (when required) or promotion | Approved guidance; not yet canonical |
| **Certified** | Certification process produces passing evidence | Governance promotion | Certified approved guidance; not yet canonical |
| **Canonical** | Explicit governance promotion | Deprecation, archival, or retirement | Authoritative within declared scope |
| **Deprecated** | Governance deprecation decision | Retirement | Historical reference; not for new work |
| **Archived** | Governance archival decision | Governance reopening (rare) | Read-only historical record |
| **Retired** | Governance retirement decision | None (terminal) | Historical trace only |

### 11.3 Lifecycle Rules

1. No state may be skipped. An RFC shall not move from Draft to Approved without Review.
2. An RFC shall not claim Canonical status in metadata while its Status field says Draft or Review.
3. Certification is required for Foundation RFCs and Architecture RFCs. It may be waived for Operational RFCs and documentation-only RFCs when governance explicitly records the waiver.
4. A Canonical RFC that requires revision shall enter a new Draft or Review cycle without losing its Canonical traceability. The revision shall be recorded in version history.
5. Deprecated and Archived RFCs shall retain their STD-010 metadata, version history, and traceability links.
6. Retired RFCs shall not be deleted. They shall be marked Retired and preserved for historical traceability.

---

## 12. RFC Ownership

### 12.1 Ownership Model

Every RFC template and every RFC document shall have exactly one Owner. The Owner is the accountable party responsible for the RFC's architectural integrity, metadata accuracy, lifecycle progression, and governance compliance. Ownership is not shared. Ownership is not implied by contribution.

| Role | Responsibility | Count |
|:---|:---|:---|
| **Owner** | Accountable for architectural integrity, metadata, lifecycle, and governance compliance | Exactly 1 |
| **Maintainers** | Support the Owner with ongoing maintenance, edits, and validation | 1 or more |
| **Review Authority** | Conducts structured review; produces findings | Exactly 1 (may be a body) |
| **Approval Authority** | Approves the RFC for advancement past Review | Exactly 1 (may be a body) |
| **Certification Authority** | Certifies the RFC meets quality and compliance criteria (when required) | Exactly 1 (may be a body) |

### 12.2 Ownership Rules

1. The Owner shall be a named governance body, team, or role — not an individual AI agent or tool.
2. Maintainers may be named teams or roles.
3. Review Authority, Approval Authority, and Certification Authority shall be named governance bodies.
4. Ownership transfer shall be recorded in version history with the effective date and reason.
5. An RFC without a declared Owner is in an invalid state and shall not advance past Draft.

### 12.3 Ownership Boundaries

The Owner owns the RFC document. The Owner does not own the architectural domain the RFC describes. The Owner of an Engine RFC owns the RFC document, not the Engine Platform. The Engine Platform is governed by A.4 and its designated Owner. This separation prevents RFC document ownership from conflating with architectural domain ownership.

---

## 13. RFC Authority Consumption

### 13.1 Authority Hierarchy for RFC Templates

RFC templates consume authority in this order. Higher authority is consumed, not redefined.

```
Human Governance
    ↓
AGENTS.md repository bootloader
    ↓
docs/AI/GOVERNANCE.md Governance Atlas
    ↓
docs/AI/FrameworkGovernance.md governance decision policy
    ↓
docs/AI/Architecture/Constitution/A.1-Constitution.md
    ↓
docs/AI/Meta/M.0-Framework-Meta-Model.md
docs/AI/Meta/M.1-Artifact-Meta-Model.md
    ↓
docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md
docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md
    ↓
docs/AI/Templates/Standards/TPL-000-Template-Standard.md
    ↓
TPL-001 — RFC Template Standard (this document)
    ↓
Domain RFC Template Standards (e.g., A.5.0)
    ↓
Individual RFC Documents
```

### 13.2 Authority Consumption Rules

1. An RFC template shall list every authority it consumes in the Normative Authority and Normative References metadata fields.
2. An RFC template shall not claim authority over any document listed in its Normative Authority.
3. An RFC template shall not omit a governing authority from its metadata. Omission is an error.
4. If an RFC template references a standard it does not consume, it shall use the Related Specifications field, not Normative References.
5. An RFC document shall consume its parent RFC template standard as normative authority.
6. An RFC document shall not redefine any authority it consumes.

### 13.3 Authority Conflict Resolution

If an RFC template or RFC document detects a conflict between its consumed authorities, it shall:

1. Preserve the higher authority in the hierarchy.
2. Report the conflict in the RFC's Open Questions section.
3. Escalate to Framework Governance for resolution.
4. Not silently resolve the conflict in favor of either authority.

---

## 14. RFC Metadata Requirements

### 14.1 Mandatory Metadata Fields

Every RFC document shall include all mandatory STD-010 metadata fields. The following table maps STD-010 mandatory fields to their RFC-specific application:

| STD-010 Field | RFC-Specific Requirement |
|:---|:---|
| Identifier | Shall follow the RFC Identifier Standard (Section 18) |
| Title | Shall follow the RFC Naming Standard (Section 17); shall include the identifier prefix and short title |
| Version | Shall follow the RFC Versioning model (Section 20); shall include status suffix |
| Status | Shall reflect the current RFC lifecycle state (Section 11) |
| Canonical Status | Shall be "Non-canonical" until explicit governance promotion |
| Classification | Shall declare both RFC taxonomy type (Section 9) and RFC category (Section 10) |
| Document Type | Shall be "RFC" or "Architecture RFC" as applicable |
| Owner | Shall name exactly one accountable party (Section 12) |
| Maintainers | Shall name one or more supporting teams or roles |
| Review Authority | Shall name the governing review body |
| Approval Authority | Shall name the governance approval body |
| Created | Shall be the date of initial creation |
| Last Updated | Shall be the date of most recent material change |
| Lifecycle Phase | Shall match the Status field |
| Traceability ID | Shall follow the RFC Traceability Rules (Section 19) |
| Scope | Shall explicitly state what the RFC governs |
| Out of Scope | Shall explicitly state what the RFC does not govern |
| Normative Authority | Shall list all governing authorities from the authority hierarchy |
| Normative References | Shall list all normative design input sources |
| Dependencies | Shall list all required upstream documents or systems |
| Consumes | Shall list all consumed artifacts, models, or standards |
| Produces | Shall list all outputs defined or authorized by the RFC |
| Related Specifications | Shall list contextually relevant but non-authoritative documents |
| Supersedes | Shall list any document this RFC replaces (or "None") |
| Superseded By | Shall list any document that replaces this RFC (or "None") |
| Promotion Requirements | Shall list all conditions required for canonical promotion |
| Certification Status | Shall reflect the current certification state |

### 14.2 Metadata Validation Rules

1. Every mandatory field shall be present and non-empty. "None" is acceptable only for Supersedes, Superseded By, and relationship fields where no relationship exists.
2. Status and Lifecycle Phase shall not conflict.
3. Canonical Status shall not claim canonical unless Status is "Canonical" or "Approved" with explicit canonical declaration.
4. Identifier, Traceability ID, and Title shall be internally consistent (same identifier prefix).
5. Normative Authority shall not include documents that are merely referenced, consumed, or related.
6. Classification shall use taxonomy types and categories defined in Sections 9 and 10.

---

## 15. RFC Mandatory Sections

Every RFC template shall generate the following sections. Every RFC document produced from a TPL-001-compliant template shall include these sections. The order below is the required section order. Sections shall not be reordered, renamed, or removed.

### 15.1 Section Order and Contract

| # | Section | Purpose | Minimum Content |
|:---|:---|:---|:---|
| 1 | **Document Metadata** | STD-010-compliant metadata block | All mandatory fields from Section 14.1 |
| 2 | **Executive Summary** | High-level summary of the RFC's purpose, scope, and key decisions | 3-5 sentences describing what the RFC does, why it exists, and what it produces |
| 3 | **Purpose** | Detailed statement of the RFC's purpose | At least 2 paragraphs explaining why this RFC exists and what problem it solves |
| 4 | **Scope** | What the RFC governs | In-scope items as a numbered or bulleted list |
| 5 | **Out of Scope** | What the RFC does not govern | Out-of-scope items as a numbered or bulleted list; must not be empty |
| 6 | **Normative Authority** | Governance sources with approval or constraint power | Listed in authority hierarchy order from highest to nearest |
| 7 | **Normative References** | Normative design input sources | Listed with full document paths |
| 8 | **Dependencies** | Required upstream documents, systems, or concepts | Listed with relationship context |
| 9 | **Architecture** | The architectural design, structure, or model the RFC defines | Diagrams, models, or detailed structural descriptions |
| 10 | **Design Decisions** | Key architectural decisions with rationale | Each decision stated with context, options considered, and rationale |
| 11 | **Ownership** | Accountable parties and their responsibilities | Owner, Maintainers, Review Authority, Approval Authority |
| 12 | **Responsibilities** | What the RFC's Owner is responsible for | Numbered list of owned responsibilities |
| 13 | **Non Responsibilities** | What the RFC's Owner is not responsible for | Numbered list of explicit non-responsibilities |
| 14 | **Interfaces** | Interfaces, contracts, or boundaries the RFC defines or consumes | Descriptions of each interface with input/output contracts |
| 15 | **Lifecycle** | The lifecycle model for the architectural element the RFC defines | State machine, transitions, and rules |
| 16 | **Validation** | How conformance to the RFC is validated | Validation criteria, methods, and expected evidence |
| 17 | **Risks** | Identified risks, mitigations, and open risk items | Numbered list with severity and mitigation |
| 18 | **Open Questions** | Unresolved questions requiring governance or design decisions | Numbered list with context and proposed resolution path |
| 19 | **Completion Criteria** | What must be true for the RFC to be considered complete | Numbered, testable criteria |
| 20 | **Version History** | Chronological record of changes | Table with Version, Status, and Notes columns |

### 15.2 Section Content Rules

1. **Document Metadata** shall appear after the title and any introductory classification block. It shall use the exact table format specified by STD-010.
2. **Executive Summary** shall not contain subsections. It shall be a single prose block of 3-5 sentences.
3. **Purpose** shall explain the problem the RFC solves, not just restate the RFC's title. It shall answer "why does this RFC exist?"
4. **Scope** and **Out of Scope** shall be complementary and non-overlapping. Every item in Scope shall have a corresponding boundary in Out of Scope.
5. **Architecture** shall be the longest section in most RFCs. It shall include diagrams, models, or structured descriptions that convey the architectural design.
6. **Design Decisions** shall present each decision as a discrete choice with rationale. It shall not merely describe the chosen approach without explaining why alternatives were rejected.
7. **Out of Scope** and **Non Responsibilities** are both mandatory and serve different purposes. Out of Scope defines document boundaries; Non Responsibilities defines ownership boundaries.
8. **Open Questions** shall not be empty at Draft stage. An RFC with no open questions at Draft stage either has insufficient scope exploration or has not identified its unknowns.
9. **Version History** shall be chronological with the most recent entry at the bottom. It shall never be truncated.

---

## 16. RFC Optional Sections

RFC templates may include additional sections beyond the mandatory set. Optional sections serve domain-specific needs and shall not conflict with mandatory sections.

### 16.1 Optional Section Catalog

| Section | When to Include | Purpose |
|:---|:---|:---|
| **Status** (pre-metadata) | When the RFC needs an immediate non-canonical declaration before the metadata block | Quick canonical status declaration |
| **Glossary** | When the RFC introduces domain-specific terminology not covered by STD-003 | Term definitions for RFC-specific vocabulary |
| **Appendices** | When supplementary material supports but does not belong in mandatory sections | Supporting diagrams, data tables, extended examples |
| **Migration Guide** | When the RFC supersedes an existing RFC or changes existing architecture | Transition instructions |
| **Examples** | When concrete examples clarify the architectural design | Worked examples demonstrating RFC application |
| **Anti Patterns** | When common misapplications should be explicitly warned against | Anti-pattern descriptions with rationale |
| **Best Practices** | When recommended approaches supplement the architectural contract | Practice descriptions with context |
| **Related Work** | When significant prior art or related external work exists | External references and comparison |
| **Future Work** | When known extensions or follow-up RFCs are anticipated | Forward-looking scope identification |
| **Security Considerations** | When the RFC has security implications | Threat model, security constraints, or security requirements |
| **Performance Considerations** | When the RFC has performance implications | Performance constraints, benchmarks, or requirements |
| **Testing Strategy** | When the RFC defines testable architectural behavior | Test approach, coverage expectations, or test contracts |

### 16.2 Optional Section Rules

1. Optional sections shall appear after all mandatory sections, except Version History which shall always be the final section.
2. Optional sections shall not rename, replace, or merge with mandatory sections.
3. Optional sections shall be numbered to continue the mandatory section numbering or use descriptive headings that do not conflict with mandatory section names.
4. An optional section included in one RFC template is not automatically required in all RFC templates.

---

## 17. RFC Naming Standard

### 17.1 File Naming Convention

RFC documents shall follow this naming convention:

```
{Identifier-Prefix}-{Short-Title}.md
```

Examples:

| RFC | File Name |
|:---|:---|
| AI-DOS-A-004 | `A.4-Engine-Architecture-RFC.md` |
| AI-DOS-STD-010 | `STD-010-Document-Metadata-Standard.md` |
| AI-DOS-TPL-001 | `TPL-001-RFC-Template-Standard.md` |
| AI-DOS-A-005.1 | `A.5.1-Context-Engine-RFC.md` |

### 17.2 Naming Rules

1. The identifier prefix shall match the category prefix defined in Section 10.
2. The short title shall use PascalCase or kebab-case consistently within a category family.
3. File names shall not include version numbers, status suffixes, or dates.
4. File names shall be unique within the repository. No two RFCs shall share a file name.
5. File names shall not change when the RFC is revised. If a file name must change, the old name shall redirect or the change shall be recorded in version history and the Governance Atlas.

### 17.3 Title Convention

The document title (H1 heading) shall follow this convention:

```
{Identifier} — {Descriptive Title}
```

Examples:

- `TPL-001 — RFC Template Standard`
- `STD-010 — Document Metadata Standard`
- `A.4 — Engine Architecture RFC`

The title shall include the identifier prefix for disambiguation. The descriptive title shall be concise and domain-specific.

---

## 18. RFC Identifier Standard

### 18.1 Identifier Format

RFC identifiers shall follow the STD-010 identifier prefix convention, scoped to the RFC's category:

```
AI-DOS-{Category-Prefix}-{Number}
```

| Category | Prefix Pattern | Example |
|:---|:---|:---|
| Meta | `AI-DOS-M-{N}` | `AI-DOS-M-0`, `AI-DOS-M-1` |
| Standards | `AI-DOS-STD-{NNN}` | `AI-DOS-STD-010` |
| Architecture | `AI-DOS-A-{N}` | `AI-DOS-A-001`, `AI-DOS-A-004` |
| Runtime | `AI-DOS-A-{N}` | `AI-DOS-A-003` |
| Engine | `AI-DOS-A-{N}.{N}` | `AI-DOS-A-004`, `AI-DOS-A-005.1` |
| Operational | `AI-DOS-OP-{NNN}` | `AI-DOS-OP-002` |
| Template | `AI-DOS-TPL-{NNN}` | `AI-DOS-TPL-000`, `AI-DOS-TPL-001` |
| Governance | `AI-DOS-GOV-{NNN}` | `AI-DOS-GOV-001` |

### 18.2 Identifier Rules

1. Identifiers shall be unique across the entireAI-DOS framework. No two RFCs shall share an identifier.
2. Identifiers shall be stable. An identifier shall not change when the RFC is revised, renamed, or moved.
3. Identifiers shall be assigned sequentially within a category or subcategory. Gaps in numbering are allowed but should be documented.
4. Sub-identifiers (e.g., `A.5.1`, `A.5.2`) shall be used for specializations of a parent RFC. The parent-child relationship shall be explicit in metadata.
5. The Traceability ID may extend the Identifier with phase, stage, or domain qualifiers but shall always contain the base Identifier.

### 18.3 Traceability ID Convention

Traceability IDs shall follow this convention:

```
AI-DOS.V{Version}.{Phase}.{Category}-{Number}
```

Examples:

| RFC | Traceability ID |
|:---|:---|
| STD-010 | `AI-DOS-STD-010` |
| TPL-000 | `AI-DOS.V3.TPL-000` |
| TPL-001 | `AI-DOS.V3.TPL-001` |
| A.5.0 | `AI-DOS.V4.PHASE-2.ENGINE-00` |

Traceability IDs shall be stable and shall appear in review, audit, certification, registry, and knowledge graph records.

---

## 19. RFC Traceability Rules

### 19.1 Traceability Requirements

Every RFC shall maintain traceability in the following dimensions:

| Dimension | Metadata Field | Requirement |
|:---|:---|:---|
| **Upstream Authority** | Normative Authority | All governing authorities listed |
| **Upstream Input** | Normative References, Dependencies, Consumes | All design inputs listed |
| **Downstream Output** | Produces | All outputs defined by the RFC listed |
| **Lateral Relationship** | Related Specifications | Contextually relevant documents listed |
| **Temporal** | Supersedes, Superseded By | Replacement relationships listed |
| **Sequencing** | Blocks, Blocked By | Sequencing constraints listed (when applicable) |

### 19.2 Traceability Rules

1. Every authority consumed shall be listed. Omission is a traceability error.
2. Every document that depends on this RFC shall list this RFC in its Dependencies or Consumes field.
3. Traceability shall be bidirectional where possible. If RFC-A produces an artifact that RFC-B consumes, RFC-A's Produces and RFC-B's Consumes shall reference each other.
4. Traceability links shall use full document paths, not relative paths, in Normative References and Dependencies.
5. When an RFC is superseded, the superseding RFC shall list the superseded RFC in Supersedes, and the superseded RFC shall be updated to list the superseding RFC in Superseded By.
6. Traceability shall be validated during review. Missing or broken traceability links are review findings.

### 19.3 Traceability Diagram

```
          ┌──────────────────────┐
          │   Normative Authority │
          │   (governs this RFC)  │
          └──────────┬───────────┘
                     │
          ┌──────────▼───────────┐
          │  Normative References │
          │    (design input)     │
          └──────────┬───────────┘
                     │
          ┌──────────▼───────────┐
          │     This RFC         │
          │  (consumes authority │
          │   and references,    │
          │   produces outputs)  │
          └──┬───────┬───────┬───┘
             │       │       │
     ┌───────▼──┐ ┌──▼────┐ ┌▼──────────┐
     │ Produces │ │Blocks │ │Supersedes │
     │ (outputs)│ │(next) │ │(replaces) │
     └──────────┘ └───────┘ └───────────┘
```

---

## 20. RFC Versioning

### 20.1 Version Format

RFC versions shall follow Semantic Versioning with a status suffix:

```
{Major}.{Minor}.{Patch}-{Status}
```

| Component | Meaning | Increment When |
|:---|:---|:---|
| Major | Breaking architectural change | Scope, authority, or structural contract changes fundamentally |
| Minor | Non-breaking addition | New sections, new decisions, or scope expansion |
| Patch | Correction | Metadata fix, typo correction, or clarification |
| Status | Current lifecycle state | `draft`, `review`, `approved`, `canonical`, `deprecated` |

### 20.2 Version Examples

```text
0.1.0-draft        (initial draft)
0.2.0-draft        (draft with additions)
1.0.0-review       (submitted for review)
1.0.0-approved     (approved by governance)
1.0.0-canonical    (promoted to canonical)
1.1.0-canonical    (canonical with additions)
2.0.0-draft        (major revision returned to draft)
1.0.0-deprecated   (deprecated by governance)
```

### 20.3 Versioning Rules

1. Version shall increment when metadata, scope, normative authority, lifecycle status, or produced specifications materially change.
2. A typo correction that does not change meaning may increment Patch.
3. A structural addition that does not break existing consumers may increment Minor.
4. A scope change, authority change, or fundamental design change shall increment Major.
5. Every version change shall be recorded in Version History with the date, summary of changes, and reason.
6. No version shall be skipped. Version history shall be continuous.

---

## 21. RFC Status Model

### 21.1 Status Values

| Status Value | Meaning | Metadata Canonical Status |
|:---|:---|:---|
| `Draft` | Work in progress; not yet submitted for review | Non-canonical |
| `RFC / Draft` | RFC-specific draft indicating architectural proposal stage | Non-canonical |
| `Review` | Under structured review by Review Authority | Non-canonical |
| `Approved` | Approved by Approval Authority | Non-canonical (unless Canonical Status explicitly says otherwise) |
| `Canonical` | Authoritative within declared scope | Canonical |
| `Deprecated` | Should not be used for new work | Deprecated |
| `Legacy` | Retained for historical or compatibility operations | Legacy |
| `Archived` | Preserved as historical record | Archived |
| `Retired` | Removed from active governance use | Retired |

### 21.2 Status Coherence Rules

1. Status and Canonical Status shall not contradict. An RFC shall not have Status `Draft` and Canonical Status `Canonical`.
2. Status and Lifecycle Phase shall match. If Status says `Draft`, Lifecycle Phase shall say `Draft`.
3. An RFC shall not advance to `Approved` without review evidence.
4. An RFC shall not advance to `Canonical` without governance promotion authorization.
5. Status changes shall be recorded in Version History.

### 21.3 Status Display Convention

For RFCs that are architectural proposals, the Status field may use the compound form `RFC / Draft` to clearly distinguish an RFC proposal draft from other draft document types. This compound form is equivalent to `Draft` for lifecycle purposes.

---

## 22. RFC Review Process

### 22.1 Review Triggers

Review is triggered when:

1. The RFC Owner submits the RFC to the Review Authority.
2. A material change to an existing Canonical or Approved RFC requires re-review.
3. Framework Governance mandates a review as part of a compliance or consistency initiative.

### 22.2 Review Scope

A structured review of an RFC shall evaluate:

1. **Metadata Completeness**: All mandatory STD-010 fields are present and correctly populated.
2. **Structural Compliance**: All TPL-001 mandatory sections are present and contain minimum content.
3. **Authority Integrity**: Normative Authority, Normative References, Dependencies, and Consumes are complete, correct, and non-conflicting.
4. **Scope Coherence**: Scope and Out of Scope are complementary, non-overlapping, and consistent with the RFC's stated purpose.
5. **Design Quality**: Architecture and Design Decisions are clear, well-reasoned, and internally consistent.
6. **Traceability**: All traceability dimensions (Section 19) are satisfied.
7. **Lifecycle Coherence**: Status, Lifecycle Phase, Canonical Status, and Certification Status are consistent.
8. **Non-Redefinition**: The RFC does not redefine any authority it consumes.
9. **Terminology**: Terms are consistent with STD-003 canonical terminology.

### 22.3 Review Outcomes

| Outcome | Meaning | Next Action |
|:---|:---|:---|
| **Review Passed** | RFC meets all review criteria | Advance to Approval |
| **Review Passed with Observations** | RFC meets criteria with minor findings | Address observations; advance to Approval |
| **Review Failed** | RFC does not meet criteria | Return to Draft; address findings; resubmit |
| **Review Deferred** | Review cannot proceed due to external blocker | Resolve blocker; reschedule review |

### 22.4 Review Evidence

A completed review shall produce:

1. Review findings document (pass/fail/observations for each criterion).
2. Reviewer identification and date.
3. Specific, actionable findings for any failed or observed criterion.
4. Recommendation for advancement or return to Draft.

---

## 23. RFC Approval Process

### 23.1 Approval Authority

Approval Authority is declared in the RFC's metadata. ForAI-DOS RFCs, the Approval Authority is typically `Human Governance / Framework Governance`. Approval Authority shall not be the RFC Owner or a contributor to the RFC.

### 23.2 Approval Criteria

An RFC shall not be approved unless:

1. Review has passed or passed with observations.
2. All review findings classified as blocking have been resolved.
3. Metadata is complete and STD-010 compliant.
4. Authority chain is intact and non-conflicting.
5. Scope is bounded and consistent with the RFC's category and taxonomy.
6. The RFC does not redefine any consumed authority.
7. Version History is current.

### 23.3 Approval Actions

Upon approval, the Approval Authority shall:

1. Update the RFC's Status to `Approved`.
2. Update the RFC's Version to reflect the approval (e.g., `1.0.0-approved`).
3. Record the approval in Version History.
4. Notify the Owner and Maintainers.

Approval is not canonical promotion. An approved RFC is not yet canonical. Canonical promotion requires a separate governance action.

---

## 24. RFC Certification Process

### 24.1 Certification Requirement

Certification is required for:

1. Foundation RFCs (Meta, Standards, Architecture).
2. Architecture RFCs that define framework-level contracts.
3. Any RFC for which governance explicitly requires certification.

Certification may be waived for:

1. Operational RFCs (when governance records the waiver).
2. Documentation-only RFCs (when governance records the waiver).
3. Minor revisions to already-certified RFCs (when governance records the waiver).

### 24.2 Certification Criteria

Certification evaluates:

1. All review criteria (Section 22.2) remain satisfied post-approval.
2. No unresolved blocking findings exist.
3. Terminology is consistent with STD-003.
4. Traceability is complete and bidirectional where applicable.
5. Dependencies are satisfied (all consumed authorities are in a valid state).
6. The RFC's Produced artifacts are well-defined and consumable.
7. Completion Criteria are testable and measurable.

### 24.3 Certification Outcomes

| Outcome | Meaning | Next Action |
|:---|:---|:---|
| **Certified** | RFC meets all certification criteria | Eligible for canonical promotion |
| **Certified with Conditions** | RFC meets criteria with conditions that must be met within a defined period | Address conditions; advance to canonical |
| **Certification Failed** | RFC does not meet certification criteria | Return to Draft or Approved; address findings |
| **Certification Deferred** | Certification cannot proceed due to external blocker | Resolve blocker; reschedule |

### 24.4 Certification Evidence

Certification shall produce:

1. Certification findings document.
2. Certification authority identification and date.
3. Evidence for each certification criterion.
4. Conditions (when applicable) with deadlines.

---

## 25. RFC Promotion Rules

### 25.1 Promotion Path

```
Certified (or Approved with waiver)
    ↓
Framework Governance review
    ↓
Human Governance authorization
    ↓
Canonical promotion recorded
    ↓
Status updated to Canonical
    ↓
Version updated (e.g., 1.0.0-canonical)
    ↓
Governance Atlas updated (when applicable)
```

### 25.2 Promotion Criteria

An RFC shall not be promoted to Canonical unless:

1. It has passed review (Section 22).
2. It has been approved (Section 23).
3. It has been certified or certification has been explicitly waived (Section 24).
4. All consumed authorities are in a valid, preferably canonical, state.
5. No blocking findings are unresolved.
6. Framework Governance has reviewed the promotion.
7. Human Governance has authorized the promotion.
8. The Governance Atlas has been updated to reflect the new Canonical RFC (when applicable).

### 25.3 Promotion Rules

1. Canonical promotion is a governance action, not an editorial action. An RFC shall not self-promote.
2. A promoted RFC shall retain its full version history.
3. Promotion does not require a new document. The existing document's Status, Canonical Status, and Version are updated.
4. If a promoted RFC requires editorial changes before promotion, those changes shall be made in a separate Draft cycle before promotion, not as part of the promotion action.
5. A Canonical RFC that is later found to have defects shall be revised through a new Draft/Review/Approval cycle. The Canonical version shall be preserved in version history.

---

## 26. RFC Validation Rules

### 26.1 Validation Dimensions

RFC validation covers six dimensions:

| Dimension | What It Validates | Method |
|:---|:---|:---|
| **Metadata Validation** | STD-010 field completeness, format, and coherence | Field-by-field inspection |
| **Structural Validation** | TPL-001 mandatory sections present and contain minimum content | Section existence and content check |
| **Authority Validation** | Normative Authority, References, Dependencies, and Consumes are correct | Cross-reference verification |
| **Traceability Validation** | All traceability dimensions are satisfied | Link verification |
| **Lifecycle Validation** | Status, Canonical Status, Certification Status, and Version are coherent | State coherence check |
| **Content Validation** | Scope, Architecture, Design Decisions, and Completion Criteria are clear and complete | Expert review |

### 26.2 Validation Rules

1. **Completeness Rule**: Every mandatory metadata field shall be present and non-empty (with "None" for genuinely empty relationships).
2. **Format Rule**: Every metadata field shall conform to the format specified by STD-010 and the RFC-specific requirements in Section 14.
3. **Coherence Rule**: Status, Lifecycle Phase, Canonical Status, and Version shall not contradict each other.
4. **Authority Rule**: Every declared Normative Authority shall be a genuine governance authority. Normative Authority shall not include documents that are merely referenced, consumed, or related.
5. **Non-Redefinition Rule**: The RFC shall not create alternative definitions for any field, concept, or rule defined by its consumed authorities.
6. **Traceability Rule**: Every consumed authority shall be listed. Every produced artifact shall be listed. Supersession relationships shall be bidirectional.
7. **Section Rule**: Every mandatory section (Section 15) shall be present. Every mandatory section shall contain the minimum content specified in its contract.
8. **Lifecycle Rule**: The RFC shall not claim a lifecycle state it has not reached through the defined process.
9. **Naming Rule**: The file name, title, identifier, and traceability ID shall follow the conventions in Sections 17 and 18.

### 26.3 Validation Severity

| Severity | Meaning | Impact on Lifecycle |
|:---|:---|:---|
| **Blocking** | Violation prevents advancement | RFC shall not advance until resolved |
| **Warning** | Violation should be resolved but does not block | RFC may advance; finding recorded |
| **Informational** | Observation or suggestion | No impact on lifecycle |

---

## 27. RFC Compliance Matrix

### 27.1 Structural Compliance Matrix

The following matrix defines the structural compliance expectations for RFC documents. Each row is a mandatory structural element. Each column is a compliance criterion.

| Structural Element | Required | Minimum Content | Validation Method | Blocking if Missing |
|:---|:---|:---|:---|:---|
| Document Metadata block | Yes | All mandatory STD-010 fields | Field inspection | Yes |
| Executive Summary | Yes | 3-5 sentences | Content inspection | Yes |
| Purpose | Yes | 2+ paragraphs | Content inspection | Yes |
| Scope | Yes | Numbered list | Structure inspection | Yes |
| Out of Scope | Yes | Numbered list, not empty | Structure + content inspection | Yes |
| Normative Authority | Yes | Authority list in hierarchy order | Cross-reference check | Yes |
| Normative References | Yes | Reference list with paths | Cross-reference check | Yes |
| Dependencies | Yes | Dependency list | Cross-reference check | Yes |
| Architecture | Yes | Diagrams or structured descriptions | Content inspection | Yes |
| Design Decisions | Yes | Each decision with rationale | Content inspection | Yes |
| Ownership | Yes | Owner, Maintainers, Review, Approval | Metadata coherence check | Yes |
| Responsibilities | Yes | Numbered list | Content inspection | Yes |
| Non Responsibilities | Yes | Numbered list | Content inspection | Yes |
| Interfaces | Yes | Interface descriptions | Content inspection | Yes |
| Lifecycle | Yes | State model or lifecycle description | Content inspection | Yes |
| Validation | Yes | Validation criteria | Content inspection | Yes |
| Risks | Yes | Risk list with severity | Content inspection | Yes |
| Open Questions | Yes | Numbered list (may be "None" after resolution) | Content inspection | Yes |
| Completion Criteria | Yes | Numbered, testable criteria | Content inspection | Yes |
| Version History | Yes | Chronological table | Structure inspection | Yes |

### 27.2 Metadata Compliance Matrix

| Metadata Field | Required | Format | Source of Truth |
|:---|:---|:---|:---|
| Identifier | Yes | `AI-DOS-{Prefix}-{Number}` | STD-010 + Section 18 |
| Title | Yes | `{Identifier} — {Descriptive Title}` | Section 17 |
| Version | Yes | `{M}.{m}.{p}-{status}` | Section 20 |
| Status | Yes | From Section 21 status values | Section 21 |
| Canonical Status | Yes | From STD-010 canonical status values | STD-010 |
| Classification | Yes | Taxonomy type + Category | Sections 9, 10 |
| Document Type | Yes | `RFC` or `Architecture RFC` | STD-010 |
| Owner | Yes | Named governance body or role | Section 12 |
| Maintainers | Yes | Named team(s) or role(s) | Section 12 |
| Review Authority | Yes | Named governance body | Section 12 |
| Approval Authority | Yes | Named governance body | Section 12 |
| Created | Yes | ISO date `YYYY-MM-DD` | STD-010 |
| Last Updated | Yes | ISO date `YYYY-MM-DD` | STD-010 |
| Lifecycle Phase | Yes | From Section 11 state definitions | Section 11 |
| Traceability ID | Yes | From Section 18.3 convention | Section 18 |
| Scope | Yes | Descriptive text | Section 14 |
| Out of Scope | Yes | Descriptive text | Section 14 |
| Normative Authority | Yes | Semicolon-separated list | STD-010 |
| Normative References | Yes | Semicolon-separated list with paths | STD-010 |
| Dependencies | Yes | Semicolon-separated list | STD-010 |
| Consumes | Yes | Semicolon-separated list | STD-010 |
| Produces | Yes | Semicolon-separated list | STD-010 |
| Related Specifications | Yes | Semicolon-separated list (or `None`) | STD-010 |
| Supersedes | Yes | Document identifier or `None` | STD-010 |
| Superseded By | Yes | Document identifier or `None` | STD-010 |
| Promotion Requirements | Yes | Descriptive text | STD-010 |
| Certification Status | Yes | From STD-010 certification status values | STD-010 |

---

## 28. RFC Validation Matrix

### 28.1 Content Validation Matrix

The validation matrix defines what is checked, how it is checked, and what the expected outcome is for each validation criterion.

| # | Validation Criterion | Validation Method | Expected Outcome | Severity if Failed |
|:---|:---|:---|:---|:---|
| V-01 | All mandatory metadata fields present | Field-by-field inspection | All fields populated | Blocking |
| V-02 | Identifier follows category prefix convention | Pattern match | Matches `AI-DOS-{Prefix}-{Number}` | Blocking |
| V-03 | Title follows naming convention | Pattern match | Contains identifier prefix | Warning |
| V-04 | Version follows semantic versioning with status | Pattern match | Matches `{M}.{m}.{p}-{status}` | Blocking |
| V-05 | Status is a valid state value | Enumeration check | Value in Section 21 status list | Blocking |
| V-06 | Canonical Status consistent with Status | Coherence check | No contradictions | Blocking |
| V-07 | Lifecycle Phase matches Status | Coherence check | No contradictions | Blocking |
| V-08 | Certification Status consistent with lifecycle | Coherence check | No contradictions | Warning |
| V-09 | All mandatory sections present | Section existence check | 20 sections found | Blocking |
| V-10 | Executive Summary has minimum content | Length + content check | 3-5 sentences | Warning |
| V-11 | Purpose has minimum content | Length + content check | 2+ paragraphs | Warning |
| V-12 | Scope is non-empty | Content check | At least 1 item | Blocking |
| V-13 | Out of Scope is non-empty | Content check | At least 1 item | Blocking |
| V-14 | Normative Authority lists genuine authorities | Cross-reference check | All entries are real authorities | Warning |
| V-15 | No circular authority references | Graph analysis | No cycles in authority chain | Blocking |
| V-16 | No self-reference in authority fields | Field inspection | RFC does not list itself | Blocking |
| V-17 | Dependencies are valid documents | Path/reference check | All dependencies exist | Warning |
| V-18 | Consumes lists are consistent with Normative References | Coherence check | No contradictions | Warning |
| V-19 | Traceability is bidirectional where applicable | Cross-reference check | Produces/Consumes alignment | Informational |
| V-20 | Supersedes/Superseded By is bidirectional | Cross-reference check | Both documents agree | Warning |
| V-21 | Version History is chronological | Order check | Dates are non-decreasing | Warning |
| V-22 | Version History records all material changes | Content check | Major/Minor changes have entries | Warning |
| V-23 | No redefinition of consumed authorities | Content analysis | No alternative definitions found | Blocking |
| V-24 | Terminology consistent with STD-003 | Term check | Canonical terms used | Warning |
| V-25 | File name follows naming convention | Pattern match | Matches Section 17 format | Warning |

### 28.2 Validation Execution

Validation shall be executed:

1. **At Draft completion**: Metadata, structural, and naming validation.
2. **At Review submission**: Full validation matrix (V-01 through V-25).
3. **At Approval**: Re-validation of all blocking criteria.
4. **At Certification**: Full validation matrix plus certification-specific criteria.
5. **At Promotion**: Full validation matrix plus promotion-specific criteria.

---

## 29. RFC Examples

### 29.1 Conforming RFC: Metadata Block Example

The following is a conforming metadata block for a hypothetical RFC:

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-A-006` |
| Title | A.6 — Knowledge Engine RFC |
| Version | `0.1.0-draft` |
| Status | RFC / Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Engine Architecture RFC |
| Document Type | Architecture RFC |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.V4.PHASE-2.ENGINE-01` |
| Scope | Knowledge Engine architecture, contracts, registry, lifecycle, and specialization constraints |
| Out of Scope | Implementation, source code, REST APIs, database schema, vector database, LLM calls, certification execution, and ProjectStatus updates |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md` |
| Dependencies | Runtime Architecture (A.3); Engine Platform (A.4); Engine Kernel (A.4.1); Engine Contract (A.4.2); Engine Registry (A.4.3); Metadata Standard (STD-010); Terminology Standard (STD-003) |
| Consumes | A.3; A.4; A.4.1; A.4.2; A.4.3; M.0; M.1; STD-000; STD-003; STD-010; TPL-001 |
| Produces | Knowledge Engine architectural requirements; Knowledge Engine contract; Knowledge Engine registry entry |
| Related Specifications | `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Engine Platform review, STD-010 metadata validation, TPL-001 compliance validation, terminology consistency validation, and explicit Human Governance promotion |
| Certification Status | Not certified |
```

### 29.2 Conforming RFC: Mandatory Section Structure Example

The following demonstrates the mandatory section skeleton for a conforming RFC:

```markdown
# A.6 — Knowledge Engine RFC

>AI-DOS v4 · Engine Architecture RFC
> Engine Specialization · Draft / Non-canonical

---

## Document Metadata

[Full STD-010 metadata block as shown in 29.1]

---

## Executive Summary

[3-5 sentences summarizing the Knowledge Engine RFC's purpose, scope, and key decisions.]

---

## Purpose

[2+ paragraphs explaining why this Engine RFC exists and what problem it solves.]

---

## Scope

1. Knowledge Engine architecture.
2. Knowledge Engine contracts and interfaces.
3. Knowledge Engine lifecycle and state.
4. Knowledge Engine registry integration.
5. Knowledge Engine capability boundaries.

---

## Out of Scope

1. Implementation.
2. Source code.
3. REST APIs and database schema.
4. Certification execution.
5. ProjectStatus updates.

---

## Normative Authority

Human Governance; `AGENTS.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/FrameworkGovernance.md`

---

## Normative References

- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`
- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`

---

## Dependencies

- Runtime Architecture (A.3)
- Engine Platform (A.4)
- Engine Contract (A.4.2)
- Engine Registry (A.4.3)
- STD-010, STD-003

---

## Architecture

[Detailed architecture with diagrams, models, and structural descriptions.]

---

## Design Decisions

[Key decisions with context, options considered, and rationale.]

---

## Ownership

[Owner, Maintainers, Review Authority, Approval Authority.]

---

## Responsibilities

1. [Owned responsibility]
2. [Owned responsibility]
...

---

## Non Responsibilities

1. [Explicit non-responsibility]
2. [Explicit non-responsibility]
...

---

## Interfaces

[Interface descriptions with input/output contracts.]

---

## Lifecycle

[Lifecycle state machine, transitions, and rules.]

---

## Validation

[Validation criteria, methods, and expected evidence.]

---

## Risks

1. [Risk with severity and mitigation]
2. [Risk with severity and mitigation]
...

---

## Open Questions

1. [Question with context and proposed resolution]
2. [Question with context and proposed resolution]
...

---

## Completion Criteria

1. [Testable criterion]
2. [Testable criterion]
...

---

## Version History

| Version | Status | Notes |
|:---|:---|:---|
| `0.1.0-draft` | Draft | Initial draft. |
```

### 29.3 Reference Implementations

The following existing RFC documents serve as reference implementations. They predate TPL-001 and are not required to conform retroactively, but they demonstrate the structural patterns that TPL-001 codifies:

| RFC | File | Reference Value |
|:---|:---|:---|
| A.3 | `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md` | Runtime Architecture RFC structure |
| A.4 | `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md` | Engine Architecture RFC structure |
| A.5.0 | `docs/AI/Architecture/RFC/EngineSpecializations/A.5.0-Engine-Specialization-RFC-Template.md` | Engine Specialization RFC Template structure |
| STD-010 | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Standard RFC structure |
| TPL-000 | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Template Standard RFC structure |

---

## 30. RFC Anti Patterns

### 30.1 Structural Anti Patterns

| Anti Pattern | Description | Why It Is Harmful | Correct Approach |
|:---|:---|:---|:---|
| **Missing Out of Scope** | RFC declares Scope but omits Out of Scope | Allows scope creep during review and promotion; creates implicit unbounded authority | Always include Out of Scope with at least one item |
| **Empty Open Questions** | RFC at Draft stage has no open questions | Indicates insufficient scope exploration or failure to identify unknowns | List genuine open questions; use "None" only after all questions are resolved |
| **Metadata After Content** | Document Metadata block appears after body content | Violates STD-010 placement requirement; impairs automated metadata extraction | Place Document Metadata immediately after the title and classification block |
| **Missing Version History** | RFC has no Version History or an empty table | Destroys historical traceability; prevents audit and certification | Always include Version History with at least the initial version entry |
| **Flat Structure** | RFC uses no subsections; all content is at H2 level | Impairs navigation, review, and validation; makes long sections unreadable | Use H3/H4 subsections within mandatory sections as needed |

### 30.2 Authority Anti Patterns

| Anti Pattern | Description | Why It Is Harmful | Correct Approach |
|:---|:---|:---|:---|
| **Circular Authority** | RFC lists itself or creates a circular reference in authority fields | Breaks authority chain; creates validation paradox | Never list the RFC itself in its own authority fields |
| **Authority Inflation** | RFC lists every known document in Normative Authority | Dilutes actual authority; makes review impossible to assess | List only genuine governance authorities |
| **Missing Consumed Authority** | RFC uses a standard's rules but does not list it in Normative References or Consumes | Creates hidden dependency; breaks traceability | List every consumed authority |
| **Self-Approval** | RFC claims Approved or Canonical status without governance action | Undermines governance process; creates false authority | Advance through defined lifecycle states |

### 30.3 Content Anti Patterns

| Anti Pattern | Description | Why It Is Harmful | Correct Approach |
|:---|:---|:---|:---|
| **Decision Without Rationale** | Design Decisions section states what was decided but not why | Prevents review of decision quality; blocks future reconsideration | Always include context, options considered, and rationale |
| **Scope by Omission** | RFC describes only what it does, relying on absence to define boundaries | Creates ambiguity; different readers infer different boundaries | Explicitly state both Scope and Out of Scope |
| **Implementation in RFC** | RFC includes code, API definitions, or database schemas | Conflates architecture with implementation; creates premature commitment | Keep RFC at architectural level; implementation belongs in separate documents |
| **Vague Completion Criteria** | Completion Criteria uses non-testable language like "done" or "complete" | Prevents objective assessment of RFC completion | Use testable, measurable criteria |

---

## 31. Best Practices

### 31.1 Authoring Best Practices

1. **Write Out of Scope First**: Before writing Scope, write Out of Scope. This forces explicit boundary definition before scope expansion. Then write Scope as the complement.
2. **Declare Open Questions Early**: Identify open questions at the start of the RFC authoring process. Track them as the RFC evolves. Questions resolved during authoring should be recorded in Design Decisions.
3. **Use Diagrams**: Architecture sections should include at least one structural diagram. Diagrams communicate relationships that prose cannot convey as efficiently.
4. **Separate Decisions from Description**: Architecture describes the design. Design Decisions explains why the design was chosen. Keep these sections distinct.
5. **Write for the Future Reader**: An RFC will be consumed by reviewers, implementers, certifiers, and future architects who were not present during its creation. Write with enough context that a new reader can understand the RFC without tribal knowledge.

### 31.2 Review Best Practices

1. **Validate Metadata First**: Before reviewing content, validate metadata completeness. Metadata errors often indicate structural errors in the RFC.
2. **Check Authority Chain**: Verify that every authority listed in Normative Authority actually governs the RFC. Remove inflated authority entries.
3. **Verify Non-Redefinition**: Check that the RFC does not create alternative definitions for any concept defined by its consumed authorities. This is the most common source of framework incoherence.
4. **Test Completion Criteria**: Read each completion criterion and ask: "Could an independent reviewer determine whether this is satisfied?" If not, the criterion needs to be more specific.
5. **Preserve Findings Precision**: Review findings should identify the specific section, field, or rule that is violated. Generic findings like "needs work" are not actionable.

### 31.3 Lifecycle Best Practices

1. **Do Not Skip States**: Every lifecycle state exists for a reason. Skipping Review to get to Approved faster undermines the quality gate that Review provides.
2. **Record Everything**: If a version was created, it should appear in Version History. If a status changed, it should be recorded. If a finding was resolved, the resolution should be noted.
3. **Promote With Evidence**: Canonical promotion should be accompanied by a summary of the evidence that justified it: review findings, certification evidence, and governance authorization.
4. **Respect the Difference Between Approved and Canonical**: Approved means the RFC has passed review and governance approval. Canonical means the RFC is authoritative. These are different states with different implications.

---

## 32. Success Criteria

TPL-001 shall be considered successful when:

1. **Structural Uniformity**: Every new RFC template produced underAI-DOS follows the mandatory section structure defined in Section 15. No new RFC template omits a mandatory section or redefines a mandatory section's purpose.

2. **Metadata Compliance**: Every new RFC document produced from a TPL-001-compliant template passes the Metadata Compliance Matrix (Section 27.2) with zero blocking findings.

3. **Validation Coverage**: The Validation Matrix (Section 28.1) covers all structural, metadata, authority, traceability, lifecycle, and content dimensions. No dimension is unvalidated.

4. **Authority Integrity**: No new RFC document creates circular authority, inflates authority, omits consumed authority, or redefines a consumed authority. The Non-Redefinition Rule (Section 8.6) is satisfied by 100% of new RFCs.

5. **Lifecycle Coherence**: No new RFC document has contradictory Status, Lifecycle Phase, Canonical Status, or Certification Status fields. The Lifecycle Validation Rule (Section 26.1) is satisfied by 100% of new RFCs.

6. **Governance Integration**: TPL-001 review, approval, certification, and promotion processes integrate with Framework Governance without creating parallel governance structures or conflicting with existing governance policy.

7. **Backward Compatibility**: Existing RFC documents are preserved as reference implementations. No existing RFC is invalidated by TPL-001 adoption.

8. **Composability**: At least one domain-specific RFC template standard (e.g., A.5.0) successfully specializes TPL-001 without conflict. The specialization model (Section 6.3) is demonstrated to work.

---

## 33. Future Evolution

### 33.1 Extension Points

TPL-001 is designed for extension without breaking existing compliance. The following extension points are anticipated:

1. **New RFC Categories**: As theAI-DOS framework grows, new categories may be added to Section 10. New categories shall follow the existing category definition structure and shall not conflict with existing categories.

2. **New Taxonomy Types**: As new RFC structural roles emerge, new taxonomy types may be added to Section 9. New types shall follow the existing taxonomy definition structure.

3. **Domain Specialization Standards**: New domain-specific RFC template standards may specialize TPL-001 following the specialization model in Section 6.3. Each specialization shall be a separate TPL-NNN document.

4. **Validation Automation**: Future tooling may automate the Validation Matrix (Section 28.1). TPL-001 does not require automation but is structured to support it.

5. **Template Composition**: Future template standards may compose multiple TPL-001 specializations into composite RFC templates. Composition rules shall be defined in a future TPL-NNN standard.

### 33.2 Evolution Rules

1. TPL-001 shall not be modified in ways that break existing TPL-001-compliant templates or RFC documents.
2. New mandatory sections may be added only through a major version increment and a new review cycle.
3. Existing mandatory sections shall not be removed or renamed.
4. Validation criteria may be tightened but not relaxed without governance authorization.
5. All evolution shall follow the TPL-000 template lifecycle and the Framework Governance decision policy.

### 33.3 Out of Scope for Future Evolution

1. TPL-001 shall not evolve into a Runtime specification.
2. TPL-001 shall not evolve into an Engine Platform specification.
3. TPL-001 shall not absorb TPL-000 governance responsibilities.
4. TPL-001 shall not replace Framework Governance decision policy.

---

## 34. Glossary

| Term | Definition |
|:---|:---|
| **RFC** | Request for Comments; inAI-DOS context, a proposal or definition of architecture submitted for structured review |
| **RFC Template** | A reusable structural standard that defines the mandatory and optional sections for a class of RFCs |
| **RFC Template Standard** | A governance document (such as TPL-001) that defines how RFC templates shall be authored |
| **Mandatory Section** | A section that every RFC document shall include; defined in Section 15 |
| **Optional Section** | A section that an RFC document may include when domain needs require it; defined in Section 16 |
| **Foundation RFC** | An RFC that defines a foundational layer consumed as authority by other RFCs |
| **Architecture RFC** | An RFC that defines architectural structure, contracts, or constraints |
| **Specialization RFC** | An RFC that specializes a parent Architecture RFC for a specific domain |
| **Canonical** | The authoritative status of a document within its declared scope; requires explicit governance promotion |
| **Non-Canonical** | A document that has not been promoted to canonical status; may be used but does not govern |
| **Review Authority** | The governance body responsible for conducting structured review of an RFC |
| **Approval Authority** | The governance body responsible for approving an RFC for advancement |
| **Certification Authority** | The governance body responsible for certifying an RFC meets quality criteria |
| **Traceability** | The property of an RFC having complete, verifiable links to its authorities, inputs, outputs, and relationships |
| **Non-Redefinition Rule** | The principle that an RFC shall not create alternative definitions for concepts defined by its consumed authorities |
| **Compliance Matrix** | A table that maps structural elements to validation criteria and compliance expectations |
| **Validation Matrix** | A table that defines specific validation checks, methods, expected outcomes, and failure severity |
| **Reference Implementation** | An existing RFC document that demonstrates the structural patterns codified by TPL-001 |

---

## 35. Appendices

### Appendix A: RFC Template Skeleton

The following is the complete skeleton that every RFC template shall generate. Domain-specific template standards may add sections but shall not remove or rename any section below.

```markdown
# {Identifier} — {Descriptive Title}

>AI-DOS v{Version} · {Category}
> {Classification} · {Status} / {Canonical Status}

---

## Document Metadata


| Field                  | Value                                                                             |
|:-----------------------|:----------------------------------------------------------------------------------|
| Identifier             | `{AI-DOS-{Prefix}-{Number}}`                                                       | 
| Title                  | {Identifier} — {Descriptive Title}                                                | 
| Version                | `{0.1.0-draft}`                                                                   | 
| Status                 | {RFC / Draft}                                                                     |
| Canonical Status       | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification         | {Taxonomy Type}                                                                   |
| Document Type          | {RFC or Architecture RFC}                                                         |
| Owner                  | {Owner Name}                                                                      |
| Maintainers            | {Maintainer Names}                                                                |
| Review Authority       | {Review Body}                                                                     |
| Approval Authority     | {Approval Body}                                                                   |
| Created                | {YYYY-MM-DD}                                                                      |
| Last Updated           | {YYYY-MM-DD}                                                                      |
| Lifecycle Phase        | Draft                                                                             |
| Traceability ID        | `{AI-DOS.V{N}.{Phase}.{Category}-{Number}}`                                     |
| Scope                  | {Scope description}                                                               |
| Out of Scope           | {Out of Scope description}                                                        |
| Normative Authority    | {Authority list}                                                                  |
| Normative References   | {Reference list with paths}                                                       |
| Dependencies           | {Dependency list}                                                                 |
| Consumes               | {Consumes list}                                                                   |
| Produces               | {Produces list}                                                                   |
| Related Specifications | {Related list or None}                                                            |
| Supersedes             | {None or document identifier}                                                     |
| Superseded By          | {None or document identifier}                                                     |
| Promotion Requirements | {Promotion conditions}                                                            |
| Certification Status   | Not certified                                                                     |

---

## Executive Summary

{3-5 sentences}

---

## Purpose

{2+ paragraphs}

---

## Scope

1. {In-scope item}
...

---

## Out of Scope

1. {Out-of-scope item}
...

---

## Normative Authority

{Authority list in hierarchy order}

---

## Normative References

- {Full path}
...

---

## Dependencies

- {Dependency with context}
...

---

## Architecture

{Architectural design with diagrams and models}

---

## Design Decisions

{Decisions with rationale}

---

## Ownership

{Owner, Maintainers, Review Authority, Approval Authority}

---

## Responsibilities

1. {Responsibility}
...

---

## Non Responsibilities

1. {Non-responsibility}
...

---

## Interfaces

{Interface descriptions}

---

## Lifecycle

{Lifecycle model}

---

## Validation

{Validation criteria}

---

## Risks

1. {Risk with severity and mitigation}
...

---

## Open Questions

1. {Question with context}
...

---

## Completion Criteria

1. {Testable criterion}
...

---

## Version History

| Version | Status | Notes |
|:---|:---|:---|
| `{0.1.0-draft}` | Draft | Initial draft. |
```

### Appendix B: Authority Layer Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Human Governance                         │
│                    (final authority for all)                    │
├─────────────────────────────────────────────────────────────────┤
│                       AGENTS.md                                  │
│                    (repository bootloader)                       │
├─────────────────────────────────────────────────────────────────┤
│                    Governance Atlas                              │
│                 (authority navigation)                           │
├─────────────────────────────────────────────────────────────────┤
│                  Framework Governance                            │
│               (decision policy authority)                       │
├─────────────────────────────────────────────────────────────────┤
│                     Constitution (A.1)                           │
│              (permanent principles and invariants)              │
├─────────────────────────────────────────────────────────────────┤
│                   Meta Models (M.0, M.1)                        │
│          (entity, artifact, and semantic definitions)           │
├─────────────────────────────────────────────────────────────────┤
│              Standards (STD-000, STD-003, STD-010)              │
│         (terminology, metadata, framework standards)            │
├─────────────────────────────────────────────────────────────────┤
│                Template Standard (TPL-000)                      │
│           (template governance, lifecycle, validation)          │
├─────────────────────────────────────────────────────────────────┤
│              RFC Template Standard (TPL-001)                    │
│           (RFC template structure, compliance, validation)      │
├─────────────────────────────────────────────────────────────────┤
│          Domain RFC Template Standards (TPL-NNN)                │
│       (domain-specific RFC content contracts)                   │
├─────────────────────────────────────────────────────────────────┤
│                Individual RFC Documents                         │
│    (architectural proposals and definitions)                    │
└─────────────────────────────────────────────────────────────────┘
```

### Appendix C: Lifecycle State Transition Matrix

| From \ To      | Draft  | Review | Approved | Certified | Canonical | Deprecated | Archived | Retired |
|:---------------|:-------|:-------|:---------|:----------|:----------|:-----------|:---------|:--------|
| **Draft**      | —      | Submit | —        | —         | —         | —          | —        | —       |
| **Review**     | Return | —      | Pass     | —         | —         | —          | —        | —       |
| **Approved**   | Revise | —      | —        | Certify   | —         | —          | —        | —       |
| **Certified**  | Revise | —      | —        | —         | Promote   | —          | —        | —       |
| **Canonical**  | Revise | —      | —        | —         | —         | Deprecate  | —        | —       |
| **Deprecated** | —      | —      | —        | —         | —         | —          | Archive  | Retire  |
| **Archived**   | Reopen | —      | —        | —         | —         | —          | —        | —       |
| **Retired**    | —      | —      | —        | —         | —         | —          | —        | —       |

### Appendix D: Validation Checklist

This checklist may be used for manual validation of RFC documents against TPL-001.

**Metadata Validation:**
- [ ] All mandatory STD-010 fields present
- [ ] Identifier follows category prefix convention
- [ ] Title follows naming convention
- [ ] Version follows semantic versioning with status suffix
- [ ] Status is a valid state value
- [ ] Canonical Status consistent with Status
- [ ] Lifecycle Phase matches Status
- [ ] Certification Status consistent with lifecycle
- [ ] Owner is exactly one named party
- [ ] Review Authority and Approval Authority are declared

**Structural Validation:**
- [ ] All 20 mandatory sections present
- [ ] Sections in correct order
- [ ] Executive Summary has 3-5 sentences
- [ ] Purpose has 2+ paragraphs
- [ ] Scope is non-empty
- [ ] Out of Scope is non-empty
- [ ] Architecture contains diagrams or structured descriptions
- [ ] Design Decisions include rationale
- [ ] Version History is present and chronological

**Authority Validation:**
- [ ] Normative Authority lists genuine authorities only
- [ ] No circular authority references
- [ ] No self-reference in authority fields
- [ ] Dependencies are valid
- [ ] No redefinition of consumed authorities
- [ ] Terminology consistent with STD-003

**Traceability Validation:**
- [ ] All consumed authorities listed
- [ ] All produced artifacts listed
- [ ] Supersedes/Superseded By is bidirectional

**Lifecycle Validation:**
- [ ] Status, Lifecycle Phase, Canonical Status, Version are coherent
- [ ] Version History records all material changes

---

## Version History

| Version       | Status | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `0.1.0-draft` | Draft  | Initial TPL-001 creation. Defines RFC template structure, taxonomy, categories, lifecycle, ownership, authority consumption, metadata requirements, mandatory and optional sections, naming, identifiers, traceability, versioning, status model, review, approval, certification, promotion, validation, compliance matrix, validation matrix, examples, anti-patterns, best practices, success criteria, future evolution, glossary, and appendices. |

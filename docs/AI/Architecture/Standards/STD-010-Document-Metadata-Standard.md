# STD-010 — Document Metadata Standard

> Forge AI v3 · Standards Library  
> Document Metadata · Draft / Non-canonical

---

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-STD-010` |
| Title | STD-010 — Document Metadata Standard |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Documentation Standard |
| Document Type | Framework Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-07 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V3.STD-010` |
| Scope | Mandatory document metadata model for Forge AI documents |
| Out of Scope | Normalizing existing documents, rewriting existing RFCs or Standards, updating ProjectStatus, implementing tooling |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/Architecture/A.1-Constitution.md` when approved; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` |
| Normative References | Engine Platform Consistency Review findings; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md`; `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` |
| Dependencies | Standards governance, artifact identity, authority hierarchy, lifecycle governance, traceability model |
| Consumes | Authority model, standards lifecycle, artifact metadata expectations, Engine Platform consistency findings |
| Produces | Mandatory metadata schema, relationship taxonomy, document class expectations, lifecycle model, migration strategy |
| Related Specifications | A.4 Engine Architecture RFC family; future Engine RFCs; future metadata validation tooling |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Documentation standards review, governance approval, traceability validation, migration readiness assessment |
| Certification Status | Not certified |

---

## 2. Executive Summary

STD-010 defines the mandatory metadata model that every Forge AI document shall follow after this standard is approved and adopted through Framework Governance.

The standard exists because Forge AI documents currently use inconsistent headers, mixed authority chains, uneven ownership metadata, incomplete lifecycle metadata, and ambiguous relationship labels. The Engine Platform Consistency Review identified these inconsistencies as a mandatory quality gate before metadata normalization and individual Engine RFC development.

STD-010 separates document governance into explicit metadata fields. In particular, this standard distinguishes:

- Normative Authority;
- Normative References;
- Dependencies;
- Consumes;
- Produces;
- Related Specifications;
- Blocks;
- Blocked By;
- Supersedes;
- Superseded By;
- Review Status;
- Canonical Status;
- Certification Status.

This standard does not normalize existing documents. It does not rewrite A.4, rewrite Standards, update `docs/ProjectStatus.md`, or implement tooling. It defines the metadata standard that future normalization work shall consume.

---

## 3. Metadata Philosophy

### 3.1 Purpose of Metadata

Document metadata is the identity, governance, traceability, ownership, lifecycle, and relationship contract for a Forge AI document.

Metadata shall allow humans, AI agents, validation systems, review systems, certification systems, registries, knowledge graph projections, and future tooling to answer:

1. What document is this?
2. Which version is being used?
3. Is it draft, approved, canonical, deprecated, legacy, archived, or retired?
4. Who owns it?
5. Who maintains it?
6. Who may review it?
7. Who may approve it?
8. What is its scope?
9. What is explicitly out of scope?
10. What governs it?
11. What does it depend on?
12. What does it consume?
13. What does it produce?
14. What related documents must be understood without implying authority?
15. What does it supersede?
16. What supersedes it?
17. What blocks or is blocked by it?
18. What is required for promotion?
19. What is its certification status?
20. How is it traced through the Framework?

### 3.2 Metadata Principles

Forge AI metadata shall preserve these principles:

- Identity before reference.
- Authority before dependency.
- Ownership before maintenance.
- Scope before interpretation.
- Lifecycle before use.
- Review before approval.
- Approval before canonical status.
- Certification before certified state claims.
- Relationships before migration.
- Traceability before automation.

### 3.3 Separation of Concerns

Metadata fields shall not be overloaded.

A document that governs another document belongs in **Normative Authority**.

A document that must be conformed to but does not directly govern lifecycle or approval belongs in **Normative References**.

A document, subsystem, or standard required for interpretation or operation belongs in **Dependencies**.

A document, model, schema, artifact, standard, or record used as input belongs in **Consumes**.

A document, model, schema, artifact, standard, or record created or defined by the document belongs in **Produces**.

A document that is contextually relevant but not governing, required, consumed, or produced belongs in **Related Specifications**.

### 3.4 Non-Canonical Draft Rule

A draft metadata declaration does not make a document canonical.

A document may have complete metadata while still being non-canonical, uncertified, unapproved, or blocked from promotion.

### 3.5 Documentation-Only Rule

This standard defines metadata requirements only. It does not implement validation tooling, migration scripts, document rewriting, registry synchronization, or knowledge graph projection logic.

---

## 4. Metadata Schema

### 4.1 Mandatory Metadata Block

Every Forge AI document shall include a metadata block near the top of the document after the title and introductory classification block.

The required section heading shall be:

```markdown
## Document Metadata
```

The required table shape shall be:

```markdown
| Field | Value |
|:---|:---|
```

### 4.2 Mandatory Fields

The following fields are mandatory for every Forge AI document unless a governed exception is recorded.

| Field | Requirement | Example |
|:---|:---|:---|
| Identifier | Stable machine-readable document identifier. | `FORGE-STD-010` |
| Title | Human-readable document title. | STD-010 — Document Metadata Standard |
| Version | Semantic or governed version string. | `0.1.0-draft` |
| Status | Current working status. | Draft |
| Canonical Status | Whether the document is canonical, non-canonical, transitional, deprecated, legacy, archived, or retired. | Non-canonical until approved |
| Classification | Governance or domain classification. | Documentation Standard |
| Document Type | Document class or artifact type. | Framework Standard |
| Owner | Accountable owner for correctness and governance alignment. | Framework Governance |
| Maintainers | Parties responsible for upkeep. | Framework Architecture Team |
| Review Authority | Role or body authorized to review the document. | Enterprise Documentation Standards Board |
| Approval Authority | Role or body authorized to approve or promote the document. | Human Governance / Framework Governance |
| Created | Creation date in `YYYY-MM-DD` format. | 2026-07-07 |
| Last Updated | Last material update date in `YYYY-MM-DD` format. | 2026-07-07 |
| Lifecycle Phase | Current lifecycle phase. | Draft |
| Traceability ID | Stable trace identifier for governance, audit, review, and registry use. | `FORGE-AI.V3.STD-010` |
| Scope | What the document governs, defines, or covers. | Mandatory document metadata model |
| Out of Scope | What the document explicitly does not do. | Existing document normalization |
| Normative Authority | Documents or governance bodies that can override or govern this document. | `AGENTS.md`, A.1, STD-000 |
| Normative References | Documents this document must conform to or cite as normative design input. | M.0, M.1, STD-001 |
| Dependencies | Required upstream documents, subsystems, concepts, or artifacts. | Artifact identity model |
| Consumes | Inputs this document uses. | Engine review findings |
| Produces | Outputs this document defines or creates. | Metadata schema |
| Related Specifications | Contextual peer or adjacent documents. | A.4 RFC family |
| Supersedes | Documents replaced by this document. Use `None` when not applicable. | None |
| Superseded By | Document that replaces this document. Use `None` when not applicable. | None |
| Promotion Requirements | Conditions required to move toward approved or canonical status. | Review and governance approval |
| Certification Status | Certification state. | Not certified |

### 4.3 Conditionally Mandatory Fields

The following fields are conditionally mandatory when applicable:

| Field | Required When | Meaning |
|:---|:---|:---|
| Blocks | The document prevents another document or work item from proceeding. | Downstream work cannot proceed until this document reaches a required state. |
| Blocked By | The document cannot proceed until another document, review, decision, or artifact is completed. | Upstream blocker exists. |
| Review Status | The document has entered review or requires review tracking. | Draft Review, In Review, Review Passed, Review Failed. |
| Approval Status | The document has been submitted for approval. | Pending Approval, Approved, Rejected, Deferred. |
| Compliance Level | Standards or governance compliance level applies. | L1 Draft, L2 Review Ready, L3 Approved. |
| Migration Status | The document is part of migration planning or normalization. | Not Started, In Progress, Complete, Deferred. |
| Deprecation Notice | The document is deprecated or scheduled for deprecation. | Replacement and date. |
| Archive Location | The document has been archived or moved. | Historical path or registry pointer. |
| Registry Entry | A registry entry exists for the document. | Registry identifier. |
| Knowledge Graph Projection | A graph projection exists or is required. | Node or projection identifier. |

### 4.4 Field Value Rules

Metadata field values shall be:

- explicit;
- traceable;
- stable enough for governance use;
- understandable to humans and AI agents;
- free of hidden relationship assumptions;
- updated when lifecycle, ownership, authority, or relationships materially change.

Metadata field values shall not:

- mix authority with dependency;
- use vague references such as “various documents”;
- imply canonical status without approval;
- imply certification without certification evidence;
- hide blockers;
- omit ownership;
- substitute implementation availability for architectural approval.

### 4.5 Identifier Rules

Identifiers shall be stable and unique within Forge AI.

Recommended identifier prefixes:

| Prefix | Document Family |
|:---|:---|
| `FORGE-A` | Architecture documents and RFCs |
| `FORGE-STD` | Standards |
| `FORGE-META` | Meta Models |
| `FORGE-BP` | Blueprints |
| `FORGE-AUD` | Audits |
| `FORGE-REP` | Reports |
| `FORGE-SPEC` | Specifications |
| `FORGE-ROAD` | Roadmaps |
| `FORGE-MIG` | Migration documents |
| `FORGE-GOV` | Governance documents |
| `FORGE-HIST` | Historical documents |
| `FORGE-LEGACY` | Legacy documents |

### 4.6 Version Rules

Version values shall distinguish draft, beta, release candidate, approved, and canonical states when applicable.

Recommended examples:

```text
0.1.0-draft
1.0.0-draft
1.0.0-review
1.0.0-approved
1.0.0-canonical
1.1.0-deprecated
```

Version changes shall be recorded when metadata, scope, normative authority, lifecycle status, or produced specifications materially change.

---

## 5. Relationship Taxonomy

### 5.1 Relationship Overview

Relationship metadata defines how documents interact without collapsing governance boundaries.

Relationship labels shall be used precisely. A relationship label is not interchangeable with another label.

### 5.2 Relationship Definitions

| Relationship | Use When | Must Not Be Used When |
|:---|:---|:---|
| Authority | The referenced body or document governs, overrides, approves, or constrains this document. | The referenced document is merely background, adjacent, or consumed as input. |
| Reference | The referenced document provides normative design input or required conformance context. | The referenced document is required for operation or directly governs approval. |
| Dependency | This document cannot be correctly interpreted, validated, or used without the referenced document, artifact, subsystem, or concept. | The referenced item is merely related or optional. |
| Consumes | This document uses another artifact, model, standard, report, finding, or specification as input. | This document is only adjacent to the other item. |
| Produces | This document defines, creates, authorizes, or outputs another artifact, model, schema, taxonomy, requirement, or specification. | This document merely mentions or references another item. |
| Related | The referenced document is contextually relevant but does not govern, constrain, block, or serve as required input. | A stronger relationship exists. |
| Blocks | This document must reach a required state before another document, workflow, or task can proceed. | The relationship is only advisory. |
| Blocked By | This document cannot proceed until another document, decision, review, approval, or artifact is complete. | The upstream item is optional or merely contextual. |
| Supersedes | This document replaces a prior document in whole or in defined part. | The document merely clarifies or references a prior document. |
| Superseded By | This document has been replaced by another document in whole or in defined part. | A newer document exists but has not replaced this one. |

### 5.3 Authority

Authority identifies governance sources that can override, approve, constrain, or invalidate this document.

Authority shall include only documents or governance bodies with actual governance power over the document.

Authority shall not be used as a catch-all for references, dependencies, consumed documents, related documents, or architectural sequence.

### 5.4 Reference

A Reference identifies a normative source that informs or constrains design without necessarily being direct approval authority.

References may include standards, meta models, architecture RFCs, review findings, or approved specifications.

### 5.5 Dependency

A Dependency identifies something required for the document to function, be interpreted correctly, or be validated.

Dependencies may be documents, standards, schemas, registries, meta models, lifecycle definitions, or governance procedures.

### 5.6 Consumes

Consumes identifies inputs used by the document.

A consumed input does not automatically become authority.

Examples:

- an audit consumes evidence;
- a report consumes findings;
- a standard consumes review findings;
- an RFC consumes a standard;
- a migration document consumes a roadmap.

### 5.7 Produces

Produces identifies outputs generated, defined, or authorized by the document.

Examples:

- a standard produces a schema;
- an RFC produces architectural requirements;
- a roadmap produces phase direction;
- an audit produces findings;
- a report produces recommendations.

### 5.8 Related

Related identifies contextual adjacency.

Related documents shall not be treated as authority, dependencies, or required inputs unless another relationship field explicitly says so.

### 5.9 Blocks and Blocked By

Blocks and Blocked By define sequencing constraints.

A document may block downstream work when governance, quality gates, validation, or architecture sequencing require it.

A document may be blocked by missing authority, incomplete review, unresolved findings, missing dependencies, or unapproved upstream documents.

### 5.10 Supersedes and Superseded By

Supersession identifies replacement.

Supersedes and Superseded By shall specify whether replacement is complete or partial.

Superseded documents shall retain historical traceability and shall not be deleted solely because a replacement exists.

---

## 6. Document Classes

### 6.1 Standard

A Standard defines reusable governance, structure, validation, terminology, schema, lifecycle, or documentation rules.

Metadata expectations:

- must include standards authority;
- must identify compliance and certification expectations when applicable;
- must define what documents consume the standard;
- must define promotion requirements;
- must state whether it is canonical.

### 6.2 RFC

An RFC proposes or defines architecture for review.

Metadata expectations:

- must identify parent architecture and consumed standards;
- must clearly state non-canonical status until approval;
- must identify review authority and approval authority;
- must separate normative authority from RFC dependencies;
- must identify produced architectural requirements.

### 6.3 Meta Model

A Meta Model defines foundational entity, relationship, artifact, lifecycle, or semantic structures.

Metadata expectations:

- must identify constitutional or framework authority;
- must define produced conceptual models;
- must identify standards and specifications that consume it;
- must include strict version and lifecycle metadata.

### 6.4 Blueprint

A Blueprint defines strategic target architecture, roadmap direction, or integrated system design.

Metadata expectations:

- must state whether it is planning input, transitional, approved, or canonical;
- must identify dependent architecture areas;
- must identify produced target states or migration direction;
- must not imply authority unless governance approved.

### 6.5 Audit

An Audit evaluates conformance, consistency, risk, or readiness.

Metadata expectations:

- must identify audit scope;
- must identify evidence consumed;
- must identify findings produced;
- must state review/certification implications;
- must not become architecture authority by observation alone.

### 6.6 Report

A Report communicates findings, recommendations, readiness, risk, or completion status.

Metadata expectations:

- must identify consumed evidence;
- must identify produced recommendations or findings;
- must state whether it is advisory, review input, or certification input;
- must not imply approval unless explicitly approved.

### 6.7 Roadmap

A Roadmap defines planned sequencing, phases, stages, or target direction.

Metadata expectations:

- must identify planning authority;
- must identify scope and non-canonical status when applicable;
- must identify blocked and blocking relationships;
- must not promote architecture by roadmap inclusion alone.

### 6.8 Migration

A Migration document defines transition strategy from one framework state to another.

Metadata expectations:

- must identify source state and target state;
- must identify dependencies and blockers;
- must identify migration status;
- must preserve legacy and historical traceability;
- must not supersede documents unless explicitly approved.

### 6.9 Legacy

A Legacy document remains valid for compatibility or historical operations but is not the target architecture.

Metadata expectations:

- must identify canonical replacement when one exists;
- must identify allowed use;
- must identify restrictions;
- must identify migration path or retirement criteria.

### 6.10 Historical

A Historical document records past state, past decisions, or certified history.

Metadata expectations:

- must identify historical scope;
- must identify whether it is read-only;
- must identify superseding documents if applicable;
- must not be treated as live authority unless explicitly stated.

---

## 7. Lifecycle Model

### 7.1 Lifecycle States

Forge AI documents shall use the following lifecycle states.

| State | Meaning | Allowed Use |
|:---|:---|:---|
| Draft | Work is proposed or in progress. | May be reviewed; not canonical. |
| Review | Document is under structured review. | May produce findings; not canonical unless already canonical and under revision. |
| Approved | Governance has approved the document. | May be used as approved guidance; canonical status still requires explicit declaration. |
| Canonical | Document is authoritative within its declared scope. | May govern downstream documents and validation. |
| Deprecated | Document remains available but should not be used for new work except under defined conditions. | May be consumed for migration or compatibility. |
| Legacy | Document remains operationally valid for historical or compatibility reasons. | May be used only within allowed legacy scope. |
| Archived | Document is preserved as a historical record. | Read-only unless governance reopens it. |
| Retired | Document is removed from active governance use. | Historical trace only. |

### 7.2 Lifecycle Rules

- Draft does not imply approval.
- Review does not imply approval.
- Approved does not imply canonical unless Canonical Status says so.
- Canonical scope shall be explicit.
- Deprecated documents shall identify replacement or deprecation reason when known.
- Legacy documents shall identify allowed use.
- Archived documents shall preserve traceability.
- Retired documents shall not be used as active authority.

### 7.3 Canonical Status

Canonical Status shall state whether the document is:

- Non-canonical;
- Transitional;
- Canonical;
- Canonical within limited scope;
- Deprecated;
- Legacy;
- Archived;
- Retired.

### 7.4 Review Status

Review Status shall be used when review tracking is required.

Allowed values:

- Not Reviewed;
- Review Required;
- In Review;
- Review Passed;
- Review Passed with Observations;
- Review Failed;
- Review Deferred.

### 7.5 Certification Status

Certification Status shall be used to state certification posture.

Allowed values:

- Not Certified;
- Certification Not Required;
- Certification Required;
- Certification Pending;
- Certified;
- Certified with Conditions;
- Certification Failed;
- Certification Deferred.

---

## 8. Governance Rules

### 8.1 Metadata Requirement

Every new Forge AI document shall include STD-010 metadata after STD-010 is approved and adopted.

Existing documents shall not be considered invalid solely because they predate STD-010. Existing documents require governed migration before metadata nonconformance may be treated as a quality failure.

### 8.2 Authority Rules

Normative Authority shall be ordered from highest authority to nearest governing authority.

Normative Authority shall not include documents that are merely related, consumed, or referenced.

When a document is non-canonical, its metadata shall not claim authority beyond its approved scope.

### 8.3 Ownership Rules

Every document shall have exactly one accountable Owner.

Maintainers may be multiple.

Maintainers do not replace Owner accountability.

Review Authority and Approval Authority shall be explicit when the document affects governance, architecture, standards, lifecycle, validation, review, certification, or project state.

### 8.4 Lifecycle Rules

Lifecycle Phase, Status, Canonical Status, Review Status when applicable, Approval Status when applicable, and Certification Status shall not conflict.

A document shall not claim Canonical status without required approval.

A document shall not claim Certified status without certification evidence.

### 8.5 Relationship Rules

Relationship fields shall use the taxonomy in this standard.

If a document has no value for a relationship field, the value shall be `None` rather than omitted for mandatory fields.

A relationship shall not be duplicated across fields unless the relationship truly has multiple meanings.

### 8.6 Traceability Rules

Traceability ID shall be stable.

Traceability ID shall not change when a file is moved unless governance explicitly creates a replacement identity.

Traceability ID shall appear in review, audit, certification, registry, and knowledge graph records when those records reference the document.

### 8.7 Migration Rules

Metadata normalization of existing documents shall occur only through approved migration work.

Migration work shall preserve document history, existing authority notices, transitional status, and historical context.

STD-010 does not authorize bulk rewriting by itself.

---

## 9. Examples

### 9.1 Standard Example

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-STD-011` |
| Title | STD-011 — Example Standard |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until approved |
| Classification | Framework Standard |
| Document Type | Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Framework Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-07 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V3.STD-011` |
| Scope | Example metadata standardization pattern |
| Out of Scope | Tooling implementation |
| Normative Authority | Human Governance; `AGENTS.md`; STD-000 |
| Normative References | STD-010 |
| Dependencies | Standards governance |
| Consumes | Metadata model |
| Produces | Example standard rules |
| Related Specifications | None |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Standards review and governance approval |
| Certification Status | Not certified |
```

### 9.2 RFC Example

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-004.8` |
| Title | A.4.8 — Example Engine RFC |
| Version | `0.1.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed and approved |
| Classification | Engine Architecture RFC |
| Document Type | RFC |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Architecture Review Board |
| Approval Authority | Framework Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-07 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V3.A4.8` |
| Scope | Example Engine architecture proposal |
| Out of Scope | Implementation code and ProjectStatus updates |
| Normative Authority | Human Governance; `AGENTS.md`; A.1; STD-000 |
| Normative References | A.3 Runtime Architecture RFC; A.4 Engine Architecture RFC; STD-010 |
| Dependencies | Engine Kernel; Engine Contract; Engine Registry |
| Consumes | Engine Platform architecture |
| Produces | Engine-specific architecture requirements |
| Related Specifications | A.4.1 through A.4.7 |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Architecture review, validation, governance approval |
| Certification Status | Not certified |
```

### 9.3 Audit Example

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AUD-001` |
| Title | AUD-001 — Example Consistency Audit |
| Version | `1.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical audit evidence until accepted |
| Classification | Architecture Audit |
| Document Type | Audit |
| Owner | Framework Governance |
| Maintainers | Audit Team |
| Review Authority | Enterprise Architecture Review Board |
| Approval Authority | Framework Governance |
| Created | 2026-07-07 |
| Last Updated | 2026-07-07 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.V3.AUD-001` |
| Scope | Consistency assessment |
| Out of Scope | Implementing corrections |
| Normative Authority | Human Governance; `AGENTS.md` |
| Normative References | STD-010; relevant architecture documents |
| Dependencies | Evidence corpus |
| Consumes | Reviewed documents and evidence |
| Produces | Findings, risks, recommendations |
| Related Specifications | Related architecture RFCs |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Audit review and finding acceptance |
| Certification Status | Certification Not Required |
```

---

## 10. Migration Strategy

### 10.1 Migration Purpose

The purpose of metadata migration is to normalize Forge AI documents without changing their approved architecture, governance meaning, or historical record.

### 10.2 Migration Principles

Migration shall follow these principles:

- Do not change document meaning while normalizing metadata.
- Do not promote documents by adding metadata.
- Do not convert references into authority.
- Do not remove transitional notices unless governance approves removal.
- Do not erase legacy or historical context.
- Do not update ProjectStatus unless a governed project state update is explicitly authorized.
- Do not implement tooling as part of document-only metadata normalization.

### 10.3 Migration Order

Recommended future migration order:

1. Standards Library metadata normalization.
2. Architecture RFC metadata normalization.
3. Meta Model metadata normalization.
4. Blueprint metadata normalization.
5. Audit and Report metadata normalization.
6. Roadmap and Migration document metadata normalization.
7. Governance document metadata normalization.
8. Legacy and Historical document metadata classification.
9. Future Engine RFC metadata application.

### 10.4 Migration Evidence

Each future metadata migration shall produce evidence showing:

- documents changed;
- fields added;
- relationship fields separated;
- authority fields preserved or clarified;
- lifecycle status preserved;
- canonical status not accidentally promoted;
- ProjectStatus not modified unless authorized;
- validation and review outcomes.

### 10.5 Migration Non-Goals

Metadata migration shall not:

- rewrite architecture;
- alter approved standards content;
- certify documents;
- promote draft documents;
- retire documents without governance;
- implement validators;
- change source-of-truth hierarchy.

---

## 11. Completion Checklist

| Requirement | Status |
|:---|:---|
| Executive Summary provided | Complete |
| Metadata Philosophy defined | Complete |
| Metadata Schema defined | Complete |
| Mandatory fields included | Complete |
| Normative Authority separated from references and dependencies | Complete |
| Relationship Taxonomy defined | Complete |
| Authority / Reference / Dependency / Consumes / Produces / Related distinctions defined | Complete |
| Blocks and Blocked By defined | Complete |
| Supersedes and Superseded By defined | Complete |
| Document Classes defined | Complete |
| Lifecycle Model defined | Complete |
| Review Status, Canonical Status, and Certification Status addressed | Complete |
| Governance Rules defined | Complete |
| Examples provided | Complete |
| Migration Strategy provided | Complete |
| Existing documents left unmodified | Complete |
| ProjectStatus update avoided | Complete |
| Tooling implementation avoided | Complete |

---

## 12. Completion Report

STD-010 defines the draft Forge AI Document Metadata Standard.

It establishes the mandatory metadata model for standards, RFCs, meta models, blueprints, audits, reports, specifications, roadmaps, migration documents, governance documents, future Engine RFCs, legacy documents, and historical documents.

It directly addresses the Engine Platform Consistency Review findings concerning header inconsistency, authority ambiguity, mixed references and dependencies, missing ownership metadata, missing lifecycle metadata, and missing relationship metadata.

This document is draft, non-canonical, and not certified. Promotion requires documentation standards review, governance approval, traceability validation, and migration readiness assessment.

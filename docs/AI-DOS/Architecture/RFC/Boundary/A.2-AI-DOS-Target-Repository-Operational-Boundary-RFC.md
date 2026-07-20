# A.2 — AI-DOS / Target Project Operational Boundary RFC

> Architecture RFC · Product/Target separation · Execution-provider boundary

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-002` |
| Title | A.2 — AI-DOS / Target Project Operational Boundary RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and explicitly promoted by Human Governance |
| Classification | Architecture RFC |
| Document Type | RFC |
| Artifact Family | Architecture Artifact |
| Artifact Type | Architecture RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-15 |
| Scope | Defines the permanent ownership, authority, truth, context, execution, and evidence boundary among the AI-DOS product, a Target Project, and an Execution Provider. |
| Out of Scope | Runtime internals, Engine internals, distribution packaging, provider implementation, Target planning design, Target state mutation, installation procedure, configuration syntax, and canonical promotion. |
| Normative Authority | Human Governance; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Human Governance; A.1 Constitution; applicable Governance, Meta, and Standards authorities. |
| Consumes | Constitutional authority, product identity, artifact identity, terminology, metadata, ownership, and governance constraints. |
| Produces | Product/Target boundary, truth-domain model, Target Context model, Execution Provider role, authority direction, self-application model, invariants, conformance requirements, and stop conditions. |
| Downstream Conforming Specifications | A.3 Runtime Architecture RFC; A.4 Engine Platform RFC family; A.5 Engine Specialization RFC family; A.6 Distribution Foundation RFC; System Layer; Operational Core; Agent Architecture; provider and installation specifications. |
| Historical Evidence | `docs/AI/Architecture/Discovery/A.0-Framework-Audit.md`; applicable architecture reports. Historical evidence is non-normative unless explicitly promoted. |
| Supersedes | `AI-DOS.V2.ARCH-002` architecture-specification identity and the former AI-DOS self-hosting / AI-DOS Agent boundary model. |
| Superseded By | None |
| Promotion Requirements | Architecture consistency review, product-purity validation, dependency-direction validation, Framework Governance review, and explicit Human Governance promotion. |
| Certification Status | Not certified |

---

## 1. Decision

AI-DOS, a Target Project, and an Execution Provider are separate architectural concerns.

```text
AI-DOS Product
    +
Resolved Target Context
    ↓
Execution Provider
    ↓
Bounded Target Execution and Evidence
```

The governing decision is:

1. AI-DOS owns reusable product truth and public operating contracts.
2. A Target Project owns its mission, planning, operational state, architecture, source, constraints, validation requirements, and project-specific decisions.
3. An Execution Provider consumes applicable AI-DOS product contracts and Resolved Target Context to perform only explicitly authorized work.
4. Context assembly does not create a third source of truth.
5. No participant may silently transfer ownership between product truth and Target truth.

## 2. Purpose

This RFC defines where the reusable AI-DOS product ends and where a Target Project begins.

It provides the stable boundary that downstream Runtime, Engine, Distribution, System, Operational, Agent, and provider specifications must respect. It does not define those downstream architectures.

The RFC exists to prevent:

- Target-specific planning from becoming AI-DOS product truth;
- AI-DOS architecture from owning a Target's state or source;
- an Execution Provider from becoming an authority source;
- Forge AI self-application from being confused with AI-DOS product identity;
- external Target operation from falling back to Forge AI paths or assumptions;
- lower-level specifications from reversing product/Target ownership.

## 3. Architectural Parties

### 3.1 AI-DOS Product

AI-DOS is the reusable AI Operating System product.

AI-DOS may own reusable product authorities and assets including:

- Constitution and product governance;
- Meta Models and Standards;
- architecture RFCs;
- Runtime and Engine contracts;
- System Layer contracts;
- Operational Core contracts;
- reusable Agent Architecture;
- reusable Commands, Workflows, and Templates;
- distribution and installation contracts;
- validation, review, certification, and evidence semantics.

AI-DOS does not own a Target Project's mission, Roadmap, DevelopmentPhases, ProjectStatus, source code, operational state, protected areas, validation commands, or project-specific decisions.

### 3.2 Target Project

A Target Project is an independent consumer and authority domain that uses AI-DOS for bounded work.

A Target Project may own:

- mission and product intent;
- repository boot and local authority routing;
- Roadmap, DevelopmentPhases, ProjectStatus, and capability state;
- project architecture and design decisions;
- source code and implementation state;
- constraints, protected areas, and frozen areas;
- validation commands and acceptance criteria;
- project-specific governance and approval decisions;
- project evidence and operational records.

A Target Project may consume AI-DOS contracts but shall not redefine AI-DOS constitutional or reusable product authority.

### 3.3 Execution Provider

An Execution Provider is the durable architectural role that resolves and applies AI-DOS contracts and Resolved Target Context within an authorized execution boundary.

Execution Provider specializations may include:

- an AI agent;
- a Local CLI;
- a Local MCP provider;
- a Hosted Provider;
- a future approved execution surface.

An Execution Provider may:

- resolve an invocation;
- consume an installed or otherwise authorized AI-DOS distribution;
- resolve the Target Project;
- assemble bounded context;
- perform authorized work;
- validate results;
- produce evidence and completion reports.

An Execution Provider does not own AI-DOS product truth or Target truth. It does not approve, promote, certify, release, or mutate protected state without explicit authority.

## 4. Truth Domains

### 4.1 AI-DOS Product Truth

AI-DOS Product Truth consists of approved reusable product authorities, contracts, standards, architecture, and versioned product artifacts.

Product truth is independent of any single Target Project.

### 4.2 Target Truth

Target Truth consists of Target-owned identity, planning, state, architecture, source, constraints, validation requirements, and decisions.

Target Truth remains Target-owned whether the Target is Forge AI or an independent consumer.

### 4.3 Distribution Truth

A released distribution is an immutable, versioned representation of approved AI-DOS product truth prepared for consumption.

Distribution truth does not include private development planning or Target-specific state.

### 4.4 Assembled Context

Resolved Target Context combines only the task-relevant portions of product truth and Target truth.

Resolved context:

- is bounded by the Invocation Context;
- preserves source attribution and authority;
- does not merge ownership;
- does not become a new authority layer;
- expires or is superseded according to applicable runtime rules.

## 5. Authority Direction

The product-side authority direction is:

```text
Human Governance
    ↓
A.1 Constitution
    ↓
Framework Governance / approved Meta / Standards
    ↓
A.2 Product / Target Operational Boundary RFC
    ↓
Downstream Runtime, Engine, Distribution, System, Operational,
Agent, provider, and installation specifications
```

A.3, A.4, A.5, A.6, System Layer, and Operational Core are downstream conforming authorities or realizations. They are not upstream dependencies of A.2.

The Target-side authority direction is independently owned:

```text
Target Human Authority
    ↓
Target-local authority and planning truth
    ↓
Resolved Target Context
```

These streams are assembled for execution without collapsing their ownership.

## 6. Invocation and Context Boundary

A valid invocation shall resolve at least:

- the requested outcome;
- the selected Target Project;
- the authorized AI-DOS product or distribution;
- applicable Target authority inputs;
- Target objectives and constraints;
- Target execution boundaries;
- Target validation requirements;
- required evidence and completion expectations.

AI-DOS architecture must not require Target resources to use one fixed filename, planning methodology, phase model, or lifecycle vocabulary unless a separate approved contract explicitly requires it.

Target resources are consumed as resolved inputs, not as AI-DOS product authorities.

## 7. Execution Boundary

An Execution Provider shall:

1. verify the invocation and Target selection;
2. resolve applicable AI-DOS product authority;
3. resolve Target-local authority and task context;
4. preserve product/Target ownership boundaries;
5. determine the authorized action;
6. execute only within the authorized Target boundary;
7. validate using applicable product and Target requirements;
8. produce attributable evidence;
9. stop before any unapproved state transition, certification, release, or scope expansion.

The Execution Provider must stop and report a blocker when:

- the Target cannot be resolved;
- required authority is missing or conflicting;
- product and Target ownership cannot be distinguished;
- the requested action exceeds Target execution boundaries;
- a protected or frozen area would be crossed without authority;
- validation requirements cannot be determined;
- the requested action would redefine AI-DOS product truth from Target state;
- external Target execution would require Forge AI fallback paths.

## 8. Forge AI Self-Application Model

Forge AI is the Product Development and self-application Target Project for AI-DOS.

```text
AI-DOS Product
    ↓ consumed by
Forge AI Target Project
    ↓ executed through
Authorized Execution Provider
    ↓ produces
Product-development and Target evidence
```

Forge AI may develop, validate, distribute, operate, and evolve AI-DOS under Human Governance. This does not make AI-DOS itself a Target Project.

Forge AI owns its own:

- mission;
- Roadmap;
- DevelopmentPhases;
- ProjectStatus;
- source and implementation state;
- operational state;
- product-development decisions and evidence.

AI-DOS owns reusable product contracts and released product truth. Forge AI Target truth must not be embedded in reusable AI-DOS architecture.

Independent Target Projects use the same boundary model and must not depend on Forge AI paths, state, or planning.

## 9. Responsibility Matrix

| Concern | AI-DOS Product | Target Project | Execution Provider |
|:---|:---|:---|:---|
| Reusable constitutional and architecture authority | Owns | Consumes as applicable | Applies |
| Target mission and planning | Must not own | Owns | Consumes as applicable |
| Target source and implementation state | Must not own | Owns | May modify only when authorized |
| Execution behavior | Defines reusable contracts | Defines Target constraints | Performs bounded execution |
| Validation semantics | Defines reusable semantics | Defines Target-specific requirements | Executes and reports validation |
| Approval and promotion | Human Governance-controlled | Target authority-controlled | Must not self-approve |
| Evidence | Defines reusable evidence contracts | Owns accepted Target evidence | Produces attributable evidence |
| Distribution | Owns product distribution contracts | Consumes approved distribution | May install or invoke when authorized |

## 10. Constitutional Invariants

The following invariants are mandatory:

1. **Human Governance is final.**
2. **AI-DOS and Target Project identities remain distinct.**
3. **Forge AI is a Target Project, not the AI-DOS product.**
4. **Every truth domain has one owning authority.**
5. **Target planning and live state never become reusable AI-DOS product truth.**
6. **An Execution Provider is never a source of product or Target truth.**
7. **Resolved context preserves ownership and source attribution.**
8. **External Target operation never falls back to Forge AI-specific paths.**
9. **Downstream architecture may specialize this boundary but must not reverse it.**
10. **Distribution exposes approved product truth without exposing private development truth.**
11. **No implicit approval, certification, release, promotion, or state transition is permitted.**
12. **Missing or conflicting authority requires safe stop and escalation.**

## 11. Downstream Conformance

### 11.1 Runtime Architecture

A.3 shall define runtime behavior within this boundary and shall not redefine product or Target ownership.

### 11.2 Engine Platform and Specializations

A.4 and A.5 families shall consume bounded context and preserve authority direction. Engines shall not become sources of Target truth or product approval.

### 11.3 Distribution Foundation

A.6 shall define how approved AI-DOS product truth is packaged and delivered without private repository or Target contamination.

### 11.4 System Layer and Operational Core

System and Operational documents shall resolve Invocation Context and Resolved Target Context without hard-coding Forge AI planning paths as reusable product requirements.

### 11.5 Agent Architecture and Providers

Agent and provider specifications shall treat `Execution Provider` as the stable role and their concrete agent, CLI, MCP, or hosted forms as specializations.

## 12. Non-Goals

This RFC does not:

- define the Runtime lifecycle;
- define Engine contracts or specialization behavior;
- define distribution package formats;
- define CLI, MCP, or hosted-provider implementation;
- define a Target planning methodology;
- require ProjectStatus, DevelopmentPhases, or Roadmap filenames;
- authorize Target mutation;
- approve or certify any downstream artifact;
- make historical discovery evidence normative.

## 13. Validation Requirements

A conforming repository state shall demonstrate:

- A.2 identifies as `AI-DOS.V2.ARCH-RFC-002`;
- A.3 and A.4 are not listed as upstream dependencies or consumed authorities of A.2;
- the active phrase `AI-DOS itself is a valid Target Repository` is absent;
- Forge AI is defined as the self-application Target Project;
- `Execution Provider` is the durable third role;
- ProjectStatus, DevelopmentPhases, Roadmap, source, validation commands, and operational state are Target-owned;
- external Target execution has no Forge AI fallback path;
- downstream RFC and operational documents reference this boundary consistently.

## 14. Consequences

### Positive Consequences

- AI-DOS remains reusable and Target-independent.
- Forge AI can self-apply without contaminating product truth.
- provider evolution from agent to CLI, MCP, or hosted operation remains compatible.
- dependency direction becomes acyclic.
- distribution architecture receives a stable ownership boundary.
- external Target projects can consume AI-DOS without inheriting Forge AI planning.

### Costs

- downstream documents using `AI-DOS Agent` as the permanent architecture role must be reviewed;
- documents that hard-code Target planning paths must be generalized;
- self-hosting language must be replaced with self-application language;
- navigation and metadata may require follow-up normalization.

## 15. Promotion Gate

This RFC may be promoted only when:

1. Framework Governance confirms constitutional alignment with A.1;
2. dependency-direction validation confirms no A.3/A.4 circularity;
3. product-purity validation confirms no Forge AI Target truth is embedded as AI-DOS authority;
4. downstream A.3 through A.6 relationship review is complete;
5. Human Governance explicitly approves promotion.

Until promotion, this RFC remains a draft architecture authority candidate.
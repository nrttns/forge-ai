# A.1 — AI-DOS Constitution

> AI-DOS constitutional authority · Product-independent · Target-independent

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.ARCH.CONSTITUTION.A.1` |
| Title | A.1 — AI-DOS Constitution |
| Version | `4.0.1-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until explicitly promoted by Human Governance |
| Classification | Constitutional Architecture |
| Document Type | Constitution |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-04 |
| Last Updated | 2026-07-15 |
| Scope | Permanent constitutional principles, authority boundaries, product/Target separation, source-of-truth rules, evolution constraints, and amendment rules for AI-DOS. |
| Out of Scope | Target Project planning, implementation design, runtime details, engine details, distribution mechanisms, commands, workflows, and operational state mutation. |
| Normative Authority | Human Governance |
| Normative References | `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Historical Evidence | `docs/AI/Architecture/Discovery/A.0-Framework-Audit.md` |
| Dependencies | Human Governance authority and approved governance policy |
| Consumes | Human Governance decisions and approved governance principles |
| Produces | Constitutional invariants and boundaries consumed by all AI-DOS authorities and product artifacts |
| Related Specifications | `docs/AI/Architecture/RFC/README.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md` |
| Promotion Requirements | Framework Governance review, constitutional consistency validation, Human Governance approval, and explicit canonical promotion |
| Certification Status | Not certified |

---

## 1. Purpose

This Constitution defines the permanent governing principles of AI-DOS.

AI-DOS is a reusable AI Operating System product for governed AI-assisted work. It may be consumed by many independent Target Projects and execution providers without acquiring ownership of their project truth.

This Constitution protects:

- Human authority;
- product purity;
- Target independence;
- explicit ownership;
- single-source-of-truth discipline;
- evidence-driven evolution;
- architectural integrity;
- controlled distribution;
- safe and reversible execution.

This Constitution defines principles and invariants. It does not define a roadmap, implementation plan, Runtime design, Engine design, distribution transport, or Target Project lifecycle.

---

## 2. Constitutional Authority

Human Governance is the final authority over AI-DOS.

The constitutional authority direction is:

```text
Human Governance
    ↓
AI-DOS Constitution
    ↓
Framework Governance
    ↓
Approved Meta Models, Standards, and Architecture
    ↓
System and Operational Contracts
    ↓
Execution Providers
```

Rules:

1. Lower authorities consume higher authority and shall not redefine it.
2. No AI model, agent, runtime, engine, command, workflow, service, provider, or automation may create constitutional authority.
3. A document receives authority only through its approved scope and lifecycle state.
4. Draft, review, validation, certification readiness, merge, or publication does not equal canonical promotion.
5. Unresolved constitutional conflicts escalate to Human Governance.

Architecture discovery, audit, review, and report artifacts provide evidence. They do not create constitutional authority unless Human Governance explicitly promotes them into a normative role.

---

## 3. Constitutional Scope

This Constitution governs reusable AI-DOS product truth, including:

- constitutional principles;
- Framework governance boundaries;
- product architecture constraints;
- Meta and Standards authority direction;
- Runtime and Engine constitutional boundaries;
- System and Operational Core constitutional boundaries;
- Agent Architecture constitutional boundaries;
- product distribution and integrity principles;
- evidence, review, certification, and promotion meaning;
- product evolution constraints.

This Constitution does not own or define Target Project truth, including:

- Target mission;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- project architecture;
- source code;
- implementation state;
- validation commands;
- protected areas;
- live operational state;
- project-specific governance decisions.

A Target Project may adopt AI-DOS constitutional requirements as constraints on how AI-DOS is consumed, but AI-DOS shall not absorb Target-owned truth into reusable product authority.

---

## 4. Product and Target Identity

The following identities shall remain distinct.

### 4.1 AI-DOS

AI-DOS is the reusable AI Operating System product. It owns general product truth, reusable contracts, standards, architecture, procedures, templates, and released product identity.

### 4.2 Forge AI

Forge AI is the Product Development and self-application Target Project used to develop, validate, distribute, operate, and evolve AI-DOS.

Forge AI is not AI-DOS. Forge AI owns its own mission, planning, ProjectStatus, DevelopmentPhases, Roadmap, implementation state, validation context, and product-development decisions.

### 4.3 Independent Target Projects

Independent Target Projects consume AI-DOS while retaining ownership of their own mission, planning, architecture, source, validation, constraints, and operational state.

### 4.4 Execution Providers

An Execution Provider applies AI-DOS product contracts and resolved Target context within an authorized task boundary.

Execution Provider specializations may include:

- AI coding agents;
- local CLI providers;
- local MCP providers;
- hosted providers;
- future approved provider forms.

An Execution Provider owns neither AI-DOS product truth nor Target Project truth.

---

## 5. Source-of-Truth Model

AI-DOS recognizes separate truth domains:

| Truth Domain | Owner | Constitutional Rule |
|:---|:---|:---|
| Private development truth | Product Development Target Project | Must not leak into released product truth by implication. |
| AI-DOS product truth | AI-DOS governance and approved product authorities | Must remain reusable and Target-independent. |
| Released product truth | Approved distribution artifacts and release metadata | Must be versioned, identifiable, integrity-verifiable, and bounded. |
| Target Project truth | Active Target Project | Must not be redefined by AI-DOS. |
| Invocation and execution context | Invoking authority and resolved context process | Temporary consumption context; never a new authority layer. |
| Execution evidence | Authorized task record | Evidence only until accepted by the owning authority. |

Every canonical concept shall have one authoritative owner and one canonical definition within its domain.

Derived artifacts shall reference authoritative truth rather than silently duplicating or replacing it.

---

## 6. Fundamental Principles

### 6.1 Human Authority

Human Governance remains final. Delegation transfers execution, not constitutional accountability.

### 6.2 Evidence Before Assumption

Significant product, architecture, governance, release, and evolution decisions shall be supported by verifiable and traceable evidence.

### 6.3 Explicit Ownership

Every governed artifact, capability, contract, state, and decision domain shall have an explicit owner. Shared consumption does not imply shared ownership.

### 6.4 Product Purity

Reusable AI-DOS product truth shall not contain Target-owned mission, planning, state, source, secrets, or project-specific decisions.

### 6.5 Target Independence

AI-DOS shall not require a specific Target planning methodology, repository layout, project lifecycle, programming language, vendor, model provider, or implementation stack unless an approved compatibility contract explicitly defines such a requirement.

### 6.6 Architectural Integrity

Architecture shall preserve clear boundaries, one-way authority consumption, explicit contracts, and non-circular dependency direction.

### 6.7 Governance Before Activation

Documentation, review, validation, merge, or artifact existence shall not imply implementation, release, certification, canonical promotion, or protected-boundary activation.

### 6.8 Traceability

Material decisions shall remain traceable to authority, evidence, scope, rationale, lifecycle effect, and approval state.

### 6.9 Reversibility and Safe Stop

Where practical, execution and product lifecycle changes shall support validation, rollback, recovery, uninstallability, or safe stop.

### 6.10 Long-Term Maintainability

Architectural clarity, product purity, and controlled evolution take precedence over short-term convenience.

---

## 7. Constitutional Invariants

The following invariants shall remain true unless this Constitution is formally amended:

1. Human Governance is the final authority.
2. AI-DOS remains a reusable product distinct from every Target Project.
3. Forge AI remains a Target Project, not the identity of AI-DOS.
4. Target Project truth remains Target-owned.
5. AI-DOS product truth remains Target-independent.
6. Execution Providers do not own product or Target truth.
7. Assembled context does not become a third source of truth.
8. Lower authorities do not redefine higher authorities.
9. Discovery and report artifacts are evidence unless explicitly promoted.
10. Product distribution excludes private development-only and Target-owned material unless an approved contract explicitly includes a bounded disclosure.
11. AI-generated output cannot approve, certify, promote, release, or amend constitutional authority by itself.
12. Every canonical concept has one authoritative owner.
13. Constitutional compliance is required before canonical promotion or product release.

---

## 8. Architecture Relationship

The Constitution does not freeze a complete future RFC topology. It establishes the constraints that all architecture families must preserve.

Current architecture families include:

- Product / Target Operational Boundary;
- Runtime Architecture;
- Engine Platform;
- Engine Specializations;
- Distribution Architecture;
- Agent Architecture;
- future Human-Governance-approved architecture families.

The constitutional consumption direction is:

```text
Constitution
    ↓
Meta Models and Standards
    ↓
Approved Architecture RFCs
    ↓
System and Operational Contracts
    ↓
Execution Providers
```

A lower architecture family may specialize an upstream contract within its assigned domain. It shall not redefine constitutional principles, Meta semantics, Standards ownership, or peer authority.

---

## 9. Distribution and Release Principles

AI-DOS may be developed in a private Product Development Target Repository and delivered through governed release artifacts.

Every release shall preserve:

- product identity;
- version identity;
- approved content boundaries;
- integrity and provenance evidence;
- compatibility visibility;
- private/public separation;
- Target independence;
- rollback and uninstall boundaries where applicable;
- explicit Human Governance release authority.

No release may implicitly include Target Project planning, Target source, Target secrets, private governance workspaces, unpublished evidence, or private development history.

---

## 10. Decision and Evidence Principles

Material decisions shall identify:

- the decision owner;
- the authority chain;
- the affected scope;
- supporting evidence;
- assumptions and uncertainty;
- risks and consequences;
- required approval;
- lifecycle effect;
- follow-up actions.

AI execution participants may collect evidence, draft recommendations, identify conflicts, and perform authorized changes. They shall not represent recommendations as approved decisions.

Evidence shall be authentic, sufficient, reproducible where practical, and preserved according to governance policy.

---

## 11. Compliance and Violations

A constitutional violation includes:

- overriding Human Governance;
- treating AI output as approval or promotion;
- merging AI-DOS product truth with Target Project truth;
- allowing Target contamination into reusable product artifacts;
- creating parallel canonical definitions;
- reversing approved authority direction;
- creating circular architectural authority;
- treating discovery evidence as normative authority without promotion;
- activating implementation, distribution, certification, or protected boundaries by implication;
- releasing private or Target-owned material without authorization.

When a possible violation is detected:

1. stop the affected action when continuing could deepen the violation;
2. preserve available evidence;
3. identify the conflicting authorities and owners;
4. report the conflict without silently resolving it;
5. escalate according to Framework Governance;
6. resume only after an authorized resolution.

---

## 12. Evolution Principles

AI-DOS evolves through governed evidence, not uncontrolled self-modification.

The constitutional evolution cycle is:

```text
Target or Product Evidence
    ↓
Opportunity or Risk Identification
    ↓
Human Governance Decision
    ↓
Bounded Product Change
    ↓
Validation and Review
    ↓
Release Decision
    ↓
Versioned Distribution
```

Target evidence may justify product evolution but does not automatically become product truth. Product changes require explicit ownership, bounded scope, validation, review, and release authority.

No capability may self-promote, self-certify, or self-release.

---

## 13. Amendment Process

This Constitution may be amended only through an explicit Human Governance decision.

A proposed amendment shall include:

1. amendment identifier;
2. affected constitutional clauses;
3. rationale and evidence;
4. product and Target impact analysis;
5. authority and ownership impact analysis;
6. compatibility and migration impact;
7. security, safety, and integrity impact;
8. review result;
9. validation evidence;
10. exact Human Governance decision;
11. version and lifecycle transition.

Editorial clarification that does not change authority, ownership, invariants, scope, or constitutional meaning may follow the normal governance change process. Any material semantic change requires the full amendment process.

---

## 14. Promotion and Certification Boundary

This document remains non-canonical while in Draft status.

Review, validation, certification readiness, merge, or publication does not promote this Constitution.

Canonical promotion requires:

- completed constitutional consistency review;
- product/Target purity validation;
- authority and ownership validation;
- metadata and terminology validation;
- no unresolved constitutional blockers;
- explicit Human Governance approval;
- explicit promotion record.

Certification assesses quality and compliance. Certification does not replace Human Governance promotion authority.

---

## 15. Historical Evidence

`docs/AI/Architecture/Discovery/A.0-Framework-Audit.md` and related discovery artifacts may explain historical conditions, prior models, migration rationale, and architectural findings.

They are evidence sources only. They do not govern this Constitution, assign current RFC meanings, or define current architecture authority.

---

## 16. Constitutional Statement

AI-DOS shall remain human-governed, evidence-driven, reusable, distributable, Target-independent, architecturally coherent, and explicit about ownership.

AI-DOS exists to enable governed execution across independent Target Projects without absorbing their truth, replacing their authority, or exposing private product-development state.

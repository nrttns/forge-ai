# Forge AI AI-DOS Product Delivery, Distribution, Integration, Feedback, Evolution, External Target Readiness, and AI Highway Operations Roadmap

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.V2.ROADMAP.V4` |
| Title | Forge AI AI-DOS Product Delivery, Distribution, Integration, Feedback, Evolution, External Target Readiness, and AI Highway Operations Roadmap |
| Version | `6.1.0-draft` |
| Status | Draft |
| Canonical Status | Active Forge AI Target Project product-delivery roadmap; not AI-DOS product truth and not authority for external Target Projects |
| Classification | Target Project Strategic Product Delivery Roadmap |
| Document Type | Product Capability, Distribution, and Evolution Roadmap |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-20 |
| Lifecycle Phase | Active Target Project Planning |
| Traceability ID | `FORGE-AI.V2.ROADMAP-REALIGNMENT-001` |
| Scope | AI-DOS product capability acquisition, private/public boundary, distribution build and release foundation, Local CLI, Target onboarding, public System Interface, Codex adapter, Local MCP provider, Evolution Capsules, governed product evolution, external Target proof, managed provider maturity, and Multi-Target AI Highway operations directed by Forge AI. |
| Out of Scope | AI-DOS internal architecture changes, `docs/AI/` changes, implementation tasks, CLI/MCP/API/service/adapter/package/schema/feedback implementation, RFC creation, live ProjectStatus updates, Axis Suite activation, certification, vendor selection, pricing, and automatic maturity advancement. |
| Normative Authority | Human Governance; canonical Target Project contract `docs/Projects/ForgeAI/Mission/AGENTS.md`; `docs/Projects/ForgeAI/Mission/ForgeAI-Mission-Product-and-Autonomy-Model.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md` |
| Read-Only Context | `docs/Projects/ForgeAI/Planning/ProjectStatus.md` |
| Consumes | Forge AI mission, Target Project contract, DevelopmentPhases product capability program, live-state evidence as read-only context, Human Governance decisions, distribution-readiness evidence, Target integration evidence, privacy evidence, and completed execution evidence. |
| Produces | Product-delivery roadmap describing which reusable AI-DOS capability is acquired next, what dependency it requires, what evidence proves it, and what Human Governance decision permits progression. |
| Certification Status | Not certified |

---

## 1. Purpose

This roadmap defines the Forge AI product delivery, distribution, integration, feedback, and evolution roadmap for AI-DOS as an AI Operating System.

It answers:

```text
Which reusable AI-DOS product capability
must be acquired next,
what dependency does it require,
what evidence proves it,
and what Human Governance decision
permits progression?
```

This roadmap remains Forge AI Target Project planning truth. It does not implement distribution, create RFCs, update ProjectStatus, certify product readiness, or activate Axis Suite.

---

## 2. Deployment Maturity Model

```text
Private Development Repository
    ↓
Build
    ↓
Versioned Distribution
    ↓
Local CLI
    ↓
Local MCP
    ↓
Managed Provider
```

These are maturity stages, not three unrelated product variants. Distribution v1 is Local CLI, Distribution v2 is Local MCP, and Distribution v3 is Managed / Hosted AI-DOS Provider.

---

## 3. Governing Product Flow

```text
Private AI-DOS Development Repository
        ↓
Build and Packaging
        ↓
Signed / Versioned AI-DOS Distribution
        ↓
Codex Adapter, CLI, MCP, or Hosted Provider
        ↓
Independent Target Repository
        ↓
Execution, Validation, Review, Evidence
        ↓
Privacy-Safe Evolution Input
        ↓
Governed AI-DOS Product Improvement
        ↓
New AI-DOS Distribution Release
```

The private AI-DOS development repository is not assumed to be visible to end users. Independent Target Repositories expose Target-owned contracts, resources, constraints, protected areas, validation commands, and execution authority; they do not contain AI-DOS private source, internal architecture, workflows, engines, governance documents, or private development state.

---

## 4. Permanent Feedback and Evolution Principle

```text
AI-DOS may detect improvement opportunities while operating
against any authorized Target Project.

The originating Target Repository is not the AI-DOS
product-development repository and must not be treated as one.

AI-DOS shall convert an eligible opportunity into a portable,
privacy-reviewed evolution input that can survive loss of access
to the originating Target Repository.
```

Evolution input must be portable, privacy-reviewed, consent-controlled, provenance-preserving, and usable without future access to the originating Target Repository.

---

## 5. Required Capability Relationships

- Local CLI precedes Local MCP.
- A stable public System Interface precedes supported adapters.
- Distribution foundation precedes external Target product claims.
- Evolution transport depends on evidence, privacy, redaction, and consent.
- External Target evidence precedes hosted-provider maturity claims.
- Hosted-provider success precedes broad multi-Target readiness.
- Self-hosting evidence alone is insufficient for product readiness.
- Axis Suite must not be used as an external pilot until the required distribution and Target integration boundary exists.
- Codex is an AI host and adapter consumer between a Target Repository and an installed or hosted AI-DOS runtime; Codex is not AI-DOS itself.
- Human Governance remains final for capability acceptance, distribution release, hosted-provider activation, and product evolution.
- Passing tests does not automatically authorize release or capability promotion.

---

## 6. Strategic Streams

### Stream 1 — Product Identity and Private/Public Boundary

| Roadmap Element | Definition |
|:---|:---|
| Owns | Private development source boundary; distributable runtime boundary; Target-owned truth boundary; public contracts; protected intellectual property; licensing and visibility assumptions. |
| Next Capability | Explicitly define what remains private and what can be distributed. |
| Dependencies | Accepted product identity and purity foundation. |
| Required Evidence | Boundary inventory, visibility assumptions, licensing assumptions, protected IP review, Target-owned truth review, and proof that Targets do not require AI-DOS internal documentation. |
| Governance Decision | Human Governance accepts D0 private/public boundary. |

### Stream 2 — Distribution Build and Release Foundation

| Roadmap Element | Definition |
|:---|:---|
| Owns | Build pipeline; packaging; manifests; versioning; signing; integrity verification; installation; update; rollback; uninstall; compatibility; release governance. |
| Next Capability | Establish a signed, versioned distribution architecture and package contract. |
| Dependencies | Stream 1 / D0. |
| Required Evidence | Build and packaging plan, manifest model, version model, signing/integrity criteria, install/update/rollback/uninstall criteria, compatibility matrix seed, and release-governance gate. |
| Governance Decision | Human Governance accepts D1 distribution architecture and package contract. |

### Stream 3 — Distribution v1: Local CLI

| Roadmap Element | Definition |
|:---|:---|
| Owns | Local executable runtime; explicit Target path; local context resolution; bounded commands; evidence output; offline-first behavior; local data directory; Codex terminal invocation. |
| Next Capability | Validate locally installable AI-DOS execution without private repository access or mandatory network connection. |
| Dependencies | Stream 2 / D1. |
| Required Evidence | Local install evidence, Target path handling, Target contract loading, bounded command behavior, local execution, validation/evidence output, local runtime-data storage, offline mode, uninstall, and rollback evidence. |
| Governance Decision | Human Governance validates D2 Local CLI package. |

### Stream 4 — Target Contract and Onboarding

| Roadmap Element | Definition |
|:---|:---|
| Owns | Minimal Target contract; Target resource declaration; protected-area declaration; validation declaration; source-scope declaration; permissions; onboarding validation; missing-context safe stops. |
| Next Capability | Enable independent Target onboarding without copying AI-DOS private internals into the Target. |
| Dependencies | Streams 1 through 3. |
| Required Evidence | `S4-E1` Minimal Target contract criteria, `S4-E2` onboarding validation, `S4-E3` protected-area proof, `S4-E4` validation declaration proof, `S4-E5` permissions proof, and `S4-E6` missing-context safe-stop evidence. |
| Governance Decision | Human Governance accepts Target onboarding boundary before external Target product claims. |

Target repositories must not include AI-DOS internal documentation.

### Stream 5 — AI-DOS Public System Interface and Codex Adapter

| Roadmap Element | Definition |
|:---|:---|
| Owns | Stable public operations; request and response contracts; handshake; capability negotiation; session lifecycle; errors; blockers; waiting states; evidence return; adapter conformance. |
| Next Capability | Define a public System Interface that supported hosts such as Codex consume without relying on private internals. |
| Dependencies | Stream 3 / D2 and Target contract boundary. |
| Required Evidence | Interface acceptance evidence, handshake criteria, capability negotiation, session lifecycle criteria, error/blocker/waiting result evidence, evidence-return criteria, Codex adapter conformance evidence. |
| Governance Decision | Human Governance accepts D3 public AI-DOS System Interface and validates D4 Codex CLI adapter when evidence exists. |

### Stream 6 — Distribution v2: Local MCP Provider

| Roadmap Element | Definition |
|:---|:---|
| Owns | MCP server; local authorization; tool surface; Target-scoped sessions; isolation; local-only data behavior; Codex integration; audit evidence. |
| Next Capability | Validate a local MCP-compatible AI-DOS provider that keeps Target code and sensitive context local by default. |
| Dependencies | Stream 5 / D3 and D4. |
| Required Evidence | Local MCP server validation, local authorization, public tool surface, Target-scoped sessions, isolation evidence, local-only data behavior, Codex integration, and audit evidence. |
| Governance Decision | Human Governance validates D5 Local MCP server. |

### Stream 7 — Experience Capture and Evolution Capsules

| Roadmap Element | Definition |
|:---|:---|
| Owns | Opportunity detection; evidence collection; redaction; privacy classification; consent; capsule structure; local queue; manual export; optional upload; integrity; provenance; deduplication. |
| Next Capability | Convert observed deficiencies into portable, privacy-safe Evolution Capsules. |
| Dependencies | Evidence model, privacy model, redaction model, consent model, and Stream 6 operating boundary. |
| Required Evidence | Opportunity detection evidence, minimized evidence set, redaction review, privacy classification, consent record, capsule structure acceptance, local queue/export/upload validation where authorized, integrity, provenance, and deduplication evidence. |
| Governance Decision | Human Governance accepts D6 Evolution Capsule model and validates D7 consent-based feedback transport. |

### Stream 8 — Governed AI-DOS Product Evolution

| Roadmap Element | Definition |
|:---|:---|
| Owns | Opportunity intake; opportunity validation; Human Governance authorization; bounded correction; regression validation; Target-independence validation; release candidate generation; capability acceptance; distribution release. |
| Next Capability | Turn validated, privacy-safe opportunities into governed AI-DOS product improvements and new distribution releases. |
| Dependencies | Stream 7 / D6 and D7. |
| Required Evidence | Opportunity intake record, validation evidence, authorization decision, bounded correction evidence, regression and privacy validation, Target-independence validation, release candidate evidence, capability acceptance, and release decision. |
| Governance Decision | Human Governance authorizes each correction, accepts capability changes, and approves any new distribution release. |

Required lifecycle:

```text
Opportunity
    ↓
Validation
    ↓
Authorization
    ↓
Bounded Correction
    ↓
Regression and Privacy Validation
    ↓
Human Governance Acceptance
    ↓
New Distribution Release
```

### Stream 9 — External Target Proof

| Roadmap Element | Definition |
|:---|:---|
| Owns | Independent Target pilot readiness; Axis Suite onboarding when authorized; no Forge AI fallback; no private source exposure; Target isolation; real bounded execution; cross-environment validation; opportunity-capture proof. |
| Next Capability | Prove AI-DOS works against an independent Target under distribution and integration boundaries. |
| Dependencies | Streams 1 through 8, with accepted distribution foundation, Target onboarding, System Interface, and Evolution Capsule controls. |
| Required Evidence | Independent Target contract, independent Target state, source/protected boundaries, Target-declared validation, no Forge AI fallback, no private AI-DOS source exposure, bounded execution, safe-stop behavior, cross-environment validation, and opportunity-capture proof. |
| Governance Decision | Human Governance accepts D8 independent Axis Suite pilot only after required boundaries exist and explicit authorization is granted. |

Axis Suite remains future and inactive until Human Governance authorizes it after the required distribution and Target integration boundary exists.

### Stream 10 — Distribution v3: Managed Provider

| Roadmap Element | Definition |
|:---|:---|
| Owns | Hosted API/provider; authentication; tenant isolation; Target isolation; encryption; retention; consent; service observability; regional policy; managed updates; hosted safe-stop and recovery. |
| Next Capability | Establish and pilot a managed AI-DOS provider with privacy, consent, isolation, auditability, rollback, and failure handling. |
| Dependencies | Stream 9 / D8. |
| Required Evidence | Managed provider architecture, authentication/authorization, tenant and Target isolation, encrypted transport, minimal context transfer, retention/regional controls, consent controls, service observability, managed updates, rollback, safe-stop, recovery, and local/offline fallback evidence. |
| Governance Decision | Human Governance accepts D9 managed provider architecture and separately accepts D10 managed provider pilot. |

### Stream 11 — Multi-Target AI Highway

| Roadmap Element | Definition |
|:---|:---|
| Owns | Many Target Projects; compatibility and migration; product releases; privacy-safe aggregate learning; multi-Target regression; ecosystem adapters; operational sustainability; governed long-term evolution. |
| Next Capability | Operate AI-DOS across many independent Targets while sustaining releases, compatibility, support, privacy-safe learning, and governed evolution. |
| Dependencies | Stream 10 / D10. |
| Required Evidence | Multi-Target isolation, compatibility matrix, migration policy, release train, regression suite, aggregate privacy evidence, adapter ecosystem evidence, support model, and product operations evidence. |
| Governance Decision | Human Governance accepts D11 Multi-Target AI Highway readiness. |

---

## 7. Distribution Milestones

| Milestone | Outcome | Required Evidence | Governance Decision |
| :-------- | :----------------------------------------------------------------------- | :--- | :--- |
| `D0` | Private development repository and public distribution boundary accepted | Boundary inventory, protected-IP review, Target-owned truth proof | Human Governance accepts private/public boundary |
| `D1` | Distribution architecture and package contract accepted | Build, package, manifest, version, signing, compatibility, install/update/rollback/uninstall criteria | Human Governance accepts distribution architecture |
| `D2` | Local CLI package validated | Local install, Target argument, bounded commands, evidence output, offline, data, uninstall, rollback evidence | Human Governance validates Distribution v1 |
| `D3` | Public AI-DOS System Interface accepted | Handshake, operations, results, blockers, waiting states, evidence, compatibility criteria | Human Governance accepts public interface |
| `D4` | Codex CLI adapter validated | Adapter conformance showing Codex is a host/consumer, not AI-DOS | Human Governance validates adapter |
| `D5` | Local MCP server validated | Local MCP process, authorization, tools, sessions, isolation, audit evidence | Human Governance validates Distribution v2 |
| `D6` | Evolution Capsule model accepted | Portable capsule, minimization, redaction, privacy classification, provenance, integrity | Human Governance accepts capsule model |
| `D7` | Consent-based feedback transport validated | Consent records, local-only/manual export/approved upload validation where authorized | Human Governance validates feedback transport |
| `D8` | Independent Axis Suite pilot completed | Independent Target proof, no Forge fallback, no private source exposure, bounded execution | Human Governance accepts external pilot evidence |
| `D9` | Managed provider architecture accepted | Hosted architecture, privacy, isolation, auth, encryption, retention, rollback, failure handling | Human Governance accepts architecture |
| `D10` | Managed provider pilot completed | Hosted pilot validation, auditability, safe-stop, recovery, fallback evidence | Human Governance accepts Distribution v3 pilot |
| `D11` | Multi-Target AI Highway readiness accepted | Multi-Target isolation, releases, compatibility, migration, aggregate privacy, regression evidence | Human Governance accepts broad readiness |

---

## 8. Planning Boundaries

This roadmap does not:

- create AI-DOS ProjectStatus under `docs/AI/`;
- create an AI-DOS Roadmap under `docs/AI/`;
- insert Forge AI planning truth into AI-DOS product truth;
- claim distribution implementation exists;
- claim CLI, MCP, or hosted provider readiness;
- activate Axis Suite work;
- modify current ProjectStatus;
- create implementation tasks;
- create RFC files;
- create package layouts as active implementation truth;
- choose programming language or hosting vendor;
- choose a commercial pricing model; or
- certify product readiness.

---

## 9. Version History

| Version | Date | Description |
|:---|:---|:---|
| `5.1.0-draft` | 2026-07-11 | Prior Forge AI capability roadmap baseline. |
| `6.0.0-draft` | 2026-07-15 | Realigned Forge AI around AI-DOS private development, runtime distribution, local CLI, local MCP, hosted provider, independent Target integration, privacy-safe evolution input, and multi-Target AI Highway operations. |
| `6.1.0-draft` | 2026-07-20 | Added stable Stream 4 Required Evidence identifiers so ProjectStatus can record status by identity without duplicating Roadmap descriptions. |

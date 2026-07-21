# AI-DOS Governance Atlas

> Governance navigation · Authority mapping · Ownership routing

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.GOVERNANCE.ATLAS` |
| Title | AI-DOS Governance Atlas |
| Version | `5.0.0-draft` |
| Status | Draft |
| Classification | Governance Atlas |
| Document Type | Governance Navigation and Authority Map |
| Owner | Framework Governance |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; Human Governance |
| Dependencies | A.1 Constitution, A.2 Product / Target Operational Boundary, applicable Meta Models and Standards |
| Produces | Governance navigation, authority map, ownership map, lifecycle routing, escalation guidance |
| Certification Status | Not certified |

## 1. Purpose

This document is the governance navigation map for AI-DOS. It identifies where authority lives, how authority is consumed, which artifacts own which domains, and when work must stop or escalate.

It is a map, not a replacement authority. It shall not redefine the Constitution, Architecture RFCs, Standards, Target Project truth, Runtime, Engine Platform, Engine Specializations, Distribution, System Layer, Operational Core, or Human Governance.

## 2. Governance Principles

1. Human Governance is final.
2. Authority is explicit and flows from higher authority to bounded downstream contracts.
3. Ownership is singular within a defined domain.
4. Navigation does not create authority.
5. Review, validation, certification, approval, promotion, release, and completion are distinct states.
6. Target Project truth remains Target-owned.
7. AI-DOS product truth remains AI-DOS-owned.
8. Distribution shall not leak private development truth or Target truth.
9. Execution shall not infer mutation authority from installation, availability, capability, continuation intent, or completion.
10. Ambiguity in authority, ownership, compatibility, integrity, or protected boundaries requires safe stop.

## 3. Canonical Authority Graph

```text
Human Governance
    ↓
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation
```

Supporting governance and operational layers consume this graph:

```text
Meta Models and Standards
    ↓
System Layer
    ↓
Operational Core
    ↓
Commands / Workflows / Templates / Execution Providers
```

The second graph does not replace the first. System and operational documents route governed work; they do not create constitutional, architectural, release, or Target authority.

## 4. Truth Domains

| Truth Domain | Owner | Governance Rule |
|:---|:---|:---|
| AI-DOS product truth | AI-DOS product authority | May enter governed releases when approved. |
| Released product truth | Release authority for a specific version and channel | Immutable for that release identity. |
| Private development truth | AI-DOS development governance | Shall not be released implicitly. |
| Target Project truth | Target Project authority | Shall not be absorbed into reusable AI-DOS product truth. |
| Runtime state | Runtime contract | Does not equal Target Project state. |
| Engine state | Engine Platform contract | Does not equal authorization or Target state. |
| Provider state | Execution Provider | Does not create AI-DOS or Target authority. |

Forge AI is the Product Development Target Project used to develop, validate, distribute, and evolve AI-DOS. Forge AI is not AI-DOS and its ProjectStatus, DevelopmentPhases, Roadmap, source state, evidence, memory, workflow state, registry state, protected areas, and local configuration remain Target-owned.

## 5. Governance Domains

| Domain | Canonical Owner | Boundary |
|:---|:---|:---|
| Constitutional principles | A.1 Constitution | Only Human Governance may approve constitutional change. |
| Product / Target boundary | A.2 Boundary RFC | Defines ownership and operational separation. |
| Runtime architecture | A.3 Runtime RFC | Owns governed execution substrate only. |
| Engine Platform | A.4 and A.4.1–A.4.7 | Owns shared engine foundations. |
| Engine Specializations | A.5.0 and A.5.1–A.5.12 | Capability peers; numbering is not execution order. |
| Distribution | A.6 Distribution Foundation | Sibling architecture branch to Runtime. |
| Agent architecture | `docs/AI-DOS/Architecture/Agents/` active family | Consumes Runtime and Engine authority; does not redefine them. |
| System Layer | `docs/AI-DOS/System/` | Resolves and assembles governed invocation context. |
| Operational Core | `AIFramework.md`, `AIOrchestrator.md`, `AgentSystemPrompt.md` | Routes and constrains execution. |
| Commands, Workflows, Templates | Their canonical directories | Execution aids and output contracts only. |
| Discovery and Reports | `Architecture/Discovery/`, `Architecture/Reports/` | Evidence only unless explicitly promoted. |

A.0 is historical discovery evidence. It is not an upstream normative authority.

## 6. Invocation and Context Governance

The operational flow is:

```text
Provider Invocation Contract
    ↓
Invocation Context
    ↓
Target Repository Resolution
    ↓
Resolved Target Context
    ↓
Context Assembly
    ↓
Authority Resolution
    ↓
Decision Model
    ↓
Execution Sequence
    ↓
Operational Core
```

Rules:

- Target Repository Resolution identifies and validates the active Target boundary.
- Resolved Target Context contains task-relevant Target-owned objectives, constraints, authorities, execution boundaries, validation requirements, protected boundaries, and evidence.
- AI-DOS shall not prescribe Target Project resource names, planning documents, hierarchy, or methodology.
- Missing or ambiguous Target authority shall not be repaired with Forge AI fallback paths or assumptions.

## 7. Lifecycle Governance

A governed artifact may pass through:

```text
Draft
    ↓
Review
    ↓
Validation
    ↓
Certification Decision when applicable
    ↓
Human Governance Approval when required
    ↓
Canonical Promotion or Release when explicitly authorized
```

No state implies a later state. In particular:

- merge is not approval;
- validation is not certification;
- review is not approval;
- certification is not canonical promotion;
- installation is not execution authorization;
- completion is not Target-state transition;
- continuation intent is not approval, release, promotion, or ProjectStatus mutation authority.

## 8. AI Execution Governance

AI execution participants may:

- inspect and classify;
- draft and edit within explicit scope;
- validate and review;
- produce evidence and recommendations;
- execute a bounded mutation when an explicit Execution Contract authorizes it.

AI execution participants shall not:

- approve, certify, promote, release, or amend constitutional authority;
- mutate Target-owned ProjectStatus, DevelopmentPhases, Roadmap, protected boundaries, or live operational state by inference;
- treat A.4.x or A.5.x numbering as an authority or execution pipeline;
- treat registry presence, capability availability, compatibility, or installation as authorization;
- copy Forge AI Target assumptions into independent Targets;
- resolve ambiguous authority silently.

## 9. Conflict and Escalation

Use this order when resolving conflict:

```text
Human Governance
    ↓
A.1 Constitution
    ↓
Applicable Architecture RFC authority
    ↓
Applicable Meta Models and Standards
    ↓
Resolved Target Context and explicit Target authority
    ↓
Operational contracts
    ↓
Implementation preference
```

Escalate when:

- two artifacts claim the same authority;
- ownership is unclear;
- a requested mutation lacks an explicit Execution Contract;
- release scope or product ownership is ambiguous;
- a protected boundary would be crossed;
- more than one valid lifecycle transition exists;
- Target truth and product truth cannot be separated confidently.

## 10. Navigation

- Product navigation: `docs/AI-DOS/README.md`
- Architecture navigation: `docs/AI-DOS/Architecture/README.md`
- RFC navigation: `docs/AI-DOS/Architecture/RFC/README.md`
- Governance policy: `docs/AI-DOS/FrameworkGovernance.md`
- System Layer navigation: `docs/AI-DOS/System/README.md`
- Operational Core entry: `docs/AI-DOS/AIFramework.md`

## 11. Governance Quality Checklist

A governance-consistent change shall demonstrate:

- correct authority and owner;
- one canonical location;
- no obsolete A.x meaning;
- no A.0 authority leakage;
- no sequential A.4.x or A.5.x interpretation;
- A.6 represented as the distribution sibling branch;
- product truth and Target truth separation;
- explicit mutation and release authority;
- safe stop for unresolved ambiguity;
- evidence appropriate to the claimed lifecycle state.

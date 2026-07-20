# AI-DOS System Layer

> Canonical layer contract for invocation resolution, context preparation, authority resolution, decision preparation, and execution handoff.

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.LAYER` |
| Title | AI-DOS System Layer |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | System Layer Contract |
| Document Type | Canonical Layer Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Project-Operational-Boundary-RFC.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Dependencies | Invocation Context; applicable Architecture, Meta, Standards, and Target authority inputs |
| Produces | Resolved and assembled execution context, authority findings, safe-stop findings, decision preparation, bounded execution handoff |
| Certification Status | Not certified |

## 1. Purpose

The System Layer converts an explicit provider invocation and Target-supplied context into a bounded, authority-aware handoff for the AI-DOS Operational Core.

It exists to resolve, assemble, validate, order, prepare, and hand off. It does not own product truth, Target truth, Runtime behavior, Engine behavior, distribution, governance approval, or Target operational state.

## 2. Scope

The System Layer begins when AI-DOS receives an Invocation Context and ends when a bounded execution handoff is delivered to the Operational Core.

In scope:

- Target Repository Resolution;
- Resolved Target Context preparation;
- context assembly;
- source-of-truth classification;
- authority resolution;
- decision preparation;
- execution-sequence preparation;
- blocker and safe-stop reporting;
- operational handoff evidence.

Out of scope:

- constitutional change;
- governance approval or promotion;
- Runtime or Engine implementation;
- release assembly, installation, update, rollback, or uninstall;
- Target Project planning, ProjectStatus, DevelopmentPhases, Roadmap, or live state ownership;
- command, workflow, or template ownership;
- automatic repository mutation.

## 3. Authority

The System Layer owns only the procedures and contracts required to:

1. resolve the active Target boundary;
2. normalize task-relevant Target inputs;
3. assemble minimum sufficient execution context;
4. classify and order applicable authority;
5. detect ambiguity, conflict, or missing authority;
6. prepare a bounded decision and execution handoff.

The System Layer consumes higher authority. It does not create constitutional, architectural, governance, release, or Target authority.

## 4. Non-Authority Boundaries

The System Layer does not own:

- Human Governance;
- A.1 Constitution;
- A.2 Product / Target Operational Boundary;
- A.3 Runtime Architecture;
- A.4 Engine Platform;
- A.5 Engine Specializations;
- A.6 Distribution Foundation;
- AI-DOS product truth or released product truth;
- Target Project truth;
- ProjectStatus, DevelopmentPhases, Roadmap, source state, evidence state, memory state, workflow state, registry state, or protected-area state;
- Operational Core orchestration;
- Execution Provider authorization.

Forge AI is a Product Development Target Project. Its paths, planning artifacts, operational state, local configuration, and evidence model shall not be used as defaults for independent Targets.

## 5. Consumes

The System Layer may consume only the inputs required for the active invocation:

- Provider Invocation Contract;
- Invocation Context;
- Target Repository declarations;
- Applicable Target Resources;
- Target Objectives;
- Target Constraints;
- Target Authority Inputs;
- Target Execution Boundaries;
- Target Validation Requirements;
- applicable AI-DOS governance, architecture, Meta, and Standards authority;
- explicit Execution Contract when mutation or provider dispatch is requested;
- Execution Provider capability declaration when provider capability matters.

Installation, capability availability, registry presence, continuation intent, or prior completion does not create an Execution Contract.

## 6. Produces

The System Layer may produce:

- Target Repository Resolution Result;
- Resolved Target Context;
- assembled execution context;
- source-of-truth classification;
- ordered authority set;
- authority-conflict findings;
- safe-stop result;
- decision preparation record;
- bounded execution handoff;
- validation expectations and handoff evidence.

These outputs do not approve, certify, promote, release, or mutate Target state by themselves.

## 7. Canonical Flow

```text
Provider Invocation Contract
        ↓
Invocation Context
        ↓
Target Repository Resolution
        ↓
Resolved Target Context
        ↓
Boot / Context Loading
        ↓
Context Assembly
        ↓
Source-of-Truth Classification
        ↓
Authority Resolution
        ↓
Decision Model
        ↓
Execution Sequence
        ↓
Operational Core
```

Flow rules:

- each step consumes the bounded output of the previous step;
- a later step shall not redefine an earlier owner;
- missing authority, ownership, execution boundary, validation requirement, compatibility, or provider capability requires safe stop;
- no Forge AI fallback path or Target methodology may be inferred;
- no repository mutation begins before a bounded execution handoff exists.

## 8. Components

| Component | Canonical Responsibility |
|:---|:---|
| `TargetRepositoryResolution.md` | Resolve and validate the active Target Repository boundary. |
| `BootSequence.md` | Load the resolved Framework and Target context without rediscovery. |
| `ContextAssembly.md` | Assemble minimum sufficient, task-relevant context. |
| `SourceOfTruth.md` | Classify product, release, Target, Runtime, Engine, provider, and evidence truth domains. |
| `AuthorityModel.md` | Define authority categories and precedence constraints consumed by resolution. |
| `AuthorityResolution.md` | Resolve applicable authority and report ambiguity or conflict. |
| `DecisionModel.md` | Prepare a bounded safe decision without inventing authorization. |
| `ExecutionSequence.md` | Prepare and hand off the authorized execution sequence. |
| `SystemLayerFreeze.md` | Historical freeze evidence; not a replacement for this layer contract. |

The component documents are sibling System Layer contracts. Their filenames do not imply an authority hierarchy beyond the canonical flow.

## 9. Dependency Direction

```text
Human Governance
        ↓
A.1 Constitution
        ↓
A.2 Product / Target Operational Boundary
        ↓
Applicable Meta Models and Standards
        ↓
System Layer
        ↓
Operational Core
        ↓
Commands / Workflows / Execution Providers
```

A.3–A.5 constrain execution architecture when Runtime or Engine behavior is involved. A.6 constrains release and installation work. The System Layer consumes those authorities when applicable but does not own them.

## 10. Safe Stop

The System Layer shall stop before execution handoff when:

- the active Target cannot be resolved;
- Invocation Context is absent or materially ambiguous;
- Target authority inputs conflict;
- product truth and Target truth cannot be separated;
- required execution boundaries or validation requirements are missing;
- an Execution Contract is required but absent;
- the selected Execution Provider lacks a required capability;
- more than one materially different authorized decision remains unresolved;
- a protected boundary would be crossed;
- release integrity, compatibility, provenance, or ownership is uncertain.

Safe stop is a valid governed outcome.

## 11. Validation Requirements

A conforming System Layer change shall demonstrate:

- one canonical layer contract;
- README used only for navigation;
- correct A.1–A.6 authority consumption;
- no Target planning or state ownership;
- no Forge AI fallback assumptions;
- no automatic mutation or lifecycle transition;
- explicit consumes and produces boundaries;
- safe stop for unresolved ambiguity;
- coherent handoff to Operational Core.

## 12. Navigation

- System Layer index: `docs/AI/System/README.md`
- Governance Atlas: `docs/AI/GOVERNANCE.md`
- Governance policy: `docs/AI/FrameworkGovernance.md`
- Architecture navigation: `docs/AI/Architecture/README.md`
- Operational Core entry: `docs/AI/AIFramework.md`

# AI Framework

> Operational Core entry point · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.OPERATIONAL.CORE.AI-FRAMEWORK` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Operational Core |
| Document Type | Operational Core Entry Contract |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Architecture Inputs | A.3 Runtime; A.4 Engine Platform; A.5 Engine Specializations; A.6 Distribution when release or installation work is in scope |
| Produces | Operational entry, authority routing, execution-boundary rules, completion-evidence requirements |
| Certification Status | Not certified |

## 1. Decision

`AIFramework.md` is the single Operational Core entry contract for AI-assisted work performed with AI-DOS.

It consumes authority and architecture. It does not create product truth, Target truth, release authority, execution authorization, validation authority, review authority, certification authority, or Human Governance approval.

## 2. Architectural Position

```text
Human Governance
    ↓
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation

Resolved Invocation Inputs
    ↓
System Layer
    ↓
Operational Core
    ├── AIFramework
    ├── AIOrchestrator
    └── AgentSystemPrompt
    ↓
Commands / Workflows / Templates / Execution Provider
```

A.3–A.5 govern execution architecture. A.6 governs product distribution. Neither branch is owned by Operational Core.

## 3. Required Inputs

Operational work may begin only when the applicable inputs are available:

- Human or authorized task instruction;
- Invocation Context;
- Target Repository Resolution Result;
- Resolved Target Context;
- applicable AI-DOS authority and architecture;
- explicit Execution Contract when mutation or external action is requested;
- provider capability declaration when provider behavior matters.

Missing or contradictory authority requires safe stop.

## 4. Truth Boundaries

| Truth Domain | Owner | Operational Core Rule |
|:---|:---|:---|
| AI-DOS product truth | AI-DOS product authority | Consume; never silently redefine |
| Released product truth | Release authority under A.6 | Consume as immutable release identity |
| Target Project truth | Target Project authority | Read or mutate only within explicit authority |
| Runtime state | Runtime | Observe or route; do not reinterpret as Target state |
| Engine state | Engine Platform | Observe through contracts; do not treat as project truth |
| Provider state | Execution Provider | Treat as provider-local operational evidence |

Forge AI is a Product Development Target Project. Its ProjectStatus, DevelopmentPhases, Roadmap, source state, evidence, memory, workflow state, registry state, and local configuration are not reusable AI-DOS product truth.

## 5. Operational Entry Sequence

```text
1. Receive task instruction and Invocation Context.
2. Confirm TargetRepositoryResolution completed.
3. Confirm BootSequence loaded Resolved Target Context.
4. Identify applicable product, Target, governance, architecture, and safety authorities.
5. Classify intent and mutation authority.
6. Assemble minimum sufficient context.
7. Resolve required workflow, command, template, specialization, and provider capability.
8. Construct or consume an explicit Execution Contract.
9. Execute only within authorized scope.
10. Validate against declared criteria.
11. Review evidence and unresolved risks.
12. Report completed work, evidence, blockers, and next recommendation.
```

Operational Core shall not rediscover the Target Repository, invent Target resources, infer Target truth from memory, or bypass System Layer resolution.

## 6. Authority Rules

1. Higher authority is consumed, not rewritten.
2. Human Governance remains final.
3. Target authority controls Target-owned truth and mutation boundaries.
4. Distribution or installation never implies execution authorization.
5. Capability availability never implies authorization.
6. Registry presence never implies trust, compatibility, health, or permission.
7. Validation, review, certification, and approval remain distinct lifecycle actions.
8. Ambiguity about ownership, authority, compatibility, integrity, or protected boundaries requires safe stop.

## 7. Runtime and Engine Consumption

Operational Core consumes A.3 Runtime as the governed execution substrate and A.4 as the shared Engine Platform.

A.5.x specializations are capability peers. Their numbering is not an authority order or mandatory pipeline. Operational Core selects only the specializations required by the active Execution Contract.

| Capability Domain | Operational Use |
|:---|:---|
| Context | Produce invocation-scoped context snapshots |
| Knowledge | Retrieve and synthesize authorized knowledge |
| Planning | Produce candidate execution plans without owning Target planning truth |
| Decision | Produce evidence-linked recommendations without self-authorizing execution |
| Execution | Dispatch authorized work through an Execution Provider |
| Validation | Evaluate declared criteria and produce evidence |
| Review | Produce reasoned findings and recommendations |
| Certification | Assess an explicit certification profile without granting approval |
| Memory | Retain or retrieve only under explicit policy |
| Governance | Apply existing authoritative policy without creating authority |
| Workflow | Coordinate procedures without owning Runtime or Target state |
| Registry | Perform domain registry operations without duplicating A.4.3 Engine Registry |

## 8. Distribution Awareness

When a task concerns release assembly, packaging, manifests, integrity, installation, update, rollback, uninstall, or product discovery, Operational Core shall consume A.6 directly.

Operational Core shall not:

- treat private development content as released product truth;
- place Forge AI Target truth into reusable releases;
- infer release approval from technical validation;
- treat installation as Target mutation authority;
- update or rollback Target-owned files through a product lifecycle operation;
- bypass integrity, compatibility, ownership, or release-governance gates.

## 9. Mutation Boundary

Repository or external mutation is allowed only when all are true:

1. Human intent authorizes mutation.
2. Target authority permits the exact mutation.
3. The affected ownership domain is known.
4. Protected boundaries are respected.
5. Required validation is known.
6. The provider has the necessary capability.
7. No unresolved blocker requires safe stop.

A continuation request does not by itself authorize a Target lifecycle transition. ProjectStatus, DevelopmentPhases, Roadmap, certification, promotion, and release state may change only through their owning Target or governance authority.

## 10. Completion Contract

Every completed work unit shall report:

- scope completed;
- files or resources changed;
- authority consumed;
- validation performed and results;
- unresolved risks or blockers;
- release, certification, approval, or state-transition status without exaggeration;
- recommended next bounded action.

Task completion is not certification, approval, promotion, release authorization, or Target-state acceptance.

## 11. Safe-Stop Conditions

Stop before mutation when:

- Target identity or Resolved Target Context is missing;
- ownership is ambiguous;
- product truth and Target truth conflict;
- required Execution Contract is absent;
- requested action exceeds Target Execution Boundaries;
- provider capability is insufficient;
- integrity or compatibility cannot be verified;
- more than one materially different next transition is possible;
- Human Governance decision is required.

## 12. Conformance

`AIOrchestrator.md` shall coordinate work within this contract.

`AgentSystemPrompt.md` shall translate this contract into tool-facing behavior.

Commands, workflows, templates, agents, and providers shall not broaden the authority defined here.

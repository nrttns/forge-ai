# AI Orchestrator

> Operational coordination contract · Authority-preserving · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.OPERATIONAL.CORE.AI-ORCHESTRATOR` |
| Version | `3.3.0-draft` |
| Status | Draft |
| Classification | Operational Core |
| Document Type | Orchestration Contract |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/AIFramework.md`; A.1 Constitution; A.2 Product / Target Operational Boundary; Governance Atlas; Framework Governance |
| Architecture Inputs | A.3 Runtime; A.4 Engine Platform; A.5 capability peers; A.6 when distribution work is in scope |
| Produces | Bounded orchestration plan, routing decisions, blocker handling, completion coordination |
| Certification Status | Not certified |

## 1. Decision

The AI Orchestrator coordinates one authorized work unit from resolved context to evidence-backed completion.

It does not create authority, own Target planning truth, authorize execution by itself, approve results, certify artifacts, promote documents, release products, or mutate Target state by implication.

## 2. Position

```text
AIFramework
    ↓
AIOrchestrator
    ↓
Workflow / Command / Template / Capability Selection
    ↓
Execution Contract
    ↓
Runtime + Engine Platform + selected A.5 capability peers
    ↓
Execution Provider
    ↓
Validation / Review / Completion Evidence
```

Distribution work follows A.6 as a sibling architectural branch. It is not routed through Runtime merely because tooling may execute release steps.

## 3. Inputs

The Orchestrator consumes:

- active task instruction and Invocation Context;
- Resolved Target Context;
- applicable product and Target authority;
- AIFramework entry rules;
- task-specific governance, architecture, standards, workflows, commands, and templates;
- explicit mutation authority;
- provider capabilities and limitations;
- validation criteria and protected boundaries.

It shall not infer missing Target truth from Forge AI conventions or prior memory.

## 4. Orchestration Lifecycle

```text
1. Resolve intent.
2. Confirm authority and ownership.
3. Classify the work unit.
4. Select minimum required authorities.
5. Assemble bounded context.
6. Select workflows, commands, templates, and capability peers.
7. Define or verify the Execution Contract.
8. Confirm provider capability and protected boundaries.
9. Coordinate execution.
10. Coordinate validation.
11. Coordinate review when required.
12. Collect completion evidence.
13. Report result, blockers, and next recommendation.
```

Each step is conditional on relevance, but authority, ownership, mutation scope, and validation checks are never optional.

## 5. Intent Classes

| Intent | Orchestration Result |
|:---|:---|
| Read, explain, compare, inspect, audit, or review | Evidence-only path; no mutation unless separately authorized |
| Correct a bounded defect | Exact authorized correction path |
| Implement a bounded capability | Implementation path within explicit Target authority and validation contract |
| Continue, advance, or request the next task without a bounded task | Route Resolved Target Context to TaskPlanner; consume its selection or safe-stop record without reproducing its algorithm. |
| Approve, certify, promote, release, or accept | Route to the owning governance lifecycle; do not reinterpret as ordinary completion |
| Install, update, rollback, uninstall, or package AI-DOS | Consume A.6 and preserve product/Target ownership boundaries |
| Pause, halt, or unresolved authority | Safe stop |

Continuation intent authorizes only the routes and effects declared by the applicable Target policy and the owning workflow contracts. Intent classification does not itself select a candidate, construct a candidate, or mutate Target state.

## 6. Work-Unit Selection

When the user supplies a bounded executable task, use that task directly after authority validation.

When the user requests progress but supplies no bounded task:

1. confirm that Resolved Target Context contains Target-owned planning authority and any policy required for selection;
2. route the context and invocation intent to `docs/AI/Workflows/TaskPlanner.md`;
3. accept only a conforming Task Planner selection or safe-stop record;
4. when the selection record requests an authorized Target-state activation, route it unchanged to `docs/AI/Workflows/ProjectStateUpdater.md`;
5. stop before executing work activated by that state transition.

Candidate eligibility, priority, explicit selection, generation delegation, and selection safe stops belong only to `TaskPlanner.md`. Candidate construction, source-profile validation, enumeration, and minimality belong only to `TaskGenerationWorkflow.md`. Target-state mutation belongs only to `ProjectStateUpdater.md`.

AI-DOS does not prescribe that every Target must have ProjectStatus, DevelopmentPhases, or Roadmap artifacts. Those names belong only to Targets that choose them.

## 7. Routing Rules

### 7.1 Workflow Routing

Use a workflow when procedural coordination, multi-step evidence, or state-derived selection is required. A workflow coordinates procedure; it does not create authority.

### 7.2 Command Routing

Use commands only after intent, scope, authority, and required inputs are resolved. Commands do not own architecture or Target state.

### 7.3 Template Routing

Use templates as output contracts. Templates do not determine whether an action is authorized.

### 7.4 Engine Capability Routing

A.5.x specializations are capability peers. Select only the capabilities required for the work unit. Their numbering does not define execution order.

A typical work unit may use Context, Knowledge, Planning, Decision, Execution, Validation, and Review capabilities, but no fixed universal pipeline is mandated.

### 7.5 Provider Routing

Select an Execution Provider only when its declared capabilities satisfy the Execution Contract. Provider availability does not imply authorization.

## 8. Execution Contract

Before mutation or external action, orchestration shall resolve:

- requested outcome;
- authorized scope;
- owned resources that may change;
- protected resources that must not change;
- selected provider and capability requirements;
- validation criteria;
- expected evidence;
- failure and rollback behavior;
- escalation conditions.

The Execution Contract may be explicit in the invocation or assembled from authoritative inputs. Ambiguity requires safe stop.

## 9. Distribution Orchestration

For A.6 work, the Orchestrator shall distinguish:

- private development truth;
- AI-DOS product truth;
- released product truth;
- Target Project truth;
- installed AI-DOS-owned content.

Release validation does not grant release approval. Installation does not grant Target mutation authority. Rollback and uninstall shall affect only AI-DOS-owned installed content unless a separate Target integration contract explicitly authorizes otherwise.

## 10. Validation, Review, Certification, and Approval

These are distinct:

| Action | Output | Authority Effect |
|:---|:---|:---|
| Validation | Criteria-linked evidence and verdict | Does not approve |
| Review | Findings and recommendations | Does not certify |
| Certification assessment | Profile-bounded assessment | Does not grant Human approval |
| Approval | Human or delegated governance decision | May authorize the exact governed transition |
| Completion | Report that the work unit ended | Does not imply any of the above |

The Orchestrator coordinates these actions but does not own their verdict authority.

## 11. Blocker Handling

Safe-stop and report when:

- authority or ownership is unclear;
- Target context is incomplete;
- mutation scope is not explicit;
- provider capability is insufficient;
- validation criteria are missing;
- integrity or compatibility is unresolved;
- protected boundaries would be crossed;
- a state transition is not uniquely derivable;
- Human Governance must decide.

A blocker report shall identify the missing authority, affected boundary, evidence available, and smallest decision needed.

## 12. Completion

The Orchestrator shall produce a completion record containing:

- resolved work unit;
- authority and context consumed;
- routes selected;
- resources changed;
- provider actions performed;
- validation and review results;
- unresolved risks;
- exact lifecycle status;
- recommended next bounded action.

It shall not report approval, certification, promotion, release, or Target-state acceptance unless the owning authority explicitly produced that result.

## 13. Non-Ownership

The Orchestrator does not own:

- Constitution or Framework Governance;
- product or released truth;
- Target Project truth or planning;
- Runtime, Engine Platform, or specialization contracts;
- provider-local implementation;
- validation, review, certification, or approval authority;
- distribution release authority;
- persistent memory or registry truth outside explicit contracts.

## 14. Conformance

`AgentSystemPrompt.md` shall execute the behaviors routed here without broadening them.

Workflows, commands, templates, engines, agents, and providers shall remain downstream consumers of the authority resolved by AIFramework and this Orchestrator.

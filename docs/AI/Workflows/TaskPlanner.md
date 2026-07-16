# Task Planner

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-PLANNER` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Task Routing Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/DecisionModel.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/AIOrchestrator.md` |
| Consumes | Invocation-specific planning request; Resolved Target Context subset; explicit Target planning authorities; Decision Result |
| Produces | Bounded work-selection record or safe-stop result |
| Certification Status | Not certified |

## 1. Purpose

Task Planner routes an invocation to one bounded candidate work unit when the invocation explicitly authorizes planning. It does not own Target planning, ProjectStatus, DevelopmentPhases, Roadmap, capability progression, lifecycle transition, or repository inspection by default.

## 2. Owns

- Invocation-specific candidate normalization, classification, comparison, and selection.
- Traceability from the selected candidate to explicit Target authority and requested outcome.
- Safe stop when no candidate is authorized or sufficiently grounded.

## 3. Does Not Own

- Creation or interpretation of a universal Target planning model.
- Automatic reading of ProjectStatus, DevelopmentPhases, or Roadmap.
- Lifecycle transition, approval, execution, or Target-state mutation.
- Capability definitions, architecture authority, or task-generation authority.
- Forge AI-specific paths, stages, phases, or methodology.

## 4. Required Inputs

Planning may begin only when the invocation supplies or resolves:

- an explicit planning authorization;
- the Target-owned planning source or candidate set applicable to the task;
- Target objectives, constraints, protected boundaries, and validation requirements;
- applicable authority and ownership information;
- any required external Target package;
- a Decision Result that permits planning or review.

AI-DOS shall not infer missing planning inputs from Forge AI or from nearby repository state.

## 5. Planning Sequence

1. Verify that planning is explicitly authorized.
2. Resolve only the Target planning resources declared applicable by Resolved Target Context.
3. Normalize candidate work units without changing their Target-owned meaning.
4. Reject candidates lacking authority, ownership, bounded scope, validation path, or direct outcome trace.
5. Reject duplicate, already-complete, prohibited, incompatible, or protected-boundary-crossing candidates.
6. Compare only authorized candidates using the criteria supplied by the Target or invocation.
7. Select at most one work unit.
8. Produce a bounded selection record or safe stop.

## 6. Selection Record

A valid record contains:

- selected objective and owner;
- source Target authority;
- allowed and forbidden scope;
- dependencies and protected boundaries;
- expected behavioral or artifact outcome;
- validation requirements;
- completion condition;
- rejected alternatives and rejection reasons;
- next workflow or command route.

The record is not an Execution Contract and does not authorize mutation.

## 7. Safe-Stop Results

Return a non-mutating stop result when:

- planning authorization is absent;
- Target planning authority is absent or ambiguous;
- an external Target package is required but missing;
- no candidate is authorized;
- more than one candidate remains equally valid without a Target-owned tie-break rule;
- ownership, dependency, compatibility, validation, or protected boundaries are unresolved.

Do not invent useful-looking repository work.

## 8. Human Governance Intent

Review, approval, continuation, or completion language is classified by `AIOrchestrator` and the System Layer. Task Planner shall not convert those intents into ProjectStatus mutation, lifecycle transition, release, or new repository work. A separate explicit state-update authorization must route to `ProjectStateUpdater`.

## 9. Outputs

- One bounded work-selection record; or
- one safe-stop result with missing inputs and required authority; and
- evidence sufficient for Task Generation Workflow or Human Governance review.
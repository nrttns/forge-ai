# Task Planner

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-PLANNER` |
| Version | `3.1.0-draft` |
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

Task Planner routes an invocation to at most one bounded candidate work unit when planning is explicitly authorized. Human Governance continuation, advancement, or next-task intent counts as planning authorization when AIOrchestrator and the Target-owned contract route that intent here. Task Planner does not own Target planning, ProjectStatus, DevelopmentPhases, Roadmap, capability progression, lifecycle transition, or state mutation.

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

- an explicit planning authorization, including resolved Human Governance continuation, advancement, or next-task intent when permitted by the Target-owned contract;
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
6. If the invocation supplies `Next Step: X`, resolve `X` to exactly one eligible bounded candidate and bypass ranking only.
7. Otherwise, compare eligible candidates only through priority semantics explicitly supplied by the Target-owned planning authority.
8. Select the unique highest-priority eligible candidate.
9. Safe-stop when the highest priority is tied, priority semantics are absent or non-deterministic, `X` is missing, non-unique, or ineligible, or no eligible candidate remains.
10. When no executable work unit is active and Target-owned rules permit continuation-driven activation, include the exact activation precondition and selected candidate in the bounded selection record and route it to ProjectStateUpdater.
11. Otherwise, produce a bounded selection record for review or safe stop.
12. Never activate or execute the selected work unit directly.

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
- next workflow or command route;
- activation disposition: `not-requested`, `recommend-only`, or `route-to-project-state-updater`;
- when routed for activation, the Target-owned state artifact, expected precondition, selected task identity, and exact bounded scope required to assemble the state-update Execution Contract.

The record is not an Execution Contract and does not authorize mutation.

### 6.1 Priority and Explicit Selection

Eligibility is evaluated before priority. An explicit `Next Step: X` selection overrides ranking only; it never converts an unauthorized, unbounded, dependency-blocked, incompatible, or protected-boundary-crossing candidate into an eligible candidate.

Without `Next Step: X`, priority must come from an explicit Target-owned priority value or an unambiguous Target-owned ordering rule whose direction and tie behavior are declared. Repository proximity, recency, implementation convenience, provider preference, or model judgment are not priority. Exactly one candidate must have the highest priority. A highest-priority tie or missing priority semantics is non-deterministic and requires safe stop.

## 7. Safe-Stop Results

Return a non-mutating stop result when:

- planning authorization is absent;
- Target planning authority is absent or ambiguous;
- an external Target package is required but missing;
- no candidate is eligible;
- more than one candidate shares the highest Target-owned priority;
- Target-owned priority semantics or tie behavior are missing;
- `Next Step: X` does not resolve to exactly one eligible candidate;
- ownership, dependency, compatibility, validation, or protected boundaries are unresolved.

Do not invent useful-looking repository work.

A no-eligible-candidate result shall begin with `NO CAPABILITY-GROUNDED WORK UNIT FOUND` and report the candidates considered, their rejection reasons, the smallest missing authority or dependency, and possible next steps labeled as non-authorizing recommendations. A priority tie shall report the tied candidates and the missing Target-owned tie-break decision.

## 8. Human Governance Intent

Review, approval, continuation, and completion language is classified by `AIOrchestrator` and the System Layer. Approval and completion intent route to the owning lifecycle and do not become work selection. Continuation, advancement, or next-task intent may authorize bounded candidate selection when the Target-owned contract permits it. Task Planner never mutates Target state itself; when exactly one selected candidate and exactly one activation transition are authorized, it routes the selection record to ProjectStateUpdater. Otherwise it returns a recommendation or safe-stop result.

## 9. Outputs

- One bounded work-selection record; or
- one safe-stop result with missing inputs and required authority; and
- evidence sufficient for Task Generation Workflow or Human Governance review.
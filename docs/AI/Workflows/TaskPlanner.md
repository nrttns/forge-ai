# Task Planner

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-PLANNER` |
| Version | `3.4.0-draft` |
| Status | Draft |
| Classification | Task Routing Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/DecisionModel.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/AIOrchestrator.md` |
| Consumes | Invocation-specific planning request; Resolved Target Context subset; explicit Target planning authorities; Decision Result |
| Produces | Bounded work-selection record, candidate-generation request, or safe-stop result |
| Certification Status | Not certified |

## 1. Purpose

Task Planner routes an invocation to at most one bounded candidate work unit when planning is explicitly authorized. Human Governance continuation, advancement, or next-task intent counts as planning and deterministic candidate-generation authorization when AIOrchestrator and the Target-owned contract route that intent here. Task Planner owns candidate discovery, priority, and final selection; TaskGenerationWorkflow owns bounded candidate construction when no predeclared eligible candidate exists. Task Planner does not own Target planning truth, ProjectStatus, DevelopmentPhases, Roadmap, capability progression, lifecycle transition, or state mutation.

## 2. Owns

- Invocation-specific candidate discovery, normalization, classification, comparison, and selection.
- Issuance of exactly one candidate-generation request when no predeclared candidate is eligible for the controlling objective.
- Validation of generated-candidate authority, completeness, minimality, and eligibility.
- Traceability from the selected candidate to explicit Target authority and requested outcome.
- Safe stop when no unique minimal candidate is authorized and sufficiently grounded.

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

1. Verify planning authority from resolved invocation intent and Target-owned rules.
2. Resolve the Target-owned controlling objective, dependencies, protected boundaries, and priority semantics without assuming a particular Target planning model or filename.
3. Discover and normalize predeclared candidate work units without changing their Target-owned meaning.
4. Reject predeclared candidates lacking authority, ownership, bounded scope, validation path, direct outcome trace, or protected-boundary compliance.
5. If the invocation supplies `Next Step: X`, resolve `X` to a predeclared eligible candidate; when `X` is not already bounded, issue one generation request scoped to `X`. Explicit selection bypasses ranking only.
6. Otherwise, rank eligible predeclared candidates through Target-owned priority semantics and select the unique highest-priority candidate when one exists.
7. When no predeclared candidate is eligible for the controlling objective, issue exactly one request conforming to `TaskGenerationWorkflow.md`; do not reinterpret or duplicate its generation-input schema.
8. Accept only its conforming generated-candidate record or generation safe-stop record. Validate record provenance and integrity, then validate a returned candidate exactly as a predeclared candidate.
9. Treat generation uniqueness and minimality evidence as owned by `TaskGenerationWorkflow.md`; Task Planner verifies that the required evidence is present and conforming but does not recompute it through a second algorithm.
10. Select exactly one validated candidate and include whether it was predeclared or generated plus full provenance and applicable generation evidence.
11. When no executable work unit is active and Target-owned rules permit continuation-driven activation, include the exact activation precondition and candidate in the selection record and route it to ProjectStateUpdater.
12. Safe-stop on a priority tie, a generation safe-stop, missing grounding, non-unique or ineligible `X`, or no eligible candidate.
13. Never activate or execute the selected work unit directly.

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

Eligibility is evaluated before priority. An explicit `Next Step: X` selection overrides ranking only; when `X` is not already bounded, TaskGenerationWorkflow may construct its bounded specification under the same grounding and minimality rules. Explicit selection never converts an unauthorized, ungrounded, dependency-blocked, incompatible, or protected-boundary-crossing candidate into an eligible candidate.

Without `Next Step: X`, priority must come from an explicit Target-owned priority value or an unambiguous Target-owned ordering rule whose direction and tie behavior are declared. Repository proximity, recency, implementation convenience, provider preference, or model judgment are not priority. Candidate generation occurs only after the controlling objective is fixed and no predeclared candidate is eligible; it must not change objective priority. Exactly one predeclared highest-priority candidate or one unique minimal generated candidate may be selected.

## 7. Safe-Stop Results

Return a non-mutating stop result when:

- planning authorization is absent;
- Target planning authority is absent or ambiguous;
- an external Target package is required but missing;
- no predeclared candidate is eligible and `TaskGenerationWorkflow.md` returns a generation safe-stop;
- a generated-candidate or generation safe-stop record is missing, malformed, or lacks required provenance;
- more than one candidate shares the highest Target-owned priority;
- Target-owned priority semantics or tie behavior are missing;
- `Next Step: X` does not resolve to exactly one eligible candidate;
- ownership, dependency, compatibility, validation, or protected boundaries are unresolved.

Do not invent useful-looking repository work.

A no-eligible-candidate result shall begin with `NO CAPABILITY-GROUNDED WORK UNIT FOUND` and report predeclared and generated candidates considered, their rejection or non-uniqueness reasons, artifact-set minimality comparisons, the smallest missing grounding, authority, validation, or dependency, and possible next steps labeled as non-authorizing recommendations. A priority tie shall report the tied candidates and the missing Target-owned tie-break decision.

## 8. Human Governance Intent

Review, approval, continuation, and completion language is classified by `AIOrchestrator` and the System Layer. Approval and completion intent route to the owning lifecycle and do not become work selection. Continuation, advancement, or next-task intent may authorize deterministic bounded candidate generation and selection when the Target-owned contract permits it. Task Planner never mutates Target state itself; when exactly one selected candidate and exactly one activation transition are authorized, it routes the selection record to ProjectStateUpdater. Otherwise it returns a recommendation or safe-stop result.

## 9. Outputs

- One bounded work-selection record; or
- one safe-stop result with missing inputs and required authority; and
- evidence sufficient for Task Generation Workflow or Human Governance review.

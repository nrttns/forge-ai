# Task Generation Workflow

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-GENERATION` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Execution-Contract Preparation Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/Workflows/TaskPlanner.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/AIOrchestrator.md` |
| Consumes | Valid work-selection record; applicable Target authority; provider and validation constraints |
| Produces | Proposed bounded task specification for System Layer execution preparation |
| Certification Status | Not certified |

## 1. Purpose

This workflow translates one valid Task Planner selection record into a bounded task specification. It does not select work, authorize mutation, create an Execution Contract, or infer Target planning state.

## 2. Owns

- Faithful translation of the selected work unit into an executable task specification.
- Preservation of objective, owner, scope, constraints, dependencies, validation, and completion condition.
- Selection of an applicable command route.

## 3. Does Not Own

- Candidate discovery or prioritization.
- Authority resolution, Decision Result, or Execution Contract issuance.
- ProjectStatus, DevelopmentPhases, Roadmap, lifecycle transition, or Target-state mutation.
- Execution, approval, certification, promotion, or release.

## 4. Generation Preconditions

Generation requires a selection record that contains:

- explicit source authority and owner;
- exactly one selected work unit;
- allowed and forbidden scope;
- dependencies and protected boundaries;
- expected outcome;
- validation requirements;
- completion and stop conditions;
- command route or enough information to choose one safely.

Stop when any required field is absent, contradictory, or unsupported.

## 5. Generation Sequence

1. Verify the selection record provenance and integrity.
2. Preserve the selected objective without reinterpretation or expansion.
3. Convert scope into explicit allowed and forbidden actions and artifacts.
4. Preserve dependencies, protected boundaries, validation requirements, and completion condition.
5. Select the narrowest applicable command.
6. Produce a proposed task specification for `ExecutionSequence.md`.
7. Do not execute the task or update Target state.

## 6. Output Contract

The proposed task specification contains:

- task identity and owner;
- target boundary;
- objective;
- allowed and forbidden mutations;
- required inputs and dependencies;
- command route;
- provider capability requirements;
- validation and evidence requirements;
- safe-stop and completion conditions.

Only the System Layer may turn this proposal into an authorized Execution Contract after applicable authority and decision checks.

## 7. Safe Stop

Do not generate a task specification when no selected work unit exists, authority provenance is missing, the scope is unbounded, provider requirements are unknown, validation is unavailable, or a protected boundary would be crossed.
# Project State Updater

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.PROJECT-STATE-UPDATER` |
| Version | `3.2.0-draft` |
| Status | Draft |
| Classification | Target-State Mutation Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/ExecutionSequence.md`; `docs/AI/FrameworkGovernance.md`; explicit Target state-update authority |
| Consumes | State-update Execution Contract; Target-owned state schema; transition evidence and constraints |
| Produces | Bounded Target-state mutation or non-mutating recommendation |
| Certification Status | Not certified |

## 1. Purpose

This workflow applies one explicitly authorized mutation to a Target-owned operational-state artifact. It is a generic mutation route and does not require or prescribe ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, or capability terminology.

## 2. Owns

- Validation and application of the exact state mutation in an authorized Execution Contract.
- Preservation of the Target-owned state schema and transition constraints.
- Mutation evidence and completion reporting.

## 3. Does Not Own

- Target operational state, planning model, lifecycle schema, or transition policy.
- Classification of Human Governance intent; it consumes intent resolved by AIOrchestrator and applicable Target-owned rules.
- Selection of a next phase, stage, capability, milestone, or task; it consumes a bounded Task Planner selection record when activation is authorized.
- Architecture, Governance, release, certification, or promotion authority.

## 4. Required Inputs

A mutation requires:

- an explicit state-update Execution Contract, assembled from direct Human Governance instruction or from uniquely resolved Human Governance approval or continuation intent under Target-owned rules;
- exact Target-owned artifact identity and owner;
- current state and expected precondition;
- exact fields or records allowed to change;
- Target-owned transition rule or direct Human Governance instruction;
- evidence required by that rule;
- for continuation-driven activation, a Task Planner selection record containing exactly one bounded candidate, whether it was predeclared or generated, its Candidate Generation Source Profile identity, exhaustive enumeration trace, full authority, and minimality evidence, and its activation precondition;
- validation, rollback, and stop conditions.

Without these inputs, the workflow may only produce a recommendation.

## 5. Mutation Sequence

1. Verify Target identity, artifact path, owner, schema, and current state.
2. Verify the Execution Contract authorizes the exact mutation.
3. Verify the requested transition against Target-owned transition rules or direct Human Governance instruction.
4. Verify required validation, review, dependency, and protected-boundary evidence.
5. Confirm exactly one mutation result is authorized.
6. For approval intent, apply only the uniquely derivable acceptance or gate-closing transition and do not select subsequent work.
7. For continuation or next-task intent with no active executable work unit, activate only the single Task Planner-validated bounded candidate, whether predeclared or generated, and do not execute it. A generated candidate must contain complete authority provenance, finite source-profile identity, exhaustive enumeration trace, exact artifact scope, validation, completion, and unique-minimality evidence. When the invocation supplies `Next Step: X`, require the selection record to prove that `X` resolved to exactly one eligible bounded candidate; explicit selection bypasses ranking only.
8. Apply only the named fields or records.
9. Validate the resulting artifact and report the before/after state.
10. Stop before selecting or executing subsequent work.

## 6. Prohibited Inference

The following do not authorize state mutation:

- literal command words considered without resolved Human Governance intent, Target-owned transition rules, and required evidence;
- merge, completion, review, validation, or certification status;
- registry presence, capability availability, installation, or provider availability;
- a nearby Roadmap, ProjectStatus, DevelopmentPhases, or Forge AI convention;
- the existence of exactly one convenient next task.

Intent classification may route a request here. Human Governance approval intent may authorize a uniquely derivable acceptance or gate-closing transition. Human Governance continuation, advancement, or next-task intent may authorize activation only when Target-owned rules permit state-derived selection, no executable work unit is active, Task Planner resolves exactly one unique highest-priority eligible predeclared candidate, validates one unique minimal generated candidate, or validates one explicit `Next Step: X` candidate, and exactly one activation transition follows. `Next Step: X` never overrides eligibility, dependency, scope, validation, ownership, or protected-boundary rules. Approval and continuation transitions remain separate unless the Target-owned contract explicitly combines them.

## 7. Safe Stop

Stop without mutation when artifact identity, owner, schema, current state, transition rule, evidence, dependency, protected boundary, or exact mutation scope is missing or ambiguous; when multiple transitions are valid; or when the Target-owned rule requires further Human Governance action.

## 8. Outputs

- Authorized before/after state and validation evidence; or
- non-mutating recommended update with missing authority and evidence; and
- confirmation that no subsequent work was activated or executed.
# Project State Updater

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.PROJECT-STATE-UPDATER` |
| Version | `3.5.0-draft` |
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
- for continuation-driven activation, one conforming Task Planner selection record with exactly one bounded candidate and its activation precondition;
- for bare Human Governance approval intent (approval that does not repeat the subject's identity), exactly one canonically recorded Target-owned Pending Approval Subject in the Target-owned eligible-for-approval state, including its review subject locator and reviewed-subject revision identity;
- for producer-side recording of a new Target-owned Pending Approval Subject, an explicitly authorized dedicated recording task supplying a complete canonical review subject locator, a complete canonical reviewed-subject revision identity, an approval-eligible Review Outcome, Required Validation Evidence, and Required Completion/Integration Evidence, with each evidence item confirmed to reference that same exact reviewed-subject revision identity, and confirmation that no unresolved blocker applies;
- validation, rollback, and stop conditions.

Without these inputs, the workflow may only produce a recommendation.

## 5. Mutation Sequence

1. Verify Target identity, artifact path, owner, schema, and current state.
2. Verify the Execution Contract authorizes the exact mutation.
3. Verify the requested transition against Target-owned transition rules or direct Human Governance instruction.
4. Verify required validation, review, dependency, and protected-boundary evidence.
5. Confirm exactly one mutation result is authorized.
6. For producer-side recording of a new Target-owned Pending Approval Subject, verify the explicitly authorized dedicated recording task supplies a complete canonical review subject locator, a complete canonical reviewed-subject revision identity, an approval-eligible Review Outcome, Required Validation Evidence, and Required Completion/Integration Evidence for exactly one candidate subject; treat any missing element, or zero or more than one candidate presented for recording, as ineligible and require safe stop rather than partial or ambiguous recording.
7. For recording, verify that the supplied Review Outcome, Required Validation Evidence, and Required Completion/Integration Evidence each reference the exact same reviewed-subject revision identity the supplied locator resolves to; treat any evidence item referencing a different revision as an evidence-identity conflict and require safe stop.
8. For recording, immediately before writing the record, deterministically re-resolve the reviewed-subject revision identity through the supplied review subject locator; treat identity drift or an unresolvable locator or identity as invalidating the candidate subject and require safe stop rather than recording a stale or unresolvable subject.
9. For recording, verify the current Target-owned Pending Approval Subject record: if it is empty (`None recorded`), proceed; if it already records this exact candidate (identical locator and identical re-resolved revision identity) in `Awaiting Human Governance Approval` state with evidence identical to the evidence now supplied, treat the operation as an idempotent no-op and stop without mutation; if it records any other subject, this same subject with different evidence, or an existing `Accepted` or `Invalidated` record, treat this as an existing-record conflict and require safe stop — recording must never silently overwrite, replace, or clear an existing record without a separately authorized and evidence-backed clearing transition.
10. For recording, verify no unresolved blocker applies to the candidate subject; treat any unresolved blocker as disqualifying and require safe stop.
11. Record exactly one subject into the Target-owned Pending Approval Subject slot in the `Awaiting Human Governance Approval` state only, writing only the recorded locator, revision identity, Review Outcome, Required Validation Evidence, Required Completion/Integration Evidence, and blocker confirmation; do not apply approval, do not mark the subject `Accepted`, do not infer continuation authority, and do not select, generate, or activate any next task as part of recording.
12. For approval intent naming an exact subject identity, verify that identity against any canonically recorded Target-owned Pending Approval Subject; treat a conflict between the named identity and a recorded subject as a safe stop, not a tie-break.
13. For bare approval intent that does not name a subject, consume the Target-owned Pending Approval Subject record and require exactly one subject in the Target-owned eligible-for-approval state; treat zero, more than one, or a structurally invalid record as a safe stop.
14. Immediately before applying approval to any subject resolved under rule 12 or 13, deterministically re-resolve its reviewed-subject revision identity through its recorded review subject locator; treat identity drift, an already-closed-lifecycle subject (already accepted or invalidated), or an unresolvable locator or identity as invalidating the subject and requiring safe stop.
15. Apply only the uniquely derivable acceptance or gate-closing transition for the resolved subject and do not select subsequent work.
16. For continuation or next-task intent with no active executable work unit, validate the selection record's integrity and activation precondition, then activate only its single Task Planner-selected bounded candidate and do not execute it. Do not re-run or reinterpret candidate selection, generation, priority, or minimality.
17. Apply only the named fields or records.
18. Validate the resulting artifact and report the before/after state.
19. Stop before selecting or executing subsequent work.

## 6. Prohibited Inference

The following do not authorize state mutation:

- literal command words considered without resolved Human Governance intent, Target-owned transition rules, and required evidence;
- merge, completion, review, validation, or certification status;
- registry presence, capability availability, installation, or provider availability;
- a nearby Roadmap, ProjectStatus, DevelopmentPhases, or Forge AI convention;
- the existence of exactly one convenient next task;
- provider-specific state (open/closed/merged status, branch protection, or self-approval restriction) treated as if it were the Target-owned Pending Approval Subject record, or as a substitute for a canonically recorded subject or for Human Governance approval intent;
- a reviewed, validated, or completed artifact lacking a canonically recorded Target-owned Pending Approval Subject entry, treated as an eligible approval subject by implication;
- review evidence alone, without required completion/integration evidence and a coherent locator and revision identity, creating a recorded Pending Approval Subject;
- completion or merge evidence alone, without a recorded, approval-eligible Review Outcome and coherent identity evidence, creating a recorded Pending Approval Subject;
- repository activity, provider state, recent commits, model judgment, or user silence, standing in for an explicitly authorized dedicated recording task and its required evidence.

Recording a Pending Approval Subject and applying Human Governance approval to it remain separate mutations. Recording never applies approval, marks a subject `Accepted`, infers continuation or next-task authority, or selects, generates, or activates any work.

Intent classification may route a request here. Human Governance approval intent may authorize a uniquely derivable acceptance or gate-closing transition. Continuation-driven activation requires a conforming Task Planner selection record, Target-owned authorization for the exact transition, no active executable work unit, and exactly one mutation result. Approval and continuation transitions remain separate unless the Target-owned contract explicitly combines them.

## 7. Safe Stop

Stop without mutation when artifact identity, owner, schema, current state, transition rule, evidence, dependency, protected boundary, or exact mutation scope is missing or ambiguous; when multiple transitions are valid; or when the Target-owned rule requires further Human Governance action.

Stop without mutation on bare approval intent when the Target-owned Pending Approval Subject record is absent, non-unique, or structurally invalid, or when deterministic re-resolution of its reviewed-subject revision identity through its recorded review subject locator cannot be completed or reveals drift. Stop on explicit approval intent when the named subject identity conflicts with a canonically recorded subject, or when the resolved subject is already accepted or invalidated.

Stop without recording when: the candidate's locator, revision identity, Review Outcome, Required Validation Evidence, or Required Completion/Integration Evidence is missing, ambiguous, or unresolvable (reviewed-but-incomplete or completed-but-unreviewed candidates are never eligible); any evidence item resolves to a revision identity different from the others (evidence-identity conflict); deterministic re-resolution immediately before recording cannot be completed or reveals drift (stale or superseded revision); an unresolved blocker applies; zero or more than one candidate subject is presented for recording in the same request; or the Target-owned Pending Approval Subject slot already records a different subject, this same subject with different evidence, or an existing `Accepted` or `Invalidated` record, and no separately authorized clearing transition has returned the slot to `None recorded`. None of these recording safe stops apply approval, select a next task, or mutate any ProjectStatus field other than the attempted §6.1 record.

A recording request for the exact same candidate (identical locator and re-resolved revision identity) with evidence identical to an existing `Awaiting Human Governance Approval` record is not a safe stop; it is an idempotent no-op, reported as such, because it changes nothing and does not risk silent replacement.

## 8. Outputs

- Authorized before/after state and validation evidence; or
- a newly recorded Target-owned Pending Approval Subject in `Awaiting Human Governance Approval` state, or an idempotent no-op confirmation for an identical repeat recording request; or
- non-mutating recommended update with missing authority and evidence; and
- confirmation that no subsequent work was activated or executed, and that recording did not itself apply approval, mark a subject `Accepted`, or select a next task.

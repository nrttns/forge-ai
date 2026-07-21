# Task Generation Workflow

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-GENERATION` |
| Version | `3.3.0-draft` |
| Status | Draft |
| Classification | Candidate Generation and Execution-Contract Preparation Workflow |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/AIOrchestrator.md` |
| Consumes | Candidate-generation request or valid work-selection record; applicable Target authority; provider and validation constraints |
| Produces | Generated bounded candidate, proposed bounded task specification, or generation safe-stop record |
| Certification Status | Not certified |

## 1. Purpose

This workflow has two explicit modes:

1. **Candidate Generation Mode** — when Human Governance continuation or next-task intent is authorized, the controlling objective is fixed, and no predeclared eligible candidate exists, derive the smallest capability-grounded bounded candidate.
2. **Specification Translation Mode** — translate one valid Task Planner selection record into a bounded task specification.

It does not rank objectives, mutate Target state, issue an Execution Contract, activate work, execute work, or infer authority from repository convenience.

## 2. Owns

- Construction of bounded candidate specifications from a Task Planner generation request.
- Enumeration and canonicalization of capability-grounded candidates for one fixed objective.
- Completion of objective, owner, exact artifact set, allowed and forbidden mutation, dependencies, validation, evidence, completion, and stop fields.
- Set-inclusion minimality comparison of candidate mutation-artifact sets.
- Faithful translation of a selected work unit into an executable task specification.
- Selection of the narrowest applicable command route.

## 3. Does Not Own

- Capability, stream, evidence-item, or objective priority.
- Final candidate eligibility, ranking, or selection; Task Planner owns those decisions.
- Authority resolution, Decision Result, or Execution Contract issuance.
- ProjectStatus, DevelopmentPhases, Roadmap, lifecycle transition, or Target-state mutation.
- Execution, approval, certification, promotion, or release.

## 4. Candidate Generation Preconditions

Generation requires one request containing:

- Human Governance continuation, next-task, or explicit-selection authority;
- one fixed controlling objective and its Target-owned source;
- current capability and dependency boundary;
- one finite Target-owned generation input for the fixed objective;
- permitted Target resource boundary and owner declarations;
- protected areas and prohibited capabilities;
- available validation authorities and evidence requirement;
- completion and stop conditions.

The request must not ask this workflow to choose among objectives or cross a capability boundary.

The Target-owned generation input is required and contains only finite records:

- `objective_id`: exact controlling objective identifier;
- `artifact_options`: ordered records of `option_id`, exact existing path or exact Target-rule expansion, owner, mutation kind, mandatory flag, optional `choice_group`, and validation-profile identifier;
- `validation_profiles`: exact commands or checks, evidence shape, and observable completion predicate;
- `combination_rules`: mandatory options, exactly-one choice groups, explicit compatibility/exclusion pairs, and maximum artifact count;
- `ordering`: stable record order used only for output canonicalization, never as a semantic tie-break.

Missing, open-ended, duplicate, contradictory, or non-finite records require safe-stop. Repository scanning, semantic brainstorming, and model-proposed artifact options are not enumeration sources.

## 5. Capability Grounding

A generated candidate is capability-grounded only when every required field is traceable to declared Target authority:

- the objective directly advances the fixed controlling objective;
- the owner is declared by a Target contract or resource;
- every mutation artifact is emitted by one exact `artifact_options` record and is an existing declared resource or an exact path produced by a total Target-owned placement/naming rule whose inputs and expansion result are recorded before enumeration;
- allowed and forbidden mutations are exact;
- dependencies and protected boundaries are explicit;
- validation uses declared commands, checks, or acceptance criteria;
- evidence and completion conditions are observable;
- the candidate does not depend on repository proximity, recency, convenience, provider preference, or unconstrained model judgment.

A directory, glob, inferred new path, or open-ended “related files” scope is not exact. A Target-owned placement/naming rule is usable only when it is total for the supplied inputs and expands to one exact path before candidate enumeration.

## 6. Deterministic Minimality

For one fixed objective:

1. Validate that the Target-owned generation input is finite, exact, internally consistent, and bound to the fixed objective.
2. Expand every total placement/naming rule to its exact path; reject any expansion with zero, multiple, or unresolved results.
3. Construct the complete candidate set mechanically: include every mandatory option, choose exactly one option from each declared choice group, include only combinations permitted by compatibility/exclusion rules, and reject combinations exceeding the declared maximum artifact count.
4. Attach only the validation profiles referenced by the selected artifact options; reject a combination whose profiles conflict or do not jointly define one observable completion predicate.
5. Canonicalize candidates by objective, owner, ordered mutation-artifact set, validation, and completion condition.
6. Remove exact duplicates.
7. Candidate A is smaller than candidate B only when A's mutation-artifact set is a strict subset of B's and A has the same objective, validation, evidence, and completion conditions.
8. Remove every strict superset.
9. If exactly one candidate remains, return it with the generation-input hash or identity, full enumeration trace, and comparison evidence.
10. If zero candidates remain, safe-stop for missing or inconsistent grounding.
11. If more than one incomparable candidate remains, safe-stop as a non-unique minimal generation result.

The workflow must not invent options, omit profile-permitted combinations, add semantic alternatives, or decide that a combination “satisfies” the objective through free-form judgment. Completeness means exhaustively applying the finite combination rules, not searching the repository.

Line count, estimated effort, implementation ease, alphabetical order, repository proximity, or model preference must not break a tie.

## 7. Generation Sequence

1. Verify request provenance, fixed objective, authority, and boundaries.
2. Validate and freeze the finite Target-owned generation input.
3. Exhaustively enumerate candidates by the profile's combination rules without repository search or model-proposed options.
4. Complete every bounded-candidate field from profile records.
5. Apply deterministic minimality.
6. Return one generated candidate or a generation safe-stop record to Task Planner.
7. Task Planner re-applies eligibility, dependency, priority, validation, ownership, and protected-boundary checks.
8. Do not select, activate, execute, or update Target state.

## 8. Specification Translation Preconditions

Translation requires a selection record containing:

- explicit source authority and owner;
- exactly one selected predeclared or generated work unit;
- exact allowed and forbidden scope;
- dependencies and protected boundaries;
- expected outcome;
- validation requirements;
- completion and stop conditions;
- command route or enough information to choose one safely.

## 9. Specification Translation Sequence

1. Verify selection-record provenance and integrity.
2. Preserve the selected objective without reinterpretation or expansion.
3. Convert scope into explicit allowed and forbidden actions and artifacts.
4. Preserve dependencies, protected boundaries, validation, evidence, and completion.
5. Select the narrowest applicable command.
6. Produce a proposed task specification for `ExecutionSequence.md`.
7. Do not execute the task or update Target state.

## 10. Output Contracts

A generated bounded candidate contains:

- generation authority and fixed-objective provenance;
- task identity and owner;
- exact mutation-artifact set;
- allowed and forbidden mutations;
- dependencies and protected boundaries;
- validation and evidence requirements;
- completion and stop conditions;
- enumeration and strict-subset minimality evidence.

A proposed task specification additionally contains target boundary, command route, and provider capability requirements.

A generation safe-stop record contains the fixed objective, candidates attempted, missing grounding or incomparable minima, artifact-set comparisons, and the smallest non-authorizing next decision.

## 11. Safe Stop

Do not generate or translate when authority provenance is missing, the objective is not fixed, the Target-owned generation input is missing, non-finite, open-ended, contradictory, or not exactly bound to the objective, a path rule does not expand to exactly one path, exhaustive combination enumeration is impossible, scope is not exact, owner or validation is unavailable, completion is not observable, a protected boundary would be crossed, or more than one incomparable minimal candidate remains.

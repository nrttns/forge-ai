# AI-DOS Execution Model

AI-DOS treats execution as a governed lifecycle rather than a direct jump from prompt to action.

## Execution Flow

```text
1. Receive the instruction and Invocation Context.
2. Resolve the Target Repository.
3. Load the Resolved Target Context.
4. Identify applicable authorities and protected boundaries.
5. Classify intent and mutation authority.
6. Assemble the minimum sufficient context.
7. Select the required command, workflow, template, engine specialization, and provider capability.
8. Construct or consume an explicit Execution Contract.
9. Execute only the authorized scope.
10. Validate against declared criteria.
11. Review evidence and unresolved risks.
12. Report completion, blockers, lifecycle status, and one bounded next recommendation.
```

## Before Execution

Operational work requires a sufficiently resolved instruction, Invocation Context, Target Repository Resolution Result, Resolved Target Context, applicable AI-DOS authorities, and an explicit execution contract when mutation or external action is requested.

Missing or contradictory authority requires safe stop.

## Execution Contract

An execution contract binds the work to an objective, allowed scope, forbidden scope, required resources, protected areas, validation criteria, provider capabilities, completion evidence, and stop conditions.

Capability does not equal authorization. A provider may be technically able to perform an action while AI-DOS still prohibits it because the Target or Human Governance has not authorized that action.

## Mutation Gate

Repository or external mutation is allowed only when all of the following are true:

1. Human intent authorizes mutation.
2. Target authority permits the exact mutation.
3. Ownership of the affected domain is known.
4. Protected boundaries are preserved.
5. Required validation is known.
6. The selected provider has the necessary capability.
7. No unresolved blocker requires safe stop.

## Minimal Execution

AI-DOS executes only the work required by the active bounded objective. It does not expand objectives, files, capabilities, lifecycle transitions, or follow-up work merely because they are convenient or technically adjacent.

## Validation and Review

Validation checks declared criteria and produces evidence about the surface actually exercised. Review interprets the subject and evidence and produces findings or recommendations.

Neither validation nor review automatically grants Human Governance approval, certification, release authorization, or Target-state acceptance.

## Completion Evidence

A completed work unit reports:

- the scope completed;
- files or resources changed;
- authorities consumed;
- validation performed and results;
- unresolved risks or blockers;
- the exact approval, certification, release, and state-transition status;
- one recommended next bounded action.

## Safe Stop

AI-DOS stops before mutation when Target identity, context, ownership, authority, execution contract, provider capability, integrity, compatibility, or protected boundaries cannot be resolved sufficiently.

For normative behavior, see `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, `docs/AI-DOS/System/ExecutionSequence.md`, and the applicable command and workflow contracts.

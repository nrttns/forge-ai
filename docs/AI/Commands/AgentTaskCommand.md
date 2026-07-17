# Agent Task Command

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-TASK` |
| Version | `3.0.1-draft` |
| Status | Draft |
| Classification | Base Execution Command |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI/System/SystemLayer.md`; `docs/AI/System/ExecutionSequence.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Consumes | Authorized Execution Contract; Resolved Target Context subset; applicable command specialization; provider capability declaration |
| Produces | Bounded execution result; validation evidence; completion report |
| Certification Status | Not certified |

## 1. Purpose

This command is the base execution contract for task-oriented work. It consumes one authorized Execution Contract produced through the System Layer and does not select work, infer authority, update Target state, approve lifecycle transitions, or redefine workflow routing.

## 2. Owns

- Generic command execution safeguards.
- Consumption and verification of source-control continuation targets declared by the Execution Contract.
- Verification that the requested action matches the Execution Contract.
- Provider dispatch preconditions.
- Result, evidence, and completion-report requirements.

## 3. Does Not Own

- Target selection, planning, ProjectStatus, DevelopmentPhases, Roadmap, or lifecycle transition.
- Authority resolution or decision selection.
- Workflow sequencing or task generation.
- Runtime, Engine, Distribution, Governance, or Target truth.
- Approval, certification, promotion, release, or canonicalization.

## 4. Required Inputs

- One valid `PROCEED` Decision Result.
- One bounded Execution Contract.
- Resolved Target Context fields explicitly referenced by that contract.
- Applicable protected-boundary and validation requirements.
- A compatible Execution Provider capability declaration.

## 5. Execution Rules

1. Confirm the Execution Contract identity, scope, owner, allowed actions, forbidden actions, target boundary, validation requirements, and stop conditions.
2. When the Execution Contract supplies an existing pull request head branch as its source-control continuation target, verify and preserve that branch as the command execution surface.
3. Do not allow a specialized command to substitute another branch or create a replacement pull request for that correction.
4. Permit a replacement pull request only when Human Governance explicitly authorizes it.
5. Select a specialized command when one applies.
6. Execute only the authorized mutation or read action.
7. Do not broaden scope from repository proximity, continuation intent, capability availability, or convenience.
8. Stop when authority, ownership, provider capability, compatibility, integrity, mutation scope, or protected boundaries are ambiguous.
9. Never mutate Target-owned planning or operational state unless that exact mutation is explicitly authorized by the Execution Contract.

## 6. Outputs

- Execution result with changed artifacts or read-only findings.
- Validation evidence tied to the Execution Contract.
- Risks, blockers, unresolved assumptions, and safe-stop state.
- Completion report that distinguishes completion from approval, certification, promotion, release, or Target-state transition.

## 7. Validation

A valid result demonstrates that only authorized files or resources were touched, all required checks ran, no authority boundary was crossed, and the reported outcome matches actual evidence.
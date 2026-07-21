# Agent Bug Fix Command

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-BUG-FIX` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Bug-Fix Execution Command |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Commands/AgentTaskCommand.md`; authorized Execution Contract |
| Consumes | Defect-scoped Execution Contract; reproduction evidence; applicable contracts |
| Produces | Bounded correction; regression evidence; completion report |
| Certification Status | Not certified |

## 1. Purpose

This command diagnoses and corrects one explicitly authorized defect without broadening into unrelated refactoring or architecture change.

## 2. Owns

- Defect reproduction and root-cause analysis.
- Smallest safe correction within the Execution Contract.
- Regression validation and evidence.

## 3. Does Not Own

- Work selection, Target planning, state transition, or roadmap advancement.
- Contract redesign unless explicitly authorized.
- Approval, certification, promotion, or release.

## 4. Execution Rules

1. Reproduce or otherwise prove the defect before editing.
2. Identify the violated contract, affected owner, root cause, and regression risk.
3. Apply the smallest bounded correction.
4. Preserve unrelated behavior, public contracts, and protected boundaries.
5. Add or update regression coverage when the contract requires it or when practical.
6. Stop when the root cause, authority, mutation scope, or validation path is unclear.

## 5. Outputs

- Root-cause statement.
- Changed artifacts.
- Failing-before and passing-after evidence when available.
- Remaining risks and blockers.
- Completion report without implied lifecycle transition.
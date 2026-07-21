# Agent Implementation Command

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-IMPLEMENTATION` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Implementation Execution Command |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Commands/AgentTaskCommand.md`; authorized Execution Contract; applicable architecture and implementation contracts |
| Consumes | Implementation-scoped Execution Contract; source context; provider capability; validation requirements |
| Produces | Bounded implementation change; test/build evidence; completion report |
| Certification Status | Not certified |

## 1. Purpose

This command implements one bounded and explicitly authorized change through a compatible Execution Provider.

## 2. Owns

- Implementation of the exact Execution Contract scope.
- Required source, test, build, and documentation changes inside that scope.
- Honest execution and validation evidence.

## 3. Does Not Own

- Task selection, architecture redesign, workflow routing, Target planning, or Target-state transition.
- Provider authorization beyond the Execution Contract.
- Approval, certification, canonical promotion, or release.

## 4. Execution Rules

1. Confirm target identity, allowed files, allowed actions, forbidden work, dependencies, and validation commands.
2. Verify provider capability and environment compatibility.
3. Preserve authority direction, public contracts, and protected boundaries.
4. Do not introduce future capability, unrelated cleanup, speculative abstraction, or parallel authority.
5. Update tests and documentation when required by the authorized behavior change.
6. Stop on ambiguous ownership, missing dependency, incompatible provider, integrity failure, or unbounded mutation scope.

## 5. Outputs

- Changed implementation artifacts.
- Test, typecheck, build, or other required validation evidence.
- Deviations, remaining risks, and blockers.
- Completion report that does not imply approval, release, or Target-state advancement.
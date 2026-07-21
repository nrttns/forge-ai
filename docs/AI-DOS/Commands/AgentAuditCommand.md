# Agent Audit Command

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-AUDIT` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Audit Execution Command |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Commands/AgentTaskCommand.md`; authorized Execution Contract |
| Consumes | Audit-scoped Execution Contract; applicable authorities; evidence sources |
| Produces | Findings, evidence, recommendations, and audit verdict |
| Certification Status | Not certified |

## 1. Purpose

This command performs a bounded, read-only audit defined by an authorized Execution Contract.

## 2. Owns

- Evidence collection within the authorized scope.
- Finding classification, severity, traceability, and recommendation.
- Audit verdict production.

## 3. Does Not Own

- Correction implementation.
- Work selection, workflow routing, Target planning, or state mutation.
- Approval, certification, promotion, release, or authority creation.

## 4. Execution Rules

1. Verify scope, evidence sources, authority set, protected boundaries, and required verdict model.
2. Compare observed state against the applicable contracts.
3. Record each finding with evidence, affected owner, impact, and bounded recommendation.
4. Do not modify audited artifacts unless a separate Execution Contract authorizes correction.
5. Stop when evidence provenance, ownership, or authority is unclear.

## 5. Verdicts

Use only `PASS`, `PASS WITH OBSERVATIONS`, `REQUIRES FOLLOW-UP`, or `FAILED`, unless the Execution Contract explicitly defines another approved vocabulary.

## 6. Outputs

- Scoped findings and evidence.
- Risks and blockers.
- Audit verdict.
- Recommended next action without implied approval or mutation authority.
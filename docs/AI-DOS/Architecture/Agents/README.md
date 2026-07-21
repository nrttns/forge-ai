# AGENTS v2 Family Index and Authority Map

## Purpose

This index identifies the active AGENTS v2 architecture family under `docs/AI-DOS/Architecture/Agents/`, distinguishes historical and evidence artifacts, and defines reading order without adding Target Project lifecycle authority to AI-DOS.

## Current Authority Summary

- `AGENTS-v2.md` is the AGENTS v2 family master.
- `AGENTS-v2-Architecture.md` is the architecture foundation.
- AGENTS v2 domain documents own bounded Agent architecture domains listed below.
- `AGENTS-v1-draft.md` is retained as historical predecessor / superseded candidate, not the current single Agent authority.
- `AGENTS-v2-Capability-Maturity-Model.md` and `AGENTS-v2-Capability-Evolution-Model.md` are realigned as Agent architecture capability models owned by AI-DOS Agent Architecture.
- `Reports/` contains review evidence, not architecture authority.

## Agent Family Inventory

| Document | Owned Domain | Classification | Status |
|:---|:---|:---|:---|
| `AGENTS-v2.md` | AGENTS v2 family master | AGENT FAMILY MASTER | Draft / non-canonical |
| `AGENTS-v2-Architecture.md` | Architecture foundation | AGENT ARCHITECTURE FOUNDATION | Draft / non-canonical |
| `AGENTS-v2-Agent-Identity-and-Registry.md` | Agent identity and registry | AGENT DOMAIN AUTHORITY | Draft / non-canonical |
| `AGENTS-v2-Agent-Capability-and-Role-Catalog.md` | Agent capability and role catalog | AGENT CAPABILITY CATALOG | Draft / non-canonical |
| `AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md` | Agent lifecycle and governance boundaries | AGENT GOVERNANCE BOUNDARY | Draft / non-canonical |
| `AGENTS-v2-Agent-Communication-and-Coordination.md` | Agent communication and coordination | AGENT DOMAIN AUTHORITY | Draft / non-canonical |
| `AGENTS-v2-Agent-Workflow-Model.md` | Agent workflow model | AGENT WORKFLOW CONTRACT | Draft / non-canonical |
| `AGENTS-v2-Agent-Delegation-and-Escalation-Model.md` | Agent delegation and escalation | AGENT DOMAIN AUTHORITY | Draft / non-canonical |
| `AGENTS-v2-Agent-Runtime-Consumption-Model.md` | Agent runtime consumption | AGENT RUNTIME CONSUMPTION CONTRACT | Draft / non-canonical |
| `AGENTS-v2-Agent-Validation-and-Review-Model.md` | Agent validation and review | AGENT VALIDATION CONTRACT | Draft / non-canonical |
| `AGENTS-v2-Capability-Maturity-Model.md` | Agent architecture maturity/readiness authority | AGENT ARCHITECTURE CAPABILITY MODEL | Draft / non-canonical subordinate capability model |
| `AGENTS-v2-Capability-Evolution-Model.md` | Agent capability dependency/evolution authority | AGENT ARCHITECTURE CAPABILITY MODEL | Draft / non-canonical subordinate capability model |
| `AGENTS-v1-draft.md` | historical predecessor / superseded candidate | HISTORICAL AGENT AUTHORITY | Draft / non-canonical |

## Reading Order

1. `AGENTS-v2.md` — family master and inventory entry point.
2. `AGENTS-v2-Architecture.md` — foundation and boundary model.
3. Identity, capability, lifecycle, communication, workflow, delegation, runtime consumption, and validation/review domain documents.
4. `AGENTS-v2-Capability-Maturity-Model.md` — maturity states, readiness criteria, and evidence requirements.
5. `AGENTS-v2-Capability-Evolution-Model.md` — dependency progression, prerequisites, and unlock relationships.
6. `Reports/` only as evidence and readiness review material.

## Ownership Boundaries

Agent Architecture consumes Human Governance, AI-DOS Governance, Meta, Standards, Runtime Architecture A.3, Engine Platform A.4/A.4.1-A.4.7, and Engine Specialization RFCs A.5.0-A.5.12. Agent documents may define agent identity, role, lifecycle, communication, workflow, delegation, runtime-consumption, and validation/review contracts. They may not redefine Runtime, Engine Platform, Engine Specialization, Operational Core, command procedures, or Target resources.

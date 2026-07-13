# AI-DOS Agent–Engine Authority Inventory Alignment v1

## 1. Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.AGENT-ENGINE.AUTHORITY-INVENTORY-ALIGNMENT.V1` |
| Title | AI-DOS Agent–Engine Authority Inventory Alignment v1 |
| Date | 2026-07-13 |
| Status | Complete inventory alignment report |
| Scope | AGENTS v2 family, AGENTS v1 predecessor, A.5.0-A.5.12 Engine specialization family, Governance Atlas, Runtime README |
| Modification Boundary | Central navigation, governance, inventory artifacts, and this report only |

## 2. Executive Summary

The inventory confirms that AGENTS v2 is a family, not a single-file replacement. `AGENTS-v2.md` is the family master, `AGENTS-v2-Architecture.md` is the foundation, AGENTS v2 domain documents own bounded Agent architecture domains, and `AGENTS-v1-draft.md` is a historical predecessor / superseded candidate. The A.5 family contains a template plus twelve Engine specialization authorities and is now explicitly mapped in central governance and runtime navigation.

## 3. Objective

Establish a corrected AI-DOS authority inventory distinguishing normative authority, architectural ownership, specialization ownership, execution consumption, governance constraint, review evidence, and activation authority.

## 4. Scope

Inspected all files under `docs/AI/Architecture/Agents/`, Agent reports including `Reports/AGENTS-v2-Core-Freeze-Review.md`, Runtime A.3, Engine Platform A.4/A.4.1-A.4.7, and A.5.0-A.5.12. Modified only permitted inventory/navigation files and this report.

## 5. Method

1. Read metadata, scope, authority, dependencies, and report evidence for the Agent family.
2. Read Runtime and Engine RFC metadata and authority boundaries.
3. Ran required contamination and reference searches.
4. Updated central inventories without editing Agent domain documents or Engine RFC bodies.
5. Validated changed-file boundary and no-diff boundary for protected read-only files.

## 6. Current Agent Authority Model

```text
AGENTS-v2 Master
    ↓
Architecture Foundation
    ↓
Identity / Capability / Lifecycle / Communication /
Workflow / Delegation / Runtime Consumption /
Validation and Review
```

AGENTS v2 is active as a draft/non-canonical architecture family. AGENTS v1 remains historical input and a superseded candidate pending Human Governance. Reports are evidence, not architecture authority.

## 7. Current Engine Authority Model

```text
A.3 Runtime
    ↓
A.4 Engine Platform
    ↓
A.5 Engine Specializations
    ↓
AGENTS v2 Agent Architecture
    ↓
Operational Core
```

A.5.0 owns the RFC template. A.5.1-A.5.12 own individual Engine specialization domains only. They consume Runtime and Engine Platform authority and do not own Target Project lifecycle, Agent Architecture, or Operational Core.

## 8. AGENTS v1 / v2 Relationship

1. AGENTS v1 is not current active architecture for the Agent family.
2. AGENTS v1 is historical input.
3. AGENTS v2 is the family master.
4. AGENTS-v2-Architecture is the architecture foundation.
5. Duplicate single-agent authority claims existed in central inventories that treated AGENTS v1 as current sole authority; corrected by mapping the AGENTS v2 family.
6. Governance previously continued to identify AGENTS v1 too narrowly; the correction addendum now maps AGENTS v2 and v1 status.

Disposition: **MARK SUPERSEDED CANDIDATE** pending Human Governance.

## 9. AGENTS v2 Family Inventory

| Document | Domain | Authority Type | Upstream | Downstream | Status |
|:---|:---|:---|:---|:---|:---|
| `AGENTS-v2.md` | Family master | AGENT FAMILY MASTER | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Architecture.md` | Architecture foundation | AGENT ARCHITECTURE FOUNDATION | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Identity-and-Registry.md` | Identity and registry | AGENT DOMAIN AUTHORITY | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Capability-and-Role-Catalog.md` | Capability and roles | AGENT CAPABILITY CATALOG | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md` | Lifecycle and governance boundaries | AGENT GOVERNANCE BOUNDARY | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Communication-and-Coordination.md` | Communication and coordination | AGENT DOMAIN AUTHORITY | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Workflow-Model.md` | Workflow model | AGENT WORKFLOW CONTRACT | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Delegation-and-Escalation-Model.md` | Delegation and escalation | AGENT DOMAIN AUTHORITY | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Runtime-Consumption-Model.md` | Runtime consumption | AGENT RUNTIME CONSUMPTION CONTRACT | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Agent-Validation-and-Review-Model.md` | Validation and review | AGENT VALIDATION CONTRACT | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Capability-Maturity-Model.md` | Agent architecture maturity/readiness authority | AGENT ARCHITECTURE CAPABILITY MODEL | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v2-Capability-Evolution-Model.md` | Agent capability dependency/evolution authority | AGENT ARCHITECTURE CAPABILITY MODEL | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `AGENTS-v1-draft.md` | Historical predecessor | HISTORICAL AGENT AUTHORITY | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |
| `Reports/AGENTS-v2-Core-Freeze-Review.md` | Review evidence | Review evidence | Human Governance, Governance Atlas, Runtime/Engine where applicable | AGENTS v2 consumers / Operational Core | Draft/non-canonical; v1 historical; reports evidence |


## 10. Engine Specialization Family Inventory

| RFC | Engine | Owned Responsibility | Upstream | Consumers | Status |
|:---|:---|:---|:---|:---|:---|
| `A.5.0` | Template | Template contract; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.1` | Context | Context acquisition/resolution/distribution; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.2` | Knowledge | Knowledge specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.3` | Planning | Planning specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.4` | Decision | Decision specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.5` | Execution | Execution specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.6` | Validation | Validation specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.7` | Review | Review specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.8` | Certification | Certification specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.9` | Memory | Memory specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.10` | Governance | Governance specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.11` | Workflow | Workflow specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |
| `A.5.12` | Registry | Registry specialization; no Runtime, Engine Platform, Agent, or Target ownership | A.3, A.4/A.4.1-A.4.7, Governance, Standards | Runtime, Agent Architecture, Operational Core | Draft / non-canonical |


## 11. Agent–Engine Dependency Model

| Agent Domain | Relevant Engine Authority | Relationship | Boundary |
|:---|:---|:---|:---|
| Runtime consumption | A.3, A.4, A.5.1-A.5.12 | Agent consumes engine outputs and contracts | Agent docs cannot redefine engines |
| Workflow | A.5.11 Workflow Engine, A.5.5 Execution Engine | Logical workflow contract consumes engine specialization | No runtime scheduler implementation |
| Validation/review | A.5.6 Validation, A.5.7 Review, A.5.8 Certification | Agent validation contracts consume engine responsibilities | No certification approval authority |
| Identity/registry | A.5.12 Registry, A.4.3 Registry | Agent registry concepts align with engine registry | No storage or platform implementation |
| Governance/lifecycle | A.5.10 Governance, A.4.4 Lifecycle | Agent boundaries consume governance/lifecycle authorities | Human Governance remains final |

## 12. Governance Atlas Findings

Governance needed corrections in layers, authority/ownership matrices, consumes-produces, dependency, classification, decision authority, navigation, reading order, Engine RFC Governance, and Agent Architecture Governance. The alignment addendum adds explicit AGENTS v2 and A.5.0-A.5.12 inventory entries while preserving existing governance lifecycle and Human Governance finality.

## 13. Runtime Navigation Findings

Runtime README previously did not make the full A.5.0-A.5.12 family sufficiently explicit as a navigation inventory. The update distinguishes A.3 Runtime, A.4 Engine Platform, and A.5 specialization ownership and states the Agent Architecture consumption boundary.

## 14. Duplicate Ownership Findings

| Domain | Claiming Documents | Conflict | Resolution |
|:---|:---|:---|:---|
| Agent Architecture current authority | AGENTS v1 draft, AGENTS v2 master/foundation, Governance Atlas stale references | AGENTS v1 appeared as sole current authority in central inventory | Map AGENTS v2 family; mark v1 superseded candidate |
| Agent capability models | AGENTS-v2 master, Capability Maturity Model, Capability Evolution Model | Former planning-named files were realigned as AI-DOS Agent Architecture capability models | Final paths: `AGENTS-v2-Capability-Maturity-Model.md` and `AGENTS-v2-Capability-Evolution-Model.md` |
| Engine specialization inventory | A.5 files, Runtime README, Governance Atlas | A.5 family incompletely discoverable centrally | Explicit A.5.0-A.5.12 inventory added |

## 15. Target Project Contamination Findings

Matches containing Forge AI project paths and project-state artifacts remain in read-only Agent domain documents and report evidence. Because the task forbids editing those bodies, they are recorded for later correction/disposition. No new Target Project truth was added to AI-DOS governance; Target context language in corrections is limited to invocation context/resource boundaries.

## 16. Project-Lifecycle Contamination Findings

| File | ACTIVE PRODUCT VIOLATION | HISTORICAL EVIDENCE | FILE TITLE / DISPOSITION SUBJECT | GENERIC NON-TARGET CONCEPT |
|:---|---:|---:|---:|---:|
| `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md` | 0 | 0 | 1 | 0 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md` | 0 | 0 | 5 | 0 |
| `docs/AI/Architecture/Agents/AGENTS-v1-draft.md` | 0 | 47 | 0 | 0 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md` | 18 | 0 | 0 | 2 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md` | 22 | 0 | 0 | 3 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md` | 33 | 0 | 0 | 13 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md` | 12 | 0 | 0 | 1 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md` | 33 | 0 | 0 | 5 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Runtime-Consumption-Model.md` | 26 | 0 | 0 | 17 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md` | 27 | 0 | 0 | 8 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Workflow-Model.md` | 27 | 0 | 0 | 11 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` | 12 | 0 | 0 | 2 |
| `docs/AI/Architecture/Agents/AGENTS-v2.md` | 27 | 0 | 0 | 5 |
| `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` | 0 | 31 | 0 | 0 |
| `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` | 3 | 0 | 0 | 3 |
| `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md` | 1 | 0 | 0 | 1 |
| `docs/AI/Runtime/A.5.10-Governance-Engine-RFC.md` | 1 | 0 | 0 | 3 |
| `docs/AI/Runtime/A.5.11-Workflow-Engine-RFC.md` | 2 | 0 | 0 | 3 |
| `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` | 2 | 0 | 0 | 3 |
| `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md` | 1 | 0 | 0 | 2 |
| `docs/AI/Runtime/A.5.3-Planning-Engine-RFC.md` | 1 | 0 | 0 | 2 |
| `docs/AI/Runtime/A.5.4-Decision-Engine-RFC.md` | 1 | 0 | 0 | 2 |
| `docs/AI/Runtime/A.5.5-Execution-Engine-RFC.md` | 3 | 0 | 0 | 1 |
| `docs/AI/Runtime/A.5.6-Validation-Engine-RFC.md` | 1 | 0 | 0 | 2 |
| `docs/AI/Runtime/A.5.7-Review-Engine-RFC.md` | 1 | 0 | 0 | 1 |
| `docs/AI/Runtime/A.5.8-Certification-Engine-RFC.md` | 1 | 0 | 0 | 3 |
| `docs/AI/Runtime/A.5.9-Memory-Engine-RFC.md` | 1 | 0 | 0 | 2 |


## 17. Planning-Named Artifact Preliminary Disposition

| File | Actual Role | Naming Fit | Contamination | Preliminary Disposition |
|:---|:---|:---|:---|:---|
| `AGENTS-v2-Capability-Maturity-Model.md` | Agent architecture maturity/readiness authority | Final name removes project-lifecycle wording | Successor path: `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Maturity-Model.md` | REALIGNED |
| `AGENTS-v2-Capability-Evolution-Model.md` | Agent capability dependency/evolution authority | Final name removes project-lifecycle wording | Successor path: `docs/AI/Architecture/Agents/AGENTS-v2-Capability-Evolution-Model.md` | REALIGNED |

## 18. Authority Corrections Applied

| Governance Section | Previous Problem | Correction | Remaining Risk |
|:---|:---|:---|:---|
| Governance Layers | Did not clearly include full AGENTS v2/A.5 map | Added corrected layer map | Original body may still contain legacy phrasing |
| Document Authority Matrix | AGENTS v1 and A.5 mapping incomplete/stale | Added corrected matrix entries | Full replacement deferred |
| Document Ownership Matrix | A.5 and AGENTS v2 family ownership incomplete | Added ownership entries | Original rows may need future consolidation |
| Consumes / Produces Matrix | Runtime/Engine/Agent consumption unclear | Added corrected entries | Future body cleanup needed |
| Dependency Matrix | A.5-to-Agent dependency not explicit | Added corrected dependencies | None blocking |
| Classification Matrix | v1/v2 and A.5 classifications incomplete | Added corrected classifications | None blocking |
| Decision Classification / Authority | Planning artifact and v1 disposition authority unclear | Added decision authority rows | Human Governance still required |
| Repository Navigation / Reading Orders | Missing full reading path | Added corrected reading order | None blocking |
| Engine RFC Governance | A.5.0-A.5.12 not all explicit | Added full A.5 inventory | None blocking |
| Agent Architecture Governance | AGENTS v1 treated too narrowly | Added AGENTS v2 family map | v1 disposition remains open |

## 19. Remaining Correction Requirements

- Human Governance disposition complete: former planning-named Agent artifacts are realigned as Agent architecture capability models.
- Later correction must remove or reclassify read-only Agent domain references to ProjectStatus, DevelopmentPhases, Roadmap, and Forge AI paths.
- Later Runtime/A.5 contamination correction should review generic lifecycle language versus Target lifecycle contamination, without editing A.5 bodies in this task.

## Information Preservation Metrics

| Document | Headings Before | Headings After | Mermaid Before | Mermaid After | Table Lines Before | Table Lines After | Total Lines Before | Total Lines After |
|:---|---:|---:|---:|---:|---:|---:|---:|---:|
| `docs/AI/GOVERNANCE.md` | 68 | 79 | 11 | 11 | 254 | 315 | 1029 | 1127 |
| `docs/AI/Architecture/Agents/AGENTS-v2.md` | 27 | 28 | 5 | 5 | 71 | 71 | 423 | 428 |
| `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` | 20 | 21 | 0 | 0 | 44 | 44 | 399 | 404 |
| `docs/AI/Runtime/README.md` | 22 | 23 | 0 | 0 | 98 | 113 | 315 | 336 |

## 20. Risks and Blockers

- The Governance Atlas now contains an addendum rather than a fully rewritten integrated matrix; this preserves information but leaves possible duplicate legacy phrasing.
- Planning-named artifacts can still be misread until Human Governance resolves naming/location.
- A.5 RFC bodies still contain project-lifecycle strings because this task explicitly prohibited editing them.

## 21. Final Verdict

AI-DOS AGENT + ENGINE AUTHORITY INVENTORY ALIGNMENT COMPLETE

## 22. Exactly One Recommended Next Step

FORGE-AI.V2.AGENTS-V2-PLANNING-ARTIFACTS-DISPOSITION-001
— RESOLVE THE OWNERSHIP, NAMING, AND LOCATION OF AGENTS V2 PLANNING-NAMED ARTIFACTS

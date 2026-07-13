# AI-DOS AGENTS v2 Capability Artifacts Realignment Report v1

## 1. Metadata

| Field | Value |
|:---|:---|
| Identifier | AI-DOS-AGENTS-V2-CAPABILITY-ARTIFACTS-REALIGNMENT-V1 |
| Task | FORGE-AI.V2.AGENTS-V2-PLANNING-ARTIFACTS-DISPOSITION-001 |
| Owner | AI-DOS Agent Architecture |
| Classification | Execution Report |
| Date | 2026-07-13 |
| Scope | Rename and realign two AGENTS v2 planning-named artifacts as reusable Agent capability models. |

## 2. Executive Summary

The former planning-named AGENTS v2 artifacts were renamed in place under `docs/AI/Architecture/Agents/` and refactored into distinct AI-DOS Agent Architecture capability models. Active references were migrated to final paths while historical evidence was preserved with successor-path disposition notes.

## 3. Governing Evidence

This execution follows `docs/AI/Architecture/Reports/AI-DOS-Agent-Engine-Authority-Inventory-Alignment-v1.md`, Human Governance task direction, the AGENTS v2 family master, the AGENTS v2 architecture foundation, and the Forge AI Target Project contract.

## 4. Previous Artifact Roles

| Previous Artifact | Previous Role | Disposition |
|:---|:---|:---|
| `AGENTS-V2-DevelopmentPhases.md` | Agent capability-evolution sequencing / maturity-oriented artifact with project-lifecycle naming. | Renamed and refactored as maturity/readiness authority. |
| `AGENTS-V2-Roadmap.md` | Agent architecture evolution-direction artifact with project-lifecycle naming. | Renamed and refactored as dependency/evolution authority. |

## 5. Final Artifact Roles

### Final Role Matrix

| Final Artifact | Owned Domain | Must Consume | Must Not Own |
|:---|:---|:---|:---|
| `AGENTS-v2-Capability-Maturity-Model.md` | Maturity states, readiness criteria, evidence requirements, acceptance boundaries, capability availability, deferred activation boundaries. | AGENTS v2 master, architecture foundation, Agent domain authorities, A.3 Runtime, A.4 Engine Platform, applicable A.5 specializations. | Target Project planning, Target Project lifecycle, ProjectStatus, implementation schedule, Runtime or Engine redefinition, Operational Core activation. |
| `AGENTS-v2-Capability-Evolution-Model.md` | Capability dependencies, architecture progression, prerequisites, unlock relationships, deferred capability relationships, evidence gates. | AGENTS v2 master, architecture foundation, Agent domain authorities, maturity/readiness evidence, A.3 Runtime, A.4 Engine Platform, applicable A.5 specializations. | Target Project roadmap, active queue, implementation sequence, delivery timing, Runtime or Engine redefinition, Operational Core activation. |

## 6. Final Naming Decision

`AGENTS-v2-` prefix normalization was applied. No compatibility copies remain at the old paths.

## 7. Capability Maturity Boundary

The Maturity Model answers how mature reusable AGENTS v2 architecture is and what evidence is required to recognize each next maturity condition. It does not answer what project work happens next.

## 8. Capability Evolution Boundary

The Evolution Model answers how reusable AGENTS v2 capabilities depend on and unlock one another. It does not answer when a capability is delivered or what task executes next.

## 9. Overlap Resolution

### Content Allocation Matrix

| Concept | Maturity Model | Evolution Model | Other Authority |
|:---|:---|:---|:---|
| Architecture states | Owns maturity and readiness state recognition. | References only through accepted prerequisites. | AGENTS v2 foundation owns architecture definitions. |
| Evidence requirements | Owns evidence required for readiness acceptance. | Uses evidence gates for dependency progression. | Validation and review model owns review mechanics. |
| Capability dependencies | References only when needed for readiness boundaries. | Owns dependency progression and unlock relationships. | Domain authorities own domain definitions. |
| Deferred activation | Owns readiness and acceptance boundary. | Owns deferred capability relationship and evidence gate. | Runtime/Engine own activation mechanics. |
| Agent lifecycle architecture | References reusable Agent lifecycle authority only. | References as prerequisite where applicable. | Lifecycle and Governance Boundaries owns lifecycle architecture. |

## 10. Metadata Corrections

Both artifacts now identify AI-DOS Agent Architecture ownership, capability-model classification, reusable AGENTS v2 scope, out-of-scope Target planning and Runtime/Engine redefinition, Human Governance/AI-DOS Governance authority, and Runtime/Engine dependencies.

## 11. Reference Migration

### Reference Migration Matrix

| Referencing File | Old Reference | New Reference | Classification |
|:---|:---|:---|:---|
| `docs/AI/Architecture/Agents/README.md` | Both old filenames and pending-disposition wording. | Final capability model names and family inventory entries. | ACTIVE REFERENCE — UPDATE |
| `docs/AI/Architecture/Agents/AGENTS-v2.md` | Related specifications and family overview rows. | Final capability model names and distinct role rows. | ACTIVE REFERENCE — UPDATE |
| `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` | Normative references to old filenames. | Final capability model references and subordinate-model note. | ACTIVE REFERENCE — UPDATE |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-*.md` | Normative references to old filenames. | Final capability model references. | ACTIVE REFERENCE — UPDATE |
| `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` | Review-time artifact references. | Active navigation updated; historical disposition note added. | HISTORICAL EVIDENCE — PRESERVE AS HISTORICAL TEXT |
| `docs/AI/Architecture/Reports/AI-DOS-Agent-Engine-Authority-Inventory-Alignment-v1.md` | Candidate disposition and final-path portions. | Final role and successor-path wording. | ACTIVE REFERENCE — UPDATE |

## 12. Governance Integration

Governance Atlas integration replaced unresolved planning-named-artifact language with final maturity/readiness and capability dependency/evolution authority roles. No broader atlas consolidation was performed.

## 13. Agent Family Integration

The Agent family index and master now include the Capability Maturity Model and Capability Evolution Model as subordinate capability models after the domain authorities and before reports-as-evidence.

## 14. Target Project Contamination Validation

### Contamination Validation Matrix

| Artifact | Prohibited Match | Context | Result |
|:---|:---|:---|:---|
| Maturity Model | Target Project planning/lifecycle and project-state terms. | Explicitly listed only in Out of Scope or prohibition boundaries. | PASS — no active product violation. |
| Evolution Model | Target Project planning/lifecycle and project-state terms. | Explicitly listed only in Out of Scope or prohibition boundaries. | PASS — no active product violation. |

## 15. Project-Lifecycle Isolation Validation

The final artifacts use maturity, readiness, capability condition, prerequisite, unlock condition, evolution boundary, deferred capability, and evidence gate vocabulary. They do not own project phases, project stages, schedules, queues, or live project state.

## 16. Information Preservation

### Information Preservation Matrix

| Artifact | Unique Concepts Before | Preserved | Relocated | Removed |
|:---|:---|:---|:---|:---|
| Maturity Model | Foundation, collaboration, coordination, planning, execution, merge, swarm, enterprise; architecture/capability/lifecycle/communication/validation/workflow/runtime/coordination concepts. | Preserved as maturity states and capability availability. | Dependency details cross-referenced to Evolution Model. | Planning-oriented title and active schedule wording. |
| Evolution Model | Human Governance, repository bootloader, Agent architecture, Runtime consumption, coordinator, planning, execution, merge, swarm, enterprise progression. | Preserved as capability evolution chain and dependency matrix. | Readiness criteria cross-referenced to Maturity Model. | Roadmap title and delivery-oriented vocabulary. |

Information preservation metrics:

| Artifact | Headings Before | Headings After | Mermaid Blocks Before | Mermaid Blocks After | Table Lines Before | Table Lines After | Total Lines Before | Total Lines After | Unique Concepts Preserved | Unique Concepts Relocated | Unique Concepts Removed |
|:---|---:|---:|---:|---:|---:|---:|---:|---:|:---|:---|:---|
| Maturity Model | 10 | 8 | 0 | 0 | 29 | 54 | 76 | 100 | Foundation through enterprise maturity; domain capability availability. | Dependency sequencing to Evolution Model. | Project-lifecycle labels only. |
| Evolution Model | 5 | 8 | 0 | 0 | 29 | 48 | 92 | 116 | Governance-to-enterprise progression; capability group concepts. | Readiness criteria to Maturity Model. | Roadmap/delivery labels only. |

## 17. Validation Results

Validation commands were run after edits and before commit. Final results are recorded in the task completion response.

## 18. Risks and Blockers

No blockers remain. Risk: broader AGENTS v2 master and historical inventory documents still contain known pre-existing lifecycle-contamination topics outside this task's permitted correction scope.

## 19. Final Verdict

AI-DOS AGENTS V2 CAPABILITY ARTIFACTS REALIGNMENT COMPLETE

## 20. Exactly One Recommended Next Step

FORGE-AI.V2.RUNTIME-A5-CONTAMINATION-CORRECTION-001
— REMOVE TARGET PROJECT AND PROJECT-LIFECYCLE CONTAMINATION FROM THE A.5 ENGINE RFC FAMILY

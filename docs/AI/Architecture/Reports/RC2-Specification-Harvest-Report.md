# RC2 Specification Harvest Report

## 1. Status

Status: Documentation-only audit / harvest report  
Project: AI-DOS  
Document Type: RC2 Specification Harvest Report  
Scope: `docs/AI/Specification/` only  
Created: 2026-07-07  
Governing Input: `docs/AI/Architecture/Reports/RC2-Specification-Legacy-Migration-Plan.md`  
Move Status: No move performed  
Project Status Update: Not performed

Final readiness status: **NOT READY TO MOVE**.

The RC2 Specification directory still contains runtime and terminology content that is not fully represented in v3 target documents. The directory must remain in place until the harvest blockers in this report are resolved or explicitly waived through governance.

## 2. Scope

### 2.1 In Scope

This report inspects the following RC2 Specification files:

- `docs/AI/Specification/Constitution.md`
- `docs/AI/Specification/FrameworkSpecification.md`
- `docs/AI/Specification/GovernanceModel.md`
- `docs/AI/Specification/ReferenceArchitecture.md`
- `docs/AI/Specification/RuntimeModel.md`
- `docs/AI/Specification/Terminology.md`

This report compares those files against the following v3 target or transitional target documents:

- `docs/AI/Architecture/A.1-Constitution.md`
- `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`

### 2.2 Out of Scope

This report does not:

- move files;
- rename files;
- delete files;
- rewrite active links;
- update `docs/ProjectStatus.md`;
- certify any v3 document as canonical authority;
- replace RC2 operational procedures;
- perform the actual migration to `docs/AI/Legacy/RC2/Specification/`.

## 3. Source Inventory

| RC2 Specification file | RC2 role | Primary content areas | Harvest classification |
| --- | --- | --- | --- |
| `docs/AI/Specification/Constitution.md` | RC2 framework constitution | Purpose, vision, mission, objectives, audience, scope, foundational philosophy, core principles, constitutional invariants, relationship to RC2 modules. | Covered by v3; partially covered by v3; legacy authority mapping still active. |
| `docs/AI/Specification/FrameworkSpecification.md` | RC2 core framework specification | Core architecture, planning model, project state, workflow engine, command system, template system, review, validation, documentation, state management, orchestration. | Partially covered by v3; requires future Workflow Standard; requires future Governance/Certification Standard. |
| `docs/AI/Specification/GovernanceModel.md` | RC2 governance specification | Governance philosophy, hierarchy, human authority, decision classification, ownership governance, quality gates, certification, escalation, compliance, evolution, invariants. | Partially covered by v3; requires future Governance/Certification Standard. |
| `docs/AI/Specification/ReferenceArchitecture.md` | RC2 reference architecture | High-level architecture, logical layers, information flow, authority flow, adapter model,AI-DOS adapter position, extension readiness, roadmap, principles. | Partially covered by v3; requires future Runtime Architecture for runtime-layer material; adapter material requires future adapter standard. |
| `docs/AI/Specification/RuntimeModel.md` | RC2 runtime specification | Runtime philosophy, agent lifecycle, runtime layers, context management, memory strategy, multi-agent coordination, conflict resolution, swarm coordination, runtime communication, runtime invariants. | Partially covered by v3; requires future Runtime Architecture; requires future Workflow Standard for execution lifecycle details. |
| `docs/AI/Specification/Terminology.md` | RC2 terminology specification | Canonical definitions, state terms, planning terms, command/workflow/template terms, framework terms. | Partially covered by v3; requires future Glossary/Terminology Standard. |

## 4. v3 Target Inventory

| v3 target document | Current target role | RC2 coverage contribution | Limitations |
| --- | --- | --- | --- |
| `docs/AI/Architecture/A.1-Constitution.md` | v3 constitutional candidate | Strong coverage for mission, authority, scope, principles, human authority, framework authority, evolution, compliance, amendment, and certification principles. | Does not fully replace operational RC2 references until promoted through governance. Does not house detailed runtime or terminology coverage. |
| `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` | Transitional blueprint RFC / planning input | Covers v3 vision, layered architecture, governance, meta model, standards, knowledge graph, artifact, registry, workflow, runtime, AI agent, swarm, validation, enterprise governance, roadmap, risks, and open decisions. | RFC is non-canonical until ratified. Runtime, agent, swarm, workflow, and governance layers are high-level and not sufficient replacements for RC2 runtime details. |
| `docs/AI/Meta/M.0-Framework-Meta-Model.md` | v3 framework meta-model candidate | Covers artifacts, entities, relationships, identity, lifecycle, state, authority, ownership, evidence, validation, review, certification, references, derivation, governance, compliance, anti-patterns. | Does not provide a complete RC2 glossary or operational runtime model. |
| `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | v3 artifact meta-model candidate | Covers artifact identity, lifecycle, anatomy, ownership, metadata, relationships, validation, projection, serialization, registry, extension, compliance, and a glossary appendix. | Focused on artifact modeling; not a full framework glossary or runtime/agent/swarm model. |
| `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | v3 standards foundation candidate | Covers standards philosophy, classification, lifecycle, identity, structure, relationships, governance, validation, certification, migration, references, glossary, AI consumption rules. | It is a standards foundation, not a specific workflow, runtime, governance/certification, adapter, or terminology standard. |

## 5. Harvest Coverage Matrix

| RC2 file | Covered by v3 | Partially covered by v3 | Not covered by v3 | Operational only | Legacy only | Requires future Runtime Architecture | Requires future Workflow Standard | Requires future Governance/Certification Standard | Requires future Glossary/Terminology Standard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Constitution.md` | Mission, architecture-before-code, documentation-before-implementation, human authority, constitutional principles, invariants. | RC2 authority references and relationship to RC2 modules remain transitional. | None material, subject to final constitutional alignment review. | No. | RC2 status blocks and RC2 module relationship details. | No. | No. | Certification principles are covered at constitutional level but detailed criteria belong in future standard. | Some terms appear but glossary-level definitions are elsewhere. |
| `FrameworkSpecification.md` | Subsystem framing, planning hierarchy, state, validation, review, certification concepts. | Workflow engine, command system, template system, review outcomes, state transitions, orchestration. | Full command/workflow/template standards are not yet present as v3 standards. | Some details remain active operational compatibility inputs. | RC2-specific specification map and status metadata. | No, except orchestration/runtime boundaries. | Yes. | Yes. | Some subsystem terms need glossary alignment. |
| `GovernanceModel.md` | Human authority, ownership, compliance, validation/certification concepts, governance evolution principles. | Decision classification, quality gate outcomes, escalation model, detailed certification criteria. | A dedicated v3 governance/certification standard is not yet present. | No. | RC2-specific governance status and hierarchy references. | No. | No. | Yes. | Governance vocabulary requires glossary alignment. |
| `ReferenceArchitecture.md` | Layered architecture, authority flow, information flow, adapter-consumer rule, extension roadmap. | Runtime layer, framework integration layer, adapter examples, roadmap generations. | Dedicated v3 adapter standard and detailed v3 reference architecture are not yet present. | No. | Stale or RC2-specific examples and status metadata. | Yes, for runtime-layer material. | Possible for information/execution flow. | No. | Adapter and architecture terms require glossary alignment. |
| `RuntimeModel.md` | High-level runtime, AI agent, swarm, workflow, and data flow are acknowledged in the Blueprint RFC. Context/state/evidence concepts are partially covered by M.0/M.1. | Agent lifecycle, runtime layers, context management, memory strategy, multi-agent coordination, conflict resolution, swarm lifecycle, runtime communication. | No complete v3 runtime architecture, agent runtime standard, multi-agent standard, or swarm standard exists in the inspected target set. | Some content informs active orchestration behavior. | RC2 status metadata only. | Yes. | Yes, for lifecycle/execution sequence and coordination workflow. | Possible for conflict resolution/certification handoffs. | Runtime vocabulary needs glossary alignment. |
| `Terminology.md` | Many individual concepts appear in A.1, M.0, M.1, STD-000, and the Blueprint RFC. | Canonical definitions, state taxonomy, planning sequence, command/workflow/template terms, framework terms. | No dedicated v3 glossary/terminology standard exists in the inspected target set. | No. | RC2 status metadata only. | No. | No, except workflow terms. | No, except certification/governance terms. | Yes. |

## 6. Concepts Already Covered by v3

The following RC2 concepts are sufficiently represented in the inspected v3 target set for harvest purposes, subject to final governance promotion:

1. **Framework mission and vision** — v3 Constitution and Blueprint cover platform-independent, documentation-driven AI development and a long-term architecture for AI-assisted engineering.
2. **Architecture before implementation** — v3 constitutional and standards documents preserve architecture-first and documentation-first constraints.
3. **Human authority and governance supremacy** — v3 Constitution, M.0, M.1, and STD-000 cover authority, ownership, delegation, conflict resolution, compliance, and prohibited authority drift.
4. **Artifact identity and lifecycle** — M.0 and M.1 provide stronger v3 coverage than RC2 for identity, lifecycle, metadata, relationships, validation, registry, projection, extension, and compliance.
5. **Evidence, validation, review, and certification as distinct concepts** — M.0, M.1, and STD-000 cover evidence-supported truth, validation, review, certification, certification records, and compliance levels.
6. **Standards governance and migration discipline** — STD-000 covers standards lifecycle, identity, structure, governance, validation, certification, versioning, migration, references, decision records, and AI consumption rules.
7. **Layered architecture direction** — the Blueprint RFC covers governance, meta model, standards, knowledge graph, artifact, registry, workflow, runtime, AI agent, swarm, validation/certification, and enterprise governance layers at a target architecture level.
8. **Platform independence and adapter-consumer rule** — A.1 and the Blueprint RFC preserve the principle that platform adapters consumeAI-DOS and must not redefine it.
9. **State, authority, ownership, reference, and relationship primitives** — M.0 covers these as meta-model concepts and M.1 specializes them for artifacts.
10. **Migration caution** — STD-000 and the legacy migration plan both support controlled migration, compatibility strategy, deprecation discipline, and explicit migration plans.

## 7. Concepts Not Yet Covered by v3

The following RC2 concepts are not yet fully represented in the inspected v3 target set and must be harvested, mapped, or waived before moving `docs/AI/Specification/`:

1. **Complete runtime architecture** from `RuntimeModel.md`:
   - runtime philosophy;
   - agent lifecycle;
   - runtime layer responsibilities;
   - context assembly and context limits;
   - memory strategy;
   - multi-agent coordination;
   - conflict resolution;
   - swarm lifecycle;
   - runtime communication;
   - runtime invariants.
2. **Complete terminology standard** from `Terminology.md`:
   - canonical definitions;
   - state taxonomy;
   - planning terms;
   - command, workflow, and template terms;
   - framework terms.
3. **Workflow/command/template standardization** from `FrameworkSpecification.md`:
   - workflow engine lifecycle;
   - workflow invariants;
   - command boundaries;
   - command invariants;
   - template contract model;
   - orchestration relationship.
4. **Dedicated governance/certification standard content** from `GovernanceModel.md`:
   - decision classification;
   - quality gate ordering and outcomes;
   - gate ownership;
   - certification criteria;
   - escalation model;
   - compliance handling;
   - governance evolution constraints.
5. **Adapter and reference architecture details** from `ReferenceArchitecture.md`:
   - framework integration layer;
   - adapter contract expectations;
   - future adapter examples;
   - generation roadmap details;
   - reference architecture diagrams/flows needing v3 destination.
6. **Operational compatibility references** across active RC2 documents are not resolved by this harvest report and remain a migration blocker for any actual move.

## 8. Harvest Blockers

The following blockers prevent moving `docs/AI/Specification/` to `docs/AI/Legacy/RC2/Specification/` now:

1. **Runtime blocker:** `RuntimeModel.md` contains significant runtime, context, memory, multi-agent, and swarm content without a complete v3 runtime architecture replacement.
2. **Terminology blocker:** `Terminology.md` remains the only compact canonical RC2 vocabulary source and has no dedicated v3 glossary/terminology standard replacement.
3. **Workflow blocker:** `FrameworkSpecification.md` contains workflow, command, template, and orchestration boundaries that are only partially represented in v3 target documents.
4. **Governance/certification blocker:** `GovernanceModel.md` contains quality gate, certification, escalation, decision classification, and compliance details that need a dedicated v3 governance/certification target.
5. **Adapter blocker:** `ReferenceArchitecture.md` contains adapter and framework integration concepts that need a future v3 adapter/reference architecture destination.
6. **Authority blocker:** RC2 remains the operational compatibility layer until approved v3 operational replacements exist and are explicitly promoted.
7. **Link blocker:** Active documents still reference `docs/AI/Specification/`; moving the directory without reference remediation would break boot, validation, certification, template, and operational guidance paths.

## 9. Recommended Harvest Actions

Before any actual move, perform these actions in order:

1. **Create or designate a v3 Runtime Architecture target** for the runtime lifecycle, context, memory, agent, multi-agent, swarm, communication, conflict resolution, and runtime invariant content from `RuntimeModel.md`.
2. **Create or designate a v3 Glossary/Terminology Standard** and reconcile all `Terminology.md` definitions against A.1, M.0, M.1, STD-000, and the Blueprint RFC.
3. **Create future v3 Workflow, Command, and Template standards** or a combined Workflow System standard to absorb the workflow engine, command boundaries, command invariants, template contracts, and orchestration interfaces from `FrameworkSpecification.md`.
4. **Create future v3 Governance/Certification Standard** to absorb decision classification, quality gates, gate outcomes, gate ownership, certification criteria, escalation, compliance, and governance evolution details from `GovernanceModel.md`.
5. **Create future v3 Adapter/Reference Architecture Standard** to absorb framework integration, adapter constraints, adapter examples, and architecture flow content from `ReferenceArchitecture.md`.
6. **Prepare a reference rewrite plan** for every active link to `docs/AI/Specification/`, classifying each target as v3 replacement, legacy reference, temporary compatibility shim, or obsolete reference.
7. **Produce a harvest completion report** after the target documents are created or updated, listing each RC2 source section and its v3 destination or waiver.
8. **Only after harvest completion and link remediation, perform the legacy move** to `docs/AI/Legacy/RC2/Specification/` through an explicit migration task.

## 10. Waiver Candidates

The following items may be candidates for explicit governance waiver if the project decides not to preserve them in v3:

| Candidate | Source | Waiver rationale | Risk if waived |
| --- | --- | --- | --- |
| RC2 status metadata and release-candidate labels | All RC2 Specification files | Historical metadata can remain only in legacy records after move. | Low, if preserved in legacy files. |
| RC2-specific module relationship language | `Constitution.md` | v3 document relationships differ from RC2 module relationships. | Low to medium; waive only after v3 authority references are clear. |
| Stale implementation/path examples | `ReferenceArchitecture.md` | Some examples are historical and may not match current repository naming. | Low, provided current adapter principles are harvested. |
| Roadmap generation labels | `ReferenceArchitecture.md` | v3 roadmap may use different phase names and architecture sequencing. | Medium; preserve concepts if not exact labels. |
| Duplicate definitions already stronger in M.0/M.1/STD-000 | `Terminology.md`, `GovernanceModel.md`, `FrameworkSpecification.md` | Duplicates can be waived if v3 definitions are explicitly identified as authoritative replacements. | Medium; avoid waiving terms that still lack a glossary destination. |
| RC2 wording that conflicts with approved v3 terminology | All RC2 Specification files | v3 terminology should supersede conflicting RC2 terms after governance promotion. | Medium; requires explicit mapping to avoid silent semantic drift. |

No waiver should be applied implicitly. Each waiver must identify the source section, reason, approving authority, and target record.

## 11. Final Verdict

**NOT READY TO MOVE.**

The inspected v3 documents cover much of the RC2 constitutional, meta-model, artifact, standards, validation, review, certification, migration, and high-level architecture material. However, the RC2 Specification directory still contains important material that has not been fully harvested into v3:

- `RuntimeModel.md` remains a major source for runtime, context, memory, multi-agent, and swarm architecture.
- `Terminology.md` remains a major source for canonical vocabulary and state/planning/workflow terminology.
- `FrameworkSpecification.md` still contains workflow, command, template, state transition, and orchestration concepts needing v3 standards destinations.
- `GovernanceModel.md` still contains quality gate, certification, escalation, and decision classification details needing a v3 governance/certification standard.
- `ReferenceArchitecture.md` still contains adapter and integration model details needing a v3 adapter/reference architecture target.

Therefore, `docs/AI/Specification/` must remain in place until the recommended harvest actions are complete or explicitly waived through governance. Moving it now would risk losing active RC2 operational compatibility and unharvested architectural content.

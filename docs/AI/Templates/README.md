# AI Templates Library

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-OP-TEMPLATES` |
| Title | AI Templates Library |
| Version | 2.1.0-draft |
| Status | Draft |
| Canonical Status | Canonical Template Library entry point for navigation; not a replacement for template standards, governance authority, or Human Governance approval |
| Classification | Template Library Index |
| Document Type | Directory README / Template Library Navigation Index |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | FORGE-AI.V2.OP-TEMPLATES |
| Scope | Template Library purpose, navigation, family map, ownership routing, selection principles, usage workflow, lifecycle expectations, alignment rules, validation expectations, and cross-reference routing |
| Out of Scope | Template standard definitions, metadata standard definitions, placeholder schema definitions, governance policy, Runtime authority, Engine authority, ProjectStatus authority, template family specifications, implementation logic, generated artifacts, certification, and promotion decisions |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` |
| Dependencies | Template standards, document metadata standard, Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, and family-local README/index documents where present |
| Consumes | Active task instruction, repository boot sequence, template standards, document metadata standard, family-local template inventories, and domain authority routing |
| Produces | Canonical Template Library navigation entry point, family directory map, selection guidance, validation routing, alignment rules, extension rules, and cross-reference index |
| Related Specifications | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Supersedes | `docs/AI/Templates/README.md` version 2.0.0-draft |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, Human Governance approval, Template Library family map validation, cross-reference validation, and STD-010 metadata validation |
| Certification Status | Not certified |

---

## 1. Purpose

This README is the canonical entry point and navigation document for the Forge AI Template Library.

It helps contributors and reviewers locate template families, select the correct template starting point, understand how template standards apply, and route validation through the appropriate authority documents. It is not itself a reusable template, template specification, metadata specification, governance policy, runtime specification, engine specification, or ProjectStatus authority.

## 2. Library Scope

The Template Library contains reusable Markdown template assets and family indexes used to produce governed Forge AI planning, architecture, runtime, operational, integration, migration, project, validation, and related documentation artifacts.

This README covers library-level navigation only:

- what template families exist;
- where each family lives;
- how the library relates to template and metadata standards;
- how to select a template without bypassing domain authority;
- how produced documents should consume existing authorities;
- how validation should be routed before review or promotion.

Template-specific structure, placeholders, required sections, and produced-document details remain in the individual templates and applicable template standards.

## 3. Navigation Role and Authority Boundary

This README consumes existing authorities and routes users to them. It does not redefine them.

| Boundary | Library Position |
|:---|:---|
| Template standards | Routed to TPL-000 and, for RFC-style templates only, TPL-001. |
| Document metadata | Routed to STD-010. |
| Repository boot sequence | Routed to `AGENTS.md`. |
| Governance decisions | Routed to `docs/FrameworkGovernance.md` and Human Governance. |
| Repository governance navigation | Routed to `docs/AI/GOVERNANCE.md`. |
| Operational state and roadmap order | Routed to ProjectStatus and DevelopmentPhases. |
| Runtime and Engine authority | Routed to the applicable Runtime and Architecture authority documents. |
| Template family content | Owned by the applicable family files and family-local README/index documents where present. |

## 4. Relationship to TPL-000

`docs/AI/Templates/Standards/TPL-000-Template-Standard.md` is the baseline template standard for reusable Forge AI templates. This README uses TPL-000 as the library-level routing authority for template classification, template placeholder expectations, produced-document guidance, and validation expectations.

This README does not restate the TPL-000 schema or convert navigation guidance into template requirements. Template authors and reviewers must read TPL-000 directly when creating, aligning, or validating reusable templates.

## 5. Relationship to TPL-001

`docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` applies to RFC-style templates only.

This README routes RFC-style template questions to TPL-001 and does not apply TPL-001 to non-RFC template families. A template family must not inherit RFC-specific requirements from this README unless a family template is explicitly RFC-style or another governing authority requires TPL-001.

## 6. Relationship to STD-010

`docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` is the metadata authority for governed Markdown documents.

This README includes a STD-010-aligned metadata block because it is a governed Markdown document. It also routes templates and produced documents to STD-010 without redefining metadata fields, metadata semantics, lifecycle rules, conditional fields, or validation policy.

## 7. Relationship to AGENTS.md

`AGENTS.md` is the repository bootloader for AI assistants and task execution participants.

Use `AGENTS.md` before applying this README during AI-assisted work. The bootloader determines required authority discovery, task classification, roadmap boundaries, frozen-area checks, validation routing, and completion reporting. This README begins only after the active task has been classified as Template Library navigation, template-family usage, or template alignment work within the allowed scope.

## 8. Relationship to Framework Governance

`docs/FrameworkGovernance.md` remains the authority for governance decision policy, including review routing, approval routing, conflict handling, promotion requirements, and ownership interpretation.

This README may identify typical ownership routes for template families, but it does not approve, certify, promote, canonicalize, or resolve authority conflicts. Human Governance remains final.

## 9. Template Family Overview

| Family | Directory | Navigation Purpose |
|:---|:---|:---|
| Agents | `docs/AI/Templates/Agents/` | Agent-facing document templates and agent workflow artifacts. |
| Architecture | `docs/AI/Templates/Architecture/` | Architecture documentation templates and architecture-facing scaffolds. |
| Context | `docs/AI/Templates/Context/` | Context capture, context transfer, and context traceability templates. |
| Core | `docs/AI/Templates/Core/` | Foundational operational templates used by the library. |
| Integration | `docs/AI/Templates/Integration/` | Integration contract and integration-alignment templates. |
| Knowledge | `docs/AI/Templates/Knowledge/` | Knowledge capture, retrieval, and knowledge organization templates. |
| Memory | `docs/AI/Templates/Memory/` | Memory-related documentation templates and memory boundary artifacts. |
| Migration | `docs/AI/Templates/Migration/` | Migration, compatibility, deprecation, and migration reporting templates. |
| MultiAgent | `docs/AI/Templates/MultiAgent/` | Multi-agent planning and coordination templates for governed future scope. |
| Planning | `docs/AI/Templates/Planning/` | Vision, roadmap, phase, stage, and historical capability templates. |
| Platform | `docs/AI/Templates/Platform/` | Platform adapter description, boundary, capability, and validation templates. |
| Project | `docs/AI/Templates/Project/` | Project documentation contract templates and project template selection guidance. |
| Runtime | `docs/AI/Templates/Runtime/` | Runtime-facing documentation templates and runtime alignment artifacts. |
| Standards | `docs/AI/Templates/Standards/` | Template standards consumed by the library, including TPL-000 and TPL-001. |
| Swarm | `docs/AI/Templates/Swarm/` | Swarm-related planning templates for governed future scope. |
| Validation | `docs/AI/Templates/Validation/` | Validation, review, and evidence templates. |
| Workflow | `docs/AI/Templates/Workflow/` | Workflow and operational process templates. |

## 10. Template Family Ownership Model

Template family ownership is inherited from family-local metadata, domain authority documents, and Framework Governance interpretation. This README provides routing consistency only.

| Ownership Layer | Applies To | Routing Rule |
|:---|:---|:---|
| Human Governance | Approval, promotion, certification, and final conflict resolution. | Escalate decisions that affect approval, canonicalization, certification, or authority boundaries. |
| Framework Governance | Review policy, ownership interpretation, and governance conflict handling. | Use `docs/FrameworkGovernance.md` when ownership, review, or promotion policy is relevant. |
| Template Standards | Template shape, reusable template alignment, RFC-template alignment, and placeholder expectations. | Use TPL-000 for reusable templates and TPL-001 only for RFC-style templates. |
| Document Metadata Standard | Governed Markdown metadata expectations. | Use STD-010 for metadata validation. |
| Family-Local Metadata | Family-specific owner, maintainer, review authority, and approval authority values. | Preserve the owner and purpose declared by the family documents. |
| This README | Library navigation, directory map, and selection routing. | Do not treat this README as authority to rewrite family ownership or domain authority. |

## 11. Template Selection Principles

Use the narrowest template that matches the intended produced document.

1. Start with `AGENTS.md` and confirm the active task scope.
2. Identify the domain authority for the intended document.
3. Select the matching template family from the overview table.
4. Prefer a family-local README or selection guide when one exists.
5. Use the most specific template in that family before falling back to a generic template.
6. Apply TPL-001 only when the selected template is RFC-style.
7. Validate the produced document against STD-010, TPL-000, and any family-specific instructions.
8. Escalate if the selected template appears to create authority, implementation scope, certification, registry behavior, runtime behavior, or ProjectStatus changes that are not authorized by the active task.

## 12. Produced-Document Philosophy

Templates produce documentation contracts, planning artifacts, review artifacts, or navigation artifacts. Produced documents should consume existing authorities, preserve traceability, and make scope boundaries explicit.

A produced document must not gain authority merely because it was generated from a template. Authority depends on the governing documents, declared review route, approval route, lifecycle state, and Human Governance decisions applicable to the produced document.

## 13. Placeholder Philosophy

Placeholders are authoring aids that make template substitution explicit and reviewable.

Library-level placeholder expectations are routed to TPL-000. This README does not define placeholder schemas, required placeholder names, default values, or placeholder validation rules. Individual templates and standards remain responsible for declaring and validating their own placeholder manifests.

## 14. Template Lifecycle

Template lifecycle handling is governed by the applicable template standards, family-local metadata, Framework Governance, and Human Governance.

At the library navigation level, templates generally move through these review states:

1. Draft or alignment work is proposed within an approved task scope.
2. The applicable family files are updated in place without creating parallel templates unless explicitly authorized.
3. Metadata, placeholder manifests, authority boundaries, and cross-references are validated.
4. Framework Governance reviews alignment and ownership implications where required.
5. Human Governance approves promotion, certification, or canonicalization decisions where required.

This README records navigation state only and does not promote or certify templates.

## 15. Alignment Rules

Template Library alignment work must preserve the following rules:

- modify only files in the approved task scope;
- preserve existing template purpose and ownership unless Human Governance directs otherwise;
- consume TPL-000, TPL-001, STD-010, Governance Atlas, Framework Governance, ProjectStatus, DevelopmentPhases, and domain authorities without redefining them;
- avoid duplicate governance, runtime, engine, registry, certification, review, implementation, roadmap, or ProjectStatus authority;
- avoid template-family rewrites that introduce implementation behavior, execution behavior, deployment behavior, code generation behavior, runtime conversion, or automated status updates;
- update family README/index files only when they already exist and are inside the approved task scope;
- validate changed Markdown for metadata coverage, placeholder integrity where applicable, cross-reference correctness, empty table cells, and diff integrity.

## 16. Extension Rules

New template families, new templates, or structural extensions require explicit task authorization and must follow the repository boot sequence.

Extensions must:

- prove that no existing template already covers the intended purpose;
- identify the applicable domain authority and owner;
- comply with TPL-000 and STD-010;
- comply with TPL-001 only when RFC-style;
- avoid creating duplicate family authority;
- update this README only when the approved scope includes Template Library navigation;
- avoid implementation, runtime, registry, certification, or ProjectStatus side effects.

## 17. Family Directory Map

```text
docs/AI/Templates/
├── Agents/
├── Architecture/
├── Context/
├── Core/
├── Integration/
├── Knowledge/
├── Memory/
├── Migration/
├── MultiAgent/
├── Planning/
├── Platform/
├── Project/
├── Runtime/
├── Standards/
├── Swarm/
├── Validation/
└── Workflow/
```

## 18. Usage Workflow

```text
Start with AGENTS.md
  ↓
Confirm active task scope, roadmap boundary, and frozen-area constraints
  ↓
Use this README to select the relevant template family
  ↓
Open the family README/index or selection guide when present
  ↓
Open the narrowest matching template
  ↓
Apply TPL-000, STD-010, and TPL-001 only when applicable
  ↓
Fill placeholders according to the selected template's manifest
  ↓
Validate produced-document metadata, authority references, placeholders, links, and Markdown integrity
  ↓
Submit for the applicable review and approval route
```

## 19. Validation Expectations

| Validation Area | Expectation | Routing Authority |
|:---|:---|:---|
| STD-010 metadata coverage | Governed Markdown documents include required metadata coverage according to STD-010. | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| TPL-000 alignment | Reusable templates follow the baseline template standard. | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| TPL-001 applicability | RFC-specific requirements apply only to RFC-style templates. | `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Navigation consistency | Directory map, family overview, and cross references match repository contents. | This README plus repository file checks. |
| Family ownership consistency | Family ownership and review routing preserve family-local metadata and governing authority. | Family files plus Framework Governance. |
| No duplicated authority | Templates and navigation documents consume authorities without redefining governance, runtime, engine, registry, certification, or ProjectStatus authority. | Governance Atlas, Framework Governance, and task-specific authorities. |
| Markdown integrity | Markdown tables, links, references, and diffs are structurally valid. | Repository markdown checks and diff checks. |

## 20. Library Invariants

The Template Library maintains these invariants:

- this README is the canonical Template Library entry point and navigation index;
- the README is not a reusable template;
- template standards live in `docs/AI/Templates/Standards/`;
- document metadata authority lives in STD-010;
- governance authority remains with Human Governance and Framework Governance;
- operational state remains with ProjectStatus;
- roadmap order remains with DevelopmentPhases;
- Runtime and Engine authority remain with their architecture documents;
- template families retain their family-local purpose and ownership;
- produced documents do not inherit certification, promotion, implementation, registry, runtime, or ProjectStatus authority from template usage alone.

## 21. Cross References

| Reference | Purpose |
|:---|:---|
| `AGENTS.md` | Repository bootloader and AI task entry sequence. |
| `docs/AI/GOVERNANCE.md` | Governance Atlas and repository governance navigation. |
| `docs/FrameworkGovernance.md` | Governance decision policy, review routing, approval routing, and conflict handling. |
| `docs/DevelopmentPhases/ProjectStatus.md` | Operational state, current phase, current stage, next queue, and frozen-area policy. |
| `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Roadmap order and development phase authority. |
| `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` | Baseline reusable template standard. |
| `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` | RFC-style template standard. |
| `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Document metadata standard. |
| `docs/AI/AIFramework.md` | Framework-level conceptual authority consumed by operational templates. |
| `docs/AI/AIOrchestrator.md` | Orchestration context consumed by operational templates. |
| `docs/AI/AgentSystemPrompt.md` | Agent system prompt context consumed by operational templates. |
| `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` | System overview and architecture blueprint context consumed by architecture-facing templates. |

## 22. Version History

| Version | Date | Notes |
|:---|:---|:---|
| 2.1.0-draft | 2026-07-10 | Refactored as the canonical Template Library navigation entry point aligned with STD-010, TPL-000, and TPL-001 routing boundaries. |
| 2.0.0-draft | 2026-07-09 | Initial Forge AI v2 operational template library README. |

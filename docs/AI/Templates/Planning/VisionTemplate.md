# Vision Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLANNING-VISION` |
| Title | Vision Template |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Planning Template |
| Document Type | Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.TEMPLATES.PLANNING.VISION` |
| Scope | Reusable output contract for vision planning artifacts that define long-range direction, mission, principles, and strategic outcomes. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/AI/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Vision planning document structure and placeholder manifest |
| Related Specifications | Planning template family; roadmap and lifecycle authorities |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, README alignment validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

Define long-range direction, mission, principles, and strategic outcomes for a framework, project, product, or adapter planning context.

This template is a documentation output contract only. It does not implement planning logic, execute roadmap work, advance phases, transition stages, certify completion, update registries, alter runtime behavior, or update ProjectStatus.

## 2. Authority Boundary

Documents produced from this template must consume existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and applicable roadmap authorities without redefining them. Planning content is evidence and structure for review; it is not governance approval, roadmap ownership transfer, certification authority, runtime authority, registry authority, or ProjectStatus authority.

## 3. Produced Document Metadata

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section. Placeholder values must be resolved before the produced document is treated as complete.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{DOCUMENT_IDENTIFIER}}` |
| Title | {{DOCUMENT_TITLE}} |
| Version | `{{DOCUMENT_VERSION}}` |
| Status | {{DOCUMENT_STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | {{DOCUMENT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |
| Lifecycle Phase | {{LIFECYCLE_PHASE}} |
| Traceability ID | `{{TRACEABILITY_ID}}` |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Dependencies | {{DEPENDENCIES}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
| Supersedes | {{SUPERSEDES}} |
| Superseded By | {{SUPERSEDED_BY}} |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |
```

## 4. Placeholder Manifest

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---:|:---|
| `{{DOCUMENT_IDENTIFIER}}` | STRING | Identifier | Yes | None |
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Vision |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Planning Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Vision Specification |
| `{{OWNER}}` | STRING | Owner | Yes | Planning artifact owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Planning artifact maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Planning documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Planning execution, roadmap execution, phase advancement, stage transitions, automated planning, certification, registry updates, runtime behavior, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; DevelopmentPhases; ProjectStatus; Master Roadmap; Runtime; Architecture; Standards; Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Applicable planning inputs and higher-level planning artifacts |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities |
| `{{PRODUCES}}` | LIST | Produces | Yes | Vision planning document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Planning template family; roadmap and lifecycle authorities |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{VISION_ID}}` | STRING | Not applicable | Yes | None |
| `{{VISION_NAME}}` | STRING | Not applicable | Yes | None |
| `{{VISION_SCOPE}}` | STRING | Not applicable | Yes | Framework / Project / Product / Adapter |
| `{{TIME_HORIZON}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNING_AUTHORITY}}` | STRING | Not applicable | Yes | Existing authority only |
| `{{MISSION}}` | STRING | Not applicable | Yes | None |
| `{{OBJECTIVE_ID}}` | STRING | Not applicable | Yes | OBJ-001 |
| `{{OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{SUCCESS_SIGNAL}}` | STRING | Not applicable | Yes | None |
| `{{GUIDING_PRINCIPLE}}` | STRING | Not applicable | Yes | None |
| `{{IN_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{OUT_OF_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURE_DIRECTION}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNANCE_DIRECTION}}` | STRING | Not applicable | Yes | None |
| `{{PLATFORM_INDEPENDENCE}}` | STRING | Not applicable | Yes | None |
| `{{METRIC}}` | STRING | Not applicable | Yes | None |
| `{{TARGET}}` | STRING | Not applicable | Yes | None |
| `{{EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{ROADMAP_HANDOFF}}` | STRING | Not applicable | Yes | None |
| `{{GATE}}` | STRING | Not applicable | Yes | None |
| `{{GATE_STATUS}}` | STRING | Not applicable | Yes | Draft |
| `{{RELATED_DOCUMENT}}` | STRING | Not applicable | Yes | None |

## 5. Vision Identity

| Field | Value |
|:---|:---|
| Vision ID | {{VISION_ID}} |
| Vision Name | {{VISION_NAME}} |
| Scope | {{VISION_SCOPE}} |
| Time Horizon | {{TIME_HORIZON}} |
| Governing Authority | {{GOVERNING_AUTHORITY}} |

## 6. Mission

{{MISSION}}

## 7. Strategic Objectives

| Objective ID | Objective | Success Signal |
|:---|:---|:---|
| {{OBJECTIVE_ID}} | {{OBJECTIVE}} | {{SUCCESS_SIGNAL}} |

## 8. Guiding Principles

- {{GUIDING_PRINCIPLE}}

## 9. Scope Boundaries

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 10. Architecture Direction

{{ARCHITECTURE_DIRECTION}}

## 11. Governance Direction

{{GOVERNANCE_DIRECTION}}

## 12. Platform Independence

{{PLATFORM_INDEPENDENCE}}

## 13. Success Metrics

| Metric | Target | Evidence |
|:---|:---|:---|
| {{METRIC}} | {{TARGET}} | {{EVIDENCE}} |

## 14. Risks and Constraints

| Risk | Impact | Mitigation |
|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{MITIGATION}} |

## 15. Roadmap Handoff

{{ROADMAP_HANDOFF}}

## 16. Review and Certification Evidence

| Gate | Status | Evidence |
|:---|:---|:---|
| {{GATE}} | {{GATE_STATUS}} | {{EVIDENCE}} |

This section records evidence needs only. It does not certify the vision or approve roadmap execution.

## 17. Related Documents

- {{RELATED_DOCUMENT}}

## 18. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Produced document consumes existing planning and roadmap authorities without redefining them.
- [ ] No duplicate planning, roadmap, phase, stage, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.
- [ ] Vision handoff does not execute roadmap work or update ProjectStatus.

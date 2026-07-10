# Roadmap Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLANNING-ROADMAP` |
| Title | Roadmap Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.PLANNING.ROADMAP` |
| Scope | Reusable output contract for roadmap planning artifacts that translate vision into sequenced phases and major milestones. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Roadmap planning document structure and placeholder manifest |
| Related Specifications | Planning template family; roadmap and lifecycle authorities |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, README alignment validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

Translate vision into sequenced delivery direction, phases, milestones, dependencies, and validation strategy.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Roadmap |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Planning Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Roadmap Specification |
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
| `{{PRODUCES}}` | LIST | Produces | Yes | Roadmap planning document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Planning template family; roadmap and lifecycle authorities |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{ROADMAP_ID}}` | STRING | Not applicable | Yes | None |
| `{{ROADMAP_NAME}}` | STRING | Not applicable | Yes | None |
| `{{PARENT_VISION}}` | STRING | Not applicable | Yes | None |
| `{{ROADMAP_SCOPE}}` | STRING | Not applicable | Yes | Framework / Project / Product / Adapter |
| `{{TIME_HORIZON}}` | STRING | Not applicable | Yes | None |
| `{{ROADMAP_PRINCIPLE}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_ID}}` | STRING | Not applicable | Yes | Phase 00 |
| `{{PHASE_TITLE}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{ENTRY_CRITERIA}}` | STRING | Not applicable | Yes | None |
| `{{EXIT_CRITERIA}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_STATUS}}` | STRING | Not applicable | Yes | Planned |
| `{{MILESTONE_ID}}` | STRING | Not applicable | Yes | M-001 |
| `{{MILESTONE_OUTCOME}}` | STRING | Not applicable | Yes | None |
| `{{EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED_BY}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY_TYPE}}` | STRING | Not applicable | Yes | Required / Optional / Deferred |
| `{{DEPENDENCY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{COMPATIBILITY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{AFFECTED_PHASE}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{CURRENT_POSITION_REFERENCE}}` | STRING | Not applicable | Yes | docs/DevelopmentPhases/ProjectStatus.md |
| `{{RELATED_DOCUMENT}}` | STRING | Not applicable | Yes | None |

## 5. Roadmap Identity

| Field | Value |
|:---|:---|
| Roadmap ID | {{ROADMAP_ID}} |
| Roadmap Name | {{ROADMAP_NAME}} |
| Parent Vision | {{PARENT_VISION}} |
| Scope | {{ROADMAP_SCOPE}} |
| Time Horizon | {{TIME_HORIZON}} |

## 6. Roadmap Principles

- {{ROADMAP_PRINCIPLE}}

## 7. Roadmap Structure

```text
Vision
    ↓
Roadmap
    ↓
Phase
    ↓
Stage
```

## 8. Phase Roadmap

| Phase | Title | Objective | Entry Criteria | Exit Criteria | Status |
|:---|:---|:---|:---|:---|:---|
| {{PHASE_ID}} | {{PHASE_TITLE}} | {{PHASE_OBJECTIVE}} | {{ENTRY_CRITERIA}} | {{EXIT_CRITERIA}} | {{PHASE_STATUS}} |

## 9. Milestone Map

| Milestone ID | Related Phase | Outcome | Evidence |
|:---|:---|:---|:---|
| {{MILESTONE_ID}} | {{PHASE_ID}} | {{MILESTONE_OUTCOME}} | {{EVIDENCE}} |

## 10. Dependency Map

| Dependency | Required By | Type | Notes |
|:---|:---|:---|:---|
| {{DEPENDENCY}} | {{REQUIRED_BY}} | {{DEPENDENCY_TYPE}} | {{DEPENDENCY_NOTES}} |

## 11. Compatibility and Migration Notes

{{COMPATIBILITY_NOTES}}

## 12. Validation Strategy

{{VALIDATION_STRATEGY}}

## 13. Review and Certification Evidence Strategy

{{REVIEW_STRATEGY}}

This section records evidence needs only. It does not certify roadmap completion or approve phase advancement.

## 14. Known Risks

| Risk | Affected Phase | Mitigation |
|:---|:---|:---|
| {{RISK}} | {{AFFECTED_PHASE}} | {{MITIGATION}} |

## 15. Current Position Reference

{{CURRENT_POSITION_REFERENCE}}

The current position must be linked to live state rather than duplicated or updated by this template.

## 16. Related Documents

- {{RELATED_DOCUMENT}}

## 17. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Produced document consumes existing planning and roadmap authorities without redefining them.
- [ ] No duplicate planning, roadmap, phase, stage, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.
- [ ] Roadmap content links to live state without updating ProjectStatus.

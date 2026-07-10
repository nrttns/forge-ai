# Phase Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLANNING-PHASE` |
| Title | Phase Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.PLANNING.PHASE` |
| Scope | Reusable output contract for phase planning artifacts that define major architectural capability, stage roadmap, boundaries, dependencies, and validation expectations. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Phase planning document structure and placeholder manifest |
| Related Specifications | Planning template family; roadmap and lifecycle authorities |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, README alignment validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

Define a major architectural capability and its stage roadmap while preserving higher roadmap and governance authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Phase |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Planning Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Phase Specification |
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
| `{{PRODUCES}}` | LIST | Produces | Yes | Phase planning document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Planning template family; roadmap and lifecycle authorities |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{PHASE_ID}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_NAME}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_POSITION}}` | STRING | Not applicable | Yes | None |
| `{{PARENT_ROADMAP}}` | STRING | Not applicable | Yes | None |
| `{{CURRENT_STATUS}}` | STRING | Not applicable | Yes | Planned / Active / Completed / Blocked |
| `{{VISION_CONTRIBUTION}}` | STRING | Not applicable | Yes | None |
| `{{MISSION}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURE_POSITION}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURAL_PRINCIPLE}}` | STRING | Not applicable | Yes | None |
| `{{HISTORICAL_CONTEXT}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED_FROM}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED_BY}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{OBJECTIVE_ID}}` | STRING | Not applicable | Yes | PH-OBJ-001 |
| `{{OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{COMPLETION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{RESPONSIBILITY}}` | STRING | Not applicable | Yes | None |
| `{{BOUNDARY}}` | STRING | Not applicable | Yes | None |
| `{{STACK_DESCRIPTION}}` | STRING | Not applicable | Yes | None |
| `{{ALLOWED_DEPENDENCY}}` | STRING | Not applicable | Yes | None |
| `{{FORBIDDEN_DEPENDENCY}}` | STRING | Not applicable | Yes | None |
| `{{INVARIANT}}` | STRING | Not applicable | Yes | None |
| `{{CONSUMER}}` | STRING | Not applicable | Yes | None |
| `{{CONSUMED_CONTRACT}}` | STRING | Not applicable | Yes | None |
| `{{RESPONSIBILITY_OWNER}}` | STRING | Not applicable | Yes | None |
| `{{STAGE_ID}}` | STRING | Not applicable | Yes | Stage 00 |
| `{{STAGE_OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_RANGE}}` | STRING | Not applicable | Yes | None |
| `{{STAGE_STATUS}}` | STRING | Not applicable | Yes | Planned |
| `{{CAPABILITY_ID}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{SURFACE}}` | STRING | Not applicable | Yes | None |
| `{{COMPATIBLE}}` | STRING | Not applicable | Yes | Yes / No |
| `{{BREAKING_RISK}}` | STRING | Not applicable | Yes | Low / Medium / High |
| `{{METRIC}}` | STRING | Not applicable | Yes | None |
| `{{TARGET}}` | STRING | Not applicable | Yes | None |
| `{{EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{RISK_STATUS}}` | STRING | Not applicable | Yes | Open |
| `{{ALLOWED_WORK}}` | STRING | Not applicable | Yes | None |
| `{{FORBIDDEN_WORK}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE_TYPE}}` | STRING | Not applicable | Yes | Documentation / Implementation / Validation / Audit |
| `{{REQUIRED}}` | STRING | Not applicable | Yes | Yes / No |
| `{{ENTRY_CRITERION}}` | STRING | Not applicable | Yes | None |
| `{{EXIT_CRITERION}}` | STRING | Not applicable | Yes | None |
| `{{GATE}}` | STRING | Not applicable | Yes | None |
| `{{NEXT_PHASE}}` | STRING | Not applicable | Yes | None |

## 5. Phase Identity

| Field | Value |
|:---|:---|
| Phase ID | {{PHASE_ID}} |
| Phase Name | {{PHASE_NAME}} |
| Phase Position | {{PHASE_POSITION}} |
| Parent Roadmap | {{PARENT_ROADMAP}} |
| Current Status | {{CURRENT_STATUS}} |

## 6. Vision Contribution

{{VISION_CONTRIBUTION}}

## 7. Mission

{{MISSION}}

## 8. Architecture Position

{{ARCHITECTURE_POSITION}}

## 9. Architectural Principles

- {{ARCHITECTURAL_PRINCIPLE}}

## 10. Historical Context

{{HISTORICAL_CONTEXT}}

## 11. Framework Dependencies

| Dependency | Required From | Required By | Notes |
|:---|:---|:---|:---|
| {{DEPENDENCY}} | {{REQUIRED_FROM}} | {{REQUIRED_BY}} | {{DEPENDENCY_NOTES}} |

## 12. Phase Objectives

| Objective ID | Objective | Completion Evidence |
|:---|:---|:---|
| {{OBJECTIVE_ID}} | {{OBJECTIVE}} | {{COMPLETION_EVIDENCE}} |

## 13. Architectural Responsibilities

- {{RESPONSIBILITY}}

## 14. Architectural Boundaries

- {{BOUNDARY}}

## 15. Architecture Stack

{{STACK_DESCRIPTION}}

## 16. Dependency Model

### Allowed Dependencies

- {{ALLOWED_DEPENDENCY}}

### Forbidden Dependencies

- {{FORBIDDEN_DEPENDENCY}}

### Invariants

- {{INVARIANT}}

## 17. Consumption Model

| Consumer | Consumed Contract | Notes |
|:---|:---|:---|
| {{CONSUMER}} | {{CONSUMED_CONTRACT}} | {{DEPENDENCY_NOTES}} |

## 18. Ownership Model

| Responsibility | Owner | Consumers |
|:---|:---|:---|
| {{RESPONSIBILITY}} | {{RESPONSIBILITY_OWNER}} | {{CONSUMER}} |

## 19. Stage Roadmap

| Stage | Objective | Historical Capability Range | Status |
|:---|:---|:---|:---|
| {{STAGE_ID}} | {{STAGE_OBJECTIVE}} | {{CAPABILITY_RANGE}} | {{STAGE_STATUS}} |

## 20. Historical Capability Mapping

| Capability ID | Stage | Objective | Status |
|:---|:---|:---|:---|
| {{CAPABILITY_ID}} | {{STAGE_ID}} | {{OBJECTIVE}} | {{CURRENT_STATUS}} |

Historical Capability identifiers are immutable after certification.

## 21. Migration Strategy

{{MIGRATION_STRATEGY}}

## 22. Compatibility Matrix

| Surface | Compatible | Breaking Risk | Notes |
|:---|:---|:---|:---|
| {{SURFACE}} | {{COMPATIBLE}} | {{BREAKING_RISK}} | {{DEPENDENCY_NOTES}} |

## 23. Success Metrics

| Metric | Target | Evidence |
|:---|:---|:---|
| {{METRIC}} | {{TARGET}} | {{EVIDENCE}} |

## 24. Architecture Risks

| Risk | Impact | Mitigation | Status |
|:---|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{MITIGATION}} | {{RISK_STATUS}} |

## 25. Allowed Work

- {{ALLOWED_WORK}}

## 26. Forbidden Work

- {{FORBIDDEN_WORK}}

## 27. Deliverables

| Deliverable | Type | Required | Notes |
|:---|:---|:---|:---|
| {{DELIVERABLE}} | {{DELIVERABLE_TYPE}} | {{REQUIRED}} | {{DEPENDENCY_NOTES}} |

## 28. Entry Criteria

- [ ] {{ENTRY_CRITERION}}

## 29. Exit Criteria

- [ ] {{EXIT_CRITERION}}

## 30. Quality Gates

| Gate | Required | Evidence |
|:---|:---|:---|
| {{GATE}} | {{REQUIRED}} | {{EVIDENCE}} |

## 31. Next Phase

{{NEXT_PHASE}}

## 32. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Produced document consumes existing planning and roadmap authorities without redefining them.
- [ ] No duplicate planning, roadmap, phase, stage, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.
- [ ] Phase content does not advance phase state or update ProjectStatus.

# Stage Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLANNING-STAGE` |
| Title | Stage Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.PLANNING.STAGE` |
| Scope | Reusable output contract for stage planning artifacts that define measurable milestones within a parent phase. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/AI/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Stage planning document structure and placeholder manifest |
| Related Specifications | Planning template family; roadmap and lifecycle authorities |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, README alignment validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

Define a measurable milestone within a phase, including scope, responsibilities, dependencies, deliverables, gates, and risks.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Stage |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Planning Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Stage Specification |
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
| `{{PRODUCES}}` | LIST | Produces | Yes | Stage planning document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Planning template family; roadmap and lifecycle authorities |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{STAGE_ID}}` | STRING | Not applicable | Yes | None |
| `{{STAGE_NAME}}` | STRING | Not applicable | Yes | None |
| `{{PARENT_PHASE}}` | STRING | Not applicable | Yes | None |
| `{{MILESTONE}}` | STRING | Not applicable | Yes | None |
| `{{STAGE_STATUS}}` | STRING | Not applicable | Yes | Planned / Active / Completed / Blocked |
| `{{PHASE_RELATIONSHIP}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_ID}}` | STRING | Not applicable | Yes | None |
| `{{OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_STATUS}}` | STRING | Not applicable | Yes | None |
| `{{NOTES}}` | STRING | Not applicable | Yes | None |
| `{{PURPOSE_TEXT}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURAL_GOAL}}` | STRING | Not applicable | Yes | None |
| `{{IN_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{OUT_OF_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{RESPONSIBILITY}}` | STRING | Not applicable | Yes | None |
| `{{BOUNDARY}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY}}` | STRING | Not applicable | Yes | None |
| `{{DEPENDENCY_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED_BEFORE}}` | STRING | Not applicable | Yes | None |
| `{{INPUT}}` | STRING | Not applicable | Yes | None |
| `{{INPUT_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED}}` | STRING | Not applicable | Yes | Yes / No |
| `{{OUTPUT}}` | STRING | Not applicable | Yes | None |
| `{{CONSUMER}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE_TYPE}}` | STRING | Not applicable | Yes | Documentation / Implementation / Validation / Audit |
| `{{ALLOWED_WORK}}` | STRING | Not applicable | Yes | None |
| `{{FORBIDDEN_WORK}}` | STRING | Not applicable | Yes | None |
| `{{DECISION_ID}}` | STRING | Not applicable | Yes | DEC-001 |
| `{{DECISION}}` | STRING | Not applicable | Yes | None |
| `{{DECISION_AUTHORITY}}` | STRING | Not applicable | Yes | Existing authority |
| `{{DECISION_DATE}}` | DATE | Not applicable | Yes | None |
| `{{GATE}}` | STRING | Not applicable | Yes | None |
| `{{EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{REVIEWER}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_STATUS}}` | STRING | Not applicable | Yes | Draft |
| `{{COMPLETION_CRITERION}}` | STRING | Not applicable | Yes | None |
| `{{SUMMARY}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{RISK_STATUS}}` | STRING | Not applicable | Yes | Open |
| `{{RELATED_CAPABILITY}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_AUDIT}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_RFC_ADR}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_DOCUMENT}}` | STRING | Not applicable | Yes | None |
| `{{NEXT_STAGE}}` | STRING | Not applicable | Yes | None |

## 5. Stage Identity

| Field | Value |
|:---|:---|
| Stage ID | {{STAGE_ID}} |
| Stage Name | {{STAGE_NAME}} |
| Parent Phase | {{PARENT_PHASE}} |
| Milestone | {{MILESTONE}} |
| Status | {{STAGE_STATUS}} |

## 6. Parent Phase Relationship

{{PHASE_RELATIONSHIP}}

## 7. Historical Capability Mapping

| Capability ID | Objective | Status | Notes |
|:---|:---|:---|:---|
| {{CAPABILITY_ID}} | {{OBJECTIVE}} | {{CAPABILITY_STATUS}} | {{NOTES}} |

## 8. Purpose

{{PURPOSE_TEXT}}

## 9. Architectural Goal

{{ARCHITECTURAL_GOAL}}

## 10. Scope

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 11. Responsibilities

- {{RESPONSIBILITY}}

## 12. Boundaries

- {{BOUNDARY}}

## 13. Dependencies

| Dependency | Source | Required Before | Notes |
|:---|:---|:---|:---|
| {{DEPENDENCY}} | {{DEPENDENCY_SOURCE}} | {{REQUIRED_BEFORE}} | {{NOTES}} |

## 14. Inputs

| Input | Source | Required |
|:---|:---|:---|
| {{INPUT}} | {{INPUT_SOURCE}} | {{REQUIRED}} |

## 15. Outputs

| Output | Consumer | Notes |
|:---|:---|:---|
| {{OUTPUT}} | {{CONSUMER}} | {{NOTES}} |

## 16. Deliverables

| Deliverable | Type | Required |
|:---|:---|:---|
| {{DELIVERABLE}} | {{DELIVERABLE_TYPE}} | {{REQUIRED}} |

## 17. Allowed Work

- {{ALLOWED_WORK}}

## 18. Forbidden Work

- {{FORBIDDEN_WORK}}

## 19. Decision Log

| Decision ID | Decision | Authority | Date | Notes |
|:---|:---|:---|:---|:---|
| {{DECISION_ID}} | {{DECISION}} | {{DECISION_AUTHORITY}} | {{DECISION_DATE}} | {{NOTES}} |

## 20. Acceptance Gates

| Gate | Required Evidence | Status |
|:---|:---|:---|
| {{GATE}} | {{EVIDENCE}} | {{REVIEW_STATUS}} |

## 21. Review Gates

| Review Gate | Reviewer | Status | Evidence |
|:---|:---|:---|:---|
| {{GATE}} | {{REVIEWER}} | {{REVIEW_STATUS}} | {{EVIDENCE}} |

## 22. Validation Requirements

- authority validation;
- dependency validation;
- ownership verification;
- documentation synchronization;
- required tests or quality gates when applicable.

## 23. Stage Completion Criteria

- [ ] {{COMPLETION_CRITERION}}

## 24. Exit Report

| Field | Value |
|:---|:---|
| Completion Summary | {{SUMMARY}} |
| Evidence | {{EVIDENCE}} |
| Known Risks | {{RISK}} |
| Recommended Next Action | {{NEXT_STAGE}} |

## 25. Risks

| Risk | Impact | Mitigation | Status |
|:---|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{MITIGATION}} | {{RISK_STATUS}} |

## 26. Related Capabilities

- {{RELATED_CAPABILITY}}

## 27. Related Audits

- {{RELATED_AUDIT}}

## 28. Related RFCs / ADRs

- {{RELATED_RFC_ADR}}

## 29. Related Documents

- {{RELATED_DOCUMENT}}

## 30. Next Stage

{{NEXT_STAGE}}

## 31. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Produced document consumes existing planning and roadmap authorities without redefining them.
- [ ] No duplicate planning, roadmap, phase, stage, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.
- [ ] Stage content does not transition stage state or update ProjectStatus.

# Historical Capability Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-HISTORICAL-CAPABILITY` |
| Title | Historical Capability Template |
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
| Traceability ID | `AI-DOS.TEMPLATES.PLANNING.HISTORICAL-CAPABILITY` |
| Scope | Reusable output contract for historical capability artifacts that describe immutable implementation history under a stage. |
| Out of Scope | Planning logic implementation, roadmap execution, phase advancement, stage transition execution, automated planning, certification decisions, registry updates, runtime behavior, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; DevelopmentPhases roadmap; ProjectStatus operational state; Master Roadmap; applicable planning, runtime, architecture, standards, and governance authorities |
| Consumes | Existing Planning, Governance, DevelopmentPhases, Runtime, Architecture, Standards, and roadmap authorities without redefining them |
| Produces | Historical capability planning document structure and placeholder manifest |
| Related Specifications | Planning template family; roadmap and lifecycle authorities |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Planning template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, README alignment validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

Define a certified executable increment under a stage while preserving historical identifiers and higher planning authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Historical Capability |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Planning Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Historical Capability Specification |
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
| `{{PRODUCES}}` | LIST | Produces | Yes | Historical capability planning document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Planning template family; roadmap and lifecycle authorities |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{CAPABILITY_ID}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_TITLE}}` | STRING | Not applicable | Yes | None |
| `{{PARENT_PHASE}}` | STRING | Not applicable | Yes | None |
| `{{PARENT_STAGE}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_STATUS}}` | STRING | Not applicable | Yes | Planned / Active / Completed / Certified / Blocked |
| `{{STAGE_OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{PHASE_CONTRIBUTION}}` | STRING | Not applicable | Yes | None |
| `{{CAPABILITY_OBJECTIVE}}` | STRING | Not applicable | Yes | None |
| `{{INCLUDED_WORK}}` | STRING | Not applicable | Yes | None |
| `{{EXCLUDED_WORK}}` | STRING | Not applicable | Yes | None |
| `{{FUTURE_WORK}}` | STRING | Not applicable | Yes | None |
| `{{INPUT}}` | STRING | Not applicable | Yes | None |
| `{{INPUT_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED}}` | STRING | Not applicable | Yes | Yes / No |
| `{{COMPONENT}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{COMPONENT_OWNER}}` | STRING | Not applicable | Yes | None |
| `{{NOTES}}` | STRING | Not applicable | Yes | None |
| `{{IMPLEMENTATION_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURE_RULE}}` | STRING | Not applicable | Yes | None |
| `{{CONTRACT}}` | STRING | Not applicable | Yes | None |
| `{{CHANGE_TYPE}}` | STRING | Not applicable | Yes | Add / Change / Remove / None |
| `{{BREAKING}}` | STRING | Not applicable | Yes | Yes / No |
| `{{BREAKING_CHANGES}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{ROLLBACK_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{SECURITY_AREA}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{PERFORMANCE_AREA}}` | STRING | Not applicable | Yes | None |
| `{{EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{DOCUMENT}}` | STRING | Not applicable | Yes | None |
| `{{REQUIRED_CHANGE}}` | STRING | Not applicable | Yes | None |
| `{{CHANGE_STATUS}}` | STRING | Not applicable | Yes | None |
| `{{TEST_GATE}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_OR_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{ALLOWED_WORK}}` | STRING | Not applicable | Yes | None |
| `{{FORBIDDEN_WORK}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE}}` | STRING | Not applicable | Yes | None |
| `{{DELIVERABLE_TYPE}}` | STRING | Not applicable | Yes | Code / Docs / Tests / Validation / Audit |
| `{{VALIDATION_REQUIREMENT}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_REQUIREMENT}}` | STRING | Not applicable | Yes | None |
| `{{CERTIFICATION_REQUIREMENT}}` | STRING | Not applicable | Yes | None |
| `{{REQUIREMENT_STATUS}}` | STRING | Not applicable | Yes | None |
| `{{SUMMARY}}` | STRING | Not applicable | Yes | None |
| `{{FILES_CHANGED}}` | STRING | Not applicable | Yes | None |
| `{{ARCHITECTURE_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_RESULTS}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{RECOMMENDED_NEXT_STEP}}` | STRING | Not applicable | Yes | None |
| `{{RISK_STATUS}}` | STRING | Not applicable | Yes | Open |
| `{{FUTURE_EXTENSION}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_AUDIT}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_RFC_ADR}}` | STRING | Not applicable | Yes | None |
| `{{RELATED_DOCUMENT}}` | STRING | Not applicable | Yes | None |

## 5. Capability Identity

| Field | Value |
|:---|:---|
| Capability ID | {{CAPABILITY_ID}} |
| Capability Title | {{CAPABILITY_TITLE}} |
| Parent Phase | {{PARENT_PHASE}} |
| Parent Stage | {{PARENT_STAGE}} |
| Status | {{CAPABILITY_STATUS}} |

Historical Capability identity is immutable after certification.

## 6. Parent Stage

{{STAGE_OBJECTIVE}}

## 7. Parent Phase

{{PHASE_CONTRIBUTION}}

## 8. Capability Objective

{{CAPABILITY_OBJECTIVE}}

## 9. Scope

### Included Work

- {{INCLUDED_WORK}}

### Excluded Work

- {{EXCLUDED_WORK}}

### Future Work

- {{FUTURE_WORK}}

## 10. Inputs

| Input | Source | Required |
|:---|:---|:---|
| {{INPUT}} | {{INPUT_SOURCE}} | {{REQUIRED}} |

## 11. Affected Components

| Component | Impact | Owner | Notes |
|:---|:---|:---|:---|
| {{COMPONENT}} | {{IMPACT}} | {{COMPONENT_OWNER}} | {{NOTES}} |

## 12. Implementation Strategy

{{IMPLEMENTATION_STRATEGY}}

Implementation realizes architecture. It does not define architecture.

## 13. Architecture Rules

- {{ARCHITECTURE_RULE}}

## 14. API / Contract Changes

| Contract | Change Type | Breaking | Notes |
|:---|:---|:---|:---|
| {{CONTRACT}} | {{CHANGE_TYPE}} | {{BREAKING}} | {{NOTES}} |

## 15. Breaking Changes

{{BREAKING_CHANGES}}

## 16. Migration Notes

{{MIGRATION_NOTES}}

## 17. Rollback Strategy

{{ROLLBACK_STRATEGY}}

## 18. Security Impact

| Area | Impact | Mitigation |
|:---|:---|:---|
| {{SECURITY_AREA}} | {{IMPACT}} | {{MITIGATION}} |

## 19. Performance Impact

| Area | Impact | Evidence |
|:---|:---|:---|
| {{PERFORMANCE_AREA}} | {{IMPACT}} | {{EVIDENCE}} |

## 20. Documentation Impact

| Document | Required Change | Status |
|:---|:---|:---|
| {{DOCUMENT}} | {{REQUIRED_CHANGE}} | {{CHANGE_STATUS}} |

## 21. Testing Matrix

| Test / Gate | Required | Command / Evidence | Status |
|:---|:---|:---|:---|
| {{TEST_GATE}} | {{REQUIRED}} | {{COMMAND_OR_EVIDENCE}} | {{CHANGE_STATUS}} |

## 22. Allowed Work

- {{ALLOWED_WORK}}

## 23. Forbidden Work

- {{FORBIDDEN_WORK}}

## 24. Deliverables

| Deliverable | Type | Required | Status |
|:---|:---|:---|:---|
| {{DELIVERABLE}} | {{DELIVERABLE_TYPE}} | {{REQUIRED}} | {{CHANGE_STATUS}} |

## 25. Validation

- {{VALIDATION_REQUIREMENT}}

## 26. Review Requirements

- {{REVIEW_REQUIREMENT}}

## 27. Certification Evidence Requirements

| Requirement | Status | Evidence |
|:---|:---|:---|
| {{CERTIFICATION_REQUIREMENT}} | {{REQUIREMENT_STATUS}} | {{EVIDENCE}} |

This section records evidence needs only. It does not certify the capability or update ProjectStatus.

## 28. Completion Report

| Field | Value |
|:---|:---|
| Summary | {{SUMMARY}} |
| Files changed | {{FILES_CHANGED}} |
| Architecture notes | {{ARCHITECTURE_NOTES}} |
| Validation results | {{VALIDATION_RESULTS}} |
| Known risks | {{RISK}} |
| Recommended next step | {{RECOMMENDED_NEXT_STEP}} |

## 29. Risks

| Risk | Impact | Mitigation | Status |
|:---|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{MITIGATION}} | {{RISK_STATUS}} |

## 30. Future Extensions

{{FUTURE_EXTENSION}}

## 31. Related Audits

- {{RELATED_AUDIT}}

## 32. Related RFCs / ADRs

- {{RELATED_RFC_ADR}}

## 33. Related Documents

- {{RELATED_DOCUMENT}}

## 34. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Produced document consumes existing planning and roadmap authorities without redefining them.
- [ ] No duplicate planning, roadmap, phase, stage, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.
- [ ] Historical capability content does not certify completion or update ProjectStatus.

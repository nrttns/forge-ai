# Migration Plan Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-MIGRATION-PLAN` |
| Title | Migration Plan Template |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Migration Template |
| Document Type | Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.MIGRATION.PLAN` |
| Scope | Reusable output contract for planning a governed migration from an old structure, adapter, document set, implementation, or framework version to a new one. |
| Out of Scope | Implementing migration logic, compatibility behavior, runtime conversion, automated upgrades, deprecation execution, governance decisions, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Lifecycle/CompatibilityPolicy.md`; `docs/AI-DOS/Lifecycle/DeprecationPolicy.md`; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; compatibility policy; deprecation policy; applicable migration, runtime, architecture, standards, and governance authorities |
| Consumes | Existing migration, compatibility, deprecation, runtime, architecture, standards, and governance authority without redefining it |
| Produces | Migration plan document structure and placeholder manifest |
| Related Specifications | Compatibility Matrix Template; Deprecation Notice Template; Migration Report Template; Lifecycle compatibility and deprecation policies |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Migration template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Plan a governed migration from an old structure, adapter, document set, implementation, or framework version to a new one.

This template is a planning output contract only. It does not implement migration logic, convert runtime behavior, execute upgrades, certify migration completion, or update ProjectStatus.

## 2. Authority Boundary

Migration plans produced from this template must consume existing Migration, Runtime, Architecture, Standards, and Governance authorities without redefining them. Planned steps are proposed work boundaries and evidence requirements; they are not authorization to implement, certify, promote, register, or update ProjectStatus.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Migration Plan |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Migration Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Migration Plan |
| `{{OWNER}}` | STRING | Owner | Yes | Migration owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Migration maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Migration planning documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Migration implementation, runtime conversion, automated upgrades, certification, registry updates, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; compatibility policy; deprecation policy; applicable Runtime, Architecture, Standards, and Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Source and target migration inputs |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authorities and migration evidence |
| `{{PRODUCES}}` | LIST | Produces | Yes | Migration plan document |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Compatibility matrix, deprecation notice, migration report, lifecycle policies |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{TARGET}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_TYPE}}` | STRING | Not applicable | Yes | Documentation / Architecture / Code / Adapter / Framework / Tooling |
| `{{BREAKING_CHANGE}}` | ENUM | Not applicable | Yes | Yes / No / Conditional |
| `{{REQUIRED_APPROVAL}}` | STRING | Not applicable | Yes | Human Governance when required |
| `{{IN_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{OUT_OF_SCOPE_ITEM}}` | STRING | Not applicable | Yes | None |
| `{{STEP_NUMBER}}` | INTEGER | Not applicable | Yes | 1 |
| `{{MIGRATION_ACTION}}` | STRING | Not applicable | Yes | None |
| `{{STEP_OWNER}}` | STRING | Not applicable | Yes | None |
| `{{STEP_VALIDATION}}` | STRING | Not applicable | Yes | None |
| `{{STEP_ROLLBACK}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT_SURFACE}}` | STRING | Not applicable | Yes | None |
| `{{IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |
| `{{ROLLBACK_STRATEGY}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_PLAN}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_REQUIREMENTS}}` | STRING | Not applicable | Yes | None |

## 5. Migration Summary

| Field | Value |
|:---|:---|
| Source | {{SOURCE}} |
| Target | {{TARGET}} |
| Migration Type | {{MIGRATION_TYPE}} |
| Breaking Change | {{BREAKING_CHANGE}} |
| Required Approval | {{REQUIRED_APPROVAL}} |

## 6. Scope

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 7. Migration Steps

| Step | Action | Owner | Validation | Rollback |
|:---|:---|:---|:---|:---|
| {{STEP_NUMBER}} | {{MIGRATION_ACTION}} | {{STEP_OWNER}} | {{STEP_VALIDATION}} | {{STEP_ROLLBACK}} |

## 8. Compatibility Impact

| Surface | Impact | Mitigation |
|:---|:---|:---|
| {{IMPACT_SURFACE}} | {{IMPACT}} | {{MITIGATION}} |

## 9. Rollback Strategy

{{ROLLBACK_STRATEGY}}

## 10. Validation Plan

{{VALIDATION_PLAN}}

## 11. Review and Certification Evidence

{{REVIEW_REQUIREMENTS}}

This section records evidence needs only. It does not certify the migration or approve implementation.

## 12. Completion Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Source and target are defined.
- [ ] Scope is bounded.
- [ ] Steps are ordered.
- [ ] Compatibility is reviewed.
- [ ] Rollback exists.
- [ ] Validation plan exists.
- [ ] No duplicate migration, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.

# Deprecation Notice Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-MIGRATION-DEPRECATION-NOTICE` |
| Title | Deprecation Notice Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.MIGRATION.DEPRECATION-NOTICE` |
| Scope | Reusable output contract for documenting deprecation notices, replacements, migration guidance, compatibility impact, and required validation evidence. |
| Out of Scope | Executing deprecation, removing files, implementing migration logic, runtime conversion, automated upgrades, governance decisions, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Lifecycle/CompatibilityPolicy.md`; `docs/AI/Lifecycle/DeprecationPolicy.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; compatibility policy; deprecation policy; applicable migration, runtime, architecture, standards, and governance authorities |
| Consumes | Existing migration, compatibility, deprecation, runtime, architecture, standards, and governance authority without redefining it |
| Produces | Deprecation notice document structure and placeholder manifest |
| Related Specifications | Compatibility Matrix Template; Migration Plan Template; Migration Report Template; Lifecycle compatibility and deprecation policies |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Migration template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Document a deprecation notice for a framework surface while preserving compatibility expectations and review evidence.

This template is a documentation output contract only. It does not execute deprecation, remove or archive assets, certify replacement readiness, update registries, or update ProjectStatus.

## 2. Authority Boundary

Deprecation notices produced from this template must consume existing Migration, Runtime, Architecture, Standards, and Governance authorities without redefining them. A deprecation notice records guidance and required evidence; it does not approve removal, certify migration, or create governance authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Deprecation Notice |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Migration Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Deprecation Notice |
| `{{OWNER}}` | STRING | Owner | Yes | Notice owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Notice maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Deprecation notice documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Deprecation execution, file removal, migration implementation, runtime conversion, certification, registry updates, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; compatibility policy; deprecation policy; applicable Runtime, Architecture, Standards, and Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Deprecated surface and replacement evidence |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authorities and deprecation evidence |
| `{{PRODUCES}}` | LIST | Produces | Yes | Deprecation notice document |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Compatibility matrix, migration plan, migration report, lifecycle policies |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{DEPRECATED_NAME}}` | STRING | Not applicable | Yes | None |
| `{{DEPRECATED_IDENTIFIER}}` | STRING | Not applicable | Yes | None |
| `{{DEPRECATED_TYPE}}` | STRING | Not applicable | Yes | Document / Template / Command / Workflow / Adapter / Tool / Other |
| `{{DEPRECATED_IN_VERSION}}` | STRING | Not applicable | Yes | None |
| `{{PLANNED_REMOVAL}}` | STRING | Not applicable | Yes | Unknown until approved |
| `{{DEPRECATION_REASON}}` | STRING | Not applicable | Yes | None |
| `{{REPLACEMENT}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_STEP}}` | STRING | Not applicable | Yes | None |
| `{{COMPATIBILITY_SURFACE}}` | STRING | Not applicable | Yes | None |
| `{{COMPATIBILITY_IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_REQUIRED}}` | STRING | Not applicable | Yes | None |
| `{{RISK_IF_NOT_MIGRATED}}` | STRING | Not applicable | Yes | None |
| `{{APPROVER}}` | STRING | Not applicable | Yes | None |
| `{{APPROVER_ROLE}}` | STRING | Not applicable | Yes | None |
| `{{APPROVAL_DATE}}` | DATE | Not applicable | Yes | None |

## 5. Deprecated Surface

| Field | Value |
|:---|:---|
| Name | {{DEPRECATED_NAME}} |
| Path / Identifier | {{DEPRECATED_IDENTIFIER}} |
| Type | {{DEPRECATED_TYPE}} |
| Deprecated In Version | {{DEPRECATED_IN_VERSION}} |
| Planned Removal | {{PLANNED_REMOVAL}} |

## 6. Reason

{{DEPRECATION_REASON}}

## 7. Replacement

| Deprecated | Replacement |
|:---|:---|
| {{DEPRECATED_NAME}} | {{REPLACEMENT}} |

## 8. Migration Guidance

1. {{MIGRATION_STEP}}

## 9. Compatibility Impact

| Surface | Impact |
|:---|:---|
| {{COMPATIBILITY_SURFACE}} | {{COMPATIBILITY_IMPACT}} |

## 10. Validation Required After Migration

- {{VALIDATION_REQUIRED}}

## 11. Risks if Not Migrated

- {{RISK_IF_NOT_MIGRATED}}

## 12. Approval

| Approver | Role | Date |
|:---|:---|:---|
| {{APPROVER}} | {{APPROVER_ROLE}} | {{APPROVAL_DATE}} |

## 13. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Deprecated surface is identified by name and path or identifier.
- [ ] Replacement or migration destination is identified.
- [ ] Compatibility impact and required validation are documented.
- [ ] Notice does not execute deprecation, approve removal, certify migration, or update ProjectStatus.

# Compatibility Matrix Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-MIGRATION-COMPATIBILITY-MATRIX` |
| Title | Compatibility Matrix Template |
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
| Traceability ID | `AI-DOS.TEMPLATES.MIGRATION.COMPATIBILITY-MATRIX` |
| Scope | Reusable output contract for documenting compatibility across framework versions, adapters, templates, tooling, commands, workflows, and adopting projects. |
| Out of Scope | Implementing migration logic, compatibility behavior, runtime conversion, automated upgrades, deprecation execution, governance decisions, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Lifecycle/CompatibilityPolicy.md`; `docs/AI-DOS/Lifecycle/DeprecationPolicy.md`; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; compatibility policy; deprecation policy; applicable migration, runtime, architecture, standards, and governance authorities |
| Consumes | Existing migration, compatibility, deprecation, runtime, architecture, standards, and governance authority without redefining it |
| Produces | Compatibility matrix document structure and placeholder manifest |
| Related Specifications | Migration Plan Template; Migration Report Template; Deprecation Notice Template; Lifecycle compatibility and deprecation policies |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Migration template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Document compatibility across framework versions, adapters, templates, tooling, commands, workflows, and adopting projects.

This template is a documentation output contract only. It does not create migration authority, execute compatibility behavior, certify compatibility, update registries, or update ProjectStatus.

## 2. Authority Boundary

Compatibility matrices produced from this template must consume existing Migration, Runtime, Architecture, Standards, and Governance authorities without redefining them. Compatibility findings are evidence for review; they are not governance approval, certification, registry authority, runtime conversion, or ProjectStatus authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Compatibility Matrix |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Migration Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Compatibility Matrix |
| `{{OWNER}}` | STRING | Owner | Yes | Matrix owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Matrix maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Compatibility documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Migration implementation, runtime conversion, compatibility execution, certification, registry updates, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; compatibility policy; deprecation policy; applicable Runtime, Architecture, Standards, and Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Applicable source and target versions |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authorities and compatibility evidence |
| `{{PRODUCES}}` | LIST | Produces | Yes | Compatibility matrix document |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Migration plan, migration report, deprecation notice, lifecycle policies |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{SURFACE}}` | STRING | Not applicable | Yes | None |
| `{{CURRENT_VERSION}}` | STRING | Not applicable | Yes | None |
| `{{TARGET_VERSION}}` | STRING | Not applicable | Yes | None |
| `{{COMPATIBILITY_STATUS}}` | ENUM | Not applicable | Yes | Yes / No / Partial / Unknown |
| `{{MIGRATION_REQUIRED}}` | ENUM | Not applicable | Yes | Yes / No / Conditional |
| `{{COMPATIBILITY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{BREAKING_CHANGE}}` | STRING | Not applicable | Yes | None |
| `{{BREAKING_CHANGE_IMPACT}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_PATH}}` | STRING | Not applicable | Yes | None |

## 5. Matrix

| Surface | Current Version | Target Version | Compatible | Migration Required | Notes |
|:---|:---|:---|:---|:---|:---|
| {{SURFACE}} | {{CURRENT_VERSION}} | {{TARGET_VERSION}} | {{COMPATIBILITY_STATUS}} | {{MIGRATION_REQUIRED}} | {{COMPATIBILITY_NOTES}} |

## 6. Breaking Changes

| Change | Impact | Migration Path |
|:---|:---|:---|
| {{BREAKING_CHANGE}} | {{BREAKING_CHANGE_IMPACT}} | {{MIGRATION_PATH}} |

## 7. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] All affected surfaces are listed.
- [ ] Compatibility status is explicit.
- [ ] Migration requirement is clear.
- [ ] Breaking changes have guidance.
- [ ] No duplicate migration, governance, review, certification, registry, runtime, or ProjectStatus authority is introduced.

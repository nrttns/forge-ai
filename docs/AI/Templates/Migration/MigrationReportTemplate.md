# Migration Report Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-MIGRATION-REPORT` |
| Title | Migration Report Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.MIGRATION.REPORT` |
| Scope | Reusable output contract for reporting migration results, changes made, validation results, compatibility findings, rollback status, risks, and recommended next step. |
| Out of Scope | Implementing migration logic, compatibility behavior, runtime conversion, automated upgrades, deprecation execution, governance decisions, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Lifecycle/CompatibilityPolicy.md`; `docs/AI/Lifecycle/DeprecationPolicy.md`; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; compatibility policy; deprecation policy; applicable migration, runtime, architecture, standards, and governance authorities |
| Consumes | Existing migration, compatibility, deprecation, runtime, architecture, standards, and governance authority without redefining it |
| Produces | Migration report document structure and placeholder manifest |
| Related Specifications | Migration Plan Template; Compatibility Matrix Template; Deprecation Notice Template; Lifecycle compatibility and deprecation policies |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Migration template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Report migration results, changes made, validation results, compatibility findings, rollback status, risks, and recommended next step.

This template is a reporting output contract only. It does not certify migration completion, approve implementation, execute rollback, update registries, or update ProjectStatus.

## 2. Authority Boundary

Migration reports produced from this template must consume existing Migration, Runtime, Architecture, Standards, and Governance authorities without redefining them. Report verdicts are evidence for review; they are not certification, canonical promotion, registry authority, or ProjectStatus authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Migration Report |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Migration Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Migration Report |
| `{{OWNER}}` | STRING | Owner | Yes | Report owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Report maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Migration reporting documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Migration implementation, runtime conversion, automated upgrades, certification, registry updates, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; compatibility policy; deprecation policy; applicable Runtime, Architecture, Standards, and Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Migration plan and validation evidence |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authorities and migration evidence |
| `{{PRODUCES}}` | LIST | Produces | Yes | Migration report document |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Migration plan, compatibility matrix, deprecation notice, lifecycle policies |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{SUMMARY}}` | STRING | Not applicable | Yes | None |
| `{{MIGRATION_RESULT}}` | ENUM | Not applicable | Yes | COMPLETED / COMPLETED WITH OBSERVATIONS / PARTIALLY COMPLETED / BLOCKED / FAILED |
| `{{ITEM}}` | STRING | Not applicable | Yes | None |
| `{{SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{TARGET}}` | STRING | Not applicable | Yes | None |
| `{{ITEM_STATUS}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_GATE}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_RESULT}}` | ENUM | Not applicable | Yes | PASS / FAIL / BLOCKED / N/A |
| `{{VALIDATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{FINDING}}` | STRING | Not applicable | Yes | None |
| `{{SEVERITY}}` | ENUM | Not applicable | Yes | INFO / WARNING / BLOCKER |
| `{{RECOMMENDATION}}` | STRING | Not applicable | Yes | None |
| `{{ROLLBACK_STATUS}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{RECOMMENDED_NEXT_STEP}}` | STRING | Not applicable | Yes | None |

## 5. Summary

{{SUMMARY}}

## 6. Migration Result

```text
{{MIGRATION_RESULT}}
```

## 7. Changes Made

| Item | Source | Target | Status |
|:---|:---|:---|:---|
| {{ITEM}} | {{SOURCE}} | {{TARGET}} | {{ITEM_STATUS}} |

## 8. Validation Results

| Gate | Result | Evidence |
|:---|:---|:---|
| {{VALIDATION_GATE}} | {{VALIDATION_RESULT}} | {{VALIDATION_EVIDENCE}} |

## 9. Compatibility Findings

| Finding | Severity | Recommendation |
|:---|:---|:---|
| {{FINDING}} | {{SEVERITY}} | {{RECOMMENDATION}} |

## 10. Rollback Status

{{ROLLBACK_STATUS}}

## 11. Risks

{{RISK}}

## 12. Recommended Next Step

{{RECOMMENDED_NEXT_STEP}}

## 13. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Migration result is explicit.
- [ ] Changes made include source, target, and status.
- [ ] Validation results include evidence.
- [ ] Compatibility findings include severity and recommendation.
- [ ] Report does not certify migration, approve implementation, update registries, or update ProjectStatus.

# Library Project Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PROJECT-LIBRARY` |
| Title | Library Project Template |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Project Template |
| Document Type | Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.PROJECT.LIBRARY` |
| Scope | Reusable output contract for library project adoption documentation. |
| Out of Scope | Project implementation logic, scaffolding behavior, code generation, runtime behavior, deployment logic, CI/CD behavior, package management execution, framework-specific execution, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Templates/Planning/RoadmapTemplate.md`; `docs/AI-DOS/Templates/Architecture/ArchitectureTemplate.md`; `docs/AI-DOS/Templates/Integration/IntegrationContractTemplate.md`; `docs/AI-DOS/Templates/Platform/PlatformAdapterTemplate.md`; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Project template family; Planning templates; Runtime Architecture; Architecture templates; Integration templates; Platform templates; applicable standards and governance authorities |
| Consumes | Existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities without redefining them |
| Produces | Library Project document structure and placeholder manifest |
| Related Specifications | Project Template Selection Guide; Project template family README; Generic Project Template; platform-specific project templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Project template family review, STD-010 validation, TPL-000 validation, README alignment validation, selection-guide validation, cross-template structural validation, and explicit Human Governance approval |
| Certification Status | Not certified |
---

## 1. Purpose

The Library Project Template extends the Generic Project Template for reusable packages, SDKs, shared libraries, and framework-independent modules. A library should expose stable contracts without assuming a host application.

This template is a documentation contract only. It does not create project authority, implement scaffolding, generate code, execute package management, configure runtime behavior, deploy systems, define CI/CD behavior, certify adoption, update registries, or update ProjectStatus.

## 2. Authority Boundary

Project templates produced from this file must consume existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities without redefining them. Framework-specific sections may extend the common project structure but must not redefine project, platform, framework, runtime, governance, review, certification, registry, implementation, or ProjectStatus authority.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Library Project |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Project Template Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Library Project Specification |
| `{{OWNER}}` | STRING | Owner | Yes | Project template adopter |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Project maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance and project governance reviewers |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance / project governance as applicable |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Project adoption documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Implementation logic, scaffolding behavior, code generation, runtime behavior, deployment logic, CI/CD behavior, package management execution, framework-specific execution, certification, registry updates, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Selected project template family; project identity; target platform facts |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities |
| `{{PRODUCES}}` | LIST | Produces | Yes | Library Project document structure and placeholder manifest |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Project template family and selection guide |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{PROJECT_NAME}}` | STRING | Not applicable | Yes | None |
| `{{PROJECT_TYPE}}` | STRING | Not applicable | Yes | Library |
| `{{TARGET_PLATFORM}}` | STRING | Not applicable | Yes | Reusable package |
| `{{HOST_FRAMEWORK}}` | STRING | Not applicable | Yes | No fixed host |
| `{{RUNTIME_CONTEXT}}` | STRING | Not applicable | Yes | Library/package runtime selected by project |
| `{{LANGUAGE_STACK}}` | STRING | Not applicable | Yes | Project-selected |
| `{{ARCHITECTURE_MODEL}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNANCE_OWNER}}` | STRING | Not applicable | Yes | None |
| `{{PROJECT_STATUS_POLICY}}` | STRING | Not applicable | Yes | Link to live ProjectStatus; do not update from template |
| `{{QUALITY_GATE}}` | STRING | Not applicable | Yes | None |
| `{{BASELINE_PATH}}` | STRING | Not applicable | Yes | None |
| `{{BASELINE_RESPONSIBILITY}}` | STRING | Not applicable | Yes | None |
| `{{BASELINE_AUTHORITY}}` | STRING | Not applicable | Yes | Existing authority only |
| `{{BOOT_STEP}}` | STRING | Not applicable | Yes | None |
| `{{BOOT_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{SECTION_NAME}}` | STRING | Not applicable | Yes | None |
| `{{SECTION_PURPOSE}}` | STRING | Not applicable | Yes | None |
| `{{BOUNDARY_RULE}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_GATE}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{RISK}}` | STRING | Not applicable | Yes | None |
| `{{MITIGATION}}` | STRING | Not applicable | Yes | None |

## 5. Project Template Identity

| Field | Value |
|:---|:---|
| Project Name | {{PROJECT_NAME}} |
| Project Type | Library |
| Target Platform | Reusable package |
| Host Framework | No fixed host |
| Runtime Context | Library/package runtime selected by project |
| Language Stack | Project-selected |
| Architecture Model | {{ARCHITECTURE_MODEL}} |
| Governance Owner | {{GOVERNANCE_OWNER}} |
| ProjectStatus Policy | {{PROJECT_STATUS_POLICY}} |

## 6. Required Baseline Files

| Path | Responsibility | Authority Boundary |
|:---|:---|:---|
| {{BASELINE_PATH}} | {{BASELINE_RESPONSIBILITY}} | {{BASELINE_AUTHORITY}} |

## 7. Required Baseline Rules

- `AGENTS.md` is project bootstrap authority.
- ProjectStatus is the live operational status source for the adopting project and must not be updated by this template.
- Project-specific architecture belongs in governed project architecture documents.
- Reference material is non-authoritative unless promoted through the adopting project's governance process.
- Implementation does not define architecture, governance, runtime, registry, review, certification, or ProjectStatus authority.
- Platform and integration adapters consume the framework and never redefine it.

## 8. Minimal Boot Sequence

| Step | Source | Purpose |
|:---|:---|:---|
| {{BOOT_STEP}} | {{BOOT_SOURCE}} | {{SECTION_PURPOSE}} |

## 9. Common Project Sections

| Section | Purpose |
|:---|:---|
| {{SECTION_NAME}} | {{SECTION_PURPOSE}} |

## 10. Project Boundary Rules

- {{BOUNDARY_RULE}}

## 11. Validation Expectations

| Gate | Evidence |
|:---|:---|
| {{VALIDATION_GATE}} | {{VALIDATION_EVIDENCE}} |

## 12. Risks

| Risk | Mitigation |
|:---|:---|
| {{RISK}} | {{MITIGATION}} |

## 13. Library Extension

A library should document public contracts clearly and avoid binding itself to a host framework unless that is its explicit purpose.

| Concern | Requirement |
|:---|:---|
| Public API | Documented and versioned. |
| Compatibility | Compatibility matrix required. |
| Breaking Changes | Migration guidance required. |
| Tests | Contract and regression evidence required. |
| Examples | Must not become hidden architecture. |

## 14. Completion Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Common project sections are present and structurally unchanged.
- [ ] Framework-specific sections extend the common structure without redefining it.
- [ ] Existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities are consumed without redefinition.
- [ ] No duplicate project, platform, framework, runtime, governance, review, certification, registry, implementation, or ProjectStatus authority is introduced.

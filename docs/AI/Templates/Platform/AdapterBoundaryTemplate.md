# Adapter Boundary Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLATFORM-ADAPTER-BOUNDARY` |
| Title | Adapter Boundary Template |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Platform Template |
| Document Type | Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | `FORGE-AI.TEMPLATES.PLATFORM.ADAPTER-BOUNDARY` |
| Scope | Reusable output contract for documenting boundaries between Forge AI authority, project templates, platform adapter documentation, and project implementation. |
| Out of Scope | Creating adapter implementation, integration, connector, runtime, API, registry, governance, certification, review, or ProjectStatus authority. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`; `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| Consumes | STD-010 metadata rules; TPL-000 placeholder grammar and validation requirements; existing authority boundaries |
| Produces | Adapter boundary documentation structure and placeholder manifest |
| Related Specifications | Platform Adapter Template; Adapter Capability Map Template; Adapter Validation Template; Integration templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Platform template family review, STD-010 validation, TPL-000 validation, boundary validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Use this template to document the exact boundary between Forge AI authority, a project template output, a platform adapter document, and a project implementation.

## 2. Authority Boundary

Boundary documents produced from this template must consume existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, Registry, STD-010, and TPL-000 authorities without redefining them.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Adapter Boundary |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Platform Adapter Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Adapter Boundary |
| `{{OWNER}}` | STRING | Owner | Yes | Target adapter owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Target adapter maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance and applicable platform reviewers |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Boundary documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Implementation, runtime behavior, connector/API behavior, registry persistence, governance, certification, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; applicable Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Applicable adapter and platform facts |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authority boundaries |
| `{{PRODUCES}}` | LIST | Produces | Yes | Adapter boundary documentation artifact |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Platform adapter, capability map, validation, integration, runtime, engine, context, knowledge, and registry references |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{ADAPTER_DOCUMENT_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{FORGE_AUTHORITY_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{PROJECT_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{PROJECT_TEMPLATE_SOURCE}}` | STRING | Not applicable | Yes | None |

## 5. Boundary Diagram

```text
Forge AI authority
    ↓ consumed by
Project template output
    ↓ specialized by
Platform adapter documentation
    ↓ applied by explicit implementation work only when authorized
Project implementation
```

## 6. Responsibility Matrix

| Boundary Layer | Owned Responsibilities | Authority Source | Must Not Own |
|:---|:---|:---|:---|
| Forge AI authority | Constitution, governance, standards, runtime, engine, context, knowledge, registry, review, certification, ProjectStatus rules | {{FORGE_AUTHORITY_SOURCE}} | Platform implementation details |
| Project template output | Reusable project-document structure | {{PROJECT_TEMPLATE_SOURCE}} | Runtime behavior or governance decisions |
| Platform adapter documentation | Platform-specific documentation conventions and validation evidence expectations | {{ADAPTER_DOCUMENT_SOURCE}} | Connector/API implementation, registry persistence, certification, ProjectStatus updates |
| Project implementation | Product source, project-specific files, platform code | {{PROJECT_SOURCE}} | Forge AI authority or template authority |

## 7. Forbidden Boundary Crossings

- Adapter redefining framework terminology, standards, governance, runtime, engine, context, knowledge, registry, review, certification, or ProjectStatus rules.
- Platform APIs, connectors, integrations, or registries becoming domain truth by default.
- Project implementation modifying framework authority by implication.
- Reference code becoming runtime dependency.
- Tooling replacing governance, review, certification, or ProjectStatus authority.

## 8. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Core, template, adapter, and project ownership are explicit.
- [ ] Existing authorities are consumed without redefinition.
- [ ] Forbidden boundary crossings are listed.
- [ ] Escalation path points to Human Governance without self-approval.

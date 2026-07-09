# Platform Adapter Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-PLATFORM-ADAPTER` |
| Title | Platform Adapter Template |
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
| Traceability ID | `FORGE-AI.TEMPLATES.PLATFORM.ADAPTER` |
| Scope | Reusable output contract for documenting how a platform adapter consumes Forge AI authority and applies platform-specific conventions without redefining framework, runtime, engine, registry, integration, governance, certification, or ProjectStatus authority. |
| Out of Scope | Implementing platform adapters, connectors, APIs, runtime behavior, authentication, transport, registry persistence, platform-specific execution, governance ownership, certification authority, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`; `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Forge AI template library; existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry boundaries |
| Produces | Platform adapter documentation structure and placeholder manifest |
| Related Specifications | Adapter Boundary Template; Adapter Capability Map Template; Adapter Validation Template; Architecture templates; Integration templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Platform template family review, STD-010 validation, TPL-000 validation, authority-reference validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Use this template to document a platform adapter as an output contract only. The produced document describes how an adapter applies existing Forge AI authority to a target platform while preserving ownership boundaries.

This template does not authorize implementation and does not create platform-adapter, integration, connector, runtime, API, registry, governance, review, certification, or ProjectStatus authority.

## 2. Authority Boundary

The produced document must consume existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, Registry, STD-010, and TPL-000 authorities without redefining them. Template ownership never transfers ownership of the produced document's target platform, adapter implementation, registry state, integration policy, governance decisions, or certification outcome.

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

Default produced-document classification is `Platform Adapter Artifact` and default document type is `Platform Adapter Specification`. Authors must replace defaults when the governed target artifact requires a more specific STD-010 value.

## 4. Placeholder Manifest

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---:|:---|
| `{{DOCUMENT_IDENTIFIER}}` | STRING | Identifier | Yes | None |
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Platform Adapter Specification |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Platform Adapter Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Platform Adapter Specification |
| `{{OWNER}}` | STRING | Owner | Yes | Target adapter owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Target adapter maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance and applicable platform reviewers |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Adapter documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Implementation, runtime behavior, connector/API behavior, registry persistence, governance, certification, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; template library; applicable Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Applicable platform-adapter and integration documentation inputs |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authority and platform facts |
| `{{PRODUCES}}` | LIST | Produces | Yes | Platform adapter documentation artifact |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Boundary, capability map, validation, integration, runtime, engine, context, knowledge, and registry references |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{BUILD_COMMAND}}` | STRING | Not applicable | Yes | None |
| `{{BUILD_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{BUILD_SYSTEM}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{ENGINE_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{ENGINE_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{ENGINE_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNANCE_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNANCE_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{GOVERNANCE_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{LINT_COMMAND}}` | STRING | Not applicable | Yes | None |
| `{{LINT_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{PACKAGE_MANAGER}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{RUNTIME_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{RUNTIME_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{RUNTIME_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{SECURITY_COMMAND}}` | STRING | Not applicable | Yes | None |
| `{{SECURITY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{STATIC_ANALYSIS_COMMAND}}` | STRING | Not applicable | Yes | None |
| `{{STATIC_ANALYSIS_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{TARGET_LANGUAGES}}` | STRING | Not applicable | Yes | None |
| `{{TARGET_PLATFORM}}` | STRING | Not applicable | Yes | None |
| `{{TARGET_RUNTIME}}` | STRING | Not applicable | Yes | None |
| `{{TEST_COMMAND}}` | STRING | Not applicable | Yes | None |
| `{{TEST_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{TEST_FRAMEWORK}}` | STRING | Not applicable | Yes | None |

## 5. Produced Document Structure

```markdown
# {{DOCUMENT_TITLE}}

## Document Metadata

## 1. Purpose
## 2. Target Platform
## 3. Adapter Position
## 4. Adapter Responsibilities
## 5. Adapter Boundaries
## 6. Platform Structure Mapping
## 7. Validation Commands
## 8. Compatibility Matrix
## 9. Authority Preservation
## 10. Completion Checklist
```

## 6. Target Platform

| Field | Value |
|:---|:---|
| Platform | {{TARGET_PLATFORM}} |
| Runtime | {{TARGET_RUNTIME}} |
| Language(s) | {{TARGET_LANGUAGES}} |
| Package Manager | {{PACKAGE_MANAGER}} |
| Test Framework | {{TEST_FRAMEWORK}} |
| Build System | {{BUILD_SYSTEM}} |

## 7. Adapter Position

```text
Forge AI authority
    ↓ consumed by
Project template output
    ↓ specialized by
Platform adapter documentation
    ↓ applied by explicit implementation work only when authorized
Target project implementation
```

## 8. Adapter Responsibilities

- Translate existing framework workflow expectations into documented platform-specific project operations.
- Identify platform-specific validation commands as documentation inputs.
- Map recommended project structure without creating runtime behavior.
- Identify platform-owned integration boundaries without defining connector or API authority.
- Preserve framework, runtime, engine, registry, governance, certification, and ProjectStatus authority.

## 9. Adapter Boundaries

### Adapter May

- Document platform-specific file layout conventions.
- Document platform-specific validation commands.
- Document platform-specific lifecycle hooks as constraints for future authorized implementation.
- Reference existing Integration, Runtime, Engine, Context, Knowledge, and Registry authorities.

### Adapter Must Not

- Redefine the Forge AI Constitution, Governance Atlas, FrameworkGovernance, ProjectStatus, or roadmap.
- Redefine Runtime, Engine, Context, Knowledge, Registry, Integration, connector, API, review, or certification authority.
- Implement platform adapters, connectors, APIs, authentication, transport, registry persistence, or platform-specific execution.
- Advance or update ProjectStatus.
- Treat platform APIs, registries, or tooling as domain truth by default.

## 10. Validation Commands

| Gate | Command | Required | Evidence |
|:---|:---|:---|:---|
| Build | {{BUILD_COMMAND}} | Yes / No / Conditional | {{BUILD_EVIDENCE}} |
| Test | {{TEST_COMMAND}} | Yes / No / Conditional | {{TEST_EVIDENCE}} |
| Static Analysis | {{STATIC_ANALYSIS_COMMAND}} | Yes / No / Conditional | {{STATIC_ANALYSIS_EVIDENCE}} |
| Lint | {{LINT_COMMAND}} | Yes / No / Conditional | {{LINT_EVIDENCE}} |
| Security | {{SECURITY_COMMAND}} | Yes / No / Conditional | {{SECURITY_EVIDENCE}} |

## 11. Compatibility Matrix

| Forge AI Surface | Adapter Behavior | Authority Source | Validation Evidence |
|:---|:---|:---|:---|
| Governance | {{GOVERNANCE_BEHAVIOR}} | {{GOVERNANCE_AUTHORITY}} | {{GOVERNANCE_EVIDENCE}} |
| ProjectStatus | {{PROJECTSTATUS_BEHAVIOR}} | {{PROJECTSTATUS_AUTHORITY}} | {{PROJECTSTATUS_EVIDENCE}} |
| Runtime | {{RUNTIME_BEHAVIOR}} | {{RUNTIME_AUTHORITY}} | {{RUNTIME_EVIDENCE}} |
| Engine | {{ENGINE_BEHAVIOR}} | {{ENGINE_AUTHORITY}} | {{ENGINE_EVIDENCE}} |
| Context | {{CONTEXT_BEHAVIOR}} | {{CONTEXT_AUTHORITY}} | {{CONTEXT_EVIDENCE}} |
| Knowledge | {{KNOWLEDGE_BEHAVIOR}} | {{KNOWLEDGE_AUTHORITY}} | {{KNOWLEDGE_EVIDENCE}} |
| Registry | {{REGISTRY_BEHAVIOR}} | {{REGISTRY_AUTHORITY}} | {{REGISTRY_EVIDENCE}} |
| Integration | {{INTEGRATION_BEHAVIOR}} | {{INTEGRATION_AUTHORITY}} | {{INTEGRATION_EVIDENCE}} |

## 12. Completion Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Existing authorities are consumed without redefinition.
- [ ] No implementation, connector, API, runtime, registry persistence, governance, certification, or ProjectStatus authority is introduced.
- [ ] Validation commands are documented as evidence requirements only.

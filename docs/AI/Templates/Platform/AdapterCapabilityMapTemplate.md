# Adapter Capability Map Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLATFORM-ADAPTER-CAPABILITY-MAP` |
| Title | Adapter Capability Map Template |
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
| Traceability ID | `AI-DOS.TEMPLATES.PLATFORM.ADAPTER-CAPABILITY-MAP` |
| Scope | Reusable output contract for mapping existingAI-DOS capabilities to documented target-platform equivalents without creating implementation or authority. |
| Out of Scope | Implementing platform capabilities, connectors, APIs, runtime behavior, authentication, transport, registry persistence, platform-specific execution, governance ownership, certification authority, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md`; `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| Consumes | STD-010 metadata rules; TPL-000 placeholder grammar and validation requirements; existingAI-DOS capability authorities |
| Produces | Adapter capability map documentation structure and placeholder manifest |
| Related Specifications | Platform Adapter Template; Adapter Boundary Template; Adapter Validation Template; Integration templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Platform template family review, STD-010 validation, TPL-000 validation, capability-boundary validation, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Use this template to mapAI-DOS capabilities to target-platform equivalents for documentation and review. The produced map records whether a target platform can support a capability, which existing authority governs it, and what validation evidence is expected.

## 2. Authority Boundary

Capability maps produced from this template consume existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, Registry, STD-010, and TPL-000 authorities without redefining them. A mapped capability is not implementation approval, certification, registry admission, or ProjectStatus authorization.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Adapter Capability Map |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Platform Adapter Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Adapter Capability Map |
| `{{OWNER}}` | STRING | Owner | Yes | Target adapter owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Target adapter maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance and applicable platform reviewers |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Capability mapping documentation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Implementation, runtime behavior, connector/API behavior, registry persistence, governance, certification, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; applicable Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Applicable adapter and platform facts |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing capability authorities and platform facts |
| `{{PRODUCES}}` | LIST | Produces | Yes | Adapter capability map documentation artifact |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Platform adapter, boundary, validation, integration, runtime, engine, context, knowledge, and registry references |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{CERTIFICATION_AUTHORITY_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{CERTIFICATION_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{CERTIFICATION_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{CERTIFICATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{CONTEXT_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{ESCALATION_PATH}}` | STRING | Not applicable | Yes | None |
| `{{EXTENSION_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{EXTENSION_BOUNDARY}}` | STRING | Not applicable | Yes | None |
| `{{EXTENSION_NAME}}` | STRING | Not applicable | Yes | None |
| `{{EXTENSION_PURPOSE}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{KNOWLEDGE_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_AUTHORITY_SOURCE}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{REVIEW_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{TOOLING_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{TOOLING_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{TOOLING_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{TOOLING_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{UNSUPPORTED_CAPABILITY}}` | STRING | Not applicable | Yes | None |
| `{{UNSUPPORTED_REASON}}` | STRING | Not applicable | Yes | None |
| `{{UNSUPPORTED_WORKAROUND}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_AUTHORITY}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_BEHAVIOR}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_EQUIVALENT}}` | STRING | Not applicable | Yes | None |
| `{{VALIDATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |

## 5. Capability Map

|AI-DOS Capability | Platform Equivalent | Adapter Behavior | Authority Source | Validation Evidence |
|:---|:---|:---|:---|:---|
| ProjectStatus consumption | {{PROJECTSTATUS_EQUIVALENT}} | {{PROJECTSTATUS_BEHAVIOR}} | {{PROJECTSTATUS_AUTHORITY}} | {{PROJECTSTATUS_EVIDENCE}} |
| Command execution | {{COMMAND_EQUIVALENT}} | {{COMMAND_BEHAVIOR}} | {{COMMAND_AUTHORITY}} | {{COMMAND_EVIDENCE}} |
| Validation | {{VALIDATION_EQUIVALENT}} | {{VALIDATION_BEHAVIOR}} | {{VALIDATION_AUTHORITY}} | {{VALIDATION_EVIDENCE}} |
| Review | {{REVIEW_EQUIVALENT}} | {{REVIEW_BEHAVIOR}} | {{REVIEW_AUTHORITY_SOURCE}} | {{REVIEW_EVIDENCE}} |
| Certification | {{CERTIFICATION_EQUIVALENT}} | {{CERTIFICATION_BEHAVIOR}} | {{CERTIFICATION_AUTHORITY_SOURCE}} | {{CERTIFICATION_EVIDENCE}} |
| Context | {{CONTEXT_EQUIVALENT}} | {{CONTEXT_BEHAVIOR}} | {{CONTEXT_AUTHORITY}} | {{CONTEXT_EVIDENCE}} |
| Knowledge | {{KNOWLEDGE_EQUIVALENT}} | {{KNOWLEDGE_BEHAVIOR}} | {{KNOWLEDGE_AUTHORITY}} | {{KNOWLEDGE_EVIDENCE}} |
| Registry | {{REGISTRY_EQUIVALENT}} | {{REGISTRY_BEHAVIOR}} | {{REGISTRY_AUTHORITY}} | {{REGISTRY_EVIDENCE}} |
| Integration | {{INTEGRATION_EQUIVALENT}} | {{INTEGRATION_BEHAVIOR}} | {{INTEGRATION_AUTHORITY}} | {{INTEGRATION_EVIDENCE}} |
| Tooling | {{TOOLING_EQUIVALENT}} | {{TOOLING_BEHAVIOR}} | {{TOOLING_AUTHORITY}} | {{TOOLING_EVIDENCE}} |

## 6. Unsupported Capabilities

| Capability | Reason | Workaround | Escalation Path |
|:---|:---|:---|:---|
| {{UNSUPPORTED_CAPABILITY}} | {{UNSUPPORTED_REASON}} | {{UNSUPPORTED_WORKAROUND}} | {{ESCALATION_PATH}} |

## 7. Platform-Specific Extensions

| Extension | Purpose | Boundary | Authority Source |
|:---|:---|:---|:---|
| {{EXTENSION_NAME}} | {{EXTENSION_PURPOSE}} | {{EXTENSION_BOUNDARY}} | {{EXTENSION_AUTHORITY}} |

## 8. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] All framework capabilities are mapped or explicitly unsupported.
- [ ] Unsupported capabilities include rationale and escalation path.
- [ ] Platform extensions do not redefine core, integration, runtime, engine, context, knowledge, registry, governance, review, certification, or ProjectStatus authority.
- [ ] Validation evidence exists for mapped behaviors.

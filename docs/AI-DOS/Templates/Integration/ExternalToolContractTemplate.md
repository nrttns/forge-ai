# External Tool Contract Template

>AI-DOS v2 · Integration Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-INTEGRATION-EXTERNAL-TOOL-CONTRACT` |
| Title | External Tool Contract Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Integration Template |
| Document Type | Template |
| Owner | Template System |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.TEMPLATES.INTEGRATION.EXTERNAL-TOOL-CONTRACT` |
| Scope | Defines the reusable documentation structure for how an external tool may be used by agents, automation, or project workflows. |
| Out of Scope | Integration authority redefinition, connector authority redefinition, external-tool authority redefinition, platform-adapter authority redefinition, runtime authority redefinition, API authority creation, registry authority creation, governance authority creation, review authority creation, certification authority creation, ProjectStatus updates, connector implementation, API implementation, platform-adapter implementation, runtime behavior implementation, external tool behavior implementation, authentication flow implementation, transport protocol definition, registry persistence implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `AGENTS.md`; `docs/AI-DOS/AgentSystemPrompt.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Templates/Knowledge/KnowledgeRegistryTemplate.md`; `docs/AI-DOS/Templates/Platform/`; `docs/AI-DOS/Templates/Context/`; `docs/AI-DOS/Templates/Knowledge/` |
| Dependencies | AGENTS.md bootloader; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2 boundaries; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime, Engine, Context, Knowledge, Registry, and Platform authority inputs |
| Consumes | Integration documentation boundaries; connector and external-tool documentation boundaries; runtime and engine boundaries; context, knowledge, registry, and platform consumption rules; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable external tool contract artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Integration/`; `docs/AI-DOS/Templates/Platform/`; `docs/AI-DOS/Templates/Runtime/`; `docs/AI-DOS/Templates/Context/`; `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/Validation/`; `docs/AI-DOS/Templates/README.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, integration authority reference validation, duplicate-authority validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Defines the reusable documentation structure for how an external tool may be used by agents, automation, or project workflows.

This template is an output contract only. It consumes existing AGENTS, Runtime, Engine, Context, Knowledge, Registry, Platform, STD-010, and TPL-000 authority without redefining integration, connector, external-tool, platform-adapter, runtime, API, governance, review, certification, registry, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to produce a `External Tool Contract` artifact when the active task explicitly needs that artifact type.

Do not use this template to implement connectors, APIs, platform adapters, runtime behavior, external tool behavior, authentication flows, transport protocols, registry persistence, approval authority, certification authority, governance authority, or ProjectStatus updates.

---

## 3. Authority Boundaries

Artifacts produced from this template may document integration-facing scope, capabilities, contracts, registry entries, permissions, validation evidence, risks, and lifecycle notes, but they must not replace `AGENTS.md`, Agent System Prompt, AI Framework, AI Orchestrator, Runtime Architecture, Engine Architecture, Context, Knowledge, Registry, Platform, validation, review, certification, governance, or ProjectStatus authority.

---

## Produced Document Metadata

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section. Placeholder values must be resolved before the produced document is treated as complete.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | {{DOCUMENT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED}} |
| Last Updated | {{LAST_UPDATED}} |
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
Default produced-document classification is `Integration Artifact` and default document type is `External Tool Contract`.

---

## Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Yes | Author-provided |
| `{{TITLE}}` | TEXT | Title | Yes | Author-provided |
| `{{VERSION}}` | VERSION | Version | Yes | `0.1.0-draft` |
| `{{STATUS}}` | STATUS | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | TEXT | Canonical Status | Yes | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Integration Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | Author-provided |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Author-provided |
| `{{REVIEW_AUTHORITY}}` | TEXT | Review Authority | Yes | Author-provided |
| `{{APPROVAL_AUTHORITY}}` | TEXT | Approval Authority | Yes | Author-provided |
| `{{CREATED}}` | DATE | Created | Yes | Author-provided |
| `{{LAST_UPDATED}}` | DATE | Last Updated | Yes | Author-provided |
| `{{LIFECYCLE_PHASE}}` | TEXT | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | IDENTIFIER | Traceability ID | Yes | Author-provided |
| `{{SCOPE}}` | TEXT | Scope | Yes | Author-provided |
| `{{OUT_OF_SCOPE}}` | TEXT | Out of Scope | Yes | Author-provided |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Author-provided |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | AGENTS.md; Agent System Prompt; AI Framework; AI Orchestrator; Runtime; Engine; Context; Knowledge; Registry; Platform; STD-010; TPL-000 |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{TOOL_NAME}}` | TEXT | Body content | Yes | Author-provided |
| `{{TOOL_OWNER}}` | TEXT | Body content | Yes | Author-provided |
| `{{TOOL_STATUS}}` | STATUS | Body content | Yes | Draft |
| `{{PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{TOOL_SUMMARY}}` | TABLE | Body content | Yes | Author-provided |
| `{{ALLOWED_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{FORBIDDEN_USE}}` | LIST | Body content | Yes | Author-provided |
| `{{INPUTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{OUTPUTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{VALIDATION}}` | TABLE | Body content | Yes | Author-provided |
| `{{RISK_CONTROLS}}` | LIST | Body content | Yes | Author-provided |
| `{{DEPRECATION_OR_REPLACEMENT}}` | TEXT | Body content | Yes | Author-provided |
| `{{COMPLETION_CHECKLIST}}` | CHECKLIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{PURPOSE}}

---

## 2. Tool Identity

| Field | Value |
|:---|:---|
| Tool Name | {{TOOL_NAME}} |
| Tool Owner | {{TOOL_OWNER}} |
| Tool Status | {{TOOL_STATUS}} |

---

## 3. Tool Summary

{{TOOL_SUMMARY}}

---

## 4. Allowed Use

{{ALLOWED_USE}}

---

## 5. Forbidden Use

{{FORBIDDEN_USE}}

---

## 6. Inputs

{{INPUTS}}

---

## 7. Outputs

{{OUTPUTS}}

---

## 8. Validation

{{VALIDATION}}

---

## 9. Risk Controls

{{RISK_CONTROLS}}

---

## 10. Deprecation / Replacement

{{DEPRECATION_OR_REPLACEMENT}}

---

## 11. Completion Checklist

{{COMPLETION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Integration, connector, external-tool, platform-adapter, runtime, API, governance, review, certification, registry, and ProjectStatus authorities are consumed rather than redefined.
- Produced artifacts do not implement connectors, APIs, platform adapters, runtime behavior, external tool behavior, authentication flows, transport protocols, registry persistence, engine behavior, governance authority, review authority, certification authority, or ProjectStatus updates.

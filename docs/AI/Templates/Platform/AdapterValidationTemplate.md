# Adapter Validation Template

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLATFORM-ADAPTER-VALIDATION` |
| Title | Adapter Validation Template |
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
| Traceability ID | `AI-DOS.TEMPLATES.PLATFORM.ADAPTER-VALIDATION` |
| Scope | Reusable output contract for validating that platform adapter documentation preservesAI-DOS authority and safely maps platform-specific constraints. |
| Out of Scope | Certifying adapters, approving implementations, implementing connectors or APIs, executing runtime behavior, persisting registry entries, changing governance ownership, or updating ProjectStatus. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4.3-Engine-Registry-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.2-Knowledge-Engine-RFC.md`; `docs/AI/Architecture/RFC/EngineSpecializations/A.5.12-Registry-Engine-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| Consumes | STD-010 metadata rules; TPL-000 placeholder grammar and validation requirements; adapter documentation evidence |
| Produces | Adapter validation report structure and placeholder manifest |
| Related Specifications | Platform Adapter Template; Adapter Boundary Template; Adapter Capability Map Template; Integration templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Platform template family review, STD-010 validation, TPL-000 validation, validation-scope review, placeholder validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Use this template to validate platform adapter documentation. Validation determines whether the adapter documentation preservesAI-DOS authority, not whether an adapter implementation is certified, approved, deployed, or registered.

## 2. Authority Boundary

Validation reports produced from this template consume existing Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, Registry, STD-010, and TPL-000 authorities without redefining them. A validation verdict is evidence for review and does not replace governance approval, certification authority, registry ownership, or ProjectStatus policy.

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
| `{{DOCUMENT_TITLE}}` | STRING | Title | Yes | Adapter Validation Report |
| `{{DOCUMENT_VERSION}}` | STRING | Version | Yes | `0.1.0-draft` |
| `{{DOCUMENT_STATUS}}` | ENUM | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | STRING | Canonical Status | Yes | Non-canonical until reviewed and approved |
| `{{CLASSIFICATION}}` | STRING | Classification | Yes | Platform Adapter Artifact |
| `{{DOCUMENT_TYPE}}` | STRING | Document Type | Yes | Adapter Validation Report |
| `{{OWNER}}` | STRING | Owner | Yes | Target adapter owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Target adapter maintainers |
| `{{REVIEW_AUTHORITY}}` | STRING | Review Authority | Yes | Framework Governance and applicable platform reviewers |
| `{{APPROVAL_AUTHORITY}}` | STRING | Approval Authority | Yes | Human Governance |
| `{{CREATED_DATE}}` | DATE | Created | Yes | Current date |
| `{{LAST_UPDATED_DATE}}` | DATE | Last Updated | Yes | Current date |
| `{{LIFECYCLE_PHASE}}` | STRING | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | STRING | Traceability ID | Yes | None |
| `{{SCOPE}}` | STRING | Scope | Yes | Adapter documentation validation scope only |
| `{{OUT_OF_SCOPE}}` | STRING | Out of Scope | Yes | Certification, implementation approval, runtime behavior, connector/API behavior, registry persistence, governance ownership, ProjectStatus updates |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Human Governance; AGENTS.md; Governance Atlas; FrameworkGovernance |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-010; TPL-000; applicable Platform Adapter, Integration, Runtime, Engine, Context, Knowledge, and Registry authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Adapter documentation under validation |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Existing authority and validation evidence |
| `{{PRODUCES}}` | LIST | Produces | Yes | Adapter validation report |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | Platform adapter, boundary, capability map, integration, runtime, engine, context, knowledge, and registry references |
| `{{SUPERSEDES}}` | STRING | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | STRING | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | STRING | Promotion Requirements | Yes | Review, validation, and explicit approval |
| `{{CERTIFICATION_STATUS}}` | STRING | Certification Status | Yes | Not certified |
| `{{AUTHORITY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{AUTHORITY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{BOUNDARY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{BOUNDARY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{COMMAND_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{FINDING_DESCRIPTION}}` | STRING | Not applicable | Yes | None |
| `{{FINDING_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{FINDING_ID}}` | STRING | Not applicable | Yes | None |
| `{{FINDING_RECOMMENDATION}}` | STRING | Not applicable | Yes | None |
| `{{INDEPENDENCE_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{INDEPENDENCE_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{INTEGRATION_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{PROJECTSTATUS_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{REGISTRY_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{STD010_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{STD010_NOTES}}` | STRING | Not applicable | Yes | None |
| `{{TPL000_EVIDENCE}}` | STRING | Not applicable | Yes | None |
| `{{TPL000_NOTES}}` | STRING | Not applicable | Yes | None |

## 5. Validation Scope

### In Scope

- Adapter authority consumption.
- Boundary preservation.
- Platform-specific validation evidence.
- Project template compatibility.
- Dependency direction.
- Documentation consistency.
- Registry, integration, runtime, engine, context, and knowledge authority preservation.

### Out of Scope

- Product implementation correctness.
- Framework core redesign.
- Runtime behavior, connector/API behavior, authentication, transport, or registry persistence.
- Certification, canonical promotion, governance approval, or ProjectStatus updates.

## 6. Validation Areas

| Area | Result | Evidence | Notes |
|:---|:---|:---|:---|
| STD-010 metadata coverage | PASS / FAIL / OBSERVATION | {{STD010_EVIDENCE}} | {{STD010_NOTES}} |
| TPL-000 placeholder alignment | PASS / FAIL / OBSERVATION | {{TPL000_EVIDENCE}} | {{TPL000_NOTES}} |
| Authority preservation | PASS / FAIL / OBSERVATION | {{AUTHORITY_EVIDENCE}} | {{AUTHORITY_NOTES}} |
| Boundary preservation | PASS / FAIL / OBSERVATION | {{BOUNDARY_EVIDENCE}} | {{BOUNDARY_NOTES}} |
| Validation commands | PASS / FAIL / OBSERVATION | {{COMMAND_EVIDENCE}} | {{COMMAND_NOTES}} |
| ProjectStatus handling | PASS / FAIL / OBSERVATION | {{PROJECTSTATUS_EVIDENCE}} | {{PROJECTSTATUS_NOTES}} |
| Registry authority preservation | PASS / FAIL / OBSERVATION | {{REGISTRY_EVIDENCE}} | {{REGISTRY_NOTES}} |
| Integration authority preservation | PASS / FAIL / OBSERVATION | {{INTEGRATION_EVIDENCE}} | {{INTEGRATION_NOTES}} |
| Framework independence | PASS / FAIL / OBSERVATION | {{INDEPENDENCE_EVIDENCE}} | {{INDEPENDENCE_NOTES}} |

## 7. Findings

| ID | Severity | Description | Evidence | Recommendation |
|:---|:---|:---|:---|:---|
| {{FINDING_ID}} | INFO / WARNING / BLOCKER | {{FINDING_DESCRIPTION}} | {{FINDING_EVIDENCE}} | {{FINDING_RECOMMENDATION}} |

## 8. Verdict

```text
PASS
PASS WITH OBSERVATIONS
REQUIRES FOLLOW-UP
FAILED
```

## 9. Certification Readiness Signal

- [ ] Ready for governance review evidence only.
- [ ] Ready for review with observations.
- [ ] Not ready for review.
- [ ] Blocked.

This signal is not certification and does not approve implementation, registry admission, canonical promotion, or ProjectStatus updates.

## 10. Validation Checklist

- [ ] STD-010 metadata is complete and resolved.
- [ ] TPL-000 placeholder usage is complete and consistent.
- [ ] Existing authorities are consumed without redefinition.
- [ ] No duplicate platform-adapter, integration, governance ownership, registry ownership, review, certification, or ProjectStatus authority is introduced.

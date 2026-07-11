# Runtime Context Template

>AI-DOS v2 · Runtime Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-RUNTIME-CONTEXT` |
| Title | Runtime Context Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Runtime Template |
| Document Type | Template |
| Owner | Runtime System Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.TEMPLATES.RUNTIME.CONTEXT` |
| Scope | Defines the reusable structure for documenting the active runtime context used by an agent or coordinated execution unit, including actor details, task scope, runtime inputs, constraints, required outputs, and release conditions. |
| Out of Scope | Runtime authority redefinition, engine authority redefinition, context authority redefinition, workflow authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, workflow implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.4-Decision-Engine-RFC.md`; `docs/AI/System/ContextAssembly.md` |
| Dependencies | STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime Architecture RFC; Engine Architecture RFC; Decision Engine RFC where decision context is applicable; System Context Assembly;AI-DOS template library |
| Consumes | STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; Runtime, Engine, Decision, and Context boundaries |
| Produces | Reusable runtime context artifact structure |
| Related Specifications | `docs/AI/Templates/Runtime/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Validation/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, runtime authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Document the active runtime context used by an agent or coordinated execution unit.

This template documents runtime context only. It does not implement runtime behavior, define a runtime engine, activate multi-agent or swarm runtime, create workflow authority, approve execution, certify output, or update ProjectStatus.

---

## 2. When To Use This Template

Use this template to record active runtime context for an agent, automation, or coordinated execution unit within approved task scope.

Do not use this template to implement runtime behavior, expand task scope, override architecture, override ProjectStatus, use memory as authority, or skip validation/review.

---

## 3. Authority Boundaries

Runtime context documents produced from this template may record actor, inputs, constraints, outputs, and release conditions, but they must not redefine Runtime Architecture, Engine Architecture, Context authority, Workflow authority, Validation authority, Review authority, Certification authority, Governance authority, or ProjectStatus.

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
Default produced-document classification is `Runtime Artifact` and default document type is `Runtime Context`.

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
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Runtime Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | Runtime System Owner |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | STD-003; STD-010; TPL-000; applicable Runtime, Engine, Context, and Decision authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{RUNTIME_CONTEXT_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{RUNTIME_ACTOR}}` | TEXT | Body content | Yes | Author-provided |
| `{{TASK_SCOPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{RUNTIME_ACTOR_DETAILS}}` | TABLE | Body content | Yes | Author-provided |
| `{{RUNTIME_INPUTS}}` | LIST | Body content | Yes | Author-provided |
| `{{RUNTIME_CONSTRAINTS}}` | LIST | Body content | Yes | Author-provided |
| `{{RUNTIME_OUTPUTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{RELEASE_CONDITIONS}}` | TEXT | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Runtime Context Identity

| Field | Value |
|:---|:---|
| Runtime Context ID | `{{RUNTIME_CONTEXT_ID}}` |
| Runtime Actor | {{RUNTIME_ACTOR}} |
| Task Scope | {{TASK_SCOPE}} |

---

## 2. Runtime Actor

{{RUNTIME_ACTOR_DETAILS}}

---

## 3. Runtime Inputs

{{RUNTIME_INPUTS}}

---

## 4. Runtime Constraints

{{RUNTIME_CONSTRAINTS}}

---

## 5. Runtime Output

{{RUNTIME_OUTPUTS}}

---

## 6. Release Conditions

{{RELEASE_CONDITIONS}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Runtime actor, task scope, inputs, constraints, outputs, and release conditions are explicit.
- Runtime constraints preserve architecture, ProjectStatus, validation, review, memory, and scope boundaries.
- Runtime output expectations remain artifacts and evidence, not implementation behavior or certification.
- Produced artifacts do not implement runtime behavior, approve execution, certify, promote, or update ProjectStatus.

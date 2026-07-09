# Decision Context Template

> Forge AI v2 · Runtime Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-RUNTIME-DECISION-CONTEXT` |
| Title | Decision Context Template |
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
| Traceability ID | `FORGE-AI.V2.TEMPLATES.RUNTIME.DECISION-CONTEXT` |
| Scope | Defines the reusable structure for documenting the context required to make a governed decision, including the decision question, inputs, constraints, options, rule, decision, rationale, impact, and follow-up. |
| Out of Scope | Runtime authority redefinition, engine authority redefinition, context authority redefinition, workflow authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, ProjectStatus updates, runtime implementation, engine implementation, workflow implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/Runtime/A.5.4-Decision-Engine-RFC.md`; `docs/AI/System/ContextAssembly.md` |
| Dependencies | STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime Architecture RFC; Engine Architecture RFC; Decision Engine RFC where decision context is applicable; System Context Assembly; Forge AI template library |
| Consumes | STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; Runtime, Engine, Decision, and Context boundaries |
| Produces | Reusable decision context artifact structure |
| Related Specifications | `docs/AI/Templates/Runtime/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Validation/`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, runtime authority reference validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Document the context required to make a governed decision.

This template is an output contract only. It consumes existing Runtime, Engine, Context, Decision, STD-003, STD-010, and TPL-000 authority without redefining runtime, context, engine, workflow, validation, review, certification, governance, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to capture the information needed for a governed strategic, tactical, or operational decision.

Do not use this template to create decision authority, approve implementation, redefine Runtime or Engine architecture, certify an outcome, or update ProjectStatus.

---

## 3. Authority Boundaries

Decision context documents produced from this template may record inputs and rationale for a decision, but they do not replace the authority, policy, or governance rule that decides the outcome.

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
Default produced-document classification is `Runtime Artifact` and default document type is `Decision Context`.

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
| `{{DECISION_CONTEXT_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{DECISION_TYPE}}` | TEXT | Body content | Yes | Author-provided |
| `{{DECISION_QUESTION}}` | TEXT | Body content | Yes | Author-provided |
| `{{DECISION_INPUTS}}` | TABLE | Body content | Yes | Author-provided |
| `{{CONSTRAINTS}}` | LIST | Body content | Yes | Author-provided |
| `{{OPTIONS}}` | TABLE | Body content | Yes | Author-provided |
| `{{DECISION_RULE}}` | TEXT | Body content | Yes | Author-provided |
| `{{DECISION}}` | TEXT | Body content | Yes | Author-provided |
| `{{RATIONALE}}` | TEXT | Body content | Yes | Author-provided |
| `{{IMPACT}}` | TABLE | Body content | Yes | Author-provided |
| `{{FOLLOW_UP}}` | LIST | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Decision Question

{{DECISION_QUESTION}}

---

## 2. Decision Identity

| Field | Value |
|:---|:---|
| Decision Context ID | `{{DECISION_CONTEXT_ID}}` |
| Decision Type | {{DECISION_TYPE}} |

---

## 3. Decision Inputs

{{DECISION_INPUTS}}

---

## 4. Constraints

{{CONSTRAINTS}}

---

## 5. Options

{{OPTIONS}}

---

## 6. Decision Rule

{{DECISION_RULE}}

---

## 7. Decision

{{DECISION}}

---

## 8. Rationale

{{RATIONALE}}

---

## 9. Impact

{{IMPACT}}

---

## 10. Follow-up

{{FOLLOW_UP}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Decision inputs cite applicable Runtime, Engine, Context, governance, and task authorities.
- Decision rule identifies the existing authority or policy that decides the outcome.
- Follow-up items are recommendations or required downstream work, not automatic ProjectStatus updates.
- Produced artifacts do not approve implementation, certify, promote, redefine Runtime or Engine architecture, or update ProjectStatus.

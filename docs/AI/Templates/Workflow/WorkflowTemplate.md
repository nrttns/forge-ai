# Workflow Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-WF-WORKFLOW` |
| Title | Workflow Template |
| Version | 0.2.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Workflow Template |
| Document Type | Template |
| Owner | Template System |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-AI.TEMPLATES.WORKFLOW.WORKFLOW |
| Scope | Reusable template for workflow documents in the Workflow template family |
| Out of Scope | Architecture decisions, code implementation, certification, or project-state update authority by itself |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Forge AI template routing; Operational Core workflow, command, and orchestration authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing workflow, command, and orchestration routing authority |
| Produces | Workflow document |
| Related Specifications | Workflow template family files under `docs/AI/Templates/Workflow/` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed workflow document. It is an output contract only: it consumes existing workflow, command, and orchestration authorities without redefining them.

## 2. When To Use This Template

Use this template only when the artifact being authored matches this template's workflow document type. Use the smallest Workflow template that fits the artifact, and use Architecture or Validation templates when the output is outside workflow routing.

## 3. Authority and Ownership

The template consumes STD-010, TPL-000, `docs/AI/Templates/README.md`, `docs/AI/AIFramework.md`, `docs/AI/AIOrchestrator.md`, and `docs/AI/AgentSystemPrompt.md`. The produced document must declare its own Owner, Maintainers, Review Authority, Approval Authority, Normative Authority, and Normative References. Template ownership remains with Template System and does not become workflow execution authority.

## 4. Produced-Document Metadata Guidance

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section using TPL-000 placeholders until values are resolved. Do not add template-specific metadata fields that compete with STD-010.

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
| Traceability ID | {{TRACEABILITY_ID}} |
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

## 5. Required Structure

1. Document Metadata
2. Workflow Identity
3. Purpose
4. Authority
5. Inputs
6. Outputs
7. Lifecycle
8. Roles and Responsibilities
9. Allowed Actions
10. Forbidden Actions
11. Decision Points
12. Validation Requirements
13. Review Requirements
14. Certification Boundary
15. Project State Impact
16. Failure Handling
17. Related Templates
18. Completion Criteria
19. Completion Checklist

## 6. Section Requirements

A workflow routes work through a governed lifecycle. It does not decide architecture, implement code, certify work, or update project state by itself.

```text
State
    ↓
Context
    ↓
Planning
    ↓
Command Selection
    ↓
Execution
    ↓
Validation
    ↓
Review
    ↓
Certification
    ↓
State Update, only when permitted
```

Roles and responsibilities must identify workflow owner, executor, reviewer, certifier, and human authority when applicable without creating duplicate authority.

## 7. Allowed Content

- Workflow identity, purpose, authority, inputs, outputs, lifecycle, roles, allowed and forbidden actions, decision points, validation, review, certification boundary, project-state impact, failure handling, related templates, and completion criteria.

## 8. Forbidden Content

- Architecture decisions, implementation scope, certification claims, ProjectStatus updates by the workflow itself, or duplicate workflow/command/orchestration authority.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm workflow authority consumes existing workflow, command, and orchestration authorities.
- Confirm lifecycle, roles, decision points, failure handling, validation, and review are defined.
- Confirm Project State Impact is bounded by the dedicated state workflow and Human Governance approval rules.

## 10. Completion Checklist

- [ ] Metadata complete
- [ ] Purpose clear
- [ ] Authority chain documented
- [ ] Inputs and outputs defined
- [ ] Lifecycle ordered
- [ ] Decision points documented
- [ ] Allowed and forbidden actions clear
- [ ] Validation requirements defined
- [ ] Review requirements defined
- [ ] Certification boundary defined
- [ ] Project state impact defined
- [ ] Failure handling documented
- [ ] References verified

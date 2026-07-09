# Execution Plan Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-WF-EXECUTION-PLAN` |
| Title | Execution Plan Template |
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
| Traceability ID | FORGE-AI.TEMPLATES.WORKFLOW.EXECUTION-PLAN |
| Scope | Reusable template for execution plans in the Workflow template family |
| Out of Scope | Creating new architecture, replacing phase/stage planning, certifying completion, or updating ProjectStatus |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Forge AI template routing; Operational Core workflow, command, and orchestration authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing workflow, command, and orchestration routing authority |
| Produces | Execution plan |
| Related Specifications | Workflow template family files under `docs/AI/Templates/Workflow/` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed execution plan. It is an output contract only: it consumes existing workflow, command, and orchestration authorities without redefining them.

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
2. Execution Plan Identification
3. Objective
4. Scope
5. Preconditions
6. Work Breakdown
7. Dependency Order
8. Validation Plan
9. Review Plan
10. Rollback / Recovery
11. Completion Criteria
12. Handoff
13. Completion Checklist

## 6. Section Requirements

An execution plan turns approved scope into ordered work. It does not create new architecture and does not replace phase, stage, or capability planning.

| Step | Action | Owner | Inputs | Outputs | Validation |
|:---|:---|:---|:---|:---|:---|
| `{{STEP}}` | `{{ACTION}}` | `{{OWNER}}` | `{{INPUTS}}` | `{{OUTPUTS}}` | `{{VALIDATION}}` |

## 7. Allowed Content

- Objective, bounded scope, preconditions, ordered work breakdown, dependencies, validation plan, review plan, rollback/recovery, completion criteria, and handoff.

## 8. Forbidden Content

- New architecture, roadmap advancement, certification claims, unapproved implementation expansion, or ProjectStatus updates.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm scope and preconditions match approved work.
- Confirm work breakdown is ordered and dependency-safe.
- Confirm validation, review, rollback/recovery, completion criteria, and handoff are defined.

## 10. Completion Checklist

- [ ] Objective clear
- [ ] Scope bounded
- [ ] Preconditions listed
- [ ] Work breakdown ordered
- [ ] Dependencies documented
- [ ] Validation plan defined
- [ ] Review plan defined
- [ ] Rollback or blocker handling defined
- [ ] Completion criteria defined
- [ ] Handoff defined

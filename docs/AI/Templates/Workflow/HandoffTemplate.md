# Handoff Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-WF-HANDOFF` |
| Title | Handoff Template |
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
| Traceability ID | FORGE-AI.TEMPLATES.WORKFLOW.HANDOFF |
| Scope | Reusable template for handoff records in the Workflow template family |
| Out of Scope | Certification, approval, or ProjectStatus updates unless separately authorized by the governing workflow |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Forge AI template routing; Operational Core workflow, command, and orchestration authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing workflow, command, and orchestration routing authority |
| Produces | Handoff record |
| Related Specifications | Workflow template family files under `docs/AI/Templates/Workflow/` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed handoff record. It is an output contract only: it consumes existing workflow, command, and orchestration authorities without redefining them.

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
2. Handoff Identification
3. Context Summary
4. Authority and Scope
5. Completed Work
6. Validation Evidence
7. Review / Certification Status
8. Open Items
9. Next Recommended Action
10. Files / Artifacts
11. Warnings
12. Completion Checklist

## 6. Section Requirements

A handoff preserves continuity between agents, humans, workflows, stages, or tools. It does not certify work by itself and does not update project state unless the approved state workflow permits it.

| Artifact | Path / Reference | Status | Notes |
|:---|:---|:---|:---|
| `{{ARTIFACT}}` | `{{PATH_OR_REFERENCE}}` | `{{STATUS}}` | `{{NOTES}}` |

## 7. Allowed Content

- Context summary, authority and scope, completed work, validation evidence, review/certification status, open items, recommended next action, artifacts, and warnings.

## 8. Forbidden Content

- Certification claims, hidden approvals, ProjectStatus edits, scope expansion, or omission of blockers and warnings.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm authority and scope boundaries are explicit.
- Confirm validation evidence and review/certification status are factual.
- Confirm next action is recommended, not self-authorized scope expansion.

## 10. Completion Checklist

- [ ] Context summarized
- [ ] Authority listed
- [ ] Scope boundaries clear
- [ ] Completed work listed
- [ ] Validation evidence included
- [ ] Review/certification status stated
- [ ] Open items documented
- [ ] Next action recommended
- [ ] Relevant artifacts listed
- [ ] Warnings included

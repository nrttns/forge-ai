# Command Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-WF-COMMAND` |
| Title | Command Template |
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
| Traceability ID | AI-DOS.TEMPLATES.WORKFLOW.COMMAND |
| Scope | Reusable template for command documents in the Workflow template family |
| Out of Scope | Inventing work, defining architecture, bypassing validation, or advancing project state |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance;AI-DOS template routing; Operational Core workflow, command, and orchestration authorities |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; existing workflow, command, and orchestration routing authority |
| Produces | Command document |
| Related Specifications | Workflow template family files under `docs/AI-DOS/Templates/Workflow/` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed command document. It is an output contract only: it consumes existing workflow, command, and orchestration authorities without redefining them.

## 2. When To Use This Template

Use this template only when the artifact being authored matches this template's workflow document type. Use the smallest Workflow template that fits the artifact, and use Architecture or Validation templates when the output is outside workflow routing.

## 3. Authority and Ownership

The template consumes STD-010, TPL-000, `docs/AI-DOS/Templates/README.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, and `docs/AI-DOS/AgentSystemPrompt.md`. The produced document must declare its own Owner, Maintainers, Review Authority, Approval Authority, Normative Authority, and Normative References. Template ownership remains with Template System and does not become workflow execution authority.

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
2. Command Identity
3. Purpose
4. Command Position
5. Use This Command When
6. Do Not Use This Command When
7. Required Inputs
8. Required Reading
9. Allowed Work
10. Forbidden Work
11. Execution Procedure
12. Validation Requirements
13. Review Readiness
14. Completion Report Format
15. Handoff
16. Completion Checklist

## 6. Section Requirements

A command defines how approved work is executed. It must consume workflow and orchestration authority, preserve scope, and route validation and review without creating independent authority.

```text
Planning
    ↓
Workflow
    ↓
Command
    ↓
Template
    ↓
Execution
    ↓
Validation
    ↓
Review
```

## 7. Allowed Content

- Command identity, lifecycle position, usage rules, required inputs and reading, allowed and forbidden work, ordered execution procedure, validation, review readiness, completion report, and handoff.

## 8. Forbidden Content

- New architecture, unapproved work, validation bypass, direct ProjectStatus updates, ownership transfer, or duplicate workflow/command authority.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm required reading names existing authorities without redefining them.
- Confirm allowed and forbidden work are explicit and bounded.
- Confirm validation, review readiness, completion report, and handoff are defined.

## 10. Completion Checklist

- [ ] Command identity defined
- [ ] Scope clear
- [ ] Required reading listed
- [ ] Allowed work defined
- [ ] Forbidden work defined
- [ ] Execution procedure ordered
- [ ] Validation requirements defined
- [ ] Review readiness defined
- [ ] Completion report format included
- [ ] Handoff defined

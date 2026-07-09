# Governance Template

---

## Template Metadata

| Field                  | Value                                                                                                                              |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| Identifier             | `TPL-ARCH-GOVERNANCE`                                                                                                              |
| Title                  | Governance Template                                                                                                                |
| Version                | 0.2.0-draft                                                                                                                        |
| Status                 | Draft                                                                                                                              |
| Canonical Status       | Non-canonical until reviewed, approved, and promoted through Framework Governance                                                  |
| Classification         | Architecture Template                                                                                                              |
| Document Type          | Template                                                                                                                           |
| Owner                  | Framework Architecture Team                                                                                                        |
| Maintainers            | Framework Architecture Team                                                                                                        |
| Review Authority       | Human Governance / Framework Governance                                                                                            |
| Approval Authority     | Human Governance                                                                                                                   |
| Created                | 2026-07-09                                                                                                                         |
| Last Updated           | 2026-07-09                                                                                                                         |
| Lifecycle Phase        | Draft                                                                                                                              |
| Traceability ID        | FORGE-AI.TEMPLATES.ARCHITECTURE.GOVERNANCE                                                                                         |
| Scope                  | Reusable template for governance documents in the Architecture template family                                                     |
| Out of Scope           | Creating new governance bodies, approving exceptions, or superseding Framework Governance                                          |
| Normative Authority    | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`                                              |
| Normative References   | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Dependencies           | STD-010 metadata schema; TPL-000 template governance; Architecture template family index                                           |
| Consumes               | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces               | Governance document                                                                                                                |
| Related Specifications | `docs/AI/Templates/Architecture/README.md`                                                                                         |
| Supersedes             | Earlier in-place draft of this template                                                                                            |
| Superseded By          | None                                                                                                                               |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, and explicit Human Governance approval                             |
| Certification Status   | Not certified                                                                                                                      |

---

## 1. Purpose

This template defines the required structure for producing a governed governance document. It is an output contract only: it preserves purpose and ownership for the produced document without becoming architectural authority itself.

## 2. When To Use This Template

Use this template when the artifact being authored matches the document type described below. Use another Architecture template when the work is a proposal, accepted decision, governance policy, broad architecture description, or contract-bearing specification outside this template's stated scope.

## 3. Authority and Ownership

The template consumes STD-010 and TPL-000. The produced document must declare its own Owner, Maintainers, Review Authority, Approval Authority, Normative Authority, and Normative References. Template ownership never transfers ownership of the produced document or the domain it describes.

## 4. Produced-Document Metadata Guidance

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section using TPL-000 placeholders until values are resolved. Do not add template-specific metadata fields that compete with STD-010.

| Field                  | Value                      |
|:-----------------------|:---------------------------|
| Identifier             | `{{IDENTIFIER}}`           |
| Title                  | {{TITLE}}                  |
| Version                | {{VERSION}}                |
| Status                 | {{STATUS}}                 |
| Canonical Status       | {{CANONICAL_STATUS}}       |
| Classification         | {{CLASSIFICATION}}         |
| Document Type          | {{DOCUMENT_TYPE}}          |
| Owner                  | {{OWNER}}                  |
| Maintainers            | {{MAINTAINERS}}            |
| Review Authority       | {{REVIEW_AUTHORITY}}       |
| Approval Authority     | {{APPROVAL_AUTHORITY}}     |
| Created                | {{CREATED}}                |
| Last Updated           | {{LAST_UPDATED}}           |
| Lifecycle Phase        | {{LIFECYCLE_PHASE}}        |
| Traceability ID        | {{TRACEABILITY_ID}}        |
| Scope                  | {{SCOPE}}                  |
| Out of Scope           | {{OUT_OF_SCOPE}}           |
| Normative Authority    | {{NORMATIVE_AUTHORITY}}    |
| Normative References   | {{NORMATIVE_REFERENCES}}   |
| Dependencies           | {{DEPENDENCIES}}           |
| Consumes               | {{CONSUMES}}               |
| Produces               | {{PRODUCES}}               |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
| Supersedes             | {{SUPERSEDES}}             |
| Superseded By          | {{SUPERSEDED_BY}}          |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status   | {{CERTIFICATION_STATUS}}   |

## 5. Required Structure

1. Document Metadata
2. Executive Summary
3. Purpose
4. Authority Scope
5. Governance Principles
6. Decision Rights
7. Ownership Model
8. Policies
9. Quality Gates
10. Exception and Override Process
11. Compliance and Audit
12. Change Control
13. Related Documents
14. Version History
15. Governance Checklist

## 6. Section Requirements

Governance documents must define decision rights, ownership, policy rules, gates, exception flow, audit evidence, and change control. They must consume existing governance authority and may not create new authority unless Human Governance explicitly approves it.

| Decision Type       | Owner                | Approval Required       | Escalation       |
|:--------------------|:---------------------|:------------------------|:-----------------|
| `{{DECISION_TYPE}}` | `{{DECISION_OWNER}}` | `{{APPROVAL_REQUIRED}}` | `{{ESCALATION}}` |

| Gate       | Required Evidence       | Owner            | Outcome       |
|:-----------|:------------------------|:-----------------|:--------------|
| `{{GATE}}` | `{{REQUIRED_EVIDENCE}}` | `{{GATE_OWNER}}` | `{{OUTCOME}}` |

## 7. Allowed Content

- Decision policies, ownership models, quality gates, exception processes, audit expectations, and change-control rules.

## 8. Forbidden Content

- Self-approval, certification claims, ProjectStatus edits, bypasses of Framework Governance, or policy overlap that creates duplicate decision authority.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm decision rights do not conflict with higher governance.
- Confirm exceptions require explicit approval and evidence.
- Confirm change control preserves review and approval boundaries.

## 10. Completion Checklist

- [ ] Authority scope clear
- [ ] Decision rights documented
- [ ] Ownership explicit
- [ ] Policies defined
- [ ] Quality gates defined
- [ ] Exceptions process defined
- [ ] Audit path defined
- [ ] Change control defined
- [ ] References verified

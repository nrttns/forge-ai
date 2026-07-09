# RFC Template

---

## Template Metadata

| Field                  | Value                                                                                                                                                                                                 |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identifier             | `TPL-ARCH-RFC`                                                                                                                                                                                        |
| Title                  | RFC Template                                                                                                                                                                                          |
| Version                | 0.2.0-draft                                                                                                                                                                                           |
| Status                 | Draft                                                                                                                                                                                                 |
| Canonical Status       | Non-canonical until reviewed, approved, and promoted through Framework Governance                                                                                                                     |
| Classification         | Architecture Template                                                                                                                                                                                 |
| Document Type          | Template                                                                                                                                                                                              |
| Owner                  | Framework Architecture Team                                                                                                                                                                           |
| Maintainers            | Framework Architecture Team                                                                                                                                                                           |
| Review Authority       | Human Governance / Framework Governance                                                                                                                                                               |
| Approval Authority     | Human Governance                                                                                                                                                                                      |
| Created                | 2026-07-09                                                                                                                                                                                            |
| Last Updated           | 2026-07-09                                                                                                                                                                                            |
| Lifecycle Phase        | Draft                                                                                                                                                                                                 |
| Traceability ID        | FORGE-AI.TEMPLATES.ARCHITECTURE.RFC                                                                                                                                                                   |
| Scope                  | Reusable template for TPL-001-compliant RFC documents in the Architecture template family                                                                                                             |
| Out of Scope           | Runtime RFC or Engine RFC specialization; use domain-specific RFC templates where provided                                                                                                            |
| Normative Authority    | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`                                                                                                                 |
| Normative References   | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`    |
| Dependencies           | STD-010 metadata schema; TPL-000 template governance; TPL-001 RFC template standard; Architecture template family index                                                                               |
| Consumes               | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements; TPL-001 RFC section order, lifecycle, and validation requirements |
| Produces               | RFC document                                                                                                                                                                                          |
| Related Specifications | `docs/AI/Templates/Architecture/README.md`                                                                                                                                                            |
| Supersedes             | Earlier in-place draft of this template                                                                                                                                                               |
| Superseded By          | None                                                                                                                                                                                                  |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, TPL-001 validation, and explicit Human Governance approval                                                                            |
| Certification Status   | Not certified                                                                                                                                                                                         |

---

## 1. Purpose

This template defines the required structure for producing a governed RFC document. It is an output contract only: it preserves purpose and ownership for the produced document without becoming architectural authority itself.

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

## 5. Relationship to TPL-001

This RFC template specializes `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` for the Architecture template family. It must generate every TPL-001 mandatory RFC section in order and must not remove, rename, merge, or reorder those sections.

## 6. Required RFC Output Structure

1. Document Metadata
2. Executive Summary
3. Purpose
4. Scope
5. Out of Scope
6. Normative Authority
7. Normative References
8. Dependencies
9. Architecture
10. Design Decisions
11. Ownership
12. Responsibilities
13. Non Responsibilities
14. Interfaces
15. Lifecycle
16. Validation
17. Risks
18. Open Questions
19. Completion Criteria
20. Version History

## 7. Section Requirements

### 7.1 Executive Summary
Provide 3-5 sentences describing what the RFC does, why it exists, and what it produces.

### 7.2 Purpose
Explain the problem the RFC solves and why an RFC is required.

### 7.3 Scope and Out of Scope
List in-scope and out-of-scope items as complementary, non-overlapping boundaries.

### 7.4 Normative Authority, References, and Dependencies
List governing authorities, normative design inputs, and upstream dependencies separately. Do not move authority documents into related references to weaken review requirements.

### 7.5 Architecture
Describe the architectural model, structure, or change proposed by the RFC.

### 7.6 Design Decisions

| Decision       | Context       | Options Considered | Rationale       |
|:---------------|:--------------|:-------------------|:----------------|
| `{{DECISION}}` | `{{CONTEXT}}` | `{{OPTIONS}}`      | `{{RATIONALE}}` |

### 7.7 Ownership, Responsibilities, and Non Responsibilities
Declare Owner, Maintainers, Review Authority, Approval Authority, owned responsibilities, and explicit non-responsibilities. The RFC Owner owns the RFC document, not every architectural domain the RFC mentions.

### 7.8 Interfaces and Lifecycle
Describe interfaces, contracts, boundaries, lifecycle states, transitions, and rules the RFC defines or consumes.

### 7.9 Validation, Risks, and Open Questions
List validation methods, required evidence, risks, mitigations, and unresolved questions requiring governance or design resolution.

### 7.10 Completion Criteria and Version History
Completion criteria must be testable. Version history must remain chronological and final.

## 8. Allowed Content

- RFC proposal content, architectural rationale, authority consumption, interfaces, lifecycle, validation, risks, open questions, and completion criteria.

## 9. Forbidden Content

- Implementation approval, canonical promotion claims, certification claims, ProjectStatus updates, removed TPL-001 mandatory sections, or redefinition of STD-010 / TPL-000 / TPL-001.

## 10. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm every TPL-001 mandatory section is present and in order.
- Confirm authority, references, dependencies, consumes, and related specifications are not conflated.
- Confirm Open Questions is not empty while the RFC remains Draft.
- Confirm Version History is final and chronological.

## 11. Completion Checklist

- [ ] STD-010 metadata complete
- [ ] TPL-001 section order preserved
- [ ] Authority hierarchy declared
- [ ] Scope and out-of-scope boundaries non-overlapping
- [ ] Ownership and non-responsibilities explicit
- [ ] Interfaces and lifecycle documented
- [ ] Validation evidence defined
- [ ] Risks and open questions documented
- [ ] Completion criteria testable
- [ ] Version history complete

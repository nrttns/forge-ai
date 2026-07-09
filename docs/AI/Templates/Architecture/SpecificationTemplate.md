# Specification Template

---

## Template Metadata

| Field                  | Value                                                                                                                              |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| Identifier             | `TPL-ARCH-SPECIFICATION`                                                                                                           |
| Title                  | Specification Template                                                                                                             |
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
| Traceability ID        | FORGE-AI.TEMPLATES.ARCHITECTURE.SPECIFICATION                                                                                      |
| Scope                  | Reusable template for contract-bearing specifications in the Architecture template family                                          |
| Out of Scope           | Broad architecture narratives, RFC proposals, governance policy, or implementation source truth                                    |
| Normative Authority    | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md`                                              |
| Normative References   | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Dependencies           | STD-010 metadata schema; TPL-000 template governance; Architecture template family index                                           |
| Consumes               | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces               | Specification document                                                                                                             |
| Related Specifications | `docs/AI/Templates/Architecture/README.md`                                                                                         |
| Supersedes             | Earlier in-place draft of this template                                                                                            |
| Superseded By          | None                                                                                                                               |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, and explicit Human Governance approval                             |
| Certification Status   | Not certified                                                                                                                      |

---

## 1. Purpose

This template defines the required structure for producing a governed specification document. It is an output contract only: it preserves purpose and ownership for the produced document without becoming architectural authority itself.

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
4. Scope
5. Terms and Definitions
6. Requirements
7. Contract Definition
8. Invariants
9. Allowed Behavior
10. Forbidden Behavior
11. Ownership and Consumers
12. Validation Requirements
13. Compatibility and Versioning
14. Examples
15. Review and Certification
16. Related Documents
17. Version History
18. Specification Checklist

## 6. Section Requirements

Specifications must define requirements, contracts, invariants, allowed and forbidden behavior, ownership, validation, compatibility, and examples. Local terms must reference canonical terminology first and define only necessary specification-local terms.

| Requirement ID       | Requirement       | Priority            | Notes       |
|:---------------------|:------------------|:--------------------|:------------|
| `{{REQUIREMENT_ID}}` | `{{REQUIREMENT}}` | Must / Should / May | `{{NOTES}}` |

| Surface       | Owner               | Consumers               | Stability       |
|:--------------|:--------------------|:------------------------|:----------------|
| `{{SURFACE}}` | `{{SURFACE_OWNER}}` | `{{SURFACE_CONSUMERS}}` | `{{STABILITY}}` |

## 7. Allowed Content

- Requirements, contract definitions, invariants, conformance rules, versioning, compatibility, examples, and validation criteria.

## 8. Forbidden Content

- Conflicting terminology, duplicate ownership of contract surfaces, implementation-only details, or authority claims outside the specification scope.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm terms align with canonical terminology.
- Confirm each requirement and contract has an owner and validation method.
- Confirm examples clarify but do not redefine requirements.

## 10. Completion Checklist

- [ ] Purpose defined
- [ ] Scope bounded
- [ ] Terms aligned
- [ ] Requirements listed
- [ ] Contract defined
- [ ] Invariants documented
- [ ] Allowed/forbidden behavior documented
- [ ] Validation requirements defined
- [ ] Compatibility documented
- [ ] References verified

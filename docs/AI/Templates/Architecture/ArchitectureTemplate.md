# Architecture Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-ARCH-ARCHITECTURE` |
| Title | Architecture Template |
| Version | 0.2.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Architecture Template |
| Document Type | Template |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | AI-DOS.TEMPLATES.ARCHITECTURE.ARCHITECTURE |
| Scope | Reusable template for architecture description documents in the Architecture template family |
| Out of Scope | Implementation plans, Runtime RFC specialization, Engine RFC specialization, or governance policy ownership |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Architecture template family index |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Architecture document |
| Related Specifications | `docs/AI/Templates/Architecture/README.md` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed architecture document. It is an output contract only: it preserves purpose and ownership for the produced document without becoming architectural authority itself.

## 2. When To Use This Template

Use this template when the artifact being authored matches the document type described below. Use another Architecture template when the work is a proposal, accepted decision, governance policy, broad architecture description, or contract-bearing specification outside this template's stated scope.

## 3. Authority and Ownership

The template consumes STD-010 and TPL-000. The produced document must declare its own Owner, Maintainers, Review Authority, Approval Authority, Normative Authority, and Normative References. Template ownership never transfers ownership of the produced document or the domain it describes.

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
2. Executive Summary
3. Purpose
4. Architecture Scope
5. Authority and Source of Truth
6. Architectural Context
7. Ownership Model
8. Logical Architecture
9. Dependency Model
10. Contract Surfaces
11. State, Context, Knowledge, and Memory Impact
12. Platform and Adapter Boundaries
13. Security, Compliance, and Risk
14. Migration and Compatibility
15. Validation Requirements
16. Review and Certification
17. Related Decisions
18. Version History
19. Completion Checklist

## 6. Section Requirements

Define purpose, scope, context, ownership, logical layers, dependency direction, public contracts, risk, validation, and review expectations. Ownership must be singular for each responsibility and must not transfer authority away from governing documents.

| Responsibility | Owner | Consumers | Notes |
|:---|:---|:---|:---|
| `{{RESPONSIBILITY}}` | `{{RESPONSIBILITY_OWNER}}` | `{{CONSUMERS}}` | `{{NOTES}}` |

| Contract | Owner | Consumers | Stability |
|:---|:---|:---|:---|
| `{{CONTRACT}}` | `{{CONTRACT_OWNER}}` | `{{CONTRACT_CONSUMERS}}` | `{{STABILITY}}` |

## 7. Allowed Content

- Architecture boundaries, component relationships, contracts, dependencies, risks, validation criteria, review gates, and related decisions.

## 8. Forbidden Content

- Source-code implementation instructions, ProjectStatus changes, authority overrides, or duplicate source-of-truth claims.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm authority hierarchy is consumed, not redefined.
- Confirm ownership, dependencies, and contracts have one accountable owner each.
- Confirm the document remains above implementation level.

## 10. Completion Checklist

- [ ] Purpose defined
- [ ] Scope bounded
- [ ] Authority declared
- [ ] Ownership explicit
- [ ] Dependencies documented
- [ ] Contracts listed
- [ ] Risks documented
- [ ] Validation defined
- [ ] Review path defined
- [ ] References verified

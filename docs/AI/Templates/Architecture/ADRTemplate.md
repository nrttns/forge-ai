# Architecture Decision Record Template

---

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-ARCH-ADR` |
| Title | Architecture Decision Record Template |
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
| Traceability ID | FORGE-AI.TEMPLATES.ARCHITECTURE.ADR |
| Scope | Reusable template for architecture decision records in the Architecture template family |
| Out of Scope | Approving decisions, creating new authority, or replacing RFC / Specification / Governance templates |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Architecture template family index |
| Consumes | STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Architecture Decision Record document |
| Related Specifications | `docs/AI/Templates/Architecture/README.md` |
| Supersedes | Earlier in-place draft of this template |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This template defines the required structure for producing a governed architecture decision record document. It is an output contract only: it preserves purpose and ownership for the produced document without becoming architectural authority itself.

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
2. Decision Summary
3. Context
4. Decision
5. Alternatives Considered
6. Consequences
7. Architecture Impact
8. Compatibility and Migration Impact
9. Validation and Review Evidence
10. ProjectStatus Impact
11. Related Documents
12. Version History
13. ADR Checklist

## 6. Section Requirements

### 6.1 Decision Summary
State the decision in one concise paragraph.

### 6.2 Context
Describe the problem, constraints, forces, and authority inputs that required a decision.

### 6.3 Decision
Document the accepted or proposed decision, including the accountable document Owner and the decision boundary.

### 6.4 Alternatives Considered

| Option               | Summary                   | Pros                   | Cons                   | Reason Rejected / Accepted |
|:---------------------|:--------------------------|:-----------------------|:-----------------------|:---------------------------|
| `{{ALTERNATIVE_ID}}` | `{{ALTERNATIVE_SUMMARY}}` | `{{ALTERNATIVE_PROS}}` | `{{ALTERNATIVE_CONS}}` | `{{ALTERNATIVE_REASON}}`   |

### 6.5 Consequences
List positive, negative, and neutral consequences separately.

### 6.6 Architecture Impact
Describe affected architecture, ownership, dependencies, contracts, templates, workflows, commands, validation, and adapters without redefining their authorities.

### 6.7 Compatibility and Migration Impact
Describe migration requirements, compatibility concerns, deprecation needs, and adopter impact.

### 6.8 Validation and Review Evidence

| Evidence       | Source       | Result       | Notes       |
|:---------------|:-------------|:-------------|:------------|
| `{{EVIDENCE}}` | `{{SOURCE}}` | `{{RESULT}}` | `{{NOTES}}` |

### 6.9 ProjectStatus Impact
State `None`, `Recommended after certification`, `Required after certification`, or `Blocked`. Do not update ProjectStatus from the ADR.

## 7. Allowed Content

- Decision context, alternatives, rationale, consequences, validation evidence, and relationship links.

## 8. Forbidden Content

- Hidden implementation authorization, ProjectStatus updates, approval claims, or duplicate ownership for the same decision surface.

## 9. Validation Requirements

- Confirm STD-010 metadata is complete.
- Confirm authority and ownership are not duplicated.
- Confirm alternatives and consequences are documented.
- Confirm ProjectStatus impact is informational only.

## 10. Completion Checklist

- [ ] Decision is explicit
- [ ] Context is documented
- [ ] Alternatives are recorded
- [ ] Consequences are documented
- [ ] Ownership is preserved
- [ ] Validation evidence is identified
- [ ] Review path is clear
- [ ] ProjectStatus impact is stated

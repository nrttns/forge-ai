# AI-DOS RFC Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.ARCHITECTURE.RFC` |
| Title | AI-DOS RFC Template |
| Version | `0.3.0-draft` |
| Status | Draft — Catalog Component Reconciled with TPL-001 Rebase |
| Canonical Status | Non-canonical; Architecture family normalization and Human Governance review required |
| Classification | Architecture RFC Template |
| Document Type | Template |
| Artifact Family | Template Artifact |
| Artifact Type | RFC Component Template |
| Owner | AI-DOS Template Library |
| Maintainers | AI-DOS Template Library |
| Review Authority | Human Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-16 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.ARCHITECTURE.RFC` |
| Scope | Reusable provider-neutral structure for a bounded architecture RFC document. |
| Out of Scope | Architecture authority, RFC acceptance, implementation authorization, review or approval decisions, certification, canonicalization, release, execution, persistence, or Target-state mutation. |
| Normative References | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Consumes | TPL-000 shared authoring constraints; TPL-001 RFC structural profile; applicable STD-010 metadata requirements; architecture authority supplied for the RFC subject. |
| Produces | Bounded architecture RFC document structure. |
| Depends On | Future accepted `ArchitectureFamily.md`; owning architecture authority; TPL-000; TPL-001. |
| Supersedes | RFC Template `0.2.0-draft` legacy component |
| Superseded By | None |
| Validation Profile | TPL-001 RFC structural conformance profile |
| Validation Status | Reconciled with TPL-001 material rebase; Architecture family normalization required |
| Review Status | Review Required |
| Certification Status | Not certified |
| Compatibility Declaration | Breaking metadata and authority-boundary rebase; RFC concern coverage retained |
| Migration Obligation | Existing RFC documents are not automatically rewritten or invalidated. |
| Evidence References | `docs/AI/Architecture/Reports/AI-DOS-TPL-001-Material-Rebase-Validation.md` |

## 1. Purpose

Use this template to author a bounded architecture RFC when an authorized owning domain explicitly requires an RFC artifact.

This component is a catalog candidate until `ArchitectureFamily.md` is created, reviewed, and accepted. Reconciliation with TPL-001 does not activate or normalize the Architecture family.

## 2. Required Inputs

Resolve before instantiation:

- RFC title, purpose, subject, and bounded scope;
- owning architecture or domain authority;
- accountable owner and intended consumers;
- normative authorities, references, dependencies, and evidence;
- current context, constraints, assumptions, and protected boundaries;
- proposed architecture, contracts, interfaces, and responsibilities;
- compatibility, migration, security, and safety impacts;
- validation, review, decision, adoption, and implementation routes;
- risks, alternatives, and open questions.

Do not infer these values from repository layout, Forge AI, ProjectStatus, DevelopmentPhases, Roadmap, merge status, or continuation intent.

## 3. Produced-Document Metadata

The RFC instance must declare its own applicable STD-010 metadata. Template metadata does not transfer into the RFC.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | {{IDENTIFIER}} |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | RFC |
| Artifact Family | {{ARTIFACT_FAMILY}} |
| Artifact Type | {{ARTIFACT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Depends On | {{DEPENDS_ON}} |
| Lifecycle State | {{LIFECYCLE_STATE}} |
| Traceability ID | {{TRACEABILITY_ID}} |
| Validation Profile | {{VALIDATION_PROFILE}} |
| Validation Status | {{VALIDATION_STATUS}} |
| Review Status | {{REVIEW_STATUS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |
| Compatibility Declaration | {{COMPATIBILITY_DECLARATION}} |
| Evidence References | {{EVIDENCE_REFERENCES}} |
| Last Updated | {{LAST_UPDATED}} |
```

Every semantic value must come from the owning context. No approval, certification, canonical, implementation, compatibility, or release value has a template default.

## 4. RFC Body

### 1. Executive Summary

Summarize the proposal, motivation, bounded effect, and current decision posture.

### 2. Purpose

Explain why an RFC is required and what decision or contract needs governed treatment.

### 3. Scope and Out of Scope

Declare exact included and excluded concerns.

### 4. Normative Authority, References, and Dependencies

Separate governing authority, normative references, consumed inputs, dependencies, informative context, and evidence.

### 5. Problem or Context

Record the current condition, gap, constraints, assumptions, and provenance.

### 6. Proposed Architecture or Contract

Describe the proposal without presenting it as accepted or implemented.

### 7. Design Decisions and Rationale

Record proposed or accepted decisions with actual status, alternatives, and rationale.

### 8. Ownership and Responsibility Boundaries

Declare owner, responsibilities, non-responsibilities, consumers, and escalation routes.

### 9. Interfaces and Integration Boundaries

Describe interfaces, inputs, outputs, dependencies, failure boundaries, and protected handoffs.

### 10. Lifecycle or State Semantics

Include only when applicable and only from the owning domain.

### 11. Compatibility and Migration Impact

Record affected consumers, breaking effects, compatibility direction, migration obligations, rollback concerns, and unresolved risks.

### 12. Security, Safety, and Protected Boundaries

Record applicable security, privacy, safety, access, destructive-action, and boundary constraints.

### 13. Validation and Evidence Plan

Declare criteria, evidence, owner, coverage, limitations, and result semantics. A plan is not a passing validation.

### 14. Risks, Alternatives, and Open Questions

Keep unresolved matters visible and distinguish them from decisions.

### 15. Adoption or Implementation Boundary

State the separate authority and work required after an RFC decision. RFC completion does not activate implementation.

### 16. Completion Criteria

Define document completeness separately from approval, implementation, release, or Target-state completion.

### 17. Version History

Record material document changes without rewriting decision history.

## 5. Structural Validation

- [ ] RFC purpose, owner, subject, and consumers are explicit.
- [ ] Required TPL-001 concerns are present or traceably mapped.
- [ ] Proposal, decision, implementation, and release postures are distinct.
- [ ] Template and RFC-instance metadata are separate.
- [ ] Authorities, references, dependencies, evidence, and assumptions are classified.
- [ ] Compatibility, migration, risks, alternatives, and open questions are explicit.
- [ ] No Target-specific default or stale Framework authority is required.
- [ ] Structural completion is not represented as RFC acceptance.
- [ ] Missing or conflicting inputs trigger safe stop.

## 6. Safe Stop

Stop when purpose, owner, decision authority, applicable family status, normative authority, evidence, protected boundary, compatibility impact, decision posture, or required input is missing, conflicting, stale, or ambiguous.

Return unresolved matters to the owning architecture or domain authority. Do not invent values to complete the RFC.

## 7. Non-Authority Statement

This template does not decide architecture, accept an RFC, authorize implementation, approve, certify, promote, canonicalize, release, execute, persist, or mutate product or Target state.

# Vision Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-VISION` |
| Classification | Planning Template |
| Purpose | Reusable structure for a bounded vision artifact. |
| Parent Contract | `docs/AI/Templates/TemplateLibrary.md` |
| Family Index | `docs/AI/Templates/Planning/README.md` |
| Baseline Standard | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Status | Draft; non-canonical until reviewed and promoted by the applicable authority. |

## 1. Purpose

Use this template to describe long-range direction, mission, principles, intended outcomes, and scope boundaries for a product, project, program, adapter, or other bounded authority domain.

This template provides structure only. It does not create vision authority, planning authority, roadmap authority, execution authorization, approval, certification, promotion, release, or Target-state mutation.

## 2. Required Inputs

- artifact owner;
- artifact purpose and scope;
- governing authority or provenance supplied for the artifact;
- applicable review and lifecycle route;
- applicable standards and protected-information constraints.

Do not infer Forge AI paths, ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, capability, or a mandatory planning hierarchy.

## 3. Produced Document Metadata

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{DOCUMENT_IDENTIFIER}}` |
| Title | {{DOCUMENT_TITLE}} |
| Version | `{{DOCUMENT_VERSION}}` |
| Status | {{DOCUMENT_STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | Vision Artifact |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED_DATE}} |
| Last Updated | {{LAST_UPDATED_DATE}} |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Dependencies | {{DEPENDENCIES}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |
```

Review and approval fields must be resolved from the artifact's actual authority domain. They have no universal default.

## 4. Vision Identity

| Field | Value |
|:---|:---|
| Vision ID | {{VISION_ID}} |
| Vision Name | {{VISION_NAME}} |
| Authority Domain | {{AUTHORITY_DOMAIN}} |
| Time Horizon | {{TIME_HORIZON}} |
| Owner | {{OWNER}} |

## 5. Mission

{{MISSION}}

## 6. Strategic Outcomes

| Outcome ID | Outcome | Success Signal |
|:---|:---|:---|
| {{OUTCOME_ID}} | {{OUTCOME}} | {{SUCCESS_SIGNAL}} |

## 7. Guiding Principles

- {{GUIDING_PRINCIPLE}}

## 8. Scope Boundaries

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 9. Directional Constraints

| Constraint | Rationale | Evidence or Source |
|:---|:---|:---|
| {{CONSTRAINT}} | {{RATIONALE}} | {{EVIDENCE_SOURCE}} |

## 10. Risks and Assumptions

| Type | Statement | Treatment |
|:---|:---|:---|
| {{RISK_OR_ASSUMPTION_TYPE}} | {{RISK_OR_ASSUMPTION}} | {{TREATMENT}} |

## 11. Optional Handoffs

| Handoff | Recipient or Artifact | Authority Required |
|:---|:---|:---|
| {{HANDOFF}} | {{RECIPIENT_OR_ARTIFACT}} | {{REQUIRED_AUTHORITY}} |

A handoff records a relationship only. It does not create a Roadmap, phase, stage, task, execution contract, or lifecycle transition.

## 12. Validation Checklist

- [ ] Purpose, owner, provenance, and authority domain are explicit.
- [ ] All placeholders are resolved.
- [ ] No Forge AI or Target-specific path is assumed by default.
- [ ] No mandatory planning hierarchy is introduced.
- [ ] Review, approval, certification, promotion, and release remain external authorities.
- [ ] No execution or Target-state mutation authority is implied.

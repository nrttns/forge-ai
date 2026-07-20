# Stage Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-STAGE` |
| Classification | Planning Template |
| Purpose | Reusable structure for a bounded stage-like milestone artifact. |
| Parent Contract | `docs/AI/Templates/TemplateLibrary.md` |
| Family Index | `docs/AI/Templates/Planning/README.md` |
| Baseline Standard | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Status | Draft; non-canonical until reviewed and promoted by the applicable authority. |

## 1. Purpose

Use this template only when the consuming authority explicitly uses a stage model. It structures a bounded milestone, objective, scope, deliverables, dependencies, evidence, and completion conditions.

The template does not require stages, activate a stage, derive a task, authorize execution, approve completion, certify an outcome, or mutate Target state.

## 2. Required Inputs

- stage owner and authority domain;
- parent planning source when one exists;
- bounded objective and scope;
- dependencies, deliverables, evidence, validation, and lifecycle constraints.

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
| Document Type | Stage Artifact |
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

## 4. Stage Identity

| Field | Value |
|:---|:---|
| Stage ID | {{STAGE_ID}} |
| Stage Name | {{STAGE_NAME}} |
| Authority Domain | {{AUTHORITY_DOMAIN}} |
| Owner | {{OWNER}} |
| Parent Planning Source | {{PARENT_PLANNING_SOURCE}} |
| Current Lifecycle State | {{CURRENT_LIFECYCLE_STATE}} |

## 5. Objective

{{STAGE_OBJECTIVE}}

## 6. Scope Boundaries

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 7. Deliverables and Evidence

| Deliverable | Type | Required Evidence | Completion Condition |
|:---|:---|:---|:---|
| {{DELIVERABLE}} | {{DELIVERABLE_TYPE}} | {{REQUIRED_EVIDENCE}} | {{COMPLETION_CONDITION}} |

## 8. Dependencies and Constraints

| Dependency or Constraint | Source | Notes |
|:---|:---|:---|
| {{DEPENDENCY_OR_CONSTRAINT}} | {{SOURCE}} | {{NOTES}} |

## 9. Risks

| Risk | Impact | Treatment | Status |
|:---|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{TREATMENT}} | {{RISK_STATUS}} |

## 10. Review and Completion Conditions

| Condition Type | Condition | Evidence or Authority |
|:---|:---|:---|
| Entry | {{ENTRY_CONDITION}} | {{ENTRY_EVIDENCE_OR_AUTHORITY}} |
| Completion | {{COMPLETION_CONDITION}} | {{COMPLETION_EVIDENCE_OR_AUTHORITY}} |
| Review | {{REVIEW_CONDITION}} | {{REVIEW_EVIDENCE_OR_AUTHORITY}} |

These conditions record requirements only. They do not execute or approve a transition.

## 11. Validation Checklist

- [ ] The consuming authority explicitly uses a stage model.
- [ ] Owner, provenance, parent source, scope, and lifecycle route are explicit.
- [ ] All placeholders are resolved.
- [ ] No Forge AI path or ProjectStatus/DevelopmentPhases model is assumed.
- [ ] No historical-capability, sprint, or generated-task model is required.
- [ ] No execution, approval, certification, promotion, release, or Target-state mutation authority is implied.

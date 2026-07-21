# Phase Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-PHASE` |
| Classification | Planning Template |
| Purpose | Reusable structure for a bounded phase-like planning artifact. |
| Parent Contract | `docs/AI-DOS/Templates/TemplateLibrary.md` |
| Family Index | `docs/AI-DOS/Templates/Planning/README.md` |
| Baseline Standard | `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md` |
| Status | Draft; non-canonical until reviewed and promoted by the applicable authority. |

## 1. Purpose

Use this template only when the consuming authority explicitly uses a phase model. It structures a major planning boundary, its objective, scope, dependencies, expected outcomes, evidence, and constraints.

The template does not require phases, create a phase hierarchy, activate a phase, select work, authorize execution, certify completion, or update Target state.

## 2. Required Inputs

- phase owner and authority domain;
- parent planning source when one exists;
- phase objective and bounded scope;
- dependency, validation, lifecycle, and protected-boundary rules;
- explicit evidence and completion expectations.

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
| Document Type | Phase Artifact |
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

## 4. Phase Identity

| Field | Value |
|:---|:---|
| Phase ID | {{PHASE_ID}} |
| Phase Name | {{PHASE_NAME}} |
| Authority Domain | {{AUTHORITY_DOMAIN}} |
| Owner | {{OWNER}} |
| Parent Planning Source | {{PARENT_PLANNING_SOURCE}} |
| Current Lifecycle State | {{CURRENT_LIFECYCLE_STATE}} |

## 5. Objective and Intended Outcomes

{{PHASE_OBJECTIVE}}

| Outcome ID | Outcome | Evidence |
|:---|:---|:---|
| {{OUTCOME_ID}} | {{OUTCOME}} | {{EVIDENCE}} |

## 6. Scope Boundaries

### In Scope

- {{IN_SCOPE_ITEM}}

### Out of Scope

- {{OUT_OF_SCOPE_ITEM}}

## 7. Dependencies and Constraints

| Dependency or Constraint | Source | Required By | Notes |
|:---|:---|:---|:---|
| {{DEPENDENCY_OR_CONSTRAINT}} | {{SOURCE}} | {{REQUIRED_BY}} | {{NOTES}} |

## 8. Optional Internal Work Units

| Work Unit | Objective | Completion Evidence | Status |
|:---|:---|:---|:---|
| {{WORK_UNIT}} | {{WORK_UNIT_OBJECTIVE}} | {{COMPLETION_EVIDENCE}} | {{WORK_UNIT_STATUS}} |

Internal work units may be stages, milestones, streams, or another owner-defined model. No stage or historical-capability model is required.

## 9. Risks

| Risk | Impact | Treatment | Status |
|:---|:---|:---|:---|
| {{RISK}} | {{IMPACT}} | {{TREATMENT}} | {{RISK_STATUS}} |

## 10. Entry, Completion, and Review Conditions

| Condition Type | Condition | Evidence or Authority |
|:---|:---|:---|
| Entry | {{ENTRY_CONDITION}} | {{ENTRY_EVIDENCE_OR_AUTHORITY}} |
| Completion | {{COMPLETION_CONDITION}} | {{COMPLETION_EVIDENCE_OR_AUTHORITY}} |
| Review | {{REVIEW_CONDITION}} | {{REVIEW_EVIDENCE_OR_AUTHORITY}} |

These conditions do not perform a lifecycle transition. Transition authority remains external.

## 11. Validation Checklist

- [ ] The consuming authority explicitly uses a phase model.
- [ ] Owner, provenance, parent source, lifecycle route, and boundaries are explicit.
- [ ] All placeholders are resolved.
- [ ] No Forge AI path or ProjectStatus/DevelopmentPhases model is assumed.
- [ ] No mandatory stage, capability, or task hierarchy is introduced.
- [ ] No execution, approval, certification, promotion, release, or state mutation authority is implied.

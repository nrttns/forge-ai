# Roadmap Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-ROADMAP` |
| Classification | Planning Template |
| Purpose | Reusable structure for a bounded roadmap artifact. |
| Parent Contract | `docs/AI/Templates/TemplateLibrary.md` |
| Family Index | `docs/AI/Templates/Planning/README.md` |
| Baseline Standard | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md` |
| Status | Draft; non-canonical until reviewed and promoted by the applicable authority. |

## 1. Purpose

Use this template to document ordered outcomes, milestones, dependencies, evidence expectations, and constraints when a consuming authority explicitly requires a roadmap artifact.

The template does not create roadmap ownership, select work, activate phases, authorize execution, approve transitions, certify completion, or mutate Target state.

## 2. Required Inputs

- roadmap owner and authority domain;
- roadmap purpose and scope;
- source objectives or upstream artifacts, when applicable;
- sequencing rules supplied by the owner;
- lifecycle, review, validation, and protected-boundary constraints.

A Roadmap, phase model, milestone model, current-state artifact, or Target planning system must not be inferred when it is not explicitly supplied.

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
| Document Type | Roadmap Artifact |
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

No review, approval, or lifecycle authority has a universal default.

## 4. Roadmap Identity

| Field | Value |
|:---|:---|
| Roadmap ID | {{ROADMAP_ID}} |
| Roadmap Name | {{ROADMAP_NAME}} |
| Authority Domain | {{AUTHORITY_DOMAIN}} |
| Owner | {{OWNER}} |
| Time Horizon | {{TIME_HORIZON}} |

## 5. Objectives and Outcomes

| Item ID | Objective or Outcome | Success Evidence |
|:---|:---|:---|
| {{ITEM_ID}} | {{OBJECTIVE_OR_OUTCOME}} | {{SUCCESS_EVIDENCE}} |

## 6. Sequenced Work Units

| Sequence | Work Unit | Intended Outcome | Entry Conditions | Completion Conditions |
|:---|:---|:---|:---|:---|
| {{SEQUENCE}} | {{WORK_UNIT}} | {{INTENDED_OUTCOME}} | {{ENTRY_CONDITIONS}} | {{COMPLETION_CONDITIONS}} |

`Work Unit` may represent a phase, milestone, stream, release, experiment, or another owner-defined model. The template does not require one specific hierarchy.

## 7. Dependency Map

| Dependency | Required By | Type | Notes |
|:---|:---|:---|:---|
| {{DEPENDENCY}} | {{REQUIRED_BY}} | {{DEPENDENCY_TYPE}} | {{DEPENDENCY_NOTES}} |

## 8. Validation and Evidence Strategy

{{VALIDATION_AND_EVIDENCE_STRATEGY}}

## 9. Risks and Constraints

| Risk or Constraint | Affected Work Unit | Treatment |
|:---|:---|:---|
| {{RISK_OR_CONSTRAINT}} | {{AFFECTED_WORK_UNIT}} | {{TREATMENT}} |

## 10. Optional Current-State Reference

{{CURRENT_STATE_REFERENCE}}

A current-state reference is optional and must identify an owner-supplied artifact. This template must not assume or update ProjectStatus, DevelopmentPhases, Roadmap, or any Forge AI path.

## 11. Validation Checklist

- [ ] Owner, authority domain, sequencing source, and lifecycle route are explicit.
- [ ] All placeholders are resolved.
- [ ] No mandatory Vision, phase, stage, capability, or generated-task hierarchy is introduced.
- [ ] No Forge AI or Target-specific path is assumed.
- [ ] The roadmap does not select or execute work by itself.
- [ ] Approval, transition, certification, promotion, release, and state mutation remain external authorities.

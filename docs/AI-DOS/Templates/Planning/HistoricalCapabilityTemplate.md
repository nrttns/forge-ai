# Historical Capability Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PLANNING-HISTORICAL-CAPABILITY` |
| Classification | Planning Template |
| Purpose | Reusable structure for an owner-authorized historical capability or implementation record. |
| Parent Contract | `docs/AI-DOS/Templates/TemplateLibrary.md` |
| Family Index | `docs/AI-DOS/Templates/Planning/README.md` |
| Baseline Standard | `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md` |
| Status | Draft; non-canonical until reviewed and promoted by the applicable authority. |

## 1. Purpose

Use this template only when the consuming authority explicitly requires a historical capability, implementation-history, or equivalent record.

The template records evidence and provenance. It does not declare work complete, certify an increment, activate a lifecycle state, authorize execution, create a capability model, or mutate Target state.

## 2. Required Inputs

- record owner and authority domain;
- record purpose and provenance;
- source work, change, or evidence being recorded;
- applicable immutability, retention, review, and disclosure rules;
- validation evidence and known limitations.

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
| Document Type | Historical Capability Record |
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

## 4. Record Identity

| Field | Value |
|:---|:---|
| Record ID | {{RECORD_ID}} |
| Record Name | {{RECORD_NAME}} |
| Authority Domain | {{AUTHORITY_DOMAIN}} |
| Owner | {{OWNER}} |
| Source Work or Artifact | {{SOURCE_WORK_OR_ARTIFACT}} |
| Recorded Period | {{RECORDED_PERIOD}} |

## 5. Capability or Change Summary

{{CAPABILITY_OR_CHANGE_SUMMARY}}

## 6. State Before and After

| Dimension | Before | After | Evidence |
|:---|:---|:---|:---|
| {{DIMENSION}} | {{STATE_BEFORE}} | {{STATE_AFTER}} | {{EVIDENCE}} |

## 7. Scope and Boundaries

### Included

- {{INCLUDED_ITEM}}

### Excluded

- {{EXCLUDED_ITEM}}

## 8. Evidence Inventory

| Evidence ID | Evidence Type | Location or Reference | Integrity or Provenance Notes |
|:---|:---|:---|:---|
| {{EVIDENCE_ID}} | {{EVIDENCE_TYPE}} | {{EVIDENCE_REFERENCE}} | {{PROVENANCE_NOTES}} |

## 9. Validation Results

| Validation | Result | Evidence | Limitations |
|:---|:---|:---|:---|
| {{VALIDATION}} | {{VALIDATION_RESULT}} | {{VALIDATION_EVIDENCE}} | {{LIMITATIONS}} |

## 10. Decisions and Known Limitations

| Type | Statement | Authority or Source |
|:---|:---|:---|
| {{DECISION_OR_LIMITATION_TYPE}} | {{DECISION_OR_LIMITATION}} | {{AUTHORITY_OR_SOURCE}} |

## 11. Retention and Immutability Rules

{{RETENTION_AND_IMMUTABILITY_RULES}}

These rules must come from the record owner or applicable authority. The template does not make the record immutable or certified by itself.

## 12. Validation Checklist

- [ ] The consuming authority explicitly requires this record type.
- [ ] Owner, provenance, evidence source, retention, and disclosure rules are explicit.
- [ ] All placeholders are resolved.
- [ ] No Forge AI path, stage, sprint, capability, or ProjectStatus model is assumed.
- [ ] Recorded evidence is distinguished from approval or certification.
- [ ] No execution, lifecycle transition, promotion, release, or Target-state mutation authority is implied.

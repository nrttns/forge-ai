# Knowledge Template

## Template Purpose

Use this template to produce a bounded knowledge artifact that records claims, provenance, evidence, epistemic status, freshness, contradictions, limitations, ownership, and intended consumption.

This template does not establish truth, validate evidence, run the Knowledge Engine, resolve authority, persist memory, promote content to canonical status, authorize execution, or mutate product or Target state.

## Required Inputs

- knowledge-artifact purpose;
- bounded subject and scope;
- owner and intended consumer;
- applicable truth and canonical-status authorities;
- source set and provenance;
- evidence basis;
- claim vocabulary;
- confidence vocabulary and rationale;
- freshness or review rule;
- contradiction and uncertainty state;
- sensitivity, access, and protected-boundary constraints.

Stop when any required input is missing or ambiguous.

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | Knowledge Artifact |
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

Use STD-010 metadata only when applicable. Metadata fields do not create authority by themselves.

## 1. Knowledge Identity

| Field | Value |
|:---|:---|
| Subject | {{SUBJECT}} |
| Purpose | {{PURPOSE}} |
| Bounded Scope | {{BOUNDED_SCOPE}} |
| Owner | {{KNOWLEDGE_OWNER}} |
| Intended Consumer | {{INTENDED_CONSUMER}} |
| Truth Authority | {{TRUTH_AUTHORITY}} |
| Canonical-Status Authority | {{CANONICAL_STATUS_AUTHORITY}} |
| Freshness Rule | {{FRESHNESS_RULE}} |
| Sensitivity | {{SENSITIVITY}} |

## 2. Source and Provenance Register

| Source ID | Source Type | Source Location | Owner | Retrieved/Observed | Freshness | Integrity Notes | Authority Status |
|:---|:---|:---|:---|:---|:---|:---|:---|
| {{SOURCE_ID}} | {{SOURCE_TYPE}} | {{SOURCE_LOCATION}} | {{SOURCE_OWNER}} | {{SOURCE_DATE}} | {{SOURCE_FRESHNESS}} | {{INTEGRITY_NOTES}} | {{SOURCE_AUTHORITY_STATUS}} |

Source presence does not establish truth, canonical status, or authority. Record exact provenance and any access or integrity limitations.

## 3. Claim Register

| Claim ID | Claim Type | Claim | Supporting Sources | Evidence Basis | Confidence | Confidence Rationale | Freshness | Status |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| {{CLAIM_ID}} | {{CLAIM_TYPE}} | {{CLAIM}} | {{SUPPORTING_SOURCES}} | {{EVIDENCE_BASIS}} | {{CONFIDENCE}} | {{CONFIDENCE_RATIONALE}} | {{CLAIM_FRESHNESS}} | {{CLAIM_STATUS}} |

Allowed claim types may include observed fact, source statement, asserted claim, validated finding, decision, assumption, hypothesis, inference, or unresolved proposition. The applicable authority must define the vocabulary when stricter semantics are required.

## 4. Evidence Assessment

For each claim, record:

- direct supporting evidence;
- indirect supporting evidence;
- counter-evidence;
- missing evidence;
- source limitations;
- validation status, when supplied by a validation authority;
- unresolved uncertainty.

Do not transform unvalidated evidence into a validated finding.

## 5. Contradictions and Alternatives

| Contradiction ID | Affected Claims | Conflicting Evidence or Source | Current Interpretation | Resolution Authority | Resolution Status |
|:---|:---|:---|:---|:---|:---|
| {{CONTRADICTION_ID}} | {{AFFECTED_CLAIMS}} | {{CONFLICT}} | {{CURRENT_INTERPRETATION}} | {{RESOLUTION_AUTHORITY}} | {{RESOLUTION_STATUS}} |

Preserve contradictions until the applicable authority resolves them. Do not silently collapse disagreement into a single claim.

## 6. Assumptions, Inferences, and Decisions

### Assumptions

{{ASSUMPTIONS}}

### Inferences

{{INFERENCES}}

### Decisions Supplied by an Authority

{{DECISIONS}}

Keep these categories separate from observed facts and validated findings.

## 7. Applicability and Limitations

Document:

- applicable environments or subjects;
- exclusions;
- temporal limitations;
- jurisdictional or organizational limitations;
- sensitivity and access constraints;
- known gaps;
- transferability limits;
- conditions that invalidate or weaken a claim.

## 8. Canonical and Lifecycle Status

| Field | Value |
|:---|:---|
| Current Canonical Status | {{CURRENT_CANONICAL_STATUS}} |
| Status Authority | {{STATUS_AUTHORITY}} |
| Promotion Route | {{PROMOTION_ROUTE}} |
| Review Due | {{REVIEW_DUE}} |
| Expiry or Retirement Rule | {{EXPIRY_OR_RETIREMENT_RULE}} |
| Supersession State | {{SUPERSESSION_STATE}} |

This section records status supplied by the applicable authority. The template cannot canonicalize, approve, promote, persist, retire, or supersede knowledge by itself.

## 9. Intended Consumption

Describe the bounded consumers and allowed uses of this artifact.

{{INTENDED_CONSUMPTION}}

Explicitly identify prohibited uses, especially when evidence, freshness, confidence, or authority is limited.

## 10. Risks and Open Questions

### Risks

{{RISKS}}

### Open Questions

{{OPEN_QUESTIONS}}

### Required Follow-up

{{REQUIRED_FOLLOW_UP}}

Follow-up text is non-authorizing. Any validation, review, canonicalization, persistence, execution, or state change requires the applicable authority.

## 11. Completion Checklist

- [ ] Purpose, subject, scope, owner, and intended consumer are explicit.
- [ ] Truth and canonical-status authorities are identified.
- [ ] Sources and provenance are complete.
- [ ] Claims have explicit types and evidence bases.
- [ ] Confidence and freshness semantics are declared.
- [ ] Facts, claims, assumptions, inferences, findings, and decisions are distinct.
- [ ] Contradictions and counter-evidence are visible.
- [ ] Sensitivity, access, applicability, and limitations are documented.
- [ ] Canonical and lifecycle status is recorded only from an applicable authority.
- [ ] No memory persistence or knowledge-store mutation is implied.
- [ ] No approval, promotion, execution, or Target-state authority is claimed.
- [ ] All placeholders are resolved or safe stop is recorded.

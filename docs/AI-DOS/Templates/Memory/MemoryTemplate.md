# AI-DOS Memory Template

## Template Purpose

Use this template to produce a bounded memory artifact that records what may be retained, why it may be retained, where it came from, who may retrieve it, when it must be reviewed or forgotten, and which authority governs correction or deletion.

This template does not persist or retrieve data, run the Memory Engine, select a storage provider, establish truth, authorize disclosure, or mutate product or Target state.

## Required Inputs

- memory purpose and bounded subject;
- memory owner and intended consumer;
- source record and provenance;
- applicable persistence, retrieval, correction, and deletion authorities;
- sensitivity and protected-boundary constraints;
- retention period, review trigger, expiry rule, and forgetting rule;
- integrity, freshness, supersession, contradiction, and unresolved-risk state.

Stop when any required input is missing or ambiguous.

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Classification | Memory Artifact |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Created | {{CREATED}} |
| Last Updated | {{LAST_UPDATED}} |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |

Use STD-010 metadata only when applicable. Metadata does not create persistence, access, truth, approval, or deletion authority.

## 1. Memory Identity

| Field | Value |
|:---|:---|
| Subject | {{MEMORY_SUBJECT}} |
| Purpose | {{MEMORY_PURPOSE}} |
| Bounded Scope | {{BOUNDED_SCOPE}} |
| Memory Owner | {{MEMORY_OWNER}} |
| Intended Consumer | {{INTENDED_CONSUMER}} |
| Memory Classification | {{MEMORY_CLASSIFICATION}} |
| Sensitivity | {{SENSITIVITY}} |
| Persistence Authority | {{PERSISTENCE_AUTHORITY}} |
| Retrieval Authority | {{RETRIEVAL_AUTHORITY}} |
| Correction Authority | {{CORRECTION_AUTHORITY}} |
| Deletion Authority | {{DELETION_AUTHORITY}} |

## 2. Source and Provenance

| Source ID | Source Type | Source Location | Source Owner | Captured At | Integrity Notes | Authority Status |
|:---|:---|:---|:---|:---|:---|:---|
| {{SOURCE_ID}} | {{SOURCE_TYPE}} | {{SOURCE_LOCATION}} | {{SOURCE_OWNER}} | {{CAPTURED_AT}} | {{INTEGRITY_NOTES}} | {{SOURCE_AUTHORITY_STATUS}} |

Source presence does not establish truth, canonical status, or retention authority.

## 3. Memory Content

{{MEMORY_CONTENT}}

Classify statements as facts, claims, decisions, assumptions, inferences, observations, or unresolved matters when applicable. Retention does not convert one category into another.

## 4. Retention and Review

| Field | Value |
|:---|:---|
| Retention Basis | {{RETENTION_BASIS}} |
| Retention Period | {{RETENTION_PERIOD}} |
| Review Trigger | {{REVIEW_TRIGGER}} |
| Review Owner | {{REVIEW_OWNER}} |
| Expiry Rule | {{EXPIRY_RULE}} |
| Forgetting Rule | {{FORGETTING_RULE}} |
| Legal or Policy Hold | {{LEGAL_OR_POLICY_HOLD}} |

Persistence intent and actual persistence state must remain distinct.

## 5. Retrieval and Disclosure

- permitted consumers: {{PERMITTED_CONSUMERS}}
- permitted uses: {{PERMITTED_USES}}
- prohibited uses: {{PROHIBITED_USES}}
- prohibited disclosure: {{PROHIBITED_DISCLOSURE}}
- retrieval constraints: {{RETRIEVAL_CONSTRAINTS}}
- redaction requirements: {{REDACTION_REQUIREMENTS}}

Technical retrievability does not imply retrieval permission.

## 6. Freshness, Integrity, and Status

| Field | Value |
|:---|:---|
| Freshness | {{FRESHNESS}} |
| Integrity Status | {{INTEGRITY_STATUS}} |
| Validation Status | {{VALIDATION_STATUS}} |
| Supersession Status | {{SUPERSESSION_STATUS}} |
| Contradiction Status | {{CONTRADICTION_STATUS}} |
| Persistence Status | {{PERSISTENCE_STATUS}} |
| Last Verified | {{LAST_VERIFIED}} |

Validation, canonical, approved, persistent, superseded, expired, or deleted status may be recorded only when supplied by the applicable authority.

## 7. Corrections and Supersession

| Change ID | Affected Content | Change Type | Reason | Authority | Effective At | Prior Record Handling |
|:---|:---|:---|:---|:---|:---|:---|
| {{CHANGE_ID}} | {{AFFECTED_CONTENT}} | {{CHANGE_TYPE}} | {{REASON}} | {{CHANGE_AUTHORITY}} | {{EFFECTIVE_AT}} | {{PRIOR_RECORD_HANDLING}} |

Do not silently overwrite prior records when provenance, auditability, or policy requires preservation.

## 8. Expiry, Deletion, and Forgetting

- expiry condition: {{EXPIRY_CONDITION}}
- deletion trigger: {{DELETION_TRIGGER}}
- deletion method or handling requirement: {{DELETION_HANDLING}}
- deletion evidence: {{DELETION_EVIDENCE}}
- exceptions or holds: {{EXCEPTIONS_OR_HOLDS}}
- post-deletion references: {{POST_DELETION_REFERENCES}}

The template records requirements; it does not execute deletion or forgetting.

## 9. Risks and Unresolved Matters

{{RISKS_AND_UNRESOLVED_MATTERS}}

## 10. Authority Boundary

This artifact does not:

- run the Memory Engine;
- persist, retrieve, index, synchronize, rank, or delete records;
- select a storage backend or provider;
- establish truth, canonical status, approval, certification, or promotion;
- authorize disclosure or protected-boundary exceptions;
- prepare an Execution Contract or dispatch a provider;
- mutate product or Target state.

## 11. Safe Stop

Stop when purpose, owner, provenance, sensitivity, retention authority, retrieval authority, correction authority, deletion authority, expiry rule, protected boundary, intended consumer, or persistence status is missing or ambiguous.

## 12. Completion Checklist

- [ ] Purpose, subject, owner, and intended consumer are explicit.
- [ ] Source provenance and integrity notes are recorded.
- [ ] Persistence intent is separated from persistence status.
- [ ] Retrieval permission is separated from technical retrievability.
- [ ] Retention, review, expiry, deletion, and forgetting rules are explicit.
- [ ] Sensitivity, disclosure, and redaction constraints are recorded.
- [ ] Corrections, contradictions, and supersession are preserved.
- [ ] No truth, canonicalization, execution, or mutation authority is inferred.
- [ ] Missing authority or ambiguity triggers safe stop.

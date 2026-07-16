# Context Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-CTX-CONTEXT` |
| Title | Context Template |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Context Template |
| Document Type | Template |
| Owner | AI-DOS Template Library |
| Scope | Reusable structure for bounded context artifacts. |
| Out of Scope | Context Engine behavior, Context Assembly, Resolved Target Context construction, truth resolution, authority resolution, memory, knowledge ownership, execution authorization, and Target-state mutation. |
| Dependencies | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/TemplateIndex.md`; `docs/AI/Templates/Context/ContextFamily.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; STD-010 when applicable. |
| Produces | A bounded context artifact with declared purpose, scope, source provenance, assumptions, constraints, exclusions, freshness, sensitivity, gaps, and intended consumer. |

## 1. Purpose

Use this template to record context required by a declared consumer without performing operational context assembly or creating authority over the referenced material.

## 2. Required Inputs

- artifact identifier and title;
- context purpose;
- owning authority;
- intended consumer;
- bounded scope;
- source inventory and provenance;
- inclusion and exclusion rules;
- freshness or validity requirements;
- sensitivity and protected-boundary constraints;
- known assumptions, gaps, and unresolved matters.

## 3. Produced-Artifact Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | `{{TITLE}}` |
| Version | `{{VERSION}}` |
| Status | `{{STATUS}}` |
| Owner | `{{OWNER}}` |
| Purpose | `{{PURPOSE}}` |
| Intended Consumer | `{{INTENDED_CONSUMER}}` |
| Scope | `{{SCOPE}}` |
| Out of Scope | `{{OUT_OF_SCOPE}}` |
| Source Set | `{{SOURCE_SET}}` |
| Source Provenance | `{{SOURCE_PROVENANCE}}` |
| Freshness Rule | `{{FRESHNESS_RULE}}` |
| Sensitivity | `{{SENSITIVITY}}` |
| Protected Boundaries | `{{PROTECTED_BOUNDARIES}}` |
| Validity Window | `{{VALIDITY_WINDOW}}` |
| Related Specifications | `{{RELATED_SPECIFICATIONS}}` |

## 4. Context Purpose

Describe the exact decision, review, execution preparation, analysis, or authoring task for which the context is assembled.

The purpose must not be broadened implicitly.

## 5. Scope and Boundaries

### In Scope

`{{IN_SCOPE}}`

### Out of Scope

`{{OUT_OF_SCOPE_DETAILS}}`

### Protected or Restricted Areas

`{{PROTECTED_OR_RESTRICTED_AREAS}}`

## 6. Source Inventory

| Source | Owner | Classification | Provenance | Freshness | Trust Status | Notes |
|:---|:---|:---|:---|:---|:---|:---|
| `{{SOURCE}}` | `{{SOURCE_OWNER}}` | `{{SOURCE_CLASSIFICATION}}` | `{{PROVENANCE}}` | `{{FRESHNESS}}` | `{{TRUST_STATUS}}` | `{{NOTES}}` |

Source presence does not establish source-of-truth status. Record the applicable owning authority separately.

## 7. Context Classification

### Declared Facts

`{{DECLARED_FACTS}}`

### Claims Requiring Verification

`{{CLAIMS_REQUIRING_VERIFICATION}}`

### Decisions Already Made

`{{DECISIONS_ALREADY_MADE}}`

### Assumptions

`{{ASSUMPTIONS}}`

### Constraints

`{{CONSTRAINTS}}`

### Inferences

`{{INFERENCES}}`

### Unresolved Matters

`{{UNRESOLVED_MATTERS}}`

These categories must remain distinct. An inference must not be presented as a declared fact.

## 8. Relevant Relationships

Record dependencies, precedence, ownership, consumes/produces links, and conflicts only when supported by declared sources.

`{{RELEVANT_RELATIONSHIPS}}`

## 9. Freshness and Validity

- As-of date or event: `{{AS_OF}}`
- Refresh trigger: `{{REFRESH_TRIGGER}}`
- Expiry or invalidation rule: `{{EXPIRY_RULE}}`
- Stale-source handling: `{{STALE_SOURCE_HANDLING}}`

## 10. Sensitivity and Disclosure

- sensitivity classification: `{{SENSITIVITY_CLASSIFICATION}}`
- permitted consumers: `{{PERMITTED_CONSUMERS}}`
- prohibited disclosure: `{{PROHIBITED_DISCLOSURE}}`
- redaction requirements: `{{REDACTION_REQUIREMENTS}}`

## 11. Gaps and Blockers

| Gap or Blocker | Impact | Required Resolution | Owner |
|:---|:---|:---|:---|
| `{{GAP_OR_BLOCKER}}` | `{{IMPACT}}` | `{{REQUIRED_RESOLUTION}}` | `{{RESOLUTION_OWNER}}` |

## 12. Handoff

- intended consumer: `{{INTENDED_CONSUMER}}`
- permitted use: `{{PERMITTED_USE}}`
- prohibited use: `{{PROHIBITED_USE}}`
- required downstream validation: `{{DOWNSTREAM_VALIDATION}}`

This artifact is handed to the declared consumer. It does not invoke the Context Engine, perform Context Assembly, prepare an Execution Contract, or authorize execution.

## 13. Authority Boundary

This template and artifacts produced from it do not:

- determine canonical truth;
- resolve authority conflicts;
- construct Resolved Target Context;
- write knowledge or memory stores;
- select work, route workflows, select commands, or dispatch providers;
- approve, certify, promote, release, or mutate product or Target state.

## 14. Safe Stop

Stop and report a blocker when purpose, owner, scope, provenance, freshness, trust status, sensitivity, protected boundaries, or intended consumer is missing or ambiguous.

Do not fill missing context by invention or silently widen the authorized source set.

## 15. Completion Checklist

- [ ] Purpose and intended consumer are explicit.
- [ ] Scope and exclusions are bounded.
- [ ] Every source has owner and provenance.
- [ ] Freshness and validity rules are declared.
- [ ] Facts, claims, decisions, assumptions, constraints, and inferences are separated.
- [ ] Sensitivity and protected boundaries are recorded.
- [ ] Gaps and blockers are visible.
- [ ] Handoff and permitted use are explicit.
- [ ] No Context Engine, Context Assembly, authority-resolution, memory, knowledge, execution, approval, certification, or mutation authority is claimed.
- [ ] All placeholders are resolved before use as a completed artifact.

# STD-002 — Discovery YAML Schema

> **Parent Standard:** [STD-002 — Discovery Standard](../STD-002-Discovery-Standard.md) (`AI-DOS-STD-002`)  
> **Related Appendix:** [Appendix A — Discovery Classification Catalog](../../Discovery/STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md)  
> **Related JSON Schema:** [`STD-002-Discovery.schema.json`](./STD-002-Discovery.schema.json)  
> **Executable YAML Schema:** [`STD-002-Discovery.schema.yaml`](./STD-002-Discovery.schema.yaml)  
> **Version:** 1.0.0-alpha  
> **Status:** Draft

---

## 1. Status

| Property | Value                                  |
|:---|:---------------------------------------|
| **Document** | STD-002 — Discovery YAML Schema        |
| **Identifier** | `AI-DOS-STD-002-SCHEMA-YAML`            |
| **Version** | 1.0.0-alpha                            |
| **Status** | Draft                                  |
| **Type** | Technical Schema Specification         |
| **Classification** | Discovery Machine-Readable YAML Schema |
| **Authority** | STD-002 — Discovery Standard           |
| **Owner** | Framework Architecture Team            |
| **Maintainers** | Framework Architecture Team            |
| **Directory** | `docs/AI-DOS/Architecture/Standards/Schemas/`        |
| **Created** | 2026-07-04                             |
| **Last Updated** | 2026-07-04                             |

---

## 2. Purpose

This document defines the canonical YAML representation forAI-DOS Discovery artifacts.

The YAML representation exists for human-friendly authoring, review, repository storage, configuration workflows, AI-assisted editing, and governance-controlled documentation pipelines.

The YAML schema mirrors the canonical JSON Schema contract. YAML is an authoring and interchange representation; it shall not redefine the Discovery model.

---

## 3. Scope

This schema governs YAML documents representing a single Discovery artifact.

It defines:

- identity metadata;
- classification metadata;
- ownership metadata;
- lifecycle metadata;
- relationship references;
- evidence references;
- AI provenance;
- traceability;
- validation metadata;
- extensions.

It does not define Finding, Evidence, Risk, Recommendation, Decision, storage behavior, API transport, runtime execution, or platform-specific serialization.

---

## 4. YAML Design Principles

### 4.1 YAML Mirrors JSON

The YAML Discovery representation shall remain structurally equivalent to the executable JSON Schema.

### 4.2 Human-Friendly, Machine-Validatable

YAML may be easier for humans to read and maintain, but it shall remain machine-validatable against the same canonical model.

### 4.3 No YAML-Only Semantics

YAML-specific features shall not introduce behavior unavailable in JSON.

### 4.4 Explicit Values

YAML Discovery records should prefer explicit arrays and objects over shorthand notation when clarity improves governance review.

### 4.5 Extension Discipline

Extensions shall exist only under `extensions` and shall not redefine canonical fields.

---

## 5. Root Object

Required root fields:

- `identity`
- `classification`
- `ownership`
- `lifecycle`
- `relationships`
- `evidence`
- `traceability`
- `metadata`

Optional root fields:

- `aiProvenance`
- `validation`
- `extensions`

---

## 6. Canonical YAML Schema

The executable YAML schema is maintained as:

```text
STD-002-Discovery.schema.yaml
```

It is a YAML-formatted JSON Schema Draft 2020-12 document. Tooling may convert it to JSON without loss of meaning.

---

## 7. Canonical YAML Example

```yaml
identity:
  id: DISC-ARCH-001
  title: Runtime and Governance circular dependency
  version: 1.0.0-alpha
  status: observed
  createdAt: '2026-07-04T12:00:00Z'
  updatedAt: '2026-07-04T12:00:00Z'

classification:
  primaryDomain: DISC-ARCH
  secondaryTags:
    - dependency
    - coupling
    - architecture
  discoveryType: conflict
  severity: SEV-4
  confidence: CONF-2

ownership:
  owner:
    id: framework-architecture-team
    name: Framework Architecture Team
    type: team
  authority:
    id: framework-governance
    name: Framework Governance
    type: governance-body

lifecycle:
  state: observed
  history: []

relationships: []
evidence: []

traceability:
  origin: dependency-audit

metadata:
  labels:
    - architecture
    - dependency
  keywords:
    - runtime
    - governance
    - cycle
  project: AI-DOS
```

---

## 8. YAML Authoring Rules

YAML Discovery records shall:

- preserve the same field names as JSON;
- use lowercase lifecycle values;
- use canonical enum values for domains, severity, and confidence;
- use arrays for relationships, evidence, labels, keywords, and lifecycle history;
- avoid anchors and aliases in canonical records;
- avoid implicit date coercion by quoting date-time values;
- avoid YAML-only abbreviations.

---

## 9. YAML Constraints

The following are prohibited:

- renaming canonical JSON fields;
- replacing arrays with comma-separated strings;
- using aliases to duplicate canonical sections;
- placing extension fields outside `extensions`;
- using YAML comments as required evidence;
- encoding lifecycle state in metadata instead of `lifecycle.state`.

---

## 10. Conversion Rules

YAML Discovery records may be converted to JSON for validation.

Conversion shall preserve:

- object keys;
- array ordering where relevant;
- string values;
- enum values;
- date-time strings;
- null absence semantics.

Conversion shall not introduce fields, remove fields, normalize identifiers, or infer missing values.

---

## 11. AI Consumption Rules

AI Agents may use YAML Discovery records for authoring and review.

AI Agents shall:

- preserve canonical field names;
- avoid inventing missing required values;
- mark uncertainty through `classification.confidence`;
- place non-canonical additions under `extensions` only;
- preserve traceability metadata.

AI Agents shall not treat YAML comments as evidence, authority, or lifecycle history.

---

## 12. Validation Rules

YAML validation shall verify:

- required root fields exist;
- canonical enum values are used;
- `identity.status` equals `lifecycle.state`;
- relationships are acyclic;
- evidence references are traceable;
- AI provenance exists when AI generated or modified the record.

Structural validation may be performed by converting the YAML record to JSON and validating against the JSON Schema.

---

## 13. Schema Evolution Rules

YAML schema evolution follows the JSON Schema evolution policy.

Future versions may:

- add optional fields;
- add governed extension structures;
- expand metadata;
- introduce additional relationship types.

Future versions shall not:

- rename canonical fields;
- introduce YAML-only semantic fields;
- weaken required fields;
- change lifecycle meanings.

---

## 14. Completion Statement

This document defines the human-readable YAML schema specification forAI-DOS Discovery artifacts.

The executable YAML schema is maintained in `STD-002-Discovery.schema.yaml` and shall remain semantically equivalent to the canonical JSON Schema contract.

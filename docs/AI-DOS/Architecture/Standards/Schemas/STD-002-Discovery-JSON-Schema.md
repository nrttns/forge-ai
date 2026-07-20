# STD-002 — Discovery JSON Schema

> **Parent Standard:** [STD-002 — Discovery Standard](../STD-002-Discovery-Standard.md) (`AI-DOS-STD-002`)  
> **Related Appendix:** [Appendix A — Discovery Classification Catalog](../../Discovery/STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md)  
> **Executable Schema:** [`STD-002-Discovery.schema.json`](./STD-002-Discovery.schema.json)  
> **Version:** 1.0.0-alpha  
> **Status:** Draft

---

## 1. Status

| Property | Value                             |
|:---|:----------------------------------|
| **Document** | STD-002 — Discovery JSON Schema   |
| **Identifier** | `AI-DOS-STD-002-SCHEMA-JSON`       |
| **Version** | 1.0.0-alpha                       |
| **Status** | Draft                             |
| **Type** | Technical Schema Specification    |
| **Classification** | Discovery Machine-Readable Schema |
| **Authority** | STD-002 — Discovery Standard      |
| **Owner** | Framework Architecture Team       |
| **Maintainers** | Framework Architecture Team       |
| **Directory** | `docs/AI/Architecture/Standards/Schemas/`   |
| **Created** | 2026-07-04                        |
| **Last Updated** | 2026-07-04                        |

---

## 2. Purpose

This document defines the canonical JSON Schema representation forAI-DOS Discovery artifacts.

The schema exists to make Discovery records machine-readable, validatable, portable, and consumable by AI Agents, Runtime systems, Validation Engines, Review Engines, Certification workflows, and future platform adapters.

This Markdown document explains the schema contract. The executable JSON Schema is maintained as:

```text
STD-002-Discovery.schema.json
```

---

## 3. Scope

This schema governs the JSON representation of a single Discovery artifact.

It defines:

- required identity fields;
- classification metadata;
- ownership metadata;
- lifecycle state;
- relationship references;
- evidence references;
- AI provenance;
- traceability metadata;
- validation metadata;
- extension rules.

It does not define Finding, Evidence, Risk, Recommendation, Decision, storage, transport, or runtime execution behavior.

---

## 4. Schema Design Principles

### 4.1 Canonical by Default

Every JSON Discovery record shall conform to the executable schema unless a governed extension explicitly permits additional structure.

### 4.2 Strict Required Fields

A Discovery record without identity, classification, ownership, lifecycle, relationships, evidence, traceability, and metadata is invalid.

### 4.3 Technology Neutrality

The schema defines architectural semantics. It shall not assume a programming language, database, framework, storage engine, runtime, or API gateway.

### 4.4 Extension Without Redefinition

Extensions may add fields only under the approved `extensions` object. Extensions shall not redefine canonical fields.

### 4.5 AI Consumability

The schema shall be usable by AI systems without hidden context. Every machine-readable Discovery record shall contain enough metadata for classification, reasoning, validation, and traceability.

---

## 5. Root Object

The root object represents one Discovery artifact.

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

The root object rejects undeclared top-level properties.

---

## 6. Identity Object

The `identity` object establishes immutable Discovery identity.

Required fields:

- `id`
- `title`
- `version`
- `status`
- `createdAt`
- `updatedAt`

The `identity.status` value shall match `lifecycle.state`.

---

## 7. Classification Object

The `classification` object declares the canonical Discovery classification.

Required fields:

- `primaryDomain`
- `discoveryType`
- `severity`
- `confidence`

Optional fields:

- `secondaryTags`

A Discovery shall declare exactly one primary domain, exactly one discovery type, exactly one severity, and exactly one confidence.

---

## 8. Ownership Object

The `ownership` object separates accountability from authority.

Required fields:

- `owner`
- `authority`

Optional fields:

- `steward`
- `maintainers`
- `reviewers`
- `consumers`

The owner is accountable. The authority holds decision rights.

---

## 9. Lifecycle Object

The `lifecycle` object declares the current state and transition history.

Required fields:

- `state`
- `history`

Lifecycle state values are:

```text
draft
observed
verified
accepted
consumed
historical
archived
```

Transition validity is governed by Appendix A's lifecycle state machine.

---

## 10. Relationships Object

The `relationships` array links a Discovery to downstream artifacts.

Canonical relationship types:

- `DISCOVERED_BY`
- `SUPPORTED_BY`
- `PRODUCES`
- `IDENTIFIES`
- `RECOMMENDS`
- `RESULTS_IN`
- `VALIDATED_BY`
- `CERTIFIED_BY`

Relationships shall be acyclic and traceable.

---

## 11. Evidence Object

The `evidence` array records evidence items supporting the Discovery.

Evidence strengthens confidence. Evidence does not determine classification automatically.

---

## 12. AI Provenance Object

The `aiProvenance` object records AI-generated or AI-assisted classification metadata.

When AI generated or modified a Discovery, provenance should include:

- `generatedBy`
- `model`
- `modelVersion`
- `reasoningSummary`
- `confidenceExplanation`
- `generatedAt`

AI provenance without reasoning is incomplete.

---

## 13. Traceability Object

The `traceability` object preserves origin and derived artifact references.

Required field:

- `origin`

Traceability shall never be removed.

---

## 14. Validation Object

The `validation` object records validation status.

Allowed validation statuses:

- `pending`
- `passed`
- `failed`

Validation output may include failed checks and validator metadata.

---

## 15. Metadata Object

The `metadata` object provides search, project, component, repository, and notes information.

Metadata shall not alter canonical classification.

---

## 16. Extensions Object

The `extensions` object is the only approved location for governed schema extensions.

Extensions shall not:

- rename canonical fields;
- redefine canonical meanings;
- weaken required fields;
- bypass lifecycle, ownership, or authority rules.

---

## 17. Cross-Field Constraints

JSON Schema validates structure. Governance validators shall additionally verify:

- `identity.status` equals `lifecycle.state`;
- lifecycle transitions are legal;
- relationship targets exist;
- relationship graph is acyclic;
- evidence supports the declared confidence;
- AI provenance exists when AI generated or modified the artifact.

---

## 18. Schema Evolution Rules

Future versions may:

- add optional properties;
- introduce governed extension objects;
- add new relationship types;
- extend metadata.

Future versions shall not:

- rename canonical fields;
- change required field semantics;
- redefine identifiers;
- alter lifecycle meanings.

Breaking changes require a new major schema version.

---

## 19. Canonical JSON Example

```json
{
  "identity": {
    "id": "DISC-ARCH-001",
    "title": "Runtime and Governance circular dependency",
    "version": "1.0.0-alpha",
    "status": "observed",
    "createdAt": "2026-07-04T12:00:00Z",
    "updatedAt": "2026-07-04T12:00:00Z"
  },
  "classification": {
    "primaryDomain": "DISC-ARCH",
    "secondaryTags": ["dependency", "coupling", "architecture"],
    "discoveryType": "conflict",
    "severity": "SEV-4",
    "confidence": "CONF-2"
  },
  "ownership": {
    "owner": {
      "id": "framework-architecture-team",
      "name": "Framework Architecture Team",
      "type": "team"
    },
    "authority": {
      "id": "framework-governance",
      "name": "Framework Governance",
      "type": "governance-body"
    }
  },
  "lifecycle": {
    "state": "observed",
    "history": []
  },
  "relationships": [],
  "evidence": [],
  "traceability": {
    "origin": "dependency-audit"
  },
  "metadata": {
    "labels": ["architecture", "dependency"],
    "keywords": ["runtime", "governance", "cycle"],
    "project": "AI-DOS"
  }
}
```

---

## 20. Completion Statement

This document defines the human-readable specification for theAI-DOS Discovery JSON Schema.

The executable schema is maintained in `STD-002-Discovery.schema.json` and shall be treated as the machine-readable validation contract for STD-002 Discovery artifacts.

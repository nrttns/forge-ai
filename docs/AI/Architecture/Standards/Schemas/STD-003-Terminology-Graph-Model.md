# STD-003 — Terminology Graph Model

> **AI-DOS v3 · Architecture Schema**  
> Companion graph model for `STD-003 — Terminology Standard`

---

| Property | Value |
|:---|:---|
| **Document** | STD-003 — Terminology Graph Model |
| **Identifier** | `AI-DOS-SCHEMA-STD-003-GRAPH` |
| **Version** | `0.1.0-draft` |
| **Status** | Draft / Candidate Schema |
| **Type** | Graph Model Schema |
| **Authority** | `STD-003 — Terminology Standard` when promoted; candidate until then |
| **Owner** | Framework Architecture Team |
| **Canonical Status** | Not canonical until STD-003 is promoted |

---

## 1. Purpose

This schema defines the candidate graph representation forAI-DOS terminology. It makes each terminology entry addressable, relatable, referenceable, and validation-ready without promoting STD-003 to canonical status.

## 2. Graph Pattern

The required conceptual pattern is:

```text
Term
  ↓ DEFINES
Concept
  ↓ CONSUMES
Related Terms
  ↓ REFERENCED_BY
Standards
```

This means a vocabulary term defines one concept, that concept consumes related terminology, and the term/concept pair can be referenced by standards and other framework artifacts.

## 3. Node Types

| Node Type | Purpose | Required Properties |
|:---|:---|:---|
| `Term` | Canonical terminology label or tracked synonym. | `id`, `label`, `status`, `owner`, `definition`, `canonical`, `standard` |
| `Concept` | Meaning represented by a term. | `id`, `label`, `purpose`, `owner`, `definition` |
| `RelatedTerm` | A canonical related term or synonym used for migration and traversal. | `id`, `label`, `relationKind`, `canonicalTarget` |
| `Standard` | A standard, schema, meta model, runtime document, command, workflow, or validation artifact that references terminology. | `id`, `label`, `documentPath`, `status`, `owner` |
| `ForbiddenSynonym` | A prohibited alias or misleading phrase. | `id`, `label`, `canonicalReplacement`, `reason` |

## 4. Edge Types

| Edge Type | From | To | Meaning | Cardinality |
|:---|:---|:---|:---|:---|
| `DEFINES` | `Term` | `Concept` | The term defines exactly one concept. | One required per canonical term. |
| `CONSUMES` | `Concept` | `RelatedTerm` | The concept relies on or is explained through another term. | Zero or more. |
| `REFERENCED_BY` | `Term` or `Concept` | `Standard` | A document uses or governs the term or concept. | Zero or more while draft; one or more before certification. |
| `HAS_ALLOWED_SYNONYM` | `Term` | `RelatedTerm` | The related term is an allowed synonym. | Zero or more. |
| `HAS_FORBIDDEN_SYNONYM` | `Term` | `ForbiddenSynonym` | The phrase must not be used for this concept. | Zero or more. |
| `OWNED_BY` | `Term` or `Concept` | `Standard` | The document or subsystem owns the term. | One required. |
| `MIGRATES_FROM` | `Term` | `RelatedTerm` | A v3 term preserves compatibility with an RC2 term. | Zero or more. |

## 5. Term Node Contract

```yaml
Term:
  id: string
  label: string
  status: Draft | Candidate | Canonical | Deprecated | Forbidden
  owner: string
  definition: string
  purpose: string
  canonical: boolean
  standard: STD-003
  allowedSynonyms:
    - string
  forbiddenSynonyms:
    - string
  relatedTerms:
    - string
  referencedBy:
    - string
```

## 6. Concept Node Contract

```yaml
Concept:
  id: string
  label: string
  owner: string
  definition: string
  purpose: string
  consumedTerms:
    - string
  governingStandard: string
```

## 7. Standard Node Contract

```yaml
Standard:
  id: string
  label: string
  documentPath: string
  status: Draft | Candidate | Canonical | Deprecated
  owner: string
  referencesTerms:
    - string
```

## 8. Graph Constraints

- Every canonical `Term` MUST have exactly one outgoing `DEFINES` edge.
- Every canonical `Term` MUST have one owner.
- Every `Concept` MUST be defined by at least one canonical `Term`.
- A `ForbiddenSynonym` MUST have one canonical replacement.
- A `RelatedTerm` used as an allowed synonym MUST resolve to exactly one canonical `Term`.
- A `Standard` MUST NOT define a duplicate term when a referenced canonical term exists.
- Runtime, Meta Model, Standards, and Schema documents MUST reference the same canonical `Term` node for the same concept.

## 9. Validation Queries

Candidate validation can be expressed as graph checks:

```text
Find Term nodes without DEFINES edges.
Find Concepts defined by more than one canonical Term.
Find RelatedTerm synonyms mapped to multiple canonical Terms.
Find ForbiddenSynonym nodes without canonicalReplacement.
Find Standards that use labels matching ForbiddenSynonym nodes.
Find Runtime or Meta Model references that bypass canonical Term nodes.
```

## 10. Example

```text
(Term: "Artifact")
  -[:DEFINES]->
(Concept: "Governed addressable framework object")
  -[:CONSUMES]->
(RelatedTerm: "Identity")
  -[:REFERENCED_BY]->
(Standard: "M.1 — Artifact Meta Model")
```

Additional edges:

```text
(Term: "Artifact") -[:HAS_ALLOWED_SYNONYM]-> (RelatedTerm: "Governed artifact")
(Term: "Artifact") -[:HAS_FORBIDDEN_SYNONYM]-> (ForbiddenSynonym: "File")
(Term: "Artifact") -[:OWNED_BY]-> (Standard: "M.1 — Artifact Meta Model")
```

## 11. AI Usage Rules

AI agents using this graph model must:

- resolve synonyms to canonical `Term` nodes before drafting documents;
- report duplicate concept definitions as terminology findings;
- preserve Draft / Candidate status in generated outputs;
- avoid treating this schema as canonical before governance promotion;
- cite the owning standard when applying a term.

## 12. Completion Checklist

- [x] Required graph chain is represented.
- [x] Node types are defined.
- [x] Edge types are defined.
- [x] Term, Concept, and Standard contracts are defined.
- [x] Constraints and validation queries are defined.
- [x] AI usage rules are defined.

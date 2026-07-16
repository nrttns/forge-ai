# AI-DOS Context Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI/Templates/Context/`.

## Purpose

The Context family provides reusable structures for recording bounded context packages, including purpose, scope, source references, assumptions, constraints, exclusions, freshness, provenance, and intended consumer.

## Component Inventory

| Component | Purpose |
|:---|:---|
| `ContextTemplate.md` | Generic bounded context-package structure. |

## Required Inputs

- context purpose and intended consumer;
- owning authority and bounded scope;
- source set and provenance;
- inclusion and exclusion rules;
- freshness or validity requirements;
- sensitivity, confidentiality, and protected-boundary constraints;
- assumptions, unresolved gaps, and safe-stop conditions.

## Authority Boundary

The Context family owns reusable authoring structure only.

It does not own or perform:

- Context Engine behavior;
- System Layer Context Assembly;
- Resolved Target Context construction;
- source-of-truth classification;
- authority resolution;
- knowledge or memory truth;
- task planning, workflow routing, command selection, or execution authorization;
- provider dispatch, validation, review, certification, approval, release, or Target-state mutation.

A produced context artifact does not become authoritative merely because it uses this family. Authority depends on the declared owner, source provenance, applicable policy, freshness, and explicit consuming contract.

## Selection Rules

1. Use this family only when a bounded context artifact is explicitly required.
2. Identify purpose, owner, scope, sources, exclusions, freshness, sensitivity, and intended consumer before instantiation.
3. Treat source artifacts as references; do not silently convert them into canonical truth.
4. Distinguish facts, claims, assumptions, constraints, decisions, unresolved matters, and inferred relationships.
5. Do not infer Target Repository state, ProjectStatus, Roadmap, DevelopmentPhases, Runtime state, Engine state, memory, or knowledge authority.
6. Return the completed artifact to the owning or consuming domain; the template does not dispatch or activate it.

## Context-Domain Separation

```text
Context Template
    reusable authoring structure

Context Artifact
    bounded context record owned by a declared authority

System Layer Context Assembly
    operational assembly procedure outside Templates

Context Engine
    Runtime specialization outside Templates

Resolved Target Context
    invocation-bounded operational input, not a template output by default
```

## Target Independence

No Forge AI path, ProjectStatus path, DevelopmentPhases path, Roadmap path, fixed source hierarchy, fixed context lifecycle, self-hosting convention, or repository-specific context model is required by default.

Target-owned context may be referenced only when explicitly supplied within the active invocation boundary.

## Safe Stop

Stop when purpose, owner, scope, source provenance, inclusion rules, exclusions, freshness, sensitivity, intended consumer, or protected boundary is missing or ambiguous.

Do not invent missing context, silently widen scope, or treat stale or unverified material as authoritative.

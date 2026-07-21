# AI-DOS Knowledge Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI-DOS/Templates/Knowledge/`.

## Purpose

The Knowledge family provides reusable structures for recording bounded knowledge claims together with provenance, confidence, freshness, contradiction state, ownership, applicability, and intended consumer.

A Knowledge template is an authoring structure only. It does not establish truth, validate a claim, run the Knowledge Engine, resolve authority, persist memory, promote content to canonical status, authorize execution, or mutate product or Target state.

## Active Components

| Component | Purpose |
|:---|:---|
| `KnowledgeTemplate.md` | A generic bounded knowledge artifact that separates claims, evidence, provenance, confidence, freshness, contradictions, limitations, and canonical-status assertions. |

No specialized knowledge subfamily is implied by this entry.

## Required Inputs

- artifact purpose and bounded scope;
- owner and intended consumer;
- claim set and claim type;
- source set and provenance;
- evidence basis;
- confidence vocabulary and rationale;
- freshness or review date;
- contradiction and uncertainty state;
- sensitivity, access, and protected-boundary constraints;
- applicable authority for truth, canonicalization, promotion, persistence, or retirement decisions.

## Authority Boundary

The Knowledge family owns reusable knowledge-artifact structure only.

It does not own:

- factual truth or source-of-truth classification;
- validation rules or evidence evaluation;
- Knowledge Engine behavior;
- Context Engine or Context Assembly;
- authority resolution;
- memory persistence, retrieval, retention, or forgetting;
- canonicalization, approval, promotion, release, or retirement authority;
- workflow routing, command selection, Execution Contracts, provider dispatch, or mutation;
- ProjectStatus, DevelopmentPhases, Roadmap, registry, runtime, engine, or Target-state ownership.

A produced knowledge artifact gains authority only through its declared owner, provenance, evidence, applicable truth authority, lifecycle, and explicit governance route.

## Claim Semantics

A knowledge artifact must distinguish source statements, observed facts, asserted claims, validated findings, decisions, assumptions, hypotheses, inferences, unresolved contradictions, and deprecated or superseded claims.

Recording a claim does not make it true. Linking a source does not make that source canonical. High confidence does not create authority.

## Knowledge, Context, and Memory Separation

```text
Context
    bounded information assembled for a purpose

Knowledge
    structured claims with provenance and epistemic status

Memory
    governed persistence and retrieval of retained records
```

One domain may consume artifacts from another, but authority is not inherited automatically.

## Selection Rules

1. Use this family only when a bounded knowledge artifact is explicitly required.
2. Identify the owner, intended consumer, claim scope, provenance, evidence, confidence vocabulary, freshness rule, and applicable truth authority before selecting the template.
3. Keep facts, claims, assumptions, inferences, and decisions distinct.
4. Record contradictions and unresolved uncertainty rather than collapsing them into a single conclusion.
5. Do not mark content canonical, approved, validated, persistent, or authoritative unless the applicable authority explicitly supplies that status.
6. Resolve all placeholders before treating the artifact as complete.
7. Validate the produced artifact against `TemplateLibrary.md`, TPL-000, STD-010 when applicable, and the authority governing the knowledge subject.

## Target Independence

No Forge AI path, ProjectStatus, DevelopmentPhases, Roadmap, fixed source hierarchy, fixed confidence vocabulary, fixed knowledge store, fixed memory system, or repository-specific lifecycle is required by default.

## Safe Stop

Stop when purpose, scope, owner, claim type, source provenance, evidence basis, confidence semantics, freshness, contradiction state, sensitivity, truth authority, canonical-status authority, or intended consumer is missing or ambiguous.

Do not invent truth, provenance, confidence, canonical status, or persistence authority to complete a knowledge artifact.

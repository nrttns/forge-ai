# AI-DOS Memory Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI/Templates/Memory/`.

## Purpose

The Memory family provides reusable structures for documenting bounded memory records, retention intent, provenance, retrieval constraints, lifecycle status, sensitivity, expiry, and forgetting requirements.

A Memory template is an authoring structure only. It does not run the Memory Engine, persist or retrieve data, select a storage backend, establish truth, promote knowledge, authorize disclosure, or mutate product or Target state.

## Active Components

| Component | Purpose |
|:---|:---|
| `MemoryTemplate.md` | Generic bounded memory-record structure with explicit provenance, retention, retrieval, sensitivity, expiry, deletion, and authority semantics. |

No specialized memory subfamily is implied by this entry.

## Required Inputs

- memory purpose and bounded subject;
- owner and intended consumers;
- source record and provenance;
- memory classification and sensitivity;
- retention, review, expiry, deletion, or forgetting rules;
- permitted retrieval and prohibited disclosure;
- applicable persistence, access, correction, and deletion authorities;
- integrity, freshness, supersession, contradiction, and unresolved-risk status.

## Authority Boundary

The Memory family owns reusable memory-artifact structure only.

It does not own or perform:

- Memory Engine behavior;
- persistence, retrieval, indexing, ranking, synchronization, or storage-provider selection;
- source-of-truth or knowledge-truth classification;
- validation, approval, canonicalization, promotion, or certification;
- access-control decisions or protected-boundary exceptions;
- workflow routing, command selection, Execution Contracts, provider dispatch, or mutation;
- ProjectStatus, DevelopmentPhases, Roadmap, Runtime state, Engine state, or Target-state ownership.

A produced memory artifact does not become persistent, authoritative, retrievable, or approved merely because it uses this family. Those properties require explicit owning authorities and operational mechanisms outside Templates.

## Memory, Knowledge, and Context Separation

```text
Context
    bounded information assembled for a purpose

Knowledge
    structured claims with provenance and epistemic status

Memory
    governed record of what may be retained, retrieved, reviewed, expired, corrected, or forgotten
```

No authority is inherited automatically between these domains.

## Selection Rules

1. Use this family only when a bounded memory artifact is explicitly required.
2. Identify owner, subject, provenance, intended consumer, retention authority, access authority, deletion authority, sensitivity, expiry, and review rules before instantiation.
3. Record persistence intent separately from actual persistence state.
4. Record retrieval permission separately from technical retrievability.
5. Do not infer truth, canonical status, approval, promotion, or knowledge authority from retention.
6. Preserve corrections, supersession, contradiction, expiry, and deletion requirements explicitly.
7. Validate produced artifacts against `TemplateLibrary.md`, TPL-000, STD-010 when applicable, and the governing memory authority.

## Target Independence

No Forge AI path, ProjectStatus, DevelopmentPhases, Roadmap, fixed memory store, fixed retention period, fixed retrieval model, fixed provider, repository-specific lifecycle, or self-hosting convention is required by default.

## Safe Stop

Stop when purpose, owner, subject, provenance, sensitivity, retention authority, access authority, deletion authority, expiry rule, intended consumer, protected boundary, or persistence status is missing or ambiguous.

Do not invent retention, access, deletion, persistence, or disclosure authority to complete a memory artifact.

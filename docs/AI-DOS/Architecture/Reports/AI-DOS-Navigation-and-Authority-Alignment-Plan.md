# AI-DOS Navigation and Authority Alignment Plan

## Status

Active alignment checkpoint following completion of the A.1–A.6 architecture normalization.

## Objective

Align all architecture navigation and authority references with the normalized AI-DOS architecture:

```text
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime Architecture
    │       ↓
    │   A.4 Engine Platform
    │       ↓
    │   A.4.1–A.4.7 Engine Platform Foundations
    │       ↓
    │   A.5.0 Engine Specialization Contract
    │       ↓
    │   A.5.1–A.5.12 Engine Specializations
    └── A.6 Distribution Foundation
```

The Runtime and Distribution branches are siblings beneath A.2. Distribution does not derive authority from Runtime, Engine Platform, Engine Specializations, System Layer, Operational Core, agents, workflows, or execution providers.

## Required Navigation Ownership

### Architecture README

`docs/AI-DOS/Architecture/README.md` owns architecture-domain navigation only. It shall identify:

- A.1 as constitutional authority;
- A.2 as the product / Target operational boundary;
- the Runtime and Distribution branches as sibling architecture branches;
- Discovery as non-normative historical evidence;
- Reports as review and validation evidence;
- Standards as cross-cutting conformance authority.

It shall not act as an independent normative architecture specification.

### Architecture RFC README

`docs/AI-DOS/Architecture/RFC/README.md` owns the complete Architecture RFC inventory and reading order. It shall:

- list A.2 through A.6 using their canonical paths;
- show A.4.1–A.4.7 as sibling foundation contracts under A.4;
- show A.5.1–A.5.12 as capability peers under A.5.0;
- show A.6 as a sibling branch to A.3–A.5, not as their downstream continuation;
- distinguish authority order from navigation order;
- avoid treating RFC numbering as an execution pipeline.

### Runtime README

`docs/AI-DOS/Architecture/RFC/Runtime/README.md` owns Runtime-family navigation only. It shall:

- cover A.3 Runtime Architecture;
- point downstream to A.4, A.4.1–A.4.7, and A.5.0–A.5.12;
- state that A.4 foundation RFCs are sibling contracts;
- state that A.5 specialization RFCs are capability peers;
- exclude A.6 from Runtime ownership;
- avoid claiming repository-wide Architecture RFC ownership;
- avoid Target Project planning, ProjectStatus, Roadmap, DevelopmentPhases, or Forge AI fallback authority.

## Repository-wide Reference Rules

All active references shall follow these rules:

1. A.0 is historical discovery evidence and is not normative authority.
2. A.1 is constitutional authority and shall not embed a mutable RFC roadmap.
3. A.2 is upstream of both Runtime and Distribution architecture.
4. A.3 is upstream of A.4 and A.5, but not A.6.
5. A.4.1–A.4.7 are sibling conformance contracts under A.4.
6. A.5.1–A.5.12 are capability peers under A.5.0.
7. A.5 numbering does not define authority, mandatory execution order, or pipeline order.
8. A.6 owns distribution architecture independently of execution architecture.
9. ProjectStatus, DevelopmentPhases, Roadmap, source state, protected areas, validation declarations, and live operational state remain Target-owned.
10. Forge AI is the self-application Product Development Target Project and shall not be used as an external Target fallback.

## Validation Searches

The alignment must search the complete repository for:

- obsolete `Phase A` and `Stage A.x` architecture language;
- A.0 used as normative authority;
- A.6 represented as Engine Model or as downstream of A.5;
- A.3/A.4/A.5 represented as normative upstream dependencies of A.6;
- A.4 foundation RFCs represented as a sequential authority chain;
- A.5 specialization RFCs represented as a sequential authority or mandatory pipeline;
- Runtime README represented as repository-wide RFC authority;
- active references to obsolete pre-migration paths;
- AI-DOS ownership of Target Project planning or live state;
- external Target fallback to Forge AI paths, policies, memory, workflow, registry, evidence, or state.

## Completion Criteria

This checkpoint is complete only when:

- Architecture, RFC, and Runtime indexes agree on the same authority graph;
- every active canonical RFC has exactly one navigation location;
- no index creates authority beyond the documents it lists;
- no obsolete architecture model remains in active navigation;
- no broken canonical path remains;
- no Runtime navigation claims Distribution ownership;
- repository-wide authority references conform to A.1–A.6;
- historical references are explicitly marked non-authoritative.

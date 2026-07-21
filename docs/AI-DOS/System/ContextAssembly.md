# Context Assembly

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.CONTEXT-ASSEMBLY` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI-DOS/System/SystemLayer.md` |
| Scope | Assembly of the minimum sufficient invocation context. |
| Inputs | Boot Result; Invocation Context; applicable AI-DOS authorities; referenced Target resources. |
| Outputs | Assembled Context Package; omissions; conflicts; blockers. |

## 1. Purpose

Context Assembly creates a temporary, task-bounded context package for source-of-truth classification and authority resolution.

It does not redefine loaded content, invent missing Target resources, select a work unit, decide whether execution may proceed, or persist Target state.

## 2. Assembly Rules

Context Assembly shall:

1. begin from the explicit invocation and successful Boot Result;
2. include only authorities and Target resources relevant to the invoked task;
3. preserve source identity, ownership, version, and lifecycle status;
4. separate product, released product, Target, Runtime, Engine, provider, and evidence domains;
5. report missing or contradictory required context rather than filling gaps from memory or Forge AI assumptions.

## 3. Context Package

The package may contain:

- Invocation Context;
- applicable AI-DOS governance, architecture, System, and Operational Core references;
- Target objectives, constraints, authority inputs, execution boundaries, validation requirements, and applicable evidence;
- declared provider capabilities;
- provenance and loading evidence;
- known omissions and blockers.

The package is ephemeral. It is not canonical truth, Target state, memory, approval, certification, or an Execution Contract.

## 4. Non-Ownership

Context Assembly does not own Target planning, AI-DOS architecture, source-of-truth precedence, authority resolution, decision outcomes, execution routing, or release assembly.

## 5. Safe Stop

Stop when task identity is ambiguous, a required context source is missing, ownership cannot be preserved, incompatible versions cannot be reconciled, or the minimum sufficient context cannot be determined.

## 6. Handoff

```text
Boot Result
    ↓
Assembled Context Package
    ↓
SourceOfTruth.md
```

## 7. Validation

- context is task-bounded;
- every item retains provenance and owner;
- no Target planning artifact is required generically;
- no authority or execution decision is made;
- omissions and blockers are explicit.
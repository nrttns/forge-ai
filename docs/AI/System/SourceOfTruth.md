<!--
Identifier: AI-DOS.SYSTEM.SOURCEOFTRUTH
Title: Source of Truth
Version: 2.0.0
Status: Active
Owner: AI-DOS System Layer
Updated: 2026-07-13
-->

# Source of Truth

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.SOURCEOFTRUTH` |
| Title | Source of Truth |
| Version | `2.0.0` |
| Status | Active |
| Classification | AI-DOS System Layer |
| Document Type | System Procedure |
| Owner | AI-DOS System Layer |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-13 |
| Scope | AI-DOS truth selection. |
| Out of Scope | Target operation design, target-owned management models, Runtime implementation, Engine implementation, command definitions, workflow definitions, template definitions, certification, and implementation changes. |
| Normative Authority | Human Governance; AI-DOS System Layer documents. |
| Dependencies | `docs/AI/System/README.md`, `docs/AI/System/TargetRepositoryResolution.md`, `docs/AI/System/BootSequence.md`, `docs/AI/System/ContextAssembly.md`; generic Target Context supplied by invocation. |
| Inputs | Invocation Context; Resolved Target Context; Target Objectives; Target Constraints; Target Authority Inputs; Target Execution Boundaries; Target Validation Requirements. |
| Outputs | System Layer handoff evidence; authority or blocker findings; prepared execution boundary. |
| Related Specifications | `docs/AI/System/README.md`, `docs/AI/System/TargetRepositoryResolution.md`, `docs/AI/System/BootSequence.md`, `docs/AI/System/ContextAssembly.md`, `docs/AI/System/AuthorityModel.md`, `docs/AI/System/DecisionModel.md`, `docs/AI/System/ExecutionSequence.md`, `docs/AI/System/SystemLayerFreeze.md`. |

---

## 1. Purpose

Source of Truth separates AI-DOS System truth from target-supplied context. It is part of the AI-DOS startup path and remains independent of any target-owned management, sequencing, or status model.

This document describes how AI-DOS starts and prepares capability execution. It does not prescribe how any target operates.

## 2. Canonical System Flow

```text
Repository Entry
        ↓
Invocation Context
        ↓
Target Repository Resolution
        ↓
Resolved Target Context
        ↓
Context Assembly
        ↓
Authority Resolution
        ↓
Decision Model
        ↓
Execution Sequence
        ↓
Operational Core
```

| Step | System Meaning |
|:---|:---|
| Repository Entry | The entry point that hands control to AI-DOS startup rules. |
| Invocation Context | The explicit request, scope, constraints, and supplied target inputs. |
| Target Repository Resolution | The procedure that identifies the active Target Repository and creates Resolved Target Context. |
| Resolved Target Context | The normalized target-supplied context accepted by AI-DOS. |
| Context Assembly | The procedure that assembles temporary execution context from accepted inputs. |
| Authority Resolution | The procedure that orders applicable authority inputs and detects conflicts. |
| Decision Model | The procedure that chooses the safe next decision. |
| Execution Sequence | The procedure that prepares bounded capability execution. |
| Operational Core | The downstream AI-DOS capability area receiving prepared work. |

## 3. Accepted Context Model

AI-DOS accepts only the following target concepts in the System Layer:

| Concept | Meaning |
|:---|:---|
| Invocation Context | The explicit invocation request and supplied work boundary. |
| Resolved Target Context | The normalized target context produced by Target Repository Resolution. |
| Applicable Target Resources | Target-supplied resources needed for the authorized work. |
| Target Objectives | The requested outcomes within the invocation. |
| Target Constraints | Limits, exclusions, safety rules, and environmental restrictions. |
| Target Authority Inputs | Authority-bearing inputs supplied or identified for the target. |
| Target Execution Boundaries | File, artifact, scope, and action boundaries for execution. |
| Target Validation Requirements | Checks or evidence expected for the work. |

No additional target-owned planning, status, sequencing, or management construct is required by this System Layer document.

## 4. Responsibilities

Source of Truth shall:

1. Preserve AI-DOS as a reusable provider.
2. Consume only `Invocation Context, Resolved Target Context, Applicable Target Resources, Target Objectives, Target Constraints, Target Authority Inputs, Target Execution Boundaries, and Target Validation Requirements`.
3. Treat missing required input as a blocker.
4. Keep target-owned operating models outside the System Layer.
5. Produce clear handoff evidence for the next System Layer procedure.

## 5. Procedure

| Order | Action | Output |
|:---|:---|:---|
| 1 | Confirm the current step in the canonical flow. | Flow position known. |
| 2 | Read only applicable System Layer inputs and accepted Target Context. | Input set known. |
| 3 | Validate that required target inputs are present and bounded. | Context readiness or blocker. |
| 4 | Identify authority conflicts or missing validation requirements. | Conflict report or cleared handoff. |
| 5 | Hand off to the next canonical System Layer step. | Prepared System Layer output. |

## 6. Boundaries

This document must not require, infer, update, or depend on target-owned management artifacts. It must remain valid when a target supplies only the accepted context model and no other operating structure.

## 7. Blockers

Report a blocker when:

- Invocation Context is absent or ambiguous.
- Resolved Target Context is unavailable when required.
- Target Authority Inputs conflict.
- Target Execution Boundaries are missing for requested changes.
- Target Validation Requirements are required but unavailable.

## 8. Validation Checklist

| Check | Required Result |
|:---|:---|
| Canonical flow preserved | Yes |
| Accepted context model only | Yes |
| Target-owned management models required | No |
| Runtime or Engine implementation introduced | No |
| System Layer handoff clear | Yes |

## 9. Handoff

The output of this document is a bounded System Layer handoff to the next canonical step. The handoff contains only the accepted context model, authority findings, blockers, validation expectations, and execution boundary evidence.

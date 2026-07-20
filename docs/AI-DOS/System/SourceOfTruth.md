# Source of Truth

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.SOURCE-OF-TRUTH` |
| Version | `3.1.0-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI/System/SystemLayer.md` |
| Scope | Classification of truth domains and evidence in assembled context. |
| Inputs | Assembled Context Package. |
| Outputs | Truth Classification Map; provenance findings; ownership conflicts; blockers. |

## 1. Purpose

Source of Truth classifies each assembled input by truth domain, owner, lifecycle status, and evidentiary weight before authority resolution.

It does not determine authority precedence, convert evidence into authority, merge Target truth into product truth, or promote private development truth into released truth.

## 2. Truth Domains

| Domain | Owner |
|:---|:---|
| AI-DOS product truth | AI-DOS product authority |
| Released product truth | Authority for the identified release and channel |
| Private development truth | AI-DOS development governance |
| Target Project truth | The active Target Project |
| Runtime state | Runtime contract |
| Engine state | Engine Platform contract |
| Provider state | Execution Provider |
| Evidence | Producing artifact or process; non-authoritative unless promoted |

### 2.1 Operational Contract Ownership

Operational behavior has exactly one semantic owner. Entry contracts, Target contracts,
skills, prompts, state records, and evidence may reference the owner but must not restate
its algorithm or schema.

| Concern | Semantic Owner | Consumers May Supply |
|:---|:---|:---|
| Intent classification and provider routing | `docs/AI/AIOrchestrator.md` | Invocation and Resolved Target Context |
| Candidate eligibility, priority, and selection record | `docs/AI/Workflows/TaskPlanner.md` | Target-owned objective, policy, candidates, priority values, and boundaries |
| Candidate Generation Source Profile schema, enumeration, and minimality | `docs/AI/Workflows/TaskGenerationWorkflow.md` | A finite Target-owned profile instance bound to one objective |
| Target-state mutation procedure | `docs/AI/Workflows/ProjectStateUpdater.md` | Target-owned state schema, transition policy, current values, and mutation authority |
| Target mission, planning policy, protected boundaries, and resource bindings | The active Target Project contract and Target-owned resources | References to applicable AI-DOS contracts |
| Current Target operational values | The active Target-owned state artifact | Current values and references to evidence; no reusable AI-DOS algorithm |
| Tool discovery | Tool adapter or Target-owned skill | Pointers and reading order only; no duplicated product or Target semantics |

If two artifacts prescribe the same algorithm, schema, or transition procedure, Source of
Truth shall report duplicate semantic ownership even when their current wording agrees.
Agreement is not a substitute for single ownership.

## 3. Responsibilities

This component shall:

1. retain source provenance and lifecycle status;
2. distinguish normative authority from evidence, navigation, reports, and historical artifacts;
3. classify A.0, Discovery, Reports, validation output, and completion reports as evidence unless explicitly promoted;
4. prevent Forge AI Target truth from becoming reusable AI-DOS truth;
5. surface duplicate or incompatible truth claims for Authority Resolution.

## 4. Non-Ownership

Source of Truth does not own the content it classifies, authority precedence, conflict decisions, canonical promotion, Target updates, release approval, or execution authorization.

## 5. Safe Stop

Stop when provenance is missing, two sources claim the same canonical truth without a resolvable lifecycle distinction, release identity is ambiguous, or product and Target truth cannot be separated.

## 6. Handoff

```text
Assembled Context Package
    ↓
Truth Classification Map
    ↓
AuthorityModel.md
    ↓
AuthorityResolution.md
```

## 7. Validation

- every classified item has an owner and provenance;
- evidence is not promoted by inference;
- released truth is tied to a release identity;
- Target and product truth remain separate;
- ambiguous claims produce blockers.

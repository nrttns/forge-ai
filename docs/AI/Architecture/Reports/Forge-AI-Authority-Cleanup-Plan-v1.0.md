# Forge AI Authority Cleanup Plan v1.0

## Status

Status: Proposed Plan  
Document Type: Authority Cleanup Plan  
Command: `docs/AI/Commands/AgentDocumentationCommand.md`  
Scope: No-code documentation planning only  
Output Path: `docs/AI/Architecture/Reports/Forge-AI-Authority-Cleanup-Plan-v1.0.md`  
Date: 2026-07-07

---

## Purpose

This plan proposes a safe cleanup path for resolving constitutional and authority ambiguity across Forge AI documentation.

This document does not apply fixes. It classifies existing authority documents, identifies duplicate authority claims, proposes future edits, and defines a safe migration sequence for later approved work.

---

## Governing Inputs

This plan was prepared under the following constraints:

- `AGENTS.md` is the current bootstrap authority and constitutional entry point.
- `docs/AI/AIFramework.md` is the current AI Framework master entry point.
- `docs/AI/Specification/Constitution.md` is the current RC2 framework constitution under the master entry point.
- `docs/FrameworkGovernance.md` defines framework-level governance and decision policy.
- `docs/AI/AIOrchestrator.md` coordinates execution lifecycle and consumes authority.
- `docs/AI/System/AuthorityModel.md` and `docs/AI/AgentSystemPrompt.md` are tool-facing operational summaries.
- `docs/AI/Architecture/A.1-Constitution.md` and `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` are newer architecture-track documents that currently assert authority relationships not yet reconciled with the RC2 authority chain.

---

## 1. Canonical Authority Chain Proposal

### 1.1 Proposed Target Chain

The proposed canonical authority chain is:

```text
Human Authority
    ↓
AGENTS.md
    ↓
docs/AI/AIFramework.md
    ↓
docs/AI/Specification/Constitution.md
    ↓
docs/FrameworkGovernance.md
    ↓
docs/AI/AIOrchestrator.md
    ↓
docs/AI/System/AuthorityModel.md
    ↓
docs/ProjectStatus.md
    ↓
docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md
    ↓
Current Phase Document
    ↓
Current Stage Document
    ↓
Current Capability Document
    ↓
Relevant command, workflow, template, checklist, validation, and review documents
    ↓
Generated Task
```

### 1.2 Proposed Architecture-Track Chain

The architecture-track documents should be subordinated until formally adopted:

```text
docs/AI/Specification/Constitution.md
    ↓
Approved architecture-track specifications
    ↓
docs/AI/Architecture/A.1-Constitution.md, if migrated and certified
    ↓
docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md, until accepted
```

### 1.3 Rationale

This target preserves the current bootstrap rule that `AGENTS.md` wins all repository conflicts while giving the RC2 specification constitution a clear canonical role as the framework constitution. Governance should precede orchestration because governance defines decision rules and escalation policy, while orchestration coordinates execution. Tool-facing documents should consume the canonical authority model rather than define a separate chain.

---

## 2. Document Status Matrix

| Document | Proposed Classification | Proposed Status | Authority Role | Notes |
| --- | --- | --- | --- | --- |
| `AGENTS.md` | Bootstrap authority | Keep canonical | Highest repository authority after valid human instruction | Should remain short, stable, and bootstrap-oriented. It should point to canonical framework documents rather than duplicate every rule indefinitely. |
| `docs/AI/Specification/Constitution.md` | Canonical architecture authority | Keep canonical | Framework constitution under `AIFramework.md` | Should own permanent framework principles, invariants, mission, and constitutional rules. |
| `docs/AI/Architecture/A.1-Constitution.md` | RFC / transitional; possible historical / obsolete candidate if not adopted | Quarantine until reconciled | Candidate next-generation constitutional architecture, not current authority | It asserts a v3 constitutional role that conflicts with the current RC2 chain unless formally migrated. |
| `docs/FrameworkGovernance.md` | Governance policy | Keep canonical | Decision policy, ownership, change control, RFC policy, review policy | Should consume the constitution and should not restate a competing authority chain. |
| `docs/AI/AIFramework.md` | Canonical architecture authority | Keep canonical as master entry | Master index and framework entry point | Should point to the canonical constitution and specification modules; it should not duplicate governance policy in detail. |
| `docs/AI/AIOrchestrator.md` | Operational procedure | Keep canonical procedure | Execution lifecycle coordinator | Should consume governance and state; should not place governance below orchestration or define a divergent authority chain. |
| `docs/AI/System/AuthorityModel.md` | Tool-facing summary | Keep as derived operational summary | Agent-facing authority resolver | Should mirror the canonical chain exactly and explicitly state that it is derived. |
| `docs/AI/AgentSystemPrompt.md` | Tool-facing summary | Keep as derived tool prompt | Reusable AI assistant operating prompt | Should mirror `AuthorityModel.md`; fix stale paths and ordering during cleanup. |
| `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` | RFC / transitional | Keep as RFC only | Candidate architectural blueprint | Should remain non-canonical until reviewed, accepted, and reconciled with current authority documents. |

---

## 3. Duplicate Authority Findings

### 3.1 Multiple Constitutional Documents

Finding: Forge AI currently contains at least three constitution-bearing documents:

1. `AGENTS.md`, which calls itself the project constitution and bootstrap authority.
2. `docs/AI/Specification/Constitution.md`, which calls itself the AI Framework Constitution.
3. `docs/AI/Architecture/A.1-Constitution.md`, which calls itself a v3 constitutional architecture specification.

Impact: Agents may be unable to determine whether the active constitution is the bootstrap constitution, the RC2 framework constitution, or the v3 architecture-track constitution.

Proposed resolution: Keep `AGENTS.md` as bootstrap authority, keep `docs/AI/Specification/Constitution.md` as canonical framework constitution, and mark `docs/AI/Architecture/A.1-Constitution.md` as RFC/transitional until formally migrated.

### 3.2 Conflicting Authority Chains

Finding: Authority chains differ across `AGENTS.md`, `docs/AI/AIOrchestrator.md`, `docs/FrameworkGovernance.md`, `docs/AI/System/AuthorityModel.md`, and `docs/AI/AgentSystemPrompt.md`.

Impact: Different agents may place governance, orchestration, system layer, and project status in different order.

Proposed resolution: Establish one canonical authority chain in `AGENTS.md` and a detailed derived version in `docs/AI/System/AuthorityModel.md`. All other documents should link to or summarize that chain without redefining it.

### 3.3 Governance and Orchestration Ordering Ambiguity

Finding: Some documents place `AIOrchestrator.md` above `FrameworkGovernance.md`, while others place governance above operational execution.

Impact: Orchestration could appear to outrank governance, even though orchestration should coordinate execution under governance.

Proposed resolution: Governance should sit above orchestration in the target chain. Orchestration should consume governance, project state, workflows, commands, templates, validation, review, and certification rules.

### 3.4 Tool-Facing Document Drift

Finding: `docs/AI/AgentSystemPrompt.md` contains stale references to `docs/DevelopmentPhases/ForgeAI2-DevelopmentPhases.md` and uses an authority order that differs from the current project authority model.

Impact: Tool-facing prompts may direct agents to missing files or incorrect authority ordering.

Proposed resolution: Update tool-facing documents after the canonical chain is approved. They should be generated or manually synchronized from `docs/AI/System/AuthorityModel.md`.

### 3.5 RFC Documents Presenting as Canonical

Finding: `docs/AI/Architecture/A.1-Constitution.md` and `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` contain strong canonical language and authority claims while also being draft or RFC documents.

Impact: Draft architecture documents may appear to supersede certified RC2 authority without migration approval.

Proposed resolution: Add explicit transitional status notices in future edits. Draft/RFC documents should state that current canonical authority remains in `AGENTS.md`, `docs/AI/AIFramework.md`, and `docs/AI/Specification/Constitution.md` until adoption.

---

## 4. Proposed Future Edits

No edits are applied by this plan. The following edits are proposed for later approved cleanup work.

### 4.1 `AGENTS.md`

- Keep as bootstrap authority.
- Shorten duplicated framework detail over time.
- Add a precise distinction between bootstrap authority and canonical framework constitution.
- Add a note that architecture-track RFC documents are not canonical until accepted.

### 4.2 `docs/AI/Specification/Constitution.md`

- Keep as the canonical framework constitution.
- Add a compatibility note explaining its relationship to `AGENTS.md`.
- Add a migration note stating whether v3 architecture documents are drafts, candidates, or adopted successors.

### 4.3 `docs/AI/Architecture/A.1-Constitution.md`

- Add a prominent RFC/transitional banner unless formally adopted.
- Remove or qualify claims that it is the highest active constitutional authority.
- If adopted, migrate content into `docs/AI/Specification/Constitution.md` or formally change the authority chain through governance approval.
- If not adopted, mark as historical / obsolete candidate.

### 4.4 `docs/FrameworkGovernance.md`

- Align authority hierarchy to the approved target chain.
- Clarify that governance consumes the constitution and governs execution policy.
- Avoid duplicating constitutional principles except as references.

### 4.5 `docs/AI/AIFramework.md`

- Preserve as master entry point.
- Add a clear reference to the canonical authority chain.
- Clarify status of architecture-track documents as accepted, RFC, transitional, or obsolete.

### 4.6 `docs/AI/AIOrchestrator.md`

- Update authority model so governance precedes orchestration.
- Clarify that orchestration does not define governance or constitutional authority.
- Reference `docs/AI/System/AuthorityModel.md` as the tool-facing derived chain.

### 4.7 `docs/AI/System/AuthorityModel.md`

- Make this the single derived tool-facing authority resolver.
- Mirror the approved canonical chain exactly.
- Add a synchronization requirement for `docs/AI/AgentSystemPrompt.md` and tooling rule files.

### 4.8 `docs/AI/AgentSystemPrompt.md`

- Fix stale `ForgeAI2` development phase path references.
- Align authority order with `docs/AI/System/AuthorityModel.md`.
- Mark as a tool-facing summary, not an authority source.

### 4.9 `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`

- Preserve as RFC while under review.
- Add an explicit non-canonical notice.
- Define acceptance criteria and migration path before any claim of canonical blueprint authority.

---

## 5. Safe Migration Sequence

1. Approve this cleanup plan or a revised version through human governance.
2. Freeze authority-related edits except planned cleanup changes.
3. Establish the canonical authority chain in `AGENTS.md`.
4. Update `docs/AI/System/AuthorityModel.md` to mirror the canonical chain as the derived tool-facing resolver.
5. Update `docs/AI/AgentSystemPrompt.md` to consume `AuthorityModel.md` and fix stale paths.
6. Update `docs/FrameworkGovernance.md` to align governance ordering and remove competing authority-chain language.
7. Update `docs/AI/AIOrchestrator.md` to consume governance and avoid redefining authority.
8. Add transitional banners to `docs/AI/Architecture/A.1-Constitution.md` and `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md`.
9. Decide whether the v3 architecture-track constitution should be adopted, merged, superseded, or archived.
10. If adopted, perform a governed constitutional migration with explicit review, validation, and project state update.
11. If not adopted, mark the architecture-track constitution as historical / obsolete candidate and keep the blueprint as an RFC or archive it.
12. Run documentation validation, link checks, and review checklist before certification.

---

## 6. Risks

| Risk | Severity | Description | Mitigation |
| --- | --- | --- | --- |
| Accidental constitutional fork | High | Multiple constitution documents may continue to claim active authority. | Establish one active framework constitution and mark all alternatives as RFC, transitional, or historical. |
| Tooling follows stale prompt | High | Agents may follow `AgentSystemPrompt.md` stale paths or ordering. | Update tool-facing summaries immediately after authority chain approval. |
| Governance bypass | High | Orchestration or RFC documents may appear to outrank governance. | Place governance above orchestration and require RFC adoption before canonical use. |
| Loss of useful v3 architecture content | Medium | Quarantining `A.1` could hide valuable architecture work. | Treat it as candidate material, not obsolete by default. Review and migrate useful sections deliberately. |
| Over-centralization in `AGENTS.md` | Medium | Keeping all details in bootstrap authority can make it too large and duplicative. | Keep `AGENTS.md` as bootstrap and delegate detailed canonical content to framework documents. |
| Broken references during cleanup | Medium | Renaming or reclassifying documents may break links. | Prefer status banners first; defer moves or renames until link validation exists. |
| Premature project state update | Medium | Cleanup may tempt agents to update `ProjectStatus.md` without certification. | Do not update project state until validation and review are complete and explicitly authorized. |

---

## 7. Final Recommendation

Forge AI should adopt a two-layer constitutional model:

1. `AGENTS.md` remains the bootstrap authority and repository-level conflict resolver.
2. `docs/AI/Specification/Constitution.md` remains the canonical AI Framework constitution under `docs/AI/AIFramework.md`.

All other documents should consume this model:

- `docs/FrameworkGovernance.md` should govern decisions and change control under the constitution.
- `docs/AI/AIOrchestrator.md` should coordinate execution under governance.
- `docs/AI/System/AuthorityModel.md` and `docs/AI/AgentSystemPrompt.md` should be derived tool-facing summaries.
- `docs/AI/Architecture/A.1-Constitution.md` should remain RFC/transitional until explicitly adopted or archived.
- `docs/AI/Architecture/Blueprint/Forge-AI-Blueprint-v1.0-RFC.md` should remain an RFC and must not become canonical by implication.

The immediate next approved work should be a documentation-only authority normalization task that applies status banners and aligns authority chains without changing project state or implementation code.

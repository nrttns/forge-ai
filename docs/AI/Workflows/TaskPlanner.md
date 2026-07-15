# Task Planner

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.WORKFLOW.TASK-PLANNER` |
| Title | Task Planner |
| Version | `2.2.0-draft` |
| Status | Draft |
| Canonical Status | Aligned with v2 Operational Core; non-canonical until Human Governance approval |
| Classification | Task Planning Workflow |
| Document Type | Planning Workflow |
| Owner | AI Operational Layer |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-15 |
| Lifecycle Phase | Draft Alignment |
| Traceability ID | `AI-DOS.V2.OP-005` |
| Scope | Defines sequencing and routing behavior for planning agents and orchestrators, including external Target readiness gating, candidate discovery, candidate classification, candidate rejection, capability-contribution verification, evidence-based ranking, selection of exactly one capability-grounded work unit, and safe stop when no qualifying work exists. |
| Out of Scope | AGENTS.md, AIFramework, AIOrchestrator, AgentSystemPrompt, governance, ProjectStatus authority, Runtime, Engine RFCs, and templates. |
| Normative Authority | `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md`; the ProjectStatus and DevelopmentPhases declared by the active Target Repository |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Operational/Operational-Core-Replacement-Matrix.md` |
| Dependencies | v2 Operational Core; active task instruction; current roadmap and operational state. |
| Consumes | Human task instruction, authority documents, current ProjectStatus state, roadmap state, applicable templates, validation evidence. |
| Produces | task sequencing and routing plan; Capability-grounded work-selection record with capability-before, capability-after, reusable behavioral difference, and advancement evidence. |
| Related Specifications | `docs/AI/Commands/AgentTaskCommand.md`; `docs/AI/Workflows/TaskPlanner.md`; `docs/AI/Workflows/TaskGenerationWorkflow.md`; `docs/AI/Workflows/ProjectStateUpdater.md` |
| Supersedes | Prior in-place content of this document. |
| Superseded By | None |
| Promotion Requirements | Human Governance review and approval. |
| Certification Status | Not certified |

---

## 1. Purpose

This document defines sequencing and routing behavior. It consumes the v2 Operational Core and active task authority without redefining repository boot, framework authority, orchestration authority, system prompt policy, governance, live project status, roadmap order, runtime architecture, engine RFCs, or templates.

## 2. Owns

- The sequencing and routing behavior described in this document.
- External Target readiness gating, candidate discovery, candidate classification, candidate rejection, capability-contribution verification, evidence-based ranking, selection of exactly one capability-grounded work unit, and safe stop when no qualifying work exists.
- The minimum inputs needed to perform that behavior safely.
- Execution safeguards, validation expectations, and completion-report expectations for this document's scope.

## 3. Does Not Own

- Repository boot sequence owned by `AGENTS.md`.
- Framework authority owned by `docs/AI/AIFramework.md`.
- Orchestration authority owned by `docs/AI/AIOrchestrator.md`.
- Agent prompt policy owned by `docs/AI/AgentSystemPrompt.md`.
- Governance decision policy owned by `docs/AI/FrameworkGovernance.md` and governance navigation owned by `docs/AI/GOVERNANCE.md`.
- Operational state owned by the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`).
- Roadmap sequence owned by the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`).
- Runtime, Engine RFCs, or template content.
- The authority to execute task content or redefine command procedure.
- Execution of the selected task; TaskPlanner selects and records the authorized work unit but does not execute it.

## 4. Inputs

- Active Human Governance task instruction.
- `AGENTS.md`.
- `docs/AI/GOVERNANCE.md`.
- `docs/AI/FrameworkGovernance.md` when decision policy is relevant.
- `docs/AI/AIFramework.md`.
- `docs/AI/AIOrchestrator.md`.
- `docs/AI/AgentSystemPrompt.md`.
- the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`).
- the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`).
- Applicable task-specific authority documents and templates.

## 5. Outputs

- Scoped task sequencing and routing plan.
- Capability-grounded work-selection record with capability-before, capability-after, reusable behavioral difference, and advancement evidence when selecting repository work from active Target state.
- Validation evidence appropriate to the task.
- Completion report with risks, blockers, and recommended next step.

## 6. Execution Rules

- Preserve filename and inbound references.
- Execute only within the active task scope.
- Preserve current phase, stage, roadmap order, and frozen-area boundaries.
- Do not create parallel replacement files.
- Do not move, delete, or rename files unless explicitly authorized.
- Do not modify templates unless explicitly authorized.
- Do not update the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`). When the invocation is Human Governance approval intent and the current lifecycle gate requires an operational-state transition, route to ProjectStateUpdater instead of selecting or executing repository work.

## 7. Validation Rules

- Confirm the authority set was read and applied.
- Confirm scoped files only were modified.
- Confirm old ProjectStatus paths are not introduced.
- Confirm no obsolete authority references are introduced.
- Run task-specific validation commands and report results honestly.


## 8.0 Lifecycle Transition Routing

TaskPlanner distinguishes capability-grounded repository work selection from lifecycle state transition.

When the invocation expresses Human Governance approval intent and the current ProjectStatus, DevelopmentPhases, Roadmap, completed validation evidence, completed review evidence, and protected-boundary and dependency state show that the current lifecycle gate requires an operational-state transition, TaskPlanner must route to `docs/AI/Workflows/ProjectStateUpdater.md`. It must not return `NO CAPABILITY-GROUNDED WORK UNIT FOUND`, require TaskGenerationWorkflow, invent a repository work unit, or replace the approval-state transition with capability-grounded work selection.

TaskPlanner may perform capability-grounded repository work selection only when an executable repository work unit must be selected. Approval decisions and lifecycle state transitions are not executable repository work units.

## 8. Planning Sequence

1. Read ProjectStatus and roadmap state.
2. Identify current phase, stage, objective, next queue, and frozen areas.
3. Classify the requested work type.
4. Select the required workflow, command, and validation route.
5. Produce an execution plan without executing the task.

## 8.1 Capability-Grounded Work-Selection Sequence

When Task Planner is responsible for deriving repository work from active Target state, it owns candidate discovery, candidate classification, candidate rejection, capability-contribution verification, evidence-based ranking, selection of exactly one capability-grounded work unit, and safe stop when no qualifying work exists. This sequence does not replace ProjectStatus authority, DevelopmentPhases authority, Roadmap authority, command execution, or task generation.

Task Planner shall perform the following sequence in order:

1. Resolve exactly one active task or exactly one authorized next action from the ProjectStatus declared by the active Target Repository (`<PROJECT_STATUS_PATH>`). ProjectStatus remains the live-state authority.
2. Resolve the active phase and active capability from the DevelopmentPhases declared by the active Target Repository (`<DEVELOPMENT_PHASES_PATH>`). DevelopmentPhases remains the capability-boundary authority.
3. Apply the External Target Readiness Gate in Section 8.1.1 before candidate discovery, repository evidence inspection, preparation work, execution work, evidence generation, or blocker report generation.
4. Resolve the applicable capability advancement interpretation, expected outcomes, dependencies, evidence requirements, and non-progress rules from the active Target Repository Roadmap. Roadmap remains the capability-advancement authority.
5. Inspect repository evidence only after the ProjectStatus, DevelopmentPhases, Roadmap, and External Target Readiness Gate constraints above have been resolved.
6. Produce a bounded candidate set of repository work units that may qualify as Capability Work under Section 8.2 and Section 8.3.
7. Classify every candidate as Capability Work, Repository Support Work, Unauthorized, Unsupported, Duplicate, or Out of scope.
8. Reject candidates that are merely repository hygiene, README or navigation alignment, formatting, documentation cleanup, planning maintenance, status maintenance, audit or report generation, or incidental continuation of the nearest existing code surface unless that activity is explicitly the active capability objective.
9. Reject every non-authorizing candidate and record the required rejection evidence.
10. Evaluate authorizing candidates against active-capability contribution, roadmap-outcome contribution, dependency relevance, reusable AI-DOS value, evidence value, bounded size, independent verifiability, protected-area safety, and validation availability.
11. Rank only authorizing candidates by grounded contribution to the active capability and select exactly one highest-grounded candidate. TaskPlanner must not rank non-authorizing candidates as though one of them must be selected.
12. Do not select a candidate merely because it is easy, is close to recently modified files, extends the last implementation, has tests available, or makes the repository cleaner.
13. If no candidate can be directly traced to the active capability and roadmap outcome, stop with exactly:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

Do not invent a useful-looking task.

## 8.1.1 External Target Readiness Gate

Before candidate discovery, TaskPlanner must determine whether the active capability belongs to an External Target Pilot.

If the active capability belongs to an External Target Pilot, TaskPlanner shall first determine whether Human Governance has supplied an External Target Package. The package must minimally identify:

- repository root;
- Target contract;
- operational state;
- planning authority;
- protected areas;
- source scope;
- validation commands.

If the External Target Package is absent, TaskPlanner shall perform no candidate discovery, no repository inspection, no preparation work, no execution work, no evidence generation, and no blocker report generation.

Instead, TaskPlanner shall return exactly:

```text
WAITING FOR EXTERNAL TARGET PACKAGE
```

This waiting result is not failure, not a blocker, not a warning, and not a rejection. It is the required synchronization point between Human Governance and AI-DOS.

AI-DOS must never infer an External Target from Forge AI state.

AI-DOS must never generate preparation artifacts before an External Target Package exists.

After a valid External Target Package exists, TaskPlanner resumes normal capability-grounded selection under Section 8.1, including capability-grounded candidate discovery, classification, verification, ranking, selection, and the existing safe-stop behavior.

## 8.2 Work Classification Model

TaskPlanner shall distinguish Capability Work from Repository Support Work before ranking or selection. Classification is mandatory and normative.

### Capability Work

A candidate is Capability Work only when it changes, adds, proves, or materially strengthens reusable AI-DOS behavior in the active capability domain.

Examples of qualifying behavioral areas may include:

- invocation behavior;
- context resolution behavior;
- authority resolution behavior;
- planning behavior;
- decision behavior;
- execution behavior;
- validation behavior;
- review behavior;
- blocker handling;
- safe-stop behavior;
- recovery behavior;
- replanning behavior;
- escalation behavior;
- Target portability;
- Target isolation;
- evidence production behavior;
- governance-support behavior when that governance-support capability is explicitly active.

Capability Work must produce an observable behavioral or capability difference.

### Repository Support Work

Repository Support Work includes activities that improve the repository or make work easier without changing reusable AI-DOS behavior.

Examples include:

- `.gitignore` changes;
- build-output cleanup;
- repository hygiene;
- file organization;
- folder renaming;
- README alignment;
- navigation updates;
- formatting;
- comments;
- documentation cleanup;
- planning maintenance;
- status maintenance;
- audit formatting;
- report generation;
- dependency housekeeping;
- package metadata cleanup;
- test convenience;
- build convenience;
- lint convenience;
- generated-file suppression;
- local developer ergonomics;
- incidental refactoring;
- continuation of nearby implementation.

Repository Support Work is not capability advancement. It may be selected only when Human Governance explicitly declares that exact support activity as the active objective.

An indirect argument such as:

```text
cleaner repository
→ easier validation
→ better execution capability
```

must be rejected.

## 8.3 Capability Advancement Verification

Before a candidate may be selected, TaskPlanner must prove all of the following:

1. **Capability limitation before work**
   Identify the specific reusable AI-DOS behavior that is absent, defective, unsafe, incomplete, unproven, or materially weaker before the work.
2. **Capability state after work**
   Describe the specific reusable AI-DOS behavior expected to exist, improve, or become provable after completion.
3. **Observable behavioral difference**
   State what an authorized user, Target Project, provider route, workflow, validation process, or governance process can do after the work that it could not reliably do before.
4. **Reusable AI-DOS value**
   Explain why the result applies to AI-DOS behavior beyond incidental Forge AI repository maintenance.
5. **Direct roadmap trace**
   Link the behavioral difference directly to the active Roadmap capability or milestone outcome.
6. **Advancement evidence**
   Identify the evidence that will demonstrate the capability difference, such as changed behavior, failing-before / passing-after validation, reproducible execution trace, blocker reproduction and resolution, safe-stop proof, cross-Target applicability, isolation proof, or validation or review behavior proof.
7. **Support-work exclusion**
   Confirm that the candidate is not merely repository support work, convenience, hygiene, cleanup, or maintenance.

All seven conditions are mandatory. If any condition is absent, unsupported, indirect, speculative, or circular, reject the candidate.

### Proxy Contribution Prohibition

A candidate must not be selected through proxy contribution reasoning.

The following are not sufficient:

- the work makes future capability work easier;
- the work improves repository cleanliness;
- the work reduces developer friction;
- the work makes validation output quieter;
- the work improves test organization;
- the work makes builds easier;
- the work removes generated files from Git status;
- the work is a prerequisite only by convenience;
- the work is generally useful;
- the work is technically sound;
- the work has existing tests;
- the work is small and independently verifiable.

A prerequisite may qualify only when the active capability cannot operate, be validated, or be proven without it and the blocker is demonstrated by evidence. Convenience is not a capability blocker.

## 8.4 Minimum Authorization Threshold

A candidate is executable only when all of the following are supported:

```text
Active authority
+
Direct capability trace
+
Capability-before state
+
Capability-after state
+
Observable behavioral difference
+
Reusable AI-DOS value
+
Advancement evidence
+
Bounded scope
+
Independent validation
+
Protected-area safety
```

If the threshold is not met, the candidate is non-authorizing. TaskPlanner must not rank non-authorizing candidates as though one of them must be selected.

If every candidate is non-authorizing, return exactly:

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

Do not downgrade the threshold merely to ensure progress.

### Required Work Selection Evidence

Before editing begins, Task Planner output shall record all of the following fields with supported values:

- Active ProjectStatus Task
- Active Phase
- Active Capability
- Applicable Roadmap Capability / Milestone
- Required Capability Outcome
- Repository Evidence Inspected
- Candidate Work Units Considered
- Candidate Classifications
- Rejected Candidates and Reasons
- Selected Work Unit
- Candidate Classification
- Capability Limitation Before Work
- Capability State After Work
- Observable Behavioral Difference
- Direct Capability Contribution
- Reusable AI-DOS Contribution
- Reusable Beyond Forge AI
- Advancement Evidence
- Support-Work Exclusion
- Expected Files
- Protected Areas
- Validation Plan
- Completion Condition
- Authorization Threshold Result

Rejected candidate records shall include Candidate, Candidate class, Rejection reason, Missing capability proof, Missing roadmap trace, Missing reusable behavior difference, and whether Human Governance explicitly authorized the activity. Candidate class shall be one of Capability Work, Repository Support Work, Unauthorized, Unsupported, Duplicate, or Out of scope. A candidate classified as Repository Support Work must be rejected unless Human Governance explicitly authorized that exact support activity as the active objective.

A work unit is not authorized for execution when any required field is missing, unsupported, speculative, circular, based on proxy contribution, based only on repository convenience, or not directly traceable to the active capability and Roadmap outcome.


### Normative Selection Examples

These examples do not authorize the example tasks automatically.

#### Rejected Example — `.gitignore`

```text
Candidate:
Ignore generated dist output.

Classification:
Repository Support Work.

Reason:
Improves repository cleanliness and validation convenience but does not change reusable AI-DOS execution, validation, review, blocker, recovery, or portability behavior.

Verdict:
REJECT.
```

#### Rejected Example — README Alignment

```text
Candidate:
Align README navigation.

Classification:
Repository Support Work.

Reason:
Improves documentation discovery but does not change reusable AI-DOS capability unless navigation capability is explicitly the active Human Governance objective.

Verdict:
REJECT.
```

#### Potentially Qualifying Example — Safe-Stop Defect

```text
Candidate:
Correct a reproducible TaskPlanner defect that selects work despite missing capability trace.

Classification:
Capability Work.

Capability before:
Planner may authorize unsupported work.

Capability after:
Planner stops with NO CAPABILITY-GROUNDED WORK UNIT FOUND.

Evidence:
Reproduction before correction and passing route/selection test after correction.

Verdict:
MAY QUALIFY after full authorization-threshold validation.
```

| Work Type | Route |
| --- | --- |
| Implementation | Task generation, then implementation command |
| Audit / review | Audit command or review route |
| Documentation | Documentation command |
| Bug fix | Bug fix command |
| State update | Project State Updater when explicitly authorized or when Human Governance approval intent uniquely derives the exact operational-state transition |
| General | Base task command |

## 9. Completion Report Expectations

Every completion report must include:

- Summary.
- Files modified.
- Authority validation.
- Roadmap and frozen-area validation.
- Validation results.
- Risks or blockers.
- ProjectStatus policy confirmation.
- Recommended next step.

## 10. Version History

| Version | Date | Description |
|:---|:---|:---|
| `2.1.0-draft` | 2026-07-15 | Strengthened capability-grounded selection to distinguish reusable behavioral capability work from repository support activity. |
| `2.2.0-draft` | 2026-07-15 | Added the External Target Readiness Gate so External Target Pilot capability activation waits for a supplied External Target Package before repository inspection, preparation, execution, evidence generation, or blocker reporting. |

# AI-DOS Specifications Reference

This page is the public lookup guide for AI-DOS specifications.

It helps readers find the normative artifact that owns a rule, boundary, schema, lifecycle transition, validation requirement, or architectural decision. It does not replace those canonical artifacts.

## 1. Purpose

Use this page when you need to answer questions such as:

- Which document owns this behavior?
- Is this rule normative or explanatory?
- Where is a workflow defined?
- Which artifact owns a schema or field?
- Which document controls review, approval, validation, or state mutation?
- Which authority should be cited in a task, review, or report?

The core rule is simple:

> Public documentation explains and routes. Canonical specifications define and govern.

## 2. Specification classes

AI-DOS uses several specification classes. A reader should identify the class before interpreting the artifact.

| Specification class | Typical responsibility | Public-documentation treatment |
|:---|:---|:---|
| Provider entry contracts | Provider startup, routing, and execution boundaries | Explain the route and link to the owner |
| Framework and orchestrator contracts | Product-level execution model and orchestration | Summarize responsibilities without restating algorithms |
| System specifications | Reusable operational rules and resolution behavior | Link directly and preserve exact terminology |
| Workflow specifications | Ordered task, review, audit, correction, and state-update procedures | Describe the route; do not duplicate step semantics |
| Command specifications | Intent routing and command-specific execution expectations | Explain command purpose and link to the canonical command |
| Architecture RFCs | Architectural boundaries, accepted designs, and specialization contracts | Identify status, scope, and authority explicitly |
| Checklists | Review and validation gates | Use for execution evidence; do not convert into policy |
| Templates | Required evidence or report shape | Reuse the template and preserve its declared ownership |
| Target contracts | Target-owned mission, state, planning, resources, and protected areas | Keep separate from reusable AI-DOS product truth |

## 3. Authority hierarchy

Before relying on any document, resolve its authority.

A practical interpretation order is:

1. repository entry contract;
2. Target Project contract;
3. AI-DOS provider entry;
4. task-specific canonical AI-DOS owner;
5. explanatory product documentation.

Public Reference, Concepts, Tutorials, and Getting Started pages are navigation and learning surfaces. They must not override a normative contract, workflow, RFC, command, checklist, template, or Target authority.

## 4. Core AI-DOS specification map

### 4.1 Provider entry

Canonical owner:

- `docs/AI-DOS/AGENTS.md`

Use it for:

- provider entry;
- Resolved Target Context consumption;
- task-specific provider routing;
- state-derived execution entry;
- implementation interpretation boundaries;
- validation-claim boundaries.

### 4.2 Framework and orchestration

Canonical owners:

- `docs/AI-DOS/AIFramework.md`
- `docs/AI-DOS/AIOrchestrator.md`
- `docs/AI-DOS/AgentSystemPrompt.md`

Use them for:

- the AI-DOS Operational Core;
- orchestration responsibility;
- provider execution discipline;
- common agent constraints;
- task-specific routing into workflows and commands.

### 4.3 Execution sequence

Canonical owner:

- `docs/AI-DOS/System/ExecutionSequence.md`

Use it for:

- ordered execution behavior;
- authority and context checks;
- task identity preservation;
- validation and evidence sequencing;
- safe-stop placement;
- review-subject re-resolution where applicable.

### 4.4 Task selection and generation

Canonical owners:

- `docs/AI-DOS/Workflows/TaskPlanner.md`
- `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md`

Use them for:

- candidate eligibility;
- priority and selection;
- generation inputs;
- candidate construction;
- minimality;
- selection and generation safe stops.

Do not infer these behaviors from ProjectStatus, Roadmap prose, repository activity, branch names, or implementation proximity.

### 4.5 Project state mutation

Canonical owner:

- `docs/AI-DOS/Workflows/ProjectStateUpdater.md`

Use it for:

- validating state-transition authority;
- applying exactly authorized Target-state mutations;
- approval-subject re-resolution;
- active-work-unit activation and closure mechanics;
- safe-stop conditions for invalid, conflicting, or drifted state.

Target documents own their values. The updater owns reusable mutation mechanics.

### 4.6 Review

Canonical owners include:

- `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.7-Review-Engine-RFC.md`
- `docs/AI-DOS/Checklists/AgentReviewChecklist.md`
- applicable review commands and templates

Use them for:

- reviewed-subject identity;
- review scope;
- findings and severity;
- approval-eligible outcomes;
- evidence requirements;
- review safe stops.

Review does not equal Human Governance approval, merge, acceptance, state update, or continuation.

### 4.7 Audit

Canonical owners include:

- applicable audit commands;
- audit workflow specifications;
- `docs/AI-DOS/Templates/Audit/`

Use them for:

- read-only inspection;
- audit scope;
- evidence capture;
- finding structure;
- audit report shape;
- non-mutating safe-stop behavior.

### 4.8 Target repository resolution

Canonical owner:

- `docs/AI-DOS/System/TargetRepositoryResolution.md`

Use it for:

- reusable Target declaration resolution;
- declaration categories;
- schema expectations;
- duplicate and precedence handling;
- blocker taxonomy;
- deterministic resolution evidence.

A Target Project may bind these reusable rules to its own Target-owned resources without copying the provider algorithm.

### 4.9 Architecture RFCs

Canonical location:

- `docs/AI-DOS/Architecture/RFC/`

Use RFCs for:

- architecture boundaries;
- accepted or proposed designs;
- specialization contracts;
- distribution and runtime direction;
- dependency and non-goal declarations.

Always inspect an RFC's metadata before treating it as active authority. Draft, proposed, accepted, superseded, and archived artifacts must not be treated as equivalent.

## 5. Normative versus explanatory material

A document is not normative merely because it is detailed.

Use metadata, declared owner, document type, status, and repository location to classify it.

### Normative material commonly includes

- active contracts;
- system specifications;
- workflows;
- commands;
- accepted RFCs;
- checklists used as declared gates;
- templates with required evidence shapes;
- Target-owned Mission, ProjectStatus, DevelopmentPhases, Roadmap, and Target contract artifacts.

### Explanatory material commonly includes

- Product README pages;
- Getting Started guides;
- Concepts pages;
- Tutorials;
- public Reference pages;
- examples and learning scenarios.

Explanatory pages may quote terminology and link to canonical owners, but must not create new rules, schemas, lifecycle states, capability claims, or authorization paths.

## 6. Status interpretation

Before using a specification, inspect its status.

| Status pattern | Interpretation |
|:---|:---|
| Active | Current operational authority within its declared scope |
| Accepted | Approved design or evidence; inspect whether it is also active |
| Draft | Not final authority unless another contract explicitly consumes it |
| Proposed | Candidate direction; not operational truth by itself |
| Superseded | Historical; use the replacement |
| Archived | Preserved for provenance; not current authority |
| Live operational state | Current Target-owned values, not reusable product procedure |

Never upgrade a document's authority by inference.

## 7. Ownership boundaries

### AI-DOS product truth

Lives under:

- `docs/AI-DOS/`

It owns reusable product contracts, workflows, system behavior, architecture, commands, checklists, templates, and provider-neutral execution semantics.

### Target Project truth

Lives under the Target Project's declared truth root.

It owns mission, planning, operational state, protected areas, Target resources, authorization, evidence, and project-specific values.

A public AI-DOS specification reference must not copy Target operational values into reusable product truth.

## 8. Specification lookup by question

| Question | Start with |
|:---|:---|
| How does a provider enter AI-DOS? | `docs/AI-DOS/AGENTS.md` |
| How is execution ordered? | `docs/AI-DOS/System/ExecutionSequence.md` |
| How is a next task selected? | `docs/AI-DOS/Workflows/TaskPlanner.md` |
| How is a candidate generated? | `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md` |
| How is state updated? | `docs/AI-DOS/Workflows/ProjectStateUpdater.md` |
| How is review identity resolved? | A.5.7 Review Engine RFC and Agent Review Checklist |
| How is Target context resolved? | Target contract plus `TargetRepositoryResolution.md` |
| Where are architecture decisions recorded? | `docs/AI-DOS/Architecture/RFC/` |
| Which report shape should be used? | Applicable template family |
| What does the current Target permit? | Target-owned ProjectStatus and contract |
| Is an implementation check product-wide validation? | Provider entry validation-claim boundary and applicable validation specification |

## 9. Citation rules

A strong specification citation should identify:

- repository-relative path;
- section or heading;
- document status when relevant;
- the exact responsibility being relied upon.

Example:

```text
Authority: docs/AI-DOS/Workflows/TaskPlanner.md, candidate eligibility and selection rules.
```

Avoid citations such as:

```text
Authority: the docs.
```

or:

```text
Authority: the latest implementation.
```

The first is ambiguous. The second may not be normative.

## 10. Reading a specification safely

Use this sequence:

1. confirm the exact path;
2. inspect metadata and status;
3. identify owner and document type;
4. read declared scope and non-goals;
5. follow referenced dependencies;
6. distinguish Target-owned values from provider-owned mechanics;
7. preserve exact terminology;
8. check whether another artifact supersedes it;
9. cite the owning section;
10. stop if authority remains contradictory or unresolved.

## 11. Specification conflict handling

When two artifacts appear to conflict:

1. verify that both paths are current;
2. compare their declared scopes;
3. compare status and owner;
4. inspect explicit precedence or supersession statements;
5. separate Target truth from AI-DOS product truth;
6. separate normative documents from explanatory documents;
7. safe-stop if the conflict cannot be resolved deterministically.

Do not silently merge contradictory rules into a new interpretation.

## 12. Validation claims

A specification defines what evidence is required for its own scope.

Examples:

- Markdown link checks validate links;
- schema checks validate declared structure;
- TypeScript checks validate the exercised TypeScript surface;
- CLI tests validate the exercised CLI behavior;
- review checklists validate the declared review gate;
- Target evidence supports Target acceptance only when the Target authority recognizes it.

No narrow validation command proves the whole AI-DOS system.

## 13. Common mistakes

### Treating public documentation as normative

Public pages are easier to read, but canonical owners remain authoritative.

### Treating implementation as specification

Code can realize a bounded contract without owning product truth.

### Treating all RFCs as active

Status and adoption matter.

### Copying Target state into AI-DOS documentation

This contaminates reusable product truth with project-specific operational values.

### Restating workflow algorithms

A public summary should route to the canonical workflow rather than becoming a second version of it.

### Ignoring non-goals

Non-goals prevent accidental scope expansion and are part of correct interpretation.

## 14. Specification review checklist

Before relying on a specification, confirm:

- [ ] the path exists;
- [ ] the artifact is current;
- [ ] its owner is clear;
- [ ] its status is understood;
- [ ] its scope covers the question;
- [ ] its non-goals do not exclude the question;
- [ ] referenced dependencies were inspected;
- [ ] Target and AI-DOS ownership remain separate;
- [ ] explanatory material is not being promoted into authority;
- [ ] validation claims remain bounded;
- [ ] the citation names the exact owner;
- [ ] unresolved conflicts result in safe-stop.

## 15. Related public documentation

- [Reference hub](README.md)
- [Commands](Commands.md)
- [Workflows](Workflows.md)
- [Glossary](Glossary.md)
- [FAQ](FAQ.md)
- [Tutorials](../Tutorials/README.md)
- [Concepts](../Concepts/README.md)

## 16. Final rule

Use public documentation to understand where to look.

Use canonical specifications to decide what is true, permitted, required, prohibited, or complete.

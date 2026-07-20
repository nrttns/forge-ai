# AI-DOS Workflow Template

## Template Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.WORKFLOW.WORKFLOW` |
| Title | AI-DOS Workflow Template |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Workflow Template |
| Document Type | Template |
| Owner | AI-DOS Template Library |
| Scope | Reusable structure for documenting a bounded workflow model. |
| Out of Scope | Executable workflow routing, task planning, command selection, execution authorization, provider dispatch, approval, certification, release, or Target-state mutation. |
| Dependencies | `docs/AI/Templates/TemplateLibrary.md`; `docs/AI/Templates/TemplateIndex.md`; `docs/AI/Templates/Workflow/WorkflowFamily.md`; TPL-000; STD-010 when applicable; declared owning authority. |
| Produces | A draft workflow-document structure returned to its owning authority. |

## 1. Purpose

Use this template to document a bounded workflow supplied by an explicit owning authority.

The template describes workflow structure. It does not execute the workflow, select work, resolve authority, create an Execution Contract, dispatch a provider, or mutate state.

## 2. Required Inputs

Before instantiation, resolve:

- workflow name, purpose, subject, and scope;
- owner and intended consumer;
- governing authority and provenance;
- inputs and outputs;
- states or milestones, when the workflow uses them;
- transition and decision conditions;
- participating roles and responsibility boundaries;
- allowed and forbidden actions;
- failure, retry, recovery, escalation, and safe-stop rules;
- validation and evidence requirements;
- any explicit state-impact or execution handoff authority.

Do not infer missing values from AI-DOS, Forge AI, repository layout, ProjectStatus, DevelopmentPhases, Roadmap, or continuation intent.

## 3. Produced-Document Metadata

Use STD-010 metadata when the produced workflow document is governed Markdown and the owning authority requires it.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | Workflow Document |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Dependencies | {{DEPENDENCIES}} |
| Inputs | {{INPUTS}} |
| Outputs | {{OUTPUTS}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
```

The owner, reviewers, approvers, lifecycle, and normative authority are supplied values. The template defines no fixed defaults for them.

## 4. Workflow Body

```markdown
## 1. Workflow Identity

{{WORKFLOW_IDENTITY}}

## 2. Purpose and Scope

{{PURPOSE_AND_SCOPE}}

## 3. Authority and Ownership

{{AUTHORITY_AND_OWNERSHIP}}

## 4. Inputs and Preconditions

{{INPUTS_AND_PRECONDITIONS}}

## 5. Outputs and Completion Conditions

{{OUTPUTS_AND_COMPLETION_CONDITIONS}}

## 6. Roles and Responsibility Boundaries

{{ROLES_AND_RESPONSIBILITIES}}

## 7. States or Milestones

{{STATES_OR_MILESTONES}}

## 8. Transitions and Decision Conditions

{{TRANSITIONS_AND_DECISION_CONDITIONS}}

## 9. Allowed and Forbidden Actions

{{ALLOWED_AND_FORBIDDEN_ACTIONS}}

## 10. Execution and Handoff Boundaries

{{EXECUTION_AND_HANDOFF_BOUNDARIES}}

## 11. Validation and Evidence

{{VALIDATION_AND_EVIDENCE}}

## 12. Failure, Recovery, Escalation, and Safe Stop

{{FAILURE_RECOVERY_ESCALATION_SAFE_STOP}}

## 13. Risks, Assumptions, and Unresolved Matters

{{RISKS_ASSUMPTIONS_UNRESOLVED}}
```

## 5. Workflow Semantics

A workflow document may describe states, transitions, decisions, roles, commands, providers, or state effects only when those semantics are explicitly supplied by the applicable owning authority.

There is no universal AI-DOS workflow sequence. In particular, this template does not require:

```text
State → Context → Planning → Command Selection → Execution
→ Validation → Review → Certification → State Update
```

Those stages may appear only when the bounded workflow authority explicitly owns and declares them.

## 6. Authority Separation

```text
Workflow Template
    reusable authoring structure

Workflow Document
    bounded description owned by its declared authority

Executable Workflow
    runtime routing governed elsewhere

Execution Contract
    explicit authorization governed by the System Layer
```

None inherits authority automatically from another.

## 7. Validation Requirements

A produced workflow document is complete only when:

- owner, authority, scope, inputs, outputs, and consumer are explicit;
- states and transitions, when used, have declared provenance;
- decision conditions are testable and non-invented;
- roles do not duplicate existing authority;
- execution and state-impact boundaries are explicit;
- failure, recovery, escalation, and safe-stop behavior are recorded;
- no fixed Forge AI path, planning model, state model, command, provider, reviewer, approver, or lifecycle is required by default;
- the document does not claim execution, approval, certification, release, or mutation authority merely because the template was completed.

## 8. Non-Authority Statement

This template and documents produced from it do not plan work, route executable workflows, select commands, authorize execution, dispatch providers, validate results, approve, certify, promote, release, or mutate product or Target state.
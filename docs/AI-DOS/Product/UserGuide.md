<!--
Identifier: AI-DOS.PRODUCT.USER-GUIDE
Title: AI-DOS User Guide
Version: 0.1.0-draft
Status: Draft
Classification: AI-DOS Product Documentation
Owner: AI-DOS Governance
Approval Authority: Human Governance
-->

# AI-DOS User Guide

## 1. Purpose

This guide explains how a person uses AI-DOS to request, supervise, review, and approve bounded work on a Target Project.

AI-DOS is an MD-first governed AI operating system. Its governing Markdown artifacts define the authoritative operating contracts. Tools, models, providers, adapters, repositories, and implementation languages execute within those contracts; they do not replace them.

This guide is explanatory product documentation. It does not replace the normative AI-DOS contracts under `docs/AI-DOS/` or any Target Project's own authorities.

## 2. Who This Guide Is For

This guide is for users who:

- direct AI-assisted work through natural-language intent;
- supervise one or more AI providers or agents;
- operate a Target Project that consumes AI-DOS;
- review proposed changes and validation evidence;
- exercise Human Governance approval authority;
- need predictable safe-stop behavior when required context or authority is missing.

You do not need to be a programmer to use AI-DOS. You do need to understand the difference between asking for work, authorizing work, reviewing work, and approving a completed subject.

## 3. Core Mental Model

AI-DOS separates reusable product behavior from Target-specific truth.

```text
Target Project truth
    supplies mission, state, scope, resources, constraints, and authority

AI-DOS product truth
    supplies reusable routing, planning, execution, validation, review, and state-transition behavior

Execution provider
    performs the bounded work through available tools

Human Governance
    supplies authority, resolves gates, and approves or redirects work
```

A Target Project owns facts such as:

- what project is being changed;
- what its mission is;
- what work is currently active;
- which areas are protected;
- which resources may be used;
- what evidence is required;
- what state transition is authorized.

AI-DOS owns reusable behavior such as:

- interpreting invocation intent;
- resolving or generating bounded work candidates;
- selecting exactly one eligible work unit;
- routing to the correct workflow or command;
- preserving reviewed-subject identity;
- validating scope and evidence;
- stopping safely when determinism or authority is absent.

## 4. Product Truth and Target Truth

Before using AI-DOS, identify the two truth domains.

| Truth Domain | Typical Content | Must Not Contain |
|:---|:---|:---|
| AI-DOS Product Truth | reusable architecture, workflows, commands, schemas, checklists, provider behavior | Target-specific planning, live status, project evidence, project mission |
| Target Project Truth | mission, roadmap, phases, live status, protected areas, Target evidence | reusable AI-DOS algorithms or provider internals |

This boundary prevents one Target Project from becoming embedded in the reusable product.

When a document mixes the two domains, treat that as a potential governance or architecture defect rather than normal documentation convenience.

## 5. Roles

### 5.1 User

The user expresses intent, supplies context, reads results, and may request clarification, review, or further bounded action.

### 5.2 Human Governance

Human Governance is the authority that may:

- authorize a bounded task;
- direct continuation or an explicit next step;
- redirect or stop active work;
- approve a reviewed subject;
- authorize protected-area changes;
- authorize Target state transitions.

Human Governance authority is not inferred from repository activity, model confidence, branch state, or tool access.

### 5.3 Target Project

The Target Project supplies the authoritative operational context consumed by AI-DOS.

### 5.4 Execution Provider

The execution provider may be an AI host, agent, automation, local runtime, or other compatible provider. It performs only the work authorized by the resolved context.

### 5.5 Reviewer

A reviewer evaluates the exact reviewed subject against its authority, scope, validation, evidence, and protected boundaries. Review is non-mutating unless separately authorized.

## 6. Before You Begin

Confirm that the Target Project provides enough authoritative context for the requested operation.

At minimum, a governed Target normally needs:

- a repository or workspace entry point;
- a canonical Target contract;
- an operational entry or current-state source;
- declared mission and planning authorities where applicable;
- protected-area declarations;
- validation and evidence expectations;
- permissions or execution-authority declarations;
- safe-stop behavior for missing or contradictory context.

If required context is missing, AI-DOS should stop and report the blocker. It should not silently invent a task, path, owner, permission, or state.

## 7. Ways to Request Work

### 7.1 Explicitly Bounded Task

Use an explicitly bounded request when you already know the exact objective and scope.

A strong bounded task includes:

- objective;
- owner or authority;
- allowed artifacts or paths;
- forbidden artifacts or protected areas;
- dependencies;
- validation requirements;
- completion condition;
- evidence expectations;
- stop conditions.

Example:

```text
HUMAN GOVERNANCE — Add one standalone AI-DOS Product FAQ document.

Scope: create only docs/AI-DOS/Product/FAQ.md on a dedicated branch.
Do not modify Target planning, status, mission, evidence, architecture contracts,
implementation files, or existing product documents.
Validate that the document contains no Target operational state.
Open a Draft PR and stop.
```

AI-DOS should preserve this bounded task rather than replacing it with state-derived work selection.

### 7.2 Continuation or Advancement

Use continuation intent when you want AI-DOS to resolve the next eligible bounded work unit from the Target's authoritative state.

Examples:

```text
HUMAN GOVERNANCE — Continue.
```

```text
Proceed with the next authorized task.
```

```text
Advance the Target Project.
```

Intent matters more than an exact keyword. The Target contract and AI-DOS workflows determine whether a unique eligible action can be resolved.

Continuation does not mean “do whatever seems useful.” It means resolve the applicable Target state, apply eligibility and priority rules, select exactly one bounded candidate, activate it through the authorized state-transition path, and execute only that work.

### 7.3 Explicit Next Step

Use an explicit next step when Human Governance wants to select a named candidate or objective.

```text
HUMAN GOVERNANCE — Continue.
Next Step: Create the validation-declaration proof scenario.
```

An explicit next step may bypass Target priority ranking where the Target contract permits it, but it does not waive:

- eligibility;
- dependencies;
- protected areas;
- scope boundaries;
- validation;
- evidence;
- ownership;
- state-transition requirements.

### 7.4 Review Request

Use a review request when you want a non-mutating assessment of an exact subject.

```text
Review PR #123 only.
```

A reliable review should identify:

- the exact subject locator;
- the exact revision identity;
- governing authority;
- changed artifacts;
- scope compliance;
- validation status;
- evidence completeness;
- protected-area compliance;
- findings and verdict.

Review completion does not equal Human Governance approval, merge authorization, or Target acceptance.

### 7.5 Approval Request

Approval is a governance action, not a synonym for “looks good.”

An approval request must resolve exactly one eligible reviewed subject. The subject may be named explicitly or, where the Target contract permits, resolved from exactly one canonical pending-approval record.

Approval should trigger only the authorized gate-closing state transition for that subject. It must not automatically:

- merge a pull request;
- select the next task;
- generate a candidate;
- activate another capability;
- execute further work.

### 7.6 Stop or Redirect

Use a stop or redirect instruction when active work should not continue unchanged.

Examples:

```text
HUMAN GOVERNANCE — Stop. Do not modify additional files.
```

```text
HUMAN GOVERNANCE — Redirect this work to product documentation only.
```

A redirect should state the new objective and boundaries clearly. It should not be treated as permission to retain unauthorized parts of the former scope.

## 8. The Standard Work Lifecycle

A governed AI-DOS work unit generally follows this lifecycle:

```text
Invocation
    ↓
Target Context resolution
    ↓
Intent and route resolution
    ↓
Candidate selection or explicit bounded task
    ↓
Activation when required
    ↓
Execution
    ↓
Validation
    ↓
Evidence collection
    ↓
Review
    ↓
Human Governance approval
    ↓
Authorized Target state transition
```

Each stage has a distinct purpose. Skipping stages can create authority, identity, or evidence gaps.

## 9. Target Context Resolution

Before work begins, AI-DOS should resolve Target-owned context in the order declared by the Target contract.

The resolved context should identify:

- Target identity;
- current objective;
- current capability boundary;
- active task or authorized next action;
- allowed and forbidden scope;
- protected areas;
- resources;
- validation sources;
- evidence requirements;
- permissions;
- state-update authority;
- blockers and safe-stop conditions.

The execution provider consumes this context. It must not substitute repository conventions or prior-session memory for current Target authority.

## 10. Candidate Selection

When no explicit bounded task is supplied, AI-DOS may need to select work.

A valid selection requires:

1. an applicable Target objective;
2. a finite candidate set or deterministic candidate-generation input;
3. eligibility evaluation;
4. dependency satisfaction;
5. protected-area compatibility;
6. deterministic priority or exactly one eligible candidate;
7. a bounded scope and completion condition;
8. authorization to activate the selected work.

If no candidate qualifies, AI-DOS should return a safe-stop result rather than choose nearby or convenient work.

If multiple candidates remain tied without an authorized tie-break, AI-DOS should stop rather than use model preference.

## 11. Activation and Execution

Selection and execution are not the same event.

Where the Target lifecycle requires activation, the selected work unit should first be recorded in the Target's canonical active-work state. Execution then remains bound to that exact identity.

During execution, the provider should:

- modify only authorized artifacts;
- preserve protected areas;
- avoid opportunistic cleanup;
- avoid unrelated refactoring;
- avoid capability activation by implication;
- record deviations and blockers;
- stop when authority or identity becomes ambiguous.

Tool availability does not create permission. A provider may technically be able to write, delete, merge, send, publish, or deploy while still lacking governance authority to do so.

## 12. Reviewed-Subject Identity

AI-DOS binds execution, validation, evidence, and review to an exact subject identity.

Depending on the provider, the identity may be realized by:

- an immutable revision;
- a commit hash;
- a content digest;
- a document version;
- an artifact identifier;
- a provider-neutral locator plus resolved revision identity.

A branch name or mutable URL alone may be insufficient because its content can drift.

Before review or approval, the current subject should be re-resolved and compared with the reviewed identity. Identity drift requires renewed review or safe-stop; it must not be treated as the same approved subject.

## 13. Validation

Validation must state what was actually exercised.

Examples:

- a Markdown-link check validates declared links;
- a schema validator validates the supplied schema instances;
- a TypeScript typecheck validates the TypeScript surface it covers;
- a CLI test validates the exercised CLI behavior;
- an independent review validates the exact reviewed subject against stated criteria.

A narrow validation result must not be promoted into a broader claim.

For example, passing an implementation-specific test does not independently prove:

- product-wide architectural correctness;
- governance compliance;
- Target acceptance;
- protected-area safety;
- Markdown contract consistency;
- readiness of inactive capabilities.

## 14. Evidence

A completion report should normally include:

- objective;
- authority;
- exact subject identity;
- changed artifacts;
- unchanged protected areas;
- validation commands or criteria;
- validation results;
- evidence locations;
- blockers;
- completion condition status;
- state-update authority;
- exactly one recommended next step where required.

Evidence should be reproducible and proportionate to the claim.

Do not treat a pull request, commit, branch, or successful command as sufficient evidence by itself unless the governing task explicitly defines it that way.

## 15. Review

A reviewer should start from the subject identity and governing scope, not from a general impression.

The reviewer should verify:

1. the reviewed subject is the exact requested subject;
2. the revision has not drifted;
3. every changed artifact is authorized;
4. forbidden artifacts remain unchanged;
5. protected areas remain preserved;
6. validation is relevant and complete;
7. evidence supports the claimed completion;
8. no new capability or authority was activated implicitly;
9. findings are classified clearly;
10. the verdict is bounded to the reviewed subject.

A review may conclude with findings, approval eligibility, rejection, or safe-stop. The exact allowed verdict vocabulary is defined by the applicable review contract.

## 16. Human Governance Approval

Human Governance approval closes a lifecycle gate only when the subject is eligible and uniquely resolved.

Before approving, confirm:

- the exact subject identity;
- the review outcome;
- validation evidence;
- completion or integration evidence;
- absence of unresolved blockers;
- consistency with any canonical pending-approval record;
- consistency with the active-work identity where applicable.

Approval is not a general-purpose continuation signal. After approval, AI-DOS should stop at the resulting hold unless Human Governance separately supplies continuation or a next step.

## 17. Safe-Stop Behavior

Safe-stop is a successful safety outcome, not a system failure.

AI-DOS should stop before mutation or further mutation when it encounters conditions such as:

- missing Target contract;
- missing operational state;
- contradictory authorities;
- no eligible candidate;
- unresolved candidate tie;
- missing permission;
- protected-area conflict;
- incomplete scope;
- missing validation requirements;
- missing evidence;
- reviewed-subject identity drift;
- ambiguous approval subject;
- unavailable required resource;
- unauthorized state transition;
- tool result that cannot be verified.

A useful safe-stop report states:

- what operation was attempted;
- where resolution stopped;
- the exact blocker;
- what was not changed;
- the minimum authority or information needed to proceed.

## 18. Working With Multiple AI Providers

AI-DOS is provider-neutral. Different providers may be used for execution, review, audit, or comparison.

When using multiple providers:

- give each provider the same authoritative subject identity;
- require each to read the current governance chain;
- separate execution from independent review where useful;
- do not let one provider's memory substitute for repository truth;
- compare findings against the same scope and evidence;
- preserve the exact reviewed revision across providers;
- resolve disagreements through evidence and authority, not majority vote.

A second provider is not automatically independent if it receives a biased or incomplete summary instead of the actual subject and authorities.

## 19. Working With Tools and Connectors

Connectors expose capabilities such as repository reads, branch creation, file writes, pull-request operations, email, or calendar actions.

Follow these rules:

- read before writing when current state matters;
- use exact repository, path, branch, and subject identifiers;
- distinguish “tool unavailable” from “action unauthorized”;
- treat 401 and 403 responses as access or permission blockers;
- treat 404 as unresolved identity, path, branch, or visibility until verified;
- treat 409 and 422 as state, conflict, or validation blockers;
- avoid retry loops that could duplicate writes;
- verify the resulting commit, artifact, or action identity;
- report partial completion honestly.

A successful tool response proves only that the tool performed the reported operation. It does not prove governance compliance or Target acceptance.

## 20. Common User Workflows

### 20.1 Create One Bounded Document

1. Name the document and truth domain.
2. Declare exactly one allowed path.
3. Declare protected and forbidden areas.
4. Request a dedicated branch and one commit if desired.
5. Request validation appropriate to the document.
6. Request a Draft PR.
7. Review the exact revision.
8. Approve only through the applicable governance gate.

### 20.2 Continue Target Development

1. Express continuation intent.
2. Allow the Target contract to resolve current state.
3. Allow AI-DOS to select exactly one eligible candidate.
4. Confirm activation where required.
5. Let execution stop after the bounded work unit.
6. Review and approve separately.

### 20.3 Request a Read-Only Audit

1. Identify the repository, subject, or document set.
2. State that the audit is non-mutating.
3. Declare authority and comparison criteria.
4. Require evidence-linked findings.
5. Separate observed facts, interpretations, and recommendations.
6. Do not authorize fixes as part of the audit unless explicitly requested.

### 20.4 Correct a Review Finding

1. Re-resolve the current reviewed subject.
2. Identify the exact open finding.
3. Bound the correction to the minimum required artifacts.
4. Preserve unrelated content.
5. rerun applicable validation.
6. produce a new immutable revision identity.
7. request fresh review of that revision.

### 20.5 Approve and Close a Work Unit

1. Verify the approval-eligible reviewed identity.
2. Confirm required evidence.
3. issue explicit approval.
4. apply only the authorized gate-closing Target state transition.
5. clear the matching active work unit where the Target contract requires it.
6. return to a non-executable hold.
7. do not auto-start the next task.

## 21. Writing Effective Requests

Prefer requests that are:

- explicit about authority;
- clear about the intended truth domain;
- bounded to one objective;
- precise about files or artifact classes;
- explicit about forbidden scope;
- clear about validation and completion;
- clear about whether the task is execution, review, approval, or continuation.

Weak request:

```text
Improve the project documentation.
```

Stronger request:

```text
HUMAN GOVERNANCE — Add one standalone AI-DOS Product glossary.
Create only docs/AI-DOS/Product/Glossary.md on a dedicated branch.
Do not modify Target Project truth, existing normative contracts, implementation,
or planning artifacts. Validate terminology against current AI-DOS product documents,
open a Draft PR, and stop.
```

## 22. Reading AI-DOS Responses

A high-quality execution report should distinguish:

| Report Element | Meaning |
|:---|:---|
| Objective | the exact result the work unit intended to produce |
| Scope | artifacts and operations that were authorized |
| Changed artifacts | what was actually modified |
| Validation | checks actually run and their results |
| Evidence | where claims can be independently verified |
| Protected-area confirmation | what was explicitly preserved |
| Blockers | unresolved conditions that prevent completion or advancement |
| State update | applied only when exactly authorized; otherwise recommended |
| Next step | one bounded recommendation, not implicit execution |

Do not accept vague statements such as “all good,” “fully compliant,” or “validated” without scope-specific evidence.

## 23. Common Mistakes

### 23.1 Treating Repository Activity as Project State

Branches, commits, pull requests, merges, and comments are provider artifacts. They do not automatically update Target operational truth.

### 23.2 Treating Review as Approval

A reviewer may declare a subject approval-eligible, but Human Governance still resolves the approval gate.

### 23.3 Treating Merge as Acceptance

A merged change may still lack the Target state transition required to record acceptance.

### 23.4 Treating Approval as Continuation

Approval closes the reviewed subject. Starting new work requires separate continuation or next-step authority.

### 23.5 Letting Scope Grow by Convenience

Adjacent defects, cleanup opportunities, formatting changes, and refactors remain unauthorized unless included in the task.

### 23.6 Using Mutable Identity for Review

Reviewing “the branch” without recording the exact revision allows later changes to escape review.

### 23.7 Inferring Architecture From Implementation Language

Current code, package metadata, or toolchain choices do not define AI-DOS product identity or future architecture.

### 23.8 Inventing Missing Context

When an authority, path, candidate, permission, or state cannot be resolved, the correct result is a blocker report.

## 24. User Safety Checklist

Before authorizing execution, confirm:

- [ ] I know whether this is Product work or Target work.
- [ ] The objective is singular and bounded.
- [ ] Allowed and forbidden scope are clear.
- [ ] Protected areas are declared.
- [ ] Required resources are available.
- [ ] Validation and completion criteria are stated.
- [ ] The provider has tool access but is not relying on tool access as authority.
- [ ] The expected stop point is clear.

Before accepting a result, confirm:

- [ ] The exact subject identity is recorded.
- [ ] Changed artifacts match the authorized scope.
- [ ] Protected areas remained unchanged.
- [ ] Validation evidence supports the stated claims.
- [ ] Review covered the current revision.
- [ ] No unresolved blocker remains.
- [ ] Approval will not implicitly start new work.

## 25. Quick Reference

| Intent | Expected Route | Expected Stop Point |
|:---|:---|:---|
| Explicit bounded task | applicable command and execution workflow | after execution, validation, evidence, and report |
| Continue / advance | Target resolution → task planning → selection → activation → execution | after exactly one bounded work unit |
| Next Step: X | eligibility check for X → activation → execution | after X's bounded work unit |
| Review subject | review workflow | after non-mutating verdict and findings |
| Approve subject | state updater or applicable approval transition | after gate-closing transition |
| Audit | audit workflow | after evidence-backed non-mutating report |
| Stop | stop immediately or at safest reachable boundary | blocker or stop confirmation |
| Redirect | replace objective only within explicit new authority | after redirected bounded work |

## 26. Related Product Documents

This guide is complemented by:

- `ArchitectureGuide.md` for the product's architecture and authority model;
- `CommandReference.md` for detailed command and intent behavior;
- `AdministratorGuide.md` for operational administration;
- `DeveloperGuide.md` for contract-led development;
- `SecurityGuide.md` for security and trust boundaries;
- `TroubleshootingGuide.md` for diagnosis and bounded recovery.

Where this guide and a normative AI-DOS contract differ, the normative contract governs.

## 27. Final Principle

The central user discipline in AI-DOS is simple:

> Resolve authority first, execute one bounded subject, preserve identity and evidence, and stop when the next action is not uniquely authorized.

That discipline allows natural-language operation without turning model confidence, repository activity, or tool availability into uncontrolled authority.

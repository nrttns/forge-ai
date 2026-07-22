# AI-DOS Administrator Guide

**Version:** 1.0 (Draft)

---

## 1. Purpose

This guide explains how to administer an AI-DOS-enabled repository without assuming ownership of the Target Project's product, mission, planning, or implementation decisions.

It focuses on operational stewardship: maintaining discoverability, preserving authority boundaries, controlling access, supporting providers, observing execution, and recovering safely from administrative problems.

This is a standalone AI-DOS Product document. It does not define Target-specific operational state, project planning, or repository implementation.

---

## 2. Intended Audience

This guide is for people responsible for one or more of the following:

- repository administration;
- access and permission management;
- provider integration oversight;
- branch and review controls;
- operational readiness;
- validation infrastructure;
- evidence retention;
- incident response;
- lifecycle maintenance.

The administrator may also hold Human Governance authority, but the two roles are not automatically identical.

---

## 3. Administrative Role

An AI-DOS administrator maintains the environment in which governed work can occur.

The administrator may:

- ensure required authority documents are reachable;
- maintain provider access and execution prerequisites;
- configure repository protections;
- preserve validation and evidence channels;
- investigate operational failures;
- restore broken administrative infrastructure;
- report blockers and risks.

The administrator does not gain authority to:

- invent Target objectives;
- select work without authorization;
- approve work on behalf of Human Governance;
- rewrite Target planning;
- bypass protected areas;
- reinterpret validation as acceptance;
- convert repository activity into operational state.

Administration supports governed execution. It does not replace governance.

---

## 4. Core Administrative Boundaries

### 4.1 Product Truth and Target Truth

AI-DOS Product Truth defines reusable behavior, contracts, workflows, and operating principles.

Target Truth defines repository-specific mission, planning, state, evidence, protected areas, and authorization.

Administrators must preserve that separation.

A reusable AI-DOS document must not contain the operational state of one Target Project. A Target document must not redefine reusable AI-DOS behavior.

### 4.2 Administrative State Is Not Target State

Repository settings, provider credentials, branch protections, workflow status, and hosting configuration are administrative facts.

They are not automatically Target operational state.

For example:

- a branch existing does not mean a work unit is active;
- a pull request being merged does not mean Human Governance accepted it;
- a validation check passing does not mean the Target advanced;
- a provider being connected does not mean execution is authorized;
- an administrator having write access does not mean scope expansion is allowed.

### 4.3 Implementation Is Subordinate

Administrative tools and implementation technologies may change.

Their presence does not define AI-DOS architecture or product identity. An administrator must avoid treating a current runtime, package manager, programming language, CI platform, or source tree as the normative AI-DOS system.

---

## 5. Administrative Operating Model

A healthy AI-DOS-enabled repository usually contains four operational domains:

```text
Governance and Authority
        │
        ▼
Repository Administration
        │
        ▼
Provider and Execution Environment
        │
        ▼
Validation, Review, and Evidence
```

Each domain has a different owner and responsibility.

### Governance and Authority

Determines what is authorized and who may decide.

### Repository Administration

Maintains access, protections, discoverability, and supporting services.

### Provider and Execution Environment

Supplies the tools used to read, plan, edit, validate, review, or report.

### Validation, Review, and Evidence

Produces bounded verification and preserves the basis for later Human Governance decisions.

Administrative controls should connect these domains without collapsing them into one another.

---

## 6. Repository Onboarding

Before enabling AI-DOS operations in a Target repository, the administrator should confirm that the repository can expose a resolvable Target Context.

### 6.1 Minimum Readiness Questions

Confirm that:

- the repository entry point is discoverable;
- the Target contract is identifiable;
- the AI-DOS provider entry is identifiable;
- the Target operational entry is explicit;
- protected areas are declared;
- execution authority is distinguishable from read-only access;
- validation resources are known;
- missing context produces safe-stop rather than guesswork.

### 6.2 Repository Entry

The repository should provide a clear entry document or equivalent discovery surface.

The entry should identify:

- repository identity;
- repository role;
- Target truth root;
- AI-DOS Product Truth root or provider entry;
- mandatory reading order;
- protected discovery boundaries.

The administrator should verify discoverability from a fresh session, not only from an already configured local environment.

### 6.3 Provider Entry

The AI-DOS provider entry should remain Target-independent.

It should consume resolved Target Context rather than hard-code one repository's planning paths, project state, branch names, or provider-specific assumptions.

### 6.4 Onboarding Validation

A useful onboarding validation should include at least:

- successful discovery with complete declarations;
- safe-stop when an authority document is missing;
- safe-stop when declarations conflict;
- confirmation that Target state does not leak into Product Truth;
- confirmation that product behavior is not redefined by the Target.

---

## 7. Access and Permission Administration

### 7.1 Least Authority

Grant only the access required for the administrative or execution role.

Typical levels include:

- read-only discovery;
- review access;
- branch creation;
- content modification;
- workflow execution;
- repository administration;
- governance decision authority.

These levels must not be treated as interchangeable.

### 7.2 Human Governance Authority

Human Governance authority should be explicit.

Repository ownership, administrator status, commit access, or provider account ownership does not automatically establish Human Governance authority.

Administrative records should make it possible to distinguish:

- who can operate infrastructure;
- who can execute authorized work;
- who can review;
- who can approve or accept;
- who can alter protected governance surfaces.

### 7.3 Provider Credentials

Provider credentials should be:

- scoped to the required repository or organization;
- stored outside normative documents;
- rotated when exposure is suspected;
- revoked when no longer needed;
- audited for unexpected privilege growth;
- separated from Human Governance identity where possible.

Never place secrets, access tokens, private keys, or credential material inside AI-DOS Product or Target Truth documents.

### 7.4 Service Accounts

When service accounts are used, document their operational role and limits.

A service account should not be granted broad write access merely because a provider may need occasional mutation rights. Prefer bounded access and explicit escalation.

---

## 8. Branch and Change Controls

### 8.1 Protected Primary Branch

The primary branch should normally require changes to arrive through a reviewable integration mechanism.

Useful controls may include:

- pull-request-only changes;
- required validation checks;
- restricted force pushes;
- restricted deletion;
- review requirements;
- signed or attributable commits where appropriate.

These are administrative protections, not AI-DOS acceptance semantics.

### 8.2 One Bounded Work Unit

Where the active workflow requires one bounded work unit, administrative processes should preserve:

- one resolved objective;
- declared file scope;
- one subject identity;
- traceable validation;
- no unrelated cleanup;
- no implicit follow-up work.

### 8.3 Draft Changes

Draft change requests are useful for incomplete or review-pending work.

Their existence does not imply:

- authorization to continue indefinitely;
- acceptance;
- merge authority;
- Target state transition;
- permission to expand scope.

### 8.4 Change Identity

Administrators should ensure that a reviewed subject can be re-resolved to the exact revision that was reviewed.

Examples of implementation-specific identity evidence may include a commit digest, immutable artifact identifier, or provider-neutral revision locator.

The identity mechanism must prevent a later revision from silently inheriting an earlier review result.

---

## 9. Provider Administration

### 9.1 Provider Neutrality

AI-DOS is designed so that different providers may execute the same governed contracts.

Administrators should avoid embedding one provider's internal terminology, command syntax, session model, or proprietary state into reusable AI-DOS Product Truth.

### 9.2 Provider Adapters

A provider adapter may help a tool discover the canonical AI-DOS or Target contract.

An adapter should:

- point to canonical authority;
- remain minimal;
- avoid duplicating governance semantics;
- avoid storing current Target state;
- avoid redefining workflows;
- remain replaceable.

### 9.3 Session Readiness

A fresh provider session should be able to:

1. discover the repository entry;
2. read the Target contract;
3. read the AI-DOS provider entry;
4. resolve current Target Context;
5. identify the exact authorized action or safe-stop.

Administrative readiness should be tested from a clean context periodically.

### 9.4 Multiple Providers

When multiple providers are used:

- all should resolve the same canonical authorities;
- provider-local memory must not become authority;
- provider-specific adapters must not diverge;
- review identity must remain stable across providers;
- evidence should record which provider and surface were exercised;
- disagreements should safe-stop or route to review rather than produce silent divergence.

---

## 10. Validation Administration

### 10.1 Validation Scope

Every validation result should state what was actually tested.

Examples:

- Markdown structure validation;
- link validation;
- schema validation;
- command-routing scenario validation;
- package validation;
- type checking;
- unit tests;
- provider integration checks.

A narrow check must not be reported as proof of the entire AI-DOS system.

### 10.2 Required Checks

Required checks should be chosen because they validate the active work surface.

Avoid requiring irrelevant checks merely because they exist. Also avoid omitting a needed check because another unrelated workflow is green.

### 10.3 Validation Availability

Administrators should monitor whether validation infrastructure is:

- reachable;
- deterministic;
- reproducible;
- appropriately permissioned;
- protected from silent modification;
- capable of reporting failures clearly.

### 10.4 Validation Failure

A failed required check should block integration until the failure is resolved or Human Governance explicitly changes the applicable requirement.

Administrators should not bypass a failed check by weakening branch protection without explicit authority.

### 10.5 Validation Drift

Validation drift occurs when the check no longer tests the surface its name implies.

Controls include:

- periodic review of workflow definitions;
- scenario-based verification;
- comparison between declared and actual validation scope;
- preservation of validation logs;
- explicit versioning of validation contracts.

---

## 11. Evidence Administration

### 11.1 Evidence Purpose

Evidence supports review and Human Governance decisions.

Evidence may include:

- changed-artifact inventories;
- validation outputs;
- review findings;
- revision identities;
- completion records;
- integration records;
- safe-stop reports;
- incident records.

### 11.2 Evidence Integrity

Evidence should be:

- attributable;
- reproducible where possible;
- bound to the reviewed revision;
- preserved without rewriting history;
- separated from interpretation;
- explicit about limitations.

### 11.3 Evidence Retention

Retention policy should reflect the repository's governance and compliance needs.

At minimum, preserve enough information to determine:

- what changed;
- who or what performed the action;
- what was validated;
- what revision was reviewed;
- what decision was made;
- whether protected areas remained intact.

### 11.4 Evidence Is Not Acceptance

Evidence may establish that work is reviewable or approval-eligible.

It does not itself create Human Governance acceptance or update Target state.

---

## 12. Observability

### 12.1 What to Observe

Administrators should be able to observe:

- provider access failures;
- authority-resolution failures;
- safe-stop events;
- branch protection failures;
- validation failures;
- review identity drift;
- unauthorized path changes;
- credential anomalies;
- workflow unavailability;
- evidence publication failures.

### 12.2 Logs

Operational logs should avoid containing secrets or unnecessary private content.

Logs should identify:

- timestamp;
- actor or provider;
- action category;
- repository or Target;
- reviewed or executed subject identity;
- result;
- blocker or error;
- validation scope when relevant.

### 12.3 Metrics

Useful administrative metrics may include:

- safe-stop frequency by cause;
- validation failure rate;
- average time to resolve access blockers;
- review identity drift incidents;
- unauthorized-scope attempts;
- provider availability;
- evidence completeness rate.

Metrics should improve reliability, not become a substitute for governance judgment.

---

## 13. Safe-Stop Administration

### 13.1 Safe-Stop Is Expected Behavior

Safe-stop is an intentional system outcome when deterministic and authorized execution cannot continue.

Administrators should not treat every safe-stop as a system defect.

### 13.2 Common Safe-Stop Causes

Common causes include:

- missing Target authority;
- conflicting declarations;
- unresolved protected-area conflict;
- ambiguous work-unit identity;
- missing validation resources;
- insufficient permission;
- revision identity drift;
- unavailable provider capability;
- multiple equally valid candidates without a declared tie-break;
- absent Human Governance approval subject.

### 13.3 Administrative Response

When safe-stop occurs:

1. preserve the reported blocker;
2. do not guess the missing value;
3. identify whether the cause is administrative or governance-owned;
4. repair only administrative infrastructure within authority;
5. route governance questions to Human Governance;
6. rerun discovery or validation from a clean state;
7. preserve evidence of the resolution.

### 13.4 Do Not Bypass Safe-Stop

Do not bypass safe-stop by:

- granting broad permissions without review;
- modifying protected documents;
- selecting an arbitrary candidate;
- changing revision identity;
- disabling required checks;
- reclassifying a failure as success;
- using provider memory as authority.

---

## 14. Incident Response

### 14.1 Incident Categories

Administrative incidents may include:

- credential exposure;
- unauthorized repository mutation;
- branch-protection bypass;
- authority-document corruption;
- provider adapter divergence;
- validation tampering;
- evidence loss;
- incorrect state mutation;
- review of the wrong revision;
- Product Truth and Target Truth contamination.

### 14.2 Immediate Actions

For a suspected incident:

1. stop further mutation;
2. preserve logs and evidence;
3. revoke or restrict affected credentials when necessary;
4. identify the exact affected revision and paths;
5. determine whether protected areas were touched;
6. notify the appropriate governance authority;
7. avoid rewriting evidence or history;
8. restore only through an authorized bounded work unit.

### 14.3 Recovery

Recovery should produce:

- incident summary;
- affected scope;
- preserved evidence;
- corrective action;
- validation results;
- remaining risks;
- protected-area confirmation;
- one recommended next step.

### 14.4 Incorrect State Mutation

An incorrect Target state mutation is not corrected merely by editing the visible value.

Recovery must preserve provenance and follow the Target's state-update authority. Administrative access does not authorize silent history repair.

---

## 15. Backup and Recovery

### 15.1 What to Protect

Protect at least:

- canonical authority documents;
- Target operational state;
- validation definitions;
- provider adapters;
- evidence records;
- repository settings documentation;
- access-control records;
- incident records.

### 15.2 Recovery Validation

After recovery, verify:

- canonical paths remain discoverable;
- authority order is unchanged;
- protected areas retain integrity;
- credentials are valid and scoped;
- branch controls are active;
- validation checks execute;
- evidence references resolve;
- fresh provider sessions safe-stop or proceed correctly.

### 15.3 Repository History

Repository history is valuable evidence but is not a substitute for current authoritative state.

Do not infer the current authorized task solely from old commits, branches, pull requests, or previous sessions.

---

## 16. Upgrades and Maintenance

### 16.1 Upgrade Principles

AI-DOS maintenance should preserve:

- provider neutrality;
- Target independence;
- authority ownership;
- deterministic resolution;
- protected-area enforcement;
- review identity;
- safe-stop behavior;
- evidence traceability.

### 16.2 Before an Upgrade

Before changing administrative infrastructure:

- identify the exact component being upgraded;
- declare the expected impact;
- confirm compatibility with canonical contracts;
- back up relevant settings and evidence;
- define rollback conditions;
- define validation criteria;
- obtain required authorization.

### 16.3 After an Upgrade

Afterward:

- verify fresh-session discovery;
- test permission boundaries;
- test required validation;
- confirm adapters still point to canonical authority;
- confirm no Target state leaked into Product Truth;
- record observed limitations;
- report whether rollback remains necessary.

### 16.4 Adapter Maintenance

Adapters should be reviewed whenever:

- canonical paths change;
- provider behavior changes;
- a new provider is added;
- divergence is suspected;
- onboarding validation fails.

The adapter should be updated only to preserve discovery. It should not absorb canonical governance content.

---

## 17. Administrative Checklists

### 17.1 Initial Repository Readiness

- Repository entry is discoverable.
- Target contract is explicit.
- AI-DOS provider entry is explicit.
- Target operational entry is explicit.
- Product and Target truth roots are separated.
- Protected areas are declared.
- Permissions are scoped.
- Validation resources are available.
- Evidence storage is available.
- Missing context produces safe-stop.

### 17.2 Before Enabling Write Access

- The actor's role is known.
- The authorized work unit is bounded.
- Allowed paths are explicit.
- Forbidden paths are explicit.
- Required validation is declared.
- Review identity can be preserved.
- Secrets are not exposed to documents or logs.
- Rollback or recovery is understood.

### 17.3 Before Integration

- The exact revision was reviewed.
- Required checks passed.
- The changed-file scope matches authorization.
- Protected areas remain unchanged or were explicitly authorized.
- Review findings are resolved or recorded.
- Evidence is preserved.
- Integration is not being confused with Human Governance acceptance.

### 17.4 Periodic Health Review

- Provider credentials remain necessary and scoped.
- Branch protection remains active.
- Required checks still validate their declared surfaces.
- Adapters still resolve canonical authority.
- Evidence references remain accessible.
- Safe-stop behavior remains intact.
- Product and Target truth remain separated.
- No provider-local state has become de facto authority.

---

## 18. Administrative Anti-Patterns

Avoid these practices:

### Broad Permanent Write Access

Granting every provider full repository administration because some tasks require mutation.

### Governance by Repository Settings

Assuming branch protection, repository ownership, or merge rights define Human Governance authority.

### Validation Inflation

Claiming that one implementation-specific test proves the full AI-DOS architecture or governance model.

### Adapter Drift

Copying canonical contracts into tool-specific adapters and allowing the copies to diverge.

### Silent Scope Expansion

Adding cleanup, refactoring, planning updates, or unrelated documentation to an already bounded task.

### Merge Equals Acceptance

Treating integration status as the Target's accepted operational state.

### History Equals Current State

Using old branches, commits, or previous provider sessions as the source of the current authorized action.

### Safe-Stop Suppression

Weakening controls to make automation continue when authority or context is missing.

---

## 19. Responsibility Matrix

| Responsibility | Administrator | Execution Provider | Reviewer | Human Governance |
|:---|:---:|:---:|:---:|:---:|
| Maintain repository access | Yes | No | No | May authorize policy |
| Preserve authority discoverability | Yes | Consume | Verify when relevant | Owns governing decisions |
| Select Target work | No | Only through authorized workflow | No | Authorizes policy or explicit selection |
| Execute bounded work | Enable | Yes, when authorized | No | Authorizes |
| Run validation | Enable or run | May run | May inspect | Does not replace evidence |
| Review exact revision | Enable access | No self-substitution | Yes | Consumes review |
| Approve or accept | No, unless separately authorized | No | No | Yes |
| Maintain branch controls | Yes | No | No | May authorize exceptions |
| Mutate Target state | No, unless exact state authority exists | Only through owning workflow | No | Authorizes transition |
| Preserve evidence | Yes | Produce | Produce findings | Consumes and decides |

---

## 20. Summary

AI-DOS administration is the disciplined maintenance of the environment in which governed AI work occurs.

A good administrator:

- preserves Product Truth and Target Truth separation;
- maintains discoverable canonical authority;
- grants least authority;
- keeps provider adapters minimal;
- protects primary branches and evidence;
- ensures validation claims remain bounded;
- treats safe-stop as a legitimate outcome;
- distinguishes integration from acceptance;
- responds to incidents without rewriting provenance;
- supports Human Governance without replacing it.

The central administrative principle is simple:

> Maintain the conditions for authorized, deterministic, reviewable work—without turning administrative control into governance authority.

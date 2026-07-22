# AI-DOS Developer Guide

## 1. Purpose

This guide explains how developers contribute to AI-DOS without confusing implementation details with product authority.

AI-DOS is an MD-first governed AI system. Its governing Markdown artifacts define the normative product surface. Source code, command-line tools, adapters, tests, package metadata, and distribution artifacts are implementation surfaces. They support the product but do not replace its governing contracts.

This guide is explanatory product documentation. It does not grant permission to modify protected files, activate capabilities, change Target state, or bypass Human Governance.

---

## 2. Audience

This guide is for developers who:

- implement or maintain AI-DOS product components;
- create provider adapters or distribution surfaces;
- add validation, review, or execution support;
- repair defects in existing implementation surfaces;
- translate approved Markdown contracts into executable behavior;
- contribute documentation that explains product behavior.

Developers working inside a Target repository must also follow that Target's own contract, operational state, protected areas, and authorization rules.

---

## 3. Development Model

AI-DOS development separates three kinds of work:

1. **Normative product work** changes the governing AI-DOS contracts.
2. **Implementation work** realizes already-authorized product behavior in code, tooling, adapters, or packaging.
3. **Explanatory documentation work** helps users understand the product without redefining normative behavior.

These categories must not be mixed silently.

A code change cannot redefine product semantics merely because it is executable. An explanatory guide cannot establish a new workflow merely because it describes one. A normative contract change requires the authority and review appropriate to product truth.

---

## 4. Product Truth and Target Truth

AI-DOS product truth belongs under the AI-DOS product root.

Target-specific mission, planning, operational state, evidence, authorization, protected areas, and project resources belong to the Target Project.

A developer must preserve this boundary:

```text
AI-DOS product contracts
    define reusable provider behavior

Target Project contracts
    define project-specific authority and operational context
```

Product code may consume resolved Target Context. It must not embed a particular Target's current phase, task, pull request, branch, evidence status, planning file name, or repository-specific state as reusable AI-DOS behavior.

---

## 5. Read Before Editing

Before changing a repository that uses AI-DOS:

1. Read the repository entry contract.
2. Read the canonical Target Project contract.
3. Read the AI-DOS provider entry contract.
4. Read the Target's current operational entry.
5. Resolve the exact authorized task, scope, protected areas, validation requirements, and completion condition.
6. Stop when the authority chain cannot resolve exactly one bounded action.

Do not infer authorization from:

- a nearby TODO;
- an open issue;
- an unmerged branch;
- recent repository activity;
- a failing test;
- implementation convenience;
- the existence of incomplete code;
- a previous session's memory.

Repository facts may identify possible work. They do not by themselves authorize it.

---

## 6. Bounded Development

Every implementation task should define:

| Field | Required meaning |
|:---|:---|
| Objective | The single observable result the task must produce |
| Owner | The authority responsible for the affected truth or implementation surface |
| Allowed scope | Exact files, directories, components, or artifact types that may change |
| Forbidden scope | Protected or unrelated areas that must remain unchanged |
| Inputs | Contracts, schemas, state, and evidence required for the work |
| Validation | Checks that demonstrate the changed surface behaves as intended |
| Completion condition | The observable condition that ends execution |
| Stop conditions | Ambiguity, missing authority, identity drift, validation failure, or protected-area conflict |

A developer must not broaden scope because another repair appears useful. Record unrelated findings separately and leave them unchanged.

---

## 7. Markdown-First Development

In AI-DOS, Markdown may be normative system material rather than secondary prose.

Before implementing behavior from Markdown:

- identify the owning document;
- determine whether it is active, draft, historical, archived, or explanatory;
- resolve precedence when several documents mention the same topic;
- preserve exact terminology where it carries contractual meaning;
- distinguish requirements from examples;
- identify safe-stop conditions and prohibited outcomes;
- confirm that the implementation task authorizes the affected behavior.

Do not implement a concept merely because a draft describes it. Do not treat an example as a universal schema. Do not convert a non-goal into a feature.

---

## 8. Implementation Surfaces

Implementation surfaces may include:

- command-line interfaces;
- provider adapters;
- local execution tools;
- parsers and resolvers;
- validation utilities;
- evidence collectors;
- packaging and distribution support;
- tests and fixtures;
- compatibility shims;
- generated or compiled artifacts when explicitly authorized.

The implementation language is replaceable unless a governing contract states otherwise.

The presence of JavaScript, TypeScript, Node.js, Python, shell scripts, or another technology does not establish the product architecture. Developers should choose or preserve technologies only within the exact bounded implementation task.

---

## 9. Contract-to-Implementation Traceability

Each behavior implemented in code should be traceable to an owning contract or an explicitly authorized design decision.

A useful traceability record includes:

- requirement owner;
- source document and section;
- implementation component;
- expected input;
- expected output;
- safe-stop or error behavior;
- validation evidence.

Avoid comments such as "required by architecture" without identifying the actual authority. Avoid duplicating long normative text inside source code when a stable reference and focused implementation note are sufficient.

---

## 10. Provider-Neutral Design

AI-DOS is intended to operate through different AI hosts, automation systems, repositories, and integration providers.

Reusable product behavior should therefore avoid assuming:

- GitHub is the only repository provider;
- a pull request is the universal review subject;
- a commit SHA is the universal revision identity;
- one AI model or vendor owns execution;
- one operating system owns local execution;
- one package manager defines distribution;
- one repository layout is universal.

Provider-specific adapters may translate universal AI-DOS concepts into provider-specific operations. The adapter must not redefine the universal concept.

For example:

```text
Universal concept: Reviewed-Subject Revision Identity
Provider realization: commit SHA, immutable document revision, artifact digest, or equivalent
```

---

## 11. State and Identity Discipline

Execution, validation, review, and approval must remain bound to the same authorized subject identity.

Developers must account for identity drift, including:

- a branch advancing after validation;
- a reviewed file changing before approval;
- generated output no longer matching its source;
- a locator resolving to a different artifact;
- an adapter reading stale Target Context.

When identity cannot be re-resolved deterministically, the correct behavior is safe-stop. Guessing that two revisions are "effectively the same" is not deterministic identity resolution.

---

## 12. Safe-Stop as a Product Behavior

Safe-stop is not a generic crash and not an excuse to abandon work without explanation.

A safe-stop should:

1. halt before unauthorized mutation;
2. identify the missing, conflicting, stale, or ambiguous input;
3. preserve already-valid evidence;
4. avoid selecting an arbitrary interpretation;
5. report the exact authority or information needed to continue.

Common safe-stop conditions include:

- no uniquely authorized task;
- conflicting contracts;
- missing Target Context;
- unresolved protected-area conflict;
- ambiguous candidate selection;
- stale reviewed-subject identity;
- insufficient permission;
- validation that cannot support the requested claim.

---

## 13. Error Handling

Implementation errors should be classified by their operational meaning.

| Error class | Expected response |
|:---|:---|
| Invalid user input | Return a precise, actionable input error |
| Missing required context | Safe-stop and identify the missing source |
| Permission denied | Stop without attempting a workaround that exceeds authority |
| Contract conflict | Stop and report the conflicting authorities |
| Provider failure | Preserve provider-neutral state and report provider-specific diagnostics |
| Validation failure | Do not claim completion; report the failed surface |
| Identity drift | Invalidate stale evidence and require re-resolution |
| Internal defect | Fail safely, preserve evidence, and avoid partial unauthorized state mutation |

Errors should not be converted into silent defaults when the default could change authority, scope, identity, or outcome.

---

## 14. Validation Strategy

Validation must match the surface being changed.

Examples:

- parser tests validate parser behavior;
- schema fixtures validate accepted and rejected declarations;
- adapter tests validate provider translation;
- command-line tests validate the CLI surface;
- packaging checks validate package contents and installation behavior;
- Markdown checks validate structure, links, identifiers, or declared consistency rules;
- review validates the exact reviewed subject at the exact revision inspected.

A passing implementation test does not independently prove:

- product-wide architectural correctness;
- governance compliance;
- Target evidence acceptance;
- capability activation;
- correctness of unrelated Markdown contracts.

Validation reports should state both what was exercised and what was not exercised.

---

## 15. Testing Guidance

Tests should be deterministic, isolated, and tied to observable contract behavior.

Prefer tests that:

- use explicit fixtures;
- distinguish valid, invalid, missing, conflicting, and stale inputs;
- verify safe-stop behavior;
- assert stable error codes or structured outcomes where contracts require them;
- avoid depending on live external services unless integration testing is explicitly authorized;
- make provider-specific assumptions visible;
- preserve reviewed-subject identity across test evidence.

Avoid tests that pass only because they reproduce the implementation's current internal structure. Test the required behavior rather than incidental code organization.

---

## 16. Documentation in Code Changes

A code change may require explanatory documentation when it changes a user-visible surface.

Documentation should explain:

- what changed;
- who the behavior is for;
- required inputs;
- expected outputs;
- limits and non-goals;
- safe-stop or error conditions;
- compatibility implications.

Do not update product documentation to claim a capability is active when only a foundation, draft, prototype, or test fixture exists.

---

## 17. Compatibility

Compatibility decisions must be explicit.

Developers should identify:

- the compatibility surface;
- supported versions or formats;
- migration expectations;
- fallback behavior;
- deprecation authority;
- evidence required before removing support.

Backward compatibility must not preserve invalid authority behavior. A legacy format that cannot express required identity, permissions, protected areas, or safe-stop semantics may need deterministic rejection rather than permissive interpretation.

---

## 18. Security and Permissions

Apply least privilege to all provider and repository operations.

Developers should:

- request only the permissions required by the bounded task;
- avoid storing secrets in source, logs, fixtures, evidence, or generated files;
- redact sensitive values without obscuring relevant failure evidence;
- distinguish read, propose, mutate, approve, merge, publish, and administer permissions;
- ensure a provider adapter cannot convert read authority into write authority;
- preserve protected branches and required validation gates;
- treat permission failure as a stop condition, not a prompt to bypass controls.

Human Governance authority is not equivalent to unrestricted provider credentials. Provider permissions and governance authorization must both be satisfied.

---

## 19. Observability and Evidence

Developer-facing observability should make bounded execution understandable.

Useful evidence includes:

- resolved task identity;
- reviewed-subject identity;
- affected artifacts;
- provider operation results;
- validation commands and outcomes;
- safe-stop reasons;
- protected-area confirmation;
- completion status;
- state-update authority, when applicable.

Logs should distinguish facts from inferences. A log that says "approved" must identify whether it means a provider review, a Human Governance decision, a validation result, or another lifecycle event.

---

## 20. Change Review

Before requesting review, verify:

- the change matches the authorized objective;
- only allowed artifacts changed;
- no protected area was modified;
- generated artifacts are authorized and synchronized;
- validation evidence is complete and scoped correctly;
- the reviewed-subject revision identity is stable;
- known limitations are reported;
- no Target state or capability activation is implied without authority.

Review is non-mutating unless a separate, explicit action authorizes mutation. A review verdict does not automatically merge, approve under Human Governance, update Target state, or activate later work.

---

## 21. Pull Requests and Equivalent Change Proposals

Where the provider supports pull requests or equivalent proposals:

- use a dedicated branch or immutable proposal subject;
- keep the change bounded;
- describe objective, scope, validation, and protected areas;
- identify generated files or external effects;
- avoid mixing unrelated repairs;
- preserve exact revision identity for review;
- do not equate mergeability with authorization or acceptance.

A provider-specific proposal is evidence and an execution surface. It is not universal AI-DOS state.

---

## 22. Contribution Workflow

A typical authorized development workflow is:

```text
Resolve authority
    ↓
Resolve exactly one bounded task
    ↓
Identify governing contracts
    ↓
Create isolated change surface
    ↓
Implement only authorized scope
    ↓
Run surface-appropriate validation
    ↓
Confirm protected areas
    ↓
Record exact revision identity
    ↓
Request non-mutating review
    ↓
Await the next separately authorized lifecycle action
```

At each transition, stop when identity, authority, scope, or evidence becomes ambiguous.

---

## 23. Anti-Patterns

Do not:

- let code become product truth by accident;
- copy Target planning into reusable AI-DOS components;
- hard-code one provider as the universal model;
- implement draft concepts without authorization;
- broaden a defect fix into a redesign;
- treat test success as governance acceptance;
- mutate state during review;
- approve or merge a different revision than the one reviewed;
- hide validation gaps behind broad completion claims;
- continue after a protected-area conflict;
- invent missing authority from repository history.

---

## 24. Developer Checklist

Before editing:

- authority chain read;
- current state read fresh;
- one bounded task resolved;
- allowed and forbidden scope recorded;
- owning contracts identified;
- stop conditions understood.

Before completion:

- authorized scope only;
- implementation traceable to authority;
- provider neutrality preserved;
- identity stable;
- tests and checks passed for the declared surface;
- validation limits stated;
- protected areas unchanged;
- blockers reported;
- no unauthorized state update or capability claim made.

---

## 25. Summary

AI-DOS development is contract-led, bounded, provider-neutral, identity-aware, and evidence-backed.

The central developer responsibility is not merely to produce working code. It is to produce an implementation that remains subordinate to the correct authority, changes only the authorized surface, validates the exact behavior claimed, preserves Product/Target separation, and stops safely whenever deterministic execution is no longer possible.

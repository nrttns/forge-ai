# AI-DOS Cookbook

This cookbook is a collection of practical, real-world recipes for using AI-DOS in governed AI-assisted work.

AI-DOS is an MD-first, provider-neutral operating system. A Target Project owns its mission, planning, operational state, permissions, protected areas, and evidence. AI-DOS consumes resolved Target Context and routes bounded work through an external Execution Provider. Human Governance remains the final authority.

This page is explanatory. It does not replace the applicable repository entry, Target Project contract, or normative AI-DOS contracts.

---

## 1. How to use this cookbook

Each recipe uses the same structure:

- **Use when** — the situation the recipe addresses.
- **Preconditions** — what must already be true.
- **Instruction** — an example Human Governance prompt.
- **Expected behavior** — what a compliant provider should do.
- **Safe-stop conditions** — when execution must stop instead of improvising.
- **Completion evidence** — what should be reported before Human Governance decides what happens next.

The examples intentionally separate:

```text
Instruction
    ≠
Execution
    ≠
Validation
    ≠
Review
    ≠
Approval
    ≠
Operational-state update
    ≠
Next-task authorization
```

Do not treat a commit, pull request, passing check, review verdict, or merge as an automatic Human Governance decision unless the applicable Target contract explicitly defines that transition.

---

## 2. Recipe: Create a new Target Project

### Use when

You are adding a new project that will consume AI-DOS without becoming part of AI-DOS product truth.

### Preconditions

- The repository already contains the AI-DOS product contracts.
- Human Governance has authorized creation of the Target Project surface.
- The Target name and truth root are known.
- The initial mission, operational entry, protected areas, and authority boundaries can be declared without invention.

### Instruction

```text
HUMAN GOVERNANCE

Create exactly one bounded Target Project onboarding work unit.

Target Project:
Atlas

Objective:
Create the minimum Target-owned entry contract required to identify Atlas, its truth root, operational entry, protected areas, and AI-DOS provider entry.

Allowed scope:
docs/Projects/Atlas/Mission/AGENTS.md only.

Forbidden scope:
- docs/AI-DOS/**
- implementation code
- repository-wide planning
- Forge AI Target Project files

State-update authority:
None.

Stop after creating and validating the one authorized file.
```

### Expected behavior

The provider should:

1. read the repository entry;
2. preserve the separation between AI-DOS product truth and Atlas Target truth;
3. create only the declared Target contract;
4. avoid inventing operational state, roadmap content, or implementation direction;
5. validate that the declared paths and authority boundaries are internally consistent;
6. report the exact changed artifact and stop.

### Safe-stop conditions

Stop when:

- the Target truth root is ambiguous;
- the operational entry cannot be named;
- protected areas are not declared;
- the requested file would duplicate AI-DOS product contracts;
- a second file is required but not authorized.

### Completion evidence

Report:

- Target identity;
- changed file;
- authority and boundary checks;
- unresolved onboarding gaps;
- confirmation that AI-DOS product files and other Target Projects were untouched.

---

## 3. Recipe: Run AI-DOS for one bounded task

### Use when

You want an external Execution Provider to perform one explicit task inside an existing Target repository.

### Preconditions

- The repository entry and Target contract are discoverable.
- The objective, exact scope, protected areas, validation, completion condition, and state-update authority are known.

### Instruction

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective:
Update the Target Project introduction so a new reader can understand its purpose and product boundary.

Allowed scope:
docs/Projects/Atlas/Product/Introduction.md only.

Forbidden scope:
- docs/AI-DOS/**
- Target Mission
- Target Planning
- Target Reports
- implementation code

Required validation:
- exactly one changed file;
- all relative links resolve;
- no AI-DOS product behavior is redefined;
- no Target operational state is changed.

Completion condition:
The document is complete, validation evidence is reported, and the provider stops.

State-update authority:
None.
```

### Expected behavior

The provider should resolve authority before editing, change only the named file, run surface-specific checks, distinguish completion from approval, and stop after reporting evidence.

### Safe-stop conditions

Stop when the file does not exist and creation was not authorized, the objective conflicts with higher authority, the requested content requires architecture redesign, or validation cannot be performed as declared.

---

## 4. Recipe: Human Governance workflow

### Use when

A human decision must control what work may occur and what lifecycle transition may follow.

### Pattern

```text
Human Governance intent
        ↓
Repository and Target authority resolution
        ↓
Exactly one bounded action
        ↓
Execution and surface-specific validation
        ↓
Evidence-backed report
        ↓
Human Governance decision
```

### Recommended instruction shape

```text
HUMAN GOVERNANCE

Objective:
<one observable result>

Allowed scope:
<exact files or surfaces>

Forbidden scope:
<protected or unrelated surfaces>

Required validation:
<checks that match the changed surface>

Completion condition:
<observable evidence that ends execution>

State-update authority:
<none, recommend only, or exact authorized mutation>
```

### Safe-stop conditions

A provider should safe-stop rather than infer missing objective, scope, protected areas, validation, completion, or state-update authority.

---

## 5. Recipe: Continue workflow

### Use when

The Target Project already has an authoritative operational entry and Human Governance wants the system to resolve the next eligible bounded action.

### Instruction

```text
HUMAN GOVERNANCE

Continue.
```

### Expected behavior

A compliant provider should:

1. read the repository and Target authorities fresh;
2. treat continuation as the awaited Human Governance signal when the Target contract permits it;
3. resolve the current operational entry rather than relying on memory or recent repository activity;
4. route Target-owned inputs through the AI-DOS task-planning contracts;
5. select or generate exactly one eligible bounded work unit only when the required inputs exist;
6. activate or execute work only through the owning contracts;
7. safe-stop when no unique eligible action can be resolved.

### Explicit selection variant

```text
HUMAN GOVERNANCE

Continue.

Next Step:
Create the Target onboarding guide.
```

The named next step may override Target priority ranking only when the Target contract permits it. It does not waive eligibility, dependencies, protected areas, ownership, validation, or bounded-execution rules.

### Safe-stop examples

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

```text
BLOCKER: Two equally authoritative eligible candidates remain and no deterministic tie-break exists.
```

```text
BLOCKER: The operational entry is missing or cannot resolve exactly one authorized next action.
```

---

## 6. Recipe: Review workflow

### Use when

A completed change needs an independent, read-only assessment before Human Governance decides whether to accept it.

### Instruction

```text
HUMAN GOVERNANCE

Review PR #312 only.

Review the exact pull request head.
Do not modify files, branches, pull-request state, Target state, or planning artifacts.

Evaluate:
- authorization and scope;
- changed-file identity;
- product/Target boundary;
- protected-area preservation;
- technical and documentation correctness;
- validation evidence;
- unresolved blockers.

Return findings or a clear approval-eligible verdict.
```

### Expected behavior

The reviewer should resolve the exact reviewed subject, inspect the current diff, verify that only authorized artifacts changed, distinguish evidence from claims, and avoid mutating the subject under review.

### Review result examples

```text
FINDING: The pull request changes a second file outside the authorized one-file scope.
```

```text
NO FINDINGS.
The reviewed subject matches the authorized scope and the reported validation evidence.
```

### Safe-stop conditions

Stop when the reviewed subject cannot be uniquely identified, the pull request head moved during review, required evidence is unavailable, or the reviewer would need to modify the subject to complete the review.

---

## 7. Recipe: Approval workflow

### Use when

Human Governance has received an approval-eligible review outcome and intends to accept the exact reviewed subject through the Target's defined acceptance route.

### Instruction

```text
HUMAN GOVERNANCE

Approve PR #312 at reviewed head <commit-sha>.
Record acceptance only.
Do not merge, generate, select, activate, or execute another task.
```

### Expected behavior

The provider should:

1. resolve the exact subject identity;
2. confirm that the subject remains approval-eligible;
3. re-resolve the reviewed revision when the applicable contract requires it;
4. apply only the authorized acceptance or operational-state transition;
5. avoid treating approval as merge authorization or next-task authorization;
6. report the exact mutation and stop.

### Safe-stop conditions

Stop when the subject identity is missing, ambiguous, stale, already accepted, invalidated, or conflicts with the Target's recorded pending approval subject.

---

## 8. Recipe: Create product documentation

### Use when

You are adding explanatory AI-DOS documentation without changing normative product behavior.

### Instruction

```text
HUMAN GOVERNANCE — AI-DOS Product Documentation

Create exactly one bounded documentation work unit.

Objective:
Create a public-facing guide explaining provider-neutral execution.

Allowed scope:
docs/AI-DOS/Product/ProviderNeutralExecution.md only.

Forbidden scope:
- normative AI-DOS contracts
- RFCs
- architecture
- Target Project files
- implementation code
- ProjectStatus, Roadmap, DevelopmentPhases, Mission, and Reports

Required validation:
- exactly one changed file;
- no normative behavior is introduced;
- all relative links resolve;
- examples remain Target-neutral;
- current implementation limits are stated accurately.

Stop after opening one Draft Pull Request.
```

### Expected behavior

The document should explain the product in accessible language, defer to normative contracts, avoid copying Target-specific state into reusable product truth, and clearly label examples as explanatory.

### Safe-stop conditions

Stop when the requested page requires architecture changes, normative contract edits, Target-specific planning content, or more than the one authorized file.

---

## 9. Recipe: Review product documentation

### Use when

A public-facing page needs review for clarity, correctness, and boundary discipline.

### Review checklist

Confirm that the page:

- explains rather than redefines AI-DOS;
- keeps AI-DOS product truth separate from Target truth;
- does not present Forge AI state as reusable behavior;
- distinguishes current capability from future direction;
- does not promote a current provider or implementation language into product architecture;
- uses Human Governance, Target Project, Execution Provider, evidence, approval, and safe-stop consistently;
- links only to existing repository paths;
- makes examples visibly non-normative.

### Review instruction

```text
HUMAN GOVERNANCE

Review the AI-DOS product documentation change in PR #313 only.
Return findings ordered by severity.
Do not edit the branch or pull request.
```

---

## 10. Recipe: Architecture review

### Use when

A proposed change claims to alter, clarify, or implement AI-DOS architecture.

### Instruction

```text
HUMAN GOVERNANCE

Review the proposed architecture change only.

Verify:
- the exact normative owner of every changed concept;
- compatibility with higher authority;
- product/Target separation;
- provider neutrality;
- implementation-subordination boundaries;
- migration and validation requirements;
- whether the change is architecture, explanation, implementation, or evidence.

Do not modify any artifact.
```

### Expected behavior

The review should reject architectural claims derived solely from source-code proximity, package metadata, current provider behavior, or a Target-specific implementation. It should identify the normative contract that owns each claimed behavior.

### Safe-stop conditions

Stop when authority cannot be resolved, the change combines architecture and Target planning, the proposed behavior has no normative owner, or the reviewed subject is not stable.

---

## 11. Recipe: Audit workflow

### Use when

You need a structured assessment across a declared set of documentation, governance, architecture, implementation, or evidence surfaces.

### Instruction

```text
HUMAN GOVERNANCE

Audit docs/AI-DOS/Product/** only.

Dimensions:
- structure and navigation;
- product/Target boundary;
- technical accuracy;
- lifecycle and version framing;
- missing content;
- terminology consistency;
- broken references.

Requirements:
- cite each finding with an exact file path;
- distinguish defects from recommendations;
- distinguish product documentation from normative contracts;
- do not modify repository files;
- do not convert recommendations into authorized work.
```

### Expected behavior

The audit should define its scope, evidence standard, limitations, severity model, and point-in-time subject. Recommendations remain proposals until Human Governance authorizes a separate bounded work unit.

### Safe-stop conditions

Stop or narrow the audit when the requested scope cannot be accessed, the evidence basis is incomplete, or the audit would require claiming facts about unexamined files.

---

## 12. Recipe: Fix a bug

### Use when

A bounded implementation defect has a reproducible symptom and an identifiable owning contract.

### Instruction

```text
HUMAN GOVERNANCE

Fix exactly one bounded bug.

Symptom:
The CLI returns success when the declared Target entry file is missing.

Authorized scope:
- src/main.ts
- the directly corresponding test file

Forbidden scope:
- AI-DOS architecture
- Target planning
- unrelated refactoring
- packaging changes

Required validation:
- reproduce the failing case before the fix;
- add or update a focused test;
- run the relevant implementation checks;
- state that those checks validate only the exercised implementation surface.

State-update authority:
None.
```

### Expected behavior

The provider should identify the governing contract, make the smallest authorized correction, preserve unrelated behavior, and report implementation-specific validation without claiming product-wide correctness.

### Safe-stop conditions

Stop when the symptom cannot be reproduced, the fix requires an architecture decision, the owning contract is ambiguous, or the required change exceeds the authorized files.

---

## 13. Recipe: Refactor safely

### Use when

Behavior should remain unchanged while a bounded implementation or documentation surface is reorganized.

### Instruction

```text
HUMAN GOVERNANCE

Perform exactly one bounded refactoring work unit.

Objective:
Extract duplicated path-normalization logic without changing externally observable behavior.

Allowed scope:
<exact implementation files>

Behavioral boundary:
No command syntax, output shape, error category, authority rule, or repository path contract may change.

Required validation:
- baseline tests pass before the change;
- the same tests pass after the change;
- focused tests cover the extracted behavior;
- the diff contains no unrelated cleanup.
```

### Expected behavior

A refactor should preserve authority, behavior, interfaces, and evidence semantics. A discovered behavior defect is not automatically part of the refactoring scope.

### Safe-stop conditions

Stop when behavior cannot be preserved, the refactor exposes a contract conflict, or the minimal change requires files outside the authorized scope.

---

## 14. Recipe: Add a new Execution Provider

### Use when

You want another external tool or agent host to consume AI-DOS without changing AI-DOS into a provider-specific product.

### Preconditions

The provider can read repository contracts, preserve declared authority, respect exact scope, run relevant validation, report evidence, and safe-stop when required context is missing.

### Instruction

```text
HUMAN GOVERNANCE

Create exactly one bounded provider-adapter foundation.

Provider:
<provider name>

Objective:
Add a discovery adapter that routes the provider to the canonical AI-DOS and Target contracts without duplicating their semantics.

Allowed scope:
<exact adapter file> only.

Forbidden scope:
- AI-DOS normative contract changes
- provider-specific product truth
- Target planning
- automatic capability activation

Required validation:
- the adapter points to canonical contracts;
- it contains no copied governance semantics;
- it contains no current Target state;
- it does not redefine workflow behavior.
```

### Expected behavior

The adapter should be thin, provider-specific only where discovery requires it, and subordinate to canonical repository contracts.

### Safe-stop conditions

Stop when the provider requires semantics that conflict with AI-DOS authority, cannot preserve subject identity, cannot enforce bounded scope, or cannot surface validation and blocker evidence.

---

## 15. Recipe: Onboard an existing repository

### Use when

A repository already has code and documentation but lacks an explicit AI-DOS-compatible authority boundary.

### Process

1. inventory existing repository entry points and project authorities;
2. identify the Target Project or Targets;
3. separate reusable AI-DOS product truth from Target-owned truth;
4. declare the repository reading order;
5. declare each Target's truth root and operational entry;
6. identify protected areas and mutation authority;
7. define the minimum validation and evidence surfaces;
8. test one small bounded task;
9. review the result before expanding autonomy.

### Instruction

```text
HUMAN GOVERNANCE

Research only.
Assess this repository for AI-DOS onboarding readiness.

Do not modify files.

Return:
- current authority entry points;
- candidate Target Project boundaries;
- product/Target coupling risks;
- missing declarations;
- protected areas;
- one minimum onboarding work unit;
- blockers that prevent deterministic onboarding.
```

### Safe-stop conditions

Do not create contracts until Human Governance has resolved ambiguous ownership, overlapping Target boundaries, missing mission authority, or conflicting operational entry points.

---

## 16. Recipe: Safe-stop examples

### Missing authority

```text
BLOCKER: The requested file is governed by two conflicting authority sources and no precedence rule resolves the conflict.
```

### Scope expansion required

```text
BLOCKER: Completing the requested one-file change requires updating a second normative contract that is outside the authorized scope.
```

### Missing validation

```text
BLOCKER: The task requires link validation, but the referenced private documentation is inaccessible in the current environment.
```

### Reviewed-subject drift

```text
BLOCKER: The pull-request head changed after the reviewed revision was resolved. The prior review outcome no longer applies to the current head.
```

### No eligible continuation candidate

```text
NO CAPABILITY-GROUNDED WORK UNIT FOUND
```

### Target/product boundary conflict

```text
BLOCKER: The requested AI-DOS product page would embed live Target Project status and therefore violate the product/Target truth boundary.
```

A safe-stop should name the unresolved condition, the evidence that exposed it, the point where execution stopped, and the minimum Human Governance decision needed to proceed.

---

## 17. Recipe: Multi-provider workflow

### Use when

Different providers are used for execution, review, audit, or validation while preserving one authority model.

### Example division of responsibility

```text
Provider A: bounded implementation
        ↓
Provider B: independent read-only review
        ↓
Provider C: focused documentation or architecture audit
        ↓
Human Governance: acceptance or correction decision
```

### Working rules

- Every provider reads the same repository and Target authorities.
- Each provider resolves the exact subject it is acting on.
- Providers do not inherit unstated authority from one another.
- Review and audit providers remain non-mutating unless separately authorized.
- A provider's confidence does not replace evidence.
- Conflicting provider conclusions are surfaced to Human Governance rather than silently merged.
- The latest reviewed-subject identity must be explicit.

### Instruction sequence

```text
HUMAN GOVERNANCE

Provider A: Execute the bounded work unit and stop after opening a Draft Pull Request.
```

```text
HUMAN GOVERNANCE

Provider B: Review the exact Draft Pull Request head only. Do not modify it.
```

```text
HUMAN GOVERNANCE

Provider C: Audit the product/Target boundary of the exact reviewed head only. Do not modify it.
```

```text
HUMAN GOVERNANCE

Approve the exact reviewed subject only after all required findings are resolved.
```

---

## 18. Recipe: Incremental documentation development

### Use when

A documentation set is too large for one safe bounded change.

### Pattern

```text
One document
    ↓
One branch
    ↓
One commit
    ↓
One Draft Pull Request
    ↓
Independent review
    ↓
Human Governance decision
    ↓
Next document
```

### Example series

1. Introduction
2. Installation Guide
3. Quick Start
4. FAQ
5. Best Practices
6. Troubleshooting
7. Cookbook
8. Design Principles
9. Tutorials
10. Migration Guide
11. Glossary

Each document is independently reviewable. Completion of one document does not authorize the next.

### Instruction

```text
HUMAN GOVERNANCE — AI-DOS Product Documentation Program

Create the Cookbook only.

Working rules:
- one dedicated branch;
- exactly one changed file;
- exactly one commit;
- exactly one Draft Pull Request;
- stop after opening the pull request.

Forbidden scope:
ProjectStatus, Roadmap, DevelopmentPhases, Mission, AGENTS, Reports, RFCs, architecture, Target planning, and implementation code.
```

### Expected behavior

The provider should create only the named page, avoid opportunistic navigation or index updates, report the branch, file, commit, and Draft Pull Request, then wait for Human Governance approval.

---

## 19. End-to-end example: Documentation change

### Step 1 — Authorize

```text
HUMAN GOVERNANCE

Create exactly one bounded AI-DOS product documentation change.

Objective:
Create a provider-neutral troubleshooting guide.

Allowed scope:
docs/AI-DOS/Product/Troubleshooting.md only.

Required validation:
- one changed file;
- no normative behavior introduced;
- no Target-specific state embedded;
- all links resolve.

Stop after opening one Draft Pull Request.
```

### Step 2 — Execute

The provider reads the required authorities, creates the one file on a dedicated branch, validates the changed surface, makes one commit, opens one Draft Pull Request, reports identifiers, and stops.

### Step 3 — Review

```text
HUMAN GOVERNANCE

Review the exact Draft Pull Request head only.
Do not modify it.
```

The reviewer verifies scope, clarity, product/Target separation, terminology, links, and validation claims.

### Step 4 — Correct when required

```text
HUMAN GOVERNANCE

Address only the review finding concerning Target-specific wording.
Do not expand scope.
```

A correction is separately bounded and tied to the same reviewed subject.

### Step 5 — Approve

```text
HUMAN GOVERNANCE

Approve the exact reviewed head.
Record acceptance only.
Do not authorize the next document.
```

### Step 6 — Continue only after a new decision

The next documentation page begins only when Human Governance explicitly authorizes or continues the documentation program under its declared working rules.

---

## 20. End-to-end example: Bug fix with independent review

### Step 1 — Research

```text
HUMAN GOVERNANCE

Research the reported CLI failure only.
Do not modify files.
Return reproduction evidence, the owning contract, the minimum fix scope, and relevant validation.
```

### Step 2 — Authorize the fix

```text
HUMAN GOVERNANCE

Execute the minimum bounded fix resolved by the research.
Modify only the named implementation and test files.
Do not change architecture or Target planning.
```

### Step 3 — Validate

Run only checks relevant to the changed implementation surface. Report exactly what they exercise and what they do not prove.

### Step 4 — Review

Use a separate provider or a fresh review session to inspect the exact head without mutation.

### Step 5 — Human decision

Human Governance decides whether to request correction, accept the result, merge through repository policy, authorize a state update, or take no action.

---

## 21. Common mistakes

### Treating AI-DOS as a tool-specific prompt pack

AI-DOS is provider-neutral. Provider adapters and system prompts are subordinate integration surfaces, not product identity.

### Treating Forge AI as AI-DOS product truth

Forge AI is a Target Project. Its mission, planning, operational state, evidence, and accepted work remain Target-owned.

### Using implementation files as architectural authority

Current executable surfaces are bounded and replaceable. They do not override Markdown contracts or define future implementation direction.

### Allowing “Continue” to mean “do anything useful”

Continuation must resolve through current Target authority and deterministic planning rules. Nearby or convenient work is not automatically eligible.

### Collapsing review, approval, merge, and state update

These are distinct lifecycle events with different owners and evidence requirements.

### Expanding a small task because another change would be helpful

Helpful adjacent work remains unauthorized until Human Governance explicitly includes it in a bounded work unit.

### Claiming broad correctness from narrow checks

A link checker validates links. A unit test validates exercised implementation behavior. Neither independently proves architecture, governance, or product-wide correctness.

---

## 22. Compact operating checklist

Before execution:

- resolve repository and Target authority;
- identify exactly one objective;
- name exact allowed scope;
- preserve protected areas;
- declare validation and completion evidence;
- resolve state-update authority;
- confirm the task does not depend on invented context.

During execution:

- remain inside scope;
- avoid unrelated cleanup;
- preserve product/Target separation;
- bind work and evidence to the exact subject;
- safe-stop on ambiguity or authority conflict.

After execution:

- report exact changed artifacts;
- report each validation and its limits;
- confirm protected areas remained unchanged;
- name blockers and residual risks;
- distinguish completion from approval;
- stop before the next task unless separately authorized.

---

## 23. Related product documentation

- [AI-DOS Product Documentation](README.md)
- [Quick Start](GettingStarted/QuickStart.md)
- [Installation](GettingStarted/Installation.md)
- [First Target](GettingStarted/FirstTarget.md)
- [Human Governance](Concepts/HumanGovernance.md)
- [Authority Model](Concepts/AuthorityModel.md)
- [Core Concepts](Concepts/CoreConcepts.md)
- [Execution Model](ExecutionModel.md)
- [Context Resolution](ContextResolution.md)
- [Provider Model](ProviderModel.md)
- [Security](Security.md)
- [Implementation Surfaces](Implementation.md)
- [Tutorials](Tutorials/README.md)
- [Reference](Reference/README.md)

For execution authority, begin with the repository entry, the applicable Target Project contract, and `docs/AI-DOS/AGENTS.md`. Product documentation explains those surfaces but does not replace them.
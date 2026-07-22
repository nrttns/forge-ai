# AI-DOS Design Principles

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

This document explains the product design principles that shape AI-DOS. It is publication-oriented guidance for users, Target owners, provider implementers, reviewers, and contributors. It does not replace the normative contracts under `docs/AI-DOS/`, and it does not define Target Project mission, planning, state, or authorization.

---

## 1. Why design principles matter

AI-assisted systems often fail in predictable ways:

- authority is assumed rather than resolved;
- broad goals become unbounded execution;
- implementation details silently become architecture;
- review, approval, acceptance, and continuation collapse into one event;
- providers invent missing context;
- evidence is reported without naming what was actually validated;
- one project’s state leaks into reusable product behavior;
- automation continues when stopping would be safer.

AI-DOS is designed to prevent these failure modes structurally rather than relying on model goodwill.

The principles below are not slogans. Each one exists to preserve a specific system property: authority integrity, bounded execution, provider neutrality, Target isolation, inspectability, reversibility, or safe failure.

---

## 2. Human Governance remains final authority

AI-DOS supports delegation, automation, planning, execution, validation, review, and evidence generation. It does not replace Human Governance.

Human Governance remains the authority that can:

- declare intent;
- approve or reject work;
- authorize bounded execution;
- accept evidence;
- authorize state changes;
- resolve strategic ambiguity;
- change protected contracts;
- stop or redirect the system.

A provider may recommend. A workflow may resolve. A validator may report. A reviewer may produce a finding. None of these independently become Human Governance.

### Design consequence

AI-DOS separates lifecycle events that are commonly conflated:

```text
Execution complete
        ≠
Validation passed
        ≠
Review approved
        ≠
Human Governance accepted
        ≠
State updated
        ≠
Next task authorized
```

This separation preserves explicit human control without requiring humans to micromanage every low-level step.

---

## 3. Authority is resolved before work begins

AI-DOS does not treat repository access as permission to act.

Before execution, the system should resolve:

- which Target Project is in scope;
- which artifacts own mission and operational truth;
- what the current instruction authorizes;
- which files or surfaces may change;
- which areas are protected;
- what validation is required;
- what evidence is expected;
- whether state mutation is authorized.

Authority must come from declared sources, not from proximity, habit, file names, recent commits, or provider preference.

### Design consequence

A provider that cannot resolve authority must stop rather than infer permission.

This protects the system from a common autonomous-agent error: turning “I can access this” into “I am allowed to change this.”

---

## 4. Product Truth and Target Truth are separate

AI-DOS is reusable product infrastructure.

A Target Project is a specific project that consumes AI-DOS.

These two truth domains must remain distinct:

```text
AI-DOS Product Truth
- reusable contracts
- provider behavior
- orchestration rules
- validation and review models
- templates and standards

Target Project Truth
- mission
- roadmap
- operational state
- priorities
- protected areas
- project-specific evidence
- project-specific permissions
```

Forge AI is one Target Project that develops and validates AI-DOS. Forge AI planning is not reusable AI-DOS product truth.

### Design consequence

AI-DOS may consume resolved Target Context, but it must not hard-code one Target’s planning, current state, work-unit identity, or repository-specific path assumptions into reusable product behavior.

This separation is what makes AI-DOS portable.

---

## 5. Bounded work is the unit of execution

AI-DOS is designed around exactly bounded work rather than vague autonomy.

A bounded work unit has:

- one clear objective;
- explicit allowed scope;
- explicit forbidden or protected scope;
- named validation;
- a completion condition;
- known state-update authority;
- a defined stopping point.

A bounded task can be large or small. What matters is that its limits are visible and testable.

### Design consequence

The system should not treat adjacent cleanup, follow-up improvements, or obvious next steps as implicitly authorized.

A successful task ends where its completion condition ends.

---

## 6. Minimality is a safety property

Minimality is not merely a preference for small diffs.

Minimality reduces:

- review burden;
- hidden coupling;
- accidental authority expansion;
- rollback complexity;
- ambiguity about cause and effect;
- the risk that unrelated changes are accepted together.

A minimal work unit changes only what is required to achieve the stated objective.

### Design consequence

“While we are here” changes are normally excluded.

When a task authorizes one document, adding a second document because it would be convenient is a scope violation unless separately authorized.

---

## 7. MD-first means contracts before implementation

AI-DOS is MD-first.

Its governing Markdown artifacts are normative system contracts, not secondary explanation around a codebase.

MD-first does not mean every Markdown file is currently executable. It means architecture, authority, workflow semantics, boundaries, and expected behavior are defined independently of a specific programming language.

### Design consequence

TypeScript, JavaScript, Node.js, npm, CLI, tests, packaging, and CI may implement bounded surfaces. They do not automatically define:

- the AI-DOS product identity;
- the AI-DOS architecture;
- the kernel;
- all normative behavior;
- future implementation direction;
- product-wide correctness.

Implementation remains subordinate to the contracts that govern it.

---

## 8. Provider neutrality is structural

AI-DOS is not tied to one model, vendor, coding assistant, agent host, or automation tool.

A compatible provider should be able to:

- read the declared contracts;
- consume resolved Target Context;
- follow the required route;
- execute only authorized scope;
- run relevant validation;
- produce evidence;
- safe-stop when required.

Provider-specific adapters may help a tool discover the system, but they must not become independent sources of product truth.

### Design consequence

Changing providers should not require redefining AI-DOS governance or Target authority.

Different providers may have different capabilities, but they operate under the same resolved contracts and boundaries.

---

## 9. Context is supplied, not invented

AI-DOS distinguishes between available information and authorized context.

A repository may contain many files, branches, issues, reports, comments, and historical artifacts. Only declared authorities and task-relevant resources form the operative context.

### Design consequence

A provider must not derive the active task from:

- the most recently modified file;
- the easiest available change;
- an open pull request;
- implementation proximity;
- a prior session’s memory;
- unstated assumptions about conventional project structure.

When required context is missing, the correct result is a precise blocker.

---

## 10. Safe-stop is successful behavior

AI-DOS treats safe-stop as a first-class outcome.

Safe-stop is required when:

- authority cannot be resolved;
- scope is ambiguous;
- protected areas conflict with the task;
- no unique eligible work unit exists;
- required evidence is missing;
- reviewed-subject identity drifts;
- validation cannot support the requested claim;
- a provider cannot perform the authorized operation safely.

### Design consequence

Stopping is not failure when continuation would require invention.

A useful safe-stop names:

1. the unresolved condition;
2. the authority or evidence required;
3. what was not changed;
4. the smallest decision needed from Human Governance.

---

## 11. Validation claims must match validated surfaces

AI-DOS rejects vague claims such as “all checks passed” when the checks cover only one implementation surface.

Validation should name:

- the command or method used;
- the artifact or behavior exercised;
- the result;
- the limitations;
- any skipped or unavailable checks.

### Design consequence

Examples:

- a Markdown link check validates links in the examined documentation;
- a TypeScript typecheck validates the TypeScript surface it compiles;
- unit tests validate the behavior those tests exercise;
- a review validates the reviewed subject at the reviewed revision;
- none of these alone proves product-wide correctness.

The claim must never be broader than the evidence.

---

## 12. Evidence is part of execution

In AI-DOS, work is not complete merely because a file changed.

Completion evidence should make the result independently inspectable.

Useful evidence includes:

- exact changed artifacts;
- exact revision identity;
- validation performed;
- validation result;
- protected-area confirmation;
- blockers and limitations;
- state-update status;
- completion condition status.

### Design consequence

Evidence is not an optional summary added after execution. It is part of the work contract.

This supports review, auditability, provider handoff, and reliable Human Governance decisions.

---

## 13. Reviewed-subject identity must remain stable

A review is meaningful only when it identifies exactly what was reviewed.

The reviewed subject includes both:

- a locator, such as a pull request, branch, artifact set, or repository-relative path;
- a revision identity, such as an exact commit or immutable content revision.

### Design consequence

If the subject changes after review, the prior review cannot silently apply to the new revision.

Identity drift requires re-resolution and, when material, re-review.

This prevents approval of content that was never actually examined.

---

## 14. Execution, review, approval, and state mutation are separate responsibilities

AI-DOS separates responsibilities to prevent hidden authority escalation.

An executor changes the authorized subject.

A validator tests declared surfaces.

A reviewer evaluates the reviewed subject and records findings.

Human Governance decides whether to approve or accept.

A state updater applies only the exact authorized state transition.

### Design consequence

No role should silently absorb the authority of the next role.

A successful review does not automatically merge work, update project state, activate the next capability, or begin another task.

---

## 15. Protected areas are explicit system boundaries

Protected areas are not suggestions.

They identify surfaces that require separate authority because changes could affect mission, governance, planning, architecture, security, historical evidence, or operational state.

### Design consequence

A protected-area conflict must stop the task unless Human Governance explicitly changes the authorization.

The provider should not weaken, reinterpret, or bypass a protection because the requested change seems harmless.

---

## 16. Reversibility is preferred

AI-DOS favors work that is easy to inspect and undo.

Reversibility improves safety because it lowers the cost of correction and encourages smaller, clearer decisions.

### Design consequence

Prefer:

- dedicated branches;
- small commits;
- narrow pull requests;
- explicit file scope;
- isolated documentation changes;
- deterministic validation;
- clear before-and-after evidence.

Avoid combining unrelated lifecycle, architecture, documentation, and implementation changes into one work unit.

---

## 17. Determinism is used where authority depends on it

AI-DOS does not require every creative activity to be deterministic.

It does require deterministic resolution where ambiguity could change authority, scope, identity, or lifecycle state.

Examples include:

- selecting among declared candidates;
- resolving authority precedence;
- identifying the reviewed revision;
- determining whether a protected area was touched;
- deciding whether required evidence is complete;
- applying an authorized state transition.

### Design consequence

When deterministic resolution produces no unique answer, the system safe-stops rather than using model preference as a tie-break.

---

## 18. Explicit lifecycle gates prevent accidental autonomy

AI-DOS uses lifecycle gates to preserve deliberate progression.

Typical gates include:

- task authorization;
- execution completion;
- validation completion;
- review completion;
- Human Governance approval;
- acceptance recording;
- capability activation;
- release or promotion.

### Design consequence

Passing one gate does not automatically pass the next.

This makes autonomy composable: lower-level actions can be automated while higher-impact transitions remain explicitly governed.

---

## 19. Target isolation prevents cross-project contamination

A provider may operate across multiple Target Projects, but each Target owns its own context and authority.

### Design consequence

The system must not carry one Target’s:

- mission;
- state;
- protected areas;
- approval;
- evidence;
- candidate priority;
- repository assumptions;

into another Target without explicit authority.

Provider memory is not Target authority.

---

## 20. Security begins with authority and containment

AI-DOS security is not limited to credentials or code vulnerabilities.

Its first security controls are:

- correct authority resolution;
- bounded scope;
- protected-area enforcement;
- Target isolation;
- provider containment;
- evidence integrity;
- reviewed-subject identity;
- safe-stop behavior.

### Design consequence

A technically correct change can still be unsafe when it is unauthorized, applied to the wrong Target, based on stale identity, or supported by misleading evidence.

Security and governance are therefore connected but not identical.

---

## 21. Explanatory documentation does not become normative by convenience

Product documentation helps people understand AI-DOS.

Normative contracts define required behavior.

### Design consequence

Examples, tutorials, cookbook recipes, diagrams, and summaries must clearly preserve the authority of the underlying contracts.

A simplified example should not silently create:

- a universal filename requirement;
- a new workflow;
- a new permission;
- a new architecture layer;
- a new lifecycle transition;
- a Target-specific dependency.

When explanatory text and a normative contract differ, the normative contract governs.

---

## 22. Current capability and future ambition must be distinguished

AI-DOS has an MD-first direction that may include increasingly executable contracts and future MD-to-executable mechanisms.

Future ambition must not be presented as current capability.

### Design consequence

Documentation should distinguish:

- what is normative now;
- what is implemented now;
- what is validated now;
- what is planned;
- what is experimental;
- what remains an architectural ambition.

This protects user trust and prevents roadmap language from becoming accidental product claims.

---

## 23. Multi-provider work requires stable handoffs

AI-DOS can support different providers for execution, review, audit, or validation.

Multi-provider workflows are safe only when handoffs contain stable identity and evidence.

### Design consequence

A handoff should include:

- the exact subject;
- the exact revision;
- the objective;
- the authorized scope;
- the validation already performed;
- unresolved findings;
- protected areas;
- the decision requested from the receiving provider or Human Governance.

A provider should not reconstruct missing authority from another provider’s prose summary.

---

## 24. Incremental development is preferred over speculative completeness

AI-DOS favors a sequence of bounded, reviewable improvements over one large speculative rewrite.

### Design consequence

For documentation, this may mean:

1. create one complete document;
2. review it independently;
3. correct findings;
4. obtain Human Governance approval;
5. merge it;
6. begin the next document separately.

This pattern preserves isolation and makes each document independently auditable.

---

## 25. The system should explain why it stopped

A safe system must be understandable when it refuses to proceed.

### Design consequence

AI-DOS blockers should be precise rather than generic.

Good blocker:

```text
Safe-stop: the instruction authorizes a documentation change but does not identify the exact Product document. No file was changed. Human Governance must name one document or authorize deterministic selection from a declared list.
```

Poor blocker:

```text
I cannot continue.
```

The first response preserves context and enables the smallest next decision.

---

## 26. Design principles in practice

A well-designed AI-DOS work cycle looks like this:

```text
Human Governance supplies intent
        ↓
Target authority resolves context
        ↓
AI-DOS resolves the applicable route
        ↓
One bounded subject is selected or supplied
        ↓
Execution changes only authorized scope
        ↓
Validation names the exercised surface
        ↓
Evidence binds results to exact identity
        ↓
Review evaluates that exact subject
        ↓
Human Governance makes the next decision
        ↓
The system stops unless another action is authorized
```

Every principle in this document supports one or more steps in this cycle.

---

## 27. Anti-patterns

The following patterns conflict with AI-DOS design principles.

### 27.1 Repository activity as authority

```text
There is an open PR, so it must be the active task.
```

Why it is wrong: repository state is not automatically Target operational truth.

### 27.2 Passing tests as approval

```text
The checks passed, so the work is accepted.
```

Why it is wrong: validation and Human Governance acceptance are separate lifecycle events.

### 27.3 Provider preference as architecture

```text
This provider works best with TypeScript, so AI-DOS should be implemented in TypeScript.
```

Why it is wrong: provider capability does not own product architecture.

### 27.4 Broad continuation

```text
The requested change is complete, so continue with the next obvious improvement.
```

Why it is wrong: follow-up work requires separate authorization or deterministic selection under the applicable contracts.

### 27.5 Cross-Target memory

```text
The last Target used this roadmap structure, so use it here too.
```

Why it is wrong: each Target owns its own resources and structure.

### 27.6 Review without revision identity

```text
I reviewed the branch and approve it.
```

Why it is wrong: the branch can move; approval must bind to the exact reviewed revision.

### 27.7 Documentation that creates behavior

```text
A tutorial uses this filename, therefore every Target must use it.
```

Why it is wrong: explanatory examples do not become universal normative requirements.

---

## 28. A design review checklist

Use this checklist when evaluating a new AI-DOS product document, workflow, provider integration, or implementation surface.

### Authority

- Is Human Governance authority preserved?
- Is the owning normative contract identifiable?
- Does the proposal invent permission?

### Product and Target boundary

- Is reusable Product Truth separate from Target-specific truth?
- Does the proposal hard-code one Target’s planning or state?
- Can another Target consume the product behavior without inheriting Forge AI assumptions?

### Scope

- Is the objective singular and observable?
- Are allowed and forbidden surfaces explicit?
- Is unrelated cleanup excluded?

### Provider neutrality

- Does the design depend on one provider’s internal behavior?
- Could another compatible provider follow the same contracts?
- Are adapters subordinate to canonical product truth?

### Validation and evidence

- Does each validation claim name the exercised surface?
- Is evidence bound to an exact subject and revision?
- Are limitations visible?

### Lifecycle

- Are execution, validation, review, approval, acceptance, state update, and continuation separate?
- Does any successful step trigger an unauthorized next step?

### Safety

- Are protected areas preserved?
- Are safe-stop conditions explicit?
- Does ambiguity produce a blocker rather than provider invention?

### Implementation

- Is implementation subordinate to MD-first contracts?
- Are current capabilities distinguished from future ambition?
- Is the change reversible and minimal?

---

## 29. Compact principle set

The AI-DOS design principles can be summarized as follows:

1. Human Governance remains final authority.
2. Resolve authority before execution.
3. Keep Product Truth separate from Target Truth.
4. Execute exactly bounded work.
5. Treat minimality as a safety property.
6. Define contracts before implementation.
7. Remain provider-neutral.
8. Consume declared context; do not invent it.
9. Treat safe-stop as correct behavior.
10. Match validation claims to validated surfaces.
11. Make evidence part of execution.
12. Bind review to exact subject identity.
13. Separate lifecycle roles and gates.
14. Preserve protected areas.
15. Prefer reversible changes.
16. Use determinism where authority depends on it.
17. Isolate Target Projects.
18. Treat governance and containment as security foundations.
19. Keep explanatory documentation subordinate to normative contracts.
20. Distinguish current capability from future ambition.

---

## 30. Related Product documentation

For practical application, continue with:

- `Cookbook.md` for real-world recipes;
- `BestPractices.md` for recommended operating habits;
- `Architecture.md` for the product-level architecture map;
- `ExecutionModel.md` for the end-to-end work cycle;
- `ContextResolution.md` for Target Context resolution;
- `ProviderModel.md` for provider-neutral integration;
- `Security.md` for authority, containment, and evidence-integrity concerns;
- `Troubleshooting.md` for blocker diagnosis and safe recovery.

For authoritative behavior, consult the applicable normative contracts under `docs/AI-DOS/` and the applicable Target-owned authorities.

---

## 31. Final perspective

AI-DOS is designed to make AI-assisted work more governable, not merely more automatic.

Its central design choice is to place authority, scope, identity, validation, evidence, and lifecycle boundaries around execution. This allows automation to become more capable without becoming less accountable.

The result is a system that aims to be:

- reusable without becoming context-free;
- autonomous without becoming self-authorizing;
- provider-neutral without becoming behaviorally vague;
- MD-first without overstating current executability;
- evidence-driven without confusing evidence with approval;
- safe by stopping when continuation would require invention.

That balance is the core product design of AI-DOS.

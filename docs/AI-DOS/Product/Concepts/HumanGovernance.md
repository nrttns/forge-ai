# Human Governance

Human Governance is the final decision authority in AI-DOS.

AI-DOS can resolve context, route work, enforce declared boundaries, coordinate execution, validate outcomes, and return evidence. Execution providers can perform authorized work. Neither AI-DOS nor an execution provider may convert technical capability, confidence, convenience, repository activity, or successful validation into permission.

This page explains the public Human Governance model. It is explanatory only. Normative authority remains in the applicable AI-DOS and Target Project contracts.

## Why Human Governance Exists

AI-assisted systems can act quickly, but speed and capability do not establish legitimacy.

A provider may be able to modify a repository, open a pull request, change project state, activate a capability, or publish a release. That ability answers only what the provider can technically do. Human Governance determines whether the action is authorized, whether its consequences are acceptable, and whether the resulting evidence is sufficient for the next lifecycle transition.

Human Governance prevents AI-DOS from treating any of the following as automatic authority:

- model confidence;
- access to tools or credentials;
- implementation convenience;
- validation success;
- review approval;
- merge state;
- prior conversation memory;
- nearby repository activity;
- an inferred strategic priority.

## The Authority Relationship

```text
Human Governance
        │
        │ supplies intent, authorization, approval, and direction
        ▼
      AI-DOS
        │
        │ resolves contracts, context, boundaries, and procedures
        ▼
Execution Provider
        │
        │ performs only the authorized bounded work
        ▼
Validation and Evidence
        │
        │ support, but do not replace, a governance decision
        ▼
Human Governance
```

The relationship is intentionally asymmetric:

- Human Governance may authorize, reject, redirect, approve, defer, or stop work.
- AI-DOS structures and constrains how authorized work is interpreted and executed.
- Execution providers perform work and return evidence.
- Evidence informs Human Governance but does not make the decision by itself.

## What Human Governance Owns

Human Governance owns decisions that the product and providers must not invent.

Depending on the applicable Target Project and lifecycle state, these decisions may include:

- authorizing a bounded work unit;
- approving or rejecting a reviewed result;
- redirecting an objective;
- selecting an explicit next step;
- permitting a protected-area change;
- activating a protected capability;
- accepting Target-owned evidence;
- authorizing a project-state transition;
- authorizing certification, promotion, release, or distribution;
- resolving genuine authority ambiguity that contracts cannot determine safely.

Human Governance does not need to manually perform every operational step. It may delegate bounded execution while retaining decision authority.

## Intent, Authorization, and Approval

These terms are related but not interchangeable.

### Intent

Intent expresses the action or outcome the human is requesting.

Examples include asking to review a subject, continue a project, prepare documentation, correct a defect, or release an accepted artifact.

Intent must be interpreted through the applicable contracts and current Target Context. A broad intention does not automatically authorize every technically related action.

### Authorization

Authorization permits a specific action within a defined boundary.

A sufficiently bounded authorization identifies the objective, allowed scope, forbidden scope, protected boundaries, required validation, completion condition, evidence expectations, and stop conditions.

Authorization may be explicit in the current instruction or uniquely derivable through an applicable Target-owned transition policy. When neither route produces one valid action, AI-DOS must safe-stop rather than guess.

### Approval

Approval is a Human Governance decision about a completed or reviewed subject.

Approval does not retroactively authorize unrelated work, broaden the reviewed scope, approve a different revision, merge a pull request automatically, activate another capability, or select the next task unless the applicable contracts explicitly define that exact transition.

The identity of the approval subject must remain clear. An approval must not drift from the artifact, revision, evidence, or lifecycle gate that was actually reviewed.

## Human Governance and Target Projects

Each Target Project owns its own mission, planning, operational state, priorities, resources, protected areas, evidence, and project-specific authority model.

Human Governance operates through that Target-owned truth. AI-DOS consumes the resolved Target Context without moving Target-specific state into reusable product truth.

This means Human Governance decisions must be interpreted within the correct Target boundary:

```text
Human Governance decision
        ↓
Applicable Target Contract
        ↓
Current Target-owned authority and state
        ↓
Resolved Target Context
        ↓
AI-DOS execution route
```

A decision for one Target Project does not automatically authorize work in another Target Project.

## Human Governance and AI-DOS

AI-DOS supports Human Governance by making decision boundaries explicit and evidence-backed.

AI-DOS may:

- identify the applicable authorities;
- resolve the Target Project and its operational context;
- distinguish product truth from Target truth;
- determine whether an instruction is sufficiently bounded;
- route work through the applicable command, workflow, template, engine, or provider;
- enforce protected areas and mutation gates;
- validate declared surfaces;
- preserve evidence provenance;
- report blockers and lifecycle status;
- recommend one bounded next action.

AI-DOS must not:

- invent Human Governance approval;
- treat model judgment as permission;
- silently expand an objective;
- select an arbitrary action when authority is non-unique;
- rewrite Target-owned priorities as product behavior;
- collapse execution, validation, review, approval, certification, promotion, and release into one event;
- mutate protected state without exact authority.

## Human Governance and Execution Providers

Execution providers are replaceable operational actors. They may read authorized context, call tools, modify approved resources, run validation, and return evidence.

Provider capability does not create governance authority.

For example, a provider with GitHub write access may be technically capable of creating a branch, committing files, opening or merging a pull request, changing settings, or publishing a release. Each action still requires the applicable Human and Target authority.

Providers must report limitations honestly. Inability to perform an action does not reduce the required authority, and access to perform an action does not increase it.

## Bounded Delegation

Human Governance can delegate work without delegating unlimited authority.

A bounded work unit normally declares:

- the objective;
- the responsible owner or authority;
- allowed artifacts or resources;
- forbidden scope;
- dependencies;
- protected boundaries;
- validation requirements;
- observable completion conditions;
- evidence requirements;
- safe-stop conditions.

The execution provider may make implementation choices only within those boundaries. Adjacent work, useful improvements, follow-up tasks, capability activation, or state mutation remain outside scope unless separately authorized.

## Lifecycle Decisions Remain Separate

AI-DOS keeps lifecycle events distinct because each answers a different question.

| Lifecycle event | Question answered |
|:---|:---|
| Execution | Was the authorized work performed? |
| Validation | Did the exercised surface satisfy the declared checks? |
| Review | What findings, risks, or recommendations apply to the reviewed subject? |
| Human Governance approval | Does the authorized decision-maker accept the exact subject at this gate? |
| Certification | Has the subject satisfied the applicable certification contract? |
| Promotion | May the subject advance to a higher lifecycle state or environment? |
| Release | May the subject be published or distributed? |
| Target-state update | May the Target Project record the exact operational transition? |

Evidence from one event may support another, but it does not silently grant it.

A successful test is not approval. An approving review is not Human Governance acceptance. A merge is not certification. Completion is not release authorization.

## Evidence for Human Decisions

Human Governance decisions should be supported by attributable evidence appropriate to the decision being made.

Useful evidence may include:

- the exact objective and authorized scope;
- authorities and Target resources consumed;
- the identity and revision of the reviewed subject;
- changed artifacts or external state;
- validation commands, criteria, and results;
- warnings, failures, and skipped checks;
- protected-area confirmation;
- unresolved blockers and risks;
- completion or integration proof;
- the current lifecycle state;
- the exact transition being requested.

Evidence supports accountable decisions by showing what actually occurred. It must not overstate the surface validated or hide uncertainty.

## Safe-Stop Protects Human Authority

Safe-stop is required when continuing would require the system to invent, broaden, or reinterpret authority.

Typical governance-related safe-stop conditions include:

- no uniquely resolvable task or transition;
- ambiguous approval subject identity;
- missing or contradictory Target authority;
- an unauthorized protected-area change;
- a requested action outside the current capability boundary;
- missing required evidence;
- revision drift after review;
- provider capability insufficient for the authorized contract;
- an instruction that conflicts with a higher authority.

Safe-stop is not refusal to cooperate. It preserves the boundary between assistance and unauthorized action.

## Human Governance Is Not Micromanagement

Human Governance does not mean a human must choose every file edit, command, or implementation detail.

The purpose is to retain authority over consequential decisions while allowing AI-DOS and providers to handle deterministic, bounded operational work.

A mature governed workflow aims to minimize unnecessary human intervention by making contracts, ownership, validation, and transition rules clear enough that routine work can proceed without repeated permission prompts. Human involvement remains necessary where policy requires it, where authority is genuinely ambiguous, or where a lifecycle gate reserves the decision for Human Governance.

## Example

A human requests that a documentation gap be completed and published as a pull request.

A governed route may be:

1. Resolve the intended Target Project and applicable product-documentation authority.
2. Bound the work to one documentation page and preserve protected areas.
3. Prepare the page using existing normative contracts as sources.
4. Validate links, scope, terminology, and changed artifacts.
5. Open a pull request and report its exact revision and evidence.
6. Await review and the applicable Human Governance decision.

The provider may perform steps 1 through 5 when authorized. It may not infer approval, merge the pull request, modify Target state, or start the next work unit unless separately authorized.

## Summary

```text
Human Governance decides and authorizes.
Target Projects own project-specific truth.
AI-DOS resolves and enforces reusable contracts.
Execution Providers perform bounded work.
Validation and review produce evidence.
Evidence supports decisions but does not replace them.
Safe-stop prevents invented authority.
```

Human Governance is therefore not an external exception to AI-DOS. It is the final authority boundary that makes governed AI-assisted work legitimate, accountable, and safe.

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/Governance/`, the applicable workflow and lifecycle contracts, and the invoked Target Project contract.
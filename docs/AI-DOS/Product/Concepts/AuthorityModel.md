# AI-DOS Authority Model

AI-DOS treats authority as something that must be resolved from declared contracts, ownership, and Human Governance decisions before work begins.

Authority is not inferred from confidence, technical capability, repository proximity, recent activity, or implementation convenience. An execution provider may know how to perform an action and still lack permission to perform it.

This page explains the public authority model. It is explanatory only. Normative authority remains in the applicable AI-DOS contracts, Target Project contracts, and Human Governance decisions.

## Why authority must be explicit

AI-assisted work often combines several different questions:

- What does the product define?
- What does the Target Project own?
- What is the current operational state?
- What action did the human request?
- Which files may be changed?
- Which provider can perform the action?
- What evidence is required?
- Who may approve the result?

Treating these questions as one undifferentiated prompt creates ambiguity. AI-DOS separates them so that execution can be bounded and reviewable.

## Authority is not capability

Capability describes what a provider can technically do.

Authority describes what the provider is allowed to do in the current context.

```text
Provider can write repository files
        ≠
Provider is authorized to modify this file
```

Access to a repository, shell, API, branch, pull request, issue tracker, deployment system, or external service does not grant permission to use that capability for every task.

A valid mutation requires the applicable human intent, Target permission, ownership, scope, protected-area clearance, validation expectations, and provider capability to align.

## The main authority domains

AI-DOS separates authority across several domains.

### Human Governance authority

Human Governance is the final decision authority.

It may supply or withhold:

- strategic direction;
- explicit mutation authorization;
- approval or rejection;
- protected-capability activation;
- acceptance of evidence;
- conflict resolution where contracts cannot resolve one valid outcome;
- permission to change protected governance or planning artifacts.

Human Governance may delegate bounded execution, but delegation does not transfer final authority ownership to the provider.

### AI-DOS product authority

AI-DOS product contracts own reusable product behavior.

They may define:

- provider entry and routing;
- context assembly;
- command and workflow behavior;
- task planning and generation mechanics;
- validation and review procedures;
- evidence structures;
- lifecycle separation;
- safe-stop conditions;
- state-update procedures.

AI-DOS product authority does not own the mission, planning, current state, priorities, evidence acceptance, or protected areas of a particular Target Project.

### Target Project authority

A Target Project owns its own project-specific truth.

This may include:

- identity and mission;
- planning and priorities;
- live operational state;
- declared resources;
- protected areas;
- project-specific validation requirements;
- execution permissions;
- accepted evidence;
- state-transition authority.

AI-DOS consumes this Target-owned context without converting it into reusable product truth.

### Execution Provider authority

An Execution Provider owns neither AI-DOS product truth nor Target Project truth.

The provider receives bounded authority through the resolved instruction, applicable contracts, Resolved Target Context, and execution scope.

The provider may then:

- read authorized resources;
- perform the exact permitted mutations;
- invoke required tools;
- run applicable validation;
- collect and report evidence;
- stop when required.

The provider cannot broaden its authority merely because it discovers adjacent work or has access to additional tools.

### Artifact-owner authority

Different artifacts own different kinds of truth.

Examples include:

- a product contract owning reusable workflow behavior;
- a Target contract owning Target context resolution and protected boundaries;
- a mission document owning strategic purpose;
- a roadmap owning capability direction and dependencies;
- a live status document owning current operational values;
- a validation contract owning validation criteria;
- an evidence record owning attributable historical proof.

An artifact may consume another authority without replacing it.

## Product truth and Target truth

The central authority boundary is the separation between reusable AI-DOS product truth and Target-specific truth.

```text
AI-DOS product truth
    reusable behavior, contracts, workflows, and system semantics

Target Project truth
    mission, planning, state, resources, permissions, and evidence
```

Neither side may silently absorb the other's authority.

A Target Project may bind its own resources and policies to AI-DOS contracts, but it must not redefine reusable provider behavior as Target truth.

AI-DOS may consume Target context, but it must not hard-code one Target Project's paths, priorities, or operational state as universal product behavior.

## Resolved authority

Operational work uses resolved authority rather than isolated documents.

```text
Human intent
    +
Applicable Human Governance decision
    +
Target-owned authority
    +
AI-DOS product contracts
    +
Task-specific scope
    +
Provider capability
    =
Bounded execution authority
```

Every term matters. Missing or contradictory authority can invalidate execution even when all technical resources are available.

## Authority resolution sequence

A typical authority-resolution path is:

```text
1. Identify the invoked Target Project.
2. Read the Target-owned operational entry and applicable Target authorities.
3. Resolve the current objective, scope, permissions, resources, and protected areas.
4. Enter the AI-DOS provider route with Resolved Target Context.
5. Select the applicable command, workflow, validation, and provider capability.
6. Construct or consume the bounded execution contract.
7. Execute only when all required authority is present.
```

This sequence prevents the provider from treating the nearest file, latest commit, open pull request, or prior conversation as authority by default.

## Explicit and derived authority

Authority may be explicit or deterministically derived.

### Explicit authority

Explicit authority directly names the requested action or permitted transition.

Examples include:

- modify a named documentation page;
- review a named pull request revision;
- create a branch and open a draft pull request for one bounded work unit;
- apply a specific approved state transition;
- activate a named capability.

Explicit authority remains bounded by eligibility, ownership, protected areas, dependencies, and validation requirements.

### Deterministically derived authority

Some contracts allow exactly one action to be derived from current Target state and a Human Governance signal.

Derived authority is valid only when:

- the owning contract defines the derivation procedure;
- required inputs are present;
- exactly one eligible outcome is produced;
- no protected-area or dependency conflict exists;
- the resulting action remains within the declared capability boundary.

Where zero, multiple, or conflicting outcomes remain, the provider must safe-stop instead of choosing by preference.

## Authority does not flow from evidence alone

Evidence supports decisions but does not create every later authority automatically.

For example:

```text
Execution completed
    does not automatically mean
Validation passed
    does not automatically mean
Review approved
    does not automatically mean
Human Governance accepted
    does not automatically mean
Certified
    does not automatically mean
Released
```

Each lifecycle transition requires its own owning authority and conditions.

A merged pull request, successful test, favorable review, or completed implementation may be relevant evidence, but none of these independently authorizes every Target-state transition.

## Protected areas

Protected areas are authority boundaries that require exact permission before mutation.

They may include:

- repository entry contracts;
- Target contracts;
- mission documents;
- live operational state;
- roadmaps and development phases;
- evidence records;
- inactive future capabilities;
- external Target scope;
- security, release, or deployment controls.

Technical write access does not override protection.

When a requested action conflicts with a protected area and no exact authority resolves the conflict, safe-stop is required.

## Precedence and ownership

Authority is resolved through declared ownership and contract relationships, not through file location or perceived importance.

A useful public rule is:

> The artifact that owns the question governs the answer, subject to Human Governance.

Examples:

- Product workflow behavior is resolved from the applicable AI-DOS product contract.
- Target mission is resolved from the Target-owned mission authority.
- Current Target state is resolved from the Target-owned operational state authority.
- Validation requirements are resolved from the applicable validation owner and task-specific declarations.
- Approval is resolved from Human Governance and the applicable lifecycle contract.

When two artifacts appear to conflict, the provider must follow the declared authority and precedence model. It must not resolve the conflict through prose similarity, file recency, model confidence, or repository convention.

## Provider-local information

Provider memory, chat history, cached context, local branches, working directories, tool results, and repository activity may be useful operational inputs or evidence.

They are not automatically authoritative.

A provider must re-resolve current authority from the declared sources when the task depends on live state, exact identity, protected boundaries, or approval status.

This prevents stale provider-local context from silently replacing Target truth.

## Bounded delegation

Human Governance and Target authorities may delegate execution without delegating unlimited discretion.

A bounded delegation identifies:

- objective;
- allowed scope;
- forbidden scope;
- required resources;
- protected boundaries;
- validation requirements;
- completion evidence;
- stop conditions;
- state-update authority, when any.

The provider's authority ends at that boundary.

Discovering a related problem may justify a finding or a recommended next action, but it does not authorize additional mutation.

## Safe-stop and unresolved authority

AI-DOS requires safe-stop when authority cannot be resolved sufficiently.

Typical authority blockers include:

- no identifiable Target Project;
- missing or inaccessible authority sources;
- contradictory ownership claims;
- ambiguous permission;
- multiple equally eligible actions with no valid tie-break;
- unauthorized protected-area mutation;
- requested state transition without an owning contract;
- provider capability that exceeds the authorized scope;
- identity drift in the subject being reviewed or approved.

Safe-stop preserves the authority model. It is not a failure to appear productive.

## Authority and recommendations

A provider may often recommend an action that it is not authorized to execute.

Recommendations must remain clearly separated from authorized mutation.

```text
Recommended next action
        ≠
Selected action
        ≠
Activated action
        ≠
Executed action
        ≠
Accepted action
```

This separation lets AI-DOS support planning and analysis without converting advice into permission.

## A practical authority check

Before mutation, a compatible provider should be able to answer:

1. Who requested this action?
2. Which Target Project is being operated on?
3. Which authority owns the relevant question?
4. What exact objective is authorized?
5. Which artifacts or external resources may change?
6. Which areas are protected or forbidden?
7. What validation is required?
8. What evidence must be returned?
9. Does this task authorize any state transition?
10. What condition requires safe-stop?

If these cannot be answered from the applicable contracts and context, execution should not proceed.

## Summary

```text
Human Governance supplies final authority.
AI-DOS product contracts own reusable system behavior.
Target Projects own project-specific truth and permissions.
Execution Providers receive only bounded execution authority.
Artifacts govern only the questions they own.
Capability never substitutes for permission.
Evidence supports decisions but does not skip lifecycle gates.
Unresolved authority requires safe-stop.
```

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, the applicable command and workflow contracts, the invoked Target Project contract, and explicit Human Governance decisions.

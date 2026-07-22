# AI-DOS Tutorials

AI-DOS tutorials teach the product through realistic, bounded scenarios.

They are designed for readers who already understand the basic product boundary and want to practice applying AI-DOS to a Target Project without confusing reusable product contracts, Target-owned authority, or Execution Provider behavior.

These tutorials are publication-oriented and non-normative. They explain how to use the governing contracts; they do not replace or redefine those contracts.

---

## 1. Before You Begin

Complete the Getting Started path first:

1. [Installation](../GettingStarted/Installation.md)
2. [First Target](../GettingStarted/FirstTarget.md)
3. [Quick Start](../GettingStarted/QuickStart.md)

You should be able to identify:

- the AI-DOS product truth root;
- the Target Project truth root;
- the repository entry contract;
- the Target Project contract;
- the Target operational entry;
- the AI-DOS provider entry;
- the external Execution Provider;
- Human Governance authority;
- protected areas;
- validation and evidence requirements.

Do not begin a mutating tutorial exercise until those surfaces can be resolved without guessing.

---

## 2. Tutorial Learning Model

Every AI-DOS tutorial follows the same learning loop:

```text
Scenario
    ↓
Target authority and current context
    ↓
Bounded Human Governance instruction
    ↓
AI-DOS route resolution
    ↓
External provider execution or safe-stop
    ↓
Validation and evidence
    ↓
Human Governance decision
```

A tutorial is successful only when the reader can explain both:

1. what work occurred; and
2. why that work was authorized, bounded, validated, and reported correctly.

Completing a file change without resolving those questions is not a complete AI-DOS exercise.

---

## 3. Recommended Tutorial Order

### Tutorial 1 — Build a Target Project

[Building Targets](BuildingTargets.md)

Use this tutorial to practice:

- choosing a Target truth root;
- declaring Target identity;
- creating a Target contract;
- identifying Target-owned resources;
- defining one operational entry;
- separating mission, planning, live state, and evidence;
- declaring protected areas;
- connecting the repository entry to the Target contract and AI-DOS provider entry;
- testing context resolution and safe-stop behavior.

Start here when you are introducing AI-DOS to a new repository or project.

### Tutorial 2 — Work Through an Execution Provider

[Providers](Providers.md)

Use this tutorial to practice:

- identifying the external agent as the Execution Provider;
- preserving provider neutrality;
- issuing an explicitly bounded instruction;
- observing the repository-entry and Target-context route;
- confirming that the provider follows AI-DOS contracts rather than inventing its own authority;
- reviewing validation limits;
- separating completion, review, approval, and state mutation.

Use this after the Target Project can already resolve its authority and operational context.

### Tutorial 3 — Study Complete Scenarios

[Examples](Examples.md)

Use this tutorial collection to compare complete scenarios such as:

- a successful one-file documentation task;
- a protected-area conflict;
- missing validation authority;
- ambiguous Target state;
- state-derived continuation;
- provider handoff;
- review and correction;
- completed work awaiting Human Governance action.

Use examples to understand patterns, not as universal commands that can be copied without adapting Target-owned facts.

---

## 4. Choose a Path by Role

### Human Governance

Recommended path:

1. [Examples](Examples.md)
2. [Providers](Providers.md)
3. [Building Targets](BuildingTargets.md)

Focus on:

- instruction quality;
- scope authorization;
- protected boundaries;
- evidence sufficiency;
- lifecycle decisions;
- when continuation, approval, correction, or safe-stop is appropriate.

### Target Project Owner

Recommended path:

1. [Building Targets](BuildingTargets.md)
2. [Providers](Providers.md)
3. [Examples](Examples.md)

Focus on:

- Target-owned truth;
- operational-state quality;
- resource discovery;
- protected areas;
- validation declarations;
- state-update authority;
- keeping Target truth outside AI-DOS product contracts.

### Execution Provider Implementer

Recommended path:

1. [Providers](Providers.md)
2. [Examples](Examples.md)
3. [Building Targets](BuildingTargets.md)

Focus on:

- consuming Resolved Target Context;
- following repository and provider routes;
- avoiding repository-derived authority invention;
- respecting exact scope;
- validating only the changed surface;
- reporting blockers and evidence accurately;
- stopping before unauthorized state transitions.

### Reviewer or Auditor

Recommended path:

1. [Examples](Examples.md)
2. [Building Targets](BuildingTargets.md)
3. [Providers](Providers.md)

Focus on:

- authority provenance;
- scope compliance;
- changed-artifact identity;
- validation claim boundaries;
- protected-area proof;
- lifecycle separation;
- whether the reported result supports the claimed outcome.

---

## 5. Core Scenario Types

The tutorial family is organized around several recurring scenario types.

### 5.1 Explicitly Bounded Work

Human Governance supplies enough detail to identify:

- one objective;
- one allowed scope;
- forbidden or protected scope;
- required validation;
- completion evidence;
- state-update authority.

The provider should execute only that task and must not replace it with state-derived work selection.

### 5.2 State-Derived Continuation

Human Governance expresses continuation or advancement intent without naming a bounded work unit.

The provider must:

1. resolve the Target operational entry;
2. consume the current Target-owned inputs;
3. follow the applicable AI-DOS planning route;
4. select or generate work only when the governing contracts and Target data authorize it;
5. safe-stop when a unique eligible result cannot be produced.

A brief instruction is not permission to improvise.

### 5.3 Protected-Area Conflict

The requested work touches a protected surface without sufficient authority.

Expected result:

```text
SAFE-STOP
```

The provider should identify:

- the requested change;
- the protected area;
- the missing authority;
- the fact that no repository mutation occurred;
- the exact decision needed from Human Governance.

A protected-area conflict is a successful safety outcome, not a failed tutorial.

### 5.4 Missing Context

The Target contract, operational entry, required resource, validation source, or authority record cannot be resolved.

The provider must stop rather than fill the gap from:

- nearby files;
- repository history;
- naming conventions;
- implementation-language assumptions;
- issue or pull-request activity;
- model judgment.

### 5.5 Review and Correction

A completed subject is reviewed against its declared objective, scope, revision identity, validation evidence, and protected boundaries.

The tutorial should preserve the separation between:

- execution;
- validation;
- review;
- correction;
- Human Governance approval;
- integration;
- Target state mutation.

### 5.6 Provider Handoff

One provider produces work or evidence and another provider reviews, continues, or validates it.

The second provider must re-resolve authority and subject identity from repository-owned sources. It must not treat the first provider's narrative as authoritative Target state.

---

## 6. Tutorial Exercise Structure

Use the following structure when working through or writing an AI-DOS tutorial.

### Scenario

Describe the repository and Target situation without hiding material constraints.

### Learning Objective

State what the reader should understand after completing the exercise.

### Starting State

Identify the authoritative surfaces that already exist.

### Human Governance Instruction

Provide the exact instruction used for the scenario.

### Expected Resolution

Explain which repository, Target, and AI-DOS documents should be consumed.

### Expected Execution or Safe-Stop

Describe the permitted outcome without claiming work beyond the scenario.

### Validation

Name the checks that apply and the limits of each check.

### Expected Evidence

List the information the completion or blocker report must contain.

### Review Questions

Ask the reader to verify authority, scope, protected boundaries, evidence, and lifecycle state.

### Variations

Change one material input at a time and explain how the expected result changes.

---

## 7. Example Bounded Tutorial Instruction

A simple practice instruction may look like this:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective:
Improve the Target Project introduction so a new contributor can identify the project purpose and authority boundary.

Allowed scope:
docs/Projects/MyTarget/Product/Introduction.md only.

Forbidden scope:
Do not modify AI-DOS product contracts, the Target mission, planning documents, operational state, or evidence records.

Validation:
Confirm the changed file exists, its internal links resolve, and terminology is consistent with the Target contract.

Completion:
Report the objective, authorities read, changed artifacts, validation results and limits, protected-area confirmation, blockers, and exactly one recommended next step.

State authority:
Do not update Target operational state.
```

This instruction is an example of structure. Replace all Target-specific paths, authorities, and validation requirements with values actually declared by the Target Project.

---

## 8. How to Evaluate a Tutorial Result

A completed tutorial result should answer the following questions.

### Authority

- Was the repository entry read?
- Was the Target contract resolved first?
- Was the current Target context obtained from its declared sources?
- Was the AI-DOS provider route entered only after Target resolution?

### Scope

- Was exactly one work unit executed?
- Did every changed artifact fall within allowed scope?
- Were protected and forbidden areas preserved?
- Was follow-up work avoided?

### Validation

- Were the declared checks performed?
- Did the report state what each check actually validated?
- Were unavailable or skipped checks disclosed?
- Were broader claims avoided when only a narrow surface was tested?

### Evidence

- Were changed artifacts identified exactly?
- Were blockers and residual risks stated?
- Was protected-area confirmation included?
- Was completion distinguished from acceptance?

### Lifecycle

- Did execution stop at the declared completion condition?
- Did review remain separate from approval?
- Did integration remain separate from Target acceptance?
- Was Target state mutated only with exact authority?

---

## 9. Common Tutorial Mistakes

### Treating the tutorial as authority

A tutorial explains a pattern. The actual Target contract and AI-DOS normative contracts govern execution.

### Copying example paths as universal requirements

Target resource locations and filenames belong to the Target Project unless a normative AI-DOS contract explicitly owns them.

### Using a successful scenario to bypass current state

Historical success does not authorize current work. Resolve current Target authority fresh for every exercise.

### Treating provider output as Target truth

Provider reports are evidence and attributed inputs. They do not independently become Target-owned operational state.

### Claiming validation beyond the exercised surface

A link check validates links. A type check validates the declared implementation surface. Neither independently proves governance correctness or Target acceptance.

### Continuing automatically

A completed tutorial step does not authorize the next tutorial, task, capability, or state transition.

### Ignoring safe-stop outcomes

Safe-stop behavior is part of correct AI-DOS operation. Do not rewrite an exercise merely to force mutation.

---

## 10. Tutorial Readiness Checklist

Before starting a tutorial, confirm:

- [ ] AI-DOS product contracts are present and discoverable.
- [ ] The Target Project has a separate truth root.
- [ ] Root `AGENTS.md` identifies the required reading order.
- [ ] The Target contract identifies the operational entry.
- [ ] Current Target context can be resolved without guessing.
- [ ] Protected areas are declared.
- [ ] Validation sources are known.
- [ ] A compatible external Execution Provider is available.
- [ ] Human Governance understands that completion is not automatic acceptance.

After completing a tutorial, confirm:

- [ ] Exactly one scenario outcome occurred.
- [ ] Changed artifacts, if any, match allowed scope.
- [ ] Safe-stop occurred when authority or context was insufficient.
- [ ] Validation results include their limits.
- [ ] Protected areas were preserved.
- [ ] Evidence supports the reported outcome.
- [ ] No unauthorized state transition occurred.
- [ ] Exactly one next step was recommended rather than executed automatically.

---

## 11. Supporting Documentation

Use these pages while working through tutorials:

- [Product Documentation](../README.md)
- [Getting Started](../GettingStarted/README.md)
- [Concepts](../Concepts/README.md)
- [Execution Model](../ExecutionModel.md)
- [Context Resolution](../ContextResolution.md)
- [Provider Model](../ProviderModel.md)
- [Reference](../Reference/README.md)

For normative behavior, follow the owning contracts under `docs/AI-DOS/` and the Target Project's declared authority.

---

## 12. Documentation Boundary

The Tutorials area:

- explains realistic usage patterns;
- provides learning scenarios and review questions;
- may show example commands and repository layouts;
- does not activate capabilities;
- does not create Target authority;
- does not update Target state;
- does not certify a provider;
- does not replace normative AI-DOS contracts;
- does not turn example Target details into reusable product truth.

When a tutorial and a normative contract differ, the normative contract governs. When a tutorial example and the current Target Project differ, the Target Project's declared authority governs.

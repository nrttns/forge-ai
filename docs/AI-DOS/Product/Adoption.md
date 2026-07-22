# Adopting AI-DOS

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

This guide explains how a team can evaluate, pilot, and adopt AI-DOS without confusing product contracts, Target Project authority, Execution Provider behavior, or current implementation surfaces.

It is publication-oriented guidance. It does not activate a capability, select a Target, authorize repository mutation, certify an implementation, or replace the applicable normative contracts.

---

## 1. Adoption Goal

Adopting AI-DOS means establishing a repeatable operating model in which:

- Human Governance retains final authority;
- each Target Project owns its own mission, planning, operational state, protected areas, resources, and evidence;
- AI-DOS supplies reusable contracts for context, routing, bounded work, validation, review, lifecycle separation, and safe-stop behavior;
- an external Execution Provider performs only the work it is authorized and capable to perform;
- implementation technology remains bounded and replaceable;
- evidence supports every material claim.

Adoption is not complete merely because documentation has been copied into a repository or a CLI command runs successfully.

---

## 2. What Adoption Is Not

AI-DOS adoption is not:

- installing a model;
- selecting one coding agent as the permanent architecture;
- copying Forge AI planning into another project;
- treating Markdown as secondary documentation around code;
- enabling unrestricted autonomous execution;
- allowing a provider to infer authority from repository activity;
- declaring every AI-DOS contract executable;
- treating a successful test as product-wide validation;
- promoting a pilot directly into organization-wide use;
- replacing Human Governance.

A team may use AI-DOS with different providers, repositories, implementation languages, and delivery platforms as long as the applicable contracts and Target boundaries remain intact.

---

## 3. Adoption Layers

A practical adoption separates five layers.

| Layer | Owner | Adoption question |
|:---|:---|:---|
| Human Governance | accountable humans | Who may authorize, approve, stop, or advance work? |
| Target Project | Target owner | Where do mission, state, protected areas, and evidence live? |
| AI-DOS product contracts | AI-DOS governance | Which reusable rules govern routing, execution, review, and lifecycle behavior? |
| Execution Provider | provider operator or implementer | Which tool will consume the resolved context and perform bounded work? |
| Implementation and distribution surfaces | implementation owner | Which CLI, adapter, script, runtime, or package supports the current use case? |

The layers cooperate but do not inherit each other's authority.

---

## 4. Recommended Adoption Sequence

Use the following sequence:

```text
Understand the product
        ↓
Identify one pilot Target
        ↓
Establish Target authority and boundaries
        ↓
Choose a compatible Execution Provider
        ↓
Run one low-risk bounded work unit
        ↓
Validate and review the result
        ↓
Record lessons and unresolved risks
        ↓
Decide whether to expand, revise, or stop
```

Do not skip from product evaluation directly to broad autonomous operation.

---

## 5. Stage 1 — Understand the Product

Before placing AI-DOS into a repository, the adoption team should be able to explain:

- what AI-DOS is;
- why it is MD-first;
- what provider neutrality means;
- the difference between AI-DOS product truth and Target Project truth;
- the role of Human Governance;
- how Resolved Target Context reaches an Execution Provider;
- why bounded work is required;
- why validation, review, approval, and acceptance are separate;
- why safe-stop is a valid result;
- why current implementation technology does not define the whole product.

Recommended reading:

1. [What Is AI-DOS?](Concepts/WhatIsAIDOS.md)
2. [Overview](Overview.md)
3. [Philosophy](Concepts/Philosophy.md)
4. [Core Concepts](Concepts/CoreConcepts.md)
5. [Human Governance](Concepts/HumanGovernance.md)
6. [Authority Model](Concepts/AuthorityModel.md)
7. [Execution Model](ExecutionModel.md)
8. [Security](Security.md)
9. [Implementation](Implementation.md)

---

## 6. Stage 2 — Choose One Pilot Target

A first pilot should be deliberately small.

Good pilot characteristics include:

- one clearly owned repository or project;
- explicit Human Governance;
- a limited and reviewable change surface;
- low operational risk;
- visible protected areas;
- available validation;
- a clear completion condition;
- no dependency on broad capability activation;
- no requirement to alter mission or planning documents merely to run the pilot.

Avoid a pilot that begins with:

- organization-wide repository access;
- production secrets;
- high-impact infrastructure changes;
- several Target Projects at once;
- unresolved ownership disputes;
- undocumented approval rules;
- ambiguous operational state;
- a requirement for the provider to guess what to do next.

---

## 7. Stage 3 — Establish the Target Boundary

The pilot Target should declare its own truth root and authorities.

A practical Target normally needs:

- Target identity;
- a canonical Target contract;
- mission or purpose authority;
- one operational entry;
- current operational state when state-derived work is expected;
- protected areas;
- Target resources;
- execution permissions;
- validation expectations;
- evidence expectations;
- state-update authority;
- safe-stop conditions.

The exact file names and directory structure belong to the Target unless an applicable contract requires otherwise.

AI-DOS product documents may explain the model, but they must not become the live ProjectStatus, roadmap, mission, or evidence store of the Target.

Use [First Target](GettingStarted/FirstTarget.md) and [Building Targets](Tutorials/BuildingTargets.md) for the practical setup path.

---

## 8. Stage 4 — Select a Compatible Execution Provider

An Execution Provider may be a coding agent, conversational host, automation runner, local adapter, hosted runtime, or another system capable of consuming the required contracts.

Provider selection should consider:

- ability to read the repository and Target contracts;
- ability to preserve exact file scope;
- support for read-before-write behavior;
- ability to report changed artifacts precisely;
- validation and evidence capabilities;
- safe-stop behavior;
- subject-identity preservation during review;
- support for protected areas;
- handling of secrets and sensitive data;
- provider-specific limitations;
- portability of the resulting process.

A provider's technical capabilities do not create execution authority.

Do not make provider-specific commands, UI terms, branch conventions, or tool limitations part of universal AI-DOS product truth.

See [Provider Model](ProviderModel.md) and [Execution Providers](Tutorials/Providers.md).

---

## 9. Stage 5 — Define the First Bounded Work Unit

The first pilot work unit should have:

### Objective

One observable outcome.

### Allowed scope

An exact file, directory, artifact family, or bounded implementation surface.

### Forbidden scope

Protected or unrelated areas that must remain unchanged.

### Authority

The Human Governance and Target authority permitting the work.

### Validation

Checks appropriate to the changed surface.

### Completion condition

The evidence that shows the work unit is complete.

### Stop conditions

Conditions requiring safe-stop, such as missing authority, ambiguous scope, protected-area conflict, identity drift, or failed required validation.

Example structure:

```text
Objective:
Improve one public documentation page so a new contributor can identify its purpose and authority boundary.

Allowed scope:
The named documentation file only.

Forbidden scope:
Do not modify Target mission, planning, operational state, protected contracts, implementation, or unrelated documentation.

Validation:
Confirm the file exists, links resolve within the exercised scope, and terminology remains consistent with its canonical owners.

Completion:
Report the changed artifact, validation results and limits, protected-area confirmation, blockers, and exactly one recommended next step.

State authority:
Do not update Target operational state.
```

Natural-language instructions are acceptable when their meaning resolves to one bounded authorized work unit.

---

## 10. Stage 6 — Run, Validate, and Review

The pilot should preserve lifecycle separation.

```text
Instruction
    ↓
Context resolution
    ↓
Bounded execution or safe-stop
    ↓
Validation
    ↓
Evidence
    ↓
Review
    ↓
Human Governance decision
```

The following are not interchangeable:

- request and authorization;
- selection and activation;
- activation and execution;
- completion and validation;
- validation and review;
- review and approval;
- merge and Target acceptance;
- acceptance and continuation;
- certification and release.

The pilot report should state:

- objective;
- authorities consumed;
- allowed and forbidden scope;
- changed artifacts;
- validation performed;
- validation limits;
- protected-area confirmation;
- blockers and warnings;
- completion evidence;
- state-update authority;
- exactly one recommended next step.

---

## 11. Stage 7 — Evaluate the Pilot

Evaluate the operating model, not only the changed artifact.

### Authority quality

- Was Human Governance clear?
- Was Target authority discoverable?
- Did the provider avoid inventing permission?

### Boundary quality

- Were AI-DOS and Target truth kept separate?
- Were protected areas preserved?
- Did implementation remain subordinate to contracts?

### Execution quality

- Was exactly one work unit performed?
- Did the provider stop at the completion condition?
- Did scope remain stable?

### Validation quality

- Did validation match the changed surface?
- Were unsupported broad claims avoided?
- Were unavailable checks disclosed?

### Evidence quality

- Can another reviewer reproduce the conclusion?
- Are artifacts and revision identity exact?
- Are blockers visible?

### Provider portability

- Which parts are provider-neutral?
- Which parts are adapter-specific?
- Could another compatible provider follow the same contract route?

### Human effort

- Did the process reduce ambiguity?
- Did governance overhead remain proportional to risk?
- Were instructions understandable to non-programmers?

---

## 12. Adoption Outcomes

A pilot may produce one of four legitimate outcomes.

### Expand

The pilot demonstrates clear authority, reliable boundaries, adequate evidence, and manageable overhead. Human Governance may authorize a larger but still bounded adoption step.

### Revise

The model is useful, but Target declarations, provider behavior, validation, navigation, or documentation need correction before expansion.

### Hold

The pilot is complete, but Human Governance intentionally pauses before further adoption.

### Stop

The current Target, provider, risk profile, or operating environment is not suitable. Safe termination is a valid adoption result.

None of these outcomes should be inferred from repository activity alone.

---

## 13. Scaling Beyond the Pilot

Scale one dimension at a time.

Possible dimensions include:

- more documentation tasks;
- broader implementation surfaces;
- another Execution Provider;
- another Target Project;
- stronger validation;
- formal review gates;
- distribution packaging;
- local runtime data;
- security controls;
- evidence automation.

For each expansion:

1. identify the new risk;
2. identify the authority required;
3. define the bounded scope;
4. preserve prior protected areas;
5. name validation and evidence;
6. define rollback or safe-stop behavior;
7. obtain the applicable Human Governance decision.

Do not interpret success in one dimension as authorization to expand all dimensions.

---

## 14. Security During Adoption

Adoption should preserve:

- least authority;
- least scope;
- Target boundary integrity;
- secret and credential protection;
- provider isolation;
- reviewed-subject identity;
- evidence provenance;
- runtime-data separation;
- protected-area enforcement;
- explicit mutation authority.

A pilot should not expose secrets, private operational state, or sensitive Target evidence merely to demonstrate AI-DOS behavior.

Security findings should be reported through the applicable repository security process. Public product documentation must not contain secrets or incident details that require restricted handling.

See [Security](Security.md).

---

## 15. Implementation During Adoption

The current repository may include a CLI, TypeScript, JavaScript, Node.js, npm, tests, scripts, packaging, CI, adapters, or runtime-data files.

These surfaces may support an adoption pilot, but they do not independently define:

- AI-DOS product identity;
- the complete architecture;
- the future kernel;
- all workflow behavior;
- full Target resolution;
- review or approval semantics;
- product-wide readiness.

Validation must name the implementation surface exercised.

See [Implementation](Implementation.md).

---

## 16. Common Adoption Mistakes

### Copying a Target as the product template

Forge AI or another Target may demonstrate consumption of AI-DOS, but its live planning and state are not reusable AI-DOS product truth.

### Starting with autonomous continuation

A first pilot should begin with an explicitly bounded task. State-derived work selection requires stronger Target operational context.

### Choosing a provider before defining authority

The provider is an executor, not the owner of Target mission or permission.

### Treating installation as adoption

Copied files and successful package installation do not prove governance, routing, evidence, or safe-stop quality.

### Overclaiming validation

A typecheck, unit test, link check, or CLI run validates only its exercised surface.

### Expanding scope after success

Completion of one task does not authorize another task, another Target, broader access, or a later capability.

### Hiding safe stops

A safe stop is useful evidence about missing authority, unclear context, or unsuitable scope.

### Making the pilot provider-dependent

Adapter-specific mechanics should be clearly separated from reusable AI-DOS behavior.

---

## 17. Adoption Readiness Checklist

Before beginning a pilot, confirm:

- [ ] Human Governance is identified.
- [ ] One pilot Target is selected.
- [ ] The Target has a separate truth root.
- [ ] The Target contract and operational entry are discoverable.
- [ ] Protected areas are declared.
- [ ] One low-risk work unit is defined.
- [ ] Allowed and forbidden scope are exact.
- [ ] Validation and evidence expectations are named.
- [ ] A compatible Execution Provider is available.
- [ ] Provider limitations are understood.
- [ ] Security and secret-handling boundaries are clear.
- [ ] Safe-stop conditions are known.
- [ ] No capability activation is implied by the pilot.

After the pilot, confirm:

- [ ] Exactly one authorized outcome occurred.
- [ ] Changed artifacts match allowed scope.
- [ ] Protected areas remained unchanged.
- [ ] Validation claims are bounded.
- [ ] Evidence is attributable and reviewable.
- [ ] Safe-stop behavior occurred when required.
- [ ] Review remained separate from approval.
- [ ] No unauthorized state transition occurred.
- [ ] Lessons and unresolved risks were recorded.
- [ ] Human Governance selected expand, revise, hold, or stop.

---

## 18. Related Documentation

- [Product Documentation](README.md)
- [Getting Started](GettingStarted/README.md)
- [First Target](GettingStarted/FirstTarget.md)
- [Quick Start](GettingStarted/QuickStart.md)
- [Execution Model](ExecutionModel.md)
- [Context Resolution](ContextResolution.md)
- [Provider Model](ProviderModel.md)
- [Security](Security.md)
- [Implementation](Implementation.md)
- [Tutorials](Tutorials/README.md)
- [Building Targets](Tutorials/BuildingTargets.md)
- [Execution Providers](Tutorials/Providers.md)
- [Examples](Tutorials/Examples.md)
- [Reference](Reference/README.md)
- [Contributing](Community/Contributing.md)
- [Community Roadmap](Community/Roadmap.md)

---

## 19. Authority Boundary

This adoption guide explains a safe public path for evaluating and introducing AI-DOS.

It does not:

- authorize repository mutation;
- select or activate a Target;
- declare a capability active;
- approve, accept, certify, promote, or release work;
- replace Target-owned planning or operational state;
- replace the AI-DOS provider route;
- define a mandatory provider or implementation technology;
- guarantee suitability for a specific organization.

When this guide and an applicable normative authority differ, the normative authority governs.
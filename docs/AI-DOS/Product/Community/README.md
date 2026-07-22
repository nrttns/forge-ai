# AI-DOS Community

The AI-DOS Community section explains how people can participate in the product without confusing community activity with Human Governance authority, Target Project planning, capability activation, or normative contract ownership.

This section is publication-oriented. It helps contributors, reviewers, Target owners, provider implementers, researchers, and interested users understand where community input belongs and how it can be expressed safely.

It does not replace the repository entry contract, a Target Project contract, AI-DOS normative specifications, or an explicit Human Governance instruction.

---

## 1. Purpose

Use the Community section when you need to understand:

- how to propose a bounded contribution;
- how to distinguish AI-DOS product work from Target-specific work;
- how public product direction differs from a Target Project roadmap;
- how audits, reviews, experiments, and implementation feedback can inform future work;
- how to preserve provider neutrality and the MD-first model;
- how community participation relates to approval, acceptance, release, and capability activation;
- when a proposal should stop because authority or scope is missing.

Community participation can improve AI-DOS, but participation does not create execution authority by itself.

---

## 2. Community Navigation

### [Contributing](Contributing.md)

Use the contribution guide when preparing documentation, contracts, implementation changes, tests, examples, audits, or review findings.

It explains:

- contribution classification;
- bounded objectives and file scope;
- product truth, Target truth, and implementation boundaries;
- protected areas;
- validation and evidence expectations;
- provider-neutral contribution design;
- pull request and review discipline;
- correction and safe-stop behavior.

Start here before proposing a repository change.

### [Community Roadmap](Roadmap.md)

Use the Community Roadmap to understand the public direction of AI-DOS as a product.

It explains:

- long-term product direction;
- contract clarity and authority integrity;
- Target context resolution;
- bounded planning and execution;
- provider portability;
- validation, evidence, security, distribution, and adoption;
- the future MD-to-executable direction;
- how community proposals and independent audits may influence direction.

The Community Roadmap is not a live Target Project plan, release schedule, capability declaration, or authorization record.

---

## 3. Choose a Participation Path

### I found a documentation problem

1. Identify whether the issue belongs to reusable AI-DOS product truth, public Product documentation, or a specific Target Project.
2. Locate the canonical owner of the affected behavior.
3. Describe the mismatch without treating explanatory text as higher authority than its normative source.
4. Propose the smallest bounded correction.
5. State what was reviewed and what was not reviewed.

For public-facing terminology or navigation issues, consult the [Reference hub](../Reference/README.md).

### I want to propose a product feature

1. Describe the user or system problem rather than beginning with a preferred implementation.
2. Identify the existing AI-DOS contract or architecture surface that may own the concern.
3. Separate current behavior from desired future behavior.
4. Identify dependencies, protected areas, validation needs, and safe-stop conditions.
5. Present the proposal for governance review before treating it as scheduled work.

A feature proposal is input to governance. It is not capability activation.

### I want to improve a Target Project

Read that Target's repository entry, Target contract, planning authorities, operational state, protected areas, and active authorization.

Do not copy the Target's mission, roadmap, status, accepted evidence, or live task into reusable AI-DOS product documentation.

A Target-specific improvement belongs to Target truth unless a separately authorized task extracts a reusable product contract.

### I want to implement or extend a provider

Read:

1. [Provider Model](../ProviderModel.md)
2. [Implementation](../Implementation.md)
3. [Security](../Security.md)
4. [Context Resolution](../ContextResolution.md)
5. [Execution Model](../ExecutionModel.md)

Then consult the normative provider entry and applicable AI-DOS contracts.

A provider may implement AI-DOS behavior, but provider convenience, host features, or technical capability do not redefine AI-DOS semantics or grant execution authority.

### I want to review or audit AI-DOS

State:

- the exact scope;
- the repository or artifact revision reviewed;
- the authority sources read;
- the methods used;
- the evidence collected;
- the limitations of the review;
- findings separated from recommendations;
- whether any finding depends on inference.

Audits and reviews can identify risks and gaps. They do not automatically authorize remediation, acceptance, certification, release, or state mutation.

---

## 4. Community and Authority

AI-DOS community participation operates beneath Human Governance and canonical authority.

A useful interpretation order is:

1. Human Governance instruction for the exact task.
2. Target-owned authority for Target identity, mission, planning, operational state, permissions, and protected areas.
3. Canonical AI-DOS contracts for reusable product behavior.
4. Public Product documentation for learning, orientation, and navigation.
5. Community discussion, proposals, audits, experiments, and implementation feedback.

Lower layers may inform higher layers, but they do not override them.

A popular proposal is not automatically authoritative.

A merged change is not automatically accepted Target evidence.

A passing test is not automatically product-wide validation.

A working provider feature is not automatically an AI-DOS capability.

---

## 5. Product Truth and Target Truth

Community work must preserve the product/Target boundary.

### Reusable AI-DOS product truth may include

- provider-neutral contracts;
- reusable command and workflow semantics;
- authority and context-resolution rules;
- validation and evidence models;
- review identity and safe-stop rules;
- templates and standards intended for multiple Targets;
- publication-oriented explanations of those reusable concepts.

### Target Project truth may include

- mission;
- roadmap;
- DevelopmentPhases;
- ProjectStatus;
- active and pending work units;
- Target-specific protected areas;
- Target resources;
- accepted evidence;
- Target-specific risks and decisions.

Target truth must not be promoted into reusable product truth merely because the Target is the current development environment for AI-DOS.

---

## 6. Provider Neutrality

Community contributions should preserve AI-DOS independence from any one model, coding agent, API, CLI, repository host, or automation service.

Provider-specific material is acceptable when it is clearly classified as one of:

- an adapter;
- an implementation example;
- a compatibility note;
- a bounded validation result;
- a provider-specific limitation;
- a non-authoritative tutorial example.

Provider-specific behavior must not be described as universal AI-DOS behavior unless a canonical product contract establishes that behavior.

---

## 7. MD-First Participation

AI-DOS is MD-first. Governing Markdown artifacts are normative system contracts within their declared authority.

Community contributors should therefore treat documentation changes with the same care normally applied to executable interfaces.

Before editing a normative Markdown artifact, determine:

- whether the task explicitly authorizes that artifact;
- which higher authority it consumes;
- which downstream artifacts consume it;
- whether the change alters a schema, lifecycle transition, permission, workflow, or safe-stop condition;
- what validation can demonstrate consistency;
- what the validation cannot prove.

Public Product documentation remains explanatory even though the wider AI-DOS system is MD-first. It should summarize and link to canonical owners rather than silently becoming a second normative specification.

---

## 8. Bounded Community Proposals

A strong proposal should identify:

| Field | Expected content |
|:---|:---|
| Problem | The observed gap, defect, risk, or user need |
| Objective | One bounded outcome |
| Classification | Product, Target, implementation, documentation, audit, or mixed |
| Authority | Canonical sources that own the affected behavior |
| Scope | Exact artifacts or surfaces proposed for change |
| Protected boundaries | Areas that must remain unchanged |
| Validation | Checks and evidence appropriate to the scope |
| Non-goals | Related work intentionally excluded |
| Completion condition | Observable condition that ends the work unit |
| Next decision | The one governance decision needed after completion |

Avoid proposals that combine architecture redesign, implementation, migration, documentation, certification, and release into one undifferentiated change.

---

## 9. Review and Evidence

Community work should be reviewable against an exact subject.

Evidence should name:

- the reviewed artifact or revision;
- the files or surfaces examined;
- the validation commands or methods used;
- the result of each validation;
- the limits of each claim;
- unresolved blockers or uncertainty;
- protected-area confirmation.

Do not claim that one implementation-specific check validates the full AI-DOS architecture or governance model.

Do not treat repository activity, discussion volume, pull request state, or implementation proximity as evidence of Human Governance acceptance.

---

## 10. Security and Responsible Participation

Before sharing logs, examples, prompts, evidence, or issue reports, remove or protect:

- credentials;
- tokens;
- private repository content;
- personal data;
- confidential Target context;
- sensitive paths or infrastructure details;
- unredacted provider transcripts when they contain protected information.

Use [Security](../Security.md) for the public AI-DOS security model and the repository's security policy for vulnerability reporting procedures.

Do not publish a vulnerability in a public discussion when the applicable security policy requires private reporting.

---

## 11. Safe-Stop Conditions

A community contribution should stop before mutation when:

- the canonical owner cannot be identified;
- product and Target truth cannot be separated;
- the proposed scope conflicts with a protected area;
- the task requires live Target state that has not been resolved;
- multiple incompatible authorities remain unresolved;
- validation required for the claim is unavailable;
- the proposal would activate a capability by implication;
- the work depends on secrets or inaccessible resources;
- the requested change exceeds the explicit authorization.

A safe-stop report should name the blocker, the authority causing the stop, what remained unchanged, and one bounded resolution step when one can be determined.

---

## 12. What Community Participation Does Not Do

Community participation does not by itself:

- authorize repository mutation;
- alter Target Project operational state;
- approve or accept a work unit;
- merge a pull request;
- activate a capability;
- certify AI-DOS or a provider;
- create a release commitment;
- establish implementation completeness;
- override Human Governance;
- convert Forge AI planning into AI-DOS product planning.

These actions require their own owning authority and lifecycle route.

---

## 13. Related Documentation

- [AI-DOS Product documentation](../README.md)
- [Getting Started](../GettingStarted/README.md)
- [Concepts](../Concepts/README.md)
- [Tutorials](../Tutorials/README.md)
- [Reference](../Reference/README.md)
- [Security](../Security.md)
- [Implementation](../Implementation.md)
- [Contributing](Contributing.md)
- [Community Roadmap](Roadmap.md)

---

## 14. Community Readiness Checklist

Before submitting a proposal, contribution, review, or audit, confirm:

- [ ] the work is classified as product, Target, implementation, documentation, audit, or mixed;
- [ ] the canonical owner is identified;
- [ ] the objective is bounded;
- [ ] the file or artifact scope is explicit;
- [ ] protected areas are preserved;
- [ ] product truth and Target truth remain separate;
- [ ] provider-specific details are labeled;
- [ ] current behavior and future ambition are distinguished;
- [ ] validation claims match the exercised surface;
- [ ] evidence identifies the exact subject or revision;
- [ ] secrets and sensitive Target context are excluded;
- [ ] no approval, acceptance, activation, certification, or release is implied;
- [ ] safe-stop conditions are documented;
- [ ] exactly one next governance decision is identified.

---

## 15. Compact Summary

```text
Use Contributing to prepare bounded work.
Use the Community Roadmap to understand public product direction.
Use canonical AI-DOS contracts for exact reusable behavior.
Use Target-owned authorities for Target planning and state.
Use Human Governance for authorization and lifecycle decisions.
```

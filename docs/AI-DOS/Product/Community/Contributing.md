# Contributing to AI-DOS

AI-DOS welcomes contributions that improve the clarity, correctness, portability, safety, and practical usefulness of governed AI-assisted work.

This page explains how to prepare a contribution without confusing public documentation, normative AI-DOS product truth, Target Project truth, provider-specific behavior, or implementation detail.

It is publication-oriented guidance. It does not replace repository entry contracts, Target-owned authority, AI-DOS normative contracts, review rules, validation requirements, or Human Governance decisions.

---

## 1. Start With the Repository Contract

Before proposing or making a change in an AI-DOS repository, read the repository entry file and follow its declared authority chain.

For the Forge AI repository, the required entry begins with:

1. the root `AGENTS.md`;
2. the Forge AI Target Project contract;
3. the AI-DOS provider entry contract;
4. the exact task-specific authorities required by the work.

Do not infer authority from folder names, recent commits, open pull requests, implementation language, build tools, or nearby files.

A contribution is not authorized merely because it appears useful or technically possible.

---

## 2. Understand What You Are Changing

Every contribution should belong to one clearly identified truth or implementation surface.

### AI-DOS product truth

Reusable AI-DOS product truth belongs under `docs/AI-DOS/`.

Examples include:

- provider-neutral contracts;
- orchestration rules;
- reusable workflows;
- command semantics;
- system specifications;
- review and validation rules;
- templates and checklists;
- public product documentation.

### Target Project truth

A Target Project owns its own:

- mission;
- planning;
- operational state;
- active work-unit records;
- priorities;
- protected areas;
- permissions;
- evidence and acceptance state.

Forge AI Target Project truth belongs under `docs/Projects/ForgeAI/`.

Target-specific state must not be copied into reusable AI-DOS product documentation as though it were universal product behavior.

### Implementation surfaces

Source code, command-line adapters, tests, packages, CI workflows, distribution files, and generated artifacts are bounded implementation surfaces.

They do not automatically own AI-DOS architecture or product semantics.

When implementation and a normative Markdown contract disagree, resolve the conflict through the applicable authority and bounded task. Do not silently treat the implementation as the product definition.

---

## 3. Choose the Right Contribution Type

A useful contribution begins by identifying its class.

| Contribution type | Typical purpose | Primary authority to consult |
|:---|:---|:---|
| Public documentation | Explain product concepts or usage | Product documentation plus canonical owners |
| Normative contract | Define reusable behavior or authority | Applicable AI-DOS contract family |
| Target Project document | Define Target-specific truth or state | Target contract and Target-owned authorities |
| Implementation | Realize a bounded technical surface | Applicable normative contract and task scope |
| Validation | Add or improve evidence-producing checks | Declared validation authority |
| Review correction | Resolve identified findings | Exact review subject and correction route |
| Audit material | Record scoped findings or evidence | Audit workflow and evidence rules |
| Provider adapter | Connect a host or tool to AI-DOS | Provider entry and adapter boundary |

If the contribution type is unclear, stop before editing and identify the owner of the intended behavior.

---

## 4. Prefer Explicitly Bounded Contributions

A strong contribution request should identify:

- the objective;
- the exact allowed scope;
- expected files or artifacts;
- protected areas;
- required validation;
- completion conditions;
- whether state mutation is authorized;
- the expected delivery form, such as a draft pull request.

Example:

```text
Create one bounded documentation work unit.

Objective:
Transform docs/AI-DOS/Product/Community/Contributing.md into the public AI-DOS contribution guide.

Scope:
Modify only that file.

Boundaries:
Do not modify ProjectStatus, Mission, Roadmap, DevelopmentPhases, root AGENTS.md, Target contracts, normative workflows, commands, specifications, or implementation files.

Validation:
Confirm exactly one file changed and the page remains provider-neutral and Target-independent.

Delivery:
One branch, one commit, one draft pull request.
```

A bounded request reduces ambiguity, limits accidental scope expansion, and makes review easier.

---

## 5. Do Not Expand Scope by Implication

Contributors must not broaden a task merely because related work appears nearby.

Examples of unauthorized expansion include:

- updating an index that was not included in scope;
- changing a normative contract while writing explanatory documentation;
- modifying ProjectStatus because a pull request was opened;
- adding implementation code to support a documentation example;
- renaming paths across the repository because one path looks inconsistent;
- activating a planned capability while documenting it;
- correcting historical evidence that is outside the current subject;
- adding unrelated cleanup to the same commit.

When additional work is genuinely needed, report it as a separate recommended next step.

---

## 6. Preserve Protected Areas

Protected areas require exact authorization from their owning authority.

Common protected areas include:

- repository entry contracts;
- Target Project contracts;
- mission and autonomy documents;
- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- normative AI-DOS workflows;
- command contracts;
- architecture RFCs;
- evidence and provenance records;
- release, activation, or certification state.

A contribution touching a protected area must name the authorization that permits the change.

Silence, convenience, prior access, or technical ability is not authorization.

---

## 7. Keep Product and Target Boundaries Clear

AI-DOS is reusable across Target Projects. A contribution to reusable product truth should therefore avoid:

- Forge AI pull request numbers;
- Forge AI branch names;
- live Forge AI status values;
- Forge AI work-unit identities;
- Target-specific priorities;
- Target-specific approval records;
- provider-specific UI language presented as universal behavior.

Target-specific examples may be included when they are clearly labeled as examples and do not become normative product requirements.

When a contribution is about one Target Project, place it under that Target's truth root rather than under reusable AI-DOS product documentation.

---

## 8. Preserve Provider Neutrality

AI-DOS may be consumed through different Execution Providers.

A provider may be:

- a conversational AI host;
- a coding agent;
- a local CLI adapter;
- an automation runner;
- a hosted runtime;
- another contract-aware execution environment.

Do not turn one provider's interface into universal AI-DOS semantics.

For example, avoid claims such as:

- every provider must use the same command syntax;
- every provider has Git branches or pull requests;
- every provider supports background agents;
- every provider exposes the same tool names;
- every provider resolves identity through GitHub-specific concepts.

Describe the provider-neutral rule first. Label provider-specific examples separately.

---

## 9. Respect the MD-First Model

AI-DOS is MD-first.

Its governing Markdown artifacts are normative system contracts, not secondary commentary around an implementation language.

This means contributors should not assume that:

- TypeScript is the AI-DOS architecture;
- the current CLI is the AI-DOS kernel;
- package metadata defines the product;
- source code owns all behavior;
- passing implementation tests proves Markdown contract consistency;
- implementation-language popularity determines future direction.

Implementation contributions must remain subordinate to the applicable normative contracts and task authorization.

---

## 10. Public Documentation Contributions

Public Product documentation should help readers understand AI-DOS without duplicating normative contracts.

A strong public page should:

- explain its purpose early;
- use accessible language;
- identify the intended reader;
- preserve product and Target boundaries;
- distinguish explanation from authority;
- link to canonical owners for exact behavior;
- remain provider-neutral;
- avoid volatile operational state;
- state validation limits accurately;
- avoid capability activation claims.

Public documentation should not:

- create a new command family;
- redefine a workflow;
- invent a schema;
- declare a capability active;
- claim approval or acceptance;
- copy live Target state;
- convert an example into a universal rule;
- imply that merge equals acceptance;
- present planned behavior as implemented behavior.

---

## 11. Normative Contract Contributions

Changes to normative AI-DOS contracts require greater care than explanatory documentation.

Before proposing a normative change, identify:

- the exact owning artifact;
- whether the change is compatible or breaking;
- dependent contracts;
- required validation scenarios;
- migration or compatibility implications;
- whether a new version or status change is required;
- the Human Governance authority needed;
- protected areas affected.

Do not distribute one semantic change across multiple owners without an explicitly bounded plan.

Do not add a duplicate authority merely because an existing owner is difficult to locate.

---

## 12. Target Project Contributions

A Target Project contribution must preserve Target ownership.

Target-owned changes may include:

- mission clarification;
- planning updates;
- operational state transitions;
- protected-area declarations;
- Target resource declarations;
- evidence records;
- accepted or pending status changes.

These changes require the exact Target authority and mutation procedure that owns them.

Opening, reviewing, or merging a pull request does not automatically authorize a Target state update.

A Target Project must not redefine reusable AI-DOS product behavior inside its own planning or status files.

---

## 13. Implementation Contributions

Implementation work should begin from an authorized behavior, not from repository-language assumptions.

Before editing implementation files, confirm:

- the normative behavior being implemented;
- the exact implementation surface;
- compatibility requirements;
- input and output boundaries;
- error and safe-stop behavior;
- required tests;
- validation claim limits;
- whether generated files may change;
- whether packaging or distribution files are in scope.

Implementation-specific checks validate only the surfaces they exercise.

For example:

- a TypeScript typecheck validates configured TypeScript typing;
- a unit test validates covered behavior;
- a packaging test validates the package path it exercises;
- a CLI smoke test validates the invoked CLI behavior;
- none of these alone proves AI-DOS architectural correctness or Target acceptance.

---

## 14. Validation Contributions

Validation should produce evidence that is specific, reproducible, and bounded.

A validation contribution should state:

- the subject being validated;
- the exact revision or identity when applicable;
- the command or procedure used;
- the environment or assumptions;
- the expected result;
- the observed result;
- the claim supported by the result;
- the claims not supported by the result.

Avoid broad statements such as:

```text
All AI-DOS validation passed.
```

Prefer bounded statements such as:

```text
The configured Markdown link checker completed successfully for docs/AI-DOS/Product/** at commit <revision>. This supports link-resolution claims for the scanned files only.
```

---

## 15. Review Contributions

Review is a non-mutating evaluation of an exact subject.

A useful review should identify:

- the review subject locator;
- the reviewed revision identity;
- the authorized scope;
- the governing authorities;
- findings ordered by severity;
- validation evidence inspected;
- unresolved blockers;
- whether the result is approval-eligible.

Review must not silently change the subject being reviewed.

If the subject changes during review, re-resolve identity and report drift rather than approving an outdated revision.

Review is not approval, merge, acceptance, or continuation.

---

## 16. Correction Contributions

Correction work should remain bound to explicit review findings.

A correction contribution should:

- identify the finding being addressed;
- modify only the necessary scope;
- preserve unrelated accepted behavior;
- add or update validation when required;
- explain why the finding is resolved;
- avoid introducing unrelated cleanup.

If a finding cannot be resolved within the authorized scope, report a blocker instead of broadening the task.

---

## 17. Commit Discipline

Prefer commits that represent one coherent bounded work unit.

A strong commit:

- has a clear objective;
- changes only authorized files;
- avoids unrelated formatting churn;
- uses an intentional message;
- leaves the branch reviewable;
- does not mix state mutation with unrelated implementation;
- does not combine fresh work with review correction unless authorized.

For small documentation work, one branch and one commit often provide the clearest review subject.

This is a contribution pattern, not a universal requirement for every repository or work unit. The active task and repository contract govern.

---

## 18. Pull Request Guidance

A pull request should make the bounded subject easy to inspect.

Include:

- a concise title;
- the objective;
- exact scope;
- changed artifacts;
- protected-area confirmation;
- validation performed;
- validation limits;
- blockers or warnings;
- state-update status;
- one recommended next step.

Use a draft pull request when the contribution is not yet ready for final Human Governance consideration or when draft delivery is required by the task.

Do not claim acceptance merely because checks pass or the pull request is mergeable.

---

## 19. Suggested Pull Request Structure

```markdown
## Summary

Describe the single bounded objective.

## Scope

- list the exact files or artifacts changed
- state what the contribution adds or corrects

## Boundaries

- list protected or excluded areas
- confirm that no unauthorized state or capability change occurred

## Validation

- list each validation command or review procedure
- state what each result proves
- state relevant limits

## Blockers or warnings

- state none, or list unresolved issues

## State update

- state whether no update was made, a recommendation was produced, or an exact authorized mutation occurred

## Recommended next step

- provide exactly one bounded next action
```

---

## 20. Safe-Stop Conditions

Stop before mutation when:

- the contribution owner is unclear;
- required authority is missing;
- the task has no bounded scope;
- multiple incompatible interpretations remain;
- a protected area would be touched without authorization;
- product and Target truth cannot be separated;
- the review subject identity is unstable;
- required validation cannot be performed;
- the available provider lacks the tools needed for the authorized task;
- the requested change would activate a capability by implication;
- a state update is requested without mutation authority.

A safe-stop report should identify:

1. the blocker;
2. the authority or missing input that caused it;
3. what was not changed;
4. the one bounded action needed to resolve it, when deterministically known.

---

## 21. Common Contribution Mistakes

### Treating useful work as authorized work

A good idea is still outside scope unless the active authority permits it.

### Mixing product and Target truth

Reusable behavior and one Target's current state must remain separate.

### Treating implementation as architecture

Existing code is a bounded realization, not automatic product authority.

### Overstating validation

Passing one check does not prove unrelated layers.

### Combining lifecycle stages

Execution, review, merge, approval, acceptance, and continuation are distinct.

### Editing protected files for convenience

Protected areas require exact authorization.

### Copying normative text into public documentation

Public documentation should explain and link rather than create a duplicate contract.

### Adding unrelated cleanup

Keep the contribution reviewable and bounded.

---

## 22. Contribution Readiness Checklist

Before editing:

- [ ] I have read the repository entry contract.
- [ ] I know whether this is AI-DOS product truth, Target truth, or implementation.
- [ ] I have identified the owning authority.
- [ ] The objective and allowed scope are explicit.
- [ ] Protected areas are known.
- [ ] Required validation is known.
- [ ] State-mutation authority is clear.

Before committing:

- [ ] Only authorized files changed.
- [ ] Product and Target boundaries remain intact.
- [ ] Provider-specific details are labeled and bounded.
- [ ] No capability or state was activated by implication.
- [ ] Validation claims match the evidence.
- [ ] Unrelated cleanup was excluded.

Before requesting review:

- [ ] The exact subject and revision are identifiable.
- [ ] The pull request explains objective, scope, boundaries, and validation.
- [ ] Protected-area confirmation is included.
- [ ] Blockers are explicit.
- [ ] The contribution does not claim approval or acceptance.
- [ ] Exactly one recommended next step is stated.

---

## 23. Related Documentation

Public documentation:

- [AI-DOS Product Documentation](../README.md)
- [Getting Started](../GettingStarted/README.md)
- [Concepts](../Concepts/README.md)
- [Tutorials](../Tutorials/README.md)
- [Reference](../Reference/README.md)
- [Commands Reference](../Reference/Commands.md)
- [Workflows Reference](../Reference/Workflows.md)
- [Specifications Reference](../Reference/Specifications.md)
- [Glossary](../Reference/Glossary.md)
- [FAQ](../Reference/FAQ.md)

Normative entry points:

- `AGENTS.md` at the repository root;
- the applicable Target Project contract;
- `docs/AI-DOS/AGENTS.md`;
- the applicable command, workflow, system, review, validation, or architecture authority.

---

## 24. Compact Contribution Model

```text
Read authority
    ↓
Classify the truth surface
    ↓
Resolve one bounded objective
    ↓
Preserve protected areas
    ↓
Edit only authorized scope
    ↓
Validate the exact subject
    ↓
Report evidence and limits
    ↓
Request review
    ↓
Human Governance decides the next lifecycle action
```

Contributing to AI-DOS means improving the system while preserving the authority boundaries that make governed autonomy trustworthy.
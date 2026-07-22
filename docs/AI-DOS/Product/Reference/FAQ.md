# AI-DOS Frequently Asked Questions

This page answers common questions about AI-DOS, its relationship to Target Projects, its governance model, its provider-neutral workflow system, and its public documentation.

It is explanatory documentation. It does not replace canonical AI-DOS contracts, Target Project authority, current operational state, or Human Governance decisions.

## 1. What is AI-DOS?

AI-DOS is a reusable operating model for governed AI-assisted work.

It organizes how AI providers discover authority, resolve context, select bounded work, execute changes, validate results, report evidence, and stop safely when authority is insufficient.

AI-DOS is not the same thing as a single AI agent, prompt, CLI, repository, provider, or Target Project.

## 2. What problem does AI-DOS solve?

AI-DOS addresses recurring problems in AI-assisted development and documentation work, including:

- unclear authority;
- uncontrolled scope expansion;
- provider-specific behavior;
- accidental state mutation;
- weak evidence;
- ambiguous approval;
- confusion between merge and acceptance;
- stale context;
- repeated rediscovery of workflow rules;
- unsafe continuation when no bounded task is authorized.

Its core aim is to make AI work deterministic, bounded, reviewable, and portable across providers.

## 3. Is AI-DOS a product or a project?

AI-DOS is the reusable product.

A Target Project is a project that consumes AI-DOS.

Forge AI is one Target Project. It is not the definition of AI-DOS and must not be used as a substitute for reusable AI-DOS product truth.

## 4. What is a Target Project?

A Target Project is a governed project that uses AI-DOS to perform work.

A Target Project owns its own:

- mission;
- current operational state;
- roadmap;
- development phases;
- protected areas;
- permissions;
- validation requirements;
- project-specific evidence;
- task-specific authority.

AI-DOS defines reusable behavior. The Target Project defines project-specific truth.

## 5. What is Forge AI?

Forge AI is the Target Project in this repository.

Its mission, planning, operational state, evidence, and governance truth live under:

`docs/Projects/ForgeAI/`

Forge AI may use AI-DOS, validate AI-DOS, and provide examples of AI-DOS usage, but it does not redefine AI-DOS product truth.

## 6. Where does AI-DOS product truth live?

Reusable AI-DOS product truth lives under:

`docs/AI-DOS/`

This includes reusable architecture, system contracts, workflows, commands, templates, testing material, product documentation, and specifications.

Current Target Project planning or transient operational state must not be copied into that product surface.

## 7. Why is the AI-DOS and Target Project separation important?

Without the separation, reusable product behavior becomes coupled to one project.

That causes problems such as:

- hard-coded Target paths;
- copied planning state;
- provider instructions that only work in one repository;
- incorrect reuse in future projects;
- confusion about which document has authority;
- accidental changes to Target governance during product documentation work.

The separation allows AI-DOS to remain reusable while each Target Project retains its own authority.

## 8. Is AI-DOS tied to a specific AI provider?

No.

AI-DOS is provider-neutral.

A provider may be ChatGPT, Codex, Claude Code, GitHub Copilot, Grok, another AI host, or a future execution system. Each provider may use a discovery adapter, but the adapter must route to canonical authority rather than restate or alter it.

## 9. What is an Execution Provider?

An Execution Provider is the AI host, agent, tool, or automation that performs an authorized task.

The provider is responsible for:

- discovering authority;
- preserving scope;
- executing only authorized work;
- validating results;
- producing evidence;
- stopping when required.

The provider does not become the governance authority merely because it executes the task.

## 10. What is Human Governance?

Human Governance is the human authority that authorizes, redirects, approves, accepts, or stops work.

Human Governance can provide:

- an explicit bounded task;
- continuation intent;
- an exact next step;
- approval of a reviewed subject;
- permission to change protected or state-bearing artifacts;
- clarification when deterministic resolution is impossible.

AI providers must not invent Human Governance intent.

## 11. What is a bounded work unit?

A bounded work unit is a task with a clear objective and controlled scope.

A strong bounded work unit identifies:

- the exact objective;
- allowed artifacts;
- forbidden artifacts;
- required validation;
- protected areas;
- expected output;
- whether state mutation is permitted;
- whether execution, review, approval, or acceptance is requested.

A bounded task prevents a provider from expanding the work by implication.

## 12. Why do documentation tasks often use one file, one branch, one commit, and one PR?

That structure makes the work easy to inspect and validate.

It provides:

- exact scope visibility;
- simple rollback;
- reviewable evidence;
- clear ownership;
- reduced merge risk;
- less accidental coupling;
- easier comparison against the base branch.

It is a useful bounded-work pattern, not a universal rule for every possible task.

## 13. Does every task require the full governance chain?

No.

An explicitly bounded documentation task usually needs only the authority required to confirm:

- the repository entry contract;
- the AI-DOS and Target boundary;
- the exact file being changed;
- the relevant canonical source material;
- protected-area constraints.

The full operational chain is needed when the provider must derive current state, select the next task, resolve a continuation command, activate work, or update Target state.

## 14. When is ProjectStatus required?

ProjectStatus is required when the task depends on current Target Project operational state.

Examples include:

- “Continue.”
- “What is the next task?”
- “Activate the next work unit.”
- “Record acceptance.”
- “Update current state.”
- “Which candidate controls now?”

A clearly specified public documentation edit that does not touch Target state normally does not need ProjectStatus resolution.

## 15. What is a protected area?

A protected area is an artifact, path, capability, state surface, or semantic boundary that must not be changed without explicit authority.

Protected areas may include:

- ProjectStatus;
- Roadmap;
- DevelopmentPhases;
- Mission documents;
- root entry contracts;
- Target contracts;
- normative specifications;
- capability activation state;
- historical evidence;
- provenance records.

The exact protected areas are defined by canonical Target authority and current state, not by public documentation.

## 16. What is a safe stop?

A safe stop is the required outcome when a provider cannot deterministically resolve exactly one authorized action.

A safe stop should state:

- what could not be resolved;
- why execution would be unsafe;
- what authority is missing;
- what bounded clarification or next action is needed.

A safe stop is not a failure of the system. It is a safety property.

## 17. When should a provider stop instead of continuing?

A provider should stop when:

- no authorized task exists;
- multiple equally eligible actions remain;
- required authority is missing;
- protected areas conflict with the requested scope;
- the reviewed subject cannot be identified;
- the current state is stale or contradictory;
- validation cannot support the requested claim;
- the requested action exceeds granted permissions.

## 18. What is the difference between selection, activation, and execution?

Selection identifies the work unit that should be considered next.

Activation records or establishes that the selected work unit is now active.

Execution performs the authorized changes.

These are separate lifecycle events. Selecting a task does not automatically authorize execution unless the governing command or contract says so.

## 19. What is the difference between completion and acceptance?

Completion means the provider finished the authorized work and produced evidence.

Acceptance means Human Governance formally accepts the reviewed result according to the applicable state-update process.

A completed or merged change is not automatically accepted.

## 20. What is the difference between approval and merge?

Approval is a governance or review decision about a specific reviewed subject.

Merge is a repository operation that integrates a branch or pull request.

They are related but distinct. A pull request can be merged without a formal acceptance record, and approval may occur before merge.

## 21. Does “Approve” mean “continue to the next task”?

No.

Approval should apply only to the exact reviewed subject.

It should not silently:

- select a new task;
- activate a new task;
- execute follow-up work;
- mutate unrelated state;
- infer continuation intent.

Continuation requires separate Human Governance intent.

## 22. What does “Continue” mean?

“Continue” requests state-derived routing.

The provider must resolve current authority and determine whether exactly one eligible next action exists.

If exactly one action is deterministically available, the workflow may proceed according to the applicable contract. If not, the provider must safe-stop.

## 23. What does “Continue. Next Step: X” mean?

It provides explicit continuation intent plus a named next step.

The explicit next step still remains subject to:

- eligibility;
- protected areas;
- authority;
- validation requirements;
- execution boundaries;
- lifecycle separation.

Naming a next step does not override forbidden scope.

## 24. What is an explicit bounded task?

An explicit bounded task directly names the objective and scope.

Example:

```text
Transform docs/AI-DOS/Product/Reference/FAQ.md into the public AI-DOS FAQ.
Modify exactly one file.
Do not change ProjectStatus, Mission, Roadmap, DevelopmentPhases, normative contracts, or implementation.
Validate the changed-file set and open a draft pull request.
```

Because the task is already explicit, the provider should not replace it with a different state-derived candidate.

## 25. What is a state-derived task?

A state-derived task is resolved from current Target Project authority rather than directly named by the user.

It may require reading:

- ProjectStatus;
- DevelopmentPhases;
- Roadmap;
- Task Planner rules;
- Task Generation rules;
- task-specific authority.

State-derived resolution must produce exactly one authorized action or stop safely.

## 26. What is Resolved Target Context?

Resolved Target Context is the provider’s authoritative understanding of the current Target Project environment after following the required resolution process.

It may include:

- Target identity;
- authority locations;
- source scope;
- protected areas;
- permissions;
- validation requirements;
- current operational state;
- active task or authorized next action.

Public documentation explains the concept but does not provide the current Forge AI context.

## 27. What is Target Repository Resolution?

Target Repository Resolution is the process of locating and interpreting the Target Project’s declarations and authority surfaces.

It allows AI-DOS to operate across different repositories without hard-coding one Target’s filenames or planning structure into reusable product behavior.

## 28. Why should reusable AI-DOS documentation avoid hard-coded Forge AI details?

Forge AI details may change and may not apply to another Target Project.

Reusable product documentation should not embed:

- current Forge AI phase;
- current pull request number;
- current task ID;
- transient commit SHA;
- active work-unit count;
- Target-only roadmap status;
- Target-only approval state.

Such information belongs in Target-owned operational or historical artifacts.

## 29. Can Forge AI be used as an example in AI-DOS documentation?

Yes, when clearly labeled as an example.

The example must not be presented as a universal requirement or canonical product truth.

A good example separates:

- reusable AI-DOS rule;
- Forge AI-specific application;
- current operational state;
- historical evidence.

## 30. What is provider neutrality?

Provider neutrality means the workflow and authority model do not depend on one AI host.

Provider-neutral material should avoid making a specific provider’s:

- command syntax;
- UI behavior;
- internal memory;
- background execution model;
- branch naming convention;
- review interface;
- proprietary capability

into a universal AI-DOS requirement.

## 31. What is a provider adapter?

A provider adapter helps a specific AI host discover canonical AI-DOS or Target authority.

An adapter may point to the canonical governance skill or entry contract, but it must not become an independent source of governance semantics.

Adapters should remain thin, current, and non-authoritative.

## 32. What happens if an adapter disagrees with canonical authority?

Canonical authority governs.

The adapter should be corrected through a bounded work unit. Until corrected, the provider must follow the canonical source and report the inconsistency if it affects execution.

## 33. What is normative documentation?

Normative documentation defines required behavior, authority, constraints, schemas, or lifecycle rules.

It may use language such as:

- must;
- shall;
- required;
- prohibited;
- authoritative;
- canonical.

Normative documents should be changed only through explicitly authorized work.

## 34. What is explanatory documentation?

Explanatory documentation helps readers understand and use the system.

Examples include:

- tutorials;
- guides;
- reference overviews;
- FAQ pages;
- examples;
- conceptual introductions.

Explanatory documentation should reference normative owners rather than redefine them.

## 35. Can public documentation change system semantics?

No.

A public guide may clarify or summarize existing semantics, but it must not silently create new rules, permissions, lifecycle states, validation claims, or architecture.

A semantic change belongs in the applicable canonical contract or specification and requires the proper authorization.

## 36. What is a validation claim boundary?

A validation claim boundary limits a report to what the performed validation actually proves.

For example:

- a changed-file comparison proves the changed-file set;
- a Markdown link check proves only the links checked;
- a test run proves only the tested behavior in that environment;
- a review proves only the reviewed subject at the reviewed revision;
- a green CI result does not prove untested architectural correctness.

Providers must not overstate validation.

## 37. What evidence should a completion report include?

A useful completion report should include:

- objective;
- scope;
- changed artifacts;
- branch or work identity;
- commit identity when applicable;
- validation performed;
- validation results;
- protected-area confirmation;
- blockers or limitations;
- exactly one recommended next step when required.

## 38. Why is reviewed-subject identity important?

Approval and review must apply to an exact subject.

The reviewed subject may include:

- pull request number;
- branch;
- commit SHA;
- file set;
- patch;
- document revision;
- generated artifact.

If the subject changes after review, the prior review may no longer be sufficient.

## 39. What is identity drift?

Identity drift occurs when the reviewed or authorized subject changes without the review or authorization being refreshed.

Examples include:

- new commits after review;
- changed files after approval;
- rebasing onto a materially different base;
- replacing a document after sign-off;
- reviewing one branch and merging another.

Identity drift must be detected and handled explicitly.

## 40. Why are draft pull requests used for documentation work?

A draft pull request creates a reviewable boundary without claiming readiness or acceptance.

It provides:

- an exact subject;
- a visible diff;
- branch and commit identity;
- review comments;
- CI context;
- a place for bounded corrections.

Draft status does not itself determine governance state.

## 41. Does a green CI check mean the work is accepted?

No.

CI provides validation evidence. It does not replace Human Governance approval or acceptance.

The meaning of a green check is limited to the checks that ran and the claims those checks support.

## 42. Can an AI provider update ProjectStatus after a merge?

Only when explicitly authorized by Human Governance or uniquely derivable under the canonical Target contract.

A merge alone does not automatically authorize ProjectStatus mutation.

## 43. Why should ProjectStatus not be updated during ordinary public documentation work?

Public documentation work usually does not change Target operational state.

Updating ProjectStatus would create unnecessary coupling and could falsely imply:

- capability activation;
- work-unit acceptance;
- roadmap advancement;
- phase completion;
- state transition.

State-bearing artifacts should change only when the work actually requires and authorizes that transition.

## 44. Can AI-DOS be used outside software development?

The governance model is designed to be reusable, but applicability depends on the Target Project and available contracts.

The concepts of bounded work, authority, protected areas, validation, review identity, evidence, and safe stop can apply to documentation, analysis, operations, research, and other governed work.

The current repository materials should be consulted for the exact implemented and documented scope.

## 45. Is AI-DOS currently a runtime, a documentation system, or both?

AI-DOS includes documented architecture, contracts, workflows, commands, templates, tests, and implementation surfaces.

Public documentation must distinguish:

- documented design;
- accepted specification;
- implemented behavior;
- validated behavior;
- future intent.

The existence of a document does not by itself prove runtime implementation.

## 46. What does MD-first mean?

MD-first means Markdown is treated as a primary source format for product truth, contracts, workflows, specifications, and potentially executable or compilable system definitions.

MD-first does not mean every Markdown statement is automatically executable, validated, accepted, or authoritative.

Authority, schema, implementation, and validation still matter.

## 47. Does AI-DOS already compile Markdown into a kernel?

This FAQ does not claim that such a capability is implemented or active.

A future Markdown-to-kernel path may be part of architectural intent, but public documentation must not describe it as operational without canonical implementation and validation evidence.

## 48. What is the difference between architecture and implementation?

Architecture describes system structure, responsibilities, boundaries, contracts, and intended interactions.

Implementation is the code or executable mechanism that realizes some part of that architecture.

An architectural document may exist before implementation. Implementation may also lag behind or only partially satisfy a specification.

## 49. What is an RFC?

An RFC is a document used to propose, analyze, or define architecture and system behavior.

Its authority depends on its status and the governing document family.

A draft RFC should not be treated as accepted or active merely because it is detailed.

## 50. What do statuses such as Draft, Active, Accepted, Pending, and Blocked mean?

Their exact meaning is defined by the owning canonical authority.

In general:

- **Draft** indicates unfinished or unaccepted material;
- **Active** indicates currently applicable behavior or work;
- **Accepted** indicates formal acceptance under the governing process;
- **Pending** indicates unresolved or incomplete work;
- **Blocked** indicates work cannot proceed until a stated condition is resolved.

Readers should verify the exact status semantics in the relevant specification or Target contract.

## 51. How should conflicting documents be handled?

Use the declared authority hierarchy.

A safe conflict-resolution process is:

1. identify each document’s owner and status;
2. distinguish product truth from Target truth;
3. distinguish normative from explanatory material;
4. follow explicit precedence rules;
5. prefer current canonical authority over adapters, summaries, examples, and stale copies;
6. stop if the conflict prevents deterministic execution.

Do not silently reconcile incompatible sources.

## 52. Can historical reports be edited to match current terminology?

Usually not.

Historical reports and evidence may preserve the terminology and state that existed when they were created.

Changing them can damage provenance. A separate correction, annotation, or migration artifact is often safer unless exact authority permits editing the historical record.

## 53. What is evidence provenance?

Evidence provenance records where evidence came from and what subject, revision, command, environment, or validation produced it.

Good provenance helps reviewers determine:

- what was tested;
- when it was tested;
- which revision was tested;
- which provider produced the evidence;
- whether the evidence still applies.

## 54. What should happen when validation cannot be run?

The provider should report the limitation honestly.

It should distinguish:

- validation not applicable;
- validation unavailable;
- validation attempted but blocked;
- validation failed;
- validation partially completed.

It must not replace missing evidence with an unsupported claim.

## 55. Can providers use different tools and still produce equivalent results?

Yes, when they preserve the same authority, scope, lifecycle, validation, and reporting requirements.

Tool-specific execution may differ, but the governed outcome should remain equivalent and reviewable.

## 56. Should providers reveal internal chain-of-thought?

AI-DOS requires objective evidence and clear reporting, not private internal reasoning traces.

A provider should explain decisions, cite authority, report validation, and state uncertainty without exposing private hidden reasoning.

## 57. How should documentation link to canonical specifications?

Documentation should identify the owning canonical artifact and describe the relationship accurately.

A good link should make clear whether the target is:

- normative authority;
- architecture;
- workflow;
- command definition;
- template;
- checklist;
- example;
- report;
- Target-specific state.

Public documentation should avoid copying large normative sections when a direct reference is sufficient.

## 58. What should a documentation author verify before opening a PR?

Verify that:

- the page is explanatory rather than accidentally normative;
- AI-DOS and Target truth remain separated;
- no transient Forge AI state was copied into reusable docs;
- terminology matches canonical owners;
- status claims are supported;
- links point to the right authority class;
- protected areas were not changed;
- the changed-file set matches the bounded task;
- validation claims do not exceed evidence;
- the PR body states boundaries clearly.

## 59. What are common mistakes when writing AI-DOS documentation?

Common mistakes include:

- presenting Forge AI as AI-DOS itself;
- copying ProjectStatus into product documentation;
- treating a draft RFC as active behavior;
- describing future architecture as implemented;
- making provider-specific behavior universal;
- combining approval, merge, acceptance, and continuation;
- changing normative meaning inside a public guide;
- overstating validation;
- editing historical evidence for consistency;
- expanding a one-file task into a documentation-wide cleanup.

## 60. Where should a new reader start?

A useful reading path is:

1. `docs/AI-DOS/Product/README.md`
2. `docs/AI-DOS/Product/Concepts/`
3. `docs/AI-DOS/Product/Tutorials/`
4. `docs/AI-DOS/Product/Reference/README.md`
5. `docs/AI-DOS/Product/Reference/Commands.md`
6. `docs/AI-DOS/Product/Reference/Workflows.md`
7. `docs/AI-DOS/Product/Reference/Specifications.md`
8. `docs/AI-DOS/Product/Reference/Glossary.md`
9. this FAQ

For exact requirements, continue from the public documentation into the linked canonical AI-DOS authority.

## 61. Where should a provider start before doing repository work?

A provider should begin with the repository’s declared entry contract and follow the discovery order it specifies.

The provider must not assume that a public FAQ, tutorial, adapter, prior session, or remembered path replaces current canonical authority.

## 62. How should someone ask AI-DOS to perform a documentation task?

Use a concrete bounded instruction.

Example:

```text
Transform docs/AI-DOS/Product/Reference/FAQ.md into the public AI-DOS FAQ.
Modify exactly that file.
Keep the page explanatory and provider-neutral.
Reference canonical authority rather than redefining it.
Do not modify ProjectStatus, Mission, Roadmap, DevelopmentPhases, Target contracts, normative AI-DOS contracts, implementation, or capability state.
Validate the changed-file set and open a draft pull request.
```

## 63. How should someone request a review?

Identify the exact subject.

Example:

```text
Review PR #123 only at its current head.
Do not modify files, branches, pull-request state, or Target state.
Report findings with severity, evidence, and exact affected locations.
```

## 64. How should someone request review fixes?

Limit the task to accepted findings.

Example:

```text
Address only the actionable findings from the latest review of PR #123.
Preserve the original bounded objective and changed-file boundary.
Do not introduce unrelated improvements.
Re-run the applicable validation and report the new head identity.
```

## 65. How should someone request approval?

Name the reviewed subject and avoid continuation language.

Example:

```text
HUMAN GOVERNANCE — Approve PR #123 at reviewed head <SHA>.
Record acceptance only if explicitly authorized by the applicable Target process.
Do not select, activate, or execute the next task.
```

## 66. How should someone request continuation?

Use either state-derived or explicit continuation.

State-derived:

```text
HUMAN GOVERNANCE — Continue.
```

Explicit:

```text
HUMAN GOVERNANCE — Continue. Next Step: <bounded next action>.
```

The provider must still respect current authority and safe-stop rules.

## 67. Can multiple documentation PRs be open at the same time?

Yes, if each remains independently bounded and their base relationships, conflicts, and review identities are clear.

However, concurrent PRs may become behind the default branch as earlier PRs merge. The provider should report this accurately and avoid claiming a branch is current when it is not.

## 68. Does being behind the base branch invalidate a documentation PR?

Not automatically.

The important questions are:

- whether the changed-file set remains correct;
- whether there are conflicts;
- whether the reviewed subject changed;
- whether the base advancement affects semantics;
- whether validation should be repeated after update or rebase.

## 69. Should every public documentation page be very long?

No.

Length should follow the page’s purpose.

A reference hub may be compact, while a glossary or FAQ may be extensive. The key requirements are correctness, navigability, authority clarity, and usefulness.

## 70. Who owns exact AI-DOS semantics?

The canonical AI-DOS contracts and specifications own exact product semantics.

Public documentation helps users find and understand those semantics. It does not replace them.

Target-specific semantics and current state remain owned by the Target Project’s canonical authority.

## Related Public Documentation

- [Reference Hub](README.md)
- [Commands](Commands.md)
- [Workflows](Workflows.md)
- [Specifications](Specifications.md)
- [Glossary](Glossary.md)
- [Tutorials](../Tutorials/README.md)
- [Concepts](../Concepts/README.md)

## FAQ Maintenance Checklist

Before changing this FAQ, confirm that:

- answers remain explanatory;
- normative rules are not redefined;
- AI-DOS and Target Project truth remain separate;
- transient operational state is absent;
- implementation claims are supported;
- future intent is labeled as future intent;
- provider neutrality is preserved;
- lifecycle terms match canonical usage;
- validation claims remain bounded;
- links resolve to the intended documentation class;
- protected areas remain unchanged;
- the update has an explicit bounded objective.

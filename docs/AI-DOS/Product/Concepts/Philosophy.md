# AI-DOS Philosophy

AI-DOS is built on a simple premise: AI-assisted work becomes reliable only when authority, context, scope, validation, and evidence are treated as first-class system concerns.

The product is not designed around the idea that a capable model should be trusted to infer everything it needs from a prompt, nearby files, prior conversation, or repository activity. It is designed around governed execution: the right work, for the right Target Project, under the right authority, within an explicit boundary, with evidence that can be reviewed by a human.

This page explains the public philosophy behind AI-DOS. It is explanatory only. Normative behavior remains in the applicable AI-DOS contracts, Target Project contracts, and Human Governance decisions.

## Governing principle

```text
Capability does not create authority.
Context does not create permission.
Execution does not create acceptance.
Evidence supports judgment; it does not replace Human Governance.
```

AI-DOS separates these concerns so that technical ability cannot silently become organizational permission.

## Human authority remains final

AI-DOS is designed to increase the quality and speed of AI-assisted work without removing the human authority boundary.

Human Governance remains responsible for decisions that a provider must not invent, including:

- strategic direction;
- explicit authorization;
- approval or rejection;
- protected-capability activation;
- acceptance of evidence;
- conflict resolution when contracts cannot produce one valid outcome;
- permission to change protected governance, planning, release, or security surfaces.

AI-DOS may help resolve context, prepare bounded work, coordinate procedures, execute authorized tasks, validate declared surfaces, and report evidence. None of these capabilities transfer final authority to the system or provider.

The philosophy is not “human in every keystroke.” It is “human authority at every consequential boundary.”

## Governed autonomy

AI-DOS does not treat autonomy and governance as opposites.

Useful autonomy means that an execution provider can perform substantial work without requiring the human to restate every mechanical step. Governed autonomy means that this freedom exists only inside a declared boundary.

```text
Human Governance defines the boundary
            ↓
AI-DOS resolves and preserves the boundary
            ↓
Execution Provider operates inside the boundary
            ↓
Evidence returns to Human Governance
```

A provider may be delegated freedom over implementation details while remaining constrained by:

- the authorized objective;
- allowed and forbidden scope;
- Target-owned permissions;
- protected areas;
- required validation;
- completion conditions;
- evidence expectations;
- safe-stop conditions.

The system seeks maximum useful autonomy inside minimum sufficient authority.

## Explicit context over inferred context

A prompt is rarely the complete source of truth for governed work.

The intended Target Project may have its own mission, planning, live state, protected areas, resources, permissions, validation requirements, and lifecycle rules. These cannot safely be reconstructed from model memory, repository proximity, recent commits, or conventional project layouts.

AI-DOS therefore resolves context before mutation.

```text
Invocation
    ↓
Target resolution
    ↓
Resolved Target Context
    ↓
Applicable AI-DOS contracts
    ↓
Bounded execution
```

The preferred outcome is not the most plausible interpretation. It is the one supported by declared authority.

Where the required context is missing, inaccessible, contradictory, ambiguous, or outside the Target boundary, the correct result may be a safe-stop.

## Product truth and Target truth remain separate

AI-DOS is reusable only if it does not absorb the transient truth of the projects that use it.

```text
AI-DOS product truth
    reusable contracts, behavior, workflows, and system semantics

Target Project truth
    mission, planning, state, resources, permissions, and evidence
```

The Target Project owns its own truth. AI-DOS consumes the resolved context needed for execution without converting that project-specific information into universal product behavior.

This separation prevents several forms of coupling:

- one Target Project's filenames becoming mandatory for every Target;
- one project's roadmap becoming product architecture;
- one project's live status becoming reusable workflow logic;
- one repository provider becoming a universal dependency;
- one implementation language becoming the definition of the system.

Forge AI may develop and self-apply AI-DOS, but Forge AI remains one Target Project rather than the universal model for all Targets.

## Contracts before conventions

AI-DOS favors explicit contracts over informal convention.

Conventions are useful only when all participants interpret them the same way. AI-assisted systems operate across different models, tools, hosts, repositories, and organizational contexts, so implicit convention is often fragile.

Contracts provide durable interfaces for:

- ownership;
- authority;
- inputs and outputs;
- scope;
- routing;
- validation;
- evidence;
- lifecycle transitions;
- safe-stop behavior.

A contract does not need to encode every implementation detail. It must encode enough structure to prevent important decisions from being invented during execution.

## Markdown as a normative system surface

AI-DOS is MD-first.

Its governing Markdown artifacts are not secondary explanations around a programming-language implementation. They are the canonical system contracts that define responsibilities, boundaries, and required behavior.

This approach supports:

- human readability;
- provider neutrality;
- repository embedding;
- reviewable authority changes;
- implementation independence;
- future translation into executable or machine-verifiable forms.

MD-first does not currently mean that every contract is directly executable. It means that implementation must remain subordinate to the governing contracts rather than becoming an accidental source of product truth.

A CLI, adapter, parser, runtime, package, test suite, or future kernel may realize part of AI-DOS. None of these implementation surfaces may silently redefine the product.

## Provider neutrality

AI-DOS is not built around one model vendor, agent host, editor, repository provider, protocol, or tool environment.

Execution Providers are replaceable capability surfaces. They consume contracts and perform authorized work, but they do not own:

- AI-DOS product truth;
- Target Project truth;
- Human Governance authority;
- lifecycle approval;
- evidence acceptance.

Provider neutrality does not require every provider to expose identical features. It requires AI-DOS to distinguish capability from authority and to choose only routes that preserve the active execution contract.

A provider limitation should be reported as a limitation or blocker. It must not be hidden by inventing successful execution, validation, or access.

## Minimum sufficient context

More context is not automatically better.

Large undifferentiated context can introduce:

- stale authority;
- conflicting instructions;
- irrelevant implementation detail;
- accidental scope expansion;
- unnecessary token use;
- false confidence created by volume rather than relevance.

AI-DOS therefore favors minimum sufficient context: enough authoritative information to execute the bounded task correctly, but not every document that might be related.

Context should be selected by authority and task relevance, not by proximity or convenience.

## Bounded work over open-ended activity

AI-DOS organizes mutation around bounded work units.

A bounded work unit identifies one explicit objective and the limits required to complete it safely. This protects against the common failure mode where an agent discovers adjacent issues and expands the task without permission.

A strong work unit typically identifies:

- objective;
- authority and owner;
- allowed artifacts;
- forbidden scope;
- required resources;
- dependencies;
- protected areas;
- validation requirements;
- completion condition;
- evidence requirements;
- stop conditions.

Bounded work does not prohibit discovery. A provider may report additional findings or recommend one next action. It simply separates discovery from authorization.

## Minimal mutation

AI-DOS prefers the smallest mutation that fully satisfies the authorized objective.

Minimality is not merely fewer lines or fewer files. It means avoiding unnecessary changes to:

- objectives;
- artifacts;
- authorities;
- lifecycle state;
- protected areas;
- capabilities;
- external systems.

A small but incomplete change is not minimal. A broad change that includes unrelated cleanup is not minimal either.

The desired result is the narrowest complete change that can be validated and reviewed independently.

## Safe-stop is a correct result

AI systems are often rewarded for producing an answer or taking an action even when the available authority is incomplete.

AI-DOS rejects that pressure.

A safe-stop is the correct outcome when execution would require the provider to:

- invent authority;
- choose arbitrarily between valid candidates;
- cross a protected boundary;
- rely on inaccessible required resources;
- reinterpret conflicting ownership;
- claim unsupported validation;
- mutate state without an owning transition;
- continue after reviewed-subject identity has drifted.

```text
No uniquely authorized action
            ↓
Report the blocker
            ↓
Stop before mutation
```

Safe-stop is not passivity. It is a governance mechanism that preserves integrity when progress cannot be justified.

## Evidence over confidence

Model confidence is not evidence.

AI-DOS expects completed work to report what actually happened, including:

- authorities and resources consumed;
- objective and scope;
- changed artifacts or external resources;
- validation performed;
- warnings, failures, and skipped checks;
- protected-area confirmation;
- blockers and unresolved risks;
- completion status;
- lifecycle status;
- recommended or authorized next action.

Evidence must be attributable and scoped to the surface it supports.

A successful package test may validate that package surface. It does not automatically validate architecture, governance, Markdown consistency, Target acceptance, certification, or release readiness.

The philosophy is to make claims no broader than the evidence.

## Lifecycle stages remain distinct

AI-DOS keeps major lifecycle events separate.

```text
Execution
    ↓
Validation
    ↓
Review
    ↓
Human Governance approval
    ↓
Certification
    ↓
Promotion
    ↓
Release
```

Not every workflow uses every stage, but no stage silently grants the authority of another.

Examples:

- completed work is not automatically validated;
- passed validation is not automatically approved;
- an approving review is not Human Governance acceptance;
- a merged pull request is not universal product certification;
- certification is not necessarily release authorization;
- release does not retroactively authorize the work that produced it.

This separation makes state transitions explicit and reviewable.

## Recommendations do not become actions

AI-DOS supports analysis, planning, and recommendations without treating them as mutation authority.

```text
Recommended
    ≠
Selected
    ≠
Activated
    ≠
Executed
    ≠
Accepted
```

A recommendation may be technically sound and still require a separate selection, activation, or approval decision.

This allows providers to be helpful without silently converting advice into action.

## Ownership follows the question

Different artifacts own different kinds of truth.

The philosophy can be summarized as:

> The authority that owns the question governs the answer, subject to Human Governance.

Examples:

- AI-DOS product contracts govern reusable workflow behavior;
- Target contracts govern Target-owned context and boundaries;
- mission documents govern strategic purpose;
- planning documents govern declared capability direction;
- live status authorities govern current operational values;
- validation contracts govern validation criteria;
- evidence records preserve attributable proof;
- Human Governance governs final authorization and approval decisions.

File location, recency, model confidence, or implementation convenience does not create ownership.

## Self-application without self-authorization

AI-DOS may be used to help develop and improve AI-DOS itself.

Self-application is useful because it exposes the product to its own contracts, workflows, evidence requirements, and failure modes. However, self-application must not become self-authorization.

The system must not treat its ability to improve itself as permission to:

- alter its own governing authority without approval;
- activate protected capabilities;
- reinterpret Human Governance intent;
- rewrite historical evidence;
- skip validation or review;
- declare itself certified or released.

Self-hosting remains governed by the same authority and evidence principles as any other Target work.

## Implementation remains replaceable

AI-DOS distinguishes product architecture from current implementation surfaces.

The presence of TypeScript, JavaScript, Node.js, npm, a CLI, tests, or CI demonstrates bounded implementation and distribution work. It does not establish that these technologies define the product or must be used forever.

Implementation is allowed to evolve as long as it preserves the governing contracts and remains inside authorized work.

This keeps the product open to future forms, including different runtimes, provider adapters, machine-readable contracts, validation engines, or an MD-to-executable direction, without pretending those capabilities already exist.

## Transparency over simulated certainty

A trustworthy provider must distinguish among:

- what was read;
- what was inferred;
- what was executed;
- what was validated;
- what remains uncertain;
- what was blocked;
- what still requires Human Governance.

AI-DOS prefers an honest blocker or scoped claim over a persuasive but unsupported success report.

The product philosophy is not that errors can be eliminated. It is that authority, execution, and evidence can be structured so errors are easier to detect, contain, and correct.

## One bounded next step

Completion reports should end with one bounded next recommendation when further work is useful.

This avoids turning a completed task into an uncontrolled backlog or a chain of implied authorizations.

The next recommendation should be:

- directly related to the completed objective;
- small enough to review independently;
- clearly separated from work already authorized;
- subject to the same authority and protected-area rules as any other task.

The recommendation is not executed unless separately authorized or uniquely derived through an applicable contract.

## Summary

```text
Human Governance remains final.
Authority is resolved, not inferred.
AI-DOS product truth stays separate from Target truth.
Contracts govern where conventions are insufficient.
Markdown is the normative system surface.
Providers are replaceable and capability-bounded.
Context is authoritative and minimally sufficient.
Work is bounded and mutation is minimal.
Safe-stop is a correct outcome.
Evidence is stronger than confidence.
Lifecycle stages do not collapse into one another.
Recommendations do not become actions automatically.
Self-application does not create self-authorization.
Implementation remains subordinate and replaceable.
```

Together, these principles define AI-DOS as a provider-neutral, Target-aware, MD-first operating model for governed AI-assisted work.

For normative authority, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, the applicable System, command, workflow, validation, review, and governance contracts, the invoked Target Project contract, and explicit Human Governance decisions.

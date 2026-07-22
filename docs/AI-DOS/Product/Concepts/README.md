# AI-DOS Concepts

This section explains the ideas readers need in order to understand AI-DOS as a governed operating system for AI-assisted work.

The pages here are public, explanatory documentation. They help readers form the correct mental model, choose a useful reading path, and distinguish concepts that are easy to collapse together. They do not replace the normative AI-DOS contracts, Target Project contracts, or Human Governance decisions that govern actual execution.

## Start here

New readers should begin with:

1. [What Is AI-DOS?](WhatIsAIDOS.md) — the product-level introduction.
2. [Philosophy](Philosophy.md) — the design principles behind the product.
3. [Core Concepts](CoreConcepts.md) — the main operating concepts and how they relate.

After that, continue with the pages most relevant to your role.

## Choose a reading path

### Product and architecture readers

Use this path to understand what AI-DOS is and why its boundaries matter:

1. [What Is AI-DOS?](WhatIsAIDOS.md)
2. [Philosophy](Philosophy.md)
3. [Core Concepts](CoreConcepts.md)
4. [Authority Model](AuthorityModel.md)
5. [Terminology](Terminology.md)

This path explains the product identity, MD-first design, provider neutrality, product-versus-Target separation, authority domains, bounded work, evidence, and lifecycle boundaries.

### Human governors and project owners

Use this path to understand how human authority interacts with AI-DOS:

1. [Human Governance](HumanGovernance.md)
2. [Authority Model](AuthorityModel.md)
3. [Core Concepts](CoreConcepts.md)
4. [Terminology](Terminology.md)

This path focuses on final decision authority, bounded delegation, approvals, protected areas, evidence, state transitions, and safe-stop behavior.

### Execution-provider implementers

Use this path to understand the conceptual boundaries a compatible provider must preserve:

1. [What Is AI-DOS?](WhatIsAIDOS.md)
2. [Core Concepts](CoreConcepts.md)
3. [Authority Model](AuthorityModel.md)
4. [Human Governance](HumanGovernance.md)
5. [Terminology](Terminology.md)

This path emphasizes Resolved Target Context, capability versus authority, explicit scope, provider neutrality, validation claims, evidence, and the difference between recommendation and authorized mutation.

### Reviewers and auditors

Use this path before evaluating AI-DOS-governed work:

1. [Authority Model](AuthorityModel.md)
2. [Human Governance](HumanGovernance.md)
3. [Terminology](Terminology.md)
4. [Core Concepts](CoreConcepts.md)

This path helps preserve distinctions between completion, validation, review, approval, acceptance, certification, promotion, and release.

## Concept map

```text
Human Governance
        ↓ supplies final authority and bounded intent
Target Project
        ↓ supplies project-specific truth and permissions
Resolved Target Context
        ↓ enters reusable AI-DOS contracts
AI-DOS
        ↓ routes bounded work
Execution Provider
        ↓ performs authorized execution and validation
Evidence
        ↓ supports review and lifecycle decisions
Human Governance
```

The individual pages explain each part of this model and the boundaries between them.

## Pages in this section

### [What Is AI-DOS?](WhatIsAIDOS.md)

A concise product introduction covering:

- what AI-DOS is;
- why it exists;
- what "operating system" means in this context;
- how Human Governance, Target Projects, AI-DOS, and Execution Providers relate;
- what AI-DOS does and does not own.

Read this first when you need the complete product picture.

### [Philosophy](Philosophy.md)

The design principles behind AI-DOS, including:

- governed autonomy;
- explicit context over assumption;
- MD-first and contract-first design;
- provider neutrality;
- minimum sufficient context;
- bounded work and minimal mutation;
- evidence over confidence;
- safe-stop as a correct outcome;
- implementation replaceability.

Read this when evaluating whether a design or workflow is aligned with the product's intent.

### [Core Concepts](CoreConcepts.md)

A structured explanation of the main operating concepts, including:

- Human Governance;
- Target Projects;
- Target Context;
- AI-DOS product truth;
- Execution Providers;
- authority and scope;
- workflows and commands;
- validation, evidence, and lifecycle separation;
- safe-stop behavior.

Read this as the central conceptual reference.

### [Human Governance](HumanGovernance.md)

Explains the role of the human as final decision authority, including:

- intent and authorization;
- bounded delegation;
- approval and acceptance;
- protected-capability activation;
- evidence-based decisions;
- provider capability versus permission;
- governance-related safe stops.

Read this when deciding who may authorize, approve, accept, or advance work.

### [Authority Model](AuthorityModel.md)

Explains how AI-DOS resolves authority across:

- Human Governance;
- reusable AI-DOS product contracts;
- Target Project truth;
- Execution Providers;
- artifact ownership;
- explicit and deterministically derived authority;
- protected areas and bounded delegation.

Read this when determining whether an action is permitted, not merely possible.

### [Terminology](Terminology.md)

A glossary of recurring AI-DOS terms and critical distinctions.

Use it when reading product documents, reviewing work, or resolving terms such as:

```text
Capability ≠ authority
Candidate ≠ selection
Selection ≠ activation
Activation ≠ execution
Completion ≠ validation
Validation ≠ review
Review ≠ Human Governance approval
Approval ≠ certification
Promotion ≠ release
```

## The boundaries to remember

The concepts section repeatedly reinforces several boundaries because collapsing them changes the meaning of the system.

### Product truth is not Target truth

AI-DOS owns reusable product contracts, workflows, and system semantics.

A Target Project owns its mission, planning, current state, resources, permissions, protected areas, and accepted evidence.

AI-DOS consumes Target-owned context without converting one Target Project's truth into universal product behavior.

### Capability is not authority

A provider may be technically capable of editing a file, using an API, merging a branch, or changing external state while lacking authorization to perform that action.

Technical access never replaces resolved authority.

### Execution is not acceptance

Completing work does not automatically validate, review, approve, accept, certify, promote, or release it.

Each lifecycle stage has its own owner, conditions, evidence, and authority.

### Advice is not mutation

A recommendation may describe a useful next action without selecting, activating, executing, or accepting that action.

AI-DOS preserves this distinction so analysis does not silently become permission.

### Safe-stop is not failure

When required context, authority, scope, identity, or evidence cannot be resolved, stopping is the correct governed result.

Safe-stop protects the system from substituting model preference or repository convention for declared authority.

## Explanatory versus normative documentation

The pages in this directory explain the product in accessible language.

For actual execution, the applicable normative sources govern. These may include:

- the invoked Target Project contract and Target-owned operational authorities;
- `docs/AI-DOS/AGENTS.md`;
- `docs/AI-DOS/AIFramework.md`;
- `docs/AI-DOS/AIOrchestrator.md`;
- `docs/AI-DOS/AgentSystemPrompt.md`;
- the applicable command, workflow, checklist, validation, review, and system contracts;
- explicit Human Governance decisions.

When an explanatory page and a normative authority appear to differ, resolve the matter from the owning normative authority rather than treating this section as an execution contract.

## Suggested next section

After completing the concepts pages, continue to the product's getting-started and usage documentation for practical application. Return here whenever a workflow depends on authority, ownership, lifecycle, evidence, or Target-boundary distinctions.
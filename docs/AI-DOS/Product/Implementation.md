# AI-DOS Implementation Surfaces

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work. Its Markdown contracts define product behavior and authority. Executable code, command-line tools, adapters, tests, packaging, and automation are implementation surfaces that consume or support those contracts; they do not replace them.

This page explains how to interpret implementation artifacts around AI-DOS. It is publication-oriented guidance. Exact behavior remains owned by the applicable normative AI-DOS contracts, Target Project authorities, and bounded implementation tasks.

---

## 1. Purpose

Use this page to answer questions such as:

- What counts as an AI-DOS implementation surface?
- Does the current TypeScript CLI define the AI-DOS engine or kernel?
- How should code be mapped to Markdown contracts?
- What can implementation-specific tests prove?
- How should providers remain replaceable?
- How should runtime data remain separate from Target Project truth?
- What must be documented when a new executable surface is added?

The central rule is:

```text
Normative Markdown contracts define the system.
Implementation surfaces realize bounded behavior.
Validation proves only the exercised surface.
Human Governance controls authorization and lifecycle decisions.
```

---

## 2. Implementation Is Subordinate to Product Authority

AI-DOS does not derive its identity or architecture from the language used by a current executable artifact.

The presence of:

- TypeScript;
- JavaScript;
- Node.js;
- npm;
- a `package.json` file;
- a `src/` directory;
- compiled output;
- tests;
- command-line entry points;
- CI workflows;

means only that one or more bounded implementation surfaces exist.

It does not establish that:

- AI-DOS is fundamentally a TypeScript or Node.js product;
- the current CLI is the AI-DOS engine;
- executable code overrides Markdown contracts;
- every contract is already implemented;
- future work should use the current language;
- passing code-level checks proves product-wide correctness.

Implementation technology is replaceable. Product authority is not inferred from implementation convenience.

---

## 3. Current Repository Implementation Surface

The current repository includes a bounded local CLI and supporting TypeScript surfaces.

At the package level, the repository declares:

- a CommonJS package;
- a compiled entry at `dist/main.js`;
- a CLI command named `forge-ai`;
- TypeScript development and build scripts;
- bounded installation, execution, offline, uninstall, and rollback validation scripts.

The package description itself classifies this as a bounded distribution and bootstrap surface rather than the AI-DOS architectural or normative definition.

The current CLI surface supports a small set of behaviors, including:

- emitting a boot status;
- accepting an optional Target path;
- locating the Target repository's root `AGENTS.md` contract;
- rejecting missing, non-directory, non-file, or empty Target contract inputs;
- returning text or JSON output;
- validating the presence of the Target contract;
- optionally recording validation status outside the Target path;
- rejecting runtime-data locations that overlap the Target repository;
- creating runtime-data directories and files with restricted filesystem modes.

These behaviors are useful and concrete, but they remain a bounded implementation subset.

---

## 4. What the Current CLI Is

The current CLI is best understood as:

- a local distribution surface;
- a bootstrap entry;
- a minimal Target contract locator;
- a bounded validation surface;
- a compatibility and packaging surface;
- an early executable bridge into the MD-first system.

It can demonstrate that a specific Target path exists and contains a non-empty root `AGENTS.md` file. It can expose that result through text or JSON and can store a validation record outside the Target repository.

This is meaningful implementation behavior. It is not the same as implementing all AI-DOS contracts.

---

## 5. What the Current CLI Is Not

The current CLI is not, merely by existing:

- the complete AI-DOS runtime;
- the AI-DOS kernel;
- the full Target Repository Resolution implementation;
- the complete Task Planner;
- the complete orchestration layer;
- the complete review engine;
- the complete state-update mechanism;
- proof that every normative Markdown contract is executable;
- proof that AI-DOS is production-ready;
- authority to mutate a Target Project.

A command named `validate` must be interpreted according to what it actually validates. In the current surface, validation confirms a narrow Target-contract presence condition. It does not independently validate the Target's mission, planning, protected areas, permissions, workflow declarations, evidence, or operational readiness.

---

## 6. Contract-to-Implementation Mapping

Every implementation surface should be traceable to the contracts that authorize and define it.

A useful mapping record contains:

| Field | Meaning |
|:---|:---|
| Implementation surface | File, module, command, script, package, or service being described |
| Purpose | The bounded behavior the surface provides |
| Normative owner | The AI-DOS contract or specification that defines the behavior |
| Target authority | The Target-owned authority required for Target-specific execution |
| Inputs | Data, paths, declarations, or instructions consumed |
| Outputs | Results, evidence, files, state, or reports produced |
| Side effects | Filesystem, network, repository, state, or external-system mutations |
| Validation | Checks that exercise the surface |
| Validation limit | What those checks do not prove |
| Lifecycle status | Draft, experimental, active, deprecated, or other declared status |

When no normative owner can be identified, the implementation must not invent one. The gap should be reported and resolved through bounded governance work.

---

## 7. A Practical Mapping of the Current CLI

The current local CLI can be described through the following implementation map:

| Surface | Current role | Governing interpretation |
|:---|:---|:---|
| `package.json` | Package metadata, scripts, binary declaration, distributable file list | Distribution and bootstrap metadata only |
| `src/main.ts` | CLI argument parsing, Target contract loading, validation output, runtime-data writing | Bounded executable behavior subordinate to AI-DOS contracts |
| `src/boot` | Boot message and status support | Bootstrap implementation surface |
| `dist/` | Compiled package output | Derived implementation artifact |
| `test/` | Tests for declared implementation behavior | Evidence only for tested code paths |
| `scripts/validate-*.mjs` | Installation and lifecycle checks for the package | Distribution-surface validation |
| CI workflow | Automated execution of configured checks | Evidence for configured jobs only |

This map describes the repository's current implementation footprint. It does not promote these files into product-truth authorities.

---

## 8. Target Contract Loading

The current CLI resolves the supplied Target path and expects a root `AGENTS.md` file.

Its bounded checks include:

1. the Target path exists;
2. the Target path is a directory;
3. the expected contract path exists;
4. the contract path is a file;
5. the contract content is not empty.

A successful result establishes only those facts.

It does not establish that:

- the contract is semantically valid;
- required Target resources are declared;
- protected areas are complete;
- operational state is resolvable;
- a work unit is authorized;
- the Target is compatible with every AI-DOS capability;
- the Target may be mutated.

Future implementation may broaden validation only when the applicable normative contracts and bounded task authorize that behavior.

---

## 9. Runtime Data Separation

Runtime data must not silently become Target Project truth.

The current CLI supports writing a Target validation record to a separately supplied data directory. It rejects a runtime-data location that overlaps the Target path.

This separation supports several important principles:

- the Target repository remains the owner of Target truth;
- provider or runtime state remains external unless explicitly authorized;
- generated runtime data does not contaminate the Target source tree;
- local operational evidence can be discarded or replaced without rewriting Target contracts;
- implementation data ownership remains visible.

A future provider may use a different storage mechanism, but it should preserve the same ownership boundary unless a normative contract explicitly changes it.

---

## 10. Filesystem Safety in the Current Surface

The current runtime-data implementation creates its data directory and output file with restrictive modes where the host platform supports them.

This is a useful implementation control, but it must not be overstated.

Filesystem mode settings alone do not prove:

- encryption at rest;
- secure secret storage;
- cross-platform permission equivalence;
- resistance to a compromised host;
- evidence authenticity;
- protection against malicious provider behavior;
- complete security compliance.

For broader security guidance, see [Security](Security.md).

---

## 11. Provider Neutrality

An Execution Provider may be implemented through:

- a local CLI;
- an AI coding agent;
- a conversational host;
- an automation runner;
- a hosted service;
- a future native runtime;
- another tool capable of consuming the contracts and producing bounded evidence.

AI-DOS behavior must not depend on one provider's private interface, terminology, branch model, or tool vocabulary unless a provider-specific adapter explicitly owns that translation.

Provider-neutral contracts should define:

- required inputs;
- required outputs;
- lifecycle boundaries;
- authority checks;
- safe-stop conditions;
- evidence expectations.

Provider implementations may differ internally while preserving those external obligations.

---

## 12. Adapters

Adapters connect a specific host or tool to the canonical AI-DOS contracts.

An adapter may:

- point the provider to canonical entry files;
- translate host-specific commands into provider-neutral intent;
- expose tool-specific filesystem or repository operations;
- format provider output for a host interface;
- document host-specific limitations.

An adapter must not:

- redefine AI-DOS semantics;
- copy transient Target state into provider truth;
- create an independent governance model;
- activate capabilities by implication;
- replace the canonical contract it points to;
- hide provider-specific constraints as universal behavior.

Adapters are replaceable integration surfaces.

---

## 13. Implementation Status Language

Implementation reports should distinguish among at least four states:

### Specified

The behavior is defined by a normative contract.

### Partially implemented

Some bounded behavior exists, but the full contract is not executable through that surface.

### Implemented

The declared behavior is realized for the stated scope and supported by appropriate evidence.

### Validated

The implementation has been exercised by named checks for a named revision and surface.

These terms are not interchangeable.

For example:

```text
Specified does not mean implemented.
Implemented does not mean comprehensively validated.
Validated does not mean accepted.
Accepted does not mean every future capability is active.
```

---

## 14. Validation Boundaries

Implementation validation must name the exact surface exercised.

Examples:

| Check | What it can support | What it does not independently prove |
|:---|:---|:---|
| TypeScript typecheck | Configured type relationships compile | Runtime correctness or contract completeness |
| Build | Configured source compiles into output | Correct product semantics |
| Unit tests | Covered code paths behave as asserted | Untested behavior or Target acceptance |
| Install validation | Package installs in the exercised environment | Every supported environment works |
| Execution validation | Declared executable path runs | Full AI-DOS orchestration exists |
| Offline validation | Tested path operates without network access | All providers are offline-capable |
| Uninstall validation | Tested uninstall path succeeds | No residual data exists everywhere |
| Rollback validation | Tested rollback scenario succeeds | Every state transition is reversible |
| CLI Target validation | Root Target contract presence checks pass | Semantic Target contract validity |

A report that says only "tests passed" is incomplete. It should identify the commands, environment, revision, and claim boundary.

---

## 15. Implementation and Human Governance

Executable capability does not create execution authority.

A provider may technically be able to:

- write files;
- create branches;
- open pull requests;
- change repository settings;
- call external services;
- update Target state;
- run destructive commands.

That capability is irrelevant unless the current Human Governance instruction and resolved Target authority permit the action.

The implementation must preserve the distinction between:

- capability;
- authorization;
- execution;
- validation;
- review;
- approval;
- acceptance.

---

## 16. Protected Areas

Implementation work must respect protected areas declared by the applicable Target contract and task.

Typical protected areas may include:

- repository entry contracts;
- Target mission documents;
- ProjectStatus;
- Roadmap and DevelopmentPhases;
- normative AI-DOS contracts;
- security policies;
- evidence records;
- release or distribution settings;
- external infrastructure.

The fact that a file is technically writable does not make it authorized scope.

---

## 17. Side-Effect Discipline

Every executable surface should make side effects explicit.

Before execution, identify whether the surface may:

- read files;
- write files;
- create directories;
- modify repository history;
- open or update pull requests;
- change remote configuration;
- use network access;
- persist runtime data;
- expose sensitive values;
- update Target operational state.

A safe implementation should minimize side effects, keep them within authorized scope, and report them after execution.

Unexpected side effects are blockers, not acceptable implementation details.

---

## 18. Evidence Produced by Implementation

Implementation evidence may include:

- command output;
- test results;
- generated reports;
- file diffs;
- checksums;
- commit identities;
- workflow results;
- runtime validation records;
- installation artifacts.

Evidence should identify:

- the exact subject;
- the exact revision;
- the command or procedure used;
- the environment where relevant;
- the observed result;
- the claim supported;
- the claim not supported.

Evidence does not become Target-owned acceptance merely because it exists. Target policy and Human Governance determine its lifecycle meaning.

---

## 19. Failure and Safe-Stop Behavior

An implementation should stop safely when:

- required authority is missing;
- the Target path cannot be resolved;
- the Target contract is missing or empty;
- required resources are inaccessible;
- a protected-area conflict exists;
- runtime data would overlap the Target repository without authorization;
- validation cannot be performed;
- the provider lacks required tooling;
- the requested behavior exceeds the implemented surface;
- a result would require inventing semantics not defined by a contract.

A safe-stop report should state:

1. what was attempted;
2. which condition blocked progress;
3. which authority or implementation limit caused the stop;
4. what was not changed;
5. the one bounded action needed to resolve the blocker, when known.

---

## 20. Adding a New Implementation Surface

A new executable surface should not begin with technology selection alone.

Use this sequence:

1. Identify the product behavior to realize.
2. Locate the normative owner.
3. Resolve Target-specific authority, if the behavior touches a Target.
4. Define the bounded implementation scope.
5. Identify inputs, outputs, side effects, and protected areas.
6. Select technology appropriate to that bounded scope.
7. Implement without promoting technology into product truth.
8. Validate the exact surface.
9. Produce evidence with explicit claim limits.
10. Review the exact revision.
11. Apply lifecycle changes only through authorized governance routes.

When no normative owner exists, stop and resolve the contract gap before inventing product behavior in code.

---

## 21. Implementation Documentation Requirements

A substantive implementation surface should document:

- its purpose;
- its status;
- its governing contracts;
- supported commands or interfaces;
- input and output formats;
- side effects;
- storage behavior;
- security considerations;
- platform constraints;
- validation commands;
- known limitations;
- replacement or deprecation path.

Documentation should remain close enough to the implementation to be maintained, while linking back to canonical product authority.

---

## 22. Common Mistakes

### Treating `src/main.ts` as the AI-DOS architecture

It is a bounded CLI implementation, not the normative system definition.

### Treating package version as framework version

A package's release version and the lifecycle status of AI-DOS contracts are different concerns unless a canonical lifecycle authority binds them.

### Claiming full Target validation

The current CLI validates a narrow root-contract condition, not the full Target declaration profile or operational readiness.

### Inferring authorization from tool access

A provider's ability to mutate the repository is not permission to do so.

### Treating tests as unlimited proof

Each test supports only the behavior and environment it actually exercises.

### Embedding Target truth in runtime data

Provider or runtime records must not silently replace the Target's canonical authorities.

### Making a provider-specific design universal

Host interfaces and implementation choices belong in adapters or implementation documentation, not universal contracts.

---

## 23. Current and Future Direction

The current repository demonstrates a bounded executable bridge around an MD-first contract system.

The broader direction may include richer contract parsing, deterministic declaration resolution, workflow execution, evidence generation, provider adapters, distribution mechanisms, and eventually stronger MD-to-executable behavior.

Those are architectural or roadmap directions, not claims that the current CLI already implements them.

Future implementation should continue to preserve:

- Markdown authority;
- Target/product separation;
- provider replaceability;
- bounded execution;
- explicit side effects;
- evidence-backed validation;
- safe-stop behavior;
- Human Governance control.

---

## 24. Related Documentation

- [Product documentation home](README.md)
- [Overview](Overview.md)
- [Features](Features.md)
- [Execution Model](ExecutionModel.md)
- [Context Resolution](ContextResolution.md)
- [Provider Model](ProviderModel.md)
- [Security](Security.md)
- [Reference](Reference/README.md)
- [Commands](Reference/Commands.md)
- [Workflows](Reference/Workflows.md)
- [Specifications](Reference/Specifications.md)

Normative execution begins with the repository and Target contracts, followed by `docs/AI-DOS/AGENTS.md` and the applicable AI-DOS workflow, command, system, validation, and architecture authorities.

---

## 25. Implementation Readiness Checklist

Before describing an implementation surface as ready, confirm:

- [ ] the exact surface is named;
- [ ] its normative owner is identified;
- [ ] Target-specific authority is resolved where applicable;
- [ ] implementation technology is not presented as product authority;
- [ ] inputs and outputs are documented;
- [ ] side effects are documented;
- [ ] protected areas are preserved;
- [ ] storage ownership is explicit;
- [ ] security considerations are documented;
- [ ] validation commands are named;
- [ ] validation claim limits are stated;
- [ ] the exact revision is identifiable;
- [ ] provider-specific assumptions are bounded;
- [ ] unsupported behavior safe-stops;
- [ ] no lifecycle status is claimed without authority;
- [ ] no capability is activated by documentation alone.

---

## 26. Compact Summary

```text
AI-DOS contracts define product behavior.
Target authorities define project truth and permission.
Implementation surfaces realize only bounded subsets.
Providers remain replaceable.
Tests prove only what they exercise.
Executable capability is not authorization.
Human Governance controls final lifecycle decisions.
```
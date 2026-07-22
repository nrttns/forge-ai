# AI-DOS Migration Guide

This guide explains how to adopt AI-DOS in an existing repository without confusing reusable AI-DOS Product Truth with Target Project truth.

AI-DOS is a Markdown-first, provider-neutral operating system for governed AI-assisted work. Migration therefore begins with authority, boundaries, and documentation structure—not with replacing tools, rewriting code, or choosing a particular model provider.

This page is explanatory Product documentation. Applicable repository, Target, and normative AI-DOS contracts remain authoritative.

---

## 1. Who this guide is for

Use this guide when an existing repository already has project documentation, coding-agent instructions, roadmaps, status files, review habits, implementation code, provider-specific prompts, or CI workflows and you want to introduce AI-DOS without creating a second source of truth.

This guide also applies when moving from:

- unstructured agent use to governed agent use;
- one provider to multiple providers;
- implicit authority to explicit authority;
- broad prompts to bounded work units;
- informal review to evidence-backed review;
- provider-specific process to provider-neutral contracts.

---

## 2. Migration is a boundary exercise

The central migration question is not:

> Which AI tool should run the repository?

It is:

> Which information belongs to reusable AI-DOS Product Truth, and which information belongs to this Target Project?

Keep the separation explicit:

```text
AI-DOS Product Truth
- reusable concepts
- provider behavior
- workflows
- commands
- validation and review contracts
- safe-stop behavior
- generic templates

Target Project Truth
- mission
- planning
- operational state
- priorities
- protected areas
- permissions
- repository-specific resources
- accepted evidence
```

Do not migrate Target-specific planning into reusable AI-DOS documentation. Do not move reusable provider behavior into a Target roadmap or status file.

---

## 3. Migration principles

### 3.1 Preserve before replacing

Inventory existing authority and workflow surfaces before editing them. A file that looks informal may still be the repository's de facto source of truth.

### 3.2 Introduce one authority path

A repository should expose one clear reading order from repository entry to Target authority to AI-DOS provider entry.

### 3.3 Migrate in bounded units

Each migration step should have one objective, explicit scope, named protected areas, surface-specific validation, and a clear completion condition.

### 3.4 Separate explanation from authority

Public Product documentation can explain how AI-DOS works. It must not silently replace normative contracts or Target-owned operational state.

### 3.5 Keep providers replaceable

Provider-specific adapters may help a tool discover repository contracts, but they must not become independent governance authorities.

### 3.6 Prefer safe-stop over guessed compatibility

When an old process cannot be mapped deterministically, stop and record the gap. Do not invent equivalence between old and new concepts.

---

## 4. Migration phases

A safe migration normally proceeds through six phases:

```text
Inventory
    ↓
Classify
    ↓
Establish authority entry
    ↓
Introduce bounded execution
    ↓
Validate parallel operation
    ↓
Retire superseded surfaces
```

Do not collapse all phases into one broad rewrite.

---

## 5. Phase 1 — Inventory the repository

Before changing anything, identify the surfaces that influence AI-assisted work.

### Repository identity and entry

Find:

- root instruction files;
- contributor instructions;
- provider-specific files;
- repository README and setup guides;
- security and support policies.

### Project authority

Find where the repository currently records:

- mission;
- goals;
- roadmap;
- operational state;
- active work;
- priorities;
- protected areas;
- approval authority.

### Execution behavior

Find:

- task templates;
- issue or pull-request conventions;
- review checklists;
- test commands;
- CI requirements;
- release procedures;
- audit procedures;
- provider prompts.

### Hidden authority

Look for authority encoded indirectly in scripts, issue labels, branch names, old planning documents, provider memory, or repeated prompt text. Hidden authority is a migration risk because it may conflict with the declared path.

---

## 6. Phase 2 — Classify important surfaces

For each relevant artifact, classify it as one of the following:

| Classification | Meaning | Typical action |
|:---|:---|:---|
| Product Truth | Reusable AI-DOS behavior or explanation | Place under the AI-DOS truth root or reference its normative owner |
| Target Truth | Repository- or project-specific authority | Keep under the Target truth root |
| Provider Adapter | Tool-specific discovery or convenience | Keep thin and point to canonical contracts |
| Implementation | Executable or integration surface | Keep subordinate to governing contracts |
| Evidence | Review, validation, audit, or completion record | Preserve provenance and ownership |
| Historical | Superseded but useful for context | Archive clearly |
| Unknown | Authority or ownership cannot be resolved | Safe-stop until classified |

Do not classify a file by extension alone. Markdown can be normative. Code can be subordinate. A provider prompt can be an adapter rather than a source of truth.

---

## 7. Phase 3 — Establish the authority entry path

A migrated repository should make the reading order explicit:

```text
Repository entry
    ↓
Target Project contract
    ↓
Target operational entry and task-specific authority
    ↓
Resolved Target Context
    ↓
AI-DOS provider entry
    ↓
Applicable workflow, command, validation, or review contract
```

The root entry should identify:

- repository identity;
- the canonical Target Project contract;
- the AI-DOS provider entry;
- the mandatory reading order;
- the Product Truth and Target Truth boundary;
- implementation interpretation limits.

The Target contract should own Target-specific authority. The AI-DOS provider entry should consume resolved Target Context rather than discover or invent Target planning.

---

## 8. Phase 4 — Introduce bounded execution

Do not begin migration with autonomous continuation. Begin with one explicitly bounded task.

Example:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation migration work unit.

Objective:
Create the Target Project introduction page using information already present in the repository.

Allowed scope:
docs/Projects/<TargetName>/Product/Introduction.md only.

Forbidden scope:
- AI-DOS Product contracts
- Target mission mutation
- planning or status mutation
- implementation code
- historical evidence

Required validation:
- exactly one changed file;
- every factual claim traceable to existing repository sources;
- no reusable AI-DOS behavior redefined;
- no Target operational state changed.

State-update authority:
None.
```

This tests the authority path, bounded scope, validation discipline, and reporting behavior without requiring broad automation.

---

## 9. Phase 5 — Validate parallel operation

For a limited period, compare the existing process with the AI-DOS-governed process.

Evaluate:

- whether both routes select the same task;
- whether authority is clearer;
- whether scope is narrower and more predictable;
- whether validation claims are more precise;
- whether review evidence is easier to inspect;
- whether providers behave consistently;
- whether safe-stop conditions expose previously hidden ambiguity.

Parallel operation is not permission to maintain two permanent authorities. Its purpose is to discover gaps before retiring old surfaces.

| Question | Existing process | AI-DOS-governed process |
|:---|:---|:---|
| Who authorized the task? | | |
| What exact files may change? | | |
| Which files are protected? | | |
| What proves completion? | | |
| Who may approve? | | |
| What happens when context is missing? | | |
| Can another provider reproduce the result? | | |

---

## 10. Phase 6 — Retire superseded surfaces

After the new authority path is validated, remove ambiguity deliberately.

For each old artifact, choose exactly one outcome:

- retain as canonical Target authority;
- retain as a thin provider adapter;
- convert into explanatory Product documentation;
- archive as historical;
- replace with a redirect to the canonical owner;
- remove after confirming no active dependency;
- keep blocked pending Human Governance decision.

Do not leave two files both appearing current when only one is authoritative.

A good archive banner states:

- that the file is historical;
- what superseded it;
- whether any content remains normative;
- where readers should go now.

---

## 11. Migrating provider-specific instructions

Many repositories begin with separate instruction files for different tools.

A safe pattern is:

```text
Canonical repository and Target contracts
        ↑
Thin provider adapters
        ↑
Claude, Codex, Copilot, local agents, or other providers
```

Provider adapters should:

- help the provider discover canonical contracts;
- identify the required reading order;
- remain short;
- avoid copying current project state;
- avoid restating governance semantics;
- avoid embedding active task identities;
- avoid becoming a second workflow definition.

When provider files disagree, canonical contracts should resolve the conflict.

---

## 12. Migrating planning and status documents

Do not automatically rename or relocate every planning file. Resolve ownership first:

- mission documents belong to the Target;
- roadmaps belong to the Target;
- development phases belong to the Target;
- live operational status belongs to the Target;
- generic task-selection behavior belongs to AI-DOS;
- generic approval and review workflows belong to AI-DOS;
- actual acceptance state belongs to the Target.

When an existing document mixes these responsibilities, split it through separate bounded work units. Preserve provenance and links during the transition.

A document likely needs separation when it contains both:

- reusable workflow rules and repository-specific priorities;
- generic provider behavior and current pull-request numbers;
- architecture principles and live project status;
- Target mission and AI-DOS product definitions;
- acceptance history and universal approval semantics.

---

## 13. Migrating review and approval workflows

Existing repositories often use “merged,” “approved,” “done,” and “accepted” as synonyms. AI-DOS treats lifecycle stages separately:

```text
Execution complete
    ≠
Validation passed
    ≠
Review outcome reached
    ≠
Human Governance accepted
    ≠
Target state updated
    ≠
Next work authorized
```

During migration:

1. identify the reviewed subject precisely;
2. bind review findings to an exact revision;
3. distinguish technical approval from Human Governance acceptance;
4. keep state mutation separately authorized;
5. prevent approval from automatically starting another task.

A merged pull request alone does not establish every later lifecycle state.

---

## 14. Migrating validation claims

Map each existing check to the surface it actually validates.

| Existing check | Valid claim | Invalid expanded claim |
|:---|:---|:---|
| Markdown link check | Links in checked files resolve | AI-DOS architecture is correct |
| TypeScript typecheck | Checked TypeScript surfaces typecheck | All AI-DOS contracts are implemented |
| Unit tests | Tested behavior passed | Target acceptance is complete |
| Pull-request review | Reviewer evaluated the specified revision | Human Governance accepted the work |
| Documentation audit | Examined documentation defects were reported | Implementation is secure |

Migration should narrow unsupported claims rather than preserve ambiguous labels.

---

## 15. Recommended incremental sequence

A practical migration sequence is:

1. create or clarify the repository entry;
2. identify the Target truth root;
3. establish the Target contract;
4. declare the Target operational entry;
5. identify protected areas;
6. establish the AI-DOS provider entry route;
7. test one bounded documentation task;
8. test one bounded implementation task;
9. test independent review;
10. test Human Governance approval without automatic continuation;
11. test safe-stop with intentionally missing context;
12. test a second provider against the same contracts;
13. archive superseded instructions;
14. document unresolved migration gaps.

Each item should be its own authorized work unit when it changes repository artifacts.

---

## 16. Common migration failures

### Copying a reference Target verbatim

Why it fails: another Target's mission, status, paths, and protected areas are not reusable Product Truth.

Better approach: copy only generic patterns, then declare the new Target's own authority.

### Treating the current provider as AI-DOS

Why it fails: AI-DOS is provider-neutral; the provider executes within the contracts.

Better approach: keep adapters thin and ensure another compatible provider can follow the same authority path.

### Migrating everything in one pull request

Why it fails: scope becomes unreviewable, provenance is lost, and authority collisions are harder to isolate.

Better approach: one bounded migration objective at a time.

### Moving files before resolving ownership

Why it fails: relocation can silently change perceived authority.

Better approach: classify first, then move with explicit redirects and validation.

### Updating operational state because migration files were created

Why it fails: documentation completion and Target acceptance are separate lifecycle events.

Better approach: mutate Target state only through the authorized state-update route.

### Removing old instructions too early

Why it fails: unrecorded dependencies may still rely on them.

Better approach: run a bounded parallel-validation period, then archive or remove.

---

## 17. Safe-stop conditions

Stop before mutation when:

- the Target Project cannot be identified;
- Product Truth and Target Truth ownership cannot be separated;
- two files claim the same canonical authority;
- the active task is not bounded;
- protected areas are unknown;
- the source of current operational state is unclear;
- the requested migration would rewrite historical evidence;
- a provider adapter contains unique governance semantics not found in a canonical contract;
- required validation cannot be named;
- the migration requires an architecture decision Human Governance has not made;
- the exact reviewed subject cannot be resolved;
- the new structure would leave broken authority references.

A migration safe-stop is useful evidence. It identifies the next governance decision needed before work can continue safely.

---

## 18. Migration validation checklist

### Authority

- [ ] The repository entry points to one canonical Target contract.
- [ ] The Target contract owns Target-specific authority.
- [ ] The AI-DOS provider entry consumes resolved Target Context.
- [ ] Provider adapters do not restate independent governance.

### Boundaries

- [ ] Product Truth and Target Truth are stored separately.
- [ ] Implementation files are not treated as product authority.
- [ ] Historical evidence was preserved.
- [ ] Protected areas remained unchanged unless explicitly authorized.

### Execution

- [ ] The work unit had one bounded objective.
- [ ] Only authorized files changed.
- [ ] Validation matched the changed surface.
- [ ] Completion did not imply approval or acceptance.

### Review and lifecycle

- [ ] The reviewed subject was exact.
- [ ] Approval authority was explicit.
- [ ] State mutation was separately authorized.
- [ ] No next task started automatically.

### Portability

- [ ] A second compatible provider could discover the same contracts.
- [ ] No active project state is embedded only in provider memory.
- [ ] Tool-specific adapters remain replaceable.

---

## 19. Example migration outcome

A successful initial migration may look like this:

```text
Repository
├── AGENTS.md                         # repository entry
├── docs/
│   ├── AI-DOS/                       # reusable Product Truth
│   │   ├── AGENTS.md                 # provider entry
│   │   └── ...
│   └── Projects/
│       └── ExampleTarget/            # Target Truth
│           ├── Mission/
│           ├── Planning/
│           ├── Reports/
│           └── Product/
├── .provider-a/                      # thin discovery adapter
├── .provider-b/                      # thin discovery adapter
└── implementation surfaces
```

The exact Target filenames and structure remain Target-owned. The important result is deterministic authority discovery and preserved ownership boundaries.

---

## 20. Completion criteria

A repository can be considered operationally migrated when:

- the authority reading order is explicit;
- Product and Target truth are separated;
- the Target operational entry is uniquely discoverable;
- protected areas and state-update authority are declared;
- one bounded execution has completed successfully;
- validation evidence is surface-specific;
- one independent review has resolved an exact subject;
- Human Governance acceptance remains distinct from merge and review;
- a missing-context test produces safe-stop;
- at least one alternative provider can follow the same contracts;
- superseded instructions are archived, redirected, or removed without ambiguity.

Migration completion does not mean every AI-DOS capability is active. It means the repository can consume AI-DOS through a clear, governed, provider-neutral authority path.

---

## 21. Related Product documentation

Use this guide with:

- `README.md` for the Product documentation map;
- `Architecture.md` for the high-level system structure;
- `DesignPrinciples.md` for the principles behind the migration approach;
- `GettingStarted/Installation.md` for installation preparation;
- `GettingStarted/QuickStart.md` for the first bounded cycle;
- `Cookbook.md` for practical operational recipes;
- `Tutorials.md` for guided learning paths;
- `BestPractices.md` for ongoing operating discipline;
- `Troubleshooting.md` for diagnosing migration blockers.

Normative execution behavior remains owned by the applicable AI-DOS contracts and Target-owned authorities.

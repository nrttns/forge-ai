# Working with AI-DOS Execution Providers

AI-DOS is designed to operate through different AI hosts, coding agents, automation tools, and future execution environments without making any one provider the owner of Target truth or AI-DOS product truth.

This tutorial explains how to connect a Target Project to an Execution Provider, how to preserve authority boundaries, how to issue bounded instructions, and how to evaluate a provider's result.

This page is explanatory. Normative behavior remains owned by the applicable Target contract and the AI-DOS contracts under `docs/AI-DOS/`.

---

## 1. Learning objective

After completing this tutorial, you should be able to:

- explain what an Execution Provider is;
- distinguish a provider from AI-DOS and from a Target Project;
- route a provider through the Target contract and AI-DOS Provider Entry;
- issue one bounded Human Governance instruction;
- evaluate whether a provider preserved scope and authority;
- recognize provider-specific tooling as replaceable implementation detail;
- stop safely when required context or permissions are missing;
- change providers without transferring Target ownership to the new provider.

---

## 2. The three-part operating model

AI-DOS work separates three responsibilities.

| Responsibility | Owner | Typical content |
|:---|:---|:---|
| Target Project truth | Target Project | mission, planning, operational state, protected areas, resources, authorization |
| Reusable execution behavior | AI-DOS | provider entry, orchestration, workflows, commands, validation and reporting contracts |
| Tool interaction and execution | Execution Provider | reading files, editing, running checks, producing reports, opening review artifacts |

The separation can be represented as:

```text
Human Governance
    ↓
Target Project Contract
    ↓
Resolved Target Context
    ↓
AI-DOS Provider Entry
    ↓
AI-DOS Operational Core
    ↓
Execution Provider tools
    ↓
Validation and evidence
    ↓
Human Governance review
```

The provider executes work. It does not become the authority that defines why the work exists, what the Target state means, or whether the result is accepted.

---

## 3. What is an Execution Provider?

An Execution Provider is the environment that gives an AI agent access to capabilities such as:

- reading repository files;
- searching source and documentation;
- editing authorized artifacts;
- running validation commands;
- inspecting version-control state;
- creating branches, commits, or review artifacts when authorized;
- reporting results to Human Governance.

Examples may include interactive AI applications, terminal-based coding agents, IDE assistants, hosted automation services, or a future AI-DOS-native runtime.

A product name does not define the provider role. The role is defined by what the host can do and by the contracts it follows.

---

## 4. What a provider is not

An Execution Provider is not automatically:

- the Target Project owner;
- Human Governance;
- the source of Target mission or planning truth;
- the source of current operational state;
- the owner of AI-DOS architecture;
- authorized to choose arbitrary work;
- authorized to modify protected areas;
- authorized to approve its own result;
- authorized to infer completion from a passing build;
- authorized to continue into another work unit.

Provider capability is not provider authority.

A host may technically be able to edit every repository file while being authorized to edit only one file.

---

## 5. Provider-neutrality principle

A Target Project should not need to redesign its governance whenever the execution host changes.

The stable contract is:

```text
Target-owned context
    ↓
AI-DOS-owned provider route
    ↓
Provider-specific execution adapter
```

The provider-specific adapter may differ between environments, but it must not redefine:

- Target identity;
- Target authority;
- protected areas;
- task scope;
- state-transition authority;
- validation meaning;
- review and approval semantics.

This allows the same Target to be handled by different providers while preserving a common operating model.

---

## 6. Provider examples

The following names are examples of possible execution hosts, not special AI-DOS authorities:

- ChatGPT;
- Codex;
- Claude Code;
- GitHub Copilot or another IDE agent;
- Grok or another interactive AI host;
- a local model with repository tools;
- a CI or scheduled automation agent;
- a future AI-DOS runtime.

Each host may expose different tools, context limits, permission models, review interfaces, and automation features.

Those differences affect execution mechanics. They do not change the authority model.

---

## 7. Minimum provider capabilities

A provider does not need every possible tool. It needs the capabilities required by the bounded task.

### 7.1 Read-only task

A read-only review or audit may require only:

- repository access;
- file reading;
- search;
- revision identity resolution;
- evidence reporting.

### 7.2 Documentation edit

A bounded documentation task may additionally require:

- branch creation;
- editing one or more authorized files;
- diff inspection;
- documentation validation;
- commit and review-artifact creation.

### 7.3 Implementation task

An implementation task may additionally require:

- build or test execution;
- package or dependency access;
- generated-artifact handling;
- environment-specific diagnostics.

The provider must report missing capabilities as blockers. It must not simulate evidence that its environment could not produce.

---

## 8. Repository entry route

Before doing work, the provider should enter through the repository's declared authority chain.

A typical route is:

```text
Repository entry
    ↓
Target Project contract
    ↓
Target operational entry
    ↓
Target planning authorities when required
    ↓
Resolved Target Context
    ↓
AI-DOS Provider Entry
```

For a repository using the same layout as this project, the conceptual responsibilities are:

| Surface | Responsibility |
|:---|:---|
| root repository entry | identify the Target contract and provider entry |
| Target contract | resolve Target-owned authority and constraints |
| ProjectStatus or equivalent | expose current operational state |
| DevelopmentPhases and Roadmap when applicable | bound capability and direction |
| AI-DOS Provider Entry | route the resolved context into AI-DOS |

Do not begin with a nearby implementation file simply because it appears executable.

---

## 9. Resolved Target Context

Before mutation, the provider should be able to state the relevant Target Context.

A useful explanatory checklist is:

| Context field | Question |
|:---|:---|
| Target identity | Which project owns this work? |
| objective | What exact result is authorized? |
| allowed scope | Which artifacts may change? |
| forbidden scope | Which artifacts or capabilities must remain untouched? |
| protected areas | Which areas require separate authority? |
| resources | Which files, commands, or evidence sources are relevant? |
| validation | What must be checked? |
| completion condition | What observable state means the work unit is complete? |
| state-update authority | May operational state change, or only a recommendation be reported? |

If these cannot be resolved, the provider should stop before editing.

---

## 10. Explicitly bounded instructions

The clearest provider interaction begins with a bounded Human Governance instruction.

Example:

```text
HUMAN GOVERNANCE

Execute exactly one bounded documentation work unit.

Objective:
Replace the placeholder provider tutorial with an explanatory guide to
AI-DOS Execution Providers.

Allowed scope:
- docs/AI-DOS/Product/Tutorials/Providers.md

Forbidden scope:
- Target Project operational state
- Mission
- Roadmap
- DevelopmentPhases
- normative AI-DOS contracts
- implementation files
- capability activation

Validation:
- confirm exactly one file changed
- confirm all links and referenced repository paths are intentional
- confirm the page remains explanatory and provider-neutral

Completion condition:
- one branch
- one commit
- one draft review artifact
- completion report with scope and validation evidence
```

The provider must not reinterpret this as permission to improve adjacent pages.

---

## 11. State-derived continuation

Sometimes Human Governance asks the provider to continue without naming a file or task.

Example:

```text
HUMAN GOVERNANCE
Continue.
```

This is not permission to choose any convenient work.

The provider must follow the Target contract and AI-DOS work-resolution route. Depending on the resolved state, the result may be:

- exactly one selected bounded work unit;
- a required state transition;
- a request for an explicit next-step selection;
- a deterministic safe-stop because no unique eligible work can be resolved.

A provider must not use recent repository activity as a substitute for Target-owned selection authority.

---

## 12. Provider adapter responsibilities

A provider adapter is the host-specific bridge between AI-DOS instructions and available tools.

It may translate a generic action such as:

```text
read the reviewed subject at the declared revision
```

into a host-specific operation such as:

- opening a repository file at a commit;
- fetching a pull-request diff;
- checking out a branch;
- reading a local worktree;
- using an API connector.

The adapter should preserve the semantic request while changing only the execution mechanism.

A good adapter:

- points to canonical AI-DOS authority;
- contains minimal host-specific discovery guidance;
- does not duplicate governance semantics;
- does not embed transient project state;
- does not claim authority beyond the host's actual permissions;
- reports tool limitations accurately.

---

## 13. Tool capability versus authorization

The provider must evaluate two independent questions:

1. Can this host perform the action?
2. Is this action authorized?

| Capability | Authorization | Required behavior |
|:---|:---|:---|
| available | granted | execute within scope |
| available | not granted | do not execute |
| unavailable | granted | report blocker or bounded limitation |
| unavailable | not granted | do not execute |

Never infer authorization from tool availability.

Never infer successful execution from authorization alone.

---

## 14. Provider-specific paths and commands

Provider tools often expose different mechanics.

One provider may use:

- a local shell;
- direct filesystem editing;
- Git commands;
- a repository connector.

Another may use:

- hosted file operations;
- structured API actions;
- managed branch creation;
- built-in review tools.

The completion report should describe what was actually used without promoting those mechanics into universal AI-DOS requirements.

For example:

```text
Validation performed:
- compared branch against the default branch through the repository provider
- confirmed one commit and one changed file
- no runtime tests were applicable to this documentation-only change
```

This is better than claiming that the whole AI-DOS system was validated.

---

## 15. Validation discipline

Validation must match the changed surface.

### Documentation-only work

Possible checks include:

- exact changed-file inventory;
- Markdown structure review;
- internal path review;
- normative/explanatory boundary review;
- Target-specific data contamination review;
- diff inspection;
- branch divergence inspection.

### Implementation work

Possible checks include:

- targeted tests;
- type checking;
- build checks;
- packaging checks;
- runtime scenarios;
- security or policy checks where required.

A provider must state what each command validates.

Passing an implementation test does not independently validate governance or documentation authority.

---

## 16. Evidence expected from a provider

A useful provider completion report includes:

1. **Objective** — the exact bounded result pursued.
2. **Authority consumed** — the Target and AI-DOS contracts read.
3. **Scope** — allowed and forbidden artifacts.
4. **Changed artifacts** — every modified file or state.
5. **Validation** — commands, comparisons, and review criteria used.
6. **Results** — passes, failures, warnings, and skipped checks.
7. **Protected-area confirmation** — evidence that unauthorized areas were untouched.
8. **Blockers** — unresolved limitations or missing context.
9. **State-update authority** — whether state was changed, recommended, or left untouched.
10. **Exactly one next step** — the next Human Governance decision, not automatic continuation.

---

## 17. Review is not approval

A provider may produce or consume review findings, but review and approval are different lifecycle events.

```text
Execution
    ↓
Validation
    ↓
Review
    ↓
Human Governance approval
    ↓
Authorized state update
    ↓
Later continuation
```

The provider must not treat any of the following as automatic Human Governance approval:

- a clean diff;
- passing CI;
- an external model saying `APPROVE`;
- a merged branch;
- a completed checklist;
- the provider's own confidence.

The Target contract determines how approval intent is resolved.

---

## 18. Safe-stop scenarios

A provider should stop before mutation when:

- the repository entry cannot identify the Target contract;
- current Target state cannot be resolved;
- more than one candidate remains without an authorized tie-break;
- no eligible candidate exists;
- required files are missing or contradictory;
- protected-area rules conflict with the requested task;
- the requested change exceeds the allowed scope;
- the provider cannot establish the reviewed subject's identity;
- required validation cannot be performed and the completion condition depends on it;
- credentials or permissions are insufficient;
- the provider would need to invent project truth.

A safe-stop report should identify the blocker and the exact missing authority or capability.

---

## 19. Controlled provider test

Use a read-only exercise before allowing a new provider to mutate a Target repository.

Instruction:

```text
Read the repository entry, Target contract, Target operational entry,
and AI-DOS Provider Entry.

Do not modify files.

Report:
- Target identity
- Target truth root
- AI-DOS truth root
- current operational state
- protected areas
- exactly one authorized next action
- whether an executable work unit is active
```

Expected result:

- the provider reads the declared authority chain;
- it distinguishes Target truth from AI-DOS product truth;
- it does not select implementation work from repository proximity;
- it reports contradictions or missing context;
- it makes no repository mutation.

---

## 20. Switching providers

Changing providers should not require changing Target truth.

Before switching:

- preserve the exact bounded instruction;
- preserve the reviewed-subject identity when review is in progress;
- preserve the branch or revision locator when applicable;
- preserve known blockers and validation evidence;
- do not summarize away protected-area constraints;
- do not treat the new provider's context window as authoritative state.

After switching, the new provider should reread the canonical authority chain rather than relying only on the previous provider's narrative.

---

## 21. Multi-provider workflows

Multiple providers can participate in one governed lifecycle when their roles are explicit.

Example:

```text
Provider A: execute bounded work
Provider B: perform independent review
Provider C: inspect a specialized validation surface
Human Governance: accept, reject, redirect, or request correction
```

Rules:

- each provider must resolve the same reviewed subject;
- each report must identify the revision inspected;
- review findings must not silently mutate the subject;
- a correction creates a new revision that requires fresh review;
- disagreement is reported, not averaged into a fabricated consensus;
- Human Governance remains the approval authority.

---

## 22. Provider comparison criteria

Evaluate providers by operational fitness rather than brand preference.

| Criterion | Question |
|:---|:---|
| authority discipline | Does the provider follow repository and Target contracts? |
| context resolution | Can it reliably read the required authority chain? |
| scope control | Does it change only authorized artifacts? |
| evidence quality | Does it report verifiable facts and revision identities? |
| validation capability | Can it run the checks required by the task? |
| safe-stop behavior | Does it stop when context or authority is missing? |
| tool transparency | Does it accurately report limitations and failures? |
| provider neutrality | Does it avoid embedding host-specific mechanics into product truth? |
| lifecycle discipline | Does it separate execution, review, approval, and continuation? |
| cost and efficiency | Does it complete bounded work without unnecessary context or tool use? |

No provider will be best for every task.

---

## 23. Common mistakes

### Mistake 1: Treating the provider as AI-DOS

A provider runs AI-DOS-guided work. It is not the product authority.

### Mistake 2: Starting from source code instead of authority

Nearby code may be irrelevant to the active objective.

### Mistake 3: Copying Target state into AI-DOS documents

Reusable product truth must not contain transient Target operational state.

### Mistake 4: Copying AI-DOS algorithms into Target planning

Target documents should reference provider-owned workflows rather than duplicate them.

### Mistake 5: Letting the provider continue automatically

Completing one work unit does not authorize the next.

### Mistake 6: Confusing review with acceptance

A review verdict is evidence for Human Governance, not a substitute for it.

### Mistake 7: Claiming validation beyond the exercised surface

A test suite validates only what it actually covers.

### Mistake 8: Hiding tool failures

Timeouts, unavailable commands, and permission errors must be reported accurately.

---

## 24. Provider readiness checklist

Before using a provider for mutation, confirm:

- [ ] the provider can access the repository;
- [ ] the repository entry is available;
- [ ] the Target contract is available;
- [ ] the Target operational entry is available;
- [ ] the AI-DOS Provider Entry is available;
- [ ] the provider can identify protected areas;
- [ ] the task is explicitly bounded or deterministically resolvable;
- [ ] required tools and permissions are available;
- [ ] validation expectations are known;
- [ ] the provider can report exact changed artifacts;
- [ ] the provider can preserve revision identity for review;
- [ ] Human Governance approval remains external to provider execution.

---

## 25. Completion checklist for a provider task

A provider task is ready for Human Governance review when:

- [ ] exactly one authorized objective was executed;
- [ ] the changed-artifact list matches the allowed scope;
- [ ] forbidden and protected areas were preserved;
- [ ] applicable validation was run;
- [ ] validation claims are bounded to the exercised surfaces;
- [ ] blockers and limitations are disclosed;
- [ ] the review subject and revision are identifiable;
- [ ] no unauthorized state transition occurred;
- [ ] no later work unit was started;
- [ ] exactly one next decision is presented.

---

## 26. Where to continue

Continue with:

- [Building Targets](BuildingTargets.md) for Target repository preparation;
- [Examples](Examples.md) for practical Human Governance instruction patterns;
- [Getting Started](../GettingStarted/README.md) for the first-use path;
- [Concepts](../Concepts/README.md) for the conceptual model;
- the repository's canonical Target contract for Target-specific authority;
- `docs/AI-DOS/AGENTS.md` for the normative AI-DOS Provider Entry.

Remember the central rule:

> Providers are replaceable execution environments. Target truth, AI-DOS product truth, and Human Governance authority are not transferred to the provider.
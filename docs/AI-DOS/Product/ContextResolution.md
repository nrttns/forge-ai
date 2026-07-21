# AI-DOS Context Resolution

AI-DOS resolves context before operational work begins. It does not allow an agent to select a project, infer authority, or invent missing resources from repository proximity, prior memory, or implementation conventions.

## Why Context Resolution Matters

A prompt alone rarely contains everything needed for safe execution. AI-DOS separates the incoming instruction from the authoritative Target Project context required to interpret and execute it.

## Resolution Stages

```text
Provider Invocation Contract
    ↓
Invocation Context
    ↓
Target Repository Resolution
    ↓
Resolved Target Context
    ↓
Boot Sequence and Context Assembly
    ↓
Operational Core
```

## Invocation Context

Invocation Context identifies the requested action and supplies the evidence required to locate the intended Target Project. It may include a Target identity, repository boundary, declaration-set locator, requested action class, candidate paths, and provider information.

Invocation Context is evidence for resolution. It does not itself create Target truth or grant mutation permission.

## Target Repository Resolution

Target Repository Resolution identifies exactly one invoked Target Repository and validates that its boundary and declarations are coherent.

The resolver checks Target resources, source scope, protected areas, validation requirements, and permissions or execution authority. It produces either one unambiguous resolution result or a blocker.

It does not select work, rank Target priorities, authorize mutation, load the complete execution context, or infer repository-specific paths.

## Deterministic Declarations

A Target may expose a structured Markdown declaration profile. The current normative profile defines exact headings, tables, field types, path normalization, precedence, applicability, duplicate handling, and blocker selection.

The public product principle is simple: declarations must be explicit enough to resolve mechanically. Prose similarity or model judgment is not a substitute for required structure.

## Resolved Target Context

Resolved Target Context carries the Target-owned information needed by AI-DOS, including the objective, authority, resources, protected boundaries, validation expectations, permissions, blockers, and state-update boundaries applicable to the invocation.

AI-DOS consumes this context without converting Target-specific information into reusable product truth.

## Minimum Sufficient Context

Context Assembly loads only what is required for the active bounded task. More context is not automatically better: unrelated documents can introduce stale authority, conflicting scope, unnecessary token use, and accidental objective expansion.

## Blockers

Resolution stops when required information is missing, inaccessible, empty, ambiguous, conflicting, structurally unsupported, unresolvable, or outside the Target Repository boundary.

A blocker is an execution result, not a failure to be hidden. AI-DOS reports the blocker and stops before unauthorized mutation.

## Target Independence

AI-DOS does not hard-code Forge AI paths or state into the reusable product. Each Target Project owns and declares its own truth, resources, protected areas, and authority model.

For normative behavior, see `docs/AI-DOS/System/TargetRepositoryResolution.md`, `docs/AI-DOS/System/ContextAssembly.md`, `docs/AI-DOS/System/BootSequence.md`, and the applicable Target contract.

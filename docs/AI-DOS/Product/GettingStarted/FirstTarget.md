# Your First Target

A Target Project is the project AI-DOS is asked to understand or act upon.

The Target is not part of AI-DOS product truth. It owns its own mission, operational state, resources, protected areas, permissions, validation expectations, and evidence. AI-DOS provides reusable contracts for resolving and operating within that Target-owned context.

Forge AI is the development Target Project in this repository. It is an example of the boundary, not a universal template whose planning files or current state should be copied into every Target.

## Product truth and Target truth

Keep the two truth domains separate:

| Domain | Owns |
|:---|:---|
| AI-DOS product truth | Reusable architecture, governance, System Layer, workflows, commands, templates, and provider contracts |
| Target Project truth | Project identity, mission, resources, state, priorities, protected areas, permissions, validation requirements, and evidence |

AI-DOS consumes Target truth for the current invocation. It does not silently absorb Target-specific planning or status into reusable product authority.

## A Target needs an entry contract

A Target should expose one clear entry contract that lets an authorized provider discover the Target-owned authorities needed for work.

The current local CLI expects a root `AGENTS.md` when validating a Target directory. That is a bounded implementation convention of the current Forge AI CLI surface. The normative Target Repository Resolution contract is provider-neutral and resolves the Target from explicit invocation evidence and declared resources.

## Minimum concepts a Target must make clear

### Identity and resources

The invocation must resolve exactly one Target Repository. The Target must identify the authoritative resources relevant to the requested work, such as its mission, operational entry, planning authority, source scope, and validation resources.

Missing or contradictory resources are blockers, not permission to guess.

### Source scope

The Target must make clear which repository areas are in scope and which are outside the requested work. A provider should not expand scope because another file appears related or convenient.

### Protected areas

Protected areas identify content or state that requires special authorization. Examples may include mission documents, live project status, governance contracts, evidence records, release state, or sensitive operational resources.

The exact protected areas belong to the Target authority. AI-DOS enforces the declared boundary; it does not invent or weaken it.

### Validation

The Target must identify what evidence is required to show that the work was completed correctly. Validation may be document review, link checks, tests, schema checks, provider-neutral evidence, or task-specific criteria.

Validation proves only the surface it actually exercises.

### Permissions and execution authority

A provider's capability is not execution authority. The Target must make clear which actions may proceed, which require confirmation or Human Governance, and which are prohibited.

Write access, API access, or an available tool never grants broader authority by itself.

### Safe-stop behavior

AI-DOS must stop before mutation when the Target cannot be resolved unambiguously, required authority is missing, protected boundaries conflict, validation cannot be determined, or more than one materially different action remains possible without a governing choice.

A safe stop should report the blocker and the missing decision or evidence. It should not fill the gap with model confidence.

## A conceptual first-Target sequence

1. Supply the Target identity and repository location through the invocation.
2. Resolve the Target entry contract and declared resources.
3. Separate AI-DOS product authority from Target-owned truth.
4. Identify the exact objective, source scope, protected areas, permissions, and validation.
5. Construct one bounded work unit or safe-stop if the work cannot be resolved.
6. Execute only through a capable provider with exact authority.
7. validate the changed surface and report evidence.
8. Leave approval, acceptance, certification, release, and future work to their owning authorities.

## Normative references

For the reusable resolution model, see `docs/AI-DOS/System/TargetRepositoryResolution.md` and `docs/AI-DOS/AIFramework.md`.

For this repository's example Target authority, see root `AGENTS.md` and `docs/Projects/ForgeAI/Mission/AGENTS.md`. Those Forge AI documents remain Target-specific and must not be treated as reusable AI-DOS product truth.
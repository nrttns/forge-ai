# AI-DOS Product Documentation

AI-DOS is an MD-first, provider-neutral operating system for governed AI-assisted work.

This directory is the publication-oriented documentation surface for AI-DOS. It explains the product in accessible language while preserving the authority of the normative contracts elsewhere under `docs/AI-DOS/`.

## Start Here

- [Overview](Overview.md) — what AI-DOS is, the problem it addresses, and its product boundary.
- [Features](Features.md) — the product capabilities and governing principles exposed by the current contracts.
- [Execution Model](ExecutionModel.md) — how an authorized instruction moves from invocation to evidence-backed completion.
- [Context Resolution](ContextResolution.md) — how AI-DOS resolves Target identity, resources, authority, and blockers before execution.
- [Provider Model](ProviderModel.md) — how AI-DOS remains independent of any single model, agent host, or tool provider.

## Documentation Areas

- [Getting Started](GettingStarted/README.md)
- [Concepts](Concepts/README.md)
- [Tutorials](Tutorials/README.md)
- [Reference](Reference/README.md)
- [Community](Community/README.md)

## Authority Boundary

These pages explain AI-DOS; they do not redefine it. When explanatory text and a normative AI-DOS contract differ, the normative contract governs.

Forge AI is a Target Project that develops and self-applies AI-DOS. Forge AI project state, planning, evidence, and governance remain under `docs/Projects/ForgeAI/` and are not reusable AI-DOS product truth.

Current TypeScript, Node.js, npm, CLI, test, and CI artifacts are bounded implementation and distribution surfaces. They do not define the AI-DOS architecture, kernel, or future implementation direction.

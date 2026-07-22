# Installation

AI-DOS is currently developed and exercised from the Forge AI repository. The repository contains the normative Markdown contracts and a bounded local CLI/bootstrap implementation.

This page describes only the setup that current repository artifacts support. It does not claim that a complete AI-DOS engine, kernel, hosted service, MCP provider, or MD-to-executable runtime is released.

## Prerequisites

The current local implementation uses Node.js tooling. To work with that bounded surface, you need:

- a local checkout of the repository;
- Node.js and npm compatible with the repository dependencies;
- access to a terminal in the repository root.

Node.js is an implementation dependency of the current CLI surface, not the product architecture or normative definition of AI-DOS.

## Prepare the local implementation

From the repository root:

```bash
npm ci
npm run build
```

`npm ci` installs the locked development dependencies. `npm run build` compiles the current TypeScript CLI/bootstrap surface to `dist/`.

Available repository validation scripts include:

```bash
npm run typecheck
npm test
npm run test:install
npm run test:execution
npm run test:offline
npm run test:uninstall
npm run test:rollback
```

Each command validates only the implementation surface it exercises. Passing these checks does not by itself certify AI-DOS architecture, governance, Markdown contract consistency, Target readiness, or future kernel behavior.

## Current CLI entry

The package declares a local executable named `forge-ai`, backed by `dist/main.js`. Depending on how the package is installed or linked locally, the same implementation can also be invoked directly with Node:

```bash
node dist/main.js
```

The current CLI supports a bounded boot/status path and Target contract validation. For example:

```bash
node dist/main.js validate --target <target-directory>
```

Optional flags currently implemented include:

```text
--json
--data-dir <directory>
```

The `validate` command requires `--target <path>`. The current implementation checks that the Target directory exists and contains a non-empty root `AGENTS.md`. It does not yet prove conformance with every normative Target declaration or execute the complete AI-DOS lifecycle.

## Repository access versus product installation

Cloning and building this repository gives you access to:

- the current AI-DOS normative Markdown surface;
- Forge AI as the development Target Project;
- the accepted bounded local CLI/bootstrap implementation;
- repository tests and validation scripts.

It does not automatically install a universal provider, activate an external Target, grant mutation authority, or turn future distribution capabilities into released features.

For product meaning and authority, begin with `docs/AI-DOS/AGENTS.md`. For the current bounded implementation, use `package.json`, `src/main.ts`, and the repository validation scripts as the implementation evidence.
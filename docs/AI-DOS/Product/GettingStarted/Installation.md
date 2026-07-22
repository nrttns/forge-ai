# Installation

AI-DOS does not require a standalone AI agent to begin organizing a project.

The minimum useful installation is repository-based: place the AI-DOS contracts inside the repository that will be governed, declare the Target Project separately, and provide an entry file that tells compatible agents what to read.

## 1. Place the AI-DOS contracts

Use the following product truth root:

```text
docs/AI-DOS/
```

This directory contains reusable AI-DOS contracts, workflows, system rules, checklists, templates, and supporting product material. It must not contain the Target Project's live mission, roadmap, status, or project-specific evidence.

At this stage, installation may be performed by copying or otherwise supplying the governed `docs/AI-DOS/` tree in the Target repository. A future distribution mechanism may automate this step, but it does not change the product/Target boundary.

## 2. Create a Target Project truth root

Keep Target-owned material outside `docs/AI-DOS/`. A recommended layout is:

```text
docs/Projects/<TargetName>/
├── Mission/
├── Planning/
└── Reports/
```

The exact filenames are Target-owned. The Target must make its authoritative resources discoverable through its contract rather than relying on an agent to guess them.

## 3. Add a repository entry contract

Create a root `AGENTS.md` that identifies:

- the repository and Target Project;
- the Target Project contract;
- the AI-DOS provider entry contract;
- the mandatory reading order;
- the separation between AI-DOS product truth and Target Project truth.

A minimal conceptual route is:

```text
AGENTS.md
    ↓
Target Project contract
    ↓
Resolved Target Context
    ↓
docs/AI-DOS/AGENTS.md
    ↓
Applicable AI-DOS workflow and command
```

The root entry file discovers authority. It should not duplicate the full Target contract or AI-DOS workflows.

## 4. Use a compatible execution provider

AI-DOS itself is not the executing agent. Work is performed by an external provider capable of reading repository files and following the declared contracts, for example an AI coding agent operating in the repository.

The provider should be instructed to:

1. read the root repository entry;
2. resolve the Target Project authority and current state;
3. enter the AI-DOS provider route;
4. execute exactly one authorized bounded task;
5. validate the changed surface;
6. report evidence and stop at governance boundaries.

## 5. Optional implementation surfaces

A repository may also contain a CLI, scripts, tests, adapters, or other tooling. These can support distribution, validation, or compatibility, but they do not replace the Markdown contracts and do not make AI-DOS a standalone agent runtime.

## Installation complete

Installation is complete when:

- `docs/AI-DOS/` contains the reusable product contracts;
- the Target Project has a separate declared truth root;
- root `AGENTS.md` exposes the reading order;
- a compatible external agent can resolve one bounded task without inventing authority;
- product truth and Target truth remain separate.
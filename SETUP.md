# Forge AI Setup Guide

## Scope

This guide prepares a local source checkout of Forge AI for inspection, development, validation, and the current CLI status check.

Forge AI is the self-hosting Target Project used to develop and validate AI-DOS. It is not the reusable AI-DOS product, and this repository is not an AI-DOS installation package.

The current CLI is an early local interface. It verifies that Forge AI boots, loads a Target Repository's root `AGENTS.md` contract, and exposes one bounded `validate` command for Target-contract validation. It does not yet install AI-DOS, execute the full governed runtime, modify a Target repository, or activate roadmap capabilities.

## Prerequisites

Install:

- Git;
- Node.js 18 or newer;
- npm, included with Node.js.

A current Node.js LTS release is recommended.

Verify the tools:

```bash
git --version
node --version
npm --version
```

No environment variables, credentials, external services, databases, or sibling repositories are required for the current local checks.

## Clone the Repository

```bash
git clone https://github.com/nrttns/forge-ai.git
cd forge-ai
```

## Install Dependencies

Use the committed lockfile for a reproducible dependency install:

```bash
npm ci
```

Do not commit `node_modules/`, `dist/`, local editor state, credentials, certificates, or environment files. The repository `.gitignore` excludes these common local artifacts.

## Validate the Checkout

Run the complete current validation set:

```bash
npm test
npm run typecheck
npm run build
npm run test:install
npm run test:execution
npm run test:offline
npm run test:uninstall
npm run test:rollback
```

Expected results:

- tests complete without assertion failures;
- TypeScript type checking completes without errors;
- compiled CommonJS output is written to `dist/`.
- the packed CLI installs into an isolated temporary directory and its installed `forge-ai` binary validates the repository Target contract.
- the compiled CLI runs as a separate local process, returns deterministic success and failure results, and leaves the Target unchanged.
- the local package installs from its archive with npm offline mode and the installed CLI validates the Target while common Node network APIs are blocked.
- uninstall removes the installed `forge-ai` package and binary while preserving Target content, opt-in runtime data, and unrelated consumer-owned files.
- rollback restores the prior local package version from its preserved archive while retaining Target content, runtime data, and unrelated consumer-owned files.

The local-install validation creates its package archive, npm cache, logs, and installation under a temporary directory. It removes that directory after the check and does not install Forge AI globally or modify the Target Repository.

The local-execution validation creates temporary valid and invalid Target fixtures, verifies process exit codes and output channels, confirms the valid Target contract is unchanged, and removes both fixtures afterward.

The offline validation uses an empty npm cache for `npm install --offline`, preloads a network-denial guard for the installed CLI process, and removes its package, caches, logs, guard, and installation afterward.

The uninstall validation operates only in a temporary installation prefix. It verifies the AI-DOS-owned package boundary and removes the entire temporary workspace after checking preservation rules.

The rollback validation creates current and candidate local package archives, preserves and verifies the current archive before restoring it after an isolated update, and removes the entire temporary workspace afterward.

## Run in Development Mode

Start the TypeScript entry point directly:

```bash
npm run dev
```

Expected output:

```text
Forge AI booted.
```

Check a local Target path:

```bash
npm run dev -- --target .
```

Request machine-readable output:

```bash
npm run dev -- --target . --json
```

Run the bounded Target-contract validation command:

```bash
npm run dev -- validate --target .
npm run dev -- validate --target . --json
```

Optionally store the successful validation result outside the Target Repository:

```bash
npm run dev -- validate --target . --data-dir ../forge-ai-runtime-data --json
```

The `--target` value may be an absolute or relative path. Forge AI resolves it to an absolute path and stops with an error if the path is not a directory or its root `AGENTS.md` contract is missing, is not a file, or is empty.

Runtime-data persistence is opt-in. Without `--data-dir`, the CLI writes no runtime-data record. The data directory must not be the Target path, inside the Target, or a parent of the Target. A successful persisted validation writes `target-validation.json`; failed validation writes no record.

The record contains the resolved absolute Target and contract paths. Choose a locally protected data directory appropriate for that information; the CLI does not upload or transmit the record.

## Run the Built CLI

Build first:

```bash
npm run build
```

Then run the compiled entry point:

```bash
node dist/main.js
node dist/main.js --target .
node dist/main.js --target . --json
node dist/main.js validate --target .
node dist/main.js validate --target . --json
node dist/main.js validate --target . --data-dir ../forge-ai-runtime-data --json
```

Current command and options:

| Command or option | Purpose |
|:---|:---|
| `validate` | Validate the root `AGENTS.md` contract of exactly one Target Repository without modifying it. |
| `--target <path>` | Resolve the Target directory and load its root `AGENTS.md` contract. Required by `validate`. |
| `--data-dir <path>` | Opt in to storing a successful validation result outside the Target Repository. Supported only by `validate`. |
| `--json` | Return the boot status as JSON. |

Unsupported commands or options, multiple commands, a missing `--target` value, and invalid Target contracts return an error and a nonzero process exit status.

## Governed Repository Use

Before an AI agent or automation classifies, plans, edits, validates, reviews, or reports work in this repository, read the contracts in this order:

1. `AGENTS.md`;
2. `docs/Projects/ForgeAI/Mission/AGENTS.md`;
3. `docs/AI/AGENTS.md`.

The root contract separates Forge AI Target Project truth under `docs/Projects/ForgeAI/` from AI-DOS product truth under `docs/AI/`. Local setup does not authorize capability advancement, ProjectStatus mutation, implementation, release, or any other governed state transition.

## Updating a Local Checkout

Preserve local work before updating. From a clean checkout of the default branch:

```bash
git switch master
git pull --ff-only
npm ci
npm test
npm run typecheck
npm run build
npm run test:install
npm run test:execution
npm run test:offline
npm run test:uninstall
npm run test:rollback
```

Run `npm ci` again whenever `package-lock.json` changes.

## Troubleshooting

### `npm ci` rejects the lockfile

Confirm that both `package.json` and `package-lock.json` came from the same commit, then retry from a clean checkout. Do not regenerate the lockfile merely to bypass a mismatch.

### Target path does not exist

Check the path and current working directory:

```bash
node dist/main.js --target .
```

On Windows PowerShell, relative paths such as `.` are supported:

```powershell
node dist/main.js --target .\ --json
```

### `dist/main.js` is missing

Create the compiled output:

```bash
npm run build
```

### Unsupported argument

The current CLI accepts the bounded `validate` command plus `--target <path>` and `--json`. Remove any other command or option.

## License and Public-Preview Boundaries

Forge AI is licensed under the [Apache License 2.0](LICENSE). Copyright and attribution information is recorded in [NOTICE](NOTICE).

The package remains marked `"private": true` only to prevent accidental npm publication. It does not change the repository's open-source license.

External pull requests are not currently accepted. See [CONTRIBUTING.md](CONTRIBUTING.md). Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md). Publication status and remaining administrative checks are tracked in [PUBLIC_RELEASE_READINESS.md](PUBLIC_RELEASE_READINESS.md).

# Forge AI Setup Guide

## Scope

This guide prepares a local source checkout of Forge AI for inspection, development, validation, and the current CLI status check.

Forge AI is the self-hosting Target Project used to develop and validate AI-DOS. It is not the reusable AI-DOS product, and this repository is not an AI-DOS installation package.

The current CLI is an early local interface. It verifies that Forge AI boots and, when supplied, that a Target path exists. It does not yet install AI-DOS, execute the full governed runtime, modify a Target repository, or activate roadmap capabilities.

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
```

Expected results:

- tests complete without assertion failures;
- TypeScript type checking completes without errors;
- compiled CommonJS output is written to `dist/`.

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

The `--target` value may be an absolute or relative path. Forge AI resolves it to an absolute path and stops with an error if the path does not exist.

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
```

Current options:

| Option | Purpose |
|:---|:---|
| `--target <path>` | Resolve and verify an existing Target path. |
| `--json` | Return the boot status as JSON. |

Unsupported options, a missing `--target` value, and nonexistent Target paths return an error and a nonzero process exit status.

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

The current CLI accepts only `--target <path>` and `--json`. Remove any other option.

## License and Public-Preview Boundaries

Forge AI is licensed under the [Apache License 2.0](LICENSE). Copyright and attribution information is recorded in [NOTICE](NOTICE).

The package remains marked `"private": true` only to prevent accidental npm publication. It does not change the repository's open-source license.

External pull requests are not currently accepted. See [CONTRIBUTING.md](CONTRIBUTING.md). Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md). Publication status and remaining administrative checks are tracked in [PUBLIC_RELEASE_READINESS.md](PUBLIC_RELEASE_READINESS.md).

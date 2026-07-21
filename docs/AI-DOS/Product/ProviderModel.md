# AI-DOS Provider Model

AI-DOS is provider-neutral. A provider is the model host, agent runtime, editor integration, automation platform, repository service, or tool environment that supplies capabilities used to perform an authorized task.

Providers execute bounded contracts. They do not own AI-DOS product truth, Target Project truth, Human Governance authority, or lifecycle approval.

## Provider Responsibilities

A provider may:

- receive an invocation;
- expose its available capabilities and limitations;
- read authorized context;
- call tools and services;
- execute approved mutations;
- return outputs, evidence, warnings, and blockers.

The provider must operate within the resolved Target Context, applicable AI-DOS contracts, explicit execution scope, protected areas, and Human Governance decisions.

## Provider Independence

AI-DOS must not require one specific model, agent host, repository provider, editor, command-line tool, or protocol.

A provider adapter may translate AI-DOS contracts into host-specific discovery or tool behavior, but the adapter is non-authoritative. It must not restate, narrow, broaden, or replace the canonical contract it exposes.

## Capability Is Not Authority

A provider capability declaration answers what the provider can technically do. It does not answer whether the action is allowed.

For example, access to GitHub write tools does not authorize a branch, commit, pull request, merge, issue mutation, or repository setting change. Those actions still require exact Human and Target authority.

## Provider-Local State

Provider memory, chat history, working directories, cached files, tool results, branches, and local configuration are operational inputs or evidence. They do not become Target truth merely because a provider can access them.

Current Target state must be resolved from the Target-owned authorities identified by the Target contract.

## Provider Selection

AI-DOS selects only the provider capabilities needed by the active execution contract. Different providers may be used for research, editing, review, validation, repository operations, or other bounded roles.

Provider selection must preserve:

- authority and ownership boundaries;
- reviewed-subject identity;
- context integrity;
- evidence provenance;
- protected areas;
- the distinction between recommendation and authorized action.

## Provider Failure and Safe Stop

AI-DOS stops or selects another authorized route when a provider cannot access required resources, cannot preserve identity, lacks necessary capability, cannot produce required evidence, or would exceed the authorized boundary.

A provider limitation must be reported honestly. It must not be hidden by inventing successful execution or broader validation.

## Implementation-Language Boundary

A provider must not infer that AI-DOS is a JavaScript, TypeScript, Node.js, or npm product because the repository contains a bounded CLI or distribution implementation.

Implementation language and tooling are replaceable surfaces. The governing Markdown contracts define the product behavior and authority model.

## Example Providers

Claude Code, Codex, GitHub Copilot, z.ai, DeepSeek, local models, IDE agents, and future execution hosts may act as providers when they can consume the required contracts and operate within the declared boundaries. Their brand or model identity does not change the AI-DOS authority model.

For normative behavior, see `docs/AI-DOS/AGENTS.md`, `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AgentSystemPrompt.md`, and the applicable provider invocation and execution contracts.

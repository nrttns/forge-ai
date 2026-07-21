# AI Framework Compatibility Policy

## Status

Status: AI Framework v1.0 RC2 Lifecycle Policy

Document Type: Compatibility Policy

Authority: `docs/AI-DOS/Lifecycle/README.md`

---

## Purpose

This document defines compatibility expectations for AI Framework documents, Project Templates, agent system prompts, tooling rules, and existing adopting projects.

---

## Compatibility Surfaces

### AI Framework Documents

Framework documents should remain discoverable at their documented paths unless a deprecation and migration path is provided.

Non-breaking document changes include clarification, reference repair, new examples, expanded rationale, and additive sections that preserve existing meaning.

Breaking document changes include authority changes, boot sequence changes, validation requirement changes, certification model changes, or removal of required framework surfaces.

### Project Templates

Project Templates should remain compatible with projects that adopted the existing AI Framework structure.

Non-breaking template changes include optional files, clearer placeholders, adoption checklist refinements, and typo corrections.

Breaking template changes include required path changes, required governance-file changes, changed source-of-truth expectations, or new mandatory adoption gates that invalidate existing projects without migration guidance.

### Agent System Prompts

Agent system prompts must remain aligned with the AI Framework authority model and operating sequence.

Non-breaking prompt changes include clearer sequencing, safer language, and better references.

Breaking prompt changes include changed authority order, removed validation obligations, changed ProjectStatus handling, or altered implementation authorization rules.

### Tooling Rules

Tooling rules should continue to support compatible agent execution.

Non-breaking tooling changes include clarified commands, corrected paths, and added guardrails that preserve current work patterns.

Breaking tooling changes include changed required boot order, removed source-of-truth checks, changed source-code safety expectations, or incompatible command semantics.

### Existing Adopting Projects

Existing adopting projects should be able to continue operating under a certified framework release until they intentionally migrate.

Minor and patch updates should not require repository restructuring. Major updates may require migration and must provide guidance.

---

## Breaking Changes

A change is breaking if it requires adopting projects, agents, tools, templates, commands, workflows, validation documents, certification evidence, or governance references to change before they can continue using the framework safely.

Breaking changes require:

- explicit changelog entry;
- migration guidance;
- deprecation path when replacing existing surfaces;
- compatibility impact review;
- human approval before release.

---

## Non-Breaking Changes

A change is non-breaking when it preserves existing framework authority, existing required paths, validation obligations, certification expectations, and adoption compatibility.

Non-breaking changes may still require validation, review, release checklist completion, and changelog entries.

# AI-DOS Workflow Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI/Templates/Workflow/`.

## Purpose

The Workflow family provides reusable document structures for describing a bounded workflow model supplied by an owning authority.

It does not define or execute the active AI-DOS Workflows layer.

## Component Inventory

| Component | Purpose |
|:---|:---|
| `WorkflowTemplate.md` | Reusable structure for documenting a bounded workflow, its inputs, outputs, transitions, roles, conditions, failure handling, and handoffs. |

## Required Inputs

- workflow subject, purpose, and bounded scope;
- owning authority and intended consumer;
- declared inputs, outputs, states, transitions, and handoffs;
- participating roles and responsibility boundaries;
- preconditions, decision conditions, failure modes, and recovery rules;
- validation requirements and provenance for all governing rules.

## Authority Boundary

The Workflow family owns reusable workflow-document structure only.

It does not own or create:

- task planning or work selection;
- executable workflow routing;
- command selection or execution contracts;
- provider dispatch or implementation;
- validation, review, certification, or approval authority;
- ProjectStatus, DevelopmentPhases, Roadmap, lifecycle, release, or Target-state mutation.

A produced workflow document becomes operational only when an applicable owning authority explicitly adopts it and the relevant execution architecture consumes it.

## Selection Rules

1. Use this family only when a workflow document is explicitly requested.
2. Identify the owning authority before instantiating the template.
3. Treat all states, transitions, commands, providers, and mutation rules as supplied inputs; do not invent them from the template.
4. Do not assume a universal lifecycle or mandatory sequence.
5. Separate descriptive workflow structure from executable routing and execution authorization.
6. Apply TPL-000 and STD-010 when applicable.

## Target Independence

No Forge AI path, ProjectStatus, DevelopmentPhases, Roadmap, fixed lifecycle, self-hosting convention, command name, provider, or Target-specific state model is required by default.

## Safe Stop

Stop when the workflow owner, scope, states, transitions, decision conditions, execution boundary, protected boundary, provenance, or intended consumer is missing or ambiguous.

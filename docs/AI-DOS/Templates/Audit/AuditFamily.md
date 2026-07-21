# AI-DOS Audit Template Family

This document is the semantic entry and boundary contract for `docs/AI-DOS/Templates/Audit/`.

## Purpose

The family provides reusable structures for bounded audit artifacts that record audit evidence, observations, findings, nonconformities or control gaps, rationale, risks, and non-authorizing recommendations for an intended consumer.

The semantic owner of this family is the AI-DOS Template Library.

## Component

- `AuditTemplate.md`

## Separation from Validation and Review

Audit artifacts compare an explicitly bounded subject against declared audit authority, criteria, evidence sources, and finding vocabulary to identify evidence-backed findings, nonconformities, control gaps, risks, and recommendations.

Validation artifacts record evidence-backed conformance or result reporting under declared validation rules. Review artifacts evaluate a bounded subject and reasoning record under declared review authority. Audit artifacts may consume validation or review artifacts as evidence only when provenance is explicit, but they do not become validation results, review conclusions, certification records, approval decisions, or lifecycle transitions.

## Authority Boundary

The family provides reusable audit structure only. It does not execute audits automatically, perform corrections, approve artifacts, certify claims, promote status, release artifacts, canonicalize outputs, authorize execution, or mutate product, project, Target, runtime, provider, or catalog state.

An audit result is bounded evidence for the declared consumer. It is not approval, certification, promotion, release, execution authorization, canonicalization, or Target-state mutation.

## Target Independence

This family must not require Forge AI paths, ProjectStatus, DevelopmentPhases, Roadmap, phases, stages, providers, workflows, commands, repository-specific lifecycle states, or Target-specific assumptions. Target-owned values may appear only when explicitly supplied for a bounded Target-owned audit artifact.

## Safe Stop

Stop when audit subject, scope, exclusions, audit authority, criteria, evidence sources, provenance, finding vocabulary, protected boundary, intended consumer, or semantic owner is missing, conflicting, stale, or ambiguous.

Stop when the requested artifact would require execution, correction implementation, approval, certification, promotion, release, canonicalization, or Target-state mutation.

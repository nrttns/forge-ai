# AI-DOS Certification Template Family

This document is the semantic entry and authority-boundary contract for `docs/AI/Templates/Certification/`.

## Purpose

The Certification family provides reusable structures for recording a formal, bounded claim made by an explicitly declared certification authority against declared criteria and evidence.

## Component Inventory

| Component | Purpose |
|:---|:---|
| `CertificationTemplate.md` | Produces a bounded certification artifact with declared subject, scope, authority, certifier identity, criteria, evidence basis, provenance, result vocabulary, limitations, validity, and intended consumer. |

## Selection Rules

1. Use this family only when a certification artifact is explicitly required by the invocation or applicable authority.
2. Identify the certification subject, bounded scope, certification authority, certifier identity, claim vocabulary, criteria, evidence set, provenance, validity rule, limitations, unresolved risks, and intended consumer before selecting the template.
3. Treat Validation and Review artifacts as possible evidence inputs only.
4. Do not infer certification from a passing validation, favorable review, merge, approval request, continuation intent, or release request.
5. Resolve all placeholders and provenance references before treating a produced artifact as complete.
6. Validate the result against TPL-000, STD-010 when applicable, this family contract, and the authority governing the certification claim.

## Required Inputs

- certification subject and bounded scope;
- certification authority and certifier identity;
- claim vocabulary and applicable criteria;
- evidence set and provenance;
- validity period or expiry rule when applicable;
- exclusions, limitations, unresolved risks, and intended consumer.

## Authority Boundary

Certification is not validation, review, approval, promotion, canonicalization, release, execution authorization, or Target-state mutation.

A certification artifact may make only the formal claim authorized by its declared certification authority. It cannot create that authority, widen its scope, approve a release, promote an artifact, or mutate product or Target truth.

Validation findings and review artifacts may be consumed as evidence but do not automatically establish a certification claim.

## Claim Semantics

A certification result must declare its exact vocabulary, for example:

- certified;
- certified with limitations;
- not certified;
- suspended;
- expired;
- revoked;
- blocked;
- insufficient evidence;
- not applicable.

These labels apply only to the bounded certification claim.

## Target Independence

No Forge AI path, ProjectStatus, DevelopmentPhases, Roadmap, fixed certifier, fixed approval authority, repository-specific lifecycle, or self-hosting convention is required by default.

Target-owned certification inputs may be consumed only when explicitly supplied for the bounded certification subject.

## Safe Stop

Stop when subject, scope, certification authority, certifier identity, criteria, evidence, provenance, validity rule, claim vocabulary, exclusions, limitations, unresolved risks, or intended consumer is missing or ambiguous.

Do not invent certification criteria, certifier identity, claim vocabulary, or validity rules.

## Family Validation Checklist

- [ ] `TemplateLibrary.md`, `TemplateIndex.md`, and TPL-000 were consulted.
- [ ] Subject and bounded scope are explicit.
- [ ] Certification authority and certifier identity are declared.
- [ ] Criteria, evidence, provenance, and claim vocabulary are explicit.
- [ ] Validity, expiry, suspension, and revocation semantics are resolved when applicable.
- [ ] Limitations, exclusions, and unresolved risks are recorded.
- [ ] Certification does not claim approval, promotion, release, execution, or mutation authority.
- [ ] No Forge AI or Target-specific path is required by default.
- [ ] Missing evidence or authority ambiguity triggers safe stop.
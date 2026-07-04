# Appendix E — Constitutional Anti-Patterns

> Parent: A.1 — Constitution
> Version: 3.0.0-beta

## Purpose

This appendix catalogs recurring constitutional anti-patterns that violate or
erode Framework constitutional principles.

## Classification

- Critical
- Major
- Minor
- Informational

## Anti-Patterns

### CAP-001 Multiple Sources of Truth
Severity: Critical

Symptoms:
- Duplicate canonical definitions
- Conflicting documentation

Resolution:
- Restore a single canonical owner.

### CAP-002 Hidden Ownership
Severity: Major

Symptoms:
- Undefined owner
- Shared accountability

Resolution:
- Assign exactly one accountable owner.

### CAP-003 Authority Inversion
Severity: Critical

Lower layers override constitutional or governance decisions.

### CAP-004 Layer Leakage
Severity: Major

Runtime redefines architecture.

### CAP-005 Circular Governance
Severity: Critical

Governance depends on implementation outputs.

### CAP-006 Evidence-Free Decisions
Severity: Critical

Architectural decisions made without evidence.

### CAP-007 Untraceable Changes
Severity: Major

No audit trail.

### CAP-008 Human Override Missing
Severity: Critical

No human approval for constitutional actions.

### CAP-009 Governance Drift
Severity: Major

Rules diverge over time without amendment.

### CAP-010 Runtime Owns Planning
Severity: Critical

Runtime creates planning truth.

## Detection Checklist

- [ ] Single source verified
- [ ] Single owner verified
- [ ] Dependency direction preserved
- [ ] Human approval available
- [ ] Evidence attached

## Engine Usage

Validation Engine:
- Detect anti-patterns

Review Engine:
- Recommend remediation

Certification Engine:
- Block critical violations

## Completion Statement

This appendix defines the canonical anti-pattern catalog for constitutional compliance.

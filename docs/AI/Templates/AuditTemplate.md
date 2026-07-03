# Audit Template

## Status

Template Status: Canonical  
Document Type: Audit Specification Template  
Authority: `docs/AI/AIFramework.md`  
Extends: `docs/AI/Commands/AgentAuditCommand.md`

---

# Purpose

This template defines the standard structure for every audit document.

Audits are architectural validation milestones.

An audit evaluates current framework state.

An audit does not define new architecture and does not implement new functionality.

---

# Required Structure

## 1. Audit Identification

Audit identifier, name, type, status, date, reviewer, related Phase, Stage, and Historical Capability.

## 2. Audit Purpose

Why this audit exists and which milestone it validates.

## 3. Audit Scope

Included systems, excluded systems, boundaries.

## 4. Required Reading

Documents reviewed before the audit.

## 5. Audit Inputs

Source code, documentation, tests, RFCs, previous audits, reports.

## 6. Validation Areas

Architecture, ownership, dependencies, contracts, documentation, implementation, testing, performance, security, quality gates.

## 7. Architecture Review

Ownership, dependency direction, layer isolation, consistency, framework rules.

## 8. Ownership Review

One owner per responsibility, no duplication, no drift.

## 9. Dependency Review

Allowed dependencies, forbidden dependencies, circular dependencies, reverse flow.

## 10. Contract Review

Interfaces, DTOs, entities, repositories, public APIs.

## 11. Documentation Review

Completeness, cross references, terminology, synchronization.

## 12. Implementation Review

Scope compliance and architectural alignment.

## 13. Validation Results

Commands/checks executed and pass/fail.

## 14. Findings

Severity, description, affected area, evidence, recommendation.

## 15. Risks

Known risks, deferred work, architectural concerns, open questions.

## 16. Audit Verdict

Exactly one: PASS, PASS WITH OBSERVATIONS, REQUIRES FOLLOW-UP, FAILED.

## 17. Recommendations

Immediate next step, required follow-up, future audit, deferred work.

## 18. Exit Decision

Proceed, repeat, require implementation, or fail.

## 19. Related Documents

References.

## 20. Next Audit

Next planned audit.

---

# Audit Completion Checklist

- [ ] Scope defined
- [ ] Required reading completed
- [ ] Architecture reviewed
- [ ] Ownership reviewed
- [ ] Dependencies reviewed
- [ ] Contracts reviewed
- [ ] Documentation reviewed
- [ ] Validation executed
- [ ] Findings documented
- [ ] Risks documented
- [ ] Verdict assigned
- [ ] Recommendations provided
- [ ] Exit decision recorded
- [ ] References verified

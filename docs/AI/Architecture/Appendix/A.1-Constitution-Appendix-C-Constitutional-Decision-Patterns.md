# Appendix C: Constitutional Decision Patterns

> **Parent Document:** [A.1 — Constitution](../A.1-Constitution.md) (`AI-DOS-ARCH-A.1`)  
> **Version:** 3.0.0-beta  
> **Status:** Draft

---

## C.1 Purpose

This appendix defines reusable constitutional decision patterns for theAI-DOS Framework.

Decision Patterns translate the principles, authority rules, source-of-truth rules, evidence expectations, violation categories, and amendment constraints defined in [A.1 — Constitution](../A.1-Constitution.md) into repeatable decision structures.

The purpose of this appendix is to help humans, AI agents, governance reviewers, validation engines, review engines, and certification engines resolve recurring constitutional questions consistently without redefining constitutional authority.

This appendix does not introduce new constitutional principles. It operationalizes the parent Constitution.

---

## C.2 Decision Pattern Model

Each Constitutional Decision Pattern follows the same schema.

| Field | Description |
|:---|:---|
| **Pattern ID** | Unique identifier using `CDP-<SEQ>`. |
| **Pattern Name** | Short name for the recurring decision situation. |
| **Trigger** | The situation that activates the pattern. |
| **Constitutional Basis** | Parent Constitution section(s) that govern the decision. |
| **Decision Rule** | The required decision outcome or routing rule. |
| **Required Evidence** | Minimum evidence needed before applying the pattern. |
| **Allowed Outcome** | Compliant result. |
| **Forbidden Outcome** | Non-compliant result. |
| **Escalation** | Required escalation path when the pattern cannot be safely applied. |

---

## C.3 Pattern Classification

Decision Patterns are grouped by decision domain.

| Domain | Description |
|:---|:---|
| **Authority Patterns** | Resolve authority conflicts and precedence questions. |
| **Source-of-Truth Patterns** | Resolve canonical truth, duplication, and contradiction questions. |
| **Ownership Patterns** | Resolve accountability, owner ambiguity, and boundary questions. |
| **Evidence Patterns** | Resolve evidence sufficiency and assumption-related questions. |
| **Architecture Patterns** | Resolve boundary, dependency, and implementation-authority questions. |
| **Amendment Patterns** | Resolve constitutional change and amendment-routing questions. |
| **Compliance Patterns** | Resolve violation classification and remediation-routing questions. |

---

## C.4 Authority Decision Patterns

### CDP-001: Human Governance Prevails

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-001` |
| **Pattern Name** | Human Governance Prevails |
| **Trigger** | A human governance decision conflicts with an AI-generated recommendation, automated workflow, runtime action, or lower-level Framework artifact. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 7 — Human Authority; Section 12 — Decision Principles. |
| **Decision Rule** | Human Governance is the final authority. Delegated systems may advise, but they shall not override accountable human decision-making. |
| **Required Evidence** | Conflicting decision records; identity of the decision owner; affected document or process; impact analysis. |
| **Allowed Outcome** | Follow the Human Governance decision and record rationale, evidence, and affected artifacts. |
| **Forbidden Outcome** | Allow AI, automation, runtime, engine, agent, swarm, workflow, or platform adapter to supersede Human Governance. |
| **Escalation** | Escalate immediately to Human Governance when the human decision appears to contradict the Constitution. |

### CDP-002: Constitution Prevails Over Framework Documents

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-002` |
| **Pattern Name** | Constitution Prevails Over Framework Documents |
| **Trigger** | A Framework Core document, governance policy, runtime specification, planning document, or operational document contradicts A.1 — Constitution. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 8 — Framework Authority; Section 16 — Compliance; Section 17 — Constitutional Violations. |
| **Decision Rule** | The Constitution prevails. The conflicting lower-level artifact requires remediation. |
| **Required Evidence** | Conflicting passages; document authority levels; affected constitutional section; impact assessment. |
| **Allowed Outcome** | Preserve constitutional rule and update or quarantine the lower-level artifact. |
| **Forbidden Outcome** | Treat the lower-level artifact as an exception without Human Governance approval. |
| **Escalation** | Escalate to Framework Governance for interpretation; escalate to Human Governance if constitutional amendment is required. |

### CDP-003: Lower Authority Cannot Create Higher Authority

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-003` |
| **Pattern Name** | Lower Authority Cannot Create Higher Authority |
| **Trigger** | A runtime, command, workflow, agent, platform adapter, or implementation artifact attempts to define governance, constitutional, architectural, or source-of-truth authority. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 8 — Framework Authority; Section 14 — Architectural Principles. |
| **Decision Rule** | Lower authorities consume higher authority; they never create, redefine, or override it. |
| **Required Evidence** | Artifact location; claimed authority; affected owner; dependency direction; downstream consumers. |
| **Allowed Outcome** | Reclassify the content as a proposal, observation, adapter mapping, or implementation detail and route it to the correct authority owner. |
| **Forbidden Outcome** | Allow runtime, implementation, adapter, or tooling output to become canonical architectural truth. |
| **Escalation** | Escalate as a Major or Critical Violation depending on impact. |

### CDP-004: Human Override Required for Constitutional Change

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-004` |
| **Pattern Name** | Human Override Required for Constitutional Change |
| **Trigger** | Any proposal, automation, AI output, or governance process modifies or attempts to modify constitutional text, invariants, authority, or amendment rules. |
| **Constitutional Basis** | Section 7 — Human Authority; Section 18 — Amendment Process. |
| **Decision Rule** | Constitutional change requires Human Governance approval through the Amendment Process. |
| **Required Evidence** | Proposed change; rationale; supporting evidence; impact analysis; affected sections; approval trail. |
| **Allowed Outcome** | Route the change through Proposal → Evidence Collection → Governance Review → Human Approval → Implementation → Version Update → Canonical Publication. |
| **Forbidden Outcome** | Publish constitutional changes autonomously or treat automated approval as sufficient. |
| **Escalation** | Critical Violation if attempted without Human Governance approval. |

---

## C.5 Source-of-Truth Decision Patterns

### CDP-005: One Canonical Definition

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-005` |
| **Pattern Name** | One Canonical Definition |
| **Trigger** | Two or more documents define the same constitutional, governance, architectural, runtime, or planning concept as canonical. |
| **Constitutional Basis** | Section 6 — Fundamental Principles; Section 9 — Source of Truth; Section 17 — Constitutional Violations. |
| **Decision Rule** | Every architectural concept shall have exactly one canonical definition and one authoritative owner. |
| **Required Evidence** | Conflicting definitions; document paths; claimed authority; owner mapping; usage impact. |
| **Allowed Outcome** | Select or confirm the canonical owner; update other documents to reference rather than redefine. |
| **Forbidden Outcome** | Preserve multiple competing canonical definitions. |
| **Escalation** | Major Violation; Critical if the conflict affects constitutional authority or Human Governance. |

### CDP-006: Reference, Do Not Duplicate

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-006` |
| **Pattern Name** | Reference, Do Not Duplicate |
| **Trigger** | A document needs to use a concept already defined by another canonical document. |
| **Constitutional Basis** | Section 9 — Source of Truth; Section 13 — Evidence Principles; Section 14 — Architectural Principles. |
| **Decision Rule** | The consuming document shall reference the canonical source and may only provide domain-specific application notes without redefining the concept. |
| **Required Evidence** | Canonical source path; consuming document path; intended use; domain-specific rationale. |
| **Allowed Outcome** | Add explicit cross-reference and explain local application. |
| **Forbidden Outcome** | Copy and modify the canonical definition, creating drift. |
| **Escalation** | Escalate to Framework Governance if the canonical owner is unclear. |

### CDP-007: Project Status Is Operational Truth Only

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-007` |
| **Pattern Name** | Project Status Is Operational Truth Only |
| **Trigger** | `ProjectStatus` or equivalent operational state document is used to define architecture, principles, authority, or planning hierarchy. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 9 — Source of Truth; Section 14 — Architectural Principles. |
| **Decision Rule** | Project status records live operational state. It does not define architectural truth. |
| **Required Evidence** | Status entry; affected architectural concept; canonical owner; reason for proposed status update. |
| **Allowed Outcome** | Keep operational status in ProjectStatus and reference the architecture source. |
| **Forbidden Outcome** | Let operational state define or override architecture. |
| **Escalation** | Major Violation if operational state changes architecture without governance approval. |

---

## C.6 Ownership Decision Patterns

### CDP-008: Exactly One Accountable Owner

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-008` |
| **Pattern Name** | Exactly One Accountable Owner |
| **Trigger** | A subsystem, document, concept, engine, workflow, or capability has no owner, multiple owners, or shared accountability without a primary owner. |
| **Constitutional Basis** | Section 6 — Fundamental Principles; Section 14 — Architectural Principles; Section 16 — Compliance. |
| **Decision Rule** | Every constitutional rule, document, capability, engine, and subsystem shall have exactly one accountable owner. |
| **Required Evidence** | Asset identity; current owner claims; lifecycle responsibility; affected consumers. |
| **Allowed Outcome** | Assign or confirm one accountable owner and document consumer relationships separately. |
| **Forbidden Outcome** | Leave ownership ambiguous or split accountability across peer owners. |
| **Escalation** | Escalate to Framework Governance when ownership cannot be derived from current architecture. |

### CDP-009: Consumers Do Not Own Upstream Truth

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-009` |
| **Pattern Name** | Consumers Do Not Own Upstream Truth |
| **Trigger** | A downstream consumer such as Runtime, Execution, Validation, Agent, Swarm, Platform Adapter, or Project Implementation attempts to redefine upstream Framework truth. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 8 — Framework Authority; Section 14 — Architectural Principles. |
| **Decision Rule** | Consumers may apply and adapt upstream truth within their boundary, but they shall not redefine it. |
| **Required Evidence** | Consumer artifact; upstream canonical source; proposed change; dependency direction. |
| **Allowed Outcome** | Route proposed upstream changes to the owning authority as a change request or amendment proposal. |
| **Forbidden Outcome** | Accept downstream consumer output as a replacement for upstream authority. |
| **Escalation** | Major Violation; Critical if constitutional authority is affected. |

---

## C.7 Evidence Decision Patterns

### CDP-010: Evidence Before Decision

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-010` |
| **Pattern Name** | Evidence Before Decision |
| **Trigger** | A significant architectural, governance, planning, runtime, validation, review, certification, or amendment decision is proposed. |
| **Constitutional Basis** | Section 12 — Decision Principles; Section 13 — Evidence Principles. |
| **Decision Rule** | Significant decisions require sufficient, verifiable, traceable evidence before approval. |
| **Required Evidence** | Source documents; observed issue; decision rationale; impact analysis; validation or review results when applicable. |
| **Allowed Outcome** | Proceed after evidence is attached and traceable. |
| **Forbidden Outcome** | Approve significant decisions based only on preference, assumption, urgency, or convenience. |
| **Escalation** | Stop decision process until evidence is collected; classify missing evidence as Minor or Major depending on impact. |

### CDP-011: Assumption Becomes Finding, Not Truth

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-011` |
| **Pattern Name** | Assumption Becomes Finding, Not Truth |
| **Trigger** | An AI agent, reviewer, or governance participant identifies a plausible but unverified architectural conclusion. |
| **Constitutional Basis** | Section 6 — Fundamental Principles; Section 13 — Evidence Principles. |
| **Decision Rule** | Unverified assumptions may be recorded as observations or findings, but shall not become canonical truth until evidence is supplied and reviewed. |
| **Required Evidence** | Statement of assumption; missing evidence; proposed verification path; risk of acting without verification. |
| **Allowed Outcome** | Record as observation, open question, or evidence request. |
| **Forbidden Outcome** | Treat the assumption as authoritative architecture. |
| **Escalation** | Escalate to audit or governance review if the assumption blocks progress. |

---

## C.8 Architecture Decision Patterns

### CDP-012: Architecture Before Implementation

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-012` |
| **Pattern Name** | Architecture Before Implementation |
| **Trigger** | Implementation work is proposed before approved architectural specification exists. |
| **Constitutional Basis** | Section 6 — Fundamental Principles; Section 14 — Architectural Principles; Section 16 — Compliance. |
| **Decision Rule** | Implementation shall consume approved architecture; it shall not create architecture by execution. |
| **Required Evidence** | Proposed implementation scope; existing specification; missing architecture; owner responsible for approval. |
| **Allowed Outcome** | Pause implementation and create or approve the required architecture first. |
| **Forbidden Outcome** | Implement first and use resulting code or output as architectural truth. |
| **Escalation** | Major Violation if implementation proceeds without authority; Critical if constitutional or source-of-truth rules are bypassed. |

### CDP-013: Dependency Direction Preserved

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-013` |
| **Pattern Name** | Dependency Direction Preserved |
| **Trigger** | A new document, runtime component, engine, workflow, adapter, or implementation introduces a dependency. |
| **Constitutional Basis** | Section 4 — Constitutional Authority; Section 14 — Architectural Principles. |
| **Decision Rule** | Dependencies shall flow from higher authority and architecture toward runtime, execution, validation, adapters, and implementations. Reverse authority flow is prohibited. |
| **Required Evidence** | Source artifact; target dependency; authority levels; owner mapping; expected consumer relationship. |
| **Allowed Outcome** | Accept dependency only if it preserves approved direction and boundary discipline. |
| **Forbidden Outcome** | Allow implementation, runtime, adapter, or tooling to redefine upstream authority. |
| **Escalation** | Major Violation for reverse flow; Critical if constitutional authority is overridden. |

### CDP-014: Platform Adapter Consumes Framework

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-014` |
| **Pattern Name** | Platform Adapter Consumes Framework |
| **Trigger** | A platform-specific adapter introduces behavior, terminology, workflow, validation, or architecture that appears to modify Framework Core. |
| **Constitutional Basis** | Section 5 — Constitutional Scope; Section 6 — Fundamental Principles; Section 14 — Architectural Principles. |
| **Decision Rule** | Platform adapters may translate Framework concepts into platform-specific execution, but shall not redefine Framework concepts. |
| **Required Evidence** | Adapter scope; Framework concept consumed; platform-specific mapping; impact on Framework Core. |
| **Allowed Outcome** | Keep mapping inside adapter boundary and reference Framework Core. |
| **Forbidden Outcome** | Promote adapter-specific behavior into Framework Core without governance approval. |
| **Escalation** | Major Violation if adapter redefines Framework authority. |

---

## C.9 Amendment Decision Patterns

### CDP-015: Clarification vs Amendment

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-015` |
| **Pattern Name** | Clarification vs Amendment |
| **Trigger** | A proposed constitutional text change is presented as a clarification. |
| **Constitutional Basis** | Section 18 — Amendment Process; Section 15 — Evolution Principles. |
| **Decision Rule** | If the change alters meaning, authority, scope, invariant, compliance expectation, or decision outcome, it is an amendment. If it only improves readability without changing meaning, it may be a clarification subject to governance review. |
| **Required Evidence** | Before/after text; impact analysis; affected sections; decision-outcome comparison. |
| **Allowed Outcome** | Route meaning-changing updates through Amendment Process; route non-substantive edits through documentation governance. |
| **Forbidden Outcome** | Hide constitutional amendments inside editorial cleanup. |
| **Escalation** | Escalate to Human Governance when classification is disputed. |

### CDP-016: Amendment Cannot Weaken Human Authority

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-016` |
| **Pattern Name** | Amendment Cannot Weaken Human Authority |
| **Trigger** | A constitutional amendment proposes reducing Human Governance oversight, approval, traceability, or override rights. |
| **Constitutional Basis** | Section 7 — Human Authority; Section 10 — Constitutional Invariants; Section 18 — Amendment Process. |
| **Decision Rule** | Amendments shall not weaken Human Authority unless explicitly approved through the highest level of Human Governance as a constitutional revision. |
| **Required Evidence** | Proposed amendment; impact on Human Governance; risk analysis; approval requirements; alternative options. |
| **Allowed Outcome** | Reject, revise, or escalate as a constitutional revision requiring Human Governance approval. |
| **Forbidden Outcome** | Approve reduced human authority through ordinary governance or automation. |
| **Escalation** | Mandatory Human Governance escalation. |

---

## C.10 Compliance Decision Patterns

### CDP-017: Violation Classification by Impact

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-017` |
| **Pattern Name** | Violation Classification by Impact |
| **Trigger** | A constitutional violation or suspected violation is detected. |
| **Constitutional Basis** | Section 16 — Compliance; Section 17 — Constitutional Violations. |
| **Decision Rule** | Classify severity based on authority impact, source-of-truth impact, ownership impact, dependency impact, and reversibility. |
| **Required Evidence** | Violation description; affected principle; impacted artifacts; owner; severity rationale; remediation path. |
| **Allowed Outcome** | Record violation as Critical, Major, Minor, or Observation and route remediation accordingly. |
| **Forbidden Outcome** | Ignore, silently fix, or downgrade without evidence. |
| **Escalation** | Critical and Major violations escalate to Framework Governance; Critical violations involving Human Governance escalate to Human Governance. |

### CDP-018: Stop Before Canonical Contamination

| Field | Value |
|:---|:---|
| **Pattern ID** | `CDP-018` |
| **Pattern Name** | Stop Before Canonical Contamination |
| **Trigger** | Non-compliant content is about to be merged, published, certified, or used as a canonical input. |
| **Constitutional Basis** | Section 9 — Source of Truth; Section 16 — Compliance; Section 17 — Constitutional Violations; Section 19 — Certification. |
| **Decision Rule** | Stop publication or certification until the violation is resolved or formally escalated. |
| **Required Evidence** | Non-compliant content; affected canonical source; certification stage; risk assessment. |
| **Allowed Outcome** | Block advancement, document finding, remediate, and review again. |
| **Forbidden Outcome** | Advance state, certify, or publish with unresolved constitutional conflict. |
| **Escalation** | Escalate to Framework Governance or Human Governance depending on severity. |

---

## C.11 Decision Pattern Routing Table

| Situation | Apply Pattern(s) | Primary Owner |
|:---|:---|:---|
| Human and AI disagree | `CDP-001` | Human Governance |
| Lower document contradicts Constitution | `CDP-002` | Framework Governance |
| Runtime defines architecture | `CDP-003`, `CDP-009`, `CDP-013` | Framework Architecture Team |
| Constitutional text is changed | `CDP-004`, `CDP-015`, `CDP-016` | Human Governance |
| Multiple definitions exist | `CDP-005`, `CDP-006` | Framework Governance |
| ProjectStatus defines architecture | `CDP-007` | Project Status Owner; Framework Governance |
| Ownership is unclear | `CDP-008` | Framework Governance |
| Evidence is missing | `CDP-010`, `CDP-011` | Review / Validation Owner |
| Implementation precedes architecture | `CDP-012` | Framework Architecture Team |
| Platform adapter redefines Framework | `CDP-014` | Platform Owner; Framework Governance |
| Suspected violation detected | `CDP-017`, `CDP-018` | Compliance / Framework Governance |

---

## C.12 Machine-Actionable Decision Record Format

The following YAML-compatible structure MAY be used by future Validation, Review, Certification, Runtime, or Agent tooling to record a decision pattern application.

```yaml
decision_pattern_application:
  pattern_id: "CDP-000"
  decision_id: "DEC-YYYY-NNN"
  decision_owner: ""
  triggering_condition: ""
  constitutional_basis:
    - "A.1 Section"
  evidence:
    - evidence_id: ""
      source: ""
      summary: ""
  decision_rule_applied: ""
  allowed_outcome: ""
  forbidden_outcome_checked: true
  escalation_required: false
  escalation_target: ""
  verdict: "COMPLIANT | NON_COMPLIANT | ESCALATED | BLOCKED"
  notes: ""
```

This structure is advisory for future tooling. It does not replace the Constitution or formal governance records.

---

## C.13 Completion Checklist

- [ ] Decision domain identified.
- [ ] Applicable Constitutional Decision Pattern selected.
- [ ] Constitutional basis cited.
- [ ] Required evidence collected.
- [ ] Decision owner identified.
- [ ] Allowed outcome verified.
- [ ] Forbidden outcome checked.
- [ ] Escalation applied when required.
- [ ] Decision record preserved.
- [ ] Related documents updated when needed.

---

## C.14 Related Documents

- [A.1 — Constitution](../A.1-Constitution.md)
- [Appendix A — Constitutional Glossary](./A.1-Constitution-Appendix-A-Glossary.md)
- [Appendix B — Constitutional Case Studies](./A.1-Constitution-Appendix-B-Constitutional-Case-Studies.md)
- [A.0 — Framework Audit](../A.0-Framework-Audit.md)
- [A.0 Appendix C — Terminology Glossary Extract](../A.0-Framework-Audit-Appendix-C-Terminology-Glossary.md)

---

## C.15 Next Appendix

The next recommended appendix is **Appendix D — Constitutional Compliance Matrix**.

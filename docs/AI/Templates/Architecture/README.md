# Architecture Templates

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `TPL-ARCH-INDEX` |
| Title | Architecture Templates |
| Version | 0.2.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Template Family Index |
| Document Type | Template Index |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-AI.TEMPLATES.ARCHITECTURE.INDEX |
| Scope | Index and usage rules for the Architecture template family |
| Out of Scope | Creating new templates, renaming templates, defining architecture, approving produced documents, or updating ProjectStatus |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/Standards/TPL-001-RFC-Template-Standard.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; TPL-001 RFC template standard |
| Consumes | STD-010 metadata rules; TPL-000 architecture template governance; TPL-001 RFC structure for `RFCTemplate.md` |
| Produces | Architecture template family index and usage routing rules |
| Related Specifications | `docs/AI/Templates/Architecture/ADRTemplate.md`; `docs/AI/Templates/Architecture/ArchitectureTemplate.md`; `docs/AI/Templates/Architecture/GovernanceTemplate.md`; `docs/AI/Templates/Architecture/RFCTemplate.md`; `docs/AI/Templates/Architecture/SpecificationTemplate.md` |
| Supersedes | Earlier in-place draft of the Architecture template family README |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, TPL-001 validation for RFC template routing, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

The Architecture template family defines reusable structures for documents that describe, propose, decide, constrain, or govern architecture. These templates are output contracts; they do not approve documents, create new authority, or update ProjectStatus.

## 2. Template Map

| Template | Use When | Primary Standard | Produces |
|:---|:---|:---|:---|
| `ArchitectureTemplate.md` | Defining a subsystem, platform, framework, product, or integration architecture at document level. | STD-010; TPL-000 | Architecture document |
| `ADRTemplate.md` | Recording an architecture decision, its alternatives, rationale, consequences, and review evidence. | STD-010; TPL-000 | Architecture Decision Record document |
| `RFCTemplate.md` | Proposing an architecture change using the TPL-001 RFC output structure. | STD-010; TPL-000; TPL-001 | RFC document |
| `SpecificationTemplate.md` | Defining contract-bearing requirements, invariants, interfaces, and conformance rules. | STD-010; TPL-000 | Specification document |
| `GovernanceTemplate.md` | Defining stable policy, decision rights, quality gates, exceptions, audit, and change control. | STD-010; TPL-000 | Governance document |

## 3. Family Usage Rules

- Use the smallest template that matches the artifact type.
- Preserve file names and refactor templates in place.
- Keep template metadata separate from the produced document metadata guidance.
- Require produced documents to use the full STD-010 metadata field set.
- Apply TPL-001 to `RFCTemplate.md`; use domain-specific RFC templates when a domain authority provides a stricter RFC template.
- Preserve purpose and ownership; template ownership does not become produced-document ownership.
- Do not create duplicate responsibility or competing authority.
- Do not update ProjectStatus from a template-produced document unless Human Governance explicitly authorizes a status update task.

## 4. Architecture Layer Rules

Architecture templates must preserve the authority hierarchy, define ownership explicitly, separate proposals from accepted decisions, separate architecture from implementation, define validation and review expectations, and identify project-state impact without updating ProjectStatus directly.

Architecture templates must not implement functionality, redefine higher authority, bypass review or certification, treat source code as architectural truth, or turn ProjectStatus into an architecture document.

## 5. Validation Expectations

Before this family is treated as review-ready, validate that every template includes STD-010-compliant template metadata, produced-document metadata guidance, TPL-000 placeholder usage, and no stale authority references, duplicate metadata ownership, or forbidden out-of-scope edits.

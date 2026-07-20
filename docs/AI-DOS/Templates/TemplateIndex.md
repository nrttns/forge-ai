# AI-DOS Template Library Index

This document is the semantic navigation index for `docs/AI/Templates/`.

The canonical library contract is `TemplateLibrary.md`. This index does not define template authority, task planning, workflow routing, execution, approval, certification, promotion, release, or Target-state mutation.

## Reading Order

```text
TemplateLibrary.md
    ↓
Standards/TPL-000-Template-Standard.md
    ↓
Applicable <FamilyName>Family.md
    ↓
Narrowest matching template
```

TPL-000 `0.2.1-draft` records Human Governance acceptance of its bounded material rebase. TPL-001 `0.2.1-draft` records Human Governance acceptance of the bounded RFC authoring rebase. These acceptances do not establish whole-library certification, freeze, or promotion.

## Active Normalized Families

| Family | Semantic entry | Purpose |
|:---|:---|:---|
| Planning | `Planning/PlanningFamily.md` | Reusable planning-document structures; not Target planning authority. |
| Audit | `Audit/AuditFamily.md` | Reusable audit-evidence, findings, control-gap, and recommendation structure. |
| Validation | `Validation/ValidationFamily.md` | Evidence and finding structures. |
| Review | `Review/ReviewFamily.md` | Evaluation, rationale, objections, unresolved matters, and recommendation. |
| Certification | `Certification/CertificationFamily.md` | Formal bounded claim structures under declared certification authority. |
| Workflow | `Workflow/WorkflowFamily.md` | Reusable workflow-document structures; not executable workflow or routing authority. |
| Context | `Context/ContextFamily.md` | Bounded context-capture structures; not Context Engine, Context Assembly, truth, memory, or execution authority. |
| Knowledge | `Knowledge/KnowledgeFamily.md` | Bounded knowledge-claim structures with provenance and epistemic status; not truth, canonicalization, Knowledge Engine, or persistence authority. |
| Memory | `Memory/MemoryFamily.md` | Bounded memory-record structures with retention, retrieval, expiry, correction, and forgetting semantics; not Memory Engine or persistence authority. |

Other template directories remain catalog families and must receive semantic entry documents before they are treated as normalized family contracts.

## Catalog Inventory Status

The verified filesystem inventory and disposition is recorded in:

- `docs/AI/Architecture/Reports/AI-DOS-Template-Library-Filesystem-Inventory-and-Disposition.md`.

| Scope | Current status |
|:---|:---|
| Agents, Architecture, Integration, Migration, Platform, Project | Keep and normalize candidates |
| MultiAgent, Runtime, Swarm | Ownership review required |
| Unregistered Context, Knowledge, Memory, Workflow components | Hold; not active normalized components |
| TPL-001 | Bounded material rebase accepted; Architecture family remains unnormalized |
| Reports under Templates | Relocation or historical classification required |

This register is a disposition boundary only. It does not normalize, activate, approve, certify, or freeze the listed artifacts.

The accepted TPL-001 rebase validation is recorded in `docs/AI/Architecture/Reports/AI-DOS-TPL-001-Material-Rebase-Validation.md`. The reconciled Architecture RFC template remains a catalog component until Architecture family normalization is separately reviewed and accepted.

## Integrity Status

```text
Normalized family scope
    bounded use permitted

TPL-000 material rebase
    accepted

TPL-001 material rebase
    accepted

Architecture family
    not normalized

Temporary integrity gate
    closed

Whole Template Library
    not yet certified or frozen
```

## Selection Rules

1. Resolve the authorized artifact purpose and owning domain.
2. Consult `TemplateLibrary.md` and the current integrity status.
3. Consult the rebased TPL-000 for shared authoring constraints.
4. Open the semantic family entry.
5. Select the narrowest matching template.
6. Return the produced artifact to its owning authority.

Template selection is not task planning, workflow routing, command selection, execution authorization, approval, certification, promotion, release, persistence, or Target-state mutation.

## Entry Naming Convention

Template entry and index documents must use semantic names. `README.md` must not be used as a layer, library, family, authority, or navigation entry document.

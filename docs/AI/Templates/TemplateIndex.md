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

## Active Families

| Family | Semantic entry | Purpose |
|:---|:---|:---|
| Planning | `Planning/PlanningFamily.md` | Reusable planning-document structures; not Target planning authority. |
| Validation | `Validation/ValidationFamily.md` | Evidence and finding structures. |
| Review | `Review/ReviewFamily.md` | Evaluation, rationale, objections, unresolved matters, and recommendation. |
| Certification | `Certification/CertificationFamily.md` | Formal bounded claim structures under declared certification authority. |
| Workflow | `Workflow/WorkflowFamily.md` | Reusable workflow-document structures; not executable workflow or routing authority. |

Other template directories remain catalog families and must receive semantic entry documents before they are normalized as family contracts.

## Selection Rules

1. Resolve the authorized artifact purpose and owning domain.
2. Consult `TemplateLibrary.md` and TPL-000.
3. Open the semantic family entry.
4. Select the narrowest matching template.
5. Return the produced artifact to its owning authority.

Template selection is not task planning, workflow routing, command selection, execution authorization, approval, certification, promotion, release, or Target-state mutation.

## Entry Naming Convention

Template entry and index documents must use semantic names. `README.md` must not be used as a layer, library, family, authority, or navigation entry document.
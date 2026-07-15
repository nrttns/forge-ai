# AI-DOS Architecture RFC Families

## Purpose

`docs/AI/Architecture/RFC/` is the canonical root for AI-DOS architecture RFC families. It does not own all architecture; it routes readers to the correct RFC family.

## RFC Families

| Family | Canonical Directory | Numbering | Responsibility |
|:---|:---|:---|:---|
| Boundary | `Boundary/` | A.2 | Product/Target operational boundary architecture. |
| Runtime | `Runtime/` | A.3 | Runtime architecture. |
| Engine Platform | `EnginePlatform/` | A.4, A.4.x | Engine platform and shared engine foundation architecture. |
| Engine Specializations | `EngineSpecializations/` | A.5.0, A.5.x | Engine specialization template and individual engine RFCs. |
| Distribution | `Distribution/` | A.6 | AI-DOS distribution foundation architecture. |

## Placement Rules

- A.1 is constitutional authority and belongs in `../Constitution/`, not this RFC tree.
- A.2 boundary RFCs belong in `Boundary/`.
- A.3 Runtime RFCs belong in `Runtime/`.
- A.4 and A.4.x Engine Platform RFCs belong in `EnginePlatform/`.
- A.5.0 and A.5.x Engine Specialization RFCs belong in `EngineSpecializations/`.
- A.6 Distribution RFCs belong in `Distribution/`.
- Reports, audits, inventories, and migration records belong in `../Reports/` or `../Discovery/`, not in active RFC families.

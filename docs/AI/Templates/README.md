# AI-DOS Template Library Navigation

This README is the navigation index for `docs/AI/Templates/`.

The canonical Template Library contract is:

```text
docs/AI/Templates/TemplateLibrary.md
```

This README does not define template authority, execution behavior, workflow routing, task planning, Target state, approval, certification, promotion, release, or canonicalization.

## Start Here

Read in this order for a full Template Library review:

```text
TemplateLibrary.md
    ↓
Standards/TPL-000-Template-Standard.md
    ↓
Standards/TPL-001-RFC-Template-Standard.md when the template is RFC-style
    ↓
The applicable family directory
    ↓
The narrowest matching template
```

## Canonical Contract

| Document | Role |
|:---|:---|
| `TemplateLibrary.md` | Canonical library contract: purpose, scope, authority, non-authority, lifecycle, family boundaries, selection rules, produced-artifact semantics, safe stop, and validation. |

## Template Family Index

| Family | Directory | Navigation Purpose |
|:---|:---|:---|
| Agents | `Agents/` | Agent-facing document structures. |
| Architecture | `Architecture/` | Architecture and RFC-facing structures. |
| Context | `Context/` | Context capture and transfer structures. |
| Core | `Core/` | Shared foundational template assets. |
| Integration | `Integration/` | Integration contract structures. |
| Knowledge | `Knowledge/` | Knowledge capture and organization structures. |
| Memory | `Memory/` | Memory documentation structures. |
| Migration | `Migration/` | Migration, compatibility, and deprecation structures. |
| MultiAgent | `MultiAgent/` | Multi-agent documentation structures. |
| Planning | `Planning/` | Generic planning-document structures; not Target planning authority. |
| Platform | `Platform/` | Platform and provider-boundary structures. |
| Project | `Project/` | Generic project-document structures. |
| Review | `Review/` | Review evaluation and recommendation structures; not validation, certification, or approval authority. |
| Runtime | `Runtime/` | Runtime-facing documentation structures. |
| Standards | `Standards/` | Template standards, including TPL-000 and TPL-001. |
| Swarm | `Swarm/` | Swarm documentation structures. |
| Validation | `Validation/` | Validation evidence and finding structures; not review or certification authority. |
| Workflow | `Workflow/` | Workflow-document structures; not executable workflow authority. |

## Selection Navigation

1. Resolve the authorized artifact purpose and owning domain.
2. Open `TemplateLibrary.md` for library-level boundaries.
3. Select the applicable family.
4. Prefer the narrowest matching template.
5. Apply TPL-000, STD-010, and TPL-001 only when applicable.
6. Return to the owning domain authority for approval, execution, lifecycle, or promotion decisions.

Template selection is not task planning, workflow routing, command selection, execution authorization, or Target-state mutation.

## Related Navigation

- Product navigation: `docs/AI/README.md`
- Governance navigation: `docs/AI/GOVERNANCE.md`
- Governance decision policy: `docs/AI/FrameworkGovernance.md`
- Architecture navigation: `docs/AI/Architecture/README.md`
- System Layer navigation: `docs/AI/System/README.md`
- System Layer contract: `docs/AI/System/SystemLayer.md`
- Commands: `docs/AI/Commands/`
- Workflows: `docs/AI/Workflows/`

## Navigation Boundary

This README is not a second `TemplateLibrary.md`. Authority, ownership, lifecycle, selection constraints, produced-artifact semantics, safe-stop rules, and validation requirements belong in the canonical library contract, the applicable template standard, or the owning family document.

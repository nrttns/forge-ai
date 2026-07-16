<!--
Identifier: AI-DOS.TEMPLATES.LIBRARY
Title: AI-DOS Template Library
Version: 1.0.0-draft
Status: Draft
Owner: AI-DOS Template Library
Updated: 2026-07-16
-->

# AI-DOS Template Library

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.TEMPLATES.LIBRARY` |
| Title | AI-DOS Template Library |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | AI-DOS Template Library Contract |
| Document Type | Library Contract |
| Owner | AI-DOS Template Library |
| Approval Authority | Human Governance |
| Last Updated | 2026-07-16 |
| Scope | Reusable template-library authority, boundaries, family model, selection rules, lifecycle, produced-artifact semantics, validation, and safe stop. |
| Out of Scope | Human Governance decisions, architecture authority, Runtime or Engine behavior, System Layer procedures, workflow routing, command execution, Target planning/state, provider implementation, release approval, and generated-artifact promotion. |
| Normative Authority | Human Governance; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`. |
| Dependencies | `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; TPL-001 only for RFC-style templates; applicable domain authority. |
| Inputs | Authorized artifact purpose; applicable domain authority; template family; template standards; metadata requirements; bounded Target-provided inputs when relevant. |
| Outputs | Reusable template selection; bounded template instance; produced-artifact classification; validation evidence; blockers. |

---

## 1. Purpose

The Template Library provides reusable, provider-neutral document structures for AI-DOS and authorized Target Projects.

It separates reusable authoring structure from task planning, workflow routing, execution, approval, certification, promotion, release, and Target-state ownership.

## 2. Scope

The Template Library owns:

- reusable template structures;
- library-level family classification;
- template-selection constraints;
- produced-artifact semantics;
- template lifecycle and validation requirements;
- rules preventing templates from creating authority.

The library begins when an authorized artifact purpose and owning domain are known. It ends when a bounded template or template instance is handed back to the owning domain.

## 3. Authority

The Template Library may define the reusable shape, required sections, placeholders, authoring guidance, validation expectations, and compatibility constraints of templates.

A family or template may narrow these rules for its declared domain but must not contradict TPL-000, applicable metadata standards, the owning architecture or governance authority, or this library contract.

## 4. Non-Authority

The Template Library does not own or create:

- Human Governance approval;
- AI-DOS architecture, Runtime, Engine, Distribution, or System Layer authority;
- command execution or workflow routing;
- task planning, task selection, or execution authorization;
- Target Project source, ProjectStatus, DevelopmentPhases, Roadmap, protected areas, validation declarations, evidence, secrets, configuration, or live state;
- review, certification, promotion, canonicalization, or release decisions;
- provider capabilities or provider dispatch;
- authority merely because an artifact was generated from a template.

Template presence, template selection, template completion, installation, registry presence, validation success, review completion, merge, or continuation intent does not imply authority to execute, mutate, approve, certify, promote, or release.

## 5. Responsibilities

The Template Library shall:

1. preserve AI-DOS as reusable and Target-independent;
2. route users to the narrowest applicable family and template;
3. keep template structure separate from owning-domain authority;
4. identify the lifecycle and authority status of produced artifacts;
5. validate template metadata, placeholders, links, family placement, and authority boundaries;
6. stop safely when ownership, purpose, family, lifecycle, or authority is ambiguous;
7. prevent Forge AI paths or methodology from becoming default AI-DOS template requirements.

## 6. Consumes

The library may consume:

- an explicit artifact purpose;
- the applicable AI-DOS or Target-owned domain authority;
- bounded Target-provided data needed to instantiate placeholders;
- TPL-000 and applicable family rules;
- STD-010 when the produced artifact is a governed Markdown document;
- TPL-001 only for RFC-style templates;
- validation requirements and protected-boundary information supplied for the task.

It must not require ProjectStatus, DevelopmentPhases, Roadmap, phase, stage, capability, or Forge AI repository paths unless the active Target explicitly supplies them for a bounded Target-owned artifact.

## 7. Produces

The library may produce:

- a selected reusable template;
- a bounded template instance;
- a proposed document structure;
- placeholder-resolution evidence;
- template conformance findings;
- a blocker or safe-stop result.

A produced artifact remains draft, proposal, evidence, or another declared lifecycle state until its owning authority explicitly changes that status.

## 8. Canonical Selection Model

```text
Authorized Artifact Purpose
        ↓
Owning Domain Resolution
        ↓
Template Family Selection
        ↓
Narrowest Matching Template
        ↓
Applicable Standards and Family Rules
        ↓
Bounded Template Instance
        ↓
Return to Owning Domain
```

Template selection is not:

- task planning;
- workflow routing;
- command selection;
- decision authority;
- execution authorization;
- Target-state mutation.

## 9. Template Families

The active family inventory is navigated through `docs/AI/Templates/README.md`.

Family names are catalog classifications, not an execution sequence or authority hierarchy. A template may reference another family only through an explicit dependency; family adjacency does not create precedence.

Planning, Workflow, Validation, Agents, MultiAgent, Swarm, Runtime, Platform, and Project templates are reusable document structures only. They do not become the owning planning, workflow, validation, agent, runtime, platform, or project authorities.

## 10. Produced-Artifact Semantics

Every template or template instance shall distinguish:

- the template's own lifecycle state;
- the produced artifact's lifecycle state;
- the owning domain;
- the required review and approval route;
- whether the result is proposal, evidence, draft, candidate, approved artifact, or canonical product truth.

Generation does not equal approval. Validation does not equal certification. Review does not equal promotion. Merge does not equal canonicalization.

## 11. Lifecycle

A reusable template normally moves through:

```text
Draft
    ↓
Validated
    ↓
Reviewed
    ↓
Approved or Rejected by the owning authority
    ↓
Promoted or Canonicalized only when explicitly authorized
```

These labels do not authorize state transitions by themselves. Framework Governance defines decision policy, and Human Governance remains final where required.

## 12. Extension Rules

A new family or template requires:

- a proven gap not covered by an existing template;
- an explicit owner and intended produced artifact;
- a declared authority boundary;
- TPL-000 and metadata conformance;
- no duplicate family or semantic owner;
- no Target-specific default path, planning model, or state model;
- explicit task authority for structural changes to the library.

## 13. Safe Stop

Stop without selecting or instantiating a template when:

- the artifact purpose or owner is ambiguous;
- multiple families are equally authoritative and no resolution exists;
- the template would create execution, mutation, approval, certification, promotion, or release authority;
- required standards or family rules conflict;
- Target-owned data is missing, untrusted, or outside the invocation boundary;
- a Forge AI-specific assumption would be inherited by other Targets;
- placeholder resolution would expose secrets or protected information.

## 14. Validation

Validate at minimum:

- one clear family and purpose;
- no duplicate semantic owner;
- applicable TPL-000 and STD-010 conformance;
- TPL-001 only when RFC-style;
- placeholder completeness and bounded substitution;
- correct ownership and lifecycle classification;
- no execution, workflow, planning, state, approval, certification, or release contamination;
- no obsolete path or Forge AI fallback;
- valid links and family navigation.

## 15. Dependency and Handoff Model

```text
A.1 Constitution
    ↓
A.2 Product / Target Boundary
    ↓
Owning Domain Authority
    ↓
Template Library Contract
    ↓
Template Standard and Family Rules
    ↓
Bounded Template or Template Instance
    ↓
Owning Domain Review / Execution Route
```

The Template Library never replaces the owning domain. It returns structure and evidence to that domain.

## 16. Navigation

- Library navigation: `docs/AI/Templates/README.md`
- Product navigation: `docs/AI/README.md`
- Governance: `docs/AI/GOVERNANCE.md`
- Governance policy: `docs/AI/FrameworkGovernance.md`
- Architecture: `docs/AI/Architecture/README.md`
- System Layer: `docs/AI/System/SystemLayer.md`
- Commands: `docs/AI/Commands/`
- Workflows: `docs/AI/Workflows/`

## 17. Validation Checklist

| Check | Required Result |
|:---|:---|
| README is navigation only | Yes |
| Single canonical library contract | Yes |
| Template selection separated from task planning | Yes |
| Produced artifact does not inherit authority automatically | Yes |
| Target planning/state required by default | No |
| Forge AI fallback allowed | No |
| Safe stop defined | Yes |
| Human Governance authority preserved | Yes |

# Swarm Plan Template

>AI-DOS v2 · Swarm Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-SWARM-PLAN` |
| Title | Swarm Plan Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Swarm Template |
| Document Type | Template |
| Owner | AI Runtime Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.TEMPLATES.SWARM.PLAN` |
| Scope | Defines the reusable documentation structure for a temporary coordinated parallel swarm plan with bounded objective, scope, roles, decomposition, merge strategy, validation strategy, review strategy, and dissolution criteria. |
| Out of Scope | Swarm authority redefinition, multi-agent authority redefinition, runtime authority redefinition, orchestration authority creation, governance authority creation, review authority creation, certification authority creation, ProjectStatus updates, swarm execution implementation, consensus algorithm definition, orchestration logic definition, runtime behavior implementation, merge algorithm definition, scheduling definition, synchronization definition, engine implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `AGENTS.md`; `docs/AI/AgentSystemPrompt.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/Architecture/Agents/AGENTS-v2.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Workflow-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md`; `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Runtime-Consumption-Model.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI/Templates/MultiAgent/`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/` |
| Dependencies | AGENTS.md bootloader; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2 communication, workflow, delegation, escalation, and runtime consumption boundaries; MultiAgent template boundaries; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime, Engine, Context, Memory, Knowledge, and Workflow authority inputs |
| Consumes | Swarm documentation boundaries; multi-agent documentation boundaries; agent boot and behavior boundaries; runtime and engine boundaries; context, memory, knowledge, and workflow consumption rules; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable swarm plan artifact structure |
| Related Specifications | `docs/AI/Templates/Swarm/`; `docs/AI/Templates/MultiAgent/`; `docs/AI/Templates/Agents/`; `docs/AI/Templates/Workflow/`; `docs/AI/Templates/Runtime/`; `docs/AI/Templates/Context/`; `docs/AI/Templates/Memory/`; `docs/AI/Templates/Knowledge/`; `docs/AI/Templates/Validation/`; `docs/AI/Templates/README.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, swarm authority reference validation, duplicate-authority validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |

---

## 1. Purpose

Defines the reusable documentation structure for a temporary coordinated parallel swarm plan with bounded objective, scope, roles, decomposition, merge strategy, validation strategy, review strategy, and dissolution criteria.

This template is an output contract only. It consumes existing AGENTS, Runtime, Engine, MultiAgent, Context, Memory, Knowledge, Workflow, and applicable STD authority without redefining swarm, multi-agent, orchestration, runtime, governance, review, certification, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to produce a `Swarm Plan` artifact when the active task explicitly needs that artifact type.

Do not use this template to implement swarm execution, consensus algorithms, orchestration logic, runtime behavior, merge algorithms, scheduling, synchronization, approval authority, certification authority, governance authority, or ProjectStatus updates.

---

## 3. Authority Boundaries

Artifacts produced from this template may record swarm-facing plans, decomposition, results, merge evidence, review observations, risks, blockers, and recommended next steps, but they must not replace `AGENTS.md`, Agent System Prompt, AI Framework, AI Orchestrator, AGENTS v2 architecture, Runtime Architecture, Engine Architecture, MultiAgent, Context, Memory, Knowledge, Workflow, validation, review, certification, governance, or ProjectStatus authority.

---

## Produced Document Metadata

Every document produced from this template must begin with a STD-010-compliant `## Document Metadata` section. Placeholder values must be resolved before the produced document is treated as complete.

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `{{IDENTIFIER}}` |
| Title | {{TITLE}} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | {{DOCUMENT_TYPE}} |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED}} |
| Last Updated | {{LAST_UPDATED}} |
| Lifecycle Phase | {{LIFECYCLE_PHASE}} |
| Traceability ID | `{{TRACEABILITY_ID}}` |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Dependencies | {{DEPENDENCIES}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
| Supersedes | {{SUPERSEDES}} |
| Superseded By | {{SUPERSEDED_BY}} |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |
```
Default produced-document classification is `Swarm Artifact` and default document type is `Swarm Plan`.

---

## Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Yes | Author-provided |
| `{{TITLE}}` | TEXT | Title | Yes | Author-provided |
| `{{VERSION}}` | VERSION | Version | Yes | `0.1.0-draft` |
| `{{STATUS}}` | STATUS | Status | Yes | Draft |
| `{{CANONICAL_STATUS}}` | TEXT | Canonical Status | Yes | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Swarm Artifact |
| `{{DOCUMENT_TYPE}}` | TEXT | Document Type | Yes | Author-provided |
| `{{OWNER}}` | TEXT | Owner | Yes | AI Runtime Owner |
| `{{MAINTAINERS}}` | LIST | Maintainers | Yes | Author-provided |
| `{{REVIEW_AUTHORITY}}` | TEXT | Review Authority | Yes | Author-provided |
| `{{APPROVAL_AUTHORITY}}` | TEXT | Approval Authority | Yes | Author-provided |
| `{{CREATED}}` | DATE | Created | Yes | Author-provided |
| `{{LAST_UPDATED}}` | DATE | Last Updated | Yes | Author-provided |
| `{{LIFECYCLE_PHASE}}` | TEXT | Lifecycle Phase | Yes | Draft |
| `{{TRACEABILITY_ID}}` | IDENTIFIER | Traceability ID | Yes | Author-provided |
| `{{SCOPE}}` | TEXT | Scope | Yes | Author-provided |
| `{{OUT_OF_SCOPE}}` | TEXT | Out of Scope | Yes | Author-provided |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | Author-provided |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | AGENTS.md; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2; STD-003; STD-010; TPL-000; applicable Runtime, Engine, MultiAgent, Context, Memory, Knowledge, and Workflow authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{SWARM_ID}}` | IDENTIFIER | Body content | Yes | Author-provided |
| `{{PLAN_STATUS}}` | STATUS | Body content | Yes | Draft |
| `{{COORDINATOR}}` | TEXT | Body content | Yes | Author-provided |
| `{{RELATED_CAPABILITY_OR_TASK}}` | TEXT | Body content | Yes | Author-provided |
| `{{PURPOSE}}` | TEXT | Body content | Yes | Author-provided |
| `{{OBJECTIVE}}` | TEXT | Body content | Yes | Author-provided |
| `{{SWARM_LIFECYCLE_CONSUMED}}` | TEXT | Body content | Yes | Author-provided |
| `{{IN_SCOPE}}` | LIST | Body content | Yes | Author-provided |
| `{{OUT_OF_SCOPE_ITEMS}}` | LIST | Body content | Yes | Author-provided |
| `{{AGENTS_OR_ROLES}}` | TABLE | Body content | Yes | Author-provided |
| `{{TASK_DECOMPOSITION}}` | TABLE | Body content | Yes | Author-provided |
| `{{MERGE_STRATEGY}}` | TEXT | Body content | Yes | Author-provided |
| `{{VALIDATION_STRATEGY}}` | TEXT | Body content | Yes | Author-provided |
| `{{REVIEW_STRATEGY}}` | TEXT | Body content | Yes | Author-provided |
| `{{DISSOLUTION_CRITERIA}}` | CHECKLIST | Body content | Yes | Author-provided |

---

## Template Body

```markdown
## 1. Purpose

{{PURPOSE}}

---

## 2. Objective

{{OBJECTIVE}}

---

## 3. Swarm Identity

| Field | Value |
|:---|:---|
| Swarm ID | `{{SWARM_ID}}` |
| Plan Status | {{PLAN_STATUS}} |
| Coordinator | {{COORDINATOR}} |
| Related Capability / Task | {{RELATED_CAPABILITY_OR_TASK}} |

---

## 4. Swarm Lifecycle Consumed

{{SWARM_LIFECYCLE_CONSUMED}}

---

## 5. Swarm Scope

### In Scope

{{IN_SCOPE}}

### Out of Scope

{{OUT_OF_SCOPE_ITEMS}}

---

## 6. Agents / Roles

{{AGENTS_OR_ROLES}}

---

## 7. Task Decomposition

{{TASK_DECOMPOSITION}}

---

## 8. Merge Strategy

{{MERGE_STRATEGY}}

---

## 9. Validation Strategy

{{VALIDATION_STRATEGY}}

---

## 10. Review Strategy

{{REVIEW_STRATEGY}}

---

## 11. Dissolution Criteria

{{DISSOLUTION_CRITERIA}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Swarm, multi-agent, orchestration, runtime, governance, review, certification, workflow, validation, and ProjectStatus authorities are consumed rather than redefined.
- Produced artifacts do not implement swarm execution, consensus algorithms, orchestration logic, runtime behavior, merge algorithms, scheduling, synchronization, engine behavior, workflow behavior, governance authority, review authority, certification authority, or ProjectStatus updates.

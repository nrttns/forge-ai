# Agent Capability Profile Template

>AI-DOS v2 · Agent Templates<br>
> Template Artifact · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-AGENTS-CAPABILITY-PROFILE` |
| Title | Agent Capability Profile Template |
| Version | `2.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Agent Template |
| Document Type | Template |
| Owner | AI Runtime Owner |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Operational Core Alignment |
| Traceability ID | `AI-DOS.V2.TEMPLATES.AGENTS.CAPABILITY-PROFILE` |
| Scope | Defines the reusable structure for describing the capabilities, limits, permissions, and safe operating scope of one agent or tool. |
| Out of Scope | Agent authority redefinition, runtime authority redefinition, engine authority redefinition, workflow authority creation, orchestration authority creation, validation authority creation, review authority creation, certification authority creation, governance authority creation, swarm activation, ProjectStatus updates, runtime implementation, orchestration implementation, engine implementation, architecture redefinition, and canonical promotion. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md` |
| Normative References | `AGENTS.md`; `docs/AI-DOS/AgentSystemPrompt.md`; `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/Architecture/Agents/AGENTS-v2.md`; `docs/AI-DOS/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI-DOS/Templates/README.md`; `docs/AI-DOS/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md`; `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.1-Context-Engine-RFC.md`; `docs/AI-DOS/Architecture/RFC/EngineSpecializations/A.5.9-Memory-Engine-RFC.md` |
| Dependencies | AGENTS.md bootloader; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2 architecture; STD-003 terminology; STD-010 metadata schema; TPL-000 template governance; Runtime, Engine, Context, Memory, and Knowledge authority inputs |
| Consumes | Agent boot and behavior boundaries; agent architecture boundaries; runtime and engine boundaries; context, memory, and knowledge consumption rules; STD-003 canonical terminology; STD-010 mandatory metadata fields; TPL-000 placeholder grammar, lifecycle, taxonomy, compliance model, and validation requirements |
| Produces | Reusable agent capability profile artifact structure |
| Related Specifications | `docs/AI-DOS/Templates/Agents/`; `docs/AI-DOS/Templates/Runtime/`; `docs/AI-DOS/Templates/Context/`; `docs/AI-DOS/Templates/Memory/`; `docs/AI-DOS/Templates/Knowledge/`; `docs/AI-DOS/Templates/Workflow/`; `docs/AI-DOS/Templates/Validation/`; `docs/AI-DOS/Templates/README.md` |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template family review, STD-010 validation, TPL-000 validation, agent authority reference validation, duplicate-authority validation, stale authority reference validation, and explicit Human Governance approval |
| Certification Status | Not certified |
| Review Status | Not Reviewed |
| Compliance Level | L1 Draft |
---

## 1. Purpose

Defines the reusable structure for describing the capabilities, limits, permissions, and safe operating scope of one agent or tool.

This template is an output contract only. It consumes existing AGENTS.md, Agent Runtime, Engine, Runtime, Context, Memory, Knowledge, and applicable STD authority without redefining agent, runtime, engine, workflow, validation, review, certification, governance, orchestration, swarm, or ProjectStatus authority.

---

## 2. When To Use This Template

Use this template to produce a `Agent Capability Profile` artifact when the active task explicitly needs that artifact type.

Do not use this template to implement runtime behavior, define orchestration logic, activate swarm scope, approve work, certify output, create governance authority, or update ProjectStatus.

---

## 3. Authority Boundaries

Artifacts produced from this template may describe agent-facing structure and evidence, but they must not replace `AGENTS.md`, Agent System Prompt, AI Framework, AI Orchestrator, Runtime Architecture, Engine Architecture, Context, Memory, Knowledge, workflow, validation, review, certification, governance, or ProjectStatus authority.

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
Default produced-document classification is `Agent Artifact` and default document type is `Agent Capability Profile`.

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
| `{{CLASSIFICATION}}` | TEXT | Classification | Yes | Agent Artifact |
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
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Yes | AGENTS.md; Agent System Prompt; AI Framework; AI Orchestrator; AGENTS v2; STD-003; STD-010; TPL-000; applicable Runtime, Engine, Context, Memory, and Knowledge authorities |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Yes | Author-provided |
| `{{CONSUMES}}` | LIST | Consumes | Yes | Author-provided |
| `{{PRODUCES}}` | LIST | Produces | Yes | Author-provided |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Yes | None |
| `{{SUPERSEDES}}` | LIST | Supersedes | Yes | None |
| `{{SUPERSEDED_BY}}` | LIST | Superseded By | Yes | None |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Yes | Not applicable unless the produced document is itself promoted by its governing authority |
| `{{CERTIFICATION_STATUS}}` | TEXT | Certification Status | Yes | Not certified |
| `{{AGENT_OR_TOOL}}` | TEXT | Body content | Yes | Author-provided |
| `{{CAPABILITY_SUMMARY}}` | TABLE | Body content | Yes | Author-provided |
| `{{PERMISSIONS}}` | TABLE | Body content | Yes | Author-provided |
| `{{KNOWN_LIMITATIONS}}` | LIST | Body content | Yes | Author-provided |
| `{{REQUIRED_GUARDRAILS}}` | LIST | Body content | Yes | Author-provided |
| `{{VALIDATION_CHECKLIST}}` | LIST | Body content | Yes | Author-provided |
---

## Template Body

```markdown
## 1. Capability Summary

{{CAPABILITY_SUMMARY}}

---

## 2. Agent / Tool

{{AGENT_OR_TOOL}}

---

## 3. Permissions

{{PERMISSIONS}}

---

## 4. Known Limitations

{{KNOWN_LIMITATIONS}}

---

## 5. Required Guardrails

{{REQUIRED_GUARDRAILS}}

---

## 6. Validation

{{VALIDATION_CHECKLIST}}
```

---

## Validation Requirements

- STD-010 metadata is complete and resolved.
- All placeholders are resolved before use.
- Agent, runtime, engine, context, memory, knowledge, validation, review, certification, governance, orchestration, swarm, and ProjectStatus authorities are consumed rather than redefined.
- Produced artifacts do not implement runtime behavior, orchestration logic, engine behavior, workflow behavior, swarm behavior, validation authority, review authority, certification authority, governance authority, or ProjectStatus updates.

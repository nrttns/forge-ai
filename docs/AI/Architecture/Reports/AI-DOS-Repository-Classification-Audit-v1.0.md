#AI-DOS Repository Classification Audit v1.0

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V4.REPO-CANONICALIZATION-00` |
| Title |AI-DOS Repository Classification Audit v1.0 |
| Version | 1.0.0-draft |
| Status | Draft audit report |
| Canonical Status | Non-canonical audit evidence until reviewed by Human Governance |
| Classification | Repository Classification Audit |
| Document Type | Audit Report |
| Owner | Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Audit / Repository Canonicalization Preparation |
| Traceability ID | `AI-DOS.V4.REPO-CANONICALIZATION-00` |
| Scope | Classification of documentation under `docs/`, `AGENTS.md`, `.cursorrules`, and `README.md` before any move, merge, archive, or rewrite. |
| Out of Scope | File movement, file deletion, file renaming, ProjectStatus updates, implementation, reference rewrites, metadata normalization, canonical promotion, certification, and approval. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md`; `docs/DevelopmentPhases/ProjectStatus.md`; `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md`; `docs/AI/Architecture/Reports/AI-DOS-Architecture-Consistency-Audit-v1.0.md`; `docs/AI/Architecture/Reports/AI-DOS-Authority-Cleanup-Plan-v1.0.md`; `docs/AI/Architecture/Reports/AI-DOS-v3-Migration-Strategy.md`; `docs/AI/Architecture/Reports/AI-DOS-v3-Transitional-Authority-Verification.md`; `docs/AI/Architecture/Reports/RC2-Specification-Harvest-Report.md`; `docs/AI/Architecture/Reports/RC2-Specification-Legacy-Migration-Plan.md` |
| Dependencies | Repository inventory; authority cleanup reports; RC2 harvest and migration reports; ProjectStatus frozen-area policy; roadmap sequencing. |
| Consumes | Required reading set, repository file inventory, active reference search results, and classification categories supplied by Human Governance. |
| Produces | Repository classification matrix, duplicate authority findings, RC2 compatibility findings, frozen-area findings, move-safety findings, disposition recommendations, and follow-up recommendation. |
| Related Specifications | Governance Atlas v2; Framework Governance; STD-010;AI-DOS v4 master roadmap; RC2 migration reports. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review and explicit acceptance before any follow-up repository movement or canonicalization work. |
| Certification Status | Not certified |

---

## Executive Summary

This audit classified 230 documentation artifacts under the requested scope. The repository is not yet safe for broad move, merge, archive, or rewrite work because active operational compatibility dependencies still point to RC2 and transitional paths, and frozen areas explicitly prohibit legacy migration, RC2 relocation, operational-layer alignment, platform adapters, multi-agent runtime, and swarm runtime.

Verdict: **REQUIRES FOLLOW-UP**.

The audit supports the next task, **AI-DOS.V4.REPO-CANONICALIZATION-01 — PARALLEL SYSTEM SEPARATION PLAN**, but does not authorize file movement.

## Scope

In scope:

- `docs/`
- `AGENTS.md`
- `.cursorrules`
- `README.md`

## Out of Scope

- Moving, renaming, deleting, merging, archiving, or rewriting existing files.
- Updating `docs/DevelopmentPhases/ProjectStatus.md` or `docs/ProjectStatus.md`.
- Creating implementation.
- Normalizing metadata.
- Rewriting references.
- Promoting, approving, or certifying documents.

## Classification Method

1. Read the required boot, governance, roadmap, status, master roadmap, consistency audit, cleanup, migration, transitional verification, harvest, and migration-plan documents.
2. Enumerated Markdown documentation plus `.cursorrules` in the requested scope.
3. Classified each artifact into exactly one primary category using path role, document title, metadata where present, active references, and frozen-area constraints.
4. Treated classification as audit evidence only, not as promotion or deprecation.

Note: the requested path `docs/AI/Architecture/Reports/AI-DOS-Program-Architecture-Master-Roadmap-v4.md` was not present. The matching document was reviewed at `docs/AI/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md`.

## Repository Inventory Summary

| Primary classification | Count |
| --- | --- |
| Operational Compatibility | 103 |
| Draft / Candidate | 36 |
| Evidence / Report | 39 |
| Frozen | 11 |
| Unknown / Requires Governance Decision | 17 |
| Transitional | 18 |
| Legacy / Historical | 6 |

## Directory Classification Matrix

| Directory | Reviewed files | Primary classification | Classification mix |
| --- | --- | --- | --- |
| `./` | 3 | Draft / Candidate | Operational Compatibility: 1, Draft / Candidate: 2 |
| `docs/` | 2 | Draft / Candidate | Draft / Candidate: 1, Transitional: 1 |
| `docs/AI/` | 5 | Operational Compatibility | Operational Compatibility: 3, Draft / Candidate: 2 |
| `docs/AI/Architecture/` | 2 | Evidence / Report | Evidence / Report: 1, Draft / Candidate: 1 |
| `docs/AI/Architecture/Agents/` | 13 | Frozen | Frozen: 11, Unknown / Requires Governance Decision: 1, Evidence / Report: 1 |
| `docs/AI/Architecture/Agents/Reports/` | 1 | Evidence / Report | Evidence / Report: 1 |
| `docs/AI/Architecture/Appendix/` | 14 | Unknown / Requires Governance Decision | Evidence / Report: 3, Unknown / Requires Governance Decision: 11 |
| `docs/AI/Architecture/Blueprint/` | 1 | Unknown / Requires Governance Decision | Unknown / Requires Governance Decision: 1 |
| `docs/AI/Architecture/Governance/` | 1 | Draft / Candidate | Draft / Candidate: 1 |
| `docs/AI/Architecture/Reports/` | 7 | Evidence / Report | Evidence / Report: 7 |
| `docs/AI/Architecture/Schemas/` | 4 | Unknown / Requires Governance Decision | Unknown / Requires Governance Decision: 4 |
| `docs/AI/Architecture/Standards/` | 5 | Draft / Candidate | Draft / Candidate: 5 |
| `docs/AI/Architecture/Standards/Reports/STD-001/` | 2 | Evidence / Report | Evidence / Report: 2 |
| `docs/AI/Architecture/Standards/Reports/STD-002/` | 4 | Evidence / Report | Evidence / Report: 4 |
| `docs/AI/Certification/` | 2 | Evidence / Report | Evidence / Report: 2 |
| `docs/AI/Checklists/` | 1 | Evidence / Report | Evidence / Report: 1 |
| `docs/AI/Commands/` | 5 | Operational Compatibility | Evidence / Report: 1, Operational Compatibility: 4 |
| `docs/AI/Lifecycle/` | 8 | Operational Compatibility | Evidence / Report: 1, Operational Compatibility: 7 |
| `docs/AI/Lifecycle/OperationalValidation/` | 2 | Operational Compatibility | Operational Compatibility: 2 |
| `docs/AI/Meta/` | 3 | Draft / Candidate | Draft / Candidate: 2, Evidence / Report: 1 |
| `docs/AI/Roadmap/` | 2 | Transitional | Transitional: 2 |
| `docs/AI/Runtime/` | 22 | Draft / Candidate | Draft / Candidate: 21, Evidence / Report: 1 |
| `docs/AI/Runtime/Reports/` | 4 | Evidence / Report | Evidence / Report: 4 |
| `docs/AI/Specification/` | 6 | Legacy / Historical | Legacy / Historical: 6 |
| `docs/AI/System/` | 7 | Operational Compatibility | Operational Compatibility: 7 |
| `docs/AI/Templates/` | 1 | Operational Compatibility | Operational Compatibility: 1 |
| `docs/AI/Templates/Agents/` | 5 | Operational Compatibility | Operational Compatibility: 4, Evidence / Report: 1 |
| `docs/AI/Templates/Architecture/` | 6 | Operational Compatibility | Operational Compatibility: 6 |
| `docs/AI/Templates/Context/` | 3 | Operational Compatibility | Operational Compatibility: 3 |
| `docs/AI/Templates/Core/` | 2 | Operational Compatibility | Operational Compatibility: 2 |
| `docs/AI/Templates/Integration/` | 4 | Operational Compatibility | Operational Compatibility: 4 |
| `docs/AI/Templates/Knowledge/` | 3 | Operational Compatibility | Operational Compatibility: 3 |
| `docs/AI/Templates/Memory/` | 3 | Operational Compatibility | Operational Compatibility: 3 |
| `docs/AI/Templates/Migration/` | 4 | Operational Compatibility | Operational Compatibility: 3, Evidence / Report: 1 |
| `docs/AI/Templates/MultiAgent/` | 3 | Evidence / Report | Evidence / Report: 2, Operational Compatibility: 1 |
| `docs/AI/Templates/Planning/` | 6 | Operational Compatibility | Operational Compatibility: 6 |
| `docs/AI/Templates/Platform/` | 4 | Operational Compatibility | Operational Compatibility: 4 |
| `docs/AI/Templates/Project/` | 11 | Operational Compatibility | Operational Compatibility: 11 |
| `docs/AI/Templates/Runtime/` | 2 | Operational Compatibility | Operational Compatibility: 2 |
| `docs/AI/Templates/Swarm/` | 5 | Evidence / Report | Evidence / Report: 3, Operational Compatibility: 2 |
| `docs/AI/Templates/Validation/` | 1 | Operational Compatibility | Operational Compatibility: 1 |
| `docs/AI/Templates/Workflow/` | 8 | Operational Compatibility | Operational Compatibility: 7, Evidence / Report: 1 |
| `docs/AI/Testing/` | 7 | Operational Compatibility | Operational Compatibility: 6, Evidence / Report: 1 |
| `docs/AI/Tooling/` | 1 | Operational Compatibility | Operational Compatibility: 1 |
| `docs/AI/Validation/` | 6 | Operational Compatibility | Operational Compatibility: 6 |
| `docs/AI/Workflows/` | 3 | Operational Compatibility | Operational Compatibility: 3 |
| `docs/DevelopmentPhases/` | 16 | Transitional | Transitional: 15, Evidence / Report: 1 |

## Document Classification Matrix

| Path | Current role | Primary classification | Authority level | Owner if identifiable | May be edited now | May be moved now | Active references | Recommended disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `.cursorrules` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `AGENTS.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `README.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/AIFramework.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/AIOrchestrator.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/AgentSystemPrompt.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Architecture/A.0-Framework-Audit.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/A.1-Constitution.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Agents/AGENTS-V2-DevelopmentPhases.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-V2-Roadmap.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v1-draft.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Capability-and-Role-Catalog.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Communication-and-Coordination.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Delegation-and-Escalation-Model.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Identity-and-Registry.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Lifecycle-and-Governance-Boundaries.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Runtime-Consumption-Model.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Validation-and-Review-Model.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Agents/AGENTS-v2-Agent-Workflow-Model.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2-Architecture.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/AGENTS-v2.md` | Reviewed documentation artifact | Frozen | Future agent architecture, not active implementation scope | Framework Architecture Team | No | No | Yes, planning references | MOVE LATER |
| `docs/AI/Architecture/Agents/Reports/AGENTS-v2-Core-Freeze-Review.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Appendix/A.0-Framework-Audit-Appendix-A-Evidence-Log.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Appendix/A.0-Framework-Audit-Appendix-B-Framework-Inventory.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Appendix/A.0-Framework-Audit-Appendix-C-Terminology-Glossary.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-A-Glossary.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-B-Constitutional-Case-Studies.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-C-Constitutional-Decision-Patterns.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-D-Constitutional-Compliance-Matrix.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-E-Constitutional-Anti-Patterns.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-F-Amendment-Examples.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/A.1-Constitution-Appendix-G-Constitutional-Compliance-Checklist.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/STD-000-Framework-Standards-Appendix-A-Validation-Checklist.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/STD-000-Framework-Standards-Appendix-B-Certification-Templates.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/STD-000-Framework-Standards-Appendix-C-Migration-Playbook.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Appendix/STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Governance/GOV-001-Human-Governance-Approval.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Reports/AI-DOS-Architecture-Consistency-Audit-v1.0.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/AI-DOS-Authority-Cleanup-Plan-v1.0.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/AI-DOS-v3-Authority-Alignment-Plan.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/AI-DOS-v3-Migration-Strategy.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/AI-DOS-v3-Transitional-Authority-Verification.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/RC2-Specification-Harvest-Report.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Reports/RC2-Specification-Legacy-Migration-Plan.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Schemas/STD-002-Discovery-Graph-Model.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Schemas/STD-002-Discovery-JSON-Schema.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Schemas/STD-002-Discovery-YAML-Schema.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Schemas/STD-003-Terminology-Graph-Model.md` | Reviewed documentation artifact | Unknown / Requires Governance Decision | Unclassified appendix/schema/blueprint or unmapped support document | Not clear from inventory | No | No | Unknown | REQUIRES GOVERNANCE DECISION |
| `docs/AI/Architecture/Standards/Reports/STD-001/AUD-001-Standards-Compliance-Audit.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/Reports/STD-001/STD-001-Compliance-Remediation-Report.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/Reports/STD-002/STD-002-Discovery-Graph-Model-Refactor-Change-Log.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/Reports/STD-002/STD-002-Refactor-Change-Log.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/Reports/STD-002/STD-002-Refactor-Final-Consistency-Verdict.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/Reports/STD-002/STD-002-Refactor-Remaining-Issues.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Standards/STD-001-Knowledge-Graph-Standard.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Standards/STD-002-Discovery-Standard.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Certification/AIFrameworkCertificationReadinessAudit.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Certification/ProjectTemplateAdoptionReview.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Checklists/AgentReviewChecklist.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Commands/AgentAuditCommand.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Commands/AgentBugFixCommand.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Commands/AgentDocumentationCommand.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Commands/AgentImplementationCommand.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Commands/AgentTaskCommand.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/GOVERNANCE.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Lifecycle/CHANGELOG.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Lifecycle/CompatibilityPolicy.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/DeprecationPolicy.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/OperationalValidation/FrameworkChangeRequests.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/OperationalValidation/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/ReleaseChecklist.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/ReleasePolicy.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/SupportPolicy.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Lifecycle/Versioning.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Meta/M.0-Framework-Meta-Model.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Meta/M.1-Artifact-Meta-Model.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Meta/M.1-Step-01-Change-Log.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/README.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/AI/Roadmap/AI-DOS-v3-Master-Architecture-Development-Roadmap.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.1-Engine-Kernel-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.2-Engine-Contract-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.3-Engine-Registry-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.4-Engine-Lifecycle-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.5-Engine-Communication-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.6-Engine-State-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.4.7-Engine-Capability-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.0-Engine-Specialization-RFC-Template.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.1-Context-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.10-Governance-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.11-Workflow-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.12-Registry-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.2-Knowledge-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.3-Planning-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.4-Decision-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.5-Execution-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.6-Validation-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.7-Review-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.8-Certification-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/A.5.9-Memory-Engine-RFC.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/AI/Runtime/Reports/A.5-Engine-RFC-Inventory-and-Compliance-Review.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Runtime/Reports/Engine-Architecture-Consistency-Review.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Runtime/Reports/Engine-RFC-Certification-Review.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Runtime/Reports/Phase-2-Engine-Foundation-Canonical-Review.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Specification/Constitution.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/Specification/FrameworkSpecification.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/Specification/GovernanceModel.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/Specification/ReferenceArchitecture.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/Specification/RuntimeModel.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/Specification/Terminology.md` | Reviewed documentation artifact | Legacy / Historical | Legacy RC2 source authority retained for compatibility | Historical RC2 | No, harvest only | No | Yes | HARVEST |
| `docs/AI/System/AuthorityModel.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/BootSequence.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/ContextAssembly.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/DecisionModel.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/ExecutionSequence.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/System/SourceOfTruth.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Agents/AgentCapabilityProfileTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Agents/AgentExecutionReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Agents/AgentHandoffTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Agents/AgentRoleTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Agents/AgentTaskContractTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/ADRTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/ArchitectureTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/GovernanceTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/RFCTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Architecture/SpecificationTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Context/ContextAssemblyTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Context/ContextEngineTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Context/ContextPacketTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Core/DocumentMetadata.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Core/TemplateStandard.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Integration/ConnectorSpecificationTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Integration/ExternalToolContractTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Integration/IntegrationContractTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Integration/IntegrationRegistryTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Knowledge/KnowledgeArchitectureTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Knowledge/KnowledgeRegistryTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Knowledge/KnowledgeSourceTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Memory/MemoryArchitectureTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Memory/MemoryRecordTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Memory/MemoryRegistryTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Migration/CompatibilityMatrixTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Migration/DeprecationNoticeTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Migration/MigrationPlanTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Migration/MigrationReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/MultiAgent/MultiAgentConflictReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/MultiAgent/MultiAgentCoordinationPlanTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/MultiAgent/MultiAgentSyncReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Planning/HistoricalCapabilityTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Planning/PhaseTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Planning/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Planning/RoadmapTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Planning/StageTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Planning/VisionTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Platform/AdapterBoundaryTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Platform/AdapterCapabilityMapTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Platform/AdapterValidationTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Platform/PlatformAdapterTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/CLIProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/GenericProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/LaravelProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/LibraryProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/NodeProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/ProjectTemplateSelectionGuide.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/ReactProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/SaaSProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/SymfonyProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Project/WordPressProjectTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Runtime/DecisionContextTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Runtime/RuntimeContextTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Swarm/SwarmExecutionReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Swarm/SwarmMergeReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Swarm/SwarmPlanTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Swarm/SwarmReviewReportTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Swarm/SwarmTaskDecompositionTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Validation/ValidationTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/ApprovalTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/ChecklistTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/CommandTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/DecisionTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/ExecutionPlanTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/HandoffTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Templates/Workflow/ReviewTemplate.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Templates/Workflow/WorkflowTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/FrameworkValidationScenarios.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/Scenario-01-AutonomousNextTask.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/Scenario-02-ImplementationTask.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/Scenario-03-AuditTask.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/AI/Testing/Scenario-04-DocumentationTask.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Testing/Scenario-05-BugFixTask.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Tooling/CursorRules.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/AIFrameworkValidation.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/README.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/ValidationCertification.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/ValidationChecklistTemplate.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/ValidationLevels.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Validation/ValidationLifecycle.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Workflows/ProjectStateUpdater.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Workflows/TaskGenerationWorkflow.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/AI/Workflows/TaskPlanner.md` | Reviewed documentation artifact | Operational Compatibility | Operational compatibility layer | AI Framework / Operational maintainers | No, frozen unless activated | No | Yes | KEEP AS OPERATIONAL COMPATIBILITY |
| `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-00-Foundation.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-01-Core Framework.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-02-Planning System.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-03-Workflow System.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-04-Command System.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-05-Validation System.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-06-Review-Certification.md` | Reviewed documentation artifact | Evidence / Report | Low / evidentiary | Varies; source report metadata | No, except report amendment task | No | Yes, if cited | KEEP AS EVIDENCE |
| `docs/DevelopmentPhases/Phase-07-State-Management.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-08-Knowledge-Memory.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-09-Agent-Runtime.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-10-Multi-Agent-Collaboration.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-11-Swarm-Orchestration.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-12-Platform-Adapters.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/Phase-13-Enterprise-Governance.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/DevelopmentPhases/ProjectStatus.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |
| `docs/AI/FrameworkGovernance.md` | Reviewed documentation artifact | Draft / Candidate | Current v3/v4 candidate authority or repository entry | Framework Governance / Architecture Team | Only within active authorized task | No | Yes | KEEP |
| `docs/ProjectStatus.md` | Reviewed documentation artifact | Transitional | Roadmap/status or legacy roadmap state | Framework Governance / Human Governance | No unless dedicated status/roadmap task | No | Yes | KEEP |

## Duplicate Authority Findings

| Area | Finding | Risk | Recommendation |
| --- | --- | --- | --- |
| Governance | `docs/AI/GOVERNANCE.md`, `docs/AI/FrameworkGovernance.md`, legacy `docs/AI/Specification/GovernanceModel.md`, operational `docs/AI/System/AuthorityModel.md`, and root boot documents all contain governance or authority concepts. | Silent authority conflict if roles are merged or moved without separation. | Keep Governance Atlas as navigation, FrameworkGovernance as decision policy, RC2 governance as harvested legacy source, and operational system files as compatibility until replacements are approved. |
| Roadmap | `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`, `docs/AI/Roadmap/*`, and phase files under `docs/DevelopmentPhases/` overlap. | Confusion between live roadmap authority, historical roadmap planning, and phase artifacts. | Preserve current ProjectStatus/DevelopmentPhases authority; treat `docs/AI/Roadmap/` as transitional planning evidence pending separation. |
| Runtime | `docs/AI/Runtime/A.3-*`, Engine RFCs, legacy `docs/AI/Specification/RuntimeModel.md`, runtime templates, and future agent runtime docs overlap. | Runtime semantics could be redefined by legacy or future-scope documents. | Keep A.3/A.4/A.5 as draft candidate runtime authority; harvest RC2 runtime only; keep future agent/swarm runtime frozen. |
| Agent/system prompt | `AGENTS.md`, `.cursorrules`, `docs/AI/AgentSystemPrompt.md`, `docs/AI/System/*`, AGENTS v1, and AGENTS v2 docs overlap. | Tool-facing operational instructions may diverge from future agent architecture. | Separate bootloader, operational compatibility, legacy single-agent reference, and frozen AGENTS v2 planning in a follow-up plan. |
| Validation/review/certification | `docs/AI/Validation/*`, `docs/AI/Certification/*`, STD reports, runtime reviews, and templates overlap. | Quality-gate naming and evidence may be mistaken for approval. | Keep reports as evidence; keep validation/certification operational docs as compatibility; define future canonical quality-gate ownership separately. |

## RC2 Compatibility Findings

- RC2 Specification files remain active legacy source material and require harvest before any move.
- RC2 operational directories (`System`, `Commands`, `Workflows`, `Templates`, `Validation`, `Certification`) are operational compatibility and are not safe to move now.
- Active references to `docs/AI/Specification/` and RC2 concepts remain across boot, governance, operational, template, validation, certification, lifecycle, testing, and report files.

## Frozen Area Findings

Frozen areas from ProjectStatus intersect this audit directly:

- Legacy Migration.
- RC2 relocation.
- AI Operational Layer alignment.
- Platform Adapters.
- Multi-Agent Runtime.
- Swarm Runtime.

No frozen-area document should be moved or rewritten during repository canonicalization without explicit Human Governance activation and status handling.

## Move Safety Findings

| Move safety class | Documents/directories | Finding |
| --- | --- | --- |
| Not safe to move now | `docs/AI/Specification/`, `docs/AI/System/`, `docs/AI/Commands/`, `docs/AI/Workflows/`, `docs/AI/Templates/`, `docs/AI/Validation/`, `docs/AI/Certification/`, `.cursorrules`, `AGENTS.md` | Active references and/or operational compatibility dependencies remain. |
| Requires harvest before move | `docs/AI/Specification/*`, selected roadmap and blueprint materials, legacy terminology/runtime/governance concepts | Valuable source material must be mapped, harvested, or waived. |
| Safe only as later evidence organization | Report directories and change logs | Could be moved later only after reference validation and with evidence lineage preserved. |
| Requires governance decision | Unknown appendices, schemas, blueprint, duplicate ProjectStatus path | Classification/ownership must be clarified before movement. |
| Frozen; do not move now | AGENTS v2 planning docs, multi-agent/swarm templates, platform adapter templates | Future-scope or explicitly frozen areas. |

## Recommended Disposition Matrix

| Disposition | Applies to | Rationale |
| --- | --- | --- |
| KEEP | Current boot/governance/status/roadmap candidate authorities and active architecture RFCs | Preserve live navigation and current phase evidence. |
| KEEP AS OPERATIONAL COMPATIBILITY | RC2 operational layer, commands, workflows, templates, validation, certification, lifecycle/testing/tooling, `.cursorrules` | Active compatibility dependencies remain. |
| KEEP AS EVIDENCE | Reports, audits, reviews, change logs | Evidence lineage must remain stable. |
| HARVEST | RC2 Specification files and high-value legacy concepts | Move is blocked until harvested or waived. |
| MOVE LATER | Frozen future agent/multi-agent/swarm planning files and evidence organization candidates | Movement requires activation and reference validation. |
| MERGE LATER | Duplicate roadmap, governance, runtime, validation/certification concepts | Merge requires separation plan and authority decisions. |
| DEPRECATE LATER | Superseded transitional copies after references are rewritten and compatibility stubs are approved | Deprecation is not safe in this audit-only task. |
| REQUIRES GOVERNANCE DECISION | Unclear appendices, schemas, blueprint, duplicate ProjectStatus path, AGENTS v1 role | Ownership and target authority must be decided first. |

## Risks

1. Moving RC2 files now would break active references and violate frozen-area policy.
2. Duplicate governance and roadmap artifacts can cause authority drift if not separated by role.
3. AGENTS v1/v2/future swarm documents can imply activation if not clearly marked frozen or planning-only.
4. Evidence reports may be mistaken for canonical approvals.
5. The missing required-reading path under `docs/AI/Architecture/Reports/` indicates repository path drift that must be resolved before automated canonicalization.
6. `docs/ProjectStatus.md` and `docs/DevelopmentPhases/ProjectStatus.md` coexist; the latter is current boot authority, while the former requires governance classification before action.

## Verdict

**REQUIRES FOLLOW-UP**

The repository can be classified well enough to plan canonicalization, but it is not safe for movement or merging. Follow-up must first separate parallel systems, assign authority roles, preserve operational compatibility, and define harvest requirements.

## Recommended Next Step

Proceed with **AI-DOS.V4.REPO-CANONICALIZATION-01 — PARALLEL SYSTEM SEPARATION PLAN**.

That plan should define explicit lanes for:

1. Current candidate canonical architecture.
2. Operational compatibility.
3. RC2 historical source material requiring harvest.
4. Evidence/report retention.
5. Frozen future-scope systems.
6. Unknown documents requiring Human Governance decision.

## Validation

- Authority validation: required authorities were read or path-drift was recorded for the missing requested report path.
- Roadmap validation: current Phase 2 Canonical Review Preparation and frozen-area constraints were preserved.
- STD-010 validation: this new audit report includes the required `## Document Metadata` section and mandatory metadata fields.
- File-safety validation: no existing documents were modified, moved, renamed, deleted, normalized, or reference-rewritten.
- ProjectStatus validation: ProjectStatus was not modified.

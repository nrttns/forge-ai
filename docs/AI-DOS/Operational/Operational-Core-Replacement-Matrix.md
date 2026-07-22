# Operational Core Replacement Matrix

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.OP-001` |
| Title | Operational Core Replacement Matrix |
| Version | `1.0.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical implementation planning artifact until Human Governance approval |
| Classification | Operational Core Replacement Matrix |
| Document Type | Implementation Planning Matrix |
| Owner | AI Operational Layer / Human Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft Planning |
| Traceability ID | `AI-DOS.V2.OP-001` |
| Scope | Classifies remaining RC2 and operational documents under docs/AI into final v2 Operational Core destinations. |
| Out of Scope | Architecture, Runtime, Engine RFC, Standards, Constitution, Meta, Governance, ProjectStatus updates, file moves, deletion, archival execution, and certification. |
| Normative Authority | Human Governance task instruction; `AGENTS.md`; `docs/AI-DOS/GOVERNANCE.md`; `docs/AI-DOS/FrameworkGovernance.md`; the invoking Target's Resolved Target Context (operational-state and roadmap authority); `docs/Roadmap/AI-DOS-Program-Architecture-Master-Roadmap-v4.md` |
| Normative References | `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| Dependencies | Governance Core; Architecture Core; Operational Core roadmap; RC2 operational compatibility documents. |
| Consumes | Remaining operational documents in `docs/AI-DOS/`, Program C Operational Core roadmap, frozen-area policy, and Human Governance task scope. |
| Produces | Replacement matrix, final destinations, explicit disappearance list, counts, and next replacement order. |
| Related Specifications | `docs/AI-DOS/AIFramework.md`; `docs/AI-DOS/AIOrchestrator.md`; `docs/AI-DOS/AgentSystemPrompt.md`; commands; workflows; templates; system operational files. |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Human Governance review and approval before executing replacements, archives, deletions, or ProjectStatus updates. |
| Certification Status | Not certified |

---

## 1. Scope and Authority

This matrix is an implementation planning artifact for replacing the remaining RC2 Operational Layer with the v2 Operational Core. It does not execute file moves, deletion, archive relocation, ProjectStatus updates, certification, review, or canonical promotion.

Allowed actions are exactly: `REPLACE`, `MERGE`, `KEEP`, `ARCHIVE`, and `DELETE`. Every listed operational document receives exactly one action and one final destination.

Note: `docs/AI-DOS/AIFramework.md`, `docs/AI-DOS/AIOrchestrator.md`, and `docs/AI-DOS/AgentSystemPrompt.md` shall be refactored in place for v2 alignment. Do not create `AIFramework-v2.md`, `AIOrchestrator-v2.md`, or `AgentSystemPrompt-v2.md`.

## 2. Replacement Matrix

| Existing Document | Target Owner | Action | Replacement Document | Phase |
|-------------------|-------------|--------|----------------------|-------|
| docs/AI-DOS/AIFramework.md | AI Framework | KEEP | docs/AI-DOS/AIFramework.md | Phase 1 |
| docs/AI-DOS/AIOrchestrator.md | AI Orchestrator | KEEP | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/AgentSystemPrompt.md | Agent System Prompt | KEEP | docs/AI-DOS/AgentSystemPrompt.md | Phase 3 |
| docs/AI-DOS/Certification/AIFrameworkCertificationReadinessAudit.md | Workflows | ARCHIVE | docs/AI-DOS/Operational/Archive/Certification/ | Phase 5 |
| docs/AI-DOS/Certification/ProjectTemplateAdoptionReview.md | Workflows | ARCHIVE | docs/AI-DOS/Operational/Archive/Certification/ | Phase 5 |
| docs/AI-DOS/Checklists/AgentReviewChecklist.md | Workflows | MERGE | docs/AI-DOS/Templates/Workflow/ReviewTemplate.md | Phase 4 |
| docs/AI-DOS/Commands/AgentAuditCommand.md | Commands | REPLACE | docs/AI-DOS/Commands/AgentAuditCommand.md | Phase 4 |
| docs/AI-DOS/Commands/AgentBugFixCommand.md | Commands | REPLACE | docs/AI-DOS/Commands/AgentBugFixCommand.md | Phase 4 |
| docs/AI-DOS/Commands/AgentDocumentationCommand.md | Commands | REPLACE | docs/AI-DOS/Commands/AgentDocumentationCommand.md | Phase 4 |
| docs/AI-DOS/Commands/AgentImplementationCommand.md | Commands | REPLACE | docs/AI-DOS/Commands/AgentImplementationCommand.md | Phase 4 |
| docs/AI-DOS/Commands/AgentTaskCommand.md | Commands | REPLACE | docs/AI-DOS/Commands/AgentTaskCommand.md | Phase 4 |
| docs/AI-DOS/Lifecycle/CHANGELOG.md | System | ARCHIVE | docs/AI-DOS/Operational/Archive/Lifecycle/ | Phase 5 |
| docs/AI-DOS/Lifecycle/CompatibilityPolicy.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/DeprecationPolicy.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/OperationalValidation/FrameworkChangeRequests.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/OperationalValidation/README.md | System | ARCHIVE | docs/AI-DOS/Operational/Archive/Lifecycle/ | Phase 5 |
| docs/AI-DOS/Lifecycle/README.md | System | ARCHIVE | docs/AI-DOS/Operational/Archive/Lifecycle/ | Phase 5 |
| docs/AI-DOS/Lifecycle/ReleaseChecklist.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/ReleasePolicy.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/SupportPolicy.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/Lifecycle/Versioning.md | Workflows | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 2 |
| docs/AI-DOS/System/AuthorityModel.md | System | MERGE | docs/AI-DOS/AIFramework.md | Phase 1 |
| docs/AI-DOS/System/BootSequence.md | System | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 1 |
| docs/AI-DOS/System/ContextAssembly.md | System | MERGE | docs/AI-DOS/AgentSystemPrompt.md | Phase 1 |
| docs/AI-DOS/System/DecisionModel.md | System | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 1 |
| docs/AI-DOS/System/ExecutionSequence.md | System | MERGE | docs/AI-DOS/AIOrchestrator.md | Phase 1 |
| docs/AI-DOS/System/README.md | System | MERGE | docs/AI-DOS/AIFramework.md | Phase 1 |
| docs/AI-DOS/System/SourceOfTruth.md | System | MERGE | docs/AI-DOS/AIFramework.md | Phase 1 |
| docs/AI-DOS/Templates/Agents/AgentCapabilityProfileTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Agents/AgentCapabilityProfileTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Agents/AgentExecutionReportTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Agents/AgentExecutionReportTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Agents/AgentHandoffTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Agents/AgentHandoffTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Agents/AgentRoleTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Agents/AgentRoleTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Agents/AgentTaskContractTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Agents/AgentTaskContractTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/ADRTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/ADRTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/ArchitectureTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/ArchitectureTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/GovernanceTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/GovernanceTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/README.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/README.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/RFCTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/RFCTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Architecture/SpecificationTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Architecture/SpecificationTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Context/ContextAssemblyTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Context/ContextAssemblyTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Context/ContextEngineTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Context/ContextEngineTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Context/ContextPacketTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Context/ContextPacketTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Core/DocumentMetadata.md | Templates | KEEP | docs/AI-DOS/Templates/Core/DocumentMetadata.md | Phase 4 |
| docs/AI-DOS/Templates/Core/TemplateStandard.md | Templates | KEEP | docs/AI-DOS/Templates/Core/TemplateStandard.md | Phase 4 |
| docs/AI-DOS/Templates/Integration/ConnectorSpecificationTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Integration/ConnectorSpecificationTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Integration/ExternalToolContractTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Integration/ExternalToolContractTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Integration/IntegrationContractTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Integration/IntegrationContractTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Integration/IntegrationRegistryTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Integration/IntegrationRegistryTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Knowledge/KnowledgeArchitectureTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Knowledge/KnowledgeArchitectureTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Knowledge/KnowledgeRegistryTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Knowledge/KnowledgeRegistryTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Knowledge/KnowledgeSourceTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Knowledge/KnowledgeSourceTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Memory/MemoryArchitectureTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Memory/MemoryArchitectureTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Memory/MemoryRecordTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Memory/MemoryRecordTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Memory/MemoryRegistryTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Memory/MemoryRegistryTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Migration/CompatibilityMatrixTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Migration/CompatibilityMatrixTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Migration/DeprecationNoticeTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Migration/DeprecationNoticeTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Migration/MigrationPlanTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Migration/MigrationPlanTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Migration/MigrationReportTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Migration/MigrationReportTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/MultiAgent/MultiAgentConflictReportTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/MultiAgent/MultiAgentCoordinationPlanTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/MultiAgent/MultiAgentSyncReportTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Planning/HistoricalCapabilityTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/HistoricalCapabilityTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Planning/PhaseTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/PhaseTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Planning/README.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/README.md | Phase 4 |
| docs/AI-DOS/Templates/Planning/RoadmapTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/RoadmapTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Planning/StageTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/StageTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Planning/VisionTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Planning/VisionTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Platform/AdapterBoundaryTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Platform/AdapterCapabilityMapTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Platform/AdapterValidationTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Platform/PlatformAdapterTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Project/CLIProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/CLIProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/GenericProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/GenericProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/LaravelProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/LaravelProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/LibraryProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/LibraryProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/NodeProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/NodeProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/ProjectTemplateSelectionGuide.md | Templates | KEEP | docs/AI-DOS/Templates/Project/ProjectTemplateSelectionGuide.md | Phase 4 |
| docs/AI-DOS/Templates/Project/README.md | Templates | KEEP | docs/AI-DOS/Templates/Project/README.md | Phase 4 |
| docs/AI-DOS/Templates/Project/ReactProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/ReactProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/SaaSProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/SaaSProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/SymfonyProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/SymfonyProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Project/WordPressProjectTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Project/WordPressProjectTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/README.md | Templates | KEEP | docs/AI-DOS/Templates/README.md | Phase 4 |
| docs/AI-DOS/Templates/Runtime/DecisionContextTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Runtime/DecisionContextTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Runtime/RuntimeContextTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Runtime/RuntimeContextTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Swarm/SwarmExecutionReportTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Swarm/SwarmMergeReportTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Swarm/SwarmPlanTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Swarm/SwarmReviewReportTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Swarm/SwarmTaskDecompositionTemplate.md | Templates | ARCHIVE | docs/AI-DOS/Operational/Archive/Templates/ | Phase 5 |
| docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/ApprovalTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/ApprovalTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/ChecklistTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/ChecklistTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/CommandTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/CommandTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/DecisionTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/DecisionTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/ExecutionPlanTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/ExecutionPlanTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/HandoffTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/HandoffTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/ReviewTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/ReviewTemplate.md | Phase 4 |
| docs/AI-DOS/Templates/Workflow/WorkflowTemplate.md | Templates | KEEP | docs/AI-DOS/Templates/Workflow/WorkflowTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/FrameworkValidationScenarios.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/README.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/Scenario-01-AutonomousNextTask.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/Scenario-02-ImplementationTask.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/Scenario-03-AuditTask.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/Scenario-04-DocumentationTask.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Testing/Scenario-05-BugFixTask.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Tooling/CursorRules.md | Commands | ARCHIVE | docs/AI-DOS/Operational/Archive/Tooling/ | Phase 5 |
| docs/AI-DOS/Validation/AIFrameworkValidation.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Validation/README.md | System | ARCHIVE | docs/AI-DOS/Operational/Archive/Validation/ | Phase 5 |
| docs/AI-DOS/Validation/ValidationCertification.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Validation/ValidationChecklistTemplate.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Validation/ValidationLevels.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Validation/ValidationLifecycle.md | Workflows | MERGE | docs/AI-DOS/Templates/Validation/ValidationTemplate.md | Phase 4 |
| docs/AI-DOS/Workflows/ProjectStateUpdater.md | Workflows | REPLACE | docs/AI-DOS/Workflows/ProjectStateUpdater.md | Phase 4 |
| docs/AI-DOS/Workflows/TaskGenerationWorkflow.md | Workflows | REPLACE | docs/AI-DOS/Workflows/TaskGenerationWorkflow.md | Phase 4 |
| docs/AI-DOS/Workflows/TaskPlanner.md | Workflows | REPLACE | docs/AI-DOS/Workflows/TaskPlanner.md | Phase 4 |

## 3. Explicit Disappearance Answer

When AI Framework v2 is finished and the Operational Core replacement is approved for execution, the following existing files are planned to disappear as standalone RC2 operational documents because their action is `REPLACE`, `MERGE`, `ARCHIVE`, or `DELETE`. Files marked `KEEP` remain in place.

### REPLACE

- `docs/AI-DOS/Commands/AgentAuditCommand.md`
- `docs/AI-DOS/Commands/AgentBugFixCommand.md`
- `docs/AI-DOS/Commands/AgentDocumentationCommand.md`
- `docs/AI-DOS/Commands/AgentImplementationCommand.md`
- `docs/AI-DOS/Commands/AgentTaskCommand.md`
- `docs/AI-DOS/Workflows/ProjectStateUpdater.md`
- `docs/AI-DOS/Workflows/TaskGenerationWorkflow.md`
- `docs/AI-DOS/Workflows/TaskPlanner.md`

### MERGE

- `docs/AI-DOS/Checklists/AgentReviewChecklist.md`
- `docs/AI-DOS/Lifecycle/CompatibilityPolicy.md`
- `docs/AI-DOS/Lifecycle/DeprecationPolicy.md`
- `docs/AI-DOS/Lifecycle/OperationalValidation/FrameworkChangeRequests.md`
- `docs/AI-DOS/Lifecycle/ReleaseChecklist.md`
- `docs/AI-DOS/Lifecycle/ReleasePolicy.md`
- `docs/AI-DOS/Lifecycle/SupportPolicy.md`
- `docs/AI-DOS/Lifecycle/Versioning.md`
- `docs/AI-DOS/System/AuthorityModel.md`
- `docs/AI-DOS/System/BootSequence.md`
- `docs/AI-DOS/System/ContextAssembly.md`
- `docs/AI-DOS/System/DecisionModel.md`
- `docs/AI-DOS/System/ExecutionSequence.md`
- `docs/AI-DOS/System/README.md`
- `docs/AI-DOS/System/SourceOfTruth.md`
- `docs/AI-DOS/Templates/Validation/ValidationTemplate.md`
- `docs/AI-DOS/Testing/FrameworkValidationScenarios.md`
- `docs/AI-DOS/Testing/README.md`
- `docs/AI-DOS/Testing/Scenario-01-AutonomousNextTask.md`
- `docs/AI-DOS/Testing/Scenario-02-ImplementationTask.md`
- `docs/AI-DOS/Testing/Scenario-03-AuditTask.md`
- `docs/AI-DOS/Testing/Scenario-04-DocumentationTask.md`
- `docs/AI-DOS/Testing/Scenario-05-BugFixTask.md`
- `docs/AI-DOS/Validation/AIFrameworkValidation.md`
- `docs/AI-DOS/Validation/ValidationCertification.md`
- `docs/AI-DOS/Validation/ValidationChecklistTemplate.md`
- `docs/AI-DOS/Validation/ValidationLevels.md`
- `docs/AI-DOS/Validation/ValidationLifecycle.md`

### ARCHIVE

- `docs/AI-DOS/Certification/AIFrameworkCertificationReadinessAudit.md`
- `docs/AI-DOS/Certification/ProjectTemplateAdoptionReview.md`
- `docs/AI-DOS/Lifecycle/CHANGELOG.md`
- `docs/AI-DOS/Lifecycle/OperationalValidation/README.md`
- `docs/AI-DOS/Lifecycle/README.md`
- `docs/AI-DOS/Templates/MultiAgent/MultiAgentConflictReportTemplate.md`
- `docs/AI-DOS/Templates/MultiAgent/MultiAgentCoordinationPlanTemplate.md`
- `docs/AI-DOS/Templates/MultiAgent/MultiAgentSyncReportTemplate.md`
- `docs/AI-DOS/Templates/Platform/AdapterBoundaryTemplate.md`
- `docs/AI-DOS/Templates/Platform/AdapterCapabilityMapTemplate.md`
- `docs/AI-DOS/Templates/Platform/AdapterValidationTemplate.md`
- `docs/AI-DOS/Templates/Platform/PlatformAdapterTemplate.md`
- `docs/AI-DOS/Templates/Swarm/SwarmExecutionReportTemplate.md`
- `docs/AI-DOS/Templates/Swarm/SwarmMergeReportTemplate.md`
- `docs/AI-DOS/Templates/Swarm/SwarmPlanTemplate.md`
- `docs/AI-DOS/Templates/Swarm/SwarmReviewReportTemplate.md`
- `docs/AI-DOS/Templates/Swarm/SwarmTaskDecompositionTemplate.md`
- `docs/AI-DOS/Tooling/CursorRules.md`
- `docs/AI-DOS/Validation/README.md`

### DELETE

- None

## 4. Counts

- Operational documents found: 116
- REPLACE count: 8
- MERGE count: 28
- ARCHIVE count: 19
- DELETE count: 0
- KEEP count: 61

## 5. Next Replacement Order

1. AI Framework v2: refactor `docs/AI-DOS/AIFramework.md` in place and merge System authority/source-of-truth content.
2. AI Orchestrator v2: refactor `docs/AI-DOS/AIOrchestrator.md` in place and merge orchestration, lifecycle, execution, and workflow policy content.
3. Agent System Prompt v2: refactor `docs/AI-DOS/AgentSystemPrompt.md` in place and merge context assembly and agent-facing execution instructions.
4. Commands / Workflows / Templates alignment: replace command and workflow files, keep governed templates that remain valid, and merge validation/checklist/testing material into reusable templates.
5. Archive execution package: archive superseded certification, lifecycle README/changelog, tooling, multi-agent, swarm, and platform template material after replacements and link remediation are approved.

## 6. Validation Notes

- ProjectStatus was not modified.
- Frozen operational and RC2 source files were read and classified only; no existing operational source file was moved, deleted, or refactored.
- Architecture, Runtime, Engine RFC, Standards, Constitution, Meta, and Governance documents were not modified.

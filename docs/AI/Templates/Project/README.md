# Project Templates

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PROJECT-README` |
| Title | Project Templates |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Template Family Index |
| Document Type | Directory README |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.PROJECT.README` |
| Scope | Index and usage guide for reusable project adoption templates in theAI-DOS template library. |
| Out of Scope | Project implementation logic, scaffolding behavior, code generation, runtime behavior, deployment logic, CI/CD behavior, package management execution, framework-specific execution, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Templates/Planning/RoadmapTemplate.md`; `docs/AI/Templates/Architecture/ArchitectureTemplate.md`; `docs/AI/Templates/Integration/IntegrationContractTemplate.md`; `docs/AI/Templates/Platform/PlatformAdapterTemplate.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md`; `docs/AI/Architecture/RFC/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Architecture/RFC/EnginePlatform/A.4-Engine-Architecture-RFC.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Project template family; Planning templates; Runtime Architecture; Architecture templates; Integration templates; Platform templates; applicable standards and governance authorities |
| Consumes | Existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities without redefining them |
| Produces | Project template family index and usage guide |
| Related Specifications | Project Template Selection Guide; Generic Project Template; CLI, Library, SaaS, Node, React, Laravel, Symfony, and WordPress project templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Project template family review, README alignment validation, selection-guide validation, cross-template structural validation, STD-010 validation, TPL-000 validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

This directory contains reusable project adoption templates for projects adoptingAI-DOS / AI Framework governance patterns.

Project templates provide repository-structure guidance, document responsibilities, governance placeholders, source-of-truth initialization rules, validation expectations, and adapter boundaries.

Project templates do not define framework authority, implement scaffolding, generate code, execute package management, configure runtime behavior, deploy systems, define CI/CD behavior, certify adoption, update registries, or update ProjectStatus.

## 2. Authority Boundary

Project templates consume existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities without redefining them.

Framework-specific templates extend the common project structure only. They must not make a host platform, framework, runtime, package manager, deployment system, registry, or implementation mechanism the source of governance truth.

## 3. Family Structure

Every project template uses the same top-level structure:

1. Purpose
2. Authority Boundary
3. Produced Document Metadata
4. Placeholder Manifest
5. Project Template Identity
6. Required Baseline Files
7. Required Baseline Rules
8. Minimal Boot Sequence
9. Common Project Sections
10. Project Boundary Rules
11. Validation Expectations
12. Risks
13. Framework-specific or project-type extension
14. Completion Checklist

## 4. Template Map

| Template | Use When | Extension Type | Common Structure |
|:---|:---|:---|:---|
| `GenericProjectTemplate.md` | Framework, language, or runtime is unknown or intentionally neutral. | Neutral / generic | Required |
| `CLIProjectTemplate.md` | Command-line application, automation tool, developer utility, or local agent. | CLI interface | Required |
| `LibraryProjectTemplate.md` | Reusable package, SDK, shared library, or framework-independent module. | Library/package | Required |
| `SaaSProjectTemplate.md` | Hosted multi-layer product with application, platform, operations, and release concerns. | SaaS product | Required |
| `NodeProjectTemplate.md` | Node.js backend, service, API, package, worker, or tooling system. | Node.js host | Required |
| `ReactProjectTemplate.md` | React application, UI shell, design system, or frontend package. | React presentation/runtime adapter | Required |
| `LaravelProjectTemplate.md` | Laravel application, package, API, or service. | Laravel host framework | Required |
| `SymfonyProjectTemplate.md` | Symfony application, bundle, component-based service, or PHP backend. | Symfony host framework | Required |
| `WordPressProjectTemplate.md` | WordPress plugin, theme, hosted application, or WordPress-backed product. | WordPress host/adapter | Required |
| `ProjectTemplateSelectionGuide.md` | Choosing the smallest correct project template. | Selection guide | Not a project output template |

No RFC-style Project template exists in this family; the RFC template standard is not applied.

## 5. Usage Guide

1. Start with `ProjectTemplateSelectionGuide.md`.
2. Choose the smallest template that fully fits the project.
3. Resolve all placeholders in the produced document before treating it as complete.
4. Preserve the common top-level project structure.
5. Use framework-specific sections only as extensions to the common structure.
6. Link to live ProjectStatus or roadmap documents when needed; do not update live state from a template.
7. Route review, certification, registry, runtime, implementation, deployment, and ProjectStatus actions to the applicable governance process.

## 6. Cross-Template Consistency Requirements

All project templates must preserve:

- the same mandatory STD-010 metadata scaffold;
- the same produced-document metadata scaffold;
- TPL-000-compatible placeholder manifests;
- the same common project sections;
- the same documentation-only authority boundary;
- no implementation, scaffolding, runtime, package-management, deployment, CI/CD, registry, certification, or ProjectStatus execution behavior.

## 7. Validation Requirements

Before this family is treated as review-ready, validate:

- scoped-only file changes;
- STD-010 metadata coverage;
- TPL-000 placeholder alignment;
- RFC template standard absence because no RFC-style Project template exists;
- placeholder manifest correctness;
- stale authority references;
- unresolved placeholder handling;
- empty table cells;
- README alignment;
- ProjectTemplateSelectionGuide consistency;
- cross-template structural consistency;
- markdown diff integrity;
- no duplicate project authority, governance ownership, runtime ownership, implementation authority, registry authority, certification authority, or ProjectStatus authority.

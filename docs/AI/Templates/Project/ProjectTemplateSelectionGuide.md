# Project Template Selection Guide

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-TPL-PROJECT-SELECTION-GUIDE` |
| Title | Project Template Selection Guide |
| Version | `0.2.0-draft` |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Project Template Guidance |
| Document Type | Selection Guide |
| Owner | Framework Architecture Team |
| Maintainers | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-10 |
| Last Updated | 2026-07-10 |
| Lifecycle Phase | Draft |
| Traceability ID | `AI-DOS.TEMPLATES.PROJECT.SELECTION-GUIDE` |
| Scope | Guidance for selecting the smallest correct Project template from the normalized Project template family. |
| Out of Scope | Project implementation logic, scaffolding behavior, code generation, runtime behavior, deployment logic, CI/CD behavior, package management execution, framework-specific execution, certification decisions, registry updates, or ProjectStatus updates. |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Templates/Standards/TPL-000-Template-Standard.md`; `docs/AI/Templates/README.md`; `docs/AI/Templates/Project/README.md`; `docs/AI/Architecture/Constitution/A.1-Constitution.md` |
| Dependencies | STD-010 metadata schema; TPL-000 template governance; Project template family; project identity; target platform and architecture inputs |
| Consumes | Existing Planning, Runtime, Architecture, Integration, Platform, Standards, and Governance authorities without redefining them |
| Produces | Project template selection guidance |
| Related Specifications | Generic Project Template; CLI, Library, SaaS, Node, React, Laravel, Symfony, and WordPress project templates |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Project template family review, selection-guide validation, README alignment validation, STD-010 validation, TPL-000 validation, and explicit Human Governance approval |
| Certification Status | Not certified |

---

## 1. Purpose

Help project owners and agents choose the smallest correct Project template.

This guide is documentation only. It does not authorize scaffolding, implementation, runtime behavior, package management, deployment, CI/CD, certification, registry updates, or ProjectStatus updates.

## 2. Selection Rule

Choose the most generic template that fully fits the project.

Do not choose a framework-specific template merely because a reference project uses that framework. Choose a framework-specific template only when that framework is a real host, adapter, or project boundary that must be documented.

## 3. Decision Table

| Project Type | Recommended Template | Reason |
|:---|:---|:---|
| Unknown, neutral, or intentionally framework-independent stack | `GenericProjectTemplate.md` | Smallest neutral adoption contract. |
| Command-line application or developer automation tool | `CLIProjectTemplate.md` | CLI is the primary interaction surface. |
| Reusable package, SDK, or shared library | `LibraryProjectTemplate.md` | Public contracts and compatibility are primary concerns. |
| Hosted product or SaaS application | `SaaSProjectTemplate.md` | Hosted product concerns must be documented without deployment execution. |
| Node.js backend, service, worker, package, or tooling system | `NodeProjectTemplate.md` | Node is the runtime host. |
| React frontend, UI shell, design system, or frontend package | `ReactProjectTemplate.md` | React is the presentation/runtime adapter. |
| Laravel application, package, API, or service | `LaravelProjectTemplate.md` | Laravel is the host framework. |
| Symfony application, bundle, component service, or PHP backend | `SymfonyProjectTemplate.md` | Symfony is the host framework. |
| WordPress plugin, theme, hosted application, or WordPress-backed product | `WordPressProjectTemplate.md` | WordPress is the host/adapter surface. |

## 4. Required Human Inputs

| Input | Required | Notes |
|:---|:---|:---|
| Project name | Yes | Must be known before template adoption. |
| Repository name | Yes | Used for produced-document identity. |
| Host framework / runtime | Yes | Use `GenericProjectTemplate.md` if intentionally unknown. |
| Architecture model | Yes | Must be documented or explicitly pending. |
| Initial phase | Yes | Link to planning authority; do not update ProjectStatus from this guide. |
| Initial status | Yes | Link to live status authority; do not duplicate live state. |
| Governance owner | Recommended | Required before formal approval. |
| Quality gates | Recommended | Required before review readiness. |

## 5. Stop Conditions

Stop template adoption when:

- project identity is unknown;
- architecture model is unknown;
- no owner can confirm source-of-truth policy;
- template selection would import another project's product-specific rules;
- platform-specific behavior would redefine framework core;
- selection would imply implementation, scaffolding, deployment, CI/CD, registry, certification, or ProjectStatus authority.

## 6. Consistency Requirements

Every project template selected by this guide must preserve the normalized family structure documented in `README.md`.

Framework-specific templates may extend the common structure, but they must not redefine the common structure or make the framework the source of project authority by default.

## 7. Validation Checklist

- [ ] Selection uses the smallest template that fully fits the project.
- [ ] Framework-specific selection is justified by real project boundaries.
- [ ] Required human inputs are available or explicitly blocked.
- [ ] Stop conditions were checked.
- [ ] Selection preserves the normalized Project family structure.
- [ ] Selection does not introduce project, platform, framework, runtime, governance, review, certification, registry, implementation, or ProjectStatus authority.

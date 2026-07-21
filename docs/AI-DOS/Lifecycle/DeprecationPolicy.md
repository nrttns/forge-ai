# AI Framework Deprecation Policy

## Status

Status: AI Framework v1.0 RC2 Lifecycle Policy

Document Type: Deprecation Policy

Authority: `docs/AI-DOS/Lifecycle/README.md`

---

## Purpose

This document defines how AI Framework documents, templates, commands, workflows, and rules may be deprecated.

Deprecation preserves compatibility while giving adopters a documented path away from obsolete framework surfaces.

---

## Deprecation Scope

The following framework surfaces may be deprecated only through documented lifecycle action:

- framework documents;
- specification modules;
- validation documents;
- testing scenarios;
- certification evidence patterns;
- project templates;
- commands;
- workflows;
- checklists;
- agent system prompts;
- tooling rules;
- lifecycle policies.

---

## Deprecation Notice Requirements

A deprecation notice must include:

- deprecated item name and path;
- deprecation date;
- affected framework version;
- reason for deprecation;
- replacement item or migration destination;
- expected removal or archival stage, if known;
- compatibility impact;
- validation or certification implications;
- changelog entry reference.

The notice must be visible in or near the deprecated document unless the document has been archived as historical reference.

---

## Migration Guidance Requirements

Migration guidance must include:

- what adopters should use instead;
- whether migration is required immediately or may be delayed;
- required path changes;
- required authority, validation, command, workflow, template, or tooling changes;
- expected review or validation checks after migration;
- known risks if migration is not completed.

Migration guidance must not instruct adopters to bypass validation, certification, project-state discipline, or higher-authority documents.

---

## Removal and Archival

Deprecated items should remain available until a documented major release, archival decision, or human governance decision removes them from active use.

Archived items are historical reference only and must not be used as active framework authority.

# Template Authoring Standard

## Status

Status: Draft for Review  
Document Type: Template Authoring Standard  
Authority: `docs/AI/AIFramework.md`  
Owner: Template System  
Applies To: `docs/AI/Templates/`

Related Documents:

```text
docs/AI/Templates/Core/DocumentMetadata.md
docs/AI/Specification/Terminology.md
docs/AI/Validation/ValidationChecklistTemplate.md
docs/AI/Checklists/AgentReviewChecklist.md
```

Does Not Own:

```text
Framework constitution
ProjectStatus advancement
Implementation architecture
Validation decisions
Certification outcomes
```

---

# Purpose

This document defines howAI-DOS templates must be authored, named, structured, validated, reviewed, and evolved.

The goal is to make every template predictable for humans, AI agents, automation, validators, reviewers, and future swarms.

---

# Template Philosophy

A template is an output contract.

A template defines the minimum required structure, metadata, sections, evidence expectations, and completion checklist for a document type.

A template does not define architecture unless the template itself is specifically an architecture template. Even then, it defines the structure of architecture documentation, not the architecture of a specific project.

---

# Template Invariants

Every canonical template must preserve these invariants:

- authority is declared;
- scope is explicit;
- ownership is clear;
- required metadata is present;
- required sections are ordered consistently;
- allowed and forbidden responsibilities are documented;
- validation expectations are included;
- completion criteria are testable;
- ProjectStatus is not advanced by the template itself;
- historical identifiers are not renamed or reinterpreted by the template;
- lower-level templates do not redefine higher-level architecture.

---

# Canonical Template Directory Model

The target v3 template model is:

```text
docs/AI/Templates/
├── Core/
│   ├── TemplateStandard.md
│   └── DocumentMetadata.md
│
├── Planning/
│   ├── VisionTemplate.md
│   ├── RoadmapTemplate.md
│   ├── PhaseTemplate.md
│   ├── StageTemplate.md
│   └── CapabilityTemplate.md
│
├── Architecture/
│   ├── ArchitectureTemplate.md
│   ├── ADRTemplate.md
│   ├── RFCTemplate.md
│   ├── SpecificationTemplate.md
│   └── GovernanceTemplate.md
│
├── Workflow/
│   ├── WorkflowTemplate.md
│   ├── CommandTemplate.md
│   ├── ChecklistTemplate.md
│   └── ReviewTemplate.md
│
├── Validation/
│   ├── AuditTemplate.md
│   ├── ValidationTemplate.md
│   ├── TestTemplate.md
│   └── CertificationTemplate.md
│
├── Knowledge/
│   ├── KnowledgeTemplate.md
│   ├── StateTemplate.md
│   └── DecisionLogTemplate.md
│
├── Integration/
│   ├── AdapterTemplate.md
│   ├── IntegrationTemplate.md
│   └── MigrationTemplate.md
│
└── Project/
    ├── README.md
    ├── GenericProjectTemplate.md
    ├── WordPressProjectTemplate.md
    ├── ReactProjectTemplate.md
    ├── LaravelProjectTemplate.md
    └── TemplateAdoptionChecklist.md
```

---

# Naming Rules

## File Names

Template file names must use PascalCase and end with `Template.md` when they define a reusable template.

Examples:

```text
PhaseTemplate.md
CapabilityTemplate.md
ValidationTemplate.md
AdapterTemplate.md
```

Indexes may be named `README.md` when they describe a directory.

Standards may use descriptive names without the `Template` suffix:

```text
TemplateStandard.md
DocumentMetadata.md
```

## Sprint Naming Deprecation

The historical `SprintTemplate.md` name should be deprecated because its content represents a Historical Capability template.

Target replacement:

```text
SprintTemplate.md → CapabilityTemplate.md
```

Migration should preserve compatibility by documenting the rename and updating all references in one controlled step.

---

# Required Template Structure

Every template should follow this structure unless a stronger specialized template requires a different order.

```text
1. Status
2. Purpose
3. When To Use This Template
4. Authority and Ownership
5. Scope
6. Required Inputs
7. Required Structure
8. Section Requirements
9. Allowed Content
10. Forbidden Content
11. Validation Requirements
12. Review Requirements
13. Completion Criteria
14. Completion Checklist
15. Related Documents
```

---

# Section Rules

## 1. Status

Must include metadata using `DocumentMetadata.md`.

## 2. Purpose

Must state why the template exists.

## 3. When To Use This Template

Must describe when this template applies and when another template should be used.

## 4. Authority and Ownership

Must explain the governing authority and the owner of the produced artifact.

## 5. Scope

Must define what the produced artifact may and may not cover.

## 6. Required Inputs

Must list documents or evidence needed before the template can be completed.

## 7. Required Structure

Must list the required headings in order.

## 8. Section Requirements

Must explain what each required section must contain.

## 9. Allowed Content

Must define safe content categories.

## 10. Forbidden Content

Must prevent authority drift, scope expansion, hidden architecture, and unreviewed implementation claims.

## 11. Validation Requirements

Must define what must be checked before the artifact can be considered review-ready.

## 12. Review Requirements

Must define what review should verify.

## 13. Completion Criteria

Must describe objective completion conditions.

## 14. Completion Checklist

Must include a checklist that can be used by agents and reviewers.

## 15. Related Documents

Must list relevant documents by path.

---

# Table Rules

Use tables for structured metadata, mappings, checklists, decision matrices, compatibility matrices, and ownership matrices.

Tables should not replace narrative explanation where reasoning is needed.

---

# Checklist Rules

Checklists must use markdown checkbox syntax.

```markdown
- [ ] Item
```

Checklist items should be testable.

Avoid vague checklist items such as:

```text
Everything looks good
```

Prefer:

```text
All referenced documents resolve to existing paths
```

---

# Diagram Rules

Use plain text diagrams for authority, dependency, and lifecycle flows unless Mermaid is explicitly approved by the target repository.

Preferred:

```text
Planning
    ↓
Execution
    ↓
Validation
```

---

# Cross-Reference Rules

References must use stable repository paths.

Correct:

```text
docs/AI/AIFramework.md
```

Incorrect:

```text
the framework doc
```

---

# Compatibility Rules

Template changes are breaking when they:

- rename required paths;
- remove required sections;
- change authority order;
- weaken validation, review, or certification expectations;
- change ProjectStatus handling;
- require adopting projects to restructure without migration guidance.

Breaking template changes require migration notes and lifecycle review.

---

# Template Validation Checklist

Before a template becomes canonical, verify:

- [ ] Metadata follows `DocumentMetadata.md`.
- [ ] Purpose is clear.
- [ ] Use case is explicit.
- [ ] Authority is declared.
- [ ] Ownership is clear.
- [ ] Scope and boundaries are documented.
- [ ] Required structure is complete.
- [ ] Allowed content is defined.
- [ ] Forbidden content is defined.
- [ ] Validation requirements are included.
- [ ] Review requirements are included.
- [ ] Completion criteria are objective.
- [ ] Completion checklist is testable.
- [ ] Related documents are listed by path.
- [ ] Template does not redefine higher authority.


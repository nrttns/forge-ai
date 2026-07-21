# Document Metadata Standard

## Status

Status: Draft for Review  
Document Type: Template Authoring Standard  
Authority: `docs/AI-DOS/AIFramework.md`  
Applies To: AllAI-DOS and AI Framework documentation templates

---

# Purpose

This document defines the canonical metadata model used byAI-DOS documentation templates.

Metadata makes every document understandable by humans, AI agents, automation, reviewers, validators, and future swarms before the body of the document is interpreted.

Every canonical template should start with a metadata block that identifies status, document type, authority, ownership, scope, lifecycle position, and relationships.

---

# Metadata Philosophy

Metadata is not decoration.

Metadata is the first validation surface of every framework document.

A document without clear metadata is not fully governable because agents cannot reliably determine:

- whether the document is active;
- what kind of artifact it is;
- which authority governs it;
- whether it defines architecture or only consumes it;
- which documents it depends on;
- whether it may be used for execution, validation, review, certification, or reference.

---

# Required Metadata Fields

Every canonical AI Framework document should include the following fields unless the governing template explicitly marks a field as not applicable.

| Field | Required | Purpose |
| --- | --- | --- |
| Status | Yes | Current lifecycle state of the document. |
| Document Type | Yes | Artifact category, such as Specification, Workflow, Command, Template, Checklist, Audit, or Policy. |
| Authority | Yes | Highest governing document for this artifact. |
| Owner | Recommended | Responsible subsystem, role, or governance owner. |
| Scope | Recommended | Short description of what the document governs. |
| Applies To | Recommended | Agents, humans, projects, adapters, phases, stages, commands, or other targets affected by the document. |
| Related Documents | Recommended | Documents this artifact consumes or coordinates with. |
| Does Not Own | Recommended | Explicit boundary preventing authority drift. |
| Last Updated | Optional | Date of last meaningful content update. |
| Version | Optional | Lifecycle or document version when applicable. |

---

# Canonical Metadata Block

Use this structure for new documents:

```markdown
## Status

Status: [Draft / Active / Canonical / Deprecated / Archived / Completed / Blocked]  
Document Type: [Document Type]  
Authority: `[Governing Path]`  
Owner: [Responsible Owner]  
Applies To: [Scope Target]

Related Documents:

```text
path/to/document.md
path/to/another-document.md
```

Does Not Own:

```text
Architecture outside this document's scope
ProjectStatus advancement
Implementation ownership
Certification decisions unless explicitly defined
```
```

---

# Status Values

Use these status values consistently.

| Status | Meaning |
| --- | --- |
| Draft | Proposed or incomplete; not canonical yet. |
| Draft for Review | Ready for review but not yet canonical. |
| Canonical | Approved active framework artifact. |
| Active | Operational and currently in use. |
| Completed | Historical work or evidence has completed. |
| Blocked | Cannot proceed because required evidence, authority, or scope is missing. |
| Deprecated | Still available but no longer preferred; migration guidance required. |
| Archived | Historical reference only; not active authority. |

---

# Document Type Values

Use canonical document types when possible.

```text
Constitution
Specification
Reference Architecture
Governance Policy
Lifecycle Policy
Operating Procedure
Workflow
Command
Template
Checklist
Validation Standard
Validation Record
Review Record
Certification Record
Audit Report
Project Template
Adapter Template
Prompt Standard
Knowledge Record
State Record
Decision Record
Migration Guide
```

If a new document type is needed, define it in the terminology layer before using it widely.

---

# Authority Rules

The `Authority` field must name the governing document, not the current document.

Correct:

```text
Authority: `docs/AI-DOS/AIFramework.md`
```

Incorrect:

```text
Authority: This document
```

A document may be authoritative for its own narrow output contract, but that must be explained in the body, not by making the document its own higher authority.

---

# Related Documents Rules

Related documents should be listed when they are required to understand, validate, review, or execute the document.

Use paths, not vague names.

Correct:

```text
docs/AI-DOS/Validation/ValidationCertification.md
```

Incorrect:

```text
Certification rules
```

---

# Does Not Own Rules

Every document that could be mistaken for authority should include a `Does Not Own` section.

Examples:

```text
This template does not define architecture.
This workflow does not certify work.
This command does not invent work.
This checklist does not update ProjectStatus.
This adapter does not redefine AI Framework principles.
```

---

# Validation Expectations

Metadata validation should verify:

- required metadata fields exist;
- authority path is present;
- status is one of the approved values;
- document type is clear;
- related documents resolve when applicable;
- `Does Not Own` boundaries prevent authority drift;
- metadata does not contradict the document body.


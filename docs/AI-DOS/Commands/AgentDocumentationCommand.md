# Agent Documentation Command

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.COMMAND.AGENT-DOCUMENTATION` |
| Version | `3.0.0-draft` |
| Status | Draft |
| Classification | Documentation Execution Command |
| Owner | AI-DOS Operational Core |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Commands/AgentTaskCommand.md`; authorized Execution Contract; applicable documentation standards |
| Consumes | Documentation-scoped Execution Contract; owning authorities; source evidence |
| Produces | Bounded documentation change; link and metadata evidence; completion report |
| Certification Status | Not certified |

## 1. Purpose

This command creates or updates documentation within one authorized scope while preserving authority, ownership, terminology, paths, and product/Target separation.

## 2. Owns

- Documentation edits explicitly authorized by the Execution Contract.
- Metadata, navigation, link, and terminology checks for those edits.

## 3. Does Not Own

- Architecture, Governance, Runtime, Engine, Distribution, System, or Target truth outside the owning source documents.
- Template changes unless explicitly scoped.
- Target planning or operational-state mutation.
- Approval, certification, promotion, or release.

## 4. Execution Rules

1. Identify the owning source of every substantive statement.
2. Preserve one canonical location and valid inbound/outbound references.
3. Apply applicable metadata and terminology standards.
4. Do not convert evidence, reports, drafts, or Target truth into normative AI-DOS authority.
5. Do not invent missing architecture or policy.
6. Stop when ownership, canonical identity, path migration, or authority is ambiguous.

## 5. Outputs

- Changed documentation artifacts.
- Link, metadata, terminology, and scope validation evidence.
- Risks, blockers, and recommended follow-up without implied approval.
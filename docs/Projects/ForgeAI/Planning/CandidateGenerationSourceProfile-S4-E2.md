# Candidate Generation Source Profile — `S4-E2`

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.CGSP.S4-E2` |
| Title | Candidate Generation Source Profile Instance — Stream 4 Target Onboarding Validation (`S4-E2`) |
| Version | `1.0.0` |
| Status | Declared |
| Classification | Target-Owned Candidate Generation Source Profile Instance |
| Document Type | Candidate and Transition Input |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Bound Objective | `S4-E2` — Stream 4 Target onboarding validation |
| Schema and Processing Owner (by reference) | `docs/AI/Workflows/TaskGenerationWorkflow.md` |
| Consumed By (by reference) | `docs/AI/Workflows/TaskPlanner.md` |
| Derivation Authority | `docs/Projects/ForgeAI/Planning/ProjectStatus.md`; `docs/Projects/ForgeAI/Planning/DevelopmentPhases.md`; `docs/Projects/ForgeAI/Planning/Roadmap.md`; `docs/Projects/ForgeAI/Mission/AGENTS.md` |
| Scope | Exactly one finite, deterministic candidate-generation input for `S4-E2`. |
| Out of Scope | Onboarding-validation implementation; candidate selection or activation; AI-DOS schema or algorithm redefinition; RC2 correction work; repository-wide scanning; Roadmap or DevelopmentPhases content; ProjectStatus mutation. |

This document is a Target-owned **data instance**, not a workflow. It supplies the finite profile that `TaskGenerationWorkflow.md` requires as a generation precondition (see `TaskGenerationWorkflow.md` §4). It does not restate, duplicate, or reinterpret that workflow's schema, enumeration, or minimality algorithm.

---

## 1. Binding

| Field | Value |
|:---|:---|
| `objective_id` | `S4-E2` |

This profile is bound exclusively to `S4-E2` ("Stream 4 — Target onboarding validation," per `Roadmap.md` §6 Stream 4 Required Evidence). It is not valid input for any other evidence identifier, stream, phase, or capability.

Grounding for the objective binding:

- `Roadmap.md` §6 Stream 4 declares `S4-E2` = "onboarding validation" and lists it as the second Required Evidence identifier for Stream 4 — Target Contract and Onboarding.
- `ProjectStatus.md` §1, §2, and §6 record `S4-E2` as the current Controlling Objective ID: `S4-E1` is `Accepted`; `S4-E2` is the earliest `Pending` identifier and therefore controls priority under `Mission/AGENTS.md` §5.3 rule 4.
- `DevelopmentPhases.md` Phase 1 ("Target-First Invocation and Execution Contract") declares the applicable Required Evidence category this profile draws its validation predicate from: "Invocation records, Target Context examples, blocker evidence for missing authority, and proof that Target contracts remain Target-owned."
- `Mission/AGENTS.md` §3 declares `docs/Projects/ForgeAI/Reports/` as the Target-owned resource for "Target Project operational evidence and findings," which is the only declared resource category capable of holding new onboarding-validation evidence.

No other Target-owned document declares `S4-E2` content; no repository-wide scan, RC2 finding, or recent-commit inspection was used to derive this binding or the artifact option below.

---

## 2. Artifact Options

| `option_id` | Path | Owner | Mutation Kind | Mandatory | `choice_group` | `validation_profile_id` |
|:---|:---|:---|:---|:---|:---|:---|
| `OPT-1` | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` | Forge AI Target Project Governance | Create | `true` | — (none) | `VP-1` |

Notes on exactness:

- `OPT-1`'s path is declared as an exact, literal repository-relative path fixed by this profile — not a directory, glob, or open-ended "related files" scope, and not an expansion rule requiring runtime resolution.
- The path sits inside `docs/Projects/ForgeAI/Reports/`, the Target resource that `Mission/AGENTS.md` §3 declares for Target Project operational evidence and findings — the only declared resource category matching "onboarding validation" evidence.
- The filename follows the existing literal naming pattern already present in that directory (`AI-DOS-<Topic>-<NNN>-<Kind>.md`, e.g. `AI-DOS-Pilot-Execution-002-Evidence.md`) solely to avoid a path collision and preserve directory-naming consistency; this is an administrative naming choice made by this authorized profile-creation task, not a derivation of candidate substance from repository scanning.
- No path collision exists: `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` does not currently exist in the repository.
- There is exactly one artifact option. No `choice_group` is declared because no legitimate exclusive alternative exists within the bound derivation authority; declaring an artificial second option would violate deterministic minimality (`TaskGenerationWorkflow.md` §6) without evidentiary basis.

---

## 3. Validation Profiles

| `validation_profile_id` | Check | Evidence Shape | Observable Completion Predicate |
|:---|:---|:---|:---|
| `VP-1` | Document-completeness review of `OPT-1`'s artifact against the four Phase 1 Required Evidence categories (`DevelopmentPhases.md` Phase 1) | A single Markdown evidence report under `docs/Projects/ForgeAI/Reports/` containing a Document Metadata table and four explicitly labeled subsections: (1) Invocation Record, (2) Target Context Example, (3) Missing-Authority Blocker Evidence, (4) No-AI-DOS-Internals-Exposure Proof | The artifact exists at the exact `OPT-1` path; all four subsections are present and non-empty; each subsection cites at least one concrete Target-owned resource actually consulted (e.g. root `AGENTS.md`, `forge-ai-governance/SKILL.md`, `Mission/AGENTS.md`, `ProjectStatus.md`); the report states an explicit pass/fail conclusion for onboarding resolution. |

No automated command is declared because no Target-declared executable test or script currently exists for onboarding-validation evidence; the check is a declared document-completeness review, consistent with `Mission/AGENTS.md` §3's "Validation resources" category, which permits task-specific validation requirements in addition to executable checks.

---

## 4. Combination Rules

| Rule | Value |
|:---|:---|
| Mandatory options | `OPT-1` |
| Exactly-one choice groups | None declared |
| Compatibility / exclusion pairs | None declared (single-option profile; no interaction possible) |
| Maximum artifact count | `1` |

---

## 5. Ordering

| Order | `option_id` |
|:---|:---|
| 1 | `OPT-1` |

Ordering is stable output canonicalization only, per `TaskGenerationWorkflow.md` §4; it is not used as a semantic tie-break and none is needed, since exactly one candidate exists.

---

## 6. Non-Goals

This profile instance does not:

- implement onboarding validation or produce the evidence report itself;
- select, activate, rank, or execute any candidate;
- redefine, duplicate, or reinterpret `TaskGenerationWorkflow.md`'s schema, enumeration, or minimality algorithm;
- derive candidates from RC2 findings, repository proximity, recent commits, or general cleanup opportunities;
- use repository-wide scanning as an enumeration source;
- modify AI-DOS workflow semantics, `Roadmap.md`, or `DevelopmentPhases.md`;
- begin the `docs/AI` → `docs/AI-DOS` migration;
- activate Stream 5, `D3`, `D4`, MCP, Axis Suite, hosted-provider, or any later capability;
- mutate `ProjectStatus.md`.

`ProjectStatus.md` §6 still records "Candidate Generation Source Profile Instance: None recorded." Recording a reference to this instance there requires a separately authorized `ProjectStatus.md` transition and is not performed by this document.

---

## 7. Version History

| Version | Date | Description |
|:---|:---|:---|
| `1.0.0` | 2026-07-21 | Initial declared Candidate Generation Source Profile instance bound to `S4-E2`, derived solely from `ProjectStatus.md`, `DevelopmentPhases.md`, `Roadmap.md`, and `Mission/AGENTS.md`. |

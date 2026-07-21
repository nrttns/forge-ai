# Candidate Generation Source Profile — `S4-E2`

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-AI.TARGET.CGSP.S4-E2` |
| Title | Candidate Generation Source Profile Instance — Stream 4 Target Onboarding Validation (`S4-E2`) |
| Version | `1.1.1` |
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
- `DevelopmentPhases.md` Phase 1 ("Target-First Invocation and Execution Contract") establishes the maturity boundary this stream operates within — "Invocation records, Target Context examples, blocker evidence for missing authority, and proof that Target contracts remain Target-owned" — but is consumed here only as boundary context; `VP-1` (§3) defines its own `S4-E2`-specific evaluation cases rather than restating Phase 1's evidence categories as its completion predicate.
- `Mission/AGENTS.md` §3 declares `docs/Projects/ForgeAI/Reports/` as the Target-owned resource whose stated purpose — "Target Project operational evidence and findings" — matches onboarding-validation evidence.

No other Target-owned document declares `S4-E2` content; no repository-wide scan, RC2 finding, or recent-commit inspection was used to derive this binding or the artifact option below.

---

## 2. Artifact Options

| `option_id` | Path | Owner | Mutation Kind | Mandatory | `choice_group` | `validation_profile_id` |
|:---|:---|:---|:---|:---|:---|:---|
| `OPT-1` | `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` | Forge AI Target Project Governance | Create | `true` | — (none) | `VP-1` |

Notes on exactness and provenance:

- `OPT-1`'s path is declared as an exact, literal repository-relative path fixed by this profile — not a directory, glob, or open-ended "related files" scope, and not an expansion rule requiring runtime resolution.
- The path sits inside `docs/Projects/ForgeAI/Reports/`, the Target-owned resource whose stated purpose (`Mission/AGENTS.md` §3: "Target Project operational evidence and findings") matches onboarding-validation evidence.
- The exact path and filename are a **Human-Governance-authorized profile-design decision made within this bounded planning work unit** — they are not a naming rule derived from, mandated by, or enumerated out of repository convention. Consulting the existing filenames already present in `docs/Projects/ForgeAI/Reports/` (e.g. `AI-DOS-Pilot-Execution-002-Evidence.md`) served only as a non-binding stylistic reference to keep directory listings readable; it is not a Target-owned placement/naming rule and is not offered as authority for the chosen path.
- This profile does not claim that no other legitimate artifact option exists under Target authority. It declares exactly one artifact option because Human Governance authorized exactly one bounded artifact for `S4-E2` in this work unit, not because any other path, filename, or location is asserted to be foreclosed by `Roadmap.md`, `DevelopmentPhases.md`, `ProjectStatus.md`, or `Mission/AGENTS.md`.
- No path collision exists: `docs/Projects/ForgeAI/Reports/AI-DOS-Target-Onboarding-Validation-001-Evidence.md` does not currently exist in the repository.
- No `choice_group` is declared because this bounded work unit authorizes exactly one artifact, not because alternatives are impossible.

---

## 3. Validation Profiles

`S4-E2` is onboarding **validation** evidence, distinct from the `S4-E1` invocation-foundation evidence it is evaluated against. `VP-1` therefore does not restate the `S4-E1` / Phase 1 evidence categories as its own completion predicate; it defines finite cases that exercise the accepted `S4-E1` contract boundary (root `AGENTS.md` and `Mission/AGENTS.md`, per `ProjectStatus.md` §9 accepted evidence for `S4-E1`: PR #235, PR #245) and requires each case to resolve to an observed `Success` or `Blocker` outcome. This section defines only the finite evidence artifact and its validation requirements; it does not execute any case.

### 3.1 Finite Onboarding-Declaration Evaluation Cases

| Case ID | Declared Onboarding Condition | Accepted `S4-E1` Contract Element Tested | Expected Observable Outcome |
|:---|:---|:---|:---|
| `CASE-1` | The canonical Target Operational Entry (`ProjectStatus.md`, per `Mission/AGENTS.md` §4) is resolvable; root `AGENTS.md` §5's Mandatory Reading Order resolves in full; and the Target-owned authorities needed for the requested resolution (e.g. Mission, DevelopmentPhases, Roadmap, as applicable to the invocation) are accessible. Reports, Source/implementation resources, and Validation resources (`Mission/AGENTS.md` §3) are required only when the resolved task declares them and are not treated as unconditional onboarding prerequisites | Root `AGENTS.md` §5 Mandatory Reading Order; `Mission/AGENTS.md` §3 Declared Target Resources; `Mission/AGENTS.md` §4 Target Operational Entry | `Success` — Target Context resolves completely for a minimal valid onboarding invocation; bounded execution may proceed without requiring task-specific source or validation resources absent a resolved task |
| `CASE-2` | Target Context cannot resolve `ProjectStatus.md`, the sole Target Operational Entry | `Mission/AGENTS.md` §4 Target Operational Entry | `Blocker` — missing Target Operational Entry; onboarding stops |
| `CASE-3` | Invocation requests modification of a Protected Area listed in `Mission/AGENTS.md` §6 without explicit authorization | `Mission/AGENTS.md` §6 Protected Areas | `Blocker` — protected-area conflict; work stops and is reported |
| `CASE-4` | Invocation expresses continuation or advancement intent while no executable work unit is active and no Candidate Generation Source Profile instance is declared for the controlling objective | `Mission/AGENTS.md` §5.2 rules 9 and 14; `ProjectStatus.md` §12 | `Blocker` — safe stop; no work is invented |

These four cases are finite and exhaustively declared here; no additional case may be added or substituted during execution of the resulting candidate without a new authorized profile revision.

### 3.2 Validation Profile Record

| `validation_profile_id` | Check | Evidence Shape | Observable Completion Predicate |
|:---|:---|:---|:---|
| `VP-1` | Evaluate each of `CASE-1` through `CASE-4` against the accepted `S4-E1` contract boundary and record the actually observed outcome for each | A single Markdown evidence report under `docs/Projects/ForgeAI/Reports/` containing a Document Metadata table and exactly four labeled subsections, one per case, each stating: the declared condition, the exact `S4-E1` contract element cited (file and section), the observed outcome (`Success` or `Blocker`), and, for a `Blocker` outcome, the exact blocking rule invoked | The artifact exists at the exact `OPT-1` path; it contains exactly four case subsections matching `CASE-1`–`CASE-4`; each subsection states an explicit observed-outcome value; each observed outcome is compared against that case's expected outcome; the report concludes with a single aggregate pass/fail statement, where pass requires all four observed outcomes to match their expected outcomes |

No automated command is declared because no Target-declared executable test or script currently exists for onboarding-declaration evaluation; the check is a declared case-by-case evaluation record, consistent with `Mission/AGENTS.md` §3's "Validation resources" category, which permits task-specific validation requirements in addition to executable checks. Producing the evidence report itself — i.e. actually running these four cases — is onboarding-validation execution and is out of scope for this profile-declaration work unit.

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
- assert that the declared artifact path or filename is the exclusive Target-authorized option for `S4-E2`;
- mutate `ProjectStatus.md`.

`ProjectStatus.md` §6 still records "Candidate Generation Source Profile Instance: None recorded." Recording a reference to this instance there requires a separately authorized `ProjectStatus.md` transition and is not performed by this document.

---

## 7. Version History

| Version | Date | Description |
|:---|:---|:---|
| `1.0.0` | 2026-07-21 | Initial declared Candidate Generation Source Profile instance bound to `S4-E2`, derived solely from `ProjectStatus.md`, `DevelopmentPhases.md`, `Roadmap.md`, and `Mission/AGENTS.md`. |
| `1.1.0` | 2026-07-21 | Corrected in place per Human Governance review: replaced `VP-1`'s reuse of `S4-E1`/Phase 1 evidence categories with four finite onboarding-declaration evaluation cases producing observable `Success`/`Blocker` outcomes against the accepted `S4-E1` contract boundary; reclassified `OPT-1`'s exact path and filename as a Human-Governance-authorized profile-design decision rather than a repository-derived naming rule, and removed the claim that no other artifact option exists. No artifact other than this file changed; binding, exact path, finite records, and one-candidate cardinality preserved. |
| `1.1.1` | 2026-07-21 | Corrected `CASE-1` in place per Human Governance review: success now requires only that the canonical Target Operational Entry resolves, the Mandatory Reading Order resolves, and the Target-owned authorities needed for the requested resolution are accessible; Reports, Source/implementation resources, and Validation resources are required only when the resolved task declares them, removing the prior unconditional requirement for all `Mission/AGENTS.md` §3 resource categories. `CASE-2`–`CASE-4`, the artifact path, candidate cardinality, and combination rules are unchanged. |

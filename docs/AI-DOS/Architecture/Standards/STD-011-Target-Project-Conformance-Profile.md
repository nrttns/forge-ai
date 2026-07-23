# STD-011 — Target Project Conformance Profile

> AI-DOS v3 · Target Project conformance profile · Draft / Non-canonical

---

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE` |
| Title | STD-011 — Target Project Conformance Profile |
| Version | `0.1.1-draft` |
| Status | Draft |
| Canonical Status | Non-canonical draft; not approved, accepted, certified, promoted, or operational |
| Classification | Target Project Conformance Profile |
| Document Type | Framework Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | Target Project Conformance Profile |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Normative Authority | Human Governance; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/FrameworkGovernance.md`; `docs/AI-DOS/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Standard.md`; applicable Meta Models within their declared domains |
| Created | 2026-07-23 |
| Last Updated | 2026-07-23 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE` |
| Scope | Draft provider-neutral validation profile for assessing one Target Project declaration and artifact-role set against the current draft STD-011 Target Project Standard without provider-specific interpretation or implementation assumptions. |
| Out of Scope | Revising STD-011; approving, certifying, promoting, migrating, aligning, initializing, or operationalizing any Target Project; modifying Target artifacts; implementing validators, templates, schemas, commands, runtime code, resolver behavior, or provider behavior. |
| Normative References | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/FrameworkGovernance.md`; `docs/AI-DOS/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Architecture/Standards/STD-011-Target-Project-Standard.md`; `docs/AI-DOS/Meta/README.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Meta/M.2-Identity-Meta-Model.md`; `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI-DOS/Meta/M.8-Extension-Meta-Model.md`; `docs/AI-DOS/Meta/M.9-Schema-Validation-Meta-Model.md` |
| Informative References | `docs/AI-DOS/System/TargetRepositoryResolution.md`; Target Declaration Profile material consumed only as downstream compatibility input. |
| Required Meta Authorities | `AI-DOS-META-M.0`; `AI-DOS-META-001`; `AI-DOS-META-M.2`; `AI-DOS-META-M.3`; `AI-DOS-META-M.4`; `AI-DOS-META-M.5`; `AI-DOS-META-M.6`; `AI-DOS-META-M.7`; `AI-DOS-META-M.8`; `AI-DOS-META-M.9` |
| Required Standard Dependencies | `AI-DOS-STD-000`; `AI-DOS-STD-010`; `AI-DOS-STD-011` |
| Consumes | STD-011 normative requirements as profiled validation criteria; M.9 validation-result semantics; M.5 evidence semantics; M.1-M.4 and M.6-M.8 meanings as required by each criterion. |
| Produces | Draft STD-011 Target Project conformance criteria, evidence contract, result aggregation rules, automation-boundary classifications, and derivation blockers. |
| Depends On | Human Governance; A.1 Constitution; Framework Governance; STD-000; STD-010; STD-011; M.0-M.9. |
| Validates | `AI-DOS-STD-011` Target Project conformance for one reviewed Target Project subject when supplied with complete Target-owned inputs and evidence. |
| Reviews | None |
| Certifies | None |
| Supersedes | None |
| Superseded By | None |
| Validation Profile | STD-011 Target Project conformance profile draft; M.9 result semantics with M.5 evidence binding |
| Validation Status | Not validated by an implemented validator |
| Review Status | Review Required |
| Certification Status | Not certified |
| Compatibility Declaration | Additive draft validation profile for STD-011. It does not change STD-011, declare a new Standards family, or grant any Target Declaration Profile equivalence. Compatibility with downstream TargetRepositoryResolution is assessed only as input compatibility, not as redefinition of resolver behavior. |
| Extension Profile | None |
| Schema Binding | None; this draft creates no machine-readable schema |
| Promotion Requirements | Complete STD-011 normative traceability review; STD-000 and STD-010 metadata review; M.0-M.9 consistency review; evidence-shape review against M.5 and M.9; Target Declaration Profile boundary review; safe-stop and outcome-semantics review; pilot read-only review against at least one Human-Governance-authorized non-operational subject; no unresolved derivation blockers; recorded review evidence; explicit Human Governance approval and explicit canonical promotion |

---

## 2. Artifact Identity Resolution

This artifact is a Standards-family validation profile for STD-011, not a new root Standard and not STD-012. STD-000 allows Standards to declare validation profiles and conformance expectations, and M.9 defines a Validation Profile as a defined validation scope. The stable identifier is therefore `AI-DOS-STD-011-TARGET-PROJECT-CONFORMANCE-PROFILE`, located beside STD-011 under `docs/AI-DOS/Architecture/Standards/` because it is a Standards-governed profile for a Standards artifact.

No index update is made in this draft because no canonical Standards index requiring registration of new draft profile artifacts was found in the applicable Standards directory. This file does not create a new artifact class, relationship type, lifecycle, standards family, governance mechanism, approval mechanism, template, schema, validator, or command.

## 3. Scope and Conformance Subject

A conformance assessment under this profile assesses exactly one Target Project reviewed subject. The subject is the Target-owned declaration set and role-bearing artifact set presented for review, not the repository path by itself.

An assessment record must identify:

1. assessed Target identity;
2. reviewed-subject locator and immutable revision identity;
3. applicable STD-011 version and revision, including file path and commit or immutable content locator;
4. applicable profile version and revision;
5. declared logical role identities and physical locators when present;
6. Target Declaration Profile or approved equivalent declaration-set identity;
7. evidence corpus revision or immutable evidence locators; and
8. evaluator identity or role.

Excluded from assessment: Target approval, certification, promotion, migration, operational activation, Forge AI conformance, provider capability, resolver implementation correctness beyond supplied resolver-produced outcomes, file-path preference when logical identity resolves, and any claim not covered by STD-011.

Logical artifact identity is evaluated from metadata and declarations. Physical file location is only a locator unless existing authority for the assessed Target makes that location part of the Target-owned declaration.

## 4. Result Semantics and Aggregation

This profile uses only the four canonical M.9 validation-result types. Every completed validation assertion assigns exactly one of these results:

| M.9 Result Type | Conformance Effect | Evidence Requirement |
|:---|:---|:---|
| Pass | Positive conformance contribution. | Optional; may include an audit trace. |
| Fail | Blocks conformance. | Mandatory: violated rule, deficiency, and expected state. |
| Warning | Positive but annotated. | Mandatory: concern, non-blocking rationale, and recommended resolution. |
| Waived Finding | Positive but conditional. | Mandatory: deficiency, waiving authority, rationale, and waiver scope. |

### Assessment Aggregation

After every applicable required criterion has completed, the complete M.9 result set is aggregated in this order:

| Complete Result Set | M.9 Overall Outcome |
|:---|:---|
| Any unwaived Fail | Non-conformant. |
| Otherwise, any Waived Finding | Conformant with conditions. |
| Otherwise, one or more results, all Pass or Warning | Conformant. |
| No results | Inconclusive — not a conformance claim. |

A Warning does not override a Fail. A Waived Finding does not equal approval, certification, promotion, migration, or operational activation.

Aggregation must not be applied to an incomplete required evaluation set. If an applicable required criterion remains unevaluated because of a safe-stop, unresolved blocker, missing canonically required evidence, or missing required Human Governance decision, the assessment records a blocked safe-stop disposition and makes no aggregate conformance claim. Completed results for other criteria may be retained, but they do not cure the incomplete assessment.

### Safe-Stop Disposition

Safe-stop is evaluation behavior under STD-011 §19, not an M.9 validation-result type or an additional aggregate outcome. When a safe-stop condition prevents deterministic evaluation of a rule-target pair, the evaluator does not complete the M.9 assertion and does not assign Pass, Fail, Warning, or Waived Finding to that blocked pair. The safe-stop is recorded separately with the blocker, owning authority, affected artifact role, evidence inspected, and next required human decision or correction.

Missing optional Pass audit evidence does not trigger safe-stop. Missing evidence triggers safe-stop only when canonical authority or the applicable criterion requires that evidence. A safe-stop does not mutate Target state.

This draft does not invent a severity taxonomy. Where a finding format is needed, use existing review terms only as applicable: `INFO`, `WARNING`, `BLOCKER`, and M.9 Pass, Fail, Warning, and Waived Finding. If a requested severity cannot be mapped to those existing terms, record the gap without assigning a new severity.

## 5. Evidence Contract

Each completed criterion assertion produces an M.9-compatible validation record. Evidence obligations follow M.9: evidence is optional for Pass and mandatory for Fail, Warning, and Waived Finding. When a record includes an M.5-governed evidence item or claim binding, that evidence must satisfy the applicable M.5 properties; the profile does not require an otherwise absent optional Pass audit trace.

| Validation Record Field | Requirement |
|:---|:---|
| Assessed Target identity | Required. |
| Reviewed-subject locator | Required; must identify one subject without inference. |
| Reviewed-subject revision | Required immutable revision or content identity. |
| Applicable STD-011 revision | Required path plus version and immutable revision. |
| Applicable profile revision | Required path plus version and immutable revision. |
| Criterion identifier | Required stable `STD011-TPC-*` identifier. |
| Evaluated inputs | Required list of declarations, artifact identities, evidence locators, and resolver outcomes consumed. |
| Result | Required; exactly one of Pass, Fail, Warning, or Waived Finding. |
| Evidence source | Mandatory for Fail, Warning, and Waived Finding; optional for Pass. When supplied, record the source path, locator, decision record, or resolver output. |
| Provenance | Required for every included M.5-governed evidence item or derivation. |
| Evidence freshness | Required for every included M.5-governed evidence item: creation timestamp, assessment timestamp, freshness classification, and any Timeless justification. Not applicable when a Pass record has no optional audit evidence. |
| Evidence confidence | Required for every included M.5-governed claim binding, with level and justification. Not applicable when a Pass record has no optional audit evidence. |
| Evaluator identity or role | Required. |
| Evaluation timestamp or event identity | Required. |
| Human Governance decision reference | Required when the criterion depends on approval, acceptance, waiver, equivalence, supersession, replacement, migration, or promotion. |
| Invalidation or staleness conditions | Required; at minimum subject revision drift, STD-011 revision change, profile revision change, role mapping change, evidence corpus change, declaration-set change, or Human Governance decision change. |

A safe-stop is not stored in the Result field. It is a separate disposition record containing, at minimum:

| Safe-Stop Field | Requirement |
|:---|:---|
| Blocker | Required condition that prevented deterministic evaluation. |
| Owning authority | Required authority capable of resolving the blocker. |
| Affected artifact role | Required. |
| Evidence inspected | Required; may state that required evidence was absent. |
| Next required human decision or correction | Required. |

Evidence of evaluation is not evidence of approval, certification, canonical promotion, migration, operational activation, Target acceptance, or permission to mutate Target artifacts.

## 6. Criterion Field Contract

Every criterion in Section 7 uses this field order: criterion identifier; STD-011 source section; conformance subject; required condition; required inputs; evaluation method; success condition; failure condition; indeterminate or blocker condition; required evidence; Human Governance judgment; automation boundary.

Automation boundary values are:

- Deterministic machine-evaluable.
- Machine-evaluable after authoritative input is supplied.
- Human Governance judgment.
- Indeterminate because canonical semantics are insufficient.

Prose similarity, AI judgment, provider preference, implementation convention, repository proximity, branch state, pull request state, or current file path alone is never deterministic validation.

## 7. STD-011 Normative Requirement Traceability Criteria

### STD011-TPC-001 — Draft Claim Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §2 |
| Conformance subject | Assessment claim and report. |
| Required condition | Any conformance claim is a draft validation claim with explicit evidence and does not assert approval, acceptance, certification, migration, or operational readiness. |
| Required inputs | Claim text; evidence record; Target decision records if any. |
| Evaluation method | Inspect claim language and decision references. |
| Success condition | Claim is bounded to draft validation evidence only. |
| Failure condition | Claim states or implies approval, acceptance, certification, migration, or operational readiness without separate authority. |
| Indeterminate/blocker | Claim or decision evidence is missing or ambiguous. |
| Required evidence | Claim excerpt or locator; decision/evidence references. |
| Human Governance judgment | Required only for separate approval claims. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-002 — Meta Consumption Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §3 |
| Conformance subject | Target conformance material and validation profile. |
| Required condition | The material consumes M.0-M.9 meanings without redefining them, formally specializing them, creating M.10, or creating another Meta Model. |
| Required inputs | Target artifacts; conformance report; declared extensions. |
| Evaluation method | Check for new or redefined Meta semantic authority and relationship to M.0-M.9. |
| Success condition | All Meta use is consumption/application only. |
| Failure condition | Material creates or redefines Meta types, semantics, or a new Meta Model. |
| Indeterminate/blocker | Claimed semantic ownership is ambiguous. |
| Required evidence | Artifact excerpts and relationship declarations. |
| Human Governance judgment | Required for any asserted exception. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-003 — Logical Role Declarations and Stable Identity

| Field | Value |
|:---|:---|
| STD-011 source section | §4, §16 |
| Conformance subject | Declared logical artifact roles. |
| Required condition | Present roles declare stable logical identities independent of physical paths; alternate names map unambiguously to logical roles. |
| Required inputs | Role map; artifact metadata; physical locators. |
| Evaluation method | Resolve role identity from metadata/declarations before path conventions. |
| Success condition | Each present role has one stable identity and any alternate name maps to exactly one logical role. |
| Failure condition | Role mapping is missing, conflicting, duplicate, path-only, or ambiguous. |
| Indeterminate/blocker | Required declarations or metadata are inaccessible or stale. |
| Required evidence | Role map and metadata locators. |
| Human Governance judgment | Required for approving equivalence or exception. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-004 — Authorship and Ownership Classification

| Field | Value |
|:---|:---|
| STD-011 source section | §5 |
| Conformance subject | Target artifacts. |
| Required condition | Artifacts are classified by authorship, maintenance authority, and operational role, preserving boundaries among Human-approved, AI-DOS-derived, AI-DOS-maintained Target-owned, generated, auxiliary, historical, future-looking, and provider-specific artifacts. |
| Required inputs | Artifact metadata; decision records; provenance. |
| Evaluation method | Match each role-bearing artifact to a classification and verify authority boundary. |
| Success condition | Classification is explicit and authority effects do not exceed STD-011 boundaries. |
| Failure condition | Unclassified or misclassified artifacts are used as authority, or provider/generated/future/historical material is treated as current Target truth without approval. |
| Indeterminate/blocker | Authorship, provenance, or approval evidence is missing. |
| Required evidence | Classification table, provenance, approval references. |
| Human Governance judgment | Required to accept generated/provider/future material as authority. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-005 — Mandatory Artifact Roles and Equivalent Mapping

| Field | Value |
|:---|:---|
| STD-011 source section | §6 |
| Conformance subject | Mandatory Target Project role set. |
| Required condition | Mission, DevelopmentPhases or generation-grade equivalent, Roadmap, ProjectStatus or equivalent operational-state record, Target Declaration Profile, and evidence records are present or explicitly mapped by approved equivalence. Auxiliary artifacts are not required for authority unless declared role-bearing. |
| Required inputs | Role map; equivalence decision references; artifact locators. |
| Evaluation method | Verify presence/cardinality of each mandatory logical role or approved equivalent. |
| Success condition | Each mandatory role resolves exactly once or has an explicit Target approval record for equivalence. |
| Failure condition | Mandatory role is missing, duplicate, conflicting, or equivalent only by provider/resolver assertion. |
| Indeterminate/blocker | Equivalence approval evidence is absent or ambiguous. |
| Required evidence | Role resolution table; approval decisions. |
| Human Governance judgment | Required for equivalence approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-006 — Authority and Derivation Chain Direction

| Field | Value |
|:---|:---|
| STD-011 source section | §7 |
| Conformance subject | Cross-artifact authority chain. |
| Required condition | Authority flows Target Project Standard → Mission → DevelopmentPhases → Roadmap → ProjectStatus → bounded task lifecycle; lower artifacts do not redefine, broaden, or contradict higher artifacts; repository or provider state does not replace the chain. |
| Required inputs | Relationship declarations; artifact contents; evidence references. |
| Evaluation method | Trace every operational objective and role assertion to upstream authority. |
| Success condition | Direction and derivation are one-way and coherent. |
| Failure condition | Lower artifact contradicts, broadens, or replaces upstream authority; repository/provider state substitutes for authority. |
| Indeterminate/blocker | Relationship or provenance evidence is missing. |
| Required evidence | Relationship graph or table; contradiction analysis. |
| Human Governance judgment | Required for resolving authority conflicts. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-007 — Mission Source-Authority Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §8 |
| Conformance subject | Mission role artifact. |
| Required condition | Mission is Human-authored or Human-Governance-approved; defines purpose, Target identity, scope, out-of-scope boundaries, strategic constraints, protected principles, approval authority, and permitted customization boundary; is not generated from ProjectStatus, repository contents, provider defaults, Roadmap tasks, or implementation-language conventions. |
| Required inputs | Mission artifact; authorship/provenance; approval record. |
| Evaluation method | Verify required Mission fields and source prohibition. |
| Success condition | Mission satisfies required content and Human authority. |
| Failure condition | Mission lacks required content, lacks required approval, or is generated from prohibited sources. |
| Indeterminate/blocker | Authorship or approval cannot be resolved. |
| Required evidence | Mission locator/revision; approval/provenance references. |
| Human Governance judgment | Required for Mission approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-008 — DevelopmentPhases Source-Authority Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §9 |
| Conformance subject | DevelopmentPhases role artifact. |
| Required condition | DevelopmentPhases is derived from Mission and explicit Human Governance source decisions, defines capability maturity mechanically enough for Roadmap derivation, and does not copy ProjectStatus values into strategic truth, backfill phases without approval, or declare current execution authorization. |
| Required inputs | DevelopmentPhases artifact; Mission revision; source decisions; approval records. |
| Evaluation method | Trace capability content to Mission/Human decisions and inspect prohibited operational-state import. |
| Success condition | Source authority and prohibited-use boundaries are satisfied. |
| Failure condition | DevelopmentPhases is sourced from operational state or declares current execution authority. |
| Indeterminate/blocker | Source trace is absent or ambiguous. |
| Required evidence | Source trace matrix; decision references. |
| Human Governance judgment | Required for source decisions and backfill approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-009 — Generation-Grade DevelopmentPhases Sufficiency

| Field | Value |
|:---|:---|
| STD-011 source section | §10 |
| Conformance subject | Each DevelopmentPhases capability unit. |
| Required condition | Each capability unit declares all twelve minimum fields required by STD-011 §10, with no absent, ambiguous, or internally conflicting capability data. |
| Required inputs | Capability unit records; validation expectations; safe-stop conditions. |
| Evaluation method | Field-by-field completeness and consistency check. |
| Success condition | Every capability unit has all required fields and deterministic tie resolution. |
| Failure condition | Required field is absent or contradictory but assessment still claims generation-grade sufficiency. |
| Indeterminate/blocker | Missing, ambiguous, or internally conflicting fields prevent derivation. |
| Required evidence | Capability-unit coverage table. |
| Human Governance judgment | Required to supply or approve missing source design; not required for mechanical completeness. |
| Automation boundary | Deterministic machine-evaluable for field presence; Human Governance judgment for source design corrections. |

### STD011-TPC-010 — Deterministic Roadmap Derivation

| Field | Value |
|:---|:---|
| STD-011 source section | §11 |
| Conformance subject | DevelopmentPhases-to-Roadmap derivation. |
| Required condition | Roadmap derivation follows all nine STD-011 §11 rules, including source trace preservation, dependency-before-priority order, evidence identifier preservation, boundary preservation, grouping only from declared relationships or approved rules, exact tie-break application, derivation evidence, and no derivation from ProjectStatus, repository activity, provider preferences, or backlog. |
| Required inputs | DevelopmentPhases revision; derivation rules; Roadmap draft/accepted artifact; derivation evidence. |
| Evaluation method | Reconstruct derivation trace from inputs and compare to Roadmap output. |
| Success condition | Unique deterministic derivation is evidenced. |
| Failure condition | Roadmap truth derives from prohibited sources or changes required evidence meaning. |
| Indeterminate/blocker | No unique order or incomplete derivation evidence. |
| Required evidence | Derivation evidence record with source revision, rule set, selected units, exclusions, warnings, and blockers. |
| Human Governance judgment | Required only for approved grouping rules or source decisions. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-011 — Roadmap Acceptance, Regeneration, and Operational Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §12 |
| Conformance subject | Roadmap role artifact. |
| Required condition | Roadmap becomes authoritative only after deterministic derivation and Target approval acceptance; regeneration preserves accepted identifiers unless explicit approval authorizes supersession, replacement, or migration; blocked items, accepted evidence, and accepted priorities are not silently erased, reclassified, or reordered; Roadmap is not operational state by itself. |
| Required inputs | Roadmap draft/accepted revision; derivation evidence; acceptance record; regeneration record if applicable. |
| Evaluation method | Verify acceptance follows derivation and regeneration changes are evidence-backed. |
| Success condition | Roadmap authority and regeneration boundaries are preserved. |
| Failure condition | Roadmap is treated as accepted without approval, or regeneration silently changes protected accepted truth. |
| Indeterminate/blocker | Acceptance or regeneration authority is missing. |
| Required evidence | Acceptance decision; regeneration trace; stable identifier comparison. |
| Human Governance judgment | Required for Roadmap acceptance and supersession/replacement/migration approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-012 — ProjectStatus Initialization and Transitions

| Field | Value |
|:---|:---|
| STD-011 source section | §13 |
| Conformance subject | ProjectStatus or equivalent operational-state record. |
| Required condition | Initialization consumes accepted Roadmap and current accepted evidence and produces all ten required fields; transitions are governed, evidence-backed, atomic with respect to the resolved subject, and occur only under explicit Human Governance authorization or approved Target policy plus AI-DOS workflow producing one uniquely valid transition. |
| Required inputs | Accepted Roadmap; evidence status records; ProjectStatus revision; transition decision/workflow record. |
| Evaluation method | Check initialization field coverage and transition authority/provenance. |
| Success condition | Operational state is explicit, bounded, and uniquely authorized. |
| Failure condition | Initialization omits required fields or transition occurs without unique authority. |
| Indeterminate/blocker | Subject identity is conflicting, missing, duplicate, stale, or drifted. |
| Required evidence | Initialization coverage table; transition evidence; subject identity record. |
| Human Governance judgment | Required for explicit transition authorization or Target policy approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-013 — ProjectStatus Non-Invention

| Field | Value |
|:---|:---|
| STD-011 source section | §14 |
| Conformance subject | ProjectStatus objectives, evidence statuses, blockers, active work unit, and next action. |
| Required condition | ProjectStatus does not invent objectives, redefine Mission, rewrite DevelopmentPhases, reorder Roadmap truth, create new Roadmap evidence identifiers, fall through blocked objectives, select convenience work, or treat repository activity as accepted evidence; it holds or safe-stops when Roadmap truth is absent, conflicting, or insufficient. |
| Required inputs | ProjectStatus revision; upstream Mission/DevelopmentPhases/Roadmap revisions; evidence records. |
| Evaluation method | Trace each current operational objective and evidence status to upstream Roadmap and Human Governance boundary. |
| Success condition | Every operational claim is upstream-constrained. |
| Failure condition | ProjectStatus synthesizes or convenience-selects unsupported objectives or evidence. |
| Indeterminate/blocker | Upstream Roadmap truth cannot be resolved. |
| Required evidence | Objective/evidence traceability matrix. |
| Human Governance judgment | Required to resolve absent or conflicting upstream truth. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-014 — Declarative Initialization Output Contract

| Field | Value |
|:---|:---|
| STD-011 source section | §15 |
| Conformance subject | Conceptual initialization output or equivalent proposal/blocker evidence. |
| Required condition | Any initialization output includes the eight STD-011 output roles and remains evidence, proposal, or blocker data; it does not approve, certify, migrate, overwrite, or mutate Target artifacts by implication. |
| Required inputs | Initialization output; mutation/decision records if any. |
| Evaluation method | Verify output-role coverage and no implied authority effect. |
| Success condition | Output is complete and non-mutating unless separately authorized. |
| Failure condition | Output omits required roles or implies approval/certification/migration/mutation. |
| Indeterminate/blocker | Output role or authority effect is unclear. |
| Required evidence | Output record and no-mutation confirmation. |
| Human Governance judgment | Required for separate mutation or approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-015 — Path Convention Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §16 |
| Conformance subject | Logical-role locators and physical paths. |
| Required condition | Logical roles are normative; default paths are only conveniences. Identity resolves from metadata and declarations. Moves, renames, alternate layouts, and non-Markdown auxiliary implementations do not change logical identity when metadata and declarations are coherent. Validators test role identity and relationship coherence before path conventions; path convention failure may be Warning when alternate locator is allowed. |
| Required inputs | Metadata; declarations; path locators; alternate locator declaration. |
| Evaluation method | Resolve identity first; then evaluate path convention only as subordinate check. |
| Success condition | Identity remains coherent independent of path. |
| Failure condition | Validator treats path mismatch as conformance failure despite coherent approved logical identity. |
| Indeterminate/blocker | Metadata/declarations do not resolve identity. |
| Required evidence | Identity resolution evidence and path comparison. |
| Human Governance judgment | Required for alternate locator approval when Target policy requires it. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-016 — Target Declaration Profile Integration

| Field | Value |
|:---|:---|
| STD-011 source section | §17 |
| Conformance subject | Target Declaration Profile or equivalent declaration set. |
| Required condition | Target exposes a Target Declaration Profile or equivalent declaration set consumable by TargetRepositoryResolution; equivalent sets satisfy declaration-input and resolution-compatibility requirements and are approved by Target Human Governance or explicitly delegated Target approval authority; provider/resolver does not self-approve equivalence; declaration inputs include Target resources, source scope, protected areas, validation requirements, permissions, and execution authority; resolver-owned safe-stop behavior remains resolver-owned. |
| Required inputs | Declaration set; equivalence approval if applicable; resolver outcome/blocker record. |
| Evaluation method | Check input coverage, approval authority, and boundary between Target-authored declarations and resolver-produced outcomes. |
| Success condition | Declaration set is compatible and any equivalence is externally approved. |
| Failure condition | Provider/resolver self-approves equivalence or declaration set omits mandatory inputs. |
| Indeterminate/blocker | Resolver returns blocker or equivalence approval is missing. |
| Required evidence | Declaration-profile coverage table; approval reference; resolver outcome. |
| Human Governance judgment | Required for equivalent declaration-set approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied; Human Governance judgment for equivalence. |

### STD011-TPC-017 — Required Conformance Validation Coverage

| Field | Value |
|:---|:---|
| STD-011 source section | §18 |
| Conformance subject | Conformance validation report. |
| Required condition | Validation evaluates all fifteen STD-011 §18 coverage areas and uses M.9 result semantics; pass does not approve, certify, promote, migrate, or activate the Target. |
| Required inputs | Validation report; criteria coverage matrix; result records. |
| Evaluation method | Compare validation coverage to all fifteen required areas and inspect authority claims. |
| Success condition | Coverage is complete and result semantics are M.9-aligned. |
| Failure condition | A required coverage area is omitted or alternate result taxonomy is used as authority. |
| Indeterminate/blocker | Coverage cannot be traced to evidence. |
| Required evidence | Coverage matrix and result records. |
| Human Governance judgment | Required only for waivers or separate approval. |
| Automation boundary | Deterministic machine-evaluable. |

### STD011-TPC-018 — Safe-Stop Conditions and Output

| Field | Value |
|:---|:---|
| STD-011 source section | §19 |
| Conformance subject | Target Project or Execution Provider behavior during conformance assessment. |
| Required condition | Any of the fifteen STD-011 §19 safe-stop conditions produces safe-stop output identifying blocker, owning authority, affected artifact role, evidence inspected, and next required human decision or correction; safe-stop output does not mutate Target state unless mutation is explicitly authorized. |
| Required inputs | Assessment record; blocker records; mutation logs if any. |
| Evaluation method | Evaluate each safe-stop trigger and inspect blocker output shape. |
| Success condition | Every triggered blocker is recorded with required fields and no unauthorized mutation occurs. |
| Failure condition | Assessment continues through triggered blocker, mutates without authority, or omits required safe-stop fields. |
| Indeterminate/blocker | Trigger status cannot be determined due to missing evidence. |
| Required evidence | Safe-stop trigger matrix and blocker report. |
| Human Governance judgment | Required to resolve blocker or authorize correction/mutation. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-019 — Extension and Customization Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §20 |
| Conformance subject | Target-specific customizations and extensions. |
| Required condition | Custom names, paths, reports, adapters, commands, evidence formats, and vocabulary preserve logical role identity and authority chain; declare extension identity, namespace, scope, and compatibility; do not redefine M.0-M.9, create new architecture/governance/workflow families, insert Target truth into reusable AI-DOS product truth, or depend on Forge AI defaults for external validity. |
| Required inputs | Extension declarations; customized artifacts; compatibility declaration. |
| Evaluation method | Check each customization against seven STD-011 §20 conditions. |
| Success condition | Customization remains Target-owned and boundary-preserving. |
| Failure condition | Customization redefines product truth or creates prohibited authority. |
| Indeterminate/blocker | Extension identity, namespace, scope, or compatibility is missing. |
| Required evidence | Extension declaration and compatibility evidence. |
| Human Governance judgment | Required for Target approval of custom authority-bearing artifacts. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-020 — Existing Target Migration Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §21 |
| Conformance subject | Migration claims for existing Target Projects. |
| Required condition | Existing Targets are not silently grandfathered; migration requires a separately authorized work unit; migration does not overwrite Mission, DevelopmentPhases, Roadmap, ProjectStatus, declarations, or evidence without explicit Target authority; migration plan distinguishes the seven STD-011 categories. |
| Required inputs | Migration authorization; migration plan; Target authority records. |
| Evaluation method | Verify authorization, no silent grandfathering, no unauthorized overwrite, and category distinction. |
| Success condition | Migration is separate, authorized, evidence-preserving, and bounded. |
| Failure condition | Assessment claims current conformance through grandfathering or performs migration/overwrite by implication. |
| Indeterminate/blocker | Migration authority is absent or ambiguous. |
| Required evidence | Authorization record; migration plan; preservation evidence. |
| Human Governance judgment | Required for migration authorization and overwrites. |
| Automation boundary | Machine-evaluable after authoritative input is supplied. |

### STD011-TPC-021 — Non-Goals and Product/Target Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §23 |
| Conformance subject | Assessment scope and report. |
| Required condition | Assessment does not perform the STD-011 §23 non-goals, including encoding Forge AI-specific operational truth as reusable product truth, deriving reusable standards from current Target planning, or aligning or migrating an existing Target Project. |
| Required inputs | Assessment report; changed-file list; claims. |
| Evaluation method | Inspect scope, claims, and repository diff against every §23 non-goal. |
| Success condition | No §23-prohibited claim, authority expansion, implementation, alignment, or migration is included. |
| Failure condition | Assessment performs or claims any §23-prohibited action. |
| Indeterminate/blocker | Scope evidence is incomplete. |
| Required evidence | Changed-file list; scope statement; claim review. |
| Human Governance judgment | Required for any separately authorized future Target assessment or migration. |
| Automation boundary | Deterministic machine-evaluable for changed files and claim text. |

STD-011 §22 may be consulted as informative Forge AI migration context only. It is non-normative and is not a mandatory source for this criterion.

### STD011-TPC-022 — STD-011 Draft Promotion Boundary

| Field | Value |
|:---|:---|
| STD-011 source section | §24 |
| Conformance subject | STD-011 promotion or approval claims. |
| Required condition | STD-011 is not promoted, approved, canonicalized, certified, or operationalized unless all seven promotion requirements and nine pre-approval review checks have recorded evidence and explicit Human Governance approval. |
| Required inputs | Promotion claims; review evidence; approval records. |
| Evaluation method | Check promotion claim against required evidence and approval. |
| Success condition | No false promotion claim exists, or every required promotion input is satisfied. |
| Failure condition | Promotion/canonical/operational claim is made without complete evidence and approval. |
| Indeterminate/blocker | Promotion evidence completeness cannot be resolved. |
| Required evidence | Promotion evidence matrix and Human Governance decision reference. |
| Human Governance judgment | Required for promotion approval. |
| Automation boundary | Machine-evaluable after authoritative input is supplied; Human Governance judgment for approval. |

## 8. Artifact-Role Criteria Summary

| Logical Role | Presence | Identity/Cardinality | Authorship and Ownership | Lifecycle/Authority Conditions | Failure or Blocker Conditions |
|:---|:---|:---|:---|:---|:---|
| Mission | Mandatory or approved equivalent | Exactly one stable logical identity | Human-authored or Human-Governance-approved | Owns purpose, scope, constraints, protected principles, approval authority | Missing, duplicate, generated from prohibited sources, stale, ambiguous, conflicting, or unapproved when approval required |
| DevelopmentPhases | Mandatory or approved generation-grade equivalent | Exactly one stable logical identity | Human-approved or Human-authorized capability decomposition | Derived from Mission and Human decisions; supports mechanical Roadmap derivation | Missing, duplicate, non-generation-grade, operational-state-derived, ambiguous, conflicting, stale |
| Roadmap | Mandatory | Exactly one current accepted identity or one draft/regeneration subject under review | AI-DOS-derived or Human-accepted Target planning projection | Deterministically derived, then accepted; supplies direction but not operational state | Missing, duplicate, not traceable, accepted without approval, silently regenerated, conflicting, stale |
| ProjectStatus | Mandatory or approved equivalent operational-state record | Exactly one current operational-state identity | AI-DOS-maintained, Target-owned operational truth | Projected from accepted Roadmap and evidence; transitions atomic and authorized | Missing, duplicate, invents objectives, redefines upstream truth, stale/drifted subject, conflicting next action |
| Target Declaration Profile | Mandatory or approved equivalent | Exactly one declaration-set identity or locator | Target-authored declaration input | Consumed by TargetRepositoryResolution; equivalent requires Target approval | Missing, provider/resolver self-approved equivalence, resolver blocker, omitted inputs, ambiguous locator |
| Evidence Records | Mandatory sufficient set | Stable evidence identities | Evidence owner/provenance explicit | Support validation, review, acceptance, transition claims | Missing, stale, insufficient, unbound to claim, fabricated, conflicting |
| Execution Outputs | Conditional when retained | Stable output identities when retained | Generated output; not authority until accepted | Evidence or deliverable only | Treated as current authority without acceptance |
| Auxiliary/Provider/Historical/Future-looking Artifacts | Optional | Not role-bearing unless explicitly declared | Target-owned or provider-specific as declared | Cannot supersede mandatory roles by implication | Used as canonical Target authority without Target approval |

## 9. Cross-Artifact Criteria Summary

Assessment must verify the relationships below without changing STD-011 cardinalities:

1. Mission projects to DevelopmentPhases only through Human-authored or Human-approved source decisions.
2. DevelopmentPhases derives Roadmap through deterministic derivation, preserving identity, dependency order, required evidence meanings, non-goals, protected future capabilities, and governance gates.
3. Human Governance acceptance follows deterministic Roadmap derivation and does not act as arbitrary transformation input.
4. Roadmap projects to ProjectStatus as current operational-state constraints; it does not become operational state by itself.
5. ProjectStatus records only upstream-constrained operational facts, evidence statuses, blockers, active work-unit identity, and authorized next action.
6. ProjectStatus must not invent objectives, create Roadmap evidence identifiers, fall through blockers, or treat repository activity as accepted evidence.
7. Regeneration is triggered only by STD-011-authorized changes and preserves accepted identifiers unless approved supersession, replacement, or migration exists.
8. Invalidation occurs on upstream revision changes, declaration-set changes, evidence-corpus changes, subject identity drift, ambiguous role identity, authority conflict, or unresolved resolver blocker.
9. Deterministic derivation evidence and Human Governance acceptance evidence are separate records.

## 10. Target Declaration Profile Consumption Boundary

Conformance assessment consumes Target-authored declaration inputs and resolver-produced outcomes as evidence. It does not own resolver behavior. It may use TargetRepositoryResolution and Target Declaration Profile material only downstream or for compatibility checks.

A valid equivalent declaration set requires Target Human Governance or explicitly delegated Target approval authority. A provider, resolver, validator, or conformance assessor cannot self-approve equivalence. This draft grants no equivalence and does not approve any Target declaration set.

Resolver blockers remain safe-stop conditions. They are not converted into non-conformance unless the assessed claim asserts conformance despite the unresolved blocker.

## 11. Derivation Blockers and Known Gaps

This first draft can coherently profile STD-011, but records these unsatisfied or review-required gaps without repairing upstream authority:

| Gap ID | Source | Condition | Profile Handling |
|:---|:---|:---|:---|
| GAP-001 | M.9 / safe-stop authorities | M.9 has Pass, Fail, Warning, and Waived Finding result types, while AI-DOS safe-stop semantics are blocker behavior rather than a fifth M.9 result. | Record safe-stop as a separate blocked-evaluation disposition; do not complete the affected assertion or assign an M.9 result, and do not make an aggregate conformance claim while a required evaluation remains blocked. |
| GAP-002 | Severity taxonomy | Existing authorities provide M.9 results and review severities `INFO`, `WARNING`, `BLOCKER`; no universal failure/blocker/warning/observation/safe-stop taxonomy is canonically defined for this profile. | Do not invent severity. Use supported terms only and record unmapped requests as unsupported. |
| GAP-003 | Target Declaration Profile equivalence approval | STD-011 requires Target approval for equivalent declaration sets but no universal approval-record schema is defined in STD-011. | Require a Human Governance or delegated Target approval reference; safe-stop when absent or ambiguous. |
| GAP-004 | Deterministic semantic conflict detection | STD-011 requires lower artifacts not to contradict higher artifacts, but full semantic contradiction detection can require governed interpretation. | Machine-check explicit identifiers and traces; route semantic conflict resolution to Human Governance when deterministic rules are insufficient. |

## 12. Promotion and Lifecycle Boundary

This profile is draft, non-canonical, unapproved, uncertified, and non-operational. Creating, merging, citing, or validating this draft does not imply STD-011 conformance, Target approval, certification, promotion, migration readiness, operational activation, Forge AI assessment permission, or permission to mutate any Target artifact.

Promotion remains blocked until every metadata Promotion Requirements item in Section 1 is satisfied with recorded evidence and explicit Human Governance approval. None of those requirements are declared satisfied by this draft.

## 13. Version History

| Version | Date | Description |
|:---|:---|:---|
| `0.1.0-draft` | 2026-07-23 | Initial provider-neutral draft conformance profile foundation for STD-011 Target Project Standard. |
| `0.1.1-draft` | 2026-07-23 | Corrected M.9 result and aggregation semantics, separated safe-stop dispositions from results, scoped M.5 evidence obligations, and removed non-normative §22 from mandatory criterion sourcing. |

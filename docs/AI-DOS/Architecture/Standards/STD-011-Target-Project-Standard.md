# STD-011 — Target Project Standard

> AI-DOS v3 · Target Project foundation · Draft / Non-canonical

---

## 1. Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-STD-011` |
| Title | STD-011 — Target Project Standard |
| Version | `0.1.3-draft` |
| Status | Draft |
| Canonical Status | Non-canonical draft; not approved, accepted, certified, promoted, or operational |
| Classification | Target Project Architecture Standard |
| Document Type | Framework Standard |
| Artifact Family | Standard Artifact |
| Artifact Type | Target Project Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Normative Authority | Human Governance; `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/FrameworkGovernance.md`; applicable Meta Models and Standards within their declared domains |
| Created | 2026-07-23 |
| Last Updated | 2026-07-23 |
| Lifecycle State | Draft |
| Traceability ID | `AI-DOS-STD-011` |
| Scope | Reusable Target Project authority, artifact-role, derivation, initialization, operational-state, validation, safe-stop, extension, and migration foundation for Target Projects that choose to conform to this standard. |
| Out of Scope | Implementing templates, schemas, validators, commands, runtime code, provider behavior, ProjectStatus mutation, Roadmap mutation, DevelopmentPhases mutation, Mission mutation, Forge AI migration, certification, canonical promotion, or approval of any Target Project. |
| Normative References | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/FrameworkGovernance.md`; `docs/AI-DOS/Architecture/Standards/STD-000-Framework-Standards.md`; `docs/AI-DOS/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI-DOS/Meta/README.md`; `docs/AI-DOS/Meta/M.0-Framework-Meta-Model.md`; `docs/AI-DOS/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI-DOS/Meta/M.2-Identity-Meta-Model.md`; `docs/AI-DOS/Meta/M.3-Relationships-Meta-Model.md`; `docs/AI-DOS/Meta/M.4-Lifecycle-Meta-Model.md`; `docs/AI-DOS/Meta/M.5-Evidence-Meta-Model.md`; `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`; `docs/AI-DOS/Meta/M.7-Compatibility-Meta-Model.md`; `docs/AI-DOS/Meta/M.8-Extension-Meta-Model.md`; `docs/AI-DOS/Meta/M.9-Schema-Validation-Meta-Model.md` |
| Informative References | `docs/AI-DOS/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md`; `docs/AI-DOS/System/TargetRepositoryResolution.md` |
| Required Meta Authorities | `AI-DOS-META-M.0`; `AI-DOS-META-001`; `AI-DOS-META-M.2`; `AI-DOS-META-M.3`; `AI-DOS-META-M.4`; `AI-DOS-META-M.5`; `AI-DOS-META-M.6`; `AI-DOS-META-M.7`; `AI-DOS-META-M.8`; `AI-DOS-META-M.9` |
| Required Standard Dependencies | `AI-DOS-STD-000`; `AI-DOS-STD-010` |
| Consumes | Required Meta Authorities for semantic meaning; Required Standard Dependencies for Standards governance and metadata field rules. |
| Produces | Draft Target Project conformance model, artifact-role model, authority and derivation chain, initialization output contract, operational-state constraints, validation rules, safe-stop rules, and extension boundaries. |
| Depends On | Human Governance; A.1 Constitution; Framework Governance; Required Meta Authorities; Required Standard Dependencies. |
| Supersedes | None |
| Superseded By | None |
| Validation Profile | STD-011 draft conformance review; STD-010 metadata conformance; STD-000 Standards-family conformance; product/Target boundary validation |
| Compatibility Declaration | Additive draft standard; preserves compatibility intent with the A.2 product/Target boundary and downstream TargetRepositoryResolution without declaring either artifact modified, superseded, certified, or conformant. No existing Target Project is declared conformant or non-conformant by this draft alone. |
| Certification Status | Not certified |
| Promotion Requirements | Successful conformance review against STD-000 and applicable STD-010 requirements; M.0-M.9 consistency review; AI-DOS Product / Target Project truth-boundary review; normative authority-direction review; deterministic derivation and safe-stop review; internal reference and terminology consistency review; recorded review evidence; explicit Human Governance approval for promotion |

---

## 2. Purpose and Conformance Scope

STD-011 defines a reusable Target Project foundation for AI-DOS. A conforming Target Project is an independent authority domain that consumes AI-DOS while retaining ownership of its own mission, planning, operational state, source, validation requirements, protected areas, and Human Governance decisions.

This standard governs how a Target Project declares stable artifact roles, derives planning truth, initializes operational state, validates conformance, and safe-stops when required authority or evidence is missing. It does not require every Target Project to use identical file paths, identical project vocabulary, a fixed implementation language, or a copied planning history.

Conformance to this draft can be claimed only as a draft validation claim with explicit evidence. It cannot be used to declare a Target approved, accepted, certified, migrated, or operationally ready.

## 3. Meta Model Consumption

STD-011 consumes and applies existing M.0-M.9 semantics within its Target Project standard domain. It does not formally specialize M.0-M.9, create M.10, or create any additional Meta Model.

| Meta Authority | STD-011 Consumption |
|:---|:---|
| M.0 | Consumes Artifact, Authority, Ownership, Boundary, Constraint, Objective, Capability, Evidence, Validation, State, Lifecycle, Extension, and Relationship root meanings. |
| M.1 | Applies artifact family, artifact type, artifact instance, representation, discovery, and consumption semantics to Target Project artifact roles without redefining artifact semantics. |
| M.2 | Requires stable Target artifact identities independent of physical paths. |
| M.3 | Requires explicit authority, derivation, dependency, consumption, production, evidence, and validation relationships. |
| M.4 | Requires explicit lifecycle and operational state; state must not be inferred from conversation, branch, file proximity, or repository activity. |
| M.5 | Requires evidence-bound validation, review, transition, and conformance claims. |
| M.6 | Requires version and revision identity for governed Target artifacts and preserves historical identity across moves or renames. |
| M.7 | Requires compatibility and migration classification when Target artifact roles, derivation rules, or authority chains change. |
| M.8 | Allows Target-specific extensions only as bounded specializations that do not redefine AI-DOS product truth. |
| M.9 | Requires validation profiles, conformance results, coverage, blockers, warnings, and waivers to use existing validation-result semantics. |

## 4. Target Project Artifact Roles and Stable Identities

A Target Project artifact role is a logical role with a stable identity. A physical file path may realize that role, but the path is not the identity.

A conforming Target Project SHALL declare these logical roles when the role is present:

| Logical Role | Stable Identity Requirement | Authority Role |
|:---|:---|:---|
| Target Project Standard | Identifies the standard profile this Target claims to follow. | Reusable AI-DOS product standard consumed by the Target. |
| Mission | Stable Target-owned artifact identity. | Human-authored or Human-Governance-approved source of purpose, scope, constraints, and strategic intent. |
| DevelopmentPhases | Stable Target-owned artifact identity. | Human-approved or Human-authorized capability decomposition sufficient for deterministic Roadmap derivation. |
| Roadmap | Stable Target-owned artifact identity. | AI-DOS-derived or Human-accepted operational planning projection from DevelopmentPhases. |
| ProjectStatus | Stable Target-owned artifact identity. | AI-DOS-maintained, Target-owned operational truth constrained by Roadmap and Human Governance. |
| Target Declaration Profile | Stable declaration-set identity or locator. | Target-owned declaration input consumed by TargetRepositoryResolution. |
| Evidence Records | Stable evidence identities. | Verifiable support for validation, review, acceptance, and transition claims. |
| Execution Outputs | Stable output identities when retained. | Generated output from bounded execution; not authority unless separately accepted. |

A Target MAY use alternate names for these roles only if the declaration unambiguously maps each name to the logical role and stable identity. A missing or conflicting role mapping is a safe-stop for conformance validation.

## 5. Authorship and Ownership Classifications

Target artifacts SHALL be classified by authorship, maintenance authority, and operational role.

| Classification | Meaning | Authority Boundary |
|:---|:---|:---|
| Human-authored and Human-Governance-approved | Authored or explicitly accepted by the Target's Human Governance. | Highest Target-side authority for Target purpose, strategic constraints, approval decisions, and protected boundaries. |
| AI-DOS-derived | Produced deterministically by applying AI-DOS rules to authorized Target sources. | Must trace to inputs and derivation rules; cannot add objectives outside source authority. |
| AI-DOS-maintained, Target-owned operational truth | Maintained by AI-DOS processes only under explicit Target authority and governed transition rules. | Target owns the operational truth; AI-DOS maintenance does not transfer authority or ownership and cannot redefine upstream Mission, DevelopmentPhases, or Roadmap truth. |
| Generated execution output | Produced during bounded task execution. | Evidence or deliverable only; not normative unless accepted by the owning authority. |
| Auxiliary artifact | Explanatory, local, supporting, provider-specific, adapter-specific, or convenience material. | Must not supersede or silently reinterpret mandatory artifact roles. |
| Historical artifact | Preserved for traceability after supersession, migration, or archival. | Cannot be used as current authority unless explicitly reactivated. |
| Future-looking artifact | Vision, candidate, proposal, backlog, or speculative plan. | Cannot authorize current execution or state transition. |
| Provider-specific artifact | Tool, adapter, host, or runtime-specific representation. | Cannot become reusable Target truth unless promoted by Target governance and compatible with AI-DOS boundaries. |

## 6. Mandatory, Optional, Generated, and Auxiliary Artifacts

A conforming Target Project SHALL provide the mandatory artifact roles below, or explicitly declare an equivalent role mapping approved by the Target's Human Governance or explicitly delegated Target approval authority. Equivalence applies only to satisfaction of the mandatory logical role requirements in this section; a provider or resolver cannot self-approve equivalence, and this draft grants no equivalence approval.

1. Mission.
2. DevelopmentPhases or equivalent generation-grade capability decomposition.
3. Roadmap derived or accepted under this standard.
4. ProjectStatus or equivalent operational-state record.
5. Target Declaration Profile consumable by TargetRepositoryResolution.
6. Evidence records sufficient to support validation, review, acceptance, and state transitions.

Optional artifacts MAY include architecture decisions, design documents, reports, risk registers, compatibility matrices, migration plans, templates, local instructions, and provider adapters.

Generated artifacts MAY include Roadmap drafts, task candidates, execution plans, validation reports, review findings, and evidence indexes. Generated artifacts are not authoritative until the owning authority accepts them.

Auxiliary artifacts MAY improve usability, but they MUST NOT be required to resolve canonical Target authority unless they are explicitly declared as role-bearing artifacts.

## 7. Normative Authority and Derivation Chain

The reusable Target Project authority chain is:

```text
Target Project Standard
    ↓
Mission
    ↓
DevelopmentPhases
    ↓ deterministic derivation
Roadmap
    ↓ governed operational projection
ProjectStatus
    ↓
bounded task generation, selection, activation, execution, evidence, review, and state transition
```

Rules:

1. The Target Project Standard constrains how the Target organizes and validates its Target-owned truth.
2. Mission owns the Target's purpose, scope, non-goals, strategic constraints, governance intent, and protected purpose boundaries.
3. DevelopmentPhases owns capability decomposition and maturity progression consistent with Mission.
4. Roadmap content is derived from DevelopmentPhases through deterministic rules; governance decisions accept or reject the derived result rather than acting as arbitrary transformation inputs.
5. ProjectStatus is AI-DOS-maintained, Target-owned operational truth projected from accepted Roadmap truth and current evidence.
6. Bounded tasks are generated, selected, activated, executed, evidenced, reviewed, and transitioned only from the ProjectStatus/Roadmap boundary and explicit Human Governance authority.
7. Lower artifacts MUST NOT redefine, broaden, or contradict higher artifacts.
8. Repository activity, provider memory, branch state, pull request state, implementation proximity, or convenience MUST NOT replace this chain.

## 8. Mission Source-Authority Boundary

Mission SHALL be Human-authored or Human-Governance-approved. It SHALL define purpose, Target identity, scope, out-of-scope boundaries, strategic constraints, protected principles, approval authority, and permitted customization boundary.

Mission SHALL NOT be generated from current ProjectStatus, repository contents, provider defaults, existing Roadmap tasks, or implementation-language conventions. AI-DOS MAY help draft Mission text only when Human Governance explicitly authorizes drafting, and the result remains non-authoritative until accepted.

## 9. DevelopmentPhases Source-Authority Boundary

DevelopmentPhases SHALL be derived from Mission and explicit Human Governance source decisions, not from current operational state. It SHALL define capability maturity in a way that downstream Roadmap derivation can apply mechanically.

DevelopmentPhases SHALL NOT copy ProjectStatus values into strategic truth, backfill phases from completed tasks without governance approval, or declare current execution authorization. It may include dependencies, gates, required evidence, risks, non-goals, and compatibility constraints when those values trace to Mission or Human Governance.

## 10. Generation-Grade DevelopmentPhases Requirements

DevelopmentPhases is generation-grade only when it supplies enough structured content for deterministic Roadmap derivation without AI judgment. At minimum, each capability unit SHALL declare:

1. stable capability identity;
2. purpose and capability gain;
3. dependencies and predecessor constraints;
4. reusable outcome;
5. required evidence identifiers and acceptance criteria;
6. governance gate and approval authority;
7. success criteria and exit criteria;
8. non-goals and protected future capabilities;
9. validation expectations;
10. compatibility and migration considerations when applicable;
11. ordering or priority rules sufficient to resolve ties; and
12. safe-stop conditions for missing, conflicting, or ambiguous capability data.

If these fields are absent, ambiguous, or internally conflicting, Roadmap derivation SHALL safe-stop rather than infer missing capability design.

## 11. Deterministic DevelopmentPhases-to-Roadmap Derivation Rules

A conforming Roadmap derivation SHALL be deterministic:

1. Select only DevelopmentPhases capability units that are in scope for the requested Roadmap projection.
2. Preserve each selected capability identity and source trace.
3. Preserve declared dependency order before priority ranking.
4. Convert required evidence identifiers into Roadmap evidence items without changing their meaning.
5. Preserve non-goals, protected future capabilities, and governance gates as Roadmap boundaries.
6. Derive streams, milestones, or equivalent planning groupings only from declared capability relationships or approved grouping rules.
7. Apply declared ordering and tie-break rules exactly; if no unique order can be produced, safe-stop.
8. Emit a derivation evidence record identifying source revision, rule set, selected units, exclusions, warnings, and blockers.
9. Never derive Roadmap truth from ProjectStatus, repository activity, provider preferences, or the current backlog.

## 12. Roadmap Acceptance and Regeneration Boundaries

A generated Roadmap draft becomes authoritative operational Target planning truth only after deterministic derivation completes and the Target's approval authority accepts it. Governance acceptance follows derivation; it does not supply arbitrary transformation input during derivation.

Roadmap regeneration MAY occur when Mission, DevelopmentPhases, accepted evidence, compatibility rules, or explicit Human Governance source decisions change. Regeneration MUST preserve stable accepted identifiers unless Human Governance explicitly approves supersession, replacement, or migration. Regeneration MUST NOT silently erase blocked items, reclassify accepted evidence, or reorder accepted priorities without evidence and authority.

A Roadmap SHALL NOT become operational state by itself. It supplies capability direction, dependency order, required evidence, and governance gates for ProjectStatus projection.

## 13. ProjectStatus Initialization and Governed Transition Rules

ProjectStatus initialization SHALL consume the accepted Roadmap and current accepted evidence. Initialization SHALL produce an explicit operational-state record containing:

1. Target identity and role mappings;
2. active capability or explicit non-executable hold;
3. current Roadmap projection and controlling objective;
4. current evidence status by stable identifier;
5. protected areas and mutation boundaries or references to them;
6. validation requirements or references to the Target Declaration Profile;
7. exactly one active work unit or exactly one authorized next action;
8. blockers and risks;
9. state-transition authority; and
10. last-update evidence.

ProjectStatus transitions SHALL be governed, evidence-backed, and atomic with respect to the resolved subject. A transition SHALL occur only when Human Governance explicitly authorizes it or when an approved Target policy and AI-DOS workflow produce one uniquely valid transition. Conflicting, missing, duplicate, stale, or drifted subject identity requires safe-stop.

## 14. Prohibition on ProjectStatus Inventing Truth

ProjectStatus MUST NOT invent objectives, redefine Mission, rewrite DevelopmentPhases, reorder Roadmap truth, create new Roadmap evidence identifiers, fall through blocked objectives, select convenience work, or treat repository activity as accepted evidence.

ProjectStatus may record operational facts, evidence statuses, blockers, active work-unit identity, and authorized next action only within the upstream Roadmap and Human Governance boundary. If Roadmap truth is absent, conflicting, or insufficient, ProjectStatus SHALL hold or safe-stop rather than synthesize a new objective.

## 15. Declarative Initialization Output Contract

A future command conceptually equivalent to `ai-dos init project` SHALL be declarative in this standard. This section does not implement that command.

The conceptual initialization output SHALL include:

| Output Role | Required Content |
|:---|:---|
| Target role map | Logical roles, stable identities, physical locators when known, and unresolved required roles. |
| Declaration profile result | TargetRepositoryResolution category outcomes, blockers, and evidence. |
| Mission readiness result | Present, Human-approved or draft status, scope, authority, blockers. |
| DevelopmentPhases readiness result | Generation-grade field coverage, source trace, blockers, warnings. |
| Roadmap derivation result | Derived draft, accepted Roadmap reference, regeneration requirement, or safe-stop. |
| ProjectStatus initialization result | Initial state proposal or blocker; never an implicit state mutation unless separately authorized. |
| Validation result | Conformance checks, evidence coverage, warnings, blockers, waivers. |
| Safe-stop result | Exact blocker category, authority, affected role, required human action, and no-mutation confirmation. |

The output SHALL be evidence, proposal, or blocker data. It SHALL NOT approve, certify, migrate, overwrite, or mutate Target artifacts by implication.

## 16. Logical Roles and Default Physical Paths

Logical artifact roles are normative. Default physical paths are implementation and onboarding conveniences.

A standard distribution MAY suggest default paths for new Target initialization, but a Target's canonical identity SHALL be resolved from metadata and declarations. File moves, renames, alternate directory layouts, or non-Markdown auxiliary implementations SHALL NOT change logical identity when stable metadata and declarations remain coherent.

Conformance validators SHALL test role identity and relationship coherence before testing path conventions. A path convention failure MAY be a warning when logical role resolution succeeds and the Target declares an allowed alternate locator.

## 17. Target Declaration Profile Integration

A conforming Target Project SHALL expose a Target Declaration Profile or an equivalent declaration set consumable by TargetRepositoryResolution. An equivalent declaration set SHALL satisfy the normative declaration-input and resolution-compatibility requirements in this section and SHALL be approved by the Target's Human Governance or an explicitly delegated Target approval authority. A provider or resolver MUST NOT self-approve this equivalence. Neither STD-011 nor this draft grants any current declaration-set equivalence approval.

The Target-authored declaration set SHALL provide declaration inputs for at least:

1. Target resources;
2. source scope;
3. protected areas;
4. validation requirements; and
5. permissions and execution authority.

The Target-authored declaration set does not resolve or own resolver-owned safe-stop behavior. The resolver evaluates the Target-authored declarations and produces the safe-stop behavior and resolution outcome. STD-011 does not create a new Target-authored declaration category for safe-stop behavior.

STD-011 does not replace the deterministic Markdown-compatible profile currently owned downstream by TargetRepositoryResolution. It requires Target Project standards conformance to remain compatible with that System Layer resolution contract and to treat resolver-produced blockers as safe stops for initialization, execution, and mutation.

## 18. Conformance Validation Rules

A Target Project conformance validation SHALL evaluate:

1. STD-010 metadata presence and field consistency for governed Target artifacts;
2. stable identity independent of file path;
3. mandatory logical role resolution;
4. authorship and ownership classification;
5. Mission source authority;
6. DevelopmentPhases generation-grade sufficiency;
7. deterministic DevelopmentPhases-to-Roadmap derivation evidence;
8. Roadmap acceptance or draft status boundary;
9. ProjectStatus initialization and transition constraints;
10. Target Declaration Profile input compatibility and resolver-produced outcome handling;
11. product/Target boundary preservation;
12. absence of invented Meta types, layers, workflow families, or authority models;
13. absence of provider-specific defaults as reusable Target truth;
14. extension and customization boundary compliance; and
15. safe-stop completeness.

Validation results SHALL use M.9 result semantics. A validation pass does not approve, certify, promote, migrate, or activate the Target unless the owning governance authority separately records that decision.

## 19. Safe-Stop Conditions

A conforming Target Project or Execution Provider SHALL safe-stop when any of these conditions occurs:

1. STD-011 identity or identifier conflicts with an existing canonical Standard.
2. Mandatory logical artifact role is missing, inaccessible, empty, ambiguous, or conflicting.
3. Stable artifact identity cannot be resolved independently of path.
4. Mission is missing, not Human-approved when approval is required, or internally conflicts with requested work.
5. DevelopmentPhases is not generation-grade for the requested derivation.
6. Roadmap cannot be deterministically derived, accepted, or regenerated under declared rules.
7. ProjectStatus attempts to invent objectives or redefine Roadmap truth.
8. Current operational subject identity is missing, duplicate, stale, drifted, or conflicting.
9. Target Declaration Profile evaluation by the resolver returns any blocker.
10. Protected area, validation requirement, source scope, or execution authority cannot be determined.
11. Product truth and Target truth cannot be distinguished.
12. A provider-specific artifact is treated as Target authority without Target approval.
13. Existing Target Project migration would require silent grandfathering, overwriting, normalization, or state mutation.
14. Conformance would require creating a new Meta Model, architecture layer, governance model, or workflow family.
15. Required evidence, review, approval, or Human Governance decision is absent.

Safe-stop output SHALL identify the blocker, owning authority, affected artifact role, evidence inspected, and the next required human decision or correction. Safe-stop output SHALL NOT mutate Target state unless the mutation itself is explicitly authorized.

## 20. Extension and Target-Specific Customization Boundaries

A Target Project MAY customize artifact names, physical paths, auxiliary reports, provider adapters, validation commands, evidence formats, and planning vocabulary when the customization:

1. preserves logical role identity;
2. preserves the authority chain in Section 7;
3. declares extension identity, namespace, scope, and compatibility;
4. does not redefine M.0-M.9 semantics;
5. does not create a new architecture layer, governance model, or workflow family;
6. does not insert Target-specific truth into reusable AI-DOS product truth; and
7. remains independently valid for external Targets rather than relying on Forge AI defaults.

Target-specific extensions remain Target-owned. They do not become AI-DOS product truth unless separately governed as AI-DOS product work.

## 21. Migration Considerations for Existing Target Projects

Existing Target Projects SHALL NOT be silently grandfathered into conformance. Migration requires a separately authorized work unit that reads the existing Target artifacts as migration subjects, maps logical roles, records compatibility findings, identifies blockers, proposes changes, validates conformance, and preserves historical identity.

Migration SHALL NOT overwrite Mission, DevelopmentPhases, Roadmap, ProjectStatus, declarations, or evidence without explicit Target authority. A migration plan SHALL distinguish between:

- role mapping with no content change;
- metadata normalization;
- deterministic derivation repair;
- state initialization or transition;
- evidence preservation;
- auxiliary artifact reclassification; and
- provider-specific adapter cleanup.

A migration validation may conclude that a Target is not yet conformant. That conclusion is evidence, not failure of the Target's existing authority.

## 22. Non-Normative Forge AI Migration Note

This section is non-normative.

Forge AI is expected to be evaluated later as a future conformance and validation target because it is an existing Product Development Target Project that currently contains Mission, DevelopmentPhases, Roadmap, ProjectStatus, evidence, reports, and provider-adapter material. This draft does not assert that Forge AI already conforms, does not migrate Forge AI, does not modify Forge AI operational state, and does not use Forge AI planning artifacts as the design baseline for reusable AI-DOS Product truth.

## 23. Non-Goals

STD-011 does not:

- approve, accept, certify, promote, or operationalize this draft;
- implement templates, schemas, validators, commands, runtime code, or provider behavior;
- create M.10 or any Meta Model;
- create a new architecture layer, governance model, or workflow family;
- encode Forge AI-specific operational truth as reusable product truth;
- derive reusable standards from any current Target Roadmap or ProjectStatus;
- require physical paths to be canonical identities;
- update Standard indexes, Template indexes, RFCs, Meta Models, or System Layer documents;
- align or migrate any existing Target Project.

## 24. Promotion Requirements and Draft Validation Expectations

STD-011 SHALL NOT be promoted, approved, canonicalized, certified, or operationalized until all of the following concrete promotion requirements have recorded evidence:

1. Successful conformance review against STD-000 Standards-family requirements and applicable STD-010 metadata requirements.
2. Consistency review against M.0-M.9 with no invented Meta types or semantic redefinitions.
3. Product/Target boundary review confirming preservation of AI-DOS Product truth and Target Project truth separation.
4. Normative authority-direction review confirming Human Governance → A.1 Constitution → Framework Governance / applicable approved Meta Models and Standards → A.2 boundary → System Layer direction and no circular dependency on A.2 or TargetRepositoryResolution.
5. Deterministic derivation and safe-stop review covering Mission, DevelopmentPhases, Roadmap, ProjectStatus, Target Declaration Profile input compatibility, and resolver-produced outcomes.
6. Internal heading, terminology, and reference consistency review.
7. Recorded review evidence and explicit Human Governance approval for promotion.

These requirements are not declared satisfied by this draft.

Before any approval or promotion consideration, STD-011 SHALL also be reviewed for:

1. STD-000 Standards-family structure and normative language compliance;
2. STD-010 metadata completeness;
3. correct M.0-M.9 consumption without invented Meta semantics;
4. compatibility with A.2 product/Target separation without making A.2 an upstream authority over this standard;
5. deterministic derivation completeness;
6. safe-stop completeness, including Target-authored declaration inputs versus resolver-owned safe-stop outcomes;
7. extension-boundary correctness;
8. migration-boundary correctness; and
9. absence of Target-specific operational truth encoded as reusable AI-DOS truth.

## 25. Version History

| Version | Date | Description |
|:---|:---|:---|
| `0.1.0-draft` | 2026-07-23 | Initial standalone draft Target Project Standard foundation. |
| `0.1.1-draft` | 2026-07-23 | Corrected authority-direction metadata and body text; added concrete promotion requirements; clarified ProjectStatus maintenance/ownership, resolver-owned safe-stop outcomes, and deterministic Roadmap derivation followed by governance acceptance. |
| `0.1.2-draft` | 2026-07-23 | Corrected domain-scoped Normative Authority metadata; added Required Meta Authorities and Required Standard Dependencies; resolved specialization wording as consumption/application rather than a formal SPECIALIZES relationship; clarified Target approval authority for equivalent mandatory artifact role mappings. |
| `0.1.3-draft` | 2026-07-23 | Clarified declaration-set equivalence criteria and Target approval authority in Section 17; aligned the Section 24 promotion-review authority chain with A.2 Section 5 by including Framework Governance and applicable approved Meta Models and Standards. |

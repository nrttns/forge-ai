# STEP 1–6 AI-DOS Product Versioning Architecture Research Baseline

> Non-normative AI-DOS Product discovery evidence · Architecture Discovery

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS-DISCOVERY-VERSIONING-RESEARCH-BASELINE` |
| Title | STEP 1–6 AI-DOS Product Versioning Architecture Research Baseline |
| Version | 1.0.0 (document-administrative version only; does not encode or imply any AI-DOS Product version-signaling decision) |
| Status | Accepted research evidence |
| Canonical Status | Non-canonical. Non-normative AI-DOS Product discovery material. Not a Meta-Model, Standard, RFC, or approved architecture. |
| Classification | Architecture Discovery — Research Baseline |
| Document Type | Research Baseline (Discovery Evidence) |
| Owner | Human Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-23 |
| Last Updated | 2026-07-23 |
| Traceability ID | `AI-DOS-DISCOVERY-VERSIONING-RESEARCH-BASELINE` |
| Scope | Consolidates the accepted STEP 1–6 standalone AI-DOS Product Versioning Architecture Research Program corpus, including every accepted correction and errata pass, into one traceable baseline document. |
| Out of Scope | Amending, superseding, replacing, or reinterpreting any existing Meta-Model (M.0–M.9); authoring or approving a Standard or RFC; numbering, bump-rule, or version-signaling decisions; reconciliation of detected overlaps with existing Meta-Models; implementation, validation, packaging, or release engineering. |
| Normative Authority | None. This document has no normative authority. It records accepted research conclusions as evidence for later, separately authorized reconciliation and architectural synthesis. |
| Relationship to Meta Family | Overlaps in subject matter with `M.4-Lifecycle-Meta-Model.md`, `M.5-Evidence-Meta-Model.md`, `M.6-Versioning-Meta-Model.md`, and `M.7-Compatibility-Meta-Model.md`. Does not amend, supersede, replace, reinterpret, or override any of them. See §3 for the full relationship record. |
| Supersedes | None |
| Superseded By | None |

---

## 0. How to Read This Document

This document is **evidence**, not authority. It records what a bounded, standalone AI-DOS Product research program (STEP 1 through STEP 6) concluded, corrected, and left open — nothing more. Three things follow from that:

1. **Acceptance of STEP 1–6, recorded here, means Human Governance accepted the research corpus as a stable input for later reconciliation and architectural synthesis.** It does not make any conclusion in this document canonical Meta-Model truth, and it does not amend, supersede, replace, reinterpret, or override `M.4`, `M.5`, `M.6`, `M.7`, or any other existing Meta-Model.
2. **Where this research differs from an existing Meta-Model, both positions are preserved side by side as unreconciled** (§3). No difference is resolved in this document. No research conclusion is silently normalized into `M.6`'s existing MAJOR/MINOR/PATCH assumption or any other existing version-signaling policy.
3. **Existing Meta-Model content is never attributed to STEP 1–6 as an accepted conclusion unless STEP 1–6 independently reached that same conclusion on its own.** The research corpus was produced, at Human Governance's explicit direction throughout, from first principles — without treating current AI-DOS/Forge AI versioning conventions, existing Meta-Model content, SemVer, CalVer, or repository structure as authoritative inputs. That independence is preserved here, not retroactively blended with existing Meta-Model vocabulary.

**Compression note (methodology, stated for transparency):** the research program produced very large stress-test tables (up to 30 numbered cases per step, each assessed across ~9–19 fields) across many correction passes. To keep this baseline a single traceable, machine-processable document rather than a multi-hundred-thousand-word transcript dump, each step's section below presents (a) the **final, fully corrected model** — definitions, classification tables, layer models, and rules, in full — and (b) a **condensed stress-test findings table** naming every case and the principle it established, rather than reproducing every per-field cell of every correction pass. The full per-pass transcripts remain the source of record for this baseline and are referenced by correction/errata name in each step's traceability record (§ per-step "Traceability").

---

## 1. Program Overview

| Item | Value |
|:---|:---|
| Program name | Standalone AI-DOS Product Versioning Architecture Research Program |
| Governing party | Human Governance |
| Nature of work | Independent, standalone AI-DOS Product architecture research — explicitly **not** Forge AI Target Project work, **not** ProjectStatus execution, **not** repository implementation |
| Method | Each STEP derived its model from first principles, using only the previously accepted STEP(s) as foundation. Existing Forge AI/AI-DOS versioning conventions, existing Meta-Model content, existing version fields, prior audit recommendations, SemVer, CalVer, and current repository structure were explicitly excluded as authoritative inputs throughout. |
| Recurring semantic foundation | A seven-layer semantic model, established in STEP 1 and reused, corrected, and sharpened through STEP 5: (1) entity, (2) relation/fact, (3) proposition content, (4) assertion/declaration act, (5) persistent record/evidence, (6) assessment/acceptance/authorization decision, (7) current standing/applicability projection. |
| Steps completed and accepted | STEP 1 — Ecosystem Entity Ontology · STEP 2 — Change Taxonomy · STEP 3 — Compatibility Model · STEP 4 — Release Composition Model · STEP 5 — Historical Integrity Model · STEP 6 — Migration Model |
| Steps not begun | STEP 7 and beyond: Version Signaling, numbering/bump-rule selection, architectural synthesis, Standards/RFC authoring, implementation, packaging, validation, release engineering |
| Governing discipline enforced across every step (via repeated correction passes) | Acceptance is never truth. A record is never automatic proof of its proposition. Later events/decisions never retroactively alter earlier actual events. Historical standing and current standing are always distinct. Byte/representation equality never establishes entity/identity continuity, and inequality never establishes discontinuity. Unsupported facts are always reported as unknown, not established, or undetermined — never fabricated. Logical necessities are always kept separate from Human Governance policy choices. No numbering scheme was selected or required at any point. |

---

## 2. Consolidated Definition of "Accepted" for This Baseline

Per STEP 5's own corrected model (reused consistently from STEP 5 onward): **acceptance of a STEP by Human Governance is a Layer-6 governance decision, not a truth-making act.** Everything recorded as "accepted" below is accepted **as a stable research conclusion for its own bounded scope** — not as established fact about the world, not as canonical Meta-Model truth, and not as a foreclosure of later reconciliation. Each STEP went through one or more correction/errata passes before acceptance; what is recorded below is the **final, corrected state** of each STEP as it stood at acceptance, with a traceability record of the passes that produced it.

---

## 3. Existing Meta-Model Relationship

This section records every detected overlap, difference, or apparent conflict between the accepted STEP 1–6 corpus and the existing `M.4`–`M.7` Meta-Models. **No overlap or difference below is resolved.** Each is recorded as **unreconciled**, per Human Governance's explicit instruction, pending a later bounded reconciliation work unit.

### 3.1 M.6 — Versioning Meta Model

`M.6`'s declared scope (per `docs/AI-DOS/Meta/M.6-Versioning-Meta-Model.md`, Status: Draft): *"version designation, version scope, semantic versioning (MAJOR.MINOR.PATCH), document versioning, artifact versioning, schema versioning, model versioning, contract versioning, lineage chains, supersession, replacement, amendment, migration obligation, migration requirement, migration window, version window, version range, versioned references (all modes), revision, version branch, version merge, version authority binding, and version claims."*

| Overlap area | STEP 1–6 treatment | M.6 treatment | Status |
|:---|:---|:---|:---|
| Semantic versioning / numbering scheme | STEP 2 explicitly declined to select or assume any numbering scheme, and every subsequent STEP (through STEP 6) preserved this — "no numbering scheme is required to explain the taxonomy/model" was an explicit acceptance-standard condition in STEP 2 through STEP 6. | M.6's declared scope names "semantic versioning (MAJOR.MINOR.PATCH)" as an owned concept. | **Unreconciled — direct divergence.** Whether AI-DOS versioning ultimately adopts SemVer, and how, is explicitly deferred by this research corpus to a future, still-unopened Version Signaling step. This baseline takes no position on whether M.6's existing SemVer commitment is retained, revised, or superseded. |
| Revision, correction, amendment, supersession, replacement, fork | STEP 2 built a full orthogonal Change Taxonomy (Axes A–H: subject, operation, semantic effect, identity consequence, authority/effectiveness, temporal effect, historical-integrity consequence, downstream impact signal) distinguishing these operations by their effect on identity, authority, and history — derived independently, without reference to M.6. | M.6 names "lineage, supersession, replacement, amendment... revision" as owned concepts within its own version-designation framework. | **Unreconciled — terminology and structural overlap.** Both treatments distinguish these operations, but STEP 2's operation definitions (e.g., "amendment = an authorized addition or modification to an existing normative instrument under its continuity rules," corrected across two STEP 2 passes) were not checked against M.6's definitions of the same terms. |
| Migration obligation, migration requirement, migration window | STEP 6 built a full, independently-derived Migration Model (definition, plan, attempt, execution, transformation, result, conformance, acceptance; source/destination state model; preconditions/eligibility/authorization/readiness separation; atomicity/idempotence/rollback model; coexistence model) without reference to M.6. | M.6 names "migration obligation, migration requirement, migration window" as owned concepts within its versioning scope. | **Unreconciled — direct subject-matter overlap.** STEP 6 is a substantially more granular treatment than a single scope line suggests M.6 currently contains; no comparison of the two has been performed. |
| Versioned references, version authority binding, version claims | STEP 1/2/4/5 developed an independent identity/reference model (identity-only vs. state-specific vs. live vs. revision vs. digest-pinned references; entity identity vs. record identity vs. representation identity, corrected repeatedly through STEP 4 and STEP 6) without reference to M.6. | M.6 names "versioned references (all modes)... version authority binding, and version claims" as owned concepts. | **Unreconciled.** |
| Lifecycle effects of versioning (deprecation, supersession, archival) | STEP 5's Historical Operations Taxonomy (correction, amendment, retraction, invalidation, revocation, replacement, supersession, restoration, deletion, redaction, archival, expiration) was derived from the seven-layer model, independent of M.6/M.4. | M.6's own dependency model (per Meta `README.md` §7) takes "M.4 for lifecycle effects of deprecation, supersession, replacement, archival, historical retention, promotion of a version, and revocation of a version" as conditional upstream. | **Unreconciled.** |

### 3.2 M.7 — Compatibility Meta Model

`M.7`'s declared scope: *"compatibility relation classification, compatible-with and incompatible-with declarations, backward compatibility, forward compatibility, partial compatibility, conditional compatibility, breaking change classification and severity, non-breaking change preservation, compatibility claims, compatibility evidence requirements, compatibility windows, adapter compatibility, and Target boundary compatibility."*

| Overlap area | STEP 1–6 treatment | M.7 treatment | Status |
|:---|:---|:---|:---|
| Breaking / non-breaking as the compatibility model | STEP 3 explicitly and repeatedly refused to reduce compatibility to a breaking/non-breaking binary: *"Do not use 'breaking/non-breaking' as the only impact model"* was an explicit, honored constraint throughout STEP 3 and its three correction passes. STEP 3's Compatibility Model instead uses a fifteen-dimension orthogonal model plus a five-field factored outcome (actual relation / assessed conclusion / evidence status / standing / temporal applicability). | M.7's declared scope leads with "breaking change classification and severity, non-breaking change preservation" as core owned concepts. | **Unreconciled — direct, named tension.** This is the most significant detected divergence in the entire corpus: the two treatments differ not just in vocabulary but in whether breaking/non-breaking is the primary compatibility model (M.7, as scoped) or an explicitly rejected oversimplification (STEP 3). |
| Compatibility as version-dependent vs. context-dependent | Per the Meta `README.md`'s dependency table, M.7 requires "M.6" (versioning) as upstream — i.e., existing Meta architecture defines compatibility as a relation between *versioned* artifacts. STEP 3 modeled compatibility as a contextual relation indexed by state, dimension, direction, and context (source/destination state, operation, environment, provider, authority context, evidence basis) — never indexed by a version number, since no numbering scheme exists in this corpus. | M.7 depends on M.6's version semantics as a structural prerequisite. | **Unreconciled — structural/dependency-direction divergence.** |
| Compatibility claims, declarations, and evidence | STEP 3's Claim/Evaluation/Evidence/Authority Model (compatibility requirement → test contract → execution → observed result → assessment → declaration → acceptance → authorization for reliance → operational fact → reassessment → revocation/supersession) was derived independently via the seven-layer model. | M.7 names "compatibility claims... compatibility evidence requirements" as owned concepts, and depends on M.5 (Evidence) as upstream. | **Unreconciled.** |
| Adapter and Target boundary compatibility | STEP 4 and STEP 6 addressed adapters (as Release constituents / migration-relevant dependencies) and the Target-supplied-realization-input boundary (Target-supplied values never becoming AI-DOS Product invariant truth) independently. | M.7 names "adapter compatibility, and Target boundary compatibility" as owned concepts. | **Unreconciled.** |

### 3.3 M.4 — Lifecycle Meta Model

`M.4`'s declared scope: *"Lifecycle profile definition and governance... transition anatomy, types, eligibility, conditions, authority binding, reversibility... promotion, deprecation, superseded-state effect, canonical status, certification status, archival, historical state, reversal, and exception state semantics."*

| Overlap area | STEP 1–6 treatment | M.4 treatment | Status |
|:---|:---|:---|:---|
| Standing, applicability, and status | STEP 1 introduced "current standing/applicability" as a single Layer-7 concept; STEP 5's final correction passes split **standing** and **applicability** into two distinct Layer-7 projections, neither subsuming the other, and further split standing into historical vs. current standing. | M.4 owns "status dimension" and "status category" semantics as a distinct, apparently unitary model. | **Unreconciled — possible structural mismatch.** Whether M.4's status-dimension model already distinguishes standing from applicability the way STEP 5 concluded it must has not been checked. |
| Transition, promotion, deprecation, reversal | STEP 5/6's Historical Operations Taxonomy and Migration Model independently define transition-like operations (correction, revocation, supersession, restoration, deletion, redaction, expiration; rollback, recovery, compensation). | M.4 owns "transition anatomy, types, eligibility... promotion, deprecation, superseded-state effect... reversal" as its scope. | **Unreconciled.** |

### 3.4 M.5 — Evidence Meta Model

`M.5`'s declared scope: *"Evidence type system and root evidence types. Evidence item structure... Evidence source types and source authority... Evidence quality dimensions and assessment. Validity, freshness, confidence, and reproducibility... Provenance chain and traceability... Evidence contract."*

| Overlap area | STEP 1–6 treatment | M.5 treatment | Status |
|:---|:---|:---|:---|
| Evidence decomposition | STEP 5's Evidence internal chain (observation, captured input, execution, validation result, claim, package, acceptance decision — each independently corrigible) was derived from the seven-layer model. | M.5 owns "evidence type system... quality dimensions... retention class categories... provenance chain" as its scope. | **Unreconciled.** |
| Provenance vs. truth | STEP 4/5/6 repeatedly established: provenance and cryptographic verification never automatically prove proposition truth, standing, completeness, or correctness — only narrowly specified technical properties under stated assumptions. | M.5 owns "provenance chain and traceability" and "evidence sufficiency and limitation" as scope. | **Possible convergence, unreconciled.** This is the one area where the two treatments *may* already agree in substance; this has not been verified and is recorded as unreconciled rather than assumed compatible. |

### 3.5 Required Statement

**A later, separately authorized, bounded reconciliation work unit is required before any conclusion in this baseline may amend, extend, or become part of the canonical Meta family.** This baseline does not characterize itself as `M.6`/`M.7` conformance evidence, an amendment proposal, a replacement Meta-Model, a Standard, an RFC, or approved architecture. It is discovery evidence only.

---

## 4. STEP 1 — Ecosystem Entity Ontology

**Traceability:** Original research unit → *Critical Ontology Revision Pass* (10 corrections: reliance-boundary vs. immutability, Mission/DevelopmentPhases split, capability decomposition, provider-implementation Realization-class, citation preservation under citation, snapshot definition, composition-integrity-vs-current-usability, ProjectStatus re-opened, migration ontology expanded, Evidence decomposed, generated-artifact-fork re-evaluated, compatibility-declaration third model) → *Final Semantic-Layer Stabilization* (layer-conflation corrections: reliance-boundary vs. append-only, Evidence-layer errors, citation-target flexibility, DevelopmentPhases authority, ProjectStatus orthogonal-axis model, generated-artifact fork conditionality, Relational/Compositional-class decomposition). Accepted as stable in final corrected form.

### 4.1 Ontology Foundations (final form)

Core concepts, kept permanently distinct: **identity** (persistent handle across observations) · **state** (properties at a moment) · **event** (irreducible occurrence) · **historical record** (append-only account, extension legitimate, in-place editing not) · **provenance** (origin chain, distinct from content and subsequent history) · **revision** (identity-preserving authored change) · **edition** (packaging grouping, not a change concept) · **snapshot** (captured state at an instant, capture-source-agnostic — an entity's own system may validly produce a snapshot of itself; defined by four properties: represents source state at a bounded point, has identity distinguishable from the evolving source, remains fixed if source changes, carries provenance of capture) · **release** (a deliberate boundary-crossing availability act, distinct from the artifact it releases) · **composition** (identity constituted by referencing other independently-identified entities) · **instance** (a contextual binding of a general definition).

**Central corrected principle:** the assertion occurrence is historically fixed and cannot be erased or rewritten (Layer 5 never changes); whether the asserted proposition was true (Layers 2/3), whether it was accepted (Layer 6), and whether it is still applicable (Layer 7) are three separately revisable questions.

### 4.2 Accepted Entity-Family Model (11 families + 1 deliberately unassigned slot)

| Family | Members | Continuity rule |
|:---|:---|:---|
| Anchor-class | AI-DOS Product, Target Project | Absorbs change without forking; identity persists across all releases; terminates only on retirement |
| Charter/Constitutive *(tentative)* | Mission-as-charter | Constitutive of Target identity/authority/scope; change may terminate identity (rechartering) |
| Contract-class | Meta Models, Standards, Validation/Execution Contracts, schemas, workflow definitions, capability definitions, migration definitions | Immutability-from-creation is a **policy candidate**, not ontological necessity; required only after a reliance boundary is crossed |
| Decision-record family | RFCs, decision records, Evidence-acceptance decisions | Record fixed forever as *occurrence*; reversal is a new record, original occurrence untouched |
| Release-class | AI-DOS releases, Target Project releases | Immutable once minted, contingent on the entity's declared identity/continuity policy |
| Realization-class | Provider implementations | Mirrors Anchor+Release pattern: own identity/lineage plus deployment instances |
| Intent-class | Roadmaps, Mission-as-statement | Weak continuity; content is not a claim of settled fact; freely revisable |
| Lifecycle-Segment class | DevelopmentPhases | Pure timeline partition; no identity or default authority role |
| Projection-class | One candidate form of ProjectStatus; runtime state | No independent identity; a computed view |
| Record-class | Execution/run records, observations, validation results, Evidence packages, migration execution records, capability-usage facts, frozen generated instances, correction records | Append-only is a **policy candidate**, not forced; retention motivated only by an adopted goal (accountability, auditability, reproducibility, dispute resolution, historical reconstruction, compliance) |
| Derivative-class | Reports, explanatory documentation, generated-artifact forks prior to any acceptance act | Weakest continuity; inherits stronger rules only from whatever cites it |
| Relational/Compositional-class | Compatibility declarations, capability requirement/satisfaction/claims, "implements/realizes" relations, citation/lineage relations | Six-layer decomposition required: relation/fact, proposition, assertion act, assertion record, assessment/acceptance, applicability projection — never blended |
| **ProjectStatus** | *(deliberately unassigned)* | Family membership contingent on which of the orthogonal axes (authoring mode, source of truth, authority/effect, derivation mode, persistence, historical logging, per-field heterogeneity) apply — a Human Governance policy choice, not resolved by the ontology |

### 4.3 Corrected Structural Principles

- **Reliance boundary:** before another entity's historical claim depends on a specific state being retrievable unchanged, mutability is open policy. After that point, retrievability of the relied-upon state is a logical necessity — but this attaches to the specific relied-upon state, not a blanket immutability rule for the whole family.
- **Historical identity vs. current standing:** permanently distinct axes for any persisting entity — general structural principle, not release-specific.
- **Capability decomposition (8 distinct objects, not 1):** capability definition, capability identity, provider capability implementation, provider supply-claim, release capability-inclusion, Target capability requirement, Target capability usage, capability satisfaction result.
- **Provider swap / Target identity:** three separate axes — Target identity, historical reproducibility, observable-behavior continuity — a provider swap can break any subset independently; Target identity is provider-independent *by default* only absent a charter-level binding (a genuinely open policy question, never resolved with a universal default in either direction after later corrections).
- **Citation does not transform lifecycle family:** citation may target a live entity, a revision, a snapshot, or a digest-pinned representation; the source's native family and mutability rule are untouched regardless.
- **Generated-artifact forking:** nothing is ever modified in place; a human edit creates a new fork with an explicit lineage relation; authority over the fork depends on a separate, later acceptance act.
- **Migration ontology (expanded):** migration definition, plan, execution, execution record, verification evidence are five distinct objects; scope may be exact states, revision ranges, contract families, compatibility epochs, capability profiles, or explicit preconditions — never limited to a pair of exact states.
- **Evidence decomposition (7 objects):** observation, captured input, execution, validation result, claim, package, acceptance decision — each independently authored, independently authoritative-or-not, and independently corrigible.

### 4.4 Stress-Test Findings (condensed — 13 tests across both passes)

| # | Case | Principle established |
|---|---|---|
| 1 | Editorial correction to a normative contract | Permissible without new historical object only pre-reliance-boundary |
| 2 | Validation rule changing outcome | Outcome divergence traceable to Contract-revision vs. input-change, without conflation |
| 3 | Accepted RFC later found erroneous | Decision-record family: error corrected by superseding record, not rewrite |
| 4 | ProjectStatus changing repeatedly, no release | No family-forcing needed; resolved per chosen axis form |
| 5 | Incorrect Evidence needing correction | Package superseded; underlying observations/results independently assessed |
| 6 | Generated artifact manually edited | Resolved without ad hoc family: fork, not in-place modification |
| 7 | Target using capability subset | Requirement/inclusion/satisfaction are three distinct, previously-collapsed entities |
| 8 | Same Target, different providers | Three-axis separation (identity/reproducibility/behavior) required |
| 9 | Cited artifact used as Evidence | Citation binds a chosen target type; source family untouched |
| 10 | ProjectStatus in each candidate form | Five (later seven-axis) forms coexist without contradiction |
| 11 | Compatibility declaration after referenced states change | Historical-identity vs. current-standing split applies directly |
| 12 | Generated-artifact fork plus later acceptance | Evidence-acceptance pattern reused cleanly |
| 13 | Provider swap preserving identity, breaking reproduction | Confirms the three-axis separation |

---

## 5. STEP 2 — Change Taxonomy

**Traceability:** Original research unit → *Final Consistency Correction* (7 corrections: layer-mapping for generation events, semantic-effect set-valued fields, Axis-E decoupled from linear chain, universal entity-consequence claims removed, reliance/retention conclusion corrected, derivative-identity rule corrected, acceptance-authority framing corrected) → *Semantic Errata Closure* (6-item ledger: further generation-event layering, further semantic-effect refinement, further Axis-E decoupling, further universal-claim removal, further reliance/retention narrowing, further derivative-identity narrowing). Accepted as stable in final corrected form.

### 5.1 Foundations (final form)

**Change is not one kind of thing** — it is distributed across the seven semantic layers. Distinguished operations: event, transition, revision, correction, amendment, supersession, replacement, fork, regeneration, reassessment, revocation, applicability change. **Load-bearing rule:** a Layer-6/7 event is definitionally not a change to the entity or its content/record.

### 5.2 The Orthogonal Change Model (8 axes)

| Axis | Values (abbreviated) | Multi-valued? |
|---|---|---|
| A. Subject | entity identity, entity state, content, representation, structure/schema, behavior, relation/fact, proposition, assertion record, acceptance decision, applicability status, authority assignment, provenance, composition membership, operational state, provider realization, generated instance, **logical artifact pointer** | Yes |
| B. Operation | create, revise, correct, amend, extend, restrict, deprecate, withdraw, revoke, supersede, replace, fork, merge, regenerate, re-evaluate, accept, reject, activate, deactivate, include, exclude, migrate, delete/lose | Yes, sequentially |
| C. Semantic effect | editorial, presentational, representational, structural, semantic, normative, behavioral, operational, authority-related, provenance-related, compositional, applicability-related, security-related | **Set-valued per sub-field** (declared/intended, observed-semantic, observed-behavioral, unresolved); only definitionally negating pairs (e.g., editorial vs. semantic/normative) are genuinely contradictory within one sub-field |
| D. Identity consequence | no entity change; same entity, new state; same entity, new revision; new representation; new snapshot; new release instance; new derivative/fork; superseding entity; terminated identity; unresolved pending policy | Exactly one per entity per episode; **never derived from file/content edits alone** |
| E. Authority/effectiveness | Decoupled components, not a linear chain: acts/events, assertions, records, authority decisions, effectiveness conditions, operational facts, standing/applicability projections — each entity's own governing lifecycle contract specifies which apply, in what order, whether repeatable | N/A (component set) |
| F. Temporal effect | prospective, immediately effective, retroactive correction of a description, later reassessment, change to current applicability, historical record of an earlier event, scheduled/conditional activation | Yes, but a later reassessment can never co-occur with a rewrite of a historical record |
| G. Historical-integrity consequence | no retained history, revision history, append-only event record, snapshot, digest-pinned representation, correction record, retraction record, supersession link, lineage link, provenance update, reproducibility bundle | Classified per-value as logical necessity, policy candidate, or empirical requirement — **retention requires an adopted goal** (accountability, auditability, reproducibility, dispute resolution, historical reconstruction, compliance); reliance alone does not entail retention |
| H. Downstream impact signal | cannot affect compatibility by definition, may affect compatibility, definitely changes an externally observable contract, may require compatibility reassessment, may require migration analysis, may require release recomposition, affects only current support/policy-eligibility/applicability, **insufficient information for a conclusion** | Explicitly deferred to a future Compatibility Model; never resolved into a breaking/non-breaking binary |

### 5.3 Authority/Effectiveness Model (final, non-linear)

Authored → proposed → recorded → reviewed → accepted → effective → operationally active → revoked/superseded — presented as a **vocabulary of decoupled components**, not a mandatory sequence. Whether any transition requires authority is determined by the entity's own governing lifecycle contract; no default assumption either way. Authorized activation and unauthorized/divergent activation are both first-class, representable states.

### 5.4 Historical Treatment Matrix (final)

Every G-axis value is classified per situation as logical necessity, policy candidate, or empirical requirement — never asserted as a blanket rule. Append-only, revision history, snapshotting, digest-pinning are all policy candidates; only "retention of some kind, once a goal is adopted" approaches logical necessity, and even that requires the goal to be explicitly adopted (reliance alone is insufficient).

### 5.5 Cascade and Reassessment Rules

**Golden rule:** a change to entity X may generate a reassessment signal for entity Y, but Y's own identity-consequence and historical-record axes are untouched unless Y itself undergoes a direct authored change.

### 5.6 Stress-Test Findings (condensed — 25 tests)

| # | Case | Principle established |
|---|---|---|
| 1–2 | Editorial vs. behavioral wording change | Declared intent and observed effect tracked as separate sub-fields, no forced record split |
| 3 | Machines parse wording differently | Intent ≠ effect explicitly separable within one episode |
| 4 | Validation rule reverses verdict | Contract-revision cause vs. input-change cause kept traceable via provenance |
| 5–6 | RFC found false / decision reversed | Decision-record family behavior; reversal never rewrites the original occurrence |
| 7 | Standard's authority owner changes, content doesn't | Authority transfer and content change are orthogonal |
| 8 | Schema adds optional field, one provider rejects | "Insufficient information for a conclusion" is a legitimate, structural Axis-H value |
| 9 | Provider behavior drifts without claim update | Fact/assertion mismatch flagged independently of either entity's own axis-D consequence |
| 10 | Target changes provider, run unreproducible | Three-axis separation reused from STEP 1 |
| 11–12 | ProjectStatus repeated change / retrospective error | Per-field axis configuration; no universal answer |
| 13 | Evidence observation found inaccurate | Cascades only as far as reliance actually ran |
| 14 | Evidence package cites live document that changes | Citation type choice carries its own exposure, not solved by citation alone |
| 15 | Digest-pinned artifact deprecated | Pinning prevents drift, not standing-reassessment |
| 16 | Regeneration from identical inputs, different output | Identity criterion (content- vs. provenance-addressed) determines outcome, not the event alone |
| 17 | Human-edited generated instance later adopted | Fork + later, separate acceptance act — Evidence-acceptance pattern reused |
| 18 | Release remains byte-identical, component becomes insecure | Cleanest confirmation of the cascade golden rule |
| 19 | Compatibility declaration after referenced states change | Record fixed; applicability re-evaluated separately |
| 20 | Roadmap item moved | No entity change to Mission/Product; Intent-class weak continuity confirmed |
| 21 | DevelopmentPhase gate revised mid-Target | Prospective only unless retroactivity is an explicit, separate policy choice |
| 22 | Documentation corrected, source untouched | Non-normative default confirmed, not assumed absolute |
| 23–24 | Provenance added / found false | Enrichment vs. contradiction are different operations requiring different records |
| 25 | Logical output slot repointed | "Repoint" identified as a distinct, necessary Axis-B operation |

---

## 6. STEP 3 — Compatibility Model

**Traceability:** Original research unit → *Separation Correction* (8 corrections: relation-vs-conclusion, semantic-effect fields, arity/directionality/symmetry, historical-integrity absolutes, entity-policy defaults, stress-test re-runs) → *Relation and Assessment Errata Closure* (further factoring of the result model into Actual Relation / Assessed Conclusion / Evidence / Standing / Temporal, with explicit cardinality typing) → *Final Layer and Stress-Test Errata* (removal of all remaining combined-layer labels; stress 7/12 corrected for revision-order and pairwise-truth overclaiming). Accepted as stable in final corrected form.

### 6.1 Foundations (final form)

**Compatibility is a contextual relation, never an intrinsic, permanent property of one artifact.** Fully layered: actual relation (Layer 2, independent of knowledge) → assessed technical conclusion (Layers 3/4/6, an evaluator's claim, separately corrigible) → evidence/epistemic status (basis, coverage, uncertainty, reliability, conflicts) → standing (factored: actual operational reliance, authorization for reliance, support eligibility, acceptance state, lifecycle events) → temporal (evaluation interval, applicability interval/projection, scheduled effectiveness, reassessment status — all coexistable, never mutually exclusive alternatives).

### 6.2 Fifteen Orthogonal Dimensions

Structural/schema · semantic · normative · behavioral · operational · capability · provider · data/representation · validation · execution · security · provenance/reproducibility · governance/authority · composition · migration. **Set-valued, never reduced to a compatible/incompatible binary.**

### 6.3 Arity, Directionality, Symmetry, Transitivity (final)

Six relation shapes: binary interoperability, directional consumer/provider, substitutability, subject-to-contract conformance, n-ary composition compatibility, migration-path/reachability. **A composition-level result is never derived from binary pairs; if a binary projection is used for convenience, the compound subject it represents must be stated.** Direction, single-pair bidirectionality, general symmetry, and transitivity are four distinct claims, each requiring its own evidence — never inferred from one another.

### 6.4 Outcome Model (final, five factored fields, not one list)

1. **Actual relation** (Layer 2) — may be reported "not independently established"; never populated from evidence, tests, or decisions alone.
2. **Assessed technical conclusion** — set-valued (multiple evaluators may disagree); may be wrong even when accepted.
3. **Evidence/epistemic status** — basis, coverage, uncertainty, reliability, conflicts; formally-tested/informally-observed/unsupported.
4. **Standing** — actual operational reliance (fact) ≠ authorization for reliance (authority state) ≠ support eligibility (policy stance) ≠ acceptance state (decision) ≠ lifecycle events (withdrawal/revocation/supersession, transitions not values).
5. **Temporal** — evaluation interval, applicability interval/projection, scheduled effectiveness, reassessment status, all coexistable.

**Lack of evidence is never evidence of incompatibility.**

### 6.5 Claim, Evaluation, Evidence, Authority Model

Compatibility requirement → test contract → execution (with its own executor-authorization/execution-integrity/result-reliability/result-acceptance four-way split) → observed result → compatibility assessment → declaration → acceptance → **authorization for operational reliance (a further, distinct act from acceptance)** → actual operational success/failure → reassessment → revocation/supersession.

### 6.6 Temporal and Historical Model

Compatibility between historical states ≠ compatibility assessed at a historical time ≠ current compatibility ≠ compatibility under a former/new policy. Loss of current support ≠ historical incompatibility. **Pinning prevents referent drift only — it never prevents later correction, retraction, deprecation, withdrawal, security reassessment, loss of policy eligibility, or discovery of false provenance.**

### 6.7 Composition and Cascade Rules

Never assumed: pairwise compatibility proves composition compatibility; one incompatible optional component invalidates every use; compatibility is symmetric or transitive; shared schemas imply shared behavior; successful assembly implies operational compatibility; runtime success proves compatibility even for the observed scope (runtime success establishes only operational events/observations and possibly a provisional, scope-limited assessed conclusion).

### 6.8 Stress-Test Findings (condensed — 30 tests, final corrected form)

| # | Case | Principle established |
|---|---|---|
| 1 | Schema adds optional field, provider rejects | Incompatible, scoped to that provider only |
| 2 | Wording-only change, machine parses differently | Partial: semantic ok, behavioral fails |
| 3 | Two releases, same schema, different behavior | Structural compatible ≠ behavioral compatible |
| 4 | Provider A full / Provider B partial capability | Partial compatibility is a first-class outcome |
| 5 | Target changes provider, identity preserved by policy | Fresh evaluation required, not inherited |
| 6 | Old run unreproducible after provider change | "Historically assessed, no longer currently applicable" for reproduction only |
| 7 | Contract revision reverses verdict for same input | Context-completeness resolves the apparent paradox |
| 8 | Accepted declaration later shown wrong | Record fixed; proposition reassessed as false via new correction record |
| 9 | Declaration correct for tested env, false elsewhere | Scope-omission is a declaration error, not a content error |
| 10 | Live citation target changes post-assessment | Record unaffected; current applicability indeterminate |
| 11 | Digest-pinned dependency withdrawn for security | Pinning ≠ immunity from standing reassessment |
| 12 | Every pairwise pair compatible, assembly fails | Composition-level inference is never derived from pairwise results |
| 13 | Release works only through adapter | "Compatible with adaptation" is its own outcome value |
| 14 | Migration restores operability, changes behavior | Multi-dimensional split reported simultaneously |
| 15 | Compatible only old→new, not reverse | Clean confirmation of directional asymmetry |
| 16 | Two compatible migrations fail composed | Transitivity failure, confirming non-transitivity default |
| 17 | Target operational, fails current governance policy | Governance dimension fails while operational holds |
| 18 | Byte-identical artifact, different authority contexts | Authority context is orthogonal to content dimensions |
| 19 | Provider behavior drifts, claim unchanged | Claim/behavior mismatch flagged independently |
| 20 | Historical Evidence reproducible, inadmissible now | Reproducibility ≠ current admissibility |
| 21 | ProjectStatus parseable, semantics drifted | Structural ≠ semantic compatibility |
| 22 | Generated artifact valid, false provenance | Structural ≠ provenance validity |
| 23 | Compatibility claimed without source/destination | Explicitly indeterminate by design |
| 24 | Conflicting trusted evaluators | Actual relation has a determinate value independent of the disagreement; disagreement is Layer-6 only |
| 25 | No test, production appears successful | Untested + informal positive signal, not "compatible" |

---

## 7. STEP 4 — Release Composition Model

**Traceability:** Original research unit → *Ontology and Epistemic Separation Correction* (Release identity separated from composition; entity/event/state/relation/fact decomposed for materialization/assembly/installation/deployment/runtime; declaration permanently Layer-4; Release-candidate three alternatives; entity-type exclusions removed) → *Final Classification Errata* (removal of every remaining combined semantic label) → *Final Errata Consistency Correction* (assessment/acceptance decisions split; reliance-authorization/support-standing split; Stress 6/24 corrected). Accepted as stable in final corrected form.

### 7.1 Foundations (final form)

**A Release is a Release-class entity that participates in a declared composition relation — composition equality never proves identity equality, and composition difference never automatically proves identity difference.** The identity consequence of any composition change depends entirely on the entity's declared identity/continuity policy.

### 7.2 Semantic Decomposition of Colloquial Terms

"Materialized release," "assembled artifact," "installation," "deployment," "runtime instance" are each decomposed into: an event, an entity (if separately tracked), a state (where applicable), and an actual relation/fact — never combined under one label.

### 7.3 Seven Declared/Realized Composition Stages

Declared → resolved → materialized → distributed → installed → deployed → observed. **A declaration never makes materialization successful. A materialized artifact never proves it matches the declaration. Runtime observation never retroactively redefines declared composition.** Each stage fully decomposed across all seven semantic layers (declaration remains Layer 4 permanently; acceptance is a separate Layer-6 decision; current accepted standing is Layer 7).

### 7.4 Constituent Reference and Binding Model

Identity-only, state-specific, live, revision, digest-pinned, embedded-copy, generated-derivative, unresolved-selector, externally-resolved, capability-based, provider-dependent, environment-dependent references. **Transitive-closure requirement:** a direct reference being pinned says nothing about whether its own transitive dependencies are pinned; "fully fixed" claims require examining the whole transitive closure, though whether this is *required by policy* (vs. merely unchecked) determines falsity vs. mere unsupportedness.

### 7.5 Constituent Role Model

Role is declared per-instance for the specific Release, never inferred from artifact type (e.g., a Roadmap may be explanatory documentation in one Release and operational input in another).

### 7.6 Required/Optional/Conditional/Alternative Membership

Mandatory, optional, conditionally required, mutually exclusive alternatives, capability/environment/provider-selected, Target-supplied, externally supplied, deferred/unresolved. **Optionality never automatically creates a new Release, and never automatically leaves identity untouched — consequence depends entirely on declared policy.**

### 7.7 Release/Variant/Representation/Realization Identity

Same Release different representation / different materialization / authorized variant vs. different Release sharing most constituents vs. derivative distribution artifact vs. independently identified downstream composition — **not decided by convention**; each requires its own declared identity/continuity policy.

### 7.8 Composition Completeness (eleven independent dimensions)

Syntactic, referential, identity, state-binding, role, dependency, provenance, authority completeness; compatibility-assessment coverage; materialization completeness; operational completeness. **Structural validity is necessary, never sufficient** — a composition can be structurally valid while referring to the wrong constituent, carrying false provenance, lacking authority, being incompatible, non-reproducible, failing materialization, or failing at runtime.

### 7.9 Provenance, Derivation, Authority Model

A generated constituent is never validated merely because its generator is trusted. Byte-identical output may carry different provenance claims or authority standing. Ten distinct authorities (define requirements, select constituents, assemble, declare, record, assess, accept, authorize distribution, authorize operational reliance, observe deployment/use) — **none implies any other.**

### 7.10 Compatibility and Cascade Rules

STEP 3 reused without reopening. Composition-level compatibility never inferred from pairwise results.

### 7.11 Entity Applicability Matrix (final, role-dependent, not type-excluded)

Twenty-four entity types assessed for constituent eligibility, role, identity/state-binding requirement, optional/conditional status, composition-level applicability, and what cannot be inferred from inclusion — **no categorical type-based exclusion** (Mission, DevelopmentPhases, Roadmap, Target-related artifacts may all appear under an appropriate declared role, never assumed by type). **Target-supplied configuration is explicitly a three-tier model:** (1) the Release-declared slot/selector/input-contract *is* part of the Release's own composition; (2) the specific Target-supplied value is *not*; (3) the resulting realization composition is its own distinct thing.

### 7.12 Stress-Test Findings (condensed — 30 tests, final corrected form)

| # | Case | Principle established |
|---|---|---|
| 1 | Live reference drifts post-build | Materialized-at-build ≠ current state; whether live refs are permitted is policy |
| 2 | Pinned constituent, false provenance later found | Provenance dimension affected, structural untouched |
| 3 | Byte-identical archives, different claimed identities | Byte-sameness never establishes identity sameness |
| 4 | One Release, local package + hosted realization | Distinct realizations of one declared Release, independently verified |
| 5 | Platform build omits platform-mandatory constituent | Legitimate absence iff correctly conditionally scoped |
| 6 | Optional adapter absent, core succeeds | Legitimate absence is not a defect |
| 7 | "Optional" constituent changes core behavior | Declared role can be discovered mismatched with actual effect |
| 8 | Pairwise pass, assembly fails | Composition-level compatibility is its own fact |
| 9 | Declared ≠ materialized archive | Materialization defect, not a redefinition of the declaration |
| 10 | Archive matches, install omits constituent | Installation-level failure, R and Arc untouched |
| 11 | Install matches, runtime loads undeclared dependency | Observed composition can exceed as well as fall short of declared |
| 12 | Target config changes behavior, not identity | Target-supplied content never becomes AI-DOS Product truth |
| 13 | Target embeds modified constituent, claims original identity | A false identity claim, not an authorized variant |
| 14 | Generated artifact valid, false source provenance | Inclusion never validates provenance |
| 15 | Constituent present only via adapter | Dependency edge modeled explicitly |
| 16 | Alternative providers, partial behavioral overlap | Same-Release/different-Release threshold requires explicit policy |
| 17 | Validation Contract changes post-constitution | STEP 3's corrected model reused directly |
| 18 | Roadmap: explanatory here, operational there | Role-not-type principle directly demonstrated |
| 19 | ProjectStatus parseable, semantics drifted | Structural completeness ≠ semantic correctness |
| 20 | Candidate accepted with one unresolved dependency | Flagged-incomplete acceptance is representable, not resolved as advisable |
| 21 | External dependency available at declaration, gone at install | Temporal divergence in resolution timing |
| 22 | Authentic, compatible constituent, not distribution-authorized | Technical soundness ≠ distribution clearance |
| 23 | Two valid variants can't coexist in one environment | Compatibility non-composability at the variant level |
| 24 | Runtime success, no match verification | Success ≠ match to declared composition (corrected across two passes) |
| 25 | Copied constituent, independently assigned identity | Byte identity never equals entity identity |
| 26 | Record names constituents, omits roles | Role completeness is its own, separately-failable dimension |
| 27 | Constituent pinned, transitive dependency live | Transitive-closure gap named explicitly |
| 28 | Release contains migration artifact, none performed | Definition/tooling inclusion ≠ execution occurrence |
| 29 | Security withdrawal post-distribution | Historical composition untouched; current standing affected only |
| 30 | Conflicting evaluators on composition match | Determinate match-fact independent of the disagreement (final-pass correction) |

---

## 8. STEP 5 — Historical Integrity Model

**Traceability:** Original research unit → *Historical Integrity Consistency Correction* → *Final Historical Integrity Errata* → *Final Closure Consistency Correction* → *Final Semantic Closure Errata* (five successive passes progressively removing every combined-layer label, correcting revocation/supersession target modeling, and eliminating invented facts in Stress Tests 1, 4, 6, 20, 22). Accepted as stable in final corrected form — the most heavily corrected step in the program.

### 8.1 Definition (final form)

**Historical Integrity** is the property of a system whereby what an earlier object historically was, and the historical fact that it existed or occurred, remain unalterable by anything that happens later — while its current representation, content, availability, applicability, and standing, and later operations performed upon it, are all separately variable. **Destructive mutation without sufficient historical trace may reduce or destroy Historical Integrity in practice, but never alters the metaphysical fact that the earlier event occurred.** Append-only storage is a strong policy candidate, never a universal requirement.

Distinguished from: historical truth, record integrity, record immutability, evidence integrity, provenance completeness, auditability, reproducibility, current correctness, current applicability, continuity of identity.

### 8.2 Final Semantic Classification Discipline

Every object decomposed to a single semantic category per row — no "relation/fact," "event/relation," "Layer 3/4," "Layer 6/7," or "6-ish" style combined labels survive in the final corrected form. Key final decompositions:
- **Generation/observation events** sit at Layer 2 (occurrence), never Layer 4 — the assertion about the occurrence is the separate Layer-4 object.
- **Revocation:** the decision being revoked (or its effect) is the target — never "standing." Revocation proposition content (L3), assertion (L4), revocation decision (L6), effectiveness rule, resulting standing (L7), resulting applicability (L7, separate) are five distinct objects.
- **Supersession:** actual relation (L2, non-propositional) ≠ proposition stating the relation (L3) ≠ assertion (L4) ≠ evidence record (L5) ≠ recognition decision (L6) ≠ resulting standing (L7) ≠ resulting applicability (L7, separate).
- **Standing identity is not universally asserted absent or present** — standing may be a pure derived projection, a proposition about standing, an explicit standing-snapshot record with its own identity, or a decision — which model applies is a policy choice.

### 8.3 Historical-Time Model (final)

Event, observation, assertion, record-creation, assessment, acceptance, effective/applicability, correction, revocation, supersession, and discovery time are distinct markers. **Logically required:** the *capacity* to represent distinguishable temporal meanings whenever they actually differ — never a universal mandate that every object physically store multiple timestamps. Partial ordering must be representable without forcing a total order.

### 8.4 Historical Truth / Record / Evidence / Decision / Standing Model (final)

A record may faithfully preserve a false or mistaken assertion (record fidelity ≠ truth). A missing record never proves an event did not occur. A later correction never retroactively changes the earlier actual event. **A persistent record establishes only that an occurrence was recorded as having happened — never that it infallibly did.** Record-correctness (was this accurately recorded) and proposition-truth (was what was recorded actually true) are two independently corrigible layers.

### 8.5 Historical Operations Taxonomy (final, fourteen distinct operations, target-split where needed)

Correction (of proposition content / of an assertion record — two distinct targets) · amendment · annotation · supplementation · retraction · invalidation (of a decision / of a standing) · revocation (of acceptance standing / of authorization standing) · replacement (of a component / referent / representation) · supersession (between decisions / records / entities) · restoration (standing restoration / record reconstruction) · deletion (the only operation that removes rather than adds) · redaction · archival · expiration (of standing / of applicability, kept distinct). Correction is defined functionally as "the act or result of rectifying an error" — its mechanism (in-place revision, amendment, replacement, linked record, supersession, or another) is entirely policy-dependent, never fixed by the definition.

### 8.6 Record Identity and Continuity (final)

Event identity, proposition identity, assertion-act identity, record identity, evidence identity, decision identity, and current-standing identity are seven distinct identity questions. A copied or reconstructed physical artifact/representation is distinct from the original; **whether it preserves, inherits, references, or receives a new *logical record identity* depends on the adopted identity model and provenance policy** — never asserted as a universal rule either way. Reconstruction never establishes content-identity to the lost original.

### 8.7 Provenance, Evidence, Conflict, Uncertainty (final)

Fourteen provenance fields (authorship, observation source, assertion source, recording authority, decision authority, derivation, transformation, custody, replication, reconstruction, confidence, coverage, uncertainty, conflicting evidence). **Verified cryptographic mechanisms may establish narrowly specified technical properties under their stated assumptions; provenance may support reasoning about origin/derivation/custody/transformation; neither ever automatically proves proposition truth, standing, completeness, or correctness.**

### 8.8 Acceptance, Revocation, Standing-Through-Time (final)

Acceptance never converts proposition content into historical truth. Revocation never means the earlier acceptance decision never occurred. A later standing never retroactively becomes the standing at every earlier time. Four historical-standing representation alternatives (preserved-decisions-plus-projection, explicit snapshots, intervals, hybrid) — none selected as mandatory.

### 8.9 Stress-Test Findings (condensed — 30 tests, final corrected form)

| # | Case | Principle established |
|---|---|---|
| 1 | Correctly recorded assertion later inapplicable | Record fidelity, event occurrence, acceptance, and applicability are four separate things; standing kept separate from applicability in reporting |
| 2 | False assertion preserved without alteration | Record fidelity ≠ proposition truth |
| 3 | True event, no surviving record | Missing record ≠ disproof |
| 4 | Record corrected in place | Establishes a record-mutation event only — not continuity or discontinuity of the underlying object |
| 5 | Corrective record appended, original remains | Traceability improves; standing still requires its own basis |
| 6 | Correction later discovered wrong | Corrections stack indefinitely; none is presumptively final; discovery of wrongness is an observation, not an invented new assertion/record |
| 7 | Two records, incompatible Release compositions | Record conflict ≠ proof that two distinct assertion events occurred |
| 8 | Two assessments, same evidence, different conclusions | Reused from STEP 3 directly |
| 9 | Evidence authentic, substantively incomplete | Authenticity ≠ sufficiency |
| 10 | Reliable timestamp, false proposition | Time reliability and content truth are orthogonal |
| 11 | Event time known, assertion time unknown | Independently trackable fields |
| 12 | Record time precedes claimed event time | Anomaly flagged for investigation, never assumed error nor assumed occurrence |
| 13 | Partial ordering only | Represented as partial order, never forced total |
| 14 | Record copied, original lost | Copy is a distinct record entity; evidentiary weight is policy |
| 15 | Damaged record reconstructed | Reconstruction accuracy is a separate, possibly permanently uncertain question |
| 16 | Acceptance decision later revoked | Revocation ≠ erasure of the original decision |
| 17 | Superseded without revoking historical acceptance | Supersession leaves historical acceptance intact |
| 18 | Current standing differs from earlier standing | Unremarkable, confirms the model |
| 19 | Compatibility declaration after referenced states change | Three-way separation: record, truth-at-T, current applicability |
| 20 | Roadmap item moved | No entity change to Mission/Product |
| 21 | DevelopmentPhase gate revised mid-Target | Prospective only, absent explicit retroactivity policy |
| 22 | Observation misidentified, later corrected | Original observation's occurrence preserved; current-use precedence undetermined absent a separate rule |
| 23 | Authority decision conflicts with evidence | Decisions can diverge from evidence without being reconciled automatically |
| 24 | Two authorities, conflicting decisions | Both occurrences are historical facts regardless of eventual resolution |
| 25 | Record redacted, traceability still relevant | Redaction preserves the fact of redaction even where content is hidden |
| 26 | Deletion request conflicts with retention policy | Flagged as a policy tension, not adjudicated |
| 27 | Provenance incomplete, content possibly correct | Incomplete provenance ≠ falsity |
| 28 | Valid signature protects false assertion | Signature proves record integrity, never content truth |
| 29 | Target-supplied value changes realization | AI-DOS invariant truth unaffected — reused from STEP 4 |
| 30 | Ordering/standing cannot be determined | Explicitly undetermined, no fabrication |

---

## 9. STEP 6 — Migration Model

**Traceability:** Original research unit → *Consolidated Migration Model Consistency Correction* (migration-definition success-independence; full semantic decomposition of observation/checkpoint/authorization/acceptance/decommissioning/supersession; compatibility–eligibility automatic-mapping removed; complete object-role matrix; all 30 stress tests rebuilt without invented facts) → *Final Migration Model Acceptance Closure Errata* (undertaking vs. attempt separated; object-role matrix corrected to logical possibility rather than typicality; 8 named stress-test cells corrected for further invented-fact removal). Accepted as stable in final corrected form.

### 9.1 Definition (final form)

**Migration is an intended transformation of an existing subject, already in some source state, toward a destination state, with a continuity/invariant claim despite permitted differences, evaluated against stated preconditions and postconditions.** Four required elements: pre-existing subject, intended destination, continuity claim, transformation. **A migration undertaking does not require successful realization to qualify as migration** — planning, authorization, or attempt-initiation each independently establish an undertaking; a migration *attempt* specifically begins only when the undertaking is initiated as an attempt, a distinct, later threshold than mere planning or authorization.

Explicitly distinguished, with no universally fixed relationship assumed: fresh installation, initialization, ordinary runtime mutation, configuration change, adaptation, conversion, replacement (may or may not preserve continuity, depending on policy), upgrade/downgrade/update (colloquial only), repair, reconstruction (aims to construct from evidence, never establishes identity/equivalence/restoration by itself), synchronization, replication, import/export, materialization/assembly/deployment, rollback (a separately modeled operation with multiple possible intended results, never inherently "reverse migration"), restoration, recovery, re-execution, coexistence, decommissioning.

### 9.2 Migration-Undertaking / Plan / Authorization / Attempt / Execution Chain (final)

Undertaking exists from planning, authorization, OR attempt — any one is sufficient. Plan (instance of a definition) ≠ authorization (Layer-6 decision) ≠ attempt (begins only at actual initiation-as-attempt) ≠ execution event (need not occur merely because an attempt exists) ≠ actual transformation effect ≠ result ≠ conformance assessment ≠ acceptance — nine distinct objects.

### 9.3 Source/Destination State Model

Declared, observed, and actual source/destination state are always distinct; actual-state fields are never populated from declarations, evidence, or decisions alone. Multiple valid destination states may coexist; destination requirements may change mid-execution; source state may change mid-execution — all representable without forcing a resolution.

### 9.4 Preconditions, Eligibility, Authorization, Readiness (final)

Logical, operational, and policy preconditions are distinct from compatibility requirements, eligibility, necessity, authorization, and readiness. **Every compatibility state (positive, negative, conditional, partial, unknown, undetermined) may inform, but never by itself determines, eligibility.** Non-inference chain preserved throughout: compatibility ↛ necessity ↛ eligibility ↛ authorization ↛ readiness ↛ execution ↛ success/correctness/completeness/acceptance/standing/applicability.

### 9.5 Transformation and Invariant Model

Identical output bytes never establish semantic continuity; changed bytes never establish identity discontinuity. Invariant declaration, proposition, assessment, evidence, decision, and actual preservation are six distinct objects.

### 9.6 Execution, Atomicity, Concurrency (final)

Atomicity, idempotence, reversibility, and transactionality are never universal — each is a claimed/designed property of a specific migration type requiring separate empirical verification. Partial/intermediate execution states, duplicate execution, and execution under incomplete observability must all be representable without forcing a success/failure binary.

### 9.7 Success/Completeness/Correctness/Acceptance/Standing Model

Thirteen distinct concepts (execution completion, technical success, transformation conformance, invariant preservation, destination validity, migration completeness, compatibility after migration, operational usability, acceptance decision, acceptance standing, support standing, applicability, reliance authorization). **A zero exit code, completed operation, valid signature, or produced record never automatically establishes semantic correctness or acceptance.**

### 9.8 Failure, Recovery, Rollback, Compensation, Supersession (final)

Rollback is decomposed into six possible intended results (reversal of operations, representation restoration, actual-state restoration, resembling-state creation, standing reinstatement, or another stated result) — never interchangeable, and a claimed "rollback" must specify which. **Rollback never erases the historical migration attempt. Restored content never by itself establishes restored identity, standing, or historical equivalence.** Compensation is distinct from rollback — it produces a new valid, non-identical state without claiming restoration.

### 9.9 Coexistence, Cutover, Decommissioning

No single global "current version" or universally linear transition is assumed. Migration completion, coexistence, and decommissioning are three independently determined facts.

### 9.10 Complete Object-Role Matrix (final, logical-possibility framing)

Sixteen object categories (ecosystem entities, Release identities, Release/resolved/realized compositions, artifacts, representations, configuration, persisted state, schemas, evidence records, governance records, compatibility assessments, acceptance decision, acceptance decision record — split from the decision itself, runtime state, Target-supplied realization inputs) assessed across eight roles (migration subject, source input, destination requirement, transformation dependency, evidence, decision input, invariant, outside scope) using strict Yes/No/Conditional values reflecting logical possibility, never typicality. **Target-supplied realization inputs are explicitly outside AI-DOS Product migration scope**, conditionally in-scope only for Target-level realization migration. **Migrating a record or representation never establishes that the entity, decision, or assessment it represents has changed.**

### 9.11 Stress-Test Findings (condensed — 30 tests, final corrected form)

| # | Case | Principle established |
|---|---|---|
| 1 | Release change requires no migration | Absence of necessity never implies absence of any voluntary migration proposal/attempt |
| 2 | Compatible pair still needs transformation | Compatibility never eliminates migration need |
| 3 | Incompatible pair has a valid path | A path's existence never proves compatibility, authorization, or success |
| 4 | Necessity known, authorization absent | Necessity ≠ authorization |
| 5 | Authorized, preconditions unmet | Authorization ≠ readiness |
| 6 | Declared source ≠ observed source | Record-level conflict, neither privileged |
| 7 | Actual source state cannot be determined | Genuine uncertainty representable without fabrication |
| 8 | Multiple valid destination states | Destination need not be unique |
| 9 | Destination requirements change mid-execution | Requirement content is time-indexed |
| 10 | Source state changes mid-execution | Flagged concurrency/consistency risk |
| 11 | Zero exit code, invariant violated | Technical completion ≠ invariant preservation |
| 12 | Bytes match, semantic correctness undetermined | Byte matching ≠ semantic correctness |
| 13 | Bytes differ, identity may persist | Byte inequality ≠ identity discontinuity; kept out of the Applicability field specifically |
| 14 | Technically succeeds, unaccepted | Technical success ≠ acceptance |
| 15 | Accepted despite incomplete evidence | Acceptance decision ≠ acceptance standing absent an effectiveness rule |
| 16 | Partial commit before failure | Partial commitment is its own representable status |
| 17 | Interrupted, resumed from checkpoint | Checkpoint establishes a progress basis, not automatically a persistent record; resume-identity is policy |
| 18 | Failed attempt retried from beginning | New, independently assessed attempt; failed attempt's history preserved |
| 19 | Same plan, two executions | Plan identity ≠ attempt identity ≠ execution identity |
| 20 | Claimed idempotent, different results | Idempotence claims require separate empirical verification |
| 21 | Two concurrent attempts, same source | Genuine concurrency-control concern, flagged |
| 22 | Rollback restores bytes, not necessarily actual state | Byte-level rollback ≠ actual-state/identity restoration |
| 23 | Rollback operational success, standing not reinstated | Operational rollback ≠ standing reinstatement; reported under Current Standing, not Acceptance |
| 24 | Irreversible transformation, information loss | Reversibility never assumed universal; loss is a property/result, not automatically an invariant-status finding |
| 25 | Compensation produces valid, non-identical state | Compensation ≠ semantic conformance by itself |
| 26 | Coexistence for different consumers | No single global current state required; neither state's standing/acceptance/applicability is thereby established |
| 27 | Later success supersedes reliance on earlier failure | Earlier failure's history preserved; neither acceptance nor standing invented from stated success |
| 28 | Migration record corrected, execution unchanged/undetermined | Record correction establishes the correction event only |
| 29 | Target-supplied input changes output, not AI-DOS invariant truth | Reused from STEP 4 directly |
| 30 | Completion/standing/ordering cannot be determined | Explicitly undetermined, no fabrication |

---

## 10. Consolidated Logical Necessities (cross-step)

- Layers 2 (actual event/relation/fact) and 3–7 (proposition, assertion, record, decision, standing) are always conceptually distinct; a record can misrepresent what it records by definition.
- Nothing that happens later can retroactively alter an earlier actual event or the historical fact that an earlier act occurred.
- Record fidelity (did the record accurately capture what was asserted/observed) is always independent of proposition truth (was what was asserted/observed actually correct).
- Missing evidence entails neither the truth nor the falsity of the underlying matter.
- Multiple, separately trackable temporal meanings are required whenever they actually differ — never a mandate for universal physical multi-timestamp storage.
- Partial ordering must always be representable without being forced into a total order.
- A copy or reconstruction is always distinct, at minimum at the physical/representation level, from its original; logical record identity is a further, policy-dependent question.
- Verified cryptographic/provenance mechanisms establish only narrowly specified technical properties under stated assumptions — never proposition truth, standing, completeness, or correctness.
- Decisions (acceptance, revocation, authorization, and others) are always governance acts, never truth-making acts, and never establish standing without their own applicable effectiveness rule.
- Historical standing and current standing are always distinct and may diverge without contradiction; standing and applicability are likewise always distinct Layer-7 projections.
- Deletion changes record availability and may destroy traceability; it never alters the underlying historical event.
- Byte/representation equality never establishes identity or semantic continuity; inequality never establishes discontinuity.
- A migration path's existence never itself establishes compatibility, authorization, or success. A migration undertaking never requires successful realization to qualify as migration.
- Compatibility is always a contextual relation, never an intrinsic property; it never automatically determines migration eligibility, and no compatibility state (positive, negative, conditional, partial, unknown, undetermined) determines eligibility by itself.
- No numbering scheme was used or required to explain any accepted model in STEP 1–6.
- Unsupported facts are always reported as unknown, not established, or undetermined — never fabricated from declarations, records, evidence, exit status, signatures, or decisions alone.

---

## 11. Consolidated Human Governance Policy Questions (cross-step)

| Cluster | Representative open questions |
|---|---|
| Identity and continuity policy | Whether Mission/Target rechartering has a defined threshold; whether generated-instance identity is content-addressed or provenance-addressed; whether Release-candidate identity follows the same-entity, distinct-entity, or no-entity-until-acceptance model; whether resumed migration execution shares the interrupted attempt's identity |
| Historical-integrity record mechanics | Append-only vs. mutable records; whether original records must be retained; correction in place vs. linked corrective records; identifier preservation across correction/replacement; retention duration; archival and deletion precedence; redaction/disclosure standards; how many layers of correction-upon-correction are tolerated |
| Authority and acceptance | Who may define, select, assemble, declare, record, assess, accept, authorize distribution, authorize reliance, correct, revoke, or supersede, at each step; conflict-resolution precedence among records, decisions, and authorities; timestamp authority; whether acceptance may proceed despite incomplete evidence |
| Compatibility and eligibility | Whether additive-by-design changes are ever treated as universally compatibility-neutral; required evidence coverage/strength before acceptance; whether Evidence packages must use pinned rather than live citations; grandfather-clause treatment when governance policy changes out from under previously accepted Targets/Evidence |
| Release composition | Where the same-Release/different-Release threshold sits for behaviorally divergent authorized variants; whether transitive-closure pinning verification is mandatory before a "fully fixed" claim; whether flagged-incomplete composition acceptance is ever permitted; cascade aggressiveness on discovered role/provenance mismatches |
| Migration | Which changes require migration; retry-limit and resume-identity policy; checkpoint retention; coexistence duration and cutover rules; downtime tolerance; concurrency-control mechanism for parallel attempts; Target-specific migration authority boundaries; decommissioning authority and timing |
| Cross-cutting reliance/retention | Whether reliance alone ever justifies retention, or whether an explicitly adopted goal (accountability, auditability, reproducibility, dispute resolution, historical reconstruction, compliance) is always required first |

---

## 12. Consolidated Unknown / Undetermined / Unresolved Matters

- ProjectStatus's family membership and which of its seven orthogonal axes (authoring mode, source of truth, authority/effect, derivation mode, persistence, historical logging, per-field heterogeneity) apply in practice.
- Whether the Charter/Constitutive class (Mission-as-charter) is genuinely its own entity family or constitutive content within Anchor-class.
- Whether a "repoint" operation (Axis B) needs formal addition to any future operation vocabulary beyond this research corpus.
- Whether Contract-class reliance-boundary timing in practice supports a lightweight editorial-correction path.
- Whether provider-version pinning is required for reproducibility guarantees, and whether Target identity is ever legitimately charter-bound to a specific provider.
- Whether the nine (STEP 1)/eleven (STEP 2 revision)/other family models actually cover real change patterns once observed at volume — flagged throughout as empirically testable, not yet tested.
- Whether generation processes are, in practice, deterministic enough that STEP 2 stress-16-style divergence is common or rare.
- **All items in §3 (Existing Meta-Model Relationship) are unresolved by definition** — every recorded overlap or difference with M.4–M.7 remains exactly that: recorded, not reconciled.

---

## 13. Actual Blockers

**None identified within the accepted STEP 1–6 corpus itself.** Every STEP's final corrected form passed its own stability recommendation without an unresolved internal contradiction. The one standing structural matter — this corpus's substantial, unreconciled overlap with the existing `M.4`–`M.7` Meta-Models — is not a blocker to STEP 1–6's own acceptance (which Human Governance has already recorded), but **is** a blocker to any future reconciliation, amendment, or architectural-synthesis work until a dedicated reconciliation work unit is separately authorized and completed.

---

## 14. Candidate Later Responsibility Boundaries

The following are **candidates only** — named for later scoping, not proposed, authored, or approved here.

| Candidate boundary | Would draw on |
|---|---|
| A future Version Signaling step | STEP 2's Axis B/D/H (never resolved into numbering); explicit deferral throughout STEP 2–6 of any numbering, bump-rule, or channel-label decision |
| A future Compatibility Model reconciliation with M.7 | STEP 3 in full, especially the fifteen-dimension model and the explicit rejection of breaking/non-breaking as the sole model |
| A future Historical Integrity / record-mechanics Standard | STEP 5 in full, especially §8.5 (Historical Operations Taxonomy) and §11 record-mechanics policy questions |
| A future Migration architecture / tooling RFC | STEP 6 in full, especially §9.6 (execution/atomicity) and §9.8 (rollback/recovery/compensation) |
| A future Release Composition / manifest Standard | STEP 4 in full, especially §7.4 (reference/binding model) and §7.8 (completeness dimensions) |
| A future Capability/Provider registration Standard | STEP 1 §4.3's capability decomposition and Realization-class model |
| A future reconciliation work unit against M.4–M.7 | §3 of this baseline in its entirety |

None of the above is scoped, sequenced, or authorized by this baseline. Their sequencing, if any, is a Human Governance decision.

---

## 15. Closing Statement

This baseline consolidates STEP 1 through STEP 6 of the standalone AI-DOS Product Versioning Architecture Research Program, including every accepted correction and errata pass, as **non-normative discovery evidence**. It preserves the corpus's internal distinctions (entity/state/event/proposition/assertion/record/evidence/decision/standing/applicability), its logical necessities separately from its policy questions, its unknowns as unknowns, and its relationship to the existing `M.4`–`M.7` Meta-Models as explicitly unreconciled. **A later, separately authorized, bounded reconciliation work unit is required before any conclusion recorded here may amend, extend, or become part of the canonical Meta family, a Standard, or an RFC.** STEP 7 has not been opened by this document and is not opened by its creation.

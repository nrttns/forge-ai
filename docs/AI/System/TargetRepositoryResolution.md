# Target Repository Resolution

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.TARGET-REPOSITORY-RESOLUTION` |
| Version | `3.2.0-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI/System/SystemLayer.md` |
| Scope | Identification and validation of the invoked Target Repository boundary. |
| Inputs | Provider Invocation Contract; Invocation Context; supplied Target identity and repository declarations. |
| Outputs | Target Repository Resolution Result; resolved Target identity; resource references; blockers. |

## 1. Purpose

Target Repository Resolution identifies the Target Project selected by the invocation, validates that the supplied repository boundary is coherent, and produces the resolution result consumed by Boot Sequence.

It does not load the complete execution context, rank authorities, select work, authorize mutation, or infer Forge AI paths.

## 2. Responsibilities

This component shall:

1. identify the invoked Target Repository from explicit invocation evidence;
2. resolve the Target provider contract and declared Target resources;
3. validate repository existence, identity, accessibility, and declaration coherence;
4. preserve Target-owned paths and truth without importing them into AI-DOS product truth;
5. return either one unambiguous resolution result or a blocker.

## 3. Minimum Declaration Coherence Criteria


### 3.0 Deterministic Declaration Resolution Profile

Target Repository Resolution shall evaluate declaration coherence through the structural profile below before applying the category-specific criteria in Sections 3.1 through 3.6. The profile defines recognition and result mechanics only; it does not change the required information, blocker conditions, or success evidence for any category.

#### 3.0.1 Exact Profile Marker

A declaration set is recognized only when it contains the exact Markdown heading:

```markdown
## AI-DOS Target Declaration Profile
```

The heading text must match exactly, including capitalization and hyphenation. Text before or after that heading may provide Target-owned context, but it does not satisfy a declaration category unless it appears inside the required structures defined in this profile.

#### 3.0.2 Supported Markdown Structures

Only the following Markdown structures are supported for declaration recognition:

1. the exact profile heading in Section 3.0.1;
2. the exact Target-authored category headings listed in Section 3.0.3;
3. one pipe table immediately following each exact Target-authored category heading, with no intervening non-blank content, and with the exact header row required by that category;
4. ordinary Markdown link text inside table cells only in the form `[label](relative/path.md#optional-heading-anchor)`, where `label` is non-empty text and the link target is a repository-relative Markdown path that normalizes inside the resolved Target Repository boundary.

Inline declarations are not allowed. Cross-file references are allowed only through the ordinary Markdown link form above, only inside a supported table cell, and only to another Markdown file inside the resolved Target Repository boundary. A cross-file target may provide declaration evidence only if the referenced file also contains the exact profile heading and supported structures required by this section. Fenced blocks are not supported declaration structures.

Any attempted declaration outside the supported structures above, including bullets, prose paragraphs, inferred headings, code comments, front matter, HTML comments, YAML, JSON, TOML, XML, fenced code blocks, or unconstrained text, shall produce an `unsupported-syntax` blocker for the affected category when it is presented as declaration evidence. Unsupported syntax is an existing blocker condition within this resolution profile, not an additional declaration-coherence category.

#### 3.0.3 Exact Category Headings and Required Fields

Each Target-authored declaration category is recognized only by the exact heading shown below, nested under the exact profile heading. Each category heading must be followed by exactly one pipe table whose header cells exactly match the listed field names in the listed order. Field types are provider-neutral specification types, not implementation-language types. Section 3.6 safe-stop behavior remains resolver-owned behavior; it is not a Target-authored declaration category and has no Target-authored heading or table.

The exact Target-authored category structures are:

- Category identifier: `target-resources`
  - Exact heading: `### target-resources`
  - Exact table header row: `| resource_id | location | purpose | precedence |`
  - Required field types: `resource_id: token`; `location: repository-relative-path`; `purpose: non-empty-text`; `precedence: integer-or-empty`
- Category identifier: `source-scope`
  - Exact heading: `### source-scope`
  - Exact table header row: `| scope_id | path | scope | precedence |`
  - Required field types: `scope_id: token`; `path: repository-relative-path`; `scope: enum(in-scope,out-of-scope)`; `precedence: integer-or-empty`
- Category identifier: `protected-areas`
  - Exact heading: `### protected-areas`
  - Exact table header row: `| area_id | path | protection | authorization_required | precedence |`
  - Required field types: `area_id: token`; `path: repository-relative-path`; `protection: enum(protected,unrestricted)`; `authorization_required: enum(true,false)`; `precedence: integer-or-empty`
- Category identifier: `validation`
  - Exact heading: `### validation`
  - Exact table header row: `| validation_id | requirement | locator | applies_to |`
  - Required field types: `validation_id: token`; `requirement: non-empty-text`; `locator: repository-relative-path-or-empty`; `applies_to: repository-relative-path-or-token`
- Category identifier: `permissions-execution-authority`
  - Exact heading: `### permissions-execution-authority`
  - Exact table header row: `| authority_id | action_class | final_authority | proceed_without_confirmation | condition |`
  - Required field types: `authority_id: token`; `action_class: token`; `final_authority: non-empty-text`; `proceed_without_confirmation: enum(true,false)`; `condition: non-empty-text`

A `token` is non-empty text containing only ASCII letters, digits, `.`, `_`, or `-`. A `repository-relative-path` is a non-empty relative path, optionally expressed as a Markdown link in the exact form allowed by Section 3.0.2, that normalizes inside the resolved Target Repository boundary. `repository-relative-path-or-empty` is either empty or a `repository-relative-path`. `repository-relative-path-or-token` is either a `repository-relative-path` or a `token`. `integer-or-empty` is either empty or a base-10 integer. `non-empty-text` is text with at least one non-whitespace character.

Malformed typed field values map deterministically to blocker codes as follows:

- an empty value for `token`, `repository-relative-path`, `repository-relative-path-or-token`, enum fields, or `non-empty-text` maps to `empty`; empty values are valid for `repository-relative-path-or-empty` and `integer-or-empty`;
- a value containing characters outside the `token` character set maps to `unsupported-syntax`;
- a value outside a declared enum maps to `unsupported-syntax`;
- a populated `integer-or-empty` value that is not a base-10 integer maps to `unsupported-syntax`;
- a Markdown link that does not match `[label](relative/path.md#optional-heading-anchor)` maps to `unsupported-syntax`;
- a path value that normalizes outside the resolved Target Repository boundary maps to `out-of-boundary`;
- a path value that normalizes inside the boundary but cannot be resolved to an existing referenced location maps to `unresolvable-reference`;
- a referenced location that exists but cannot be read maps to `inaccessible`.

#### 3.0.4 Recognition Behavior

Target Repository Resolution shall recognize declaration evidence by syntax and structure alone:

1. find the exact profile heading;
2. find the exact Target-authored category headings under that profile heading;
3. validate the exact required table header for each Target-authored category;
4. validate every required field value against its declared type;
5. reject any row whose cell count differs from the exact table header row for that category;
6. normalize every path field against the resolved Target Repository boundary before evaluating category success;
7. apply explicit numeric precedence only where the required Target-authored category table provides a `precedence` field, including the `target-resources` table;
8. return success evidence or blocker evidence using the result shapes in Section 3.0.6.

If the exact profile heading is absent, every Target-authored category result is a `missing` blocker and the resolver-owned safe-stop result reports the combined missing-profile blocker. If a Target-authored category heading or required table is absent, that category result is a `missing` blocker. If a Target-authored category heading is followed by any attempted declaration structure other than the required table, that category result is an `unsupported-syntax` blocker. If a required field is empty, malformed, inaccessible, outside the resolved Target Repository boundary, or points to an unresolvable reference, the affected category result is the corresponding blocker from the mapping in Section 3.0.3. Text that resembles a declaration but does not use the exact structures in this profile is not interpreted and cannot satisfy any category.

Precedence fields are evaluated deterministically after field validation and path normalization:

1. rows are grouped by category and normalized location or path, as applicable to the category;
2. an empty `precedence` value is lower priority than any populated integer value;
3. populated integer precedence values are ordered from lowest number to highest priority, so `0` outranks `1`, and `1` outranks `2`;
4. when all rows in a group have empty `precedence`, the group has no stated precedence and directly incompatible non-equivalent rows for the same normalized location or path produce exactly one deterministic outcome: `blocker_code: conflicting`;
5. when exactly one row has the highest priority, that row supplies the resolved evidence entry for the group;
6. when two or more rows tie for highest priority and are equivalent after normalization, one resolved evidence entry is emitted for the group with duplicate locators preserved in detail;
7. when two or more rows tie for highest priority and are non-equivalent after normalization, the category result is a `conflicting` blocker.

#### 3.0.5 Blocker Codes

Permitted blocker codes are limited to the already-authorized failure conditions below:

- `missing`
- `inaccessible`
- `empty`
- `ambiguous`
- `conflicting`
- `unsupported-syntax`
- `unresolvable-reference`
- `out-of-boundary`

No other blocker code is valid for this profile. `conflicting` applies only to direct incompatible declarations for the same normalized location or category. `ambiguous` applies only when multiple interpretations remain after structural resolution without direct incompatible assignments. This classification deterministically represents the existing Section 3.1 blocker condition for an ambiguous authoritative resource set and does not change the semantics of Section 3.1. Section 3.6 safe-stop behavior is produced by the resolver from these blocker codes and from the success or blocker outcomes of Sections 3.1 through 3.5; a Target-authored `safe-stop-behavior` heading or table must not be recognized as declaration evidence.

#### 3.0.6 Evidence Shapes

Category-level result shape:

| Field | Type | Required behavior |
|:---|:---|:---|
| `category_identifier` | enum(`target-resources`,`source-scope`,`protected-areas`,`validation`,`permissions-execution-authority`,`safe-stop-behavior`) | Identifies exactly one existing declaration-coherence category. |
| `outcome` | enum(`success`,`blocker`) | Contains no third outcome. |
| `declaration_locator` | repository-relative-path plus heading anchor or `resolver-owned` | Identifies the exact supported Markdown structure used for a Target-authored category, the nearest inspected locator when blocked before Target-authored category recognition, or `resolver-owned` for the Section 3.6 safe-stop result. |
| `resolved_evidence_entries` | list of records | Required and non-empty when `outcome` is `success`; empty when `outcome` is `blocker`. For Target-authored categories, each record uses the field names and value types required for the category in Section 3.0.3 after path normalization. For the resolver-owned Section 3.6 result, success uses exactly one entry with `condition: enum(none)`, `behavior: enum(no-blocker)`, and `detail: non-empty-text`; blocker follows the category-level blocker rule by leaving this list empty and placing detected safe-stop conditions in `blocker_detail`. |
| `blocker_code` | enum listed in Section 3.0.5 or empty | Empty when `outcome` is `success`; required when `outcome` is `blocker`. |
| `blocker_detail` | non-empty-text or empty | Empty when `outcome` is `success`; required when `outcome` is `blocker` and must identify the failed required structure, field, path, or condition. |

Combined result shape:

| Field | Type | Required behavior |
|:---|:---|:---|
| `overall_outcome` | enum(`success`,`blocker`) | `success` only when every category result outcome is `success`; otherwise `blocker`. |
| `category_results` | fixed list of category-level result records | Contains exactly one result for each existing category identifier: `target-resources`, `source-scope`, `protected-areas`, `validation`, `permissions-execution-authority`, and resolver-owned `safe-stop-behavior`, with no duplicates and no omissions. |
| `blocker_count` | integer | Count of category results whose `outcome` is `blocker`. |
| `summary` | non-empty-text | Deterministic summary of the overall outcome and blocker count. |

The resolver-owned `safe-stop-behavior` category result is constructed after the five Target-authored category results are known:

1. if all five Target-authored category results are `success`, the safe-stop result is `success`, `declaration_locator` is `resolver-owned`, `resolved_evidence_entries` contains exactly one `none` / `no-blocker` entry, and `blocker_code` and `blocker_detail` are empty;
2. if any Target-authored category result is `blocker`, the safe-stop result is `blocker`, `declaration_locator` is `resolver-owned`, `resolved_evidence_entries` is empty, `blocker_code` is the first blocker code in category order, and `blocker_detail` summarizes the category identifiers and blocker codes that caused safe stop;
3. category order for the safe-stop summary is `target-resources`, `source-scope`, `protected-areas`, `validation`, then `permissions-execution-authority`.

Any category blocker, including the constructed resolver-owned safe-stop blocker, makes the combined result a blocker.

#### 3.0.7 Semantic-Inference Prohibition

Unconstrained prose, non-exact wording, inferred headings, repository conventions, provider preference, common project layout, file names, prior runs, and AI-DOS or Forge AI defaults must not satisfy a declaration category. The only recognized Target-authored declaration evidence is the exact Markdown profile structure defined in Sections 3.0.1 through 3.0.6; Section 3.6 safe-stop behavior is resolver-owned and is derived from resolution findings rather than authored by the Target.

### 3.1 Target Resource Declarations

- **Minimum resolvable information:** at least one identifiable, dereferenceable Target-owned resource, each with an explicit location within the Target Repository and a stated purpose.
- **Missing or incoherent:** no resource is declared; a declared resource reference does not resolve to an existing location within the Target Repository; or two declarations assign different purposes to the same location without a stated precedence. The deterministic profile represents that precedence only through the `precedence` field in the `target-resources` table.
- **Blocker condition:** return a blocker when zero resources are declared, a declared resource is unresolvable, or the authoritative resource set remains ambiguous after resolution.
- **Success evidence:** an enumerated list of resolved resource references with their declared purpose, sufficient for downstream context assembly to consume without re-deriving intent.

### 3.2 Source-Scope Declaration

- **Minimum resolvable information:** which paths within the Target Repository constitute authorized source/implementation scope, distinct from paths that are not.
- **Missing or incoherent:** no scope is declared; a declared scope reference falls outside the resolved Target Repository boundary; or declared in-scope and out-of-scope ranges overlap without a stated precedence rule.
- **Blocker condition:** return a blocker when source scope cannot be determined, references a location outside the resolved Target Repository boundary, or contains an unresolvable overlap.
- **Success evidence:** a resolved scope boundary sufficient to determine, for any given path, whether it is authorized source/implementation scope.

### 3.3 Protected-Area Declaration

- **Minimum resolvable information:** which locations require explicit authorization before modification, distinct from locations open to bounded execution.
- **Missing or incoherent:** no protected-area declaration exists; a declared protected area cannot be located within the Target Repository; or a location is simultaneously declared protected and unrestricted without a stated precedence.
- **Blocker condition:** return a blocker when protected-area declarations are entirely absent, unresolvable, or self-contradictory such that whether a given location is protected cannot be determined.
- **Success evidence:** a resolved set of protected-area boundaries sufficient for an Execution Provider to test a candidate change location against before acting.

### 3.4 Validation Declaration

- **Minimum resolvable information:** what constitutes evidence-backed verification of a change within the Target Repository (for example, declared checks or acceptance conditions it recognizes as authoritative).
- **Missing or incoherent:** no validation declaration exists, or a declared validation reference does not resolve to a checkable requirement within the Target Repository.
- **Blocker condition:** return a blocker when no validation declaration exists, when a declared validation reference is unresolvable, or when a requested action's validation requirements cannot be determined from the declaration.
- **Success evidence:** a resolved set of applicable validation requirements sufficient for an Execution Provider to know what evidence must be produced before completion may be reported.

### 3.5 Permissions and Execution-Authority Declaration

- **Minimum resolvable information:** who or what holds final approval authority over state transitions, protected-area changes, and completion acceptance, and under what condition an Execution Provider may proceed without further confirmation.
- **Missing or incoherent:** no approval authority is identified, or the declaration is internally inconsistent about who holds final authority for a given class of change.
- **Blocker condition:** return a blocker when execution authority cannot be resolved, or when a requested action's authorization requirement cannot be determined from the declaration.
- **Success evidence:** a resolved authority reference sufficient to determine, for a given class of action, whether the Execution Provider may proceed or must seek explicit authorization first.

### 3.6 Missing, Inaccessible, Empty, Ambiguous, or Conflicting Declaration Safe-Stop Behavior

This category governs how Target Repository Resolution treats a failure of any kind in 3.1 through 3.5:

- **Missing:** a required category above has no declaration at all.
- **Inaccessible:** a declared reference exists but cannot be read or reached within the resolution boundary.
- **Empty:** a declared reference resolves to a location with no discernible content.
- **Ambiguous:** more than one non-equivalent interpretation of a declaration remains after resolution.
- **Conflicting:** two or more declarations assign incompatible meaning to the same location or category.
- **Blocker condition:** in every one of these conditions, Target Repository Resolution shall stop and return a blocker rather than infer, default, or substitute a fallback value from any other source.
- **Success evidence:** when none of these conditions apply across 3.1 through 3.5, a combined declaration-coherence result confirming each category resolved to exactly one unambiguous, accessible, non-empty, non-conflicting value, suitable for Boot Sequence and Context Assembly to consume as-is.

## 4. Non-Ownership

This component does not own:

- Target mission, ProjectStatus, DevelopmentPhases, Roadmap, source, or live state;
- AI-DOS architecture, governance, Runtime, Engines, or Distribution;
- context assembly, authority precedence, decision selection, or execution;
- provider authorization or release authority.

## 5. Resolution Result

A successful result contains only:

- resolved Target Repository identity;
- resolved provider and Target contract references;
- applicable Target resource references;
- explicit repository boundary;
- declaration-validation evidence;
- unresolved warnings that do not invalidate identity.

The result is not Resolved Target Context by itself. Boot Sequence and Context Assembly consume it to prepare invocation context.

## 6. Safe Stop

Stop when Target identity is absent, multiple repositories remain equally valid, declarations conflict, a required path is inaccessible, or resolution would require a Forge AI fallback assumption.

## 7. Handoff

```text
Provider Invocation Contract
    ↓
Invocation Context
    ↓
Target Repository Resolution Result
    ↓
BootSequence.md
```

## 8. Validation

- one Target Repository resolved;
- no Target planning methodology prescribed;
- no Target truth copied into AI-DOS product truth;
- no execution or mutation authority inferred;
- blocker emitted for ambiguity;
- each of the six minimum declaration-coherence categories in Section 3 resolves to a blocker or to success evidence, with no third outcome.

## 9. Version History

| Version | Date | Description |
|:---|:---|:---|
| `3.1.0-draft` | 2026-07-18 | Defined the six minimum declaration-coherence categories and their blocker-or-success evidence model. |
| `3.2.0-draft` | 2026-07-18 | Added a provider-neutral deterministic Markdown-compatible declaration recognition and resolution profile for the existing six declaration-coherence categories. |

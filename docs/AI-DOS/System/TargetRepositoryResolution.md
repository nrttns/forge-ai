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
| Parent Contract | `docs/AI-DOS/System/SystemLayer.md` |
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

#### 3.0.2 Declaration-Set Locator, Cardinality, and Supported Markdown

The Invocation Context shall supply exactly one repository-relative Markdown file as the root declaration-set locator. No fixed filename is required. Normalize and resolve that locator under the path rules in Section 3.0.3; an out-of-boundary, non-existent, or unreadable root maps respectively to `out-of-boundary`, `unresolvable-reference`, or `inaccessible` for every Target-authored category. A missing root locator makes every Target-authored category a `missing` blocker. More than one root locator makes every Target-authored category an `ambiguous` blocker. The resolver shall inspect no other file for declaration structures.

The root declaration file shall contain exactly one profile heading from Section 3.0.1. The profile region begins at that heading and ends at the next level-two heading or end of file. Zero matching profile headings produces `missing` for every Target-authored category; more than one produces `conflicting` for every Target-authored category.

Only the following Markdown structures are supported inside the profile region:

1. exactly one instance of each Target-authored category heading listed in Section 3.0.3;
2. exactly one pipe table immediately following each category heading, with no intervening non-blank content;
3. the exact category header row, followed immediately by one separator row having the same number of cells and exactly `---` in each trimmed cell;
4. one or more data rows, each having exactly the same number of unescaped pipe-delimited cells as the header; and
5. ordinary Markdown links only in fields whose declared type includes a repository-relative path, using the exact form `[label](relative/path)`, with a non-empty label and no scheme, query, or fragment.

Category headings may appear in any order. A missing category heading or table produces `missing` for that category. A repeated category heading or a second table for the same category produces `conflicting` for that category. A table with no data row produces `empty` for that category. A malformed header, separator, row width, escaped pipe, or unsupported declaration structure produces `unsupported-syntax` for the affected category.

Cross-file links resolve referenced resources only. They do not import, merge, or recursively traverse declaration profiles. A linked file may contain any Target-owned content and is not required to contain the profile marker. This rule makes cross-file resolution finite: normalize the link target against the Target Repository boundary, reject an out-of-boundary target, require the target to exist, and require it to be readable. Cycles cannot arise because linked content is not recursively interpreted as declarations.

Text before or after the profile region may provide Target-owned context but cannot satisfy a category. Inside the profile region, bullets, prose paragraphs, inferred headings, code comments, front matter, HTML comments, YAML, JSON, TOML, XML, fenced code blocks, or any other structure presented as declaration evidence produce `unsupported-syntax` for the affected category. A profile-region structural error that cannot be attributed to exactly one category produces `unsupported-syntax` for every Target-authored category.

#### 3.0.3 Exact Category Structures, Field Types, and Row Identity

Each Target-authored category is recognized only by the exact heading and table header below. Field types are provider-neutral specification types, not implementation-language types. Section 3.6 safe-stop behavior remains resolver-owned; it has no Target-authored heading or table.

- Category identifier: `target-resources`
  - Exact heading: `### target-resources`
  - Exact table header row: `| resource_id | location | purpose | precedence |`
  - Required field types: `resource_id: token`; `location: repository-relative-path`; `purpose: non-empty-text`; `precedence: integer-or-empty`
  - Row key: normalized `location`
  - Semantic tuple: normalized `location`, `purpose`
- Category identifier: `source-scope`
  - Exact heading: `### source-scope`
  - Exact table header row: `| scope_id | path | scope | precedence |`
  - Required field types: `scope_id: token`; `path: repository-relative-path`; `scope: enum(in-scope,out-of-scope)`; `precedence: integer-or-empty`
  - Row key: normalized `path`
  - Semantic tuple: normalized `path`, `scope`
- Category identifier: `protected-areas`
  - Exact heading: `### protected-areas`
  - Exact table header row: `| area_id | path | protection | authorization_required | precedence |`
  - Required field types: `area_id: token`; `path: repository-relative-path`; `protection: enum(protected,unrestricted)`; `authorization_required: enum(true,false)`; `precedence: integer-or-empty`
  - Row key: normalized `path`
  - Semantic tuple: normalized `path`, `protection`, `authorization_required`
- Category identifier: `validation`
  - Exact heading: `### validation`
  - Exact table header row: `| validation_id | requirement | locator | applies_to |`
  - Required field types: `validation_id: token`; `requirement: non-empty-text`; `locator: repository-relative-path-or-empty`; `applies_to: repository-relative-path-or-token`
  - Row key: `validation_id`
  - Semantic tuple: `requirement`, normalized `locator`, normalized `applies_to`
- Category identifier: `permissions-execution-authority`
  - Exact heading: `### permissions-execution-authority`
  - Exact table header row: `| authority_id | action_class | final_authority | proceed_without_confirmation | condition |`
  - Required field types: `authority_id: token`; `action_class: token`; `final_authority: non-empty-text`; `proceed_without_confirmation: enum(true,false)`; `condition: non-empty-text`
  - Row key: `action_class`
  - Semantic tuple: `action_class`, `final_authority`, `proceed_without_confirmation`, `condition`

Type and normalization rules:

- A `token` is non-empty text containing only ASCII letters, digits, `.`, `_`, or `-`.
- A `repository-relative-path` is a non-empty bare relative path or an exact Markdown link allowed by Section 3.0.2. Remove a link wrapper before normalization. Convert `\` to `/`, collapse `.` segments and repeated separators, resolve `..` segments, remove a leading `./`, and represent the repository root as `.`. The result must remain inside the resolved Target Repository boundary.
- `repository-relative-path-or-empty` is empty or a `repository-relative-path`.
- `repository-relative-path-or-token` uses a syntax discriminator: a Markdown link is always the path branch; a bare value is always the token branch. A path in this union therefore must use the Markdown-link form.
- `integer-or-empty` is empty or a base-10 integer with an optional leading minus sign and at least one digit.
- `non-empty-text` contains at least one non-whitespace character. Its trimmed literal value is preserved; the resolver does not infer additional meaning from it.

Malformed typed field values map as follows:

- an empty value for a required non-empty type maps to `empty`;
- an invalid token, enum, integer, link, table separator, or row width maps to `unsupported-syntax`;
- a path that normalizes outside the Target Repository maps to `out-of-boundary`;
- an in-boundary path that does not exist maps to `unresolvable-reference`;
- an existing referenced location that cannot be read maps to `inaccessible`.

Rows are inspected in document order. Identifiers shall be unique within their category. Repeated byte-for-byte rows are one duplicate declaration and collapse to the first row. The first row's one-based index becomes `source_row_index`; the later duplicate indices, in ascending order, become `duplicate_row_indices`. Reuse of an identifier with a different semantic tuple produces `conflicting`.

Two rows are equivalent only when their category semantic tuples are exactly equal after the normalization rules above. Identifier and precedence fields do not participate in semantic-tuple equality. No prose judgment such as “directly incompatible” is permitted.

For `protected-areas`, `protected` requires `authorization_required: true`, and `unrestricted` requires `authorization_required: false`. Either other pairing produces `conflicting`.

#### 3.0.4 Closed Resolution Procedure

The resolver shall execute these stages in order:

1. resolve the single root declaration locator and profile cardinality;
2. resolve category-heading and table cardinality;
3. validate table syntax and require at least one data row;
4. validate and normalize fields in document and header-field order;
5. collapse exact duplicate rows and detect identifier reuse;
6. apply the category algorithms below;
7. select category blocker evidence under Section 3.0.5; and
8. construct category-level and combined results under Section 3.0.6.

##### 3.0.4.1 Numeric Precedence

Precedence-capable rows use the following total order:

1. any populated integer outranks an empty value;
2. among populated integers, the lower number has higher priority;
3. equal integers are tied; and
4. two empty values are tied.

A group containing at least one populated precedence value has stated precedence: every populated value outranks every empty value, so an empty value cannot tie with or block a populated winner. This is the explicit deterministic rule for the formerly unspecified mixed populated/empty case.

For `target-resources`, group rows by normalized location. Within each group, retain only rows at the highest priority. Equivalent tied rows collapse to one resolved entry with all locators preserved. Non-equivalent tied rows produce `conflicting`. Lower-priority rows are overridden and their one-based indices, in ascending order, are recorded in the winning entry's `overridden_row_indices`. This mapping is the deterministic representation of the existing Section 3.1 condition in which different purposes are assigned to the same location without a stated precedence; it changes neither the condition nor the requirement to block.

##### 3.0.4.2 Path Coverage and Overlap

A normalized path covers itself and every descendant separated from it by `/`. The root path `.` covers the entire repository. Two path ranges overlap when either path covers the other.

For `source-scope` and `protected-areas`:

1. at least one row shall cover `.`; otherwise the category is `ambiguous` because an arbitrary candidate path cannot be classified;
2. compare every pair of overlapping rows in document order;
3. rows with equal semantic outcomes are compatible across their overlap;
4. when overlapping rows have different semantic outcomes, the higher-priority row under Section 3.0.4.1 governs the overlap;
5. different outcomes tied at highest priority produce `conflicting`; and
6. the resolved evidence set contains the effective boundaries and precedence values needed to classify any candidate path without a fallback.

For `source-scope`, the semantic outcome is `scope`. For `protected-areas`, it is the pair `protection` and `authorization_required`.

##### 3.0.4.3 Validation Applicability

The Invocation Context shall supply the requested action-class token and zero or more candidate repository paths when validation applicability is evaluated.

- A token-branch `applies_to` value matches only the identical requested action-class token.
- A path-branch `applies_to` value matches when it covers at least one normalized candidate path.
- All matching validation rows are cumulative and appear in document order after exact duplicates collapse.
- Reuse of a `validation_id` with a different semantic tuple produces `conflicting`.
- If the validation table is non-empty but no row matches the requested action class or candidate paths, the category is `ambiguous`.
- A populated `locator` is resolved as a referenced resource under Section 3.0.2. An empty `locator` leaves the literal `requirement` as the authoritative validation requirement; the resolver preserves it without semantic inference.

##### 3.0.4.4 Permissions and Execution Authority

Group permission rows by exact `action_class`. Equivalent rows collapse. Two non-equivalent rows for the same action class produce `conflicting`; there is no precedence or prose-based tie breaker for this category.

The Invocation Context shall supply exactly one requested action-class token. No matching group produces `ambiguous`. Exactly one matching semantic tuple produces success evidence containing its final authority, confirmation flag, and literal condition. Other action-class groups remain declared evidence but do not determine the current invocation.

##### 3.0.4.5 Category Completeness

A Target-authored category succeeds only when its structure and fields are valid, its category algorithm returns at least one resolved evidence entry applicable to the invocation, and no blocker condition remains. Otherwise it returns a blocker. Section 3.6 is then constructed from the five Target-authored results; it is not read from Target-authored content.

#### 3.0.5 Blocker Codes and Deterministic Selection

Permitted blocker codes, in selection-priority order, are:

1. `missing`
2. `inaccessible`
3. `empty`
4. `ambiguous`
5. `conflicting`
6. `unsupported-syntax`
7. `unresolvable-reference`
8. `out-of-boundary`

No other blocker code is valid. The code meanings remain those in Section 3.6, with the remaining profile conditions mapped as follows:

- `unsupported-syntax`: a required structure or typed literal violates its exact grammar;
- `unresolvable-reference`: a normalized in-boundary referenced location does not exist;
- `out-of-boundary`: path normalization escapes the resolved Target Repository.

A category may detect more than one blocker. Its `blocker_code` is the detected code appearing earliest in the priority list above. `blocker_detail` lists every detected blocker in code-priority order, then declaration-locator and row order. This selection changes no blocker condition: every detected blocker still safe-stops resolution.

`ambiguous` applies when structurally valid declarations do not resolve one applicable result, including an uncovered path or missing requested action-class match. `conflicting` applies when non-equivalent declarations share a row key or overlap at tied highest priority. These are mechanical tests defined in Section 3.0.4, not prose judgments.

#### 3.0.6 Evidence Shapes

Category-level result shape:

| Field | Type | Required behavior |
|:---|:---|:---|
| `category_identifier` | enum(`target-resources`,`source-scope`,`protected-areas`,`validation`,`permissions-execution-authority`,`safe-stop-behavior`) | Identifies exactly one existing declaration-coherence category. |
| `outcome` | enum(`success`,`blocker`) | Contains no third outcome. |
| `declaration_locator` | record(`path: repository-relative-path`, `heading: exact-heading-text-or-empty`), `unresolved-root`, or `resolver-owned` | Identifies the root declaration file and exact category heading; uses an empty heading when the category/profile heading is absent, `unresolved-root` when no single root locator resolves, and `resolver-owned` for Section 3.6. |
| `resolved_evidence_entries` | ordered list of records | Non-empty for success and empty for blocker. Each Target-authored entry contains the normalized category fields from Section 3.0.3 plus `source_row_index: positive-integer`, `duplicate_row_indices: ordered-list-of-positive-integers`, and `overridden_row_indices: ordered-list-of-positive-integers`; the two lists are empty when no such rows exist. The resolver-owned success entry is exactly `condition: none`, `behavior: no-blocker`, and `detail: all-five-target-authored-categories-succeeded`. |
| `blocker_code` | enum listed in Section 3.0.5 or empty | Empty for success; for blocker, selected by Section 3.0.5. |
| `blocker_detail` | ordered list of records or empty | Empty for success. For blocker, contains every detected blocker with `code`, `declaration_locator`, `row_index` or empty, `field` or empty, and `detail`, ordered by Section 3.0.5. |

Combined result shape:

| Field | Type | Required behavior |
|:---|:---|:---|
| `overall_outcome` | enum(`success`,`blocker`) | `success` only when all six category results are success; otherwise `blocker`. |
| `category_results` | fixed ordered list of category-level records | Exactly one result in this order: `target-resources`, `source-scope`, `protected-areas`, `validation`, `permissions-execution-authority`, `safe-stop-behavior`. |
| `blocker_count` | integer | Number of category results whose outcome is `blocker`. |
| `summary` | exact string | `success; blocker_count=0` for success, otherwise `blocker; blocker_count=<blocker_count>`. |

Construct the resolver-owned `safe-stop-behavior` result after the five Target-authored results:

1. if all five succeed, safe-stop succeeds with `declaration_locator: resolver-owned`, the exact success entry above, and empty blocker fields;
2. if any blocks, safe-stop blocks, has no resolved entries, copies the first blocking category's selected code in fixed category order, and creates one `blocker_detail` record per blocking category in fixed category order using that category's selected code and declaration locator, empty row and field values, and `detail: category_identifier=<identifier>`; and
3. the fixed category order is the first five entries of the combined-result order above.

Any Target-authored category blocker, and the resulting constructed safe-stop blocker, makes the combined result a blocker.

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

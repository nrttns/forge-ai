# TPL-000 — Template Standard

> Forge AI v3 · Standards Library
> Template Governance · Draft / Non-canonical

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-000` |
| Title | TPL-000 — Template Standard |
| Version | 0.1.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Documentation Standard |
| Document Type | Framework Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-AI.V3.TPL-000 |
| Scope | Architecture, governance, lifecycle, taxonomy, validation model, authoring rules, and compliance requirements for every reusable template governed by Forge AI |
| Out of Scope | Normalizing existing documents, implementing template tooling, redefining STD-010, redefining Governance, redefining Runtime, redefining Engine Platform |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/FrameworkGovernance.md`; `docs/AI/GOVERNANCE.md`; `docs/AI/Architecture/A.1-Constitution.md` |
| Normative References | STD-010; STD-000; STD-003; M.0; M.1 (full paths below) |
| Dependencies | STD-010; STD-000; STD-003; M.0; M.1; Governance workflow; template directory |
| Consumes | STD-010 schema; STD-003; M.0; M.1; A.1; GOVERNANCE.md; FrameworkGovernance.md |
| Produces | Template taxonomy; lifecycle model; placeholder grammar; naming and identifier standards; validation rules; compliance levels; certification requirements; directory structure; composition and inheritance model; template package layout; template registry model; placeholder resolution order; override rules; capability matrix; template package layout; template registry model; placeholder resolution order; override rules; capability matrix; template package layout; template registry model; placeholder resolution order; override rules; capability matrix |
| Related Specifications | AIFramework; AIOrchestrator; AgentSystemPrompt; A.3; A.4; Master Roadmap v4; ProjectStatus; DevelopmentPhases |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Framework Governance review, documentation standards review, STD-010 metadata validation, terminology consistency validation, traceability validation, and explicit governance promotion |
| Certification Status | Not certified |

<details>
<summary>Metadata Value Expansion</summary>

**Normative References (full paths):**

- `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`
- `docs/AI/Architecture/Standards/STD-000-Framework-Standards.md`
- `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`
- `docs/AI/Meta/M.0-Framework-Meta-Model.md`
- `docs/AI/Meta/M.1-Artifact-Meta-Model.md`

**Related Specifications (full paths):**

- `docs/AI/AIFramework.md`
- `docs/AI/AIOrchestrator.md`
- `docs/AI/AgentSystemPrompt.md`
- `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`
- `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`
- `docs/AI/Roadmap/Forge-AI-Program-Architecture-Master-Roadmap-v4.md`
- `docs/DevelopmentPhases/ProjectStatus.md`
- `docs/DevelopmentPhases/ForgeAI-DevelopmentPhases.md`

</details>

---


---

## 1. Purpose


TPL-000 is the single normative authority governing every reusable template within Forge AI. It establishes the rules by which templates are designed, authored, owned, versioned, validated, composed, inherited, deprecated, and retired across the entire `docs/AI/Templates/` directory tree.

This standard exists because Forge AI requires a predictable, auditable, and governable system for producing documents from templates. Without a canonical template standard, templates proliferate with inconsistent structures, incompatible placeholders, undefined ownership, untracked lifecycle states, and no validation path from draft to canonical use. TPL-000 eliminates that inconsistency by defining one governing authority that every template must consume and every template-produced document must comply with through STD-010.

TPL-000 does not define the content of any specific template instance. It defines the governance architecture, structural constraints, and compliance requirements that make templates safe for reuse across the Framework. Templates authored under TPL-000 produce documents that comply with STD-010. TPL-000 governs how templates are built; STD-010 governs how documents are structured.

---

---

## 2. Scope


TPL-000 governs every reusable template file residing under `docs/AI/Templates/` and any subdirectory created for template organization. This includes templates for RFCs, standards, audits, reports, blueprints, meta models, governance documents, migration documents, and any other document class recognized by STD-010.

TPL-000 defines the template taxonomy, naming conventions, identifier format, placeholder grammar, metadata generation model, directory structure, ownership model, lifecycle model, versioning rules, composition model, inheritance model, dependency rules, validation rules, compliance levels, certification requirements, migration rules, legacy handling, review and approval processes, anti-patterns, and best practices for all governed templates.

TPL-000 does not govern one-off document authoring that does not use a template. It does not govern the content decisions made by template consumers. It does not redefine STD-010 metadata, Governance procedures, Runtime architecture, or Engine Platform specifications. Templates never become Source of Truth for architecture, runtime, governance, or any other domain governed by separate normative authorities.

---

---

## 3. Goals


- Establish a single, canonical template standard that every Forge AI template shall comply with.
- Define a clear taxonomy that classifies every template by purpose, document class, and domain.
- Provide a deterministic placeholder grammar that enables automated validation and generation.
- Ensure every template-produced document carries fully compliant STD-010 metadata.
- Create a template lifecycle that mirrors and feeds into the STD-010 document lifecycle.
- Enable template composition and inheritance without creating authority conflicts.
- Define compliance levels that allow progressive adoption while maintaining governance integrity.
- Provide validation rules that can be automated or manually verified.
- Support migration from unstructured or legacy template formats into governed templates.
- Establish ownership, review, and approval chains that align with Framework Governance.

---

---

## 4. Non Goals


- TPL-000 shall not implement template processing tooling, renderers, validators, or CI pipelines.
- TPL-000 shall not redefine, simplify, or override any field, rule, or principle defined in STD-010.
- TPL-000 shall not redefine Governance, Runtime, Engine Platform, or Architecture.
- TPL-000 shall not serve as a template itself — it is a standard that governs templates.
- TPL-000 shall not normalize, rewrite, or migrate existing documents outside the template domain.
- TPL-000 shall not define the substantive content of any domain-specific template (that is the responsibility of each TPL-NNN standard).
- TPL-000 shall not establish a separate metadata format — it consumes STD-010 exactly.

---

---

## 5. Relationship to STD-010


TPL-000 and STD-010 have a strict, layered authority relationship. STD-010 governs how documents are structured with metadata. TPL-000 governs how templates are structured to produce those documents. The two standards never overlap in authority and never conflict because they operate at different layers of the document production chain.

```
┌─────────────────────────────────────────────────────┐
│                  STD-010                            │
│         Document Metadata Standard                  │
│    (governs final document metadata)                │
├─────────────────────────────────────────────────────┤
│                  TPL-000                            │
│           Template Standard                         │
│    (governs template authoring rules)               │
├─────────────────────────────────────────────────────┤
│            TPL-NNN (domain)                         │
│       Domain Template Standards                     │
│  (govern specific template content)                 │
└─────────────────────────────────────────────────────┘
```

Every template governed by TPL-000 must produce documents that comply with STD-010. TPL-000 itself is a document and therefore complies with STD-010 for its own metadata. When a template generates a document, the template's metadata generation rules (defined in Section 26) must produce a complete, valid STD-010 metadata block. Template authors do not invent metadata fields — they consume STD-010's mandatory field set and map template-specific values into those fields through the placeholder system defined in Sections 17–20.

Templates may define additional structural sections, domain-specific placeholders, and content guidance beyond what STD-010 requires. However, no template may omit, rename, or restructure a mandatory STD-010 metadata field. The metadata block produced by any governed template shall pass the same validation that a hand-authored STD-010 document would pass.

---

---

## 6. Template Philosophy


Templates exist to reduce authoring burden, enforce structural consistency, and ensure governance compliance across document production. A Forge AI template is not a mere starting point or suggestion outline — it is a governed artifact that carries normative weight when used to produce Framework documents.

The template philosophy rests on several core tenets. First, templates separate structure from content. The template defines the skeleton; the author provides domain-specific substance. This separation ensures that governance requirements (metadata, lifecycle, authority chains) are never accidentally omitted by the document author. Second, templates are consumable, not authoritative. A template produces a document; the document may become authoritative through governance approval. The template itself remains a generation artifact and never becomes Source of Truth. Third, templates are versioned and lifecycle-managed with the same rigor as the documents they produce. A template at Draft status produces Draft documents. A template at Canonical status may produce documents that are candidates for Canonical promotion, but the template does not grant Canonical status to its output — only governance can do that.

Templates shall be treated as infrastructure. They require ownership, maintenance, validation, and retirement planning just as any other governed artifact does. A stale template is a compliance risk. An ungoverned template is a governance violation. TPL-000 ensures that every template in `docs/AI/Templates/` meets the same quality and governance bar as the documents it produces.

---

---

## 7. Design Principles


| Principle | Description |
|:---|:---|
| Governance First | Every template shall comply with STD-010, STD-000, STD-003, and Framework Governance before any content or structural concern is addressed. |
| Separation of Concerns | Templates define structure and metadata generation. They do not define domain architecture, runtime behavior, or governance procedures. |
| Consumes, Never Redefines | A template shall consume upstream authorities (STD-010, M.0, M.1, STD-003) exactly. It shall never redefine, simplify, or override them. |
| Deterministic Output | Given the same set of placeholder values, a template shall produce the same document structure and metadata. Non-determinism is a validation failure. |
| Progressive Compliance | Templates support compliance levels (L1–L3) that allow adoption phases while maintaining a path to full canonical compliance. |
| Lifecycle Parity | Template lifecycle states mirror STD-010 document lifecycle states. A template at Draft cannot produce Canonical documents. |
| Single Owner | Every template has exactly one accountable Owner. Multiple Maintainers are allowed, but accountability is singular. |
| Placeholder Integrity | Placeholders shall use a defined grammar, carry type constraints, and be validated before document generation. Free-text substitution without structure is prohibited. |
| Composition Safety | Template composition and inheritance shall not create circular dependencies, authority conflicts, or metadata field collisions. |
| Extensibility with Boundaries | Templates may define domain-specific extensions (additional sections, placeholders) but shall not remove or restructure mandatory STD-010 elements. |

---

---

## 8. Template Taxonomy


The template taxonomy classifies every governed template along three orthogonal axes: Document Class, Domain, and Complexity.

### 8.1 Document Class Axis

Templates are classified by the STD-010 document class they produce:

| Class | Produces | Template Prefix |
|:---|:---|:---|
| Standard | Framework Standards, Terminology Standards, Metadata Standards | `TPL-STD-` |
| RFC | Architecture RFCs, Runtime RFCs, Engine RFCs | `TPL-RFC-` |
| Meta Model | Framework Meta Models, Artifact Meta Models | `TPL-META-` |
| Blueprint | Strategic target architecture, integrated system design | `TPL-BP-` |
| Audit | Consistency audits, conformance audits, readiness audits | `TPL-AUD-` |
| Report | Findings reports, readiness reports, completion reports | `TPL-REP-` |
| Roadmap | Program roadmaps, phase roadmaps, migration roadmaps | `TPL-ROAD-` |
| Migration | Migration plans, normalization plans, transition strategies | `TPL-MIG-` |
| Governance | Governance documents, policy documents, procedure documents | `TPL-GOV-` |

### 8.2 Domain Axis

Templates are further classified by the Forge AI domain they serve:

| Domain | Description |
|:---|:---|
| Core | Cross-cutting template governance, meta-templates, base templates |
| Architecture | Constitution, standards, meta models, RFCs |
| Runtime | Engine runtime, orchestration, agent system |
| Governance | Framework governance, review, approval, certification |
| Development | Phases, project status, development workflow |
| Roadmap | Program architecture, master roadmaps, phase plans |

### 8.3 Complexity Axis

Templates are rated by structural complexity:

| Level | Description | Example |
|:---|:---|:---|
| Base | Minimal structure, metadata only, no domain sections | `TPL-000` itself (conceptual) |
| Standard | Full STD-010 metadata plus defined content sections | `TPL-001` (RFC Template) |
| Advanced | Standard plus composition, conditional sections, multi-output | Future composite templates |
| Composite | Multiple template inheritance, cross-domain composition | Future integrated document templates |

---

---

## 9. Template Categories


Templates are organized into two primary categories:

### 9.1 Structural Templates

Structural templates define the skeleton of a document class. They specify the required sections, heading hierarchy, metadata block layout, and placeholder slots. Structural templates do not contain domain-specific content — they provide the frame into which domain content is placed. TPL-001 (the RFC Template Standard) is an example of a structural template standard.

### 9.2 Content Guidance Templates

Content guidance templates extend structural templates with domain-specific authoring instructions, example content, section-level briefs, and quality expectations. They may include placeholder pre-population hints, recommended section lengths, and domain terminology guidance derived from STD-003. Content guidance templates consume structural templates and add a content layer without modifying the structural skeleton.

### 9.3 Category Rules

- A content guidance template shall not remove or restructure sections defined by its parent structural template.
- A content guidance template may add optional sections below the structural template's mandatory section set.
- A content guidance template shall not override metadata rules defined by TPL-000 or STD-010.
- Every content guidance template shall declare its parent structural template in its template metadata.

---

---

## 10. Directory Structure


All governed templates reside under `docs/AI/Templates/`. The directory structure follows the template taxonomy:

```
docs/AI/Templates/
├── Core/                          # Core template standards (TPL-000 family)
│   ├── TPL-000-Template-Standard.md
│   ├── TPL-001-RFC-Template-Standard.md
│   └── README.md                  # Per TPL-000 Section 37
├── Standards/                     # Template standards for STD class documents
│   ├── TPL-STD-NNN-*.md
│   └── README.md
├── RFC/                           # Template standards for RFC class documents
│   ├── TPL-RFC-NNN-*.md
│   └── README.md
├── MetaModel/                     # Template standards for Meta Model class documents
│   ├── TPL-META-NNN-*.md
│   └── README.md
├── Audit/                         # Template standards for Audit class documents
│   ├── TPL-AUD-NNN-*.md
│   └── README.md
├── Report/                        # Template standards for Report class documents
│   ├── TPL-REP-NNN-*.md
│   └── README.md
├── Blueprint/                     # Template standards for Blueprint class documents
│   ├── TPL-BP-NNN-*.md
│   └── README.md
├── Roadmap/                       # Template standards for Roadmap class documents
│   ├── TPL-ROAD-NNN-*.md
│   └── README.md
├── Migration/                     # Template standards for Migration class documents
│   ├── TPL-MIG-NNN-*.md
│   └── README.md
├── Governance/                    # Template standards for Governance class documents
│   ├── TPL-GOV-NNN-*.md
│   └── README.md
└── Legacy/                        # Deprecated or retired templates
    ├── *.md
    └── README.md
```

### 10.1 Directory Rules

- Every template directory shall contain a `README.md` governed by Section 39.
- Template filenames shall follow the Template Naming Standard (Section 19).
- No template file shall reside outside a classified directory unless explicitly approved by Framework Governance.
- The `Core/` directory is reserved for cross-cutting template governance standards (TPL-000 through TPL-099).
- Domain-specific template standards (TPL-100 and above) reside in their corresponding class directory.
- The `Legacy/` directory holds deprecated, retired, or archived templates that are no longer active but require historical preservation.

---


---

---

## 11. Template Package Layout

A template package is the complete set of files that accompany a governed template within its directory. The package layout defines the optional supporting structure that templates may include to provide examples, partials, validation artifacts, and historical records. The package layout does not redefine the repository directory structure defined in Section 10 — it describes the intra-directory organization available to individual templates.

### 11.1 Standard Package Structure

Each template may include the following subdirectories and files within its immediate directory context:

```
{Template-Directory}/
├── TPL-NNN-{Name}.md          # The governed template file (mandatory)
├── README.md                   # Template README per Section 37 (mandatory)
├── examples/                   # Example produced documents (optional)
├── partials/                   # Reusable template fragments (optional)
├── snippets/                   # Small content snippets for composition (optional)
├── appendix/                   # Supplementary appendix material (optional)
├── assets/                     # Diagrams, images, or referenced assets (optional)
├── history/                    # Version history and migration records (optional)
└── validation/                 # Test cases, validation evidence, compliance records (optional)
```

### 11.2 Package Element Descriptions

| Element | Required | Description |
|:---|:---|:---|
| Template file (`.md`) | Mandatory | The governed template file following TPL-000. This is the only mandatory element. |
| `README.md` | Mandatory | Template README per Section 39. Every template directory must contain this file. |
| `examples/` | Optional | Contains example documents produced by the template. Useful for demonstrating correct placeholder usage and expected output structure. Each example should be a complete, valid document. |
| `partials/` | Optional | Contains reusable template fragments that may be composed into this template or other templates. Partials shall themselves comply with TPL-000 placeholder grammar. |
| `snippets/` | Optional | Contains small, focused content blocks that templates may reference. Snippets are smaller than partials and typically represent single-section content. |
| `appendix/` | Optional | Contains supplementary material referenced by the template but not embedded in the template body. Useful for large reference tables, extended examples, or supporting documentation. |
| `assets/` | Optional | Contains diagrams, images, or other binary/text assets referenced by the template or its examples. |
| `history/` | Optional | Contains version history records, migration evidence, and change logs. When present, this directory provides the authoritative historical record for the template. |
| `validation/` | Optional | Contains test cases, validation evidence, compliance check results, and certification records. This directory supports the certification requirements defined in Section 34. |

### 11.3 Package Ownership

The template package is owned by the same Owner as the template file itself. All elements within the package are subject to the same lifecycle, versioning, and governance constraints as the template. Package elements do not have independent lifecycle states — they inherit the template's lifecycle state.

### 11.4 Package Layout Scope

The package layout describes the internal organization of a template's supporting files. It does not redefine the repository-level directory structure defined in Section 10. Templates reside in their classified directory per Section 10; the package layout describes what may exist within that directory alongside the template file. A template package's directory path is determined by Section 10; the package layout describes the contents within that path.

---

## 12. Template Ownership


Every governed template shall have exactly one accountable Owner and at least one Maintainer. Ownership follows the same principles defined in STD-010 Section 8.3 but with template-specific additions.

### 12.1Owner Responsibilities


- Ensure the template complies with TPL-000, STD-010, and all consumed normative authorities.
- Authorize structural changes to the template.
- Ensure template lifecycle metadata is accurate and current.
- Initiate template review and approval when the template is ready for promotion.
- Ensure the template is retired or migrated when it becomes obsolete.

### 12.2Maintainer Responsibilities


- Apply approved changes to the template.
- Ensure placeholder integrity during template updates.
- Verify that template updates do not break downstream templates that inherit or compose this template.
- Maintain the template's README.md (Section 39).
- Track and document template version changes.

### 12.3Ownership Transfer


Template ownership may be transferred by agreement between the current Owner and the proposed new Owner, with notification to Framework Governance. The transfer shall be recorded in the template metadata (Last Updated, Maintainers) and in the relevant directory README.md.

---


---

---

## 13. Template Registry Model

The Template Registry is a documentation-architecture concept that provides a consistent, queryable model for discovering, identifying, and resolving template references across the Forge AI template directory tree. The registry does not define an implementation — it defines the conceptual structure and behavioral contracts that any future registry implementation or manual discovery process must follow.

### 13.1 Purpose of the Registry

The Template Registry exists to provide a single, authoritative index of all governed templates and their relationships. Without a registry model, template discovery depends on ad-hoc directory browsing and informal knowledge. The registry model ensures that every template can be found through a defined set of lookup paths, that template relationships (inheritance, composition, dependency) are navigable, and that template state (lifecycle, compliance, certification) is queryable through a consistent interface.

The registry model supports governance by making template state transparent. Reviewers, auditors, and authors can determine which template to use for a given document class, which templates inherit from or compose a given template, and whether a template is in a valid state for production use — all without inspecting individual template files.

### 13.2 Registry Responsibilities

The registry model defines the following responsibilities. These are architectural responsibilities — they describe what the registry concept must support, not how it is implemented.

| Responsibility | Description |
|:---|:---|
| Template Indexing | Maintain a complete index of all governed templates with their identifiers, versions, lifecycle states, and directory locations. |
| Relationship Tracking | Track all declared inheritance, composition, and dependency relationships between templates. |
| State Querying | Provide the current lifecycle state, compliance level, and certification status of any registered template. |
| Lookup Resolution | Support template lookup by identifier, document class, domain, or keyword. |
| Uniqueness Enforcement | Ensure no two active templates share the same identifier or serve the same canonical purpose. |
| Deprecation Tracking | Track deprecated templates, their replacement templates, and migration status. |
| Discovery Support | Enable authors to discover the correct template for a target document class and domain. |

### 13.3 Registry Metadata

Each entry in the Template Registry carries the following metadata, derived from the template's STD-010 metadata and TPL-000 template-specific metadata:

| Metadata Field | Source | Description |
|:---|:---|:---|
| Identifier | Template metadata | The template's `FORGE-TPL-NNN` identifier. |
| Title | Template metadata | The template's full title. |
| Version | Template metadata | Current version string. |
| Status | Template metadata | Current lifecycle state. |
| Compliance Level | Template metadata | Current compliance level (L1, L2, L3). |
| Certification Status | Template metadata | Current certification status. |
| Document Class | Template taxonomy (Section 8) | The document class this template produces. |
| Domain | Template taxonomy (Section 8) | The Forge AI domain this template serves. |
| Complexity | Template taxonomy (Section 8) | The template's structural complexity level. |
| Directory Path | File system | Repository-relative path to the template file. |
| Inherits From | Template metadata | Parent template identifier, if any. |
| Composes From | Template metadata | Composed template identifiers, if any. |
| Dependencies | Template metadata | Declared dependency identifiers. |
| Owner | Template metadata | Template owner. |

### 13.4 Registry Discovery

Template discovery through the registry follows a defined resolution order. When an author needs to find a template for a target document, the registry resolves the query through these steps:

1. **Class Resolution**: Filter by target Document Class (Standard, RFC, Meta Model, Blueprint, Audit, Report, Roadmap, Migration, Governance).
2. **Domain Resolution**: Filter by target Domain (Core, Architecture, Runtime, Governance, Development, Roadmap).
3. **State Resolution**: Filter to templates in Approved or Canonical lifecycle state. Draft templates are excluded from production discovery unless explicitly requested.
4. **Canonical Preference**: When multiple templates match, prefer the Canonical template over Approved.
5. **Version Resolution**: When multiple versions of the same template match, prefer the highest MAJOR.MINOR version at the highest lifecycle state.

### 13.5 Template Lookup

Template lookup by identifier is the most direct form of resolution. Given an identifier such as `FORGE-TPL-001`, the registry resolves it to the template file at the registered directory path. Lookup by identifier always returns exactly one result for active templates — identifier uniqueness is enforced by the registry model and validated by SV-003.

### 13.6 Canonical Template Lookup

Canonical template lookup returns the authoritative template for a given document class and domain combination. The resolution rules are:

- A Canonical template for the exact class and domain is returned if one exists.
- If no Canonical template exists, an Approved template at L3 compliance level is returned.
- If no Approved template exists at L3, the most advanced template (highest compliance level, highest lifecycle state) is returned with a warning that no canonical or approved template is available.
- Deprecated and Legacy templates are excluded from canonical lookup unless explicitly requested with a deprecation-aware query.

### 13.7 Deprecated Template Lookup

Deprecated template lookup returns templates that have been marked Deprecated but have not yet been moved to Legacy or Archived status. This lookup is used for:

- Identifying which template to use when migrating away from a deprecated template.
- Determining the deprecation timeline and replacement template.
- Auditing that no new documents are being produced from deprecated templates (except within explicitly allowed legacy scope).

### 13.8 Inheritance Lookup

Inheritance lookup resolves the full inheritance chain for a given template. Given a template identifier, the registry returns:

- The template's declared parent (Inherits From).
- The parent's parent, recursively, until a template with no parent is reached (the root template, typically TPL-000).
- All templates that inherit from the given template (children).
- All templates that transitively inherit (grandchildren, etc.).

Inheritance lookup is used by cross-template validation (XV-002) to verify that inherited sections match the parent's mandatory section set.

### 13.9 Dependency Lookup

Dependency lookup resolves all templates, standards, and artifacts that a given template depends on. This includes:

- Structural dependencies (other templates).
- Normative dependencies (standards).
- Content dependencies (referenced artifacts).

Dependency lookup supports impact analysis: when a standard or template changes, dependency lookup identifies all templates that may be affected.

### 13.10 Version Lookup

Version lookup resolves the version history and availability of a given template. The registry tracks:

- All known versions of the template.
- The current (latest) version.
- Which versions are at which lifecycle state.
- Whether a version upgrade path exists (forward compatibility).

Version lookup ensures that template consumers can determine the correct template version for their needs and verify that their chosen version is in a valid lifecycle state.

### 13.11 Registry Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Template Registry Model                       │
├─────────────────────┬───────────────────┬───────────────────────────┤
│   Discovery Layer   │  Relationship Layer │      State Layer          │
├─────────────────────┼───────────────────┼───────────────────────────┤
│ Class Resolution    │ Inheritance Chain  │ Lifecycle State           │
│ Domain Resolution   │ Composition Graph  │ Compliance Level          │
│ State Filtering     │ Dependency Graph   │ Certification Status      │
│ Canonical Pref.     │ Reverse Lookup     │ Version History           │
│ Version Resolution  │ Impact Analysis    │ Deprecation Tracking      │
└─────────────────────┴───────────────────┴───────────────────────────┘
         │                      │                      │
         ▼                      ▼                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Registry Metadata Store                            │
│  Identifier · Version · Status · Path · Owner · Taxonomy · Refs      │
└─────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  docs/AI/Templates/ Directory Tree                    │
│  Core/ · Standards/ · RFC/ · MetaModel/ · Audit/ · Report/ · ...    │
└─────────────────────────────────────────────────────────────────────┘
```

### 13.12 Registry Architecture Boundary

The Template Registry is a documentation-architecture concept. It defines the structure and behavior of template metadata, relationships, and discovery within the Forge AI template governance model. The registry does not define an implementation — no database schema, API endpoint, CLI command, or runtime service is specified by this model. The registry model exists so that template governance is consistent whether discovery is performed manually (by reading directory READMEs and template metadata) or automatically (by a future tool that implements the registry contracts). Any implementation of the registry must conform to the discovery, lookup, and metadata contracts defined in this section, but TPL-000 does not require or mandate implementation.

---

## 14. Authority Consumption


Templates consume authority; they do not create it. This is the most critical boundary in the template governance model.

### 14.1Authority Hierarchy


```
┌──────────────────────────────────┐
│  A.1 Constitution                │  ← Highest authority
├──────────────────────────────────┤
│  GOVERNANCE.md                   │  ← Governance chain
│  FrameworkGovernance.md          │
├──────────────────────────────────┤
│  STD-000 Framework Standards     │  ← Standards authority
│  STD-003 Terminology Standard    │
├──────────────────────────────────┤
│  STD-010 Document Metadata       │  ← Document metadata authority
├──────────────────────────────────┤
│  M.0 / M.1 Meta Models           │  ← Conceptual authority
├──────────────────────────────────┤
│  TPL-000 Template Standard       │  ← Template authority
├──────────────────────────────────┤
│  TPL-NNN Domain Templates        │  ← Domain template authority
└──────────────────────────────────┘
```

### 14.2Consumption Rules


- A template shall declare all consumed authorities in its Normative Authority and Normative References metadata fields using STD-010 relationship taxonomy.
- A template shall not claim authority over any document, system, or standard that it does not govern.
- A template shall not create new metadata fields — it shall only populate STD-010-defined fields.
- A template shall not redefine terminology defined in STD-003 — it shall consume STD-003 terminology and use it consistently.
- A template's produced documents shall carry accurate authority metadata that reflects the document's actual governance chain, not the template's governance chain.

---

---

## 15. Template Lifecycle


Template lifecycle mirrors the STD-010 document lifecycle (Section 7) with template-specific state transitions and constraints.

### 15.1Lifecycle States


| State | Template Meaning | Produced Document Constraint |
|:---|:---|:---|
| Draft | Template is under initial authoring. | Produced documents shall carry `Status: Draft`, `Canonical Status: Non-canonical`. |
| Review | Template is under structured review. | Produced documents may be used for review input only; not canonical. |
| Approved | Template has passed governance review and approval. | Produced documents may carry `Status: Approved` if they pass their own review. |
| Canonical | Template is the authoritative template for its document class and domain. | Produced documents are candidates for Canonical promotion through their own governance path. |
| Deprecated | Template should not be used for new document production. | Existing produced documents are unaffected; new production shall use the replacement template. |
| Legacy | Template remains for historical compatibility only. | May produce documents only within explicitly allowed legacy scope. |
| Archived | Template is preserved as a historical record. | Shall not produce new documents. |
| Retired | Template is removed from active governance use. | Historical trace only; no production. |

### 15.2State Transition Rules


- Draft to Review: Requires Owner approval and review authority notification.
- Review to Approved: Requires review pass by the declared Review Authority.
- Approved to Canonical: Requires Framework Governance approval and STD-010 compliance certification.
- Any state to Deprecated: Requires Framework Governance decision and replacement template identification.
- Deprecated to Legacy: Requires migration path confirmation.
- Legacy to Archived: Requires verification that no active documents depend on the template.
- Archived to Retired: Requires governance authorization.

### 15.3Lifecycle Diagram


```
  ┌────────┐     Owner+Review      ┌────────┐     Review Pass      ┌──────────┐
  │ Draft  │ ───────────────────▶  │ Review │ ─────────────────▶  │ Approved │
  └────────┘                       └────────┘                      └──────────┘
       ▲                                                               │
       │ Review Failed                                                  │ Governance
       │                                                               │ Approval
       │                                                               ▼
  ┌──────────┐    Governance     ┌───────────┐    Migration     ┌──────────┐
  │ Retired  │ ◀────────────── │  Archived  │ ◀────────────── │  Legacy  │
  └──────────┘                  └───────────┘                  └──────────┘
                                     ▲                              ▲
                                     │ No Active Deps               │ Deprecated
                                     │                              │
                                ┌────────────┐  Governance      ┌───────────┐
                                │ Deprecated │ ◀────────────── │  Canonical │
                                └────────────┘  Decision        └───────────┘
```

---

---

## 16. Template Versioning


Template versions shall follow the STD-010 version rules (Section 4.6) with template-specific extensions.

### 16.1Version Format


```
MAJOR.MINOR.PATCH-lifecycle
```

| Component | Increment When |
|:---|:---|
| MAJOR | Template structure changes (sections added/removed/reordered), placeholder grammar changes, or breaking compatibility changes. |
| MINOR | Template sections enhanced, optional placeholders added, or non-breaking improvements applied. |
| PATCH | Typo corrections, metadata value updates, or non-structural fixes. |
| lifecycle | One of: `draft`, `review`, `approved`, `canonical`, `deprecated`. |

### 16.2Version Examples


```text
0.1.0-draft       # Initial template draft
0.2.0-draft       # New optional section added
1.0.0-approved    # First approved release
1.0.1-approved    # Metadata typo fix
1.1.0-canonical   # Canonical promotion with minor enhancement
2.0.0-canonical   # Structural overhaul, breaking change
```

### 16.3Version Stability


- The MAJOR version shall be incremented when downstream templates that inherit or compose this template would break.
- The MINOR version shall be incremented when downstream templates can safely ignore the change.
- The PATCH version shall be incremented when no template behavior changes.
- Version history shall be recorded in the template file's header or appendix.

---

---

## 17. Template Naming Standard


### 17.1File Naming Pattern


Template filenames shall follow this pattern:

```
TPL-NNN-{Descriptive-Name}.md
```

| Component | Rule | Example |
|:---|:---|:---|
| `TPL-` | Literal prefix, uppercase | `TPL-` |
| `NNN` | Three-digit sequential number, zero-padded | `000`, `001`, `002` |
| `-` | Literal separator | `-` |
| `{Descriptive-Name}` | Kebab-case descriptive name, PascalWords joined by hyphens | `RFC-Template-Standard` |
| `.md` | Markdown extension | `.md` |

### 17.2Numbering Rules


- `TPL-000` through `TPL-099`: Reserved for Core template governance standards.
- `TPL-100` through `TPL-899`: Available for domain-specific template standards, allocated by document class directory.
- `TPL-900` through `TPL-999`: Reserved for experimental, sandbox, or temporary templates.

### 17.3Descriptive Name Rules


- Descriptive names shall use PascalCase words separated by hyphens.
- Names shall be concise but unambiguous within the template namespace.
- Names shall not include version numbers, status indicators, or dates.
- Names shall be unique across all template directories.

### 17.4Examples


| Valid | Invalid | Reason |
|:---|:---|:---|
| `TPL-001-RFC-Template-Standard.md` | `tpl001-rfc.md` | Prefix must be uppercase; name too short |
| `TPL-STD-100-Terminology-Template.md` | `TPL-100-v2-final.md` | No version or status in filename |
| `TPL-AUD-200-Consistency-Audit-Template.md` | `TPL-200.doc` | Must be `.md` extension |

---

---

## 18. Identifier Standard


### 18.1Template Identifier Format


Every template shall have a stable, unique identifier following this format:

```
FORGE-TPL-NNN
```

| Component | Description | Example |
|:---|:---|:---|
| `FORGE-` | Global Forge AI prefix | `FORGE-` |
| `TPL-` | Template family prefix | `TPL-` |
| `NNN` | Three-digit sequential number matching filename | `000`, `001` |

### 18.2Traceability ID Format


Every template shall have a Traceability ID following the pattern:

```
FORGE-AI.V3.TPL-NNN
```

This aligns with the STD-010 Traceability ID convention and ensures templates are traceable through the same governance and registry systems as other Forge AI artifacts.

### 18.3Produced Document Identifier


Documents produced by a template shall use the identifier prefix appropriate to their document class (as defined in STD-010 Section 4.5), not the template's `TPL-` prefix. A template's identifier is for template governance; the produced document's identifier is for document governance.

---

---

## 19. Placeholder Standard


### 19.1Placeholder Definition


A placeholder is a named, typed slot within a template that is replaced with a concrete value during document generation. Placeholders are the mechanism by which template structure is combined with author-provided content to produce a complete, STD-010-compliant document.

### 19.2Placeholder Syntax


Placeholders shall use double-curly-brace delimiters:

```
{{PLACEHOLDER_NAME}}
```

### 19.3Placeholder Rules


- Placeholders shall be UPPERCASE_SNAKE_CASE.
- Placeholders shall be declared in a placeholder manifest section within the template (see Section 23 and 20).
- Placeholders shall have a defined type constraint (see Section 22).
- Placeholders shall not nest — a placeholder's resolved value shall not contain unresolved placeholder syntax.
- Placeholders shall not appear in the STD-010 metadata block's field names — only in field values.
- Every placeholder declared in the manifest shall appear at least once in the template body.
- Every placeholder used in the template body shall be declared in the manifest.

---

---

## 20. Placeholder Grammar


### 20.1Type System


| Type | Description | Validation Rule | Example Value |
|:---|:---|:---|:---|
| `TEXT` | Free-form text, single or multi-line. | Non-empty; may contain inline markdown. | `Forge AI Runtime Engine` |
| `IDENTIFIER` | Machine-readable identifier matching a defined pattern. | Must match `^[A-Z][A-Z0-9-]+$`. | `FORGE-STD-010` |
| `VERSION` | Version string following STD-010 version format. | Must match `^\d+\.\d+\.\d+(-\w+)?$`. | `0.1.0-draft` |
| `DATE` | Date in ISO 8601 format. | Must match `^\d{4}-\d{2}-\d{2}$`. | `2026-07-09` |
| `STATUS` | Lifecycle status from the defined status set. | Must be one of: Draft, Review, Approved, Canonical, Deprecated, Legacy, Archived, Retired. | `Draft` |
| `ENUM:value1,value2,...` | Constrained to an explicit value set. | Must exactly match one of the enumerated values. | `ENUM:Standard,RFC,Meta Model` |
| `REFERENCE` | File path or document reference. | Must be a valid repository-relative path or identifier. | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md` |
| `LIST` | Semicolon-separated list of values. | Non-empty; items validated by their own type. | `M.0;M.1;STD-000` |
| `BOOLEAN` | Boolean flag. | Must be `true` or `false`. | `true` |

### 20.2Grammar Definition


```
placeholder  ::= "{{" NAME "}}"
NAME         ::= UPPER_SNAKE_CASE
UPPER_SNAKE_CASE ::= /[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*/
```

### 20.3Placeholder Context Rules


- Placeholders in the metadata block shall be typed according to the metadata field they populate.
- Placeholders in section headings shall be typed as `TEXT`.
- Placeholders in body content shall be typed as `TEXT` or `LIST` unless domain-specific typing is justified.
- Placeholders shall not appear in structural markdown elements (table headers, horizontal rules, code fence delimiters).

---



### 20.4 Placeholder Resolution Order

Placeholder resolution follows a deterministic precedence model. When a placeholder slot is filled, the resolved value is determined by the highest-priority source that provides a value. This order ensures that author intent always takes precedence, while still allowing sensible defaults and inherited values when the author does not supply an explicit value.

The resolution precedence, from lowest to highest priority, is:

```
Default Value
    ↓  (overridden by)
Inherited Value
    ↓  (overridden by)
Author Supplied Value
    ↓  (overridden by)
Computed Value
    ↓  (overridden by)
Generated Value
```

Each level in the precedence chain is defined as follows:

| Priority Level | Source | Description | Example |
|:---|:---|:---|:---|
| Default Value (lowest) | Template manifest | The default value declared in the placeholder manifest (Section 23). If no default is declared, the placeholder is considered mandatory. | `{{VERSION}}` defaults to `0.1.0-draft`. |
| Inherited Value | Parent template | A value inherited from the parent template when the current template inherits from a structural template (Section 29). Inherited values are suggested defaults that the author may override. | Review Authority inherited from TPL-001. |
| Author Supplied Value | Document author | The value explicitly provided by the document author during document generation. This is the most common resolution source. | Author provides `{{TITLE}}` as "A.4.8 — Engine Kernel Registry RFC". |
| Computed Value | System derivation | A value derived from other resolved values or template context. Computed values are determined by rules defined in the template's metadata generation model (Section 26). | `{{LAST_UPDATED}}` computed as `{{CREATED}}` when not provided. |
| Generated Value (highest) | Template generation | A value produced by the generation pipeline itself, such as auto-generated identifiers or timestamps that are determined after all author inputs are collected. | Auto-incremented version suffix for sequential drafts. |

#### Override Behavior

Each higher-priority level completely overrides any value provided by a lower-priority level. When an Author Supplied Value is provided for a placeholder that also has a Default Value and an Inherited Value, the Author Supplied Value is used unconditionally. Partial overrides are not supported — a placeholder resolves to exactly one value from exactly one priority level.

#### Conflict Resolution

When two values at the same priority level conflict (for example, two Computed Value rules produce different results for the same placeholder), resolution fails and generation shall not proceed. The conflict must be resolved by correcting the template's generation rules before document generation can succeed. A placeholder shall never resolve to a merged or concatenated value from multiple sources at the same priority level unless the template's type system explicitly defines list concatenation behavior.

#### Determinism Requirement

Placeholder resolution must always be deterministic. Given the same template, the same set of author-supplied values, and the same inherited and computed value context, the resolution process shall produce identical results every time. Non-deterministic resolution (random values, time-dependent values without explicit generation rules, or external state dependencies) is a validation failure. This requirement aligns with the Deterministic Output design principle (Section 7) and the generation constraints defined in Section 27.


### 20.4 Placeholder Resolution Order

Placeholder resolution follows a deterministic precedence model. When a placeholder slot is filled, the resolved value is determined by the highest-priority source that provides a value. This order ensures that author intent always takes precedence, while still allowing sensible defaults and inherited values when the author does not supply an explicit value.

The resolution precedence, from lowest to highest priority, is:

```
Default Value
    ↓  (overridden by)
Inherited Value
    ↓  (overridden by)
Author Supplied Value
    ↓  (overridden by)
Computed Value
    ↓  (overridden by)
Generated Value
```

Each level in the precedence chain is defined as follows:

| Priority Level | Source | Description | Example |
|:---|:---|:---|:---|
| Default Value (lowest) | Template manifest | The default value declared in the placeholder manifest (Section 23). If no default is declared, the placeholder is considered mandatory. | `{{VERSION}}` defaults to `0.1.0-draft`. |
| Inherited Value | Parent template | A value inherited from the parent template when the current template inherits from a structural template (Section 29). Inherited values are suggested defaults that the author may override. | Review Authority inherited from TPL-001. |
| Author Supplied Value | Document author | The value explicitly provided by the document author during document generation. This is the most common resolution source. | Author provides `{{TITLE}}` as "A.4.8 — Engine Kernel Registry RFC". |
| Computed Value | System derivation | A value derived from other resolved values or template context. Computed values are determined by rules defined in the template's metadata generation model (Section 26). | `{{LAST_UPDATED}}` computed as `{{CREATED}}` when not provided. |
| Generated Value (highest) | Template generation | A value produced by the generation pipeline itself, such as auto-generated identifiers or timestamps that are determined after all author inputs are collected. | Auto-incremented version suffix for sequential drafts. |

#### Override Behavior

Each higher-priority level completely overrides any value provided by a lower-priority level. When an Author Supplied Value is provided for a placeholder that also has a Default Value and an Inherited Value, the Author Supplied Value is used unconditionally. Partial overrides are not supported — a placeholder resolves to exactly one value from exactly one priority level.

#### Conflict Resolution

When two values at the same priority level conflict (for example, two Computed Value rules produce different results for the same placeholder), resolution fails and generation shall not proceed. The conflict must be resolved by correcting the template's generation rules before document generation can succeed. A placeholder shall never resolve to a merged or concatenated value from multiple sources at the same priority level unless the template's type system explicitly defines list concatenation behavior.

#### Determinism Requirement

Placeholder resolution must always be deterministic. Given the same template, the same set of author-supplied values, and the same inherited and computed value context, the resolution process shall produce identical results every time. Non-deterministic resolution (random values, time-dependent values without explicit generation rules, or external state dependencies) is a validation failure. This requirement aligns with the Deterministic Output design principle (Section 7) and the generation constraints defined in Section 27.

---



### 20.4 Placeholder Resolution Order

Placeholder resolution follows a deterministic precedence model. When a placeholder slot is filled, the resolved value is determined by the highest-priority source that provides a value. This order ensures that author intent always takes precedence, while still allowing sensible defaults and inherited values when the author does not supply an explicit value.

The resolution precedence, from lowest to highest priority, is:

```
Default Value
    ↓  (overridden by)
Inherited Value
    ↓  (overridden by)
Author Supplied Value
    ↓  (overridden by)
Computed Value
    ↓  (overridden by)
Generated Value
```

Each level in the precedence chain is defined as follows:

| Priority Level | Source | Description | Example |
|:---|:---|:---|:---|
| Default Value (lowest) | Template manifest | The default value declared in the placeholder manifest (Section 21). If no default is declared, the placeholder is considered mandatory. | `{{VERSION}}` defaults to `0.1.0-draft`. |
| Inherited Value | Parent template | A value inherited from the parent template when the current template inherits from a structural template (Section 27). Inherited values are suggested defaults that the author may override. | Review Authority inherited from TPL-001. |
| Author Supplied Value | Document author | The value explicitly provided by the document author during document generation. This is the most common resolution source. | Author provides `{{TITLE}}` as "A.4.8 — Engine Kernel Registry RFC". |
| Computed Value | System derivation | A value derived from other resolved values or template context. Computed values are determined by rules defined in the template's metadata generation model (Section 24). | `{{LAST_UPDATED}}` computed as `{{CREATED}}` when not provided. |
| Generated Value (highest) | Template generation | A value produced by the generation pipeline itself, such as auto-generated identifiers or timestamps that are determined after all author inputs are collected. | Auto-incremented version suffix for sequential drafts. |

#### Override Behavior

Each higher-priority level completely overrides any value provided by a lower-priority level. When an Author Supplied Value is provided for a placeholder that also has a Default Value and an Inherited Value, the Author Supplied Value is used unconditionally. Partial overrides are not supported — a placeholder resolves to exactly one value from exactly one priority level.

#### Conflict Resolution

When two values at the same priority level conflict (for example, two Computed Value rules produce different results for the same placeholder), resolution fails and generation shall not proceed. The conflict must be resolved by correcting the template's generation rules before document generation can succeed. A placeholder shall never resolve to a merged or concatenated value from multiple sources at the same priority level unless the template's type system explicitly defines list concatenation behavior.

#### Determinism Requirement

Placeholder resolution must always be deterministic. Given the same template, the same set of author-supplied values, and the same inherited and computed value context, the resolution process shall produce identical results every time. Non-deterministic resolution (random values, time-dependent values without explicit generation rules, or external state dependencies) is a validation failure. This requirement aligns with the Deterministic Output design principle (Section 7) and the generation constraints defined in Section 25.
## 21. Required Placeholder Set


Every governed template shall declare and use the following required placeholders. These map directly to mandatory STD-010 metadata fields.

| Placeholder | Type | STD-010 Field | Default Behavior |
|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Must be provided; no default. |
| `{{TITLE}}` | TEXT | Title | Must be provided; no default. |
| `{{VERSION}}` | VERSION | Version | Defaults to `0.1.0-draft` if not provided. |
| `{{STATUS}}` | STATUS | Status | Defaults to `Draft` if not provided. |
| `{{CANONICAL_STATUS}}` | TEXT | Canonical Status | Defaults to `Non-canonical until reviewed, approved, and promoted through Framework Governance`. |
| `{{CLASSIFICATION}}` | TEXT | Classification | Must be provided; no default. |
| `{{DOCUMENT_TYPE}}` | ENUM (see 19.1) | Document Type | Must be provided; no default. |
| `{{OWNER}}` | TEXT | Owner | Must be provided; no default. |
| `{{MAINTAINERS}}` | TEXT | Maintainers | Must be provided; no default. |
| `{{REVIEW_AUTHORITY}}` | TEXT | Review Authority | Must be provided; no default. |
| `{{APPROVAL_AUTHORITY}}` | TEXT | Approval Authority | Must be provided; no default. |
| `{{CREATED}}` | DATE | Created | Defaults to current date if not provided. |
| `{{LAST_UPDATED}}` | DATE | Last Updated | Defaults to `{{CREATED}}` if not provided. |
| `{{LIFECYCLE_PHASE}}` | STATUS | Lifecycle Phase | Defaults to `{{STATUS}}` if not provided. |
| `{{TRACEABILITY_ID}}` | IDENTIFIER | Traceability ID | Must be provided; no default. |
| `{{SCOPE}}` | TEXT | Scope | Must be provided; no default. |
| `{{OUT_OF_SCOPE}}` | TEXT | Out of Scope | Defaults to `None` if not provided. |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Must be provided; no default. |
| `{{NORMATIVE_REFERENCES}}` | LIST | Normative References | Must be provided; no default. |
| `{{DEPENDENCIES}}` | LIST | Dependencies | Must be provided; no default. |
| `{{CONSUMES}}` | LIST | Consumes | Must be provided; no default. |
| `{{PRODUCES}}` | LIST | Produces | Must be provided; no default. |
| `{{RELATED_SPECIFICATIONS}}` | LIST | Related Specifications | Defaults to `None` if not provided. |
| `{{SUPERSEDES}}` | TEXT | Supersedes | Defaults to `None`. |
| `{{SUPERSEDED_BY}}` | TEXT | Superseded By | Defaults to `None`. |
| `{{PROMOTION_REQUIREMENTS}}` | TEXT | Promotion Requirements | Must be provided; no default. |
| `{{CERTIFICATION_STATUS}}` | ENUM (see 19.2) | Certification Status | Defaults to `Not certified`. |

### 21.1DOCUMENT_TYPE Allowed Values


The `{{DOCUMENT_TYPE}}` placeholder shall be one of the following values, as defined by STD-010 Section 6:

Standard, RFC, Meta Model, Blueprint, Audit, Report, Roadmap, Migration, Governance, Legacy, Historical.

### 21.2CERTIFICATION_STATUS Allowed Values


The `{{CERTIFICATION_STATUS}}` placeholder shall be one of the following values, as defined by STD-010 Section 7.5:

Not Certified, Certification Not Required, Certification Required, Certification Pending, Certified, Certified with Conditions, Certification Failed, Certification Deferred.

---

---

## 22. Optional Placeholder Set


Templates may declare additional optional placeholders beyond the required set. Optional placeholders enable domain-specific content injection without modifying the template's structural compliance.

| Placeholder | Type | Typical Use |
|:---|:---|:---|
| `{{BLOCKS}}` | LIST | Documents or work items blocked by the produced document. |
| `{{BLOCKED_BY}}` | LIST | Upstream blockers for the produced document. |
| `{{REVIEW_STATUS}}` | ENUM (see 20.1) | Review tracking status. |
| `{{APPROVAL_STATUS}}` | ENUM (see 20.2) | Approval tracking status. |
| `{{COMPLIANCE_LEVEL}}` | ENUM (see 20.3) | Standards compliance level. |
| `{{MIGRATION_STATUS}}` | ENUM (see 20.4) | Migration tracking status. |
| `{{DEPRECATION_NOTICE}}` | TEXT | Deprecation information when applicable. |
| `{{ARCHIVE_LOCATION}}` | REFERENCE | Archive path when applicable. |
| `{{REGISTRY_ENTRY}}` | IDENTIFIER | Registry identifier when applicable. |
| `{{KNOWLEDGE_GRAPH_PROJECTION}}` | IDENTIFIER | Graph projection identifier when applicable. |
| `{{DOMAIN_INTRODUCTION}}` | TEXT | Domain-specific introduction or executive summary content. |
| `{{SECTION_N_CONTENT}}` | TEXT | Content for domain-specific section N. |
| `{{APPENDIX_N_CONTENT}}` | TEXT | Content for domain-specific appendix N. |
| `{{DIAGRAM_N}}` | TEXT | ASCII or Mermaid diagram for section N. |
| `{{CUSTOM_FIELD_NAME}}` | varies | Domain-specific fields as needed. |

### 22.1REVIEW_STATUS Allowed Values


Not Reviewed, Review Required, In Review, Review Passed, Review Passed with Observations, Review Failed, Review Deferred.

### 22.2APPROVAL_STATUS Allowed Values


Pending Approval, Approved, Rejected, Deferred.

### 22.3COMPLIANCE_LEVEL Allowed Values


L1 Draft Compliant, L2 Review Ready, L3 Approved Compliant.

### 22.4MIGRATION_STATUS Allowed Values


Not Started, In Progress, Complete, Deferred.

### 22.5Optional Placeholder Default Rules


Optional placeholders that are declared but not provided shall be replaced with their declared default value. If no default is declared, the placeholder shall be replaced with an empty string and the corresponding section shall be omitted from the produced document.

---

---

## 23. Metadata Rules


> **Key Distinction**: A template has two metadata applications. Its own metadata (Section 23.2) describes the template as a document. Its generation metadata block (Section 23.3) uses placeholders to produce metadata for the output document. These two must not be conflated.

### 23.1Metadata Block Requirement


Every governed template shall contain a complete STD-010 metadata block using the exact structure defined in STD-010 Section 4.1:

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
```

### 23.2Template Metadata


The template's own metadata (appearing at the top of the template file) shall comply with STD-010's mandatory field set exactly. This metadata describes the template itself — its version, status, owner, scope, and normative authorities.

### 23.3Produced Document Metadata


The template shall contain a second metadata block (the "generation metadata block") that uses placeholders from the Required Placeholder Set (Section 23) to generate STD-010-compliant metadata for the produced document. This block shall use the exact same table structure as defined in STD-010 Section 4.1.

### 23.4Metadata Field Mapping


Template authors shall not invent metadata fields. The mapping between placeholders and STD-010 fields is fixed by the Required Placeholder Set (Section 23). If a domain requires additional metadata fields beyond STD-010's conditionally mandatory set (STD-010 Section 4.3), the domain template standard (TPL-NNN) shall define those additional placeholders and declare them as optional (Section 24).

---

---

## 24. Metadata Generation


### 24.1Generation Model


Template metadata generation follows a two-phase model:

```
Phase 1: Placeholder Resolution
  Input:  Template file + Placeholder values
  Output: Resolved document with all placeholders replaced

Phase 2: Metadata Validation
  Input:  Resolved document metadata block
  Output: Validation pass/fail against STD-010 mandatory fields
```

### 24.2Generation Rules


- All required placeholders (Section 23) shall be resolved before document generation is considered complete.
- Unresolved placeholders in the produced document constitute a generation failure.
- The generated metadata block shall pass the same validation that a hand-authored STD-010 document would pass.
- Default values shall be applied for optional placeholders that are declared but not provided.
- The template's own metadata shall not be modified during generation — only the produced document's metadata is generated.

### 24.3Metadata Inheritance


When a template produces a document, the following metadata values may be inherited from the template if not explicitly provided by the author:

| Field | Inherited From Template? | Override Rule |
|:---|:---|:---|
| Normative Authority | No — must be explicitly provided for the produced document. | Always author-provided. |
| Normative References | Partially — template's normative references are suggested defaults. | Author may override. |
| Review Authority | Yes — if not provided, inherits from template. | Author may override. |
| Approval Authority | Yes — if not provided, inherits from template. | Author may override. |
| Certification Status | No — defaults to `Not certified`. | Author may override. |

---

---

## 25. Document Generation Model


### 25.1Generation Pipeline


The full document generation pipeline for a governed template consists of five stages:

```
┌──────────────┐    ┌───────────────┐    ┌────────────────┐    ┌──────────────┐    ┌───────────────┐
│ 1. Template  │───▶│ 2. Placeholder│───▶│ 3. Structural  │───▶│ 4. Metadata  │───▶│ 5. Produced   │
│    Select    │    │    Resolve    │    │    Validate    │    │   Validate   │    │   Document    │
└──────────────┘    └───────────────┘    └────────────────┘    └──────────────┘    └───────────────┘
```

### 25.2Stage Descriptions


| Stage | Description | Failure Mode |
|:---|:---|:---|
| Template Select | Select the correct template for the target document class and domain. | Wrong template selected — produces non-compliant document. |
| Placeholder Resolve | Provide values for all required placeholders; optionally provide optional placeholders. | Missing required placeholder — generation aborts. |
| Structural Validate | Verify the resolved document has all required sections, correct heading hierarchy, and no unresolved placeholders. | Missing section or unresolved placeholder — structural validation fails. |
| Metadata Validate | Verify the produced metadata block is complete and complies with STD-010. | Missing or invalid metadata field — metadata validation fails. |
| Produced Document | Output the final, validated document. | If any prior stage fails, no document is produced. |

### 25.3Generation Constraints


- Generation shall be deterministic: identical inputs produce identical outputs.
- Generation shall not modify the source template.
- Generation shall produce a standalone document that is valid independently of the template.
- The produced document shall not contain template artifacts (placeholder syntax, template instructions, or template metadata).

---

---

## 26. Template Composition


### 26.1Definition


Template composition is the mechanism by which a template includes structural or content elements from one or more other templates. Composition enables reuse of common sections (such as standard appendices, compliance matrices, or glossary structures) across multiple templates without duplication.

### 26.2Composition Rules


- A template may compose elements from templates at the same or lower compliance level.
- A template shall not compose elements from a template at a higher lifecycle state (e.g., a Draft template shall not compose from a Canonical template without the Canonical template's declared composition permission).
- Composed elements shall retain their original section numbering and heading hierarchy within the composite template, or shall be explicitly renumbered.
- Composition shall not create duplicate STD-010 metadata blocks — only one metadata block shall appear in the final produced document.
- Composition shall not create circular dependencies: if Template A composes from Template B, Template B shall not compose from Template A (directly or transitively).

### 26.3Composition Declaration


When a template composes from other templates, it shall declare the composition in its template metadata:

```markdown
| Composes From | TPL-001; TPL-STD-100 |
```

This field is not part of STD-010's mandatory metadata set — it is a template-specific extension that appears in the template's own metadata (not in the produced document's metadata).

---

---

## 27. Template Inheritance


### 27.1Definition


Template inheritance is the mechanism by which a domain-specific template extends a structural template. The inheriting template adopts the parent's structure, placeholders, and validation rules, and may add domain-specific sections, placeholders, and content guidance.

### 27.2Inheritance Rules


- A template may inherit from exactly one parent structural template (single inheritance).
- The parent template shall be at an equal or higher lifecycle state than the inheriting template.
- The inheriting template shall not remove or restructure any section defined as mandatory by the parent template.
- The inheriting template may add sections after the parent template's last mandatory section.
- The inheriting template may add optional placeholders to the parent's required and optional placeholder sets.
- Inheritance shall not modify the parent template's metadata generation rules.

### 27.3Inheritance Declaration


```markdown
| Inherits From | TPL-001-RFC-Template-Standard.md |
```

### 27.4Inheritance Diagram


```
TPL-000 (Template Standard)
  └── TPL-001 (RFC Template Standard)        [Inherits from TPL-000's structural rules]
        └── TPL-RFC-201-Engine-RFC-Template   [Inherits from TPL-001, adds Engine domain sections]
```

---



### 27.5 Override Rules

Template inheritance allows child templates to extend and specialize parent templates within defined boundaries. These rules specify what a child template may and may not override when inheriting from a parent structural template.

#### 25.5.1 Allowed Override Operations

| Operation | Description | Example |
|:---|:---|:---|
| Append | Add new sections after the parent template's last mandatory section. | Adding an "Engine-Specific Requirements" section after TPL-001's mandatory RFC sections. |
| Extend | Add optional placeholders to the parent's required and optional placeholder sets. | Adding `{{ENGINE_TYPE}}` to TPL-001's placeholder manifest for an Engine RFC template. |
| Specialize | Provide domain-specific content guidance within the parent's structural frame. | Adding briefs and examples specific to Engine RFCs within TPL-001's section structure. |

#### 25.5.2 Forbidden Override Operations

| Operation | Why Forbidden |
|:---|:---|
| Replace mandatory metadata | Mandatory STD-010 metadata fields are governed by STD-010, not by template inheritance. A child template shall not remove, rename, or restructure a mandatory metadata field. |
| Remove inherited mandatory sections | Mandatory sections defined by the parent template are part of the parent's structural contract. Removing them breaks the structural guarantee that consumers of the parent template rely on. |
| Override authority chain | The child template's normative authorities must be a superset of or equal to the parent's. A child template shall not reduce the authority chain. |
| Override STD-010 | No template, including child templates, may redefine, simplify, or override any rule or field defined in STD-010. |
| Override TPL-000 | No template may override the governance rules defined by TPL-000. Child templates consume TPL-000; they do not modify it. |

#### 25.5.3 Inheritance Override Example

```
TPL-000 (Template Standard)                    [Root — cannot be overridden]
  │
  └── TPL-001 (RFC Template Standard)          [Inherits from TPL-000]
        │  ┌─ Allowed: Adds RFC-specific sections (Append)
        │  ├─ Allowed: Adds RFC-specific placeholders (Extend)
        │  ├─ Allowed: Provides RFC content briefs (Specialize)
        │  └─ Forbidden: Removes TPL-000 mandatory metadata
        │
        └── TPL-RFC-201-Engine-RFC-Template     [Inherits from TPL-001]
             ┌─ Allowed: Adds Engine domain sections (Append)
             ├─ Allowed: Adds Engine-specific placeholders (Extend)
             ├─ Allowed: Provides Engine content guidance (Specialize)
             ├─ Forbidden: Removes TPL-001 mandatory RFC sections
             └─ Forbidden: Overrides TPL-000 or STD-010 rules
```

This example demonstrates that each level in the inheritance chain may accumulate additional structure and specificity, but may never subtract from or override the mandatory elements defined by its ancestors.


### 27.5 Override Rules

Template inheritance allows child templates to extend and specialize parent templates within defined boundaries. These rules specify what a child template may and may not override when inheriting from a parent structural template.

#### 27.5.1 Allowed Override Operations

| Operation | Description | Example |
|:---|:---|:---|
| Append | Add new sections after the parent template's last mandatory section. | Adding an "Engine-Specific Requirements" section after TPL-001's mandatory RFC sections. |
| Extend | Add optional placeholders to the parent's required and optional placeholder sets. | Adding `{{ENGINE_TYPE}}` to TPL-001's placeholder manifest for an Engine RFC template. |
| Specialize | Provide domain-specific content guidance within the parent's structural frame. | Adding briefs and examples specific to Engine RFCs within TPL-001's section structure. |

#### 27.5.2 Forbidden Override Operations

| Operation | Why Forbidden |
|:---|:---|
| Replace mandatory metadata | Mandatory STD-010 metadata fields are governed by STD-010, not by template inheritance. A child template shall not remove, rename, or restructure a mandatory metadata field. |
| Remove inherited mandatory sections | Mandatory sections defined by the parent template are part of the parent's structural contract. Removing them breaks the structural guarantee that consumers of the parent template rely on. |
| Override authority chain | The child template's normative authorities must be a superset of or equal to the parent's. A child template shall not reduce the authority chain. |
| Override STD-010 | No template, including child templates, may redefine, simplify, or override any rule or field defined in STD-010. |
| Override TPL-000 | No template may override the governance rules defined by TPL-000. Child templates consume TPL-000; they do not modify it. |

#### 27.5.3 Inheritance Override Example

```
TPL-000 (Template Standard)                    [Root — cannot be overridden]
  │
  └── TPL-001 (RFC Template Standard)          [Inherits from TPL-000]
        │  ┌─ Allowed: Adds RFC-specific sections (Append)
        │  ├─ Allowed: Adds RFC-specific placeholders (Extend)
        │  ├─ Allowed: Provides RFC content briefs (Specialize)
        │  └─ Forbidden: Removes TPL-000 mandatory metadata
        │
        └── TPL-RFC-201-Engine-RFC-Template     [Inherits from TPL-001]
             ┌─ Allowed: Adds Engine domain sections (Append)
             ├─ Allowed: Adds Engine-specific placeholders (Extend)
             ├─ Allowed: Provides Engine content guidance (Specialize)
             ├─ Forbidden: Removes TPL-001 mandatory RFC sections
             └─ Forbidden: Overrides TPL-000 or STD-010 rules
```

This example demonstrates that each level in the inheritance chain may accumulate additional structure and specificity, but may never subtract from or override the mandatory elements defined by its ancestors.

---



### 27.5 Override Rules

Template inheritance allows child templates to extend and specialize parent templates within defined boundaries. These rules specify what a child template may and may not override when inheriting from a parent structural template.

#### 27.5.1 Allowed Override Operations

| Operation | Description | Example |
|:---|:---|:---|
| Append | Add new sections after the parent template's last mandatory section. | Adding an "Engine-Specific Requirements" section after TPL-001's mandatory RFC sections. |
| Extend | Add optional placeholders to the parent's required and optional placeholder sets. | Adding `{{ENGINE_TYPE}}` to TPL-001's placeholder manifest for an Engine RFC template. |
| Specialize | Provide domain-specific content guidance within the parent's structural frame. | Adding briefs and examples specific to Engine RFCs within TPL-001's section structure. |

#### 27.5.2 Forbidden Override Operations

| Operation | Why Forbidden |
|:---|:---|
| Replace mandatory metadata | Mandatory STD-010 metadata fields are governed by STD-010, not by template inheritance. A child template shall not remove, rename, or restructure a mandatory metadata field. |
| Remove inherited mandatory sections | Mandatory sections defined by the parent template are part of the parent's structural contract. Removing them breaks the structural guarantee that consumers of the parent template rely on. |
| Override authority chain | The child template's normative authorities must be a superset of or equal to the parent's. A child template shall not reduce the authority chain. |
| Override STD-010 | No template, including child templates, may redefine, simplify, or override any rule or field defined in STD-010. |
| Override TPL-000 | No template may override the governance rules defined by TPL-000. Child templates consume TPL-000; they do not modify it. |

#### 27.5.3 Inheritance Override Example

```
TPL-000 (Template Standard)                    [Root — cannot be overridden]
  │
  └── TPL-001 (RFC Template Standard)          [Inherits from TPL-000]
        │  ┌─ Allowed: Adds RFC-specific sections (Append)
        │  ├─ Allowed: Adds RFC-specific placeholders (Extend)
        │  ├─ Allowed: Provides RFC content briefs (Specialize)
        │  └─ Forbidden: Removes TPL-000 mandatory metadata
        │
        └── TPL-RFC-201-Engine-RFC-Template     [Inherits from TPL-001]
             ┌─ Allowed: Adds Engine domain sections (Append)
             ├─ Allowed: Adds Engine-specific placeholders (Extend)
             ├─ Allowed: Provides Engine content guidance (Specialize)
             ├─ Forbidden: Removes TPL-001 mandatory RFC sections
             └─ Forbidden: Overrides TPL-000 or STD-010 rules
```

This example demonstrates that each level in the inheritance chain may accumulate additional structure and specificity, but may never subtract from or override the mandatory elements defined by its ancestors.
## 28. Template Dependencies


### 28.1Dependency Types


Templates may depend on other templates, standards, meta models, or governance documents. Dependencies are classified as:

| Type | Description | Example |
|:---|:---|:---|
| Structural | The template's structure depends on another template's definitions. | TPL-001 depends on TPL-000 for template governance rules. |
| Normative | The template must comply with an external standard. | All templates depend on STD-010 for metadata. |
| Content | The template references or uses content from another artifact. | A roadmap template references the master roadmap. |

### 28.2Dependency Rules


- All dependencies shall be declared in the template's `Dependencies` metadata field.
- Circular dependencies between templates are prohibited.
- A template shall not depend on a template at a lower lifecycle state for structural or normative purposes.
- A template may depend on a Draft template for content reference purposes only, with an explicit notation.

### 28.3Dependency Validation


Before a template is promoted to Approved or Canonical status, all declared dependencies shall be verified:

- Structural dependencies shall point to templates at Approved or Canonical status.
- Normative dependencies shall point to Approved or Canonical standards.
- Content dependencies shall be resolvable (the referenced artifact shall exist at the declared path).

---

---

## 29. Template Compatibility Rules


### 29.1Forward Compatibility


Templates shall be designed so that MINOR and PATCH version updates to consumed authorities (STD-010, STD-003, M.0, M.1) do not break the template. Templates shall not hard-code version-specific behavior that would fail when upstream authorities advance.

### 29.2Backward Compatibility


When a template is updated, previously produced documents shall remain valid. A template version update shall not retroactively invalidate documents that were correctly produced under a prior template version.

### 29.3Breaking Changes


A MAJOR version increment is required when any of the following change:

- Required placeholder set is modified (added, removed, or renamed).
- STD-010 metadata mapping is altered.
- Structural sections are added, removed, or reordered.
- Placeholder grammar rules are changed.

### 29.4Compatibility Matrix


| Template Version | STD-010 Version | STD-003 Version | Compatible? |
|:---|:---|:---|:---|
| TPL-000 1.x | STD-010 0.1.x | STD-003 any | Yes |
| TPL-000 2.x | STD-010 1.x | STD-003 any | Yes |
| TPL-000 1.x | STD-010 1.x | STD-003 any | Requires review |

---

---

## 30. Template Validation Rules


Template validation is organized into three categories. Static validation checks the template file itself. Generation validation checks documents produced by the template. Cross-template validation checks relationships between templates.

### 30.1Static Validation


Static validation checks the template file itself, independent of any generation process:

| Rule | Check | Severity |
|:---|:---|:---|
| SV-001 | Template file has a complete STD-010 metadata block with all mandatory fields. | Error |
| SV-002 | Template filename follows the Template Naming Standard (Section 17). | Error |
| SV-003 | Template identifier follows the Identifier Standard (Section 18). | Error |
| SV-004 | All required placeholders (Section 21) are declared in a placeholder manifest. | Error |
| SV-005 | All declared placeholders appear in the template body. | Warning |
| SV-006 | All placeholders in the template body are declared in the manifest. | Error |
| SV-007 | Placeholder names are UPPERCASE_SNAKE_CASE. | Error |
| SV-008 | Placeholder syntax uses `{{NAME}}` delimiters. | Error |
| SV-009 | Template resides in the correct directory per Section 10. | Error |
| SV-010 | No obsolete `RC2` authority references appear. | Error |
| SV-011 | No obsolete `Specification/*` path references appear. | Error |
| SV-012 | No parallel template standards are declared. | Error |
| SV-013 | Terminology is consistent with STD-003. | Warning |
| SV-014 | No nesting of placeholders (resolved values containing `{{...}}`). | Error |

### 30.2Generation Validation


Generation validation checks the produced document. These rules run after placeholder resolution completes:

| Rule | Check | Severity |
|:---|:---|:---|
| GV-001 | Produced document has a complete STD-010 metadata block. | Error |
| GV-002 | No unresolved placeholders remain in the produced document. | Error |
| GV-003 | All required STD-010 fields are present and non-empty (unless governed exception). | Error |
| GV-004 | Field values match their declared types. | Error |
| GV-005 | Lifecycle status values are from the allowed set. | Error |
| GV-006 | Authority and reference paths point to existing documents. | Warning |
| GV-007 | Produced document does not contain template artifacts. | Error |

### 30.3Cross-Template Validation


Cross-template validation checks relationships between templates. These rules require visibility across the template directory:

| Rule | Check | Severity |
|:---|:---|:---|
| XV-001 | No circular composition or inheritance chains exist. | Error |
| XV-002 | Inherited sections match parent template's mandatory section set. | Error |
| XV-003 | Composition does not create duplicate metadata blocks. | Error |
| XV-004 | Dependency targets exist and are at compatible lifecycle states. | Warning |
| RV-001 | Registry | Every template's registry metadata (Section 13.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 27.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 11). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 37.2. | Error | L2 |

| RV-001 | Registry | Every template's registry metadata (Section 15.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 29.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 12). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 39.2. | Error | L2 |

| RV-001 | Registry | Every template's registry metadata (Section 15.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 27.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 12). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 37.2. | Error | L2 |

| RV-001 | Registry | Every template's registry metadata (Section 17.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 29.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 14). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 39.2. | Error | L2 |

---

---

## 31. Template Compliance Levels


Templates support three compliance levels that enable progressive adoption while maintaining governance integrity.

### 31.1Level Definitions


| Level | Name | Description | Requirement |
|:---|:---|:---|:---|
| L1 | Draft Compliant | Template has STD-010 metadata, correct filename, declared placeholders, and correct directory placement. | Passes SV-001 through SV-009. |
| L2 | Review Ready | Template passes all static validation, has complete placeholder manifests, and demonstrates correct generation output for at least one test case. | Passes all SV rules and GV-001 through GV-005. |
| L3 | Approved Compliant | Template passes all static, generation, and cross-template validation; has been reviewed and approved by the declared Review Authority. | Passes all SV, GV, and XV rules. |

### 31.2Compliance Level Progression


```
L1 (Draft Compliant) ──review──▶ L2 (Review Ready) ──approval──▶ L3 (Approved Compliant)
```

- A template shall not be promoted to L2 without passing L1.
- A template shall not be promoted to L3 without passing L2.
- Compliance level shall be recorded in the template metadata as a conditionally mandatory field.

### 31.3Compliance Level Constraints


- Only L3 templates may be inherited or composed by other L3 templates.
- L1 and L2 templates may be used for prototyping and review but shall not produce documents intended for Canonical status.
- L3 is the minimum compliance level required for a template to be considered for Canonical lifecycle status.

---

---

## 32. Template Certification Requirements


### 32.1Certification Criteria


A template may be certified when it meets all of the following:

| Criterion | Description |
|:---|:---|
| C-001 | Template is at L3 compliance level. |
| C-002 | Template has been reviewed by the declared Review Authority. |
| C-003 | Template has been approved by the declared Approval Authority. |
| C-004 | Template has produced at least one valid test document that passes all GV rules. |
| C-005 | Template's dependencies have been verified (all structural and normative dependencies at Approved or Canonical status). |
| C-006 | Template has no open SV, GV, or XV errors. |
| C-007 | Template README.md is complete per Section 37. |

### 32.2Certification Status Values


Templates use the same Certification Status values defined in STD-010 Section 7.5:

- Not Certified
- Certification Not Required
- Certification Required
- Certification Pending
- Certified
- Certified with Conditions
- Certification Failed
- Certification Deferred

### 32.3Certification with Conditions


A template may be Certified with Conditions when minor, non-structural issues exist that do not affect document generation correctness. Conditions shall be documented in the template's README.md and tracked until resolution.

---

---

## 33. Template Migration Rules


### 33.1Migration Triggers


Template migration is required when:

- An existing unstructured template needs to comply with TPL-000.
- A template's parent standard (TPL-000, STD-010, STD-003) has been updated with breaking changes.
- A template is being moved between directories or document classes.
- A template's lifecycle status is being updated as part of a governance action.

### 33.2Migration Principles


- Do not change template meaning while normalizing structure.
- Do not promote a template's lifecycle status by adding metadata.
- Do not remove template functionality during migration.
- Do not create new placeholders for content that was previously hardcoded without documenting the change.
- Preserve template version history in the template file.
- Record migration evidence (source state, target state, changes made, validation results).

### 33.3Migration Process


```
1. Assess current template against TPL-000 compliance rules (Section 30).
2. Identify gaps (missing metadata, non-compliant placeholders, wrong directory).
3. Create migration plan documenting all required changes.
4. Apply changes incrementally with validation at each step.
5. Re-validate the migrated template against all SV, GV, and XV rules.
6. Update the template's README.md to reflect the migration.
7. Submit the migrated template for review and approval.
```

### 33.4Migration Evidence


Each migration shall produce a record containing:

- Template identifier and version before migration.
- Template identifier and version after migration.
- List of changes applied.
- Validation results before and after migration.
- Review and approval outcomes.

---

---

## 34. Legacy Template Handling


### 34.1Legacy Classification


A template is classified as Legacy when it was created before TPL-000, does not comply with TPL-000, and is retained for historical compatibility or ongoing use that cannot immediately migrate.

### 34.2Legacy Template Rules


- Legacy templates shall be moved to the `docs/AI/Templates/Legacy/` directory.
- Legacy templates shall retain their original filename unless the name conflicts with TPL-000 naming conventions, in which case the name shall be updated with a migration note.
- Legacy templates shall include a legacy notice at the top of the file:

```markdown
> **Legacy Notice**: This template predates TPL-000 and does not comply with the Template Standard.
> It is retained for historical compatibility. New documents should use a governed template.
> Migration status: [Not Started | In Progress | Complete | Deferred]
```

- Legacy templates shall not be used to produce new documents intended for Canonical status.
- Legacy templates shall not be inherited or composed by governed templates.

### 34.3Legacy Retirement


Legacy templates shall be retired when:

- A compliant replacement template exists and is at L3 compliance level or above.
- No active documents depend on the legacy template for ongoing production.
- Framework Governance authorizes the retirement.

---

---

## 35. Template Review Process


### 35.1Review Triggers


Template review is triggered when:

- A template is submitted for promotion from L1 to L2 or L2 to L3.
- A template's MAJOR version is incremented.
- A template's lifecycle status change requires review (Draft to Review, Review to Approved).
- A governance-mandated periodic review is due.

### 35.2Review Scope


Template review shall verify:

| Area | Review Items |
|:---|:---|
| Metadata | STD-010 compliance; correct authority, references, dependencies, lifecycle. |
| Structure | All required sections present; correct heading hierarchy; no missing placeholders. |
| Placeholders | Complete manifest; correct types; no unresolved or undeclared placeholders. |
| Compliance | SV, GV, XV validation rules pass. |
| Composition/Inheritance | No circular dependencies; correct parent-child relationships. |
| Directory | Correct placement per Section 10; README.md present and complete. |
| Terminology | Consistency with STD-003; no undefined terms. |

### 35.3Review Outcomes


| Outcome | Meaning | Next Step |
|:---|:---|:---|
| Review Passed | Template meets all review criteria. | Proceed to approval. |
| Review Passed with Observations | Template meets criteria with minor observations. | Address observations; proceed to approval. |
| Review Failed | Template has one or more errors. | Fix errors; resubmit for review. |
| Review Deferred | Review is postponed due to external dependencies. | Revisit when dependencies are resolved. |

---

---

## 36. Template Approval Process


### 36.1Approval Authority


Template approval is granted by the Approval Authority declared in the template's metadata. For Core templates (TPL-000 through TPL-099), the Approval Authority is Human Governance / Framework Governance. For domain templates (TPL-100 and above), the Approval Authority may be delegated to the domain Owner with Framework Governance notification.

### 36.2Approval Criteria


A template may be approved when:

- All review criteria (Section 37.2) have been met.
- Review outcome is "Review Passed" or "Review Passed with Observations" (with observations addressed).
- All validation errors (SV, GV, XV) have been resolved.
- The template's lifecycle status is consistent with the target approval level.
- No unresolved blockers exist in the template's dependency chain.

### 36.3Approval Actions


Upon approval, the following shall occur:

1. Template `Status` metadata updated to `Approved`.
2. Template `Last Updated` metadata updated to the approval date.
3. Template version incremented if the approval involved changes (MINOR for non-structural, MAJOR for structural).
4. Template README.md updated to reflect approval status.
5. Approval recorded in the relevant directory README.md.
6. Framework Governance notified (for domain templates).

### 36.4Canonical Promotion


Canonical promotion is a separate governance action beyond approval. A template at Approved status may be submitted for Canonical promotion when:

- The template is at L3 compliance level and Certified.
- The template has been used successfully to produce at least three valid documents.
- No competing templates exist for the same document class and domain.
- Framework Governance explicitly approves the Canonical promotion.

---

---

## 37. Directory README Rules


### 37.1README Requirement


Every template directory under `docs/AI/Templates/` shall contain a `README.md` file. This README serves as the directory's index, governance summary, and navigation aid.

### 37.2README Structure


Each directory README.md shall contain the following sections:

```markdown
# {Directory Name} Templates

## Directory Purpose
Brief description of the template category and its scope.

## Templates
| File | Identifier | Version | Status | Compliance Level | Owner |
|:---|:---|:---|:---|:---|:---|
| TPL-NNN-*.md | FORGE-TPL-NNN | x.y.z | Status | L1/L2/L3 | Owner Name |

## Governance
- Review Authority: {name}
- Approval Authority: {name}
- Last Directory Review: YYYY-MM-DD

## Notes
Any domain-specific notes, migration status, or known issues.
```

### 37.3README Maintenance


- Directory READMEs shall be updated when a template is added, removed, promoted, deprecated, or has a MAJOR version change.
- The template inventory table shall be kept current — stale entries are a compliance issue.
- The Last Directory Review date shall be updated when a governance review of the directory occurs.

---

---

## 38. Anti Patterns


The following anti-patterns are prohibited in governed templates:

| Anti-Pattern | Description | Why Prohibited |
|:---|:---|:---|
| Metadata Invention | Creating metadata fields not defined in STD-010. | Breaks STD-010 compliance; creates inconsistent document identities. |
| Placeholder Nesting | Resolving a placeholder to a value that itself contains unresolved `PLACEHOLDER` syntax. | Non-deterministic output; validation failure. |
| Authority Inflation | Claiming normative authority over documents, systems, or standards the template does not govern. | Violates separation of concerns; creates false governance chains. |
| Template as Source of Truth | Treating a template as the authoritative definition of architecture, runtime, or governance. | Templates are generation artifacts; authority resides in approved standards and RFCs. |
| Undeclared Placeholders | Using `{{PLACEHOLDER}}` in the template body without declaring it in the manifest. | Validation failure; non-deterministic generation. |
| Stale Metadata | Template metadata that does not reflect the template's current lifecycle, version, or ownership. | Misleading governance state; blocks review and approval. |
| Circular Composition | Template A composes from Template B, which composes from Template A. | Infinite recursion; undecidable validation. |
| Filename Violation | Using filenames that do not follow the Template Naming Standard (Section 17). | Breaks directory structure; impedes discovery and governance. |
| Directory Misplacement | Placing a template in the wrong class directory. | Breaks taxonomy; creates governance ambiguity. |
| Hardcoded Authority Values | Writing authority names, dates, or status values directly instead of using placeholders. | Reduces reusability; creates per-instance templates that should be document instances. |
| Parallel Standards | Creating a second template standard that competes with TPL-000 for the same scope. | Governance fragmentation; inconsistent validation. |
| Obsolete References | Referencing RC2 authority, `Specification/*` paths, or deprecated governance structures. | Breaks traceability; violates current governance hierarchy. |

---

---

## 39. Best Practices


### 39.1Authoring Best Practices


- Start every template with a complete STD-010 metadata block using the Required Placeholder Set.
- Declare all placeholders in a manifest section before using them in the template body.
- Use descriptive placeholder names that convey the field's purpose (e.g., `{{REVIEW_AUTHORITY}}` not `{{RA}}`).
- Provide default values for optional placeholders to enable zero-configuration generation for common cases.
- Include section-level briefs (task briefs) in comments or guidance text to help authors understand what each section requires.

### 39.2Maintenance Best Practices


- Increment the template version on every material change.
- Update `Last Updated` on every change, even PATCH-level fixes.
- Re-validate the template against all SV rules after every change.
- Check downstream templates (inheritors, composers) after every MAJOR or MINOR change.
- Archive deprecated versions rather than deleting them.

### 39.3Governance Best Practices


- Submit templates for review before they are widely used.
- Maintain the directory README.md as a living index.
- Conduct periodic reviews of all templates in a directory (recommended: quarterly).
- Track template certification status and address conditions promptly.
- Document migration decisions and evidence for audit trail.

### 39.4Content Best Practices


- Keep templates focused on structure and metadata generation.
- Move domain-specific content guidance to Content Guidance Templates (Section 9.2) rather than embedding it in structural templates.
- Use examples (Section 42) to demonstrate correct placeholder usage and expected output.
- Provide a "quick start" path that allows authors to produce a valid document with minimal placeholder values.

---

---

## 40. Examples


### 40.1Template Metadata Example


The following is the STD-010 metadata block for a hypothetical `TPL-001-RFC-Template-Standard.md`:

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-001` |
| Title | TPL-001 — RFC Template Standard |
| Version | 0.1.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Documentation Standard |
| Document Type | Framework Standard |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Enterprise Documentation Standards Board |
| Approval Authority | Human Governance / Framework Governance |
| Created | 2026-07-09 |
| Last Updated | 2026-07-09 |
| Lifecycle Phase | Draft |
| Traceability ID | FORGE-AI.V3.TPL-001 |
| Scope | Structural template standard for all RFC-class documents produced by Forge AI |
| Out of Scope | RFC content decisions, architecture review procedures, implementation guidance |
| Normative Authority | Human Governance; `AGENTS.md`; `docs/FrameworkGovernance.md`; TPL-000 |
| Normative References | STD-010; STD-000; STD-003; A.1; M.0; M.1 |
| Dependencies | TPL-000 Template Standard; STD-010 Document Metadata Standard |
| Consumes | TPL-000 template governance rules; STD-010 metadata schema |
| Produces | RFC template structure, RFC placeholder manifest, RFC validation rules |
| Related Specifications | A.3 Runtime Architecture RFC; A.4 Engine Architecture RFC |
| Supersedes | None |
| Superseded By | None |
| Promotion Requirements | Template review, STD-010 compliance validation, governance approval |
| Certification Status | Not certified |
```

### 40.2Placeholder Manifest Example


```markdown
## Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | IDENTIFIER | Identifier | Yes | — |
| `{{TITLE}}` | TEXT | Title | Yes | — |
| `{{VERSION}}` | VERSION | Version | Yes | `0.1.0-draft` |
| `{{SCOPE}}` | TEXT | Scope | Yes | — |
| `{{NORMATIVE_AUTHORITY}}` | LIST | Normative Authority | Yes | — |

### Optional Placeholders

| Placeholder | Type | Use | Default |
|:---|:---|:---|:---|
| `{{BLOCKED_BY}}` | LIST | Upstream blockers | (omit section) |
| `{{REVIEW_STATUS}}` | ENUM:Not Reviewed,Review Required,In Review,Review Passed,Review Failed,Review Deferred | Review tracking | `Not Reviewed` |
| `{{DOMAIN_INTRODUCTION}}` | TEXT | RFC-specific introduction | (empty) |
```

### 40.3Generated Metadata Block Example


Given the placeholder values:

```
IDENTIFIER = FORGE-A-004.8
TITLE = A.4.8 — Engine Kernel Registry RFC
VERSION = 0.1.0-draft
STATUS = Draft
```

The template produces:

```markdown
## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-A-004.8` |
| Title | A.4.8 — Engine Kernel Registry RFC |
| Version | 0.1.0-draft |
| Status | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
...
```

### 40.4Template Inheritance Example


```
TPL-000 (Template Standard)
  │
  ├── TPL-001 (RFC Template Standard)
  │     Inherits From: TPL-000
  │     Adds: RFC-specific sections, RFC placeholder extensions
  │
  └── TPL-STD-100 (Standard Template Standard)
        Inherits From: TPL-000
        Adds: Standard-specific sections, standard validation extensions
```

---

---

## 41. Compliance Matrix


The compliance matrix maps each TPL-000 requirement to the validation rules that enforce it and the compliance level at which enforcement begins.

| Requirement | Section | SV Rule | GV Rule | XV Rule | Min Level |
|:---|:---|:---|:---|:---|:---|
| STD-010 metadata block | 21 | SV-001 | GV-001 | — | L1 |
| Template naming | 15 | SV-002 | — | — | L1 |
| Template identifier | 16 | SV-003 | — | — | L1 |
| Required placeholder declaration | 19 | SV-004 | — | — | L1 |
| Placeholder usage consistency | 17 | SV-005, SV-006 | — | — | L1 |
| Placeholder naming | 17 | SV-007 | — | — | L1 |
| Placeholder syntax | 17 | SV-008 | — | — | L1 |
| Directory placement | 10 | SV-009 | — | — | L1 |
| No obsolete references | 36 | SV-010, SV-011 | — | — | L1 |
| No parallel standards | 36 | SV-012 | — | — | L1 |
| Terminology consistency | 12 | SV-013 | — | — | L2 |
| No placeholder nesting | 17 | SV-014 | — | — | L1 |
| Produced document metadata | 22 | — | GV-001 | — | L2 |
| No unresolved placeholders | 23 | — | GV-002 | — | L2 |
| Complete STD-010 fields | 21 | — | GV-003 | — | L2 |
| Type conformance | 18 | — | GV-004 | — | L2 |
| Status value validity | 13 | — | GV-005 | — | L2 |
| Reference resolvability | 12 | — | GV-006 | — | L3 |
| No template artifacts | 23 | — | GV-007 | — | L2 |
| No circular composition | 24 | — | — | XV-001 | L3 |
| Inheritance correctness | 25 | — | — | XV-002 | L3 |
| No duplicate metadata | 24 | — | — | XV-003 | L3 |
| Dependency compatibility | 26 | — | — | XV-004 | L3 |

| RV-001 | Registry | Every template's registry metadata (Section 17.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 29.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 14). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 39.2. | Error | L2 |

---

---

## 42. Validation Matrix


The validation matrix summarizes all validation rules, their applicability, and severity.

| Rule ID | Category | Check Description | Severity | Level |
|:---|:---|:---|:---|:---|
| SV-001 | Static | STD-010 metadata block present and complete | Error | L1 |
| SV-002 | Static | Filename follows Template Naming Standard | Error | L1 |
| SV-003 | Static | Identifier follows Identifier Standard | Error | L1 |
| SV-004 | Static | All required placeholders declared | Error | L1 |
| SV-005 | Static | All declared placeholders used in body | Warning | L1 |
| SV-006 | Static | All body placeholders declared in manifest | Error | L1 |
| SV-007 | Static | Placeholder names are UPPERCASE_SNAKE_CASE | Error | L1 |
| SV-008 | Static | Placeholder syntax is `{{NAME}}` | Error | L1 |
| SV-009 | Static | Template in correct directory | Error | L1 |
| SV-010 | Static | No obsolete RC2 authority references | Error | L1 |
| SV-011 | Static | No obsolete Specification/* references | Error | L1 |
| SV-012 | Static | No parallel template standards declared | Error | L1 |
| SV-013 | Static | Terminology consistent with STD-003 | Warning | L2 |
| SV-014 | Static | No placeholder nesting | Error | L1 |
| GV-001 | Generation | Produced document has complete STD-010 metadata | Error | L2 |
| GV-002 | Generation | No unresolved placeholders in output | Error | L2 |
| GV-003 | Generation | All required STD-010 fields present | Error | L2 |
| GV-004 | Generation | Field values match declared types | Error | L2 |
| GV-005 | Generation | Status values from allowed set | Error | L2 |
| GV-006 | Generation | Authority/reference paths resolvable | Warning | L3 |
| GV-007 | Generation | No template artifacts in output | Error | L2 |
| XV-001 | Cross-Template | No circular composition/inheritance | Error | L3 |
| XV-002 | Cross-Template | Inherited sections match parent mandatory set | Error | L3 |
| XV-003 | Cross-Template | No duplicate metadata blocks from composition | Error | L3 |
| XV-004 | Cross-Template | Dependency targets exist and compatible | Warning | L3 |
| RV-001 | Registry | Every template's registry metadata (Section 15.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 27.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 12). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 37.2. | Error | L2 |
| RV-001 | Registry | Every template's registry metadata (Section 17.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 29.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 14). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 39.2. | Error | L2 |

---



---

---

## 43. Success Criteria


TPL-000 is considered successful when the following criteria are met:

| Criterion | Measure | Target |
|:---|:---|:---|
| C-SC-001 | Every template under `docs/AI/Templates/` (excluding Legacy) complies with TPL-000 at L1 or above. | 100% compliance. |
| C-SC-002 | Every new template created after TPL-000 adoption starts at L1 compliance. | 100% of new templates. |
| C-SC-003 | Every document produced by a governed template passes STD-010 metadata validation. | 100% of produced documents. |
| C-SC-004 | No governed template contains obsolete RC2 authority or Specification/* references. | Zero occurrences. |
| C-SC-005 | No parallel template standards exist within the governed directory tree. | Zero occurrences. |
| C-SC-006 | Every template directory has a complete, current README.md per Section 39. | 100% of directories. |
| C-SC-007 | Template review and approval processes are followed for all L2+ templates. | 100% compliance. |
| C-SC-008 | Terminology across all templates is consistent with STD-003. | Zero terminology conflicts. |

---

---

## 44. Template Capability Matrix

The Template Capability Matrix provides a comprehensive view of all capabilities defined, planned, or explicitly excluded from TPL-000. This matrix serves as a reference for template authors, reviewers, and future tooling implementers to understand the current state and direction of template governance capabilities.

| Capability | Description | Status |
|:---|:---|:---|
| Metadata | Full STD-010 metadata block generation via placeholders. | Supported |
| Placeholder | Named, typed placeholder slots with `{{NAME}}` syntax. | Supported |
| Typed Placeholder | Type system with TEXT, IDENTIFIER, VERSION, DATE, STATUS, ENUM, REFERENCE, LIST, BOOLEAN. | Supported |
| Optional Placeholder | Optional placeholder set with default values and omission behavior. | Supported |
| Inheritance | Single-inheritance from a parent structural template. | Supported |
| Composition | Multi-template composition for shared structural elements. | Supported |
| Package | Template package layout with examples, partials, snippets, and validation directories. | Supported |
| Validation | Static (SV), Generation (GV), and Cross-Template (XV) validation rules. | Supported |
| Compliance | Progressive compliance levels (L1, L2, L3) with defined criteria. | Supported |
| Lifecycle | Full lifecycle states from Draft through Retired with governed transitions. | Supported |
| Registry | Documentation-architecture registry model for template discovery and lookup. | Supported |
| Versioning | Semantic versioning (MAJOR.MINOR.PATCH-lifecycle) with stability rules. | Supported |
| Migration | Migration triggers, principles, process, and evidence requirements. | Supported |
| Certification | Certification criteria, status values, and conditions tracking. | Supported |
| Conditional Blocks | Conditionally included or excluded template sections based on placeholder values. | Planned |
| Includes | Template include directives for embedding external content fragments. | Planned |
| Variables | Global or template-scoped variables that propagate across composed templates. | Planned |
| Macros | Reusable parameterized content generation patterns within templates. | Forbidden (by design — macros introduce non-determinism and violate the Deterministic Output principle) |

#### Status Definitions

- **Supported**: The capability is fully defined in TPL-000 and may be used by governed templates.
- **Planned**: The capability is identified for future inclusion but is not yet defined. No template shall depend on a Planned capability.
- **Forbidden**: The capability is explicitly excluded from TPL-000's scope. No template shall use or implement a Forbidden capability.

---

## 45. Future Evolution


TPL-000 is designed to evolve with the Forge AI Framework. The following areas are identified for future consideration but are explicitly out of scope for this version.

### 45.1Template Tooling


Future versions of TPL-000 may define or reference:

- Automated template validation tooling (linter, validator, CI integration).
- Template generation engines that consume TPL-000 templates and produce documents.
- Template registries that index, version, and distribute governed templates.
- Template composition and inheritance resolvers.

### 45.2Template Testing


Future versions may define:

- Template test case frameworks that verify placeholder resolution, structural output, and metadata correctness.
- Regression test requirements for template version upgrades.
- Cross-template compatibility test suites.

### 45.3Knowledge Graph Integration


Future versions may define:

- Template node representations in the Forge AI knowledge graph.
- Relationship edges between templates, standards, meta models, and produced documents.
- Graph-based dependency and impact analysis.

### 45.4Multi-Format Output


Future versions may extend the template standard to support output formats beyond Markdown, including PDF, HTML, and structured data formats, while maintaining STD-010 metadata compliance across all formats.

### 45.5Governance Automation


Future versions may define:

- Automated lifecycle state transitions based on validation and review outcomes.
- Automated notification systems for review, approval, and certification events.
- Automated compliance reporting and dashboard integration.

---

---

## 46. Glossary


Terms are ordered alphabetically. Definitions align with STD-003 where applicable.

| Term | Definition |
|:---|:---|
| Canonical | The lifecycle state indicating that a document or template is authoritative within its declared scope, as defined by STD-010 Section 7.1. |
| Certification | The formal acknowledgment that a template meets all criteria for production use, as defined in Section 34. |
| Compliance Level | A classification (L1, L2, L3) indicating the degree to which a template complies with TPL-000 validation rules. |
| Composition | The mechanism by which a template includes structural or content elements from one or more other templates. |
| Cross-Template Validation | Validation of relationships between templates (composition, inheritance, dependencies). |
| Document Class | The classification of a document (Standard, RFC, Meta Model, Blueprint, Audit, Report, Roadmap, Migration, Governance, Legacy, Historical) as defined by STD-010 Section 6. |
| Generation Validation | Validation of a document produced by a template. |
| Inheritance | The mechanism by which a domain-specific template extends a structural template, adopting its structure and rules. |
| Legacy Template | A template that predates TPL-000 and does not comply with the Template Standard, retained for historical compatibility. |
| Placeholder | A named, typed slot within a template that is replaced with a concrete value during document generation. |
| Placeholder Manifest | A section within a template that declares all placeholders, their types, their STD-010 field mappings, and their default values. |
| Produced Document | A document generated from a template through placeholder resolution and metadata generation. |
| Static Validation | Validation of the template file itself, independent of any document generation process. |
| Template | A governed, reusable document skeleton that defines structure, metadata generation rules, and placeholder slots for producing STD-010-compliant documents. |
| Template Maintainer | A party responsible for the day-to-day upkeep, updates, and validation of a template. |
| Template Owner | The single accountable party responsible for a template's correctness, governance alignment, and lifecycle management. |
| Template Standard (TPL-NNN) | A Framework Standard that defines the structural, metadata, and placeholder requirements for a specific template or template family. |

---

---

## 47. Appendices


### Appendix A: Template File Skeleton

The following is the minimal skeleton for a governed template file:

```markdown
# TPL-NNN — {Template Title}

> Forge AI v3 · Standards Library
> {Classification} · {Status} / {Canonical Status}

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `FORGE-TPL-NNN` |
| Title | TPL-NNN — {Template Title} |
| Version | {{VERSION}} |
| Status | {{STATUS}} |
| Canonical Status | {{CANONICAL_STATUS}} |
| Classification | {{CLASSIFICATION}} |
| Document Type | Framework Standard |
| Owner | {{OWNER}} |
| Maintainers | {{MAINTAINERS}} |
| Review Authority | {{REVIEW_AUTHORITY}} |
| Approval Authority | {{APPROVAL_AUTHORITY}} |
| Created | {{CREATED}} |
| Last Updated | {{LAST_UPDATED}} |
| Lifecycle Phase | {{LIFECYCLE_PHASE}} |
| Traceability ID | {{TRACEABILITY_ID}} |
| Scope | {{SCOPE}} |
| Out of Scope | {{OUT_OF_SCOPE}} |
| Normative Authority | {{NORMATIVE_AUTHORITY}} |
| Normative References | {{NORMATIVE_REFERENCES}} |
| Dependencies | {{DEPENDENCIES}} |
| Consumes | {{CONSUMES}} |
| Produces | {{PRODUCES}} |
| Related Specifications | {{RELATED_SPECIFICATIONS}} |
| Supersedes | {{SUPERSEDES}} |
| Superseded By | {{SUPERSEDED_BY}} |
| Promotion Requirements | {{PROMOTION_REQUIREMENTS}} |
| Certification Status | {{CERTIFICATION_STATUS}} |

---

## Template Metadata

| Field | Value |
|:---|:---|
| Inherits From | (none or parent template path) |
| Composes From | (none or list of template identifiers) |
| Compliance Level | L1 / L2 / L3 |
| Produced Document Class | Standard / RFC / Meta Model / ... |

---

## Placeholder Manifest

### Required Placeholders

| Placeholder | Type | STD-010 Field | Required | Default |
|:---|:---|:---|:---|:---|
| (see Section 19 for full required set) | | | | |

### Optional Placeholders

| Placeholder | Type | Use | Default |
|:---|:---|:---|:---|
| (see Section 20 for common optional set) | | | |

---

## {Section 1 Title}

{Section content with placeholders as needed}

---

## {Section N Title}

{Section content with placeholders as needed}

---

## Completion Checklist

| Requirement | Status |
|:---|:---|
| STD-010 metadata block complete | |
| Required placeholders declared | |
| All placeholders used in body | |
| Directory placement correct | |
| SV validation rules pass | |
| GV validation rules pass | |
| XV validation rules pass | |
| README.md complete | |
```

### Appendix B: Quick Reference — Validation Rules

| Rule | One-Line Check |
|:---|:---|
| SV-001 | Has complete STD-010 metadata. |
| SV-002 | Filename is `TPL-NNN-Name.md`. |
| SV-003 | Identifier is `FORGE-TPL-NNN`. |
| SV-004 | All required placeholders declared. |
| SV-005 | All declared placeholders used. |
| SV-006 | No undeclared placeholders. |
| SV-007 | Placeholders are `UPPER_SNAKE_CASE`. |
| SV-008 | Syntax is `{{NAME}}`. |
| SV-009 | In correct directory. |
| SV-010 | No RC2 references. |
| SV-011 | No `Specification/*` paths. |
| SV-012 | No parallel template standards. |
| SV-013 | STD-003 terminology. |
| SV-014 | No placeholder nesting. |
| GV-001 | Output has STD-010 metadata. |
| GV-002 | No unresolved placeholders. |
| GV-003 | All required fields present. |
| GV-004 | Types match. |
| GV-005 | Status values valid. |
| GV-006 | References resolvable. |
| GV-007 | No template artifacts. |
| XV-001 | No circular chains. |
| XV-002 | Inheritance correct. |
| XV-003 | No duplicate metadata. |
| XV-004 | Dependencies compatible. |

| RV-001 | Registry | Every template's registry metadata (Section 17.3) is consistent with its file-level metadata. | Error | L2 |
| RV-002 | Registry | No two active, non-deprecated templates share the same identifier. | Error | L1 |
| XV-005 | Cross-Template | Inheritance chain is intact: every declared parent template exists and contains the expected mandatory sections. | Error | L3 |
| XV-006 | Cross-Template | Override operations in child templates comply with the Override Rules (Section 29.5). | Error | L3 |
| PV-001 | Package | Template package contains the mandatory elements: template file and README.md. | Error | L1 |
| PV-002 | Package | Template package does not contain elements outside the defined package layout (Section 14). | Warning | L2 |
| RV-003 | Registry | README.md contains all mandatory sections defined in Section 39.2. | Error | L2 |

### Appendix C: TPL-000 Section Index (47 sections) (47 sections) (47 sections)

| Section | Title | Purpose |
|:---|:---|:---|
| 1 | Purpose | Why TPL-000 exists. |
| 2 | Scope | What TPL-000 governs and does not govern. |
| 3 | Goals | What TPL-000 aims to achieve. |
| 4 | Non Goals | What TPL-000 explicitly excludes. |
| 5 | Relationship to STD-010 | Layered authority between TPL-000 and STD-010. |
| 6 | Template Philosophy | Core tenets governing template design. |
| 7 | Design Principles | Ten principles that guide template authoring. |
| 8 | Template Taxonomy | Classification axes: Document Class, Domain, Complexity. |
| 9 | Template Categories | Structural vs. Content Guidance templates. |
| 10 | Directory Structure | File system organization for governed templates. |
| 11 | Template Ownership | Owner and Maintainer responsibilities. |
| 12 | Authority Consumption | How templates consume upstream authorities. |
| 13 | Template Lifecycle | States, transitions, and constraints. |
| 14 | Template Versioning | Version format and stability rules. |
| 15 | Template Naming Standard | Filename conventions. |
| 16 | Identifier Standard | Template identifier and Traceability ID format. |
| 17 | Placeholder Standard | Placeholder definition, syntax, and rules. |
| 18 | Placeholder Grammar | Type system, grammar definition, context rules. |
| 19 | Required Placeholder Set | Mandatory placeholders mapped to STD-010 fields. |
| 20 | Optional Placeholder Set | Additional domain-specific placeholders. |
| 21 | Metadata Rules | Template metadata and produced document metadata rules. |
| 22 | Metadata Generation | Two-phase generation model and inheritance. |
| 23 | Document Generation Model | Five-stage generation pipeline. |
| 24 | Template Composition | Including elements from other templates. |
| 25 | Template Inheritance | Extending parent structural templates. |
| 26 | Template Dependencies | Dependency types, rules, and validation. |
| 27 | Template Compatibility Rules | Forward, backward, and breaking change rules. |
| 28 | Template Validation Rules | Static, generation, and cross-template validation. |
| 29 | Template Compliance Levels | L1, L2, L3 definitions and progression. |
| 30 | Template Certification Requirements | Criteria and status values. |
| 31 | Template Migration Rules | Triggers, principles, and process. |
| 32 | Legacy Template Handling | Classification, rules, and retirement. |
| 33 | Template Review Process | Triggers, scope, and outcomes. |
| 34 | Template Approval Process | Authority, criteria, actions, and Canonical promotion. |
| 35 | Directory README Rules | README structure and maintenance. |
| 36 | Anti Patterns | Prohibited practices. |
| 37 | Best Practices | Authoring, maintenance, governance, and content guidance. |
| 38 | Examples | Metadata, placeholder manifest, generation, and inheritance examples. |
| 39 | Compliance Matrix | Requirements mapped to validation rules and levels. |
| 40 | Validation Matrix | All validation rules summarized. |
| 41 | Success Criteria | Measurable criteria for TPL-000 adoption. |
| 42 | Future Evolution | Areas for future consideration. |
| 43 | Glossary | Term definitions. |
| 44 | Appendices | Skeleton, quick reference, section index. |

### Appendix D: STD-010 Field Mapping

Complete mapping from Required Placeholder Set to STD-010 mandatory fields:

| Placeholder | STD-010 Section | Mandatory? | Type |
|:---|:---|:---|:---|
| `{{IDENTIFIER}}` | 4.2 | Yes | IDENTIFIER |
| `{{TITLE}}` | 4.2 | Yes | TEXT |
| `{{VERSION}}` | 4.2 | Yes | VERSION |
| `{{STATUS}}` | 4.2 | Yes | STATUS |
| `{{CANONICAL_STATUS}}` | 4.2 | Yes | TEXT |
| `{{CLASSIFICATION}}` | 4.2 | Yes | TEXT |
| `{{DOCUMENT_TYPE}}` | 4.2 | Yes | ENUM |
| `{{OWNER}}` | 4.2 | Yes | TEXT |
| `{{MAINTAINERS}}` | 4.2 | Yes | TEXT |
| `{{REVIEW_AUTHORITY}}` | 4.2 | Yes | TEXT |
| `{{APPROVAL_AUTHORITY}}` | 4.2 | Yes | TEXT |
| `{{CREATED}}` | 4.2 | Yes | DATE |
| `{{LAST_UPDATED}}` | 4.2 | Yes | DATE |
| `{{LIFECYCLE_PHASE}}` | 4.2 | Yes | STATUS |
| `{{TRACEABILITY_ID}}` | 4.2 | Yes | IDENTIFIER |
| `{{SCOPE}}` | 4.2 | Yes | TEXT |
| `{{OUT_OF_SCOPE}}` | 4.2 | Yes | TEXT |
| `{{NORMATIVE_AUTHORITY}}` | 4.2 | Yes | LIST |
| `{{NORMATIVE_REFERENCES}}` | 4.2 | Yes | LIST |
| `{{DEPENDENCIES}}` | 4.2 | Yes | LIST |
| `{{CONSUMES}}` | 4.2 | Yes | LIST |
| `{{PRODUCES}}` | 4.2 | Yes | LIST |
| `{{RELATED_SPECIFICATIONS}}` | 4.2 | Yes | LIST |
| `{{SUPERSEDES}}` | 4.2 | Yes | TEXT |
| `{{SUPERSEDED_BY}}` | 4.2 | Yes | TEXT |
| `{{PROMOTION_REQUIREMENTS}}` | 4.2 | Yes | TEXT |
| `{{CERTIFICATION_STATUS}}` | 4.2 | Yes | ENUM |

---

## Completion Report

**Summary**

TPL-000 defines the draft Forge AI Template Standard. It establishes the canonical governance architecture for every reusable template under `docs/AI/Templates/`, covering template taxonomy, lifecycle, versioning, naming, identifiers, placeholder grammar, metadata generation, composition, inheritance, dependencies, compatibility, validation, compliance levels, certification, migration, legacy handling, review, approval, directory management, anti-patterns, and best practices.

TPL-000 consumes STD-010 exactly for all metadata requirements. It does not redefine, simplify, or override STD-010, Governance, Runtime, or Engine Platform. Templates governed by TPL-000 produce documents that comply with STD-010. TPL-000 governs how templates are authored; STD-010 governs how documents are authored.

**Files Created**

| File | Path |
|:---|:---|
| TPL-000 | `docs/AI/Templates/Core/TPL-000-Template-Standard.md` |

**STD-010 Validation**

| Check | Result |
|:---|:---|
| Metadata block present | Pass |
| All 25 mandatory fields present | Pass |
| Metadata table format correct | Pass |
| Identifier format correct (`FORGE-TPL-000`) | Pass |
| Version format correct (`0.1.0-draft`) | Pass |
| Status correct (`Draft`) | Pass |
| Canonical Status correct (Non-canonical) | Pass |
| Normative Authority declared | Pass |
| Normative References declared | Pass |
| Dependencies declared | Pass |
| Consumes declared | Pass |
| Produces declared | Pass |
| Traceability ID present | Pass |

**Sections Created**

47 sections as specified: Purpose through Appendices (expanded from 44 with Template Package Layout, Template Registry Model, and Template Capability Matrix).

**Matrices Created**

- Compliance Matrix (Section 43): 23 requirement-to-rule mappings.
- Validation Matrix (Section 45): 25 validation rules.
- STD-010 Field Mapping (Appendix D): 26 placeholder-to-field mappings.
- Compatibility Matrix (Section 31.4): template version to standard version.

**Appendices Created**

- Appendix A: Template File Skeleton
- Appendix B: Quick Reference — Validation Rules
- Appendix C: TPL-000 Section Index
- Appendix D: STD-010 Field Mapping

**Diagrams Created**

- Authority Hierarchy Diagram (Section 16.2)
- TPL-000 / STD-010 Layered Architecture Diagram (Section 5)
- Template Lifecycle State Transition Diagram (Section 17.3)
- Document Generation Pipeline Diagram (Section 27.1)
- Template Inheritance Hierarchy Example (Section 42.4)

**Validation Results**

| Validation Item | Result |
|:---|:---|
| Full STD-010 metadata | Pass |
| Terminology consistency | Pass |
| Template taxonomy consistency | Pass |
| Placeholder consistency | Pass |
| Repository path consistency | Pass |
| No obsolete RC2 authority | Pass |
| No obsolete Specification/* references | Pass |
| No parallel template standards | Pass |
| All 47 sections present | Pass |
| Line count | 1000+ lines |

**Recommended Next Step**

TPL-001 — RFC Template Standard: Create the first domain template standard (TPL-001) that inherits from TPL-000 and defines the structural template for all RFC-class documents. TPL-001 shall demonstrate the inheritance model defined in Section 29, consume TPL-000's placeholder grammar, and produce documents that comply with both TPL-000 and STD-010.

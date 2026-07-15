# A.6 — AI-DOS Distribution Foundation RFC

---

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-006` |
| Title | A.6 — AI-DOS Distribution Foundation RFC |
| Version | `0.1.1-draft` |
| Status | Draft |
| Lifecycle State | Draft |
| Canonical Status | Non-canonical until reviewed, approved, and promoted through Framework Governance |
| Classification | Architecture RFC |
| Document Type | RFC |
| Artifact Family | Architecture Artifact |
| Artifact Type | Architecture RFC |
| Owner | Framework Governance |
| Maintainers | Framework Architecture Team |
| Review Authority | Human Governance / Framework Governance |
| Approval Authority | Human Governance |
| Created | 2026-07-15 |
| Last Updated | 2026-07-15 |
| Traceability ID | `AI-DOS.V2.ARCH-RFC-006` |
| Scope | Distribution foundation architecture for packaging, distribution, versioning, installation, update, validation, and governance of AI-DOS as an AI Operating System delivered to independent Target Projects without exposing the private AI-DOS development repository. |
| Out of Scope | Local CLI behavior, MCP protocol, hosted Provider architecture, AI-DOS System Interface, Evolution transport, Feedback protocol, Target integration details, runtime implementation, package-manager implementation, service implementation, repository publication workflow implementation, and Target Project planning mutation. |
| Normative Authority | Human Governance; `docs/AI/Architecture/A.1-Constitution.md`; `docs/AI/Architecture/A.2-AI-DOS-Target-Repository-Operational-Boundary.md`; `docs/AI/FrameworkGovernance.md` |
| Normative References | `docs/AI/Architecture/Standards/STD-010-Document-Metadata-Standard.md`; `docs/AI/Architecture/Standards/STD-003-Terminology-Standard.md`; `docs/AI/Meta/M.0-Framework-Meta-Model.md`; `docs/AI/Meta/M.1-Artifact-Meta-Model.md`; `docs/AI/Runtime/A.3-Runtime-Architecture-RFC.md`; `docs/AI/Runtime/A.4-Engine-Architecture-RFC.md`; `docs/AI/AIFramework.md`; `docs/AI/AIOrchestrator.md`; `docs/AI/AgentSystemPrompt.md` |
| Depends On | Human Governance release decision; AI-DOS / Target Repository operational boundary; document metadata standard; terminology standard; Runtime and Engine architecture boundaries; Operational Core authority routing. |
| Consumes | Constitutional authority, Framework Governance release authority, Target-independent product architecture, AI-DOS / Target Repository boundary rules, metadata and terminology requirements, Runtime and Engine boundaries, and Operational Core authority consumption rules. |
| Produces | Distribution foundation model, private/public product boundary, distribution artifact model, package structure, manifest model, versioning policy, release channel model, signing and integrity requirements, compatibility model, installation/update/rollback/uninstall lifecycle boundaries, runtime discovery constraints, governance gates, risks, and future RFC dependency map. |
| Related Specifications | `docs/AI/Architecture/Blueprint/AI-DOS-Blueprint-v1.0-RFC.md`; `docs/AI/System/BootSequence.md`; `docs/AI/System/SourceOfTruth.md`; `docs/AI/System/ContextAssembly.md`; `docs/AI/System/ExecutionSequence.md` |
| Supersedes | None |
| Superseded By | None |
| Validation Profile | STD-010 metadata conformance profile; Architecture RFC content validation profile |
| Review Status | Human Governance Approved |
| Certification Status | Not certified |

---

## 1. Purpose

This RFC defines the AI-DOS Distribution Foundation: the architectural contract for delivering AI-DOS to an independent Target Project without exposing the private AI-DOS development repository.

The primary question answered by this RFC is:

> How is AI-DOS delivered to an independent Target Project without exposing the private AI-DOS development repository?

The answer is that AI-DOS is delivered as governed release artifacts produced from the private development repository, published through controlled distribution channels, verified by manifests and integrity metadata, installed into a Target-accessible product location, and consumed through explicit Target Project authority without granting the Target Project access to private development history, unpublished source, internal planning, private evidence, or governance workspaces.

This RFC establishes architecture only. It does not implement any runtime, CLI, MCP, provider, hosted service, installer, updater, registry, or package manager.

## 2. Scope

This RFC is in scope for:

1. Defining AI-DOS as a distributable AI Operating System product.
2. Separating the private AI-DOS development repository from public or Target-consumable distribution artifacts.
3. Defining the artifact classes required for distribution.
4. Defining the package structure expected of a distributable AI-DOS release.
5. Defining a manifest model at the architectural level.
6. Defining versioning policy for distributable releases.
7. Defining release channels and channel governance.
8. Defining signing, checksums, provenance, and integrity expectations.
9. Defining compatibility declarations and Target Project compatibility boundaries.
10. Defining installation, update, rollback, and uninstall lifecycle boundaries.
11. Defining runtime discovery requirements without specifying runtime behavior.
12. Defining governance and Human Governance release gates.
13. Identifying risks and future RFC dependencies.

## 3. Non-Goals

This RFC does not define:

1. Local CLI behavior.
2. MCP protocol.
3. Hosted Provider architecture.
4. AI-DOS System Interface.
5. Evolution transport.
6. Feedback protocol.
7. Target integration details.
8. Runtime implementation.
9. Engine implementation.
10. Agent implementation.
11. Installer implementation.
12. Updater implementation.
13. Package-manager implementation.
14. Service deployment architecture.
15. Registry API behavior.
16. Repository publication workflow implementation.
17. Target Project planning mutation.
18. ProjectStatus updates.
19. DevelopmentPhases updates.
20. Roadmap updates.

References to installation, update, rollback, uninstall, discovery, signing, channels, or manifests are architectural boundaries only. They do not specify executable commands, protocol messages, service endpoints, daemon behavior, MCP tools, CLI flags, hosted Provider responsibilities, or Target-specific integration steps.

## 4. Product Model

AI-DOS is a governed AI Operating System product that can be delivered independently of its private development repository.

The product model has four architectural layers:

| Layer | Distribution Role |
|:---|:---|
| Private development repository | Human-Governed source workspace where AI-DOS is authored, reviewed, validated, and prepared for release. |
| Release assembly boundary | Governance-controlled boundary that selects approved AI-DOS product content and excludes private development-only material. |
| Distribution artifacts | Versioned, signed, integrity-checked product packages and metadata made available to consumers. |
| Target Project installation | Target-accessible installed AI-DOS product instance consumed by Target Project authority and execution providers. |

AI-DOS as a product includes governed framework documents, operational contracts, templates, standards, architecture artifacts, and other approved product resources. AI-DOS distribution does not require the Target Project to clone, inspect, or depend on the private development repository.

The distributed product must remain Target-independent. A Target Project may consume the product, but the distributed product must not contain Target-owned ProjectStatus, Target-owned Roadmap, Target-specific protected-area declarations, Target secrets, Target private evidence, or Target implementation state unless a later Target integration RFC explicitly defines a governed Target-side artifact boundary.

## 5. Distribution Principles

AI-DOS distribution is governed by these principles:

1. **Repository privacy**: independent Target Projects receive release artifacts, not private AI-DOS development repository access.
2. **Artifact authority**: the distributable artifact is the product boundary consumed by a Target Project.
3. **Human Governance release control**: no release channel receives a product artifact without explicit Human Governance release approval.
4. **Deterministic identity**: every released package has a stable product identifier, version, channel, manifest, and integrity record.
5. **Source-truth separation**: private development truth, released product truth, and Target Project truth remain separately owned.
6. **No implicit implementation activation**: distribution architecture does not activate runtime, CLI, MCP, hosted Provider, or Target integration behavior.
7. **Compatibility visibility**: every release declares compatibility expectations and breaking-change status.
8. **Rollback readiness**: installation and update architecture must preserve a path to restore a prior known-good product version.
9. **Uninstallability**: installation architecture must distinguish AI-DOS-owned installed product content from Target-owned files.
10. **Validation before trust**: consumers must be able to validate identity, integrity, provenance, and compatibility before use.

## 6. Private vs Public Product Boundary

The private AI-DOS development repository may contain product source, drafts, planning state, review evidence, experiments, internal reports, governance deliberation support, development automation, unpublished artifacts, and self-hosting Target Project truth.

A public or Target-consumable AI-DOS distribution artifact may contain only release-approved product content and release metadata.

| Concern | Private Development Repository | Distribution Artifact |
|:---|:---|:---|
| Development history | May contain full private history | Excluded |
| Drafts not approved for release | May exist | Excluded unless explicitly released as draft product content |
| Governance workspaces | May exist | Excluded except approved public governance metadata |
| Product documents | Authored and reviewed | Included only if release-approved |
| Product templates | Authored and reviewed | Included only if release-approved |
| Product manifests | Generated or authored for release | Included |
| Checksums and signatures | Produced during release | Included or published adjacent to artifacts |
| Target Project state | May exist for self-hosting | Excluded from reusable AI-DOS product distribution |
| Secrets and credentials | Must not be distributed | Excluded |

The boundary must be enforced by release assembly and validation. A Target Project must be able to install AI-DOS without receiving private repository remotes, internal branches, unpublished files, private issue history, private commit history, private governance evidence, or self-hosting ProjectStatus.

## 7. Distribution Artifact Model

An AI-DOS release consists of one or more distribution artifacts that together define a versioned product release.

Required artifact classes:

| Artifact Class | Purpose |
|:---|:---|
| Product package | Contains release-approved AI-DOS product content. |
| Release manifest | Describes package identity, version, channel, contents, compatibility, integrity, and governance status. |
| Integrity record | Provides checksums and signature references for package validation. |
| Release notes | Summarize release scope, compatibility posture, known risks, and upgrade/rollback considerations. |
| License / usage notice | States allowed use and distribution constraints, when applicable. |
| Validation evidence summary | Provides release-validation results without exposing private development evidence beyond approved disclosure. |

Optional artifact classes may include a software bill of materials, provenance attestation, detached signatures, compatibility matrix, migration advisory, or archival bundle. Optional artifacts require future governance or release engineering definition before becoming mandatory.

## 8. Package Structure

A distribution package must separate product content from package metadata.

Architectural package layout:

```text
ai-dos-package/
├── product/
│   └── <release-approved AI-DOS product content>
├── manifest/
│   └── ai-dos-package-manifest.<format>
├── integrity/
│   ├── checksums.<format>
│   └── signatures.<format-or-detached-reference>
├── release-notes/
│   └── <release notes artifact>
└── notices/
    └── <license, usage, attribution, and disclosure notices>
```

This layout is conceptual. It does not mandate archive format, file extension, serialization format, compression method, package registry, transport mechanism, CLI command, installer command, hosted service, or Target Project destination path.

The package must not include development-only repository metadata such as private `.git` history, unpublished branch state, private workspace files, unapproved drafts, local credentials, private governance records, or Target Project self-hosting state.

## 9. Manifest Model

Each AI-DOS distribution package must include a release manifest that allows a consumer or installation controller to understand what the package is before trusting or applying it.

The manifest must declare, at minimum:

| Manifest Field | Architectural Requirement |
|:---|:---|
| Product identifier | Identifies the package as AI-DOS. |
| Package identifier | Identifies the specific package artifact. |
| Product version | Declares the AI-DOS release version. |
| Release channel | Declares the channel from which the package is released. |
| Release date | Declares the date approved for release. |
| Governance status | States release approval posture and certification posture. |
| Content index | Lists package contents or content roots. |
| Integrity references | Points to checksums and signatures. |
| Compatibility declaration | Declares supported compatibility range and breaking-change status. |
| Minimum consumer expectations | Declares required consumer capabilities without specifying Target integration behavior. |
| Rollback metadata | Identifies rollback-relevant version lineage. |
| Uninstall boundary | Identifies AI-DOS-owned installed content boundaries. |
| Source disclosure posture | States that the artifact is produced from the private development repository without exposing that repository. |

The manifest model is architectural only. This RFC does not define JSON, YAML, TOML, XML, Markdown, schema syntax, field serialization, registry format, CLI parsing, MCP resources, API endpoints, or package manager behavior.

## 10. Versioning Policy

AI-DOS distribution releases must use explicit product versions separate from private development repository commit identifiers.

Versioning requirements:

1. Every distributed package has exactly one product version.
2. Product version must be visible in the manifest and release notes.
3. Product version must not require Target Project access to private commit history.
4. Version lineage must support compatibility evaluation and rollback decisions.
5. Breaking changes must be declared in release notes and compatibility metadata.
6. Pre-release versions must be distinguishable from stable release versions.
7. Patch releases must be distinguishable from minor or major capability releases.
8. Governance-approved emergency releases must still receive normal identity, manifest, integrity, and approval metadata.

Recommended version classes:

| Version Class | Meaning |
|:---|:---|
| Major | May introduce breaking product contract changes requiring explicit compatibility review. |
| Minor | Adds or changes product capability without intentionally breaking declared compatibility. |
| Patch | Corrects or clarifies released product content within the same compatibility line. |
| Pre-release | Candidate, preview, alpha, beta, or release-candidate content not yet stable. |
| Build metadata | Optional release assembly or provenance identifier that does not replace product version. |

This policy does not define exact semantic-version syntax. A future release engineering RFC may select a concrete version grammar.

## 11. Release Channels

AI-DOS distribution must separate release confidence and consumer intent through governed release channels.

Baseline channels:

| Channel | Purpose | Governance Posture |
|:---|:---|:---|
| Experimental | Early product packaging validation and controlled evaluation. | Requires explicit Human Governance approval and prominent non-stable warning. |
| Preview | Candidate distribution for limited external validation. | Requires release review, compatibility statement, and known-risk disclosure. |
| Stable | General approved distribution for independent Target Projects. | Requires full Human Governance release gate satisfaction. |
| Long-term Support | Extended compatibility and maintenance line, if approved. | Requires explicit support policy and maintenance commitment. |
| Emergency | Urgent corrective release for safety, integrity, or critical correctness issues. | Requires explicit emergency release approval and post-release review. |

Channels are governance categories, not transport mechanisms. This RFC does not define package registries, download endpoints, hosted services, CLI commands, MCP discovery, or deployment infrastructure.

## 12. Signing and Integrity

AI-DOS distribution must provide verifiable integrity before a Target Project trusts an artifact.

Integrity requirements:

1. Each package must have checksums for the package and, when practical, major content roots.
2. Each release must have a signature or signature reference bound to the package identity, version, channel, and manifest.
3. The manifest must identify the integrity records that apply to the package.
4. Release notes must identify whether integrity validation is required, optional, or unavailable for the channel.
5. A package with missing, mismatched, expired, revoked, or unverifiable integrity records must be treated as unsafe until Human Governance or an approved validation authority resolves the issue.
6. Signing authority must be distinct from ordinary authorship and must be governed by Human Governance release policy.
7. Private signing material must never be included in a distribution artifact.

This RFC does not choose cryptographic algorithms, key-management tooling, certificate infrastructure, transparency log design, command syntax, or service architecture. Those decisions belong to future release engineering and governance RFCs.

## 13. Compatibility Model

AI-DOS compatibility is declared by release metadata and bounded by the AI-DOS / Target Project operational boundary.

A release must declare:

1. AI-DOS product version.
2. Compatible prior AI-DOS versions or version ranges, when applicable.
3. Breaking-change status.
4. Required minimum consumer expectations.
5. Deprecated content, if any.
6. Removed content, if any.
7. Migration advisory presence, if applicable.
8. Rollback compatibility limitations, if any.

Compatibility declarations describe product-to-product and product-to-consumer expectations. They must not imply Target Project integration success, runtime execution success, hosted Provider availability, MCP support, CLI support, or Target-specific configuration correctness.

Target Projects remain responsible for their own project truth, protected areas, validation commands, and operational state. AI-DOS release compatibility does not override Target Project authority.

## 14. Installation Lifecycle

Installation is the lifecycle by which a distribution artifact becomes available to a Target Project or execution provider as an installed AI-DOS product instance.

Architectural installation phases:

1. **Acquire artifact**: obtain package and adjacent release metadata from an approved channel.
2. **Preflight validation**: validate identity, version, channel, manifest presence, integrity records, and compatibility declaration.
3. **Stage package**: place package content in a temporary or isolated staging boundary.
4. **Inspect manifest**: determine AI-DOS-owned content, version lineage, rollback metadata, and uninstall boundary.
5. **Apply installation**: make release-approved product content available in an installed product boundary.
6. **Record installation state**: record enough local state to identify installed version, manifest, integrity result, and rollback candidate.
7. **Post-install validation**: verify installed content matches manifest and integrity expectations.

This lifecycle does not define command names, path names, environment variables, package manager behavior, local CLI behavior, Target integration steps, MCP registration, hosted Provider activation, or runtime startup.

## 15. Update Lifecycle

Update is the lifecycle by which an installed AI-DOS product instance moves from one version to another.

Architectural update phases:

1. **Discover candidate release**: identify a candidate package from an approved channel.
2. **Validate candidate**: validate manifest, integrity, governance status, and compatibility metadata before applying.
3. **Compare installed state**: compare candidate version and compatibility posture against installed version.
4. **Stage candidate**: stage candidate without overwriting the known-good installed product boundary.
5. **Prepare rollback point**: preserve enough prior state to return to the previous known-good version.
6. **Apply update**: replace or switch the installed product boundary to the candidate release.
7. **Validate updated state**: verify installed content, manifest identity, integrity, and version record.
8. **Retain rollback metadata**: preserve rollback metadata according to governance and local policy.

This lifecycle does not define update commands, background update services, automatic update behavior, network transport, registry polling, MCP tools, hosted Provider behavior, or Target integration behavior.

## 16. Rollback Strategy

Rollback restores a prior known-good AI-DOS product version when an update is unsafe, incompatible, incomplete, or rejected.

Rollback requirements:

1. Update lifecycle must preserve a rollback candidate before replacing or switching an installed version.
2. The rollback candidate must have its own manifest and integrity records.
3. Rollback must restore AI-DOS-owned product content only.
4. Rollback must not rewrite Target Project truth, Target Project planning, Target source, Target protected areas, or Target evidence unless a later Target integration RFC explicitly defines such behavior and Human Governance authorizes it.
5. Rollback must report version restored, validation result, and unresolved compatibility risks.
6. Rollback must fail safely when prior version integrity cannot be validated.

Rollback is a product installation-state operation. It is not Target Project state mutation and does not imply ProjectStatus, DevelopmentPhases, Roadmap, source code, runtime state, or provider state changes.

## 17. Uninstall Strategy

Uninstall removes or deactivates an installed AI-DOS product instance while preserving Target Project ownership.

Uninstall requirements:

1. The manifest must identify AI-DOS-owned installed content boundaries.
2. Uninstall must remove or deactivate only AI-DOS-owned product content and installation records.
3. Uninstall must not remove Target Project truth, Target source, Target validation assets, Target evidence, or Target-owned configuration unless a future Target integration RFC explicitly defines opt-in Target-owned cleanup behavior.
4. Uninstall must preserve auditability of what was removed when governance or local policy requires an uninstall record.
5. Uninstall must not require access to the private AI-DOS development repository.
6. Uninstall must fail safely when ownership of a file or directory cannot be determined.

This strategy does not specify uninstall commands, file paths, service shutdown behavior, registry behavior, MCP deregistration, CLI behavior, or hosted Provider deprovisioning.

## 18. Runtime Discovery

Runtime discovery is the architectural ability for a consumer to identify an installed AI-DOS product instance and read enough metadata to determine whether it can be consumed.

Discovery requirements:

1. Installed AI-DOS product instances must expose discoverable identity metadata.
2. Discovery metadata must include product identifier, product version, release channel, manifest reference, integrity status or reference, and compatibility declaration.
3. Discovery must distinguish installed AI-DOS product content from Target Project truth.
4. Discovery must not require private development repository access.
5. Discovery must not imply runtime startup, CLI behavior, MCP protocol, hosted Provider activation, or Target integration.
6. Discovery failures must be treated as blockers before trust or execution.

This RFC defines discovery requirements only. It does not define the System Interface, discovery file names, environment variables, IPC, registry APIs, MCP resources, CLI commands, hosted Provider discovery, or runtime behavior.

## 19. Distribution Governance

Distribution governance controls which product content may leave the private AI-DOS development boundary and under what release identity.

Governance responsibilities:

| Responsibility | Governance Requirement |
|:---|:---|
| Release content selection | Only release-approved product content may enter distribution artifacts. |
| Private content exclusion | Release validation must check that private repository history, secrets, unapproved drafts, and self-hosting Target state are excluded. |
| Version assignment | Product version must be assigned before release approval. |
| Channel assignment | Release channel must be approved and visible in manifest metadata. |
| Compatibility declaration | Breaking-change and compatibility posture must be reviewed. |
| Integrity readiness | Checksums and signatures must be produced or explicitly waived by Human Governance for a non-stable channel. |
| Evidence disclosure | Public validation summaries must avoid leaking private evidence while still supporting trust. |
| Release record | Each release must have a durable release record sufficient for audit, rollback, and support decisions. |

Distribution governance must remain separate from Target Project governance. A Target Project may decide whether to consume a release, but it does not approve AI-DOS product release unless Human Governance delegates such authority through a future governance RFC.

## 20. Human Governance Release Gates

An AI-DOS distribution release may proceed only when Human Governance approves the release gate for the target channel.

Minimum release gates:

1. **Scope gate**: release content is identified and bounded.
2. **Private-boundary gate**: private development repository content that is not approved for distribution is excluded.
3. **Metadata gate**: manifest, release notes, version, channel, compatibility declaration, and governance status are present.
4. **Integrity gate**: checksums and signatures or approved channel-specific waivers are present.
5. **Compatibility gate**: breaking-change posture and compatibility expectations are declared.
6. **Validation gate**: release validation summary is complete for the channel.
7. **Rollback gate**: rollback-relevant lineage and known rollback limitations are declared.
8. **Uninstall gate**: AI-DOS-owned content boundaries are declared.
9. **Risk gate**: known release risks are disclosed.
10. **Approval gate**: Human Governance explicitly approves release to the declared channel.

Passing technical checks is not release approval. Human Governance remains final for release authorization, promotion, emergency release acceptance, channel escalation, and waiver approval.

## 21. Risks

| Risk | Impact | Mitigation |
|:---|:---|:---|
| Private repository leakage | Exposes unpublished source, history, evidence, planning, or secrets. | Enforce release assembly boundary, private-boundary validation, and Human Governance release gates. |
| Artifact tampering | Target Project installs untrusted or modified AI-DOS content. | Require manifests, checksums, signatures, and safe-stop behavior on integrity failure. |
| Compatibility ambiguity | Target Projects cannot determine whether a release is safe to consume. | Require compatibility declarations, breaking-change status, and release notes. |
| Distribution mistaken for implementation | Consumers infer CLI, MCP, hosted Provider, or runtime behavior from packaging architecture. | Keep lifecycle definitions architectural and defer executable behavior to future RFCs. |
| Target truth contamination | AI-DOS package includes self-hosting Target Project state or external Target assumptions. | Exclude Target-owned planning and state from product artifacts. |
| Rollback failure | Target Project cannot return to a prior known-good AI-DOS version. | Require rollback metadata, prior-version preservation, and integrity validation. |
| Uninstall damage | Product removal deletes Target-owned files. | Require manifest-owned uninstall boundary and fail-safe ownership checks. |
| Governance bypass | Artifacts are published without Human Governance approval. | Require release gates and durable release records. |
| Channel confusion | Consumers install experimental content as stable. | Require channel metadata, release notes, and channel-specific warnings. |
| Key-management weakness | Signing material compromise undermines trust. | Defer concrete key management to future RFC while requiring separation of signing authority and private key exclusion. |

## 22. Future Authority and RFC Dependencies

This RFC intentionally leaves executable behavior and transport-specific design to future RFCs. Future RFC references are dependency placeholders only; they do not authorize creation of parallel authorities.

Before any future distribution-related authority is created, the proposed authority must be checked against existing AI-DOS product authorities, Target Project authorities, System Layer procedures, Operational Core documents, standards, runtime RFCs, engine RFCs, workflows, commands, templates, and governance records. If an existing authority owns the same semantic responsibility, the existing authority must be reused or corrected in place through its owning governance path. A new authority may be proposed only when no existing authority owns the required responsibility and Human Governance explicitly authorizes the new scope.

Required or expected future authority dependencies include:

| Future Authority Dependency | Dependency Purpose |
|:---|:---|
| Release Engineering and Artifact Assembly RFC | Define concrete release assembly workflow, validation evidence requirements, and artifact publication process. |
| Package Manifest Schema RFC | Define concrete manifest syntax, schema, field validation, and compatibility with STD-010 / M.9 validation semantics. |
| Signing and Provenance RFC | Define cryptographic algorithms, key management, signing authority, attestation, revocation, and verification procedures. |
| Local Installation Controller RFC | Define local install, update, rollback, and uninstall mechanics without broadening this RFC into CLI behavior. |
| AI-DOS System Interface RFC | Define how installed product instances expose approved system-facing discovery and control interfaces. |
| Local CLI RFC | Define command-line behavior, if Human Governance authorizes a local CLI. |
| MCP Provider RFC | Define MCP protocol exposure, if Human Governance authorizes MCP support. |
| Hosted Provider RFC | Define hosted distribution or execution provider architecture, if Human Governance authorizes hosted operation. |
| Evolution Transport RFC | Define release-to-release evolution transport, if needed. |
| Feedback Protocol RFC | Define how Target Projects can send feedback or evidence without exposing private repositories or Target secrets. |
| Target Integration RFC | Define Target-side integration details, if and only if Human Governance authorizes Target integration design. |

No future RFC or authority artifact is automatically authorized by this document. Each requires existing-authority discovery, semantic ownership review, explicit Human Governance authorization, scope, validation expectations, and release or implementation boundaries.

---

## Version History

| Version | Date | Author | Description |
|:---|:---|:---|:---|
| `0.1.0-draft` | 2026-07-15 | Framework Architecture Team | Initial AI-DOS Distribution Foundation RFC defining package, distribution, versioning, install, update, rollback, uninstall, discovery, integrity, compatibility, and governance boundaries. |
| `0.1.1-draft` | 2026-07-15 | Framework Architecture Team | Clarified future authority dependency handling to require existing-authority discovery, semantic ownership review, reuse of existing owning authority, and Human Governance authorization before any new authority artifact is proposed. |

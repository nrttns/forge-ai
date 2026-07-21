# A.6 — AI-DOS Distribution Foundation RFC

> Product distribution architecture · Target-independent · Provider-neutral

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.V2.ARCH-RFC-006` |
| Title | A.6 — AI-DOS Distribution Foundation RFC |
| Version | `1.0.0-draft` |
| Status | Draft |
| Classification | Architecture RFC |
| Document Type | Distribution Foundation RFC |
| Owner | Framework Architecture Team |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Normative Authority | `docs/AI-DOS/Architecture/Constitution/A.1-Constitution.md`; `docs/AI-DOS/Architecture/RFC/Boundary/A.2-AI-DOS-Target-Repository-Operational-Boundary-RFC.md` |
| Dependencies | A.1 Constitution, A.2 Product / Target Operational Boundary, applicable Meta Models and Standards |
| Produces | Product release, package, manifest, integrity, compatibility, installation-lifecycle, and distribution-governance contracts |
| Downstream Consumers | Release engineering, package manifest, signing, installation controller, CLI, MCP, hosted-provider, feedback, and Target-integration specifications |
| Certification Status | Not certified |

## 1. Decision

AI-DOS shall be distributed as governed, versioned release artifacts assembled from approved product truth.

Independent Target Projects shall not require access to the private AI-DOS development repository, Forge AI Target truth, unpublished product work, private governance evidence, or development history.

The distribution architecture is a sibling branch to Runtime architecture:

```text
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation
```

A.6 does not depend on Runtime, Engine Platform, Engine Specializations, System Layer, Operational Core, agents, workflows, or providers for its architectural authority. Released product artifacts may contain approved implementations or documents governed by those contracts, but those domains do not own distribution authority.

## 2. Purpose

This RFC answers:

> How is AI-DOS delivered to an independent Target Project without exposing private development truth or contaminating the reusable product with Target-owned truth?

It defines:

- the private-development to released-product boundary;
- required distribution artifact classes;
- package and manifest responsibilities;
- version, channel, integrity, provenance, and compatibility expectations;
- install, update, rollback, uninstall, and discovery boundaries;
- release governance and safe-stop conditions.

It does not define executable tooling or transport-specific behavior.

## 3. Truth Domains

Distribution shall preserve four distinct truth domains.

| Truth Domain | Owner | Distribution Treatment |
|:---|:---|:---|
| Private development truth | AI-DOS development governance | Never implicitly released |
| AI-DOS product truth | AI-DOS product authority | Eligible for governed release assembly |
| Released product truth | Release authority for a specific version and channel | Immutable release identity consumed by Targets |
| Target Project truth | Target Project authority | Never imported into reusable AI-DOS release artifacts |

Forge AI is the self-application Product Development Target Project. Its ProjectStatus, DevelopmentPhases, Roadmap, source state, evidence, memory, workflow state, registry state, protected areas, and local configuration are Target truth and shall not enter reusable AI-DOS releases.

## 4. Product Boundary

The distribution model contains four boundaries:

```text
Private Development Workspace
    ↓ governed selection
Release Assembly Boundary
    ↓ validated output
Distribution Artifact Set
    ↓ Target-controlled acceptance
Installed AI-DOS Product Instance
```

### 4.1 Private Development Workspace

May contain drafts, experiments, unpublished source, internal evidence, governance deliberation support, development automation, and Forge AI Target truth.

### 4.2 Release Assembly Boundary

Selects only explicitly approved product content and produces release metadata and evidence summaries. It shall reject ambiguous ownership, unapproved content, secrets, private history, and Target truth.

### 4.3 Distribution Artifact Set

Represents one governed AI-DOS release. It shall have a stable identity independent of private commit history.

### 4.4 Installed Product Instance

Is a Target-accessible copy or activation of released AI-DOS product truth. Installation does not transfer ownership of Target truth to AI-DOS and does not grant AI-DOS permission to mutate the Target.

## 5. Required Distribution Artifacts

A release shall contain or reference:

| Artifact | Responsibility |
|:---|:---|
| Product package | Release-approved AI-DOS product content |
| Release manifest | Identity, version, channel, content index, compatibility, integrity, and ownership boundaries |
| Integrity record | Checksums, signature references, provenance, and verification status |
| Release notes | Scope, compatibility posture, breaking changes, known risks, and lifecycle guidance |
| Usage and disclosure notices | License, attribution, support, and disclosure posture where applicable |
| Validation evidence summary | Approved release-validation result without leaking private evidence |

Optional artifacts may include an SBOM, provenance attestation, compatibility matrix, migration advisory, or archival bundle when governed by downstream specifications.

## 6. Package Contract

A package shall separate product content from release metadata.

```text
ai-dos-package/
├── product/
├── manifest/
├── integrity/
├── release-notes/
└── notices/
```

This structure is conceptual. A.6 does not choose archive format, compression, registry, schema syntax, destination path, installer, protocol, service, or command syntax.

A package shall not contain:

- private repository history or remotes;
- unapproved drafts or unpublished branches;
- credentials, signing secrets, or private keys;
- private governance evidence;
- Forge AI or other Target-owned planning and state;
- hidden provider configuration or provider-specific activation assumptions.

## 7. Manifest Contract

The release manifest shall declare at minimum:

- AI-DOS product identifier;
- package identifier;
- product version;
- release channel;
- release date;
- governance and certification posture;
- content index or content roots;
- integrity and provenance references;
- compatibility declaration;
- breaking-change and deprecation status;
- minimum consumer expectations;
- rollback lineage;
- AI-DOS-owned uninstall boundary;
- source-disclosure posture.

The manifest describes a product artifact. It shall not contain Target Project execution authorization, Target planning, Target secrets, or provider-local state.

## 8. Version and Release Channels

Every release shall have exactly one product version and one declared channel.

Product versions shall be independent of private repository commit identifiers and shall support compatibility, update, rollback, and audit decisions.

Baseline channels are:

- Experimental;
- Preview;
- Stable;
- Long-term Support, when explicitly governed;
- Emergency.

Channels express confidence and support posture. They are not transport mechanisms and do not imply registry, CLI, MCP, hosted-provider, or service availability.

## 9. Integrity and Provenance

Before trust or installation, a consumer shall be able to verify:

- package identity;
- manifest identity;
- content integrity;
- signature or approved signature reference;
- release authority;
- provenance posture;
- revocation or invalidation status where applicable.

Missing, mismatched, revoked, expired, ambiguous, or unverifiable integrity data requires safe stop.

A.6 does not select algorithms, key-management systems, certificate infrastructure, transparency logs, or signing tooling.

## 10. Compatibility

A release shall declare:

- product version and compatibility range;
- breaking changes;
- deprecated and removed contracts;
- minimum consumer capabilities;
- migration advisory availability;
- rollback limitations;
- compatibility with applicable A.3–A.5 product contracts when those contracts are included or implemented by the release.

Compatibility is a declaration, not proof of successful Target integration or execution. It does not override Target authority, validation commands, protected areas, or local policy.

## 11. Installation Lifecycle Boundary

Installation consists conceptually of:

1. acquire an artifact from an approved channel;
2. validate identity, manifest, integrity, provenance, and compatibility;
3. stage content without modifying Target truth;
4. determine AI-DOS-owned content and uninstall boundaries;
5. activate or place the installed product instance;
6. record installed version and validation result;
7. verify installed content against the manifest.

Installation does not authorize Runtime startup, provider activation, Target mutation, workflow execution, MCP registration, or CLI behavior.

## 12. Update and Rollback Boundary

An update shall:

1. discover a candidate release through an authorized mechanism;
2. validate candidate identity and compatibility;
3. compare candidate and installed versions;
4. stage without destroying the known-good instance;
5. preserve a rollback candidate;
6. switch or replace only AI-DOS-owned product content;
7. validate the resulting installed state;
8. retain governed rollback evidence.

Rollback shall restore only a prior AI-DOS product instance. It shall not rewrite Target source, ProjectStatus, DevelopmentPhases, Roadmap, evidence, memory, workflow state, registry state, provider state, or protected areas.

Unverifiable prior-version integrity requires safe stop.

## 13. Uninstall Boundary

Uninstall shall remove or deactivate only content and installation records identified as AI-DOS-owned.

It shall preserve Target truth and fail safely when ownership is ambiguous.

Target-owned integration artifacts may be removed only through an explicit, opt-in Target integration contract governed separately from A.6.

## 14. Product Discovery Boundary

An installed AI-DOS product instance shall expose enough approved metadata for a consumer to determine:

- product identity and version;
- release channel;
- manifest reference;
- integrity posture;
- compatibility declaration;
- installed ownership boundary.

Discovery does not imply execution authorization, Runtime startup, provider activation, CLI availability, MCP availability, or Target compatibility.

## 15. Governance and Release Gates

Human Governance remains final for product release authorization.

Minimum gates are:

1. release scope;
2. private-boundary and Target-contamination validation;
3. product-content approval;
4. version and channel assignment;
5. manifest completeness;
6. integrity and provenance readiness;
7. compatibility declaration;
8. validation evidence summary;
9. rollback and uninstall boundary readiness;
10. risk disclosure;
11. explicit release approval.

Technical checks, Engine outputs, certification artifacts, provider results, or repository state do not independently authorize a release.

## 16. Invariants

1. A distribution artifact contains only release-approved product truth.
2. Released product truth never silently includes Target truth.
3. Forge AI paths, planning, state, memory, workflow, registry, and evidence are never defaults for external Targets.
4. A package identity is independent of private repository history.
5. Installation does not authorize Target mutation or execution.
6. Update preserves a rollback boundary before replacing known-good content.
7. Uninstall removes only AI-DOS-owned content.
8. Integrity or ownership ambiguity causes safe stop.
9. Providers and transports do not become release authorities.
10. A.3–A.5 contracts may constrain compatibility but do not own A.6 distribution authority.

## 17. Explicit Non-Ownership

A.6 does not own:

- AI-DOS private development process;
- Target Project planning or state;
- Runtime or Engine behavior;
- release tooling implementation;
- package schema syntax;
- cryptographic implementation;
- installer or updater implementation;
- CLI, MCP, API, registry, or hosted-provider behavior;
- Target integration mechanics;
- feedback or evolution transport;
- product release approval itself.

## 18. Downstream Specifications

Potential downstream specifications include:

- Release Engineering and Artifact Assembly RFC;
- Package Manifest Schema RFC;
- Signing and Provenance RFC;
- Local Installation Controller RFC;
- AI-DOS System Interface RFC;
- Local CLI RFC;
- MCP Provider RFC;
- Hosted Provider RFC;
- Evolution Transport RFC;
- Feedback Protocol RFC;
- Target Integration RFC.

This list authorizes no artifact automatically. Each proposal requires semantic ownership discovery, explicit scope, dependency review, Human Governance authorization, and proof that it does not create parallel authority.

## 19. Conformance

A downstream distribution mechanism conforms when it:

- consumes released product truth rather than private development truth;
- preserves the A.2 product/Target boundary;
- validates identity, integrity, provenance, and compatibility before trust;
- separates installed AI-DOS content from Target-owned content;
- provides safe update, rollback, and uninstall boundaries;
- avoids Forge AI fallback assumptions;
- produces traceable release and installation evidence;
- stops safely when authority, integrity, compatibility, or ownership is unresolved.

## 20. Promotion

Canonical promotion requires:

- consistency with A.1 and A.2;
- metadata and terminology conformance;
- product-purity review;
- Target-independence review;
- Runtime/Engine compatibility-boundary review without dependency inversion;
- distribution governance review;
- Human Governance approval;
- explicit promotion record.

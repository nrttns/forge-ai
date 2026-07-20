# Target Repository Resolution

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.TARGET-REPOSITORY-RESOLUTION` |
| Version | `3.1.0-draft` |
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

This section defines, for the "declaration coherence" duty in Responsibility 2.3, the minimum semantic categories a Target Repository's declarations must resolve for Target Repository Resolution to treat them as coherent.

These criteria describe only the semantic information that must be resolvable. A Target Repository may satisfy them through any declaration form it owns, expressed however that Target Repository chooses.

### 3.1 Target Resource Declarations

- **Minimum resolvable information:** at least one identifiable, dereferenceable Target-owned resource, each with an explicit location within the Target Repository and a stated purpose.
- **Missing or incoherent:** no resource is declared; a declared resource reference does not resolve to an existing location within the Target Repository; or two declarations assign different purposes to the same location without a stated precedence.
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

# Forge AI Future Development Phases — AI-DOS v3 to v8

## Document Metadata

| Field | Value |
|---|---|
| Identifier | `FORGE-AI.FUTURE-DEVELOPMENT-PHASES.V3-V8` |
| Classification | Forge AI Target Project Planning Draft |
| Document Type | Future Development Phases |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Product Under Development | AI-DOS |
| Planning Horizon | AI-DOS v3 → v8 |
| Number of Phases | 3 |
| Status | Future Draft — Not Activated |
| Intended Repository Domain | `docs/Projects/ForgeAI/Planning/` |
| Companion Roadmap | `Forge-AI-Future-Roadmap-v3-to-v8.md` |

> This document is Target-owned future planning. It must not be placed in AI-DOS product truth under `docs/AI-DOS/`. It does not activate a phase, authorize implementation, update ProjectStatus, approve a release, or replace the current DevelopmentPhases.

## 1. Purpose

These Future Development Phases define the three governed maturity transitions required to evolve AI-DOS from its v3 documentation-led baseline into a v8 enterprise-ready AI Operating System.

The phases define **what maturity must be achieved**. The companion Future Roadmap defines **in what dependency and evidence order the capabilities should be delivered**.

Progress is capability-driven rather than document-volume-driven. A version advances only when its reusable behavior is implemented, validated, evidenced, reviewed, and accepted through the applicable Human Governance gate.

## 2. Starting Position — AI-DOS v3

AI-DOS v3 is the normalized baseline:

- provider and Target ownership are documented and substantially separated;
- Forge AI owns Target mission, planning, operational state, and evidence;
- AI-DOS owns reusable product architecture and provider behavior;
- BootSequence, Operational Core, TaskPlanner, ProjectStateUpdater, Runtime, Engines, and distribution behavior exist primarily as specifications;
- the TypeScript CLI provides a package entry, text/JSON status output, and Target path existence checks;
- executable Target resolution, runtime contract enforcement, state-driven planning, governed state transitions, and a complete self-hosting transaction loop are not yet proven;
- enterprise security, isolation, auditability, recovery, and commercial distribution are not yet implemented.

### v3 Baseline Verdict

```text
ARCHITECTURE AND GOVERNANCE MODEL AVAILABLE
EXECUTABLE AI-DOS PROVIDER NOT YET PROVEN
```

## 3. Program-Wide Invariants

1. AI-DOS remains the reusable product and provider system.
2. Forge AI remains the AI-DOS Product Development Target Project.
3. Target mission, planning, ProjectStatus, DevelopmentPhases, Roadmap, and autonomy state remain outside AI-DOS product truth.
4. A specification is never counted as an implemented capability without executable evidence.
5. A passing validation result is not approval, certification, promotion, or release authorization.
6. Continuation never authorizes an automatic Target-state transition.
7. Exactly one bounded work unit is executed when active state authorizes exactly one work unit.
8. Missing, ambiguous, or conflicting authority causes a fail-closed safe stop.
9. External Target operation must not fall back to Forge AI-specific assumptions.
10. Every version requires reproducible completion evidence and Human Governance acceptance before the next version is activated.
11. AI-DOS contracts remain language-independent; TypeScript is the reference runtime implementation, not the owner of product semantics.
12. Model or provider availability never creates execution authority.

# Phase 1 — Executable Foundation

## 4. Version Range

```text
AI-DOS v3 → v4
```

## 5. Mission

Convert the documentation-led provider architecture into the smallest trustworthy executable AI-DOS kernel.

## 6. Capability Outcome

AI-DOS v4 can resolve a declared Target, validate its invocation boundary, enforce its resource boundary, load a bounded Resolved Target Context, execute the real BootSequence, and stop safely before mutation when required authority or context is missing.

## 7. Required Capability Blocks

### 7.1 Target Resolution Kernel

- Validate that the supplied Target path is a supported repository root.
- Discover the Target entry contract without hard-coding Forge AI paths.
- Resolve Target identity, applicable resources, constraints, protected boundaries, permissions, validation requirements, and evidence expectations.
- Produce a versioned Target Repository Resolution Result.
- Reject ambiguous, incomplete, inaccessible, or conflicting Targets.

### 7.2 Runtime Contract and JSON Schema Layer

- Define language-independent, versioned JSON Schemas for Invocation Context, Resolved Target Context, Target Repository Resolution Result, Execution Contract, validation evidence, blocker records, and completion records.
- Compile and enforce schemas at runtime.
- Reject unknown or unsafe input where the contract requires closed schemas.
- Produce stable machine-readable error codes and error paths.
- Generate TypeScript types from, or verify them against, the canonical runtime contracts.
- Treat AJV, Zod, or another validator as an implementation choice, not a second canonical contract authority.

### 7.3 Executable Resource Boundary Enforcement

- Resolve read, write, execute, and protected-resource boundaries from the Target contract and active task.
- Canonicalize paths and detect traversal, symlink escape, and out-of-root access.
- Deny mutation outside explicitly authorized Target resources.
- Protect Forge AI Target truth and AI-DOS product truth according to their separate owners.
- Emit a structured safe-stop record for every rejected operation.
- Validate the boundary independently from model or Execution Provider behavior.

### 7.4 Executable BootSequence

- Implement explicit boot stages rather than returning a constant success message.
- Confirm Target resolution before provider entry.
- Load only the minimum required authority set.
- Detect authority conflict and protected-boundary failures.
- Produce `READY`, `WAITING`, `BLOCKED`, or `INVALID` boot outcomes.
- Never return success merely because a filesystem path exists.

### 7.5 CLI v1 Product Boundary

- Package the executable kernel together with the release-approved AI-DOS provider assets it requires.
- Remove private development-repository assumptions.
- Add product, contract, schema, and provider version reporting.
- Add deterministic exit codes and structured diagnostics.
- Declare supported Node.js versions and platform compatibility.
- Verify package content through clean-install and private-state exclusion tests.

## 8. Required Validation Evidence

- Valid Forge AI Target resolution.
- Valid external fixture Target resolution.
- Missing contract safe-stop.
- Ambiguous Target safe-stop.
- Malformed schema rejection.
- Path traversal, symlink escape, and protected-resource rejection.
- No Forge AI fallback during external Target resolution.
- Package-content and clean-install smoke test.
- Reproducible CLI outcome snapshots.

## 9. Phase 1 Exit Gate

Human Governance may accept AI-DOS v4 only when:

- the real provider boot path is executable end to end;
- every external input crosses a runtime validation boundary;
- protected-resource enforcement operates outside the model prompt;
- negative-path and safe-stop tests pass;
- the packaged CLI operates without access to private Forge AI planning state;
- no Target planning or state is included in AI-DOS product truth.

## 10. Explicit Non-Goals

- Autonomous task selection
- Automatic ProjectStatus mutation
- Multi-agent coordination
- Hosted service operation
- Enterprise RBAC or multi-tenancy
- Commercial release claims

# Phase 2 — Governed Self-Hosting

## 11. Version Range

```text
AI-DOS v5 → v6
```

## 12. Mission

Turn the executable kernel into a governed work engine capable of safely developing AI-DOS through Forge AI and proving the same provider behavior on an external Target.

## 13. AI-DOS v5 — State-Driven Governance Engine

### 13.1 Capability Outcome

AI-DOS can classify Human Governance intent, distinguish bounded tasks from continuation and lifecycle decisions, derive exactly one capability-grounded work unit, and fail closed when no authorized work exists.

### 13.2 Required Capabilities

- Semantic intent classification for continue, review, approve, correct, and stop intents.
- Executable TaskPlanner with candidate discovery, classification, rejection, ranking, and selection evidence.
- Machine-enforced minimum authorization threshold.
- Exact safe-stop outcomes including `NO CAPABILITY-GROUNDED WORK UNIT FOUND`.
- Executable TaskGenerationWorkflow that preserves the selected objective without broadening it.
- ProjectStateUpdater that accepts only explicit or uniquely proven transitions.
- Separate records for validation, review, approval, completion, and state transition.
- Identity-bound approval records rather than a provider-specific `Y/N` convention.
- Idempotency protection against repeated approval or repeated execution.
- Evidence Engine that records changed resources, commands, validation results, blockers, and completion proof.

### 13.3 First Self-Hosting Demonstrator

Before v5 acceptance, Forge AI must use AI-DOS to:

1. resolve Forge AI as the active Target;
2. select one small capability-grounded AI-DOS defect;
3. produce a bounded Execution Contract;
4. implement the correction;
5. run declared validation;
6. generate completion evidence;
7. present the result for Human Governance review without self-approval;
8. stop without activating another work unit.

The demonstrator may produce a reviewable branch or pull request, but repository publication is not required by the provider contract and must be separately authorized.

### 13.4 v5 Evidence Gate

- Unsupported repository-support work is rejected.
- Continuation cannot invent convenient work.
- Review cannot become approval.
- Completion cannot mutate Target state by implication.
- Ambiguous approval requests safe-stop.
- Exactly-one-work-unit behavior is proven through automated tests.
- The first self-hosting demonstrator completes without boundary contamination.

## 14. AI-DOS v6 — Proven Self-Hosting and External Target Portability

### 14.1 Capability Outcome

Forge AI can use AI-DOS to complete a full governed AI-DOS development transaction, and the same provider can complete a bounded transaction on an external Target without Forge AI-specific assumptions.

### 14.2 Required Capabilities

- Execution Provider capability negotiation.
- Transactional flow from resolution to completion evidence.
- Pre-execution and post-execution protected-boundary verification.
- Validation command execution with captured provenance.
- Review and approval handoff without self-approval.
- Recovery from interrupted or failed work.
- Target state commit only after exact authorization.
- External Target adapter contract.
- Sequential cross-Target contamination and portability validation.

### 14.3 Minimum Execution Isolation

Before any real external Target pilot:

- execute commands inside an enforceable process or container boundary;
- apply command policy, timeout, cancellation, and resource limits;
- apply network-deny or explicitly declared network policy;
- prevent secret values from entering prompts, logs, evidence, or generated artifacts by default;
- inject authorized secrets only through a declared provider mechanism;
- preserve Target filesystem and process ownership boundaries;
- record every allowed and rejected action as evidence.

This is the minimum pilot isolation boundary. Enterprise multi-tenant isolation remains a Phase 3 responsibility.

### 14.4 Canonical v6 Proof Flow

```text
Invocation
→ Target Resolution
→ Schema Validation
→ BootSequence
→ Intent Classification
→ One Grounded Work Unit
→ Execution Contract
→ Isolated Bounded Execution
→ Validation Evidence
→ Review
→ Human Governance Decision
→ Exact State Transition when authorized
→ Safe Stop
```

## 15. Required Validation Evidence

- At least three reproducible Forge AI self-hosting cycles.
- At least one real external Target pilot completed from a declared Target package.
- Cross-Target contamination scan.
- Interrupted-execution recovery test.
- Repeated invocation and idempotency test.
- Approval and state-transition replay protection.
- Evidence provenance and tamper-detection test.
- Minimum sandbox, command, network, resource, and secrets-policy enforcement proof.
- No private Forge AI state in distributable AI-DOS artifacts.

## 16. Phase 2 Exit Gate

Human Governance may accept AI-DOS v6 only when:

- self-hosting is executable rather than prompt-dependent;
- an external Target pilot demonstrates provider portability;
- all lifecycle decisions are separately evidenced;
- state changes are deterministic, authorized, and auditable;
- minimum execution isolation is enforced;
- safe-stop behavior is proven under missing, conflicting, and ambiguous inputs.

## 17. Explicit Non-Goals

- Unsupervised production autonomy
- Automatic release approval
- Concurrent enterprise multi-tenancy
- Hosted commercial service
- Autonomous modification of protected governance authorities

# Phase 3 — Enterprise Productization

## 18. Version Range

```text
AI-DOS v7 → v8
```

## 19. Mission

Harden the proven governed engine into a secure, operable, independently distributable enterprise AI Operating System.

## 20. AI-DOS v7 — Security, Operations, Pilot Scale, and Distribution Hardening

### 20.1 Capability Outcome

AI-DOS can be installed, operated, updated, observed, recovered, audited, and evaluated through multiple controlled external pilots.

### 20.2 Required Capabilities

- Signed release manifest and integrity verification.
- Reproducible builds and software bill of materials.
- Install, update, rollback, and uninstall lifecycle implementation.
- Ownership-safe removal and rollback boundaries.
- Authentication and authorization integration points.
- Role-based execution and approval policy.
- Enterprise-grade secret handling and data-classification boundaries.
- Separate append-only execution-audit and approval ledgers.
- Structured logs, metrics, traces, health, and diagnostics.
- Resource limits, timeouts, cancellation, and retry policy hardening.
- Provider and model policy controls.
- Security threat model and abuse-case validation.
- Backup, recovery, and disaster-recovery procedures.
- Controlled multi-Target operation without tenant-service claims.

### 20.3 Controlled External Pilot Requirement

Before v7 acceptance:

- complete at least two controlled pilots on independent external Targets;
- include different repository structures or technology stacks;
- measure safe-stop accuracy, unauthorized-action rejection, recovery behavior, operator intervention, and completion reliability;
- preserve Target isolation and private-state exclusion;
- record product defects separately from Target-specific findings.

### 20.4 v7 Evidence Gate

- Signed artifact verification and tamper rejection.
- Clean install, update, rollback, and uninstall tests.
- Target-owned file preservation proof.
- Least-privilege and protected-resource authorization tests.
- Audit reconstruction of a full work transaction.
- Security assessment with no unresolved critical findings.
- Operational recovery exercise.
- Two controlled external Target pilot reports.

## 21. AI-DOS v8 — Enterprise AI OS Release

### 21.1 Capability Outcome

AI-DOS is a commercially operable, policy-governed execution platform supporting multiple independent Targets and execution providers with measurable reliability and clear organizational controls.

### 21.2 Required Capabilities

- Concurrent multi-Target isolation and policy boundaries.
- Tenant-aware identity and authorization when deployed as a service.
- Organization policy packs and delegated approval models.
- Local CLI, local service/MCP, and managed-provider deployment profiles where separately authorized.
- Enterprise connector and provider adapter contracts.
- Compatibility certification profiles.
- Versioned public API and deprecation policy.
- Service-level objectives and supportability metrics.
- Privacy, retention, residency, and deletion controls.
- Compliance control mapping and evidence export.
- Administrative governance and emergency-stop controls.
- Enterprise onboarding and controlled migration tooling.

## 22. Required Validation Evidence

- Multiple independent Target and organization pilots.
- Isolation tests across Targets, tenants, policies, and execution providers.
- Performance, scale, resilience, and failure-injection results.
- Upgrade compatibility across supported v7→v8 paths.
- External security review or penetration test.
- Operational SLO evidence over an agreed observation period.
- Enterprise operator acceptance test.
- Commercial package, license, support, and release-governance readiness.

## 23. Phase 3 Exit Gate

AI-DOS v8 may be declared enterprise-ready only when:

- executable governance is the default enforcement path;
- security, audit, isolation, and recovery controls are proven;
- distribution lifecycle operations preserve Target ownership;
- external organizations can operate the system without private Forge AI repository access;
- product claims are supported by reproducible operational evidence;
- Human Governance explicitly authorizes the v8 release.

## 24. Explicit Non-Goals

- Removing Human Governance from consequential decisions
- Claiming universal or zero-risk autonomy
- Allowing execution capability to create authority
- Combining Target truth with AI-DOS product truth
- Treating certification or validation as automatic release approval
- Making MCP or any single model/provider mandatory for AI-DOS conformance

## 25. Phase Summary

| Phase | Version Range | Maturity Transition | Required Proof |
|---|---|---|---|
| Phase 1 — Executable Foundation | v3→v4 | Specifications become a fail-closed executable provider kernel | Runtime contracts, real boot, protected-resource enforcement, clean package |
| Phase 2 — Governed Self-Hosting | v5→v6 | Provider becomes a governed, evidence-producing self-hosting engine | First demonstrator, three repeatable cycles, one external pilot, minimum isolation |
| Phase 3 — Enterprise Productization | v7→v8 | Proven engine becomes a secure and commercially operable platform | Two controlled pilots, hardened distribution, audit/security evidence, enterprise acceptance |

## 26. Activation Policy

This future phase model becomes operational only through an explicit Human Governance decision that:

1. identifies the accepted document version;
2. maps current ProjectStatus to exactly one phase and version milestone;
3. confirms dependencies and protected boundaries;
4. authorizes exactly one next work unit or a dedicated planning-state transition;
5. records what remains inactive.

Until that decision exists:

```text
FUTURE DEVELOPMENT PHASES AVAILABLE — NOT ACTIVATED
```

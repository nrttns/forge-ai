# Forge AI Future Roadmap — AI-DOS v3 to v8

## Document Metadata

| Field | Value |
|---|---|
| Identifier | `FORGE-AI.FUTURE-ROADMAP.V3-V8` |
| Classification | Forge AI Target Project Planning Draft |
| Document Type | Future Roadmap |
| Owner | Forge AI Target Project Governance |
| Approval Authority | Human Governance |
| Product Under Development | AI-DOS |
| Planning Horizon | AI-DOS v3 → v8 |
| Status | Future Draft — Not Activated |
| Intended Repository Domain | `docs/Projects/ForgeAI/Planning/` |
| Governing Phase Model | `Forge-AI-Future-Development-Phases-v3-to-v8.md` |

> This Roadmap is Target-owned future direction. It must not be placed in AI-DOS product truth under `docs/AI-DOS/`. It does not activate a milestone, authorize implementation, update ProjectStatus, approve a release, or replace the current Roadmap.

## 1. Purpose

This Roadmap defines the dependency, capability, evidence, and governance sequence for evolving AI-DOS from v3 to v8.

The companion Future Development Phases document owns the three maturity stages. This Roadmap does not redefine those stages. It translates them into version outcomes, delivery streams, dependency gates, proof milestones, and recommended activation order.

The Roadmap is deliberately capability-driven rather than calendar-driven. A delivery forecast may later map accepted milestones to quarters, but dates must not override dependencies, evidence requirements, or Human Governance gates.

## 2. Roadmap Principles

1. Implement behavior before claiming maturity.
2. Prove negative paths as well as successful paths.
3. Resolve Target and authority before execution.
4. Enforce boundaries outside the model prompt.
5. Establish exactly-one-work-unit governance before self-hosting scale.
6. Prove Forge AI self-hosting before claiming external portability.
7. Prove one external Target before controlled multi-Target operation.
8. Prove controlled pilots before enterprise release claims.
9. Keep signed product manifests, execution audit, and approval evidence as separate concerns.
10. Treat CLI, MCP/local service, and managed provider as deployment profiles, not competing product authorities.

## 3. Version Ladder

| Version | Primary Theme | Release Outcome | Governance Gate |
|---|---|---|---|
| v3 | Normalized architecture baseline | Documentation-led provider and early CLI baseline | Baseline accepted for implementation planning |
| v4 | Executable provider kernel | Target resolution, schemas, real BootSequence, protected-resource enforcement, fail-closed CLI | Executable Foundation Acceptance |
| v5 | State-driven governance | Executable TaskPlanner, intent routing, evidence engine, exact transition control, first self-hosting demonstrator | Governance Engine Acceptance |
| v6 | Proven self-hosting | Repeatable Forge AI loop, minimum execution isolation, and one real external Target portability proof | Self-Hosting and Portability Acceptance |
| v7 | Enterprise hardening and pilot scale | Secure distribution, auditability, operations, recovery, and two controlled external pilots | Enterprise Hardening Acceptance |
| v8 | Enterprise AI OS | Multi-Target, policy-governed, commercially operable platform | Explicit v8 Release Authorization |

## 4. Critical Dependency Chain

```text
Language-Independent Runtime Contracts
→ Target Resolution
→ Protected-Resource Enforcement
→ Executable BootSequence
→ Intent Classification
→ TaskPlanner
→ Evidence and Approval Records
→ ProjectStateUpdater
→ First Self-Hosting Demonstrator
→ Minimum Execution Isolation
→ Repeatable Self-Hosting Proof
→ External Target Proof
→ Secure Distribution and Operations
→ Controlled Multi-Target Pilots
→ Enterprise Isolation and Governance
→ v8 Release Authorization
```

No downstream milestone may be activated merely because its documentation exists. Each dependency must be implemented and evidenced first.

## 5. Roadmap Streams

### Stream A — Runtime Contracts and Semantic Safety

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| A1 | v4 | Canonical JSON Schemas for provider boundary objects | Schema suite and positive/negative fixtures |
| A2 | v4 | Stable runtime validation and error taxonomy | Deterministic validation and error-path tests |
| A3 | v5 | Schema-backed planner, evidence, approval, and transition records | Cross-record consistency and replay tests |
| A4 | v7 | Public API compatibility and deprecation contracts | Compatibility suite and migration evidence |
| A5 | v8 | Enterprise policy and integration contract stability | Versioned public profile and conformance tests |

### Stream B — Target Resolution, Resource Boundaries, and Boot

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| B1 | v4 | Repository and Target contract resolution | Forge AI and external fixture resolution tests |
| B2 | v4 | Canonical path, traversal, symlink, and protected-resource enforcement | Unauthorized access rejection tests |
| B3 | v4 | Executable BootSequence and authority conflict detection | Boot-state transition and safe-stop tests |
| B4 | v6 | External Target adapter and no-fallback proof | Real external Target resolution trace |
| B5 | v8 | Concurrent multi-Target and tenant-aware resolution | Isolation and identity-boundary tests |

### Stream C — Planning and Human Governance

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| C1 | v5 | Semantic intent routing | Multilingual intent classification tests |
| C2 | v5 | Capability-grounded TaskPlanner and rejection model | Candidate selection and safe-stop tests |
| C3 | v5 | Validation, review, approval, completion, and transition separation | Lifecycle non-equivalence tests |
| C4 | v5 | Exact and identity-bound approval protocol | Ambiguity, replay, and idempotency tests |
| C5 | v6 | End-to-end governed self-hosting transactions | Three reproducible Forge AI cycles |
| C6 | v8 | Delegated organizational governance policies | Role, policy, and emergency-stop validation |

### Stream D — Execution, Isolation, Validation, and Evidence

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| D1 | v5 | Executable work-unit, validation, and completion contracts | Bounded execution fixture suite |
| D2 | v5 | First Forge AI self-hosting demonstrator | One reviewed correction and completion record |
| D3 | v6 | Minimum process/container, command, network, resource, and secrets boundaries | Isolation escape and leakage rejection tests |
| D4 | v6 | Bounded execution with provenance, recovery, and state-commit control | Interrupted and repeated invocation tests |
| D5 | v6 | External Target execution and contamination isolation | Pilot evidence and no-fallback scan |
| D6 | v7 | Append-only execution audit, approval ledger, observability, and operational controls | Full transaction reconstruction |
| D7 | v8 | Enterprise evidence export and SLO measurement | Operator acceptance and observation-period report |

### Stream E — Distribution and Product Integrity

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| E1 | v4 | Self-contained local CLI package | Clean install and private-state exclusion tests |
| E2 | v7 | Signed manifests, SBOM, and reproducible builds | Signature, tamper, provenance, and rebuild tests |
| E3 | v7 | Install, update, rollback, and uninstall implementation | Cross-version lifecycle and ownership-preservation tests |
| E4 | v8 | Supported deployment profiles and compatibility certification | CLI, local service/MCP, and managed-profile conformance evidence |

### Stream F — Security, Operations, and Enterprise Controls

| Milestone | Target Version | Outcome | Completion Evidence |
|---|---:|---|---|
| F1 | v6 | Minimum safe pilot execution boundary | Sandbox, network, resource, and secret-policy tests |
| F2 | v7 | Threat model, authentication integration, RBAC, and data classification | Security assessment with no critical blocker |
| F3 | v7 | Monitoring, recovery, incident controls, and two controlled external pilots | Recovery exercise and pilot reports |
| F4 | v8 | Multi-tenant isolation and organization policy packs | Tenant isolation and delegated-authority tests |
| F5 | v8 | Privacy, retention, residency, deletion, and compliance evidence controls | Control mapping and evidence export |

## 6. Ordered Delivery Milestones

### Milestone M1 — Runtime Contract Foundation

**Target:** v4

Deliver canonical Invocation Context and Target Repository Resolution Result schemas, runtime validation, stable errors, and negative fixtures.

**Gate:** Invalid or incomplete Target input must fail before provider boot.

### Milestone M2 — Target and Resource Boundary Resolution

**Target:** v4

Deliver Target discovery, repository identity, path canonicalization, protected-resource enforcement, and structured blocker outcomes.

**Gate:** Traversal, symlink escape, and unauthorized resource access must be rejected outside the model prompt.

### Milestone M3 — Real Provider Boot

**Target:** v4

Replace constant CLI success with the executable Target Resolution → Context → Authority → Operational Core boot path.

**Gate:** The CLI must distinguish `READY`, `WAITING`, `BLOCKED`, and `INVALID` and pass clean-package testing.

### Milestone M4 — State-Driven Governance

**Target:** v5

Deliver semantic intent routing, TaskPlanner, TaskGenerationWorkflow, Evidence Engine, and exact transition control.

**Gate:** The system must reject convenient but unsupported work and must not turn review or completion into approval.

### Milestone M5 — First Self-Hosting Demonstrator

**Target:** v5

Use Forge AI as the active Target to select, correct, validate, and present exactly one small AI-DOS defect for Human Governance review.

**Gate:** One complete transaction must end without self-approval, automatic state advancement, or second-work-unit activation.

### Milestone M6 — Minimum Execution Isolation

**Target:** v6

Deliver enforceable process/container, filesystem, command, network, timeout, resource, cancellation, and secret boundaries.

**Gate:** Escape, leakage, unauthorized network, and prohibited command tests must fail closed.

### Milestone M7 — Repeatable Self-Hosting

**Target:** v6

Complete at least three governed Forge AI self-hosting cycles with recovery and idempotency evidence.

**Gate:** Every cycle must be reproducible, auditable, bounded, and independently reviewable.

### Milestone M8 — Real External Target Pilot

**Target:** v6

Complete one bounded work transaction on a declared external Target without Forge AI fallback assumptions.

**Gate:** No Target contamination, private-state dependency, or implicit state mutation may occur.

### Milestone M9 — Secure Distribution and Operations

**Target:** v7

Deliver signed artifacts, SBOM, reproducible builds, lifecycle operations, audit, authentication integration, RBAC, observability, and recovery.

**Gate:** Tamper, least-privilege, rollback, uninstall ownership, and incident-recovery tests must pass.

### Milestone M10 — Controlled Pilot Scale

**Target:** v7

Complete at least two controlled pilots on independent external Targets with different structures or stacks.

**Gate:** Pilot reports must measure safe-stop accuracy, unauthorized-action rejection, recovery, intervention, and completion reliability.

### Milestone M11 — Enterprise Isolation and Governance

**Target:** v8

Deliver concurrent multi-Target or tenant isolation, organization policies, delegated approvals, privacy controls, compatibility profiles, and supported deployment profiles.

**Gate:** Isolation, policy, privacy, resilience, and operator acceptance evidence must be complete.

### Milestone M12 — v8 Enterprise Release

**Target:** v8

Complete external security review, SLO observation, commercial packaging, support readiness, and release evidence.

**Gate:** Human Governance must explicitly authorize the exact v8 release. Technical completion alone cannot release the product.

## 7. Governance Gates

### Gate G1 — v4 Executable Foundation Acceptance

> Can AI-DOS resolve, validate, protect, and boot against a declared Target with fail-closed behavior?

### Gate G2 — v5 Governance Engine Acceptance

> Can AI-DOS derive or reject exactly one authorized work unit without inventing authority or mutating state by implication?

### Gate G3 — v6 Self-Hosting and Portability Acceptance

> Can Forge AI complete reproducible governed self-hosting transactions, and can the same provider operate against a real external Target under minimum enforceable isolation?

### Gate G4 — v7 Enterprise Hardening Acceptance

> Can AI-DOS be securely distributed, operated, audited, updated, recovered, and demonstrated through at least two controlled external pilots without violating Target ownership?

### Gate G5 — v8 Release Authorization

> Is AI-DOS demonstrably secure, isolated, operable, supportable, and commercially ready for its declared enterprise deployment profiles?

## 8. Program Metrics

| Metric | v4 Target | v6 Target | v8 Target |
|---|---:|---:|---:|
| Provider boundary objects with runtime schemas | 100% | 100% | 100% |
| Required negative-path tests passing | 100% | 100% | 100% |
| Unauthorized resource mutations accepted | 0 | 0 | 0 |
| Unauthorized state transitions accepted | N/A | 0 | 0 |
| Work units selected without capability trace | N/A | 0 | 0 |
| Forge AI-specific assumptions in external Target execution | N/A | 0 | 0 |
| Reproducible self-hosting cycles | N/A | ≥3 | Continuous governed operation |
| Real independent external Target pilots | Fixture only | ≥1 | Multiple organizations and Targets |
| Controlled external pilot reports | N/A | ≥1 | ≥2 before v8 release evaluation |
| Critical unresolved security findings | N/A | N/A | 0 |
| Auditable execution transactions | Partial | 100% | 100% |
| Proven rollback and recovery paths | Boot only | Work-unit recovery | Product and operational recovery |

## 9. Delivery Forecast Policy

The Roadmap does not assign fixed quarters by default. A quarter-based delivery forecast may be created only after:

- resource and capacity assumptions are declared;
- current ProjectStatus identifies the active version objective;
- milestone dependencies are satisfied;
- risk and external-pilot availability are known;
- the forecast is labeled as an estimate rather than authority.

A calendar deadline must never:

- lower an acceptance threshold;
- skip v7 and jump from v6 to v8;
- convert a compliance map into compliance certification;
- treat a pilot or sales agreement as technical completion evidence;
- activate a future milestone automatically.

## 10. Recommended First Work Unit After Activation

```text
Define and implement the versioned Invocation Context and Target Repository
Resolution Result runtime contracts, including canonical JSON Schemas,
TypeScript representations, runtime validation, stable error outcomes, and
negative-path tests, without implementing TaskPlanner or state mutation.
```

This is a recommendation only. It does not authorize execution.

## 11. Activation Policy

This Future Roadmap becomes operational only through an explicit Human Governance decision that:

1. identifies the accepted Roadmap version;
2. confirms the governing Future Development Phases version;
3. maps current ProjectStatus to exactly one milestone;
4. confirms completed dependencies and protected boundaries;
5. authorizes exactly one next work unit or a dedicated planning-state transition;
6. records all later milestones as inactive.

Until that decision exists:

```text
FUTURE ROADMAP AVAILABLE — NOT ACTIVATED
```

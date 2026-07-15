# AI-DOS Runtime RFC Family

## Purpose

This README owns navigation for the Runtime RFC family only. It does not claim repository-wide RFC ownership and does not redefine Boundary, Engine Platform, Engine Specialization, Distribution, System Layer, Operational Core, Agent, Workflow, Validation, Review, or Certification authority.

## Upstream Authority

```text
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ↓
A.3 Runtime Architecture
```

A.3 defines the governed, Target-independent, provider-neutral execution substrate. It consumes assembled authority and execution inputs; it does not own Target Project truth or create execution authorization.

## Runtime Family

| Artifact | Role |
|:---|:---|
| [`A.3-Runtime-Architecture-RFC.md`](A.3-Runtime-Architecture-RFC.md) | Runtime Architecture authority for execution contracts, runtime lifecycle, runtime state, provider boundaries, traceability, and safe-stop behavior. |

## Downstream Architecture

| Family | Relationship | Directory |
|:---|:---|:---|
| Engine Platform | Consumes A.3 and defines the shared Engine substrate. | [`../EnginePlatform/`](../EnginePlatform/) |
| Engine Specializations | Consume A.4 foundations through A.5.0 and define capability-peer specializations. | [`../EngineSpecializations/`](../EngineSpecializations/) |

Boundary is upstream of Runtime: [`../Boundary/`](../Boundary/).

Distribution is a sibling branch under A.2, not a Runtime downstream: [`../Distribution/`](../Distribution/).

## Runtime Boundary Rules

Runtime may:

- consume Invocation Context, Resolved Target Context, AI-DOS Authority Context, Execution Contracts, and provider capability declarations;
- coordinate authorized execution and collect traceable runtime evidence;
- enforce lifecycle, state, isolation, and safe-stop rules.

Runtime must not:

- own or mutate Target ProjectStatus, DevelopmentPhases, Roadmap, source truth, protected-area truth, or live Target state without explicit Target authority;
- create Human Governance, validation, review, or certification verdict authority;
- treat agents, CLIs, MCP services, or hosted systems as permanent architecture owners rather than replaceable Execution Providers;
- use Forge AI paths or state as fallback for an external Target;
- treat A.5.x numeric order as a mandatory pipeline.

## Evidence Placement

Runtime-family reviews and migration evidence belong in [`../../Reports/`](../../Reports/). Historical discovery belongs in [`../../Discovery/`](../../Discovery/). Evidence artifacts do not become Runtime authority unless explicitly promoted through the owning governance path.

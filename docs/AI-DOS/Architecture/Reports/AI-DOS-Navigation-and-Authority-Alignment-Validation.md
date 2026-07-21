# AI-DOS Navigation and Authority Alignment Validation

## Status

**PASS WITH FOLLOW-UP VALIDATION**

The active AI-DOS navigation surfaces now represent the normalized A.1–A.6 architecture and no longer route repository-wide architecture through the Runtime family README.

## Scope

Validated and updated:

- `docs/AI-DOS/README.md`
- `docs/AI-DOS/Architecture/README.md`
- `docs/AI-DOS/Architecture/RFC/README.md`
- `docs/AI-DOS/Architecture/RFC/Runtime/README.md`

Validation also checked repository code-search results for representative obsolete architecture and path markers.

## Canonical Authority Graph

```text
Human Governance
    ↓
A.1 Constitution
    ↓
A.2 Product / Target Operational Boundary
    ├── A.3 Runtime → A.4 Engine Platform → A.5 Engine Specializations
    └── A.6 Distribution Foundation
```

## Confirmed Rules

1. A.0 discovery material is historical evidence, not normative architecture authority.
2. A.4.1–A.4.7 are sibling Engine Platform foundation contracts.
3. A.5.1–A.5.12 are capability-peer specializations under A.5.0.
4. A.6 is a sibling architecture branch to A.3–A.5 under A.2.
5. Runtime family navigation owns Runtime only.
6. Product navigation exposes both execution and distribution branches.
7. Forge AI remains the self-application Product Development Target Project and is not identified as AI-DOS itself.
8. Target-owned planning, source, evidence, secrets, protected areas, and live state remain outside reusable AI-DOS product truth.

## Representative Repository Searches

The following exact obsolete markers returned no active repository code-search matches during this validation pass:

- `A.6 Engine Model`
- `Stage A.6`
- `Phase A`
- `docs/AI-DOS/Runtime/`
- `A.0-Framework-Audit.md`
- obsolete `Runtime / Engine navigation` wording from the prior product README

These checks support the conclusion that the former numbering meaning, Runtime path, and top-level navigation model are no longer active.

## Updated Navigation Ownership

| Surface | Responsibility |
|:---|:---|
| `docs/AI-DOS/README.md` | Product-level navigation and product/Target separation |
| `docs/AI-DOS/Architecture/README.md` | Architecture-area topology, ownership, and truth-boundary navigation |
| `docs/AI-DOS/Architecture/RFC/README.md` | RFC-family topology and cross-family semantics |
| `docs/AI-DOS/Architecture/RFC/Runtime/README.md` | Runtime-family navigation only |

## Residual Validation Requirement

GitHub code search is not a substitute for a complete local filesystem and Markdown-link validator. Before architecture freeze or release certification, run a repository-local validation that checks:

- every Markdown link target;
- every plain-text old-path occurrence;
- metadata path references;
- Mermaid and text authority chains;
- case-sensitive path correctness;
- forbidden Target-planning references used as AI-DOS authority;
- duplicate canonical locations.

No unresolved architectural conflict was identified in the navigation surfaces updated by this work unit.

## Verdict

The navigation and authority layer is aligned with the normalized AI-DOS architecture.

The next bounded work unit is **Operational Core and Governance alignment** against the final A.1–A.6 contracts, followed by repository-local zero-obsolete-reference and broken-link certification.

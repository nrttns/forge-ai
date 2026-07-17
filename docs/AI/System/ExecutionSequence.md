# Execution Sequence

## Document Metadata

| Field | Value |
|:---|:---|
| Identifier | `AI-DOS.SYSTEM.EXECUTION-SEQUENCE` |
| Version | `3.0.1-draft` |
| Status | Draft |
| Classification | System Layer Component Contract |
| Owner | AI-DOS System Layer |
| Review Authority | Framework Governance |
| Approval Authority | Human Governance |
| Parent Contract | `docs/AI/System/SystemLayer.md` |
| Scope | Preparation and handoff of one authorized Execution Contract. |
| Inputs | Valid `PROCEED` Decision Result; provider capability declaration; execution and validation boundaries. |
| Outputs | Execution Contract or safe-stop result; Operational Core handoff evidence. |

## 1. Purpose

Execution Sequence converts one valid `PROCEED` decision into a bounded Execution Contract and hands it to the Operational Core and selected Execution Provider.

It does not execute the mutation itself, select a different work unit, broaden scope, approve completion, or update Target state.

## 2. Execution Contract

A valid contract contains:

- exact objective and authorized action;
- Target Repository and affected artifact boundary;
- applicable authority trace;
- selected provider and required capability;
- allowed and prohibited mutations;
- validation requirements;
- evidence requirements;
- stop and rollback conditions;
- completion condition;
- source-control continuation target when the authorized work corrects review findings for an existing open pull request.

## 3. Preparation Rules

Execution Sequence shall:

1. accept only a valid `PROCEED` Decision Result;
2. verify provider capability separately from provider availability;
3. preserve the exact authorized scope;
4. preserve the existing pull request head branch as the canonical continuation target for review-finding corrections unless Human Governance explicitly authorizes a replacement pull request;
5. reject implicit mutation authority derived from continuation intent, installation, registry presence, or completion;
6. define validation before handoff;
7. produce a traceable handoff without assuming successful execution.

## 4. Non-Ownership

Execution Sequence does not own work selection, Target planning, authority resolution, provider implementation, Runtime or Engine outcomes, validation verdicts, certification, release, ProjectStatus updates, or Human Governance approval.

## 5. Safe Stop

Stop when the decision is not `PROCEED`, the provider capability is missing or incompatible, mutation scope is ambiguous, validation cannot be performed, integrity is uncertain, or a protected boundary lacks explicit authorization.

## 6. Handoff

```text
Valid PROCEED Decision Result
    ↓
Execution Contract
    ↓
Operational Core
    ↓
Selected Execution Provider
    ↓
Validation and Evidence
```

ProjectStateUpdater may be considered only after execution and evidence, and only when the exact Target-state transition is explicitly authorized.

## 7. Validation

- one bounded contract produced;
- provider capability verified;
- allowed and prohibited mutations explicit;
- validation and evidence defined before execution;
- no automatic state, approval, certification, promotion, or release transition.
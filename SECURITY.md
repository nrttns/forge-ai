# Security Policy

## Supported scope

Security reports are accepted for the current default branch of Forge AI. Draft architecture documents, roadmap items, and unimplemented capabilities are not claims of deployed security behavior.

Forge AI is the self-hosting Target Project. AI-DOS is the reusable product. A report should identify which boundary is affected and must not assume that Target Project state is AI-DOS product behavior.

## Reporting a vulnerability

Use GitHub's private vulnerability reporting for this repository.

Do not disclose a suspected vulnerability in a public issue, pull request, discussion, commit, or social channel. Include:

- the affected path, component, or version;
- impact and realistic attack conditions;
- reproducible steps or a minimal proof of concept;
- any known mitigation;
- whether credentials, personal data, or another Target repository may be affected.

If private vulnerability reporting is unavailable, contact the repository owner privately through the GitHub account before sending sensitive details.

## Response boundaries

A report may be validated, rejected, or classified as an architectural concern rather than an implemented vulnerability. Receipt of a report does not authorize access to systems, data, accounts, credentials, or third-party Targets.

Do not retain, modify, exfiltrate, or publicly disclose data encountered during research. Stop testing when an action could cause harm, persistence, service disruption, or unauthorized state mutation.

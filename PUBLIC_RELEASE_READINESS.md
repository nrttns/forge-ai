# Forge AI Public Release Readiness

## Purpose

This document defines the bounded gate for changing the `nrttns/forge-ai` repository from private to public visibility.

Public visibility is a repository-administration action. It does not approve, certify, freeze, release, or activate Forge AI or AI-DOS capabilities, and it does not make either project open source.

## Completed by this readiness change

- [x] Forge AI and AI-DOS identities are stated separately in the repository README.
- [x] The npm package remains protected from accidental publication with `"private": true`.
- [x] The inaccurate implicit `ISC` declaration is replaced with `UNLICENSED`.
- [x] Security reporting boundaries are documented.
- [x] External contributions are explicitly closed during public preview.
- [x] Common local credentials, certificates, environment files, editor state, build output, dependencies, and coverage output are ignored.
- [x] Current indexed repository content was searched for common token, key, password, local-path, and private-key indicators; no indexed matches were returned.

## Required before changing visibility

- [ ] Merge the public-release-readiness pull request after Human Governance review.
- [ ] Scan the complete git history, all branches, and tags with a dedicated secret scanner. Current-content search is not a substitute for full-history scanning.
- [ ] Rotate and invalidate every credential discovered by the full-history scan before publication; deleting a file or commit alone is insufficient.
- [ ] Review repository history for personal data, private attachments, unpublished third-party material, and machine-specific paths.
- [ ] Confirm that publishing Target-owned ProjectStatus, Roadmap, DevelopmentPhases, reports, and evidence is intentional.
- [ ] Enable GitHub private vulnerability reporting.
- [ ] Enable GitHub secret scanning and push protection where available.
- [ ] Review branch protection, merge policy, Actions permissions, fork pull-request policy, and default workflow-token permissions.
- [ ] Confirm that no required private submodule, sibling path, workspace, source snapshot, runtime, build, test, package, or release dependency exists.
- [ ] Record the Human Governance decision authorizing the exact private-to-public visibility transition.

## License position

No open-source license is granted by this readiness change. Repository visibility and licensing are separate decisions.

The package is marked `UNLICENSED`. An open-source or source-available license may be adopted only through a later explicit Human Governance decision.

## Visibility transition

Only a repository administrator may perform the final GitHub visibility change after every required item above is satisfied. The transition must be verified by reopening the repository without authenticated access and confirming the expected README, security policy, contribution policy, default branch, and repository metadata.

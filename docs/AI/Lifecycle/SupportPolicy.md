# AI Framework Support Policy

## Status

Status: AI Framework v1.0 RC2 Lifecycle Policy

Document Type: Support Policy

Authority: `docs/AI/Lifecycle/README.md`

---

## Purpose

This document defines support expectations for AI Framework lifecycle stages.

Support means documentation and process compatibility for framework adopters. It does not mean runtime software support, application support, hosting support, infrastructure support, or product support for Forge AI source code.

---

## RC Support

During RC status, support focuses on:

- correcting framework documentation defects;
- resolving broken references;
- clarifying authority, validation, and certification boundaries;
- improving scenario testing evidence;
- reviewing template adoption safety;
- preparing operational validation.

RC support may include incompatible corrections if the framework has not yet been certified, but such changes should still be recorded and reviewed.

---

## Operational Validation Support

During Operational Validation, support focuses on evidence from realistic agent and project workflows.

Expected support includes:

- documenting operational findings;
- clarifying procedures that confuse agents or humans;
- repairing lifecycle, validation, testing, template, or tooling gaps;
- preserving source-code safety unless implementation work is explicitly scoped;
- identifying blockers before certification.

Operational Validation support must not claim certified status before certification audit completion.

---

## Certified v1.0 Support

After certified v1.0, support focuses on stable adoption.

Expected support includes:

- patch-level documentation corrections;
- compatibility-preserving clarification;
- changelog maintenance;
- deprecation notices for future changes;
- migration guidance for future minor or major releases;
- validation and certification evidence preservation.

Certified support should avoid breaking changes except through approved major release planning.

---

## Maintenance Support

During Maintenance, support focuses on preserving the certified baseline.

Expected support includes:

- reference repair;
- typo and consistency corrections;
- process clarifications;
- compatibility reviews;
- changelog updates;
- support for planned migration to a newer release.

Maintenance support does not require adding new capabilities unless a new minor release is approved.

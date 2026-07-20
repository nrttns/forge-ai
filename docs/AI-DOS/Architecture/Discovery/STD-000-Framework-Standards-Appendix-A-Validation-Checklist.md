# Appendix A: Validation Checklist

> **Parent Document:** [STD-000 — Framework Standards](../Standards/STD-000-Framework-Standards.md) (`AI-DOS-STD-000`)
> **Version:** 3.0.0-beta
> **Status:** Draft

---

## A.1 Purpose

This appendix provides the canonical validation checklist for every Framework Standard progressing through the [Standards Lifecycle](../Standards/STD-000-Framework-Standards.md#9-standards-lifecycle). The checklist is derived directly from the [Validation](../Standards/STD-000-Framework-Standards.md#14-validation) section of STD-000 and operationalizes the validation scope, quality gates, evidence requirements, and constraints defined therein.

Every Framework Standard shall be validated against this checklist before it may proceed to [governance review](../Standards/STD-000-Framework-Standards.md#13-governance) and [certification](../Standards/STD-000-Framework-Standards.md#15-certification).

---

## A.2 Checklist Conventions

| Convention | Description |
|:---|:---|
| **Check ID** | Unique identifier (format: `VC-<CATEGORY>-<SEQ>`). |
| **Category** | The validation domain (Structural, Metadata, Constitutional, Meta Model, Terminology, Relationship, Cross-Reference, Governance, Version). |
| **Requirement** | The specific validation requirement derived from STD-000 Section 14. |
| **Constitutional Reference** | The STD-000 section or principle establishing this requirement. |
| **Severity** | Blocking (must pass) or Advisory (should pass). |
| **Evidence Expected** | The type of evidence the validator shall produce. |

---

## A.3 Structural Compliance Checks

| Check ID | Requirement                                                                                                                            | Constitutional Reference | Severity | Evidence Expected |
|:---|:---------------------------------------------------------------------------------------------------------------------------------------|:---|:---|:---|
| VC-STR-001 | All mandatory sections from [Section 11 — Standards Structure](../Standards/STD-000-Framework-Standards.md#11-standards-structure) are present. | §11 Mandatory Structure | Blocking | Section inventory with pass/fail per section. |
| VC-STR-002 | Sections appear in the canonical order defined by STD-000.                                                                             | §11 Section Rules | Blocking | Section order comparison against canonical template. |
| VC-STR-003 | Optional sections are explicitly identified as such.                                                                                   | §11 Section Rules | Advisory | Annotation of optional sections. |
| VC-STR-004 | Domain-specific extension sections appear after the mandatory structure.                                                               | §11 Extension Rules | Blocking | Position verification of extension sections. |
| VC-STR-005 | Normative requirements use consistent wording ("shall", "shall not", "may", "should").                                                 | §11 Section Rules | Advisory | Linguistic consistency report. |
| VC-STR-006 | Completion statements conclude major sections.                                                                                         | §11 Section Rules | Advisory | Completion statement inventory. |
| VC-STR-007 | Headings use consistent numbering.                                                                                                     | §11 Section Rules | Advisory | Heading format audit. |

---

## A.4 Metadata Completeness Checks

| Check ID | Requirement | Constitutional Reference | Severity | Evidence Expected                                                                                           |
|:---|:---|:---|:---|:------------------------------------------------------------------------------------------------------------|
| VC-MET-001 | Document declares its Identifier. | §10 Identity Components | Blocking | Identifier field populated.                                                                                 |
| VC-MET-002 | Document declares its Canonical Title. | §10 Identity Components | Blocking | Title field populated.                                                                                      |
| VC-MET-003 | Document declares its Version. | §10 Identity Components | Blocking | Version field populated.                                                                                    |
| VC-MET-004 | Document declares its Status. | §10 Identity Components | Blocking | Status field populated and matches lifecycle state.                                                         |
| VC-MET-005 | Document declares its Classification. | §10 Identity Components | Blocking | Classification matches [Section 8](../Standards/STD-000-Framework-Standards.md#8-standards-classification) taxonomy. |
| VC-MET-006 | Document declares its Authority. | §10 Identity Components | Blocking | Authority field populated and valid.                                                                        |
| VC-MET-007 | Document declares its Owner. | §10 Identity Components | Blocking | Owner field populated and accountable.                                                                      |
| VC-MET-008 | Document declares its Maintainers. | §11 Document Metadata | Advisory | Maintainers field populated.                                                                                |
| VC-MET-009 | Document declares its Creation Date. | §11 Document Metadata | Advisory | Creation date populated.                                                                                    |
| VC-MET-010 | Document declares its Last Updated date. | §11 Document Metadata | Advisory | Last Updated date populated and not earlier than Creation Date.                                             |
| VC-MET-011 | Document declares its Revision History. | Document header convention | Advisory | Revision History table present with at least one entry.                                                     |

---

## A.5 Constitutional Alignment Checks

| Check ID | Requirement | Constitutional Reference | Severity | Evidence Expected |
|:---|:---|:---|:---|:---|
| VC-CON-001 | The standard does not redefine constitutional authority. | [A.1 §5](../Constitution/A.1-Constitution.md#5-constitutional-scope); STD-000 §5 | Blocking | Authority analysis against Constitution. |
| VC-CON-002 | The standard does not contradict constitutional principles. | A.1 §6 Fundamental Principles | Blocking | Principle-by-principle compliance assessment. |
| VC-CON-003 | The standard does not override Human Governance authority. | A.1 §7 Human Authority | Blocking | Human authority boundary verification. |
| VC-CON-004 | The standard preserves the authority chain (Human Governance → Constitution → Governance → Standard). | A.1 §4 Constitutional Authority; STD-000 §5 | Blocking | Authority chain trace. |
| VC-CON-005 | The standard does not bypass constitutional amendment procedures. | A.1 §18 Amendment Process | Blocking | Change governance verification. |
| VC-CON-006 | The standard complies with constitutional invariants. | A.1 §10 Constitutional Invariants | Blocking | Invariant compliance matrix. |

---

## A.6 Meta Model Alignment Checks

| Check ID | Requirement | Constitutional Reference                                                                             | Severity | Evidence Expected |
|:---|:---|:-----------------------------------------------------------------------------------------------------|:---|:---|
| VC-META-001 | The standard consumes Meta Model concepts rather than redefining them. | [§6 Dependency Rule](../Standards/STD-000-Framework-Standards.md#6-relationship-to-m0-meta-model-integration) | Blocking | Concept origin analysis. |
| VC-META-002 | The standard derives reusable concepts from M.0 where applicable. | §6 Derivation Rules                                                                                  | Advisory | Derivation trace for each model element. |
| VC-META-003 | The standard does not replace M.0. | §6 Constraints                                                                                       | Blocking | Scope boundary verification. |
| VC-META-004 | The standard does not introduce conflicting identity models. | §6 Constraints                                                                                       | Blocking | Identity model comparison against M.0. |
| VC-META-005 | The standard does not create incompatible lifecycle definitions. | §6 Constraints                                                                                       | Blocking | Lifecycle comparison against M.0. |
| VC-META-006 | The standard reuses M.0 definitions for Identity, Ownership, Authority, Lifecycle, State, Relationships, References, and Evidence. | §6 Reuse Rules                                                                                       | Advisory | Reuse compliance inventory. |

---

## A.7 Terminology Consistency Checks

| Check ID | Requirement | Constitutional Reference | Severity | Evidence Expected |
|:---|:---|:---|:---|:---|
| VC-TERM-001 | Terms are used consistently throughout the standard. | [§19 Glossary](../Standards/STD-000-Framework-Standards.md#19-glossary); §19 Terminology Rules | Blocking | Terminology usage audit. |
| VC-TERM-002 | No conflicting definitions of canonical terms exist within the standard. | A.1 §9 Source of Truth | Blocking | Definition uniqueness verification. |
| VC-TERM-003 | Canonical terms from STD-000 Glossary are used where applicable. | §19 Terminology Rules | Advisory | Canonical term adoption report. |
| VC-TERM-004 | Synonyms are avoided where canonical terms exist. | §19 Terminology Rules | Advisory | Synonym usage inventory. |
| VC-TERM-005 | New terms are identified and defined in the standard's Glossary section. | §19 Terminology Rules | Advisory | New term definitions inventory. |
| VC-TERM-006 | Higher-authority definitions take precedence where conflicts exist. | §19 Terminology Rules | Blocking | Authority precedence verification. |

---

## A.8 Relationship Integrity Checks

| Check ID | Requirement | Constitutional Reference                                                                     | Severity | Evidence Expected |
|:---|:---|:---------------------------------------------------------------------------------------------|:---|:---|
| VC-REL-001 | All declared relationships are explicit. | [§12 Relationship Principles](../Standards/STD-000-Framework-Standards.md#12-standards-relationships) | Blocking | Relationship inventory. |
| VC-REL-002 | All normative relationships are directional. | §12 Relationship Principles                                                                  | Blocking | Direction verification per relationship. |
| VC-REL-003 | No circular normative dependencies exist. | §12 Relationship Principles                                                                  | Blocking | Dependency graph cycle analysis. |
| VC-REL-004 | Relationships preserve authority (lower standards do not redefine higher authority). | §12 Relationship Principles                                                                  | Blocking | Authority preservation verification. |
| VC-REL-005 | The standard does not create conflicting canonical models in other documents. | §12 Dependency Rules                                                                         | Blocking | Cross-document consistency check. |
| VC-REL-006 | Normative relationships include rationale and authority basis. | §12 Traceability Rules                                                                       | Advisory | Traceability record per relationship. |

---

## A.9 Cross-Reference Accuracy Checks

| Check ID | Requirement | Constitutional Reference                                           | Severity | Evidence Expected |
|:---|:---|:-------------------------------------------------------------------|:---|:---|
| VC-XREF-001 | All internal cross-references resolve to valid sections. | §11 Section Rules; §18 Reference Principles                        | Blocking | Link resolution report. |
| VC-XREF-002 | All external references resolve to valid documents. | [§18 References](../Standards/STD-000-Framework-Standards.md#18-references) | Blocking | External reference resolution report. |
| VC-XREF-003 | Normative references are identified as such. | §18 Reference Categories                                           | Advisory | Normative/informative classification audit. |
| VC-XREF-004 | No circular normative references exist. | §18 Reference Constraints                                          | Blocking | Reference graph cycle analysis. |
| VC-XREF-005 | Canonical identifiers are used for cross-references where available. | §18 Cross-Reference Rules                                          | Advisory | Identifier usage audit. |
| VC-XREF-006 | References do not cite conflicting documents as normative authority. | §18 Reference Constraints                                          | Blocking | Normative authority conflict check. |

---

## A.10 Governance Completeness Checks

| Check ID | Requirement | Constitutional Reference                                                                                       | Severity | Evidence Expected |
|:---|:---|:---------------------------------------------------------------------------------------------------------------|:---|:---|
| VC-GOV-001 | The standard identifies a single accountable owner. | [§13 Governance Principles](../Standards/STD-000-Framework-Standards.md#13-governance); §7 Standards Philosophy | Blocking | Owner assignment verification. |
| VC-GOV-002 | The standard declares its governance authority. | §5 Authority                                                                                                   | Blocking | Authority declaration verification. |
| VC-GOV-003 | The standard's lifecycle state is consistent with its governance status. | [§9 Standards Lifecycle](../Standards/STD-000-Framework-Standards.md#9-standards-lifecycle)                    | Blocking | State-to-status consistency check. |
| VC-GOV-004 | The standard does not create parallel governance structures. | §5 Authority Constraints                                                                                       | Blocking | Governance structure uniqueness verification. |
| VC-GOV-005 | The standard includes success criteria for each major section. | §11 Section Rules                                                                                              | Advisory | Success criteria completeness inventory. |
| VC-GOV-006 | The standard includes completion statements for major sections. | §11 Section Rules                                                                                              | Advisory | Completion statement inventory. |
| VC-GOV-007 | The standard's classification is consistent with its scope and authority. | [§8 Standards Classification](../Standards/STD-000-Framework-Standards.md#8-standards-classification)                   | Blocking | Classification-scope alignment check. |

---

## A.11 Version Consistency Checks

| Check ID | Requirement | Constitutional Reference                                               | Severity | Evidence Expected |
|:---|:---|:-----------------------------------------------------------------------|:---|:---|
| VC-VER-001 | The version follows semantic versioning format (MAJOR.MINOR.PATCH[-STATUS]). | [§16 Version Format](../Standards/STD-000-Framework-Standards.md#16-versioning) | Blocking | Version format validation. |
| VC-VER-002 | The version status suffix is consistent with the lifecycle state. | §16 Version Semantics; §9 Standards Lifecycle                          | Blocking | Status-to-lifecycle mapping check. |
| VC-VER-003 | The Revision History is present and consistent with version changes. | §16 Version History                                                    | Advisory | Revision history completeness check. |
| VC-VER-004 | No version identifier is reused. | §16 Constraints                                                        | Blocking | Version uniqueness verification. |
| VC-VER-005 | The version change classification is documented (Editorial, Clarification, Structural, Governance, Meta Model Alignment, Breaking Change, Compatibility Improvement). | §16 Change Classification                                              | Advisory | Change classification record. |

---

## A.12 Checklist Summary

### A.12.1 By Category

| Category | Total Checks | Blocking | Advisory |
|:---|:---:|:---:|:---:|
| Structural Compliance | 7 | 3 | 4 |
| Metadata Completeness | 11 | 7 | 4 |
| Constitutional Alignment | 6 | 6 | 0 |
| Meta Model Alignment | 6 | 4 | 2 |
| Terminology Consistency | 6 | 3 | 3 |
| Relationship Integrity | 6 | 5 | 1 |
| Cross-Reference Accuracy | 6 | 4 | 2 |
| Governance Completeness | 7 | 4 | 3 |
| Version Consistency | 5 | 3 | 2 |
| **Total** | **60** | **39** | **21** |

### A.12.2 Validation Outcome Rules

| Outcome | Condition | Action |
|:---|:---|:---|
| **Pass** | All 39 blocking checks pass. Advisory checks may remain open. | Standard may proceed to governance review. |
| **Conditional Pass** | All blocking checks pass; 5 or fewer advisory checks remain open. | Standard may proceed with documented advisory findings. |
| **Fail** | One or more blocking checks fail. | Standard shall be returned to the author with corrective action requirements. |

### A.12.3 Validation Evidence Record

Every validation shall produce a record conforming to the following schema:

| Field | Description |
|:---|:---|
| **Validation ID** | Unique identifier for the validation instance. |
| **Standard Identifier** | The `AI-DOS-STD-*` identifier being validated. |
| **Version** | The version of the standard being validated. |
| **Validation Date** | Date the validation was performed. |
| **Validator** | Person or role performing the validation. |
| **Check Results** | Per-check outcome (Pass / Fail / Advisory Open). |
| **Findings** | List of findings with severity and Check ID references. |
| **Evidence References** | Supporting artifacts, analysis reports, or audit trails. |
| **Overall Result** | Pass / Conditional Pass / Fail. |
| **Corrective Actions** | Required actions for failed or advisory checks (if applicable). |

---

## A.13 Relationship to Future STD-005

When [STD-005 — Evidence Standard](../Standards/STD-000-Framework-Standards.md#18-references) is published, the validation evidence record schema defined in [Section A.12.3](#a123-validation-evidence-record) should be aligned with the canonical Evidence Artifact model. Until STD-005 is available, this appendix serves as the authoritative validation evidence reference for the Standards Library.

---

## A.14 Revision History

| Version | Date | Author | Description |
|:---|:---|:---|:---|
| 3.0.0-beta | 2026-07-04 | Framework Architecture Team | Initial release with 60 validation checks across 9 categories. |

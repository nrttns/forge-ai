# STD-002 Discovery Package — Refactor Change Log

> **Date:** 2026-07-06
> **Author:** Standards Governance Lead (Automated Refactor)
> **Scope:** Controlled renumbering, cross-reference normalization, and compliance-alignment

---

## Changes Applied

### STD-002-Discovery-Standard.md

**1. Section: 1. Status (Document Identity Table)**
- **Change:** Classification changed from 'Core Standard' to 'Core'
- **Reason:** Align with STD-002 metadata requirements (Required Fix #6)
- **Compliance Impact:** Metadata now matches required STD-002 identity specification

**2. Section: 1. Status (Document Identity Table)**
- **Change:** Depends On expanded to include AI-DOS-STD-001 and AI-DOS-A-001
- **Reason:** STD-002 consumes STD-001 Knowledge Graph; governance requires A.1 and M.0 (Required Fix #6)
- **Compliance Impact:** Authority chain now fully declared: A.1, M.0, STD-000, STD-001

**3. Section: 1. Status (Document Identity Table)**
- **Change:** Consumed By downstream identifiers renumbered: STD-002→003, STD-003→004, STD-004→005, STD-005→006
- **Reason:** Downstream standards renumbered per canonical sequence (Required Fix #2)
- **Compliance Impact:** Cross-references to downstream consumers now match canonical numbering

**4. Section: Multiple sections (1–30)**
- **Change:** Replaced ~27 self-referential 'STD-001' with 'STD-002' throughout document body
- **Reason:** Document was originally authored as STD-001 Discovery; renumbered to STD-002 (Required Fix #1)
- **Compliance Impact:** All self-references now correctly identify as STD-002 Discovery Standard

**5. Section: 1. Status (Standard Position)**
- **Change:** Mermaid diagram: STD001→STD002 (Discovery), STD002→STD003 (Finding), STD005→STD006 (Evidence)
- **Reason:** Renumbering and cross-reference normalization (Required Fixes #1, #2)
- **Compliance Impact:** Authority chain diagram now shows correct standard sequence

**6. Section: 13. Governance (Disposition Options)**
- **Change:** Disposition references renumbered: STD-002→003 (Finding), STD-005→006 (Evidence), STD-004→005 (Risk), STD-003→004 (Recommendation)
- **Reason:** Downstream standards renumbered per canonical sequence (Required Fix #2)
- **Compliance Impact:** Disposition workflow references now match canonical standard numbers

**7. Section: 17. Migration (Migration Triggers)**
- **Change:** Migration trigger references renumbered: STD-002→003, STD-003→004, STD-004→005, STD-005→006
- **Reason:** Downstream standards renumbered per canonical sequence (Required Fix #2)
- **Compliance Impact:** Migration triggers now reference correct downstream standard numbers

**8. Section: 18. References (Informative References)**
- **Change:** Informative references renumbered: STD-002→003 (Finding), STD-003→004 (Rec), STD-004→005 (Risk), STD-005→006 (Evidence)
- **Reason:** Downstream standards renumbered per canonical sequence (Required Fix #2)
- **Compliance Impact:** Reference table now shows correct standard numbers

**9. Section: 20. Next Standard**
- **Change:** Next Standard renumbered: AI-DOS-STD-002→AI-DOS-STD-003, title includes STD-003, dependency section updated STD-001→STD-002 / STD-002→STD-003
- **Reason:** Correct canonical successor is STD-003 Finding Standard (Required Fix #7)
- **Compliance Impact:** Next Standard section now correctly identifies STD-003 as successor with proper dependency

**10. Section: 22. Discovery Metadata Schema (Canonical Metadata Schema)**
- **Change:** Canonical YAML example: 'standard: AI-DOS-STD-001' → 'AI-DOS-STD-002'
- **Reason:** Self-referential identifier correction (Required Fix #1)
- **Compliance Impact:** Metadata schema example now correctly references STD-002

**11. Section: 23. Discovery Dependency Matrix**
- **Change:** Dependency Matrix: STD-001→STD-002 for Classification, Confidence Model, Impact Matrix
- **Reason:** Self-referential identifier correction (Required Fix #1)
- **Compliance Impact:** Dependency matrix now correctly shows STD-002 as source

**12. Section: 26. Discovery Confidence Model (Confidence Rules)**
- **Change:** Evidence Standard reference: STD-005→STD-006
- **Reason:** Downstream Evidence standard renumbered (Required Fix #2)
- **Compliance Impact:** Confidence rule now correctly references STD-006 Evidence Standard

---

### STD-002-Discovery-JSON-Schema.md

**1. Section: Document Title**
- **Change:** Title: 'STD-001 — Discovery JSON Schema' → 'STD-002 — Discovery JSON Schema'
- **Reason:** Identity normalization (Required Fix #1)
- **Compliance Impact:** Document title now correctly identifies as STD-002

---

### STD-002-Discovery-YAML-Schema.md

**1. Section: Document Header (Parent Standard)**
- **Change:** Parent Standard: 'STD-001 — Discovery Standard (AI-DOS-STD-001)' → 'STD-002 — Discovery Standard (AI-DOS-STD-002)'
- **Reason:** Identity and authority normalization (Required Fixes #1, #3)
- **Compliance Impact:** Parent standard reference now correctly identifies STD-002

---

### STD-002-Discovery-Graph-Model.md

**1. Section: 1. Status (Document Identity Table)**
- **Change:** Classification: 'Canonical Knowledge Graph' → 'Discovery Graph Projection'
- **Reason:** STD-002 shall not claim ownership of canonical Knowledge Graph model owned by STD-001 (Required Fix #4)
- **Compliance Impact:** Document no longer claims canonical graph ownership; reclassified as projection

**2. Section: 1. Status (Document Identity Table)**
- **Change:** Authority: 'STD-001' → 'STD-002 — Discovery Standard (consumes STD-001 Knowledge Graph)'
- **Reason:** Authority must reference parent STD-002 and acknowledge STD-001 Knowledge Graph dependency (Required Fix #4)
- **Compliance Impact:** Authority chain now explicitly shows STD-002 parentage and STD-001 graph consumption

**3. Section: Purpose Section**
- **Change:** Added 'Scope Statement' declaring this is a Discovery-specific projection of STD-001 canonical graph; reframed Purpose to remove canonical ownership claims
- **Reason:** STD-002 shall not claim ownership of full canonical Knowledge Graph model (Required Fix #4)
- **Compliance Impact:** Document now clearly positions itself as a projection/profile of STD-001, not a competing canonical model

**4. Section: Completion Statement (after Purpose)**
- **Change:** Reframed to clarify Discovery Graph Model is a projection of STD-001, not the canonical source
- **Reason:** Consistency with projection framing (Required Fix #4)
- **Compliance Impact:** Completion statement now correctly positions this document as a derived projection

**5. Section: 2. Graph Design Philosophy (Foundational Principle)**
- **Change:** Reframed to acknowledge STD-001 canonical graph as the source of graph semantics
- **Reason:** STD-002 shall not claim ownership of canonical graph semantics (Required Fix #4)
- **Compliance Impact:** Foundational principle now references STD-001 as the canonical graph authority

**6. Section: 2. Graph Design Philosophy (Canonical Knowledge Model → Knowledge Model)**
- **Change:** Renamed section, reframed all 'canonical' claims to acknowledge STD-001 ownership, inserted Discovery projection layer
- **Reason:** STD-002 shall not claim ownership of canonical Knowledge Graph model (Required Fix #4)
- **Compliance Impact:** Knowledge model section now clearly shows STD-001 as canonical authority and this document as a derived projection

**7. Section: 2. Graph Design Philosophy (Representation Layers)**
- **Change:** Reframed to show STD-001 ownership of canonical layers; inserted Discovery projection as derived layer
- **Reason:** STD-002 shall not claim ownership of canonical representation layers (Required Fix #4)
- **Compliance Impact:** Representation layers now correctly show STD-001 as canonical and STD-002 as derived

**8. Section: 2. Graph Design Philosophy (Knowledge Graph subsection)**
- **Change:** Reframed to declare STD-001 ownership of canonical Knowledge Graph; added Discovery projection statement
- **Reason:** STD-002 shall not claim ownership of canonical Knowledge Graph (Required Fix #4)
- **Compliance Impact:** Knowledge Graph subsection now correctly defers to STD-001 as canonical authority

**9. Section: 2. Graph Design Philosophy (Single Source of Truth)**
- **Change:** Added STD-01 canonical graph reference and projection framing
- **Reason:** Consistency with STD-001 ownership (Required Fix #4)
- **Compliance Impact:** Single source of truth now references STD-001 canonical graph

**10. Section: 3. Graph Principles (Principle 1 — Canonical Knowledge)**
- **Change:** Reframed to acknowledge STD-001 as owner of canonical Knowledge Graph; inserted Discovery projection layer
- **Reason:** STD-002 shall not claim canonical graph ownership (Required Fix #4)
- **Compliance Impact:** Principle 1 now correctly defers to STD-001 for canonical graph semantics

**11. Section: 4. Canonical Graph Model → Discovery Graph Projection**
- **Change:** Renamed section; reframed overview to declare STD-001 canonical graph ownership; changed 'this model' to 'this projection'
- **Reason:** STD-002 shall not claim ownership of canonical graph model (Required Fix #4)
- **Compliance Impact:** Section 4 now correctly positions the Discovery graph as a projection of STD-001

**12. Section: 3. Graph Principles (Overview)**
- **Change:** Reframed to declare inheritance from STD-001 canonical graph principles
- **Reason:** STD-002 shall not claim ownership of graph principles owned by STD-001 (Required Fix #4)
- **Compliance Impact:** Graph principles now correctly declare STD-001 as the canonical source

**13. Section: 3. Graph Principles (Completion Statement)**
- **Change:** Reframed to acknowledge STD-001 as source of canonical graph principles
- **Reason:** Consistency with STD-001 ownership (Required Fix #4)
- **Compliance Impact:** Completion statement now defers to STD-001 for canonical principles

---

### STD-002-Discovery.schema.json

**1. Section: N/A**
- **Change:** No changes required — identifiers, $id, and title already use STD-002
- **Reason:** Pre-existing compliance with Required Fix #5
- **Compliance Impact:** No compliance impact — file was already correct

---

### STD-002-Discovery.schema.yaml

**1. Section: N/A**
- **Change:** No changes required — identifiers, $id, and title already use STD-002
- **Reason:** Pre-existing compliance with Required Fix #5
- **Compliance Impact:** No compliance impact — file was already correct

---

### STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md

**1. Section: Document Header (Parent Document)**
- **Change:** Parent Document: 'STD-001 — Discovery Standard (AI-DOS-STD-001)' → 'STD-002 — Discovery Standard (AI-DOS-STD-002)'
- **Reason:** Identity normalization (Required Fixes #1, #8)
- **Compliance Impact:** Parent document reference now correctly identifies STD-002

**2. Section: 1. Status (Document Identity Table)**
- **Change:** Identifier: 'AI-DOS-STD-001-APP-A' → 'AI-DOS-STD-002-APP-A'
- **Reason:** Identity normalization (Required Fix #1)
- **Compliance Impact:** Appendix identifier now correctly uses STD-002 prefix

**3. Section: 1. Status (Document Identity Table)**
- **Change:** Authority and Parent Standard: 'STD-001' → 'STD-002'
- **Reason:** Identity normalization (Required Fix #1)
- **Compliance Impact:** Authority and parent standard now correctly reference STD-002

**4. Section: Consumers**
- **Change:** Consumers list renumbered: STD-001→002 (Discovery), STD-002→003 (Finding), STD-003→004 (Rec), STD-004→005 (Risk), STD-005→006 (Evidence)
- **Reason:** Downstream standards renumbered per canonical sequence (Required Fixes #1, #2)
- **Compliance Impact:** Consumers list now shows correct standard numbers

---

**Total changes:** 37

---

## Post-Script Verification Fixes

The following changes were identified during post-script verification and applied manually:

### STD-002-Discovery-Standard-Appendix-A-Discovery-Classification-Catalog.md

**34. Section: Discovery Classification Philosophy (Completion Statement)**
- **Change:** 'consumer of STD-001' → 'consumer of STD-002'
- **Reason:** Residual self-referential STD-001 reference in appendix body (Required Fix #1)
- **Compliance Impact:** Appendix body now correctly references STD-002

**35. Section: Compliance Philosophy**
- **Change:** 'requirements defined by STD-001' → 'requirements defined by STD-002'
- **Reason:** Residual self-referential STD-001 reference in appendix body (Required Fix #1)
- **Compliance Impact:** Compliance philosophy now correctly references STD-002

### STD-002-Discovery-Standard.md

**36. Section: 22. Discovery Metadata Schema (Canonical Metadata Schema — related_artifacts)**
- **Change:** 'AI-DOS-STD-002' → 'AI-DOS-STD-003', 'AI-DOS-STD-005' → 'AI-DOS-STD-006'
- **Reason:** Related artifacts in the canonical metadata example referenced downstream standards with old numbering (Required Fix #2)
- **Compliance Impact:** Metadata schema example now shows correct downstream standard identifiers

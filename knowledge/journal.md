# Development Journal: AI Coding Literacy

Kompakte Dokumentation aller Sessions und Erkenntnisse.

---

## 2025-12-20

Setup-Seiten (DE/EN) mit Python, VS Code, LLM, Terminal, pip. Kompetenz-farbige Icons zeigen didaktisches Mapping: Python/VS Code → CL, LLM → PE, Terminal → RV, pip → CE. Tooltips erklären Zuordnung bei Hover. Sidebar-Bars erweitert um vollständige Kompetenznamen (Format: "CT Computational Thinking"). Persönliche Claude-Pro-Empfehlung als separate Info-Box. Tooltip-Position auf rechts geändert wegen Sidebar-Überlappung.

## 2025-12-19

Englische Version mit Language Switcher. Sechs Detailseiten (ct.html bis rv.html) mit erweiterten Inhalten. Scroll-Spy refactored: Section Observer ist nun primäre Quelle, Chapter Observer als Fallback. Neue Konzepte: User Story, INVEST, RAG, Lost in Middle, Zero-Shot, Few-Shot, CoT, Skill-Hierarchie (Run→Trace→Explain→Write), Halluzinationskategorien, Metamorphic Testing.

---

## Erkenntnisse

**Didaktik:** Kompetenz-Mapping auf Setup-Tools macht Lernzusammenhang sichtbar. Persönliche Erfahrung einbringen statt nur neutrale Fakten.

**CSS:** Tooltips bei Sidebar-Nähe nach rechts positionieren (`left: 100%`). Flexbox mit gap für Label-Alignment. Gradients für subtile Hervorhebungen.

**JS:** Template Literals für dynamische HTML-Generierung. Batch-Updates für DE/EN parallel durchführen.

---

## Offen

- GitHub Pages Deployment
- Mobile-Test (<600px)
- Cross-Browser-Test
- EN Kompetenzmodell/Referenz-Seiten

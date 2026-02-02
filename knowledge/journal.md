# Development Journal: AI Coding Literacy

Kompakte Dokumentation aller Sessions und Erkenntnisse.

---

## 2026-02-02

Qualitaetsverbesserungen nach kritischer Code-Review: workshop.js mit XSS-Schutz (textContent statt innerHTML), dateSource-Bug gefixt (Feld existierte nicht), DocumentFragment fuer Performance, Debouncing (300ms) fuer Suche. workshop.html mit main-Element, aria-labels, aria-hidden fuer SVGs, role-Attribute, meta-Tags erweitert, Placeholder-Links entfernt. workshop.css mit visually-hidden Klasse, Hover-Transition geglaettet (cubic-bezier, font-size 1.1rem).

Workshop-UI Landingpage implementiert mit Archiv-inspiriertem Design. Neue Dateien: workshop.css (460 Zeilen), workshop.html, workshop.js. Design visualisiert Transformationsprozess (Physisches Objekt -> Archivkarte -> Datenextraktion -> Forschungsdaten). 4 Schriften fuer 4 Wissensordnungen: Playfair Display (Institution), Caveat (Handschrift), JetBrains Mono (Code), DM Sans (UI). Objekt-Karten mit Hover-Transformation von analog (Papier-Gradient, handschriftlich) zu digital (weiss, monospace). Farben: Terracotta (#C4725A) fuer Extraktion, Petrol (#7A9BB5) fuer Forschungsdaten.

content.json erweitert um Workshop-Sektion mit 3 Hands-On-Uebungen, Dataset-Metadaten, Materialien und Ressourcen. glossar.json erweitert von 21 auf 28 Begriffe (Context Window, Markdown, Skript, Tool Use, Halluzination, pip). Workshop-Link in Sidebar-Navigation aller 10 HTML-Seiten hinzugefuegt. design.md um Workshop-Design-Sektion ergaenzt.

Repository-Konsolidierung (frueher am Tag): Alle englischen Inhalte entfernt (/en/, content-en.json, glossar-en.json). Slides-Ordner geloescht (Google Slides sind primaer). Veraltete Knowledge-Dateien entfernt (grundlagen-*.md). Workshop-Dokument programmieren-2-0.md mit neuem Inhalt ersetzt. JavaScript-Dateien (app.js, glossary.js, setup.js) vereinfacht - Sprachlogik entfernt, laedt nur noch deutsche JSON-Dateien. Sprachumschalter aus allen HTML-Dateien in /de/ entfernt. README und status-report.md aktualisiert. Alle Knowledge-Dateien auf 7 Kompetenzen (inkl. EW) aktualisiert.

## 2025-12-21

Content-Ueberarbeitung: Alle 6 Kompetenzbeschreibungen in research blog Stil ueberarbeitet. Wissenschaftliche Hintergruende narrativ integriert statt isolierte Faktenlisten. CT mit Wing (2006), RE mit 1990er Softwarekrise, CE mit 2024 Wendepunkt und Lost in the Middle, PE mit GPT-3 2020 und Wei/Zhou/Schulhoff, CL mit Lopez 2008 und Soloway/Ehrlich 1984, RV mit Copilot 2021 und Fu/Liu/Tambon/Nguyen. Intro-Texte (meta.subtitle + meta.description) verkuerzt und praeziser formuliert. Vibe Coding Glossar-Eintrag korrigiert mit Karpathy-Originalzitat ("fully give in to the vibes, forget that the code even exists").

## 2025-12-20

Setup-Seiten (DE/EN) mit Python, VS Code, LLM, Terminal, pip. Kompetenz-farbige Icons zeigen didaktisches Mapping: Python/VS Code -> CL, LLM -> PE, Terminal -> RV, pip -> CE. Tooltips erklaeren Zuordnung bei Hover. Sidebar-Bars erweitert um vollstaendige Kompetenznamen (Format: "CT Computational Thinking"). Persoenliche Claude-Pro-Empfehlung als separate Info-Box. Tooltip-Position auf rechts geaendert wegen Sidebar-Ueberlappung.

Kompetenzmodell-Integration: longDescription-Feld zu allen 6 Kapiteln in content.json und content-en.json hinzugefuegt. JavaScript nutzt longDescription fuer Kompetenzliste statt short. Ermoeglicht detaillierte Beschreibungen direkt in der Uebersicht.

Glossar-Inhalte: 6 Begriffe mit umfassenden Definitionen (DE/EN): Large Language Models (probabilistisches Modell, emergente Faehigkeiten), Vibe Coding (Karpathy-Begriff, Grenzen bei Komplexitaet), Scripting (Automation fuer Eigenbedarf), Prototyping (funktionale Vorabversion), Requirements Engineering (4-Schritte-Prozess), User Stories (standardisiertes Format). Kategorie "RE" zu Glossar-Kategorien hinzugefuegt.

## 2025-12-19

Englische Version mit Language Switcher. Sechs Detailseiten (ct.html bis rv.html) mit erweiterten Inhalten. Scroll-Spy refactored: Section Observer ist nun primaere Quelle, Chapter Observer als Fallback. Neue Konzepte: User Story, INVEST, RAG, Lost in Middle, Zero-Shot, Few-Shot, CoT, Skill-Hierarchie (Run->Trace->Explain->Write), Halluzinationskategorien, Metamorphic Testing.

---

## Erkenntnisse

Content: Research blog Stil wirksamer als Faktenlisten. Narrativer Aufbau (historischer Einstieg -> Problem -> Loesung -> Implikation fuer AI Coding Literacy) macht wissenschaftliche Grundlagen zugaenglicher. Kuerzere Intro-Texte fokussieren besser.

Didaktik: Kompetenz-Mapping auf Setup-Tools macht Lernzusammenhang sichtbar. Persoenliche Erfahrung einbringen statt nur neutrale Fakten.

CSS: Tooltips bei Sidebar-Naehe nach rechts positionieren (left: 100%). Flexbox mit gap fuer Label-Alignment. Gradients fuer subtile Hervorhebungen.

JS: Template Literals fuer dynamische HTML-Generierung. Sprachlogik entfernt - nur noch deutsche Inhalte.

Kompetenzmodell: 7 Dimensionen (CT, RE, CE, PE, CL, RV, EW). EW (Expertenwissen) als Querschnittskompetenz, nicht als separates Kapitel.

---

## Offen

- GitHub Pages Deployment
- Mobile-Test (<600px)
- Cross-Browser-Test
- Workshop-UI Live-Test mit echten Daten

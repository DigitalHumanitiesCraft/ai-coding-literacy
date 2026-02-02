# Claude Code Rules

Regeln fuer die Arbeit an diesem Projekt:

## Formatierung

- Niemals Emojis verwenden
- Keine Markdown Tables (token-intensiv) - stattdessen Listen verwenden
- Kein Bold Formatting mit ** - stattdessen Ueberschriften oder plain text
- Konsistenter, sachlicher, neutraler und professioneller Ton
- Umlaute als ae, oe, ue schreiben (fuer Konsistenz mit bestehendem Code)

## Projektkontext

AI Coding Literacy ist eine Lernplattform fuer Geisteswissenschaftler:innen.

Zwei Hauptbereiche:
- Curriculum (de/index.html) - Kompetenzmodell mit 7 Dimensionen
- Workshop (de/workshop.html) - Programmieren 2.0 Workshop-Materialien

Leitgedanke: Informed Vibe Coding
- Ergebnisse einordnen
- Fehler erkennen
- Gezielt nachbessern

## Technische Hinweise

- Vanilla HTML/CSS/JS, keine Build-Tools
- CSS-Variablen in :root definiert
- Font-Stacks: --font-editorial, --font-mono, --font-ui
- GitHub Pages Deployment via /docs Ordner
- Datensatz: Hans Gross Kriminalmuseum (25 Workshop-Objekte)

## JavaScript-Architektur

- shared.js: Gemeinsame Funktionen (loadContentJson, renderCompetencySidebar, copyCode, escapeHtml, createCompetencyBadge)
- app.js: Curriculum-Hauptlogik (index.html)
- glossary.js: Glossar-System mit Info-Panel
- kompetenzmodell.js, referenz.js, setup.js: Seitenspezifische Logik

HTML-Dateien laden shared.js vor ihrem Haupt-Script.

## Dokumentenstruktur

Single Source of Truth (SSOT):
- knowledge/concept.md: Curriculum-Konzept
- knowledge/workshops/programmieren-2-0.md: Workshop-Ausarbeitung

Verlinkungen zwischen Dokumenten beachten.

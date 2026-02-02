# Status-Report: AI Coding Literacy

Datum: 2026-02-02
Phase: Repository-Konsolidierung abgeschlossen

---

## Zusammenfassung

Das Repository wurde konsolidiert: Alle englischen Inhalte wurden entfernt, das Glossar auf 21 Begriffe erweitert, und der Workshop "Programmieren 2.0" ist nun das autoritative Dokument. Die Plattform ist jetzt rein deutschsprachig.

---

## Konsolidierung (Februar 2026)

### Geloeschte Inhalte

Englische Inhalte:
- /en/ (gesamter Ordner mit 10 HTML-Dateien)
- /data/content-en.json
- /data/glossar-en.json

Slides-Ordner:
- /slides/ (gesamter Ordner)
- slides/decks/programmieren-2-0/*.md (8 Markdown-Dateien)
- slides/viewer.html, viewer.js, viewer.css

Veraltete Knowledge-Dateien:
- /knowledge/grundlagen-computational-thinking.md
- /knowledge/grundlagen-kompetenzbereiche.md
- /knowledge/grundlagen-oekosystem.md

### Aktualisierte Inhalte

Workshop-Dokument:
- /knowledge/workshops/programmieren-2-0.md wurde mit neuem Inhalt ersetzt
- Enthaelt vollstaendige Workshop-Dokumentation inkl. Context Engineering, data.md-Konzept

Glossar erweitert (6 -> 21 Begriffe):
- Neue Kategorien: tech-basics, web-basics
- 15 neue Begriffe aus Workshop-Dokumentation

Daten generiert:
- /data/kriminalmuseum/workshop_objekte.csv aus JSON erstellt

### Code-Anpassungen

JavaScript (Sprachlogik entfernt):
- js/app.js: detectLanguage() entfernt, laedt nur noch content.json
- js/glossary.js: Sprachlogik entfernt, laedt nur noch glossar.json
- js/setup.js: Alle Sprachparameter und -verzweigungen entfernt

HTML (Sprachumschalter entfernt):
- de/index.html
- de/setup.html
- de/kompetenzmodell.html
- de/referenz.html
- de/ct.html, re.html, ce.html, pe.html, cl.html, rv.html

---

## Aktuelle Projektstruktur

```
ai-coding-literacy/
├── CLAUDE.md
├── ReadMe.md
├── css/
│   └── style.css
├── js/
│   ├── app.js              (vereinfacht, nur DE)
│   ├── glossary.js         (vereinfacht, nur DE)
│   ├── kompetenzmodell.js
│   ├── referenz.js
│   └── setup.js
├── data/
│   ├── content.json        (DE)
│   ├── glossar.json        (21 Begriffe, 4 Kategorien)
│   └── kriminalmuseum/
│       ├── workshop_objekte.json
│       ├── workshop_objekte.csv
│       └── kriminalmuseum_komplett.csv
├── de/
│   ├── index.html          (ohne Sprachumschalter)
│   ├── setup.html
│   ├── kompetenzmodell.html
│   ├── referenz.html
│   └── ct.html, re.html, ce.html, pe.html, cl.html, rv.html
├── knowledge/
│   ├── concept.md
│   ├── design.md
│   ├── implementation-plan.md
│   ├── status-report.md
│   ├── journal.md
│   ├── hands-on.md
│   └── workshops/
│       └── programmieren-2-0.md    (AUTORITATIV)
└── workshops/
    └── programmieren-2-0/
        ├── handouts/
        ├── python/
        └── web/
```

---

## Glossar-System

21 Begriffe in 4 Kategorien:

LLM-Grundlagen (llm-basics):
- Large Language Model (LLM)
- Prompt
- Token

Coding-Ansaetze (coding-approaches):
- Vibe Coding
- Scripting
- Prototyping
- Requirements Engineering

Technische Grundlagen (tech-basics):
- API
- API-Key
- CSV
- Extension
- Git
- GitHub
- JSON
- Live Server
- PATH
- Terminal

Web-Grundlagen (web-basics):
- CORS
- CSS
- HTML
- JavaScript

---

## Workshop-Materialien

Google Slides:
- Hauptpraesentation: https://docs.google.com/presentation/d/17fkBHPcBMlCBbg2GiV7kDaD-cnDAkfaIRSFCudFgXPQ/
- Vorbereitungstreffen: https://docs.google.com/presentation/d/1TlCBDJDUQNqsQOiEbHR2MhDC0eL10RKjHfmKhYA6wOs/

Repository-Materialien:
- Python-Beispiele: /workshops/programmieren-2-0/python/
- Web-Beispiele: /workshops/programmieren-2-0/web/
- Handouts: /workshops/programmieren-2-0/handouts/

Datensatz Hans Gross Kriminalmuseum:
- Workshop-Objekte (25): /data/kriminalmuseum/workshop_objekte.json
- Workshop-Objekte CSV: /data/kriminalmuseum/workshop_objekte.csv
- Komplett (3892): /data/kriminalmuseum/kriminalmuseum_komplett.csv

---

## Naechste Schritte

1. Workshop-UI Landingpage entwickeln (wartet auf Designvorschlag)
   - Spezifisch fuer Workshop "Programmieren 2.0" am NHM Wien (12.02.2026)
   - Soll alle Materialien zur Verfuegung stellen
   - Soll die 7 Kompetenzdimensionen visuell im Interface abbilden

2. Verifizierung
   - Lokalen Server starten und /de/index.html testen
   - Glossar-Begriffe pruefen (Hover-Funktion)
   - Workshop-Materialien pruefen

---

## Kompetenzmodell (7 Dimensionen)

- CT: Computational Thinking
- RE: Requirement Engineering
- CE: Context Engineering
- PE: Prompt Engineering
- CL: Code Literacy
- RV: Review
- EW: Expertenwissen (Domaenenwissen)

---

## Technische Details

Frontend:
- Vanilla HTML/CSS/JavaScript
- Keine Build-Tools oder Frameworks
- Tufte-inspirierte Aesthetik

Datenformat:
- JSON fuer strukturierte Inhalte
- CSV fuer Workshop-Datensaetze

Hosting:
- GitHub Pages
- Live: https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/

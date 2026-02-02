# AI Coding Literacy

Eine Lernplattform fuer Wissenschaftler und Wissenschaftlerinnen zur systematischen Entwicklung von Kompetenzen im Umgang mit KI-gestuetzter Programmierung.

## Ueber das Projekt

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Der Begriff markiert einen Mittelweg zwischen Vibe Coding und dem Erlernen einer Programmiersprache. Das Ziel ist Scripting und Prototyping: kleine, funktionale Loesungen fuer konkrete Probleme aus dem eigenen Arbeitsbereich.

Zielgruppe: Fachwissenschaftler und Fachwissenschaftlerinnen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich ohne Programmiervorerfahrung.

## Live-Demo

https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/

## Workshop: Programmieren 2.0

Der Workshop "Programmieren 2.0: AI Coding Literacy fuer die Geisteswissenschaften" vermittelt praktische Kompetenzen zur Arbeit mit LLMs.

Materialien:
- Google Slides Hauptpraesentation: https://docs.google.com/presentation/d/17fkBHPcBMlCBbg2GiV7kDaD-cnDAkfaIRSFCudFgXPQ/
- Google Slides Vorbereitungstreffen: https://docs.google.com/presentation/d/1TlCBDJDUQNqsQOiEbHR2MhDC0eL10RKjHfmKhYA6wOs/

Workshop-Materialien im Repository:
- Python-Beispiele: /workshops/programmieren-2-0/python/
- Web-Beispiele: /workshops/programmieren-2-0/web/
- Handouts und Vorlagen: /workshops/programmieren-2-0/handouts/

Datensatz (Hans Gross Kriminalmuseum):
- Workshop-Objekte (25 Stueck): /data/kriminalmuseum/workshop_objekte.json
- Workshop-Objekte CSV: /data/kriminalmuseum/workshop_objekte.csv
- Kompletter Datensatz (3892 Eintraege): /data/kriminalmuseum/kriminalmuseum_komplett.csv

## Kompetenzmodell

Das Curriculum entwickelt sieben Kompetenzbereiche:

- CT (Computational Thinking): Denkweise fuer die strukturierte Arbeit mit LLMs, insbesondere das Zerlegen von Problemen und das Verstaendnis iterativer Loesungsprozesse
- RE (Requirement Engineering): Uebersetzung von Ideen in formale Spezifikationen mit definierten Eingaben, Ausgaben und Randbedingungen
- CE (Context Engineering): Aufbereitung aller Informationen, die ein LLM zur Bearbeitung einer Aufgabe benoetigt
- PE (Prompt Engineering): Faehigkeit, die Kommunikation mit dem LLM wirksam zu operationalisieren und im Dialog zu verfeinern
- CL (Code Literacy): Verstehen von generiertem Code und seinen Ausfuehrungsergebnissen, einschliesslich Fehlermeldungen
- RV (Review): Systematische Pruefung, ob eine Loesung die urspruenglichen Anforderungen erfuellt und fuer den Einsatzzweck geeignet ist
- EW (Expertenwissen): Fachwissen aus der eigenen Domaene, das zur Einordnung und Bewertung von LLM-Ergebnissen notwendig ist

## Projektstruktur

```
ai-coding-literacy/
├── de/
│   ├── index.html          # Uebersicht mit vertikalem Scroll
│   ├── setup.html          # Setup-Anleitung
│   ├── kompetenzmodell.html
│   ├── referenz.html
│   └── ct.html, re.html, ce.html, pe.html, cl.html, rv.html
├── css/
│   └── style.css           # Globale Styles
├── data/
│   ├── content.json        # Alle Inhalte strukturiert
│   ├── glossar.json        # Glossar-Begriffe (21 Eintraege)
│   └── kriminalmuseum/     # Workshop-Datensatz
├── js/
│   ├── app.js              # Hauptlogik
│   ├── glossary.js         # Glossar-System
│   ├── kompetenzmodell.js
│   ├── referenz.js
│   └── setup.js
├── knowledge/              # Konzeptdokumente
│   ├── concept.md
│   ├── design.md
│   ├── implementation-plan.md
│   ├── status-report.md
│   ├── hands-on.md
│   ├── journal.md
│   └── workshops/
│       └── programmieren-2-0.md  # Autoritatives Workshop-Dokument
└── workshops/
    └── programmieren-2-0/
        ├── handouts/
        ├── python/
        └── web/
```

## Technischer Stack

- Frontend: Vanilla HTML/CSS/JavaScript
- Daten: JSON (/data/content.json, /data/glossar.json)
- Hosting: GitHub Pages
- Design: Tufte-inspirierte Aesthetik

Bewusst keine Build-Tools oder Frameworks - maximale Transparenz fuer ein Curriculum, das Code-Verstaendnis lehrt.

## Glossar-System

Die Plattform verfuegt ueber ein automatisches Glossar-System:
- Glossar-Begriffe werden automatisch im Text erkannt und markiert
- Farbcodierung nach Kategorien (LLM-Grundlagen, Coding-Ansaetze, Technische Grundlagen, Web-Grundlagen)
- Hover zeigt sofort das Info-Panel
- 1 Sekunde Hover pinnt das Panel (bleibt offen, scrollbar)
- Verwandte Begriffe sind verlinkt

21 Begriffe in 4 Kategorien:
- LLM-Grundlagen: LLM, Prompt, Token
- Coding-Ansaetze: Vibe Coding, Scripting, Prototyping, Requirements Engineering
- Technische Grundlagen: API, API-Key, CSV, Extension, Git, GitHub, JSON, Live Server, PATH, Terminal
- Web-Grundlagen: CORS, CSS, HTML, JavaScript

## Dokumentation

- Konzept: /knowledge/concept.md
- Design: /knowledge/design.md
- Implementierung: /knowledge/implementation-plan.md
- Status: /knowledge/status-report.md
- Hands-On: /knowledge/hands-on.md
- Workshop: /knowledge/workshops/programmieren-2-0.md

## Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/DigitalHumanitiesCraft/ai-coding-literacy.git
cd ai-coding-literacy

# Lokalen Server starten (Python)
python -m http.server 8000

# Oder mit Node.js
npx serve .

# Browser oeffnen
open http://localhost:8000/de/
```

## Lizenz

CC-BY

---

DigitalHumanitiesCraft - 2025

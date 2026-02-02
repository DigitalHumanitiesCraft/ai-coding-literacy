# AI Coding Literacy

Eine Lernplattform fuer Wissenschaftler und Wissenschaftlerinnen zur systematischen Entwicklung von Kompetenzen im Umgang mit KI-gestuetzter Programmierung.

## Ueber das Projekt

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Der Begriff markiert einen Mittelweg zwischen Vibe Coding und dem Erlernen einer Programmiersprache. Das Ziel ist Scripting und Prototyping: kleine, funktionale Loesungen fuer konkrete Probleme aus dem eigenen Arbeitsbereich.

Leitgedanke: Informed Vibe Coding - Ergebnisse einordnen, Fehler erkennen, gezielt nachbessern.

Zielgruppe: Fachwissenschaftler und Fachwissenschaftlerinnen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich ohne Programmiervorerfahrung.

## Live-Demo

- Curriculum: https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/
- Workshop-Seite: https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/workshop.html

## Workshop: Programmieren 2.0

Der Workshop "Programmieren 2.0: LLMs fuer Forschungsdaten im Museum" findet am 12. Februar 2026 im Naturhistorischen Museum Wien statt (Museumsbund Oesterreich).

Workshop-Seite mit allen Materialien:
/de/workshop.html

Externe Links:
- Google Slides Hauptpraesentation: https://docs.google.com/presentation/d/1pP-4I7VXCbQSOfVaeYPpOBQE5ZeY7590NuDBK2gGTow
- Google Slides Vorbereitungstreffen: https://docs.google.com/presentation/d/1gvhQtVVRV7btvqd2b-YIPsRNQJk0umt6C8un3ONnnLY
- Vorbereitungslektuere: https://chpollin.github.io/llmdh

Workshop-Materialien im Repository:
- Python-Beispiele: /workshops/programmieren-2-0/python/
- Web-Beispiele: /workshops/programmieren-2-0/web/
- Handouts und Vorlagen: /workshops/programmieren-2-0/handouts/

Datensatz (Hans Gross Kriminalmuseum, Universitaet Graz):
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
│   ├── index.html              # Curriculum-Uebersicht (Landing Page)
│   ├── ueber.html              # Projekt-Konzept (public)
│   ├── workshop.html           # Workshop-Seite mit allen Materialien
│   ├── informed-vibe-coding.html  # Erklaerung des Leitgedankens
│   ├── setup.html              # Setup-Anleitung
│   ├── kompetenzmodell.html    # Kompetenzmodell-Detailseite
│   ├── referenz.html           # Referenz/Glossar
│   ├── ct.html, re.html, ...   # Einzelne Kompetenzseiten (CT-RV)
│   └── ew.html                 # Expert:innenwissen
├── css/
│   ├── style.css               # Globale Styles (Curriculum)
│   └── workshop.css            # Workshop-spezifische Styles
├── data/
│   ├── content.json            # Curriculum-Inhalte
│   ├── glossar.json            # Glossar-Begriffe (21 Eintraege)
│   └── kriminalmuseum/         # Workshop-Datensatz
├── js/
│   ├── shared.js               # Gemeinsame Funktionen
│   ├── app.js                  # Curriculum-Hauptlogik
│   ├── glossary.js             # Glossar-System
│   ├── kompetenzmodell.js
│   ├── referenz.js
│   └── setup.js
├── knowledge/                  # Konzeptdokumente
│   ├── concept.md              # Curriculum-Konzept (SSOT)
│   ├── design.md               # Visuelles Designsystem
│   ├── hands-on.md             # Uebungskatalog
│   ├── implementation-plan.md  # Technische Architektur
│   ├── status-report.md        # Aktueller Projektstatus
│   └── workshops/
│       └── programmieren-2-0.md  # Workshop-Ausarbeitung (SSOT)
├── workshops/
│   └── programmieren-2-0/
│       ├── handouts/           # Vorlagen und Cheatsheets
│       ├── python/             # Python-Beispielskripte
│       └── web/                # Web-Beispiele
├── .github/
│   └── DEVELOPMENT_LOG.md      # Entwicklungs-Journal
└── docs/                       # GitHub Pages Deployment-Ordner
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

28 Begriffe in 4 Kategorien:
- LLM-Grundlagen: LLM, Prompt, Token
- Coding-Ansaetze: Vibe Coding, Scripting, Prototyping, Requirements Engineering
- Technische Grundlagen: API, API-Key, CSV, Extension, Git, GitHub, JSON, Live Server, PATH, Terminal
- Web-Grundlagen: CORS, CSS, HTML, JavaScript

## Seitenstruktur

Die Plattform besteht aus zwei Hauptbereichen:

Curriculum (de/index.html):
- Landing Page mit Projektbeschreibung
- Kompetenzmodell-Uebersicht (7 Dimensionen)
- Sessions-Bereich (dynamisch aus content.json)
- Sidebar mit Navigation und Kompetenz-Bars
- Info-Panel fuer Glossar-Begriffe

Workshop (de/workshop.html):
- Workshop-Seite "Programmieren 2.0"
- Context-Cards (Datum, Ort, Zielgruppe, Leitgedanke)
- Transformationsprozess-Visualisierung
- Lernziele und Praxisbloecke
- Datensatz-Information
- Handouts und Ressourcen
- Kompetenz-Grid mit Gewichtungen

## Dokumentation

- Konzept: /knowledge/concept.md
- Design: /knowledge/design.md
- Implementierung: /knowledge/implementation-plan.md
- Status: /knowledge/status-report.md
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

DigitalHumanitiesCraft - 2025/2026

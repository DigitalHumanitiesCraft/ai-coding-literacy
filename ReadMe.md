# AI Coding Literacy

Eine Lernplattform für Wissenschaftler·innen zur systematischen Entwicklung von Kompetenzen im Umgang mit KI-gestützter Programmierung.

## Über das Projekt

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Der Begriff markiert einen Mittelweg zwischen Vibe Coding und dem Erlernen einer Programmiersprache. Das Ziel ist Scripting und Prototyping: kleine, funktionale Lösungen für konkrete Probleme aus dem eigenen Arbeitsbereich.

Zielgruppe: Fachwissenschaftler·innen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich ohne Programmiervorerfahrung.

## Live-Demo

[https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/](https://digitalhumanitiescraft.github.io/ai-coding-literacy/de/)

## Kompetenzmodell

Das Curriculum entwickelt sechs Kompetenzbereiche. Computational Thinking vermittelt eine Denkweise für die strukturierte Arbeit mit LLMs, insbesondere das Zerlegen von Problemen und das Verständnis iterativer Lösungsprozesse. Requirement Engineering behandelt die Übersetzung von Ideen in formale Spezifikationen mit definierten Eingaben, Ausgaben und Randbedingungen. Context Engineering befasst sich mit der Aufbereitung aller Informationen, die ein LLM zur Bearbeitung einer Aufgabe benötigt. Prompt Engineering entwickelt die Fähigkeit, die Kommunikation mit dem LLM wirksam zu operationalisieren und im Dialog zu verfeinern. Code Literacy ermöglicht das Verstehen von generiertem Code und seinen Ausführungsergebnissen, einschließlich Fehlermeldungen. Review trainiert die systematische Prüfung, ob eine Lösung die ursprünglichen Anforderungen erfüllt und für den Einsatzzweck geeignet ist.

## Seitenstruktur

```
/de/
├── index.html           # Übersicht – vertikales Scroll-Layout
├── kompetenzmodell.html # Detailseite Kompetenzmodell
├── referenz.html        # Referenzmaterial
├── ct.html              # CT-Detailseite (geplant)
├── re.html              # RE-Detailseite (geplant)
├── ce.html              # CE-Detailseite (geplant)
├── pe.html              # PE-Detailseite (geplant)
├── cl.html              # CL-Detailseite (geplant)
└── rv.html              # RV-Detailseite (geplant)
```

Konzept:
- Übersicht (index.html): Alle 6 Kompetenzen auf einer Seite mit Theorie, Übungen, Ressourcen
- Detailseiten (ct.html etc.): Vertiefende Inhalte, interaktive Übungen, Lernpfade

## Technischer Stack

- Frontend: Vanilla HTML/CSS/JavaScript
- Daten: JSON (/data/content.json)
- Hosting: GitHub Pages
- Design: Tufte-inspirierte Ästhetik

Bewusst keine Build-Tools oder Frameworks – maximale Transparenz für ein Curriculum, das Code-Verständnis lehrt.

## Projektstruktur

```
ai-coding-literacy/
├── de/
│   ├── index.html          # Übersicht mit vertikalem Scroll
│   ├── kompetenzmodell.html
│   └── referenz.html
├── css/
│   └── style.css           # Globale Styles
├── data/
│   └── content.json        # Alle Inhalte strukturiert
├── js/
│   └── app.js              # Hauptlogik
└── knowledge/              # Konzeptdokumente
    ├── concept.md          # Konzeptionelle Grundlagen
    ├── design.md           # Design-Spezifikation
    ├── implementation-plan.md
    ├── status-report.md    # Aktueller Projektstatus
    ├── hands-on.md         # Übungsübersicht
    ├── grundlagen-computational-thinking.md
    ├── grundlagen-kompetenzbereiche.md
    └── grundlagen-oekosystem.md
```

## UI-Konzept

### Vertikales Scroll-Layout

Die Übersichtsseite zeigt alle Kapitel vertikal untereinander:

```
┌─────────────────────────────────────────┐
│ Sidebar     │  Kapitel-Header           │
│             │  ────────────────────     │
│ [CT] ←      │  ■ Theorie                │
│  Theorie    │    Kernpunkte, Konzepte   │
│  Übungen    │                           │
│  Ressourcen │  ■ Übungen                │
│ [RE]        │    Exercises, Code        │
│ [CE]        │                           │
│ [PE]        │  ■ Ressourcen             │
│ [CL]        │    Links, Zitat           │
│ [RV]        │                           │
└─────────────────────────────────────────┘
```

### Sidebar-Navigation

- 6 farbige Kompetenz-Balken (CT, RE, CE, PE, CL, RV)
- Klick scrollt zum Kapitel
- Ausklappbare Sub-Links: Theorie, Übungen, Ressourcen
- Scroll-Spy highlightet aktives Kapitel und aktive Sektion

## Dokumentation

- [Konzept](knowledge/concept.md) – Theoretische Grundlagen
- [Design](knowledge/design.md) – Visuelle Spezifikation
- [Implementierung](knowledge/implementation-plan.md) – Technische Details
- [Status](knowledge/status-report.md) – Aktueller Projektstatus
- [Hands-On](knowledge/hands-on.md) – Übungsübersicht

## Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/DigitalHumanitiesCraft/ai-coding-literacy.git
cd ai-coding-literacy

# Lokalen Server starten (Python)
python -m http.server 8000

# Oder mit Node.js
npx serve .

# Browser öffnen
open http://localhost:8000/de/
```

## Lizenz

CC-BY

---

DigitalHumanitiesCraft · 2025

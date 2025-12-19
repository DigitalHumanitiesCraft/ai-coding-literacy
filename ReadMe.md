# AI Coding Literacy

Eine Lernplattform für Wissenschaftler·innen zur systematischen Entwicklung von Kompetenzen im Umgang mit KI-gestützter Programmierung.

## Über das Projekt

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Das Ziel ist nicht professionelle Softwareentwicklung, sondern Scripting und Prototyping: kleine, funktionale Lösungen für konkrete Probleme aus dem eigenen Arbeitsbereich.

**Zielgruppe:** Fachwissenschaftler·innen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich ohne Programmiervorerfahrung.

## Kompetenzmodell

Das Curriculum umfasst 6 Kompetenzbereiche:

| ID | Kompetenz | Beschreibung |
|----|-----------|--------------|
| CT | Computational Thinking | Probleme strukturieren und zerlegen |
| RE | Requirement Engineering | Anforderungen präzise formulieren |
| CE | Context Engineering | Kontext für LLMs gestalten |
| PE | Prompt Engineering | Effektive Prompts entwickeln |
| CL | Code Literacy | Generierten Code verstehen |
| RV | Review | Ergebnisse systematisch prüfen |

## Technischer Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Daten:** JSON (`/data/content.json`)
- **Hosting:** GitHub Pages
- **Design:** Tufte-inspirierte Ästhetik

Bewusst keine Build-Tools oder Frameworks – maximale Transparenz für ein Curriculum, das Code-Verständnis lehrt.

## Projektstruktur

```
ai-coding-literacy/
├── de/
│   └── index.html          # Single-Page mit Endless Scroll
├── css/
│   └── style.css           # Globale Styles
├── data/
│   └── content.json        # Alle Inhalte strukturiert
├── js/
│   └── main.js             # Utility-Funktionen
└── knowledge/              # Konzeptdokumente
    ├── concept.md          # Konzeptionelle Grundlagen
    ├── design.md           # Design-Spezifikation
    ├── implementation-plan.md
    └── hands-on.md         # Übungsübersicht
```

## Dokumentation

- [Konzept](knowledge/concept.md) – Theoretische Grundlagen
- [Design](knowledge/design.md) – Visuelle Spezifikation
- [Implementierung](knowledge/implementation-plan.md) – Technische Details
- [Hands-On](knowledge/hands-on.md) – Übungsübersicht

## Lizenz

CC-BY

---

DigitalHumanitiesCraft · 2025

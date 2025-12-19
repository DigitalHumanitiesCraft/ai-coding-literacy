# Implementierungsplan: AI Coding Literacy Lernplattform

## Projektübersicht

**Ziel:** Single-Page Lernplattform mit Endless Scroll auf GitHub Pages.

**Stack:**
- Vanilla HTML/CSS/JavaScript
- JSON für strukturierte Inhalte
- Intersection Observer für Lazy Loading
- GitHub Pages

**Design:** Tufte-inspirierte Ästhetik nach [design.md](design.md).

---

## 1. Architektur

### Datengetriebener Ansatz

Alle Inhalte werden aus `/data/content.json` geladen:
- Meta-Informationen (Titel, Beschreibung)
- 6 Kapitel (Kompetenzbereiche) mit Farben
- Jedes Kapitel mit Theorie, Hands-On-Übungen, Ressourcen

### Single-Page mit Endless Scroll

- Startseite lädt erste 2 Kapitel
- Beim Scrollen werden weitere Kapitel nachgeladen (Intersection Observer)
- Sidebar zeigt 6 Kompetenzbereiche als klickbare Navigation
- Scroll-Spy highlightet aktiven Kompetenzbereich

---

## 2. Projektstruktur

```
ai-coding-literacy/
├── index.html              # Redirect zu /de/
├── de/
│   ├── index.html          # Single-Page mit Endless Scroll
│   ├── kompetenzmodell.html # Detailseite Kompetenzen
│   └── referenz.html       # Referenzmaterial
├── css/
│   └── style.css           # Globale Styles
├── data/
│   └── content.json        # Alle Inhalte strukturiert
├── js/
│   └── main.js             # Utility-Funktionen
└── knowledge/              # Konzeptdokumente (nicht Teil der Website)
    ├── concept.md
    ├── design.md
    ├── implementation-plan.md
    ├── hands-on.md
    ├── grundlagen-computational-thinking.md
    └── grundlagen-oekosystem.md
```

---

## 3. Datenstruktur (content.json)

```json
{
  "meta": {
    "title": "AI Coding Literacy",
    "subtitle": "...",
    "description": "..."
  },
  "audience": {
    "description": "...",
    "prerequisites": ["..."]
  },
  "chapters": [
    {
      "id": "CT",
      "name": "Computational Thinking",
      "color": "#4A7C7C",
      "short": "Probleme strukturieren und zerlegen",
      "theory": {
        "description": "...",
        "keyPoints": ["...", "..."],
        "concepts": [{"term": "...", "definition": "..."}]
      },
      "handsOn": [
        {
          "id": "CT-1",
          "title": "...",
          "summary": "...",
          "goals": ["...", "..."],
          "exercise": {
            "description": "...",
            "code": "...",
            "filename": "...",
            "task": "..."
          },
          "reflection": ["...", "..."]
        }
      ],
      "resources": [
        {"title": "...", "url": "...", "type": "paper|book|documentation"}
      ],
      "quote": {"text": "...", "source": "..."}
    }
  ]
}
```

---

## 4. Features

### Sidebar Navigation
- 6 farbige Balken (je ein Kompetenzbereich)
- Labels: CT, RE, CE, PE, CL, RV
- Klick scrollt zum entsprechenden Kapitel
- Scroll-Spy highlightet aktuell sichtbaren Bereich

### Endless Scroll
- Initial: 2 Kapitel laden
- Intersection Observer triggert Nachladen bei Approach
- Fade-In Animation für neue Kapitel

### Code-Blöcke
- Kopier-Button
- Dateiname-Header
- Monospace-Font (IBM Plex Mono)

---

## 5. Kompetenzfarben

| ID | Name | Farbe |
|----|------|-------|
| CT | Computational Thinking | #4A7C7C (Petrol) |
| RE | Requirement Engineering | #8B4557 (Wine) |
| CE | Context Engineering | #5B7355 (Moss) |
| PE | Prompt Engineering | #7B6B8D (Mauve) |
| CL | Code Literacy | #8B7355 (Bronze) |
| RV | Review | #4A6B8C (Steel Blue) |

---

## 6. Umsetzungsschritte

- [x] CSS erstellen – style.css nach Design-Spezifikation
- [x] JavaScript erstellen – main.js mit Copy-Funktion
- [x] JSON-Datenstruktur – content.json mit 6 Kapiteln
- [x] Single-Page – de/index.html mit Endless Scroll
- [ ] Kompetenzmodell – de/kompetenzmodell.html aktualisieren
- [ ] Referenz – de/referenz.html erstellen
- [ ] GitHub Pages – Deployment konfigurieren

---

## 7. Nicht im Scope

- Englische Version (Struktur vorbereitet mit /de/ Pfad)
- Logbuch-Komponente (Phase 2)
- Syntax-Highlighting für Code (optional)

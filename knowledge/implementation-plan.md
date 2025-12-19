# Implementierungsplan: AI Coding Literacy Lernplattform

## Projektübersicht

**Ziel:** Single-Page Lernplattform mit Loop-UI auf GitHub Pages.

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

### Loop-UI

Das zentrale UI-Konzept ist der **Loop** - eine horizontale Navigation innerhalb jedes Kapitels:

```
●───○───○───○
Überblick → Theorie → Übungen → Ressourcen

┌─────────────────────────────────────────────────────────────┐
│ Überblick      │ Theorie        │ Übungen       │ Ressourcen│
│                │                │               │           │
│ Kapitelname    │ Kernpunkte     │ Exercises     │ Links     │
│ Kurzbeschr.    │ Konzepte       │ Code          │ Zitat     │
│ Intro-Text     │                │ Reflexion     │           │
│                │ [← Zurück]     │ [← Zurück]    │ [← Zurück]│
│ [Weiter →]     │ [Weiter →]     │ [Weiter →]    │ ✓ Complete│
└─────────────────────────────────────────────────────────────┘
```

**Didaktische Metapher:** Der Loop spiegelt den iterativen Lernprozess wider:
1. **Überblick**: Thema und Einführung verstehen
2. **Theorie**: Konzepte und Kernpunkte lernen
3. **Übungen**: Praktisch anwenden
4. **Ressourcen**: Vertiefen und weiterlernen

### Navigation

- **Vertikal:** Scrollen zwischen Kapiteln (3rem Abstand, 3px Trennlinie)
- **Horizontal:** Button-Navigation + Keyboard (← →) durch die 4 Loop-Phasen
- **Sidebar:** 6 farbige Kompetenzbalken mit Scroll-Spy

---

## 2. Projektstruktur

```
ai-coding-literacy/
├── index.html              # Redirect zu /de/
├── de/
│   ├── index.html          # Single-Page mit Loop-UI
│   ├── kompetenzmodell.html # Detailseite Kompetenzen
│   └── referenz.html       # Referenzmaterial
├── css/
│   └── style.css           # Globale Styles inkl. Loop-UI
├── data/
│   └── content.json        # Alle Inhalte strukturiert
├── js/
│   ├── app.js              # Hauptlogik für Loop-UI
│   ├── kompetenzmodell.js  # Kompetenzmodell-Seite
│   └── referenz.js         # Referenz-Seite
└── knowledge/              # Konzeptdokumente (nicht Teil der Website)
    ├── concept.md
    ├── design.md
    ├── implementation-plan.md
    ├── hands-on.md
    ├── status-report.md
    ├── grundlagen-computational-thinking.md
    ├── grundlagen-kompetenzbereiche.md
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
  "chapters": [
    {
      "id": "CT",
      "name": "Computational Thinking",
      "color": "#4A7C7C",
      "short": "Probleme strukturieren und zerlegen",
      "theory": {
        "description": "Einführungstext für Überblick-Panel...",
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

## 4. UI-Komponenten

### Loop-Progress-Indikator
```css
.loop-progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* ●───○───○───○ Überblick → Theorie → Übungen → Ressourcen */
```

### Loop-Container (horizontaler Scroll)
```css
.loop-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
```

### Loop-Panels
- **panel-input**: Überblick - Kapitelname, Intro-Text, "Weiter zur Theorie" Button
- **panel-process**: Theorie - Kernpunkte, Konzepte, Navigation
- **panel-execute**: Übungen - Exercises mit Code, Navigation
- **panel-output**: Ressourcen - Links, Zitat, "✓ Loop complete"

### Panel-Navigation
Jedes Panel (außer Überblick) hat:
- "← Zurück" Button (links)
- "Weiter →" Button (rechts, außer letztes Panel)
- Keyboard-Support: ← → Pfeiltasten

### Sidebar Navigation
- 6 farbige Balken (je ein Kompetenzbereich)
- Labels: CT, RE, CE, PE, CL, RV
- Klick scrollt zum entsprechenden Kapitel
- Scroll-Spy highlightet aktuell sichtbaren Bereich

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

## 6. Umsetzungsstand

### Abgeschlossen
- [x] CSS erstellen – style.css nach Design-Spezifikation
- [x] JavaScript erstellen – app.js mit Loop-UI
- [x] JSON-Datenstruktur – content.json mit 6 Kapiteln
- [x] Single-Page – de/index.html mit Loop-UI
- [x] Loop-Progress-Indikator (deutsche Labels)
- [x] Horizontale Panel-Navigation
- [x] Panel-Navigation-Buttons (← Zurück / Weiter →)
- [x] Keyboard-Navigation (← →)
- [x] Scroll-State Speicherung (sessionStorage v2)
- [x] Responsive Fallback für Mobile (<600px)
- [x] Kompetenzmodell – de/kompetenzmodell.html
- [x] Referenz – de/referenz.html
- [x] UI Bug Fixes (Panel-Höhe, Kapitel-Trennung, Labels)
- [x] CT-Kapitel Content erweitert

### Offen
- [ ] Content erweitern: RE, CE, PE, CL, RV Kapitel
- [ ] GitHub Pages – Deployment konfigurieren
- [ ] Final-Test aller Seiten

---

## 7. Nicht im Scope

- Englische Version (Struktur vorbereitet mit /de/ Pfad)
- Logbuch-Komponente (Phase 2)
- Syntax-Highlighting für Code (optional)

---

## 8. Knowledge-Dokumente

| Datei | Inhalt |
|-------|--------|
| concept.md | Definition, Zielgruppe, Kompetenzmodell |
| design.md | Visuelle Identität, Layout, Komponenten |
| hands-on.md | Übersicht aller Hands-On-Übungen |
| status-report.md | Aktueller Projektstatus, Commits |
| grundlagen-computational-thinking.md | CT-Theorie im Detail |
| grundlagen-kompetenzbereiche.md | RE, CE, PE, CL, RV-Theorie |
| grundlagen-oekosystem.md | LLM-Ökosystem, Tools |

# Implementierungsplan: AI Coding Literacy Lernplattform

## Projektübersicht

**Ziel:** Single-Page Lernplattform mit Prompt-Loop UI auf GitHub Pages.

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

### Prompt-Loop UI

Das zentrale UI-Konzept ist der **Prompt-Loop** - eine horizontale Navigation innerhalb jedes Kapitels:

```
●───○───○───○
INPUT → PROCESS → EXECUTE → OUTPUT

┌─────────────────────────────────────────────────────────────┐
│ INPUT          │ PROCESS        │ EXECUTE       │ OUTPUT   │
│                │ (peek →)       │               │          │
│ Kapitelname    │ Theorie        │ Übungen       │ Ressourcen│
│ Kurzbeschr.    │ Kernpunkte     │ Code          │ Zitat    │
│ [Loop starten] │ Konzepte       │ Reflexion     │ [↺ Loop] │
└─────────────────────────────────────────────────────────────┘
```

**Didaktische Metapher:** Der Loop spiegelt den iterativen AI-Coding-Workflow wider:
1. **INPUT**: Problem/Anforderung verstehen
2. **PROCESS**: Wissen aufbauen (Theorie)
3. **EXECUTE**: Anwenden (Übungen)
4. **OUTPUT**: Prüfen und iterieren

### Navigation

- **Vertikal:** Scrollen zwischen Kapiteln
- **Horizontal:** Swipe/Scroll innerhalb eines Kapitels durch die 4 Loop-Phasen
- **Sidebar:** 6 farbige Kompetenzbalken mit Scroll-Spy

---

## 2. Projektstruktur

```
ai-coding-literacy/
├── index.html              # Redirect zu /de/
├── de/
│   ├── index.html          # Single-Page mit Prompt-Loop UI
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

## 4. UI-Komponenten

### Loop-Progress-Indikator
```css
.loop-progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* ●───○───○───○ INPUT → PROCESS → EXECUTE → OUTPUT */
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
- **panel-input**: Kapitelübersicht, "Loop starten" Button
- **panel-process**: Theorie, Kernpunkte, Konzepte
- **panel-execute**: Hands-On Übungen mit Code
- **panel-output**: Ressourcen, Zitat, "Loop complete"

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
- [x] Single-Page – de/index.html mit Prompt-Loop UI
- [x] Loop-Progress-Indikator
- [x] Horizontale Panel-Navigation
- [x] Keyboard-Navigation (← →)
- [x] Scroll-State Speicherung (sessionStorage)
- [x] Responsive Fallback für Mobile (<600px)
- [x] Kompetenzmodell – de/kompetenzmodell.html
- [x] Referenz – de/referenz.html

### Offen
- [ ] UI Bugs fixen (Panel-Höhe, State-Key)
- [ ] Content erweitern aus grundlagen-kompetenzbereiche.md
- [ ] GitHub Pages – Deployment konfigurieren

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
| grundlagen-computational-thinking.md | CT-Theorie im Detail |
| grundlagen-kompetenzbereiche.md | RE, CE, PE, CL, RV-Theorie |
| grundlagen-oekosystem.md | LLM-Ökosystem, Tools |

# Implementierungsplan: AI Coding Literacy Lernplattform

## Projektübersicht

**Ziel:** Lernplattform mit vertikalem Scroll-Layout auf GitHub Pages.

**Stack:**
- Vanilla HTML/CSS/JavaScript
- JSON für strukturierte Inhalte
- Intersection Observer für Scroll-Spy
- GitHub Pages

**Design:** Tufte-inspirierte Ästhetik nach [design.md](design.md).

---

## 1. Architektur

### Datengetriebener Ansatz

Alle Inhalte werden aus `/data/content.json` geladen:
- Meta-Informationen (Titel, Beschreibung)
- 6 Kapitel (Kompetenzbereiche) mit Farben
- Jedes Kapitel mit Theorie, Hands-On-Übungen, Ressourcen

### Vertikales Scroll-Layout

Das zentrale UI-Konzept ist **vertikales Scrollen** mit einer erweiterten Sidebar:

```
┌─────────────────────────────────────────┐
│ Sidebar     │  Kapitel-Header           │
│             │  ────────────────────     │
│ [CT] ←      │  ■ Theorie                │
│  Theorie    │    Kernpunkte             │
│  Übungen    │    Konzepte               │
│  Ressourcen │                           │
│ [RE]        │  ■ Übungen                │
│ [CE]        │    Exercise-Blöcke        │
│ [PE]        │    Code, Reflexion        │
│ [CL]        │                           │
│ [RV]        │  ■ Ressourcen             │
│             │    Links, Zitat           │
└─────────────────────────────────────────┘
```

**Vorteile:**
- Natürliches Scrollverhalten
- Alle Inhalte auf einen Blick zugänglich
- Sidebar mit Kontext (welche Sektion ist aktiv)

### Zwei-Ebenen-Konzept

1. **Übersicht (index.html):** Alle 6 Kompetenzen kompakt
2. **Detailseiten (ct.html etc.):** Vertiefende Inhalte (geplant)

---

## 2. Projektstruktur

```
ai-coding-literacy/
├── index.html              # Redirect zu /de/
├── de/
│   ├── index.html          # Übersicht mit vertikalem Scroll
│   ├── kompetenzmodell.html # Detailseite Kompetenzen
│   ├── referenz.html       # Referenzmaterial
│   ├── ct.html             # CT-Detailseite (geplant)
│   ├── re.html             # RE-Detailseite (geplant)
│   ├── ce.html             # CE-Detailseite (geplant)
│   ├── pe.html             # PE-Detailseite (geplant)
│   ├── cl.html             # CL-Detailseite (geplant)
│   └── rv.html             # RV-Detailseite (geplant)
├── css/
│   └── style.css           # Globale Styles
├── data/
│   └── content.json        # Alle Inhalte strukturiert
├── js/
│   ├── app.js              # Hauptlogik für Übersicht
│   ├── kompetenzmodell.js  # Kompetenzmodell-Seite
│   └── referenz.js         # Referenz-Seite
└── knowledge/              # Konzeptdokumente (nicht Teil der Website)
    ├── concept.md
    ├── design.md
    ├── implementation-plan.md
    ├── status-report.md
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
  "chapters": [
    {
      "id": "CT",
      "name": "Computational Thinking",
      "color": "#4A7C7C",
      "short": "Probleme strukturieren und zerlegen",
      "theory": {
        "description": "Einführungstext...",
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

### Sidebar Navigation

```
┌──────────────┐
│ Übersicht    │  ← Aktive Seite
│ Kompetenzmod │
│ Referenz     │
├──────────────┤
│ [CT] ■■■■■■  │  ← Farbiger Balken
│  Theorie     │  ← Sub-Link (sichtbar bei aktivem Kapitel)
│  Übungen     │
│  Ressourcen  │
│ [RE] ■■■■■■  │
│ [CE] ■■■■■■  │
│ [PE] ■■■■■■  │
│ [CL] ■■■■■■  │
│ [RV] ■■■■■■  │
└──────────────┘
```

**Verhalten:**
- Kompetenz-Balken: Klick scrollt zum Kapitel
- Sub-Links: Klappen aus bei aktivem Kapitel
- Scroll-Spy: Highlightet aktiven Balken + Sub-Link

### Kapitel-Struktur

```html
<section class="chapter" id="chapter-CT" data-competency="CT">
  <div class="chapter-header-block">
    <span class="chapter-id-badge">CT</span>
    <h2 class="chapter-title">Computational Thinking</h2>
    <p class="chapter-subtitle">Probleme strukturieren und zerlegen</p>
  </div>

  <div class="chapter-intro-block">
    <p>Einführungstext...</p>
  </div>

  <div class="content-section" id="CT-theorie">
    <h3 class="section-title">
      <span class="section-marker"></span>
      Theorie
    </h3>
    <!-- Kernpunkte, Konzepte -->
  </div>

  <div class="content-section" id="CT-uebungen">
    <h3 class="section-title">
      <span class="section-marker"></span>
      Übungen
    </h3>
    <!-- Exercise-Blöcke -->
  </div>

  <div class="content-section" id="CT-ressourcen">
    <h3 class="section-title">
      <span class="section-marker"></span>
      Ressourcen
    </h3>
    <!-- Links, Zitat -->
  </div>
</section>
```

### Code-Block

```
┌─ dateiname.py ─────────────── [kopieren] ─┐
│ from PIL import Image                      │
│ import os                                  │
└────────────────────────────────────────────┘
```

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

## 6. JavaScript-Architektur (app.js)

### Hauptfunktionen

```javascript
// State
let contentData = null;
let loadedChapters = 0;

// Initialisierung
loadContent()           // Lädt JSON
initPage()              // Initialisiert UI

// Sidebar
scrollToChapter(id)     // Scrollt zu Kapitel
scrollToSection(id, sec) // Scrollt zu Sektion

// Content
loadMoreChapters()      // Lazy Loading
createChapterElement()  // Erstellt Kapitel-HTML

// Observers
setupInfiniteScroll()   // Lazy Loading Observer
setupScrollSpy()        // Scroll-Spy Observer
```

### Scroll-Spy

Zwei IntersectionObserver:

1. **chapterObserver:** Beobachtet `.chapter` Elemente
   - Highlightet aktiven Kompetenz-Balken
   - Zeigt Sub-Links für aktives Kapitel

2. **sectionObserver:** Beobachtet `.content-section` Elemente
   - Highlightet aktiven Sub-Link

---

## 7. Umsetzungsstand

### Abgeschlossen

- [x] CSS erstellen – style.css mit vertikalem Layout
- [x] JavaScript erstellen – app.js mit Scroll-Spy
- [x] JSON-Datenstruktur – content.json mit 6 Kapiteln
- [x] Single-Page – de/index.html mit vertikalem Scroll
- [x] Sidebar mit ausklappbaren Sub-Links
- [x] Dual Scroll-Spy (Kapitel + Sektion)
- [x] Infinite Scroll für Kapitel
- [x] Responsive Fallback für Mobile (<600px)
- [x] Kompetenzmodell – de/kompetenzmodell.html
- [x] Referenz – de/referenz.html
- [x] Content erweitert: Alle 6 Kapitel

### Offen

- [x] Detailseiten erstellen (ct.html, re.html, etc.) ✅
- [x] Setup-Seiten (de/setup.html, en/setup.html) ✅
- [x] Sidebar-Labels mit vollständigen Namen ✅
- [x] Englische Version ✅
- [ ] GitHub Pages – Deployment konfigurieren
- [ ] Final-Test aller Seiten
- [ ] Mobile-Test

---

## 8. Nicht im Scope

- Logbuch-Komponente (Phase 2)
- Syntax-Highlighting für Code (optional)
- Interaktive Code-Ausführung

---

## 9. Knowledge-Dokumente

| Datei | Inhalt |
|-------|--------|
| concept.md | Definition, Zielgruppe, Kompetenzmodell |
| design.md | Visuelle Identität, Layout, Komponenten |
| hands-on.md | Übersicht aller Hands-On-Übungen |
| status-report.md | Aktueller Projektstatus |
| journal.md | Session-Logs und Erkenntnisse |
| grundlagen-computational-thinking.md | CT-Theorie im Detail |
| grundlagen-kompetenzbereiche.md | RE, CE, PE, CL, RV-Theorie |
| grundlagen-oekosystem.md | LLM-Ökosystem, Tools |

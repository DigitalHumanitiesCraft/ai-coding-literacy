# Implementierungsplan: AI Coding Literacy Lernplattform

## Projektuebersicht

Ziel: Lernplattform mit vertikalem Scroll-Layout auf GitHub Pages.

Stack:
- Vanilla HTML/CSS/JavaScript
- JSON fuer strukturierte Inhalte
- Intersection Observer fuer Scroll-Spy
- GitHub Pages

Design: Tufte-inspirierte Aesthetik nach design.md.

---

## 1. Architektur

### Datengetriebener Ansatz

Alle Inhalte werden aus /data/content.json geladen:
- Meta-Informationen (Titel, Beschreibung)
- 6 Hauptkapitel (Kompetenzbereiche) mit Farben
- Jedes Kapitel mit Theorie, Hands-On-Uebungen, Ressourcen

### Vertikales Scroll-Layout

Das zentrale UI-Konzept ist vertikales Scrollen mit einer erweiterten Sidebar:

```
+-----------------------------------------+
| Sidebar     |  Kapitel-Header           |
|             |  --------------------     |
| [CT] <-     |  # Theorie                |
|  Theorie    |    Kernpunkte             |
|  Uebungen   |    Konzepte               |
|  Ressourcen |                           |
| [RE]        |  # Uebungen               |
| [CE]        |    Exercise-Bloecke       |
| [PE]        |    Code, Reflexion        |
| [CL]        |                           |
| [RV]        |  # Ressourcen             |
|             |    Links, Zitat           |
+-----------------------------------------+
```

Vorteile:
- Natuerliches Scrollverhalten
- Alle Inhalte auf einen Blick zugaenglich
- Sidebar mit Kontext (welche Sektion ist aktiv)

### Zwei-Ebenen-Konzept

1. Uebersicht (index.html): Alle 6 Kompetenzen kompakt
2. Detailseiten (ct.html etc.): Vertiefende Inhalte

---

## 2. Projektstruktur

```
ai-coding-literacy/
+-- index.html              # Redirect zu /de/
+-- de/
|   +-- index.html          # Uebersicht mit vertikalem Scroll
|   +-- setup.html          # Setup-Anleitung
|   +-- kompetenzmodell.html
|   +-- referenz.html
|   +-- ct.html, re.html, ce.html, pe.html, cl.html, rv.html
+-- css/
|   +-- style.css           # Globale Styles (inkl. Glossar)
+-- data/
|   +-- content.json        # Alle Inhalte strukturiert
|   +-- glossar.json        # Glossar-Begriffe (21 Eintraege, 4 Kategorien)
|   +-- kriminalmuseum/     # Workshop-Datensatz
|       +-- workshop_objekte.json
|       +-- workshop_objekte.csv
|       +-- kriminalmuseum_komplett.csv
+-- js/
|   +-- app.js              # Hauptlogik fuer Uebersicht
|   +-- glossary.js         # Glossar-System
|   +-- setup.js            # Setup-Seite
|   +-- kompetenzmodell.js
|   +-- referenz.js
+-- knowledge/              # Konzeptdokumente (nicht Teil der Website)
|   +-- concept.md
|   +-- design.md
|   +-- implementation-plan.md
|   +-- status-report.md
|   +-- journal.md
|   +-- hands-on.md
|   +-- workshops/
|       +-- programmieren-2-0.md
+-- workshops/
    +-- programmieren-2-0/
        +-- handouts/
        +-- python/
        +-- web/
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
      "longDescription": "...",
      "theory": {
        "description": "Einfuehrungstext...",
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
+----------------+
| Uebersicht     |  <- Aktive Seite
| Kompetenzmod   |
| Referenz       |
+----------------+
| [CT] ######    |  <- Farbiger Balken
|  Theorie       |  <- Sub-Link (sichtbar bei aktivem Kapitel)
|  Uebungen      |
|  Ressourcen    |
| [RE] ######    |
| [CE] ######    |
| [PE] ######    |
| [CL] ######    |
| [RV] ######    |
+----------------+
```

Verhalten:
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
    <p>Einfuehrungstext...</p>
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
      Uebungen
    </h3>
    <!-- Exercise-Bloecke -->
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

---

## 5. Kompetenzfarben

- CT (Computational Thinking): #4A7C7C (Petrol)
- RE (Requirement Engineering): #8B4557 (Wine)
- CE (Context Engineering): #5B7355 (Moss)
- PE (Prompt Engineering): #7B6B8D (Mauve)
- CL (Code Literacy): #8B7355 (Bronze)
- RV (Review): #4A6B8C (Steel Blue)

---

## 6. JavaScript-Architektur (app.js)

### Hauptfunktionen

```javascript
// State
let contentData = null;
let loadedChapters = 0;

// Initialisierung
loadContent()           // Laedt JSON
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

1. chapterObserver: Beobachtet .chapter Elemente
   - Highlightet aktiven Kompetenz-Balken
   - Zeigt Sub-Links fuer aktives Kapitel

2. sectionObserver: Beobachtet .content-section Elemente
   - Highlightet aktiven Sub-Link

---

## 7. Umsetzungsstand

### Abgeschlossen

- [x] CSS erstellen - style.css mit vertikalem Layout
- [x] JavaScript erstellen - app.js mit Scroll-Spy
- [x] JSON-Datenstruktur - content.json mit 6 Kapiteln
- [x] Single-Page - de/index.html mit vertikalem Scroll
- [x] Sidebar mit ausklappbaren Sub-Links
- [x] Dual Scroll-Spy (Kapitel + Sektion)
- [x] Infinite Scroll fuer Kapitel
- [x] Responsive Fallback fuer Mobile (<600px)
- [x] Kompetenzmodell - de/kompetenzmodell.html
- [x] Referenz - de/referenz.html
- [x] Content erweitert: Alle 6 Kapitel
- [x] Detailseiten erstellen (ct.html, re.html, etc.)
- [x] Setup-Seite (de/setup.html)
- [x] Sidebar-Labels mit vollstaendigen Namen
- [x] Glossar-System implementiert (glossary.js, glossar.json)
- [x] Info-Panel fuer Glossar-Definitionen
- [x] Kompetenzmodell longDescription-Felder
- [x] 21 Glossar-Begriffe mit umfassenden Definitionen
- [x] Repository-Konsolidierung (nur Deutsch)
- [x] Workshop-Materialien integriert

### Offen

- [ ] Workshop-UI Landingpage (wartet auf Design)
- [ ] GitHub Pages - Deployment konfigurieren
- [ ] Final-Test aller Seiten
- [ ] Mobile-Test

---

## 8. Nicht im Scope

- Logbuch-Komponente (Phase 2)
- Syntax-Highlighting fuer Code (optional)
- Interaktive Code-Ausfuehrung

---

## 9. Knowledge-Dokumente

- concept.md: Definition, Zielgruppe, Kompetenzmodell (7 Bereiche)
- design.md: Visuelle Identitaet, Layout, Komponenten
- hands-on.md: Uebersicht aller Hands-On-Uebungen
- status-report.md: Aktueller Projektstatus
- journal.md: Session-Logs und Erkenntnisse
- workshops/programmieren-2-0.md: Autoritatives Workshop-Dokument

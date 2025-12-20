# AI Coding Literacy – Design-Spezifikation

## 1. Leitprinzipien

- **Progressive Disclosure**: Komplexität entfaltet sich beim Scrollen
- **Vertikales Layout**: Natürliches Scrollverhalten, alle Inhalte zugänglich
- **Professionelle Zielgruppe**: Promovierte Fachwissenschaftler·innen brauchen Klarheit, keine Gamification
- **Code als Lesestoff**: Präsentation wie Quellentexte in Editionen (Zeilennummern, Annotationen)
- **Datengetrieben**: Alle Inhalte aus JSON, keine statischen HTML-Seiten pro Session

## 2. Visuelle Identität

Tufte-inspiriert mit Early-Web-Ästhetik: Direktheit, Lesbarkeit, funktionale Ehrlichkeit.

**Ja**
- Sichtbare Rahmen und Strukturen
- Hyperlinks blau und unterstrichen
- Horizontale Linien als Trenner (3px zwischen Kapiteln)
- Farbige Sidebar als Kompetenz-Navigation
- Ausklappbare Sub-Links für Sektionen

**Nein**
- Keine Schatten, Gradients, Transparenzen
- Keine animierten GIFs, Retro-Ironie
- Keine schwebenden Karten, Pseudo-3D
- Keine horizontalen Carousels oder Slides

## 3. Farben

| Element | Wert |
|---------|------|
| Hintergrund | `#FFFFF8` (warmes Creme) |
| Text | `#222222` |
| Links | `#0000CC` |
| Visited Links | `#551A8B` |
| Rahmen/Linien | `#999999` |
| Code-Hintergrund | `#F0F0F0` |

### Kompetenzfarben

| ID | Name | Farbe |
|----|------|-------|
| CT | Computational Thinking | `#4A7C7C` (Petrol) |
| RE | Requirement Engineering | `#8B4557` (Wine) |
| CE | Context Engineering | `#5B7355` (Moss) |
| PE | Prompt Engineering | `#7B6B8D` (Mauve) |
| CL | Code Literacy | `#8B7355` (Bronze) |
| RV | Review | `#4A6B8C` (Steel Blue) |

### Glossar-Kategorien-Farben

| ID | Name | Farbe |
|----|------|-------|
| llm-basics | LLM-Grundlagen | `#6B8E9D` (Light Steel) |
| coding-approaches | Coding-Ansätze | `#9D7B6B` (Warm Brown) |

Glossar-Begriffe können entweder zu thematischen Kategorien oder direkt zu Kompetenzbereichen gehören.

## 4. Typografie

| Element | Schrift | Größe |
|---------|---------|-------|
| Fließtext | Georgia | 18px, Zeilenabstand 1.7 |
| Code | IBM Plex Mono | 16px |
| H1 | Georgia Bold | 28px |
| H2 (Kapitel) | Georgia Bold | 24px |
| H3 (Sektion) | Georgia Bold | 20px |
| H4 (Übung) | Georgia Bold | 18px |
| Sub-Links | IBM Plex Mono | 11px |
| Badges | IBM Plex Mono | 12px |

## 5. Layout

### Sidebar (200px, fixed)

```
┌──────────────┐
│ Übersicht    │  ← Aktive Seite
│ Kompetenzmod │
│ Referenz     │
├──────────────┤
│ [CT] ■■■■■■  │  ← Farbiger Balken
│  Theorie     │  ← Sub-Link
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
- Kompetenz-Balken klickbar → scrollt zum Kapitel
- Sub-Links klappen aus bei aktivem Kapitel (CSS transition)
- Scroll-Spy highlightet aktiven Balken + Sub-Link

### Content (max. 780px)

- Zentriert rechts neben Sidebar
- Kapitel als vertikaler Scroll
- 3px schwarze Linie + 3rem Margin zwischen Kapiteln

### Info Panel (320px, fixed rechts)

```
                              ┌──────────────┐
                              │      ×       │
                              ├──────────────┤
                              │ Begriff      │
                              │ [Badge]      │
                              │              │
                              │ Definition   │
                              │              │
                              │ Verwandte:   │
                              │ • Begriff 1  │
                              │ • Begriff 2  │
                              └──────────────┘
```

**Zweck:**
- Zeigt Glossar-Definitionen
- Kann für weitere Zusatzinformationen genutzt werden (Vertiefungen, etc.)

**Verhalten:**
- Hover über Glossar-Begriff → Panel öffnet sich sofort
- Nach 1 Sekunde Hover → Panel wird "gepinnt" (bleibt offen)
- Schließen: X-Button oder Klick außerhalb
- Verwandte Begriffe sind klickbar

**Position:**
- Fixed rechts, außerhalb Viewport wenn geschlossen
- Slide-in Animation (0.3s ease)
- Z-index: 1000

### Responsive (<1000px)

- Sidebar verschwindet
- Content zentriert, volle Breite

### Mobile (<600px)

- Kompaktere Abstände
- Kapitel-Header kleinere Schrift
- Kein horizontales Layout

## 6. Vertikales Scroll-Layout

### Konzept

Die Übersichtsseite zeigt alle 6 Kompetenzen vertikal untereinander:

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

### Kapitel-Struktur

Jedes Kapitel enthält drei Sektionen:

1. **Theorie** – Kernpunkte, Konzepte
2. **Übungen** – Exercise-Blöcke mit Code
3. **Ressourcen** – Links, Zitat

### Kapitel-Header

```
┌────────────────────────────────────────┐
│ [CT]                                   │
│ Computational Thinking                 │
│ Probleme strukturieren und zerlegen    │
└────────────────────────────────────────┘
```

- Farbiger Badge mit Kompetenz-ID
- Titel (H2)
- Untertitel (kursiv, muted)
- Hintergrund: Code-Background-Farbe
- Linker Rand: Kompetenzfarbe (4px)

### Sektions-Titel

```
■ Theorie
────────────────────────────
```

- Farbiger Marker (8x8px)
- Titel (H3)
- Unterlinie (1px border)

## 7. Komponenten

### Sidebar Sub-Links

```css
.sidebar-sublinks {
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s, opacity 0.3s;
}

.sidebar-sublinks.visible {
  max-height: 120px;
  opacity: 1;
}
```

### Kernpunkte-Liste

```
→ Punkt 1
→ Punkt 2
→ Punkt 3
```

- Pfeil-Icon als Listmarker
- Kein padding-left für Bullets

### Konzept-Definitionen

```
Term
    Definition (muted)
```

- Term in Monospace, bold
- Definition eingerückt, muted

### Exercise-Block

```
┌────────────────────────────────────────┐
│ CT-1: Übungsname                       │
│ Kurzbeschreibung (muted)               │
│                                        │
│ Lernziele:                             │
│ • Ziel 1                               │
│ • Ziel 2                               │
│                                        │
│ Beschreibung...                        │
│                                        │
│ ┌─ dateiname.py ─────── [kopieren] ─┐  │
│ │ code                              │  │
│ └───────────────────────────────────┘  │
│                                        │
│ Aufgabe: Task-Beschreibung             │
│                                        │
│ Reflexion:                             │
│ • Frage 1                              │
│ • Frage 2                              │
└────────────────────────────────────────┘
```

### Code-Block

```
┌─ dateiname.py ─────────────── [kopieren] ─┐
│ from PIL import Image                      │
│ import os                                  │
└────────────────────────────────────────────┘
```

### Zitat

```
┌────────────────────────────────────────┐
│ "Zitat-Text..."                        │
│ — Quelle                               │
└────────────────────────────────────────┘
```

- Kursiv
- Muted
- Background: code-bg
- Border-left: 4px

### Glossar-Begriff

```
Begriff ist farbcodiert und unterstrichen (dotted)
```

**Visuelle Eigenschaften:**
- `text-decoration: underline dotted`
- Thickness: 1.5px
- `cursor: help`
- Farbe basiert auf Kategorie (llm-basics, coding-approaches, oder Kompetenz-ID)
- Hover: dotted → solid underline

**Markup:**
```html
<span class="glossary-term" data-term-id="llm" data-category="llm-basics">
  Large Language Models
</span>
```

Begriffe werden automatisch via JavaScript erkannt und markiert (`glossary.js`).

## 8. Interaktion

### Sidebar-Navigation

- Klick auf Balken → `scrollIntoView({ behavior: 'smooth' })`
- Klick auf Sub-Link → scrollt zur Sektion

### Scroll-Spy

Zwei IntersectionObserver:

1. **Kapitel-Observer**
   - rootMargin: `-20% 0px -60% 0px`
   - Highlightet aktiven Balken
   - Zeigt Sub-Links

2. **Sektions-Observer**
   - rootMargin: `-30% 0px -50% 0px`
   - Highlightet aktiven Sub-Link

### Code kopieren

- Button in Code-Header
- Feedback: "kopiert!" für 2 Sekunden

### Glossar & Info Panel

**Hover-Mechanik:**
1. `mouseenter` auf `.glossary-term` → Panel öffnet sofort
2. Nach 1000ms Hover → Panel wird gepinnt (`.pinned` class)
3. `mouseleave` → Timeout löschen, Panel schließt (nur wenn nicht gepinnt)

**Pinning:**
- Click auf Begriff → Panel sofort gepinnt
- Click außerhalb oder X-Button → Panel schließt, unpinnen
- Im gepinnten Zustand: scrollbar, Links klickbar

**Verwandte Begriffe:**
- Klick auf verwandten Begriff → Lädt neue Definition, bleibt gepinnt

## 9. Technik

**Stack**
- Vanilla HTML/CSS/JavaScript
- JSON für Inhalte (`/data/content.json`, `/data/glossar.json`)
- Intersection Observer für Scroll-Spy
- Automatisches Text-Markup für Glossar-Begriffe
- Keine Build-Tools, keine Frameworks

**Warum?**
Maximale Transparenz – was geschrieben wird, ist was im Browser läuft. Ideal für ein Curriculum, das Code-Verständnis lehrt.

## 10. Dateien

```
de/index.html          # Übersicht mit vertikalem Scroll
en/index.html          # Englische Version
css/style.css          # Globale Styles (inkl. Glossar & Info Panel)
js/app.js              # Scroll-Spy, Sidebar-Logik
js/glossary.js         # Glossar-System, Info Panel, Auto-Markup
data/content.json      # Alle Inhalte strukturiert (DE)
data/content-en.json   # Alle Inhalte strukturiert (EN)
data/glossar.json      # Glossar-Begriffe (DE)
data/glossar-en.json   # Glossar-Begriffe (EN)
```

## 11. Glossar-System

### Datenstruktur (`glossar.json`)

```json
{
  "categories": [
    {
      "id": "llm-basics",
      "name": "LLM-Grundlagen",
      "color": "#6B8E9D"
    }
  ],
  "terms": [
    {
      "id": "llm",
      "term": "Large Language Models",
      "short": "LLMs",
      "category": "llm-basics",
      "definition": "KI-Systeme, die auf großen Textmengen...",
      "relatedTerms": ["vibe-coding", "prompt-engineering"],
      "detailPage": null
    }
  ]
}
```

### Workflow

1. **Beim Laden**: `glossary.js` lädt entsprechende JSON (de/en)
2. **Auto-Markup**: Durchsucht `#content`, findet alle Vorkommen der Begriffe
3. **Markup**: Wraps Begriffe in `<span class="glossary-term" data-term-id="..." data-category="...">`
4. **Event-Delegation**: Hover/Click Events auf `.glossary-term`
5. **Panel**: Zeigt Definition im rechten Info-Panel

### Erweiterbarkeit

Das Info-Panel ist nicht auf Glossar beschränkt. Es kann auch für:
- Vertiefende Informationen zu Konzepten
- Literaturhinweise
- Code-Beispiele mit Erklärungen
- Alle Arten von "zweiter Ebene" Information

genutzt werden.

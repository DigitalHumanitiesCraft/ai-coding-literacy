# AI Coding Literacy - Design-Spezifikation

## 1. Leitprinzipien

- Progressive Disclosure: Komplexitaet entfaltet sich beim Scrollen
- Vertikales Layout: Natuerliches Scrollverhalten, alle Inhalte zugaenglich
- Professionelle Zielgruppe: Promovierte Fachwissenschaftler brauchen Klarheit, keine Gamification
- Code als Lesestoff: Praesentation wie Quellentexte in Editionen (Zeilennummern, Annotationen)
- Datengetrieben: Alle Inhalte aus JSON, keine statischen HTML-Seiten pro Session

## 2. Visuelle Identitaet

Tufte-inspiriert mit Early-Web-Aesthetik: Direktheit, Lesbarkeit, funktionale Ehrlichkeit.

Ja:
- Sichtbare Rahmen und Strukturen
- Hyperlinks blau und unterstrichen
- Horizontale Linien als Trenner (3px zwischen Kapiteln)
- Farbige Sidebar als Kompetenz-Navigation
- Ausklappbare Sub-Links fuer Sektionen

Nein:
- Keine Schatten, Gradients, Transparenzen
- Keine animierten GIFs, Retro-Ironie
- Keine schwebenden Karten, Pseudo-3D
- Keine horizontalen Carousels oder Slides

## 3. Farben

Grundfarben:
- Hintergrund: #FFFFF8 (warmes Creme)
- Text: #222222
- Links: #0000CC
- Visited Links: #551A8B
- Rahmen/Linien: #999999
- Code-Hintergrund: #F0F0F0

### Kompetenzfarben

- CT (Computational Thinking): #4A7C7C (Petrol)
- RE (Requirement Engineering): #8B4557 (Wine)
- CE (Context Engineering): #5B7355 (Moss)
- PE (Prompt Engineering): #7B6B8D (Mauve)
- CL (Code Literacy): #8B7355 (Bronze)
- RV (Review): #4A6B8C (Steel Blue)

### Glossar-Kategorien-Farben

- llm-basics (LLM-Grundlagen): #6B8E9D (Light Steel)
- coding-approaches (Coding-Ansaetze): #9D7B6B (Warm Brown)
- tech-basics (Technische Grundlagen): #7B8B6B (Sage)
- web-basics (Web-Grundlagen): #6B7B9D (Slate Blue)

Glossar-Begriffe koennen entweder zu thematischen Kategorien oder direkt zu Kompetenzbereichen gehoeren.

## 4. Typografie

- Fliesstext: Georgia, 18px, Zeilenabstand 1.7
- Code: IBM Plex Mono, 16px
- H1: Georgia Bold, 28px
- H2 (Kapitel): Georgia Bold, 24px
- H3 (Sektion): Georgia Bold, 20px
- H4 (Uebung): Georgia Bold, 18px
- Sub-Links: IBM Plex Mono, 11px
- Badges: IBM Plex Mono, 12px

## 5. Layout

### Sidebar (200px, fixed)

```
+----------------+
| Uebersicht     |  <- Aktive Seite
| Kompetenzmod   |
| Referenz       |
+----------------+
| [CT] ######    |  <- Farbiger Balken
|  Theorie       |  <- Sub-Link
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
- Kompetenz-Balken klickbar -> scrollt zum Kapitel
- Sub-Links klappen aus bei aktivem Kapitel (CSS transition)
- Scroll-Spy highlightet aktiven Balken + Sub-Link

### Content (max. 780px)

- Zentriert rechts neben Sidebar
- Kapitel als vertikaler Scroll
- 3px schwarze Linie + 3rem Margin zwischen Kapiteln

### Info Panel (320px, fixed rechts)

```
                              +----------------+
                              |      x         |
                              +----------------+
                              | Begriff        |
                              | [Badge]        |
                              |                |
                              | Definition     |
                              |                |
                              | Verwandte:     |
                              | - Begriff 1    |
                              | - Begriff 2    |
                              +----------------+
```

Zweck:
- Zeigt Glossar-Definitionen
- Kann fuer weitere Zusatzinformationen genutzt werden (Vertiefungen, etc.)

Verhalten:
- Hover ueber Glossar-Begriff -> Panel oeffnet sich sofort
- Nach 1 Sekunde Hover -> Panel wird "gepinnt" (bleibt offen)
- Schliessen: X-Button oder Klick ausserhalb
- Verwandte Begriffe sind klickbar

Position:
- Fixed rechts, ausserhalb Viewport wenn geschlossen
- Slide-in Animation (0.3s ease)
- Z-index: 1000

### Responsive (<1000px)

- Sidebar verschwindet
- Content zentriert, volle Breite

### Mobile (<600px)

- Kompaktere Abstaende
- Kapitel-Header kleinere Schrift
- Kein horizontales Layout

## 6. Vertikales Scroll-Layout

### Konzept

Die Uebersichtsseite zeigt alle 7 Kompetenzen vertikal untereinander (6 Hauptkapitel + EW als Querschnittskompetenz):

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

### Kapitel-Struktur

Jedes Kapitel enthaelt drei Sektionen:

1. Theorie - Kernpunkte, Konzepte
2. Uebungen - Exercise-Bloecke mit Code
3. Ressourcen - Links, Zitat

### Kapitel-Header

```
+----------------------------------------+
| [CT]                                   |
| Computational Thinking                 |
| Probleme strukturieren und zerlegen    |
+----------------------------------------+
```

- Farbiger Badge mit Kompetenz-ID
- Titel (H2)
- Untertitel (kursiv, muted)
- Hintergrund: Code-Background-Farbe
- Linker Rand: Kompetenzfarbe (4px)

### Sektions-Titel

```
# Theorie
----------------------------
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
-> Punkt 1
-> Punkt 2
-> Punkt 3
```

- Pfeil-Icon als Listmarker
- Kein padding-left fuer Bullets

### Konzept-Definitionen

```
Term
    Definition (muted)
```

- Term in Monospace, bold
- Definition eingerueckt, muted

### Exercise-Block

```
+----------------------------------------+
| CT-1: Uebungsname                      |
| Kurzbeschreibung (muted)               |
|                                        |
| Lernziele:                             |
| - Ziel 1                               |
| - Ziel 2                               |
|                                        |
| Beschreibung...                        |
|                                        |
| +- dateiname.py ---------- [kopieren]+ |
| | code                               | |
| +------------------------------------+ |
|                                        |
| Aufgabe: Task-Beschreibung             |
|                                        |
| Reflexion:                             |
| - Frage 1                              |
| - Frage 2                              |
+----------------------------------------+
```

### Code-Block

```
+- dateiname.py ------------------- [kopieren]+
| from PIL import Image                       |
| import os                                   |
+---------------------------------------------+
```

### Zitat

```
+----------------------------------------+
| "Zitat-Text..."                        |
| - Quelle                               |
+----------------------------------------+
```

- Kursiv
- Muted
- Background: code-bg
- Border-left: 4px

### Glossar-Begriff

```
Begriff ist farbcodiert und unterstrichen (dotted)
```

Visuelle Eigenschaften:
- text-decoration: underline dotted
- Thickness: 1.5px
- cursor: help
- Farbe basiert auf Kategorie (llm-basics, coding-approaches, tech-basics, web-basics, oder Kompetenz-ID)
- Hover: dotted -> solid underline

Markup:
```html
<span class="glossary-term" data-term-id="llm" data-category="llm-basics">
  Large Language Models
</span>
```

Begriffe werden automatisch via JavaScript erkannt und markiert (glossary.js).

## 8. Interaktion

### Sidebar-Navigation

- Klick auf Balken -> scrollIntoView({ behavior: 'smooth' })
- Klick auf Sub-Link -> scrollt zur Sektion

### Scroll-Spy

Zwei IntersectionObserver:

1. Kapitel-Observer
   - rootMargin: -20% 0px -60% 0px
   - Highlightet aktiven Balken
   - Zeigt Sub-Links

2. Sektions-Observer
   - rootMargin: -30% 0px -50% 0px
   - Highlightet aktiven Sub-Link

### Code kopieren

- Button in Code-Header
- Feedback: "kopiert!" fuer 2 Sekunden

### Glossar und Info Panel

Hover-Mechanik:
1. mouseenter auf .glossary-term -> Panel oeffnet sofort
2. Nach 1000ms Hover -> Panel wird gepinnt (.pinned class)
3. mouseleave -> Timeout loeschen, Panel schliesst (nur wenn nicht gepinnt)

Pinning:
- Click auf Begriff -> Panel sofort gepinnt
- Click ausserhalb oder X-Button -> Panel schliesst, unpinnen
- Im gepinnten Zustand: scrollbar, Links klickbar

Verwandte Begriffe:
- Klick auf verwandten Begriff -> Laedt neue Definition, bleibt gepinnt

## 9. Technik

Stack:
- Vanilla HTML/CSS/JavaScript
- JSON fuer Inhalte (/data/content.json, /data/glossar.json)
- Intersection Observer fuer Scroll-Spy
- Automatisches Text-Markup fuer Glossar-Begriffe
- Keine Build-Tools, keine Frameworks

Warum?
Maximale Transparenz - was geschrieben wird, ist was im Browser laeuft. Ideal fuer ein Curriculum, das Code-Verstaendnis lehrt.

## 10. Dateien

```
de/index.html          # Uebersicht mit vertikalem Scroll
de/setup.html          # Setup-Anleitung
de/kompetenzmodell.html
de/referenz.html
de/ct.html, re.html, ce.html, pe.html, cl.html, rv.html
css/style.css          # Globale Styles (inkl. Glossar und Info Panel)
js/app.js              # Scroll-Spy, Sidebar-Logik
js/glossary.js         # Glossar-System, Info Panel, Auto-Markup
data/content.json      # Alle Inhalte strukturiert
data/glossar.json      # Glossar-Begriffe (21 Eintraege, 4 Kategorien)
```

## 11. Glossar-System

### Datenstruktur (glossar.json)

```json
{
  "categories": [
    {
      "id": "llm-basics",
      "name": "LLM-Grundlagen",
      "color": "#6B8E9D"
    },
    {
      "id": "coding-approaches",
      "name": "Coding-Ansaetze",
      "color": "#9D7B6B"
    },
    {
      "id": "tech-basics",
      "name": "Technische Grundlagen",
      "color": "#7B8B6B"
    },
    {
      "id": "web-basics",
      "name": "Web-Grundlagen",
      "color": "#6B7B9D"
    }
  ],
  "terms": [
    {
      "id": "llm",
      "term": "Large Language Model",
      "short": "LLM",
      "category": "llm-basics",
      "definition": "Ein auf neuronalen Netzen basierendes...",
      "relatedTerms": ["vibe-coding", "prompt", "token"],
      "detailPage": null
    }
  ]
}
```

### Workflow

1. Beim Laden: glossary.js laedt glossar.json
2. Auto-Markup: Durchsucht #content, findet alle Vorkommen der Begriffe
3. Markup: Wraps Begriffe in <span class="glossary-term" data-term-id="..." data-category="...">
4. Event-Delegation: Hover/Click Events auf .glossary-term
5. Panel: Zeigt Definition im rechten Info-Panel

### Erweiterbarkeit

Das Info-Panel ist nicht auf Glossar beschraenkt. Es kann auch fuer:
- Vertiefende Informationen zu Konzepten
- Literaturhinweise
- Code-Beispiele mit Erklaerungen
- Alle Arten von "zweiter Ebene" Information

genutzt werden.

## 12. Workshop-UI (Archiv-Design)

Die Workshop-Landingpage verwendet ein eigenstaendiges Design, das den Transformationsprozess von physischen Objekten zu digitalen Forschungsdaten visualisiert.

### Konzept

Die Metapher "Analog zu Digital" wird sowohl inhaltlich als auch visuell umgesetzt:
- Archivkarten-Aesthetik fuer Objekt-Darstellung
- Hover-Transformation zeigt Uebergang von handschriftlich zu maschinenlesbar
- 4 Schriften repraesentieren 4 Wissensordnungen

### Farbpalette

Workshop-spezifische Farben (definiert in workshop.css):
- Hintergrund: #F5F0EA (Warm Beige)
- Akzent 1: #C4725A (Terracotta) - Datenextraktion
- Akzent 2: #7A9BB5 (Petrol) - Forschungsdaten
- Papier gealtert: #E8E0D5
- Papier frisch: #F8F5F0
- Tinte: #2C2C2C
- Tinte verblasst: #666666

### Typografie (4 Schriften)

1. Playfair Display: Ueberschriften (Museum/Institution)
2. Caveat: Handschriftlich, Archivkarten-Beschriftung
3. JetBrains Mono: Maschinenlesbar, Daten/Code
4. DM Sans: Navigation, UI-Elemente

### Objekt-Karten

Basis-Zustand (analog):
- Papier-Gradient (gealtert -> frisch)
- Handschriftliche Inventarnummer (Caveat)
- Dotted borders fuer Datenfelder
- Subtile Schatten fuer gealtertes Papier

Hover-Zustand (digital):
- Weisser Hintergrund
- Monospace-Inventarnummer (JetBrains Mono)
- Solid borders in Petrol
- Klare, strukturierte Darstellung

### Transformationsprozess

Visuelle Darstellung der 4 Schritte:
1. Physisches Objekt (Icon: 3D-Wuerfel)
2. Archivkarte (Icon: Buch)
3. Datenextraktion (Icon: Sonne, Terracotta-Hintergrund)
4. Forschungsdaten (Icon: Liste, Petrol-Hintergrund)

Verbunden durch Pfeil-Connectors, responsive Anpassung auf mobile.

### Layout

Full-width ohne Sidebar, eigene CSS-Datei (workshop.css).

Sektionen:
1. Header mit Tagline, Titel, Intro
2. Transformationsprozess-Visualisierung
3. Filter-Bar (Suche, View-Toggle, Objektanzahl)
4. Objekt-Grid (3 Spalten, responsiv)
5. Workshop-Materialien (2 Karten)
6. Kompetenz-Uebersicht (7 Badges)
7. Footer

### Dateien

- de/workshop.html: Seitenstruktur
- css/workshop.css: Workshop-spezifische Styles
- js/workshop.js: Objekt-Laden, Suche, View-Toggle

### Integration

Workshop-Link in Sidebar-Navigation aller Seiten. Kompetenz-Badges verlinken zurueck zur Hauptseite.

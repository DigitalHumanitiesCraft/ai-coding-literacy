# AI Coding Literacy – Design-Spezifikation

## 1. Leitprinzipien

- **Progressive Disclosure**: Komplexität entfaltet sich beim Scrollen
- **Prompt-Loop Metapher**: UI spiegelt den iterativen AI-Coding-Workflow (INPUT → PROCESS → EXECUTE → OUTPUT)
- **Professionelle Zielgruppe**: Promovierte Fachwissenschaftler·innen brauchen Klarheit, keine Gamification
- **Code als Lesestoff**: Präsentation wie Quellentexte in Editionen (Zeilennummern, Annotationen)
- **Datengetrieben**: Alle Inhalte aus JSON, keine statischen HTML-Seiten pro Session

## 2. Visuelle Identität

Tufte-inspiriert mit Early-Web-Ästhetik: Direktheit, Lesbarkeit, funktionale Ehrlichkeit.

**Ja**
- Sichtbare Rahmen und Strukturen
- Hyperlinks blau und unterstrichen
- Horizontale Linien als Trenner
- Farbige Sidebar als Kompetenz-Navigation
- Loop-Progress-Indikator (●───○───○───○)

**Nein**
- Keine Schatten, Gradients, Transparenzen (außer subtile Panel-Schatten für Tiefe)
- Keine animierten GIFs, Retro-Ironie
- Keine schwebenden Karten, Pseudo-3D

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

## 4. Typografie

| Element | Schrift | Größe |
|---------|---------|-------|
| Fließtext | Georgia | 18px, Zeilenabstand 1.7 |
| Code | IBM Plex Mono | 16px |
| H1 | Georgia Bold | 28px |
| H2 | Georgia Bold | 24px |
| H3 | Georgia Bold | 20px |
| Loop-Indikator | IBM Plex Mono | 11px |

## 5. Layout

### Sidebar (200px, fixed)
- 6 farbige Balken = 6 Kompetenzbereiche
- Klickbar (scrollt zur ersten Session)
- Scroll-Spy highlightet aktiven Bereich
- Labels: CT, RE, CE, PE, CL, RV

### Content (max. 780px)
- Zentriert rechts neben Sidebar
- Sessions als endloser Scroll
- Horizontale Trenner zwischen Sessions

### Responsive (<1000px)
- Sidebar verschwindet
- Content zentriert, volle Breite

### Mobile (<600px)
- Vertikales Fallback für Loop-Panels
- Kein horizontaler Scroll

## 6. Prompt-Loop UI

### Konzept

Jedes Kapitel ist ein horizontaler Loop mit 4 Phasen:

```
●───○───○───○
INPUT → PROCESS → EXECUTE → OUTPUT
```

### Loop-Progress-Indikator
- Zentriert über dem Loop-Container
- Punkte (●/○) mit Verbindungslinien
- Aktiver Schritt: gefüllt + bold
- Completed: gefüllt, muted

### Loop-Container
- Horizontaler Scroll mit CSS scroll-snap
- Peek: Nächstes Panel 100px sichtbar
- Subtiler Schatten für Tiefe

### Loop-Panels

| Panel | Inhalt | Phase-Farbe |
|-------|--------|-------------|
| INPUT | Kapitelname, Kurzbeschreibung, "Loop starten" Button | Neutral |
| PROCESS | Theorie, Kernpunkte, Konzepte | CT (Petrol) |
| EXECUTE | Übungen mit Code-Blöcken | PE (Mauve) |
| OUTPUT | Ressourcen, Zitat, "Loop complete" | RV (Steel Blue) |

### Interaktion
- **Horizontal Scroll/Swipe**: Zwischen Panels navigieren
- **"Loop starten" Button**: Springt zu PROCESS
- **Keyboard**: ← → zwischen Panels
- **State**: Panel-Position pro Kapitel in sessionStorage

## 7. Komponenten

### Session-Abschnitt (Loop-basiert)
```
●───○───○───○ INPUT → PROCESS → EXECUTE → OUTPUT
┌──────────────────────────────────────────────────────┐
│ [INPUT]                                              │
│                                                      │
│ CT                                                   │
│ ■ Computational Thinking                             │
│                                                      │
│ Probleme strukturieren und zerlegen                  │
│                                                      │
│ [Loop starten →]                                     │
└──────────────────────────────────────────────────────┘
```

### Code-Block
```
┌─ dateiname.py ─────────────── [kopieren] ─┐
│ from PIL import Image                      │
│ import os                                  │
└────────────────────────────────────────────┘
```

## 8. Interaktion

### Prompt-Loop Navigation
- Horizontales Scrollen/Swipen innerhalb eines Kapitels
- CSS scroll-snap für Panel-Snapping
- Touch-friendly durch native Browser-Unterstützung

### Sidebar-Navigation
- Klick auf Balken → scrollt zu erster Session mit dieser Kompetenz
- Scroll-Spy → aktiver Kompetenzbereich wird hervorgehoben

### Code kopieren
- Button in Code-Header
- Feedback: "kopiert!" für 2 Sekunden

### Keyboard Navigation
- ← → zwischen Loop-Panels
- Funktioniert nur für aktives Kapitel

## 9. Technik

**Stack**
- Vanilla HTML/CSS/JavaScript
- JSON für Inhalte (`/data/content.json`)
- Intersection Observer für Lazy Loading und Scroll-Spy
- Keine Build-Tools, keine Frameworks

**Warum?**
Maximale Transparenz – was geschrieben wird, ist was im Browser läuft. Ideal für ein Curriculum, das Code-Verständnis lehrt.

## 10. Dateien

```
de/index.html          # Single-Page mit Prompt-Loop UI
css/style.css          # Globale Styles inkl. Loop-Komponenten
js/app.js              # Loop-Logik, Panel-Navigation
data/content.json      # Alle Inhalte strukturiert
```

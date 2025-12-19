# AI Coding Literacy – Design-Spezifikation

## 1. Leitprinzipien

- **Progressive Disclosure**: Komplexität entfaltet sich beim Scrollen
- **Loop-Metapher**: UI spiegelt den iterativen Lernprozess (Überblick → Theorie → Übungen → Ressourcen)
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
| Panel-Phase | IBM Plex Mono | 10px, uppercase |
| Navigation Buttons | IBM Plex Mono | 13px |

## 5. Layout

### Sidebar (200px, fixed)
- 6 farbige Balken = 6 Kompetenzbereiche
- Klickbar (scrollt zur ersten Session)
- Scroll-Spy highlightet aktiven Bereich
- Labels: CT, RE, CE, PE, CL, RV

### Content (max. 780px)
- Zentriert rechts neben Sidebar
- Sessions als endloser Scroll
- 3px schwarze Linie + 3rem Margin zwischen Kapiteln

### Responsive (<1000px)
- Sidebar verschwindet
- Content zentriert, volle Breite

### Mobile (<600px)
- Vertikales Fallback für Loop-Panels
- Kein horizontaler Scroll
- "Weiter zur Theorie" Button versteckt

## 6. Loop-UI

### Konzept

Jedes Kapitel ist ein horizontaler Loop mit 4 Phasen:

```
●───○───○───○
Überblick → Theorie → Übungen → Ressourcen
```

### Loop-Progress-Indikator
- Zentriert über dem Loop-Container
- Punkte (●/○) mit Verbindungslinien
- Aktiver Schritt: gefüllt + bold
- Completed: gefüllt, muted
- Deutsche Labels: Überblick, Theorie, Übungen, Ressourcen

### Loop-Container
- Horizontaler Scroll mit CSS scroll-snap
- Volle Breite pro Panel (100%)
- Subtiler Schatten für Tiefe auf nicht-Input-Panels

### Loop-Panels

| Panel | Inhalt | Phase-Label |
|-------|--------|-------------|
| Überblick | Kapitelname, Intro-Text, "Weiter zur Theorie" Button | Überblick |
| Theorie | Kernpunkte, Konzepte, Navigation | Theorie |
| Übungen | Exercises mit Code-Blöcken, Navigation | Übungen |
| Ressourcen | Links, Zitat, "← Zurück", "✓ Loop complete" | Ressourcen |

### Panel-Navigation

Jedes Panel hat eine `.panel-nav` Leiste am unteren Rand:

```
┌─────────────────────────────────────────┐
│ [← Zurück]              [Weiter → ]     │
└─────────────────────────────────────────┘
```

- Überblick: nur "Weiter zur Theorie"
- Theorie/Übungen: "← Zurück" + "Weiter →"
- Ressourcen: "← Zurück zu Übungen" + "✓ Loop complete"

### Interaktion
- **Button-Navigation**: Primäre Methode zum Navigieren
- **Keyboard**: ← → zwischen Panels (für Power-User)
- **Horizontal Scroll**: Funktioniert weiterhin (Touch/Trackpad)
- **State**: Panel-Position pro Kapitel in sessionStorage (v2)

## 7. Komponenten

### Kapitel-Abschnitt (Loop-basiert)
```
●───○───○───○ Überblick → Theorie → Übungen → Ressourcen
┌──────────────────────────────────────────────────────┐
│ [Überblick]                                          │
│                                                      │
│ CT                                                   │
│ ■ Computational Thinking                             │
│                                                      │
│ Probleme strukturieren und zerlegen                  │
│                                                      │
│ Einführungstext aus theory.description...            │
│                                                      │
│ [Weiter zur Theorie →]                               │
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

### Loop-Navigation
- **Buttons**: "← Zurück" und "Weiter →" in jedem Panel
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
- Funktioniert nur für aktives Kapitel (im Viewport)

## 9. Technik

**Stack**
- Vanilla HTML/CSS/JavaScript
- JSON für Inhalte (`/data/content.json`)
- Intersection Observer für Lazy Loading und Scroll-Spy
- sessionStorage für Panel-Position (Key: `ai-coding-literacy-loop-v2`)
- Keine Build-Tools, keine Frameworks

**Warum?**
Maximale Transparenz – was geschrieben wird, ist was im Browser läuft. Ideal für ein Curriculum, das Code-Verständnis lehrt.

## 10. Dateien

```
de/index.html          # Single-Page mit Loop-UI
css/style.css          # Globale Styles inkl. Loop-Komponenten
js/app.js              # Loop-Logik, Panel-Navigation
data/content.json      # Alle Inhalte strukturiert
```

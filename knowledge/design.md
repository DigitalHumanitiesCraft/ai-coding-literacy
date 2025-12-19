# AI Coding Literacy – Design-Spezifikation

## 1. Leitprinzipien

- **Progressive Disclosure**: Komplexität entfaltet sich beim Scrollen
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

**Nein**
- Keine Schatten, Gradients, Transparenzen
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

## 6. Komponenten

### Session-Abschnitt
```
Session N · [Kompetenz-Farbe]
──────────────────────────────
Titel
Summary

Lernziele
→ Ziel 1
→ Ziel 2

Konzepte
Begriff – Definition

Übung
[Code-Block]
Aufgabe: ...

Reflexion
• Frage 1
• Frage 2
```

### Code-Block
```
┌─ dateiname.py ─────────────── [kopieren] ─┐
│ from PIL import Image                      │
│ import os                                  │
└────────────────────────────────────────────┘
```

## 7. Interaktion

### Endless Scroll
- Intersection Observer lädt 3 Sessions nach
- Fade-In Animation beim Erscheinen
- Loading-Indikator am Ende

### Sidebar-Navigation
- Klick auf Balken → scrollt zu erster Session mit dieser Kompetenz
- Scroll-Spy → aktiver Kompetenzbereich wird hervorgehoben (translateX + shadow)

### Code kopieren
- Button in Code-Header
- Feedback: "kopiert!" für 2 Sekunden

## 8. Technik

**Stack**
- Vanilla HTML/CSS/JavaScript
- JSON für Inhalte (`/data/content.json`)
- Intersection Observer für Lazy Loading
- Keine Build-Tools, keine Frameworks

**Warum?**
Maximale Transparenz – was geschrieben wird, ist was im Browser läuft. Ideal für ein Curriculum, das Code-Verständnis lehrt.

## 9. Dateien

```
de/index.html          # Single-Page mit allem JavaScript inline
css/style.css          # Globale Basis-Styles
data/content.json      # Alle Inhalte strukturiert
```

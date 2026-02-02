# Design-Audit Anleitung fuer AI Coding Literacy

## Auftrag

Erstelle einen visuellen Design-Audit der AI Coding Literacy Webseite.
Oeffne jede Seite im Browser, mache Screenshots und dokumentiere Beobachtungen.

## Technische Vorbereitung

1. Starte einen lokalen Server im /docs Verzeichnis:
   ```bash
   cd docs && python -m http.server 8000
   ```
2. Oeffne http://localhost:8000/de/ im Browser
3. Verwende eine Fensterbreite von 1440px (Desktop) und 375px (Mobile)

## Zu testende Seiten

### Hauptseiten
1. /de/index.html - Curriculum Uebersicht
2. /de/workshop.html - Workshop Programmieren 2.0
3. /de/informed-vibe-coding.html - Konzeptseite
4. /de/ueber.html - Ueber/Definition
5. /de/kompetenzmodell.html - Kompetenzmodell
6. /de/setup.html - Setup-Anleitung
7. /de/referenz.html - Referenz

### Kompetenz-Detailseiten
8. /de/ct.html - Computational Thinking
9. /de/re.html - Requirement Engineering
10. /de/ce.html - Context Engineering
11. /de/pe.html - Prompt Engineering
12. /de/cl.html - Code Literacy
13. /de/rv.html - Review

## Pruefkriterien pro Seite

Fuer jede Seite dokumentiere:

### 1. Erster Eindruck (3 Sekunden)
- Ist die Hierarchie klar erkennbar?
- Weiss man sofort, wo man ist?
- Wirkt die Seite professionell?

### 2. Navigation
- Ist der aktive Menuepunkt erkennbar?
- Funktionieren alle Links?
- Ist die Sidebar lesbar (besonders die kleinen Labels)?

### 3. Typografie
- Sind Ueberschriften gut lesbar?
- Ist der Fliesstext angenehm zu lesen?
- Gibt es Schriftgroessen-Probleme?

### 4. Farben und Kontraste
- Sind alle Texte gut lesbar?
- Funktionieren die Kompetenzfarben visuell?
- Gibt es Kontrast-Probleme?

### 5. Spacing und Alignment
- Sind Abstaende konsistent?
- Gibt es ungewollte Luecken oder Ueberlappungen?
- Ist alles sauber ausgerichtet?

### 6. Interaktive Elemente
- Hover-Effekte auf Links/Buttons
- Sind klickbare Elemente als solche erkennbar?
- Funktionieren Animationen fluessig?

### 7. Responsive (nur Desktop vs. Mobile)
- Bricht das Layout auf Mobile?
- Ist die Navigation auf Mobile nutzbar?
- Sind Touch-Targets gross genug?

### 8. Konsistenz
- Passt das Design zu den anderen Seiten?
- Gibt es Stilbrueche?

## Berichtsformat

Erstelle den Bericht als Markdown-Datei mit folgender Struktur:

```markdown
# Design-Audit Report: AI Coding Literacy

Datum: [DATUM]
Getestet auf: [Browser, Betriebssystem]
Viewport: Desktop 1440px, Mobile 375px

## Zusammenfassung

### Gesamteindruck
[2-3 Saetze zum Gesamteindruck]

### Top 5 Probleme (nach Prioritaet)
1. [Problem] - [betroffene Seiten]
2. ...

### Top 3 Staerken
1. [Staerke]
2. ...

---

## Detailbericht pro Seite

### 1. Curriculum Uebersicht (/de/index.html)

**Screenshot:** [Screenshot einfuegen oder Pfad angeben]

**Viewport Desktop:**
- Erster Eindruck: [gut/mittel/schlecht] - [Begruendung]
- Navigation: [Beobachtungen]
- Typografie: [Beobachtungen]
- Farben: [Beobachtungen]
- Spacing: [Beobachtungen]
- Interaktionen: [Beobachtungen]

**Viewport Mobile:**
- [Beobachtungen]

**Konkrete Probleme:**
- [ ] [Problem 1]
- [ ] [Problem 2]

**Empfehlungen:**
- [Empfehlung 1]

---

### 2. Workshop (/de/workshop.html)
[... gleiches Format ...]

---

## Uebergreifende Beobachtungen

### Design-Konsistenz
[Vergleich zwischen Curriculum und Workshop Seiten]

### Navigation
[Allgemeine Beobachtungen zur Navigation]

### Mobile Experience
[Allgemeine Beobachtungen zu Mobile]

---

## Anhang: Screenshot-Galerie

[Alle Screenshots mit Beschriftung]
```

## Wichtige Hinweise

- Mache Screenshots im PNG-Format
- Benenne Screenshots eindeutig: `[seitenname]-[viewport].png`
  Beispiel: `workshop-desktop.png`, `workshop-mobile.png`
- Speichere Screenshots in: `/knowledge/design-audit/screenshots/`
- Speichere den Bericht als: `/knowledge/design-audit/report.md`
- Sei konkret und spezifisch - keine vagen Aussagen
- Notiere Zeilennummern oder CSS-Selektoren wenn moeglich

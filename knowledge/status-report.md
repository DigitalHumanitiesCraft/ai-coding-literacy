# Status-Report: AI Coding Literacy

**Datum:** 2025-12-21
**Phase:** Content narrativ überarbeitet, research blog Stil

---

## Zusammenfassung

Die AI Coding Literacy Lernplattform hat ein **vertikales Scroll-Layout** mit **ausklappbaren Sub-Links** in der Sidebar. Zusätzlich wurden **6 Detailseiten** (ct.html bis rv.html) mit vertiefenden Inhalten erstellt. **Setup-Seiten** (DE/EN) mit kompetenz-farbigen Icons und **erweiterte Sidebar-Labels** mit vollständigen Kompetenznamen. Neu: **Content im research blog Stil** – wissenschaftliche Hintergründe narrativ statt als Faktenlisten.

---

## Abgeschlossene Arbeiten

### 1. UI-Umstellung: Loop-UI → Vertikales Layout (100%)

| Komponente | Status | Datei |
|------------|--------|-------|
| Vertikale Sektionen (Theorie, Übungen, Ressourcen) | ✅ | js/app.js |
| Sidebar mit ausklappbaren Sub-Links | ✅ | js/app.js |
| Dual Scroll-Spy (Kapitel + Sektion) | ✅ | js/app.js |
| CSS für vertikales Layout | ✅ | css/style.css |
| Entfernung alter Loop-UI-Styles | ✅ | css/style.css |

### 2. Content-Update: Alle Kapitel (100%)

| Kapitel | Status | Neue Konzepte |
|---------|--------|---------------|
| CT | ✅ | Fertig (vorherige Session) |
| RE | ✅ | User Story, INVEST-Kriterien, Kernfragen |
| CE | ✅ | RAG, Lost in Middle, Kontextstruktur |
| PE | ✅ | Zero-Shot, Few-Shot, Chain-of-Thought, APE |
| CL | ✅ | Skill-Hierarchie, Prozedurales/Funktionales Modell, Delocalized Plans |
| RV | ✅ | Halluzinationskategorien, Bug-Patterns, Metamorphic Testing |

### 3. Detailseiten (100%)

| Seite | Status | Inhalt |
|-------|--------|--------|
| ct.html | ✅ | Computational Thinking - Vertiefung mit erweiterten Übungen |
| re.html | ✅ | Requirement Engineering - User Stories, INVEST |
| ce.html | ✅ | Context Engineering - RAG, Lost in Middle |
| pe.html | ✅ | Prompt Engineering - Zero-Shot, Few-Shot, CoT |
| cl.html | ✅ | Code Literacy - Skill-Hierarchie, Lesestrategien |
| rv.html | ✅ | Review - Halluzinationskategorien, Bug-Patterns |

### 4. Scroll-Spy Refactoring (100%)

| Änderung | Status |
|----------|--------|
| Section Observer als primäre Quelle | ✅ |
| Chapter Observer als Fallback | ✅ |
| Debug-Logging entfernt | ✅ |
| Duplikation reduziert | ✅ |

### 5. Setup-Seiten (100%)

| Seite | Status | Inhalt |
|-------|--------|--------|
| de/setup.html | ✅ | Python, VS Code, LLM, Terminal, pip Anleitungen |
| en/setup.html | ✅ | English version with same structure |

### 6. Sidebar-Erweiterungen (100%)

| Feature | Status |
|---------|--------|
| Kompetenz-farbige Setup-Icons | ✅ |
| Tooltips mit Kompetenzname | ✅ |
| Bar-Labels mit vollständigen Namen | ✅ |
| Persönliche Claude-Empfehlung | ✅ |

### 7. Glossar-System (100%)

| Feature | Status | Datei |
|---------|--------|-------|
| Glossar-Datenstruktur (DE/EN) | ✅ | data/glossar.json, data/glossar-en.json |
| Info-Panel HTML | ✅ | de/index.html, en/index.html |
| CSS Styling (farbcodiert) | ✅ | css/style.css |
| JavaScript Auto-Markup | ✅ | js/glossary.js |
| Hover & Pinning Mechanik | ✅ | js/glossary.js |
| Verwandte Begriffe Links | ✅ | js/glossary.js |

**Features:**
- Automatisches Erkennen und Markieren von Glossar-Begriffen im Text
- Farbcodierung nach Kategorien (llm-basics, coding-approaches, oder Kompetenz-ID)
- Hover → sofortiges Öffnen des Info-Panels
- 1 Sekunde Hover → Panel wird "gepinnt" (bleibt offen, scrollbar, klickbar)
- Verwandte Begriffe sind verlinkt
- Schließen via X-Button oder Klick außerhalb

### 8. Content-Überarbeitung (100%)

| Änderung | Status | Datei |
|----------|--------|-------|
| meta.description mit Vibe Coding-Verweis | ✅ | data/content.json, data/content-en.json |
| longDescription vereinheitlicht (befasst sich mit) | ✅ | data/content.json, data/content-en.json |
| Review longDescription umformuliert | ✅ | data/content.json, data/content-en.json |
| Doppelpunkte durch Gedankenstriche ersetzt | ✅ | js/app.js |

### 9. Content-Überarbeitung (100%)

| Änderung | Status | Datei |
|----------|--------|-------|
| meta.subtitle verkürzt (DE/EN) | ✅ | data/content.json, data/content-en.json |
| meta.description kompakter (DE/EN) | ✅ | data/content.json, data/content-en.json |
| CT Theorie: Wing (2006) narrativ | ✅ | data/content.json, data/content-en.json |
| RE Theorie: 1990er Softwarekrise | ✅ | data/content.json, data/content-en.json |
| CE Theorie: 2024 Wendepunkt, Lost in Middle | ✅ | data/content.json, data/content-en.json |
| PE Theorie: GPT-3 2020, Wei/Zhou/Schulhoff | ✅ | data/content.json, data/content-en.json |
| CL Theorie: Lopez 2008, Soloway/Ehrlich 1984 | ✅ | data/content.json, data/content-en.json |
| RV Theorie: Copilot 2021, Fu/Liu/Tambon/Nguyen | ✅ | data/content.json, data/content-en.json |
| Vibe Coding: Karpathy-Zitat präziser | ✅ | data/glossar.json, data/glossar-en.json |

### 10. Dokumentation aktualisiert

| Datei | Status |
|-------|--------|
| README.md | ✅ |
| status-report.md | ✅ |
| implementation-plan.md | ✅ (Glossar-System, Projektstruktur) |
| design.md | ✅ (Glossar-System dokumentiert) |
| journal.md | ✅ |

---

## Aktuelle UI-Struktur

### Vertikales Scroll-Layout

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

### Sidebar-Verhalten

- Kompetenz-Balken sind klickbar → scrollt zum Kapitel
- Sub-Links klappen bei aktivem Kapitel aus
- Scroll-Spy highlightet:
  - Aktiven Kompetenz-Balken
  - Aktiven Sub-Link (Theorie/Übungen/Ressourcen)

---

## Geplante Erweiterungen

### Detailseiten pro Kompetenz

```
/de/
├── index.html           # Übersicht (aktuell)
├── ct.html              # CT-Detailseite
├── re.html              # RE-Detailseite
├── ce.html              # CE-Detailseite
├── pe.html              # PE-Detailseite
├── cl.html              # CL-Detailseite
└── rv.html              # RV-Detailseite
```

**Konzept:**
- Übersicht zeigt alle Kompetenzen kompakt
- Detailseiten bieten vertiefende Inhalte, mehr Übungen, interaktive Elemente
- Link von Übersicht zu Detailseite: "Mehr lernen →"

---

## Technische Änderungen

### JavaScript (app.js)

**Entfernt:**
- `createInputPanel()`, `createProcessPanel()`, `createExecutePanel()`, `createOutputPanel()`
- `updateLoopProgress()`
- Horizontale Scroll-Logik
- sessionStorage für Loop-Position

**Neu:**
- `createChapterElement()` – erstellt vertikale Sektionen
- `scrollToSection()` – scrollt zu Theorie/Übungen/Ressourcen
- Sidebar-Wrapper mit Sub-Links
- Dual IntersectionObserver für Scroll-Spy

### CSS (style.css)

**Entfernt:**
- `.loop-container`, `.loop-panel`, `.panel-phase`
- `.loop-progress`, `.loop-step`, `.loop-dot`, `.loop-line`
- Panel-spezifische Styles (`.panel-input`, `.panel-process`, etc.)

**Neu:**
- `.competency-bar-wrapper` – Wrapper für Bar + Sub-Links
- `.sidebar-sublinks` – Container für Sub-Links (animiert)
- `.sidebar-sublink` – Einzelne Sub-Links mit active-State
- `.chapter-header-block` – Kapitel-Header mit Badge
- `.content-section` – Theorie/Übungen/Ressourcen-Sektionen
- `.section-title`, `.section-marker` – Sektions-Überschriften
- `.keypoints`, `.keypoints-list` – Kernpunkte
- `.concepts`, `.concepts-list` – Konzept-Definitionen
- `.exercise-block` – Übungs-Container
- `.chapter-quote` – Zitat am Ende

---

## Nächste Schritte

1. **GitHub Pages** – Deployment testen
2. **Mobile-Test** – Responsive Layout prüfen
3. **Cross-Browser-Test** – Firefox, Safari, Edge

---

## Überprüfungskriterien

### Vertikales Layout testen:

- [x] Alle Kapitel scrollen vertikal
- [x] Theorie/Übungen/Ressourcen-Sektionen sichtbar
- [x] Sidebar-Balken scrollen zum Kapitel
- [x] Sub-Links klappen bei aktivem Kapitel aus
- [x] Sub-Links scrollen zur Sektion
- [x] Scroll-Spy highlightet korrekten Balken
- [x] Scroll-Spy highlightet korrekten Sub-Link
- [ ] Mobile (<600px): Sidebar versteckt
- [ ] Mobile: Vertikales Layout ohne Probleme

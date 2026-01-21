# Workshop: Programmieren 2.0 – LLMs für Forschungsdaten im Museum

## Meta

| Feld | Inhalt |
|------|--------|
| Workshop | 12.02.2026, 12:00–17:00 Uhr, NHM Wien |
| Vorbereitungstreffen | 26.01.2026, Museumsbund |
| Zielgruppe | Museumsmitarbeiter:innen ohne Programmierkenntnisse |
| Teilnehmerzahl | 19 Personen |
| Repository | https://github.com/DigitalHumanitiesCraft/ai-coding-literacy |
| Slides Vorbereitungstreffen | https://docs.google.com/presentation/d/1pP-4I7VXCbQSOfVaeYPpOBQE5ZeY7590NuDBK2gGTow/ |
| Workshopleitung | Dr. Christopher Pollin |

---

## Einordnung in das AI Coding Literacy Curriculum

Dieser Workshop ist eine konkrete Instanziierung des [[AI Coding Literacy]] Curriculums für den Museumskontext. Er adressiert alle sechs Kompetenzbereiche des Modells:

| Kompetenz | Gewichtung | Beschreibung |
|-----------|------------|--------------|
| Computational Thinking | Grundlage | Probleme zerlegen, iterativ lösen |
| Requirement Engineering | Schwerpunkt | Präzise formulieren, was gebraucht wird |
| Context Engineering | Schwerpunkt | Dem LLM die richtigen Informationen geben |
| Prompt Engineering | wird vermittelt | Kommunikation mit dem LLM operationalisieren |
| Code Literacy | wird angebahnt | Generierten Code lesen und einordnen |
| Review | wird vermittelt | Ergebnisse systematisch prüfen |

---

## Leitgedanke

**Hauptlernziel.** Museumsmitarbeiter:innen verstehen, was Python und Webtechnologien grundlegend sind und leisten. Sie können mit LLM-Unterstützung einfache Skripte und Webseiten für Forschungsdaten erstellen. Sie können die Claude API programmatisch nutzen, um Daten zu verarbeiten. Sie kennen die Limitationen, bei denen professionelle Unterstützung notwendig wird.

**Kernfrage.** Wie formuliere ich Anforderungen so, dass ein LLM brauchbaren Code generiert – und wie erkenne ich, ob der Code funktioniert?

**Positionierung.** Der Workshop vermittelt *Informed Vibe Coding* – nicht blindes Ausprobieren, sondern die Fähigkeit, Ergebnisse einzuordnen, Fehler zu erkennen und gezielt nachzubessern.

---

## Leitmetapher: Nautilus

Der Nautilus baut seine Schale Kammer für Kammer. Jede neue Kammer folgt aus den vorherigen. So arbeiten wir auch mit LLMs: Probleme in Teile zerlegen, schrittweise lösen, Ergebnisse verbinden.

Referenz: [Der Nautilus: Das uralte Wesen, welches die Evolution überlistet hat – scobel](https://youtu.be/W5IDZGsmkZM)

---

## Verhältnis Vorbereitungstreffen und Workshop

### Vorbereitungstreffen (26.01.2026)

Vermittelt die technische Basis:

- Installation: VS Code, Python, Live Server Extension
- Terminal-Grundlagen: `cd`, `ls`, `python dateiname.py`
- Python-Workflow: Datei erstellen → Code einfügen → speichern → ausführen
- Web-Workflow: HTML/CSS/JS → Live Server → Browser
- "Lernchance"-Übung: Python-Skript `erstelle_webseite.py` ausführen

**Empfehlung für Teilnehmende:** Claude Pro Subscription (20$/Monat) für unbegrenzten Zugang während des Workshops.

### Workshop (12.02.2026)

Baut auf dem Vorbereitungstreffen auf. Zwischen beiden Terminen gibt es keine organisierte Kommunikation. Block 1 des Workshops muss daher Raum für ungelöste Probleme aus dem Vorbereitungstreffen bieten.

---

## Datensatz: Hans Gross Kriminalmuseum Graz

### Herkunft

Der Datensatz stammt aus dem [Hans Gross Kriminalmuseum](https://kriminalmuseum.uni-graz.at/) der Universität Graz. Die Nutzung für den Workshop ist genehmigt.

### Gesamtdatensatz (`kriminalmuseum_komplett.csv`)

- 3892 Einträge total
- 1657 Karteikarten (meist minimale Metadaten)
- 2235 Objekte (reichhaltige Beschreibungen)

**Spalten nach Bereinigung:**
`container`, `pid`, `model`, `title`, `identifier`, `createdDate`, `description`, `fulltext`

### Workshop-Auszug (`workshop_objekte.csv` / `workshop_objekte.json`)

25 kuratierte Objekte für die Übungen:

- Jahreszahlen zwischen 1895 und 1937
- 14 verschiedene Objekttypen
- Reichhaltige Beschreibungen

**Vertretene Typen:** Waffen, Forensische Medizin, Falsifikate, Diebswerkzeuge, Wildererobjekte, Fußspuren, Verstellungskünste, Requisiten von Falschspielern, Gefängniserzeugnisse, Vergleichsobjekte, Varia, Instrumente (Körperverletzungen), Unechte Kunstgegenstände, Projektile.

### Didaktisches Potenzial

Das `description`-Feld ist semi-strukturiert:

```
Type: Waffen | Type: Revolver | Description: Revolver, Kopie einer Smith & Wesson 
"Double Action", Kaliber .32, Jahr 1895 | Material: Stahl | Dimensions: height: 3,2 cm, 
width: 17,1 cm | Condition: fester haftende Verschmutzung | Museum ID: KM-O.1-1
```

**Übungsszenarien:**
- Parsing mit LLM: Strukturierte Daten extrahieren
- Regex-Extraktion: Jahreszahlen mit Muster `Jahr\s*(\d{4})` finden
- Validierung: Extrahierte Daten mit Original vergleichen
- API-Batch-Verarbeitung: Viele Objekte automatisiert analysieren

### Kontextwechsel

Das Vorbereitungstreffen verwendet NHM-Beispiele (Bergkristall, Ammonit, Alpensteinbock). Der Workshop wechselt zu Kriminalmuseum-Daten. Zu Beginn des Workshops thematisieren: "Wir arbeiten mit echten Daten aus dem Hans Gross Kriminalmuseum Graz. Diese zeigen typische Herausforderungen, die auch in anderen Sammlungen auftreten."

---

## LLM-Konfiguration

### Chat-Interface

- **Demonstration:** Claude (claude.ai)
- **Teilnehmende:** LLM ihrer Wahl (Claude, ChatGPT, Gemini, etc.)
- **Empfehlung:** Claude Pro Subscription (20$/Monat), im Vorbereitungstreffen kommuniziert

### API (Block 5)

| Parameter | Wert |
|-----------|------|
| Modell | Claude Haiku 4.5 |
| Modell-String | `claude-haiku-4-5-20251001` |
| Input-Kosten | ~0.25$ / Million Tokens |
| Output-Kosten | ~1.25$ / Million Tokens |
| Budget | 75$ Credits (ausreichend für 19 Teilnehmende) |

### API-Key-Handling

1. Key wird im Workshop mündlich geteilt
2. Teilnehmende tragen ihn in vorbereiteten Code ein (Zeile mit `API_KEY = "..."`)
3. Nach Block 5 wird der Key gelöscht

**Lerneffekt:** Warum Keys nie in Code committen, warum Keys nach Workshops rotiert werden.

---

## Blockstruktur mit Zeitschätzung

| Block | Thema | Dauer (ca.) |
|-------|-------|-------------|
| 1 | Ankommen, Klärung, Wiederholung | 30 min |
| 2 | Context Engineering | 30 min |
| 3 | Python mit LLM-Unterstützung | 45 min |
| – | Pause | 15 min |
| 4 | Webentwicklung mit LLM-Unterstützung | 45 min |
| 5 | LLM-API programmatisch nutzen | 45 min |
| 6 | Reflexion – Limitationen | 20 min |
| 7 | Eigene Aufgabe | 40 min |
| 8 | Dokumentation und Abschluss | 20 min |
| | **Gesamt** | **~290 min (4:50h)** |

Die Zeiten sind Richtwerte. Puffer ist eingeplant für technische Probleme und Fragen.

---

### Block 1: Ankommen, Klärung, Wiederholung

**Lernziel.** Funktionierende Umgebung bei allen. Probleme aus der "Lernchance" gelöst. Kernkonzepte präsent.

**Inhalt:**
- Begrüßung und Vorstellung des Tagesablaufs
- Technik-Check: VS Code, Python, Live Server
- Sammlung und Lösung von Problemen aus dem Vorbereitungstreffen
- Hinweis auf den Kontextwechsel (NHM → Kriminalmuseum)

**Hands-on.** `python --version` ausführen, Live Server mit beliebiger HTML-Datei starten.

**Stolpersteine:** Python nicht im PATH, Live Server nicht installiert, "Lernchance" nicht durchgeführt.

---

### Block 2: Context Engineering

**Lernziel.** Verstehen, dass Output-Qualität von Kontext-Qualität abhängt. Drei Elemente guten Kontexts benennen können.

**Inhalt:**

*Was ist ein Context Window?*
Der "Arbeitsspeicher" eines LLM – alles, was das Modell während einer Konversation "sieht". Begrenzte Größe. Was nicht drin ist, existiert nicht.

*Drei Elemente guten Kontexts:*
1. **Datenbeispiel** – Zeigen, nicht beschreiben
2. **Erwartetes Ergebnis** – Konkret, nicht vage
3. **Constraints** – Einschränkungen benennen

*Demonstration:* Vergleich vager vs. präziser Prompt mit denselben Daten.

**Hands-on.** Teilnehmende formulieren eine vollständige Anforderung für die Kriminalmuseum-CSV (noch kein Code generieren).

**Stolpersteine:** Zu vage ("mach was Schönes"), Datenbeispiel vergessen, Ergebnis nicht konkret.

---

### Block 3: Python mit LLM-Unterstützung

**Lernziel.** Python-Skript mit LLM erstellen, das Kriminalmuseum-Daten verarbeitet. Fehlermeldungen an LLM übergeben können.

**Inhalt:**
- Workflow-Wiederholung: `.py` erstellen → speichern → `python datei.py`
- Iteratives Arbeiten: generieren → ausführen → Fehler → an LLM geben → korrigieren
- Code-Strukturen erkennen: Imports, Variablen, Schleifen, Bedingungen

**Hands-on.** Skript erstellen, das:
- Anzahl der Objekte ausgibt
- Alle Typen aus dem description-Feld extrahiert
- Das älteste und jüngste Objekt findet (Jahr aus Beschreibung)

**Stolpersteine:** 
- CSV nicht im richtigen Ordner
- Encoding-Probleme bei Umlauten
- Parsing-Varianten im description-Feld
- LLM verwendet nicht installierte Bibliothek

---

### Block 4: Webentwicklung mit LLM-Unterstützung

**Lernziel.** Webseite erstellen, die Kriminalmuseum-JSON lädt und interaktiv anzeigt.

**Inhalt:**
- HTML/CSS/JS-Zusammenspiel (Wiederholung aus Vorbereitungstreffen)
- Browser-Konsole (F12) als Fehlerquelle
- Live Server für lokale Daten (CORS)

**Hands-on.** Webseite mit Karten-Darstellung:
- Jede Karte zeigt: Titel, Typ, Jahr, Material
- Suchfeld filtert die Karten

**Stolpersteine:**
- JSON-Pfad falsch
- CORS-Fehler (Live Server nicht aktiv)
- JavaScript-Fehler in Konsole übersehen

---

### Block 5: LLM-API programmatisch nutzen

**Lernziel.** Verstehen, wie man LLMs über API anspricht. Vorbereitete Skripte ausführen und Ergebnisse interpretieren können.

**Inhalt:**

*Warum API statt Chat?*
Automatisierung. Im Chat: ein Objekt nach dem anderen. Mit API: hunderte Objekte in einer Schleife.

*Wie funktioniert ein API-Call?*
Python-Skript → HTTP-Request an Anthropic → Antwort → Weiterverarbeitung

*Kosten und Rate Limiting*
Jeder Call kostet (bei Haiku minimal). Zu viele Requests = temporäre Sperre.

*API-Key-Sicherheit*
Keys nie committen. Nach Workshop rotieren.

**Hands-on:**

*Aufgabe 1 (Einfach):* `api_einfach.py`
- Einzelner Call: Jahr aus Beschreibung extrahieren
- Beobachten: Input, Output, Token-Verbrauch, Kosten

*Aufgabe 2 (Erweitert):* `api_beispiel_extraktion.py`
- 5 Objekte verarbeiten
- Strukturierte CSV als Ergebnis
- Vergleich: extrahierte Daten vs. Originalbeschreibung

**Nach der Übung:** API-Key löschen. Kurze Diskussion zu Key-Management.

**Stolpersteine:**
- Key falsch eingetragen (Leerzeichen, Anführungszeichen)
- `anthropic` nicht installiert → `pip install anthropic`
- Rate Limiting bei zu schnellen Requests

---

### Block 6: Reflexion – Limitationen

**Lernziel.** Typische Fehlerklassen von LLM-generiertem Code benennen. Wissen, wann professionelle Unterstützung nötig ist.

**Inhalt:**

*Typische Fehlerklassen:*
1. **Halluzinierte Funktionen** – LLM erfindet nicht existierende APIs
2. **Logikfehler bei Randfällen** – funktioniert meist, aber nicht immer
3. **Sicherheitsprobleme** – fehlende Validierung, unsichere Pfade
4. **Überkomplexität** – Framework statt einfacher Lösung

*Wann Profis fragen:*
- Sicherheitsanforderungen (sensible Daten, öffentliche Anwendung)
- Skalierung (große Datenmengen, viele Nutzer)
- Systemintegration (Datenbanken, APIs, IT-Infrastruktur)
- Wartbarkeit (längerfristige Pflege)
- Rechtliche Anforderungen (Barrierefreiheit, Datenschutz)

**Hands-on.** Reflexion der eigenen Ergebnisse aus Block 3, 4, 5:
- Was hat nicht auf Anhieb funktioniert?
- Welche Art von Fehler war es?
- Wie wurde er behoben?

---

### Block 7: Eigene Aufgabe

**Lernziel.** Gelerntes selbstständig auf eine Aufgabe anwenden.

**Option A: Eigene Daten**
Teilnehmende arbeiten mit mitgebrachten Daten. Workshopleitung unterstützt bei der Anforderungsformulierung.

**Option B: Vorgegebene Aufgaben**
- Erweiterte Objektsuche (Webseite mit mehreren Filterkriterien)
- Datenbereinigung (Python-Skript: description → separate Spalten)
- Statistik-Dashboard (Visualisierung: Verteilung nach Typ und Jahr)

---

### Block 8: Dokumentation und Abschluss

**Lernziel.** Ergebnisse dokumentiert. Wissen, wie es weitergeht.

**Inhalt:**
- Dokumentationsvorlage ausfüllen
- Ausblick: Git/GitHub, Jupyter Notebooks, Claude Code
- Q&A-Termin im Nachgang ankündigen
- Repository-Link teilen

---

## Repository-Struktur

Integration in `ai-coding-literacy`:

```
ai-coding-literacy/
├── data/
│   └── kriminalmuseum/
│       ├── workshop_objekte.csv        # 25 kuratierte Objekte
│       ├── workshop_objekte.json       # Für Web-Übung (Block 4)
│       └── kriminalmuseum_komplett.csv # Vollständiger Datensatz
├── python/
│   └── workshops/
│       └── nhm-2026/
│           ├── api_einfach.py          # Block 5, Aufgabe 1
│           ├── api_beispiel_extraktion.py  # Block 5, Aufgabe 2
│           └── beispiel_csv_analyse.py # Musterlösung Block 3
├── web/
│   └── workshops/
│       └── nhm-2026/
│           ├── index.html              # Musterlösung Block 4
│           └── style.css
├── knowledge/
│   └── workshops/
│       └── nhm-2026/
│           └── wissensdokument.md      # Dieses Dokument
└── de/
    └── workshops/
        └── nhm-2026.html               # Workshop-Landingpage (optional)
```

**Hinweis zu Dateipfaden:** Die Python-Skripte erwarten die Datendateien im selben Ordner oder müssen den relativen Pfad `../../data/kriminalmuseum/` verwenden. Dies sollte in den Skripten angepasst oder im Workshop erklärt werden.

---

## Materialien-Status

### Fertig

- [x] Wissensdokument (dieses Dokument)
- [x] `workshop_objekte.csv` – 25 kuratierte Objekte
- [x] `workshop_objekte.json` – Für Web-Übung
- [x] `kriminalmuseum_komplett.csv` – Bereinigter Gesamtdatensatz
- [x] `api_einfach.py` – Einzelner API-Call
- [x] `api_beispiel_extraktion.py` – Batch-Extraktion
- [x] Slides Vorbereitungstreffen

### Zu erstellen (mit Claude Code)

- [ ] Repository-Struktur anlegen
- [ ] Dateipfade in Python-Skripten anpassen
- [ ] Musterlösung Block 3 (`beispiel_csv_analyse.py`)
- [ ] Musterlösung Block 4 (`index.html`, `style.css`)
- [ ] Cheatsheet: Python-Fehlermeldungen
- [ ] Cheatsheet: API-Nutzung
- [ ] Prompt-Vorlage mit Beispielen
- [ ] Workshop-Landingpage für Repository
- [ ] README-Ergänzung für Workshop-Bereich

---

## Dokumentationsvorlage für Teilnehmende

```markdown
# Workshop-Dokumentation: Programmieren 2.0

**Name:**
**Datum:** 12.02.2026

## Was habe ich erstellt?

(Kurze Beschreibung der Skripte/Webseiten)

## Was hat gut funktioniert?

(Erfolgreiche Prompts/Anforderungen)

## Was hat nicht funktioniert?

(Probleme und Lösungen)

## Wichtigste Erkenntnis

(Eine Sache, die ich mitnehme)

## Nächster Schritt

(Was möchte ich als nächstes ausprobieren?)
```

---

## Glossar

| Begriff | Erklärung |
|---------|-----------|
| API | Application Programming Interface – Schnittstelle zur programmatischen Nutzung eines Dienstes |
| API-Key | Geheimer Schlüssel zur Authentifizierung bei einer API |
| CORS | Cross-Origin Resource Sharing – Browser-Sicherheitsmechanismus |
| CSV | Comma-Separated Values – Tabellenformat |
| CSS | Cascading Style Sheets – Sprache für visuelles Design von Webseiten |
| HTML | HyperText Markup Language – Sprache für Struktur von Webseiten |
| JavaScript | Programmiersprache für Interaktivität in Webseiten |
| JSON | JavaScript Object Notation – Datenformat |
| Live Server | VS Code Extension für lokalen Webserver |
| LLM | Large Language Model – KI-Modell wie Claude oder ChatGPT |
| PATH | Systemvariable, die angibt, wo Programme zu finden sind |
| Terminal | Textbasierte Eingabezeile für Befehle |
| Token | Texteinheit, die LLMs verarbeiten (ca. 0.75 Wörter) |

---

## Ressourcen

### Workshop-Materialien

- Repository: https://github.com/DigitalHumanitiesCraft/ai-coding-literacy
- Slides Vorbereitungstreffen: [Google Slides](https://docs.google.com/presentation/d/1pP-4I7VXCbQSOfVaeYPpOBQE5ZeY7590NuDBK2gGTow/)

### Konzeptionelle Grundlagen

- Karpathy, A. (2025): [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/) – Ursprung des Begriffs "Vibe Coding"
- Willison, S. (2025): [Vibe Coding](https://simonwillison.net/2025/Mar/19/vibe-coding) – Diskussion und Einordnung
- Wing, J. M. (2006): [Computational Thinking](https://dl.acm.org/doi/10.1145/1118178.1118215). Communications of the ACM, 49(3), 33-35.

### Python für Digital Humanities (Vertiefung)

- Mattingly, W.: [Python for Digital Humanities](https://www.youtube.com/playlist?list=PL2VXyKi-KpYuTAZz__9KVl1jQz74bDG7i) – YouTube-Playlist, 27 Videos
- Mattingly, W.: [Python Textbook](https://python-textbook.pythonhumanities.com/intro.html) – Begleitendes Online-Textbook
- Digital History Berlin: [Python für Historiker:innen](https://digital-history-berlin.github.io/Python-fuer-Historiker-innen/home.html) – Deutschsprachig, Version 1.0 (2022)

### Tools

- [Visual Studio Code](https://code.visualstudio.com) – Code-Editor
- [Claude](https://claude.ai) – LLM von Anthropic
- [Anthropic API Dokumentation](https://docs.anthropic.com) – Offizielle Dokumentation

### Weiterführend (Ausblick)

- [GitHub Desktop](https://desktop.github.com) – Git-Client mit grafischer Oberfläche
- [GitHub Desktop Quick Intro](https://www.youtube.com/watch?v=77W2JSL7-r8) – Video-Tutorial
- [Git and GitHub Tutorial for Beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) – HubSpot
- [Google Colab](https://colab.research.google.com) – Jupyter Notebooks im Browser
- [Obsidian](https://obsidian.md) – Wissensorganisation mit Markdown
- [Docling](https://www.docling.ai) – PDF zu Markdown Konvertierung

---

## Nächste Schritte mit Claude Code

1. Repository klonen: `git clone https://github.com/DigitalHumanitiesCraft/ai-coding-literacy.git`
2. Ordnerstruktur für Workshop anlegen (siehe Repository-Struktur oben)
3. Datendateien einfügen (`data/kriminalmuseum/`)
4. Python-Skripte einfügen und Pfade anpassen (`python/workshops/nhm-2026/`)
5. Musterlösungen für Block 3 und 4 entwickeln
6. Cheatsheets erstellen
7. README.md um Workshop-Sektion ergänzen
8. Optional: Workshop-Landingpage erstellen

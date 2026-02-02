# Workshopausarbeitung: Programmieren 2.0 - LLMs fuer Forschungsdaten im Museum

## Meta

| Feld | Inhalt |
|---|---|
| Workshop | 12.02.2026, 12:00-17:00 Uhr, NHM Wien |
| Vorbereitungstreffen | 26.01.2026, 12:30 Uhr, online (abgeschlossen) |
| Q&A Nachgang | Termin offen, online, 60 Min |
| Zielgruppe | Museumsmitarbeiter:innen ohne Programmierkenntnisse |
| Teilnehmerzahl | 20 Personen |
| Kosten | 144 EUR (inkl. Vorbereitungstreffen und Q&A) |
| Veranstalter | Naturhistorisches Museum Wien, Museumsbund Oesterreich |
| Ankuendigung | https://www.museumsbund.at/museumspraxis/programmieren-2-0-llms-fuer-forschungsdaten-im-museum |
| Workshopleitung | Dr. Christopher Pollin |

**Materialien**

| Material | Link/Status |
|---|---|
| Repository | https://github.com/DigitalHumanitiesCraft/ai-coding-literacy |
| Google Drive | https://drive.google.com/drive/folders/1m37hhcmlzqmB9evjgVvRK7_Dgu6JCobn |
| Slides Vorbereitung | https://docs.google.com/presentation/d/1gvhQtVVRV7btvqd2b-YIPsRNQJk0umt6C8un3ONnnLY |
| Slides Workshop | https://docs.google.com/presentation/d/1pP-4I7VXCbQSOfVaeYPpOBQE5ZeY7590NuDBK2gGTow |
| Vorbereitungslektuere | https://chpollin.github.io/llmdh |
| Skriptum | noch anzulegen |
| Vorbereitungsvideo | noch zu erstellen, ca. 15-20 Min |

---

## Summary

Der Workshop vermittelt grundlegende Kompetenzen zur Nutzung von Large Language Models fuer programmierbasierte Aufgaben im musealen Kontext. Die Teilnehmenden lernen, Python-Code und Webentwicklung mit HTML, CSS und JavaScript in Visual Studio Code auszufuehren. Der methodische Schwerpunkt liegt auf *Context Engineering* fuer die systematische Codegenerierung mit LLMs. Anforderungen werden strukturiert formuliert, generierte Ausgaben iterativ verbessert und der Entwicklungsprozess kontinuierlich dokumentiert. Der Workshop vermittelt die inhaerenten Limitationen dieser Methodik und entwickelt ein realistisches Verstaendnis fuer KI-gestuetzte Programmierung in der Museumspraxis.

---

## Leitgedanke

Das Hauptlernziel besteht darin, dass Museumsmitarbeiter:innen mit LLM-Unterstuetzung einfache Skripte und Webseiten fuer Forschungsdaten erstellen koennen, ohne professionelle Programmierer:innen zu sein.

Die Kernfrage lautet, wie man Anforderungen so formuliert, dass ein LLM brauchbaren Code generiert, und wie man erkennt, ob der Code funktioniert.

Der Workshop positioniert sich als *Informed Vibe Coding*. Das bedeutet nicht blindes Ausprobieren von LLM-generiertem Code, sondern die Faehigkeit, Ergebnisse einzuordnen, Fehler zu erkennen und gezielt nachzubessern.

---

## Konzeptionelle Grundlagen

### Was bedeutet "Programmieren 2.0"?

Traditionelles Programmieren erfordert das Erlernen von Syntax und Sprachlogik. Der Lernprozess ist zeitintensiv und von Scheitern gepraegt, fuehrt aber zu tiefem Verstaendnis. LLM-gestuetzte Codegenerierung verschiebt den Fokus auf das Formulieren von Anforderungen und das Bewerten von Ergebnissen. Die Resultate entstehen schnell, aber oft ohne vollstaendiges Verstaendnis dessen, was der generierte Code tut.

Der Begriff *Vibe Coding* (Andrej Karpathy, 2025) beschreibt das Ausprobieren von LLM-generiertem Code ohne detailliertes Verstaendnis. *Informed Vibe Coding* ergaenzt die Faehigkeit, Ergebnisse einzuordnen, Fehler zu erkennen und gezielt nachzubessern.

### AI Coding Literacy

Ein vorlaeufiger Kompetenzrahmen fuer LLM-gestuetzte Programmierung umfasst sieben Dimensionen.

*Computational Thinking* bedeutet, Probleme so zu zerlegen, dass sie mit Code loesbar werden. Jeannette Wing definiert das so: "Computational thinking involves solving problems, designing systems, and understanding human behavior, by drawing on the concepts fundamental to computer science. [...] Thinking like a computer scientist means more than being able to program a computer." Fuer die Arbeit mit LLMs heisst das konkret, Probleme zu zerlegen. Ohne Computational Thinking entsteht eine vage Anforderung wie "Mach mir eine Webseite fuer meine Museumsdaten". Mit Computational Thinking zerlegt man das Problem in Teilschritte wie Daten verstehen, Daten exportieren, Daten laden, Daten anzeigen, Suche hinzufuegen.

*Requirement Engineering* ist die Faehigkeit, praezise zu formulieren, was man braucht.

*Context Engineering* beschreibt das gezielte Bereitstellen relevanter Informationen im *Context Window* des LLM.

*Prompt Engineering* meint das Operationalisieren von Prompting-Strategien auf eigene Probleme.

*Code Literacy* ist die Faehigkeit, generierten Code zu lesen und einzuordnen, ohne ihn selbst schreiben zu muessen.

*Review* bezeichnet das systematische Pruefen von Ergebnissen.

*Expert:innenwissen* bezeichnet das Domaenenwissen, das notwendig ist, um die Qualitaet und Angemessenheit der generierten Ergebnisse beurteilen zu koennen.

### Einordnung in das Curriculum

Dieser Workshop adressiert die genannten Kompetenzbereiche mit unterschiedlicher Gewichtung.

| Kompetenz | Gewichtung | Umsetzung im Workshop |
|---|---|---|
| Computational Thinking | Grundlage | Probleme zerlegen, iterativ loesen |
| Requirement Engineering | Schwerpunkt | Praezise formulieren, was gebraucht wird |
| Context Engineering | Schwerpunkt | Dem LLM die richtigen Informationen geben |
| Prompt Engineering | wird vermittelt | Kommunikation mit dem LLM operationalisieren |
| Code Literacy | wird angebahnt | Generierten Code lesen und einordnen |
| Review | wird vermittelt | Ergebnisse systematisch pruefen |
| Expert:innenwissen | implizit | Museale Fachkenntnis als Bewertungsgrundlage |

### Leitmetapher

Der Nautilus baut seine Schale Kammer fuer Kammer. Jede neue Kammer folgt aus den vorherigen. So arbeiten wir auch mit LLMs, indem wir Probleme in Teile zerlegen, schrittweise loesen und Ergebnisse verbinden.

---

## Lernziele

1. Python-Skripte und HTML/CSS/JS mit LLM-Unterstuetzung in VS Code ausfuehren
2. Anforderungen strukturiert formulieren (*Context Engineering*)
3. Generierte Outputs kritisch pruefen und iterativ verbessern
4. Limitationen von LLM-generiertem Code erkennen

---

## Voraussetzungen

Programmierkenntnisse oder tiefgreifendes technisches Verstaendnis sind nicht erforderlich. Erforderlich sind Grundlagen zu LLMs und *Prompt Engineering*, erarbeitbar ueber die Vorbereitungslektuere unter https://chpollin.github.io/llmdh. Die Teilnehmenden bringen einen eigenen Laptop mit Administratorrechten fuer Softwareinstallation mit.

---

## Technische Anforderungen

### Erforderliche Software

**Visual Studio Code** ist ein kostenloser Code-Editor von Microsoft. Er funktioniert auf Windows, Mac und Linux, ist erweiterbar durch Extensions und hat ein integriertes Terminal zum Ausfuehren von Code. Es gibt andere Entwicklungsumgebungen wie PyCharm, Sublime oder Atom, aber VS Code ist fuer den Workshop die beste Wahl. Download unter https://code.visualstudio.com.

**Python** wird unter Windows ueber den Microsoft Store installiert. Empfohlen wird Python 3.12 von der Python Software Foundation (nicht 3.13, da diese Version zum Zeitpunkt des Workshops noch Kompatibilitaetsprobleme aufweist). Unter Mac erfolgt die Installation ueber https://www.python.org/downloads/. In VS Code ist zusaetzlich die Extension "Python" von Microsoft zu installieren.

**Live Server Extension** fuer VS Code startet einen lokalen Webserver und zeigt HTML-Dateien im Browser an. Aenderungen werden automatisch aktualisiert. Die Extension ist notwendig, wenn Webseiten externe Daten laden, da Browser aus Sicherheitsgruenden (CORS) das Laden lokaler Dateien blockieren.

### LLM-Zugang

Ein Zugang zu einem LLM ist erforderlich. Gratis-Zugaenge funktionieren, erfordern aber Wechsel zwischen Modellen bei Nutzungslimits. Empfohlen wird eine Claude Pro Subscription (20 $/Monat), da Claude derzeit eines der staerksten Modelle fuer Codegenerierung ist.

Proprietaere Modelle sind Claude Opus 4.5 von Anthropic (https://claude.ai), GPT-5.2 Codex von OpenAI (https://chatgpt.com) und Gemini 3 Pro von Google (https://gemini.google.com).

Offene Modelle sind Mistral (https://chat.mistral.ai), DeepSeek (https://chat.deepseek.com) und Qwen von Alibaba (https://chat.qwen.ai).

### AI Coding Agent

Zusaetzlich zum LLM-Chat-Zugang wird mindestens ein AI Coding Agent empfohlen. Mindestens GitHub Copilot (in VS Code integrierbar). Ideal waere Claude Code, das in der Claude Pro Subscription enthalten ist.

Verfuegbare AI Coding Agents sind Claude Code (https://claude.ai/code), GitHub Copilot (https://github.com/features/copilot), OpenAI Codex (https://openai.com/codex), Gemini CLI (https://github.com/google-gemini/gemini-cli), Cursor (https://cursor.com), Windsurf (https://windsurf.com), Manus (https://manus.im) und Devstral2/Mistral Vibe CLI (https://mistral.ai/news/devstral-2-vibe-cli).

### Optionale Software

GitHub Account und GitHub Desktop fuer Versionskontrolle. Node.js fuer erweiterte Webentwicklung. Obsidian fuer Wissensorganisation und Dokumentation.

---

## Workflows

### Python-Workflow

Der Workflow besteht aus vier Schritten, die im Workshop staendig wiederholt werden. Schritt 1 ist das Erstellen einer neuen Datei mit Endung .py. Schritt 2 ist das Schreiben oder Einfuegen von Python-Code im Editor. Schritt 3 ist das Speichern mit Ctrl+S. Schritt 4 ist das Ausfuehren im Terminal mit dem Befehl `python dateiname.py`. Im Workshop generiert das LLM den Code, die Teilnehmenden fuehren ihn aus und pruefen das Ergebnis.

### Web-Workflow

Auch dieser Workflow hat vier Schritte. Schritt 1 ist das Erstellen einer neuen Datei mit Endung .html. Schritt 2 ist das Schreiben von HTML und CSS im Editor. Schritt 3 ist das Starten des Live Servers per Rechtsklick auf die Datei und "Open with Live Server". Schritt 4 ist das Betrachten im Browser, wobei Aenderungen live angezeigt werden.

### Terminal-Grundlagen

Ein Terminal ist eine textbasierte Eingabezeile fuer getippte Befehle. In VS Code oeffnet man es ueber Menue, Terminal, New Terminal. Unter Windows heisst das Standard-Terminal PowerShell, unter Mac und Linux bash oder zsh. Fuer die Zwecke des Workshops macht das keinen Unterschied.

Wichtige Befehle sind `python --version` zur Pruefung der Installation, `cd ordnername` zum Wechseln in einen anderen Ordner und `ls` zum Anzeigen aller Dateien im aktuellen Ordner. Die Dateiendung .py kennzeichnet eine Python-Datei. VS Code und Python erkennen daran, dass es sich um ausfuehrbaren Python-Code handelt. Der Befehl `python dateiname.py` startet Python und fuehrt die angegebene Datei aus, Zeile fuer Zeile.

Fehlermeldungen sollten gelesen und bei Unklarheit an ein LLM zur Erklaerung uebergeben werden. "No such file or directory" bedeutet beispielsweise, dass die Datei nicht gefunden wurde, weil das Terminal nicht im richtigen Ordner ist.

### Webentwicklung mit drei Bausteinen

Eine Webseite besteht aus drei Dateitypen. Die Datei index.html definiert Struktur und Inhalt. Die Datei style.css gestaltet Aussehen, Farben und Layout und wird ueber `<link>` eingebunden. Die Datei script.js ermoeglicht Interaktivitaet und wird ueber `<script>` eingebunden. LLMs koennen aus einfachen Daten komplette, interaktive Webdokumente erzeugen, die direkt im Browser funktionieren.

---

## Lernpfad

Der Workshop ist als dreistufiger Lernpfad konzipiert. Das Vorbereitungstreffen vermittelt die technische Basis. Eine Phase des Selbststudiums ueberbrueckt die Zeit bis zum Workshop. Der Workshop selbst baut auf einer funktionierenden Umgebung und einem Basisverstaendnis auf.

### Stufe 1 - Vorbereitungstreffen (26.01.2026, online, 60 Min, abgeschlossen)

Das Vorbereitungstreffen hatte das Ziel, dass alle Teilnehmenden den technischen Workflow einmal komplett sehen und wissen, was sie bis zum Workshop einrichten muessen.

| Zeit | Inhalt |
|---|---|
| 5 Min | Begruessung und Ziel des Treffens |
| 5 Min | LLM-Zugang, Uebersicht der Optionen, Bestaetigung dass Zugang besteht |
| 20 Min | Python in VS Code, Installation der Python-Extension, Skript anlegen, im Terminal ausfuehren |
| 20 Min | HTML mit Live Server, Installation der Live Server Extension, HTML-Datei anlegen, Live Server starten, Aenderungen im Browser sehen |
| 10 Min | Fragen, Ausblick auf Lernchance und Workshop |

Im Vorbereitungstreffen wurden vermittelt: die konzeptionellen Grundlagen zu "Programmieren 2.0" und *Informed Vibe Coding*, der AI Coding Literacy Kompetenzrahmen, eine Uebersicht der verfuegbaren LLMs und AI Coding Agents, die Installation und Einrichtung von VS Code mit Python und Live Server, Terminal-Grundlagen und die beiden zentralen Workflows (Python und Web). Die Teilnehmenden erhielten die Lernchance als Aufgabe fuer die Zeit zwischen den beiden Terminen.

Das Ergebnis war, dass die Teilnehmenden den Workflow gesehen und verstanden haben, was sie selbst tun muessen. Die vier vorbereitenden Punkte wurden kommuniziert: Python installiert und getestet, VS Code eingerichtet, Zugang zu einem LLM, Zugang zu einem AI Coding Agent.

### Stufe 2 - Selbststudium (zwischen 26.01. und 12.02.)

Ein Vorbereitungsvideo von ca. 15-20 Minuten soll die Einrichtung von VS Code, Python und Live Server Schritt fuer Schritt als Referenz zeigen. Dieses Video ist noch zu erstellen.

Die Lernchance besteht darin, das Python-Skript `erstelle_webseite.py` auszufuehren, das zwei Dateien erzeugt (index.html und style.css). Anschliessend oeffnen die Teilnehmenden die HTML-Datei im Live Server, aendern etwas im HTML und etwas im CSS und beobachten, wie Live Server die Aenderungen sofort anzeigt. Bei Problemen sollen sie ein LLM zur Unterstuetzung nutzen.

Das Skript und die zugehoerige Schritt-fuer-Schritt-Anleitung wurden im Vorbereitungstreffen gezeigt und stehen auf Google Drive bereit.

Das Ergebnis ist, dass die Teilnehmenden die Umgebung selbst eingerichtet und eine erste Erfolgserfahrung gemacht haben.

### Stufe 3 - Workshop (12.02.2026, NHM Wien, 12:00-17:00)

Mit funktionierender Umgebung und Basisverstaendnis arbeiten die Teilnehmenden an praxisnahen Aufgaben mit LLM-Unterstuetzung.

| Zeit | Block | Inhalt |
|---|---|---|
| 12:00-12:15 | Ankommen | Begruessung, Technik-Check, Klaerung offener Fragen aus der Vorbereitung |
| 12:15-12:45 | Einfuehrung | Context Engineering, Anforderungen formulieren fuer brauchbare Codegenerierung |
| 12:45-13:45 | Praxisblock 1 | Python mit LLM-Unterstuetzung, Skript fuer eine museale Aufgabe erstellen |
| 13:45-14:15 | Pause | |
| 14:15-15:15 | Praxisblock 2 | Webentwicklung mit LLM-Unterstuetzung, kleine Webseite oder Webtool erstellen |
| 15:15-15:45 | Reflexion | Limitationen erkennen, was funktioniert gut, wo braucht es manuelle Ueberpruefung |
| 15:45-16:30 | Praxisblock 3 | Eigene Aufgabe, selbstgewaehlter oder vorgegebener Use Case |
| 16:30-17:00 | Abschluss | Dokumentation der Ergebnisse, Ausblick, Hinweis auf Q&A-Termin |

### Q&A im Nachgang (Termin offen, online, 60 Min)

Ziel ist das Klaeren von Fragen, die nach dem Workshop bei der Anwendung entstanden sind, und der Erfahrungsaustausch ueber erste eigene Versuche. Das Format ist eine offene Fragerunde mit ggf. gemeinsamen Troubleshooting.

---

## Detaillierte Workshop-Inhalte

### Ankommen (12:00-12:15)

Der Block dient dem Technik-Check und der Klaerung offener Fragen aus dem Vorbereitungstreffen und der Selbststudiumsphase. Typische Probleme betreffen Python nicht im PATH, VS Code-Konfiguration oder nicht aktivierte Extensions.

### Einfuehrung - Context Engineering (12:15-12:45)

Das Lernziel ist, zu verstehen, dass Output-Qualitaet von Kontext-Qualitaet abhaengt, und drei Elemente guten Kontexts benennen zu koennen.

Das *Context Window* ist der Arbeitsspeicher eines LLM, also alles, was das Modell waehrend einer Konversation sieht. Die Groesse ist begrenzt. Was nicht drin ist, existiert nicht.

Drei Elemente guten Kontexts sind erstens ein Datenbeispiel (zeigen, nicht beschreiben), zweitens ein erwartetes Ergebnis (konkret, nicht vage) und drittens Constraints (Einschraenkungen benennen).

Der Block umfasst eine Demonstration, die einen vagen mit einem praezisen Prompt bei denselben Daten vergleicht. In der Hands-on-Uebung formulieren die Teilnehmenden eine vollstaendige Anforderung, ohne bereits Code zu generieren.

Typische Stolpersteine sind zu vage Formulierungen ("mach was Schoenes"), ein vergessenes Datenbeispiel und ein nicht konkret beschriebenes Ergebnis.

### Praxisblock 1 - Python mit LLM-Unterstuetzung (12:45-13:45)

Das Lernziel ist, ein Python-Skript mit LLM zu erstellen, das museale Daten verarbeitet, und Fehlermeldungen an das LLM uebergeben zu koennen.

Der Block beginnt mit einer Wiederholung des Python-Workflows (Datei erstellen, Code einfuegen, speichern, ausfuehren). Das iterative Arbeiten wird als Kernprinzip eingefuehrt, bestehend aus generieren, ausfuehren, Fehler erkennen, an LLM geben, korrigieren. Im Verlauf werden grundlegende Code-Strukturen sichtbar gemacht, etwa Imports, Variablen, Schleifen und Bedingungen.

Die Hands-on-Aufgabe besteht darin, ein Skript zu erstellen, das die Anzahl der Objekte im Datensatz ausgibt, alle Typen aus dem description-Feld extrahiert und das aelteste sowie juengste Objekt anhand des Jahres aus der Beschreibung findet.

Typische Stolpersteine sind CSV nicht im richtigen Ordner, Encoding-Probleme bei Umlauten, Parsing-Varianten im description-Feld und die Verwendung nicht installierter Bibliotheken durch das LLM.

### Praxisblock 2 - Webentwicklung mit LLM-Unterstuetzung (14:15-15:15)

Das Lernziel ist, eine Webseite zu erstellen, die museale JSON-Daten laedt und interaktiv anzeigt.

Der Block wiederholt das HTML/CSS/JS-Zusammenspiel aus dem Vorbereitungstreffen, fuehrt die Browser-Konsole (F12) als Fehlerquelle ein und erlaeutert die Notwendigkeit von Live Server fuer lokale Daten wegen CORS.

Die Hands-on-Aufgabe besteht darin, eine Webseite mit Karten-Darstellung zu erstellen, bei der jede Karte Titel, Typ, Jahr und Material zeigt und ein Suchfeld die Karten filtert.

Typische Stolpersteine sind ein falscher JSON-Pfad, CORS-Fehler weil Live Server nicht aktiv ist und JavaScript-Fehler in der Konsole, die uebersehen werden.

### Reflexion - Limitationen (15:15-15:45)

Das Lernziel ist, typische Fehlerklassen von LLM-generiertem Code benennen zu koennen und zu wissen, wann professionelle Unterstuetzung noetig ist.

Typische Fehlerklassen sind halluzinierte Funktionen (das LLM erfindet nicht existierende APIs), Logikfehler bei Randfaellen (funktioniert meist, aber nicht immer), Sicherheitsprobleme (fehlende Validierung, unsichere Pfade) und Ueberkomplexitaet (Framework statt einfacher Loesung).

Professionelle Unterstuetzung ist noetig bei Sicherheitsanforderungen (sensible Daten, oeffentliche Anwendungen), Skalierung (grosse Datenmengen, viele Nutzer), Systemintegration (Datenbanken, APIs, IT-Infrastruktur), Wartbarkeit (laengerfristige Pflege) und rechtlichen Anforderungen (Barrierefreiheit, Datenschutz).

Die Hands-on-Uebung ist eine Reflexion der eigenen Ergebnisse aus den Praxisbloecken. Was hat nicht auf Anhieb funktioniert? Welche Art von Fehler war es? Wie wurde er behoben?

### Praxisblock 3 - Eigene Aufgabe (15:45-16:30)

Das Lernziel ist, Gelerntes selbststaendig auf eine Aufgabe anzuwenden.

Option A ist die Arbeit mit eigenen Daten, die die Teilnehmenden mitgebracht haben. Die Workshopleitung unterstuetzt bei der Anforderungsformulierung.

Option B umfasst vorgegebene Aufgaben. Eine erweiterte Objektsuche als Webseite mit mehreren Filterkriterien. Eine Datenbereinigung als Python-Skript, das das description-Feld in separate Spalten ueberfuehrt. Ein Statistik-Dashboard als Visualisierung der Verteilung nach Typ und Jahr.

### Abschluss - Dokumentation (16:30-17:00)

Das Lernziel ist, die eigenen Ergebnisse dokumentiert zu haben und zu wissen, wie es weitergeht.

Die Teilnehmenden fuellen eine Dokumentationsvorlage aus. Der Ausblick verweist auf Git/GitHub, Jupyter Notebooks und Claude Code als weiterfuehrende Werkzeuge. Der Q&A-Termin im Nachgang wird angekuendigt und der Repository-Link geteilt.

---

## Datensatz

### Herkunft

Der Datensatz stammt aus dem Hans Gross Kriminalmuseum der Universitaet Graz. Die Nutzung fuer den Workshop ist genehmigt.

### Gesamtdatensatz (kriminalmuseum_komplett.csv)

Der Gesamtdatensatz umfasst 3892 Eintraege, davon 1657 Karteikarten mit meist minimalen Metadaten und 2235 Objekte mit reichhaltigen Beschreibungen.

Die Spalten nach Bereinigung sind container, pid, model, title, identifier, createdDate, description und fulltext.

### Workshop-Auszug (workshop_objekte.csv und workshop_objekte.json)

Fuer die Uebungen stehen 25 kuratierte Objekte zur Verfuegung. Die Jahreszahlen liegen zwischen 1895 und 1937. Es sind 14 verschiedene Objekttypen vertreten, darunter Waffen, Forensische Medizin, Falsifikate, Diebswerkzeuge, Wildererobjekte, Fussspuren, Verstellungskuenste, Requisiten von Falschspielern, Gefaengniserzeugnisse, Vergleichsobjekte, Varia, Instrumente bei Koerperverletzungen, Unechte Kunstgegenstaende und Projektile. Die Beschreibungen sind reichhaltig.

### Didaktisches Potenzial

Das description-Feld ist semi-strukturiert. Ein Beispiel sieht folgendermassen aus.

```
Type: Waffen | Type: Revolver | Description: Revolver, Kopie einer Smith & Wesson
"Double Action", Kaliber .32, Jahr 1895 | Material: Stahl | Dimensions: height: 3,2 cm,
width: 17,1 cm | Condition: fester haftende Verschmutzung | Museum ID: KM-O.1-1
```

Daraus ergeben sich mehrere Uebungsszenarien. Parsing mit LLM zur Extraktion strukturierter Daten. Regex-Extraktion von Jahreszahlen mit dem Muster `Jahr\s*(\d{4})`. Validierung durch Vergleich extrahierter Daten mit dem Original. API-Batch-Verarbeitung vieler Objekte.

---

## LLM-Konfiguration

### Chat-Interface

Die Demonstration im Workshop erfolgt mit Claude (claude.ai). Die Teilnehmenden verwenden ein LLM ihrer Wahl. Im Vorbereitungstreffen wurde eine Claude Pro Subscription (20 $/Monat) fuer unbegrenzten Zugang waehrend des Workshops empfohlen.

### API (geplant, noch nicht in Folien ausgearbeitet)

Fuer eine programmatische Nutzung der Claude API im Workshop ist folgende Konfiguration vorgesehen.

| Parameter | Wert |
|---|---|
| Modell | Claude Haiku 4.5 |
| Modell-String | claude-haiku-4-5-20251001 |
| Input-Kosten | 1 $ / Million Tokens |
| Output-Kosten | 5 $ / Million Tokens |
| Budget | 75 $ Credits |

Der API-Key wird im Workshop muendlich geteilt. Teilnehmende tragen ihn in vorbereiteten Code ein. Nach der Uebung wird der Key geloescht und rotiert.

Dieser Block ist im Ausarbeitungsdokument als eigenstaendiger Block mit zwei Aufgaben konzipiert (einzelner API-Call zur Extraktion, Batch-Verarbeitung von 5 Objekten), aber in der aktuellen Workshop-Agenda (5 Zeitslots plus Pause) noch nicht als separater Zeitslot eingeplant. Die Integration in die bestehende Blockstruktur ist noch zu klaeren. Moegliche Optionen sind die Einbettung in Praxisblock 1, ein eigenstaendiger Kurzblock oder die Verschiebung in die Q&A-Session.

---

## Lernchance - Skript und Anleitung

### Das Skript erstelle_webseite.py

```python
# erstelle_webseite.py
# Dieses Skript erzeugt eine einfache Webseite fuer das NHM Wien

html_inhalt = """<!DOCTYPE html>
<html>
<head>
    <title>Meine Sammlungsobjekte</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Sammlungsobjekte im NHM Wien</h1>
    <p>Eine kleine Auswahl aus der Sammlung:</p>
    <ul>
        <li>Mineral: Bergkristall</li>
        <li>Fossil: Ammonit</li>
        <li>Praeparat: Alpensteinbock</li>
    </ul>
    <p class="hinweis">Aendere mich! Probiere etwas Neues aus.</p>
</body>
</html>
"""

css_inhalt = """body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    color: #2c3e50;
}

ul {
    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 8px;
}

li {
    padding: 5px 0;
}

.hinweis {
    background-color: #ffe6e6;
    padding: 10px;
    border-left: 4px solid #e74c3c;
    margin-top: 20px;
}
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_inhalt)
    print("index.html wurde erstellt.")

with open("style.css", "w", encoding="utf-8") as f:
    f.write(css_inhalt)
    print("style.css wurde erstellt.")

print("\nFertig! Oeffne index.html im Live Server.")
print("Dann aendere etwas im HTML oder CSS und beobachte das Ergebnis.")
```

### Anleitung

Schritt 1 ist das Speichern des Skripts als erstelle_webseite.py mit korrekter Dateiendung. Schritt 2 ist das Oeffnen eines Terminals ueber Menue, Terminal, New Terminal. Schritt 3 ist das Pruefen des Pfads im Terminal und ggf. Navigation mit `cd ordnername` in den Ordner mit der Datei. Schritt 4 ist das Ausfuehren mit `python erstelle_webseite.py`, wodurch index.html und style.css erzeugt werden. Schritt 5 ist das Oeffnen im Browser per Rechtsklick auf index.html, "Open with Live Server". Schritt 6 ist das Aendern von etwas im HTML oder CSS, Speichern und Beobachten des Ergebnisses.

Das Ziel ist, dass der komplette Workflow einmal selbst durchlaufen wurde, von der Ausfuehrung eines Skripts bis zur Bearbeitung im Browser.

---

## Troubleshooting

Bei Problemen gibt es drei Erste-Hilfe-Massnahmen. VS Code neu starten loest viele Probleme. Die Fehlermeldung lesen hilft, da oft die Loesung darin steht. Die Fehlermeldung in ein LLM kopieren und um Hilfe bitten ist der dritte Schritt.

Wenn nichts hilft, ist eine E-Mail an den Workshopleiter mit drei Angaben sinnvoll: was versucht wurde, welche Fehlermeldung erscheint und ein Screenshot.

---

## Ordnerstruktur Google Drive

```
workshop-programmieren-2.0/
|-- 01_daten/
|   |-- workshop_objekte.csv
|   |-- workshop_objekte.json
|-- 02_skripte/
|   |-- api_einfach.py
|   |-- api_batch_extraktion.py
|   |-- beispiel_csv_analyse.py
|-- 03_vorlagen/
    |-- dokumentation_vorlage.md
```

---

## Repository-Struktur

```
ai-coding-literacy/
|-- data/
|   |-- kriminalmuseum/
|       |-- workshop_objekte.csv
|       |-- workshop_objekte.json
|       |-- kriminalmuseum_komplett.csv
|-- workshops/
|   |-- programmieren-2-0/
|       |-- handouts/
|       |   |-- cheatsheet_api.md
|       |   |-- cheatsheet_python_fehler.md
|       |   |-- dokumentation_vorlage.md
|       |   |-- prompt_vorlage.md
|       |-- python/
|       |   |-- api_einfach.py
|       |   |-- api_beispiel_extraktion.py
|       |   |-- beispiel_csv_analyse.py
|       |-- web/
|           |-- index.html
|-- knowledge/
    |-- workshops/
        |-- programmieren-2-0.md
```

---

## Dokumentationsvorlage fuer Teilnehmende

```markdown
# Workshop-Dokumentation: Programmieren 2.0

**Name:**
**Datum:** 12.02.2026

## Was habe ich erstellt?

(Kurze Beschreibung der Skripte/Webseiten)

## Was hat gut funktioniert?

(Erfolgreiche Prompts/Anforderungen)

## Was hat nicht funktioniert?

(Probleme und Loesungen)

## Wichtigste Erkenntnis

(Eine Sache, die ich mitnehme)

## Naechster Schritt

(Was moechte ich als naechstes ausprobieren?)
```

---

## Glossar

| Begriff | Erklaerung |
|---|---|
| API | Application Programming Interface, Schnittstelle zur programmatischen Nutzung |
| API-Key | Geheimer Schluessel zur Authentifizierung bei einer API |
| CORS | Cross-Origin Resource Sharing, Browser-Sicherheitsmechanismus |
| CSV | Comma-Separated Values, Tabellenformat |
| CSS | Cascading Style Sheets, Sprache fuer visuelles Design von Webseiten |
| Extension | Erweiterung fuer VS Code, die zusaetzliche Funktionen hinzufuegt |
| Frontend | Der sichtbare Teil einer Webseite (HTML, CSS, JavaScript) |
| Git | Ein System zur Versionskontrolle von Code |
| GitHub | Eine Plattform zum Speichern und Teilen von Code-Projekten |
| HTML | HyperText Markup Language, Sprache fuer Struktur von Webseiten |
| IDE | Integrated Development Environment, Softwareumgebung zum Programmieren |
| JavaScript | Programmiersprache fuer Interaktivitaet in Webseiten |
| JSON | JavaScript Object Notation, Datenformat |
| Live Server | VS Code Extension, die HTML-Dateien im Browser anzeigt und bei Aenderungen automatisch aktualisiert |
| LLM | Large Language Model, KI-Modell wie Claude oder ChatGPT |
| PATH | Systemvariable, die dem Computer sagt, wo Programme zu finden sind |
| Prompt | Die Eingabe oder Anweisung, die einem LLM gegeben wird |
| Skript | Eine Textdatei mit Programmcode, die ausgefuehrt werden kann |
| Terminal | Textbasierte Eingabezeile zum Ausfuehren von Befehlen und Programmen |
| Token | Texteinheit, die LLMs verarbeiten, entspricht etwa 0.75 Woertern |

---

## Ressourcen

### Workshop-Materialien

- Repository: https://github.com/DigitalHumanitiesCraft/ai-coding-literacy
- Google Drive: https://drive.google.com/drive/folders/1m37hhcmlzqmB9evjgVvRK7_Dgu6JCobn
- Vorbereitungslektuere: https://chpollin.github.io/llmdh

### Konzeptionelle Grundlagen

- Karpathy, A. (2025). 2025 LLM Year in Review. https://karpathy.bearblog.dev/year-in-review-2025/
- Willison, S. (2025). Vibe Coding. https://simonwillison.net/2025/Mar/19/vibe-coding
- Wing, J. M. (2006). Computational Thinking. Communications of the ACM, 49(3), 33-35. https://dl.acm.org/doi/10.1145/1118178.1118215

### Python fuer Digital Humanities

- Mattingly, W.: Python for Digital Humanities, YouTube-Playlist, 27 Videos
- Mattingly, W.: Python Textbook, begleitendes Online-Textbook
- Digital History Berlin: Python fuer Historiker:innen, deutschsprachig, Version 1.0 (2022)

### Tools

- Visual Studio Code: https://code.visualstudio.com
- Claude: https://claude.ai
- Anthropic API Dokumentation: https://docs.anthropic.com

### Weiterfuehrend

- GitHub Desktop: https://desktop.github.com (Intro-Video: https://www.youtube.com/watch?v=77W2JSL7-r8)
- Google Colab: https://colab.research.google.com
- Obsidian: https://obsidian.md
- Docling: https://www.docling.ai

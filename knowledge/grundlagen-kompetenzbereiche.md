# Grundlagen der AI Coding Literacy

Dieses Dokument behandelt die fünf Kompetenzbereiche, die auf Computational Thinking aufbauen. Zusammen bilden sie den vollständigen Entwicklungszyklus für LLM-gestützte Codeentwicklung.

---

## Requirement Engineering (RE)

Requirement Engineering bezeichnet die systematische Formulierung von Anforderungen. Für die Arbeit mit LLMs ist das entscheidend, weil ein Prompt funktional ein Requirements-Dokument ist (Vogelsang, 2024). Wer präzise Anforderungen formulieren kann, schreibt bessere Prompts.

### Die Kernfragen

| Frage | Zweck | Beispiel |
|-------|-------|----------|
| Was soll das Tool tun? | Funktionale Anforderung | "Alle Dateinamen in einem Ordner umbenennen" |
| Was soll es nicht tun? | Abgrenzung | "Keine Unterordner berücksichtigen" |
| Was ist die Eingabe? | Input definieren | "Ein Ordnerpfad und ein Benennungsschema" |
| Was ist die Ausgabe? | Output definieren | "Umbenannte Dateien, Log der Änderungen" |
| Woran erkenne ich Erfolg? | Akzeptanzkriterium | "Alle Dateien folgen dem Schema YYYY-MM-DD_name" |

### User Stories als Format

Eine User Story ist ein leichtgewichtiges Format für Anforderungen, das sich in der Praxis bewährt hat (Lucassen et al., 2016):

> Als [Rolle] möchte ich [Funktion], damit [Nutzen].

Beispiel:
> Als Archivar möchte ich Digitalisate automatisch nach Datum benennen, damit die chronologische Sortierung im Dateisystem funktioniert.

### INVEST-Kriterien

Gute Anforderungen erfüllen diese Kriterien (Lucassen et al., 2016):

| Kriterium | Bedeutung |
|-----------|-----------|
| Independent | Unabhängig von anderen Anforderungen umsetzbar |
| Negotiable | Verhandelbar, nicht in Stein gemeißelt |
| Valuable | Liefert erkennbaren Nutzen |
| Estimable | Aufwand ist einschätzbar |
| Small | Klein genug für eine Iteration |
| Testable | Erfüllung ist überprüfbar |

### LLM-gestütztes Requirements Engineering

Aktuelle Forschung zeigt, dass LLMs Requirements-Aufgaben unterstützen können. Vogelsang und Fischbach (2024) bieten eine systematische Anleitung für den LLM-Einsatz in RE-Aufgaben. Eine umfassende Metastudie von Zadenoori et al. (2025) analysiert 74 Primärstudien zu LLM-Anwendungen in RE und identifiziert Zero-Shot und Few-Shot als dominante Prompt-Strategien.

Für Forschende ohne Software-Engineering-Training empfiehlt die Literatur leichtgewichtige Ansätze: "Forscher sind oft nicht vertraut oder sogar resistent gegenüber SE-Praktiken" (Requirements Engineering for Research Software, 2024). User Stories und einfache Akzeptanzkriterien sind niedrigschwelliger als formale Spezifikationen.

### Praktisches Beispiel

Vage Anforderung:
> "Ich brauche was, um meine Bibliografie zu verwalten"

Präzise Anforderung:
> Eingabe: Eine CSV-Datei mit Spalten (Autor, Titel, Jahr, Zeitschrift).
> Ausgabe: Eine HTML-Seite mit alphabetisch sortierter Literaturliste.
> Akzeptanzkriterium: Jeder Eintrag zeigt Autor (Jahr): Titel. In: Zeitschrift.
> Nicht im Scope: PDF-Verlinkung, Dubletten-Erkennung.

### Warum ist das für LLMs wichtig?

LLMs raten bei vagen Anforderungen. Sie füllen Lücken mit Annahmen, die oft nicht den Erwartungen entsprechen. Präzise Anforderungen reduzieren dieses Raten. Die Akzeptanzkriterien helfen beim Review: Man weiß genau, wogegen der generierte Code zu prüfen ist.

### Übung

Nimm ein kleines Tool, das du dir wünschst. Formuliere:

1. Eine User Story (Als... möchte ich... damit...)
2. Eingabe und Ausgabe
3. Drei Akzeptanzkriterien
4. Zwei Abgrenzungen (Was soll es explizit nicht tun?)

---

## Context Engineering (CE)

Context Engineering bezeichnet die systematische Gestaltung des Informationskontexts, den man einem LLM gibt. Das Kontextfenster ist begrenzt. Was man hineinpackt und wie man es anordnet, bestimmt die Qualität der Ausgabe (Gao et al., 2024).

### Das Kontextfenster verstehen

Ein LLM hat ein Kontextfenster, gemessen in Tokens (grob: 1 Token entspricht 0,75 Wörtern). Alles, was das Modell verarbeiten kann, muss in diesem Fenster stehen:

| Modell | Kontextfenster | Entspricht etwa |
|--------|----------------|-----------------|
| GPT-4o | 128.000 Tokens | 200 Seiten Text |
| Claude Sonnet 4 | 200.000 Tokens | 300 Seiten Text |
| Gemini 2.0 | 1.000.000 Tokens | 1.500 Seiten Text |

Aber: Mehr ist nicht automatisch besser. LLMs können Informationen "in der Mitte verlieren" (Lost in the Middle Problem). Liu et al. (2025) bieten den aktuellsten Survey zu Long-Context-Handling und dokumentieren praktische Limits.

### Retrieval-Augmented Generation (RAG)

RAG ist ein Paradigma, bei dem relevante Informationen aus externen Quellen abgerufen und dem LLM als Kontext bereitgestellt werden. Gao et al. (2024) unterscheiden drei Ansätze:

| Ansatz | Beschreibung |
|--------|--------------|
| Naive RAG | Einfaches Retrieval, direkte Einbettung |
| Advanced RAG | Pre-Retrieval-Optimierung, Re-Ranking |
| Modular RAG | Flexible Pipeline mit austauschbaren Komponenten |

Für Code-Generierung ist RAG relevant, wenn bestehende Codebasis, Dokumentation oder Beispiele einbezogen werden sollen. Zhao et al. (2024, Microsoft Research) geben praktische Guidance zur Integration externer Daten. Peng et al. (2024) beschreiben GraphRAG für strukturiertes Wissen, etwa Code mit Funktions- und Modulbeziehungen.

### Was gehört in den Kontext?

| Element | Wann relevant | Beispiel |
|---------|---------------|----------|
| Aufgabenbeschreibung | Immer | "Schreibe ein Skript, das..." |
| Beispieldaten | Bei Datenverarbeitung | Auszug aus der CSV (5-10 Zeilen) |
| Bestehender Code | Bei Erweiterungen | Die Funktion, die angepasst werden soll |
| Fehlermeldung | Bei Debugging | Der vollständige Traceback |
| Dokumentation | Bei APIs/Bibliotheken | Relevanter Ausschnitt der Docs |
| Konventionen | Bei Projekten | Namensschema, Ordnerstruktur |

Huang und Huang (2024) organisieren RAG in vier Phasen: Pre-Retrieval, Retrieval, Post-Retrieval, Generation. Diese Pipeline-Struktur hilft beim systematischen Aufbau des Kontexts.

### Kontextstruktur

Die Anordnung beeinflusst die Verarbeitung. Eine bewährte Struktur:

```
1. Rolle/Kontext setzen
2. Aufgabe beschreiben
3. Relevante Informationen (Daten, Code, Docs)
4. Constraints und Anforderungen
5. Gewünschtes Ausgabeformat
```

### Komprimierungsstrategien

Wenn der Kontext zu groß wird, helfen Komprimierungstechniken. Li et al. (2024) kategorisieren "Hard Prompt" (Token-Reduktion) und "Soft Prompt" (Embedding-Komprimierung) Methoden.

Die LLMLingua-Familie (Jiang et al., 2023-2024) erreicht bis zu 20-fache Prompt-Komprimierung bei minimalem Performanceverlust und adressiert das "Lost in the Middle"-Problem. Ge et al. (2024) führen ICAE für Komprimierung langer Kontexte in kompakte "Memory Slots" ein.

Praktische Strategien ohne spezielle Tools:

1. Relevante Ausschnitte statt ganzer Dateien (die ersten 20 Zeilen einer CSV reichen oft)
2. Zusammenfassungen ("Die Datei enthält 500 Einträge mit diesen Spalten: ...")
3. Weglassen von Boilerplate (Imports und Standardcode muss nicht wiederholt werden)

### Praktisches Beispiel

Ohne Context Engineering:
> "Mach mir ein Skript für meine Excel-Dateien"

Mit Context Engineering:
> Du hilfst mir, ein Python-Skript zu schreiben.
>
> Aufgabe: Alle Excel-Dateien in einem Ordner einlesen und zu einer CSV zusammenführen.
>
> Beispieldaten (erste Datei):
> | Inv-Nr | Bezeichnung | Datierung |
> |--------|-------------|-----------|
> | 001 | Vase | 1820 |
>
> Constraints:
> - Alle Dateien haben identische Spaltenstruktur
> - Encoding: UTF-8
> - Nur .xlsx, keine .xls
>
> Ausgabe: Ein einzelnes Skript mit Kommentaren.

### Übung

Du möchtest ein Skript, das Metadaten aus PDF-Dateien extrahiert. Stelle zusammen:

1. Welche Informationen braucht das LLM über deine Dateien?
2. Welche Beispieldaten würdest du mitgeben?
3. Welche Dokumentation wäre hilfreich?
4. In welcher Reihenfolge würdest du das anordnen?

---

## Prompt Engineering (PE)

Prompt Engineering bezeichnet die Entwicklung und Optimierung von Eingabeaufforderungen. Ein Prompt ist mehr als eine Frage. Die Art, wie man fragt, bestimmt die Art der Antwort. Schulhoff et al. (2024) dokumentieren 58 verschiedene Prompting-Techniken in ihrem systematischen Survey.

### Prompting-Strategien

| Strategie | Beschreibung | Wann einsetzen |
|-----------|--------------|----------------|
| Zero-Shot | Direkte Anweisung ohne Beispiele | Einfache, eindeutige Aufgaben |
| Few-Shot | Anweisung mit 2-5 Beispielen | Wenn das Format wichtig ist |
| Chain-of-Thought | "Denke Schritt für Schritt" | Komplexe, mehrstufige Probleme |
| Role Prompting | "Du bist ein erfahrener..." | Wenn Expertise/Perspektive wichtig ist |

### Few-Shot Learning

Brown et al. (2020) zeigten im GPT-3-Paper, dass wenige Beispiele im Prompt neue Tasks ohne Fine-Tuning ermöglichen. Dong et al. (2024) bieten eine formale Definition von In-Context Learning mit umfassender Abdeckung von Demonstration-Selection-Strategien.

Zero-Shot:
> Extrahiere das Datum aus diesem Text: "Das Gemälde wurde am 15. März 1823 erworben."

Few-Shot:
> Extrahiere das Datum aus Texten. Formatiere als YYYY-MM-DD.
>
> Text: "Erworben im Januar 1820" -> 1820-01-00
> Text: "Datiert auf den 3.5.1899" -> 1899-05-03
> Text: "Das Gemälde wurde am 15. März 1823 erworben." ->

Few-Shot zeigt dem Modell das gewünschte Format und den Umgang mit Sonderfällen.

### Chain-of-Thought

Wei et al. (2022) zeigten in ihrem NeurIPS-Paper, dass intermediäre Reasoning-Schritte die Leistung bei komplexen Problemen verbessern. Bei mehrstufigen Aufgaben hilft es, das Modell zum schrittweisen Denken anzuleiten:

> Ich habe eine Liste von Museumsobjekten. Ich möchte sie nach Epochen gruppieren.
>
> Denke Schritt für Schritt:
> 1. Welche Epochen kommen in den Daten vor?
> 2. Nach welchen Kriterien ordne ich Objekte Epochen zu?
> 3. Wie gehe ich mit unklaren Fällen um?
> 4. Dann schreibe den Code.

### Automatisches Prompt Engineering

Zhou et al. (2023) zeigten, dass LLMs selbst Prompts generieren und optimieren können (APE). Yang et al. (2024) demonstrierten mit OPRO bis zu 8% Verbesserung bei mathematischem Reasoning durch LLM-gestützte Prompt-Optimierung. Diese Ansätze sind relevant für fortgeschrittene Anwendungen.

### Code-spezifisches Prompting

Jiang et al. (2024) bieten einen Survey zu LLMs für Codegenerierung mit spezifischen Prompting-Strategien und Benchmarks (HumanEval, MBPP, BigCodeBench). Sahoo et al. (2024) analysieren 29 Prompting-Techniken organisiert nach Anwendungsbereich, einschließlich Codegenerierung. Vatsal und Dubey (2024) vergleichen 39 Prompting-Methoden über 29 NLP-Tasks mit Performance-Daten.

### Iterative Verfeinerung

Prompting ist selten beim ersten Versuch perfekt. Der Zyklus:

```
Prompt -> Output prüfen -> Problem identifizieren -> Prompt anpassen -> wiederholen
```

Typische Anpassungen:
- Constraints hinzufügen ("Maximal 50 Zeilen Code")
- Beispiele ergänzen (wenn das Format nicht stimmt)
- Aufgabe zerlegen (wenn das Ergebnis zu komplex/fehlerhaft ist)
- Negationen einfügen ("Verwende nicht pandas, nur csv-Modul")

### Praktisches Beispiel

Erste Iteration:
> Schreibe ein Skript, das Bilder verkleinert.

Problem: Unklar welche Größe, welches Format, welcher Ordner.

Zweite Iteration:
> Schreibe ein Python-Skript mit Pillow.
> Eingabe: Ordnerpfad als Argument
> Aufgabe: Alle .jpg-Dateien auf max. 1200px Breite skalieren (Seitenverhältnis beibehalten)
> Ausgabe: Neue Dateien mit Suffix "_web" im selben Ordner
> Constraint: Originaldateien nicht überschreiben

### Übung

Nimm diese vage Anforderung und entwickle einen präzisen Prompt:

> "Ich brauche was, um meine Notizen zu durchsuchen."

1. Welche Strategie wählst du (Zero-Shot, Few-Shot, CoT)?
2. Welche Constraints fehlen?
3. Formuliere den verbesserten Prompt.

---

## Code Literacy (CL)

Code Literacy bezeichnet die Fähigkeit, Code zu lesen und zu verstehen. Das ist eine eigenständige Kompetenz, die dem Schreiben vorausgeht (Lopez et al., 2008). Man muss nicht selbst Code schreiben können, um LLM-generierten Code zu bewerten.

### Lesen und Schreiben als getrennte Kompetenzen

Lopez et al. (2008) lieferten den empirischen Nachweis einer Skill-Hierarchie: Lesen und Tracing gehen dem Schreiben voraus. Xie et al. (2019) unterscheiden in ihrem Quadranten-Modell zwischen Reading vs. Writing und Semantic vs. Template Knowledge. Diese Forschung rechtfertigt ein Curriculum, das Lesen ohne notwendiges Schreiben lehrt.

Die Hierarchie:

1. Code ausführen können (Run)
2. Code nachvollziehen können (Trace)
3. Code erklären können (Explain)
4. Code schreiben können (Write)

Für AI Coding Literacy sind primär Stufe 2 und 3 relevant.

### Kognitive Prozesse beim Codelesen

Letovsky (1986) etablierte, dass Programmierer durch aktives Fragen und Hypothesenbildung Code verstehen. Dieser Prozess ist analog zur Close-Reading-Interpretation in den Geisteswissenschaften.

Pennington (1987) zeigte, dass Leser zwei Arten mentaler Modelle konstruieren:

| Modell | Frage | Fokus |
|--------|-------|-------|
| Prozedural | "Was passiert der Reihe nach?" | Kontrollfluss, Zeile für Zeile |
| Funktional | "Was ist das Ziel?" | Zweck, Eingabe/Ausgabe |

Beide sind nützlich. Das prozedurale Modell hilft beim Debugging, das funktionale beim Verstehen der Gesamtlogik.

Letovsky und Soloway (1986) führten das Konzept "delocalized plans" ein: Code, der eine Intention implementiert, ist oft über mehrere Stellen verstreut. Das erklärt, warum Codelesen Navigationsstrategien erfordert.

### Professionelle Strategien

Roehm et al. (2012) beobachteten 28 professionelle Entwickler: Auch Experten vermeiden tiefes Verstehen wenn möglich und nutzen kontextabhängige Strategien. Partielles Verstehen ist normal und oft ausreichend. Storey (2006) bietet einen 30-Jahres-Review kognitiver Theorien zum Programmverstehen.

Aljehane et al. (2023) zeigten in einer Eye-Tracking-Studie: Novizen zeigen mehr Fixationen, längere Blickzeiten und größere Pupillen, was höhere kognitive Last indiziert. Implikation: Scaffolding und Annotationen helfen beim Lernen.

### LLM-generierter Code

Takerngsaksiri et al. (2025) fanden in einer Industriestudie bei Atlassian: 39% der Praktiker fanden LLM-Code lesbarer als menschlichen Code. LLM-Output ist erwartbar gut lesbar, da die Modelle auf gut dokumentiertem Code trainiert wurden.

Kazemitabaar et al. (2023) identifizierten vier Ansätze bei Novizen: AI Single Prompt, AI Step-by-Step, Hybrid, Manual. "AI Single Prompt" erzielt höchste Task-Korrektheit, aber niedrigste Performance bei Code-Modifikation. Das unterstreicht: Verstehen ist essentiell, nicht nur Generieren.

### Code-Strukturen erkennen

Die meisten Skripte folgen einem Muster:

```
1. Imports (externe Werkzeuge laden)
2. Konfiguration (Pfade, Parameter)
3. Hilfsfunktionen (wiederverwendbare Teile)
4. Hauptlogik (der eigentliche Ablauf)
5. Einstiegspunkt (was beim Ausführen passiert)
```

Beispiel (Python):

```python
# 1. Imports
from pathlib import Path
import csv

# 2. Konfiguration
INPUT_FOLDER = Path("daten")
OUTPUT_FILE = Path("ergebnis.csv")

# 3. Hilfsfunktion
def extract_year(filename):
    """Extrahiert die Jahreszahl aus dem Dateinamen."""
    return filename.stem[:4]

# 4. Hauptlogik
def process_files():
    results = []
    for file in INPUT_FOLDER.glob("*.txt"):
        year = extract_year(file)
        content = file.read_text()
        results.append({"year": year, "length": len(content)})
    return results

# 5. Einstiegspunkt
if __name__ == "__main__":
    data = process_files()
    # ... speichern
```

### Strategien für das Codelesen

1. Überblick zuerst: Struktur erfassen, nicht Zeile für Zeile
2. Eingabe/Ausgabe identifizieren: Was geht rein, was kommt raus?
3. Namen lesen: Gute Variablennamen erklären den Zweck
4. Kommentare nutzen: LLM-generierter Code ist oft gut kommentiert
5. Unbekanntes nachschlagen: "Was macht `glob`?" ist eine legitime Frage ans LLM

### Warnsignale beim Lesen

| Signal | Bedeutung |
|--------|-----------|
| Sehr lange Funktionen | Möglicherweise zu komplex, schwer zu prüfen |
| Keine Kommentare | Ungewöhnlich für LLM-Code, könnte auf Copy-Paste hindeuten |
| Hardcodierte Werte | Funktioniert nur für exakt diese Daten |
| Ungenutzte Variablen | Hinweis auf unvollständige Logik |
| `except:` ohne Spezifikation | Verschluckt alle Fehler, gefährlich |

### Übung

Lies diesen Code und beantworte die Fragen:

```python
from pathlib import Path

def find_large_files(folder, min_size_mb=10):
    large_files = []
    for file in Path(folder).rglob("*"):
        if file.is_file():
            size_mb = file.stat().st_size / (1024 * 1024)
            if size_mb >= min_size_mb:
                large_files.append((file.name, round(size_mb, 2)))
    return sorted(large_files, key=lambda x: x[1], reverse=True)
```

1. Was ist die Eingabe, was die Ausgabe?
2. Was bedeutet `rglob("*")` vermutlich? (Hinweis: `glob` kennst du)
3. Was macht `lambda x: x[1]`?
4. Wie würdest du den Code testen?

---

## Review (RV)

Review bezeichnet die systematische Prüfung von generiertem Code gegen die definierten Anforderungen. LLM-generierter Code sieht oft korrekt aus, enthält aber systematisch Fehler. Liu et al. (2023) zeigten mit EvalPlus: Durchschnittlich sinken Pass-Raten um 19-28,9% bei gründlicherem Testing. Huang et al. (2024) fanden bei 7 LLMs auf 1.164 Problemen durchschnittlich nur 41,6% Passing Rate.

### Typische Fehlerarten

Tambon et al. (2024) entwickelten eine Taxonomie von 10 Bug-Patterns, validiert durch 34 Praktiker:

| Fehlerart | Beschreibung | Beispiel |
|-----------|--------------|----------|
| Halluzinierte Objekte | Nicht existierende Funktionen/Bibliotheken | `from magic_csv import autoparse` |
| Falsche Attribute | Existierende Objekte, falsche Eigenschaften | `file.lastmodified` statt `file.stat().st_mtime` |
| Fehlinterpretation | Anforderung falsch verstanden | Sortiert aufsteigend statt absteigend |
| Fehlende Randfälle | Funktioniert nur für Normalfall | Crasht bei leerer Datei |
| Syntaxfehler | Code läuft gar nicht | Fehlende Klammer, falsches Einrücken |

### Halluzinationen in der Codegenerierung

Liu et al. (2024) entwickelten eine Taxonomie von 5 Halluzinationskategorien und den HalluCode-Benchmark:

| Kategorie | Beschreibung |
|-----------|--------------|
| Intent Conflicting | Code widerspricht der Anforderung |
| Context Inconsistency | Code widerspricht dem bereitgestellten Kontext |
| Context Repetition | Sinnlose Wiederholung von Kontextelementen |
| Dead Code | Unerreichbarer oder nutzloser Code |
| Knowledge Conflicting | Faktisch falsche Annahmen über APIs/Bibliotheken |

Zhang et al. (2024) erweiterten dies auf Repository-Level: Task Requirement Conflicts, Factual Knowledge Conflicts, Project Context Conflicts. Sie schlagen RAG-basierte Mitigation vor.

### Sicherheitslücken

Fu et al. (2024) analysierten 733 Copilot-generierte Code-Snippets: 29,5% Python und 24,2% JavaScript enthalten Sicherheitslücken über 43 CWE-Kategorien. Funktionaler Code kann unsicher sein. Für produktive Anwendungen ist Security-Review essentiell.

### Die Review-Checkliste

1. Läuft der Code überhaupt?
   - Ausführen mit Testdaten
   - Fehlermeldungen lesen und verstehen

2. Erfüllt er die Anforderungen?
   - Jedes Akzeptanzkriterium einzeln prüfen
   - Eingabe und Ausgabe vergleichen

3. Randfälle testen
   - Leere Eingabe
   - Sehr große Eingabe
   - Unerwartete Zeichen (Umlaute, Sonderzeichen)
   - Fehlende Dateien/Ordner

4. Macht die Logik Sinn?
   - Code lesen (siehe CL)
   - Bei Unklarheiten: LLM bitten, den Code zu erklären

### Validierung ohne Programmierkenntnisse

Wang und Zhu (2024) entwickelten Metamorphic Prompt Testing: Paraphrasierte Prompts generieren multiple Versionen; Konsistenzprüfung erkennt 75% fehlerhafter Programme bei nur 8,6% False Positives.

Fakhoury et al. (2024) zeigten mit TiCoder: Interaktiver Workflow mit Tests zur Intent-Klärung erreicht 45,97% Accuracy-Verbesserung in 5 Interaktionen.

Praktische Strategien:

Konsistenzprüfung: Denselben Prompt mehrfach stellen. Weichen die Lösungen stark ab, ist die Aufgabe vermutlich unterspezifiziert.

Erklärung einfordern:
> Erkläre Zeile für Zeile, was dieser Code tut und warum.

Widersprüche zwischen Erklärung und Code deuten auf Fehler hin.

Testfälle generieren lassen:
> Schreibe 5 Testfälle für dieses Skript. Beschreibe Eingabe und erwartete Ausgabe.

Dann manuell prüfen, ob die Testfälle sinnvoll sind. Yuan et al. (2024) evaluierten LLM-generierte Unit Tests: Tests haben oft Compilation-Errors, aber valide Tests erreichen vergleichbare Coverage wie menschliche Tests.

### Der Review-Zyklus

```
Code generieren -> Ausführen -> Fehler? -> Fehlermeldung + Code ans LLM -> Neuer Code -> wiederholen
```

```
Code generieren -> Ausführen -> Läuft -> Akzeptanzkriterien prüfen -> Nicht erfüllt? -> Präzisere Anforderung -> wiederholen
```

```
Code generieren -> Ausführen -> Läuft -> Akzeptanzkriterien erfüllt -> Fertig
```

### Praktisches Beispiel

Anforderung: Skript zählt Wörter pro Zeile in einer Textdatei.

Generierter Code:
```python
def count_words(filepath):
    with open(filepath) as f:
        return [len(line.split()) for line in f]
```

Review:

1. Läuft (bei existierender Datei)
2. Zählt Wörter pro Zeile
3. Randfall: Was bei nicht existierender Datei? Crash ohne hilfreiche Meldung
4. Randfall: Was bei Encoding-Problemen? Crash
5. Was zählt als "Wort"? `split()` trennt bei Whitespace

Feedback ans LLM:
> Der Code funktioniert, aber: (1) Keine Fehlerbehandlung für fehlende Dateien, (2) Kein explizites Encoding. Bitte ergänzen.

### Übung

Du hast diesen Code generieren lassen, der Duplikate in einer CSV finden soll:

```python
import pandas as pd

def find_duplicates(csv_path):
    df = pd.read_csv(csv_path)
    duplicates = df[df.duplicated()]
    return duplicates
```

1. Welche Akzeptanzkriterien würdest du prüfen?
2. Welche Randfälle könnten Probleme machen?
3. Was passiert, wenn pandas nicht installiert ist?
4. Formuliere eine Rückfrage ans LLM.

---

## Weiterführende Ressourcen

### Requirement Engineering

Wiegers, K. & Beatty, J. (2013). Software Requirements (3rd Edition). Microsoft Press.

Lucassen, G., Dalpiaz, F., van der Werf, J.M.E.M. & Brinkkemper, S. (2016). The Use and Effectiveness of User Stories in Practice. REFSQ 2016, pp. 205-222.

Vogelsang, A. & Fischbach, J. (2024). Using Large Language Models for Natural Language Processing Tasks in Requirements Engineering: A Systematic Guideline. arXiv:2402.13823.

Vogelsang, A. (2024). From Specifications to Prompts: On the Future of Generative LLMs in Requirements Engineering. IEEE Software, 41(2).

Zadenoori, M.A., Dabrowski, J., Alhoshan, W., Zhao, L. & Ferrari, A. (2025). Large Language Models for Requirements Engineering: A Systematic Literature Review. arXiv:2509.11446.

Zhao, L., Alhoshan, W., Ferrari, A. et al. (2021). Natural Language Processing for Requirements Engineering: A Systematic Mapping Study. ACM Computing Surveys, 54(3).

Requirements Engineering for Research Software: A Vision (2024). arXiv:2405.07781.

Ferreira, A.M.S., Rodrigues da Silva, A. & Paiva, A.C.R. (2022). Towards the Art of Writing Agile Requirements with User Stories, Acceptance Criteria, and Related Constructs. ACM/ResearchGate.

### Context Engineering

Gao, Y., Xiong, Y., Gao, X. et al. (2024). Retrieval-Augmented Generation for Large Language Models: A Survey. arXiv:2312.10997.

Zhao, S., Yang, Y., Wang, Z. et al. (2024). Retrieval Augmented Generation (RAG) and Beyond. arXiv:2409.14924 (Microsoft Research).

Huang, Y. & Huang, J. (2024). A Survey on Retrieval-Augmented Text Generation for Large Language Models. arXiv:2404.10981.

Peng, B., Zhu, Y., Liu, Y. et al. (2024). Graph Retrieval-Augmented Generation: A Survey. arXiv:2408.08921.

Liu, J., Zhu, D., Bai, Z. et al. (2025). A Comprehensive Survey on Long Context Language Modeling. arXiv:2503.17407.

Wang, X., Salmani, M., Omidi, P. et al. (2024). Beyond the Limits: A Survey of Techniques to Extend the Context Length in Large Language Models. arXiv:2402.02244.

Wu, Y., Gu, Y., Feng, X. et al. (2024). Extending Context Window of Large Language Models from a Distributional Perspective. EMNLP 2024.

Li, Z., Liu, Y., Su, Y. & Collier, N. (2024). Prompt Compression for Large Language Models: A Survey. arXiv:2410.12388.

Ge, T., Hu, J., Wang, L. et al. (2024). In-context Autoencoder for Context Compression in a Large Language Model. ICLR 2024.

Jiang, H., Wu, Q., Lin, C.-Y. et al. (2023-2024). LLMLingua / LongLLMLingua / LLMLingua-2. EMNLP 2023, ACL 2024 (Microsoft Research).

### Prompt Engineering

Schulhoff, S., Ilie, M., Balepur, N. et al. (2024). The Prompt Report: A Systematic Survey of Prompting Techniques. arXiv:2406.06608 (v6 Feb 2025).

Sahoo, P., Singh, A.K., Saha, S. et al. (2024). A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications. arXiv:2402.07927.

Vatsal, S. & Dubey, H. (2024). A Survey of Prompt Engineering Methods in Large Language Models for Different NLP Tasks. arXiv:2407.12994.

Wei, J., Wang, X., Schuurmans, D. et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. NeurIPS 2022, pp. 24824-24837.

Brown, T.B., Mann, B., Ryder, N. et al. (2020). Language Models are Few-Shot Learners. NeurIPS 2020.

Dong, Q., Li, L., Dai, D. et al. (2024). A Survey on In-context Learning. EMNLP 2024, pp. 1107-1128.

Zhou, Y., Muresanu, A.I., Han, Z. et al. (2023). Large Language Models Are Human-Level Prompt Engineers (APE). ICLR 2023.

Yang, C., Wang, X., Lu, Y. et al. (2024). Large Language Models as Optimizers (OPRO). ICLR 2024.

Jiang, J., Wang, F., Shen, J., Kim, S. & Kim, S. (2024). A Survey on Large Language Models for Code Generation. ACM TOSEM 2025, arXiv:2406.00515.

### Code Literacy

Letovsky, S. (1986). Cognitive Processes in Program Comprehension. Empirical Studies of Programmers, Ablex, pp. 58-79.

Pennington, N. (1987). Stimulus Structures and Mental Representations in Expert Comprehension of Computer Programs. Cognitive Psychology, 19(3), pp. 295-341.

Letovsky, S. & Soloway, E. (1986). Delocalized Plans and Program Comprehension. IEEE Software, 3(3), pp. 41-49.

Lopez, M., Whalley, J., Robbins, P. & Lister, R. (2008). Relationships Between Reading, Tracing and Writing Skills in Introductory Programming. ICER '08, ACM, pp. 101-112.

Xie, B., Loksa, D., Nelson, G.L. et al. (2019). A Theory of Instruction for Introductory Programming Skills. Computer Science Education, 29(2-3), pp. 205-253.

Roehm, T., Tiarks, R., Koschke, R. & Maalej, W. (2012). How Do Professional Developers Comprehend Software? ICSE '12, IEEE, pp. 255-265.

Storey, M.-A. (2006). Theories, Tools and Research Methods in Program Comprehension. Software Quality Journal, 14, pp. 187-208.

Aljehane, S.D., Sharif, B. & Maletic, J.I. (2023). Eye Movements and Cognitive Workload for Expertise Assessment. PACMHCI, 7, ETRA Article 166.

Takerngsaksiri, W., Prasertthum, S. et al. (2025). Code Readability in the Age of Large Language Models: An Industrial Case Study from Atlassian. arXiv:2501.11264.

Kazemitabaar, M., Hou, X., Henley, A., Ericson, B.J., Weintrop, D. & Grossman, T. (2023). How Novices Use LLM-Based Code Generators in Self-Paced Learning. Koli Calling '23, ACM.

Hermans, F. (2021). The Programmer's Brain. Manning Publications.

### Review

Tambon, F., Moradi Dakhel, A., Nikanjam, A., Khomh, F., Desmarais, M.C. & Antoniol, G. (2024). Bugs in Large Language Models Generated Code: An Empirical Study. Empirical Software Engineering, arXiv:2403.08937.

Huang, D., Qing, Y., Zhang, H., Peng, H. & Cui, H. (2024). What's Wrong with Your Code Generated by Large Language Models? arXiv:2407.06153.

Liu, F., Liu, Y., Shi, L. et al. (2024). Exploring and Evaluating Hallucinations in LLM-Powered Code Generation. arXiv:2404.00971.

Zhang, Z., Mu, F., Song, J., Chen, Z. & Hu, Y. (2024). LLM Hallucinations in Practical Code Generation: Phenomena, Mechanism, and Mitigation. PACMSE/FSE 2025, arXiv:2409.20550.

Liu, J., Xia, C.S., Wang, Y. & Zhang, L. (2023). Is Your Code Generated by ChatGPT Really Correct? Rigorous Evaluation of LLMs for Code Generation (EvalPlus). NeurIPS 2023.

Fu, Y., Liang, P., Liu, Y. et al. (2024). Security Weaknesses of Copilot-Generated Code in GitHub Projects. ACM TOSEM.

Yuan, Z., Liu, M., Chen, Y., Wang, W., Peng, X. & Lou, Y. (2024). Evaluating and Improving ChatGPT for Unit Test Generation. FSE 2024.

Wang, X. & Zhu, D. (2024). Validating LLM-Generated Programs with Metamorphic Prompt Testing. arXiv:2406.06864.

Fakhoury, S., Naik, A., Sakkas, G., Chakraborty, S. & Lahiri, S.K. (2024). LLM-Based Test-Driven Interactive Code Generation (TiCoder). ICSE 2024.

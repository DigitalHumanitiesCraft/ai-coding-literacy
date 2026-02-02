# Hands-On-Uebungen - Uebersicht

Diese Datei dokumentiert die Hands-On-Uebungen des Curriculums. Die Uebungen sind in /data/content.json integriert und werden im vertikalen Scroll-Layout gerendert.

## Verwandte Dokumente

- [Curriculum-Konzept](concept.md) - Kompetenzmodell und Lernziele
- [Workshop: Programmieren 2.0](workshops/programmieren-2-0.md) - Praktische Anwendung
- [Handouts](../../workshops/programmieren-2-0/handouts/) - Vorlagen und Cheatsheets

---

## Struktur

Jede Uebung gehoert zu einem der 7 Kompetenzbereiche (6 Hauptkapitel + EW als Querschnittskompetenz) und enthaelt:

- ID: Eindeutige Kennung (z.B. CT-1, RE-2)
- Titel: Kurzer, praegnanter Name
- Summary: Einordnung der Uebung
- Lernziele: Was wird gelernt?
- Exercise: Konkrete Aufgabe mit optionalem Code
- Reflexion: Fragen zur Nachbereitung

---

## Darstellung im vertikalen Layout

Die Uebungen erscheinen in der Uebungen-Sektion jedes Kapitels:

```
+-----------------------------------+
| Kapitel-Header                    |
+-----------------------------------+
| # Theorie                         |
|   Kernpunkte, Konzepte            |
+-----------------------------------+
| # Uebungen                        |
|   Uebung 1                        |
|   Uebung 2                        |
|   ...                             |
+-----------------------------------+
| # Ressourcen                      |
|   Links, Zitat                    |
+-----------------------------------+
```

Innerhalb der Uebungen-Sektion werden alle Uebungen eines Kapitels nacheinander angezeigt:
- Uebungstitel mit ID
- Zusammenfassung
- Lernziele als Liste
- Code-Block (falls vorhanden)
- Aufgabenstellung
- Reflexionsfragen

---

## Uebersicht nach Kompetenzbereich

### CT - Computational Thinking (3 Uebungen)

- CT-1: Code als Lesestoff - Python-Code lesen und verstehen
- CT-2: Probleme zerlegen - Dekomposition und Pseudocode
- CT-3: Workflow-Automatisierung - Batch-Verarbeitung verstehen

### RE - Requirement Engineering (2 Uebungen)

- RE-1: Anforderungen spezifizieren - Vom vagen Wunsch zur klaren Spezifikation
- RE-2: Akzeptanzkriterien testen - Testbare Erfolgskriterien definieren

Erweiterte Konzepte:
- User Stories schreiben
- INVEST-Kriterien anwenden
- Kernfragen-Methode

### CE - Context Engineering (2 Uebungen)

- CE-1: Wissen destillieren - Dokumentation komprimieren
- CE-2: Textanalyse mit Kontext - Domaenenspezifischen Kontext bereitstellen

Erweiterte Konzepte:
- RAG-Konzepte verstehen
- data.md als Wissensdokument
- Kontextstruktur aufbauen
- Komprimierungsstrategien

### PE - Prompt Engineering (2 Uebungen)

- PE-1: Prompt-Struktur - Strukturierte Anweisungen
- PE-2: Iteratives Prompting - Prompts verbessern durch Feedback

Erweiterte Konzepte:
- Zero-Shot vs. Few-Shot
- Chain-of-Thought anwenden
- Iterative Verfeinerung dokumentieren

### CL - Code Literacy (5 Uebungen)

- CL-1: Variablen und Datentypen - Daten speichern und verarbeiten
- CL-2: Kontrollstrukturen lesen - If-else und Schleifen
- CL-3: Funktionen und Bibliotheken - Wiederverwendbare Bausteine
- CL-4: Pandas fuer Datenverarbeitung - DataFrames verstehen
- CL-5: Visualisierung mit Matplotlib - Daten sichtbar machen

Erweiterte Konzepte:
- Skill-Hierarchie (Run -> Trace -> Explain -> Write)
- Warnsignale beim Codelesen

### RV - Review (3 Uebungen)

- RV-1: Fehlermeldungen lesen - Traceback interpretieren
- RV-2: Halluzinationen erkennen - Plausibilitaet validieren
- RV-3: Systematisches Review - Code gegen Anforderungen pruefen

Erweiterte Konzepte:
- Halluzinations-Taxonomie (5 Kategorien)
- Bug-Pattern-Erkennung
- Metamorphic Testing

### EW - Expertenwissen (Querschnittskompetenz)

Expertenwissen wird nicht als separates Kapitel behandelt, sondern ist in allen Uebungen implizit enthalten. Jede Uebung fordert die Anwendung von Domaenenwissen zur Einordnung und Bewertung von LLM-Ergebnissen.

---

## Workshop-spezifische Uebungen

Der Workshop "Programmieren 2.0" verwendet den Hans Gross Kriminalmuseum-Datensatz:

Hands-On 1: CSV-Analyse mit LLM
- Datei: workshop_objekte.csv (25 Objekte)
- Ziel: Fragen an Daten stellen, ohne Code zu schreiben
- Kompetenzen: CE, PE, RV

Hands-On 2: Website aus Daten bauen
- Daten: workshop_objekte.json
- Ziel: Interaktive Visualisierung erstellen
- Kompetenzen: CT, RE, CL, RV

---

## Fortgeschrittene Uebungen

Zusaetzlich zu den Grunduebungen gibt es vertiefende Hands-On-Projekte, die mehrere Kompetenzen kombinieren:

1. OCR-Korrektur historischer Texte (CL + RV)
2. Darwin Core Mapping (CE + RE)
3. Thesaurus-Mapping mit Regeln (PE + CL + RV)
4. Halluzinationsrisiken (RV + CL)
5. Batch-Verarbeitung (alle Kompetenzen)

---

## Technische Hinweise

- Code-Beispiele sind in Python oder JavaScript
- Alle Uebungen funktionieren mit beliebigen LLMs (Claude, ChatGPT, etc.)
- Fuer Python-Beispiele: Google Colab als Zero-Setup-Option

---

## Integration mit content.json

Die Uebungen werden in der JSON-Struktur so definiert:

```json
{
  "handsOn": [
    {
      "id": "CT-1",
      "title": "Code als Lesestoff",
      "summary": "Code als Text betrachten...",
      "goals": ["Grundstruktur erkennen", "..."],
      "exercise": {
        "description": "Betrachten Sie...",
        "code": "# Python-Code hier",
        "filename": "beispiel.py",
        "task": "Formulieren Sie..."
      },
      "reflection": ["Frage 1?", "Frage 2?"]
    }
  ]
}
```

Das JavaScript in app.js rendert diese Struktur in der Uebungen-Sektion des vertikalen Layouts.

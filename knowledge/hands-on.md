# Hands-On-Übungen – Übersicht

Diese Datei dokumentiert die Hands-On-Übungen des Curriculums. Die Übungen sind in `/data/content.json` integriert und werden im **EXECUTE-Panel** des Prompt-Loop UI gerendert.

---

## Struktur

Jede Übung gehört zu einem der 6 Kompetenzbereiche und enthält:

- **ID**: Eindeutige Kennung (z.B. CT-1, RE-2)
- **Titel**: Kurzer, prägnanter Name
- **Summary**: Einordnung der Übung
- **Lernziele**: Was wird gelernt?
- **Exercise**: Konkrete Aufgabe mit optionalem Code
- **Reflexion**: Fragen zur Nachbereitung

---

## Darstellung im Prompt-Loop UI

Die Übungen erscheinen im **EXECUTE-Panel** (Phase 3 des Loops):

```
●───●───●───○
INPUT → PROCESS → EXECUTE → OUTPUT
                    ↑
              Übungen hier
```

Innerhalb des EXECUTE-Panels werden alle Übungen eines Kapitels nacheinander angezeigt:
- Übungstitel mit ID
- Zusammenfassung
- Lernziele als Liste
- Code-Block (falls vorhanden)
- Aufgabenstellung
- Reflexionsfragen

---

## Übersicht nach Kompetenzbereich

### CT – Computational Thinking (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CT-1 | Code als Lesestoff | Python-Code lesen und verstehen |
| CT-2 | Probleme zerlegen | Dekomposition und Pseudocode |
| CT-3 | Workflow-Automatisierung | Batch-Verarbeitung verstehen |

### RE – Requirement Engineering (2 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| RE-1 | Anforderungen spezifizieren | Vom vagen Wunsch zur klaren Spezifikation |
| RE-2 | Akzeptanzkriterien testen | Testbare Erfolgskriterien definieren |

**Geplante Erweiterung aus grundlagen-kompetenzbereiche.md:**
- User Stories schreiben
- INVEST-Kriterien anwenden
- Kernfragen-Methode

### CE – Context Engineering (2 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CE-1 | Wissen destillieren | Dokumentation komprimieren |
| CE-2 | Textanalyse mit Kontext | Domänenspezifischen Kontext bereitstellen |

**Geplante Erweiterung:**
- RAG-Konzepte verstehen
- Kontextstruktur aufbauen
- Komprimierungsstrategien

### PE – Prompt Engineering (2 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| PE-1 | Prompt-Struktur | Strukturierte Anweisungen |
| PE-2 | Iteratives Prompting | Prompts verbessern durch Feedback |

**Geplante Erweiterung:**
- Zero-Shot vs. Few-Shot
- Chain-of-Thought anwenden
- Iterative Verfeinerung dokumentieren

### CL – Code Literacy (5 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CL-1 | Variablen und Datentypen | Daten speichern und verarbeiten |
| CL-2 | Kontrollstrukturen lesen | If-else und Schleifen |
| CL-3 | Funktionen und Bibliotheken | Wiederverwendbare Bausteine |
| CL-4 | Pandas für Datenverarbeitung | DataFrames verstehen |
| CL-5 | Visualisierung mit Matplotlib | Daten sichtbar machen |

**Geplante Erweiterung:**
- Skill-Hierarchie (Run → Trace → Explain → Write)
- Warnsignale beim Codelesen

### RV – Review (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| RV-1 | Fehlermeldungen lesen | Traceback interpretieren |
| RV-2 | Halluzinationen erkennen | Plausibilität validieren |
| RV-3 | Systematisches Review | Code gegen Anforderungen prüfen |

**Geplante Erweiterung:**
- Halluzinations-Taxonomie (5 Kategorien)
- Bug-Pattern-Erkennung
- Metamorphic Testing

---

## Fortgeschrittene Übungen

Zusätzlich zu den Grundübungen gibt es vertiefende Hands-On-Projekte, die mehrere Kompetenzen kombinieren:

1. **OCR-Korrektur historischer Texte** (CL + RV)
2. **Darwin Core Mapping** (CE + RE)
3. **Thesaurus-Mapping mit Regeln** (PE + CL + RV)
4. **Halluzinationsrisiken** (RV + CL)
5. **Batch-Verarbeitung** (alle Kompetenzen)

---

## Technische Hinweise

- Code-Beispiele sind in Python oder JavaScript
- Alle Übungen funktionieren mit beliebigen LLMs (Claude, ChatGPT, etc.)
- Für Python-Beispiele: Google Colab als Zero-Setup-Option

---

## Integration mit content.json

Die Übungen werden in der JSON-Struktur so definiert:

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

Das JavaScript in `app.js` rendert diese Struktur im EXECUTE-Panel des Prompt-Loop UI.

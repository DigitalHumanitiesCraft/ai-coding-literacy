# Hands-On-Übungen – Übersicht

Diese Datei dokumentiert die Hands-On-Übungen des Curriculums. Die Übungen sind jetzt direkt in `/data/content.json` integriert und werden auf der Website dynamisch gerendert.

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

## Übersicht nach Kompetenzbereich

### CT – Computational Thinking (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CT-1 | Code als Lesestoff | Python-Code lesen und verstehen |
| CT-2 | Probleme zerlegen | Dekomposition und Pseudocode |
| CT-3 | Workflow-Automatisierung | Bildverarbeitung mit Python |

### RE – Requirement Engineering (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| RE-1 | Anforderungen formulieren | Vom vagen Wunsch zur klaren Spezifikation |
| RE-2 | User Stories schreiben | Strukturierte Anforderungsdokumentation |
| RE-3 | Akzeptanzkriterien | Testbare Erfolgskriterien definieren |

### CE – Context Engineering (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CE-1 | Kontext bereitstellen | Relevante Informationen auswählen |
| CE-2 | Wissen destillieren | Dokumentation komprimieren |
| CE-3 | Few-Shot-Beispiele | Beispiele als Kontext nutzen |

### PE – Prompt Engineering (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| PE-1 | Prompting-Grundlagen | Strukturierte Anweisungen |
| PE-2 | Chain-of-Thought | Schritt-für-Schritt-Denken anregen |
| PE-3 | Iterative Verfeinerung | Prompts verbessern durch Feedback |

### CL – Code Literacy (3 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| CL-1 | Fehlermeldungen lesen | Traceback interpretieren |
| CL-2 | Datenfluss verfolgen | Variablen und Transformationen |
| CL-3 | Muster erkennen | Wiederverwendbare Codebausteine |

### RV – Review (2 Übungen)

| ID | Titel | Fokus |
|----|-------|-------|
| RV-1 | Systematisch testen | Code gegen Anforderungen prüfen |
| RV-2 | Halluzinationen erkennen | Plausibilität validieren |

---

## Fortgeschrittene Übungen

Zusätzlich zu den Grundübungen gibt es vertiefende Hands-On-Projekte, die mehrere Kompetenzen kombinieren:

1. **OCR-Korrektur historischer Texte** (CL + RV)
2. **Darwin Core Mapping** (CE + RE)
3. **Thesaurus-Mapping mit Regeln** (PE + CL + RV)
4. **Halluzinationsrisiken** (RV + CL)
5. **Batch-Verarbeitung** (alle Kompetenzen)

Diese sind ebenfalls in `content.json` als fortgeschrittene Übungen in den jeweiligen Kapiteln integriert.

---

## Technische Hinweise

- Code-Beispiele sind in Python oder JavaScript
- Alle Übungen funktionieren mit beliebigen LLMs (Claude, ChatGPT, etc.)
- Für Python-Beispiele: Google Colab als Zero-Setup-Option

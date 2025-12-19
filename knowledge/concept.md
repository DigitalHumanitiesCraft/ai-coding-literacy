# AI Coding Literacy

Ein Curriculum für LLM-gestützte Codeentwicklung in den Geisteswissenschaften.

---

## 1. Definition

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Die Tätigkeit verlagert sich von der Syntaxproduktion hin zur Formulierung von Anforderungen, zur systematischen Gestaltung des Kontexts, zur kritischen Bewertung generierter Outputs sowie zur iterativen Verfeinerung durch Dialog mit dem Modell.

Das Ziel ist nicht Softwareentwicklung im professionellen Sinn, sondern Scripting und Prototyping: kleine, funktionale Lösungen für konkrete Probleme.

---

## 2. Zielgruppe

Fachwissenschaftler·innen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich, die ohne Programmiervorerfahrung kleine, funktionale Tools für ihre Arbeit entwickeln wollen.

**Voraussetzungen:**
- Keine Programmiervorerfahrung erforderlich
- Grundlegende Computerkenntnisse (Dateisystem, Browser)
- Erfahrung im Umgang mit einem LLM (Chat-Interface)
- Konkrete Probleme aus dem eigenen Arbeitsbereich

---

## 3. Kompetenzmodell

Sechs Bereiche, die einen vollständigen Entwicklungszyklus abbilden. Jeder Bereich wird als eigenständiges Kapitel mit Theorie und Hands-On-Übungen behandelt:

### CT – Computational Thinking
Problemzerlegung, Mustererkennung und Abstraktion – unabhängig von konkreter Programmiersyntax. Das eigene Domänenwissen wird zum Ausgangspunkt: Probleme so strukturieren, dass sie in ausführbare Schritte übersetzt werden können.

### RE – Requirement Engineering
Präzise Formulierung von Anforderungen und Akzeptanzkriterien. Was soll das Tool tun? Was nicht? Welche Eingaben, welche Ausgaben? Woran erkennt man, dass es korrekt funktioniert?

### CE – Context Engineering
Systematische Gestaltung des Informationskontexts für das LLM. Auswahl, Kompression und Anordnung relevanter Informationen: Codebasis-Ausschnitte, Dokumentation, Beispiele, Projektkonventionen.

### PE – Prompt Engineering
Entwicklung und Optimierung von Eingabeaufforderungen. Auswahl von Prompting-Techniken, um LLMs effektiv zu steuern und die Qualität der generierten Ausgaben zu maximieren.

### CL – Code Literacy
Generierten Code lesen und verstehen: Ablauf nachvollziehen, Eingaben und Ausgaben identifizieren, Logik erkennen, Unstimmigkeiten bemerken. Setzt nicht voraus, denselben Code selbst schreiben zu können.

### RV – Review
Systematische Prüfung gegen die definierten Anforderungen. Validieren, ob der Code die Akzeptanzkriterien erfüllt. Lücken identifizieren. Den Entwicklungszyklus durch Iteration schließen.

---

## 4. Struktur

Das Curriculum ist als **Single-Page mit Endless Scroll** implementiert:

- 6 Kapitel (eines pro Kompetenzbereich)
- Jedes Kapitel enthält:
  - **Theorie**: Einführung, Kernpunkte, Konzeptdefinitionen
  - **Hands-On-Übungen**: 2-4 praktische Übungen pro Kapitel
  - **Ressourcen**: Weiterführende Links und Literatur
  - **Zitat**: Einordnendes Zitat aus der Fachliteratur

Alle Inhalte werden aus `/data/content.json` geladen und dynamisch gerendert.

---

## 5. Didaktischer Ansatz

**Vibe Coding als Einstieg:** Explorativer Zugang – beschreiben, generieren lassen, ausprobieren, im Dialog korrigieren. Niedrige Hemmschwelle, schnelle Erfolgserlebnisse.

**Von Vibe Coding zu informierter Praxis:** Mit wachsender Kompetenz kommen strukturiertere Methoden hinzu. Präzisere Anforderungen, systematischerer Kontext, kritischere Bewertung.

**Domänenwissen als Ausgangspunkt:** Die Übungen beginnen nicht mit Programmierkonzepten, sondern mit konkreten Problemen aus der jeweiligen Domäne.

---

## 6. Grenzen

- **Fehlertypen jenseits der Syntax:** Logikfehler, die syntaktisch korrekt aber semantisch falsch sind, werden ohne tieferes Domänenwissen oder systematisches Testen übersehen.
- **Instabilität:** Was heute funktioniert, kann durch Modell-Updates anders ausfallen. Teil der Kompetenz ist, damit umzugehen.
- **Komplexitätsgrenzen:** Ab einer gewissen Komplexität reicht AI Coding Literacy nicht aus. Die Kompetenz, diese Grenze zu erkennen, ist selbst Teil des Curriculums.

---

## 7. Technischer Rahmen

- **Editor:** Visual Studio Code
- **Sprachen:** Python für Datenverarbeitung; HTML, CSS, JavaScript für Web
- **LLM:** Tool-agnostisch. Demos mit Claude und Claude Code.
- **Alternative:** Jupyter Notebooks (Google Colab) für Nutzer ohne lokale Python-Installation

---

## Quellen

Dell'Acqua, F., McFowland, E., Mollick, E., et al. (2023). Navigating the Jagged Technological Frontier. Harvard Business School Working Paper.

European Union (2024). Regulation (EU) 2024/1689 (AI Act).

Hermans, F. (2021). The Programmer's Brain. Manning Publications.

Karpathy, A. (2025). Vibe Coding. https://x.com/karpathy/status/1886192184808149383

Long, D., & Magerko, B. (2020). What is AI Literacy? CHI 2020.

Mei, L., et al. (2025). A Survey of Context Engineering for Large Language Models. arXiv:2507.13334.

Mollick, E. (2024). Co-Intelligence: Living and Working with AI. Portfolio.

Rushkoff, D. (2010). Program or Be Programmed. OR Books.

Schulhoff, S., et al. (2025). The Prompt Report. arXiv:2406.06608.

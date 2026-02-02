# AI Coding Literacy

Ein Curriculum fuer LLM-gestuetzte Codeentwicklung in den Geisteswissenschaften.

## Verwandte Dokumente

- [Workshop: Programmieren 2.0](workshops/programmieren-2-0.md) - Praktische Anwendung des Curriculums
- [Hands-On Uebungen](hands-on.md) - Katalog aller Uebungen
- [Design System](design.md) - Visuelles Konzept
- [Implementation Plan](implementation-plan.md) - Technische Architektur

---

## 1. Definition

AI Coding Literacy bezeichnet die Kompetenz, Large Language Models als Werkzeuge zur Codeentwicklung einzusetzen. Die Taetigkeit verlagert sich von der Syntaxproduktion hin zur Formulierung von Anforderungen, zur systematischen Gestaltung des Kontexts, zur kritischen Bewertung generierter Outputs sowie zur iterativen Verfeinerung durch Dialog mit dem Modell.

Das Ziel ist nicht Softwareentwicklung im professionellen Sinn, sondern Scripting und Prototyping: kleine, funktionale Loesungen fuer konkrete Probleme.

---

## 2. Zielgruppe

Fachwissenschaftler und Fachwissenschaftlerinnen aus dem geisteswissenschaftlich-kulturwissenschaftlichen Bereich, die ohne Programmiervorerfahrung kleine, funktionale Tools fuer ihre Arbeit entwickeln wollen.

Voraussetzungen:
- Keine Programmiervorerfahrung erforderlich
- Grundlegende Computerkenntnisse (Dateisystem, Browser)
- Erfahrung im Umgang mit einem LLM (Chat-Interface)
- Konkrete Probleme aus dem eigenen Arbeitsbereich

---

## 3. Kompetenzmodell

Sieben Bereiche, die einen vollstaendigen Entwicklungszyklus abbilden. Jeder Bereich wird als eigenstaendiges Kapitel mit Theorie und Hands-On-Uebungen behandelt:

### CT - Computational Thinking
Problemzerlegung, Mustererkennung und Abstraktion - unabhaengig von konkreter Programmiersyntax. Das eigene Domaenenwissen wird zum Ausgangspunkt: Probleme so strukturieren, dass sie in ausfuehrbare Schritte uebersetzt werden koennen.

### RE - Requirement Engineering
Praezise Formulierung von Anforderungen und Akzeptanzkriterien. Was soll das Tool tun? Was nicht? Welche Eingaben, welche Ausgaben? Woran erkennt man, dass es korrekt funktioniert?

### CE - Context Engineering
Systematische Gestaltung des Informationskontexts fuer das LLM. Auswahl, Kompression und Anordnung relevanter Informationen: Codebasis-Ausschnitte, Dokumentation, Beispiele, Projektkonventionen. Umfasst Konzepte wie data.md (komprimierte Wissensdokumente) und die Optimierung des Kontextfensters.

### PE - Prompt Engineering
Entwicklung und Optimierung von Eingabeaufforderungen. Auswahl von Prompting-Techniken, um LLMs effektiv zu steuern und die Qualitaet der generierten Ausgaben zu maximieren.

### CL - Code Literacy
Generierten Code lesen und verstehen: Ablauf nachvollziehen, Eingaben und Ausgaben identifizieren, Logik erkennen, Unstimmigkeiten bemerken. Setzt nicht voraus, denselben Code selbst schreiben zu koennen.

### RV - Review
Systematische Pruefung gegen die definierten Anforderungen. Validieren, ob der Code die Akzeptanzkriterien erfuellt. Luecken identifizieren. Den Entwicklungszyklus durch Iteration schliessen.

### EW - Expertenwissen
Das Fachwissen aus der eigenen Domaene, das zur Einordnung und Bewertung von LLM-Ergebnissen notwendig ist. LLMs koennen Domaenenexpertise nicht ersetzen - sie koennen sie nur unterstuetzen und erweitern.

---

## 4. Struktur

Das Curriculum ist als vertikales Scroll-Layout implementiert:

- 6 Hauptkapitel (CT, RE, CE, PE, CL, RV) plus EW als Querschnittskompetenz
- Jedes Kapitel enthaelt:
  - Theorie: Einfuehrung, Kernpunkte, Konzeptdefinitionen
  - Hands-On-Uebungen: 2-4 praktische Uebungen pro Kapitel
  - Ressourcen: Weiterfuehrende Links und Literatur
  - Zitat: Einordnendes Zitat aus der Fachliteratur

Alle Inhalte werden aus /data/content.json geladen und dynamisch gerendert.

---

## 5. Didaktischer Ansatz

Vibe Coding als Einstieg: Explorativer Zugang - beschreiben, generieren lassen, ausprobieren, im Dialog korrigieren. Niedrige Hemmschwelle, schnelle Erfolgserlebnisse.

Von Vibe Coding zu informierter Praxis: Mit wachsender Kompetenz kommen strukturiertere Methoden hinzu. Praezisere Anforderungen, systematischerer Kontext, kritischere Bewertung.

Domaenenwissen als Ausgangspunkt: Die Uebungen beginnen nicht mit Programmierkonzepten, sondern mit konkreten Problemen aus der jeweiligen Domaene.

---

## 6. Grenzen

- Fehlertypen jenseits der Syntax: Logikfehler, die syntaktisch korrekt aber semantisch falsch sind, werden ohne tieferes Domaenenwissen oder systematisches Testen uebersehen.
- Instabilitaet: Was heute funktioniert, kann durch Modell-Updates anders ausfallen. Teil der Kompetenz ist, damit umzugehen.
- Komplexitaetsgrenzen: Ab einer gewissen Komplexitaet reicht AI Coding Literacy nicht aus. Die Kompetenz, diese Grenze zu erkennen, ist selbst Teil des Curriculums.

---

## 7. Technischer Rahmen

- Editor: Visual Studio Code
- Sprachen: Python fuer Datenverarbeitung; HTML, CSS, JavaScript fuer Web
- LLM: Tool-agnostisch. Demos mit Claude und Claude Code.
- Alternative: Jupyter Notebooks (Google Colab) fuer Nutzer ohne lokale Python-Installation

---

## 8. Workshop-Materialien

Der Workshop "Programmieren 2.0" ist das autoritative Dokument fuer praktische Anwendung:

- Wissensdokument: /knowledge/workshops/programmieren-2-0.md
- Python-Beispiele: /workshops/programmieren-2-0/python/
- Web-Beispiele: /workshops/programmieren-2-0/web/
- Handouts: /workshops/programmieren-2-0/handouts/
- Datensatz: Hans Gross Kriminalmuseum (25 Workshop-Objekte, 3892 Gesamteintraege)

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

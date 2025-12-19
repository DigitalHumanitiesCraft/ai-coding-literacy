# Computational Thinking – Die Grundlage

Computational Thinking ist die Fähigkeit, Probleme so zu strukturieren, dass sie (von Menschen oder Maschinen) systematisch gelöst werden können. Für die Arbeit mit LLMs ist das **die wichtigste Grundkompetenz**.

---

## Die 4 Kernelemente

| Element | Bedeutung | Beispiel |
|---------|-----------|----------|
| **Dekomposition** | Großes Problem in kleinere Teile zerlegen | "Katalog digitalisieren" → Scannen → OCR → Korrektur → Strukturieren |
| **Mustererkennung** | Wiederkehrende Strukturen identifizieren | "Alle Einträge haben: Titel, Datum, Material" |
| **Abstraktion** | Unwichtiges weglassen, Kern erfassen | "Egal ob Gemälde oder Skulptur – beide haben Inventarnummer" |
| **Algorithmus** | Schrittweise Anleitung formulieren | "1. Öffne Datei, 2. Lies Zeile, 3. Extrahiere Titel..." |

---

## Praktisches Beispiel

**Problem:** Du hast eine Liste von 500 Museumsobjekten in einer Excel-Tabelle und möchtest eine einfache Webseite erstellen, die diese durchsuchbar macht.

### Ohne Computational Thinking

> "Mach mir eine Webseite für meine Museumsdaten"

### Mit Computational Thinking (Dekomposition)

1. **Daten verstehen:** Welche Spalten gibt es? (Inventarnr, Titel, Datierung, Material)
2. **Daten exportieren:** Excel → CSV umwandeln
3. **Daten laden:** CSV in JavaScript einlesen
4. **Daten anzeigen:** HTML-Tabelle generieren
5. **Suche hinzufügen:** Textfeld das Tabelle filtert

---

## Warum ist das für LLMs wichtig?

LLMs arbeiten am besten, wenn sie **klare, strukturierte Aufgaben** bekommen. Ein vages "mach mir was Schönes" führt zu unvorhersehbaren Ergebnissen.

Die Dekomposition hilft dir:
- **Bessere Prompts zu schreiben** – jeder Teilschritt wird ein präziser Prompt
- **Fehler zu lokalisieren** – wenn etwas nicht funktioniert, weißt du welcher Schritt
- **Iterativ zu verbessern** – ein Teilschritt nach dem anderen optimieren

---

## Übung: Zerlege dein eigenes Problem

Nimm ein konkretes Problem aus deinem Arbeitsbereich und beantworte diese Fragen:

1. **Was ist das Endergebnis?** (Output)
2. **Was habe ich als Ausgangsmaterial?** (Input)
3. **Welche Schritte liegen dazwischen?** (Prozess)
4. **Gibt es wiederkehrende Muster?** (Mustererkennung)
5. **Was kann ich weglassen?** (Abstraktion)

---

## Weiterführende Ressourcen

- Wing, J. M. (2006). Computational Thinking. *Communications of the ACM*, 49(3), 33-35.
- Denning, P. J., & Tedre, M. (2019). *Computational Thinking*. MIT Press.

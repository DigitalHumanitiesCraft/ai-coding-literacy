---
title: Eigene Aufgabe
subtitle: Block 7
author: Dr. Christopher Pollin
competency: RE
---

# Eigene Aufgabe

Block 7 · Workshop Programmieren 2.0

---

# Lernziel

Gelerntes selbstständig auf eine Aufgabe anwenden.

---

# Was ihr heute gelernt habt

| Block | Was ihr könnt |
|-------|---------------|
| 2 | Anforderungen präzise formulieren |
| 3 | [[Python]]-Skripte mit [[LLM]] erstellen |
| 4 | Webseiten mit [[LLM]] erstellen |
| 5 | [[API]]-Calls automatisieren |
| 6 | Grenzen erkennen |

**Jetzt kombiniert ihr das!**

---

# Zwei Optionen

**Option A:** Eigene Daten

**Option B:** Vorgegebene Aufgaben

---

# Option A: Eigene Daten

Ihr habt Daten mitgebracht?

1. Anforderung formulieren ([[Context Engineering]]!)
2. Mit [[LLM]] Code generieren
3. Testen und iterieren

Ich unterstütze bei der Anforderungsformulierung.

---

# Option B: Vorgegebene Aufgaben

Drei Schwierigkeitsstufen:

1. **Erweiterte Objektsuche** (Einfach)
2. **Datenbereinigung** (Mittel)
3. **Statistik-Dashboard** (Fortgeschritten)

---

# Aufgabe B1: Erweiterte Objektsuche

**Ziel:** Webseite mit mehreren Filterkriterien

- Suchfeld für Titel (haben wir schon)
- **Neu:** Dropdown für Typ-Filter
- **Neu:** Jahreszahl-Bereich (von/bis)

**Nutzt:** Block 4 (Webentwicklung)

---

# Aufgabe B1: [[Prompt]]-Idee

> Erweitere die bestehende Objektsuche.
>
> Füge hinzu:
> - Dropdown mit allen Typen aus der [[JSON]]
> - Zwei Eingabefelder für Jahr (von/bis)
>
> Alle Filter sollen kombinierbar sein.

---

# Aufgabe B2: Datenbereinigung

**Ziel:** [[Python]]-Skript, das description-Feld aufteilt

Aus:
```
Type: Waffen | Jahr 1924 | Material: Stahl
```

Machen:
```csv
type,year,material
Waffen,1924,Stahl
```

**Nutzt:** Block 3 ([[Python]])

---

# Aufgabe B2: [[Prompt]]-Idee

> Schreibe ein [[Python]]-Skript, das `workshop_objekte.csv` liest.
>
> Das description-Feld enthält: `Type: X | Jahr YYYY | Material: Z`
>
> Extrahiere diese Werte in separate Spalten.
> Speichere als neue [[CSV]] `objekte_bereinigt.csv`.

---

# Aufgabe B3: Statistik-Dashboard

**Ziel:** Visualisierung der Daten

- Balkendiagramm: Objekte pro Typ
- Zeitstrahl: Objekte nach Jahr
- Tabelle: Material-Übersicht

**Nutzt:** Block 4 + externe Bibliothek (Chart.js)

---

# Über Chart.js

Chart.js ist eine [[JavaScript]]-Bibliothek für Diagramme.

Das [[LLM]] **kennt** Chart.js und kann Code dafür generieren!

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

# Aufgabe B3: [[Prompt]]-Idee

> Erstelle eine [[HTML]]-Seite mit Chart.js.
>
> Zeige:
> - Balkendiagramm: Anzahl Objekte pro Typ
> - Liniendiagramm: Objekte pro Jahr
>
> Lade Daten aus `workshop_objekte.json`.

---

# Zeitplan

**40 Minuten total:**

- ~10 min: Aufgabe wählen + Anforderung formulieren
- ~25 min: Code generieren + testen + iterieren
- ~5 min: Ergebnisse teilen

---

# Tipps

- **Klein anfangen** – erst Grundfunktion, dann erweitern
- **Testen** – nach jeder Änderung ausführen
- **Fehler nutzen** – Fehlermeldung = Information
- **Fragen stellen** – dafür bin ich da

---

# Checkliste für eure Anforderung

- [ ] Datenquelle genannt?
- [ ] Beispiel gezeigt?
- [ ] Gewünschtes Ergebnis beschrieben?
- [ ] Einschränkungen genannt?
- [ ] Technologie angegeben? ([[Python]]/Web)

---

# Los geht's!

40 Minuten Arbeitszeit

Ich komme rum und helfe.

---

# Zwischenstand (nach 20 min)

Kurze Runde:

- Wer arbeitet woran?
- Wo hakt es?
- Braucht jemand Hilfe?

---

# Abschluss Block 7

- Wer möchte zeigen, was entstanden ist?
- Was hat funktioniert?
- Was war schwierig?

---

# Weiter zu Block 8

Dokumentation und Abschluss

Fast geschafft!

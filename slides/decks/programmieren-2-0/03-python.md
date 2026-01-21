---
title: Python mit LLM-Unterstützung
subtitle: Block 3
author: Dr. Christopher Pollin
competency: CL
---

# Python mit LLM-Unterstützung

Block 3 · Workshop Programmieren 2.0

---

# Kammer 2: Code generieren

Der Nautilus baut die **zweite Kammer**.

Aus Anforderung wird Code.

---

# Lernziel

Ein [[Python]]-Skript mit [[LLM]] erstellen, das die Kriminalmuseum-Daten verarbeitet.

**Und:** Fehlermeldungen an das [[LLM]] übergeben können.

---

# Der Workflow

1. `.py`-Datei erstellen
2. Code einfügen
3. Speichern
4. Im [[Terminal]]: `python datei.py`

---

# Iterativ arbeiten

```
Generieren → Ausführen → Fehler?
    ↓
An LLM geben → Korrigieren → Erneut ausführen
```

Das ist normal. Das ist der Prozess.

**Fehler sind Information, nicht Kritik!**

---

# Was wir erkennen lernen

- **[[Import]]** – Bibliotheken laden
- **[[Variable]]** – Daten speichern
- **[[Schleife]]** – Wiederholen
- **[[Bedingung]]** – Entscheiden

---

# Code-Struktur: [[Import]]

```python
import csv
```

Am Anfang der Datei. Lädt Funktionalität.

`csv` = Standardbibliothek für [[CSV]]-Dateien.

---

# Code-Struktur: [[Variable]]

```python
dateiname = "workshop_objekte.csv"
anzahl = 0
typen = []
```

Speichern Werte für später.

---

# Code-Struktur: [[Schleife]]

```python
for zeile in daten:
    print(zeile)
```

Wiederholt etwas für jedes Element.

---

# Code-Struktur: [[Bedingung]]

```python
if typ not in typen:
    typen.append(typ)
```

Macht etwas nur wenn [[Bedingung]] erfüllt.

---

# Hands-On: Aufgabe

Erstellt ein Skript, das:

1. Die **Anzahl der Objekte** ausgibt
2. Alle **Typen** extrahiert und auflistet
3. Das **älteste und jüngste Objekt** findet

---

# Eure Daten

```
workshop_objekte.csv
```

| id | title | type | year | material |
|----|-------|------|------|----------|
| o:km.8009 | Gummiknüppel | Waffen | 1924 | Leder |
| o:km.8022 | Schädeldecke | Forensische Medizin | 1924 | Knochen |
| ... | ... | ... | ... | ... |

---

# [[Prompt]]-Beispiel

> Ich möchte ein [[Python]]-Skript, das eine [[CSV]]-Datei analysiert.
>
> **Meine Daten:** `workshop_objekte.csv` mit Spalten: id, title, type, year, material
>
> **Ausgabe:** Anzahl Objekte, Liste aller Typen, ältestes/jüngstes Objekt
>
> **Anforderung:** Nur Standardbibliotheken (csv), UTF-8

---

# Typische Stolpersteine

- [[CSV]] nicht im richtigen Ordner
- [[Encoding]]-Probleme bei Umlauten
- [[LLM]] schlägt `pandas` vor (nicht installiert)

**Lösung:** Fehlermeldung kopieren → ans [[LLM]] geben

---

# Fehler 1: [[FileNotFoundError]]

```
FileNotFoundError: [Errno 2] No such file or directory
```

→ Datei ist nicht da, wo [[Python]] sucht

**Lösung:** Datei in denselben Ordner wie das Skript

---

# Fehler 2: [[UnicodeDecodeError]]

```
UnicodeDecodeError: 'charmap' codec can't decode
```

→ Umlaute werden falsch gelesen

**Lösung:** `encoding='utf-8'` beim Öffnen angeben

```python
with open('datei.csv', encoding='utf-8') as f:
```

---

# Fehler 3: Nicht installierte Bibliothek

```python
import pandas as pd  # ← Nicht installiert!
```

```
ModuleNotFoundError: No module named 'pandas'
```

**Lösung:** Dem [[LLM]] sagen: "Verwende nur csv, kein pandas"

---

# [[Debugging]]-Workflow

1. Fehler lesen (rot = wichtig!)
2. Zeile identifizieren
3. Fehlermeldung + Code an [[LLM]] geben
4. Korrektur einfügen
5. Erneut ausführen

---

# Live-Demo

Wechsel zu [[VS Code]]

Falls Demo nicht klappt – die Schritte sind:
1. Neue Datei `analyse.py`
2. [[Prompt]] an Claude mit Anforderung
3. Code einfügen, speichern
4. `python analyse.py` im [[Terminal]]

---

# Verständnis-Check

Schaut euch die Ausgabe eures Skripts an:

- Wie viele Objekte wurden gezählt?
- Welche Typen wurden gefunden?
- Stimmt das mit der [[CSV]] überein?

**Wenn nicht:** Was ist schiefgelaufen?

---

# Zusammenfassung

- [[Python]]-Skripte mit [[LLM]] erstellen ist **iterativ**
- Fehler sind **normal** und Teil des Prozesses
- Fehlermeldungen sind **Information**, nicht Kritik
- Das [[LLM]] kann beim [[Debugging]] helfen

---

# Kammer 2 fertig!

Ihr habt:
- Code aus Anforderung generiert
- Fehler erkannt und behoben
- Code-Strukturen kennengelernt

---

# Pause!

**15 Minuten**

Danach: Kammer 3 – Webentwicklung

(Aus Daten wird Darstellung)

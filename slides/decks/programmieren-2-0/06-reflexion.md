---
title: Reflexion – Limitationen
subtitle: Block 6
author: Dr. Christopher Pollin
competency: RV
---

# Reflexion – Limitationen

Block 6 · Workshop Programmieren 2.0

---

# Kammer 5: Prüfung

Der Nautilus prüft seine Kammern.

Nicht alles, was gebaut wurde, ist stabil.

---

# Lernziel

Typische Fehlerklassen von [[LLM]]-generiertem Code benennen.

Wissen, wann professionelle Unterstützung nötig ist.

---

# Die wichtigste Erkenntnis

[[LLM]]-generierter Code **funktioniert oft** –

aber nicht immer **korrekt**, **sicher** oder **robust**.

---

# Vier Fehlerklassen

1. [[Halluzination]] – Erfundene Funktionen
2. [[Randfälle]] – Funktioniert meist, aber nicht immer
3. Sicherheitsprobleme – Fehlende Validierung
4. Überkomplexität – Framework statt einfacher Lösung

---

# Fehlerklasse 1: [[Halluzination]]

Das [[LLM]] erfindet [[Funktion]]en, die nicht existieren.

```python
import pandas as pd
df.auto_clean_data()  # ← Gibt es nicht!
```

**Erkennen:** Fehlermeldung `AttributeError` oder `no attribute`

---

# Fehlerklasse 2: [[Randfälle]]

Funktioniert meistens, aber nicht immer.

```python
# Was wenn year leer ist?
year = int(row["year"])  # ← Crash bei ""
```

**Erkennen:** Funktioniert mit Testdaten, scheitert mit echten Daten

---

# Fehlerklasse 3: Sicherheitsprobleme

Fehlende Validierung, unsichere Pfade.

```python
# User-Input direkt in Dateipfad
filename = input("Dateiname: ")
open(filename)  # ← Was wenn "../../../etc/passwd"?
```

**Erkennen:** Schwer ohne Sicherheitswissen – deshalb Profis fragen!

---

# Fehlerklasse 4: Überkomplexität

Framework statt einfacher Lösung.

```python
# LLM schlägt vor:
from flask import Flask
app = Flask(__name__)
# ... 50 Zeilen für simple Aufgabe

# Besser wäre:
print(ergebnis)
```

**Erkennen:** Code fühlt sich "zu viel" an für die Aufgabe

---

# Wann Profis fragen?

Fünf Warnsignale – mit konkreten Beispielen:

---

# 1. Sicherheitsanforderungen

**Beispiele:**
- Personendaten (Namen, Adressen)
- Login-System für Website
- Öffentlich zugängliche Anwendung

**Konkretes Szenario:**
> "Meine Webseite zeigt Besucherdaten an – jeder mit dem Link kann sie sehen."

→ **Professionelle Sicherheitsprüfung!**

---

# 2. Skalierung

**Beispiele:**
- Mehr als 10.000 Datensätze
- Viele gleichzeitige Nutzer
- Tägliche/stündliche Ausführung

**Konkretes Szenario:**
> "Mein Skript für 25 Objekte dauert 2 Sekunden. Für 3.000 Objekte?"

→ **Architektur-Expertise nötig**

---

# 3. Systemintegration

**Beispiele:**
- Datenbank-Anbindung
- Bestehende IT-Infrastruktur
- Automatische Backups

**Konkretes Szenario:**
> "Ich möchte die Ergebnisse direkt in unsere Museums-Datenbank schreiben."

→ **IT-Abteilung einbinden**

---

# 4. Wartbarkeit

**Beispiele:**
- Code soll jahrelang laufen
- Andere sollen Code verstehen
- Regelmäßige Updates nötig

**Konkretes Szenario:**
> "Ich gehe in Pension, aber das Skript soll weiterlaufen."

→ **Saubere Dokumentation, ggf. Entwickler**

---

# 5. Rechtliche Anforderungen

**Beispiele:**
- Barrierefreiheit (WCAG)
- Datenschutz (DSGVO)
- Archivierungsvorschriften

**Konkretes Szenario:**
> "Unsere Website muss barrierefrei sein – gesetzliche Vorgabe."

→ **Rechtsberatung + Fachentwicklung**

---

# Hands-On: Reflexion

Denkt an eure Ergebnisse aus Block 3, 4, 5:

- Was hat **nicht** auf Anhieb funktioniert?
- Welche **Art von Fehler** war es?
- Wie wurde er **behoben**?

---

# Diskussion

Wer möchte ein Beispiel teilen?

- Was war der Fehler?
- Wie habt ihr ihn erkannt?
- Was hat geholfen?

---

# [[Informed Vibe Coding]]

Nicht blindes Ausprobieren, sondern:

- **Ergebnisse einordnen** können
- **Fehler erkennen** können
- **Grenzen kennen** und respektieren

---

# Der Nautilus nochmal

Kammer für Kammer.

Manchmal braucht man Hilfe beim Bau.

**Das ist okay.** Das ist sogar professionell!

---

# Zusammenfassung

- [[LLM]]-Code hat typische Fehlerklassen
- Sicherheit, Skalierung, Integration = Profis
- Eigene Grenzen kennen ist eine Stärke
- [[Informed Vibe Coding]] = bewusstes Arbeiten

---

# Weiter zu Block 7

Eigene Aufgabe

Jetzt seid ihr dran!

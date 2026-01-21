---
title: Context Engineering
subtitle: Block 2
author: Dr. Christopher Pollin
competency: CE
---

# Context Engineering

Block 2 · Workshop Programmieren 2.0

---

# Kammer 1: Kontext

Der Nautilus baut die **erste Kammer**.

Ohne guten Kontext → kein guter Output.

---

# Lernziel

Verstehen, dass **Output-Qualität** von **Kontext-Qualität** abhängt.

Drei Elemente guten Kontexts benennen können.

---

# Was ist ein [[Context Window]]?

Der "Arbeitsspeicher" eines [[LLM]].

**Alles, was das Modell während einer Konversation "sieht".**

- Begrenzte Größe
- Was nicht drin ist, existiert nicht
- Jede neue Nachricht verbraucht Platz

---

# Das Problem

```
Prompt: "Mach was Schönes mit meinen Daten"

LLM: ???
```

Das [[LLM]] kennt eure Daten nicht.
Es weiß nicht, was "schön" für euch bedeutet.

---

# Die Lösung: Kontext geben

Drei Elemente guten Kontexts:

1. **Datenbeispiel** – Zeigen, nicht beschreiben
2. **Erwartetes Ergebnis** – Konkret, nicht vage
3. **Constraints** – Einschränkungen benennen

---

# Element 1: Datenbeispiel

**Schlecht:**
> "Ich habe eine [[CSV]] mit Museumsobjekten"

**Gut:**
> "Meine [[CSV]] hat diese Spalten: id, title, type, year, material. Hier ein Beispiel:
> `o:km.8009,Gummiknüppel,Waffen,1924,Leder`"

---

# Element 2: Erwartetes Ergebnis

**Schlecht:**
> "Zeig mir die Daten übersichtlich an"

**Gut:**
> "Erstelle eine [[HTML]]-Seite mit einer Karte pro Objekt. Jede Karte zeigt: Titel (fett), Typ, Jahr, Material."

---

# Element 3: Constraints

**Schlecht:**
> "Mach es einfach"

**Gut:**
> "Verwende nur Standardbibliotheken (csv, json). Keine externen Pakete wie pandas. UTF-8 [[Encoding]]."

---

# Demonstration: Vager [[Prompt]]

```
Schreib mir ein Python-Skript für meine
Museumsdaten.
```

→ Was wird das [[LLM]] tun?

---

# Demonstration: Präziser [[Prompt]]

```
Ich habe eine CSV-Datei `workshop_objekte.csv`
mit den Spalten: id, title, type, year, material

Beispielzeile:
o:km.8009,Gummiknüppel,Waffen,1924,Leder

Erstelle ein Python-Skript, das:
1. Die Anzahl der Objekte ausgibt
2. Alle verschiedenen Typen auflistet

Verwende nur die csv-Standardbibliothek.
```

---

# Der Unterschied

| Vage | Präzise |
|------|---------|
| "Museumsdaten" | Konkrete Spalten + Beispiel |
| "Python-Skript" | Spezifische Aufgaben |
| (keine Einschränkung) | Nur csv-Bibliothek |

---

# Das ist auch Requirement Engineering!

Guter Kontext = Gute Anforderung

- **Was** soll passieren? (Ergebnis)
- **Womit** wird gearbeitet? (Daten)
- **Welche Regeln** gelten? (Constraints)

---

# Hands-On: Eure Anforderung

Formuliert eine vollständige Anforderung für die Kriminalmuseum-[[CSV]].

**Noch keinen Code generieren!**

Nur die Anforderung formulieren.

---

# Checkliste für eure Anforderung

- [ ] Dateiname genannt?
- [ ] Spalten aufgelistet?
- [ ] Beispielzeile gezeigt?
- [ ] Konkrete Ausgabe beschrieben?
- [ ] Einschränkungen genannt?

---

# Typische Stolpersteine

- Zu vage ("mach was Schönes")
- Datenbeispiel vergessen
- Ergebnis nicht konkret
- Annahmen nicht explizit gemacht

---

# Merksatz

> "Das [[LLM]] kann nicht raten, was du willst. Zeig es ihm."

---

# Kammer 1 fertig!

Ihr habt gelernt:
- Was ein [[Context Window]] ist
- Drei Elemente guten Kontexts
- Anforderungen präzise formulieren

---

# Weiter zu Kammer 2

Block 3: **[[Python]] mit LLM-Unterstützung**

Jetzt setzen wir eure Anforderungen in Code um!

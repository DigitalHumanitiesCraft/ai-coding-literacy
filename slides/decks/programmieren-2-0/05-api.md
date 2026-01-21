---
title: LLM-API programmatisch nutzen
subtitle: Block 5
author: Dr. Christopher Pollin
competency: CL
---

# LLM-API programmatisch nutzen

Block 5 · Workshop Programmieren 2.0

---

# Kammer 4: Automatisierung

Der Nautilus baut die **vierte Kammer**.

Von einzelnen Anfragen zu automatisierter Verarbeitung.

---

# Lernziel

Verstehen, wie man [[LLM]]s über [[API]] anspricht.

Vorbereitete Skripte ausführen und Ergebnisse interpretieren.

---

# Chat vs. [[API]]: Wann was?

| Chat-Interface | [[API]] |
|----------------|---------|
| Interaktiv | Automatisiert |
| Einzelne Anfragen | Batch-Verarbeitung |
| Einfach zu testen | Skalierbar |
| Gut für: Lernen | Gut für: Produktion |

---

# Warum [[API]] statt Chat?

**Im Chat:**
Ein Objekt nach dem anderen eingeben. Manuell. Langsam.

**Mit [[API]]:**
Hunderte Objekte in einer [[Schleife]]. Automatisch. Schnell.

---

# Wie funktioniert ein [[API]]-Call?

```
Python-Skript
    ↓
HTTP-Request an Anthropic
    ↓
Claude verarbeitet
    ↓
Antwort zurück
    ↓
Weiterverarbeitung
```

---

# Was wir verwenden

| Parameter | Wert |
|-----------|------|
| Modell | Claude Haiku |
| Input-Kosten | ~0.25$ / Million [[Token]] |
| Output-Kosten | ~1.25$ / Million [[Token]] |

**Sehr günstig für unsere Zwecke!**

---

# [[API-Key]]

Der Schlüssel zur [[API]].

- Wird mündlich geteilt
- In Code eintragen: `API_KEY = "sk-..."`
- **Nach dem Workshop löschen!**

---

# Warum Key-Sicherheit?

- Keys kosten Geld bei Missbrauch
- Keys nie in Code committen (GitHub!)
- Keys nach Workshops rotieren

**Lerneffekt:** So arbeiten Profis auch.

---

# Installation prüfen

Im [[Terminal]]:

```
pip install anthropic
```

Falls nicht installiert, jetzt nachholen.

---

# Aufgabe 1: Einfacher [[API]]-Call

Datei: `api_einfach.py`

**Was passiert:**
- Ein Objekt an Claude senden
- Jahr extrahieren lassen
- Antwort anzeigen

---

# api_einfach.py – Struktur

```python
# api_einfach.py
import anthropic

API_KEY = "hier-key-eintragen"

client = anthropic.Anthropic(api_key=API_KEY)

# Objekt-Beschreibung
beschreibung = "Type: Waffen | Jahr 1924 | ..."

# API-Call
message = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=100,
    messages=[{"role": "user", "content": f"..."}]
)

print(message.content[0].text)
```

---

# Hands-On: Aufgabe 1

1. `api_einfach.py` öffnen
2. [[API-Key]] eintragen
3. Ausführen: `python api_einfach.py`
4. Beobachten: Input, Output

---

# Was seht ihr?

- Die Beschreibung (Input)
- Die Antwort von Claude (Output)
- [[Token]]-Verbrauch (optional)

---

# Aufgabe 2: Batch-Verarbeitung

Datei: `api_beispiel_extraktion.py`

**Was passiert:**
- 5 Objekte laden
- Für jedes: Jahr extrahieren
- Ergebnis als [[CSV]] speichern

---

# api_beispiel_extraktion.py – Struktur

```python
# Mehrere Objekte verarbeiten
for objekt in objekte[:5]:
    # API-Call für jedes Objekt
    antwort = client.messages.create(...)

    # Ergebnis speichern
    ergebnisse.append({
        "id": objekt["id"],
        "extrahiertes_jahr": antwort
    })

# Als CSV speichern
```

---

# Hands-On: Aufgabe 2

1. `api_beispiel_extraktion.py` öffnen
2. [[API-Key]] eintragen
3. Ausführen
4. Ergebnis-[[CSV]] anschauen

---

# Verständnis-Check

Vergleicht die Ergebnis-[[CSV]] mit den Original-Beschreibungen:

| ID | Original | Extrahiert |
|----|----------|------------|
| o:km.8009 | Jahr 1924 | 1924 |
| o:km.8022 | Jahr 1924 | 1924 |

**Fragen:**
- Stimmt's überein? Wo nicht?
- Warum könnte Claude einen Fehler machen?

---

# Typischer Fehler: Key

```
anthropic.AuthenticationError: Invalid API key
```

**Prüfen:**
- Leerzeichen am Anfang/Ende?
- Anführungszeichen korrekt?
- Key vollständig kopiert?

---

# Typischer Fehler: [[Rate Limiting]]

```
anthropic.RateLimitError: Rate limit exceeded
```

**Lösung:** Kurz warten, erneut versuchen.

Bei vielen Requests: `time.sleep(1)` zwischen Calls.

---

# Kosten im Blick

Unser Budget: 75$ Credits

Bei Haiku reicht das für **Millionen** von [[Token]].

Trotzdem: Bewusst einsetzen, nicht verschwenden.

---

# Nach der Übung

**[[API-Key]] löschen!**

1. Zeile mit Key finden
2. Key durch `"HIER_KEY_EINTRAGEN"` ersetzen
3. Speichern

---

# Zusammenfassung

- [[API]] = Automatisierung von [[LLM]]-Calls
- [[Python]] + anthropic-Bibliothek
- Key-Sicherheit ist wichtig
- Kosten sind bei Haiku minimal

---

# Kammer 4 fertig!

Ihr habt:
- [[API]]-Calls verstanden
- Batch-Verarbeitung ausprobiert
- Key-Sicherheit gelernt

---

# Weiter zu Block 6

Reflexion – Limitationen

Was kann schiefgehen?

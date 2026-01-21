---
title: Ankommen, Klärung, Wiederholung
subtitle: Block 1
author: Dr. Christopher Pollin
competency: CT
---

# Programmieren 2.0

LLMs für Forschungsdaten im Museum

Block 1 · Ankommen, Klärung, Wiederholung

---

# Tagesablauf

| Block | Thema | Dauer |
|-------|-------|-------|
| 1 | Ankommen, Klärung, Wiederholung | 30 min |
| 2 | Context Engineering | 30 min |
| 3 | Python mit LLM-Unterstützung | 45 min |
| – | **Pause** | 15 min |
| 4 | Webentwicklung mit LLM | 45 min |
| 5 | LLM-API programmatisch nutzen | 45 min |
| 6 | Reflexion – Limitationen | 20 min |
| 7 | Eigene Aufgabe | 40 min |
| 8 | Dokumentation und Abschluss | 20 min |

---

# Was ihr heute lernt

Fünf Kompetenzbereiche:

| Kürzel | Kompetenz | Bedeutung |
|--------|-----------|-----------|
| CT | [[Computational Thinking]] | Probleme zerlegen |
| CE | [[Context Engineering]] | LLM richtig informieren |
| CL | [[Code Literacy]] | Code verstehen |
| RE | Requirement Engineering | Anforderungen formulieren |
| RV | Review | Ergebnisse prüfen |

---

# Leitmetapher: Nautilus

Der Nautilus baut seine Schale **Kammer für Kammer**.

Jede neue Kammer folgt aus den vorherigen.

So arbeiten wir auch mit LLMs:
- Probleme in Teile zerlegen
- Schrittweise lösen
- Ergebnisse verbinden

---

# [[Informed Vibe Coding]]

Nicht blindes Ausprobieren, sondern:
- Ergebnisse **einordnen** können
- Fehler **erkennen** können
- Grenzen **kennen** und respektieren

Das ist unser Ziel heute.

---

# Technik-Check

Funktioniert bei euch:

- [ ] **[[VS Code]]** öffnet sich?
- [ ] **[[Terminal]]** in VS Code (Ctrl+`)
- [ ] **[[Python]]** installiert?
- [ ] **[[Live Server]]** Extension?

---

# Hands-On: Python prüfen

Öffnet das [[Terminal]] in [[VS Code]] und tippt:

```
python --version
```

Erwartet: `Python 3.x.x`

**Windows-Problem?** Versucht `py --version`

---

# Troubleshooting: Python nicht gefunden

```
'python' is not recognized as an internal or external command
```

**Das ist Windows-typisch!** Lösungen:

1. Versucht `py --version` statt `python`
2. Python neu installieren mit "Add to [[PATH]]" ✓
3. VS Code neu starten

---

# Troubleshooting: Live Server

**Extension nicht installiert?**

1. VS Code → Extensions (Ctrl+Shift+X)
2. Suche: "Live Server"
3. Installieren (Ritwick Dey)
4. VS Code neu starten

---

# Hands-On: Live Server prüfen

1. Erstellt eine Datei `test.html`
2. Schreibt `<h1>Hallo Welt</h1>` hinein
3. Rechtsklick → "Open with Live Server"
4. Browser öffnet sich?

---

# Probleme aus der "Lernchance"?

Was hat beim Vorbereitungstreffen nicht funktioniert?

- Python nicht gefunden?
- Datei nicht ausgeführt?
- Live Server Fehler?

→ Jetzt klären wir das gemeinsam.

---

# Kontextwechsel

**Vorbereitungstreffen:** NHM-Beispiele
- Bergkristall, Ammonit, Alpensteinbock

**Heute:** Kriminalmuseum Graz
- Echte Forschungsdaten
- Typische Herausforderungen

---

# Der Datensatz

**Hans Gross Kriminalmuseum**, Universität Graz

25 kuratierte Objekte:
- Jahreszahlen 1895–1937
- 14 verschiedene Typen
- Waffen, Forensische Medizin, Falsifikate, ...

---

# Warum diese Daten?

Die Beschreibungen sind **semi-strukturiert**:

```
Type: Waffen | Jahr 1924 | Material: Stahl | ...
```

**Nicht perfekt, aber echt.**

Das ist typisch für viele Museums-Datenbanken!

---

# Beispiel-Objekt

```
id: o:km.8009
title: Gummiknüppel
type: Waffen
year: 1924
material: Leder
```

Mit diesen Daten arbeiten wir heute.

---

# Bereit für Kammer 1?

Weiter zu Block 2: **[[Context Engineering]]**

Wie geben wir dem [[LLM]] die richtigen Informationen?

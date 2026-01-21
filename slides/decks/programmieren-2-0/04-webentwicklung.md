---
title: Webentwicklung mit LLM-Unterstützung
subtitle: Block 4
author: Dr. Christopher Pollin
competency: CL
---

# Webentwicklung mit LLM-Unterstützung

Block 4 · Workshop Programmieren 2.0

---

# Kammer 3: Darstellung

Der Nautilus baut die **dritte Kammer**.

Aus Daten wird sichtbare Darstellung.

---

# Vergleich: [[Python]] vs. Web

| [[Python]] (Block 3) | Web (Block 4) |
|---------------------|---------------|
| Daten **verarbeiten** | Daten **anzeigen** |
| Läuft im [[Terminal]] | Läuft im Browser |
| Ausgabe: Text | Ausgabe: Interaktiv |

Beides nutzt dieselben Daten!

---

# Lernziel

Webseite erstellen, die Kriminalmuseum-[[JSON]] lädt und interaktiv anzeigt.

---

# Das Zusammenspiel

```
HTML  →  Struktur (Was gibt es?)
CSS   →  Design (Wie sieht es aus?)
JS    →  Verhalten (Was passiert?)
```

Drei Dateien, ein Ergebnis.

---

# [[HTML]]: Struktur

```html
<!DOCTYPE html>
<html>
<head>
    <title>Kriminalmuseum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Objekte</h1>
    <div id="container"></div>
    <script src="script.js"></script>
</body>
</html>
```

---

# [[CSS]]: Design

```css
.card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 0.5rem;
}

.card h2 {
    color: #333;
}
```

---

# [[JavaScript]]: Verhalten

```javascript
// Daten laden
fetch('workshop_objekte.json')
    .then(response => response.json())
    .then(data => {
        // Karten erstellen
    });
```

---

# Warum [[Live Server]]?

Browser blockieren lokale Datei-Zugriffe ([[CORS]]).

**Ohne [[Live Server]]:**
```
Access to fetch blocked by CORS policy
```

**Mit [[Live Server]]:**
Lokaler Webserver → alles funktioniert.

---

# Browser-Konsole (F12)

Euer wichtigstes [[Debugging]]-Tool!

- Fehlermeldungen in rot
- `console.log()` für [[Debugging]]
- Netzwerk-Tab für Datei-Probleme

---

# Hands-On: Aufgabe

Erstellt eine Webseite mit Karten-Darstellung:

- Jede Karte zeigt: **Titel, Typ, Jahr, Material**
- **Suchfeld** filtert die Karten

---

# [[Prompt]]-Beispiel

> Erstelle eine [[HTML]]-Seite mit [[CSS]] und [[JavaScript]].
>
> Die Seite lädt `workshop_objekte.json` (Array von Objekten mit: id, title, type, year, material).
>
> Zeige jedes Objekt als Karte. Füge ein Suchfeld hinzu, das die Karten nach Titel filtert.
>
> Alle drei Dateien ([[HTML]], [[CSS]], JS) separat.

---

# [[JSON]]-Struktur

```json
[
  {
    "id": "o:km.8009",
    "title": "Gummiknüppel",
    "type": "Waffen",
    "year": 1924,
    "material": "Leder"
  },
  ...
]
```

---

# Fehler 1: Pfad falsch

```javascript
fetch('data/workshop_objekte.json')  // Falsch!
fetch('workshop_objekte.json')       // Richtig (selber Ordner)
```

Prüft: Liegt die [[JSON]] im selben Ordner wie die [[HTML]]?

---

# Fehler 2: [[CORS]]

```
Access to fetch at 'file://...' blocked
```

**Lösung:** [[Live Server]] starten!

Rechtsklick auf [[HTML]] → "Open with Live Server"

---

# Fehler 3: Tippfehler

```javascript
documnet.getElementById  // ← Falsch!
document.getElementById  // ← Richtig
```

Browser-Konsole zeigt: `documnet is not defined`

---

# [[Debugging]]-Workflow für Web

1. **F12** drücken → Konsole öffnen
2. Fehler lesen (rot = wichtig!)
3. Zeile identifizieren (klickbar!)
4. Fehlermeldung + Code an [[LLM]] geben
5. Korrektur einfügen
6. Seite neu laden (F5)

---

# Live-Demo

Wechsel zu [[VS Code]]

Falls Demo nicht klappt – die Schritte sind:
1. Drei Dateien erstellen: `index.html`, `style.css`, `script.js`
2. [[JSON]]-Datei in selben Ordner
3. [[Live Server]] starten
4. Browser-Konsole für Fehler prüfen

---

# Verständnis-Check

Schaut euch eure Webseite an:

- Werden alle 25 Objekte angezeigt?
- Funktioniert das Suchfeld?
- Öffnet F12 – gibt es Fehler?

**Wenn nicht:** Was zeigt die Konsole?

---

# Erweiterungsideen

- Sortierung nach Jahr
- Filter nach Typ (Dropdown)
- Detailansicht bei Klick
- Farbkodierung nach Typ

---

# Zusammenfassung

- [[HTML]]/[[CSS]]/[[JavaScript]] arbeiten zusammen
- [[Live Server]] löst [[CORS]]-Probleme
- Browser-Konsole zeigt Fehler
- [[LLM]] kann beim [[Debugging]] helfen

---

# Kammer 3 fertig!

Ihr habt:
- Daten im Browser angezeigt
- Interaktivität hinzugefügt
- Web-[[Debugging]] gelernt

---

# Weiter zu Kammer 4

Block 5: **LLM-[[API]] programmatisch nutzen**

Von Chat zu Automatisierung!

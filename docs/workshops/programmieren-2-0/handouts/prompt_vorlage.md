# Prompt-Vorlage für Code-Generierung

## Die drei Elemente guten Kontexts

Jede Anforderung an ein LLM sollte diese drei Elemente enthalten:

1. **Datenbeispiel** – Zeige, wie deine Daten aussehen
2. **Erwartetes Ergebnis** – Beschreibe konkret, was herauskommen soll
3. **Constraints** – Benenne Einschränkungen und Anforderungen

---

## Vorlage

```
Ich möchte [AUFGABE].

## Meine Daten

[DATENBEISPIEL - kopiere 2-3 echte Zeilen aus deiner Datei]

## Erwartetes Ergebnis

[BESCHREIBUNG - was soll am Ende herauskommen?]

## Anforderungen

- [CONSTRAINT 1]
- [CONSTRAINT 2]
- [CONSTRAINT 3]
```

---

## Beispiel 1: Python-Skript zur CSV-Analyse

### ❌ Schlecht (zu vage)

```
Analysiere meine CSV-Datei.
```

### ✅ Gut (mit Kontext)

```
Ich möchte ein Python-Skript, das meine CSV-Datei analysiert.

## Meine Daten

Die CSV-Datei heißt "workshop_objekte.csv" und sieht so aus:

id,title,type,year,material,description
o:km.8017,Gummiknüppel KM-O.17,Waffen,1924,Leder,Type: Waffen | Description: ...
o:km.8025,Kipplauf KM-O.25,Waffen,1932,Stahl,Type: Waffen | Description: ...

## Erwartetes Ergebnis

Das Skript soll ausgeben:
- Anzahl der Objekte
- Liste aller eindeutigen Typen mit Anzahl
- Das älteste und jüngste Objekt (nach Jahr)

## Anforderungen

- Python 3
- Nur Standardbibliotheken (csv, kein pandas)
- Encoding: UTF-8
- Ausgabe auf Deutsch
```

---

## Beispiel 2: Webseite mit Datenvisualisierung

### ❌ Schlecht

```
Mach mir eine Webseite für meine Museumsdaten.
```

### ✅ Gut

```
Ich möchte eine HTML-Seite, die meine Museumsobjekte als Karten anzeigt.

## Meine Daten

Die Daten liegen als JSON-Datei "workshop_objekte.json" vor:

[
  {
    "id": "o:km.8017",
    "title": "Gummiknüppel KM-O.17",
    "type": "Waffen",
    "year": "1924",
    "material": "Leder"
  },
  ...
]

## Erwartetes Ergebnis

- Jedes Objekt wird als Karte dargestellt
- Jede Karte zeigt: Titel, Typ, Jahr, Material
- Ein Suchfeld filtert die Karten in Echtzeit
- Responsive Design (funktioniert auf Handy und Desktop)

## Anforderungen

- Alles in einer HTML-Datei (CSS und JavaScript inline)
- Kein Framework (kein React, Vue, etc.)
- Modern aussehend
- Die JSON-Datei liegt im selben Ordner wie die HTML-Datei
```

---

## Beispiel 3: Daten aus Text extrahieren

### ❌ Schlecht

```
Extrahiere das Jahr aus dem Text.
```

### ✅ Gut

```
Ich möchte ein Python-Skript, das aus Museumsbeschreibungen strukturierte Daten extrahiert.

## Meine Daten

Die Beschreibungen sehen so aus:

"Type: Waffen | Type: Revolver | Description: Revolver, Kopie einer Smith & Wesson, 
Jahr 1895 | Material: Stahl | Dimensions: height: 3,2 cm | Museum ID: KM-O.1-1"

## Erwartetes Ergebnis

Für jede Beschreibung soll extrahiert werden:
- typ (erster Type-Wert)
- jahr (die Jahreszahl, falls vorhanden)
- material
- museum_id

Ausgabe als Dictionary:
{"typ": "Waffen", "jahr": 1895, "material": "Stahl", "museum_id": "KM-O.1-1"}

## Anforderungen

- Reguläre Ausdrücke (regex) verwenden
- Wenn ein Feld nicht gefunden wird: None zurückgeben
- Jahreszahlen nur zwischen 1800 und 2000 akzeptieren
```

---

## Tipps

### Bei Fehlern

```
Der Code gibt folgenden Fehler:

[KOMPLETTE FEHLERMELDUNG HIER EINFÜGEN]

Wie kann ich das beheben?
```

### Für Erklärungen

```
Erkläre mir Zeile für Zeile, was dieser Code macht:

[CODE HIER EINFÜGEN]
```

### Für Verbesserungen

```
Dieser Code funktioniert, aber ich möchte folgende Änderung:

[BESTEHENDER CODE]

Änderung: [WAS SOLL ANDERS SEIN]
```

---

## Goldene Regeln

1. **Zeigen statt beschreiben** – Kopiere echte Datenbeispiele
2. **Konkret sein** – "Ausgabe als CSV" statt "speichere das Ergebnis"
3. **Constraints nennen** – Welche Bibliotheken, welches Format, welche Sprache?
4. **Iterativ arbeiten** – Erst einfach, dann erweitern
5. **Fehler vollständig teilen** – Die ganze Fehlermeldung kopieren

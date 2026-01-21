# Cheatsheet: Python-Fehlermeldungen

## Wie lese ich eine Fehlermeldung?

Python-Fehlermeldungen haben eine klare Struktur:

```
Traceback (most recent call last):
  File "mein_skript.py", line 12, in <module>
    ergebnis = daten['name']
KeyError: 'name'
```

**Von unten nach oben lesen:**
1. **Fehlertyp und Details** (letzte Zeile): `KeyError: 'name'`
2. **Zeile im Code** (darüber): `line 12`
3. **Datei** (darüber): `mein_skript.py`

---

## Häufige Fehler und Lösungen

### FileNotFoundError

```
FileNotFoundError: [Errno 2] No such file or directory: 'daten.csv'
```

**Ursache:** Die Datei wurde nicht gefunden.

**Lösungen:**
- Prüfe, ob die Datei existiert
- Prüfe, ob du im richtigen Ordner bist (`ls` oder `dir`)
- Prüfe die Schreibweise (Groß/Kleinschreibung!)
- Verwende den vollständigen Pfad

---

### ModuleNotFoundError

```
ModuleNotFoundError: No module named 'pandas'
```

**Ursache:** Eine Bibliothek ist nicht installiert.

**Lösung:**
```bash
pip install pandas
```

---

### SyntaxError

```
SyntaxError: invalid syntax
```

**Ursache:** Der Code hat einen Schreibfehler.

**Häufige Gründe:**
- Fehlende Klammer `)` oder `]`
- Fehlender Doppelpunkt `:` nach `if`, `for`, `def`
- Fehlende Anführungszeichen bei Strings

---

### IndentationError

```
IndentationError: expected an indented block
```

**Ursache:** Falsche Einrückung (Python nutzt Einrückung statt Klammern).

**Lösung:** Prüfe, ob alle Zeilen nach `if`, `for`, `def` eingerückt sind (4 Leerzeichen).

---

### KeyError

```
KeyError: 'name'
```

**Ursache:** Ein Schlüssel existiert nicht im Dictionary.

**Lösungen:**
- Prüfe die verfügbaren Schlüssel: `print(daten.keys())`
- Nutze `.get()`: `daten.get('name', 'Unbekannt')`

---

### TypeError

```
TypeError: can only concatenate str (not "int") to str
```

**Ursache:** Versuch, verschiedene Datentypen zu kombinieren.

**Lösung:** Konvertiere den Typ:
```python
"Anzahl: " + str(42)  # statt "Anzahl: " + 42
```

---

### IndexError

```
IndexError: list index out of range
```

**Ursache:** Zugriff auf einen Index, der nicht existiert.

**Lösung:** Prüfe die Länge der Liste:
```python
if len(liste) > 5:
    element = liste[5]
```

---

### UnicodeDecodeError

```
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe4
```

**Ursache:** Die Datei hat ein anderes Encoding als erwartet.

**Lösung:** Encoding explizit angeben:
```python
with open('datei.csv', encoding='latin-1') as f:
    ...
```

---

### JSONDecodeError

```
json.decoder.JSONDecodeError: Expecting value: line 1 column 1
```

**Ursache:** Die JSON-Datei ist ungültig oder leer.

**Lösungen:**
- Prüfe, ob die Datei Inhalt hat
- Prüfe, ob es gültiges JSON ist (keine trailing commas!)
- Öffne die Datei in einem Editor und prüfe die Struktur

---

## Goldene Regel

**Wenn du die Fehlermeldung nicht verstehst:**

1. Kopiere die komplette Fehlermeldung
2. Füge sie in das LLM ein
3. Frage: "Was bedeutet dieser Fehler und wie behebe ich ihn?"

Das LLM kann dir erklären, was schiefgelaufen ist und eine Lösung vorschlagen.

---

## Nützliche Debug-Befehle

```python
# Typ einer Variable prüfen
print(type(variable))

# Inhalt einer Variable anzeigen
print(variable)

# Verfügbare Schlüssel eines Dictionaries
print(dictionary.keys())

# Länge einer Liste
print(len(liste))

# Aktuelle Arbeitsverzeichnis
import os
print(os.getcwd())

# Dateien im aktuellen Ordner
print(os.listdir())
```

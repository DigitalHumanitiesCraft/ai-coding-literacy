# Technisches Ökosystem – Grundlagen

Bevor wir mit LLMs Code generieren, hilft es zu verstehen, wie die Werkzeuge funktionieren, mit denen wir arbeiten.

---

## Python-Ökosystem

### Der Interpreter

Python ist eine **interpretierte Sprache**. Das bedeutet, der Code wird nicht vorab in ein ausführbares Programm übersetzt, sondern Zeile für Zeile von einem Interpreter gelesen und ausgeführt. Wenn du Python installierst, installierst du diesen Interpreter.

### Pakete und pip

Python bringt eine **Standardbibliothek** mit – Funktionen, die sofort verfügbar sind. Für viele Aufgaben braucht man aber zusätzliche Pakete, also Code, den andere geschrieben haben:

| Paket | Zweck |
|-------|-------|
| `Pillow` | Bildverarbeitung |
| `pandas` | Datenanalyse |
| `openpyxl` | Excel-Dateien lesen/schreiben |

Diese Pakete installiert man mit **pip**, dem Paketverwaltungswerkzeug von Python:

```bash
pip install pillow
```

Der Befehl lädt das Paket aus einem zentralen Verzeichnis (PyPI) herunter und macht es für Python verfügbar.

### Virtuelle Umgebungen

Pakete können andere Pakete voraussetzen, und verschiedene Projekte können verschiedene Versionen desselben Pakets brauchen. Deshalb arbeitet man mit **virtuellen Umgebungen**: isolierte Ordner, in denen jedes Projekt seine eigenen Pakete hat, ohne mit anderen Projekten in Konflikt zu geraten.

```bash
python -m venv meine_umgebung     # Umgebung erstellen
meine_umgebung\Scripts\activate   # Umgebung aktivieren (Windows)
source meine_umgebung/bin/activate # Umgebung aktivieren (Mac/Linux)
```

---

## JavaScript und Node.js

### Browser vs. Server

JavaScript wurde ursprünglich für den Browser entwickelt. Jeder Browser hat einen eingebauten JavaScript-Interpreter, der Code auf Webseiten ausführt.

**Node.js** ist ein JavaScript-Interpreter, der außerhalb des Browsers läuft. Damit kann man JavaScript für Serveranwendungen, Kommandozeilenwerkzeuge oder Build-Prozesse nutzen.

### npm

Node.js hat mit **npm** eine eigene Paketverwaltung, die analog zu pip funktioniert:

```bash
npm install paketname
```

Der Befehl lädt Pakete herunter und speichert sie im Projektordner (im Verzeichnis `node_modules`).

### Live Server

Ein **Live Server** ist ein kleines Programm, das einen lokalen Webserver startet.

**Warum braucht man das?** Manche Funktionen, etwa das Laden externer Dateien per JavaScript, funktionieren aus Sicherheitsgründen nicht, wenn man eine HTML-Datei direkt im Browser öffnet (über `file://`). Der Live Server umgeht das, indem er die Dateien über HTTP ausliefert (`http://localhost`), so wie ein echter Webserver.

In VS Code kann man die Extension "Live Server" installieren und mit einem Klick starten.

---

## Jupyter Notebooks

### Zellen statt Skripte

Ein klassisches Python-Skript ist eine Textdatei, die von oben nach unten ausgeführt wird. Ein **Jupyter Notebook** ist anders organisiert: Der Code steht in einzelnen **Zellen**, die unabhängig voneinander ausgeführt werden können.

Der **Zustand** – also Variablen und geladene Daten – bleibt zwischen den Zellen erhalten.

### Wann Notebooks, wann Skripte?

| Notebooks | Skripte |
|-----------|---------|
| Explorative Arbeit | Wiederverwendbare Werkzeuge |
| Verschiedene Auswertungen ausprobieren | Automatisierte Prozesse |
| Zwischenergebnisse inspizieren | Produktion |

### Google Colab

**Google Colab** ist ein Jupyter-Notebook-Dienst, der im Browser läuft. Man braucht keine lokale Python-Installation, weil der Code auf Googles Servern ausgeführt wird.

Für den Einstieg ohne Setup-Hürden ist das eine pragmatische Option.

---

## Zusammenfassung

| Konzept | Python | JavaScript |
|---------|--------|------------|
| Paketmanager | pip | npm |
| Pakete | aus PyPI | aus npm registry |
| Isolation | virtuelle Umgebungen | node_modules pro Projekt |
| Ausführung | Python-Interpreter | Browser oder Node.js |

---

## Warum ist das wichtig für AI Coding Literacy?

Wenn ein LLM Code generiert, der `import pandas` enthält, musst du wissen:
1. Das ist ein externes Paket
2. Es muss installiert werden (`pip install pandas`)
3. Das passiert nicht automatisch

Dieses Grundverständnis hilft dir, Fehlermeldungen zu interpretieren und dem LLM die richtigen Fragen zu stellen.

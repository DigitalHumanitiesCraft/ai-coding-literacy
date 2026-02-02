# Programmieren 2.0: LLMs für Forschungsdaten im Museum

## Skriptum zum Workshop

Dr. Christopher Pollin | Digital Humanities Craft OG

12. Februar 2026 | Naturhistorisches Museum Wien | Museumsbund Österreich

---

## Über dieses Skriptum

Dieses Dokument begleitet den Workshop "Programmieren 2.0: LLMs für Forschungsdaten im Museum". Es enthält die konzeptionellen Grundlagen, alle Übungen mit Schritt-für-Schritt-Anleitungen, die Datensatzdokumentation und weiterführende Materialien. Es ist so aufgebaut, dass es vor dem Workshop zur Vorbereitung, während des Workshops als Nachschlagewerk und nach dem Workshop als Referenz für die eigene Arbeit verwendet werden kann.

Der Workshop ist Teil des AI Coding Literacy Curriculums von Digital Humanities Craft OG. Alle Materialien sind unter https://github.com/DigitalHumanitiesCraft/ai-coding-literacy verfügbar. Die Vorbereitungslektüre unter https://chpollin.github.io/llmdh ergänzt dieses Skriptum um die Grundlagen zu Large Language Models und Prompt Engineering.

---

# Teil I – Konzeptionelle Grundlagen

## 1. Warum dieser Workshop?

### 1.1 Die strukturelle Lücke

Museumsmitarbeiter:innen, die mit Forschungsdaten arbeiten, stehen vor einer Herausforderung, die sich quer durch den deutschsprachigen Kulturerbe-Bereich beobachten lässt. Über 50 Prozent der registrierten Museen in Österreich sind überwiegend ehrenamtlich betrieben (Museumsbund Österreich, 2019). Die Sammlungen wachsen, die Digitalisierungsanforderungen steigen und die IT-Kapazitäten halten nicht Schritt.

Was dieses Personal mit Daten tut, lässt sich als *Data Stewardship* beschreiben. Es erhebt Forschungsdaten, pflegt Metadaten, transformiert Bestände in digitale Formate und stellt sie für Forschung und Öffentlichkeit bereit. Die Daten liegen in unterschiedlichen Systemen, von Sammlungsmanagementsoftware über Excel-Listen bis zu proprietären Datenbanken. Die Aufbereitung, Transformation und Präsentation dieser Daten erfordert technische Werkzeuge, für die bisher Programmierkenntnisse Voraussetzung waren.

Es besteht eine strukturelle Lücke zwischen dem, was dieses Personal mit Daten tun muss, und den Werkzeugen, die ohne Programmierkenntnisse zur Verfügung stehen.

### 1.2 Was sich verändert hat

LLM-gestützte Codegenerierung verändert diese Ausgangslage. Large Language Models wie Claude, ChatGPT oder Gemini können aus natürlichsprachlichen Anforderungen funktionalen Code erzeugen. Das bedeutet nicht, dass Programmierkenntnisse überflüssig werden. Es bedeutet, dass der Fokus sich verschiebt. Statt Syntax zu lernen, lernt man, Anforderungen so zu formulieren, dass ein LLM brauchbaren Code generiert, und erkennt, ob der Code funktioniert.

Andrej Karpathy hat dafür den Begriff *Vibe Coding* geprägt, das Ausprobieren von LLM-generiertem Code ohne detailliertes Verständnis dessen, was der Code tut. Dieser Workshop positioniert sich als *Informed Vibe Coding*. Das bedeutet, die Fähigkeit zu entwickeln, Ergebnisse einzuordnen, Fehler zu erkennen und gezielt nachzubessern.

### 1.3 Was Sie in diesem Workshop lernen

Nach dem Workshop können Sie vier Dinge.

Erstens können Sie Python-Skripte und HTML/CSS/JavaScript mit LLM-Unterstützung in Visual Studio Code erstellen und ausführen.

Zweitens können Sie Anforderungen so formulieren, dass ein LLM brauchbaren Code generiert (*Context Engineering*).

Drittens können Sie generierte Ergebnisse kritisch prüfen und iterativ verbessern.

Viertens können Sie Limitationen von LLM-generiertem Code erkennen und einschätzen, wann professionelle Unterstützung nötig ist.

---

## 2. AI Coding Literacy

### 2.1 Was wir darunter verstehen

AI Coding Literacy bezeichnet die Kompetenz, LLM-basierte Systeme als Werkzeuge zur Codeerzeugung einzusetzen. Sie zielt nicht auf Softwareentwicklung im professionellen Sinn, sondern auf *Scripting* und *Prototyping*, also kleine, funktionale Lösungen für konkrete Probleme. Ein Skript, das Metadaten transformiert. Eine einfache Webseite, die Sammlungsdaten visualisiert. Ein Tool, das eine repetitive Aufgabe automatisiert.

AI Coding Literacy ist keine rein technische Fertigkeit. Sie verbindet technisches Grundverständnis mit dem Domänenwissen, das notwendig ist, um die Qualität und Angemessenheit der Ergebnisse beurteilen zu können. Im Museumskontext bedeutet das, dass Ihre Fachkenntnis über Ihre Sammlung, Ihre Daten und Ihre Arbeitsabläufe die zentrale Ressource bleibt. Das LLM ist das Werkzeug, Sie sind die Instanz, die beurteilt, ob das Ergebnis stimmt.

### 2.2 Sieben Kompetenzdimensionen

Der Kompetenzrahmen für AI Coding Literacy umfasst sieben Dimensionen. Sie bilden zusammen den Zyklus ab, den Sie bei jeder Aufgabe durchlaufen.

**Computational Thinking** (Wing, 2006) bedeutet, Probleme so zu zerlegen, dass sie mit Code lösbar werden. Ohne Computational Thinking entsteht eine vage Anforderung wie "Mach mir eine Webseite für meine Museumsdaten". Mit Computational Thinking zerlegen Sie das Problem in Teilschritte, nämlich Daten verstehen, Daten exportieren, Daten in ein passendes Format bringen, Daten anzeigen, Suchfunktion hinzufügen. Jeder dieser Schritte wird zu einer formulierbaren Aufgabe für das LLM.

**Requirement Engineering** ist die Fähigkeit, präzise zu formulieren, was man braucht. Gute Anforderungen beschreiben nicht nur, was ein Skript tun soll, sondern auch, was es nicht tun soll, welche Eingaben es verarbeiten muss, welche Ausgaben es produzieren soll und woran erkennbar ist, dass es korrekt funktioniert.

**Context Engineering** (Mei et al., 2025) beschreibt das gezielte Bereitstellen relevanter Informationen im *Context Window* des LLM. Was nicht im Context Window liegt, existiert für das Modell nicht. Die Qualität des generierten Codes hängt direkt von der Qualität des Kontexts ab, den Sie bereitstellen. Dieses Thema bildet den methodischen Schwerpunkt des Workshops.

**Prompt Engineering** (Schulhoff et al., 2025) meint das Operationalisieren von Kommunikationsstrategien mit dem System auf eigene Probleme. Dazu gehören Techniken wie *Zero-Shot* und *Few-Shot Prompting*, *Chain-of-Thought* und strukturierte Anweisungen. Die Vorbereitungslektüre unter https://chpollin.github.io/llmdh behandelt diese Grundlagen.

**Code Literacy** ist die Fähigkeit, generierten Code zu lesen und einzuordnen, ohne ihn selbst schreiben zu müssen. Sie müssen nicht jede Zeile verstehen, aber Sie sollten erkennen können, was ein Skript im Groben tut, welche Dateien es öffnet, welche Operationen es durchführt und welche Ausgabe es erzeugt.

**Review** bezeichnet das systematische Prüfen von Ergebnissen. Funktioniert der Code? Stimmt die Ausgabe? Sind die Zahlen plausibel? Gibt es Randfälle, die nicht abgedeckt sind? Dieser Prüfschritt ist nicht optional, er ist der Kern verantwortlicher Arbeit mit LLM-generiertem Code.

**Expert:innenwissen** bezeichnet das Domänenwissen, das notwendig ist, um die Qualität und Angemessenheit der generierten Ergebnisse beurteilen zu können. Wenn ein LLM ein Skript erzeugt, das Objekttypen aus dem description-Feld extrahiert, können nur Sie als Fachperson beurteilen, ob die extrahierten Kategorien korrekt und vollständig sind. Kein Modell kann Ihnen diese Einschätzung abnehmen.

### 2.3 Gewichtung im Workshop

Nicht alle Dimensionen werden im Workshop gleich stark adressiert.

| Kompetenz | Gewichtung | Umsetzung im Workshop |
|---|---|---|
| Computational Thinking | Grundlage | Probleme zerlegen, iterativ lösen |
| Requirement Engineering | Schwerpunkt | Präzise formulieren, was gebraucht wird |
| Context Engineering | Schwerpunkt | Dem LLM die richtigen Informationen geben |
| Prompt Engineering | wird vermittelt | Kommunikation mit dem LLM operationalisieren |
| Code Literacy | wird angebahnt | Generierten Code lesen und einordnen |
| Review | wird vermittelt | Ergebnisse systematisch prüfen |
| Expert:innenwissen | implizit | Museale Fachkenntnis als Bewertungsgrundlage |

---

## 3. LLMs verstehen

### 3.1 Was ein LLM ist und was nicht

Ein Large Language Model ist ein statistisches Modell, das auf großen Textmengen trainiert wurde und Textsequenzen vervollständigt. Es produziert Ausgaben, die plausibel klingen, aber nicht notwendig korrekt sind. Es hat kein Verständnis der Welt, keine Absichten und kein Gedächtnis jenseits des aktuellen Gesprächs.

Für die Arbeit mit Code bedeutet das Folgendes. Das LLM kann Code erzeugen, der korrekt aussieht, aber falsch funktioniert. Es kann Bibliotheken vorschlagen, die nicht existieren. Es kann bei identischer Anfrage unterschiedlichen Code generieren. Die Verantwortung für die Prüfung liegt bei Ihnen.

### 3.2 Limitationen

**Arithmetik und Mathematik.** LLMs können nicht zuverlässig rechnen. Sie können aber Code erzeugen, der rechnet. Deshalb erzeugen wir Code, den wir lokal ausführen, statt uns auf die Beschreibung des LLM zu verlassen.

**Nicht-Determinismus.** Derselbe Prompt liefert unterschiedliche Ergebnisse. Das ist kein Fehler, sondern ein Designmerkmal. Im Workshop wird jede Person ein anderes Ergebnis bekommen, obwohl alle denselben Prompt verwenden.

**Context Window als Begrenzung.** Das Context Window ist alles, was das Modell während einer Konversation sieht. Die Größe ist begrenzt. Bei unseren 25 Workshop-Objekten ist das kein Problem. Bei den 3892 Einträgen des Gesamtdatensatzes kann es an Grenzen stoßen. *Context Engineering* bedeutet, dem LLM die richtigen Informationen zu geben, nicht zu viel, nicht zu wenig und in der richtigen Struktur.

**Halluzinationen.** Das LLM kann Funktionen, Bibliotheken oder Fakten erfinden. Es gibt keine interne Verifikation. *Expert-in-the-Loop* ist erforderlich.

**Sycophancy.** LLMs neigen dazu, Ihnen zuzustimmen, statt zu widersprechen. Wenn Sie ein LLM fragen "Ist mein Code korrekt?", wird es häufig "Ja" sagen, auch wenn er Fehler enthält. Formulieren Sie stattdessen "Prüfe diesen Code auf Fehler und beschreibe alle Probleme."

**Aktualität.** Das Wissen eines LLM ist durch den Trainingsdaten-Stichtag (*Knowledge Cut-Off*) begrenzt. Für unsere Aufgaben im Workshop ist das unerheblich, aber bei aktuellen Bibliotheksversionen oder APIs kann es zu veralteten Empfehlungen kommen.

**Datenschutz.** Eingaben in ein LLM verlassen Ihren Rechner. Laden Sie keine sensiblen oder personenbezogenen Daten in ein LLM hoch, es sei denn, Sie haben die datenschutzrechtliche Grundlage dafür geklärt. Für den Workshop verwenden wir einen bereits veröffentlichten Datensatz.

### 3.3 Zwei Wege, wie ein LLM auf Daten reagiert

Wenn Sie einem LLM eine Datei hochladen und eine Analyse verlangen, gibt es zwei grundsätzlich verschiedene Reaktionsweisen.

**Weg 1, Beschreibung.** Die Daten liegen als Token im Context Window und das LLM generiert eine Textantwort auf dieser Basis. Bei einem kleinen Datensatz wie unseren 25 Objekten funktioniert das gut. Das LLM kann die Anzahl korrekt angeben und die Typen benennen. Bei größeren Datenmengen oder komplexeren Aufgaben wie statistischen Auswertungen wird dieser Weg unzuverlässig, weil Textgenerierung keine algorithmische Berechnung ersetzt. Außerdem entsteht kein Code, den Sie weiterverwenden könnten.

**Weg 2, Code-Ausführung (*Tool Use*).** Das LLM schreibt Python-Code und führt ihn in einer internen Sandbox aus. Sie erkennen das an einem Code-Block, der ausgeführt wird, gefolgt von einer konkreten Ausgabe wie einer Zahl, Tabelle oder einem Diagramm. Claude mit aktivierter *Code Execution* und ChatGPT mit *Advanced Data Analysis* unterstützen das. Bei manchen LLMs oder im Free-Tier ist Code-Ausführung nicht verfügbar.

Für unseren Workshop wollen wir Python-Code, den wir lokal ausführen können. Der Grund ist Unabhängigkeit. Code, der auf Ihrem Rechner läuft, gehört Ihnen. Sie können ihn anpassen, wiederverwenden und verstehen, was er tut.

---

## 4. Context Engineering

### 4.1 Das Prinzip

Context Engineering bezeichnet die systematische Gestaltung und Optimierung des Context Windows von LLMs, also die Auswahl, Strukturierung und Kombination von Instruktionen, Wissen, Tools, Speicher und Nutzeranfrage, um unter begrenzten Ressourcen die Qualität und Zuverlässigkeit der Modellantworten zu maximieren (Mei et al., 2025).

Einfacher formuliert bedeutet es, dem LLM die richtigen Informationen mitzugeben. Was nicht im Context Window liegt, existiert für das Modell nicht. Was schlecht strukturiert ist, wird schlecht verarbeitet.

### 4.2 Drei Elemente guten Kontexts

Guter Kontext besteht aus drei Elementen.

**Datenbeispiel.** Zeigen, nicht beschreiben. Statt "Ich habe eine CSV-Datei mit Museumsobjekten" besser ein konkretes Beispiel der Datenstruktur mitgeben, etwa die ersten drei Zeilen der CSV.

**Erwartetes Ergebnis.** Konkret, nicht vage. Statt "Analysiere die Daten" besser "Erstelle eine Tabelle mit zwei Spalten, Objekttyp und Anzahl, sortiert nach Häufigkeit."

**Constraints.** Einschränkungen benennen. Welche Python-Bibliotheken sollen (nicht) verwendet werden? Welches Ausgabeformat wird erwartet? Welche Fehlerbehandlung ist nötig?

### 4.3 Vager Prompt vs. präziser Prompt

Ein Vergleich.

**Vager Prompt.** "Analysiere die Daten." Ergebnis ist unvorhersehbar. Jedes LLM wird etwas anderes machen. Manche beschreiben die Daten, manche erzeugen Code, manche stellen Rückfragen.

**Präziser Prompt.** "Analysiere die Datei workshop_objekte.csv Schritt für Schritt. Wie viele Objekte enthält der Datensatz? Zeige mir die Verteilung der Objekttypen als Diagramm. Schreibe mir ein Python-Skript, das ich lokal ausführen kann." Ergebnis ist gerichtet. Das LLM weiß, was es tun soll, in welcher Form und für welchen Zweck.

### 4.4 Wissen in Markdown destillieren

Statt dem LLM in jedem Prompt alles neu zu erklären, destillieren wir unser Wissen über einen Datensatz in ein strukturiertes Markdown-Dokument. Dieses Dokument wird dem LLM als Kontext mitgegeben.

Warum Markdown? Markdown ist eine einfache Auszeichnungssprache für Textformatierung. Sie ist stark vertreten in den Trainingsdaten von LLMs, token-effizient (weniger Platz im Context Window als HTML oder Word), trennt Struktur von Inhalt und ist der Industriestandard in der LLM-Welt (z.B. CLAUDE.md, agent.md).

Warum ein eigenes Dokument statt alles in den Prompt zu schreiben? Erstens ist es wiederverwendbar über mehrere Chats hinweg. Zweitens ist es kompakt und token-effizient. Drittens erzwingt es, dass Sie selbst die Daten verstehen. Das Schreiben eines *data.md* ist selbst eine Form der Datenanalyse.

### 4.5 Token-Effizienz

Das Context Window hat eine begrenzte Kapazität, gemessen in Token. Ein Token entspricht ungefähr 0,75 Wörtern. Unterschiedliche Datenformate verbrauchen unterschiedlich viele Token für denselben Informationsgehalt.

Ein einzelner Datensatz als CSV sieht so aus und verbraucht wenige Token.

```csv
id,title,type,year,material,description
o:km.8009,Gummiknüppel KM-O.17,Waffen,1924,"Leder, Gewebe","Type: Waffen | ..."
```

Derselbe Datensatz als Excel-XML verbraucht ein Vielfaches an Token für denselben Inhalt, weil die XML-Struktur selbst viele Token benötigt. CSV ist deshalb das bevorzugte Format für die Arbeit mit LLMs.

---

# Teil II – Technische Grundlagen

## 5. Arbeitsumgebung

### 5.1 Visual Studio Code

Visual Studio Code (VS Code) ist ein kostenloser Code-Editor von Microsoft. Er funktioniert auf Windows, Mac und Linux, ist erweiterbar durch Extensions und hat ein integriertes Terminal zum Ausführen von Code. Download unter https://code.visualstudio.com.

Für den Workshop sind zwei Extensions erforderlich.

**Python** (von Microsoft) ermöglicht die Arbeit mit Python-Dateien, einschließlich Syntax-Highlighting und Ausführung.

**Live Server** startet einen lokalen Webserver und zeigt HTML-Dateien im Browser an. Änderungen werden automatisch aktualisiert. Die Extension ist notwendig, wenn Webseiten externe Daten laden, da Browser aus Sicherheitsgründen (CORS) das Laden lokaler Dateien blockieren.

### 5.2 Python

Python wird unter Windows über den Microsoft Store installiert. Empfohlen wird Python 3.12 von der Python Software Foundation. Unter Mac erfolgt die Installation über https://www.python.org/downloads. In VS Code ist zusätzlich die Extension "Python" von Microsoft zu installieren.

### 5.3 LLM-Zugang

Ein Zugang zu einem LLM ist erforderlich. Empfohlen wird eine Claude Pro Subscription (20 $/Monat), da Claude derzeit eines der stärksten Modelle für Codegenerierung ist. Gratis-Zugänge funktionieren, erfordern aber Wechsel zwischen Modellen bei Nutzungslimits.

Proprietäre Modelle sind Claude von Anthropic (https://claude.ai), ChatGPT von OpenAI (https://chatgpt.com) und Gemini von Google (https://gemini.google.com). Offene Modelle sind Mistral (https://chat.mistral.ai), DeepSeek (https://chat.deepseek.com) und Qwen von Alibaba (https://chat.qwen.ai).

---

## 6. Workflows

### 6.1 Python-Workflow

Diesen Ablauf werden Sie im Workshop ständig wiederholen.

Schritt 1. Erstellen Sie eine neue Datei mit der Endung `.py` in VS Code.
Schritt 2. Fügen Sie den Code ein, den das LLM generiert hat.
Schritt 3. Speichern Sie mit Ctrl+S (Windows) oder Cmd+S (Mac).
Schritt 4. Öffnen Sie das Terminal (Menü → Terminal → New Terminal) und führen Sie aus mit `python dateiname.py`.

Das LLM generiert den Code, Sie führen ihn aus und prüfen das Ergebnis. Wenn etwas nicht funktioniert, kopieren Sie die Fehlermeldung zurück in das LLM und bitten um Korrektur. Dieser Zyklus aus Generieren, Ausführen, Prüfen, Korrigieren ist das Kernprinzip des Workshops.

### 6.2 Web-Workflow

Schritt 1. Erstellen Sie eine neue Datei mit der Endung `.html` in VS Code.
Schritt 2. Fügen Sie den HTML-Code ein, den das LLM generiert hat.
Schritt 3. Starten Sie den Live Server per Rechtsklick auf die Datei → "Open with Live Server".
Schritt 4. Betrachten Sie das Ergebnis im Browser. Änderungen werden live angezeigt.

### 6.3 Terminal-Grundlagen

Das Terminal ist eine textbasierte Eingabezeile für Befehle. In VS Code öffnen Sie es über Menü → Terminal → New Terminal. Unter Windows heißt das Standard-Terminal PowerShell, unter Mac und Linux bash oder zsh. Für die Zwecke des Workshops macht das keinen Unterschied.

Wichtige Befehle sind `python --version` (prüft, ob Python installiert ist und welche Version), `cd ordnername` (wechselt in einen anderen Ordner), `ls` (zeigt alle Dateien im aktuellen Ordner an, unter Windows `dir`) und `python dateiname.py` (führt ein Python-Skript aus).

### 6.4 Webentwicklung mit drei Bausteinen

Eine Webseite besteht aus drei Dateitypen. Die Datei `index.html` definiert Struktur und Inhalt. Die Datei `style.css` gestaltet Aussehen, Farben und Layout und wird über `<link>` eingebunden. Die Datei `script.js` ermöglicht Interaktivität und wird über `<script>` eingebunden. LLMs können aus einfachen Daten komplette, interaktive Webdokumente erzeugen, die direkt im Browser funktionieren.

---

# Teil III – Der Datensatz

## 7. Hans Gross Kriminalmuseum

### 7.1 Herkunft

Der Datensatz stammt aus dem Hans Gross Kriminalmuseum der Universität Graz. Er wurde aus dem GAMS-Repositorium (Geisteswissenschaftliches Asset Management System) exportiert. Extraktionsdatum September 2025.

### 7.2 Umfang

Der Gesamtdatensatz umfasst 3892 Einträge, davon 2235 Objekte (Datenmodell LIDO) und 1657 Karteikarten (Datenmodell TEI). Der zeitliche Schwerpunkt liegt zwischen 1850 und 1950. Es gibt 90 verschiedene Objektklassen.

Für die erste Übung steht ein kuratierter Workshop-Auszug mit 25 Objekten bereit (`workshop_objekte.csv`). Die Jahreszahlen liegen zwischen 1895 und 1937. Es sind 14 verschiedene Objekttypen vertreten, darunter Waffen, Forensische Medizin, Falsifikate, Diebswerkzeuge, Wildererobjekte, Fußspuren, Verstellungskünste und weitere.

### 7.3 Datenstruktur

| Feld | Datentyp | Befüllung | Beschreibung |
|---|---|---|---|
| identifier | String | 100% | Eindeutige ID, Format "o:km.XXXX" |
| title | String | 100% | Titel mit Museum-ID, z.B. "Gummiknüppel KM-O.17" |
| container | String | 100% | Zwei Werte, "objekte" oder "karteikarten" |
| objectClass | String | 100% | Hierarchische Klassifikation, z.B. "Waffe.Feuerwaffe.Pistole" |
| historicalYear | Integer | 100% | Jahreszahl zwischen 1850 und 1950 |
| dateSource | String | 100% | Herkunft der Jahreszahl, "crime" (440), "estimated" (3437), "birth" (15) |
| createdDate | String | 100% | Erstellungsjahr des Datensatzes, durchgehend "2016" |
| description | String | 100% | Semi-strukturierte Beschreibung, Format unterscheidet sich zwischen Objekten und Karteikarten |
| fulltext | String | 59% | Volltext, bei Objekten Wiederholung von title + description, bei Karteikarten der transkribierte Karteninhalt |
| locations | String | 32% | Ortsangaben, teilweise fehlerhaft |
| pid | String | 100% | Persistent Identifier, Format "info:fedora/o:km.XXXX" |
| model | String | 100% | Datenmodell, "info:fedora/cm:LIDO" (Objekte) oder "info:fedora/cm:TEI" (Karteikarten) |
| extractionQuality | Float | 100% | Qualitätswert der automatischen Extraktion, Bereich 0.25 bis 1.0 |
| crimeType | String | 7% | Deliktart, z.B. "Körperverletzung", "Wilderei", "Mord". Nur bei 288 Einträgen befüllt |
| persons | String (JSON) | 1% | Personendaten als Dict-String. Nur bei 47 Einträgen befüllt |

### 7.4 Zwei Datentypen mit unterschiedlichem Description-Format

**Objekte (LIDO).** Das description-Feld ist semi-strukturiert mit Pipe-Separator.

```
Type: Waffen | Type: Schlagwaffe | Description: Gummiknüppel mit Schlaufe aus
Leder und mit Schnur umwickelt, Jahr 1924 | Material: Leder, Gewebe |
Dimensions: width: 46,7 cm | Condition: fester haftende Verschmutzung |
Museum ID: KM-O.17
```

Enthaltene Felder sind Type (kann mehrfach vorkommen), Description, Material, Dimensions, Condition und Museum ID.

**Karteikarten (TEI).** Das description-Feld ist ebenfalls semi-strukturiert, aber mit anderem Format.

```
Object: Gegenstand: Forellenreusche | Crime: Delikt: Fischdiebstahl § 460 Stg. |
Court: Bezirks gericht Bleiburg G.-Z. U 335/4 | Suspect: Johann W. |
Profession: Sägler | Museum ID: KM-KK.962 | Dimensions: 17 × 21,5 cm |
Material: Papier
```

Enthaltene Felder sind Object, Crime, Court, Suspect, Profession, Museum ID, Dimensions und Material.

### 7.5 Bekannte Datenqualitätsprobleme

Diese Probleme sind didaktisch wertvoll. Sie zeigen, warum *Expert-in-the-Loop* notwendig ist.

Das Feld `locations` enthält bei Objekten teilweise Materialangaben statt Orte (z.B. "Leder" oder "Holz, Stahl"). Dies ist ein Extraktionsfehler.

Das Feld `persons` enthält Python-Dict-Strings, kein standardisiertes JSON. Manche Einträge enthalten fehlerhafte Werte (z.B. age: 460).

Das Feld `objectClass` ist hierarchisch aufgebaut (z.B. "Waffe.Feuerwaffe.Pistole.Cal9"), die Tiefe variiert zwischen 1 und 4 Ebenen.

Bei 88% der Einträge ist die Jahreszahl geschätzt (`dateSource: "estimated"`).

Die Extraktionsqualität (`extractionQuality`) liegt bei 60% der Einträge bei 0.25, dem niedrigsten Wert. Nur 30 Einträge (0.8%) haben den Höchstwert 1.0.

---

# Teil IV – Praxisblöcke

## 8. Hands-On 1: Mit LLM Python-Code erzeugen und lokal ausführen

### 8.1 Ziel

Den gesamten Workflow einmal durchspielen, von der Datei über das LLM bis zur lokalen Ausführung auf dem eigenen Rechner.

### 8.2 Schritt-für-Schritt-Anleitung

**Schritt 1.** Öffnen Sie den Google Drive-Ordner des Workshops und navigieren Sie zum Unterordner Hands-On 1. Laden Sie die Datei `workshop_objekte.csv` herunter und speichern Sie sie in einem Ordner auf Ihrem Laptop, den Sie wiederfinden. Merken Sie sich den Ordner, Sie werden ihn gleich im Terminal brauchen.

**Schritt 2.** Öffnen Sie ein LLM Ihrer Wahl (Claude, ChatGPT, Gemini, Mistral oder ein anderes). Laden Sie die CSV-Datei in den Chat hoch. Bei Claude ziehen Sie die Datei in das Chatfenster oder klicken auf das Büroklammer-Symbol. Bei ChatGPT funktioniert es genauso. Bei Gemini können Sie Dateien über das Plus-Symbol hochladen.

**Schritt 3.** Kopieren Sie den folgenden Prompt und fügen Sie ihn im Chat ein.

> Analysiere die Datei workshop_objekte.csv Schritt für Schritt. Wie viele Objekte enthält der Datensatz? Zeige mir die Verteilung der Objekttypen als Diagramm.

Dieser Prompt verlangt drei Dinge vom LLM. Eine schrittweise Analyse, eine konkrete Zählung und eine Visualisierung. Das LLM muss dafür Code schreiben und ausführen, eine reine Textbeschreibung reicht nicht aus.

**Schritt 4.** Beobachten Sie die Antwort des LLM. Führt es Code aus, oder beschreibt es die Daten nur? Sehen Sie einen Python-Code-Block, den Sie kopieren können? Erscheint ein Diagramm als Bild oder als Textbeschreibung?

Wir wollen Python-Code, der die Analyse macht, nicht eine Beschreibung durch das LLM. Falls das LLM nur beschreibt, fordern Sie es explizit auf.

> Schreibe mir ein Python-Skript, das ich lokal ausführen kann. Ich möchte die gesamten Daten explorieren und auswerten.

**Schritt 5.** Kopieren Sie den Code aus dem Chat. Die meisten LLMs haben einen Kopier-Button am Code-Block. Erstellen Sie in VS Code eine neue Datei, speichern Sie sie als `analyse_workshop_objekte.py` im selben Ordner wie die `workshop_objekte.csv`. Öffnen Sie das Terminal, prüfen Sie mit `cd`, ob Sie im richtigen Ordner sind, und führen Sie aus mit `python analyse_workshop_objekte.py`.

**Schritt 6.** Kommt dasselbe Ergebnis wie im Chat? Dann funktioniert Ihr Setup.

### 8.3 Typische Fehler

"No such file or directory" bedeutet, die CSV liegt nicht im selben Ordner wie das Skript. Prüfen Sie mit `ls` (oder `dir` unter Windows), ob beide Dateien im selben Ordner liegen.

"ModuleNotFoundError" bedeutet, eine Bibliothek fehlt. Lösung ist `pip install bibliotheksname` im Terminal.

"python: command not found" bedeutet, Python ist nicht im PATH. Das sollte seit dem Vorbereitungstreffen gelöst sein. Falls nicht, sprechen Sie die Workshopleitung an.

### 8.4 Was wir aus Hands-On 1 lernen

**Nicht-Determinismus.** "Analysiere die Daten" führt bei jeder Person zu anderen Ergebnissen. Unterschiedliche LLMs, unterschiedliche Einstellungen, unterschiedlicher Code. Die Konsequenz ist, dass wir präziser formulieren müssen, was wir wollen. Das ist das Thema von Context Engineering.

**Context Window.** Die Daten liegen als Token im Context Window. Bei unseren 25 Objekten funktioniert das problemlos. Der Gesamtdatensatz hat aber 3892 Einträge. Da stößt das Context Window je nach Modell an seine Grenzen. *Context Engineering* bedeutet, dem LLM die richtigen Informationen ins Context Window zu geben.

**Tool Use.** Statt nur eine Antwort zu generieren, kann das LLM ein Python-Skript schreiben und in einer integrierten Sandbox ausführen. Das Python-Skript selbst arbeitet deterministisch, gleicher Input ergibt immer gleiches Ergebnis. Der Prozess der Code-Generierung ist es nicht, deshalb hat jede Person ein anderes Skript bekommen. Wir können den Code aus der Sandbox herauskopieren und lokal in VS Code ausführen.

**Die Datenstruktur verstehen.** Bevor wir ein LLM bitten, etwas mit Daten zu tun, müssen wir selbst verstehen, wie die Daten aufgebaut sind. Welche Felder gibt es, wie sind sie formatiert, wo sind Inkonsistenzen. Das LLM braucht genug Kontext über die Struktur, um sinnvollen Code zu generieren. Die menschliche Expertise bleibt unverzichtbar.

---

## 9. Hands-On 2: Von den Daten zur Webseite

### 9.1 Ziel

Aus dem Gesamtdatensatz des Kriminalmuseums (3892 Einträge) eine statische Webdarstellung erstellen. In dieser Übung wenden Sie *Context Engineering* systematisch an.

### 9.2 Schritt 1: data.md erstellen und verifizieren

Laden Sie `all_objects_export.csv` in ein LLM. Bitten Sie das LLM, ein `data.md` zu erzeugen, das den Datensatz vollständig beschreibt, nämlich Felder, Datentypen, Beispiele und Besonderheiten. Lassen Sie das LLM das Ergebnis anschließend gegen die Originaldaten prüfen.

Dieser Schritt hat einen doppelten Zweck. Erstens entsteht ein wiederverwendbares Dokument, das Sie in zukünftigen Chats als Kontext mitgeben können. Zweitens zwingt der Prozess Sie dazu, die Daten selbst zu verstehen. Das Schreiben eines data.md ist selbst eine Form der Datenanalyse.

Im Google Drive-Ordner Hands-On 2 liegt ein fertiges `data.md` als Referenz. Vergleichen Sie Ihr Ergebnis damit.

### 9.3 Schritt 2: CSV → JSON

Geben Sie dem LLM das `data.md` als Kontext. Bitten Sie um ein Python-Skript, das die CSV in eine JSON-Datei überführt. Führen Sie das Skript lokal aus und prüfen Sie das Ergebnis.

Warum JSON? JSON ist praktischer für Webentwicklung als CSV. Wir wollen den Workflow lokal halten, damit jeder Schritt eine prüfbare Datei erzeugt. Ein Beispiel-Snippet aus dem JSON zurück ins LLM kopieren und fragen, ob alles korrekt ist, ist ein guter Review-Schritt.

Legen Sie alle Dokumente (CSV, data.md, Python-Skript, JSON) in einen gemeinsamen Ordner.

### 9.4 Schritt 3: Webseite bauen

Geben Sie dem LLM das `data.md` und ein `requirements.md` (Beschreibung, wie die Webseite aussehen soll). Bitten Sie um eine `index.html` (mit CSS und JavaScript), die das JSON lädt und die Objekte als durchsuchbare Kartenansicht darstellt. Öffnen Sie die Seite im Live Server.

Ein Beispiel für ein requirements.md.

> Die Webseite soll alle Objekte als Karten darstellen. Jede Karte zeigt Titel, Objekttyp, Jahr und Material. Ein Suchfeld filtert die Karten in Echtzeit. Die Seite soll ohne externe Abhängigkeiten funktionieren (kein Framework, kein CDN). Das Design soll schlicht und lesbar sein.

### 9.5 Feedback-Loop

Funktioniert etwas nicht? Fehlermeldungen aus dem Terminal oder der Browser-Konsole (F12) kopieren und dem LLM geben. Sieht die Seite nicht wie gewünscht aus? Screenshot an das LLM schicken.

Dieser iterative Zyklus aus Generieren, Prüfen und Korrigieren ist der Normalfall, nicht die Ausnahme. Erwarten Sie nicht, dass der erste Versuch perfekt funktioniert.

### 9.6 Was passiert, wenn wir dem LLM alle Informationen geben?

Wenn Sie dem LLM das data.md und ein requirements.md mitgeben, passiert Folgendes. Das LLM liest die CSV-Struktur und versteht Felder und Datentypen durch das data.md. Es kann *Extended Thinking* nutzen, um den Workflow zu planen, bevor es Code schreibt. Es erzeugt ein Python-Skript, das den gesamten Prozess orchestriert, von CSV über JSON bis zur fertigen HTML-Seite. Die Qualität des Ergebnisses hängt direkt von der Qualität des Kontexts ab, den Sie bereitgestellt haben.

---

## 10. Reflexion: Limitationen erkennen

### 10.1 Vier Fehlerklassen

LLM-generierter Code kann auf vier typische Weisen fehlerhaft sein.

**Halluzinierte Funktionen.** Das LLM erfindet APIs oder Bibliotheksfunktionen, die nicht existieren. Symptom ist ein `ImportError` oder `AttributeError`.

**Logikfehler bei Randfällen.** Der Code funktioniert bei den meisten Datensätzen, aber nicht bei allen. Beispiel ist ein Parsing-Skript, das bei ungewöhnlichen Zeichenketten im description-Feld scheitert.

**Sicherheitsprobleme.** Fehlende Validierung, unsichere Pfade, ungeprüfte Eingaben. Für lokale Skripte weniger kritisch, für Webseiten im Internet hochrelevant.

**Überkomplexität.** Das LLM verwendet ein Framework, wo eine einfache Lösung ausreichen würde. Symptom ist ein Skript mit 200 Zeilen, das man in 20 Zeilen schreiben könnte.

### 10.2 Wann professionelle Unterstützung nötig ist

Die im Workshop erlernten Fähigkeiten haben klare Grenzen. Professionelle Unterstützung ist nötig bei Sicherheitsanforderungen (sensible Daten, öffentliche Anwendungen), bei Skalierung (große Datenmengen, viele Nutzer:innen), bei Systemintegration (Datenbanken, APIs, IT-Infrastruktur), bei Wartbarkeit (längerfristige Pflege) und bei rechtlichen Anforderungen (Barrierefreiheit, Datenschutz).

AI Coding Literacy befähigt Sie, Prototypen zu erstellen und zu erkennen, wann ein Prototyp zu einer professionellen Lösung weiterentwickelt werden muss. Das ist eine wertvolle Kompetenz.

### 10.3 Ethische und praktische Grenzen

**Trainingsdaten.** Die Modelle wurden auf Material trainiert, dessen urheberrechtlicher Status nicht vollständig geklärt ist. Die Modelle reproduzieren Biases, die sich bei der Verarbeitung historischer Museumsdaten verstärken können.

**Energieverbrauch.** Der Betrieb von *Frontier*-Modellen verbraucht erhebliche Ressourcen.

**Abhängigkeiten.** KI-gestützte Codegenerierung erzeugt neue Abhängigkeiten von proprietären Systemen. API-Nutzung und Subscriptions verursachen laufende Kosten. *Vendor Lock-in* ist ein reales Risiko.

**Transparenz.** LLM-generierter Code funktioniert oft, ohne dass Sie vollständig verstehen, warum. Das erzeugt eine neue Form der Intransparenz in Arbeitsprozessen. AI Coding Literacy adressiert dieses Problem, löst es aber nicht vollständig.

---

## 11. Hands-On 3: Eigene Aufgabe

### 11.1 Ziel

Gelerntes selbstständig auf eine Aufgabe anwenden.

### 11.2 Option A: Eigene Daten

Wenn Sie eigene Daten mitgebracht haben, arbeiten Sie damit. Die Workshopleitung unterstützt bei der Anforderungsformulierung.

### 11.3 Option B: Vorgegebene Aufgaben

Wenn Sie keine eigenen Daten haben, wählen Sie eine der folgenden Aufgaben.

**Erweiterte Objektsuche.** Erstellen Sie eine Webseite mit mehreren Filterkriterien (Objekttyp, Zeitraum, Material), die den Gesamtdatensatz durchsuchbar macht.

**Datenbereinigung.** Schreiben Sie ein Python-Skript, das das semi-strukturierte description-Feld in separate Spalten überführt (Type, Description, Material, Dimensions, Condition, Museum ID).

**Statistik-Dashboard.** Erstellen Sie eine Visualisierung der Verteilung nach Objekttyp, Jahr und Extraktionsqualität.

---

# Teil V – Dokumentation und Weiterarbeit

## 12. Ergebnisse dokumentieren

### 12.1 Dokumentationsvorlage

Füllen Sie die folgende Vorlage aus und speichern Sie sie als `dokumentation.md` in Ihrem Workshop-Ordner.

```markdown
# Workshop-Dokumentation: Programmieren 2.0

**Name:**
**Datum:** 12.02.2026

## Was habe ich erstellt?

(Kurze Beschreibung der Skripte/Webseiten)

## Was hat gut funktioniert?

(Erfolgreiche Prompts/Anforderungen)

## Was hat nicht funktioniert?

(Probleme und Lösungen)

## Wichtigste Erkenntnis

(Eine Sache, die ich mitnehme)

## Nächster Schritt

(Was möchte ich als nächstes ausprobieren?)
```

### 12.2 Wie es weitergeht

**Q&A-Termin.** Ein Nachbereitungstreffen (online, 60 Minuten) klärt Fragen, die bei der Anwendung entstanden sind. Der Termin wird am Ende des Workshops bekannt gegeben.

**Weiterführende Werkzeuge.** Git und GitHub ermöglichen Versionskontrolle Ihrer Skripte. Jupyter Notebooks bieten ein interaktives Format für Datenanalyse. Claude Code ermöglicht die Arbeit mit einem *Agentic Coding*-System, bei dem der Agent autonom über mehrere Schritte arbeitet.

**Das Repository.** Alle Materialien des Workshops, einschließlich dieses Skriptums, sind unter https://github.com/DigitalHumanitiesCraft/ai-coding-literacy verfügbar.

---

# Anhang

## A. Troubleshooting

Bei Problemen gibt es drei Erste-Hilfe-Maßnahmen.

Erstens, VS Code neu starten. Das löst viele Probleme.

Zweitens, die Fehlermeldung lesen. Oft steht die Lösung darin.

Drittens, die Fehlermeldung in ein LLM kopieren und um Hilfe bitten.

Wenn nichts hilft, schreiben Sie eine E-Mail an christopher.pollin@dhcraft.org mit drei Angaben, nämlich was Sie versucht haben, welche Fehlermeldung erscheint und einem Screenshot.

## B. Glossar

| Begriff | Erklärung |
|---|---|
| API | Application Programming Interface, Schnittstelle zur programmatischen Nutzung |
| CORS | Cross-Origin Resource Sharing, Browser-Sicherheitsmechanismus |
| CSV | Comma-Separated Values, tabellarisches Datenformat |
| CSS | Cascading Style Sheets, Sprache für visuelles Design von Webseiten |
| Context Window | Alles, was das LLM während einer Konversation sieht, gemessen in Token |
| Extension | Erweiterung für VS Code, die zusätzliche Funktionen hinzufügt |
| HTML | HyperText Markup Language, Sprache für Struktur von Webseiten |
| JavaScript | Programmiersprache für Interaktivität in Webseiten |
| JSON | JavaScript Object Notation, strukturiertes Datenformat |
| Live Server | VS Code Extension, die HTML-Dateien im Browser anzeigt und bei Änderungen automatisch aktualisiert |
| LLM | Large Language Model, KI-Modell wie Claude oder ChatGPT |
| Markdown | Einfache Auszeichnungssprache für Textformatierung |
| PATH | Systemvariable, die dem Computer sagt, wo Programme zu finden sind |
| Prompt | Die Eingabe oder Anweisung, die einem LLM gegeben wird |
| Skript | Eine Textdatei mit Programmcode, die ausgeführt werden kann |
| Terminal | Textbasierte Eingabezeile zum Ausführen von Befehlen und Programmen |
| Token | Texteinheit, die LLMs verarbeiten, entspricht etwa 0,75 Wörtern |
| Tool Use | Die Fähigkeit eines LLM, Werkzeuge (z.B. Code-Ausführung) zu nutzen |

## C. Ressourcen

### Workshop-Materialien

- Repository: https://github.com/DigitalHumanitiesCraft/ai-coding-literacy
- Google Drive: https://drive.google.com/drive/folders/1m37hhcmlzqmB9evjgVvRK7_Dgu6JCobn
- Vorbereitungslektüre: https://chpollin.github.io/llmdh

### Konzeptionelle Grundlagen

- Karpathy, A. (2025). 2025 LLM Year in Review. https://karpathy.bearblog.dev/year-in-review-2025/
- Mei, L. et al. (2025). A Survey of Context Engineering for Large Language Models. arXiv:2507.13334.
- Schulhoff, S. et al. (2025). The Prompt Report.
- Willison, S. (2025). Vibe Coding. https://simonwillison.net/2025/Mar/19/vibe-coding
- Wing, J. M. (2006). Computational Thinking. Communications of the ACM, 49(3), 33–35.

### Python für Digital Humanities

- Mattingly, W.: Python for Digital Humanities, YouTube-Playlist, 27 Videos
- Digital History Berlin: Python für Historiker:innen, deutschsprachig, Version 1.0 (2022)

### Tools

- Visual Studio Code: https://code.visualstudio.com
- Claude: https://claude.ai
- Anthropic API Dokumentation: https://docs.anthropic.com
- Markdown Guide: https://www.markdownguide.org

### Weiterführend

- GitHub Desktop: https://desktop.github.com
- Google Colab: https://colab.research.google.com
- Obsidian: https://obsidian.md

---

*Dieses Skriptum wurde von Dr. Christopher Pollin (Digital Humanities Craft OG) erstellt. Kontakt: christopher.pollin@dhcraft.org | https://chpollin.github.io | www.dhcraft.org*
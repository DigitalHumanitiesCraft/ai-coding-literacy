# Cheatsheet: Claude API Nutzung

## Installation

```bash
pip install anthropic
```

---

## Minimales Beispiel

```python
import anthropic

client = anthropic.Anthropic(api_key="dein-api-key")

message = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=100,
    messages=[
        {"role": "user", "content": "Hallo, wie geht es dir?"}
    ]
)

print(message.content[0].text)
```

---

## Verfügbare Modelle

| Modell | String | Stärke | Kosten |
|--------|--------|--------|--------|
| Haiku 4.5 | `claude-haiku-4-5-20251001` | Schnell, günstig | $ |
| Sonnet 4 | `claude-sonnet-4-20250514` | Ausgewogen | $$ |
| Opus 4 | `claude-opus-4-20250514` | Stärkste Qualität | $$$ |

**Für den Workshop:** Haiku reicht völlig aus.

---

## Kosten (Stand: Januar 2026)

### Haiku 4.5
- Input: $0.25 / Million Tokens
- Output: $1.25 / Million Tokens

### Was bedeutet das praktisch?
- 1 Token ≈ 0.75 Wörter
- Ein typischer API-Call (500 Input, 200 Output) ≈ $0.0004
- 1000 solcher Calls ≈ $0.40

---

## Parameter erklärt

```python
message = client.messages.create(
    model="...",           # Welches Modell
    max_tokens=500,        # Maximale Antwortlänge
    temperature=0,         # 0 = deterministisch, 1 = kreativ
    messages=[...]         # Die Konversation
)
```

### max_tokens
- Begrenzt die Antwortlänge
- Zu niedrig = Antwort wird abgeschnitten
- Zu hoch = kostet mehr (aber nur für tatsächlich generierte Tokens)

### temperature
- 0 = immer dieselbe Antwort (gut für Extraktion)
- 1 = mehr Variation (gut für kreative Aufgaben)

---

## Antwort auslesen

```python
# Der Text der Antwort
text = message.content[0].text

# Token-Verbrauch
input_tokens = message.usage.input_tokens
output_tokens = message.usage.output_tokens
```

---

## Strukturierte Ausgabe (JSON)

```python
prompt = """Extrahiere die Daten als JSON.
Antworte NUR mit dem JSON, ohne zusätzlichen Text.

Text: Das Objekt ist ein Revolver aus dem Jahr 1895.

JSON:"""

message = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=200,
    messages=[{"role": "user", "content": prompt}]
)

import json
daten = json.loads(message.content[0].text)
```

---

## Mehrere Objekte verarbeiten

```python
import time

ergebnisse = []

for objekt in objekte:
    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=200,
        messages=[{"role": "user", "content": f"Analysiere: {objekt}"}]
    )
    ergebnisse.append(message.content[0].text)
    
    # Pause zwischen Requests (Rate Limiting vermeiden)
    time.sleep(0.5)
```

---

## Fehlerbehandlung

```python
try:
    message = client.messages.create(...)
except anthropic.AuthenticationError:
    print("API-Key ist ungültig")
except anthropic.RateLimitError:
    print("Zu viele Anfragen, warte kurz...")
    time.sleep(60)
except anthropic.APIError as e:
    print(f"API-Fehler: {e}")
```

---

## API-Key Sicherheit

### ❌ NIEMALS so:

```python
API_KEY = "sk-ant-api03-..."  # Nicht in Code committen!
```

### ✅ Besser so (für Produktion):

```python
import os
API_KEY = os.environ.get("ANTHROPIC_API_KEY")
```

Dann in der Konsole:
```bash
export ANTHROPIC_API_KEY="dein-key"
```

### Für den Workshop:
Der Key wird mündlich geteilt und nach der Übung gelöscht.

---

## Typische Probleme

### "AuthenticationError"
→ API-Key ist falsch oder fehlt

### "RateLimitError"
→ Zu viele Anfragen, warte 1 Minute

### Antwort ist JSON mit Markdown-Backticks
```python
text = message.content[0].text
if "```json" in text:
    text = text.split("```json")[1].split("```")[0]
daten = json.loads(text)
```

### Antwort ist abgeschnitten
→ `max_tokens` erhöhen

---

## Dokumentation

- Offizielle Docs: https://docs.anthropic.com
- Python SDK: https://github.com/anthropics/anthropic-sdk-python

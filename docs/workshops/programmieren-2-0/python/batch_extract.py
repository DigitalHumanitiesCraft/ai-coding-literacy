#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Batch-Extraktion von Museumsobjekt-Daten
Tutorial 2, Teil 4: Batch-Verarbeitung

Extrahiert strukturierte Informationen aus Beschreibungstexten
mittels Claude API.
"""

import anthropic
import csv
import json
import time
from typing import Optional

# =============================================================================
# KONFIGURATION
# =============================================================================

# API-Client (API-Key aus Umgebungsvariable ANTHROPIC_API_KEY)
client = anthropic.Anthropic()

# Modell
MODEL = "claude-sonnet-4-20250514"

# Dateipfade
INPUT_CSV = "workshop_objekte.csv"
OUTPUT_CSV = "extrahierte_daten.csv"

# Rate Limiting
PAUSE_SECONDS = 0.5

# =============================================================================
# PROMPT TEMPLATE
# =============================================================================

EXTRACTION_PROMPT = """
Extrahiere strukturierte Informationen aus dieser Museumsobjekt-Beschreibung.

Beschreibung: {description}

Extrahiere folgende Felder (falls vorhanden):
- material: Liste der Materialien
- dimensions: Masseangaben (als Text)
- origin: Herkunftsort oder -land
- condition: Zustandsbeschreibung

Ausgabe als JSON. Felder ohne Information: null.
Nur das JSON ausgeben, keine Erklaerung.

Beispiel-Ausgabe:
{{"material": ["Stahl", "Holz"], "dimensions": "L. 25 cm", "origin": null, "condition": null}}
"""

# =============================================================================
# FUNKTIONEN
# =============================================================================

def extract_with_retry(prompt: str, max_retries: int = 3) -> Optional[dict]:
    """Extrahiert Daten mit Wiederholungsversuchen bei Fehlern."""

    for attempt in range(max_retries):
        try:
            message = client.messages.create(
                model=MODEL,
                max_tokens=500,
                messages=[{"role": "user", "content": prompt}]
            )

            response_text = message.content[0].text

            # JSON aus Markdown-Block extrahieren falls noetig
            if response_text.startswith("```"):
                response_text = response_text.split("```")[1]
                if response_text.startswith("json"):
                    response_text = response_text[4:]

            return json.loads(response_text.strip())

        except json.JSONDecodeError as e:
            print(f"  JSON-Fehler (Versuch {attempt + 1}): {e}")
            time.sleep(1)

        except anthropic.RateLimitError:
            print(f"  Rate Limit erreicht, warte 30 Sekunden...")
            time.sleep(30)

        except Exception as e:
            print(f"  Fehler (Versuch {attempt + 1}): {e}")
            time.sleep(2)

    return None


def load_csv(filepath: str) -> list:
    """Laedt die CSV-Datei."""
    objects = []
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            objects.append(row)
    return objects


def save_results(results: list, filepath: str):
    """Speichert die Ergebnisse als CSV."""
    if not results:
        print("Keine Ergebnisse zum Speichern.")
        return

    # Alle Schluessel sammeln
    all_keys = set()
    for r in results:
        all_keys.update(r.keys())

    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=sorted(all_keys))
        writer.writeheader()
        writer.writerows(results)


def main():
    """Hauptfunktion: Batch-Verarbeitung."""
    print("Batch-Extraktion von Museumsobjekt-Daten")
    print("=" * 50)

    # Daten laden
    print(f"Lade {INPUT_CSV}...")
    objects = load_csv(INPUT_CSV)
    print(f"Geladen: {len(objects)} Objekte")
    print()

    # Ergebnisse sammeln
    results = []

    for i, obj in enumerate(objects):
        title = obj.get('title', 'Ohne Titel')[:30]
        print(f"[{i+1}/{len(objects)}] {title}...")

        # Prompt erstellen
        description = obj.get('description', '')
        if not description:
            print("  Keine Beschreibung, ueberspringe.")
            results.append({
                'pid': obj.get('pid'),
                'error': 'Keine Beschreibung'
            })
            continue

        prompt = EXTRACTION_PROMPT.format(description=description)

        # Extraktion
        extracted = extract_with_retry(prompt)

        if extracted:
            extracted['pid'] = obj.get('pid')
            extracted['title'] = obj.get('title')
            # Listen zu Strings konvertieren fuer CSV
            if extracted.get('material'):
                extracted['material'] = ', '.join(extracted['material'])
            results.append(extracted)
            print("  OK")
        else:
            results.append({
                'pid': obj.get('pid'),
                'title': obj.get('title'),
                'error': 'Extraktion fehlgeschlagen'
            })
            print("  FEHLER")

        # Pause zwischen Anfragen
        time.sleep(PAUSE_SECONDS)

    # Ergebnisse speichern
    print()
    print(f"Speichere {OUTPUT_CSV}...")
    save_results(results, OUTPUT_CSV)
    print(f"Fertig! {len(results)} Objekte verarbeitet.")


if __name__ == "__main__":
    main()

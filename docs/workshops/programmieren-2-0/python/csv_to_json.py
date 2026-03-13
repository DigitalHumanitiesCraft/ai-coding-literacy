#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CSV zu JSON Konverter
Tutorial 1, Schritt 4: Datenformat-Konvertierung

Dieses Skript konvertiert die Workshop-Objekte von CSV zu JSON.
"""

import csv
import json

# Eingabe- und Ausgabedateien
CSV_DATEI = "workshop_objekte.csv"
JSON_DATEI = "workshop_objekte.json"

def lade_csv(dateipfad):
    """Liest die CSV-Datei und gibt eine Liste von Dictionaries zurueck."""
    objekte = []
    try:
        with open(dateipfad, 'r', encoding='utf-8') as datei:
            reader = csv.DictReader(datei)
            for zeile in reader:
                # Konvertiere numerische Felder
                objekt = {}
                for key, value in zeile.items():
                    # year als Integer (falls vorhanden)
                    if key == 'year' and value:
                        try:
                            objekt[key] = int(value)
                        except ValueError:
                            objekt[key] = None
                    # qualityScore als Float (falls vorhanden)
                    elif key == 'qualityScore' and value:
                        try:
                            objekt[key] = float(value)
                        except ValueError:
                            objekt[key] = None
                    # Leere Strings zu None
                    elif value == '':
                        objekt[key] = None
                    else:
                        objekt[key] = value
                objekte.append(objekt)
    except FileNotFoundError:
        print(f"Fehler: Datei '{dateipfad}' nicht gefunden.")
        return None
    return objekte

def speichere_json(objekte, dateipfad):
    """Speichert die Objekte als JSON-Datei."""
    try:
        with open(dateipfad, 'w', encoding='utf-8') as datei:
            json.dump(objekte, datei, ensure_ascii=False, indent=2)
        return True
    except IOError as e:
        print(f"Fehler beim Speichern: {e}")
        return False

def main():
    """Hauptfunktion: Konvertiert CSV zu JSON."""
    print("CSV zu JSON Konverter")
    print("---------------------")

    # CSV laden
    print(f"Lade {CSV_DATEI}...")
    objekte = lade_csv(CSV_DATEI)

    if objekte is None:
        return

    print(f"Geladen: {len(objekte)} Objekte")

    # JSON speichern
    print(f"Speichere als {JSON_DATEI}...")
    if speichere_json(objekte, JSON_DATEI):
        print("Fertig!")
        print(f"\nDie Datei {JSON_DATEI} wurde erstellt.")
        print("Oeffnen Sie sie in VS Code, um die Struktur zu pruefen.")
    else:
        print("Konvertierung fehlgeschlagen.")

if __name__ == "__main__":
    main()

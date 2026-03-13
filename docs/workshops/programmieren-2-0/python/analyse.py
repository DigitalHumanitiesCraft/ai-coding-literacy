#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Analyse-Skript fuer Workshop-Objekte
Tutorial 1, Schritt 3: Lokale Python-Ausfuehrung

Dieses Skript zaehlt die Anzahl Objekte pro objectClass.
"""

import csv
from collections import Counter

# Pfad zur CSV-Datei (relativ zum Skript-Ordner)
# Passen Sie den Pfad an, falls die Datei woanders liegt
CSV_DATEI = "workshop_objekte.csv"

def lade_csv(dateipfad):
    """Liest die CSV-Datei und gibt eine Liste von Dictionaries zurueck."""
    objekte = []
    try:
        with open(dateipfad, 'r', encoding='utf-8') as datei:
            reader = csv.DictReader(datei)
            for zeile in reader:
                objekte.append(zeile)
    except FileNotFoundError:
        print(f"Fehler: Datei '{dateipfad}' nicht gefunden.")
        print("Stellen Sie sicher, dass die CSV-Datei im selben Ordner liegt.")
        return None
    return objekte

def zaehle_nach_klasse(objekte):
    """Zaehlt die Objekte nach objectClass."""
    klassen = [obj.get('objectClass', 'Unbekannt') for obj in objekte]
    return Counter(klassen)

def zeige_tabelle(zaehler):
    """Gibt die Ergebnisse als formatierte Tabelle aus."""
    print("\n" + "=" * 40)
    print("OBJEKTE NACH KATEGORIE")
    print("=" * 40)
    print(f"{'Kategorie':<25} {'Anzahl':>10}")
    print("-" * 40)

    # Sortiert nach Anzahl (absteigend)
    for klasse, anzahl in zaehler.most_common():
        print(f"{klasse:<25} {anzahl:>10}")

    print("-" * 40)
    print(f"{'GESAMT':<25} {sum(zaehler.values()):>10}")
    print("=" * 40)

def main():
    """Hauptfunktion: Laedt Daten und zeigt Analyse."""
    print("Workshop-Objekte Analyse")
    print("------------------------")

    # CSV laden
    objekte = lade_csv(CSV_DATEI)
    if objekte is None:
        return

    print(f"Geladen: {len(objekte)} Objekte")

    # Nach Klasse zaehlen
    zaehler = zaehle_nach_klasse(objekte)

    # Ergebnis anzeigen
    zeige_tabelle(zaehler)

if __name__ == "__main__":
    main()

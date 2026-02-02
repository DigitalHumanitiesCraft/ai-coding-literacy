# beispiel_csv_analyse.py
# Workshop: Programmieren 2.0 – LLMs für Forschungsdaten im Museum
# Block 3: Musterlösung
#
# Dieses Skript analysiert die Kriminalmuseum-Daten und gibt aus:
# - Anzahl der Objekte
# - Alle eindeutigen Typen
# - Das älteste und jüngste Objekt

import csv
import re
import os

# =============================================================================
# KONFIGURATION
# =============================================================================

# Dateipfad - passe diesen an, falls nötig
# Skript liegt in: workshops/programmieren-2-0/python/
# Daten liegen in: data/kriminalmuseum/
DATEN_ORDNER = os.path.join(os.path.dirname(__file__), "..", "..", "..", "data", "kriminalmuseum")
DATEI = os.path.join(DATEN_ORDNER, "workshop_objekte.csv")

# Alternative: Datei im selben Ordner (für Workshop-Teilnehmende)
# DATEI = "workshop_objekte.csv"

# =============================================================================
# HAUPTPROGRAMM
# =============================================================================

print("=" * 60)
print("Kriminalmuseum Datenanalyse")
print("Workshop: Programmieren 2.0, Block 3")
print("=" * 60)

# Prüfen ob Datei existiert
if not os.path.exists(DATEI):
    print(f"\nFEHLER: Datei nicht gefunden: {DATEI}")
    print("Bitte passe den Dateipfad in der Konfiguration an.")
    exit(1)

# CSV einlesen
with open(DATEI, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    objekte = list(reader)

# 1. Anzahl der Objekte
print(f"\n1. ANZAHL DER OBJEKTE")
print(f"   {len(objekte)} Objekte im Datensatz")

# 2. Alle eindeutigen Typen extrahieren
print(f"\n2. EINDEUTIGE TYPEN")
typen = set()
for obj in objekte:
    # Typ ist bereits als eigene Spalte vorhanden
    if 'type' in obj and obj['type']:
        typen.add(obj['type'])

print(f"   {len(typen)} verschiedene Typen gefunden:")
for typ in sorted(typen):
    # Zählen wie viele Objekte diesen Typ haben
    anzahl = sum(1 for o in objekte if o.get('type') == typ)
    print(f"   - {typ} ({anzahl}x)")

# 3. Ältestes und jüngstes Objekt
print(f"\n3. ZEITLICHE SPANNE")

# Jahre extrahieren (sind bereits als Spalte vorhanden)
objekte_mit_jahr = []
for obj in objekte:
    if 'year' in obj and obj['year']:
        try:
            jahr = int(obj['year'])
            objekte_mit_jahr.append((obj, jahr))
        except ValueError:
            pass

if objekte_mit_jahr:
    # Sortieren nach Jahr
    objekte_mit_jahr.sort(key=lambda x: x[1])
    
    aeltestes = objekte_mit_jahr[0]
    juengstes = objekte_mit_jahr[-1]
    
    print(f"   Ältestes Objekt ({aeltestes[1]}):")
    print(f"   - {aeltestes[0]['title']}")
    
    print(f"\n   Jüngstes Objekt ({juengstes[1]}):")
    print(f"   - {juengstes[0]['title']}")
    
    print(f"\n   Zeitspanne: {aeltestes[1]} bis {juengstes[1]} ({juengstes[1] - aeltestes[1]} Jahre)")
else:
    print("   Keine Jahreszahlen gefunden.")

print("\n" + "=" * 60)
print("Analyse abgeschlossen.")
print("=" * 60)

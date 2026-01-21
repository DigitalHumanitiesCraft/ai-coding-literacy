# api_beispiel_extraktion.py
# Workshop: Programmieren 2.0 – LLMs für Forschungsdaten im Museum
# Block 5, Aufgabe 2: Batch-Extraktion
#
# Dieses Skript zeigt, wie man die Claude API nutzt, um strukturierte
# Informationen aus mehreren Museumsobjekten zu extrahieren.
#
# WICHTIG: Der API-Key wird im Workshop geteilt und danach gelöscht.
# Speichere niemals API-Keys in Code, den du veröffentlichst!

import anthropic
import csv
import json
import time
import os

# =============================================================================
# KONFIGURATION
# =============================================================================

# API-Key hier eintragen (wird im Workshop mündlich geteilt)
API_KEY = "wird-im-workshop-geteilt"

# Modell: Claude Haiku 4.5 ist schnell und günstig
MODEL = "claude-haiku-4-5-20251001"

# Dateipfade relativ zum Repository-Root
# Skript liegt in: workshops/programmieren-2-0/python/
# Daten liegen in: data/kriminalmuseum/
DATEN_ORDNER = os.path.join(os.path.dirname(__file__), "..", "..", "..", "data", "kriminalmuseum")

# Alternativ: Wenn die Daten im selben Ordner liegen, auskommentieren:
# DATEN_ORDNER = os.path.dirname(__file__)

EINGABE_DATEI = os.path.join(DATEN_ORDNER, "workshop_objekte.csv")
AUSGABE_DATEI = os.path.join(os.path.dirname(__file__), "workshop_objekte_extrahiert.csv")

# =============================================================================
# HILFSFUNKTIONEN
# =============================================================================

def extrahiere_mit_llm(client, beschreibung):
    """
    Sendet eine Beschreibung an Claude und lässt strukturierte Daten extrahieren.
    
    Args:
        client: Der Anthropic-Client
        beschreibung: Die Rohbeschreibung aus dem Museumsdatensatz
    
    Returns:
        Ein Dictionary mit den extrahierten Feldern
    """
    
    prompt = f"""Analysiere diese Museumsobjekt-Beschreibung und extrahiere die folgenden Informationen.
Antworte NUR mit einem JSON-Objekt, ohne zusätzlichen Text.

Beschreibung:
{beschreibung}

Extrahiere:
- typ: Der Haupttyp des Objekts (z.B. "Waffen", "Falsifikate")
- untertyp: Der spezifischere Typ falls vorhanden
- material: Das Material oder die Materialien
- jahr: Das Jahr als Zahl (falls erwähnt)
- zustand: Der Erhaltungszustand
- museum_id: Die Museums-ID (Format: KM-O.xxx)

Falls ein Feld nicht gefunden wird, setze es auf null.

Antwort als JSON:"""

    message = client.messages.create(
        model=MODEL,
        max_tokens=500,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    
    # Antwort extrahieren
    antwort_text = message.content[0].text
    
    # JSON parsen
    try:
        # Manchmal antwortet das LLM mit ```json ... ```
        if "```json" in antwort_text:
            antwort_text = antwort_text.split("```json")[1].split("```")[0]
        elif "```" in antwort_text:
            antwort_text = antwort_text.split("```")[1].split("```")[0]
        
        return json.loads(antwort_text.strip())
    except json.JSONDecodeError:
        print(f"  Warnung: Konnte JSON nicht parsen: {antwort_text[:100]}...")
        return None


def verarbeite_datensatz(eingabe_datei, ausgabe_datei, max_objekte=5):
    """
    Verarbeitet einen CSV-Datensatz und extrahiert strukturierte Daten.
    
    Args:
        eingabe_datei: Pfad zur Eingabe-CSV
        ausgabe_datei: Pfad zur Ausgabe-CSV
        max_objekte: Maximale Anzahl zu verarbeitender Objekte (für Tests/Kosten)
    """
    
    # Prüfen ob Eingabedatei existiert
    if not os.path.exists(eingabe_datei):
        print(f"FEHLER: Datei nicht gefunden: {eingabe_datei}")
        print(f"\nMögliche Lösungen:")
        print(f"  1. Führe das Skript aus dem richtigen Ordner aus")
        print(f"  2. Kopiere workshop_objekte.csv in denselben Ordner wie dieses Skript")
        print(f"  3. Passe den DATEN_ORDNER in der Konfiguration an")
        return
    
    # Client initialisieren
    client = anthropic.Anthropic(api_key=API_KEY)
    
    # Eingabedaten lesen
    with open(eingabe_datei, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        objekte = list(reader)
    
    print(f"Gefundene Objekte: {len(objekte)}")
    print(f"Verarbeite: {min(len(objekte), max_objekte)} Objekte")
    print("-" * 60)
    
    ergebnisse = []
    
    for i, obj in enumerate(objekte[:max_objekte]):
        print(f"\n[{i+1}/{max_objekte}] {obj.get('titel', obj.get('title', 'Unbekannt'))}")
        
        # Beschreibung finden (verschiedene Spaltennamen möglich)
        beschreibung = obj.get('beschreibung_roh', obj.get('beschreibung', obj.get('description', '')))
        
        if not beschreibung:
            print("  Keine Beschreibung gefunden, überspringe...")
            continue
        
        # API-Call
        extrahiert = extrahiere_mit_llm(client, beschreibung)
        
        if extrahiert:
            # Original und extrahierte Daten kombinieren
            ergebnis = {
                'id': obj.get('id', obj.get('identifier', '')),
                'titel': obj.get('titel', obj.get('title', '')),
                'typ_extrahiert': extrahiert.get('typ'),
                'untertyp_extrahiert': extrahiert.get('untertyp'),
                'material_extrahiert': extrahiert.get('material'),
                'jahr_extrahiert': extrahiert.get('jahr'),
                'zustand_extrahiert': extrahiert.get('zustand'),
                'museum_id_extrahiert': extrahiert.get('museum_id')
            }
            ergebnisse.append(ergebnis)
            
            print(f"  Typ: {extrahiert.get('typ')}")
            print(f"  Jahr: {extrahiert.get('jahr')}")
            print(f"  Material: {str(extrahiert.get('material'))[:50]}...")
        
        # Kurze Pause zwischen Requests (Rate Limiting vermeiden)
        time.sleep(0.5)
    
    # Ergebnisse speichern
    if ergebnisse:
        with open(ausgabe_datei, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=ergebnisse[0].keys())
            writer.writeheader()
            writer.writerows(ergebnisse)
        
        print(f"\n" + "=" * 60)
        print(f"Ergebnisse gespeichert in: {ausgabe_datei}")
        print(f"Verarbeitete Objekte: {len(ergebnisse)}")
    else:
        print("\nKeine Ergebnisse zum Speichern.")


# =============================================================================
# HAUPTPROGRAMM
# =============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("LLM-gestützte Datenextraktion aus Museumsobjekten")
    print("Workshop: Programmieren 2.0")
    print("=" * 60)
    
    # Prüfen ob API-Key gesetzt ist
    if API_KEY == "wird-im-workshop-geteilt":
        print("\nFEHLER: Bitte trage den API-Key ein, der im Workshop geteilt wird.")
        print("Öffne diese Datei und ersetze 'wird-im-workshop-geteilt' durch den echten Key.")
        exit(1)
    
    print(f"\nEingabedatei: {EINGABE_DATEI}")
    print(f"Ausgabedatei: {AUSGABE_DATEI}")
    
    # Verarbeitung starten
    # Für den Workshop: nur 5 Objekte, um API-Kosten zu sparen
    verarbeite_datensatz(
        eingabe_datei=EINGABE_DATEI,
        ausgabe_datei=AUSGABE_DATEI,
        max_objekte=5
    )
    
    print("\n" + "=" * 60)
    print("Tipp: Öffne die Ausgabe-CSV und vergleiche")
    print("die extrahierten Daten mit den Originalbeschreibungen!")
    print("=" * 60)

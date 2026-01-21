# api_einfach.py
# Workshop: Programmieren 2.0 – LLMs für Forschungsdaten im Museum
# Block 5, Aufgabe 1: Einzelner API-Call
#
# Dieses Skript zeigt den einfachsten Fall: ein einzelner API-Call an Claude.
# Perfekt zum Verstehen, wie die API funktioniert.
#
# WICHTIG: Der API-Key wird im Workshop geteilt und danach gelöscht.
# Speichere niemals API-Keys in Code, den du veröffentlichst!

import anthropic

# =============================================================================
# KONFIGURATION
# =============================================================================

# API-Key hier eintragen (wird im Workshop mündlich geteilt)
API_KEY = "wird-im-workshop-geteilt"

# Modell: Claude Haiku 4.5 ist schnell und günstig
MODEL = "claude-haiku-4-5-20251001"

# =============================================================================
# HAUPTPROGRAMM
# =============================================================================

print("=" * 60)
print("LLM-API Beispiel: Einzelner Call")
print("Workshop: Programmieren 2.0")
print("=" * 60)

# Prüfen ob API-Key gesetzt ist
if API_KEY == "wird-im-workshop-geteilt":
    print("\nFEHLER: Bitte trage den API-Key ein!")
    print("Öffne diese Datei und ersetze 'wird-im-workshop-geteilt'")
    print("durch den Key, der im Workshop geteilt wird.")
    exit(1)

# Client initialisieren
client = anthropic.Anthropic(api_key=API_KEY)

# Eine Beispiel-Beschreibung aus dem Kriminalmuseum
beschreibung = """Type: Waffen | Type: Revolver | Description: Revolver, Kopie einer 
Smith & Wesson "Double Action", Kaliber .32, Jahr 1895 | Material: Stahl | 
Dimensions: height: 3,2 cm, width: 17,1 cm, depth: 10,1 cm | 
Condition: fester haftende Verschmutzung, Metall korrodiert | Museum ID: KM-O.1-1"""

# Prompt formulieren
prompt = f"""Extrahiere aus dieser Museumsbeschreibung das Jahr als Zahl.
Antworte NUR mit der Jahreszahl, nichts anderes.

Beschreibung: {beschreibung}

Jahr:"""

print("\nSende Anfrage an Claude...")
print("-" * 60)

# API-Call
message = client.messages.create(
    model=MODEL,
    max_tokens=50,
    messages=[
        {"role": "user", "content": prompt}
    ]
)

# Ergebnis ausgeben
antwort = message.content[0].text
print(f"Beschreibung: {beschreibung[:80]}...")
print(f"\nAnfrage: Extrahiere das Jahr aus der Beschreibung")
print(f"Antwort: {antwort}")
print("-" * 60)

# Token-Verbrauch anzeigen
print(f"\nToken-Verbrauch:")
print(f"  Input:  {message.usage.input_tokens} Tokens")
print(f"  Output: {message.usage.output_tokens} Tokens")

# Kosten schätzen (Haiku 4.5 Preise: $0.25/M input, $1.25/M output)
input_cost = message.usage.input_tokens * 0.25 / 1_000_000
output_cost = message.usage.output_tokens * 1.25 / 1_000_000
total_cost = input_cost + output_cost
print(f"  Geschätzte Kosten: ${total_cost:.6f}")

print("\n" + "=" * 60)
print("Fertig! Du hast gerade deinen ersten API-Call gemacht.")
print("=" * 60)

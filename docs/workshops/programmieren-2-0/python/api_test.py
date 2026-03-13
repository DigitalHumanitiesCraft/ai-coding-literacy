#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API Test-Skript
Tutorial 2, Teil 2: Erster API-Aufruf

Testet die Verbindung zur Claude API.
"""

import anthropic

# API-Client erstellen
# Option 1: API-Key direkt (nur fuer Tests!)
# client = anthropic.Anthropic(api_key="Ihr-API-Key-hier")

# Option 2: API-Key aus Umgebungsvariable (empfohlen)
# export ANTHROPIC_API_KEY="sk-ant-..." im Terminal setzen
client = anthropic.Anthropic()

# Nachricht senden
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Was ist ein Museum? Antworte in 2-3 Saetzen."}
    ]
)

# Antwort ausgeben
print("Antwort von Claude:")
print("-" * 40)
print(message.content[0].text)
print("-" * 40)
print(f"Verwendete Tokens: {message.usage.input_tokens} (Input) + {message.usage.output_tokens} (Output)")

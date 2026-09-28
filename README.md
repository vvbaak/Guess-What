# Guess What

Een mobiele webapp (Heads Up-stijl) voor iPhone en Safari die lokaal en offline gespeeld kan worden en als app op het beginscherm kan worden geplaatst.

## Gebruik

1. Open een terminal in deze map.
2. Start de server:

```bash
python -m http.server 3000
```

3. Open op je iPhone in Safari: http://<IP-ADRES-VAN-JE-COMPUTER>:3000
4. Kies in Safari: "Toevoegen aan beginscherm"
5. Speel vanuit de app op je beginscherm.

## Gameplay

- Kies het aantal teams (2, 3 of 4) en geef elk team een naam en categorie (Kids of Volwassenen)
- Kies de speeltijd (60/90/120 seconden)
- Speel om de beurt: houd de telefoon in landscape op je voorhoofd
- Druk op `Goed` voor een punt en het volgende woord, of `Pas` om over te slaan
- Het eerste team dat 30 punten haalt, wint

## Kenmerken

- Offline speelbaar (PWA met service worker)
- Highscore per categorie, lokaal bewaard
- Geluiden bij aftellen, Goed/Pas en winst
- Scherm blijft aan tijdens het spelen (Wake Lock)
- Geen woordherhaling binnen één spel

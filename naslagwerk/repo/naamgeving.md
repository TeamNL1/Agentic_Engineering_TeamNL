---
titel: Naamgeving
categorie: structuur
moeilijkheid: 1
---

# Naamgeving

## In één zin
Geef repositories, mappen, bestanden en branches een vaste, voorspelbare naam, zodat jij (en je agent) over drie jaar nog weet wat waar staat.

## Waarom
Stel je voor: het is drie jaar later en je hebt 50 repositories gemaakt. Welke informatie heb je minimaal nodig om je weg terug te vinden? Met `test2`, `Dashboard_NEW` en `analyse final (1)` lukt dat niet. Met een vaste opbouw zie je het in één oogopslag, en lijstjes sorteren vanzelf logisch.

Bovendien: een rij netjes benoemde repositories geeft gewoon voldoening.

## De afspraak

**Alles in kleine letters, woorden gescheiden door streepjes.**

```text
doelgroep-doel-specifiek
```

| Deel | Vraag | Voorbeelden |
|---|---|---|
| **doelgroep** | Voor wie is het? | de bond (`wsv`, `knltb`, `knzb`), een team, `ssc` |
| **doel** | Wat doet het? | `data-mining`, `dashboard`, `belasting-monitor` |
| **specifiek** | Wat maakt het uniek? (optioneel) | `koffiepauze`, `ek-2027`, `prototype` |

Voorbeeld: **`wsv-data-mining-koffiepauze`**

Zelfde idee voor andere namen:

| Wat | Afspraak | Voorbeeld |
|---|---|---|
| Repository | `doelgroep-doel-specifiek` | `knzb-belasting-monitor` |
| Map | kleine letters met streepjes | `data/example/`, `docs/handoffs/` |
| Document | kleine letters met streepjes, datum vooraan als volgorde telt | `20261030-handoff.md`, `plan-van-aanpak.md` |
| Branch | soort/onderwerp | `feature/sprint-snelheid`, `fix/lege-gps-data` |
| Python-bestand of -module | kleine letters met **underscores** (Python kan geen streepjes importeren) | `sprint_analyse.py` |

## Wanneer wel, wanneer (nog) niet
- **Altijd**, vanaf de eerste repository. Hernoemen achteraf kan, maar kost moeite: links, remotes en verwijzingen moeten mee.
- Spreek met je team één doelgroep-afkorting per bond af, anders krijg je `wsv-` naast `schaatsen-`.

## Zo begin je
- Bedenk de naam **voordat** je de repository aanmaakt: doelgroep, doel, eventueel iets specifieks.
- Zet de afspraak in je [`AGENTS.md`](agents-md.md), dan houdt je agent zich er ook aan:
  ```markdown
  ## Naamgeving
  - Bestanden en mappen: kleine letters met streepjes. Python-modules: kleine letters met underscores.
  - Geen spaties, geen hoofdletters, geen "final", "nieuw" of "v2" in namen: daarvoor heb je git.
  ```
- Een bestaande GitHub-repository hernoemen: *Settings → Repository name*. GitHub stuurt de oude URL een tijd door, maar werk je lokale remote bij met `git remote set-url origin <nieuwe-url>`.

## Valkuilen
- **Versienummers in namen** (`analyse_v3_definitief.py`). Versies bijhouden is precies waar git voor is.
- **Spaties en hoofdletters.** Spaties breken commando's, en Windows en Mac/Linux gaan verschillend om met hoofdletters.
- **Te algemene namen** (`dashboard`, `data`, `test`). Over drie jaar heb je er tien van.
- **Afkortingen die alleen jij kent.** Gebruik afkortingen die je team ook gebruikt.

## Zie ook
[folder structure](folder-structure.md) · [`AGENTS.md`](agents-md.md) · [`README.md`](readme.md)

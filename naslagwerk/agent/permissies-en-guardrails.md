---
titel: Permissies en guardrails
categorie: wat-mag-hij
moeilijkheid: 1
---

# Permissies en guardrails

## In één zin
Leg vast wat je agent zelf mag, wat hij eerst moet vragen en wat nooit mag.

## Waarom
Je agent werkt met jouw rechten: jouw bestanden, jouw terminal, jouw logins (GitHub, OneDrive, je browser). Permissies bepalen hoeveel je hem toevertrouwt. Te streng en je klikt de hele dag op "toestaan". Te los en hij pusht, verwijdert of leest dingen die je niet wilde.

## Permissiemodi
| Modus | Wat er gebeurt | Wanneer |
|---|---|---|
| **Vragen** (standaard) | Agent vraagt bij elke bewerking en elk commando | Begin, onbekend terrein |
| **Plan** | Agent mag alleen lezen en een plan voorstellen | Voor elke grotere taak |
| **Bewerkingen automatisch** | Bestanden aanpassen mag, commando's vragen nog | Als je het plan hebt goedgekeurd |
| **Alles mag** | Geen vragen meer | Alleen in een [sandbox](sandbox.md) |

Codex kent vergelijkbare standen: alleen lezen, automatisch binnen je projectmap, en volledige toegang. Mistral Vibe stelt per tool in of hij mag, eerst moet vragen of niet mag (controleer de documentatie).

## Wanneer wel, wanneer (nog) niet
- Begin streng en verruim wat je vaak goedkeurt en ongevaarlijk vindt (`git status`, tests draaien).
- "Alles mag" alleen als de omgeving zelf de grens is (sandbox zonder je data en logins).

## Zo begin je
`.claude/settings.json` in je project:
```json
{
  "permissions": {
    "allow": [
      "Bash(git status)",
      "Bash(git diff:*)",
      "Bash(python -m pytest:*)"
    ],
    "ask": [
      "Bash(git push:*)",
      "Bash(pip install:*)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./data/private/**)",
      "Bash(git push --force:*)",
      "Bash(rm -rf:*)"
    ]
  }
}
```
Bij Codex stel je in `~/.codex/config.toml` onder meer `approval_policy` en `sandbox_mode` in. Controleer de actuele opties met `/approvals` of in de documentatie. Bij Mistral Vibe gebeurt dit in `~/.vibe/config.toml` of in `.vibe/config.toml` in je project.

## Valkuilen
- **Deny-regels zijn geen kluis.** `Read(./data/private/**)` blokkeert het lezen door de agent, maar een Python-script dat de agent draait kan het bestand nog steeds openen. Zie [data access](data-access.md).
- Automatisch "altijd toestaan" klikken. Lees wat je goedkeurt.
- Ingelogde tools: een agent met toegang tot je browser of `gh` kan namens jou dingen doen op GitHub.

## Zie ook
[config levels](config-levels.md) · [data access](data-access.md) · [sandbox](sandbox.md)

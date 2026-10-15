---
titel: .env en .env.example
categorie: veilig
moeilijkheid: 1
---

# .env en .env.example

## In één zin
`.env` bevat jouw secrets en lokale instellingen. `.env.example` laat zien wélke variabelen er nodig zijn, zonder de waarden.

## Waarom
API-keys, wachtwoorden en paden naar privédata horen niet in je code en niet in git. Je buddy moet wel weten welke variabelen hij zelf moet invullen. Dat vertelt `.env.example`.

## Wanneer wel, wanneer (nog) niet
- Zodra je code iets nodig heeft dat een **secret** is (API-key, wachtwoord) of dat **per computer verschilt** (pad naar je data folder).
- Heb je geen van beide, dan heb je het (nog) niet nodig.

## Zo begin je
`.env.example` (wél in git):
```dotenv
# API-key van de data-aanbieder. Vraag hem aan bij [wie].
DATA_API_KEY=
# Pad naar je lokale map met echte data
DATA_DIR=data/private
```

`.env` (níét in git, staat in [`.gitignore`](gitignore.md)):
```dotenv
DATA_API_KEY=<jouw-eigen-key-staat-alleen-hier>
DATA_DIR=C:/pad/naar/jouw/sprintdata
```

Inlezen in Python:
```python
from dotenv import load_dotenv   # pip install python-dotenv
import os
load_dotenv()
key = os.environ["DATA_API_KEY"]
```

## Valkuilen
- **Je agent kan `.env` lezen.** Wat de agent leest, gaat naar de modelaanbieder. Blokkeer het lezen van `.env` in je [agentinstellingen](../agent/permissies-en-guardrails.md).
- Plak geen keys in de chat ("hier is mijn key, waarom werkt het niet?"). Ook dan zijn ze uitgelekt.
- `print(os.environ)` in een debugsessie zet al je secrets in de output, en daarmee in de context van je agent.

## Zie ook
[`gitignore.md`](gitignore.md) · [`gitleaks-pre-commit.md`](gitleaks-pre-commit.md) · [permissies](../agent/permissies-en-guardrails.md)

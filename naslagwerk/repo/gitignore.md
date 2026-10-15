---
titel: .gitignore
categorie: veilig
moeilijkheid: 1
---

# .gitignore

## In één zin
Een lijst met bestanden en mappen die git moet negeren.

## Waarom
Sommige dingen horen niet in je geschiedenis: secrets (`.env`), privédata, je virtuele omgeving (`.venv/`), gegenereerde bestanden en caches. Wat eenmaal gepusht is, blijft in de geschiedenis staan, ook als je het daarna verwijdert.

## Wanneer wel, wanneer (nog) niet
- **Altijd, en vóór de eerste commit.** Achteraf toevoegen haalt reeds gecommitte bestanden niet uit de geschiedenis.
- Let op: `.gitignore` is **geen beveiliging**. Het voorkomt alleen dat git een bestand oppakt. Je agent kan het bestand nog steeds lezen. Zie [permissies](../agent/permissies-en-guardrails.md).

## Zo begin je
```gitignore
# Secrets
.env
.env.*
!.env.example

# Data (de map zelf blijft bestaan via .gitkeep)
data/private/*
!data/private/.gitkeep

# Python
.venv/
__pycache__/
.ipynb_checkpoints/

# Gegenereerd
output/
build/
*.log

# Persoonlijke agent-instellingen
.claude/settings.local.json
```

Controleren of het werkt:
```bash
git status --short          # staat .env hier niet tussen? goed zo
git check-ignore -v .env    # laat zien welke regel .env negeert
```

## Valkuilen
- **Al gecommit?** Dan helpt `.gitignore` niet meer. Gebruik `git rm --cached <bestand>`. Zat er een secret in, vervang dat secret dan: beschouw het als uitgelekt.
- `git add .` voegt alles toe wat niet genegeerd wordt. Kijk altijd eerst naar `git status`.
- Een lege map waarvan je de inhoud negeert, bewaar je met [`.gitkeep`](gitkeep.md).

## Zie ook
[`env.md`](env.md) · [`data-folders.md`](data-folders.md) · [`gitleaks-pre-commit.md`](gitleaks-pre-commit.md) · [permissies](../agent/permissies-en-guardrails.md)

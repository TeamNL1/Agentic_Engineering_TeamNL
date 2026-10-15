---
titel: README.md
categorie: overdraagbaar
moeilijkheid: 1
---

# README.md

## In één zin
De voordeur van je project: wat doet het, en hoe start je het?

## Waarom
Over drie maanden ben jij ook "iemand anders". Een README beantwoordt de vragen die je buddy (en je toekomstige zelf) anders aan jou moet stellen. GitHub toont hem automatisch op de startpagina van je repo.

## Wanneer wel, wanneer (nog) niet
- **Altijd**, vanaf de eerste commit. Drie regels is genoeg om te beginnen.
- Een README is voor **mensen**. Instructies voor je agent horen in [`AGENTS.md`](agents-md.md). Ze mogen naar elkaar verwijzen.

## Zo begin je
```markdown
# Sprintanalyse

Berekent topsnelheid en versnelling uit GPS-data van trainingen.

## Starten
1. `python -m venv .venv` en activeer hem
2. `pip install -r requirements.txt`
3. Kopieer `.env.example` naar `.env` en vul je eigen waarden in
4. `python src/analyse.py data/example/training.csv`

## Data
Example data staat in `data/example/`. Echte data krijg je via [wie/waar], niet via git.
```

## Valkuilen
- Een README die niet meer klopt is erger dan geen README. Laat je agent hem bijwerken als er iets verandert, en lees die wijziging zelf na.
- Schrijf niet "installeer de packages", maar het exacte commando.
- Vergeet de datavraag niet: hoe komt iemand aan de data die niet in git staat?

## Zie ook
[`venv-en-requirements.md`](venv-en-requirements.md) · [`env.md`](env.md) · [`data-folders.md`](data-folders.md) · [`agents-md.md`](agents-md.md)

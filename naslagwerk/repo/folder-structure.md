---
titel: Folder structure
categorie: structuur
moeilijkheid: 2
---

# Folder structure

## In één zin
Een vaste indeling waardoor mens én agent direct zien waar iets hoort.

## Waarom
Een agent zet bestanden neer waar het hem uitkomt, tenzij jij een structuur afspreekt. Na een week heb je `analyse_v2_final.py` naast `test2.py`. Een vaste indeling houdt het modulair: losse onderdelen die je los kunt testen, vervangen en begrijpen.

## Wanneer wel, wanneer (nog) niet
Groei mee met je project. Begin klein:

| Fase | Typische mappen |
|---|---|
| Prototype | `prototypes/`, `assets/`, `docs/` |
| Proof of concept | + `src/`, `app/`, `data/example/`, `tests/` |
| MVP | + `scripts/`, `infra/`, uitgebreidere `tests/` |

## Zo begin je
| Map | Wat erin | In git? |
|---|---|---|
| `src/` | Herbruikbare code: berekeningen, data inlezen | ja |
| `app/` | Wat de gebruiker start: Streamlit-app, web-app. Houd het dun, roep `src/` aan | ja |
| `tests/` | Code die controleert of `src/` doet wat het moet | ja |
| `docs/` | Kennis die klopt: architectuur, decisions, hand-offs | ja |
| `assets/` | Afbeeldingen, logo's, statische bestanden | ja |
| `scripts/` | Hulpscripts: data omzetten, example data maken | ja |
| `prototypes/` | Wegwerpexperimenten, losse `.html` | ja, maar geen productiecode |
| `archive/` / `legacy/` | Oude code als **inspiratie**, niet als fundament | soms; overweeg een aparte repo |
| `data/` | Zie [data folders](data-folders.md) | alleen `example/` |
| `build/`, `dist/`, `output/` | **Gegenereerd** door je code | meestal niet |

Losse bestanden in de root: `README.md`, `AGENTS.md`, `.gitignore`, `requirements.txt` of `pyproject.toml`, `.env.example`. Werk je met collega's op Windows en Mac samen, dan ook een `.gitattributes` voor regeleindes (moeilijkheid 3).

## Valkuilen
- **Te vroeg te veel structuur.** Lege mappen voor "later" maken het juist onoverzichtelijk. Moet een lege map wél bestaan, gebruik dan [`.gitkeep`](gitkeep.md).
- `archive/`: zeg je agent expliciet dat hij oude code niet blind mag kopiëren. Laat hem eerst samenvatten wat bruikbaar is.
- `dist/` en `build/` worden opnieuw gegenereerd. Commit je ze toch (bijvoorbeeld een losse `.html` die je wilt delen), doe dat dan bewust.

## Zie ook
[`agents-md.md`](agents-md.md) · [`data-folders.md`](data-folders.md) · [`notebooks.md`](notebooks.md)

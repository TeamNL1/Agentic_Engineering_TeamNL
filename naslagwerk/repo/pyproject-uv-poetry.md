---
titel: pyproject.toml, uv en poetry
categorie: overdraagbaar
moeilijkheid: 3
---

# `pyproject.toml`, uv en poetry

## In één zin
De volgende stap na `requirements.txt`: één bestand voor je projectinstellingen, plus een **lockfile** die exact vastlegt welke versies er geïnstalleerd zijn.

## Waarom
`requirements.txt` zegt "pandas". Een lockfile zegt "pandas 2.2.3, numpy 2.1.1, en de versies van alles wat dáárvan afhangt". Daarmee draait je code over een jaar nog op precies dezelfde manier, ook bij een collega en in Docker.

| Tool | Kenmerk |
|---|---|
| **uv** | Zeer snel, regelt ook de Python-versie en de `.venv`. Steeds meer de standaard. |
| **poetry** | Volwassen en veel gebruikt, wat trager. |
| `pip` + `requirements.txt` | Eenvoudig en overal beschikbaar, maar geen echte lockfile. |

## Wanneer wel, wanneer (nog) niet
- **Wel:** je werkt met anderen samen, je gaat naar Docker of een server, of je hebt last gehad van "het werkte gisteren nog".
- **Nog niet:** een prototype van een paar middagen. Dan volstaat `requirements.txt`.
- Kies **één** tool per project, niet beide.

## Zo begin je (met uv)
```bash
uv init                 # maakt pyproject.toml
uv add pandas streamlit # installeert en werkt pyproject.toml + uv.lock bij
uv run python src/analyse.py
```
Je buddy doet: `uv sync`.

Zowel `pyproject.toml` als `uv.lock` gaan in git. De `.venv` niet.

## Valkuilen
- Half overstappen: zowel `requirements.txt` als `pyproject.toml` bijhouden, met tegenstrijdige versies.
- Je agent kent het commando niet en gebruikt toch `pip install`. Zet in [`AGENTS.md`](agents-md.md): "gebruik `uv add`".

## Zie ook
[`venv-en-requirements.md`](venv-en-requirements.md) · [`docker-en-yml.md`](docker-en-yml.md)

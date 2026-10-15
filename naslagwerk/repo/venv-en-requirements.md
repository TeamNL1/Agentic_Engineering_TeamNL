---
titel: .venv en requirements.txt
categorie: overdraagbaar
moeilijkheid: 1
---

# `.venv` en `requirements.txt`

## In één zin
`.venv` is de eigen Python-omgeving van je project, en `requirements.txt` is het boodschappenlijstje waarmee iemand anders die omgeving opnieuw opbouwt.

## Waarom
Zonder virtuele omgeving installeer je alles in "je" Python, en projecten bijten elkaar (project A wil pandas 1.5, project B pandas 2.2). Zonder `requirements.txt` moet je buddy raden welke packages nodig zijn.

**De `.venv` zelf gaat nooit in git.** Hij is groot, hoort bij jouw computer en is met één commando opnieuw te maken.

## Wanneer wel, wanneer (nog) niet
- Zodra je één package installeert dat niet standaard in Python zit (pandas, streamlit, ...).
- Een losse `.html`-prototype zonder Python heeft dit niet nodig.

## Zo begin je
```bash
python -m venv .venv
.venv\Scripts\activate            # Windows  (macOS/Linux: source .venv/bin/activate)
pip install pandas streamlit
pip freeze > requirements.txt     # of: houd de lijst met de hand bij
```

Je buddy doet:
```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Vertel je agent in [`AGENTS.md`](agents-md.md) dat hij de `.venv` moet gebruiken en nieuwe packages in `requirements.txt` moet zetten.

## Valkuilen
- `pip freeze` zet álles erin, ook packages die je niet direct gebruikt. Prima om te beginnen, maar rommelig. Met de hand bijhouden geeft een overzichtelijker lijst.
- Geen versienummers = "werkt bij mij, niet bij jou" over een jaar. Zet ten minste de belangrijke versies vast (`pandas==2.2.3`).
- De agent installeert iets "even snel" buiten de venv. Controleer welke Python hij gebruikt.

## Zie ook
[`pyproject-uv-poetry.md`](pyproject-uv-poetry.md) (de volgende stap) · [`readme.md`](readme.md)

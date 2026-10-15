---
titel: Sandbox
categorie: waar
moeilijkheid: 3
---

# Sandbox

## In één zin
Een afgeschermde omgeving (meestal een Docker-container) waarin je agent vrij kan werken zonder bij de rest van je computer te kunnen.

## Waarom
Permissies zijn afspraken binnen jouw computer. Een sandbox is een **muur**: de agent ziet alleen wat jij erin stopt. Dan kun je hem met een gerust hart meer laten doen ("alles mag"), omdat je data, je logins en je andere projecten buiten de muur staan.

## Wanneer wel, wanneer (nog) niet
- **Wel:** de agent moet lang zelfstandig werken, je wilt "alles mag" gebruiken, of je wilt hard garanderen dat privédata onbereikbaar is.
- **Nog niet:** je bent net begonnen. Een sandbox voegt een laag toe: bestanden heen en weer krijgen, poorten openzetten om je app te zien, git synchroniseren tussen sandbox en je eigen map.
- Lokaal werken is de eenvoudigste feedbacklus. De sandbox is sterkere isolatie, tegen meer moeite.

## Zo begin je
Voorbeelden met Docker Sandboxes (`sbx`):
```bash
sbx create --clone --name mijnproject codex .   # agent werkt in een eigen kloon van je repo
sbx exec -it mijnproject bash                   # zelf een terminal in de sandbox openen
sbx ports mijnproject --publish 8501:8501       # je Streamlit-app in de sandbox bekijken
```
Met `--clone` staan wijzigingen van de agent **niet** direct in je eigen map. Je haalt ze op via git (`git fetch`, mergen) en pusht ze daarna zelf naar GitHub.

## Valkuilen
- Denken dat de agent iets heeft opgeslagen, terwijl het alleen in de sandbox staat. Haal het op voordat je de sandbox verwijdert.
- Je `.env` of privédata toch in de sandbox kopiëren "om het werkend te krijgen". Dan is de muur weg.
- Voer simpele commando's zelf uit in de sandbox (`sbx exec`), niet via de agent. Dat scheelt tokens.

## Zie ook
[data access](data-access.md) · [permissies](permissies-en-guardrails.md) · [docker](../repo/docker-en-yml.md)

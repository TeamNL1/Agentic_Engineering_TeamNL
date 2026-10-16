# Data-afspraken voor het plan

Vraag binnen thema 4 wie namens de data-eigenaar mag beslissen. Gebruik bekende
antwoorden; vraag geen namen van individuele sporters of ruwe records.
Leg afzonderlijk vast: wat de agent leest, waar verwerking gebeurt, wie de code
uitvoert en wat als output naar het model mag. Onbekende toestemming blokkeert
het gebruik van echte data, niet het plannen met fictieve voorbeelden.

## Blok voor het toekomstige AGENTS.md

Neem dit blok ingevuld op in plan-van-aanpak.md. Label onbekende keuzes en
voorstellen; maak tijdens de intake geen AGENTS.md of instellingenbestand aan.

```markdown
## Data access
- Data-eigenaar/bevoegde rol: [rol]. Toestemming: [omvang of nog te regelen].
- Opzet: [alleen beschrijving / fictieve data / toegestaan sample / volledige data].
- Uitvoering: [gebruiker / agent lokaal / afgeschermde omgeving].
- Agent mag lezen: [concrete toegestane paden en typen informatie].
- Agent mag niet lezen, printen of uploaden: data/private/, .env, .env.*
  (uitzondering: .env.example met uitsluitend fictieve waarden), en [overige paden].
- Lokaal verwerken van echte data: [niet toegestaan / expliciet afgesproken scope].
- Ontwikkel en test met fictieve data in data/example/; elk voorbeeld < 1 MB.
- Output: alleen goedgekeurde, niet-herleidbare samenvattingen; geen echte rijen,
  secrets of waarden in foutmeldingen, logs, notebooks of exports voor de agent.
- Technische toegangsregels: [agent, configuratieplek, verboden paden, teststatus].
- Zolang toestemming of technische bescherming onduidelijk is: alleen fictieve data.
```

## Technische deny-regels voorbereiden

AGENTS.md is een werkinstructie; .gitignore voorkomt geen toegang. Neem bij
Claude Code bijvoorbeeld een voorstel voor .claude/settings.json op:

```json
{ "permissions": { "deny": ["Read(./data/private/**)", "Read(./.env)"] } }
```
Voeg de concrete overige geheime bestanden toe, waaronder aanwezige .env-varianten.
Dit voorbeeld is geen volledige blokkade: shellcommando's en scripts kunnen
andere leesroutes hebben. Verifieer paden en werking tegen de gebruikte versie.
Kopieer Claude-syntax niet naar Codex of Mistral Vibe. Laat de bouwagent hun
sandbox-, tool- en padbeperkingen controleren; noteer onbevestigde regels als
open startvoorwaarde. Bij noodzakelijke harde isolatie staan echte data buiten
de omgeving waartoe de agent toegang heeft. Test met een fictief proefbestand,
nooit met echte gevoelige data.

Bron: [Claude Code permissions](https://code.claude.com/docs/en/permissions).

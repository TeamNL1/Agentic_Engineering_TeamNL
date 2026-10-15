---
titel: Hand-offs, memory en decisions
categorie: agent-context
moeilijkheid: 2
---

# Hand-offs, memory en decisions

## In één zin
Schrijf op wat er gebeurd is en wat er besloten is, zodat elke nieuwe chat (en elke collega) verder kan waar de vorige stopte.

## Waarom
Korte chatsessies zijn goedkoper en leveren beter werk op, maar de agent vergeet alles tussen sessies. De kennis moet dus in je **repo** staan, niet in je chatgeschiedenis. Dat maakt je ook onafhankelijk van één agent: een andere agent kan dezelfde bestanden lezen.

## Wanneer wel, wanneer (nog) niet
- **Hand-off:** aan het eind van elke sessie, en voordat je met iets nieuws begint.
- **Decision log:** zodra je keuzes maakt waarvan je later wilt weten waarom ("we gebruiken 10 Hz omdat...").
- Bij een prototype van één middag is een hand-off genoeg.

## Zo begin je
Vraag aan het eind van een sessie:
> *Schrijf een hand-off in `docs/handoffs/2026-10-30.md`: wat is af, wat werkt nog niet, wat is de volgende stap, en welke decisions heb ik genomen.*

Lees hem en commit hem. Begin de volgende sessie met:
> *Lees de laatste hand-off in `docs/handoffs/` en stel voor waar we verdergaan.*

Groeit het project, splits dan:

| Bestand | Wat | Wie onderhoudt |
|---|---|---|
| `docs/handoffs/`, `docs/daily/` of `logs/agent-sessions/` | Dagelijkse samenvattingen: geschiedenis | agent, jij leest na |
| `docs/DECISIONS.md` | Genomen decisions: **waarheid** | agent stelt voor, jij keurt goed |
| `docs/ARCHITECTURE.md` | Hoe het in elkaar zit | agent, jij leest na |

Vuistregel: *een hand-off is geschiedenis, een decision is waarheid.*

## Valkuilen
- Hand-offs die niemand leest. Lees ze, anders sluipen er fouten in die de volgende sessie als feit behandelt.
- Te veel documenten. Begin met één map hand-offs.

## Zie ook
[workflow](../agent/workflow.md) · [`agents-md.md`](agents-md.md) · [`constitution-specs-taken.md`](constitution-specs-taken.md)

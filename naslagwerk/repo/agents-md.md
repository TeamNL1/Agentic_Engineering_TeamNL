---
titel: AGENTS.md / CLAUDE.md
categorie: agent-context
moeilijkheid: 1
---

# `AGENTS.md` / `CLAUDE.md`

## In één zin
De handleiding voor je agent: wat is dit project, hoe werk je hier, en wat mag niet.

## Waarom
Elke nieuwe chat begint bij nul. Je agent leest dit bestand aan het begin van elke sessie, zodat je niet steeds opnieuw hoeft uit te leggen dat de data privé is, dat hij de `.venv` moet gebruiken, of dat hij eerst een plan moet voorstellen.

- `AGENTS.md` is een open standaard, gelezen door Codex, Mistral Vibe en veel andere agents (controleer bij je eigen agent).
- `CLAUDE.md` wordt gelezen door Claude Code.
- **Tip om niet vast te zitten aan één leverancier:** zet alles in `AGENTS.md` en laat `CLAUDE.md` daarnaar verwijzen met één regel: `@AGENTS.md`.

## Wanneer wel, wanneer (nog) niet
- **Altijd**, vanaf het begin. Laat je agent (of een skill) gerust een eerste versie maken, en lees die daarna zelf na.
- Houd het kort. Het staat bij elke sessie in de context en kost dus tokens en aandacht.

## Zo begin je
```markdown
# AGENTS.md

## Project
Sprintanalyse voor [sport]. Doel: [één zin]. Fase: prototype.

## Data
- Echte data staat in `data/private/` en mag je NIET lezen of printen.
- Werk met `data/example/`.
- Zie "Data access" hieronder voor wat wel mag.

## Workflow
- Stel eerst een kort plan voor en wacht op akkoord.
- Gebruik `.venv`. Nieuwe packages → `requirements.txt`.
- Kleine stappen. Na elke werkende stap: stel een commit voor.
- Schrijf aan het eind van een sessie een hand-off in `docs/handoffs/`.

## Niet doen
- Geen credentials of data in bestanden die in git komen.
- Geen nieuwe frameworks zonder te vragen.
```

## Valkuilen
- **Niet lezen wat de agent schreef.** Laat je de skill of agent dit bestand maken, lees het dan regel voor regel. Wat erin staat, doet je agent.
- Te lang: na 200 regels gaat de agent dingen missen. Verwijs liever naar `docs/`.
- Tegenstrijdige instructies in je globale en je project-`AGENTS.md`. Zie [config levels](../agent/config-levels.md).

## Zie ook
[config levels](../agent/config-levels.md) · [`handoffs-memory-decisions.md`](handoffs-memory-decisions.md) · [`skills.md`](skills.md)

---
titel: Skills
categorie: agent-context
moeilijkheid: 2
---

# Skills

## In één zin
Een skill is een herbruikbaar instructiepakket (een map met een `SKILL.md` en eventueel scripts) dat je agent oppakt wanneer de taak erom vraagt.

## Waarom
Doe je iets vaker op dezelfde manier (een rapport opmaken, data in een vast formaat omzetten, een repo agent-ready maken), dan hoef je het niet elke keer opnieuw uit te leggen. Claude Code en Codex gebruiken hetzelfde formaat. Andere agents, zoals Mistral Vibe, ondersteunen skills mogelijk (nog) niet of anders: controleer de documentatie. Je kunt een `SKILL.md` altijd ook gewoon als instructiebestand aan je agent geven.

## Wanneer wel, wanneer (nog) niet
- **Wel:** een terugkerende workflow die je al een paar keer met de hand goed hebt gedaan.
- **Nog niet:** als je de keuzes zelf nog moet leren maken. *Een skill verstopt keuzes.* Daarom is dit naslagwerk (nog) geen skill.

## Zo begin je
```text
.agents/skills/make-example-data/     # gelezen door Codex
.claude/skills/make-example-data/     # gelezen door Claude Code
  SKILL.md
  scripts/genereer.py
```

`SKILL.md`:
```markdown
---
name: make-example-data
description: Gebruik als de gebruiker synthetische example data wil op basis van kolomnamen en datatypes.
---
1. Vraag naar kolomnamen, datatypes en realistische bereiken.
2. Lees NOOIT data/private/.
3. Schrijf scripts/make_example_data.py en zet de output in data/example/.
```

Skills kunnen ook op user level staan (`~/.claude/skills/`, `~/.agents/skills/`), dan werken ze in al je projecten.

## Valkuilen
- De `description` bepaalt wanneer de agent de skill gebruikt. Schrijf daarin *wanneer*, niet *wat*.
- Skills van anderen zijn code en instructies die je agent uitvoert. Lees ze voordat je ze installeert.
- Geen secrets of privédata in skills.

## Zie ook
[`agents-md.md`](agents-md.md) · [config levels](../agent/config-levels.md)

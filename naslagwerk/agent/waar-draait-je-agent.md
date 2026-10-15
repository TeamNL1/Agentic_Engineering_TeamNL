---
titel: "Waar draait je agent? Chat, IDE, desktop, CLI, cloud"
categorie: waar
moeilijkheid: 1
---

# Waar draait je agent?

## In één zin
Dezelfde agent kun je via verschillende "deuren" gebruiken, en de deur bepaalt waar hij bij kan.

## Waarom
Een chat in de browser ziet alleen wat jij plakt. Een agent in je editor of terminal ziet je hele projectmap, kan commando's uitvoeren en is ingelogd zoals jij. Hoe meer bereik, hoe meer hij kan en hoe meer er mis kan gaan.

| Deur | Bereik | Typisch gebruik |
|---|---|---|
| **Chat in de browser** | Alleen wat je plakt of uploadt | Vragen, uitleg, losse stukjes code |
| **IDE-extensie** (VS Code) | Je projectmap, terminal, diffs in beeld | **Dagelijks werk aan je project (aanrader om mee te beginnen)** |
| **Desktop-app** | Je projectmap, vaak ook browser en andere tools | Als IDE, met meer overzicht en een eigen interface |
| **CLI** (terminal) | Je projectmap, terminal | Gevorderden, scripts, automatisering |
| **Cloud** (agent draait bij de aanbieder) | Een kopie van je repo op GitHub | Taken op de achtergrond, pull requests |
| **Sandbox** (container op je eigen computer) | Alleen wat je erin stopt | Afgeschermd werken, zie [sandbox](sandbox.md) |

## Wanneer wel, wanneer (nog) niet
- Begin in de IDE: je ziet wat de agent verandert en je houdt overzicht.
- Gebruik de chat in de browser voor vragen waarbij je project er niet toe doet.
- Cloud-agents en sandboxes komen pas in beeld als je de basis beheerst.

## Zo begin je
- Open je **projectmap** in VS Code, niet je hele schijf of je Documenten-map. De map die je opent is de wereld van je agent.
- Check in welke map de agent werkt voordat je hem iets laat doen.

## Valkuilen
- VS Code in `C:\Users\jij` openen = je agent kan bij al je bestanden.
- Verschillende deuren, verschillende instellingen: de permissies in de desktop-app gelden niet automatisch in de CLI. Zie [config levels](config-levels.md).

## Zie ook
[permissies](permissies-en-guardrails.md) · [sandbox](sandbox.md) · [config levels](config-levels.md)

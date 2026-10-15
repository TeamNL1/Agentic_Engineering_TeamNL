---
titel: "Configuratie: user level vs. project level"
categorie: wat-mag-hij
moeilijkheid: 1
---

# Configuratie: user level vs. project level

## In één zin
Je agent leest instellingen en instructies op meerdere levels. Wat voor **jou** altijd geldt zet je op user level, wat voor **dit project** geldt in de repo.

## Waarom
Sommige dingen wil je overal ("antwoord in het Nederlands", "lees nooit `.env`"). Andere gelden alleen hier ("data staat in `data/private/`"). En sommige wil je met je team delen, andere juist niet (je persoonlijke voorkeuren).

## De levels

| Level | Claude Code | Codex | Mistral (Vibe)* | In git? |
|---|---|---|---|---|
| **Organisatie** (door IT beheerd) | managed settings | beheerde configuratie | — | n.v.t. |
| **Gebruiker** (al je projecten) | `~/.claude/settings.json`, `~/.claude/CLAUDE.md`, `~/.claude/skills/` | `~/.codex/config.toml`, `~/.codex/AGENTS.md`, `~/.agents/skills/` | `~/.vibe/config.toml` | nee |
| **Project, gedeeld** | `.claude/settings.json`, `CLAUDE.md` | `AGENTS.md`, `.agents/skills/` | `.vibe/config.toml`, `AGENTS.md` | **ja** |
| **Project, persoonlijk** | `.claude/settings.local.json` | — | — | nee |
| **Submap** | `CLAUDE.md` in een submap | `AGENTS.md` in een submap | — | ja |

\* *Mistral Vibe is nieuwer en verandert snel: controleer de paden in de actuele documentatie.*

`~` is je gebruikersmap, op Windows `C:\Users\<jij>\`. Bij conflicten wint doorgaans het specifiekere level, maar organisatie-instellingen en deny-regels gaan voor. Controleer de actuele documentatie van je agent: dit verandert regelmatig.

## Wanneer wel, wanneer (nog) niet
| Zet je op user level | Zet je op project level |
|---|---|
| Taal en toon van antwoorden | Wat het project is, de fase |
| Nooit `.env`, `*.key` of `*.pem` lezen | Waar de data staat en welke [data access](data-access.md) |
| Nooit `git push --force` | Welke commando's de tests draaien |
| Je persoonlijke skills | Projectskills die je team ook nodig heeft |

## Zo begin je — oefening
1. **Zoek** je configuratie op user level. Open `C:\Users\<jij>\.claude\`, `C:\Users\<jij>\.codex\` of `C:\Users\<jij>\.vibe\`. Wat staat er al? (Vaak meer dan je denkt.)
2. **Bedenk** drie regels die voor al je projecten moeten gelden. Zet ze op user level.
3. **Bedenk** drie regels die alleen voor je huidige project gelden. Zet ze in je project.
4. **Bespreek** met je buddy: wat heb je bewust níét gedeeld via git, en waarom?

## Valkuilen
- Iets op user level zetten dat je buddy ook nodig heeft. Bij hem gebeurt het dan niet, en geen van jullie begrijpt waarom.
- `.mcp.json` en `settings.local.json` kunnen tokens bevatten. Niet committen.
- Een globale instructie die botst met een projectinstructie. De agent kiest dan, en niet altijd zoals jij wilt.

## Zie ook
[permissies](permissies-en-guardrails.md) · [`AGENTS.md`](../repo/agents-md.md) · [skills](../repo/skills.md)

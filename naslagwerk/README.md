# Naslagwerk Agentic Engineering

Zoek hier op **welk tools er is, waarom je het zou willen en wanneer het de moeite waard is.**
Het naslagwerk kiest niet voor je. Elk onderwerp laat de afweging zien, zodat je zelf leert kiezen.

> Gebruik je een agent? Verwijs hem naar deze map: *"Lees `naslagwerk/AGENTS.md` en help me kiezen of ik X nodig heb."*

## Twee delen

| Deel | Vraag | Map |
|---|---|---|
| **Wat zit er in een repo?** | Welke bestanden en mappen horen erin, en waarom? | [`repo/`](repo/) |
| **Hoe zet je je agent aan het werk?** | Waar draait je agent, wat mag hij, wat ziet hij van je data? | [`agent/`](agent/) |

## Moeilijkheid

Niet alles is meteen nodig. Gebruik de lichtste opzet die bij je doel past.

| Moeilijkheid | Wanneer | Past bij projectfase |
|---|---|---|
| **1 · Basis** | Zonder dit gaat het mis, of werkt het niet bij een ander | Prototype |
| **2 · Gevorderd** | Je project groeit en je wilt overzicht houden | Proof of concept |
| **3 · Ervaren** | Je werkt samen en wilt het reproduceerbaar en veilig hebben | MVP |
| **4 · Productie** | Iets moet echt draaien voor anderen | Deployment |

## Overzicht: wat zit er in een repo?

Gegroepeerd naar het probleem dat het oplost.

| Categorie | Onderwerp | Moeilijkheid |
|---|---|---|
| **Overdraagbaar** — *werkt het bij een ander?* | [`README.md`](repo/readme.md) | 1 |
| | [`.venv` en `requirements.txt`](repo/venv-en-requirements.md) | 1 |
| | [`pyproject.toml`, uv en poetry](repo/pyproject-uv-poetry.md) | 3 |
| **Veilig** — *wat mag er niet in?* | [`.gitignore`](repo/gitignore.md) | 1 |
| | [`.env` en `.env.example`](repo/env.md) | 1 |
| | [Data folders: `data/example` vs. `data/private`](repo/data-folders.md) | 1 |
| | [Notebooks (`.ipynb`)](repo/notebooks.md) | 2 |
| | [gitleaks en pre-commit](repo/gitleaks-pre-commit.md) | 3 |
| **Agent-context** — *wat weet je agent?* | [`AGENTS.md` / `CLAUDE.md`](repo/agents-md.md) | 1 |
| | [Hand-offs, memory en decisions](repo/handoffs-memory-decisions.md) | 2 |
| | [Skills](repo/skills.md) | 2 |
| | [Constitution, specs en taken](repo/constitution-specs-taken.md) | 3 |
| **Structuur** — *waar staat wat?* | [Naamgeving](repo/naamgeving.md) | 1 |
| | [Folder structure](repo/folder-structure.md) | 2 |
| | [`.gitkeep`](repo/gitkeep.md) | 2 |
| **Draaien** — *hoe draait het ergens anders?* | [Docker, compose en pipelines (`.yml`)](repo/docker-en-yml.md) | 4 |

## Overzicht: hoe zet je je agent aan het werk?

| Categorie | Onderwerp | Moeilijkheid |
|---|---|---|
| **Waar** — *waar draait je agent?* | [Chat, IDE, desktop, CLI, cloud](agent/waar-draait-je-agent.md) | 1 |
| | [Sandbox](agent/sandbox.md) | 3 |
| **Wat mag hij?** — *toegang en grenzen* | [Configuratie: user level vs. project level](agent/config-levels.md) | 1 |
| | [Permissies en guardrails](agent/permissies-en-guardrails.md) | 1 |
| | [Data access: wat ziet je agent van je data?](agent/data-access.md) | 1 |
| **Hoe werk je samen?** — *workflow* | [Workflow: plan, korte sessies, hand-off](agent/workflow.md) | 1 |
| | [Issues en tickets: de agent pakt werk op](agent/issues-gedreven.md) | 3–4 |
| | [Builder / reviewer: drie tiers](agent/builder-reviewer.md) | 3–4 |
| | [Builder / reviewer: de geautomatiseerde pipeline](agent/builder-reviewer-pipeline.md) | 4 |
| **Tools** — *wat kan hij extra?* | [MCP en tools: Context7, Playwright, CLI's](agent/tools-en-mcp.md) | 3 |

## Opbouw van elk onderwerp

Elk bestand heeft dezelfde vaste kopjes, zodat mensen en agents snel vinden wat ze zoeken:

1. **In één zin**
2. **Waarom** — welk probleem lost het op?
3. **Wanneer wel, wanneer (nog) niet**
4. **Zo begin je** — het kleinste werkende voorbeeld
5. **Valkuilen**
6. **Zie ook**

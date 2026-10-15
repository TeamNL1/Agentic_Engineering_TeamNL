---
titel: "MCP en tools: Context7, Playwright, CLI's"
categorie: tools
moeilijkheid: 3
---

# MCP en tools: Context7, Playwright, CLI's

## In één zin
Geef je agent extra tools: actuele documentatie, een browser om je app te testen, of toegang tot GitHub en DevOps.

## Waarom
Out-of-the-box kan je agent bestanden lezen en commando's draaien. Met **MCP-servers** (Model Context Protocol) en **CLI's** kan hij meer:

| Tool | Lost op | Voorbeeld |
|---|---|---|
| **Context7** (MCP) | De agent kent alleen de versie van een library die hij tijdens zijn training zag | *"Gebruik context7 voor de actuele Streamlit-documentatie"* |
| **Playwright** (MCP of testlibrary) | "Het werkt" zonder dat iemand de app echt geopend heeft | Agent opent je app, klikt erdoorheen, maakt screenshots |
| **`gh`** (GitHub CLI) | Issues en pull requests vanuit de agent | `gh issue list`, `gh pr create` |
| **`az`** (Azure CLI met DevOps-extensie) | Hetzelfde voor Azure DevOps | `az boards work-item create` |

## Wanneer wel, wanneer (nog) niet
- **Context7:** je gebruikt een library die snel verandert en de agent schrijft verouderde code.
- **Playwright:** je hebt een web-app of dashboard en wilt dat de agent zelf controleert of het werkt. Voor een losse figuur is het overkill.
- **CLI's:** je wilt dat de agent met issues en PR's werkt. Zie [issues-gedreven werken](issues-gedreven.md).
- Elke extra tool is extra bereik. Installeer alleen wat je nodig hebt.

## Zo begin je
```bash
# Context7 toevoegen aan Claude Code (controleer de actuele instructies)
claude mcp add context7 -- npx -y @upstash/context7-mcp

# Playwright als MCP-server
claude mcp add playwright -- npx -y @playwright/mcp@latest

# GitHub CLI inloggen
gh auth login
```
Voor Codex gebeurt hetzelfde via `~/.codex/config.toml` (sectie `[mcp_servers]`), en voor Mistral Vibe via `~/.vibe/config.toml` (controleer de documentatie).

## Valkuilen
- **Een MCP-server is code van een ander** die met jouw rechten draait. Gebruik bekende bronnen.
- MCP-configuratie (`.mcp.json`) kan tokens bevatten. Niet committen.
- Context7 vervangt niet het lezen van je eigen code en het testen. Actuele docs ≠ werkende code.
- Een agent met `gh` kan namens jou issues sluiten, commentaar plaatsen en pushen.

## Zie ook
[issues-gedreven werken](issues-gedreven.md) · [permissies](permissies-en-guardrails.md)

# Agents starten en controleren

Start vanuit de repositoryroot. De commando's met $ of / hieronder typ je
in het gesprek met de agent, niet in PowerShell of een andere shell.

| Agent | Terminal | In het agentgesprek | Skilllocatie |
| --- | --- | --- | --- |
| Codex | codex | $teamnl-agentic-engineering-intake-skill | .agents/skills/teamnl-agentic-engineering-intake-skill/SKILL.md |
| Claude Code | claude | /teamnl-agentic-engineering-intake-skill | .claude/skills/teamnl-agentic-engineering-intake-skill/SKILL.md |
| Mistral Vibe Code | vibe | /teamnl-agentic-engineering-intake-skill | .agents/skills/teamnl-agentic-engineering-intake-skill/SKILL.md |

Op Windows kun je codex.cmd en claude.cmd gebruiken als PowerShell de .ps1-
starters blokkeert. Verander daarvoor geen systeembeleid. Mistral Vibe laadt
projectskills alleen uit vertrouwde projectmappen; controleer de inhoud voordat
je de map in Vibe als vertrouwd markeert. Deze uitleg gaat over Vibe Code,
niet over het importeren van skills in Vibe Work.

De Claude-map bevat een eigen SKILL.md als ingang en verwijst naar dezelfde
centrale instructies als Codex en Vibe. Zo zijn er geen drie inhoudelijke kopieën
die uiteen kunnen lopen. Herstart de agentsessie na het hernoemen van een skill.

## Handmatige acceptatie per agent

1. Start de agent vanuit de repositoryroot en controleer of de skill zichtbaar is.
2. Gebruik het bovenstaande gesprekcommando. De eerste reactie vraagt Kort of
   Uitgebreid, met knoppen als beschikbaar en anders als tekst.
3. Kies Kort en gebruik een fictieve casus: een dashboard voor een verzonnen
   sportteam, zonder echte data. De agent stelt per beurt één samenhangende vraag.
4. Controleer dat de data-eigenaar en lees-/verwerkingsrechten binnen thema 4
   aan bod komen, zonder de vraaglimieten te overschrijden.
5. Controleer de voorgestelde reponaam, data/example/, data/private/,
   docs/handoffs/ en logs/. De enige intake-uitvoer is plan-van-aanpak.md op de
   afgesproken plek, met het AGENTS.md-voorstel en nog te verifiëren deny-regels.
6. Controleer de samenvatting, afsluitende herinnering en optionele verdieping.
   Er worden geen app, repository of instellingen aangemaakt tijdens de intake.

## Uitgevoerde controle op 16 oktober 2026

- Claude Code 2.1.197: claude.cmd --version en --help uitgevoerd.
- Codex CLI 0.144.4: codex.cmd --version en --help uitgevoerd.
- Gewone PowerShell-starters werden door execution policy geblokkeerd; .cmd werkt.
- Mistral Vibe: niet geïnstalleerd/in PATH; geen lokale uitvoering mogelijk.
- Skillpaden, lokale Markdown-links en naamgeving worden statisch gecontroleerd.
- Volledige interactieve intake en zichtbaarheid in de drie agents nog niet
  uitgevoerd. Versie/help controleren bewijst niet dat de intake correct draait.
- Voorbeelden in het bredere naslagwerk voor installaties, pushes, containers,
  externe diensten en agents zijn geen uitgevoerde tests. Voer alleen toepasselijke
  voorbeelden uit op een oefenrepo met de benodigde accounts.

## Officiële documentatie

- [Codex skills](https://learn.chatgpt.com/docs/build-skills)
- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Mistral Vibe Code skills](https://docs.mistral.ai/vibe/code/cli/skills)
- [Claude Code permissions](https://code.claude.com/docs/en/permissions)

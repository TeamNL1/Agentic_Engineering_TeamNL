# Agent session — keuzeknoppen en afsluitende herinnering

## Wijzigingen
Intake-skill: echte keuzes (intakevariant, repository-indeling, verdiepingsronde)
gaan via de keuzetool van de agent: `AskUserQuestion` in Claude Code,
`request_user_input` in Codex. Zonder tool volgt dezelfde vraag in tekst. Open
intakevragen blijven tekst. Nieuwe afsluitende herinnering: plan zelf
bestuderen, een second opinion vragen en coding agents via `AGENTS.md` of
`CLAUDE.md` naar `PLAN_VAN_AANPAK.md` verwijzen. README bijgewerkt.

## Controle
`node --test tests/*.test.cjs` uitgevoerd. Skill niet doorlopen in een echte
intake met Claude Code, Codex of Mistral Vibe.

## Beperkingen
In Codex werkt `request_user_input` buiten Plan-modus alleen met een feature
flag; die is gevonden in communitybronnen, niet in officiële documentatie.

# Agent session — skill zichtbaar voor meerdere agents

## Wijzigingen
`.claude/skills/teamnl-ae-intake-skill/SKILL.md` toegevoegd: een korte verwijzing
met dezelfde naam en beschrijving, zodat Claude Code de intake-skill vindt. De
skill zelf blijft in `.agents/skills/`, waar Codex en Mistral Vibe hem lezen.
Geen symlink gebruikt, omdat Git op Windows symlinks standaard niet aanmaakt.
README en AGENTS.md bijgewerkt met de startcommando's per agent.

## Controle
`node --test tests/*.test.cjs`: 7 van 7 geslaagd. Frontmatter van verwijzing en
origineel is identiek; het relatieve pad naar de instructies bestaat.
Niet gecontroleerd in een nieuwe Claude Code-, Codex- of Mistral Vibe-sessie.

## Beperkingen
Mistral Vibe laadt projectskills alleen in een vertrouwde map. Bij wijziging van
naam of beschrijving moet de Claude-verwijzing handmatig mee.

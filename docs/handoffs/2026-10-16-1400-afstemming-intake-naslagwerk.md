# Afstemming intake en naslagwerk

## Wijzigingen
- Naslagwerk uit origin/naslagwerk (5498e61) lokaal opgenomen; bestaande remote branch niet gewijzigd.
- Cursusnamen gelijkgetrokken: data/example/, data/private/, docs/handoffs/ en eigen documenten met streepjes. Vaste agentbestandsnamen behouden.
- Bestaande sessieverslagen verplaatst en bestandsnamen met streepjes gegeven.
- Data-eigenaar, leesrechten, lokale verwerking, toegestane output en voorstellen voor deny-regels toegevoegd aan de intake, binnen de bestaande vraaglimieten.
- Plan bevat een blok voor het toekomstige AGENTS.md; de intake zelf maakt alleen plan-van-aanpak.md.
- Reponaamvoorstel doelgroep-doel-specifiek toegevoegd.
- Claude-ingang en instructies voor Codex en Mistral Vibe Code afgestemd.

## Controles
- 7 bestaande app-tests geslaagd; git diff --check geslaagd.
- Lokale Markdown-links en skillmetadata gecontroleerd; Git-uitsluitingen voor private data en ruwe logs werken.
- Claude Code 2.1.197 en Codex CLI 0.144.4: versie/help uitgevoerd via .cmd.
- Officiële documentatie voor de drie skilllocaties en aanroepvormen geraadpleegd.

## Beperkingen
- Mistral Vibe is niet geïnstalleerd. Interactieve skillherkenning en volledige intake in alle drie agents zijn nog niet getest. Handmatige checklist: ../agent-startcontrole.md.
- Voorbeelden voor installaties, externe diensten en publiceren in het naslagwerk zijn niet uitgevoerd.
- Geen commit of push uitgevoerd. De lokale hoofdmap heeft nog zijn oude naam.

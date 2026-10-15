# Opdracht voor coding agents

## Cursusmateriaal en intake-skill

Naast de oefenapp bevat deze repository de zelfstandige intake-skill in
`.agents/skills/teamnl-ae-intake-skill/`. Houd de skill en ondersteunende
referenties daar, los van applicatiecode in `src/`. Codex en Mistral Vibe lezen
die map direct; `.claude/skills/teamnl-ae-intake-skill/SKILL.md` is alleen een
verwijzing voor Claude Code met dezelfde naam en beschrijving. De skill begeleidt uitsluitend
een intake tot een plan voor een nieuwe repository. Pas de onderstaande
browserapp-eisen niet toe op projecten van cursisten: hun eisen volgen uit
de eigen casus. Het aanroepen van de intake is geen opdracht om de app te bouwen.

## Oefenapp

Bouw en onderhoud een mini-app in hello-worldstijl voor de agentic engineering
dagen van TeamNL. Beginners leren een repository clonen, wijzigingen committen
met een commit message en pushen, en ontdekken AGENTS.md, .gitignore, .env en README.md.

De app toont een verzorgde browserpagina met twee velden: Fictieve accountnaam en
Fictief wachtwoord, en één knop: .env opslaan. Behoud de opmaak met een witte kaart
en oranje accenten. Gebruik zakelijke taal, minimale tekst en geen checkbox.
Beide ingevulde waarden worden als nepcredentials in een .env-bestand opgeslagen.
Maak nadrukkelijk duidelijk dat echte wachtwoorden, API-keys of persoonsgegevens
niet thuishoren in deze oefening. Toon één korte waarschuwing en vul de velden
met fictieve voorbeelden. Verplicht geen voorvoegsel. Validatie kan niet
garanderen dat gegevens fictief zijn.

## Eisen

- Werkt op Windows en macOS door index.html te openen, zonder installatie,
  server, buildstap, externe bibliotheken of netwerkverkeer.
- Gebruik HTML, CSS en JavaScript; broncode in src/.
- Bied een opslaanvenster waar ondersteund, anders een download met uitleg.
  Claim bij een download niet dat het bestand al in de repo staat.
- Alleen exacte bestandsnaam .env; leg verborgen bestanden en browsernamen uit.
- Houd .env en varianten buiten Git; .env.example bevat alleen fictieve waarden.
- Valideer invoer voordat deze in dotenvtekst komt; voorkom extra variabelen
  via aanhalingstekens of nieuwe regels. Log of verstuur nooit de invoer.
- Houd README.md begrijpelijk voor beginners, inclusief clone, commit en push.
- Werk alleen binnen deze repository. Geen globale installaties of
  systeemwijzigingen. Push of publiceer alleen als de gebruiker dat vraagt.

## Controle en overdracht

Lees eerst README.md en deze opdracht. Houd wijzigingen klein en gericht.
Voer, als Node.js beschikbaar is, `node --test tests/*.test.cjs` uit; Node.js is
alleen voor onderhoud nodig. Controleer de browser handmatig volgens de README.
Noteer na een fase wijzigingen, checks en beperkingen in logs/agent-sessions/.
Gebruik finn-agentic-coding-manager en caveman als die skills beschikbaar zijn;
volg anders de bovenstaande regels rechtstreeks.

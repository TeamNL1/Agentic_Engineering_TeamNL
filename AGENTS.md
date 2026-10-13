# Opdracht voor coding agents

Bouw en onderhoud een mini-app in hello-worldstijl voor de agentic engineering
dagen van TeamNL. Beginners leren een repository clonen, wijzigingen committen
met een commit message en pushen, en ontdekken AGENTS.md, .gitignore, .env en README.md.

De app toont een venster in de browser waarin een cursist een verzonnen geheime
boodschap invoert en als nepcredentials opslaat in een lokaal .env-bestand.
Maak nadrukkelijk duidelijk dat echte wachtwoorden, API-keys of persoonsgegevens
niet thuishoren in deze oefening. Vraag een bevestiging, gebruik een fictief
voorbeeld en verplicht het voorvoegsel OEFEN-. Dit is geen garantie dat invoer
fictief is: blijf de waarschuwing duidelijk tonen.

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

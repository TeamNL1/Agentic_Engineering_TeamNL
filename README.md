# Hello world, oefengeheim!

Een mini-app voor de **agentic engineering dagen van TeamNL**. Vul een nepaccountnaam
en nepwachtwoord in, sla ze op en ontdek waarom `.env` buiten Git hoort.

**Gebruik nooit een echt wachtwoord, API-key, e-mailadres of andere echte gegevens.**
Dit is speelgoed. Een `.env` is gewone leesbare tekst, geen beveiligde kluis.

## Starten zonder installatie

1. Open de map van deze repository.
2. Dubbelklik op **index.html**. De app opent in je browser op Windows of macOS.
3. Vul de twee velden in, bijvoorbeeld `nep-cursist` en `voorbeeld-123`.
4. Klik op **.env opslaan**.
5. Bewaar het bestand als **.env** in dezelfde map als `index.html`.

De app heeft geen Python, Java, Node.js, account of internetverbinding nodig.
Alleen een bestaande browser. Chrome en Edge bieden waar ondersteund een
opslaanvenster; Firefox en Safari gebruiken een download. Verplaats een download
zelf naar de repository. Controleer de naam: `.env`, zonder `.txt` of `(1)`.
Opnieuw opslaan op dezelfde plek vervangt de eerdere oefengegevens; kies nooit
een `.env` van een ander project.

**Bestand niet zichtbaar?** Op macOS toont `Cmd + Shift + .` verborgen bestanden
in Finder. In het opslaanvenster kun je `Cmd + Shift + G` gebruiken om naar de
repositorymap te gaan. Zet op Windows in Verkenner bij **Weergeven → Weergeven**
de opties **Verborgen items** en **Bestandsnaamextensies** aan.

## Welke bestanden leer je kennen?

| Bestand | Betekenis |
| --- | --- |
| `README.md` | Uitleg voor mensen: wat doet dit project en hoe start je het? |
| `AGENTS.md` | Opdracht en werkafspraken voor een coding agent. |
| `.gitignore` | Patronen van lokale bestanden die Git niet moet toevoegen. |
| `.env` | Jouw lokale nepcredentials; wordt pas bij opslaan gemaakt. |
| `.env.example` | Openbaar voorbeeld met verzonnen waarden; mag wel in Git. |
| `index.html` | Het venster van de app. |
| `src/` | De vormgeving en JavaScriptcode. |

De app schrijft de twee ingevulde waarden als `DEMO_USERNAME` en `DEMO_PASSWORD`.
Gebruik alleen verzonnen waarden die nergens als login dienen.
Andere apps kunnen hun instellingen uit een `.env` lezen; deze demo maakt alleen
het bestand en leest geen opgeslagen credentials terug.

## Oefening: clone → wijzig → commit → push

**Voor de Git-oefening moet Git al op de cursuscomputer staan.** Pushen vraagt
ook een GitHub-account en schrijfrechten op de gekozen repository. De app zelf
vereist dit niet. Laat de begeleider deze voorzieningen vooraf regelen als
cursisten niets mogen installeren. Met GitHub **Code → Download ZIP** kun je de
app ook openen zonder Git, maar daarmee oefen je geen clone, commit of push.

Open een terminal (PowerShell op Windows, Terminal op macOS):

```sh
git clone https://github.com/TeamNL1/Agentic_Engineering_TeamNL.git
cd Agentic_Engineering_TeamNL
git switch -c oefening/jouw-unieke-naam
```

Vervang `jouw-unieke-naam` door een eigen herkenbare oefennaam. Zonder
schrijfrechten: maak eerst op GitHub een fork naar je eigen account en clone de
URL van die fork in plaats van de TeamNL-repository.

Open de app en bewaar `.env` in de repo. Controleer vervolgens:

```sh
git status --short
git check-ignore .env
```

`.env` mag niet als nieuw bestand in `git status` staan. Het tweede commando
moet `.env` tonen: de negeerregel werkt. Controleer ook zelf dat het bestand
bestaat; `git check-ignore` controleert een patroon, niet of je hebt opgeslagen.

Verander nu het label `Fictieve accountnaam` in `index.html` naar `Accountnaam (oefening)`, sla het bestand op en
ververs je browser. Leg die wijziging vast:

```sh
git diff
git add index.html
git diff --cached
git commit -m "Pas het veldlabel van mijn oefenapp aan"
git push -u origin HEAD
```

Een **commit** is een lokaal bewaard wijzigingspakket met een beschrijving.
Een **push** verstuurt je commits naar GitHub. Bekijk daar je eigen branch.
Als Git bij commit om een identiteit vraagt, stel voor deze repository
`git config user.name "Je naam"` en `git config user.email "Je GitHub-noreply-adres"`
in met je eigen waarden. Je noreply-adres vind je bij je GitHub-e-mailinstellingen.

**Let op:** `.gitignore` versleutelt niets en stopt geen bestanden die al door
Git gevolgd worden. Gebruik nooit `git add -f .env`. Voeg voor deze oefening
alleen je gewijzigde bronbestand toe. Deel je `.env` ook niet via screenshots.

## Intake voor een eigen project

De **TeamNL-AE-Intake-Skill** staat in een aparte submap, los van de appcode:

```text
.agents/skills/teamnl-ae-intake-skill/
|-- SKILL.md
|-- TeamNL_AE_Intake_SKILL.md
|-- agents/openai.yaml
`-- references/
```

Open deze repository als project in Codex en start met:

```text
$teamnl-ae-intake-skill
```

Je kiest eerst een **korte** of **uitgebreide** intake. Kort stelt maximaal één
brede vraag per thema, met alleen bij een heel onduidelijk eerste antwoord één
verduidelijkingsvraag. Uitgebreid stelt maximaal drie vragen per thema. Dat zijn
bovengrenzen; reeds beantwoorde onderwerpen worden overgeslagen. Per beurt volgt
één samenhangende vraag die ruimte geeft voor een uitgebreider antwoord.

Het gesprek gaat over het plan achter de casus: doel, aanpak, betrokkenen, eerste
bruikbare stap en projectinrichting. De acht vaste thema's zijn casus,
gebruikers, bronnen, gegevensbescherming, hergebruik, eerste versie, logging en
repository-inrichting. Technische specificaties worden later door de agent
uitgezocht, tenzij de cursist die zelf wil bespreken. Waar relevant legt de
intake vast welke documentatie of voorbeelden beschikbaar zijn en wat de agent
mag bekijken. Bij bereikte vraaglimieten worden onzekerheden uitzoekpunten in
het plan; de basisintake wordt niet verlengd. De repository-indeling komt als
laatste; zonder voorkeur gebruikt de skill de standaardstructuur.
Het repositoryvoorstel bevat altijd `logs/` met passende afspraken over inhoud,
toegang, beheer en wat buiten Git blijft.
Het resultaat is één `PLAN_VAN_AANPAK.md` op de afgesproken locatie, plus een
compacte samenvatting in het agentgesprek. Daarin staan de aanpak en de
belangrijkste ontwerpkeuzes met hun reden, in begrijpelijke taal. Daarna kun je
kiezen voor tien specifieke inhoudelijke vervolgvragen om het plan aan te
scherpen, één per beurt. Deze optionele ronde geldt voor beide intakevarianten
en start alleen als je daarvoor kiest. De antwoorden worden verwerkt in hetzelfde
plan en een vernieuwde samenvatting; eerder stoppen met de vragen kan ook.
Je kunt ook losse vragen stellen of wijzigingen doorgeven; het plan wordt dan aangepast.
Tijdens deze intake worden geen applicatie of repository aangemaakt.

Bekijk de [skillinstructies](.agents/skills/teamnl-ae-intake-skill/TeamNL_AE_Intake_SKILL.md).
`SKILL.md` is het startbestand dat naar deze instructies verwijst.
Codex ondersteunt deze repositorylocatie en het aanroepen via `$`; als een
nieuwe skill niet verschijnt, herstart Codex. Zie de
[officiële skill-documentatie](https://learn.chatgpt.com/docs/build-skills).
Bij een andere coding agent kun je de instructies als startdocument gebruiken;
automatische herkenning hangt van die agent af.

## Controle voor de begeleider

- Open `index.html` rechtstreeks, ook zonder internet; controleer de mobiele breedte.
- Wijzig beide velden, sla op en controleer de twee DEMO-waarden in het bestand.
- Probeer lege invoer en aanhalingstekens; beide moeten worden geweigerd.
- Annuleer het opslaanvenster en probeer opnieuw.
- Controleer Chrome/Edge met opslaanvenster en Safari/Firefox met download,
  op de Windows- en macOS-machines die je voor de cursus gebruikt.
- Controleer met bovenstaande Git-commando's dat `.env` genegeerd wordt.

Onderhouders met Node.js kunnen bovendien de automatische checks uitvoeren:

```sh
node --test tests/*.test.cjs
```

Dit is geen vereiste voor cursisten. Tests gebruiken uitsluitend fictieve data.

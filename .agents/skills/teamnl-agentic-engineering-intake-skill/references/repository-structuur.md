# Standaard repository-indeling voor het plan

Afgestemd op het TeamNL-naslagwerk: `data/example/`, `data/private/` en
`docs/handoffs/`. Deze cursusafspraak gaat voor op afwijkende standaardnamen
in de manager-skill. Deze referentie is
zelfstandig en hoeft die skill niet aan te roepen. Gebruik haar pas aan het
eind van de intake als standaard bij geen duidelijke voorkeur, of als controle
op de logindeling binnen een eigen repositoryvoorstel.
Beschrijf de voorgestelde structuur; maak de mappen niet aan.

## Compacte basis

```text
/
|-- plan-van-aanpak.md      # Resultaat van de intake
|-- AGENTS.md              # Werkafspraken voor coding agents
|-- README.md              # Doel, starten, gebruiken en controleren
|-- .gitignore             # Lokale/gevoelige en gegenereerde bestanden uitsluiten
|-- .env.example           # Alleen fictieve configuratie als die nodig is
|-- src/                   # Applicatiecode, één primaire bronmap
|-- tests/                 # Gerichte tests voor de acceptatiecriteria
|   `-- fixtures/          # Kleine vaste, fictieve testbestanden indien nodig
|-- docs/                  # Aanvullende projectdocumentatie indien nodig
|   |-- handoffs/          # Geschoonde sessieverslagen, in Git
|   `-- bronnen/           # Verwijzingen of toegestane technische documentatie
`-- logs/
    |-- README.md          # Doel, toegestane inhoud en bewaartermijn
    |-- runtime/           # Benodigde applicatielogs, buiten Git
    `-- test/              # Ruwe testuitvoer indien nodig, buiten Git
```

Het plan vervult de overdrachtsrol; maak niet automatisch een tweede
document met dezelfde inhoud.
Bij een eenvoudige browserapp kan `index.html` als startbestand in de root
staan, zoals in de cursusrepository. Dit verplicht andere casussen niet tot
JavaScript, een browserapp of gebruik zonder installatie.

Beschrijf beschikbare documentatie en voorbeelden als startmateriaal voor de
uitwerking. Plaats bronverwijzingen en toegestane technische documentatie in
`docs/bronnen/`; fictieve voorbeelden kunnen in `data/example/` of
`tests/fixtures/`. Het noemen van een lokaal pad is geen toestemming om het
bestand te kopiëren of te publiceren. Het plan vermeldt de bekende leesrechten
en open uitzoekacties; het verzamelt geen precieze schema's als voorwaarde voor
deze mappenindeling.

Neem `logs/` in zowel de korte als uitgebreide variant altijd in de concrete
boomstructuur van het plan op, ook als een cursist een eigen mappenindeling kiest.
Gebruik de loggingbehoefte uit het gesprek om de benodigde submappen te kiezen.
Leg gebeurtenissen/detailniveau, toegang, bewaartermijn of beheerder en
Git-uitsluitingen vast. Onbekende afspraken blijven expliciete voorstellen of
open punten. Geschoonde ontwikkelverslagen kunnen in Git; ruwe runtime- en
testlogs niet. Log nooit credentials, persoonsgegevens of volledige brondata.

## Uitbreidingen wanneer de casus die nodig heeft

| Map | Gebruik en Git-beleid |
| --- | --- |
| `data/example/` | Fictieve of aantoonbaar deelbare voorbeelden, elk kleiner dan 1 MB, in Git. |
| `data/private/` | Lokale, grote of gevoelige invoer; buiten Git en in goedgekeurde opslag. |
| `media/example/` | Deelbare voorbeeldmedia kleiner dan 1 MB per bestand, alleen met gebruiksrecht. |
| `media/private/` | Lokale of vertrouwelijke media, buiten Git. |
| `logs/runtime/` en `logs/test/` | Lokale uitvoerlogs, buiten Git; nooit secrets of ruwe persoonsrecords. |
| `output/` | Gegenereerde resultaten, standaard buiten Git. |
| `tmp/` | Tijdelijke bestanden, buiten Git. |
| `scripts/` | Projectgebonden hulpscripts. |
| `server/` | Alleen een afzonderlijke backendservice. |
| `database/` | Alleen bij een database of beheerd schema; migraties in `migrations/`. |
| `.github/workflows/` | Alleen wanneer automatische controles of deployment nodig zijn. |

Behoud één vaste locatie per soort bestand. Voeg geen concurrerende bronmappen
toe zonder reden. Data- en mediamappen krijgen een README over herkomst,
gebruiksrecht, fictief/echt, formaat, gevoeligheid, toegang en bewaartermijn.
Bij gevoelige data bepaalt goedgekeurde opslag waar deze werkelijk thuishoort;
een genegeerde map binnen een repository is op zichzelf geen beveiliging.

Projectdocumentatie kan zo nodig bestaan uit `docs/project-brief.md`,
`architecture.md`, `tasks.md`, `test-plan.md` en `decisions.md`. Voeg alleen bij
behoefte `roadmap.md`, `evals.md`, `transition-guide.md`, `risk-register.md` of
`data-governance.md` toe. Houd een kleine eerste versie overzichtelijk.

Neem in het plan deze basis voor `.gitignore` op, aangevuld voor de gekozen stack:

```gitignore
.env
.env.*
!.env.example
data/private/
media/private/
logs/runtime/
logs/test/
output/
tmp/
.DS_Store
Thumbs.db
*.log
```

Leg ook vast dat reeds getrackte bestanden niet vanzelf worden genegeerd.
Voorgestelde checks zijn bijvoorbeeld `git status` en `git check-ignore .env`;
de intake voert die niet uit. Geschoonde agentverslagen en fictieve voorbeelden
mogen in Git, mits het databeleid van de casus dat toestaat.

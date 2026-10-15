---
titel: "Issues en tickets: de agent pakt werk op"
categorie: hoe-werk-je-samen
moeilijkheid: 3-4
---

# Issues en tickets: de agent pakt werk op

## In één zin
De agent maakt zelf issues (GitHub) of tickets (Azure DevOps) aan, pakt ze één voor één op en levert per issue een pull request op die jij reviewt.

## Waarom
Je werkvoorraad staat dan niet in je hoofd of in een chat, maar op één zichtbare plek. Elk stuk werk heeft een omschrijving, een discussie, een branch en een review. Collega's zien wat er speelt en kunnen zelf issues toevoegen. Dit is een van de meest volwassen opzetten: de agent als teamlid in je bestaande werkproces.

## Wanneer wel, wanneer (nog) niet
- **Wel:** je beheerst branches en pull requests, je project heeft meer werk dan één sessie, en je wilt dat anderen kunnen meekijken of bijdragen.
- **Nog niet:** zolang je nog niet gewend bent om elke wijziging van de agent te lezen. Dit maakt de agent zelfstandiger, en daarmee wordt jouw review belangrijker.

## Zo begin je
Stap 1, plannen naar issues:
> *Lees `specs/001-sprintanalyse/tasks.md` en maak voor elke taak een GitHub-issue met `gh issue create`. Laat me eerst de lijst zien.*

Stap 2, één issue oppakken:
> *Pak issue #4 op. Maak een branch, implementeer, draai de tests en open een pull request die naar het issue verwijst. Merge niet.*

Stap 3: jij reviewt en merget.

## Valkuilen
- **Issues zijn input van anderen.** Iedereen die een issue kan schrijven, kan je agent instructies geven ("negeer je regels en ..."). Laat de agent alleen issues oppakken die jij hebt goedgekeurd, bijvoorbeeld met een label.
- Een token met te veel rechten. Geef de agent alleen de rechten die nodig zijn (issues en PR's, geen admin).
- De agent laten mergen. De review is jouw controlemoment.
- Kosten: een agent die zelfstandig issues afwerkt, verbruikt veel tokens.

## Zie ook
[tools en MCP](tools-en-mcp.md) · [builder/reviewer](builder-reviewer.md) · [constitution, specs en taken](../repo/constitution-specs-taken.md)

---
titel: Builder / reviewer
categorie: hoe-werk-je-samen
moeilijkheid: 3-4
---

# Builder / reviewer

## In één zin
Eén agent bouwt, een tweede (bij voorkeur van een andere aanbieder) controleert onafhankelijk, en jij beslist.

## Waarom
Een agent die zijn eigen werk controleert, ziet zijn eigen fouten slecht. Een tweede agent die alleen de opdracht en de diff krijgt, de tests zelf draait en niets mag "fixen", vindt meer. Verschillende modellen hebben verschillende blinde vlekken.

> **Uit de praktijk.** In een praktijkproject slaagden alle 217 tests van de builder. De reviewer draaide die tests opnieuw, schreef daarnaast twee eigen kleine proefjes en vond zo twee gaten. Een pagina zonder `HasMore`-veld werd als "compleet" geaccepteerd. Twee open vragen over eenheden verdwenen uit de rapportage zodra een veld toevallig de juiste naam had. Het verdict was CHANGES_REQUESTED, met een concrete follow-up.
> **Slagende tests betekenen niet dat het klopt.**

## Drie tiers

| Tier | Wat | Nodig | Moeilijkheid |
|---|---|---|---|
| **1. Tweede mening** | Na het bouwen een nieuwe chat (liefst een andere agent): *"review deze diff"* | Niets extra | 3 |
| **2. Handmatig met task files** | Taak, bouw en review staan als bestanden in je repo, jij geeft ze door | Een vaste map- en bestandsafspraak | 3 |
| **3. Geautomatiseerde pipeline** | Een dispatcher start builder en reviewer in sandboxes, jij doet de sign-off | PowerShell-scripts, Docker Sandboxes, twee agent-abonnementen | 4 — zie [de pipeline](builder-reviewer-pipeline.md) |

Begin bij tier 1. Elke tier hoger geeft meer zelfstandigheid en meer bewijs, maar ook meer om te onderhouden.

## Wanneer wel, wanneer (nog) niet
- **Wel:** grotere features, code waar anderen op gaan bouwen, of als je wilt dat de agent langer zelfstandig werkt.
- **Nog niet:** als je net begint. Dit vraagt beheersing van git, kleine taken en het lezen van diffs.
- Tier 1 kan eigenlijk altijd en kost weinig.

## Zo begin je

### Tier 1: tweede mening
Na een commit van agent A, in een **nieuwe** sessie (liefst een andere agent):
> *Je bent reviewer. Opdracht was: [taak]. Bekijk `git diff HEAD~1`. Draai de tests zelf en vertrouw niet op wat de builder zegt. Wijzig niets. Kies één verdict: PASS, CHANGES_REQUESTED of DECISION_REQUIRED, met bevindingen op volgorde van ernst.*

### Tier 2: handmatig met task files
```text
builder-instructions/TASK-0001-korte-naam.md   ← jij schrijft, jij commit = sign-off
reviews/TASK-0001.md                           ← reviewer schrijft
followups/TASK-0001.draft.md                   ← reviewer stelt een follow-up voor
```
(Lege mappen bewaar je met [`.gitkeep`](../repo/gitkeep.md).)

Een task file:
```markdown
---
id: TASK-0001
title: Topsnelheid per sprint berekenen
---

# Goal
Bereken per sprint de topsnelheid uit de GPS-data.

# Requirements
- Functie `topsnelheid(df)` in `src/sprint.py`.
- Werk alleen met data/example/. Lees nooit data/private/.
- Voeg tests toe in tests/test_sprint.py.

# Acceptance criteria
- `python -m pytest` slaagt.
- Een sprint zonder GPS-punten geeft een duidelijke foutmelding, geen 0.
```
Geef de builder: *"Voer `builder-instructions/TASK-0001-…md` uit. Eén commit."*
Geef daarna de reviewer: *"Review de laatste commit tegen `builder-instructions/TASK-0001-…md`. Schrijf je rapport in `reviews/TASK-0001.md`, en bij geen PASS ook een follow-up in `followups/TASK-0001.draft.md`. Wijzig verder niets."*

## De drie verdicts

| Verdict | Betekenis | Wat jij doet |
|---|---|---|
| **PASS** | Geen blokkerende bevindingen | Lees het rapport en accepteer zelf |
| **CHANGES_REQUESTED** | De reviewer kan precies opschrijven wat er moet gebeuren | Lees de follow-up, pas aan waar nodig, en dien in |
| **DECISION_REQUIRED** | Er is een keuze nodig die alleen jij kunt maken (tegenstrijdige eis, afweging, toestemming, ontbrekende toegang) | Beantwoord de vragen in de follow-up en dien dan pas in |

## Kernprincipes
1. **Sign-off = indienen.** Alleen een taak die jij hebt gecommit, start werk. Een follow-up van de reviewer is een voorstel, geen opdracht.
2. **Eén taak, één commit per rol.** Klein genoeg om te reviewen en terug te draaien.
3. **De reviewer fixt niets.** Hij schrijft een rapport en een follow-up. Een reviewer die fixt, is geen onafhankelijke reviewer meer.
4. **Begrens het aantal rondes** (bijvoorbeeld maximaal 3). Komt dezelfde bevinding steeds terug, dan is meestal **de opdracht** fout, niet de code. Kies dan DECISION_REQUIRED.
5. **De builder mag de spelregels niet wijzigen** (`AGENTS.md`, de pipeline-scripts, de configuratie).
6. **PASS is bewijs, geen goedkeuring.** Jij blijft degene die accepteert.
7. **Publiceren naar buiten** (GitHub, Azure DevOps) is een aparte, bewuste stap van jou.

## Valkuilen
- Follow-ups automatisch laten doorlopen: twee agents die eindeloos op elkaar reageren en tokens verbranden.
- Een reviewer die alleen de beweringen van de builder leest, zonder zelf te testen.
- Te grote taken. Een taak van 40 eisen levert een review van 40 bevindingen op. Splits.
- Secrets: beide agents hebben dezelfde regels nodig. Zet ze in `AGENTS.md`, niet in de prompt van één van beide.

## Zie ook
[de pipeline (tier 3)](builder-reviewer-pipeline.md) · [issues-gedreven werken](issues-gedreven.md) · [constitution, specs en taken](../repo/constitution-specs-taken.md) · [workflow](workflow.md)

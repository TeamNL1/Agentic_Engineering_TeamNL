---
titel: Constitution, specs en taken
categorie: agent-context
moeilijkheid: 3
---

# Constitution, specs en taken

## In één zin
Leg vast wat nooit mag (constitution), wat je wilt bouwen (spec) en in welke stappen (taken), **voordat** de agent gaat coderen.

## Waarom
"Bouw even een dashboard" levert iets op, maar zelden wat je bedoelde. Een agent die eerst een spec en een plan schrijft, geeft je controlepunten waar je kunt bijsturen. Dat is goedkoper dan achteraf herstellen.

| Document | Vraag | Verandert |
|---|---|---|
| `docs/CONSTITUTION.md` | Wat zijn de spelregels? (privacy, eenvoud, testen, wat altijd gevraagd moet worden) | zelden, alleen door jou |
| `specs/<feature>/spec.md` | Wat moet deze feature doen, wat niet, wanneer is het klaar? | per feature |
| `specs/<feature>/plan.md` | Welke bestanden, welke aanpak, welke risico's? | per feature |
| `specs/<feature>/tasks.md` | Kleine, geordende stappen die elk een commit opleveren | per feature |

## Wanneer wel, wanneer (nog) niet
- **Wel:** een feature die groter is dan een kleine aanpassing, onduidelijke eisen, of werk dat je wilt laten reviewen.
- **Niet:** een typfout, een kleine tekstwijziging, een opdracht die je al precies kunt formuleren.

## Zo begin je
Zonder extra tools:
> *Schrijf eerst een spec voor [feature] in `specs/001-[naam]/spec.md`: doel, wat erbij hoort, wat niet, randgevallen, acceptatiecriteria. Stel me vragen over wat onduidelijk is. Begin nog niet met coderen.*

Met **Spec Kit** (GitHub) krijg je deze stappen als vaste commando's: `constitution` → `specify` → `clarify` → `plan` → `tasks` → `implement` → `analyze`. Bij elke stap is er een moment waarop jij goedkeurt.

## Valkuilen
- De agent springt toch naar coderen. Zeg expliciet "nog niet coderen".
- Een plan dat geen echte bestandsnamen uit je repo noemt, is niet op je repo gebaseerd. Vraag de agent eerst beter te kijken.
- Proces om het proces: voor een prototype van een middag is dit overkill.

## Zie ook
[`handoffs-memory-decisions.md`](handoffs-memory-decisions.md) · [issues-gedreven werken](../agent/issues-gedreven.md) · [builder/reviewer](../agent/builder-reviewer.md)

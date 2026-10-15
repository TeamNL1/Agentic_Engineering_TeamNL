---
titel: "Workflow: plan, korte sessies, hand-off"
categorie: hoe-werk-je-samen
moeilijkheid: 1
---

# Workflow: plan, korte sessies, hand-off

## In één zin
Behandel je agent als een snelle collega die alles vergeet: geef een duidelijke opdracht, laat eerst een plan maken, werk in kleine stappen en laat hem opschrijven waar hij gebleven is.

## Waarom
De agent is snel, jij moet blijven begrijpen wat er gebeurt. Lange chats worden duurder (meer tokens) en slechter (de agent raakt de draad kwijt). Kleine stappen met commits maken terugdraaien makkelijk.

## Wanneer wel, wanneer (nog) niet
Altijd. Dit is de kern van Agentic Engineering.

## Zo begin je — de dagelijkse cyclus
1. **Start:** *"Lees de laatste hand-off en stel voor wat we vandaag doen."*
2. **Plan:** zet de agent in planmodus. *"Maak een plan voor [één feature]. Nog niet coderen."* Lees het plan en stuur bij.
3. **Bouw:** laat één stap uitvoeren. Kijk naar de diff.
4. **Controleer:** draai het zelf. Werkt het? Begrijp je het?
5. **Commit:** één werkende stap = één commit, met een duidelijke boodschap.
6. **Herhaal** stap 2–5. Nieuwe feature? **Nieuwe chat.**
7. **Afsluiten:** *"Schrijf een hand-off."* Lees hem, en commit hem.

## Zelf doen of de agent laten doen?
*Behandel je agent als software-engineer, niet als je terminal.*

| Doe zelf (kost geen tokens) | Vraag je agent |
|---|---|
| `git status`, `git diff`, `git log` | Een feature bouwen |
| Je app of tests starten | Een foutmelding verklaren |
| Een bestand openen en lezen | Code herstructureren |
| `pip install -r requirements.txt` | Tests schrijven, root-cause-analyse |

## Valkuilen
- **Vibe-modus:** steeds "ga door" typen zonder te lezen. Na een uur heb je code die je niet begrijpt.
- Eén chat voor de hele dag. De context loopt vol en de kwaliteit zakt.
- Werkt het niet na twee of drie pogingen? Stop, begin een nieuwe chat met een betere opdracht.
- Gooi je chatgeschiedenis af en toe weg. Wat belangrijk is, hoort in je repo.

## Zie ook
[hand-offs](../repo/handoffs-memory-decisions.md) · [constitution, specs en taken](../repo/constitution-specs-taken.md) · [permissies](permissies-en-guardrails.md)

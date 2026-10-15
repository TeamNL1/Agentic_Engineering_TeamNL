---
titel: .gitkeep
categorie: structuur
moeilijkheid: 2
---

# `.gitkeep`

## In één zin
Een leeg bestand waarmee je een verder lege map toch in git krijgt.

## Waarom
Git bewaart bestanden, geen mappen. Een lege map verdwijnt dus bij het klonen. Soms moet een map wel bestaan, omdat je code ernaar schrijft of omdat de structuur aan je buddy en je agent laat zien waar iets hoort:

- `data/private/`: de plek waar iedereen zijn eigen echte data neerzet
- `output/`: waar je script figuren en exports schrijft
- `reviews/`, `followups/`: mappen die pas later gevuld worden (zie [builder/reviewer](../agent/builder-reviewer.md))

`.gitkeep` is geen functie van git, maar een afspraak: elk bestand werkt. De naam vertelt alleen waarom het er staat.

## Wanneer wel, wanneer (nog) niet
- **Wel:** een map die moet bestaan maar (nog) leeg is, of waarvan de inhoud genegeerd wordt.
- **Niet:** mappen voor "misschien later". Een lege map zonder doel maakt je repo onoverzichtelijk (zie [folder structure](folder-structure.md)).

## Zo begin je
Een lege map bewaren:
```bash
touch output/.gitkeep           # PowerShell: New-Item output/.gitkeep
git add output/.gitkeep
```

Een map bewaren waarvan de **inhoud** genegeerd wordt, zoals `data/private/`. In [`.gitignore`](gitignore.md):
```gitignore
data/private/*
!data/private/.gitkeep
```

## Valkuilen
- **`data/private/` vs. `data/private/*`.** Met `data/private/` negeert git de hele map, en dan kun je `.gitkeep` niet meer uitzonderen. Gebruik `data/private/*` als je de map wilt bewaren.
- Zet in `.gitkeep` eventueel één regel uitleg ("hier komt je eigen data, wordt niet gecommit"). Of zet een `README.md` in de map; dan heb je `.gitkeep` niet nodig.
- Controleer met `git status` dat je niet per ongeluk de inhoud van de map toevoegt.

## Zie ook
[`gitignore.md`](gitignore.md) · [`data-folders.md`](data-folders.md) · [`folder-structure.md`](folder-structure.md)

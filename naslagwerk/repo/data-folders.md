---
titel: "Data folders: data/example vs. data/private"
categorie: veilig
moeilijkheid: 1
---

# Data folders: `data/example/` vs. `data/private/`

## In één zin
Maak een harde scheiding tussen data die in git mag (klein, nep, openbaar) en data die nooit in git mag (echt, privé, gelicentieerd).

## Waarom
Je code moet kunnen draaien zonder echte data. Anders kan je buddy niets en je agent ook niet. Echte data van sporters valt onder de AVG; gezondheidsgegevens zijn zelfs bijzondere persoonsgegevens. Gelicentieerde data mag je vaak niet delen.

## Wanneer wel, wanneer (nog) niet
- **Altijd** als je project met data werkt.
- `data/example/`: synthetische, geanonimiseerde of openbare data. Altijd klein (**< 1 MB**), en ga ervan uit dat het **op straat ligt**: niets gevoeligs, liefst synthetisch.
- `data/private/`: echte data. Staat in [`.gitignore`](gitignore.md). Of nog beter: staat helemaal buiten je repo en wordt via `DATA_DIR` in [`.env`](env.md) aangewezen.

## Zo begin je
```text
data/
  example/
    training.csv      # 50 verzonnen rijen, zelfde kolommen als de echte data
    README.md         # hoe is deze data gemaakt? welke kolommen?
  private/            # genegeerd door git
```

Andere namen zijn ook gangbaar, zoals `data/examples/` en `data/local/`. Het gaat om de scheiding, niet om de naam: kies er één en zet hem in je `AGENTS.md` en `.gitignore`.

Tip: laat je agent een script schrijven dat synthetische data maakt op basis van alleen de kolomnamen en datatypes (`scripts/make_example_data.py`). Dan hoeft de agent de echte data nooit te zien.

## Valkuilen
- "Geanonimiseerd" is lastiger dan het lijkt: naam weg, maar geboortedatum + sport + club = herleidbaar.
- Figuren en exports (`output/`) kunnen ook echte data bevatten. Negeer ze in git.
- Staat je repo in OneDrive en je data ook? Prima, maar dan regelt **OneDrive** het delen van de data, niet git.

## Zie ook
[data access](../agent/data-access.md) · [`env.md`](env.md) · [`notebooks.md`](notebooks.md)

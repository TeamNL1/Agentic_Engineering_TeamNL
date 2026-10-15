---
titel: Notebooks (.ipynb)
categorie: veilig
moeilijkheid: 2
---

# Notebooks (`.ipynb`)

## In één zin
Jupyter-notebooks zijn handig om te verkennen, maar ze slaan hun **output** op, inclusief tabellen en figuren met je data.

## Waarom
Een `df.head()` in een notebook betekent echte rijen in je bestand. Commit je het notebook, dan staat die data in git. Daarnaast zijn notebooks lastig te reviewen (een diff is een muur JSON) en lastig te hergebruiken.

## Wanneer wel, wanneer (nog) niet
- **Wel:** verkennen, uitproberen, één keer een figuur maken.
- **Niet:** als plek voor code die blijft. Verhuis herbruikbare logica naar `src/`, zodat je agent en je buddy er ook bij kunnen.

## Zo begin je
- Wis de output voor je commit: in VS Code via *Clear All Outputs*, of:
  ```bash
  jupyter nbconvert --clear-output --inplace notebooks/verkenning.ipynb
  ```
- Automatisch bij elke commit: `pip install nbstripout` en daarna `nbstripout --install` (moeilijkheid 3).
- Of: zet notebooks met echte data in `notebooks/private/` en negeer die map.

## Valkuilen
- Je agent leest een notebook inclusief de output. Een notebook met echte data openen = je agent ziet de data.
- Notebooks die alleen werken als je de cellen in een bepaalde volgorde draait, zijn niet overdraagbaar.

## Zie ook
[`data-folders.md`](data-folders.md) · [`folder-structure.md`](folder-structure.md) · [data access](../agent/data-access.md)

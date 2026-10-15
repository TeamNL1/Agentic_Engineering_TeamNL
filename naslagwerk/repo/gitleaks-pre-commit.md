---
titel: gitleaks en pre-commit
categorie: veilig
moeilijkheid: 3
---

# gitleaks en pre-commit

## In één zin
gitleaks zoekt naar secrets (keys, wachtwoorden, tokens) in je code en git-geschiedenis. Een pre-commit hook laat die controle automatisch draaien vóór elke commit.

## Waarom
[`.gitignore`](gitignore.md) beschermt alleen bestanden waarvan je wíst dat het secrets waren. Een agent die "even snel" een API-key in `config.py` zet, glipt erdoorheen. gitleaks vangt dat op voordat het gepusht is.

## Wanneer wel, wanneer (nog) niet
- **Wel:** je project gebruikt API-keys of wachtwoorden, je werkt met meerdere mensen of agents, of je repo wordt (ooit) openbaar.
- Zonder secrets in het spel is het een vangnet dat je nog niet nodig hebt.

## Zo begin je
Eenmalig je hele geschiedenis scannen:
```bash
gitleaks git -v           # oudere versies: gitleaks detect -v
```

Automatisch vóór elke commit, via het `pre-commit`-framework. `.pre-commit-config.yaml`:
```yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.21.2        # controleer de actuele versie
    hooks:
      - id: gitleaks
```
```bash
pip install pre-commit
pre-commit install
```

In hetzelfde bestand kun je later meer hooks zetten, zoals `nbstripout` (zie [notebooks](notebooks.md)) of een code-formatter.

## Valkuilen
- **Gevonden in de geschiedenis?** Verwijderen is niet genoeg: vervang het secret (nieuwe key aanvragen).
- Een hook is lokaal. Iedereen moet `pre-commit install` zelf draaien. Zet het in je [`README.md`](readme.md).
- gitleaks herkent patronen van secrets, **geen persoonsgegevens**. Een CSV met namen ziet het niet.

## Zie ook
[`gitignore.md`](gitignore.md) · [`env.md`](env.md)

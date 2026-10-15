---
titel: Docker, compose en pipelines (.yml)
categorie: draaien
moeilijkheid: 4
---

# Docker, compose en pipelines (`.yml`)

## In één zin
Een `Dockerfile` beschrijft een complete, afgesloten omgeving waarin je app draait. `.yml`-bestanden beschrijven hoe meerdere onderdelen samen draaien (compose) of wat er automatisch gebeurt bij een push (CI/CD).

## Waarom
"Werkt op mijn computer" is opgelost als je computer niet meer uitmaakt. Docker pakt Python-versie, packages en systeemafhankelijkheden samen in één image dat overal hetzelfde draait: bij je buddy, op een server, in Azure.

| Bestand | Wat |
|---|---|
| `Dockerfile` | Recept voor één image |
| `docker-compose.yml` | Meerdere containers samen (bijv. app + database) |
| `.github/workflows/*.yml` | GitHub Actions: tests draaien bij elke push, automatisch deployen |
| `azure-pipelines.yml` | Hetzelfde voor Azure DevOps |

## Wanneer wel, wanneer (nog) niet
- **Wel:** je app moet voor anderen draaien (server, intranet), of de installatie is zo ingewikkeld dat "volg de README" niet meer werkt.
- **Nog niet:** zolang een `.venv` + [`requirements.txt`](venv-en-requirements.md) volstaat. Docker voegt een extra laag toe die je moet onderhouden en begrijpen.
- Docker als **sandbox voor je agent** is een ander verhaal: zie [sandbox](../agent/sandbox.md).

## Zo begin je
Minimale `Dockerfile` voor een Streamlit-app:
```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY src/ src/
COPY app/ app/
EXPOSE 8501
CMD ["streamlit", "run", "app/app.py", "--server.address=0.0.0.0"]
```
```bash
docker build -t sprintanalyse .
docker run -p 8501:8501 --env-file .env sprintanalyse
```

## Valkuilen
- `COPY . .` kopieert ook `.env` en `data/private/` in je image. Gebruik een `.dockerignore`.
- Secrets nooit in de `Dockerfile` zetten. Geef ze mee bij het starten (`--env-file`).
- CI/CD laat code automatisch draaien met toegang tot secrets van je organisatie. Overleg met IT voordat je dat inricht.

## Zie ook
[`pyproject-uv-poetry.md`](pyproject-uv-poetry.md) · [sandbox](../agent/sandbox.md)

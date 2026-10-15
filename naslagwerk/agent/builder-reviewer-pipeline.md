---
titel: "Builder / reviewer: de geautomatiseerde pipeline"
categorie: hoe-werk-je-samen
moeilijkheid: 4
---

# Builder / reviewer: de geautomatiseerde pipeline

## In één zin
Je dient een taak in. Een PowerShell-dispatcher laat Claude die bouwen in een sandbox en Codex hem reviewen in een tweede sandbox, en stopt daarna. Jij leest, beslist en dient eventueel de volgende ronde in.

## Waarom
Bij [tier 2](builder-reviewer.md#drie-tiers) geef je zelf alles door. Met een pipeline gebeurt dat automatisch, terwijl de **controlepunten bij jou blijven**: niets start zonder jouw commit, en niets gaat naar buiten zonder jouw push. Omdat beide agents in een sandbox draaien, mogen ze daar zonder toestemming vragen werken. De sandbox is de muur.

Deze opzet draait als werkend voorbeeld in de praktijk. Er is ook een oefenversie met een klein rekenmachineproject (zie [Zo begin je](#zo-begin-je)).

## Opbouw

```text
pipeline/
├── origin.git/   lokale "remote"; alleen de dispatcher schrijft hierin
├── control/      jouw checkout: taken schrijven, indienen, resultaten lezen
├── builder/      checkout voor Claude, in sandbox 1
├── reviewer/     checkout voor Codex, in sandbox 2
├── logs/         volledige transcripties per run
└── state/        welke commits al verwerkt zijn (buiten git)
```

`origin.git` is **niet** je GitHub- of Azure-repo. Het is een lokaal doorgeefluik, zodat de agents nooit iets naar buiten kunnen pushen.

## Zo loopt een ronde

```text
 jij (control)                dispatcher (PowerShell)        sandboxes
 ─────────────                ───────────────────────        ─────────
 1. schrijf TASK-0001.md
 2. Submit-Task.ps1 ───────►  ziet commit met
    (commit = sign-off)      "Agent-Event: instruction"
                              zet builder op die commit ──► 3. Claude bouwt, test,
                                                               maakt één commit
                              controleert: één commit,
                              geen protected files,
                              publiceert ◄──────────────────
                              ziet "build-complete"
                              zet reviewer op die commit ─► 4. Codex reviewt, test zelf,
                                                               schrijft review + follow-up
                              publiceert ◄──────────────────
                              ziet "review-complete": STOP
 5. git pull, lees review
 6. PASS → klaar
    anders → Promote-Followup.ps1, aanpassen, Submit-Task.ps1
 7. later, bewust: push naar GitHub/Azure
```

De dispatcher kijkt elke paar seconden naar `origin.git` en reageert op de **trailers** onderaan commitberichten (`Agent-Event: instruction`, `build-complete`, `review-complete`). Zo is elke stap terug te vinden in de git-geschiedenis.

## Dagelijks gebruik

Twee PowerShell-tabbladen, beide in `control/`:
```powershell
Set-ExecutionPolicy -Scope Process Bypass   # alleen voor dit tabblad
```

**Tabblad Dispatcher:**
```powershell
.\automation\Start-AgentPipeline.ps1 -BuilderSandbox <naam-builder> -ReviewerSandbox <naam-reviewer>
```

**Tabblad Control:**
```powershell
git status --short          # alleen je nieuwe task file mag hier staan
.\automation\Submit-Task.ps1 -Path .\builder-instructions\TASK-0001-korte-naam.md
# ... wacht tot de dispatcher "review-complete" meldt ...
git pull --ff-only origin main
Get-Content .\reviews\TASK-0001.md
```

Een follow-up doorzetten:
```powershell
.\automation\Promote-Followup.ps1 -TaskId TASK-0001 -Slug korte-naam
# lees en bewerk builder-instructions\TASK-0002-korte-naam.md
# beantwoord eventuele "Decisions required" en verwijder die sectie
.\automation\Submit-Task.ps1 -Path .\builder-instructions\TASK-0002-korte-naam.md
```

## Configuratie: `agent-pipeline.config.json`
```json
{
  "validationProfiles": {
    "default": { "commands": ["python -m pytest"], "artifacts": [] },
    "web-ui":  { "commands": ["python -m pytest", "npx playwright test"],
                 "artifacts": ["test-results/", "playwright-report/"] }
  },
  "governancePaths": ["AGENTS.md"],
  "followups": { "maxRounds": 3 }
}
```
- **validationProfiles:** welke commando's builder én reviewer moeten draaien. Een taak kiest een profiel.
- **governancePaths:** bestanden die de builder niet mag wijzigen. De dispatcher weigert de commit als dat toch gebeurt.
- **maxRounds:** maximaal aantal follow-up-rondes per taak.

## Ingebouwde safeguards

| Safeguard | Waarom |
|---|---|
| Alleen een door jou gecommit task file start werk | Sign-off is een bewuste handeling, niet "bestand opgeslagen" |
| Agents mogen niet fetchen, pullen, pushen of van branch wisselen | Alleen de dispatcher publiceert, na controle |
| Precies één commit per rol, schone werkmap | Klein, reviewbaar, eenduidig |
| Builder mag `AGENTS.md`, scripts en configuratie niet wijzigen | Een agent kan de spelregels niet versoepelen om een taak "af" te krijgen |
| Reviewer wijzigt alleen review en follow-up | Onafhankelijkheid |
| Follow-ups worden nooit automatisch ingediend | Jij houdt de regie, en tokens blijven onder controle |
| Na een review stopt de dispatcher | Geen eindeloze lus |
| Publiceren naar GitHub/Azure doe je zelf | Halve en afgebroken rondes lekken nooit naar je team |

## Lessen uit de praktijk
- **Je `.venv` moet buiten de checkout staan.** De dispatcher maakt de checkouts vóór elke run schoon (`git reset --hard` en `git clean -fdx`). Een `.venv` in de map wordt dus elke keer gewist. Maak hem per sandbox één keer aan op een vaste plek (bijv. `/home/agent/.venvs/<project>`) en verwijs daar in je validatieprofiel naar.
- **Host en sandbox zijn aparte computers.** Wat je op Windows installeert, bestaat niet in de sandbox, en andersom.
- **Combineer met data access-opzet "jij draait het live".** Agents zien geen `.env` en doen geen live API-calls. Ze schrijven per call op wat die doet, wat je kunt verwachten en wat de risico's zijn. Jij draait de call en geeft een opgeschoond resultaat terug. Zie [data access](data-access.md).
- **Herstellen:** gooi `state/` niet weg en zet beveiligingen niet uit om een fout te omzeilen. Bekijk eerst de exacte foutmelding en de staat van de repo.
- **Implementatie staat lokaal op `main` vóór de review.** Dat is acceptabel omdat `origin.git` lokaal is. Publiceer pas naar buiten na PASS en je eigen controle.

## Wanneer wel, wanneer (nog) niet
- **Wel:** een project met een stabiele testsuite, taken die je goed kunt omschrijven, en de wens om agents langer zelfstandig te laten werken.
- **Niet:** zonder tests (de reviewer heeft dan niets om onafhankelijk te draaien), of als je tier 1 en 2 nog niet gewend bent.
- **Kosten:** elke ronde = een volledige builder-run plus een reviewer-run, bij twee aanbieders.

## Zo begin je
1. Oefen eerst met de **demo-starter**: een klein JavaScript-rekenmachineproject met voorbeeldtaken (`TASK-0001-add-multiply.md` e.d.) en dezelfde pipeline. Vereist: PowerShell, Git, Docker Desktop met Sandboxes (`sbx`), en toegang tot Claude Code én Codex.
   ```powershell
   sbx secret set anthropic
   sbx secret set openai --oauth
   ```
2. Een bestaand project: gebruik `Initialize-FromRemote.ps1` met een gedocumenteerd offline testcommando. Je originele repo en remote blijven onveranderd.
3. Laat task files schrijven met hulp van een *task-authoring*-instructie: eerst bespreken, aannames scheiden van decisions, en te grote taken opsplitsen.

## Zie ook
[builder/reviewer (de drie tiers)](builder-reviewer.md) · [sandbox](sandbox.md) · [data access](data-access.md) · [`.gitkeep`](../repo/gitkeep.md)

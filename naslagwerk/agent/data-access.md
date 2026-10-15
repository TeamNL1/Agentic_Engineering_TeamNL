---
titel: "Data access: wat ziet je agent van je data?"
categorie: wat-mag-hij
moeilijkheid: 1
---

# Data access: wat ziet je agent van je data?

## In één zin
Er is een groot verschil tussen data die je agent **leest** (die gaat naar de modelaanbieder) en data die je agent met Python **laat verwerken** op je eigen computer (dan gaat alleen de uitkomst naar de modelaanbieder).

## Waarom
Je agent bestaat uit twee delen: het **model** draait bij de aanbieder (Anthropic, OpenAI, Mistral, ...), de **tools** draaien op jouw computer. Alles wat het model te zien krijgt, gaat over het internet naar de aanbieder. Wat alleen op jouw computer gebeurt, niet.

```text
LEZEN       data.csv ──(agent opent het bestand)──────────────────► model   ← de data zelf gaat mee
VERWERKEN   data.csv ──► Python-script (lokaal) ──► uitkomst ──────► model   ← alleen de uitkomst gaat mee
                                                    "312 rijen, gemiddelde 7,4 m/s"
```

Laat je de agent een script schrijven en draaien dat de data lokaal verwerkt, dan ziet het model de data zelf niet. Het ziet alleen wat het script teruggeeft. Dat maakt het mogelijk om met een agent aan gevoelige data te werken.

## Wat komt er wél terug bij het model?
Alles wat het script of de terminal teruggeeft. Houd dat bewust klein:

| Komt terug | Risico | Zo houd je het veilig |
|---|---|---|
| Wat het script print | `print(df.head())` = echte rijen | Print aantallen, kolomnamen, gemiddelden, geen rijen |
| Foutmeldingen | `ValueError: could not convert 'Jansen' to float` bevat een waarde | Vang fouten af en meld rijnummer + kolom, niet de waarde |
| Bestanden die de agent opent | Een export, een notebook met output, een figuur met namen | Laat de agent alleen code en example data openen |
| Wat jij in de chat plakt | Een foutmelding of tabel met echte waarden | Kijk voordat je plakt |

## Wie beslist wat mag?
**De eigenaar van de data**, of degene die namens de eigenaar zegt wat je ermee mag: de sporter, de bond, de data-aanbieder, of de privacy officer. Vraag het vóórdat je begint, en leg het antwoord vast. "Het staat op mijn laptop" betekent niet dat je het met een AI-aanbieder mag delen.

## De twee assen

**As 1 — Wat leest de agent zelf?** (van weinig naar veel)

| | Input | Voorbeeld |
|---|---|---|
| **A** | Beschrijving | Kolomnamen, datatypes, eenheden, bereiken |
| **B** | Synthetische data | Nepdata, gegenereerd op basis van A (of van geaggregeerde statistieken) |
| **C** | Sample | 10 / 100 / 1000 echte rijen, liefst gepseudonimiseerd |
| **D** | Volledige data | De hele tabel |

**As 2 — Waar wordt de data verwerkt, en door wie?**

| | Wie draait de code | Wat ziet het model van de output? |
|---|---|---|
| **1** | Jij, en je geeft de agent alleen een samenvatting of foutmelding | Alleen wat jij doorgeeft |
| **2** | De agent, lokaal op jouw computer | De output van het script (print, logs, foutmeldingen) |
| **3** | De agent, in een [sandbox](sandbox.md) waar alleen example data staat | Alleen output op example data |
| **4** | Het model zelf: je uploadt de data in de chat | Alles |

## Veelvoorkomende opzetten

| Opzet | As 1 × As 2 | Wat gaat naar het model? | Geschikt voor |
|---|---|---|---|
| **Blind bouwen:** agent krijgt alleen het schema, jij draait en geeft fouten door | A × 1 | Schema + wat jij doorgeeft | Zeer gevoelige data |
| **Bouwen op nepdata:** agent maakt synthetische data en ontwikkelt daarop; daarna draai je op echte data | B × 2 | Nepdata + output daarop | **Aanbevolen startpunt** |
| **Op gang helpen met een sample** | C × 1 of C × 2 | Een paar echte rijen | Rommelige data waarbij een schema niet genoeg zegt, met toestemming |
| **Lokaal verwerken met Python:** agent schrijft en draait scripts op de echte data, maar opent de data niet zelf | A/B × 2 op echte data | **Alleen de uitkomst** | Gevoelige data, mits de output klein en niet herleidbaar blijft |
| **Hele tabel uploaden** | D × 4 | Alles | Openbare data, of met expliciete toestemming van de eigenaar |

## Kanttekeningen
- **Lokaal verwerken werkt alleen als de uitkomst klein blijft.** Spreek dat af in je [`AGENTS.md`](../repo/agents-md.md) en kijk in het begin mee wat er terugkomt.
- **Voorkom dat de agent het databestand zelf opent.** Met deny-regels (`Read(./data/private/**)`) blokkeer je direct lezen. Een script dat de agent draait, kan het bestand nog steeds openen; dat is ook de bedoeling bij lokaal verwerken. Wil je een harde garantie dat de agent er niet bij kan, gebruik dan een [sandbox](sandbox.md) zonder de echte data.
- **Je account telt mee.** Business/enterprise-accounts trainen doorgaans niet op je data en hebben afspraken over bewaartermijnen. Gratis en privé-accounts vaak niet. Controleer de voorwaarden.
- **AVG:** gezondheidsgegevens van sporters zijn bijzondere persoonsgegevens. Voor delen met een externe partij heb je een grondslag nodig en vaak een verwerkersovereenkomst.
- **Licenties:** gelicentieerde data mag je volgens de voorwaarden vaak niet aan derden verstrekken. Een AI-aanbieder is een derde.

## Uit de praktijk: "jij draait het live"
In een praktijkproject met een externe API en persoonsgegevens geldt opzet **A/B × 1** voor alles wat live is:
- De agent leest nooit `.env` en doet zelf geen API-calls. Hij ontwikkelt met verzonnen testdata en nagebootste (gemockte) API-antwoorden.
- Voordat hij jou iets laat draaien, schrijft hij per call in `tests/user-api-test-calls-<reden>.md` op: wat de call doet, wat je mag verwachten, welke bestanden kunnen veranderen, wat de risico's zijn en waar het mechanisme in de code zit.
- Jij draait het commando en geeft alleen een **opgeschoonde samenvatting** terug.
- Kan de output persoonsgegevens of credentials bevatten? Dan past de agent eerst de code aan, zodat die een veilige, begrensde samenvatting geeft (bijv. HTTP-status en foutcategorie, geen response-body).

## Zo begin je
1. **Vraag de data-eigenaar** wat je met de data mag, en of delen met een AI-aanbieder is toegestaan.
2. Bepaal per dataset: openbaar, gelicentieerd, persoonsgegevens of gezondheidsgegevens?
3. Kies een opzet uit de tabel. Twijfel je, begin dan met **bouwen op nepdata**.
4. Leg je keuze vast in [`AGENTS.md`](../repo/agents-md.md):
   ```markdown
   ## Data access
   - Opzet: lokaal verwerken met Python. Data-eigenaar: [wie]; toestemming: [wat mag].
   - Open, lees of print NOOIT bestanden uit data/private/ of het pad in DATA_DIR.
   - Schrijf scripts die de data lokaal verwerken; ontwikkel en test op data/example/.
   - Output van scripts: alleen aantallen, kolomnamen en samenvattende statistieken. Nooit rijen of losse waarden.
   - Foutmeldingen: noem rijnummer en kolom, niet de waarde.
   ```
5. Blokkeer het direct lezen van de privédata in je [agentinstellingen](permissies-en-guardrails.md).

## Zie ook
[data folders](../repo/data-folders.md) · [permissies](permissies-en-guardrails.md) · [sandbox](sandbox.md) · [notebooks](../repo/notebooks.md)

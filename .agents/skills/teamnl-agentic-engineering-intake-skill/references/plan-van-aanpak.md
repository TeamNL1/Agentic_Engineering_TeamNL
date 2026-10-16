# Inhoud van plan-van-aanpak.md

Gebruik onderstaande indeling voor het uiteindelijke plan. Vul haar met de
antwoorden uit de intake, niet met algemene standaardtekst. Pas de lengte aan
de casus aan. Verwijder invulaanwijzingen en vermeld bij niet-relevante secties
kort 'niet van toepassing' met de reden.

In de korte variant mag je samenhangende secties combineren en informatie in
een paar zinnen vastleggen. Behoud alle essentiële besluiten en open punten;
maak geen langere intake of kunstmatig lang plan om deze indeling te vullen.
Werk in de uitgebreide variant relevante afwegingen en controles verder uit.
Het plan beschrijft vooral doel, aanpak, betrokkenen, eerste stap en inrichting.
Deze indeling is geen extra vragenlijst: voor de basisintake blijven de acht
intake-thema's en hun limieten leidend. Ontbrekende technische informatie wordt een uitzoekactie voor
de latere agent. Vraag niet door om alle secties volledig te vullen.

Lever naast de volledige handout een leesbare samenvatting in het agentgesprek
(bij voorkeur 150–250 woorden). Leg daarin doel, eerste versie en maximaal vijf
belangrijke ontwerpkeuzes uit, steeds met de reden vanuit de casus. Benoem
welke keuzes voorstellen zijn en welke afhankelijkheid nog openstaat. Voeg een
bestandslink toe als die bestaat en nodig uit tot toelichting of aanpassingen,
zonder verplichte bevestiging. Sluit de eerste samenvatting af met de keuze
voor tien inhoudelijke vervolgvragen, volgens de optionele verdiepingsronde in
de centrale skillinstructies. Begin alleen na die keuze. Verwerk de antwoorden
in hetzelfde plan en een vernieuwde samenvatting; houd die inhoudelijk gelijk.

1. **Titel en status** — casusnaam, datum, gekozen intakevariant en concept of uitgewerkt plan. Geen
   administratieve persoonsgegevens verzamelen die het plan niet nodig heeft.
2. **Probleem en aanleiding** — concrete kernvraag, huidige werkwijze, knelpunt,
   gevolgen en beoogde verbetering.
3. **Gebruikers en toepassing** — primaire gebruiker, andere ontvangers,
   gebruiksmoment en te ondersteunen handeling of beslissing.
4. **Beoogde aanpak** — hoe de cursist de verbetering wil bereiken, waarom deze
   richting passend lijkt, relevante betrokkenen en afhankelijkheden. Beschrijf
   een voorlopige productvorm of technische keuze alleen voor zover besproken;
   maak onbekende keuzes zichtbaar. Leg bij de belangrijkste ontwerpkeuzes vast
   welk antwoord of welke behoefte de keuze onderbouwt. Label voorstellen als zodanig.
5. **Bronnen en afhankelijkheden** — beschikbaar materiaal en gerapporteerde
   toegang op hoofdlijnen. Vermeld waar relevante documentatie te vinden is of
   wat nog moet worden opgezocht. Vermeld bij voorbeelden de aangewezen locatie
   en wat de agent mag bekijken (of dat toestemming nog ontbreekt). API's en
   lokale bestanden zijn mogelijke bronnen, geen verplichte planonderdelen.
   Neem technische details alleen over als ze al bekend zijn; schema's,
   endpoints en gegevensvelden zijn geen vereiste voor deze intake. Geen echte
   secrets of gevoelige voorbeelddata in het plan.
6. **Gegevensbescherming** — categorieën gevoelige data, opslag van brondata en
   resultaten, toegangsrechten, wat in Git/agentcontext mag, testdata, secrets,
   sandboxgrens, bewaartermijn en open maatregelen. Leg per relevant risico vast
   welke maatregel nodig is en wie een open beslissing afhandelt. Voeg het
   AGENTS.md-voorstel uit [data-access.md](data-access.md) toe: data-eigenaar,
   toestemming, leesrechten, lokale verwerking, toegestane output en deny-regels.
   Configuratievoorbeelden zijn voorstellen, geen reeds ingestelde beveiliging.
7. **Bestaande code** — wat mogelijk herbruikbaar is, locatie/verwijzing,
   beschikbaarheid, toestemming en benodigde beoordeling. Zonder
   bestaande code: vermeld dat versie 1 nieuw wordt gebouwd.
8. **Minimale eerste versie** — één complete route van invoer naar bruikbaar
   resultaat, met de reden om hiermee te beginnen. Benoem belangrijkste eisen,
   een controle van de bruikbaarheid en wat buiten scope valt. Formuleer redelijke
   acceptatiecontroles als voorstel als ze niet besproken zijn; maak daar geen
   aanvullend technisch interview van.
9. **Latere versies** — alleen relevante ideeën die bewust buiten versie 1 vallen.
10. **Repositoryvoorstel** — naam volgens `doelgroep-doel-specifiek`, concrete boomstructuur, functie van onderdelen,
    modules/dataflow waar zinvol, documentatie/overdraagbaarheid, Git-werkwijze,
    ignore-afspraken en eventuele CI/deployment. Markeer gebruikte standaardkeuzes.
    Neem `logs/` ook bij een eigen indeling expliciet in de boom op.
11. **Logging en beheer** — welke gebeurtenissen en fouten worden vastgelegd,
    het benodigde detailniveau, toegang, bewaartermijn/verwijdering of beheerder.
    Beschrijf de benodigde delen van `logs/runtime/`, `logs/test/` en
    `docs/handoffs/`, met een `logs/README.md` voor de afspraken. Ruwe logs
    blijven buiten Git; geen secrets, persoonsgegevens of volledige brondata.
    Onderscheid de wens van de cursist, voorgestelde defaults en open keuzes.
12. **Startvoorwaarden en uitvoering** — bekende randvoorwaarden en toegang,
    gerichte hulpvragen en voorgestelde stappen voor versie 1. Geen verplichte
    inventarisatie per tool, account of vaardigheid.
    Maak duidelijk dat nog geen technische controles of bouw zijn uitgevoerd.
13. **Aannames, open besluiten en eerste vervolgopdracht** — per open punt
    impact, benodigde actie, verantwoordelijke (of nog te bepalen) en wanneer het
    opgelost moet zijn. Geef een korte overdracht voor de latere bouwfase,
    begrensd tot versie 1 en haar acceptatiecriteria. Start deze opdracht niet.
    Neem een uitzoeklijst op met te lezen documentatie, eventuele online zoekacties,
    toegestane voorbeelden, te beoordelen legacycode en technische details die
    de agent later moet vaststellen. Bij onduidelijke toestemming of bescherming
    is gebruik van de betreffende bron geblokkeerd totdat dit is geregeld.

Noem een vereiste bevestigd als die uit antwoorden blijkt. Label een door de
agent voorgestelde keuze of standaard als zodanig. Presenteer onbesliste data-
of toegangsrisico's niet als opgelost. Een bruikbaar plan kan afhankelijkheden
hebben, maar benoemt expliciet wat eerst geregeld moet worden.

# Kunskapskontroll 4


## Deployment

https://ramverk-ks4.netlify.app/

## What

I kunskapskontroll 4, kommer ni att bygga ut den Webbshop ni byggde i kunskapskontroll 3.
Denna gången kommer ni att behöva integrera den mot en simplare backend för att hämta produkter och login.
Ni kommer även behöva motivera era val och strategier ni gjort genom en muntlig presentation och en demo-session.

Ni får även lov att börja om och bygga en ny webbshop om ni föredrar att göra det. 
Då vill jag att ni tar upp det och varför i er muntliga presentation.

## How

Här ska ni bygga ut er tidigare Webbshop med hjälp av tekniker vi har gått igenom hittills i kursen.
Ni kommer även behöva förbereda en kort presentation där ni beskriver och motiverar vilka verktyg, tredjeparts-bibliotek ni använt och andra teknikval ni har gjort.
Jag rekommenderar att ni skriver ner reflektioner, eventuella ändringar ni behövt göra och dokumenterar arbetets gång, det kan hjälpa er med presentationen.

Exempel på sidor ni behöver lägga till:
- Login / Register
- "Min profil"
- Admin-panel

Ni kommer behöva använda stores för att hantera den växande mängden data ni behöver hålla i ert state.
Valet av Store-bibliotek är valfritt, men jag rekommenderar antingen Recoil eller Redux Toolkit.  

Ni kommer även behöva välja ett (1) huvudsakligt sätt att skriva er CSS på och hålla er till det. (Sass, CSS Modules, CSS-in-JS, etc)
Skulle ni behöva av någon anledning blanda sätt att skriva er CSS, vill jag att ni redogör för varför ni behöver göra detta.
(I vissa fall krävs det att man gör det, exempelvis om man använder ett tredjeparts-bibliotek som kräver det)

Ni kommer få tillgång till en enklare Backend med dokumentation på de olika funktioner den tillhandahåller.
Den innehåller bland annat endpoints för att hämta, sortera produkter och kategorier. Även för att hantera carts, användare och en login-endpoint.
All information om hur detta API fungerar finner ni i dess dokumentation. (/docs)
Notera: Requests som lägger till, uppdaterar eller tar bort ex. en produkt eller användare kommer EJ att sparas eller uppdateras på backenden.
Den kommer svara med den uppdaterade informationen och ni behöver hantera ändringen av exempelvis en Användare lokalt i er applikation och dess store. 

Ni kommer inte längre få använda exempelvis en JSON-fil med produktinformationen, utan allt detta ska skötas med interaktioner mot lämplig backend-endpoint.

## Examination

Denna kunskapskontrollen kan du uppnå betygen Väl Godkänt, Godkänt eller Icke Godkänt.

För betyget Godkänt behöver följande krav uppfyllas:

- Det ska fortsatt finnas sidor för produkter, enskild produkt, cart som i K3.
- En användare ska kunna registrera sig, logga in och logga ut
- En inloggad användare ska kunna besöka en särskild sida där de kan se sin konto-information
- En admin ska kunna logga in
- En admin ska kunna besöka en särskild sida endast en inloggad admin kan besöka, med en lista på samtliga produkter och användare
- Applikationen ska använda all produktinformation från backenden
- Applikationen ska inte använda importerade lokala filer eller s.k. hårdkodade produktlistor.
- Applikationen ska använda stores för att hantera användar- och produkt-data från backenden
- Applikationen ska använda stores för att förse olika Sidor/Routes med användar- och produkt-data, inte props
- Applikationen ska använda ett (1) huvudsakligt sätt att styla applikationen och inte mixa olika sätt utan anledning
- Applikationen ska finnas deployad/publicerad på exempelvis Netlify eller Github Pages
- Genomförandet av en muntlig presentation och demo

För betyget Väl Godkänt behöver kraven för Godkänt uppfyllas, samt följande krav uppfyllas:

- En användare ska kunna filtrera produkterna i produktlistan per kategori
- En användare ska kunna uppdatera sin konto-information under ex. "min profil"
- En admin ska kunna uppdatera och ta bort en produkt i admin-panelen
- En admin ska kunna se en lista på carts i admin-panelen, som ska visa vems det är och produkterna i dessa
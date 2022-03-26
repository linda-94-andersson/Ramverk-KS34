# Kunskapskontroll 3


## Deployment

https://ramverk-ks3.netlify.app/

## How

Här ska ni bygga en Webbshop med hjälp av tekniker vi har gått igenom hittills i kursen, bland annat:
- Koncepten i React (Komponenter, state, props, mapp-struktur)
- Routing, förslagsvis med React Router
- Stores, förslagsvis med Recoil 
- Styling av applikationen på valfritt sätt (med ex. vanlig css, Sass, CSS-in-JS, Komponent-bibliotek) 

Där användaren ska kunna:
- Se en lista av produkter
- Kunna gå in på en specifik produkt
- Lägga till en produkt i varukorgen
- Se sina produkter i varukorgen och kunna ta bort produkter från varukorgen

Det är inget krav på följande i denna kunskapskontroll:
- Login med Autentisering
- Att hämta produkter från ett externt API
- Kunna "gå till betalning/checkout" med sin beställning

## Examination

Denna kunskapskontrollen kan du uppnå betygen Väl Godkänt, Godkänt eller Icke Godkänt.

För betyget Godkänt behöver följande krav uppfyllas:

1. Den ska innehålla minst tre (3) sidor/routes: 
  - En sida med en lista på produkter (ex. /products)
  - En sida med information om en enskild produkt (ex. /products/:id)
  - En sida där användaren kan se sin varukorg (ex. /cart)
2. Användaren ska kunna lägga till och ta bort produkter ur varukorgen
3. Applikationen ska använda Routing för att byta sida
4. Applikationen ska finnas deployad/publicerad på exempelvis Netlify eller Github Pages

För betyget Väl Godkänt behöver kraven för Godkänt uppfyllas, samt följande krav uppfyllas:

1. Spara innehållet i varukorgen även när man laddar om applikationen (ex. hålla varukorgen sparad/uppdaterad i localStorage)
2. Användaren ska kunna välja antal produkter att lägga till i varukorgen när de lägger till en produkt
3. Användaren ska kunna öka och minska antal av en produkt
4. Implementera applikationen responsivt, så layouten anpassas automatiskt efter enheten användaren använder.
(Jag kommer att testa mobil-versionen applikationen med förvalet iPhone XR i Chrome - 414x896px)
# TheGreenNook
Projekat DWS-The Green Nook


1. Kratki opis teme
   
The Green Nook je web aplikacija koja nudi prodaju prirodnih proizvoda kao što su melemi, sapuni eterična ulja, kreme i čajevi. Cilj projekta je napraviti modernu i funkcionalnu web stranicu koja korisnicima omogućava pregled proizvoda, prijavu i registraciju, kao i kontakt putem forme. Aplikacija koristi autentikaciju s dvije korisničke uloge: Admin i Guest, gdje Admin može dodavati proizvode, i pregledati poslane poruke putem kontakt forme, a Guest ima mogucnost pregleda proizvoda i pisanje poruke Adminima.

2. Tehnologije korištene u radu

Figma: Osnovni dizajn, dogovor oko palete boja, izgleda stranice, fontova

Frontend: React.js (biblioteka za izradu korisničkih sučelja) u koju je ukljuceno html, i Java Script

Stilizacija, boje, fontovi i opći izgled stranice: CSS 

Backend simulacija: json-server za mock API i spremanje podataka

Autentikacija: vlastita implementacija u React-u uz pohranu korisničkih podataka u json-server

Dodatno: Google Maps iframe za prikaz lokacije na kontakt stranici


3.Opis strukture projekta

/TheGreenNook
/public
  /slike                  //slike koristene za proizvode i neke pozadine
  
/src
  /assets
    /images               // slike koristene na pocetnoj stranici
    /styles               // stilovi za uredjivanje stranica
    -adminstr.cs
    -autentifikacija.css
    -colors.css
    -dodajproizvod.css
    -footer.css
    -header.css
    -kontakt.css
    -loginstil.css
    -onama.css
    -proizvodi.css
    -registracijastil.css
    -stilovi.css
    -welcome.css
    
    
  /components
    -LoginForma.js             // Funkcije za login 
    -RegisterForma.js          //Funkcije za registraciju
    -fotter.js                 //funkcionalnost footera
    -header.js                 //funkcionalnost headera
  /pages
    -LoginAutentifikacija.js      // Logika autentikacije i provjera uloga
    -ProizvodDetalji.js            //funkcije vezane za detalje proizvoda
    -Welcome.js                  //Stranica nakon prijave za odjavu i odlazak na dashboard(ako si Admin) ili pocetnu stranicu(ako si Guest)
    -dashboard.js                //adminska stranica sa privilegijama admina
    -dodajproizvod.js            //stranica za dodavnje ili uklanjanje proizvoda
    -kontakt.js                  //kontakt forma i google mape
    -onama.js                   //stranica za opis online prodavnice i nas kao osnivača
    -pocetna.js                 //pocetna stranica 
    -poruke.js                  //admin stranica sa prikazom poruka poslanih ih kontakt forme
    -proizvodi.js               //stranica svih proizvoda

-App.js                 // Glavna React komponenta s rutiranjem
-App.css              
-index.js               // Ulazna tačka aplikacije

-db.json                //json-server za mock API i spremanje podataka


4. Funkcionalnosti i opis dizajna

Početna stranica: pregledna landing stranica s proizvodima i menijem 
Navigacija: meni s linkovima na "O nama","Proizvodi", "Prijava", "Kontakt", i search bar, favoriti i korpa
Autentikacija: forme za registraciju i prijavu; korisnici imaju uloge Admin i Guest
Forme:Registracija, Prijava, Kontakt (s validacijom unosa)
Baza podataka: podaci se pohranjuju na lokalni mock server (json-server)
Google Maps: ugrađen na kontakt stranici kroz iframe za prikaz lokacije
Responsivan dizajn: aplikacija prilagođena različitim veličinama ekrana, uključujući mobilne uređaje

Paleta boja i fontovi
Glavne boje: #61884B(zelena, označava mir i prirodu) i #F3EDE0(bež, koristi se kao svijetlija nijansa za kontrast zelenoj)

Ostale boje:#F5F0E6,#fff,#abb599,3c763d,#353c2a,crimson,#ff0000,green,lightgray, lightgreen, lightpurple, grey, palegreen, limegreen.
Fontovi: Poppins, Lexend Mega, Sagoe UI, Playfair Display SC, Passions Conflict, Sacramento.


5.Uloge korisnika

Admin: može dodavati i brisati proizvode, kao i vidijeti poruke poslane iz kontakt forme
Guest: može gledati proizvode i koristiti kontakt formu
Oboje se mogu prijaviti, međutim za registracijunovog admina potrebno je odmah rucno ukucati admina u bazu, jer se prilikom registracije, to jest kreiranja novog profila ne moze dodati admin, nego samo gosti.

6.Upute za pokretanje projekta

Ukoliko nije instaliran treba se instalirati Node.js.Nakon toga u terminalu pokrenuti npm install.
Ukoliko se projekat otvara preko Webstorma prvo je potrebno podesiti localhost:3001, iz razloga što se stranica pokreće na localhost:3001, a baza se nalazi na localhost:3000. Nakon toga potrebno je u terminalu inicijalizirati json-server na sljedeći način:json-server --watch db.json --port 3000.


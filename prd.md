📘 PRD – Restoran Sedef
One Page Website | React (Vite) + Tailwind | Mobile First | SEO Fokus

1️⃣ OVERVIEW
Naziv projekta
Restoran Sedef – Restoran za parastose Orlovača
Tip sajta
One-page, scroll-based, mobilno optimizovan.
Primarni cilj
📞 Poziv telefonom (glavni CTA)


📧 Slanje email-a


📍 Pregled lokacije putem Google mape


Sekundarni cilj
Informisanje o menijima i cenama


Prikaz prostora (eksterijer + sala 80 mesta)


Isticanje prednosti lokacije (ulaz, parking, blizina groblja Orlovača)



2️⃣ CILJNA PUBLIKA
Porodice koje organizuju parastos


Ljudi koji dolaze na groblje Orlovača


Lokalni korisnici (Rakovica / Beograd)


80% mobilni korisnici



3️⃣ TEHNIČKA ARHITEKTURA
Frontend
React (Vite)


Tailwind CSS


Lazy Load za slike


WebP format


Bez React Router-a (jedna stranica, sekcije)



Performance Target
Lighthouse 90+


Load < 2s na 4G


Optimizovane slike


Minimalan JS bundle



4️⃣ STRUKTURA STRANICE (ONE PAGE)
1. HERO SEKCIJA
H1: Restoran za parastose Orlovača


Podnaslov: Dostojanstveno i organizovano mesto za parastose


CTA dugme: Pozovite za rezervaciju


Tamna elegantna pozadina (bez teške hero slike radi performansi)


Sticky Call Button (mobilni):
Donji desni ugao


tel: link


Aktivno samo na mobilnom



2. O NAMA
Sadržaj:
Primarna delatnost: parastosi


Otvoreno i kao restoran (kafa, piće)


Kapacitet: 80 mesta


Sopstvena kuhinja


Profesionalna organizacija



3. MENI SEKCIJA
Tri kartice:
Meni 1
Predjelo


Supa


Glavno jelo


Salata


Hleb


Piće


Kolač


Cena po osobi (placeholder)


Meni 2
Meni 3
Strukturisano radi SEO (ul/li struktura)

4. GALERIJA
Slika spolja


Slika sale (80 mesta)


4–6 optimizovanih fotografija


Lazy loading



5. LOKACIJA
Embed Google mapa
 Adresa:
 📍 Groblje Orlovača 28
Klik na mapu otvara Google Maps


Istaknuti:


Direktan ulaz


Parking


Blizina groblja



6. FAQ (SEO benefit)
Primer pitanja:
Koliki je kapacitet restorana?


Da li je potrebna rezervacija?


Koje je radno vreme?


Da li postoji parking?


Da li organizujete druge događaje?



7. KONTAKT
Telefon za rezervacije: 07–23h
 Radno vreme restorana: 07–20h
 Email (mailto link)
Bez kontakt forme.

8. FOOTER
Naziv: Restoran Sedef


Adresa


Telefon


Email


Radno vreme


Copyright


Link ka Google mapi



5️⃣ SEO STRATEGIJA
Primarni keyword:
restoran za parastose Orlovača


Sekundarni:
restoran za parastose Beograd


sala za parastos Rakovica


restoran kod groblja Orlovača


restoran za sahrane Beograd


Tehnički SEO:
Meta title optimizovan


Meta description


Open Graph


Schema.org LocalBusiness markup


Alt tagovi na slikama


H1 samo jedan


Strukturiran sadržaj



6️⃣ JSON MINI CMS STRUKTURA (public/content.json)
{
 "seo": {
   "title": "",
   "description": "",
   "ogImage": ""
 },
 "hero": {
   "title": "",
   "subtitle": "",
   "cta": ""
 },
 "about": {
   "title": "",
   "text": ""
 },
 "menus": [
   {
     "name": "Meni 1",
     "price": "",
     "items": []
   }
 ],
 "faq": [],
 "contact": {
   "phone": "",
   "email": "",
   "address": ""
 }
}
Sve izmene tekstova bez rebuild-a.

7️⃣ DIZAJN SISTEM
🎨 Boje (tačni HEX kodovi)
#0C1821


#223843


#505E65


#7D8486


#B6BAB9


#EEF0EB


Tamna varijanta dominantna.

🖋 Font sistem
Naslovi (H1, H2):
Playfair Display


Glavni tekst:
EB Garamond


Meni / Kontakt:
Lato



8️⃣ UX PRINCIPI
Mobile-first


Veliki tap target za poziv


Minimalno skrolovanje


Jasna hijerarhija


Smirene fade-in animacije


Bez agresivnih efekata



9️⃣ PERFORMANCE PLAN
WebP slike


Max 150kb po slici


Lazy load


Preload fontova


Minimal Tailwind build


Remove unused CSS



🔟 BEZBEDNOST & PRIVATNOST
SSL


Cookie notice (Google mapa zahteva)


Nema forme → nema skladištenja podataka


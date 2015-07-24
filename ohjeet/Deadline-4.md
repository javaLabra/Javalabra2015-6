# Deadline 4

### Ohjelma selkeästi edennyt

* Ohjelmoinnin tulee edetä jokaisella viikolla
* Jos et vielä ole aloittanut, on suositeltavaa aloittaa graafinen käyttöliittymä pian
  * Yksinkertaiseen käyttöliittymäänkin kuluu paljon aikaa

### Ohjelman tulee noudattaa Clean code -periaatteita
* Kiinnitä huomiota erityisesti pitkiin metodeihin

### JUnit-yksikkötestit
* Testejä kaikille uusille luokille ja metodeille
* Uusi pit-raportti vanhan tilalle.
* Ohjelmalogiikan testikattavuus hyvä (rivikattavuus yli >80%, mutanteista tapettu >50%)
  * Prosenttimäärät eivät ole absoluuttisia, tarkoitus on testata kaikki mikä tuntuu mielekkäältä hyvin.

### Aloita JavaDoc
* Tee jokaiselle luokalle luokan kuvaus
* Aloita kuvaamaan julkisia (public) metodeja
* Katso [ohjeet JavaDocin käyttöön](JavaDoc.md) tai http://en.wikipedia.org/wiki/Javadoc
* JavaDocia ei tarvitse kirjoittaa testeille tai get/set -metodeille, jotka eivät tee mitään ylimääräistä
* JavaDocista ei vielä tässä vaiheessa tarvitse luoda HTML-versiota

### Piirrä sekvenssikaavioita

* Muista: .png tai .jpg
* Luonnostele 2-3 tärkeintä sekvenssikaaviota käyttötapauksista
* Tärkeimmät käyttötapaukset löydät aihemäärittelystäsi
* Ota kuvataksesi riittävän pieniä käyttötapauksia
* Älä yritä samassa kaaviossa esittää liian montaa asiaa, esimerkiksi ehdollisuutta
* Epäonnistunut ja onnistunut kirjautuminen voisivat olla omat kaavionsa, tai yhden kaavion kaksi osaa
  * Sekvenssikaavio alkaa tunnusten syöttämisellä, kirjautuminen hylätään, virheilmoitus, tunnukset syötetään uudestaan, kirjautuminen onnistuu

### Muu dokumentointi
* Päivitä luokkakaavio ja aihemäärittely, jos tarpeen

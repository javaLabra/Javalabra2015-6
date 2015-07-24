# JavaDoc

Osa ohjelmiston dokumentointia on lähdekoodin *API-kuvaus*.  Javassa lähdekoodi dokumentoidaan käyttäen *JavaDoc*-työkalua.  Dokumentointi on kuin kommenttien kirjoittamista, mutta erityisillä avainsanoilla.  JavaDoc työkalu, jota voi käyttää suoraan NetBeanssin valikoista tekee kaikesta lähdekoodidokumentoinnista automaattisesti HTML-sivun.

Seuraava metodi on kommentoitu vapaamuotoisesti.  Kommentista käy ilmi mitä metodi tekee, mutta muotoiltua dokumentointisivua siitä ei saa tehtyä automaattisesti.
``` java
/* 
 * kertoo kuinka todennäköistä onnistuminen on käyttäjän syötteellä.
 * huom! käyttää yläluokan metodia ja palauttaa arvon vähennettynä kalibroinnilla
 */
public int onnistumistodennakoisyys(int syote) {
    int tn = super.laskeTn(syote) - this.kalibrointi;
    return tn;
}
```

JavaDoc-dokumentoinnilla sama kuvaus olisi seuraavaa:
``` java
/**
 * Metodi kertoo mikä on onnistumistodennäköisyys syöteluvulla
 * ottaen huomioon olion konstruktorissa asetetun kalibrointiarvon
 *
 * @param   syote   Käyttäjän antama syöte
 * 
 * @return todennäköisyys kalibroituna
 */
public int onnistumistodennakoisyys(int syote) {
    int tn = super.laskeTn(syote) - this.kalibrointi;
    return tn;
}
```

JavaDocin @param jne. avainsanoja ei onneksi tarvitse opetella ulkoa, koska NetBeans osaa täydentää myös JavaDoc-dokumentointia.  Private & package -näkyvyydellä olevat metodit eivät tule dokumentointiin.

Myös luokkia voi ja kannattaa dokumentoida. Se tapahtuu samalla tavoin kuin metodienkin dokumentointi.
``` java
/**
 * Luokka tarjoaa useita todennäköisyyslaskentaan tarvittavia metodeita
 */
public class Todennakoisyyslaskin {
    /* ... */
}
```

JavaDocista saa luotua HTML-version valitsemalla NetBeansissa *Run -> Generate JavaDoc*

Mikäli painike ei ole käytössä, voi saman hoitaa komentoriviltä menemällä projektin juureen ja komentamalla `javadoc -d target/javadoc -sourcepath src/main/java/projekti`. Muista korvata sourcepath polulla oman projektisi java-tiedostoihin! 

### Attribuuttien dokumentointi

Oliomuuttujille ei yleisesti ottaen tarvitse kirjoittaa JavaDoc-kommentteja, sillä ne ovat usein yksityisiä ja täten eivät kuulu luokan JavaDocilla kuvattavaan APIin. Jos sinulla on koodissasi julkisia (public) muuttujia, ne suositellaankin ensisijaisesti muutettavaksi yksityisiksi (private), jolloin JavaDoc-kommentteja voidaan kirjoittaa niiden setteri- ja getterimetodeille.

Jos sinulla kaikesta huolimatta on julkisia muuttujia, JavaDoc-syntaksin mukaan niiden dokumentointi tehdään kuten metodienkin: 
``` java
/**
 * Kalibrointiarvo todennäköisyyden laskemiseen
 */
public int kalibrointi = 20;
```
 
### Tarkempi dokumentointi

Laajennetaan vielä alussa esiteltyä esimerkkiä.  Metodille annetaan toinen parametri ja tämä dokumentoidaan omana @param-rivinä.  Lisäksi dokumentointiin lisätään "See Also" -kohta, jonka kautta HTML-dokumentissa liikkuminen laskukone-pakkauksen Laskenta-luokan laskeTn(int)-metodiin on helppoa.  Tämä ilmaistaan muodossa laskukone.Laskenta#laskeTn(int).  NetBeanssin control+space osaa täydentää projektin koodin mukaan tämän polun!
``` java
/**
 * Metodi kertoo mikä on onnistumistodennäköisyys syöteluvulla
 * ottaen huomioon olion konstruktorissa asetetun kalibrointiarvon
 *
 * @param   syote   Käyttäjän antama syöte
 * @param   kayttajanKorjaus    Käyttäjän antama korjausarvo
 * 
 * @see    laskukone.Laskenta#laskeTn(int)
 *
 * @return todennäköisyys kalibroituna
 */
public int onnistumistodennakoisyys(int syote, int kayttajanKorjaus) {
    int tn = super.laskeTn(syote) - this.kalibrointi - kayttajanKorjaus;
    return tn;
}
```

Lisää ohjeita löydät [JavaDocin Wikipedia-sivulta](http://en.wikipedia.org/wiki/Javadoc).

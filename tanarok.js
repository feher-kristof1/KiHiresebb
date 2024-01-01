let tanarok = ["Németh Ádám", "Jakabné Kiss Anikó Klára", "Ieneiné Németh Anita", "Balogh Anna", "Banáné Nagy Mónika", "Balogh Bence","Dr.Bókáné Váczi Ilona", "Bólya Gábor", "Burnóczkiné Kovács Erika", "Csajkás Rita", "Dr.Csóka Gézáné", "Fazakas Miklós", "Horváth Norbert", "Fortuna Edina", "Kató Jusztina Éva", "Káldyné Nagy Viktória", "Kollár Piroska", "Garami Éva Katalin", "Kottra Richárd", "Kovacsics Tamás", "Lipták Mária Ivett", "Módos Gábor Imre", "Leverton Nigel Bernard", "Nits László", "Némethné Tóth Fruzsina", "Őszéné Samu Bernadett Kornélia", "Bognár Pál", "Papp Laura", "Kisné Pattermann Beáta Edit", "Promüller Andrea", "Soós Gábor", "Strider Krisztián", "Striderné Boros Annamária", "Dr.Szarvas Péter Detréné", "Tolnai Zoltán", "Turbék Ádám", "Vincze Flórián"]
let talaltszamok2 = ["21 400 000", " 11 300", "7", "3 580 00", "722", "1 080 000", "541", "78 300", "129", " 2 640", "59 900", "273 000", "1 760 000", "692 000", "7 880", "146", "381 000", "146 000", "7 140 ", "42 400", "25 000", "218 000", "529 000", "52 300", "25 100 ", "772", "603 000", "2 030 000", "417", "10", "818 000","264 000", "7", "82", "498 000", "3 570", "368 000"]
let tanarkepek = ["tanarok/adam.jpd", "tanarok/anikó.jpg", "tanarok/anita.jpg", "tanarok/anna.jfif", "tanarok/banane.jfif", "tanarok/bence.jfif", "tanarok/bókáné.jfif", "tanarok/bolya.jfif", "tanarok/burnoczki.jfif", "tanarok/csajkás.jfif", "tanarok/csóka.jfif", "tanarok/fazakas.jfif", "tanarok/flash.jpg", "tanarok/fortuna.jfif", "tanarok/jusztina.jpg", "tanarok/káldyné.jpg", "tanarok/kollár.jpg", "tanarok/könytáros.jpg", "tanarok/kottra.jpg", "tanarok/kovacsics.jpg", "tanarok/liptak.jpg", "tanarok/modos.jpg", "tanarok/nigel.jpg", "tanarok/nits.jpg", "tanarok/ntf.jpg", "tanarok/osb.jpg", "tanarok/pal.jfif", "tanarok/papplaura.jpg", "tanarok/patterman.jpg", "tanarok/prumüller.jpg", "tanarok/soós.jpg", "tanarok/strider.jpg", "tanarok/striderné.jpg", "tanarok/szarvas.jfif", "tanarok/tolnai.jpg", "tanarok/turbék.jpg", "tanarok/vinzce.jpg"]
let random1 = 0;
let random2 = 0;
let kivTanar1 = 0;
let kivTanar2 = 0;
let tanarszam1 = 0;
let tanarszam2 = 0; 
let tanarpic = document.querySelector("#kep-bal")
let tanarkep1 = document.querySelector("#kep-jobb")
let tanarpont = 0;

console.log(jobbgomb);


function jatekKezdC(){
    let random1 = Math.floor(Math.random()*tanarok.length);
    let random2 = Math.floor(Math.random()*tanarok.length);

    if(random1!=random2){
        let kivTanar1 = tanarok[random1];
        let kivTanar2 = tanarok[random2];
        let tanarszam1 = talalatszamok[random1];
        let tanarszam2 = talalatszamok[random2]; 
        let kep = tanartanarkepek[random1];
        let kep1 = tanartanarkepek[random2];
        console.log("bal "+ tanarszam1);
        console.log("jobb "+ tanarszam2);

        tanarpic.src = kep;
        tanarkep1.alt = kivTanar1;

        tanarkep1.src = kep1;
        tanarkep1.alt = kivTanar2;

        document.querySelector("#balgomb").innerHTML=kivTanar1;
        document.querySelector("#jobbgomb").innerHTML=kivTanar2;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#next").style.display="block";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        tanarpic.style.display="flex";
        tanarkep1.style.display="flex";
        document.querySelector(".kepek").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        csikb.style.display="none"
        csikj.style.display="none"

        CsikAllit(tanarszam1,tanarszam2);
        korok++;
        if(korok>11){ 
            korok=1;
            jatekVege()
        }
    }
    else random2 = Math.floor(Math.random()*tanarok.length);
}

function JatekC(){
    let random1 = Math.floor(Math.random()*tanarok.length);
    let random2 = Math.floor(Math.random()*tanarok.length);

    if(random1!=random2){
        let kivTanar1 = tanarok[random1];
        let kivTanar2 = tanarok[random2];
        let tanarszam1 = talalatszamok[random1];
        let tanarszam2 = talalatszamok[random2]; 
        let kep = tanartanarkepek[random1];
        let kep1 = tanartanarkepek[random2];
    
        tanarpic.src = kep;
        tanarpic.alt = kivTanar1;
    
        tanarkep1.src = kep1;
        tanarkep1.alt = kivTanar2;
        document.querySelector("#balgomb").innerHTML=kivTanar1;
        document.querySelector("#jobbgomb").innerHTML=kivTanar2;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#next").style.display="block";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        tanarpic.style.display="flex";
        tanarkep1.style.display="flex";
        document.querySelector(".tanartanarkepek").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        csikb.style.display="none"
        csikj.style.display="none"

        CsikAllit(tanarszam1,tanarszam2);
        korok++;
        if(korok>11){ 
            korok=1;
            jatekVege()
        }
        if (parseInt(tanarszam1.replace(/\s/g, '')) > parseInt(tanarszam2.replace(/\s/g, ''))) {
            tanarpont++;
            document.querySelector("#eredmenyszoveg").innerHTML = "Helyes válasz! Pontszám: " + tanarpont;
        } else {
            tanarpont--;
            document.querySelector("#eredmenyszoveg").innerHTML = "Helytelen válasz! Pontszám: " + tanarpont;
        }
    }
    else random2 = Math.floor(Math.random()*tanarok.length);
}

function CsikAllit(szam1,szam2){;
        document.querySelector("#emberszamb").innerHTML="&#8592;"+ szam1;
        document.querySelector("#emberszamj").innerHTML=szam2+"&#8594;";
        document.querySelector("#eredmenyszoveg").innerHTML="";
    console.log(1)
}

function animaciok(){
    csikb.style.animationName= "csik";
    csikb.style.animationDuration="4s";
    csikb.style.display="block"
    csikj.style.animationName= "csik";
    csikj.style.animationDuration="4s";
    csikj.style.display="block"
    kovkorGomb.style.animationName= "gombok";
    kovkorGomb.style.animationDuration="3s";
    kovkorGomb.style.display="block";
    console.log(3);
}

function ujrakezd(){
    document.querySelector(".kezdokepernyo").style.display="block";
    document.querySelector("#eredmenyszoveg").innerHTML="";
    document.querySelector(".jatekter").style.display="none";
    document.querySelector("#next").style.display="none";
    document.querySelector(".tanartanarkepek").style.display="none";
    document.querySelector("#cedulak").style.display="none";
    document.querySelector("#jatek-vege").style.display="none";
    korok=1;
    tanarpont=0;
}

function jatekVege(){
    document.querySelector("#jatek-vege").style.display="block"
    document.querySelector("#eredmenyszoveg").innerHTML="";
    document.querySelector(".jatekter").style.display="none";
    document.querySelector("#next").style.display="none";
    document.querySelector(".tanartanarkepek").style.display="none";
    document.querySelector("#cedulak").style.display="none";
}

function megtekinttanarpont() {
    alert("A jelenlegi pontszámod: " + tanarpont);
}

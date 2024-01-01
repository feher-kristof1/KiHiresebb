let emberek = ["Németh Ádám", "Jakabné Kiss Anikó Klára", "Ieneiné Németh Anita", "Balogh Anna", "Banáné Nagy Mónika", "Balogh Bence","Dr.Bókáné Váczi Ilona", "Bólya Gábor", "Burnóczkiné Kovács Erika", "Csajkás Rita", "Dr.Csóka Gézáné", "Fazakas Miklós", "Horváth Norbert", "Fortuna Edina", "Kató Jusztina Éva", "Káldyné Nagy Viktória", "Kollár Piroska", "Garami Éva Katalin", "Kottra Richárd", "Kovacsics Tamás", "Lipták Mária Ivett", "Módos Gábor Imre", "Leverton Nigel Bernard", "Nits László", "Némethné Tóth Fruzsina", "Őszéné Samu Bernadett Kornélia", "Bognár Pál", "Papp Laura", "Kisné Pattermann Beáta Edit", "Promüller Andrea", "Soós Gábor", "Strider Krisztián", "Striderné Boros Annamária", "Dr.Szarvas Péter Detréné", "Tolnai Zoltán", "Turbék Ádám", "Vincze Flórián"]
let talaltszamok = ["21 400 000", " 11 300", "7", "3 580 00", "722", "1 080 000", "541", "78 300", "129", " 2 640", "59 900", "273 000", "1 760 000", "692 000", "7 880", "146", "381 000", "146 000", "7 140 ", "42 400", "25 000", "218 000", "529 000", "52 300", "25 100 ", "772", "603 000", "2 030 000", "417", "10", "818 000","264 000", "7", "82", "498 000", "3 570", "368 000"]
let kepek = ["tanarok/adam.jpd", "tanarok/anikó.jpg", "tanarok/anita.jpg", "tanarok/anna.jfif", "tanarok/banane.jfif", "tanarok/bence.jfif", "tanarok/bókáné.jfif", "tanarok/bolya.jfif", "tanarok/burnoczki.jfif", "tanarok/csajkás.jfif", "tanarok/csóka.jfif", "tanarok/fazakas.jfif", "tanarok/flash.jpg", "tanarok/fortuna.jfif", "tanarok/jusztina.jpg", "tanarok/káldyné.jpg", "tanarok/kollár.jpg", "tanarok/könytáros.jpg", "tanarok/kottra.jpg", "tanarok/kovacsics.jpg", "tanarok/liptak.jpg", "tanarok/modos.jpg", "tanarok/nigel.jpg", "tanarok/nits.jpg", "tanarok/ntf.jpg", "tanarok/osb.jpg", "tanarok/pal.jfif", "tanarok/papplaura.jpg", "tanarok/patterman.jpg", "tanarok/prumüller.jpg", "tanarok/soós.jpg", "tanarok/strider.jpg", "tanarok/striderné.jpg", "tanarok/szarvas.jfif", "tanarok/tolnai.jpg", "tanarok/turbék.jpg", "tanarok/vinzce.jpg"]
let randomszam1 = 0;
let randomszam2 = 0;
let kivEmber1 = 0;
let kivEmber2 = 0;
let emberszam1 = 0;
let emberszam2 = 0; 
let pik = document.querySelector("#kep-bal");
let pik1 = document.querySelector("#kep-jobb");
let pontszam = 0;

function jatekKezdC(){
    randomszam1 = Math.floor(Math.random()*emberek.length);
    randomszam2 = Math.floor(Math.random()*emberek.length);
    
    if(randomszam1!=randomszam2){   
    kivEmber1 = tanarok[randomszam1];
    kivEmber2 = tanarok[randomszam2];
    emberszam1 = talaltszamok[randomszam1];
    emberszam2 = talaltszamok[randomszam2]; 
    kep = kepeik[randomszam1];
    kep1 = kepeik[randomszam2];

    pic.src = kep;
    pic.alt = kivEmber1

    pic1.src = kep1;
    pic1.alt = kivEmber2;

    document.querySelector("#balgomb").innerHTML=kivEmber1;
    document.querySelector("#jobbgomb").innerHTML=kivEmber2;
    document.querySelector(".kezdokepernyo").style.display="none";
    document.querySelector("#next").style.display="block";
    document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
    document.querySelector(".jatekter").style.display="block";
    document.querySelector("#cedulak").style.display="block";
    pic.style.display="flex";
    pic1.style.display="flex";
    document.querySelector(".kepek").style.display="block";
    document.querySelector("#cedulak").style.display="block";
    csikb.style.display="none"
    csikj.style.display="none"

    CsikAllit(emberszam1,emberszam2);
    korok++;
    if(korok>11){ 
        korok=1;
        jatekVege()
    }
}
else randomszam2 = Math.floor(Math.random()*emberek.length);
}

function CsikAllit(szam1,szam2){;
    document.querySelector("#emberszamb").innerHTML="&#8592;"+ szam1;
    document.querySelector("#emberszamj").innerHTML=szam2+"&#8594;";
    document.querySelector("#eredmenyszoveg").innerHTML="";
console.log(1)
}

function csikanimacio(){
csikb.style.animationName= "csik";
csikb.style.animationDuration="4s";
csikb.style.display="block"
csikj.style.animationName= "csik";
csikj.style.animationDuration="4s";
csikj.style.display="block"

console.log(3);
}

function ujrakezd(){
document.querySelector(".kezdokepernyo").style.display="block";
document.querySelector("#eredmenyszoveg").innerHTML="";
document.querySelector(".jatekter").style.display="none";
document.querySelector("#next").style.display="none";
document.querySelector(".kepek").style.display="none";
document.querySelector("#cedulak").style.display="none";
document.querySelector("#jatek-vege").style.display="none";
korok=1;
}

function jatekVege(){
document.querySelector("#jatek-vege").style.display="block"
document.querySelector("#eredmenyszoveg").innerHTML="";
document.querySelector(".jatekter").style.display="none";
document.querySelector("#next").style.display="none";
document.querySelector(".kepek").style.display="none";
document.querySelector("#cedulak").style.display="none";
}

function JatekC() {
    if (parseInt(emberszam1.replace(/\s/g, '')) > parseInt(emberszam2.replace(/\s/g, ''))) {
        pontszam2++;
        document.querySelector("#eredmenyszoveg").innerHTML = "Helyes válasz! Pontszám: " + pontszam2;
    } else {
        pontszam2--;
        document.querySelector("#eredmenyszoveg").innerHTML = "Helytelen válasz! Pontszám: " + pontszam2;
    }



    jatekKezdC();
}

function megtekintPontszam() {
    alert("A jelenlegi pontszámod: " + pontszam2);
}
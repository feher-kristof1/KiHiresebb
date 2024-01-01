let tanarok = ["Németh Ádám", "Jakabné Kiss Anikó Klára", "Ieneiné Németh Anita", "Balogh Anna", "Banáné Nagy Mónika", "Balogh Bence","Dr.Bókáné Váczi Ilona", "Bólya Gábor", "Burnóczkiné Kovács Erika", "Csajkás Rita", "Dr.Csóka Gézáné", "Fazakas Miklós", "Horváth Norbert", "Fortuna Edina", "Kató Jusztina Éva", "Káldyné Nagy Viktória", "Kollár Piroska", "Garami Éva Katalin", "Kottra Richárd", "Kovacsics Tamás", "Lipták Mária Ivett", "Módos Gábor Imre", "Leverton Nigel Bernard", "Nits László", "Némethné Tóth Fruzsina", "Őszéné Samu Bernadett Kornélia", "Bognár Pál", "Papp Laura", "Kisné Pattermann Beáta Edit", "Promüller Andrea", "Soós Gábor", "Strider Krisztián", "Striderné Boros Annamária", "Dr.Szarvas Péter Detréné", "Tolnai Zoltán", "Turbék Ádám", "Vincze Flórián"]
let talaltszamok = ["21 400 000", " 11 300", "7", "3 580 00", "722", "1 080 000", "541", "78 300", "129", " 2 640", "59 900", "273 000", "1 760 000", "692 000", "7 880", "146", "381 000", "146 000", "7 140 ", "42 400", "25 000", "218 000", "529 000", "52 300", "25 100 ", "772", "603 000", "2 030 000", "417", "10", "818 000","264 000", "7", "82", "498 000", "3 570", "368 000"]
let kepeik = ["tanarok/adam.jpd", "tanarok/anikó.jpg", "tanarok/anita.jpg", "tanarok/anna.jfif", "tanarok/banane.jfif", "tanarok/bence.jfif", "tanarok/bókáné.jfif", "tanarok/bolya.jfif", "tanarok/burnoczki.jfif", "tanarok/csajkás.jfif", "tanarok/csóka.jfif", "tanarok/fazakas.jfif", "tanarok/flash.jpg", "tanarok/fortuna.jfif", "tanarok/jusztina.jpg", "tanarok/káldyné.jpg", "tanarok/kollár.jpg", "tanarok/könytáros.jpg", "tanarok/kottra.jpg", "tanarok/kovacsics.jpg", "tanarok/liptak.jpg", "tanarok/modos.jpg", "tanarok/nigel.jpg", "tanarok/nits.jpg", "tanarok/ntf.jpg", "tanarok/osb.jpg", "tanarok/pal.jfif", "tanarok/papplaura.jpg", "tanarok/patterman.jpg", "tanarok/prumüller.jpg", "tanarok/soós.jpg", "tanarok/strider.jpg", "tanarok/striderné.jpg", "tanarok/szarvas.jfif", "tanarok/tolnai.jpg", "tanarok/turbék.jpg", "tanarok/vinzce.jpg"]
let pic = document.querySelector("#kep-bal");
let pic1 = document.querySelector("#kep-jobb");
let balgomb = document.querySelector("#balgomb");
let csikb = document.querySelector("#balkep");
let csikj = document.querySelector("#jobbkep");
let kovkorGomb = document.querySelector("#next");
let titkoskocka = document.querySelector("#masikMod");
let keretb=document.querySelector("#keretbal");
let keretj=document.querySelector("#keretjobb");
let keretalso=document.querySelector("#keretalso");
let korok = 1;

console.log(balgomb);

function Jatekj(){
    let randomszam1 = Math.floor(Math.random()*emberek.length);
    let randomszam2 = Math.floor(Math.random()*emberek.length);

    if(randomszam1!=randomszam2){
        let kivEmber1 = emberek[randomszam1];
        let kivEmber2 = emberek[randomszam2];
        let emberszam1 = talalatszamok[randomszam1];
        let emberszam2 = talalatszamok[randomszam2]; 
        let kep = kepek[randomszam1];
        let kep1 = kepek[randomszam2];
    
        pic.src = kep;
        pic.alt = kivEmber1;
    
        pic1.src = kep1;
        pic1.alt = kivEmber2;
        document.querySelector("#balgomb").innerHTML=kivEmber1;
        document.querySelector("#jobbgomb").innerHTML=kivEmber2;
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#next").style.display="none";
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#korszamlalo").style.display="block";
        document.querySelector(".kepek").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        
        csikb.style.display="none";
        csikj.style.display="none";
        pic.style.display="flex";
        pic1.style.display="flex";

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

function kockamaszkal(){
    titkoskocka.style.animationName="kockamaszkal";
    titkoskocka.style.animationDuration="2s";
    titkoskocka.style.animationIterationCount="infinite";
    titkoskocka.style.animationTimingFunction= "linear";
    keretb.style.animationName="kockamaszkal";
    keretb.style.animationDuration="2s";
    keretb.style.animationIterationCount="infinite";
    keretb.style.animationTimingFunction= "linear";
    keretj.style.animationName="kockamaszkal";
    keretj.style.animationDuration="2s";
    keretj.style.animationIterationCount="infinite";
    keretj.style.animationTimingFunction= "linear";
    keretalso.style.animationName="kockamaszkal";
    keretalso.style.animationDuration="2s";
    keretalso.style.animationIterationCount="infinite";
    keretalso.style.animationTimingFunction= "linear";
}
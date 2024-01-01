let tanarok = ["Németh Ádám", "Jakabné Kiss Anikó Klára", "Ieneiné Németh Anita", "Balogh Anna", "Banáné Nagy Mónika", "Balogh Bence","Dr.Bókáné Váczi Ilona", "Bólya Gábor", "Burnóczkiné Kovács Erika", "Csajkás Rita", "Dr.Csóka Gézáné", "Fazakas Miklós", "Horváth Norbert", "Fortuna Edina", "Kató Jusztina Éva", "Káldyné Nagy Viktória", "Kollár Piroska", "Garami Éva Katalin", "Kottra Richárd", "Kovacsics Tamás", "Lipták Mária Ivett", "Módos Gábor Imre", "Leverton Nigel Bernard", "Nits László", "Némethné Tóth Fruzsina", "Őszéné Samu Bernadett Kornélia", "Bognár Pál", "Papp Laura", "Kisné Pattermann Beáta Edit", "Promüller Andrea", "Soós Gábor", "Strider Krisztián", "Striderné Boros Annamária", "Dr.Szarvas Péter Detréné", "Tolnai Zoltán", "Turbék Ádám", "Vincze Flórián"]
let talaltszamok = ["21 400 000", " 11 300", "7", "3 580 00", "722", "1 080 000", "541", "78 300", "129", " 2 640", "59 900", "273 000", "1 760 000", "692 000", "7 880", "146", "381 000", "146 000", "7 140 ", "42 400", "25 000", "218 000", "529 000", "52 300", "25 100 ", "772", "603 000", "2 030 000", "417", "10", "818 000","264 000", "7", "82", "498 000", "3 570", "368 000"]
let kepeik = ["tanarok/adam.jpd", "tanarok/anikó.jpg", "tanarok/anita.jpg", "tanarok/anna.jfif", "tanarok/banane.jfif", "tanarok/bence.jfif", "tanarok/bókáné.jfif", "tanarok/bolya.jfif", "tanarok/burnoczki.jfif", "tanarok/csajkás.jfif", "tanarok/csóka.jfif", "tanarok/fazakas.jfif", "tanarok/flash.jpg", "tanarok/fortuna.jfif", "tanarok/jusztina.jpg", "tanarok/káldyné.jpg", "tanarok/kollár.jpg", "tanarok/könytáros.jpg", "tanarok/kottra.jpg", "tanarok/kovacsics.jpg", "tanarok/liptak.jpg", "tanarok/modos.jpg", "tanarok/nigel.jpg", "tanarok/nits.jpg", "tanarok/ntf.jpg", "tanarok/osb.jpg", "tanarok/pal.jfif", "tanarok/papplaura.jpg", "tanarok/patterman.jpg", "tanarok/prumüller.jpg", "tanarok/soós.jpg", "tanarok/strider.jpg", "tanarok/striderné.jpg", "tanarok/szarvas.jfif", "tanarok/tolnai.jpg", "tanarok/turbék.jpg", "tanarok/vinzce.jpg"]
let randomszam1 = 0;
let randomszam2 = 0;
let kivEmber1 = 0;
let kivEmber2 = 0;
let emberszam1 = 0;
let emberszam2 = 0; 
let pik = document.querySelector("#kep-bal");
let pik1 = document.querySelector("#kep-jobb");

function JatekJ(){
    randomszam1 = Math.floor(Math.random()*tanarok.length);
    randomszam2 = Math.floor(Math.random()*tanarok.length);
    kivEmber1 = tanarok[randomszam1];
    kivEmber2 = tanarok[randomszam2];
    emberszam1 = talaltszamok[randomszam1];
    emberszam2 = talaltszamok[randomszam2]; 
    kep = kepeik[randomszam1];
    kep1 = kepeik[randomszam2];

    pik.src = kep;
    pik.alt = kivEmber1

    pik1.src = kep1;
    pik1.alt = kivEmber2;

    if(kinekNagyobb(emberszam1,emberszam2)==1){
        document.querySelector("#szamcsikb").style.height="400px";
        document.querySelector("#szamcsikj").style.height="300px";
        document.querySelector("#szamcsikj").style.backgroundColor="red";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
    }
    else if(kinekNagyobb(emberszam1,emberszam2)==2) document.querySelector("#eredmenyszoveg").innerHTML="A két személy megegyezik.";
    else{
        document.querySelector("#szamcsikb").style.height="300px";
        document.querySelector("#szamcsikj").style.height="400px";
        document.querySelector("#szamcsikb").style.backgroundColor="red";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
    }

    document.querySelector("#balgomb").value=kivEmber1;
    document.querySelector("#jobbgomb").value=kivEmber2;
    document.querySelector(".kezdokepernyo").style.display="none";
    document.querySelector(".gombok").style.display="block";
}

function jatekKezdJ(){
    randomszam1 = Math.floor(Math.random()*emberek.length);
    randomszam2 = Math.floor(Math.random()*emberek.length);
    kivEmber1 = emberek[randomszam1];
    kivEmber2 = emberek[randomszam2];
    emberszam1 = talalatszamok[randomszam1];    
    emberszam2 = talalatszamok[randomszam2];


    document.querySelector("#balgomb").value=kivEmber1;
    document.querySelector("#jobbgomb").value=kivEmber2;
    document.querySelector(".kezdokepernyo").style.display="none";
    document.querySelector(".gombok").style.display="block";
}

function kinekNagyobb(szam1,szam2){
    if(szam1>szam2) return 1;
    else if(szam1==szam2) return 2;
    else return 0;
}

function ujrakezd(){
    document.querySelector(".kezdokepernyo").style.display="block";
    document.querySelector(".gombok").style.display="none";
}
let emberek = ["Nits László","Taylor Swift","Dwayne 'The Rock' Johnson","Bruce Willis","Chuck Norris","Antonio Banderas", "Lionel Messi", "Cristano Ronaldo", "Chris Evans","Brad Pitt","Jennifer Lopez","Puskás Ferenc","Charles Leclerc","Elon Musk","Kevin Hart","Módos Gábor","George Lucas","Chris Hemsworth","Tom Hiddleston","Katy Perry","Evan McGregor","Rosa Parks","Martin Luther King","John Fitzgerald Kennedy","Osama Bin Laden","Caius Iulius Caesar","Petőfi Sándor","I. Szent István"];
let talalatszamok = ["14 440 000","908 000 000","27 500 000","79 900 000","33 400 000","47 200 000","110 000 000","142 000 000","162 000 000","76 000 000","200 000 000","2 360 000","40 900 000","28 000 000","72 800 000","158 800","168 000 000","30 600 000","87 600 000","119 000 000","14 900 000","64 700 000","211 000 000","127 000 000","39 400 000","45 400 000","5 900 000","12 300 000"];
let kepek = ["kepek/Nits.jfif","kepek/Swift.jfif","kepek/Rock.jfif","kepek/Willis.jfif","kepek/Chuck.jfif","kepek/Banderas.jfif","kepek/Messi.jfif","kepek/Ronaldo.jfif","kepek/Evans.jfif","kepek/Pitt.jfif","kepek/Lopez.jfif","kepek/Puskás.jfif","kepek/Leclerc.jfif","kepek/Musk.jfif","kepek/Hart.jfif","kepek/Módos.jfif","kepek/Lucas.jfif","kepek/Hemsworth.jfif","kepek/Hiddleston.jfif","kepek/Perry.jfif","kepek/McGregor.jfif","kepek/Parks.jfif","kepek/Luther.jfif","kepek/Kennedy.jfif","kepek/BinLaden.jfif","kepek/Caesar.jfif","kepek/Petőfi.jfif","kepek/IstvánKirály.jfif"];
let tanarok = ["Németh Ádám", "Jakabné Kiss Anikó Klára", "Ieneiné Németh Anita", "Balogh Anna", "Banáné Nagy Mónika", "Balogh Bence","Dr.Bókáné Váczi Ilona", "Bólya Gábor", "Burnóczkiné Kovács Erika", "Csajkás Rita", "Dr.Csóka Gézáné", "Fazakas Miklós", "Horváth Norbert", "Fortuna Edina", "Kató Jusztina Éva", "Káldyné Nagy Viktória", "Kollár Piroska", "Garami Éva Katalin", "Kottra Richárd", "Kovacsics Tamás", "Lipták Mária Ivett", "Módos Gábor Imre", "Leverton Nigel Bernard", "Nits László", "Némethné Tóth Fruzsina", "Őszéné Samu Bernadett Kornélia", "Bognár Pál", "Papp Laura", "Kisné Pattermann Beáta Edit", "Promüller Andrea", "Soós Gábor", "Strider Krisztián", "Striderné Boros Annamária", "Dr.Szarvas Péter Detréné", "Tolnai Zoltán", "Turbék Ádám", "Vincze Flórián"]
let talaltszamok = ["21 400 000", " 11 300", "7", "3 580 00", "722", "1 080 000", "541", "78 300", "129", " 2 640", "59 900", "273 000", "1 760 000", "692 000", "7 880", "146", "381 000", "146 000", "7 140 ", "42 400", "25 000", "218 000", "529 000", "52 300", "25 100 ", "772", "603 000", "2 030 000", "417", "10", "818 000","264 000", "7", "82", "498 000", "3 570", "368 000"]
let kepeik = ["tanarok/adam.jpd", "tanarok/anikó.jpg", "tanarok/anita.jpg", "tanarok/anna.jfif", "tanarok/banane.jfif", "tanarok/bence.jfif", "tanarok/bókáné.jfif", "tanarok/bolya.jfif", "tanarok/burnoczki.jfif", "tanarok/csajkás.jfif", "tanarok/csóka.jfif", "tanarok/fazakas.jfif", "tanarok/flash.jpg", "tanarok/fortuna.jfif", "tanarok/jusztina.jpg", "tanarok/káldyné.jpg", "tanarok/kollár.jpg", "tanarok/könytáros.jpg", "tanarok/kottra.jpg", "tanarok/kovacsics.jpg", "tanarok/liptak.jpg", "tanarok/modos.jpg", "tanarok/nigel.jpg", "tanarok/nits.jpg", "tanarok/ntf.jpg", "tanarok/osb.jpg", "tanarok/pal.jfif", "tanarok/papplaura.jpg", "tanarok/patterman.jpg", "tanarok/prumüller.jpg", "tanarok/soós.jpg", "tanarok/strider.jpg", "tanarok/striderné.jpg", "tanarok/szarvas.jfif", "tanarok/tolnai.jpg", "tanarok/turbék.jpg", "tanarok/vinzce.jpg"]
let pic = document.querySelector("#kep-bal");
let pic1 = document.querySelector("#kep-jobb");
let jedlikpic = document.querySelector("#jedlikkep-bal");
let jedlikpic1 = document.querySelector("#jedlikkep-jobb");
let balgomb = document.querySelector("#balgomb");
let csikb = document.querySelector("#balkep");
let csikj = document.querySelector("#jobbkep");
let kovkorGomb = document.querySelector("#next");
let kovkorGombj = document.querySelector("#jedliknext");
let titkoskocka = document.querySelector("#masikMod");
let keretb=document.querySelector("#keretbal");
let keretj=document.querySelector("#keretjobb");
let keretalso=document.querySelector("#keretalso");
let korok = 1;
let pontszam =0;

console.log(balgomb);

function jatekKezdC(){
    let randomszam1 = Math.floor(Math.random()*emberek.length);
    let randomszam2 = Math.floor(Math.random()*emberek.length);

    if(randomszam1!=randomszam2){
        let kivEmber1 = emberek[randomszam1];
        let kivEmber2 = emberek[randomszam2];
        let emberszam1 = talalatszamok[randomszam1];
        let emberszam2 = talalatszamok[randomszam2]; 
        let kep = kepek[randomszam1];
        let kep1 = kepek[randomszam2];
        console.log("bal "+ emberszam1);
        console.log("jobb "+ emberszam2);

        pic.src = kep;
        pic.alt = kivEmber1;

        pic1.src = kep1;
        pic1.alt = kivEmber2;

        document.querySelector("#balgomb").innerHTML=kivEmber1;
        document.querySelector("#jobbgomb").innerHTML=kivEmber2;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#next").style.display="block";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        document.querySelector("#next").style.display="none";
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

function JatekC(){
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
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#next").style.display="block";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        document.querySelector("#next").style.display="none";
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
        if (parseInt(emberszam1.replace(/\s/g, '')) > parseInt(emberszam2.replace(/\s/g, ''))) {
            pontszam++;
            document.querySelector("#eredmenyszoveg").innerHTML = "Végső pontszámod: " + pontszam;
        } else {
            pontszam--;
            document.querySelector("#eredmenyszoveg").innerHTML = "Végső pontszámod: " + pontszam;
        }
    }
    else randomszam2 = Math.floor(Math.random()*emberek.length);
}

function jatekKezdJ(){
    let randomszam1 = Math.floor(Math.random()*emberek.length);
    let randomszam2 = Math.floor(Math.random()*emberek.length);

    if(randomszam1!=randomszam2){
        let kivEmber1 = tanarok[randomszam1];
        let kivEmber2 = tanarok[randomszam2];
        let emberszam1 = talaltszamok[randomszam1];
        let emberszam2 = talaltszamok[randomszam2]; 
        let kep = kepeik[randomszam1];
        let kep1 = kepeik[randomszam2];

        jedlikpic.src = kep;
        jedlikpic.alt = kivEmber1;
    
        jedlikpic1.src = kep1;
        jedlikpic1.alt = kivEmber2;

        document.querySelector("#balgomb").innerHTML=kivEmber1;
        document.querySelector("#jobbgomb").innerHTML=kivEmber2;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        document.querySelector("#next").style.display="none";
        document.querySelector("#jedliknext").style.display="none";
        pic.style.display="none";
        pic1.style.display="none";
        jedlikpic.style.display="flex";
        jedlikpic1.style.display="flex";
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

function JatekJ(){
    let randomszam1 = Math.floor(Math.random()*emberek.length);
    let randomszam2 = Math.floor(Math.random()*emberek.length);

    if(randomszam1!=randomszam2){
        let kivEmber1 = tanarok[randomszam1];
        let kivEmber2 = tanarok[randomszam2];
        let emberszam1 = talaltszamok[randomszam1];
        let emberszam2 = talaltszamok[randomszam2]; 
        let kep = kepeik[randomszam1];
        let kep1 = kepeik[randomszam2];
    
        jedlikpic.src = kep;
        jedlikpic.alt = kivEmber1;
    
        jedlikpic1.src = kep1;
        jedlikpic1.alt = kivEmber2;
        document.querySelector("#balgomb").innerHTML=kivEmber1;
        document.querySelector("#jobbgomb").innerHTML=kivEmber2;
        document.querySelector(".kezdokepernyo").style.display="none";
        document.querySelector("#korszamlalo").innerHTML="Jelenlegi kör: "+korok;
        document.querySelector(".jatekter").style.display="block";
        document.querySelector("#cedulak").style.display="block";
        document.querySelector("#next").style.display="none";
        document.querySelector("#jedliknext").style.display="none";
        pic.style.display="none";
        pic1.style.display="none";
        jedlikpic.style.display="flex";
        jedlikpic1.style.display="flex";
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
        if (parseInt(emberszam1.replace(/\s/g, '')) > parseInt(emberszam2.replace(/\s/g, ''))) {
            pontszam++;
            document.querySelector("#eredmenyszoveg").innerHTML = "Végső pontszámod: " + pontszam;
        } else {
            pontszam--;
            document.querySelector("#eredmenyszoveg").innerHTML = "Végső pontszámod: " + pontszam;
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

function animaciokj(){
    csikb.style.animationName= "csik";
    csikb.style.animationDuration="4s";
    csikb.style.display="block"
    csikj.style.animationName= "csik";
    csikj.style.animationDuration="4s";
    csikj.style.display="block"
    kovkorGombj.style.animationName= "gombok";
    kovkorGombj.style.animationDuration="3s";
    kovkorGombj.style.display="block";
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
    titkoskocka.style.animationDuration="2500ms";
    titkoskocka.style.animationIterationCount="infinite";
    titkoskocka.style.animationTimingFunction= "linear";
    keretb.style.animationName="kockamaszkal";
    keretb.style.animationDuration="2500ms";
    keretb.style.animationIterationCount="infinite";
    keretb.style.animationTimingFunction= "linear";
    keretj.style.animationName="kockamaszkal";
    keretj.style.animationDuration="2500ms";
    keretj.style.animationIterationCount="infinite";
    keretj.style.animationTimingFunction= "linear";
    keretalso.style.animationName="kockamaszkal";
    keretalso.style.animationDuration="2500ms";
    keretalso.style.animationIterationCount="infinite";
    keretalso.style.animationTimingFunction= "linear";
}


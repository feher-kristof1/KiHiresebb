let emberek = ["Nits László","Taylor Swift","Dwayne 'The Rock' Johnson","Bruce Willis","Chuck Norris","Antonio Banderas", "Lionel Messi", "Cristano Ronaldo", "Chris Evans","Brad Pitt","Jennifer Lopez","Puskás Ferenc","Charles Leclerc","Elon Musk","Kevin Hart","Módos Gábor","George Lucas","Chris Hemsworth","Tom Hiddleston","Katy Perry","Evan McGregor","Rosa Parks","Martin Luther King","John Fitzgerald Kennedy","Osama Bin Laden","Caius Iulius Caesar","Petőfi Sándor","I. Szent István"];
let talalatszamok = ["14 440 000","908 000 000","27 500 000","79 900 000","33 400 000","47 200 000","110 000 000","142 000 000","162 000 000","76 000 000","200 000 000","2 360 000","40 900 000","28 000 000","72 800 000","158 800","168 000 000","30 600 000","87 600 000","119 000 000","14 900 000","64 700 000","211 000 000","127 000 000","39 400 000","45 400 000","5 900 000","12 300 000"];
let kepek = ["kepek/Nits.jfif","kepek/Swift.jfif","kepek/Rock.jfif","kepek/Willis.jfif","kepek/Chuck.jfif","kepek/Banderas.jfif","kepek/Messi.jfif","kepek/Ronaldo.jfif","kepek/Evans.jfif","kepek/Pitt.jfif","kepek/Lopez.jfif","kepek/Puskás.jfif","kepek/Leclerc.jfif","kepek/Musk.jfif","kepek/Hart.jfif","kepek/Módos.jfif","kepek/Lucas.jfif","kepek/Hemsworth.jfif","kepek/Hiddleston.jfif","kepek/Perry.jfif","kepek/McGregor.jfif","kepek/Parks.jfif","kepek/Luther.jfif","kepek/Kennedy.jfif","kepek/BinLaden.jfif","kepek/Caesar.jfif","kepek/Petőfi.jfif","kepek/IstvánKirály.jfif"];
let pic = document.querySelector("#kep-bal");
let pic1 = document.querySelector("#kep-jobb");
let balgomb = document.querySelector("#balgomb");
let csikb = document.querySelector("#balkep");
let csikj = document.querySelector("#jobbkep");
let korok = 1;
let pontszam = 0;

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
            document.querySelector("#eredmenyszoveg").innerHTML = "Helyes válasz! Pontszám: " + pontszam;
        } else {
            pontszam--;
            document.querySelector("#eredmenyszoveg").innerHTML = "Helytelen válasz! Pontszám: " + pontszam;
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
    pontszam=0;
}

function jatekVege(){
    document.querySelector("#jatek-vege").style.display="block"
    document.querySelector("#eredmenyszoveg").innerHTML="";
    document.querySelector(".jatekter").style.display="none";
    document.querySelector("#next").style.display="none";
    document.querySelector(".kepek").style.display="none";
    document.querySelector("#cedulak").style.display="none";
}

function megtekintPontszam() {
    alert("A jelenlegi pontszámod: " + pontszam);
}

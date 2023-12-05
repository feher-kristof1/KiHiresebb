let emberek = ["Nits László","Taylor Swift","Dwayne 'The Rock' Johnson","Bruce Willis","Chuck Norris","Antonio Banderas", "Lionel Messi", "Cristano Ronaldo", "Chris Evans","Brad Pitt","Jennifer Lopez","Puskás Ferenc","Charles Leclerc","Elon Musk","Kevin Hart","Módos Gábor","George Lucas","Chris Hemsworth","Tom Hiddleston","Katy Perry","Evan McGregor","Rosa Parks","Martin Luther King","John Fitzgerald Kennedy","Osama Bin Laden","Caius Iulius Caesar","Petőfi Sándor","I. Szent István"];
let talalatszamok = ["14 440 000","908 000 000","27 500 000","79 900 000","33 400 000","47 200 000","110 000 000","142 000 000","162 000 000","76 000 000","200 000 000","2 360 000","40 900 000","28 000 000","72 800 000","158 800","168 000 000","30 600 000","87 600 000","119 000 000","14 900 000","64 700 000","211 000 000","127 000 000","39 400 000","45 400 000","5 900 000","12 300 000"];
let kepek = ["kepek/Nits.jfif","kepek/Swift.jfif","kepek/Rock.jfif","kepek/Willis.jfif","kepek/Chuck.jfif","kepek/Banderas.jfif","kepek/Messi.jfif","kepek/Ronaldo.jfif","kepek/Evans.jfif","kepek/Pitt.jfif","kepek/Lopez.jfif","kepek/Puskás.jfif","kepek/Leclerc.jfif","kepek/Musk.jfif","kepek/Hart.jfif","kepek/Módos.jfif","kepek/Lucas.jfif","kepek/Hemsworth.jfif","kepek/Hiddleston.jfif","kepek/Perry.jfif","kepek/McGregor.jfif","kepek/Parks.jfif","kepek/Luther.jfif","kepek/Kennedy.jfif","kepek/BinLaden.jfif","kepek/Caesar.jfif","kepek/Petőfi.jfif","kepek/IstvánKirály.jfif"];
let randomszam1 = 0;
let randomszam2 = 0;
let kivEmber1 = 0;
let kivEmber2 = 0;
let emberszam1 = 0;
let emberszam2 = 0; 
let pic = document.querySelector("#kep-bal");
let pic1 = document.querySelector("#kep-jobb");

function jatekKezdC(){
    randomszam1 = Math.floor(Math.random()*emberek.length);
    randomszam2 = Math.floor(Math.random()*emberek.length);
    kivEmber1 = emberek[randomszam1];
    kivEmber2 = emberek[randomszam2];
    emberszam1 = talalatszamok[randomszam1];
    emberszam2 = talalatszamok[randomszam2]; 
    kep = kepek[randomszam1];
    kep1 = kepek[randomszam2];

    pic.src = kep;
    pic.alt = kivEmber1;

    pic1.src = kep1;
    pic1.alt = kivEmber2;

    if(kinekNagyobb(emberszam1,emberszam2)==1){
        document.querySelector("#szamcsikb").style.height="400px";
        document.querySelector("#szamcsikj").style.height="300px";
        document.querySelector("#szamcsikj").style.backgroundColor="red";
        document.querySelector("#szamcsikb").style.backgroundColor="green";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
        document.querySelector("#eredmenyszoveg").innerHTML="";
    }
    else if(kinekNagyobb(emberszam1,emberszam2)==2) document.querySelector("#eredmenyszoveg").innerHTML="A két személy megegyezik.";
    else{
        document.querySelector("#szamcsikb").style.height="300px";
        document.querySelector("#szamcsikj").style.height="400px";
        document.querySelector("#szamcsikb").style.backgroundColor="red";
        document.querySelector("#szamcsikj").style.backgroundColor="green";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
        document.querySelector("#eredmenyszoveg").innerHTML="";
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
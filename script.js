let emberek = ["Nits László","Taylor Swift","Dwayne 'The Rock' Johnson","Bruce Willis","Chuck Norris","Antonio Banderas", "Lionel Messi", "Cristano Ronaldo", "Chris Evans","Brad Pitt","Jennifer Lopez","Puskás Ferenc","Charles Leclerc","Elon Musk","Kevin Hart","Módos Gábor","George Lucas","Chris Hemsworth","Tom Hiddleston","Katy Perry","Evan McGregor","Rosa Parks","Martin Luther King","John Fitzgerald Kennedy","Osama Bin Laden","Caius Iulius Caesar","Petőfi Sándor","I. Szent István"];
let talalatszamok = ["14 440 000","908 000 000","27 500 000","79 900 000","33 400 000","47 200 000","110 000 000","142 000 000","162 000 000","76 000 000","200 000 000","2 360 000","40 900 000","28 000 000","72 800 000","158 800","168 000 000","30 600 000","87 600 000","119 000 000","14 900 000","64 700 000","211 000 000","127 000 000","39 400 000","45 400 000","5 900 000","12 300 000"];
let jobbgomb = document.querySelector("#jobbgomb");
let balgomb = document.querySelector("#balgomb");
let szoveg = document.querySelector("#eredmenyszoveg");

function jatekKezdC(){
    let randomszam1 = Math.floor(Math.random()*emberek.length);
    let randomszam2 = Math.floor(Math.random()*emberek.length);
    let kivEmber1 = emberek[randomszam1];
    let kivEmber2 = emberek[randomszam2];
    let emberszam1 = talalatszamok[randomszam1];
    let emberszam2 = talalatszamok[randomszam2];

    if(emberszam1>emberszam2){
        document.querySelector("#szamcsikb").style.height="400px";
        document.querySelector("#szamcsikj").style.height="300px";
        document.querySelector("#szamcsikj").style.backgroundColor="red";
        document.querySelector("#szamcsikb").style.backgroundColor="green";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
        szoveg.innerHTML="";
    }
    else if(emberszam1==emberszam2) szoveg.innerHTML="A két személy megegyezik.";
    else{
        document.querySelector("#szamcsikb").style.height="300px";
        document.querySelector("#szamcsikj").style.height="400px";
        document.querySelector("#szamcsikb").style.backgroundColor="red";
        document.querySelector("#szamcsikj").style.backgroundColor="green";
        document.querySelector("#csikszamb").innerHTML=emberszam1;
        document.querySelector("#csikszamj").innerHTML=emberszam2;
        szoveg.innerHTML="";
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

function ujrakezd(){
    document.querySelector(".kezdokepernyo").style.display="block";
    document.querySelector(".gombok").style.display="none";
}
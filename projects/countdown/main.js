let objectiu = new Date("10/26/2026"); //data objeciu en format MM/DD/YYYY
let msObjectiu = objectiu.getTime();


let dies = document.getElementById("dies");
let hores = document.getElementById("hores");
let minuts = document.getElementById("minuts");
let segons = document.getElementById("segons");
let objectiuText = document.getElementById("objectiu");
let temporitzador = document.getElementById("temporitzer");
let audioFile = document.getElementById("audioFile");

let selectedAudio = null;


objectiuText.innerText = objectiu.toLocaleDateString();

let interval = setInterval(() => {
    let ara = new Date().getTime();
    let distance = msObjectiu - ara;

    let msPerDia = 1000 * 60 * 60 * 24;
    let msPerHora = 1000 * 60 * 60;
    let msPerMinut = 1000 * 60;
    let msPerSegon = 1000;

    let dDies = Math.floor(distance / msPerDia);
    let dHores = Math.floor((distance % msPerDia) / msPerHora);
    let dMinuts = Math.floor((distance % msPerHora) / msPerMinut);
    let dSegons = Math.floor((distance % msPerMinut) / msPerSegon);

    console.log(dDies, dHores, dMinuts, dSegons)
    dies.innerText = dDies
    hores.innerText = dHores < 10 ? "0" + dHores : dHores
    minuts.innerText = dMinuts < 10 ? "0" + dMinuts : dMinuts
    segons.innerText = dSegons < 10 ? "0" + dSegons : dSegons


    if (distance < 0) {
        clearInterval(interval);
        temporizer.innerHTML = "<p class='num final-message'>Ja hi sóm!</p>";
        
        }
    }
, 1000)
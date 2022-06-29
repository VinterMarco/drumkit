let clap = document.getElementById('clap');
let closedHiHat = document.getElementById('closedHiHat');
let crash = document.getElementById('crash');
let kick = document.getElementById('kick');
let openedHiHat = document.getElementById('openHiHat');
let snare = document.getElementById('snare');


// kick

kick.addEventListener('click', function () {
    var kickSound = new Audio('drums/kicks/Selmer_Kick_03.wav');
    kickSound.play();
})

//snare

snare.addEventListener('click', function (){
    var snareSound = new Audio('drums/snare/BRA_Snare.wav');
    snareSound.play();

})

//closed Hi Hat

closedHiHat.addEventListener('click', function (){
    var closedHiHatSound = new Audio('drums/closedHiHats/Selmer_Hat_01.wav');
    closedHiHatSound.play();
})

// opended Hi Hat

openedHiHat.addEventListener('click', function (){
    var openedHiHatSound = new Audio('drums/openedHiHats/Selmer_Hat_02.wav');
    openedHiHatSound.play();
})

// crash

crash.addEventListener('click', function (){
    var crashSound = new Audio('drums/crash/Tecbug_Crushed_Verb_01.wav');
    crashSound.play();
})



// clap

clap.addEventListener('click', function (){
    var clapSound = new Audio('drums/clap/Vermona_Clap_05.wav');
    clapSound.play();
})


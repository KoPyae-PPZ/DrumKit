let numberOfDrums = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener("click", function() { // Unlike regular functions, arrow functions do not have their own this.

        let buttonInnerHTNL = this.innerHTML;
        playSounds(buttonInnerHTNL);
        buttonAnimation(buttonInnerHTNL);
    })
};

document.addEventListener('keydown', function(event) {
    let drumKey = event.key;
    playSounds(drumKey);
    buttonAnimation(drumKey);
});

function playSounds(drumKey) {
    switch(drumKey) {
        case "w" : let tom1 = new Audio("./sounds/tom-1.mp3"); tom1.play(); break;
        case "a" : let tom2 = new Audio("./sounds/tom-2.mp3"); tom2.play(); break;
        case "s" : let tom3 = new Audio("./sounds/tom-3.mp3"); tom3.play(); break;
        case "d" : let tom4 = new Audio("./sounds/tom-4.mp3"); tom4.play(); break;
        case "j" : let snare = new Audio("./sounds/snare.mp3"); snare.play(); break;
        case "k" : let crash = new Audio("./sounds/crash.mp3"); crash.play(); break;
        case "l" : let bass = new Audio("./sounds/kick-bass.mp3"); bass.play(); break;
    }
};

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () { activeButton.classList.remove("pressed"); }, 100);
};




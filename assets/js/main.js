"use strict";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const wordArray = [
    "nostromo",
    "ripley",
    "lambert",
    "mother",
    "transmission",
    "facehugger",
    "quarantine",
    "android",
    "jones",
    "bishop",
    "narcissus",
    "chestburster",
    "scott"
];

let wins = 0;
let remainingGuesses = 15;

let soFar = [];

let userGuess = null;

let answer = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(`The computer has chosen ${answer}`);

document.onkeypress = function(kp) {

    let answerArray = answer.split('');
    let userGuess = String.fromCharCode(kp.keyCode).toLowerCase();
    console.log(`the user has pressed the ${userGuess} key`);
    console.log(`the computer's choice, split into an array, is ${answerArray}`);

    if (soFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        // if the character pressed passes the above test, add it to the end of the soFar array
        soFar[soFar.length]=userGuess;
        // remove one remaining guess
        remainingGuesses--
    }
    // this will handle invalid key presses and alert the user
    else{
        alert("Invalid guess: please choose a letter of the alphabet that you haven't already guessed this round");
    }


}


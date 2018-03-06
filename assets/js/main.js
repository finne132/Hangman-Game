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
    "scott",
    "alien"
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

    // This checks two conditions:
    // 1. is the key pressed a letter of the alphabet
    // 2. has this letter of the alphabet already been pressed this round
    if (soFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        soFar[soFar.length]=userGuess;
        remainingGuesses--
    }
    // this will handle invalid key presses/alert the user
    else{
        alert("Please choose a letter of the alphabet that you haven't already guessed this round");
    }


}


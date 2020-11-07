"use strict";

// *******************
// Project 3: Pig Game
// *******************

// Selecting elements
const diceElement = document.querySelector(".dice");
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.querySelector("#score--1");
const currentElement0 = document.querySelector("#current--0");
const currentElement1 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Setting starting coditions
diceElement.classList.add("hidden");
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

let diceValue = 0;
let currentScore = 0;

btnRoll.addEventListener("click", function () {
  // 1. Generation random dice roll
  diceValue = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice roll
  diceElement.classList.remove("hidden");
  diceElement.src = `imgs/dice-${diceValue}.png`;

  // 3. Check if rolled 1
  if (diceValue !== 1) {
    // Add dice roll to player score
    currentScore += diceValue;
    currentElement0.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});

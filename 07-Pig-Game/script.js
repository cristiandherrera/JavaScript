"use strict";

// *******************
// Project 3: Pig Game
// *******************

// SELCTING ELEMENTS
// Dice
const diceElement = document.querySelector(".dice");
// Scores
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.querySelector("#score--1");
const currentScoreElement0 = document.querySelector("#current--0");
const currentScoreElement1 = document.querySelector("#current--1");
// Players
const playerElement0 = document.querySelector(".player--0");
const playerElement1 = document.querySelector(".player--1");
// Buttons
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// STARTING CONDITIONS
diceElement.classList.add("hidden");
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
// Player and score starting values
let currentScore = 0;
let activePlayer = 0;

// BUTTON ROLL LOGIC
btnRoll.addEventListener("click", function () {
  // 1. Generation random dice roll
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice roll
  diceElement.classList.remove("hidden");
  diceElement.src = `imgs/dice-${diceValue}.png`;
  // 3. Check for rolled 1
  if (diceValue !== 1) {
    // Add dice roll to player score
    currentScore += diceValue;
    // displaying current score depending on current player
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // setting current score back to 0 when rolling 1
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // reset score
    currentScore = 0;
    // toggle .player--active styles
    playerElement0.classList.toggle("player--active");
    playerElement1.classList.toggle("player--active");
  }
});

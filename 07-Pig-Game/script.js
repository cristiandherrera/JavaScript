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
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// Delcaring variables in global scope
let totalScore, currentScore, activePlayer, playing;

// INITIALIZING VALUES AND DISPLAYS
const init = function () {
  // Values
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // Displays
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  currentScoreElement0.textContent = 0;
  currentScoreElement1.textContent = 0;
  diceElement.classList.add("hidden");
  // Classes
  playerElement0.classList.add("player--active");
  playerElement1.classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
};
init();

// SWITCHES PLAYERS
const switchPlayers = function () {
  // Setting current score back to 0 when rolling 1
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Reset current score value
  currentScore = 0;
  // Turn on/off '.player--active' styles
  playerElement0.classList.toggle("player--active");
  playerElement1.classList.toggle("player--active");
};

// BUTTON ROLL LOGIC
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generation random dice roll
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    // Display dice roll
    diceElement.classList.remove("hidden");
    diceElement.src = `imgs/dice-${diceValue}.png`;
    // Check if rolled 1
    if (diceValue !== 1) {
      // Add dice roll to player score
      currentScore += diceValue;
      // Displaying current score depending on current player
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayers();
    }
  }
});

// BUTTON HOLD LOGIC
btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to acitve players total score
    totalScore[activePlayer] += currentScore;
    // Display current active player's current score
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
    // Display current active player's total
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    // Is score >= 100?
    if (totalScore[activePlayer] >= 20) {
      // CURRENT PLAYER WINS
      playing = false;
      // Adds 'player--winner' styles
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // Removes 'player--active' styles
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      // Hide dice png!
      diceElement.classList.add("hidden");
    } else {
      // Switch player
      switchPlayers();
    }
  }
});

// BUTTON NEW GAME LOGIC
btnNew.addEventListener("click", init);

"use strict";

// *******************
// Project 3: Pig Game
// *******************

// Selecting elements
const diceElement = document.querySelector(".dice");
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.querySelector("#score--1");

// Setting starting coditions
diceElement.classList.add("hidden");
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

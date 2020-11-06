"use strict";

// // **********************************
// // Whats the DOM and DOM Manipulation
// // **********************************

// // The DOM(Document Object Model) is an object oriented, structured, represention of html documents.

// // It is NOT part of javascript; but can access html elements and styles and manipulate them with javascript.

// // The modern DOM is built using multiple APIs that work together.

// // ***********************************
// // Selecting and Manipulating Elements
// // ***********************************

// // One way to select and access an element with the DOM is with document.querySelector("element").

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = "8";
// document.querySelector(".score").textContent = "24";

// console.log(document.querySelector(".guess").type);
// document.querySelector(".guess").type = "text";
// document.querySelector(".guess").value = "RIP";
// console.log(document.querySelector(".guess").type);

// // *********************
// // Handling Click Events
// // *********************

// // The first two arguments of 'addEventListener(type, listener)' is the type of event you want and what you want to happen when said event is triggered.

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector(".message").textContent = "No number!";
//   }
// });

// ***********************
// Implementing Game Logic
// ***********************

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
// let score = 20;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector(".message").textContent = "No number!";
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "Correct Number!";
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       score = 0;
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       score = 0;
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

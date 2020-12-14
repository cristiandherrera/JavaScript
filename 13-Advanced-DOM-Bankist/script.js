"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// =================================================================================================== //

// ************************
// How the DOM Really Works
// ************************

/*
 REVIEW: What is the DOM?

   Allows us to make JavaScript interact with the browser.

   We can write JavaScript to create, modify and delete HTML elements; set styles, classes, and attributes; and listen and respond to events.

   DOM tree is generated from an HTML document, which we can then interact with.

   DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.
   Ex. .querySelctor() / .addEventListener() / .createElement() / .innerHTML / .textContent / etc...
*/

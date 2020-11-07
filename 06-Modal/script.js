"use strict";

// ***********************
// PROJECT 2: Modal Window
// ***********************

// Selecting elements multiple times?? just save them into a variable!! DRYCODE RULESS!

// Removing and adding classes is one of the main ways manipulate styles on websites!! < IMPORANT!!

// If using the mulitple of the same functions is event listeners; create one function and pass it in! KEEP CODE DRY!!

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// When an 'addEventListener' is triggered it creates an object; we can access the object for information on its key value pairs!! Example below: 'event.key'

// Use the method 'contains' to check if element has a specific class.

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

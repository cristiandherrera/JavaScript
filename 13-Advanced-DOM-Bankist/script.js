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

// ******************************************
// Selecting, Creating, and Deleting Elements
// ******************************************

/*
 HTMLCollection: interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properites for selecting from the list.

 Nodes: The locations where the elements are placed in the DOM!

 NodeList vs. HTMLCollection: main difference between an HTMLCollection and a NodeList is that one is live and one is static. NodeLists CAN be live but are generally static.

    Live vs. Static NodeLists
      When NodeList is live, it means that changes in the DOM automatically update the collection. Ex. 'Node.childNodes' is live

      When NodeList is static, any changes in the DOM does not affect the content of the collection. Ex. 'document.querySelectorAll()'

 Selecting Elements: 
   querySelectorAll() returns a static NodeList representing a list of the document's elements
   
 Creating and Inserting Elements: 
   The insertAdjacentHTML() of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
   
   ParentNode.append() inserts a set of Node objects or DOMString objects AFTER the last child of the ParentNode.

   ChildNode.before() inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just BEFORE this ChildNode.

   Node.cloneNode() returns a duplicate of the node on which this method was called.
  
 Deleting Elements: 
   ChildNode.remove() removes the object from the tree it belongs to.

*/

// SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); // returns a nodelist

document.getElementById("secion--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // returns an HTML collection

console.log(document.getElementsByClassName("btn")); // returns an HTML collection

// CREATING AND INSERTING ELEMENTS

// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// DELETE ELEMENTS
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // message.parentElement.removeChild(message) // OLD WAY - DOM TRAVERSING;
  });

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

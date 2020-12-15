"use strict";

///////////////////////////////////////
// Modal window

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  section1.scrollIntoView({ behavior: "smooth" });
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
});

// =================================================================================================== //

// *****************************
// Event Propagation in Practice
// *****************************

/*
 The Event.target: property of the Event interface is a refererence to the object onto which the event was dispatched.

 The Event.currentTarget: read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM.

   target vs. currentTarget: 
   The currentTarget always refers to the element to which the event handler has been attached. Opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.
 
 The stopPropagation(): method of the Event interface PREVENTS further propagation of the current event in the capturing and bubbling phases. It DOES NOT, however, prevent any default behaviors from occurring.
 BAD PRACTICE: stopPropagation() is not reccomended for use often.

 NOTE: The 'this' keyword, when used in an evet listener is the SAME as the 'Event.target'
*/

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.target === this); // true

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LIST", e.target, e.currentTarget);
});

document.querySelector("nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// *****************************************
// Event Propagation: Bubbling and Capturing
// *****************************************

/*
 Event propagation: is a way to describe the “stack” of events that are fired in a web browser. 

   Event Capturing: is the first phase that occurs when the event moves all the way down the elements from the top (window) to the event target.(never really used in practice anymore)

   Target Phase:  the second 'target' phase that occurs when the event.target element is reached, is not handled separately like the others.

   Event Bubbling: is the last phase that involves running the target element’s handlers, and then “bubbling” upwards to the next parent element’s handlers, then the grandparent element above that, and so on.

 NOTE: When bubbling, if a parent element of the event.target has the SAME event listener, when the event.target is fired, when bubbling up the parente elements event listener will ALSO fire! 
*/

// **********************************
// Types of Events and Event Handlers
// **********************************

/*
 REMEMBER: The Event interface represents an event which takes place in the DOM.

 The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
 
 SYNTAX: target.addEventListener(type, listener [, options]);
         target.addEventListener(type, listener [, useCapture]);

 The EventTarget.removeEventListener() method removes from the EventTarget an event listener previously registered with EventTarget.addEventListener().

 SYNTAX: target.removeEventListener(type, listener[, options]);
         target.removeEventListener(type, listener[, useCapture]);
*/

// const h1 = document.querySelector("h1");

// // old-school
// h1.onmouseenter = function (e) {
//   alert("onmouseenver: Great! You are reading the heading :D");
// };

// // exporting function to remove event listener
// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");

//   // h1.removeEventListener("mouseenter");
// };

// h1.addEventListener("mouseenter", alertH1);

// // another way of removing event listener
// setTimeout(() => {
//   h1.removeEventListener("mouseenter");
// }, 3000);

// *****************************
// Implementing Smooth Scrolling
// *****************************

/*
 The Element.getBoundingClientRect(): returns a DOMRect (describes the size and position of a rectangle.) object providing information about the size of an element and its of an element and its position relative to the viewport.
   SYNTAX: domRect = element.getBoundingClientRect()
 
 Window.pageXOffset(scrollX): property of the Window interface returns the number of pixels the document is currently SCROLLED HORIZONTALLY. 

 Window.pageYOffset(scrollY): property of the Window interface returns the number of pixels the document is currently SCROLLED VERTCALLY. 

 Element.clientHeight: the inner HEIGHT of an ELEMENT in pixels. It includes padding but excludes borders, margins, and HORIZONTAL scrollbars. The viewport's height is returned when used on the root element

 Element.clientWidth: the inner WIDTH of an ELEMENT in pixels. It includes padding but excludes borders, margins, and VERTICAL scrollbars. The VIEWPORTS WIDTH is returned when used on the root element

 The Element.scrollIntoView(): method scrolls the element's parent container such that the element on which scrollIntoView() is called is visible to the user.
   SYNTAX: element.scrollIntoView(alignToTop); // Boolean parameter
           element.scrollIntoView(scrollIntoViewOptions); // Object parameter
*/

// *******************************
// Styles, Attributes, and Classes
// *******************************

/*
 The .style property: is used to get ONLY the INLINE style of an element.

 The Window.getComputedStyle(): returns an object containing the values of all CSS properties of an element, AFTER applying active stylesheets and resolving any basic computation those values may contain.
   SYNTAX: const style = window.getComputedStyle(element [, pseudoElt]);

 The CSSStyleDeclaration: interface represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties. 

   Methods: 

     The setProperty(): method interface sets a new value for a property on a CSS style delcaration object.
       SYNTAX: tyle.setProperty(propertyName, value, priority);

   Can be exposed by three different APIs...
    
     HTMLElement.style: which deals with the inline styles of a single element

     CSSStyleSheet: returns a CSSStyleDeclaration object on the first CSS rule in the document's first stylesheet.

     Window.getComputedStyle(): which exposes the CSSStyleDeclaration object as a READ-ONLY interface.

 Attributes: 

   The setAttribute(): methodnsets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
     SYNTAX: Element.setAttribute(name, value);

   The getAttribute(): method of the Element interface returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or "".
     SYNTAX: let attribute = element.getAttribute(attributeName);

 Classes: 
  
   The DOMTokenList interface: represents a set of space-separated tokens... 
   Such a set is returned by Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList, HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor.
  
     The add(): method of the DOMTokenList interface ADDS the given token to the list.
   
     The remove(): method of the DOMTokenList interface REMOVES the specified tokens from the list.

     The toggle(): method of the DOMTokenList interface removes a given token from the list and RETURNS FALSE. If token doesn't exist it's added and the function RETURNS TRUE.

     The contains(): method of the DOMTokenList interface returns a Boolean — true if the underlying list contains the given token, otherwise false.

 REMEMBER: Number.parseFloat() method parses an argument and returns a floating point number. SYNTAX: 'Number.parseFloat(string)'

 CSS: Property names that are prefixed with --, like --example-name, represent custom properties that contain a value that can be used in other declarations using the var() function.
*/

// // FROM PREVIOUS LECTURE
// const header = document.querySelector(".header");
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);

// // STYLES
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.backgroundColor);
// console.log(message.style.color); // logs nothing because no inline style exists

// // console.log(getComputedStyle(message)); // logs entire CSSStyleDeclaration object
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty("--color-primary", "orangered");

// // ATTRIBUTES
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";
// console.log(logo.alt);

// // non-standard atr
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute("designer"));

// logo.setAttribute("company", "Bankist");
// console.log(logo.company);

// console.log(logo.src); // returns absolute value
// console.log(logo.getAttribute("src")); // returns as written in html

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href); // returns absolute value
// console.log(link.getAttribute("href")); // returns as written in html

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");

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

 Document.documentElement: returns the Element that is the root element of the document./

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

// // SELECTING ELEMENTS

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections); // returns a nodelist

// document.getElementById("secion--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons); // returns an HTML collection

// console.log(document.getElementsByClassName("btn")); // returns an HTML collection

// // CREATING AND INSERTING ELEMENTS

// // .insertAdjacentHTML
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // DELETE ELEMENTS
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//     // message.parentElement.removeChild(message) // OLD WAY - DOM TRAVERSING;
//   });

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

// **************************
// PROJECT: "Bankist" Website
// **************************

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map, mapEvent;

/* Grabbing location */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      /* Initializing the map and assigning it to 'map' */
      map = L.map("map").setView(coords, 13);

      /* Picking and linking map style */
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /* Displaying form on event click */
      map.on("click", function (mapE) {
        mapEvent = mapE; //=> 'click' value saved to global variable
        form.classList.remove("hidden");
        inputDistance.focus();
      });
    },
    function (error) {
      console.log(error);
    }
  );
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      "";

    // Display marker
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  });
}

/* Toggling display between workout types */
inputType.addEventListener("change", function () {
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});

// ****************************
// Rendering Workout Input Form
// ****************************

/*

 In this lecture we ... 

   - Displayed the workout form on the event click and saved the 'click' location value to global variable.
   - Changed the marker to display when the new form is submitted with the event 'submit'
   - Added a 'change' event listener to react to update form workout 'type' input field
   
 REMEMBER THE DOM:

   The 'change' event listener is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user.

   The closest() method: traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string.

   The Element.classList: is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

   The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
*/

// ***********************
// Displaying a Map Marker
// ***********************

/*
 This lecture we ...
  
   - Set up a Leaflet event handler (using '.on()') to update the marker location on click.
   - Altered the map marker popup for our workout description using the Leaflet method 'popup()'

 NOTE: In the documentation is that all these methods always returned 'this'. So basically the current object which then makes all of these methods chainable. Just like we did in previous section.

*/

// ***********************************
// Display a Map Using Leaflet Library
// ***********************************

/*

 This lecture we ...

   - Linked the CDN files for the 3rd party library Leaflet.
   - got current location coordinates
   - Displayed the map 

 What does Leaflet do?

   "Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need." 

 The 'map()' method is the central class of the API — Instantiates a map object given the DOM ID of a <div> element and optionally an object literal with Map options.

 REMEMBER: 
 
   We should never put any JavaScript in the header WITHOUT any of the Differ or Async Attributes.

   Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

 LINK: https://leafletjs.com/
*/

// *************************
// Using the Geolocation API
// *************************

/*
 This lecture we ...

   - linked the 3rd party library Leaflet to our application with a CDN in our html.

 A content delivery network (CDN): refers to a geographically distributed group of servers which work together to provide fast delivery of internet content including HTML pages, javascript files, stylesheets, images, and videos. 

 The Geolocation API: is a browser API that allows the user to provide their location to web applications.
 
   The 'navigator.geolocation' property: is a read only property that returns a Geolocation object that gives web content access to the location of the device. And there are two methods to access location...

   Geolocation.getCurrentPosition(): a method on the 'geolocation' object that retrieves the devices location upon success. It takes up to three callbacks, a success callback function, a error callback, and a optional object that provided option for retrieval of position data. 
     SYNTAX: navigator.geolocation.getCurrentPosition(success()[, error[, [options]])

 REMEMBER: The DESTRUCTURING assignment allows us to UNPACK VALUES from arrays, or the properties from objects, INTO distinct VARIABLES!! The destructuring assignment uses similar syntax ({}, []), but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
*/

// *************************
// How to Plan a Web Project
// *************************

/*
 Project Planning Steps:

   USER STORY: is basically a description of the application's functionality from the USER'S PERSPECTIVE. And then all the user stories put together will clearly describe the functionality of the entire application. So user stories are basically a HIGH LEVEL OVERVIEW of the whole application.

   FEATURES: which will allow us developers to determine the exact features that we need to implement in order to make the user stories actually work as intended.

   FLOWCHART: Then to visualize the different actions that a user can take, and how the program react to these actions, we usually put all these features into a nice flow chart.

   ARCHITECTURE: Now to think about HOW we're gonna build it. Architecture, in this case, simply means how we will organize our code, and what JavaScript features we will use. So the project's architecture is essentially what holds all the code together. It gives us a structure in which we can then develop the application's functionality.

     NOTE: The possibilities are really endless. So we have a lot of choice and all that choice can sometimes be a problem. And so if we don't think about the architecture before writing the main part of our application, then we will probably end up with a mess of unmanageable spaghetti code.   
*/

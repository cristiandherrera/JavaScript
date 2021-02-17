"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    // this.date =  ...
    // this.id = ...
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([35, -119], 10, 50, 5);
const cycling1 = new Cycling([32, -115], 60, 30, 10);
console.log(run1, cycling1);

// APPLICATION ARCHITECTURE
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkOut.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function (error) {
          console.log(error);
        }
      );
    }
  }

  _loadMap(position) {
    // Saving users coordinate into variables
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    console.log(position);
    // Initializing the map and assigning it to 'map'
    console.log(this);
    this.#map = L.map("map").setView(coords, 13);
    // Picking and linking map style
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    // Displaying form on event click
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; //=> 'click' value saved to global variable
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkOut(e) {
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Inputs have to be positive numbers!");

      workout = new Running([lat, lng], duration, distance, cadence);
    }

    // If workout cycling, create cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Inputs have to be positive numbers!");

      workout = new Cycling([lat, lng], duration, distance, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on map as marker
    this.renderWorkoutMarker(workout);

    // Render workout on list

    // Hide from and clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      "";
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent("workout")
      .openPopup();
  }
}
const app = new App();

// **********************
// Creating a New Workout
// **********************

/*
 In this lecture ...

   - Implemented a feature to finally create a new workout FROM our user-interface.

 REMEMBER: 

   If you use a '+' sign before a String, it will be converted into a number.

   The Number.isFinite(): is a method that determines whether the passed value is a finite number — that is, it checks that the type of a given value is Number, and the number is neither positive Infinity, negative Infinity, nor NaN.

   A Guard Clause: means is that we will basically check for the opposite of what we are originally interested in and if that opposite is true, then we simply return the function immediately. So kind of a trend that you will see in modern JavaScript.

 JONAS: "The if else statement is not used in modern javascript much anymore, simply using two if statements looks a lot cleaner"
*/

// ***************************************
// Managing Workout Data: Creating Classes
// ***************************************

/*
 In this lecture ...

   - Implemented class 'Workout' and created sub-classes to manage the data about our cycling and running workouts that are come from our user interface.

 REMEMBER: 

   That it is perfectly fine to call ANY code inside of a constructor.
*/

// ************************************
// Refactoring for Project Architecture
// ************************************

/*
 In this lecture ...
  
   In this lecture we restructured all our code into the class 'App'.

 REMEMBER: 

   So app.getPosition and so then this code here would get executed, right at a point where the application loads and that's because as we already know all the code, that's here in the top level scope.

   The constructor method gets executed IMMEDIATELY after a new instance is created from it.

   The 'this' keyword:

     When a callback function is called it is called as a regular function call since we are not the ones calling it (the higher-order function is). AND when a regular function is called it sets the 'this' keyword to 'undefined'.

     And a event handler function will always have the 'this' keyword attached to the DOM element onto which it was called.

   The bind() method: creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

 REAL-WORLD: So even when you're working in the real world and you have event listeners inside of a class, you will be binding the 'this' keywords all the time because otherwise many parts of your code are not gonna work.
*/

// ********************
// Project Architecture
// ********************

/*
 Our project architecture...

   So to start, one of the most important aspects of any Architecture, is to decide where and how to store the data.

   In this small project, we will simply use object oriented programming with classes, just like we learned in the last section.

   So we will divide the data and our logic into two different class sets in this application. The first will be a class ('App') that will contain all of the logic that is related to building the application itself. And then the second class ('workout') will the receive the data created from the logic class and build objects that contain all of the workout data. 
*/

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

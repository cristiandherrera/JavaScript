"use strict";

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date =  ...
    // this.id = ...
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDay()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([35, -119], 10, 50, 5);
// const cycling1 = new Cycling([32, -115], 60, 30, 10);
// console.log(run1, cycling1);

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
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener("submit", this._newWorkOut.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
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

    // Initializing the map and assigning it to 'map'
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

    // Picking and linking map style
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Displaying form on event click
    this.#map.on("click", this._showForm.bind(this));

    // Loads local storage workout markers
    this.#workouts.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; //=> 'click' value saved to global variable
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      "";
    form.getElementsByClassName.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkOut(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
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

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide from and clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
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
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
      `;

    if (workout.type === "running") {
      html += ` 
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;
    }

    if (workout.type === "cycling") {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }

    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // Using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
      this._renderWorkoutMarker(work);
    });
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}
const app = new App();

// *************************
// Working with localStorage
// *************************

/*
 In this lecture we ...

   Used the local storage API to persist data across multiple page reloads.

 JSON

   JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

   JavaScript vs. JSON: 

     JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON.

   The JSON.stringify() method: converts a JavaScript object or value to a JSON string.

   The JSON.parse() method: parses a JSON string, constructing the JavaScript value or object described by the string.

 Web Storage API
 
   The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

   The setItem() method: Is of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
     SYNTAX: storage.setItem(keyName, keyValue);

   The getItem() method: Is of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
     SYNTAX: const aValue = storage.getItem(keyName);

   The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists.
     SYNTAX: storage.removeItem(keyName);

   NOTE: Know that local storage is a very simple API. And so it is only advised to use for small amounts of data.

 Location API 

   The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.

   The Location.reload() method: reloads the current URL, like the Refresh button.

 REMEMBER: 

   The forEach() method: executes a provided function once for each array element. DOES NOT CREATE A NEW ARRAY.
*/

// ***********************
// Move to Marker on Click
// ***********************

/*
 In this lecture we ...

   Implemented the method '_moveToPopup' that will basically move the map to the position of the workout.

 REMEMBER:

   The find() method: returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

   The 'target' property of the Event interface is a reference to the object onto which the event was dispatched.
*/

// ******************
// Rendering Workouts
// ******************

/*
 In this lecture...

   - Rendered new workouts in the sidebar of our user interface.

 REMEMBER: 
   
   The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

   The setTimeout() method of the WindowOrWorkerGlobalScope mixin (and successor to Window.setTimeout()) sets a timer which executes a function or specified piece of code once the timer expires.

   The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
*/

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

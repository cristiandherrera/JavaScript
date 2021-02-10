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

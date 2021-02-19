"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// ***************************************
// Asynchronous JavaScript, AJAX, and APIs
// ***************************************

/*
 Async vs. Synchronous

   Synchronous code

     * Synchronous code is executed line by line.
     - Most code is going to be synchronous.
     - Each line of code WAITS for previous line of code to finish.
     - Long running operations BLOCK code execution.

   Asynchronous code

     * Async code is executed AFTER a task that runs in the 'background' finishes.
     - Async code is non-blocking.
     - Execution does not wait for an async task to finish its work.
     - Callback functions alone DO NOT make code asynchronous.
     - Examples of async code: setTimeout(), setting 'src' attribute, some APIs, AJAX, etc.
     
 AJAX

   AJAX (Asynchronous JavaScript And XML): Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

   XML: is data format, which used to be widely used to transmit data on the web. However, these days basically no API uses XML data anymore. 
   
      Most APIs these days use the JSON data format. So JSON is the most popular data format today because it's basically just a JavaScript object, but converted to a string. And so therefore, it's very easy to send across the web and also to use in JavaScript once the data arrives.

   Now in PRACTICE ... 
     
     We make AJAX calls in our code in order to request some data from a web server dynamically. So without reloading the page so that we can use that data in our application dynamically.

     So with AJAX, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data that we requested. And this back and forth between Client and server all happens asynchronously in the background. And there can even be different types of requests, like get requests to receive data or post requests to send data to a server.

     When we're asking a server to send us some data, this server usually contains a web API. And this API is the one that has the data that we're asking for.

 API 
  
   API (Application Programming Interface):  Is a piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

   Now in JavaScript and web development, there are countless types of APIs, like the DOM API or the Geolocation API that we have been using. Also, we can always implement a small and simple API in a class where we make some methods available as a public interface.

   An IMPORTANT type of API when we use AJAX is the "Online" API (or just API) and its essentially an application running on a web server, which receives requests for data, then retrieves this data from some database and then sends it back to the client.

   We can build OUR OWN web APIs (requires back-end development, e.g, with node.js) or use 3rd-party APIs.

   There are APIs for pretty much EVERYTHING... e.g, weather data, flight data, currency conversion, etc.
   
 
 NOTE: The browser is also referred to as the 'Client'.
*/

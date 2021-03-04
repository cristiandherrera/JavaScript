"use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
// };

///////////////////////////////////////

// ************************
// Throwing Errors Manually
// ************************

/*
 So in this lecture, we're gonna fix the request 404 error that we saw happening in the last lecture.

 TAKE AWAY: Whenever we want to create some error that we want to handle, in the catch handler, all we need to do is to 'throw', and create a new Error.

 MDN 

   The 'throw' statement: throws a user-defined exception. Execution of the current function will STOP, and CONTROL will be passed to the FIRST catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

   Error: objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.

     The Error() constructor: creates an Error object.

   The 'Response.ok': read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not. 

 BELOW: 

   The fetch function unfortunately will NOT reject for a 404 error so we have to MANUALLY force an error to handle that response. (the JS community believes that the fetch func SHOULD fail on a 404)

   We take advantage of the fact that the fetch response has the 'Response.ok' property set to 'false', when we receive response errors (like 404), by using a guard clause to reject the Promise.

   We manually create our own error with the 'Error' constructor function, and then we pass in a generic error message. We then immediately terminate the current function ith the use of the 'throw' keyword.

   Now the effect of creating, and throwing an error in any of these then() methods is that the Promise will immediately reject. The rejected Promise will then PROPAGATE all the way down to the 'catch' handler. So that rejection is this error message that we created, "Country not found (404)." 

   So AGAIN, any error will cause any promise to reject, but here, we are simply creating our own error to basically reject the promise on purpose, so that we can then handle that error down here in the chain in the catch method.
*/

// // Helper function
// const getJSON = function (url, errorMsg = "Something went wrong...") {
//   return fetch(url).then((response) => {
//     // Check for status error, if error exits FORCE ERROR
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// // CLEANED UP VERSION
// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country not found`
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       // const neighbor = "dhjkda"; //=> ERROR 400

//       if (!neighbor) throw new Error("No neighbor found!");

//       return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })

//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((error) => {
//       console.log(`${error}; There was an error my dude!`);
//       renderError(`Something went wrong!! ${error.message}.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // Creating button
// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });
// getCountryData("dkjahjk"); //=> ERROR 404

// // NOT CLEAN
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       // Checking for status error in response
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`); //=> if error exits, FORCE an error
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       // const neighbor = 'dhjkda';

//       if (!neighbor) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((error) => {
//       console.log(`${error}; There was an error my dude!`);
//       renderError(`Something went wrong!! ${error.message}.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });
// getCountryData("dkjahjk");

// **************************
// Handling Rejected Promises
// **************************

/* 
 There are two ways of handling rejection in Promises...

   1. Is to call a SECOND callback function into the then() method. (catches errors only in ONE place)

   2. OR we can INSTEAD use the catch() method to handle ALL the errors, no matter where they appear in the chain, by adding this catch function right at the end of that chain. (catches errors GLOBALLY)

     Promise.prototype.catch() method returns a Promise and deals with rejected cases ONLY. It essentially behaves the same as "Promise.prototype.then(_, onRejected)." IN FACT: calling the catch() method INTERNALLY calls then()'s second callback function onRejected.

   NOTE: The only way in which the fetch promise rejects is when the user loses his internet connection.

 We can use the finally() method for something that always needs to happen no matter the result of the promise.

   Promise.prototype.finally() provides a way for code to be run WHETHER the promise was fulfilled successfully or rejected once the Promise has been dealt with. This helps to avoid duplicating code in both the promise's then() and catch() handlers.

 REMEMBER: 
 
   The first callback function a then() method is called on a onFulfilled (successful) promise, while the second is used on a onRejected (failed) promise.

   The insertAdjacentText() method of the Element interface inserts a given TEXT node at a given position relative to the element it is invoked upon. (NOT HTML)

 BELOW: 
 
   The addEventListener function is here to make it easier for us to simulate losing the internet connection. We use the google chrome dev tools to shut off our connection, and then use the button (w/ the event listener) to load the country data on our click.

   All right, so again the catch method below, at the end of the chain, will basically catch any errors that occur in any place in this whole promise chain and no matter where that is. So errors will basically propagate down the chain until they are caught, and only if they're not caught anywhere then we get that Uncaught error.

   The 'error' callback that is generated below is a real JavaScript object. So we can create errors in JavaScript with a constructor, for example, just like a map or a set. And any 'error' in JavaScript that was created like this contains the 'message' property. So we can use that to print the message of that error and not the whole object itself.

   We use the finally() method to fade in the countriesContainer because we do that no matter if our Promise succeeds or fails.

   Created function 'renderError' to render text on document to display error message. It was moved to the top of the code along with the event listener.
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json() /*,
//       (error) => alert(error) */) //=> Second callback for error handling
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((error) => {
//       //=> catches errors ALL errors in chain
//       console.error(`${error}; There was an error my dude!`);
//       renderError(`Something went wrong!! ${error.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // Creating button
// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });

// *****************
// Chaining Promises
// *****************

/*
 How do we chain Promises?

   Each then() returns a newly generated promise object and whatever we value we choose to return will become the 'onFulfilled' value of the next then() method, which can optionally be used for chaining.

   So to chain Promises make sure to RETURN a SEPARATE fetch Promise INSIDE the end of a then() call. Then handle it outside by simply continuing the chain.
   
   IMPROPER USE OF PROMISE CHAINING: But DO NOT chain a then() method directly onto a new NESTED fetch Promise you will just be back to callback hell, because now we have one callback function defined inside of another one (nested then() callbacks).

 BELOW: 
  
   So here, instead of the callback hell we have what we call a flat chain of promises.

   We use the CONVENTION of naming our then() parameters 'response', when dealing with the fulfilled data of a fetch Promise. 

   chain this then() method directly onto a new nested promise.
*/

// // Chaining Promises
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"));
// };
// getCountryData("usa");

// // Adding countries in html
// function renderCountry(data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// }

// ******************
// Consuming Promises
// ******************

/*
 How do we consume a Promise? 

   We consume a promise by calling then() and catch()(used in later lectures) methods on the promise. The then() method used on for when the promise is resolved and the catch() method whe the promise is rejected. 
   
     NOTE: then() can ALSO be used to interact with 'rejected' with its second paramter BUT DOES NOT handle or 'catch' the value 

 The Promise.prototype.then(): method ALWAYS returns a Promise. It takes up to two arguments: callback function that we want to be executed as soon as the promise is fulfilled or rejected.

   onFullfilled: The first parameter of then(), called if the Promise is fulfilled. This callback has one argument, the "fulfillment value". If it is not a function, it is internally replaced with an "Identity" function.

   onRejected: The second parameter of then(), called if the Promise is rejected. This function has one argument, the 'rejection reason'. If it is not a function, it is internally replaced with a "Thrower" function (it throws an error it received as argument).

 The 'Body' mixin of the Fetch API represents the body of the response/request, allowing you to declare what its content type is and how it should be handled.

   The body.json(): method of the Body mixin takes a Response stream and reads it to completion. It RETURNS a Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number...

 BELOW: 
  
   First the fetch() function returns a Promise. And then we handle the promise using the 'then()' method. Which holds the data of the 'Response' object. Then to read the the data on the 'Response' object, we use the json() method on it. And calling the json returns another Promise that we finally use to extract the data.   
*/

// // Using promises
// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log("", data);
//       renderCountry(data[0]);
//     });
//   console.log(request); //=> Promise
// };
// getCountryData("portugal");

// // Adding countries in html
// function renderCountry(data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// }

// **************************
// Promises and the Fetch API
// **************************

/*
  What is the Fetch API? 

   The Fetch API provides a JavaScript interface for asynchronously accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 

     The Response(Object) interface of the Fetch API represents the response to a request.

   The fetch() method of the WindowOrWorkerGlobalScope, is used to request to the server and load the information in the webpages. It essentially is the new MODERN way of making AJAX calls and replaces the old XML HTTP request function. 

     The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.
    
     Takes one mandatory argument, the path to the resource from the network you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not. You can also optionally pass in an init (custom settings that you want to apply to the request) options object as the second argument. 
     
 What are Promises? (ES6 feature)

   Promise: is an object that is used as a placeholder for the future result of an asynchronous operation(container for a future value). An example of a future value could be a response coming from an AJAX call. (like the Response object??)

   Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

   Promises were essentially made to REPLACE using callbacks.

 What are the advantages of using Promises?

   We NO LONGER need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results (events and callback functions can cause unpredictable results). 

   INSTEAD of NESTING callbacks, we can CHAIN PROMISES for a sequence of asynchronous operations. (escaping callback hell).

 The Promise Lifecycle

   1. Before any value resulting from the asynchronous task is available, the promise is PENDING. 
   
   2. The promise is SETTLED when we finish and there are two different types of settled promises...

     Fulfilled Promise: is a promise that has successfully resulted in a value just as we expected.
     Rejected Promise: means that there has been an error during the asynchronous task.

   3. To "consume a promise" means to use the different states of a promise to get a result.  In the case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume.

   NOTE: A promise is only settled ONCE. And so from there, the state will remain unchanged forever.

 BELOW: Comparing XMLHttpRequest() to the fetch() method.
*/

// // Old way to make network requests
// const requestOld = new XMLHttpRequest();
// requestOld.open("GET", `https://restcountries.eu/rest/v2/name/usa`);
// requestOld.send();
// console.log(requestOld); //=> XMLHttpRequest object

// // New way to request w/ fetch API
// const requestNew = fetch(`https://restcountries.eu/rest/v2/name/usa`)
//   .then((res) => {
//     console.log(res); //=> Response object
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data); //=> parsed Response property 'body'
//   });

// console.log(requestNew); //=> Promise object

// ************************
// Welcome to Callback Hell
// ************************

/*
 What is callback hell?

   Callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence.

 Why is it so bad?
  
   The problem with callback hell is that it makes our code look very messy. But more importantly, it makes our code harder to maintain, and very difficult to understand. Causing bugs that just create bad code.

 Can we do anything about it?

   Fortunately, since ES6, there is actually a way of escaping callback hell by using something called promises.

 REMEMBER: 

   Callback functions: are just the name of a convention for using JavaScript functions. In JS, the way to create a callback is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. 

   Anonymous function: are just functions that are not defined with a specific namespace.

 BELOW: 
   
   Created a sequence of AJAX calls, so that the second one runs only after the first one has finished.
   
   'request2' is an anonymous callback function NESTED inside the 'request' anonymous callback function

   Callback hell, when substantially nested, will create a triangle-ish nature pointing outwards. Like with the nested 'setTimeouts' below.
*/

// // Callback hell w/ timeouts
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// // Callback hell w/ addEventListener
// const getCountryAndNeighbor = function (country) {
//   // AJAX call country (1)
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   // NESTED CALLBACK FUNCTION
//   request.addEventListener("load", function () {
//     // Render country (1)
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);

//     // Get neighbor country (2)
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     // AJAX call country (2)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     // NESTED CALLBACK FUNCTION
//     request2.addEventListener("load", function () {
//       // Render country (2)
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbor("usa");

// // Adding countries in html
// function renderCountry(data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// }

// *****************************************
// How the Web Works: Requests and Responses
// *****************************************

/*
 Request-response model / Client server architecture: Whenever we try to access a Web server, the browser, which is the client, sends a HTTP request to the server and the server will then send back a HTTP response and that response contains the data or the Web page that we requested. And this process works the exact same way no matter if we're accessing an entire Web page or just some data from a Web API.

 What happens when we access web server...

   1. DNS Lookup
   2. TCP/IP socket connection
   3. HTTP Request
   4. HTTP Response

 1. The Domain Name System (DNS) is a central part of the internet, providing a way to match domain names to its websites IP address.

 2. So once we have the real IP address, a TCP socket connection is established between the browser and the server. And this connection is typically kept alive for the entire time that it takes to transfer all files of the Website or all data. Now what are TCP and IP? 

   TCP is the Transmission Control Protocol. And IP is the Internet Protocol. And together they are communication protocols that DEFINE exactly how data travels across the Web. (A communication protocol is a system of rules that allows two or more parties to communicate)

   The FIRST job of TCP is to break the requests and responses down into thousands of small pieces, called packets before they are sent. Then, on arrival, TCP will reassemble all the packets into the original request or response.

   The a SECOND job of the IP protocol is to send and route these pieces back through the Internet using IP addresses on each packet.

   NOTE: This is necessary so that each packet can take a different route through the Internet because this way the message arrives at the destination as QUICK as possible.

 3/4. HTTP is another communication protocol that allows clients and Web servers to communicate. And that works by sending requests and response messages from client to server and back.

   HTTP methods, there are many available, but the most important ones are: GET, for simply requesting data, POST, for sending data and PUT and PATCH, to basically modify data.

   The main DIFFERENCE between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL.

     Transport Layer Security (TLS) is the successor protocol to SSL. TLS is an improved version of SSL. It works in much the same way as the SSL, using encryption to protect the transfer of data and information.(terms are often used interchangeably)

*/

// ************************************
// Our First AJAX Call: XMLHttpRequest
// ************************************

/*
 What is it?

   XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. (XMLHttpRequest is USED HEAVILY in AJAX programming)

   NOTE: Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

 How do you use it?

   To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request. After the transaction completes, the object will contain useful information such as the response body and the HTTP status of the result.

   A request made via XMLHttpRequest can fetch the data in one of two ways, asynchronously or synchronously. The type of request is dictated by the optional async argument (the third argument) that is set on the XMLHttpRequest.open() method. If this argument is true or not specified, the XMLHttpRequest is processed asynchronously, otherwise the process is handled synchronously.

     The XMLHttpRequest method open(): initializes a newly-created HTTP request, or re-initializes an existing one.

     The XMLHttpRequest method send(): sends the request to the server. If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

 REMEMBER: 
 
   The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.      

   XDomainRequest.responseText sets response body of the request, as a string.

   Number.prototype.toFixed() method formats a number using fixed-point notation.

 BELOW: 
 
   Built a UI component, which contains data about a certain country of our choice. And the data actually comes from a third party online API ("REST Countries"). 

   We send off the request with request.send(). And so that request then fetches the data in the background. And then once that is done, it will emit the load event. And so using this event listener, we are waiting for that event. And so as soon as the data arrives, this callback function here will be called.
*/

// // Old school way of calling AJAX
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     console.log(this);
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData("usa");
// getCountryData("portugal");
// getCountryData("germany");

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
     - Ex. of async code: setTimeout(), setting 'src' attribute, some APIs, AJAX, etc.
     
 AJAX

   AJAX (Asynchronous JavaScript And XML): while not a technology in itself, is an approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT. 
   With these technologies together, AJAX calls can request data from web servers dynamically.
   
     But in a nutshell it is the use of the "XMLHttpRequest" object to communicate with servers, exchange data, and update the page WITHOUT having to refresh the page. (see lecture above)

     AJAX is the TRADITIONAL(old-school) way to make an asynchronous HTTP request.

     It can send and receive information in various formats, including JSON, XML, HTML, and text files.

   XML : is a markup language similar to HTML, but without predefined tags to use. Instead, you define your own tags.
     
     Although 'X' in AJAX stands for XML, JSON is used more than XML nowadays because of its many advantages, such as being lighter and a part of JavaScript. It's very easy to send across the web and also to use in JavaScript once the data arrives.

   Now in PRACTICE ... 
     
     We make AJAX calls in our code in order to request some data from a web server dynamically. So without reloading the page so that we can use that data in our application dynamically.

     So with AJAX, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data that we requested. And this back and forth between Client and server all happens asynchronously in the background. And there can even be different types of requests, like get requests to receive data or post requests to send data to a server.

     When we're asking a server to send us some data, this server usually contains a web API. And this API is the one that has the data that we're asking for.

 APIs
  
   API (Application Programming Interface):  Is a piece of software that can be used by another piece of software, in order to allow applications to talk to each other. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.
   
   And can be used in a few types of ways like to...  

     - Access data so that multiple apps or services can work together.
     - Hide complexity for developers.
     - Extend functionality of existing systems.
     - Can act as gate keepers to protect our personal data.

   Client-side JavaScript has many APIs available to it — these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language. They generally fall into two categories...

     Browser APIs are constructs built into the browser that sits on top of the JavaScript language and allows you to implement functionality more easily.

     Third-party APIs are constructs built into third-party platforms (e.g. Twitter, Facebook) that allow you to use some of those platform's functionality in your own web pages (for example, display your latest Tweets on your web page).
   
     Also, we can always implement a small and simple API in a class where we make some methods available as a public interface.

   REMEMBER: There are APIs for pretty much EVERYTHING... e.g, weather data, flight data, currency conversion, etc.
*/

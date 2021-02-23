"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

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

   Callback functions: are just the name of a convention for using JavaScript functions. In JS, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. 

 BELOW: 
   
   'request2' is an anonymous callback function NESTED inside the 'request' anonymous callback function
*/

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // AJAX call country (1)
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // NESTED CALLBACK FUNCTION
  request.addEventListener("load", function () {
    // Render country (1)
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders;
    if (!neighbor) return;

    // AJAX call country (2)
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();

    // NESTED CALLBACK FUNCTION
    request2.addEventListener("load", function () {
      // Render country (2)
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};
getCountryAndNeighbor("usa");

// Callback hell w/ timeouts
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
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

 The Domain Name System (DNS) is a central part of the internet, providing a way to match domain names to its websites IP address.

 So once we have the real IP address, a TCP socket connection is established between the browser and the server. And this connection is typically kept alive for the entire time that it takes to transfer all files of the Website or all data. Now what are TCP and IP? 

   TCP is the Transmission Control Protocol. And IP is the Internet Protocol. And together they are communication protocols that DEFINE exactly how data travels across the Web. (A communication protocol is a system of rules that allows two or more parties to communicate)

   The FIRST job of TCP is to break the requests and responses down into thousands of small pieces, called packets before they are sent. Then, on arrival, TCP will reassemble all the packets into the original request or response.

   The a SECOND job of the IP protocol is to send and route these pieces back through the Internet using IP addresses on each packet.

   NOTE: This is necessary so that each packet can take a different route through the Internet because this way the message arrives at the destination as QUICK as possible.

 HTTP is another communication protocol that allows clients and Web servers to communicate. And that works by sending requests and response messages from client to server and back.

   HTTP methods, there are many available, but the most important ones are: GET, for simply requesting data, POST, for sending data and PUT and PATCH, to basically modify data.

   The main DIFFERENCE between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL.

     Transport Layer Security (TLS) is the successor protocol to SSL. TLS is an improved version of SSL. It works in much the same way as the SSL, using encryption to protect the transfer of data and information.(terms are often used interchangeably)

*/

// ************************************
// Our First AJAX Call: XMLHttpRequest
// ************************************

/*
 What is it?

   XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. (XMLHttpRequest is USED HEAVILY in AJAX programming.)

   NOTE: Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

 How do you use it?

   To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request. After the transaction completes, the object will contain useful information such as the response body and the HTTP status of the result.

   A request made via XMLHttpRequest can fetch the data in one of two ways, asynchronously or synchronously. The type of request is dictated by the optional async argument (the third argument) that is set on the XMLHttpRequest.open() method. If this argument is true or not specified, the XMLHttpRequest is processed asynchronously, otherwise the process is handled synchronously.

     The XMLHttpRequest method open(): initializes a newly-created HTTP request, or re-initializes an existing one.

     The XMLHttpRequest method send(): sends the request to the server. If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

 NOTE: For APIs, an "endpoint" can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.
*/

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
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

   AJAX (Asynchronous JavaScript And XML): AJAX is the TRADITIONAL(old-school) way to make an asynchronous HTTP request. It uses the "XMLHttpRequest" object to communicate with servers, exchange data, and update the page without having to refresh the page.

     It can send and receive information in various formats, including JSON, XML, HTML, and text files.

   XML: is data format, which used to be widely used to transmit data on the web. However, these days basically no API uses XML data anymore. 
   
      Most APIs these days use the JSON data format because it's basically just a JavaScript object, but converted to a string. And so therefore, it's very easy to send across the web and also to use in JavaScript once the data arrives.

   Now in PRACTICE ... 
     
     We make AJAX calls in our code in order to request some data from a web server dynamically. So without reloading the page so that we can use that data in our application dynamically.

     So with AJAX, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data that we requested. And this back and forth between Client and server all happens asynchronously in the background. And there can even be different types of requests, like get requests to receive data or post requests to send data to a server.

     When we're asking a server to send us some data, this server usually contains a web API. And this API is the one that has the data that we're asking for.

 APIs
  
   API (Application Programming Interface):  Is a piece of software that can be used by another piece of software, in order to allow applications to talk to each other. And can be used in a few types of ways like to...  

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

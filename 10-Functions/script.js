"use strict";

// **************************
// The call and apply Methods
// **************************

/*
 How do we tell JS explicitly what the 'this' keyword should look like?

 Well, there are three function methods to do that and they are call(), apply() and bind().

   The call() method: the FIRST arguement will be the 'this' keyword followed by the arguement for the function.

   The apply() method: DOES NOT receive a list of arguments after the 'this' keyword, but instead it takes an ARRAY of the arguments.

 NOTE: The apply() method is NOT used in modern JS, INSTEAD we use the spread operator with the call() method!! 
*/
// const deltaAir = {
//   airline: "Delta",
//   iataCode: "DE",
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// deltaAir.book(239, "Cristian Herrera");
// deltaAir.book(635, "John Smith");
// console.log(deltaAir);

// const alaskaAir = {
//   name: "Alaska",
//   iataCode: "AL",
//   bookings: [],
// };

// const book = deltaAir.book;
// // book(23, "Sarah Williams"); // ERROR: 'this' not defined outside object

// // Call method
// book.call(alaskaAir, 23, "Sarah Williams");
// console.log(deltaAir);

// book.call(deltaAir, 487, "Mary Cooper");
// console.log(deltaAir);

// // Apply method
// const flighData = [583, "George Cooper"];
// book.apply(alaskaAir, flighData);
// console.log(alaskaAir);

// book.call(deltaAir, ...flighData);
// console.log(deltaAir);

// *****************************
// Functions Returning Functions
// *****************************

// // 'greet' function returning another function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // SAME function with arrows instead
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // Storing the returned function 'name' into variable 'greeterHey'
// const greeterHey = greet("Hey");
// greeterHey("Cristian");
// greeterHey("Steven");

// **************************************
// Functions Accepting Callback Functions
// **************************************

/* 
 Why our callback functions so much used in JavaScript and why are they so helpful?

   First is that it makes it easy to split up or code into more reusable and interconnected parts.

   Second and way more important advantage, which is the fact that callback functions allow us to create abstraction.

 Abstraction: 

   We hide the detail of some code implementation because we don't really care about all that detail. And this allows us to think about problems at a higher more abstract level.
    

 REMEMBER: that we call functions that we pass "callback functions". And that's because we DO NOT call them ourselves. But instead we call JavaScript to basically tell them later.
*/

// const oneWord = (str) => str.replace(/ /g, "").toLowerCase();
// console.log(oneWord("Hello my friend!"));

// const upperFirstWord = (str) => {
//   const [first, ...others] = str.split(" ");
//   console.log(first, others);

//   console.log([first.toUpperCase(), ...others]);
//   return [first.toUpperCase(), ...others].join(" ");
// };
// console.log(upperFirstWord("Hello my friend!"));

// // Higher-order function
// const transformer = (str, fn) => {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const hello = function () {
//   console.log("hello");
// };
// //               |higher-order|       |callback|
// document.body.addEventListener("click", hello);

// ["Jonas", "Marth", "Adam"].forEach(hello);

// **************************************
// First-Class and Higher-Order Functions
// **************************************

/*
 So, first class functions is just a feature that a programming language either has or does not have. All it means is that all functions are values. It's just a concept.

 There are however higher order functions in practice, which are possible because the language supports first class functions.

 First-Class Functions:
   JavaScript treats functions as first-class citizens
   This means that functions are simply values
   Functions are just another 'type' of object

     store functions in variables or properties
     pass functions as arguements to OTHER functions
     return functions FROM functions
     call methods on functions

 Higher-Order Functions:
   A function that receives another function as an argument, that returns a new function, or BOTH
   This is onlyu possible because of first-class functions

     function that recieves another function
     function that returns new function
*/

// ***********************************************
// How Passing Arguments Work: Value vs. Reference
// ***********************************************

/*
 REMEMBER: 
   When passing a primitive value into a funcition, its value is just COPIED, SO if that function value is changed the orignal primitive value will NOT change with it.

   When passing a object into a function, its value is REFERENCED to the original object, meaning they are the SAME object so if changed it will be seen in or out of function.

 BUGS: Because objects are reference types bugs can arise when passing one object into mulitple functions that manipulate its values SINCE its ALL ONE object!

 TECHNICALLY: In JS there is no "passing in reference" ONLY "passing in value" because even though we are passing a reference to the memory heap, the reference number IS A VALUE! 
*/

// const flight = "LH234";
// const cristian = {
//   name: "Cristian",
//   passport: 123456789,
// };

// const checkIn = (flightNum, passenger) => {
//   // attempting to change 'flight' value through the arguement 'flightNum' but actually just creating copy
//   flightNum = "FN2187";

//   // actually changing objects value because it is a reference type
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert("Checked in!");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, cristian);
// console.log(flight);
// console.log(cristian);

// // Is the same as doing ... (compared to functions reassigning values)
// const flightNum = flight;
// const passenger = cristian;

// // BUGS: changing 'cristian.passport' value to show potentially bugs with reference types
// const newPassport = (person) =>
//   (person.passport = Math.trunc(Math.random() * 100000));

// newPassport(cristian);
// console.log(cristian.passport);
// checkIn(flight, cristian);

// ******************
// Default Parameters
// ******************

/*
 Default function parameters: 
   Allow named parameters to be initialized with default values if no value or undefined is passed. 

   In ES6 we define our default parameter values WHEN we first declare out parameters 
   
   Our default values can contain ANY expression!!

   We can use the values of other default parameters that we set BEFORE it!!

   CANNOT skip arguments when calling the function BUT we can trick JS into skipping it by setting whatever value you want to skip to 'undefined'

 REMEMBER: 
   With enhanced object literals by JUST declaring a property you can define its value with the property name itself!

   When short circuiting using the or(||) operator, the result of the whole operator will be the first truthy operand.
*/

// const bookings = [];

// const createBooking = function (
//   // ES6 default parameters
//   flightNum,
//   numPassengers = 1,
//   // default value EXPRESSION calling on previous default value!
//   price = 199 * numPassengers
// ) {
//   // // ES5 default parameters
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     // Enhanced object literals
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// // skipping 2nd argument by setting undefined!
// createBooking("LH123", undefined, 1000);

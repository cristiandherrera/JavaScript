"use strict";

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

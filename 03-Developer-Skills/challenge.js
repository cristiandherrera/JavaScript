"use strict";
// ******************
// Coding Challenge 1
// ******************

// // PROBLEM :
// // Give an array for max temps
// // Display max temps in a string

// // Understanding the problem 1.
// //  - How do I add to a string every iteration of the loop?
// //    * Dont declare a new sting inside of loop.

// // Breaking up into sub-problems 2.
// //  - create funtion 'printForecast' with 'arr' as parameter
// //  - declare a string variable
// //  - declare a variable to grab the day value: index + 1
// //  - declare a variable to grab each array index
// //  - create a loop to grab each array value
// //  - find out how to concatenate strings a loop effectively
// //  - log conactenated string to the console

// const DATA1 = [17, 21, 23];
// const DATA2 = [12, 5, -5, 0, 4];

// const printedForecast = function (arr) {
//   let string = `... `;
//   let day = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const temp = arr[i];
//     day += 1;
//     string += `${temp} degrees Celcius in ${day} days ... `;
//   }
//   console.log(string);
// };
// printedForecast(DATA1);
// printedForecast(DATA2);

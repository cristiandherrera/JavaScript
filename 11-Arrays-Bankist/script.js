"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// ********************
// Simple Array Methods
// ********************

/*  
 The slice() method: returns a shallow copy of an array into a new array object using two arguements that select the start and end of the array using the index.

 The splice() method: mutates the contents of an array by removing OR replacing existing elements and/or adding new elements.

 The reverse() method: mutates the contents of an array by reversing there index value.

 The concat() method: creates a new array by concatinating two arrays together

 The join() method: creates and returns a new string by concatenating all of the elements in an array, seperated by commas or a specified sperator string in the argument
*/

// let arr = ["a", "b", "c", "d", "e"];
// let arr2 = ["a", "b", "c", "d", "e"];
// let arr3 = ["a", "b", "c", "d", "e"];

// // SLICE - shallow copy
// console.log(arr.slice(2)); // ["c", "d", "e"]
// console.log(arr.slice(2, 4)); // ["c", "d"]
// console.log(arr); // ["a", "b", "c", "d", "e"]

// console.log(arr.slice(-2)); // ["d", "e"]
// console.log(arr.slice(-1)); // ["e"]
// console.log(arr.slice(1, -1)); // ["b", "c", "d"]

// // both create shallow copy
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE - mutates
// // console.log(arr.splice(2)); // ["c", "d", "e"] deletes
// arr.splice(-1);
// console.log(arr); // ["a", "b", "c", "d"]
// arr.splice(1, 2);
// console.log(arr); // ["a", "d"]

// console.log(arr2.splice(3, 0, "x"));
// console.log(arr2);

// // REVERSE - mutates
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// // CONCAT - shallow copies
// arr = ["a", "b", "c", "d", "e"];
// const letters = arr.concat(arr3);
// console.log(letters); // ["a", "b", "c", "d", "e" , 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr3]); // SAME EFFECT AS concat()

// // JOINc -  shallow copy
// console.log(letters.join(" + ")); // a + b + c + d + e + f + g + h + i + j

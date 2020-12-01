"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  // Setting HTML within '.movements' class to empty
  containerMovements.innerHTML = "";

  // Looping through function argument 'movements'
  movements.forEach(function (mov, i) {
    // Creating string on whether value is below or above 0
    const type = mov > 0 ? "deposit" : "withdrawal";

    // Creating string of html to create a new row to display withdrawals and deposits
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
     `;
    // Inserting HTML using the string from variable 'html'
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// *****************************************
// Data Transformations: map, filter, reduce
// *****************************************

/*
 The Map array method: returns a NEW ARRAY containing the results of applying an operation on all original array elements

 The Filter array method: returns a NEW ARRAY containing the array elements that passed a SPECIFIED test CONDITION

 The Reduce array method: reduces all ORIGINAL array elements down to one single value. (e.g. adding all elements togther)

*/

// **************************
// forEach With Maps and Sets
// **************************

/*
 The map.forEach() method: executes a provided function once for each value in the Set object, in insertion order.
   SYNTAX: 'map.forEach(callback (value, key, map) {})' (WHEN USED WITH MAPS)

 The set.forEach() method: executes a provided function once per each key/value pair in the Map object, in insertion order.
   SYNTAX: 'set.forEach(callback (value1, value2, map) {})' (WHEN USED WITH SETS)
   note: that the second arguement in set.forEach() ALWAYS will have the same value as the first. 

 PRACTICE: When '_' is used as a variable name, it means it is a "throwaway variable".(useless/has no meaning)
*/

// // MAPS
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SETS
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "RUP"]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value1, _, set) {
//   console.log(value1, _, set);
// });

// ***********************
// Looping Arrays: forEach
// ***********************

/*
 The array.forEach() method: is a method that requires a callback to execute once for every item in the array.

 SYNTAX: Can take up to THREE arguements in a specific order. (WHEN USED WITH ARRAYS) 
   Ex. array.forEach(callback (item, index, array) {})

 USE: You CANNOT break out of a forEach() loop! 'continue' and 'break' statements DONOT work with them!

 REMEMBER: 
   A higher-order function is a func that requires a callback(function) as an arguement 
   A callback function is a function passed into a higher-order function as an argument.
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("");

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov} ${arr}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

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

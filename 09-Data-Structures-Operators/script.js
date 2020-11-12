"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ********************
// Destructuring Arrays
// ********************

/*
  Destructuring Assignment: when using brackets on the LEFT side of the equal sign!! NOTE: remember to declare vairable with 'const'.

  Destructuring is a way to break down more complex stuctures into a smaller data structure like a variable

  When destructuring all it is doing is unpacking it. (Orignal array reamains intact!!)

  Can use destructuring to return values from arrays much more effeciently!

  Default values: a varaible can be assigned a default(any value really), in case the value unpacked is 'undefined' (does not exist).

  REMEMBER: can use arrays to 'return' MULITPLE values!!!
*/

// Grabbing values WITHOUT destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array 'arr'
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // Switching variables WITHOUT destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching WITH destructuring
// |destructuring|  |assigning value|
[main, secondary] = [secondary, main];
console.log(main, secondary);

// // Return 2 values WITHOUT destructuring
// const starterOrder = restaurant.starterMenu[2];
// const mainOrder = restaurant.mainMenu[0];
// console.log(starterOrder, mainOrder);

// Recieve 2 return values from a function USING destructuring!!
console.log(restaurant.order(2, 0));
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

// Destructuring nested arrays
const nested = [2, 4, [5, 6]];
const [g, , f] = nested;
console.log([g, f]);

// destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
  // Method to destructure and return multiple values from arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Method with an object as the paramater; so it will automatically destructure object.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "12:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },
  // Method made to pass in all arguments at once with spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
  },
};

// // SPREAD OPERATOR
// const ingrediants = [
//   prompt("What is the fist ingrediant?"),
//   prompt("What is the second ingrediant?"),
//   prompt("What is the third ingrediant?"),
// ];
// restaurant.orderPasta(...ingrediants);

// // DESTRUCTURING OBJECTS
// // Passing in objects as arguements for function calls
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 3,
// });

// *************************
// The Spread Operator (...)
// *************************

/*
 Spread Operator: Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. (MDN)

 Iterables: arrays, strings, maps, sets. NOT objects (simple def.)

 USE: Whenever we need the elements of an array individualy, pass mulitple elements into a function, use the spread operator

 Can ONLY use the spread operator when building an array OR when we pass values into a function

 Similarly too destructuring spread operator helps us get elements out of arrays 

 Spread operator gets ALL of the elements from an array and DOES NOT create new variables
 so we can only use it in places where values are seperated by commas

 UPDATE: Since 2018, the spread operator, now woks on objects(even though NOT iterals)
*/

// // old way
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// // Spread operator: concatinatiing 'arr' with 'gooaArr'
// const goodArr = [1, 2, ...arr];
// console.log(goodArr);
// console.log(...goodArr);

// // Creating new array 'newMenu'; adding string (DOES NOT manipulate orginal array 'mainMenu')
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array (shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Joining 2 full arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// // Iterables
// const str = "Cristian";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.timeStamp(...str);
// // console.log(`${...str}`); // ERROR: unexpexted token '...''

// // Objects
// // Created a shallow copy of 'resturants' with the spread operator!
// // can add and change in any order!
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Mario",
//   name: "Peaches Castle",
// };
// console.log(newRestaurant, restaurant);
// console.log(newRestaurant.name, restaurant.name);

// *********************
// Destructuring Objects
// *********************

/*
 Destructuring Assignment: expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables! SYNTAX: Use on '{}' on the left side of '=' operator to destructure an OBJECT!.

 For destructuring objects the PROPERTY of the value is what we need to unpack it!

 When passing in objects as arguments to functions the function will automatically start destructuring the object!!

 When passing an object into a functions paramaters decstructuring happens implicitly, SO the PARAMATERS need to be the SAME NAME as the object PROPERTIES (order does not matter)

 SYNTAX: MUST use parenthesis around an object to mutate variables 

 Default values: a varaible can be assigned a default(any value really), in case the value unpacked is 'undefined' (does not exist). 

 TIP: Default values make it easy to interact with non-hardcoded code; usually coming from somewhere else (ex: an API)
*/

// // Deconstrucing object 'restarant'
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Changing object properties to new variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {
//   menu = ["THIS IS MY DEFAULT VALUE"],
//   starterMenu: starter = [],
// } = restaurant;
// console.log(menu, starter);

// // Mutating variables
// let a = 111;
// let b = 999;
// const object = { a: 23, b: 7, c: 14 };
// // reassigning 'a' and 'b' variable values to the'object' property value 'a' and 'b' (variable name and objects property MUST HAVE THE SAME NAME)
// ({ a, b } = object); // NOTE: use paranthesis to mutate variables with object values
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open, close: c },
// } = openingHours;
// console.log(open, c);

// ********************
// Destructuring Arrays
// ********************

/*
 Destructuring Assignment: expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables! SYNTAX: Use on '[]' on the left side of '=' operator to destructure an ARRAY!

  SYNTAX: Use on left side of '=' operator

 For destructuring arrays the index POSTION of the value is what we need to unpack it!

 When destsructuring an array you can skip over items in the array by using the ',' sign for  each item you would like to skip over 

 Destructuring is easy way to break down more complex stuctures into a smaller data structure like a variable

 Use destructuring to return values from arrays much more effeciently! 

 Default values: a varaible can be assigned a default(any value really), in case the value unpacked is 'undefined' (does not exist).

 REMEMBER: can use arrays to 'return' MULITPLE values!!!
*/

// Grabbing values WITHOUT destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// Destructuring array 'arr'
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // // Mutating variables WITHOUT destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Mutating WITH destructuring
// // |assigning value| |destructuring|
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // // Return 2 values WITHOUT destructuring
// // const starterOrder = restaurant.starterMenu[2];
// // const mainOrder = restaurant.mainMenu[0];
// // console.log(starterOrder, mainOrder);

// // Recieve 2 return values from a function USING destructuring!!
// console.log(restaurant.order(2, 0));
// const [starterOrder, mainOrder] = restaurant.order(2, 0);
// console.log(starterOrder, mainOrder);

// // Destructuring nested arrays
// const nested = [2, 4, [5, 6]];
// const [g, , f] = nested;
// console.log([g, f]);

// // destructuring inside destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

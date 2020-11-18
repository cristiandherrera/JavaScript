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
  // Method to DESTRUCTURE and return multiple values from arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Method with an object as the paramater; so it will automatically DESTRUCTURE object.
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
  // Method made to pass in all arguments at once during the function call with the SPREAD OPERATOR
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
  },
  // Method that allows us to pass a indefinite number of args as an array BECAUSE of the REST PARAMETER
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

// // REST PATTERNS AND PARAMETERS
// restaurant.orderPizza("red sauce", "pepperonies", "onions", "peppers");
// restaurant.orderPizza("white sauce");

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

// ================================================================================================== //

// ****
// Sets
// ****

/*
 A Set another data structure and is basically just a collection of unique values.

   Sets can only have ONE of each unique value. 

   Sets can have mulitple data types

   There is no way of getting values out of a set.

 Sets are not intended to replace arrays at all. So whenever you need to store values in order, and that might contain duplicates, always just use arrays.

 COMPARISON: Sets are very different from arrays, its elements are unique, and the order of elements in the set is irrelevant.

 USE: The main use case of Sets in a codebase is to remove duplicate values from arrays

 REMEMBER: the spread operator works on all iterables. So that also includes sets.
*/

// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risoto",
//   "Pasta",
//   "Pizza",
// ]);
// // Logs string "pizza" and "pasta" only ONCE!
// console.log(orderSet);
// // Logs iterated string! (leter by letter).
// console.log(new Set("Cristian"));
// // Logs the size of UNIQUE values in 'Set' (which is 3).
// console.log(orderSet.size);

// // SET METHODS
// // 'has()' checks if a Set contains a unique value, returns Boolean.
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// // 'add()' adds unqiue values to Set; remember Set can only contain 1 unique value.
// console.log(orderSet.add("Garlic Bread"));
// console.log(orderSet.add("Garlic Bread"));
// // 'delete()' deletes the selected unique value!
// console.log(orderSet.delete("Garlic Bread"));
// console.log(orderSet);
// // 'clear()' clears ALL values from the Set!
// // orderSet.clear();
// // console.log(orderSet);

// // LOOPING A SET
// // A 'Set' is a iterable which means we can loop through it.
// for (const order of orderSet) {
//   console.log(order);
// }

// // EXAMPLE - Removing duplicate values from array using Sets.
// // Creating and logging 'staff' array.
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// console.log(staff);
// // Creating Set 'staffUnique' BUT wrapping in array AND unpacking the Set with spread operator!
// const staffUnique = [...new Set(staff)];
// // Logging new array: ([ 'Waiter', 'Chef', 'Manager' ])
// console.log(staffUnique);

// // If you just want the size of the of the set.
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );

// **************************************************
// Looping Objects: Objects Keys, Values, and Entries
// **************************************************

/*
 Allows us to loop over objects(NOT iterables) in an indirect way by transforming the data in side of objects into arrays.

 Keys: collects the PROPERTY names of objects(also known as keys)

 Values: collects the VALUES of the objects

 Entries: collects BOTH values and property names. NOTE: when calling this method on an object you DO NOT call it on the data-structure itself like you do with an array
*/

// // Object KEYS
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// // Looping through the PROPERTIES of '.openingHours' object
// let string = `We are open on ${properties.length}: `;
// for (const keys of properties) {
//   string += ` ${keys},`;
// }
// console.log(string);

// // Property VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // ENTIRE object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// // Looping through ENTIRE '.openingHours' object
// // also DESTRUCTURING nested objects in loop
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// // ARRAYS - calling keys, values, and entries
// const weekdays = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];

// console.log(...weekdays.keys());
// console.log(...weekdays.values());
// console.log(...weekdays.entries());

// **********************
// Optional Chaining (?.)
// **********************

/*
 Optional chaining: if a certain property does NOT exist then 'undefined' is returned IMMEDIATELY.

 USE: when accessing a chain of object values use '?.' to test if the value on the left of it does exist!

 REMEMBER: 'nullish' values are like 'falsy' values EXCEPT ONLY null and undefined trigger it.

 REMEMBER: If we need to compute the property name with an expression USE bracket notation

 PRACTICES: We often use optional chaining operator(?.) with the  nullish coalescing operator(??) so that we can actually do something in case we don't get a result from the object

*/

// // BAD PRACTICE (old way)
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon);
// }

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// // EXAMPLE
// const days = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];

// // looping through array; storing each value in 'items'; checking if resturant 'items' exist based on array index
// for (const items of days) {
//   const open = restaurant.openingHours[items]?.open ?? "closed";
//   console.log(`On ${items}, we open at ${open}`);
// }

// // METHODS

// // checking if methods exist with 'optional chaining' and 'nullish coalescing' operators
// console.log(restaurant.order?.(0, 2) ?? "method does NOT exist!");
// console.log(restaurant.orderTacos?.(0, 2) ?? "method does NOT exist!");

// // ARRAYS

// const users = [{ name: "cristian", email: "cristian@hello.com" }];

// // checking if arrays exist with 'optional chaining' and 'nullish coalescing' operators
// console.log(users[0]?.name ?? "users array empty");
// console.log(users[1]?.name ?? "users idex does not exist");

// ************************
// Enhanced Object Literals
// ************************

/* 
 When nesting objects, we would have to set a property to our nested objects, NOW we can just have the variable name of the nested object.

 Methods: We no longer have to create a property and then set it to a function expression. We can now leave out the keyword 'function' and ':'.

 We can now compute property names instead of write them out manually.
*/

// const weekdays = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant2 = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object calling
//   openingHours,

//   // ES6 enhanced method syntax
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "12:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
//   },
//   // OLD WAY
//   orderPizza: function (mainIngrediant, ...otherIngrediants) {
//     console.log(mainIngrediant);
//     console.log(otherIngrediants);
//   },
// };

// *******************************
// Looping Arrays: The for-of Loop
// *******************************

/*
 Loops through the values of iterable objects.

 Does NOT have to specify conditions or a counter; does it automatically!

 'continue' and 'break' keywords still work

 When calling 'entries' on an array it returns the index number and the element itself
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for-of loop

// // looping through element
// //       |values|'of'|looped|
// for (const item of menu) {
//   console.log(item);
// }

// // getting index from element using 'entries' method
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

// //'.entries()' is one big array that contains key-value pairs for each index in the array
// console.log(...menu.entries());

// ************************************
// The Nullish Coalescing Operator (??)
// ************************************

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // Nullish values: ONLY null and undefined (NOT 0, "", or EVEN booleans);
// const guestCorrect = restaurant.numGuests ?? false;
// console.log(guestCorrect);

// ***************************
// Short Circuting (&& and ||)
// ***************************

/*
 Short Circuting: refers to how logical operators will by react to values if they are 'falsy'.

   OR operators will return its FIRST 'truthy' value or its FINAL 'falsy' value IF none are 'truthy'.
   AND operators will return its FIRST 'falsy' value or its FINAL 'truthy' value IF none are 'falsy'.

 Logical operators values DONT have to be just booleans; they can use ANY data type, and return ANY data type!

 Setting default values CAN done using OR short circuting.

 Can use AND short circuting to return its final operant. (used like an if/esle) 
*/

// // SHORT CIRCUTING with OR
// console.log(3 || "Cristian");
// console.log("" || "Cristian");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// // COMPARISON
// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests
//   ? restaurant.numGuests
//   : (restaurant.numGuests = 10);
// console.log(guest1);

// // setting a default value of 10 if the first value is 'falsy'
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("====== AND ======");

// // SHORT CIRCUTING with AND
// console.log(0 && "Cristian");
// console.log(1 && "Cristian");

// console.log("hello" && 25 && undefined && "goodbye");
// console.log("hello" && 25 && "goodbye");

// // COMPARISON
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "onions");
// }

// // calling a method if the first value is 'truthy'
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "onions");

// ****************************
// Rest Patterns and Parameters
// ****************************

/*
 The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

 Rest vs. Spread: 

    Rest pattern has same syntax as spread operator BUT insted of unpacking elements from an array the rest pattern PACKS elements into arrays

    Rest Pattern is used on the LEFT side of the '=' during destructuring assignment
    Spread Operator is used on the RIGHT side of the '=' sign.

    Passing values into functions: Rest pattern compresses individual values into arrays.(written in parameters)
    Passing values into functions: Spread Operator expands arrays into individual values. (written in arguements)

 USE: Make sure to use the rest pattern at the very end of the destructuring assignment!

*/

// 1) Destructuring

// // SPREAD, because on RIGHT side
// const arr = [1, 2, ...[3, 4]];

// // REST, because of LEFT side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Combining the TWO!
// const [sauceDisk, , riceDish, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(sauceDisk, riceDish, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions

// //          |REST PATTERN|
// const add = (...numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 3, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// // |SPREAD|
// add(...x);

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

// // Deconstructing object 'restarant'
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

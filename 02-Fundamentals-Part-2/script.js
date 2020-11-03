// *********************
// Acivating Strict Mode
// *********************

// // Creates visble errors in the dev console to help debugging

// // When in use('use strict') it has reserved key words

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;  //<< ERROR: typo in license variable
// if(hasDriversLicense) console.log("I can Drive!!");

// // const interface = 'Audio;
// // const private = 534;

// ===================================================================================== //

// *********
// Functions
// *********

// // Functions allow us to write reusable pieces of code!

// // The 'return' statement ends the funcion execution and returns a value.

// function me() {
//   console.log('My name is Cristian');
// }

// // 'Calling' function bellow with 'fucntion_name()' 
// me();
// me();
// me();

// // Creating funciton named 'juiceProcessor' with 2 arguments 'apples' and 'oranges'.
// function juiceProcessor(apples, oranges) {

//   // creating variable 'juice' with a string value.
//   // passing in the function arguments with tempaerate literals.
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`

//   // returning value of variable 'juice' to the function caller 'juiceProcessor'. 
//   return juice; 

//   // can now use the value of 'juice' ANYWHERE in our code!
// }
// console.log(juiceProcessor(3 , 2));


// const appleJuice = juiceProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = juiceProcessor(2, 4);
// console.log(appleOrangeJuice);

// ===================================================================================== //

// *************************************
// Function Declarations vs. Expressions
// *************************************

// // Function Declarations
// // declarations are hoisted on top of the code 

// const age1 = calcAge1(1995);
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // Function Expression
// // can be stored in variable

// const calcAge2 = function(birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1995);

// console.log(age1, age2);

// ===================================================================================== //

// ***************
// Arrow Funcitons 
// ***************

// // CANNOT use 'this' keyword with arrow functions

// //   |variable|  |paramater|  |function block|
// const calcAge3 = birthyear => 2020 - birthyear;
// const age3 = calcAge3(1995);
// console.log(calcAge3(1995));

// const yearsUntilRetirement = (birthyear, name) => {
//   const age = 2020 - birthyear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${name} retires in ${retirement} years!`
// }
// console.log(yearsUntilRetirement(1995, 'cristian'));
// console.log(yearsUntilRetirement(1989, 'justin'));

// ===================================================================================== //

// *********************************
// Functions Calling Other Functions
// *********************************

// // function cutFruit(fruit){
// //   return fruit * 4;
// // }
// const cutFruit = fruit => fruit * 4;

// function juiceProcessor(apples, oranges) {
//   /* calling the 'cutFruit' function inside 'juiceProcessor' function
//   and passing in the parameters of 'juiceProcessor' into 'cutFruit' paramters 
//   and storing it into variables  */
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//   return juice; 
// }
// console.log(juiceProcessor(3 , 2));

// ===================================================================================== //

// *******************
// Reviewing Functions 
// *******************

// // Functions allow us to write reusable pieces of code!


// Declaration functions are statements so does not directly output a value
// can be used before declared; called being "hoisted".

// Expresson functions are expressions so they directly output a value 
// can be used directly with template literals
// can be stored in a variable.

// Arrow functions are great for quick one line, usually one paramater, code.
// also an expression 
// also stored in variable
// but CANNOT use 'this' keyword

// All still very similar, all CAN input, transform, or output data.

// Return statements outputs a value from the function and then TERMINATES the function.

// ===================================================================================== //

// **********************
// Introduction to Arrays
// **********************

// // Is a data stucture. A big container. 

// // An index is a 0 based value counting system (starts from 0) and is marked with [x] at the end of an array.

// // first way to wrte an array (less common)
// const years = new Array(1995, 2001, 2009, 2010, 2013);
// // Second way to write an array (most common)
// const friends = ['Casey', 'Nick', 'Justin', 'Jeremy', 'Burg'];

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[4] = 'Brown'; // reassigned index[4] from 'burg' to 'brown'
// console.log(friends);
// // CANNOT completely reassign 'const' variables ONLY manipultate
// // friends = ['Billy', 'Johnny'] //<< ERROR

// const firstName = 'Cristian';
// const cristian = [firstName, 'Herrera', 2020 - 1995, friends]
// console.log(cristian);

// // Exercise
// const calcAge = function (birthYear) {
//    return 2037 - birthYear;
// }
// const calcYears = [1995, 2001, 1984, 1989, 2020]

// const age1 = calcAge(calcYears[0]);
// const age2 = calcAge(calcYears[3]);
// const age3 = calcAge(calcYears[calcYears.length-1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(calcYears[0]), calcAge(calcYears[3]), calcAge(calcYears[calcYears.length-1])];
// console.log(ages);

// ===================================================================================== //

// *******************************
// Basic Array Operations(Methods)
// *******************************

// // Methods are essentially just pre-written fucntions that are called on with a '.' before the method name. example - console.log

// const friends = ['Casey', 'Nick', 'Justin', 'Jeremy', 'Brown'];

// // add elements 
// const newLength = friends.push ('Malinowski'); // '.push' adds element to the end
// console.log(friends);
// console.log(newLength);

// friends.unshift('Andrea'); // '.unshift' adds to element to beginning
// console.log(friends);

// // remove elements
// friends.pop(); // '.pop' removes the last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // removes the first element
// console.log(friends);

// // more usefull methods
// console.log(friends.indexOf('Casey')); // .'indexOf' checks index count
// console.log(friends.indexOf('Bob')); // << this is false so will return '-1'

// friends.push(23);
// console.log(friends.includes('Casey')); // '.includes' checks if true or false
// console.log(friends.includes('23')); // << FALSE - '.includes' does NOT perform type coercion 

// // example of most used case of '.includes'
// if (friends.includes('Casey')) {
//   console.log("You have a friend named Casey");
// }

// ===================================================================================== //

// ***********************
// Introduction to Objects 
// ***********************

// // Like 'arrays' we use variabes to group together content 

// // With 'objects' we use key value pairs to connect specific data with variables

// // The key value pair variables inside of the objects are 'Properties'

// // The order of 'objects' does NOT matter when we want to retrieve them

// const cristianArray = [
//   'Cristian',
//   'Herrera', 
//   2020 - 1995,
//   'Programmer', 
//   ['Michael', 'Peter', 'Steven']
// ];

// const cristianObject = {
//   firstName: 'Cristian',
//   lastName: 'Herrera',
//   age: 2020 - 1995,
//   job: 'Programmer',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// ===================================================================================== //

// ************************
// Dot vs. Bracket Notation 
// ************************

// // Both used to add or retrieve an element to/from an object 

// // If we need to compute the property name with an expression USE bracket notation

// // Otherwise use dot notation, its cleaner and faster to use

// const cristianObject = {
//   firstName: 'Cristian',
//   lastName: 'Herrera',
//   age: 2020 - 1995,
//   job: 'Programmer',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(cristianObject);

// // Dot notation
// console.log(cristianObject.lastName);

// // Bracket notation
// console.log(cristianObject['lastName']);

// const nameKey = 'Name';
// console.log(cristianObject[`first${nameKey}`]);
// console.log(cristianObject['last' + nameKey]);

// // console.log(jonas.'last' + nameKey) //<ERROR- with dot notation: can only use final property name

// const interestedIn = prompt('What do you want to know about Cristian? Choose between firstName, lastName, age, job, and friends.');

// if (cristianObject[interestedIn]) {
//   console.log(cristianObject[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

// cristianObject.country = 'America';
// cristianObject['state'] = 'California' ;
// console.log(cristianObject);

// // Challenge
// console.log(`${cristianObject['firstName']} has ${cristianObject.friends.length} friends and his best friend is called ${cristianObject.friends[0]}`); 

// ===================================================================================== //

// **************
// Object Methods
// **************

// // Any function attched to an object is considered a 'method'.

// // The 'this' keyword is a method that is equal to the object that calls it.

// // 'this' can be used to help write clean dry code! Don't repeat yourself!!

// const cristian = {
//   firstName: 'Cristian',
//   lastName: 'Herrera',
//   birthYear: 1995,
//   job: 'Programmer',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2020 - birthYear;
//   // }

//   // calcAge: function () {
//   //   return 2020 - this.birthYear; // 'this' is equal to the object 'cristian'
//   // }

//   calcAge: function () {
//     this.age = 2020 - 1995; // creating new property in the object 'cristian' with the method 'this'.
//     return this.age;
//   },

//   getSummary: function () {
//       return (`${this.firstName} is a ${this.calcAge()}-old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} divers license.`);
//   }
// }; 
// console.log(cristian);

// console.log(cristian.calcAge());
// console.log(cristian.age);
// console.log(cristian.age);

// // Challenge 
// // Jonas is a 46-year old teacher, and he has a/no driver's license
// console.log(cristian.getSummary());

// ===================================================================================== //

// ***********************
// Iteration: The for Loop
// ***********************

// // Allow us to automate repetive tasks. DRY CODE.

// // A conctrol structure like if/else statements

// // Exist in every programming language.

// // Loops keep running UNTIL checked as false; set by the conditional.

// // |set value| |condition| |increase value|
// for(let rep = 1; rep <= 10; rep = rep + 1) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

// ===================================================================================== //

// ***************************************
// Looping Arrays, Breaking and Continuing 
// ***************************************

// const cristian = [
//   'Cristian',
//   'Herrera', 
//   2020 - 1995,
//   'Programmer', 
//   ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for(let i = 0; i < cristian.length; i++) {
//   // reading out array
//   console.log(cristian[i], typeof cristian[i]);

//   // looping through 'cristian' array and pushing typeof into 'types'
//   types.push(typeof cristian[i]);
// }
// console.log(types);

// const now = 2020;
// const years = [1995, 1989, 1998, 1974];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//   ages.push(now - years[i]);
// }
// console.log(ages);

// // 'continue' stops current loop and skips to next in the loop
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < cristian.length; i++) {
//   if (typeof cristian[i] !== 'string') continue;

//   console.log(cristian[i], typeof cristian[i]);
// }

// // 'break' compeletely terminates the whole loop
// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < cristian.length; i++) {
//   if (typeof cristian[i] === 'number') break;

//   console.log(cristian[i], typeof cristian[i]);
// }

// ===================================================================================== //

// ************************************
// Looping Backwards and Loops in Loops
// ************************************




// ===================================================================================== //

// **************
// The while Loop
// **************




// ===================================================================================== //

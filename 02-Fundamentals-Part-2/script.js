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
// console.log(appleOrangeJuice);\

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


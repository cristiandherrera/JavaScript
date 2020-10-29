// ************************
//  Values and Variables //
// ************************

// // A 'variable' is a container(let, const, var) that holds a 'value'. //

// let js = 'amazing';

// // Naming conventions // 

// // A 'variable should always have meaning //
// // Camel casing - any word subsequent of the first should be capitalized //

// let firstName = 'cristian';
// let lastName = 'herrera';
// let eyeColor = 'green';

// // Only characters allowed when declaring variables: letters, numbers(except at beginning), $, and _. //

// let cristian_herrera = 'CH';
// let $function = "money";

// // All capital variables should never change values //

// const PI = 3.14;

// ================================================================================= //

// **********
// Data Types
// **********

// Two sets of Data Types - "Objects" and "Primitive"

// There are 7 primitive data types and they are 'numbers', 'strings', 'boolean', 'undefined', 'null', 'symbol', and 'bigint'.

// The 'typeof' property is an 'operator' that tells you the 'value' type.

// let javascriptIsFun;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year = (1991);
// console.log(typeof year);

// ================================================================================= //

//********************
// Let, Const, and Var
//********************


// let age = 25;
// age = 26;

// const birthYear = 1995;
// birthYear = 1994; //<<<ERROR -cannot re assign values with 'const'.
// const job; //<<<ERROR -cannot leave value empty with 'const'.

// var legs = "two legs";
// legs = "one leg"; 

// lastName = 'Herrera'; //< BAD PRACTICE -Do not assign values without using variable keys.
// console.log(lastName); 

// ================================================================================= //

// ***************
// Basic Operators
// ***************


// const now = 2037;
// const ageDiego = now - 1995;
// const ageSarah = now - 2018;
// console.log(ageDiego, ageSarah);

// console.log(ageDiego * 2, ageDiego / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

// const firstName = 'Cristian';
// const lastName = 'Herrera';
// console.log(firstName + ' ' + lastName);

// // Assignment operators

// let x = 10 + 5;
// x += 10; //x = x + 10 
// x *= 4; //x = x * 4 
// x++; //x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators 
// console.log(ageDiego > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// ================================================================================= //

// *******************
// Operator Precedence
// *******************

// Basically the order of operations from fucking elementary school. Why am I learning this again?

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const now = 2037;
// const ageDiego = now - 1995;
// const ageSarah = now - 2018;
// console.log(ageDiego, ageSarah);

// const averageAge = (ageDiego + ageSarah) / 2;
// console.log(ageDiego, ageSarah, averageAge);

// ================================================================================= //

// *****************************
// Strings And Template Literals
// *****************************

// // The new ES6 way to concatenate strings is with (`) instead of quotes.. 

// // CAN include only javascript VALUES with (${}).< NOT STATEMENTS!!(if/else, funciton..)

// let firstName = "cristian";
// let profession = "bum!"
// let age = 25;
// let me = "My name is " + firstName + " and I am a " + age + " year-old " + profession;
// console.log(me);

// console.log("String with \n\
// multiple \n\
// lines");

// // THE NEW WAY BELOW!! 

// let theNewMe = `My name is ${firstName} and I am a ${age} year-old ${profession}`
// console.log(theNewMe);

// console.log(`Another string
// with multiple 
// lines!`)

// ================================================================================= //

// ********************
// If / Else Statements
// ********************

// These statements allow conditional bits of code to run, if true or false, run code.

// const age = 19;

// if (age <= 21) {
//   console.log(`I am sorry but you are ${21 - age} years too young.`)
// } else {
//   console.log(`You are old enough to drink!`)
// }

// const birthYear = 1995
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// } 
// console.log(century);

// ================================================================================= //

// ****************************
// Type Conversion and Coercion 
// ****************************

// // Type conversion is manually changing the data type

// // Type coercion is when the data type changes automatically

// // Type Conversion
// const inputYear = '1995';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("cristian"));
// console.log(typeof NaN);

// console.log(String(23), 23)

// // Type Coercion 
// console.log("I am " + 23 + " year old"); // '+' coercions to strings 
// console.log("23" - "10" - 3); // everything else turns to number '-', '*', etc.
// console.log("23" * "2");
// console.log("23" > "18"); // coercions into boolean

// let n = "1" + 1; // "11"
// n = n - 1;  // coercions "11" into number then subtracts
// console.log(n);

// ================================================================================= //

// ***********************
// Truthy and Falsy Values
// ***********************

// There are 6 total falsy values: false, 0, "",undefined, null, NaN, and false.

// EVERYTHING else is considered truthy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));

// console.log(Boolean("Cristian"));
// console.log(Boolean(1));
// console.log(Boolean({}));

// const money = 0; 
// if (money) {
//   console.log(`Don't spend it all!!`);
// } else {
//   console.log(`Get a job!`);
// }

// let height;
// if (height) {
//    console.log(`YAY! Height is defined!`);
// } else {
//   console.log(`Height is UNDEFINED`);
// }
// height = 'literally anything else';
// if (height) {
//    console.log(`YAY! Height is defined!`);
// } else {
//   console.log(`Height is UNDEFINED`);
// }

// ================================================================================= //

// *******************
// Equality Operators 
// *******************

// // The triple equal operator(strict) does NOT perform type coercion
// // The double equal operator(loose) DOES perform type coercion

// // BEST PRACTICE: only use the strict operator( === / !==)

// const favorite = Number(prompt(`What's you favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 8) {
//   console.log(`Yeah I agree, 8 is a pretty cool number!`)
// } else if(favorite === 24) {
//   console.log(`Yeah I agree, 24 is a pretty cool number!`)
// } else if(favorite === 32) {
//   console.log(`Yeah I agree, 32 is a pretty cool number!`)
// } else {
//   alert(`Hey, what is your deal??`)
// }

// if(favorite !== 8) console.log(`Why not 8?`);

// ================================================================================= //

// ****************
// Boolean Logic //
// ****************

// AND operator: all must be true to execute 
// OR operator: only one must be true to execute
// !NOT operator: inverts boolean type (false = true) / (true = false)

// ================================================================================= //

// ********************
// Logical Operators //
// ********************

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// ================================================================================= //

// ********************
// The Switch Statement 
// ********************

// // The Switch is ONLY used for testing equality(===);

// // Does NOT perform type coercion!!!

// // Switch statement falling out of popularity?? - Jonas

// const day = 1;

// switch(day) { // if(day...
//   case 1: //           ... === 'monday');
//     console.log("Code from 6am to 6pm!");
//     console.log("Intake coding theory till bed..");
//     break; // stops execution code
//   case 'tuesday': //    ... === 'tuesday');
//     console.log('Go on bike ride!!');
//     break;
//   case 'wednesday':
//   case 'thursday': 
//     console.log('Coding bootcamp again!!');
//     break;
//   case 'friday':
//     console.log('Go grocery shopping.');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('My days of rest!');
//     break;
//   default:
//     console.log('Not a valid day!')
// }

// // Same logic BUT with an if/else statement!

// if(day === 'monday') { // switch(day) {case 'monday':}
//   console.log("Code from 6am to 6pm!");
//   console.log("Intake coding theory till bed..");
// } else if(day === 'tuesday') {
//   console.log('Go on bike ride!!');
// } else if(day === 'wednesday' || day === 'thursday') {
//   console.log('Coding bootcamp again!!');
// } else if (day === 'friday') {
//   console.log('Go grocery shopping.');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('My days of rest!');
// } else {
//   console.log('Invalid day')
// };

// ================================================================================= //

// **************************
// Statements and Expressions
// **************************

// // An expression: a piece of code that produces a value!

// // A statement: the structure of the code but does NOT produce any value.

// // Example: Think of 'statements' as sentences/ Think of 'expressions' as the words


// // EXPRESSIONS
// 3 + 4
// 1991
// true && false && !false
 
// // STATEMENTS
// // This block of code below is a statement but individual pieces of it are expressions
// if (23 > 10) {
//   const str = '23 is bigger'; 
// }

// ================================================================================= //

// **********************************
// The Conditional (Ternary) Operator
// **********************************

// Ternary Operator is like an if/else statement BUT is NOT a statement.

// A ternary operator MUST contain its version of 'else', which is the ':'.

// Since a ternary(?) is an operator(outputs a value) it is a expression!!

// Ternary Operator can be passed into a template literal BECAUSE its an expression.

// // let x = ([if]conditionals) 
// // ? (value) 
// // :[else] (value) 

// const age = 26;

// const drink = 
// age >= 21 
// ? 'beer!' 
// : 'water.';
// console.log(drink);

// let ifAge = 21;
// if(ifAge >= 21){
//   ifAge = 'beer!';
// } else {
//   ifAge = 'water.'
// }
// console.log(ifAge);


// console.log(`I like to drink ${age >= 21 ? 'beer!' : 'water.'}`);

// // // Trying to pass a if statement into template literals <<ERROR 
// // console.log(`I like to drink ${if(ifAge >= 21){
// //   ifAge = 'beer!';
// // } else {
// //   ifAge = 'water.'
// // }}`);

// ================================================================================= //


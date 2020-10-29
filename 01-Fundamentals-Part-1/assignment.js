// ************************
//  Values and Variables //
// ************************

// let country = "USA";
// let continent = "North America";
// let population = "331 Million(2020)";

// console.log(country);
// console.log(continent);
// console.log(population);

// ====================================================================================//

// *************
// Data Types //
// *************

// let country = 'usa';
// let population = 331;
// let isIsland = false;
// let language;

// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// =====================================================================================//

//***********************
// Let, Const, and Var //
//***********************

// const language = "english";
// const country = "U.S.A";
// const continent = "North America";
// let population = 331000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// country = 'CHINA';

// =====================================================================================//

// ******************
// Basic Operators //
// ******************

// let usaPop = 350 / 2;
// usaPop += 1;
// console.log(usaPop);

// const finland = 6;
// console.log(usaPop > finland);

// const avgPop = 33;
// console.log(usaPop < avgPop);

// const description = "The U.S.A population cut in half is " + usaPop + " million. Which is way above the average per country which is " + avgPop + " million.";
// console.log(description);

// =====================================================================================//

// *****************************
// Stings and Temperate Literals 
// *****************************

// let usaPop = 350;
// const avgPop = 33;

// const description = `The U.S.A population cut in half is ${usaPop} million. Which is way above the per country average which is around ${avgPop} million!`
// console.log(description);

// =====================================================================================//

// ********************
// If / Else Statements
// ********************

// const avgPop = 33;
// let population = 24;

// if(population > avgPop){
//   console.log(`My countries population of ${population} million is above the world average.`);
// } else {
//   console.log(`My countries population is ${avgPop - population} million below average.`);
// }

// =====================================================================================//

// ****************************
// Type Conversion and Coercion 
// ****************************

// console.log('9' - '5'); // number 4 
// console.log('19' - '13' + '17'); // string "617"
// console.log('19' - '13' + 17); // number 23
// console.log('123' < 57); // boolean false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // number 1143


// =====================================================================================//

// ******************
// Equality Operators 
// ******************

// const numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));

// if(numNeighbors === 1) {
//   console.log(`Only 1 border!`);
// } else if(numNeighbors > 1) {
//   console.log(`More than 1 border!`);
// } else {
//   console.log(`No borders`);
// }

// // '===' is best practice(will avoid potential bugs!)


// =====================================================================================//

// *****************
// Logical Operators
// *****************

// const myCountry = "U.S.A"
// const language = 'english';
// const population = 320;
// const isIsland = false;

// if(language === 'english' && population < 50 && !island) {
//   console.log(`You should live in Portugal!`);
// } else {
//   console.log(`Sorry I guess the ${myCountry} is not for you!!`);
// }

// =====================================================================================//

// ********************
// The Switch Statement 
// ********************

// const language = 'arabic';

// switch(language) { // if(language ...
//   case 'chinese': //              ... === 'chinese');
//   case 'mandarin': //             ... === 'mandarin');
//     console.log('MOST number of native speakers!!');
//     break;
//   case 'spanish':
//     console.log('2nd number of native speakers.')
//     break;
//   case 'english': 
//   console.log('3rd place...');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language.');
//     break;
//   default:
//     console.log('Great language too!!')
// }

// =====================================================================================//

// **********************************
// The Conditional (Ternary) Operator 
// **********************************

// let country = 'U.S.A';
// let usa = 321;
// console.log(`${country} population is ${usa > 33 ? `above` : `below`} average!`);

// =====================================================================================//

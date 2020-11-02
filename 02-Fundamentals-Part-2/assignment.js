// *********
// Functions
// *********

// function describeCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`
//   return countryInfo;
// }

// const usa = describeCountry('America', 321, 'Washington D.C');
// console.log(usa);

// const finland = describeCountry('Finland', 6, 'Helsinki');
// console.log(finland);

// const southKorea = describeCountry('South Korea', 51, 'Seoul');
// console.log(southKorea);

// ===================================================================================== //

// *************************************
// Function Declarations vs. Expressions
// *************************************

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// } 
// const usa = percentageOfWorld1(331);
// const china = percentageOfWorld1(1441);
// const india = percentageOfWorld1(1380);
// console.log(usa, china, india);


// const percentageOfWorld2 = function(population) {
//   return (population / 7900) * 100;
// }
// const usa2 = percentageOfWorld2(331);
// const china2 = percentageOfWorld2(1441);
// const india2 = percentageOfWorld2(1380);
// console.log(usa2, china2, india2);

// ===================================================================================== //

// ***************
// Arrow Funcitons 
// ***************

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const usa = percentageOfWorld3(331);
// const china = percentageOfWorld3(1441);
// const india = percentageOfWorld3(1380);
// console.log(usa, china, india);

// ===================================================================================== //

// *********************************
// Functions Calling Other Functions
// *********************************

// // DECLARATION FUNCTION
// function percentageOfWorld(percentPop) {
//   return (percentPop / 7900) * 100;
// } 
// function describePopulation(country, population) {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }
// /////////////////////////////

// // EXPRESSION FUNCTION
// const percentageOfWorld = function(percentPop){
//   return (percentPop / 7900) * 100;
// }
// const describePopulation = function(country, population) {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }
// ///////////////////////////

// // // ARROW FUNCTION
// const percentageOfWorld = percentPop => (percentPop / 7900) * 100;
// const describePopulation  = (country, population) => {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }

// console.log(describePopulation('USA', 331));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('India', 1380));

// ===================================================================================== //

// **********************
// Introduction to Arrays
// **********************

// const populations = [331, 1441, 1380, 52];

// if(populations.length === 4) {
//   console.log(true)
// } else { 
//   console.log(false);
// }

// const percentageOfWorld = function(percentPop){
//   return (percentPop / 7900) * 100;
// }

// const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[populations.length-1])];
// console.log(percentages);

// ===================================================================================== //

// *******************************
// Basic Array Operations(Methods)
// *******************************




// ===================================================================================== //

// ***********************
// Introduction to Objects 
// ***********************



// ===================================================================================== //

// ************************
// Dot vs. Bracket Notation 
// ************************




// ===================================================================================== //

// **************
// Object Methods
// **************




// ===================================================================================== //

// ***********************
// Iteration: The for Loop
// ***********************




// ===================================================================================== //

// ***************************************
// Looping Arrays, Breaking and Continuing 
// ***************************************




// ===================================================================================== //

// ************************************
// Looping Backwards and Loops in Loops
// ************************************




// ===================================================================================== //

// **************
// The while Loop
// **************




// ===================================================================================== //

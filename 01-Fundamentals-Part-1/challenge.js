// *******************
// Coding Challenge #1.
// *******************


// TEST DATA 1:
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let marksBMI = markMass / markHeight **2;
// let johnsBMI = johnMass / johnHeight **2;
// let markHigherBMI = marksBMI > johnsBMI;

// console.log(marksBMI, johnsBMI, markHigherBMI);

// //TEST DATA 2:
// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// marksBMI = markMass / markHeight **2;
// johnsBMI = johnMass / johnHeight **2;
// markHigherBMI = marksBMI > johnsBMI;

// console.log(marksBMI, johnsBMI, markHigherBMI);

// =====================================================================================//

// *******************
// Coding Challenge #2.
// *******************

// marksBMI = 27.3;
// johnsBMI = 26.8;

// if(marksBMI > johnsBMI){
//   console.log(`Marks BMI(${marksBMI}) is higher than Johns(${johnsBMI})!`);
// } else {
//   console.log(`Johns BMI(${johnsBMI})is higher than Marks(${marksBMI})!`)
// }

// =====================================================================================//

// *******************
// Coding Challenge #3.
// *******************

// let dolphinsAvg = (96 + 108 + 89) / 3;
// let koalasAvg = (89 + 91 + 110) / 3;
// console.log(dolphinsAvg);
// console.log(koalasAvg);

// if(dolphinsAvg > koalasAvg) {
//   console.log(`Team Dolphins is the winner!!`);
// } else if(koalasAvg > dolphinsAvg) {
//   console.log(`Team Koalas is the winner!!`);
// } else {
//   console.log(`There was a draw!!`);
// }

// let dolphinsAvg = (97 + 112 + 101) / 3;
// let koalasAvg = (109 + 95 + 123) / 3;
// console.log(dolphinsAvg);
// console.log(koalasAvg);

// if(dolphinsAvg <= 100 && koalasAvg <= 100){
//   console.log(`Teams did not meet minimum...`)
// } else if(dolphinsAvg > koalasAvg) {
//   console.log(`Team Dolphins is the winner!!`);
// } else if(koalasAvg > dolphinsAvg) {
//   console.log(`Team Koalas is the winner!!`);
// } else {
//   console.log(`There was a draw!!`);
// }

// let dolphinsAvg = (97 + 112 + 101) / 3;
// let koalasAvg = (109 + 95 + 106) / 3;
// console.log(dolphinsAvg);
// console.log(koalasAvg);

// if(dolphinsAvg <= 100 && koalasAvg <= 100){
//   console.log(`Teams did not meet minimum...`);
// } else if(dolphinsAvg > koalasAvg) {
//   console.log(`Team Dolphins is the winner!!`);
// } else if(koalasAvg > dolphinsAvg) {
//   console.log(`Team Koalas is the winner!!`);
// } else if(dolphinsAvg === koalasAvg){
//   console.log(`There was a draw!!`);
// } else {
//   console.log(`ERROR`);
// }

// =====================================================================================//

// *******************
// Coding Challenge #4.
// *******************

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


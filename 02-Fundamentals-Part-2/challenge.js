// *******************
// Coding Challenge #1.
// *******************

// // Calculating the avg scores
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test Data 1
// const dolphinsData1 = calcAverage(44, 23, 71);
// const koalasData1 = calcAverage(65, 54, 49);
// console.log(dolphinsData1, koalasData1);

// // Test Data 2 
// const dolphinsData2 = calcAverage(85, 54, 41);
// const koalasData2 = calcAverage(23, 34, 27);
// console.log(dolphinsData2, koalasData2);

// // Checking winner
// const checkWinner = function (avgDolphins, avgKoalas) 
// {
//   if (avgDolphins >= 2 *avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if(avgKoalas >= 2 *avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`NO teams won!`)
//   }
// }
// // Test 1
// checkWinner(dolphinsData1, koalasData1);
// // Test 2
// checkWinner(dolphinsData2, koalasData2);

// ===================================================================================== //

// *******************
// Coding Challenge #2. 
// *******************

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// ===================================================================================== //

// *******************
// Coding Challenge #3.
// *******************

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69, 

//   calcBMI: function() {
//     this.marksBMI = this.mass / this.height **2;
//     return this.marksBMI;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95, 

//   calcBMI: function() {
//     this.johnsBMI = this.mass / this.height **2;
//     return this.johnsBMI;
//   }
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if(mark.marksBMI > john.johnsBMI) {
//   console.log(`${mark.fullName}'s BMI(${mark.marksBMI}) is higher than ${john.fullName}'s(${john.johnsBMI}).`);
// } else {
//   console.log(`${john.fullName}'s BMI(${john.marksBMI}) is higher than ${mark.fullName}'s(${mark.johnsBMI}).`);
// }

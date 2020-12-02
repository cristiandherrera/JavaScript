"use strict";

// *******************
// Coding Challenge #1
// *******************

// // DATA 1:
// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];

// // DATA 2:
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// // 1.
// const checkdogs = function (arr1, arr2) {
//   // 2.
//   const newArr = arr1.slice();
//   newArr.splice(0, 1);
//   newArr.splice(-2);
//   console.log(newArr);
//   // 3.
//   const concatArr = newArr.concat(arr2);
//   console.log(concatArr);
//   // 4.
//   concatArr.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy!`);
//     }
//   });
// };

// // 5.
// checkdogs(dogsJulia1, dogsKate1);
// checkdogs(dogsJulia2, dogsKate2);

// *******************
// Coding Challenge #2
// *******************

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (age) {
//   // 1.
//   const humanYears = age.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanYears);
//   // 2.
//   const old = humanYears.filter((age) => age >= 18);
//   console.log(old);
//   // 3.
//   const avg = old.reduce((age, curr) => age + curr, 0) / old.length;
//   console.log(avg);
// };
// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

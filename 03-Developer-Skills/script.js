"use strict";

// PROBLEM:
// We work for a company building a smart home thermometer. Out most recent task is this: "Given an array of temperatures of one day, calculate the temperatur amplitude. Keep in mind that sometimes ther might be a sensor error."

const temeratures = [3, -2, -6, , -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understandin the problem
//  - What is temp amplitude? Andwer: difference between highest and lowest temp
//  - How to cmpute max and min temperatures?
//  - What's a sensor error? And what to do?

// 2. Breaking up into sub-problems
//  - How to ignore errors?
//  - Find max value in temp array
//  - Find min value in temp array
//  - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 4, 1, 8]);
console.log(amplitude);

// PROBLEM 2:
// Function should now recieve two arrays of temps

// 1. Understanding the problem
//  - With two arrays, should we implement functionality twice?? No! Just merge two arrays

// 2. Breaking up into sub-problems
//  - Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

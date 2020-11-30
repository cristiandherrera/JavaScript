"use strict";

// *******************
// Coding Chalenge # 1
// *******************

// const poll = {
//   question: "What is your favorite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//   registerNewAnswer() {
//     const [zero, one, two, three] = this.options;
//     const promptAnswer = Number(
//       prompt(
//         `${this.question} \n ${zero} \n ${one} \n ${two} \n ${three} \n (Write option number)`
//       )
//     );

//     if (promptAnswer === 0) {
//       this.answers[0] += 1;
//     } else if (promptAnswer === 1) {
//       this.answers[1] += 1;
//     } else if (promptAnswer === 2) {
//       this.answers[2] += 1;
//     } else if (promptAnswer === 3) {
//       this.answers[3] += 1;
//     } else {
//       alert(`WRONG INPUT`);
//       this.registerNewAnswer();
//       return;
//     }
//     this.displayResults();
//     this.displayResults("string");
//   },

//   displayResults(type = "array") {
//     type === "array"
//       ? console.log(this.answers)
//       : type === "string"
//       ? console.log(`Poll results are ${this.answers.join(", ")}`)
//       : console.log("ERROR: wrong input type");
//   },

//   // This generates [0, 0, 0, 0,]. More in the next section...
//   answers: new Array(4).fill(0),
// };

// const registerNewAnswer = poll.registerNewAnswer.bind(poll);
// document.querySelector(".poll").addEventListener("click", registerNewAnswer);

// // const data1 = [5, 2, 1];
// // poll.displayResults.call(poll, ...data1);
// // const data2 = [1, 5, 3, 9, 6, 1];
// // poll.displayResults.call(poll, ...data2);

// poll.displayResults.call({ answers: [5, 2, 1] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// *******************
// Coding Chalenge # 2
// *******************

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// 1.

/*
 Explain why the event listener function worked because of closure!!

   The IIFE(Immediately Invoked Function Expression) as the name suggestes was immediately executed. Leaving us to believe that since the function was ran, the execution context and the varible environment left with it when the function was 'popped off' the call stack. 
    
   BUT REMEMBER that closures allow the function to remember the variable environment of the execution context it was called in!!

   The IIFE was called and executed and popped of the call stack leaving the JS engine. BUT when we call the 'addeventlistener' function by clicking on the 'body' of the page, it has to remember its variable environment to be able to call on the variable 'header' to change it!! Without closures the event listener would have no idea what 'header' even is. 
*/

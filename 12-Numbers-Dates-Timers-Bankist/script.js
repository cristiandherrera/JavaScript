"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

// DISPLAYING TRANSACTIONS
const displayMovements = function (acc, sort = true) {
  // Setting HTML within '.movements' class to empty
  containerMovements.innerHTML = "";
  // Variable to sort based on 'sort' boolean value
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // Looping through function argument 'acc'
  movs.forEach(function (mov, i) {
    // Creating string on whether value is below or above 0
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth()}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    // Creating string of html to create a new row to display withdrawals and deposits
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}</div>
      </div>
     `;
    // Inserting HTML using the string from variable 'html'
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// CALCULATING AND DISPLAYING BALANCE
const calcDisplayBalance = function (acc) {
  // Using reduce() to create the sum of withdrawls and deposits
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  // Updating text to display calculations
  labelBalance.textContent = `${acc.balance.toFixed(2)} EUR`;
};

// CALCULATING AND DISPLAYING SUMMARY
const calcDisplaySummary = function (acc) {
  // Display incomes
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  // Display out
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // Display interest
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// COMPUTING USERNAME OBJECTS
const createUsernames = function (accs) {
  // Looing through 'accs' arg using forEach() SO we can mutate the ORIGINAL accounts array.("side effects")
  accs.forEach(function (acc) {
    // Creating property 'username' for each account object using the property 'owner' as a beginning value
    acc.username = acc.owner
      // Manipulating the string to create intials of the name
      .toLowerCase()
      .split(" ")
      // Creating new simple array with map() to actually grab the intials
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

// UPDATE UI LOGIC
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

// FAKE LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// LOGIN LOGIC
btnLogin.addEventListener("click", function (e) {
  // Stops the html element 'form' automatic reload of page when 'click' event is fired
  e.preventDefault();
  // Setting 'currentAccount' to value of input user login
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // Checking if value of the input pin is matached to the 'currentAccount' pin
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// TRANSFER MONEY LOGIC
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcc);

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementDates.push(new Date().toISOString());
    recieverAcc.movementDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

// REQUEST LOAN LOGIC
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  // Variable of input value
  const amount = Math.floor(inputLoanAmount.value);
  // Checking loan conditions
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  // reset input text
  inputLoanAmount.value = "";
});

// CLOSE ACCOUNT LOGIC
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Removing inputs
  inputCloseUsername.value = inputClosePin = "";
});

// SORT BUTTON LOGIC
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// **************
// Creating Dates
// **************

/*
 The Date() constructor: Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


 Date: Object that represents a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
*/

// // Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2020 18:05:41")); // Sun Aug 02 2020 18:05:41 GMT-0700
// console.log(new Date("December 24, 2020")); // Thu Dec 24 2020 00:00:00 GMT-0800
// console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 13:31:17 GMT-0800

// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0800
// console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT-0800

// console.log(new Date(0)); // Wed Dec 31 1969 16:00:00 GMT-0800
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 16:00:00 GMT-0800 (3 days later)

// // Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth() + 1); // 11
// console.log(future.getDate()); // 19
// console.log(future.getDay()); // 4
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getSeconds()); // 0
// console.log(future.toISOString()); // 2037-11-19T23:23:00.000Z
// console.log(future.getTime()); // 2142285780000 (time stamp)

// console.log(new Date(2142285780000)); // Thu Nov 19 2037 15:23:00 GMT-0800

// console.log(Date.now()); // 1607671348244

// future.setFullYear(2040); // Mon Nov 19 2040 15:23:00 GMT-0800
// console.log(future);

// ****************************
// Working with BigInt (ES2020)
// ****************************

/*
 BigInt: is a built-in object that provides a way to represent whole numbers larger than (2**53 - 1), which is the largest number JavaScript can reliably represent with the Number primitive.

   OPERATIONS: is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().

   DIFFERENCES: CANNOT be used with methods in the built-in Math object and CANNOT be mixed with instances of Number

   EXCEPTIONS: behaves like a Number when it is converted to a BOOLEAN, when used with LOGICAL OPERATORS, can be CONCATENATED into string, within a CONDITIONAL test like an if statement.

 Number.MAX_SAFE_INTEGER: is constant represents the maximum safe integer in JavaScript. (2**53 - 1)

*/

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(156674646748465449648774878946787787946n);
// console.log(BigInt(1566746467));

// // Operations
// console.log(1000n + 1000n);
// console.log(45456464646494876764984787845378676n * 10000000n);

// const huge = 1564646464634644564694n;
// const num = 25;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(typeof 20n); // bigint
// console.log(20n == "20"); // true

// // Divisons
// console.log(10n / 3n); // 3n
// console.log(10 / 3); // 3.3333...

// **********************
// The Remainder Operator
// **********************

/*
 The remainder operator (%): returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
*/

// console.log(5 % 2); // 1
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3); // 2
// console.log(8 / 3); // 8 = 3 * 2 + 2

// console.log(6 % 2); // 0
// console.log(6 / 2); // 6 = 2 * 3 + 0

// console.log(7 % 2); // 1
// console.log(7 / 2); // 7 = 2 * 3 + 1

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(644));

// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "#c6def1";
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = "#c9e4de";
//     }
//   });
// });

// *****************
// Math and Rounding
// *****************

/*
 Math: is a build in project that has properties and methods for mathematical constants and functions. It is NOT a function object.

   Math.sqrt(): returns square root of a given number
   Math.max(): returns the largest of zero or more numbers
   Math.min(): returns the smallest of zero or more numbers
   Math.random(): returns a pseudo-random number between 0 and 1
   Math.trunc(): returns the integer part of a number by removing any fractional digits
   Math.round(): return a number rounded to the nearest integer
   Math.ceil(): rounds up a number up to the next largest integer
   Math.floor(): returns largest integer less than or equal to a given number
   Math.PI: contains the value of PI(circles circumference)

 The toFixed() method: formats a number using fixed-point notation
   SYNTAX: numObj.toFixed([digits])
 */

// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5
// console.log(8 ** (1 / 3)); // 2

// console.log(Math.max(5, 12, 23, 11, 2)); // 23
// console.log(Math.max(5, 12, "23", 11, 2)); // 23
// console.log(Math.max(5, 12, "23px", 11, 2)); // NaN

// console.log(Math.min(5, 12, 23, 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// // Rounding Integers
// console.log(Math.round(23.3)); // 23
// console.log(Math.round("23.9")); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil("23.9")); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor("23.9")); // 23

// console.log(Math.trunc(23.3)); // 23

// console.log(Math.trunc(-23.3)); // -24
// console.log(Math.floor(-23.3)); // -23

// // Rounding decimals
// console.log((2.7).toFixed(0)); // '3'
// console.log((2.7).toFixed(3)); // '2.700'
// console.log((2.345).toFixed(2)); // '2.35'
// console.log(+(2.345).toFixed(2)); // 2.35

// *******************************
// Converting and Checking Numbers
// *******************************

/*
 How Javascript represents numbers...

   In JS all numbers are presented internally as floating point numbers. So basically, always as decimals, no matter if we actually write them as integers or as decimals. 

   Base-2 format: Numbers are always stored in a BINARY format. So basically, they're only composed of zeros and ones. Ex. 0s, and 1s.

   NOT base-10: Known as system decimal. Ex. numbers 0 - 9

   USE: CANNOT use JS to do percise scientific or financial calculations because of its base-2 format

 Pasrsing functions: 

   The parseInt() function: parses a string arg and returns an integer of the specified radix(base)
     SYNTAX: parseInt(string [, radix]) 

   The parseFloat() function: parses an argument(converting first into string if needed) and returns floating point number.
     SYNTAX: parseFloat(string) 

 Checking for value functions: 
  
   The isNaN() function: determines whether a value is 'NaN' or not.
     SYNTAX: isNaN(value)

   The isFinite() function:  determines whether the passed value is a finite number.
    SYNTAX: isFinite(testValue)

 MODERN JS: calling all these functions on the 'Number' object. (ECMA script 2015)
*/

// console.log(23 === 23.0); // true

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // CONVERSION
// console.log(Number("23")); // 23
// console.log(+"23"); // 23

// // PARSING
// console.log(Number.parseInt("30px", 10)); // 30
// console.log(Number.parseInt("e23", 10)); // NaN - must start with a number

// console.log(Number.parseInt("2.5rem")); // 2
// console.log(Number.parseFloat("2.5rem")); // 2.5

// // CHECKING VALUE FOR NUMBER

// // Check if value is 'NaN'
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN("20")); // false
// console.log(Number.isNaN(+"20X")); // true
// console.log(Number.isNaN(23 / 0)); // false

// // Check if value is a number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite("20")); // false
// console.log(Number.isFinite(23 / 0)); // false

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
const displayMovements = function (movements, sort = true) {
  // Setting HTML within '.movements' class to empty
  containerMovements.innerHTML = "";
  // Variable to sort based on 'sort' boolean value
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // Looping through function argument 'movements'
  movs.forEach(function (mov, i) {
    // Creating string on whether value is below or above 0
    const type = mov > 0 ? "deposit" : "withdrawal";
    // Creating string of html to create a new row to display withdrawals and deposits
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
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
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// LOGIN LOGIC
let currentAccount;
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
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

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
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

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

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 12, 23, 11, 2)); // 23
console.log(Math.max(5, 12, "23", 11, 2)); // 23
console.log(Math.max(5, 12, "23px", 11, 2)); // NaN

console.log(Math.min(5, 12, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat("10px") ** 2);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.round(23.3)); // 23
console.log(Math.round("23.9")); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil("23.9")); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor("23.9")); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -24
console.log(Math.floor(-23.3)); // -23

// Rounding decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35

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

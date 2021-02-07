"use strict";

// *******************
// Coding Challenge #1
// *******************

// // 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);
// console.log(car1, car2);
// console.log("");

// // 2.
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this);
// };

// // 3.
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this);
// };

// // 4.
// car1.accelerate();
// car1.accelerate();
// car1.brake();

// console.log("");

// car2.accelerate();
// car2.accelerate();
// car2.brake();

// *******************
// Coding Challenge #2
// *******************

// 1.
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     console.log(speed);
//     return (this.speed = speed * 1.6);
//   }
// }

// // 4.
// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUs = 60;
// console.log(ford);

// *******************
// Coding Challenge #3
// *******************

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this);
// };

// // 1.
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// // 2.
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// // 3.
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `This EV ${this.make} is going ${this.speed} km/h with a battery charge of ${this.charge}%`
//   );
// };

// // 4.
// const tesla = new EV("Tesla", 120, 23);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(99);
// console.log(tesla);

// *******************
// Coding Challenge #4
// *******************

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this);
//   }
//   brake() {
//     this.speed -= 5;
//     this.message();
//     return this;
//   }
//   get speedUs() {
//     console.log(this.speed, "MPH");
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     console.log(speed, "MPH");
//     return (this.speed = speed * 1.6);
//   }
// }

// // 1.
// class EVCl extends CarCl {
//   // 2.
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     this.message();
//     return this; // 3.
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     this.message();
//     return this; // 3.
//   }
//   message() {
//     console.log(
//       `This EV ${this.make} is going ${
//         this.speed
//       } km/h with a battery charge of ${this.#charge}%`
//     );
//   }
// }

// const rivian = new EVCl("Rivian", 120, 23);
// console.log(rivian);
// // console.log(rivian.#charge); << PRIVATE

// rivian
//   .accelerate()
//   .accelerate()
//   .brake()
//   .accelerate()
//   .chargeBattery(100)
//   .brake();

// rivian.speedUs;
// rivian.speedUs = 500;

// rivian.brake();

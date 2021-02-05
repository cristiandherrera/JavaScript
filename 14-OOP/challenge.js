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

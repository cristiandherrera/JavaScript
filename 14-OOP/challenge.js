"use strict";

// *******************
// Coding Challenge #1
// *******************

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1, car2);
console.log("");

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this);
};
// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this);
};

// 4.

car1.accelerate();
car1.accelerate();
car1.brake();

console.log("");

car2.accelerate();
car2.accelerate();
car2.brake();

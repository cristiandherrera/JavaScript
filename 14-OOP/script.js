"use strict";

// ***********************************
// What is Object-Oriented Programming
// ***********************************

/*
 What is Object-Oriented Programming?

   - Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.

   - We use objects to model (describe) real-world or abstract features (HTML component or data structure).

   - Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block.

   - In OOP, objects are SELF-CONTAINED pieces/blocks of code.

   - Objects are BUILDING BLOCKS of applications, and INTERACT with one another.

   - Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object.

   - OOP was developed with the goal of ORGANIZING code, to make it more flexible and easier to maintain (avoid "spaghetti code").

 Classes and Instances (Traditional OOP)
   
   - In OOP we need a way to generate, to create, new objects from our code. And to do that in traditional OOP, we use something called classes.
  
   - A 'class' in OOP is a blueprint, which can then be used to create new objects based on the rules described in that class.

   - All objects created through a class are called 'instances' of that class. 

     Instantiation: The process of creating an instance. (classes creating objects)

   NOTE: An 'instance' is a real object that we can use in our code, which was created from a 'class', and a class itself is not an object.
   

 There are 4 FUNDAMENTAL PRINCIPLES that can guide us toward a good class implementation.

   1. Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

   2. Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface(API).

   3. Inheritance: Making all properties of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

   4. Polymorphism: A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes]
  
   NOTE: These are actually techniques that can also be used outside of OOP...
*/

// *****************
// OOP in Javascript
// *****************

/*
 How does OOP actually work in JS?

   In JavaScript we have something called prototypes and all objects in JavaScript are linked to a certain prototype object. So we say that each object has a prototype.

   Prototypal inheritance: The prototype object contains methods (behavior) and properties that are accessible to all objects linked to that prototype. 

     So basically, objects inherit methods and properties from the prototype.

     We can also say that objects delegate behavior (methods) to the linked prototype object. So besides prototypal inheritance, we also call this mechanism, delegation.

     COMPARISON: Prototypal inheritance is DIFFERENT from the 'inheritance' principle on class implementation learned in the previous lecture. In classical OOP with classes, the behaviors (methods) are actually copied from the class to the object and so that is completely different. So that was one class inheriting from another class. But in this case, it's basically an instance inheriting from a class.

 In practice, how do we implement OOP?
  
   1. Constructor functions
   - Technique to create objects from a function.
   - This is how built-in objects like Arrays, Maps or Sets are actually implemented.
   - Also, this is how OOP has been done in JavaScript basically since the beginning.

   2. ES6 Classes
   - Modern alternative to constructor function syntax.
   - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions. (just a nicer syntax)
   - ES6 classes do NOT behave like classes in "classical OOP".

   3. Object.create()
   - The easiest and most straight forward way of linking an object to a prototype object.
   - However, it's not as used as the other two methods

   Note: The 4 pillars of OOP are still valid!
*/

// ******************************************
// Constructor Functions and the new Operator
// ******************************************

/*
 Constructor Functions

   The constructor property returns a reference to the Object constructor function that created the instance object.

   USE: We can use constructor functions, to programmatically build an object using a function.

   DIFFERENCE: The only difference between a regular function and a function that we CALL a constructor function with the 'new' keyword.

   CONVENTION: In OOP there is a convention that constructor functions always start with a capital letter.

   REMEMBER: That function constructors are NOT really a feature of the JavaScript language. Instead, they are simply a PATTERN that has been developed by other developers.

   NOTE: An arrow function will NOT work as a function constructor because it does NOT have its own 'this' keyword. Only declaration and expression functions work.

 The 'new' Operator: Lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

   SYNTAX: new constructor[([arguments])]
     constructor - a class or functions that specifies the type of the object instance.
     arguments - a list of values that the 'constructor' will be called with.

 The 'instanceof' operator: Tests to see if the 'prototype' property of a constructor appears anywhere in the prototype chain of an object. Returns boolean.

   SYNTAX: object instanceof constructor
*/

const Person = function (firstName, birthYear) {
  // Instance properties: will be available on all instances that are created through this function.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method in a constructor function - POOR PERFORMANCE

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// Creating a object INSTANCE of 'Person' named 'cristian'
const cristian = new Person("Cristian", 1995);
console.log(cristian);

/*
 result of calling the function...

   1. new empty object is created {}
   2. function is calls, 'this' = {}
   3. {} linked to prototype
   4. function automatically return {}
*/

const matilda = new Person("Matilda", 1996);
const jack = new Person("Jack", 2017);
console.log(matilda, jack);

console.log(cristian instanceof Person);

// **********
// Prototypes
// **********

/*
 
*/

// Prototypes

// const cristian = new Person("Cristian", 1995);
// const matilda = new Person("Matilda", 1996);
// const jack = new Person("Jack", 2017);

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

   DIFFERENCE: The only difference between a regular function and a function that we CALL a constructor function with the 'new' keyword. And creates a 'this' keyword will be set to newly created object.

     NOTE: When creating objects using factory(regular) functions its __proto__ points to the Object.prototype whereas when creating objects from constructor functions it points to its constructor function prototype object. MUST use 'this' keyword to to REALLY make it a constructor function in its output and MUST use 'new' to set 'this' scoped to the newly created object.

   CONVENTION: In OOP there is a convention that constructor functions always start with a capital letter.

   REMEMBER: That function constructors are NOT really a feature of the JavaScript language. Instead, they are simply a PATTERN that has been developed by other developers.

   NOTE: An arrow function will NOT work as a function constructor because it does NOT have its own 'this' keyword. Only declaration and expression functions work.

 The 'new' Operator: Lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

   SYNTAX: new constructor[([arguments])]
     constructor - a class or functions that specifies the type of the object instance.
     arguments - a list of values that the 'constructor' will be called with.

 The 'instanceof' operator: Tests to see if the 'prototype' property of a constructor appears anywhere in the prototype chain of an object. Returns boolean.

   SYNTAX: object instanceof constructor

 LINK: https://medium.com/@chamikakasun/javascript-factory-functions-vs-constructor-functions-585919818afe
*/

// CONSTRUCTOR FUNCTION
// const Person = function (firstName, birthYear) {
//   // Instance properties: will be available on all instances that are created through this function.
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method in a constructor function - POOR PERFORMANCE

//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// // Creating a object INSTANCE of 'Person' named 'cristian'
// const cristian = new Person("Cristian", 1995);
// console.log(cristian);

// /*
//  result of calling the function...

//    1. new empty object is created {}
//    2. function is calls, 'this' = {}
//    3. {} linked to prototype (this.__proto__ = Person.prototype)
//    4. function automatically return {}
// */

// MORE INSTANCES
// const matilda = new Person("Matilda", 1996);
// const jack = new Person("Jack", 2017);
// console.log(matilda, jack);

// console.log(cristian instanceof Person);

// **********
// Prototypes
// **********

/*
 Prototypes: are the mechanism by which JavaScript objects inherit features from one another.

   Prototype is basically a property of a JavaScript function.

   Each and every function created in JavaScript automatically has a property called prototype. 

   Every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.

   So to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

   And if a property or a method cannot be found in a certain object JavaScript will look into its prototype.

 '__proto__' vs. 'prototype'

   'prototype' is the constructors PROPERTY that is used to BUILD '__proto__' when you create an object with the 'new' keyword

   '__proto__' is an OBJECT (in every class instance) that points to the 'prototype' it was created from. 

   DIFFERENCE: The only true difference between 'prototype' and '__proto__' is that the former is a property of a class constructor, while the latter is a property of a class instance.

     EX: Person.prototype provides a blueprint while 'cristian' or 'jack' affirm that the object has been made to that specific blueprint. BUT the properties and methods inside both are exactly the same.

     * BELOW: 'person.prototype' is NOT the prototype of the constructor function 'Person' even though it is called on it. But instead, it is what's gonna be used as the prototype of all the objects that are created with the person constructor function. 

     HELPFUL: Try to think of the property 'prototype' as '.prototypeOfLinkedObjects'

 The isPrototypeOf(): method checks if an object exists in another object's prototype chain.
   SYNTAX: prototypeObj.isPrototypeOf(object)
 
 The hasOwnProperty(): method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
   SYNTAX: obj.hasOwnProperty(prop)

 REMEMBER: The 'this' keyword is set to the object that is calling the method.

 LINK: https://medium.com/javascript-in-plain-english/proto-vs-prototype-in-js-140b9b9c8cd5
*/

// // USING FROM PREVIOUS SECTION
// const Person = function (firstName, birthYear) {
//   // Instance properties: will be available on all instances that are created through this function.
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // NEVER create a method in a constructor function - POOR PERFORMANCE
//   this.calcAgeBad = function () {
//     console.log(2020 - this.birthYear);
//   };
// };
// // Creating a object INSTANCE of 'Person' named 'cristian'
// const cristian = new Person("Cristian", 1995);
// const matilda = new Person("Matilda", 1996);
// const jack = new Person("Jack", 2017);

// console.log(cristian);
// console.log(matilda);
// console.log(jack);

// // PROTOTYPE
// // setting a method on the prototype
// Person.prototype.calcAgeGood = function () {
//   console.log(2020 - this.birthYear);
// };

// cristian.calcAgeBad(); // method on the object itself < BAD
// cristian.calcAgeGood(); // method on the prototype < GOOD

// console.log(cristian.__proto__); // object in the class instance of the prototype created from('cristian')
// console.log(cristian.__proto__ === matilda.__proto__); // TRUE

// // ex of the prototype chain
// console.log(cristian.__proto__ === Person.prototype); // TRUE
// console.log(cristian.__proto__.__proto__ === Object.prototype); // TRUE
// console.log(Person.prototype.__proto__ === Object.prototype); // TRUE

// // .constructor property
// console.log(Person.prototype.constructor); // points to back to constructor function
// console.log(Person.prototype); // points to prototype of all objects used with the constructor func.

// console.log(Person.prototype.constructor === Person); // /TRUE
// console.log(Person.prototype === Person.prototype.constructor.prototype); // TRUE

// // The '.prototype' property is NOT the prototype of the constructor function
// console.log(Person.prototype.isPrototypeOf(cristian)); // TRUE
// console.log(Person.prototype.isPrototypeOf(matilda)); // TRUE
// console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

// //setting a property on the prototype
// Person.prototype.species = "Homo Sapiens";
// console.log(cristian.species, matilda.species);

// // checking object if a property is actually IN the object
// console.log(cristian.hasOwnProperty("species")); // FALSE < IN the prototype
// console.log(cristian.hasOwnProperty("firstName")); // TRUE

// **********************************************
// Prototypal Inheritance and The Prototype Chain
// **********************************************

/*
 How an object is created using the new operator and the constructor function!

   1. A new empty object (like 'cristian') is created instantly.

   2. Then the 'this' keyword, in the function call, is SET to the newly created object. So, inside the function's execution context 'this' is now the new empty object.

   3. Now the new object is LINKED to the constructor functions prototype property. So, Person.prototype is now the objects prototype which is denoted with the '__proto__' property of 'cristian'. SO AGAIN, '__proto__' always points to an objects prototype, true for all objects in JS.

   4. Finally, the new object is automatically RETURNED from the function UNLESS we explicitly return something else. BUT in a constructor function we usually will never do that.

   RESULT: Is a new object that we just created programmatically and that is now stored in the 'cristian' variable and this whole process is how it works with function constructors AND ES6 classes BUT NOT with the object.create() syntax.

 Why is this technique so powerful and useful?

   If a property or a method cannot be found in a certain object in JavaScript it will look into its prototype! Thats how the calcAgeGood() function can run correctly above. And as we discussed that behavior is call PROTOTYPAL INHERITANCE or DELEGATION.

   So the 'cristian' object INHERITED the calcAgeGood() method from its prototype OR in other words it DELEGATED the calcAgeGood() functionality to its prototype.

   Now we can create as many 'Person' objects as we like and all of them will then inherit this method. So we can call this method an all 'Person' objects without the method being directly attached to the ALL the objects THEMSELVES. (essential for CODE PERFORMANCE)

 The prototype chain!

   Prototype Chain: Series of links between objects linked though prototypes. (similar to the scope chain)

     Every prototype object has a prototype of its own, and so on until an object is reached with NULL as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

     SIMILARITIES: In the scope chain whenever JS can find a certain variable in a certain scope, it looks up into the next scope and a scope chain and tries to find the variable there. And with the prototype chain whenever JavaScript can find a certain property or method in a certain object it's gonna look up into the next prototype in the prototype chain.

     EX: The fact that 'cristian' is connected to a prototype and the ability of looking up methods and properties in a prototype is what we call the prototype chain.

   LINK: https://medium.com/@chamikakasun/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04

*/

// // FROM PREVIOUS LECTURE
// // ex of the prototype chain
// console.log(cristian.__proto__ === Person.prototype); // TRUE
// console.log(cristian.__proto__.__proto__ === Object.prototype); // TRUE
// console.log(Person.prototype.__proto__ === Object.prototype); // TRUE

// // .constructor property
// console.log(Person.prototype.constructor); // points to back to constructor function
// console.log(Person.prototype); // points to prototype of all objects used with the constructor func.

// console.log(Person.prototype.constructor === Person); // /TRUE
// console.log(Person.prototype === Person.prototype.constructor.prototype); // TRUE

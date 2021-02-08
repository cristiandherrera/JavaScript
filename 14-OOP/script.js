"use strict";

// ***********************************
// What is Object-Oriented Programming
// ***********************************

/*
 What is Object-Oriented Programming?

   - Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.

   - We use objects to model (describe) real-world or abstract features (HTML component or data structure)

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

   The 'constructor' property returns a reference to the Object constructor function that created the instance object.

   USE: We can use constructor functions, to programmatically build an object using a function.

   DIFFERENCE: The only difference between a regular function and a function that we CALL a constructor function with is the 'new' keyword. And it also creates a 'this' keyword which will be set to the newly created instance object.

     NOTE: When creating objects using factory(regular) functions its '__proto__' points to the 'Object.prototype' whereas when creating objects from constructor functions it points to its constructor function prototype object. Also, MUST use 'this' keyword to to REALLY make it a constructor function in its output (when creating properties) and MUST use 'new' to set 'this' scoped to the newly created object.

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
//    2. function is called, 'this' => {}
//    3. {} is linked to prototype (this.__proto__ = Person.prototype)
//    4. function automatically return {}
// */

// MORE INSTANCES
// const matilda = new Person("Matilda", 1996);
// const jack = new Person("Jack", 2017);
// console.log(matilda, jack);

// console.log(cristian instanceof Person); // TRUE
// console.log(Person instanceof Object) // TRUE

// **********
// Prototypes
// **********

/*
 Prototypes: are the mechanism by which JavaScript objects inherit features from one another.

   Prototype is basically a property of a JavaScript function.

   Each and every function created in JavaScript automatically has a property called prototype. 

   Every object (instance) that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
   
   REMEMBER: So to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. And if a property or a method cannot be found in a certain object JavaScript will look into its prototype.

 '__proto__' vs. 'prototype'

   'prototype' is a PROPERTY of the constructor function that is used to BUILD '__proto__' when you create an object with the 'new' keyword

   '__proto__' is an OBJECT (in every class instance) that points to the 'prototype' it was created from. 

     BELOW: The 'cristian' instance's '__proto__' property points to the constructor 'Person.prototype'

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

// USING FROM PREVIOUS SECTION
const Person = function (firstName, birthYear) {
  // Instance properties: will be available on all instances that are created through this function.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create a method in a constructor function - POOR PERFORMANCE
  this.calcAgeBad = function () {
    console.log(2020 - this.birthYear);
  };
};
// Creating a object INSTANCE of 'Person' named 'cristian'
const cristian = new Person("Cristian", 1995);
const matilda = new Person("Matilda", 1996);
const jack = new Person("Jack", 2017);

console.log(cristian);
console.log(matilda);
console.log(jack);

// PROTOTYPE
// setting a method on the prototype
Person.prototype.calcAgeGood = function () {
  console.log(2020 - this.birthYear);
};

cristian.calcAgeBad(); // method on the object itself < BAD
cristian.calcAgeGood(); // method on the prototype < GOOD

// prototype and '__proto__'
console.log(cristian.__proto__); // object in the class instance of the prototype created from('cristian')
console.log(cristian.__proto__ === matilda.__proto__); // TRUE (share the same prototype)
console.log(cristian.__proto__ === Person.prototype); // TRUE

// The '.prototype' property is NOT the prototype of the constructor function
console.log(Person.prototype.isPrototypeOf(cristian)); // TRUE
console.log(Person.prototype.isPrototypeOf(matilda)); // TRUE
console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

//setting a property on the prototype
Person.prototype.species = "Homo Sapiens";
console.log(cristian.species, matilda.species);

// checking object if a property is actually IN the object
console.log(cristian.hasOwnProperty("species")); // FALSE < IN the prototype
console.log(cristian.hasOwnProperty("firstName")); // TRUE

// **********************************************
// Prototypal Inheritance and The Prototype Chain
// **********************************************

/*
 How is an object (instance) created using the new operator and the constructor function?

   1. A new empty object (instance) (like 'cristian') is created instantly.

   2. Then the 'this' keyword, in the function call, is SET to the newly created object. So, inside the function's execution context 'this' is now the new empty object.

   3. Now the new object is LINKED to the constructor functions prototype property. So, Person.prototype is now the new objects prototype which is denoted with the '__proto__' property of 'cristian'. SO AGAIN, '__proto__' always points to to the instances prototype, true for all objects in JS.

   4. Finally, the new object is automatically RETURNED from the function UNLESS we explicitly return something else. BUT in a constructor function we usually will never do that.

   RESULT: Is a new object that we just created programmatically and that is now stored in the 'cristian' variable and this whole process is how it works with function constructors AND ES6 classes BUT NOT with the object.create() syntax.

 Why is this technique so powerful and useful?

   If a property or a method cannot be found in a certain object in JavaScript it will look into its prototype! Thats how the calcAgeGood() function can run correctly BELOW. And as we discussed that behavior is called PROTOTYPAL INHERITANCE or DELEGATION.

   So the 'cristian' instance INHERITED the calcAgeGood() method from its prototype ('Person') OR in other words the prototype DELEGATED the calcAgeGood() functionality to the instance.

   Now we can create as many 'Person' instances as we like and all of them will then inherit this method. So we can call this method an all 'Person' objects without the method being directly attached to the ALL the objects THEMSELVES. (essential for CODE PERFORMANCE)

 The prototype chain!

   Prototype Chain: Series of links between objects linked though prototypes. (similar to the scope chain)

     Every prototype object has a prototype of its own, and so on until an object is reached with NULL as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

     SIMILARITIES: In the scope chain whenever JS CANNOT find a certain variable in a certain scope, it looks up into the next scope and a scope chain and tries to find the variable there. And SAME with the prototype chain, whenever JavaScript can find a certain property or method in a certain object it's gonna look up into the next prototype in the prototype chain.

     EX: The fact that the instance 'cristian' is connected to a prototype ('Person') and has the ability of looking up methods and properties in a prototype is what we call the prototype chain.

   LINK: https://medium.com/@chamikakasun/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04

 REMEMBER: that console.dir() displays an interactive list of the properties of the specified JavaScript object WHILE the console.log() method displays the 'toString' representation of any object passed to it..
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

// // Setting a method on the prototype
// Person.prototype.calcAgeGood = function () {
//   console.log(2020 - this.birthYear);
// };

// // MOVING UP THE PROTOTYPE CHAIN
// console.log(cristian.__proto__ === Person.prototype); // TRUE

// console.log(Person.prototype.__proto__ === Object.prototype); // TRUE
// console.log(cristian.__proto__.__proto__ === Object.prototype); // TRUE

// console.log(cristian.__proto__.__proto__.__proto__ === null); // TRUE (END OF THE CHAIN)

// // CONSTRUCTOR PROPERTY
// console.dir(Person.prototype.constructor); // points to back to constructor function itself
// console.log(Person.prototype); // Is the prototype of all objects used with the constructor 'Person'.

// console.log(Person.prototype.constructor === Person); // /TRUE
// console.log(Person.prototype === Person.prototype.constructor.prototype); // TRUE

// ******************************************
// Prototypal Inheritance on Built-In Objects
// ******************************************

/* 
 REMEMBER: That any function is a object, therefore, it also has a prototype!

 REMEMBER: The 'prototype' property of the constructor is going to BE the prototype of all the objects (instances) created by that constructor.

 REMEMBER: That all DOM elements behind the scenes are objects.

 NOTE: When creating objects or array literals, it is the same as creating them with the 'new' constructor functions 

 BELOW: Added a new method ('unique') to the prototype property of the array constructor. And so therefore now all arrays will inherit this method. (BAD IDEA IN PRACTICE)

    So all we would have to do is to type the syntax 'Array.prototype.[newMethod]' And then here we can add any new method to this prototype and all the arrays will then inherit
*/

// // BUILT-IN OBJECTS

// // Inheritance with Array constructor
// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // TRUE
// console.log(arr.__proto__.__proto__ === Object.prototype); // TRUE

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // DOM element
// const h1 = document.querySelector("h1");
// console.dir(h1);

// // function prototype
// console.dir((x) => x + 1);

// ***********
// ES6 Classes
// ***********

/*
 Classes: in JavaScript do not work like traditional classes in other languages like Java or C++. So instead classes in JavaScript are just synthetic sugar. (same prototypal inheritance behind the scenes BUT new modern syntax in practice)

   The 'constructor()' method: is a special method of a 'class' for creating and initializing an object of that class. Can only contain 1 'constructor()' in a class or will receive a reference error.

   Classes are a special type of functions, therefore we have class declarations and expressions

   SYNTAX: All methods that we write in the class, so outside of the constructor, will be on the prototype of the objects and not on the objects themselves.

   NOTES ON ES6 CLASSES:
   
     1. Classes are NOT hoisted (can NOT be used before declaration)
     2. Classes are first-class citizens (can pass into and from functions)
     3. Classes are executed in strict mode 
     4. Classes do NOT use commas between methods and properties.
*/

// // Class expression (unnamed)
// const PersonExp = class {};

// // Class declaration
// class PersonDec {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }
// }

// const jessica = new PersonDec("Jessica,", 1996);
// console.log(jessica);
// console.log(jessica.__proto__ === PersonDec.prototype); // TRUE

// // Setting method without ES6 syntax
// PersonDec.prototype.greet = function () {
//   console.log(`Hey my name is ${this.firstName}`);
// };
// jessica.greet();

// *******************
// Setters and Getters
// *******************

/*
 Every object in JS can have 'setter' and 'getter' properties. And we call these special properties assessor properties, while normal properties are called data properties.

   getters => access properties
   setters => change (mutate) them

 The get syntax: binds an object property to a function that will be called when that property is looked up.

   USE: Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls.

   NOTE: 
    1. It can have an identifier which is either a number or a string.
    2. It must have exactly zero parameters
    3. It must NOT appear in an object literal with another 'get' or with a data entry for the same property.

 The set syntax: binds an object property to a function to be called when there is an attempt to set that property.

   USE: A setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property.

   CONVENTION: When we have a 'setter' which is trying to set a property that already exists we add an underscore. However, when we do this we are actually creating a new variable.

   NOTE: 
     1. It can have an identifier which is either a number or a string.
     2. It must have exactly one parameter.
     3. It must not appear in an object literal another set or with a data entry for the same property.

 USE: 'setters' and 'getters' can be very USEFUL for data validation.
*/

// // OBJECT 'get' and 'set'
// const account = {
//   owner: "Cristian",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//     // return this.movements[3];
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// // you access it like a property!
// console.log(account.latest); // 300

// // you set it like a property!
// account.latest = 50;
// console.log(account.latest); // 50
// console.log(account);

// // CLASS 'get' and 'set'
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.firstName}`);
//   }

//   get age() {
//     return 2020 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name); // name = "Jessica"
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new Person("Jessica", 1996);
// console.log(jessica); // NO name yet..

// jessica.fullName = "Jessica Davis";
// console.log(jessica);

// jessica.calcAge(); // 24
// console.log(jessica.age); // 24

// const walter = new Person("Walter White", 1965);
// console.log(walter);

// *************
// Static Method
// *************

/*
 A static method: (or static function) is a method defined as a member of an object but is accessible directly from an API object's constructor (like Array), rather than from an object instance created via the constructor.

 A instance method: is a method that will be added to the prototype property and will be available through the prototype chain.
 
 REMEMBER: 

   The JavaScript 'Array' class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
 
   The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

 BELOW: 

   'Person(Obj/Cl).hey()' is basically just a simple function, but its a function that's attached to the 'Person' constructor NOT the prototype. So NO instances will inherit this method! 
   
   When creating 'PersonObj.hey()' (object method) we just omit the 'prototype' key word and when creating 'PersonCl.hey() we put they 'static' keyword in front of it!
*/

// // (STATIC) ARRAY CONSTRUCTOR METHOD
// console.log(Array.from(document.querySelectorAll("h1")));

// // USING FROM PREVIOUS SECTION
// const PersonObj = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// PersonObj.prototype.calcAgeGood = function () {
//   console.log(2020 - this.birthYear);
// };

// // STATIC METHOD WITH OBJECT
// PersonObj.hey = function () {
//   console.log("Hello there.");
//   console.dir(this); //=> points to the constructor func.
// };
// PersonObj.hey();

// // STATIC METHOD WITH CLASS (BOTTOM)
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance Methods (connected to prototype)
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.firstName}`);
//   }

//   // Static methods (connected to constructor)
//   static hey() {
//     console.log("Hey there");
//     console.dir(this);
//   }
// }
// PersonCl.hey();

// *************
// Object.create
// *************

/*
 The Object.create() method: creates a new object, and the prototype of that object will be the object that we passed in.

 Object.create vs Constructor Functions 

   In constructor functions or classes, it automatically sets the prototype of the instances to the constructors, prototype property automatically. BUT with Object.create, we can set the prototype of objects manually to any object that we want.

   We did NOT need any constructor function, and also no prototype property at all, to achieve the exact same thing. 

 NOTE: Object.create in the real world is the LEAST used way of implementing prototypal inheritance.
*/

// // Creating regular object
// const PersonProto = {
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   },

//   // Regular function (NOT CONSTRUCTOR)
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // Manually selecting 'PersonProto' to be prototype
// const jeffery = Object.create(PersonProto);
// console.log(jeffery);
// jeffery.name = "Jeffery";
// jeffery.birthYear = 1972;
// jeffery.calcAge();

// console.log(jeffery.__proto__ === PersonProto); // TRUE

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();
// console.log(sarah);

// ****************************************************
// Inheritance Between "Classes": Constructor Functions
// ****************************************************

/*
 "In this lecture, we will inherit between classes using constructor functions, so this will allow you to understand exactly how we set up the prototype chain in order to allow inheritance between the prototype properties of two different constructor functions." - Jonas

 REMEMBER: 

   The call() method: calls a function with a GIVEN 'this' value and arguments provided individually.

   Object.create() creates a NEW OBJECT, and the prototype of the new object will be passed in as an argument. 

 BELOW: 

   CAREFUL:

     When creating the link between 'Student' and 'Person', with Object.create(), we MUST place that connecting code before we add anymore methods to the prototype of 'Student' BECAUSE Object.create() will overwrite any methods placed BEFORE itself in the CODE.

     And since we set the prototype property of the 'Student' using Object.create() this makes it so that the constructor of 'Student.prototype' is still 'Person'. So we must make sure to set 
     ".prototype.constructor" BACK to 'Student'!!

   Using the code "Student.prototype = Person.prototype" would NOT WORK at creating a prototype chain because it would make them the same object WHICH is why we need Object.create() to create a NEW object and link them in the argument so "Student" can inherit from "Person"!!

   When call cristian.calcAge, we are effectively doing a property or a METHOD LOOKUP. So that is JavaScript trying to find the requested property or method. It has to look up the prototype chain, first checking on the object itself through its prototype then finds it in the 'Person' prototype.

   CONCLUSION: We are now able to call a method that is on the 'Person.prototype' property, on a 
   'Student' instance object, and it still works! YAY PROTOTYPE CHAIN!!
*/

// // PARENT 'Person' CONSTRUCTOR
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // METHOD ON 'Person' PROTOTYPE
// Person.prototype.calcAge = function () {
//   console.log(2020 - this.birthYear);
// };

// // CHILD 'Student' CONSTRUCTOR
// const Student = function (firstName, birthYear, course) {
//   // Person(firstName, birthYear); ERROR=> 'this' = undefined

//   Person.call(this, firstName, birthYear); // Calling constructor 'Person' to connect properties.
//   this.course = course;
// };

// // LINKING PROTOTYPES!
// Student.prototype = Object.create(Person.prototype);

// // SETTING CONSTRUCTOR BACK TO 'Student'
// console.dir(Student.prototype.constructor); // Person(firstName, birthYear)
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor); // Student(firstName, birthYear, course)

// // METHOD ON 'Student' PROTOTYPE
// Student.prototype.introduce = function () {
//   console.log(`Hello, my name is ${this.firstName} and I study ${this.course}`);
// };

// // STUDENT INSTANCE OBJECT !!
// const cristian = new Student("Cristian", 1995, "Computer Science");
// cristian.introduce();
// cristian.calcAge();
// console.log(cristian);

// console.log(cristian.__proto__);
// console.log(cristian.__proto__.__proto__);
// console.log(cristian.__proto__.__proto__.__proto__);

// console.log(cristian.__proto__ === Student.prototype); // TRUE
// console.log(cristian.__proto__.__proto__ === Person.prototype); // TRUE
// console.log(cristian.__proto__.__proto__.__proto__ === Object.prototype); // TRUE

// console.log(cristian instanceof Student); // TRUE
// console.log(cristian instanceof Person); // TRUE
// console.log(cristian instanceof Object); // TRUE

// ******************************************
// Inheritance Between 'Classes': ES6 Classes
// ******************************************

/*
 To implement inheritance between ES6 classes, we only need two ingredients. We need the 'extends' keywords and we need the 'super' function. 

   1. The 'extends' keyword replaces the need to manually set up the prototype chain!

   2. The 'super' keyword is used to access and call functions on an object's parent. (replaces the use of call() method inside constructor functions.) 

 SYNTAX: Always call the super function FIRST because it is responsible for creating the 'this' keyword in its subclass.

 NOTE: If you do not need any new properties, then you don't even need to bother writing a constructor method in the child class.

 REMEMBER: the 'class' syntax hides a lot of the details that are actually happening behind the scenes, because classes are really just a layer of obstruction over constructor function.

 WARNING: "Let me just say that this mechanism of inheritance that we explored here can actually be very problematic and dangerous in the real world when we are designing software." - Jonas
*/

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.firstName}`);
//   }
//   get age() {
//     return 2020 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log("Hey there");
//     console.dir(this);
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course, escape) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//     this.escape = escape;
//   }

//   meeting() {
//     console.log(
//       `Hey, tell me why you're doing this. (white: 'money, same as you')  Nah. Naaah. Some straight like you, with a giant stick up his ass, age what? 50? Your just gonna break bad??`
//     );
//   }

//   calcAge() {
//     console.log(`I have lived in Alaska for ${2020 - this.escape} years now`);
//   }
// }

// const jessie = new Student("Jessie Pinkman", 1984, "Chemistry", 2009);
// console.log(jessie);
// jessie.meeting();
// jessie.calcAge();

// ********************************************
// Inheritance Between 'Classes': Object.create
// ********************************************

/*
 With this way of creating inheritance between objects, we don't need to worry about constructors, prototype properties, and the new operator. So it's really just objects linked to other objects.

 REMEMBER: 

   The call() method: calls a function with a GIVEN 'this' value and arguments provided individually.

   Object.create() creates a NEW OBJECT, and the prototype of the new object will be passed in as an argument. 

 BELOW:
 
   So it all starts with the PersonProto object, which used to be the prototype of all its objects, but now using Object.create, we make it so that PersonProto will actually become the prototype (parent) of StudentProto. SO basically 'student' will in inherit from 'person'.

   Now to finish, all we need to do is to use Object.create again, but this time to create a new actual student object. So 'jay' in this course inherit from StudentProto, which is now jay's prototype.
*/

// const PersonProto = {
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   },
//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };
// console.log(PersonProto, "PERSON");

// const mike = Object.create(PersonProto); // 'Person' becomes new prototype of 'mike'
// mike.init("Mike Stoklasa", 1980, "Film History");
// console.log(mike, "PERSON");

// const StudentProto = Object.create(PersonProto); // 'Person' becomes new prototype of 'Student'
// StudentProto.init = function (fullName, birthYear, course) {
//   PersonProto.init.call(this, fullName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };
// console.log(StudentProto, "STUDENT");

// const jay = Object.create(StudentProto); // 'Student' becomes new prototype of 'Jay'
// jay.init("Jay Bauman", 1981, "Film History");
// console.log(jay, "STUDENT");

// jay.introduce(); // method of prototype 'Student'
// jay.calcAge(); // method of prototype 'Person'
// console.log(jay.hasOwnProperty("fullName")); // method of prototype 'Object'

// *********************
// Another Class Example
// *********************

/*
 BELOW: 

   Know that of course we can create even more properties on any instance, and properties that are not based on any inputs. Like with 'Account.movements' and 'Account.locale'!

   We can even execute any code, inside the constructor, that we want. So below we execute a console.log!

   It's a lot better to create methods that interact with these properties rather than manually manipulate them ourselves. And that is especially true for important properties, like the 'movements' below.

   The withdraw() method below actually ABSTRACTS the fact that a withdrawal is basically a negative movement.The minus, is something that the user of this object, shouldn't be caring about.

   In the real world, in a real bank app, we should NOT be allowed to access the approveLoan() method BECAUSE that kind of data is not safe in a users hand!!.So this is kind of an internal method that only the requestLoan method should be able to use. Which is what is know as ENCAPSULATION.
*/

// class Account {
//   constructor(owner, curren$y, pin) {
//     this.owner = owner;
//     this.curren$y = curren$y;
//     this.pin = pin;

//     // Creating properties w/o inputs
//     this.movements = [];
//     this.locale = navigator.language;

//     // Executing code inside the constructor!
//     console.log(`Thanks for opening an account, ${owner}!`);
//   }

//   // Public Interface (would be)
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//     }
//   }

//   // Private Interface (should be)
//   approveLoan(val) {
//     return true;
//   }
// }

// const cristian = new Account("Cristian", "USD", 1234);
// console.log(cristian);
// cristian.deposit(250);
// cristian.withdrawal(50);
// cristian.requestLoan(1000);
// cristian.approveLoan(1000); //  METHOD SHOULD BE ENCAPSULATED (NOT AVAILABLE TO USER)

// ***********************************************
// Encapsulation: Protected Properties and Methods
// ***********************************************

/*
 Why do we need encapsulation and data privacy?

   1. First it is to prevent code from outside of a class to accidentally manipulate or data inside the class.

   2. Second is that when we expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence. Because then we can be sure that our external code does not rely on these private methods.

   NOTE: JavaScript classes actually DO NOT yet SUPPORT real data privacy and encapsulation. Now there is a proposal to add truly private class fields and methods to the language, but it's not completely ready yet.

 CONVENTION: 

   Because JavaScript does not support real privacy, we will basically FAKE ENCAPSULATION by simply using a convention.

   Protected Properties: Among developers when using the underscore symbol it notifies you and your team that this property is not supposed to be touched outside the class.

   Developers need to know about this convention and need to follow it because otherwise everything will still be public.

 BELOW: 

   If we still wanted to give access to the private property '_movements' from the outside then we would have to implement a public method for that. And 'getMovements()' does exactly that because everyone can still access them without being able to override them!

 REMEMBER: 

   Encapsulation basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class.

   Also the rest of the methods are basically exposed as a public interface, which we can also call API.
*/

// class Account {
//   constructor(owner, curren$y, pin) {
//     this.owner = owner;
//     this.curren$y = curren$y;
//     this.locale = navigator.language;

//     // Protected properties with '_'
//     this._pin = pin;
//     this._movements = [];

//     // Executing code inside the constructor!
//     console.log(`Thanks for opening an account, ${owner}!`);
//   }

//   // Public Interface
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//     }
//   }

//   // Private Interface
//   _approveLoan(val) {
//     return true;
//   }
// }

// const cristian = new Account("Cristian", "USD", 1234);

// cristian.deposit(250);
// cristian.withdrawal(50);
// cristian.requestLoan(1000);
// cristian._approveLoan(1000); //  METHOD IS 'PROTECTED' BUT IS JUST A CONVENTION!

// // These properties can SILL be manually manipulated even though they are 'protected'
// cristian._movements.push(45);
// cristian._movements.push(-45);

// console.log(cristian.getMovements());

// ***********************************************
// Encapsulation: Private Class Fields and Methods
// ***********************************************

/*
 MDN: 
 
   "Both Public and private field declarations are an EXPERIMENTAL FEATURE (stage 3) proposed at TC39, the JavaScript standards committee." - 02/06/2021

   LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

 Why is this proposal actually called Class Fields? 

   In traditional OOP languages like Java and C++, properties are usually called fields. So with this new proposal, JavaScript is attempting to  move away from the idea that classes are just "syntactic sugar" over constructor functions. Because with this new class features classes actually start to have abilities that we didn't previously have with constructor functions.

 This lecture we focus on 4 different fields and methods...
 
   1) Public field: So we can think of a public field as a property that will be on ALL instances. So that's why we can also call this a public instance field. 

   2) Private field: the movements with the '#' are now truly private and no longer accessible outside here. They also they appear only on the instances, not on the prototype.

   3) Public methods: Nothing new, what we have been doing all along when creating methods. These method are just part of the public interface of our class.

   4) Private methods: NOT SUPPORTED by ANY browsers YET. But implemented the same way as a private field, with the '#' symbol.

   NOTE: There are FOUR more different fields but they are the 'static' version of these, so 8 total. So remember that a 'static' method/property is located on the object/class constructor itself! 


 BELOW: 
  
   Keep in mind when creating PUBLIC FIELDS like 'locale' below that there is almost NO DIFFERENCE (in terms of our final object) between creating it in the constructor or as a public field BECAUSE either way the properties are gonna be present on all the instances that we are creating through the class. So they ARE NOT on the prototype AND they still CAN be referenced with the 'this' keyword.

   When creating a PRIVATE FIELD with '#pin' below we have to keep in mind that we CANNOT define a private field in the constructor. And since '#pin' is based on a input value from constructor, we have to declare the 'pin' outside of the constructor. And so this is essentially just like creating an empty variable and then finally initialize the value with the constructor input. 
*/

// class Account {
//   // Public fields (instances)
//   locale = navigator.language;

//   // Private fields (instances)
//   #movements = [];
//   #pin; // <= declared here!!!

//   constructor(owner, curren$y, pin) {
//     this.owner = owner;
//     this.curren$y = curren$y;
//     // Setting a value on a private field
//     this.#pin = pin;

//     console.log(`Thanks for opening an account, ${owner}!`);
//   }

//   // Public Interface/methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//     }
//   }
//   static helper() {
//     console.log(`I am a static public-field method!`);
//   }

//   // Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const cristian = new Account("Cristian", "USD", 1234);
// console.log(cristian);
// console.dir(Account);
// cristian.deposit(250);
// cristian.withdrawal(50);

// // This SHOULD WORK because we accessing them through a public method!
// // cristian.requestLoan(1000); // ERROR => RELIES ON METHOD BELOW
// // cristian.#approveLoan(1000); // ERROR => PRIVATE METHOD IS NOT SUPPORTED YET

// // These properties are FINALLY and TRULY PRIVATE
// // cristian.#movements.push(45); // ERROR
// // cristian.#movements.push(-45); // ERROR
// // console.log(cristian.#movements); // ERROR
// // console.log(cristian.#pin); // ERROR

// console.log(cristian.getMovements());
// Account.helper();
// // cristian.helper(); <= ERROR only exits on the constructor obj 'Account'

// ****************
// Chaining Methods
// ****************

/*
  We can actually implement the same ability of chaining methods, all we have to do is to return the object itself (like with the 'this' keyword) at the end of a method that we want to be chain-able.
*/

// class Account {
//   locale = navigator.language;
//   _movements = [];
//   _pin;
//   constructor(owner, curren$y, pin) {
//     this.owner = owner;
//     this.curren$y = curren$y;
//     this._pin = pin;

//     console.log(`Thanks for opening an account, ${owner}!`);
//   }
//   // RETURNING 'this' allows us to CHAIN METHODS
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//     return this; // <<<<<
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//     return this; // <<<<<
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//     }
//     return this; // <<<<<
//   }
//   static helper() {
//     console.log(`I am a static public-field method!`);
//   }
//   _approveLoan(val) {
//     return true;
//   }
// }
// const cristian = new Account("Cristian", "USD", 1234);

// cristian
//   .deposit(300)
//   .deposit(600)
//   .withdrawal(100)
//   .requestLoan(25000)
//   .withdrawal(17000);
// console.log(cristian._movements);

// *******************
// ES6 Classes Summary
// *******************

/*

 KEEP IN MIND:

   - Classes are really just syntactic sugar over constructor functions.
   - Classes are not hoisted.
   - They are first class citizens.
   - The class body is always executed in strict mode.

 DEFINITIONS AND DESCRIPTIONS:

   The 'new' Operator: Lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

   The 'extends' keyword: placed after the class name of the child and before the 'class' name of the parent will automatically set up the prototype chain for us. 

   The constructor() method: is automatically called by the 'new' operator when ever we create a new instance (object) of the class. And is MANDATORY in a regular class (w/o the 'extends' keyword) and can be OMITTED in a child class (w/ 'extends) if we want the same parameters in name and number.

   The super() method: is called INSIDE of the CONSTRUCTOR, and what it calls is the parent class. And this only necessary when we are writing a child class w/ the 'extends' keyword. Also, in order to access the 'this' keyword the super function MUST be called BEFORE ANYTHING ELSE.

   Instance property: very similar to public fields BUT these properties are based on input data from the constructor. (declared inside the constructor)

 FIELDS: 

   Public field: So we can think of a public field as a property that will be on ALL instances. So that's why we can also call this a public instance field. (declared outside the constructor) 

   Private field: the movements with the '#' are now truly private and no longer accessible from the outside (like accessing it through code like 'property.#private'). They also they appear only on the instances, not on the prototype.

     When creating one remember that we CANNOT define a private field in the constructor. SO if we need a private field to be based on an input we have to declare it outside the constructor and then initialize its value inside. 

   Public methods: Nothing new, what we have been doing all along when creating methods. These method are just part of the public interface of our class.

   Private methods: NOT SUPPORTED by ANY browsers YET. But implemented the same way as a private field, with the '#' symbol.

   Static: There are FOUR more different fields but they are the 'static' version of these, so 8 total. So remember that a 'static' method/property is located on the object/class constructor itself! And they are usually use the static methods as 'helper' methods for the class.

 Getter and Setter: 
 
   The get() method: is basically so that we can get a value out of an object by simply writing a property INSTEAD of writing a method.

   The set() method: so we can set the value using properties and an equal sign INSTEAD of calling a method.

     CONVENTION: Keep in mind that if you have a SETTER for a property that is ALREADY defined in the constructor, then you need to literally create a NEW PROPERTY with the underscore in front of it. And then in the GETTER with the same name, you also need to then RETURN that NEW PROPERTY.
*/

"use strict";

// ***********************************
// What is Object-Oriented Programming
// ***********************************

/*
 What is Object-Oriented Programming?

   - Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.

   - We use objects to model (describe) real-world or abstract features.

   - Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block.

   - In OOP, objects are self-contained pieces/blocks of code.

   - Objects are building blocks of applications, and interact with one another.

   - Interaction happen through a public interface (API): methods that the code outside of the object can acess and use to communicate with the object.

   - OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code").

 Classes and Instances (Traditional OOP)
   
   - In OOP we need a way to generate, to create, new objects from our code. And to do that in traditional OOP, we use something called classes.
  
   - A 'class' in OOP is a blueprint, which can then be used to create new objects based on the rules described in the class.

   - All objects created through a class are called 'instances' of that class. 

      Instantiation: The proccess of creating an instance. (classes creating objects)

   NOTE: An 'instance' is a real object that we can use in our code, which was created from a 'class', and a class itself is not an object.
   

 The 4 Fumdemntal OOP Principle

   1. Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

   2. Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface(API).

   3. Inheritance: Making all properties of a certain class available to a child class, forming a hierarchical relationship between classes. This alows us to reuse common logic and to model real-world relationships.

   4. Polymorphism: A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes]
*/

// *****************
// OOP in Javascript
// *****************

/*
 How does OOP actually work in JS?

   All objects are linke to a prototype object.
   
   Prototypal inheritance: The prototype object contains methods (behavior) and properties that all the objects that are linked to that prototype can access and use.

 In practice, how do we implement OOP?
  
   1. Constructor functions
   - Technique to create objects from a function;
   - This is houw built-in objects like Arrays, Maps or Sets are actually implemented.

   2. ES6 Classes
   - Modern alternative to constructor function syntax;
   - "Syntactic surgar": behind the scenes, ES6 classes work exactly like constuctor functions;
   - ES6 classes do NOT behave like classes in "classical OOP".

   3. Object.create()
   - The easiest and most straight forward way of linking an object to a prototypw object.
*/

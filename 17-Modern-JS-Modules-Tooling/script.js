"use strict";

// ********************************************
// An Overview of Modern JavaScript Development
// ********************************************

/*
 A general high-level overview of modern JavaScript Development...

   History of JS development...
   
     Back in the day, we used to write all our codes into one big script or maybe multiple scripts. But today, we divide our projects into multiple MODULES and these modules can share data between them and make our code more organized and maintainable.

     Now, one great thing about modules is that we can also include 3rd-party modules into our own code. And there are thousands of open source modules, which we also call packages, that developers share on the NPM repository. And we can then use these packages for free in our own code. For example, the popular React framework or jQuery, or even the Leaflet library, that we used before in our Mapty project. All of these packages are available through NPM...
  
   What is NPM?

      Now NPM stands for Node Package Manager, because it was originally developed together with Node.js and for Node.js. However, NPM has established itself as the go to repository for all kinds of packages in Modern JavaScript Development. Now, in order to actually download and use and share packages, we use the NPM software installed on our computer. And this is just a simple command line interface

      So BASICALLY NPM is both the repository in which packages live and a program that we use on our computers to install and manage these packages.

   What is a build process?

     So let's say that we are done writing our project code. So we divided it into multiple modules and we included some 3rd-party modules as well. And so now the development step is complete. However, usually that's not the end of the story...
     
     Instead, our project now needs to go through a build process, where one big final JavaScript bundle is built. And that's the final file, which we will deploy to our web server for production.

     Now, a build process can be something really complex, but we gonna keep it simple here and only include two steps:

       The first step, we'll BUNDLE all our modules together into one big file. This is a pretty complex process which can eliminate unused code and compress or code as well. Now this step is super important for two big reasons. 1. older browsers don't support modules at all and 2. it's better for performance to send less files to the browser, and it's also beneficial that the bundling step compresses our code. 
        
       The second step, we do something called transpiling and polyfilling, which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking. And this is usually done using a tool called BABEL.

   How do we perform this process?

     Now, we do not perform these steps ourselves. Instead, we use a special tool to implement this build process for us. And the most common build tools available, are probably WEBPACK and PARCEL.

       And these are called JavaScript bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle.

     Now Webpack is the more popular one, but it can be really hard and confusing to set it up. So that's because there's a lot of stuff that we need to configure manually, in order to make it work properly. Parcel, on the other hand is a zero configuration bundler, which simply works out of the box.
*/

// ************************************
// An Overview of Modules in JavaScript
// ************************************

/*
 An overview of modules...

   A module is a reusable piece of code that ENCAPSULATES implementation details of a certain part of our project. Now that sounds a bit like a function or even a class, but the difference is that a module is usually a standalone file. (but doesn't have to be)

   A module also has imports and exports:

     With (exports), we can export values out of a module, for example, simple values or even entire functions. And whatever we export from a module is called the public API. So this is just like classes where we can also expose a public API for other codes to consume. Now, in the case of modules, this public API is actually consumed by (importing) values into a module.

     So just like we can export values in modules, we can usually also import values from other modules. And these other modules from which we import are then called "dependencies" of the importing module because the code that is in the module that is importing cannot work without the code, that it is importing from the external module.

 What are the advantages of using modules?

   Compose software: Modules are small building blocks that we put together to build complex applications.
   Isolate components: Modules can be developed in isolation without thinking about the entire codebase.
   Abstract code: Implement low-level code in modules and import these abstractions into modules.
   Organized code: Modules naturally lead to a more organized codebase.
   Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

 Native JavaScript (ES6) Modules...

   As of ES6, JavaScript has a native built-in module system. So ES6 modules are modules that are actually stored in files and each file is one module. well, scripts are usually also files, right?

     NOTE: Now we did have modules before ES6, but we had to implement them ourselves or use external libraries

   Scripts vs. (ES6) Modules...

     1. In modules, all top level variables are scooped to the module. And the only way an outside module can access a value that's inside of a module is by exporting that value. Now in scripts, on the other hand, all top level variables are always global. This can lead to problems like global namespace pollution. So PRIVATE VARIABLES are the solution to this problem.

     2. ES modules are always executed in STRICT MODE while scripts on the other hand are executed in sloppy mode by default. So with modules, there is no more need to manually declare strict mode.
    
     3. The 'this' keyword is always UNDEFINED at the top level while in scripts it points at the window object.
    
     4. What's really special about modules is that we can export and import values between them using this ES6 import and experts syntax. In regular scripts, importing and exporting values is just completely impossible.
      
       Imports and exports can only happen at the top level. So outside of any function or any 'if' block.

       Also all imports are hoisted. So no matter where in a code you're importing values, it's like the import statement will be moved to the top of the file.

     5. In order to LINK A MODULE to an HTML file, we need to use the script tag with the type attribute set to module, instead of just a plain script tag.

     6. And finally, DOWNLOADING the MODULE will always happen automatically in an ASYNCHRONOUS way. And this is true for a module loaded from HTML as well as for modules that are loaded by importing one module into another, using the import syntax. Now regular scripts on the other hand are downloaded by DEFAULT in a blocking synchronous way.
*/

// **************************************
// Exporting and Importing in ES6 Modules
// **************************************

/*
 SYNTAX: './' points to the current location of the file path.
 CONVENTION: In module names it is a convention to use camelCase names.

 In ES modules, there are two types of exports, Named Exports and Default Exports.

   Named Exports is actually the simplest way of exporting something from a module, because all we have to do is to put export in front of anything, that we might want to export. Couple thing we can do with Named Exports are: 

     - Exporting/Importing a single value
     - Exporting/Importing multiple values 
     - Change the name of the Named Exports/Imports
     - Importing everything at same time with the '*' syntax
    
   Default Exports are used when we only want to export ONE per module, and so that's the reason why they are called default.

   NOTE: While you can mix default and named exports in the same line, AVOID that to reduce complexity

 REMEMBER: 

   Imports are not copies of the export. They are instead like a live connection, and so what that means is that I point to the same place in memory
 
   In order to LINK A MODULE to an HTML file, we need to use the script tag with the type attribute set to 'module'.
   
   The exporting module will always be executed BEFORE the importing module. So the cart in this module here is passed, and before it is executed, all the cart in the modules that it imports is executed first.

   All the importing statements are basically hoisted to the top.

   All modules are executed in strict mode by default.

   Variables that are declared inside of a module are actually SCOPED to THAT module. So basically inside a module, the module itself is like the top level scope. And so by default, this means that all top level (global) variables are private inside of this variable.

     If we wanted to use them in the script.js module then we would have to use exports.

*/
/*
// -- EXPORTING MODULE -- This is code from 'shoppingCart.js' --

// Exporting module
console.log(`Exporting module`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity };

export default function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
}
*/

// // Importing module
// // import { addToCart, price, totalQuantity as quantity } from "./shoppingCart.js";
// // addToCart("bread", 5);
// // console.log(price, quantity);

// console.log(`Importing module`);
// // console.log(shippingCost);

// // import * as ShoppingCart from "./shoppingCart.js";
// // ShoppingCart.addToCart("bread", 5);
// // console.log(ShoppingCart.price);

// //=> You can mix default and named exports
// // import add, { addToCart, price, totalQuantity as quantity} from "./shoppingCart.js";
// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 4);

// console.log(cart);

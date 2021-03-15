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

// ******************
// The Module Pattern
// ******************

/*
 What is the Module Pattern?

   It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope. (Pre-ES6 Modules)

     The main goal of the module pattern is to encapsulate functionality, to hide private data, and to expose a public API.

     The best way of achieving all that is by simply using a function, because functions give us private data by default (via scopes and closures) and allow us to return values, which can become our public API.

 How do we implement it exactly?

   Usually we write an IIFE, and the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once.

   It is very important that this function is only created once because the goal of this function is not to reuse code by running it multiple times.

     * The only purpose of these function is to create a new scope and return data just once.

 Modules Pattern vs. ES6 Modules

   The problem with the module pattern is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file. 
   
     That then creates a couple of problems, like we have to be careful with the order in which we declare them in HTML, and we would have all of the variables living in the global scope, and finally, we also couldn't bundle them together using a module bundler (Parcel).

 REMEMBER: 
 
   Closures allow a function to have access to all the variables that were present at its birthplace.

 BELOW:

   We created an IIFE with all of its data private to its scope UNTIL we 'return' some of it in order to basically return a public API. (addToCart,cart,totalPrice,totalQuantity)

   In order to store that returned public value we assign the IFFE to a new variable. ('ShoppingCart2')
*/

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const shippingCost = 10; //=> Private because NOT returned

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping costs is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   // Our Public API
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart("apple", 2);
// ShoppingCart2.addToCart("pizza", 4);
// console.log(ShoppingCart2); //=> shows our public API
// console.log(ShoppingCart2.shippingCost); //=> undefined

// *****************
// CommonJS Modules
// *****************

/*
 Are there other types of modules?

   Yes, besides native ES Modules, and the module pattern, there are also other module systems, that have been used by JavaScript in the past. But they are not native JavaScript. An example is commonJS..

 What is CommonJS?

   CommonJS is a module formatting system. CJS assists in the server-side development of apps and it’s format has heavily influenced NodeJS module management.

   Now CommonJS modules are important for us because they have been used in Node.js for almost all of its existence. So only until very recently ES6 Modules have actually been implemented in Node.js.

     Now the big consequence of this, is that almost all the modules, in the npm repository, that we can use in our own code, still use the CommonJS module system. (npm was originally only intended for node)

 How do you use CommonJS?
  
   CommonJS wraps each module in a function called ‘require’, and includes an object called ‘module.exports’, which exports code for availability to be required by other modules. 

   NOTE: so just like ES6 modules, in CommonJS, one file, is one module.

 REMEMBER: Node.js is a way of running JavaScript on a web server, outside of a browser.
*/

// -- DOES NOT WORK IN THE BROWSER -- //

// // Export
// export.addToCart =  function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart (shipping costs is ${shippingCost})`
//       );
//     };

// // Import
// const {addToCart} = require('./shoppingCart.js');

// ****************************************
// A Brief Introduction to the Command Line
// ****************************************

/*
 Commands in terminal --BASH--

   // LIST
   "ls" - list the contents of the current folder.

   // CHANGE FILE PATH
   "cd _file" - changes directory.
   "cd .." - moves up once in the file tree.
   "cd ../.." - moves up up file tree twice.

   // CREATE DIRECTORY
   "mkdir _folder" - create folder.

   // DELETE DIRECTORY
   "rmdir _folder" - deletes EMPTY directories.
   "rm -R _folder" - (R stands for recursive, deletes all files in dir then dir itself)

   // CREATE FILES
   "touch _file" - create file.
   "touch _file _file" - create multiple files.

   // DELETE FILES
   "rm _file" - delete file.
   "rm _file _file" - delete multiple files.
   "mv _file _folder" - move file to different directory

   // EXTRA
   "clear" - clears console.

 TIP: Use 'tab' to auto complete long file names.
*/

// *******************
// Introduction to NPM
// *******************

/*
 What is NPM again?

   NPM stands for Node Package Manager, and it's both a software on our computer and a package repository.

     So first and foremost, it is an online repository for the publishing of open-source Node.js projects.

     Second, it is a CLI tool that aids you install those packages and manage their versions and dependencies.

 Why do we need NPM?

   A way to manage our dependencies in a better and more modern way. And NPM is exactly how we do that.

 What are dependencies?

   A dependency is essentially some third-party code that your application depends on. But specifically it is a property of the module package.json and it is where other modules used by the package.json are defined.
 
 What is a devDependency?

   A devDependency is basically like a tool that we need to BUILD our application. But it's not a dependency that we actually include in our code.  it's simply a tool. And so that's why it's called a devDependency because we can use it to develop our project. Ex: React, Redux, Express, and Axios.
  
   dependencies vs. devDependencies

     The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. 

 How do we use NPM?

   First, in each project in which we want to use NPM, we need to start by initializing it. And so for that, we write "npm init".

   Then, this creates a package.json file that you'll need to fill out with details on your project. This package.json describes our module, and in it we can see a list of all installed dependencies that we have installed and added to our project.

   When you install a package three thing will happen:
   
     First: package.json will have a new field "dependencies" with the name of the new package in it. 
     Second: a folder is created containing all the code of the installed package called node_modules.
     Third: a package-lock.json file is created. 

   Differences between package.json and package-lock.json?

     The package.json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock.json is solely used to lock dependencies to a specific version number.  

   IMPORTANT: When you copy your project to somewhere else, there is NO REASON to include this huge node modules folder, because in a real project, it will actually be really, really huge. INSTEAD delete the node_modules folder, and then re-download it by using just "npm i".

   NPM COMMANDS:

     "npm -v" - current version of node.
     "npm init" - Initializes npm and creates package.json. 
     "npm init -y" - Initializes empty project without survey.
     "npm i" - reinstalls all dependencies. 
     "npm i _package" - installs an NPM package.
     "npm i _package _package" - install multiple NPM packages.
     "npm i _package -g" - installs package globally.
     "npm i _package --save-dev" installs devDependency.
     "npm uninstall _package" - uninstalls package.
     "npm run _script" - runs a command defined in the package.json 'script' object.

     NOTE: As of npm 5.0.0, installed modules are added as a dependency by default, so the "--save" option is no longer needed. This "--save" option instructed NPM to include the package inside of the dependencies section of your package.json automatically

 REMEMBER: The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
*/

// // Importing from NPM package
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// // Creating a nested object
// const state = {
//   cart: [
//     { product: "bread", quantity: 5 },
//     { product: "butter", quantity: 2 },
//   ],
//   user: { loggedIn: true },
// };

// // Created a FULL clone
// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone); // => true

// // Created a SHALLOW clone
// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;

// console.log(stateClone); //=> false
// console.log(stateDeepClone); //=> STILL true

// ************************************
// Bundling with Parcel and NPM Scripts
// ************************************

/*
 What is Parcel again?

   Parcel is a module bundler. It is a tool hat takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser.

   NOTE: Since Parcel, when it bundles, creates a script we DO NOT use the 'module' attribute in our html script tag..

 How do we use Parcel in the console?

   Two ways of running a locally installed packages in the command line...
   
     NPM 'scripts': Is the "scripts" property of your package.json file. They scripts defined in the package.json 'script' object. We use them with npm command "npm run _script"

     NPX: The npx stands for Node Package Execute and it comes with npm. NPX is CLI tool that makes Node.js based executions easier than creating and implementing npm 'scripts'. Also it allows you to execute a package that wasn’t previously installed. The parcel command WITH npx would be "npx parcel _targetFile"

 What happens when we run Parcel?
  
   It creates the directory 'dist' (distributable) because it's the code in this folder that we will send to our final users. It contains a copy of all the modules we selected to import and when run it creates a larger file to compress.

   Parcel also has a development server built in (like live-server), which will automatically rebuild your app as you change files and supports hot module replacement for fast development. Point it at your entry file...

   NOTE: When using Parcel and importing modules, we do not need to specify the ENTIRE path. We can just specify the directory that contains the code we would like to import and Parcel will then automatically find the path to this module. This works with all kinds of assets. So even with HTML or CSS or SAS files, or even images, and of course also all kinds of modules. So not only ESX modules, but this is also going to work with CommonJS modules.

 Globally and locally installed packages...

   A big DIFFERENCE between globally and locally installed packages and especially these tools like Parcel or live server, is that we can use the global tools directly in the command line without the intermediate step of an NPM script. However, most of these tools actually ADVISE developers to always install the tools LOCALLY so that they can always stay on the latest version.

 What is Hot Module Replacement?

   Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh.

 BELOW: 
 
   Using Parcel is to bundle these three modules together. So 'script.js' together with 'shoppingCart.js' and together with this 'cloneDeep' from lodash.

   Deleted created files in lesson (to big for Github) to get back run:

     1. "npm i"
     2. "npm run dev" or "npx parcel index.html"
     3. "npm run build"
*/

// // USING PARCEL TO BUNDLE OUR CODE!
// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 4);

// console.log(cart);

// // import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash-es";

// const state = {
//   cart: [
//     { product: "bread", quantity: 5 },
//     { product: "butter", quantity: 2 },
//   ],
//   user: { loggedIn: true },
// };

// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone); // => true

// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;

// console.log(stateClone); //=> false
// console.log(stateDeepClone); //=> STILL true

// // Implementing "Hot Module Replacement"
// if (module.hot) {
//   module.hot.accept();
// }

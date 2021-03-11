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

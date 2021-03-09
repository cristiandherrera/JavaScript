"use strict";

// *******************
// Coding Challenge #1
// *******************

/* 
 In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

 PART 1

   1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

   2. Do 'reverse geocoding' of the provided coordinates. (Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.) Use this API to do reverse geocoding: https://geocode.xyz/api.

   The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉

   3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'

   4. Chain a .catch method to the end of the promise chain and log errors to the console

   5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

 PART 2
 
   6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

   7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

 TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
 TEST COORDINATES 2: 19.037, 72.873
 TEST COORDINATES 2: -33.933, 18.474
*/

// // MY OWN helper function (handles status errors)
// const myJSON = function (url, errorMsg = "What the heck went wrong?") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`STATUS (${response.status})`);
//     return response.json();
//   });
// };

// const whereAmI = function (lat, lng) {
//   myJSON(
//     `https://geocode.xyz/${lat},${lng}?geoit=json`,
//     "Not valid coordinates"
//   )
//     .then((data) => {
//       console.log("GEOCODE", data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return myJSON(
//         `https://restcountries.eu/rest/v2/name/${data.country}`,
//         "No country found"
//       );
//     })
//     .then((data) => {
//       console.log("REST", data);
//       const neighbor = data[0].borders[0];
//       renderCountry(data[0]);

//       if (!neighbor) throw new Error(`No neighbor found!`);

//       return myJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then((data) => {
//       console.log("CODE", data);
//       renderCountry(data, "neighbour");
//     })
//     .catch((error) => console.error(`${error.message}, HANDLING OUR ERROR`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", function () {
//   whereAmI(52.508, 13.381); // Berlin
//   // whereAmI(19.037, 72.873); // Mumbai
//   // whereAmI(-33.933, 18.474); // Cape Town
// });

// *******************
// Coding Challenge #2
// *******************

/* 
 Build the image loading functionality that I just showed you on the screen.

 Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

 PART 1

   1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

 If this part is too tricky for you, just watch the first part of the solution.

 PART 2  

   2. Consume the promise using .then and also add an error handler;
   3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
   4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
   5. After the second image has loaded, pause execution for 2 seconds again;
   6. After the 2 seconds have passed, hide the current image.

 TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
*/

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found."));
    });
  });
};

let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("1 image loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("2 image loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));

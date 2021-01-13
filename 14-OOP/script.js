"use strict";

// free code camp

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }

  return "Not Found";
  // Only change code above this line
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

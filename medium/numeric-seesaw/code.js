const { parse } = require("@babel/core");

function seesaw(num) {
  let numL = num + "";
  let numLength = null;
  if (numL.length % 2 === 0) {
    numLength = numL.length;
  } else {
    numLength = numL.length - 1;
  }
  const numString = numLength + "";
  let left = "";
  let right = "";
  for (let i = 0; i < numLength / 2; i++) {
    left += numString[i]
  }
  for (let i = numL.length - 1; i > numLength / 2; i--) {
    right += numString[i];
  }
  left = parseInt(left);
  right = parseInt(right);
  console.log(left, right);
  if (left > right) {
    return "left";
  } else  if (left < right) {
    return "right";
  } else {
    return "balanced";
  }
}

module.exports = seesaw;

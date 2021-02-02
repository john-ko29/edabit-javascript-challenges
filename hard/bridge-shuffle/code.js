function bridgeShuffle(arr1, arr2) {
  const shuffled = [];
  let arrLength = null;
  if (arr1.length > arr2.length) {
    arrLength = arr1.length;
  } else {
    arrLength = arr2.length;
  }
  for (let i = 0; i < arrLength; i++) {
    if (arr1.length) {
      shuffled.push(arr1.shift());
    }
    if (arr2.length) {
      shuffled.push(arr2.shift());
    }
  }

  return shuffled;
}

module.exports = bridgeShuffle;

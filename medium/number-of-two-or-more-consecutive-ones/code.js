function countOnes(arr) {
  let count = 0;
  let inARow = 0;
  let current = null;
  for (let i = 0; i < arr.length; i++) {
    if (current !== arr[i]) {
      current = arr[i];
      inARow = 1;
    } else if (current === arr[i] && arr[i] === 1) {
      inARow++;
      if (inARow === 2) {
        count++;
      }
    }
  }
  return count;
}

module.exports = countOnes;

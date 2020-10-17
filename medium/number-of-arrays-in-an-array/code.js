function numOfSubbarrays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      count++;
    }
  }
  return count;
}

module.exports = numOfSubbarrays;

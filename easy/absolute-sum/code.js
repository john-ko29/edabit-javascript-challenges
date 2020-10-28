function getAbsSum(arr) {
  let absSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      absSum += (arr[i] * -1);
    } else {
      absSum += arr[i]
    }
  }
  return absSum
}

module.exports = getAbsSum;
